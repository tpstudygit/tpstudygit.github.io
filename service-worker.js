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
    "revision": "e739906cd10b84e17d10bb7ba35db0e1"
  },
  {
    "url": "assets/css/0.styles.86a9e901.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
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
    "url": "assets/js/1.dd5c49f0.js",
    "revision": "7820ca282e58447da47b7cfb2492b1b7"
  },
  {
    "url": "assets/js/10.271c0cb7.js",
    "revision": "371f5a1a78f760d73833e83c4dbd0e37"
  },
  {
    "url": "assets/js/14.a4579092.js",
    "revision": "83c461bd237f24ef59506f8c48ad7bbc"
  },
  {
    "url": "assets/js/15.e9cf2528.js",
    "revision": "9aad010aae5beeda0ae4b411e10218e4"
  },
  {
    "url": "assets/js/16.6be706e8.js",
    "revision": "42c5d6ff1f4bc854eddb882a3fd9ea43"
  },
  {
    "url": "assets/js/17.d3a9f29b.js",
    "revision": "aa7dfaebdd32b8ec4c1f6138d46baafb"
  },
  {
    "url": "assets/js/18.1815ef4a.js",
    "revision": "4a47b5294c25381de5f2d35067e66f94"
  },
  {
    "url": "assets/js/19.9c4a540f.js",
    "revision": "42c40f95f68945a5f589dff9639b9882"
  },
  {
    "url": "assets/js/2.9ae47984.js",
    "revision": "507cb0debb57de0128e44ae53eb8af84"
  },
  {
    "url": "assets/js/20.a6c4f847.js",
    "revision": "09b43908e8d693dd31a9b03fb1b9700e"
  },
  {
    "url": "assets/js/21.58cc653a.js",
    "revision": "1f84b9f9986f98ef0d3692050f372734"
  },
  {
    "url": "assets/js/22.3f4f2c83.js",
    "revision": "dbdc7a7c38a76bf6ae7d3e47d99d7937"
  },
  {
    "url": "assets/js/23.b0290389.js",
    "revision": "fd10f49238c2ae6f5f7c4c3b09a80965"
  },
  {
    "url": "assets/js/24.f1eb59bb.js",
    "revision": "96290e15f7ddcaac5e0fa4f02f0fb160"
  },
  {
    "url": "assets/js/25.0c6f409b.js",
    "revision": "4302a9d00ff3064ad90a6c0064634e34"
  },
  {
    "url": "assets/js/26.da51a734.js",
    "revision": "99aee7ec9b976d6c47eb8af2659b7f70"
  },
  {
    "url": "assets/js/27.fb3609d3.js",
    "revision": "aa367c8fc4e491fffbe480e7f3edb778"
  },
  {
    "url": "assets/js/28.8d8bff7c.js",
    "revision": "9efda8b0bb5bddee6b3b3993c0b3bda0"
  },
  {
    "url": "assets/js/29.11158dc2.js",
    "revision": "fbed24a318f86f74c77799801b3dbfd7"
  },
  {
    "url": "assets/js/3.0b3f87c2.js",
    "revision": "592cafb658770140173f8ad3470443b4"
  },
  {
    "url": "assets/js/30.eb272dea.js",
    "revision": "fd64273476cfd43a0247475081364e2a"
  },
  {
    "url": "assets/js/31.7644eaca.js",
    "revision": "99fb13fa2f1a57914fa20f9021840cc7"
  },
  {
    "url": "assets/js/32.8bdee91f.js",
    "revision": "7188c833c5330118ecd3d17c78ab4570"
  },
  {
    "url": "assets/js/33.ca210812.js",
    "revision": "39ff12ad6d56b1ae277196229c8abfa4"
  },
  {
    "url": "assets/js/34.26b6becb.js",
    "revision": "5a0adadc2c6e7bfb42234190d65593a2"
  },
  {
    "url": "assets/js/35.7f96f37a.js",
    "revision": "3e99de8c87b6ffd013d2ca5056c8aaa1"
  },
  {
    "url": "assets/js/36.82c4d751.js",
    "revision": "bb502520b38db161c6affeb1b4abf83a"
  },
  {
    "url": "assets/js/37.29871622.js",
    "revision": "798484c33b4bce51aa9f80dacdc88c00"
  },
  {
    "url": "assets/js/38.5e51697e.js",
    "revision": "a6c1ba78aa343e9bde9e365708f8f460"
  },
  {
    "url": "assets/js/39.72fb0516.js",
    "revision": "734cfb4034c89484f93077f2aec0067d"
  },
  {
    "url": "assets/js/4.c2946fb2.js",
    "revision": "844be4fe6184302c1e37fa6bee121754"
  },
  {
    "url": "assets/js/40.e7485023.js",
    "revision": "278885928eb1fe001f1427846a4b0dae"
  },
  {
    "url": "assets/js/41.786f47b8.js",
    "revision": "680c0235b709448e5ed8476af0ad96c5"
  },
  {
    "url": "assets/js/42.a9acabc9.js",
    "revision": "22580a039bb54721f497eda39ddd57d5"
  },
  {
    "url": "assets/js/43.c9614376.js",
    "revision": "2a17f57c8da1660c93ffcfe88f5e9f78"
  },
  {
    "url": "assets/js/44.05566547.js",
    "revision": "85ee714d7dc530f65a32b1eb282187c6"
  },
  {
    "url": "assets/js/45.81ee5fb5.js",
    "revision": "ee3156be38c8107140e63e697a3d1aa8"
  },
  {
    "url": "assets/js/46.379dcc71.js",
    "revision": "5f855dcb0f4302fb419bed3f4baa7910"
  },
  {
    "url": "assets/js/47.f509e91b.js",
    "revision": "7ac14f3b0ff7956b4ba483721fd44118"
  },
  {
    "url": "assets/js/48.98a7500c.js",
    "revision": "6cf43b5b2fadc86f27ca5cf6cf40497e"
  },
  {
    "url": "assets/js/49.cbb1950c.js",
    "revision": "f245241116ba40db1cc7f2e2d0813cec"
  },
  {
    "url": "assets/js/5.da032fcd.js",
    "revision": "f831581a4a8f22fb5a981f74a15918b9"
  },
  {
    "url": "assets/js/50.737811b0.js",
    "revision": "a7eaec708a484d2c23776b8605c3f93f"
  },
  {
    "url": "assets/js/51.bfc96dac.js",
    "revision": "3ae0657cbcf1a0e971392cfec5c426a6"
  },
  {
    "url": "assets/js/52.374b95c4.js",
    "revision": "3d57900241285ce9b1f92b59ab63f48c"
  },
  {
    "url": "assets/js/53.78b9a1d3.js",
    "revision": "5342bf77842c76a2cdc819a6dc473a28"
  },
  {
    "url": "assets/js/54.31860a82.js",
    "revision": "35d533acfca9c17e9622c176555bfd1e"
  },
  {
    "url": "assets/js/55.8e17d88a.js",
    "revision": "d3dccb00f4ddaf067d6a83fa6950287e"
  },
  {
    "url": "assets/js/6.a2208abc.js",
    "revision": "8dbeaef337a1c9c660011f952f28fa1d"
  },
  {
    "url": "assets/js/7.90fd02af.js",
    "revision": "5c47629fa594936d7d4ba2b30727482e"
  },
  {
    "url": "assets/js/8.4e31eae2.js",
    "revision": "e30bd7cd15a0a6fa544f13eff0878f34"
  },
  {
    "url": "assets/js/9.ade9127b.js",
    "revision": "43a40b1b1f59bca180999795f2de1564"
  },
  {
    "url": "assets/js/app.0734c8e4.js",
    "revision": "8f1e8a8902e1e54a6bd8240865c17fef"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.69fd13cc.js",
    "revision": "c51b60a1ae4079f4e37efe70bd6e8054"
  },
  {
    "url": "assets/js/vendors~flowchart.100002f8.js",
    "revision": "e7ca3e459dbddaaa1ca9afd36e1e5b14"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "266c13df0a14d9edb31b9142f46f1880"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "49e780fbf9561cb0c77ca56654f8bb80"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "26273461adf53b2f31475b00f8545a4a"
  },
  {
    "url": "categories/中间件/index.html",
    "revision": "959ade656a098d91e7b3fb0fd36f08ef"
  },
  {
    "url": "categories/书籍/index.html",
    "revision": "4a9dfe4c028496b06121a68fdaab23fd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6020701436272dff812f9cb36123275f"
  },
  {
    "url": "categories/实战/index.html",
    "revision": "dda2e6e6e662ef8439f211270bb4be50"
  },
  {
    "url": "categories/微服务/index.html",
    "revision": "c45624f81d706f685f77676f55892e55"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "cc3a796ee5062cacbdabdfd76426771c"
  },
  {
    "url": "categories/框架/index.html",
    "revision": "7095b0226ac1ba40ec9a9f7fe974f848"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2ea286b7ace9c580f0d89bbc29202806"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "5c283ebb4ba0f1902c3a654a6cc0c7d7"
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
    "revision": "cd599c7813ad53e7a0cf87cad95b7e5e"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a6e03858fbed1d28e7931364365d6e2d"
  },
  {
    "url": "tags/Elasticsearch/index.html",
    "revision": "7b24421f718a3821389653c330076fb7"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "cacc04481e6d8cba7ddaa231e601a2cb"
  },
  {
    "url": "tags/JavaSe/index.html",
    "revision": "3df2826f1f20265e638a151641a91116"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "50dd3de18bf7f6c67dea7062b3f2b4f6"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7f78c89070fb5110c554c7453bf6c2e6"
  },
  {
    "url": "tags/MQ/index.html",
    "revision": "b628a33fcfa43968d657cccf6ae33ef3"
  },
  {
    "url": "tags/Mybatis/index.html",
    "revision": "fd861eeb7cede8054465e6e026de4c0b"
  },
  {
    "url": "tags/MybatisPlus/index.html",
    "revision": "91a2536bc30d89026086319bf27d6ec8"
  },
  {
    "url": "tags/mysql/index.html",
    "revision": "0a12785975116e437cfd8118cbe34522"
  },
  {
    "url": "tags/mysql调优/index.html",
    "revision": "fca995a4007427e2e86bee845e230ebe"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "e7afd1696160baf9fadbd30b0e29b6c3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "34eb78acdf7b72ef149b9eea51bc526b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a3bce80858e9ba95cfd20c9feb9ecf7d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4ff8f1e9d82269b48151a7d043af13d7"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "ccc8ec4375983400b8470e69a89aff66"
  },
  {
    "url": "tags/多线程/index.html",
    "revision": "f87aa0342243d2483bda235ab7b7be47"
  },
  {
    "url": "tags/并发编程/index.html",
    "revision": "081d0e30d099c6b673a183c1fa817ec1"
  },
  {
    "url": "tags/微服务实战/index.html",
    "revision": "967277e86ed60dd63c413f52bc5f0d18"
  },
  {
    "url": "tags/服务/index.html",
    "revision": "67448a28b5795ce292e0ae06c450997f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "57177bd7b475dc407dd5b259072cd057"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1967bb35e218660a4aa00be730f948c2"
  },
  {
    "url": "timeline/index.html",
    "revision": "06508754ad50a7982a5c937f4c296957"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7f4eb2723dfe325557785ea858a04653"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "a34b7c99450e349c4f5b852c13e274cd"
  },
  {
    "url": "技术文章/中间件/ElasticSearch/elasticsearch.html",
    "revision": "2a02a262b552fb77ed5f78e8afda1e43"
  },
  {
    "url": "技术文章/中间件/MQ/mq.html",
    "revision": "042fafde65e62405fed4dfd2daa5d61c"
  },
  {
    "url": "技术文章/书籍/Mysql/gxnmysql.html",
    "revision": "8cd8790cd497b67a6e48acf3dedc68e5"
  },
  {
    "url": "技术文章/书籍/并发编程实战/bfbcsz.html",
    "revision": "d34020f2f035fe17492b2859e0944a1d"
  },
  {
    "url": "技术文章/前端/js/js.html",
    "revision": "9d159913a26c12c25bf9c0aa2c7d71d7"
  },
  {
    "url": "技术文章/前端/vue/vue.html",
    "revision": "e9b61d32e3db85e87f29aaad06a6bcff"
  },
  {
    "url": "技术文章/实战/微服务实战/wfwsz.html",
    "revision": "5ef10d7e6377844be0a1ec28f486e35a"
  },
  {
    "url": "技术文章/微服务/wfw.html",
    "revision": "fbb0d3e59a7341145efd6f97fdfcc63a"
  },
  {
    "url": "技术文章/数据库/Mysql/mysql.html",
    "revision": "b425de925e9b351a0308ed979b6a6b92"
  },
  {
    "url": "技术文章/数据库/Redis/redis.html",
    "revision": "2fe7faf95553c2e84a10eac1d1d353c7"
  },
  {
    "url": "技术文章/框架/Mybatis/mybatis.html",
    "revision": "b011f87f983c844cd08aa3587fc4437b"
  },
  {
    "url": "技术文章/框架/Spring/spring.html",
    "revision": "4af5f2a41bceb7ee94a61fa11cf4dd00"
  },
  {
    "url": "生活分享/life.html",
    "revision": "abb9c6507fde1a4343d0ee271d96cf5c"
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
