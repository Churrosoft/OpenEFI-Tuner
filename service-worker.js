if(!self.define){let i,n={};const l=(l,s)=>(l=new URL(l+".js",s).href,n[l]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=l,i.onload=n,document.head.appendChild(i)}else i=l,importScripts(l),n()})).then((()=>{let i=n[l];if(!i)throw new Error(`Module ${l} didn’t register its module`);return i})));self.define=(s,o)=>{const e=i||("document"in self?document.currentScript.src:"")||location.href;if(n[e])return;let r={};const t=i=>l(i,e),f={module:{uri:e},exports:r,require:t};n[e]=Promise.all(s.map((i=>f[i]||t(i)))).then((i=>(o(...i),r)))}}define(["./workbox-cb3ce6c3"],(function(i){"use strict";i.setCacheNameDetails({prefix:"openefi-tuner"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"css/900.4b52a531.css",revision:null},{url:"css/981.d1d75670.css",revision:null},{url:"css/app.7a3aa6d0.css",revision:null},{url:"css/vendor.7dbe7a03.css",revision:null},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"fonts/DSEG14Classic-Bold.0790b760.ttf",revision:null},{url:"fonts/DSEG14Classic-BoldItalic.aeecc8d7.ttf",revision:null},{url:"fonts/DSEG14Classic-Italic.e3fab8d1.ttf",revision:null},{url:"fonts/DSEG14Classic-Light.2aafffb8.ttf",revision:null},{url:"fonts/DSEG14Classic-LightItalic.832e3632.ttf",revision:null},{url:"fonts/DSEG14Classic-Regular.a4e6436d.ttf",revision:null},{url:"fonts/DSEG14ClassicMini-Bold.c162845f.ttf",revision:null},{url:"fonts/DSEG14ClassicMini-BoldItalic.c0c036f2.ttf",revision:null},{url:"fonts/DSEG14ClassicMini-Italic.3076b723.ttf",revision:null},{url:"fonts/DSEG14ClassicMini-Light.954700a4.ttf",revision:null},{url:"fonts/DSEG14ClassicMini-LightItalic.d53708f5.ttf",revision:null},{url:"fonts/DSEG14ClassicMini-Regular.da343045.ttf",revision:null},{url:"fonts/DSEG14Modern-Bold.96dc2ea4.ttf",revision:null},{url:"fonts/DSEG14Modern-BoldItalic.9e099a83.ttf",revision:null},{url:"fonts/DSEG14Modern-Italic.a0c71b5c.ttf",revision:null},{url:"fonts/DSEG14Modern-Light.ea99a166.ttf",revision:null},{url:"fonts/DSEG14Modern-LightItalic.e919abff.ttf",revision:null},{url:"fonts/DSEG14Modern-Regular.e051b7b5.ttf",revision:null},{url:"fonts/DSEG14ModernMini-Bold.b64d659c.ttf",revision:null},{url:"fonts/DSEG14ModernMini-BoldItalic.ed9f6669.ttf",revision:null},{url:"fonts/DSEG14ModernMini-Italic.ae61c203.ttf",revision:null},{url:"fonts/DSEG14ModernMini-Light.46a817b9.ttf",revision:null},{url:"fonts/DSEG14ModernMini-LightItalic.60a07c20.ttf",revision:null},{url:"fonts/DSEG14ModernMini-Regular.334ddc49.ttf",revision:null},{url:"fonts/DSEG7Classic-Bold.d8d8e7e7.ttf",revision:null},{url:"fonts/DSEG7Classic-BoldItalic.ea4e93b1.ttf",revision:null},{url:"fonts/DSEG7Classic-Italic.97313918.ttf",revision:null},{url:"fonts/DSEG7Classic-Light.f347e584.ttf",revision:null},{url:"fonts/DSEG7Classic-LightItalic.ac5cabf1.ttf",revision:null},{url:"fonts/DSEG7Classic-Regular.db423154.ttf",revision:null},{url:"fonts/DSEG7ClassicMini-Bold.2cc1e933.ttf",revision:null},{url:"fonts/DSEG7ClassicMini-BoldItalic.c1a9fcaf.ttf",revision:null},{url:"fonts/DSEG7ClassicMini-Italic.a868150f.ttf",revision:null},{url:"fonts/DSEG7ClassicMini-Light.11cfca95.ttf",revision:null},{url:"fonts/DSEG7ClassicMini-LightItalic.85596a50.ttf",revision:null},{url:"fonts/DSEG7ClassicMini-Regular.c420c01a.ttf",revision:null},{url:"fonts/DSEG7Modern-Bold.9fdc3025.ttf",revision:null},{url:"fonts/DSEG7Modern-BoldItalic.4b08bf83.ttf",revision:null},{url:"fonts/DSEG7Modern-Italic.44742489.ttf",revision:null},{url:"fonts/DSEG7Modern-Light.e84f042a.ttf",revision:null},{url:"fonts/DSEG7Modern-LightItalic.68acce46.ttf",revision:null},{url:"fonts/DSEG7Modern-Regular.d2a9b540.ttf",revision:null},{url:"fonts/DSEG7ModernMini-Bold.ec1e67e9.ttf",revision:null},{url:"fonts/DSEG7ModernMini-BoldItalic.dd88b398.ttf",revision:null},{url:"fonts/DSEG7ModernMini-Italic.b8cce699.ttf",revision:null},{url:"fonts/DSEG7ModernMini-Light.c574ea7b.ttf",revision:null},{url:"fonts/DSEG7ModernMini-LightItalic.a6c99e1c.ttf",revision:null},{url:"fonts/DSEG7ModernMini-Regular.56998bed.ttf",revision:null},{url:"fonts/DSEG7SEGGCHAN-Regular.5a947ce7.ttf",revision:null},{url:"fonts/DSEG7SEGGCHANMINI-Regular.0b3454da.ttf",revision:null},{url:"fonts/DSEGWeather.efd20308.ttf",revision:null},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.1dd1bb36.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.f54bbe10.woff2",revision:null},{url:"fonts/materialdesignicons-webfont.5dff34d5.woff",revision:null},{url:"fonts/materialdesignicons-webfont.606b1642.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"74b6866ecd5f3a553026ceca5c7f952d"},{url:"injector.svg",revision:"008448b47f1cfc455d79238b16429809"},{url:"injector2.svg",revision:"8889898efe6d6a625250ca5463f97315"},{url:"js/293.35636905.js",revision:null},{url:"js/52.0093fcca.js",revision:null},{url:"js/57.cd6d6a30.js",revision:null},{url:"js/755.78fdedaf.js",revision:null},{url:"js/831.94c48b11.js",revision:null},{url:"js/900.1a373d8f.js",revision:null},{url:"js/910.8e7d0e2c.js",revision:null},{url:"js/981.e28eeed5.js",revision:null},{url:"js/app.bc23feea.js",revision:null},{url:"js/chunk-common.3d46143d.js",revision:null},{url:"js/vendor.27f440b1.js",revision:null},{url:"manifest.json",revision:"7f7c2d75c40a911d27450505c94452e2"}],{}),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
