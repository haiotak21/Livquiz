'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

const TawkToChat = () => {
  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    const initializeTawkTo = () => {
      try {
        // Initialize Tawk_API
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        // Create script element
        script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/68380718c36f13190a60c36a/1isddnf41';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');

        // Handle script load
        script.onload = () => {
          if (window.Tawk_API) {
            // Set up API callbacks
            window.Tawk_API.onLoad = function() {
              // Chat is ready
              console.log('Tawk.to chat is ready');
            };

            window.Tawk_API.onBeforeLoaded = function() {
              // Before chat is loaded
              console.log('Tawk.to chat is loading');
            };

            window.Tawk_API.onChatMaximized = function() {
              console.log('Chat maximized');
            };

            window.Tawk_API.onChatMinimized = function() {
              console.log('Chat minimized');
            };

            // Set up custom event listener
            const handleChatOpen = () => {
              try {
                if (window.Tawk_API) {
                  window.Tawk_API.maximize();
                }
              } catch (error) {
                console.warn('Error maximizing chat:', error);
              }
            };

            window.addEventListener('open-live-chat', handleChatOpen);

            // Clean up event listener
            return () => {
              window.removeEventListener('open-live-chat', handleChatOpen);
            };
          }
        };

        // Handle script error
        script.onerror = (error) => {
          console.warn('Failed to load Tawk.to script:', error);
        };

        // Add script to document
        document.head.appendChild(script);
      } catch (error) {
        console.warn('Error initializing Tawk.to:', error);
      }
    };

    // Only initialize in browser environment
    if (typeof window !== 'undefined') {
      initializeTawkTo();
    }

    // Cleanup function
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default TawkToChat; 