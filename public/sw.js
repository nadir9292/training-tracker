if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/HWt1nIFRbKRGD7RfJAHqY/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/HWt1nIFRbKRGD7RfJAHqY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/190-f4573b87469744de.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/30-6ff7ebd8380f9f11.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/635-7462413022d7d38f.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/app/(auth)/register/page-6f014bacf8f5e436.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/app/(auth)/welcome/page-e600f674c8f46ac9.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/app/_not-found/page-72f1a9a9c8f4060c.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/app/layout-dd6ae7f86ba85662.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/app/not-found-aea86b767b34423b.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/app/page-e4ec5979e629cb18.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/fd9d1056-cef7259746997f59.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/framework-d1703057b07599d4.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/main-9667c38feb8a62f7.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/main-app-bdd2932fb634b16d.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-91b2d14d0f678b80.js",revision:"HWt1nIFRbKRGD7RfJAHqY"},{url:"/_next/static/css/8bd2fb9e0907855c.css",revision:"8bd2fb9e0907855c"},{url:"/apple-touch-icon.png",revision:"e3629ed2e852d026869595f538e673cb"},{url:"/avatar_default.png",revision:"e67e358c72e30a5ec593534154b91ea6"},{url:"/bg-mobile.png",revision:"804ba9d4ed65dea1b4fd0954fc3daad6"},{url:"/bg-normal.png",revision:"23d34ed5e34cd50ceb4614ad43e11a4b"},{url:"/logo-192.png",revision:"0ffc3e9c60675793bed16bde440fb128"},{url:"/logo-512.png",revision:"02d61aacee002b70fe7daa76c6bb7e9f"},{url:"/logo_auth/apple.png",revision:"b449a795561361c23f74909c8bd572b6"},{url:"/logo_auth/facebook.png",revision:"f9ffe7a2f9b99179d795c5713ea35956"},{url:"/logo_auth/google.png",revision:"ce59e210c1e61eaccd1074f9701e847e"},{url:"/logo_auth/twitter.png",revision:"3a012c94a4478ff39f043cb6fcac7d0a"},{url:"/poids.png",revision:"cb17646fc80d45dcd520ef12d2f9b300"},{url:"/test.gif",revision:"86579078b5b107713309fec585703247"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
