import{j as a}from"./main-01589982.js";import{B as l}from"./Badge-126d3422.js";const g=({className:n="",itemClass:d="",categories:c,numberCategoriesWillShow:r=3})=>a("div",{className:"nc-CategoryBadgeList flow-root ","data-nc-id":"CategoryBadgeList",children:a("div",{className:`flex flex-wrap space-x-2 -my-1 ${n}`,children:(c||{edges:[]}).edges.map((e,o)=>{var s,t;return r!==-1&&o>=r?null:a(l,{className:`relative my-1 text-[10px] sm:text-xs ${d}`,name:e.node.name,href:e.node.link,color:(t=(s=e.node)==null?void 0:s.ncTaxonomyMeta)==null?void 0:t.color},o)})})});export{g as C};