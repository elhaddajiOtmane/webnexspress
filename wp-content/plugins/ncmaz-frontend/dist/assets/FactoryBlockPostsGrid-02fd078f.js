import{r as er,c as tr,a as L,j as a,N as T}from"./main-01589982.js";import{H as B}from"./Heading-8e8fa951.js";import{u as sr,H as cr}from"./GutenbergSections-ce9b098d.js";import{B as ir}from"./BackgroundSection-f1af2e57.js";import{C as dr,b as or,d as nr,f as mr,h as lr,j as ur,l as Cr,a as Sr,c as pr,e as fr,g as gr,i as kr,k as Pr,m as Nr}from"./Card7Skeleton-375650e1.js";import{C as br}from"./Card9-683ec8f1.js";import{C as hr,a as yr}from"./Card10Skeleton-c1662d20.js";import{C as Ir,a as Ar}from"./Card10V2Skeleton-4f0b9c0a.js";import{C as _r}from"./Card11-37890797.js";import{C as Lr,a as Tr}from"./Card15PodcastSkeleton-08de08b6.js";import{B as z}from"./ButtonPrimary-7b9ce8b4.js";import{D as Br}from"./DataStatementBlockV2-5007f6a0.js";import{C as zr}from"./Card9Skeleton-d94b033f.js";import{C as Gr}from"./Card11Skeleton-14ab7f45.js";import{u as vr}from"./useGqlQuerySection-f3204c22.js";import{C as Er,a as Hr}from"./Card2Skeleton-881d2b5b.js";import{C as wr}from"./Card6-91b25b63.js";import{C as Dr,a as jr}from"./Card8Skeleton-efc87d91.js";import{C as Fr,b as Mr,a as Qr,c as Vr}from"./Card13Skeleton-d2aa466b.js";import{C as Or,b as qr,a as $r,c as Zr}from"./Card17PodcastSkeleton-e6be3a38.js";import{a as Kr,C as Ur}from"./Card18Skeleton-e7b244af.js";import{C as Wr}from"./Card6Skeleton-4e59c3a1.js";import"./NextPrev-10599e1e.js";import"./twFocusClass-d0735f61.js";import"./ButtonSecondary-a2b42169.js";import"./Button-d1fff97b.js";import"./NavItem-016c6b8b.js";import"./contants-3c5f400b.js";import"./contantsCommon-3b0e63b7.js";import"./useQuery-2326dd90.js";import"./useLazyQuery-f7f1f4cb.js";import"./Avatar-e46ae567.js";import"./getImageSizesBySizeName-22c25ac1.js";import"./PostCardMeta-4fa2bae8.js";import"./formatDate-dfe39bf7.js";import"./NcImage-befadaec.js";import"./PostTypeFeaturedIcon-f1f09999.js";import"./index-0c588460.js";import"./CategoryBadgeList-87f3b9ef.js";import"./Badge-126d3422.js";import"./SocialsShare-7f8eccda.js";import"./SocialShareItem-24d6d915.js";import"./PostCardLikeAndComment-fcd151a8.js";import"./PostCardLikeAction-813d8440.js";import"./PostCardDropdownShare-48c067a7.js";import"./NcDropDown-b9381a6a.js";import"./menu-8d10a083.js";import"./use-owner-4bb5aead.js";import"./transition-c5ae4969.js";import"./checkPostStandHasFeaturedImage-07d23d31.js";import"./CardAuthor2-e5d1b032.js";import"./PostFeaturedMedia-db84e141.js";import"./useIntersectionObserver-8d200e88.js";import"./index-b8b43c8a.js";import"./ButtonPlayMusicRunningContainer-80762dbc.js";import"./LoadingVideo-66b8164f.js";import"./PostMoreActionDropdown-e7a59822.js";import"./ButtonPrimaryDanger-9c37c9e4.js";import"./NcModal-42d0aa76.js";import"./ButtonClose-46908ee4.js";import"./dialog-c077491e.js";import"./EmptyState-8d3ff74e.js";const te=({className:G="",domNode:v,apiSettings:o,sectionIndex:E})=>{var I;const{graphQLvariables:H,settings:p,graphQLData:w,hasSSrInitData:s}=o,[f,D]=er.useState(!1),{funcGqlQueryGetPosts:j,loading:g,IS_SKELETON:k,LISTS_POSTS:F,data:c,error:M,fetchMore:P,setTabActiveId:N,tabActiveId:i,funcGqlGetPostsForAllHasInitData:Q}=sr({graphQLData:w,graphQLvariables:H,hasSSrInitData:s});let b=null;b=vr(j,E,i).ref;const n=s==null?void 0:s.hasSSrInitData,V=(I=s==null?void 0:s.initPageInfo)==null?void 0:I.hasNextPage;let m=F;const{hasBackground:O,heading:l,subHeading:u,viewMoreHref:q,gridClass:$,gridClassCustom:h,showFilterTab:Z,blockLayoutStyle:K,enableLoadMoreButton:U,loadMoreButtonHref:C,filterDataBy:y,categories:d}=p,S=h||$,W=r=>{if(r===-1){N(r);return}r.id!==i&&N(r.id)},X=(r,{fetchMoreResult:e})=>{var t,A,_;return(t=e==null?void 0:e.posts)!=null&&t.edges.length?{...e,posts:{...e.posts,edges:[...(A=r==null?void 0:r.posts)==null?void 0:A.edges,...(_=e==null?void 0:e.posts)==null?void 0:_.edges]}}:r},Y=r=>{if(!P||y==="by_specific"||C)return;r.preventDefault();const e=m.map(t=>t.node.postId);if(n&&i===-1&&!f){Q({variables:{notIn:e}}),D(!0);return}P({variables:{notIn:e},updateQuery:X})},J=(r,e)=>{const t=S.includes("-col-3")||S.includes("-col-4")?"MEDIUM":void 0;switch(o.settings.postCardName){case"card1":return a(Cr,{post:r},r.id);case"card2":return a(Er,{imageSizes:t,post:r},r.id);case"card3":return a("div",{className:"w-full",children:a(ur,{post:r})},r.id);case"card4":return a(lr,{post:r,imageSizes:t},r.id);case"card5":return a(mr,{post:r,index:e+1},r.id);case"card6":return a(wr,{post:r},r.id);case"card7":return a(nr,{post:r,imageSizes:t},r.id);case"card8":return a(Dr,{hasExcerpt:!1,ratio:"pt-[75%] sm:pt-[100%]",post:r,imageSizes:t},r.id);case"card9":return a(br,{post:r,imageSizes:t},r.id);case"card10":return a(hr,{post:r,imageSizes:t},r.id);case"card10V2":return a(Ir,{post:r,imageSizes:t},r.id);case"card11":return a(_r,{post:r,imageSizes:t},r.id);case"card12":return a(Mr,{post:r,imageSizes:t},r.id);case"card13":return a(Fr,{post:r},r.id);case"card14":return a(or,{post:r,imageSizes:t},r.id);case"card15Podcast":return a(Lr,{post:r},r.id);case"card16Podcast":return a(qr,{post:r,imageSizes:t},r.id);case"card17Podcast":return a(Or,{post:r},r.id);case"card18":return a(Kr,{post:r,imageSizes:t},r.id);case"card19":return a(dr,{post:r,imageSizes:t},r.id);default:return null}},x=(r,e)=>{switch(o.settings.postCardName){case"card1":return a(Nr,{},e);case"card2":return a(Hr,{},e);case"card3":return a(Pr,{},e);case"card4":return a(kr,{},e);case"card5":return a(gr,{index:e+1},e);case"card6":return a(Wr,{},e);case"card7":return a(fr,{},e);case"card8":return a(jr,{ratio:"pt-[75%] sm:pt-[100%]"},e);case"card9":return a(zr,{},e);case"card10":return a(yr,{ratio:"aspect-w-1 aspect-h-1 "},e);case"card10V2":return a(Ar,{},e);case"card11":return a(Gr,{},e);case"card12":return a(Vr,{},e);case"card13":return a(Qr,{},e);case"card14":return a(pr,{},e);case"card15Podcast":return a(Tr,{},e);case"card16Podcast":return a(Zr,{},e);case"card17Podcast":return a($r,{},e);case"card18":return a(Ur,{},e);case"card19":return a(Sr,{},e);default:return null}},R=()=>K==="layout-1"?a(B,{desc:u,children:l}):a(B,{desc:u,isCenter:!0,children:l}),rr=()=>{var e,t;let r=!1;return i===-1?n&&!f?r=!!n&&!!V:r=g||!!((e=c==null?void 0:c.posts.pageInfo)!=null&&e.hasNextPage):r=!!((t=c==null?void 0:c.posts.pageInfo)!=null&&t.hasNextPage),U?C?a("div",{className:"flex mt-8 sm:mt-10 lg:mt-14 justify-center items-center",children:a(z,{href:C,children:T.showMeMore})}):y==="by_specific"||!r?null:a("div",{className:"flex mt-8 sm:mt-10 lg:mt-14 justify-center items-center",children:a(z,{onClick:Y,loading:g,children:T.showMeMore})}):null},ar=()=>{const r=O;return L("div",{className:`nc-FactoryBlockPostsGrid relative ${r?"py-16":""}  ${G}`,ref:b,children:[r&&a(ir,{}),L("div",{className:"relative",children:[Z&&(d!=null&&d.length)?a(cr,{tabActiveId:i,tabs:d,viewMoreHref:q,heading:l,subHeading:u,onClickTab:W}):R(),a("div",{className:`grid grid-cols-1 gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 ${S}`,children:k?Array.from(Array(Number(p.expectedNumberResults||8)||8).keys()).map(x):m.map((e,t)=>J(e.node,t))}),a(Br,{className:"my-5",data:m,error:M,isSkeleton:k}),rr()]})]})};return tr.createPortal(ar(),v)};export{te as default};