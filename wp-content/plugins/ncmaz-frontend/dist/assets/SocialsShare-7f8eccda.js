import{j as r}from"./main-01589982.js";import{S as i}from"./SocialShareItem-24d6d915.js";const S=frontendObject.socialsShare.map(a=>({id:a,name:a,icon:""})),l=({className:a="grid gap-[6px]",href:e="#",size:o=24,image:s=""})=>r("div",{className:`nc-SocialsShare ${a}`,"data-nc-id":"SocialsShare",children:S.map(c=>r("div",{children:r(i,{item:c,href:e,className:"hover:opacity-70",size:o,image:s})},c.name))});export{l as default};
