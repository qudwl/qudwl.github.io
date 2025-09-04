import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/inter"
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/900.css";
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
