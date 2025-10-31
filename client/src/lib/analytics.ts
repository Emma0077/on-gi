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
 * Check if user came from Facebook ad
 * Checks both URL fbclid and Facebook's _fbc cookie
 */
function isFromFacebookAd(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Method 1: Check localStorage for saved fbclid
  const savedFbclid = localStorage.getItem('ongi_fbclid');
  if (savedFbclid) {
    console.log('✅ [Analytics] Found saved fbclid:', savedFbclid);
    return true;
  }
  
  // Method 2: Check Facebook's _fbc cookie (contains fbclid)
  const cookies = document.cookie.split(';');
  const fbcCookie = cookies.find(c => c.trim().startsWith('_fbc='));
  
  if (fbcCookie) {
    console.log('✅ [Analytics] Found Facebook click cookie (_fbc):', fbcCookie);
    return true;
  }
  
  // Method 3: Check current URL for fbclid
  const urlParams = new URLSearchParams(window.location.search);
  const urlFbclid = urlParams.get('fbclid');
  
  if (urlFbclid) {
    console.log('✅ [Analytics] Found fbclid in URL:', urlFbclid);
    return true;
  }
  
  console.log('ℹ️ [Analytics] No Facebook ad indicators found');
  return false;
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
  const isFromAd = isFromFacebookAd();
  
  console.log('📊 [Analytics] Is from Facebook ad?', isFromAd);
  
  if (isFromAd) {
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
    console.log('⏭️ [Analytics] Not from Facebook ad - skipping Facebook Pixel events');
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
