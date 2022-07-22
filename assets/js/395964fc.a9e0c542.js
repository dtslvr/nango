"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Set up local development",sidebar_position:2},r="Set Nango up for local development",l={unversionedId:"build-integrations/setup-local-dev",id:"build-integrations/setup-local-dev",title:"Set Nango up for local development",description:"In this part of the tutorial we will set your Nango installation up for local development. This will allow you to develop smoothly without having to manually recompile and reload anything, whilst enjoying the same runtime environment that runs Nango integrations in production.",source:"@site/docs/build-integrations/setup-local-dev.md",sourceDirName:"build-integrations",slug:"/build-integrations/setup-local-dev",permalink:"/build-integrations/setup-local-dev",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/build-integrations/setup-local-dev.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Set up local development",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Initialize Nango",permalink:"/build-integrations/initialize-nango"},next:{title:"Create an integration",permalink:"/build-integrations/create-integration"}},s={},p=[{value:"Running the Nango server (aka the runtime)",id:"running-the-nango-server-aka-the-runtime",level:2},{value:"Installing <code>nango-integrations</code> dependencies",id:"installing-nango-integrations-dependencies",level:2},{value:"Set up the Typescript environment",id:"set-up-the-typescript-environment",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-nango-up-for-local-development"},"Set Nango up for local development"),(0,a.kt)("p",null,"In this part of the tutorial we will set your Nango installation up for local development. This will allow you to develop smoothly without having to manually recompile and reload anything, whilst enjoying the same runtime environment that runs Nango integrations in production."),(0,a.kt)("p",null,"Let's do this!"),(0,a.kt)("p",null,"First, ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},"nango-integrations")," folder you just setup in the last step:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd nango-integrations\n")),(0,a.kt)("h2",{id:"running-the-nango-server-aka-the-runtime"},"Running the Nango server (aka the runtime)"),(0,a.kt)("p",null,"Your nango-integrations includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," by default. This makes it very easy to run a local development version of Nango on your machine which works exactly like the production environment."),(0,a.kt)("p",null,"Start the Nango server by running docker compose up:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up # or docker-compose up if you are on an older version of docker\n")),(0,a.kt)("p",null,"Give it a few seconds and then you should see ",(0,a.kt)("inlineCode",{parentName:"p"},"\u2705 Nango Server is ready!")," printed on your terminal."),(0,a.kt)("p",null,"The Nango server (sometimes also called the runtime) is where your integrations will run. It is a self-contained micro-service that provides the infrastructure to make native integrations easy and reliable: Automatic retries, rate-limit handling, detailed logging with no extra work from you and many other helpful abstractions are built into it."),(0,a.kt)("p",null,"When we write our Slack integration later on in this tutorial it will execute on the server and you will get to explore its outputs."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Starting the Nango server with docker compose from your local ",(0,a.kt)("inlineCode",{parentName:"p"},"nango-integrations")," folder puts it into local development mode. In this mode it automatically monitors the ",(0,a.kt)("inlineCode",{parentName:"p"},"nango-integrations")," folder for changes to your integrations and reloads them. So when you call your integrations in your application you can be sure that the server is using the latest version straight from your local ",(0,a.kt)("inlineCode",{parentName:"p"},"nango-integrations")," directory."),(0,a.kt)("p",{parentName:"admonition"},"This is different in production, where the server is running a pre-defined version of your integrations (that match the production version of your application). You can read more about ",(0,a.kt)("a",{parentName:"p",href:"/build-integrations/deploy-nango"},"production deployment here"),".")),(0,a.kt)("h2",{id:"installing-nango-integrations-dependencies"},"Installing ",(0,a.kt)("inlineCode",{parentName:"h2"},"nango-integrations")," dependencies"),(0,a.kt)("p",null,"In a new terminal, navigate to that same ",(0,a.kt)("inlineCode",{parentName:"p"},"nango-integrations")," folder inside your project."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"nango-integrations")," folder is configured as an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/packages-and-modules"},"npm")," package, which is why it contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file at its root. This has a few advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The package can be versioned for production deployments, which also makes it easy to do rollbacks if necessary"),(0,a.kt)("li",{parentName:"ul"},"You can easily use any existing npm package for writing your integrations"),(0,a.kt)("li",{parentName:"ul"},"You always have full control over which version of each dependency is used")),(0,a.kt)("p",null,"By default our ",(0,a.kt)("inlineCode",{parentName:"p"},"nango-integrations")," package only depends on a Nango runtime package. To install it just run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,a.kt)("h2",{id:"set-up-the-typescript-environment"},"Set up the Typescript environment"),(0,a.kt)("p",null,"Nango leverages the ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"typescript")," programming language to write integrations. Unfortunately we cannot directly run Typescript on nodeJS but need to compile it to javascript. To keep development convenient we need to make sure that this compilation happens every time we modify a typescript file. "),(0,a.kt)("p",null,"The nango CLI includes a small utility which does just that for you, activate it by running the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx nango watch\n")),(0,a.kt)("p",null,"Recompiles happen on every file save and any compilation error will show up in the terminal window where you just ran ",(0,a.kt)("inlineCode",{parentName:"p"},"npx nango watch"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If your main project is a typescript project, you need to ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#exclude"},"exclude")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"nango-integrations")," folder in your ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file. Since ",(0,a.kt)("inlineCode",{parentName:"p"},"nango-integrations")," handles Typescript compilation independently (we need to make sure the compilation matches what the server expects), you do not want your main project to interfere with its compilation process.")),(0,a.kt)("p",null,"Congrats on setting up your development environment! You are ready to create your first integration from scratch."))}c.isMDXComponent=!0}}]);