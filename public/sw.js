if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let c={};const r=e=>s(e,t),o={module:{uri:t},exports:c,require:r};a[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404_logo.png",revision:"944c8dc48d52fa5259a2e994382b21ce"},{url:"/_next/static/5XegSRaHE3Eqa8wW8RaYF/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/5XegSRaHE3Eqa8wW8RaYF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/123-5092ce3a7beadf94.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/173-2109c9f7ab459773.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/190-b6acf6c2cec24a82.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/231-037d0a16fcce8f17.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/707-ab8bb0c48ce17598.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/app/(auth)/register/page-83216dd55578a221.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/app/(auth)/welcome/page-1eda94ad965878d8.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/app/_not-found/page-4aa8a230ddd9b4ba.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/app/about/page-a81e20ce6e9dc8e5.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/app/add-training/page-733519cd90d81ee8.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/app/board-training/page-a07bd8c4d1be4a7e.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/app/chart-training/page-7e4b3283ebaf9ff7.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/app/layout-1e50065224e123fd.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/app/not-found-beb6e1abde320261.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/app/page-69b51b41e120397d.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/app/parameters/page-6b309ed208126e7d.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/app/profile/page-023655d73a92da55.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/fd9d1056-cef7259746997f59.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/framework-d1703057b07599d4.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/main-89e745e7135e8f0d.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/main-app-bdd2932fb634b16d.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-91b2d14d0f678b80.js",revision:"5XegSRaHE3Eqa8wW8RaYF"},{url:"/_next/static/css/89250bb330d2fcea.css",revision:"89250bb330d2fcea"},{url:"/apple-touch-icon.png",revision:"deaea4da5372387bf1b129d924c0a397"},{url:"/avatar_default.png",revision:"e67e358c72e30a5ec593534154b91ea6"},{url:"/bg-mobile.png",revision:"804ba9d4ed65dea1b4fd0954fc3daad6"},{url:"/bg-normal.png",revision:"23d34ed5e34cd50ceb4614ad43e11a4b"},{url:"/loading_logo.png",revision:"e7522471823b10d44793770ac92e114b"},{url:"/logo-192.png",revision:"53bb98382ad0bb8cc27e89574427fca1"},{url:"/logo-512.png",revision:"efd2651debd20f0ea8eb2704cf2e93a3"},{url:"/logo_auth/apple.png",revision:"b449a795561361c23f74909c8bd572b6"},{url:"/logo_auth/discord.png",revision:"098d506679829c3267a13f1e20c73abe"},{url:"/logo_auth/facebook.png",revision:"f9ffe7a2f9b99179d795c5713ea35956"},{url:"/logo_auth/github.png",revision:"3d4c7482f267f5accbb7461766f3f790"},{url:"/logo_auth/google.png",revision:"ce59e210c1e61eaccd1074f9701e847e"},{url:"/logo_auth/twitter.png",revision:"3a012c94a4478ff39f043cb6fcac7d0a"},{url:"/poids.png",revision:"cb17646fc80d45dcd520ef12d2f9b300"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
