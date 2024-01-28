import{r as P,c as O,a as N,j as a}from"./main-01589982.js";import{H as w}from"./Heading-8e8fa951.js";import{u as j,H as Q}from"./GutenbergSections-ce9b098d.js";import{B as R}from"./BackgroundSection-f1af2e57.js";import{G as $}from"./glide.esm-676e99f8.js";import{C as q,b as K,d as U,f as W,h as Y,j as Z,l as J,a as X,c as x,e as rr,g as ar,i as er,k as tr,m as ir}from"./Card7Skeleton-375650e1.js";import{C as sr}from"./Card9-683ec8f1.js";import{C as cr,a as dr}from"./Card10Skeleton-c1662d20.js";import{C as or,a as nr}from"./Card10V2Skeleton-4f0b9c0a.js";import{C as mr}from"./Card11-37890797.js";import{N as lr}from"./NextPrev-10599e1e.js";import{D as ur}from"./DataStatementBlockV2-5007f6a0.js";import{C as Cr}from"./Card9Skeleton-d94b033f.js";import{C as pr}from"./Card11Skeleton-14ab7f45.js";import{C as Sr,a as fr}from"./Card15PodcastSkeleton-08de08b6.js";import{u as gr}from"./useGqlQuerySection-f3204c22.js";import{C as hr,a as kr}from"./Card2Skeleton-881d2b5b.js";import{C as br}from"./Card6-91b25b63.js";import{C as Pr,a as Nr}from"./Card8Skeleton-efc87d91.js";import{C as wr,b as yr,a as vr,c as _r}from"./Card13Skeleton-d2aa466b.js";import{C as zr,b as Tr,a as Vr,c as Gr}from"./Card17PodcastSkeleton-e6be3a38.js";import{a as Hr,C as Ar}from"./Card18Skeleton-e7b244af.js";import{C as Dr}from"./Card6Skeleton-4e59c3a1.js";import"./ButtonSecondary-a2b42169.js";import"./Button-d1fff97b.js";import"./twFocusClass-d0735f61.js";import"./NavItem-016c6b8b.js";import"./contants-3c5f400b.js";import"./contantsCommon-3b0e63b7.js";import"./useQuery-2326dd90.js";import"./useLazyQuery-f7f1f4cb.js";import"./Avatar-e46ae567.js";import"./getImageSizesBySizeName-22c25ac1.js";import"./PostCardMeta-4fa2bae8.js";import"./formatDate-dfe39bf7.js";import"./NcImage-befadaec.js";import"./PostTypeFeaturedIcon-f1f09999.js";import"./index-0c588460.js";import"./CategoryBadgeList-87f3b9ef.js";import"./Badge-126d3422.js";import"./SocialsShare-7f8eccda.js";import"./SocialShareItem-24d6d915.js";import"./PostCardLikeAndComment-fcd151a8.js";import"./PostCardLikeAction-813d8440.js";import"./PostCardDropdownShare-48c067a7.js";import"./NcDropDown-b9381a6a.js";import"./menu-8d10a083.js";import"./use-owner-4bb5aead.js";import"./transition-c5ae4969.js";import"./checkPostStandHasFeaturedImage-07d23d31.js";import"./CardAuthor2-e5d1b032.js";import"./PostFeaturedMedia-db84e141.js";import"./useIntersectionObserver-8d200e88.js";import"./index-b8b43c8a.js";import"./ButtonPlayMusicRunningContainer-80762dbc.js";import"./LoadingVideo-66b8164f.js";import"./PostMoreActionDropdown-e7a59822.js";import"./ButtonPrimaryDanger-9c37c9e4.js";import"./NcModal-42d0aa76.js";import"./ButtonClose-46908ee4.js";import"./dialog-c077491e.js";import"./ButtonPrimary-7b9ce8b4.js";import"./EmptyState-8d3ff74e.js";const Ka=({className:y="",domNode:v,apiSettings:d,sectionIndex:_})=>{var g,h;const o=P.useRef(null),{graphQLvariables:z,settings:t,graphQLData:T,hasSSrInitData:V}=d,{funcGqlQueryGetPosts:G,loading:Ir,IS_SKELETON:n,LISTS_POSTS:l,DONOT_ANY_THING:p,data:Er,error:H,fetchMore:Lr,setTabActiveId:S,tabActiveId:u}=j({graphQLData:T,graphQLvariables:z,hasSSrInitData:V});let f=null;f=gr(G,_,u).ref;const A=r=>{if(r===-1){S(r);return}r.id!==u&&S(r.id)},C=t.blockLayoutStyle==="layout-2"||t.showFilterTab&&!!((g=t==null?void 0:t.categories)!=null&&g.length),s=t.itemPerView||5,D={direction:((h=document.querySelector("html"))==null?void 0:h.getAttribute("dir"))==="rtl"?"rtl":"ltr",perView:s,startAt:n||p?0:t.sliderStartAt,hoverpause:t.sliderHoverpause,animationDuration:t.sliderAnimationDuration||void 0,rewind:t.sliderRewind||!0,autoplay:n||p?!1:t.sliderAutoplayTime||!1,gap:32,bound:!0,breakpoints:{1440:{gap:24},1280:{perView:s-1,gap:24},1023:{perView:s-2||1.2,gap:24},767:{perView:s-2||1.2,gap:20},639:{perView:1.2,gap:20}}};P.useEffect(()=>{if(!o.current)return()=>{};const r=new $(o.current,D);return r.mount(),()=>{r.destroy()}},[l,o,t]);const I=(r,i)=>{const e=s>=3?"MEDIUM":void 0;switch(d.settings.postCardName){case"card1":return a(J,{post:r},r.id);case"card2":return a(hr,{imageSizes:e,post:r},r.id);case"card3":return a("div",{className:"w-full h-full",children:a(Z,{post:r})},r.id);case"card4":return a(Y,{post:r,imageSizes:e},r.id);case"card5":return a(W,{post:r,index:i+1},r.id);case"card6":return a(br,{post:r},r.id);case"card7":return a(U,{post:r,imageSizes:e},r.id);case"card8":return a(Pr,{hasExcerpt:!1,ratio:"pt-[100%]",post:r,imageSizes:e},r.id);case"card9":return a(sr,{post:r,imageSizes:e},r.id);case"card10":return a(cr,{ratio:"aspect-w-1 aspect-h-1 ",post:r,imageSizes:e},r.id);case"card10V2":return a(or,{post:r,imageSizes:e},r.id);case"card11":return a(mr,{post:r,imageSizes:e},r.id);case"card12":return a(yr,{post:r,imageSizes:e},r.id);case"card13":return a(wr,{post:r},r.id);case"card14":return a(K,{post:r,imageSizes:e},r.id);case"card15Podcast":return a(Sr,{post:r},r.id);case"card16Podcast":return a(Tr,{post:r,imageSizes:e},r.id);case"card17Podcast":return a(zr,{post:r},r.id);case"card18":return a(Hr,{post:r,imageSizes:e},r.id);case"card19":return a(q,{post:r,imageSizes:e},r.id);default:return null}},E=r=>{switch(d.settings.postCardName){case"card1":return a(ir,{},r);case"card2":return a(kr,{},r);case"card3":return a(tr,{},r);case"card4":return a(er,{},r);case"card5":return a(ar,{index:r+1},r);case"card6":return a(Dr,{},r);case"card7":return a(rr,{},r);case"card8":return a(Nr,{ratio:"pt-[100%] "},r);case"card9":return a(Cr,{},r);case"card10":return a(dr,{ratio:"aspect-w-1 aspect-h-1 "},r);case"card10V2":return a(nr,{},r);case"card11":return a(pr,{},r);case"card12":return a(_r,{},r);case"card13":return a(vr,{},r);case"card14":return a(x,{},r);case"card15Podcast":return a(fr,{},r);case"card16Podcast":return a(Gr,{},r);case"card17Podcast":return a(Vr,{},r);case"card18":return a(Ar,{},r);case"card19":return a(X,{},r);default:return null}},L=()=>{const{heading:r,subHeading:i,blockLayoutStyle:e}=d.settings;return e==="layout-1"?a(w,{desc:i,hasNextPrev:!0,children:r}):a(w,{desc:i,isCenter:!0,children:r})},B=()=>{const{hasBackground:r,subHeading:i,heading:e,showFilterTab:F,categories:m,viewMoreHref:M}=t,k=r;return N("div",{className:`nc-FactoryBlockPostsSlider relative  ${k?"py-14 sm:py-16":""}  ${y}`,ref:f,children:[k&&a(R,{}),N("div",{className:"relative ",ref:o,children:[F&&(m!=null&&m.length)?a(Q,{tabActiveId:u,tabs:m,viewMoreHref:M,heading:e,subHeading:i,onClickTab:A}):L(),a("div",{className:"glide__track","data-glide-el":"track",children:a("ul",{className:"glide__slides",children:n?[1,1,1,1,1,1,1,1].map((b,c)=>a("li",{className:`glide__slide ${C?"sm:pb-10 xl:pb-12":""}`,children:E(c)},c)):l.map((b,c)=>a("li",{className:`glide__slide !h-auto ${C?"sm:pb-10 xl:pb-12":""}`,children:I(b.node,c)},c))})}),a(ur,{className:"my-5",data:l,error:H,isSkeleton:n}),C&&a(lr,{btnClassName:"w-12 h-12",containerClassName:"hidden sm:flex justify-center"})]})]})};return O.createPortal(B(),v)};export{Ka as default};