import{a as l,j as e}from"./main-01589982.js";import{N as d}from"./NcImage-befadaec.js";import u from"./SocialsShare-7f8eccda.js";import{C as f}from"./CategoryBadgeList-87f3b9ef.js";import{P as N}from"./PostTypeFeaturedIcon-f1f09999.js";import{S as c}from"./index-0c588460.js";const y=({className:s="h-full",post:o,ratio:m="pt-[75%] sm:pt-[55%] ",hasExcerpt:h=!0,imageSizes:p})=>{var i;const{title:r,link:a,featuredImage:t,excerpt:b,categories:x,postFormats:n}=o;return l("div",{className:`nc-Card8 group relative [ nc-box-has-hover nc-dark-box-bg-has-hover ] overflow-hidden z-0 ${s}`,"data-nc-id":"Card8",children:[e(u,{href:a,className:"absolute hidden md:grid gap-0.5 right-4 top-4 opacity-0 z-10 group-hover:opacity-100 transition-opacity duration-300"}),l("a",{href:a,className:`block w-full h-0 ${m} rounded-xl overflow-hidden z-0`,children:[e(d,{containerClassName:"absolute inset-0",src:(t==null?void 0:t.node.sourceUrl)||".",srcSet:t==null?void 0:t.node.srcSet,imageSizes:p,alt:r}),e(N,{className:"absolute top-4 left-4",postType:(i=n==null?void 0:n.edges[0])==null?void 0:i.node.slug,wrapSize:"w-8 h-8",iconSize:"w-4 h-4"})]}),e("a",{href:a,className:"absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-black/50"}),l("div",{className:"absolute z-10 inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col",children:[e("a",{href:a,className:"absolute inset-0"}),e(f,{categories:x}),e("h3",{className:"mt-3.5 relative block font-semibold text-white text-lg sm:text-xl nc-card-title",children:e("a",{href:a,className:"line-clamp-2 ",title:r,dangerouslySetInnerHTML:{__html:r||""}})}),h&&e("div",{className:"hidden sm:block mt-3",children:e("span",{className:"text-neutral-200 text-sm line-clamp-2",dangerouslySetInnerHTML:{__html:b||""}})})]})]})},z=({className:s="h-full",ratio:o="pt-[75%] sm:pt-[55%] "})=>l("div",{className:`nc-Card8Skeleton group relative [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${s}`,"data-nc-id":"Card8Skeleton",children:[e("div",{className:`block w-full h-0 ${o} rounded-xl overflow-hidden`,children:e(d,{containerClassName:"absolute inset-0",src:"."})}),l("div",{className:"absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col",children:[e(c,{width:"30%"}),e("h3",{className:"mt-3 relative block font-semibold text-neutral-50 text-lg sm:text-xl",children:e(c,{width:"90%"})}),e("div",{className:"hidden sm:block mt-2",children:e("span",{className:"opacity-0",children:"dd"})})]})]});export{y as C,z as a};
