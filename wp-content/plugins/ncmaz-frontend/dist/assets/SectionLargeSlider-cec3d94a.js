import{a as i,j as e,r as f,V as $,a3 as I}from"./main-01589982.js";import{N as A}from"./NcImage-befadaec.js";import{N as j}from"./NextPrev-10599e1e.js";import{P as q}from"./PostCardLikeAndComment-fcd151a8.js";import{C as R}from"./CardAuthor2-e5d1b032.js";import{C as M}from"./CategoryBadgeList-87f3b9ef.js";import E from"./PostCardDropdownShare-48c067a7.js";import{S as y}from"./index-0c588460.js";import"./getImageSizesBySizeName-22c25ac1.js";import"./twFocusClass-d0735f61.js";import"./PostCardLikeAction-813d8440.js";import"./Avatar-e46ae567.js";import"./contants-3c5f400b.js";import"./contantsCommon-3b0e63b7.js";import"./formatDate-dfe39bf7.js";import"./Badge-126d3422.js";import"./NcDropDown-b9381a6a.js";import"./menu-8d10a083.js";import"./use-owner-4bb5aead.js";import"./transition-c5ae4969.js";import"./SocialShareItem-24d6d915.js";const U=({className:t="",post:r,onClickNext:n=()=>{},onClickPrev:a=()=>{},hasNext:o,hasPrev:m,hasAnimation:N=!0,indexActive:h,postsLength:g})=>{var p;const{ncPostMetaData:v,featuredImage:s,title:d,date:l,categories:c,author:x,link:u}=r;return i("div",{className:`nc-CardLarge1 ${N?"nc-CardLarge1--hasAnimation":""} relative flex flex-col-reverse md:flex-row justify-end ${t}`,children:[i("div",{className:"md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-4 sm:-mt-8 md:mt-0 px-2 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5",children:[i("div",{className:"nc-CardLarge1__left p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl sm:rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 - nc-dark-box-bg",children:[e(M,{className:"hidden sm:flex",categories:c}),e("h2",{className:"nc-card-title text-base sm:text-xl lg:text-2xl font-semibold ",children:e("a",{href:u,className:"line-clamp-2",title:d,dangerouslySetInnerHTML:{__html:d||""}})}),e(R,{className:"relative",author:x,date:l,hoverReadingTime:!1,readingTimeShortcode:v.readingTimeShortcode}),i("div",{className:"flex items-center justify-between mt-auto",children:[e(q,{postData:r}),e(E,{href:r.link,image:(p=r.featuredImage)==null?void 0:p.node.sourceUrl})]})]}),o||m?e("div",{className:"p-4 sm:pt-8 sm:px-10",children:e(j,{disablePrev:!m,disableNext:!o,btnClassName:"w-11 h-11 text-xl",onClickNext:n,onClickPrev:a})}):null]}),e("div",{className:"w-full md:w-4/5 lg:w-2/3",children:i("a",{className:"relative block nc-CardLarge1__right ",href:u,children:[e(A,{containerClassName:"aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative",className:"absolute inset-0 object-cover rounded-2xl sm:rounded-3xl",src:(s==null?void 0:s.node.sourceUrl)||".",srcSet:s==null?void 0:s.node.srcSet,alt:d,loading:"eager"}),e("div",{className:"absolute inset-x-4 bottom-5 sm:bottom-3 flex justify-center z-10",children:e("div",{className:"flex items-center justify-center ",children:g.length>1&&g.map((w,k)=>e("div",{className:` rounded-full mx-1 ${k===h?" w-2 h-2 bg-white":"w-1.5 h-1.5 bg-neutral-200/70"}`},k))})})]})})]})},D=({className:t=""})=>i("div",{className:`nc-CardLarge1Skeleton relative flex flex-col-reverse md:flex-row justify-end ${t}`,children:[i("div",{className:"md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5",children:[e("div",{children:i("div",{className:"p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg",children:[e(y,{width:"20%"}),e("h2",{className:"nc-card-title text-xl sm:text-2xl font-semibold ",children:e(y,{width:"80%"})}),e("div",{children:e("span",{className:"opacity-0",children:"22"})}),e("div",{className:" mt-auto",children:e(y,{width:"100%"})})]})}),e("div",{className:"p-4 sm:pt-8 sm:px-10",children:e(j,{btnClassName:"w-11 h-11 text-xl"})})]}),e("div",{className:"w-full md:w-4/5 lg:w-2/3",children:e("div",{children:e(A,{containerClassName:"aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative",className:"absolute inset-0 object-cover rounded-3xl",src:"."})})})]});var T={};Object.defineProperty(T,"__esModule",{value:!0});var C=f,O=function(t,r){var n=C.useRef(function(){});C.useEffect(function(){n.current=t}),C.useEffect(function(){if(r!==null){var a=setInterval(function(){return n.current()},r||0);return function(){return clearInterval(a)}}},[r])},P=T.default=O,L={};const z=$(I);var b={},S;function B(){if(S)return b;S=1,Object.defineProperty(b,"__esModule",{value:!0});var t=f,r=function(a,o){return typeof o=="boolean"?o:!a},n=function(a){return t.useReducer(r,a)};return b.default=n,b}Object.defineProperty(L,"__esModule",{value:!0});var H=z,F=H.__importDefault(B()),G=L.default=F.default;let _=null;const pe=({listPosts:t,isLoading:r})=>{const[n,a]=f.useState(0),[o,m]=f.useState(!1),[N,h]=G(!0);f.useEffect(()=>{a(0),d()},[t]),P(()=>{g()},N?5e3:null);const g=()=>{a(l=>l>=t.length-1?0:l+1),m(!0)},v=()=>{a(l=>l>=t.length-1?0:l+1),d()},s=()=>{a(l=>l===0?t.length-1:l-1),d()},d=()=>{m(!0),h(!1),_&&clearTimeout(_),_=setTimeout(()=>{h(!0)},1e3)};return e("div",{className:"ncSectionLargeSlider",children:r?e(D,{}):t.map((l,c)=>{var x,u,p,w;return n!==c?null:e(U,{postsLength:[...Array(t.length).keys()],indexActive:n,hasAnimation:o,onClickNext:((x=document.querySelector("html"))==null?void 0:x.getAttribute("dir"))==="rtl"?s:v,onClickPrev:((u=document.querySelector("html"))==null?void 0:u.getAttribute("dir"))==="rtl"?v:s,post:l.node,hasNext:((p=document.querySelector("html"))==null?void 0:p.getAttribute("dir"))==="rtl"?c>0:t.length>c+1,hasPrev:((w=document.querySelector("html"))==null?void 0:w.getAttribute("dir"))==="rtl"?t.length>c+1:c>0},c)})})};export{pe as default};
