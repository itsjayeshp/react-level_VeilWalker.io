// Import application styles
import './App.css'
// Import the main CurrencyConverter component
import CurrencyConverter from './components/CurrencyConverter'

/**
 * Main App Component
 * 
 * Root component that sets up the application layout and structure.
 * This is a simple wrapper that provides the header and main content area.
 * 
 * Component Structure:
 * - Header: Displays the application title
 * - Main: Contains the CurrencyConverter component which handles all conversion logic
 */
function App() {
  return (
    <div className="App">
      {/* Application header with title */}
      <header className="App-header">
        <h1>React Currency Converter</h1>
      </header>

      {/* Main content area - contains the currency converter functionality */}
      <main>
        <CurrencyConverter />
      </main>
    </div>
  )
}

// Export App as default export to be used in main.jsx
export default App
