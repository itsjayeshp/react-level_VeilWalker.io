// Import React and necessary hooks
import React, { useState, useCallback } from "react";
// Import child components
import Timer from "./components/Timer";
import Search from "./components/Search";
import ItemList from "./components/ItemList";
// Import styles
import "./App.css";

/**
 * App Component - React Hooks Demo
 * 
 * This is the main application component that demonstrates several React hooks:
 * - useState: Managing search query state
 * - useCallback: Optimizing the search handler function
 * - (Used in children) useEffect, useRef, useMemo
 * 
 * Component Structure:
 * - Timer: Demonstrates useEffect and useRef for interval management
 * - Search: Controlled input component for filtering
 * - ItemList: Demonstrates useMemo for filtering optimization
 * 
 * Features:
 * - Real-time item filtering based on search query
 * - Performance optimization using useCallback to prevent unnecessary re-renders
 * - Timer with start/stop functionality
 * 
 * @component
 */
export default function App() {
  // ============ STATE MANAGEMENT ============

  /**
   * Search query state
   * Controls the filter applied to the item list
   * Updated by the Search component via handleSearch callback
   */
  const [query, setQuery] = useState("");

  // ============ EVENT HANDLERS ============

  /**
   * Search handler - wrapped in useCallback for performance optimization
   * 
   * useCallback prevents this function from being recreated on every render.
   * This is important because:
   * 1. The Search component receives this as a prop
   * 2. Without useCallback, Search would see a "new" function on every render
   * 3. This could cause unnecessary re-renders if Search uses React.memo
   * 
   * Dependencies: [] (empty) - function never needs to be recreated
   * 
   * @param {string} value - The new search query from the input
   */
  const handleSearch = useCallback((value) => {
    setQuery(value);
  }, []);

  // ============ DATA ============

  /**
   * Static list of items to filter
   * In a real application, this might come from an API or database
   */
  const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

  // ============ RENDER ============

  return (
    <div className="container">
      {/* Main heading */}
      <h1>React Hooks Demo</h1>

      {/* Timer Component - demonstrates useEffect and useRef */}
      <Timer />

      {/* Search Component - controlled input for filtering */}
      <Search onSearch={handleSearch} />

      {/* ItemList Component - demonstrates useMemo for filtering */}
      <ItemList items={items} query={query} />
    </div>
  );
}