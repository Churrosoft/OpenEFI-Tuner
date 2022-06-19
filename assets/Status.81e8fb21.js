var Pe=Object.defineProperty,Qe=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var re=(e,t,s)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,q=(e,t)=>{for(var s in t||(t={}))Re.call(t,s)&&re(e,s,t[s]);if(le)for(var s of le(t))Ke.call(t,s)&&re(e,s,t[s]);return e},I=(e,t)=>Qe(e,Me(t));import{s as ve,aw as Ne,ax as Ae,c,h as C,u as pe,q as ye,f as _e,r as w,w as O,n as Oe,k as We,t as ue,g as je,ay as Ue,W as Ye,_ as Ge,x as Je,ah as Xe,ai as Ze,K as l,aa as r,aj as f,d as a,ab as i,Q as k,L as de,ac as D,F as B,af as $,ae as g,az as et,a3 as W,ad as G}from"./index.c4cfd3d6.js";import{a as tt,Q as L}from"./QSeparator.f81005bd.js";import{Q as z}from"./QCardSection.835a15ea.js";import{Q as j}from"./QCard.f8b4559d.js";import{u as ot,a as st}from"./use-prevent-scroll.f1b3684e.js";import{u as nt}from"./use-timeout.6bfedb7f.js";import{u as at}from"./use-tick.c08a744e.js";import{u as it,a as lt,b as rt}from"./use-model-toggle.daa61af4.js";import{u as ut,b as dt,c as ct,g as ft,d as mt}from"./use-portal.f08df6b1.js";import"./use-dark.328e3d09.js";var U=ve({name:"QCardActions",props:I(q({},Ne),{vertical:Boolean}),setup(e,{slots:t}){const s=Ae(e),u=c(()=>`q-card__actions ${s.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>C("div",{class:u.value},pe(t.default))}});const p=[];let b;function ht(e){b=e.keyCode===27}function gt(){b===!0&&(b=!1)}function vt(e){b===!0&&(b=!1,_e(e,27)===!0&&p[p.length-1](e))}function qe(e){window[e]("keydown",ht),window[e]("blur",gt),window[e]("keyup",vt),b=!1}function pt(e){ye.is.desktop===!0&&(p.push(e),p.length===1&&qe("addEventListener"))}function ce(e){const t=p.indexOf(e);t>-1&&(p.splice(t,1),p.length===0&&qe("removeEventListener"))}const y=[];function ke(e){y[y.length-1](e)}function yt(e){ye.is.desktop===!0&&(y.push(e),y.length===1&&document.body.addEventListener("focusin",ke))}function fe(e){const t=y.indexOf(e);t>-1&&(y.splice(t,1),y.length===0&&document.body.removeEventListener("focusin",ke))}let F=0;const _t={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},me={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var he=ve({name:"QDialog",inheritAttrs:!1,props:I(q(q({},it),ut),{transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}}),emits:[...lt,"shake","click","escape-key"],setup(e,{slots:t,emit:s,attrs:u}){const v=je(),m=w(null),n=w(!1),d=w(!1),x=w(!1);let V,_=null,S,H;const J=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:X}=st(),{registerTimeout:Z,removeTimeout:ee}=nt(),{registerTick:Ce,removeTick:te}=at(),{showPortal:oe,hidePortal:se,portalIsAccessible:we,renderPortal:be}=dt(v,m,He,!0),{hide:T}=rt({showing:n,hideOnRouteChange:J,handleShow:Le,handleHide:ze,processOnMount:!0}),{addToHistory:xe,removeFromHistory:Ee}=ot(n,T,J),De=c(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${_t[e.position]}`+(x.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),Be=c(()=>"q-transition--"+(e.transitionShow===void 0?me[e.position][0]:e.transitionShow)),Se=c(()=>"q-transition--"+(e.transitionHide===void 0?me[e.position][1]:e.transitionHide)),Te=c(()=>d.value===!0?Se.value:Be.value),ne=c(()=>`--q-transition-duration: ${e.transitionDuration}ms`),P=c(()=>n.value===!0&&e.seamless!==!0),Ie=c(()=>e.autoClose===!0?{onClick:Fe}:{}),$e=c(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${P.value===!0?"modal":"seamless"}`,u.class]);O(n,o=>{Oe(()=>{d.value=o})}),O(()=>e.maximized,o=>{n.value===!0&&R(o)}),O(P,o=>{X(o),o===!0?(yt(K),pt(M)):(fe(K),ce(M))});function Le(o){ee(),te(),xe(),_=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,R(e.maximized),oe(),x.value=!0,e.noFocus!==!0&&(document.activeElement!==null&&document.activeElement.blur(),Ce(E)),Z(()=>{if(v.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:h,bottom:N}=document.activeElement.getBoundingClientRect(),{innerHeight:ie}=window,A=window.visualViewport!==void 0?window.visualViewport.height:ie;h>0&&N>A/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-A,N>=ie?1/0:Math.ceil(document.scrollingElement.scrollTop+N-A/2))),document.activeElement.scrollIntoView()}H=!0,m.value.click(),H=!1}oe(!0),x.value=!1,s("show",o)},e.transitionDuration)}function ze(o){ee(),te(),Ee(),ae(!0),x.value=!0,se(),_!==null&&(_.focus(),_=null),Z(()=>{se(!0),x.value=!1,s("hide",o)},e.transitionDuration)}function E(o){ct(()=>{let h=m.value;h===null||h.contains(document.activeElement)===!0||(h=h.querySelector(o||"[autofocus], [data-autofocus]")||h,h.focus({preventScroll:!0}))})}function Q(){E(),s("shake");const o=m.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),clearTimeout(V),V=setTimeout(()=>{m.value!==null&&(o.classList.remove("q-animate--scale"),E())},170))}function M(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&Q():(s("escape-key"),T()))}function ae(o){clearTimeout(V),(o===!0||n.value===!0)&&(R(!1),e.seamless!==!0&&(X(!1),fe(K),ce(M))),o!==!0&&(_=null)}function R(o){o===!0?S!==!0&&(F<1&&document.body.classList.add("q-body--dialog"),F++,S=!0):S===!0&&(F<2&&document.body.classList.remove("q-body--dialog"),F--,S=!1)}function Fe(o){H!==!0&&(T(o),s("click",o))}function Ve(o){e.persistent!==!0&&e.noBackdropDismiss!==!0?T(o):e.noShake!==!0&&Q()}function K(o){we.value===!0&&Ue(m.value,o.target)!==!0&&E('[tabindex]:not([tabindex="-1"])')}Object.assign(v.proxy,{focus:E,shake:Q,__updateRefocusTarget(o){_=o||null}}),We(ae);function He(){return C("div",I(q({},u),{class:$e.value}),[C(ue,{name:"q-transition--fade",appear:!0},()=>P.value===!0?C("div",{class:"q-dialog__backdrop fixed-full",style:ne.value,"aria-hidden":"true",onMousedown:Ve}):null),C(ue,{name:Te.value,appear:!0},()=>n.value===!0?C("div",q({ref:m,class:De.value,style:ne.value,tabindex:-1},Ie.value),pe(t.default)):null)])}return be}});function ge(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var Y=Ye({name:"close-popup",beforeMount(e,{value:t}){const s={depth:ge(t),handler(u){s.depth!==0&&setTimeout(()=>{const v=ft(e);v!==void 0&&mt(v,u,s.depth)})},handlerKey(u){_e(u,13)===!0&&s.handler(u)}};e.__qclosepopup=s,e.addEventListener("click",s.handler),e.addEventListener("keyup",s.handlerKey)},updated(e,{value:t,oldValue:s}){t!==s&&(e.__qclosepopup.depth=ge(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});const qt=Je({name:"DTCStatus",components:{},setup(){const e=Xe(Ze);return{store:e.state.DtcCodes,fixed:w(!1),clearDtc:w(!1),selectedCode:"",codeInfo:{code:"",info:[""],symptoms:[""],causes:[""]},getClassName(t){switch(t){case"ERR":return"text-white bg-red-6";case"WARN":return"text-white bg-warning";case"INFO":return"text-white bg-indigo-8";default:return"text-white bg-secondary"}},requestEfiCodes(){e.dispatch("DtcCodes/getDTCfromEFI")}}},methods:{requestCodeInfo(e){this.fixed=!0,this.selectedCode=e.code,this.codeInfo=e},requestDtcDelete(e){this.clearDtc=!0,this.selectedCode=e.code,this.codeInfo=e}}}),kt=f("h4",{class:"q-mt-md q-mb-md"},"DTC Status",-1),Ct=f("h6",{class:"q-mt-md q-mb-lg"}," you can view and remove dtc/fault codes from here ",-1),wt=G(" Request codes from EFI "),bt={key:0,class:"q-pa-md row items-start q-gutter-md"},xt={class:"text-h6"},Et={class:"text-subtitle2",style:{"word-break":"break-word"}},Dt=G(" More Info "),Bt=G("Clear"),St={class:"text-h6"},Tt={key:0},It=f("h5",{class:"q-mt-md q-mb-md"},"What does that mean?",-1),$t={key:1},Lt=f("h5",{class:"q-mt-md q-mb-md"},"Symptoms:",-1),zt={key:2},Ft=f("h5",{class:"q-mt-md q-mb-md"},"Causes:",-1),Vt={class:"text-h5"};function Ht(e,t,s,u,v,m){return l(),r(B,null,[f("div",null,[kt,Ct,a(k,{flat:"",onClick:e.requestEfiCodes,icon:"receipt",rounded:""},{default:i(()=>[wt]),_:1},8,["onClick"]),e.store.parsedLoading||e.store.efiLoading?(l(),de(tt,{key:0,class:"q-mb-lg q-mt-md",indeterminate:"",rounded:"",size:"15px","animation-speed":"600"})):D("",!0)]),e.store.parsedCodes!==null?(l(),r("div",bt,[(l(!0),r(B,null,$(e.store.parsedCodes,n=>(l(),de(j,{key:n.code,style:{"max-width":"300px"}},{default:i(()=>[a(z,{class:et(e.getClassName(n.type))},{default:i(()=>[f("div",xt,g(n.type)+": "+g(n.code),1),f("div",Et,g(n.description),1)]),_:2},1032,["class"]),a(L),a(U,{align:"right"},{default:i(()=>[a(k,{flat:"",class:"q-mr-lg",onClick:d=>e.requestCodeInfo(n)},{default:i(()=>[Dt]),_:2},1032,["onClick"]),a(k,{flat:"",onClick:d=>e.requestDtcDelete(n)},{default:i(()=>[Bt]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))])):D("",!0),a(he,{modelValue:e.fixed,"onUpdate:modelValue":t[0]||(t[0]=n=>e.fixed=n)},{default:i(()=>[a(j,null,{default:i(()=>[a(z,null,{default:i(()=>[f("div",St,g(e.codeInfo.code)+" description",1)]),_:1}),a(L),a(z,{style:{"max-height":"50vh"},class:"scroll"},{default:i(()=>[e.codeInfo.info?(l(),r("span",Tt,[It,(l(!0),r(B,null,$(e.codeInfo.info,(n,d)=>(l(),r("p",{key:`description-${d}`},g(n),1))),128))])):D("",!0),e.codeInfo.symptoms?(l(),r("span",$t,[Lt,(l(!0),r(B,null,$(e.codeInfo.symptoms,(n,d)=>(l(),r("p",{key:`symptom-${d}`},g(n),1))),128))])):D("",!0),e.codeInfo.causes?(l(),r("span",zt,[Ft,(l(!0),r(B,null,$(e.codeInfo.causes,(n,d)=>(l(),r("p",{key:`cause-${d}`},g(n),1))),128))])):D("",!0)]),_:1}),a(L),a(U,{align:"right"},{default:i(()=>[W(a(k,{flat:"",label:"Close",color:"primary"},null,512),[[Y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(he,{modelValue:e.clearDtc,"onUpdate:modelValue":t[1]||(t[1]=n=>e.clearDtc=n)},{default:i(()=>[a(j,{class:"q-pa-md"},{default:i(()=>[a(z,null,{default:i(()=>[f("div",Vt,"Confirm delete code: "+g(e.codeInfo.code)+"?",1)]),_:1}),a(L),a(U,{align:"right"},{default:i(()=>[W(a(k,{flat:"",label:"Yes",color:"primary",class:"q-mr-xl"},null,512),[[Y]]),W(a(k,{flat:"",label:"No",color:"secondary"},null,512),[[Y]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var Yt=Ge(qt,[["render",Ht]]);export{Yt as default};
