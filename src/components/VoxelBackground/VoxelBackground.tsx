import { useEffect, useRef } from 'react'
import { createNoise2D } from 'simplex-noise'
import * as THREE from 'three'
import styles from './VoxelBackground.module.scss'

const GRID_X = 100
const GRID_Z = 100
const VOXEL_COUNT = GRID_X * GRID_Z
const SPACING = 0.95
const VOXEL_SIZE = 0.85
const BASE_HEIGHT = 2.4

const vertexShader = `
  attribute float aElevation;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying float vElevation;

  void main() {
    vElevation = aElevation;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying float vElevation;

  uniform vec3 uSideBaseColor;
  uniform vec3 uSideSpecColor;
  uniform vec3 uTopDarkColor;
  uniform vec3 uTopBrightColor;
  uniform vec3 uLightDirection;

  uniform vec3 uFogColor;
  uniform float uFogNear;
  uniform float uFogFar;

  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewPosition);
    vec3 L = normalize(uLightDirection);

    // Identify top face of box (local normal facing +Y)
    float topMask = smoothstep(0.65, 0.95, N.y);

    // High-key white directional shading on sides (min 88% brightness)
    float diff = max(dot(N, L), 0.0);
    vec3 R = reflect(-L, N);
    float spec = pow(max(dot(R, V), 0.0), 32.0) * 0.15;
    vec3 sideColor = uSideBaseColor * (0.88 + 0.12 * diff) + uSideSpecColor * spec;

    // Soft white top face elevation shading
    float elevNorm = clamp(vElevation, 0.0, 1.0);
    float glowFactor = pow(elevNorm, 1.1);
    vec3 topColor = mix(uTopDarkColor, uTopBrightColor, glowFactor);

    // Subtle highlight boost for wave peaks
    if (glowFactor > 0.65) {
      topColor += vec3(0.08) * ((glowFactor - 0.65) / 0.35);
    }

    vec3 finalColor = mix(sideColor, topColor, topMask);

    // Soft distance fog blending edges seamlessly into white background
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = smoothstep(uFogNear, uFogFar, depth);
    vec3 colorWithFog = mix(finalColor, uFogColor, fogFactor);

    gl_FragColor = vec4(colorWithFog, 1.0);
  }
`

const VoxelBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const canvas = canvasRef.current

    // 1. Scene, Camera, Renderer (Pure White Background)
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      300,
    )
    camera.position.set(0, 22, 34)
    camera.lookAt(0, -3, -5)

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    // 2. Geometry & InstancedMesh setup
    const geometry = new THREE.BoxGeometry(VOXEL_SIZE, BASE_HEIGHT, VOXEL_SIZE)
    const elevations = new Float32Array(VOXEL_COUNT)
    const elevationAttribute = new THREE.InstancedBufferAttribute(elevations, 1)
    geometry.setAttribute('aElevation', elevationAttribute)

    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uSideBaseColor: { value: new THREE.Color('#f4f4f7') },
        uSideSpecColor: { value: new THREE.Color('#ffffff') },
        uTopDarkColor: { value: new THREE.Color('#ededf0') },
        uTopBrightColor: { value: new THREE.Color('#ffffff') },
        uLightDirection: {
          value: new THREE.Vector3(0.5, 1.0, 0.8).normalize(),
        },
        uFogColor: { value: new THREE.Color('#ffffff') },
        uFogNear: { value: 15.0 },
        uFogFar: { value: 55.0 },
      },
    })

    const mesh = new THREE.InstancedMesh(geometry, shaderMaterial, VOXEL_COUNT)

    // 3. Grid Coordinates Initialization (100x100 Grid)
    const dummy = new THREE.Object3D()
    const voxelPositions: { x: number; z: number }[] = new Array(VOXEL_COUNT)

    const halfX = (GRID_X * SPACING) / 2
    const halfZ = (GRID_Z * SPACING) / 2

    let index = 0
    for (let i = 0; i < GRID_X; i++) {
      for (let j = 0; j < GRID_Z; j++) {
        const x = (i + 0.5) * SPACING - halfX
        const z = (j + 0.5) * SPACING - halfZ
        voxelPositions[index] = { x, z }

        dummy.position.set(x, 0, z)
        dummy.updateMatrix()
        mesh.setMatrixAt(index, dummy.matrix)
        index++
      }
    }

    mesh.instanceMatrix.needsUpdate = true
    scene.add(mesh)

    // 4. Perlin Noise & Reduced Motion Media Query Setup
    const noise2D = createNoise2D()
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let prefersReducedMotion = mediaQuery.matches

    const MIN_Y = 0.1
    const MAX_Y = 2.0

    // Updates 3D voxel transform matrix and elevation attributes
    const updateVoxels = (time: number) => {
      for (let i = 0; i < VOXEL_COUNT; i++) {
        const { x, z } = voxelPositions[i]

        const n1 = noise2D(x * 0.045 + time * 0.35, z * 0.045 + time * 0.25)
        const n2 = noise2D(x * 0.09 - time * 0.2, z * 0.09 + time * 0.3) * 0.4
        const s1 = Math.sin(x * 0.07 + z * 0.07 + time * 1.2) * 0.5
        const yWave = (n1 + n2 + s1 + 1.2) * 0.65

        const clampedY = THREE.MathUtils.clamp(yWave, MIN_Y, MAX_Y)
        const normalizedElev = (clampedY - MIN_Y) / (MAX_Y - MIN_Y)
        elevations[i] = normalizedElev

        dummy.position.set(x, clampedY / 2.0, z)
        dummy.scale.set(1.0, clampedY / BASE_HEIGHT, 1.0)
        dummy.updateMatrix()
        mesh.setMatrixAt(i, dummy.matrix)
      }

      mesh.instanceMatrix.needsUpdate = true
      elevationAttribute.needsUpdate = true
    }

    // Render initial frame
    updateVoxels(0)
    renderer.render(scene, camera)

    // 5. Animation Loop
    let lastTime = performance.now()
    let elapsedTime = 0

    const animate = (now: number) => {
      // Respect prefers-reduced-motion: skip animation updates when reduced motion is preferred
      if (prefersReducedMotion) return

      const delta = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now
      elapsedTime += delta

      updateVoxels(elapsedTime)
      renderer.render(scene, camera)
    }

    renderer.setAnimationLoop(animate)

    // Media Query listener for OS reduced motion preference change
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches
      if (prefersReducedMotion) {
        updateVoxels(0)
        renderer.render(scene, camera)
      }
    }
    mediaQuery.addEventListener('change', handleMotionChange)

    // 6. Window Resize Handler
    const handleResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(w, h)
      if (prefersReducedMotion) {
        renderer.render(scene, camera)
      }
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      renderer.setAnimationLoop(null)
      mediaQuery.removeEventListener('change', handleMotionChange)
      window.removeEventListener('resize', handleResize)

      geometry.dispose()
      shaderMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  )
}

export default VoxelBackground
