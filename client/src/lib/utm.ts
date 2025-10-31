// UTM parameter extraction and storage utilities

export interface UTMParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

const UTM_STORAGE_KEY = 'ongi_utm_params';
const FBCLID_STORAGE_KEY = 'ongi_fbclid';

/**
 * Extract UTM parameters from URL query string
 */
export function extractUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    utmSource: urlParams.get('utm_source') || undefined,
    utmMedium: urlParams.get('utm_medium') || undefined,
    utmCampaign: urlParams.get('utm_campaign') || undefined,
    utmTerm: urlParams.get('utm_term') || undefined,
    utmContent: urlParams.get('utm_content') || undefined,
  };
}

/**
 * Save UTM parameters to localStorage
 */
export function saveUTMParams(params: UTMParams): void {
  if (typeof window === 'undefined') return;
  
  // Only save if there are any UTM parameters
  const hasUTMParams = Object.values(params).some(value => value !== undefined);
  
  if (hasUTMParams) {
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(params));
  }
}

/**
 * Get saved UTM parameters from localStorage
 */
export function getSavedUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};
  
  try {
    const saved = localStorage.getItem(UTM_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error('Failed to parse saved UTM params:', error);
  }
  
  return {};
}

/**
 * Save fbclid to localStorage
 */
export function saveFbclid(fbclid: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(FBCLID_STORAGE_KEY, fbclid);
}

/**
 * Get saved fbclid from localStorage
 */
export function getSavedFbclid(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(FBCLID_STORAGE_KEY);
}

/**
 * Initialize UTM tracking on page load
 * Extracts UTM params and fbclid from URL and saves to localStorage
 */
export function initUTMTracking(): UTMParams {
  const urlParams = extractUTMParams();
  saveUTMParams(urlParams);
  
  // Also save fbclid if present
  if (typeof window !== 'undefined') {
    const searchParams = new URLSearchParams(window.location.search);
    const fbclid = searchParams.get('fbclid');
    
    console.log('🔍 [UTM Tracking] Current URL:', window.location.href);
    console.log('🔍 [UTM Tracking] Search params:', window.location.search);
    console.log('🔍 [UTM Tracking] fbclid from URL:', fbclid);
    
    if (fbclid) {
      saveFbclid(fbclid);
      console.log('✅ [UTM Tracking] fbclid saved to localStorage:', fbclid);
    } else {
      const saved = getSavedFbclid();
      console.log('ℹ️ [UTM Tracking] No fbclid in URL. Saved fbclid:', saved);
    }
  }
  
  // Return either URL params or saved params (URL takes precedence)
  const hasURLParams = Object.values(urlParams).some(value => value !== undefined);
  return hasURLParams ? urlParams : getSavedUTMParams();
}
