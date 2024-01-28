import{e as y}from"./links.bbde6535.js";import{C as k}from"./Tooltip.432f1167.js";import{a as b,S as p}from"./Caret.baea7fe0.js";import{a as B}from"./index.fadde3df.js";import{T}from"./Slide.22dc72dc.js";import{x as l,o,c as r,E as g,a as i,m as a,D as q,t as w,k as c,l as u,z as A,b as n}from"./vue.runtime.esm-bundler.308f2021.js";import{_ as N}from"./_plugin-vue_export-helper.5bcc150c.js";const V={setup(){return{settingsStore:y()}},emits:["close-card","toggle-card"],components:{CoreTooltip:k,SvgCaret:b,SvgCircleQuestionMark:B,SvgClose:p,TransitionSlide:T},props:{slug:{type:String,required:!0},headerText:String,toggles:{type:Boolean,default(){return!0}},hideHeader:Boolean,noSlide:Boolean,closes:Boolean,saveToggleStatus:{type:Boolean,default(){return!0}},disabled:Boolean,cardClass:{type:Object,default(){return{}}}},watch:{toggles(t){const s=this.slug;t&&!this.settingsStore.settings.toggledCards[s]&&this.settingsStore.toggleCard({slug:s,shouldSave:!0})}},methods:{toggleCard(){this.settingsStore.toggleCard({slug:this.slug,shouldSave:this.saveToggleStatus}),this.$emit("toggle-card")}}},z={class:"text"},D={class:"header-icon"},E={class:"header-extra"},H={key:1,class:"content"},L={key:0,class:"content"},M={key:1,class:"content"};function j(t,s,e,d,x,_){const f=l("svg-circle-question-mark"),v=l("core-tooltip"),C=l("svg-caret"),S=l("svg-close"),h=l("transition-slide");return o(),r("div",{class:g(["aioseo-card",{disabled:e.disabled,...e.cardClass}])},[e.hideHeader?n("",!0):(o(),r("div",{key:0,class:g(["header",[{toggles:e.toggles}]]),onClick:s[2]||(s[2]=(...m)=>_.toggleCard&&_.toggleCard(...m))},[i("div",z,[i("div",D,[a(t.$slots,"header-icon")]),i("div",{class:"header-title",onClick:s[0]||(s[0]=q(()=>{},["stop"]))},[a(t.$slots,"header",{},()=>[i("span",null,w(e.headerText),1)])]),t.$slots.tooltip?(o(),c(v,{key:0},{tooltip:u(()=>[a(t.$slots,"tooltip")]),default:u(()=>[A(f)]),_:3})):n("",!0),i("div",E,[a(t.$slots,"header-extra")])]),!e.closes&&e.toggles&&d.settingsStore.settings.toggledCards&&!e.noSlide&&!e.disabled?(o(),c(C,{key:0,class:g({rotated:!d.settingsStore.settings.toggledCards[e.slug]})},null,8,["class"])):n("",!0),e.closes?(o(),c(S,{key:1,onClick:s[1]||(s[1]=m=>t.$emit("close-card",!0))})):n("",!0)],2)),t.$slots.disabled&&e.disabled?(o(),r("div",H,[a(t.$slots,"disabled")])):n("",!0),(d.settingsStore.settings.toggledCards||e.noSlide)&&!e.disabled?(o(),c(h,{key:2,active:d.settingsStore.settings.toggledCards[e.slug]&&e.toggles||e.noSlide},{default:u(()=>[t.$slots["before-tabs"]?(o(),r("div",L,[a(t.$slots,"before-tabs")])):n("",!0),a(t.$slots,"tabs"),t.$slots.default?(o(),r("div",M,[a(t.$slots,"default")])):n("",!0)]),_:3},8,["active"])):n("",!0)],2)}const I=N(V,[["render",j]]);export{I as C};