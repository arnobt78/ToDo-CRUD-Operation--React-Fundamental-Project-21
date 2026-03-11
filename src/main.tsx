/**
 * Application entry point. Mounts the React app into the DOM.
 * StrictMode helps surface side-effect and deprecation issues in development.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// #root is the mount node defined in index.html
const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element not found')

// createRoot (React 18+) replaces the legacy ReactDOM.render API
createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
