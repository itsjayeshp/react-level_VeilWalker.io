import { useState, useEffect, useCallback } from 'react';
import { currencyApi } from '../services/currencyApi';
import { currencyUtils } from '../utils/currencyUtils';

/**
 * Custom React hook for managing currency conversion
 * 
 * @param {number} initialAmount - Starting amount to convert (default: 1)
 * @param {string} initialFromCurrency - Initial source currency code (default: 'USD')
 * @param {string} initialToCurrency - Initial target currency code (default: 'EUR')
 * @returns {Object} Currency converter state and control functions
 * 
 * Features:
 * - Manages conversion state (amount, currencies, results)
 * - Automatically converts on any input change
 * - Validates amounts before conversion
 * - Handles same-currency early return optimization
 * - Provides formatted currency strings ready for display
 * - Includes swap functionality to reverse currencies
 */
export const useCurrencyConverter = (
    initialAmount = 1,
    initialFromCurrency = 'USD',
    initialToCurrency = 'EUR'
) => {
    // ============ STATE MANAGEMENT ============

    // Source amount entered by user
    const [amount, setAmount] = useState(initialAmount);

    // Source currency code (e.g., 'USD', 'EUR')
    const [fromCurrency, setFromCurrency] = useState(initialFromCurrency);

    // Target currency code for conversion
    const [toCurrency, setToCurrency] = useState(initialToCurrency);

    // Calculated result after conversion
    const [convertedAmount, setConvertedAmount] = useState(0);

    // Loading state during API calls
    const [loading, setLoading] = useState(false);

    // Error message if conversion fails
    const [error, setError] = useState(null);

    // ============ CONVERSION LOGIC ============

    /**
     * Performs currency conversion with validation and error handling
     * Memoized with useCallback to prevent unnecessary re-renders
     * 
     * @param {number} amountToConvert - Amount to convert (defaults to current amount)
     * @param {string} sourceCurrency - Source currency (defaults to current fromCurrency)
     * @param {string} targetCurrency - Target currency (defaults to current toCurrency)
     * 
     * Flow:
     * 1. Validates the amount is a positive number
     * 2. Checks if source and target are the same (early return optimization)
     * 3. Calls the API to perform conversion
     * 4. Updates state with result or error
     */
    const convertCurrency = useCallback(async (
        amountToConvert = amount,
        sourceCurrency = fromCurrency,
        targetCurrency = toCurrency
    ) => {
        // Validate amount is a valid positive number
        if (!currencyUtils.validateAmount(amountToConvert)) {
            setError('Invalid amount');
            return;
        }

        // Optimization: if converting to same currency, just return the same amount
        if (sourceCurrency === targetCurrency) {
            setConvertedAmount(amountToConvert);
            setError(null);
            return;
        }

        // Perform API conversion
        try {
            setLoading(true);
            setError(null);

            // Call API to convert currency
            const result = await currencyApi.convertCurrency(
                amountToConvert,
                sourceCurrency,
                targetCurrency
            );

            setConvertedAmount(result);
        } catch (err) {
            // Handle any API or network errors
            setError(err.message);
        } finally {
            // Always stop loading, regardless of success or failure
            setLoading(false);
        }
    }, [amount, fromCurrency, toCurrency]);

    // ============ AUTO-CONVERSION EFFECT ============

    /**
     * Automatically trigger conversion whenever dependencies change
     * This ensures the converted amount stays in sync with user inputs
     */
    useEffect(() => {
        convertCurrency();
    }, [convertCurrency]); // Re-run when convertCurrency changes (which happens when amount/currencies change)

    // ============ HELPER FUNCTIONS ============

    /**
     * Swaps the from and to currencies
     * Does NOT swap amounts - keeps the current input amount
     * This allows users to quickly reverse the direction of conversion
     */
    const swapCurrencies = () => {
        // Swap the currency codes
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        // Note: We keep the current amount as-is, rather than using convertedAmount
        // This is more intuitive - users expect to see their input preserved
    };

    // ============ FORMATTED VALUES ============

    // Pre-formatted strings for display (e.g., "$123.45", "€85.00")
    const formattedSourceAmount = currencyUtils.formatCurrency(amount, fromCurrency);
    const formattedTargetAmount = currencyUtils.formatCurrency(convertedAmount, toCurrency);

    // ============ RETURN API ============

    /**
     * Returns all state and control functions needed by components
     */
    return {
        // Raw values
        amount,                      // Source amount as number
        fromCurrency,                // Source currency code
        toCurrency,                  // Target currency code
        convertedAmount,             // Result as number

        // State setters (for controlled inputs)
        setAmount,                   // Update source amount
        setFromCurrency,             // Update source currency
        setToCurrency,               // Update target currency

        // Loading and error states
        loading,                     // Boolean: is conversion in progress?
        error,                       // String: error message or null

        // Actions
        swapCurrencies,              // Function: swap from/to currencies
        convertCurrency,             // Function: manual conversion trigger

        // Pre-formatted display values
        formattedSourceAmount,       // Formatted source (e.g., "$123.45")
        formattedTargetAmount,       // Formatted result (e.g., "€85.00")
    };
};