(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e893a99c"],{"39ce":function(e,n,r){},dfff:function(e,n,r){"use strict";r.r(n);var o=(r("99af"),r("2909")),t={name:"refresh",components:{CoolScroll:r("a7d6").f},data:function(){return{arr:[],isLoading:!1}},methods:{loadMore:function(){var e=this;this.isLoading=!0,setTimeout((function(){e.arr=[].concat(Object(o.a)(e.arr),Object(o.a)(new Array(10))),e.isLoading=!1}),2e3)},onRefresh:function(){var e=this;setTimeout((function(){e.$refs.scroll.$emit("refreshEnd")}),2e3)}},mounted:function(){}},s=(r("e01c"),r("2877")),a=Object(s.a)(t,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"refresh"},[r("CoolScroll",{ref:"scroll",attrs:{"has-refresh":!0,isLoading:e.isLoading,loadFn:e.loadMore},on:{onRefresh:e.onRefresh},scopedSlots:e._u([{key:"refreshTop",fn:function(n){var r=n.refresh;return[e._v(" "+e._s(r.isMove?r.canRefresh?"放开刷新":"下拉刷新":r.refreshing?"刷新中":"")+" ")]}},{key:"default",fn:function(){return[r("div",{staticClass:"page-content"},[r("p",[e._v("111111111111111")]),e._l(e.arr,(function(n,o){return r("div",{key:o},[e._v(e._s(o+1))])}))],2)]},proxy:!0}])})],1)}),[],!1,null,"7d13c374",null);n.default=a.exports},e01c:function(e,n,r){"use strict";var o=r("39ce");r.n(o).a}}]);