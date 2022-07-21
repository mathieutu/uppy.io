"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3699],{5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(6010),o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),s=a(7392),i=a(7094),u=a(2466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a,l=e.lazy,c=e.block,m=e.defaultValue,h=e.values,f=e.groupId,y=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.l)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:b[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),w=N.tabGroupChoices,x=N.setTabGroupChoices,T=(0,r.useState)(g),Z=T[0],E=T[1],D=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=w[f];null!=I&&I!==Z&&k.some((function(e){return e.value===I}))&&E(I)}var U=function(e){var t=e.currentTarget,a=D.indexOf(t),n=k[a].value;n!==Z&&(C(t),E(n),null!=f&&x(f,String(n)))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=D.indexOf(e.currentTarget)+1;a=null!=(n=D[r])?n:D[0];break;case"ArrowLeft":var o,l=D.indexOf(e.currentTarget)-1;a=null!=(o=D[l])?o:D[D.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},y)},k.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return D.push(e)},onKeyDown:S,onFocus:U,onClick:U},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":Z===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function m(e){var t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},7129:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var n=a(7462),r=a(3366),o=a(7294),l=a(3905),s=a(5488),i=a(5162),u=a(3612),p=a(814);function d(){return o.createElement(o.Fragment,null,o.createElement(p.Z,{language:"js",title:"index.js"},"\nimport Uppy from '@uppy/core'\nimport Dashboard from '@uppy/dashboard'\nimport Tus from '@uppy/tus'\n\nconst uppy = new Uppy()\n  .use(Dashboard, { target: '#uppy', inline: true })\n  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })\n  .on('complete', (result) => {\n    console.log('Upload result:', result)\n  })\n"),o.createElement(p.Z,{language:"html",title:"index.html"},'\n<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8"/>\n    <title>dashboard example</title>\n    <script defer type="module" src="index.js"><\/script>\n  </head>\n  <body>\n    <div id="uppy"></div>\n  </body>\n</html>\n</code>\n'))}var c=["components"],m={sidebar_position:1},h="Quick start",f={unversionedId:"quick-start",id:"quick-start",title:"Quick start",description:"Uppy is an uploader and (optionally) an user interface, tied together by the core library,",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/uppy.io/pr-preview/pr-6/docs/quick-start",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Choosing the upload strategy you need",permalink:"/uppy.io/pr-preview/pr-6/docs/guides/choosing-upload-strategy"}},y={},b=[{value:"Next steps",id:"next-steps",level:2}],k={toc:b};function v(e){var t=e.components,a=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quick-start"},"Quick start"),(0,l.kt)("p",null,"Uppy is an uploader and (optionally) an user interface, tied together by the ",(0,l.kt)("a",{parentName:"p",href:"/docs/uppy-core"},"core library"),",\nwith lots of plugins to gradually add more functionality."),(0,l.kt)("p",null,"In this quick start we will build a small yet powerful example with ",(0,l.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"@uppy/dashboard")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/uploaders/tus"},"@uppy/tus"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can take Uppy for a walk with the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#"},"Stackblitz"))," or ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#"},"CodeSandbox"))," examples.\nBoth examples can also be cloned with Git for a kickstart locally.")),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/core @uppy/dashboard @uppy/tus\n")),(0,l.kt)(d,{mdxType:"QuickStartBoilerPlate"})),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/core @uppy/dashboard @uppy/tus\n")),(0,l.kt)(d,{mdxType:"QuickStartBoilerPlate"})),(0,l.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,l.kt)(u.Z,{type:"caution",mdxType:"Admonition"},(0,l.kt)("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'  \x3c!-- 1. Add CSS to `<head>` --\x3e\n  <link href="https://releases.transloadit.com/uppy/v2.9.0/uppy.min.css" rel="stylesheet">\n\n  \x3c!-- 2. Add JS before the closing `</body>` --\x3e\n  <script src="https://releases.transloadit.com/uppy/v2.9.0/uppy.min.js"><\/script>\n\n  \x3c!-- 3. Initialize --\x3e\n  <div id="uppy"></div>\n  <script>\n    var uppy = new Uppy.Core()\n    uppy.use(Uppy.DragDrop, { target: \'#uppy\' })\n    uppy.use(Uppy.Tus, { endpoint: \'//tusd.tusdemo.net/files/\' })\n  <\/script>\n')))),(0,l.kt)("h2",{id:"next-steps"},"Next steps"),(0,l.kt)("p",null,"That\u2019s it! You tried Uppy for the first time.\nThis was a taste of what Uppy can do, its power comes from modularity and versatility."),(0,l.kt)("p",null,"Here are some interesting things:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/guides/choosing-upload-strategy"},"Choosing the upload strategy you need"),"."),(0,l.kt)("li",{parentName:"ul"},"With ",(0,l.kt)("a",{parentName:"li",href:"/docs/companion"},"Companion")," your users will be able to select files from remote sources, such as Instagram,\nGoogle Drive and Dropbox. It bypasses the client (so a 5 GB video isn\u2019t eating into your users\u2019 data plans)\nand uploads to your preferred final destination."),(0,l.kt)("li",{parentName:"ul"},"Recover files from accidental refreshes or closed tabs with ",(0,l.kt)("a",{parentName:"li",href:"/docs/golden-retriever"},"Golden Retriever"),"."),(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("a",{parentName:"li",href:"/docs/user-interfaces/elements/image-editor"},"image editing")," to ",(0,l.kt)("a",{parentName:"li",href:"/docs/user-interfaces/dashboard"},"Dashboard"),".")))}v.isMDXComponent=!0}}]);