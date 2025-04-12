const adDomains = [
    "*://*.doubleclick.net/*",
    "*://*.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://*.adnxs.com/*",
    "*://*.rubiconproject.com/*",
    "*://*.outbrain.com/*",
    "*://*.taboola.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.moatads.com/*",
    "*://*.amazon-adsystem.com/*",
    "*://*.adform.net/*",
    "*://*.advertising.com/*",
    "*://*.adtech.de/*",
    "*://*.adsrvr.org/*",
    "*://*.quantserve.com/*",
    "*://*.criteo.com/*",
    "*://*.pubmatic.com/*",
    "*://*.yieldlab.net/*"
  ];
  
  // Initialize counter in storage
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ totalBlocked: 0, enabled: true });
  });
  
  // Block requests to ad domains
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      chrome.storage.local.get(['enabled', 'totalBlocked'], function(data) {
        if (data.enabled) {
          chrome.storage.local.set({ totalBlocked: (data.totalBlocked || 0) + 1 });
          // Send message to popup if it's open
          chrome.runtime.sendMessage({ action: "updateCounter", count: data.totalBlocked + 1 });
        }
      });
      
      // Check if blocking is enabled before cancelling the request
      return new Promise((resolve) => {
        chrome.storage.local.get(['enabled'], function(data) {
          resolve({ cancel: data.enabled === true });
        });
      });
    },
    { urls: adDomains },
    ["blocking"]
  );
  
  // Messaging system to toggle blocking on/off
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "toggleEnabled") {
      chrome.storage.local.set({ enabled: message.enabled });
      sendResponse({ success: true });
    } else if (message.action === "getStats") {
      chrome.storage.local.get(['totalBlocked', 'enabled'], function(data) {
        sendResponse(data);
      });
      return true; // Required for async sendResponse
    }
  });
  
 