(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[91],{2481:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(0),c=n.n(r),i=n(7),o=n(87),l=n(119),u=n.n(l),m=(n(898),n(594)),s=n(595),d=n(593),p=n(592),f=n(86),g=n(510),b=n(588),E=n(591),v=n(566),h=n(910),x=n(511),j=n(150),O=n(154),y=n(148),k=n(611),w=n(897),C=n(899),B=n.n(C);function L(){var e=Object(a.a)(["\n  font-weight: 600;\n  font-size: 15px;\n  margin-right: ","px;\n"]);return L=function(){return e},e}function A(){var e=Object(a.a)(["\n  color: ",";\n  font-weight: 600;\n  margin-right: ","px;\n  line-height: 1.75;\n"]);return A=function(){return e},e}function R(){var e=Object(a.a)(["\n  display: flex;\n  position: absolute;\n  bottom: ","px;\n  right: ","px;\n"]);return R=function(){return e},e}function T(){var e=Object(a.a)(["\n  background: ",";\n  width: 40px;\n  height: 6px;\n  border-radius: 6px;\n  display: inline-block;\n  margin-right: ","px;\n"]);return T=function(){return e},e}function D(){var e=Object(a.a)(["\n  color: ",";\n  vertical-align: middle;\n"]);return D=function(){return e},e}function I(){var e=Object(a.a)(["\n  margin-left: 8px;\n"]);return I=function(){return e},e}function J(){var e=Object(a.a)(["\n  position: relative;\n\n  &:last-child {\n    padding-bottom: ","px;\n  }\n"]);return J=function(){return e},e}function P(){var e=Object(a.a)(["\n  border: 1px solid ",";\n  margin-bottom: ","px;\n  cursor: grab;\n  \n  &:hover {\n    background: ",";\n  }\n"]);return P=function(){return e},e}function z(){var e=Object(a.a)(["\n  &:last-child {\n    padding-bottom: ","px;\n  }\n"]);return z=function(){return e},e}var F=c.a.forwardRef((function(e,t){return c.a.createElement(o.c,Object.assign({innerRef:t},e))})),G=Object(i.d)(m.a)(x.b),N=Object(i.d)(s.a)(z(),(function(e){return e.theme.spacing(4)})),S=Object(i.d)(d.a)(x.b),U=Object(i.d)(p.a)(x.b),W=Object(i.d)(G)(P(),(function(e){return e.theme.palette.grey[300]}),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.body.background})),q=Object(i.d)(N)(J(),(function(e){return e.theme.spacing(4)})),H=i.d.div(I()),K=Object(i.d)(w.a)(D(),(function(e){return e.theme.palette.grey[500]})),M=i.d.div(T(),(function(e){return e.color}),(function(e){return e.theme.spacing(2)})),Q=i.d.div(R(),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(4)})),V=i.d.div(A(),(function(e){return e.theme.palette.grey[500]}),(function(e){return e.theme.spacing(1)})),X=Object(i.d)(f.a)(x.b),Y=Object(i.d)(X)(L(),(function(e){return e.theme.spacing(10)}));function Z(e){var t=e.title,n=e.description,a=e.onContainerLoaded,r=e.children;return c.a.createElement(G,{mb:6},c.a.createElement(N,{pb:0},c.a.createElement(X,{variant:"h6",gutterBottom:!0},t),c.a.createElement(X,{variant:"body2",mb:4},n),c.a.createElement("div",{ref:function(e){e&&a(e)}},r),c.a.createElement(g.a,{color:"primary",variant:"contained",fullWidth:!0},c.a.createElement(k.a,null),"Add new task")))}function $(e){var t=e.content,n=e.avatars;return c.a.createElement(W,{mb:4},c.a.createElement(q,null,t.badges&&t.badges.map((function(e,t){return c.a.createElement(M,{color:e,key:t})})),c.a.createElement(Y,{variant:"body1",gutterBottom:!0},t.title),c.a.createElement(H,null,c.a.createElement(h.a,{max:3},n&&n.map((function(e,t){return c.a.createElement(b.a,{src:"/static/img/avatars/avatar-".concat(e,".jpg"),key:t})})))),t.notifications&&c.a.createElement(Q,null,c.a.createElement(V,null,t.notifications),c.a.createElement(K,null))))}var _=[{title:"Redesign the homepage",badges:[j.a[600],O.a[600]],notifications:2},{title:"Upgrade dependencies to latest versions",badges:[j.a[600]],notifications:1},{title:"Google Adwords best practices"},{title:"Improve site speed",badges:[j.a[600]],notifications:3},{title:"Stripe payment integration",badges:[y.a[600]]}];t.default=function(){var e=[],t=function(t){e.push(t)};return Object(r.useEffect)((function(){B()(e)}),[e]),c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{title:"Tasks"}),c.a.createElement(X,{variant:"h3",gutterBottom:!0,display:"inline"},"Tasks"),c.a.createElement(U,{"aria-label":"Breadcrumb",mt:2},c.a.createElement(E.a,{component:F,exact:!0,to:"/"},"Dashboard"),c.a.createElement(E.a,{component:F,exact:!0,to:"/"},"Pages"),c.a.createElement(X,null,"Tasks")),c.a.createElement(S,{my:6}),c.a.createElement(v.a,{container:!0,spacing:6},c.a.createElement(v.a,{item:!0,xs:12,lg:4,xl:4},c.a.createElement(Z,{title:"Backlog",description:"Nam pretium turpis et arcu. Duis arcu.",onContainerLoaded:t},c.a.createElement($,{content:_[0],avatars:[1,2,3,4]}),c.a.createElement($,{content:_[2],avatars:[2]}),c.a.createElement($,{content:_[3],avatars:[2,3]}),c.a.createElement($,{content:_[1],avatars:[]}),c.a.createElement($,{content:_[4],avatars:[]}))),c.a.createElement(v.a,{item:!0,xs:12,lg:4,xl:4},c.a.createElement(Z,{title:"In Progress",description:"Curabitur ligula sapien, tincidunt non.",onContainerLoaded:t},c.a.createElement($,{content:_[2],avatars:[3,1,2]}),c.a.createElement($,{content:_[4],avatars:[2]}))),c.a.createElement(v.a,{item:!0,xs:12,lg:4,xl:4},c.a.createElement(Z,{title:"Completed",description:"Aenean posuere, tortor sed cursus feugiat.",onContainerLoaded:t},c.a.createElement($,{content:_[3],avatars:[1,2]}),c.a.createElement($,{content:_[2],avatars:[4]}),c.a.createElement($,{content:_[0],avatars:[]})))))}}}]);
//# sourceMappingURL=91.642bd04b.chunk.js.map