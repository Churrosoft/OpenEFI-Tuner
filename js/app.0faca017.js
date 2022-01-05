(()=>{"use strict";var e={8013:(e,n,t)=>{t(71);var o=t(8880),r=t(1659),a=t(3673);function i(e,n,t,o,r,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}var s=t(8825);const c=(0,a.aZ)({name:"App",setup(){const e=(0,s.Z)();e.dark.set(!0)}});var d=t(4260);const l=(0,d.Z)(c,[["render",i]]),u=l;var m=t(2156),f=t(7083),p=t(9582);const g=[{path:"/",component:()=>Promise.all([t.e(736),t.e(64),t.e(755)]).then(t.bind(t,9755)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(521)]).then(t.bind(t,6521))}]},{path:"/ignition",component:()=>Promise.all([t.e(736),t.e(64),t.e(831)]).then(t.bind(t,5831)),children:[{path:"tables",component:()=>Promise.all([t.e(736),t.e(518)]).then(t.bind(t,8518))},{path:"config",component:()=>Promise.all([t.e(736),t.e(57)]).then(t.bind(t,2057))}]},{path:"/dtc",component:()=>Promise.all([t.e(736),t.e(64),t.e(755)]).then(t.bind(t,9755)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(910)]).then(t.bind(t,5910))},{path:"config",component:()=>Promise.all([t.e(736),t.e(52)]).then(t.bind(t,4052))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(293)]).then(t.bind(t,7293))}],h=g,v=(0,f.BC)((function(){const e=p.r5,n=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return n}));async function b(e,n){const o="function"===typeof m["default"]?await(0,m["default"])({}):m["default"],{storeKey:a}=await Promise.resolve().then(t.bind(t,2156)),i="function"===typeof v?await v({store:o}):v;o.$router=i;const s=e(u);return s.use(r.Z,n),{app:s,store:o,storeKey:a,router:i}}const y={config:{}};var C=t(1413);(0,C.z)("service-worker.js",{ready(){},registered(){},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){},offline(){},error(e){console.error("Error during service worker registration:",e)}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&t.e(736).then(t.t.bind(t,9501,23));async function w({app:e,router:n,store:t,storeKey:o}){e.use(n),e.use(t,o),e.mount("#q-app")}b(o.ri,y).then(w)},8643:(e,n,t)=>{t.d(n,{C:()=>a,Z:()=>i});t(979),t(6105),t(5123),t(2396);const o=e=>65535&e,r=e=>{let n=65535,t=0;return e.map((e=>{t=o(n>>8^e),t^=o(t>>4),n=o(n<<8^t<<12^t<<5^t)})),n};function a(e){return Array.prototype.map.call(new Uint8Array(e),(e=>("00"+e.toString(16)).slice(-2))).join("")}const i=r},2156:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Y,storeKey:()=>X,useStore:()=>ee});var o=t(7083),r=t(3617);const a=(e,n,t)=>{const o=1;return{protocol:o,command:e,payload:n,checksum:t}};function i(){return{connecting:!1,usbd:null,writer:null,connected:!1,paired:!1,firmware_ver:{type:null,major:null,minor:null,rev:null},pending_commands:null}}const s=i;var c=t(8643);const d={connected({commit:e},n){const t=String(n[0]),o=String((n[1]<<8)+n[2]),r=String((n[3]<<8)+n[4]),a=String((n[5]<<8)+n[6]),i=("0"===t?"OpenEFI":"1"===t&&"uEFI")||"2"===t&&"DashDash"||"Unknow";console.log(`${i} Connected: \nMajor: ${o} \nMinor: ${r} \nRev: ${a} \n`),e("setPaired",{major:o,minor:r,rev:a,type:t}),e("toogleConnect",!1)},sendMessage({state:e},{command:n,payload:t}){let o=Array(128).fill(0);o=[1,n>>8&255,255&n,...t].slice(0,128);const r=(0,c.Z)(o.slice(0,126));o[126]=r>>8&255,o[127]=255&r;const a=new Uint8Array(o);console.debug(`Frame enviado\nProtocolo: 1\nComando: ${n}\nPayload: ${t}\nChecksum: ${r}`),e.writer.write(a)},removeCommand({state:e,commit:n},t){var o;if(!t)return;const r=null===(o=e.pending_commands)||void 0===o?void 0:o.filter((e=>e.checksum!==t.checksum));n("setCommands",r)},recv({commit:e},n){const t=new Uint8Array(n),o=t[0],r=(t[1]<<8)+t[2],i=t.slice(3,126),s=(0,c.C)(t.slice(126,128).buffer),d=("0000"+(0,c.Z)(t.slice(0,126)).toString(16)).substr(-4),l=a(r,i,d);console.debug("Frame recibido\nProtocolo: "+o+"\nComando: "+r+"\nPayload: "+i+"\nChecksum: "+s),s!=d?console.warn("Checksums no coinciden! \nLocal: "+d+"\nEFI: "+s):e("addCommand",l)},setWriter({commit:e},n){e("setConnection",n)},putCommand({commit:e},n){e("addCommand",n)},initConnection({commit:e},n){e("toogleConnect",n)}},l=d,u={someAction(){},getCommand:e=>n=>{const t=String(n).slice(1,3);if(e.pending_commands){let n=null;return e.pending_commands.map((e=>{String(e.command)===t&&null===n&&(n=e)})),n}return null}},m=u,f={setConnection(e,n){e.writer=n,e.connected=!0},setDisconnected(e){e.connected=!1,e.paired=!1},setPaired(e,{major:n,minor:t,rev:o,type:r}){e.firmware_ver={major:n,minor:t,rev:o,type:r},e.paired=!0},setCommands(e,n){e.pending_commands=n},addCommand(e,n){e.pending_commands?e.pending_commands=[...e.pending_commands,n]:e.pending_commands=[n]},toogleConnect(e,n){e.connecting=n}},p=f,g={namespaced:!0,actions:l,getters:m,mutations:p,state:s},h=g;function v(){return{efiCodes:null,parsedCodes:null,parsedLoading:!1,efiLoading:!1}}const b=v;var y=function(e,n,t,o){function r(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function i(e){try{c(o.next(e))}catch(n){a(n)}}function s(e){try{c(o["throw"](e))}catch(n){a(n)}}function c(e){e.done?t(e.value):r(e.value).then(i,s)}c((o=o.apply(e,n||[])).next())}))};function C(e){return new Promise((n=>setTimeout(n,e)))}function w(e){let n="";const t=new Uint8Array(e),o=t.byteLength;for(let r=0;r<o;r++)n+=String.fromCharCode(t[r]);return window.atob(n)}const P={getDTCfromEFI({commit:e,rootGetters:n,dispatch:t,rootState:o}){var r;return y(this,void 0,void 0,(function*(){const a=[];e("setParsedLoading",!0),e("clearParsedCodes");const i=null===(r=o.UsbLayer.pending_commands)||void 0===r?void 0:r.length;if(i){for(let e=0;e<i;e++){const e=n["UsbLayer/getCommand"](130);if(null!==e){const n=e.payload.slice(0,8);a.push(w(n)),t("UsbLayer/removeCommand",e,{root:!0})}}for(let n=0;n<a.length;n++){const t=a[n];yield C(150);const o=t.slice(0,3).toLowerCase(),r=yield fetch(`https://cdn.jsdelivr.net/gh/openefi/dtc_codes@main/mocks/${o}/${t.toLowerCase()}.json`),i=yield r.json();e("appedParsedCode",i)}e("setParsedLoading",!1)}}))},someAction(){}},_=P,j={someAction(){}},L=j,S={appedEFICode(e,n){null===e.efiCodes?e.efiCodes=[n]:e.efiCodes.push(n)},appedParsedCode(e,n){null===e.parsedCodes?e.parsedCodes=[n]:e.parsedCodes.push(n)},clearEFICodes(e){e.efiCodes=null},clearParsedCodes(e){e.parsedCodes=null},setEfiLoading(e,n){e.efiLoading=n},setParsedLoading(e,n){e.efiLoading=n}},k=S,T={namespaced:!0,actions:_,getters:L,mutations:k,state:b},M=T;function O(){return{toogleMenu:!1}}const A=O,U={toogleMenu({commit:e,state:n}){e("toogleMenu",!n.toogleMenu)},someAction(){}},E=U,I={someAction(){}},$=I,x={toogleMenu(e,n){e.toogleMenu=n}},F=x,R={namespaced:!0,actions:E,getters:$,mutations:F,state:A},Z=R;function D(){return{tables_loading:!1,tables:{rpm_load:null}}}const N=D;var K=function(e,n,t,o){function r(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function i(e){try{c(o.next(e))}catch(n){a(n)}}function s(e){try{c(o["throw"](e))}catch(n){a(n)}}function c(e){e.done?t(e.value):r(e.value).then(i,s)}c((o=o.apply(e,n||[])).next())}))};function q(e){return new Promise((n=>setTimeout(n,e)))}const B={requestIgnitionTableRPMTPS({commit:e,dispatch:n}){e("setIgnitionLoading",!0);const t=21,o=10,r=Array(123).fill(0);r[0]=o>>8&255,r[1]=255&o,n("UsbLayer/sendMessage",{command:t,payload:r},{root:!0})},getIgnitionTableRPMTPS({commit:e,rootGetters:n,dispatch:t,rootState:o}){var r;return K(this,void 0,void 0,(function*(){const a=[],i=17,s=n["UsbLayer/getCommand"](127);t("UsbLayer/removeCommand",s,{root:!0});const c=null===(r=o.UsbLayer.pending_commands)||void 0===r?void 0:r.length;if(c){for(let e=0;e<c;e++){const e=n["UsbLayer/getCommand"](126);if(null!==e){if(!(null===e||void 0===e?void 0:e.payload))return;const n={};for(let t=0;t<4*i;t+=4){const o=null===e||void 0===e?void 0:e.payload,r=new Uint8Array(4);r[0]=o[t],r[1]=o[t+1],r[2]=o[t+2],r[3]=o[t+3];const a=new DataView(r.buffer,0);n[`col_${t}`]=String(a.getUint32(0,!0)/100)}a.push(n),yield q(10),t("UsbLayer/removeCommand",e,{root:!0})}}a.length>1&&e("setTableRPM_TPS",a),e("setIgnitionLoading",!1)}}))},updateTableRPMTPS({commit:e},n){e("setTableRPM_TPS",n)},someAction(){}},G=B,z={someAction(){}},V=z,W={setTableRPM_TPS(e,n){e.tables.rpm_load=n},clearTableRPM_TPS(e){e.tables.rpm_load=null},setIgnitionLoading(e,n){e.tables_loading=n}},H=W,J={namespaced:!0,actions:G,getters:V,mutations:H,state:N},Q=J,X=Symbol("vuex-key"),Y=(0,o.h)((function(){const e=(0,r.MT)({modules:{UsbLayer:h,Layout:Z,DtcCodes:M,Ignition:Q},strict:!1});return e}));function ee(){return(0,r.oR)(X)}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(n,o,r,a)=>{if(!o){var i=1/0;for(l=0;l<e.length;l++){for(var[o,r,a]=e[l],s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[c])))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var d=r();void 0!==d&&(n=d)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{var e,n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var a=Object.create(null);t.r(a);var i={};e=e||[null,n({}),n([]),n(n)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>o[e]));return i["default"]=()=>o,t.d(a,i),a}})(),(()=>{t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,o)=>(t.f[o](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{52:"276295f4",57:"0261e91f",64:"f5fde64f",293:"a89287b5",518:"1fcb7271",521:"49d62a49",755:"b6a2d5a5",831:"7c78c0c2",910:"8a74c115"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"c2164508"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="openefi-tuner:";t.l=(o,r,a,i)=>{if(e[o])e[o].push(r);else{var s,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==n+a){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+a),s.src=o),e[o]=[r];var m=(n,t)=>{s.onerror=s.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(t))),n)return n(t)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(n,o)=>{var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise(((t,o)=>r=e[n]=[t,o]));o.push(r[2]=a);var i=t.p+t.u(n),s=new Error,c=o=>{if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,o)=>{var r,a,[i,s,c]=o,d=0;if(i.some((n=>0!==e[n]))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(c)var l=c(t)}for(n&&n(o);d<i.length;d++)a=i[d],t.o(e,a)&&e[a]&&e[a][0](),e[i[d]]=0;return t.O(l)},o=self["webpackChunkopenefi_tuner"]=self["webpackChunkopenefi_tuner"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(8013)));o=t.O(o)})();