import{r as e,a as i,j as c}from"./main-01589982.js";function m({title:o,titleId:t,...r},a){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),o?e.createElement("title",{id:t},o):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"}))}const u=e.forwardRef(m),h=u;function k({title:o,titleId:t,...r},a){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),o?e.createElement("title",{id:t},o):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"}))}const f=e.forwardRef(k),g=f,b=({className:o="w-12 h-12"})=>{const[t,r]=e.useState(localStorage.theme==="dark"),a=document.documentElement;return e.useEffect(()=>{localStorage.theme==="dark"?a.classList.contains("dark")||a.classList.add("dark"):a.classList.contains("dark")&&a.classList.remove("dark")},[t]),e.useEffect(()=>{const n=document.getElementById("dialog-overlay-site-navigation-mobile"),l=document.getElementById("btn-close-modal-mobile-sidebar-menu"),s=document.querySelectorAll(".btn-toogle-mobile-sidebar-menu");s==null||s.forEach(d=>{d.addEventListener("click",()=>{r(localStorage.theme==="dark")})}),n==null||n.addEventListener("click",()=>r(localStorage.theme==="dark")),l==null||l.addEventListener("click",()=>r(localStorage.theme==="dark"))},[]),i("button",{onClick:()=>{t?localStorage.theme="light":localStorage.theme="dark",r(!t)},className:`text-2xl md:text-3xl rounded-full text-neutral-700 dark:text-neutral-300 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ${o}`,children:[c("span",{className:"sr-only",children:"Enable dark mode"}),t?c(h,{className:"w-6 h-6 sm:w-7 sm:h-7","aria-hidden":"true"}):c(g,{className:"w-6 h-6 sm:w-7 sm:h-7","aria-hidden":"true"})]})};export{b as default};
