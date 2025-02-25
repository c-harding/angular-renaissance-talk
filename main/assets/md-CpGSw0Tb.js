import{d as G,h as we,z as _t,f as bt,o as j,e as M,i as pe,C as Tt,t as Ce,j as Q,ac as ye,b as ue,w as L,g as H,v as Ee,x as Be}from"./modules/vue-DfG9avWx.js";import{u as W,f as Re}from"./slidev/context-BXJk5iot.js";import{f as Ae,g as Ne}from"./modules/unplugin-icons-49lzZ80b.js";import{_ as ae}from"./SmartLink.vue_vue_type_script_setup_true_lang-C1d_CiQh.js";import"./index-D3OSzOQO.js";import{_ as _e}from"./Layout.vue_vue_type_script_setup_true_lang-CVWMUOKG.js";import"./modules/shiki-BZmfkvGE.js";var $={},et,vt;function be(){return vt||(vt=1,et=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),et}var nt={},U={},Lt;function F(){if(Lt)return U;Lt=1;let r;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return U.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17},U.getSymbolTotalCodewords=function(e){return o[e]},U.getBCHDigit=function(i){let e=0;for(;i!==0;)e++,i>>>=1;return e},U.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');r=e},U.isKanjiModeEnabled=function(){return typeof r<"u"},U.toSJIS=function(e){return r(e)},U}var rt={},qt;function Pt(){return qt||(qt=1,function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function o(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+i)}}r.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4},r.from=function(e,t){if(r.isValid(e))return e;try{return o(e)}catch{return t}}}(rt)),rt}var ot,Dt;function Te(){if(Dt)return ot;Dt=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(o){const i=Math.floor(o/8);return(this.buffer[i]>>>7-o%8&1)===1},put:function(o,i){for(let e=0;e<i;e++)this.putBit((o>>>i-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(o){const i=Math.floor(this.length/8);this.buffer.length<=i&&this.buffer.push(0),o&&(this.buffer[i]|=128>>>this.length%8),this.length++}},ot=r,ot}var it,kt;function Pe(){if(kt)return it;kt=1;function r(o){if(!o||o<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=o,this.data=new Uint8Array(o*o),this.reservedBit=new Uint8Array(o*o)}return r.prototype.set=function(o,i,e,t){const n=o*this.size+i;this.data[n]=e,t&&(this.reservedBit[n]=!0)},r.prototype.get=function(o,i){return this.data[o*this.size+i]},r.prototype.xor=function(o,i,e){this.data[o*this.size+i]^=e},r.prototype.isReserved=function(o,i){return this.reservedBit[o*this.size+i]},it=r,it}var st={},Ut;function Se(){return Ut||(Ut=1,function(r){const o=F().getSymbolSize;r.getRowColCoords=function(e){if(e===1)return[];const t=Math.floor(e/7)+2,n=o(e),s=n===145?26:Math.ceil((n-13)/(2*t-2))*2,a=[n-7];for(let u=1;u<t-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},r.getPositions=function(e){const t=[],n=r.getRowColCoords(e),s=n.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||t.push([n[a],n[u]]);return t}}(st)),st}var ut={},Ft;function Ie(){if(Ft)return ut;Ft=1;const r=F().getSymbolSize,o=7;return ut.getPositions=function(e){const t=r(e);return[[0,0],[t-o,0],[0,t-o]]},ut}var at={},Vt;function Me(){return Vt||(Vt=1,function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const o={N1:3,N2:3,N3:40,N4:10};r.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7},r.from=function(t){return r.isValid(t)?parseInt(t,10):void 0},r.getPenaltyN1=function(t){const n=t.size;let s=0,a=0,u=0,c=null,l=null;for(let E=0;E<n;E++){a=u=0,c=l=null;for(let g=0;g<n;g++){let f=t.get(E,g);f===c?a++:(a>=5&&(s+=o.N1+(a-5)),c=f,a=1),f=t.get(g,E),f===l?u++:(u>=5&&(s+=o.N1+(u-5)),l=f,u=1)}a>=5&&(s+=o.N1+(a-5)),u>=5&&(s+=o.N1+(u-5))}return s},r.getPenaltyN2=function(t){const n=t.size;let s=0;for(let a=0;a<n-1;a++)for(let u=0;u<n-1;u++){const c=t.get(a,u)+t.get(a,u+1)+t.get(a+1,u)+t.get(a+1,u+1);(c===4||c===0)&&s++}return s*o.N2},r.getPenaltyN3=function(t){const n=t.size;let s=0,a=0,u=0;for(let c=0;c<n;c++){a=u=0;for(let l=0;l<n;l++)a=a<<1&2047|t.get(c,l),l>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|t.get(l,c),l>=10&&(u===1488||u===93)&&s++}return s*o.N3},r.getPenaltyN4=function(t){let n=0;const s=t.data.length;for(let u=0;u<s;u++)n+=t.data[u];return Math.abs(Math.ceil(n*100/s/5)-10)*o.N4};function i(e,t,n){switch(e){case r.Patterns.PATTERN000:return(t+n)%2===0;case r.Patterns.PATTERN001:return t%2===0;case r.Patterns.PATTERN010:return n%3===0;case r.Patterns.PATTERN011:return(t+n)%3===0;case r.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(n/3))%2===0;case r.Patterns.PATTERN101:return t*n%2+t*n%3===0;case r.Patterns.PATTERN110:return(t*n%2+t*n%3)%2===0;case r.Patterns.PATTERN111:return(t*n%3+(t+n)%2)%2===0;default:throw new Error("bad maskPattern:"+e)}}r.applyMask=function(t,n){const s=n.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)n.isReserved(u,a)||n.xor(u,a,i(t,u,a))},r.getBestMask=function(t,n){const s=Object.keys(r.Patterns).length;let a=0,u=1/0;for(let c=0;c<s;c++){n(c),r.applyMask(c,t);const l=r.getPenaltyN1(t)+r.getPenaltyN2(t)+r.getPenaltyN3(t)+r.getPenaltyN4(t);r.applyMask(c,t),l<u&&(u=l,a=c)}return a}}(at)),at}var Y={},zt;function ce(){if(zt)return Y;zt=1;const r=Pt(),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Y.getBlocksCount=function(t,n){switch(n){case r.L:return o[(t-1)*4+0];case r.M:return o[(t-1)*4+1];case r.Q:return o[(t-1)*4+2];case r.H:return o[(t-1)*4+3];default:return}},Y.getTotalCodewordsCount=function(t,n){switch(n){case r.L:return i[(t-1)*4+0];case r.M:return i[(t-1)*4+1];case r.Q:return i[(t-1)*4+2];case r.H:return i[(t-1)*4+3];default:return}},Y}var ct={},J={},$t;function ve(){if($t)return J;$t=1;const r=new Uint8Array(512),o=new Uint8Array(256);return function(){let e=1;for(let t=0;t<255;t++)r[t]=e,o[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)r[t]=r[t-255]}(),J.log=function(e){if(e<1)throw new Error("log("+e+")");return o[e]},J.exp=function(e){return r[e]},J.mul=function(e,t){return e===0||t===0?0:r[o[e]+o[t]]},J}var Ht;function Le(){return Ht||(Ht=1,function(r){const o=ve();r.mul=function(e,t){const n=new Uint8Array(e.length+t.length-1);for(let s=0;s<e.length;s++)for(let a=0;a<t.length;a++)n[s+a]^=o.mul(e[s],t[a]);return n},r.mod=function(e,t){let n=new Uint8Array(e);for(;n.length-t.length>=0;){const s=n[0];for(let u=0;u<t.length;u++)n[u]^=o.mul(t[u],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},r.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let n=0;n<e;n++)t=r.mul(t,new Uint8Array([1,o.exp(n)]));return t}}(ct)),ct}var lt,Kt;function qe(){if(Kt)return lt;Kt=1;const r=Le();function o(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}return o.prototype.initialize=function(e){this.degree=e,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const n=r.mod(t,this.genPoly),s=this.degree-n.length;if(s>0){const a=new Uint8Array(this.degree);return a.set(n,s),a}return n},lt=o,lt}var ft={},dt={},ht={},Jt;function le(){return Jt||(Jt=1,ht.isValid=function(o){return!isNaN(o)&&o>=1&&o<=40}),ht}var v={},jt;function fe(){if(jt)return v;jt=1;const r="[0-9]+",o="[A-Z $%*+\\-./:]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const e="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+`)(?:.|[\r
]))+`;v.KANJI=new RegExp(i,"g"),v.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),v.BYTE=new RegExp(e,"g"),v.NUMERIC=new RegExp(r,"g"),v.ALPHANUMERIC=new RegExp(o,"g");const t=new RegExp("^"+i+"$"),n=new RegExp("^"+r+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return v.testKanji=function(u){return t.test(u)},v.testNumeric=function(u){return n.test(u)},v.testAlphanumeric=function(u){return s.test(u)},v}var Ot;function V(){return Ot||(Ot=1,function(r){const o=le(),i=fe();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!o.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},r.getBestModeForData=function(n){return i.testNumeric(n)?r.NUMERIC:i.testAlphanumeric(n)?r.ALPHANUMERIC:i.testKanji(n)?r.KANJI:r.BYTE},r.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},r.isValid=function(n){return n&&n.bit&&n.ccBits};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+t)}}r.from=function(n,s){if(r.isValid(n))return n;try{return e(n)}catch{return s}}}(dt)),dt}var Yt;function De(){return Yt||(Yt=1,function(r){const o=F(),i=ce(),e=Pt(),t=V(),n=le(),s=7973,a=o.getBCHDigit(s);function u(g,f,b){for(let T=1;T<=40;T++)if(f<=r.getCapacity(T,b,g))return T}function c(g,f){return t.getCharCountIndicator(g,f)+4}function l(g,f){let b=0;return g.forEach(function(T){const S=c(T.mode,f);b+=S+T.getBitsLength()}),b}function E(g,f){for(let b=1;b<=40;b++)if(l(g,b)<=r.getCapacity(b,f,t.MIXED))return b}r.from=function(f,b){return n.isValid(f)?parseInt(f,10):b},r.getCapacity=function(f,b,T){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof T>"u"&&(T=t.BYTE);const S=o.getSymbolTotalCodewords(f),A=i.getTotalCodewordsCount(f,b),P=(S-A)*8;if(T===t.MIXED)return P;const N=P-c(T,f);switch(T){case t.NUMERIC:return Math.floor(N/10*3);case t.ALPHANUMERIC:return Math.floor(N/11*2);case t.KANJI:return Math.floor(N/13);case t.BYTE:default:return Math.floor(N/8)}},r.getBestVersionForData=function(f,b){let T;const S=e.from(b,e.M);if(Array.isArray(f)){if(f.length>1)return E(f,S);if(f.length===0)return 1;T=f[0]}else T=f;return u(T.mode,T.getLength(),S)},r.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let b=f<<12;for(;o.getBCHDigit(b)-a>=0;)b^=s<<o.getBCHDigit(b)-a;return f<<12|b}}(ft)),ft}var gt={},Qt;function ke(){if(Qt)return gt;Qt=1;const r=F(),o=1335,i=21522,e=r.getBCHDigit(o);return gt.getEncodedBits=function(n,s){const a=n.bit<<3|s;let u=a<<10;for(;r.getBCHDigit(u)-e>=0;)u^=o<<r.getBCHDigit(u)-e;return(a<<10|u)^i},gt}var mt={},wt,Gt;function Ue(){if(Gt)return wt;Gt=1;const r=V();function o(i){this.mode=r.NUMERIC,this.data=i.toString()}return o.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t,n,s;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),s=parseInt(n,10),e.put(s,10);const a=this.data.length-t;a>0&&(n=this.data.substr(t),s=parseInt(n,10),e.put(s,a*3+1))},wt=o,wt}var pt,Wt;function Fe(){if(Wt)return pt;Wt=1;const r=V(),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(e){this.mode=r.ALPHANUMERIC,this.data=e}return i.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let s=o.indexOf(this.data[n])*45;s+=o.indexOf(this.data[n+1]),t.put(s,11)}this.data.length%2&&t.put(o.indexOf(this.data[n]),6)},pt=i,pt}var Ct,Zt;function Ve(){if(Zt)return Ct;Zt=1;const r=V();function o(i){this.mode=r.BYTE,typeof i=="string"?this.data=new TextEncoder().encode(i):this.data=new Uint8Array(i)}return o.getBitsLength=function(e){return e*8},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(i){for(let e=0,t=this.data.length;e<t;e++)i.put(this.data[e],8)},Ct=o,Ct}var yt,Xt;function ze(){if(Xt)return yt;Xt=1;const r=V(),o=F();function i(e){this.mode=r.KANJI,this.data=e}return i.getBitsLength=function(t){return t*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=o.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},yt=i,yt}var Et={exports:{}},xt;function $e(){return xt||(xt=1,function(r){var o={single_source_shortest_paths:function(i,e,t){var n={},s={};s[e]=0;var a=o.PriorityQueue.make();a.push(e,0);for(var u,c,l,E,g,f,b,T,S;!a.empty();){u=a.pop(),c=u.value,E=u.cost,g=i[c]||{};for(l in g)g.hasOwnProperty(l)&&(f=g[l],b=E+f,T=s[l],S=typeof s[l]>"u",(S||T>b)&&(s[l]=b,a.push(l,b),n[l]=c))}if(typeof t<"u"&&typeof s[t]>"u"){var A=["Could not find a path from ",e," to ",t,"."].join("");throw new Error(A)}return n},extract_shortest_path_from_predecessor_list:function(i,e){for(var t=[],n=e;n;)t.push(n),i[n],n=i[n];return t.reverse(),t},find_path:function(i,e,t){var n=o.single_source_shortest_paths(i,e,t);return o.extract_shortest_path_from_predecessor_list(n,t)},PriorityQueue:{make:function(i){var e=o.PriorityQueue,t={},n;i=i||{};for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t.queue=[],t.sorter=i.sorter||e.default_sorter,t},default_sorter:function(i,e){return i.cost-e.cost},push:function(i,e){var t={value:i,cost:e};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=o}(Et)),Et.exports}var te;function He(){return te||(te=1,function(r){const o=V(),i=Ue(),e=Fe(),t=Ve(),n=ze(),s=fe(),a=F(),u=$e();function c(A){return unescape(encodeURIComponent(A)).length}function l(A,P,N){const B=[];let I;for(;(I=A.exec(N))!==null;)B.push({data:I[0],index:I.index,mode:P,length:I[0].length});return B}function E(A){const P=l(s.NUMERIC,o.NUMERIC,A),N=l(s.ALPHANUMERIC,o.ALPHANUMERIC,A);let B,I;return a.isKanjiModeEnabled()?(B=l(s.BYTE,o.BYTE,A),I=l(s.KANJI,o.KANJI,A)):(B=l(s.BYTE_KANJI,o.BYTE,A),I=[]),P.concat(N,B,I).sort(function(C,p){return C.index-p.index}).map(function(C){return{data:C.data,mode:C.mode,length:C.length}})}function g(A,P){switch(P){case o.NUMERIC:return i.getBitsLength(A);case o.ALPHANUMERIC:return e.getBitsLength(A);case o.KANJI:return n.getBitsLength(A);case o.BYTE:return t.getBitsLength(A)}}function f(A){return A.reduce(function(P,N){const B=P.length-1>=0?P[P.length-1]:null;return B&&B.mode===N.mode?(P[P.length-1].data+=N.data,P):(P.push(N),P)},[])}function b(A){const P=[];for(let N=0;N<A.length;N++){const B=A[N];switch(B.mode){case o.NUMERIC:P.push([B,{data:B.data,mode:o.ALPHANUMERIC,length:B.length},{data:B.data,mode:o.BYTE,length:B.length}]);break;case o.ALPHANUMERIC:P.push([B,{data:B.data,mode:o.BYTE,length:B.length}]);break;case o.KANJI:P.push([B,{data:B.data,mode:o.BYTE,length:c(B.data)}]);break;case o.BYTE:P.push([{data:B.data,mode:o.BYTE,length:c(B.data)}])}}return P}function T(A,P){const N={},B={start:{}};let I=["start"];for(let h=0;h<A.length;h++){const C=A[h],p=[];for(let d=0;d<C.length;d++){const R=C[d],m=""+h+d;p.push(m),N[m]={node:R,lastCount:0},B[m]={};for(let y=0;y<I.length;y++){const w=I[y];N[w]&&N[w].node.mode===R.mode?(B[w][m]=g(N[w].lastCount+R.length,R.mode)-g(N[w].lastCount,R.mode),N[w].lastCount+=R.length):(N[w]&&(N[w].lastCount=R.length),B[w][m]=g(R.length,R.mode)+4+o.getCharCountIndicator(R.mode,P))}}I=p}for(let h=0;h<I.length;h++)B[I[h]].end=0;return{map:B,table:N}}function S(A,P){let N;const B=o.getBestModeForData(A);if(N=o.from(P,B),N!==o.BYTE&&N.bit<B.bit)throw new Error('"'+A+'" cannot be encoded with mode '+o.toString(N)+`.
 Suggested mode is: `+o.toString(B));switch(N===o.KANJI&&!a.isKanjiModeEnabled()&&(N=o.BYTE),N){case o.NUMERIC:return new i(A);case o.ALPHANUMERIC:return new e(A);case o.KANJI:return new n(A);case o.BYTE:return new t(A)}}r.fromArray=function(P){return P.reduce(function(N,B){return typeof B=="string"?N.push(S(B,null)):B.data&&N.push(S(B.data,B.mode)),N},[])},r.fromString=function(P,N){const B=E(P,a.isKanjiModeEnabled()),I=b(B),h=T(I,N),C=u.find_path(h.map,"start","end"),p=[];for(let d=1;d<C.length-1;d++)p.push(h.table[C[d]].node);return r.fromArray(f(p))},r.rawSplit=function(P){return r.fromArray(E(P,a.isKanjiModeEnabled()))}}(mt)),mt}var ee;function Ke(){if(ee)return nt;ee=1;const r=F(),o=Pt(),i=Te(),e=Pe(),t=Se(),n=Ie(),s=Me(),a=ce(),u=qe(),c=De(),l=ke(),E=V(),g=He();function f(h,C){const p=h.size,d=n.getPositions(C);for(let R=0;R<d.length;R++){const m=d[R][0],y=d[R][1];for(let w=-1;w<=7;w++)if(!(m+w<=-1||p<=m+w))for(let _=-1;_<=7;_++)y+_<=-1||p<=y+_||(w>=0&&w<=6&&(_===0||_===6)||_>=0&&_<=6&&(w===0||w===6)||w>=2&&w<=4&&_>=2&&_<=4?h.set(m+w,y+_,!0,!0):h.set(m+w,y+_,!1,!0))}}function b(h){const C=h.size;for(let p=8;p<C-8;p++){const d=p%2===0;h.set(p,6,d,!0),h.set(6,p,d,!0)}}function T(h,C){const p=t.getPositions(C);for(let d=0;d<p.length;d++){const R=p[d][0],m=p[d][1];for(let y=-2;y<=2;y++)for(let w=-2;w<=2;w++)y===-2||y===2||w===-2||w===2||y===0&&w===0?h.set(R+y,m+w,!0,!0):h.set(R+y,m+w,!1,!0)}}function S(h,C){const p=h.size,d=c.getEncodedBits(C);let R,m,y;for(let w=0;w<18;w++)R=Math.floor(w/3),m=w%3+p-8-3,y=(d>>w&1)===1,h.set(R,m,y,!0),h.set(m,R,y,!0)}function A(h,C,p){const d=h.size,R=l.getEncodedBits(C,p);let m,y;for(m=0;m<15;m++)y=(R>>m&1)===1,m<6?h.set(m,8,y,!0):m<8?h.set(m+1,8,y,!0):h.set(d-15+m,8,y,!0),m<8?h.set(8,d-m-1,y,!0):m<9?h.set(8,15-m-1+1,y,!0):h.set(8,15-m-1,y,!0);h.set(d-8,8,1,!0)}function P(h,C){const p=h.size;let d=-1,R=p-1,m=7,y=0;for(let w=p-1;w>0;w-=2)for(w===6&&w--;;){for(let _=0;_<2;_++)if(!h.isReserved(R,w-_)){let k=!1;y<C.length&&(k=(C[y]>>>m&1)===1),h.set(R,w-_,k),m--,m===-1&&(y++,m=7)}if(R+=d,R<0||p<=R){R-=d,d=-d;break}}}function N(h,C,p){const d=new i;p.forEach(function(_){d.put(_.mode.bit,4),d.put(_.getLength(),E.getCharCountIndicator(_.mode,h)),_.write(d)});const R=r.getSymbolTotalCodewords(h),m=a.getTotalCodewordsCount(h,C),y=(R-m)*8;for(d.getLengthInBits()+4<=y&&d.put(0,4);d.getLengthInBits()%8!==0;)d.putBit(0);const w=(y-d.getLengthInBits())/8;for(let _=0;_<w;_++)d.put(_%2?17:236,8);return B(d,h,C)}function B(h,C,p){const d=r.getSymbolTotalCodewords(C),R=a.getTotalCodewordsCount(C,p),m=d-R,y=a.getBlocksCount(C,p),w=d%y,_=y-w,k=Math.floor(d/y),K=Math.floor(m/y),he=K+1,St=k-K,ge=new u(St);let Z=0;const O=new Array(y),It=new Array(y);let X=0;const me=new Uint8Array(h.buffer);for(let z=0;z<y;z++){const tt=z<_?K:he;O[z]=me.slice(Z,Z+tt),It[z]=ge.encode(O[z]),Z+=tt,X=Math.max(X,tt)}const x=new Uint8Array(d);let Mt=0,q,D;for(q=0;q<X;q++)for(D=0;D<y;D++)q<O[D].length&&(x[Mt++]=O[D][q]);for(q=0;q<St;q++)for(D=0;D<y;D++)x[Mt++]=It[D][q];return x}function I(h,C,p,d){let R;if(Array.isArray(h))R=g.fromArray(h);else if(typeof h=="string"){let k=C;if(!k){const K=g.rawSplit(h);k=c.getBestVersionForData(K,p)}R=g.fromString(h,k||40)}else throw new Error("Invalid data");const m=c.getBestVersionForData(R,p);if(!m)throw new Error("The amount of data is too big to be stored in a QR Code");if(!C)C=m;else if(C<m)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+m+`.
