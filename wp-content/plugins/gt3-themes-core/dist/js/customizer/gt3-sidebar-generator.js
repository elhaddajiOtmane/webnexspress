!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=772)}({772:function(e,t){wp.customize.controlConstructor["gt3-sidebar-generator"]=wp.customize.Control.extend({ui:{addNewButton:".add-new",wrapper:".repeater-fields"},inputs:[],ready:function(){"use strict";var e=this,t=this;for(var n in this.ui)this.ui[n]=this.container.find(this.ui[n]);var r=this.getValue();r instanceof Array||(r=[]),this.ui.addNewButton.on("click",(function(t){t.preventDefault(),e.addRow("",e.getValue().length)})),r.length&&_.each(r,(function(e,n){t.addRow(e,n)})),this.inputs.length||t.addRow("",r.length)},getValue:function(){var e=this.setting.get();return e instanceof Array?e:JSON.parse(decodeURI(e))},setValue:function(e,t,n){var r=[];this.inputs.forEach((function(e,t){r.push(e.value)})),this.setting.set(encodeURI(JSON.stringify(r)))},updateRowValue:function(e,t){this.setting.get()[t]=e,this.setValue()},addRow:function(e,t){if(this.inputs.length&&!this.inputs[this.inputs.length-1].value.length)return;var n=this,r=document.createElement("li");r.classList.add("sidebar-repeater-wrapper");var i=document.createElement("input");i.value=e,i.dataset.index=t,i.addEventListener("change",a);var u=document.createElement("button");function a(){n.updateRowValue(i.value,t)}u.innerText="X",u.addEventListener("click",(function e(t){t.preventDefault(),i.removeEventListener("change",a),u.removeEventListener("click",e);var o=n.inputs.indexOf(i);n.inputs.splice(o,1),r.remove(),n.setValue()})),r.appendChild(i),r.appendChild(u),this.inputs.push(i),this.ui.wrapper.append(r)}})}});