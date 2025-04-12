// This script runs on every page to hide ad elements that might still load
function hideAds() {
    const adSelectors = [
      // Common ad container classes and IDs
      '.ad', '.ads', '.adsbygoogle', '[id*="google_ads"]', '[id*="ad-"]',
      '[class*="ad-container"]', '[class*="ad-wrapper"]', '[id*="banner"]',
      '[class*="banner"]', '[class*="sponsored"]', '[id*="sponsored"]',
      'iframe[src*="ads"]', 'iframe[src*="doubleclick"]',
      // Sidebar ads
      '.sidebar-ads', '.side-ad',
      // Video ads
      '.video-ads', '.preroll-ads',
      // Sponsored content
      '.sponsored-content', '[data-ad]'
    ];
  
    // Hide all elements matching our selectors
    adSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.style.display = 'none';
      });
    });
  
    // Look for iframes with ad-related sources
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      const src = iframe.src.toLowerCase();
      if (src.includes('ad') || src.includes('banner') || src.includes('sponsor')) {
        iframe.style.display = 'none';
      }
    });
  }
  
  // Run when the DOM is ready
  document.addEventListener('DOMContentLoaded', hideAds);
  
  // Also run when new content is loaded (for dynamic sites)
  const observer = new MutationObserver(mutations => {
    hideAds();
  });
  
  // Start observing when the DOM is available
  document.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });