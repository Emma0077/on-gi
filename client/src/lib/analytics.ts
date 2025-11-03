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
function getCookie(name) {
  const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return m ? decodeURIComponent(m[2]) : null;
}

function isMetaAdSession() {
  // 1순위: 쿠키/세션의 fbclid 보유
  if (getCookie('fbclid') || sessionStorage.getItem('fbclid')) return true;
  // 2순위: URL에 아직 남아있다면 그걸로
  return new URLSearchParams(location.search).has('fbclid');
}
export function trackFBEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window !== 'undefined' && window.fbq) {
    if (isMetaAdSession()) {
      window.fbq('track', eventName, params);
    }
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
  
  // Facebook Pixel 이벤트 (항상 전송)
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
