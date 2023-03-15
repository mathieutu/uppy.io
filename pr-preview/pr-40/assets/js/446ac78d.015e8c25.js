"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=o,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={title:"\ud83c\udf84 Uppy 2.1-2.3: Audio plugin, fast and efficient streaming for Companion, production-ready Unsplash, and more",date:new Date("2021-12-15T00:00:00.000Z"),authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/2.1-2.3/audio-cover.jpg",published:!0,slug:"2021/12/2.1/2.3"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-40/blog/2021/12/2.1/2.3",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2021-12-2.1-2.3.md",source:"@site/blog/2021-12-2.1-2.3.md",title:"\ud83c\udf84 Uppy 2.1-2.3: Audio plugin, fast and efficient streaming for Companion, production-ready Unsplash, and more",description:"Last Christmas, we gave you Uppy 1.24, but",date:"2021-12-15T00:00:00.000Z",formattedDate:"December 15, 2021",tags:[],readingTime:5.075,hasTruncateMarker:!0,authors:[{email:"antoine@transloadit.com",name:"Antoine du Hamel",id:"aduh95",tagline:"Developer",imageURL:"https://github.com/aduh95.png",key:"aduh95"},{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"},{email:"mikael@transloadit.com",name:"Mikael Finstad",id:"mikael",tagline:"Developer",imageURL:"https://github.com/mifi.png",key:"mifi"},{email:"merlijn@transloadit.com",name:"Merlijn Vos",id:"merlijn",tagline:"Developer",imageURL:"https://github.com/murderlon.png",key:"murderlon"}],frontMatter:{title:"\ud83c\udf84 Uppy 2.1-2.3: Audio plugin, fast and efficient streaming for Companion, production-ready Unsplash, and more",date:"2021-12-15T00:00:00.000Z",authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/2.1-2.3/audio-cover.jpg",published:!0,slug:"2021/12/2.1/2.3"},prevItem:{title:"Uppy 2.4-2.7: Image Compressor, Transloadit Rate Limiting, ESM",permalink:"/uppy.io/pr-preview/pr-40/blog/2022/03/2.4/2.7"},nextItem:{title:"Uppy 2.0.0: smaller, faster, modular plugins, Preact X, stricter types, and much more",permalink:"/uppy.io/pr-preview/pr-40/blog/2021/08/2.0"}},p={authorsImageUrls:[void 0,void 0,void 0,void 0]},s=[{value:"Audio plugin",id:"audio-plugin",level:2},{value:"<code>@uppy/unsplash</code> is now production ready",id:"uppyunsplash-is-now-production-ready",level:2},{value:"New streaming interface for Companion",id:"new-streaming-interface-for-companion",level:2},{value:"Status Bar error state improvements",id:"status-bar-error-state-improvements",level:2},{value:"Internal housekeeping",id:"internal-housekeeping",level:2},{value:"Yarn v3 instead of npm",id:"yarn-v3-instead-of-npm",level:3},{value:"Refactor locale scripts &amp; generate types and docs",id:"refactor-locale-scripts--generate-types-and-docs",level:3},{value:"Automated release scripts",id:"automated-release-scripts",level:3},{value:"And more",id:"and-more",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Last Christmas, we gave you ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2020/12/1.24/"},"Uppy 1.24"),", but\nthis very next year, we\u2019ll take it away (since it\u2019s outdated by now) and give\nyou a brand-new Uppy 2.3 \ud83c\udf81!"),(0,o.kt)("p",null,"After the ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2021/08/2.0/"},"release")," of our latest major\nversion, 2.0.0, we\u2019ve been busy with many things. First of all is the\nlong-awaited Audio plugin to record and upload live audio directly. We then\nworked on adding a fast and efficient streaming interface to Companion and made\nUnsplash production ready. Housekeeping was also part of the job: we made Status\nBar improvements, moved from npm to Yarn 3, did some refactoring, and updated\ndependencies."),(0,o.kt)("p",null,"Last but not least, we got the issue count down from around 110 since 2.0.0 to\naround 45 now."),(0,o.kt)("h2",{id:"audio-plugin"},"Audio plugin"),(0,o.kt)("p",null,"Uppy now has a new ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/audio")," plugin for recording audio memos, sounds,\njingling bells, Christmas carols, and all your holiday cheer. Check it out on\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard/"},"demo page"),"."),(0,o.kt)("video",{alt:"Audio plugin demo",muted:!0,autoplay:!0,loop:!0},(0,o.kt)("source",{src:"/img/blog/2.1-2.3/audio-demo.mp4",type:"video/mp4"}),"Your browser does not support the video tag: https://uppy.io/img/blog/2.1-2.3/audio-demo.mp4"),(0,o.kt)("h2",{id:"uppyunsplash-is-now-production-ready"},(0,o.kt)("inlineCode",{parentName:"h2"},"@uppy/unsplash")," is now production ready"),(0,o.kt)("p",null,"The Unsplash plugin has received an update, providing attribution to the image\nauthors and adding some polish to make it look better. Being fully brand\ncompliant with Unsplash means it\u2019s now production ready. You can demo the plugin\non the ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard"},"website")," or read the\n",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/unsplash/"},"docs"),"."),(0,o.kt)("h2",{id:"new-streaming-interface-for-companion"},"New streaming interface for Companion"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/companion/"},"Companion")," handles the server-to-server communication between your\nserver and file storage providers such as Google Drive, Dropbox, Instagram, and\nthe like. This bypasses the client (so a 5 GB video isn\u2019t eating into your\nusers\u2019 data plans) and files are directly uploaded to the final destination.\nCompanion is made to be effortlessly integrate-able with Uppy."),(0,o.kt)("p",null,"It used to work by downloading the requested file from a remote provider on the\nserver to then start uploading it to the destination. This did the job, but it\u2019s\nwasn\u2019t ideal."),(0,o.kt)("p",null,"We now built streaming support into Companion, which means the download and\nupload can happen simultaneously. This can result in ",(0,o.kt)("strong",{parentName:"p"},"two times faster\nuploads"),", because we no longer have to wait for files to finish downloading\nbefore starting the upload process. It\u2019s especially useful for large files and\nremoves the need for a lot of storage space on the server, as data will be\nbuffered in memory."),(0,o.kt)("p",null,"You can enable this by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"streamingUpload")," in the Companion\n",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/companion/#Options"},"options"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," Streaming is turned off by default. Do not turn it on yet if you\u2019re\nusing TUS for uploads, due to\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tus/tus-js-client/issues/275"},"this tus-js-client bug"),"."),(0,o.kt)("p",null,"Interested in using Companion? You can use Transloadit-hosted Companion on every\n",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Plan"),"."),(0,o.kt)("h2",{id:"status-bar-error-state-improvements"},"Status Bar error state improvements"),(0,o.kt)("p",null,"The Status Bar plugin would get confused about upload errors in Uppy, and we\u2019ve\naddressed this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The error state is now shown in case of only ",(0,o.kt)("em",{parentName:"li"},"one")," failed file instead of\n",(0,o.kt)("em",{parentName:"li"},"all")," failed files. The plugin used to get stuck in the uploading state when a\nsingle file failed."),(0,o.kt)("li",{parentName:"ul"},"Added \u201cX of X files uploaded\u201d below \u201cUpload failed\u201d for extra context."),(0,o.kt)("li",{parentName:"ul"},"Improved the error details button styling in the Status Bar and the file info\ncard."),(0,o.kt)("li",{parentName:"ul"},"Status Bar state is set to complete if the user manually removes the failed\nfiles.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"status bar improvements screenshot",src:n(6339).Z,width:"1200",height:"879"})),(0,o.kt)("h2",{id:"internal-housekeeping"},"Internal housekeeping"),(0,o.kt)("h3",{id:"yarn-v3-instead-of-npm"},"Yarn v3 instead of npm"),(0,o.kt)("p",null,"We\u2019ve switched the Uppy repo to Yarn 3 to improve package install performance.\nWith our complex dependency graph and over thirty packages in a monorepo, we are\nseeing install times reduced by more than a few minutes!"),(0,o.kt)("p",null,"We are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/corepack"},"Corepack")," to make sure all\nUppy contributors are using the same version of Yarn. If you are an Uppy\ncontributor, please run the following commands to enable Corepack:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"corepack -v || npm i -g corepack # install Corepack if not already installed\nyarn -v || corepack enable # install Yarn through Corepack if not already installed\nyarn || corepack yarn install # install npm dependencies using yarn\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/3237"},"View the PR")),(0,o.kt)("h3",{id:"refactor-locale-scripts--generate-types-and-docs"},"Refactor locale scripts & generate types and docs"),(0,o.kt)("p",null,"This is an internal change, but important nonetheless. Our locales now live in a\nseparate ",(0,o.kt)("inlineCode",{parentName:"p"},"locale.js")," file for every plugin instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"this.defaultLocale")," in\nthe class. The docs and types are automatically updated when we add or remove\nnew locale strings."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/3276"},"View the PR"),"."),(0,o.kt)("h3",{id:"automated-release-scripts"},"Automated release scripts"),(0,o.kt)("p",null,"A lot of things need to happen when we\u2019re publishing a new release. A complete\nredo of the automation script is now available for quick and secure releases."),(0,o.kt)("p",null,"Here are some highlights:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Releaser runs ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn release")," and will get a series of\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/terkelg/prompts"},"prompts")," to set up a release."),(0,o.kt)("li",{parentName:"ul"},"A changelog will be generated."),(0,o.kt)("li",{parentName:"ul"},"The contributions table will be updated."),(0,o.kt)("li",{parentName:"ul"},"GitHub Actions will create a release candidate pull request."),(0,o.kt)("li",{parentName:"ul"},"When approved, GitHub Actions automatically merges, publishes to the npm\npublic registry, and creates CDN bundles.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/3304"},"View the PR"),"."),(0,o.kt)("h2",{id:"and-more"},"And more"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"google-drive: plugin has been updated for brand compliance (#3178)"),(0,o.kt)("li",{parentName:"ul"},"google-drive: sort Google Drive list by name #3069"),(0,o.kt)("li",{parentName:"ul"},"status-bar: now shows all details on mobile when ",(0,o.kt)("inlineCode",{parentName:"li"},"showProgressDetails")," is\n",(0,o.kt)("inlineCode",{parentName:"li"},"true")," (#3174)"),(0,o.kt)("li",{parentName:"ul"},"core: move ",(0,o.kt)("inlineCode",{parentName:"li"},"Uppy")," class to its own module (#3225)"),(0,o.kt)("li",{parentName:"ul"},"angular: fix component crash by loosening ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," version constraints\n(#3210)"),(0,o.kt)("li",{parentName:"ul"},"drop-target: exposed events (#3238)"),(0,o.kt)("li",{parentName:"ul"},"companion: add ",(0,o.kt)("inlineCode",{parentName:"li"},"maxFileSize")," option in companion for safety #3159"),(0,o.kt)("li",{parentName:"ul"},"companion: new AWS S3 multipart presigned URL batching endpoint #3056"),(0,o.kt)("li",{parentName:"ul"},"companion: improve CORS default headers #3167"),(0,o.kt)("li",{parentName:"ul"},"companion: use GET instead of HEAD for ",(0,o.kt)("inlineCode",{parentName:"li"},"getURLMeta")," for better server\ncompatibility (especially signed S3 URLs) #3048"),(0,o.kt)("li",{parentName:"ul"},"companion: deprecate missing ",(0,o.kt)("inlineCode",{parentName:"li"},"uploadUrls")," option (will be required in the\nfuture) #3182"),(0,o.kt)("li",{parentName:"ul"},"companion: close window on auth callback error and show error to user #3143"),(0,o.kt)("li",{parentName:"ul"},"companion: cut off length of file names to avoid AWS error #3048"),(0,o.kt)("li",{parentName:"ul"},"companion: safely escape ",(0,o.kt)("inlineCode",{parentName:"li"},"<script>")," injected code in Companion\u2019s send-token.js\n#3101"),(0,o.kt)("li",{parentName:"ul"},"companion: upgrade aws-sdk #3334"),(0,o.kt)("li",{parentName:"ul"},"companion: improve logging #3103"),(0,o.kt)("li",{parentName:"ul"},"companion: change Provider/SearchProvider API to async and use streams instead\n#3159")),(0,o.kt)("p",null,"Happy Holidays from the Uppy team! Enjoy Christmas and New Year, stay safe, take\na walk outside. See you in 2022!"))}d.isMDXComponent=!0},6339:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/status-bar-improvements-b57b432fbbd9ad9b7efad2690877f1f5.jpg"}}]);