"use strict";(self["webpackChunkopenefi_tuner"]=self["webpackChunkopenefi_tuner"]||[]).push([[68],{1068:(e,r,a)=>{a.r(r),a.d(r,{default:()=>Q});var t=a(3673);const o=(0,t._)("span",{class:"q-mr-md"},null,-1),n=(0,t.Uk)("Request Dashboard ");function s(e,r,a,s,l,d){const c=(0,t.up)("RPMGauge"),i=(0,t.up)("Battery"),u=(0,t.up)("q-btn"),g=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(g,{class:"row items-center justify-evenly"},{default:(0,t.w5)((()=>{var r;return[(0,t.Wm)(c),(0,t.Wm)(i,{value:String(null!==(r=e.store.state.Dashboard.battery)&&void 0!==r?r:"0000")},null,8,["value"]),(0,t.Wm)(u,{color:"secondary",class:"gt-xs",rounded:"",onClick:e.requestMetadata},{default:(0,t.w5)((()=>[o,n])),_:1},8,["onClick"])]})),_:1})}const l={id:"canvas-id","data-type":"radial-gauge"};function d(e,r,a,o,n,s){return(0,t.wg)(),(0,t.iD)("canvas",l)}var c=a(4095),i=a(8332),u=a(3617);const g={renderTo:"canvas-id",width:400,height:400,units:"",title:"RPM",minValue:0,maxValue:8500,majorTicks:[0,750,1e3,1500,3e3,4e3,4500,5e3,6e3,7e3,8e3],minorTicks:2,strokeTicks:!0,highlights:[{from:-15,to:0,color:"rgba(0,0, 255, .3)"},{from:0,to:50,color:"rgba(255, 0, 0, .3)"}],ticksAngle:225,startAngle:67.5,colorMajorTicks:"#ddd",colorMinorTicks:"#ddd",colorTitle:"#eee",colorUnits:"#ccc",colorNumbers:"#eee",colorPlate:"#222",borderShadowWidth:0,borders:!0,needleType:"arrow",needleWidth:2,needleCircleSize:7,needleCircleOuter:!0,needleCircleInner:!1,animationDuration:100,animationRule:"linear",colorBorderOuter:"#333",colorBorderOuterEnd:"#111",colorBorderMiddle:"#222",colorBorderMiddleEnd:"#111",colorBorderInner:"#111",colorBorderInnerEnd:"#333",colorNeedleShadowDown:"#333",colorNeedleCircleOuter:"#333",colorNeedleCircleOuterEnd:"#111",colorNeedleCircleInner:"#111",colorNeedleCircleInnerEnd:"#222",valueBoxBorderRadius:0,colorValueBoxRect:"#222",colorValueBoxRectEnd:"#333"};let m=null;const p=(0,t.aZ)({name:"RPMGauge",components:{},mounted:()=>{m=new c.RadialGauge(g),m.draw(),m.value=0,m.update(Object.assign(Object.assign({},g),{maxValue:6500,majorTicks:[0,750,1e3,1500,3e3,4e3,4500,5e3,6e3]})),m.draw()},methods:{sendHello(){console.log("asdas")}},setup(){const e=(0,u.oR)(i.storeKey);return(0,t.m0)((()=>{const r=e.state.Dashboard.rpm;null!==r&&null!==m&&(m.value=r)})),{store:e}}});var h=a(4260);const b=(0,h.Z)(p,[["render",d]]),v=b;var _=a(2323);const y=(0,t._)("h5",null,"Battery",-1),w={class:"battery__digit-container"},C={class:"battery__digit-container--digits"},f={class:"battery__dseg-display"},k=(0,t._)("h4",{class:"battery__dseg-display__background"},"8888",-1),B=(0,t._)("h4",{class:"battery__digit-container--volts"},"V",-1);function R(e,r,a,o,n,s){const l=(0,t.up)("q-card-section"),d=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"battery"},{default:(0,t.w5)((()=>[y,(0,t._)("span",w,[(0,t._)("div",C,[(0,t._)("h4",f,(0,_.zw)(e.value.padStart(5,"!")),1),k]),B])])),_:1})])),_:1})}const Z=(0,t.aZ)({name:"Battery",props:["value"],setup(){return{}}});var M=a(151),q=a(5589),D=a(7518),T=a.n(D);const j=(0,h.Z)(Z,[["render",R]]),S=j;T()(Z,"components",{QCard:M.Z,QCardSection:q.Z});var x=a(1959),I=a(1767);let O=null;const P=(0,t.aZ)({name:"PageIndex",components:{RPMGauge:v,Battery:S},methods:{requestMetadata(){this.store.dispatch("Dashboard/requestGaugeConfig")}},setup(){const e=(0,u.oR)(i.storeKey),r=(0,x.Fl)((()=>e.getters["UsbLayer/getCommand"](14))),a=(0,x.Fl)((()=>e.getters["UsbLayer/getCommand"](15)));return(0,t.m0)((()=>{if(r.value){e.dispatch("Dashboard/updateGaugeConfig",r.value);const a=()=>{const r=(0,I.k)(5,new Uint8Array([255]));e.dispatch("UsbLayer/sendMessage",r)};O=setInterval(a,1e3)}})),(0,t.m0)((()=>{a.value&&e.dispatch("Dashboard/parseStatus",a.value)})),{store:e}}});var E=a(4379),G=a(9400);const N=(0,h.Z)(P,[["render",s]]),Q=N;T()(P,"components",{QPage:E.Z,QCard:M.Z,QCardSection:q.Z,QBtn:G.Z})}}]);