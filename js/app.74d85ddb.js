(function(t){function s(s){for(var i,l,c=s[0],r=s[1],o=s[2],p=0,v=[];p<c.length;p++)l=c[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&v.push(n[l][0]),n[l]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(s);while(v.length)v.shift()();return e.push.apply(e,o||[]),a()}function a(){for(var t,s=0;s<e.length;s++){for(var a=e[s],i=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(i=!1)}i&&(e.splice(s--,1),t=l(l.s=a[0]))}return t}var i={},n={app:0},e=[];function l(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,s,a){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)l.d(a,i,function(s){return t[s]}.bind(null,i));return a},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var o=0;o<c.length;o++)s(c[o]);var u=r;e.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("top"),a("index")],1)},e=[],l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"top-container"},[t._m(0),a("div",{staticClass:"right-box"},[a("div",{staticClass:"el-input el-input--small el-input--prefix"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off",placeholder:"搜索"},domProps:{value:t.inputValue},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.toResult(s)},input:function(s){s.target.composing||(t.inputValue=s.target.value)}}}),t._m(1)])])])},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"left-box"},[a("div",{staticClass:"icon-wrapper"},[a("span",{staticClass:"iconfont icon-home"}),a("span",{staticClass:"iconfont icon-sami-select"}),a("span",{staticClass:"iconfont icon-full-screen"})]),a("div",{staticClass:"history-wrapper"},[a("span",{staticClass:"iconfont icon-arrow-lift",attrs:{onClick:"javascript :history.back(-1)"}}),a("span",{staticClass:"iconfont icon-arrow-right",attrs:{onClick:"javascript :history.back(+1)"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"el-input__prefix"},[a("i",{staticClass:"el-input__icon el-icon-search"})])}],r={name:"top",data:function(){return{inputValue:""}},methods:{toResult:function(){""==this.inputValue?this.$message.warning("哎呀天啦噜还没输入内容呢"):this.$router.push("/result?name="+this.inputValue)}}},o=r,u=a("2877"),p=Object(u["a"])(o,l,c,!1,null,"3ae6ec16",null),v=p.exports,m=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index-container"},[a("div",{staticClass:"nav"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/discovery"}},[a("span",{staticClass:"iconfont icon-find-music"}),t._v(" 发现音乐 ")])],1),a("li",[a("router-link",{attrs:{to:"/playlists"}},[a("span",{staticClass:"iconfont icon-music-list"}),t._v(" 推荐歌单 ")])],1),a("li",[a("router-link",{attrs:{to:"/songs"}},[a("span",{staticClass:"iconfont icon-music"}),t._v(" 最新音乐 ")])],1),a("li",[a("router-link",{attrs:{to:"/mvs"}},[a("span",{staticClass:"iconfont icon-mv"}),t._v(" 最新MV ")])],1)])]),a("div",{staticClass:"main"},[a("router-view")],1),a("div",{staticClass:"player"},[a("audio",{attrs:{src:t.musicUrl,controls:"",autoplay:""}})])])},d=[],C={name:"index",data:function(){return{musicUrl:"http://m7.music.126.net/20200303182550/8aa5971b1630d1527a922ccd2b97f392/ymusic/035d/0109/520e/478f86cc9f6c6539f7c8ed3e06c1bf8e.mp3"}}},h=C,f=Object(u["a"])(h,m,d,!1,null,null,null),_=f.exports,g={name:"app",components:{top:v,index:_}},y=g,b=Object(u["a"])(y,n,e,!1,null,null,null),w=b.exports,k=a("5c96"),x=a.n(k),z=(a("0fae"),a("d940c"),a("8c4f")),$=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"discovery-container"},[a("el-carousel",{attrs:{interval:4e3,type:"card"}},t._l(t.banners,(function(t,s){return a("el-carousel-item",{key:s},[a("img",{attrs:{src:t.imageUrl,alt:""}})])})),1),a("div",{staticClass:"recommend"},[a("h3",{staticClass:"title"},[t._v(" 推荐歌单 ")]),a("div",{staticClass:"items"},t._l(t.list,(function(s,i){return a("div",{key:i,staticClass:"item",on:{dblclick:function(a){return t.toplaylist(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("div",{staticClass:"desc-wrap"},[a("span",{staticClass:"desc"},[t._v(t._s(s.copywriter))])]),a("img",{attrs:{src:s.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})]),a("p",{staticClass:"name"},[t._v(t._s(s.name))])])})),0)]),a("div",{staticClass:"news"},[a("h3",{staticClass:"title"},[t._v(" 最新音乐 ")]),a("div",{staticClass:"items"},t._l(t.music,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play",on:{click:function(a){return t.playMusic(s.id)}}})]),a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"song-name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.song.artists[0].name))])])])})),0)]),a("div",{staticClass:"mvs"},[a("h3",{staticClass:"title"},[t._v("推荐MV")]),a("div",{staticClass:"items"},t._l(t.mv,(function(s,i){return a("div",{key:i,staticClass:"item",on:{dblclick:function(a){return t.toplaymv(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(s.playCount))])])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artistName))])])])})),0)])],1)},I=[],M=a("bc3a"),L=a.n(M),U={name:"discovery",data:function(){return{banners:[],list:[],music:[],mv:[]}},methods:{toplaylist:function(t){this.$router.push("/playlist?hzx="+t)},toplaymv:function(t){this.$router.push("/mv?hzx="+t)},playMusic:function(t){var s=this;L()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var a=t.data.data[0].url;s.$parent.musicUrl=a}))}},created:function(){var t=this;L()({url:"https://autumnfish.cn/banner",mothod:"get"}).then((function(s){t.banners=s.data.banners})),L()({url:"https://autumnfish.cn/personalized",method:"get",params:{limit:10}}).then((function(s){t.list=s.data.result})),L()({url:"https://autumnfish.cn/personalized/newsong",method:"get"}).then((function(s){t.music=s.data.result})),L()({url:"https://autumnfish.cn/personalized/mv",method:"get"}).then((function(s){t.mv=s.data.result}))}},O=U,j=Object(u["a"])(O,$,I,!1,null,null,null),R=j.exports,q=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"playlists-container"},[a("div",{staticClass:"top-card"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:t.topList.coverImgUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"tag"},[t._v("精品歌单")]),a("div",{staticClass:"title"},[t._v(" "+t._s(t.topList.name)+" ")]),a("div",{staticClass:"info"},[t._v(" "+t._s(t.topList.description)+" ")])]),a("img",{staticClass:"bg",attrs:{src:t.topList.coverImgUrl,alt:""}}),a("div",{staticClass:"bg-mask"})]),a("div",{staticClass:"tab-container"},[a("div",{staticClass:"tab-bar"},[a("span",{staticClass:"item",class:{active:"全部"==t.tag},on:{click:function(s){t.tag="全部"}}},[t._v("全部")]),a("span",{staticClass:"item",class:{active:"欧美"==t.tag},on:{click:function(s){t.tag="欧美"}}},[t._v("欧美")]),a("span",{staticClass:"item",class:{active:"华语"==t.tag},on:{click:function(s){t.tag="华语"}}},[t._v("华语")]),a("span",{staticClass:"item",class:{active:"流行"==t.tag},on:{click:function(s){t.tag="流行"}}},[t._v("流行")]),a("span",{staticClass:"item",class:{active:"说唱"==t.tag},on:{click:function(s){t.tag="说唱"}}},[t._v("说唱")]),a("span",{staticClass:"item",class:{active:"摇滚"==t.tag},on:{click:function(s){t.tag="摇滚"}}},[t._v("摇滚")]),a("span",{staticClass:"item",class:{active:"民谣"==t.tag},on:{click:function(s){t.tag="民谣"}}},[t._v("民谣")]),a("span",{staticClass:"item",class:{active:"电子"==t.tag},on:{click:function(s){t.tag="电子"}}},[t._v("电子")]),a("span",{staticClass:"item",class:{active:"轻音乐"==t.tag},on:{click:function(s){t.tag="轻音乐"}}},[t._v("轻音乐")]),a("span",{staticClass:"item",class:{active:"影视原声"==t.tag},on:{click:function(s){t.tag="影视原声"}}},[t._v("影视原声")]),a("span",{staticClass:"item",class:{active:"ACG"==t.tag},on:{click:function(s){t.tag="ACG"}}},[t._v("ACG")]),a("span",{staticClass:"item",class:{active:"怀旧"==t.tag},on:{click:function(s){t.tag="怀旧"}}},[t._v("怀旧")]),a("span",{staticClass:"item",class:{active:"治愈"==t.tag},on:{click:function(s){t.tag="治愈"}}},[t._v("治愈")]),a("span",{staticClass:"item",class:{active:"旅行"==t.tag},on:{click:function(s){t.tag="旅行"}}},[t._v("旅行")])]),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"items"},t._l(t.hzx,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"img-wrap",on:{dblclick:function(a){return t.toplaylist(s.id)}}},[a("div",{staticClass:"num-wrap"},[t._v(" 播放量: "),a("span",{staticClass:"num"},[t._v(t._s(s.playCount))])]),a("img",{attrs:{src:s.coverImgUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})]),a("p",{staticClass:"name"},[t._v(t._s(s.name))])])})),0)])]),a("el-pagination",{attrs:{background:"",total:t.total,"current-page":t.page,"page-size":10},on:{"current-change":t.handleCurrentChange}})],1)},E=[],V={name:"recommend",data:function(){return{total:0,page:1,topList:{},hzx:[],tag:"欧美"}},watch:{tag:function(){this.topData(),this.listData(),this.page=1}},methods:{toplaylist:function(t){this.$router.push("/playlist?hzx="+t)},topData:function(){var t=this;L()({url:"https://autumnfish.cn/top/playlist/highquality",method:"get",params:{limit:1,cat:this.tag}}).then((function(s){t.topList=s.data.playlists[0]}))},listData:function(){var t=this;L()({url:"https://autumnfish.cn/top/playlist/",mothod:"get",params:{limit:10,offset:10*(this.page-1),cat:this.tag}}).then((function(s){console.log(s),t.hzx=s.data.playlists,t.total=s.data.total;for(var a=0;a<t.hzx.length;a++)t.hzx[a].playCount>1e5&&(t.hzx[a].playCount=parseInt(t.hzx[a].playCount/1e4)+"万")}))},handleCurrentChange:function(t){this.page=t,this.listData()}},created:function(){this.topData(),this.listData()}},D=V,P=Object(u["a"])(D,q,E,!1,null,null,null),S=P.exports,T=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"songs-container"},[a("div",{staticClass:"tab-bar"},[a("span",{staticClass:"item",class:{active:"0"==t.tag},on:{click:function(s){t.tag=0}}},[t._v("全部")]),a("span",{staticClass:"item",class:{active:"7"==t.tag},on:{click:function(s){t.tag=7}}},[t._v("华语")]),a("span",{staticClass:"item",class:{active:"96"==t.tag},on:{click:function(s){t.tag=96}}},[t._v("欧美")]),a("span",{staticClass:"item",class:{active:"8"==t.tag},on:{click:function(s){t.tag=8}}},[t._v("日本")]),a("span",{staticClass:"item",class:{active:"16"==t.tag},on:{click:function(s){t.tag=16}}},[t._v("韩国")])]),a("table",{staticClass:"el-table playlit-table"},[t._m(0),a("tbody",t._l(t.Lists,(function(s,i){return a("tr",{key:i,staticClass:"el-table__row"},[a("td",[t._v(t._s(i+1))]),a("td",[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.album.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play",on:{click:function(a){return t.playMusic(s.id)}}})])]),a("td",[a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"name-wrap"},[a("span",[t._v(t._s(s.name))]),a("span",{staticClass:"iconfont icon-mv"})]),a("span")])]),a("td",[t._v(t._s(s.album.artists["0"].name))]),a("td",[t._v(t._s(s.album.name))]),a("td",[t._v(t._s(s.duration))])])})),0)])])},N=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("th"),a("th"),a("th",[t._v("音乐标题")]),a("th",[t._v("歌手")]),a("th",[t._v("专辑")]),a("th",[t._v("时长")])])}],A={name:"songs",data:function(){return{Lists:[],tag:"7"}},watch:{tag:function(){this.getters()}},methods:{playMusic:function(t){var s=this;L()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){console.log(t);var a=t.data.data[0].url;s.$parent.musicUrl=a}))},getters:function(){var t=this;L()({url:"https://autumnfish.cn/top/song",mothod:"get",params:{type:this.tag}}).then((function(s){console.log(s),t.Lists=s.data.data;for(var a=0;a<t.Lists.length;a++){var i=t.Lists[a].duration,n=parseInt(i/1e3/60);n<10&&(n="0"+n);var e=parseInt(i/1e3%60);t.Lists[a].duration=n+":"+e}}))}},created:function(){this.getters()}},G=A,J=Object(u["a"])(G,T,N,!1,null,null,null),B=J.exports,F=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mvs-container"},[a("div",{staticClass:"filter-wrap"},[a("div",{staticClass:"seciton-wrap"},[a("span",{staticClass:"section-type"},[t._v("地区:")]),a("ul",{staticClass:"tabs-wrap"},[a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"全部"==t.area},on:{click:function(s){t.area="全部"}}},[t._v("全部")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"内地"==t.area},on:{click:function(s){t.area="内地"}}},[t._v("内地")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"港台"==t.area},on:{click:function(s){t.area="港台"}}},[t._v("港台")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"欧美"==t.area},on:{click:function(s){t.area="欧美"}}},[t._v("欧美")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"日本"==t.area},on:{click:function(s){t.area="日本"}}},[t._v("日本")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"韩国"==t.area},on:{click:function(s){t.area="韩国"}}},[t._v("韩国")])])])]),a("div",{staticClass:"type-wrap"},[a("span",{staticClass:"type-type"},[t._v("类型:")]),a("ul",{staticClass:"tabs-wrap"},[a("li",{staticClass:"tab"},[a("span",{staticClass:"title ",class:{active:"全部"==t.type},on:{click:function(s){t.type="全部"}}},[t._v("全部")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"官方版"==t.type},on:{click:function(s){t.type="官方版"}}},[t._v("官方版")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"原声"==t.type},on:{click:function(s){t.type="原声"}}},[t._v("原声")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"现场版"==t.type},on:{click:function(s){t.type="现场版"}}},[t._v("现场版")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"正先出品"==t.type},on:{click:function(s){t.type="正先出品"}}},[t._v("正先出品")])])])]),a("div",{staticClass:"order-wrap"},[a("span",{staticClass:"order-type"},[t._v("排序:")]),a("ul",{staticClass:"tabs-wrap"},[a("li",{staticClass:"tab"},[a("span",{staticClass:"title ",class:{active:"上升最快"==t.order},on:{click:function(s){t.order="上升最快"}}},[t._v("上升最快")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"最热"==t.order},on:{click:function(s){t.order="最热"}}},[t._v("最热")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"最新"==t.order},on:{click:function(s){t.order="最新"}}},[t._v("最新")])]),t._v(" "),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"我要自闭了啊~~"==t.order},on:{click:function(s){t.order="我要自闭了啊~~"}}},[t._v("我要自闭了啊~~")])])])])]),a("div",{staticClass:"mvs"},[a("div",{staticClass:"items"},t._l(t.list,(function(s,i){return a("div",{key:i,staticClass:"item",on:{dblclick:function(a){return t.toplaylist(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.cover,alt:""}}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(s.playCount))])])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artistName))])])])})),0),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5,limit:t.limit},on:{"current-change":t.handleCurrentChange}})],1)])},H=[],K={name:"mvs",data:function(){return{total:20,page:1,limit:12,area:"全部",type:"全部",order:"上升最快",list:[]}},watch:{area:function(){this.getlist(),this.page=1},type:function(){this.getlist(),this.page=1},order:function(){this.getlist(),this.page=1}},created:function(){this.getlist(),this.getlist(),this.getlist()},methods:{handleCurrentChange:function(t){this.page=t,this.getlist()},toplaylist:function(t){this.$router.push("/mv?hzx="+t)},getlist:function(){var t=this;L()({url:"https://autumnfish.cn/mv/all",method:"get",params:{area:this.area,type:this.type,order:this.order,limit:this.limit,offset:(this.page-1)*this.limit}}).then((function(s){console.log(s),t.list=s.data.data;for(var a=0;a<t.list.length;a++)t.list[a].playCount>1e5&&(t.list[a].playCount=parseInt(t.list[a].playCount/1e4)+"万")}))}}},Q=K,W=Object(u["a"])(Q,F,H,!1,null,null,null),X=W.exports,Y=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"result-container"},[a("div",{staticClass:"title-wrap"},[a("h2",{staticClass:"title"},[t._v(t._s(t.$route.query.name))]),a("span",{staticClass:"sub-title"},[t._v("找到啦"+t._s(t.count)+"个搜索结果")])]),a("el-tabs",{model:{value:t.activeIndex,callback:function(s){t.activeIndex=s},expression:"activeIndex"}},[a("el-tab-pane",{attrs:{label:"歌曲",name:"songs"}},[a("table",{staticClass:"el-table"},[a("thead",[a("th"),a("th",[t._v("音乐标题")]),a("th",[t._v("歌手")]),a("th",[t._v("专辑")]),a("th",[t._v("时长")])]),a("tbody",t._l(t.songList,(function(s,i){return a("tr",{key:i,staticClass:"el-table__row",on:{dblclick:function(a){return t.playMusic(s.id)}}},[a("td",[t._v(t._s(i+1))]),a("td",[a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"name-wrap"},[a("span",[t._v(t._s(s.name))]),0!=s.mvid?a("span",{staticClass:"iconfont icon-mv"}):t._e()]),0!=s.alias.length?a("span",[t._v(t._s(s.alias[0]))]):t._e()])]),a("td",[t._v(t._s(s.artists[0].name))]),a("td",[t._v(t._s(s.album.name))]),a("td",[t._v(t._s(s.duration))])])})),0)])]),a("el-tab-pane",{attrs:{label:"歌单",name:"lists"}},[a("div",{staticClass:"items"},t._l(t.playlists,(function(s,i){return a("div",{key:i,staticClass:"item",on:{click:function(a){return t.toplaylist(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("div",{staticClass:"num-wrap"},[t._v(" 播放量: "),a("span",{staticClass:"num"},[t._v(t._s(s.playCount))])]),a("img",{attrs:{src:s.coverImgUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})]),a("p",{staticClass:"name"},[t._v(t._s(s.name))])])})),0)]),a("el-tab-pane",{attrs:{label:"MV",name:"mv"}},[a("div",{staticClass:"items mv"},t._l(t.mv,(function(s,i){return a("div",{key:i,staticClass:"item",on:{click:function(a){return t.toMV(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.cover,alt:""}}),a("span",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(s.playCount))])]),a("span",{staticClass:"time"},[t._v(t._s(s.duration))])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artistName))])])])})),0)])],1)],1)},Z=[],tt=(a("b0c0"),{name:"result",data:function(){return{activeIndex:"songs",songList:[],playlists:[],mv:[],count:""}},watch:{activeIndex:function(){var t=this,s=1,a=10;switch(this.activeIndex){case"songs":s=1,a=10;break;case"lists":s=1e3,a=10;break;case"mv":s=1004,a=8;break;default:break}L()({url:"https://autumnfish.cn/search",method:"get",params:{keywords:this.$route.query.name,type:s,limit:a}}).then((function(a){if(console.log(a),1==s){t.songList=a.data.result.songs;for(var i=0;i<t.songList.length;i++){t.songList[i].duration;var n=parseInt(t.songList[i].duration/1e3/60),e=parseInt(t.songList[i].duration/1e3%60);n<10&&(n="0"+n),e<10&&(e="0"+e),t.songList[i].duration=n+":"+e}t.count=a.data.result.songCount}else if(1e3==s){t.playlists=a.data.result.playlists,t.count=a.data.result.playlistCount;for(var l=0;l<t.playlists.length;l++)t.playlists[l].playCount>1e5&&(t.playlists[l].playCount=parseInt(t.playlists[l].playCount/1e4)+"万")}else{console.log(a),t.mv=a.data.result.mvs,t.count=a.data.result.mvCount;for(var c=0;c<t.mv.length;c++){var r=parseInt(t.mv[c].duration/1e3/60),o=parseInt(t.mv[c].duration/1e3%60);r<10&&(r="0"+r),o<10&&(o="0"+o),t.mv[c].duration=r+":"+o}for(var u=0;u<t.mv.length;u++)t.mv[u].playCount>1e5&&(t.mv[u].playCount=parseInt(t.mv[u].playCount/1e4)+"万")}}))}},methods:{toMV:function(t){this.$router.push("./mv?hzx="+t)},toplaylist:function(t){this.$router.push("/playlist?hzx="+t)},playMusic:function(t){var s=this;L()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var a=t.data.data[0].url;s.$parent.musicUrl=a}))}},created:function(){var t=this;L()({url:"https://autumnfish.cn/search",method:"get",params:{keywords:this.$route.query.name,limit:10,type:1}}).then((function(s){t.songList=s.data.result.songs;for(var a=0;a<t.songList.length;a++){t.songList[a].duration;var i=parseInt(t.songList[a].duration/1e3/60),n=parseInt(t.songList[a].duration/1e3%60);i<10&&(i="0"+i),n<10&&(n="0"+n),t.songList[a].duration=i+":"+n}t.count=s.data.result.songCount}))}}),st=tt,at=Object(u["a"])(st,Y,Z,!1,null,null,null),it=at.exports,nt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"playlist-container"},[a("div",{staticClass:"top-wrap"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:t.playlist.coverImgUrl,alt:""}})]),a("div",{staticClass:"info-wrap"},[a("p",{staticClass:"title"},[t._v(t._s(t.playlist.name))]),a("div",{staticClass:"author-wrap"},[a("img",{staticClass:"avatar",attrs:{src:t.playlist.creator.avatarUrl,alt:""}}),a("span",{staticClass:"name"},[t._v(t._s(t.playlist.creator.nickname))]),a("span",{staticClass:"time"},[t._v(t._s(t.playlist.createTime))])]),t._m(0),a("div",{staticClass:"tag-wrap"},[a("span",{staticClass:"title"},[t._v("标签:")]),a("ul",t._l(t.playlist.tags,(function(s,i){return a("li",{key:i},[t._v(t._s(s))])})),0)]),a("div",{staticClass:"desc-wrap"},[a("span",{staticClass:"title"},[t._v("简介:")]),a("span",{staticClass:"desc"},[t._v(" "+t._s(t.playlist.description)+" ")])])])]),a("el-tabs",{model:{value:t.activeIndex,callback:function(s){t.activeIndex=s},expression:"activeIndex"}},[a("el-tab-pane",{attrs:{label:"歌曲列表",name:"1"}},[a("table",{staticClass:"el-table playlit-table"},[a("thead",[a("th"),a("th"),a("th",[t._v("音乐标题")]),a("th",[t._v("歌手")]),a("th",[t._v("专辑")]),a("th",[t._v("时长")])]),a("tbody",t._l(t.playlist.tracks,(function(s,i){return a("tr",{key:i,staticClass:"el-table__row",on:{click:function(a){return t.playMusic(s.id)}}},[a("td",[t._v(t._s(i+1))]),a("td",[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.al.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})])]),a("td",[a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"name-wrap"},[0!=s.value?a("span",[t._v(t._s(s.name))]):t._e(),0!==s.mv?a("span",{staticClass:"iconfont icon-mv"}):t._e()]),a("span",[t._v(t._s(s.alia[0]))])])]),a("td",[t._v(t._s(s.ar[0].name))]),a("td",[t._v(t._s(s.al.name))]),a("td",[t._v(t._s(s.dt))])])})),0)])]),a("el-tab-pane",{attrs:{label:"评论"+t.TotalSum,name:"2"}},[a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v("精彩评论"),a("span",{staticClass:"number"},[t._v(t._s(t.hotCount))])]),a("div",{staticClass:"comments-wrap"},t._l(t.hotComment,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.content))])]),0!=s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v("2020-02-12 17:26:11")])])])})),0)]),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v("最新评论"),a("span",{staticClass:"number"},[t._v(t._s(t.total))])]),a("div",{staticClass:"comments-wrap"},t._l(t.comments,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.content))])]),0!=s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v("2020-02-12 17:26:11")])])])})),0)]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},et=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"play-wrap"},[a("span",{staticClass:"iconfont icon-circle-play"}),a("span",{staticClass:"text"},[t._v("播放全部")])])}],lt={name:"playlist",data:function(){return{activeIndex:"1",total:0,page:1,playlist:{},hotComment:[],hotCount:0,comments:[],TotalSum:0}},methods:{toplaylist:function(t){this.$router.push("/playlist?hzx="+t)},playMusic:function(t){var s=this;L()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var a=t.data.data[0].url;s.$parent.musicUrl=a}))},handleCurrentChange:function(t){var s=this;this.page=t,L()({url:"https://autumnfish.cn/comment/playlist",method:"get",params:{id:this.$route.query.hzx,limit:10,offset:10*(this.page-1)}}).then((function(t){s.total=t.data.total,s.comments=t.data.comments}))}},created:function(){var t=this;L()({url:"https://autumnfish.cn/playlist/detail",method:"get",params:{id:this.$route.query.hzx}}).then((function(s){t.playlist=s.data.playlist;for(var a=0;a<t.playlist.length;a++){console.log(t.playlist.dt);var i=parseInt(t.playlist[a].dt/1e3/60),n=parseInt(t.playlist[a].dt/1e3%60);i<10&&(i="0"+i),n<10&&(n="0"+n),t.playlist[a].dt=i+":"+n}L()({url:"https://autumnfish.cn/comment/hot",method:"get",params:{id:t.$route.query.hzx,type:2}}).then((function(s){t.hotComment=s.data.hotComments,t.hotCount=s.data.total})),L()({url:"https://autumnfish.cn/comment/playlist",method:"get",params:{id:t.$route.query.hzx,limit:1,offset:0}}).then((function(s){t.total=s.data.total,t.comments=s.data.comments,t.TotalSum=t.hotCount+t.total}))}))}},ct=lt,rt=Object(u["a"])(ct,nt,et,!1,null,null,null),ot=rt.exports,ut=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mv-container"},[a("div",{staticClass:"mv-wrap"},[a("h3",{staticClass:"title"},[t._v("mv详情")]),a("div",{staticClass:"video-wrap"},[a("video",{attrs:{controls:"",autoplay:"",src:t.url}})]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"singer-info"},[a("div",{staticClass:"avatar-wrap"},[a("img",{attrs:{src:t.icon,alt:""}})]),a("span",{staticClass:"name"},[t._v(t._s(t.mvinfor.artistName))])]),a("div",{staticClass:"mv-info"},[a("h2",{staticClass:"title"},[t._v(t._s(t.mvinfor.briefDesc))]),a("span",{staticClass:"date"},[t._v("发布：2014-11-04")]),a("span",{staticClass:"number"},[t._v("播放："+t._s(t.mvinfor.commentCount)+"次")]),a("p",{staticClass:"desc"},[t._v(" "+t._s(t.mvinfor.desc)+" ")])])]),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 精彩评论"),a("span",{staticClass:"number"},[t._v(" "+t._s(t.total)+" ")])]),a("div",{staticClass:"comments-wrap"},t._l(t.hzx,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl+"?param=50y50",alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname))]),a("span",{staticClass:"comment"},[t._v("："+t._s(s.content))])]),0!==s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname))]),a("span",{staticClass:"comment"},[t._v("："+t._s(s.beReplied[0].content))])]):t._e()])])})),0)]),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 最新评论"),a("span",{staticClass:"number"},[t._v("("+t._s(t.total)+")")])]),a("div",{staticClass:"comments-wrap"},t._l(t.hz,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl+"?param=50y50",alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname))]),a("span",{staticClass:"comment"},[t._v("："+t._s(s.content))])]),0!==s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname))]),a("span",{staticClass:"comment"},[t._v("："+t._s(s.beReplied[0].content))])]):t._e()])])})),0)]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5,limit:t.limit},on:{"current-change":t.handleCurrentChange}})],1),a("div",{staticClass:"mv-recommend"},[a("h3",{staticClass:"title"},[t._v("相关推荐")]),a("div",{staticClass:"mvs"},[a("div",{staticClass:"items"},t._l(t.Mvs,(function(s,i){return a("div",{key:i,staticClass:"item",on:{dblclick:function(a){return t.toplaylist(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.cover,alt:""}}),a("span",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(s.playCount))])])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artist))])])])})),0)])])])},pt=[],vt={name:"mv",data:function(){return{total:20,page:1,limit:10,url:"",Mvs:[],mvinfor:"",icon:"",hzx:"",hz:""}},methods:{handleCurrentChange:function(t){},toplaylist:function(t){this.$router.push("/mvv?hzx="+t)}},created:function(){var t=this;L()({url:"https://autumnfish.cn/mv/url",method:"get",params:{id:this.$route.query.hzx}}).then((function(s){t.url=s.data.data.url})),L()({url:"https://autumnfish.cn/simi/mv",method:"get",params:{mvid:this.$route.query.hzx}}).then((function(s){t.Mvs=s.data.mvs})),L()({url:"https://autumnfish.cn/mv/detail",method:"get",params:{mvid:this.$route.query.hzx}}).then((function(s){console.log(s),t.mvinfor=s.data.data;for(var a=0;a<t.Mvs.length;a++)t.Mvs[a].playCount>1e5&&(t.Mvs[a].playCount=parseInt(t.Mvs[a].playCount/1e4)+"万");L()({url:"https://autumnfish.cn/artists",method:"get",params:{id:t.mvinfor.artists[0].id}}).then((function(s){t.icon=s.data.artist.picUrl}))})),L()({url:"https://autumnfish.cn/comment/mv",method:"get",params:{id:this.$route.query.hzx,limit:10,offset:0}}).then((function(s){t.hzx=s.data.comments,t.hz=s.data.hotComments}))}},mt=vt,dt=Object(u["a"])(mt,ut,pt,!1,null,null,null),Ct=dt.exports,ht=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mv-container"},[a("div",{staticClass:"mv-wrap"},[a("h3",{staticClass:"title"},[t._v("mv详情")]),a("div",{staticClass:"video-wrap"},[a("video",{attrs:{controls:"",src:t.url}})]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"singer-info"},[a("div",{staticClass:"avatar-wrap"},[a("img",{attrs:{src:t.icon,alt:""}})]),a("span",{staticClass:"name"},[t._v(t._s(t.mvinfor.artistName))])]),a("div",{staticClass:"mv-info"},[a("h2",{staticClass:"title"},[t._v(t._s(t.mvinfor.briefDesc))]),a("span",{staticClass:"date"},[t._v("发布：2014-11-04")]),a("span",{staticClass:"number"},[t._v("播放："+t._s(t.mvinfor.commentCount)+"次")]),a("p",{staticClass:"desc"},[t._v(" "+t._s(t.mvinfor.desc)+" ")])])]),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 精彩评论"),a("span",{staticClass:"number"},[t._v(" "+t._s(t.total)+" ")])]),a("div",{staticClass:"comments-wrap"},t._l(t.hzx,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl+"?param=50y50",alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname))]),a("span",{staticClass:"comment"},[t._v("："+t._s(s.content))])]),0!==s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname))]),a("span",{staticClass:"comment"},[t._v("："+t._s(s.beReplied[0].content))])]):t._e()])])})),0)]),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 最新评论"),a("span",{staticClass:"number"},[t._v("("+t._s(t.total)+")")])]),a("div",{staticClass:"comments-wrap"},t._l(t.hz,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl+"?param=50y50",alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname))]),a("span",{staticClass:"comment"},[t._v("："+t._s(s.content))])]),0!==s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname))]),a("span",{staticClass:"comment"},[t._v("："+t._s(s.beReplied[0].content))])]):t._e()])])})),0)]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5,limit:t.limit},on:{"current-change":t.handleCurrentChange}})],1),a("div",{staticClass:"mv-recommend"},[a("h3",{staticClass:"title"},[t._v("相关推荐")]),a("div",{staticClass:"mvs"},[a("div",{staticClass:"items"},t._l(t.Mvs,(function(s,i){return a("div",{key:i,staticClass:"item",on:{dblclick:function(a){return t.toplaylist(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.cover,alt:""}}),a("span",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(s.playCount))])])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artist))])])])})),0)])])])},ft=[],_t={name:"mv",data:function(){return{total:20,page:1,limit:10,url:"",Mvs:[],mvinfor:"",icon:"",hzx:"",hz:""}},methods:{handleCurrentChange:function(t){},toplaylist:function(t){this.$router.push("/mv?hzx="+t)}},created:function(){var t=this;L()({url:"https://autumnfish.cn/mv/url",method:"get",params:{id:this.$route.query.hzx}}).then((function(s){t.url=s.data.data.url})),L()({url:"https://autumnfish.cn/simi/mv",method:"get",params:{mvid:this.$route.query.hzx}}).then((function(s){t.Mvs=s.data.mvs})),L()({url:"https://autumnfish.cn/mv/detail",method:"get",params:{mvid:this.$route.query.hzx}}).then((function(s){console.log(s),t.mvinfor=s.data.data;for(var a=0;a<t.Mvs.length;a++)t.Mvs[a].playCount>1e5&&(t.Mvs[a].playCount=parseInt(t.Mvs[a].playCount/1e4)+"万");L()({url:"https://autumnfish.cn/artists",method:"get",params:{id:t.mvinfor.artists[0].id}}).then((function(s){t.icon=s.data.artist.picUrl}))})),L()({url:"https://autumnfish.cn/comment/mv",method:"get",params:{id:this.$route.query.hzx,limit:10,offset:0}}).then((function(s){t.hzx=s.data.comments,t.hz=s.data.hotComments}))}},gt=_t,yt=Object(u["a"])(gt,ht,ft,!1,null,null,null),bt=yt.exports;i["default"].use(x.a),i["default"].use(z["a"]);var wt=new z["a"]({routes:[{path:"/",redirect:"/discovery"},{path:"/discovery",component:R},{path:"/playlists",component:S},{path:"/playlist",component:ot},{path:"/mvv",component:bt},{path:"/songs",component:B},{path:"/mvs",component:X},{path:"/mv",component:Ct},{path:"/result",component:it}]});i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(w)},router:wt}).$mount("#app")},d940c:function(t,s,a){}});
//# sourceMappingURL=app.74d85ddb.js.map