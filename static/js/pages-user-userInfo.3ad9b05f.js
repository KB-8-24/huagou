(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-userInfo"],{"0979":function(t,e,a){"use strict";a.r(e);var i=a("2d37"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"1af7":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 自定义变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.userInfo .info[data-v-9b52ba2a]{background-color:#fff}.userInfo .info .list[data-v-9b52ba2a]{position:relative;padding:%?25?% %?30?%;border-bottom:1px solid #ddd;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.userInfo .info .list .sex_box[data-v-9b52ba2a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.userInfo .info .list .sex_box .sex[data-v-9b52ba2a]{color:#666;font-size:%?30?%}.userInfo .info .list .sex_box uni-label[data-v-9b52ba2a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?30?%}.userInfo .info .list[data-v-9b52ba2a]:nth-of-type(1){-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?10?% %?30?%}.userInfo .info .list .optionName[data-v-9b52ba2a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?10?%}.userInfo .info .list .optionName uni-text[data-v-9b52ba2a]{color:#666}.userInfo .info .list .optionName uni-text.iconfont[data-v-9b52ba2a]{color:red}.userInfo .info .list .img[data-v-9b52ba2a]{width:%?500?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.userInfo .info .list .img uni-image[data-v-9b52ba2a]{width:%?80?%;height:%?80?%;border-radius:50%}.userInfo .info .list .img uni-text[data-v-9b52ba2a]{margin-left:%?15?%}.userInfo .btn[data-v-9b52ba2a]{background-color:#fff;padding:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.userInfo .btn uni-view[data-v-9b52ba2a]{width:%?600?%;text-align:center;padding:%?20?% %?0?%;background-color:#f55d58;color:#fff;font-size:%?32?%;border-radius:%?10?%}',""]),t.exports=e},"209d":function(t,e,a){"use strict";a.r(e);var i=a("25c0"),n=a("0979");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("abdd");var o,r=a("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"9b52ba2a",null,!1,i["a"],o);e["default"]=u.exports},"25c0":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"userInfo"},[a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.photoUpload.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"optionName"},[a("v-uni-text",[t._v("用户头像：")])],1),a("v-uni-view",{staticClass:"img"},[a("v-uni-image",{attrs:{src:t.imgSrc,mode:""}}),a("v-uni-text",{staticClass:"iconfont icon-youjiantou"})],1)],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"optionName"},[a("v-uni-text",[t._v("用户名：")])],1),a("v-uni-view",{staticClass:"text"},[a("v-uni-input",{attrs:{type:"text"},model:{value:t.userData.user_login,callback:function(e){t.$set(t.userData,"user_login",e)},expression:"userData.user_login"}})],1)],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"optionName"},[a("v-uni-text",{attrs:{space:"emsp"}},[t._v("性 别：")])],1),a("v-uni-radio-group",{staticClass:"sex_box",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},[a("v-uni-label",{attrs:{for:"sex"}},[a("v-uni-radio",{staticClass:"sx7",attrs:{value:"1",checked:1==t.userData.sex}}),a("v-uni-text",[t._v("男")])],1),a("v-uni-label",{attrs:{for:"sex"}},[a("v-uni-radio",{staticClass:"sx7",attrs:{value:"2",checked:2==t.userData.sex}}),a("v-uni-text",[t._v("女")])],1)],1)],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"optionName"},[a("v-uni-text",{attrs:{space:"emsp"}},[t._v("微信收款账号：")])],1),a("v-uni-view",[a("v-uni-input",{attrs:{type:"text"},model:{value:t.userData.wechat,callback:function(e){t.$set(t.userData,"wechat",e)},expression:"userData.wechat"}})],1)],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"optionName"},[a("v-uni-text",{attrs:{space:"emsp"}},[t._v("支付宝收款账号：")])],1),a("v-uni-view",[a("v-uni-input",{attrs:{type:"text"},model:{value:t.userData.alipay,callback:function(e){t.$set(t.userData,"alipay",e)},expression:"userData.alipay"}})],1)],1)],1),a("v-uni-view",{staticClass:"btn"},[a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editeUserInfo.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},s=[]},"2d37":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{imgSrc:"",userData:""}},onLoad:function(){this.getInfo()},methods:{radioChange:function(t){this.userData.sex=t.detail.value,console.log(this.userData.sex)},getInfo:function(){var t=this,e={url:"/api.php/wxapp/User/getUserInfo",method:"GET"},a={};this.$api.httpTokenRequest(e,a).then((function(e){t.userData=e.data.data,t.imgSrc=t.userData.avatar}),(function(t){console.log(t)}))},photoUpload:function(){var t=this,e=this;uni.chooseImage({success:function(a){var i=a.tempFilePaths;t.imgSrc=i[0],uni.uploadFile({url:t.$api.baseUrl+"/api.php/wxapp/user/photo_upload",filePath:i[0],name:"file",success:function(t){e.imgSrc=JSON.parse(t.data).data.value}})}})},editeUserInfo:function(){var t=this,e={url:"/api.php/user/Profile/edit",method:"POST"},a={avatar:this.imgSrc,user_login:this.userData.user_login,sex:this.userData.sex,wechat:this.userData.wechat,alipay:this.userData.alipay};this.$api.httpTokenRequest(e,a).then((function(e){uni.showToast({icon:"none",title:e.data.msg}),t.getInfo()}),(function(t){console.log(t)}))}}};e.default=i},aaf5:function(t,e,a){var i=a("1af7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3e023340",i,!0,{sourceMap:!1,shadowMode:!1})},abdd:function(t,e,a){"use strict";var i=a("aaf5"),n=a.n(i);n.a}}]);