"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33222],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,b=m["".concat(c,".").concat(f)]||m[f]||s[f]||u;return r?n.createElement(b,a(a({ref:t},l),{},{components:r})):n.createElement(b,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,a=new Array(u);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<u;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53909:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(87462),o=r(63366),u=(r(67294),r(3905)),a={title:"\u5982\u4f55\u5728 ARM Ubuntu \u4e2d\u6784\u5efa Apache APISIX",authors:[{name:"\u90ed\u5947",title:"Author",url:"https://github.com/guoqqqi",image_url:"https://avatars.githubusercontent.com/u/72343596?v=4"}],keywords:["Apache APISIX","arm","ubuntu","Apple Macbook Pro M1"],description:"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u5c06\u4e86\u89e3\u5982\u4f55\u5728 ARM Ubuntu \u4e2d\u901a\u8fc7\u6e90\u7801\u6784\u5efa Apache APISIX\uff08M1 \u82af\u7247\u73af\u5883\uff09\u3002",tags:["Technology"]},i=void 0,c={permalink:"/zh/blog/2022/01/11/building-apisix-in-ubuntu-for-arm",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/01/11/building-apisix-in-ubuntu-for-arm.md",title:"\u5982\u4f55\u5728 ARM Ubuntu \u4e2d\u6784\u5efa Apache APISIX",description:"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u5c06\u4e86\u89e3\u5982\u4f55\u5728 ARM Ubuntu \u4e2d\u901a\u8fc7\u6e90\u7801\u6784\u5efa Apache APISIX\uff08M1 \u82af\u7247\u73af\u5883\uff09\u3002",date:"2022-01-11T00:00:00.000Z",formattedDate:"2022\u5e741\u670811\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:1.925,truncated:!0,authors:[{name:"\u90ed\u5947",title:"Author",url:"https://github.com/guoqqqi",image_url:"https://avatars.githubusercontent.com/u/72343596?v=4",imageURL:"https://avatars.githubusercontent.com/u/72343596?v=4"}],prevItem:{title:"\u76f4\u64ad\u9884\u544a | \u4ece\u7f51\u5173\u5230\u6570\u636e\uff0c\u5206\u5e03\u5f0f\u5168\u94fe\u8def\u5728\u7ebf\u5e94\u7528\u5b9e\u8df5",permalink:"/zh/blog/2022/01/11/apisix-with-shardingsphere-meetup"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff5c12.16-12.31 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/zh/blog/2022/01/05/weekly-report-1231"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,u.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u5c06\u4e86\u89e3\u5982\u4f55\u5728 ARM Ubuntu \u4e2d\u901a\u8fc7\u6e90\u7801\u6784\u5efa Apache APISIX\uff08M1 \u82af\u7247\u73af\u5883\uff09\u3002ARM Ubuntu \u7cfb\u7edf\u501f\u52a9\u4e86 ",(0,u.kt)("a",{parentName:"p",href:"https://multipass.run/"},"https://multipass.run/")," \u5b89\u88c5\u3002")))}m.isMDXComponent=!0}}]);