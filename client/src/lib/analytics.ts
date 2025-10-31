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
 * Track form submission completion (CompleteRegistration and Lead)
 */
export function trackCompleteRegistration(data: { email: string; name: string }): void {
  // Google Analytics - 설문완료 이벤트 (항상 전송)
  trackEvent('설문완료', {
    method: 'email',
    user_name: data.name,
  });
  
  // Facebook Pixel 이벤트 (광고 클릭 세션만 전송)
  // localStorage에 저장된 fbclid 확인 (URL에서 사라져도 유지됨)
  const fbclid = typeof window !== 'undefined' 
    ? localStorage.getItem('ongi_fbclid')
    : null;
  
  console.log('📊 [Analytics] Checking fbclid for pixel events:', fbclid);
  
  if (fbclid) {
    console.log('✅ [Analytics] Sending Facebook Pixel events (CompleteRegistration + Lead)');
    
    // CompleteRegistration event
    trackFBEvent('CompleteRegistration', {
      content_name: 'ON:GI Beta Signup',
      status: 'completed',
    });

    // Lead event
    trackFBEvent('Lead', {
      content_name: 'ON:GI Beta Signup',
      content_category: 'signup',
    });
  } else {
    console.log('⏭️ [Analytics] No fbclid found - skipping Facebook Pixel events');
  }
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
