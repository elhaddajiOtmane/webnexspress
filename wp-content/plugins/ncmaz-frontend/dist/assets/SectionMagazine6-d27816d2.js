import{j as e,a as l,F as N}from"./main-01589982.js";import{A as v}from"./Avatar-e46ae567.js";import{N as g}from"./NcImage-befadaec.js";import{P as w}from"./PostCardMeta-4fa2bae8.js";import{S as n}from"./index-0c588460.js";import{n as y}from"./formatDate-dfe39bf7.js";import"./contants-3c5f400b.js";import"./contantsCommon-3b0e63b7.js";import"./getImageSizesBySizeName-22c25ac1.js";const I=({listPosts:x,isLoading:o})=>{const b=(t,i,s)=>{var c,h,u,m,r,d,p;if(!t)return null;const{node:a}=t;return l("a",{href:frontendObject.homeURL+a.uri,className:"nc-CardAuthor2 relative inline-flex items-center ","data-nc-id":"CardAuthor2",children:[e(v,{sizeClass:"h-10 w-10 text-base",containerClassName:"flex-shrink-0 mr-3 ring-1 ring-white/50",radius:"rounded-full",imgUrl:((h=(c=a.ncUserMeta)==null?void 0:c.featuredImage)==null?void 0:h.sourceUrl)||((u=a.avatar)==null?void 0:u.url),srcSet:(r=(m=a.ncUserMeta)==null?void 0:m.featuredImage)!=null&&r.sourceUrl?(p=(d=a.ncUserMeta)==null?void 0:d.featuredImage)==null?void 0:p.srcSet:void 0,userName:a.username}),l("div",{className:"overflow-hidden",children:[e("h4",{className:"text-sm text-neutral-200 font-medium truncate",children:a==null?void 0:a.name}),l("span",{className:"flex items-center mt-1 text-xs text-neutral-300 truncate",children:[e("span",{children:y(i||"")}),s&&l(N,{children:[e("span",{className:"hidden lg:inline mx-1 transition-opacity ",children:"·"}),e("span",{className:"hidden lg:inline transition-opacity truncate ",dangerouslySetInnerHTML:{__html:s}})]})]})]})]})},f=()=>{const{featuredImage:t,author:i,title:s,date:a,excerpt:c,link:h,ncPostMetaData:u}=x[0].node,m=x.filter((r,d)=>d>0);return l("main",{className:"SectionMagazine6 relative",children:[l("div",{className:"aspect-w-9 aspect-h-7 md:aspect-h-5 rounded-3xl lg:rounded-[40px] overflow-hidden",children:[e(g,{containerClassName:"absolute inset-0",src:o?".":(t==null?void 0:t.node.sourceUrl)||".",srcSet:t==null?void 0:t.node.srcSet,imageSizes:"_1536X1536",loading:"eager",alt:s}),e("div",{children:e("span",{className:"absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80"})}),l("div",{className:"group dark absolute md:w-1/2 lg:w-2/3 max-w-2xl flex flex-col justify-end p-5 lg:p-14",children:[l("div",{className:"",children:[e("h3",{className:"nc-card-title text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white",children:o?e(n,{}):e("a",{href:h,className:"line-clamp-2",children:s})}),o?e("div",{children:e(n,{})}):c?e("span",{className:"hidden lg:block text-base text-neutral-200 mt-5",children:e("span",{className:"line-clamp-2",dangerouslySetInnerHTML:{__html:c}})}):null]}),e("div",{className:"mt-5 sm:mt-7 ",children:b(i,a,u.readingTimeShortcode)})]})]}),m.length?e("div",{className:"md:absolute mt-5 md:mt-0 h-auto md:right-3 md:top-3 md:bottom-3 md:w-1/2 lg:w-1/3 p-5 lg:p-8 bg-neutral-100 md:bg-white md:dark:bg-neutral-900 dark:bg-neutral-800 xl:bg-opacity-80 xl:dark:bg-opacity-80 xl:backdrop-filter xl:backdrop-blur-xl rounded-3xl lg:rounded-[34px] overflow-hidden",children:e("div",{className:"flow-root md:h-full w-full md:overflow-y-auto hiddenScrollbar",children:e("div",{className:"-my-5 md:-my-7 divide-y divide-neutral-200 dark:divide-neutral-700",children:m.map((r,d)=>l("div",{className:"block py-5 lg:py-7",children:[e("h4",{className:"nc-card-title text-base font-semibold",children:e("a",{title:r.node.title,href:r.node.link,className:"line-clamp-2",children:r.node.title})}),e(w,{className:"mt-4",meta:r.node})]},d))})})}):null]})};return e("div",{children:o?(()=>l("main",{className:"relative",children:[l("div",{className:"aspect-w-9 aspect-h-9 md:aspect-h-5 rounded-3xl lg:rounded-[40px] overflow-hidden",children:[e(g,{containerClassName:"absolute inset-0",src:"."}),e("div",{children:e("span",{className:"absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black"})}),l("div",{className:"group dark absolute md:w-1/2 lg:w-2/3 max-w-2xl flex flex-col justify-end p-5 lg:p-14",children:[e("div",{className:"",children:e("h4",{className:"nc-card-title text-2xl lg:text-3xl xl:text-4xl font-semibold text-neutral-700 opacity-50",children:e(n,{})})}),e("div",{className:"mt-7 opacity-50",children:e(n,{width:"80%"})})]})]}),e("div",{className:"md:absolute mt-5 md:mt-0 h-96 md:h-auto md:right-3 md:top-3 md:bottom-3 md:w-1/2 lg:w-1/3 p-5 lg:p-8 bg-neutral-100 md:bg-white md:dark:bg-neutral-900 dark:bg-neutral-800 xl:bg-opacity-80 xl:dark:bg-opacity-80 xl:backdrop-filter xl:backdrop-blur-xl rounded-3xl lg:rounded-[34px] overflow-hidden",children:e("div",{className:"flow-root h-full w-full overflow-y-auto hiddenScrollbar",children:e("div",{className:"-my-5 md:-my-7 divide-y divide-neutral-200 dark:divide-neutral-700",children:[1,1,1].map((t,i)=>l("div",{className:"block py-5 lg:py-7",children:[e("h4",{className:"nc-card-title text-base font-semibold mb-2",children:e(n,{width:"90%"})}),e(n,{width:"60%"})]},i))})})})]}))():x[0]?f():null})};export{I as default};