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
    const loadTawkTo = () => {
      try {
        // Initialize Tawk_API
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        // Create and configure script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/68380718c36f13190a60c36a/1isddnf41';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');

        // Add load event handler
        script.onload = () => {
          if (window.Tawk_API) {
            window.Tawk_API.onLoad = function() {
              // Initialize any additional settings here if needed
              window.Tawk_API.onBeforeLoaded = function() {
                // Ensure the chat is ready
                window.Tawk_API.onChatMaximized = function() {
                  console.log('Chat maximized');
                };
                window.Tawk_API.onChatMinimized = function() {
                  console.log('Chat minimized');
                };
              };
            };

            // Add event listener for custom chat open event
            window.addEventListener('open-live-chat', () => {
              if (window.Tawk_API) {
                window.Tawk_API.maximize();
              }
            });
          }
        };

        // Add error handler
        script.onerror = () => {
          console.warn('Failed to load Tawk.to script');
        };

        // Append script to document
        document.head.appendChild(script);

        // Cleanup function
        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
          // Remove event listener
          window.removeEventListener('open-live-chat', () => {
            if (window.Tawk_API) {
              window.Tawk_API.maximize();
            }
          });
        };
      } catch (error) {
        console.warn('Error initializing Tawk.to:', error);
      }
    };

    // Only run in browser environment
    if (typeof window !== 'undefined') {
      loadTawkTo();
    }
  }, []);

  return null;
};

export default TawkToChat; 