(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[50],{2500:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(0),i=a.n(r),o=a(7),c=a(78),l=a(86),s=a(28),d=a(88),u=a(87),m=a(1),p=a(670),b=a(68),f=a(4),g=(a(62),a(2),a(5)),h=a(567),v=a(194),x=a(8);var E=r.createContext({}),j=a(600),O=r.forwardRef((function(e,t){var a=e.children,n=e.classes,i=e.className,o=e.defaultExpanded,c=void 0!==o&&o,l=e.disabled,s=void 0!==l&&l,d=e.expanded,u=e.onChange,x=e.square,O=void 0!==x&&x,y=e.TransitionComponent,k=void 0===y?h.a:y,w=e.TransitionProps,R=Object(f.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),C=Object(j.a)({controlled:d,default:c,name:"Accordion",state:"expanded"}),T=Object(b.a)(C,2),B=T[0],I=T[1],N=r.useCallback((function(e){I(!B),u&&u(e,!B)}),[B,u,I]),A=r.Children.toArray(a),S=Object(p.a)(A),W=S[0],M=S.slice(1),q=r.useMemo((function(){return{expanded:B,disabled:s,toggle:N}}),[B,s,N]);return r.createElement(v.a,Object(m.a)({className:Object(g.a)(n.root,i,B&&n.expanded,s&&n.disabled,!O&&n.rounded),ref:t,square:O},R),r.createElement(E.Provider,{value:q},W),r.createElement(k,Object(m.a)({in:B,timeout:"auto"},w),r.createElement("div",{"aria-labelledby":W.props.id,id:W.props["aria-controls"],role:"region"},M)))})),y=Object(x.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(O),k=a(158),w=a(570),R=r.forwardRef((function(e,t){var a=e.children,n=e.classes,i=e.className,o=e.expandIcon,c=e.IconButtonProps,l=e.onBlur,s=e.onClick,d=e.onFocusVisible,u=Object(f.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),p=r.useState(!1),b=p[0],h=p[1],v=r.useContext(E),x=v.disabled,j=void 0!==x&&x,O=v.expanded,y=v.toggle;return r.createElement(k.a,Object(m.a)({focusRipple:!1,disableRipple:!0,disabled:j,component:"div","aria-expanded":O,className:Object(g.a)(n.root,i,j&&n.disabled,O&&n.expanded,b&&n.focused),onFocusVisible:function(e){h(!0),d&&d(e)},onBlur:function(e){h(!1),l&&l(e)},onClick:function(e){y&&y(e),s&&s(e)},ref:t},u),r.createElement("div",{className:Object(g.a)(n.content,O&&n.expanded)},a),o&&r.createElement(w.a,Object(m.a)({className:Object(g.a)(n.expandIcon,O&&n.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},c),o))})),C=Object(x.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(R),T=r.forwardRef((function(e,t){var a=e.classes,n=e.className,i=Object(f.a)(e,["classes","className"]);return r.createElement("div",Object(m.a)({className:Object(g.a)(a.root,n),ref:t},i))})),B=Object(x.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(T),I=a(510),N=a(35),A=a(11),S=r.forwardRef((function(e,t){var a=e.classes,n=e.className,i=e.component,o=void 0===i?"div":i,c=e.disableGutters,l=void 0!==c&&c,s=e.fixed,d=void 0!==s&&s,u=e.maxWidth,p=void 0===u?"lg":u,b=Object(f.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return r.createElement(o,Object(m.a)({className:Object(g.a)(a.root,n,d&&a.fixed,l&&a.disableGutters,!1!==p&&a["maxWidth".concat(Object(A.a)(String(p)))]),ref:t},b))})),W=Object(x.a)((function(e){return{root:Object(N.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(N.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(N.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(N.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(N.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(N.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(S),M=a(568),q=a(2509),F=a(586),L=a(592),D=a(588),$=a(565),V=a(511);function z(){var e=Object(n.a)(["\n  padding-left: 16px;\n  padding-right: 16px;\n"]);return z=function(){return e},e}function P(){var e=Object(n.a)(["\n  padding: 0 16px;\n  box-shadow: 0;\n  min-height: 48px !important;\n\n  .MuiAccordionSummary-content {\n    margin: 12px 0 !important;\n  }\n"]);return P=function(){return e},e}function G(){var e=Object(n.a)(["\n  border: 1px solid rgba(0, 0, 0, .125);\n  border-radius: 6px;\n  box-shadow: 0;\n  text-align: left;\n  margin: 16px 0 !important;\n\n  &:before {\n    display: none;\n  }\n"]);return G=function(){return e},e}function H(){var e=Object(n.a)(["\n  ",";\n  background: ",";\n  text-align: center;\n"]);return H=function(){return e},e}function Y(){var e=Object(n.a)(["\n  ",";\n  text-align: center;\n"]);return Y=function(){return e},e}function J(){var e=Object(n.a)(["\n  max-width: 100%;\n  height: auto;\n  display: block;\n  box-shadow: 0 4px 12px 0 rgba(18,38,63,.125);\n  transition: .2s ease-in-out;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]);return J=function(){return e},e}function U(){var e=Object(n.a)(["\n  cursor: pointer;\n"]);return U=function(){return e},e}function X(){var e=Object(n.a)(["\n  ",";\n  background: ",";\n  text-align: center;\n"]);return X=function(){return e},e}function _(){var e=Object(n.a)(["\n  font-size: 1.875rem;\n  vertical-align: middle;\n  margin: ","px;\n  cursor: default;\n"]);return _=function(){return e},e}function Q(){var e=Object(n.a)(["\n  vertical-align: middle;\n  margin: ","px;\n  height: auto;\n"]);return Q=function(){return e},e}function K(){var e=Object(n.a)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  font-family: ",";\n  margin-bottom: ","px;\n"]);return K=function(){return e},e}function Z(){var e=Object(n.a)(["\n  margin: ","px;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  box-shadow: 0 6px 18px 0 rgba(18,38,63,.1);\n"]);return Z=function(){return e},e}function ee(){var e=Object(n.a)(["\n  padding: ","px;\n  line-height: 150%;\n"]);return ee=function(){return e},e}function te(){var e=Object(n.a)(["\n  padding: 3vw 5vw;\n"]);return te=function(){return e},e}function ae(){var e=Object(n.a)(["\n  color: ",";\n"]);return ae=function(){return e},e}var ne=o.d.div(V.b),re=Object(o.d)(u.a)(V.b),ie=Object(o.d)(re)(ae(),(function(e){return e.theme.palette.grey[700]})),oe=o.d.div(te()),ce=o.d.div(ee(),(function(e){return e.theme.spacing(6)})),le=o.d.img(Z(),(function(e){return e.theme.spacing(6)})),se=Object(o.d)(re)(K(),(function(e){return e.theme.typography.h5.fontSize}),(function(e){return e.theme.typography.fontWeightRegular}),(function(e){return e.theme.palette.grey[800]}),(function(e){return e.theme.typography.fontFamily}),(function(e){return e.theme.spacing(4)})),de=o.d.div(V.b),ue=o.d.img(Q(),(function(e){return e.theme.spacing(1)})),me=o.d.span(_(),(function(e){return e.theme.spacing(1)})),pe=o.d.div(X(),V.b,(function(e){return e.theme.palette.common.white})),be=o.d.div(V.b),fe=o.d.div(U()),ge=o.d.img(J()),he=o.d.div(Y(),V.b),ve=Object(o.d)(re)(H(),V.b,(function(e){return e.theme.palette.common.white})),xe=Object(o.d)(y)(G()),Ee=Object(o.d)(C)(P()),je=Object(o.d)(B)(z()),Oe=Object(o.d)(I.a)(V.b);function ye(){return i.a.createElement(oe,null,i.a.createElement(W,null,i.a.createElement(M.a,{container:!0,alignItems:"center",justify:"center"},i.a.createElement(M.a,{item:!0,xs:12,xl:6},i.a.createElement(ce,null,i.a.createElement(re,{variant:"h1",gutterBottom:!0},"Modern, Flexible and Responsive",i.a.createElement("br",null)," Material-UI Admin Template"),i.a.createElement(se,null,"A professional package that comes with plenty of UI components, forms, tables, charts, dashboards, pages and svg icons. Each one is fully customizable, responsive and easy to use."),i.a.createElement(de,{mb:4},i.a.createElement(q.a,{title:"Material-UI"},i.a.createElement(ue,{alt:"Material-UI",src:"/static/img/brands/material-ui.svg",style:{width:"44px"}})),i.a.createElement(q.a,{title:"Webpack"},i.a.createElement(ue,{alt:"Webpack",src:"/static/img/brands/webpack.svg",style:{width:"48px"}})),i.a.createElement(q.a,{title:"Npm / Yarn"},i.a.createElement(ue,{alt:"Npm",src:"/static/img/brands/npm.svg",style:{width:"48px"}})),i.a.createElement(q.a,{title:"Styled Components"},i.a.createElement(me,null,i.a.createElement("span",{role:"img","aria-label":"Styled Components"},"\ud83d\udc85"))),i.a.createElement(q.a,{title:"React"},i.a.createElement(ue,{alt:"React",src:"/static/img/brands/react.svg",style:{width:"50px"}})),i.a.createElement(q.a,{title:"Redux"},i.a.createElement(ue,{alt:"Redux",src:"/static/img/brands/redux.svg",style:{width:"38px"}}))),i.a.createElement(I.a,{href:"#demos",variant:"contained",color:"primary"},"View Demos"),i.a.createElement(Oe,{component:d.b,to:"/documentation/welcome",variant:"outlined",color:"default",ml:2},"Documentation"))),i.a.createElement(F.a,{lgDown:!0},i.a.createElement(M.a,{item:!0,xs:12,xl:6},i.a.createElement(le,{alt:"Material App - React Admin Template",src:"/static/img/screenshots/blue.png"}))))))}var ke=Object(c.b)()((function(e){var t=e.dispatch,a=e.id,n=e.title,r=e.img,o=Object(s.f)();return i.a.createElement(M.a,{item:!0,xs:12,sm:6,md:4,lg:4},i.a.createElement(be,{px:4},i.a.createElement(fe,{onClick:function(){return function(e){t(Object(l.a)(e)),o.push("/dashboard/analytics")}(a)}},i.a.createElement(ge,{alt:n,src:"/static/img/screenshots/".concat(r,".png")})),i.a.createElement(ne,{mb:3}),i.a.createElement(re,{variant:"h6"},n)))}));function we(e){var t=e.width;return i.a.createElement(pe,{id:"demos",mx:Object(D.c)("lg",t)?-10:-5,py:16},i.a.createElement(W,null,i.a.createElement(re,{variant:"h3",gutterBottom:!0},"Multiple Demos"),i.a.createElement(ie,{variant:"subtitle1",gutterBottom:!0},"The package includes 50+ prebuilt pages, 6 theme variants and 2 prebuilt dashboards."),i.a.createElement(ne,{mb:8}),i.a.createElement(M.a,{container:!0,spacing:6},i.a.createElement(ke,{id:0,title:"Dark variant - React Admin Template",img:"dark"}),i.a.createElement(ke,{id:1,title:"Light variant - React Admin Template",img:"light"}),i.a.createElement(ke,{id:2,title:"Blue variant - React Admin Template",img:"blue"}),i.a.createElement(ke,{id:3,title:"Green variant - React Admin Template",img:"green"}),i.a.createElement(ke,{id:4,title:"Indigo variant - React Admin Template",img:"indigo"}),i.a.createElement(ke,{id:5,title:"Teal variant - React Admin Template",img:"teal"}))))}function Re(e){var t=e.width;return i.a.createElement(ve,{id:"demos",mx:Object(D.c)("lg",t)?-10:-5,py:16},i.a.createElement(W,null,i.a.createElement(re,{variant:"h3",gutterBottom:!0},"Frequently Asked Questions"),i.a.createElement(ie,{variant:"subtitle1",gutterBottom:!0},"The questions below have been selected from those most commonly asked by our customers."),i.a.createElement(ne,{mb:8}),i.a.createElement(M.a,{container:!0,alignItems:"center",justify:"center"},i.a.createElement(M.a,{item:!0,xs:12,xl:8},i.a.createElement(xe,null,i.a.createElement(Ee,{expandIcon:i.a.createElement($.a,null),"aria-controls":"faq1-content",id:"faq1-header"},i.a.createElement(re,{variant:"subtitle1"},"Can I use this template for my client?")),i.a.createElement(je,null,i.a.createElement(ie,{variant:"subtitle1"},"Yes, the marketplace license allows you to use this theme in any end products. For more information on licenses, ",i.a.createElement(L.a,{href:"https://material-ui.com/store/license/",target:"_blank",rel:"noreferrer noopener"},"click here"),"."))),i.a.createElement(xe,null,i.a.createElement(Ee,{expandIcon:i.a.createElement($.a,null),"aria-controls":"faq2-content",id:"faq2-header"},i.a.createElement(re,{variant:"subtitle1"},"Does this product support TypeScript?")),i.a.createElement(je,null,i.a.createElement(ie,{variant:"subtitle1"},"Yes, the TypeScript version is included in the Standard Plus and Extended License. The default (JavaScript) version is available on all licenses."))),i.a.createElement(xe,null,i.a.createElement(Ee,{expandIcon:i.a.createElement($.a,null),"aria-controls":"faq2-content",id:"faq2-header"},i.a.createElement(re,{variant:"subtitle1"},"Are design assets (Figma, Sketch) included?")),i.a.createElement(je,null,i.a.createElement(ie,{variant:"subtitle1"},"Yes, design assets (Figma and Sketch) are included in the Standard Plus and Extended License."))),i.a.createElement(xe,null,i.a.createElement(Ee,{expandIcon:i.a.createElement($.a,null),"aria-controls":"faq2-content",id:"faq2-header"},i.a.createElement(re,{variant:"subtitle1"},"How can I request support?")),i.a.createElement(je,null,i.a.createElement(ie,{variant:"subtitle1"},"You can use our dedicated support email (",i.a.createElement(L.a,{href:"mailto:support@bootlab.io"},"support@bootlab.io"),") to send your issues or feedback. We are here to help.")))))))}function Ce(){return i.a.createElement(he,{pt:12,pb:4},i.a.createElement(W,null,i.a.createElement(M.a,{container:!0,alignItems:"center",justify:"center"},i.a.createElement(M.a,{item:!0,xs:12,md:6,lg:6,xl:6},i.a.createElement(re,{variant:"h2",gutterBottom:!0},"Join over 3,000 developers who are already working with our products"),i.a.createElement(ne,{mb:4}),i.a.createElement(I.a,{href:"https://material-ui.com/store/items/material-app/",variant:"contained",color:"primary",size:"large",target:"_blank"},"Purchase Now")))))}t.default=Object(D.a)()((function(e){var t=e.width;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ye,null),i.a.createElement(we,{width:t}),i.a.createElement(Re,{width:t}),i.a.createElement(Ce,null))}))},592:function(e,t,a){"use strict";var n=a(1),r=a(4),i=a(0),o=(a(2),a(5)),c=a(11),l=a(8),s=a(196),d=a(15),u=a(87),m=i.forwardRef((function(e,t){var a=e.classes,l=e.className,m=e.color,p=void 0===m?"primary":m,b=e.component,f=void 0===b?"a":b,g=e.onBlur,h=e.onFocus,v=e.TypographyClasses,x=e.underline,E=void 0===x?"hover":x,j=e.variant,O=void 0===j?"inherit":j,y=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),k=Object(s.a)(),w=k.isFocusVisible,R=k.onBlurVisible,C=k.ref,T=i.useState(!1),B=T[0],I=T[1],N=Object(d.a)(t,C);return i.createElement(u.a,Object(n.a)({className:Object(o.a)(a.root,a["underline".concat(Object(c.a)(E))],l,B&&a.focusVisible,"button"===f&&a.button),classes:v,color:p,component:f,onBlur:function(e){B&&(R(),I(!1)),g&&g(e)},onFocus:function(e){w(e)&&I(!0),h&&h(e)},ref:N,variant:O},y))}));t.a=Object(l.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(m)},600:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=e.controlled,a=e.default,r=(e.name,e.state,n.useRef(void 0!==t).current),i=n.useState(a),o=i[0],c=i[1];return[r?t:o,n.useCallback((function(e){r||c(e)}),[])]}},670:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(210),r=a(212),i=a(140),o=a(211);function c(e){return Object(n.a)(e)||Object(r.a)(e)||Object(i.a)(e)||Object(o.a)()}}}]);
//# sourceMappingURL=50.2af7b4ca.chunk.js.map