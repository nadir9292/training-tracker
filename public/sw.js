if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/4m7VggOp6LfWHLBh8XR5-/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/4m7VggOp6LfWHLBh8XR5-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/190-f4573b87469744de.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/674-14dfde89dd7dace5.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/app/(auth)/login/page-8ceab98cee3f6464.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/app/(auth)/register/page-93a95e99fb68e2bb.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/app/(auth)/welcome/page-7b8ffc9928eba5b6.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/app/_not-found/page-164f9c641ad4d363.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/app/layout-f7deedd396a60b43.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/app/not-found-1cf0fab34e41f105.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/app/page-e4ec5979e629cb18.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/fd9d1056-cef7259746997f59.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/main-729f0bd61f2a2332.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/main-app-bdd2932fb634b16d.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-cb86a99cd2f791d1.js",revision:"4m7VggOp6LfWHLBh8XR5-"},{url:"/_next/static/css/103ae2eb7c4af427.css",revision:"103ae2eb7c4af427"},{url:"/apple-touch-icon.png",revision:"e3629ed2e852d026869595f538e673cb"},{url:"/avatar_default.png",revision:"e67e358c72e30a5ec593534154b91ea6"},{url:"/bg-mobile.png",revision:"804ba9d4ed65dea1b4fd0954fc3daad6"},{url:"/bg-normal.png",revision:"23d34ed5e34cd50ceb4614ad43e11a4b"},{url:"/logo-192.png",revision:"0ffc3e9c60675793bed16bde440fb128"},{url:"/logo-512.png",revision:"02d61aacee002b70fe7daa76c6bb7e9f"},{url:"/logo_google.png",revision:"54d92439140ad747288601dac21b3c88"},{url:"/poids.png",revision:"cb17646fc80d45dcd520ef12d2f9b300"},{url:"/test.gif",revision:"86579078b5b107713309fec585703247"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
