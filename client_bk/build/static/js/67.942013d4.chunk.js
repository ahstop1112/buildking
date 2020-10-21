(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[67],{1203:function(e,a,t){"use strict";t.r(a);var n=t(64),l=t(210),r=t(211),o=t(213),c=t(212),m=t(0),i=t.n(m),s=t(7),u=t(67),h=t(93),E=t.n(h),b=t(594),d=t(597),g=t(610),v=t(163),p=t(595),f=t(85),j=t(635),C=t(636),y=t(1204),O=t(650),k=t(2498),w=t(756),B=t(697),S=t(676),A=t(604),x=t(579),G=t(522),J=i.a.forwardRef((function(e,a){return i.a.createElement(u.c,Object.assign({innerRef:a},e))})),P=Object(s.d)(b.a)(G.b),R=Object(s.d)(d.a)(G.b),F=Object(s.d)(g.a)(G.b),L=Object(s.d)(v.a)(G.b),D=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={value:"female"},e.handleChange=function(a){e.setState({value:a.target.value})},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(P,{mb:6},i.a.createElement(p.a,null,i.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"Radio Buttons"),i.a.createElement(f.a,{variant:"body2",gutterBottom:!0},"Radio buttons allow the user to select one option from a set."),i.a.createElement(L,{mt:3},i.a.createElement(j.a,{component:"fieldset"},i.a.createElement(C.a,{component:"legend"},"Gender"),i.a.createElement(y.a,{"aria-label":"Gender",name:"gender1",value:this.state.value,onChange:this.handleChange},i.a.createElement(O.a,{value:"female",control:i.a.createElement(k.a,null),label:"Female"}),i.a.createElement(O.a,{value:"male",control:i.a.createElement(k.a,null),label:"Male"}),i.a.createElement(O.a,{value:"other",control:i.a.createElement(k.a,null),label:"Other"}),i.a.createElement(O.a,{value:"disabled",disabled:!0,control:i.a.createElement(k.a,null),label:"(Disabled option)"}))))))}}]),t}(i.a.Component),K=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={gilad:!0,jason:!1,antoine:!1},e.handleChange=function(a){return function(t){e.setState(Object(n.a)({},a,t.target.checked))}},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state,a=e.gilad,t=e.jason,n=e.antoine;return i.a.createElement(P,{mb:6},i.a.createElement(p.a,null,i.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"Checkboxes"),i.a.createElement(f.a,{variant:"body2",gutterBottom:!0},"Checkboxes allow the user to select one or more items from a set."),i.a.createElement(L,{mt:3},i.a.createElement(j.a,{component:"fieldset"},i.a.createElement(C.a,{component:"legend"},"Assign responsibility"),i.a.createElement(w.a,null,i.a.createElement(O.a,{control:i.a.createElement(B.a,{checked:a,onChange:this.handleChange("gilad"),value:"gilad"}),label:"Gilad Gray"}),i.a.createElement(O.a,{control:i.a.createElement(B.a,{checked:t,onChange:this.handleChange("jason"),value:"jason"}),label:"Jason Killian"}),i.a.createElement(O.a,{control:i.a.createElement(B.a,{checked:n,onChange:this.handleChange("antoine"),value:"antoine"}),label:"Antoine Llorca"}))))))}}]),t}(i.a.Component),M=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={gilad:!0,jason:!1,antoine:!0},e.handleChange=function(a){return function(t){e.setState(Object(n.a)({},a,t.target.checked))}},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(P,{mb:6},i.a.createElement(p.a,null,i.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"Switches"),i.a.createElement(f.a,{variant:"body2",gutterBottom:!0},"Switches toggle the state of a single setting on or off."),i.a.createElement(L,{mt:3},i.a.createElement(j.a,{component:"fieldset"},i.a.createElement(C.a,{component:"legend"},"Assign responsibility"),i.a.createElement(w.a,null,i.a.createElement(O.a,{control:i.a.createElement(S.a,{checked:this.state.gilad,onChange:this.handleChange("gilad"),value:"gilad"}),label:"Gilad Gray"}),i.a.createElement(O.a,{control:i.a.createElement(S.a,{checked:this.state.jason,onChange:this.handleChange("jason"),value:"jason"}),label:"Jason Killian"}),i.a.createElement(O.a,{control:i.a.createElement(S.a,{checked:this.state.antoine,onChange:this.handleChange("antoine"),value:"antoine"}),label:"Antoine Llorca"}))))))}}]),t}(i.a.Component),T=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={value:"female"},e.handleChange=function(a){e.setState({value:a.target.value})},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(P,{mb:6},i.a.createElement(p.a,null,i.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"Label placement"),i.a.createElement(f.a,{variant:"body2",gutterBottom:!0},"You can change the placement of the label."),i.a.createElement(L,{mt:3},i.a.createElement(j.a,{component:"fieldset"},i.a.createElement(y.a,{"aria-label":"position",name:"position",value:this.state.value,onChange:this.handleChange,row:!0},i.a.createElement(O.a,{value:"top",control:i.a.createElement(k.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),i.a.createElement(O.a,{value:"start",control:i.a.createElement(k.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),i.a.createElement(O.a,{value:"bottom",control:i.a.createElement(k.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),i.a.createElement(O.a,{value:"end",control:i.a.createElement(k.a,{color:"primary"}),label:"End",labelPlacement:"end"}))))))}}]),t}(i.a.Component);a.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{title:"Selection Controls"}),i.a.createElement(f.a,{variant:"h3",gutterBottom:!0,display:"inline"},"Selection Controls"),i.a.createElement(F,{"aria-label":"Breadcrumb",mt:2},i.a.createElement(A.a,{component:J,exact:!0,to:"/"},"Dashboard"),i.a.createElement(A.a,{component:J,exact:!0,to:"/"},"Forms"),i.a.createElement(f.a,null,"Selection Controls")),i.a.createElement(R,{my:6}),i.a.createElement(x.a,{container:!0,spacing:6},i.a.createElement(x.a,{item:!0,xs:12,md:6},i.a.createElement(D,null),i.a.createElement(M,null)),i.a.createElement(x.a,{item:!0,xs:12,md:6},i.a.createElement(K,null),i.a.createElement(T,null))))}}}]);
//# sourceMappingURL=67.942013d4.chunk.js.map