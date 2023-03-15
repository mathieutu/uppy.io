"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8444],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,m=d["".concat(s,".").concat(c)]||d[c]||h[c]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Uppy 0.14: Responsive Dashboard, Standalone & Pluggable Server, Dropbox",date:new Date("2017-02-13T00:00:00.000Z"),author:"arturi",published:!0,slug:"2017/02/0.14"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-40/blog/2017/02/0.14",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-02-0.14.md",source:"@site/blog/2017-02-0.14.md",title:"Uppy 0.14: Responsive Dashboard, Standalone & Pluggable Server, Dropbox",description:"Hi! Hope y\u2019all have had great holidays! \ud83c\udf84 Which reminds us, we still have a",date:"2017-02-13T00:00:00.000Z",formattedDate:"February 13, 2017",tags:[],readingTime:5.495,hasTruncateMarker:!0,authors:[{name:"arturi"}],frontMatter:{title:"Uppy 0.14: Responsive Dashboard, Standalone & Pluggable Server, Dropbox",date:"2017-02-13T00:00:00.000Z",author:"arturi",published:!0,slug:"2017/02/0.14"},prevItem:{title:"Uppy 0.15: Spring cleanup",permalink:"/uppy.io/pr-preview/pr-40/blog/2017/03/0.15"},nextItem:{title:"Uppy 0.12: Responsive. Cancel. Feedback. Refreshed\xa0ES6 server",permalink:"/uppy.io/pr-preview/pr-40/blog/2016/12/0.12"}},s={authorsImageUrls:[void 0]},p=[{value:"Major Uppy Server Updates",id:"major-uppy-server-updates",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Per plugin locale settings",id:"per-plugin-locale-settings",level:2},{value:"Misc",id:"misc",level:2},{value:"Release Notes",id:"release-notes",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hi! Hope y\u2019all have had great holidays! \ud83c\udf84 Which reminds us, we still have a\ngift for you \u2014 and we even wrapped it in a package (npm). Look inside and you\u2019ll\nfind that Uppy 0.14!"),(0,n.kt)("p",null,"\u201cBut wait\u201d, you might ask, \u201cwhere is the 0.13 release that we have been waiting\nfor?\u201d"),(0,n.kt)("p",null,"Well, let\u2019s just say we are superstitious like that. You won\u2019t see us coding\nunder any ladders either! And we were also in the middle of the holiday season,\nso we decided to call 0.13 \u201cThe Release That Wasn\u2019t\u201d and skip it."),(0,n.kt)("p",null,"Let\u2019s take a look at what Uppy 0.14 has in store for you."),(0,n.kt)("h2",{id:"major-uppy-server-updates"},"Major Uppy Server Updates"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Express.js")," We\u2019ve switched to Express from Koa. It\u2019s more widely adopted and\nsupported, has larger community and better maintained packages, so we went for\nit."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pluggable or standalone")," Uppy Server can now be plugged into your existing\nExpress/Koa server app, but you can also still run it as a standalone server.\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy-server#run-as-standalone-server"},"See here"),"\nfor further instructions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Smooth authentication")," It used to be the case that when you clicked that\nstylish \u201cauthenticate\u201d ","[","with Google Drive] button, you were taken away from the\npage, and things tended to get lost. That has now all been made silky smooth:\nupon clicking the button, a fresh tab will open in your browser, which will take\nyou to the authentication page \u2013 be it on Google Drive, Dropbox, or somewhere\nelse. When you are done, this tab is automagically closed, and you are back\nwhere you were, authenticated, with all your remote files at hand."),(0,n.kt)("img",{class:"border",src:"/img/blog/0.14/smooth-auth.png"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dropbox plugin")," Dropbox support made it into Uppy this release! \ud83c\udf89\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ifedapoolarewaju"},"Ife")," rocks like that. (A shoutout here as\nwell to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hedgerh"},"Harry")," for the initial work on Uppy Server\nand the Google Drive plugin!) Why don't you\n",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard/"},"give it a try"),"!"),(0,n.kt)("img",{class:"border",src:"/img/blog/0.14/uppy-dropbox.png"}),(0,n.kt)("p",null,"What\u2019s more, the client-side code of Google Drive and Dropbox plugins is slowly\nbeing refactored into a generic provider view that can be shared among\nall\xa0services."),(0,n.kt)("h2",{id:"dashboard"},"Dashboard"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Responsive UI and more icons")," The Dashboard now adapts itself to screen sizes\nbig and small. That includes ",(0,n.kt)("inlineCode",{parentName:"p"},"inline")," mode, where you can set ",(0,n.kt)("inlineCode",{parentName:"p"},"maxWidth")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"maxHeight")," in options, like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Dashboard, {\n    maxWidth: 300,\n    maxHeight: 350,\n    inline: true,\n    target: '#myUploadContainer',\n});\n")),(0,n.kt)("p",null,"We are not using media queries here, but have instead added a\n",(0,n.kt)("inlineCode",{parentName:"p"},"UppyDashboard--wide")," CSS class, which allows for more flexibility \u2014 your file\nuploading widget can be tiny even if the screen is large."),(0,n.kt)("p",null,"When there is little space available, the file grid view that you have become\nused to, will turn into a new compact list view."),(0,n.kt)("figure",{class:"wide"},(0,n.kt)("img",{src:"/img/blog/0.14/dashboard-grid-list.jpg"})),(0,n.kt)("p",null,"We are also adding more file type icons and trying to be smarter about detecting\nthem. We have new icons for video, audio, text, and PDF for you to enjoy."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Total / uploaded sizes")," Total and uploaded sizes have been added to the\nStatusBar, allowing you and your users to keep track of all those bits and\nbytes."),(0,n.kt)("img",{src:"/img/blog/0.14/statusbar-uploaded-total-size.png"}),(0,n.kt)("p",null,"You can play with all of these new features on\n",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard/"},"the Dashboard example page"),"."),(0,n.kt)("h2",{id:"per-plugin-locale-settings"},"Per plugin locale settings"),(0,n.kt)("p",null,"We have moved locale settings from global/core to plugins. By default, each UI\nplugin ships with an English locale, and you can override any string with your\nown, like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(DragDrop, {\n    target: '.drop',\n    locale: {\n        strings: {\n            chooseFile: 'Valitse tiedoston',\n            orDragDrop: 'tai siirt\xe4\xe4 t\xe4nne',\n        },\n    },\n});\n")),(0,n.kt)("img",{src:"/img/blog/0.14/dnd-fi.png"}),(0,n.kt)("p",null,"And just like that, your Drag&Drop plugin now speaks Finnish! ",(0,n.kt)("em",{parentName:"p"},"Hyv\xe4\xe4 huomenta!"),"\nThis feature is a work in progress, we are trying to find the sweet spot between\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/8c6252933813af69c1b71ec4621a7fc14dfb3ab0/src/locales/pt_BR.js"},"bundling a whole bunch of strings in packs"),",\nwhich might be redundant (i.e. if you only use the Drag&Drop, you don\u2019t need\nstrings from the Dashboard), and making you choose or set language strings for\neach UI plugin. We\u2019d love to\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/issues/42"},"hear what you think"),"."),(0,n.kt)("h2",{id:"misc"},"Misc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/yo-yoify"},"yo-yoify")," has been added to our build\nsetup in order to solve a\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/shama/bel#note"},"Function.caller / strict mode issue")," and\nto make the app faster/smaller by transforming template strings into pure and\nfast document calls."),(0,n.kt)("li",{parentName:"ul"},"By the way, Uppy\u2019s UI DOM is powered by\n",(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/yo-yo"},"yo-yo"),". We like yo-yo for its\nsimplicity, speed and small size, but sometimes there are issues, one of them\nbeing the lack of wide adoption. We are looking at\n",(0,n.kt)("a",{parentName:"li",href:"https://preactjs.com/"},"Preact"),", but are also quite excited about\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/yoshuawuyts/nanocomponent"},"Nanocomponent"),"."),(0,n.kt)("li",{parentName:"ul"},"Progress events that were not being properly sent from Uppy Server as now\nfixed. As it turns out, this occurred because server uploads were happening\ntoo fast, before the client was actually able to connect to the server.\n\ud83d\ude31 Guess that\u2019s a good problem to have solved!"),(0,n.kt)("li",{parentName:"ul"},"We have recently added Uppy to\n",(0,n.kt)("a",{parentName:"li",href:"https://www.producthunt.com/posts/uppy"},"Product Hunt")," and we were very\npleased with the warm welcome, we even made it to the front page a few days\nlater. Let\u2019s hope it will help get more people excited about the project.")),(0,n.kt)("h2",{id:"release-notes"},"Release Notes"),(0,n.kt)("p",null,"Here is the full list of changes for version 0.14:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"dashboard: use ",(0,n.kt)("inlineCode",{parentName:"li"},"isWide")," prop/class instead of media queries, so that\ncompact/mobile version can be used in bigger screens too (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: basic \u201clist\u201d view in addition to current \u201cgrid\u201d view (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: more icons for file types (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: add totalSize and totalUploadedSize to StatusBar (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: figure out where to place Informer, accounting for StatusBar \u2014 over\nthe StatusBar for now (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: add ",(0,n.kt)("inlineCode",{parentName:"li"},"<progress>")," element for progress bar, like here\n",(0,n.kt)("a",{parentName:"li",href:"https://overcast.fm/+BtuxMygVg/"},"https://overcast.fm/+BtuxMygVg/"),". Added hidden for now, for\nsemantics/accessibility (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"dragdrop: show number of selected files, remove upload btn (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"build: exclude locales from build (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"core: i18n for each plugin in options \u2014 local instead of global (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"core: add default pluralization (can be overridden in plugin options) to\nTranslator (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"core: use yo-yoify to solve\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/shama/bel#note"},"Function.caller / strict mode issue")," and\nmake our app faster/smaller by transforming template strings into pure and\nfast document calls (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"server: a pluggable uppy-server (express / koa for now) (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"server: standalone uppy-server (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"server: Integrate dropbox plugin (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"server: smooth authentication: after auth you are back in your app where you\nleft, no page reloads (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"tus: fix upload progress from uppy-server (@arturi, @ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"core: basic React component \u2014 DnD (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"core: fix support for both ES6 module import and CommonJS requires with\n",(0,n.kt)("inlineCode",{parentName:"li"},"add-module-exports")," babel plugin (@arturi)")),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)("p",null,"We appreciate your feedback, feel free to\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/issues/"},"comment on GitHub"),", send a PR, and\nhit us on ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/uppy_io"},"twitter"),"."),(0,n.kt)("p",null,"The Uppy Team"))}d.isMDXComponent=!0}}]);