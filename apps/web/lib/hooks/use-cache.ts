"use client";

import { useState, useEffect } from "react";

interface CacheOptions {
    key: string;
    ttl?: number; // Time to live in milliseconds, default 1 hour
}

export function useCache<T>(
    fetcher: () => Promise<T> | T,
    options: CacheOptions
) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const { key, ttl = 3600000 } = options;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Try to get from cache first
                const cachedData = localStorage.getItem(`cache_${key}`);

                if (cachedData) {
                    try {
                        const { timestamp, data: cachedValue } = JSON.parse(cachedData);

                        // Check if cache is still valid
                        if (Date.now() - timestamp < ttl) {
                            setData(cachedValue);
                            setLoading(false);
                            return;
                        }
                    } catch (e) {
                        // If there's an error parsing the cache, just continue with the fetch
                        console.error("Error parsing cache:", e);
                    }
                }

                // If no valid cache, fetch fresh data
                const result = await fetcher();

                // Cache the result
                localStorage.setItem(`cache_${key}`, JSON.stringify({
                    timestamp: Date.now(),
                    data: result
                }));

                setData(result);
                setLoading(false);
            } catch (e) {
                setError(e instanceof Error ? e : new Error(String(e)));
                setLoading(false);
            }
        };

        fetchData();
    }, [key, ttl, fetcher]);

    return { data, loading, error };
}

// Helper function to invalidate a specific cache
export function invalidateCache(key: string): void {
    localStorage.removeItem(`cache_${key}`);
}

// Helper function to clear all caches
export function clearAllCaches(): void {
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('cache_')) {
            localStorage.removeItem(key);
        }
    });
}