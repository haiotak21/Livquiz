'use client';

import { Component } from 'react';

class TawkErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Check if this is a Tawk.to related error
        const errorMessage = error?.message || error?.toString() || '';
        const isTawkError = errorMessage.includes('tawk.to') ||
            errorMessage.includes('reportIncident') ||
            errorMessage.includes('Tawk_API') ||
            errorMessage.includes('twk-chunk') ||
            errorMessage.includes('embed.tawk.to') ||
            errorMessage.includes('WebSocket') ||
            errorMessage.includes('push.cc70') ||
            errorMessage.includes('Error: true');

        if (isTawkError) {
            // Suppress Tawk.to errors and continue normally
            console.debug('[TawkErrorBoundary] Suppressed Tawk.to error:', error);
            return { hasError: false, error: null };
        }

        // For non-Tawk errors, let them propagate normally
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log Tawk.to errors as debug instead of error
        const errorMessage = error?.message || error?.toString() || '';
        const isTawkError = errorMessage.includes('tawk.to') ||
            errorMessage.includes('reportIncident') ||
            errorMessage.includes('Tawk_API') ||
            errorMessage.includes('twk-chunk') ||
            errorMessage.includes('embed.tawk.to') ||
            errorMessage.includes('WebSocket') ||
            errorMessage.includes('push.cc70') ||
            errorMessage.includes('Error: true');

        if (isTawkError) {
            console.debug('[TawkErrorBoundary] Caught and suppressed Tawk.to error:', error, errorInfo);
            return;
        }

        // For real errors, log them properly
        console.error('[TawkErrorBoundary] Caught error:', error, errorInfo);
    }

    render() {
        // If it's a Tawk.to error, render children normally
        if (this.state.error) {
            const errorMessage = this.state.error?.message || this.state.error?.toString() || '';
            const isTawkError = errorMessage.includes('tawk.to') ||
                errorMessage.includes('reportIncident') ||
                errorMessage.includes('Tawk_API') ||
                errorMessage.includes('twk-chunk') ||
                errorMessage.includes('embed.tawk.to') ||
                errorMessage.includes('WebSocket') ||
                errorMessage.includes('push.cc70') ||
                errorMessage.includes('Error: true');

            if (isTawkError) {
                return this.props.children;
            }
        }

        // For real errors, show fallback UI
        if (this.state.hasError) {
            return this.props.fallback || <div style={{ display: 'none' }} />;
        }

        return this.props.children;
    }
}

export default TawkErrorBoundary;