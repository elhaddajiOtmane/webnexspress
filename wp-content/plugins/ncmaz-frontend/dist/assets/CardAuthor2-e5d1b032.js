import{a as r,j as t,F as f}from"./main-01589982.js";import{A as p}from"./Avatar-e46ae567.js";import{n as v}from"./formatDate-dfe39bf7.js";const U=({className:h="overflow-hidden",author:a,readingTimeShortcode:n="",date:x,hoverReadingTime:s=!0})=>{var i,l,c,o,m,d,u;if(!a)return null;const{node:e}=a;return r("a",{href:frontendObject.homeURL+e.uri,className:`nc-CardAuthor2 relative inline-flex items-center ${h}`,"data-nc-id":"CardAuthor2",children:[t(p,{sizeClass:"h-8 w-8 sm:h-9 sm:w-9 text-base",containerClassName:"flex-shrink-0 mr-3",radius:"rounded-full",imgUrl:((l=(i=e.ncUserMeta)==null?void 0:i.featuredImage)==null?void 0:l.sourceUrl)||((c=e.avatar)==null?void 0:c.url),srcSet:(m=(o=e.ncUserMeta)==null?void 0:o.featuredImage)!=null&&m.sourceUrl?(u=(d=e.ncUserMeta)==null?void 0:d.featuredImage)==null?void 0:u.srcSet:void 0,userName:e.username}),r("div",{className:"overflow-hidden",children:[t("h4",{className:"text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium truncate",children:e==null?void 0:e.name}),r("span",{className:"flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400 truncate",children:[t("span",{children:v(x||"")}),n&&r(f,{children:[t("span",{className:`hidden lg:inline mx-1 transition-opacity ${s?"opacity-0 group-hover:opacity-100":""}`,children:"·"}),t("span",{className:`hidden lg:inline transition-opacity truncate ${s?"opacity-0 group-hover:opacity-100":""}`,dangerouslySetInnerHTML:{__html:n}})]})]})]})]})};export{U as C};
