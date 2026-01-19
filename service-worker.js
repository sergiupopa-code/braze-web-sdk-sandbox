/**
 * ============================================================
 * BRAZE WEB PUSH SERVICE WORKER
 * ============================================================
 *
 * - Required for Web Push notifications
 * - Must be served from the root scope (/)
 * - Must be served with:
 *   Content-Type: application/javascript
 *
 * This file delegates all push handling to Braze.
 */

self.importScripts("https://js.appboycdn.com/web-sdk/6.5/service-worker.js");
