(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[38],{1179:function(e,a,t){"use strict";t.r(a);var l=t(63),n=t(0),r=t.n(n),c=t(7),o=t(81),i=t(119),m=t.n(i),s=t(594),u=t(587),d=t(593),b=t(592),p=t(595),h=t(87),v=t(588),f=t(591),E=t(565),C=t(753),g=t(754),y=t(755),k=t(511),j=r.a.forwardRef((function(e,a){return r.a.createElement(o.c,Object.assign({innerRef:a},e))})),O=Object(c.d)(s.a)(k.b),D=Object(c.d)(u.a)(k.b),x=Object(c.d)(d.a)(k.b),N=Object(c.d)(b.a)(k.b),B=function(){var e=function(){alert("You clicked the delete icon.")},a=function(){alert("You clicked the chip.")};return r.a.createElement(O,{mb:6},r.a.createElement(p.a,null,r.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"Default Chips"),r.a.createElement(h.a,{variant:"body2",gutterBottom:!0},'Examples of Chips, using an image Avatar, SVG Icon Avatar, "Letter" and (string) Avatar.'),r.a.createElement("div",null,r.a.createElement(D,{label:"Basic Chip",m:1}),r.a.createElement(D,{avatar:r.a.createElement(v.a,null,"MB"),label:"Clickable Chip",onClick:a,m:1}),r.a.createElement(D,{avatar:r.a.createElement(v.a,{alt:"Natacha",src:"static/img/avatars/avatar-1.jpg"}),label:"Deletable Chip",onDelete:e,m:1}),r.a.createElement(D,{avatar:r.a.createElement(v.a,null,r.a.createElement(C.a,null)),label:"Clickable Deletable Chip",onClick:a,onDelete:e,m:1}),r.a.createElement(D,{icon:r.a.createElement(C.a,null),label:"Clickable Deletable Chip",onClick:a,onDelete:e,m:1}),r.a.createElement(D,{label:"Custom delete icon Chip",onClick:a,onDelete:e,deleteIcon:r.a.createElement(g.a,null),m:1}),r.a.createElement(D,{label:"Clickable Link Chip",component:"a",href:"#chip",clickable:!0,m:1}),r.a.createElement(D,{avatar:r.a.createElement(v.a,null,"MB"),label:"Primary Clickable Chip",clickable:!0,color:"primary",onDelete:e,deleteIcon:r.a.createElement(g.a,null),m:1}),r.a.createElement(D,{icon:r.a.createElement(C.a,null),label:"Primary Clickable Chip",clickable:!0,color:"primary",onDelete:e,deleteIcon:r.a.createElement(g.a,null),m:1}),r.a.createElement(D,{label:"Deletable Primary Chip",onDelete:e,color:"primary",m:1}),r.a.createElement(D,{avatar:r.a.createElement(v.a,null,r.a.createElement(C.a,null)),label:"Deletable Secondary Chip",onDelete:e,color:"secondary",m:1}),r.a.createElement(D,{icon:r.a.createElement(C.a,null),label:"Deletable Secondary Chip",onDelete:e,color:"secondary",m:1}))))},S=function(){var e=function(){alert("You clicked the delete icon.")},a=function(){alert("You clicked the chip.")};return r.a.createElement(O,{mb:6},r.a.createElement(p.a,null,r.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"Outlined Chips"),r.a.createElement(h.a,{variant:"body2",gutterBottom:!0},"Outlined chips offer an alternative style."),r.a.createElement("div",null,r.a.createElement(D,{label:"Basic Chip",m:1}),r.a.createElement(D,{avatar:r.a.createElement(v.a,null,"MB"),label:"Clickable Chip",onClick:a,m:1,variant:"outlined"}),r.a.createElement(D,{avatar:r.a.createElement(v.a,{alt:"Natacha",src:"static/img/avatars/avatar-1.jpg"}),label:"Deletable Chip",onDelete:e,m:1,variant:"outlined"}),r.a.createElement(D,{avatar:r.a.createElement(v.a,null,r.a.createElement(C.a,null)),label:"Clickable Deletable Chip",onClick:a,onDelete:e,m:1,variant:"outlined"}),r.a.createElement(D,{icon:r.a.createElement(C.a,null),label:"Clickable Deletable Chip",onClick:a,onDelete:e,m:1,variant:"outlined"}),r.a.createElement(D,{label:"Custom delete icon Chip",onClick:a,onDelete:e,deleteIcon:r.a.createElement(g.a,null),m:1,variant:"outlined"}),r.a.createElement(D,{label:"Clickable Link Chip",component:"a",href:"#chip",clickable:!0,m:1,variant:"outlined"}),r.a.createElement(D,{avatar:r.a.createElement(v.a,null,"MB"),label:"Primary Clickable Chip",clickable:!0,color:"primary",onDelete:e,deleteIcon:r.a.createElement(g.a,null),m:1,variant:"outlined"}),r.a.createElement(D,{icon:r.a.createElement(C.a,null),label:"Primary Clickable Chip",clickable:!0,color:"primary",onDelete:e,deleteIcon:r.a.createElement(g.a,null),m:1,variant:"outlined"}),r.a.createElement(D,{label:"Deletable Primary Chip",onDelete:e,color:"primary",m:1,variant:"outlined"}),r.a.createElement(D,{avatar:r.a.createElement(v.a,null,r.a.createElement(C.a,null)),label:"Deletable Secondary Chip",onDelete:e,color:"secondary",m:1,variant:"outlined"}),r.a.createElement(D,{icon:r.a.createElement(C.a,null),label:"Deletable Secondary Chip",onDelete:e,color:"secondary",m:1,variant:"outlined"}))))},w=function(){var e=Object(n.useState)([{key:0,label:"Angular"},{key:1,label:"jQuery"},{key:2,label:"Polymer"},{key:3,label:"React"},{key:4,label:"Vue.js"}]),a=Object(l.a)(e,2),t=a[0],c=a[1],o=function(e){return function(){"React"!==e.label?c(t.filter((function(a){return a.key!==e.key}))):alert("Why would you want to delete React?! :)")}};return r.a.createElement(O,{mb:6},r.a.createElement(p.a,null,r.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"Chip array"),r.a.createElement(h.a,{variant:"body2",gutterBottom:!0},"An example of rendering multiple Chips from an array of values"),r.a.createElement("div",null,t.map((function(e){var a=null;return"React"===e.label&&(a=r.a.createElement(y.a,null)),r.a.createElement(D,{key:e.key,icon:a,label:e.label,onDelete:o(e),m:1})})))))};a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:"Chips"}),r.a.createElement(h.a,{variant:"h3",gutterBottom:!0,display:"inline"},"Chips"),r.a.createElement(N,{"aria-label":"Breadcrumb",mt:2},r.a.createElement(f.a,{component:j,exact:!0,to:"/"},"Dashboard"),r.a.createElement(f.a,{component:j,exact:!0,to:"/"},"Components"),r.a.createElement(h.a,null,"Chips")),r.a.createElement(x,{my:6}),r.a.createElement(E.a,{container:!0,spacing:6},r.a.createElement(E.a,{item:!0,xs:12,md:6},r.a.createElement(B,null),r.a.createElement(w,null)),r.a.createElement(E.a,{item:!0,xs:12,md:6},r.a.createElement(S,null))))}},591:function(e,a,t){"use strict";var l=t(1),n=t(4),r=t(0),c=(t(2),t(5)),o=t(11),i=t(8),m=t(196),s=t(15),u=t(87),d=r.forwardRef((function(e,a){var t=e.classes,i=e.className,d=e.color,b=void 0===d?"primary":d,p=e.component,h=void 0===p?"a":p,v=e.onBlur,f=e.onFocus,E=e.TypographyClasses,C=e.underline,g=void 0===C?"hover":C,y=e.variant,k=void 0===y?"inherit":y,j=Object(n.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),O=Object(m.a)(),D=O.isFocusVisible,x=O.onBlurVisible,N=O.ref,B=r.useState(!1),S=B[0],w=B[1],z=Object(s.a)(a,N);return r.createElement(u.a,Object(l.a)({className:Object(c.a)(t.root,t["underline".concat(Object(o.a)(g))],i,S&&t.focusVisible,"button"===h&&t.button),classes:E,color:b,component:h,onBlur:function(e){S&&(x(),w(!1)),v&&v(e)},onFocus:function(e){D(e)&&w(!0),f&&f(e)},ref:z,variant:k},j))}));a.a=Object(i.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(d)},592:function(e,a,t){"use strict";var l=t(1),n=t(56),r=t(4),c=t(0),o=(t(62),t(2),t(5)),i=t(8),m=t(87),s=t(14),u=t(120),d=Object(u.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),b=t(156);var p=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(s.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(r.a)(e,["classes"]);return c.createElement(b.a,Object(l.a)({component:"li",className:a.root,focusRipple:!0},t),c.createElement(d,{className:a.icon}))}));var h=c.forwardRef((function(e,a){var t=e.children,i=e.classes,s=e.className,u=e.component,d=void 0===u?"nav":u,b=e.expandText,h=void 0===b?"Show path":b,v=e.itemsAfterCollapse,f=void 0===v?1:v,E=e.itemsBeforeCollapse,C=void 0===E?1:E,g=e.maxItems,y=void 0===g?8:g,k=e.separator,j=void 0===k?"/":k,O=Object(r.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),D=c.useState(!1),x=D[0],N=D[1],B=c.Children.toArray(t).filter((function(e){return c.isValidElement(e)})).map((function(e,a){return c.createElement("li",{className:i.li,key:"child-".concat(a)},e)}));return c.createElement(m.a,Object(l.a)({ref:a,component:d,color:"textSecondary",className:Object(o.a)(i.root,s)},O),c.createElement("ol",{className:i.ol},function(e,a,t){return e.reduce((function(l,n,r){return r<e.length-1?l=l.concat(n,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(r),className:a},t)):l.push(n),l}),[])}(x||y&&B.length<=y?B:function(e){return C+f>=e.length?e:[].concat(Object(n.a)(e.slice(0,C)),[c.createElement(p,{"aria-label":h,key:"ellipsis",onClick:function(e){N(!0);var a=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");a&&a.focus()}})],Object(n.a)(e.slice(e.length-f,e.length)))}(B),i.separator,j)))}));a.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)},593:function(e,a,t){"use strict";var l=t(1),n=t(4),r=t(0),c=(t(2),t(5)),o=t(8),i=t(14),m=r.forwardRef((function(e,a){var t=e.absolute,o=void 0!==t&&t,i=e.classes,m=e.className,s=e.component,u=void 0===s?"hr":s,d=e.flexItem,b=void 0!==d&&d,p=e.light,h=void 0!==p&&p,v=e.orientation,f=void 0===v?"horizontal":v,E=e.role,C=void 0===E?"hr"!==u?"separator":void 0:E,g=e.variant,y=void 0===g?"fullWidth":g,k=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return r.createElement(u,Object(l.a)({className:Object(c.a)(i.root,m,"fullWidth"!==y&&i[y],o&&i.absolute,b&&i.flexItem,h&&i.light,"vertical"===f&&i.vertical),role:C,ref:a},k))}));a.a=Object(o.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(i.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(m)},594:function(e,a,t){"use strict";var l=t(1),n=t(4),r=t(0),c=(t(2),t(5)),o=t(194),i=t(8),m=r.forwardRef((function(e,a){var t=e.classes,i=e.className,m=e.raised,s=void 0!==m&&m,u=Object(n.a)(e,["classes","className","raised"]);return r.createElement(o.a,Object(l.a)({className:Object(c.a)(t.root,i),elevation:s?8:1,ref:a},u))}));a.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(m)},595:function(e,a,t){"use strict";var l=t(1),n=t(4),r=t(0),c=(t(2),t(5)),o=t(8),i=r.forwardRef((function(e,a){var t=e.classes,o=e.className,i=e.component,m=void 0===i?"div":i,s=Object(n.a)(e,["classes","className","component"]);return r.createElement(m,Object(l.a)({className:Object(c.a)(t.root,o),ref:a},s))}));a.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},753:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(67);a.a=Object(r.a)(n.a.createElement("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}),"Face")},754:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(67);a.a=Object(r.a)(n.a.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done")},755:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(67);a.a=Object(r.a)(n.a.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}),"TagFaces")}}]);
//# sourceMappingURL=38.39f912ce.chunk.js.map