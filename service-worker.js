/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dd6cebd47d3fff9bcbc9d3db5211f899"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.680a152f.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.e1bab619.js",
    "revision": "0c777fe88fdd1926f6457e03ff5126c9"
  },
  {
    "url": "assets/js/13.ff8869d1.js",
    "revision": "b8934ecdfbc3eb16d6388595c0372104"
  },
  {
    "url": "assets/js/14.179eaf8f.js",
    "revision": "7fdc669ad85130ad137a228209249b3d"
  },
  {
    "url": "assets/js/15.54c65796.js",
    "revision": "31f6354b53226bdfec8eac4ce8fa2e15"
  },
  {
    "url": "assets/js/16.312b5bea.js",
    "revision": "bc467476030fc056cc659098f66714de"
  },
  {
    "url": "assets/js/17.82edbc76.js",
    "revision": "9e25ee41b8d2cc75f53f8354ae523aa8"
  },
  {
    "url": "assets/js/18.f08bf664.js",
    "revision": "826306b4983d384ba3626387a7270c4c"
  },
  {
    "url": "assets/js/4.3d91147a.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.18c18565.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.3f3b7318.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.bd3f3640.js",
    "revision": "9abc3ecf1f1ce56c3bc8005b71634cb4"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "085a753dd078b925fc16a4f2388a7a9c"
  },
  {
    "url": "categories/java/index.html",
    "revision": "075ff2133ef3492d0c80b833b2e0985c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2e95151330561b8988ba391dbcc66068"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f5cecc9f896449ae52884fa67ebc2a89"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "bb7f3002a3d66eb4d41b0edac2d16d91"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "3cdfc58390ddf01343b5f6a00e838891"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "1373c239700662f94165d12a1b9cae20"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e763490d1bf808c369ca17bc377cbcc2"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "dfde6aa5c0c356311be9c221affebf07"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "59f24f2023c9819539b6db36b0ca45bd"
  },
  {
    "url": "tags/js/index.html",
    "revision": "197a560f80c0d67ca0e856623abdeb13"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "2427ceb1621fe5b87f725f5b9dd3173a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "45b6bb1a8df44a7f03740c2fae3cc0bc"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "84d2b4d13a4af09ed90edf477f96187f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b989562618bdfbbf12f10d80477daabe"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "14a7c17675e5b8c5458be8dd3677cc6c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0ecd54b7279cff4f92f2d23625b9497c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "16cd85e9c8fc13474969b3468b547b5c"
  },
  {
    "url": "timeline/index.html",
    "revision": "b2c14b2cdbb741617fe6b559789940d6"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "14a6bfd975506ab9febf5b126ec5f905"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "12c46d14208198bff82328ed70146f5a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "547a2cf542a6a1cb898d95eb7c90fb2a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3a003285b5a504accb08a5c117488308"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e8f160af311c8a9f7f7c025dbd1b9609"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
