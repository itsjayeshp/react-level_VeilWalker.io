// Import React and the useMemo hook
import React, { useMemo } from "react";

/**
 * ItemList Component
 * 
 * Displays a filtered list of items based on a search query.
 * Demonstrates the use of useMemo for performance optimization.
 * 
 * useMemo Hook:
 * - Memoizes (caches) the result of an expensive computation
 * - Only re-computes when dependencies change
 * - In this case: only re-filters when items or query changes
 * - Prevents unnecessary filtering on every render
 * 
 * When is useMemo useful?
 * ✅ Expensive computations (filtering large arrays, complex calculations)
 * ✅ Preventing child component re-renders when passing computed values
 * ❌ NOT needed for simple operations (adds overhead)
 * ❌ NOT a guarantee - React may still recompute if memory is tight
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string[]} props.items - Array of item names to display and filter
 * @param {string} props.query - Search query string to filter items by
 * 
 * @example
 * <ItemList 
 *   items={["Apple", "Banana", "Orange"]} 
 *   query="app" 
 * />
 */
export default function ItemList({ items, query }) {
    // ============ MEMOIZED COMPUTATIONS ============

    /**
     * Filtered items using useMemo
     * 
     * Filter Logic:
     * - Converts both item and query to lowercase for case-insensitive search
     * - Uses includes() to check if query is a substring of item
     * 
     * Dependencies: [items, query]
     * - Filtering only happens when items array or query string changes
     * - If neither changes, the cached result is returned
     * 
     * Performance:
     * - For small arrays (like 6 items), useMemo overhead might not be worth it
     * - For larger arrays (100s or 1000s of items), this can prevent lag
     * - This is primarily for educational demonstration
     * 
     * @type {string[]}
     */
    const filteredItems = useMemo(() => {
        console.log("🔄 Filtering items..."); // Log to see when filtering occurs

        return items.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
        );
    }, [items, query]); // Only recompute when these dependencies change

    // ============ RENDER ============

    return (
        <div className="card">
            <h3>Filtered Items:</h3>
            <ul>
                {/* Conditional rendering based on filtered results */}
                {filteredItems.length > 0 ? (
                    // Display each filtered item
                    filteredItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                ) : (
                    // Show message when no items match the query
                    <p style={{ color: '#999', fontStyle: 'italic' }}>
                        No items found
                    </p>
                )}
            </ul>

            {/* Show count of filtered items */}
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
                Showing {filteredItems.length} of {items.length} items
            </p>
        </div>
    );
}