const CACHE_NAME = "liptis-belgium-v2";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./css/main.css",
  "./css/responsive.css",
  "./js/itinerary-data.js",
  "./js/vat-calculator.js",
  "./js/prayer-times.js",
  "./js/pediamil-products.js",
  "./js/app.js",
  "./assets/images/pediamil-logo.png",
  "./assets/images/pediamum-logo.png",
  "./assets/images/pediastart-logo.png",
  "./assets/images/pedia-start-stamp.png",
  "./manifest.json"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) return caches.delete(k);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request).catch(() => caches.match("./index.html"));
    })
  );
});
