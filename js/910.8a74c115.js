"use strict";(self["webpackChunkopenefi_tuner"]=self["webpackChunkopenefi_tuner"]||[]).push([[910],{5910:(e,t,s)=>{s.r(t),s.d(t,{default:()=>R});var o=s(3673),l=s(2323);const a=(0,o._)("h4",{class:"q-mt-md q-mb-md"},"DTC Status",-1),d=(0,o._)("h6",{class:"q-mt-md q-mb-lg"}," you can view and remove dtc/fault codes from here ",-1),c=(0,o.Uk)(" Request codes from EFI "),n={key:0,class:"q-pa-md row items-start q-gutter-md"},r={class:"text-h6"},i={class:"text-subtitle2",style:{"word-break":"break-word"}},m=(0,o.Uk)(" More Info "),u=(0,o.Uk)("Clear"),f={class:"text-h6"},p={key:0},w=(0,o._)("h5",{class:"q-mt-md q-mb-md"},"What does that mean?",-1),g={key:1},q=(0,o._)("h5",{class:"q-mt-md q-mb-md"},"Symptoms:",-1),h={key:2},C=(0,o._)("h5",{class:"q-mt-md q-mb-md"},"Causes:",-1),k={class:"text-h5"};function y(e,t,s,y,_,D){const W=(0,o.up)("q-btn"),b=(0,o.up)("q-linear-progress"),x=(0,o.up)("q-card-section"),I=(0,o.up)("q-separator"),v=(0,o.up)("q-card-actions"),Z=(0,o.up)("q-card"),z=(0,o.up)("q-dialog"),Q=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",null,[a,d,(0,o.Wm)(W,{flat:"",onClick:e.requestEfiCodes,icon:"receipt",rounded:""},{default:(0,o.w5)((()=>[c])),_:1},8,["onClick"]),e.store.parsedLoading||e.store.efiLoading?((0,o.wg)(),(0,o.j4)(b,{key:0,class:"q-mb-lg q-mt-md",indeterminate:"",rounded:"",size:"15px","animation-speed":"600"})):(0,o.kq)("",!0)]),null!==e.store.parsedCodes?((0,o.wg)(),(0,o.iD)("div",n,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.store.parsedCodes,(t=>((0,o.wg)(),(0,o.j4)(Z,{key:t.code,style:{"max-width":"300px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{class:(0,l.C_)(e.getClassName(t.type))},{default:(0,o.w5)((()=>[(0,o._)("div",r,(0,l.zw)(t.type)+": "+(0,l.zw)(t.code),1),(0,o._)("div",i,(0,l.zw)(t.description),1)])),_:2},1032,["class"]),(0,o.Wm)(I),(0,o.Wm)(v,{align:"right"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{flat:"",class:"q-mr-lg",onClick:s=>e.requestCodeInfo(t)},{default:(0,o.w5)((()=>[m])),_:2},1032,["onClick"]),(0,o.Wm)(W,{flat:"",onClick:s=>e.requestDtcDelete(t)},{default:(0,o.w5)((()=>[u])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])):(0,o.kq)("",!0),(0,o.Wm)(z,{modelValue:e.fixed,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fixed=t)},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[(0,o._)("div",f,(0,l.zw)(e.codeInfo.code)+" description",1)])),_:1}),(0,o.Wm)(I),(0,o.Wm)(x,{style:{"max-height":"50vh"},class:"scroll"},{default:(0,o.w5)((()=>[e.codeInfo.info?((0,o.wg)(),(0,o.iD)("span",p,[w,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.codeInfo.info,((e,t)=>((0,o.wg)(),(0,o.iD)("p",{key:`description-${t}`},(0,l.zw)(e),1)))),128))])):(0,o.kq)("",!0),e.codeInfo.symptoms?((0,o.wg)(),(0,o.iD)("span",g,[q,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.codeInfo.symptoms,((e,t)=>((0,o.wg)(),(0,o.iD)("p",{key:`symptom-${t}`},(0,l.zw)(e),1)))),128))])):(0,o.kq)("",!0),e.codeInfo.causes?((0,o.wg)(),(0,o.iD)("span",h,[C,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.codeInfo.causes,((e,t)=>((0,o.wg)(),(0,o.iD)("p",{key:`cause-${t}`},(0,l.zw)(e),1)))),128))])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(I),(0,o.Wm)(v,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(W,{flat:"",label:"Close",color:"primary"},null,512),[[Q]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(z,{modelValue:e.clearDtc,"onUpdate:modelValue":t[1]||(t[1]=t=>e.clearDtc=t)},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{class:"q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[(0,o._)("div",k,"Confirm delete code: "+(0,l.zw)(e.codeInfo.code)+"?",1)])),_:1}),(0,o.Wm)(I),(0,o.Wm)(v,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(W,{flat:"",label:"Yes",color:"primary",class:"q-mr-xl"},null,512),[[Q]]),(0,o.wy)((0,o.Wm)(W,{flat:"",label:"No",color:"secondary"},null,512),[[Q]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var _=s(1959),D=s(2156),W=s(3617);const b=(0,o.aZ)({name:"DTCStatus",components:{},setup(){const e=(0,W.oR)(D.storeKey);return{store:e.state.DtcCodes,fixed:(0,_.iH)(!1),clearDtc:(0,_.iH)(!1),selectedCode:"",codeInfo:{code:"",info:[""],symptoms:[""],causes:[""]},getClassName(e){switch(e){case"ERR":return"text-white bg-red-6";case"WARN":return"text-white bg-warning";case"INFO":return"text-white bg-indigo-8";default:return"text-white bg-secondary"}},requestEfiCodes(){e.dispatch("DtcCodes/getDTCfromEFI")}}},methods:{requestCodeInfo(e){this.fixed=!0,this.selectedCode=e.code,this.codeInfo=e},requestDtcDelete(e){this.clearDtc=!0,this.selectedCode=e.code,this.codeInfo=e}}});var x=s(4260),I=s(9400),v=s(1598),Z=s(151),z=s(5589),Q=s(5869),H=s(9367),V=s(283),Y=s(677),E=s(7518),K=s.n(E);const N=(0,x.Z)(b,[["render",y]]),R=N;K()(b,"components",{QBtn:I.Z,QLinearProgress:v.Z,QCard:Z.Z,QCardSection:z.Z,QSeparator:Q.Z,QCardActions:H.Z,QDialog:V.Z}),K()(b,"directives",{ClosePopup:Y.Z})}}]);