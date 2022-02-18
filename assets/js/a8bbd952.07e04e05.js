"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25304],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69842:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return l},toc:function(){return u},default:function(){return h}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r={title:"Centralized Authentication with Apache APISIX and Advanced Tricks",author:"Xinxin Zhu",authorURL:"https://github.com/starsz",authorImageURL:"https://avatars.githubusercontent.com/u/25628854?v=4",keywords:["APISIX","Casbin","Authorization","Practical Case"],description:"This article introduces the authentication feature of Apache APISIX, in terms of importance and playful use, with detailed descriptions and details on its use.",tags:["Practical Case"]},c=void 0,s={permalink:"/blog/2021/09/07/how-to-use-apisix-auth",source:"@site/blog/2021/09/07/how-to-use-apisix-auth.md",title:"Centralized Authentication with Apache APISIX and Advanced Tricks",description:"This article introduces the authentication feature of Apache APISIX, in terms of importance and playful use, with detailed descriptions and details on its use.",date:"2021-09-07T00:00:00.000Z",formattedDate:"September 7, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:7.94,truncated:!0,authors:[{name:"Xinxin Zhu",url:"https://github.com/starsz",imageURL:"https://avatars.githubusercontent.com/u/25628854?v=4"}],prevItem:{title:"How can I contribute to an open source project without writing code?",permalink:"/blog/2021/09/09/how-to-contribute-to-an-OpenSource-without-coding"},nextItem:{title:"Based on Apache APISIX, iQIYI API Gateway Update and landing practice",permalink:"/blog/2021/09/07/iQIYI-usercase"}},l={authorsImageUrls:[void 0]},u=[{value:"What is the significance of network authentication",id:"what-is-the-significance-of-network-authentication",children:[{value:"Security",id:"security",children:[]},{value:"Practicality",id:"practicality",children:[]},{value:"Functionality",id:"functionality",children:[]}]},{value:"Benefits of centralized authentication with Apache APISIX",id:"benefits-of-centralized-authentication-with-apache-apisix",children:[{value:"From traditional to new model",id:"from-traditional-to-new-model",children:[]},{value:"Benefit 1: Configuration convergence, unified management",id:"benefit-1-configuration-convergence-unified-management",children:[]},{value:"Benefit 2: Rich plug-ins, reduced development",id:"benefit-2-rich-plug-ins-reduced-development",children:[]},{value:"Benefit 3: Flexible and powerful configuration",id:"benefit-3-flexible-and-powerful-configuration",children:[]}]},{value:"How to play with authentication in Apache APISIX",id:"how-to-play-with-authentication-in-apache-apisix",children:[{value:"Primary: General play",id:"primary-general-play",children:[]},{value:"Intermediate usages of authentication",id:"intermediate-usages-of-authentication",children:[]}]},{value:"Advanced: upload your own code snippets through the Serverless plug-in",id:"advanced-upload-your-own-code-snippets-through-the-serverless-plug-in",children:[{value:"Method 1: Custom judgment logic",id:"method-1-custom-judgment-logic",children:[]},{value:"Method 2: Initiate authentication request",id:"method-2-initiate-authentication-request",children:[]},{value:"Upload Configurations",id:"upload-configurations",children:[]}]}],p={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article describes the authentication features of Apache APISIX, in terms of importance and usage.")),(0,o.kt)("p",null,"Authentication is a very common feature in daily life, and we all come across it in our daily lives. For example, face recognition when using Alipay, fingerprint/face clocking in and out of work, and password login on websites are all scenarios of authentication."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004418593-0a46f949-72aa-4cd4-8f38-1988327c92d6.png",alt:"Authentication Concepts"})),(0,o.kt)("p",null,"As shown above, Jack requests a server-side application with an account password, and the server-side application needs a module dedicated to authentication to handle this part of the logic. After the request is processed, if the JWT Token authentication method is used, the server will provide a Token to identify the user as Jack. If the account password is entered incorrectly during the login process, it will lead to authentication failure. This scenario must be very familiar to everyone, so we won't expand the example here."),(0,o.kt)("h2",{id:"what-is-the-significance-of-network-authentication"},"What is the significance of network authentication"),(0,o.kt)("h3",{id:"security"},"Security"),(0,o.kt)("p",null,"Authentication ensures the security of back-end services and avoids unauthorized access, thus ensuring the security of data. For example, it prevents certain hacking attacks, and some malicious calls, which can be blocked by authentication."),(0,o.kt)("h3",{id:"practicality"},"Practicality"),(0,o.kt)("p",null,'From the perspective of practicality, it can be more convenient to record the operator or caller. For example, clocking in at work is actually a way to record "who performed this operation" to count employees\' work information.'),(0,o.kt)("p",null,"Secondly, it can record the access frequency and frequency of access. For example, it can record the frequency and frequency of requests initiated by a user in the last few minutes, which can determine how active the user is, and also whether it is a malicious attack, etc."),(0,o.kt)("h3",{id:"functionality"},"Functionality"),(0,o.kt)("p",null,"At the functional level, it can handle operations with different privileges for different identities by identifying them. For example, in a company, you cannot use certain pages or services with your identity authority. To be more detailed, it can do some related technical restriction policies for different identities or different API interface callers, such as limiting the flow and speed, etc., so as to achieve different functional restrictions according to different users (callers)."),(0,o.kt)("h2",{id:"benefits-of-centralized-authentication-with-apache-apisix"},"Benefits of centralized authentication with Apache APISIX"),(0,o.kt)("h3",{id:"from-traditional-to-new-model"},"From traditional to new model"),(0,o.kt)("p",null,"As shown in the figure below, the diagram on the left shows us a more common traditional authentication approach. Each application service module goes to develop a separate authentication module that is used to support a set of process handling for authentication. But when the volume of services increases, it becomes clear that the development workload of these modules is huge and repetitive."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004492221-0721d933-705d-4875-b956-e94a11a45135.png",alt:"Apache APISIX Authentication"})),(0,o.kt)("p",null,"At such times, we can achieve unification and reduce the amount of development by placing this part of the development logic in the Apache APISIX gateway."),(0,o.kt)("p",null,"As shown in the figure on the right, the user or application party goes directly to request Apache APISIX, and then Apache APISIX passes the authenticated identity information to the upstream application service after it has been identified and authenticated. After that, the upstream application service can read this information from the request header and then process the subsequent related work."),(0,o.kt)("p",null,"After the general process, let's list it in detail."),(0,o.kt)("h3",{id:"benefit-1-configuration-convergence-unified-management"},"Benefit 1: Configuration convergence, unified management"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004574541-87b607eb-2971-4c1d-a1d6-74cf4a5fdd42.png",alt:"Dashboard"})),(0,o.kt)("p",null,"The screenshot above is a screenshot of the APISIX-Dashboard interface, you can see the routing, Consumer and other data information. The Consumer here can be understood as an application party, for example, you can create a Consumer specifically for the application and configure related authentication plugins, such as JWT, Basic-Auth, etc. When there is a new service, we need to create another Consumer, and then configure this part of the configuration information to the second application service."),(0,o.kt)("p",null,"Through centralized authentication, we can converge and unify the customer configuration and achieve the effect of reducing the operation and maintenance cost."),(0,o.kt)("h3",{id:"benefit-2-rich-plug-ins-reduced-development"},"Benefit 2: Rich plug-ins, reduced development"),(0,o.kt)("p",null,"Apache APISIX, as an API gateway, is now open to cooperation with various plug-in functions for adaptation, and the plug-in library is relatively rich. At present, it can already work with a large number of authentication-related plug-ins, as shown in the following figure."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004738218-586e84af-a5ab-4714-845d-4d71b7ba79e3.png",alt:"API Gateway Authentication Plugin"})),(0,o.kt)("p",null,"Basic authentication plug-ins such as Key-Auth, Basic-Auth, they are authenticated by way of account password."),(0,o.kt)("p",null,"More complex authentication plugins such as Hmac-Auth, JWT-Auth. e.g. Hmac-Auth generates a signature by doing some encryption on the request information. When the API caller carries this signature to the Apache APISIX gateway Apache APISIX calculates the signature with the same algorithm and passes it only if the signer and the application caller are authenticated the same."),(0,o.kt)("p",null,"The Authz-casbin plugin is a project currently being developed by Apche APISIX in collaboration with the Casbin community. The principle of the application is to handle role-based authority control (RBAC) and ACL-related operations according to Casbin rules."),(0,o.kt)("p",null,"Others are generic authentication protocols and collaborative authentication protocols with third-party components, such as OpenID-Connect authentication mechanism, and LDAP authentication."),(0,o.kt)("h3",{id:"benefit-3-flexible-and-powerful-configuration"},"Benefit 3: Flexible and powerful configuration"),(0,o.kt)("p",null,"How to understand powerful is that Apache APISIX can do different levels of plug-in configuration for each Consumer (i.e., caller application)."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004783828-3dd0056c-a6aa-4ab9-b902-7bd2ca545ffe.png",alt:"Configuration flexibility"})),(0,o.kt)("p",null,"As shown above, we have created two consumers Consumer A and Consumer B. If we apply Consumer A to ",(0,o.kt)("inlineCode",{parentName:"p"},"Application 1"),", subsequent accesses to ",(0,o.kt)("inlineCode",{parentName:"p"},"Application 1")," will enable this part of Consumer A's plugins, such as IP blacklisting, limiting the number of concurrency, etc. If we apply Consumer B to ",(0,o.kt)("inlineCode",{parentName:"p"},"Application 2"),", the access log of ",(0,o.kt)("inlineCode",{parentName:"p"},"Application 2")," will be sent to the logging system for collection via HTTP since the http-log plugin is enabled."),(0,o.kt)("h2",{id:"how-to-play-with-authentication-in-apache-apisix"},"How to play with authentication in Apache APISIX"),(0,o.kt)("p",null,"Regarding the play of Apache APISIX authentication, here is a recommendation of three stages of play for your reference only, or you can use and apply them in more depth on the basis of these."),(0,o.kt)("h3",{id:"primary-general-play"},"Primary: General play"),(0,o.kt)("p",null,"Ordinary play is recommended based on Key-Auth, Basic-Auth, JWT-Auth and Hmac-Auth, the use of these plug-ins need to be associated with the use of Consumer."),(0,o.kt)("h4",{id:"step-1-create-a-route-and-configure-the-authentication-plugin"},"Step 1: Create a route and configure the authentication plugin"),(0,o.kt)("p",null,"Create a route, configure the upstream as ",(0,o.kt)("inlineCode",{parentName:"p"},"httpbin.org")," and enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"basic-auth")," plugin."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004892467-71c93f8f-dc0e-47fe-a88f-943adb9edbff.png",alt:"Create route"})),(0,o.kt)("h4",{id:"step-2-create-consumer-and-configure-identity-information"},"Step 2: Create consumer and configure identity information"),(0,o.kt)("p",null,"Create the consumer foo. In the consumer, we need to configure the user authentication information, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," for foo and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"bar"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004937828-15ac5d8f-0e45-4c3d-94e8-2b180266b379.png",alt:"Create consumer"})),(0,o.kt)("h4",{id:"step-3-application-service-carries-authentication-information-for-access"},"Step 3: Application service carries authentication information for access"),(0,o.kt)("p",null,"The application accesses Apache APISIX with ",(0,o.kt)("inlineCode",{parentName:"p"},"username:foo"),",",(0,o.kt)("inlineCode",{parentName:"p"},"password: bar"),". Apache APISIX is authenticated and carries the request Authorization request header upstream to ",(0,o.kt)("inlineCode",{parentName:"p"},"httpbin.org"),". Since the get interface in ",(0,o.kt)("inlineCode",{parentName:"p"},"httpbin.org")," returns the request information, we can observe the request header ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," in it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004973305-4b209f79-f7de-41a2-994e-8877a6624d99.png",alt:"Request Carry"})),(0,o.kt)("h3",{id:"intermediate-usages-of-authentication"},"Intermediate usages of authentication"),(0,o.kt)("p",null,"The intermediate mode is to use Apache APISIX with the OpenID-Connect plugin to interface to third-party authentication services. openID-Connect is an authentication mechanism that can be used to interface to a user's user management system or user management services, such as Authing and Tencent Cloud in China, Okta and Auth0, etc."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005002268-7393b40e-1733-4e66-bc09-742be221efae.png",alt:"Third-party authentication mode"})),(0,o.kt)("p",null,"The details are as follows, using Okta cloud service as an example."),(0,o.kt)("h4",{id:"step-1-create-an-openid-connect-application"},"Step 1: Create an OpenID-Connect application"),(0,o.kt)("p",null,"Create an application that supports OpenID-Connect from the Okta console page."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005022640-1e931b14-8175-47f3-bfb8-46e09cec616b.png",alt:"Create"})),(0,o.kt)("h4",{id:"step-2-create-a-route-and-configure-the-openid-connect-plug-in"},"Step 2: Create a route and configure the OpenID-Connect plug-in"),(0,o.kt)("p",null,"Create a route, configure the upstream address to httpbin.org, and enable the openid-connect plug-in, and fill in the configuration of the Okta application into the openid-connect plug-in."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005045489-b637ef9a-c71c-440f-ae58-a93398a4c9dd.png",alt:"Configure the plugin"})),(0,o.kt)("h4",{id:"step-3-when-the-user-visits-it-will-jump-to-the-login-page-after-the-login-is-complete-the-upstream-application-gets-the-user-information"},"Step 3: When the user visits, it will jump to the login page. After the login is complete, the upstream application gets the user information"),(0,o.kt)("p",null,"At this point, when the user accesses Apache APISIX, they will first be redirected to the Okta login page. At this point, you need to fill in the account password of the user that already exists in Okta. After login is completed, Apache APISIX will carry the Access-Token and ID-Token to the upstream, and encode the authenticated user information in base64 in the Userinfo request header and pass it to the upstream."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005077846-0f877a03-ddcd-46f6-a38d-f046b4700058.png",alt:"APISIX Page"})),(0,o.kt)("h2",{id:"advanced-upload-your-own-code-snippets-through-the-serverless-plug-in"},"Advanced: upload your own code snippets through the Serverless plug-in"),(0,o.kt)("p",null,"The DIY gameplay provided here makes use of the Serverless plugin, which is feature-rich and has a lot of ways to play. If you have your own use of play, you are also welcome to communicate in the community."),(0,o.kt)("p",null,"The specific operation process is to upload their own code snippets through the Serverless plug-in to Apache APISIX, the process of Serverless plug-in support dynamic configuration and hot updates."),(0,o.kt)("h3",{id:"method-1-custom-judgment-logic"},"Method 1: Custom judgment logic"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005112469-c04868b8-388e-4b81-abcc-d37b6a8951f5.png",alt:"Judgment Logic"})),(0,o.kt)("p",null,"Some judgments are made by request headers, parameters and other related information. By this approach, we can go to implement some of our own rules, such as combining some internal authentication of the enterprise, or go to write some of our own business logic."),(0,o.kt)("h3",{id:"method-2-initiate-authentication-request"},"Method 2: Initiate authentication request"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005141578-f90cf948-4913-45cd-a28e-9e697ad197fe.png",alt:"Authentication Request"})),(0,o.kt)("p",null,"By initiating an HTTP request through the HTTP library, we can use a third-party service to do some authentication and authentication related things and then parse the returned results. In this way, we can do a lot of things that can be extended. For example, interfacing to Redis or a database, as long as it's over TCP or UDP, can be attempted with the Serverless plugin."),(0,o.kt)("h3",{id:"upload-configurations"},"Upload Configurations"),(0,o.kt)("p",null,"After completing the custom code snippet, we create the route and configure the snippet to the Serverless plugin. Later, we will test if the plugin is working by accessing Apache APISIX and getting the appropriate feedback."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005184917-bc620c0b-d4c6-43f5-8450-4f5b2b9549e1.png",alt:"Configure Upload"})))}h.isMDXComponent=!0}}]);