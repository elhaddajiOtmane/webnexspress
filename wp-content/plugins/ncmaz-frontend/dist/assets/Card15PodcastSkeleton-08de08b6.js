import{a as r,j as e,N as m}from"./main-01589982.js";import{N as f}from"./NcImage-befadaec.js";import{B as x}from"./ButtonPlayMusicRunningContainer-80762dbc.js";import{c as v}from"./checkPostStandHasFeaturedImage-07d23d31.js";import{S as p}from"./index-0c588460.js";const y=({className:s="h-full",post:l})=>{var u;const{title:a,link:n,featuredImage:t,postFormats:i,excerpt:d}=l,h=(u=i==null?void 0:i.edges[0])==null?void 0:u.node.slug,C=o=>{switch(o){case"loading":return r("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",children:[e("path",{fill:"currentColor",d:"M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"}),e("path",{fill:"currentColor",d:"M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"}),e("path",{fill:"currentColor",d:"M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"})]});case"playing":return r("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",children:[e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M15.25 6.75V17.25"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M8.75 6.75V17.25"})]});default:return e("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"})})}},c=o=>r("div",{className:"inline-flex items-center mt-3 pr-4 py-0.5 cursor-pointer rounded-full transition-all hover:pl-0.5 hover:bg-primary-50 dark:hover:bg-neutral-900",children:[e("span",{className:"w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-neutral-800 text-primary-6000 dark:text-primary-200",children:C(o)}),e("span",{className:"ml-3 text-sm font-medium",children:o==="playing"?m["Now playing"]:m["Listen now"]})]}),k=v(l);return r("div",{className:`nc-Card15Podcast relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] hover:shadow-md transition-shadow ${s}`,"data-nc-id":"Card15Podcast",children:[k&&e("div",{className:"w-1/4 flex-shrink-0 mr-4",children:e("a",{href:n,className:"block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-md ",children:e(f,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full ",src:(t==null?void 0:t.node.sourceUrl)||".",srcSet:t==null?void 0:t.node.srcSet,sizes:"THUMBNAIL",alt:a})})}),r("div",{className:"flex flex-col flex-grow overflow-hidden",children:[e("h3",{className:"nc-card-title block font-semibold text-sm sm:text-lg",children:e("a",{href:n,className:"line-clamp-2",title:a,dangerouslySetInnerHTML:{__html:a||""}})}),d?e("span",{className:"text-xs text-neutral-500 dark:text-neutral-400 mt-1 ",children:e("span",{className:"line-clamp-1",dangerouslySetInnerHTML:{__html:d}})}):null,(h==="post-format-video"||h==="post-format-audio")&&e(x,{post:l,className:"",renderDefaultBtn:()=>c(),renderLoadingBtn:()=>c("loading"),renderPlayingBtn:()=>c("playing")})]})]})},M=({className:s="h-full"})=>{const l=n=>{switch(n){case"loading":return r("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",children:[e("path",{fill:"currentColor",d:"M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"}),e("path",{fill:"currentColor",d:"M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"}),e("path",{fill:"currentColor",d:"M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"})]});case"playing":return r("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",children:[e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M15.25 6.75V17.25"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M8.75 6.75V17.25"})]});default:return e("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"})})}},a=n=>r("div",{className:"inline-flex items-center mt-3 pr-4 py-0.5 cursor-pointer rounded-full transition-all hover:pl-0.5 hover:bg-primary-50 dark:hover:bg-neutral-900",children:[e("span",{className:"w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-neutral-800 text-primary-6000 dark:text-primary-200",children:l(n)}),e("span",{className:"ml-3 text-sm font-medium",children:n==="playing"?"Now playing":"Listen now"})]});return r("div",{className:`nc-Card15PodcastSkeleton relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${s}`,"data-nc-id":"Card15PodcastSkeleton",children:[e("div",{className:"w-1/4 flex-shrink-0",children:e("div",{className:"block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg ",children:e(f,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full ",src:"."})})}),r("div",{className:"flex flex-col flex-grow ml-4 overflow-hidden",children:[e("h3",{className:"nc-card-title block font-semibold text-lg",children:e(p,{})}),e("span",{className:"text-xs text-neutral-500 dark:text-neutral-400 mt-1",children:e(p,{width:"40%"})}),a()]})]})};export{y as C,M as a};