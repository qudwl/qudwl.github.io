import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', './.storybook/main.ts'] },
);