'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f718bb0fbac810da8133a8e0db907c8d",
"assets/assets/client_image&logo/Deshi_Jhajh_logo.jpg": "79fe24806887b84ca2333bd6afe2294c",
"assets/assets/fonts/Roboto-Black.ttf": "ec4c9962ba54eb91787aa93d361c10a8",
"assets/assets/fonts/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/assets/fonts/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"assets/assets/fonts/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/assets/fonts/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/assets/fonts/Roboto-Thin.ttf": "89e2666c24d37055bcb60e9d2d9f7e35",
"assets/assets/fonts/RobotoCondensed-Bold.ttf": "52f9b35f9f7cfa1be2644bcbac61a983",
"assets/assets/fonts/RobotoCondensed-Regular.ttf": "0e1821fdf320fddc0e1c2b272c422068",
"assets/assets/gallery/img_1.jpg": "61eabee6dd0bbfbf04c378cd41680c5c",
"assets/assets/gallery/img_10.jpg": "9c08bd5d841b6d57838a14e44b521080",
"assets/assets/gallery/img_11.webp": "6b7be0398ed28b296d4835851490a1b6",
"assets/assets/gallery/img_12.jpg": "3cd1664e4929e406257ea912f68cd621",
"assets/assets/gallery/img_13.webp": "b3b1d0769dfd8e823756ee1527d218b0",
"assets/assets/gallery/img_14.webp": "626d4b8c2908caba9fb9869ad1df2ccd",
"assets/assets/gallery/img_15.jpg": "c1ca85f377b2a843dc26f49585531c34",
"assets/assets/gallery/img_16.jpg": "4ef683a661daf33e1fb92b52065fbdfa",
"assets/assets/gallery/img_17.jpeg": "301dc5d0c0053aae40255e1031964fed",
"assets/assets/gallery/img_18.jpeg": "9dce692a5d16cfd9a4072a2c3447a5aa",
"assets/assets/gallery/img_19.jpeg": "aa560f8594df47763f5f79a09c3d1cf3",
"assets/assets/gallery/img_2.jpeg": "d9b59e33bd5af44795f1e38cd981b6f1",
"assets/assets/gallery/img_20.jpg": "f8f785eb1caef77ca3b6c27cf9d42a2d",
"assets/assets/gallery/img_3.jpg": "bd825bfed9790b1bef501f1ec4f0bc8b",
"assets/assets/gallery/img_4.jpg": "ee976b9bcd2b55071d51092a6325c0c0",
"assets/assets/gallery/img_5.webp": "f79497de9aab34dc52ac75925bb6cb5a",
"assets/assets/gallery/img_6.jpg": "349c52598cb28ea9d6eabc504e9dc746",
"assets/assets/gallery/img_7.jpg": "6e213188d3bc71f3798777a0f3f8960c",
"assets/assets/gallery/img_8.jpg": "735f71a9eeae396cab5b58a8c8944a88",
"assets/assets/gallery/img_9.png": "5da62fd4928b798fe5f45e50ebbae2aa",
"assets/assets/icons/App_Development.png": "0a2ef076ae08c267feec4240b5af795e",
"assets/assets/icons/Concern_Icon_outline.png": "a3f7036f738e48b74c1a3e4d18d463fa",
"assets/assets/icons/Creative%2520&%2520Graphic%2520Design.png": "46a3074811a920d10063915041118cf6",
"assets/assets/icons/Digital_Marketing%2520.png": "0cd2846b249f5f7495b9b68ec34ea54e",
"assets/assets/icons/E-commerce_Consultancy.png": "dc8c548b9d85c2ea763eded9cec8c6c6",
"assets/assets/icons/facebook_icon.png": "34433032ec57ef0e5486af62588a5a70",
"assets/assets/icons/Influenced%2520Marketing.png": "50044a98157f09879c35cf28222d3163",
"assets/assets/icons/instagram_icon.png": "25ae123a19ef11fcbed541c033cb5376",
"assets/assets/icons/linked_In_icon.png": "425c0312ff1a933f3faa7539bef999cf",
"assets/assets/icons/Marketing_baz_Logo.png": "be5992fb0d3c5d9820168048774ea906",
"assets/assets/icons/MB_Logo.png": "149e6813ea7b3b224bde61f3aa7ef868",
"assets/assets/icons/Search_Engine_Optimization.png": "b53fd124ca7eccef1765f493e941f347",
"assets/assets/icons/services_icon_outline.png": "e987e27b9233d17d9ee14c4752cd8425",
"assets/assets/icons/SME-icon.png": "d9c56e86345d44d3818cfb38647269ba",
"assets/assets/icons/SMM_icon.png": "4262db27e001ef4cd8ab5bd5d4d231fa",
"assets/assets/icons/Social_Media_Management.png": "85a137e0c2ff5d7ce21abde205212d26",
"assets/assets/icons/Software_Development%2520.png": "328cfabf48b53f27ac419d4801cc8b73",
"assets/assets/icons/twitter_icon.png": "1798859a2b3306f3870ad3e73c232e70",
"assets/assets/icons/Website_Design%2520&%2520Development.png": "a2c9f61452f5d083e943107529ad0e17",
"assets/assets/icons/youtube_icon.png": "3421f0f1f3c0f5d2807ac4dcc4fe3abc",
"assets/assets/images/About_img_1.png": "f570d0d9a3b8beb484b172d2d224625e",
"assets/assets/images/about_img_2.png": "df99ac83302c883a2bdb7a9e70923824",
"assets/assets/images/Brand_Consultancy_Service.png": "af1df0d1e7fc9438d7b0d985600bda35",
"assets/assets/images/Cando_style_bg.png": "bed03e96d07d32703d4faddf35b545de",
"assets/assets/images/Cando_Style_logo.png": "8406fd4f3534e69df31c2894865c268c",
"assets/assets/images/clients_defult_img.jpg": "1e6a95d153ef3cc918a2d6c117af8705",
"assets/assets/images/Creative_&_Graphic_Design.png": "b96ff8572d0b21e1b5e1f2a7562551a1",
"assets/assets/images/Digital_marketing.png": "5d169d0230ce55992700f87e1113f8e2",
"assets/assets/images/End_line.png": "b52503bc5e932d71014052c0b39efd24",
"assets/assets/images/Event-Management-Service.png": "7e79f5f3ebaacfe7e44a07999e63ff5e",
"assets/assets/images/gallery.png": "5d5516dbdfe9e3d98f3928a14223760c",
"assets/assets/images/IMG_1.png": "8d26a09337ddbb454b3f07a56f4b06f0",
"assets/assets/images/IMG_2.png": "6653b7fe0ae9382f338629b154a97a3d",
"assets/assets/images/Influenced_Marketing.png": "99fa0c92efb042cb0d0a5eb99cc963e9",
"assets/assets/images/Innovation-management.png": "946319832690e49615cb6be5bef0b5b0",
"assets/assets/images/IT-Service.png": "65ab521b72d2a95d9b450bc4ca9787c3",
"assets/assets/images/Line_shape.png": "e37e4491a91cb46a8fe1feb4bcbbd4e4",
"assets/assets/images/Local-&-Corporate-Event-and-Activation.png": "e3cf2e63782e0359fa61f82c36d44e91",
"assets/assets/images/Photography-and-Videography.png": "576c424e8e22dd18c301f2137c447cdc",
"assets/assets/images/Search_Engine_Marketing(SEM).png": "3b610ed7fbea4e4493aa9822d8532bba",
"assets/assets/images/Search_Engine_Optimization(SEO).png": "f0164c0623d020bf7f451eac8610e70b",
"assets/assets/images/services_1.png": "4a5713dc655ae46fc8b8f1612a43c258",
"assets/assets/images/Sister_Concern_vector.png": "90dca72096f7f5f4029454ece7818600",
"assets/assets/images/Social%2520Media%2520Management(SMM).png": "a32553f184aa81d5b76da47187303812",
"assets/assets/images/Social_Media_Marketing(SMM).png": "7443f2705e557a80756c0198834bc433",
"assets/assets/images/wedding-plan-vector-.png": "54ae95643509f72d905082d30192db64",
"assets/assets/images/YEM_Logo.png": "86dc109268496bb7885cb361cd34b526",
"assets/assets/images/Yes_Event_Management_bg.png": "b4fc6a2454a9026d3e2247e23ba6e4f7",
"assets/FontManifest.json": "f7c71d097959b14e73260536335221c7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c945676305c8950a5f4a09ca7828b388",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"favicon.ico": "42295bc7dd53fba8454ee0dfde30d4bd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aff90f094675a37ec49d028ca03166c5",
"/": "aff90f094675a37ec49d028ca03166c5",
"main.dart.js": "4a6c3bc8b66fe03ba955bc99df8b98bb",
"manifest.json": "09d0eb52e15edf71390f4c4fdb9f10fc",
"version.json": "16a44dbba4d5b52807dba2234bb636e6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
