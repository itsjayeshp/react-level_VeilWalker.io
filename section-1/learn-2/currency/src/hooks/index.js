/**
 * Hooks Barrel Export
 * 
 * This file aggregates and re-exports all custom hooks from a single location.
 * This pattern is called a "barrel export" and provides several benefits:
 * 
 * Benefits:
 * 1. Cleaner imports: import { useCurrencyConverter, useExchangeRates } from '../hooks'
 *    instead of importing from separate files
 * 2. Single source of truth for hook imports
 * 3. Easier to refactor - if you move hook files, only update this file
 * 4. Better organization and discoverability
 * 
 * Usage in components:
 * import { useCurrencyConverter } from '../hooks';
 * import { useExchangeRates } from '../hooks';
 * // Or destructure multiple:
 * import { useCurrencyConverter, useExchangeRates } from '../hooks';
 */

// Export currency converter hook
export { useCurrencyConverter } from './useCurrencyConverter';

// Export exchange rates hook  
export { useExchangeRates } from './useExchangeRates';