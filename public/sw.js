if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>a(e,c),o={module:{uri:c},exports:i,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/14.5b24f5864b489904.js",revision:"5b24f5864b489904"},{url:"/_next/static/chunks/174.95f01dafbeea9ecc.js",revision:"95f01dafbeea9ecc"},{url:"/_next/static/chunks/190-962a7f8442c7ae15.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/472-88626057ffc60ccd.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/726-44746f379799754a.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/998-f16b77ff3699795f.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/app/_not-found/page-74d9be57309cb426.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/app/components/Camera/page-98cf3e01c8209f16.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/app/components/login/page-f014d2870b518442.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/app/components/map/page-7c1cf5ae51dfb3fa.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/app/components/scanner/page-f34c5389bd01cf21.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/app/layout-9d607a938f26945d.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/app/page-545b7ee48ae0e135.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/d0deef33.afff9b3bf7059c8b.js",revision:"afff9b3bf7059c8b"},{url:"/_next/static/chunks/fd9d1056-3cbff3119709d183.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/main-app-04958203347de130.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/main-c813a4cbb55bd081.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-da9917bf715a8363.js",revision:"ouljbgOrHVAN7h0chST6a"},{url:"/_next/static/css/75af62ac685fbc7b.css",revision:"75af62ac685fbc7b"},{url:"/_next/static/css/a2bc72e58822ffca.css",revision:"a2bc72e58822ffca"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon-2x.93fdb12c.png",revision:"93fdb12c"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/_next/static/media/marker-shadow.612e3b52.png",revision:"612e3b52"},{url:"/_next/static/ouljbgOrHVAN7h0chST6a/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/ouljbgOrHVAN7h0chST6a/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/manifest.json",revision:"49ea52818c063ea0dd6807e27e64b609"},{url:"/next.svg",revision:"86837dda1f8cf491f88cf35edb845559"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
