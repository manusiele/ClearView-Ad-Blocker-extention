
// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleEnabled = document.getElementById('toggleEnabled');
    const totalBlockedElement = document.getElementById('totalBlocked');
    const currentSiteElement = document.getElementById('currentSite');
    
    // Get current tab info to display the site
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0]) {
        try {
          const url = new URL(tabs[0].url);
          currentSiteElement.textContent = `Current site: ${url.hostname}`;
        } catch (e) {
          currentSiteElement.textContent = 'Current site: -';
        }
      }
    });
  
    // Get initial stats and toggle state
    chrome.runtime.sendMessage({action: "getStats"}, function(response) {
      if (response) {
        totalBlockedElement.textContent = response.totalBlocked || 0;
        toggleEnabled.checked = response.enabled !== false;
      }
    });
    
    // Toggle ad blocking on/off
    toggleEnabled.addEventListener('change', function() {
      chrome.runtime.sendMessage({
        action: "toggleEnabled",
        enabled: toggleEnabled.checked
      });
    });
    
    // Listen for counter updates
    chrome.runtime.onMessage.addListener(function(message) {
      if (message.action === "updateCounter") {
        totalBlockedElement.textContent = message.count;
      }
    });
  });
  