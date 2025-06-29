export const openChat = () => {
    if (typeof window === 'undefined') return;

    try {
        // Enhanced check for Tawk.to availability with multiple validation layers
        if (window.Tawk_API && 
            window.Tawk_API.isLoaded && 
            typeof window.Tawk_API.maximize === 'function' &&
            window.Tawk_API.maximize.toString().includes('function')) {
            try {
                window.Tawk_API.maximize();
                return;
            } catch (error) {
                console.debug('[Tawk.to maximize failed]:', error);
            }
        }

        // Enhanced fallback to custom event with better error handling
        try {
            const chatEvent = new Event('open-live-chat', { bubbles: true, cancelable: true });
            window.dispatchEvent(chatEvent);
        } catch (error) {
            console.debug('[Custom event dispatch failed]:', error);
        }

        // Enhanced last resort with better URL handling
        try {
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('openChat', 'true');
            currentUrl.searchParams.set('timestamp', Date.now().toString());
            window.location.href = currentUrl.toString();
        } catch (error) {
            console.debug('[URL manipulation failed]:', error);
        }
    } catch (error) {
        console.debug('[Chat open utility failed]:', error);
    }
};

// Enhanced chat status checker with multiple validation methods
export const isChatAvailable = () => {
    if (typeof window === 'undefined') return false;
    
    try {
        // Multiple validation checks
        const hasTawkAPI = !!window.Tawk_API;
        const isLoaded = !!(window.Tawk_API && window.Tawk_API.isLoaded);
        const hasMaximize = !!(window.Tawk_API && typeof window.Tawk_API.maximize === 'function');
        const isFunctionValid = !!(window.Tawk_API && 
                                 window.Tawk_API.maximize && 
                                 window.Tawk_API.maximize.toString().includes('function'));
        
        return hasTawkAPI && isLoaded && hasMaximize && isFunctionValid;
    } catch {
        return false;
    }
};

// Enhanced safe chat initialization check with timeout and retry logic
export const waitForChat = (maxWaitTime = 10000, checkInterval = 100) => {
    return new Promise((resolve) => {
        if (isChatAvailable()) {
            resolve(true);
            return;
        }

        const startTime = Date.now();
        const interval = setInterval(() => {
            if (isChatAvailable()) {
                clearInterval(interval);
                resolve(true);
            } else if (Date.now() - startTime > maxWaitTime) {
                clearInterval(interval);
                resolve(false);
            }
        }, checkInterval);
    });
};

// New utility: Safe chat initialization with multiple fallbacks
export const initializeChatSafely = async (options = {}) => {
    const { 
        maxWaitTime = 10000, 
        retryAttempts = 3, 
        retryDelay = 2000 
    } = options;

    for (let attempt = 1; attempt <= retryAttempts; attempt++) {
        try {
            const isAvailable = await waitForChat(maxWaitTime);
            if (isAvailable) {
                return true;
            }
            
            if (attempt < retryAttempts) {
                console.debug(`[Chat] Retry attempt ${attempt}/${retryAttempts}`);
                await new Promise(resolve => setTimeout(resolve, retryDelay));
            }
        } catch (error) {
            console.debug(`[Chat] Initialization attempt ${attempt} failed:`, error);
        }
    }
    
    return false;
};