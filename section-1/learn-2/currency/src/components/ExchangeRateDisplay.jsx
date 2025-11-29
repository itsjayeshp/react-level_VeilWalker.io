// Import React library
import React from 'react';
// Import custom hook for fetching exchange rates
import { useExchangeRates } from '../hooks';

/**
 * ExchangeRateDisplay Component
 * 
 * Displays the current exchange rate between two currencies in both directions.
 * Uses the useExchangeRates hook to fetch live rates from the API.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.baseCurrency - The base currency code (e.g., 'USD')
 * @param {string} props.targetCurrency - The target currency code (e.g., 'EUR')
 * 
 * Display Format:
 * - Shows direct rate: "1 USD = 0.85 EUR"
 * - Shows inverse rate: "1 EUR = 1.1765 USD"
 * 
 * States Handled:
 * - Loading: Shows "Loading rates..." message
 * - Error: Displays error message
 * - Rate not available: Shows fallback message
 * - Success: Displays both rate directions
 * 
 * @example
 * <ExchangeRateDisplay 
 *   baseCurrency="USD" 
 *   targetCurrency="EUR" 
 * />
 */
const ExchangeRateDisplay = ({ baseCurrency, targetCurrency }) => {
    // ============ HOOK INTEGRATION ============

    /**
     * Fetch exchange rates using the base currency
     * Hook automatically refetches when baseCurrency changes
     */
    const { rates, loading, error, getRate } = useExchangeRates(baseCurrency);

    // ============ CONDITIONAL RENDERING ============

    // Show loading indicator while fetching rates
    if (loading) {
        return <div className="exchange-rate loading">Loading rates...</div>;
    }

    // Show error message if API call failed
    if (error) {
        return <div className="exchange-rate error">Error: {error}</div>;
    }

    // Get the specific exchange rate for the target currency
    const rate = getRate(targetCurrency);

    // Handle case where rate is not available in the fetched data
    if (!rate) {
        return <div className="exchange-rate">Rate not available</div>;
    }

    // ============ SUCCESSFUL RENDER ============

    return (
        <div className="exchange-rate">
            {/* Direct exchange rate: base → target */}
            <p>
                1 {baseCurrency} = {rate.toFixed(4)} {targetCurrency}
            </p>

            {/* Inverse exchange rate: target → base */}
            {/* Calculated as 1/rate to show the reverse conversion */}
            <p className="exchange-rate__inverse">
                1 {targetCurrency} = {(1 / rate).toFixed(4)} {baseCurrency}
            </p>
        </div>
    );
};

// Export as default for easier importing
export default ExchangeRateDisplay;