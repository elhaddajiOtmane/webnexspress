import{a as i,j as m}from"./main-01589982.js";import{a,C as e}from"./Card2Skeleton-881d2b5b.js";import{C as s}from"./Card6-91b25b63.js";import{C as d}from"./Card9-683ec8f1.js";import{C as c}from"./Card9Skeleton-d94b033f.js";import"./PostCardLikeAndComment-fcd151a8.js";import"./twFocusClass-d0735f61.js";import"./PostCardLikeAction-813d8440.js";import"./CardAuthor2-e5d1b032.js";import"./Avatar-e46ae567.js";import"./contants-3c5f400b.js";import"./contantsCommon-3b0e63b7.js";import"./getImageSizesBySizeName-22c25ac1.js";import"./formatDate-dfe39bf7.js";import"./CategoryBadgeList-87f3b9ef.js";import"./Badge-126d3422.js";import"./PostCardDropdownShare-48c067a7.js";import"./NcDropDown-b9381a6a.js";import"./menu-8d10a083.js";import"./use-owner-4bb5aead.js";import"./transition-c5ae4969.js";import"./SocialShareItem-24d6d915.js";import"./PostFeaturedMedia-db84e141.js";import"./NcImage-befadaec.js";import"./NextPrev-10599e1e.js";import"./PostTypeFeaturedIcon-f1f09999.js";import"./useIntersectionObserver-8d200e88.js";import"./index-b8b43c8a.js";import"./ButtonPlayMusicRunningContainer-80762dbc.js";import"./LoadingVideo-66b8164f.js";import"./checkPostStandHasFeaturedImage-07d23d31.js";import"./index-0c588460.js";import"./PostCardMeta-4fa2bae8.js";const T=({listPosts:o,isLoading:p})=>i("div",{className:"SectionMagazine3 ",children:[i("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7",children:[p?m(a,{}):o[0]?m(e,{size:"large",post:o[0].node}):null,m("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7",children:p?[1,1,1,1].map((t,r)=>m(c,{ratio:"aspect-w-5 aspect-h-4 sm:aspect-w-14 sm:aspect-h-15"},r)):o.filter((t,r)=>r<5&&r>=1).map((t,r)=>m(d,{ratio:"aspect-w-5 aspect-h-4 sm:aspect-w-14 sm:aspect-h-15",titleClassName:"block text-base font-semibold text-white ",post:t.node},r))})]}),!p&&o[5]&&m("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 mt-5 md:mt-7 ",children:o.filter((t,r)=>r>=5).map((t,r)=>m(s,{post:t.node},r))})]});export{T as default};