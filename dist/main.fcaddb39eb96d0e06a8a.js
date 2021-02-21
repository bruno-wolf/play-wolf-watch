(()=>{var t={669:(t,e,n)=>{t.exports=n(609)},448:(t,e,n)=>{"use strict";var r=n(867),o=n(26),a=n(372),i=n(327),s=n(97),c=n(109),d=n(985),l=n(61);t.exports=function(t){return new Promise((function(e,n){var p=t.data,f=t.headers;r.isFormData(p)&&delete f["Content-Type"];var u=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";f.Authorization="Basic "+btoa(h+":"+m)}var g=s(t.baseURL,t.url);if(u.open(t.method.toUpperCase(),i(g,t.params,t.paramsSerializer),!0),u.timeout=t.timeout,u.onreadystatechange=function(){if(u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in u?c(u.getAllResponseHeaders()):null,a={data:t.responseType&&"text"!==t.responseType?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:t,request:u};o(e,n,a),u=null}},u.onabort=function(){u&&(n(l("Request aborted",t,"ECONNABORTED",u)),u=null)},u.onerror=function(){n(l("Network Error",t,null,u)),u=null},u.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(l(e,t,"ECONNABORTED",u)),u=null},r.isStandardBrowserEnv()){var y=(t.withCredentials||d(g))&&t.xsrfCookieName?a.read(t.xsrfCookieName):void 0;y&&(f[t.xsrfHeaderName]=y)}if("setRequestHeader"in u&&r.forEach(f,(function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete f[e]:u.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),t.responseType)try{u.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&u.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){u&&(u.abort(),n(t),u=null)})),p||(p=null),u.send(p)}))}},609:(t,e,n)=>{"use strict";var r=n(867),o=n(849),a=n(321),i=n(185);function s(t){var e=new a(t),n=o(a.prototype.request,e);return r.extend(n,a.prototype,e),r.extend(n,e),n}var c=s(n(655));c.Axios=a,c.create=function(t){return s(i(c.defaults,t))},c.Cancel=n(263),c.CancelToken=n(972),c.isCancel=n(502),c.all=function(t){return Promise.all(t)},c.spread=n(713),c.isAxiosError=n(268),t.exports=c,t.exports.default=c},263:t=>{"use strict";function e(t){this.message=t}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,t.exports=e},972:(t,e,n)=>{"use strict";var r=n(263);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},502:t=>{"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},321:(t,e,n)=>{"use strict";var r=n(867),o=n(327),a=n(782),i=n(572),s=n(185);function c(t){this.defaults=t,this.interceptors={request:new a,response:new a}}c.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[i,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)n=n.then(e.shift(),e.shift());return n},c.prototype.getUri=function(t){return t=s(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,n){return this.request(s(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,n,r){return this.request(s(r||{},{method:t,url:e,data:n}))}})),t.exports=c},782:(t,e,n)=>{"use strict";var r=n(867);function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},97:(t,e,n)=>{"use strict";var r=n(793),o=n(303);t.exports=function(t,e){return t&&!r(e)?o(t,e):e}},61:(t,e,n)=>{"use strict";var r=n(481);t.exports=function(t,e,n,o,a){var i=new Error(t);return r(i,e,n,o,a)}},572:(t,e,n)=>{"use strict";var r=n(867),o=n(527),a=n(502),i=n(655);function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return s(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||i.adapter)(t).then((function(e){return s(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return a(e)||(s(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},481:t=>{"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},185:(t,e,n)=>{"use strict";var r=n(867);t.exports=function(t,e){e=e||{};var n={},o=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function d(o){r.isUndefined(e[o])?r.isUndefined(t[o])||(n[o]=c(void 0,t[o])):n[o]=c(t[o],e[o])}r.forEach(o,(function(t){r.isUndefined(e[t])||(n[t]=c(void 0,e[t]))})),r.forEach(a,d),r.forEach(i,(function(o){r.isUndefined(e[o])?r.isUndefined(t[o])||(n[o]=c(void 0,t[o])):n[o]=c(void 0,e[o])})),r.forEach(s,(function(r){r in e?n[r]=c(t[r],e[r]):r in t&&(n[r]=c(void 0,t[r]))}));var l=o.concat(a).concat(i).concat(s),p=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===l.indexOf(t)}));return r.forEach(p,d),n}},26:(t,e,n)=>{"use strict";var r=n(61);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},527:(t,e,n)=>{"use strict";var r=n(867);t.exports=function(t,e,n){return r.forEach(n,(function(n){t=n(t,e)})),t}},655:(t,e,n)=>{"use strict";var r=n(867),o=n(16),a={"Content-Type":"application/x-www-form-urlencoded"};function i(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(s=n(448)),s),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(i(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(i(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){c.headers[t]=r.merge(a)})),t.exports=c},849:t=>{"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},327:(t,e,n)=>{"use strict";var r=n(867);function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var a;if(n)a=n(e);else if(r.isURLSearchParams(e))a=e.toString();else{var i=[];r.forEach(e,(function(t,e){null!=t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),i.push(o(e)+"="+o(t))})))})),a=i.join("&")}if(a){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+a}return t}},303:t=>{"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},372:(t,e,n)=>{"use strict";var r=n(867);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,a,i){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:t=>{"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},268:t=>{"use strict";t.exports=function(t){return"object"==typeof t&&!0===t.isAxiosError}},985:(t,e,n)=>{"use strict";var r=n(867);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},16:(t,e,n)=>{"use strict";var r=n(867);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},109:(t,e,n)=>{"use strict";var r=n(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,a,i={};return t?(r.forEach(t.split("\n"),(function(t){if(a=t.indexOf(":"),e=r.trim(t.substr(0,a)).toLowerCase(),n=r.trim(t.substr(a+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([n]):i[e]?i[e]+", "+n:n}})),i):i}},713:t=>{"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},867:(t,e,n)=>{"use strict";var r=n(849),o=Object.prototype.toString;function a(t){return"[object Array]"===o.call(t)}function i(t){return void 0===t}function s(t){return null!==t&&"object"==typeof t}function c(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function d(t){return"[object Function]"===o.call(t)}function l(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),a(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:a,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:function(t){return null!==t&&!i(t)&&null!==t.constructor&&!i(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:s,isPlainObject:c,isUndefined:i,isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:d,isStream:function(t){return s(t)&&d(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function t(){var e={};function n(n,r){c(e[r])&&c(n)?e[r]=t(e[r],n):c(n)?e[r]=t({},n):a(n)?e[r]=n.slice():e[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return e},extend:function(t,e,n){return l(e,(function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},466:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,'*{margin:0;padding:0;box-sizing:border-box}body{background:#d9c6a5;background:linear-gradient(0deg, #d9c6a5 0%, #e5e5e5 100%);width:100vw;height:100vh;font-family:"Roboto",sans-serif;line-height:1}@keyframes ringProgress{0%{stroke-dasharray:0 100}}#watch{width:100%;height:80%;display:flex;align-items:center;justify-content:center;opacity:0;margin-top:20px;transition:opacity 1000ms ease-in-out,margin-top 1000ms ease-in-out}#watch .container{width:100%;height:100%;max-width:360px;max-height:640px;position:relative}#watch .container>div{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#watch .container .band{width:220px;height:400px;border-radius:10px;position:absolute;overflow:hidden;z-index:1;background:#000;background:linear-gradient(90deg, #171717 0%, #000 100%)}#watch .container .band::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0);background:radial-gradient(circle, #171717 70%, #000 100%)}#watch .container .display{width:330px;height:300px;background:#000;border:10px solid #171717;border-radius:36px;position:relative;transform:translate(-50%, -50%) rotate(-90deg);z-index:2}#watch .container .display .crown{width:60px;height:16px;position:absolute;right:50px;bottom:-26px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;background:#000;background:linear-gradient(90deg, #292929 0%, #000 100%)}#watch .container .display .hand{width:80%;position:absolute;top:50%;left:50%;height:12px;transform:translate(-50%, -50%)}#watch .container .display .hand>div{width:50%;height:100%;position:absolute;top:0;right:5px;border-radius:10px}#watch .container .display .hand>div .center{width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;top:50%;left:-1px;transform:translate(0, -50%)}#watch .container .display .hand>div .thin{background:#fff;width:100%;height:4px;border-radius:2px;position:absolute;top:50%;left:0;transform:translate(0, -50%)}#watch .container .display .hand>div .fat{background:#fff;width:70%;height:100%;border-radius:8px;position:absolute;top:50%;right:0;transform:translate(0, -50%);box-shadow:0 0 10px #000}#watch .container .display .hand#minute .fat{width:80%}#watch .container .display .hand#hour{width:50%}#watch .container .display .hand#second .center{background:#636d84;width:10px;height:10px;left:0}#watch .container .display .hand#second .thin{background:#636d84;left:-20px;width:120%;height:2px;box-shadow:0 0 5px #000}#watch .container .display .marks.millisecond>div{width:82%;height:2px;background:#313643;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#watch .container .display .marks.millisecond>div::before{content:"";background:#000;border:2px solid #000;border-radius:10px;width:90%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#watch .container .display .marks.millisecond>div:nth-of-type(2){transform:translate(-50%, -50%) rotate(3deg)}#watch .container .display .marks.millisecond>div:nth-of-type(3){transform:translate(-50%, -50%) rotate(6deg)}#watch .container .display .marks.millisecond>div:nth-of-type(4){transform:translate(-50%, -50%) rotate(9deg)}#watch .container .display .marks.millisecond>div:nth-of-type(5){transform:translate(-50%, -50%) rotate(12deg)}#watch .container .display .marks.millisecond>div:nth-of-type(6){transform:translate(-50%, -50%) rotate(15deg)}#watch .container .display .marks.millisecond>div:nth-of-type(7){transform:translate(-50%, -50%) rotate(18deg)}#watch .container .display .marks.millisecond>div:nth-of-type(8){transform:translate(-50%, -50%) rotate(21deg)}#watch .container .display .marks.millisecond>div:nth-of-type(9){transform:translate(-50%, -50%) rotate(24deg)}#watch .container .display .marks.millisecond>div:nth-of-type(10){transform:translate(-50%, -50%) rotate(27deg)}#watch .container .display .marks.millisecond>div:nth-of-type(11){transform:translate(-50%, -50%) rotate(30deg)}#watch .container .display .marks.millisecond>div:nth-of-type(12){transform:translate(-50%, -50%) rotate(33deg)}#watch .container .display .marks.millisecond>div:nth-of-type(13){transform:translate(-50%, -50%) rotate(36deg)}#watch .container .display .marks.millisecond>div:nth-of-type(14){transform:translate(-50%, -50%) rotate(39deg)}#watch .container .display .marks.millisecond>div:nth-of-type(15){transform:translate(-50%, -50%) rotate(42deg)}#watch .container .display .marks.millisecond>div:nth-of-type(16){transform:translate(-50%, -50%) rotate(45deg)}#watch .container .display .marks.millisecond>div:nth-of-type(17){transform:translate(-50%, -50%) rotate(48deg)}#watch .container .display .marks.millisecond>div:nth-of-type(18){transform:translate(-50%, -50%) rotate(51deg)}#watch .container .display .marks.millisecond>div:nth-of-type(19){transform:translate(-50%, -50%) rotate(54deg)}#watch .container .display .marks.millisecond>div:nth-of-type(20){transform:translate(-50%, -50%) rotate(57deg)}#watch .container .display .marks.millisecond>div:nth-of-type(21){transform:translate(-50%, -50%) rotate(60deg)}#watch .container .display .marks.millisecond>div:nth-of-type(22){transform:translate(-50%, -50%) rotate(63deg)}#watch .container .display .marks.millisecond>div:nth-of-type(23){transform:translate(-50%, -50%) rotate(66deg)}#watch .container .display .marks.millisecond>div:nth-of-type(24){transform:translate(-50%, -50%) rotate(69deg)}#watch .container .display .marks.millisecond>div:nth-of-type(25){transform:translate(-50%, -50%) rotate(72deg)}#watch .container .display .marks.millisecond>div:nth-of-type(26){transform:translate(-50%, -50%) rotate(75deg)}#watch .container .display .marks.millisecond>div:nth-of-type(27){transform:translate(-50%, -50%) rotate(78deg)}#watch .container .display .marks.millisecond>div:nth-of-type(28){transform:translate(-50%, -50%) rotate(81deg)}#watch .container .display .marks.millisecond>div:nth-of-type(29){transform:translate(-50%, -50%) rotate(84deg)}#watch .container .display .marks.millisecond>div:nth-of-type(30){transform:translate(-50%, -50%) rotate(87deg)}#watch .container .display .marks.millisecond>div:nth-of-type(31){transform:translate(-50%, -50%) rotate(90deg)}#watch .container .display .marks.millisecond>div:nth-of-type(32){transform:translate(-50%, -50%) rotate(93deg)}#watch .container .display .marks.millisecond>div:nth-of-type(33){transform:translate(-50%, -50%) rotate(96deg)}#watch .container .display .marks.millisecond>div:nth-of-type(34){transform:translate(-50%, -50%) rotate(99deg)}#watch .container .display .marks.millisecond>div:nth-of-type(35){transform:translate(-50%, -50%) rotate(102deg)}#watch .container .display .marks.millisecond>div:nth-of-type(36){transform:translate(-50%, -50%) rotate(105deg)}#watch .container .display .marks.millisecond>div:nth-of-type(37){transform:translate(-50%, -50%) rotate(108deg)}#watch .container .display .marks.millisecond>div:nth-of-type(38){transform:translate(-50%, -50%) rotate(111deg)}#watch .container .display .marks.millisecond>div:nth-of-type(39){transform:translate(-50%, -50%) rotate(114deg)}#watch .container .display .marks.millisecond>div:nth-of-type(40){transform:translate(-50%, -50%) rotate(117deg)}#watch .container .display .marks.millisecond>div:nth-of-type(41){transform:translate(-50%, -50%) rotate(120deg)}#watch .container .display .marks.millisecond>div:nth-of-type(42){transform:translate(-50%, -50%) rotate(123deg)}#watch .container .display .marks.millisecond>div:nth-of-type(43){transform:translate(-50%, -50%) rotate(126deg)}#watch .container .display .marks.millisecond>div:nth-of-type(44){transform:translate(-50%, -50%) rotate(129deg)}#watch .container .display .marks.millisecond>div:nth-of-type(45){transform:translate(-50%, -50%) rotate(132deg)}#watch .container .display .marks.millisecond>div:nth-of-type(46){transform:translate(-50%, -50%) rotate(135deg)}#watch .container .display .marks.millisecond>div:nth-of-type(47){transform:translate(-50%, -50%) rotate(138deg)}#watch .container .display .marks.millisecond>div:nth-of-type(48){transform:translate(-50%, -50%) rotate(141deg)}#watch .container .display .marks.millisecond>div:nth-of-type(49){transform:translate(-50%, -50%) rotate(144deg)}#watch .container .display .marks.millisecond>div:nth-of-type(50){transform:translate(-50%, -50%) rotate(147deg)}#watch .container .display .marks.millisecond>div:nth-of-type(51){transform:translate(-50%, -50%) rotate(150deg)}#watch .container .display .marks.millisecond>div:nth-of-type(52){transform:translate(-50%, -50%) rotate(153deg)}#watch .container .display .marks.millisecond>div:nth-of-type(53){transform:translate(-50%, -50%) rotate(156deg)}#watch .container .display .marks.millisecond>div:nth-of-type(54){transform:translate(-50%, -50%) rotate(159deg)}#watch .container .display .marks.millisecond>div:nth-of-type(55){transform:translate(-50%, -50%) rotate(162deg)}#watch .container .display .marks.millisecond>div:nth-of-type(56){transform:translate(-50%, -50%) rotate(165deg)}#watch .container .display .marks.millisecond>div:nth-of-type(57){transform:translate(-50%, -50%) rotate(168deg)}#watch .container .display .marks.millisecond>div:nth-of-type(58){transform:translate(-50%, -50%) rotate(171deg)}#watch .container .display .marks.millisecond>div:nth-of-type(59){transform:translate(-50%, -50%) rotate(174deg)}#watch .container .display .marks.millisecond>div:nth-of-type(60){transform:translate(-50%, -50%) rotate(177deg)}#watch .container .display .marks.hour>div{width:82%;height:3px;background:#fff;border-radius:10px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#watch .container .display .marks.hour>div::before{content:"";background:#000;border-radius:10px;border:2px solid #000;width:90%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#watch .container .display .marks.hour>div:nth-of-type(2){transform:translate(-50%, -50%) rotate(30deg)}#watch .container .display .marks.hour>div:nth-of-type(3){transform:translate(-50%, -50%) rotate(60deg)}#watch .container .display .marks.hour>div:nth-of-type(4){transform:translate(-50%, -50%) rotate(90deg)}#watch .container .display .marks.hour>div:nth-of-type(5){transform:translate(-50%, -50%) rotate(120deg)}#watch .container .display .marks.hour>div:nth-of-type(6){transform:translate(-50%, -50%) rotate(150deg)}#watch .container .display .complication.inside{width:70px;height:70px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:#171717;background-repeat:no-repeat;border:none;border-radius:50%;overflow:hidden;outline:none;cursor:pointer}#watch .container .display .complication.inside:focus{background:#292929}#watch .container .display .complication.inside#top{left:70%;background:#000;font-size:18px;font-weight:500;text-transform:uppercase;letter-spacing:2px;color:#fff;display:flex;align-items:center;justify-content:center}#watch .container .display .complication.inside#top span{transform:rotate(90deg)}#watch .container .display .complication.inside#right{top:70%}#watch .container .display .complication.inside#right>span{transform:rotate(90deg);color:#fff;width:100%;height:100%;position:absolute;top:0;left:0;display:flex;flex-flow:column;align-items:center;justify-content:center}#watch .container .display .complication.inside#right>span>span{text-transform:uppercase;width:100%;text-align:center}#watch .container .display .complication.inside#right>span #weekday{color:#636d84;font-size:16px;letter-spacing:1px}#watch .container .display .complication.inside#right>span #day{font-size:32px;font-weight:500}#watch .container .display .complication.inside#bottom{background:#000;left:30%}#watch .container .display .complication.inside#bottom span{width:100%;height:100%;transform:rotate(90deg);display:flex;align-items:center;justify-content:center}#watch .container .display .complication.inside#bottom span #activity-rings{height:100%;width:100%}#watch .container .display .complication.inside#bottom span #activity-rings .ring{transform-origin:50%}#watch .container .display .complication.inside#bottom span #activity-rings .completed{stroke-linecap:round;animation:ringProgress 1500ms ease-in-out forwards}#watch .container .display .complication.inside#bottom span #activity-rings circle{fill:none}#watch .container .display .complication.inside#bottom span #activity-rings .move-ring .background{stroke:rgba(229,229,229,.1)}#watch .container .display .complication.inside#bottom span #activity-rings .move-ring .completed{stroke:#e5e5e5;animation-delay:1000ms}#watch .container .display .complication.inside#bottom span #activity-rings .exercise-ring .background{stroke:rgba(229,229,229,.1)}#watch .container .display .complication.inside#bottom span #activity-rings .exercise-ring .completed{stroke:#e5e5e5;animation-delay:1200ms}#watch .container .display .complication.inside#bottom span #activity-rings .stand-ring .background{stroke:rgba(229,229,229,.1)}#watch .container .display .complication.inside#bottom span #activity-rings .stand-ring .completed{stroke:#e5e5e5;animation-delay:1400ms}#watch .container .display .complication.inside#left{top:30%}#watch .container .display .complication.inside#left span{display:block;width:100%;height:100%;transform:rotate(90deg);display:flex;align-items:center;justify-content:center;padding:20px}#watch .container .display .complication.inside#left svg{fill:#e5e5e5;width:40px;height:40px}#watch .container .display .complication.outside#top-left{position:absolute;top:50%;left:50%;width:110%;height:110%;transform:translate(-50%, -50%)}#watch .container .display .complication.outside#top-left .value-xs{color:#e5e5e5;font-size:14px;display:block;position:absolute;top:33px;right:76px;transform:rotate(30deg)}#watch .container .display .complication.outside#top-left .icon{fill:#e5e5e5;width:21px;height:21px;position:absolute;top:34px;right:34px;transform:rotate(90deg)}#watch .container .display .complication.outside#top-left .graph{position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%, -50%)}#watch .container .display .complication.outside#top-left .ring{transform-origin:50%;transform:scale(1) rotate(-46deg)}#watch .container .display .complication.outside#top-left .ring circle{fill:none;stroke-linecap:round}#watch .container .display .complication.outside#top-left .ring .background{stroke:#171717}#watch .container .display .complication.outside#top-left .ring .completed{stroke:#e5e5e5;animation-delay:1000ms}#watch .container .display .complication.outside#top-right{position:absolute;top:50%;left:50%;width:110%;height:110%;transform:translate(-50%, -50%)}#watch .container .display .complication.outside#top-right .value-lg{color:#e5e5e5;font-size:18px;display:block;position:absolute;bottom:34px;right:34px;transform:rotate(136deg)}#watch .container .display .complication.outside#top-right .value-xs{color:#e5e5e5;font-size:14px;display:block;position:absolute;bottom:110px;right:30px;transform:rotate(116deg)}#watch .container .display .complication.outside#top-right .value-xs:last-of-type{bottom:22px;right:96px;transform:rotate(150deg)}#watch .container .display .complication.outside#top-right .icon{fill:#e5e5e5;width:21px;height:21px;position:absolute;top:36px;right:20px;transform:rotate(90deg)}#watch .container .display .complication.outside#top-right .graph{top:50%;left:50%;width:100%;height:100%}#watch .container .display .complication.outside#top-right .ring{transform-origin:50%;transform:scale(1) rotate(20deg)}#watch .container .display .complication.outside#top-right .ring circle{fill:none;stroke-linecap:round}#watch .container .display .complication.outside#top-right .ring .background{stroke:#171717}#watch .container .display .complication.outside#top-right .ring .completed{stroke:#e5e5e5;animation-delay:1000ms}#watch .container .display .complication.outside#top-right .ring .dot{fill:#e5e5e5;stroke:#000;stroke-width:.2px;position:absolute;top:0;left:0}#watch .container .display .complication.outside#bottom-left{position:absolute;top:50%;left:50%;width:110%;height:110%;transform:translate(-50%, -50%)}#watch .container .display .complication.outside#bottom-left .value-xs{color:#e5e5e5;font-size:14px;display:block;position:absolute;bottom:262px;right:234px;transform:rotate(142deg)}#watch .container .display .complication.outside#bottom-left .icon{fill:#e5e5e5;width:21px;height:21px;position:absolute;top:34px;left:34px;transform:rotate(90deg)}#watch .container .display .complication.outside#bottom-left .graph{position:absolute;top:0;left:0;width:100%;height:100%}#watch .container .display .complication.outside#bottom-left .ring{transform-origin:50%;transform:scale(1) rotate(200deg)}#watch .container .display .complication.outside#bottom-left .ring circle{fill:none;stroke-linecap:round}#watch .container .display .complication.outside#bottom-left .ring .background{stroke:#171717}#watch .container .display .complication.outside#bottom-left .ring .completed{stroke:#e5e5e5;animation-delay:1000ms}#watch .container .display #main-center{background:#000;width:4px;height:4px;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#watch.show{opacity:1;margin-top:0}.form{width:90%;margin:0 auto;padding:16px;display:flex;flex-flow:column}.form label{font-size:18px;margin-bottom:4px}.form input[type=text]{width:100%;padding:12px 20px;margin:8px 0;border:none;border-radius:4px;box-sizing:border-box;font-size:18px}',""]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},379:(t,e,n)=>{"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function i(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],o=0;o<t.length;o++){var s=t[o],c=e.base?s[0]+e.base:s[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var p=i(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:l,updater:m(f,e),references:1}),r.push(l)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=o(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,l=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function f(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var u=null,h=0;function m(t,e){var n,r,o;if(e.singleton){var a=h++;n=u||(u=c(e)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=c(e),r=f.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var c=s(t,e),d=0;d<n.length;d++){var l=i(n[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=c}}}}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(379),e=n.n(t),r=n(466);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=()=>{const t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${t}px`)},a=["sun","mon","tue","wed","thu","fri","sat"],i=t=>Math.floor(Math.random()*Math.floor(t)),s=()=>{const t=document.querySelector(".move-ring .completed"),e=document.querySelector(".exercise-ring .completed"),n=document.querySelector(".stand-ring .completed"),r=i(80),o=i(r),a=i(90);t.setAttribute("stroke-dasharray",`${r}, 100`),e.setAttribute("stroke-dasharray",`${o}, 100`),n.setAttribute("stroke-dasharray",`${a}, 100`)};var c=n(669);const d=n.n(c)().create({baseURL:"undefined"});o(),window.addEventListener("resize",o),setTimeout((()=>{document.getElementById("watch").classList.add("show")}),1e3),setInterval((()=>{const t=new Date;((t,e,n,r,o)=>{const i=document.getElementById("hour"),s=document.getElementById("minute"),c=document.getElementById("second"),d=document.getElementById("weekday"),l=document.getElementById("day");let p=n,f=e,u=t,h=a[r],m=o;switch(p*=6,f*=6,u>12&&(u-=12),u*=30,!0){case f>330:u+=27.5;break;case f>300:u+=25;break;case f>270:u+=22.5;break;case f>240:u+=20;break;case f>210:u+=17.5;break;case f>180:u+=15;break;case f>150:u+=12.5;break;case f>120:u+=10;break;case f>90:u+=7.5;break;case f>60:u+=5;break;case f>30:u+=2.5}i.setAttribute("style",`transform: translate(-50%, -50%) rotate(${u}deg)`),s.setAttribute("style",`transform: translate(-50%, -50%) rotate(${f}deg)`),c.setAttribute("style",`transform: translate(-50%, -50%) rotate(${p}deg)`),d.innerHTML=h,l.innerHTML=m})(t.getHours(),t.getMinutes(),t.getSeconds(),t.getDay(),t.getDate())}),1e3),s(),document.getElementById("bottom").addEventListener("click",s);const l=document.getElementById("location");document.getElementById("btn").addEventListener("click",(()=>async function(t){const e=document.getElementById("message-holder"),n={rain:{element:document.getElementById("top-left"),current:document.querySelector("#top-left .value-xs")},temp:{element:document.getElementById("top-right"),current:document.querySelector("#top-right .value-lg"),min:document.querySelectorAll("#top-right .value-xs")[0],max:document.querySelectorAll("#top-right .value-xs")[1]}},r=await(async({local:t})=>(await d.get(`location/${t}`)).data[0])({local:t});r?console.log("CHILLI"):e.innerHTML="Não encontrado.";const o=await(async({woeid:t})=>(await d.get(`weather/${t}`)).data)({woeid:r.woeid});console.log({weatherReport:o}),n.rain.current.innerHTML=`${o.predictability}%`,n.temp.current.innerHTML=`${parseInt(o.the_temp)}º`,n.temp.min.innerHTML=`${parseInt(o.min_temp)}º`,n.temp.max.innerHTML=`${parseInt(o.max_temp)}º`}(l.value))),console.log("made by Wolf")})()})();