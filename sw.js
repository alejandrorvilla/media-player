const VERSION = "v1";

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
	const request = event.request;
	if(request.method !== 'GET') {
		return;
	}

	// buscar en cache
	event.respondWith(cachedResponse(request));

	// actualizar el cache
	event.waitUntil(updateCache(request));
})

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    //"/",
	//"/favicon.ico",
    //"/index.html",
	//"/assets/Proxy.js",
    //"/assets/index.js",
	//"/assets/LoremIpsum.js",
    //"/assets/MediaPlayer.js",
    //"/assets/plugins/AutoPlay.js",
    //"/assets/plugins/AutoPause.js",
    //"/assets/BigBuckBunny_512kb.mp4",
  ]);
}

async function cachedResponse(request) {
	const cache = await caches.open(VERSION);
	const response = await cache.match(request);
	return response || fetch(request);
}

async function updateCache(request) {
	const cache = await caches.open(VERSION);
	const response = await fetch(request);
	cache.put(request, response);
}