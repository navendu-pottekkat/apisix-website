"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10749],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||l;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94351:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"hmac-auth"},o=void 0,s={unversionedId:"plugins/hmac-auth",id:"plugins/hmac-auth",isDocsHomePage:!1,title:"hmac-auth",description:"\x3c!--",source:"@site/docs/apisix/plugins/hmac-auth.md",sourceDirName:"plugins",slug:"/plugins/hmac-auth",permalink:"/docs/apisix/next/plugins/hmac-auth",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/hmac-auth.md",tags:[],version:"current",frontMatter:{title:"hmac-auth"},sidebar:"docs",previous:{title:"openid-connect",permalink:"/docs/apisix/next/plugins/openid-connect"},next:{title:"authz-casbin",permalink:"/docs/apisix/next/plugins/authz-casbin"}},u=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[{value:"generate signature:",id:"generate-signature",children:[]},{value:"Request body checking",id:"request-body-checking",children:[]},{value:"Use the generated signature to try the request",id:"use-the-generated-signature-to-try-the-request",children:[]}]},{value:"Custom header key",id:"custom-header-key",children:[{value:"Enable request body checking",id:"enable-request-body-checking",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]},{value:"Generate Signature Examples",id:"generate-signature-examples",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#summary"},"Summary")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#name"},"Name")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},"Attributes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable"},"How To Enable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#test-plugin"},"Test Plugin"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#generate-signature"},"generate signature:")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#request-body-checking"},"Request body checking")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#use-the-generated-signature-to-try-the-request"},"Use the generated signature to try the request")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#custom-header-key"},"Custom header key"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enable-request-body-checking"},"Enable request body checking")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-plugin"},"Disable Plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#generate-signature-examples"},"Generate Signature Examples"))),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"hmac-auth")," is an authentication plugin that need to work with ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer"),". Add HMAC Authentication to a ",(0,l.kt)("inlineCode",{parentName:"p"},"service")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"route"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," then adds its key to request header to verify its request."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Different ",(0,l.kt)("inlineCode",{parentName:"td"},"consumer")," objects should have different values, and it should be unique. If different consumers use the same ",(0,l.kt)("inlineCode",{parentName:"td"},"access_key"),", a request matching exception will occur.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Use as a pair with ",(0,l.kt)("inlineCode",{parentName:"td"},"access_key"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"hmac-sha256"'),(0,l.kt)("td",{parentName:"tr",align:null},'["hmac-sha1", "hmac-sha256", "hmac-sha512"]'),(0,l.kt)("td",{parentName:"tr",align:null},"Encryption algorithm.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clock_skew"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The clock skew allowed by the signature in seconds. For example, if the time is allowed to skew by 10 seconds, then it should be set to ",(0,l.kt)("inlineCode",{parentName:"td"},"10"),". especially, ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," means not checking ",(0,l.kt)("inlineCode",{parentName:"td"},"Date"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signed_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Restrict the headers that are added to the encrypted calculation. After the specified, the client request can only specify the headers within this range. When this item is empty, all the headers specified by the client request will be added to the encrypted calculation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keep_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[ true, false ]"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether it is necessary to keep the request headers of ",(0,l.kt)("inlineCode",{parentName:"td"},"X-HMAC-SIGNATURE"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"X-HMAC-ALGORITHM")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"X-HMAC-SIGNED-HEADERS")," in the http request after successful authentication. true: means to keep the http request header, false: means to remove the http request header.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encode_uri_params"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"[ true, false ]"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to encode the uri parameter in the signature, for example: ",(0,l.kt)("inlineCode",{parentName:"td"},"params1=hello%2Cworld")," is encoded, ",(0,l.kt)("inlineCode",{parentName:"td"},"params2=hello,world")," is not encoded. true: means to encode the uri parameter in the signature, false: not to encode the uri parameter in the signature.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"validate_request_body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[ true, false ]"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to check request body.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_req_body"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"512 * 1024"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Max allowed body size.")))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"set a consumer and config the value of the ",(0,l.kt)("inlineCode",{parentName:"li"},"hmac-auth")," option")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "hmac-auth": {\n            "access_key": "user-key",\n            "secret_key": "my-secret-key",\n            "clock_skew": 0,\n            "signed_headers": ["User-Agent", "Accept-Language", "x-custom-a"]\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"The default ",(0,l.kt)("inlineCode",{parentName:"p"},"keep_headers")," is false and ",(0,l.kt)("inlineCode",{parentName:"p"},"encode_uri_params")," is true."),(0,l.kt)("p",null,"You can visit the dashboard to complete the above operations through the web interface, first add a consumer:\n",(0,l.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/plugin/hmac-auth-1.png",alt:"create a consumer"})),(0,l.kt)("p",null,"Then add the hmac-auth plugin to the consumer page:\n",(0,l.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/plugin/hmac-auth-2.png",alt:"enable hmac plugin"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"add a Route or add a Service, and enable the ",(0,l.kt)("inlineCode",{parentName:"li"},"hmac-auth")," plugin")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "hmac-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("h3",{id:"generate-signature"},"generate signature:"),(0,l.kt)("p",null,"The calculation formula of the signature is ",(0,l.kt)("inlineCode",{parentName:"p"},"signature = HMAC-SHAx-HEX(secret_key, signing_string)"),". From the formula, it can be seen that in order to obtain the signature, two parameters, ",(0,l.kt)("inlineCode",{parentName:"p"},"SECRET_KEY")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"signing_STRING"),", are required. Where secret_key is configured by the corresponding consumer, the calculation formula of ",(0,l.kt)("inlineCode",{parentName:"p"},"signing_string")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"signing_string = HTTP Method + \\n + HTTP URI + \\n + canonical_query_string + \\n + access_key + \\n + Date + \\n + signed_headers_string"),". If one of the items in signing_string does not exist, you also need to use an empty string instead."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"HTTP Method")," : Refers to the GET, PUT, POST and other request methods defined in the HTTP protocol, and must be in all uppercase."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"HTTP URI")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"HTTP URI"),' requirements must start with "/", those that do not start with "/" need to be added, and the empty path is "/".'),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Date")," : Date in http header(GMT format)."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"canonical_query_string")," :",(0,l.kt)("inlineCode",{parentName:"li"},"canonical_query_string")," is the result of encoding the ",(0,l.kt)("inlineCode",{parentName:"li"},"query")," in the URL (",(0,l.kt)("inlineCode",{parentName:"li"},"query"),' is the string "key1 = valve1 & key2 = valve2" after the "?" in the URL).'),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"signed_headers_string")," :",(0,l.kt)("inlineCode",{parentName:"li"},"signed_headers_string")," is the result of obtaining the fields specified by the client from the request header and concatenating the strings in order.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The coding steps of canonical_query_string are as follows:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Extract the ",(0,l.kt)("inlineCode",{parentName:"li"},"query"),' item in the URL, that is, the string "key1 = valve1 & key2 = valve2" after the "?" in the URL.'),(0,l.kt)("li",{parentName:"ul"},"Split the ",(0,l.kt)("inlineCode",{parentName:"li"},"query")," into several items according to the & separator, each item is in the form of key=value or only key."),(0,l.kt)("li",{parentName:"ul"},"According to whether the uri parameter is encoded, there are two situations:"),(0,l.kt)("li",{parentName:"ul"},"When ",(0,l.kt)("inlineCode",{parentName:"li"},"encode_uri_params")," is true:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Encoding each item after disassembly is divided into the following two situations."),(0,l.kt)("li",{parentName:"ul"},'When the item has only key, the conversion formula is uri_encode(key) + "=".'),(0,l.kt)("li",{parentName:"ul"},'When the item is in the form of key=value, the conversion formula is in the form of uri_encode(key) + "=" + uri_encode(value). Here value can be an empty string.'),(0,l.kt)("li",{parentName:"ul"},"After converting each item, sort by key in lexicographic order (ASCII code from small to large), and connect them with the & symbol to generate the corresponding canonical_query_string."))),(0,l.kt)("li",{parentName:"ul"},"When ",(0,l.kt)("inlineCode",{parentName:"li"},"encode_uri_params")," is false:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Encoding each item after disassembly is divided into the following two situations."),(0,l.kt)("li",{parentName:"ul"},'When the item has only key, the conversion formula is key + "=".'),(0,l.kt)("li",{parentName:"ul"},'When the item is in the form of key=value, the conversion formula is in the form of key + "=" + value. Here value can be an empty string.'),(0,l.kt)("li",{parentName:"ul"},"After converting each item, sort by key in lexicographic order (ASCII code from small to large), and connect them with the & symbol to generate the corresponding canonical_query_string.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The signed_headers_string generation steps are as follows:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Obtain the headers specified to be added to the calculation from the request header. For details, please refer to the placement of ",(0,l.kt)("inlineCode",{parentName:"li"},"SIGNED_HEADERS")," in the next section ",(0,l.kt)("inlineCode",{parentName:"li"},"Use the generated signature to make a request attempt"),"."),(0,l.kt)("li",{parentName:"ul"},"Take out the headers specified by ",(0,l.kt)("inlineCode",{parentName:"li"},"SIGNED_HEADERS")," in order from the request header, and splice them together in order of ",(0,l.kt)("inlineCode",{parentName:"li"},"name:value"),". After splicing, a ",(0,l.kt)("inlineCode",{parentName:"li"},"signed_headers_string")," is generated.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},'HeaderKey1 + ":" + HeaderValue1 + "\\n"\\+\nHeaderKey2 + ":" + HeaderValue2 + "\\n"\\+\n...\nHeaderKeyN + ":" + HeaderValueN + "\\n"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature string splicing example")),(0,l.kt)("p",null,"Take the following request as an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i http://127.0.0.1:9080/index.html?name=james&age=36 \\\n-H "X-HMAC-SIGNED-HEADERS: User-Agent;x-custom-a" \\\n-H "x-custom-a: test" \\\n-H "User-Agent: curl/7.29.0"\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"signing_string")," generated according to the ",(0,l.kt)("inlineCode",{parentName:"p"},"signature generation formula")," is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},'"GET\n/index.html\nage=36&name=james\nuser-key\nTue, 19 Jan 2021 11:33:20 GMT\nUser-Agent:curl/7.29.0\nx-custom-a:test\n"\n')),(0,l.kt)("p",null,"Note: The last request header also needs + ",(0,l.kt)("inlineCode",{parentName:"p"},"\\n"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Generate Signature")),(0,l.kt)("p",null,"Use Python to generate the signature ",(0,l.kt)("inlineCode",{parentName:"p"},"SIGNATURE"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import base64\nimport hashlib\nimport hmac\n\nsecret = bytes('my-secret-key', 'utf-8')\nmessage = bytes(\"\"\"GET\n/index.html\nage=36&name=james\nuser-key\nTue, 19 Jan 2021 11:33:20 GMT\nUser-Agent:curl/7.29.0\nx-custom-a:test\n\"\"\", 'utf-8')\n\nhash = hmac.new(secret, message, hashlib.sha256)\n\n# to lowercase base64\nprint(base64.b64encode(hash.digest()))\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Hash"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SIGNATURE"),(0,l.kt)("td",{parentName:"tr",align:null},"8XV1GB7Tq23OJcoz6wjqTs4ZLxr9DiLoY4PxzScWGYg=")))),(0,l.kt)("h3",{id:"request-body-checking"},"Request body checking"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"validate_request_body")," is assigned to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the plugin will check the request body. The plugin will calculate the hmac-sha value of the request body\uff0cand check against the ",(0,l.kt)("inlineCode",{parentName:"p"},"X-HMAC-DIGEST")," header."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"X-HMAC-DIGEST: base64(hmac-sha(<body>))\n")),(0,l.kt)("p",null,"When there is no request body, you can set ",(0,l.kt)("inlineCode",{parentName:"p"},"X-HMAC-DIGEST")," value to the hmac-sha of empty string."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," The plugin will load the request body to memory to calculate the digest of the request body, which might cause high memory consumption with large bodies. You can limit the max allowed body size by the configuration of ",(0,l.kt)("inlineCode",{parentName:"p"},"max_req_body"),"(default=512KB), request body larger than that will be rejected."),(0,l.kt)("h3",{id:"use-the-generated-signature-to-try-the-request"},"Use the generated signature to try the request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i "http://127.0.0.1:9080/index.html?name=james&age=36" \\\n-H "X-HMAC-SIGNATURE: 8XV1GB7Tq23OJcoz6wjqTs4ZLxr9DiLoY4PxzScWGYg=" \\\n-H "X-HMAC-ALGORITHM: hmac-sha256" \\\n-H "X-HMAC-ACCESS-KEY: user-key" \\\n-H "Date: Tue, 19 Jan 2021 11:33:20 GMT" \\\n-H "X-HMAC-SIGNED-HEADERS: User-Agent;x-custom-a" \\\n-H "x-custom-a: test" \\\n-H "User-Agent: curl/7.29.0"\n\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Tue, 19 Jan 2021 11:33:20 GMT\nServer: APISIX/2.2\n......\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Below are two assembly forms of signature information")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The signature information is put together in the request header ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorization")," field:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -H 'Authorization: hmac-auth-v1# + ACCESS_KEY + # + base64_encode(SIGNATURE) + # + ALGORITHM + # + DATE + # + SIGNED_HEADERS' -i\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang=\"cn\">\n...\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The signature information is separately placed in the request header:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -H 'X-HMAC-SIGNATURE: base64_encode(SIGNATURE)' -H 'X-HMAC-ALGORITHM: ALGORITHM' -H 'Date: DATE' -H 'X-HMAC-ACCESS-KEY: ACCESS_KEY' -H 'X-HMAC-SIGNED-HEADERS: SIGNED_HEADERS' -i\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang=\"cn\">\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"ACCESS_KEY, SIGNATURE, ALGORITHM, DATE, SIGNED_HEADERS respectively represent the corresponding variables")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},'SIGNED_HEADERS is the headers specified by the client to join the encryption calculation. If there are multiple headers, they must be separated by ";": ',(0,l.kt)("inlineCode",{parentName:"strong"},"x-custom-header-a;x-custom-header-b"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"SIGNATURE needs to use base64 for encryption: ",(0,l.kt)("inlineCode",{parentName:"strong"},"base64_encode(SIGNATURE)")))),(0,l.kt)("h2",{id:"custom-header-key"},"Custom header key"),(0,l.kt)("p",null,"We can customize header key for auth parameters by adding the attribute configuration of the plugin under ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_attr")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf / config.yaml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  hmac-auth:\n    signature_key: X-APISIX-HMAC-SIGNATURE\n    algorithm_key: X-APISIX-HMAC-ALGORITHM\n    date_key: X-APISIX-DATE\n    access_key: X-APISIX-HMAC-ACCESS-KEY\n    signed_headers_key: X-APISIX-HMAC-SIGNED-HEADERS\n    body_digest_key: X-APISIX-HMAC-BODY-DIGEST\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"After customizing the header, request example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -H 'X-APISIX-HMAC-SIGNATURE: base64_encode(SIGNATURE)' -H 'X-APISIX-HMAC-ALGORITHM: ALGORITHM' -H 'X-APISIX-DATE: DATE' -H 'X-APISIX-HMAC-ACCESS-KEY: ACCESS_KEY' -H 'X-APISIX-HMAC-SIGNED-HEADERS: SIGNED_HEADERS' -H 'X-APISIX-HMAC-BODY-DIGEST: BODY_DIGEST' -i\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang=\"cn\">\n")),(0,l.kt)("h3",{id:"enable-request-body-checking"},"Enable request body checking"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -X \"POST\" \"http://localhost:9080/index.html?age=36&name=james\" \\\n     -H 'X-HMAC-ACCESS-KEY: my-access-key' \\\n     -H 'X-HMAC-SIGNATURE: lSWO4vcyVoZG5bn8miHudzABAeJQd8tqEHyM7RsjeiU=' \\\n     -H 'X-HMAC-ALGORITHM: hmac-sha256' \\\n     -H 'Date: Tue, 24 Aug 2021 03:19:21 GMT' \\\n     -H 'X-HMAC-SIGNED-HEADERS: User-Agent;X-HMAC-DIGEST' \\\n     -H 'User-Agent: curl/7.29.0' \\\n     -H 'X-HMAC-DIGEST: L9b/+QMvhvnoUlSw5vq+kHPqnZiHGl61T8oavMVTaC4=' \\\n     -H 'Content-Type: text/plain; charset=utf-8' \\\n     -d \"{\\\"hello\\\":\\\"world\\\"}\"\n\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Tue, 14 Sep 2021 03:28:14 GMT\nServer: APISIX/2.9\n...\n")),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"When you want to disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"hmac-auth")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"generate-signature-examples"},"Generate Signature Examples"),(0,l.kt)("p",null,"Take HMAC SHA256 as an example to introduce the signature generation examples in different languages.\nNeed to pay attention to the handling of newline characters in signature strings in various languages, which can easily lead to the problem of ",(0,l.kt)("inlineCode",{parentName:"p"},'{"message":"Invalid signature"}'),"."),(0,l.kt)("p",null,"Example inputs:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"the shared secret key here")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"this is signature string")))),(0,l.kt)("p",null,"Example outputs:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Hash"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hexit"),(0,l.kt)("td",{parentName:"tr",align:null},"ad1b76c7e5054009380edca35d3f36cc5b6f45c82ee02ea3af64197ebddb9345")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null},"rRt2x+UFQAk4DtyjXT82zFtvRcgu4C6jr2QZfr3bk0U=")))),(0,l.kt)("p",null,"Please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/next/examples/plugins-hmac-auth-generate-signature"},(0,l.kt)("strong",{parentName:"a"},"HMAC Generate Signature Examples"))))}m.isMDXComponent=!0}}]);