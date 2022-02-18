"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57507],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(o,".").concat(h)]||d[h]||s[h]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65322:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return o},assets:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i={title:"Apache APISIX \u5b58\u5728\u6539\u5199 X-REAL-IP header \u7684\u98ce\u9669\u516c\u544a\uff08CVE-2022-24112\uff09",keywords:["\u98ce\u9669\u516c\u544a","Header","IP \u9650\u5236","\u957f\u4ead\u79d1\u6280"],description:"\u5728 Apache APISIX 2.12.1 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u542f\u7528 Apache APISIX `batch-requests` \u63d2\u4ef6\u4e4b\u540e\u4f1a\u5b58\u5728\u6539\u5199 X-REAL-IP header \u98ce\u9669\uff0c\u73b0\u5c06\u5904\u7406\u4fe1\u606f\u8fdb\u884c\u76f8\u5173\u516c\u544a\u3002",tags:["Security"]},c=void 0,o={permalink:"/zh/blog/2022/02/11/cve-2022-24112",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/02/11/cve-2022-24112.md",title:"Apache APISIX \u5b58\u5728\u6539\u5199 X-REAL-IP header \u7684\u98ce\u9669\u516c\u544a\uff08CVE-2022-24112\uff09",description:"\u5728 Apache APISIX 2.12.1 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u542f\u7528 Apache APISIX `batch-requests` \u63d2\u4ef6\u4e4b\u540e\u4f1a\u5b58\u5728\u6539\u5199 X-REAL-IP header \u98ce\u9669\uff0c\u73b0\u5c06\u5904\u7406\u4fe1\u606f\u8fdb\u884c\u76f8\u5173\u516c\u544a\u3002",date:"2022-02-11T00:00:00.000Z",formattedDate:"2022\u5e742\u670811\u65e5",tags:[{label:"Security",permalink:"/zh/blog/tags/security"}],readingTime:.64,truncated:!0,authors:[],prevItem:{title:"\u540e\u7aef\u65b0\u624b\u5982\u4f55\u4ece 0 \u5230 1 \u6253\u9020\u4e00\u6b3e Apache APISIX \u63d2\u4ef6",permalink:"/zh/blog/2022/02/16/file-logger"},nextItem:{title:"\u751f\u6001\u6269\u5927\u8fdb\u884c\u4e2d\uff01Apache APISIX \u96c6\u6210 Splunk HTTP Event Collector",permalink:"/zh/blog/2022/02/10/apisix-splunk-integration"}},p={authorsImageUrls:[]},u=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",children:[]},{value:"\u5f71\u54cd\u7248\u672c",id:"\u5f71\u54cd\u7248\u672c",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]},{value:"\u6f0f\u6d1e\u8be6\u60c5",id:"\u6f0f\u6d1e\u8be6\u60c5",children:[]},{value:"\u8d21\u732e\u8005\u7b80\u4ecb",id:"\u8d21\u732e\u8005\u7b80\u4ecb",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728 Apache APISIX 2.12.1 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u542f\u7528 Apache APISIX ",(0,l.kt)("inlineCode",{parentName:"p"},"batch-requests")," \u63d2\u4ef6\u4e4b\u540e\u4f1a\u5b58\u5728\u6539\u5199 X-REAL-IP header \u98ce\u9669\uff0c\u73b0\u5c06\u5904\u7406\u4fe1\u606f\u8fdb\u884c\u76f8\u5173\u516c\u544a\u3002")),(0,l.kt)("h2",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,l.kt)("p",null,"\u5728 Apache APISIX 2.12.1 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff08\u4e0d\u5305\u542b 2.12.1 \u548c 2.10.4\uff09\uff0c\u542f\u7528 Apache APISIX ",(0,l.kt)("inlineCode",{parentName:"p"},"batch-requests")," \u63d2\u4ef6\u4e4b\u540e\uff0c\u4f1a\u5b58\u5728\u6539\u5199 X-REAL-IP header \u98ce\u9669\u3002"),(0,l.kt)("p",null,"\u8be5\u98ce\u9669\u4f1a\u5bfc\u81f4\u4ee5\u4e0b\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u653b\u51fb\u8005\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"batch-requests")," \u63d2\u4ef6\u7ed5\u8fc7 Apache APISIX \u6570\u636e\u9762\u7684 IP \u9650\u5236\u3002\u5982\u7ed5\u8fc7 IP \u9ed1\u767d\u540d\u5355\u9650\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u7528\u6237\u4f7f\u7528 Apache APISIX \u9ed8\u8ba4\u914d\u7f6e\uff08\u542f\u7528 Admin API \uff0c\u4f7f\u7528\u9ed8\u8ba4 Admin Key \u4e14\u6ca1\u6709\u989d\u5916\u5206\u914d\u7ba1\u7406\u7aef\u53e3\uff09\uff0c\u653b\u51fb\u8005\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"batch-requests")," \u63d2\u4ef6\u8c03\u7528 Admin API \u3002")),(0,l.kt)("h2",{id:"\u5f71\u54cd\u7248\u672c"},"\u5f71\u54cd\u7248\u672c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Apache APISIX 1.3 ~ 2.12.1  \u4e4b\u95f4\u7684\u6240\u6709\u7248\u672c\uff08\u4e0d\u5305\u542b 2.12.1 \uff09"),(0,l.kt)("li",{parentName:"ul"},"Apache APISIX 2.10.0 ~ 2.10.4 LTS \u4e4b\u95f4\u7684\u6240\u6709\u7248\u672c \uff08\u4e0d\u5305\u542b 2.10.4\uff09")),(0,l.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8be5\u95ee\u9898\u76ee\u524d\u5df2\u5728 2.12.1 \u548c 2.10.4 \u7248\u672c\u4e2d\u5f97\u5230\u89e3\u51b3\uff0c\u8bf7\u5c3d\u5feb\u66f4\u65b0\u81f3\u76f8\u5173\u7248\u672c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u53d7\u5f71\u54cd\u7684 Apache APISIX \u7248\u672c\u4e2d\uff0c\u53ef\u4ee5\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"conf/config.yaml")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"conf/config-default.yaml")," \u6587\u4ef6\u663e\u5f0f\u6ce8\u91ca\u6389 ",(0,l.kt)("inlineCode",{parentName:"li"},"batch-requests"),"\uff0c\u5e76\u4e14\u91cd\u542f Apache APISIX \u5373\u53ef\u89c4\u907f\u6b64\u6b21\u98ce\u9669\u3002")),(0,l.kt)("h2",{id:"\u6f0f\u6d1e\u8be6\u60c5"},"\u6f0f\u6d1e\u8be6\u60c5"),(0,l.kt)("p",null,"\u6f0f\u6d1e\u4f18\u5148\u7ea7\uff1a\u9ad8"),(0,l.kt)("p",null,"\u6f0f\u6d1e\u516c\u5f00\u65f6\u95f4\uff1a2022 \u5e74 2 \u6708 11 \u65e5"),(0,l.kt)("p",null,"CVE \u8be6\u7ec6\u4fe1\u606f\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://nvd.nist.gov/vuln/detail/CVE-2022-24112"},"https://nvd.nist.gov/vuln/detail/CVE-2022-24112")),(0,l.kt)("h2",{id:"\u8d21\u732e\u8005\u7b80\u4ecb"},"\u8d21\u732e\u8005\u7b80\u4ecb"),(0,l.kt)("p",null,"\u8be5\u6f0f\u6d1e\u7531\u957f\u4ead\u79d1\u6280\u5728 Real World CTF \u4e2d\u53d1\u73b0\uff0c\u5e76\u7531 Sauercloud \u4e0a\u62a5\u7ed9 Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u3002\u611f\u8c22\u5404\u4f4d\u5bf9 Apache APISIX \u793e\u533a\u7684\u8d21\u732e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1644480307386-91e48731-b872-480f-8a24-0de7e43d00a9.png",alt:"\u957f\u4ead\u79d1\u6280"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1644632196291-6b9bca14-7893-47c7-9f93-99c28ff54044.png",alt:"Sauercloud"})))}d.isMDXComponent=!0}}]);