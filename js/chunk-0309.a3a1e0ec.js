(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0309"],{"2d3c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{class:{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}},[s("Header"),s("div",{staticClass:"archive"},[s("div",{staticClass:"article-content"},[s("p",{staticClass:"fontA"},[t._v(t._s(t.artList.title))]),s("p",[t._v(t._s(t.artList.date))]),s("p",{staticClass:"fontC"},[t._v("    所谓语义就是对符号的一种共识，被认可的程度越高、范围越广，人们就越可以依赖它实现各种各样的功能，在实际应用中表现为针对不同的html内容使用不同标签。\n            使用语义化标签，一方面能够使html结构清晰，便于维护，另一方面有利于搜索引擎更好的进行抓取，提升流量。\n            语义化标签：（html5旧的行内元素都被归类为短语内容）\n            通用容器：div——块级通用容器；span——短语内容无语义容器。")]),s("br"),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29)])]),s("Footer")],1),s("Siteinfo")],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" < title></title>：")]),t._v(" 简短、描述性、唯一（提升搜索引擎排名）。搜索引擎会将title作为判断页面主要内容的指标，有效的title应该包含几个与页面内容密切相关的关键字，建议将title核心内容放在前60个字符中。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <hn></hn>：")]),t._v("h1~h6分级标题，用于创建页面信息的层级关系。对于搜索引擎而言，如果标题与搜索词匹配，这些标题就会被赋予很高的权重，尤其是h1。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <header></header>：")]),t._v(" 页眉通常包括网站标志、主导航、全站链接以及搜索框。也适合对页面内部一组介绍性或导航性内容进行标记。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <nav></nav>：")]),t._v("  标记导航，仅对文档中重要的链接群使用。html5规范不推荐对辅助性页脚链接使用nav，除非页脚再次显示顶级全局导航、或者包含招聘信息等重要链接。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <main></main>：")]),t._v("页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <article></article>：")]),t._v(" 包含像报纸一样的内容= =||是这么理解的，表示文档、页面、应用或一个独立的容器。article可以嵌套article，只要里面的article与外面的是部分与整体的关系。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <section></section>：")]),t._v("具有相似主题的一组内容，比如网站的主页可以分成介绍、新闻条目、联系信息等条块。  如果只是为了添加样式，请用div！")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <aside></aside>：")]),t._v("指定附注栏，包括引述、侧栏、指向文章的一组链接、广告、友情链接、相关产品列表等。如果放在main内，应该与所在内容密切相关。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <footer></footer>：")]),t._v(" 页脚，只有当父级是body时，才是整个页面的页脚。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <small></small>：")]),t._v(" 指定细则，输入免责声明、注解、署名、版权。只适用于短语，不要用来标记“使用条款”、“隐私政策”等长的法律声明。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <strong></strong>：")]),t._v(" 表示内容重要性。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <em></em>：")]),t._v("标记内容着重点（大量用于提升段落文本语义）。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <mark></mark>：")]),t._v(" 突出显示文本（yellow），提醒读者。在HTML5中em是表示强调的唯一元素，而strong则表示重要程度。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <b></b>：")]),t._v("出于实用目的提醒读者的一块文字，不传达任何额外的重要性。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <i></i>：")]),t._v(" 不同于其他文字的文字。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <figure></figure>：")]),t._v(" 创建图（默认有40px左右margin）。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <figcaption></figcaption>：")]),t._v("figure的标题，必须是figure内嵌的第一个或者最后一个元素。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <cite></cite>：")]),t._v(" 指明引用或者参考，如图书的标题，歌曲、电影、等的名称，演唱会、音乐会、规范、报纸、或法律文件等。只用于参考源本身，而不是从中引述。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <blockquoto></blockquoto>：")]),t._v("引述文本，默认新的一行显示。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <q></q>：")]),t._v(" 短的引述（跨浏览器问题，尽量避免使用）。可以对blockquoto和q元素使用cite属性（不是cite元素！），对搜索引擎自动化工具有用。cite=“URL”引述来源地址。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <time></time>：")]),t._v("标记时间。datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。不再相关的时间用s标签。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <abbr></abbr>：")]),t._v("解释缩写词。使用title属性可提供全称，只在第一次出现时使用就ok。abbr[title]{ border-bottom:1px dotted #000; }")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <dfn></dfn>：")]),t._v("定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <address></address>：")]),t._v("作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）。如果提供整个页面的作者联系信息，一般放在页面级footer里。不能包含文档或者文档等其他内容。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <del></del>：")]),t._v("移除的内容。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <ins></ins>：")]),t._v("添加的内容。少有的既可以包围块级，又可以包围短语内容的元素。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <code></code>：")]),t._v("标记代码。包含示例代码或者文件名 （< &lt;  > &gt;）")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <pre></pre>：")]),t._v(" 预格式化文本。保留文本固有的换行和空格。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <meter></meter>：")]),t._v('表示分数的值或者已知范围的测量结果,如投票结果。例如：<meter value="0.2" title=”Miles“>20%completed</meter>')])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"fontE"},[t._v(" <progress></progress>：")]),t._v("完成进度。可通过js动态更新value。")])}],r=(s("3d40"),s("0418")),i=s("fd2d"),c=s("78d1"),_=s("7e2f"),l={data:function(){return{artList:""}},mounted:function(){this.getArticle()},components:{Header:r["a"],Footer:i["a"],Siteinfo:c["a"]},methods:{getArticle:function(){this.artList=_.art2}}},o=l,f=(s("8c92"),s("2877")),v=Object(f["a"])(o,a,n,!1,null,"10a1dc2c",null);v.options.__file="art2.vue";e["default"]=v.exports},"3d40":function(t,e,s){},"7e2f":function(t){t.exports={art10:{path:"art10",title:"一些小段子",date:"2018-8-22",tag:"other",orgAddress:""},art9:{path:"art9",title:"vuex基础概念",date:"2018-8-19",tag:"vue",orgAddress:""},art8:{path:"art8",title:"vue图片懒加载",date:"2018-7-30",tag:"vue",orgAddress:""},art7:{path:"art7",title:"封装继承多态抽象面向对象4大特性",date:"2018-7-21",tag:"js",orgAddress:""},art6:{path:"art6",title:"函数、闭包概念",date:"2018-6-22",tag:"js",orgAddress:""},art5:{path:"art5",title:"js学习记录",date:"2018-6-19",tag:"js",orgAddress:""},art4:{path:"art4",title:"通过数组filter（）方法选取指定的元素",date:"2018-5-30",tag:"js",orgAddress:""},art3:{path:"art3",title:"css常用命名",date:"2018-5-21",tag:"css",orgAddress:""},art2:{path:"art2",title:"HTML语义化标签",date:"2018-4-22",tag:"html",orgAddress:""},art1:{path:"art1",title:"css布局基础",date:"2018-4-19",tag:"css",orgAddress:""}}},"8c92":function(t,e,s){"use strict";var a=s("e0af"),n=s.n(a);n.a},e0af:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0309.a3a1e0ec.js.map