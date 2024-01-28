import{j as t,a as m,N as r,R as n,r as b,z as fa,a5 as aa,B as Da}from"./main-01589982.js";import{B as Ta}from"./ButtonPrimary-7b9ce8b4.js";import{h as ea,T as _a,P as xa,C as Ua,a as ha,b as Sa}from"./CreateNewPostEditor-07d2ea9b.js";import{B as ta}from"./ButtonSecondary-a2b42169.js";import{u as $a,L as Pa,I as Ca}from"./Textarea-4502000e.js";import{B as Fa}from"./ButtonPrimaryDanger-9c37c9e4.js";import{N as Aa}from"./NcModal-42d0aa76.js";import{b as va}from"./useQuery-2326dd90.js";import"./Button-d1fff97b.js";import"./twFocusClass-d0735f61.js";import"./CircleLoading-5a5ec4b1.js";import"./useLazyQuery-f7f1f4cb.js";import"./DataStatementBlockV2-5007f6a0.js";import"./EmptyState-8d3ff74e.js";import"./queryGraphql-58383481.js";import"./contants-3c5f400b.js";import"./contantsCommon-3b0e63b7.js";import"./NcImage-befadaec.js";import"./getImageSizesBySizeName-22c25ac1.js";import"./index-0c588460.js";import"./Input-8cf5b968.js";import"./use-owner-4bb5aead.js";import"./menu-8d10a083.js";import"./dialog-c077491e.js";import"./useWindowSize-e7f502a5.js";import"./transition-c5ae4969.js";import"./ButtonClose-46908ee4.js";const wa=({show:a,onCloseModal:i,onSubmit:o})=>{const c=()=>{o()};return t(Aa,{renderTrigger:()=>null,isOpenProp:a,renderContent:()=>m("div",{children:[t("h3",{className:"text-lg font-semibold text-neutral-900 dark:text-neutral-200",children:r["Draft this post"]}),t("span",{className:"text-sm",children:r["Post will be changed to draft. You can publish it later."]}),m("div",{className:"mt-4 space-x-3",children:[t(Fa,{onClick:c,type:"submit",children:r["Draft this post"]}),t(ta,{type:"button",onClick:i,children:r.Cancel})]})]}),onCloseModal:i,contentExtraClass:"max-w-screen-sm",modalTitle:""})},ie=({postNode:a})=>{var _,x,U,h,S,$,P,C,F,A,v,w,k,E,j,M,O,B,L,V,H,R,q,Y,Z,J,K,Q,W,X,N;const[i,o]=n.useState(!1),[c,p]=n.useState(a.title),[y,la]=n.useState(a.content),[d,sa]=n.useState({sourceUrl:((_=a.featuredImage)==null?void 0:_.node.sourceUrl)||"",id:((x=a.featuredImage)==null?void 0:x.node.databaseId)||"",altText:((U=a.featuredImage)==null?void 0:U.node.altText)||""}),[z,ra]=n.useState(((h=a.tags)==null?void 0:h.edges.map(e=>e.node))||[]),[G,na]=n.useState(((S=a.categories)==null?void 0:S.edges.map(e=>e.node))||[]),[f,ma]=n.useState({audioUrl:a.ncmazAudioUrl.audioUrl||"",videoUrl:a.ncmazVideoUrl.videoUrl||"",isAllowComments:a.commentStatus==="open",excerptText:a.excerpt||"",postFormatsSelected:((P=($=a.postFormats)==null?void 0:$.edges[0])==null?void 0:P.node.slug)||"Standard",objGalleryImgs:{1:{sourceUrl:((C=a.ncmazGalleryImgs.image1)==null?void 0:C.sourceUrl)||"",id:((F=a.ncmazGalleryImgs.image1)==null?void 0:F.databaseId)||"",altText:((A=a.ncmazGalleryImgs.image1)==null?void 0:A.altText)||""},2:{sourceUrl:((v=a.ncmazGalleryImgs.image2)==null?void 0:v.sourceUrl)||"",id:((w=a.ncmazGalleryImgs.image2)==null?void 0:w.databaseId)||"",altText:((k=a.ncmazGalleryImgs.image2)==null?void 0:k.altText)||""},3:{sourceUrl:((E=a.ncmazGalleryImgs.image3)==null?void 0:E.sourceUrl)||"",id:((j=a.ncmazGalleryImgs.image3)==null?void 0:j.databaseId)||"",altText:((M=a.ncmazGalleryImgs.image3)==null?void 0:M.altText)||""},4:{sourceUrl:((O=a.ncmazGalleryImgs.image4)==null?void 0:O.sourceUrl)||"",id:((B=a.ncmazGalleryImgs.image4)==null?void 0:B.databaseId)||"",altText:((L=a.ncmazGalleryImgs.image4)==null?void 0:L.altText)||""},5:{sourceUrl:((V=a.ncmazGalleryImgs.image5)==null?void 0:V.sourceUrl)||"",id:((H=a.ncmazGalleryImgs.image5)==null?void 0:H.databaseId)||"",altText:((R=a.ncmazGalleryImgs.image5)==null?void 0:R.altText)||""},6:{sourceUrl:((q=a.ncmazGalleryImgs.image6)==null?void 0:q.sourceUrl)||"",id:((Y=a.ncmazGalleryImgs.image6)==null?void 0:Y.databaseId)||"",altText:((Z=a.ncmazGalleryImgs.image6)==null?void 0:Z.altText)||""},7:{sourceUrl:((J=a.ncmazGalleryImgs.image7)==null?void 0:J.sourceUrl)||"",id:((K=a.ncmazGalleryImgs.image7)==null?void 0:K.databaseId)||"",altText:((Q=a.ncmazGalleryImgs.image7)==null?void 0:Q.altText)||""},8:{sourceUrl:((W=a.ncmazGalleryImgs.image8)==null?void 0:W.sourceUrl)||"",id:((X=a.ncmazGalleryImgs.image8)==null?void 0:X.databaseId)||"",altText:((N=a.ncmazGalleryImgs.image8)==null?void 0:N.altText)||""}}}),oa=va`
    mutation MUTATION_UPDATE_POST(
      $commentStatus: String = "open"
      $id: ID = ""
      $status: PostStatusEnum = null
      $title: String = ""
      $excerpt: String = ""
      $ncFeaturedImageDatabaseId: Int = null
      $ncmazAudioUrl: String = null
      $ncmazGalleryImgs_1_databaseID: Int = null
      $ncmazGalleryImgs_2_databaseID: Int = null
      $ncmazGalleryImgs_3_databaseID: Int = null
      $ncmazGalleryImgs_4_databaseID: Int = null
      $ncmazGalleryImgs_5_databaseID: Int = null
      $ncmazGalleryImgs_6_databaseID: Int = null
      $ncmazGalleryImgs_7_databaseID: Int = null
      $ncmazGalleryImgs_8_databaseID: Int = null
      $content: String = ""
      $ncmazVideoUrl: String = null
      $postFormatNodes: [PostPostFormatsNodeInput] = []
      $postFormatNodesAppend: Boolean = false
      $categoryNodes: [PostCategoriesNodeInput] = {}
      $ncTags: String = null
    ) {
      updatePost(
        input: {
          id: $id
          commentStatus: $commentStatus
          status: $status
          title: $title
          excerpt: $excerpt
          ncFeaturedImageDatabaseId: $ncFeaturedImageDatabaseId
          ncmazAudioUrl: $ncmazAudioUrl
          ncmazGalleryImgs1DatabaseID: $ncmazGalleryImgs_1_databaseID
          ncmazGalleryImgs2DatabaseID: $ncmazGalleryImgs_2_databaseID
          ncmazGalleryImgs3DatabaseID: $ncmazGalleryImgs_3_databaseID
          ncmazGalleryImgs4DatabaseID: $ncmazGalleryImgs_4_databaseID
          ncmazGalleryImgs5DatabaseID: $ncmazGalleryImgs_5_databaseID
          ncmazGalleryImgs6DatabaseID: $ncmazGalleryImgs_6_databaseID
          ncmazGalleryImgs7DatabaseID: $ncmazGalleryImgs_7_databaseID
          ncmazGalleryImgs8DatabaseID: $ncmazGalleryImgs_8_databaseID
          content: $content
          categories: { append: false, nodes: $categoryNodes }
          ncTags: $ncTags
          ncmazVideoUrl: $ncmazVideoUrl
          postFormats: {
            nodes: $postFormatNodes
            append: $postFormatNodesAppend
          }
        }
      ) {
        post {
          title
          link
          id
          postId
          postFormats {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      }
    }
  `,[ia,{error:D,data:s,loading:u}]=$a(oa),T=b.useDeferredValue(s==null?void 0:s.updatePost.post.id);b.useEffect(()=>{window.addEventListener("beforeunload",ea,!0)},[]),b.useEffect(()=>{!T||!(s!=null&&s.updatePost.post.link)||(window.removeEventListener("beforeunload",ea,!0),fa.success(r["Post successful"]+"!"),setTimeout(()=>{window.location.href=s==null?void 0:s.updatePost.post.link},500))},[T]);const ca=aa.debounce(function(e){p(e.getText())},300),da=aa.debounce(function(e){la(e.getHTML())},400),ua=e=>{sa(e)},ga=e=>{na(e)},Ia=e=>{ra(e)},ba=e=>{ma(e)},pa=e=>{let l={excerpt:e.excerptText,commentStatus:e.isAllowComments?"open":"closed",postFormatNodes:[{slug:e.postFormatsSelected!=="Standard"?e.postFormatsSelected:null}]};return e.postFormatsSelected==="post-format-gallery"&&(l={...l,ncmazGalleryImgs_1_databaseID:e.objGalleryImgs[1].id||0,ncmazGalleryImgs_2_databaseID:e.objGalleryImgs[2].id||0,ncmazGalleryImgs_3_databaseID:e.objGalleryImgs[3].id||0,ncmazGalleryImgs_4_databaseID:e.objGalleryImgs[4].id||0,ncmazGalleryImgs_5_databaseID:e.objGalleryImgs[5].id||0,ncmazGalleryImgs_6_databaseID:e.objGalleryImgs[6].id||0,ncmazGalleryImgs_7_databaseID:e.objGalleryImgs[7].id||0,ncmazGalleryImgs_8_databaseID:e.objGalleryImgs[8].id||0}),e.postFormatsSelected==="post-format-video"&&(l={...l,ncmazVideoUrl:e.videoUrl||null}),e.postFormatsSelected==="post-format-audio"&&(l={...l,ncmazAudioUrl:e.audioUrl||null}),l},g=e=>{const l=pa(f),Ga={id:a.id,status:e,title:c,ncFeaturedImageDatabaseId:(d==null?void 0:d.id)||0,content:y,categoryNodes:G.map(I=>({id:I.id})),ncTags:z.map(I=>I.name).join(","),...l};ia({variables:Ga})},ya=()=>{var e,l;if(((l=(e=frontendObject.currentUser)==null?void 0:e.roles.edges[0])==null?void 0:l.node.name)==="contributor"){g("PENDING");return}g("PUBLISH")},za=()=>{if(a.status==="pending"||a.status==="publish"){o(!0);return}g("DRAFT")};return m("div",{className:"nc-UpdatePostEditor ",children:[m("div",{className:"bg-white dark:bg-neutral-900 lg:shadow-xl rounded-2xl dark:ring dark:ring-neutral-50/10",children:[(()=>m("div",{className:"pb-10 lg:py-10 w-full max-w-screen-md mx-auto ",children:[m("div",{className:"flex flex-col w-full",children:[t(Pa,{className:"block !text-base",children:r["Add a cover image"]}),t(Ca,{defaultImage:d,onChangeImage:ua})]}),t(Ua,{defaultValue:G,onChange:ga}),t(ha,{defaultTitle:c,onUpdate:ca}),t(Sa,{defaultValue:z,onChange:Ia})]}))(),t(_a,{defaultContent:y,onUpdate:da}),t("div",{className:"w-full border-b my-2 border-neutral-300 dark:border-neutral-700"}),D&&t(Da,{containerClassName:"text-sm m-4 mb-0",type:"error",children:D.message}),m("div",{className:"w-full max-w-screen-md mx-auto flex py-8",children:[t(Ta,{fontSize:"text-base font-medium",onClick:ya,loading:u,disabled:u,children:r.Publish}),t(ta,{fontSize:"text-base font-medium",className:"ml-2.5",onClick:za,loading:u,disabled:u,children:r["Save draft"]}),t(xa,{defaultData:f,onSubmit:ba})]})]}),t(wa,{show:i,onCloseModal:()=>o(!1),onSubmit:()=>{g("DRAFT"),o(!1)}})]})};export{ie as default};
