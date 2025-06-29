"use client";
import { useEffect } from "react";

export default function TawkErrorSuppressor() {
    useEffect(() => {
        const originalConsoleError = console.error;
        console.error = function (...args) {
            const errorMessage = args.join(" ");
            const errorStack = args.find(arg => arg && typeof arg === 'object' && arg.stack)?.stack || '';
            const fullErrorText = errorMessage + ' ' + errorStack;
            // Detect Tawk.to errors more comprehensively
            const isTawkError =
                (errorMessage.includes('tawk.to') &&
                    (errorMessage.includes('reportIncident') ||
                        errorMessage.includes('Tawk_API') ||
                        errorMessage.includes('twk-chunk') ||
                        errorMessage.includes('embed.tawk.to') ||
                        errorMessage.includes('push.cc70'))) ||
                (errorMessage.includes('Error: true') &&
                    (fullErrorText.includes('tawk.to') ||
                        fullErrorText.includes('twk-chunk') ||
                        fullErrorText.includes('embed.tawk.to'))) ||
                (fullErrorText.includes('tawk.to') &&
                    (fullErrorText.includes('reportIncident') ||
                        fullErrorText.includes('Tawk_API') ||
                        fullErrorText.includes('twk-chunk') ||
                        fullErrorText.includes('embed.tawk.to') ||
                        fullErrorText.includes('push.cc70')));
            if (isTawkError) {
                return;
            }
            originalConsoleError.apply(console, args);
        };
        return () => {
            console.error = originalConsoleError;
        };
    }, []);
    return null;
} 