"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3611],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),c=o,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||n;return r?a.createElement(f,p(p({ref:t},s),{},{components:r})):a.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var u=2;u<n;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const n={title:"Uppy 1.11 \u2014 1.13: Dark Mode, custom meta fields and Google Docs in Companion",date:new Date("2020-04-20T00:00:00.000Z"),author:"arturi",image:"https://uppy.io/img/blog/1.13/uppy-dashboard-dark-mar-2020.png",published:!0,slug:"2020/04/1.13"},p=void 0,i={permalink:"/uppy.io/pr-preview/pr-40/blog/2020/04/1.13",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2020-04-1.13.md",source:"@site/blog/2020-04-1.13.md",title:"Uppy 1.11 \u2014 1.13: Dark Mode, custom meta fields and Google Docs in Companion",description:"Releases 1.11 through 1.13 introduced a bunch of major new features and",date:"2020-04-20T00:00:00.000Z",formattedDate:"April 20, 2020",tags:[],readingTime:2.725,hasTruncateMarker:!0,authors:[{name:"arturi"}],frontMatter:{title:"Uppy 1.11 \u2014 1.13: Dark Mode, custom meta fields and Google Docs in Companion",date:"2020-04-20T00:00:00.000Z",author:"arturi",image:"https://uppy.io/img/blog/1.13/uppy-dashboard-dark-mar-2020.png",published:!0,slug:"2020/04/1.13"},prevItem:{title:"Adding Custom Providers: Step by Step Tutorial to add Custom Providers",permalink:"/uppy.io/pr-preview/pr-40/blog/2020/03/custom/providers"},nextItem:{title:"Uppy 1.10.1: Facebook and OneDrive",permalink:"/uppy.io/pr-preview/pr-40/blog/2020/04/1.10"}},l={authorsImageUrls:[void 0]},u=[{value:"Dark mode",id:"dark-mode",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Releases 1.11 through 1.13 introduced a bunch of major new features and\nbugfixes. Let's go through the main ones!"),(0,o.kt)("h2",{id:"dark-mode"},"Dark mode"),(0,o.kt)("p",null,"A little while ago we\u2019ve\n",(0,o.kt)("a",{parentName:"p",href:"https://mobile.twitter.com/uppy_io/status/1221070643543838721"},"announced work in progress"),"\non Dark Mode for the Dashboard. We're happy to tell you it\u2019s live now! You can\ntry it out on ",(0,o.kt)("a",{parentName:"p",href:"/examples/dashboard/"},"the Dashboard example page"),"."),(0,o.kt)("video",{alt:"Demo video showing Uppy Dark Mode",muted:!0,autoplay:!0,loop:!0},(0,o.kt)("source",{src:"/img/blog/1.13/dark-mode-auto.webm",type:"video/webm"}),(0,o.kt)("source",{src:"/img/blog/1.13/dark-mode-auto.mp4",type:"video/mp4"})),(0,o.kt)("p",null,"There are three options available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"light")," \u2014 the default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dark")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auto")," \u2014 will respect the user\u2019s system settings and switch automatically")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Dashboard, {\n    theme: 'dark',\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(2946).Z,width:"1200",height:"940"})))}d.isMDXComponent=!0},2946:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/uppy-dashboard-dark-mar-2020-8404676e497ecef5f6832518f40f8fa6.png"}}]);