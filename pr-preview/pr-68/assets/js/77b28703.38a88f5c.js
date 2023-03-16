"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8655],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"Uppy 0.22: Preact, Form, Improved Dashboard, Custom Stores",date:new Date("2017-12-23T00:00:00.000Z"),authors:["arturi"],image:"https://uppy.io/img/blog/0.22/uppy-dashboard-updated.jpg",published:!0,slug:"2017/12/0.22"},o=void 0,l={permalink:"/uppy.io/pr-preview/pr-68/blog/2017/12/0.22",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-12-0.22.md",source:"@site/blog/2017-12-0.22.md",title:"Uppy 0.22: Preact, Form, Improved Dashboard, Custom Stores",description:"Uppy is featured on Product Hunt!",date:"2017-12-23T00:00:00.000Z",formattedDate:"December 23, 2017",tags:[],readingTime:7.895,hasTruncateMarker:!1,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 0.22: Preact, Form, Improved Dashboard, Custom Stores",date:"2017-12-23T00:00:00.000Z",authors:["arturi"],image:"https://uppy.io/img/blog/0.22/uppy-dashboard-updated.jpg",published:!0,slug:"2017/12/0.22"},prevItem:{title:"Uppy 0.23: Import from Url, refactored thumbnail generation, XHR bundle",permalink:"/uppy.io/pr-preview/pr-68/blog/2018/02/0.23"},nextItem:{title:"Uppy 0.21: End to End Tests, Accessibility, Additional Security for Uppy Server",permalink:"/uppy.io/pr-preview/pr-68/blog/2017/10/0.21"}},s={authorsImageUrls:[void 0]},p=[{value:"Preact and JSX",id:"preact-and-jsx",level:2},{value:"Core and plugins refactor",id:"core-and-plugins-refactor",level:2},{value:"Refreshed Dashboard UI",id:"refreshed-dashboard-ui",level:2},{value:"Select multiple files in providers",id:"select-multiple-files-in-providers",level:2},{value:"Stores",id:"stores",level:2},{value:"Form",id:"form",level:2},{value:"Encoding support in GoldenRetriever",id:"encoding-support-in-goldenretriever",level:2},{value:"Type-safe Server",id:"type-safe-server",level:2},{value:"And there\u2019s more",id:"and-theres-more",level:2},{value:"Full Changelog",id:"full-changelog",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Uppy is ",(0,r.kt)("a",{parentName:"strong",href:"https://www.producthunt.com/posts/uppy-io"},"featured on Product Hunt"),"!\nTo our fellow hunters: welcome! Quick intro: Uppy is the next open source file\nuploader for web browsers. We're very close to launching 1.0 and would love to\nget your feedback in, leave your thoughts on Product Hunt or start a discussion\nbelow.")),(0,r.kt)("p",null,"Hi all! It\u2019s New Year and Christmas time, and this year Santa is brining you\nUppy ",(0,r.kt)("inlineCode",{parentName:"p"},"0.22")," \ud83c\udf81 This release packs a lot of neat stuff, but it also breaks things\nin quite a few places, so please read on."),(0,r.kt)("p",null,"And, if you are celebrating, happy holidays from the Uppy Team! \ud83c\udf84"),(0,r.kt)("h2",{id:"preact-and-jsx"},"Preact and JSX"),(0,r.kt)("p",null,"We\u2019ve been happy using ",(0,r.kt)("inlineCode",{parentName:"p"},"yo-yo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hyperx")," template strings in our views for\nquite a while, but decided to try something more stable. Preact has most of the\ngreat ideas of React, plus smaller file size as well as a few good ideas of its\nown."),(0,r.kt)("p",null,"All views have been refactored to utilize JSX. We actually liked hyperx a lot,\nbut JSX has better tooling and syntax highlighting support. It also seems to be\nthe standard in the React community."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/451"},"#451 PR")," for details on why\nwe switched and discussion around the process."),(0,r.kt)("h2",{id:"core-and-plugins-refactor"},"Core and plugins refactor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," We\u2019ve renamed the ",(0,r.kt)("inlineCode",{parentName:"li"},"core")," object to ",(0,r.kt)("inlineCode",{parentName:"li"},"uppy")," in plugins. So\ninstead of ",(0,r.kt)("inlineCode",{parentName:"li"},"this.core.state")," we now use ",(0,r.kt)("inlineCode",{parentName:"li"},"this.uppy.state"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," Events have been renamed to remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"core:")," prefix. So\n",(0,r.kt)("inlineCode",{parentName:"li"},"core:success")," becomes just ",(0,r.kt)("inlineCode",{parentName:"li"},"success"),", and this also results in now having\n",(0,r.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"upload-started")," and so on. Prefixed event names are used for\nplugin-specific event sometimes, like ",(0,r.kt)("inlineCode",{parentName:"li"},"dashboard:file-card"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," CSS class names have been altered to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"uppy-"),"\nnamespace, so ",(0,r.kt)("inlineCode",{parentName:"li"},".UppyDashboard-files")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},".uppy-Dashboard-files")," and so\non."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," ",(0,r.kt)("inlineCode",{parentName:"li"},"getMetaFromForm")," was removed in favor of the new ",(0,r.kt)("inlineCode",{parentName:"li"},"Form"),"\nplugin (see below)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," ",(0,r.kt)("inlineCode",{parentName:"li"},"MetaData")," plugin was removed in favor of the ",(0,r.kt)("inlineCode",{parentName:"li"},"metaFields"),"\noption in Dashboard, ",(0,r.kt)("a",{parentName:"li",href:"https://uppy.io/docs/dashboard/#metaFields"},"see docs"),"\nfor more details."),(0,r.kt)("li",{parentName:"ul"},"Plugins now use ",(0,r.kt)("inlineCode",{parentName:"li"},"this.el")," to refer to their UI element instead of\n",(0,r.kt)("inlineCode",{parentName:"li"},"this.target"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setPluginState")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"getPluginState")," are now used in Providers.")),(0,r.kt)("h2",{id:"refreshed-dashboard-ui"},"Refreshed Dashboard UI"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Uppy Dashboard UI with 3 files selected",src:a(1058).Z,width:"1500",height:"914"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"File cards are simpler, we\u2019ve removed the excess white backgrounds, improved\nthe remove icon, reduced paddings, added slight shadows."),(0,r.kt)("li",{parentName:"ul"},"Cicular upload button in the Dashboard has been moved to the StatusBar. It\u2019s\nalso not circular anymore, and there\u2019s no cloud icon. Plain and simple."),(0,r.kt)("li",{parentName:"ul"},"Redesigned \u201cretry\u201d and \u201cadd +1 file\u201d buttons."),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"metaFields")," option: an array of settings for UI field objects, which\npreviousely lived in a separate ",(0,r.kt)("inlineCode",{parentName:"li"},"MetaData")," plugin:\n",(0,r.kt)("inlineCode",{parentName:"li"},"{ id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }"),",\n",(0,r.kt)("a",{parentName:"li",href:"https://uppy.io/docs/dashboard/#metaFields"},"see docs")," for more details.")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/451"},"#434 PR")," for more screenshots\nand details."),(0,r.kt)("h2",{id:"select-multiple-files-in-providers"},"Select multiple files in providers"),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sadovnychyi"},"@sadovnychyi"),", you can now select\nmultiple files from remote providers like Google Drive and Instagram. You can\nalso select folders, and even range of files by holding ",(0,r.kt)("inlineCode",{parentName:"p"},"shift")," key when\nclicking on first and last item in range."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Uppy Dashboard UI with 3 files selected",src:a(4351).Z,width:"1500",height:"914"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard/"},"Check it out \u2192")),(0,r.kt)("h2",{id:"stores"},"Stores"),(0,r.kt)("p",null,"As you know, internally Uppy uses its own simple state management system with\n",(0,r.kt)("inlineCode",{parentName:"p"},"getState")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," methods. In previous releases we\u2019ve added support for\nRedux via a plugin called ",(0,r.kt)("inlineCode",{parentName:"p"},"Redux"),", which mirrors all Uppy state to your Redux\napplication\u2019s state, and a plugin called ",(0,r.kt)("inlineCode",{parentName:"p"},"ReduxDevTools")," that connects to Redux\nDevTools and enables all the cool time traveling stuff."),(0,r.kt)("p",null,"We are excited to tell you that this release makes state management even more\nflexible by bringing support for external stores! Here\u2019s a quote from the docs:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By default, Uppy stores its internal state in an object."),(0,r.kt)("p",{parentName:"blockquote"},"If your app uses a state management library such as Redux, it can be useful to\nhave Uppy store its state there instead\u2014that way, you could write custom\nuploader UI components in the same way as the other components in the\napplication.")),(0,r.kt)("p",null,"Here\u2019s how that works:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { createStore } = require('redux')\nconst ReduxStore = require('uppy/lib/store/ReduxStore')\n\nconst reducer = combineReducers({\n  ...reducers,\n  uppy: ReduxStore.reducer\n})\nconst store = createStore(reducer)\n\nconst uppy = Uppy({\n  store: ReduxStore({\n    store: store // That's a lot of stores!\n  })\n})\n...\n")),(0,r.kt)("p",null,"Now Uppy will use your app\u2019s Redux store instead of its own, so you have a\n\u201csingle source of truth\u201d \ud83d\udd2e"),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/stores/"},"more on stores")," in docs."),(0,r.kt)("h2",{id:"form"},"Form"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Form")," is a new plugin that can be used in conjunction with any other. Here\u2019s\nwhat it does:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Acquires metadata from a ",(0,r.kt)("inlineCode",{parentName:"li"},"<form>")," element of your choosing before the upload\nstarts in Uppy."),(0,r.kt)("li",{parentName:"ol"},"Injects result array of succesful and failed files back into the form.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f Breaking")," With this plugin we\u2019ve deprecated ",(0,r.kt)("inlineCode",{parentName:"p"},"getMetaFromForm")," option that\nused to be in all acquire plugins like Dashboard and DragDrop. Now you can just\nuse ",(0,r.kt)("inlineCode",{parentName:"p"},"Form"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Form, {\n    target: '#my-form',\n});\n")),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/form/"},"more about the Form plugin")," in docs."),(0,r.kt)("h2",{id:"encoding-support-in-goldenretriever"},"Encoding support in GoldenRetriever"),(0,r.kt)("p",null,"Our browser crash / page refresh restore plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"GoldenRetriever")," (read\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/golden-retriever/"},"more about it"),") now supports correctly\nrestoring ",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com"},"Transloadit")," assemblies!"),(0,r.kt)("p",null,"Also, we\u2019ve fixed restoring from paused state. Now uploads will remain paused\nand not get out of sync."),(0,r.kt)("h2",{id:"type-safe-server"},"Type-safe Server"),(0,r.kt)("p",null,"Uppy Server now uses TypeScript to do some type checking at compile time. This\nhelps spot some otherwise easy to miss runtime bugs. While the project\u2019s source\nis still written in JavaScript, the use of\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files"},"JSDoc specifications is leveraged by TypeScript"),"\nto detect data types and mistakes with that, within the project."),(0,r.kt)("p",null,"Thanks to this approach a number of hidden bugs have already been identified and\nfixed, and it also makes Uppy Server very well documented. :)"),(0,r.kt)("h2",{id:"and-theres-more"},"And there\u2019s more"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New ",(0,r.kt)("inlineCode",{parentName:"li"},"setFileState")," method as a nice shorthand to update file-specific state."),(0,r.kt)("li",{parentName:"ul"},"Added more extensions for mimetype detection."),(0,r.kt)("li",{parentName:"ul"},"More plugin documentation \ud83d\udc4d"),(0,r.kt)("li",{parentName:"ul"},"Misc bugs fixes and improvements in Webcam, Dashboard, Provider, so things\nshould be more stable all around."),(0,r.kt)("li",{parentName:"ul"},"Added an option to limit simultaneous uploads in XHRUpload."),(0,r.kt)("li",{parentName:"ul"},"Fixed remote server error handler for uppy-server."),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("a",{parentName:"li",href:"https://snyk.io/"},"Snyk")," to uppy-server to aid vulnerability detection.")),(0,r.kt)("h2",{id:"full-changelog"},"Full Changelog"),(0,r.kt)("p",null,"Here is the full list of changes for version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.22.0")," (and patch ",(0,r.kt)("inlineCode",{parentName:"p"},"0.21.1"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," core: rendering engine switched from ",(0,r.kt)("inlineCode",{parentName:"li"},"Yo-Yo")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Preact"),", and\nall views from ",(0,r.kt)("inlineCode",{parentName:"li"},"html")," hyperx template strings to ",(0,r.kt)("inlineCode",{parentName:"li"},"JSX")," (#451 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," core: large refactor of Core and Plugins: ",(0,r.kt)("inlineCode",{parentName:"li"},"setFileState"),",\nmerge ",(0,r.kt)("inlineCode",{parentName:"li"},"MetaData")," plugin into ",(0,r.kt)("inlineCode",{parentName:"li"},"Dashboard"),', prefix "private" core methods with\nunderscores (@arturi / #438)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," core: renamed ",(0,r.kt)("inlineCode",{parentName:"li"},"core")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"uppy")," in plugins and what not. So\ninstead of ",(0,r.kt)("inlineCode",{parentName:"li"},"this.core.state")," we now use ",(0,r.kt)("inlineCode",{parentName:"li"},"this.uppy.state")," (#438 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," core: renamed events to remove ",(0,r.kt)("inlineCode",{parentName:"li"},"core:")," prefix, as been\nsuggested already. So: ",(0,r.kt)("inlineCode",{parentName:"li"},"success"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"upload-started")," and so on, and\nprefixed event names for plugins sometimes, like ",(0,r.kt)("inlineCode",{parentName:"li"},"dashboard:file-card")," (#438 /\n@arturi)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," core: CSS class names have been altered to use ",(0,r.kt)("inlineCode",{parentName:"li"},"uppy-"),"\nnamespace, so ",(0,r.kt)("inlineCode",{parentName:"li"},".UppyDashboard-files")," --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},".uppy-Dashboard-files")," and so on"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," dashboard: added ",(0,r.kt)("inlineCode",{parentName:"li"},"metaFields")," option, pass an array of\nsettings for UI field objects\n",(0,r.kt)("inlineCode",{parentName:"li"},"{ id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }"),"\n(#438 / @arturi, @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," core: deprecate ",(0,r.kt)("inlineCode",{parentName:"li"},"getMetaFromForm")," in favor of new ",(0,r.kt)("inlineCode",{parentName:"li"},"Form"),"\nplugin (#407 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"form: added ",(0,r.kt)("inlineCode",{parentName:"li"},"Form"),", a new plugin that is used in conjunction with any\nacquirer, responsible for: 1. acquiring the metadata from ",(0,r.kt)("inlineCode",{parentName:"li"},"<form>")," when upload\nstarts in Uppy; 2. injecting result array of succesful and failed files back\ninto the form (#407 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"core: add more extensions for mimetype detection (#452 / @ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"docs: more docs for plugins (#456 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"core: misc bugs fixes and improvements in Webcam, Dashboard, Provider and\nothers (#451 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: improved Dashboard UI (@arturi)"),(0,r.kt)("li",{parentName:"ul"},"uppy-server: remove pause/resume socket listeners when upload is done\n(@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"uppy/uppy-server: remote server error handler (#446 / @ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"provider: fix dropbox thumbnail view (@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"uppy-server: link uppy-server with ",(0,r.kt)("a",{parentName:"li",href:"https://snyk.io/"},"https://snyk.io/")," to aid vulnerability\nspotting (@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u26a0\ufe0f Breaking")," core: Set ",(0,r.kt)("inlineCode",{parentName:"li"},"this.el")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"Plugin")," class (#425 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"StatusBar, Dashboard and Provider UI improvements place upload button into\nStatusBar, use Alex\u2019s suggestions for retry button; other UI tweaks (#434 /\n@arturi)"),(0,r.kt)("li",{parentName:"ul"},"XHRUpload: fix fields in XHR remote uploader (#424 / @sadovnychyi)"),(0,r.kt)("li",{parentName:"ul"},"XHRUpload: option to limit simultaneous uploads #360 (#427 / goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"core: Add ",(0,r.kt)("inlineCode",{parentName:"li"},"isSupported()")," API for providers (#421 / @goto-bus-stop, @arturi)"),(0,r.kt)("li",{parentName:"ul"},"core: Add stores. Improve on Redux PR #216 to allow using Redux (or any other\nsolution) for all Uppy state management, instead of proxy-only (#426 /\n@goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"core: add ability to disable thumbnail generation (#432 / @richardwillars)"),(0,r.kt)("li",{parentName:"ul"},"core: allow to select multiple files at once from remote providers (#419 /\n@sadovnychyi)"),(0,r.kt)("li",{parentName:"ul"},"core: use ",(0,r.kt)("inlineCode",{parentName:"li"},"setPluginState")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"getPluginState")," in Providers (#436 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"docs: uppy-server docs for s3 ",(0,r.kt)("inlineCode",{parentName:"li"},"getKey")," option (#444 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"goldenretriever: Fix IndexedDB store initialisation when not cleaning up (#430\n/ @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"provider: folder deselection did not remove all files (#439 /\n@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"s3: Use Translator for localised strings (420 / @goto-bus-stop )"),(0,r.kt)("li",{parentName:"ul"},"transloadit: Port old tests from tape (#428 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"tus: Restore correctly from paused state (#443 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"uppy-server: use typescript to compile code for a type safe servers\n(@ifedapoolarewaju)")),(0,r.kt)("p",null,"We expect our 1.0 release early next year. Want to impact it? Comment below, in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/issues"},"GitHub issues"),", or on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.producthunt.com/posts/uppy-io"},"Product Hunt"),"."),(0,r.kt)("p",null,"Happy Holidays,"),(0,r.kt)("p",null,"The Uppy Team"),(0,r.kt)("center",null,(0,r.kt)("iframe",{src:"https://ghbtns.com/github-btn.html?user=transloadit&repo=uppy&type=watch&count=true",allowtransparency:"true",frameborder:"0",scrolling:"0",width:"100",height:"20"})))}u.isMDXComponent=!0},4351:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uppy-dashboard-provider-select-0f7e56334c6c14536f688cb4fb01df67.jpg"},1058:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uppy-dashboard-updated-fec111019ffc06e6f33762b6303069a7.jpg"}}]);