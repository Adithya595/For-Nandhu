
const CACHE_NAME = 'nandhu-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/love.html',
  '/secret.html',
  '/styles.css',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/her-photo.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
