self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('foto-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/manifest.json',
          '/icons/icon-192x192.png',
          '/icons/icon-512x512.png',
          // Adicione aqui todos os recursos necessários para seu site funcionar offline
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
  