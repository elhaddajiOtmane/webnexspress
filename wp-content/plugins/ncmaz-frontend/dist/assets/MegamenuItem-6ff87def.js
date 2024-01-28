import{r as n,c as D,j as r,a as c,N as $}from"./main-01589982.js";import{F}from"./contantsCommon-3b0e63b7.js";import{C as R,a as q}from"./Card18Skeleton-e7b244af.js";import{D as B}from"./DataStatementBlockV2-5007f6a0.js";import{u as Q}from"./useGqlQuerySection-f3204c22.js";import{b as G}from"./useQuery-2326dd90.js";import{u as z}from"./useLazyQuery-f7f1f4cb.js";import"./NcImage-befadaec.js";import"./getImageSizesBySizeName-22c25ac1.js";import"./PostTypeFeaturedIcon-f1f09999.js";import"./formatDate-dfe39bf7.js";import"./index-0c588460.js";import"./EmptyState-8d3ff74e.js";import"./useIntersectionObserver-8d200e88.js";const U=` edges {
  node {
    id
    link
    date
    featuredImage {
      node {
        ${F}
      } 
    }
    postFormats {
      edges {
        node {
          id
          name 
        } 
      } 
    }
    postId
    slug
    title 
  } 
}`,W=`
  query Megamenu_Filter(
    $field: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $categoryIn: [ID] = []
    $tagIn: [ID] = []
    $authorIn: [ID] = []
    $last: Int = null
    $first: Int = 10
    $before: String = null
    $after: String = null
  ) {
    posts(
      where: {
        orderby: { field: $field, order: $order }
        categoryIn: $categoryIn
        tagIn: $tagIn
        authorIn: $authorIn
      }
      last: $last
      first: $first
      before: $before
      after: $after
    ) {
     ${U}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor 
      } 
    }
  }
`;function H({title:l,titleId:o,...s},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":o},s),l?n.createElement("title",{id:o},l):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"}))}const K=n.forwardRef(H),V=K;function Y({title:l,titleId:o,...s},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":o},s),l?n.createElement("title",{id:o},l):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}))}const Z=n.forwardRef(Y),E=Z,fe=({domNode:l,menuItemData:o})=>{var x,N,I;const{ncmazMenuCustomFields:s}=o,[i,C]=n.useState((N=(x=s==null?void 0:s.taxonomies)==null?void 0:x[0])==null?void 0:N.categoryId),{taxonomies:p,numberOfPosts:m,order:J,orderBy:X,showTabFilter:g}=s;let k={},b=[];g?b=[i]:b=(p==null?void 0:p.map(e=>e.categoryId))||[],k={categoryIn:b,first:Number(m)};const S=G`
    ${W}
  `,[P,{loading:h,error:A,data:d,fetchMore:f}]=z(S,{notifyOnNetworkStatusChange:!0,variables:k}),{ref:O}=Q(P,999),a=(I=d==null?void 0:d.posts)==null?void 0:I.pageInfo,y=(d==null?void 0:d.posts.edges)||[],v=h,L=e=>{C(e.categoryId)},w=(e,{fetchMoreResult:t})=>{var u;return(u=t==null?void 0:t.posts)!=null&&u.edges.length?t:e},T=()=>{if(!(a!=null&&a.hasPreviousPage)&&!(a!=null&&a.hasNextPage))return null;let e="px-4 py-1.5 text-xs bg-white dark:bg-neutral-900 border border-neutral-200 hover:border-neutral-300 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center  -- disabled:opacity-70 disabled:text-gray-500  disabled:cursor-default disabled:hover:border-neutral-200 dark:disabled:hover:border-neutral-6000";return c("div",{className:"nc-NextPrev mt-6 relative flex items-center justify-center text-neutral-900 dark:text-neutral-300 space-x-2.5 ",children:[c("button",{className:e,disabled:!a.hasPreviousPage||h,onClick:()=>{f&&f({variables:{first:null,after:null,last:Number(m),before:a.startCursor||null},updateQuery:w})},children:[r(V,{className:"w-3.5 h-3.5"}),r("span",{className:"ml-1.5",children:$.prev})]}),c("button",{className:e,disabled:!a.hasNextPage||h,onClick:()=>{f&&f({variables:{first:Number(m),after:a.endCursor||null,last:null,before:null},updateQuery:w})},children:[r("span",{className:"mr-1.5",children:$.next}),r(E,{className:"w-3.5 h-3.5"})]})]})},j=()=>{const{taxonomies:e}=o.ncmazMenuCustomFields;return r("div",{className:"w-1/5 py-6 pr-4 flex-shrink-0",children:(e||[]).map(t=>{const u=t.categoryId===i;return c("div",{className:`group py-2.5 pl-8 flex items-center justify-between relative rounded-r-full cursor-pointer ${u?"bg-primary-50 dark:bg-neutral-800 text-primary-900 font-medium dark:text-primary-50":"hover:bg-neutral-100/80 dark:hover:bg-neutral-800/50"}`,onClick:()=>L(t),children:[r("span",{children:t.name}),r("a",{className:`pr-5 pl-2 ${u?"block":"hidden group-hover:block"}`,href:t.link,children:r(E,{className:"w-4 h-4"})})]},t.categoryId)})})},_=()=>r("div",{className:`flex-grow ${g?"border-l border-neutral-200 dark:border-neutral-800":""}`,children:c("div",{className:"p-6",children:[r(B,{className:"my-5",data:y,error:A,isSkeleton:v}),v||y.length?r("div",{className:`grid gap-6 ${g?"grid-cols-4":"grid-cols-5"}`,children:v?Array.from(Array(Number(m)||10).keys()).map((e,t)=>r(R,{},t)):y.map(e=>r(q,{imageSizes:"MEDIUM",post:e.node},e.node.id))}):null,T()]})}),M=()=>r("div",{ref:O,className:"nc-megamenu-item absolute top-full inset-x-0 ",children:c("div",{className:"w-full flex overflow-hidden rounded-xl shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 ",children:[g&&j(),_()]})});return D.createPortal(M(),l)};export{fe as default};
