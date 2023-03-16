"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3695],{5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7462),n=r(7294),s=r(6010),i=r(2389),l=r(7392),o=r(7094),p=r(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:i,values:d,groupId:c,className:k}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??y.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),f=(0,l.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:g}=(0,o.U)(),[w,N]=(0,n.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=c){const e=b[c];null!=e&&e!==w&&h.some((t=>t.value===e))&&N(e)}const U=e=>{const t=e.currentTarget,r=x.indexOf(t),a=h[r].value;a!==w&&(C(t),N(a),null!=c&&g(c,String(a)))},T=e=>{let t=null;switch(e.key){case"Enter":U(e);break;case"ArrowRight":{const r=x.indexOf(e.currentTarget)+1;t=x[r]??x[0];break}case"ArrowLeft":{const r=x.indexOf(e.currentTarget)-1;t=x[r]??x[x.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},k)},h.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:T,onClick:U},i,{className:(0,s.Z)("tabs__item",m,i?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,n.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,i.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},3068:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(814),s=r(3612);const i=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check","prepare":"husky install","format:check":"prettier -c .","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:l}=i;function o(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:i="uppy.min.js"}=e,o=[];a.Children.toArray(t).forEach((e=>{o=[...o,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=o.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${l}/${i}`,m=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(s.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(n.Z,{language:"html"},m))}},4992:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),s=r(5488),i=r(5162),l=r(3068);const o={},p="Vue",u={unversionedId:"framework-integrations/vue",id:"framework-integrations/vue",title:"Vue",description:"Vue components for the Uppy UI plugins.",source:"@site/docs/framework-integrations/vue.mdx",sourceDirName:"framework-integrations",slug:"/framework-integrations/vue",permalink:"/uppy.io/pr-preview/pr-68/docs/framework-integrations/vue",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/framework-integrations/vue.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Svelte",permalink:"/uppy.io/pr-preview/pr-68/docs/framework-integrations/svelte"},next:{title:"Remote sources",permalink:"/uppy.io/pr-preview/pr-68/docs/presets/remote-sources"}},m={},d=[{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2}],c={toc:d};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vue"},"Vue"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://vuejs.org"},"Vue")," components for the Uppy UI plugins."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/vue\n"))),(0,n.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/vue\n"))),(0,n.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Box } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Box, {\n          // Options\n        })\n      '))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You also need to install the UI plugin you want to use. For instance,\n",(0,n.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),".")),(0,n.kt)("h2",{id:"use"},"Use"),(0,n.kt)("p",null,"The following plugins are available as React component wrappers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<Dashboard />")," renders ",(0,n.kt)("a",{parentName:"li",href:"/docs/user-interfaces/dashboard"},(0,n.kt)("inlineCode",{parentName:"a"},"@uppy/dashboard"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<DragDrop />")," renders ",(0,n.kt)("a",{parentName:"li",href:"/docs/user-interfaces/drag-drop"},(0,n.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<ProgressBar />")," renders\n",(0,n.kt)("a",{parentName:"li",href:"/docs/user-interfaces/progress-bar"},(0,n.kt)("inlineCode",{parentName:"a"},"@uppy/progress-bar"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<StatusBar />")," renders ",(0,n.kt)("a",{parentName:"li",href:"/docs/user-interfaces/status-bar"},(0,n.kt)("inlineCode",{parentName:"a"},"@uppy/status-bar")))),(0,n.kt)("p",null,"Instead of adding a UI plugin to an Uppy instance with ",(0,n.kt)("inlineCode",{parentName:"p"},".use()"),", the Uppy\ninstance can be passed into components as an ",(0,n.kt)("inlineCode",{parentName:"p"},"uppy")," prop. Due to the way Vue\nhandles reactivity, you can initialize Uppy the same way you would with vanilla\nJavaScript."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n    import { Dashboard } from '@uppy/vue';\n    import Uppy from '@uppy/core';\n    import Webcam from '@uppy/webcam';\n\n    // Don't forget the CSS: core and UI components + plugins you are using\n    import '@uppy/core/dist/style.css';\n    import '@uppy/dashboard/dist/style.css';\n    import '@uppy/webcam/dist/style.css';\n\n    const uppy = new Uppy().use(Webcam);\n<\/script>\n\n<main><Dashboard uppy={uppy} plugins={[\"Webcam\"]} /></main>\n")))}k.isMDXComponent=!0}}]);