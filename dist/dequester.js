!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("dequester",[],t):"object"==typeof exports?exports.dequester=t():e.dequester=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e,t){return function(n,r){n[r][e]=t}},o=function(e,t,n){return function(r){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];o[0]?r[o[0]][e]=t:r.prototype[n||e]=t}},u=function(){return function(e){void 0===e&&(e={}),this.options=e}}(),i=function(e){return o("_AFTER",e,"_EACH_AFTER")},c=function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function i(e){try{a(r.next(e))}catch(e){u(e)}}function c(e){try{a(r.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,c)}a((r=r.apply(e,t||[])).next())})},a=function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},f=function(e){return c(void 0,void 0,void 0,function(){return a(this,function(t){return[2,{done:!0,options:e}]})})},l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function i(e){try{a(r.next(e))}catch(e){u(e)}}function c(e){try{a(r.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,c)}a((r=r.apply(e,t||[])).next())})},p=function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},d=Object.assign({},{lib:"flyio"}),b=function(e,t,n){return function(r,o,i){var c=r[o];i.value=function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];return s(void 0,void 0,void 0,function(){var i,a,s,b,v,y,h,w,g,E,_,x,m,O,j,P,R,S,k,A,T,F,I,B,C,D,G,H,L,M,Y,q,U,N,X,z,J,K,Q,V,W,Z,$,ee,te;return p(this,function(p){switch(p.label){case 0:return[4,c.apply(void 0,o)];case 1:return i=p.sent(),a=t,s=r._PREFIX,b=void 0===s?"":s,v=r._EACH_BEFORE,y=void 0===v?function(){}:v,h=r._EACH_AFTER,w=void 0===h?function(){}:h,g=r._EACH_CONFIG,E=void 0===g?{}:g,_=c._AFTER,x=void 0===_?function(){}:_,m=c._BEFORE,O=void 0===m?function(){}:m,j=c._HEADERS,P=void 0===j?{}:j,R=c._BODY_TYPE,void 0===R?{}:R,S=c._CONFIG,k=void 0===S?{}:S,A=!0,T=!0,F=!0,I=!0,B=l(l(l({},d),E),k),i instanceof u&&(C=i.options,D=C.headers,G=void 0===D?{}:D,H=C.data,L=void 0===H?{}:H,M=C.params,Y=void 0===M?{}:M,q=C.before,U=void 0===q?function(){}:q,N=C.after,X=void 0===N?function(){}:N,z=C.useEachBefore,J=void 0===z||z,K=C.useEachAfter,Q=void 0===K||K,V=C.useBefore,W=void 0===V||V,Z=C.useAfter,$=void 0===Z||Z,P=l(l({},P),G),i=L,a=function(e,t){void 0===t&&(t={});for(var n=0,r=Object.entries(t);n<r.length;n++){var o=r[n],u=o[0],i=o[1];e=e.replace(":"+u,i)}return e}(a,Y),!J&&(A=!1),!Q&&(T=!1),!W&&(F=!1),!$&&(I=!1),x=X,O=U),ee={config:B,method:e,url:""+(n||b||"")+a,headers:P,data:i},A?[4,y(ee)]:[3,3];case 2:ee=p.sent()||ee,p.label=3;case 3:return F?[4,O(ee)]:[3,5];case 4:ee=p.sent()||ee,p.label=5;case 5:return[4,f(ee)];case 6:return te=p.sent(),T?[4,w(te)]:[3,8];case 7:te=p.sent()||te,p.label=8;case 8:return I?[4,x(te)]:[3,10];case 9:te=p.sent()||te,p.label=10;case 10:return[2,te]}})})}}},v=function(e,t){return void 0===t&&(t=""),b("GET",e,t)},y=function(e,t,n,r){var o,u=arguments.length,i=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(u<3?o(i):u>3?o(t,n,i):o(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},h=function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function i(e){try{a(r.next(e))}catch(e){u(e)}}function c(e){try{a(r.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,c)}a((r=r.apply(e,t||[])).next())})},w=function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},g=new(function(){function e(){}var t,n,o,c,a;return e.prototype.getUserInfo=function(){return{a:1,b:2}},e.prototype.getList=function(){return h(this,void 0,void 0,function(){return w(this,function(e){return[2,(t={params:{id:123},data:{a:1,b:2},headers:{abcc:"123"}},new u(t))];var t})})},y([v("/sth"),(n={a:1},r("_HEADERS",n)),i(function(){console.log(456)}),(t="FormData",r("_BODY_TYPE",t))],e.prototype,"getUserInfo",null),y([v("/sth2/:id")],e.prototype,"getList",null),e=y([(o="http://baidu.com",c="_PREFIX",a=o,function(e){e.prototype[c]=a}),i(function(){console.log(123)})],e)}());g.getUserInfo(),g.getList().then(function(e){console.log("getList",e)})}]).default});