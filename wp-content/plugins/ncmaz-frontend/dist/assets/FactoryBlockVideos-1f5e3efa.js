import{j as e,r as m,a as o,F as w,c as y}from"./main-01589982.js";import{B as b}from"./BackgroundSection-f1af2e57.js";import{H as v}from"./Heading-8e8fa951.js";import{N as p}from"./NcImage-befadaec.js";import{N as x}from"./NcPlayIcon-c2bc8eca.js";import{R as N}from"./index-b8b43c8a.js";import"./NextPrev-10599e1e.js";import"./twFocusClass-d0735f61.js";import"./getImageSizesBySizeName-22c25ac1.js";const k=({className:t="w-8 h-8 md:w-10 md:h-10",iconClass:a="w-5 h-5"})=>e("div",{className:`nc-NcPlayIcon2 bg-white relative rounded-full shadow-inner ${t}`,"data-nc-id":"NcPlayIcon2",children:e("span",{className:"absolute inset-0 flex items-center justify-center text-primary-500",children:e("svg",{className:a,width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"})})})}),h=()=>navigator.userAgent.indexOf("Safari")>-1&&navigator.userAgent.indexOf("Chrome")<=-1,j=({videoIds:t=[],className:a="",heading:c="🎬 The Videos",subHeading:n=`Check out our hottest videos. View more and share more new
  perspectives on just about any topic. Everyone’s welcome.`})=>{const[r,i]=m.useState(!1),[l,d]=m.useState(0),g=()=>{const s=t[l];return o("div",{className:"group aspect-w-16 aspect-h-12 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden z-0 border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px]",children:[h()&&e(N,{playing:r,url:`https://www.youtube.com/watch?v=${s}`,className:"absolute inset-0",width:"100%",height:"100%",controls:!0}),!h()&&r&&e("iframe",{src:`https://www.youtube.com/embed/${s}?autoplay=1`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),!r&&o(w,{children:[e("div",{onClick:()=>i(!0),className:"cursor-pointer absolute inset-0 flex items-center justify-center z-10",children:e(x,{})}),e(p,{containerClassName:"absolute inset-0 ",className:"object-cover w-full h-full transition-opacity group-hover:opacity-90 ",src:`https://img.youtube.com/vi/${s}/maxresdefault.jpg`})]})]})},f=(s,u)=>u===l?null:o("div",{className:"group relative aspect-h-16 aspect-w-16 rounded-2xl bg-neutral-800 cursor-pointer overflow-hidden z-0 sm:aspect-h-12 sm:rounded-3xl lg:aspect-h-9",onClick:()=>{d(u),!r&&i(!0)},children:[e("div",{className:"absolute inset-0 flex items-center justify-center z-10",children:e(k,{})}),e(p,{containerClassName:"absolute inset-0 w-full h-full",className:"object-cover w-full h-full transition-opacity group-hover:opacity-90",src:`https://img.youtube.com/vi/${s}/mqdefault.jpg`})]},String(u));return o("div",{className:`nc-SectionVideos relative ${a}`,children:[e(v,{desc:n,children:c}),o("div",{className:"flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row",children:[e("div",{className:"absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"}),e("div",{className:"flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6",children:g()}),e("div",{className:"flex-shrink-0 grid gap-2 grid-cols-4 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40",children:t.map(f)})]})]})},L=({className:t="",domNode:a,apiSettings:c})=>{const n=()=>{const{hasBackground:r,subHeading:i,heading:l,videoIds:d}=c.settings;return o("div",{className:`nc-FactoryBlockVideos relative  ${r?"py-16":""}  ${t}`,children:[r&&e(b,{}),e(j,{videoIds:d,heading:l,subHeading:i})]})};return y.createPortal(n(),a)};export{L as default};