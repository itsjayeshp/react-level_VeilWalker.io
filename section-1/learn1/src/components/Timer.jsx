// Import React and necessary hooks
import React, { useState, useEffect, useRef } from "react";

/**
 * Timer Component
 * 
 * Demonstrates the use of React hooks for managing a simple timer:
 * - useState: Tracks the elapsed seconds
 * - useEffect: Sets up and cleans up the interval
 * - useRef: Stores the interval ID to allow stopping the timer
 * 
 * Key Concepts:
 * - Using useRef to persist values across renders without causing re-renders
 * - Using useEffect cleanup function to prevent memory leaks
 * - Function state updates (s => s + 1) to ensure correct state transitions
 * 
 * @component
 */
export default function Timer() {
    // ============ STATE MANAGEMENT ============

    /**
     * Seconds counter state
     * Starts at 0 and increments every second while timer is running
     */
    const [seconds, setSeconds] = useState(0);

    /**
     * Interval reference using useRef
     * 
     * Why useRef instead of useState?
     * - useRef doesn't cause re-renders when its value changes
     * - Perfect for storing mutable values like interval IDs
     * - Persists across component re-renders
     * - Can be accessed and modified without triggering React updates
     */
    const intervalRef = useRef(null);

    // ============ EFFECTS ============

    /**
     * Timer setup effect
     * 
     * Runs once on component mount (empty dependency array [])
     * Sets up an interval that increments seconds every 1000ms (1 second)
     * 
     * Important patterns:
     * 1. Function state update: setSeconds(s => s + 1)
     *    - Ensures we always get the latest state value
     *    - Safer than setSeconds(seconds + 1) which could use stale values
     * 
     * 2. Cleanup function: return () => clearInterval(...)
     *    - Runs when component unmounts
     *    - Prevents memory leaks by clearing the interval
     *    - Critical for avoiding timers running after component is gone
     */
    useEffect(() => {
        // Start the timer interval
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        // Cleanup: clear interval when component unmounts
        // This prevents memory leaks and timers running after unmounting
        return () => clearInterval(intervalRef.current);
    }, []); // Empty array = run once on mount, cleanup on unmount

    // ============ EVENT HANDLERS ============

    /**
     * Stops the timer by clearing the interval
     * Keeps the current seconds value displayed
     */
    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null; // Clear the reference
        }
    };

    /**
     * Resets the timer back to 0 and restarts it
     */
    const resetTimer = () => {
        // Clear existing interval if any
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        // Reset seconds to 0
        setSeconds(0);

        // Start a new interval
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    };

    // ============ RENDER ============

    return (
        <div className="card">
            <h2>⏱ Timer: {seconds}s</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button
                    onClick={stopTimer}
                    aria-label="Stop timer"
                    title="Stop the timer"
                >
                    Stop Timer
                </button>
                <button
                    onClick={resetTimer}
                    aria-label="Reset timer"
                    title="Reset timer to 0 and restart"
                >
                    Reset Timer
                </button>
            </div>
        </div>
    );
}