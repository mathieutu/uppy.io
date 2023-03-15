"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={title:"Uppy 1.25: right-to-left scripts, Ukrainian translation, Companion improvements",date:new Date("2021-01-29T00:00:00.000Z"),author:"arturi",image:"https://uppy.io/img/blog/1.25/right-to-left.jpg",published:!0,slug:"2021/01/1.25"},a=void 0,p={permalink:"/uppy.io/pr-preview/pr-40/blog/2021/01/1.25",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2021-01-1.25.md",source:"@site/blog/2021-01-1.25.md",title:"Uppy 1.25: right-to-left scripts, Ukrainian translation, Companion improvements",description:"Uppy 1.25 adds support for right-to-left scripts, Ukrainian translation and",date:"2021-01-29T00:00:00.000Z",formattedDate:"January 29, 2021",tags:[],readingTime:1.84,hasTruncateMarker:!0,authors:[{name:"arturi"}],frontMatter:{title:"Uppy 1.25: right-to-left scripts, Ukrainian translation, Companion improvements",date:"2021-01-29T00:00:00.000Z",author:"arturi",image:"https://uppy.io/img/blog/1.25/right-to-left.jpg",published:!0,slug:"2021/01/1.25"},prevItem:{title:"Uppy 1.26: Dashboard \u201cdisabled\u201d, per-file headers",permalink:"/uppy.io/pr-preview/pr-40/blog/2021/02/1.26"},nextItem:{title:"Uppy 1.24: \ud83c\udf85 Happy Holidays \u2014 Svelte, React hook, Auto Open Image Editor",permalink:"/uppy.io/pr-preview/pr-40/blog/2020/12/1.24"}},l={authorsImageUrls:[void 0]},s=[{value:"Right-to-left scripts",id:"right-to-left-scripts",level:2},{value:"Locales",id:"locales",level:2},{value:"Integration Guide",id:"integration-guide",level:2},{value:"Companion",id:"companion",level:2},{value:"Misc",id:"misc",level:2}],d={toc:s};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Uppy 1.25 adds support for right-to-left scripts, Ukrainian translation and\nvarious improvements for Companion."),(0,i.kt)("p",null,"Just see how cool this looks, and read further for a video demo and some behind\nthe scenes implementation sorcery:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Uppy Dashboard UI flipped for right-to-left Arabic language",src:n(9569).Z,width:"1212",height:"954"})),(0,i.kt)("h2",{id:"right-to-left-scripts"},"Right-to-left scripts"),(0,i.kt)("p",null,"Ren\xe9e have improved support for right-to-left scripts (such as Arabic, Farsi,\nHebrew). This means that Uppy UI can now be mirrored, like how you might see on\nsites like\n",(0,i.kt)("a",{parentName:"p",href:"https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9"},"Wikipedia"),"."),(0,i.kt)("video",{alt:"Demo video showing Uppy with right-to-left mirrored UI",poster:"/img/blog/1.25/right-to-left.jpg",muted:!0,autoplay:!0,loop:!0},(0,i.kt)("source",{src:"/img/blog/1.25/right-to-left.mp4",type:"video/mp4"}),"Your browser does not support the video tag: https://uppy.io/img/blog/img/blog/1.25/right-to-left.mp4"),(0,i.kt)("p",null,"HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"dir")," attribute can be used to set the direction \u2014 any parent element of\nthe Dashboard may have it. It\u2019s good practice for sites to add a dir attribute\non ",(0,i.kt)("inlineCode",{parentName:"p"},"<html>")," element, but for backwards compatibility the Dashboard will default\nto left-to-right rendering."),(0,i.kt)("p",null,"The text direction can also be set in code using the new ",(0,i.kt)("inlineCode",{parentName:"p"},"direction")," option for\nthe Dashboard plugin. This is useful for the modal dashboard, which would\ntypically be mounted in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," element, so there is no other parent\nelement that you could set the ",(0,i.kt)("inlineCode",{parentName:"p"},"dir")," attribute on (aside from ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"<html>"),", which sites ",(0,i.kt)("em",{parentName:"p"},"should")," do, but may not)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Head over to the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/2705"},"#2705 PR description and code"),",\nif you are interested in how this is implemented, using new CSS properties\nlike ",(0,i.kt)("inlineCode",{parentName:"p"},"inline-start")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"inline-end")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"postcss-logical")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"postcss-dir-pseudo-class")," for the fallback.")),(0,i.kt)("h2",{id:"locales"},"Locales"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/elkebab"},"@DenysNosov")," contributed a Ukrainian translation\nand fixes for Russian grammar!"),(0,i.kt)("h2",{id:"integration-guide"},"Integration Guide"),(0,i.kt)("p",null,"Andrew, who\u2019s been on fire recently adding Vue and Svelte integrations for Uppy,\nhas taken the time to share his experience and has written an\n\u201c",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing.html#Adding-a-new-integration"},"Adding a new integration"),"\u201d\nguide, in case you\u2019d like to help befriend Uppy with your favorite framework or\nlibrary."),(0,i.kt)("h2",{id:"companion"},"Companion"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added support for setting 3rd party credentials in runtime"),(0,i.kt)("li",{parentName:"ul"},"Metadata is now passed to S3"),(0,i.kt)("li",{parentName:"ul"},"Support for ",(0,i.kt)("inlineCode",{parentName:"li"},"opts.companionCookiesRule")," rule"),(0,i.kt)("li",{parentName:"ul"},"Delete tus error\u2019s ",(0,i.kt)("inlineCode",{parentName:"li"},"originalRequest")," field before propagating error"),(0,i.kt)("li",{parentName:"ul"},"Companion now uses multi-stage docker build")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@uppy/dashboard: emit fileId on both file-edit-start and file-edit-complete\nevents"),(0,i.kt)("li",{parentName:"ul"},"@uppy/box: added Box to Uppy CDN")),(0,i.kt)("p",null,"See\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#1250"},"changelog"),"\nfor details."))}u.isMDXComponent=!0},9569:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/right-to-left-0fae5444f3b207778e206525cdd3a6ff.jpg"}}]);