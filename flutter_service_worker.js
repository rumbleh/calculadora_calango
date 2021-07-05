'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "dbae1965a905e1033aa2b5fcba46a85d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/logo.jpg": "f2025637528bc4bb57b61a60f973ffb4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/AssetManifest.json": "d7a810890898ee6ee58610ca4931f404",
"assets/NOTICES": "9a424b40d8b058b7029e11736e9d9037",
"index.html": "53c1d679bde19c7d6fc36076b94f3b1d",
"/": "53c1d679bde19c7d6fc36076b94f3b1d",
"README.md": "0a6f5f1733586d7140ee85579f28e803",
".git/FETCH_HEAD": "60bc02719be677eb4a423f8be302d8ef",
".git/config": "caa82a4554d31e4a15e4eee567674658",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/logs/HEAD": "17e1d3634e9c3d94ef4df19b9e72c2ef",
".git/logs/refs/heads/main": "06172b01b6f962bd88eee85366254d00",
".git/logs/refs/remotes/origin/main": "e8671c6e1df06cc3364e9f78d5ab8ff1",
".git/index": "a88ebbc23f55ac294db30985ba8206c3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/df/33a3f933d918b6d6e29568b6d45c48c80b5eeb": "5956238ad35e969dbec1af7ae07ad98b",
".git/objects/eb/c09da4c448c4851f5e78ea659b8ebdaccb0ea3": "4e3307f077387b5f0409e2bff21a38da",
".git/objects/cc/ad0a87d1f5dcf70403dab19fed88c7dec75a3a": "845be66b33a031d8e66ae9fab4ea31f2",
".git/objects/cd/b5837e49824c8a94824a7d314e35a1d395387b": "8e59bd97fec1adc63606afc71dd4ffc7",
".git/objects/c5/9aab64712908a94221336235f1ce43b81dae3a": "7795dbb65dd7899b818200b9f8638ae6",
".git/objects/e4/244fd462785ab334ccfbb4e4f780bd8c9b49c8": "408aae054ae6e93f2b1e1ae52613e31f",
".git/objects/a0/250d64eca531c61c70095fd79aa3ad7bfd959b": "8d10448bca4d9d22feb307aebed2d45e",
".git/objects/09/72abdc4582865b858bd943afa2feebf3f86b89": "40aba06cd5fc6affc60bff24919fff19",
".git/objects/85/3080ea7db49aaba9c197167514c44fc6da194d": "0a7ef40c183600fc46d3823faaa7265d",
".git/objects/65/7de4e7c433256bc40c653e75c647c954573608": "ced21c17a2f849b01c1d45bc2334afd4",
".git/objects/48/0750701cf848ab3c7cacd5b9fc52abbab3ff78": "56c557d2d550034707b1f57a92bfd2bf",
".git/objects/a8/9a55216a6b284d88853afe38632d51acc763b2": "d977cfe20249e1262f8bfd208207f781",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/67/b75f324132983f727598fa6758a7ad8d6e6567": "bc2f00068d1eddac77305e08e0d6725a",
".git/objects/e9/f772176bfba5f9d981ef3d8574c14fbc4b9e2b": "fc386896e3ef958ee957701171e6f379",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/da/5c9160b010cceb1f67863a8ac891f094c84002": "f656423f892c570ab1bfd11ed3189dbc",
".git/objects/07/5b5e85c5cd619aa1b387bc6516f224a614b1dc": "b653be5bb6ec7230549cf3df09d1c823",
".git/objects/07/33a0f1a65d463c413daf27c41bd49fb8093830": "466d8ecea8460fe237562b2e13aff3a7",
".git/objects/07/30cf727b6a037ceef70c76d75122802c15f7bc": "6a8c5d61bdd2c14ce8e0c1fb187bc51f",
".git/objects/89/ce573756fbc84736df0c9e8d290963826545f3": "30346101b2cd10b459c56ca890ffa443",
".git/objects/f8/b3bcd4007a7692ab2999e7bfad0d5e11263432": "1f9b688d081867335ee2bcf5fc987249",
".git/objects/79/8b63aabf1c4e11181abf4cbe1858526b441988": "e651550ad99b13fc2b8d60975a3cea4d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e8/15dd5e6b3a7810b542a55206b0a9a970810644": "0b3751595ddb0b05cf05259225aa91b1",
".git/objects/02/8933363c1ce1ea8d6a11bbd2050876797e3328": "359b50d9a2eb3d8e2a55060f9a9520f0",
".git/objects/27/eb6a7ef02313d7b6df6b2cee0d52f2c3452504": "dde97ebfb6f28759958515cc16190dbc",
".git/objects/27/b4da9d30e30a3ac816d1aec9158fc90b6cece0": "22f52b3fd4bbf11f1ae2d71f4b1da6fd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/34f704dd9e8ce2c5f006f67be780201e289dd4": "4be50c83572f2185d438ae8ccbcc35d7",
".git/objects/8e/efca1ae5d2b119220b918389ee98ceae3bbde0": "29fe6c102ee46905a7e79ad55019b9b5",
".git/objects/06/56059320a85d3d16fa12afabaeadc41f30bb6c": "2010e9a4ab8608ff152268015a7e9c8d",
".git/objects/d8/24ed3a2a2ce911cb19edbf1e2339735c9920f9": "2e4d3f339312586b5749d765c7cb6da2",
".git/objects/4a/d0801450e0288064f06cdf66fba3df59644886": "5460f58e7487dedfd2cc89248243fe20",
".git/objects/7e/e30b479aedf2f3025b0bb25fba3e2803b75e6b": "113d76c73c4c81ebea0587f861e1ba39",
".git/objects/7e/c2dc3afe627eebcbc877adf90d75d96f57fa54": "5717e7d48a811c5334b054cd367db24c",
".git/objects/ab/80c8ac1cbb9081a7f5dfaaeac68924761372ae": "a6943a1af74cb5a96f95f558e4c9f600",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c2/a5d84f8d5ac772e7c73c389e5f83646bba4a5e": "8e23772ae2cc864c71161069fbef7275",
".git/objects/ee/cec12fce8a9c860ab82c781d07b15dea9193ba": "432077e213496e1a2a580c477bb8b3de",
".git/objects/b9/b87d6f700631b464e492c044d41a872d1d04f2": "64457a8160e79575c50fa11ca9abfc4d",
".git/objects/80/643d6fb4bcb4c5cf71f7cdbf9ff112cd2eafe9": "22cbe54d2156301111b79b4f9499ea48",
".git/objects/4b/f9cb233a24ac7bd1666e1f9310734afa0ea013": "c5b526fa8603442dff82d40efc8a2cdd",
".git/objects/fe/a642cfcd50028e2bca90c1fcfc0cd80cc9b05b": "1ef514a24e2cea25e02cb74cb5ef6804",
".git/objects/d6/360c13f65508bb2fea078ad4f3d1ca5173d629": "a3c638fc55156b7fca4d918acc432479",
".git/objects/d6/8f1c9ca8ed0f55eb58cb98171b048d68617481": "43b59477c9966306fd032b6644f942f0",
".git/objects/d1/529b7298d5e3cb628cc0a42b922fdea27bfb74": "12337981a72c38d03557c41cbea1e842",
".git/objects/b7/64464573376d1c2cb816df37c1bfffd9bfa481": "fc154718bb8b6b8cc8d6865a970a438f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/55/64d7ff799279d9dbb996dca8d9ce9e76464d6e": "cc990755905ca8120b7501ed1e3bbcc2",
".git/objects/3e/9d490451910845cb42c89ff138f474b8b96ad3": "0059a096a0a3e47a627d529114cebb5b",
".git/objects/3e/bab0e451798e164d934da48816714677ca450f": "c31e2dc83bdb174787e9e9cc2699b7c4",
".git/objects/3e/44ca4432fad999c285302ee221867cf25f1bf1": "f10a91f5664248c0cbc391bdcb3835c5",
".git/objects/2e/62fdad4d723837537f7e2b1fc1990591a9a7e9": "cb783d1a860488ad66b50fd1e94b6562",
".git/objects/37/e395bc331c02da60f614402f2cf68664252aad": "0623a3f0e616e5f8508e089d78c27f87",
".git/objects/ff/f03f1f79dc5385989507af22be9b4e2c8ca35d": "ab2575e86a9d16345a066318dc3d32f5",
".git/objects/bb/59fa272a7f944b0d10b6c1865f123d2768b044": "19f35dce273e1a664a49c03fa456141a",
".git/objects/bb/5e968dd44c74eca83e190cbe7e6b24c3e53d67": "ed8a1d17fc8153d5f5f13443be2826de",
".git/objects/81/143839022ad1ec1d3e703302a5ffb334eeb2c5": "50ed5b456053a073943ac8d5c7fb3385",
".git/objects/01/29b2b453d5d02b2e1b53262b72f197a10f265a": "324c19b9d34bc278deb4e943ce351a5f",
".git/objects/ef/5ad53bff234cdf2693c077f9fbcc53eca91718": "030b3d33ff5390bd76dbb66a954aab89",
".git/objects/4c/99ae26a0f1e2b0193d6420a5f55a82eba42e75": "aee4b06db598f631c55ffe65033a9819",
".git/objects/6f/75adef4d428d5e1b1b51d0e726f7f809802606": "6a7fb4b0f78b6d2805ce842bb1d71291",
".git/objects/ca/7511d81346995cf1366231ca88f97ee0736cc2": "fd7877bd512a2178120b6d4e72237191",
".git/objects/97/d9d3214b0df1981c64ce3b760ce4d7d607a1b6": "a84890c87ca26019db9e690876a396e8",
".git/objects/f0/aa30ceb45d68aed2fc8152b1cd946245fc4ba6": "423d28e612af93c1919c7efb62b2fa8c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/refs/remotes/origin/main": "9823fb69a7400fb782feb798c760c4ab",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a3cfb512b3c027db3614839a91196c62",
"version.json": "cbb8a1762c4f73300e5a2b41ee74cab1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
