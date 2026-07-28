const CACHE_NAME = "callflow-cache-v1";

const urlsToCache = [

"/",
"/index.html",
"/dashboard.html",
"/chamados.html",
"/css/global.css",
"/js/database.js"

];



self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))

);

});



self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request)
.then(response => response || fetch(event.request))

);

});
