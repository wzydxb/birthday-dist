(function(e){function t(t){for(var n,r,a=t[0],s=t[1],d=t[2],l=0,u=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&u.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);h&&h(t);while(u.length)u.shift()();return o.push.apply(o,d||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,r=1;r<i.length;r++){var a=i[r];0!==c[a]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},r={app:0},c={app:0},o=[];function a(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0cfa15":"0ba30c37","chunk-2d21788c":"ec10e40e","chunk-3aef3e74":"461de416","chunk-3f184ddc":"4bf8b79d","chunk-668f3c62":"7d7a3507"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(e){var t=[],i={"chunk-3f184ddc":1,"chunk-668f3c62":1};r[e]?t.push(r[e]):0!==r[e]&&i[e]&&t.push(r[e]=new Promise((function(t,i){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0cfa15":"31d6cfe0","chunk-2d21788c":"31d6cfe0","chunk-3aef3e74":"31d6cfe0","chunk-3f184ddc":"1c3e17bc","chunk-668f3c62":"b6133a37"}[e]+".css",c=s.p+n,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var d=o[a],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===c))return t()}var u=document.getElementsByTagName("style");for(a=0;a<u.length;a++){d=u[a],l=d.getAttribute("data-href");if(l===n||l===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],h.parentNode.removeChild(h),i(o)},h.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){r[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=c[e]=[t,i]}));t.push(n[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e);var u=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(h);var i=c[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,i[1](u)}c[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/xxx/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var h=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);var n=i("2b0e"),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"van-fade",mode:"out-in"}},[t("div",{staticClass:"app"},[t("keep-alive",[t("router-view",{key:e.key})],1)],1)]),e.$route.meta.hidden?e._e():t("van-tabbar",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[t("van-tabbar-item",{attrs:{route:"",replace:"",to:"/index",icon:"home-o"}}),t("van-tabbar-item",{attrs:{route:"",replace:"",to:"/my",icon:"user-o"}})],1)],1)},c=[],o={name:"App",data(){return{active:this.$route.meta.active}},created(){console.log(this.$route),this.active=this.$route.meta.active},watch:{"$route.meta.active":{handler(e){console.log(e),this.active=e},immediate:!0}},components:{},computed:{key(){return this.$route.path}}},a=o,s=(i("859e"),i("2877")),d=Object(s["a"])(a,r,c,!1,null,null,null),l=d.exports,u=i("b970"),h=(i("157a"),i("8c4f"));n["a"].use(h["a"]);const p=[{path:"/",redirect:"/index",hidden:!0},{path:"/index",component:()=>i.e("chunk-3f184ddc").then(i.bind(null,"1e4b")),hidden:!0,meta:{active:0}},{path:"/home",component:()=>i.e("chunk-2d0cfa15").then(i.bind(null,"6511")),hidden:!0,meta:{active:2}},{path:"/my",component:()=>i.e("chunk-668f3c62").then(i.bind(null,"0c6f")),hidden:!0,meta:{active:1}},{path:"/v2",component:()=>i.e("chunk-2d21788c").then(i.bind(null,"c6ad")),hidden:!0,meta:{hidden:!0}},{path:"/404",component:()=>i.e("chunk-3aef3e74").then(i.bind(null,"8cdb")),hidden:!0,meta:{hidden:!0}}];let k=h["a"].prototype.push;h["a"].prototype.push=function(e){return k.call(this,e).catch(e=>e)};var y=new h["a"]({mode:"hash",scrollBehavior:()=>({y:0}),routes:p}),f=i("2f62"),m=i("0e44");n["a"].use(f["a"]);const v=new f["a"].Store({state:{navItemActive:"/index",prizenum:0,totalPrice:0,init:1},mutations:{SET_NAVITEM_ACTIVE(e,t){e.navItemActive=t}},actions:{setNavItemActive({commit:e},t){e("SET_NAVITEM_ACTIVE",t)}},plugins:[Object(m["a"])()]});var S=v;i("77ed");y.beforeEach((e,t,i)=>{i()}),n["a"].use(u["a"]),n["a"].config.productionTip=!1,n["a"].prototype.$bus=new n["a"],!localStorage.getItem("wtList")&&localStorage.setItem("wtList",JSON.stringify([{id:1,isok:"0",title:"关于我们",wtList:[{title:"我们第一次牵手是在什么地方？",isok:"0",isS:"n",yt:"公交车上",nt:"公交车站",prize:1,checked:""},{title:"我们第一次kiss是在什么地方？",isok:"0",isS:"n",yt:"你家楼下",nt:"公园亭子",prize:1,checked:""},{title:"我们第一张合照在动物园的哪个具体位置拍的？",isok:"0",isS:"y",yt:"冰雪世界",nt:"老虎表演观众席",prize:1,checked:""},{title:"刚在一起时我们经常去散步的地方是哪里？",isok:"0",isS:"y",yt:"你学校",nt:"公园",prize:1,checked:""},{title:"我们在一起多少天了？不准看浏览器！",isok:"0",isS:"y",yt:"870多天",nt:"900多天",prize:5,checked:""}]},{id:2,isok:"0",title:"关于你",wtList:[{title:"你第一次生气是因为啥？",isok:"0",isS:"y",yt:"因为被五只羊气的",nt:"没有原因",prize:1,checked:""},{title:"你在君思加班，我最多等过你多久？",isok:"0",isS:"y",yt:"3个小时",nt:"1个小时",prize:1,checked:""},{title:"第一次主动提出送你回家是2021年几月几号",isok:"0",isS:"y",yt:"3月2号",nt:"3月6号",prize:1,checked:""},{title:"第一次看的电影是啥",isok:"0",isS:"n",yt:"《名侦探柯南 绯色的弹丸》",nt:"《你好，李焕英》",prize:1,checked:""},{title:"以下哪个地方我们没去过",isok:"0",isS:"y",yt:"世界之窗",nt:"洋湖湿地公园",prize:1,checked:""},{title:"在你学校附近我们吃的最多的是哪个商家",isok:"0",isS:"y",yt:"重庆鸡公煲",nt:"学校食堂",prize:1,checked:""},{title:"爱不爱五只🐏",isok:"0",isS:"n",yt:"爱",nt:"超爱",prize:5,checked:""}]},{id:3,isok:"0",title:"关于我",wtList:[{title:"我第一次送你的礼物是什么，鲜花除外",isok:"0",isS:"y",yt:"Dior口红",nt:"usmile电动牙刷",prize:1,checked:""},{title:"在一起的第一个月我送了什么礼物",isok:"0",isS:"y",yt:"啥也没送",nt:"红糖姜茶",prize:1,checked:""},{title:"以下哪个不是在你的23岁生日时我送的礼物",isok:"0",isS:"y",yt:"高跟鞋",nt:"海蓝之谜精粹水",prize:1,checked:""},{title:"我的车子是什么型号的",isok:"0",isS:"n",yt:"领克03",nt:"2022款领克03劲plus 2.0T黑色",prize:3,checked:""},{title:"我们第一次打英雄联盟我玩的啥英雄",isok:"0",isS:"y",yt:"卢锡安",nt:"螳螂",prize:1,checked:""},{title:"我喜欢小狗还是小猫",isok:"0",isS:"y",yt:"小狗",nt:"小猫",prize:1,checked:""},{title:"我喜欢柴犬还是柯基",isok:"0",isS:"y",yt:"柴犬",nt:"柯基",prize:1,checked:""},{title:"我经常给你点的奶茶是啥品牌的",isok:"0",isS:"n",yt:"茶百道",nt:"书亦烧仙草",prize:1,checked:""},{title:"我的阴历生日是",isok:"0",isS:"y",yt:"10-13",nt:"11-24",prize:1,checked:""},{title:"我最喜欢的称呼是？",isok:"0",isS:"n",yt:"五只🐏",nt:"老公",prize:5,checked:""}]},{id:4,isok:"0",title:"渐入佳境",wtList:[{title:"你想放屁时第一反应是？",isok:"0",isS:"y",yt:"忍住等五只🐏过来放他手上",nt:"抓一把给五只羊闻",prize:1,checked:""},{title:"掏出喉结石后的第一反应是？",isok:"0",isS:"n",yt:"自己闻一下",nt:"把喉结石涂在五只🐏人中上",prize:1,checked:""},{title:"当五只羊凑过来亲亲时第一反应？",isok:"0",isS:"y",yt:"长大嘴巴咬",nt:"略略略",prize:1,checked:""},{title:"当五只羊在搬东西上楼时第一反应？",isok:"0",isS:"n",yt:"适当帮忙",nt:"桶五只🐏菊花",prize:1,checked:""},{title:"当食物临期时第一反应？",isok:"0",isS:"y",yt:"五只羊试毒",nt:"丢掉",prize:1,checked:""},{title:"吃不完的剩饭应当如何处理？",isok:"0",isS:"y",yt:"喂猪（五只羊）",nt:"丢掉",prize:1,checked:""},{title:"当吵架时应该如何解决问题",isok:"0",isS:"n",yt:"分析对错，合理解决",nt:"老娘没错",prize:5,checked:""}]},{id:5,isok:"0",title:"关于你我",wtList:[{title:"我们为什么会吵架？",isok:"0",isS:"y",yt:"因为太在乎",nt:"因为不在乎",prize:1,checked:""},{title:"我们经常因为什么吵架？",isok:"0",isS:"y",yt:"吃醋",nt:"闻五只羊的臭脚",prize:1,checked:""},{title:"谁先让步的比较多",isok:"0",isS:"y",yt:"五只羊",nt:"你",prize:1,checked:""},{title:"我们会不会永远在一起",isok:"0",isS:"n",yt:"选第二个",nt:"会",prize:1,checked:""},{title:"我们在一起的纪念日是",isok:"0",isS:"y",yt:"3月6号",nt:"3月7号",prize:5,checked:""}]}])),new n["a"]({render:e=>e(l),router:y,store:S}).$mount("#app")},"7a9e":function(e,t,i){},"859e":function(e,t,i){"use strict";i("7a9e")}});