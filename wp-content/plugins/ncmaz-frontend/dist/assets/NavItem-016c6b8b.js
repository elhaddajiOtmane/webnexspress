import{j as s,a as o}from"./main-01589982.js";import{t as c}from"./twFocusClass-d0735f61.js";const u=({containerClassName:a="",className:e="",children:t})=>s("nav",{className:`nc-Nav ${a}`,"data-nc-id":"Nav",children:s("ul",{className:`flex  ${e}`,children:t})}),x=({className:a="px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize",radius:e="rounded-full",children:t,onClick:r=()=>{},isActive:l=!1,renderX:n})=>o("li",{className:"nc-NavItem flex-shrink-0 relative","data-nc-id":"NavItem",children:[n&&n,s("button",{className:`block !leading-none font-medium ${a} ${e} ${l?"bg-secondary-900 text-secondary-50 ":"text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"} ${c()}`,onClick:()=>{r&&r()},children:t})]});export{u as N,x as a};
