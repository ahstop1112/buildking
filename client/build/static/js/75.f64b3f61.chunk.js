(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[75],{1180:function(e,a,t){"use strict";t.r(a);var n=t(185),l=t(199),r=t(200),i=t(202),o=t(201),c=t(0),m=t.n(c),s=t(7),u=t(87),d=t(119),h=t.n(d),p=t(594),E=t(593),b=t(592),g=t(193),C=t(669),f=t(693),v=t(559),y=t(508),O=t(1181),k=t(588),j=t(561),w=t(595),x=t(86),S=t(510),W=t(670),A=t(1182),B=t(671),F=t(622),V=t(639),D=t(2505),L=t(570),G=t(665),I=t(691),J=t(1184),M=t(591),R=t(566),T=t(756),q=t(611),z=t(511),P=m.a.forwardRef((function(e,a){return m.a.createElement(u.c,Object.assign({innerRef:a},e))})),U=Object(s.d)(p.a)(z.b),Y=Object(s.d)(E.a)(z.b),H=Object(s.d)(b.a)(z.b),K=Object(s.d)(g.a)(z.b),N=["username@gmail.com","user02@gmail.com"],Q=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).handleClose=function(){e.props.onClose(e.props.selectedValue)},e.handleListItemClick=function(a){e.props.onClose(a)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=(a.classes,a.onClose,a.selectedValue,Object(n.a)(a,["classes","onClose","selectedValue"]));return m.a.createElement(C.a,Object.assign({onClose:this.handleClose,"aria-labelledby":"simple-dialog-title",open:!0},t),m.a.createElement(f.a,{id:"simple-dialog-title"},"Set backup account"),m.a.createElement("div",null,m.a.createElement(v.a,null,N.map((function(a){return m.a.createElement(y.a,{button:!0,onClick:function(){return e.handleListItemClick(a)},key:a},m.a.createElement(O.a,null,m.a.createElement(k.a,null,m.a.createElement(T.a,null))),m.a.createElement(j.a,{primary:a}))})),m.a.createElement(y.a,{button:!0,onClick:function(){return e.handleListItemClick("addAccount")}},m.a.createElement(O.a,null,m.a.createElement(k.a,null,m.a.createElement(q.a,null))),m.a.createElement(j.a,{primary:"add account"})))))}}]),t}(m.a.Component),X=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={open:!1,selectedValue:N[1]},e.handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(a){e.setState({selectedValue:a,open:!1})},e}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(U,{mb:6},m.a.createElement(w.a,null,m.a.createElement(x.a,{variant:"h6",gutterBottom:!0},"Simple Dialogs"),m.a.createElement(x.a,{variant:"body2",gutterBottom:!0},"Simple dialogs can provide additional details or actions about a list item."),m.a.createElement(K,{mt:4},m.a.createElement(S.a,{variant:"contained",color:"primary",onClick:this.handleClickOpen},"Open simple dialog"),m.a.createElement(Q,{selectedValue:this.state.selectedValue,open:this.state.open,onClose:this.handleClose}),m.a.createElement(K,{mt:2},m.a.createElement(x.a,{variant:"body2"},"Selected: ",this.state.selectedValue)))))}}]),t}(m.a.Component),Z=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={open:!1},e.handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(U,{mb:6},m.a.createElement(w.a,null,m.a.createElement(x.a,{variant:"h6",gutterBottom:!0},"Alerts"),m.a.createElement(x.a,{variant:"body2",gutterBottom:!0},"Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation."),m.a.createElement(K,{mt:4},m.a.createElement(S.a,{variant:"contained",color:"primary",onClick:this.handleClickOpen},"Open alert dialog"),m.a.createElement(C.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},m.a.createElement(f.a,{id:"alert-dialog-title"},"Use Google's location service?"),m.a.createElement(W.a,null,m.a.createElement(A.a,{id:"alert-dialog-description"},"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),m.a.createElement(B.a,null,m.a.createElement(S.a,{onClick:this.handleClose,color:"primary"},"Disagree"),m.a.createElement(S.a,{onClick:this.handleClose,color:"primary",autoFocus:!0},"Agree"))))))}}]),t}(m.a.Component),$=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={open:!1,fullWidth:!0,maxWidth:"sm"},e.handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e.handleMaxWidthChange=function(a){e.setState({maxWidth:a.target.value})},e.handleFullWidthChange=function(a){e.setState({fullWidth:a.target.checked})},e}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(U,{mb:6},m.a.createElement(w.a,null,m.a.createElement(x.a,{variant:"h6",gutterBottom:!0},"Simple Dialogs"),m.a.createElement(x.a,{variant:"body2",gutterBottom:!0},"Simple dialogs can provide additional details or actions about a list item."),m.a.createElement(K,{mt:4},m.a.createElement(m.a.Fragment,null,m.a.createElement(S.a,{variant:"contained",color:"primary",onClick:this.handleClickOpen},"Open max-width dialog"),m.a.createElement(C.a,{fullWidth:this.state.fullWidth,maxWidth:this.state.maxWidth,open:this.state.open,onClose:this.handleClose,"aria-labelledby":"max-width-dialog-title"},m.a.createElement(f.a,{id:"max-width-dialog-title"},"Optional sizes"),m.a.createElement(W.a,null,m.a.createElement(A.a,null,"You can set my maximum width and whether to adapt or not."),m.a.createElement("form",{noValidate:!0},m.a.createElement(F.a,null,m.a.createElement(V.a,{htmlFor:"max-width"},"maxWidth"),m.a.createElement(D.a,{value:this.state.maxWidth,onChange:this.handleMaxWidthChange,inputProps:{name:"max-width",id:"max-width"}},m.a.createElement(L.a,{value:!1},"false"),m.a.createElement(L.a,{value:"xs"},"xs"),m.a.createElement(L.a,{value:"sm"},"sm"),m.a.createElement(L.a,{value:"md"},"md"),m.a.createElement(L.a,{value:"lg"},"lg"),m.a.createElement(L.a,{value:"xl"},"xl")))),m.a.createElement("form",null,m.a.createElement(G.a,{control:m.a.createElement(I.a,{checked:this.state.fullWidth,onChange:this.handleFullWidthChange,value:"fullWidth"}),label:"Full width"}))),m.a.createElement(B.a,null,m.a.createElement(S.a,{onClick:this.handleClose,color:"primary"},"Close")))))))}}]),t}(m.a.Component),_=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={open:!1},e.handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(U,{mb:6},m.a.createElement(w.a,null,m.a.createElement(x.a,{variant:"h6",gutterBottom:!0},"Form Dialogs"),m.a.createElement(x.a,{variant:"body2",gutterBottom:!0},"Form dialogs allow users to fill out form fields within a dialog."),m.a.createElement(K,{mt:4},m.a.createElement("div",null,m.a.createElement(S.a,{variant:"contained",color:"primary",onClick:this.handleClickOpen},"Open form dialog"),m.a.createElement(C.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},m.a.createElement(f.a,{id:"form-dialog-title"},"Subscribe"),m.a.createElement(W.a,null,m.a.createElement(A.a,null,"To subscribe to this website, please enter your email address here. We will send updates occasionally."),m.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0})),m.a.createElement(B.a,null,m.a.createElement(S.a,{onClick:this.handleClose,color:"primary"},"Cancel"),m.a.createElement(S.a,{onClick:this.handleClose,color:"primary"},"Subscribe")))))))}}]),t}(m.a.Component);a.default=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(h.a,{title:"Dialogs"}),m.a.createElement(x.a,{variant:"h3",gutterBottom:!0,display:"inline"},"Dialogs"),m.a.createElement(H,{"aria-label":"Breadcrumb",mt:2},m.a.createElement(M.a,{component:P,exact:!0,to:"/"},"Dashboard"),m.a.createElement(M.a,{component:P,exact:!0,to:"/"},"Components"),m.a.createElement(x.a,null,"Dialogs")),m.a.createElement(Y,{my:6}),m.a.createElement(R.a,{container:!0,spacing:6},m.a.createElement(R.a,{item:!0,xs:12,md:6},m.a.createElement(X,null),m.a.createElement(Z,null)),m.a.createElement(R.a,{item:!0,xs:12,md:6},m.a.createElement($,null),m.a.createElement(_,null))))}}}]);
//# sourceMappingURL=75.f64b3f61.chunk.js.map