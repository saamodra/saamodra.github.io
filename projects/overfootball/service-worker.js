importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
 
if (workbox) {
  console.log(`Workbox berhasil dimuat`);
} else {
  console.log(`Workbox gagal dimuat`);
}

workbox.precaching.precacheAndRoute([
  { url: '/', revision: '1' },
  { url: '/manifest.json', revision: '1' },
  { url: '/favicon.ico', revision: '1' },
  { url: '/nav.html', revision: '1' },
  { url: '/pages/detailtim.html', revision: '2' },
  { url: '/pages/home.html', revision: '1' },
  { url: '/pages/jadwal.html', revision: '1' },
  { url: '/pages/klasemen.html', revision: '1' },
  { url: '/pages/saved.html', revision: '1' },
  { url: '/pages/tim.html', revision: '1' },
  { url: '/images/icons/apple-touch-icon-ipad-76x76.png', revision: '1' },
  { url: '/images/icons/apple-touch-icon-ipad-retina-152x152.png', revision: '1' },
  { url: '/images/icons/apple-touch-icon-iphone-60x60.png', revision: '1' },
  { url: '/images/icons/apple-touch-icon-iphone-retina-120x120.png', revision: '1' },
  { url: '/images/icons/icon-72x72.png', revision: '1' },
  { url: '/images/icons/icon-96x96.png', revision: '1' },
  { url: '/images/icons/icon-128x128.png', revision: '1' },
  { url: '/images/icons/icon-144x144.png', revision: '1' },
  { url: '/images/icons/icon-152x152.png', revision: '1' },
  { url: '/images/icons/icon-192x192.png', revision: '1' },
  { url: '/images/icons/icon-384x384.png', revision: '1' },
  { url: '/images/icons/icon-512x512.png', revision: '1' },
  { url: '/images/header-img2.png', revision: '1' },
  { url: '/images/logo-2.png', revision: '1' },
  { url: '/images/Overfootball.png', revision: '1' },
  { url: '/images/Overfootball-1.png', revision: '1' },
  { url: '/images/schedule.jpg', revision: '1' },
  { url: '/images/standings.jpg', revision: '1' },
  { url: '/images/teams.jpg', revision: '1' },
  { url: '/css/apercu.css', revision: '1' },
  { url: '/css/materialize.css', revision: '1' },
  { url: '/css/style.css', revision: '1' },
  { url: '/js/api.js', revision: '1' },
  { url: '/js/db.js', revision: '1' },
  { url: '/js/idb.js', revision: '1' },
  { url: '/js/jquery.min.js', revision: '1' },
  { url: '/js/materialize.min.js', revision: '1' },
  { url: '/js/nav.js', revision: '1' },
  { url: '/js/serviceworker.js', revision: '1' },
  { url: '/fonts/Apercu_Bold.otf', revision: '1' },
  { url: '/fonts/Apercu_Light.otf', revision: '1' },
  { url: '/fonts/Apercu_Regular.otf', revision: '1' },
], {
  // Ignore all URL parameters.
  ignoreURLParametersMatching: [/.*/]
});


workbox.routing.registerRoute(
  new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'overfootball-pages'
    })
);

workbox.routing.registerRoute(
  new RegExp('/images/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'overfootball-images'
    })
);

workbox.routing.registerRoute(
  new RegExp('/css/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'overfootball-styles'
    })
);

workbox.routing.registerRoute(
  new RegExp('/js/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'overfootball-script'
    })
);

workbox.routing.registerRoute(
  new RegExp('/fonts/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'overfootball-fonts'
    })
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

workbox.routing.registerRoute(
  new RegExp('https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'overfootball-data',
  })
);

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Get ready for the next level of football';
  }
  var options = {
    body: body,
    icon: 'images/logo-2.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

