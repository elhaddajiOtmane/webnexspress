!function(e){var t={};function i(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=831)}({797:function(e,t,i){},798:function(e,t){wp.customize.bind("gt3_reset_assets",(function(e){var t=e.nonce,i=e.target;i.setAttribute("disabled","disabled");var o=i.value;i.value="Removing...",i.disabled="disabled",jQuery.ajax({url:ajaxurl,method:"POST",data:{action:"gt3_clear_assets_cache",_nonce:t}}).done((function(){i.value="Removed",setTimeout((function(){i.removeAttribute("disabled"),i.value=o,i.disabled=void 0}),1500)}))}))},799:function(e,t){(0,window.gt3_customizer.bind)("page_title_bg_color",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper .gt3-page-title");t&&(t.style.backgroundColor=e)}))},800:function(e,t){(0,window.gt3_customizer.bind)("page_title_breadcrumbs_conditional",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper .gt3_breadcrumb");t&&t.classList.toggle("disabled_from_customizer",!e)}))},801:function(e,t){(0,window.gt3_customizer.bind)("page_title_names_conditional",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper .page_title");t&&t.classList.toggle("disabled_from_customizer",!e)}))},802:function(e,t){(0,window.gt3_customizer.bind)("page_title_conditional",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper");t&&t.classList.toggle("disabled_from_customizer",!e)}))},803:function(e,t){(0,window.gt3_customizer.bind)("page_title_font_color",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper .gt3-page-title");t&&(t.style.color=e)}))},804:function(e,t){(0,window.gt3_customizer.bind)("page_title_overlay_color",(function(e){var t,i=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper .gt3-page-title");i&&((e=(t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null)&&(e=e.r+","+e.g+","+e.b,i.style.setProperty("--gt3-page-title-gradient",e)))}))},805:function(e,t){var i=window.gt3_customizer,o=i.bind,r=i.get_field;function n(){var e=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper .gt3-page-title");if(e){var t=wp.customize.value(r("page_title_bg_image_image")),i=wp.customize.value(r("page_title_bg_image_repeat")),o=wp.customize.value(r("page_title_bg_image_size")),n=wp.customize.value(r("page_title_bg_image_attachment")),a=wp.customize.value(r("page_title_bg_image_position"));t=t?t.get():null,i=i?i.get():null,o=o?o.get():null,n=n?n.get():null,a=a?a.get():null,null!==t?(t=wp.media.attachment(t).get("url"),e.classList.add("gt3-page-title_has_img_bg"),e.classList.add("changed_by_customizer"),e.style.backgroundImage='url("'.concat(t,'")'),e.style.backgroundRepeat=i,e.style.backgroundSize=o,e.style.backgroundAttachment=n,e.style.backgroundPosition=a):(e.classList.remove("gt3-page-title_has_img_bg"),e.classList.remove("changed_by_customizer"),e.style.backgroundImage="",e.style.backgroundRepeat="",e.style.backgroundSize="",e.style.backgroundAttachment="",e.style.backgroundPosition="")}}o("page_title_bg_image_image",n),o("page_title_bg_image_repeat",n),o("page_title_bg_image_size",n),o("page_title_bg_image_attachment",n),o("page_title_bg_image_position",n)},806:function(e,t){(0,window.gt3_customizer.bind)("page_title_height",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper .gt3-page-title");t&&(t.style.height=e+"px")}))},807:function(e,t){var i=window.gt3_customizer,o=i.bind,r=i.get_field;function n(){var e=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper .gt3-page-title");if(e){var t=wp.customize.value(r("page_title_top_border")),i=wp.customize.value(r("page_title_top_border_color"));t=t?t.get():null,i=i?i.get():null,e.style.borderTop=t?"1px solid ".concat(i):""}}o("page_title_top_border",n),o("page_title_top_border_color",n)},808:function(e,t){var i=window.gt3_customizer,o=i.bind,r=i.get_field;function n(){var e=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper .gt3-page-title");if(e){var t=wp.customize.value(r("page_title_bottom_border")),i=wp.customize.value(r("page_title_bottom_border_color"));t=t?t.get():null,i=i?i.get():null,e&&(e.style.borderBottom=t?"1px solid ".concat(i):"")}}o("page_title_bottom_border",n),o("page_title_bottom_border_color",n)},809:function(e,t){(0,window.gt3_customizer.bind)("page_title_bottom_margin",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper .gt3-page-title");t&&(t.style.marginBottom=e+"px")}))},810:function(e,t){(0,window.gt3_customizer.bind)("page_title_vert_align",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper .gt3-page-title");t&&(t.classList.remove("gt3-page-title_vert_align_top"),t.classList.remove("gt3-page-title_vert_align_middle"),t.classList.remove("gt3-page-title_vert_align_bottom"),t.classList.add("gt3-page-title_vert_align_".concat(e)))}))},811:function(e,t){(0,window.gt3_customizer.bind)("page_title_horiz_align",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".gt3-page-title_wrapper .gt3-page-title");t&&(t.classList.remove("gt3-page-title_horiz_align_left"),t.classList.remove("gt3-page-title_horiz_align_center"),t.classList.remove("gt3-page-title_horiz_align_right"),t.classList.add("gt3-page-title_horiz_align_".concat(e)))}))},812:function(e,t){(0,window.gt3_customizer.bind)("blog_post_share",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".blog_post_info .post_share_block");if(t&&t.length)for(i=0;i<t.length;i++)t[i].classList.toggle("disabled_from_customizer",!e)}))},813:function(e,t){(0,window.gt3_customizer.bind)("blog_post_likes",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelectorAll(".blog_post_info .likes_block");if(t&&t.length)for(i=0;i<t.length;i++)t[i].classList.toggle("disabled_from_customizer",!e)}))},814:function(e,t){(0,window.gt3_customizer.bind)("author_box",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".blog_content .gt3_author_box");t&&t.classList.toggle("disabled_from_customizer",!e)}))},815:function(e,t){(0,window.gt3_customizer.bind)("post_comments",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector("#main_content #comments");t&&t.classList.toggle("disabled_from_customizer",!e)}))},816:function(e,t){(0,window.gt3_customizer.bind)("related_posts",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".gt3_related_wrap");t&&t.classList.toggle("disabled_from_customizer",!e)}))},817:function(e,t){(0,window.gt3_customizer.bind)("blog_title_conditional",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector("body.single-post .gt3-page-title_wrapper");t&&t.classList.toggle("disabled_from_customizer",!e)}))},818:function(e,t){(0,window.gt3_customizer.bind)("back_to_top",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".back_to_top_container");t&&t.classList.toggle("disabled_from_customizer",!e)}))},819:function(e,t){(0,window.gt3_customizer.bind)("bubbles_block",(function(e){var t=wp.customize.previewer.targetWindow().document.querySelector(".bubbles_wrap");t&&t.classList.toggle("disabled_from_customizer",!e)}))},820:function(e,t){var i=window.gt3_customizer,o=i.bind,r=i.get_field;o("sidebars",(function(e){e instanceof Array||(e=JSON.parse(decodeURI(e)));["page_sidebar_def","blog_single_sidebar_def","portfolio_single_sidebar_def","team_single_sidebar_def"].forEach((function(t){var i=r(t),o=wp.customize.control(i),n=wp.customize.value(i)&&wp.customize.value(i).get();if(o){var a=o.container.find("select");a.length&&(a.empty(),e.forEach((function(e){var t=function(e){return"sidebar_"+(e=(e=(e=e.replace(/ /g,"-")).replace(/[^A-Za-z0-9-]/,"")).toLowerCase())}(e),i='<option value="'.concat(t,'" ').concat(n===t?' selected="selected"':"",">").concat(e,"</option>");a.append(i)})))}}))}))},831:function(e,t,i){"use strict";i.r(t);i(797),i(798);var o=window.gt3_customizer.option_name;var r=window.gt3_customizer.option_name;window.gt3_customizer=window.gt3_customizer||{},window.gt3_customizer.conditions=window.gt3_customizer.conditions||[],window.gt3_customizer.bind=function(e,t){var i="".concat(o,"[").concat(e,"]"),r=null;wp.customize(i,(function(e){return e.bind(t)})),wp.customize.bind("ready",(function(){(r=wp.customize.value(i))&&wp.customize.previewer.bind("ready",(function(){return t(r.get())}))}))},window.gt3_customizer.get_field=function(e){return"".concat(r,"[").concat(e,"]")};i(799),i(800),i(801),i(802),i(803),i(804),i(805),i(806),i(807),i(808),i(809),i(810),i(811),i(812),i(813),i(814),i(815),i(816),i(817),i(818),i(819),i(820);function n(e,t){function i(){var i=t.every((function(e){var t=e.field,i=e.type,o=e.value,r=wp.customize.value(t).get(),n=!1;switch(i){case"bool":n=r===o;break;case"not_in":n=!o.includes(r);break;case"in":n=o.includes(r);break;case"intval":return!0;default:return!1}return n}));wp.customize.control(e).container.toggleClass("customizer-conditions-hidden",!i)}i(),t.forEach((function(e){var t=e.field;return wp.customize.value(t).bind(i)}))}wp.customize.bind("ready",(function(){var e=window.gt3_customizer.conditions;for(var t in e)n(t,e[t])}))}});