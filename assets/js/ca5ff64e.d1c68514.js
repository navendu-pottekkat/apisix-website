"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69075],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||s;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},76891:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),a={title:"Proxy the httpbin service with Ingress"},o=void 0,c={unversionedId:"practices/proxy-the-httpbin-service-with-ingress",id:"practices/proxy-the-httpbin-service-with-ingress",isDocsHomePage:!1,title:"Proxy the httpbin service with Ingress",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/practices/proxy-the-httpbin-service-with-ingress.md",sourceDirName:"practices",slug:"/practices/proxy-the-httpbin-service-with-ingress",permalink:"/docs/ingress-controller/practices/proxy-the-httpbin-service-with-ingress",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/practices/proxy-the-httpbin-service-with-ingress.md",tags:[],version:"current",frontMatter:{title:"Proxy the httpbin service with Ingress"},sidebar:"docs",previous:{title:"APISIX Ingress Controller the Hard Way",permalink:"/docs/ingress-controller/practices/the-hard-way"},next:{title:"Proxy the httpbin service",permalink:"/docs/ingress-controller/practices/proxy-the-httpbin-service"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy httpbin service",id:"deploy-httpbin-service",children:[]},{value:"Resource Delivery",id:"resource-delivery",children:[]},{value:"Test",id:"test",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document explains how apisix-ingress-controller guides Apache APISIX routes traffic to httpbin service correctly by the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Kubernetes Ingress"),"."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation, we recommend you to use ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/minikube"},"Minikube"),"."),(0,s.kt)("li",{parentName:"ul"},"Install Apache APISIX in Kubernetes by ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Helm Chart"),"."),(0,s.kt)("li",{parentName:"ul"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/blob/master/install.md"},"apisix-ingress-controller"),".")),(0,s.kt)("h2",{id:"deploy-httpbin-service"},"Deploy httpbin service"),(0,s.kt)("p",null,"We use ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kennethreitz/httpbin/"},"kennethreitz/httpbin")," as the service image, See its overview page for details."),(0,s.kt)("p",null,"Now, try to deploy it to your Kubernetes cluster:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run httpbin --image kennethreitz/httpbin --port 80\nkubectl expose pod httpbin --port 80\n")),(0,s.kt)("h2",{id:"resource-delivery"},"Resource Delivery"),(0,s.kt)("p",null,"Here we create an Ingress resource."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# httpbin-ingress.yaml\n# Note use apiVersion is networking.k8s.io/v1, so please make sure your\n# Kubernetes cluster version is v1.19.0 or higher.\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: httpserver-ingress\nspec:\n  # apisix-ingress-controller is only interested in Ingress\n  # resources with the matched ingressClass name, in our case,\n  # it's apisix.\n  ingressClassName: apisix\n  rules:\n  - host: local.httpbin.org\n    http:\n      paths:\n      - backend:\n          service:\n            name: httpbin\n            port:\n              number: 80\n        path: /\n        pathType: Prefix\n\n# Use ingress.networking.k8s.io/v1beta1 if your Kubernetes cluster\n# version is older than v1.19.0.\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  name: httpserver-ingress\n  # Note for ingress.networking.k8s.io/v1beta1,\n  # you have to carry annotation kubernetes.io/ingress.class,\n  # and its value must be matched with the one configured in\n  # apisix-ingress-controller, in our case, it's apisix.\n  annotations:\n    kubernetes.io/ingress.class: apisix\nspec:\n  rules:\n    - host: local.httpbin.org\n      http:\n        paths:\n          - backend:\n              serviceName: httpbin\n              servicePort: 80\n            path: /\n            pathType: Prefix\n")),(0,s.kt)("p",null,"The YAML snippet shows a simple Ingress configuration, which tells Apache APISIX to route all requests with Host ",(0,s.kt)("inlineCode",{parentName:"p"},"local.httpbin.org")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"httpbin")," service.\nNow try to create it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f httpbin-ingress.yaml\n")),(0,s.kt)("h2",{id:"test"},"Test"),(0,s.kt)("p",null,"Run curl call in one of Apache APISIX Pods to check whether the resource was delivered to it. Note you should replace the value of ",(0,s.kt)("inlineCode",{parentName:"p"},"--default-apisix-cluster-admin-key")," to the real ",(0,s.kt)("inlineCode",{parentName:"p"},"admin_key")," value in your Apache APISIX cluster."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -it -n ${namespace of Apache APISIX} ${Pod name of Apache APISIX} -- curl http://127.0.0.1:9180/apisix/admin/routes -H 'X-API-Key: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,s.kt)("p",null,"And request to Apache APISIX to verify the route."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -it -n ${namespace of Apache APISIX} ${Pod name of Apache APISIX} -- curl http://127.0.0.1:9080/headers -H 'Host: local.httpbin.org'\n")),(0,s.kt)("p",null,"In case of success, you'll see a JSON string which contains all requests headers carried by ",(0,s.kt)("inlineCode",{parentName:"p"},"curl")," like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.64.1",\n    "X-Amzn-Trace-Id": "Root=1-5ffc3273-2928e0844e19c9810d1bbd8a"\n  }\n}\n')))}u.isMDXComponent=!0}}]);