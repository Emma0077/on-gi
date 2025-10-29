// Google Analytics and Facebook Pixel tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Track a custom event in Google Analytics
 */
export function trackEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track Facebook Pixel event
 */
export function trackFBEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
}

/**
 * Track form submission completion (CompleteRegistration)
 */
export function trackCompleteRegistration(data: { email: string; name: string }): void {
  // Google Analytics
  trackEvent('sign_up', {
    method: 'email',
    user_name: data.name,
  });
  
  // Facebook Pixel - CompleteRegistration event
  trackFBEvent('CompleteRegistration', {
    content_name: 'ON:GI Beta Signup',
    status: 'completed',
  });
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(location: 'header' | 'hero' | 'sticky'): void {
  trackEvent('cta_click', {
    location,
    button_text: '온기 오픈 알림받기',
  });
}
