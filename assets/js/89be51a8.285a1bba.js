"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Actions",sidebar_position:2},i="Actions",l={unversionedId:"reference/actions",id:"reference/actions",title:"Actions",description:"NangoAction is the name of the base class of all Actions in your nango-integrations folder. This page contains the reference of all attributes and methods offered by NangoAction for your actions.",source:"@site/docs/reference/actions.md",sourceDirName:"reference",slug:"/reference/actions",permalink:"/reference/actions",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/reference/actions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Actions",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/reference/configuration"},next:{title:"SDKs",permalink:"/category/sdks"}},s={},p=[{value:"executeAction input and return values",id:"inputReturnValues",level:2},{value:"Available properties",id:"available-properties",level:2},{value:"this.logger",id:"logger",level:3},{value:"Available methods",id:"available-methods",level:2},{value:"this.httpRequest",id:"httpRequest",level:3},{value:"Authentication of the API call",id:"authentication-of-the-api-call",level:4},{value:"Parameter reference",id:"parameter-reference",level:4},{value:"Debugging HTTP calls",id:"debugging-http-calls",level:4},{value:"Timeouts",id:"timeouts",level:4},{value:"Returned promise &amp; response object",id:"returned-promise--response-object",level:4},{value:"this.getCurrentConnectionConfig",id:"thisgetcurrentconnectionconfig",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"actions"},"Actions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NangoAction")," is the name of the base class of all Actions in your ",(0,r.kt)("inlineCode",{parentName:"p"},"nango-integrations")," folder. This page contains the reference of all attributes and methods offered by NangoAction for your actions."),(0,r.kt)("p",null,"Need even more details? Nango is open source, so you can inspect the current ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango/blob/main/packages/action/lib/action.ts"},"NangoAction in our GitHub repo")),(0,r.kt)("h2",{id:"inputReturnValues"},"executeAction input and return values"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"executeAction")," method, which you implement in your NangoAction subclass, receives an input value from the ",(0,r.kt)("a",{parentName:"p",href:"/reference/SDKs/node#triggerAction"},(0,r.kt)("inlineCode",{parentName:"a"},"triggerAction")," call")," in the client SDK. This input ",(0,r.kt)("strong",{parentName:"p"},"must be JSON serializable")," otherwise you will encounter a runtime error."),(0,r.kt)("p",null,"It's return value will also be passed back as the return value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"triggerAction")," call in the client SDK, but this again means that whatever you return from the execution of ",(0,r.kt)("inlineCode",{parentName:"p"},"executeAction")," ",(0,r.kt)("strong",{parentName:"p"},"must be JSON serializable"),". Otherwise you will also encounter a runtime error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'//... inside a subclass of NangoAction\n\n    override async executeAction(input: any) { // input must be JSON serializable\n\n        // All good, works\n        return { iam: "JSON serializable" };\n    }\n')),(0,r.kt)("h2",{id:"available-properties"},"Available properties"),(0,r.kt)("h3",{id:"logger"},"this.logger"),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"protected logger: winston.Logger;\n")),(0,r.kt)("p",null,"As the signature reveals, the logger is an instance of the popular logger library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston"},"Winston"),". For a full documentation please check the winston website, although you will typically not need to interact with it apart from logging messages."),(0,r.kt)("p",null,"Nango supports ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration#logLevels"},"several log levels")," which are all directly accessible on the logger as methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"this.logger.error('I am an error message');\nthis.logger.warn('I am an warning');\nthis.logger.info('I am an informational message');\nthis.logger.debug('I am a (detailed) debug message');\n")),(0,r.kt)("p",null,"The logger will automatically prepend detailed information on the action and its execution to every message you log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<timestamp> <log-level> [<integration-name>] [<action-name>] [user-id: <user-id>] [exec ID: #<randomly generated 8-digit alphanumeric id>] <Your log messsage comes here>\n")),(0,r.kt)("p",null,"Which looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-07-21T13:04:54.323Z info [slack] [notify] [user-id: 1.0] [exec ID: #5SNQTX78] Hello I am an informational message\n")),(0,r.kt)("p",null,"The exec ID is randomly generated at the start of the action's execution and thus unique to this execution. It comes in handy if you are looking for all log messages that originate from a particular execution of an action."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Currently Nango logs all messages to ",(0,r.kt)("inlineCode",{parentName:"p"},"stdout")," as well as a log file called ",(0,r.kt)("inlineCode",{parentName:"p"},"nango-server.log")," in the Docker container. To access the log file run:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it nango-server sh\ncd /usr/nango-server\n"))),(0,r.kt)("h2",{id:"available-methods"},"Available methods"),(0,r.kt)("h3",{id:"httpRequest"},"this.httpRequest"),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"protected async httpRequest(endpoint: string, method: axios.Method, params?: axios.HttpParams, body?: any, headers?: axios.HttpHeader): Promise<AxiosResponse>\n")),(0,r.kt)("p",null,"You should ",(0,r.kt)("strong",{parentName:"p"},"always")," use this builtin method to make HTTP requests inside of your action. Only HTTP requests initiated through the method are properly tracked, authenticated, logged and retried by Nango."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Because Nango will possibly queue and retry your HTTP request (e.g. if it detects a rate-limit issue or the access token needs to be refreshed) it may take a long time for your HTTP request to complete. In certain situations Nango may also transparently retry HTTP requests issues through this method and only resolve the promise once the request has succeeded. In this case it will always add appropriate log messages on the ",(0,r.kt)("inlineCode",{parentName:"p"},"info")," log level.")),(0,r.kt)("h4",{id:"authentication-of-the-api-call"},"Authentication of the API call"),(0,r.kt)("p",null,"When you make an HTTP request through this method Nango will automatically add authentication to the request. How it does this is dictated by the ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration#integrationsYaml"},(0,r.kt)("inlineCode",{parentName:"a"},"call_auth -> mode")," setting")," in the integration's config."),(0,r.kt)("h4",{id:"parameter-reference"},"Parameter reference"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Example value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"'example/endpoint'"),(0,r.kt)("td",{parentName:"tr",align:null},"Relative endpoint to call, Nango will automatically prepend the ",(0,r.kt)("a",{parentName:"td",href:"/reference/configuration#integrationsYaml"},(0,r.kt)("inlineCode",{parentName:"a"},"base_url"))," specified in the integration configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"'POST'"),(0,r.kt)("td",{parentName:"tr",align:null},"The HTTP Method, Nango supports ",(0,r.kt)("inlineCode",{parentName:"td"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PUT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DELETE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PATCH"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"OPTIONS"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"HEAD"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{q: 'searchstring'}")),(0,r.kt)("td",{parentName:"tr",align:null},"Query parameters to be appended to the URL in the format ",(0,r.kt)("inlineCode",{parentName:"td"},"{key: value}"),". This parameter is optional.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{key: aValue }")," or ",(0,r.kt)("inlineCode",{parentName:"td"},'\'{"serialized": "JSON"}\'')),(0,r.kt)("td",{parentName:"tr",align:null},"The data to be passed into the body of the request. If the type of this parameter is ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," it will be passed as-is to the request body (and no headers are set), if it is of type ",(0,r.kt)("inlineCode",{parentName:"td"},"object")," Nango will attempt to serialize the object to JSON and add a ",(0,r.kt)("inlineCode",{parentName:"td"},"Content-Type")," header with value ",(0,r.kt)("inlineCode",{parentName:"td"},"application/json"),". This parameter is optional.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{headerKey: 'headerValue'}")),(0,r.kt)("td",{parentName:"tr",align:null},"Additional headers to be added to the HTTP requests. By default Nango will add an appropriate ",(0,r.kt)("inlineCode",{parentName:"td"},"Authorization")," header if required. This parameter is optional.")))),(0,r.kt)("h4",{id:"debugging-http-calls"},"Debugging HTTP calls"),(0,r.kt)("p",null,"Nango will automatically log details of every HTTP request sent and responses received if the ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration#integrationsYaml"},(0,r.kt)("inlineCode",{parentName:"a"},"log_level")," of the action")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," or lower. To track "),(0,r.kt)("h4",{id:"timeouts"},"Timeouts"),(0,r.kt)("p",null,"Nango automatically sets a timeout on every HTTP request based on the timeout configuration you specify. If a request fails due to a timeout it's promise will be rejected. Please check the documentation on ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration#nangoConfigYaml"},(0,r.kt)("inlineCode",{parentName:"a"},"default_http_request_timeout_seconds")," in ",(0,r.kt)("inlineCode",{parentName:"a"},"nango-config.yaml"))," as well the documentation on ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration#integrationsYaml"},(0,r.kt)("inlineCode",{parentName:"a"},"http_request_timeout_seconds")," in the integration config")," for details on how to set the timeout."),(0,r.kt)("h4",{id:"returned-promise--response-object"},"Returned promise & response object"),(0,r.kt)("p",null,"Calling ",(0,r.kt)("inlineCode",{parentName:"p"},"httpRequest")," returns a promise that resolves when the HTTP request finishes. Nango will only reject the promise if the HTTP request failed, e.g. due to a network issue. So even a 404 or 500 response will lead to a resolved promise.\nNango returns the full ",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com/docs/res_schema"},"Axios response object")," to you when the request finishes, please check the linked documentation for a full reference."),(0,r.kt)("h3",{id:"thisgetcurrentconnectionconfig"},"this.getCurrentConnectionConfig"),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"protected getCurrentConnectionConfig(): NangoConnection\n")),(0,r.kt)("p",null,"This method returns the Nango Connection object for current execution of the action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface NangoConnection {\n    uuid: string;\n    integration: string;\n    userId: string;\n    oAuthAccessToken: string;\n    additionalConfig: object;\n}\n")),(0,r.kt)("p",null,"The main use case of this method is to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalConfig")," property of the Connection object. In ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalConfig")," you can store configuration that is specific to the user and the integration together."),(0,r.kt)("p",null,"As an example, if you have a Slack integration that posts notifications to a channel the user may be able to select the channel in your application where the would like to receive notifications. You can then store the channel id in ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalConfig")," and access it in your Nango action with this method."),(0,r.kt)("p",null,"Please note that ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalConfig")," must be JSON serializable as Nango uses this format for storage and internal transmission."))}c.isMDXComponent=!0}}]);