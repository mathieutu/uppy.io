"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=a,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"Uppy: let\u2019s teach an old dog some new\xa0tricks",date:new Date("2016-07-15T00:00:00.000Z"),authors:["arturi"],slug:"2016/06/uppy/begins"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-68/blog/2016/06/uppy/begins",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2016-06-uppy-begins.md",source:"@site/blog/2016-06-uppy-begins.md",title:"Uppy: let\u2019s teach an old dog some new\xa0tricks",description:"For the past six months, we have been working hard on uppy.io. We feel that it",date:"2016-07-15T00:00:00.000Z",formattedDate:"July 15, 2016",tags:[],readingTime:3.805,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy: let\u2019s teach an old dog some new\xa0tricks",date:"2016-07-15T00:00:00.000Z",authors:["arturi"],slug:"2016/06/uppy/begins"},prevItem:{title:"Uppy version 0.8 released: The Webcam Edition and Meta Data",permalink:"/uppy.io/pr-preview/pr-68/blog/2016/08/0.8.0"}},s={authorsImageUrls:[void 0]},p=[{value:"Why the need for another file uploader?",id:"why-the-need-for-another-file-uploader",level:2},{value:"Our plans for Uppy",id:"our-plans-for-uppy",level:2}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For the past six months, we have been working hard on uppy.io. We feel that it\nis high time we gave you a look behind the scenes: what are we working on, and\nwhy."),(0,a.kt)("img",{src:"/img/blog/uppy-begins/uppy-dashboard.jpg"}),(0,a.kt)("p",null,"The way uploading works has not changed in a meaningful way since the days of\nour trusty old 56 kbit/s modems. Of course, files have gotten bigger and speeds\nhave increased, but that is more or less all there is to say. If it were up to\nus \u2013 and we hope it is \u2013 that is all about to change."),(0,a.kt)("p",null,"We at ",(0,a.kt)("a",{parentName:"p",href:"https://transloadit.com/"},"Transloadit")," are on a mission to change the way\nthe world does uploading. To accomplish this, our first step has been to develop\nan open protocol for resumable file uploads, called ",(0,a.kt)("a",{parentName:"p",href:"http://tus.io/"},"\u2018tus\u2019"),".\nFinally, that 2GB video upload from your smartphone doesn\u2019t have to start over\nwhen your train passes through a tunnel! The protocol got\n",(0,a.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=10591348"},"Hacker News excited")," on several\noccasions and is being deployed by, among others, our friends at Vimeo. Now that\na stable version 1.0 of \u2018tus\u2019 has been released, it is time to put it to the\ntest. A protocol without real-world applications is nothing more than a\nmeaningless document, after all."),(0,a.kt)("p",null,"We are therefore excited to tell you about Uppy: the file uploader that will\ncertainly fetch more than just your newspaper."),(0,a.kt)("h2",{id:"why-the-need-for-another-file-uploader"},"Why the need for another file uploader?"),(0,a.kt)("p",null,"It is true, there are indeed already a good few file uploading solutions out\nthere (",(0,a.kt)("a",{parentName:"p",href:"http://www.dropzonejs.com/"},"Dropzone"),", for instance, is quite good). And\n\u2013 for the most part \u2013 they do their job. Nevertheless, they are quite limited in\ntheir functionality:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can drag and drop files from local disk, but uploaders that supports\nInstagram, Dropbox or Google Drive are scarce. The ones out there lock you in\nwith vendors and are hard to customize for own use.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"File uploaders are seldom mindful of the existence of encoding and processing\nbackends, while the reality is that files often require some form of\nprocessing and that the end user would like to receive progress updates with\nregard to that.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"None of the currently available file uploaders make use of the standardized\nresumability that \u2018tus\u2019 provides, which makes them less than ideal for\nhandling larger files.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lastly, we feel that the current solutions are sometimes dropping the ball\nwhen it comes to a polished user experience. We aim to fix that."))),(0,a.kt)("p",null,"All in all, we think there is definitely some \u2018trouble at the old mill\u2019 here and\nit\u2019s time to let Uppy take care of that!"),(0,a.kt)("h2",{id:"our-plans-for-uppy"},"Our plans for Uppy"),(0,a.kt)("p",null,"Uppy will be a JavaScript file uploader that allows you to fetch files, not only\nfrom your local disk, but also from places like Dropbox, Instagram, Google\nDrive, webcams and remote URLs. It will have a modular, plugin-based design,\nmaking it lightweight and customizable."),(0,a.kt)("p",null,"Cute on the outside, the core of Uppy is very robust \u2013 thanks to resumability\nthrough 'tus'. We are confident that Uppy will be able to send even the biggest\nof files over the smallest of tubes."),(0,a.kt)("p",null,"Uppy will also offer first class support for accessing Transloadit\u2019s uploading\nand encoding backend, making it incredibly versatile. Of course, these are all\nultimately just plugins, and Uppy can just as easily be used with your own\nbackend \u2013 meaning no need to pay any subscription fees."),(0,a.kt)("p",null,"We are intent on making the user experience as smooth and satisfying as\npossible, in terms of both functionality and visual design. Uppy will have a\nbeautiful, themeable UI and it will look \u2013 and work \u2013 great on mobile platforms\nas well. While we hope that advanced users will love the customizable nature of\nUppy, an ample selection of presets will also be there to make sure that novice\nusers are not going to be lost in the woods."),(0,a.kt)("p",null,"Lastly, and this is a point of special significance to us, Uppy will be\ncompletely open source. When Uppy is finished, you will be free to use it for\nwhatever you like. Until that time, we very much welcome your ideas and\ncontributions. There are still a lot of decisions to be made and this is the\nperfect time to come and influence the end product."),(0,a.kt)("p",null,"We are going to work hard on bringing you the best file uploader possible and\nwe\u2019ll keep you informed about the development process on\n",(0,a.kt)("a",{parentName:"p",href:"http://uppy.io/"},"uppy.io"),". We can\u2019t wait for you to meet Uppy!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We were on the ",(0,a.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=12109410"},"Hacker News"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://www.producthunt.com/posts/uppy"},"Product Hunt")," frontpages.\nComments welcome there.")))}h.isMDXComponent=!0}}]);