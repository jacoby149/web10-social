const staticApp = "web10 social"
const assets = []

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticApp).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })