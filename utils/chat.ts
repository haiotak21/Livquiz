export const openChat = () => {
    if (typeof window !== 'undefined') {
        // Dispatch custom event to open chat
        window.dispatchEvent(new Event('open-live-chat'));

        // Direct API call as fallback
        if (window.Tawk_API) {
            window.Tawk_API.maximize();
        }
    }
}; 