if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let c={};const r=e=>s(e,i),o={module:{uri:i},exports:c,require:r};a[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404_logo.png",revision:"944c8dc48d52fa5259a2e994382b21ce"},{url:"/_next/static/chunks/123-9b7755737bc8b38d.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/140-8ed2814bc3f7b46f.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/173-e76fdedff178f816.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/190-4874d2f88a6bd80b.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/208-a8fb9889e8d475b3.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/223-730b27c14ff0f79e.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/231-bf285aa8b68af730.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/707-5757cd83a340c7e7.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/(auth)/register/page-83216dd55578a221.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/(auth)/welcome/page-55c97065994fb646.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/_not-found/page-4aa8a230ddd9b4ba.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/about/page-a81e20ce6e9dc8e5.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/add-training/page-733519cd90d81ee8.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/board-training/page-a8f6d6155304dd4d.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/chart-training/page-7e4b3283ebaf9ff7.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/event-training/page-618f23a705cc3f6b.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/layout-bec62b9703321a22.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/not-found-d216e62dc60882f2.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/page-df44cc04f3d9456f.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/parameters/page-6b309ed208126e7d.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/app/profile/page-28c5c638f8cae61f.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/fd9d1056-1a6352be67317e4d.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/main-app-bdd2932fb634b16d.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/main-be8ea260ba634c7f.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-5a230e5ca6eafd08.js",revision:"hMC7NEShuatz8Vg8vRJ4m"},{url:"/_next/static/css/1f6839548ae7ffa0.css",revision:"1f6839548ae7ffa0"},{url:"/_next/static/css/b1601ef59faff809.css",revision:"b1601ef59faff809"},{url:"/_next/static/hMC7NEShuatz8Vg8vRJ4m/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/hMC7NEShuatz8Vg8vRJ4m/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/apple-touch-icon.png",revision:"deaea4da5372387bf1b129d924c0a397"},{url:"/avatar_default.png",revision:"e67e358c72e30a5ec593534154b91ea6"},{url:"/bg-mobile.png",revision:"804ba9d4ed65dea1b4fd0954fc3daad6"},{url:"/bg-normal.png",revision:"23d34ed5e34cd50ceb4614ad43e11a4b"},{url:"/border-circle.png",revision:"4f6a92694d091d6ed67976c97721429d"},{url:"/loading_logo.png",revision:"e7522471823b10d44793770ac92e114b"},{url:"/logo-192.png",revision:"53bb98382ad0bb8cc27e89574427fca1"},{url:"/logo-512.png",revision:"efd2651debd20f0ea8eb2704cf2e93a3"},{url:"/logo_auth/apple.png",revision:"b449a795561361c23f74909c8bd572b6"},{url:"/logo_auth/discord.png",revision:"098d506679829c3267a13f1e20c73abe"},{url:"/logo_auth/facebook.png",revision:"f9ffe7a2f9b99179d795c5713ea35956"},{url:"/logo_auth/github.png",revision:"3d4c7482f267f5accbb7461766f3f790"},{url:"/logo_auth/google.png",revision:"ce59e210c1e61eaccd1074f9701e847e"},{url:"/logo_auth/twitter.png",revision:"3a012c94a4478ff39f043cb6fcac7d0a"},{url:"/poids.png",revision:"cb17646fc80d45dcd520ef12d2f9b300"},{url:"/program-bg.jpeg",revision:"55fe85ed497d1cbe00fedf255ee2057b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
