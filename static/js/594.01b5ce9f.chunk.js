"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[594],{8622:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(4165),o=e(5861),i=e(9439),a=e(2791),c=e(4952),u=e(606),s=e(6168),p=e(184);function f(n){var t=n.films;return(0,p.jsx)(s.eW,{children:t.map((function(n){var t=n.id,e=n.title,r=n.name,o=n.backdrop_path,i=n.release_date;return(0,p.jsx)(u.Z,{id:t,name:r,title:e,backdrop_path:o,release_date:i},t)}))})}function l(){var n=(0,a.useState)([]),t=(0,i.Z)(n,2),e=t[0],u=t[1];(0,a.useEffect)((function(){var n=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.KJ)().then((function(n){return u(n.results)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);var l=(new Date).toLocaleDateString();return(0,p.jsxs)("article",{children:[(0,p.jsxs)(s.Dx,{children:["Trending today: ",l]}),(0,p.jsx)(f,{films:e})]})}},606:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(7689),o=e.p+"static/media/noFilm.810972a1e8e7804a3ef2.jpg",i=e(6168),a=e(184);function c(n){var t=n.id,e=n.title,c=n.name,u=n.backdrop_path,s=n.release_date,p=(0,r.TH)(),f=new Date(s);return(0,a.jsx)(i.H2,{children:(0,a.jsxs)(i.jJ,{to:"/movies/".concat(t),state:{from:p},children:[u?(0,a.jsx)(i.Xb,{src:"https://image.tmdb.org/t/p/w300".concat(u),alt:""}):(0,a.jsx)(i.Xb,{src:o,alt:""}),(0,a.jsxs)(i.$4,{children:[(0,a.jsx)(i.sj,{children:e||c}),(0,a.jsx)(i.MW,{children:f.toLocaleDateString()})]})]})},t)}},4952:function(n,t,e){e.d(t,{Ai:function(){return d},Bt:function(){return h},KJ:function(){return l},Y5:function(){return m},y:function(){return x}});var r=e(4165),o=e(5861),i=e(1912),a=e(2007),c=e.n(a),u="https://api.themoviedb.org/3/",s="1d30702fbda303ebd1702730ed498532";function p(){return f.apply(this,arguments)}function f(){return f=(0,o.Z)((0,r.Z)().mark((function n(){var t,e,o,a=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e=a.length>1&&void 0!==a[1]?a[1]:{},n.next=4,i.Z.get(t,e);case 4:return o=n.sent,n.abrupt("return",o.data);case 6:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function l(){return p("".concat(u,"/trending/movie/day?api_key=").concat(s))}function d(n){return p("".concat(u,"search/movie?api_key=").concat(s,"&query=").concat(n,"&language=en-US&include_adult=false"))}function m(n){return p("".concat(u,"movie/").concat(n,"?api_key=").concat(s,"&language=en-US"))}function x(n){return p("".concat(u,"movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US&"))}function h(n){return p("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&"))}d.propTypes={search:c().string.isRequired},m.propTypes={id:c().number.isRequired},h.propTypes={id:c().number.isRequired},x.propTypes={id:c().number.isRequired}},6168:function(n,t,e){e.d(t,{$4:function(){return Z},Dx:function(){return g},Ei:function(){return _},H2:function(){return k},MW:function(){return j},US:function(){return b},Xb:function(){return P},eW:function(){return y},jJ:function(){return v},sj:function(){return w}});var r,o,i,a,c,u,s,p,f,l,d,m=e(168),x=e(6444),h=e(1087),g=(x.ZP.section(r||(r=(0,m.Z)(["\n  display: flex;\n  margin-top: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  justify-content: center;\n"]))),x.ZP.h1(o||(o=(0,m.Z)(["\n  text-align: end;\n  font-size: 28px;\n  margin-bottom: 10px;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  animation: text 20s infinite linear reverse ;\n  @keyframes text {\n    0%{\n      transform: translate(50%, 0);\n    }\n    \n    100%{\n      transform: translate(-100%, 0);\n    }\n  }\n"])),(function(n){return n.theme.colors.primaryText}))),v=(0,x.ZP)(h.OL)(i||(i=(0,m.Z)(["\n  text-decoration: none;\n"]))),Z=x.ZP.div(a||(a=(0,m.Z)(["\n  padding: 0 10px;\n"]))),b=x.ZP.h2(c||(c=(0,m.Z)(["\n  font-size: 26px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryText})),w=x.ZP.h3(u||(u=(0,m.Z)(["\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.colors.primaryText})),y=x.ZP.ul(s||(s=(0,m.Z)(["\n  display: grid;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  grid-gap: 24px;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n"]))),k=x.ZP.li(p||(p=(0,m.Z)(["\n  width: 100%;\n  display: block;\n  padding: 5px;\n  background-color: ",";\n  transform: scale(1);\n  transition: transform 250ms linear;\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n              0px 1px 1px 0px rgba(0, 0, 0, 0.14), \n              0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colors.buttonBg})),j=x.ZP.p(f||(f=(0,m.Z)(["\n  margin-bottom: 10px;\n  color: ",";\n  font-size: 14px;\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.colors.grey})),_=x.ZP.img(l||(l=(0,m.Z)(["\n  border-radius: 5px;\n  max-width: 480px;\n"]))),P=x.ZP.img(d||(d=(0,m.Z)(["\n  border-radius: 5px;\n  width: 100%;\n"])))}}]);
//# sourceMappingURL=594.01b5ce9f.chunk.js.map