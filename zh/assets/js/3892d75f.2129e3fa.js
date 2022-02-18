"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16958],{17740:function(n,e,o){o.r(e),o.d(e,{default:function(){return r}});var t=o(67294),i=o(2212),a=o(66358),s=o(69365),r=function(){var n,e,o,r,c,u,v=(0,t.useRef)(0),x=(0,t.useRef)(0),l=!1,f=!1;return(0,t.useEffect)((function(){o=window.innerWidth,r=window.innerHeight;var t,x,m,y,d,p,h={x:.5,y:.5},w={x:.5,y:.5};window.addEventListener("resize",g,!1),o>1100?(n=r,e=o/2):(n=r/2,e=o),v.current.width=e,v.current.height=n,v.current.addEventListener("mousemove",(function(o){var t={x:o.clientX,y:o.clientY},i=v.current.getBoundingClientRect().x,s=v.current.getBoundingClientRect().y;t.x=(t.x-i)/e,t.y=(t.y-s)/n,a.ZP.to(h,2,{x:t.x*(e/n)-e/n/2,y:1-t.y-.5,onUpdate:function(){d.uniforms.u_mouse.value.x=h.x,d.uniforms.u_mouse.value.y=h.y}}),a.ZP.to(w,2,{x:t.x,y:1-t.y,onUpdate:function(){d.uniforms.u_fragMouse.value.x=w.x,d.uniforms.u_fragMouse.value.y=w.y}})}));var z=new IntersectionObserver((function(n,e){n.forEach((function(n){n.isIntersecting&&l?l&&!f?_():console.log("Loading"):u&&(cancelAnimationFrame(u),f=!1)}))}),{root:null,threshold:.01});function g(t){r=window.innerHeight,(o=window.innerWidth)>1100?(n=r,e=o/2):(n=r/2,e=o),y.setSize(e,n),d.uniforms.u_resolution.value.x=y.domElement.width,d.uniforms.u_resolution.value.y=y.domElement.height}function _(){u=requestAnimationFrame(_),d.uniforms.u_time.value+=.05,c.update(),y.render(m,t),f=!0}return function(o,a){var r=v.current;(y=new i.CP7({canvas:r})).autoClearColor=!1,t=new i.cPb(45,o/a,.1,100),(c=new s.z(t,y.domElement)).enableZoom=!1,c.enablePan=!1,c.enabled=!1;for(var u=(p=new i.BKK(o/a,1,250,250)).attributes.position.count,f=new i.TlE(new Float32Array(u),1),h=0;h<f.count;h++)f.array[h]=(w=0)+(1-w)*Math.random();var w;p.setAttribute("aSize",f,1),p.scale(2,1,1),m=new i.xsS,y.setSize(e,n);var z={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new i.FM8},u_mouse:{type:"v2",value:new i.FM8(.5,.5)},u_fragMouse:{type:"v2",value:new i.FM8(.5,.5)}};m.background=new i.Ilk("red"),t.position.z=5,c.update(),d=new i.jyz({uniforms:z,vertexShader:"precision mediump float;\n\nattribute float aSize;\n\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_scale;\nuniform vec2 u_mouse;\nuniform float u_zpos;\n\nvarying vec2 vUv;\nvarying float transfer;\nvarying float value;\n\nmat4 rotationMatrix(vec3 axis, float angle) {\n  axis = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float oc = 1.0 - c;\n\n  return mat4(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s, 0.0,\n    oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0,\n    oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c, 0.0,\n    0.0, 0.0, 0.0, 1.0);\n}\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n  mat4 m = rotationMatrix(axis, angle);\n  return (m * vec4(v, 1.0)).xyz;\n}\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n  return mod289(((x * 34.0) + 1.0) * x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v) {\n  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);\n  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  vec3 i = floor(v + dot(v, C.yyy));\n  vec3 x0 = v - i + dot(i, C.xxx);\n\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min(g.xyz, l.zxy);\n  vec3 i2 = max(g.xyz, l.zxy);\n\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy;\n  vec3 x3 = x0 - D.yyy;\n\n    // Permutations\n  i = mod289(i);\n  vec4 p = permute(permute(permute(\n          i.z + vec4(0.0, i1.z, i2.z, 1.0)) +\n        i.y + vec4(0.0, i1.y, i2.y, 1.0)) +\n      i.x + vec4(0.0, i1.x, i2.x, 1.0));\n\n  float n_ = 0.142857142857;\n  vec3 ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_);\n\n  vec4 x = x_ * ns.x + ns.yyyy;\n  vec4 y = y_ * ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4(x.xy, y.xy);\n  vec4 b1 = vec4(x.zw, y.zw);\n\n  vec4 s0 = floor(b0) * 2.0 + 1.0;\n  vec4 s1 = floor(b1) * 2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;\n\n  vec3 p0 = vec3(a0.xy, h.x);\n  vec3 p1 = vec3(a0.zw, h.y);\n  vec3 p2 = vec3(a1.xy, h.z);\n  vec3 p3 = vec3(a1.zw, h.w);\n\n  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n}\n\nhighp float rand(vec2 co) {\n  highp float a = 12.9898;\n  highp float b = 78.233;\n  highp float c = 43758.5453;\n  highp float dt = dot(co.xy, vec2(a, b));\n  highp float sn = mod(dt, 3.14);\n  return fract(sin(sn) * c);\n}\n\nfloat noise(float v, vec2 _st) {\n  float f = rand(vec2(fract(v)));\n  return mix(rand(vec2(v) + 0.2), rand(vec2(v)), smoothstep(0.1, 1.0, f));\n}\n\nconst float amplitude = 0.125;\nconst float frequency = .1;\nconst float PI = 3.14159;\nfloat Gaussian_h = 0.1;\nfloat Gaussian_sd = 0.09;\nfloat radius = 1.5;\n\nvoid main() {\n  vUv = uv;\n  vec3 pos = vec3(position);\n  value = aSize;\n  vec4 ecPosition = modelViewMatrix * vec4( pos, 1.0 );\n  float magnitude = distance(pos, vec3(0.0));\n\n  float noiseFreq = 5.5;\n  float noiseAmp = 1.55;\n  vec3 noisePos = vec3(pos.x * noiseFreq + u_time, pos.y, pos.z);\n\n  if(distance(u_mouse,pos.xy)<=0.9) \n  {\n    float vertexDistance = distance(u_mouse, pos.xy);\n    float height = ((Gaussian_h+0.05)* exp(-(0.5*pow((vertexDistance)/Gaussian_sd, 2.0))));\n    pos.z += sin((height));\n  }\n\n  float vertexDistance = distance(u_mouse, pos.xy);\n\n  pos.z += snoise(noisePos*0.6)*0.1;\n  pos.y += snoise(noisePos*0.3)*0.1;\n  pos.x += snoise(noisePos*0.2)*0.1;\n  transfer = snoise(noisePos*0.4);\n\n  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos.xyz, 1.0);\n  gl_PointSize = aSize*(1.0/-ecPosition.z);\n}\n",fragmentShader:"precision mediump float;\n\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform vec2 u_mouse;\nuniform vec2 u_fragMouse;\n\nvarying vec2 vUv;\nvarying float transfer;\nvarying float value;\n  \nvoid main() {\n  vec2 st = gl_FragCoord.xy / u_resolution;\n  vec2 mouse = u_fragMouse;\n\n  st.x *= (u_resolution.x / u_resolution.y);\n  mouse.x *= (u_resolution.x / u_resolution.y); \n\n  gl_FragColor = vec4(vec3(1.0, 0.0, transfer), 1.0);\n}\n",wireframe:!0,side:i.ehD}),x=new i.woe(p,d);var _=new i.BKK(o/a,1,200,200),b=new i.vBJ({color:1184274,wireframe:!1}),P=new i.Kj0(_,b);_.scale(50,50,1),P.position.set(10,10,-10),P.rotation.set(Math.PI/2,0,0),m.add(x),m.add(P),t.position.set(.16430412417444037,-1.5202138879420155,.20892968987792318),c.update(),y.setPixelRatio(window.devicePixelRatio),g(),l=!0}(e,n),z.observe(v.current),function(){m.remove.apply(m,m.children),z.disconnect()}}),[]),(0,t.useEffect)((function(){a.ZP.to(x.current,{height:0,delay:window.innerWidth>=768?0:.3,duration:2.1,ease:"Expo.easeInOut"})}),[]),t.createElement("div",{className:"hero-infograph",style:{position:"relative"}},t.createElement("canvas",{ref:v,className:"homeCanvas"}),t.createElement("div",{ref:x,className:"homeCanvas-overlay"}))}}}]);