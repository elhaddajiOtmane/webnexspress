import{g as y,h as I}from"./contants-3c5f400b.js";import{g as Y}from"./useQuery-2326dd90.js";import{u as f}from"./useLazyQuery-f7f1f4cb.js";function N({graphQLvariables:e,graphQLData:d,hasSSrInitData:t}){const R=t==null?void 0:t.hasSSrInitData;let u="";(e==null?void 0:e.queryString)==="GQL_QUERY_GET_USERS_BY_SPECIFIC"&&(u=y),(e==null?void 0:e.queryString)==="GQL_QUERY_GET_USERS_BY_FILTER"&&(u=I);const S=Y`
    ${u}
  `;let _,o,E,n=()=>{};const[T,G]=f(S,{notifyOnNetworkStatusChange:!0,variables:e==null?void 0:e.variables});n=T,_=G.data,o=G.loading,E=G.error;let s=(_==null?void 0:_.users.edges)||[];const c=o&&!s.length,m=!_&&!o&&!E;return R?(n=()=>{},s=t.initUserIDs.map((r,i)=>{var U;return{node:(U=window.ncmazCoreVariables)==null?void 0:U.ncmazCoreInitUsers[r]}})):n=T,{LISTS_DATA:s,IS_SKELETON:c,error:E,loading:o,funcGqlQueryGetUsers:n,DONOT_ANY_THING:m}}export{N as u};