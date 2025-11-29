
import { useState, useEffect } from 'react';
// Import the currency API service for fetching exchange rates
import { currencyApi } from '../services/currencyApi';

/**
 * Custom React hook for fetching and managing exchange rates
 * 
 * @param {string} baseCurrency - The base currency code (default: 'USD')
 * @returns {Object} Object containing rates, loading state, error, getRate function, and refetch function
 * 
 * Features:
 * - Automatically fetches exchange rates on mount and when baseCurrency changes
 * - Auto-refreshes rates every 5 minutes to keep data current
 * - Provides loading and error states for better UX
 * - Includes a manual refetch function for on-demand updates
 * - Prevents memory leaks by checking if component is still mounted
 */
export const useExchangeRates = (baseCurrency = 'USD') => {
    // State to store exchange rates as an object (e.g., { EUR: 0.85, GBP: 0.73, ... })
    const [rates, setRates] = useState({});

    // Loading state to show loading indicators in UI
    const [loading, setLoading] = useState(true);

    // Error state to capture and display any API errors
    const [error, setError] = useState(null);

    // Effect hook to fetch exchange rates whenever baseCurrency changes
    useEffect(() => {
        // Flag to track if component is still mounted (prevents state updates on unmounted components)
        let mounted = true;

        /**
         * Async function to fetch exchange rates from the API
         * Handles loading states and errors appropriately
         */
        const fetchRates = async () => {
            try {
                // Set loading to true and clear any previous errors
                setLoading(true);
                setError(null);

                // Fetch exchange rates from the API
                const data = await currencyApi.fetchExchangeRates(baseCurrency);

                // Only update state if component is still mounted (prevents memory leaks)
                if (mounted) {
                    setRates(data.rates);
                    setLoading(false);
                }
            } catch (err) {
                // Handle errors only if component is still mounted
                if (mounted) {
                    setError(err.message);
                    setLoading(false);
                }
            }
        };

        // Fetch rates immediately on mount or when baseCurrency changes
        fetchRates();

        // Set up interval to automatically refresh rates every 5 minutes (300,000 ms)
        // This keeps the exchange rates current without requiring manual refresh
        const interval = setInterval(fetchRates, 5 * 60 * 1000);

        // Cleanup function: runs when component unmounts or baseCurrency changes
        return () => {
            // Mark component as unmounted to prevent state updates
            mounted = false;
            // Clear the interval to prevent memory leaks
            clearInterval(interval);
        };
    }, [baseCurrency]); // Re-run effect when baseCurrency changes

    /**
     * Helper function to get exchange rate for a specific currency
     * @param {string} currency - The currency code to get the rate for
     * @returns {number|null} The exchange rate or null if not found
     */
    const getRate = (currency) => {
        return rates[currency] || null;
    };

    // Return object with all necessary data and functions
    return {
        rates,           // All exchange rates
        loading,         // Loading state for UI feedback
        error,           // Error message if API call failed
        getRate,         // Function to get rate for a specific currency

        /**
         * Manual refetch function - allows components to refresh rates on demand
         * Useful for user-triggered refresh actions
         */
        refetch: () => {
            setLoading(true);
            currencyApi.fetchExchangeRates(baseCurrency)
                .then(data => setRates(data.rates))
                .catch(err => setError(err.message))
                .finally(() => setLoading(false));
        }
    };
};