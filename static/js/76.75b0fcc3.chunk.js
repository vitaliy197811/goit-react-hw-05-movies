"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r=n(861),a=n(885),c=n(757),s=n.n(c),u=n(791),i=n(739),o=n(675),p=n(474),f="Cast_card__WlXfx",l="Cast_casts__WZ4DG",v="Cast_img__-isbW",h="Cast_name__6UbFm",d="Cast_item__a0CDL",m=n(184),g=function(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],g=(0,u.useState)(!1),_=(0,a.Z)(g,2),x=_[0],w=_[1],k=(0,i.UO)().id;(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.prev=1,t.t0=c,t.next=5,(0,o.v)(k);case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(1),console.log(t.t2);case 12:return t.prev=12,w(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[k]);return(0,m.jsxs)(m.Fragment,{children:[x&&(0,m.jsx)(p.Z,{}),!n&&(0,m.jsx)("h2",{children:"We don't have a list of actors for this movie"}),n&&(0,m.jsx)("ul",{className:l,children:n.map((function(t){var e=t.id,n=t.character,r=t.name,a=t.profile_path;return(0,m.jsxs)("li",{className:f,children:[(0,m.jsx)("img",{className:v,src:a?"https://image.tmdb.org/t/p/w200".concat(a):"https://eshop.spartan.gr/images/virtuemart/product/noimage.jpg",alt:r}),(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("p",{className:d,children:n}),(0,m.jsx)("p",{className:d,children:r})]})]},e)}))})]})}},675:function(t,e,n){n.d(e,{Hg:function(){return o},Tn:function(){return v},s_:function(){return f},uP:function(){return p},v:function(){return l}});var r=n(861),a=n(757),c=n.n(a),s=n(388),u="https://api.themoviedb.org/3/",i="2e3720a8bccf444312af356dec280511",o=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"trending/movie/day?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.75b0fcc3.chunk.js.map