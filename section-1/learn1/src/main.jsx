/**
 * Application Entry Point
 * 
 * This file initializes and renders the React application.
 * Uses React 18's createRoot API for concurrent features.
 */

// Import StrictMode for development-time checks
import { StrictMode } from 'react'
// Import React 18's createRoot API
import { createRoot } from 'react-dom/client'
// Import global styles
import './index.css'
// Import the root App component
import App from './App.jsx'

/**
 * Render the application
 * 
 * createRoot (React 18+):
 * - Enables concurrent rendering features
 * - Better performance through automatic batching
 * - Replaces the legacy ReactDOM.render
 * 
 * StrictMode:
 * - Development-only wrapper (no effect in production)
 * - Highlights potential problems:
 *   - Unsafe lifecycle methods
 *   - Deprecated APIs
 *   - Unexpected side effects
 * - Intentionally double-invokes effects in development
 *   (helps catch bugs with cleanup functions)
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
