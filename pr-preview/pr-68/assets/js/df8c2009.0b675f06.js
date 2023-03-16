"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6752],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(o),c=r,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||a;return o?n.createElement(h,i(i({ref:t},m),{},{components:o})):n.createElement(h,i({ref:t},m))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},1768:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={title:"Uppy 2.4-2.7: Image Compressor, Transloadit Rate Limiting, ESM",date:new Date("2022-03-11T00:00:00.000Z"),authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/2.4-2.7/compressor.jpg",published:!0,slug:"2022/03/2.4/2.7"},i=void 0,s={permalink:"/uppy.io/pr-preview/pr-68/blog/2022/03/2.4/2.7",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2022-03-2.4-2.7.md",source:"@site/blog/2022-03-2.4-2.7.md",title:"Uppy 2.4-2.7: Image Compressor, Transloadit Rate Limiting, ESM",description:"We\u2019re always looking for opportunities to teach Uppy cool new tricks, and the",date:"2022-03-11T00:00:00.000Z",formattedDate:"March 11, 2022",tags:[],readingTime:3.32,hasTruncateMarker:!0,authors:[{email:"antoine@transloadit.com",name:"Antoine du Hamel",id:"aduh95",tagline:"Developer",imageURL:"https://github.com/aduh95.png",key:"aduh95"},{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"},{email:"mikael@transloadit.com",name:"Mikael Finstad",id:"mikael",tagline:"Developer",imageURL:"https://github.com/mifi.png",key:"mifi"},{email:"merlijn@transloadit.com",name:"Merlijn Vos",id:"merlijn",tagline:"Developer",imageURL:"https://github.com/murderlon.png",key:"murderlon"}],frontMatter:{title:"Uppy 2.4-2.7: Image Compressor, Transloadit Rate Limiting, ESM",date:"2022-03-11T00:00:00.000Z",authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/2.4-2.7/compressor.jpg",published:!0,slug:"2022/03/2.4/2.7"},prevItem:{title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",permalink:"/uppy.io/pr-preview/pr-68/blog/2022/09/3.0"},nextItem:{title:"\ud83c\udf84 Uppy 2.1-2.3: Audio plugin, fast and efficient streaming for Companion, production-ready Unsplash, and more",permalink:"/uppy.io/pr-preview/pr-68/blog/2021/12/2.1/2.3"}},p={authorsImageUrls:[void 0,void 0,void 0,void 0]},l=[{value:"Compressor",id:"compressor",level:2},{value:"Hosted Companion custom credentials",id:"hosted-companion-custom-credentials",level:2},{value:"Transloadit rate limiting",id:"transloadit-rate-limiting",level:2},{value:"Move to ESM",id:"move-to-esm",level:2},{value:"End to end: move to Cypress",id:"end-to-end-move-to-cypress",level:2},{value:"Lighter Bundle",id:"lighter-bundle",level:2},{value:"Companion improvements",id:"companion-improvements",level:2}],m={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We\u2019re always looking for opportunities to teach Uppy cool new tricks, and the\npast few months have been no exception. Since our\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2021/12/2.1-2.3/"},"most recent post")," in December, Uppy has\ncontinued to receive a steady stream of updates. This post covers all the\nimprovements made in Uppy versions 2.4 through 2.7. Changes and additions\ninclude: image compression, improved Transloadit rate limiting and a lighter\nDashboard plugin. We\u2019ve also moved our end-to-end tests to Cypress, and are\nslowly converting plugins to ES modules (ESM)."),(0,r.kt)("img",{className:"border",alt:"Uppy Compressor plugin showing compressed images notification",src:"/img/blog/2.4-2.7/compressor.jpg"}),(0,r.kt)("h2",{id:"compressor"},"Compressor"),(0,r.kt)("p",null,"Some of the most commonly uploaded files on the internet are images \u2014 photos,\nstock images, screenshots, and documents scans. Uppy now includes a new plugin\ncalled ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/compressor")," that optimizes images (JPEG, PNG), saving on average\nup to 60% in size (roughly 18 MB for 10 images). It uses\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/compressorjs"},"Compressor.js")," under the hood."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/compressor/"},"Read the docs")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard/"},"try Compressor in action"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core';\nimport Compressor from '@uppy/compressor';\n\nconst uppy = new Uppy();\nuppy.use(Compressor);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/compressor")," is also the first plugin that we are releasing as ESM,\nbackwards compatible as CJS, to test out how this works. Please report any\nissues."),(0,r.kt)("h2",{id:"hosted-companion-custom-credentials"},"Hosted Companion custom credentials"),(0,r.kt)("p",null,"It cannot be overstated that our\n",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com/docs/sdks/uppy/"},"Transloadit-hosted"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/companion/"},"Companion Plugin")," is the easiest secure way to\nallow your users pick files from cloud sources like Google Drive, Instagram,\nBox, etc. via Uppy. Up until now, however, that meant your users had to\nauthenticate their cloud account with Transloadit, preventing you from showing\nyour own logo instead. That has now been fixed! Head to ",(0,r.kt)("inlineCode",{parentName:"p"},"Transloadit Console")," /\n",(0,r.kt)("inlineCode",{parentName:"p"},"Credentials"),", scroll down to ",(0,r.kt)("inlineCode",{parentName:"p"},"Third-party Credentials"),", click on\n",(0,r.kt)("inlineCode",{parentName:"p"},"Add new Credentials"),", select ",(0,r.kt)("inlineCode",{parentName:"p"},"Companion OAuth"),", and voil\xe0!"),(0,r.kt)("img",{className:"border",alt:"Transloadit Companion 3rd party credentials",src:"/img/blog/2.4-2.7/companion-3rd-party-oauth.jpg"}),(0,r.kt)("p",null,"Try it out with the\n",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"free Transloadit Community Plan \u2014 5GB / month and access to Companion"),"."),(0,r.kt)("h2",{id:"transloadit-rate-limiting"},"Transloadit rate limiting"),(0,r.kt)("p",null,"We\u2019ve added rate limiting to Transloadit\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/3429"},"assembly creation and status polling"),",\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/3394"},"tus retries"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the remote server responds with HTTP 429, all requests are paused for a\nwhile in the hope that it can resolve the rate limiting. Failed requests are\nnow also queued up after the retry delay. Before, they were scheduled for\nretry without being queued up, which would sometimes end up overflowing the\nlimit option.")),(0,r.kt)("p",null,"As a result of this change, uploading many files at once has become even more\nrobust."),(0,r.kt)("h2",{id:"move-to-esm"},"Move to ESM"),(0,r.kt)("p",null,"The JavaScript ecosystem is moving towards ESM, and we want to follow suit. We\nare slowly starting to adopt ESM in Uppy packages. To do so, we integrated a\nplugin into our build system that transpiles ESM source code to CommonJS syntax,\nwhich is distributed with the npm package. Nothing will change on your end,\nthough \u2013 we know that not everyone is using tooling that support ESM, so we\u2019re\nholding on to CommonJS for the time being. Our plan is to refactor all official\nUppy plugins to ESM before Uppy 3.0 is released, and drop CommonJS in favor of\nESM in the npm packages at that point."),(0,r.kt)("p",null,"For details, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/3468"},"PR 3468"),"."),(0,r.kt)("h2",{id:"end-to-end-move-to-cypress"},"End to end: move to Cypress"),(0,r.kt)("p",null,"Uppy has had end to end from the start, but the developer experience was less\nthan ideal with custom Webdriver.io + Selenium. The transition to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/3444"},"Cypress")," allows us to write\ntests with ease and comfort, backed by great documentation."),(0,r.kt)("h2",{id:"lighter-bundle"},"Lighter Bundle"),(0,r.kt)("p",null,"We continue to look for ways to reduce Uppy\u2019s bundle size and modernize our\nbuild toolchain. This time, we\u2019ve replaced the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/exif-js/exif-js"},"Exifr.js")," legacy bundle with the modern one\nwithout IE polyfills. Our Browserify bundler has been replaced with a modern and\nmore efficient ESBuild."),(0,r.kt)("h2",{id:"companion-improvements"},"Companion improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved private IP check (#3403)"),(0,r.kt)("li",{parentName:"ul"},"Implement periodic ping functionality (#3246)"),(0,r.kt)("li",{parentName:"ul"},"Fix broken thumbnails for Box and Dropbox (#3460)"),(0,r.kt)("li",{parentName:"ul"},"Fix unpslash author meta, sanitize metadata to strings and improve Companion\ntests (#3478)")),(0,r.kt)("p",null,"That\u2019s it for today! See the full\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#1300"},"changelog"),"\nfor more details."))}u.isMDXComponent=!0}}]);