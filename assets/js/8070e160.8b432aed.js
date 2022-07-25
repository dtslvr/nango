"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),k=a,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Quickstart \ud83d\ude80",sidebar_position:2},i="Quickstart",c={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"Let's test Nango and send a message to Slack in 30 seconds.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/quickstart",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Quickstart \ud83d\ude80",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Nango Tutorial: Write an integration from scratch",permalink:"/build-integrations/"}},s={},l=[{value:"Start the clock &amp; let&#39;s go!",id:"start-the-clock--lets-go",level:2},{value:"Where to go from here",id:"where-to-go-from-here",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"Let's test Nango and send a message to Slack in 30 seconds."),(0,a.kt)("h2",{id:"start-the-clock--lets-go"},"Start the clock & let's go!"),(0,a.kt)("p",null,"Clone the Nango repo & move into the example dir:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nangohq/nango.git\ncd nango/examples/quickstart\n")),(0,a.kt)("p",null,"Copy/paste the Slack access token provided ",(0,a.kt)("a",{parentName:"p",href:"https://nangohq.notion.site/Quickstart-Slack-access-token-f41c7cc291c74fbd9b1110af6d631d01"},"here"),"."),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"run-quickstart.js")," file and fill in your name and token on the following lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"...\nconst slackMessage = `Hello <your-name-goes-here>, welcome to Nango! :wave:`; // TODO: fill in your name.\nawait nango.registerConnection('slack', 1, '<token-goes-here>').catch((e) => {console.log(e)}); // TODO: fill in token.\n...\n")),(0,a.kt)("p",null,"Start the Nango server docker container (if you haven't already, ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"install Docker")," first):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd nango-integrations\ndocker compose up # or docker-compose up\n")),(0,a.kt)("p",null,"Open a new terminal, ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," back to the example folder and run ",(0,a.kt)("inlineCode",{parentName:"p"},"run-quickstart.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node run-quickstart.js\n")),(0,a.kt)("p",null,"Finally, go check that your greeting message was sent to the ",(0,a.kt)("strong",{parentName:"p"},"#welcome")," channel of our ",(0,a.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"community Slack")," \ud83c\udf89"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Not working as expected? Just ask in the ",(0,a.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"community Slack"),", we are very active there and will be glad to assist you!")),(0,a.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here"),(0,a.kt)("p",null,"Curious to understand what happens under the hood? Unwrap this Quickstart with the step-by-step ",(0,a.kt)("a",{parentName:"p",href:"/build-integrations/"},"Tutorial"),"."))}u.isMDXComponent=!0}}]);