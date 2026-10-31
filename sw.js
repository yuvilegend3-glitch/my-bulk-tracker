self.addEventListener("install", event => {
  event.waitUntil(caches.open("bulk-tracker-v2").then(cache => cache.addAll(["./","./index.html","./manifest.json","./icon.svg"])));
  self.skipWaiting();
});
self.addEventListener("activate", event => event.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith("bulk-tracker-") && key !== "bulk-tracker-v2").map(key => caches.delete(key)))).then(()=>self.clients.claim())
));
self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy=response.clone(); caches.open("bulk-tracker-v2").then(cache=>cache.put(event.request,copy)); return response;
  }).catch(()=>caches.match("./index.html"))));
});