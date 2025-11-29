/**
 * Application Entry Point
 * This file initializes and renders the React application
 */

// Import StrictMode wrapper for highlighting potential problems in development
import { StrictMode } from 'react'
// Import createRoot from React 18's new client rendering API
import { createRoot } from 'react-dom/client'
// Import global styles
import './index.css'
// Import the root App component
import App from './App.jsx'

/**
 * Initialize and render the React application
 * 
 * createRoot: React 18's new API for rendering
 * - Enables concurrent features and automatic batching
 * - More efficient than the legacy ReactDOM.render
 * 
 * StrictMode: Development-only wrapper that:
 * - Warns about deprecated APIs
 * - Detects unexpected side effects
 * - Highlights potential problems
 * - Has no impact on production builds
 * 
 * Renders into the HTML element with id="root" (found in index.html)
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
