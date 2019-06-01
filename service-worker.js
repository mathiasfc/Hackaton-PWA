/*
  Added just for reference and not being used right now
  If you want to use this service worker or customize it
  you must eject application from create-react-app
  running npm run eject, and it will provide the build configs
  for customization
*/

/* eslint-disable */
const CACHE_NAME = 'core_cache_v3.0.2';
const urlsToCache = [
  /* Img */
  'img/arrow-down.png',
  'img/arrow-right-active.png',
  'img/arrow-right.png',
  'img/help.svg',
  'img/logo-portal.svg',
  'img/search-icon.png',

  /* PWA */
  'img/icons/icon-72x72.png',
  'img/icons/icon-96x96.png',
  'img/icons/icon-128x128.png',
  'img/icons/icon-144x144.png',
  'img/icons/icon-152x152.png',
  'img/icons/icon-192x192.png',
  'img/icons/icon-384x384.png',
  'img/icons/icon-512x512.png',
  'img/splash/launch-640x1136.png',
  'img/splash/launch-750x1294.png',
  'img/splash/launch-1242x2148.png',
  'img/splash/launch-1125x2436.png',
  'img/splash/launch-1536x2048.png',
  'img/splash/launch-1668x2224.png',
  'img/splash/launch-2048x2732.png',

  /* CSS */
  'css/bootstrap.min.css?v=3.3.7',

  /* JS */
  'js/moment.min.js?v=2.22.2',
  'js/lodash.min.js?v=4.17.10',
  'js/numeral.min.js?v=2.0.6',
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('sw installed');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('sw not installed', err);
      })
  );
});

/* clear old caches */
self.caches.keys().then(keys => {
  keys.forEach(key => {
    if (key !== CACHE_NAME) {
      self.caches.delete(key);
    }
  });
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          //eslint-disable-line
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener('fetch', event => {
  //eslint-disable-line
  console.log(event);
  if (event.request.url.indexOf('http') >= 0) {
    return null;
  }
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('push', e => {
  const data = e.data.json();
  console.log('Got push', e.data);
  self.registration.showNotification(data.title, {
    body: data.message,
    icon: data.icon,
  });
});

/* eslint-enable */
