(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[56],{2476:function(e,a,t){"use strict";t.r(a);var n=t(63),l=t(10),r=t(0),c=t.n(r),i=t(7),o=t(88),u=t(120),m=t.n(u),d=t(594),s=t(593),E=t(194),b=t(589),h=t(627),p=t(624),f=t(625),g=t(687),v=t(2510),O=t(574),k=t(87),P=t(2509),S=t(570),j=t(2475),y=t(626),C=t(628),w=t(584),x=t(2511),z=t(568),M=t(592),$=t(510),R=t(152),V=t(156),B=t(154),D=t(723),H=t(671),A=t(724),F=t(613),T=t(511);function W(){var e=Object(l.a)(["\n  min-width: 150px;\n"]);return W=function(){return e},e}function I(){var e=Object(l.a)(["\n  flex: 1 1 100%;\n"]);return I=function(){return e},e}function L(){var e=Object(l.a)(["\n  ",";\n\n  background: ",";\n  background: ",";\n  background: ",";\n  color: ",";\n"]);return L=function(){return e},e}var q=c.a.forwardRef((function(e,a){return c.a.createElement(o.c,Object.assign({innerRef:a},e))})),G=Object(i.d)(d.a)(T.b),J=Object(i.d)(s.a)(T.b),N=Object(i.d)(E.a)(T.b),U=Object(i.d)(b.a)(L(),T.b,(function(e){return e.shipped&&R.a[500]}),(function(e){return e.processing&&V.a[700]}),(function(e){return e.cancelled&&B.a[500]}),(function(e){return e.theme.palette.common.white})),K=i.d.div(I()),Q=i.d.div(W());function X(e,a,t,n,l,r){return{id:e,product:a,date:t,total:n,status:l,method:r}}var Y=[X("000253","Salt & Pepper Grinder","2020-01-02","$32,00",0,"Visa"),X("000254","Backpack","2020-01-04","$130,00",0,"PayPal"),X("000255","Pocket Speaker","2020-01-04","$80,00",2,"Mastercard"),X("000256","Glass Teapot","2020-01-08","$45,00",0,"Visa"),X("000257","Unbreakable Water Bottle","2020-01-09","$40,00",0,"PayPal"),X("000258","Spoon Saver","2020-01-14","$15,00",0,"Mastercard"),X("000259","Hip Flash","2020-01-16","$25,00",1,"Visa"),X("000260","Woven Slippers","2020-01-22","$20,00",0,"PayPal"),X("000261","Womens Watch","2020-01-22","$65,00",2,"Visa"),X("000262","Over-Ear Headphones","2020-01-23","$210,00",0,"Mastercard")];function Z(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var _=[{id:"id",alignment:"right",label:"Order ID"},{id:"product",alignment:"left",label:"Product"},{id:"date",alignment:"left",label:"Date"},{id:"total",alignment:"right",label:"Total"},{id:"status",alignment:"left",label:"Status"},{id:"method",alignment:"left",label:"Payment Method"},{id:"actions",alignment:"right",label:"Actions"}];function ee(e){var a=e.onSelectAllClick,t=e.order,n=e.orderBy,l=e.numSelected,r=e.rowCount,i=e.onRequestSort;return c.a.createElement(h.a,null,c.a.createElement(p.a,null,c.a.createElement(f.a,{padding:"checkbox"},c.a.createElement(g.a,{indeterminate:l>0&&l<r,checked:r>0&&l===r,onChange:a,inputProps:{"aria-label":"select all"}})),_.map((function(e){return c.a.createElement(f.a,{key:e.id,align:e.alignment,padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&t},c.a.createElement(v.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(a=e.id,function(e){i(e,a)})},e.label));var a}))))}var ae=function(e){var a=e.numSelected;return c.a.createElement(O.a,null,c.a.createElement(Q,null,a>0?c.a.createElement(k.a,{color:"inherit",variant:"subtitle1"},a," selected"):c.a.createElement(k.a,{variant:"h6",id:"tableTitle"},"Orders")),c.a.createElement(K,null),c.a.createElement("div",null,a>0?c.a.createElement(P.a,{title:"Delete"},c.a.createElement(S.a,{"aria-label":"Delete"},c.a.createElement(D.a,null))):c.a.createElement(P.a,{title:"Filter list"},c.a.createElement(S.a,{"aria-label":"Filter list"},c.a.createElement(H.a,null)))))};function te(){var e=c.a.useState("asc"),a=Object(n.a)(e,2),t=a[0],l=a[1],r=c.a.useState("customer"),i=Object(n.a)(r,2),o=i[0],u=i[1],m=c.a.useState([]),d=Object(n.a)(m,2),s=d[0],E=d[1],b=c.a.useState(0),h=Object(n.a)(b,2),v=h[0],O=h[1],k=c.a.useState(10),P=Object(n.a)(k,2),z=P[0],M=P[1],$=z-Math.min(z,Y.length-v*z);return c.a.createElement("div",null,c.a.createElement(N,null,c.a.createElement(ae,{numSelected:s.length}),c.a.createElement(j.a,null,c.a.createElement(y.a,{"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},c.a.createElement(ee,{numSelected:s.length,order:t,orderBy:o,onSelectAllClick:function(e){if(e.target.checked){var a=Y.map((function(e){return e.id}));E(a)}else E([])},onRequestSort:function(e,a){l(o===a&&"asc"===t?"desc":"asc"),u(a)},rowCount:Y.length}),c.a.createElement(C.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(Y,function(e,a){return"desc"===e?function(e,t){return Z(e,t,a)}:function(e,t){return-Z(e,t,a)}}(t,o)).slice(v*z,v*z+z).map((function(e,a){var t,n=(t=e.id,-1!==s.indexOf(t)),l="enhanced-table-checkbox-".concat(a);return c.a.createElement(p.a,{hover:!0,role:"checkbox","aria-checked":n,tabIndex:-1,key:"".concat(e.id,"-").concat(a),selected:n},c.a.createElement(f.a,{padding:"checkbox"},c.a.createElement(g.a,{checked:n,inputProps:{"aria-labelledby":l},onClick:function(a){return function(e,a){var t=s.indexOf(a),n=[];-1===t?n=n.concat(s,a):0===t?n=n.concat(s.slice(1)):t===s.length-1?n=n.concat(s.slice(0,-1)):t>0&&(n=n.concat(s.slice(0,t),s.slice(t+1))),E(n)}(0,e.id)}})),c.a.createElement(f.a,{align:"right"},"#",e.id),c.a.createElement(f.a,{align:"left"},e.product),c.a.createElement(f.a,{align:"left"},e.date),c.a.createElement(f.a,{align:"right"},e.total),c.a.createElement(f.a,null,0===e.status&&c.a.createElement(U,{size:"small",mr:1,mb:1,label:"Shipped",shipped:!0}),1===e.status&&c.a.createElement(U,{size:"small",mr:1,mb:1,label:"Processing",processing:!0}),2===e.status&&c.a.createElement(U,{size:"small",mr:1,mb:1,label:"Cancelled",cancelled:!0})),c.a.createElement(f.a,{align:"left"},e.method),c.a.createElement(f.a,{padding:"none",align:"right"},c.a.createElement(w.a,{mr:2},c.a.createElement(S.a,{"aria-label":"delete"},c.a.createElement(D.a,null)),c.a.createElement(S.a,{"aria-label":"details"},c.a.createElement(A.a,null)))))})),$>0&&c.a.createElement(p.a,{style:{height:53*$}},c.a.createElement(f.a,{colSpan:8}))))),c.a.createElement(x.a,{rowsPerPageOptions:[5,10,25],component:"div",count:Y.length,rowsPerPage:z,page:v,onChangePage:function(e,a){O(a)},onChangeRowsPerPage:function(e){M(parseInt(e.target.value,10)),O(0)}})))}a.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{title:"Orders"}),c.a.createElement(z.a,{justify:"space-between",container:!0,spacing:24},c.a.createElement(z.a,{item:!0},c.a.createElement(k.a,{variant:"h3",gutterBottom:!0,display:"inline"},"Orders"),c.a.createElement(J,{"aria-label":"Breadcrumb",mt:2},c.a.createElement(M.a,{component:q,exact:!0,to:"/"},"Dashboard"),c.a.createElement(M.a,{component:q,exact:!0,to:"/"},"Pages"),c.a.createElement(k.a,null,"Orders"))),c.a.createElement(z.a,{item:!0},c.a.createElement("div",null,c.a.createElement($.a,{variant:"contained",color:"primary"},c.a.createElement(F.a,null),"New Order")))),c.a.createElement(G,{my:6}),c.a.createElement(z.a,{container:!0,spacing:6},c.a.createElement(z.a,{item:!0,xs:12},c.a.createElement(te,null))))}},613:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(67);a.a=Object(r.a)(l.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},723:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(67);a.a=Object(r.a)(l.a.createElement("path",{d:"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"}),"Archive")},724:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(67);a.a=Object(r.a)(l.a.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye")}}]);
//# sourceMappingURL=56.3117eeda.chunk.js.map