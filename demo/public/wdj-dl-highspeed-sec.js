!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e,n){"use strict";var o=n(1),r=n.n(o),c={},a="https://server-m.pp.cn";function i(t,e){if("object"===r()(e)){var n=t+"?uc_param_str=frvecpeimintnidnut";e&&e.ch_src&&(n+="&ch_src="+e.ch_src),e&&e.ch&&(n+="&ch="+e.ch),(new Image).src=n}}c.access=function(t,e){!e&&(e=a),i(e+"/log/access",t)},c.click=function(t,e){!e&&(e=a),i(e+"/log/click",t)},c.activity=function(t,e){!e&&(e=a),i(e+"/log/activity",t)},e.a=c},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o},function(t,e,n){"use strict";var o;n(3),console.log(123),t.exports=((o={}).ajax=function(t){console.log(123);var e=Object.assign({url:"",type:"GET",header:{},contentType:"application/x-www-form-urlencoded",async:!0,data:{}},t),n=function(){if(!(!window.XMLHttpRequest||window.location&&"file:"===window.location.protocol&&window.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Could not find XHR")}();n.open(e.type.toUpperCase(),e.url,e.async);var o=e.header||{};for(var r in o["Content-Type"]=e.contentType,o)n.setRequestHeader(r,o[r]);n.onreadystatechange=function(){if(4===n.readyState){if(n.status>=200&&n.status<300||304===n.status){var t=e.success;"function"==typeof t&&t(n)}else{var o=e.error;"function"==typeof o&&o(n)}var r=e.complete;"function"==typeof r&&r(n)}},n.send(function(t){if("string"==typeof t)return t;var e=[];for(var n in t)e.push(n+"="+t[n]);return e.join("&")}(e.data)||null)},o)},function(t,e,n){"use strict";Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(null==t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o){o=Object(o);for(var r=Object.keys(Object(o)),c=0,a=r.length;c<a;c++){var i=r[c],u=Object.getOwnPropertyDescriptor(o,i);void 0!==u&&u.enumerable&&(e[i]=o[i])}}}return e}})},function(t,e,n){"use strict";t.exports={errcode:{OK:0,PARAM:1,INTERNAL_ERROR:2,NETWORK_ERROR:3,UNKNOWED:100}}},function(t,e,n){t.exports=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";t.exports=n(2)},function(t,e){"use strict";Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(null==t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o){o=Object(o);for(var r=Object.keys(Object(o)),c=0,a=r.length;c<a;c++){var i=r[c],u=Object.getOwnPropertyDescriptor(o,i);void 0!==u&&u.enumerable&&(e[i]=o[i])}}}return e}})},function(t,e,n){"use strict";n(1);var o=n(3);"function"==typeof $&&$.ajax&&(o=$);var r=function(){function t(){return"http://127.0.0.1:"+n.port}var e={},n={port:58333,timeout:200};return e.config=function(t){t&&"object"==typeof t&&Object.assign(n,t)},e.checkWDJ=function(e){try{o.ajax({type:"get",contentType:"text/plain",data:{},timeout:n.timeout,url:t(),success:function(){e(!0)},error:function(){e(!1)}})}catch(t){console.error("e:"+t),e(!1)}},e.doSomething=function(e,r){try{o.ajax({type:"post",contentType:"text/plain",data:JSON.stringify({type:6,info:e}),timeout:n.timeout,url:t(),success:function(){r(!0)},error:function(){r(!1)}})}catch(t){console.error("e:"+t),r(!1)}},e}();window.Wcae=r,t.exports=r},function(t,e,n){"use strict";n(1),t.exports=function(){var t={ajax:function(t){var e=Object.assign({url:"",type:"GET",header:{},contentType:"application/x-www-form-urlencoded",async:!0,data:{}},t),n=function(){if(!(!window.XMLHttpRequest||window.location&&"file:"===window.location.protocol&&window.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Could not find XHR")}();n.open(e.type.toUpperCase(),e.url,e.async);var o=e.header||{};for(var r in o["Content-Type"]=e.contentType,o)n.setRequestHeader(r,o[r]);n.onreadystatechange=function(){if(4===n.readyState){if(n.status>=200&&n.status<300||304===n.status){var t=e.success;"function"==typeof t&&t(n)}else{var o=e.error;"function"==typeof o&&o(n)}var r=e.complete;"function"==typeof r&&r(n)}},n.send(function(t){if("string"==typeof t)return t;var e=[];for(var n in t)e.push(n+"="+t[n]);return e.join("&")}(e.data)||null)}};return t}()}])},function(t,e,n){"use strict";var o={checkPhone:function(t){return!!/^((13[0-9])|(14[5,7,9])|(15[^4,\D])|(17[0,6-8])|(18[0-9]))\d{8}$/.test(t)},insertArray:function(t,e,n){return t.length<e?t:t.splice(e,0,n)},isObjectNotEmpty:function(t){if("object"!=typeof t||t instanceof Array)return!1;for(var e in t)return!0;return!1},extend:function(t,e){return Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(null==t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o){o=Object(o);for(var r=Object.keys(Object(o)),c=0,a=r.length;c<a;c++){var i=r[c],u=Object.getOwnPropertyDescriptor(o,i);void 0!==u&&u.enumerable&&(e[i]=o[i])}}}return e}}),Object.assign(t,e)}};t.exports=o},,,,,,,,function(t,e,n){"use strict";
/**!
 * URL帮助类
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   陈精任 <jingren.cjr@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/89291)
 */var o=n(6);o.getQueryString=function(t,e){var n="",o="";if(void 0!==e){var r=-1!==e.indexOf("#")?e.indexOf("#"):e.length;n=e.substring(e.indexOf("?"),r),o=e.substring(r,e.length)}else n=window.location.search,o=window.location.hash;var c=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),a=(n||o).substr(1).match(c);return null!=a?decodeURIComponent(a[2]):""},o.delQueryString=function(t,e){var n="";return void 0!==e?n=t+"="+encodeURIComponent(o.getQueryString(t,e)):(e=window.location.href,n=t+"="+encodeURIComponent(o.getQueryString(t))),-1!==e.indexOf("?"+n)?("?"===(e=e.replace(n+"&","").replace(n,""))[e.length-1]&&(e=e.replace("?","")),-1!==e.indexOf("?#")&&(e=e.replace("?#","#"))):e=e.replace("&"+n,""),e},o.queryFormat=function(t,e){if("string"!=typeof t&&(t=""),"object"==typeof e){var n=t.indexOf("#")<0?"":t.substring(t.indexOf("#")),o=t.substring(0,t.indexOf("?")<0?t.length:t.indexOf("?")),r=t.substr(o.length+1,t.length-o.length-n.length-1);n&&(o=o.substring(0,o.indexOf("#")<0?o.length:o.indexOf("#")));var c=r.split("&").filter(function(t){return""!==t}).map(function(t){return t.split("=")});for(var a in e)if(e.hasOwnProperty(a)&&s(e[a])){for(var i=!1,u=0;u<c.length;u++)c[u][0]===a&&(c[u][1]=encodeURIComponent(e[a]),i=!0);i||c.push([a,encodeURIComponent(e[a])])}return c.length>0&&(r="?"+c.map(function(t){return t.join("=")}).join("&")),o+r+n}return t;function s(t){return null!=t&&""!==t}},t.exports=o},function(t,e,n){"use strict";n.r(e);var o=n(0),r={getXhrResult:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.onreadystatechange&&t.responseText)try{t=JSON.parse(t.responseText)}catch(t){console.log("Xhr解析服务器返回数据错误！")}return t}},c=r;
/**!
 * WDJ客户端高速下载外部接入方案(包站项目)
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   徐闻东 <wendong.xwd@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/106725)
 */
n(5);var a=n(2),i=n(14),u="";AWSC.use("um",function(t,e){"loaded"===t?(u="",e.init({appName:"use appname get from registration"},function(t,e){u="success"===t?e.tn:"_defaultToken4_init_failed with "+t+"@@"+location.href+"@@"+(new Date).getTime()})):u="_defaultToken2_load_failed with "+t+"@@"+location.href+"@@"+(new Date).getTime()});var s="";AWSC.use("uab",function(t,e){"loaded"===t&&(s=e)});var l,f,d,p="frvecpeimintnidnut",g="default",h=!0,y=g,v="https://server-m.pp.cn";Wcae.config({timeout:3e3});var m=n(4).errcode,b=function(){var t={};function e(){return"_defaultToken5_wait_timeout with timeout@@"+location.href+"@@"+(new Date).getTime()}function n(t,e){var n="https://ucan.25pp.com/Wandoujia_"+t+".apk";e&&(n+="?x-oss-process=udf/pp-udf,"+e),location.href=n}function r(){return l?!!f||(console.error("channel 为必传参数，请确认是否已经调用 init 方法并传入 channel 参数对 sdk 进行初始化"),!1):(console.error("packageName 为必传参数，请确认是否已经调用 init 方法并传入 packageName 参数对 sdk 进行初始化"),!1)}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(r()){var o=u;if(!s||!o&&n<4)setTimeout(function(){b(t,++n)},500);else{o||(o=e());var c=s.getUA();console.log("ua: "+c),a.ajax({type:"POST",url:v+"/sec/log/access?uc_param_str=".concat(p),dataType:"json",data:{packageName:t.packageName||l,ch_src:f,ch:t.ch||y||g,uToken:o,webUab:c},success:function(t){},error:function(){}})}}}t.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l&&f?console.warn("sdk 已初始化成功，无需重复调用！"):(l=t.packageName||"",f=t.channel||"",d=t.downloadUrl||"",y=t.ch||y,v=t.server||v,"boolean"==typeof t.callWdj&&(h=t.callWdj),r()&&(console.log("sdk 初始化成功！"),b({packageName:l,ch:y,server:v})))},t.checkPackageName=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r()&&a.ajax({type:"POST",url:v+"/sec/download/checkExist?uc_param_str=".concat(p),dataType:"json",data:{packageName:e.packageName||l||"",ch_src:f,ch:e.ch||y},success:function(e){(e=c.getXhrResult(e))&&e.state&&2e6===e.state.code&&e.data?t({code:m.OK,data:e.data}):t({code:m.INTERNAL_ERROR,data:{msg:"服务器返回异常，或者WDJ资源库查无此应用，直接使用durl进行下载目标APP"}})},error:function(){t({code:m.NETWORK_ERROR,data:{msg:"网络请求失败"}})}})};var w=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},g=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(r()){var h=u;if(!s||!h&&g<4)return new Promise(function(e,r){setTimeout(function(){t(n,o,++g).then(function(t){e(t)}).catch(function(t){r(t)})},500)});h||(h=e());var m=n.downloadUrl||d||"",b=s.getUA();return console.log("ua: "+b),new Promise(function(t,e){a.ajax({type:"POST",url:v+"/sec/download/translate?uc_param_str=".concat(p),dataType:"json",data:{packageName:n.packageName||l,ch_src:f,ch:n.ch||y,uToken:h,webUab:b,uc_param_str:p},crossDomain:!0,xhrFields:{withCredentials:!0},success:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(n=c.getXhrResult(n))&&n.state&&2e6===n.state.code&&n.data?(n.data.downloadUrl=i.queryFormat(n.data.downloadUrl,{uToken:h}),t(n.data)):(o.fast&&m&&t({downloadUrl:m}),e(new Error("服务器返回异常，或者WDJ资源库查无此应用，直接使用durl进行下载目标APP")))},error:function(){o.fast&&m&&t({downloadUrl:m}),e(new Error("服务器返回异常，或者WDJ资源库查无此应用，直接使用durl进行下载目标APP"))}})})}};return t.download=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r()&&(o.a.activity({ch_src:"dln_wdj_sec_"+f,ch:"dln_start"},v),w(e).then(function(e){e.downloadUrl&&(o.a.activity({ch_src:"dln_wdj_sec_"+f,ch:"dln_download_success"},v),t({code:m.OK,data:e}),setTimeout(function(){location.href=e.downloadUrl},0))}).catch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.a.activity({ch_src:"dln_wdj_sec_"+f,ch:"dln_download_fail"},v),t({code:m.INTERNAL_ERROR,data:{msg:e.message}})}))},t.downloadFast=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r()&&(o.a.activity({ch_src:"dlf_wdj_sec_"+f,ch:"dlf_start"},v),w(e,{fast:!0}).then(function(e){e.downloadUrl?a.ajax({type:"POST",url:v+"/download/url/wdj2",dataType:"json",data:{channel:f,durl:encodeURIComponent(i.queryFormat(e.downloadUrl,{custom:4}))},success:function(e){if((e=c.getXhrResult(e))&&e.state&&2e6===e.state.code&&e.data){var r=e.data.durlKey||e.data.pnameKey;if(r){if(console.log("尝试呼起豌豆荚客户端进行高速下载(加密方式), "+(e.data.durlKey?"durlKey":"pnameKey")+":"+r),!h)return void n(f,r);Wcae.doSomething(r,function(e){e?(console.log("成功呼起豌豆荚客户端进行高速下载"),t({code:m.OK,data:{status:1,msg:"成功呼起豌豆荚客户端进行高速下载"}}),o.a.activity({ch_src:"dlf_wdj_sec_"+f,ch:"dlf_launch_success"},v)):(o.a.activity({ch_src:"dlf_wdj_sec_"+f,ch:"dlf_launch_fail"},v),console.log("呼起豌豆荚客户端进行高速下载失败（可能WDJ没安装 或者 WDJ已安装但没进程在跑），将直接下载豌豆荚客户端或目标APP"),t({code:m.OK,data:{status:0,msg:"呼起豌豆荚客户端进行高速下载失败，（bs=1）将直接下载豌豆荚客户端"}}),n(f,r))})}else n(f),console.log("服务器返回异常，或者WDJ资源库查无此应用，直接使用durl进行下载目标APP"),t({code:m.INTERNAL_ERROR,data:{msg:"服务器返回异常，或者WDJ资源库查无此应用，直接使用durl进行下载目标APP"}})}else n(f),console.log("服务器返回出错"),t({code:m.INTERNAL_ERROR,data:{msg:"服务器返回出错"}})},error:function(){n(f),console.log("网络请求失败"),t({code:m.NETWORK_ERROR,data:{msg:"网络请求失败"}})}}):n(f)}).catch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t({code:m.NETWORK_ERROR,data:{msg:e.message}}),n(f)}))},t}();window.WdjBZ=b;e.default=b}]);