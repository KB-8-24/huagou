(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-coupon"],{"3cdd":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"coupon"},[n("v-uni-view",{staticClass:"topbgc"}),n("v-uni-view",{staticClass:"content_coupon"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",[t._v("所有优惠券")]),n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump.apply(void 0,arguments)}}},[t._v("我的优惠券"),n("v-uni-text",{staticClass:"iconfont icon-left"})],1)],1),t._l(t.couponArr,(function(e){return n("v-uni-view",{key:e.id,staticClass:"list"},[t.couponArr?n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"qq"}),n("v-uni-view",{staticClass:"qq"}),n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"tips"},[t._v("优惠券")]),n("v-uni-view",{staticClass:"price"},[n("v-uni-text",[t._v("¥")]),n("v-uni-text",[t._v(t._s(e.min))])],1),n("v-uni-view",{staticClass:"time"},[t._v("开始时间："+t._s(t.formatDate(e.start)))]),n("v-uni-view",{staticClass:"time"},[t._v("结束时间："+t._s(t.formatDate(e.end)))])],1),e.shop?n("v-uni-view",{staticClass:"right"},[e.shop?n("v-uni-view",{staticClass:"shop txt"},[t._v(t._s(e.shop))]):t._e(),n("v-uni-view",{staticClass:"condition"},[t._v(t._s(e.code))]),n("v-uni-view",{staticClass:"getBtn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getCoupon(e.id)}}},[t._v("立即领取")])],1):t._e()],1):t._e()],1)}))],2)],1)},a=[]},7043:function(t,e,n){var o=n("ae49");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("cb3419d6",o,!0,{sourceMap:!1,shadowMode:!1})},"7dac":function(t,e,n){"use strict";n.r(e);var o=n("3cdd"),i=n("bc69");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("e488");var c,s=n("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"e7149588",null,!1,o["a"],c);e["default"]=r.exports},"9d96":function(t,e,n){"use strict";n("d81d"),n("fb6a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{couponArr:[],shopId:null}},onLoad:function(){this.getCouponList()},methods:{jump:function(){this.$app.jump("/pages/mine/myCoupon","")},getCouponList:function(){var t=this,e=this,n={url:"/api.php/portal/lists/coupon",method:"POST"},o={};this.$api.httpTokenRequest(n,o).then((function(n){t.couponArr=n.data.data,t.couponArr.map((function(t,n){e.$set(t,"shop",e.getShopList(t))}))}),(function(t){console.log(t)}))},getShopList:function(t){var e={url:"/api.php/portal/articles/shop",method:"POST"},n={id:t.shop_id};this.$api.httpTokenRequest(e,n).then((function(e){1==e.data.code&&(t.shop=e.data.data.user_login)}),(function(t){console.log(t)}))},getCoupon:function(t){var e={url:"/api.php/wxapp/user/do_coupon",method:"POST"},n={coupon_id:t};this.$api.httpTokenRequest(e,n).then((function(t){1==t.data.code&&uni.showToast({title:"已领取优惠券！",duration:2e3,icon:"none"}),0==t.data.code&&uni.showToast({title:t.data.msg,duration:2e3,icon:"none"})}),(function(t){console.log(t)}))},formatDate:function(t){var e=new Date(1e3*t),n=e.getFullYear(),o=("0"+(e.getMonth()+1)).slice(-2),i=("0"+e.getDate()).slice(-2),a=("0"+e.getHours()).slice(-2),c=("0"+e.getMinutes()).slice(-2),s=("0"+e.getSeconds()).slice(-2),r=n+"-"+o+"-"+i+" "+a+":"+c+":"+s;return r}}};e.default=o},ae49:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 自定义变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-e7149588]{background-color:#fff}.coupon[data-v-e7149588]{padding:0 0 %?50?% 0}.coupon .topbgc[data-v-e7149588]{top:2var --status-bar-height;position:fixed;width:100%;height:%?600?%;background-image:-webkit-linear-gradient(top,#f55d58,#f55d58,#f8aba8,#fdfdfa);background-image:linear-gradient(180deg,#f55d58,#f55d58,#f8aba8,#fdfdfa);border-bottom-left-radius:%?300?%;border-bottom-right-radius:%?300?%}.coupon .content_coupon .title[data-v-e7149588]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?100?% %?36?%}.coupon .content_coupon .title uni-view[data-v-e7149588]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff;width:50%}.coupon .content_coupon .title uni-view[data-v-e7149588]:nth-of-type(1){border-right:1px solid #fff}.coupon .content_coupon .title uni-view uni-text[data-v-e7149588]{color:#fff}.coupon .content_coupon .list[data-v-e7149588]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?36?%}.coupon .content_coupon .list .box[data-v-e7149588]{width:%?680?%;background-color:rgba(248,9,9,.64);border-radius:%?20?%;padding:%?20?% 0 %?20?% %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-content:center;align-content:center;box-shadow:%?0?% %?10?% %?15?% %?2?% rgba(0,0,0,.3);position:relative;overflow:hidden}.coupon .content_coupon .list .box .qq[data-v-e7149588]{position:absolute;width:%?25?%;height:%?25?%;border-radius:50%;background-color:#fff}.coupon .content_coupon .list .box .qq[data-v-e7149588]:nth-of-type(1){top:%?20?%}.coupon .content_coupon .list .box .qq[data-v-e7149588]:nth-of-type(2){bottom:%?20?%}.coupon .content_coupon .list .box .left[data-v-e7149588]{width:60%;border-right:2px dashed #ddd;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?10?%}.coupon .content_coupon .list .box .left .price[data-v-e7149588]{padding:%?6?% 0}.coupon .content_coupon .list .box .left .price uni-text[data-v-e7149588]{font-size:%?36?%;color:#fbff00}.coupon .content_coupon .list .box .left .price uni-text[data-v-e7149588]:nth-of-type(2){font-size:%?66?%;line-height:%?66?%}.coupon .content_coupon .list .box .left .tips[data-v-e7149588]{color:#fff;position:relative;font-size:%?26?%}.coupon .content_coupon .list .box .left .tips[data-v-e7149588]::before{content:"";display:inline-block;height:%?1?%;width:%?100?%;background-color:#fff;position:absolute;left:%?-120?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);top:50%}.coupon .content_coupon .list .box .left .tips[data-v-e7149588]::after{content:"";display:inline-block;height:%?1?%;width:%?100?%;background-color:#fff;position:absolute;right:%?-120?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);top:50%}.coupon .content_coupon .list .box .left .time[data-v-e7149588]{color:#f4f4f4;font-size:%?24?%;-webkit-transform:scale(.9);transform:scale(.9)}.coupon .content_coupon .list .box .right[data-v-e7149588]{width:40%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.coupon .content_coupon .list .box .right uni-view[data-v-e7149588]{color:#fff}.coupon .content_coupon .list .box .right uni-view.shop[data-v-e7149588]{font-size:%?32?%;width:%?240?%;text-align:center;color:#ffee8c}.coupon .content_coupon .list .box .right uni-view.condition[data-v-e7149588]{font-size:%?28?%;padding:%?15?% 0}.coupon .content_coupon .list .box .right uni-view.getBtn[data-v-e7149588]{background-image:-webkit-linear-gradient(top,#fdf9f2,#d89103);background-image:linear-gradient(180deg,#fdf9f2,#d89103);color:#925301;padding:%?5?% %?30?%;border-radius:%?60?%;font-size:%?26?%}body.?%PAGE?%[data-v-e7149588]{background-color:#fff}',""]),t.exports=e},bc69:function(t,e,n){"use strict";n.r(e);var o=n("9d96"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},e488:function(t,e,n){"use strict";var o=n("7043"),i=n.n(o);i.a}}]);