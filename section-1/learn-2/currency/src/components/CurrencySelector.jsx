// Import React library
import React from 'react';
// Import list of available currencies
import { CURRENCIES } from '../utils/currencyUtils';

/**
 * CurrencySelector Component
 * 
 * A reusable dropdown selector for choosing a currency from a predefined list.
 * This is a controlled component that receives its value and onChange handler as props.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.label] - Optional label text to display above the selector
 * @param {string} props.value - Currently selected currency code (e.g., 'USD', 'EUR')
 * @param {Function} props.onChange - Callback function called when selection changes
 *                                     Receives the new currency code as argument
 * @param {boolean} [props.disabled=false] - Whether the selector is disabled
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * 
 * @example
 * <CurrencySelector
 *   label="From"
 *   value="USD"
 *   onChange={(code) => setFromCurrency(code)}
 * />
 */
const CurrencySelector = ({
    label,                    // Label text (optional)
    value,                    // Selected currency code
    onChange,                 // Change handler function
    disabled = false,         // Disabled state (default: false)
    className = ''            // Additional CSS classes (default: '')
}) => {
    return (
        <div className={`currency-selector ${className}`}>
            {/* Conditionally render label if provided */}
            {label && (
                <label className="currency-selector__label">
                    {label}
                </label>
            )}

            {/* Dropdown select element */}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                className="currency-selector__select"
                aria-label={label || "Currency selector"}
            >
                {/* Map through CURRENCIES array to create options */}
                {CURRENCIES.map(currency => (
                    <option
                        key={currency.code}        // Unique key for React
                        value={currency.code}      // Value sent to onChange
                    >
                        {/* Display format: "USD - US Dollar" */}
                        {currency.code} - {currency.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

// Export as default for easier importing
export default CurrencySelector;