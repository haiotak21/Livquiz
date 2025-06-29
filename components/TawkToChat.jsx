'use client';

import { useEffect, useRef } from 'react';

const TawkToChat = () => {
    const scriptRef = useRef(null);
    const retryCountRef = useRef(0);
    const maxRetries = 3;
    const originalConsoleErrorRef = useRef(null);

    useEffect(() => {
        let script = null;
        let retryTimeout = null;

        const initializeTawkTo = () => {
            try {
                // Prevent multiple initializations
                if (window.Tawk_API && window.Tawk_API.isLoaded) {
                    return;
                }

                // Store original console.error before overriding
                if (!originalConsoleErrorRef.current) {
                    originalConsoleErrorRef.current = console.error;
                }

                // Override console.error with comprehensive Tawk.to error detection
                console.error = (...args) => {
                    const errorMessage = args.join(' ');
                    const errorStack = args.find(arg => arg && typeof arg === 'object' && arg.stack)?.stack || '';
                    const fullErrorText = errorMessage + ' ' + errorStack;

                    // Detect Tawk.to errors more comprehensively
                    const isTawkError =
                        // Direct Tawk.to references
                        (errorMessage.includes('tawk.to') &&
                            (errorMessage.includes('reportIncident') ||
                                errorMessage.includes('Tawk_API') ||
                                errorMessage.includes('twk-chunk') ||
                                errorMessage.includes('embed.tawk.to') ||
                                errorMessage.includes('push.cc70'))) ||
                        // Error: true pattern from Tawk.to
                        (errorMessage.includes('Error: true') &&
                            (fullErrorText.includes('tawk.to') ||
                                fullErrorText.includes('twk-chunk') ||
                                fullErrorText.includes('embed.tawk.to'))) ||
                        // Tawk.to script errors
                        (fullErrorText.includes('tawk.to') &&
                            (fullErrorText.includes('reportIncident') ||
                                fullErrorText.includes('Tawk_API') ||
                                fullErrorText.includes('twk-chunk') ||
                                fullErrorText.includes('embed.tawk.to') ||
                                fullErrorText.includes('push.cc70')));

                    if (isTawkError) {
                        // Suppress Tawk.to errors
                        return;
                    }

                    // Call original console.error for non-Tawk errors
                    if (originalConsoleErrorRef.current) {
                        originalConsoleErrorRef.current.apply(console, args);
                    }
                };

                // Initialize Tawk API with error handling
                window.Tawk_API = window.Tawk_API || {};
                window.Tawk_LoadStart = new Date();

                // Create script with enhanced error handling
                script = document.createElement('script');
                script.async = true;
                script.src = 'https://embed.tawk.to/68380718c36f13190a60c36a/1isddnf41';
                script.charset = 'UTF-8';
                script.setAttribute('crossorigin', '*');

                // Enhanced onload with better error isolation
                script.onload = () => {
                    try {
                        if (window.Tawk_API) {
                            // Mark as loaded
                            window.Tawk_API.isLoaded = true;

                            // Set up event handlers with comprehensive error protection
                            const safeHandler = (handler) => {
                                return function () {
                                    try {
                                        if (typeof handler === 'function') {
                                            handler.apply(this, arguments);
                                        }
                                    } catch (error) {
                                        // Silent error handling for Tawk.to only
                                    }
                                };
                            };

                            window.Tawk_API.onLoad = safeHandler(function () { });
                            window.Tawk_API.onBeforeLoaded = safeHandler(function () { });
                            window.Tawk_API.onChatMaximized = safeHandler(function () { });
                            window.Tawk_API.onChatMinimized = safeHandler(function () { });

                            const handleChatOpen = () => {
                                try {
                                    if (window.Tawk_API && window.Tawk_API.maximize && typeof window.Tawk_API.maximize === 'function') {
                                        window.Tawk_API.maximize();
                                    }
                                } catch (error) {
                                    // Silent error handling for Tawk.to only
                                }
                            };

                            window.addEventListener('open-live-chat', handleChatOpen);

                            // Reset retry count on success
                            retryCountRef.current = 0;
                        }
                    } catch (error) {
                        // Silent error handling for Tawk.to only
                        handleRetry();
                    }
                };

                // Enhanced onerror with silent handling
                script.onerror = (error) => {
                    // Silent error handling for Tawk.to only
                    handleRetry();
                };

                document.head.appendChild(script);
                scriptRef.current = script;

            } catch (error) {
                // Silent error handling for Tawk.to only
                handleRetry();
            }
        };

        const handleRetry = () => {
            if (retryCountRef.current < maxRetries) {
                retryCountRef.current++;

                retryTimeout = setTimeout(() => {
                    initializeTawkTo();
                }, 2000 * retryCountRef.current); // Exponential backoff
            }
        };

        if (typeof window !== 'undefined') {
            initializeTawkTo();
        }

        return () => {
            if (retryTimeout) {
                clearTimeout(retryTimeout);
            }
            if (script && script.parentNode && script.parentNode.contains(script)) {
                script.parentNode.removeChild(script);
            }
            if (scriptRef.current && scriptRef.current.parentNode && scriptRef.current.parentNode.contains(scriptRef.current)) {
                scriptRef.current.parentNode.removeChild(scriptRef.current);
            }
            // Restore original console.error
            if (originalConsoleErrorRef.current) {
                console.error = originalConsoleErrorRef.current;
            }
        };
    }, []);

    return null;
};

export default TawkToChat;