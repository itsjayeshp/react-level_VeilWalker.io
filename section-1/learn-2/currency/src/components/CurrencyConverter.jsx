// Import React library
import React from 'react';
// Import custom hook for currency conversion logic
import { useCurrencyConverter } from '../hooks';
// Import child components
import CurrencySelector from './CurrencySelector';
import ExchangeRateDisplay from './ExchangeRateDisplay';
// Import utility functions
import { currencyUtils } from '../utils/currencyUtils';

/**
 * CurrencyConverter Component
 * 
 * Main component that provides the complete currency conversion interface.
 * This is a smart component that manages conversion state via the useCurrencyConverter hook
 * and delegates rendering to child components (CurrencySelector, ExchangeRateDisplay).
 * 
 * Component Structure:
 * - Title heading
 * - Amount input field with currency symbol
 * - Currency selector pair (From/To) with swap button
 * - Conversion result display
 * - Live exchange rate information
 * 
 * Features:
 * - Real-time currency conversion as user types
 * - Swap functionality to reverse currencies
 * - Loading and error state handling
 * - Formatted currency display
 */
const CurrencyConverter = () => {
    // ============ HOOK INTEGRATION ============

    /**
     * Destructure all needed values and functions from the custom hook
     * The hook manages all conversion logic, state, and API calls
     */
    const {
        amount,                       // Current input amount (number)
        setAmount,                    // Function to update amount
        fromCurrency,                 // Source currency code
        setFromCurrency,              // Function to update source currency
        toCurrency,                   // Target currency code
        setToCurrency,                // Function to update target currency
        convertedAmount,              // Calculated result (number)
        loading,                      // Is conversion in progress?
        error,                        // Error message or null
        swapCurrencies,               // Function to swap from/to currencies
        formattedSourceAmount,        // Formatted source amount (string)
        formattedTargetAmount,        // Formatted result (string)
    } = useCurrencyConverter();

    // ============ EVENT HANDLERS ============

    /**
     * Handles amount input changes
     * Parses the input value to a float and updates state
     * Defaults to 0 if input is invalid (e.g., empty string)
     * 
     * @param {Event} e - Input change event
     */
    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value) || 0;
        setAmount(value);
    };

    // ============ RENDER ============

    return (
        <div className="currency-converter">
            {/* Component title */}
            <h2>Currency Converter</h2>

            {/* Input Section: Amount and Currency Selection */}
            <div className="converter-inputs">

                {/* Amount Input Field */}
                <div className="input-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        min="0"                    // Prevent negative amounts
                        step="0.01"                // Allow decimal inputs
                        className="amount-input"
                        aria-label="Amount to convert"
                    />
                    {/* Display currency symbol inside input (e.g., $, €, £) */}
                    <span className="currency-symbol">
                        {currencyUtils.getCurrencySymbol(fromCurrency)}
                    </span>
                </div>

                {/* Currency Selector Section */}
                <div className="currency-selectors">
                    {/* Source Currency Selector */}
                    <CurrencySelector
                        label="From"
                        value={fromCurrency}
                        onChange={setFromCurrency}
                    />

                    {/* Swap Button - Reverses from/to currencies */}
                    <button
                        onClick={swapCurrencies}
                        className="swap-button"
                        type="button"
                        aria-label="Swap currencies"
                        title="Swap currencies"
                    >
                        ⇄
                    </button>

                    {/* Target Currency Selector */}
                    <CurrencySelector
                        label="To"
                        value={toCurrency}
                        onChange={setToCurrency}
                    />
                </div>
            </div>

            {/* Conversion Result Section */}
            <div className="conversion-result">
                {/* Show loading state during API call */}
                {loading && <div className="loading">Converting...</div>}

                {/* Show error if conversion failed */}
                {error && <div className="error">Error: {error}</div>}

                {/* Show result when not loading and no errors */}
                {!loading && !error && (
                    <div className="result">
                        <strong>{formattedTargetAmount}</strong>
                    </div>
                )}
            </div>

            {/* Live Exchange Rate Display */}
            <ExchangeRateDisplay
                baseCurrency={fromCurrency}
                targetCurrency={toCurrency}
            />
        </div>
    );
};

// Export as default for easier importing
export default CurrencyConverter;