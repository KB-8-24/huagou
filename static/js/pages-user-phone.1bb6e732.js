(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-phone"],{"4f8e":function(t,e,n){var i=n("7a87");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8e6f6e90",i,!0,{sourceMap:!1,shadowMode:!1})},"6ffe":function(t,e,n){"use strict";var i=n("4f8e"),a=n.n(i);a.a},7523:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{userData:""}},onLoad:function(){this.getInfo()},methods:{getInfo:function(){var t=this,e={url:"/api.php/wxapp/User/getUserInfo",method:"GET"},n={};this.$api.httpTokenRequest(e,n).then((function(e){t.userData=e.data.data}),(function(t){console.log(t)}))},changePhone:function(){if(!/^1[23456789]\d{9}$/.test(this.userData.mobile))return uni.showToast({title:"手机号格式不正确",icon:"none"}),!1;var t={url:"/api.php/user/Profile/bind_mobile",method:"POST"},e={mobile:this.userData.mobile};this.$api.httpTokenRequest(t,e).then((function(t){console.log(t),uni.showToast({icon:"none",title:t.data.msg})}),(function(t){console.log(t)}))}}};e.default=i},"7a87":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 自定义变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.phone .info[data-v-5f0fec90]{background-color:#fff}.phone .info .list[data-v-5f0fec90]{padding:%?25?% %?30?%;border-bottom:1px solid #ddd;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.phone .info .list .optionName[data-v-5f0fec90]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?10?%}.phone .info .list .optionName uni-text[data-v-5f0fec90]{color:#666}.phone .info .list .optionName uni-text.iconfont[data-v-5f0fec90]{color:#f55d58;font-size:%?36?%;margin-right:%?10?%}.phone .btn[data-v-5f0fec90]{background-color:#fff;padding:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.phone .btn uni-view[data-v-5f0fec90]{width:%?600?%;text-align:center;padding:%?20?% %?0?%;background-color:#f55d58;color:#fff;font-size:%?32?%;border-radius:%?10?%}',""]),t.exports=e},a35a:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"phone"},[n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"optionName"},[n("v-uni-text",[t._v("手机号：")])],1),n("v-uni-view",[n("v-uni-input",{attrs:{placeholder:"输入手机号",type:"text"},model:{value:t.userData.mobile,callback:function(e){t.$set(t.userData,"mobile",e)},expression:"userData.mobile"}})],1)],1)],1),n("v-uni-view",{staticClass:"btn"},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changePhone.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},o=[]},bdd8:function(t,e,n){"use strict";n.r(e);var i=n("a35a"),a=n("df8e");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("6ffe");var s,f=n("f0c5"),r=Object(f["a"])(a["default"],i["b"],i["c"],!1,null,"5f0fec90",null,!1,i["a"],s);e["default"]=r.exports},df8e:function(t,e,n){"use strict";n.r(e);var i=n("7523"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);