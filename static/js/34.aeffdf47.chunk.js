(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[34],{1197:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(210),o=n(211),i=n(213),c=n(212),l=n(0),s=n.n(l),u=n(7),m=n(67),d=n(93),h=n.n(d),f=n(594),b=n(597),p=n(610),E=n(163),v=n(521),g=n(595),C=n(85),O=n(773),k=n(582),j=n(516),y=n(518),w=n(604),x=n(579),L=n(700),S=n(522),T=s.a.forwardRef((function(e,t){return s.a.createElement(m.c,Object.assign({innerRef:t},e))})),z=Object(u.d)(f.a)(S.b),B=Object(u.d)(b.a)(S.b),R=Object(u.d)(p.a)(S.b),D=Object(u.d)(E.a)(S.b),P=Object(u.d)(v.a)(S.b),A=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={open:!1},e.handleClick=function(){e.setState({open:!0})},e.handleClose=function(t,n){"clickaway"!==n&&e.setState({open:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){return s.a.createElement(z,{mb:6},s.a.createElement(g.a,null,s.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Simple Snackbar"),s.a.createElement(C.a,{variant:"body2",gutterBottom:!0},"A basic snackbar that aims to reproduce Google Keep's snackbar behavior."),s.a.createElement(D,{mt:3},s.a.createElement(P,{onClick:this.handleClick,variant:"contained",color:"secondary"},"Open simple snackbar"),s.a.createElement(O.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},"Note archived"),action:[s.a.createElement(P,{key:"undo",color:"secondary",size:"small",onClick:this.handleClose},"UNDO"),s.a.createElement(k.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleClose},s.a.createElement(L.a,null))]}))))}}]),n}(s.a.Component),M=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={open:!1,vertical:"top",horizontal:"center"},e.handleClick=function(t){return function(){e.setState(Object(a.a)({open:!0},t))}},e.handleClose=function(){e.setState({open:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.vertical,n=e.horizontal,a=e.open;return s.a.createElement(z,{mb:6},s.a.createElement(g.a,null,s.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Positioned Snackbar"),s.a.createElement(C.a,{variant:"body2",gutterBottom:!0},"There may be circumstances when the placement of the snackbar needs to be more flexible."),s.a.createElement(D,{mt:3},s.a.createElement(P,{onClick:this.handleClick({vertical:"top",horizontal:"center"}),variant:"contained",color:"secondary",size:"small",mr:2},"Top-Center"),s.a.createElement(P,{onClick:this.handleClick({vertical:"top",horizontal:"right"}),variant:"contained",color:"secondary",size:"small",mr:2},"Top-Right"),s.a.createElement(P,{onClick:this.handleClick({vertical:"bottom",horizontal:"right"}),variant:"contained",color:"secondary",size:"small",mr:2},"Bottom-Right"),s.a.createElement(P,{onClick:this.handleClick({vertical:"bottom",horizontal:"center"}),variant:"contained",color:"secondary",size:"small",mr:2},"Bottom-Center"),s.a.createElement(P,{onClick:this.handleClick({vertical:"bottom",horizontal:"left"}),variant:"contained",color:"secondary",size:"small",mr:2},"Bottom-Left"),s.a.createElement(P,{onClick:this.handleClick({vertical:"top",horizontal:"left"}),variant:"contained",color:"secondary",size:"small",mr:2},"Top-Left"),s.a.createElement(O.a,{anchorOrigin:{vertical:t,horizontal:n},open:a,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},"I love snacks")}))))}}]),n}(s.a.Component),N=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).queue=[],e.state={open:!1,messageInfo:{}},e.handleClick=function(t){return function(){e.queue.push({message:t,key:(new Date).getTime()}),e.state.open?e.setState({open:!1}):e.processQueue()}},e.processQueue=function(){e.queue.length>0&&e.setState({messageInfo:e.queue.shift(),open:!0})},e.handleClose=function(t,n){"clickaway"!==n&&e.setState({open:!1})},e.handleExited=function(){e.processQueue()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.messageInfo;return s.a.createElement(z,{mb:6},s.a.createElement(g.a,null,s.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Consecutive Snackbar"),s.a.createElement(C.a,{variant:"body2",gutterBottom:!0},"Per Google's guidelines, when a second snackbar is triggered while the first is displayed, the first should start the contraction motion downwards before the second one animates upwards."),s.a.createElement(D,{mt:3},s.a.createElement(P,{onClick:this.handleClick("Message A"),variant:"contained",color:"secondary",mr:2},"Show message A"),s.a.createElement(P,{onClick:this.handleClick("Message B"),variant:"contained",color:"secondary",mr:2},"Show message B"),s.a.createElement(O.a,{key:e.key,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,onExited:this.handleExited,ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},e.message),action:[s.a.createElement(P,{key:"undo",color:"secondary",size:"small",onClick:this.handleClose},"UNDO"),s.a.createElement(k.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleClose},s.a.createElement(L.a,null))]}))))}}]),n}(s.a.Component),I=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={open:!1,Transition:null},e.handleClick=function(t){return function(){e.setState({open:!0,Transition:t})}},e.handleClose=function(){e.setState({open:!1})},e}return Object(o.a)(n,[{key:"transitionLeft",value:function(e){return s.a.createElement(j.a,Object.assign({},e,{direction:"left"}))}},{key:"transitionUp",value:function(e){return s.a.createElement(j.a,Object.assign({},e,{direction:"up"}))}},{key:"transitionRight",value:function(e){return s.a.createElement(j.a,Object.assign({},e,{direction:"right"}))}},{key:"transitionDown",value:function(e){return s.a.createElement(j.a,Object.assign({},e,{direction:"down"}))}},{key:"render",value:function(){return s.a.createElement(z,{mb:6},s.a.createElement(g.a,null,s.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Control Direction"),s.a.createElement(C.a,{variant:"body2",gutterBottom:!0},"Change the direction of the transition. Slide is the default transition."),s.a.createElement(D,{mt:3},s.a.createElement(P,{onClick:this.handleClick(this.transitionLeft),variant:"contained",color:"secondary",mr:2},"Right"),s.a.createElement(P,{onClick:this.handleClick(this.transitionUp),variant:"contained",color:"secondary",mr:2},"Up"),s.a.createElement(P,{onClick:this.handleClick(this.transitionRight),variant:"contained",color:"secondary",mr:2},"Left"),s.a.createElement(P,{onClick:this.handleClick(this.transitionDown),variant:"contained",color:"secondary",mr:2},"Down"),s.a.createElement(O.a,{open:this.state.open,onClose:this.handleClose,TransitionComponent:this.state.Transition,ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},"I love snacks")}))))}}]),n}(s.a.Component),H=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={open:!1},e.handleClick=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){return s.a.createElement(z,{mb:6},s.a.createElement(g.a,null,s.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Snackbar Transition"),s.a.createElement(C.a,{variant:"body2",gutterBottom:!0},"Use a different transition (fade)."),s.a.createElement(D,{mt:3},s.a.createElement(P,{onClick:this.handleClick,variant:"contained",color:"secondary"},"Open with Fade Transition"),s.a.createElement(O.a,{open:this.state.open,onClose:this.handleClose,TransitionComponent:y.a,ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},"I love snacks")}))))}}]),n}(s.a.Component);t.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{title:"Snackbars"}),s.a.createElement(C.a,{variant:"h3",gutterBottom:!0,display:"inline"},"Snackbars"),s.a.createElement(R,{"aria-label":"Breadcrumb",mt:2},s.a.createElement(w.a,{component:T,exact:!0,to:"/"},"Dashboard"),s.a.createElement(w.a,{component:T,exact:!0,to:"/"},"Components"),s.a.createElement(C.a,null,"Snackbars")),s.a.createElement(B,{my:6}),s.a.createElement(x.a,{container:!0,spacing:6},s.a.createElement(x.a,{item:!0,xs:12,md:6},s.a.createElement(A,null),s.a.createElement(N,null),s.a.createElement(H,null)),s.a.createElement(x.a,{item:!0,xs:12,md:6},s.a.createElement(M,null),s.a.createElement(I,null))))}},700:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(71);t.a=Object(o.a)(r.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},707:function(e,t,n){"use strict";var a=n(0),r=n(19),o=(n(2),n(42)),i=n(14),c=n(65);function l(e){return e.substring(2).toLowerCase()}t.a=function(e){var t=e.children,n=e.disableReactTree,s=void 0!==n&&n,u=e.mouseEvent,m=void 0===u?"onClick":u,d=e.onClickAway,h=e.touchEvent,f=void 0===h?"onTouchEnd":h,b=a.useRef(!1),p=a.useRef(null),E=a.useRef(!1),v=a.useRef(!1);a.useEffect((function(){return E.current=!0,function(){E.current=!1}}),[]);var g=a.useCallback((function(e){p.current=r.findDOMNode(e)}),[]),C=Object(i.a)(t.ref,g),O=Object(c.a)((function(e){var t=v.current;if(v.current=!1,E.current&&p.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(b.current)b.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(p.current)>-1;else n=!Object(o.a)(p.current).documentElement.contains(e.target)||p.current.contains(e.target);n||!s&&t||d(e)}})),k=function(e){return function(n){v.current=!0;var a=t.props[e];a&&a(n)}},j={ref:C};return!1!==f&&(j[f]=k(f)),a.useEffect((function(){if(!1!==f){var e=l(f),t=Object(o.a)(p.current),n=function(){b.current=!0};return t.addEventListener(e,O),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,O),t.removeEventListener("touchmove",n)}}}),[O,f]),!1!==m&&(j[m]=k(m)),a.useEffect((function(){if(!1!==m){var e=l(m),t=Object(o.a)(p.current);return t.addEventListener(e,O),function(){t.removeEventListener(e,O)}}}),[O,m]),a.createElement(a.Fragment,null,a.cloneElement(t,j))}},773:function(e,t,n){"use strict";var a=n(4),r=n(36),o=n(1),i=n(0),c=(n(2),n(5)),l=n(6),s=n(48),u=n(707),m=n(65),d=n(11),h=n(109),f=n(520),b=n(774),p=i.forwardRef((function(e,t){var n=e.action,r=e.anchorOrigin,l=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,p=r.horizontal,E=e.autoHideDuration,v=void 0===E?null:E,g=e.children,C=e.classes,O=e.className,k=e.ClickAwayListenerProps,j=e.ContentProps,y=e.disableWindowBlurListener,w=void 0!==y&&y,x=e.message,L=e.onClose,S=e.onEnter,T=e.onEntered,z=e.onEntering,B=e.onExit,R=e.onExited,D=e.onExiting,P=e.onMouseEnter,A=e.onMouseLeave,M=e.open,N=e.resumeHideDuration,I=e.TransitionComponent,H=void 0===I?f.a:I,U=e.transitionDuration,q=void 0===U?{enter:s.b.enteringScreen,exit:s.b.leavingScreen}:U,W=e.TransitionProps,G=Object(a.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),F=i.useRef(),Q=i.useState(!0),J=Q[0],X=Q[1],K=Object(m.a)((function(){L&&L.apply(void 0,arguments)})),Y=Object(m.a)((function(e){L&&null!=e&&(clearTimeout(F.current),F.current=setTimeout((function(){K(null,"timeout")}),e))}));i.useEffect((function(){return M&&Y(v),function(){clearTimeout(F.current)}}),[M,v,Y]);var V=function(){clearTimeout(F.current)},Z=i.useCallback((function(){null!=v&&Y(null!=N?N:.5*v)}),[v,N,Y]);return i.useEffect((function(){if(!w&&M)return window.addEventListener("focus",Z),window.addEventListener("blur",V),function(){window.removeEventListener("focus",Z),window.removeEventListener("blur",V)}}),[w,Z,M]),!M&&J?null:i.createElement(u.a,Object(o.a)({onClickAway:function(e){L&&L(e,"clickaway")}},k),i.createElement("div",Object(o.a)({className:Object(c.a)(C.root,C["anchorOrigin".concat(Object(d.a)(l)).concat(Object(d.a)(p))],O),onMouseEnter:function(e){P&&P(e),V()},onMouseLeave:function(e){A&&A(e),Z()},ref:t},G),i.createElement(H,Object(o.a)({appear:!0,in:M,onEnter:Object(h.a)((function(){X(!1)}),S),onEntered:T,onEntering:z,onExit:B,onExited:Object(h.a)((function(){X(!0)}),R),onExiting:D,timeout:q,direction:"top"===l?"down":"up"},W),g||i.createElement(b.a,Object(o.a)({message:x,action:n},j)))))}));t.a=Object(l.a)((function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},i={justifyContent:"flex-start"},c={top:24},l={bottom:24},s={right:24},u={left:24},m={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(o.a)({},t,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({},c,m))),anchorOriginBottomCenter:Object(o.a)({},n,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({},l,m))),anchorOriginTopRight:Object(o.a)({},t,a,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({left:"auto"},c,s))),anchorOriginBottomRight:Object(o.a)({},n,a,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({left:"auto"},l,s))),anchorOriginTopLeft:Object(o.a)({},t,i,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({right:"auto"},c,u))),anchorOriginBottomLeft:Object(o.a)({},n,i,Object(r.a)({},e.breakpoints.up("sm"),Object(o.a)({right:"auto"},l,u)))}}),{flip:!1,name:"MuiSnackbar"})(p)},774:function(e,t,n){"use strict";var a=n(4),r=n(36),o=n(1),i=n(0),c=(n(2),n(5)),l=n(6),s=n(163),u=n(12),m=i.forwardRef((function(e,t){var n=e.action,r=e.classes,l=e.className,u=e.message,m=e.role,d=void 0===m?"alert":m,h=Object(a.a)(e,["action","classes","className","message","role"]);return i.createElement(s.a,Object(o.a)({role:d,square:!0,elevation:6,className:Object(c.a)(r.root,l),ref:t},h),i.createElement("div",{className:r.message},u),n?i.createElement("div",{className:r.action},n):null)}));t.a=Object(l.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(u.b)(e.palette.background.default,t);return{root:Object(o.a)({},e.typography.body2,Object(r.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(m)}}]);
//# sourceMappingURL=34.aeffdf47.chunk.js.map