/*
  Braze Web SDK Service Worker
  ---------------------------
  This imports Braze’s hosted service worker logic, which handles:
  - Web Push subscription management
  - Push token registration with Braze
  - Push message receipt and display

  The service worker must:
  - Be hosted on the same origin as the site
  - Be located within the correct scope (especially on GitHub Pages)
  - Match the serviceWorkerLocation provided during braze.initialize()
*/
self.importScripts('https://js.appboycdn.com/web-sdk/6.5/service-worker.js');
