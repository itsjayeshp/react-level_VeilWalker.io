/**
 * Utility functions for currency formatting and validation
 * Uses the built-in Intl.NumberFormat API for internationalization
 */
export const currencyUtils = {
    /**
     * Formats a numeric amount as currency with proper symbol and formatting
     * 
     * @param {number} amount - The amount to format
     * @param {string} currencyCode - The ISO 4217 currency code (e.g., 'USD', 'EUR')
     * @returns {string} Formatted currency string (e.g., "$1,234.56")
     * 
     * Uses Intl.NumberFormat which automatically handles:
     * - Correct currency symbol placement
     * - Thousands separators
     * - Decimal places (2 for most currencies, 0 for JPY, etc.)
     * - Locale-specific formatting
     */
    formatCurrency(amount, currencyCode) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode,
        }).format(amount);
    },

    /**
     * Validates if an amount is a valid number and non-negative
     * 
     * @param {any} amount - The value to validate
     * @returns {boolean} True if amount is a valid non-negative number
     * 
     * This prevents invalid inputs like:
     * - NaN (Not a Number)
     * - Negative values
     * - Non-numeric strings
     */
    validateAmount(amount) {
        return !isNaN(amount) && amount >= 0;
    },

    /**
     * Extracts the currency symbol for a given currency code
     * 
     * @param {string} currencyCode - The ISO 4217 currency code
     * @returns {string} The currency symbol (e.g., '$', '€', '£')
     * 
     * Uses formatToParts() to break down the formatted currency into parts
     * and extracts just the symbol portion
     * Example: For 'USD' returns '$', for 'EUR' returns '€'
     */
    getCurrencySymbol(currencyCode) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode,
        })
            .formatToParts(1)
            .find(part => part.type === 'currency').value;
    }
};

/**
 * List of supported currencies
 * Each currency object contains:
 * - code: ISO 4217 currency code (3 letters)
 * - name: Full currency name for display
 * 
 * You can expand this list to include more currencies as needed
 * All codes must be valid ISO 4217 codes for Intl.NumberFormat to work
 */
export const CURRENCIES = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'AUD', name: 'Australian Dollar' },
];