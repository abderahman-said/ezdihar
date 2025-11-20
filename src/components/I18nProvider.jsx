'use client';

import { useEffect } from 'react';
import '../i18n';
import AOS from 'aos';

export default function I18nProvider({ children }) {
  useEffect(() => {
    // i18n is initialized in the imported file
    
    // Initialize AOS after DOM is ready
    const initAOS = () => {
      if (typeof window !== 'undefined' && AOS) {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          offset: 100,
          disable: false,
          startEvent: 'DOMContentLoaded',
          delay: 0,
        });
        
        // Refresh AOS after a short delay to ensure all elements are rendered
        setTimeout(() => {
          AOS.refresh();
        }, 200);
      }
    };

    // Wait for page to load
    if (typeof window !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAOS);
      } else {
        // DOM is already loaded
        setTimeout(initAOS, 150);
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('DOMContentLoaded', initAOS);
      }
    };
  }, []);

  return <>{children}</>;
}

