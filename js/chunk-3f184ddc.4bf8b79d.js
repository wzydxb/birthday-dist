(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f184ddc"],{"1e4b":function(t,i,e){"use strict";e.r(i);e("14d9");var s=function(){var t=this,i=t._self._c;return i("div",[i("div",{staticStyle:{height:"100vh"}},[i("iframe",{staticStyle:{height:"100vh",width:"100vw"},attrs:{src:"/xxx/if/index.html",frameborder:"0"}}),i("div",{staticClass:"choutbn_box"},[i("img",{staticClass:"choutbn animate__loop",attrs:{src:"img/but.png",alt:""},on:{click:t.choujiang}})]),i("div",{staticClass:"v2Btn gradient-button",on:{click:t.toV2}},[t._v("v2.0入口")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mask animate__animated animate__bounce"},[i("div",{staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"block animate__animated animate__pulse animate__loop"},[i("div",{staticClass:"load_bg"}),i("div",{staticClass:"pages page_index"},[i("div",{staticClass:"main_box"},[i("div",{staticClass:"lottery_box"},[i("div",{staticClass:"list_box"},[t._l(t.getList,(function(e,s){return i("div",{key:s,staticClass:"list",attrs:{prize:e.prize}},[i("div",{staticClass:"list_ev"},[i("div",[i("img",{attrs:{src:"img/wxbg.png"}}),i("div",{staticClass:"name"},[t._v(t._s(e.prize))])])])])})),t._m(0)],2),i("img",{staticClass:"img_wid",attrs:{src:"img/but_bg.png"}})])])])])]),2==t.init?i("h3",{staticClass:"footerB animate__animated animate__fadeIn",staticStyle:{bottom:"35vh",color:"rgb(108 255 236)"},on:{click:function(i){return t.$router.push("/my")}}},[t._v(" 获取更多抽奖次数>>> ")]):t._e(),2==t.init&&t.totalPrice<1314?i("h3",{staticClass:"footerB animate__animated animate__fadeIn",staticStyle:{bottom:"30vh"}},[t._v(" 满 1314 元才可以提现哦!还差"+t._s(parseFloat(1314-t.totalPrice).toFixed(2))+"元 ")]):t._e(),2==t.init&&t.totalPrice>=1314?i("h3",{staticClass:"footerB animate__animated animate__fadeIn",staticStyle:{bottom:"30vh"}},[t._v(" 已满 1314 元，请截图到五只羊那里去领取奖金吧！ ")]):t._e(),i("h1",{staticClass:"footerB animate__animated animate__fadeIn"},[t._v(" 累计奖金："),i("span",{staticClass:"down"},[t._v(t._s(t.totalPrice))]),t._v(" 元 ")]),i("h1",{staticClass:"footerT animate__animated animate__fadeIn"},[t._v(" 亲亲还剩余抽奖次数："+t._s(t.prizenum)+" ")])]),i("van-dialog",{attrs:{theme:"round-button"},on:{confirm:t.sconfirm},scopedSlots:t._u([{key:"title",fn:function(){return[i("span",[t._v("恭喜：奖金"),i("span",{staticStyle:{color:"#ff6c6c","font-weight":"600"}},[t._v(t._s(t.currentPrize))])])]},proxy:!0}]),model:{value:t.gongxishow,callback:function(i){t.gongxishow=i},expression:"gongxishow"}},[i("img",{staticStyle:{height:"200px"},attrs:{src:e("d8dd")}})]),i("van-dialog",{attrs:{theme:"round-button","before-close":t.beforeClose},on:{confirm:t.confirm},scopedSlots:t._u([{key:"title",fn:function(){return[i("span",[t._v("很遗憾，您没有中奖")]),i("h3",[t._v("感谢参与")]),i("h4",{staticStyle:{color:"#ff6c6c","font-weight":"600"}},[t._v(" 别灰心，输入神秘代码有惊喜 ")]),i("van-password-input",{attrs:{value:t.code,mask:!1,focused:t.initShow},on:{focus:function(i){t.initShow=!0}}}),t.tipsShow?i("h6",{staticStyle:{color:"#676767","font-weight":"600"}},[i("span",{staticStyle:{color:"#ff6c6c"}},[t._v("输入错误哟")]),i("br"),t._v("tips: 诞辰 ")]):t._e()]},proxy:!0}]),model:{value:t.initShow,callback:function(i){t.initShow=i},expression:"initShow"}}),i("van-number-keyboard",{directives:[{name:"show",rawName:"v-show",value:t.initShow,expression:"initShow"}],attrs:{show:t.initShow},model:{value:t.code,callback:function(i){t.code=i},expression:"code"}})],1)},o=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"list_but"},[i("img",{staticClass:"img_wid",attrs:{src:"img/but.png"}})])}],a=e("d399"),n=e("2241"),r={data(){return localStorage.getItem("prizenum")||localStorage.setItem("prizenum",1),localStorage.getItem("totalPrice")||localStorage.setItem("totalPrice",0),localStorage.getItem("init")||localStorage.setItem("init",1),{prizenum:Number(localStorage.getItem("prizenum")),totalPrice:Number(localStorage.getItem("totalPrice")),init:localStorage.getItem("init"),code:"",currentPrize:0,showKeyboard:!0,gongxishow:!1,initShow:!1,show:!1,speed:60,zpnum:0,count:0,zpjp:-1,clicktype:!0,totalCount:6,errorList:[{prize:"88元"},{prize:"20元"},{prize:"200元"},{prize:"50元"},{prize:"30元"},{prize:"8元"},{prize:"520元"},{prize:"0元"}],list:[{prize:"1314元"},{prize:"1314元"},{prize:"1314元"},{prize:"1314元"},{prize:"520元"},{prize:"520元"},{prize:"520元"},{prize:"520元"}],listofinit3:[{prize:"1元"},{prize:"3元"},{prize:"4元"},{prize:"5元"},{prize:"6元"},{prize:"7元"},{prize:"8元"},{prize:"10元"}],tipsShow:!1}},computed:{getList(){return"1"==this.init?this.errorList:"2"==this.init?this.listofinit3:this.list}},watch:{prizenum(t){localStorage.setItem("prizenum",t)},totalPrice(t){localStorage.setItem("totalPrice",t)},init(t){localStorage.setItem("init",t)}},mounted(){window.xxx1(),window.xxx2(document,window),this.indexFun(),this.$bus.$on("prizenum",t=>{this.prizenum=t})},methods:{beforeClose(t,i){"990624"==this.code?(Object(a["a"])("等宝贝儿好久啦！开启隐藏模式！"),this.$set(this,"init",0),localStorage.setItem("init",0),localStorage.setItem("prizenum",1),this.prizenum=1,i()):(this.tipsShow=!0,i(!1))},confirm(){},sconfirm(){n["a"].alert({title:"不好！",message:"您的奖金被老鼠调走了一部分，好在还剩下800元"}).then(()=>{this.down({el:window.$(".down"),max:1314,end:800}),localStorage.setItem("init",2),this.$set(this,"init",2)})},choujiang(){this.show=!0},toV2(){this.$router.push("/v2")},indexFun(){window.$(".load_bg").remove(),window.$(".page_index .lottery_box").on("click",".list_but",()=>{if(0==this.prizenum)return 1==this.init&&(this.initShow=!0),Object(a["a"])("抽奖次数已用完哇"),!1;if(0==this.clicktype)return!1;this.prizenum--,localStorage.setItem("prizenum",this.prizenum),this.clicktype=!1,1==this.init?this.zpjp=7:"2"==this.init?this.zpjp=parseInt(7*Math.random())+1:this.zpjp=2;const t=this.zpjp;console.log(this.zpjp,"this.zpjp"),this.zpfun(()=>{setTimeout(()=>{this.speed=60,this.zpnum=0,this.count=0,this.zpjp=-1,this.clicktype=!0,"1"==this.init?this.initShow=!0:"2"==this.init?(Object(a["a"])("恭喜您获得"+this.listofinit3[t].prize),localStorage.setItem("totalPrice",this.totalPrice+parseFloat(this.listofinit3[t].prize)),this.totalPrice=parseFloat(localStorage.getItem("totalPrice"))):(localStorage.setItem("totalPrice",this.totalPrice+parseFloat(this.list[t].prize)),this.totalPrice=parseFloat(localStorage.getItem("totalPrice")),this.currentPrize=this.list[t].prize,this.gongxishow=!0,Object(a["a"])("恭喜您获得"+this.list[t].prize))},600)})})},zpfun(t){this.zpnum++,this.count>this.totalCount&&this.zpnum==this.zpjp?(t(),setTimeout(()=>{window.$(".lottery_box .list_box").attr("class","list_box")},800)):(this.zpnum>7&&(this.zpnum=0,this.count++),this.count>=this.totalCount&&(this.speed+=30),setTimeout(()=>{this.zpfun(t)},this.speed)),window.$(".lottery_box .list_box").attr("class","list_box list_box"+this.zpnum)},down(t){var i=t.el,e=t.max,s=t.end;let o=setInterval((function(){e--,e<s&&(e=s,clearInterval(o)),i.text(e)}),1);this.totalPrice=800,localStorage.setItem("totalPrice",800)}}},l=r,c=(e("6cde"),e("2877")),h=Object(c["a"])(l,s,o,!1,null,null,null);i["default"]=h.exports},"5f83":function(t,i,e){},"6cde":function(t,i,e){"use strict";e("5f83")},d8dd:function(t,i,e){t.exports=e.p+"img/780.4eac7ef6.jpg"}}]);