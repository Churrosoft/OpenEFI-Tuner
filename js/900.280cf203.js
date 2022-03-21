"use strict";(self["webpackChunkopenefi_tuner"]=self["webpackChunkopenefi_tuner"]||[]).push([[900],{6900:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var r=a(3673);const o=(0,r._)("span",{class:"q-mr-md"},null,-1),n=(0,r.Uk)("Request Dashboard ");function s(e,t,a,s,l,c){const d=(0,r.up)("RPMGauge"),i=(0,r.up)("Battery"),u=(0,r.up)("q-btn"),g=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(g,{class:"row items-center justify-evenly"},{default:(0,r.w5)((()=>{var t;return[(0,r.Wm)(d),(0,r.Wm)(i,{value:String(null!==(t=e.store.state.Dashboard.battery)&&void 0!==t?t:"0000")},null,8,["value"]),(0,r.Wm)(u,{color:"secondary",class:"gt-xs",rounded:"",onClick:e.requestMetadata},{default:(0,r.w5)((()=>[o,n])),_:1},8,["onClick"])]})),_:1})}var l=a(1767),c=a(644),d=a(3617);const i={id:"canvas-id","data-type":"radial-gauge"};function u(e,t,a,o,n,s){return(0,r.wg)(),(0,r.iD)("canvas",i)}var g=a(4095);const m={renderTo:"canvas-id",width:400,height:400,units:"",title:"RPM",minValue:0,maxValue:8500,majorTicks:[0,750,1e3,1500,3e3,4e3,4500,5e3,6e3,7e3,8e3],minorTicks:2,strokeTicks:!0,highlights:[],ticksAngle:225,startAngle:67.5,colorMajorTicks:"#ddd",colorMinorTicks:"#ddd",colorTitle:"#eee",colorUnits:"#ccc",colorNumbers:"#eee",colorPlate:"#222",borderShadowWidth:0,borders:!0,needleType:"arrow",needleWidth:2,needleCircleSize:7,needleCircleOuter:!0,needleCircleInner:!1,animationDuration:100,animationRule:"linear",colorBorderOuter:"#333",colorBorderOuterEnd:"#111",colorBorderMiddle:"#222",colorBorderMiddleEnd:"#111",colorBorderInner:"#111",colorBorderInnerEnd:"#333",colorNeedleShadowDown:"#333",colorNeedleCircleOuter:"#333",colorNeedleCircleOuterEnd:"#111",colorNeedleCircleInner:"#111",colorNeedleCircleInnerEnd:"#222",valueBoxBorderRadius:0,colorValueBoxRect:"#222",colorValueBoxRectEnd:"#333"};let p=null;const h=(0,r.aZ)({name:"RPMGauge",components:{},mounted:()=>{p=new g.RadialGauge(m),p.draw(),p.value=0,p.update(Object.assign(Object.assign({},m),{maxValue:6500,majorTicks:[0,750,1e3,1500,3e3,4e3,4500,5e3,6e3]})),p.draw()},methods:{sendHello(){console.log("asdas")}},setup(){const e=(0,d.oR)(c.storeKey);return(0,r.m0)((()=>{const t=e.state.Dashboard.rpm;null!==t&&null!==p&&(p.value=t)})),(0,r.m0)((()=>{const t=e.state.Dashboard.gaugeOptions.rpm;null!==t&&null!==p&&p.update(Object.assign(Object.assign({},m),t))})),{store:e}}});var b=a(4260);const v=(0,b.Z)(h,[["render",u]]),y=v;var _=a(2323);const w=(0,r._)("h5",null,"Battery",-1),f={class:"battery__digit-container"},k={class:"battery__digit-container--digits"},C={class:"battery__dseg-display"},B=(0,r._)("h4",{class:"battery__dseg-display__background"},"8888",-1),D=(0,r._)("h4",{class:"battery__digit-container--volts"},"V",-1);function I(e,t,a,o,n,s){const l=(0,r.up)("q-card-section"),c=(0,r.up)("q-card");return(0,r.wg)(),(0,r.j4)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,{class:"battery"},{default:(0,r.w5)((()=>[w,(0,r._)("span",f,[(0,r._)("div",k,[(0,r._)("h4",C,(0,_.zw)(e.value.padStart(5,"!")),1),B]),D])])),_:1})])),_:1})}const M=(0,r.aZ)({name:"Battery",props:["value"],setup(){return{}}});var R=a(151),j=a(5589),O=a(7518),S=a.n(O);const U=(0,b.Z)(M,[["render",I]]),Z=U;S()(M,"components",{QCard:R.Z,QCardSection:j.Z});let q=null;const T=(0,r.aZ)({name:"Dashboard",components:{RPMGauge:y,Battery:Z},methods:{requestMetadata(){this.store.dispatch("Dashboard/requestGaugeConfig"),localStorage.setItem("DashboardActive","true")}},beforeUnmount(){clearInterval(q)},mounted(){if(localStorage.getItem("DashboardActive")){const e=()=>{const e=(0,l.k)(5,new Uint8Array([255]));this.store.state.UsbLayer.connected?this.store.dispatch("UsbLayer/sendMessage",e):clearInterval(q)};localStorage.removeItem("DashboardActive"),q=setInterval(e,1e3)}},setup(){const e=(0,d.oR)(c.storeKey),t=(0,r.Fl)((()=>e.getters["UsbLayer/getCommand"](14))),a=(0,r.Fl)((()=>e.getters["UsbLayer/getCommand"](15)));return(0,r.m0)((()=>{if(t.value){e.dispatch("Dashboard/updateGaugeConfig",t.value);const a=()=>{const t=(0,l.k)(5,new Uint8Array([255]));e.dispatch("UsbLayer/sendMessage",t)};q=setInterval(a,1e3)}})),(0,r.m0)((()=>{a.value&&e.dispatch("Dashboard/parseStatus",a.value)})),{store:e}}});var A=a(4379),x=a(9400);const E=(0,b.Z)(T,[["render",s]]),G=E;S()(T,"components",{QPage:A.Z,QBtn:x.Z})}}]);