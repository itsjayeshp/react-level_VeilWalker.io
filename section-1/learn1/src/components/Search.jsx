// Import React library
import React from "react";

/**
 * Search Component
 * 
 * A simple controlled input component for searching/filtering items.
 * This is a "presentational" or "dumb" component - it doesn't manage its own state,
 * but instead notifies the parent component of changes via a callback.
 * 
 * Pattern: Controlled Component
 * - The input's value is not stored in this component
 * - Changes are immediately sent to parent via onSearch callback
 * - Parent component manages the state and passes down any data needed
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onSearch - Callback function called when input changes
 *                                     Receives the new input value as argument
 * 
 * @example
 * <Search onSearch={(value) => setQuery(value)} />
 */
export default function Search({ onSearch }) {
    return (
        <div className="card">
            <input
                type="text"
                placeholder="Search items..."
                onChange={(e) => onSearch(e.target.value)}
                aria-label="Search items"
                autoComplete="off"
            />
        </div>
    );
}