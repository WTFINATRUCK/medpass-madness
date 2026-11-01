// MedPass Madness service worker — makes the game installable and playable offline.
const VERSION = 'medpass-v2.1';
const CORE = [
  './', 'index.html', 'manifest.webmanifest', 'privacy.html',
  'assets/hallway.jpg', 'assets/door.jpg', 'assets/giving.jpg', 'assets/res1.jpg', 'assets/res2.jpg',
  'assets/fonts/fredoka-latin-500-normal.woff2', 'assets/fonts/fredoka-latin-600-normal.woff2', 'assets/fonts/fredoka-latin-700-normal.woff2',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // The page itself: network first so new versions show up right away, cache when offline.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put('index.html', copy)); return res; })
      .catch(() => caches.match('index.html')));
    return;
  }
  // Art, fonts, icons: cache first.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  })));
});
