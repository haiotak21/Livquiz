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
    // Ensure Tawk_API is initialized and set autoStart before loading the script
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    // window.Tawk_API.autoStart = false; // Disable auto-start

    // Set up Tawk_API callbacks
    // window.Tawk_API.onLoad = function() {
    //   // Initialize i18next if needed
    //   if (typeof window.Tawk_API.$_Tawk !== 'undefined' && typeof window.Tawk_API.$_Tawk.i18next === 'undefined') {
    //     window.Tawk_API.$_Tawk.i18next = {
    //       t: function(key: string) { return key; }
    //     };
    //   }
    //   // Hide the default Tawk.to widget (redundant with autoStart=false, but kept as fallback)
    //   window.Tawk_API.hideWidget();
    // };

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