"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{168:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(861),a=t(885),c=t(757),u=t.n(c),s=t(791),i=t(739),o=t(675),f=t(474),p="Reviews_reviews__n3fdK",v=t(184),l=function(){var n=(0,s.useState)(null),e=(0,a.Z)(n,2),t=e[0],c=e[1],l=(0,s.useState)(!1),h=(0,a.Z)(l,2),d=h[0],g=h[1],w=(0,i.UO)().id;return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),n.prev=1,n.t0=c,n.next=5,(0,o.Tn)(w);case 5:n.t1=n.sent,(0,n.t0)(n.t1),n.next=12;break;case 9:n.prev=9,n.t2=n.catch(1),console.log(n.t2);case 12:return n.prev=12,g(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[w]),(0,v.jsxs)(v.Fragment,{children:[d&&(0,v.jsx)(f.Z,{}),!t&&(0,v.jsx)("h2",{children:"We don't have any reviews for this movie"}),t&&(0,v.jsx)("ul",{className:p,children:t.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,v.jsxs)("li",{children:[(0,v.jsxs)("h2",{children:["Author: ",t]}),(0,v.jsx)("p",{children:r})]},e)}))})]})}},675:function(n,e,t){t.d(e,{Hg:function(){return o},Tn:function(){return l},s_:function(){return p},uP:function(){return f},v:function(){return v}});var r=t(861),a=t(757),c=t.n(a),u=t(388),s="https://api.themoviedb.org/3/",i="2e3720a8bccf444312af356dec280511",o=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"trending/movie/day?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.fe313914.chunk.js.map