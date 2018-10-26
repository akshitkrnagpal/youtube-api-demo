(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(71)},46:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(13),c=a.n(s),o=(a(44),a(46),a(5)),i=a(6),l=a(8),u=a(7),p=a(9),d=a(11),b=a(3),m=a(34),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.icon,a=e.text;return n.a.createElement(b.o,{className:"my-5"},n.a.createElement(b.c,{body:!0,className:"text-center p-5 justify-content-center",style:{minHeight:"30rem"}},n.a.createElement(m.a,{className:"mx-auto my-5",icon:t,size:"5x",spin:"spinner"===t}),n.a.createElement(b.h,{className:"lead"},a)))}}]),t}(r.Component),y=a(4),O=a(12),_=a(36),j=a.n(_),f=a(37),v=a.n(f),E=a(38),g=a.n(E),k=v.a.create({baseURL:"https://www.googleapis.com/youtube/v3",responseType:"json"}),S=g()(k),B=Object(O.a)(S,j.a),C=a(16),w="SEARCH_YOUTUBE",N="SET_SORT_BY",A="SET_ORDER",D={error:null,items:[],loading:!1},x={sortBy:void 0,order:"asc"},T=Object(O.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(C.a)({},e,{loading:!0,error:null});case"SEARCH_YOUTUBE_SUCCESS":return Object(C.a)({},e,{loading:!1,items:t.payload.data.items});case"SEARCH_YOUTUBE_FAIL":return Object(C.a)({},e,{loading:!1,error:t.error.response.data.error,items:[]});default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(C.a)({},e,{sortBy:t.field});case A:return Object(C.a)({},e,{order:t.order});default:return e}}}),I=Object(O.d)(T,B),U="AIzaSyCqoOSI3aVApyUMm1Y3nX9p2yAKObqJ_eE";function Y(e){return{type:A,order:e}}function q(e){return{type:N,field:e}}var R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={query:""},a._onChange=a._onChange.bind(Object(y.a)(Object(y.a)(a))),a._onSubmit=a._onSubmit.bind(Object(y.a)(Object(y.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.query;return n.a.createElement(b.o,{className:"py-5"},n.a.createElement(b.k,{onSubmit:this._onSubmit,className:"w-100"},n.a.createElement(b.m,{size:"lg"},n.a.createElement(b.l,{value:e,onChange:this._onChange,placeholder:"Search"}),n.a.createElement(b.n,{addonType:"append"},n.a.createElement(b.a,{color:"danger",onClick:this._onSubmit},"Search Youtube")))))}},{key:"_onChange",value:function(e){this.setState({query:e.target.value})}},{key:"_onSubmit",value:function(e){var t;e.preventDefault(),this.props.dispatch((t=this.state.query,{type:w,payload:{request:{url:"/search",params:{part:"snippet",q:t,maxResults:25,key:U}}}}))}}]),t}(r.Component),z=Object(d.b)()(R),H=a(15),L=a.n(H),J=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props._loading?n.a.createElement(h,{icon:"spinner"}):this.props._error?n.a.createElement(h,{icon:"exclamation",text:this.props._error.errors[0].message}):this.props._items.length<=0?n.a.createElement(h,{icon:"search",text:"Search for videos"}):n.a.createElement(b.o,null,n.a.createElement("div",{className:"clearfix w-100 py-4"},n.a.createElement("div",{className:"float-right"},n.a.createElement(P,null),n.a.createElement(K,null))),n.a.createElement("div",{className:"card-deck"},this._renderItems()))}},{key:"_renderItems",value:function(){var e=this.props._items.filter(function(e){return"youtube#video"===e.id.kind});switch(this.props._sortBy){case"title":"asc"===this.props._order?e.sort(function(e,t){return e.snippet.title.localeCompare(t.snippet.title)}):e.sort(function(e,t){return t.snippet.title.localeCompare(e.snippet.title)});break;case"publishedDate":"asc"===this.props._order?e.sort(function(e,t){return L.a.utc(e.snippet.publishedAt).diff(L.a.utc(t.snippet.publishedAt))}):e.sort(function(e,t){return L.a.utc(t.snippet.publishedAt).diff(L.a.utc(e.snippet.publishedAt))})}return e.map(function(e){return n.a.createElement(X,{key:e.id.videoId,videoId:e.id.videoId,snippet:e.snippet})})}}]),t}(r.Component);var V=Object(d.b)(function(e){return{_loading:e.search.loading,_items:e.search.items,_error:e.search.error,_sortBy:e.sort.sortBy,_order:e.sort.order}})(J),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._setSortByDate=a._setSortByDate.bind(Object(y.a)(Object(y.a)(a))),a._setSortByTitle=a._setSortByTitle.bind(Object(y.a)(Object(y.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(b.b,{size:"sm",className:"mx-3"},n.a.createElement(b.a,{disabled:!0,color:"secondary"},"Sort By"),n.a.createElement(b.a,{color:"light",className:"title"===this.props._sortBy?"active":"",onClick:this._setSortByTitle}," Title "),n.a.createElement(b.a,{color:"light",className:"publishedDate"===this.props._sortBy?"active":"",onClick:this._setSortByDate}," Published Date "))}},{key:"_setSortByTitle",value:function(){"title"!==this.props._sortBy&&this.props.dispatch(q("title"))}},{key:"_setSortByDate",value:function(){"publishedDate"!==this.props._sortBy&&this.props.dispatch(q("publishedDate"))}}]),t}(r.Component);var K=Object(d.b)(function(e){return{_order:e.sort.order,_sortBy:e.sort.sortBy}})(F),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._setAscending=a._setAscending.bind(Object(y.a)(Object(y.a)(a))),a._setDescending=a._setDescending.bind(Object(y.a)(Object(y.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(void 0===this.props._sortBy)return null;var e="asc"===this.props._order?"active":"",t="desc"===this.props._order?"active":"";return n.a.createElement(b.b,{size:"sm",className:"mx-3"},n.a.createElement(b.a,{disabled:!0,color:"secondary"},"Order"),n.a.createElement(b.a,{color:"light",className:e,onClick:this._setAscending}," Asc "),n.a.createElement(b.a,{color:"light",className:t,onClick:this._setDescending}," Desc "))}},{key:"_setAscending",value:function(){"asc"!==this.props._order&&this.props.dispatch(Y("asc"))}},{key:"_setDescending",value:function(){"desc"!==this.props._order&&this.props.dispatch(Y("desc"))}}]),t}(r.Component);var P=Object(d.b)(function(e){return{_order:e.sort.order,_sortBy:e.sort.sortBy}})(M),X=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).youtubeLink="https://www.youtube.com/watch?v=".concat(e.videoId),a._openYoutube=a._openYoutube.bind(Object(y.a)(Object(y.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.snippet,t=e.title,a=e.description,r=e.thumbnails,s=e.publishedAt,c=L()(s).fromNow();return n.a.createElement(b.c,{className:"mb-4"},n.a.createElement(b.f,{top:!0,src:r.high.url}),n.a.createElement(b.g,null,n.a.createElement(b.a,{className:"position-absolute",style:{bottom:"0.4rem",right:"0.4rem"},color:"danger",size:"sm",onClick:this._openYoutube}," View ")),n.a.createElement(b.d,{className:"pb-0"},n.a.createElement(b.i,null," ",t," "),n.a.createElement(b.h,{className:"py-2"}," ",a," ")),n.a.createElement(b.e,null,n.a.createElement("small",{className:"text-muted"}," Uploaded ",c," ")))}},{key:"_openYoutube",value:function(){window.open(this.youtubeLink,"_blank")}}]),t}(r.Component),G=a(14),Q=a(18);G.b.add(Q.a),G.b.add(Q.b),G.b.add(Q.c);var W=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,{store:I},n.a.createElement(b.j,null,n.a.createElement(z,null),n.a.createElement(V,null)))}}]),t}(r.Component);c.a.render(n.a.createElement(W,null),document.getElementById("root"))}},[[39,2,1]]]);
//# sourceMappingURL=main.0863cc2c.chunk.js.map