"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{881:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(861),a=n(885),c=n(757),u=n.n(c),s=n(791),i=n(731),o=n(739),p=n(675),f=n(474),l="Movies_list__hqYjd",v="Movies_movies__TE99a",h="Movies_item__Ba4aJ",_="Movies_link__MzAfU",d="Movies_input__KrUqs",m="Movies_button__GcIka",g=n(184),x=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],x=(0,s.useState)(""),y=(0,a.Z)(x,2),k=y[0],w=y[1],Z=(0,i.lr)(),b=(0,a.Z)(Z,2),S=b[0],j=b[1],U=(0,s.useState)(!1),M=(0,a.Z)(U,2),N=M[0],q=M[1],C=S.get("query");(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=c,t.next=4,(0,p.uP)(C);case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),console.log(t.t2);case 11:return t.prev=11,q(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}C&&(q(!0),function(){t.apply(this,arguments)}())}),[C]);var T=(0,o.TH)();return(0,g.jsxs)("div",{className:l,children:[(0,g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j({query:k}),w("")},children:[(0,g.jsx)("input",{className:d,type:"text",value:k,onChange:function(t){w(t.currentTarget.value.toLowerCase())}}),(0,g.jsx)("button",{className:m,type:"submit",children:"Search"})]}),N&&(0,g.jsx)(f.Z,{}),n&&(0,g.jsx)("ul",{className:v,children:n.map((function(t){var e=t.id,n=t.title;return(0,g.jsx)("li",{className:h,children:(0,g.jsx)(i.rU,{className:_,to:"/movies/".concat(e),state:{from:T},children:n})},e)}))})]})}},675:function(t,e,n){n.d(e,{Hg:function(){return o},Tn:function(){return d},s_:function(){return l},uP:function(){return p},v:function(){return h}});var r=n(861),a=n(757),c=n.n(a),u=n(388),s="https://api.themoviedb.org/3/",i="2e3720a8bccf444312af356dec280511",o=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"trending/movie/day?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=881.f4b00fcf.chunk.js.map