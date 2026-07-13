/* Service Worker — Lab da Josi (PWA offline) */
const CACHE = 'labjosi-v7';
const ASSETS = [
  './',
  './index.html',
  './jogo.html',
  './apostila.html',
  './simulado.html',
  './desafios.html',
  './estudo-ciencias-consulpam.html',
  './ciencias.html',
  './gerais-coreau.html',
  './jogo-ciencias.html',
  './img/simulado-q01.png',
  './img/simulado-q02.png',
  './img/simulado-q09.png',
  './manifest.json',
  './favicon.svg',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Estratégia: cache primeiro, rede como reserva (e guarda o que baixar). */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => {
      if (hit) return hit;
      return fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return resp;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
