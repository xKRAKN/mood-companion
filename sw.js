const CACHE_NAME = 'bible-app-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js'
];

// Install service worker and cache files
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Fetch files from cache when offline
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(rec => {
      return rec || fetch(evt.request);
    })
  );
});
