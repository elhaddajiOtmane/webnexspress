import{a,j as e}from"./main-01589982.js";import{N as h}from"./NcImage-befadaec.js";import N from"./SocialsShare-7f8eccda.js";import{P as u}from"./PostCardMeta-4fa2bae8.js";import{P as f}from"./PostTypeFeaturedIcon-f1f09999.js";import{c as p}from"./checkPostStandHasFeaturedImage-07d23d31.js";import{S as d}from"./index-0c588460.js";import{n as b}from"./formatDate-dfe39bf7.js";const M=({className:t="h-full",post:s,imageSizes:i})=>{var m;const{title:n,link:c,featuredImage:l,excerpt:o,postFormats:r}=s,x=p(s);return a("div",{className:`nc-Card12 group relative flex flex-col ${t}`,"data-nc-id":"Card12",children:[x&&a("a",{href:c,className:"block flex-shrink-0 relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden z-0",children:[e(h,{containerClassName:"absolute inset-0",src:(l==null?void 0:l.node.sourceUrl)||".",srcSet:l==null?void 0:l.node.srcSet,imageSizes:i||"MEDIUM_LARGE",alt:n}),e("span",{children:e(f,{className:"absolute bottom-2 left-2",postType:(m=r==null?void 0:r.edges[0])==null?void 0:m.node.slug,wrapSize:"w-8 h-8",iconSize:"w-4 h-4"})})]}),e(N,{href:c,className:"absolute hidden md:grid gap-0.5 right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300"}),a("div",{className:"mt-4 sm:mt-8 max-w-xl flex flex-col",children:[e("h3",{className:"nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-base sm:text-lg lg:text-2xl",children:e("a",{href:c,className:"line-clamp-2",title:n,dangerouslySetInnerHTML:{__html:n||""}})}),o&&e("span",{className:"hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400",children:e("span",{className:"line-clamp-2",dangerouslySetInnerHTML:{__html:o}})}),e(u,{className:"mt-2 sm:mt-5",meta:s})]})]})},_=({className:t="h-full"})=>a("div",{className:`nc-Card12Skeleton group relative flex flex-col ${t}`,"data-nc-id":"Card12Skeleton",children:[e("div",{className:"block flex-shrink-0 relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden",children:e(h,{containerClassName:"absolute inset-0",src:"."})}),a("div",{className:" mt-8 pr-10 flex flex-col",children:[e("h3",{className:"nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl",children:e(d,{width:"70%"})}),e("span",{className:"hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400",children:e(d,{width:"80%"})}),e("div",{className:"mt-5",children:e(d,{width:"30%"})})]})]}),j=({className:t="",post:s})=>{var m;const{title:i,link:n,excerpt:c,featuredImage:l,date:o,postFormats:r}=s,x=p(s);return a("div",{className:`nc-Card13 relative flex justify-between ${t}`,"data-nc-id":"Card13",children:[a("div",{className:"flex flex-1 flex-col md:py-2",children:[e("h3",{className:"nc-card-title block font-semibold text-sm md:text-base",children:e("a",{href:n,className:"line-clamp-2",title:i,dangerouslySetInnerHTML:{__html:i||""}})}),c&&e("span",{className:"hidden md:block my-3 text-sm lg:text-base text-neutral-500 dark:text-neutral-400 ",children:e("span",{className:"line-clamp-2",dangerouslySetInnerHTML:{__html:c}})}),e("span",{className:"mt-4 block sm:hidden text-xs text-neutral-500 ",children:o?b(o):null}),e("div",{className:"mt-auto hidden sm:block",children:e(u,{meta:{...s}})})]}),x&&e("div",{className:"block relative flex-shrink-0 w-4/12 sm:w-28 md:w-36 xl:w-48 ml-3 sm:ml-5",children:a("a",{href:n,className:"w-full block h-0 aspect-h-1 aspect-w-1 rounded-md sm:rounded-xl overflow-hidden z-0",children:[e(h,{containerClassName:"absolute inset-0 ",className:"object-cover w-full h-full rounded-xl sm:rounded-3xl",src:(l==null?void 0:l.node.sourceUrl)||".",alt:i,srcSet:l==null?void 0:l.node.srcSet,imageSizes:"MEDIUM"}),e("div",{children:e(f,{className:"absolute bottom-2 left-2",postType:(m=r==null?void 0:r.edges[0])==null?void 0:m.node.slug,wrapSize:"w-8 h-8",iconSize:"w-4 h-4"})})]})})]})},H=({className:t=""})=>a("div",{className:`nc-Card13Skeleton relative flex justify-between ${t}`,"data-nc-id":"Card13Skeleton",children:[a("div",{className:"flex flex-col py-2 flex-grow",children:[e("h3",{className:"nc-card-title block w-full font-semibold text-base",children:e(d,{width:"90%"})}),e("span",{className:"hidden sm:block w-full my-3 text-neutral-500 dark:text-neutral-400 ",children:e(d,{width:"80%"})}),e("div",{className:"mt-auto ",children:e(d,{width:"30%"})})]}),e("div",{className:"block relative flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5",children:e(h,{containerClassName:"absolute inset-0 ",className:"object-cover w-full h-full rounded-xl sm:rounded-3xl",src:"."})})]});export{j as C,H as a,M as b,_ as c};
