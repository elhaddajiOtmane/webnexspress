import{r as E,a,j as e}from"./main-01589982.js";import{a as V,C as T}from"./Card10Skeleton-c1662d20.js";import{N as s}from"./NcImage-befadaec.js";import{C as G}from"./CategoryBadgeList-87f3b9ef.js";import{g as _,P as H}from"./PostFeaturedMedia-db84e141.js";import{C as F}from"./CardAuthor2-e5d1b032.js";import $ from"./PostCardDropdownShare-48c067a7.js";import{S as v}from"./index-0c588460.js";import"./Avatar-e46ae567.js";import"./contants-3c5f400b.js";import"./contantsCommon-3b0e63b7.js";import"./getImageSizesBySizeName-22c25ac1.js";import"./formatDate-dfe39bf7.js";import"./PostCardLikeAction-813d8440.js";import"./Badge-126d3422.js";import"./NextPrev-10599e1e.js";import"./twFocusClass-d0735f61.js";import"./PostTypeFeaturedIcon-f1f09999.js";import"./useIntersectionObserver-8d200e88.js";import"./index-b8b43c8a.js";import"./ButtonPlayMusicRunningContainer-80762dbc.js";import"./LoadingVideo-66b8164f.js";import"./NcDropDown-b9381a6a.js";import"./menu-8d10a083.js";import"./use-owner-4bb5aead.js";import"./transition-c5ae4969.js";import"./SocialShareItem-24d6d915.js";const b=({className:l="h-full",post:t,galleryType:c=1})=>{var S;const{title:o,link:N,categories:C,postFormats:h,ncmazGalleryImgs:y,author:M,date:k,ncPostMetaData:j}=t,r=_(y),[U,x]=E.useState(!1),I=()=>{var i,n,d,m,u,p,g,f;return r?a("div",{className:"w-full h-full grid grid-cols-1 grid-rows-2 gap-2",children:[a("div",{className:"grid grid-cols-3 gap-2 ",children:[e(s,{containerClassName:"relative col-span-2",className:"absolute inset-0 object-cover w-full h-full",src:(i=r[0])==null?void 0:i.sourceUrl,srcSet:(n=r[0])==null?void 0:n.srcSet}),e(s,{containerClassName:"relative",className:"absolute inset-0 object-cover w-full h-full",src:(d=r[1])==null?void 0:d.sourceUrl,srcSet:(m=r[1])==null?void 0:m.srcSet,imageSizes:"MEDIUM"})]}),a("div",{className:"grid grid-cols-3 gap-2 ",children:[e(s,{containerClassName:"relative",className:"absolute inset-0 object-cover w-full h-full",src:(u=r[2])==null?void 0:u.sourceUrl,srcSet:(p=r[2])==null?void 0:p.srcSet,imageSizes:"MEDIUM"}),e(s,{containerClassName:"relative col-span-2",className:"absolute inset-0 object-cover w-full h-full",src:(g=r[3])==null?void 0:g.sourceUrl,srcSet:(f=r[3])==null?void 0:f.srcSet})]})]}):null},z=()=>{var i,n,d,m,u,p,g,f;return r?a("div",{className:"w-full h-full grid grid-cols-3 gap-2",children:[e("div",{className:"grid ",children:e(s,{containerClassName:"relative",className:"absolute inset-0 object-cover w-full h-full",src:(i=r[0])==null?void 0:i.sourceUrl,srcSet:(n=r[0])==null?void 0:n.srcSet})}),a("div",{className:"grid grid-rows-2 gap-2",children:[e(s,{containerClassName:"relative",className:"absolute inset-0 object-cover w-full h-full",src:(d=r[1])==null?void 0:d.sourceUrl,srcSet:(m=r[1])==null?void 0:m.srcSet,imageSizes:"MEDIUM"}),e(s,{containerClassName:"relative",className:"absolute inset-0 object-cover w-full h-full",src:(u=r[2])==null?void 0:u.sourceUrl,srcSet:(p=r[2])==null?void 0:p.srcSet,imageSizes:"MEDIUM"})]}),e("div",{className:"grid ",children:e(s,{containerClassName:"relative",className:"absolute inset-0 object-cover w-full h-full",src:(g=r[3])==null?void 0:g.sourceUrl,srcSet:(f=r[3])==null?void 0:f.srcSet})})]}):null},D=()=>{var i;return((i=h==null?void 0:h.edges[0])==null?void 0:i.node.slug)!=="post-format-gallery"||!(r!=null&&r.length)?e("div",{children:e(H,{post:t,isHover:U})}):e("div",{children:c===1?z():I()})};return a("div",{className:`nc-Card10V3 group relative flex flex-col ${l}`,"data-nc-id":"Card10V3",onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[a("div",{className:"block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 overflow-hidden z-0",children:[D(),e("a",{href:N,className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"})]}),a("div",{className:"absolute top-3 inset-x-3 flex justify-between items-start space-x-4",children:[e(G,{categories:C}),e($,{panelMenusClass:"w-52 right-0 top-0 origin-top-right",href:t.link,image:(S=t.featuredImage)==null?void 0:S.node.sourceUrl})]}),a("div",{className:"space-y-2.5 mt-4 px-4 flex flex-col",children:[e("h3",{className:"nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 ",children:e("a",{className:"line-clamp-2",href:N,title:o,dangerouslySetInnerHTML:{__html:o||""}})}),e(F,{className:"mt-3",author:M,hoverReadingTime:!1,date:k,readingTimeShortcode:j.readingTimeShortcode})]})]})},w=({className:l="h-full"})=>a("div",{className:`nc-Card10V3Skeleton group relative flex flex-col ${l}`,"data-nc-id":"Card10V3Skeleton",children:[e("div",{className:"block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-16 sm:aspect-h-9 overflow-hidden",children:e(s,{src:"."})}),e("div",{className:"absolute top-3 inset-x-3 flex justify-between items-start space-x-4",children:e(v,{width:"30%"})}),a("div",{className:"space-y-2.5 mt-4 px-4",children:[e("h3",{className:"nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 ",children:e(v,{width:"80%"})}),e(v,{width:"40%"}),e("div",{className:"opacity-0",children:"aa"})]})]}),pe=({listPosts:l,isLoading:t})=>a("div",{className:"SectionMagazine7 grid grid-cols-1 gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8",children:[a("div",{className:"grid gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 grid-cols-1 lg:grid-cols-2",children:[t?e(w,{}):l[0]?e(b,{post:l[0].node}):null,t?e(w,{}):l[1]?e(b,{galleryType:2,post:l[1].node}):null]}),e("div",{className:"grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 mt-3",children:t?[1,1,1,1].map((c,o)=>e(V,{},o)):l.filter((c,o)=>o>1).map(c=>e(T,{post:c.node},c.node.id))})]});export{pe as default};
