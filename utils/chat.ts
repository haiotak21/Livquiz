export const openChat = () => {
    if (typeof window === 'undefined') return;

    try {
        // Try direct API call first
        if (window.Tawk_API) {
            window.Tawk_API.maximize();
            return;
        }

        // Fallback to custom event
        window.dispatchEvent(new Event('open-live-chat'));
    } catch {
        // Last resort: try to reload the page with chat parameter
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('openChat', 'true');
        window.location.href = currentUrl.toString();
    }
}; 