// Safari Softwares - Chemistry Simulator
// Service Worker for offline support
const CACHE_NAME = 'safari-chem-sim-v2';
const ASSETS_TO_CACHE = [
  '/kenyan-chemistry-practical-simulator/',
  '/kenyan-chemistry-practical-simulator/index.html',
  '/kenyan-chemistry-practical-simulator/upgrade.html',
  '/kenyan-chemistry-practical-simulator/404.html',
  '/kenyan-chemistry-practical-simulator/manifest.json'
];

// Install - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching assets...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and admin files
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('admin')) return;
  if (event.request.url.includes('generate-key')) return;
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if available
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Cache new responses (only same-origin)
            if (response.status === 200 && 
                event.request.url.startsWith(self.location.origin)) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          })
          .catch(() => {
            // Offline fallback
            if (event.request.destination === 'document') {
              return caches.match('/kenyan-chemistry-practical-simulator/index.html');
            }
            return new Response('Offline - Please check your internet connection', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});