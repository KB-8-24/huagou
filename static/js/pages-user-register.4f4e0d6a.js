(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-register"],{"16f9":function(t,e,i){"use strict";var n=i("8935"),a=i.n(n);a.a},"23f7":function(t,e,i){"use strict";i.r(e);var n=i("fe63"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"6a62":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 自定义变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-a6807c8c]{background-color:#f5f5f5}.register .box[data-v-a6807c8c]{padding:%?10?% %?25?%;margin-top:%?10?%}.register .box uni-text[data-v-a6807c8c]{font-size:%?32?%;color:#666}.register .box uni-text.iconfont[data-v-a6807c8c]{color:red}.register .box.inp[data-v-a6807c8c]{height:%?80?%;margin-top:0;background-color:#fff;border-top:1px solid #ddd;border-bottom:1px solid #ddd;padding:%?10?% %?25?%;margin-bottom:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.register .box.inp uni-text[data-v-a6807c8c]{font-size:%?28?%;background-color:#f55d58;color:#fff;padding:%?5?% %?20?%;border-radius:%?20?%}.register .box.inp uni-text.active[data-v-a6807c8c]{background-color:#666}.register .box.inp uni-input[data-v-a6807c8c]{width:100%}.register .box.inp uni-input.yzm[data-v-a6807c8c]{width:%?400?%}.register .sex_box[data-v-a6807c8c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?25?%}.register .sex_box .sex[data-v-a6807c8c]{color:#666;font-size:%?32?%}.register .sex_box uni-label[data-v-a6807c8c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?30?%}.register .agree[data-v-a6807c8c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%}.register .agree uni-view[data-v-a6807c8c]{margin:0 %?10?%}.register .agree uni-text[data-v-a6807c8c]{color:#f55d58}.register .btn[data-v-a6807c8c]{text-align:center;padding:%?20?%;background-color:#f55d58;margin:%?20?% %?25?%;border-radius:%?10?%;font-size:%?32?%}.register .btn.reg[data-v-a6807c8c]{color:#fff}.register .btn.log[data-v-a6807c8c]{background-color:#fff;color:#666}body.?%PAGE?%[data-v-a6807c8c]{background-color:#f5f5f5}',""]),t.exports=e},8935:function(t,e,i){var n=i("6a62");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("493511f0",n,!0,{sourceMap:!1,shadowMode:!1})},"9e60":function(t,e,i){"use strict";i.r(e);var n=i("af42"),a=i("23f7");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("16f9");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"a6807c8c",null,!1,n["a"],s);e["default"]=r.exports},af42:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"register"},[i("v-uni-view",{staticClass:"box"},[i("v-uni-text",[t._v("用户名")]),i("v-uni-text",{staticClass:"iconfont icon-gonggong-xinghao"})],1),i("v-uni-view",{staticClass:"box inp"},[i("v-uni-input",{attrs:{type:"text",placeholder:"不少于2个字符，建议用英文字母、下划线或数字"},model:{value:t.user_login,callback:function(e){t.user_login=e},expression:"user_login"}})],1),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",[t._v("密码")]),i("v-uni-text",{staticClass:"iconfont icon-gonggong-xinghao"})],1),i("v-uni-view",{staticClass:"box inp"},[i("v-uni-input",{attrs:{type:"password",placeholder:"不少于6个字符，建议用英文加数字或符号"},model:{value:t.salt,callback:function(e){t.salt=e},expression:"salt"}})],1),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",[t._v("手机号")]),i("v-uni-text",{staticClass:"iconfont icon-gonggong-xinghao"})],1),i("v-uni-view",{staticClass:"box inp"},[i("v-uni-input",{attrs:{type:"text"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",[t._v("验证码")]),i("v-uni-text",{staticClass:"iconfont icon-gonggong-xinghao"})],1),i("v-uni-view",{staticClass:"box inp"},[i("v-uni-input",{staticClass:"yzm",attrs:{type:"text"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),i("v-uni-text",{class:{active:t.codeColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[t._v(t._s(t.countDownNum))])],1),i("v-uni-radio-group",{staticClass:"sex_box",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"sex"},[t._v("性别：")]),i("v-uni-label",{attrs:{for:"sex"}},[i("v-uni-radio",{staticClass:"sx7",attrs:{value:"1",checked:"sex==1"}}),i("v-uni-text",[t._v("男")])],1),i("v-uni-label",{attrs:{for:"sex"}},[i("v-uni-radio",{staticClass:"sx7",attrs:{value:"2"}}),i("v-uni-text",[t._v("女")])],1)],1),i("v-uni-view",{staticClass:"box"},[i("v-uni-text",[t._v("推荐人邀请码")])],1),i("v-uni-view",{staticClass:"box inp"},[i("v-uni-input",{attrs:{type:"text"},model:{value:t.parent_id,callback:function(e){t.parent_id=e},expression:"parent_id"}})],1),i("v-uni-view",{staticClass:"agree"},[i("v-uni-checkbox",{staticClass:"sx8",attrs:{value:"cb",checked:t.readAgree},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.read.apply(void 0,arguments)}}}),i("v-uni-view",[t._v("已阅读并同意")]),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("/pages/user/agreement")}}},[t._v("用户注册协议")])],1),i("v-uni-view",{staticClass:"btn reg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.registerBtm.apply(void 0,arguments)}}},[t._v("注册")]),i("v-uni-view",{staticClass:"btn log",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("/pages/user/login","")}}},[t._v("登录")])],1)},o=[]},fe63:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=i("2f62"),s={data:function(){return{user_login:"",mobile:"",salt:"",code:null,sex:1,parent_id:"",readAgree:!1,iscode:!0,countDownNum:"获取验证码",codeNum:0,codeColor:!1}},methods:(0,a.default)({jump:function(t,e,i){this.$app.jump(t,e,i)},radioChange:function(t){this.sex=t.detail.value},read:function(){this.readAgree=!this.readAgree},sendCode:function(){var t=this;if(!/^1[23456789]\d{9}$/.test(this.mobile))return uni.showToast({title:"手机号格式不正确",icon:"none"}),!1;var e={url:"/api.php/wxapp/Public/send",method:"POST"},i={mobile:this.mobile};this.$api.httpRequest(e,i).then((function(e){if(e.data.code){t.codeColor=!0,t.codeNum=1,t.iscode=!1;var i=t;i.countDownNum="60s后重新获取";var n=60,a=setInterval((function(){n--,i.countDownNum=n+"s后重新获取",n<=0&&(t.codeColor=!1,clearInterval(a),i.countDownNum="获取验证码",i.iscode=!0)}),1e3)}uni.showToast({title:"发送成功！",icon:"none",duration:2e3})}),(function(t){console.log(t)}))},registerBtm:function(){if(this.user_login.length<2||this.user_login.length>50)return uni.showModal({content:"请输入正确到用户名",showCancel:!1}),!1;if(this.salt.length<6||this.salt.length>12)return uni.showModal({content:"密码需在6位到12位之间",showCancel:!1}),!1;if(!/^1[23456789]\d{9}$/.test(this.mobile))return uni.showToast({title:"请输入正确的手机号！",icon:"none"}),!1;if(!/^[0-9]{6}$/.test(this.code))return uni.showToast({title:"验证码格式不正确",icon:"none"}),!1;if(!this.readAgree)return uni.showToast({title:"请先阅读协议",icon:"none"}),!1;var t={url:"/api.php/wxapp/public/doRegister",method:"POST"},e={user_login:this.user_login,mobile:this.mobile,salt:this.salt,code:this.code,sex:this.sex,parent_id:this.parent_id},i=this;this.$api.httpRequest(t,e).then((function(t){1==t.data.code&&(i.login(t.data.data.token),uni.showToast({title:t.data.msg,icon:"none",duration:2e3}),setTimeout((function(){i.$app.jump("/pages/user/login?type=","register")}),1e3))}),(function(t){console.log(t)}))}},(0,o.mapMutations)(["login"]))};e.default=s}}]);