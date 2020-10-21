(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[58],{2488:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a(88),i=a(120),s=a(594),c=a(593),u=a(87),m=a(584),p=a(592),d=a(568),h=a(511),E=a(608),b=r.a.forwardRef((function(e,t){return r.a.createElement(o.c,Object.assign({innerRef:t},e))})),f=Object(l.d)(s.a)(h.b),g=Object(l.d)(c.a)(h.b),v=Object(l.d)(u.a)(h.b);function y(){return r.a.createElement(m.a,{mb:10},r.a.createElement(v,{variant:"h3",gutterBottom:!0},"Introduction"),r.a.createElement(v,{variant:"subtitle1",gutterBottom:!0,my:4},r.a.createElement("code",null,"npm run build")," creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like ",r.a.createElement("code",null,"/static/js/main.<hash>.js")," are served with the contents of the ",r.a.createElement("code",null,"/static/js/main.<hash>.js")," file."))}function w(){return r.a.createElement(m.a,{mb:10},r.a.createElement(v,{variant:"h3",gutterBottom:!0},"Static Server"),r.a.createElement(v,{variant:"subtitle1",gutterBottom:!0,my:4},"For environments using ",r.a.createElement(p.a,{href:"https://nodejs.org/en/",target:"_blank",rel:"noreferrer noopener"},"Node"),", the easiest way to handle this would be to install ",r.a.createElement(p.a,{href:"https://github.com/zeit/serve",target:"_blank",rel:"noreferrer noopener"},"serve")," and let it handle the rest:",r.a.createElement(E.a,null,"npm install -g serve\nserve -s build")),r.a.createElement(v,{variant:"subtitle1",gutterBottom:!0,my:4},"The last command shown above will serve your static site on the port 5000. Like many of ",r.a.createElement(p.a,{href:"https://github.com/vercel/serve",target:"_blank",rel:"noreferrer noopener"},"serve"),"\u2019s internal settings, the port can be adjusted using the ",r.a.createElement("code",null,"-l")," or ",r.a.createElement("code",null,"--listen")," flags:",r.a.createElement(E.a,null,"serve -s build -l 4000")),r.a.createElement(v,{variant:"subtitle1",gutterBottom:!0,my:4},"Run this command to get a full list of the options available:",r.a.createElement(E.a,null,"serve -h")))}function j(){return r.a.createElement(m.a,{mb:10},r.a.createElement(v,{variant:"h3",gutterBottom:!0},"Other Solutions"),r.a.createElement(v,{variant:"subtitle1",gutterBottom:!0,my:4},"You don\u2019t necessarily need a static server in order to run a Create React App project in production. It also works well when integrated into an existing server side app."))}function B(){return r.a.createElement(m.a,{mb:10},r.a.createElement(v,{variant:"h4",gutterBottom:!0},"Express"),r.a.createElement(v,{variant:"subtitle1",gutterBottom:!0,my:4},"Express is a fast, unopinionated, minimalist web framework for Node.js. Here\u2019s a programmatic example:",r.a.createElement(E.a,null,"const express = require('express');\nconst path = require('path');\nconst app = express();\napp.use(express.static(path.join(__dirname, 'build')));\napp.get('/', function(req, res) {\n  res.sendFile(path.join(__dirname, 'build', 'index.html'));\n});\napp.listen(9000);")))}function x(){return r.a.createElement(m.a,{mb:10},r.a.createElement(v,{variant:"h4",gutterBottom:!0},"Netlify"),r.a.createElement(v,{variant:"subtitle1",gutterBottom:!0,my:4},"Deploy modern static websites with Netlify. Get CDN, Continuous deployment, 1-click HTTPS, and all the services you need."),r.a.createElement(v,{variant:"subtitle1",gutterBottom:!0,my:4},"To do a manual deploy to Netlify\u2019s CDN:",r.a.createElement(E.a,null,"npm install netlify-cli -g\nnetlify deploy"),"Choose ",r.a.createElement("code",null,"build")," as the path to deploy."),r.a.createElement(v,{variant:"subtitle1",gutterBottom:!0,my:4},"To setup continuous delivery:",r.a.createElement("br",null),"With this setup Netlify will build and deploy when you push to git or open a pull request:",r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement(p.a,{href:"https://app.netlify.com/signup",target:"_blank",rel:"noreferrer noopener"},"Start a new netlify project")),r.a.createElement("li",null,"Pick your Git hosting service and select your repository"),r.a.createElement("li",null,"Click ",r.a.createElement("code",null,"Build your site")))))}t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Helmet,{title:"Deployment"}),r.a.createElement(d.a,{container:!0,spacing:6,justify:"center"},r.a.createElement(d.a,{item:!0,xs:12,lg:9,xl:7},r.a.createElement(v,{variant:"h2",gutterBottom:!0,display:"inline"},"Deployment"),r.a.createElement(g,{"aria-label":"Breadcrumb",mt:2},r.a.createElement(p.a,{component:b,exact:!0,to:"/"},"Dashboard"),r.a.createElement(p.a,{component:b,exact:!0,to:"/documentation/welcome"},"Documentation"),r.a.createElement(v,null,"Deployment")),r.a.createElement(f,{my:6}),r.a.createElement(y,null),r.a.createElement(w,null),r.a.createElement(j,null),r.a.createElement(B,null),r.a.createElement(x,null))))}},608:function(e,t,a){"use strict";var n=a(10),r=a(0),l=a.n(r),o=a(7),i=a(2502),s=a(2486);function c(){var e=Object(n.a)(["\n  border-radius: 3px;\n  padding: ","px !important;\n  background-color: #1B2430 !important;\n"]);return c=function(){return e},e}var u=Object(o.d)(i.a)(c(),(function(e){return e.theme.spacing(3)}));t.a=function(e){var t=e.children;return l.a.createElement(u,{language:"javascript",style:s.a},t)}}}]);
//# sourceMappingURL=58.d02a0af9.chunk.js.map