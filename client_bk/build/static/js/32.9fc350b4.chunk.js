(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[32],{17:function(e,t,a){"use strict";function r(e,t){return function(){return null}}a.r(t),a.d(t,"chainPropTypes",(function(){return r})),a.d(t,"deepmerge",(function(){return n.a})),a.d(t,"elementAcceptingRef",(function(){return c})),a.d(t,"elementTypeAcceptingRef",(function(){return u})),a.d(t,"exactProp",(function(){return f})),a.d(t,"formatMuiErrorMessage",(function(){return d.a})),a.d(t,"getDisplayName",(function(){return g})),a.d(t,"HTMLElementType",(function(){return y})),a.d(t,"ponyfillGlobal",(function(){return E})),a.d(t,"refType",(function(){return C}));var n=a(301),o=a(2),l=a.n(o);var i=(l.a.element,function(){return null});i.isRequired=(l.a.element.isRequired,function(){return null});var c=i;var u=(o.elementType,function(){return null});a(36),a(1);function f(e){return e}var d=a(218),s=a(108),m=a(56),p=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function b(e){var t="".concat(e).match(p);return t&&t[1]||""}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.displayName||e.name||b(e)||t}function v(e,t,a){var r=h(t);return e.displayName||(""!==r?"".concat(a,"(").concat(r,")"):a)}function g(e){if(null!=e){if("string"===typeof e)return e;if("function"===typeof e)return h(e,"Component");if("object"===Object(s.a)(e))switch(e.$$typeof){case m.ForwardRef:return v(e,e.render,"ForwardRef");case m.Memo:return v(e,e.type,"memo");default:return}}}function y(e,t,a,r,n){return null}var E="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),C=l.a.oneOfType([l.a.func,l.a.object])},2490:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),l=a(67),i=a(93),c=a.n(i),u=a(597),f=a(610),d=a(85),s=a(604),m=a(579),p=a(522),b=a(9),h=a(594),v=a(595),g=a(618);function y(){var e=Object(b.a)(["\n  height: 300px;\n"]);return y=function(){return e},e}var E=Object(o.d)(h.a)(p.b),C=o.d.div(p.b),O=o.d.div(y());var x=Object(o.e)((function(e){var t=e.theme,a={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales ($)",fill:!0,backgroundColor:"transparent",borderColor:t.palette.secondary.main,data:[2115,1562,1584,1892,1487,2223,2966,2448,2905,3838,2917,3327]},{label:"Orders",fill:!0,backgroundColor:"transparent",borderColor:t.palette.grey[500],borderDash:[4,4],data:[958,724,629,883,915,1214,1476,1212,1554,2128,1466,1827]}]};return n.a.createElement(E,{mb:1},n.a.createElement(v.a,null,n.a.createElement(d.a,{variant:"h6",gutterBottom:!0},"Line Chart"),n.a.createElement(d.a,{variant:"body2",gutterBottom:!0},"A line chart is a way of plotting data points on a line."),n.a.createElement(C,{mb:6}),n.a.createElement(O,null,n.a.createElement(g.Line,{data:a,options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{intersect:!1},hover:{intersect:!0},plugins:{filler:{propagate:!1}},scales:{xAxes:[{reverse:!0,gridLines:{color:"rgba(0,0,0,0.05)"}}],yAxes:[{ticks:{stepSize:500},display:!0,borderDash:[5,5],gridLines:{color:"rgba(0,0,0,0)",fontColor:"#fff"}}]}}}))))}));function j(){var e=Object(b.a)(["\n  height: 300px;\n  width: 100%;\n"]);return j=function(){return e},e}var A=Object(o.d)(h.a)(p.b),M=o.d.div(p.b),B=o.d.div(j());var w=Object(o.e)((function(e){var t=e.theme,a={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Last year",backgroundColor:t.palette.secondary.main,borderColor:t.palette.secondary.main,hoverBackgroundColor:t.palette.secondary.main,hoverBorderColor:t.palette.secondary.main,data:[54,67,41,55,62,45,55,73,60,76,48,79],barPercentage:.75,categoryPercentage:.5},{label:"This year",backgroundColor:t.palette.grey[300],borderColor:t.palette.grey[300],hoverBackgroundColor:t.palette.grey[300],hoverBorderColor:t.palette.grey[300],data:[69,66,24,48,52,51,44,53,62,79,51,68],barPercentage:.75,categoryPercentage:.5}]};return n.a.createElement(A,{mb:1},n.a.createElement(v.a,null,n.a.createElement(d.a,{variant:"h6",gutterBottom:!0},"Bar Chart"),n.a.createElement(d.a,{variant:"body2",gutterBottom:!0},"A bar chart provides a way of showing data values represented as vertical bars."),n.a.createElement(M,{mb:6}),n.a.createElement(B,null,n.a.createElement(g.Bar,{data:a,options:{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{gridLines:{display:!1},stacked:!1,ticks:{stepSize:20}}],xAxes:[{stacked:!1,gridLines:{color:"transparent"}}]}}}))))})),k=a(667),R=a.n(k),P=a(696),S=a.n(P);function D(){var e=Object(b.a)(["\n  height: 300px;\n"]);return D=function(){return e},e}var T=Object(o.d)(h.a)(p.b),L=o.d.div(p.b),F=o.d.div(D());var J=Object(o.e)((function(e){var t=e.theme,a={labels:["Social","Search Engines","Direct","Other"],datasets:[{data:[260,125,54,146],backgroundColor:[t.palette.secondary.main,R.a[500],S.a[500],t.palette.grey[300]],borderColor:"transparent"}]};return n.a.createElement(T,{mb:1},n.a.createElement(v.a,null,n.a.createElement(d.a,{variant:"h6",gutterBottom:!0},"Doughnut Chart"),n.a.createElement(d.a,{variant:"body2",gutterBottom:!0},"Doughnut charts are excellent at showing the relational proportions between data."),n.a.createElement(L,{mb:6}),n.a.createElement(F,null,n.a.createElement(g.Doughnut,{data:a,options:{maintainAspectRatio:!1,cutoutPercentage:65,legend:{display:!1}}}))))}));function _(){var e=Object(b.a)(["\n  height: 300px;\n"]);return _=function(){return e},e}var H=Object(o.d)(h.a)(p.b),N=o.d.div(p.b),z=o.d.div(_());var I=Object(o.e)((function(e){var t=e.theme,a={labels:["Social","Search Engines","Direct","Other"],datasets:[{data:[260,125,54,146],backgroundColor:[t.palette.secondary.main,R.a[500],S.a[500],t.palette.grey[300]],borderColor:"transparent"}]};return n.a.createElement(H,{mb:1},n.a.createElement(v.a,null,n.a.createElement(d.a,{variant:"h6",gutterBottom:!0},"Pie Chart"),n.a.createElement(d.a,{variant:"body2",gutterBottom:!0},"Pie charts are excellent at showing the relational proportions between data."),n.a.createElement(N,{mb:6}),n.a.createElement(z,null,n.a.createElement(g.Pie,{data:a,options:{maintainAspectRatio:!1,legend:{display:!1}}}))))})),$=a(691);function q(){var e=Object(b.a)(["\n  height: 300px;\n"]);return q=function(){return e},e}var G=Object(o.d)(h.a)(p.b),X=o.d.div(p.b),K=o.d.div(q());var Q=Object(o.e)((function(e){var t=e.theme,a={labels:["Speed","Reliability","Comfort","Safety","Efficiency"],datasets:[{label:"Model X",backgroundColor:Object($.lighten)(t.palette.secondary.main,.33),borderColor:t.palette.secondary.main,pointBackgroundColor:t.palette.secondary.main,pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:t.palette.secondary.main,data:[70,53,82,60,33]},{label:"Model S",backgroundColor:Object($.lighten)(R.a[600],.33),borderColor:R.a[600],pointBackgroundColor:R.a[600],pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:R.a[600],data:[35,38,65,85,84]}]};return n.a.createElement(G,{mb:1},n.a.createElement(v.a,null,n.a.createElement(d.a,{variant:"h6",gutterBottom:!0},"Radar Chart"),n.a.createElement(d.a,{variant:"body2",gutterBottom:!0},"A radar chart is a way of showing multiple data points and the variation between them."),n.a.createElement(X,{mb:6}),n.a.createElement(K,null,n.a.createElement(g.Radar,{data:a,options:{maintainAspectRatio:!1}}))))})),U=a(935),V=a.n(U);function W(){var e=Object(b.a)(["\n  height: 300px;\n"]);return W=function(){return e},e}var Y=Object(o.d)(h.a)(p.b),Z=o.d.div(p.b),ee=o.d.div(W());var te=Object(o.e)((function(e){var t=e.theme,a={labels:["Speed","Reliability","Comfort","Safety","Efficiency"],datasets:[{label:"Model S",data:[35,38,65,70,24],backgroundColor:[t.palette.secondary.main,V.a[700],R.a[500],S.a[500],t.palette.grey[300]]}]};return n.a.createElement(Y,{mb:1},n.a.createElement(v.a,null,n.a.createElement(d.a,{variant:"h6",gutterBottom:!0},"Polar Area Chart"),n.a.createElement(d.a,{variant:"body2",gutterBottom:!0},"Polar area charts are similar to pie charts, but each segment has the same angle."),n.a.createElement(Z,{mb:6}),n.a.createElement(ee,null,n.a.createElement(g.Polar,{data:a,options:{maintainAspectRatio:!1}}))))})),ae=Object(o.d)(u.a)(p.b),re=Object(o.d)(f.a)(p.b),ne=n.a.forwardRef((function(e,t){return n.a.createElement(l.c,Object.assign({innerRef:t},e))}));t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{title:"Charts"}),n.a.createElement(d.a,{variant:"h3",gutterBottom:!0,display:"inline"},"Charts"),n.a.createElement(re,{"aria-label":"Breadcrumb",mt:2},n.a.createElement(s.a,{component:ne,exact:!0,to:"/"},"Dashboard"),n.a.createElement(d.a,null,"Charts")),n.a.createElement(ae,{my:6}),n.a.createElement(m.a,{container:!0,spacing:6},n.a.createElement(m.a,{item:!0,xs:12,md:6},n.a.createElement(x,null)),n.a.createElement(m.a,{item:!0,xs:12,md:6},n.a.createElement(w,null)),n.a.createElement(m.a,{item:!0,xs:12,md:6},n.a.createElement(J,null)),n.a.createElement(m.a,{item:!0,xs:12,md:6},n.a.createElement(I,null)),n.a.createElement(m.a,{item:!0,xs:12,md:6},n.a.createElement(Q,null)),n.a.createElement(m.a,{item:!0,xs:12,md:6},n.a.createElement(te,null))))}},667:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};t.default=r},691:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hexToRgb=o,t.rgbToHex=function(e){if(0===e.indexOf("#"))return e;var t=i(e).values;return"#".concat(t.map((function(e){return function(e){var t=e.toString(16);return 1===t.length?"0".concat(t):t}(e)})).join(""))},t.hslToRgb=l,t.decomposeColor=i,t.recomposeColor=c,t.getContrastRatio=function(e,t){var a=u(e),r=u(t);return(Math.max(a,r)+.05)/(Math.min(a,r)+.05)},t.getLuminance=u,t.emphasize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return u(e)>.5?f(e,t):d(e,t)},t.fade=function(e,t){e=i(e),t=n(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a");return e.values[3]=t,c(e)},t.darken=f,t.lighten=d;var r=a(17);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(t,e),a)}function o(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),a=e.match(t);return a&&1===a[0].length&&(a=a.map((function(e){return e+e}))),a?"rgb".concat(4===a.length?"a":"","(").concat(a.map((function(e,t){return t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3})).join(", "),")"):""}function l(e){var t=(e=i(e)).values,a=t[0],r=t[1]/100,n=t[2]/100,o=r*Math.min(n,1-n),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+a/30)%12;return n-o*Math.max(Math.min(t-3,9-t,1),-1)},u="rgb",f=[Math.round(255*l(0)),Math.round(255*l(8)),Math.round(255*l(4))];return"hsla"===e.type&&(u+="a",f.push(t[3])),c({type:u,values:f})}function i(e){if(e.type)return e;if("#"===e.charAt(0))return i(o(e));var t=e.indexOf("("),a=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla"].indexOf(a))throw new Error((0,r.formatMuiErrorMessage)(3,e));var n=e.substring(t+1,e.length-1).split(",");return{type:a,values:n=n.map((function(e){return parseFloat(e)}))}}function c(e){var t=e.type,a=e.values;return-1!==t.indexOf("rgb")?a=a.map((function(e,t){return t<3?parseInt(e,10):e})):-1!==t.indexOf("hsl")&&(a[1]="".concat(a[1],"%"),a[2]="".concat(a[2],"%")),"".concat(t,"(").concat(a.join(", "),")")}function u(e){var t="hsl"===(e=i(e)).type?i(l(e)).values:e.values;return t=t.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function f(e,t){if(e=i(e),t=n(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb"))for(var a=0;a<3;a+=1)e.values[a]*=1-t;return c(e)}function d(e,t){if(e=i(e),t=n(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(var a=0;a<3;a+=1)e.values[a]+=(255-e.values[a])*t;return c(e)}},696:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};t.default=r},935:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"};t.default=r}}]);
//# sourceMappingURL=32.9fc350b4.chunk.js.map