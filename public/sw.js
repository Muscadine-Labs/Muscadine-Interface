const CACHE_NAME = 'defi-dashboard-v1';

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        // Only cache essential resources that we know exist
        return cache.addAll([
          '/',
          '/manifest.json',
          '/favicon.png'
        ]);
      })
      .catch((error) => {
        console.log('Cache installation failed:', error);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  // Skip caching for external resources and API calls
  if (event.request.url.startsWith('https://fonts.googleapis.com') ||
      event.request.url.startsWith('https://fonts.gstatic.com') ||
      event.request.url.startsWith('https://api-') ||
      event.request.url.startsWith('https://o4508737641234432.ingest.sentry.io')) {
    return; // Let these requests go through normally
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        return fetch(event.request).catch((error) => {
          console.log('Fetch failed:', error);
          // For navigation requests, return the cached index.html
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
          throw error;
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
