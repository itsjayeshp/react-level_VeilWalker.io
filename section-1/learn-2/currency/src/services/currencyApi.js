/**
 * Base URL for the Exchange Rate API
 * This free API provides up-to-date exchange rates for various currencies
 * API documentation: https://www.exchangerate-api.com/docs/overview
 */
const API_BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

/**
 * Currency API service - handles all API calls related to currency exchange
 * Provides methods for fetching exchange rates and converting between currencies
 */
export const currencyApi = {
    /**
     * Fetches current exchange rates for a given base currency
     * 
     * @param {string} baseCurrency - The base currency code (e.g., 'USD', 'EUR')
     * @returns {Promise<Object>} Object containing rates and other metadata
     * @throws {Error} If the API request fails
     * 
     * Example response:
     * {
     *   base: "USD",
     *   date: "2024-01-01",
     *   rates: { EUR: 0.85, GBP: 0.73, JPY: 110.5, ... }
     * }
     */
    async fetchExchangeRates(baseCurrency = 'USD') {
        try {
            // Make GET request to the API with the base currency
            const response = await fetch(`${API_BASE_URL}/${baseCurrency}`);

            // Check if response is successful (status 200-299)
            if (!response.ok) {
                throw new Error('Failed to fetch exchange rates');
            }

            // Parse and return the JSON response
            const data = await response.json();
            return data;
        } catch (error) {
            // Log error for debugging purposes
            console.error('Error fetching exchange rates:', error);
            // Re-throw error so calling code can handle it
            throw error;
        }
    },

    /**
     * Converts an amount from one currency to another
     * 
     * @param {number} amount - The amount to convert
     * @param {string} fromCurrency - The source currency code
     * @param {string} toCurrency - The target currency code
     * @returns {Promise<number>} The converted amount
     * @throws {Error} If conversion fails or exchange rate is not found
     * 
     * Example:
     * convertCurrency(100, 'USD', 'EUR') => 85.0
     */
    async convertCurrency(amount, fromCurrency, toCurrency) {
        try {
            // Fetch exchange rates with fromCurrency as the base
            const rates = await this.fetchExchangeRates(fromCurrency);

            // Get the specific rate for the target currency
            const rate = rates.rates[toCurrency];

            // Validate that the exchange rate exists
            if (!rate) {
                throw new Error(`Exchange rate for ${toCurrency} not found`);
            }

            // Calculate and return the converted amount
            return amount * rate;
        } catch (error) {
            // Log error for debugging
            console.error('Error converting currency:', error);
            // Re-throw for error handling in calling code
            throw error;
        }
    }
};