`);const y=N(C,p,R),w=r.getSymbolSize(C),_=new e(w);return f(_,C),b(_),T(_,C),A(_,p,0),C>=7&&S(_,C),P(_,y),isNaN(d)&&(d=s.getBestMask(_,A.bind(null,_,p))),s.applyMask(d,_),A(_,p,d),{modules:_,version:C,errorCorrectionLevel:p,maskPattern:d,segments:R}}return nt.create=function(C,p){if(typeof C>"u"||C==="")throw new Error("No input text");let d=o.M,R,m;return typeof p<"u"&&(d=o.from(p.errorCorrectionLevel,o.M),R=c.from(p.version),m=s.from(p.maskPattern),p.toSJISFunc&&r.setToSJISFunction(p.toSJISFunc)),I(C,R,d,m)},nt}var Bt={},Rt={},ne;function de(){return ne||(ne=1,function(r){function o(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let e=i.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+i);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(n){return[n,n]}))),e.length===6&&e.push("F","F");const t=parseInt(e.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+e.slice(0,6).join("")}}r.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=typeof e.margin>"u"||e.margin===null||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,s=e.scale||4;return{width:n,scale:n?4:s,margin:t,color:{dark:o(e.color.dark||"#000000ff"),light:o(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},r.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},r.getImageWidth=function(e,t){const n=r.getScale(e,t);return Math.floor((e+t.margin*2)*n)},r.qrToImageData=function(e,t,n){const s=t.modules.size,a=t.modules.data,u=r.getScale(s,n),c=Math.floor((s+n.margin*2)*u),l=n.margin*u,E=[n.color.light,n.color.dark];for(let g=0;g<c;g++)for(let f=0;f<c;f++){let b=(g*c+f)*4,T=n.color.light;if(g>=l&&f>=l&&g<c-l&&f<c-l){const S=Math.floor((g-l)/u),A=Math.floor((f-l)/u);T=E[a[S*s+A]?1:0]}e[b++]=T.r,e[b++]=T.g,e[b++]=T.b,e[b]=T.a}}}(Rt)),Rt}var re;function Je(){return re||(re=1,function(r){const o=de();function i(t,n,s){t.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function e(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(n,s,a){let u=a,c=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(c=e()),u=o.getOptions(u);const l=o.getImageWidth(n.modules.size,u),E=c.getContext("2d"),g=E.createImageData(l,l);return o.qrToImageData(g.data,n,u),i(E,c,l),E.putImageData(g,0,0),c},r.renderToDataURL=function(n,s,a){let u=a;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const c=r.render(n,s,u),l=u.type||"image/png",E=u.rendererOpts||{};return c.toDataURL(l,E.quality)}}(Bt)),Bt}var At={},oe;function je(){if(oe)return At;oe=1;const r=de();function o(t,n){const s=t.a/255,a=n+'="'+t.hex+'"';return s<1?a+" "+n+'-opacity="'+s.toFixed(2).slice(1)+'"':a}function i(t,n,s){let a=t+n;return typeof s<"u"&&(a+=" "+s),a}function e(t,n,s){let a="",u=0,c=!1,l=0;for(let E=0;E<t.length;E++){const g=Math.floor(E%n),f=Math.floor(E/n);!g&&!c&&(c=!0),t[E]?(l++,E>0&&g>0&&t[E-1]||(a+=c?i("M",g+s,.5+f+s):i("m",u,0),u=0,c=!1),g+1<n&&t[E+1]||(a+=i("h",l),l=0)):u++}return a}return At.render=function(n,s,a){const u=r.getOptions(s),c=n.modules.size,l=n.modules.data,E=c+u.margin*2,g=u.color.light.a?"<path "+o(u.color.light,"fill")+' d="M0 0h'+E+"v"+E+'H0z"/>':"",f="<path "+o(u.color.dark,"stroke")+' d="'+e(l,c,u.margin)+'"/>',b='viewBox="0 0 '+E+" "+E+'"',S='<svg xmlns="http://www.w3.org/2000/svg" '+(u.width?'width="'+u.width+'" height="'+u.width+'" ':"")+b+' shape-rendering="crispEdges">'+g+f+`</svg>
`;return typeof a=="function"&&a(null,S),S},At}var ie;function Oe(){if(ie)return $;ie=1;const r=be(),o=Ke(),i=Je(),e=je();function t(n,s,a,u,c){const l=[].slice.call(arguments,1),E=l.length,g=typeof l[E-1]=="function";if(!g&&!r())throw new Error("Callback required as last argument");if(g){if(E<2)throw new Error("Too few arguments provided");E===2?(c=a,a=s,s=u=void 0):E===3&&(s.getContext&&typeof c>"u"?(c=u,u=void 0):(c=u,u=a,a=s,s=void 0))}else{if(E<1)throw new Error("Too few arguments provided");return E===1?(a=s,s=u=void 0):E===2&&!s.getContext&&(u=a,a=s,s=void 0),new Promise(function(f,b){try{const T=o.create(a,u);f(n(T,s,u))}catch(T){b(T)}})}try{const f=o.create(a,u);c(null,n(f,s,u))}catch(f){c(f)}}return $.create=o.create,$.toCanvas=t.bind(null,i.render),$.toDataURL=t.bind(null,i.renderToDataURL),$.toString=t.bind(null,function(n,s,a){return e.render(n,a)}),$}var Nt=Oe();/*! vue-qrcode v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */const se="ready";var Ye=G({name:"VueQrcode",props:{value:{type:String,default:void 0},options:{type:Object,default:void 0},tag:{type:String,default:"canvas"}},emits:[se],watch:{$props:{deep:!0,immediate:!0,handler(){this.$el&&this.generate()}}},mounted(){this.generate()},methods:{generate(){const r=this.options||{},o=String(this.value),i=()=>{this.$emit(se,this.$el)};switch(this.tag){case"canvas":Nt.toCanvas(this.$el,o,r,e=>{if(e)throw e;i()});break;case"img":Nt.toDataURL(o,r,(e,t)=>{if(e)throw e;this.$el.src=t,this.$el.onload=i});break;case"svg":Nt.toString(o,r,(e,t)=>{if(e)throw e;const n=document.createElement("div");n.innerHTML=t;const s=n.querySelector("svg");if(s){const{attributes:a,childNodes:u}=s;Object.keys(a).forEach(c=>{const l=a[Number(c)];this.$el.setAttribute(l.name,l.value)}),Object.keys(u).forEach(c=>{const l=u[Number(c)];this.$el.appendChild(l.cloneNode(!0))}),i()}});break}}},render(){return we(this.tag,this.$slots.default)}});const Qe={class:"flex-1 flex flex-col min-h-0"},Ge={key:0,class:"text-center"},We=G({__name:"QrCode",props:{value:{},caption:{},color:{},errorCorrectionLevel:{},width:{},tag:{default:"svg"}},setup(r){W();const o=_t(()=>({color:r.color,errorCorrectionLevel:r.errorCorrectionLevel,width:r.width}));return(i,e)=>(j(),bt("div",Qe,[M(Tt(Ye),{value:i.value,options:o.value,tag:i.tag},null,8,["value","options","tag"]),i.caption?(j(),bt("div",Ge,Ce(i.caption),1)):pe("v-if",!0)]))}}),Ze=G({__name:"EndLink",props:{to:{}},setup(r){return W(),(o,i)=>(j(),bt("p",null,[Q(o.$slots,"default"),i[0]||(i[0]=ye()),M(ae,{to:o.to},null,8,["to"])]))}}),Xe={class:"flex gap-8 items-end *:flex-1 *:flex-basis-[max-content]"},xe=G({__name:"end",setup(r){const{$slidev:o}=W(),i=_t(()=>o.configs.authorUrl);return _t(()=>{if(i.value)return i.value.startsWith("/")||i.value.includes("://")?i.value:`https://${i.value}`}),(e,t)=>(j(),ue(_e,{"full-color":"","article-class":"mx-32","header-class":"h-8","logo-class":"h-32"},{header:L(()=>[M(ae,{class:"text-sm",to:i.value},null,8,["to"])]),footer:L(()=>[H("footer",Xe,[H("section",null,[Q(e.$slots,"default")]),H("section",null,[Q(e.$slots,"right")])])]),default:L(()=>[Q(e.$slots,"middle")]),_:3}))}}),tn={"max-w-max":""},cn={__name:"slides.md__slidev_23",setup(r){const{$clicksContext:o,$frontmatter:i}=W();return o.setup(),(e,t)=>{const n=Ze,s=Ae,a=Ne,u=We;return j(),ue(xe,Ee(Be(Tt(Re)(Tt(i),22))),{right:L(c=>[H("div",tn,[M(n,{to:"linkedin.com/company/qaware-gmbh"},{default:L(()=>[M(s)]),_:1}),M(n,{to:"github.com/qaware"},{default:L(()=>[M(a)]),_:1}),t[0]||(t[0]=H("hr",{"my-2":""},null,-1)),M(n,{to:"linkedin.com/in/charlie-harding"},{default:L(()=>[M(s)]),_:1}),M(n,{to:"github.com/c-harding"},{default:L(()=>[M(a)]),_:1})])]),middle:L(c=>[M(u,{value:"https://c-harding.github.io/angular-renaissance-talk",color:{light:"#00000000",dark:"#FFFFFFFF"},caption:"Folien"})]),default:L(()=>[t[1]||(t[1]=H("p",null,"Charlie Harding",-1)),M(n,{to:"charlie.harding@qaware.de"})]),_:1},16)}}};export{cn as default};
