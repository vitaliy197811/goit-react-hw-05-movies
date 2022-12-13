"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[597],{597:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(861),a=n(885),s=n(757),c=n.n(s),i=n(791),u=n(731),o=n(739),l=n(675),d="MovieCard_card__G6MP-",p="MovieCard_info__QTHMi",v="MovieCard_title__mQEBM",f="MovieCard_overview__cHLpI",h="MovieCard_genres__EDNHv",_="MovieCard_text__NNMdE",m=n(184),x=function(e){var t=e.movie,n=t.poster_path,r=t.original_title,a=t.vote_average,s=t.overview,c=t.genres;return(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w300".concat(n):"https://eshop.spartan.gr/images/virtuemart/product/noimage.jpg",alt:"movie poster",width:300}),(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)("h3",{className:v,children:r}),(0,m.jsxs)("p",{className:_,children:["User score: ",Math.round(10*a),"%"]}),(0,m.jsx)("h4",{className:f,children:"Overview"}),(0,m.jsx)("p",{className:_,children:s}),(0,m.jsx)("h5",{className:h,children:"Genres"}),(0,m.jsx)("p",{className:_,children:c.map((function(e){return e.name})).join(" ")})]})]})},g="MovieDetails_details__TGlfg",j="MovieDetails_button__uXZxd",w=n(474),k=function(){var e,t,n,s,d,p,v=(0,i.useState)(null),f=(0,a.Z)(v,2),h=f[0],_=f[1],k=(0,i.useState)(!1),y=(0,a.Z)(k,2),b=y[0],Z=y[1],M=(0,o.UO)().id,N=(0,o.TH)(),C=(0,o.s0)(),U=null!==(e=null===(t=N.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.t0=_,e.next=5,(0,l.s_)(M);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),console.log(e.t2);case 12:return e.prev=12,Z(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[M]),(0,m.jsxs)("section",{className:g,children:[(0,m.jsx)("button",{className:j,onClick:function(){return C(U)},children:"Go back"}),b&&(0,m.jsx)(w.Z,{}),h&&(0,m.jsxs)("div",{children:[(0,m.jsx)(x,{movie:h}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:" Additional information"}),(0,m.jsx)("div",{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(u.rU,{to:"cast",state:{from:null!==(n=null===(s=N.state)||void 0===s?void 0:s.from)&&void 0!==n?n:"/"},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(u.rU,{to:"reviews",state:{from:null!==(d=null===(p=N.state)||void 0===p?void 0:p.from)&&void 0!==d?d:"/"},children:"Reviews"})})]})}),(0,m.jsx)(i.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading..."}),children:(0,m.jsx)(o.j3,{})})]})]})]})}},675:function(e,t,n){n.d(t,{Hg:function(){return o},Tn:function(){return _},s_:function(){return p},uP:function(){return l},v:function(){return f}});var r=n(861),a=n(757),s=n.n(a),c=n(388),i="https://api.themoviedb.org/3/",u="2e3720a8bccf444312af356dec280511",o=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"trending/movie/day?api_key=").concat(u,"&language=en-US"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=597.7f9e8879.chunk.js.map