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
    "revision": "d003c66e06ab8f05eb4f48aabff5a1ec"
  },
  {
    "url": "assets/css/0.styles.86a9e901.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
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
    "url": "assets/js/1.f9969f8d.js",
    "revision": "62aa6229625cfb94c5d7eccc34d73120"
  },
  {
    "url": "assets/js/10.499f4521.js",
    "revision": "cbb0b1f822a46b6507146db054d34185"
  },
  {
    "url": "assets/js/14.73c70606.js",
    "revision": "9bece67a255065ed1f6cbb0925576a31"
  },
  {
    "url": "assets/js/15.1a76d052.js",
    "revision": "fe5676fb0133a0b6ac65a6f7b3410631"
  },
  {
    "url": "assets/js/16.0a1677ee.js",
    "revision": "95c7ed2a0be773b5d3c2f2ecedeca2c2"
  },
  {
    "url": "assets/js/17.2ba48181.js",
    "revision": "1f83499450f053150d335942da86efb4"
  },
  {
    "url": "assets/js/18.3e2abcf4.js",
    "revision": "a116137c5e80c9ae62109b697f8859a3"
  },
  {
    "url": "assets/js/19.a63f60dd.js",
    "revision": "5ba85b7843484a1bae2c9e88590fd6a4"
  },
  {
    "url": "assets/js/2.f9cf3fd4.js",
    "revision": "c551fa923e644e6401b590277b1fd565"
  },
  {
    "url": "assets/js/20.cfb42325.js",
    "revision": "a02cfd6467dabd50b0c054d311f9a39f"
  },
  {
    "url": "assets/js/21.b77552da.js",
    "revision": "ee123fd46595bb0de18b11c38bbe7486"
  },
  {
    "url": "assets/js/22.c68f193c.js",
    "revision": "b769acfdc8ef143534a42bb9edfefc74"
  },
  {
    "url": "assets/js/23.1572d760.js",
    "revision": "c41520c5dfc65a665d2aad1fba2a75c0"
  },
  {
    "url": "assets/js/24.5a529505.js",
    "revision": "b644d6e6501da1cbf92b394c9bf3b1c9"
  },
  {
    "url": "assets/js/25.40bf0509.js",
    "revision": "1139752d2e35fae6f9defcceb0033ab7"
  },
  {
    "url": "assets/js/26.b6510955.js",
    "revision": "1da7f6988b83948ccdcc5712db1657e5"
  },
  {
    "url": "assets/js/27.7dbb22d5.js",
    "revision": "61ff2671aac323135016789bb586ab3e"
  },
  {
    "url": "assets/js/28.27e5e860.js",
    "revision": "599be1d59c7fecc2ed030e7f4a8f8dc7"
  },
  {
    "url": "assets/js/29.a8cedd10.js",
    "revision": "2e9e90f551c32e7fe5fecf621f7474c3"
  },
  {
    "url": "assets/js/3.6eb278af.js",
    "revision": "4773b68c564ee10f681bd787a71cdc8e"
  },
  {
    "url": "assets/js/30.6472a690.js",
    "revision": "9409695d37ff9ff9c2a8fc4f89568010"
  },
  {
    "url": "assets/js/31.0452e8fa.js",
    "revision": "b4c041dc91d6337bea5b6b20af50dd46"
  },
  {
    "url": "assets/js/32.806f4a0e.js",
    "revision": "abd2434020fc79c071727d4b1a876ae9"
  },
  {
    "url": "assets/js/33.510a706b.js",
    "revision": "863c54506758e45ab34f63d064c2ce8f"
  },
  {
    "url": "assets/js/34.63ffaae9.js",
    "revision": "e05d91256414c0f0f6b0259ef0d42731"
  },
  {
    "url": "assets/js/35.3fd5d0d2.js",
    "revision": "403db1a70676afd54462a149707b4639"
  },
  {
    "url": "assets/js/36.5109cf8f.js",
    "revision": "b70adec4270d7e2a6c26a3d9fee0e62a"
  },
  {
    "url": "assets/js/37.d17fc1d4.js",
    "revision": "9d42d280062d6d8d9ecf9785cb084392"
  },
  {
    "url": "assets/js/38.fbfc795c.js",
    "revision": "a200f7f6444a748989b09d4379f825f3"
  },
  {
    "url": "assets/js/39.aa81b1f3.js",
    "revision": "c5cc66ef503446491c45bc0bc892a386"
  },
  {
    "url": "assets/js/4.6e1f3ef2.js",
    "revision": "abdc0848aa6f24235ab6b5e7aaee2313"
  },
  {
    "url": "assets/js/40.bf85fa6d.js",
    "revision": "cb3f7c38c71bf9c85381832dd60c8d92"
  },
  {
    "url": "assets/js/41.91463562.js",
    "revision": "a83e08abb3130515abb431fd99befb8d"
  },
  {
    "url": "assets/js/42.7351a7be.js",
    "revision": "5b3d29a891ae41d01666a3e42567cdad"
  },
  {
    "url": "assets/js/43.d9dbc9b0.js",
    "revision": "6e6978bc217dfc239fd2942a17ece179"
  },
  {
    "url": "assets/js/44.31c38239.js",
    "revision": "8ad03c8983911b2930237c489f8a5783"
  },
  {
    "url": "assets/js/45.b89c6cf9.js",
    "revision": "c77db1c677cdd06574e9cc98bfdeb25e"
  },
  {
    "url": "assets/js/46.25206ae2.js",
    "revision": "13208cf32964fa1e0fb291cb6c6a6914"
  },
  {
    "url": "assets/js/5.14909f7d.js",
    "revision": "b31068a950ac823c2481b78b44ee6ce3"
  },
  {
    "url": "assets/js/6.26bd535a.js",
    "revision": "ce8aeae3dbaef5c72105145f15efdc79"
  },
  {
    "url": "assets/js/7.0d9b32d6.js",
    "revision": "b72afe24bfa551a24d02d3bde7740a64"
  },
  {
    "url": "assets/js/8.8c7eb4df.js",
    "revision": "b19ac882e517f024670490d64ac429b4"
  },
  {
    "url": "assets/js/9.2f2c7061.js",
    "revision": "528e386f20366db3ea2d5b5229c11ce3"
  },
  {
    "url": "assets/js/app.8479ac80.js",
    "revision": "bf890feeacb3173758d48586510512d2"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.dfbd4b9e.js",
    "revision": "51ac30db2ca2b63445f34d61d38036c4"
  },
  {
    "url": "assets/js/vendors~flowchart.59ece304.js",
    "revision": "20b49164dde3c999bbb92d3c959c33d1"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "e477bb74c9d7affcc84e37fb71a9ecdf"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e53245d8e543775840ceb5c573379c1d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7438d27b677d6d568abcfa3311d82de6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "faa8e55c0c375dd32efe7def2c928d0a"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "386d7abcf4c1cd670eb2b6bc72b3cde6"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b1d626f80b35d9717db16cf4420640c8"
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
    "revision": "df0799876d4045f58659a5ae60f4973b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8ad0b6117c5b37246707d490abf9d4a7"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "1c7cbda324cf826bd305b21966aa2423"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "68ff73b003eb80c4fa8b61f383fd2d6a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "990079d90903416fe3c0ce3b511c7ef1"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "e944e72e40c70d4b85a405543c755f31"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "03a1cd5df10db97b751b6bd685ab6748"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "87f65c9692331f4550f824b447e0aa35"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "814d644ea53913da0a3dd327304f1e97"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "028e256319c9bd37458040c45bb00dfe"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6eac267b0e3ef3fa668fae76f532397b"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "21e5ef3ca90f736a31b6c416ab6d2363"
  },
  {
    "url": "timeline/index.html",
    "revision": "f8a4b74eac905d85dd1e8adcec6241ba"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b4d9949f2f209207cefe0876ad9ae0ed"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "03fa1c212da61ae4cd7b65103712f440"
  },
  {
    "url": "技术文章/java/javase01.html",
    "revision": "f29e34c02cde9d5b4b943b1ab9e75262"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f28565fcc0d0ed0b16931490cc68124b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "947bdc9e4af12e32f3f297f3d0f631f5"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2fc360d19f0eb89828aa709f15a7ecaf"
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
