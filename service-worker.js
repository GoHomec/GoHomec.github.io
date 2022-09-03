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
    "revision": "f1d04b7b9556f87fd501525fe8bab7d0"
  },
  {
    "url": "assets/css/0.styles.23b1e311.css",
    "revision": "ac44bc12802bf3ef8845d4af5b8fbdfa"
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
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8436fdbb.js",
    "revision": "25b0b648d6f9d8260e2c869d0e53eaa3"
  },
  {
    "url": "assets/js/11.0e644551.js",
    "revision": "de01e29578841ed7e5ad58b8f06abd57"
  },
  {
    "url": "assets/js/12.e26efd93.js",
    "revision": "5b54b96a20f986da00ee435a5ac8524d"
  },
  {
    "url": "assets/js/13.6f7f2733.js",
    "revision": "31218c2860d9f28c3a39d6fdb21c7cc3"
  },
  {
    "url": "assets/js/14.e61a2cf7.js",
    "revision": "acb23107b36855c306cadd46243b34dd"
  },
  {
    "url": "assets/js/15.76093b46.js",
    "revision": "a81d7d0d9bcce6e8ccf91d62baa793cf"
  },
  {
    "url": "assets/js/16.5554b971.js",
    "revision": "63fe747c87237a9267a0602a934c9496"
  },
  {
    "url": "assets/js/17.b7d3f474.js",
    "revision": "fbdcbcff8b3c83d9a2ea40017f2d54c2"
  },
  {
    "url": "assets/js/18.d3f7f563.js",
    "revision": "92f9c4bdfaefcaa5120c0e3209916583"
  },
  {
    "url": "assets/js/3.f4508a87.js",
    "revision": "a700cbc4b86c4b143a8d31f8dd62cade"
  },
  {
    "url": "assets/js/4.d65b8449.js",
    "revision": "0c718d938055f397b35818b8d0811d92"
  },
  {
    "url": "assets/js/5.6bb72895.js",
    "revision": "163430f1c36bacfc847be2574c9db608"
  },
  {
    "url": "assets/js/6.c26eb98a.js",
    "revision": "53415797bf91212a1d655b96ed4f6bc9"
  },
  {
    "url": "assets/js/7.deca7be6.js",
    "revision": "befecec4c3392d489888cf55dcca2e79"
  },
  {
    "url": "assets/js/8.45700b16.js",
    "revision": "b7e1388a79eff9177f2a15164a819d0a"
  },
  {
    "url": "assets/js/9.8c2b24e5.js",
    "revision": "750b54e95d7cd34329707aff6e395f16"
  },
  {
    "url": "assets/js/app.de7ef840.js",
    "revision": "8e48b8ed0ecda946c76dcc253c581577"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.96ea6645.js",
    "revision": "46b72eef71857cd9830166cc3f4bb236"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "css/style.css",
    "revision": "a4b81513da422aa349def3638dad687d"
  },
  {
    "url": "guide/index.html",
    "revision": "2c645ceac63d746074301c71eb309e82"
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
    "revision": "53bfe6b0f1d00cb92a8d6e477529053f"
  },
  {
    "url": "java/basics/java-basic-questions-01.html",
    "revision": "a46adfab42d1fe88af03604148c3a5b1"
  },
  {
    "url": "java/basics/java-basic-questions-02.html",
    "revision": "da794c466fb2e87a419bc9f77076afef"
  },
  {
    "url": "java/collection/java-basic-questions-02.html",
    "revision": "cdec6b2e2c1c73e46f90aa57c34319b0"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "timeline/index.html",
    "revision": "a967717e76a2d4f3de6a0ece04edc051"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7ab4c1de7bb4a2b78f83e1d79b21b3b9"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "fbd4290dc854d9e5bb3d6a9a040c728b"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "faf05f07d06abbfa917047a18119c264"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "789b8f6dc96bff1078be0e6fe05394ca"
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
