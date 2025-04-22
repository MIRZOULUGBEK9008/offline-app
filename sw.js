const cacheName = "v1";
const urls = ["/", "/index.html", "/js/app.js", "/css/style.css"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((res) => {
      res.addAll(urls);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      if (res) {
        return res;
      } else {
        return fetch(event.request);
      }
    })
  );
});
