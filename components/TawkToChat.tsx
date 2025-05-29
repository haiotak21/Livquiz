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
    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Tawk.to script
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/68380718c36f13190a60c36a/1isddnf41';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode?.insertBefore(s1, s0);

    // Cleanup function
    return () => {
      if (s0.parentNode) {
        s0.parentNode.removeChild(s1);
      }
    };
  }, []);

  return null;
};

export default TawkToChat; 