self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', (event) => {
  // Esto permite que la app funcione offline o cargue rápido
  event.respondWith(fetch(event.request));
});
