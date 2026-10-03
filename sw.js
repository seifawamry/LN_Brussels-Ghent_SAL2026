const CACHE_NAME = "liptis-belgium-v21";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./css/main.css",
  "./css/responsive.css",
  "./js/itinerary-data.js",
  "./js/vat-calculator.js",
  "./js/prayer-times.js",
  "./js/pediamil-products.js",
  "./js/travel-guide.js",
  "./js/app.js",
  "./assets/icons/app-icon-1024.png",
  "./assets/icons/app-icon-512.png",
  "./assets/icons/app-icon-192.png",
  "./assets/icons/app-icon-180.png",
  "./assets/icons/app-icon-96.png",
  "./assets/icons/app-icon-64.png",
  "./assets/icons/favicon-32x32.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/icons/app-icon.png",
  "./assets/icons/favicon.png",
  "./assets/images/pediamil-logo.png",
  "./assets/images/pediamum-logo.png",
  "./assets/images/pediastart-logo.png",
  "./assets/images/pedia-start-stamp.png",
  "./assets/images/flight-departure.jpg",
  "./assets/images/speakers/prof-mostafa-el-hodhod.jpeg",
  "./assets/images/speakers/prof-ehab-khairy.jpeg",
  "./assets/images/speakers/prof-mohamed-hussein.jpeg",
  "./assets/images/speakers/dr-sharif-omar.jpeg",
  "./assets/images/venues/hotel-renaissance.jpg",
  "./assets/images/venues/dining-le-mignon.jpg",
  "./assets/images/venues/dining-steak-n-chill.jpg",
  "./assets/images/venues/dining-de-witte-leeuw.jpg",
  "./assets/images/venues/sightseeing-grand-place.jpg",
  "./assets/images/venues/sightseeing-atomium.jpg",
  "./assets/images/venues/sightseeing-royal-palace.jpg",
  "./assets/images/venues/sightseeing-manneken-pis.jpg",
  "./assets/images/venues/shopping-rue-neuve.jpg",
  "./assets/images/venues/sightseeing-gravensteen.jpg",
  "./assets/images/venues/sightseeing-st-bavo.jpg",
  "./assets/images/venues/sightseeing-oud-gerechtsgebouw.jpg",
  "./assets/images/venues/sightseeing-graslei.jpg",
  "./assets/images/venues/sightseeing-ghent-cruise.jpg",
  "./assets/images/venues/shopping-veldstraat.jpg",
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
