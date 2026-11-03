// MedPass Madness service worker — makes the game installable and playable offline.
const VERSION = 'medpass-v3.1';
const CORE = [
  './', 'index.html', 'manifest.webmanifest', 'privacy.html',
  'assets/hallway.jpg', 'assets/door.jpg', 'assets/giving.jpg', 'assets/res1.jpg', 'assets/res2.jpg',
  'assets/fonts/fredoka-latin-500-normal.woff2', 'assets/fonts/fredoka-latin-600-normal.woff2', 'assets/fonts/fredoka-latin-700-normal.woff2',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png',
  'assets/res/r01.jpg', 'assets/res/r02.jpg', 'assets/res/r03.jpg', 'assets/res/r04.jpg', 'assets/res/r05.jpg', 'assets/res/r06.jpg', 'assets/res/r07.jpg', 'assets/res/r08.jpg', 'assets/res/r09.jpg', 'assets/res/r10.jpg', 'assets/res/r11.jpg', 'assets/res/r12.jpg', 'assets/res/r13.jpg', 'assets/res/r14.jpg', 'assets/res/r15.jpg', 'assets/res/r16.jpg', 'assets/res/r17.jpg', 'assets/res/r18.jpg',
  'assets/nurse/n01.jpg', 'assets/nurse/n02.jpg', 'assets/nurse/n03.jpg', 'assets/nurse/n04.jpg', 'assets/nurse/n05.jpg', 'assets/nurse/n06.jpg', 'assets/nurse/n07.jpg', 'assets/nurse/n08.jpg', 'assets/nurse/n09.jpg', 'assets/nurse/n10.jpg', 'assets/nurse/n11.jpg', 'assets/nurse/n12.jpg'
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
