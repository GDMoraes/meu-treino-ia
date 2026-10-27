const CACHE_NAME='meu-treino-ia-v13-offline-1';
const APP_SHELL=['./','./index.html','./styles.css','./app.js','./cloud.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install', event => {event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate', event => {event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch', event => {if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));});
