import{r as p,j as l,a as r,N as y}from"./main-01589982.js";import{N as n}from"./NcImage-befadaec.js";import{N as f}from"./NextPrev-10599e1e.js";import{B as C}from"./ButtonClose-46908ee4.js";import{G as _}from"./glide.esm-676e99f8.js";import{m as g}from"./dialog-c077491e.js";import"./getImageSizesBySizeName-22c25ac1.js";import"./twFocusClass-d0735f61.js";import"./use-owner-4bb5aead.js";const k=({imgs:c,isOpen:i,onClose:d,initFocus:a=0})=>{const u="glidejs"+p.useId().replace(/:/g,"_");p.useEffect(()=>{var o;i&&document.querySelector(`.${u}`)&&new _(`.${u}`,{direction:((o=document.querySelector("html"))==null?void 0:o.getAttribute("dir"))==="rtl"?"rtl":"ltr",gap:10,perView:1,startAt:a}).mount()},[i,a,c]);const m=()=>r("div",{className:`modalPhotos-single-gallery ${u} group relative flex flex-col z-10 w-full h-full`,children:[l("div",{className:"controls_nav glide__bullets mt-8 mb-5","data-glide-el":"controls[nav]",children:c.map((o,t)=>r("div",{className:"text-center hidden",children:[r("span",{className:"text-3xl font-semibold",children:[" ",t+1]}),r("span",{children:[" / ",c.length]})]},t))}),l("div",{className:"glide__track max-h-full h-full relative z-50","data-glide-el":"track",children:l("ul",{className:"glide__slides h-full",children:c.map((o,t)=>l("li",{className:"glide__slide relative h-full",children:l(n,{src:o.sourceUrl||".",srcSet:o.srcSet,imageSizes:"_2048X2048",containerClassName:" w-full h-full rounded-2xl flex justify-center items-center",className:" rounded-2xl max-h-full max-w-full"})},t))})}),r("div",{className:"xl:absolute z-20 xl:-inset-x-20 max-w-6xl mt-4 mx-auto top-full xl:top-1/2 transform xl:-translate-y-1/2 flex rtl:flex-row-reverse xl:justify-between glide__arrows",children:[l(f,{onlyPrev:!0,containerClassName:"mx-1.5",btnClassName:"w-8 h-8 sm:w-10 sm:h-10 "}),l(f,{onlyNext:!0,containerClassName:"mx-1.5",btnClassName:"w-8 h-8 sm:w-10 sm:h-10 "})]})]});return(()=>l(g,{as:"div",className:"fixed inset-0 z-max overflow-y-auto dark bg-neutral-800 text-neutral-200 hiddenScrollbar",onClose:d,open:i,children:r("div",{className:"min-h-screen px-4 text-center",children:[l(g.Overlay,{className:"fixed inset-0 bg-white dark:bg-neutral-800"}),l("div",{className:"absolute left-2 top-2 md:top-4 md:left-4 z-max",children:l(C,{iconSize:"w-6 h-6",className:" w-11 h-11",onClick:d})}),l("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"​"}),l("div",{className:"relative inline-block w-full max-w-5xl py-8 h-screen align-middle mx-auto",children:m()})]})}))()},H=({className:c="",photos:i=[]})=>{const d=i.filter(e=>!!(e!=null&&e.url));let a=d;if(a=a.filter((e,s)=>s<5),!a[0])return null;const[u,m]=p.useState(!1),[v,o]=p.useState(0),t=e=>{m(!0),o(e)},N=()=>m(!1),x=()=>a.length===2?r("div",{className:"relative grid grid-cols-4 gap-2 ",children:[r("div",{className:"col-span-2 row-span-2 relative rounded-xl overflow-hidden z-0 cursor-pointer",onClick:()=>t(0),children:[l(n,{containerClassName:"aspect-w-4 aspect-h-3",className:"object-cover w-full h-full rounded-xl",src:a[0].url,alt:a[0].alt,loading:"eager"}),l("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"})]}),r("div",{className:"col-span-2 row-span-2 relative rounded-xl overflow-hidden z-0 cursor-pointer",onClick:()=>t(1),children:[l(n,{containerClassName:"aspect-w-4 aspect-h-3",className:"object-cover w-full h-full rounded-xl",src:a[1].url,alt:a[1].alt,loading:"eager"}),l("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"})]})]}):a.length===3?r("div",{className:"relative grid grid-cols-2 sm:grid-cols-4 gap-2 ",children:[r("div",{className:"col-span-2 relative rounded-xl overflow-hidden z-0 cursor-pointer",onClick:()=>t(0),children:[l(n,{containerClassName:"aspect-w-16 aspect-h-9 sm:absolute sm:inset-0",className:"object-cover w-full h-full rounded-xl",src:a[0].url,alt:a[0].alt,loading:"eager"}),l("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"})]}),a.filter((e,s)=>s>=1).map((e,s)=>{var h;return r("div",{className:`relative rounded-xl overflow-hidden z-0 ${s>=2?"hidden sm:block":""}`,children:[l(n,{containerClassName:"aspect-w-3 aspect-h-4",className:"object-cover w-full h-full rounded-xl ",src:((h=e==null?void 0:e.sizes)==null?void 0:h.large)||(e==null?void 0:e.url),alt:e==null?void 0:e.alt}),l("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer",onClick:()=>t(s+1)})]},s)})]}):r("div",{className:"relative grid grid-cols-3 lg:grid-cols-4 gap-2 ",children:[r("div",{className:"col-span-2 row-span-2 relative rounded-xl overflow-hidden z-0 cursor-pointer",onClick:()=>t(0),children:[l(n,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full rounded-xl",src:a[0].url,alt:a[0].alt,loading:"eager"}),l("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"})]}),a.filter((e,s)=>s>=1).map((e,s)=>{var h;return r("div",{className:`relative rounded-xl overflow-hidden z-0 ${s>=2?"hidden lg:block":""}`,children:[l(n,{containerClassName:"aspect-w-6 aspect-h-5",className:"object-cover w-full h-full rounded-xl ",src:((h=e==null?void 0:e.sizes)==null?void 0:h.large)||(e==null?void 0:e.url),alt:e==null?void 0:e.alt}),l("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer",onClick:()=>t(s+1)})]},s)})]}),b=()=>l("header",{className:"rounded-xl",children:r("div",{className:"relative my-8 sm:my-10",children:[x(),r("div",{className:"absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10",onClick:()=>t(0),children:[l("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),l("span",{className:"ml-2 text-neutral-800 text-sm font-medium",children:y.showAllPhotos})]})]})}),w=()=>l("header",{className:"rounded-xl my-10",children:l(n,{className:"w-full rounded-xl",src:a[0].url,alt:a[0].alt,loading:"eager"})});return r("div",{className:c,children:[a.length>1?b():w(),l(k,{imgs:d.map(e=>({sourceUrl:e.url,altText:e.alt,caption:e.caption})),isOpen:u,onClose:N,initFocus:v})]})};export{H as default};