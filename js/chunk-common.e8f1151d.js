"use strict";(self["webpackChunkopenefi_tuner"]=self["webpackChunkopenefi_tuner"]||[]).push([[64],{6260:(e,t,n)=>{n.d(t,{Z:()=>te});var a=n(3673),r=n(2323);const o=(0,a.Uk)("OpenEFI | Tuner"),s={key:0,class:"q-mr-lg q-ml-xl"},l={key:0},i={key:1},c={key:2},u=(0,a._)("span",null," v",-1);function d(e,t,n,d,p,m){const g=(0,a.up)("q-btn"),f=(0,a.up)("q-toolbar-title"),w=(0,a.up)("q-space"),h=(0,a.up)("q-toggle"),y=(0,a.up)("Connect"),b=(0,a.up)("q-toolbar"),k=(0,a.up)("q-header"),v=(0,a.up)("NavBar"),q=(0,a.up)("router-view"),L=(0,a.up)("q-page"),_=(0,a.up)("q-page-container"),Z=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(Z,{view:"hHh Lpr lff",container:"",style:{height:"100vh"},class:"shadow-2"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{elevated:"",class:"bg-black"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g,{flat:"",onClick:e.toggleLeftDrawer,round:"",dense:"",icon:"menu"},null,8,["onClick"]),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[o])),_:1}),(0,a.Wm)(w),(0,a.Wm)(h,{"onUpdate:modelValue":t[0]||(t[0]=t=>e.q.dark.toggle()),"model-value":e.q.dark.isActive,label:"Dark Mode"},null,8,["model-value"]),e.$store.state.UsbLayer.paired?((0,a.wg)(),(0,a.iD)("div",s,["0"===e.$store.state.UsbLayer.firmware_ver.type?((0,a.wg)(),(0,a.iD)("span",l,"OpenEFI")):(0,a.kq)("",!0),"1"===e.$store.state.UsbLayer.firmware_ver.type?((0,a.wg)(),(0,a.iD)("span",i,"uEFI")):(0,a.kq)("",!0),"2"===e.$store.state.UsbLayer.firmware_ver.type?((0,a.wg)(),(0,a.iD)("span",c,"DashDash")):(0,a.kq)("",!0),u,(0,a._)("span",null,(0,r.zw)(e.$store.state.UsbLayer.firmware_ver.major),1),(0,a._)("span",null,"."+(0,r.zw)(e.$store.state.UsbLayer.firmware_ver.minor),1),(0,a._)("span",null,"."+(0,r.zw)(e.$store.state.UsbLayer.firmware_ver.minor),1)])):(0,a.kq)("",!0),(0,a.Wm)(y)])),_:1})])),_:1}),(0,a.Wm)(v),(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(L,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(q)])),_:1})])),_:1})])),_:1})}function p(e,t,n,r,o,s){const l=(0,a.up)("EssentialLink"),i=(0,a.up)("q-list"),c=(0,a.up)("q-scroll-area"),u=(0,a.up)("q-drawer");return(0,a.wg)(),(0,a.j4)(u,{"onUpdate:modelValue":t[0]||(t[0]=t=>e.toggleLeftDrawer()),"model-value":e.$store.state.Layout.toogleMenu,"show-if-above":"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"fit"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.essentialLinks,(e=>((0,a.wg)(),(0,a.j4)(l,(0,a.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1})])),_:1},8,["model-value"])}function m(e,t,n,o,s,l){const i=(0,a.up)("q-icon"),c=(0,a.up)("q-item-section"),u=(0,a.up)("q-item-label"),d=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(d,{clickable:"",tag:"a",target:e.link.startsWith("#")?"":"_blank",href:e.link},{default:(0,a.w5)((()=>[e.icon?((0,a.wg)(),(0,a.j4)(c,{key:0,avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{name:e.icon},null,8,["name"])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.title),1)])),_:1}),(0,a.Wm)(u,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["target","href"])}const g=(0,a.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var f=n(4260),w=n(3414),h=n(2035),y=n(4554),b=n(2350),k=n(7518),v=n.n(k);const q=(0,f.Z)(g,[["render",m]]),L=q;v()(g,"components",{QItem:w.Z,QItemSection:h.Z,QIcon:y.Z,QItemLabel:b.Z});var _=n(2156),Z=n(3617);const W=[{title:"Dashboard",caption:"",icon:"space_dashboard",link:"#"},{title:"DTC",caption:"read/erase DTC codes",icon:"memory",link:"#dtc"},{title:"Ignition",caption:"configure ignition tables",icon:"table_view",link:"#ignition/tables"},{title:"Settings",caption:"system settings",icon:"settings",link:"https://chat.quasar.dev"}],U=(0,a.aZ)({name:"NavBar",components:{EssentialLink:L},setup(){const e=(0,Z.oR)(_.storeKey);return{essentialLinks:W,toggleLeftDrawer(){e.dispatch("Layout/toogleMenu")}}}});var D=n(2901),Q=n(7704),C=n(7011);const I=(0,f.Z)(U,[["render",p]]),S=I;v()(U,"components",{QDrawer:D.Z,QScrollArea:Q.Z,QList:C.Z,QItemLabel:b.Z});const $={class:"q-mr-lg q-ml-xl"},T=(0,a.Uk)("Conectar");function j(e,t,n,r,o,s){const l=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)("div",$,[(0,a.Wm)(l,{color:"primary",onClick:e.connectUsbDevice},{default:(0,a.w5)((()=>[T])),_:1},8,["onClick"])])}var E=function(e,t,n,a){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{i(a.next(e))}catch(t){o(t)}}function l(e){try{i(a["throw"](e))}catch(t){o(t)}}function i(e){e.done?n(e.value):r(e.value).then(s,l)}i((a=a.apply(e,t||[])).next())}))};let M=[],z=null;const B=(0,a.aZ)({name:"Connect",methods:{connectUsbDevice(){const e=4617;navigator.serial.requestPort({filters:[{usbVendorId:e}]}).then((e=>{this.startWorking(e)})).catch((e=>{}))},startWorking(e){return E(this,void 0,void 0,(function*(){if(yield e.open({baudRate:512e3}),!e.writable)return;const t=e.writable.getWriter();this.store.dispatch("UsbLayer/setWriter",t),this.store.dispatch("UsbLayer/sendMessage",{command:1,payload:[255]});const n=()=>{const e=this.store.getters["UsbLayer/getCommand"](12);e&&(clearInterval(z),this.store.dispatch("UsbLayer/connected",e.payload),this.store.dispatch("UsbLayer/removeCommand",e))};this.intConnection=setInterval(n,100);while(e.readable){const t=e.readable.getReader();try{while(1){const{value:e,done:n}=yield t.read();if(n)break;if(!e)return;if(M=[...M,...e],M.length>127){let e,t,n;const a=128;let r=0;for(e=0,t=M.length;e<t;e+=a)n=M.slice(e,e+a),n.length>127&&(this.store.dispatch("UsbLayer/recv",n),r++);M=[...M.slice(128*r)]}}}catch(a){}finally{t.releaseLock()}}}))}},setup(){const e=(0,Z.oR)(_.storeKey);return{store:e,intConnection:z}}});var R=n(9400);const x=(0,f.Z)(B,[["render",j]]),H=x;v()(B,"components",{QBtn:R.Z});var K=n(8825),P=n(1959);const F=(0,a.aZ)({name:"Menu",components:{NavBar:S,Connect:H},setup(){const e=(0,P.iH)(!1),t=(0,Z.oR)(_.storeKey),n=(0,K.Z)();return{q:n,leftDrawerOpen:e,toggleLeftDrawer(){t.dispatch("Layout/toogleMenu")}}}});var N=n(9214),O=n(3812),V=n(9570),A=n(3747),G=n(2025),Y=n(4904),J=n(2652),X=n(4379);const ee=(0,f.Z)(F,[["render",d]]),te=ee;v()(F,"components",{QLayout:N.Z,QHeader:O.Z,QToolbar:V.Z,QBtn:R.Z,QToolbarTitle:A.Z,QSpace:G.Z,QToggle:Y.Z,QPageContainer:J.Z,QPage:X.Z})}}]);