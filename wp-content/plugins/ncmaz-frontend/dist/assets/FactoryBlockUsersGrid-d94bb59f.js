import{a as h,j as r,c as x}from"./main-01589982.js";import{B as L}from"./BackgroundSection-f1af2e57.js";import{C as f,a as v}from"./CardAuthorBoxSkeleton-622ee6c7.js";import{a as b,C}from"./CardAuthorBox2Skeleton-d7b48234.js";import{H as D}from"./Heading-8e8fa951.js";import{D as Q}from"./DataStatementBlockV2-5007f6a0.js";import{u as U}from"./useGqlQuerySection-f3204c22.js";import{u as $}from"./useGutenbergSectionWithGQLGetUsers-3f6d48f3.js";import"./Avatar-e46ae567.js";import"./contants-3c5f400b.js";import"./contantsCommon-3b0e63b7.js";import"./getImageSizesBySizeName-22c25ac1.js";import"./index-0c588460.js";import"./NcImage-befadaec.js";import"./NextPrev-10599e1e.js";import"./twFocusClass-d0735f61.js";import"./EmptyState-8d3ff74e.js";import"./useIntersectionObserver-8d200e88.js";import"./useQuery-2326dd90.js";import"./useLazyQuery-f7f1f4cb.js";const j=({className:n="",authorNodes:c,authorNodesLoading:d=[1,1,1,1,1,1,1,1,1,1,1,1],heading:m,subHeading:u,authorCardName:e,blockLayoutStyle:o,gridClass:l,isLoading:p})=>{const s=(a,t)=>{switch(e){case"card1":return r(f,{author:a.node},t);case"card2":return r(b,{author:a.node},t);default:return r(f,{author:a.node},t)}},i=(a,t)=>{switch(e){case"card1":return r(v,{},t);case"card2":return r(C,{},t);default:return r(C,{},t)}};return h("div",{className:`nc-SectionGridAuthorBox relative ${n}`,"data-nc-id":"SectionGridAuthorBox",children:[r(D,{desc:u,isCenter:o==="layout-1",children:m}),r("div",{className:`grid gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 ${l}`,children:p?d.map(i):c.map(s)})]})},rr=({className:n="",domNode:c,apiSettings:d,sectionIndex:m})=>{const{graphQLvariables:u,graphQLData:e,settings:o,hasSSrInitData:l}=d,{funcGqlQueryGetUsers:p,IS_SKELETON:s,LISTS_DATA:i,error:a}=$({graphQLvariables:u,graphQLData:e,hasSSrInitData:l});let t=null;t=U(p,m).ref;const y=()=>{const{hasBackground:g,subHeading:B,heading:A,gridClass:G,gridClassCustom:S,userCardName:N,blockLayoutStyle:k}=o;return h("div",{className:`nc-FactoryBlockUsersGrid relative ${g?"py-14 sm:py-16":""}  ${n}`,ref:t,children:[g&&r(L,{}),h("div",{className:"relative",children:[r(j,{authorCardName:N,blockLayoutStyle:k,authorNodes:i,authorNodesLoading:Array.from(Array(Number(o.expectedNumberResults||8)||8).keys()),heading:A,subHeading:B,gridClass:S||G,isLoading:s}),r(Q,{className:"my-5",data:i,error:a,isSkeleton:s})]})]})};return x.createPortal(y(),c)};export{rr as default};
