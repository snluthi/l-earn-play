// Offline play for the installed app: network first (so updates arrive), the last copy when offline.
const CACHE = 'l-earn-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(async (c) => {
      try {
        const res = await fetch(r);
        if (res.ok) c.put(r, res.clone());
        return res;
      } catch (err) {
        const hit = await c.match(r);
        if (hit) return hit;
        throw err;
      }
    }),
  );
});
