(()=>{"use strict";var n,t,e,A,o,a,r,i,c,p,s,f,l,u,g={100:(n,t,e)=>{e.d(t,{A:()=>m});var A=e(354),o=e.n(A),a=e(314),r=e.n(a),i=e(417),c=e.n(i),p=new URL(e(703),e.b),s=new URL(e(175),e.b),f=new URL(e(398),e.b),l=new URL(e(344),e.b),u=r()(o()),g=c()(p),h=c()(s),C=c()(f),d=c()(l);u.push([n.id,`@font-face{font-family:"League Spartan";font-weight:300;src:url(${g}) format("truetype")}@font-face{font-family:"League Spartan";font-weight:400;src:url(${h}) format("truetype")}@font-face{font-family:"League Spartan";font-weight:600;src:url(${C}) format("truetype")}@font-face{font-family:"League Spartan";font-weight:700;src:url(${d}) format("truetype")}*{margin:0;padding:0;box-sizing:border-box}:root{--horizontal-padding: 150px;--beaver: #9e7f66;--mirage: #17192b;--cod-gray: #111111;--ebony-clay: #242b37;--shuttle-gray: #5c6779}.body{display:flex;flex-direction:column;align-items:center}.main{width:100%}.section{position:relative;padding:0 var(--horizontal-padding)}.section_dark{background:#000}.hero{height:820px;padding-top:65px}.hero__image{height:820px;position:absolute;top:0;right:0}.hero__heading{width:12ch;margin-bottom:10px}.hero__body{width:37ch}.crop{overflow:hidden}.crop_variant_one{position:absolute;width:58%;height:100%;top:0;right:0}.footer{background:#000;width:100%}.button{width:245px;height:64px}.button_white{background:none;border:1px solid #fff;color:#fff}.button:hover{color:green}.logo{height:40px;width:auto}.text-group_variant_hero{position:relative;margin-top:153px;margin-bottom:40px}.text_white{color:#fff}.text_heading_s{font-family:"League Spartan";font-weight:600;font-size:17px;line-height:28px;letter-spacing:2.5px}.text_heading_m{font-family:"League Spartan";font-weight:700;font-size:20px;line-height:24px;letter-spacing:-0.25px}.text_heading_l{font-family:"League Spartan";font-weight:700;font-size:48px;line-height:48px;letter-spacing:-0.5px}.text_heading_xl{font-family:"League Spartan";font-weight:300;font-size:80px;line-height:80px;letter-spacing:-1px}.text_body_1{font-family:"League Spartan";font-weight:400;font-size:20px;line-height:30px}.text_body_2{font-family:"League Spartan";font-weight:400;font-size:16px;line-height:26px}`,"",{version:3,sources:["webpack://./src/styles.scss"],names:[],mappings:"AAAA,WACE,4BAAA,CACA,eAAA,CACA,8DAAA,CAGF,WACE,4BAAA,CACA,eAAA,CACA,8DAAA,CAGF,WACE,4BAAA,CACA,eAAA,CACA,8DAAA,CAIF,WACE,4BAAA,CACA,eAAA,CACA,8DAAA,CAGF,EACE,QAAA,CACA,SAAA,CAEA,qBAAA,CAGF,MACE,2BAAA,CAEA,iBAAA,CACA,iBAAA,CACA,mBAAA,CACA,qBAAA,CACA,uBAAA,CAGF,MACE,YAAA,CACA,qBAAA,CAEA,kBAAA,CAGF,MACE,UAAA,CAGF,SACE,iBAAA,CAEA,mCAAA,CAEA,cACE,eAAA,CAIJ,MAEE,YADS,CAGT,gBAAA,CAEA,aACE,YANO,CAOP,iBAAA,CACA,KAAA,CACA,OAAA,CAGF,eACE,UAAA,CACA,kBAAA,CAGF,YACE,UAAA,CAIJ,MACE,eAAA,CAEA,kBACE,iBAAA,CAEA,SAAA,CACA,WAAA,CAEA,KAAA,CACA,OAAA,CAIJ,QACE,eAAA,CAEA,UAAA,CAGF,QACE,WAAA,CACA,WAAA,CAEA,cACE,eAAA,CACA,qBAAA,CACA,UAAA,CAGF,cACE,WAAA,CAIJ,MACE,WAAA,CACA,UAAA,CAIA,yBACE,iBAAA,CAEA,gBAAA,CACA,kBAAA,CAKF,YACE,UAAA,CAGF,gBACE,4BAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CACA,oBAAA,CAGF,gBACE,4BAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CACA,sBAAA,CAGF,gBACE,4BAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CACA,qBAAA,CAGF,iBACE,4BAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CACA,mBAAA,CAGF,aACE,4BAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CAGF,aACE,4BAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA",sourcesContent:['@font-face {\n  font-family: "League Spartan";\n  font-weight: 300;\n  src: url("./assets/fonts/static/LeagueSpartan-Light.ttf") format("truetype");\n}\n\n@font-face {\n  font-family: "League Spartan";\n  font-weight: 400;\n  src: url("./assets/fonts/static/LeagueSpartan-Regular.ttf") format("truetype");\n}\n\n@font-face {\n  font-family: "League Spartan";\n  font-weight: 600;\n  src: url("./assets/fonts/static/LeagueSpartan-SemiBold.ttf")\n    format("truetype");\n}\n\n@font-face {\n  font-family: "League Spartan";\n  font-weight: 700;\n  src: url("./assets/fonts/static/LeagueSpartan-Bold.ttf") format("truetype");\n}\n\n* {\n  margin: 0;\n  padding: 0;\n\n  box-sizing: border-box;\n}\n\n:root {\n  --horizontal-padding: 150px;\n\n  --beaver: #9e7f66;\n  --mirage: #17192b;\n  --cod-gray: #111111;\n  --ebony-clay: #242b37;\n  --shuttle-gray: #5c6779;\n}\n\n.body {\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n}\n\n.main {\n  width: 100%;\n}\n\n.section {\n  position: relative;\n\n  padding: 0 var(--horizontal-padding);\n\n  &_dark {\n    background: black;\n  }\n}\n\n.hero {\n  $height: 820px;\n  height: $height;\n\n  padding-top: 65px;\n\n  &__image {\n    height: $height;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n\n  &__heading {\n    width: 12ch;\n    margin-bottom: 10px;\n  }\n\n  &__body {\n    width: 37ch;\n  }\n}\n\n.crop {\n  overflow: hidden;\n\n  &_variant_one {\n    position: absolute;\n\n    width: 58%;\n    height: 100%;\n\n    top: 0;\n    right: 0;\n  }\n}\n\n.footer {\n  background: black;\n\n  width: 100%;\n}\n\n.button {\n  width: 245px;\n  height: 64px;\n\n  &_white {\n    background: none;\n    border: 1px solid white;\n    color: white;\n  }\n\n  &:hover {\n    color: green;\n  }\n}\n\n.logo {\n  height: 40px;\n  width: auto;\n}\n\n.text-group {\n  &_variant_hero {\n    position: relative; // to keep the text in front of image\n\n    margin-top: 153px;\n    margin-bottom: 40px;\n  }\n}\n\n.text {\n  &_white {\n    color: white;\n  }\n\n  &_heading_s {\n    font-family: "League Spartan";\n    font-weight: 600;\n    font-size: 17px;\n    line-height: 28px;\n    letter-spacing: 2.5px;\n  }\n\n  &_heading_m {\n    font-family: "League Spartan";\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 24px;\n    letter-spacing: -0.25px;\n  }\n\n  &_heading_l {\n    font-family: "League Spartan";\n    font-weight: 700;\n    font-size: 48px;\n    line-height: 48px;\n    letter-spacing: -0.5px;\n  }\n\n  &_heading_xl {\n    font-family: "League Spartan";\n    font-weight: 300;\n    font-size: 80px;\n    line-height: 80px;\n    letter-spacing: -1px;\n  }\n\n  &_body_1 {\n    font-family: "League Spartan";\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 30px;\n  }\n\n  &_body_2 {\n    font-family: "League Spartan";\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 26px;\n  }\n}\n'],sourceRoot:""}]);const m=u},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",A=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),A&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),A&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,A,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(A)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var p=0;p<n.length;p++){var s=[].concat(n[p]);A&&r[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,A=0;A<t.length;A++)if(t[A].identifier===n){e=A;break}return e}function A(n,A){for(var a={},r=[],i=0;i<n.length;i++){var c=n[i],p=A.base?c[0]+A.base:c[0],s=a[p]||0,f="".concat(p," ").concat(s);a[p]=s+1;var l=e(f),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)t[l].references++,t[l].updater(u);else{var g=o(u,A);A.byIndex=i,t.splice(i,0,{identifier:f,updater:g,references:1})}r.push(f)}return r}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=A(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var i=e(a[r]);t[i].references--}for(var c=A(n,o),p=0;p<a.length;p++){var s=e(a[p]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=c}}},659:n=>{var t={};n.exports=function(n,e){var A=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var A="";e.supports&&(A+="@supports (".concat(e.supports,") {")),e.media&&(A+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(A+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),A+=e.css,o&&(A+="}"),e.media&&(A+="}"),e.supports&&(A+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(A,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},344:(n,t,e)=>{n.exports=e.p+"c311dbd01e80ebe50942.ttf"},703:(n,t,e)=>{n.exports=e.p+"354c1d0b29bf33854f9c.ttf"},175:(n,t,e)=>{n.exports=e.p+"09958bb07a94a6a4f1bb.ttf"},398:(n,t,e)=>{n.exports=e.p+"eb71c3a8fa3a8659a3f7.ttf"}},h={};function C(n){var t=h[n];if(void 0!==t)return t.exports;var e=h[n]={id:n,exports:{}};return g[n](e,e.exports,C),e.exports}C.m=g,C.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return C.d(t,{a:t}),t},C.d=(n,t)=>{for(var e in t)C.o(t,e)&&!C.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},C.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),C.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;C.g.importScripts&&(n=C.g.location+"");var t=C.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var e=t.getElementsByTagName("script");if(e.length)for(var A=e.length-1;A>-1&&(!n||!/^http(s?):/.test(n));)n=e[A--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),C.p=n})(),C.b=document.baseURI||self.location.href,C.nc=void 0,n=C(72),t=C.n(n),e=C(825),A=C.n(e),o=C(659),a=C.n(o),r=C(56),i=C.n(r),c=C(540),p=C.n(c),s=C(113),f=C.n(s),l=C(100),(u={}).styleTagTransform=f(),u.setAttributes=i(),u.insert=a().bind(null,"head"),u.domAPI=A(),u.insertStyleElement=p(),t()(l.A,u),l.A&&l.A.locals&&l.A.locals,console.log([...document.querySelector("main").querySelectorAll("*")].map((n=>[...n.classList])).flat().sort().filter(((n,t,e)=>n!==e[t+1])))})();
//# sourceMappingURL=app.bundle.js.map