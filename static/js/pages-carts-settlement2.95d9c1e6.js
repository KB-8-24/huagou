(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-carts-settlement2"],{"0a93":function(t,e,i){var a=i("fbb4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6396c3e3",a,!0,{sourceMap:!1,shadowMode:!1})},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"55f0":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"settlement2"},[i("v-uni-view",{staticClass:"get_goods"},[i("v-uni-view",{class:{active:1==t.receipt_type},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getAddress.apply(void 0,arguments)}}},[t._v("物流配送")]),i("v-uni-view",{class:{active:3==t.receipt_type},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.receipt_type=3}}},[t._v("同城配送")])],1),i("v-uni-view",{staticClass:"address_box"},[1==t.receipt_type?i("v-uni-view",{staticClass:"address"},[t.address?i("v-uni-view",{staticClass:"info",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addAddress("choose")}}},[i("v-uni-view",[t._v("姓名："+t._s(t.address.full_name))]),i("v-uni-view",[t._v("电话："+t._s(t.address.tel))]),t.address.address?i("v-uni-view",[t._v("城市："+t._s(t.address.address.province)+"-"+t._s(t.address.address.city)+"-"+t._s(t.address.address.district))]):t._e(),t.address.address?i("v-uni-view",[t._v("地址："+t._s(t.address.address.area))]):t._e()],1):t._e(),t.address?t._e():i("v-uni-view",{staticClass:"info",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addAddress("add")}}},[t._v("还没有地址，点此去添加")]),i("v-uni-text",{staticClass:"iconfont icon-iconfontjiantou2"})],1):t._e()],1),i("v-uni-view",{staticClass:"orderDetail"},t._l(t.cartsArr,(function(e){return i("v-uni-view",{key:e.shop_id,staticClass:"shop_box"},[i("v-uni-view",{staticClass:"shop_title"},[t._v("店铺："+t._s(e.user_login))]),t._l(e.posts,(function(e){return i("v-uni-view",{key:e.id,staticClass:"list"},[i("v-uni-image",{attrs:{src:e.more.thumbnail,mode:""}}),i("v-uni-view",{staticClass:"title_box"},[i("v-uni-view",{staticClass:"titles txt"},[t._v(t._s(e.post_title))]),i("v-uni-view",{staticClass:"num"},[t._v("数量："+t._s(e.num))]),i("v-uni-view",{staticClass:"price"},[t._v("¥"+t._s(e.post_price))])],1)],1)}))],2)})),1),i("v-uni-picker",{attrs:{value:t.index,range:t.payArr},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"payment bt"},[i("v-uni-view",[t._v("支付方式")]),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.payArr[t.index]))]),i("v-uni-text",{staticClass:"iconfont icon-iconfontjiantou2"})],1)],1)],1),i("v-uni-view",{staticClass:"msg_box bt"},[i("v-uni-view",{staticClass:"msg"},[i("v-uni-textarea",{attrs:{placeholder:"给商家留言(选填，45字内)"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),i("v-uni-view",{staticClass:"payOrder bt"},[i("v-uni-view",[t._v("优惠金额：¥"+t._s(t.totalDiscount))]),i("v-uni-view",{staticClass:"discount"},[t._v("(店铺优惠：¥"+t._s(t.calcData.discounted)+"；积分抵扣：¥"+t._s(t.calcData.coin_total)+")")]),i("v-uni-view",[i("v-uni-text",[t._v("合计支付：")]),i("v-uni-text",[t._v("¥"+t._s(t.calcData.total))])],1)],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveOrder.apply(void 0,arguments)}}},[t._v("提交订单")])],1)],1)},s=[]},"664d":function(t,e){t.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Q0Q3RDBBMDI4MkE4RTUxMUI1MzFBRDg5Mzc4NDQ4OTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MERBMUM0REJBOTIyMTFFNTlCNDQ5MTY2RDBBNUFDMTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MERBMUM0REFBOTIyMTFFNTlCNDQ5MTY2RDBBNUFDMTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MTdGOEM1Mzg2QThFNTExQjUzMUFEODkzNzg0NDg5OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRDdEMEEwMjgyQThFNTExQjUzMUFEODkzNzg0NDg5OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIAAYAggMBEQACEQEDEQH/xAB1AAEBAQEBAAAAAAAAAAAAAAAABQEGCAEBAQEBAAAAAAAAAAAAAAAAAAQFAxAAAQMBBwMFAQAAAAAAAAAAAQARAgNhotITUwQFUXESITGRIjIVEQABAgUEAgMAAAAAAAAAAAAAAQIRYbHREiExAwRBUYEiE//aAAwDAQACEQMRAD8A9Fc0N9MvV8ae3f6xBJ+WBVvXVqbbmf2Ueu+iErLjqxv4VTlKhHjOthlx1Y38KZSoMZ1sMuOrG/hTKVBjOtirw1Pjo1ImdUT3J/EWkAOxIHqpudz4baFnWaxF1X7F97FEaAexAHsQELnv6E4EfWltB7lySe/iCuPJH4NDp/mi+3EDKjrQv4VxNLKVLjKjrQv4UGUqXGVHWhfwoMpUuUeHpcZGtGW5rCVR2p02l4v1JIAXRkPJL2XckINTQ6px0VBjmvYgD2IDHsQH/9k="},"8bd5":function(t,e,i){"use strict";i.r(e);var a=i("55f0"),n=i("b43f");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("f197");var d,o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"c1d0565e",null,!1,a["a"],d);e["default"]=r.exports},b43f:function(t,e,i){"use strict";i.r(e);var a=i("c19a"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},c19a:function(t,e,i){"use strict";i("4de4"),i("4160"),i("fb6a"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{index:1,noClick:!0,payArr:["支付宝支付","微信支付"],goodsId:"",goods_num:"",favorite_id:"",receipt_type:1,pay_type:2,address_id:null,address:"",remark:"",userData:"",cartsArr:[],calcData:"",totalDiscount:null}},onLoad:function(t){var e=uni.getStorageSync("cartsArr");if(0!=e.length){var i=[];e.forEach((function(t,e){i[e]=t,i[e].posts=t.posts.filter((function(t){return!0===t.is_selected}))})),this.cartsArr=i.filter((function(t){return 0!==t.posts.length}))}this.getInfo(),this.getAddress(),this.cartsArr&&this.totalPrice()},methods:{jump:function(t,e,i){this.$app.jump(t,e,i)},bindPickerChange:function(t){this.index=t.target.value,this.pay_type=t.target.value+1},getInfo:function(){var t=this,e={url:"/api.php/wxapp/User/getUserInfo",method:"GET"},i={};this.$api.httpTokenRequest(e,i).then((function(e){t.userData=e.data.data}),(function(t){console.log(t)}))},getAddress:function(){var t=this;this.receipt_type=1;var e=this,i={url:"/api.php/user/Profile/address",method:"POST"},a={};this.$api.httpTokenRequest(i,a).then((function(i){i.data.data.posts&&(t.address_id?i.data.data.posts&&(e.address=i.data.data.posts.filter((function(t){return e.address_id===t.address_id}))[0]):(e.address=i.data.data.posts[0],e.address_id=e.address.address_id))}),(function(t){console.log(t)}))},addAddress:function(t){var e=this;"add"==t?this.$app.jump("/pages/mine/editAddress?type=",t):this.$app.jump("/pages/mine/address?type=",t),uni.$once("addAddress",(function(t){e.address_id=t,e.getAddress()}))},totalPrice:function(){this.calcData="";for(var t=this,e=this.cartsArr,i=0;i<e.length;i++)for(var a=0;a<e[i].posts.length;a++)e[i].posts[a].is_selected&&(t.goodsId+=e[i].posts[a].object_id+"??",t.goods_num+=e[i].posts[a].num+"??",t.favorite_id+=e[i].posts[a].id+"??");var n={url:"/api.php/wxapp/user/favorite_total",method:"POST"},s={object_id:t.goodsId.slice(0,-2)};t.$api.httpTokenRequest(n,s).then((function(e){1==e.data.code&&(t.calcData=e.data.data,t.totalDiscount=Number(t.calcData.discounted)+Number(t.calcData.coin_total))}),(function(t){console.log(t)}))},saveOrder:function(){var t=this;if(uni.showLoading({title:"加载中..."}),this.noClick){if(this.noClick=!1,this.remark.length>90)return uni.showToast({icon:"none",title:"输入字太多了哦！"}),!1;var e={url:"/api.php/portal/Order/saveOrder",method:"POST"},i={post_id:this.goodsId.slice(0,-2),num:this.goods_num.slice(0,-2),favorite_id:this.favorite_id.slice(0,-2),receipt_type:this.receipt_type,pay_type:this.pay_type,address_id:this.address_id,remark:this.remark};setTimeout((function(){t.$api.httpTokenRequest(e,i).then((function(e){if(uni.hideLoading(),999===e.data.code&&(uni.showToast({icon:"none",title:"未登录请先登录！"}),setTimeout((function(){uni.navigateTo({url:"/pages/user/login"})}),1500)),1==e.data.code){console.log(e.data.data);var i=e.data.data.order_no;t.payment(i)}}),(function(t){uni.hideLoading(),console.log(t)})),t.noClick=!0}),1e3)}},payment:function(t){var e={url:"/api.php/wxapp/Wxpay/wx_app",method:"POST"},i={order_no:t,type:4};console.log(i),this.$api.httpTokenRequest(e,i).then((function(t){if(1===t.data.code){var e=t.data.data;uni.requestPayment({provider:"wxpay",orderInfo:JSON.stringify(e),success:function(t){setTimeout((function(){uni.redirectTo({url:"/pages/pay/pay"})}),1e3)},fail:function(t){uni.redirectTo({url:"/pages/order/order"})}})}}),(function(t){console.log(t)}))}}};e.default=a},f197:function(t,e,i){"use strict";var a=i("0a93"),n=i.n(a);n.a},fbb4:function(t,e,i){var a=i("24fb"),n=i("1de5"),s=i("664d");e=a(!1);var d=n(s);e.push([t.i,'@charset "UTF-8";\n/* 自定义变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-c1d0565e]{background-color:#fff}.settlement2 .get_goods[data-v-c1d0565e]{padding:%?25?% %?25?% %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?20?%}.settlement2 .get_goods uni-view[data-v-c1d0565e]{width:48.5%;text-align:center;border:1px solid #ddd;padding:%?15?%;font-size:%?30?%}.settlement2 .get_goods uni-view.active[data-v-c1d0565e]{background-color:#f55d58;border:1px solid #f55d58;color:#fff}.settlement2 .address_box[data-v-c1d0565e]{background-image:url('+d+");background-size:20%;padding:%?6?% 0}.settlement2 .address_box .address[data-v-c1d0565e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fefaf5;padding:%?15?% 0}.settlement2 .address_box .address .info[data-v-c1d0565e]{width:%?600?%;padding:0 %?25?%}.settlement2 .address_box .address .info uni-view[data-v-c1d0565e]{color:#666;font-size:%?26?%;width:%?650?%}.settlement2 .address_box .address uni-text[data-v-c1d0565e]{color:#999;font-size:%?50?%;padding:0 %?25?%}.settlement2 .orderDetail[data-v-c1d0565e]{padding:0 %?25?% %?20?%}.settlement2 .orderDetail .shop_box .shop_title[data-v-c1d0565e]{color:#fca608;border-bottom:1px solid #ddd;padding:%?30?% 0 %?5?% 0}.settlement2 .orderDetail .shop_box .list[data-v-c1d0565e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?10?% 0;border-bottom:1px dashed #ddd}.settlement2 .orderDetail .shop_box .list uni-image[data-v-c1d0565e]{width:%?120?%;height:%?120?%;margin-right:%?20?%}.settlement2 .orderDetail .shop_box .list .title_box[data-v-c1d0565e]{width:%?560?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.settlement2 .orderDetail .shop_box .list .title_box .titles[data-v-c1d0565e]{color:#666}.settlement2 .orderDetail .shop_box .list .title_box .num[data-v-c1d0565e]{color:#666;font-size:%?24?%}.settlement2 .orderDetail .shop_box .list .title_box .price[data-v-c1d0565e]{color:red}.settlement2 .payment[data-v-c1d0565e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?25?%}.settlement2 .payment uni-view[data-v-c1d0565e]{color:#666}.settlement2 .payment uni-view uni-text[data-v-c1d0565e]{color:#666}.settlement2 .msg_box[data-v-c1d0565e]{padding:%?20?% %?25?%}.settlement2 .msg_box .msg[data-v-c1d0565e]{border:1px solid #ddd;border-radius:%?10?%;padding:%?15?%}.settlement2 .msg_box .msg uni-textarea[data-v-c1d0565e]{width:100%;height:%?150?%;font-size:%?26?%}.settlement2 .payOrder[data-v-c1d0565e]{padding:%?20?% %?25?%}.settlement2 .payOrder uni-view[data-v-c1d0565e]{color:red}.settlement2 .payOrder uni-view.discount[data-v-c1d0565e]{color:#666;font-size:%?26?%;padding:%?10?% 0;margin-bottom:%?10?%;border-bottom:1px solid #ccc}.settlement2 .payOrder uni-view uni-text[data-v-c1d0565e]{font-size:%?36?%;color:#000}.settlement2 .payOrder uni-view uni-text.discount[data-v-c1d0565e]{color:red;font-size:%?26?%;margin-left:%?10?%}.settlement2 .payOrder uni-view uni-text[data-v-c1d0565e]:nth-of-type(2){color:red}.settlement2 uni-view.btn[data-v-c1d0565e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?50?% %?25?%}.settlement2 uni-view.btn uni-view[data-v-c1d0565e]{width:%?550?%;padding:%?20?% 0;text-align:center;color:#fff;background-color:#f55d58;border-radius:%?10?%;font-size:%?32?%}body.?%PAGE?%[data-v-c1d0565e]{background-color:#fff}",""]),t.exports=e}}]);