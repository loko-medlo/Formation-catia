const CACHE_NAME = 'catia-v2';
const urlsToCache = [
    '/manifest.json'
];

self.addEventListener('install', event => {
    // Force the waiting service worker to become the active service worker.
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', event => {
    // Tell the active service worker to take control of the page immediately.
    event.waitUntil(self.clients.claim());

    // Delete old caches
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    // Network first strategy
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Check if we received a valid response
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                // Clone the response
                var responseToCache = response.clone();
                caches.open(CACHE_NAME)
                    .then(cache => {
                        cache.put(event.request, responseToCache);
                    });

                return response;
            })
            .catch(() => {
                // Fallback to cache if network fails
                return caches.match(event.request);
            })
    );
});
