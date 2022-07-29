"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Quickstart: Node",sidebar_position:1},i="Quickstart: Node",l={unversionedId:"quickstart/node",id:"quickstart/node",title:"Quickstart: Node",description:"Intro",source:"@site/docs/quickstart/node.md",sourceDirName:"quickstart",slug:"/quickstart/node",permalink:"/quickstart/node",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/quickstart/node.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Quickstart: Node",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Quickstart",permalink:"/quickstart"},next:{title:"Quickstart: Other Languages",permalink:"/quickstart/other"}},s={},c=[{value:"Intro",id:"intro",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Start a new project",id:"start-a-new-project",level:3},{value:"Initialize Nango",id:"initialize-nango",level:3},{value:"Run the Nango Server",id:"run-the-nango-server",level:3},{value:"Set up npm and Typescript",id:"set-up-npm-and-typescript",level:3},{value:"Create an Integration",id:"create-an-integration",level:3},{value:"Create an Action",id:"create-an-action",level:3},{value:"Trigger your Action",id:"trigger-your-action",level:3},{value:"Test your Action",id:"test-your-action",level:3},{value:"How did it go?",id:"how-did-it-go",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart-node"},"Quickstart: Node"),(0,r.kt)("h3",{id:"intro"},"Intro"),(0,r.kt)("p",null,"With this tutorial you will build a Slack Integration from scratch in ",(0,r.kt)("strong",{parentName:"p"},"10 minutes"),". Ready? Let's go!"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A recent version of ",(0,r.kt)("inlineCode",{parentName:"li"},"npm")," (>= 7.20.0) and ",(0,r.kt)("inlineCode",{parentName:"li"},"NodeJS")," (>= 16.7.0) (",(0,r.kt)("a",{parentName:"li",href:"https://www.notion.so/nangohq/Prerequisites-398e9314196b44cb8950132df15c8752"},"instructions")," to check and install prerequisites)"),(0,r.kt)("li",{parentName:"ul"},"Docker (installation instructions ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop/"},"here"),")")),(0,r.kt)("h3",{id:"start-a-new-project"},"Start a new project"),(0,r.kt)("p",null,"Fetch this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/node-sample"},"empty Node app")," (or use your own):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/NangoHQ/node-sample.git\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd node-sample\n")),(0,r.kt)("h3",{id:"initialize-nango"},"Initialize Nango"),(0,r.kt)("p",null,"Initialize the Nango Folder that will host your integration-specific code, later deployed to the Nango server (cf. ",(0,r.kt)("a",{parentName:"p",href:"/architecture"},"Architecture"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx nango init\n")),(0,r.kt)("p",null,"Navigate into the Nango Folder you just set up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd nango-integrations\n")),(0,r.kt)("h3",{id:"run-the-nango-server"},"Run the Nango Server"),(0,r.kt)("p",null,"Start the Nango Server with Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up # or 'docker-compose up' for older versions\n")),(0,r.kt)("p",null,"Give it a few seconds and then you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2705 Nango Server is ready!")," printed on your terminal."),(0,r.kt)("p",null,"The Nango Server is where your Integrations will run. It is a self-contained micro-service that handles retries, queuing, logging, etc. When we write our Slack Integration later on, it will execute on this server."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In local development, the Nango Server automatically monitors your Nango Folder for changes to let you run Integrations as you code (cf. ",(0,r.kt)("a",{parentName:"p",href:"/local-development"},"Local Development"),").")),(0,r.kt)("h3",{id:"set-up-npm-and-typescript"},"Set up npm and Typescript"),(0,r.kt)("p",null,"In a new terminal, navigate to the Nango Folder again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd [...]/node-sample/nango-integrations\n")),(0,r.kt)("p",null,"The Nango Folder is configured as an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/packages-and-modules"},"npm")," package, let's install its dependencies by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("p",null,"Nango leverages the ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"typescript")," programming language to write Integrations. To be able to run our code, enable continuous compilation of Typescript: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node_modules/typescript/bin/tsc -w --project tsconfig.json\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You will see an error in the terminal at first because there is no Typescript file to compile just yet. This will be resolved with the next steps.")),(0,r.kt)("p",null,"Compilation happens on every file save and compilation errors will show up in the terminal window where you just ran the previous command."),(0,r.kt)("h3",{id:"create-an-integration"},"Create an Integration"),(0,r.kt)("p",null,"In a new terminal, navigate to the Nango Folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd [...]/node-sample/nango-integrations\n")),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"integrations.yaml")," file (cf. ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration#integrationsYaml"},"reference"),") and copy/paste the configuration for our new Slack Integration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="integrations.yaml"',title:'"integrations.yaml"'},"integrations:\n  - slack:\n      base_url: https://slack.com/api/\n      call_auth:\n        mode: AUTH_HEADER_TOKEN\n      log_level: debug\n")),(0,r.kt)("p",null,"Create a directory to host the code for the Slack Integration. In the Nango Folder, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir slack\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd slack\n")),(0,r.kt)("h3",{id:"create-an-action"},"Create an Action"),(0,r.kt)("p",null,"Actions (cf. ",(0,r.kt)("a",{parentName:"p",href:"/architecture"},"Architecture"),") contain the business logic that is specific to each integration. They can be customized at will. Here, we want our Action to post a message on Slack. Naturally, Actions may be more complex than this simple example here (cf. ",(0,r.kt)("a",{parentName:"p",href:"/reference/best-practices"},"Best Practices"),")."),(0,r.kt)("p",null,"Create a file for our new ",(0,r.kt)("inlineCode",{parentName:"p"},"notify")," Action which will post a message to Slack: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch notify.action.ts\n")),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"notify.action.ts")," file and paste the following scaffold into it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="notify.action.ts"',title:'"notify.action.ts"'},"import { NangoAction } from '@nangohq/action';\n\nclass SlackNotifyAction extends NangoAction {\n\n    override async executeAction(input: any) {\n        // Add your action code here\n    }\n}\n\nexport { SlackNotifyAction };\n")),(0,r.kt)("p",null,"Note that every Action must follow the following naming patterns to the recognized by the Nango Server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<action-name>.action.ts")," for the Action file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<IntegrationName><ActionName>Action")," for the Action class")),(0,r.kt)("p",null,"The business logic of the Action will be implemented in the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeAction")," method."),(0,r.kt)("p",null,"From ",(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.postMessage"},"Slack's API reference"),", the API endpoint for posting a message requires:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a POST request to ",(0,r.kt)("a",{parentName:"li",href:"https://slack.com/api/chat.postMessage"},"https://slack.com/api/chat.postMessage")),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"channel")," (string) body parameter, i.e. the destination of the message"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"text")," (string) body parameter, i.e. the content of the message"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"mrkdown")," (bool) body parameter, i.e. the format type of the message")),(0,r.kt)("p",null,"Nango provides us with some helpers that we can (and should) use in our Action:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For HTTP requests, use the built-in ",(0,r.kt)("inlineCode",{parentName:"li"},"this.httpRequest")," method (cf. ",(0,r.kt)("a",{parentName:"li",href:"/reference/actions#httpRequest"},"reference"),"), which takes care of auth parameters, retries,  etc."),(0,r.kt)("li",{parentName:"ul"},"For logging, use the built-in logger ",(0,r.kt)("inlineCode",{parentName:"li"},"this.logger")," (cf. ",(0,r.kt)("a",{parentName:"li",href:"/reference/actions#logger"},"reference"),")")),(0,r.kt)("p",null,"We can now easily write the logic for our Slack Action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="notify.action.ts"',title:'"notify.action.ts"'},"// Add this inside of executeAction\nconst requestBody = {\n    channel: input.channelId,\n    mrkdwn: input.mrkdwn,\n    text: input.msg\n};\nconst response = await this.httpRequest('chat.postMessage', 'POST', undefined, requestBody);\n\nreturn { status: response.status, statusText: response.statusText };\n")),(0,r.kt)("h3",{id:"trigger-your-action"},"Trigger your Action"),(0,r.kt)("p",null,"Let's trigger the Action from the main application. First, navigate to the sample project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd [...]/node-sample\n")),(0,r.kt)("p",null,"Install the Nango Node SDK: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @nangohq/node-client\n")),(0,r.kt)("p",null,"Create a file that will trigger the Slack Notify Action: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch app.js\n")),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js")," and copy/paste: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app.js"',title:'"app.js"'},"import Nango from '@nangohq/node-client';\n\nconst nango = new Nango();\nawait nango.connect();\n\nconst slackMessage = `<your-name> implemented an integration from scratch \ud83d\udcaa`; // TODO: replace name\n\nawait nango.registerConnection('slack', 1, '<slack-token-goes-here>').catch((e) => {console.log(e)}); // TODO: replace token\n\nawait nango.triggerAction('slack', 'notify', 1, {\n        channelId: 'C03QBJWCWJ1',\n        mrkdwn: true,\n        msg: slackMessage\n});\n\nconsole.log('Message sent, check the #welcome channel in our community Slack -> https://nango.dev/slack');\nnango.close();\n")),(0,r.kt)("p",null,"Replace your ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-name>")," with your actual name, and ",(0,r.kt)("inlineCode",{parentName:"p"},"<slack-token-goes-here>")," with ",(0,r.kt)("a",{parentName:"p",href:"https://nangohq.notion.site/Quickstart-Slack-access-token-f41c7cc291c74fbd9b1110af6d631d01"},"this token"),"."),(0,r.kt)("p",null,"If you are curious about the ",(0,r.kt)("inlineCode",{parentName:"p"},"registerConnection")," call, this is how we tell Nango that a user has installed an Integration. You can learn more about it in the ",(0,r.kt)("a",{parentName:"p",href:"/architecture#nango-integrations--actions"},"Architecture")," and the ",(0,r.kt)("a",{parentName:"p",href:"/reference/SDKs/node#registerConnection"},"client SDK reference"),"."),(0,r.kt)("h3",{id:"test-your-action"},"Test your Action"),(0,r.kt)("p",null,"Navigate to the sample project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd [...]/node-sample\n")),(0,r.kt)("p",null,"Run your app: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node spp.js\n")),(0,r.kt)("p",null,"You should see a success message in the console!"),(0,r.kt)("p",null,"Go back to the terminal where you ran ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose up")," to see some detailed logs automatically generated by Nango \ud83d\ude0d"),(0,r.kt)("p",null,"Finally, check the ",(0,r.kt)("a",{parentName:"p",href:"https://nango-community.slack.com/archives/C03QBJWCWJ1"},"#welcome channel")," in our community Slack to make sure your Slack message was properly sent."),(0,r.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89 Congrats on your achievement, you just built a Nango Integration from scratch! \ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,r.kt)("h4",{id:"how-did-it-go"},"How did it go?"),(0,r.kt)("p",null,"We would love hear about your experience! Please don't be shy and give us feedback in the ",(0,r.kt)("a",{parentName:"p",href:"https://nango-community.slack.com/archives/C03QBHSMPUM"},"#general channel")," or directly to ",(0,r.kt)("a",{parentName:"p",href:"https://nango-community.slack.com/archives/D03PZUHHF1V"},"@robin")," or ",(0,r.kt)("a",{parentName:"p",href:"https://nango-community.slack.com/archives/D03QEGGULKC"},"@bastien")," on our community Slack. Thank you so much!"))}u.isMDXComponent=!0}}]);