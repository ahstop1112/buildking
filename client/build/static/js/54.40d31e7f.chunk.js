(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[54],{2475:function(e,a,t){"use strict";t.r(a);var n=t(63),r=t(10),l=t(0),c=t.n(l),i=t(7),o=t(87),m=t(119),u=t.n(m),d=t(593),s=t(592),E=t(193),b=t(587),h=t(588),f=t(615),v=t(612),g=t(613),p=t(687),k=t(2513),w=t(572),O=t(86),j=t(2512),y=t(568),S=t(2476),x=t(614),z=t(616),C=t(582),A=t(2514),P=t(566),M=t(591),$=t(510),I=t(150),D=t(154),R=t(723),B=t(672),H=t(724),L=t(611),F=t(511);function J(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n"]);return J=function(){return e},e}function V(){var e=Object(r.a)(["\n  background: ",";\n"]);return V=function(){return e},e}function G(){var e=Object(r.a)(["\n  min-width: 150px;\n"]);return G=function(){return e},e}function T(){var e=Object(r.a)(["\n  flex: 1 1 100%;\n"]);return T=function(){return e},e}function W(){var e=Object(r.a)(["\n  ",";\n\n  background: ",";\n  background: ",";\n  color: ",";\n"]);return W=function(){return e},e}var q=c.a.forwardRef((function(e,a){return c.a.createElement(o.c,Object.assign({innerRef:a},e))})),N=Object(i.d)(d.a)(F.b),K=Object(i.d)(s.a)(F.b),Q=Object(i.d)(E.a)(F.b),U=Object(i.d)(b.a)(W(),F.b,(function(e){return e.paid&&I.a[500]}),(function(e){return e.sent&&D.a[700]}),(function(e){return(e.paid||e.sent)&&e.theme.palette.common.white})),X=i.d.div(T()),Y=i.d.div(G()),Z=Object(i.d)(h.a)(V(),(function(e){return e.theme.palette.primary.main})),_=i.d.div(J());function ee(e,a,t,n,r,l,c){return{customer:e,customerEmail:a,customerAvatar:t,status:n,amount:r,id:l,date:c}}var ae=[ee("Anna Walley","anna@walley.com","A",0,"$530,00","000112","2020-01-02"),ee("Doris Fritz","doris@fritz.com","D",1,"$209,00","000114","2020-02-13"),ee("Edward Adkins","edward@adkins.com","E",2,"$535,00","000117","2020-03-04"),ee("Edwin Baker","edwin@baker.com","E",2,"$678,00","000115","2020-02-17"),ee("Gordon Workman","gordan@workman.com","G",0,"$314,00","000119","2020-03-28"),ee("Jo Avery","jo@avery.com","J",0,"$864,00","000113","2020-01-23"),ee("Leigha Hyden","leigha@hyden.com","L",2,"$341,00","000118","2020-03-14"),ee("Maureen Gagnon","maureen@gagnon.com","M",1,"$781,00","000116","2020-02-22"),ee("Maxine Thompson","maxine@thompson.com","M",0,"$273,00","000121","2020-05-31"),ee("Shawn Waddell","shawn@waddell.com","S",0,"$713,00","000120","2020-04-25")];function te(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var ne=[{id:"status",alignment:"left",label:"Status"},{id:"customer",alignment:"left",label:"Customer"},{id:"id",alignment:"right",label:"ID"},{id:"amount",alignment:"right",label:"Amount"},{id:"date",alignment:"left",label:"Issue Date"},{id:"actions",alignment:"right",label:"Actions"}];function re(e){var a=e.onSelectAllClick,t=e.order,n=e.orderBy,r=e.numSelected,l=e.rowCount,i=e.onRequestSort;return c.a.createElement(f.a,null,c.a.createElement(v.a,null,c.a.createElement(g.a,{padding:"checkbox"},c.a.createElement(p.a,{indeterminate:r>0&&r<l,checked:l>0&&r===l,onChange:a,inputProps:{"aria-label":"select all"}})),ne.map((function(e){return c.a.createElement(g.a,{key:e.id,align:e.alignment,padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&t},c.a.createElement(k.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(a=e.id,function(e){i(e,a)})},e.label));var a}))))}var le=function(e){var a=e.numSelected;return c.a.createElement(w.a,null,c.a.createElement(Y,null,a>0?c.a.createElement(O.a,{color:"inherit",variant:"subtitle1"},a," selected"):c.a.createElement(O.a,{variant:"h6",id:"tableTitle"},"Invoices")),c.a.createElement(X,null),c.a.createElement("div",null,a>0?c.a.createElement(j.a,{title:"Delete"},c.a.createElement(y.a,{"aria-label":"Delete"},c.a.createElement(R.a,null))):c.a.createElement(j.a,{title:"Filter list"},c.a.createElement(y.a,{"aria-label":"Filter list"},c.a.createElement(B.a,null)))))};function ce(){var e=c.a.useState("asc"),a=Object(n.a)(e,2),t=a[0],r=a[1],l=c.a.useState("customer"),i=Object(n.a)(l,2),m=i[0],u=i[1],d=c.a.useState([]),s=Object(n.a)(d,2),E=s[0],b=s[1],h=c.a.useState(0),f=Object(n.a)(h,2),k=f[0],w=f[1],O=c.a.useState(5),j=Object(n.a)(O,2),P=j[0],M=j[1],$=P-Math.min(P,ae.length-k*P);return c.a.createElement("div",null,c.a.createElement(Q,null,c.a.createElement(le,{numSelected:E.length}),c.a.createElement(S.a,null,c.a.createElement(x.a,{"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},c.a.createElement(re,{numSelected:E.length,order:t,orderBy:m,onSelectAllClick:function(e){if(e.target.checked){var a=ae.map((function(e){return e.id}));b(a)}else b([])},onRequestSort:function(e,a){r(m===a&&"asc"===t?"desc":"asc"),u(a)},rowCount:ae.length}),c.a.createElement(z.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(ae,function(e,a){return"desc"===e?function(e,t){return te(e,t,a)}:function(e,t){return-te(e,t,a)}}(t,m)).slice(k*P,k*P+P).map((function(e,a){var t,n=(t=e.id,-1!==E.indexOf(t)),r="enhanced-table-checkbox-".concat(a);return c.a.createElement(v.a,{hover:!0,role:"checkbox","aria-checked":n,tabIndex:-1,key:"".concat(e.id,"-").concat(a),selected:n},c.a.createElement(g.a,{padding:"checkbox"},c.a.createElement(p.a,{checked:n,inputProps:{"aria-labelledby":r},onClick:function(a){return function(e,a){var t=E.indexOf(a),n=[];-1===t?n=n.concat(E,a):0===t?n=n.concat(E.slice(1)):t===E.length-1?n=n.concat(E.slice(0,-1)):t>0&&(n=n.concat(E.slice(0,t),E.slice(t+1))),b(n)}(0,e.id)}})),c.a.createElement(g.a,{component:"th",id:r,scope:"row"},c.a.createElement(_,null,c.a.createElement(Z,null,e.customerAvatar),c.a.createElement(C.a,{ml:3},e.customer,c.a.createElement("br",null),e.customerEmail))),c.a.createElement(g.a,null,0===e.status&&c.a.createElement(U,{size:"small",mr:1,mb:1,label:"Sent",sent:!0}),1===e.status&&c.a.createElement(U,{size:"small",mr:1,mb:1,label:"Void"}),2===e.status&&c.a.createElement(U,{size:"small",mr:1,mb:1,label:"Paid",paid:!0})),c.a.createElement(g.a,{align:"right"},"#",e.id),c.a.createElement(g.a,{align:"right"},e.amount),c.a.createElement(g.a,null,e.date),c.a.createElement(g.a,{align:"right"},c.a.createElement(y.a,{"aria-label":"delete"},c.a.createElement(R.a,null)),c.a.createElement(y.a,{"aria-label":"details",component:o.b,to:"/invoices/detail"},c.a.createElement(H.a,null))))})),$>0&&c.a.createElement(v.a,{style:{height:53*$}},c.a.createElement(g.a,{colSpan:7}))))),c.a.createElement(A.a,{rowsPerPageOptions:[5,10,25],component:"div",count:ae.length,rowsPerPage:P,page:k,onChangePage:function(e,a){w(a)},onChangeRowsPerPage:function(e){M(parseInt(e.target.value,10)),w(0)}})))}a.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{title:"Invoices"}),c.a.createElement(P.a,{justify:"space-between",container:!0,spacing:24},c.a.createElement(P.a,{item:!0},c.a.createElement(O.a,{variant:"h3",gutterBottom:!0,display:"inline"},"Invoices"),c.a.createElement(K,{"aria-label":"Breadcrumb",mt:2},c.a.createElement(M.a,{component:q,exact:!0,to:"/"},"Dashboard"),c.a.createElement(M.a,{component:q,exact:!0,to:"/"},"Pages"),c.a.createElement(O.a,null,"Invoices"))),c.a.createElement(P.a,{item:!0},c.a.createElement("div",null,c.a.createElement($.a,{variant:"contained",color:"primary"},c.a.createElement(L.a,null),"New Invoice")))),c.a.createElement(N,{my:6}),c.a.createElement(P.a,{container:!0,spacing:6},c.a.createElement(P.a,{item:!0,xs:12},c.a.createElement(ce,null))))}},611:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(67);a.a=Object(l.a)(r.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},723:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(67);a.a=Object(l.a)(r.a.createElement("path",{d:"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"}),"Archive")},724:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(67);a.a=Object(l.a)(r.a.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye")}}]);
//# sourceMappingURL=54.40d31e7f.chunk.js.map