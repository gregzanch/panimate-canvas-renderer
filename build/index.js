module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var CanvasKitInit = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(CanvasKitInit) {
  CanvasKitInit = CanvasKitInit || {};


null;var f;f||(f=typeof CanvasKitInit !== 'undefined' ? CanvasKitInit : {});var ca,ea;f.ready=new Promise(function(a,b){ca=a;ea=b});
(function(a){a.Xf=a.Xf||[];a.Xf.push(function(){a.MakeSWCanvasSurface=function(b){var c=b;if("CANVAS"!==c.tagName&&(c=document.getElementById(b),!c))throw"Canvas with id "+b+" was not found";if(b=a.MakeSurface(c.width,c.height))b.Tf=c;return b};a.MakeCanvasSurface||(a.MakeCanvasSurface=a.MakeSWCanvasSurface);a.MakeSurface=function(b,c){var d={width:b,height:c,colorType:a.ColorType.RGBA_8888,alphaType:a.AlphaType.Unpremul,colorSpace:a.ColorSpace.SRGB},h=b*c*4,m=a._malloc(h);if(d=this._getRasterDirectSurface(d,
m,4*b))d.Tf=null,d.Oh=b,d.Kh=c,d.Nh=h,d.mh=m,d.getCanvas().clear(a.TRANSPARENT);return d};a.Surface.prototype.flush=function(b){this._flush();if(this.Tf){var c=new Uint8ClampedArray(a.HEAPU8.buffer,this.mh,this.Nh);c=new ImageData(c,this.Oh,this.Kh);b?this.Tf.getContext("2d").putImageData(c,0,0,b[0],b[1],b[2]-b[0],b[3]-b[1]):this.Tf.getContext("2d").putImageData(c,0,0)}};a.Surface.prototype.dispose=function(){this.mh&&a._free(this.mh);this.delete()};a.currentContext=a.currentContext||function(){};
a.setCurrentContext=a.setCurrentContext||function(){}})})(f);
(function(a){a.Xf=a.Xf||[];a.Xf.push(function(){function b(c,d,h){return c&&c.hasOwnProperty(d)?c[d]:h}a.GetWebGLContext=function(c,d){if(!c)throw"null canvas passed into makeWebGLContext";var h={alpha:b(d,"alpha",1),depth:b(d,"depth",1),stencil:b(d,"stencil",8),antialias:b(d,"antialias",0),premultipliedAlpha:b(d,"premultipliedAlpha",1),preserveDrawingBuffer:b(d,"preserveDrawingBuffer",0),preferLowPowerToHighPerformance:b(d,"preferLowPowerToHighPerformance",0),failIfMajorPerformanceCaveat:b(d,"failIfMajorPerformanceCaveat",
0),enableExtensionsByDefault:b(d,"enableExtensionsByDefault",1),explicitSwapControl:b(d,"explicitSwapControl",0),renderViaOffscreenBackBuffer:b(d,"renderViaOffscreenBackBuffer",0)};h.majorVersion=d&&d.majorVersion?d.majorVersion:"undefined"!==typeof WebGL2RenderingContext?2:1;if(h.explicitSwapControl)throw"explicitSwapControl is not supported";if(c=1<h.majorVersion?c.getContext("webgl2",h):c.getContext("webgl",h)){d=fa(ha);var m={ai:d,attributes:h,version:h.majorVersion,Ah:c};c.canvas&&(c.canvas.Ih=
m);ha[d]=m;("undefined"===typeof h.Th||h.Th)&&ja(m);h=d}else h=0;if(!h)return 0;ka(h);return h};a.MakeWebGLCanvasSurface=function(c,d,h){d=d||null;var m=c,p="undefined"!==typeof OffscreenCanvas&&m instanceof OffscreenCanvas;if(!("undefined"!==typeof HTMLCanvasElement&&m instanceof HTMLCanvasElement||p||(m=document.getElementById(c),m)))throw"Canvas with id "+c+" was not found";c=this.GetWebGLContext(m,h);h=m.Ih.version;if(!c||0>c)throw"failed to create webgl context: err "+c;p=this.MakeGrContext(c);
d=this.MakeOnScreenGLSurface(p,m.width,m.height,d);if(!d)return d=m.cloneNode(!0),m.parentNode.replaceChild(d,m),d.classList.add("ck-replaced"),a.MakeSWCanvasSurface(d);d.tg=c;d.grContext=p;d.openGLversion=h;return d};a.MakeCanvasSurface=a.MakeWebGLCanvasSurface})})(f);
(function(a){function b(g){return Math.round(Math.max(0,Math.min(g||0,255)))}function c(g){return g?g.constructor===Float32Array&&4===g.length:!1}function d(g){return(b(255*g[3])<<24|b(255*g[0])<<16|b(255*g[1])<<8|b(255*g[2])<<0)>>>0}function h(g){if(g instanceof Float32Array){for(var n=Math.floor(g.length/4),x=new Uint32Array(n),B=0;B<n;B++)x[B]=d(g.slice(4*B,4*(B+1)));return x}if(g instanceof Uint32Array)return g;if(g instanceof Array&&g[0]instanceof Float32Array)return g.map(d)}function m(g){if(void 0===
g)return 1;var n=parseFloat(g);return g&&-1!==g.indexOf("%")?n/100:n}function p(g,n,x){if(!g||!g.length)return 0;if(g._ck)return g.byteOffset;var B=a[n].BYTES_PER_ELEMENT;x||(x=a._malloc(g.length*B));a[n].set(g,x/B);return x}function u(g,n,x){if(!g||!g.length)return 0;var B=a[n].BYTES_PER_ELEMENT;x||(x=a._malloc(g.length*g[0].length*B));n=a[n];var L=0;B=x/B;for(var V=0;V<g.length;V++)for(var e=0;e<g[0].length;e++)n[B+L]=g[V][e],L++;return x}function z(g){var n={ig:0,count:g.length,Wg:a.ColorType.RGBA_F32};
if(g instanceof Float32Array)n.ig=p(g,"HEAPF32"),n.count=g.length/4;else if(g instanceof Uint32Array)n.ig=p(g,"HEAPU32"),n.Wg=a.ColorType.RGBA_8888;else if(g instanceof Array&&g[0]instanceof Float32Array)n.ig=u(g,"HEAPF32");else throw"Invalid argument to copyFlexibleColorArray, Not a color array "+typeof g;return n}function E(g){if(!g)return 0;if(g.length){if(6!==g.length&&9!==g.length)throw"invalid matrix size";var n=p(g,"HEAPF32",jb);6===g.length&&a.HEAPF32.set(Cb,6+n/4);return n}n=fc.toTypedArray();
n[0]=g.m11;n[1]=g.m21;n[2]=g.m41;n[3]=g.m12;n[4]=g.m22;n[5]=g.m42;n[6]=g.m14;n[7]=g.m24;n[8]=g.m44;return jb}function I(g){if(!g)return 0;var n=hc.toTypedArray();if(g.length){if(16!==g.length&&6!==g.length&&9!==g.length)throw"invalid matrix size";if(16===g.length)return p(g,"HEAPF32",Ga);n.fill(0);n[0]=g[0];n[1]=g[1];n[3]=g[2];n[4]=g[3];n[5]=g[4];n[7]=g[5];n[12]=g[6];n[13]=g[7];n[15]=g[8];6===g.length&&(n[12]=0,n[13]=0,n[15]=1);return Ga}n[0]=g.m11;n[1]=g.m21;n[2]=g.m31;n[3]=g.m41;n[4]=g.m12;n[5]=
g.m22;n[6]=g.m32;n[7]=g.m42;n[8]=g.m13;n[9]=g.m23;n[10]=g.m33;n[11]=g.m43;n[12]=g.m14;n[13]=g.m24;n[14]=g.m34;n[15]=g.m44;return Ga}function N(g){for(var n=Array(16),x=0;16>x;x++)n[x]=a.HEAPF32[g/4+x];return n}function Q(g,n){return p(g,"HEAPF32",n||kb)}function A(g,n,x,B){var L=ic.toTypedArray();L[0]=g;L[1]=n;L[2]=x;L[3]=B;return kb}function R(g){for(var n=new Float32Array(4),x=0;4>x;x++)n[x]=a.HEAPF32[g/4+x];return n}function T(g,n){return p(g,"HEAPF32",n||Fa)}function da(g,n){return p(g,"HEAPF32",
n||jc)}function wa(g,n){if(lb)__webpack_require__(5747).writeFile(n,new Buffer(g),function(B){if(B)throw B;});else{url=window.URL.createObjectURL(new Blob([g],{type:"application/octet-stream"}));var x=document.createElement("a");document.body.appendChild(x);x.href=url;x.download=n;x.click();setTimeout(function(){URL.revokeObjectURL(url);x.remove()},50)}}function U(g,n){n&&!n._ck&&a._free(g)}a.Color=function(g,n,x,B){void 0===B&&(B=1);return a.Color4f(b(g)/255,b(n)/255,b(x)/255,B)};a.ColorAsInt=function(g,n,x,
B){void 0===B&&(B=255);return(b(B)<<24|b(g)<<16|b(n)<<8|b(x)<<0&268435455)>>>0};a.Color4f=function(g,n,x,B){void 0===B&&(B=1);return Float32Array.of(g,n,x,B)};Object.defineProperty(a,"TRANSPARENT",{get:function(){return a.Color4f(0,0,0,0)}});Object.defineProperty(a,"BLACK",{get:function(){return a.Color4f(0,0,0,1)}});Object.defineProperty(a,"WHITE",{get:function(){return a.Color4f(1,1,1,1)}});Object.defineProperty(a,"RED",{get:function(){return a.Color4f(1,0,0,1)}});Object.defineProperty(a,"GREEN",
{get:function(){return a.Color4f(0,1,0,1)}});Object.defineProperty(a,"BLUE",{get:function(){return a.Color4f(0,0,1,1)}});Object.defineProperty(a,"YELLOW",{get:function(){return a.Color4f(1,1,0,1)}});Object.defineProperty(a,"CYAN",{get:function(){return a.Color4f(0,1,1,1)}});Object.defineProperty(a,"MAGENTA",{get:function(){return a.Color4f(1,0,1,1)}});a.getColorComponents=function(g){return[Math.floor(255*g[0]),Math.floor(255*g[1]),Math.floor(255*g[2]),g[3]]};a.parseColorString=function(g,n){g=g.toLowerCase();
if(g.startsWith("#")){n=255;switch(g.length){case 9:n=parseInt(g.slice(7,9),16);case 7:var x=parseInt(g.slice(1,3),16);var B=parseInt(g.slice(3,5),16);var L=parseInt(g.slice(5,7),16);break;case 5:n=17*parseInt(g.slice(4,5),16);case 4:x=17*parseInt(g.slice(1,2),16),B=17*parseInt(g.slice(2,3),16),L=17*parseInt(g.slice(3,4),16)}return a.Color(x,B,L,n/255)}return g.startsWith("rgba")?(g=g.slice(5,-1),g=g.split(","),a.Color(+g[0],+g[1],+g[2],m(g[3]))):g.startsWith("rgb")?(g=g.slice(4,-1),g=g.split(","),
a.Color(+g[0],+g[1],+g[2],m(g[3]))):g.startsWith("gray(")||g.startsWith("hsl")||!n||(g=n[g],void 0===g)?a.BLACK:g};a.multiplyByAlpha=function(g,n){g=g.slice();g[3]=Math.max(0,Math.min(g[3]*n,1));return g};var lb=!(new Function("try {return this===window;}catch(e){ return false;}"))(),Cb=Float32Array.of(0,0,1),jb=0,fc,Ga=0,hc,kb=0,ic,Ha,Fa=0,Oc,Pc=0,Qc,kc=0,Rc,jc=0,Sc,Tc=0,lc={};a.yg=function(){this.sg=[];this.ag=null;Object.defineProperty(this,"length",{enumerable:!0,get:function(){return this.sg.length/
4}})};a.yg.prototype.push=function(g,n,x,B){this.ag||this.sg.push(g,n,x,B)};a.yg.prototype.set=function(g,n,x,B,L){0>g||g>=this.sg.length/4||(g*=4,this.ag?(g=this.ag/4+g,a.HEAPF32[g]=n,a.HEAPF32[g+1]=x,a.HEAPF32[g+2]=B,a.HEAPF32[g+3]=L):(this.sg[g]=n,this.sg[g+1]=x,this.sg[g+2]=B,this.sg[g+3]=L))};a.yg.prototype.build=function(){return this.ag?this.ag:this.ag=p(this.sg,"HEAPF32")};a.yg.prototype.delete=function(){this.ag&&(a._free(this.ag),this.ag=null)};a.Pg=function(){this.Vg=[];this.ag=null;Object.defineProperty(this,
"length",{enumerable:!0,get:function(){return this.Vg.length}})};a.Pg.prototype.push=function(g){this.ag||this.Vg.push(g)};a.Pg.prototype.set=function(g,n){0>g||g>=this.Vg.length||(g*=4,this.ag?a.HEAPU32[this.ag/4+g]=n:this.Vg[g]=n)};a.Pg.prototype.build=function(){return this.ag?this.ag:this.ag=p(this.Vg,"HEAPU32")};a.Pg.prototype.delete=function(){this.ag&&(a._free(this.ag),this.ag=null)};a.RectBuilder=a.yg;a.RSXFormBuilder=a.yg;a.ColorBuilder=a.Pg;a.Malloc=function(g,n){var x=a._malloc(n*g.BYTES_PER_ELEMENT);
return{_ck:!0,length:n,byteOffset:x,xg:null,subarray:function(B,L){B=this.toTypedArray().subarray(B,L);B._ck=!0;return B},toTypedArray:function(){if(this.xg&&this.xg.length)return this.xg;this.xg=new g(a.HEAPU8.buffer,x,n);this.xg._ck=!0;return this.xg}}};a.Free=function(g){a._free(g.byteOffset);g.byteOffset=0;g.toTypedArray=null;g.xg=null};a.onRuntimeInitialized=function(){function g(e,l,t,w,C){for(var r=0;r<e.length;r++)l[r*t+(r*C+w+t)%t]=e[r];return l}function n(e){for(var l=e*e,t=Array(l);l--;)t[l]=
0==l%(e+1)?1:0;return t}function x(){for(var e=0,l=0;l<arguments.length-1;l+=2)e+=arguments[l]*arguments[l+1];return e}function B(e,l,t){for(var w=Array(e.length),C=0;C<t;C++)for(var r=0;r<t;r++){for(var F=0,M=0;M<t;M++)F+=e[t*C+M]*l[t*M+r];w[C*t+r]=F}return w}function L(e,l){for(var t=B(l[0],l[1],e),w=2;w<l.length;)t=B(t,l[w],e),w++;return t}ic=a.Malloc(Float32Array,4);kb=ic.byteOffset;hc=a.Malloc(Float32Array,16);Ga=hc.byteOffset;fc=a.Malloc(Float32Array,9);jb=fc.byteOffset;Rc=a.Malloc(Float32Array,
12);jc=Rc.byteOffset;Sc=a.Malloc(Float32Array,12);Tc=Sc.byteOffset;Ha=a.Malloc(Float32Array,4);Fa=Ha.byteOffset;Oc=a.Malloc(Float32Array,4);Pc=Oc.byteOffset;Qc=a.Malloc(Int32Array,4);kc=Qc.byteOffset;a.ColorSpace.SRGB=a.ColorSpace._MakeSRGB();a.ColorSpace.DISPLAY_P3=a.ColorSpace._MakeDisplayP3();a.ColorSpace.ADOBE_RGB=a.ColorSpace._MakeAdobeRGB();a.Matrix={};a.Matrix.identity=function(){return n(3)};a.Matrix.invert=function(e){var l=e[0]*e[4]*e[8]+e[1]*e[5]*e[6]+e[2]*e[3]*e[7]-e[2]*e[4]*e[6]-e[1]*
e[3]*e[8]-e[0]*e[5]*e[7];return l?[(e[4]*e[8]-e[5]*e[7])/l,(e[2]*e[7]-e[1]*e[8])/l,(e[1]*e[5]-e[2]*e[4])/l,(e[5]*e[6]-e[3]*e[8])/l,(e[0]*e[8]-e[2]*e[6])/l,(e[2]*e[3]-e[0]*e[5])/l,(e[3]*e[7]-e[4]*e[6])/l,(e[1]*e[6]-e[0]*e[7])/l,(e[0]*e[4]-e[1]*e[3])/l]:null};a.Matrix.mapPoints=function(e,l){for(var t=0;t<l.length;t+=2){var w=l[t],C=l[t+1],r=e[6]*w+e[7]*C+e[8],F=e[3]*w+e[4]*C+e[5];l[t]=(e[0]*w+e[1]*C+e[2])/r;l[t+1]=F/r}return l};a.Matrix.multiply=function(){return L(3,arguments)};a.Matrix.rotated=function(e,
l,t){l=l||0;t=t||0;var w=Math.sin(e);e=Math.cos(e);return[e,-w,x(w,t,1-e,l),w,e,x(-w,l,1-e,t),0,0,1]};a.Matrix.scaled=function(e,l,t,w){t=t||0;w=w||0;var C=g([e,l],n(3),3,0,1);return g([t-e*t,w-l*w],C,3,2,0)};a.Matrix.skewed=function(e,l,t,w){t=t||0;w=w||0;var C=g([e,l],n(3),3,1,-1);return g([-e*t,-l*w],C,3,2,0)};a.Matrix.translated=function(e,l){return g(arguments,n(3),3,2,0)};a.Vector={};a.Vector.dot=function(e,l){return e.map(function(t,w){return t*l[w]}).reduce(function(t,w){return t+w})};a.Vector.lengthSquared=
function(e){return a.Vector.dot(e,e)};a.Vector.length=function(e){return Math.sqrt(a.Vector.lengthSquared(e))};a.Vector.mulScalar=function(e,l){return e.map(function(t){return t*l})};a.Vector.add=function(e,l){return e.map(function(t,w){return t+l[w]})};a.Vector.sub=function(e,l){return e.map(function(t,w){return t-l[w]})};a.Vector.dist=function(e,l){return a.Vector.length(a.Vector.sub(e,l))};a.Vector.normalize=function(e){return a.Vector.mulScalar(e,1/a.Vector.length(e))};a.Vector.cross=function(e,
l){return[e[1]*l[2]-e[2]*l[1],e[2]*l[0]-e[0]*l[2],e[0]*l[1]-e[1]*l[0]]};a.M44={};a.M44.identity=function(){return n(4)};a.M44.translated=function(e){return g(e,n(4),4,3,0)};a.M44.scaled=function(e){return g(e,n(4),4,0,1)};a.M44.rotated=function(e,l){return a.M44.rotatedUnitSinCos(a.Vector.normalize(e),Math.sin(l),Math.cos(l))};a.M44.rotatedUnitSinCos=function(e,l,t){var w=e[0],C=e[1];e=e[2];var r=1-t;return[r*w*w+t,r*w*C-l*e,r*w*e+l*C,0,r*w*C+l*e,r*C*C+t,r*C*e-l*w,0,r*w*e-l*C,r*C*e+l*w,r*e*e+t,0,
0,0,0,1]};a.M44.lookat=function(e,l,t){l=a.Vector.normalize(a.Vector.sub(l,e));t=a.Vector.normalize(t);t=a.Vector.normalize(a.Vector.cross(l,t));var w=a.M44.identity();g(t,w,4,0,0);g(a.Vector.cross(t,l),w,4,1,0);g(a.Vector.mulScalar(l,-1),w,4,2,0);g(e,w,4,3,0);e=a.M44.invert(w);return null===e?a.M44.identity():e};a.M44.perspective=function(e,l,t){var w=1/(l-e);t/=2;t=Math.cos(t)/Math.sin(t);return[t,0,0,0,0,t,0,0,0,0,(l+e)*w,2*l*e*w,0,0,-1,1]};a.M44.rc=function(e,l,t){return e[4*l+t]};a.M44.multiply=
function(){return L(4,arguments)};a.M44.invert=function(e){var l=e[0],t=e[4],w=e[8],C=e[12],r=e[1],F=e[5],M=e[9],P=e[13],W=e[2],ba=e[6],ma=e[10],oa=e[14],J=e[3],k=e[7],q=e[11];e=e[15];var y=l*F-t*r,D=l*M-w*r,G=l*P-C*r,H=t*M-w*F,O=t*P-C*F,aa=w*P-C*M,ia=W*k-ba*J,pa=W*q-ma*J,qa=W*e-oa*J,Xa=ba*q-ma*k,Ya=ba*e-oa*k,Za=ma*e-oa*q,Uc=y*Za-D*Ya+G*Xa+H*qa-O*pa+aa*ia,ra=1/Uc;if(0===Uc||Infinity===ra)return null;y*=ra;D*=ra;G*=ra;H*=ra;O*=ra;aa*=ra;ia*=ra;pa*=ra;qa*=ra;Xa*=ra;Ya*=ra;Za*=ra;l=[F*Za-M*Ya+P*Xa,M*
qa-r*Za-P*pa,r*Ya-F*qa+P*ia,F*pa-r*Xa-M*ia,w*Ya-t*Za-C*Xa,l*Za-w*qa+C*pa,t*qa-l*Ya-C*ia,l*Xa-t*pa+w*ia,k*aa-q*O+e*H,q*G-J*aa-e*D,J*O-k*G+e*y,k*D-J*H-q*y,ma*O-ba*aa-oa*H,W*aa-ma*G+oa*D,ba*G-W*O-oa*y,W*H-ba*D+ma*y];return l.every(function(mc){return!isNaN(mc)&&Infinity!==mc&&-Infinity!==mc})?l:null};a.M44.transpose=function(e){return[e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]]};a.M44.mustInvert=function(e){e=a.M44.invert(e);if(null===e)throw"Matrix not invertible";
return e};a.M44.setupCamera=function(e,l,t){var w=a.M44.lookat(t.eye,t.coa,t.up);t=a.M44.perspective(t.near,t.far,t.angle);l=[(e[2]-e[0])/2,(e[3]-e[1])/2,l];e=a.M44.multiply(a.M44.translated([(e[0]+e[2])/2,(e[1]+e[3])/2,0]),a.M44.scaled(l));return a.M44.multiply(e,t,w,a.M44.mustInvert(e))};a.ColorMatrix={};a.ColorMatrix.identity=function(){var e=new Float32Array(20);e[0]=1;e[6]=1;e[12]=1;e[18]=1;return e};a.ColorMatrix.scaled=function(e,l,t,w){var C=new Float32Array(20);C[0]=e;C[6]=l;C[12]=t;C[18]=
w;return C};var V=[[6,7,11,12],[0,10,2,12],[0,1,5,6]];a.ColorMatrix.rotated=function(e,l,t){var w=a.ColorMatrix.identity();e=V[e];w[e[0]]=t;w[e[1]]=l;w[e[2]]=-l;w[e[3]]=t;return w};a.ColorMatrix.postTranslate=function(e,l,t,w,C){e[4]+=l;e[9]+=t;e[14]+=w;e[19]+=C;return e};a.ColorMatrix.concat=function(e,l){for(var t=new Float32Array(20),w=0,C=0;20>C;C+=5){for(var r=0;4>r;r++)t[w++]=e[C]*l[r]+e[C+1]*l[r+5]+e[C+2]*l[r+10]+e[C+3]*l[r+15];t[w++]=e[C]*l[4]+e[C+1]*l[9]+e[C+2]*l[14]+e[C+3]*l[19]+e[C+4]}return t};
a.Path.MakeFromCmds=function(e){for(var l=0,t=0;t<e.length;t++)l+=e[t].length;if(lc[l])var w=lc[l];else w=new Float32Array(l),lc[l]=w;var C=0;for(t=0;t<e.length;t++)for(var r=0;r<e[t].length;r++)w[C]=e[t][r],C++;e=[p(w,"HEAPF32"),l];l=a.Path._MakeFromCmds(e[0],e[1]);a._free(e[0]);return l};a.MakePathFromCmds=a.Path.MakeFromCmds;a.Path.MakeFromVerbsPointsWeights=function(e,l,t){var w=p(e,"HEAPU8"),C=p(l,"HEAPF32"),r=p(t,"HEAPF32"),F=a.Path._MakeFromVerbsPointsWeights(w,e.length,C,l.length,r,t&&t.length||
0);U(w,e);U(C,l);U(r,t);return F};a.Path.prototype.addArc=function(e,l,t){e=T(e);this._addArc(e,l,t);return this};a.Path.prototype.addOval=function(e,l,t){void 0===t&&(t=1);e=T(e);this._addOval(e,!!l,t);return this};a.Path.prototype.addPath=function(){var e=Array.prototype.slice.call(arguments),l=e[0],t=!1;"boolean"===typeof e[e.length-1]&&(t=e.pop());if(1===e.length)this._addPath(l,1,0,0,0,1,0,0,0,1,t);else if(2===e.length)e=e[1],this._addPath(l,e[0],e[1],e[2],e[3],e[4],e[5],e[6]||0,e[7]||0,e[8]||
1,t);else if(7===e.length||10===e.length)this._addPath(l,e[1],e[2],e[3],e[4],e[5],e[6],e[7]||0,e[8]||0,e[9]||1,t);else return null;return this};a.Path.prototype.addPoly=function(e,l){if(e._ck){var t=e.byteOffset;var w=e.length/2}else t=u(e,"HEAPF32"),w=e.length;this._addPoly(t,w,l);U(t,e);return this};a.Path.prototype.addRect=function(e,l){e=T(e);this._addRect(e,!!l);return this};a.Path.prototype.addRRect=function(e,l){e=da(e);this._addRRect(e,!!l);return this};a.Path.prototype.addVerbsPointsWeights=
function(e,l,t){var w=p(e,"HEAPU8"),C=p(l,"HEAPF32"),r=p(t,"HEAPF32");this._addVerbsPointsWeights(w,e.length,C,l.length,r,t&&t.length||0);U(w,e);U(C,l);U(r,t)};a.Path.prototype.arc=function(e,l,t,w,C,r){e=a.LTRBRect(e-t,l-t,e+t,l+t);C=(C-w)/Math.PI*180-360*!!r;r=new a.Path;r.addArc(e,w/Math.PI*180,C);this.addPath(r,!0);r.delete();return this};a.Path.prototype.arcToOval=function(e,l,t,w){e=T(e);this._arcToOval(e,l,t,w);return this};a.Path.prototype.arcToRotated=function(e,l,t,w,C,r,F){this._arcToRotated(e,
l,t,!!w,!!C,r,F);return this};a.Path.prototype.arcToTangent=function(e,l,t,w,C){this._arcToTangent(e,l,t,w,C);return this};a.Path.prototype.close=function(){this._close();return this};a.Path.prototype.conicTo=function(e,l,t,w,C){this._conicTo(e,l,t,w,C);return this};a.Path.prototype.computeTightBounds=function(e){this._computeTightBounds(Fa);var l=Ha.toTypedArray();return e?(e.set(l),e):l.slice()};a.Path.prototype.cubicTo=function(e,l,t,w,C,r){this._cubicTo(e,l,t,w,C,r);return this};a.Path.prototype.dash=
function(e,l,t){return this._dash(e,l,t)?this:null};a.Path.prototype.getBounds=function(e){this._getBounds(Fa);var l=Ha.toTypedArray();return e?(e.set(l),e):l.slice()};a.Path.prototype.lineTo=function(e,l){this._lineTo(e,l);return this};a.Path.prototype.moveTo=function(e,l){this._moveTo(e,l);return this};a.Path.prototype.offset=function(e,l){this._transform(1,0,e,0,1,l,0,0,1);return this};a.Path.prototype.quadTo=function(e,l,t,w){this._quadTo(e,l,t,w);return this};a.Path.prototype.rArcTo=function(e,
l,t,w,C,r,F){this._rArcTo(e,l,t,w,C,r,F);return this};a.Path.prototype.rConicTo=function(e,l,t,w,C){this._rConicTo(e,l,t,w,C);return this};a.Path.prototype.rCubicTo=function(e,l,t,w,C,r){this._rCubicTo(e,l,t,w,C,r);return this};a.Path.prototype.rLineTo=function(e,l){this._rLineTo(e,l);return this};a.Path.prototype.rMoveTo=function(e,l){this._rMoveTo(e,l);return this};a.Path.prototype.rQuadTo=function(e,l,t,w){this._rQuadTo(e,l,t,w);return this};a.Path.prototype.stroke=function(e){e=e||{};e.width=
e.width||1;e.miter_limit=e.miter_limit||4;e.cap=e.cap||a.StrokeCap.Butt;e.join=e.join||a.StrokeJoin.Miter;e.precision=e.precision||1;return this._stroke(e)?this:null};a.Path.prototype.transform=function(){if(1===arguments.length){var e=arguments[0];this._transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6]||0,e[7]||0,e[8]||1)}else if(6===arguments.length||9===arguments.length)e=arguments,this._transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6]||0,e[7]||0,e[8]||1);else throw"transform expected to take 1 or 9 arguments. Got "+
arguments.length;return this};a.Path.prototype.trim=function(e,l,t){return this._trim(e,l,!!t)?this:null};a.Image.prototype.encodeToData=function(){if(!arguments.length)return this._encodeToData();if(2===arguments.length){var e=arguments;return this._encodeToDataWithFormat(e[0],e[1])}throw"encodeToData expected to take 0 or 2 arguments. Got "+arguments.length;};a.Image.prototype.makeShader=function(e,l,t){t=E(t);return this._makeShader(e,l,t)};a.Image.prototype.readPixels=function(e,l,t){switch(e.colorType){case a.ColorType.RGBA_8888:var w=
4*e.width;break;case a.ColorType.RGBA_F32:w=16*e.width;break;default:return}var C=w*e.height,r=a._malloc(C);if(!this._readPixels(e,r,w,l,t))return null;l=null;switch(e.colorType){case a.ColorType.RGBA_8888:l=(new Uint8Array(a.HEAPU8.buffer,r,C)).slice();break;case a.ColorType.RGBA_F32:l=(new Float32Array(a.HEAPU8.buffer,r,C)).slice()}a._free(r);return l};a.Canvas.prototype.clear=function(e){e=Q(e);this._clear(e)};a.Canvas.prototype.clipRRect=function(e,l,t){e=da(e);this._clipRRect(e,l,t)};a.Canvas.prototype.clipRect=
function(e,l,t){e=T(e);this._clipRect(e,l,t)};a.Canvas.prototype.concat=function(e){e=I(e);this._concat(e)};a.Canvas.prototype.drawArc=function(e,l,t,w,C){e=T(e);this._drawArc(e,l,t,w,C)};a.Canvas.prototype.drawAtlas=function(e,l,t,w,C,r){if(e&&w&&l&&t&&l.length===t.length){C||(C=a.BlendMode.SrcOver);var F;l.build?F=l.build():F=p(l,"HEAPF32");if(t.build){var M=t.build();var P=t.length}else M=p(t,"HEAPF32"),P=t.length/4;var W=0;r&&(r.build?W=r.build():W=p(h(r),"HEAPU32"));this._drawAtlas(e,M,F,W,P,
C,w);F&&!l.build&&U(F,l);M&&!t.build&&U(M,t);W&&!r.build&&U(W,r)}};a.Canvas.prototype.drawColor=function(e,l){e=Q(e);void 0!==l?this._drawColor(e,l):this._drawColor(e)};a.Canvas.prototype.drawColorComponents=function(e,l,t,w,C){e=A(e,l,t,w);void 0!==C?this._drawColor(e,C):this._drawColor(e)};a.Canvas.prototype.drawDRRect=function(e,l,t){e=da(e,jc);l=da(l,Tc);this._drawDRRect(e,l,t)};a.Canvas.prototype.drawImageNine=function(e,l,t,w){l=p(l,"HEAP32",kc);t=T(t);this._drawImageNine(e,l,t,w)};a.Canvas.prototype.drawImageRect=
function(e,l,t,w,C){l=T(l,Fa);t=T(t,Pc);this._drawImageRect(e,l,t,w,!!C)};a.Canvas.prototype.drawOval=function(e,l){e=T(e);this._drawOval(e,l)};a.Canvas.prototype.drawPoints=function(e,l,t){if(l._ck){var w=l.byteOffset;var C=l.length/2}else w=u(l,"HEAPF32"),C=l.length;this._drawPoints(e,w,C,t);U(w,l)};a.Canvas.prototype.drawRRect=function(e,l){e=da(e);this._drawRRect(e,l)};a.Canvas.prototype.drawRect=function(e,l){e=T(e);this._drawRect(e,l)};a.Canvas.prototype.drawShadow=function(e,l,t,w,C,r,F){var M=
p(C,"HEAPF32"),P=p(r,"HEAPF32");this._drawShadow(e,l,t,w,M,P,F);U(M,C);U(P,r)};a.Canvas.prototype.getLocalToDevice=function(){this._getLocalToDevice(Ga);return N(Ga)};a.Canvas.prototype.findMarkedCTM=function(e){return this._findMarkedCTM(e,Ga)?N(Ga):null};a.Canvas.prototype.getTotalMatrix=function(){this._getTotalMatrix(jb);for(var e=Array(9),l=0;9>l;l++)e[l]=a.HEAPF32[jb/4+l];return e};a.Canvas.prototype.readPixels=function(e,l,t,w,C,r,F,M){C=C||a.AlphaType.Unpremul;r=r||a.ColorType.RGBA_8888;F=
F||a.ColorSpace.SRGB;var P=4;r===a.ColorType.RGBA_F16&&(P=8);M=M||P*t;var W=w*M;P=a._malloc(W);if(!this._readPixels({width:t,height:w,colorType:r,alphaType:C,colorSpace:F},P,M,e,l))return a._free(P),null;e=(new Uint8Array(a.HEAPU8.buffer,P,W)).slice();a._free(P);return e};a.Canvas.prototype.saveLayer=function(e,l,t,w){l=T(l);return this._saveLayer(e||null,l,t||null,w||0)};a.Canvas.prototype.writePixels=function(e,l,t,w,C,r,F,M){if(e.byteLength%(l*t))throw"pixels length must be a multiple of the srcWidth * srcHeight";
var P=e.byteLength/(l*t);r=r||a.AlphaType.Unpremul;F=F||a.ColorType.RGBA_8888;M=M||a.ColorSpace.SRGB;var W=P*l;P=p(e,"HEAPU8");l=this._writePixels({width:l,height:t,colorType:F,alphaType:r,colorSpace:M},P,W,w,C);U(P,e);return l};a.ColorFilter.MakeBlend=function(e,l){e=Q(e);return a.ColorFilter._MakeBlend(e,l)};a.ColorFilter.MakeMatrix=function(e){if(!e||20!==e.length)throw"invalid color matrix";var l=p(e,"HEAPF32"),t=a.ColorFilter._makeMatrix(l);U(l,e);return t};a.ImageFilter.MakeMatrixTransform=
function(e,l,t){e=E(e);return a.ImageFilter._MakeMatrixTransform(e,l,t)};a.Paint.prototype.getColor=function(){this._getColor(kb);return R(kb)};a.Paint.prototype.setColor=function(e,l){l=l||null;e=Q(e);this._setColor(e,l)};a.Paint.prototype.setColorComponents=function(e,l,t,w,C){C=C||null;e=A(e,l,t,w);this._setColor(e,C)};a.PictureRecorder.prototype.beginRecording=function(e){e=T(e);return this._beginRecording(e)};a.Surface.prototype.makeImageSnapshot=function(e){e=p(e,"HEAP32",kc);return this._makeImageSnapshot(e)};
a.Surface.prototype.requestAnimationFrame=function(e,l){this.Qg||(this.Qg=this.getCanvas());requestAnimationFrame(function(){void 0!==this.tg&&a.setCurrentContext(this.tg);e(this.Qg);this.flush(l)}.bind(this))};a.Surface.prototype.drawOnce=function(e,l){this.Qg||(this.Qg=this.getCanvas());requestAnimationFrame(function(){void 0!==this.tg&&a.setCurrentContext(this.tg);e(this.Qg);this.flush(l);this.dispose()}.bind(this))};a.PathEffect.MakeDash=function(e,l){l||(l=0);if(!e.length||1===e.length%2)throw"Intervals array must have even length";
var t=p(e,"HEAPF32");l=a.PathEffect._MakeDash(t,e.length,l);U(t,e);return l};a.Shader.Color=function(e,l){l=l||null;e=Q(e);return a.Shader._Color(e,l)};a.Shader.MakeLinearGradient=function(e,l,t,w,C,r,F,M){M=M||null;var P=z(t),W=p(w,"HEAPF32");F=F||0;r=E(r);e=a._MakeLinearGradientShader(e,l,P.ig,P.Wg,W,P.count,C,F,r,M);U(P.ig,t);w&&U(W,w);return e};a.Shader.MakeRadialGradient=function(e,l,t,w,C,r,F,M){M=M||null;var P=z(t),W=p(w,"HEAPF32");F=F||0;r=E(r);e=a._MakeRadialGradientShader(e,l,P.ig,P.Wg,
W,P.count,C,F,r,M);U(P.ig,t);w&&U(W,w);return e};a.Shader.MakeSweepGradient=function(e,l,t,w,C,r,F,M,P,W){W=W||null;var ba=z(t),ma=p(w,"HEAPF32");F=F||0;M=M||0;P=P||360;r=E(r);e=a._MakeSweepGradientShader(e,l,ba.ig,ba.Wg,ma,ba.count,C,M,P,F,r,W);U(ba.ig,t);w&&U(ma,w);return e};a.Shader.MakeTwoPointConicalGradient=function(e,l,t,w,C,r,F,M,P,W){W=W||null;var ba=z(C),ma=p(r,"HEAPF32");P=P||0;M=E(M);e=a._MakeTwoPointConicalGradientShader(e,l,t,w,ba.ig,ba.Wg,ma,ba.count,F,P,M,W);U(ba.ig,C);r&&U(ma,r);
return e};a.Vertices.prototype.bounds=function(e){this._bounds(Fa);var l=Ha.toTypedArray();return e?(e.set(l),e):l.slice()};a.Xf&&a.Xf.forEach(function(e){e()})};a.computeTonalColors=function(g){var n=p(g.ambient,"HEAPF32"),x=p(g.spot,"HEAPF32");this._computeTonalColors(n,x);var B={ambient:R(n),spot:R(x)};U(n,g.ambient);U(x,g.spot);return B};a.LTRBRect=function(g,n,x,B){return Float32Array.of(g,n,x,B)};a.XYWHRect=function(g,n,x,B){return Float32Array.of(g,n,g+x,n+B)};a.LTRBiRect=function(g,n,x,B){return Int32Array.of(g,
n,x,B)};a.XYWHiRect=function(g,n,x,B){return Int32Array.of(g,n,g+x,n+B)};a.RRectXY=function(g,n,x){return Float32Array.of(g[0],g[1],g[2],g[3],n,x,n,x,n,x,n,x)};a.MakeAnimatedImageFromEncoded=function(g){g=new Uint8Array(g);var n=a._malloc(g.byteLength);a.HEAPU8.set(g,n);return(g=a._decodeAnimatedImage(n,g.byteLength))?g:null};a.MakeImageFromEncoded=function(g){g=new Uint8Array(g);var n=a._malloc(g.byteLength);a.HEAPU8.set(g,n);return(g=a._decodeImage(n,g.byteLength))?g:null};var mb=null;a.MakeImageFromCanvasImageSource=
function(g){var n=g.width,x=g.height;mb||(mb=document.createElement("canvas"));mb.width=n;mb.height=x;var B=mb.getContext("2d");B.drawImage(g,0,0);g=B.getImageData(0,0,n,x);return a.MakeImage(g.data,n,x,a.AlphaType.Unpremul,a.ColorType.RGBA_8888,a.ColorSpace.SRGB)};a.MakeImage=function(g,n,x,B,L,V){var e=g.length/(n*x);x={width:n,height:x,alphaType:B,colorType:L,colorSpace:V};B=p(g,"HEAPU8");return a._MakeImage(x,B,g.length,n*e)};a.MakeVertices=function(g,n,x,B,L,V){var e=L&&L.length||0,l=0;x&&x.length&&
(l|=1);B&&B.length&&(l|=2);void 0===V||V||(l|=4);g=new a._VerticesBuilder(g,n.length,e,l);u(n,"HEAPF32",g.positions());g.texCoords()&&u(x,"HEAPF32",g.texCoords());if(g.colors()){if(B.build)throw"Color builder not accepted by MakeVertices, use array of ints";p(h(B),"HEAPU32",g.colors())}g.indices()&&p(L,"HEAPU16",g.indices());return g.detach()};(function(g){g.Xf=g.Xf||[];g.Xf.push(function(){function n(r){if(!r||!r.length)return[];for(var F=[],M=0;M<r.length;M+=5){var P=g.LTRBRect(r[M],r[M+1],r[M+
2],r[M+3]);P.direction=0===r[M+4]?g.TextDirection.RTL:g.TextDirection.LTR;F.push(P)}g._free(r.byteOffset);return F}function x(r){r=r||{};void 0===r.weight&&(r.weight=g.FontWeight.Normal);r.width=r.width||g.FontWidth.Normal;r.slant=r.slant||g.FontSlant.Upright;return r}function B(r){if(!r||!r.length)return 0;for(var F=[],M=0;M<r.length;M++){var P=L(r[M]);F.push(P)}return p(F,"HEAPU32")}function L(r){if(l[r])return l[r];var F=la(r)+1,M=g._malloc(F);na(r,v,M,F);return l[r]=M}function V(r){r._colorPtr=
Q(r.color);r._foregroundColorPtr=0;r._backgroundColorPtr=0;r._decorationColorPtr=0;r.foregroundColor&&(r._foregroundColorPtr=Q(r.foregroundColor,t));r.backgroundColor&&(r._backgroundColorPtr=Q(r.backgroundColor,w));r.decorationColor&&(r._decorationColorPtr=Q(r.decorationColor,C));Array.isArray(r.fontFamilies)&&r.fontFamilies.length?(r._fontFamiliesPtr=B(r.fontFamilies),r._fontFamiliesLen=r.fontFamilies.length):(r._fontFamiliesPtr=0,r._fontFamiliesLen=0)}function e(r){g._free(r._fontFamiliesPtr)}g.Paragraph.prototype.getRectsForRange=
function(r,F,M,P){r=this._getRectsForRange(r,F,M,P);return n(r)};g.Paragraph.prototype.getRectsForPlaceholders=function(){var r=this._getRectsForPlaceholders();return n(r)};g.TypefaceFontProvider.prototype.registerFont=function(r,F){r=g.FontMgr.RefDefault().MakeTypefaceFromData(r);if(!r)return null;F=L(F);this._registerFont(r,F)};g.ParagraphStyle=function(r){r.disableHinting=r.disableHinting||!1;if(r.ellipsis){var F=r.ellipsis;r._ellipsisPtr=L(F);r._ellipsisLen=la(F)+1}else r._ellipsisPtr=0,r._ellipsisLen=
0;r.heightMultiplier=r.heightMultiplier||0;r.maxLines=r.maxLines||0;r.textAlign=r.textAlign||g.TextAlign.Start;r.textDirection=r.textDirection||g.TextDirection.LTR;r.textStyle=g.TextStyle(r.textStyle);F=(F=r.strutStyle)||{};F.strutEnabled=F.strutEnabled||!1;F.strutEnabled&&Array.isArray(F.fontFamilies)&&F.fontFamilies.length?(F._fontFamiliesPtr=B(F.fontFamilies),F._fontFamiliesLen=F.fontFamilies.length):(F._fontFamiliesPtr=0,F._fontFamiliesLen=0);F.fontStyle=x(F.fontStyle);F.fontSize=F.fontSize||
0;F.heightMultiplier=F.heightMultiplier||0;F.leading=F.leading||0;F.forceStrutHeight=F.forceStrutHeight||!1;r.strutStyle=F;return r};g.TextStyle=function(r){r.color||(r.color=g.BLACK);r.decoration=r.decoration||0;r.decorationThickness=r.decorationThickness||0;r.decorationStyle=r.decorationStyle||g.DecorationStyle.Solid;r.textBaseline=r.textBaseline||g.TextBaseline.Alphabetic;r.fontSize=r.fontSize||0;r.letterSpacing=r.letterSpacing||0;r.wordSpacing=r.wordSpacing||0;r.heightMultiplier=r.heightMultiplier||
0;if(r.locale){var F=r.locale;r._localePtr=L(F);r._localeLen=la(F)+1}else r._localePtr=0,r._localeLen=0;r.fontStyle=x(r.fontStyle);if(r.shadows){F=r.shadows;var M=F.map(function(ba){return ba.color||g.BLACK}),P=F.map(function(ba){return ba.offset||[0,0]}),W=F.map(function(ba){return ba.blurRadius||0});r._shadowLen=F.length;r._shadowColorsPtr=z(M).ig;r._shadowOffsetsPtr=u(P,"HEAPF32");r._shadowBlurRadiiPtr=p(W,"HEAPF32")}else r._shadowLen=0,r._shadowColorsPtr=0,r._shadowOffsetsPtr=0,r._shadowBlurRadiiPtr=
0;r.fontFeatures?(F=r.fontFeatures,M=F.map(function(ba){return ba.name}),P=F.map(function(ba){return ba.value}),r._fontFeatureLen=F.length,r._fontFeatureNamesPtr=B(M),r._fontFeatureValuesPtr=p(P,"HEAPU32")):(r._fontFeatureLen=0,r._fontFeatureNamesPtr=0,r._fontFeatureValuesPtr=0);return r};var l={},t=g._malloc(16),w=g._malloc(16),C=g._malloc(16);g.ParagraphBuilder.Make=function(r,F){V(r.textStyle);F=g.ParagraphBuilder._Make(r,F);e(r.textStyle);return F};g.ParagraphBuilder.MakeFromFontProvider=function(r,
F){V(r.textStyle);F=g.ParagraphBuilder._MakeFromFontProvider(r,F);e(r.textStyle);return F};g.ParagraphBuilder.prototype.pushStyle=function(r){V(r);this._pushStyle(r);e(r)};g.ParagraphBuilder.prototype.pushPaintStyle=function(r,F,M){V(r);this._pushPaintStyle(r,F,M);e(r)};g.ParagraphBuilder.prototype.addPlaceholder=function(r,F,M,P,W){M=M||g.PlaceholderAlignment.Baseline;P=P||g.TextBaseline.Alphabetic;this._addPlaceholder(r||0,F||0,M,P,W||0)}})})(f);a.MakeManagedAnimation=function(g,n,x){if(!a._MakeManagedAnimation)throw"Not compiled with MakeManagedAnimation";
x||(x="");if(!n)return a._MakeManagedAnimation(g,0,0,0,0,x);for(var B=[],L=[],V=[],e=Object.keys(n||{}),l=0;l<e.length;l++){var t=e[l],w=new Uint8Array(n[t]),C=a._malloc(w.byteLength);a.HEAPU8.set(w,C);L.push(C);V.push(w.byteLength);w=la(t)+1;C=a._malloc(w);na(t,v,C,w);B.push(C)}n=p(B,"HEAPU32");L=p(L,"HEAPU32");V=p(V,"HEAPU32");g=a._MakeManagedAnimation(g,e.length,n,L,V,x);a._free(n);a._free(L);a._free(V);return g};(function(g){g.Xf=g.Xf||[];g.Xf.push(function(){g.Animation.prototype.render=function(n,
x){x=T(x);this._render(n,x)};g.ManagedAnimation&&(g.ManagedAnimation.prototype.render=function(n,x){x=T(x);this._render(n,x)},g.ManagedAnimation.prototype.seek=function(n,x){this._seek(n,Fa);n=Ha.toTypedArray();return x?(x.set(n),x):n.slice()},g.ManagedAnimation.prototype.seekFrame=function(n,x){this._seekFrame(n,Fa);n=Ha.toTypedArray();return x?(x.set(n),x):n.slice()},g.ManagedAnimation.prototype.setColor=function(n,x){x=Q(x);this._setColor(n,x)})})})(f);a.MakeParticles=function(g,n){if(!a._MakeParticles)throw"Not compiled with MakeParticles";
if(!n)return a._MakeParticles(g,0,0,0,0);for(var x=[],B=[],L=[],V=Object.keys(n||{}),e=0;e<V.length;e++){var l=V[e],t=new Uint8Array(n[l]),w=a._malloc(t.byteLength);a.HEAPU8.set(t,w);B.push(w);L.push(t.byteLength);t=la(l)+1;w=a._malloc(t);na(l,v,w,t);x.push(w)}n=p(x,"HEAPU32");B=p(B,"HEAPU32");L=p(L,"HEAPU32");g=a._MakeParticles(g,V.length,n,B,L);a._free(n);a._free(B);a._free(L);return g};a.Xf=a.Xf||[];a.Xf.push(function(){a.ParticleEffect.prototype.effectUniforms=function(){var g=this._effectUniformPtr(),
n=this.getEffectUniformFloatCount();return!g||0>=n?new Float32Array:new Float32Array(a.HEAPU8.buffer,g,n)};a.ParticleEffect.prototype.particleUniforms=function(){var g=this._particleUniformPtr(),n=this.getParticleUniformFloatCount();return!g||0>=n?new Float32Array:new Float32Array(a.HEAPU8.buffer,g,n)}});a.Xf=a.Xf||[];a.Xf.push(function(){a.Path.prototype.op=function(g,n){return this._op(g,n)?this:null};a.Path.prototype.simplify=function(){return this._simplify()?this:null}});a.Xf=a.Xf||[];a.Xf.push(function(){a.Canvas.prototype.drawText=
function(g,n,x,B,L){if("string"===typeof g){var V=la(g),e=a._malloc(V+1);na(g,v,e,V+1);this._drawSimpleText(e,V,n,x,L,B);a._free(e)}else this._drawShapedText(g,n,x,B)};a.Font.prototype.getGlyphBounds=function(g,n,x){var B=p(g,"HEAPU16"),L=a._malloc(16*g.length);this._getGlyphWidthBounds(B,g.length,0,L,n||null);n=new Float32Array(a.HEAPU8.buffer,L,4*g.length);U(B,g);if(x)return x.set(n),a._free(L),x;g=Float32Array.from(n);a._free(L);return g};a.Font.prototype.getGlyphIDs=function(g,n,x){n||(n=g.length);
var B=la(g)+1,L=a._malloc(B);na(g,v,L,B);g=a._malloc(2*n);n=this._getGlyphIDs(L,B-1,n,g);a._free(L);if(0>n)return a._free(g),null;L=new Uint16Array(a.HEAPU8.buffer,g,n);if(x)return x.set(L),a._free(g),x;x=Uint32Array.from(L);a._free(g);return x};a.Font.prototype.getGlyphWidths=function(g,n,x){var B=p(g,"HEAPU16"),L=a._malloc(4*g.length);this._getGlyphWidthBounds(B,g.length,L,0,n||null);n=new Float32Array(a.HEAPU8.buffer,L,g.length);U(B,g);if(x)return x.set(n),a._free(L),x;g=Float32Array.from(n);a._free(L);
return g};a.Font.prototype.getWidths=function(g){var n=g.length+1,x=la(g)+1,B=a._malloc(x);na(g,v,B,x);g=a._malloc(4*n);if(!this._getWidths(B,x,n,g))return a._free(B),a._free(g),null;n=new Float32Array(a.HEAPU8.buffer,g,n);n=Array.from(n);a._free(B);a._free(g);return n};a.FontMgr.FromData=function(){if(!arguments.length)return null;var g=arguments;1===g.length&&Array.isArray(g[0])&&(g=arguments[0]);if(!g.length)return null;for(var n=[],x=[],B=0;B<g.length;B++){var L=new Uint8Array(g[B]),V=p(L,"HEAPU8");
n.push(V);x.push(L.byteLength)}n=p(n,"HEAPU32");x=p(x,"HEAPU32");g=a.FontMgr._fromData(n,x,g.length);a._free(n);a._free(x);return g};a.FontMgr.prototype.MakeTypefaceFromData=function(g){g=new Uint8Array(g);var n=p(g,"HEAPU8");return(g=this._makeTypefaceFromData(n,g.byteLength))?g:null};a.ShapedText.prototype.getBounds=function(g){this._getBounds(Fa);var n=Ha.toTypedArray();return g?(g.set(n),g):n.slice()};a.TextBlob.MakeOnPath=function(g,n,x,B){if(g&&g.length&&n&&n.countPoints()){if(1===n.countPoints())return this.MakeFromText(g,
x);B||(B=0);var L=x.getWidths(g),V=new a.RSXFormBuilder;n=new a.PathMeasure(n,!1,1);for(var e=0;e<g.length;e++){var l=L[e];B+=l/2;if(B>n.getLength()){if(!n.nextContour()){g=g.substring(0,e);break}B=l/2}var t=n.getPosTan(B),w=t[2],C=t[3];V.push(w,C,t[0]-l/2*w,t[1]-l/2*C);B+=l/2}g=this.MakeFromRSXform(g,V,x);V.delete();n.delete();return g}};a.TextBlob.MakeFromRSXform=function(g,n,x){var B=la(g)+1,L=a._malloc(B);na(g,v,L,B);g=0;n.build?g=n.build():g=p(n,"HEAPF32");n=a.TextBlob._MakeFromRSXform(L,B-1,
g,x);a._free(L);return n?n:null};a.TextBlob.MakeFromRSXformGlyphs=function(g,n,x){var B=p(g,"HEAPU16"),L=0;n.build?L=n.build():L=p(n,"HEAPF32");n=a.TextBlob._MakeFromRSXformGlyphs(B,2*g.length,L,x);U(B,g);return n?n:null};a.TextBlob.MakeFromGlyphs=function(g,n){var x=p(g,"HEAPU16");n=a.TextBlob._MakeFromGlyphs(x,2*g.length,n);U(x,g);return n?n:null};a.TextBlob.MakeFromText=function(g,n){var x=la(g)+1,B=a._malloc(x);na(g,v,B,x);g=a.TextBlob._MakeFromText(B,x-1,n);a._free(B);return g?g:null};a.MallocGlyphIDs=
function(g){return a.Malloc(Uint16Array,g)}});a.Xf=a.Xf||[];a.Xf.push(function(){a.MakePicture=function(g){g=new Uint8Array(g);var n=a._malloc(g.byteLength);a.HEAPU8.set(g,n);return(g=a._MakePicture(n,g.byteLength))?g:null};a.Picture.prototype.saveAsFile=function(g){var n=this.serialize();if(n){var x=a.getDataBytes(n);wa(x,g);n.delete()}}});a.Xf=a.Xf||[];a.Xf.push(function(){a.RuntimeEffect.prototype.makeShader=function(g,n,x){var B=p(g,"HEAPF32");x=E(x);return this._makeShader(B,4*g.length,!!n,x)};
a.RuntimeEffect.prototype.makeShaderWithChildren=function(g,n,x,B){var L=p(g,"HEAPF32");B=E(B);for(var V=[],e=0;e<x.length;e++)V.push(x[e].Sf.Wf);x=p(V,"HEAPU32");return this._makeShaderWithChildren(L,4*g.length,!!n,x,V.length,B)}});(function(){function g(J){for(var k=0;k<J.length;k++)if(void 0!==J[k]&&!Number.isFinite(J[k]))return!1;return!0}function n(J){var k=a.getColorComponents(J);J=k[0];var q=k[1],y=k[2];k=k[3];if(1===k)return J=J.toString(16).toLowerCase(),q=q.toString(16).toLowerCase(),y=
y.toString(16).toLowerCase(),J=1===J.length?"0"+J:J,q=1===q.length?"0"+q:q,y=1===y.length?"0"+y:y,"#"+J+q+y;k=0===k||1===k?k:k.toFixed(8);return"rgba("+J+", "+q+", "+y+", "+k+")"}function x(J){return a.parseColorString(J,ba)}function B(J){J=ma.exec(J);if(!J)return null;var k=parseFloat(J[4]),q=16;switch(J[5]){case "em":case "rem":q=16*k;break;case "pt":q=4*k/3;break;case "px":q=k;break;case "pc":q=16*k;break;case "in":q=96*k;break;case "cm":q=96*k/2.54;break;case "mm":q=96/25.4*k;break;case "q":q=
96/25.4/4*k;break;case "%":q=16/75*k}return{style:J[1],variant:J[2],weight:J[3],sizePx:q,family:J[6].trim()}}function L(J){this.Tf=J;this.Vf=new a.Paint;this.Vf.setAntiAlias(!0);this.Vf.setStrokeMiter(10);this.Vf.setStrokeCap(a.StrokeCap.Butt);this.Vf.setStrokeJoin(a.StrokeJoin.Miter);this.eh="10px monospace";this.ug=new a.Font(null,10);this.ug.setSubpixel(!0);this.hg=this.og=a.BLACK;this.Dg=0;this.Tg=a.TRANSPARENT;this.Fg=this.Eg=0;this.Ug=this.qg=1;this.Sg=0;this.Cg=[];this.Uf=a.BlendMode.SrcOver;
this.vg=a.FilterQuality.Low;this.Rg=!0;this.Vf.setStrokeWidth(this.Ug);this.Vf.setBlendMode(this.Uf);this.Zf=new a.Path;this.$f=a.Matrix.identity();this.Ch=[];this.Jg=[];this.rg=function(){this.Zf.delete();this.Vf.delete();this.ug.delete();this.Jg.forEach(function(k){k.rg()})};Object.defineProperty(this,"currentTransform",{enumerable:!0,get:function(){return{a:this.$f[0],c:this.$f[1],e:this.$f[2],b:this.$f[3],d:this.$f[4],f:this.$f[5]}},set:function(k){k.a&&this.setTransform(k.a,k.b,k.c,k.d,k.e,k.f)}});
Object.defineProperty(this,"fillStyle",{enumerable:!0,get:function(){return c(this.hg)?n(this.hg):this.hg},set:function(k){"string"===typeof k?this.hg=x(k):k.Bg&&(this.hg=k)}});Object.defineProperty(this,"font",{enumerable:!0,get:function(){return this.eh},set:function(k){var q=B(k),y=q.family;q.typeface=oa[y]?oa[y][(q.style||"normal")+"|"+(q.variant||"normal")+"|"+(q.weight||"normal")]||oa[y]["*"]:null;q&&(this.ug.setSize(q.sizePx),this.ug.setTypeface(q.typeface),this.eh=k)}});Object.defineProperty(this,
"globalAlpha",{enumerable:!0,get:function(){return this.qg},set:function(k){!isFinite(k)||0>k||1<k||(this.qg=k)}});Object.defineProperty(this,"globalCompositeOperation",{enumerable:!0,get:function(){switch(this.Uf){case a.BlendMode.SrcOver:return"source-over";case a.BlendMode.DstOver:return"destination-over";case a.BlendMode.Src:return"copy";case a.BlendMode.Dst:return"destination";case a.BlendMode.Clear:return"clear";case a.BlendMode.SrcIn:return"source-in";case a.BlendMode.DstIn:return"destination-in";
case a.BlendMode.SrcOut:return"source-out";case a.BlendMode.DstOut:return"destination-out";case a.BlendMode.SrcATop:return"source-atop";case a.BlendMode.DstATop:return"destination-atop";case a.BlendMode.Xor:return"xor";case a.BlendMode.Plus:return"lighter";case a.BlendMode.Multiply:return"multiply";case a.BlendMode.Screen:return"screen";case a.BlendMode.Overlay:return"overlay";case a.BlendMode.Darken:return"darken";case a.BlendMode.Lighten:return"lighten";case a.BlendMode.ColorDodge:return"color-dodge";
case a.BlendMode.ColorBurn:return"color-burn";case a.BlendMode.HardLight:return"hard-light";case a.BlendMode.SoftLight:return"soft-light";case a.BlendMode.Difference:return"difference";case a.BlendMode.Exclusion:return"exclusion";case a.BlendMode.Hue:return"hue";case a.BlendMode.Saturation:return"saturation";case a.BlendMode.Color:return"color";case a.BlendMode.Luminosity:return"luminosity"}},set:function(k){switch(k){case "source-over":this.Uf=a.BlendMode.SrcOver;break;case "destination-over":this.Uf=
a.BlendMode.DstOver;break;case "copy":this.Uf=a.BlendMode.Src;break;case "destination":this.Uf=a.BlendMode.Dst;break;case "clear":this.Uf=a.BlendMode.Clear;break;case "source-in":this.Uf=a.BlendMode.SrcIn;break;case "destination-in":this.Uf=a.BlendMode.DstIn;break;case "source-out":this.Uf=a.BlendMode.SrcOut;break;case "destination-out":this.Uf=a.BlendMode.DstOut;break;case "source-atop":this.Uf=a.BlendMode.SrcATop;break;case "destination-atop":this.Uf=a.BlendMode.DstATop;break;case "xor":this.Uf=
a.BlendMode.Xor;break;case "lighter":this.Uf=a.BlendMode.Plus;break;case "plus-lighter":this.Uf=a.BlendMode.Plus;break;case "plus-darker":throw"plus-darker is not supported";case "multiply":this.Uf=a.BlendMode.Multiply;break;case "screen":this.Uf=a.BlendMode.Screen;break;case "overlay":this.Uf=a.BlendMode.Overlay;break;case "darken":this.Uf=a.BlendMode.Darken;break;case "lighten":this.Uf=a.BlendMode.Lighten;break;case "color-dodge":this.Uf=a.BlendMode.ColorDodge;break;case "color-burn":this.Uf=a.BlendMode.ColorBurn;
break;case "hard-light":this.Uf=a.BlendMode.HardLight;break;case "soft-light":this.Uf=a.BlendMode.SoftLight;break;case "difference":this.Uf=a.BlendMode.Difference;break;case "exclusion":this.Uf=a.BlendMode.Exclusion;break;case "hue":this.Uf=a.BlendMode.Hue;break;case "saturation":this.Uf=a.BlendMode.Saturation;break;case "color":this.Uf=a.BlendMode.Color;break;case "luminosity":this.Uf=a.BlendMode.Luminosity;break;default:return}this.Vf.setBlendMode(this.Uf)}});Object.defineProperty(this,"imageSmoothingEnabled",
{enumerable:!0,get:function(){return this.Rg},set:function(k){this.Rg=!!k}});Object.defineProperty(this,"imageSmoothingQuality",{enumerable:!0,get:function(){switch(this.vg){case a.FilterQuality.Low:return"low";case a.FilterQuality.Medium:return"medium";case a.FilterQuality.High:return"high"}},set:function(k){switch(k){case "low":this.vg=a.FilterQuality.Low;break;case "medium":this.vg=a.FilterQuality.Medium;break;case "high":this.vg=a.FilterQuality.High}}});Object.defineProperty(this,"lineCap",{enumerable:!0,
get:function(){switch(this.Vf.getStrokeCap()){case a.StrokeCap.Butt:return"butt";case a.StrokeCap.Round:return"round";case a.StrokeCap.Square:return"square"}},set:function(k){switch(k){case "butt":this.Vf.setStrokeCap(a.StrokeCap.Butt);break;case "round":this.Vf.setStrokeCap(a.StrokeCap.Round);break;case "square":this.Vf.setStrokeCap(a.StrokeCap.Square)}}});Object.defineProperty(this,"lineDashOffset",{enumerable:!0,get:function(){return this.Sg},set:function(k){isFinite(k)&&(this.Sg=k)}});Object.defineProperty(this,
"lineJoin",{enumerable:!0,get:function(){switch(this.Vf.getStrokeJoin()){case a.StrokeJoin.Miter:return"miter";case a.StrokeJoin.Round:return"round";case a.StrokeJoin.Bevel:return"bevel"}},set:function(k){switch(k){case "miter":this.Vf.setStrokeJoin(a.StrokeJoin.Miter);break;case "round":this.Vf.setStrokeJoin(a.StrokeJoin.Round);break;case "bevel":this.Vf.setStrokeJoin(a.StrokeJoin.Bevel)}}});Object.defineProperty(this,"lineWidth",{enumerable:!0,get:function(){return this.Vf.getStrokeWidth()},set:function(k){0>=
k||!k||(this.Ug=k,this.Vf.setStrokeWidth(k))}});Object.defineProperty(this,"miterLimit",{enumerable:!0,get:function(){return this.Vf.getStrokeMiter()},set:function(k){0>=k||!k||this.Vf.setStrokeMiter(k)}});Object.defineProperty(this,"shadowBlur",{enumerable:!0,get:function(){return this.Dg},set:function(k){0>k||!isFinite(k)||(this.Dg=k)}});Object.defineProperty(this,"shadowColor",{enumerable:!0,get:function(){return n(this.Tg)},set:function(k){this.Tg=x(k)}});Object.defineProperty(this,"shadowOffsetX",
{enumerable:!0,get:function(){return this.Eg},set:function(k){isFinite(k)&&(this.Eg=k)}});Object.defineProperty(this,"shadowOffsetY",{enumerable:!0,get:function(){return this.Fg},set:function(k){isFinite(k)&&(this.Fg=k)}});Object.defineProperty(this,"strokeStyle",{enumerable:!0,get:function(){return n(this.og)},set:function(k){"string"===typeof k?this.og=x(k):k.Bg&&(this.og=k)}});this.arc=function(k,q,y,D,G,H){r(this.Zf,k,q,y,y,0,D,G,H)};this.arcTo=function(k,q,y,D,G){t(this.Zf,k,q,y,D,G)};this.beginPath=
function(){this.Zf.delete();this.Zf=new a.Path};this.bezierCurveTo=function(k,q,y,D,G,H){var O=this.Zf;g([k,q,y,D,G,H])&&(O.isEmpty()&&O.moveTo(k,q),O.cubicTo(k,q,y,D,G,H))};this.clearRect=function(k,q,y,D){this.Vf.setStyle(a.PaintStyle.Fill);this.Vf.setBlendMode(a.BlendMode.Clear);this.Tf.drawRect(a.XYWHRect(k,q,y,D),this.Vf);this.Vf.setBlendMode(this.Uf)};this.clip=function(k,q){"string"===typeof k?(q=k,k=this.Zf):k&&k.lh&&(k=k.bg);k||(k=this.Zf);k=k.copy();q&&"evenodd"===q.toLowerCase()?k.setFillType(a.FillType.EvenOdd):
k.setFillType(a.FillType.Winding);this.Tf.clipPath(k,a.ClipOp.Intersect,!0);k.delete()};this.closePath=function(){w(this.Zf)};this.createImageData=function(){if(1===arguments.length){var k=arguments[0];return new e(new Uint8ClampedArray(4*k.width*k.height),k.width,k.height)}if(2===arguments.length){k=arguments[0];var q=arguments[1];return new e(new Uint8ClampedArray(4*k*q),k,q)}throw"createImageData expects 1 or 2 arguments, got "+arguments.length;};this.createLinearGradient=function(k,q,y,D){if(g(arguments)){var G=
new l(k,q,y,D);this.Jg.push(G);return G}};this.createPattern=function(k,q){k=new P(k,q);this.Jg.push(k);return k};this.createRadialGradient=function(k,q,y,D,G,H){if(g(arguments)){var O=new W(k,q,y,D,G,H);this.Jg.push(O);return O}};this.Mh=function(){var k=this.dh();this.Rg?k.setFilterQuality(this.vg):k.setFilterQuality(a.FilterQuality.None);return k};this.drawImage=function(k){var q=this.Mh();if(3===arguments.length||5===arguments.length)var y=a.XYWHRect(arguments[1],arguments[2],arguments[3]||k.width(),
arguments[4]||k.height()),D=a.XYWHRect(0,0,k.width(),k.height());else if(9===arguments.length)y=a.XYWHRect(arguments[5],arguments[6],arguments[7],arguments[8]),D=a.XYWHRect(arguments[1],arguments[2],arguments[3],arguments[4]);else throw"invalid number of args for drawImage, need 3, 5, or 9; got "+arguments.length;this.Tf.drawImageRect(k,D,y,q,!1);q.dispose()};this.ellipse=function(k,q,y,D,G,H,O,aa){r(this.Zf,k,q,y,D,G,H,O,aa)};this.dh=function(){var k=this.Vf.copy();k.setStyle(a.PaintStyle.Fill);
if(c(this.hg)){var q=a.multiplyByAlpha(this.hg,this.qg);k.setColor(q)}else q=this.hg.Bg(this.$f),k.setColor(a.Color(0,0,0,this.qg)),k.setShader(q);k.dispose=function(){this.delete()};return k};this.fill=function(k,q){"string"===typeof k?(q=k,k=this.Zf):k&&k.lh&&(k=k.bg);if("evenodd"===q)this.Zf.setFillType(a.FillType.EvenOdd);else{if("nonzero"!==q&&q)throw"invalid fill rule";this.Zf.setFillType(a.FillType.Winding)}k||(k=this.Zf);q=this.dh();var y=this.Gg(q);y&&(this.Tf.save(),this.zg(),this.Tf.drawPath(k,
y),this.Tf.restore(),y.dispose());this.Tf.drawPath(k,q);q.dispose()};this.fillRect=function(k,q,y,D){var G=this.dh(),H=this.Gg(G);H&&(this.Tf.save(),this.zg(),this.Tf.drawRect(a.XYWHRect(k,q,y,D),H),this.Tf.restore(),H.dispose());this.Tf.drawRect(a.XYWHRect(k,q,y,D),G);G.dispose()};this.fillText=function(k,q,y){var D=this.dh();k=a.TextBlob.MakeFromText(k,this.ug);var G=this.Gg(D);G&&(this.Tf.save(),this.zg(),this.Tf.drawTextBlob(k,q,y,G),this.Tf.restore(),G.dispose());this.Tf.drawTextBlob(k,q,y,D);
k.delete();D.dispose()};this.getImageData=function(k,q,y,D){return(k=this.Tf.readPixels(k,q,y,D))?new e(new Uint8ClampedArray(k.buffer),y,D):null};this.getLineDash=function(){return this.Cg.slice()};this.Dh=function(k){var q=a.Matrix.invert(this.$f);a.Matrix.mapPoints(q,k);return k};this.isPointInPath=function(k,q,y){var D=arguments;if(3===D.length)var G=this.Zf;else if(4===D.length)G=D[0],k=D[1],q=D[2],y=D[3];else throw"invalid arg count, need 3 or 4, got "+D.length;if(!isFinite(k)||!isFinite(q))return!1;
y=y||"nonzero";if("nonzero"!==y&&"evenodd"!==y)return!1;D=this.Dh([k,q]);k=D[0];q=D[1];G.setFillType("nonzero"===y?a.FillType.Winding:a.FillType.EvenOdd);return G.contains(k,q)};this.isPointInStroke=function(k,q){var y=arguments;if(2===y.length)var D=this.Zf;else if(3===y.length)D=y[0],k=y[1],q=y[2];else throw"invalid arg count, need 2 or 3, got "+y.length;if(!isFinite(k)||!isFinite(q))return!1;y=this.Dh([k,q]);k=y[0];q=y[1];D=D.copy();D.setFillType(a.FillType.Winding);D.stroke({width:this.lineWidth,
miter_limit:this.miterLimit,cap:this.Vf.getStrokeCap(),join:this.Vf.getStrokeJoin(),precision:.3});y=D.contains(k,q);D.delete();return y};this.lineTo=function(k,q){F(this.Zf,k,q)};this.measureText=function(k){return{width:this.ug.measureText(k)}};this.moveTo=function(k,q){var y=this.Zf;g([k,q])&&y.moveTo(k,q)};this.putImageData=function(k,q,y,D,G,H,O){if(g([q,y,D,G,H,O]))if(void 0===D)this.Tf.writePixels(k.data,k.width,k.height,q,y);else if(D=D||0,G=G||0,H=H||k.width,O=O||k.height,0>H&&(D+=H,H=Math.abs(H)),
0>O&&(G+=O,O=Math.abs(O)),0>D&&(H+=D,D=0),0>G&&(O+=G,G=0),!(0>=H||0>=O)){k=a.MakeImage(k.data,k.width,k.height,a.AlphaType.Unpremul,a.ColorType.RGBA_8888,a.ColorSpace.SRGB);var aa=a.XYWHRect(D,G,H,O);q=a.XYWHRect(q+D,y+G,H,O);y=a.Matrix.invert(this.$f);this.Tf.save();this.Tf.concat(y);this.Tf.drawImageRect(k,aa,q,null,!1);this.Tf.restore();k.delete()}};this.quadraticCurveTo=function(k,q,y,D){var G=this.Zf;g([k,q,y,D])&&(G.isEmpty()&&G.moveTo(k,q),G.quadTo(k,q,y,D))};this.rect=function(k,q,y,D){var G=
this.Zf;k=a.XYWHRect(k,q,y,D);g(k)&&G.addRect(k)};this.resetTransform=function(){this.Zf.transform(this.$f);var k=a.Matrix.invert(this.$f);this.Tf.concat(k);this.$f=this.Tf.getTotalMatrix()};this.restore=function(){var k=this.Ch.pop();if(k){var q=a.Matrix.multiply(this.$f,a.Matrix.invert(k.Rh));this.Zf.transform(q);this.Vf.delete();this.Vf=k.li;this.Cg=k.hi;this.Ug=k.Bi;this.og=k.Ai;this.hg=k.fs;this.Eg=k.yi;this.Fg=k.zi;this.Dg=k.pi;this.Tg=k.xi;this.qg=k.Xh;this.Uf=k.Yh;this.Sg=k.ii;this.Rg=k.fi;
this.vg=k.gi;this.eh=k.Vh;this.Tf.restore();this.$f=this.Tf.getTotalMatrix()}};this.rotate=function(k){if(isFinite(k)){var q=a.Matrix.rotated(-k);this.Zf.transform(q);this.Tf.rotate(k/Math.PI*180,0,0);this.$f=this.Tf.getTotalMatrix()}};this.save=function(){if(this.hg.Ag){var k=this.hg.Ag();this.Jg.push(k)}else k=this.hg;if(this.og.Ag){var q=this.og.Ag();this.Jg.push(q)}else q=this.og;this.Ch.push({Rh:this.$f.slice(),hi:this.Cg.slice(),Bi:this.Ug,Ai:q,fs:k,yi:this.Eg,zi:this.Fg,pi:this.Dg,xi:this.Tg,
Xh:this.qg,ii:this.Sg,Yh:this.Uf,fi:this.Rg,gi:this.vg,li:this.Vf.copy(),Vh:this.eh});this.Tf.save()};this.scale=function(k,q){if(g(arguments)){var y=a.Matrix.scaled(1/k,1/q);this.Zf.transform(y);this.Tf.scale(k,q);this.$f=this.Tf.getTotalMatrix()}};this.setLineDash=function(k){for(var q=0;q<k.length;q++)if(!isFinite(k[q])||0>k[q])return;1===k.length%2&&Array.prototype.push.apply(k,k);this.Cg=k};this.setTransform=function(k,q,y,D,G,H){g(arguments)&&(this.resetTransform(),this.transform(k,q,y,D,G,
H))};this.zg=function(){var k=a.Matrix.invert(this.$f);this.Tf.concat(k);this.Tf.concat(a.Matrix.translated(this.Eg,this.Fg));this.Tf.concat(this.$f)};this.Gg=function(k){var q=a.multiplyByAlpha(this.Tg,this.qg);if(!a.getColorComponents(q)[3]||!(this.Dg||this.Fg||this.Eg))return null;k=k.copy();k.setColor(q);var y=a.MaskFilter.MakeBlur(a.BlurStyle.Normal,this.Dg/2,!1);k.setMaskFilter(y);k.dispose=function(){y.delete();this.delete()};return k};this.nh=function(){var k=this.Vf.copy();k.setStyle(a.PaintStyle.Stroke);
if(c(this.og)){var q=a.multiplyByAlpha(this.og,this.qg);k.setColor(q)}else q=this.og.Bg(this.$f),k.setColor(a.Color(0,0,0,this.qg)),k.setShader(q);k.setStrokeWidth(this.Ug);if(this.Cg.length){var y=a.PathEffect.MakeDash(this.Cg,this.Sg);k.setPathEffect(y)}k.dispose=function(){y&&y.delete();this.delete()};return k};this.stroke=function(k){k=k?k.bg:this.Zf;var q=this.nh(),y=this.Gg(q);y&&(this.Tf.save(),this.zg(),this.Tf.drawPath(k,y),this.Tf.restore(),y.dispose());this.Tf.drawPath(k,q);q.dispose()};
this.strokeRect=function(k,q,y,D){var G=this.nh(),H=this.Gg(G);H&&(this.Tf.save(),this.zg(),this.Tf.drawRect(a.XYWHRect(k,q,y,D),H),this.Tf.restore(),H.dispose());this.Tf.drawRect(a.XYWHRect(k,q,y,D),G);G.dispose()};this.strokeText=function(k,q,y){var D=this.nh();k=a.TextBlob.MakeFromText(k,this.ug);var G=this.Gg(D);G&&(this.Tf.save(),this.zg(),this.Tf.drawTextBlob(k,q,y,G),this.Tf.restore(),G.dispose());this.Tf.drawTextBlob(k,q,y,D);k.delete();D.dispose()};this.translate=function(k,q){if(g(arguments)){var y=
a.Matrix.translated(-k,-q);this.Zf.transform(y);this.Tf.translate(k,q);this.$f=this.Tf.getTotalMatrix()}};this.transform=function(k,q,y,D,G,H){k=[k,y,G,q,D,H,0,0,1];q=a.Matrix.invert(k);this.Zf.transform(q);this.Tf.concat(k);this.$f=this.Tf.getTotalMatrix()};this.addHitRegion=function(){};this.clearHitRegions=function(){};this.drawFocusIfNeeded=function(){};this.removeHitRegion=function(){};this.scrollPathIntoView=function(){};Object.defineProperty(this,"canvas",{value:null,writable:!1})}function V(J){this.oh=
J;this.tg=new L(J.getCanvas());this.fh=[];this.Jh=a.FontMgr.RefDefault();this.decodeImage=function(k){k=a.MakeImageFromEncoded(k);if(!k)throw"Invalid input";this.fh.push(k);return k};this.loadFont=function(k,q){k=this.Jh.MakeTypefaceFromData(k);if(!k)return null;this.fh.push(k);var y=(q.style||"normal")+"|"+(q.variant||"normal")+"|"+(q.weight||"normal");q=q.family;oa[q]||(oa[q]={"*":k});oa[q][y]=k};this.makePath2D=function(k){k=new M(k);this.fh.push(k.bg);return k};this.getContext=function(k){return"2d"===
k?this.tg:null};this.toDataURL=function(k,q){this.oh.flush();var y=this.oh.makeImageSnapshot();if(y){k=k||"image/png";var D=a.ImageFormat.PNG;"image/jpeg"===k&&(D=a.ImageFormat.JPEG);if(q=y.encodeToData(D,q||.92)){q=a.getDataBytes(q);k="data:"+k+";base64,";if(lb)q=Buffer.from(q).toString("base64");else{y=0;D=q.length;for(var G="",H;y<D;)H=q.slice(y,Math.min(y+32768,D)),G+=String.fromCharCode.apply(null,H),y+=32768;q=btoa(G)}return k+q}}};this.dispose=function(){this.tg.rg();this.fh.forEach(function(k){k.delete()});
this.oh.dispose()}}function e(J,k,q){if(!k||0===q)throw"invalid dimensions, width and height must be non-zero";if(J.length%4)throw"arr must be a multiple of 4";q=q||J.length/(4*k);Object.defineProperty(this,"data",{value:J,writable:!1});Object.defineProperty(this,"height",{value:q,writable:!1});Object.defineProperty(this,"width",{value:k,writable:!1})}function l(J,k,q,y){this.dg=null;this.lg=[];this.fg=[];this.addColorStop=function(D,G){if(0>D||1<D||!isFinite(D))throw"offset must be between 0 and 1 inclusively";
G=x(G);var H=this.fg.indexOf(D);if(-1!==H)this.lg[H]=G;else{for(H=0;H<this.fg.length&&!(this.fg[H]>D);H++);this.fg.splice(H,0,D);this.lg.splice(H,0,G)}};this.Ag=function(){var D=new l(J,k,q,y);D.lg=this.lg.slice();D.fg=this.fg.slice();return D};this.rg=function(){this.dg&&(this.dg.delete(),this.dg=null)};this.Bg=function(D){var G=[J,k,q,y];a.Matrix.mapPoints(D,G);D=G[0];var H=G[1],O=G[2];G=G[3];this.rg();return this.dg=a.Shader.MakeLinearGradient([D,H],[O,G],this.lg,this.fg,a.TileMode.Clamp)}}function t(J,
k,q,y,D,G){if(g([k,q,y,D,G])){if(0>G)throw"radii cannot be negative";J.isEmpty()&&J.moveTo(k,q);J.arcToTangent(k,q,y,D,G)}}function w(J){if(!J.isEmpty()){var k=J.getBounds();(k[3]-k[1]||k[2]-k[0])&&J.close()}}function C(J,k,q,y,D,G,H){H=(H-G)/Math.PI*180;G=G/Math.PI*180;k=a.LTRBRect(k-y,q-D,k+y,q+D);1E-5>Math.abs(Math.abs(H)-360)?(q=H/2,J.arcToOval(k,G,q,!1),J.arcToOval(k,G+q,q,!1)):J.arcToOval(k,G,H,!1)}function r(J,k,q,y,D,G,H,O,aa){if(g([k,q,y,D,G,H,O])){if(0>y||0>D)throw"radii cannot be negative";
var ia=2*Math.PI,pa=H%ia;0>pa&&(pa+=ia);var qa=pa-H;H=pa;O+=qa;!aa&&O-H>=ia?O=H+ia:aa&&H-O>=ia?O=H-ia:!aa&&H>O?O=H+(ia-(H-O)%ia):aa&&H<O&&(O=H-(ia-(O-H)%ia));G?(aa=a.Matrix.rotated(G,k,q),G=a.Matrix.rotated(-G,k,q),J.transform(G),C(J,k,q,y,D,H,O),J.transform(aa)):C(J,k,q,y,D,H,O)}}function F(J,k,q){g([k,q])&&(J.isEmpty()&&J.moveTo(k,q),J.lineTo(k,q))}function M(J){this.bg=null;"string"===typeof J?this.bg=a.MakePathFromSVGString(J):J&&J.lh?this.bg=J.bg.copy():this.bg=new a.Path;this.lh=function(){return this.bg};
this.addPath=function(k,q){q||(q={a:1,c:0,e:0,b:0,d:1,f:0});this.bg.addPath(k.bg,[q.a,q.c,q.e,q.b,q.d,q.f])};this.arc=function(k,q,y,D,G,H){r(this.bg,k,q,y,y,0,D,G,H)};this.arcTo=function(k,q,y,D,G){t(this.bg,k,q,y,D,G)};this.bezierCurveTo=function(k,q,y,D,G,H){var O=this.bg;g([k,q,y,D,G,H])&&(O.isEmpty()&&O.moveTo(k,q),O.cubicTo(k,q,y,D,G,H))};this.closePath=function(){w(this.bg)};this.ellipse=function(k,q,y,D,G,H,O,aa){r(this.bg,k,q,y,D,G,H,O,aa)};this.lineTo=function(k,q){F(this.bg,k,q)};this.moveTo=
function(k,q){var y=this.bg;g([k,q])&&y.moveTo(k,q)};this.quadraticCurveTo=function(k,q,y,D){var G=this.bg;g([k,q,y,D])&&(G.isEmpty()&&G.moveTo(k,q),G.quadTo(k,q,y,D))};this.rect=function(k,q,y,D){var G=this.bg;k=a.XYWHRect(k,q,y,D);g(k)&&G.addRect(k)}}function P(J,k){this.dg=null;this.Lh=J;this._transform=a.Matrix.identity();""===k&&(k="repeat");switch(k){case "repeat-x":this.Hg=a.TileMode.Repeat;this.Ig=a.TileMode.Decal;break;case "repeat-y":this.Hg=a.TileMode.Decal;this.Ig=a.TileMode.Repeat;break;
case "repeat":this.Ig=this.Hg=a.TileMode.Repeat;break;case "no-repeat":this.Ig=this.Hg=a.TileMode.Decal;break;default:throw"invalid repetition mode "+k;}this.setTransform=function(q){q=[q.a,q.c,q.e,q.b,q.d,q.f,0,0,1];g(q)&&(this._transform=q)};this.Ag=function(){var q=new P;q.Hg=this.Hg;q.Ig=this.Ig;return q};this.rg=function(){this.dg&&(this.dg.delete(),this.dg=null)};this.Bg=function(){this.rg();return this.dg=this.Lh.makeShader(this.Hg,this.Ig,this._transform)}}function W(J,k,q,y,D,G){this.dg=
null;this.lg=[];this.fg=[];this.addColorStop=function(H,O){if(0>H||1<H||!isFinite(H))throw"offset must be between 0 and 1 inclusively";O=x(O);var aa=this.fg.indexOf(H);if(-1!==aa)this.lg[aa]=O;else{for(aa=0;aa<this.fg.length&&!(this.fg[aa]>H);aa++);this.fg.splice(aa,0,H);this.lg.splice(aa,0,O)}};this.Ag=function(){var H=new W(J,k,q,y,D,G);H.lg=this.lg.slice();H.fg=this.fg.slice();return H};this.rg=function(){this.dg&&(this.dg.delete(),this.dg=null)};this.Bg=function(H){var O=[J,k,y,D];a.Matrix.mapPoints(H,
O);var aa=O[0],ia=O[1],pa=O[2];O=O[3];var qa=(Math.abs(H[0])+Math.abs(H[4]))/2;H=q*qa;qa*=G;this.rg();return this.dg=a.Shader.MakeTwoPointConicalGradient([aa,ia],H,[pa,O],qa,this.lg,this.fg,a.TileMode.Clamp)}}a._testing={};var ba={aliceblue:Float32Array.of(.941,.973,1,1),antiquewhite:Float32Array.of(.98,.922,.843,1),aqua:Float32Array.of(0,1,1,1),aquamarine:Float32Array.of(.498,1,.831,1),azure:Float32Array.of(.941,1,1,1),beige:Float32Array.of(.961,.961,.863,1),bisque:Float32Array.of(1,.894,.769,1),
black:Float32Array.of(0,0,0,1),blanchedalmond:Float32Array.of(1,.922,.804,1),blue:Float32Array.of(0,0,1,1),blueviolet:Float32Array.of(.541,.169,.886,1),brown:Float32Array.of(.647,.165,.165,1),burlywood:Float32Array.of(.871,.722,.529,1),cadetblue:Float32Array.of(.373,.62,.627,1),chartreuse:Float32Array.of(.498,1,0,1),chocolate:Float32Array.of(.824,.412,.118,1),coral:Float32Array.of(1,.498,.314,1),cornflowerblue:Float32Array.of(.392,.584,.929,1),cornsilk:Float32Array.of(1,.973,.863,1),crimson:Float32Array.of(.863,
.078,.235,1),cyan:Float32Array.of(0,1,1,1),darkblue:Float32Array.of(0,0,.545,1),darkcyan:Float32Array.of(0,.545,.545,1),darkgoldenrod:Float32Array.of(.722,.525,.043,1),darkgray:Float32Array.of(.663,.663,.663,1),darkgreen:Float32Array.of(0,.392,0,1),darkgrey:Float32Array.of(.663,.663,.663,1),darkkhaki:Float32Array.of(.741,.718,.42,1),darkmagenta:Float32Array.of(.545,0,.545,1),darkolivegreen:Float32Array.of(.333,.42,.184,1),darkorange:Float32Array.of(1,.549,0,1),darkorchid:Float32Array.of(.6,.196,.8,
1),darkred:Float32Array.of(.545,0,0,1),darksalmon:Float32Array.of(.914,.588,.478,1),darkseagreen:Float32Array.of(.561,.737,.561,1),darkslateblue:Float32Array.of(.282,.239,.545,1),darkslategray:Float32Array.of(.184,.31,.31,1),darkslategrey:Float32Array.of(.184,.31,.31,1),darkturquoise:Float32Array.of(0,.808,.82,1),darkviolet:Float32Array.of(.58,0,.827,1),deeppink:Float32Array.of(1,.078,.576,1),deepskyblue:Float32Array.of(0,.749,1,1),dimgray:Float32Array.of(.412,.412,.412,1),dimgrey:Float32Array.of(.412,
.412,.412,1),dodgerblue:Float32Array.of(.118,.565,1,1),firebrick:Float32Array.of(.698,.133,.133,1),floralwhite:Float32Array.of(1,.98,.941,1),forestgreen:Float32Array.of(.133,.545,.133,1),fuchsia:Float32Array.of(1,0,1,1),gainsboro:Float32Array.of(.863,.863,.863,1),ghostwhite:Float32Array.of(.973,.973,1,1),gold:Float32Array.of(1,.843,0,1),goldenrod:Float32Array.of(.855,.647,.125,1),gray:Float32Array.of(.502,.502,.502,1),green:Float32Array.of(0,.502,0,1),greenyellow:Float32Array.of(.678,1,.184,1),grey:Float32Array.of(.502,
.502,.502,1),honeydew:Float32Array.of(.941,1,.941,1),hotpink:Float32Array.of(1,.412,.706,1),indianred:Float32Array.of(.804,.361,.361,1),indigo:Float32Array.of(.294,0,.51,1),ivory:Float32Array.of(1,1,.941,1),khaki:Float32Array.of(.941,.902,.549,1),lavender:Float32Array.of(.902,.902,.98,1),lavenderblush:Float32Array.of(1,.941,.961,1),lawngreen:Float32Array.of(.486,.988,0,1),lemonchiffon:Float32Array.of(1,.98,.804,1),lightblue:Float32Array.of(.678,.847,.902,1),lightcoral:Float32Array.of(.941,.502,.502,
1),lightcyan:Float32Array.of(.878,1,1,1),lightgoldenrodyellow:Float32Array.of(.98,.98,.824,1),lightgray:Float32Array.of(.827,.827,.827,1),lightgreen:Float32Array.of(.565,.933,.565,1),lightgrey:Float32Array.of(.827,.827,.827,1),lightpink:Float32Array.of(1,.714,.757,1),lightsalmon:Float32Array.of(1,.627,.478,1),lightseagreen:Float32Array.of(.125,.698,.667,1),lightskyblue:Float32Array.of(.529,.808,.98,1),lightslategray:Float32Array.of(.467,.533,.6,1),lightslategrey:Float32Array.of(.467,.533,.6,1),lightsteelblue:Float32Array.of(.69,
.769,.871,1),lightyellow:Float32Array.of(1,1,.878,1),lime:Float32Array.of(0,1,0,1),limegreen:Float32Array.of(.196,.804,.196,1),linen:Float32Array.of(.98,.941,.902,1),magenta:Float32Array.of(1,0,1,1),maroon:Float32Array.of(.502,0,0,1),mediumaquamarine:Float32Array.of(.4,.804,.667,1),mediumblue:Float32Array.of(0,0,.804,1),mediumorchid:Float32Array.of(.729,.333,.827,1),mediumpurple:Float32Array.of(.576,.439,.859,1),mediumseagreen:Float32Array.of(.235,.702,.443,1),mediumslateblue:Float32Array.of(.482,
.408,.933,1),mediumspringgreen:Float32Array.of(0,.98,.604,1),mediumturquoise:Float32Array.of(.282,.82,.8,1),mediumvioletred:Float32Array.of(.78,.082,.522,1),midnightblue:Float32Array.of(.098,.098,.439,1),mintcream:Float32Array.of(.961,1,.98,1),mistyrose:Float32Array.of(1,.894,.882,1),moccasin:Float32Array.of(1,.894,.71,1),navajowhite:Float32Array.of(1,.871,.678,1),navy:Float32Array.of(0,0,.502,1),oldlace:Float32Array.of(.992,.961,.902,1),olive:Float32Array.of(.502,.502,0,1),olivedrab:Float32Array.of(.42,
.557,.137,1),orange:Float32Array.of(1,.647,0,1),orangered:Float32Array.of(1,.271,0,1),orchid:Float32Array.of(.855,.439,.839,1),palegoldenrod:Float32Array.of(.933,.91,.667,1),palegreen:Float32Array.of(.596,.984,.596,1),paleturquoise:Float32Array.of(.686,.933,.933,1),palevioletred:Float32Array.of(.859,.439,.576,1),papayawhip:Float32Array.of(1,.937,.835,1),peachpuff:Float32Array.of(1,.855,.725,1),peru:Float32Array.of(.804,.522,.247,1),pink:Float32Array.of(1,.753,.796,1),plum:Float32Array.of(.867,.627,
.867,1),powderblue:Float32Array.of(.69,.878,.902,1),purple:Float32Array.of(.502,0,.502,1),rebeccapurple:Float32Array.of(.4,.2,.6,1),red:Float32Array.of(1,0,0,1),rosybrown:Float32Array.of(.737,.561,.561,1),royalblue:Float32Array.of(.255,.412,.882,1),saddlebrown:Float32Array.of(.545,.271,.075,1),salmon:Float32Array.of(.98,.502,.447,1),sandybrown:Float32Array.of(.957,.643,.376,1),seagreen:Float32Array.of(.18,.545,.341,1),seashell:Float32Array.of(1,.961,.933,1),sienna:Float32Array.of(.627,.322,.176,1),
silver:Float32Array.of(.753,.753,.753,1),skyblue:Float32Array.of(.529,.808,.922,1),slateblue:Float32Array.of(.416,.353,.804,1),slategray:Float32Array.of(.439,.502,.565,1),slategrey:Float32Array.of(.439,.502,.565,1),snow:Float32Array.of(1,.98,.98,1),springgreen:Float32Array.of(0,1,.498,1),steelblue:Float32Array.of(.275,.51,.706,1),tan:Float32Array.of(.824,.706,.549,1),teal:Float32Array.of(0,.502,.502,1),thistle:Float32Array.of(.847,.749,.847,1),tomato:Float32Array.of(1,.388,.278,1),transparent:Float32Array.of(0,
0,0,0),turquoise:Float32Array.of(.251,.878,.816,1),violet:Float32Array.of(.933,.51,.933,1),wheat:Float32Array.of(.961,.871,.702,1),white:Float32Array.of(1,1,1,1),whitesmoke:Float32Array.of(.961,.961,.961,1),yellow:Float32Array.of(1,1,0,1),yellowgreen:Float32Array.of(.604,.804,.196,1)};a._testing.parseColor=x;a._testing.colorToString=n;var ma=/(italic|oblique|normal|)\s*(small-caps|normal|)\s*(bold|bolder|lighter|[1-9]00|normal|)\s*([\d\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q)(.+)/,oa={"Noto Mono":{"*":null},
monospace:{"*":null}};a._testing.parseFontString=B;a.MakeCanvas=function(J,k){return(J=a.MakeSurface(J,k))?new V(J):null};a.ImageData=function(){if(2===arguments.length){var J=arguments[0],k=arguments[1];return new e(new Uint8ClampedArray(4*J*k),J,k)}if(3===arguments.length){var q=arguments[0];if(q.prototype.constructor!==Uint8ClampedArray)throw"bytes must be given as a Uint8ClampedArray";J=arguments[1];k=arguments[2];if(q%4)throw"bytes must be given in a multiple of 4";if(q%J)throw"bytes must divide evenly by width";
if(k&&k!==q/(4*J))throw"invalid height given";return new e(q,J,q/(4*J))}throw"invalid number of arguments - takes 2 or 3, saw "+arguments.length;}})()})(f);var sa={},ta;for(ta in f)f.hasOwnProperty(ta)&&(sa[ta]=f[ta]);var ua="./this.program";function va(a,b){throw b;}var xa=!1,ya=!1,za=!1,Aa=!1;xa="object"===typeof window;ya="function"===typeof importScripts;za="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;Aa=!xa&&!za&&!ya;
var Ba="",Ca,Da,Ea,Ia;
if(za)Ba=ya?__webpack_require__(5622).dirname(Ba)+"/":__dirname+"/",Ca=function(a,b){Ea||(Ea=__webpack_require__(5747));Ia||(Ia=__webpack_require__(5622));a=Ia.normalize(a);return Ea.readFileSync(a,b?null:"utf8")},Da=function(a){a=Ca(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(ua=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(a){if(!(a instanceof Ja))throw a;}),process.on("unhandledRejection",Ka),va=function(a){process.exit(a)},f.inspect=
function(){return"[Emscripten Module object]"};else if(Aa)"undefined"!=typeof read&&(Ca=function(a){return read(a)}),Da=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"function"===typeof quit&&(va=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(xa||ya)ya?Ba=self.location.href:
document.currentScript&&(Ba=document.currentScript.src),_scriptDir&&(Ba=_scriptDir),0!==Ba.indexOf("blob:")?Ba=Ba.substr(0,Ba.lastIndexOf("/")+1):Ba="",Ca=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},ya&&(Da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var La=f.print||console.log.bind(console),Ma=f.printErr||console.warn.bind(console);
for(ta in sa)sa.hasOwnProperty(ta)&&(f[ta]=sa[ta]);sa=null;f.thisProgram&&(ua=f.thisProgram);f.quit&&(va=f.quit);var Na=0,Oa;f.wasmBinary&&(Oa=f.wasmBinary);var noExitRuntime;f.noExitRuntime&&(noExitRuntime=f.noExitRuntime);"object"!==typeof WebAssembly&&Ka("no native wasm support detected");var Pa,Qa=new WebAssembly.Table({initial:9492,maximum:9492,element:"anyfunc"}),Ra=!1;function assert(a,b){a||Ka("Assertion failed: "+b)}var Sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function Ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&Sa)return Sa.decode(a.subarray(b,c));for(d="";b<c;){var h=a[b++];if(h&128){var m=a[b++]&63;if(192==(h&224))d+=String.fromCharCode((h&31)<<6|m);else{var p=a[b++]&63;h=224==(h&240)?(h&15)<<12|m<<6|p:(h&7)<<18|m<<12|p<<6|a[b++]&63;65536>h?d+=String.fromCharCode(h):(h-=65536,d+=String.fromCharCode(55296|h>>10,56320|h&1023))}}else d+=String.fromCharCode(h)}return d}function Ua(a,b){return a?Ta(v,a,b):""}
function na(a,b,c,d){if(!(0<d))return 0;var h=c;d=c+d-1;for(var m=0;m<a.length;++m){var p=a.charCodeAt(m);if(55296<=p&&57343>=p){var u=a.charCodeAt(++m);p=65536+((p&1023)<<10)|u&1023}if(127>=p){if(c>=d)break;b[c++]=p}else{if(2047>=p){if(c+1>=d)break;b[c++]=192|p>>6}else{if(65535>=p){if(c+2>=d)break;b[c++]=224|p>>12}else{if(c+3>=d)break;b[c++]=240|p>>18;b[c++]=128|p>>12&63}b[c++]=128|p>>6&63}b[c++]=128|p&63}}b[c]=0;return c-h}
function la(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var Va="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Wa(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&$a[c];)++c;c<<=1;if(32<c-a&&Va)return Va.decode(v.subarray(a,c));c=0;for(d="";;){var h=ab[a+2*c>>1];if(0==h||c==b/2)return d;++c;d+=String.fromCharCode(h)}}
function bb(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var h=0;h<c;++h)ab[b>>1]=a.charCodeAt(h),b+=2;ab[b>>1]=0;return b-d}function cb(a){return 2*a.length}function db(a,b){for(var c=0,d="";!(c>=b/4);){var h=K[a+4*c>>2];if(0==h)break;++c;65536<=h?(h-=65536,d+=String.fromCharCode(55296|h>>10,56320|h&1023)):d+=String.fromCharCode(h)}return d}
function eb(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var h=0;h<a.length;++h){var m=a.charCodeAt(h);if(55296<=m&&57343>=m){var p=a.charCodeAt(++h);m=65536+((m&1023)<<10)|p&1023}K[b>>2]=m;b+=4;if(b+4>c)break}K[b>>2]=0;return b-d}function fb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var gb,hb,v,ab,$a,K,ib,S,nb;
function ob(a){gb=a;f.HEAP8=hb=new Int8Array(a);f.HEAP16=ab=new Int16Array(a);f.HEAP32=K=new Int32Array(a);f.HEAPU8=v=new Uint8Array(a);f.HEAPU16=$a=new Uint16Array(a);f.HEAPU32=ib=new Uint32Array(a);f.HEAPF32=S=new Float32Array(a);f.HEAPF64=nb=new Float64Array(a)}var pb=f.INITIAL_MEMORY||134217728;f.wasmMemory?Pa=f.wasmMemory:Pa=new WebAssembly.Memory({initial:pb/65536,maximum:32768});Pa&&(gb=Pa.buffer);pb=gb.byteLength;ob(gb);K[470304]=7124256;
function qb(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Wh;"number"===typeof c?void 0===b.ph?f.dynCall_v(c):f.dynCall_vi(c,b.ph):c(void 0===b.ph?null:b.ph)}}}var rb=[],sb=[],tb=[],ub=[];function vb(){var a=f.preRun.shift();rb.unshift(a)}var wb=Math.ceil,xb=Math.floor,yb=0,zb=null,Ab=null;f.preloadedImages={};f.preloadedAudios={};
function Ka(a){if(f.onAbort)f.onAbort(a);Ma(a);Ra=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ea(a);throw a;}function Bb(a){var b=Db;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Eb(){return Bb("data:application/octet-stream;base64,")}var Db="canvaskit.wasm";if(!Eb()){var Fb=Db;Db=f.locateFile?f.locateFile(Fb,Ba):Ba+Fb}
function Gb(){try{if(Oa)return new Uint8Array(Oa);if(Da)return Da(Db);throw"both async and sync fetching of the wasm failed";}catch(a){Ka(a)}}function Hb(){return Oa||!xa&&!ya||"function"!==typeof fetch||Bb("file://")?new Promise(function(a){a(Gb())}):fetch(Db,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+Db+"'";return a.arrayBuffer()}).catch(function(){return Gb()})}sb.push({Wh:function(){Ib()}});
function Jb(a){this.Wf=a-16;this.vi=function(b){K[this.Wf+8>>2]=b};this.si=function(b){K[this.Wf+0>>2]=b};this.ti=function(){K[this.Wf+4>>2]=0};this.ri=function(){hb[this.Wf+12>>0]=0};this.ui=function(){hb[this.Wf+13>>0]=0};this.ci=function(b,c){this.vi(b);this.si(c);this.ti();this.ri();this.ui()}}function Kb(){return 0<Kb.Bh}var Lb={},Mb=[null,[],[]],Nb={},Ob={};function Pb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Qb(a){return this.fromWireType(ib[a>>2])}var Rb={},Sb={},Tb={};
function Ub(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Vb(a,b){a=Ub(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Wb(a){var b=Error,c=Vb(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Xb=void 0;function Yb(a){throw new Xb(a);}
function Zb(a,b,c){function d(u){u=c(u);u.length!==a.length&&Yb("Mismatched type converter count");for(var z=0;z<a.length;++z)$b(a[z],u[z])}a.forEach(function(u){Tb[u]=b});var h=Array(b.length),m=[],p=0;b.forEach(function(u,z){Sb.hasOwnProperty(u)?h[z]=Sb[u]:(m.push(u),Rb.hasOwnProperty(u)||(Rb[u]=[]),Rb[u].push(function(){h[z]=Sb[u];++p;p===m.length&&d(h)}))});0===m.length&&d(h)}var ac={};
function bc(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var cc=void 0;function dc(a){for(var b="";v[a];)b+=cc[v[a++]];return b}var ec=void 0;function X(a){throw new ec(a);}
function $b(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||X('type "'+d+'" must have a positive integer typeid pointer');if(Sb.hasOwnProperty(a)){if(c.bi)return;X("Cannot register type '"+d+"' twice")}Sb[a]=b;delete Tb[a];Rb.hasOwnProperty(a)&&(b=Rb[a],delete Rb[a],b.forEach(function(h){h()}))}function nc(a){return{count:a.count,Mg:a.Mg,Zg:a.Zg,Wf:a.Wf,cg:a.cg,kg:a.kg,ng:a.ng}}
function oc(a){X(a.Sf.cg.Yf.name+" instance already deleted")}var pc=!1;function qc(){}function rc(a){--a.count.value;0===a.count.value&&(a.kg?a.ng.mg(a.kg):a.cg.Yf.mg(a.Wf))}
function sc(a){if("undefined"===typeof FinalizationGroup)return sc=function(b){return b},a;pc=new FinalizationGroup(function(b){for(var c=b.next();!c.done;c=b.next())c=c.value,c.Wf?rc(c):console.warn("object already deleted: "+c.Wf)});sc=function(b){pc.register(b,b.Sf,b.Sf);return b};qc=function(b){pc.unregister(b.Sf)};return sc(a)}var tc=void 0,uc=[];function vc(){for(;uc.length;){var a=uc.pop();a.Sf.Mg=!1;a["delete"]()}}function wc(){}var xc={};
function yc(a,b,c){if(void 0===a[b].eg){var d=a[b];a[b]=function(){a[b].eg.hasOwnProperty(arguments.length)||X("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].eg+")!");return a[b].eg[arguments.length].apply(this,arguments)};a[b].eg=[];a[b].eg[d.Kg]=d}}
function zc(a,b,c){f.hasOwnProperty(a)?((void 0===c||void 0!==f[a].eg&&void 0!==f[a].eg[c])&&X("Cannot register public name '"+a+"' twice"),yc(f,a,a),f.hasOwnProperty(c)&&X("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),f[a].eg[c]=b):(f[a]=b,void 0!==c&&(f[a].Mi=c))}function Ac(a,b,c,d,h,m,p,u){this.name=a;this.constructor=b;this.Ng=c;this.mg=d;this.pg=h;this.Zh=m;this.bh=p;this.Sh=u;this.ni=[]}
function Bc(a,b,c){for(;b!==c;)b.bh||X("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.bh(a),b=b.pg;return a}function Cc(a,b){if(null===b)return this.uh&&X("null is not a valid "+this.name),0;b.Sf||X('Cannot pass "'+Dc(b)+'" as a '+this.name);b.Sf.Wf||X("Cannot pass deleted object as a pointer of type "+this.name);return Bc(b.Sf.Wf,b.Sf.cg.Yf,this.Yf)}
function Ec(a,b){if(null===b){this.uh&&X("null is not a valid "+this.name);if(this.hh){var c=this.$g();null!==a&&a.push(this.mg,c);return c}return 0}b.Sf||X('Cannot pass "'+Dc(b)+'" as a '+this.name);b.Sf.Wf||X("Cannot pass deleted object as a pointer of type "+this.name);!this.gh&&b.Sf.cg.gh&&X("Cannot convert argument of type "+(b.Sf.ng?b.Sf.ng.name:b.Sf.cg.name)+" to parameter type "+this.name);c=Bc(b.Sf.Wf,b.Sf.cg.Yf,this.Yf);if(this.hh)switch(void 0===b.Sf.kg&&X("Passing raw pointer to smart pointer is illegal"),
this.wi){case 0:b.Sf.ng===this?c=b.Sf.kg:X("Cannot convert argument of type "+(b.Sf.ng?b.Sf.ng.name:b.Sf.cg.name)+" to parameter type "+this.name);break;case 1:c=b.Sf.kg;break;case 2:if(b.Sf.ng===this)c=b.Sf.kg;else{var d=b.clone();c=this.oi(c,Fc(function(){d["delete"]()}));null!==a&&a.push(this.mg,c)}break;default:X("Unsupporting sharing policy")}return c}
function Gc(a,b){if(null===b)return this.uh&&X("null is not a valid "+this.name),0;b.Sf||X('Cannot pass "'+Dc(b)+'" as a '+this.name);b.Sf.Wf||X("Cannot pass deleted object as a pointer of type "+this.name);b.Sf.cg.gh&&X("Cannot convert argument of type "+b.Sf.cg.name+" to parameter type "+this.name);return Bc(b.Sf.Wf,b.Sf.cg.Yf,this.Yf)}function Hc(a,b,c){if(b===c)return a;if(void 0===c.pg)return null;a=Hc(a,b,c.pg);return null===a?null:c.Sh(a)}var Ic={};
function Jc(a,b){for(void 0===b&&X("ptr should not be undefined");a.pg;)b=a.bh(b),a=a.pg;return Ic[b]}function Kc(a,b){b.cg&&b.Wf||Yb("makeClassHandle requires ptr and ptrType");!!b.ng!==!!b.kg&&Yb("Both smartPtrType and smartPtr must be specified");b.count={value:1};return sc(Object.create(a,{Sf:{value:b}}))}
function Lc(a,b,c,d,h,m,p,u,z,E,I){this.name=a;this.Yf=b;this.uh=c;this.gh=d;this.hh=h;this.mi=m;this.wi=p;this.Gh=u;this.$g=z;this.oi=E;this.mg=I;h||void 0!==b.pg?this.toWireType=Ec:(this.toWireType=d?Cc:Gc,this.jg=null)}function Mc(a,b,c){f.hasOwnProperty(a)||Yb("Replacing nonexistant public symbol");void 0!==f[a].eg&&void 0!==c?f[a].eg[c]=b:(f[a]=b,f[a].Kg=c)}
function Nc(a,b){a=dc(a);var c=f["dynCall_"+a];for(var d=[],h=1;h<a.length;++h)d.push("a"+h);h="return function dynCall_"+(a+"_"+b)+"("+d.join(", ")+") {\n";h+="    return dynCall(rawFunction"+(d.length?", ":"")+d.join(", ")+");\n";c=(new Function("dynCall","rawFunction",h+"};\n"))(c,b);"function"!==typeof c&&X("unknown function pointer with signature "+a+": "+b);return c}var Vc=void 0;function Wc(a){a=Xc(a);var b=dc(a);Yc(a);return b}
function Zc(a,b){function c(m){h[m]||Sb[m]||(Tb[m]?Tb[m].forEach(c):(d.push(m),h[m]=!0))}var d=[],h={};b.forEach(c);throw new Vc(a+": "+d.map(Wc).join([", "]));}function $c(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Vb(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function ad(a,b,c,d,h){var m=b.length;2>m&&X("argTypes array size mismatch! Must at least get return value and 'this' types!");var p=null!==b[1]&&null!==c,u=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].jg){u=!0;break}var z="void"!==b[0].name,E="",I="";for(c=0;c<m-2;++c)E+=(0!==c?", ":"")+"arg"+c,I+=(0!==c?", ":"")+"arg"+c+"Wired";a="return function "+Ub(a)+"("+E+") {\nif (arguments.length !== "+(m-2)+") {\nthrowBindingError('function "+a+" called with ' + arguments.length + ' arguments, expected "+
(m-2)+" args!');\n}\n";u&&(a+="var destructors = [];\n");var N=u?"destructors":"null";E="throwBindingError invoker fn runDestructors retType classParam".split(" ");d=[X,d,h,Pb,b[0],b[1]];p&&(a+="var thisWired = classParam.toWireType("+N+", this);\n");for(c=0;c<m-2;++c)a+="var arg"+c+"Wired = argType"+c+".toWireType("+N+", arg"+c+"); // "+b[c+2].name+"\n",E.push("argType"+c),d.push(b[c+2]);p&&(I="thisWired"+(0<I.length?", ":"")+I);a+=(z?"var rv = ":"")+"invoker(fn"+(0<I.length?", ":"")+I+");\n";if(u)a+=
"runDestructors(destructors);\n";else for(c=p?1:2;c<b.length;++c)m=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==b[c].jg&&(a+=m+"_dtor("+m+"); // "+b[c].name+"\n",E.push(m+"_dtor"),d.push(b[c].jg));z&&(a+="var ret = retType.fromWireType(rv);\nreturn ret;\n");E.push(a+"}\n");return $c(E).apply(null,d)}function bd(a,b){for(var c=[],d=0;d<a;d++)c.push(K[(b>>2)+d]);return c}var cd=[],dd=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function ed(a){4<a&&0===--dd[a].wh&&(dd[a]=void 0,cd.push(a))}function Fc(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=cd.length?cd.pop():dd.length;dd[b]={wh:1,value:a};return b}}
function fd(a,b,c){switch(b){case 0:return function(d){return this.fromWireType((c?hb:v)[d])};case 1:return function(d){return this.fromWireType((c?ab:$a)[d>>1])};case 2:return function(d){return this.fromWireType((c?K:ib)[d>>2])};default:throw new TypeError("Unknown integer type: "+a);}}function gd(a,b){var c=Sb[a];void 0===c&&X(b+" has unknown type "+Wc(a));return c}function Dc(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function hd(a,b){switch(b){case 2:return function(c){return this.fromWireType(S[c>>2])};case 3:return function(c){return this.fromWireType(nb[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function id(a,b,c){switch(b){case 0:return c?function(d){return hb[d]}:function(d){return v[d]};case 1:return c?function(d){return ab[d>>1]}:function(d){return $a[d>>1]};case 2:return c?function(d){return K[d>>2]}:function(d){return ib[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var jd={};function kd(a){var b=jd[a];return void 0===b?dc(a):b}var ld=[];function md(a){a||X("Cannot use deleted val. handle = "+a);return dd[a].value}
function nd(a){var b=ld.length;ld.push(a);return b}function od(a,b){for(var c=Array(a),d=0;d<a;++d)c[d]=gd(K[(b>>2)+d],"parameter "+d);return c}var pd;za?pd=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?pd=dateNow:pd=function(){return performance.now()};
function qd(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,h,m){b.drawArraysInstancedANGLE(c,d,h,m)},a.drawElementsInstanced=function(c,d,h,m,p){b.drawElementsInstancedANGLE(c,d,h,m,p)})}
function rd(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function sd(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
var td=1,ud=[],vd=[],wd=[],xd=[],yd=[],Y=[],zd=[],Ad=[],ha=[],Bd=[],Cd=[],Dd={},Ed={},Fd={},Gd=4;function Hd(a){Id||(Id=a)}function fa(a){for(var b=td++,c=a.length;c<b;c++)a[c]=null;return b}function ka(a){Jd=ha[a];f.Gi=Z=Jd&&Jd.Ah;return!(a&&!Z)}
function ja(a){a||(a=Jd);if(!a.di){a.di=!0;var b=a.Ah;qd(b);rd(b);sd(b);b.Hi=b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");b.Ii=b.getExtension("EXT_disjoint_timer_query");b.Li=b.getExtension("WEBGL_multi_draw");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Id,Jd,Kd=[];function Ld(a,b,c,d){for(var h=0;h<a;h++){var m=Z[c](),p=m&&fa(d);m?(m.name=p,d[p]=m):Hd(1282);K[b+4*h>>2]=p}}
function Md(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>Jd.version){Hd(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>Jd.version){Hd(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Hd(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Hd(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)K[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(h){Hd(1280);Ma("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+h+")");return}}break;default:Hd(1280);Ma("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}K[b>>2]=c}else Hd(1281)}
function Nd(a){var b=la(a)+1,c=Od(b);na(a,v,c,b);return c}function Pd(a){a-=5120;return 0==a?hb:1==a?v:2==a?ab:4==a?K:6==a?S:5==a||28922==a||28520==a||30779==a||30782==a?ib:$a}function Qd(a,b,c,d,h){a=Pd(a);var m=31-Math.clz32(a.BYTES_PER_ELEMENT),p=Gd;return a.subarray(h>>m,h+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<m)+p-1&-p)>>m)}var Rd=[],Sd=[],Td={};
function Ud(){if(!Vd){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ua||"./this.program"},b;for(b in Td)a[b]=Td[b];var c=[];for(b in a)c.push(b+"="+a[b]);Vd=c}return Vd}var Vd;function Wd(a){return 0===a%4&&(0!==a%100||0===a%400)}function Xd(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}
var Yd=[31,29,31,30,31,30,31,31,30,31,30,31],Zd=[31,28,31,30,31,30,31,31,30,31,30,31];function $d(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Wd(a.getFullYear())?Yd:Zd)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function ae(a,b,c,d){function h(A,R,T){for(A="number"===typeof A?A.toString():A||"";A.length<R;)A=T[0]+A;return A}function m(A,R){return h(A,R,"0")}function p(A,R){function T(wa){return 0>wa?-1:0<wa?1:0}var da;0===(da=T(A.getFullYear()-R.getFullYear()))&&0===(da=T(A.getMonth()-R.getMonth()))&&(da=T(A.getDate()-R.getDate()));return da}function u(A){switch(A.getDay()){case 0:return new Date(A.getFullYear()-1,11,29);case 1:return A;case 2:return new Date(A.getFullYear(),0,3);case 3:return new Date(A.getFullYear(),
0,2);case 4:return new Date(A.getFullYear(),0,1);case 5:return new Date(A.getFullYear()-1,11,31);case 6:return new Date(A.getFullYear()-1,11,30)}}function z(A){A=$d(new Date(A.gg+1900,0,1),A.kh);var R=new Date(A.getFullYear()+1,0,4),T=u(new Date(A.getFullYear(),0,4));R=u(R);return 0>=p(T,A)?0>=p(R,A)?A.getFullYear()+1:A.getFullYear():A.getFullYear()-1}var E=K[d+40>>2];d={Ei:K[d>>2],Di:K[d+4>>2],ih:K[d+8>>2],ah:K[d+12>>2],Og:K[d+16>>2],gg:K[d+20>>2],jh:K[d+24>>2],kh:K[d+28>>2],Oi:K[d+32>>2],Ci:K[d+
36>>2],Fi:E?Ua(E):""};c=Ua(c);E={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var I in E)c=c.replace(new RegExp(I,"g"),E[I]);var N="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Q="January February March April May June July August September October November December".split(" ");E={"%a":function(A){return N[A.jh].substring(0,3)},"%A":function(A){return N[A.jh]},"%b":function(A){return Q[A.Og].substring(0,3)},"%B":function(A){return Q[A.Og]},"%C":function(A){return m((A.gg+1900)/100|0,2)},"%d":function(A){return m(A.ah,2)},"%e":function(A){return h(A.ah,2," ")},"%g":function(A){return z(A).toString().substring(2)},"%G":function(A){return z(A)},"%H":function(A){return m(A.ih,
2)},"%I":function(A){A=A.ih;0==A?A=12:12<A&&(A-=12);return m(A,2)},"%j":function(A){return m(A.ah+Xd(Wd(A.gg+1900)?Yd:Zd,A.Og-1),3)},"%m":function(A){return m(A.Og+1,2)},"%M":function(A){return m(A.Di,2)},"%n":function(){return"\n"},"%p":function(A){return 0<=A.ih&&12>A.ih?"AM":"PM"},"%S":function(A){return m(A.Ei,2)},"%t":function(){return"\t"},"%u":function(A){return A.jh||7},"%U":function(A){var R=new Date(A.gg+1900,0,1),T=0===R.getDay()?R:$d(R,7-R.getDay());A=new Date(A.gg+1900,A.Og,A.ah);return 0>
p(T,A)?m(Math.ceil((31-T.getDate()+(Xd(Wd(A.getFullYear())?Yd:Zd,A.getMonth()-1)-31)+A.getDate())/7),2):0===p(T,R)?"01":"00"},"%V":function(A){var R=new Date(A.gg+1901,0,4),T=u(new Date(A.gg+1900,0,4));R=u(R);var da=$d(new Date(A.gg+1900,0,1),A.kh);return 0>p(da,T)?"53":0>=p(R,da)?"01":m(Math.ceil((T.getFullYear()<A.gg+1900?A.kh+32-T.getDate():A.kh+1-T.getDate())/7),2)},"%w":function(A){return A.jh},"%W":function(A){var R=new Date(A.gg,0,1),T=1===R.getDay()?R:$d(R,0===R.getDay()?1:7-R.getDay()+1);
A=new Date(A.gg+1900,A.Og,A.ah);return 0>p(T,A)?m(Math.ceil((31-T.getDate()+(Xd(Wd(A.getFullYear())?Yd:Zd,A.getMonth()-1)-31)+A.getDate())/7),2):0===p(T,R)?"01":"00"},"%y":function(A){return(A.gg+1900).toString().substring(2)},"%Y":function(A){return A.gg+1900},"%z":function(A){A=A.Ci;var R=0<=A;A=Math.abs(A)/60;return(R?"+":"-")+String("0000"+(A/60*100+A%60)).slice(-4)},"%Z":function(A){return A.Fi},"%%":function(){return"%"}};for(I in E)0<=c.indexOf(I)&&(c=c.replace(new RegExp(I,"g"),E[I](d)));
I=be(c);if(I.length>b)return 0;hb.set(I,a);return I.length-1}Xb=f.InternalError=Wb("InternalError");for(var ce=Array(256),de=0;256>de;++de)ce[de]=String.fromCharCode(de);cc=ce;ec=f.BindingError=Wb("BindingError");wc.prototype.isAliasOf=function(a){if(!(this instanceof wc&&a instanceof wc))return!1;var b=this.Sf.cg.Yf,c=this.Sf.Wf,d=a.Sf.cg.Yf;for(a=a.Sf.Wf;b.pg;)c=b.bh(c),b=b.pg;for(;d.pg;)a=d.bh(a),d=d.pg;return b===d&&c===a};
wc.prototype.clone=function(){this.Sf.Wf||oc(this);if(this.Sf.Zg)return this.Sf.count.value+=1,this;var a=sc(Object.create(Object.getPrototypeOf(this),{Sf:{value:nc(this.Sf)}}));a.Sf.count.value+=1;a.Sf.Mg=!1;return a};wc.prototype["delete"]=function(){this.Sf.Wf||oc(this);this.Sf.Mg&&!this.Sf.Zg&&X("Object already scheduled for deletion");qc(this);rc(this.Sf);this.Sf.Zg||(this.Sf.kg=void 0,this.Sf.Wf=void 0)};wc.prototype.isDeleted=function(){return!this.Sf.Wf};
wc.prototype.deleteLater=function(){this.Sf.Wf||oc(this);this.Sf.Mg&&!this.Sf.Zg&&X("Object already scheduled for deletion");uc.push(this);1===uc.length&&tc&&tc(vc);this.Sf.Mg=!0;return this};Lc.prototype.$h=function(a){this.Gh&&(a=this.Gh(a));return a};Lc.prototype.Eh=function(a){this.mg&&this.mg(a)};Lc.prototype.argPackAdvance=8;Lc.prototype.readValueFromPointer=Qb;Lc.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
Lc.prototype.fromWireType=function(a){function b(){return this.hh?Kc(this.Yf.Ng,{cg:this.mi,Wf:c,ng:this,kg:a}):Kc(this.Yf.Ng,{cg:this,Wf:a})}var c=this.$h(a);if(!c)return this.Eh(a),null;var d=Jc(this.Yf,c);if(void 0!==d){if(0===d.Sf.count.value)return d.Sf.Wf=c,d.Sf.kg=a,d.clone();d=d.clone();this.Eh(a);return d}d=this.Yf.Zh(c);d=xc[d];if(!d)return b.call(this);d=this.gh?d.Qh:d.pointerType;var h=Hc(c,this.Yf,d.Yf);return null===h?b.call(this):this.hh?Kc(d.Yf.Ng,{cg:d,Wf:h,ng:this,kg:a}):Kc(d.Yf.Ng,
{cg:d,Wf:h})};f.getInheritedInstanceCount=function(){return Object.keys(Ic).length};f.getLiveInheritedInstances=function(){var a=[],b;for(b in Ic)Ic.hasOwnProperty(b)&&a.push(Ic[b]);return a};f.flushPendingDeletes=vc;f.setDelayFunction=function(a){tc=a;uc.length&&tc&&tc(vc)};Vc=f.UnboundTypeError=Wb("UnboundTypeError");f.count_emval_handles=function(){for(var a=0,b=5;b<dd.length;++b)void 0!==dd[b]&&++a;return a};
f.get_first_emval=function(){for(var a=5;a<dd.length;++a)if(void 0!==dd[a])return dd[a];return null};for(var Z,ee=0;32>ee;++ee)Kd.push(Array(ee));var fe=new Float32Array(288);for(ee=0;288>ee;++ee)Rd[ee]=fe.subarray(0,ee+1);var ge=new Int32Array(288);for(ee=0;288>ee;++ee)Sd[ee]=ge.subarray(0,ee+1);function be(a){var b=Array(la(a)+1);na(a,b,0,b.length);return b}
var Ae={O:function(a){return Od(a+16)+16},N:function(a,b,c){(new Jb(a)).ci(b,c);"uncaught_exception"in Kb?Kb.Bh++:Kb.Bh=1;throw a;},vb:function(){K[he()>>2]=63;return-1},Q:function(){return 0},Bb:function(){},xb:function(){return 0},yb:function(a,b,c,d,h,m){m<<=12;0!==(d&16)&&0!==a%16384?b=-28:0!==(d&32)?(a=ie(16384,b))?(je(a,0,b),Lb[a]={ki:a,ji:b,Ph:!0,fd:h,Ni:c,flags:d,offset:m},b=a):b=-48:b=-52;return b},zb:function(a,b){if(-1===(a|0)||0===b)a=-28;else{var c=Lb[a];c&&b===c.ji&&(Lb[a]=null,c.Ph&&
Yc(c.ki));a=0}return a},S:function(){},Ab:function(){},R:function(){},F:function(a){var b=Ob[a];delete Ob[a];var c=b.elements,d=c.length,h=c.map(function(u){return u.th}).concat(c.map(function(u){return u.yh})),m=b.$g,p=b.mg;Zb([a],h,function(u){c.forEach(function(z,E){var I=u[E],N=z.rh,Q=z.sh,A=u[E+d],R=z.xh,T=z.zh;z.read=function(da){return I.fromWireType(N(Q,da))};z.write=function(da,wa){var U=[];R(T,da,A.toWireType(U,wa));Pb(U)}});return[{name:b.name,fromWireType:function(z){for(var E=Array(d),
I=0;I<d;++I)E[I]=c[I].read(z);p(z);return E},toWireType:function(z,E){if(d!==E.length)throw new TypeError("Incorrect number of tuple elements for "+b.name+": expected="+d+", actual="+E.length);for(var I=m(),N=0;N<d;++N)c[N].write(I,E[N]);null!==z&&z.push(p,I);return I},argPackAdvance:8,readValueFromPointer:Qb,jg:p}]})},v:function(a){var b=ac[a];delete ac[a];var c=b.$g,d=b.mg,h=b.Fh,m=h.map(function(p){return p.th}).concat(h.map(function(p){return p.yh}));Zb([a],m,function(p){var u={};h.forEach(function(z,
E){var I=p[E],N=z.rh,Q=z.sh,A=p[E+h.length],R=z.xh,T=z.zh;u[z.Uh]={read:function(da){return I.fromWireType(N(Q,da))},write:function(da,wa){var U=[];R(T,da,A.toWireType(U,wa));Pb(U)}}});return[{name:b.name,fromWireType:function(z){var E={},I;for(I in u)E[I]=u[I].read(z);d(z);return E},toWireType:function(z,E){for(var I in u)if(!(I in E))throw new TypeError('Missing field:  "'+I+'"');var N=c();for(I in u)u[I].write(N,E[I]);null!==z&&z.push(d,N);return N},argPackAdvance:8,readValueFromPointer:Qb,jg:d}]})},
Eb:function(a,b,c,d,h){var m=bc(c);b=dc(b);$b(a,{name:b,fromWireType:function(p){return!!p},toWireType:function(p,u){return u?d:h},argPackAdvance:8,readValueFromPointer:function(p){if(1===c)var u=hb;else if(2===c)u=ab;else if(4===c)u=K;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(u[p>>m])},jg:null})},h:function(a,b,c,d,h,m,p,u,z,E,I,N,Q){I=dc(I);m=Nc(h,m);u&&(u=Nc(p,u));E&&(E=Nc(z,E));Q=Nc(N,Q);var A=Ub(I);zc(A,function(){Zc("Cannot construct "+I+" due to unbound types",
[d])});Zb([a,b,c],d?[d]:[],function(R){R=R[0];if(d){var T=R.Yf;var da=T.Ng}else da=wc.prototype;R=Vb(A,function(){if(Object.getPrototypeOf(this)!==wa)throw new ec("Use 'new' to construct "+I);if(void 0===U.wg)throw new ec(I+" has no accessible constructor");var Cb=U.wg[arguments.length];if(void 0===Cb)throw new ec("Tried to invoke ctor of "+I+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(U.wg).toString()+") parameters instead!");return Cb.apply(this,arguments)});
var wa=Object.create(da,{constructor:{value:R}});R.prototype=wa;var U=new Ac(I,R,wa,Q,T,m,u,E);T=new Lc(I,U,!0,!1,!1);da=new Lc(I+"*",U,!1,!1,!1);var lb=new Lc(I+" const*",U,!1,!0,!1);xc[a]={pointerType:da,Qh:lb};Mc(A,R);return[T,da,lb]})},i:function(a,b,c,d,h,m,p){var u=bd(c,d);b=dc(b);m=Nc(h,m);Zb([],[a],function(z){function E(){Zc("Cannot call "+I+" due to unbound types",u)}z=z[0];var I=z.name+"."+b,N=z.Yf.constructor;void 0===N[b]?(E.Kg=c-1,N[b]=E):(yc(N,b,I),N[b].eg[c-1]=E);Zb([],u,function(Q){Q=
[Q[0],null].concat(Q.slice(1));Q=ad(I,Q,null,m,p);void 0===N[b].eg?(Q.Kg=c-1,N[b]=Q):N[b].eg[c-1]=Q;return[]});return[]})},u:function(a,b,c,d,h,m){assert(0<b);var p=bd(b,c);h=Nc(d,h);var u=[m],z=[];Zb([],[a],function(E){E=E[0];var I="constructor "+E.name;void 0===E.Yf.wg&&(E.Yf.wg=[]);if(void 0!==E.Yf.wg[b-1])throw new ec("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+E.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");
E.Yf.wg[b-1]=function(){Zc("Cannot construct "+E.name+" due to unbound types",p)};Zb([],p,function(N){E.Yf.wg[b-1]=function(){arguments.length!==b-1&&X(I+" called with "+arguments.length+" arguments, expected "+(b-1));z.length=0;u.length=b;for(var Q=1;Q<b;++Q)u[Q]=N[Q].toWireType(z,arguments[Q-1]);Q=h.apply(null,u);Pb(z);return N[0].fromWireType(Q)};return[]});return[]})},d:function(a,b,c,d,h,m,p,u){var z=bd(c,d);b=dc(b);m=Nc(h,m);Zb([],[a],function(E){function I(){Zc("Cannot call "+N+" due to unbound types",
z)}E=E[0];var N=E.name+"."+b;u&&E.Yf.ni.push(b);var Q=E.Yf.Ng,A=Q[b];void 0===A||void 0===A.eg&&A.className!==E.name&&A.Kg===c-2?(I.Kg=c-2,I.className=E.name,Q[b]=I):(yc(Q,b,N),Q[b].eg[c-2]=I);Zb([],z,function(R){R=ad(N,R,E,m,p);void 0===Q[b].eg?(R.Kg=c-2,Q[b]=R):Q[b].eg[c-2]=R;return[]});return[]})},Y:function(a,b,c){a=dc(a);Zb([],[b],function(d){d=d[0];f[a]=d.fromWireType(c);return[]})},Db:function(a,b){b=dc(b);$b(a,{name:b,fromWireType:function(c){var d=dd[c].value;ed(c);return d},toWireType:function(c,
d){return Fc(d)},argPackAdvance:8,readValueFromPointer:Qb,jg:null})},n:function(a,b,c,d){function h(){}c=bc(c);b=dc(b);h.values={};$b(a,{name:b,constructor:h,fromWireType:function(m){return this.constructor.values[m]},toWireType:function(m,p){return p.value},argPackAdvance:8,readValueFromPointer:fd(b,c,d),jg:null});zc(b,h)},m:function(a,b,c){var d=gd(a,"enum");b=dc(b);a=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Vb(d.name+"_"+b,function(){})}});a.values[c]=
d;a[b]=d},T:function(a,b,c){c=bc(c);b=dc(b);$b(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,h){if("number"!==typeof h&&"boolean"!==typeof h)throw new TypeError('Cannot convert "'+Dc(h)+'" to '+this.name);return h},argPackAdvance:8,readValueFromPointer:hd(b,c),jg:null})},o:function(a,b,c,d,h,m){var p=bd(b,c);a=dc(a);h=Nc(d,h);zc(a,function(){Zc("Cannot call "+a+" due to unbound types",p)},b-1);Zb([],p,function(u){u=[u[0],null].concat(u.slice(1));Mc(a,ad(a,u,null,h,m),b-1);return[]})},
y:function(a,b,c,d,h){function m(E){return E}b=dc(b);-1===h&&(h=4294967295);var p=bc(c);if(0===d){var u=32-8*c;m=function(E){return E<<u>>>u}}var z=-1!=b.indexOf("unsigned");$b(a,{name:b,fromWireType:m,toWireType:function(E,I){if("number"!==typeof I&&"boolean"!==typeof I)throw new TypeError('Cannot convert "'+Dc(I)+'" to '+this.name);if(I<d||I>h)throw new TypeError('Passing a number "'+Dc(I)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+h+
"]!");return z?I>>>0:I|0},argPackAdvance:8,readValueFromPointer:id(b,p,0!==d),jg:null})},x:function(a,b,c){function d(m){m>>=2;var p=ib;return new h(gb,p[m+1],p[m])}var h=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=dc(c);$b(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{bi:!0})},q:function(a,b,c,d,h,m,p,u,z,E,I,N){c=dc(c);m=Nc(h,m);u=Nc(p,u);E=Nc(z,E);N=Nc(I,N);Zb([a],[b],function(Q){Q=Q[0];return[new Lc(c,Q.Yf,!1,!1,!0,Q,
d,m,u,E,N)]})},U:function(a,b){b=dc(b);var c="std::string"===b;$b(a,{name:b,fromWireType:function(d){var h=ib[d>>2];if(c)for(var m=d+4,p=0;p<=h;++p){var u=d+4+p;if(p==h||0==v[u]){m=Ua(m,u-m);if(void 0===z)var z=m;else z+=String.fromCharCode(0),z+=m;m=u+1}}else{z=Array(h);for(p=0;p<h;++p)z[p]=String.fromCharCode(v[d+4+p]);z=z.join("")}Yc(d);return z},toWireType:function(d,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var m="string"===typeof h;m||h instanceof Uint8Array||h instanceof Uint8ClampedArray||
h instanceof Int8Array||X("Cannot pass non-string to std::string");var p=(c&&m?function(){return la(h)}:function(){return h.length})(),u=Od(4+p+1);ib[u>>2]=p;if(c&&m)na(h,v,u+4,p+1);else if(m)for(m=0;m<p;++m){var z=h.charCodeAt(m);255<z&&(Yc(u),X("String has UTF-16 code units that do not fit in 8 bits"));v[u+4+m]=z}else for(m=0;m<p;++m)v[u+4+m]=h[m];null!==d&&d.push(Yc,u);return u},argPackAdvance:8,readValueFromPointer:Qb,jg:function(d){Yc(d)}})},J:function(a,b,c){c=dc(c);if(2===b){var d=Wa;var h=
bb;var m=cb;var p=function(){return $a};var u=1}else 4===b&&(d=db,h=eb,m=fb,p=function(){return ib},u=2);$b(a,{name:c,fromWireType:function(z){for(var E=ib[z>>2],I=p(),N,Q=z+4,A=0;A<=E;++A){var R=z+4+A*b;if(A==E||0==I[R>>u])Q=d(Q,R-Q),void 0===N?N=Q:(N+=String.fromCharCode(0),N+=Q),Q=R+b}Yc(z);return N},toWireType:function(z,E){"string"!==typeof E&&X("Cannot pass non-string to C++ string type "+c);var I=m(E),N=Od(4+I+b);ib[N>>2]=I>>u;h(E,N+4,I+b);null!==z&&z.push(Yc,N);return N},argPackAdvance:8,
readValueFromPointer:Qb,jg:function(z){Yc(z)}})},H:function(a,b,c,d,h,m){Ob[a]={name:dc(b),$g:Nc(c,d),mg:Nc(h,m),elements:[]}},G:function(a,b,c,d,h,m,p,u,z){Ob[a].elements.push({th:b,rh:Nc(c,d),sh:h,yh:m,xh:Nc(p,u),zh:z})},w:function(a,b,c,d,h,m){ac[a]={name:dc(b),$g:Nc(c,d),mg:Nc(h,m),Fh:[]}},f:function(a,b,c,d,h,m,p,u,z,E){ac[a].Fh.push({Uh:dc(b),th:c,rh:Nc(d,h),sh:m,yh:p,xh:Nc(u,z),zh:E})},Fb:function(a,b){b=dc(b);$b(a,{ei:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},
B:function(a,b,c,d){a=ld[a];b=md(b);c=kd(c);a(b,c,null,d)},ia:ed,A:function(a,b){b=od(a,b);for(var c=b[0],d=c.name+"_$"+b.slice(1).map(function(E){return E.name}).join("_")+"$",h=["retType"],m=[c],p="",u=0;u<a-1;++u)p+=(0!==u?", ":"")+"arg"+u,h.push("argType"+u),m.push(b[1+u]);d="return function "+Ub("methodCaller_"+d)+"(handle, name, destructors, args) {\n";var z=0;for(u=0;u<a-1;++u)d+="    var arg"+u+" = argType"+u+".readValueFromPointer(args"+(z?"+"+z:"")+");\n",z+=b[u+1].argPackAdvance;d+="    var rv = handle[name]("+
p+");\n";for(u=0;u<a-1;++u)b[u+1].deleteObject&&(d+="    argType"+u+".deleteObject(arg"+u+");\n");c.ei||(d+="    return retType.toWireType(destructors, rv);\n");h.push(d+"};\n");a=$c(h).apply(null,m);return nd(a)},mb:function(a){4<a&&(dd[a].wh+=1)},ta:function(){return Fc([])},Ea:function(a){return Fc(kd(a))},kb:function(){return Fc({})},E:function(a,b,c){a=md(a);b=md(b);c=md(c);a[b]=c},z:function(a,b){a=gd(a,"_emval_take_value");a=a.readValueFromPointer(b);return Fc(a)},b:function(){Ka()},rb:function(a,
b){if(0===a)a=Date.now();else if(1===a||4===a)a=pd();else return K[he()>>2]=28,-1;K[b>>2]=a/1E3|0;K[b+4>>2]=a%1E3*1E6|0;return 0},Vc:function(a){Z.activeTexture(a)},Wc:function(a,b){Z.attachShader(vd[a],zd[b])},Xc:function(a,b,c){Z.bindAttribLocation(vd[a],b,Ua(c))},Yc:function(a,b){35051==a?Z.qh=b:35052==a&&(Z.Lg=b);Z.bindBuffer(a,ud[b])},ac:function(a,b){Z.bindFramebuffer(a,wd[b])},bc:function(a,b){Z.bindRenderbuffer(a,xd[b])},Ob:function(a,b){Z.bindSampler(a,Bd[b])},Zc:function(a,b){Z.bindTexture(a,
yd[b])},rc:function(a){Z.bindVertexArray(Ad[a])},uc:function(a){Z.bindVertexArray(Ad[a])},_c:function(a,b,c,d){Z.blendColor(a,b,c,d)},$c:function(a){Z.blendEquation(a)},ad:function(a,b){Z.blendFunc(a,b)},Vb:function(a,b,c,d,h,m,p,u,z,E){Z.blitFramebuffer(a,b,c,d,h,m,p,u,z,E)},bd:function(a,b,c,d){2<=Jd.version?c?Z.bufferData(a,v,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?v.subarray(c,c+b):b,d)},cd:function(a,b,c,d){2<=Jd.version?Z.bufferSubData(a,b,v,d,c):Z.bufferSubData(a,b,v.subarray(d,d+c))},
cc:function(a){return Z.checkFramebufferStatus(a)},_:function(a){Z.clear(a)},$:function(a,b,c,d){Z.clearColor(a,b,c,d)},aa:function(a){Z.clearStencil(a)},eb:function(a,b,c,d){return Z.clientWaitSync(Cd[a],b,(c>>>0)+4294967296*d)},ba:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},ca:function(a){Z.compileShader(zd[a])},da:function(a,b,c,d,h,m,p,u){2<=Jd.version?Z.Lg?Z.compressedTexImage2D(a,b,c,d,h,m,p,u):Z.compressedTexImage2D(a,b,c,d,h,m,v,u,p):Z.compressedTexImage2D(a,b,c,d,h,m,u?v.subarray(u,u+
p):null)},ea:function(a,b,c,d,h,m,p,u,z){2<=Jd.version?Z.Lg?Z.compressedTexSubImage2D(a,b,c,d,h,m,p,u,z):Z.compressedTexSubImage2D(a,b,c,d,h,m,p,v,z,u):Z.compressedTexSubImage2D(a,b,c,d,h,m,p,z?v.subarray(z,z+u):null)},fa:function(a,b,c,d,h,m,p,u){Z.copyTexSubImage2D(a,b,c,d,h,m,p,u)},ga:function(){var a=fa(vd),b=Z.createProgram();b.name=a;vd[a]=b;return a},ha:function(a){var b=fa(zd);zd[b]=Z.createShader(a);return b},ja:function(a){Z.cullFace(a)},ka:function(a,b){for(var c=0;c<a;c++){var d=K[b+4*
c>>2],h=ud[d];h&&(Z.deleteBuffer(h),h.name=0,ud[d]=null,d==Z.qh&&(Z.qh=0),d==Z.Lg&&(Z.Lg=0))}},dc:function(a,b){for(var c=0;c<a;++c){var d=K[b+4*c>>2],h=wd[d];h&&(Z.deleteFramebuffer(h),h.name=0,wd[d]=null)}},la:function(a){if(a){var b=vd[a];b?(Z.deleteProgram(b),b.name=0,vd[a]=null,Dd[a]=null):Hd(1281)}},ec:function(a,b){for(var c=0;c<a;c++){var d=K[b+4*c>>2],h=xd[d];h&&(Z.deleteRenderbuffer(h),h.name=0,xd[d]=null)}},Pb:function(a,b){for(var c=0;c<a;c++){var d=K[b+4*c>>2],h=Bd[d];h&&(Z.deleteSampler(h),
h.name=0,Bd[d]=null)}},ma:function(a){if(a){var b=zd[a];b?(Z.deleteShader(b),zd[a]=null):Hd(1281)}},Xb:function(a){if(a){var b=Cd[a];b?(Z.deleteSync(b),b.name=0,Cd[a]=null):Hd(1281)}},na:function(a,b){for(var c=0;c<a;c++){var d=K[b+4*c>>2],h=yd[d];h&&(Z.deleteTexture(h),h.name=0,yd[d]=null)}},sc:function(a,b){for(var c=0;c<a;c++){var d=K[b+4*c>>2];Z.deleteVertexArray(Ad[d]);Ad[d]=null}},vc:function(a,b){for(var c=0;c<a;c++){var d=K[b+4*c>>2];Z.deleteVertexArray(Ad[d]);Ad[d]=null}},oa:function(a){Z.depthMask(!!a)},
pa:function(a){Z.disable(a)},qa:function(a){Z.disableVertexAttribArray(a)},ra:function(a,b,c){Z.drawArrays(a,b,c)},pc:function(a,b,c,d){Z.drawArraysInstanced(a,b,c,d)},nc:function(a,b){for(var c=Kd[a],d=0;d<a;d++)c[d]=K[b+4*d>>2];Z.drawBuffers(c)},sa:function(a,b,c,d){Z.drawElements(a,b,c,d)},qc:function(a,b,c,d,h){Z.drawElementsInstanced(a,b,c,d,h)},jc:function(a,b,c,d,h,m){Z.drawElements(a,d,h,m)},ua:function(a){Z.enable(a)},va:function(a){Z.enableVertexAttribArray(a)},Tb:function(a,b){return(a=
Z.fenceSync(a,b))?(b=fa(Cd),a.name=b,Cd[b]=a,b):0},wa:function(){Z.finish()},xa:function(){Z.flush()},fc:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,xd[d])},gc:function(a,b,c,d,h){Z.framebufferTexture2D(a,b,c,yd[d],h)},ya:function(a){Z.frontFace(a)},za:function(a,b){Ld(a,b,"createBuffer",ud)},hc:function(a,b){Ld(a,b,"createFramebuffer",wd)},ic:function(a,b){Ld(a,b,"createRenderbuffer",xd)},Qb:function(a,b){Ld(a,b,"createSampler",Bd)},Aa:function(a,b){Ld(a,b,"createTexture",yd)},tc:function(a,
b){Ld(a,b,"createVertexArray",Ad)},wc:function(a,b){Ld(a,b,"createVertexArray",Ad)},Yb:function(a){Z.generateMipmap(a)},Ba:function(a,b,c){c?K[c>>2]=Z.getBufferParameter(a,b):Hd(1281)},Ca:function(){var a=Z.getError()||Id;Id=0;return a},Zb:function(a,b,c,d){a=Z.getFramebufferAttachmentParameter(a,b,c);if(a instanceof WebGLRenderbuffer||a instanceof WebGLTexture)a=a.name|0;K[d>>2]=a},cb:function(a,b){Md(a,b)},Da:function(a,b,c,d){a=Z.getProgramInfoLog(vd[a]);null===a&&(a="(unknown error)");b=0<b&&
d?na(a,v,d,b):0;c&&(K[c>>2]=b)},Fa:function(a,b,c){if(c)if(a>=td)Hd(1281);else{var d=Dd[a];if(d)if(35716==b)a=Z.getProgramInfoLog(vd[a]),null===a&&(a="(unknown error)"),K[c>>2]=a.length+1;else if(35719==b)K[c>>2]=d.vh;else if(35722==b){if(-1==d.Xg){a=vd[a];var h=Z.getProgramParameter(a,35721);for(b=d.Xg=0;b<h;++b)d.Xg=Math.max(d.Xg,Z.getActiveAttrib(a,b).name.length+1)}K[c>>2]=d.Xg}else if(35381==b){if(-1==d.Yg)for(a=vd[a],h=Z.getProgramParameter(a,35382),b=d.Yg=0;b<h;++b)d.Yg=Math.max(d.Yg,Z.getActiveUniformBlockName(a,
b).length+1);K[c>>2]=d.Yg}else K[c>>2]=Z.getProgramParameter(vd[a],b);else Hd(1282)}else Hd(1281)},_b:function(a,b,c){c?K[c>>2]=Z.getRenderbufferParameter(a,b):Hd(1281)},Ga:function(a,b,c,d){a=Z.getShaderInfoLog(zd[a]);null===a&&(a="(unknown error)");b=0<b&&d?na(a,v,d,b):0;c&&(K[c>>2]=b)},Lb:function(a,b,c,d){a=Z.getShaderPrecisionFormat(a,b);K[c>>2]=a.rangeMin;K[c+4>>2]=a.rangeMax;K[d>>2]=a.precision},Ha:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(zd[a]),null===a&&(a="(unknown error)"),K[c>>
2]=a?a.length+1:0):35720==b?(a=Z.getShaderSource(zd[a]),K[c>>2]=a?a.length+1:0):K[c>>2]=Z.getShaderParameter(zd[a],b):Hd(1281)},L:function(a){if(Ed[a])return Ed[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Nd(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||Hd(1280);b=Nd(b);break;case 7938:b=Z.getParameter(7938);b=2<=Jd.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Nd(b);break;case 35724:b=
Z.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Nd(b);break;default:return Hd(1280),0}return Ed[a]=b},db:function(a,b){if(2>Jd.version)return Hd(1282),0;var c=Fd[a];if(c)return 0>b||b>=c.length?(Hd(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Nd(d)}),c=Fd[a]=c,0>b||b>=c.length?(Hd(1281),
0):c[b];default:return Hd(1280),0}},Ia:function(a,b){b=Ua(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Dd[a]&&Dd[a].Hh[b])&&0<=c&&c<a[0]?a[1]+c:-1},Mb:function(a,b,c){for(var d=Kd[b],h=0;h<b;h++)d[h]=K[c+4*h>>2];Z.invalidateFramebuffer(a,d)},Nb:function(a,b,c,d,h,m,p){for(var u=Kd[b],z=0;z<b;z++)u[z]=K[c+4*z>>2];Z.invalidateSubFramebuffer(a,u,d,h,m,p)},Ub:function(a){return Z.isSync(Cd[a])},Ja:function(a){return(a=yd[a])?
Z.isTexture(a):0},Ka:function(a){Z.lineWidth(a)},La:function(a){Z.linkProgram(vd[a]);var b=vd[a];a=Dd[a]={Hh:{},vh:0,Xg:-1,Yg:-1};for(var c=a.Hh,d=Z.getProgramParameter(b,35718),h=0;h<d;++h){var m=Z.getActiveUniform(b,h),p=m.name;a.vh=Math.max(a.vh,p.length+1);"]"==p.slice(-1)&&(p=p.slice(0,p.lastIndexOf("[")));var u=Z.getUniformLocation(b,p);if(u){var z=fa(Y);c[p]=[m.size,z];Y[z]=u;for(var E=1;E<m.size;++E)u=Z.getUniformLocation(b,p+"["+E+"]"),z=fa(Y),Y[z]=u}}},Ma:function(a,b){3317==a&&(Gd=b);Z.pixelStorei(a,
b)},oc:function(a){Z.readBuffer(a)},Na:function(a,b,c,d,h,m,p){if(2<=Jd.version)if(Z.qh)Z.readPixels(a,b,c,d,h,m,p);else{var u=Pd(m);Z.readPixels(a,b,c,d,h,m,u,p>>31-Math.clz32(u.BYTES_PER_ELEMENT))}else(p=Qd(m,h,c,d,p))?Z.readPixels(a,b,c,d,h,m,p):Hd(1280)},$b:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},Wb:function(a,b,c,d,h){Z.renderbufferStorageMultisample(a,b,c,d,h)},Rb:function(a,b,c){Z.samplerParameteri(Bd[a],b,c)},Sb:function(a,b,c){Z.samplerParameteri(Bd[a],b,K[c>>2])},Oa:function(a,
b,c,d){Z.scissor(a,b,c,d)},Pa:function(a,b,c,d){for(var h="",m=0;m<b;++m){var p=d?K[d+4*m>>2]:-1;h+=Ua(K[c+4*m>>2],0>p?void 0:p)}Z.shaderSource(zd[a],h)},Qa:function(a,b,c){Z.stencilFunc(a,b,c)},Ra:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},Sa:function(a){Z.stencilMask(a)},Ta:function(a,b){Z.stencilMaskSeparate(a,b)},Ua:function(a,b,c){Z.stencilOp(a,b,c)},Va:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},Wa:function(a,b,c,d,h,m,p,u,z){if(2<=Jd.version)if(Z.Lg)Z.texImage2D(a,b,c,d,h,m,p,u,
z);else if(z){var E=Pd(u);Z.texImage2D(a,b,c,d,h,m,p,u,E,z>>31-Math.clz32(E.BYTES_PER_ELEMENT))}else Z.texImage2D(a,b,c,d,h,m,p,u,null);else Z.texImage2D(a,b,c,d,h,m,p,u,z?Qd(u,p,d,h,z):null)},Xa:function(a,b,c){Z.texParameterf(a,b,c)},Ya:function(a,b,c){Z.texParameterf(a,b,S[c>>2])},Za:function(a,b,c){Z.texParameteri(a,b,c)},_a:function(a,b,c){Z.texParameteri(a,b,K[c>>2])},kc:function(a,b,c,d,h){Z.texStorage2D(a,b,c,d,h)},$a:function(a,b,c,d,h,m,p,u,z){if(2<=Jd.version)if(Z.Lg)Z.texSubImage2D(a,
b,c,d,h,m,p,u,z);else if(z){var E=Pd(u);Z.texSubImage2D(a,b,c,d,h,m,p,u,E,z>>31-Math.clz32(E.BYTES_PER_ELEMENT))}else Z.texSubImage2D(a,b,c,d,h,m,p,u,null);else E=null,z&&(E=Qd(u,p,h,m,z)),Z.texSubImage2D(a,b,c,d,h,m,p,u,E)},ab:function(a,b){Z.uniform1f(Y[a],b)},bb:function(a,b,c){if(2<=Jd.version)Z.uniform1fv(Y[a],S,c>>2,b);else{if(288>=b)for(var d=Rd[b-1],h=0;h<b;++h)d[h]=S[c+4*h>>2];else d=S.subarray(c>>2,c+4*b>>2);Z.uniform1fv(Y[a],d)}},Rc:function(a,b){Z.uniform1i(Y[a],b)},Sc:function(a,b,c){if(2<=
Jd.version)Z.uniform1iv(Y[a],K,c>>2,b);else{if(288>=b)for(var d=Sd[b-1],h=0;h<b;++h)d[h]=K[c+4*h>>2];else d=K.subarray(c>>2,c+4*b>>2);Z.uniform1iv(Y[a],d)}},Tc:function(a,b,c){Z.uniform2f(Y[a],b,c)},Uc:function(a,b,c){if(2<=Jd.version)Z.uniform2fv(Y[a],S,c>>2,2*b);else{if(144>=b)for(var d=Rd[2*b-1],h=0;h<2*b;h+=2)d[h]=S[c+4*h>>2],d[h+1]=S[c+(4*h+4)>>2];else d=S.subarray(c>>2,c+8*b>>2);Z.uniform2fv(Y[a],d)}},Qc:function(a,b,c){Z.uniform2i(Y[a],b,c)},Pc:function(a,b,c){if(2<=Jd.version)Z.uniform2iv(Y[a],
K,c>>2,2*b);else{if(144>=b)for(var d=Sd[2*b-1],h=0;h<2*b;h+=2)d[h]=K[c+4*h>>2],d[h+1]=K[c+(4*h+4)>>2];else d=K.subarray(c>>2,c+8*b>>2);Z.uniform2iv(Y[a],d)}},Oc:function(a,b,c,d){Z.uniform3f(Y[a],b,c,d)},Nc:function(a,b,c){if(2<=Jd.version)Z.uniform3fv(Y[a],S,c>>2,3*b);else{if(96>=b)for(var d=Rd[3*b-1],h=0;h<3*b;h+=3)d[h]=S[c+4*h>>2],d[h+1]=S[c+(4*h+4)>>2],d[h+2]=S[c+(4*h+8)>>2];else d=S.subarray(c>>2,c+12*b>>2);Z.uniform3fv(Y[a],d)}},Mc:function(a,b,c,d){Z.uniform3i(Y[a],b,c,d)},Lc:function(a,b,
c){if(2<=Jd.version)Z.uniform3iv(Y[a],K,c>>2,3*b);else{if(96>=b)for(var d=Sd[3*b-1],h=0;h<3*b;h+=3)d[h]=K[c+4*h>>2],d[h+1]=K[c+(4*h+4)>>2],d[h+2]=K[c+(4*h+8)>>2];else d=K.subarray(c>>2,c+12*b>>2);Z.uniform3iv(Y[a],d)}},Kc:function(a,b,c,d,h){Z.uniform4f(Y[a],b,c,d,h)},Jc:function(a,b,c){if(2<=Jd.version)Z.uniform4fv(Y[a],S,c>>2,4*b);else{if(72>=b){var d=Rd[4*b-1],h=S;c>>=2;for(var m=0;m<4*b;m+=4){var p=c+m;d[m]=h[p];d[m+1]=h[p+1];d[m+2]=h[p+2];d[m+3]=h[p+3]}}else d=S.subarray(c>>2,c+16*b>>2);Z.uniform4fv(Y[a],
d)}},xc:function(a,b,c,d,h){Z.uniform4i(Y[a],b,c,d,h)},yc:function(a,b,c){if(2<=Jd.version)Z.uniform4iv(Y[a],K,c>>2,4*b);else{if(72>=b)for(var d=Sd[4*b-1],h=0;h<4*b;h+=4)d[h]=K[c+4*h>>2],d[h+1]=K[c+(4*h+4)>>2],d[h+2]=K[c+(4*h+8)>>2],d[h+3]=K[c+(4*h+12)>>2];else d=K.subarray(c>>2,c+16*b>>2);Z.uniform4iv(Y[a],d)}},zc:function(a,b,c,d){if(2<=Jd.version)Z.uniformMatrix2fv(Y[a],!!c,S,d>>2,4*b);else{if(72>=b)for(var h=Rd[4*b-1],m=0;m<4*b;m+=4)h[m]=S[d+4*m>>2],h[m+1]=S[d+(4*m+4)>>2],h[m+2]=S[d+(4*m+8)>>
2],h[m+3]=S[d+(4*m+12)>>2];else h=S.subarray(d>>2,d+16*b>>2);Z.uniformMatrix2fv(Y[a],!!c,h)}},Ac:function(a,b,c,d){if(2<=Jd.version)Z.uniformMatrix3fv(Y[a],!!c,S,d>>2,9*b);else{if(32>=b)for(var h=Rd[9*b-1],m=0;m<9*b;m+=9)h[m]=S[d+4*m>>2],h[m+1]=S[d+(4*m+4)>>2],h[m+2]=S[d+(4*m+8)>>2],h[m+3]=S[d+(4*m+12)>>2],h[m+4]=S[d+(4*m+16)>>2],h[m+5]=S[d+(4*m+20)>>2],h[m+6]=S[d+(4*m+24)>>2],h[m+7]=S[d+(4*m+28)>>2],h[m+8]=S[d+(4*m+32)>>2];else h=S.subarray(d>>2,d+36*b>>2);Z.uniformMatrix3fv(Y[a],!!c,h)}},Bc:function(a,
b,c,d){if(2<=Jd.version)Z.uniformMatrix4fv(Y[a],!!c,S,d>>2,16*b);else{if(18>=b){var h=Rd[16*b-1],m=S;d>>=2;for(var p=0;p<16*b;p+=16){var u=d+p;h[p]=m[u];h[p+1]=m[u+1];h[p+2]=m[u+2];h[p+3]=m[u+3];h[p+4]=m[u+4];h[p+5]=m[u+5];h[p+6]=m[u+6];h[p+7]=m[u+7];h[p+8]=m[u+8];h[p+9]=m[u+9];h[p+10]=m[u+10];h[p+11]=m[u+11];h[p+12]=m[u+12];h[p+13]=m[u+13];h[p+14]=m[u+14];h[p+15]=m[u+15]}}else h=S.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(Y[a],!!c,h)}},Cc:function(a){Z.useProgram(vd[a])},Dc:function(a,b){Z.vertexAttrib1f(a,
b)},Ec:function(a,b){Z.vertexAttrib2f(a,S[b>>2],S[b+4>>2])},Fc:function(a,b){Z.vertexAttrib3f(a,S[b>>2],S[b+4>>2],S[b+8>>2])},Gc:function(a,b){Z.vertexAttrib4f(a,S[b>>2],S[b+4>>2],S[b+8>>2],S[b+12>>2])},lc:function(a,b){Z.vertexAttribDivisor(a,b)},mc:function(a,b,c,d,h){Z.vertexAttribIPointer(a,b,c,d,h)},Hc:function(a,b,c,d,h,m){Z.vertexAttribPointer(a,b,c,!!d,h,m)},Ic:function(a,b,c,d){Z.viewport(a,b,c,d)},fb:function(a,b,c,d){Z.waitSync(Cd[a],b,(c>>>0)+4294967296*d)},e:function(a,b){ke(a,b||1);
throw"longjmp";},ob:function(a,b,c){v.copyWithin(a,b,b+c)},pb:function(a){a>>>=0;var b=v.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{Pa.grow(Math.min(2147483648,d)-gb.byteLength+65535>>>16);ob(Pa.buffer);var h=1;break a}catch(m){}h=void 0}if(h)return!0}return!1},dd:function(){return Jd?Jd.ai:0},Z:function(a){return ka(a)?0:-5},tb:function(a,b){var c=0;Ud().forEach(function(d,h){var m=
b+c;h=K[a+4*h>>2]=m;for(m=0;m<d.length;++m)hb[h++>>0]=d.charCodeAt(m);hb[h>>0]=0;c+=d.length+1});return 0},ub:function(a,b){var c=Ud();K[a>>2]=c.length;var d=0;c.forEach(function(h){d+=h.length+1});K[b>>2]=d;return 0},Gb:function(a){if(!noExitRuntime&&(Ra=!0,f.onExit))f.onExit(a);va(a,new Ja(a))},I:function(){return 0},sb:function(a,b){a=1==a||2==a?2:Ka();hb[b>>0]=a;return 0},wb:function(a,b,c,d){a=Nb.Ki(a);b=Nb.Ji(a,b,c);K[d>>2]=b;return 0},nb:function(){},P:function(a,b,c,d){for(var h=0,m=0;m<c;m++){for(var p=
K[b+8*m>>2],u=K[b+(8*m+4)>>2],z=0;z<u;z++){var E=v[p+z],I=Mb[a];0===E||10===E?((1===a?La:Ma)(Ta(I,0)),I.length=0):I.push(E)}h+=u}K[d>>2]=h;return 0},a:function(){return Na|0},ed:function(a,b){Z.bindFramebuffer(a,wd[b])},gb:function(a){Z.clear(a)},Cb:function(a,b,c,d){Z.clearColor(a,b,c,d)},lb:function(a){Z.clearStencil(a)},K:function(a,b){Md(a,b)},k:le,t:me,g:ne,D:oe,Kb:pe,X:qe,W:re,V:se,j:te,l:ue,r:ve,s:we,Jb:xe,Hb:ye,Ib:ze,memory:Pa,p:function(a){a=+a;return 0<=a?+xb(a+.5):+wb(a-.5)},C:function(a){a=
+a;return 0<=a?+xb(a+.5):+wb(a-.5)},jb:function(){},M:function(){},ib:function(){},hb:function(){},c:function(a){Na=a|0},qb:function(a,b,c,d){return ae(a,b,c,d)},table:Qa};
(function(){function a(h){f.asm=h.exports;yb--;f.monitorRunDependencies&&f.monitorRunDependencies(yb);0==yb&&(null!==zb&&(clearInterval(zb),zb=null),Ab&&(h=Ab,Ab=null,h()))}function b(h){a(h.instance)}function c(h){return Hb().then(function(m){return WebAssembly.instantiate(m,d)}).then(h,function(m){Ma("failed to asynchronously prepare wasm: "+m);Ka(m)})}var d={a:Ae};yb++;f.monitorRunDependencies&&f.monitorRunDependencies(yb);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(h){return Ma("Module.instantiateWasm callback failed with error: "+
h),!1}(function(){if(Oa||"function"!==typeof WebAssembly.instantiateStreaming||Eb()||Bb("file://")||"function"!==typeof fetch)return c(b);fetch(Db,{credentials:"same-origin"}).then(function(h){return WebAssembly.instantiateStreaming(h,d).then(b,function(m){Ma("wasm streaming compile failed: "+m);Ma("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ib=f.___wasm_call_ctors=function(){return(Ib=f.___wasm_call_ctors=f.asm.fd).apply(null,arguments)},je=f._memset=function(){return(je=f._memset=f.asm.gd).apply(null,arguments)},Od=f._malloc=function(){return(Od=f._malloc=f.asm.hd).apply(null,arguments)},Yc=f._free=function(){return(Yc=f._free=f.asm.id).apply(null,arguments)},he=f.___errno_location=function(){return(he=f.___errno_location=f.asm.jd).apply(null,arguments)},Xc=f.___getTypeName=function(){return(Xc=f.___getTypeName=f.asm.kd).apply(null,
arguments)};f.___embind_register_native_and_builtin_types=function(){return(f.___embind_register_native_and_builtin_types=f.asm.ld).apply(null,arguments)};
var ke=f._setThrew=function(){return(ke=f._setThrew=f.asm.md).apply(null,arguments)},Be=f.stackSave=function(){return(Be=f.stackSave=f.asm.nd).apply(null,arguments)},Ce=f.stackRestore=function(){return(Ce=f.stackRestore=f.asm.od).apply(null,arguments)},ie=f._memalign=function(){return(ie=f._memalign=f.asm.pd).apply(null,arguments)},De=f.dynCall_v=function(){return(De=f.dynCall_v=f.asm.qd).apply(null,arguments)},Ee=f.dynCall_vi=function(){return(Ee=f.dynCall_vi=f.asm.rd).apply(null,arguments)},Fe=
f.dynCall_vii=function(){return(Fe=f.dynCall_vii=f.asm.sd).apply(null,arguments)},Ge=f.dynCall_viii=function(){return(Ge=f.dynCall_viii=f.asm.td).apply(null,arguments)},He=f.dynCall_viiii=function(){return(He=f.dynCall_viiii=f.asm.ud).apply(null,arguments)},Ie=f.dynCall_viiiii=function(){return(Ie=f.dynCall_viiiii=f.asm.vd).apply(null,arguments)},Je=f.dynCall_viiiiii=function(){return(Je=f.dynCall_viiiiii=f.asm.wd).apply(null,arguments)},Ke=f.dynCall_viiiiiiiii=function(){return(Ke=f.dynCall_viiiiiiiii=
f.asm.xd).apply(null,arguments)},Le=f.dynCall_ii=function(){return(Le=f.dynCall_ii=f.asm.yd).apply(null,arguments)},Me=f.dynCall_iii=function(){return(Me=f.dynCall_iii=f.asm.zd).apply(null,arguments)},Ne=f.dynCall_iiii=function(){return(Ne=f.dynCall_iiii=f.asm.Ad).apply(null,arguments)},Oe=f.dynCall_iiiii=function(){return(Oe=f.dynCall_iiiii=f.asm.Bd).apply(null,arguments)},Pe=f.dynCall_iiiiii=function(){return(Pe=f.dynCall_iiiiii=f.asm.Cd).apply(null,arguments)},Qe=f.dynCall_iiiiiii=function(){return(Qe=
f.dynCall_iiiiiii=f.asm.Dd).apply(null,arguments)},Re=f.dynCall_iiiiiiiiii=function(){return(Re=f.dynCall_iiiiiiiiii=f.asm.Ed).apply(null,arguments)};f.dynCall_i=function(){return(f.dynCall_i=f.asm.Fd).apply(null,arguments)};f.dynCall_viiiiiiiiiii=function(){return(f.dynCall_viiiiiiiiiii=f.asm.Gd).apply(null,arguments)};f.dynCall_viifiiiiiiii=function(){return(f.dynCall_viifiiiiiiii=f.asm.Hd).apply(null,arguments)};
f.dynCall_viffiiiiiffiii=function(){return(f.dynCall_viffiiiiiffiii=f.asm.Id).apply(null,arguments)};f.dynCall_viififiiiiiiii=function(){return(f.dynCall_viififiiiiiiii=f.asm.Jd).apply(null,arguments)};f.dynCall_viiffii=function(){return(f.dynCall_viiffii=f.asm.Kd).apply(null,arguments)};f.dynCall_viiiiiiii=function(){return(f.dynCall_viiiiiiii=f.asm.Ld).apply(null,arguments)};f.dynCall_vifffi=function(){return(f.dynCall_vifffi=f.asm.Md).apply(null,arguments)};
f.dynCall_viiffi=function(){return(f.dynCall_viiffi=f.asm.Nd).apply(null,arguments)};f.dynCall_viffffi=function(){return(f.dynCall_viffffi=f.asm.Od).apply(null,arguments)};f.dynCall_viiff=function(){return(f.dynCall_viiff=f.asm.Pd).apply(null,arguments)};f.dynCall_viiiifiii=function(){return(f.dynCall_viiiifiii=f.asm.Qd).apply(null,arguments)};f.dynCall_viiiffii=function(){return(f.dynCall_viiiffii=f.asm.Rd).apply(null,arguments)};
f.dynCall_vifff=function(){return(f.dynCall_vifff=f.asm.Sd).apply(null,arguments)};f.dynCall_viff=function(){return(f.dynCall_viff=f.asm.Td).apply(null,arguments)};f.dynCall_iifii=function(){return(f.dynCall_iifii=f.asm.Ud).apply(null,arguments)};f.dynCall_vifii=function(){return(f.dynCall_vifii=f.asm.Vd).apply(null,arguments)};f.dynCall_viif=function(){return(f.dynCall_viif=f.asm.Wd).apply(null,arguments)};f.dynCall_fi=function(){return(f.dynCall_fi=f.asm.Xd).apply(null,arguments)};
f.dynCall_fii=function(){return(f.dynCall_fii=f.asm.Yd).apply(null,arguments)};f.dynCall_vif=function(){return(f.dynCall_vif=f.asm.Zd).apply(null,arguments)};f.dynCall_iiffii=function(){return(f.dynCall_iiffii=f.asm._d).apply(null,arguments)};f.dynCall_viffii=function(){return(f.dynCall_viffii=f.asm.$d).apply(null,arguments)};f.dynCall_iiifi=function(){return(f.dynCall_iiifi=f.asm.ae).apply(null,arguments)};f.dynCall_viifi=function(){return(f.dynCall_viifi=f.asm.be).apply(null,arguments)};
f.dynCall_iif=function(){return(f.dynCall_iif=f.asm.ce).apply(null,arguments)};f.dynCall_iiiif=function(){return(f.dynCall_iiiif=f.asm.de).apply(null,arguments)};f.dynCall_viiif=function(){return(f.dynCall_viiif=f.asm.ee).apply(null,arguments)};f.dynCall_iiffi=function(){return(f.dynCall_iiffi=f.asm.fe).apply(null,arguments)};f.dynCall_viffi=function(){return(f.dynCall_viffi=f.asm.ge).apply(null,arguments)};f.dynCall_iiiiiiii=function(){return(f.dynCall_iiiiiiii=f.asm.he).apply(null,arguments)};
f.dynCall_viiiiiii=function(){return(f.dynCall_viiiiiii=f.asm.ie).apply(null,arguments)};f.dynCall_viifffffffffi=function(){return(f.dynCall_viifffffffffi=f.asm.je).apply(null,arguments)};f.dynCall_vifffiiff=function(){return(f.dynCall_vifffiiff=f.asm.ke).apply(null,arguments)};f.dynCall_vifffff=function(){return(f.dynCall_vifffff=f.asm.le).apply(null,arguments)};f.dynCall_iiff=function(){return(f.dynCall_iiff=f.asm.me).apply(null,arguments)};
f.dynCall_viffffff=function(){return(f.dynCall_viffffff=f.asm.ne).apply(null,arguments)};f.dynCall_viffff=function(){return(f.dynCall_viffff=f.asm.oe).apply(null,arguments)};f.dynCall_vifffffffff=function(){return(f.dynCall_vifffffffff=f.asm.pe).apply(null,arguments)};f.dynCall_iifff=function(){return(f.dynCall_iifff=f.asm.qe).apply(null,arguments)};f.dynCall_iiiiiiiiiiii=function(){return(f.dynCall_iiiiiiiiiiii=f.asm.re).apply(null,arguments)};
f.dynCall_iiifiiiiiiii=function(){return(f.dynCall_iiifiiiiiiii=f.asm.se).apply(null,arguments)};f.dynCall_iiffiiiiiffiii=function(){return(f.dynCall_iiffiiiiiffiii=f.asm.te).apply(null,arguments)};f.dynCall_iiififiiiiiiii=function(){return(f.dynCall_iiififiiiiiiii=f.asm.ue).apply(null,arguments)};f.dynCall_viifffi=function(){return(f.dynCall_viifffi=f.asm.ve).apply(null,arguments)};f.dynCall_viiiffi=function(){return(f.dynCall_viiiffi=f.asm.we).apply(null,arguments)};
f.dynCall_viiffffi=function(){return(f.dynCall_viiffffi=f.asm.xe).apply(null,arguments)};f.dynCall_viiiff=function(){return(f.dynCall_viiiff=f.asm.ye).apply(null,arguments)};f.dynCall_viiiiifiii=function(){return(f.dynCall_viiiiifiii=f.asm.ze).apply(null,arguments)};f.dynCall_viiiiffii=function(){return(f.dynCall_viiiiffii=f.asm.Ae).apply(null,arguments)};f.dynCall_viifff=function(){return(f.dynCall_viifff=f.asm.Be).apply(null,arguments)};
f.dynCall_iiif=function(){return(f.dynCall_iiif=f.asm.Ce).apply(null,arguments)};f.dynCall_iiiffi=function(){return(f.dynCall_iiiffi=f.asm.De).apply(null,arguments)};f.dynCall_iiifff=function(){return(f.dynCall_iiifff=f.asm.Ee).apply(null,arguments)};f.dynCall_fiii=function(){return(f.dynCall_fiii=f.asm.Fe).apply(null,arguments)};f.dynCall_viiifffffffffi=function(){return(f.dynCall_viiifffffffffi=f.asm.Ge).apply(null,arguments)};
f.dynCall_viifffiiff=function(){return(f.dynCall_viifffiiff=f.asm.He).apply(null,arguments)};f.dynCall_viifffff=function(){return(f.dynCall_viifffff=f.asm.Ie).apply(null,arguments)};f.dynCall_iiiff=function(){return(f.dynCall_iiiff=f.asm.Je).apply(null,arguments)};f.dynCall_viiffffff=function(){return(f.dynCall_viiffffff=f.asm.Ke).apply(null,arguments)};f.dynCall_viiffff=function(){return(f.dynCall_viiffff=f.asm.Le).apply(null,arguments)};
f.dynCall_viifffffffff=function(){return(f.dynCall_viifffffffff=f.asm.Me).apply(null,arguments)};f.dynCall_iiiiiiiii=function(){return(f.dynCall_iiiiiiiii=f.asm.Ne).apply(null,arguments)};f.dynCall_vidi=function(){return(f.dynCall_vidi=f.asm.Oe).apply(null,arguments)};f.dynCall_vid=function(){return(f.dynCall_vid=f.asm.Pe).apply(null,arguments)};f.dynCall_viidi=function(){return(f.dynCall_viidi=f.asm.Qe).apply(null,arguments)};f.dynCall_viid=function(){return(f.dynCall_viid=f.asm.Re).apply(null,arguments)};
f.dynCall_di=function(){return(f.dynCall_di=f.asm.Se).apply(null,arguments)};f.dynCall_dii=function(){return(f.dynCall_dii=f.asm.Te).apply(null,arguments)};f.dynCall_vifi=function(){return(f.dynCall_vifi=f.asm.Ue).apply(null,arguments)};f.dynCall_iiid=function(){return(f.dynCall_iiid=f.asm.Ve).apply(null,arguments)};f.dynCall_viffiif=function(){return(f.dynCall_viffiif=f.asm.We).apply(null,arguments)};f.dynCall_viiffiif=function(){return(f.dynCall_viiffiif=f.asm.Xe).apply(null,arguments)};
f.dynCall_fiiiiii=function(){return(f.dynCall_fiiiiii=f.asm.Ye).apply(null,arguments)};f.dynCall_viiiiiiiiiiii=function(){return(f.dynCall_viiiiiiiiiiii=f.asm.Ze).apply(null,arguments)};f.dynCall_viiiiifi=function(){return(f.dynCall_viiiiifi=f.asm._e).apply(null,arguments)};f.dynCall_viiiiiiifi=function(){return(f.dynCall_viiiiiiifi=f.asm.$e).apply(null,arguments)};f.dynCall_viiiiiiiiifi=function(){return(f.dynCall_viiiiiiiiifi=f.asm.af).apply(null,arguments)};
f.dynCall_viiiiiiiiiifi=function(){return(f.dynCall_viiiiiiiiiifi=f.asm.bf).apply(null,arguments)};f.dynCall_ji=function(){return(f.dynCall_ji=f.asm.cf).apply(null,arguments)};f.dynCall_iiji=function(){return(f.dynCall_iiji=f.asm.df).apply(null,arguments)};f.dynCall_iijjiii=function(){return(f.dynCall_iijjiii=f.asm.ef).apply(null,arguments)};f.dynCall_iij=function(){return(f.dynCall_iij=f.asm.ff).apply(null,arguments)};f.dynCall_vijjjii=function(){return(f.dynCall_vijjjii=f.asm.gf).apply(null,arguments)};
f.dynCall_viifii=function(){return(f.dynCall_viifii=f.asm.hf).apply(null,arguments)};f.dynCall_iidi=function(){return(f.dynCall_iidi=f.asm.jf).apply(null,arguments)};f.dynCall_viiiiiiiiiiiiiii=function(){return(f.dynCall_viiiiiiiiiiiiiii=f.asm.kf).apply(null,arguments)};f.dynCall_viji=function(){return(f.dynCall_viji=f.asm.lf).apply(null,arguments)};f.dynCall_vijiii=function(){return(f.dynCall_vijiii=f.asm.mf).apply(null,arguments)};
f.dynCall_fffff=function(){return(f.dynCall_fffff=f.asm.nf).apply(null,arguments)};f.dynCall_viiiiij=function(){return(f.dynCall_viiiiij=f.asm.of).apply(null,arguments)};f.dynCall_fiff=function(){return(f.dynCall_fiff=f.asm.pf).apply(null,arguments)};f.dynCall_viiiiiffii=function(){return(f.dynCall_viiiiiffii=f.asm.qf).apply(null,arguments)};f.dynCall_viifd=function(){return(f.dynCall_viifd=f.asm.rf).apply(null,arguments)};f.dynCall_viddi=function(){return(f.dynCall_viddi=f.asm.sf).apply(null,arguments)};
f.dynCall_viiiiif=function(){return(f.dynCall_viiiiif=f.asm.tf).apply(null,arguments)};f.dynCall_viijii=function(){return(f.dynCall_viijii=f.asm.uf).apply(null,arguments)};f.dynCall_fif=function(){return(f.dynCall_fif=f.asm.vf).apply(null,arguments)};f.dynCall_fiifi=function(){return(f.dynCall_fiifi=f.asm.wf).apply(null,arguments)};f.dynCall_jii=function(){return(f.dynCall_jii=f.asm.xf).apply(null,arguments)};f.dynCall_vijii=function(){return(f.dynCall_vijii=f.asm.yf).apply(null,arguments)};
f.dynCall_viiiiff=function(){return(f.dynCall_viiiiff=f.asm.zf).apply(null,arguments)};f.dynCall_viiiiiiiiii=function(){return(f.dynCall_viiiiiiiiii=f.asm.Af).apply(null,arguments)};f.dynCall_vf=function(){return(f.dynCall_vf=f.asm.Bf).apply(null,arguments)};f.dynCall_vffff=function(){return(f.dynCall_vffff=f.asm.Cf).apply(null,arguments)};f.dynCall_iiij=function(){return(f.dynCall_iiij=f.asm.Df).apply(null,arguments)};f.dynCall_viij=function(){return(f.dynCall_viij=f.asm.Ef).apply(null,arguments)};
f.dynCall_iiiij=function(){return(f.dynCall_iiiij=f.asm.Ff).apply(null,arguments)};f.dynCall_viiij=function(){return(f.dynCall_viiij=f.asm.Gf).apply(null,arguments)};f.dynCall_vij=function(){return(f.dynCall_vij=f.asm.Hf).apply(null,arguments)};f.dynCall_iiiiiiiiiii=function(){return(f.dynCall_iiiiiiiiiii=f.asm.If).apply(null,arguments)};f.dynCall_jiiii=function(){return(f.dynCall_jiiii=f.asm.Jf).apply(null,arguments)};f.dynCall_jiiiiii=function(){return(f.dynCall_jiiiiii=f.asm.Kf).apply(null,arguments)};
f.dynCall_iijj=function(){return(f.dynCall_iijj=f.asm.Lf).apply(null,arguments)};f.dynCall_jiji=function(){return(f.dynCall_jiji=f.asm.Mf).apply(null,arguments)};f.dynCall_iidiiii=function(){return(f.dynCall_iidiiii=f.asm.Nf).apply(null,arguments)};f.dynCall_iiiiij=function(){return(f.dynCall_iiiiij=f.asm.Of).apply(null,arguments)};f.dynCall_iiiiid=function(){return(f.dynCall_iiiiid=f.asm.Pf).apply(null,arguments)};f.dynCall_iiiiijj=function(){return(f.dynCall_iiiiijj=f.asm.Qf).apply(null,arguments)};
f.dynCall_iiiiiijj=function(){return(f.dynCall_iiiiiijj=f.asm.Rf).apply(null,arguments)};function le(a,b){var c=Be();try{return Le(a,b)}catch(d){Ce(c);if(d!==d+0&&"longjmp"!==d)throw d;ke(1,0)}}function me(a,b,c){var d=Be();try{return Me(a,b,c)}catch(h){Ce(d);if(h!==h+0&&"longjmp"!==h)throw h;ke(1,0)}}function ue(a,b,c){var d=Be();try{Fe(a,b,c)}catch(h){Ce(d);if(h!==h+0&&"longjmp"!==h)throw h;ke(1,0)}}
function ne(a,b,c,d){var h=Be();try{return Ne(a,b,c,d)}catch(m){Ce(h);if(m!==m+0&&"longjmp"!==m)throw m;ke(1,0)}}function te(a,b){var c=Be();try{Ee(a,b)}catch(d){Ce(c);if(d!==d+0&&"longjmp"!==d)throw d;ke(1,0)}}function ve(a,b,c,d){var h=Be();try{Ge(a,b,c,d)}catch(m){Ce(h);if(m!==m+0&&"longjmp"!==m)throw m;ke(1,0)}}function pe(a,b,c,d,h,m){var p=Be();try{return Pe(a,b,c,d,h,m)}catch(u){Ce(p);if(u!==u+0&&"longjmp"!==u)throw u;ke(1,0)}}
function we(a,b,c,d,h){var m=Be();try{He(a,b,c,d,h)}catch(p){Ce(m);if(p!==p+0&&"longjmp"!==p)throw p;ke(1,0)}}function qe(a,b,c,d,h,m,p){var u=Be();try{return Qe(a,b,c,d,h,m,p)}catch(z){Ce(u);if(z!==z+0&&"longjmp"!==z)throw z;ke(1,0)}}function xe(a,b,c,d,h,m){var p=Be();try{Ie(a,b,c,d,h,m)}catch(u){Ce(p);if(u!==u+0&&"longjmp"!==u)throw u;ke(1,0)}}function oe(a,b,c,d,h){var m=Be();try{return Oe(a,b,c,d,h)}catch(p){Ce(m);if(p!==p+0&&"longjmp"!==p)throw p;ke(1,0)}}
function ze(a,b,c,d,h,m,p,u,z,E){var I=Be();try{Ke(a,b,c,d,h,m,p,u,z,E)}catch(N){Ce(I);if(N!==N+0&&"longjmp"!==N)throw N;ke(1,0)}}function ye(a,b,c,d,h,m,p){var u=Be();try{Je(a,b,c,d,h,m,p)}catch(z){Ce(u);if(z!==z+0&&"longjmp"!==z)throw z;ke(1,0)}}function re(a,b,c,d,h,m,p,u,z,E){var I=Be();try{return Re(a,b,c,d,h,m,p,u,z,E)}catch(N){Ce(I);if(N!==N+0&&"longjmp"!==N)throw N;ke(1,0)}}function se(a){var b=Be();try{De(a)}catch(c){Ce(b);if(c!==c+0&&"longjmp"!==c)throw c;ke(1,0)}}var Se;
function Ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ab=function Te(){Se||Ue();Se||(Ab=Te)};
function Ue(){function a(){if(!Se&&(Se=!0,f.calledRun=!0,!Ra)){qb(sb);qb(tb);ca(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();ub.unshift(b)}qb(ub)}}if(!(0<yb)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)vb();qb(rb);0<yb||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}
f.run=Ue;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();noExitRuntime=!0;Ue();


  return CanvasKitInit.ready
}
);
})();
if (true)
      module.exports = CanvasKitInit;
    else {}
    

/***/ }),

/***/ 2746:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const cp = __webpack_require__(3129);
const parse = __webpack_require__(6855);
const enoent = __webpack_require__(4101);

function spawn(command, args, options) {
    // Parse the arguments
    const parsed = parse(command, args, options);

    // Spawn the child process
    const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);

    // Hook into child process "exit" event to emit an error if the command
    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    enoent.hookChildProcess(spawned, parsed);

    return spawned;
}

function spawnSync(command, args, options) {
    // Parse the arguments
    const parsed = parse(command, args, options);

    // Spawn the child process
    const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);

    // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);

    return result;
}

module.exports = spawn;
module.exports.spawn = spawn;
module.exports.sync = spawnSync;

module.exports._parse = parse;
module.exports._enoent = enoent;


/***/ }),

/***/ 4101:
/***/ ((module) => {

"use strict";


const isWin = process.platform === 'win32';

function notFoundError(original, syscall) {
    return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: 'ENOENT',
        errno: 'ENOENT',
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args,
    });
}

function hookChildProcess(cp, parsed) {
    if (!isWin) {
        return;
    }

    const originalEmit = cp.emit;

    cp.emit = function (name, arg1) {
        // If emitting "exit" event and exit code is 1, we need to check if
        // the command exists and emit an "error" instead
        // See https://github.com/IndigoUnited/node-cross-spawn/issues/16
        if (name === 'exit') {
            const err = verifyENOENT(arg1, parsed, 'spawn');

            if (err) {
                return originalEmit.call(cp, 'error', err);
            }
        }

        return originalEmit.apply(cp, arguments); // eslint-disable-line prefer-rest-params
    };
}

function verifyENOENT(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, 'spawn');
    }

    return null;
}

function verifyENOENTSync(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, 'spawnSync');
    }

    return null;
}

module.exports = {
    hookChildProcess,
    verifyENOENT,
    verifyENOENTSync,
    notFoundError,
};


/***/ }),

/***/ 6855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const path = __webpack_require__(5622);
const resolveCommand = __webpack_require__(7274);
const escape = __webpack_require__(4274);
const readShebang = __webpack_require__(1252);

const isWin = process.platform === 'win32';
const isExecutableRegExp = /\.(?:com|exe)$/i;
const isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;

function detectShebang(parsed) {
    parsed.file = resolveCommand(parsed);

    const shebang = parsed.file && readShebang(parsed.file);

    if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;

        return resolveCommand(parsed);
    }

    return parsed.file;
}

function parseNonShell(parsed) {
    if (!isWin) {
        return parsed;
    }

    // Detect & add support for shebangs
    const commandFile = detectShebang(parsed);

    // We don't need a shell if the command filename is an executable
    const needsShell = !isExecutableRegExp.test(commandFile);

    // If a shell is required, use cmd.exe and take care of escaping everything correctly
    // Note that `forceShell` is an hidden option used only in tests
    if (parsed.options.forceShell || needsShell) {
        // Need to double escape meta chars if the command is a cmd-shim located in `node_modules/.bin/`
        // The cmd-shim simply calls execute the package bin file with NodeJS, proxying any argument
        // Because the escape of metachars with ^ gets interpreted when the cmd.exe is first called,
        // we need to double escape them
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);

        // Normalize posix paths into OS compatible paths (e.g.: foo/bar -> foo\bar)
        // This is necessary otherwise it will always fail with ENOENT in those cases
        parsed.command = path.normalize(parsed.command);

        // Escape command & arguments
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));

        const shellCommand = [parsed.command].concat(parsed.args).join(' ');

        parsed.args = ['/d', '/s', '/c', `"${shellCommand}"`];
        parsed.command = process.env.comspec || 'cmd.exe';
        parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped
    }

    return parsed;
}

function parse(command, args, options) {
    // Normalize arguments, similar to nodejs
    if (args && !Array.isArray(args)) {
        options = args;
        args = null;
    }

    args = args ? args.slice(0) : []; // Clone array to avoid changing the original
    options = Object.assign({}, options); // Clone object to avoid changing the original

    // Build our parsed object
    const parsed = {
        command,
        args,
        options,
        file: undefined,
        original: {
            command,
            args,
        },
    };

    // Delegate further parsing to shell or non-shell
    return options.shell ? parsed : parseNonShell(parsed);
}

module.exports = parse;


/***/ }),

/***/ 4274:
/***/ ((module) => {

"use strict";


// See http://www.robvanderwoude.com/escapechars.php
const metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;

function escapeCommand(arg) {
    // Escape meta chars
    arg = arg.replace(metaCharsRegExp, '^$1');

    return arg;
}

function escapeArgument(arg, doubleEscapeMetaChars) {
    // Convert to string
    arg = `${arg}`;

    // Algorithm below is based on https://qntm.org/cmd

    // Sequence of backslashes followed by a double quote:
    // double up all the backslashes and escape the double quote
    arg = arg.replace(/(\\*)"/g, '$1$1\\"');

    // Sequence of backslashes followed by the end of the string
    // (which will become a double quote later):
    // double up all the backslashes
    arg = arg.replace(/(\\*)$/, '$1$1');

    // All other backslashes occur literally

    // Quote the whole thing:
    arg = `"${arg}"`;

    // Escape meta chars
    arg = arg.replace(metaCharsRegExp, '^$1');

    // Double escape meta chars if necessary
    if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, '^$1');
    }

    return arg;
}

module.exports.command = escapeCommand;
module.exports.argument = escapeArgument;


/***/ }),

/***/ 1252:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const fs = __webpack_require__(5747);
const shebangCommand = __webpack_require__(7032);

function readShebang(command) {
    // Read the first 150 bytes from the file
    const size = 150;
    const buffer = Buffer.alloc(size);

    let fd;

    try {
        fd = fs.openSync(command, 'r');
        fs.readSync(fd, buffer, 0, size, 0);
        fs.closeSync(fd);
    } catch (e) { /* Empty */ }

    // Attempt to extract shebang (null is returned if not a shebang)
    return shebangCommand(buffer.toString());
}

module.exports = readShebang;


/***/ }),

/***/ 7274:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const path = __webpack_require__(5622);
const which = __webpack_require__(4207);
const getPathKey = __webpack_require__(539);

function resolveCommandAttempt(parsed, withoutPathExt) {
    const env = parsed.options.env || process.env;
    const cwd = process.cwd();
    const hasCustomCwd = parsed.options.cwd != null;
    // Worker threads do not have process.chdir()
    const shouldSwitchCwd = hasCustomCwd && process.chdir !== undefined && !process.chdir.disabled;

    // If a custom `cwd` was specified, we need to change the process cwd
    // because `which` will do stat calls but does not support a custom cwd
    if (shouldSwitchCwd) {
        try {
            process.chdir(parsed.options.cwd);
        } catch (err) {
            /* Empty */
        }
    }

    let resolved;

    try {
        resolved = which.sync(parsed.command, {
            path: env[getPathKey({ env })],
            pathExt: withoutPathExt ? path.delimiter : undefined,
        });
    } catch (e) {
        /* Empty */
    } finally {
        if (shouldSwitchCwd) {
            process.chdir(cwd);
        }
    }

    // If we successfully resolved, ensure that an absolute path is returned
    // Note that when a custom `cwd` was used, we need to resolve to an absolute path based on it
    if (resolved) {
        resolved = path.resolve(hasCustomCwd ? parsed.options.cwd : '', resolved);
    }

    return resolved;
}

function resolveCommand(parsed) {
    return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
}

module.exports = resolveCommand;


/***/ }),

/***/ 1205:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var once = __webpack_require__(1223);

var noop = function() {};

var isRequest = function(stream) {
	return stream.setHeader && typeof stream.abort === 'function';
};

var isChildProcess = function(stream) {
	return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3
};

var eos = function(stream, opts, callback) {
	if (typeof opts === 'function') return eos(stream, null, opts);
	if (!opts) opts = {};

	callback = once(callback || noop);

	var ws = stream._writableState;
	var rs = stream._readableState;
	var readable = opts.readable || (opts.readable !== false && stream.readable);
	var writable = opts.writable || (opts.writable !== false && stream.writable);
	var cancelled = false;

	var onlegacyfinish = function() {
		if (!stream.writable) onfinish();
	};

	var onfinish = function() {
		writable = false;
		if (!readable) callback.call(stream);
	};

	var onend = function() {
		readable = false;
		if (!writable) callback.call(stream);
	};

	var onexit = function(exitCode) {
		callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
	};

	var onerror = function(err) {
		callback.call(stream, err);
	};

	var onclose = function() {
		process.nextTick(onclosenexttick);
	};

	var onclosenexttick = function() {
		if (cancelled) return;
		if (readable && !(rs && (rs.ended && !rs.destroyed))) return callback.call(stream, new Error('premature close'));
		if (writable && !(ws && (ws.ended && !ws.destroyed))) return callback.call(stream, new Error('premature close'));
	};

	var onrequest = function() {
		stream.req.on('finish', onfinish);
	};

	if (isRequest(stream)) {
		stream.on('complete', onfinish);
		stream.on('abort', onclose);
		if (stream.req) onrequest();
		else stream.on('request', onrequest);
	} else if (writable && !ws) { // legacy streams
		stream.on('end', onlegacyfinish);
		stream.on('close', onlegacyfinish);
	}

	if (isChildProcess(stream)) stream.on('exit', onexit);

	stream.on('end', onend);
	stream.on('finish', onfinish);
	if (opts.error !== false) stream.on('error', onerror);
	stream.on('close', onclose);

	return function() {
		cancelled = true;
		stream.removeListener('complete', onfinish);
		stream.removeListener('abort', onclose);
		stream.removeListener('request', onrequest);
		if (stream.req) stream.req.removeListener('finish', onfinish);
		stream.removeListener('end', onlegacyfinish);
		stream.removeListener('close', onlegacyfinish);
		stream.removeListener('finish', onfinish);
		stream.removeListener('exit', onexit);
		stream.removeListener('end', onend);
		stream.removeListener('error', onerror);
		stream.removeListener('close', onclose);
	};
};

module.exports = eos;


/***/ }),

/***/ 5447:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const path = __webpack_require__(5622);
const childProcess = __webpack_require__(3129);
const crossSpawn = __webpack_require__(2746);
const stripFinalNewline = __webpack_require__(8174);
const npmRunPath = __webpack_require__(502);
const onetime = __webpack_require__(9082);
const makeError = __webpack_require__(2187);
const normalizeStdio = __webpack_require__(166);
const {spawnedKill, spawnedCancel, setupTimeout, setExitHandler} = __webpack_require__(9819);
const {handleInput, getSpawnedResult, makeAllStream, validateInputSync} = __webpack_require__(2592);
const {mergePromise, getSpawnedPromise} = __webpack_require__(7814);
const {joinCommand, parseCommand} = __webpack_require__(8286);

const DEFAULT_MAX_BUFFER = 1000 * 1000 * 100;

const getEnv = ({env: envOption, extendEnv, preferLocal, localDir, execPath}) => {
	const env = extendEnv ? {...process.env, ...envOption} : envOption;

	if (preferLocal) {
		return npmRunPath.env({env, cwd: localDir, execPath});
	}

	return env;
};

const handleArguments = (file, args, options = {}) => {
	const parsed = crossSpawn._parse(file, args, options);
	file = parsed.command;
	args = parsed.args;
	options = parsed.options;

	options = {
		maxBuffer: DEFAULT_MAX_BUFFER,
		buffer: true,
		stripFinalNewline: true,
		extendEnv: true,
		preferLocal: false,
		localDir: options.cwd || process.cwd(),
		execPath: process.execPath,
		encoding: 'utf8',
		reject: true,
		cleanup: true,
		all: false,
		windowsHide: true,
		...options
	};

	options.env = getEnv(options);

	options.stdio = normalizeStdio(options);

	if (process.platform === 'win32' && path.basename(file, '.exe') === 'cmd') {
		// #116
		args.unshift('/q');
	}

	return {file, args, options, parsed};
};

const handleOutput = (options, value, error) => {
	if (typeof value !== 'string' && !Buffer.isBuffer(value)) {
		// When `execa.sync()` errors, we normalize it to '' to mimic `execa()`
		return error === undefined ? undefined : '';
	}

	if (options.stripFinalNewline) {
		return stripFinalNewline(value);
	}

	return value;
};

const execa = (file, args, options) => {
	const parsed = handleArguments(file, args, options);
	const command = joinCommand(file, args);

	let spawned;
	try {
		spawned = childProcess.spawn(parsed.file, parsed.args, parsed.options);
	} catch (error) {
		// Ensure the returned error is always both a promise and a child process
		const dummySpawned = new childProcess.ChildProcess();
		const errorPromise = Promise.reject(makeError({
			error,
			stdout: '',
			stderr: '',
			all: '',
			command,
			parsed,
			timedOut: false,
			isCanceled: false,
			killed: false
		}));
		return mergePromise(dummySpawned, errorPromise);
	}

	const spawnedPromise = getSpawnedPromise(spawned);
	const timedPromise = setupTimeout(spawned, parsed.options, spawnedPromise);
	const processDone = setExitHandler(spawned, parsed.options, timedPromise);

	const context = {isCanceled: false};

	spawned.kill = spawnedKill.bind(null, spawned.kill.bind(spawned));
	spawned.cancel = spawnedCancel.bind(null, spawned, context);

	const handlePromise = async () => {
		const [{error, exitCode, signal, timedOut}, stdoutResult, stderrResult, allResult] = await getSpawnedResult(spawned, parsed.options, processDone);
		const stdout = handleOutput(parsed.options, stdoutResult);
		const stderr = handleOutput(parsed.options, stderrResult);
		const all = handleOutput(parsed.options, allResult);

		if (error || exitCode !== 0 || signal !== null) {
			const returnedError = makeError({
				error,
				exitCode,
				signal,
				stdout,
				stderr,
				all,
				command,
				parsed,
				timedOut,
				isCanceled: context.isCanceled,
				killed: spawned.killed
			});

			if (!parsed.options.reject) {
				return returnedError;
			}

			throw returnedError;
		}

		return {
			command,
			exitCode: 0,
			stdout,
			stderr,
			all,
			failed: false,
			timedOut: false,
			isCanceled: false,
			killed: false
		};
	};

	const handlePromiseOnce = onetime(handlePromise);

	crossSpawn._enoent.hookChildProcess(spawned, parsed.parsed);

	handleInput(spawned, parsed.options.input);

	spawned.all = makeAllStream(spawned, parsed.options);

	return mergePromise(spawned, handlePromiseOnce);
};

module.exports = execa;

module.exports.sync = (file, args, options) => {
	const parsed = handleArguments(file, args, options);
	const command = joinCommand(file, args);

	validateInputSync(parsed.options);

	let result;
	try {
		result = childProcess.spawnSync(parsed.file, parsed.args, parsed.options);
	} catch (error) {
		throw makeError({
			error,
			stdout: '',
			stderr: '',
			all: '',
			command,
			parsed,
			timedOut: false,
			isCanceled: false,
			killed: false
		});
	}

	const stdout = handleOutput(parsed.options, result.stdout, result.error);
	const stderr = handleOutput(parsed.options, result.stderr, result.error);

	if (result.error || result.status !== 0 || result.signal !== null) {
		const error = makeError({
			stdout,
			stderr,
			error: result.error,
			signal: result.signal,
			exitCode: result.status,
			command,
			parsed,
			timedOut: result.error && result.error.code === 'ETIMEDOUT',
			isCanceled: false,
			killed: result.signal !== null
		});

		if (!parsed.options.reject) {
			return error;
		}

		throw error;
	}

	return {
		command,
		exitCode: 0,
		stdout,
		stderr,
		failed: false,
		timedOut: false,
		isCanceled: false,
		killed: false
	};
};

module.exports.command = (command, options) => {
	const [file, ...args] = parseCommand(command);
	return execa(file, args, options);
};

module.exports.commandSync = (command, options) => {
	const [file, ...args] = parseCommand(command);
	return execa.sync(file, args, options);
};

module.exports.node = (scriptPath, args, options = {}) => {
	if (args && !Array.isArray(args) && typeof args === 'object') {
		options = args;
		args = [];
	}

	const stdio = normalizeStdio.node(options);
	const defaultExecArgv = process.execArgv.filter(arg => !arg.startsWith('--inspect'));

	const {
		nodePath = process.execPath,
		nodeOptions = defaultExecArgv
	} = options;

	return execa(
		nodePath,
		[
			...nodeOptions,
			scriptPath,
			...(Array.isArray(args) ? args : [])
		],
		{
			...options,
			stdin: undefined,
			stdout: undefined,
			stderr: undefined,
			stdio,
			shell: false
		}
	);
};


/***/ }),

/***/ 8286:
/***/ ((module) => {

"use strict";

const SPACES_REGEXP = / +/g;

const joinCommand = (file, args = []) => {
	if (!Array.isArray(args)) {
		return file;
	}

	return [file, ...args].join(' ');
};

// Handle `execa.command()`
const parseCommand = command => {
	const tokens = [];
	for (const token of command.trim().split(SPACES_REGEXP)) {
		// Allow spaces to be escaped by a backslash if not meant as a delimiter
		const previousToken = tokens[tokens.length - 1];
		if (previousToken && previousToken.endsWith('\\')) {
			// Merge previous token with current one
			tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`;
		} else {
			tokens.push(token);
		}
	}

	return tokens;
};

module.exports = {
	joinCommand,
	parseCommand
};


/***/ }),

/***/ 2187:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {signalsByName} = __webpack_require__(2779);

const getErrorPrefix = ({timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled}) => {
	if (timedOut) {
		return `timed out after ${timeout} milliseconds`;
	}

	if (isCanceled) {
		return 'was canceled';
	}

	if (errorCode !== undefined) {
		return `failed with ${errorCode}`;
	}

	if (signal !== undefined) {
		return `was killed with ${signal} (${signalDescription})`;
	}

	if (exitCode !== undefined) {
		return `failed with exit code ${exitCode}`;
	}

	return 'failed';
};

const makeError = ({
	stdout,
	stderr,
	all,
	error,
	signal,
	exitCode,
	command,
	timedOut,
	isCanceled,
	killed,
	parsed: {options: {timeout}}
}) => {
	// `signal` and `exitCode` emitted on `spawned.on('exit')` event can be `null`.
	// We normalize them to `undefined`
	exitCode = exitCode === null ? undefined : exitCode;
	signal = signal === null ? undefined : signal;
	const signalDescription = signal === undefined ? undefined : signalsByName[signal].description;

	const errorCode = error && error.code;

	const prefix = getErrorPrefix({timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled});
	const execaMessage = `Command ${prefix}: ${command}`;
	const isError = Object.prototype.toString.call(error) === '[object Error]';
	const shortMessage = isError ? `${execaMessage}\n${error.message}` : execaMessage;
	const message = [shortMessage, stderr, stdout].filter(Boolean).join('\n');

	if (isError) {
		error.originalMessage = error.message;
		error.message = message;
	} else {
		error = new Error(message);
	}

	error.shortMessage = shortMessage;
	error.command = command;
	error.exitCode = exitCode;
	error.signal = signal;
	error.signalDescription = signalDescription;
	error.stdout = stdout;
	error.stderr = stderr;

	if (all !== undefined) {
		error.all = all;
	}

	if ('bufferedData' in error) {
		delete error.bufferedData;
	}

	error.failed = true;
	error.timedOut = Boolean(timedOut);
	error.isCanceled = isCanceled;
	error.killed = killed && !timedOut;

	return error;
};

module.exports = makeError;


/***/ }),

/***/ 9819:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(2087);
const onExit = __webpack_require__(4931);

const DEFAULT_FORCE_KILL_TIMEOUT = 1000 * 5;

// Monkey-patches `childProcess.kill()` to add `forceKillAfterTimeout` behavior
const spawnedKill = (kill, signal = 'SIGTERM', options = {}) => {
	const killResult = kill(signal);
	setKillTimeout(kill, signal, options, killResult);
	return killResult;
};

const setKillTimeout = (kill, signal, options, killResult) => {
	if (!shouldForceKill(signal, options, killResult)) {
		return;
	}

	const timeout = getForceKillAfterTimeout(options);
	const t = setTimeout(() => {
		kill('SIGKILL');
	}, timeout);

	// Guarded because there's no `.unref()` when `execa` is used in the renderer
	// process in Electron. This cannot be tested since we don't run tests in
	// Electron.
	// istanbul ignore else
	if (t.unref) {
		t.unref();
	}
};

const shouldForceKill = (signal, {forceKillAfterTimeout}, killResult) => {
	return isSigterm(signal) && forceKillAfterTimeout !== false && killResult;
};

const isSigterm = signal => {
	return signal === os.constants.signals.SIGTERM ||
		(typeof signal === 'string' && signal.toUpperCase() === 'SIGTERM');
};

const getForceKillAfterTimeout = ({forceKillAfterTimeout = true}) => {
	if (forceKillAfterTimeout === true) {
		return DEFAULT_FORCE_KILL_TIMEOUT;
	}

	if (!Number.isFinite(forceKillAfterTimeout) || forceKillAfterTimeout < 0) {
		throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout}\` (${typeof forceKillAfterTimeout})`);
	}

	return forceKillAfterTimeout;
};

// `childProcess.cancel()`
const spawnedCancel = (spawned, context) => {
	const killResult = spawned.kill();

	if (killResult) {
		context.isCanceled = true;
	}
};

const timeoutKill = (spawned, signal, reject) => {
	spawned.kill(signal);
	reject(Object.assign(new Error('Timed out'), {timedOut: true, signal}));
};

// `timeout` option handling
const setupTimeout = (spawned, {timeout, killSignal = 'SIGTERM'}, spawnedPromise) => {
	if (timeout === 0 || timeout === undefined) {
		return spawnedPromise;
	}

	if (!Number.isFinite(timeout) || timeout < 0) {
		throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
	}

	let timeoutId;
	const timeoutPromise = new Promise((resolve, reject) => {
		timeoutId = setTimeout(() => {
			timeoutKill(spawned, killSignal, reject);
		}, timeout);
	});

	const safeSpawnedPromise = spawnedPromise.finally(() => {
		clearTimeout(timeoutId);
	});

	return Promise.race([timeoutPromise, safeSpawnedPromise]);
};

// `cleanup` option handling
const setExitHandler = async (spawned, {cleanup, detached}, timedPromise) => {
	if (!cleanup || detached) {
		return timedPromise;
	}

	const removeExitHandler = onExit(() => {
		spawned.kill();
	});

	return timedPromise.finally(() => {
		removeExitHandler();
	});
};

module.exports = {
	spawnedKill,
	spawnedCancel,
	setupTimeout,
	setExitHandler
};


/***/ }),

/***/ 7814:
/***/ ((module) => {

"use strict";


const nativePromisePrototype = (async () => {})().constructor.prototype;
const descriptors = ['then', 'catch', 'finally'].map(property => [
	property,
	Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property)
]);

// The return value is a mixin of `childProcess` and `Promise`
const mergePromise = (spawned, promise) => {
	for (const [property, descriptor] of descriptors) {
		// Starting the main `promise` is deferred to avoid consuming streams
		const value = typeof promise === 'function' ?
			(...args) => Reflect.apply(descriptor.value, promise(), args) :
			descriptor.value.bind(promise);

		Reflect.defineProperty(spawned, property, {...descriptor, value});
	}

	return spawned;
};

// Use promises instead of `child_process` events
const getSpawnedPromise = spawned => {
	return new Promise((resolve, reject) => {
		spawned.on('exit', (exitCode, signal) => {
			resolve({exitCode, signal});
		});

		spawned.on('error', error => {
			reject(error);
		});

		if (spawned.stdin) {
			spawned.stdin.on('error', error => {
				reject(error);
			});
		}
	});
};

module.exports = {
	mergePromise,
	getSpawnedPromise
};



/***/ }),

/***/ 166:
/***/ ((module) => {

"use strict";

const aliases = ['stdin', 'stdout', 'stderr'];

const hasAlias = opts => aliases.some(alias => opts[alias] !== undefined);

const normalizeStdio = opts => {
	if (!opts) {
		return;
	}

	const {stdio} = opts;

	if (stdio === undefined) {
		return aliases.map(alias => opts[alias]);
	}

	if (hasAlias(opts)) {
		throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${aliases.map(alias => `\`${alias}\``).join(', ')}`);
	}

	if (typeof stdio === 'string') {
		return stdio;
	}

	if (!Array.isArray(stdio)) {
		throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
	}

	const length = Math.max(stdio.length, aliases.length);
	return Array.from({length}, (value, index) => stdio[index]);
};

module.exports = normalizeStdio;

// `ipc` is pushed unless it is already present
module.exports.node = opts => {
	const stdio = normalizeStdio(opts);

	if (stdio === 'ipc') {
		return 'ipc';
	}

	if (stdio === undefined || typeof stdio === 'string') {
		return [stdio, stdio, stdio, 'ipc'];
	}

	if (stdio.includes('ipc')) {
		return stdio;
	}

	return [...stdio, 'ipc'];
};


/***/ }),

/***/ 2592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const isStream = __webpack_require__(1554);
const getStream = __webpack_require__(1766);
const mergeStream = __webpack_require__(2621);

// `input` option
const handleInput = (spawned, input) => {
	// Checking for stdin is workaround for https://github.com/nodejs/node/issues/26852
	// TODO: Remove `|| spawned.stdin === undefined` once we drop support for Node.js <=12.2.0
	if (input === undefined || spawned.stdin === undefined) {
		return;
	}

	if (isStream(input)) {
		input.pipe(spawned.stdin);
	} else {
		spawned.stdin.end(input);
	}
};

// `all` interleaves `stdout` and `stderr`
const makeAllStream = (spawned, {all}) => {
	if (!all || (!spawned.stdout && !spawned.stderr)) {
		return;
	}

	const mixed = mergeStream();

	if (spawned.stdout) {
		mixed.add(spawned.stdout);
	}

	if (spawned.stderr) {
		mixed.add(spawned.stderr);
	}

	return mixed;
};

// On failure, `result.stdout|stderr|all` should contain the currently buffered stream
const getBufferedData = async (stream, streamPromise) => {
	if (!stream) {
		return;
	}

	stream.destroy();

	try {
		return await streamPromise;
	} catch (error) {
		return error.bufferedData;
	}
};

const getStreamPromise = (stream, {encoding, buffer, maxBuffer}) => {
	if (!stream || !buffer) {
		return;
	}

	if (encoding) {
		return getStream(stream, {encoding, maxBuffer});
	}

	return getStream.buffer(stream, {maxBuffer});
};

// Retrieve result of child process: exit code, signal, error, streams (stdout/stderr/all)
const getSpawnedResult = async ({stdout, stderr, all}, {encoding, buffer, maxBuffer}, processDone) => {
	const stdoutPromise = getStreamPromise(stdout, {encoding, buffer, maxBuffer});
	const stderrPromise = getStreamPromise(stderr, {encoding, buffer, maxBuffer});
	const allPromise = getStreamPromise(all, {encoding, buffer, maxBuffer: maxBuffer * 2});

	try {
		return await Promise.all([processDone, stdoutPromise, stderrPromise, allPromise]);
	} catch (error) {
		return Promise.all([
			{error, signal: error.signal, timedOut: error.timedOut},
			getBufferedData(stdout, stdoutPromise),
			getBufferedData(stderr, stderrPromise),
			getBufferedData(all, allPromise)
		]);
	}
};

const validateInputSync = ({input}) => {
	if (isStream(input)) {
		throw new TypeError('The `input` option cannot be a stream in sync mode');
	}
};

module.exports = {
	handleInput,
	makeAllStream,
	getSpawnedResult,
	validateInputSync
};



/***/ }),

/***/ 1585:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {PassThrough: PassThroughStream} = __webpack_require__(2413);

module.exports = options => {
	options = {...options};

	const {array} = options;
	let {encoding} = options;
	const isBuffer = encoding === 'buffer';
	let objectMode = false;

	if (array) {
		objectMode = !(encoding || isBuffer);
	} else {
		encoding = encoding || 'utf8';
	}

	if (isBuffer) {
		encoding = null;
	}

	const stream = new PassThroughStream({objectMode});

	if (encoding) {
		stream.setEncoding(encoding);
	}

	let length = 0;
	const chunks = [];

	stream.on('data', chunk => {
		chunks.push(chunk);

		if (objectMode) {
			length = chunks.length;
		} else {
			length += chunk.length;
		}
	});

	stream.getBufferedValue = () => {
		if (array) {
			return chunks;
		}

		return isBuffer ? Buffer.concat(chunks, length) : chunks.join('');
	};

	stream.getBufferedLength = () => length;

	return stream;
};


/***/ }),

/***/ 1766:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const {constants: BufferConstants} = __webpack_require__(4293);
const pump = __webpack_require__(8341);
const bufferStream = __webpack_require__(1585);

class MaxBufferError extends Error {
	constructor() {
		super('maxBuffer exceeded');
		this.name = 'MaxBufferError';
	}
}

async function getStream(inputStream, options) {
	if (!inputStream) {
		return Promise.reject(new Error('Expected a stream'));
	}

	options = {
		maxBuffer: Infinity,
		...options
	};

	const {maxBuffer} = options;

	let stream;
	await new Promise((resolve, reject) => {
		const rejectPromise = error => {
			// Don't retrieve an oversized buffer.
			if (error && stream.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
				error.bufferedData = stream.getBufferedValue();
			}

			reject(error);
		};

		stream = pump(inputStream, bufferStream(options), error => {
			if (error) {
				rejectPromise(error);
				return;
			}

			resolve();
		});

		stream.on('data', () => {
			if (stream.getBufferedLength() > maxBuffer) {
				rejectPromise(new MaxBufferError());
			}
		});
	});

	return stream.getBufferedValue();
}

module.exports = getStream;
// TODO: Remove this for the next major release
module.exports.default = getStream;
module.exports.buffer = (stream, options) => getStream(stream, {...options, encoding: 'buffer'});
module.exports.array = (stream, options) => getStream(stream, {...options, array: true});
module.exports.MaxBufferError = MaxBufferError;


/***/ }),

/***/ 8213:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.SIGNALS=void 0;

const SIGNALS=[
{
name:"SIGHUP",
number:1,
action:"terminate",
description:"Terminal closed",
standard:"posix"},

{
name:"SIGINT",
number:2,
action:"terminate",
description:"User interruption with CTRL-C",
standard:"ansi"},

{
name:"SIGQUIT",
number:3,
action:"core",
description:"User interruption with CTRL-\\",
standard:"posix"},

{
name:"SIGILL",
number:4,
action:"core",
description:"Invalid machine instruction",
standard:"ansi"},

{
name:"SIGTRAP",
number:5,
action:"core",
description:"Debugger breakpoint",
standard:"posix"},

{
name:"SIGABRT",
number:6,
action:"core",
description:"Aborted",
standard:"ansi"},

{
name:"SIGIOT",
number:6,
action:"core",
description:"Aborted",
standard:"bsd"},

{
name:"SIGBUS",
number:7,
action:"core",
description:
"Bus error due to misaligned, non-existing address or paging error",
standard:"bsd"},

{
name:"SIGEMT",
number:7,
action:"terminate",
description:"Command should be emulated but is not implemented",
standard:"other"},

{
name:"SIGFPE",
number:8,
action:"core",
description:"Floating point arithmetic error",
standard:"ansi"},

{
name:"SIGKILL",
number:9,
action:"terminate",
description:"Forced termination",
standard:"posix",
forced:true},

{
name:"SIGUSR1",
number:10,
action:"terminate",
description:"Application-specific signal",
standard:"posix"},

{
name:"SIGSEGV",
number:11,
action:"core",
description:"Segmentation fault",
standard:"ansi"},

{
name:"SIGUSR2",
number:12,
action:"terminate",
description:"Application-specific signal",
standard:"posix"},

{
name:"SIGPIPE",
number:13,
action:"terminate",
description:"Broken pipe or socket",
standard:"posix"},

{
name:"SIGALRM",
number:14,
action:"terminate",
description:"Timeout or timer",
standard:"posix"},

{
name:"SIGTERM",
number:15,
action:"terminate",
description:"Termination",
standard:"ansi"},

{
name:"SIGSTKFLT",
number:16,
action:"terminate",
description:"Stack is empty or overflowed",
standard:"other"},

{
name:"SIGCHLD",
number:17,
action:"ignore",
description:"Child process terminated, paused or unpaused",
standard:"posix"},

{
name:"SIGCLD",
number:17,
action:"ignore",
description:"Child process terminated, paused or unpaused",
standard:"other"},

{
name:"SIGCONT",
number:18,
action:"unpause",
description:"Unpaused",
standard:"posix",
forced:true},

{
name:"SIGSTOP",
number:19,
action:"pause",
description:"Paused",
standard:"posix",
forced:true},

{
name:"SIGTSTP",
number:20,
action:"pause",
description:"Paused using CTRL-Z or \"suspend\"",
standard:"posix"},

{
name:"SIGTTIN",
number:21,
action:"pause",
description:"Background process cannot read terminal input",
standard:"posix"},

{
name:"SIGBREAK",
number:21,
action:"terminate",
description:"User interruption with CTRL-BREAK",
standard:"other"},

{
name:"SIGTTOU",
number:22,
action:"pause",
description:"Background process cannot write to terminal output",
standard:"posix"},

{
name:"SIGURG",
number:23,
action:"ignore",
description:"Socket received out-of-band data",
standard:"bsd"},

{
name:"SIGXCPU",
number:24,
action:"core",
description:"Process timed out",
standard:"bsd"},

{
name:"SIGXFSZ",
number:25,
action:"core",
description:"File too big",
standard:"bsd"},

{
name:"SIGVTALRM",
number:26,
action:"terminate",
description:"Timeout or timer",
standard:"bsd"},

{
name:"SIGPROF",
number:27,
action:"terminate",
description:"Timeout or timer",
standard:"bsd"},

{
name:"SIGWINCH",
number:28,
action:"ignore",
description:"Terminal window size changed",
standard:"bsd"},

{
name:"SIGIO",
number:29,
action:"terminate",
description:"I/O is available",
standard:"other"},

{
name:"SIGPOLL",
number:29,
action:"terminate",
description:"Watched event",
standard:"other"},

{
name:"SIGINFO",
number:29,
action:"ignore",
description:"Request for process information",
standard:"other"},

{
name:"SIGPWR",
number:30,
action:"terminate",
description:"Device running out of power",
standard:"systemv"},

{
name:"SIGSYS",
number:31,
action:"core",
description:"Invalid system call",
standard:"other"},

{
name:"SIGUNUSED",
number:31,
action:"terminate",
description:"Invalid system call",
standard:"other"}];exports.SIGNALS=SIGNALS;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 2779:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.signalsByNumber=exports.signalsByName=void 0;var _os=__webpack_require__(2087);

var _signals=__webpack_require__(6435);
var _realtime=__webpack_require__(5295);



const getSignalsByName=function(){
const signals=(0,_signals.getSignals)();
return signals.reduce(getSignalByName,{});
};

const getSignalByName=function(
signalByNameMemo,
{name,number,description,supported,action,forced,standard})
{
return{
...signalByNameMemo,
[name]:{name,number,description,supported,action,forced,standard}};

};

const signalsByName=getSignalsByName();exports.signalsByName=signalsByName;




const getSignalsByNumber=function(){
const signals=(0,_signals.getSignals)();
const length=_realtime.SIGRTMAX+1;
const signalsA=Array.from({length},(value,number)=>
getSignalByNumber(number,signals));

return Object.assign({},...signalsA);
};

const getSignalByNumber=function(number,signals){
const signal=findSignalByNumber(number,signals);

if(signal===undefined){
return{};
}

const{name,description,supported,action,forced,standard}=signal;
return{
[number]:{
name,
number,
description,
supported,
action,
forced,
standard}};


};



const findSignalByNumber=function(number,signals){
const signal=signals.find(({name})=>_os.constants.signals[name]===number);

if(signal!==undefined){
return signal;
}

return signals.find(signalA=>signalA.number===number);
};

const signalsByNumber=getSignalsByNumber();exports.signalsByNumber=signalsByNumber;
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 5295:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.SIGRTMAX=exports.getRealtimeSignals=void 0;
const getRealtimeSignals=function(){
const length=SIGRTMAX-SIGRTMIN+1;
return Array.from({length},getRealtimeSignal);
};exports.getRealtimeSignals=getRealtimeSignals;

const getRealtimeSignal=function(value,index){
return{
name:`SIGRT${index+1}`,
number:SIGRTMIN+index,
action:"terminate",
description:"Application-specific signal (realtime)",
standard:"posix"};

};

const SIGRTMIN=34;
const SIGRTMAX=64;exports.SIGRTMAX=SIGRTMAX;
//# sourceMappingURL=realtime.js.map

/***/ }),

/***/ 6435:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.getSignals=void 0;var _os=__webpack_require__(2087);

var _core=__webpack_require__(8213);
var _realtime=__webpack_require__(5295);



const getSignals=function(){
const realtimeSignals=(0,_realtime.getRealtimeSignals)();
const signals=[..._core.SIGNALS,...realtimeSignals].map(normalizeSignal);
return signals;
};exports.getSignals=getSignals;







const normalizeSignal=function({
name,
number:defaultNumber,
description,
action,
forced=false,
standard})
{
const{
signals:{[name]:constantSignal}}=
_os.constants;
const supported=constantSignal!==undefined;
const number=supported?constantSignal:defaultNumber;
return{name,number,description,supported,action,forced,standard};
};
//# sourceMappingURL=signals.js.map

/***/ }),

/***/ 1554:
/***/ ((module) => {

"use strict";


const isStream = stream =>
	stream !== null &&
	typeof stream === 'object' &&
	typeof stream.pipe === 'function';

isStream.writable = stream =>
	isStream(stream) &&
	stream.writable !== false &&
	typeof stream._write === 'function' &&
	typeof stream._writableState === 'object';

isStream.readable = stream =>
	isStream(stream) &&
	stream.readable !== false &&
	typeof stream._read === 'function' &&
	typeof stream._readableState === 'object';

isStream.duplex = stream =>
	isStream.writable(stream) &&
	isStream.readable(stream);

isStream.transform = stream =>
	isStream.duplex(stream) &&
	typeof stream._transform === 'function' &&
	typeof stream._transformState === 'object';

module.exports = isStream;


/***/ }),

/***/ 7126:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fs = __webpack_require__(5747)
var core
if (process.platform === 'win32' || global.TESTING_WINDOWS) {
  core = __webpack_require__(2001)
} else {
  core = __webpack_require__(9728)
}

module.exports = isexe
isexe.sync = sync

function isexe (path, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = {}
  }

  if (!cb) {
    if (typeof Promise !== 'function') {
      throw new TypeError('callback not provided')
    }

    return new Promise(function (resolve, reject) {
      isexe(path, options || {}, function (er, is) {
        if (er) {
          reject(er)
        } else {
          resolve(is)
        }
      })
    })
  }

  core(path, options || {}, function (er, is) {
    // ignore EACCES because that just means we aren't allowed to run it
    if (er) {
      if (er.code === 'EACCES' || options && options.ignoreErrors) {
        er = null
        is = false
      }
    }
    cb(er, is)
  })
}

function sync (path, options) {
  // my kingdom for a filtered catch
  try {
    return core.sync(path, options || {})
  } catch (er) {
    if (options && options.ignoreErrors || er.code === 'EACCES') {
      return false
    } else {
      throw er
    }
  }
}


/***/ }),

/***/ 9728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = isexe
isexe.sync = sync

var fs = __webpack_require__(5747)

function isexe (path, options, cb) {
  fs.stat(path, function (er, stat) {
    cb(er, er ? false : checkStat(stat, options))
  })
}

function sync (path, options) {
  return checkStat(fs.statSync(path), options)
}

function checkStat (stat, options) {
  return stat.isFile() && checkMode(stat, options)
}

function checkMode (stat, options) {
  var mod = stat.mode
  var uid = stat.uid
  var gid = stat.gid

  var myUid = options.uid !== undefined ?
    options.uid : process.getuid && process.getuid()
  var myGid = options.gid !== undefined ?
    options.gid : process.getgid && process.getgid()

  var u = parseInt('100', 8)
  var g = parseInt('010', 8)
  var o = parseInt('001', 8)
  var ug = u | g

  var ret = (mod & o) ||
    (mod & g) && gid === myGid ||
    (mod & u) && uid === myUid ||
    (mod & ug) && myUid === 0

  return ret
}


/***/ }),

/***/ 2001:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = isexe
isexe.sync = sync

var fs = __webpack_require__(5747)

function checkPathExt (path, options) {
  var pathext = options.pathExt !== undefined ?
    options.pathExt : process.env.PATHEXT

  if (!pathext) {
    return true
  }

  pathext = pathext.split(';')
  if (pathext.indexOf('') !== -1) {
    return true
  }
  for (var i = 0; i < pathext.length; i++) {
    var p = pathext[i].toLowerCase()
    if (p && path.substr(-p.length).toLowerCase() === p) {
      return true
    }
  }
  return false
}

function checkStat (stat, path, options) {
  if (!stat.isSymbolicLink() && !stat.isFile()) {
    return false
  }
  return checkPathExt(path, options)
}

function isexe (path, options, cb) {
  fs.stat(path, function (er, stat) {
    cb(er, er ? false : checkStat(stat, path, options))
  })
}

function sync (path, options) {
  return checkStat(fs.statSync(path), path, options)
}


/***/ }),

/***/ 5891:
/***/ ((module, exports, __webpack_require__) => {

(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./format", "./parser"], factory);
    }
})(function () {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.isWS = exports.applyEdit = exports.setProperty = exports.removeProperty = void 0;
    var format_1 = __webpack_require__(7740);
    var parser_1 = __webpack_require__(8309);
    function removeProperty(text, path, options) {
        return setProperty(text, path, void 0, options);
    }
    exports.removeProperty = removeProperty;
    function setProperty(text, originalPath, value, options) {
        var _a;
        var path = originalPath.slice();
        var errors = [];
        var root = parser_1.parseTree(text, errors);
        var parent = void 0;
        var lastSegment = void 0;
        while (path.length > 0) {
            lastSegment = path.pop();
            parent = parser_1.findNodeAtLocation(root, path);
            if (parent === void 0 && value !== void 0) {
                if (typeof lastSegment === 'string') {
                    value = (_a = {}, _a[lastSegment] = value, _a);
                }
                else {
                    value = [value];
                }
            }
            else {
                break;
            }
        }
        if (!parent) {
            // empty document
            if (value === void 0) { // delete
                throw new Error('Can not delete in empty document');
            }
            return withFormatting(text, { offset: root ? root.offset : 0, length: root ? root.length : 0, content: JSON.stringify(value) }, options);
        }
        else if (parent.type === 'object' && typeof lastSegment === 'string' && Array.isArray(parent.children)) {
            var existing = parser_1.findNodeAtLocation(parent, [lastSegment]);
            if (existing !== void 0) {
                if (value === void 0) { // delete
                    if (!existing.parent) {
                        throw new Error('Malformed AST');
                    }
                    var propertyIndex = parent.children.indexOf(existing.parent);
                    var removeBegin = void 0;
                    var removeEnd = existing.parent.offset + existing.parent.length;
                    if (propertyIndex > 0) {
                        // remove the comma of the previous node
                        var previous = parent.children[propertyIndex - 1];
                        removeBegin = previous.offset + previous.length;
                    }
                    else {
                        removeBegin = parent.offset + 1;
                        if (parent.children.length > 1) {
                            // remove the comma of the next node
                            var next = parent.children[1];
                            removeEnd = next.offset;
                        }
                    }
                    return withFormatting(text, { offset: removeBegin, length: removeEnd - removeBegin, content: '' }, options);
                }
                else {
                    // set value of existing property
                    return withFormatting(text, { offset: existing.offset, length: existing.length, content: JSON.stringify(value) }, options);
                }
            }
            else {
                if (value === void 0) { // delete
                    return []; // property does not exist, nothing to do
                }
                var newProperty = JSON.stringify(lastSegment) + ": " + JSON.stringify(value);
                var index = options.getInsertionIndex ? options.getInsertionIndex(parent.children.map(function (p) { return p.children[0].value; })) : parent.children.length;
                var edit = void 0;
                if (index > 0) {
                    var previous = parent.children[index - 1];
                    edit = { offset: previous.offset + previous.length, length: 0, content: ',' + newProperty };
                }
                else if (parent.children.length === 0) {
                    edit = { offset: parent.offset + 1, length: 0, content: newProperty };
                }
                else {
                    edit = { offset: parent.offset + 1, length: 0, content: newProperty + ',' };
                }
                return withFormatting(text, edit, options);
            }
        }
        else if (parent.type === 'array' && typeof lastSegment === 'number' && Array.isArray(parent.children)) {
            var insertIndex = lastSegment;
            if (insertIndex === -1) {
                // Insert
                var newProperty = "" + JSON.stringify(value);
                var edit = void 0;
                if (parent.children.length === 0) {
                    edit = { offset: parent.offset + 1, length: 0, content: newProperty };
                }
                else {
                    var previous = parent.children[parent.children.length - 1];
                    edit = { offset: previous.offset + previous.length, length: 0, content: ',' + newProperty };
                }
                return withFormatting(text, edit, options);
            }
            else if (value === void 0 && parent.children.length >= 0) {
                // Removal
                var removalIndex = lastSegment;
                var toRemove = parent.children[removalIndex];
                var edit = void 0;
                if (parent.children.length === 1) {
                    // only item
                    edit = { offset: parent.offset + 1, length: parent.length - 2, content: '' };
                }
                else if (parent.children.length - 1 === removalIndex) {
                    // last item
                    var previous = parent.children[removalIndex - 1];
                    var offset = previous.offset + previous.length;
                    var parentEndOffset = parent.offset + parent.length;
                    edit = { offset: offset, length: parentEndOffset - 2 - offset, content: '' };
                }
                else {
                    edit = { offset: toRemove.offset, length: parent.children[removalIndex + 1].offset - toRemove.offset, content: '' };
                }
                return withFormatting(text, edit, options);
            }
            else if (value !== void 0) {
                var edit = void 0;
                var newProperty = "" + JSON.stringify(value);
                if (!options.isArrayInsertion && parent.children.length > lastSegment) {
                    var toModify = parent.children[lastSegment];
                    edit = { offset: toModify.offset, length: toModify.length, content: newProperty };
                }
                else if (parent.children.length === 0 || lastSegment === 0) {
                    edit = { offset: parent.offset + 1, length: 0, content: parent.children.length === 0 ? newProperty : newProperty + ',' };
                }
                else {
                    var index = lastSegment > parent.children.length ? parent.children.length : lastSegment;
                    var previous = parent.children[index - 1];
                    edit = { offset: previous.offset + previous.length, length: 0, content: ',' + newProperty };
                }
                return withFormatting(text, edit, options);
            }
            else {
                throw new Error("Can not " + (value === void 0 ? 'remove' : (options.isArrayInsertion ? 'insert' : 'modify')) + " Array index " + insertIndex + " as length is not sufficient");
            }
        }
        else {
            throw new Error("Can not add " + (typeof lastSegment !== 'number' ? 'index' : 'property') + " to parent of type " + parent.type);
        }
    }
    exports.setProperty = setProperty;
    function withFormatting(text, edit, options) {
        if (!options.formattingOptions) {
            return [edit];
        }
        // apply the edit
        var newText = applyEdit(text, edit);
        // format the new text
        var begin = edit.offset;
        var end = edit.offset + edit.content.length;
        if (edit.length === 0 || edit.content.length === 0) { // insert or remove
            while (begin > 0 && !format_1.isEOL(newText, begin - 1)) {
                begin--;
            }
            while (end < newText.length && !format_1.isEOL(newText, end)) {
                end++;
            }
        }
        var edits = format_1.format(newText, { offset: begin, length: end - begin }, options.formattingOptions);
        // apply the formatting edits and track the begin and end offsets of the changes
        for (var i = edits.length - 1; i >= 0; i--) {
            var edit_1 = edits[i];
            newText = applyEdit(newText, edit_1);
            begin = Math.min(begin, edit_1.offset);
            end = Math.max(end, edit_1.offset + edit_1.length);
            end += edit_1.content.length - edit_1.length;
        }
        // create a single edit with all changes
        var editLength = text.length - (newText.length - end) - begin;
        return [{ offset: begin, length: editLength, content: newText.substring(begin, end) }];
    }
    function applyEdit(text, edit) {
        return text.substring(0, edit.offset) + edit.content + text.substring(edit.offset + edit.length);
    }
    exports.applyEdit = applyEdit;
    function isWS(text, offset) {
        return '\r\n \t'.indexOf(text.charAt(offset)) !== -1;
    }
    exports.isWS = isWS;
});


/***/ }),

/***/ 7740:
/***/ ((module, exports, __webpack_require__) => {

(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./scanner"], factory);
    }
})(function () {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.isEOL = exports.format = void 0;
    var scanner_1 = __webpack_require__(2122);
    function format(documentText, range, options) {
        var initialIndentLevel;
        var formatText;
        var formatTextStart;
        var rangeStart;
        var rangeEnd;
        if (range) {
            rangeStart = range.offset;
            rangeEnd = rangeStart + range.length;
            formatTextStart = rangeStart;
            while (formatTextStart > 0 && !isEOL(documentText, formatTextStart - 1)) {
                formatTextStart--;
            }
            var endOffset = rangeEnd;
            while (endOffset < documentText.length && !isEOL(documentText, endOffset)) {
                endOffset++;
            }
            formatText = documentText.substring(formatTextStart, endOffset);
            initialIndentLevel = computeIndentLevel(formatText, options);
        }
        else {
            formatText = documentText;
            initialIndentLevel = 0;
            formatTextStart = 0;
            rangeStart = 0;
            rangeEnd = documentText.length;
        }
        var eol = getEOL(options, documentText);
        var lineBreak = false;
        var indentLevel = 0;
        var indentValue;
        if (options.insertSpaces) {
            indentValue = repeat(' ', options.tabSize || 4);
        }
        else {
            indentValue = '\t';
        }
        var scanner = scanner_1.createScanner(formatText, false);
        var hasError = false;
        function newLineAndIndent() {
            return eol + repeat(indentValue, initialIndentLevel + indentLevel);
        }
        function scanNext() {
            var token = scanner.scan();
            lineBreak = false;
            while (token === 15 /* Trivia */ || token === 14 /* LineBreakTrivia */) {
                lineBreak = lineBreak || (token === 14 /* LineBreakTrivia */);
                token = scanner.scan();
            }
            hasError = token === 16 /* Unknown */ || scanner.getTokenError() !== 0 /* None */;
            return token;
        }
        var editOperations = [];
        function addEdit(text, startOffset, endOffset) {
            if (!hasError && startOffset < rangeEnd && endOffset > rangeStart && documentText.substring(startOffset, endOffset) !== text) {
                editOperations.push({ offset: startOffset, length: endOffset - startOffset, content: text });
            }
        }
        var firstToken = scanNext();
        if (firstToken !== 17 /* EOF */) {
            var firstTokenStart = scanner.getTokenOffset() + formatTextStart;
            var initialIndent = repeat(indentValue, initialIndentLevel);
            addEdit(initialIndent, formatTextStart, firstTokenStart);
        }
        while (firstToken !== 17 /* EOF */) {
            var firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
            var secondToken = scanNext();
            var replaceContent = '';
            while (!lineBreak && (secondToken === 12 /* LineCommentTrivia */ || secondToken === 13 /* BlockCommentTrivia */)) {
                // comments on the same line: keep them on the same line, but ignore them otherwise
                var commentTokenStart = scanner.getTokenOffset() + formatTextStart;
                addEdit(' ', firstTokenEnd, commentTokenStart);
                firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
                replaceContent = secondToken === 12 /* LineCommentTrivia */ ? newLineAndIndent() : '';
                secondToken = scanNext();
            }
            if (secondToken === 2 /* CloseBraceToken */) {
                if (firstToken !== 1 /* OpenBraceToken */) {
                    indentLevel--;
                    replaceContent = newLineAndIndent();
                }
            }
            else if (secondToken === 4 /* CloseBracketToken */) {
                if (firstToken !== 3 /* OpenBracketToken */) {
                    indentLevel--;
                    replaceContent = newLineAndIndent();
                }
            }
            else {
                switch (firstToken) {
                    case 3 /* OpenBracketToken */:
                    case 1 /* OpenBraceToken */:
                        indentLevel++;
                        replaceContent = newLineAndIndent();
                        break;
                    case 5 /* CommaToken */:
                    case 12 /* LineCommentTrivia */:
                        replaceContent = newLineAndIndent();
                        break;
                    case 13 /* BlockCommentTrivia */:
                        if (lineBreak) {
                            replaceContent = newLineAndIndent();
                        }
                        else {
                            // symbol following comment on the same line: keep on same line, separate with ' '
                            replaceContent = ' ';
                        }
                        break;
                    case 6 /* ColonToken */:
                        replaceContent = ' ';
                        break;
                    case 10 /* StringLiteral */:
                        if (secondToken === 6 /* ColonToken */) {
                            replaceContent = '';
                            break;
                        }
                    // fall through
                    case 7 /* NullKeyword */:
                    case 8 /* TrueKeyword */:
                    case 9 /* FalseKeyword */:
                    case 11 /* NumericLiteral */:
                    case 2 /* CloseBraceToken */:
                    case 4 /* CloseBracketToken */:
                        if (secondToken === 12 /* LineCommentTrivia */ || secondToken === 13 /* BlockCommentTrivia */) {
                            replaceContent = ' ';
                        }
                        else if (secondToken !== 5 /* CommaToken */ && secondToken !== 17 /* EOF */) {
                            hasError = true;
                        }
                        break;
                    case 16 /* Unknown */:
                        hasError = true;
                        break;
                }
                if (lineBreak && (secondToken === 12 /* LineCommentTrivia */ || secondToken === 13 /* BlockCommentTrivia */)) {
                    replaceContent = newLineAndIndent();
                }
            }
            var secondTokenStart = scanner.getTokenOffset() + formatTextStart;
            addEdit(replaceContent, firstTokenEnd, secondTokenStart);
            firstToken = secondToken;
        }
        return editOperations;
    }
    exports.format = format;
    function repeat(s, count) {
        var result = '';
        for (var i = 0; i < count; i++) {
            result += s;
        }
        return result;
    }
    function computeIndentLevel(content, options) {
        var i = 0;
        var nChars = 0;
        var tabSize = options.tabSize || 4;
        while (i < content.length) {
            var ch = content.charAt(i);
            if (ch === ' ') {
                nChars++;
            }
            else if (ch === '\t') {
                nChars += tabSize;
            }
            else {
                break;
            }
            i++;
        }
        return Math.floor(nChars / tabSize);
    }
    function getEOL(options, text) {
        for (var i = 0; i < text.length; i++) {
            var ch = text.charAt(i);
            if (ch === '\r') {
                if (i + 1 < text.length && text.charAt(i + 1) === '\n') {
                    return '\r\n';
                }
                return '\r';
            }
            else if (ch === '\n') {
                return '\n';
            }
        }
        return (options && options.eol) || '\n';
    }
    function isEOL(text, offset) {
        return '\r\n'.indexOf(text.charAt(offset)) !== -1;
    }
    exports.isEOL = isEOL;
});


/***/ }),

/***/ 8309:
/***/ ((module, exports, __webpack_require__) => {

(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./scanner"], factory);
    }
})(function () {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getNodeType = exports.stripComments = exports.visit = exports.findNodeAtOffset = exports.contains = exports.getNodeValue = exports.getNodePath = exports.findNodeAtLocation = exports.parseTree = exports.parse = exports.getLocation = void 0;
    var scanner_1 = __webpack_require__(2122);
    var ParseOptions;
    (function (ParseOptions) {
        ParseOptions.DEFAULT = {
            allowTrailingComma: false
        };
    })(ParseOptions || (ParseOptions = {}));
    /**
     * For a given offset, evaluate the location in the JSON document. Each segment in the location path is either a property name or an array index.
     */
    function getLocation(text, position) {
        var segments = []; // strings or numbers
        var earlyReturnException = new Object();
        var previousNode = undefined;
        var previousNodeInst = {
            value: {},
            offset: 0,
            length: 0,
            type: 'object',
            parent: undefined
        };
        var isAtPropertyKey = false;
        function setPreviousNode(value, offset, length, type) {
            previousNodeInst.value = value;
            previousNodeInst.offset = offset;
            previousNodeInst.length = length;
            previousNodeInst.type = type;
            previousNodeInst.colonOffset = undefined;
            previousNode = previousNodeInst;
        }
        try {
            visit(text, {
                onObjectBegin: function (offset, length) {
                    if (position <= offset) {
                        throw earlyReturnException;
                    }
                    previousNode = undefined;
                    isAtPropertyKey = position > offset;
                    segments.push(''); // push a placeholder (will be replaced)
                },
                onObjectProperty: function (name, offset, length) {
                    if (position < offset) {
                        throw earlyReturnException;
                    }
                    setPreviousNode(name, offset, length, 'property');
                    segments[segments.length - 1] = name;
                    if (position <= offset + length) {
                        throw earlyReturnException;
                    }
                },
                onObjectEnd: function (offset, length) {
                    if (position <= offset) {
                        throw earlyReturnException;
                    }
                    previousNode = undefined;
                    segments.pop();
                },
                onArrayBegin: function (offset, length) {
                    if (position <= offset) {
                        throw earlyReturnException;
                    }
                    previousNode = undefined;
                    segments.push(0);
                },
                onArrayEnd: function (offset, length) {
                    if (position <= offset) {
                        throw earlyReturnException;
                    }
                    previousNode = undefined;
                    segments.pop();
                },
                onLiteralValue: function (value, offset, length) {
                    if (position < offset) {
                        throw earlyReturnException;
                    }
                    setPreviousNode(value, offset, length, getNodeType(value));
                    if (position <= offset + length) {
                        throw earlyReturnException;
                    }
                },
                onSeparator: function (sep, offset, length) {
                    if (position <= offset) {
                        throw earlyReturnException;
                    }
                    if (sep === ':' && previousNode && previousNode.type === 'property') {
                        previousNode.colonOffset = offset;
                        isAtPropertyKey = false;
                        previousNode = undefined;
                    }
                    else if (sep === ',') {
                        var last = segments[segments.length - 1];
                        if (typeof last === 'number') {
                            segments[segments.length - 1] = last + 1;
                        }
                        else {
                            isAtPropertyKey = true;
                            segments[segments.length - 1] = '';
                        }
                        previousNode = undefined;
                    }
                }
            });
        }
        catch (e) {
            if (e !== earlyReturnException) {
                throw e;
            }
        }
        return {
            path: segments,
            previousNode: previousNode,
            isAtPropertyKey: isAtPropertyKey,
            matches: function (pattern) {
                var k = 0;
                for (var i = 0; k < pattern.length && i < segments.length; i++) {
                    if (pattern[k] === segments[i] || pattern[k] === '*') {
                        k++;
                    }
                    else if (pattern[k] !== '**') {
                        return false;
                    }
                }
                return k === pattern.length;
            }
        };
    }
    exports.getLocation = getLocation;
    /**
     * Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
     * Therefore always check the errors list to find out if the input was valid.
     */
    function parse(text, errors, options) {
        if (errors === void 0) { errors = []; }
        if (options === void 0) { options = ParseOptions.DEFAULT; }
        var currentProperty = null;
        var currentParent = [];
        var previousParents = [];
        function onValue(value) {
            if (Array.isArray(currentParent)) {
                currentParent.push(value);
            }
            else if (currentProperty !== null) {
                currentParent[currentProperty] = value;
            }
        }
        var visitor = {
            onObjectBegin: function () {
                var object = {};
                onValue(object);
                previousParents.push(currentParent);
                currentParent = object;
                currentProperty = null;
            },
            onObjectProperty: function (name) {
                currentProperty = name;
            },
            onObjectEnd: function () {
                currentParent = previousParents.pop();
            },
            onArrayBegin: function () {
                var array = [];
                onValue(array);
                previousParents.push(currentParent);
                currentParent = array;
                currentProperty = null;
            },
            onArrayEnd: function () {
                currentParent = previousParents.pop();
            },
            onLiteralValue: onValue,
            onError: function (error, offset, length) {
                errors.push({ error: error, offset: offset, length: length });
            }
        };
        visit(text, visitor, options);
        return currentParent[0];
    }
    exports.parse = parse;
    /**
     * Parses the given text and returns a tree representation the JSON content. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
     */
    function parseTree(text, errors, options) {
        if (errors === void 0) { errors = []; }
        if (options === void 0) { options = ParseOptions.DEFAULT; }
        var currentParent = { type: 'array', offset: -1, length: -1, children: [], parent: undefined }; // artificial root
        function ensurePropertyComplete(endOffset) {
            if (currentParent.type === 'property') {
                currentParent.length = endOffset - currentParent.offset;
                currentParent = currentParent.parent;
            }
        }
        function onValue(valueNode) {
            currentParent.children.push(valueNode);
            return valueNode;
        }
        var visitor = {
            onObjectBegin: function (offset) {
                currentParent = onValue({ type: 'object', offset: offset, length: -1, parent: currentParent, children: [] });
            },
            onObjectProperty: function (name, offset, length) {
                currentParent = onValue({ type: 'property', offset: offset, length: -1, parent: currentParent, children: [] });
                currentParent.children.push({ type: 'string', value: name, offset: offset, length: length, parent: currentParent });
            },
            onObjectEnd: function (offset, length) {
                ensurePropertyComplete(offset + length); // in case of a missing value for a property: make sure property is complete
                currentParent.length = offset + length - currentParent.offset;
                currentParent = currentParent.parent;
                ensurePropertyComplete(offset + length);
            },
            onArrayBegin: function (offset, length) {
                currentParent = onValue({ type: 'array', offset: offset, length: -1, parent: currentParent, children: [] });
            },
            onArrayEnd: function (offset, length) {
                currentParent.length = offset + length - currentParent.offset;
                currentParent = currentParent.parent;
                ensurePropertyComplete(offset + length);
            },
            onLiteralValue: function (value, offset, length) {
                onValue({ type: getNodeType(value), offset: offset, length: length, parent: currentParent, value: value });
                ensurePropertyComplete(offset + length);
            },
            onSeparator: function (sep, offset, length) {
                if (currentParent.type === 'property') {
                    if (sep === ':') {
                        currentParent.colonOffset = offset;
                    }
                    else if (sep === ',') {
                        ensurePropertyComplete(offset);
                    }
                }
            },
            onError: function (error, offset, length) {
                errors.push({ error: error, offset: offset, length: length });
            }
        };
        visit(text, visitor, options);
        var result = currentParent.children[0];
        if (result) {
            delete result.parent;
        }
        return result;
    }
    exports.parseTree = parseTree;
    /**
     * Finds the node at the given path in a JSON DOM.
     */
    function findNodeAtLocation(root, path) {
        if (!root) {
            return undefined;
        }
        var node = root;
        for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
            var segment = path_1[_i];
            if (typeof segment === 'string') {
                if (node.type !== 'object' || !Array.isArray(node.children)) {
                    return undefined;
                }
                var found = false;
                for (var _a = 0, _b = node.children; _a < _b.length; _a++) {
                    var propertyNode = _b[_a];
                    if (Array.isArray(propertyNode.children) && propertyNode.children[0].value === segment) {
                        node = propertyNode.children[1];
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    return undefined;
                }
            }
            else {
                var index = segment;
                if (node.type !== 'array' || index < 0 || !Array.isArray(node.children) || index >= node.children.length) {
                    return undefined;
                }
                node = node.children[index];
            }
        }
        return node;
    }
    exports.findNodeAtLocation = findNodeAtLocation;
    /**
     * Gets the JSON path of the given JSON DOM node
     */
    function getNodePath(node) {
        if (!node.parent || !node.parent.children) {
            return [];
        }
        var path = getNodePath(node.parent);
        if (node.parent.type === 'property') {
            var key = node.parent.children[0].value;
            path.push(key);
        }
        else if (node.parent.type === 'array') {
            var index = node.parent.children.indexOf(node);
            if (index !== -1) {
                path.push(index);
            }
        }
        return path;
    }
    exports.getNodePath = getNodePath;
    /**
     * Evaluates the JavaScript object of the given JSON DOM node
     */
    function getNodeValue(node) {
        switch (node.type) {
            case 'array':
                return node.children.map(getNodeValue);
            case 'object':
                var obj = Object.create(null);
                for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                    var prop = _a[_i];
                    var valueNode = prop.children[1];
                    if (valueNode) {
                        obj[prop.children[0].value] = getNodeValue(valueNode);
                    }
                }
                return obj;
            case 'null':
            case 'string':
            case 'number':
            case 'boolean':
                return node.value;
            default:
                return undefined;
        }
    }
    exports.getNodeValue = getNodeValue;
    function contains(node, offset, includeRightBound) {
        if (includeRightBound === void 0) { includeRightBound = false; }
        return (offset >= node.offset && offset < (node.offset + node.length)) || includeRightBound && (offset === (node.offset + node.length));
    }
    exports.contains = contains;
    /**
     * Finds the most inner node at the given offset. If includeRightBound is set, also finds nodes that end at the given offset.
     */
    function findNodeAtOffset(node, offset, includeRightBound) {
        if (includeRightBound === void 0) { includeRightBound = false; }
        if (contains(node, offset, includeRightBound)) {
            var children = node.children;
            if (Array.isArray(children)) {
                for (var i = 0; i < children.length && children[i].offset <= offset; i++) {
                    var item = findNodeAtOffset(children[i], offset, includeRightBound);
                    if (item) {
                        return item;
                    }
                }
            }
            return node;
        }
        return undefined;
    }
    exports.findNodeAtOffset = findNodeAtOffset;
    /**
     * Parses the given text and invokes the visitor functions for each object, array and literal reached.
     */
    function visit(text, visitor, options) {
        if (options === void 0) { options = ParseOptions.DEFAULT; }
        var _scanner = scanner_1.createScanner(text, false);
        function toNoArgVisit(visitFunction) {
            return visitFunction ? function () { return visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()); } : function () { return true; };
        }
        function toOneArgVisit(visitFunction) {
            return visitFunction ? function (arg) { return visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()); } : function () { return true; };
        }
        var onObjectBegin = toNoArgVisit(visitor.onObjectBegin), onObjectProperty = toOneArgVisit(visitor.onObjectProperty), onObjectEnd = toNoArgVisit(visitor.onObjectEnd), onArrayBegin = toNoArgVisit(visitor.onArrayBegin), onArrayEnd = toNoArgVisit(visitor.onArrayEnd), onLiteralValue = toOneArgVisit(visitor.onLiteralValue), onSeparator = toOneArgVisit(visitor.onSeparator), onComment = toNoArgVisit(visitor.onComment), onError = toOneArgVisit(visitor.onError);
        var disallowComments = options && options.disallowComments;
        var allowTrailingComma = options && options.allowTrailingComma;
        function scanNext() {
            while (true) {
                var token = _scanner.scan();
                switch (_scanner.getTokenError()) {
                    case 4 /* InvalidUnicode */:
                        handleError(14 /* InvalidUnicode */);
                        break;
                    case 5 /* InvalidEscapeCharacter */:
                        handleError(15 /* InvalidEscapeCharacter */);
                        break;
                    case 3 /* UnexpectedEndOfNumber */:
                        handleError(13 /* UnexpectedEndOfNumber */);
                        break;
                    case 1 /* UnexpectedEndOfComment */:
                        if (!disallowComments) {
                            handleError(11 /* UnexpectedEndOfComment */);
                        }
                        break;
                    case 2 /* UnexpectedEndOfString */:
                        handleError(12 /* UnexpectedEndOfString */);
                        break;
                    case 6 /* InvalidCharacter */:
                        handleError(16 /* InvalidCharacter */);
                        break;
                }
                switch (token) {
                    case 12 /* LineCommentTrivia */:
                    case 13 /* BlockCommentTrivia */:
                        if (disallowComments) {
                            handleError(10 /* InvalidCommentToken */);
                        }
                        else {
                            onComment();
                        }
                        break;
                    case 16 /* Unknown */:
                        handleError(1 /* InvalidSymbol */);
                        break;
                    case 15 /* Trivia */:
                    case 14 /* LineBreakTrivia */:
                        break;
                    default:
                        return token;
                }
            }
        }
        function handleError(error, skipUntilAfter, skipUntil) {
            if (skipUntilAfter === void 0) { skipUntilAfter = []; }
            if (skipUntil === void 0) { skipUntil = []; }
            onError(error);
            if (skipUntilAfter.length + skipUntil.length > 0) {
                var token = _scanner.getToken();
                while (token !== 17 /* EOF */) {
                    if (skipUntilAfter.indexOf(token) !== -1) {
                        scanNext();
                        break;
                    }
                    else if (skipUntil.indexOf(token) !== -1) {
                        break;
                    }
                    token = scanNext();
                }
            }
        }
        function parseString(isValue) {
            var value = _scanner.getTokenValue();
            if (isValue) {
                onLiteralValue(value);
            }
            else {
                onObjectProperty(value);
            }
            scanNext();
            return true;
        }
        function parseLiteral() {
            switch (_scanner.getToken()) {
                case 11 /* NumericLiteral */:
                    var tokenValue = _scanner.getTokenValue();
                    var value = Number(tokenValue);
                    if (isNaN(value)) {
                        handleError(2 /* InvalidNumberFormat */);
                        value = 0;
                    }
                    onLiteralValue(value);
                    break;
                case 7 /* NullKeyword */:
                    onLiteralValue(null);
                    break;
                case 8 /* TrueKeyword */:
                    onLiteralValue(true);
                    break;
                case 9 /* FalseKeyword */:
                    onLiteralValue(false);
                    break;
                default:
                    return false;
            }
            scanNext();
            return true;
        }
        function parseProperty() {
            if (_scanner.getToken() !== 10 /* StringLiteral */) {
                handleError(3 /* PropertyNameExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
                return false;
            }
            parseString(false);
            if (_scanner.getToken() === 6 /* ColonToken */) {
                onSeparator(':');
                scanNext(); // consume colon
                if (!parseValue()) {
                    handleError(4 /* ValueExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
                }
            }
            else {
                handleError(5 /* ColonExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
            }
            return true;
        }
        function parseObject() {
            onObjectBegin();
            scanNext(); // consume open brace
            var needsComma = false;
            while (_scanner.getToken() !== 2 /* CloseBraceToken */ && _scanner.getToken() !== 17 /* EOF */) {
                if (_scanner.getToken() === 5 /* CommaToken */) {
                    if (!needsComma) {
                        handleError(4 /* ValueExpected */, [], []);
                    }
                    onSeparator(',');
                    scanNext(); // consume comma
                    if (_scanner.getToken() === 2 /* CloseBraceToken */ && allowTrailingComma) {
                        break;
                    }
                }
                else if (needsComma) {
                    handleError(6 /* CommaExpected */, [], []);
                }
                if (!parseProperty()) {
                    handleError(4 /* ValueExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
                }
                needsComma = true;
            }
            onObjectEnd();
            if (_scanner.getToken() !== 2 /* CloseBraceToken */) {
                handleError(7 /* CloseBraceExpected */, [2 /* CloseBraceToken */], []);
            }
            else {
                scanNext(); // consume close brace
            }
            return true;
        }
        function parseArray() {
            onArrayBegin();
            scanNext(); // consume open bracket
            var needsComma = false;
            while (_scanner.getToken() !== 4 /* CloseBracketToken */ && _scanner.getToken() !== 17 /* EOF */) {
                if (_scanner.getToken() === 5 /* CommaToken */) {
                    if (!needsComma) {
                        handleError(4 /* ValueExpected */, [], []);
                    }
                    onSeparator(',');
                    scanNext(); // consume comma
                    if (_scanner.getToken() === 4 /* CloseBracketToken */ && allowTrailingComma) {
                        break;
                    }
                }
                else if (needsComma) {
                    handleError(6 /* CommaExpected */, [], []);
                }
                if (!parseValue()) {
                    handleError(4 /* ValueExpected */, [], [4 /* CloseBracketToken */, 5 /* CommaToken */]);
                }
                needsComma = true;
            }
            onArrayEnd();
            if (_scanner.getToken() !== 4 /* CloseBracketToken */) {
                handleError(8 /* CloseBracketExpected */, [4 /* CloseBracketToken */], []);
            }
            else {
                scanNext(); // consume close bracket
            }
            return true;
        }
        function parseValue() {
            switch (_scanner.getToken()) {
                case 3 /* OpenBracketToken */:
                    return parseArray();
                case 1 /* OpenBraceToken */:
                    return parseObject();
                case 10 /* StringLiteral */:
                    return parseString(true);
                default:
                    return parseLiteral();
            }
        }
        scanNext();
        if (_scanner.getToken() === 17 /* EOF */) {
            if (options.allowEmptyContent) {
                return true;
            }
            handleError(4 /* ValueExpected */, [], []);
            return false;
        }
        if (!parseValue()) {
            handleError(4 /* ValueExpected */, [], []);
            return false;
        }
        if (_scanner.getToken() !== 17 /* EOF */) {
            handleError(9 /* EndOfFileExpected */, [], []);
        }
        return true;
    }
    exports.visit = visit;
    /**
     * Takes JSON with JavaScript-style comments and remove
     * them. Optionally replaces every none-newline character
     * of comments with a replaceCharacter
     */
    function stripComments(text, replaceCh) {
        var _scanner = scanner_1.createScanner(text), parts = [], kind, offset = 0, pos;
        do {
            pos = _scanner.getPosition();
            kind = _scanner.scan();
            switch (kind) {
                case 12 /* LineCommentTrivia */:
                case 13 /* BlockCommentTrivia */:
                case 17 /* EOF */:
                    if (offset !== pos) {
                        parts.push(text.substring(offset, pos));
                    }
                    if (replaceCh !== undefined) {
                        parts.push(_scanner.getTokenValue().replace(/[^\r\n]/g, replaceCh));
                    }
                    offset = _scanner.getPosition();
                    break;
            }
        } while (kind !== 17 /* EOF */);
        return parts.join('');
    }
    exports.stripComments = stripComments;
    function getNodeType(value) {
        switch (typeof value) {
            case 'boolean': return 'boolean';
            case 'number': return 'number';
            case 'string': return 'string';
            case 'object': {
                if (!value) {
                    return 'null';
                }
                else if (Array.isArray(value)) {
                    return 'array';
                }
                return 'object';
            }
            default: return 'null';
        }
    }
    exports.getNodeType = getNodeType;
});


/***/ }),

/***/ 2122:
/***/ ((module, exports) => {

(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function () {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createScanner = void 0;
    /**
     * Creates a JSON scanner on the given text.
     * If ignoreTrivia is set, whitespaces or comments are ignored.
     */
    function createScanner(text, ignoreTrivia) {
        if (ignoreTrivia === void 0) { ignoreTrivia = false; }
        var len = text.length;
        var pos = 0, value = '', tokenOffset = 0, token = 16 /* Unknown */, lineNumber = 0, lineStartOffset = 0, tokenLineStartOffset = 0, prevTokenLineStartOffset = 0, scanError = 0 /* None */;
        function scanHexDigits(count, exact) {
            var digits = 0;
            var value = 0;
            while (digits < count || !exact) {
                var ch = text.charCodeAt(pos);
                if (ch >= 48 /* _0 */ && ch <= 57 /* _9 */) {
                    value = value * 16 + ch - 48 /* _0 */;
                }
                else if (ch >= 65 /* A */ && ch <= 70 /* F */) {
                    value = value * 16 + ch - 65 /* A */ + 10;
                }
                else if (ch >= 97 /* a */ && ch <= 102 /* f */) {
                    value = value * 16 + ch - 97 /* a */ + 10;
                }
                else {
                    break;
                }
                pos++;
                digits++;
            }
            if (digits < count) {
                value = -1;
            }
            return value;
        }
        function setPosition(newPosition) {
            pos = newPosition;
            value = '';
            tokenOffset = 0;
            token = 16 /* Unknown */;
            scanError = 0 /* None */;
        }
        function scanNumber() {
            var start = pos;
            if (text.charCodeAt(pos) === 48 /* _0 */) {
                pos++;
            }
            else {
                pos++;
                while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                    pos++;
                }
            }
            if (pos < text.length && text.charCodeAt(pos) === 46 /* dot */) {
                pos++;
                if (pos < text.length && isDigit(text.charCodeAt(pos))) {
                    pos++;
                    while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                        pos++;
                    }
                }
                else {
                    scanError = 3 /* UnexpectedEndOfNumber */;
                    return text.substring(start, pos);
                }
            }
            var end = pos;
            if (pos < text.length && (text.charCodeAt(pos) === 69 /* E */ || text.charCodeAt(pos) === 101 /* e */)) {
                pos++;
                if (pos < text.length && text.charCodeAt(pos) === 43 /* plus */ || text.charCodeAt(pos) === 45 /* minus */) {
                    pos++;
                }
                if (pos < text.length && isDigit(text.charCodeAt(pos))) {
                    pos++;
                    while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                        pos++;
                    }
                    end = pos;
                }
                else {
                    scanError = 3 /* UnexpectedEndOfNumber */;
                }
            }
            return text.substring(start, end);
        }
        function scanString() {
            var result = '', start = pos;
            while (true) {
                if (pos >= len) {
                    result += text.substring(start, pos);
                    scanError = 2 /* UnexpectedEndOfString */;
                    break;
                }
                var ch = text.charCodeAt(pos);
                if (ch === 34 /* doubleQuote */) {
                    result += text.substring(start, pos);
                    pos++;
                    break;
                }
                if (ch === 92 /* backslash */) {
                    result += text.substring(start, pos);
                    pos++;
                    if (pos >= len) {
                        scanError = 2 /* UnexpectedEndOfString */;
                        break;
                    }
                    var ch2 = text.charCodeAt(pos++);
                    switch (ch2) {
                        case 34 /* doubleQuote */:
                            result += '\"';
                            break;
                        case 92 /* backslash */:
                            result += '\\';
                            break;
                        case 47 /* slash */:
                            result += '/';
                            break;
                        case 98 /* b */:
                            result += '\b';
                            break;
                        case 102 /* f */:
                            result += '\f';
                            break;
                        case 110 /* n */:
                            result += '\n';
                            break;
                        case 114 /* r */:
                            result += '\r';
                            break;
                        case 116 /* t */:
                            result += '\t';
                            break;
                        case 117 /* u */:
                            var ch3 = scanHexDigits(4, true);
                            if (ch3 >= 0) {
                                result += String.fromCharCode(ch3);
                            }
                            else {
                                scanError = 4 /* InvalidUnicode */;
                            }
                            break;
                        default:
                            scanError = 5 /* InvalidEscapeCharacter */;
                    }
                    start = pos;
                    continue;
                }
                if (ch >= 0 && ch <= 0x1f) {
                    if (isLineBreak(ch)) {
                        result += text.substring(start, pos);
                        scanError = 2 /* UnexpectedEndOfString */;
                        break;
                    }
                    else {
                        scanError = 6 /* InvalidCharacter */;
                        // mark as error but continue with string
                    }
                }
                pos++;
            }
            return result;
        }
        function scanNext() {
            value = '';
            scanError = 0 /* None */;
            tokenOffset = pos;
            lineStartOffset = lineNumber;
            prevTokenLineStartOffset = tokenLineStartOffset;
            if (pos >= len) {
                // at the end
                tokenOffset = len;
                return token = 17 /* EOF */;
            }
            var code = text.charCodeAt(pos);
            // trivia: whitespace
            if (isWhiteSpace(code)) {
                do {
                    pos++;
                    value += String.fromCharCode(code);
                    code = text.charCodeAt(pos);
                } while (isWhiteSpace(code));
                return token = 15 /* Trivia */;
            }
            // trivia: newlines
            if (isLineBreak(code)) {
                pos++;
                value += String.fromCharCode(code);
                if (code === 13 /* carriageReturn */ && text.charCodeAt(pos) === 10 /* lineFeed */) {
                    pos++;
                    value += '\n';
                }
                lineNumber++;
                tokenLineStartOffset = pos;
                return token = 14 /* LineBreakTrivia */;
            }
            switch (code) {
                // tokens: []{}:,
                case 123 /* openBrace */:
                    pos++;
                    return token = 1 /* OpenBraceToken */;
                case 125 /* closeBrace */:
                    pos++;
                    return token = 2 /* CloseBraceToken */;
                case 91 /* openBracket */:
                    pos++;
                    return token = 3 /* OpenBracketToken */;
                case 93 /* closeBracket */:
                    pos++;
                    return token = 4 /* CloseBracketToken */;
                case 58 /* colon */:
                    pos++;
                    return token = 6 /* ColonToken */;
                case 44 /* comma */:
                    pos++;
                    return token = 5 /* CommaToken */;
                // strings
                case 34 /* doubleQuote */:
                    pos++;
                    value = scanString();
                    return token = 10 /* StringLiteral */;
                // comments
                case 47 /* slash */:
                    var start = pos - 1;
                    // Single-line comment
                    if (text.charCodeAt(pos + 1) === 47 /* slash */) {
                        pos += 2;
                        while (pos < len) {
                            if (isLineBreak(text.charCodeAt(pos))) {
                                break;
                            }
                            pos++;
                        }
                        value = text.substring(start, pos);
                        return token = 12 /* LineCommentTrivia */;
                    }
                    // Multi-line comment
                    if (text.charCodeAt(pos + 1) === 42 /* asterisk */) {
                        pos += 2;
                        var safeLength = len - 1; // For lookahead.
                        var commentClosed = false;
                        while (pos < safeLength) {
                            var ch = text.charCodeAt(pos);
                            if (ch === 42 /* asterisk */ && text.charCodeAt(pos + 1) === 47 /* slash */) {
                                pos += 2;
                                commentClosed = true;
                                break;
                            }
                            pos++;
                            if (isLineBreak(ch)) {
                                if (ch === 13 /* carriageReturn */ && text.charCodeAt(pos) === 10 /* lineFeed */) {
                                    pos++;
                                }
                                lineNumber++;
                                tokenLineStartOffset = pos;
                            }
                        }
                        if (!commentClosed) {
                            pos++;
                            scanError = 1 /* UnexpectedEndOfComment */;
                        }
                        value = text.substring(start, pos);
                        return token = 13 /* BlockCommentTrivia */;
                    }
                    // just a single slash
                    value += String.fromCharCode(code);
                    pos++;
                    return token = 16 /* Unknown */;
                // numbers
                case 45 /* minus */:
                    value += String.fromCharCode(code);
                    pos++;
                    if (pos === len || !isDigit(text.charCodeAt(pos))) {
                        return token = 16 /* Unknown */;
                    }
                // found a minus, followed by a number so
                // we fall through to proceed with scanning
                // numbers
                case 48 /* _0 */:
                case 49 /* _1 */:
                case 50 /* _2 */:
                case 51 /* _3 */:
                case 52 /* _4 */:
                case 53 /* _5 */:
                case 54 /* _6 */:
                case 55 /* _7 */:
                case 56 /* _8 */:
                case 57 /* _9 */:
                    value += scanNumber();
                    return token = 11 /* NumericLiteral */;
                // literals and unknown symbols
                default:
                    // is a literal? Read the full word.
                    while (pos < len && isUnknownContentCharacter(code)) {
                        pos++;
                        code = text.charCodeAt(pos);
                    }
                    if (tokenOffset !== pos) {
                        value = text.substring(tokenOffset, pos);
                        // keywords: true, false, null
                        switch (value) {
                            case 'true': return token = 8 /* TrueKeyword */;
                            case 'false': return token = 9 /* FalseKeyword */;
                            case 'null': return token = 7 /* NullKeyword */;
                        }
                        return token = 16 /* Unknown */;
                    }
                    // some
                    value += String.fromCharCode(code);
                    pos++;
                    return token = 16 /* Unknown */;
            }
        }
        function isUnknownContentCharacter(code) {
            if (isWhiteSpace(code) || isLineBreak(code)) {
                return false;
            }
            switch (code) {
                case 125 /* closeBrace */:
                case 93 /* closeBracket */:
                case 123 /* openBrace */:
                case 91 /* openBracket */:
                case 34 /* doubleQuote */:
                case 58 /* colon */:
                case 44 /* comma */:
                case 47 /* slash */:
                    return false;
            }
            return true;
        }
        function scanNextNonTrivia() {
            var result;
            do {
                result = scanNext();
            } while (result >= 12 /* LineCommentTrivia */ && result <= 15 /* Trivia */);
            return result;
        }
        return {
            setPosition: setPosition,
            getPosition: function () { return pos; },
            scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
            getToken: function () { return token; },
            getTokenValue: function () { return value; },
            getTokenOffset: function () { return tokenOffset; },
            getTokenLength: function () { return pos - tokenOffset; },
            getTokenStartLine: function () { return lineStartOffset; },
            getTokenStartCharacter: function () { return tokenOffset - prevTokenLineStartOffset; },
            getTokenError: function () { return scanError; },
        };
    }
    exports.createScanner = createScanner;
    function isWhiteSpace(ch) {
        return ch === 32 /* space */ || ch === 9 /* tab */ || ch === 11 /* verticalTab */ || ch === 12 /* formFeed */ ||
            ch === 160 /* nonBreakingSpace */ || ch === 5760 /* ogham */ || ch >= 8192 /* enQuad */ && ch <= 8203 /* zeroWidthSpace */ ||
            ch === 8239 /* narrowNoBreakSpace */ || ch === 8287 /* mathematicalSpace */ || ch === 12288 /* ideographicSpace */ || ch === 65279 /* byteOrderMark */;
    }
    function isLineBreak(ch) {
        return ch === 10 /* lineFeed */ || ch === 13 /* carriageReturn */ || ch === 8232 /* lineSeparator */ || ch === 8233 /* paragraphSeparator */;
    }
    function isDigit(ch) {
        return ch >= 48 /* _0 */ && ch <= 57 /* _9 */;
    }
});


/***/ }),

/***/ 245:
/***/ ((module, exports, __webpack_require__) => {

(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./impl/format", "./impl/edit", "./impl/scanner", "./impl/parser"], factory);
    }
})(function () {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.applyEdits = exports.modify = exports.format = exports.printParseErrorCode = exports.stripComments = exports.visit = exports.getNodeValue = exports.getNodePath = exports.findNodeAtOffset = exports.findNodeAtLocation = exports.parseTree = exports.parse = exports.getLocation = exports.createScanner = void 0;
    var formatter = __webpack_require__(7740);
    var edit = __webpack_require__(5891);
    var scanner = __webpack_require__(2122);
    var parser = __webpack_require__(8309);
    /**
     * Creates a JSON scanner on the given text.
     * If ignoreTrivia is set, whitespaces or comments are ignored.
     */
    exports.createScanner = scanner.createScanner;
    /**
     * For a given offset, evaluate the location in the JSON document. Each segment in the location path is either a property name or an array index.
     */
    exports.getLocation = parser.getLocation;
    /**
     * Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
     * Therefore, always check the errors list to find out if the input was valid.
     */
    exports.parse = parser.parse;
    /**
     * Parses the given text and returns a tree representation the JSON content. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
     */
    exports.parseTree = parser.parseTree;
    /**
     * Finds the node at the given path in a JSON DOM.
     */
    exports.findNodeAtLocation = parser.findNodeAtLocation;
    /**
     * Finds the innermost node at the given offset. If includeRightBound is set, also finds nodes that end at the given offset.
     */
    exports.findNodeAtOffset = parser.findNodeAtOffset;
    /**
     * Gets the JSON path of the given JSON DOM node
     */
    exports.getNodePath = parser.getNodePath;
    /**
     * Evaluates the JavaScript object of the given JSON DOM node
     */
    exports.getNodeValue = parser.getNodeValue;
    /**
     * Parses the given text and invokes the visitor functions for each object, array and literal reached.
     */
    exports.visit = parser.visit;
    /**
     * Takes JSON with JavaScript-style comments and remove
     * them. Optionally replaces every none-newline character
     * of comments with a replaceCharacter
     */
    exports.stripComments = parser.stripComments;
    function printParseErrorCode(code) {
        switch (code) {
            case 1 /* InvalidSymbol */: return 'InvalidSymbol';
            case 2 /* InvalidNumberFormat */: return 'InvalidNumberFormat';
            case 3 /* PropertyNameExpected */: return 'PropertyNameExpected';
            case 4 /* ValueExpected */: return 'ValueExpected';
            case 5 /* ColonExpected */: return 'ColonExpected';
            case 6 /* CommaExpected */: return 'CommaExpected';
            case 7 /* CloseBraceExpected */: return 'CloseBraceExpected';
            case 8 /* CloseBracketExpected */: return 'CloseBracketExpected';
            case 9 /* EndOfFileExpected */: return 'EndOfFileExpected';
            case 10 /* InvalidCommentToken */: return 'InvalidCommentToken';
            case 11 /* UnexpectedEndOfComment */: return 'UnexpectedEndOfComment';
            case 12 /* UnexpectedEndOfString */: return 'UnexpectedEndOfString';
            case 13 /* UnexpectedEndOfNumber */: return 'UnexpectedEndOfNumber';
            case 14 /* InvalidUnicode */: return 'InvalidUnicode';
            case 15 /* InvalidEscapeCharacter */: return 'InvalidEscapeCharacter';
            case 16 /* InvalidCharacter */: return 'InvalidCharacter';
        }
        return '<unknown ParseErrorCode>';
    }
    exports.printParseErrorCode = printParseErrorCode;
    /**
     * Computes the edits needed to format a JSON document.
     *
     * @param documentText The input text
     * @param range The range to format or `undefined` to format the full content
     * @param options The formatting options
     * @returns A list of edit operations describing the formatting changes to the original document. Edits can be either inserts, replacements or
     * removals of text segments. All offsets refer to the original state of the document. No two edits must change or remove the same range of
     * text in the original document. However, multiple edits can have
     * the same offset, for example multiple inserts, or an insert followed by a remove or replace. The order in the array defines which edit is applied first.
     * To apply edits to an input, you can use `applyEdits`.
     */
    function format(documentText, range, options) {
        return formatter.format(documentText, range, options);
    }
    exports.format = format;
    /**
     * Computes the edits needed to modify a value in the JSON document.
     *
     * @param documentText The input text
     * @param path The path of the value to change. The path represents either to the document root, a property or an array item.
     * If the path points to an non-existing property or item, it will be created.
     * @param value The new value for the specified property or item. If the value is undefined,
     * the property or item will be removed.
     * @param options Options
     * @returns A list of edit operations describing the formatting changes to the original document. Edits can be either inserts, replacements or
     * removals of text segments. All offsets refer to the original state of the document. No two edits must change or remove the same range of
     * text in the original document. However, multiple edits can have
     * the same offset, for example multiple inserts, or an insert followed by a remove or replace. The order in the array defines which edit is applied first.
     * To apply edits to an input, you can use `applyEdits`.
     */
    function modify(text, path, value, options) {
        return edit.setProperty(text, path, value, options);
    }
    exports.modify = modify;
    /**
     * Applies edits to a input string.
     */
    function applyEdits(text, edits) {
        for (var i = edits.length - 1; i >= 0; i--) {
            text = edit.applyEdit(text, edits[i]);
        }
        return text;
    }
    exports.applyEdits = applyEdits;
});


/***/ }),

/***/ 2621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { PassThrough } = __webpack_require__(2413);

module.exports = function (/*streams...*/) {
  var sources = []
  var output  = new PassThrough({objectMode: true})

  output.setMaxListeners(0)

  output.add = add
  output.isEmpty = isEmpty

  output.on('unpipe', remove)

  Array.prototype.slice.call(arguments).forEach(add)

  return output

  function add (source) {
    if (Array.isArray(source)) {
      source.forEach(add)
      return this
    }

    sources.push(source);
    source.once('end', remove.bind(null, source))
    source.once('error', output.emit.bind(output, 'error'))
    source.pipe(output, {end: false})
    return this
  }

  function isEmpty () {
    return sources.length == 0;
  }

  function remove (source) {
    sources = sources.filter(function (it) { return it !== source })
    if (!sources.length && output.readable) { output.end() }
  }
}


/***/ }),

/***/ 6047:
/***/ ((module) => {

"use strict";


const mimicFn = (to, from) => {
	for (const prop of Reflect.ownKeys(from)) {
		Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
	}

	return to;
};

module.exports = mimicFn;
// TODO: Remove this for the next major release
module.exports.default = mimicFn;


/***/ }),

/***/ 502:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const path = __webpack_require__(5622);
const pathKey = __webpack_require__(539);

const npmRunPath = options => {
	options = {
		cwd: process.cwd(),
		path: process.env[pathKey()],
		execPath: process.execPath,
		...options
	};

	let previous;
	let cwdPath = path.resolve(options.cwd);
	const result = [];

	while (previous !== cwdPath) {
		result.push(path.join(cwdPath, 'node_modules/.bin'));
		previous = cwdPath;
		cwdPath = path.resolve(cwdPath, '..');
	}

	// Ensure the running `node` binary is used
	const execPathDir = path.resolve(options.cwd, options.execPath, '..');
	result.push(execPathDir);

	return result.concat(options.path).join(path.delimiter);
};

module.exports = npmRunPath;
// TODO: Remove this for the next major release
module.exports.default = npmRunPath;

module.exports.env = options => {
	options = {
		env: process.env,
		...options
	};

	const env = {...options.env};
	const path = pathKey({env});

	options.path = env[path];
	env[path] = module.exports(options);

	return env;
};


/***/ }),

/***/ 1223:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(2940)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 9082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const mimicFn = __webpack_require__(6047);

const calledFunctions = new WeakMap();

const onetime = (function_, options = {}) => {
	if (typeof function_ !== 'function') {
		throw new TypeError('Expected a function');
	}

	let returnValue;
	let callCount = 0;
	const functionName = function_.displayName || function_.name || '<anonymous>';

	const onetime = function (...arguments_) {
		calledFunctions.set(onetime, ++callCount);

		if (callCount === 1) {
			returnValue = function_.apply(this, arguments_);
			function_ = null;
		} else if (options.throw === true) {
			throw new Error(`Function \`${functionName}\` can only be called once`);
		}

		return returnValue;
	};

	mimicFn(onetime, function_);
	calledFunctions.set(onetime, callCount);

	return onetime;
};

module.exports = onetime;
// TODO: Remove this for the next major release
module.exports.default = onetime;

module.exports.callCount = function_ => {
	if (!calledFunctions.has(function_)) {
		throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
	}

	return calledFunctions.get(function_);
};


/***/ }),

/***/ 539:
/***/ ((module) => {

"use strict";


const pathKey = (options = {}) => {
	const environment = options.env || process.env;
	const platform = options.platform || process.platform;

	if (platform !== 'win32') {
		return 'PATH';
	}

	return Object.keys(environment).reverse().find(key => key.toUpperCase() === 'PATH') || 'Path';
};

module.exports = pathKey;
// TODO: Remove this for the next major release
module.exports.default = pathKey;


/***/ }),

/***/ 8341:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var once = __webpack_require__(1223)
var eos = __webpack_require__(1205)
var fs = __webpack_require__(5747) // we only need fs to get the ReadStream and WriteStream prototypes

var noop = function () {}
var ancient = /^v?\.0/.test(process.version)

var isFn = function (fn) {
  return typeof fn === 'function'
}

var isFS = function (stream) {
  if (!ancient) return false // newer node version do not need to care about fs is a special way
  if (!fs) return false // browser
  return (stream instanceof (fs.ReadStream || noop) || stream instanceof (fs.WriteStream || noop)) && isFn(stream.close)
}

var isRequest = function (stream) {
  return stream.setHeader && isFn(stream.abort)
}

var destroyer = function (stream, reading, writing, callback) {
  callback = once(callback)

  var closed = false
  stream.on('close', function () {
    closed = true
  })

  eos(stream, {readable: reading, writable: writing}, function (err) {
    if (err) return callback(err)
    closed = true
    callback()
  })

  var destroyed = false
  return function (err) {
    if (closed) return
    if (destroyed) return
    destroyed = true

    if (isFS(stream)) return stream.close(noop) // use close for fs streams to avoid fd leaks
    if (isRequest(stream)) return stream.abort() // request.destroy just do .end - .abort is what we want

    if (isFn(stream.destroy)) return stream.destroy()

    callback(err || new Error('stream was destroyed'))
  }
}

var call = function (fn) {
  fn()
}

var pipe = function (from, to) {
  return from.pipe(to)
}

var pump = function () {
  var streams = Array.prototype.slice.call(arguments)
  var callback = isFn(streams[streams.length - 1] || noop) && streams.pop() || noop

  if (Array.isArray(streams[0])) streams = streams[0]
  if (streams.length < 2) throw new Error('pump requires two streams per minimum')

  var error
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1
    var writing = i > 0
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err
      if (err) destroys.forEach(call)
      if (reading) return
      destroys.forEach(call)
      callback(error)
    })
  })

  return streams.reduce(pipe)
}

module.exports = pump


/***/ }),

/***/ 7032:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const shebangRegex = __webpack_require__(2638);

module.exports = (string = '') => {
	const match = string.match(shebangRegex);

	if (!match) {
		return null;
	}

	const [path, argument] = match[0].replace(/#! ?/, '').split(' ');
	const binary = path.split('/').pop();

	if (binary === 'env') {
		return argument;
	}

	return argument ? `${binary} ${argument}` : binary;
};


/***/ }),

/***/ 2638:
/***/ ((module) => {

"use strict";

module.exports = /^#!(.*)/;


/***/ }),

/***/ 4931:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Note: since nyc uses this module to output coverage, any lines
// that are in the direct sync flow of nyc's outputCoverage are
// ignored, since we can never get coverage for them.
var assert = __webpack_require__(2357)
var signals = __webpack_require__(3710)
var isWin = /^win/i.test(process.platform)

var EE = __webpack_require__(8614)
/* istanbul ignore if */
if (typeof EE !== 'function') {
  EE = EE.EventEmitter
}

var emitter
if (process.__signal_exit_emitter__) {
  emitter = process.__signal_exit_emitter__
} else {
  emitter = process.__signal_exit_emitter__ = new EE()
  emitter.count = 0
  emitter.emitted = {}
}

// Because this emitter is a global, we have to check to see if a
// previous version of this library failed to enable infinite listeners.
// I know what you're about to say.  But literally everything about
// signal-exit is a compromise with evil.  Get used to it.
if (!emitter.infinite) {
  emitter.setMaxListeners(Infinity)
  emitter.infinite = true
}

module.exports = function (cb, opts) {
  assert.equal(typeof cb, 'function', 'a callback must be provided for exit handler')

  if (loaded === false) {
    load()
  }

  var ev = 'exit'
  if (opts && opts.alwaysLast) {
    ev = 'afterexit'
  }

  var remove = function () {
    emitter.removeListener(ev, cb)
    if (emitter.listeners('exit').length === 0 &&
        emitter.listeners('afterexit').length === 0) {
      unload()
    }
  }
  emitter.on(ev, cb)

  return remove
}

module.exports.unload = unload
function unload () {
  if (!loaded) {
    return
  }
  loaded = false

  signals.forEach(function (sig) {
    try {
      process.removeListener(sig, sigListeners[sig])
    } catch (er) {}
  })
  process.emit = originalProcessEmit
  process.reallyExit = originalProcessReallyExit
  emitter.count -= 1
}

function emit (event, code, signal) {
  if (emitter.emitted[event]) {
    return
  }
  emitter.emitted[event] = true
  emitter.emit(event, code, signal)
}

// { <signal>: <listener fn>, ... }
var sigListeners = {}
signals.forEach(function (sig) {
  sigListeners[sig] = function listener () {
    // If there are no other listeners, an exit is coming!
    // Simplest way: remove us and then re-send the signal.
    // We know that this will kill the process, so we can
    // safely emit now.
    var listeners = process.listeners(sig)
    if (listeners.length === emitter.count) {
      unload()
      emit('exit', null, sig)
      /* istanbul ignore next */
      emit('afterexit', null, sig)
      /* istanbul ignore next */
      if (isWin && sig === 'SIGHUP') {
        // "SIGHUP" throws an `ENOSYS` error on Windows,
        // so use a supported signal instead
        sig = 'SIGINT'
      }
      process.kill(process.pid, sig)
    }
  }
})

module.exports.signals = function () {
  return signals
}

module.exports.load = load

var loaded = false

function load () {
  if (loaded) {
    return
  }
  loaded = true

  // This is the number of onSignalExit's that are in play.
  // It's important so that we can count the correct number of
  // listeners on signals, and don't wait for the other one to
  // handle it instead of us.
  emitter.count += 1

  signals = signals.filter(function (sig) {
    try {
      process.on(sig, sigListeners[sig])
      return true
    } catch (er) {
      return false
    }
  })

  process.emit = processEmit
  process.reallyExit = processReallyExit
}

var originalProcessReallyExit = process.reallyExit
function processReallyExit (code) {
  process.exitCode = code || 0
  emit('exit', process.exitCode, null)
  /* istanbul ignore next */
  emit('afterexit', process.exitCode, null)
  /* istanbul ignore next */
  originalProcessReallyExit.call(process, process.exitCode)
}

var originalProcessEmit = process.emit
function processEmit (ev, arg) {
  if (ev === 'exit') {
    if (arg !== undefined) {
      process.exitCode = arg
    }
    var ret = originalProcessEmit.apply(this, arguments)
    emit('exit', process.exitCode, null)
    /* istanbul ignore next */
    emit('afterexit', process.exitCode, null)
    return ret
  } else {
    return originalProcessEmit.apply(this, arguments)
  }
}


/***/ }),

/***/ 3710:
/***/ ((module) => {

// This is not the set of all possible signals.
//
// It IS, however, the set of all signals that trigger
// an exit on either Linux or BSD systems.  Linux is a
// superset of the signal names supported on BSD, and
// the unknown signals just fail to register, so we can
// catch that easily enough.
//
// Don't bother with SIGKILL.  It's uncatchable, which
// means that we can't fire any callbacks anyway.
//
// If a user does happen to register a handler on a non-
// fatal signal like SIGWINCH or something, and then
// exit, it'll end up firing `process.emit('exit')`, so
// the handler will be fired anyway.
//
// SIGBUS, SIGFPE, SIGSEGV and SIGILL, when not raised
// artificially, inherently leave the process in a
// state from which it is not safe to try and enter JS
// listeners.
module.exports = [
  'SIGABRT',
  'SIGALRM',
  'SIGHUP',
  'SIGINT',
  'SIGTERM'
]

if (process.platform !== 'win32') {
  module.exports.push(
    'SIGVTALRM',
    'SIGXCPU',
    'SIGXFSZ',
    'SIGUSR2',
    'SIGTRAP',
    'SIGSYS',
    'SIGQUIT',
    'SIGIOT'
    // should detect profiler and enable/disable accordingly.
    // see #21
    // 'SIGPROF'
  )
}

if (process.platform === 'linux') {
  module.exports.push(
    'SIGIO',
    'SIGPOLL',
    'SIGPWR',
    'SIGSTKFLT',
    'SIGUNUSED'
  )
}


/***/ }),

/***/ 8174:
/***/ ((module) => {

"use strict";


module.exports = input => {
	const LF = typeof input === 'string' ? '\n' : '\n'.charCodeAt();
	const CR = typeof input === 'string' ? '\r' : '\r'.charCodeAt();

	if (input[input.length - 1] === LF) {
		input = input.slice(0, input.length - 1);
	}

	if (input[input.length - 1] === CR) {
		input = input.slice(0, input.length - 1);
	}

	return input;
};


/***/ }),

/***/ 9594:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// v1.0 exported just the parser function. To maintain backwards compatibility,
// we export additional named features as properties of that function.
var parserFunction = __webpack_require__(7244).parse;
parserFunction.parseSVG = parserFunction;
parserFunction.makeAbsolute = makeSVGPathCommandsAbsolute;
module.exports = parserFunction;

function makeSVGPathCommandsAbsolute(commands) {
	var subpathStart, prevCmd={x:0,y:0};
	var attr = {x:'x0',y:'y0',x1:'x0',y1:'y0',x2:'x0',y2:'y0'};
	commands.forEach(function(cmd) {
		if (cmd.command==='moveto') subpathStart=cmd;
		cmd.x0=prevCmd.x; cmd.y0=prevCmd.y;
		for (var a in attr) if (a in cmd) cmd[a] += cmd.relative ? cmd[attr[a]] : 0;
		if (!('x' in cmd)) cmd.x = prevCmd.x; // V
		if (!('y' in cmd)) cmd.y = prevCmd.y; // X
		cmd.relative = false;
		cmd.code = cmd.code.toUpperCase();
		if (cmd.command=='closepath') {
			cmd.x = subpathStart.x;
			cmd.y = subpathStart.y;
		}
		prevCmd = cmd;
	});
	return commands;
}


/***/ }),

/***/ 7244:
/***/ ((module) => {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */



function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { svg_path: peg$parsesvg_path },
      peg$startRuleFunction  = peg$parsesvg_path,

      peg$c0 = function(data) {
          if (!data) return [];
          for (var cmds=[],i=0;i<data.length;i++) cmds=cmds.concat.apply(cmds,data[i]);
          var first=cmds[0];
          if (first && first.code=='m'){ // Per spec, first moveto is never relative
            delete first.relative;
            first.code = 'M';
          }
          return cmds;
        },
      peg$c1 = function(first, more) { return merge(first,more) },
      peg$c2 = /^[Mm]/,
      peg$c3 = peg$classExpectation(["M", "m"], false, false),
      peg$c4 = function(c, first, more) {
          var move = commands(c,[first]);
          if (more) move = move.concat(commands(c=='M' ? 'L' : 'l',more[1]));
          return move;
        },
      peg$c5 = /^[Zz]/,
      peg$c6 = peg$classExpectation(["Z", "z"], false, false),
      peg$c7 = function() { return commands('Z') },
      peg$c8 = /^[Ll]/,
      peg$c9 = peg$classExpectation(["L", "l"], false, false),
      peg$c10 = function(c, args) { return commands(c,args) },
      peg$c11 = /^[Hh]/,
      peg$c12 = peg$classExpectation(["H", "h"], false, false),
      peg$c13 = function(c, args) { return commands(c,args.map(function(x){ return {x:x}})) },
      peg$c14 = /^[Vv]/,
      peg$c15 = peg$classExpectation(["V", "v"], false, false),
      peg$c16 = function(c, args) { return commands(c,args.map(function(y){ return {y:y}})) },
      peg$c17 = /^[Cc]/,
      peg$c18 = peg$classExpectation(["C", "c"], false, false),
      peg$c19 = function(a, b, c) { return { x1:a.x, y1:a.y, x2:b.x, y2:b.y, x:c.x, y:c.y } },
      peg$c20 = /^[Ss]/,
      peg$c21 = peg$classExpectation(["S", "s"], false, false),
      peg$c22 = function(b, c) { return { x2:b.x, y2:b.y, x:c.x, y:c.y } },
      peg$c23 = /^[Qq]/,
      peg$c24 = peg$classExpectation(["Q", "q"], false, false),
      peg$c25 = function(a, b) { return { x1:a.x, y1:a.y, x:b.x, y:b.y } },
      peg$c26 = /^[Tt]/,
      peg$c27 = peg$classExpectation(["T", "t"], false, false),
      peg$c28 = /^[Aa]/,
      peg$c29 = peg$classExpectation(["A", "a"], false, false),
      peg$c30 = function(rx, ry, xrot, large, sweep, xy) { return { rx:rx, ry:ry, xAxisRotation:xrot, largeArc:large, sweep:sweep, x:xy.x, y:xy.y } },
      peg$c31 = function(x, y) { return { x:x, y:y } },
      peg$c32 = function(n) { return n*1 },
      peg$c33 = function(parts) { return parts.join('')*1 },
      peg$c34 = /^[01]/,
      peg$c35 = peg$classExpectation(["0", "1"], false, false),
      peg$c36 = function(bit) { return bit=='1' },
      peg$c37 = function() { return '' },
      peg$c38 = ",",
      peg$c39 = peg$literalExpectation(",", false),
      peg$c40 = function(parts) { return parts.join('') },
      peg$c41 = ".",
      peg$c42 = peg$literalExpectation(".", false),
      peg$c43 = /^[eE]/,
      peg$c44 = peg$classExpectation(["e", "E"], false, false),
      peg$c45 = /^[+\-]/,
      peg$c46 = peg$classExpectation(["+", "-"], false, false),
      peg$c47 = /^[0-9]/,
      peg$c48 = peg$classExpectation([["0", "9"]], false, false),
      peg$c49 = function(digits) { return digits.join('') },
      peg$c50 = /^[ \t\n\r]/,
      peg$c51 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsesvg_path() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsewsp();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsemoveTo_drawTo_commandGroups();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewsp();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewsp();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemoveTo_drawTo_commandGroups() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsemoveTo_drawTo_commandGroup();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parsewsp();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parsewsp();
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsemoveTo_drawTo_commandGroup();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsemoveTo_drawTo_commandGroup();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemoveTo_drawTo_commandGroup() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsemoveto();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parsewsp();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parsewsp();
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsedrawto_command();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsedrawto_command();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedrawto_command() {
    var s0;

    s0 = peg$parseclosepath();
    if (s0 === peg$FAILED) {
      s0 = peg$parselineto();
      if (s0 === peg$FAILED) {
        s0 = peg$parsehorizontal_lineto();
        if (s0 === peg$FAILED) {
          s0 = peg$parsevertical_lineto();
          if (s0 === peg$FAILED) {
            s0 = peg$parsecurveto();
            if (s0 === peg$FAILED) {
              s0 = peg$parsesmooth_curveto();
              if (s0 === peg$FAILED) {
                s0 = peg$parsequadratic_bezier_curveto();
                if (s0 === peg$FAILED) {
                  s0 = peg$parsesmooth_quadratic_bezier_curveto();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseelliptical_arc();
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsemoveto() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    if (peg$c2.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c3); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = peg$parsecomma_wsp();
          if (s5 === peg$FAILED) {
            s5 = null;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parselineto_argument_sequence();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c4(s1, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseclosepath() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c5.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c6); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c7();
    }
    s0 = s1;

    return s0;
  }

  function peg$parselineto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c8.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c9); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parselineto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselineto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsecoordinate_pair();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecoordinate_pair();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsehorizontal_lineto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c11.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c12); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c13(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecoordinate_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsenumber();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsenumber();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsevertical_lineto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c14.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c15); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c16(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecurveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c17.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c18); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecurveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecurveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecurveto_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsecurveto_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecurveto_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecurveto_argument() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsecomma_wsp();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecoordinate_pair();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c19(s1, s3, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_curveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c20.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c21); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsesmooth_curveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_curveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsesmooth_curveto_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsesmooth_curveto_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsesmooth_curveto_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_curveto_argument() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequadratic_bezier_curveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c23.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c24); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsequadratic_bezier_curveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequadratic_bezier_curveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsequadratic_bezier_curveto_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsequadratic_bezier_curveto_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsequadratic_bezier_curveto_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequadratic_bezier_curveto_argument() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c25(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_quadratic_bezier_curveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c26.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c27); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsesmooth_quadratic_bezier_curveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_quadratic_bezier_curveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsecoordinate_pair();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecoordinate_pair();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseelliptical_arc() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c28.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c29); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseelliptical_arc_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseelliptical_arc_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseelliptical_arc_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseelliptical_arc_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseelliptical_arc_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseelliptical_arc_argument() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

    s0 = peg$currPos;
    s1 = peg$parsenonnegative_number();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenonnegative_number();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsecomma_wsp();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsenumber();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsecomma_wsp();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseflag();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parsecomma_wsp();
                  if (s8 === peg$FAILED) {
                    s8 = null;
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseflag();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parsecomma_wsp();
                      if (s10 === peg$FAILED) {
                        s10 = null;
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parsecoordinate_pair();
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c30(s1, s3, s5, s7, s9, s11);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecoordinate_pair() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsenumber();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenumber();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c31(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenonnegative_number() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parsefloating_point_constant();
    if (s1 === peg$FAILED) {
      s1 = peg$parsedigit_sequence();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c32(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsenumber() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsesign();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsefloating_point_constant();
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parsesign();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsedigit_sequence();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c33(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseflag() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c34.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c35); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c36(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsecomma_wsp() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewsp();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewsp();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewsp();
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsecomma();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewsp();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewsp();
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c37();
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parsecomma() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 44) {
      s0 = peg$c38;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c39); }
    }

    return s0;
  }

  function peg$parsefloating_point_constant() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsefractional_constant();
    if (s2 !== peg$FAILED) {
      s3 = peg$parseexponent();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parsedigit_sequence();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseexponent();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsefractional_constant() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsedigit_sequence();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s3 = peg$c41;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsedigit_sequence();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parsedigit_sequence();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s3 = peg$c41;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c42); }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseexponent() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (peg$c43.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c44); }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsesign();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsedigit_sequence();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsesign() {
    var s0;

    if (peg$c45.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c46); }
    }

    return s0;
  }

  function peg$parsedigit_sequence() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c47.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c48); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c47.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c48); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c49(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsewsp() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c50.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c51); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c37();
    }
    s0 = s1;

    return s0;
  }


    function merge(first,more){
      if (!more) return [first];
      for (var a=[first],i=0,l=more.length;i<l;i++) a[i+1]=more[i][1];
      return a;
    }

    var cmds = {m:'moveto',l:'lineto',h:'horizontal lineto',v:'vertical lineto',c:'curveto',s:'smooth curveto',q:'quadratic curveto',t:'smooth quadratic curveto',a:'elliptical arc',z:'closepath'};
    for (var code in cmds) cmds[code.toUpperCase()]=cmds[code];
    function commands(code,args){
      if (!args) args=[{}];
      for (var i=args.length;i--;){
        var cmd={code:code,command:cmds[code]};
        if (code==code.toLowerCase()) cmd.relative=true;
        for (var k in args[i]) cmd[k]=args[i][k];
        args[i] = cmd;
      }
      return args;
    }


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};


/***/ }),

/***/ 4207:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isWindows = process.platform === 'win32' ||
    process.env.OSTYPE === 'cygwin' ||
    process.env.OSTYPE === 'msys'

const path = __webpack_require__(5622)
const COLON = isWindows ? ';' : ':'
const isexe = __webpack_require__(7126)

const getNotFoundError = (cmd) =>
  Object.assign(new Error(`not found: ${cmd}`), { code: 'ENOENT' })

const getPathInfo = (cmd, opt) => {
  const colon = opt.colon || COLON

  // If it has a slash, then we don't bother searching the pathenv.
  // just check the file itself, and that's it.
  const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? ['']
    : (
      [
        // windows always checks the cwd first
        ...(isWindows ? [process.cwd()] : []),
        ...(opt.path || process.env.PATH ||
          /* istanbul ignore next: very unusual */ '').split(colon),
      ]
    )
  const pathExtExe = isWindows
    ? opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM'
    : ''
  const pathExt = isWindows ? pathExtExe.split(colon) : ['']

  if (isWindows) {
    if (cmd.indexOf('.') !== -1 && pathExt[0] !== '')
      pathExt.unshift('')
  }

  return {
    pathEnv,
    pathExt,
    pathExtExe,
  }
}

const which = (cmd, opt, cb) => {
  if (typeof opt === 'function') {
    cb = opt
    opt = {}
  }
  if (!opt)
    opt = {}

  const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt)
  const found = []

  const step = i => new Promise((resolve, reject) => {
    if (i === pathEnv.length)
      return opt.all && found.length ? resolve(found)
        : reject(getNotFoundError(cmd))

    const ppRaw = pathEnv[i]
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw

    const pCmd = path.join(pathPart, cmd)
    const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd
      : pCmd

    resolve(subStep(p, i, 0))
  })

  const subStep = (p, i, ii) => new Promise((resolve, reject) => {
    if (ii === pathExt.length)
      return resolve(step(i + 1))
    const ext = pathExt[ii]
    isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
      if (!er && is) {
        if (opt.all)
          found.push(p + ext)
        else
          return resolve(p + ext)
      }
      return resolve(subStep(p, i, ii + 1))
    })
  })

  return cb ? step(0).then(res => cb(null, res), cb) : step(0)
}

const whichSync = (cmd, opt) => {
  opt = opt || {}

  const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt)
  const found = []

  for (let i = 0; i < pathEnv.length; i ++) {
    const ppRaw = pathEnv[i]
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw

    const pCmd = path.join(pathPart, cmd)
    const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd
      : pCmd

    for (let j = 0; j < pathExt.length; j ++) {
      const cur = p + pathExt[j]
      try {
        const is = isexe.sync(cur, { pathExt: pathExtExe })
        if (is) {
          if (opt.all)
            found.push(cur)
          else
            return cur
        }
      } catch (ex) {}
    }
  }

  if (opt.all && found.length)
    return found

  if (opt.nothrow)
    return null

  throw getNotFoundError(cmd)
}

module.exports = which
which.sync = whichSync


/***/ }),

/***/ 2940:
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ 6144:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const canvaskit_1 = __importDefault(__webpack_require__(3311));
const renderer_1 = __webpack_require__(9279);
const locate_1 = __webpack_require__(1465);
const timer_1 = __importDefault(__webpack_require__(3302));
const json_1 = __webpack_require__(5192);
async function main(args) {
    const timer = new timer_1.default();
    const CanvasKit = (await canvaskit_1.default({ locateFile: locate_1.locateFile }));
    const renderer = new renderer_1.Renderer(CanvasKit, args);
    await renderer.load();
    const totalFrames = args.framerate * args.duration;
    const key = `renderer.run() @ ${totalFrames}`;
    timer.start(key);
    await renderer.run();
    timer.stop(key);
    timer.print();
}
main(json_1.readJSON("test/args.jsonc")).catch(console.log);


/***/ }),

/***/ 1465:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.locateFile = void 0;
exports.locateFile = (file) => "node_modules/canvaskit-wasm/bin/" + file;
exports.default = exports.locateFile;


/***/ }),

/***/ 9279:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Renderer = void 0;
const start_process_1 = __webpack_require__(406);
const fs_1 = __importDefault(__webpack_require__(5747));
const path_1 = __importDefault(__webpack_require__(5622));
const timer_1 = __importDefault(__webpack_require__(3302));
const load_1 = __webpack_require__(8109);
const svg_renderer_1 = __webpack_require__(2170);
const math_1 = __webpack_require__(973);
class Renderer {
    constructor(CanvasKit, args) {
        this.frame = 0;
        this.makeFont = (buf, size) => {
            //@ts-ignore
            return new this.CanvasKit.Font(this.fontMgr.MakeTypefaceFromData(buf), size);
        };
        this.loadFonts = async () => {
            this.fontMgr = this.CanvasKit.FontMgr.RefDefault();
            const [robotoBuffer, caveatBuffer] = await load_1.loadFonts(["Roboto/Roboto-Regular.ttf", "Caveat/Caveat-Regular.ttf"]);
            this.fonts = {
                roboto: this.makeFont(robotoBuffer, 48),
                caveat: this.makeFont(caveatBuffer, 48),
            };
            this.textPaint = new this.CanvasKit.Paint();
            this.textPaint.setAntiAlias(true);
            this.textPaint.setColor(this.CanvasKit.Color(22, 24, 25, 1.0));
            this.textPaint.setStyle(this.CanvasKit.PaintStyle.Fill);
        };
        this.load = async () => {
            await this.loadFonts();
            for (const key in this.args.assets) {
                if (fs_1.default.statSync(this.args.assets[key])) {
                    if (this.args.assets[key].endsWith("svg")) {
                        this.assets[key] = new svg_renderer_1.SvgRenderer(this.CanvasKit, { filepath: this.args.assets[key] });
                    }
                    else if (this.args.assets[key].endsWith(".json")) {
                        const filepath = path_1.default.join(process.cwd(), this.args.assets[key]);
                        this.assets[key] = this.CanvasKit.MakeAnimation(fs_1.default.readFileSync(filepath, "utf-8"));
                    }
                }
            }
        };
        this.draw = (t = 0) => {
            if (t > this.args.duration) {
                return null;
            }
            this.skcanvas.clear(this.CanvasKit.WHITE);
            // this.skcanvas.clear(this.CanvasKit.Color(255, 255, 255, 1.0));
            // this.paint.setStyle(this.CanvasKit.PaintStyle.Fill);
            // this.paint.setColor(this.CanvasKit.Color(40, 0, 0));
            // this.skcanvas.drawText(t.toFixed(2), 50 * t, 280, this.paint, this.roboto);
            // for (let i = 0; i < this.assets.length; i++) {
            // this.renderSvgChildren(this.assets[i]);
            // }
            let i = 0;
            const groups = this.args.groups;
            while (i < groups.length && t >= groups[i].timestamps[0][0]) {
                const tstart = groups[i].timestamps[0][0];
                groups[i].images.forEach((img) => {
                    this.skcanvas.save();
                    if (this.assets[img.id] instanceof svg_renderer_1.SvgRenderer) {
                        const scale = math_1.cubicBezier(0.01, 0.75, 0.53, 1.005)(Math.min((t - tstart) / 0.5, 1));
                        this.skcanvas.scale(scale, scale);
                        const svg = this.assets[img.id];
                        svg.render(this.CanvasKit, this.paint, this.skcanvas);
                    }
                    else {
                        const animation = this.assets[img.id];
                        const prog = (t * animation.fps()) / (this.args.framerate * animation.duration());
                        animation.seek(prog % 1.0);
                        animation.render(this.skcanvas, [0, 0, this.args.width, this.args.height]);
                    }
                    this.skcanvas.restore();
                });
                let j = 0;
                let str = "";
                while (j < groups[i].timestamps.length && t > groups[i].timestamps[j][0]) {
                    str += groups[i].words[j] + " ";
                    j++;
                }
                this.skcanvas.drawText(str, 20 + math_1.cubicBezier(0.01, 0.75, 0.53, 1.005)(Math.min((t - tstart) / 0.5, 1)) * 100, this.args.height - 60, this.textPaint, this.fonts.caveat);
                i++;
            }
            this.surface.flush();
            return Buffer.from(this.CanvasKit.getDataBytes(this.surface.makeImageSnapshot().encodeToData()));
        };
        this.log = (...args) => {
            if (this.args.verbose) {
                console.log(...args);
            }
        };
        this.run = async () => {
            let outProcess;
            let outProcessError;
            try {
                outProcess = start_process_1.startProcess(this.args);
                outProcess.on("exit", (code) => {
                    this.log("Output ffmpeg exited", code);
                });
                outProcess.catch((err) => {
                    console.log(err);
                    outProcessError = err;
                });
                let frame = 0;
                while (true) {
                    this.timer.start("draw");
                    const bufferData = this.draw(frame / this.args.framerate);
                    this.timer.stop("draw");
                    this.timer.print("draw");
                    if (bufferData && !outProcessError) {
                        await new Promise((r) => outProcess.stdin.write(bufferData, r));
                        frame++;
                    }
                    else {
                        break;
                    }
                }
                outProcess.stdin.end();
            }
            catch (err) {
                outProcess.kill();
                throw err;
            }
            finally {
                this.log("done");
            }
            return;
        };
        this.CanvasKit = CanvasKit;
        this.args = args;
        this.timer = new timer_1.default("ms");
        this.context = this.CanvasKit.currentContext();
        this.surface = this.CanvasKit.MakeSurface(this.args.width, this.args.height);
        if (!this.surface) {
            console.log("Could not make surface");
            return;
        }
        this.skcanvas = this.surface.getCanvas();
        this.paint = new this.CanvasKit.Paint();
        this.paint.setAntiAlias(true);
        this.assets = {};
    }
}
exports.Renderer = Renderer;


/***/ }),

/***/ 406:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startProcess = void 0;
const execa_1 = __importDefault(__webpack_require__(5447));
const toString = (x) => x.toString();
function startProcess(params) {
    const { fast, outPath, loopAudio, loglevel, hideBanner, width, height, framerate, audioFilePath, verbose, ffmpegPath, } = params;
    // https://superuser.com/questions/556029/how-do-i-convert-a-video-to-gif-using-ffmpeg-with-reasonable-quality
    // -f image2pipe -framerate 1 -i - -c:v libx264 -vf format=yuv420p -r 25 -movflags +faststart out.mp4
    const args = [
        ...(hideBanner ? ["-hide_banner"] : []),
        ...["-loglevel", loglevel],
        ...["-f", "image2pipe"],
        // ...([ '-f', 'rawvideo']),
        // ...(['-vcodec', 'rawvideo']),
        // ...(['-pix_fmt', 'rgba']),
        ...["-r", framerate],
        ...["-s", `${width}x${height}`],
        ...["-i", "-"],
        ...(audioFilePath && loopAudio ? ["-stream_loop", "-1"] : []),
        ...(audioFilePath ? ["-i", audioFilePath, "-shortest"] : []),
        ...["-map", "0:v:0"],
        ...(audioFilePath ? ["-map", "1:a:0"] : []),
        ...(audioFilePath ? ["-acodec", "aac"] : []),
        ...(audioFilePath ? ["-b:a", "128k"] : []),
        ...["-vf", "format=yuv420p"],
        ...["-c:v", "libx264"],
        ...["-profile:v", "high"],
        ...(fast ? ["-preset:v", "ultrafast"] : ["-preset:v", "medium"]),
        ...["-crf", "18"],
        ...["-r", framerate],
        ...["-movflags", "+faststart"],
        ...["-y", outPath],
    ].map(toString);
    if (verbose)
        console.log("ffmpeg", args.join(" "));
    return execa_1.default(ffmpegPath, args, {
        encoding: null,
        buffer: false,
        stdin: "pipe",
        stdout: process.stdout,
        stderr: process.stderr,
    });
}
exports.startProcess = startProcess;
exports.default = startProcess;


/***/ }),

/***/ 2170:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SvgRenderer = void 0;
const fs_1 = __webpack_require__(5747);
const svg_parser_1 = __webpack_require__(8481);
const svg_path_parser_1 = __importDefault(__webpack_require__(9594));
const colors_1 = __importDefault(__webpack_require__(2366));
const parse_transform_1 = __webpack_require__(5302);
class SvgRenderer {
    constructor(CanvasKit, args) {
        this.parse = (CanvasKit) => {
            const setProps = (props) => {
                this.props = props;
                if (this.props.viewBox) {
                    this.viewBox = this.props.viewBox.split(" ").map((x) => Number(x));
                }
                console.log(this.props);
            };
            function parseSvgPaths(svg) {
                if (svg.children && svg.children.length > 0) {
                    for (let i = 0; i < svg.children.length; i++) {
                        if (svg.children[i].type === "element") {
                            switch (svg.children[i].tagName) {
                                case "svg":
                                    setProps(svg.children[i].properties);
                                    parseSvgPaths(svg.children[i]);
                                    break;
                                case "ellipse":
                                    parseSvgPaths(svg.children[i]);
                                    break;
                                case "circle":
                                    parseSvgPaths(svg.children[i]);
                                    break;
                                case "rect":
                                    parseSvgPaths(svg.children[i]);
                                    break;
                                case "g":
                                    parseSvgPaths(svg.children[i]);
                                    break;
                                case "path": {
                                    svg.children[i].Path = CanvasKit.MakePathFromSVGString(svg_path_parser_1.default(svg.children[i].properties.d)
                                        .map((y) => {
                                        return Object.keys(y)
                                            .filter((z) => z !== "command" && z !== "relative")
                                            .map((z, i) => (i > 0 ? Number(y[z]) : y[z]));
                                    })
                                        .join(" "));
                                    parseSvgPaths(svg.children[i]);
                                }
                                default:
                                    break;
                            }
                        }
                    }
                }
            }
            parseSvgPaths(this.dom);
        };
        this.render = (CanvasKit, paint, skcanvas) => {
            function renderSvgChildren(svg) {
                if (svg.children && svg.children.length > 0) {
                    for (let i = 0; i < svg.children.length; i++) {
                        if (svg.children[i].type === "element") {
                            switch (svg.children[i].tagName) {
                                case "svg":
                                    renderSvgChildren(svg.children[i]);
                                    break;
                                case "g":
                                    renderSvgChildren(svg.children[i]);
                                    break;
                                case "ellipse":
                                    const { cx, cy, rx, ry } = svg.children[i].properties;
                                    const inputRect = [cx, cy, rx, ry];
                                    const opacity = svg.children[i].properties["opacity"] || "1";
                                    paint.setAlphaf(Number(opacity));
                                    const fill = svg.children[i].properties["fill"];
                                    if (fill) {
                                        const fillColor = CanvasKit.parseColorString(colors_1.default[fill] || fill);
                                        paint.setColor(fillColor);
                                        paint.setStyle(CanvasKit.PaintStyle.Fill);
                                        skcanvas.drawOval(inputRect, paint);
                                    }
                                    const stroke = svg.children[i].properties["stroke"];
                                    if (stroke) {
                                        paint.setStrokeMiter(svg.children[i].properties["stroke-miterlimit"] || 2);
                                        paint.setStrokeCap(svg.children[i].properties["stroke-linecap"] || "round");
                                        paint.setStrokeJoin(svg.children[i].properties["stroke-linejoin"] || "round");
                                        paint.setStrokeWidth(svg.children[i].properties["stroke-width"] || 0);
                                        paint.setColor(CanvasKit.parseColorString(colors_1.default[stroke] || stroke));
                                        paint.setStyle(CanvasKit.PaintStyle.Stroke);
                                        skcanvas.drawOval(inputRect, paint);
                                    }
                                    renderSvgChildren(svg.children[i]);
                                    break;
                                case "circle":
                                    {
                                        const { cx, cy, r } = svg.children[i].properties;
                                        const opacity = svg.children[i].properties["opacity"] || "1";
                                        paint.setAlphaf(Number(opacity));
                                        const fill = svg.children[i].properties["fill"];
                                        if (fill) {
                                            const fillColor = CanvasKit.parseColorString(colors_1.default[fill] || fill);
                                            paint.setColor(fillColor);
                                            paint.setStyle(CanvasKit.PaintStyle.Fill);
                                            skcanvas.drawCircle(cx, cy, r, paint);
                                        }
                                        const stroke = svg.children[i].properties["stroke"];
                                        if (stroke) {
                                            paint.setStrokeMiter(svg.children[i].properties["stroke-miterlimit"] || 2);
                                            paint.setStrokeCap(svg.children[i].properties["stroke-linecap"] || "round");
                                            paint.setStrokeJoin(svg.children[i].properties["stroke-linejoin"] || "round");
                                            paint.setStrokeWidth(svg.children[i].properties["stroke-width"] || 0);
                                            paint.setColor(CanvasKit.parseColorString(colors_1.default[stroke] || stroke));
                                            paint.setStyle(CanvasKit.PaintStyle.Stroke);
                                            skcanvas.drawCircle(cx, cy, r, paint);
                                        }
                                        renderSvgChildren(svg.children[i]);
                                    }
                                    break;
                                case "path": {
                                    if (svg.children[i].Path) {
                                        if (svg.children[i].properties.transform) {
                                            const matrix = parse_transform_1.parseTransform(svg.children[i].properties.transform);
                                            matrix && svg.children[i].Path.transform(matrix);
                                        }
                                        const fill = svg.children[i].properties["fill"] || "";
                                        if (fill) {
                                            // console.log(fill);
                                            const fillColor = CanvasKit.parseColorString(colors_1.default[fill] || fill);
                                            const opacity = svg.children[i].properties["opacity"] || "1";
                                            // fillColor[3] = Number(opacity);
                                            paint.setAlphaf(Number(opacity));
                                            paint.setColor(fillColor);
                                            paint.setStyle(CanvasKit.PaintStyle.Fill);
                                            skcanvas.drawPath(svg.children[i].Path, paint);
                                        }
                                        const stroke = svg.children[i].properties["stroke"] || "";
                                        if (stroke) {
                                            paint.setColor(CanvasKit.parseColorString(colors_1.default[stroke] || stroke));
                                            const strokeMiterlimit = svg.children[i].properties["stroke-miterlimit"] || "";
                                            strokeMiterlimit && paint.setStrokeMiter(strokeMiterlimit);
                                            const strokeWidth = svg.children[i].properties["stroke-width"] || "";
                                            strokeWidth && paint.setStrokeWidth(strokeWidth);
                                            const linecap = svg.children[i].properties["stroke-linecap"] || "";
                                            linecap && paint.setStrokeCap(linecap);
                                            const linejoin = svg.children[i].properties["stroke-linejoin"] || "";
                                            linejoin && paint.setStrokeJoin(linejoin);
                                            paint.setStyle(CanvasKit.PaintStyle.Stroke);
                                            skcanvas.drawPath(svg.children[i].Path, paint);
                                        }
                                    }
                                    renderSvgChildren(svg.children[i]);
                                }
                                default:
                                    break;
                            }
                        }
                    }
                }
            }
            renderSvgChildren(this.dom);
        };
        this.filepath = args.filepath;
        this.dom = svg_parser_1.parse(fs_1.readFileSync(this.filepath, "utf-8"));
        this.parse(CanvasKit);
    }
}
exports.SvgRenderer = SvgRenderer;
exports.default = SvgRenderer;


/***/ }),

/***/ 2366:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Colors = void 0;
exports.Colors = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgrey: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    grey: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
};
exports.default = exports.Colors;


/***/ }),

/***/ 5192:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readJSON = void 0;
const fs_1 = __importDefault(__webpack_require__(5747));
const path_1 = __importDefault(__webpack_require__(5622));
const jsonc_parser_1 = __webpack_require__(245);
function readJSON(filepath) {
    const p = path_1.default.isAbsolute(filepath) ? filepath : path_1.default.join(process.cwd(), filepath);
    return jsonc_parser_1.parse(fs_1.default.readFileSync(p, 'utf-8'));
}
exports.readJSON = readJSON;


/***/ }),

/***/ 8109:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadFonts = void 0;
const fs_1 = __webpack_require__(5747);
const path_1 = __webpack_require__(5622);
async function loadFonts(fonts) {
    return new Promise((resolve, reject) => {
        const buffers = [];
        fonts.forEach((font) => {
            fs_1.readFile(__webpack_require__.ab + "fonts/" + font, (err, data) => {
                if (err)
                    return reject(err);
                buffers.push(data);
                if (buffers.length == fonts.length) {
                    resolve(buffers);
                }
            });
        });
    });
}
exports.loadFonts = loadFonts;


/***/ }),

/***/ 4734:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.locate = exports.getLocator = void 0;
function getLocator(source, options = {}) {
    const offsetLine = options.offsetLine || 0;
    const offsetColumn = options.offsetColumn || 0;
    let originalLines = source.split('\n');
    let start = 0;
    let lineRanges = originalLines.map((line, i) => {
        const end = start + line.length + 1;
        const range = { start, end, line: i };
        start = end;
        return range;
    });
    let i = 0;
    function rangeContains(range, index) {
        return range.start <= index && index < range.end;
    }
    function getLocation(range, index) {
        return { line: offsetLine + range.line, column: offsetColumn + index - range.start, character: index };
    }
    function locate(search, startIndex) {
        if (typeof search === 'string') {
            search = source.indexOf(search, startIndex || 0);
        }
        let range = lineRanges[i];
        const d = search >= range.end ? 1 : -1;
        while (range) {
            if (rangeContains(range, search))
                return getLocation(range, search);
            i += d;
            range = lineRanges[i];
        }
    }
    ;
    return locate;
}
exports.getLocator = getLocator;
function locate(source, search, options) {
    if (typeof options === 'number') {
        throw new Error('locate takes a { startIndex, offsetLine, offsetColumn } object as the third argument');
    }
    return getLocator(source, options)(search, options && options.startIndex);
}
exports.locate = locate;


/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cubicBezier = exports.EasingFunctions = exports.clamp = exports.between = void 0;
exports.between = (v, a, b) => v >= a && v <= b;
exports.clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
/*
 * Easing Functions
 */
exports.EasingFunctions = {
    /**
     * no easing, no acceleration
     */
    linear: (t) => t,
    /**
     *accelerating from zero velocity
     */
    easeInQuad: (t) => t * t,
    /**
     *decelerating to zero velocity
     */
    easeOutQuad: (t) => t * (2 - t),
    /**
     *acceleration until halfway, then deceleration
     */
    easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    /**
     *accelerating from zero velocity
     */
    easeInCubic: (t) => t * t * t,
    /**
     *decelerating to zero velocity
     */
    easeOutCubic: (t) => --t * t * t + 1,
    /**
     * acceleration until halfway, then deceleration
     */
    easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
    /**
     * accelerating from zero velocity
     */
    easeInQuart: (t) => t * t * t * t,
    /**
     * decelerating to zero velocity
     */
    easeOutQuart: (t) => 1 - --t * t * t * t,
    /**
     * acceleration until halfway, then deceleration
     */
    easeInOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
    /**
     *  accelerating from zero velocity
     */
    easeInQuint: (t) => t * t * t * t * t,
    /**
     * decelerating to zero velocity
     */
    easeOutQuint: (t) => 1 + --t * t * t * t * t,
    /**
     * acceleration until halfway, then deceleration
     */
    easeInOutQuint: (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),
};
const scale = (arr, a) => arr.map((x) => x * a);
const sum = (arrs) => arrs[0].map((x, i) => {
    for (let j = 1; j < arrs.length; j++) {
        x += arrs[j][i];
    }
    return x;
});
function cubicBezier(x1, y1, x2, y2) {
    const p0 = [0, 0];
    const p1 = [x1, y1];
    const p2 = [x2, y2];
    const p3 = [1, 1];
    return function B(t) {
        const c0 = (1 - t) ** 3;
        const c1 = 3 * (1 - t) ** 2 * t;
        const c2 = 3 * (1 - t) * t ** 2;
        const c3 = t ** 3;
        return p0[1] * c0 + p1[1] * c1 + p2[1] * c2 + p3[1] * c3;
        return sum([scale(p0, c0), scale(p1, c1), scale(p2, c2), scale(p3, c3)]);
    };
}
exports.cubicBezier = cubicBezier;


/***/ }),

/***/ 5302:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseTransformAsMatrix = exports.parseTransform = void 0;
const console_1 = __webpack_require__(7082);
function parseTransform(transform) {
    const [kind, argstr] = transform.split("(").slice(0, 2).map(x => x.replace(")", "").trim()); //?
    return parseTransformAsMatrix(kind, argstr.split(/[,\s]/gim).map(x => { try {
        return Number(x);
    }
    catch (err) {
        console.log(err);
    } }));
}
exports.parseTransform = parseTransform;
function parseTransformAsMatrix(kind, args) {
    switch (kind) {
        case "translate":
            {
                console_1.assert(args.length == 2);
                return [1, 0, 0, 1, args[0], args[1], 0, 0, 1];
            }
            break;
        default: break;
    }
}
exports.parseTransformAsMatrix = parseTransformAsMatrix;
parseTransform("translate(435.34 -.34)"); //?


/***/ }),

/***/ 8481:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parse = void 0;
const locate_character_1 = __webpack_require__(4734);
const validNameCharacters = /[a-zA-Z0-9:_-]/;
const whitespace = /[\s\t\r\n]/;
const quotemark = /['"]/;
function repeat(str, i) {
    let result = '';
    while (i--)
        result += str;
    return result;
}
function parse(source) {
    let header = '';
    let stack = [];
    let state = metadata;
    let currentElement = null;
    let root = null;
    function error(message) {
        const { line, column } = locate_character_1.locate(source, i);
        const before = source.slice(0, i);
        const beforeLine = /(^|\n).*$/.exec(before)[0].replace(/\t/g, '  ');
        const after = source.slice(i);
        const afterLine = /.*(\n|$)/.exec(after)[0];
        const snippet = `${beforeLine}${afterLine}\n${repeat(' ', beforeLine.length)}^`;
        throw new Error(`${message} (${line}:${column}). If this is valid SVG, it's probably a bug in svg-parser. Please raise an issue at https://github.com/Rich-Harris/svg-parser/issues – thanks!\n\n${snippet}`);
    }
    function metadata() {
        while ((i < source.length && source[i] !== '<') || !validNameCharacters.test(source[i + 1])) {
            header += source[i++];
        }
        return neutral();
    }
    function neutral() {
        let text = '';
        while (i < source.length && source[i] !== '<')
            text += source[i++];
        if (/\S/.test(text)) {
            currentElement.children.push({ type: 'text', value: text });
        }
        if (source[i] === '<') {
            return tag;
        }
        return neutral;
    }
    function tag() {
        const char = source[i];
        if (char === '?')
            return neutral; // <?xml...
        if (char === '!') {
            if (source.slice(i + 1, i + 3) === '--')
                return comment;
            if (source.slice(i + 1, i + 8) === '[CDATA[')
                return cdata;
            if (/doctype/i.test(source.slice(i + 1, i + 8)))
                return neutral;
        }
        if (char === '/')
            return closingTag;
        const tagName = getName();
        const element = {
            type: 'element',
            tagName,
            properties: {},
            children: []
        };
        if (currentElement) {
            currentElement.children.push(element);
        }
        else {
            root = element;
        }
        let attribute;
        while (i < source.length && (attribute = getAttribute())) {
            element.properties[attribute.name] = attribute.value;
        }
        let selfClosing = false;
        if (source[i] === '/') {
            i += 1;
            selfClosing = true;
        }
        if (source[i] !== '>') {
            error('Expected >');
        }
        if (!selfClosing) {
            currentElement = element;
            stack.push(element);
        }
        return neutral;
    }
    function comment() {
        const index = source.indexOf('-->', i);
        if (!~index)
            error('expected -->');
        i = index + 2;
        return neutral;
    }
    function cdata() {
        const index = source.indexOf(']]>', i);
        if (!~index)
            error('expected ]]>');
        currentElement.children.push(source.slice(i + 7, index));
        i = index + 2;
        return neutral;
    }
    function closingTag() {
        const tagName = getName();
        if (!tagName)
            error('Expected tag name');
        if (tagName !== currentElement.tagName) {
            error(`Expected closing tag </${tagName}> to match opening tag <${currentElement.tagName}>`);
        }
        allowSpaces();
        if (source[i] !== '>') {
            error('Expected >');
        }
        stack.pop();
        currentElement = stack[stack.length - 1];
        return neutral;
    }
    function getName() {
        let name = '';
        while (i < source.length && validNameCharacters.test(source[i]))
            name += source[i++];
        return name;
    }
    function getAttribute() {
        if (!whitespace.test(source[i]))
            return null;
        allowSpaces();
        const name = getName();
        if (!name)
            return null;
        let value;
        allowSpaces();
        if (source[i] === '=') {
            i += 1;
            allowSpaces();
            value = getAttributeValue();
            //@ts-ignore
            if (!isNaN(value) && value.trim() !== '')
                value = +value; // TODO whitelist numeric attributes?
        }
        //@ts-ignore
        return { name, value };
    }
    function getAttributeValue() {
        return quotemark.test(source[i]) ? getQuotedAttributeValue() : getUnquotedAttributeValue();
    }
    function getUnquotedAttributeValue() {
        let value = '';
        do {
            const char = source[i];
            if (char === ' ' || char === '>' || char === '/') {
                return value;
            }
            value += char;
            i += 1;
        } while (i < source.length);
        return value;
    }
    function getQuotedAttributeValue() {
        const quotemark = source[i++];
        let value = '';
        let escaped = false;
        while (i < source.length) {
            const char = source[i++];
            if (char === quotemark && !escaped) {
                return value;
            }
            if (char === '\\' && !escaped) {
                escaped = true;
            }
            value += escaped ? `\\${char}` : char;
            escaped = false;
        }
    }
    function allowSpaces() {
        while (i < source.length && whitespace.test(source[i]))
            i += 1;
    }
    let i = metadata.length;
    while (i < source.length) {
        if (!state)
            error('Unexpected character');
        state = state();
        i += 1;
    }
    if (state !== neutral) {
        error('Unexpected end of input');
    }
    if (root.tagName === 'svg')
        root.metadata = header;
    return {
        type: 'root',
        children: [root]
    };
}
exports.parse = parse;


/***/ }),

/***/ 3302:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.time = exports.Timer = void 0;
const console_1 = __webpack_require__(7082);
const TimerUnits = {
    ms: (val) => val,
    s: (val) => val / 1000,
    min: (val) => val / 60000,
    hr: (val) => val / 3600000
};
class Timer {
    constructor(unit) {
        this.times = new Map();
        this.start = (key) => {
            this.times.set(key, Date.now());
        };
        this.stop = (key) => {
            console_1.assert(this.times.has(key), `key ${key} not declared yet!`);
            const dt = Date.now() - this.times.get(key);
            this.times.set(key, dt);
            return dt;
        };
        this.print = (key) => {
            const unit = this.unit;
            const fn = TimerUnits[unit];
            const formatfn = (val) => fn(val).toFixed(4) + unit;
            if (key) {
                console_1.assert(this.times.has(key), `key ${key} not declared yet!`);
                console.log(key + ":", formatfn(this.times.get(key)));
            }
            else {
                this.times.forEach((val, key) => {
                    console.log(key + ":", formatfn(val));
                });
            }
        };
        this.unit = unit || "s";
    }
}
exports.Timer = Timer;
exports.time = () => {
    const t0 = Date.now();
    return () => Date.now() - t0;
};
exports.default = Timer;


/***/ }),

/***/ 2357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 4293:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 3129:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 7082:
/***/ ((module) => {

"use strict";
module.exports = require("console");

/***/ }),

/***/ 8614:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__webpack_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(6144);
/******/ })()
;