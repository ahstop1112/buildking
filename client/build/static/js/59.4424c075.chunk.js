(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[59],{2501:function(e,t,n){"use strict";n.r(t);var o=n(63),r=n(0),a=n.n(r),i=(n(629),Object(r.createContext)([{},function(e){return e}])),c=n(89),l=n(97),d=n(630),s=function(e,t){t.type;var n=[],o=[];switch(t.type){case"SET_USER_STATE":return Object(l.a)(Object(l.a)({},e),{},{authStr:"Bearer ".concat(t.token),idToken:t.token});case"CHECK_STATE":return console.log(e),Object(l.a)({},e);case"SET_LOGIN_BY_EMAIL":return Object(l.a)(Object(l.a)({},e),{},{login_method:"basic",email:t.email});case"INITIAL_CSRF_TOKEN":return Object(l.a)(Object(l.a)({},e),{},{csrfToken:t.csrfToken});case"LOGIN_FIELD_CHECK":(n=e.loginFields[t.fieldName]).value=t.value;var r=!1;switch(n.validation){case"email":r=Object(d.a)(n.value),n.isValid=r;break;case"password":r=n.value.length>5,n.isValid=r;break;default:n.isValid=r}return console.log(n),Object(l.a)(Object(l.a)({},e),{},{loginFields:Object(l.a)(Object(l.a)({},e.loginFields),{},Object(c.a)({},t.fieldName,n))});case"SUCCESS_LOGIN":return"development"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_CUSTOM_NODE_ENV&&"staging"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_CUSTOM_NODE_ENV||window.sessionStorage.setItem("user",JSON.stringify(e)),Object(l.a)(Object(l.a)({},e),{},{error:null,isLoggingIn:!0,hasRole:!0});case"LOGOUT":"development"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_CUSTOM_NODE_ENV&&"staging"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_CUSTOM_NODE_ENV||(window.sessionStorage.clear(),window.location.href="/login"),window.location.href="/";break;case"INITIAL_USER_INFO":return o=t.userInfo,console.log(o[0]),window.location.href="/projects",Object(l.a)(Object(l.a)({},e),{},{userInfo:o});default:return console.log("error"),Object(l.a)({},e)}},u=n(81),m=n(119),O=n.n(m),P=n(591),E=n(565),b=n(9),g=n(7),S=n(511),p=n(510),_=n(592),f=n(594),v=n(595),j=n(751),C=n(593),T=n(87),h=n(587),D=n(194),w=n(910);function A(){var e=Object(b.a)(["\n  padding-bottom: 20px;\n"]);return A=function(){return e},e}function N(){var e=Object(b.a)(["\n  margin-left: ","px;\n"]);return N=function(){return e},e}function R(){var e=Object(b.a)(["\n  height: 20px;\n  padding: 4px 0;\n  font-size: 85%;\n  background-color: ",";\n  color: ",";\n  margin-bottom: ","px;\n"]);return R=function(){return e},e}function k(){var e=Object(b.a)(["\n  height: 220px;\n"]);return k=function(){return e},e}function x(){var e=Object(b.a)(["\n  border-bottom: 1px solid ",";\n"]);return x=function(){return e},e}var B=Object(g.d)(p.a)(S.b),I=Object(g.d)(_.a)(S.b),F=Object(g.d)(f.a)(S.b),L=(Object(g.d)(v.a)(x(),(function(e){return e.theme.palette.grey[300]})),Object(g.d)(j.a)(k()),Object(g.d)(C.a)(S.b)),U=Object(g.d)(T.a)(S.b),y=(Object(g.d)(h.a)(R(),(function(e){return e.rgbcolor}),(function(e){return e.theme.palette.common.white}),(function(e){return e.theme.spacing(4)})),Object(g.d)(w.a)(N(),(function(e){return e.theme.spacing(2)})),Object(g.d)(D.a)(S.b)),K=Object(g.d)(E.a)(A()),H=n(614),W=n(615),J=n(612),V=n(613),z=n(616),G=function(){var e=Object(r.useContext)(i).state;return a.a.createElement(F,{mb:6},a.a.createElement(y,null,a.a.createElement(H.a,null,a.a.createElement(W.a,null,a.a.createElement(J.a,null,a.a.createElement(V.a,null,"Id"),a.a.createElement(V.a,null,"Name"),a.a.createElement(V.a,null,"Description"),a.a.createElement(V.a,null,"Division(s)"),a.a.createElement(V.a,null),a.a.createElement(V.a,null),a.a.createElement(V.a,null))),a.a.createElement(z.a,null,e.projects.map((function(e){return a.a.createElement(J.a,{key:e.id},a.a.createElement(V.a,{component:"th",scope:"row"},e.id),a.a.createElement(V.a,{component:"th",scope:"row"},a.a.createElement("b",null,e.name)),a.a.createElement(V.a,null,e.description),a.a.createElement(V.a,{align:"center"},e.divisions.length),a.a.createElement(V.a,null,a.a.createElement(B,{href:"/admin/projects/".concat(e.id,"/divisions"),variant:"contained",color:"primary",size:"medium",target:"_self"},"Details")),a.a.createElement(V.a,null,a.a.createElement(B,{href:"/admin/project/edit/".concat(e.id),variant:"contained",color:"secondary",size:"medium",target:"_self"},"Edit")),a.a.createElement(V.a,null,a.a.createElement(B,{href:"/admin/project/remove/".concat(e.id),variant:"contained",color:"secondary",size:"medium",target:"_self"},"Remove")))}))))))},M=a.a.forwardRef((function(e,t){return a.a.createElement(u.c,Object.assign({innerRef:t},e))})),Z=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(O.a,{title:"Projects"}),a.a.createElement(U,{variant:"h3",gutterBottom:!0},"Projects"),a.a.createElement(I,{"aria-label":"Breadcrumb",mt:2},a.a.createElement(P.a,{component:M,exact:!0,to:"/admin/projects"},"Admin"),a.a.createElement(U,null,"Projects")),a.a.createElement(L,{my:6}),a.a.createElement(K,{container:!0,item:!0,lg:12,md:12,spacing:2,justify:"flex-end"},a.a.createElement(B,{href:"/add/project",variant:"contained",color:"primary",size:"large",target:"_self"},"Add New Project")),a.a.createElement(E.a,{container:!0,item:!0,lg:12,md:12},a.a.createElement(G,null)))};t.default=function(e){var t=Object(r.useReducer)(s,{projects:[{id:1,name:"ND/2018/01",description:"Site Formation and Infrastructure Works for Police Facilities in Kong Nga Po",extra:{options:{location:["Portion A","Portion A1","Portion B","Portion B1","Portion B2","Portion C","Portion C1","Portion C2","Portion D","Portion D1","Portion D2","Portion E","Portion J15","Portion J18"],works:["Drainage","Formwork","Founding Condition","Ground Investigation","Pre-drilling","PBSH","Reinforcement","Steelworks","Setting Out","Underground Records","As-built Survey","Other"]}},deleted:0,divisions:[7,8,9,10,11]},{id:2,name:"2001SCO",description:"Construction of A 30-Classroom Primary School at Shui Chuen O, Sha Tin",extra:{options:{location:["Portion A","Portion A1","Portion B","Portion B1","Portion B2","Portion C","Portion C1","Portion C2","Portion D","Portion D1","Portion D2","Portion E","Portion J15","Portion J18"],works:["Drainage","Formwork","Founding Condition","Ground Investigation","Pre-drilling","PBSH","Reinforcement","Steelworks","Setting Out","Underground Records","As-built Survey","Other"]}},deleted:0,divisions:[2]},{id:3,name:"2002ABR",description:"Main Contract Works for Proposed New Extension Block at Victoria Shanghai Academy at 19 Shum Wan Road, Aberdeen, Hong Kong",extra:{options:{location:["Portion A","Portion A1","Portion B","Portion B1","Portion B2","Portion C","Portion C1","Portion C2","Portion D","Portion D1","Portion D2","Portion E","Portion J15","Portion J18"],works:["Drainage","Formwork","Founding Condition","Ground Investigation","Pre-drilling","PBSH","Reinforcement","Steelworks","Setting Out","Underground Records","As-built Survey","Other"]}},deleted:0,divisions:[3]},{id:4,name:"2007MSR",description:"Proposed Residential Development at Fanling North New Development at Fanling Sheung Shui Town Lot FSSTL 262, New Territories, Hong Kong",extra:{options:{location:["Portion A","Portion A1","Portion B","Portion B1","Portion B2","Portion C","Portion C1","Portion C2","Portion D","Portion D1","Portion D2","Portion E","Portion J15","Portion J18"],works:["Drainage","Formwork","Founding Condition","Ground Investigation","Pre-drilling","PBSH","Reinforcement","Steelworks","Setting Out","Underground Records","As-built Survey","Other"]}},deleted:0,divisions:[4]}]}),n=Object(o.a)(t,2),c=n[0],l=n[1];return a.a.createElement(i.Provider,{value:{state:c,dispatch:l}},a.a.createElement(Z,null))}},629:function(e,t,n){"use strict";var o=n(0);Object(o.createContext)([{},function(e){return e}])},630:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(89),n(688),n(641),[{label:"All",max:"",min:""},{label:"0-50",min:0,max:50},{label:"51-100",min:51,max:100},{label:"101-500",min:101,max:500},{label:"501-1,000",min:501,max:1e3},{label:"1,001-10,000",min:1001,max:1e4},{label:"10,000+",min:10001,max:1e9}].map((function(e){return{label:e.label,value:e.label,min:e.min,max:e.max,type:"companySizes"}})),(new Date).toJSON().slice(0,10).replace(/-/g,"-");var o=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}}}]);
//# sourceMappingURL=59.4424c075.chunk.js.map