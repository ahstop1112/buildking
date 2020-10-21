(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[53],{2491:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(7),i=a(88),l=a(120),c=a(594),s=a(593),u=a(87),m=a(568),d=a(592),p=a(584),b=a(511),h=o.a.forwardRef((function(e,t){return o.a.createElement(i.c,Object.assign({innerRef:t},e))})),f=Object(n.d)(c.a)(b.b),g=Object(n.d)(s.a)(b.b),v=Object(n.d)(u.a)(b.b);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.Helmet,{title:"Support"}),o.a.createElement(m.a,{container:!0,spacing:6,justify:"center"},o.a.createElement(m.a,{item:!0,xs:12,lg:9,xl:7},o.a.createElement(v,{variant:"h2",gutterBottom:!0,display:"inline"},"Support"),o.a.createElement(g,{"aria-label":"Breadcrumb",mt:2},o.a.createElement(d.a,{component:h,exact:!0,to:"/"},"Dashboard"),o.a.createElement(d.a,{component:h,exact:!0,to:"/documentation/welcome"},"Documentation"),o.a.createElement(v,null,"Support")),o.a.createElement(f,{my:6}),o.a.createElement(p.a,{mb:10},o.a.createElement(v,{variant:"subtitle1",gutterBottom:!0,my:4},"Our support mainly covers pre-sale questions, basic theme questions and bug reports through our support email: ",o.a.createElement(d.a,{href:"mailto:support@bootlab.io"},"support@bootlab.io"),". To be eligible to request the technical support you must have purchased the theme and have at least one Standard, Standard Plus or Extended License.",o.a.createElement("br",null),o.a.createElement("br",null),"When you send a support request please do describe your issue with  as much detail as possible. If you can provide a link to your developing site then this can help us to solve your issue faster. Upon submitting a bug report, we will take it as a high priority case and we will release the fix with upcoming releases or we can send the fix to a customer via email if the customer needs the fix urgently.")))))}},592:function(e,t,a){"use strict";var r=a(1),o=a(4),n=a(0),i=(a(2),a(5)),l=a(11),c=a(8),s=a(196),u=a(15),m=a(87),d=n.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.color,p=void 0===d?"primary":d,b=e.component,h=void 0===b?"a":b,f=e.onBlur,g=e.onFocus,v=e.TypographyClasses,y=e.underline,x=void 0===y?"hover":y,j=e.variant,E=void 0===j?"inherit":j,O=Object(o.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),w=Object(s.a)(),k=w.isFocusVisible,S=w.onBlurVisible,C=w.ref,N=n.useState(!1),B=N[0],R=N[1],I=Object(u.a)(t,C);return n.createElement(m.a,Object(r.a)({className:Object(i.a)(a.root,a["underline".concat(Object(l.a)(x))],c,B&&a.focusVisible,"button"===h&&a.button),classes:v,color:p,component:h,onBlur:function(e){B&&(S(),R(!1)),f&&f(e)},onFocus:function(e){k(e)&&R(!0),g&&g(e)},ref:I,variant:E},O))}));t.a=Object(c.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(d)},593:function(e,t,a){"use strict";var r=a(1),o=a(56),n=a(4),i=a(0),l=(a(62),a(2),a(5)),c=a(8),s=a(87),u=a(14),m=a(121),d=Object(m.a)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=a(158);var b=Object(c.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(n.a)(e,["classes"]);return i.createElement(p.a,Object(r.a)({component:"li",className:t.root,focusRipple:!0},a),i.createElement(d,{className:t.icon}))}));var h=i.forwardRef((function(e,t){var a=e.children,c=e.classes,u=e.className,m=e.component,d=void 0===m?"nav":m,p=e.expandText,h=void 0===p?"Show path":p,f=e.itemsAfterCollapse,g=void 0===f?1:f,v=e.itemsBeforeCollapse,y=void 0===v?1:v,x=e.maxItems,j=void 0===x?8:x,E=e.separator,O=void 0===E?"/":E,w=Object(n.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=i.useState(!1),S=k[0],C=k[1],N=i.Children.toArray(a).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:c.li,key:"child-".concat(t)},e)}));return i.createElement(s.a,Object(r.a)({ref:t,component:d,color:"textSecondary",className:Object(l.a)(c.root,u)},w),i.createElement("ol",{className:c.ol},function(e,t,a){return e.reduce((function(r,o,n){return n<e.length-1?r=r.concat(o,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(n),className:t},a)):r.push(o),r}),[])}(S||j&&N.length<=j?N:function(e){return y+g>=e.length?e:[].concat(Object(o.a)(e.slice(0,y)),[i.createElement(b,{"aria-label":h,key:"ellipsis",onClick:function(e){C(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(o.a)(e.slice(e.length-g,e.length)))}(N),c.separator,O)))}));t.a=Object(c.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)},594:function(e,t,a){"use strict";var r=a(1),o=a(4),n=a(0),i=(a(2),a(5)),l=a(8),c=a(14),s=n.forwardRef((function(e,t){var a=e.absolute,l=void 0!==a&&a,c=e.classes,s=e.className,u=e.component,m=void 0===u?"hr":u,d=e.flexItem,p=void 0!==d&&d,b=e.light,h=void 0!==b&&b,f=e.orientation,g=void 0===f?"horizontal":f,v=e.role,y=void 0===v?"hr"!==m?"separator":void 0:v,x=e.variant,j=void 0===x?"fullWidth":x,E=Object(o.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(m,Object(r.a)({className:Object(i.a)(c.root,s,"fullWidth"!==j&&c[j],l&&c.absolute,p&&c.flexItem,h&&c.light,"vertical"===g&&c.vertical),role:y,ref:t},E))}));t.a=Object(l.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)}}]);
//# sourceMappingURL=53.7da6f793.chunk.js.map