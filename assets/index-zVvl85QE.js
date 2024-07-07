var $P=Object.defineProperty;var OP=(e,t,n)=>t in e?$P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ge=(e,t,n)=>(OP(e,typeof t!="symbol"?t+"":t,n),n);function VP(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function t0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wE={exports:{}},gh={},_E={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc=Symbol.for("react.element"),UP=Symbol.for("react.portal"),FP=Symbol.for("react.fragment"),zP=Symbol.for("react.strict_mode"),BP=Symbol.for("react.profiler"),HP=Symbol.for("react.provider"),WP=Symbol.for("react.context"),qP=Symbol.for("react.forward_ref"),GP=Symbol.for("react.suspense"),QP=Symbol.for("react.memo"),KP=Symbol.for("react.lazy"),P1=Symbol.iterator;function YP(e){return e===null||typeof e!="object"?null:(e=P1&&e[P1]||e["@@iterator"],typeof e=="function"?e:null)}var xE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},EE=Object.assign,IE={};function oa(e,t,n){this.props=e,this.context=t,this.refs=IE,this.updater=n||xE}oa.prototype.isReactComponent={};oa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function TE(){}TE.prototype=oa.prototype;function n0(e,t,n){this.props=e,this.context=t,this.refs=IE,this.updater=n||xE}var r0=n0.prototype=new TE;r0.constructor=n0;EE(r0,oa.prototype);r0.isPureReactComponent=!0;var b1=Array.isArray,SE=Object.prototype.hasOwnProperty,i0={current:null},kE={key:!0,ref:!0,__self:!0,__source:!0};function CE(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)SE.call(t,r)&&!kE.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fc,type:e,key:s,ref:o,props:i,_owner:i0.current}}function XP(e,t){return{$$typeof:fc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function s0(e){return typeof e=="object"&&e!==null&&e.$$typeof===fc}function JP(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var N1=/\/+/g;function Gf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?JP(""+e.key):t.toString(36)}function Cu(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fc:case UP:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Gf(o,0):r,b1(i)?(n="",e!=null&&(n=e.replace(N1,"$&/")+"/"),Cu(i,t,n,"",function(u){return u})):i!=null&&(s0(i)&&(i=XP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(N1,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",b1(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Gf(s,a);o+=Cu(s,t,n,l,i)}else if(l=YP(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Gf(s,a++),o+=Cu(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Yc(e,t,n){if(e==null)return e;var r=[],i=0;return Cu(e,r,"","",function(s){return t.call(n,s,i++)}),r}function ZP(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var At={current:null},Au={transition:null},e2={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:Au,ReactCurrentOwner:i0};ne.Children={map:Yc,forEach:function(e,t,n){Yc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yc(e,function(){t++}),t},toArray:function(e){return Yc(e,function(t){return t})||[]},only:function(e){if(!s0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=oa;ne.Fragment=FP;ne.Profiler=BP;ne.PureComponent=n0;ne.StrictMode=zP;ne.Suspense=GP;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e2;ne.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=EE({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=i0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)SE.call(t,l)&&!kE.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fc,type:e.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(e){return e={$$typeof:WP,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:HP,_context:e},e.Consumer=e};ne.createElement=CE;ne.createFactory=function(e){var t=CE.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:qP,render:e}};ne.isValidElement=s0;ne.lazy=function(e){return{$$typeof:KP,_payload:{_status:-1,_result:e},_init:ZP}};ne.memo=function(e,t){return{$$typeof:QP,type:e,compare:t===void 0?null:t}};ne.startTransition=function(e){var t=Au.transition;Au.transition={};try{e()}finally{Au.transition=t}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(e,t){return At.current.useCallback(e,t)};ne.useContext=function(e){return At.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return At.current.useDeferredValue(e)};ne.useEffect=function(e,t){return At.current.useEffect(e,t)};ne.useId=function(){return At.current.useId()};ne.useImperativeHandle=function(e,t,n){return At.current.useImperativeHandle(e,t,n)};ne.useInsertionEffect=function(e,t){return At.current.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return At.current.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return At.current.useMemo(e,t)};ne.useReducer=function(e,t,n){return At.current.useReducer(e,t,n)};ne.useRef=function(e){return At.current.useRef(e)};ne.useState=function(e){return At.current.useState(e)};ne.useSyncExternalStore=function(e,t,n){return At.current.useSyncExternalStore(e,t,n)};ne.useTransition=function(){return At.current.useTransition()};ne.version="18.2.0";_E.exports=ne;var T=_E.exports;const ge=t0(T),t2=VP({__proto__:null,default:ge},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n2=T,r2=Symbol.for("react.element"),i2=Symbol.for("react.fragment"),s2=Object.prototype.hasOwnProperty,o2=n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a2={key:!0,ref:!0,__self:!0,__source:!0};function AE(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)s2.call(t,r)&&!a2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:r2,type:e,key:s,ref:o,props:i,_owner:o2.current}}gh.Fragment=i2;gh.jsx=AE;gh.jsxs=AE;wE.exports=gh;var c=wE.exports,rg={},RE={exports:{}},en={},PE={exports:{}},bE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,z){var W=M.length;M.push(z);e:for(;0<W;){var oe=W-1>>>1,Te=M[oe];if(0<i(Te,z))M[oe]=z,M[W]=Te,W=oe;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var z=M[0],W=M.pop();if(W!==z){M[0]=W;e:for(var oe=0,Te=M.length,qr=Te>>>1;oe<qr;){var nn=2*(oe+1)-1,ur=M[nn],rn=nn+1,On=M[rn];if(0>i(ur,W))rn<Te&&0>i(On,ur)?(M[oe]=On,M[rn]=W,oe=rn):(M[oe]=ur,M[nn]=W,oe=nn);else if(rn<Te&&0>i(On,W))M[oe]=On,M[rn]=W,oe=rn;else break e}}return z}function i(M,z){var W=M.sortIndex-z.sortIndex;return W!==0?W:M.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,h=null,f=3,g=!1,m=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=M)r(u),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(u)}}function E(M){if(w=!1,v(M),!m)if(n(l)!==null)m=!0,Wr(S);else{var z=n(u);z!==null&&$n(E,z.startTime-M)}}function S(M,z){m=!1,w&&(w=!1,p(C),C=-1),g=!0;var W=f;try{for(v(z),h=n(l);h!==null&&(!(h.expirationTime>z)||M&&!ae());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var Te=oe(h.expirationTime<=z);z=e.unstable_now(),typeof Te=="function"?h.callback=Te:h===n(l)&&r(l),v(z)}else r(l);h=n(l)}if(h!==null)var qr=!0;else{var nn=n(u);nn!==null&&$n(E,nn.startTime-z),qr=!1}return qr}finally{h=null,f=W,g=!1}}var k=!1,I=null,C=-1,N=5,F=-1;function ae(){return!(e.unstable_now()-F<N)}function cr(){if(I!==null){var M=e.unstable_now();F=M;var z=!0;try{z=I(!0,M)}finally{z?Dn():(k=!1,I=null)}}else k=!1}var Dn;if(typeof y=="function")Dn=function(){y(cr)};else if(typeof MessageChannel<"u"){var Us=new MessageChannel,Fs=Us.port2;Us.port1.onmessage=cr,Dn=function(){Fs.postMessage(null)}}else Dn=function(){_(cr,0)};function Wr(M){I=M,k||(k=!0,Dn())}function $n(M,z){C=_(function(){M(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){m||g||(m=!0,Wr(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var W=f;f=z;try{return M()}finally{f=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var W=f;f=M;try{return z()}finally{f=W}},e.unstable_scheduleCallback=function(M,z,W){var oe=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?oe+W:oe):W=oe,M){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=W+Te,M={id:d++,callback:z,priorityLevel:M,startTime:W,expirationTime:Te,sortIndex:-1},W>oe?(M.sortIndex=W,t(u,M),n(l)===null&&M===n(u)&&(w?(p(C),C=-1):w=!0,$n(E,W-oe))):(M.sortIndex=Te,t(l,M),m||g||(m=!0,Wr(S))),M},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(M){var z=f;return function(){var W=f;f=z;try{return M.apply(this,arguments)}finally{f=W}}}})(bE);PE.exports=bE;var l2=PE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NE=T,Kt=l2;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jE=new Set,ml={};function bs(e,t){Po(e,t),Po(e+"Capture",t)}function Po(e,t){for(ml[e]=t,e=0;e<t.length;e++)jE.add(t[e])}var Cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ig=Object.prototype.hasOwnProperty,c2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j1={},M1={};function u2(e){return ig.call(M1,e)?!0:ig.call(j1,e)?!1:c2.test(e)?M1[e]=!0:(j1[e]=!0,!1)}function d2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function h2(e,t,n,r){if(t===null||typeof t>"u"||d2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Rt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ct[e]=new Rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ct[t]=new Rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ct[e]=new Rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ct[e]=new Rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ct[e]=new Rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ct[e]=new Rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ct[e]=new Rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ct[e]=new Rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ct[e]=new Rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var o0=/[\-:]([a-z])/g;function a0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(o0,a0);ct[t]=new Rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(o0,a0);ct[t]=new Rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(o0,a0);ct[t]=new Rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ct[e]=new Rt(e,1,!1,e.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ct[e]=new Rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function l0(e,t,n,r){var i=ct.hasOwnProperty(t)?ct[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(h2(t,n,i,r)&&(n=null),r||i===null?u2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zr=NE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xc=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),c0=Symbol.for("react.strict_mode"),sg=Symbol.for("react.profiler"),ME=Symbol.for("react.provider"),LE=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),og=Symbol.for("react.suspense"),ag=Symbol.for("react.suspense_list"),d0=Symbol.for("react.memo"),Xr=Symbol.for("react.lazy"),DE=Symbol.for("react.offscreen"),L1=Symbol.iterator;function ka(e){return e===null||typeof e!="object"?null:(e=L1&&e[L1]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,Qf;function Oa(e){if(Qf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qf=t&&t[1]||""}return`
`+Qf+e}var Kf=!1;function Yf(e,t){if(!e||Kf)return"";Kf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Oa(e):""}function f2(e){switch(e.tag){case 5:return Oa(e.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return e=Yf(e.type,!1),e;case 11:return e=Yf(e.type.render,!1),e;case 1:return e=Yf(e.type,!0),e;default:return""}}function lg(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xs:return"Fragment";case Ys:return"Portal";case sg:return"Profiler";case c0:return"StrictMode";case og:return"Suspense";case ag:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case LE:return(e.displayName||"Context")+".Consumer";case ME:return(e._context.displayName||"Context")+".Provider";case u0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case d0:return t=e.displayName||null,t!==null?t:lg(e.type)||"Memo";case Xr:t=e._payload,e=e._init;try{return lg(e(t))}catch{}}return null}function p2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lg(t);case 8:return t===c0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ti(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $E(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function g2(e){var t=$E(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jc(e){e._valueTracker||(e._valueTracker=g2(e))}function OE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$E(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function id(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cg(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function D1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ti(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function VE(e,t){t=t.checked,t!=null&&l0(e,"checked",t,!1)}function ug(e,t){VE(e,t);var n=Ti(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dg(e,t.type,n):t.hasOwnProperty("defaultValue")&&dg(e,t.type,Ti(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dg(e,t,n){(t!=="number"||id(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Va=Array.isArray;function mo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ti(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function hg(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function O1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Va(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ti(n)}}function UE(e,t){var n=Ti(t.value),r=Ti(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function V1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function FE(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fg(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?FE(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zc,zE=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zc=Zc||document.createElement("div"),Zc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m2=["Webkit","ms","Moz","O"];Object.keys(Xa).forEach(function(e){m2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xa[t]=Xa[e]})});function BE(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xa.hasOwnProperty(e)&&Xa[e]?(""+t).trim():t+"px"}function HE(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=BE(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var y2=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pg(e,t){if(t){if(y2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function gg(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mg=null;function h0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yg=null,yo=null,vo=null;function U1(e){if(e=mc(e)){if(typeof yg!="function")throw Error(b(280));var t=e.stateNode;t&&(t=_h(t),yg(e.stateNode,e.type,t))}}function WE(e){yo?vo?vo.push(e):vo=[e]:yo=e}function qE(){if(yo){var e=yo,t=vo;if(vo=yo=null,U1(e),t)for(e=0;e<t.length;e++)U1(t[e])}}function GE(e,t){return e(t)}function QE(){}var Xf=!1;function KE(e,t,n){if(Xf)return e(t,n);Xf=!0;try{return GE(e,t,n)}finally{Xf=!1,(yo!==null||vo!==null)&&(QE(),qE())}}function vl(e,t){var n=e.stateNode;if(n===null)return null;var r=_h(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var vg=!1;if(Cr)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){vg=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{vg=!1}function v2(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ja=!1,sd=null,od=!1,wg=null,w2={onError:function(e){Ja=!0,sd=e}};function _2(e,t,n,r,i,s,o,a,l){Ja=!1,sd=null,v2.apply(w2,arguments)}function x2(e,t,n,r,i,s,o,a,l){if(_2.apply(this,arguments),Ja){if(Ja){var u=sd;Ja=!1,sd=null}else throw Error(b(198));od||(od=!0,wg=u)}}function Ns(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function YE(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function F1(e){if(Ns(e)!==e)throw Error(b(188))}function E2(e){var t=e.alternate;if(!t){if(t=Ns(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return F1(i),e;if(s===r)return F1(i),t;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function XE(e){return e=E2(e),e!==null?JE(e):null}function JE(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=JE(e);if(t!==null)return t;e=e.sibling}return null}var ZE=Kt.unstable_scheduleCallback,z1=Kt.unstable_cancelCallback,I2=Kt.unstable_shouldYield,T2=Kt.unstable_requestPaint,Me=Kt.unstable_now,S2=Kt.unstable_getCurrentPriorityLevel,f0=Kt.unstable_ImmediatePriority,eI=Kt.unstable_UserBlockingPriority,ad=Kt.unstable_NormalPriority,k2=Kt.unstable_LowPriority,tI=Kt.unstable_IdlePriority,mh=null,Kn=null;function C2(e){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(mh,e,void 0,(e.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:P2,A2=Math.log,R2=Math.LN2;function P2(e){return e>>>=0,e===0?32:31-(A2(e)/R2|0)|0}var eu=64,tu=4194304;function Ua(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ld(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ua(a):(s&=o,s!==0&&(r=Ua(s)))}else o=n&~i,o!==0?r=Ua(o):s!==0&&(r=Ua(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-En(t),i=1<<n,r|=e[n],t&=~i;return r}function b2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-En(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=b2(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function _g(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nI(){var e=eu;return eu<<=1,!(eu&4194240)&&(eu=64),e}function Jf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-En(t),e[t]=n}function j2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-En(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function p0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-En(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function rI(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var iI,g0,sI,oI,aI,xg=!1,nu=[],ci=null,ui=null,di=null,wl=new Map,_l=new Map,Zr=[],M2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function B1(e,t){switch(e){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":ui=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(t.pointerId)}}function Aa(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=mc(t),t!==null&&g0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function L2(e,t,n,r,i){switch(t){case"focusin":return ci=Aa(ci,e,t,n,r,i),!0;case"dragenter":return ui=Aa(ui,e,t,n,r,i),!0;case"mouseover":return di=Aa(di,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return wl.set(s,Aa(wl.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_l.set(s,Aa(_l.get(s)||null,e,t,n,r,i)),!0}return!1}function lI(e){var t=es(e.target);if(t!==null){var n=Ns(t);if(n!==null){if(t=n.tag,t===13){if(t=YE(n),t!==null){e.blockedOn=t,aI(e.priority,function(){sI(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ru(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eg(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mg=r,n.target.dispatchEvent(r),mg=null}else return t=mc(n),t!==null&&g0(t),e.blockedOn=n,!1;t.shift()}return!0}function H1(e,t,n){Ru(e)&&n.delete(t)}function D2(){xg=!1,ci!==null&&Ru(ci)&&(ci=null),ui!==null&&Ru(ui)&&(ui=null),di!==null&&Ru(di)&&(di=null),wl.forEach(H1),_l.forEach(H1)}function Ra(e,t){e.blockedOn===t&&(e.blockedOn=null,xg||(xg=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,D2)))}function xl(e){function t(i){return Ra(i,e)}if(0<nu.length){Ra(nu[0],e);for(var n=1;n<nu.length;n++){var r=nu[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ci!==null&&Ra(ci,e),ui!==null&&Ra(ui,e),di!==null&&Ra(di,e),wl.forEach(t),_l.forEach(t),n=0;n<Zr.length;n++)r=Zr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zr.length&&(n=Zr[0],n.blockedOn===null);)lI(n),n.blockedOn===null&&Zr.shift()}var wo=zr.ReactCurrentBatchConfig,cd=!0;function $2(e,t,n,r){var i=de,s=wo.transition;wo.transition=null;try{de=1,m0(e,t,n,r)}finally{de=i,wo.transition=s}}function O2(e,t,n,r){var i=de,s=wo.transition;wo.transition=null;try{de=4,m0(e,t,n,r)}finally{de=i,wo.transition=s}}function m0(e,t,n,r){if(cd){var i=Eg(e,t,n,r);if(i===null)lp(e,t,r,ud,n),B1(e,r);else if(L2(i,e,t,n,r))r.stopPropagation();else if(B1(e,r),t&4&&-1<M2.indexOf(e)){for(;i!==null;){var s=mc(i);if(s!==null&&iI(s),s=Eg(e,t,n,r),s===null&&lp(e,t,r,ud,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lp(e,t,r,null,n)}}var ud=null;function Eg(e,t,n,r){if(ud=null,e=h0(r),e=es(e),e!==null)if(t=Ns(e),t===null)e=null;else if(n=t.tag,n===13){if(e=YE(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ud=e,null}function cI(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S2()){case f0:return 1;case eI:return 4;case ad:case k2:return 16;case tI:return 536870912;default:return 16}default:return 16}}var si=null,y0=null,Pu=null;function uI(){if(Pu)return Pu;var e,t=y0,n=t.length,r,i="value"in si?si.value:si.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Pu=i.slice(e,1<r?1-r:void 0)}function bu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ru(){return!0}function W1(){return!1}function tn(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ru:W1,this.isPropagationStopped=W1,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ru)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ru)},persist:function(){},isPersistent:ru}),t}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},v0=tn(aa),gc=Re({},aa,{view:0,detail:0}),V2=tn(gc),Zf,ep,Pa,yh=Re({},gc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:w0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pa&&(Pa&&e.type==="mousemove"?(Zf=e.screenX-Pa.screenX,ep=e.screenY-Pa.screenY):ep=Zf=0,Pa=e),Zf)},movementY:function(e){return"movementY"in e?e.movementY:ep}}),q1=tn(yh),U2=Re({},yh,{dataTransfer:0}),F2=tn(U2),z2=Re({},gc,{relatedTarget:0}),tp=tn(z2),B2=Re({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),H2=tn(B2),W2=Re({},aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),q2=tn(W2),G2=Re({},aa,{data:0}),G1=tn(G2),Q2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Y2[e])?!!t[e]:!1}function w0(){return X2}var J2=Re({},gc,{key:function(e){if(e.key){var t=Q2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?K2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:w0,charCode:function(e){return e.type==="keypress"?bu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z2=tn(J2),eb=Re({},yh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Q1=tn(eb),tb=Re({},gc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:w0}),nb=tn(tb),rb=Re({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ib=tn(rb),sb=Re({},yh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ob=tn(sb),ab=[9,13,27,32],_0=Cr&&"CompositionEvent"in window,Za=null;Cr&&"documentMode"in document&&(Za=document.documentMode);var lb=Cr&&"TextEvent"in window&&!Za,dI=Cr&&(!_0||Za&&8<Za&&11>=Za),K1=" ",Y1=!1;function hI(e,t){switch(e){case"keyup":return ab.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fI(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Js=!1;function cb(e,t){switch(e){case"compositionend":return fI(t);case"keypress":return t.which!==32?null:(Y1=!0,K1);case"textInput":return e=t.data,e===K1&&Y1?null:e;default:return null}}function ub(e,t){if(Js)return e==="compositionend"||!_0&&hI(e,t)?(e=uI(),Pu=y0=si=null,Js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dI&&t.locale!=="ko"?null:t.data;default:return null}}var db={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!db[e.type]:t==="textarea"}function pI(e,t,n,r){WE(r),t=dd(t,"onChange"),0<t.length&&(n=new v0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var el=null,El=null;function hb(e){SI(e,0)}function vh(e){var t=to(e);if(OE(t))return e}function fb(e,t){if(e==="change")return t}var gI=!1;if(Cr){var np;if(Cr){var rp="oninput"in document;if(!rp){var J1=document.createElement("div");J1.setAttribute("oninput","return;"),rp=typeof J1.oninput=="function"}np=rp}else np=!1;gI=np&&(!document.documentMode||9<document.documentMode)}function Z1(){el&&(el.detachEvent("onpropertychange",mI),El=el=null)}function mI(e){if(e.propertyName==="value"&&vh(El)){var t=[];pI(t,El,e,h0(e)),KE(hb,t)}}function pb(e,t,n){e==="focusin"?(Z1(),el=t,El=n,el.attachEvent("onpropertychange",mI)):e==="focusout"&&Z1()}function gb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vh(El)}function mb(e,t){if(e==="click")return vh(t)}function yb(e,t){if(e==="input"||e==="change")return vh(t)}function vb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var An=typeof Object.is=="function"?Object.is:vb;function Il(e,t){if(An(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ig.call(t,i)||!An(e[i],t[i]))return!1}return!0}function ew(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tw(e,t){var n=ew(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ew(n)}}function yI(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yI(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vI(){for(var e=window,t=id();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=id(e.document)}return t}function x0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wb(e){var t=vI(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yI(n.ownerDocument.documentElement,n)){if(r!==null&&x0(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=tw(n,s);var o=tw(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _b=Cr&&"documentMode"in document&&11>=document.documentMode,Zs=null,Ig=null,tl=null,Tg=!1;function nw(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tg||Zs==null||Zs!==id(r)||(r=Zs,"selectionStart"in r&&x0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tl&&Il(tl,r)||(tl=r,r=dd(Ig,"onSelect"),0<r.length&&(t=new v0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zs)))}function iu(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var eo={animationend:iu("Animation","AnimationEnd"),animationiteration:iu("Animation","AnimationIteration"),animationstart:iu("Animation","AnimationStart"),transitionend:iu("Transition","TransitionEnd")},ip={},wI={};Cr&&(wI=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function wh(e){if(ip[e])return ip[e];if(!eo[e])return e;var t=eo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wI)return ip[e]=t[n];return e}var _I=wh("animationend"),xI=wh("animationiteration"),EI=wh("animationstart"),II=wh("transitionend"),TI=new Map,rw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mi(e,t){TI.set(e,t),bs(t,[e])}for(var sp=0;sp<rw.length;sp++){var op=rw[sp],xb=op.toLowerCase(),Eb=op[0].toUpperCase()+op.slice(1);Mi(xb,"on"+Eb)}Mi(_I,"onAnimationEnd");Mi(xI,"onAnimationIteration");Mi(EI,"onAnimationStart");Mi("dblclick","onDoubleClick");Mi("focusin","onFocus");Mi("focusout","onBlur");Mi(II,"onTransitionEnd");Po("onMouseEnter",["mouseout","mouseover"]);Po("onMouseLeave",["mouseout","mouseover"]);Po("onPointerEnter",["pointerout","pointerover"]);Po("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ib=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function iw(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,x2(r,t,void 0,e),e.currentTarget=null}function SI(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;iw(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;iw(i,a,u),s=l}}}if(od)throw e=wg,od=!1,wg=null,e}function ve(e,t){var n=t[Rg];n===void 0&&(n=t[Rg]=new Set);var r=e+"__bubble";n.has(r)||(kI(t,e,2,!1),n.add(r))}function ap(e,t,n){var r=0;t&&(r|=4),kI(n,e,r,t)}var su="_reactListening"+Math.random().toString(36).slice(2);function Tl(e){if(!e[su]){e[su]=!0,jE.forEach(function(n){n!=="selectionchange"&&(Ib.has(n)||ap(n,!1,e),ap(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[su]||(t[su]=!0,ap("selectionchange",!1,t))}}function kI(e,t,n,r){switch(cI(t)){case 1:var i=$2;break;case 4:i=O2;break;default:i=m0}n=i.bind(null,t,n,e),i=void 0,!vg||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function lp(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}KE(function(){var u=s,d=h0(n),h=[];e:{var f=TI.get(e);if(f!==void 0){var g=v0,m=e;switch(e){case"keypress":if(bu(n)===0)break e;case"keydown":case"keyup":g=Z2;break;case"focusin":m="focus",g=tp;break;case"focusout":m="blur",g=tp;break;case"beforeblur":case"afterblur":g=tp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=q1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=F2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=nb;break;case _I:case xI:case EI:g=H2;break;case II:g=ib;break;case"scroll":g=V2;break;case"wheel":g=ob;break;case"copy":case"cut":case"paste":g=q2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Q1}var w=(t&4)!==0,_=!w&&e==="scroll",p=w?f!==null?f+"Capture":null:f;w=[];for(var y=u,v;y!==null;){v=y;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,p!==null&&(E=vl(y,p),E!=null&&w.push(Sl(y,E,v)))),_)break;y=y.return}0<w.length&&(f=new g(f,m,null,n,d),h.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==mg&&(m=n.relatedTarget||n.fromElement)&&(es(m)||m[Ar]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=u,m=m?es(m):null,m!==null&&(_=Ns(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=u),g!==m)){if(w=q1,E="onMouseLeave",p="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(w=Q1,E="onPointerLeave",p="onPointerEnter",y="pointer"),_=g==null?f:to(g),v=m==null?f:to(m),f=new w(E,y+"leave",g,n,d),f.target=_,f.relatedTarget=v,E=null,es(d)===u&&(w=new w(p,y+"enter",m,n,d),w.target=v,w.relatedTarget=_,E=w),_=E,g&&m)t:{for(w=g,p=m,y=0,v=w;v;v=zs(v))y++;for(v=0,E=p;E;E=zs(E))v++;for(;0<y-v;)w=zs(w),y--;for(;0<v-y;)p=zs(p),v--;for(;y--;){if(w===p||p!==null&&w===p.alternate)break t;w=zs(w),p=zs(p)}w=null}else w=null;g!==null&&sw(h,f,g,w,!1),m!==null&&_!==null&&sw(h,_,m,w,!0)}}e:{if(f=u?to(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=fb;else if(X1(f))if(gI)S=yb;else{S=gb;var k=pb}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=mb);if(S&&(S=S(e,u))){pI(h,S,n,d);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&dg(f,"number",f.value)}switch(k=u?to(u):window,e){case"focusin":(X1(k)||k.contentEditable==="true")&&(Zs=k,Ig=u,tl=null);break;case"focusout":tl=Ig=Zs=null;break;case"mousedown":Tg=!0;break;case"contextmenu":case"mouseup":case"dragend":Tg=!1,nw(h,n,d);break;case"selectionchange":if(_b)break;case"keydown":case"keyup":nw(h,n,d)}var I;if(_0)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Js?hI(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(dI&&n.locale!=="ko"&&(Js||C!=="onCompositionStart"?C==="onCompositionEnd"&&Js&&(I=uI()):(si=d,y0="value"in si?si.value:si.textContent,Js=!0)),k=dd(u,C),0<k.length&&(C=new G1(C,e,null,n,d),h.push({event:C,listeners:k}),I?C.data=I:(I=fI(n),I!==null&&(C.data=I)))),(I=lb?cb(e,n):ub(e,n))&&(u=dd(u,"onBeforeInput"),0<u.length&&(d=new G1("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=I))}SI(h,t)})}function Sl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function dd(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vl(e,n),s!=null&&r.unshift(Sl(e,s,i)),s=vl(e,t),s!=null&&r.push(Sl(e,s,i))),e=e.return}return r}function zs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sw(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=vl(n,s),l!=null&&o.unshift(Sl(n,l,a))):i||(l=vl(n,s),l!=null&&o.push(Sl(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Tb=/\r\n?/g,Sb=/\u0000|\uFFFD/g;function ow(e){return(typeof e=="string"?e:""+e).replace(Tb,`
`).replace(Sb,"")}function ou(e,t,n){if(t=ow(t),ow(e)!==t&&n)throw Error(b(425))}function hd(){}var Sg=null,kg=null;function Cg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ag=typeof setTimeout=="function"?setTimeout:void 0,kb=typeof clearTimeout=="function"?clearTimeout:void 0,aw=typeof Promise=="function"?Promise:void 0,Cb=typeof queueMicrotask=="function"?queueMicrotask:typeof aw<"u"?function(e){return aw.resolve(null).then(e).catch(Ab)}:Ag;function Ab(e){setTimeout(function(){throw e})}function cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xl(t)}function hi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lw(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var la=Math.random().toString(36).slice(2),Bn="__reactFiber$"+la,kl="__reactProps$"+la,Ar="__reactContainer$"+la,Rg="__reactEvents$"+la,Rb="__reactListeners$"+la,Pb="__reactHandles$"+la;function es(e){var t=e[Bn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ar]||n[Bn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lw(e);e!==null;){if(n=e[Bn])return n;e=lw(e)}return t}e=n,n=e.parentNode}return null}function mc(e){return e=e[Bn]||e[Ar],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function to(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function _h(e){return e[kl]||null}var Pg=[],no=-1;function Li(e){return{current:e}}function Ie(e){0>no||(e.current=Pg[no],Pg[no]=null,no--)}function me(e,t){no++,Pg[no]=e.current,e.current=t}var Si={},wt=Li(Si),Lt=Li(!1),ps=Si;function bo(e,t){var n=e.type.contextTypes;if(!n)return Si;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(e){return e=e.childContextTypes,e!=null}function fd(){Ie(Lt),Ie(wt)}function cw(e,t,n){if(wt.current!==Si)throw Error(b(168));me(wt,t),me(Lt,n)}function CI(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,p2(e)||"Unknown",i));return Re({},n,r)}function pd(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Si,ps=wt.current,me(wt,e),me(Lt,Lt.current),!0}function uw(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=CI(e,t,ps),r.__reactInternalMemoizedMergedChildContext=e,Ie(Lt),Ie(wt),me(wt,e)):Ie(Lt),me(Lt,n)}var fr=null,xh=!1,up=!1;function AI(e){fr===null?fr=[e]:fr.push(e)}function bb(e){xh=!0,AI(e)}function Di(){if(!up&&fr!==null){up=!0;var e=0,t=de;try{var n=fr;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}fr=null,xh=!1}catch(i){throw fr!==null&&(fr=fr.slice(e+1)),ZE(f0,Di),i}finally{de=t,up=!1}}return null}var ro=[],io=0,gd=null,md=0,sn=[],on=0,gs=null,pr=1,gr="";function Xi(e,t){ro[io++]=md,ro[io++]=gd,gd=e,md=t}function RI(e,t,n){sn[on++]=pr,sn[on++]=gr,sn[on++]=gs,gs=e;var r=pr;e=gr;var i=32-En(r)-1;r&=~(1<<i),n+=1;var s=32-En(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pr=1<<32-En(t)+i|n<<i|r,gr=s+e}else pr=1<<s|n<<i|r,gr=e}function E0(e){e.return!==null&&(Xi(e,1),RI(e,1,0))}function I0(e){for(;e===gd;)gd=ro[--io],ro[io]=null,md=ro[--io],ro[io]=null;for(;e===gs;)gs=sn[--on],sn[on]=null,gr=sn[--on],sn[on]=null,pr=sn[--on],sn[on]=null}var Qt=null,zt=null,Se=!1,wn=null;function PI(e,t){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dw(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qt=e,zt=hi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qt=e,zt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gs!==null?{id:pr,overflow:gr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qt=e,zt=null,!0):!1;default:return!1}}function bg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ng(e){if(Se){var t=zt;if(t){var n=t;if(!dw(e,t)){if(bg(e))throw Error(b(418));t=hi(n.nextSibling);var r=Qt;t&&dw(e,t)?PI(r,n):(e.flags=e.flags&-4097|2,Se=!1,Qt=e)}}else{if(bg(e))throw Error(b(418));e.flags=e.flags&-4097|2,Se=!1,Qt=e}}}function hw(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qt=e}function au(e){if(e!==Qt)return!1;if(!Se)return hw(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cg(e.type,e.memoizedProps)),t&&(t=zt)){if(bg(e))throw bI(),Error(b(418));for(;t;)PI(e,t),t=hi(t.nextSibling)}if(hw(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){zt=hi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}zt=null}}else zt=Qt?hi(e.stateNode.nextSibling):null;return!0}function bI(){for(var e=zt;e;)e=hi(e.nextSibling)}function No(){zt=Qt=null,Se=!1}function T0(e){wn===null?wn=[e]:wn.push(e)}var Nb=zr.ReactCurrentBatchConfig;function yn(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var yd=Li(null),vd=null,so=null,S0=null;function k0(){S0=so=vd=null}function C0(e){var t=yd.current;Ie(yd),e._currentValue=t}function jg(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _o(e,t){vd=e,S0=so=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(jt=!0),e.firstContext=null)}function hn(e){var t=e._currentValue;if(S0!==e)if(e={context:e,memoizedValue:t,next:null},so===null){if(vd===null)throw Error(b(308));so=e,vd.dependencies={lanes:0,firstContext:e}}else so=so.next=e;return t}var ts=null;function A0(e){ts===null?ts=[e]:ts.push(e)}function NI(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,A0(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rr(e,r)}function Rr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jr=!1;function R0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jI(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ir(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fi(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rr(e,n)}return i=r.interleaved,i===null?(t.next=t,A0(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rr(e,n)}function Nu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,p0(e,n)}}function fw(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wd(e,t,n,r){var i=e.updateQueue;Jr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,w=a;switch(f=t,g=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){h=m.call(g,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,f=typeof m=="function"?m.call(g,h,f):m,f==null)break e;h=Re({},h,f);break e;case 2:Jr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=h):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);ys|=o,e.lanes=o,e.memoizedState=h}}function pw(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var MI=new NE.Component().refs;function Mg(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eh={isMounted:function(e){return(e=e._reactInternals)?Ns(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=St(),i=gi(e),s=Ir(r,i);s.payload=t,n!=null&&(s.callback=n),t=fi(e,s,i),t!==null&&(In(t,e,i,r),Nu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=St(),i=gi(e),s=Ir(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=fi(e,s,i),t!==null&&(In(t,e,i,r),Nu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=St(),r=gi(e),i=Ir(n,r);i.tag=2,t!=null&&(i.callback=t),t=fi(e,i,r),t!==null&&(In(t,e,r,n),Nu(t,e,r))}};function gw(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Il(n,r)||!Il(i,s):!0}function LI(e,t,n){var r=!1,i=Si,s=t.contextType;return typeof s=="object"&&s!==null?s=hn(s):(i=Dt(t)?ps:wt.current,r=t.contextTypes,s=(r=r!=null)?bo(e,i):Si),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Eh,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function mw(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eh.enqueueReplaceState(t,t.state,null)}function Lg(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=MI,R0(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=hn(s):(s=Dt(t)?ps:wt.current,i.context=bo(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Mg(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Eh.enqueueReplaceState(i,i.state,null),wd(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ba(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===MI&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function lu(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yw(e){var t=e._init;return t(e._payload)}function DI(e){function t(p,y){if(e){var v=p.deletions;v===null?(p.deletions=[y],p.flags|=16):v.push(y)}}function n(p,y){if(!e)return null;for(;y!==null;)t(p,y),y=y.sibling;return null}function r(p,y){for(p=new Map;y!==null;)y.key!==null?p.set(y.key,y):p.set(y.index,y),y=y.sibling;return p}function i(p,y){return p=mi(p,y),p.index=0,p.sibling=null,p}function s(p,y,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<y?(p.flags|=2,y):v):(p.flags|=2,y)):(p.flags|=1048576,y)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,y,v,E){return y===null||y.tag!==6?(y=yp(v,p.mode,E),y.return=p,y):(y=i(y,v),y.return=p,y)}function l(p,y,v,E){var S=v.type;return S===Xs?d(p,y,v.props.children,E,v.key):y!==null&&(y.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xr&&yw(S)===y.type)?(E=i(y,v.props),E.ref=ba(p,y,v),E.return=p,E):(E=Ou(v.type,v.key,v.props,null,p.mode,E),E.ref=ba(p,y,v),E.return=p,E)}function u(p,y,v,E){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=vp(v,p.mode,E),y.return=p,y):(y=i(y,v.children||[]),y.return=p,y)}function d(p,y,v,E,S){return y===null||y.tag!==7?(y=ls(v,p.mode,E,S),y.return=p,y):(y=i(y,v),y.return=p,y)}function h(p,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=yp(""+y,p.mode,v),y.return=p,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xc:return v=Ou(y.type,y.key,y.props,null,p.mode,v),v.ref=ba(p,null,y),v.return=p,v;case Ys:return y=vp(y,p.mode,v),y.return=p,y;case Xr:var E=y._init;return h(p,E(y._payload),v)}if(Va(y)||ka(y))return y=ls(y,p.mode,v,null),y.return=p,y;lu(p,y)}return null}function f(p,y,v,E){var S=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(p,y,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xc:return v.key===S?l(p,y,v,E):null;case Ys:return v.key===S?u(p,y,v,E):null;case Xr:return S=v._init,f(p,y,S(v._payload),E)}if(Va(v)||ka(v))return S!==null?null:d(p,y,v,E,null);lu(p,v)}return null}function g(p,y,v,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(v)||null,a(y,p,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Xc:return p=p.get(E.key===null?v:E.key)||null,l(y,p,E,S);case Ys:return p=p.get(E.key===null?v:E.key)||null,u(y,p,E,S);case Xr:var k=E._init;return g(p,y,v,k(E._payload),S)}if(Va(E)||ka(E))return p=p.get(v)||null,d(y,p,E,S,null);lu(y,E)}return null}function m(p,y,v,E){for(var S=null,k=null,I=y,C=y=0,N=null;I!==null&&C<v.length;C++){I.index>C?(N=I,I=null):N=I.sibling;var F=f(p,I,v[C],E);if(F===null){I===null&&(I=N);break}e&&I&&F.alternate===null&&t(p,I),y=s(F,y,C),k===null?S=F:k.sibling=F,k=F,I=N}if(C===v.length)return n(p,I),Se&&Xi(p,C),S;if(I===null){for(;C<v.length;C++)I=h(p,v[C],E),I!==null&&(y=s(I,y,C),k===null?S=I:k.sibling=I,k=I);return Se&&Xi(p,C),S}for(I=r(p,I);C<v.length;C++)N=g(I,p,C,v[C],E),N!==null&&(e&&N.alternate!==null&&I.delete(N.key===null?C:N.key),y=s(N,y,C),k===null?S=N:k.sibling=N,k=N);return e&&I.forEach(function(ae){return t(p,ae)}),Se&&Xi(p,C),S}function w(p,y,v,E){var S=ka(v);if(typeof S!="function")throw Error(b(150));if(v=S.call(v),v==null)throw Error(b(151));for(var k=S=null,I=y,C=y=0,N=null,F=v.next();I!==null&&!F.done;C++,F=v.next()){I.index>C?(N=I,I=null):N=I.sibling;var ae=f(p,I,F.value,E);if(ae===null){I===null&&(I=N);break}e&&I&&ae.alternate===null&&t(p,I),y=s(ae,y,C),k===null?S=ae:k.sibling=ae,k=ae,I=N}if(F.done)return n(p,I),Se&&Xi(p,C),S;if(I===null){for(;!F.done;C++,F=v.next())F=h(p,F.value,E),F!==null&&(y=s(F,y,C),k===null?S=F:k.sibling=F,k=F);return Se&&Xi(p,C),S}for(I=r(p,I);!F.done;C++,F=v.next())F=g(I,p,C,F.value,E),F!==null&&(e&&F.alternate!==null&&I.delete(F.key===null?C:F.key),y=s(F,y,C),k===null?S=F:k.sibling=F,k=F);return e&&I.forEach(function(cr){return t(p,cr)}),Se&&Xi(p,C),S}function _(p,y,v,E){if(typeof v=="object"&&v!==null&&v.type===Xs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Xc:e:{for(var S=v.key,k=y;k!==null;){if(k.key===S){if(S=v.type,S===Xs){if(k.tag===7){n(p,k.sibling),y=i(k,v.props.children),y.return=p,p=y;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xr&&yw(S)===k.type){n(p,k.sibling),y=i(k,v.props),y.ref=ba(p,k,v),y.return=p,p=y;break e}n(p,k);break}else t(p,k);k=k.sibling}v.type===Xs?(y=ls(v.props.children,p.mode,E,v.key),y.return=p,p=y):(E=Ou(v.type,v.key,v.props,null,p.mode,E),E.ref=ba(p,y,v),E.return=p,p=E)}return o(p);case Ys:e:{for(k=v.key;y!==null;){if(y.key===k)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(p,y.sibling),y=i(y,v.children||[]),y.return=p,p=y;break e}else{n(p,y);break}else t(p,y);y=y.sibling}y=vp(v,p.mode,E),y.return=p,p=y}return o(p);case Xr:return k=v._init,_(p,y,k(v._payload),E)}if(Va(v))return m(p,y,v,E);if(ka(v))return w(p,y,v,E);lu(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(p,y.sibling),y=i(y,v),y.return=p,p=y):(n(p,y),y=yp(v,p.mode,E),y.return=p,p=y),o(p)):n(p,y)}return _}var jo=DI(!0),$I=DI(!1),yc={},Yn=Li(yc),Cl=Li(yc),Al=Li(yc);function ns(e){if(e===yc)throw Error(b(174));return e}function P0(e,t){switch(me(Al,t),me(Cl,e),me(Yn,yc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fg(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fg(t,e)}Ie(Yn),me(Yn,t)}function Mo(){Ie(Yn),Ie(Cl),Ie(Al)}function OI(e){ns(Al.current);var t=ns(Yn.current),n=fg(t,e.type);t!==n&&(me(Cl,e),me(Yn,n))}function b0(e){Cl.current===e&&(Ie(Yn),Ie(Cl))}var ke=Li(0);function _d(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dp=[];function N0(){for(var e=0;e<dp.length;e++)dp[e]._workInProgressVersionPrimary=null;dp.length=0}var ju=zr.ReactCurrentDispatcher,hp=zr.ReactCurrentBatchConfig,ms=0,Ce=null,He=null,Ke=null,xd=!1,nl=!1,Rl=0,jb=0;function ut(){throw Error(b(321))}function j0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!An(e[n],t[n]))return!1;return!0}function M0(e,t,n,r,i,s){if(ms=s,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ju.current=e===null||e.memoizedState===null?$b:Ob,e=n(r,i),nl){s=0;do{if(nl=!1,Rl=0,25<=s)throw Error(b(301));s+=1,Ke=He=null,t.updateQueue=null,ju.current=Vb,e=n(r,i)}while(nl)}if(ju.current=Ed,t=He!==null&&He.next!==null,ms=0,Ke=He=Ce=null,xd=!1,t)throw Error(b(300));return e}function L0(){var e=Rl!==0;return Rl=0,e}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ce.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function fn(){if(He===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Ke===null?Ce.memoizedState:Ke.next;if(t!==null)Ke=t,He=e;else{if(e===null)throw Error(b(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ke===null?Ce.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Pl(e,t){return typeof t=="function"?t(e):t}function fp(e){var t=fn(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((ms&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ce.lanes|=d,ys|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,An(r,t.memoizedState)||(jt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ce.lanes|=s,ys|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pp(e){var t=fn(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);An(s,t.memoizedState)||(jt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function VI(){}function UI(e,t){var n=Ce,r=fn(),i=t(),s=!An(r.memoizedState,i);if(s&&(r.memoizedState=i,jt=!0),r=r.queue,D0(BI.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,bl(9,zI.bind(null,n,r,i,t),void 0,null),Je===null)throw Error(b(349));ms&30||FI(n,t,i)}return i}function FI(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zI(e,t,n,r){t.value=n,t.getSnapshot=r,HI(t)&&WI(e)}function BI(e,t,n){return n(function(){HI(t)&&WI(e)})}function HI(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!An(e,n)}catch{return!0}}function WI(e){var t=Rr(e,1);t!==null&&In(t,e,1,-1)}function vw(e){var t=Un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pl,lastRenderedState:e},t.queue=e,e=e.dispatch=Db.bind(null,Ce,e),[t.memoizedState,e]}function bl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qI(){return fn().memoizedState}function Mu(e,t,n,r){var i=Un();Ce.flags|=e,i.memoizedState=bl(1|t,n,void 0,r===void 0?null:r)}function Ih(e,t,n,r){var i=fn();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&j0(r,o.deps)){i.memoizedState=bl(t,n,s,r);return}}Ce.flags|=e,i.memoizedState=bl(1|t,n,s,r)}function ww(e,t){return Mu(8390656,8,e,t)}function D0(e,t){return Ih(2048,8,e,t)}function GI(e,t){return Ih(4,2,e,t)}function QI(e,t){return Ih(4,4,e,t)}function KI(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function YI(e,t,n){return n=n!=null?n.concat([e]):null,Ih(4,4,KI.bind(null,t,e),n)}function $0(){}function XI(e,t){var n=fn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&j0(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function JI(e,t){var n=fn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&j0(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ZI(e,t,n){return ms&21?(An(n,t)||(n=nI(),Ce.lanes|=n,ys|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,jt=!0),e.memoizedState=n)}function Mb(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=hp.transition;hp.transition={};try{e(!1),t()}finally{de=n,hp.transition=r}}function eT(){return fn().memoizedState}function Lb(e,t,n){var r=gi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tT(e))nT(t,n);else if(n=NI(e,t,n,r),n!==null){var i=St();In(n,e,r,i),rT(n,t,r)}}function Db(e,t,n){var r=gi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tT(e))nT(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,An(a,o)){var l=t.interleaved;l===null?(i.next=i,A0(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=NI(e,t,i,r),n!==null&&(i=St(),In(n,e,r,i),rT(n,t,r))}}function tT(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function nT(e,t){nl=xd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rT(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,p0(e,n)}}var Ed={readContext:hn,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},$b={readContext:hn,useCallback:function(e,t){return Un().memoizedState=[e,t===void 0?null:t],e},useContext:hn,useEffect:ww,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mu(4194308,4,KI.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mu(4,2,e,t)},useMemo:function(e,t){var n=Un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lb.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Un();return e={current:e},t.memoizedState=e},useState:vw,useDebugValue:$0,useDeferredValue:function(e){return Un().memoizedState=e},useTransition:function(){var e=vw(!1),t=e[0];return e=Mb.bind(null,e[1]),Un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,i=Un();if(Se){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),Je===null)throw Error(b(349));ms&30||FI(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ww(BI.bind(null,r,s,e),[e]),r.flags|=2048,bl(9,zI.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Un(),t=Je.identifierPrefix;if(Se){var n=gr,r=pr;n=(r&~(1<<32-En(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Rl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ob={readContext:hn,useCallback:XI,useContext:hn,useEffect:D0,useImperativeHandle:YI,useInsertionEffect:GI,useLayoutEffect:QI,useMemo:JI,useReducer:fp,useRef:qI,useState:function(){return fp(Pl)},useDebugValue:$0,useDeferredValue:function(e){var t=fn();return ZI(t,He.memoizedState,e)},useTransition:function(){var e=fp(Pl)[0],t=fn().memoizedState;return[e,t]},useMutableSource:VI,useSyncExternalStore:UI,useId:eT,unstable_isNewReconciler:!1},Vb={readContext:hn,useCallback:XI,useContext:hn,useEffect:D0,useImperativeHandle:YI,useInsertionEffect:GI,useLayoutEffect:QI,useMemo:JI,useReducer:pp,useRef:qI,useState:function(){return pp(Pl)},useDebugValue:$0,useDeferredValue:function(e){var t=fn();return He===null?t.memoizedState=e:ZI(t,He.memoizedState,e)},useTransition:function(){var e=pp(Pl)[0],t=fn().memoizedState;return[e,t]},useMutableSource:VI,useSyncExternalStore:UI,useId:eT,unstable_isNewReconciler:!1};function Lo(e,t){try{var n="",r=t;do n+=f2(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function gp(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Dg(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ub=typeof WeakMap=="function"?WeakMap:Map;function iT(e,t,n){n=Ir(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Td||(Td=!0,qg=r),Dg(e,t)},n}function sT(e,t,n){n=Ir(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Dg(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dg(e,t),typeof r!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function _w(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ub;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=eN.bind(null,e,t,n),t.then(e,e))}function xw(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ew(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ir(-1,1),t.tag=2,fi(n,t,1))),n.lanes|=1),e)}var Fb=zr.ReactCurrentOwner,jt=!1;function Et(e,t,n,r){t.child=e===null?$I(t,null,n,r):jo(t,e.child,n,r)}function Iw(e,t,n,r,i){n=n.render;var s=t.ref;return _o(t,i),r=M0(e,t,n,r,s,i),n=L0(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pr(e,t,i)):(Se&&n&&E0(t),t.flags|=1,Et(e,t,r,i),t.child)}function Tw(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!W0(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,oT(e,t,s,r,i)):(e=Ou(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Il,n(o,r)&&e.ref===t.ref)return Pr(e,t,i)}return t.flags|=1,e=mi(s,r),e.ref=t.ref,e.return=t,t.child=e}function oT(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Il(s,r)&&e.ref===t.ref)if(jt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(jt=!0);else return t.lanes=e.lanes,Pr(e,t,i)}return $g(e,t,n,r,i)}function aT(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(ao,Ft),Ft|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(ao,Ft),Ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(ao,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,me(ao,Ft),Ft|=r;return Et(e,t,i,n),t.child}function lT(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $g(e,t,n,r,i){var s=Dt(n)?ps:wt.current;return s=bo(t,s),_o(t,i),n=M0(e,t,n,r,s,i),r=L0(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pr(e,t,i)):(Se&&r&&E0(t),t.flags|=1,Et(e,t,n,i),t.child)}function Sw(e,t,n,r,i){if(Dt(n)){var s=!0;pd(t)}else s=!1;if(_o(t,i),t.stateNode===null)Lu(e,t),LI(t,n,r),Lg(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=hn(u):(u=Dt(n)?ps:wt.current,u=bo(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&mw(t,o,r,u),Jr=!1;var f=t.memoizedState;o.state=f,wd(t,r,o,i),l=t.memoizedState,a!==r||f!==l||Lt.current||Jr?(typeof d=="function"&&(Mg(t,n,d,r),l=t.memoizedState),(a=Jr||gw(t,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,jI(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:yn(t.type,a),o.props=u,h=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=hn(l):(l=Dt(n)?ps:wt.current,l=bo(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&mw(t,o,r,l),Jr=!1,f=t.memoizedState,o.state=f,wd(t,r,o,i);var m=t.memoizedState;a!==h||f!==m||Lt.current||Jr?(typeof g=="function"&&(Mg(t,n,g,r),m=t.memoizedState),(u=Jr||gw(t,n,u,r,f,m,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Og(e,t,n,r,s,i)}function Og(e,t,n,r,i,s){lT(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&uw(t,n,!1),Pr(e,t,s);r=t.stateNode,Fb.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=jo(t,e.child,null,s),t.child=jo(t,null,a,s)):Et(e,t,a,s),t.memoizedState=r.state,i&&uw(t,n,!0),t.child}function cT(e){var t=e.stateNode;t.pendingContext?cw(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cw(e,t.context,!1),P0(e,t.containerInfo)}function kw(e,t,n,r,i){return No(),T0(i),t.flags|=256,Et(e,t,n,r),t.child}var Vg={dehydrated:null,treeContext:null,retryLane:0};function Ug(e){return{baseLanes:e,cachePool:null,transitions:null}}function uT(e,t,n){var r=t.pendingProps,i=ke.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(ke,i&1),e===null)return Ng(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kh(o,r,0,null),e=ls(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ug(n),t.memoizedState=Vg,e):O0(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return zb(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=mi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mi(a,s):(s=ls(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Ug(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Vg,r}return s=e.child,e=s.sibling,r=mi(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function O0(e,t){return t=kh({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function cu(e,t,n,r){return r!==null&&T0(r),jo(t,e.child,null,n),e=O0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zb(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=gp(Error(b(422))),cu(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=kh({mode:"visible",children:r.children},i,0,null),s=ls(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&jo(t,e.child,null,o),t.child.memoizedState=Ug(o),t.memoizedState=Vg,s);if(!(t.mode&1))return cu(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=gp(s,r,void 0),cu(e,t,o,r)}if(a=(o&e.childLanes)!==0,jt||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rr(e,i),In(r,e,i,-1))}return H0(),r=gp(Error(b(421))),cu(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=tN.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,zt=hi(i.nextSibling),Qt=t,Se=!0,wn=null,e!==null&&(sn[on++]=pr,sn[on++]=gr,sn[on++]=gs,pr=e.id,gr=e.overflow,gs=t),t=O0(t,r.children),t.flags|=4096,t)}function Cw(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jg(e.return,t,n)}function mp(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dT(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Et(e,t,r.children,n),r=ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cw(e,n,t);else if(e.tag===19)Cw(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(ke,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_d(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),mp(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_d(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}mp(t,!0,n,null,s);break;case"together":mp(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ys|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bb(e,t,n){switch(t.tag){case 3:cT(t),No();break;case 5:OI(t);break;case 1:Dt(t.type)&&pd(t);break;case 4:P0(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(yd,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(ke,ke.current&1),t.flags|=128,null):n&t.child.childLanes?uT(e,t,n):(me(ke,ke.current&1),e=Pr(e,t,n),e!==null?e.sibling:null);me(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dT(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,aT(e,t,n)}return Pr(e,t,n)}var hT,Fg,fT,pT;hT=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fg=function(){};fT=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ns(Yn.current);var s=null;switch(n){case"input":i=cg(e,i),r=cg(e,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=hg(e,i),r=hg(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hd)}pg(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ml.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ml.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ve("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};pT=function(e,t,n,r){n!==r&&(t.flags|=4)};function Na(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hb(e,t,n){var r=t.pendingProps;switch(I0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return Dt(t.type)&&fd(),dt(t),null;case 3:return r=t.stateNode,Mo(),Ie(Lt),Ie(wt),N0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(au(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wn!==null&&(Kg(wn),wn=null))),Fg(e,t),dt(t),null;case 5:b0(t);var i=ns(Al.current);if(n=t.type,e!==null&&t.stateNode!=null)fT(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return dt(t),null}if(e=ns(Yn.current),au(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Bn]=t,r[kl]=s,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Fa.length;i++)ve(Fa[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":D1(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":O1(r,s),ve("invalid",r)}pg(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ou(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ou(r.textContent,a,e),i=["children",""+a]):ml.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Jc(r),$1(r,s,!0);break;case"textarea":Jc(r),V1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hd)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=FE(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Bn]=t,e[kl]=r,hT(e,t,!1,!1),t.stateNode=e;e:{switch(o=gg(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Fa.length;i++)ve(Fa[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":D1(e,r),i=cg(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ve("invalid",e);break;case"textarea":O1(e,r),i=hg(e,r),ve("invalid",e);break;default:i=r}pg(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?HE(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zE(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yl(e,l):typeof l=="number"&&yl(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ml.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ve("scroll",e):l!=null&&l0(e,s,l,o))}switch(n){case"input":Jc(e),$1(e,r,!1);break;case"textarea":Jc(e),V1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ti(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?mo(e,!!r.multiple,s,!1):r.defaultValue!=null&&mo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dt(t),null;case 6:if(e&&t.stateNode!=null)pT(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=ns(Al.current),ns(Yn.current),au(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bn]=t,(s=r.nodeValue!==n)&&(e=Qt,e!==null))switch(e.tag){case 3:ou(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ou(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bn]=t,t.stateNode=r}return dt(t),null;case 13:if(Ie(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&zt!==null&&t.mode&1&&!(t.flags&128))bI(),No(),t.flags|=98560,s=!1;else if(s=au(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(b(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Bn]=t}else No(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dt(t),s=!1}else wn!==null&&(Kg(wn),wn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ke.current&1?We===0&&(We=3):H0())),t.updateQueue!==null&&(t.flags|=4),dt(t),null);case 4:return Mo(),Fg(e,t),e===null&&Tl(t.stateNode.containerInfo),dt(t),null;case 10:return C0(t.type._context),dt(t),null;case 17:return Dt(t.type)&&fd(),dt(t),null;case 19:if(Ie(ke),s=t.memoizedState,s===null)return dt(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Na(s,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_d(e),o!==null){for(t.flags|=128,Na(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(ke,ke.current&1|2),t.child}e=e.sibling}s.tail!==null&&Me()>Do&&(t.flags|=128,r=!0,Na(s,!1),t.lanes=4194304)}else{if(!r)if(e=_d(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return dt(t),null}else 2*Me()-s.renderingStartTime>Do&&n!==1073741824&&(t.flags|=128,r=!0,Na(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Me(),t.sibling=null,n=ke.current,me(ke,r?n&1|2:n&1),t):(dt(t),null);case 22:case 23:return B0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ft&1073741824&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Wb(e,t){switch(I0(t),t.tag){case 1:return Dt(t.type)&&fd(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mo(),Ie(Lt),Ie(wt),N0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return b0(t),null;case 13:if(Ie(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));No()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(ke),null;case 4:return Mo(),null;case 10:return C0(t.type._context),null;case 22:case 23:return B0(),null;case 24:return null;default:return null}}var uu=!1,pt=!1,qb=typeof WeakSet=="function"?WeakSet:Set,O=null;function oo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(e,t,r)}else n.current=null}function zg(e,t,n){try{n()}catch(r){be(e,t,r)}}var Aw=!1;function Gb(e,t){if(Sg=cd,e=vI(),x0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kg={focusedElem:e,selectionRange:n},cd=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,_=m.memoizedState,p=t.stateNode,y=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:yn(t.type,w),_);p.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(E){be(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return m=Aw,Aw=!1,m}function rl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&zg(t,n,s)}i=i.next}while(i!==r)}}function Th(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bg(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gT(e){var t=e.alternate;t!==null&&(e.alternate=null,gT(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bn],delete t[kl],delete t[Rg],delete t[Rb],delete t[Pb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mT(e){return e.tag===5||e.tag===3||e.tag===4}function Rw(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mT(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hd));else if(r!==4&&(e=e.child,e!==null))for(Hg(e,t,n),e=e.sibling;e!==null;)Hg(e,t,n),e=e.sibling}function Wg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wg(e,t,n),e=e.sibling;e!==null;)Wg(e,t,n),e=e.sibling}var tt=null,vn=!1;function Qr(e,t,n){for(n=n.child;n!==null;)yT(e,t,n),n=n.sibling}function yT(e,t,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(mh,n)}catch{}switch(n.tag){case 5:pt||oo(n,t);case 6:var r=tt,i=vn;tt=null,Qr(e,t,n),tt=r,vn=i,tt!==null&&(vn?(e=tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(vn?(e=tt,n=n.stateNode,e.nodeType===8?cp(e.parentNode,n):e.nodeType===1&&cp(e,n),xl(e)):cp(tt,n.stateNode));break;case 4:r=tt,i=vn,tt=n.stateNode.containerInfo,vn=!0,Qr(e,t,n),tt=r,vn=i;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zg(n,t,o),i=i.next}while(i!==r)}Qr(e,t,n);break;case 1:if(!pt&&(oo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,t,a)}Qr(e,t,n);break;case 21:Qr(e,t,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,Qr(e,t,n),pt=r):Qr(e,t,n);break;default:Qr(e,t,n)}}function Pw(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qb),t.forEach(function(r){var i=nN.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:tt=a.stateNode,vn=!1;break e;case 3:tt=a.stateNode.containerInfo,vn=!0;break e;case 4:tt=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(tt===null)throw Error(b(160));yT(s,o,i),tt=null,vn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){be(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vT(t,e),t=t.sibling}function vT(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mn(t,e),Vn(e),r&4){try{rl(3,e,e.return),Th(3,e)}catch(w){be(e,e.return,w)}try{rl(5,e,e.return)}catch(w){be(e,e.return,w)}}break;case 1:mn(t,e),Vn(e),r&512&&n!==null&&oo(n,n.return);break;case 5:if(mn(t,e),Vn(e),r&512&&n!==null&&oo(n,n.return),e.flags&32){var i=e.stateNode;try{yl(i,"")}catch(w){be(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&VE(i,s),gg(a,o);var u=gg(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?HE(i,h):d==="dangerouslySetInnerHTML"?zE(i,h):d==="children"?yl(i,h):l0(i,d,h,u)}switch(a){case"input":ug(i,s);break;case"textarea":UE(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?mo(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?mo(i,!!s.multiple,s.defaultValue,!0):mo(i,!!s.multiple,s.multiple?[]:"",!1))}i[kl]=s}catch(w){be(e,e.return,w)}}break;case 6:if(mn(t,e),Vn(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){be(e,e.return,w)}}break;case 3:if(mn(t,e),Vn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xl(t.containerInfo)}catch(w){be(e,e.return,w)}break;case 4:mn(t,e),Vn(e);break;case 13:mn(t,e),Vn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(F0=Me())),r&4&&Pw(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pt=(u=pt)||d,mn(t,e),pt=u):mn(t,e),Vn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(h=O=d;O!==null;){switch(f=O,g=f.child,f.tag){case 0:case 11:case 14:case 15:rl(4,f,f.return);break;case 1:oo(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(w){be(r,n,w)}}break;case 5:oo(f,f.return);break;case 22:if(f.memoizedState!==null){Nw(h);continue}}g!==null?(g.return=f,O=g):Nw(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=BE("display",o))}catch(w){be(e,e.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){be(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mn(t,e),Vn(e),r&4&&Pw(e);break;case 21:break;default:mn(t,e),Vn(e)}}function Vn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mT(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yl(i,""),r.flags&=-33);var s=Rw(e);Wg(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Rw(e);Hg(e,a,o);break;default:throw Error(b(161))}}catch(l){be(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qb(e,t,n){O=e,wT(e)}function wT(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||pt;a=uu;var u=pt;if(uu=o,(pt=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?jw(i):l!==null?(l.return=o,O=l):jw(i);for(;s!==null;)O=s,wT(s),s=s.sibling;O=i,uu=a,pt=u}bw(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):bw(e)}}function bw(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pt||Th(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:yn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&pw(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pw(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&xl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}pt||t.flags&512&&Bg(t)}catch(f){be(t,t.return,f)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Nw(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function jw(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Th(4,t)}catch(l){be(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){be(t,i,l)}}var s=t.return;try{Bg(t)}catch(l){be(t,s,l)}break;case 5:var o=t.return;try{Bg(t)}catch(l){be(t,o,l)}}}catch(l){be(t,t.return,l)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Kb=Math.ceil,Id=zr.ReactCurrentDispatcher,V0=zr.ReactCurrentOwner,dn=zr.ReactCurrentBatchConfig,se=0,Je=null,Ue=null,ot=0,Ft=0,ao=Li(0),We=0,Nl=null,ys=0,Sh=0,U0=0,il=null,bt=null,F0=0,Do=1/0,dr=null,Td=!1,qg=null,pi=null,du=!1,oi=null,Sd=0,sl=0,Gg=null,Du=-1,$u=0;function St(){return se&6?Me():Du!==-1?Du:Du=Me()}function gi(e){return e.mode&1?se&2&&ot!==0?ot&-ot:Nb.transition!==null?($u===0&&($u=nI()),$u):(e=de,e!==0||(e=window.event,e=e===void 0?16:cI(e.type)),e):1}function In(e,t,n,r){if(50<sl)throw sl=0,Gg=null,Error(b(185));pc(e,n,r),(!(se&2)||e!==Je)&&(e===Je&&(!(se&2)&&(Sh|=n),We===4&&ei(e,ot)),$t(e,r),n===1&&se===0&&!(t.mode&1)&&(Do=Me()+500,xh&&Di()))}function $t(e,t){var n=e.callbackNode;N2(e,t);var r=ld(e,e===Je?ot:0);if(r===0)n!==null&&z1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&z1(n),t===1)e.tag===0?bb(Mw.bind(null,e)):AI(Mw.bind(null,e)),Cb(function(){!(se&6)&&Di()}),n=null;else{switch(rI(r)){case 1:n=f0;break;case 4:n=eI;break;case 16:n=ad;break;case 536870912:n=tI;break;default:n=ad}n=CT(n,_T.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _T(e,t){if(Du=-1,$u=0,se&6)throw Error(b(327));var n=e.callbackNode;if(xo()&&e.callbackNode!==n)return null;var r=ld(e,e===Je?ot:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=kd(e,r);else{t=r;var i=se;se|=2;var s=ET();(Je!==e||ot!==t)&&(dr=null,Do=Me()+500,as(e,t));do try{Jb();break}catch(a){xT(e,a)}while(!0);k0(),Id.current=s,se=i,Ue!==null?t=0:(Je=null,ot=0,t=We)}if(t!==0){if(t===2&&(i=_g(e),i!==0&&(r=i,t=Qg(e,i))),t===1)throw n=Nl,as(e,0),ei(e,r),$t(e,Me()),n;if(t===6)ei(e,r);else{if(i=e.current.alternate,!(r&30)&&!Yb(i)&&(t=kd(e,r),t===2&&(s=_g(e),s!==0&&(r=s,t=Qg(e,s))),t===1))throw n=Nl,as(e,0),ei(e,r),$t(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Ji(e,bt,dr);break;case 3:if(ei(e,r),(r&130023424)===r&&(t=F0+500-Me(),10<t)){if(ld(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){St(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ag(Ji.bind(null,e,bt,dr),t);break}Ji(e,bt,dr);break;case 4:if(ei(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-En(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kb(r/1960))-r,10<r){e.timeoutHandle=Ag(Ji.bind(null,e,bt,dr),r);break}Ji(e,bt,dr);break;case 5:Ji(e,bt,dr);break;default:throw Error(b(329))}}}return $t(e,Me()),e.callbackNode===n?_T.bind(null,e):null}function Qg(e,t){var n=il;return e.current.memoizedState.isDehydrated&&(as(e,t).flags|=256),e=kd(e,t),e!==2&&(t=bt,bt=n,t!==null&&Kg(t)),e}function Kg(e){bt===null?bt=e:bt.push.apply(bt,e)}function Yb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!An(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ei(e,t){for(t&=~U0,t&=~Sh,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-En(t),r=1<<n;e[n]=-1,t&=~r}}function Mw(e){if(se&6)throw Error(b(327));xo();var t=ld(e,0);if(!(t&1))return $t(e,Me()),null;var n=kd(e,t);if(e.tag!==0&&n===2){var r=_g(e);r!==0&&(t=r,n=Qg(e,r))}if(n===1)throw n=Nl,as(e,0),ei(e,t),$t(e,Me()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ji(e,bt,dr),$t(e,Me()),null}function z0(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Do=Me()+500,xh&&Di())}}function vs(e){oi!==null&&oi.tag===0&&!(se&6)&&xo();var t=se;se|=1;var n=dn.transition,r=de;try{if(dn.transition=null,de=1,e)return e()}finally{de=r,dn.transition=n,se=t,!(se&6)&&Di()}}function B0(){Ft=ao.current,Ie(ao)}function as(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kb(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(I0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fd();break;case 3:Mo(),Ie(Lt),Ie(wt),N0();break;case 5:b0(r);break;case 4:Mo();break;case 13:Ie(ke);break;case 19:Ie(ke);break;case 10:C0(r.type._context);break;case 22:case 23:B0()}n=n.return}if(Je=e,Ue=e=mi(e.current,null),ot=Ft=t,We=0,Nl=null,U0=Sh=ys=0,bt=il=null,ts!==null){for(t=0;t<ts.length;t++)if(n=ts[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ts=null}return e}function xT(e,t){do{var n=Ue;try{if(k0(),ju.current=Ed,xd){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xd=!1}if(ms=0,Ke=He=Ce=null,nl=!1,Rl=0,V0.current=null,n===null||n.return===null){We=1,Nl=t,Ue=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=xw(o);if(g!==null){g.flags&=-257,Ew(g,o,a,s,t),g.mode&1&&_w(s,u,t),t=g,l=u;var m=t.updateQueue;if(m===null){var w=new Set;w.add(l),t.updateQueue=w}else m.add(l);break e}else{if(!(t&1)){_w(s,u,t),H0();break e}l=Error(b(426))}}else if(Se&&a.mode&1){var _=xw(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ew(_,o,a,s,t),T0(Lo(l,a));break e}}s=l=Lo(l,a),We!==4&&(We=2),il===null?il=[s]:il.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=iT(s,l,t);fw(s,p);break e;case 1:a=l;var y=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(pi===null||!pi.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var E=sT(s,a,t);fw(s,E);break e}}s=s.return}while(s!==null)}TT(n)}catch(S){t=S,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function ET(){var e=Id.current;return Id.current=Ed,e===null?Ed:e}function H0(){(We===0||We===3||We===2)&&(We=4),Je===null||!(ys&268435455)&&!(Sh&268435455)||ei(Je,ot)}function kd(e,t){var n=se;se|=2;var r=ET();(Je!==e||ot!==t)&&(dr=null,as(e,t));do try{Xb();break}catch(i){xT(e,i)}while(!0);if(k0(),se=n,Id.current=r,Ue!==null)throw Error(b(261));return Je=null,ot=0,We}function Xb(){for(;Ue!==null;)IT(Ue)}function Jb(){for(;Ue!==null&&!I2();)IT(Ue)}function IT(e){var t=kT(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?TT(e):Ue=t,V0.current=null}function TT(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wb(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Ue=null;return}}else if(n=Hb(n,t,Ft),n!==null){Ue=n;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);We===0&&(We=5)}function Ji(e,t,n){var r=de,i=dn.transition;try{dn.transition=null,de=1,Zb(e,t,n,r)}finally{dn.transition=i,de=r}return null}function Zb(e,t,n,r){do xo();while(oi!==null);if(se&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(j2(e,s),e===Je&&(Ue=Je=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||du||(du=!0,CT(ad,function(){return xo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dn.transition,dn.transition=null;var o=de;de=1;var a=se;se|=4,V0.current=null,Gb(e,n),vT(n,e),wb(kg),cd=!!Sg,kg=Sg=null,e.current=n,Qb(n),T2(),se=a,de=o,dn.transition=s}else e.current=n;if(du&&(du=!1,oi=e,Sd=i),s=e.pendingLanes,s===0&&(pi=null),C2(n.stateNode),$t(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Td)throw Td=!1,e=qg,qg=null,e;return Sd&1&&e.tag!==0&&xo(),s=e.pendingLanes,s&1?e===Gg?sl++:(sl=0,Gg=e):sl=0,Di(),null}function xo(){if(oi!==null){var e=rI(Sd),t=dn.transition,n=de;try{if(dn.transition=null,de=16>e?16:e,oi===null)var r=!1;else{if(e=oi,oi=null,Sd=0,se&6)throw Error(b(331));var i=se;for(se|=4,O=e.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:rl(8,d,s)}var h=d.child;if(h!==null)h.return=d,O=h;else for(;O!==null;){d=O;var f=d.sibling,g=d.return;if(gT(d),d===u){O=null;break}if(f!==null){f.return=g,O=f;break}O=g}}}var m=s.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rl(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,O=p;break e}O=s.return}}var y=e.current;for(O=y;O!==null;){o=O;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,O=v;else e:for(o=y;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Th(9,a)}}catch(S){be(a,a.return,S)}if(a===o){O=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,O=E;break e}O=a.return}}if(se=i,Di(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(mh,e)}catch{}r=!0}return r}finally{de=n,dn.transition=t}}return!1}function Lw(e,t,n){t=Lo(n,t),t=iT(e,t,1),e=fi(e,t,1),t=St(),e!==null&&(pc(e,1,t),$t(e,t))}function be(e,t,n){if(e.tag===3)Lw(e,e,n);else for(;t!==null;){if(t.tag===3){Lw(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pi===null||!pi.has(r))){e=Lo(n,e),e=sT(t,e,1),t=fi(t,e,1),e=St(),t!==null&&(pc(t,1,e),$t(t,e));break}}t=t.return}}function eN(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=St(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(ot&n)===n&&(We===4||We===3&&(ot&130023424)===ot&&500>Me()-F0?as(e,0):U0|=n),$t(e,t)}function ST(e,t){t===0&&(e.mode&1?(t=tu,tu<<=1,!(tu&130023424)&&(tu=4194304)):t=1);var n=St();e=Rr(e,t),e!==null&&(pc(e,t,n),$t(e,n))}function tN(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ST(e,n)}function nN(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),ST(e,n)}var kT;kT=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Lt.current)jt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return jt=!1,Bb(e,t,n);jt=!!(e.flags&131072)}else jt=!1,Se&&t.flags&1048576&&RI(t,md,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lu(e,t),e=t.pendingProps;var i=bo(t,wt.current);_o(t,n),i=M0(null,t,r,e,i,n);var s=L0();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Dt(r)?(s=!0,pd(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,R0(t),i.updater=Eh,t.stateNode=i,i._reactInternals=t,Lg(t,r,e,n),t=Og(null,t,r,!0,s,n)):(t.tag=0,Se&&s&&E0(t),Et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=iN(r),e=yn(r,e),i){case 0:t=$g(null,t,r,e,n);break e;case 1:t=Sw(null,t,r,e,n);break e;case 11:t=Iw(null,t,r,e,n);break e;case 14:t=Tw(null,t,r,yn(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yn(r,i),$g(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yn(r,i),Sw(e,t,r,i,n);case 3:e:{if(cT(t),e===null)throw Error(b(387));r=t.pendingProps,s=t.memoizedState,i=s.element,jI(e,t),wd(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Lo(Error(b(423)),t),t=kw(e,t,r,n,i);break e}else if(r!==i){i=Lo(Error(b(424)),t),t=kw(e,t,r,n,i);break e}else for(zt=hi(t.stateNode.containerInfo.firstChild),Qt=t,Se=!0,wn=null,n=$I(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(No(),r===i){t=Pr(e,t,n);break e}Et(e,t,r,n)}t=t.child}return t;case 5:return OI(t),e===null&&Ng(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Cg(r,i)?o=null:s!==null&&Cg(r,s)&&(t.flags|=32),lT(e,t),Et(e,t,o,n),t.child;case 6:return e===null&&Ng(t),null;case 13:return uT(e,t,n);case 4:return P0(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jo(t,null,r,n):Et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yn(r,i),Iw(e,t,r,i,n);case 7:return Et(e,t,t.pendingProps,n),t.child;case 8:return Et(e,t,t.pendingProps.children,n),t.child;case 12:return Et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,me(yd,r._currentValue),r._currentValue=o,s!==null)if(An(s.value,o)){if(s.children===i.children&&!Lt.current){t=Pr(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ir(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jg(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jg(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_o(t,n),i=hn(i),r=r(i),t.flags|=1,Et(e,t,r,n),t.child;case 14:return r=t.type,i=yn(r,t.pendingProps),i=yn(r.type,i),Tw(e,t,r,i,n);case 15:return oT(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yn(r,i),Lu(e,t),t.tag=1,Dt(r)?(e=!0,pd(t)):e=!1,_o(t,n),LI(t,r,i),Lg(t,r,i,n),Og(null,t,r,!0,e,n);case 19:return dT(e,t,n);case 22:return aT(e,t,n)}throw Error(b(156,t.tag))};function CT(e,t){return ZE(e,t)}function rN(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,t,n,r){return new rN(e,t,n,r)}function W0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iN(e){if(typeof e=="function")return W0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===u0)return 11;if(e===d0)return 14}return 2}function mi(e,t){var n=e.alternate;return n===null?(n=cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ou(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")W0(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Xs:return ls(n.children,i,s,t);case c0:o=8,i|=8;break;case sg:return e=cn(12,n,t,i|2),e.elementType=sg,e.lanes=s,e;case og:return e=cn(13,n,t,i),e.elementType=og,e.lanes=s,e;case ag:return e=cn(19,n,t,i),e.elementType=ag,e.lanes=s,e;case DE:return kh(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ME:o=10;break e;case LE:o=9;break e;case u0:o=11;break e;case d0:o=14;break e;case Xr:o=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=cn(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function ls(e,t,n,r){return e=cn(7,e,r,t),e.lanes=n,e}function kh(e,t,n,r){return e=cn(22,e,r,t),e.elementType=DE,e.lanes=n,e.stateNode={isHidden:!1},e}function yp(e,t,n){return e=cn(6,e,null,t),e.lanes=n,e}function vp(e,t,n){return t=cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sN(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jf(0),this.expirationTimes=Jf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function q0(e,t,n,r,i,s,o,a,l){return e=new sN(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=cn(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},R0(s),e}function oN(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function AT(e){if(!e)return Si;e=e._reactInternals;e:{if(Ns(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Dt(n))return CI(e,n,t)}return t}function RT(e,t,n,r,i,s,o,a,l){return e=q0(n,r,!0,e,i,s,o,a,l),e.context=AT(null),n=e.current,r=St(),i=gi(n),s=Ir(r,i),s.callback=t??null,fi(n,s,i),e.current.lanes=i,pc(e,i,r),$t(e,r),e}function Ch(e,t,n,r){var i=t.current,s=St(),o=gi(i);return n=AT(n),t.context===null?t.context=n:t.pendingContext=n,t=Ir(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fi(i,t,o),e!==null&&(In(e,i,o,s),Nu(e,i,o)),o}function Cd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dw(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function G0(e,t){Dw(e,t),(e=e.alternate)&&Dw(e,t)}function aN(){return null}var PT=typeof reportError=="function"?reportError:function(e){console.error(e)};function Q0(e){this._internalRoot=e}Ah.prototype.render=Q0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Ch(e,t,null,null)};Ah.prototype.unmount=Q0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vs(function(){Ch(null,e,null,null)}),t[Ar]=null}};function Ah(e){this._internalRoot=e}Ah.prototype.unstable_scheduleHydration=function(e){if(e){var t=oI();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zr.length&&t!==0&&t<Zr[n].priority;n++);Zr.splice(n,0,e),n===0&&lI(e)}};function K0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $w(){}function lN(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Cd(o);s.call(u)}}var o=RT(t,r,e,0,null,!1,!1,"",$w);return e._reactRootContainer=o,e[Ar]=o.current,Tl(e.nodeType===8?e.parentNode:e),vs(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Cd(l);a.call(u)}}var l=q0(e,0,!1,null,null,!1,!1,"",$w);return e._reactRootContainer=l,e[Ar]=l.current,Tl(e.nodeType===8?e.parentNode:e),vs(function(){Ch(t,l,n,r)}),l}function Ph(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Cd(o);a.call(l)}}Ch(t,o,e,i)}else o=lN(n,t,e,i,r);return Cd(o)}iI=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ua(t.pendingLanes);n!==0&&(p0(t,n|1),$t(t,Me()),!(se&6)&&(Do=Me()+500,Di()))}break;case 13:vs(function(){var r=Rr(e,1);if(r!==null){var i=St();In(r,e,1,i)}}),G0(e,1)}};g0=function(e){if(e.tag===13){var t=Rr(e,134217728);if(t!==null){var n=St();In(t,e,134217728,n)}G0(e,134217728)}};sI=function(e){if(e.tag===13){var t=gi(e),n=Rr(e,t);if(n!==null){var r=St();In(n,e,t,r)}G0(e,t)}};oI=function(){return de};aI=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};yg=function(e,t,n){switch(t){case"input":if(ug(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_h(r);if(!i)throw Error(b(90));OE(r),ug(r,i)}}}break;case"textarea":UE(e,n);break;case"select":t=n.value,t!=null&&mo(e,!!n.multiple,t,!1)}};GE=z0;QE=vs;var cN={usingClientEntryPoint:!1,Events:[mc,to,_h,WE,qE,z0]},ja={findFiberByHostInstance:es,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uN={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=XE(e),e===null?null:e.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||aN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{mh=hu.inject(uN),Kn=hu}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cN;en.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!K0(t))throw Error(b(200));return oN(e,t,null,n)};en.createRoot=function(e,t){if(!K0(e))throw Error(b(299));var n=!1,r="",i=PT;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=q0(e,1,!1,null,null,n,!1,r,i),e[Ar]=t.current,Tl(e.nodeType===8?e.parentNode:e),new Q0(t)};en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=XE(t),e=e===null?null:e.stateNode,e};en.flushSync=function(e){return vs(e)};en.hydrate=function(e,t,n){if(!Rh(t))throw Error(b(200));return Ph(null,e,t,!0,n)};en.hydrateRoot=function(e,t,n){if(!K0(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=PT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=RT(t,null,e,1,n??null,i,!1,s,o),e[Ar]=t.current,Tl(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ah(t)};en.render=function(e,t,n){if(!Rh(t))throw Error(b(200));return Ph(null,e,t,!1,n)};en.unmountComponentAtNode=function(e){if(!Rh(e))throw Error(b(40));return e._reactRootContainer?(vs(function(){Ph(null,null,e,!1,function(){e._reactRootContainer=null,e[Ar]=null})}),!0):!1};en.unstable_batchedUpdates=z0;en.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Rh(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Ph(e,t,n,!1,r)};en.version="18.2.0-next-9e3b772b8-20220608";function bT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bT)}catch(e){console.error(e)}}bT(),RE.exports=en;var dN=RE.exports,Ow=dN;rg.createRoot=Ow.createRoot,rg.hydrateRoot=Ow.hydrateRoot;var Xe=function(){return Xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Xe.apply(this,arguments)};function Y0(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function jl(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var we="-ms-",ol="-moz-",ue="-webkit-",NT="comm",bh="rule",X0="decl",hN="@import",jT="@keyframes",fN="@layer",pN=Math.abs,J0=String.fromCharCode,Yg=Object.assign;function gN(e,t){return Ye(e,0)^45?(((t<<2^Ye(e,0))<<2^Ye(e,1))<<2^Ye(e,2))<<2^Ye(e,3):0}function MT(e){return e.trim()}function hr(e,t){return(e=t.exec(e))?e[0]:e}function Z(e,t,n){return e.replace(t,n)}function Vu(e,t){return e.indexOf(t)}function Ye(e,t){return e.charCodeAt(t)|0}function $o(e,t,n){return e.slice(t,n)}function zn(e){return e.length}function LT(e){return e.length}function za(e,t){return t.push(e),e}function mN(e,t){return e.map(t).join("")}function Vw(e,t){return e.filter(function(n){return!hr(n,t)})}var Nh=1,Oo=1,DT=0,pn=0,Ve=0,ca="";function jh(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Nh,column:Oo,length:o,return:"",siblings:a}}function Yr(e,t){return Yg(jh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Bs(e){for(;e.root;)e=Yr(e.root,{children:[e]});za(e,e.siblings)}function yN(){return Ve}function vN(){return Ve=pn>0?Ye(ca,--pn):0,Oo--,Ve===10&&(Oo=1,Nh--),Ve}function Tn(){return Ve=pn<DT?Ye(ca,pn++):0,Oo++,Ve===10&&(Oo=1,Nh++),Ve}function cs(){return Ye(ca,pn)}function Uu(){return pn}function Mh(e,t){return $o(ca,e,t)}function Xg(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wN(e){return Nh=Oo=1,DT=zn(ca=e),pn=0,[]}function _N(e){return ca="",e}function wp(e){return MT(Mh(pn-1,Jg(e===91?e+2:e===40?e+1:e)))}function xN(e){for(;(Ve=cs())&&Ve<33;)Tn();return Xg(e)>2||Xg(Ve)>3?"":" "}function EN(e,t){for(;--t&&Tn()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return Mh(e,Uu()+(t<6&&cs()==32&&Tn()==32))}function Jg(e){for(;Tn();)switch(Ve){case e:return pn;case 34:case 39:e!==34&&e!==39&&Jg(Ve);break;case 40:e===41&&Jg(e);break;case 92:Tn();break}return pn}function IN(e,t){for(;Tn()&&e+Ve!==57;)if(e+Ve===84&&cs()===47)break;return"/*"+Mh(t,pn-1)+"*"+J0(e===47?e:Tn())}function TN(e){for(;!Xg(cs());)Tn();return Mh(e,pn)}function SN(e){return _N(Fu("",null,null,null,[""],e=wN(e),0,[0],e))}function Fu(e,t,n,r,i,s,o,a,l){for(var u=0,d=0,h=o,f=0,g=0,m=0,w=1,_=1,p=1,y=0,v="",E=i,S=s,k=r,I=v;_;)switch(m=y,y=Tn()){case 40:if(m!=108&&Ye(I,h-1)==58){Vu(I+=Z(wp(y),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:I+=wp(y);break;case 9:case 10:case 13:case 32:I+=xN(m);break;case 92:I+=EN(Uu()-1,7);continue;case 47:switch(cs()){case 42:case 47:za(kN(IN(Tn(),Uu()),t,n,l),l);break;default:I+="/"}break;case 123*w:a[u++]=zn(I)*p;case 125*w:case 59:case 0:switch(y){case 0:case 125:_=0;case 59+d:p==-1&&(I=Z(I,/\f/g,"")),g>0&&zn(I)-h&&za(g>32?Fw(I+";",r,n,h-1,l):Fw(Z(I," ","")+";",r,n,h-2,l),l);break;case 59:I+=";";default:if(za(k=Uw(I,t,n,u,d,i,a,v,E=[],S=[],h,s),s),y===123)if(d===0)Fu(I,t,k,k,E,s,h,a,S);else switch(f===99&&Ye(I,3)===110?100:f){case 100:case 108:case 109:case 115:Fu(e,k,k,r&&za(Uw(e,k,k,0,0,i,a,v,i,E=[],h,S),S),i,S,h,a,r?E:S);break;default:Fu(I,k,k,k,[""],S,0,a,S)}}u=d=g=0,w=p=1,v=I="",h=o;break;case 58:h=1+zn(I),g=m;default:if(w<1){if(y==123)--w;else if(y==125&&w++==0&&vN()==125)continue}switch(I+=J0(y),y*w){case 38:p=d>0?1:(I+="\f",-1);break;case 44:a[u++]=(zn(I)-1)*p,p=1;break;case 64:cs()===45&&(I+=wp(Tn())),f=cs(),d=h=zn(v=I+=TN(Uu())),y++;break;case 45:m===45&&zn(I)==2&&(w=0)}}return s}function Uw(e,t,n,r,i,s,o,a,l,u,d,h){for(var f=i-1,g=i===0?s:[""],m=LT(g),w=0,_=0,p=0;w<r;++w)for(var y=0,v=$o(e,f+1,f=pN(_=o[w])),E=e;y<m;++y)(E=MT(_>0?g[y]+" "+v:Z(v,/&\f/g,g[y])))&&(l[p++]=E);return jh(e,t,n,i===0?bh:a,l,u,d,h)}function kN(e,t,n,r){return jh(e,t,n,NT,J0(yN()),$o(e,2,-2),0,r)}function Fw(e,t,n,r,i){return jh(e,t,n,X0,$o(e,0,r),$o(e,r+1,-1),r,i)}function $T(e,t,n){switch(gN(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 4789:return ol+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+ol+e+we+e+e;case 5936:switch(Ye(e,t+11)){case 114:return ue+e+we+Z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+we+Z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+we+Z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+we+e+e;case 6165:return ue+e+we+"flex-"+e+e;case 5187:return ue+e+Z(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+we+"flex-$1$2")+e;case 5443:return ue+e+we+"flex-item-"+Z(e,/flex-|-self/g,"")+(hr(e,/flex-|baseline/)?"":we+"grid-row-"+Z(e,/flex-|-self/g,""))+e;case 4675:return ue+e+we+"flex-line-pack"+Z(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+we+Z(e,"shrink","negative")+e;case 5292:return ue+e+we+Z(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+Z(e,"-grow","")+ue+e+we+Z(e,"grow","positive")+e;case 4554:return ue+Z(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return Z(Z(Z(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return Z(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return Z(Z(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4200:if(!hr(e,/flex-|baseline/))return we+"grid-column-align"+$o(e,t)+e;break;case 2592:case 3360:return we+Z(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,hr(r.props,/grid-\w+-end/)})?~Vu(e+(n=n[t].value),"span")?e:we+Z(e,"-start","")+e+we+"grid-row-span:"+(~Vu(n,"span")?hr(n,/\d+/):+hr(n,/\d+/)-+hr(e,/\d+/))+";":we+Z(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return hr(r.props,/grid-\w+-start/)})?e:we+Z(Z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Z(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zn(e)-1-t>6)switch(Ye(e,t+1)){case 109:if(Ye(e,t+4)!==45)break;case 102:return Z(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+ol+(Ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Vu(e,"stretch")?$T(Z(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return we+i+":"+s+u+(o?we+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(Ye(e,t+6)===121)return Z(e,":",":"+ue)+e;break;case 6444:switch(Ye(e,Ye(e,14)===45?18:11)){case 120:return Z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Ye(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+we+"$2box$3")+e;case 100:return Z(e,":",":"+we)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(e,"scroll-","scroll-snap-")+e}return e}function Ad(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function CN(e,t,n,r){switch(e.type){case fN:if(e.children.length)break;case hN:case X0:return e.return=e.return||e.value;case NT:return"";case jT:return e.return=e.value+"{"+Ad(e.children,r)+"}";case bh:if(!zn(e.value=e.props.join(",")))return""}return zn(n=Ad(e.children,r))?e.return=e.value+"{"+n+"}":""}function AN(e){var t=LT(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function RN(e){return function(t){t.root||(t=t.return)&&e(t)}}function PN(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case X0:e.return=$T(e.value,e.length,n);return;case jT:return Ad([Yr(e,{value:Z(e.value,"@","@"+ue)})],r);case bh:if(e.length)return mN(n=e.props,function(i){switch(hr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bs(Yr(e,{props:[Z(i,/:(read-\w+)/,":"+ol+"$1")]})),Bs(Yr(e,{props:[i]})),Yg(e,{props:Vw(n,r)});break;case"::placeholder":Bs(Yr(e,{props:[Z(i,/:(plac\w+)/,":"+ue+"input-$1")]})),Bs(Yr(e,{props:[Z(i,/:(plac\w+)/,":"+ol+"$1")]})),Bs(Yr(e,{props:[Z(i,/:(plac\w+)/,we+"input-$1")]})),Bs(Yr(e,{props:[i]})),Yg(e,{props:Vw(n,r)});break}return""})}}var bN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ut={},Vo=typeof process<"u"&&Ut!==void 0&&(Ut.REACT_APP_SC_ATTR||Ut.SC_ATTR)||"data-styled",Z0=typeof window<"u"&&"HTMLElement"in window,NN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ut!==void 0&&Ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ut.REACT_APP_SC_DISABLE_SPEEDY!==""?Ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ut!==void 0&&Ut.SC_DISABLE_SPEEDY!==void 0&&Ut.SC_DISABLE_SPEEDY!==""&&Ut.SC_DISABLE_SPEEDY!=="false"&&Ut.SC_DISABLE_SPEEDY),jN={},Lh=Object.freeze([]),Uo=Object.freeze({});function OT(e,t,n){return n===void 0&&(n=Uo),e.theme!==n.theme&&e.theme||t||n.theme}var VT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),MN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,LN=/(^-|-$)/g;function zw(e){return e.replace(MN,"-").replace(LN,"")}var DN=/(a)(d)/gi,Bw=function(e){return String.fromCharCode(e+(e>25?39:97))};function Zg(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Bw(t%52)+n;return(Bw(t%52)+n).replace(DN,"$1-$2")}var _p,lo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},UT=function(e){return lo(5381,e)};function FT(e){return Zg(UT(e)>>>0)}function $N(e){return e.displayName||e.name||"Component"}function xp(e){return typeof e=="string"&&!0}var zT=typeof Symbol=="function"&&Symbol.for,BT=zT?Symbol.for("react.memo"):60115,ON=zT?Symbol.for("react.forward_ref"):60112,VN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},UN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},HT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},FN=((_p={})[ON]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_p[BT]=HT,_p);function Hw(e){return("type"in(t=e)&&t.type.$$typeof)===BT?HT:"$$typeof"in e?FN[e.$$typeof]:VN;var t}var zN=Object.defineProperty,BN=Object.getOwnPropertyNames,Ww=Object.getOwnPropertySymbols,HN=Object.getOwnPropertyDescriptor,WN=Object.getPrototypeOf,qw=Object.prototype;function WT(e,t,n){if(typeof t!="string"){if(qw){var r=WN(t);r&&r!==qw&&WT(e,r,n)}var i=BN(t);Ww&&(i=i.concat(Ww(t)));for(var s=Hw(e),o=Hw(t),a=0;a<i.length;++a){var l=i[a];if(!(l in UN||n&&n[l]||o&&l in o||s&&l in s)){var u=HN(t,l);try{zN(e,l,u)}catch{}}}}return e}function ws(e){return typeof e=="function"}function ey(e){return typeof e=="object"&&"styledComponentId"in e}function rs(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function em(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ml(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function tm(e,t,n){if(n===void 0&&(n=!1),!n&&!Ml(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=tm(e[r],t[r]);else if(Ml(t))for(var r in t)e[r]=tm(e[r],t[r]);return e}function ty(e,t){Object.defineProperty(e,"toString",{value:t})}function ki(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qN=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw ki(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),zu=new Map,Rd=new Map,Bu=1,fu=function(e){if(zu.has(e))return zu.get(e);for(;Rd.has(Bu);)Bu++;var t=Bu++;return zu.set(e,t),Rd.set(t,e),t},GN=function(e,t){Bu=t+1,zu.set(e,t),Rd.set(t,e)},QN="style[".concat(Vo,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),KN=new RegExp("^".concat(Vo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),YN=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},XN=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(KN);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(GN(d,u),YN(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function JN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qT=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Vo,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Vo,"active"),r.setAttribute("data-styled-version","6.1.1");var o=JN();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},ZN=function(){function e(t){this.element=qT(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ki(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ej=function(){function e(t){this.element=qT(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),tj=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Gw=Z0,nj={isServer:!Z0,useCSSOMInjection:!NN},Pd=function(){function e(t,n,r){t===void 0&&(t=Uo),n===void 0&&(n={});var i=this;this.options=Xe(Xe({},nj),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Z0&&Gw&&(Gw=!1,function(s){for(var o=document.querySelectorAll(QN),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Vo)!=="active"&&(XN(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),ty(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var f=function(p){return Rd.get(p)}(h);if(f===void 0)return"continue";var g=s.names.get(f),m=o.getGroup(h);if(g===void 0||m.length===0)return"continue";var w="".concat(Vo,".g").concat(h,'[id="').concat(f,'"]'),_="";g!==void 0&&g.forEach(function(p){p.length>0&&(_+="".concat(p,","))}),l+="".concat(m).concat(w,'{content:"').concat(_,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return l}(i)})}return e.registerId=function(t){return fu(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Xe(Xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new tj(i):r?new ZN(i):new ej(i)}(this.options),new qN(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(fu(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(fu(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(fu(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),rj=/&/g,ij=/^\s*\/\/.*$/gm;function GT(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=GT(n.children,t)),n})}function sj(e){var t,n,r,i=e===void 0?Uo:e,s=i.options,o=s===void 0?Uo:s,a=i.plugins,l=a===void 0?Lh:a,u=function(f,g,m){return m===n||m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===bh&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(rj,n).replace(r,u))}),o.prefix&&d.push(PN),d.push(CN);var h=function(f,g,m,w){g===void 0&&(g=""),m===void 0&&(m=""),w===void 0&&(w="&"),t=w,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var _=f.replace(ij,""),p=SN(m||g?"".concat(m," ").concat(g," { ").concat(_," }"):_);o.namespace&&(p=GT(p,o.namespace));var y=[];return Ad(p,AN(d.concat(RN(function(v){return y.push(v)})))),y};return h.hash=l.length?l.reduce(function(f,g){return g.name||ki(15),lo(f,g.name)},5381).toString():"",h}var oj=new Pd,nm=sj(),QT=ge.createContext({shouldForwardProp:void 0,styleSheet:oj,stylis:nm});QT.Consumer;ge.createContext(void 0);function rm(){return T.useContext(QT)}var aj=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=nm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ty(this,function(){throw ki(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=nm),this.name+t.hash},e}(),lj=function(e){return e>="A"&&e<="Z"};function Qw(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;lj(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var KT=function(e){return e==null||e===!1||e===""},YT=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!KT(s)&&(Array.isArray(s)&&s.isCss||ws(s)?r.push("".concat(Qw(i),":"),s,";"):Ml(s)?r.push.apply(r,jl(jl(["".concat(i," {")],YT(s),!1),["}"],!1)):r.push("".concat(Qw(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in bN||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yi(e,t,n,r){if(KT(e))return[];if(ey(e))return[".".concat(e.styledComponentId)];if(ws(e)){if(!ws(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return yi(i,t,n,r)}var s;return e instanceof aj?n?(e.inject(n,r),[e.getName(r)]):[e]:Ml(e)?YT(e):Array.isArray(e)?Array.prototype.concat.apply(Lh,e.map(function(o){return yi(o,t,n,r)})):[e.toString()]}function XT(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ws(n)&&!ey(n))return!1}return!0}var cj=UT("6.1.1"),uj=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&XT(t),this.componentId=n,this.baseHash=lo(cj,n),this.baseStyle=r,Pd.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=rs(i,this.staticRulesId);else{var s=em(yi(this.rules,t,n,r)),o=Zg(lo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=rs(i,o),this.staticRulesId=o}else{for(var l=lo(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var f=em(yi(h,t,n,r));l=lo(l,f+d),u+=f}}if(u){var g=Zg(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=rs(i,g)}}return i},e}(),Fo=ge.createContext(void 0);Fo.Consumer;function ny(){var e=T.useContext(Fo);if(!e)throw ki(18);return e}function dj(e){var t=ge.useContext(Fo),n=T.useMemo(function(){return function(r,i){if(!r)throw ki(14);if(ws(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw ki(8);return i?Xe(Xe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?ge.createElement(Fo.Provider,{value:n},e.children):null}var Ep={};function hj(e,t,n){var r=ey(e),i=e,s=!xp(e),o=t.attrs,a=o===void 0?Lh:o,l=t.componentId,u=l===void 0?function(E,S){var k=typeof E!="string"?"sc":zw(E);Ep[k]=(Ep[k]||0)+1;var I="".concat(k,"-").concat(FT("6.1.1"+k+Ep[k]));return S?"".concat(S,"-").concat(I):I}(t.displayName,t.parentComponentId):l,d=t.displayName,h=d===void 0?function(E){return xp(E)?"styled.".concat(E):"Styled(".concat($N(E),")")}(e):d,f=t.displayName&&t.componentId?"".concat(zw(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;m=function(E,S){return w(E,S)&&_(E,S)}}else m=w}var p=new uj(n,f,r?i.componentStyle:void 0);function y(E,S){return function(k,I,C){var N=k.attrs,F=k.componentStyle,ae=k.defaultProps,cr=k.foldedComponentIds,Dn=k.styledComponentId,Us=k.target,Fs=ge.useContext(Fo),Wr=rm(),$n=k.shouldForwardProp||Wr.shouldForwardProp,M=function(nn,ur,rn){for(var On,Qi=Xe(Xe({},ur),{className:void 0,theme:rn}),qf=0;qf<nn.length;qf+=1){var Kc=ws(On=nn[qf])?On(Qi):On;for(var Gr in Kc)Qi[Gr]=Gr==="className"?rs(Qi[Gr],Kc[Gr]):Gr==="style"?Xe(Xe({},Qi[Gr]),Kc[Gr]):Kc[Gr]}return ur.className&&(Qi.className=rs(Qi.className,ur.className)),Qi}(N,I,OT(I,Fs,ae)||Uo),z=M.as||Us,W={};for(var oe in M)M[oe]===void 0||oe[0]==="$"||oe==="as"||oe==="theme"||(oe==="forwardedAs"?W.as=M.forwardedAs:$n&&!$n(oe,z)||(W[oe]=M[oe]));var Te=function(nn,ur){var rn=rm(),On=nn.generateAndInjectStyles(ur,rn.styleSheet,rn.stylis);return On}(F,M),qr=rs(cr,Dn);return Te&&(qr+=" "+Te),M.className&&(qr+=" "+M.className),W[xp(z)&&!VT.has(z)?"class":"className"]=qr,W.ref=C,T.createElement(z,W)}(v,E,S)}y.displayName=h;var v=ge.forwardRef(y);return v.attrs=g,v.componentStyle=p,v.displayName=h,v.shouldForwardProp=m,v.foldedComponentIds=r?rs(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=f,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(S){for(var k=[],I=1;I<arguments.length;I++)k[I-1]=arguments[I];for(var C=0,N=k;C<N.length;C++)tm(S,N[C],!0);return S}({},i.defaultProps,E):E}}),ty(v,function(){return".".concat(v.styledComponentId)}),s&&WT(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Kw(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Yw=function(e){return Object.assign(e,{isCss:!0})};function JT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ws(e)||Ml(e)){var r=e;return Yw(yi(Kw(Lh,jl([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?yi(i):Yw(yi(Kw(i,t)))}function im(e,t,n){if(n===void 0&&(n=Uo),!t)throw ki(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,JT.apply(void 0,jl([i],s,!1)))};return r.attrs=function(i){return im(e,t,Xe(Xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return im(e,t,Xe(Xe({},n),i))},r}var ZT=function(e){return im(hj,e)},x=ZT;VT.forEach(function(e){x[e]=ZT(e)});var fj=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=XT(t),Pd.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(em(yi(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Pd.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function pj(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=JT.apply(void 0,jl([e],t,!1)),i="sc-global-".concat(FT(JSON.stringify(r))),s=new fj(r,i),o=function(l){var u=rm(),d=ge.useContext(Fo),h=ge.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,d,u.stylis),ge.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,d,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,d,u.stylis]),null};function a(l,u,d,h,f){if(s.isStatic)s.renderStyles(l,jN,d,f);else{var g=Xe(Xe({},u),{theme:OT(u,h,o.defaultProps)});s.renderStyles(l,g,d,f)}}return ge.memo(o)}const gj=x.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  font-weight: 200;
`,mj=x.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.red.transparent};
  color: ${({theme:e})=>e.colors.red.main};
  border-radius: 100%;

  svg {
    width: 30px;
    height: 30px;
  }
`,yj=x.h3`
  font-weight: 300;
  color: #fff;
  font-size: 1.5rem;
`,vj=x.span`
  max-width: 40%;
  line-height: 1.4rem;
  text-align: center;
  font-size: 1rem;
  text-align: left;
  font-family: monospace;
  color: ${({theme:e})=>e.colors.red.text};
  background: ${({theme:e})=>e.colors.red.transparent};
  padding: 16px;
  border-radius: 10px;
`;var eS={exports:{}},wj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_j=wj,xj=_j;function tS(){}function nS(){}nS.resetWarningCache=tS;var Ej=function(){function e(r,i,s,o,a,l){if(l!==xj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:nS,resetWarningCache:tS};return n.PropTypes=n,n};eS.exports=Ej();var Ij=eS.exports;const Ki=t0(Ij);var Tj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},Sj=Object.defineProperty,kj=Object.defineProperties,Cj=Object.getOwnPropertyDescriptors,bd=Object.getOwnPropertySymbols,rS=Object.prototype.hasOwnProperty,iS=Object.prototype.propertyIsEnumerable,Xw=(e,t,n)=>t in e?Sj(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jw=(e,t)=>{for(var n in t||(t={}))rS.call(t,n)&&Xw(e,n,t[n]);if(bd)for(var n of bd(t))iS.call(t,n)&&Xw(e,n,t[n]);return e},Aj=(e,t)=>kj(e,Cj(t)),Rj=(e,t)=>{var n={};for(var r in e)rS.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&bd)for(var r of bd(e))t.indexOf(r)<0&&iS.call(e,r)&&(n[r]=e[r]);return n},$=(e,t,n)=>{const r=T.forwardRef((i,s)=>{var o=i,{color:a="currentColor",size:l=24,stroke:u=2,children:d}=o,h=Rj(o,["color","size","stroke","children"]);return T.createElement("svg",Jw(Aj(Jw({ref:s},Tj),{width:l,height:l,stroke:a,strokeWidth:u,className:`tabler-icon tabler-icon-${e}`}),h),[...n.map(([f,g])=>T.createElement(f,g)),...d||[]])});return r.propTypes={color:Ki.string,size:Ki.oneOfType([Ki.string,Ki.number]),stroke:Ki.oneOfType([Ki.string,Ki.number])},r.displayName=`${t}`,r},Pj=$("arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]]),sS=$("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]),bj=$("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]]),Nj=$("arrow-up-left","IconArrowUpLeft",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M16 7l-9 0l0 9",key:"svg-1"}]]),jj=$("arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]]),oS=$("arrows-shuffle","IconArrowsShuffle",[["path",{d:"M18 4l3 3l-3 3",key:"svg-0"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-1"}],["path",{d:"M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5",key:"svg-2"}],["path",{d:"M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3",key:"svg-3"}]]),Mj=$("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]]),Lj=$("brand-safari","IconBrandSafari",[["path",{d:"M8 16l2 -6l6 -2l-2 6l-6 2",key:"svg-0"}],["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-1"}]]),Dj=$("bug","IconBug",[["path",{d:"M9 9v-1a3 3 0 0 1 6 0v1",key:"svg-0"}],["path",{d:"M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3",key:"svg-1"}],["path",{d:"M3 13l4 0",key:"svg-2"}],["path",{d:"M17 13l4 0",key:"svg-3"}],["path",{d:"M12 20l0 -6",key:"svg-4"}],["path",{d:"M4 19l3.35 -2",key:"svg-5"}],["path",{d:"M20 19l-3.35 -2",key:"svg-6"}],["path",{d:"M4 7l3.75 2.4",key:"svg-7"}],["path",{d:"M20 7l-3.75 2.4",key:"svg-8"}]]),$j=$("camera","IconCamera",[["path",{d:"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2",key:"svg-0"}],["path",{d:"M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]),Oj=$("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),Vj=$("checks","IconChecks",[["path",{d:"M7 12l5 5l10 -10",key:"svg-0"}],["path",{d:"M2 12l5 5m5 -5l5 -5",key:"svg-1"}]]),Uj=$("circle-check-filled","IconCircleCheckFilled",[["path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),Fj=$("circle-plus","IconCirclePlus",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M9 12h6",key:"svg-1"}],["path",{d:"M12 9v6",key:"svg-2"}]]),zj=$("circle-x-filled","IconCircleXFilled",[["path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),Bj=$("circle","IconCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}]]),Hj=$("clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]]),Wj=$("copy","IconCopy",[["path",{d:"M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",key:"svg-1"}]]),qj=$("disc","IconDisc",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M7 12a5 5 0 0 1 5 -5",key:"svg-2"}],["path",{d:"M12 17a5 5 0 0 0 5 -5",key:"svg-3"}]]),ry=$("discount-check-filled","IconDiscountCheckFilled",[["path",{d:"M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),Gj=$("dots-vertical","IconDotsVertical",[["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),iy=$("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),aS=$("edit-circle","IconEditCircle",[["path",{d:"M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z",key:"svg-0"}],["path",{d:"M16 5l3 3",key:"svg-1"}],["path",{d:"M9 7.07a7 7 0 0 0 1 13.93a7 7 0 0 0 6.929 -6",key:"svg-2"}]]),Qj=$("exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]]),Kj=$("eye-closed","IconEyeClosed",[["path",{d:"M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4",key:"svg-0"}],["path",{d:"M3 15l2.5 -3.8",key:"svg-1"}],["path",{d:"M21 14.976l-2.492 -3.776",key:"svg-2"}],["path",{d:"M9 17l.5 -4",key:"svg-3"}],["path",{d:"M15 17l-.5 -4",key:"svg-4"}]]),Yj=$("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]]),Xj=$("files","IconFiles",[["path",{d:"M15 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2",key:"svg-2"}]]),Nd=$("headphones","IconHeadphones",[["path",{d:"M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z",key:"svg-1"}],["path",{d:"M4 15v-3a8 8 0 0 1 16 0v3",key:"svg-2"}]]),Jj=$("heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]),Zj=$("heart-filled","IconHeartFilled",[["path",{d:"M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),sy=$("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]]),oy=$("history","IconHistory",[["path",{d:"M12 8l0 4l2 2",key:"svg-0"}],["path",{d:"M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5",key:"svg-1"}]]),ay=$("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]),e4=$("link","IconLink",[["path",{d:"M9 15l6 -6",key:"svg-0"}],["path",{d:"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464",key:"svg-1"}],["path",{d:"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463",key:"svg-2"}]]),t4=$("loader-2","IconLoader2",[["path",{d:"M12 3a9 9 0 1 0 9 9",key:"svg-0"}]]),lS=$("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]]),n4=$("logout","IconLogout",[["path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M9 12h12l-3 -3",key:"svg-1"}],["path",{d:"M18 15l3 -3",key:"svg-2"}]]),r4=$("message-2","IconMessage2",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z",key:"svg-2"}]]),Zw=$("message-plus","IconMessagePlus",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5",key:"svg-2"}],["path",{d:"M16 19h6",key:"svg-3"}],["path",{d:"M19 16v6",key:"svg-4"}]]),Ip=$("message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]]),cS=$("microphone-2","IconMicrophone2",[["path",{d:"M15 12.9a5 5 0 1 0 -3.902 -3.9",key:"svg-0"}],["path",{d:"M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z",key:"svg-1"}]]),i4=$("microphone","IconMicrophone",[["path",{d:"M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z",key:"svg-0"}],["path",{d:"M5 10a7 7 0 0 0 14 0",key:"svg-1"}],["path",{d:"M8 21l8 0",key:"svg-2"}],["path",{d:"M12 17l0 4",key:"svg-3"}]]),s4=$("moon","IconMoon",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}]]),o4=$("music-plus","IconMusicPlus",[["path",{d:"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M9 17v-13h10v8",key:"svg-1"}],["path",{d:"M9 8h10",key:"svg-2"}],["path",{d:"M16 19h6",key:"svg-3"}],["path",{d:"M19 16v6",key:"svg-4"}]]),us=$("music","IconMusic",[["path",{d:"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}],["path",{d:"M9 17v-13h10v13",key:"svg-2"}],["path",{d:"M9 8h10",key:"svg-3"}]]),a4=$("password","IconPassword",[["path",{d:"M12 10v4",key:"svg-0"}],["path",{d:"M10 13l4 -2",key:"svg-1"}],["path",{d:"M10 11l4 2",key:"svg-2"}],["path",{d:"M5 10v4",key:"svg-3"}],["path",{d:"M3 13l4 -2",key:"svg-4"}],["path",{d:"M3 11l4 2",key:"svg-5"}],["path",{d:"M19 10v4",key:"svg-6"}],["path",{d:"M17 13l4 -2",key:"svg-7"}],["path",{d:"M17 11l4 2",key:"svg-8"}]]),l4=$("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]]),uS=$("player-pause-filled","IconPlayerPauseFilled",[["path",{d:"M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}],["path",{d:"M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",fill:"currentColor",key:"svg-1",strokeWidth:"0"}]]),ly=$("player-play-filled","IconPlayerPlayFilled",[["path",{d:"M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),e_=$("player-track-next-filled","IconPlayerTrackNextFilled",[["path",{d:"M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}],["path",{d:"M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z",fill:"currentColor",key:"svg-1",strokeWidth:"0"}]]),t_=$("player-track-prev-filled","IconPlayerTrackPrevFilled",[["path",{d:"M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}],["path",{d:"M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z",fill:"currentColor",key:"svg-1",strokeWidth:"0"}]]),c4=$("playlist-add","IconPlaylistAdd",[["path",{d:"M19 8h-14",key:"svg-0"}],["path",{d:"M5 12h9",key:"svg-1"}],["path",{d:"M11 16h-6",key:"svg-2"}],["path",{d:"M15 16h6",key:"svg-3"}],["path",{d:"M18 13v6",key:"svg-4"}]]),dS=$("playlist","IconPlaylist",[["path",{d:"M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M17 17v-13h4",key:"svg-1"}],["path",{d:"M13 5h-10",key:"svg-2"}],["path",{d:"M3 9l10 0",key:"svg-3"}],["path",{d:"M9 13h-6",key:"svg-4"}]]),u4=$("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]),hS=$("quote","IconQuote",[["path",{d:"M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5",key:"svg-0"}],["path",{d:"M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5",key:"svg-1"}]]),d4=$("repeat-once","IconRepeatOnce",[["path",{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3",key:"svg-0"}],["path",{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3",key:"svg-1"}],["path",{d:"M11 11l1 -1v4",key:"svg-2"}]]),h4=$("repeat","IconRepeat",[["path",{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3",key:"svg-0"}],["path",{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3",key:"svg-1"}]]),br=$("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]),f4=$("settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]),vc=$("share-3","IconShare3",[["path",{d:"M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z",key:"svg-0"}]]),fS=$("square-rounded-plus","IconSquareRoundedPlus",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",key:"svg-0"}],["path",{d:"M15 12h-6",key:"svg-1"}],["path",{d:"M12 9v6",key:"svg-2"}]]),pS=$("sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]]),p4=$("trending-up","IconTrendingUp",[["path",{d:"M3 17l6 -6l4 4l8 -8",key:"svg-0"}],["path",{d:"M14 7l7 0l0 7",key:"svg-1"}]]),gS=$("user-plus","IconUserPlus",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M16 19h6",key:"svg-1"}],["path",{d:"M19 16v6",key:"svg-2"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4",key:"svg-3"}]]),mS=$("user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]),g4=$("users","IconUsers",[["path",{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"svg-2"}],["path",{d:"M21 21v-2a4 4 0 0 0 -3 -3.85",key:"svg-3"}]]),cy=$("vinyl","IconVinyl",[["path",{d:"M16 3.937a9 9 0 1 0 5 8.063",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M20 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M20 4l-3.5 10l-2.5 2",key:"svg-3"}]]),m4=$("volume","IconVolume",[["path",{d:"M15 8a5 5 0 0 1 0 8",key:"svg-0"}],["path",{d:"M17.7 5a9 9 0 0 1 0 14",key:"svg-1"}],["path",{d:"M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",key:"svg-2"}]]),yS=$("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);class vS extends ge.Component{constructor(n){super(n);Ge(this,"state",{error:null});this.state={error:null}}static getDerivedStateFromError(n){return{error:n}}render(){return this.state.error?c.jsxs(gj,{children:[c.jsx(mj,{children:c.jsx(Dj,{})}),c.jsx(yj,{children:"Something went wrong."}),c.jsx(vj,{children:this.state.error.message})]}):this.props.children}}const y4=e=>e!=null;function uy(e,t){for(const n in e)t(e[n],n)}function Bt(e,t){e.forEach(t)}function ze(e,t,n){if(!e)throw Error(`${n?n+": ":""}${t}`)}function Nr({node:e=[],from:t,source:n,parent:r=t||n,to:i,target:s,child:o=i||s,scope:a={},meta:l={},family:u={type:"regular"},regional:d}={}){const h=Ba(r),f=Ba(u.links),g=Ba(u.owners),m=[];Bt(e,_=>_&&yr(m,_));const w={id:P4(),seq:m,next:Ba(o),meta:l,scope:a,family:{type:u.type||"crosslink",links:f,owners:g}};return Bt(f,_=>yr(Dh(_),w)),Bt(g,_=>yr($h(_),w)),Bt(h,_=>yr(_.next,w)),d&&Eo&&Vh(al(Eo),[w]),w}function zo(e,t,n){let r,i=Wn,s=null,o=pe;if(e.target&&(t=e.params,n=e.defer,r=e.meta,i="page"in e?e.page:i,e.stack&&(s=e.stack),o=co(e)||o,e=e.target),o&&pe&&o!==pe&&(pe=null),Array.isArray(e))for(let m=0;m<e.length;m++)Yi("pure",i,Rn(e[m]),s,t[m],o,r);else Yi("pure",i,Rn(e),s,t,o,r);if(n&&!gu)return;const a={isRoot:gu,currentPage:Wn,scope:pe,isWatch:Wu,isPure:qu};let l,u,d,h,f,g;gu=0;e:for(;h=D4();){const{idx:m,stack:w,type:_}=h;d=w.node,Wn=f=w.page,pe=co(w),f?g=f.reg:pe&&(g=pe.reg);const p=!!f,y=!!pe,v={fail:0,scope:d.scope};l=u=0;for(let E=m;E<d.seq.length&&!l;E++){const S=d.seq[E];if(S.order){const{priority:k,barrierID:I}=S.order,C=I?f?`${f.fullID}_${I}`:I:0;if(E!==m||_!==k){I?Sp.has(C)||(Sp.add(C),am(E,w,k,I)):am(E,w,k,0);continue e}I&&Sp.delete(C)}switch(S.type){case"mov":{const I=S.data;let C;switch(I.from){case"stack":C=al(w);break;case"a":case"b":C=w[I.from];break;case"value":C=I.store;break;case"store":if(g&&!g[I.store.id])if(p){const N=CS(f,I.store.id);w.page=f=N,N?g=N.reg:y?(Wo(pe,I.store,0,1,I.softRead),g=pe.reg):g=void 0}else y&&Wo(pe,I.store,0,1,I.softRead);C=ll(g&&g[I.store.id]||I.store)}switch(I.to){case"stack":w.value=C;break;case"a":case"b":w[I.to]=C;break;case"store":$4(f,pe,I.target,0).current=C}break}case"compute":const k=S.data;if(k.fn){Wu=d.meta.op==="watch",qu=k.pure;const I=k.safe?(0,k.fn)(al(w),v.scope,w):V4(v,k.fn,w);k.filter?u=!I:w.value=I,Wu=a.isWatch,qu=a.isPure}}l=v.fail||u}if(!l){const E=al(w),S=co(w);if(Bt(d.next,k=>{Yi("child",f,k,w,E,S)}),S){d.meta.needFxCounter&&Yi("child",f,S.fxCount,w,E,S),d.meta.storeChange&&Yi("child",f,S.storeChange,w,E,S),d.meta.warnSerialize&&Yi("child",f,S.warnSerializeNode,w,E,S);const k=S.additionalLinks[d.id];k&&Bt(k,I=>{Yi("child",f,I,w,E,S)})}}}gu=a.isRoot,Wn=a.currentPage,pe=co(a)}function wS(e,t="combine"){let n=t+"(",r="",i=0;return uy(e,s=>{i<25&&(s!=null&&(n+=r,n+=Ci(s)?_S(s).fullName:s.toString()),i+=1,r=", ")}),n+")"}function v4(e,t){let n,r;const i=e;if(t){const s=_S(t);e.length===0?(n=s.path,r=s.fullName):(n=s.path.concat([e]),r=s.fullName.length===0?e:s.fullName+"/"+e)}else n=e.length===0?[]:[e],r=e;return{shortName:i,fullName:r,path:n}}function $i(e,t){if(!t||!t.name&&!t.named&&!t.loc)return e;let n=`[${e}]`;const r=t.named||t.name;r&&(n+=` unit '${r}'`);const i=t.loc;return!r&&i&&(n+=` (${i.file}:${i.line}:${i.column})`),n}function dy(e,t){const n=t?e:e[0];TS(n);let r=n.or;const i=n.and;if(i){const s=t?i:i[0];if(bn(s)&&"and"in s){const o=dy(i,t);e=o[0],r={...r,...o[1]}}else e=i}return[e,r]}function sm(e){const t=()=>e();return t.unsubscribe=()=>e(),t}function Sn(e,...t){const n=fy();if(n){const r=n.handlers[e];if(r)return r(n,...t)}}function V(e,t){const n=qo({or:t,and:typeof e=="string"?{name:e}:e}),r=$i("event",n),i=(a,...l)=>(ze(!vi(i,"derived"),"call of derived event is not supported, use createEvent instead",r),ze(!qu,"unit call from pure function is not supported, use operators like sample instead",r),Wn?((u,d,h,f)=>{const g=Wn;let m=null;if(d)for(m=Wn;m&&m.template!==d;)m=Bo(m);o_(m);const w=u.create(h,f);return o_(g),w})(i,s,a,l):i.create(a,l)),s=fy(),o=Object.assign(i,{graphite:Nr({meta:PS(n.actualOp||"event",i,n),regional:1}),create:a=>(zo({target:i,params:a,scope:pe}),a),watch:a=>RS(i,a),map:a=>kp(i,"map",a,[vr()]),filter:a=>kp(i,"filter",a.fn?a:a.fn,[vr(Uh,1)]),filterMap:a=>kp(i,"filterMap",a,[vr(),Tr(l=>!un(l),1)]),prepend(a){ze(i.targetable,".prepend of derived event is not supported, call source event instead",r);const l=V("* → "+i.shortName,{parent:Bo(i)});return Sn("eventPrepend",Rn(l)),ua(l,i,[vr()],"prepend",a),U4(i,l),l}});return n!=null&&n.domain&&n.domain.hooks.event(o),mr(o,"id",o.graphite.id),IS(o.graphite),o}function n_(e,t,n,r,i){return Md(n,`${i} ${t}`,"first argument"),ze(Ht(r),"second argument should be a function",i),Ll(!vi(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`,i),Bt(Array.isArray(n)?n:[n],s=>{e.off(s),jd(e).set(s,AS(bS(s,e,"on",M4,r)))}),e}function ee(e,t){const n=qo(t),r=Ho(e),i=$i("store",n),s=V({named:"updates",derived:1});Sn("storeBase",r);const o=r.id,a="skipVoid"in n,l=a&&!n.skipVoid;Ll(!(a&&n.skipVoid),"{skipVoid: true}","updateFilter",i);const u={subscribers:new Map,updates:s,defaultState:e,stateRef:r,getState(){let p,y=r;if(Wn){let v=Wn;for(;v&&!v.reg[o];)v=Bo(v);v&&(p=v)}return!p&&pe&&(Wo(pe,r,1),p=pe),p&&(y=p.reg[o]),ll(y)},setState:p=>zo({target:u,params:p,defer:1,scope:pe}),reset:(...p)=>(ze(u.targetable,".reset of derived store is not supported",i),Bt(p,y=>n_(u,".reset",y,()=>u.defaultState,i)),u),on:(p,y)=>(ze(u.targetable,".on of derived store is not supported",i),n_(u,".on",p,y,i)),off(p){const y=jd(u).get(p);return y&&(y(),jd(u).delete(p)),u},map(p,y){let v,E;bn(p)&&(v=p,p=p.fn);const S=u.getState(),k=un(S);(!k||k&&l)&&(E=p(S));const I=ee(E,{name:`${u.shortName} → *`,derived:1,...y,and:v}),C=bS(u,I,"map",Uh,p);return om(Xn(I),{type:"map",fn:p,from:r}),Xn(I).noInit=1,Sn("storeMap",r,C),I},watch(p,y){if(Ll(!y,"watch second argument","sample",i),!y||!Ci(p)){const v=RS(u,p);return Sn("storeWatch",r,p)||p(u.getState()),v}return ze(Ht(y),"second argument should be a function",i),p.watch(v=>y(u.getState(),v))}},d=PS("store",u,n),h=u.defaultConfig.updateFilter;u.graphite=Nr({scope:{state:r,fn:h},node:[Tr((p,y,v)=>(v.scope&&!v.scope.reg[r.id]&&(v.b=1),p)),ds(r),Tr((p,y,{a:v,b:E})=>{const S=un(p);return S&&!a&&console.error(`${i}: ${Gu}`),(S&&l||!S)&&(p!==v||E)},1),h&&vr(SS,1),an({from:"stack",target:r})],child:s,meta:{...d,defaultState:e},regional:1}),mr(u,"id",u.graphite.id),mr(u,"rootStateRefId",o);const f=vi(u,"serialize"),g=vi(u,"derived"),m=f==="ignore",w=vi(u,"sid");w&&(mr(u,"storeChange",1),r.sid=w),w||m||g||mr(u,"warnSerialize",1);const _=un(e);return ze(g||!_||_&&l,Gu,i),g&&_&&!a&&console.error(`${i}: ${Gu}`),Vh(u,[s]),n!=null&&n.domain&&n.domain.hooks.store(u),g||(u.reinit=V({named:"reinit"}),u.reset(u.reinit)),r.meta=u.graphite.meta,IS(u.graphite),u}function w4(...e){let t,n,r;[e,r]=dy(e);const i=$i("combine",r),s=e[e.length-1],o=!Pn(s)&&bn(s),a=o&&s,l=o?e[e.length-2]:s;let u,d,h;if(Ht(l)?(n=e.slice(0,o?-2:-1),t=l):n=e,n.length===1){const f=n[0];Pn(f)||(u=f,d=1)}if(!d&&(u=n,t)){h=1;const f=t;t=g=>f(...g)}return ze(bn(u),`${i}: shape should be an object`),F4(Array.isArray(u),!h,u,r,t,a)}function _4(){const e={};return e.req=new Promise((t,n)=>{e.rs=t,e.rj=n}),e.req.catch(()=>{}),e}function je(e,t={}){const n=qo(Ht(e)?{handler:e}:e,t),r=$i("effect",n),i=V(Ht(e)?{handler:e}:e,{...t,actualOp:"effect"}),s=Rn(i);mr(s,"op",i.kind="effect"),i.use=m=>(ze(Ht(m),".use argument should be a function",r),h.scope.handler=m,i),i.use.getCurrent=()=>h.scope.handler;const o=i.finally=V({named:"finally",derived:1}),a=i.done=o.filterMap({named:"done",fn({status:m,params:w,result:_}){if(m==="done")return{params:w,result:_}}}),l=i.fail=o.filterMap({named:"fail",fn({status:m,params:w,error:_}){if(m==="fail")return{params:w,error:_}}}),u=i.doneData=a.map({named:"doneData",fn:({result:m})=>m}),d=i.failData=l.map({named:"failData",fn:({error:m})=>m}),h=Nr({scope:{handler:i.defaultConfig.handler||(()=>ze(0,`no handler used in ${i.compositeName.fullName}`))},node:[Tr((m,w,_)=>{let p=w.handler;const y=co(_);if(y){const v=y.handlers.unitMap.get(i)||y.handlers.sidMap[i.sid];v&&(p=v)}return m.handler=p,m},0,1),Tr((m,w,_)=>{if(w.runnerFn&&!w.runnerFn(m,null,_))return;const{params:p,req:y,handler:v,args:E=[p]}=m,S=l_(p,y,1,o,_),k=l_(p,y,0,o,_),[I,C]=z4(v,k,E);I&&(bn(C)&&Ht(C.then)?C.then(S,k):S(C))},0,1)],meta:{op:"fx",fx:"runner"}});s.scope.runner=h,yr(s.seq,Tr((m,{runner:w},_)=>{const p=Bo(_)?{params:m,req:{rs(y){},rj(y){}}}:m;return _.meta||(_.meta={fxID:b4()}),zo({target:w,params:p,defer:1,scope:co(_),meta:_.meta}),p.params})),i.create=m=>{const w=_4(),_={params:m,req:w};if(pe&&!Wu){const p=pe;w.req.finally(()=>{cm(p)}).catch(()=>{})}return zo({target:i,params:_,scope:pe}),w.req};const f=i.inFlight=ee(0,{serialize:"ignore",named:(vi(i,"name")||i.graphite.id)+".inFlight"}).on(i,m=>m+1).on(o,m=>m-1).map({fn:m=>m,named:"inFlight"});mr(o,"needFxCounter","dec"),mr(i,"needFxCounter",1);const g=i.pending=f.map({fn:m=>m>0,named:"pending"});return Vh(i,[o,a,l,u,d,g,f]),n!=null&&n.domain&&n.domain.hooks.effect(i),i}function x4(e,t){const n=$i("merge",t);Md(e,n,"first argument");const r=V({name:wS(e,"merge"),derived:1,and:t});return ua(e,r,[],"merge"),r}function E4(e,t){let n=0;return Bt(H4,r=>{r in e&&(ze(e[r]!=null,NS(t,r)),n=1)}),n}function j(...e){let t,n,r,i,[[s,o,a],l]=dy(e),u=1;const d=$i("sample",l);return un(o)&&bn(s)&&E4(s,d)&&(o=s.clock,a=s.fn,"batch"in s?u=s.batch:(Ll(!("greedy"in s),"greedy in sample","batch",d),u=!s.greedy),i=s.filter,t=s.target,n=s.name,r=s.sid,s=s.source),W4("sample",o,s,i,t,a,n,l,u,1,0,r)}function I4(e,{scope:t,safe:n}={}){ze(t||pe||n,"scopeBind: scope not found");const r=t||pe;return i=>{function s(){cm(l)}let o,a=0;const l=pe;cm(r);try{o=e(i)}catch(u){o=u,a=1}if(s(),a)throw o;return o instanceof Promise&&o.then(s,s),o}}function hy({unit:e,fn:t,scope:n,batch:r}){const i=[Hu.run({fn:o=>t(o)})];r&&i.unshift(Hu.compute({priority:"sampler",batch:1})),Pn(e)&&i.unshift(Hu.mov({store:e.stateRef,to:"stack"}));const s=Array.isArray(e)?e:[e];if(n){const o=[],a=n.additionalLinks;return s.forEach(l=>{const u=a[l.graphite.id]||[];a[l.graphite.id]=u;const d=Nr({node:T4(i,l),meta:{watchOp:l.kind}});u.push(d),o.push(()=>{const h=u.indexOf(d);h!==-1&&u.splice(h,1),dm(d)})}),sm(()=>{o.forEach(l=>l())})}{const o=Nr({node:i,parent:s,family:{owners:s}});return sm(()=>{dm(o)})}}function T4(e,t){return Pn(t)?[Hu.mov({store:t.stateRef,to:"stack"}),...e]:e}const S4=typeof Symbol<"u"&&Symbol.observable||"@@observable",Rn=e=>e.graphite||e,Dh=e=>e.family.owners,$h=e=>e.family.links,Xn=e=>e.stateRef,al=e=>e.value,jd=e=>e.subscribers,Bo=e=>e.parent,co=e=>e.scope,vi=(e,t)=>Rn(e).meta[t],mr=(e,t,n)=>Rn(e).meta[t]=n,_S=e=>e.compositeName,Ci=e=>(Ht(e)||bn(e))&&"kind"in e,wc=e=>t=>Ci(t)&&t.kind===e,Pn=wc("store"),k4=wc("event"),r_=wc("effect"),C4=e=>Ci(e)&&!!e.targetable,xS=wc("domain"),A4=wc("scope");var pu={__proto__:null,unit:Ci,store:Pn,event:k4,effect:r_,targetable:C4,domain:xS,scope:A4,attached:e=>r_(e)&&vi(e,"attached")==1};const Tp=(e,t)=>{const n=e.indexOf(t);n!==-1&&e.splice(n,1)},yr=(e,t)=>e.push(t),Ll=(e,t,n,r)=>!e&&console.error(`${r?r+": ":""}${t} is deprecated${n?`, use ${n} instead`:""}`),Oh=()=>{let e=0;return()=>""+ ++e},R4=Oh(),ES=Oh(),P4=Oh(),b4=Oh();let Eo=null;const IS=e=>{},fy=()=>Eo,N4=e=>(e&&Eo&&Eo.sidRoot&&(e=`${Eo.sidRoot}|${e}`),e),Vh=(e,t)=>{const n=Rn(e);Bt(t,r=>{const i=Rn(r);n.family.type!=="domain"&&(i.family.type="crosslink"),yr(Dh(i),n),yr($h(n),i)})},Ba=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(Rn),bn=e=>typeof e=="object"&&e!==null,Ht=e=>typeof e=="function",un=e=>e===void 0,TS=e=>ze(bn(e)||Ht(e),"expect first argument be an object"),i_=(e,t,n,r)=>ze(!(!bn(e)&&!Ht(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${n} to be a unit (store, event or effect)${r}`),Md=(e,t,n)=>{Array.isArray(e)?Bt(e,(r,i)=>i_(r,t,`${i} item of ${n}`,"")):i_(e,t,n," or array of units")},j4=(e,t,n="target")=>Bt(Ba(t),r=>ze(!vi(r,"derived"),`${e}: derived unit in "${n}" is not supported, use createStore/createEvent instead"`)),SS=(e,{fn:t},{a:n})=>t(e,n),M4=(e,{fn:t},{a:n})=>t(n,e),Uh=(e,{fn:t})=>t(e),kS=(e,t,n,r)=>{const i={id:ES(),type:e,data:t};return n&&(i.order={priority:n},r&&(i.order.barrierID=++L4)),i};let L4=0;const an=({from:e="store",store:t,target:n,to:r=n?"store":"stack",batch:i,priority:s})=>kS("mov",{from:e,store:t,to:r,target:n},s,i),Dl=({fn:e,batch:t,priority:n,safe:r=0,filter:i=0,pure:s=0})=>kS("compute",{fn:e,safe:r,filter:i,pure:s},n,t),py=({fn:e})=>Dl({fn:e,priority:"effect"}),Tr=(e,t,n)=>Dl({fn:e,safe:1,filter:t,priority:n&&"effect"}),ds=(e,t,n)=>an({store:e,to:t?"stack":"a",priority:n&&"sampler",batch:1}),vr=(e=Uh,t)=>Dl({fn:e,pure:1,filter:t}),Hu={mov:an,compute:Dl,filter:({fn:e,pure:t})=>Dl({fn:e,filter:1,pure:t}),run:py},Ho=e=>({id:ES(),current:e,initial:e}),ll=({current:e})=>e,om=(e,t)=>{e.before||(e.before=[]),yr(e.before,t)};let uo=null;const gy=(e,t)=>{if(!e)return t;if(!t)return e;let n;return(e.v.type===t.v.type&&e.v.id>t.v.id||lm(e.v.type)>lm(t.v.type))&&(n=e,e=t,t=n),n=gy(e.r,t),e.r=e.l,e.l=n,e},my=[];let s_=0;for(;s_<6;)yr(my,{first:null,last:null,size:0}),s_+=1;const D4=()=>{for(let e=0;e<6;e++){const t=my[e];if(t.size>0){if(e===3||e===4){t.size-=1;const r=uo.v;return uo=gy(uo.l,uo.r),r}t.size===1&&(t.last=null);const n=t.first;return t.first=n.r,t.size-=1,n.v}}},Yi=(e,t,n,r,i,s,o)=>am(0,{a:null,b:null,node:n,parent:r,value:i,page:t,scope:s,meta:o},e,0),am=(e,t,n,r)=>{const i=lm(n),s=my[i],o={v:{idx:e,stack:t,type:n,id:r},l:null,r:null};i===3||i===4?uo=gy(uo,o):(s.size===0?s.first=o:s.last.r=o,s.last=o),s.size+=1},lm=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},Sp=new Set;let pe,gu=1,Wu=0,qu=0,Wn=null;const cm=e=>{pe=e},o_=e=>{Wn=e},CS=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=e.parent;if(e)return e}return null},$4=(e,t,n,r)=>{const i=CS(e,n.id);return i?i.reg[n.id]:t?(Wo(t,n,r),t.reg[n.id]):n},O4=e=>e,Wo=(e,t,n,r,i)=>{const s=e.reg;if(s[t.id])return;const o=t.sid,a={id:t.id,current:t.initial,meta:t.meta};if(a.id in e.values.idMap)a.current=e.values.idMap[a.id];else if(o&&o in e.values.sidMap&&!(o in e.sidIdMap)){var l;const u=t==null||(l=t.meta)===null||l===void 0?void 0:l.serialize;a.current=(e.fromSerialize&&u!=="ignore"&&(u==null?void 0:u.read)||O4)(e.values.sidMap[o])}else if(t.before&&!i){let u=0;const d=n||!t.noInit||r;Bt(t.before,h=>{switch(h.type){case"map":{const f=h.from;if((f||h.fn)&&(f&&Wo(e,f,n,r),d)){const g=f&&s[f.id].current;a.current=h.fn?h.fn(g):g}break}case"field":Wo(e,h.from,n,r),u||(u=1,a.current=Array.isArray(a.current)?[...a.current]:{...a.current}),d&&(a.current[h.field]=s[s[h.from.id].id].current)}})}o&&(e.sidIdMap[o]=t.id),s[t.id]=a},V4=(e,t,n)=>{try{return t(al(n),e.scope,n)}catch(r){console.error(r),e.fail=1,e.failReason=r}},qo=(e,t={})=>(bn(e)&&(qo(e.or,t),uy(e,(n,r)=>{un(n)||r==="or"||r==="and"||(t[r]=n)}),qo(e.and,t)),t),a_=(e,t)=>{Tp(e.next,t),Tp(Dh(e),t),Tp($h(e),t)},um=(e,t,n)=>{let r;e.next.length=0,e.seq.length=0,e.scope=null;let i=$h(e);for(;r=i.pop();)a_(r,e),(t||n&&e.meta.op!=="sample"||r.family.type==="crosslink")&&um(r,t,r.meta.op!=="on"&&n);for(i=Dh(e);r=i.pop();)a_(r,e),n&&r.family.type==="crosslink"&&um(r,t,r.meta.op!=="on"&&n)},Ma=e=>e.clear(),dm=(e,{deep:t}={})=>{let n=0;if(e.ownerSet&&e.ownerSet.delete(e),Pn(e))Ma(jd(e));else if(xS(e)){n=1;const r=e.history;Ma(r.events),Ma(r.effects),Ma(r.stores),Ma(r.domains)}um(Rn(e),!!t,n)},AS=e=>sm(()=>dm(e)),ua=(e,t,n,r,i)=>Nr({node:n,parent:e,child:t,scope:{fn:i},meta:{op:r},family:{owners:[e,t],links:t},regional:1}),RS=(e,t)=>(ze(Ht(t),".watch argument should be a function"),AS(Nr({scope:{fn:t},node:[py({fn:Uh})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),U4=(e,t,n="event")=>{Bo(e)&&Bo(e).hooks[n](t)},PS=(e,t,n)=>{const r=qo(n),i=e==="domain",s=R4(),{sid:o=null,named:a=null,domain:l=null,parent:u=l}=r,d=a||r.name||(i?"":s),h=v4(d,u),f={op:t.kind=e,name:t.shortName=d,sid:t.sid=N4(o),named:a,unitId:t.id=s,serialize:r.serialize,derived:r.derived,config:r};return t.targetable=!r.derived,t.parent=u,t.compositeName=h,t.defaultConfig=r,t.getType=()=>(Ll(0,"getType","compositeName.fullName"),h.fullName),!i&&(t.subscribe=g=>(TS(g),t.watch(Ht(g)?g:m=>g.next&&g.next(m))),t[S4]=()=>t),f},kp=(e,t,n,r)=>{let i;bn(n)&&(i=n,n=n.fn);const s=V({name:`${e.shortName} → *`,derived:1,and:i});return ua(e,s,r,t,n),s},Gu="undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option",bS=(e,t,n,r,i)=>{const s=Xn(t),o=an({store:s,to:"a",priority:"read"});n==="map"&&(o.data.softRead=1);const a=[o,vr(r)];return Sn("storeOnMap",s,a,Pn(e)&&Xn(e)),ua(e,t,a,n,i)},F4=(e,t,n,r,i,s)=>{const o=$i("combine",r),a=e?p=>[...p]:p=>({...p}),l=e?[]:{},u=a(l),d=Ho(u),h=Ho(1);d.type=e?"list":"shape",d.noInit=1,Sn("combineBase",d,h);const f=ee(u,{name:wS(n),derived:1,...s,and:r}),g=Xn(f);g.noInit=1,mr(f,"isCombine",1);const m=ds(d);m.order={priority:"barrier"};const w=an({store:g,to:"b",priority:"read"});w.data.softRead=1;const _=[Tr((p,y,v)=>(v.scope&&!v.scope.reg[d.id]&&(v.c=1),p)),m,an({store:h,to:"b"}),Tr((p,{key:y},v)=>{if(v.c||p!==v.a[y])return t&&v.b&&(v.a=a(v.a)),v.a[y]=p,1},1),an({from:"a",target:d}),an({from:"value",store:0,target:h}),an({from:"value",store:1,target:h,priority:"barrier",batch:1}),ds(d,1,1),i&&vr(),w];if(uy(n,(p,y)=>{if(!Pn(p))return ze(!Ci(p)&&!un(p),`combine expects a store in a field ${y}`,o),void(u[y]=l[y]=p);l[y]=p.defaultState,u[y]=p.getState();const v=ua(p,f,_,"combine",i);v.scope.key=y;const E=Xn(p);om(d,{type:"field",field:y,from:E}),Sn("combineField",E,v)}),f.defaultShape=n,om(g,{type:"map",from:d,fn:i}),!fy())if(i){const p=i(u);!un(p)||s&&"skipVoid"in s||console.error(`${o}: ${Gu}`),g.current=p,g.initial=p,f.defaultState=p}else f.defaultState=l;return f},z4=(e,t,n)=>{try{return[1,e(...n)]}catch(r){return t(r),[0,null]}},l_=(e,t,n,r,i)=>s=>{zo({target:[r,B4],params:[n?{status:"done",params:e,result:s}:{status:"fail",params:e,error:s},{value:s,fn:n?t.rs:t.rj}],defer:1,page:i.page,scope:i.scope,meta:i.meta})},B4=Nr({node:[py({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}}),H4=["source","clock","target"],NS=(e,t)=>e+`: ${t} should be defined`,W4=(e,t,n,r,i,s,o,a,l,u,d,h)=>{const f=$i(e,a),g=!!i;ze(!un(n)||!un(t),NS(f,"either source or clock"));let m=0;un(n)?m=1:Ci(n)||(n=w4(n)),un(t)?t=n:(Md(t,f,"clock"),Array.isArray(t)&&(t=x4(t))),m&&(n=t),a||o||(o=n.shortName);let w="none";(d||r)&&(Ci(r)?w="unit":(ze(Ht(r),"`filter` should be function or unit"),w="fn")),i?(Md(i,f,"target"),j4(f,i)):w==="none"&&u&&Pn(n)&&Pn(t)?i=ee(s?s(ll(Xn(n)),ll(Xn(t))):ll(Xn(n)),{name:o,sid:h,or:a}):(i=V({name:o,derived:1,or:a}),Sn("sampleTarget",Rn(i)));const _=Ho();let p=[];if(w==="unit"){const[E,S,k]=c_(r,i,t,_,e);k||p.push(...Cp(S)),p.push(...Cp(E))}const y=[];if(m)l&&y.push(ds(_,1,1));else{const[E,S,k]=c_(n,i,t,_,e);k||y.push(...Cp(S)),y.push(ds(E,1,l))}const v=ua(t,i,[Sn("sampleSourceLoader"),an({from:"stack",target:_}),...y,...p,ds(_),w==="fn"&&vr((E,S,{a:k})=>r(E,k),1),s&&vr(SS),Sn("sampleSourceUpward",g)],e,s);return Vh(n,[v]),Object.assign(v.meta,a,{joint:1}),i},Cp=e=>[ds(e),Tr((t,n,{a:r})=>r,1)],c_=(e,t,n,r,i)=>{const s=Pn(e),o=s?Xn(e):Ho(),a=Ho(s);return s||Nr({parent:e,node:[an({from:"stack",target:o}),an({from:"value",store:1,target:a})],family:{owners:[e,t,n],links:t},meta:{op:i},regional:1}),Sn("sampleSource",a,o,r),[o,a,s]};var q4={},jS={exports:{}},MS={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=T;function G4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Q4=typeof Object.is=="function"?Object.is:G4,K4=Go.useState,Y4=Go.useEffect,X4=Go.useLayoutEffect,J4=Go.useDebugValue;function Z4(e,t){var n=t(),r=K4({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return X4(function(){i.value=n,i.getSnapshot=t,Ap(i)&&s({inst:i})},[e,n,t]),Y4(function(){return Ap(i)&&s({inst:i}),e(function(){Ap(i)&&s({inst:i})})},[e]),J4(n),n}function Ap(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Q4(e,n)}catch{return!0}}function eM(e,t){return t()}var tM=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?eM:Z4;MS.useSyncExternalStore=Go.useSyncExternalStore!==void 0?Go.useSyncExternalStore:tM;jS.exports=MS;var LS=jS.exports;const nM=t0(LS);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh=T,rM=LS;function iM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sM=typeof Object.is=="function"?Object.is:iM,oM=rM.useSyncExternalStore,aM=Fh.useRef,lM=Fh.useEffect,cM=Fh.useMemo,uM=Fh.useDebugValue;q4.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=aM(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=cM(function(){function l(g){if(!u){if(u=!0,d=g,g=r(g),i!==void 0&&o.hasValue){var m=o.value;if(i(m,g))return h=m}return h=g}if(m=h,sM(d,g))return m;var w=r(g);return i!==void 0&&i(m,w)?m:(d=g,h=w)}var u=!1,d,h,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=oM(e,s[0],s[1]);return lM(function(){o.hasValue=!0,o.value=a},[a]),uM(a),a};function dM(e,t){return t.displayName=e,t}function DS(e,t){const n=pu.unit(e);let r={};n?r={unit:e}:"@@unitShape"in e?typeof e["@@unitShape"]=="function"?r=e["@@unitShape"]():hm("expect @@unitShape to be a function"):r=e;const i=Array.isArray(r),s=ge.useRef({stale:1,justSubscribed:0,scope:t}),[o,a,l,u,d]=ge.useMemo(()=>{s.current.stale=1;const m=Array.isArray(r)?[]:{},w=[],_=[],p=[],y=[];for(const v in r){if(!{}.hasOwnProperty.call(r,v))continue;const E=r[v];pu.unit(E)||hm(`expect useUnit ${n?"argument":`value in key "${v}"`} to be a unit`),pu.event(E)||pu.effect(E)?(m[v]=t?I4(E,{scope:t}):E,p.push(v),y.push(E)):(m[v]=null,w.push(v),_.push(E))}return[m,w,_,p,y]},[s,t,...Object.keys(r),...Object.values(r)]),h=ge.useRef({value:o,storeKeys:a,eventKeys:u,eventValues:d}),f=ge.useCallback(m=>{const w=s.current;return w.justSubscribed=1,hy({unit:l,fn:()=>{w.stale||(w.stale=1,m())},scope:t,batch:1})},[l,t,h,s]),g=ge.useCallback(()=>{const m=h.current,w=s.current;let _,p=0;const y=m.value,v=m.storeKeys,E=m.eventKeys,S=m.eventValues,k=t!==w.scope;if(w.stale||w.justSubscribed||k){p=!w.justSubscribed||k,_=i?[...o]:{...o},v.length===a.length&&E.length===u.length||(p=1);for(let I=0;I<a.length;I++){const C=pM(l[I],t),N=a[I];p||(p=v.includes(N)?y[N]!==C:1),_[N]=C}for(let I=0;I<u.length;I++){const C=d[I],N=u[I];p||(p=E.includes(N)?S[E.indexOf(N)]!==C:1)}}return p&&(m.value=_),m.storeKeys=a,m.eventKeys=u,m.eventValues=d,w.stale=0,w.justSubscribed=!p,w.scope=t,n?m.value.unit:m.value},[f,l,d,t,h,s]);return fM(f,g,g)}function $S(e,t={},n){const{open:r,close:i,set:s}=DS({open:e.open,close:e.close,set:e.set},n),o=ge.useMemo(()=>({open:r,close:i,set:s}),[e,r]),a=ge.useRef({value:null,count:0});u_(()=>(o.open(a.current.value),()=>o.close(a.current.value)),[o]),((l,u)=>{if(l===u)return 1;if(typeof l=="object"&&l!==null&&typeof u=="object"&&u!==null){const d=Object.keys(l),h=Object.keys(u);if(d.length!==h.length)return 0;for(let f=0;f<d.length;f++){const g=d[f];if(l[g]!==u[g])return 0}return 1}return 0})(a.current.value,t)||(a.current.value=t,a.current.count+=1),u_(()=>{o.set(a.current.value)},[a.current.count])}function yy(e){const t=ge.useContext(gM);return e&&!t&&hm("No scope found, consider adding <Provider> to app root"),t}function _e(e,t){return DS(e,yy(t==null?void 0:t.forceScope))}function vy(e,t={},n){return $S(e,t,yy(n==null?void 0:n.forceScope))}function OS(e,t){const n=t?e:e[0];var r;(o=>{if(!o)throw Error("expect first argument be an object")})(Io(r=n)||(o=>typeof o=="function")(r));let i=n.or;const s=n.and;if(s){const o=t?s:s[0];if(Io(o)&&"and"in o){const a=OS(s,t);e=a[0],i={...i,...a[1]}}else e=s}return[e,i]}function hM(e,t){const n=t&&Io(r=t[0])&&(r.and||r.or)?t:[{and:t}];var r;const[[i,s],o]=OS(n);let a,l={},u={},d=o;var h;return typeof i=="string"?(u={name:i},Io(h=s)&&"sid"in h||(l=s||{})):(f=>Io(f)&&("domain"in f||"defaultState"in f||"name"in f))(i)&&(u=i,l=i.defaultState||{},a=i.domain),{hook:e,domain:a,defaultState:l,mainConfig:u,maybeConfig:d}}function wy(...e){return(({domain:t,defaultState:n,hook:r,mainConfig:i,maybeConfig:s})=>{function o(m){return r(o,m,yy()),null}const a=fm({or:s,and:i}),l=`${t?`${t.compositeName.fullName}/`:""}${a.name||"gate"}`,u=V({name:`${l}.set`,sid:a.sid?`${a.sid}|set`:void 0}),d=V({name:`${l}.open`,sid:a.sid?`${a.sid}|open`:void 0}),h=V({name:`${l}.close`,sid:a.sid?`${a.sid}|close`:void 0}),f=ee(!1,{name:`${l}.status`,serialize:"ignore"}).on(d,()=>!0).on(h,()=>!1),g=ee(n,{name:`${l}.state`,sid:a.sid}).on(u,(m,w)=>w).on(d,(m,w)=>w).reset(h);if(t){const{hooks:m}=t;zo({target:[m.store,m.store,m.event,m.event,m.event],params:[f,g,d,h,u]})}return o.open=d,o.close=h,o.status=f,o.state=g,o.set=u,dM(`Gate:${l}`,o)})(hM($S,e))}const hm=e=>{throw Error(e)},u_=typeof window<"u"?ge.useLayoutEffect:ge.useEffect,{useSyncExternalStore:fM}=nM,pM=(e,t)=>t?t.getState(e):e.getState(),gM=ge.createContext(null),Io=e=>typeof e=="object"&&e!==null,fm=(e,t={})=>(Io(e)&&(fm(e.or,t),(n=>{for(const s in n)i=s,(o=>o===void 0)(r=n[s])||i==="or"||i==="and"||(t[i]=r);var r,i})(e),fm(e.and,t)),t),mM={currentSong:null,loaded:!1,state:null},yM={currentTime:0,duration:0,isSliding:!1,lastRangeValue:null},vM={currentSongIndex:null,songs:[],name:null,url:null,icon:null,shuffle:!1,willGoToPrevTrack:!0},wM={lyrics:[],currentLyricIndex:0},_M=5;var it=(e=>(e[e.noloop=0]="noloop",e[e.loopall=1]="loopall",e[e.loopone=2]="loopone",e))(it||{});const VS=V(),US=V(),_y=V(),FS=V(),Yt=ee(yM);j({clock:VS,source:Yt,fn:(e,t)=>({...e,currentTime:t}),target:Yt});j({clock:US,source:Yt,fn:(e,t)=>({...e,duration:t}),target:Yt});j({clock:_y,source:Yt,fn:(e,t)=>(console.log({lastRangeValue:t}),{...e,lastRangeValue:t}),target:Yt});j({clock:FS,source:Yt,fn:(e,t)=>({...e,isSliding:t}),target:Yt});const xM=()=>_e(Yt),EM=({queue:e,loop:t})=>{const{currentSongIndex:n,songs:r}=e;console.log(t);const i=n!==null?n+1:null;return t===it.loopone?e:typeof i=="number"&&i>r.length-1?t===it.noloop?e:t===it.loopall?{...e,currentSongIndex:0}:e:{...e,currentSongIndex:i}},IM=e=>{let t=it.noloop;return e===it.noloop&&(t=it.loopall),e===it.loopall&&(t=it.loopone),t},zh=V(),da=V(),zS=V(),BS=V(),Ai=ee(vM),$l=ee(it.noloop);j({clock:BS,source:Ai,fn:(e,{queue:t})=>t??e,target:Ai});j({clock:zh,source:{queue:Ai,loop:$l},fn:EM,target:Ai});j({clock:zh,source:$l,filter:e=>e===it.loopone,target:da});j({clock:zS,source:$l,fn:IM,target:$l});hy({unit:Ai,fn:e=>{const{currentSongIndex:t,songs:n}=e;if(t!==null){const r=n[t];Wh({song:r,queue:void 0})}}});const TM=()=>_e({queue:Ai,loop:$l}),xy=Yt.map(({currentTime:e})=>e<5e3),SM=xy.map(e=>!e),Ey=V(),HS=V();j({clock:da,source:xy,filter:Boolean,target:Ey});j({clock:da,source:xy,filter:Boolean,target:Ey});j({clock:da,source:SM,filter:Boolean,target:HS});j({clock:Ey,source:Ai,filter:e=>!!e.currentSongIndex,fn:e=>({...e,currentSongIndex:e.currentSongIndex-1}),target:Ai});j({clock:HS,source:Yt,filter:Boolean,fn:e=>({...e,currentTime:0}),target:Yt});const kM=({lyrics:e},t)=>{console.log(e,t);const{lyrics:n}=e,r=n.findIndex((i,s,o)=>{var a;return(((a=o[s+1])==null?void 0:a.startTime)??-1/0)>t});return r===e.currentLyricIndex?e:{...e,currentLyricIndex:r}},CM=({lyrics:e},t)=>{console.log("test",e,t);const{lyrics:n,currentLyricIndex:r}=e;return!n.length||isNaN(n[0].startTime)?e:n[r+1].startTime<t?{...e,currentLyricIndex:r+1}:e},WS=V(),qS=V(),Iy=V(),Ty=V(),GS=V(),jr=ee(wM),Bh=ee(!1);j({clock:WS,source:{shouldCalculateLyrics:Bh,lyrics:jr},filter:({shouldCalculateLyrics:e})=>e,fn:kM,target:jr});j({clock:qS,source:{shouldCalculateLyrics:Bh,lyrics:jr},filter:({shouldCalculateLyrics:e})=>e,fn:CM,target:jr});j({clock:Iy,source:jr,fn:(e,t)=>({...e,lyrics:t}),target:jr});j({clock:Ty,source:jr,fn:(e,t)=>({...e,currentLyricIndex:t}),target:jr});j({clock:GS,fn:e=>e,target:Bh});const AM=()=>_e([jr,Bh]),RM=()=>{const[{loaded:e,state:t,currentSong:n},{currentTime:r}]=_e([Nn,Yt]);return{play:(i=n,s)=>i?!e||(i==null?void 0:i.id)!==(n==null?void 0:n.id)?Wh({song:i,queue:s}):t==="playing"?XS():Hh():null,next:()=>{console.log("next"),zh()},previous:()=>{if(r<_M){da();return}console.log(t),_y(0),Ty(0)}}},Sy=ee(!1),QS=V(),KS=V();j({clock:QS,fn:()=>!0,target:Sy});j({clock:KS,fn:()=>!1,target:Sy});const PM=()=>_e(Sy),Hh=V(),Wh=V(),YS=V(),XS=V(),Nn=ee(mM);j({clock:Hh,source:Nn,fn:e=>({...e,state:"playing"}),target:Nn});j({clock:XS,source:Nn,fn:e=>({...e,state:"pause"}),target:Nn});j({clock:YS,source:Nn,fn:e=>({...e,loaded:!0}),target:[Nn,Hh]});j({clock:Wh,target:BS});hy({unit:Nn,fn:({currentSong:e,state:t})=>{e&&e.lyrics&&t==="loading"&&(console.log("reset"),Iy(e.lyrics),Ty(0))}});j({clock:Wh,source:Nn,fn:(e,{song:t})=>({...e,state:"loading",loaded:!1,currentSong:t}),target:Nn});const q={useSong:()=>_e(Nn),useControls:RM,queue:{useQueue:TM,next:zh,previous:da,changeLoopMode:zS},playblack:{usePlayback:xM,setCurrentTime:VS,setDuration:US,setLastRangeValue:_y,setIsSliding:FS},fullscreen:{useFullScreen:PM,open:QS,close:KS},lyrics:{useLyrics:AM,calculateCurrentLyric:WS,nextCurrentLyric:qS,setLyrics:Iy,setShouldCalculateLyrics:GS},events:{loaded:YS,play:Hh}},bM=()=>{const{state:e}=q.useSong(),{loop:t,queue:n}=q.queue.useQueue(),{lastRangeValue:r,isSliding:i}=q.playblack.usePlayback(),{next:s,previous:o}=q.useControls(),a=T.useRef(null),l=h=>{q.events.loaded(),q.playblack.setDuration(h.currentTarget.duration),q.playblack.setLastRangeValue(null)},u=h=>{i||(q.playblack.setCurrentTime(h.currentTarget.currentTime),q.lyrics.nextCurrentLyric(h.currentTarget.currentTime))},d=()=>{if(console.log("ended"),t===it.noloop&&n.currentSongIndex===n.songs.length-1){o();return}s()};return T.useEffect(()=>{a.current&&y4(r)&&!isNaN(r??0)&&(a.current.currentTime=+r)},[r]),T.useEffect(()=>{var h;a.current&&(e==="playing"?a.current.play():(h=a.current)==null||h.pause())},[e]),{audioRef:a,loop:t,handleEnded:d,handlePlaying:u,handleOnCanPlay:l}},NM=()=>{const{audioRef:e,loop:t,handleOnCanPlay:n,handlePlaying:r,handleEnded:i}=bM(),{currentSong:s}=q.useSong();return c.jsx("audio",{onEnded:i,src:s==null?void 0:s.songSrc,loop:t===it.loopone,ref:e,onTimeUpdate:r,onCanPlay:n})};/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ol(){return Ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ol.apply(this,arguments)}var ai;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ai||(ai={}));const d_="popstate";function jM(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return pm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ld(i)}return LM(t,n,null,e)}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ky(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function MM(){return Math.random().toString(36).substr(2,8)}function h_(e,t){return{usr:e.state,key:e.key,idx:t}}function pm(e,t,n,r){return n===void 0&&(n=null),Ol({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ha(t):t,{state:n,key:t&&t.key||r||MM()})}function Ld(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ha(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function LM(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ai.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Ol({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=ai.Pop;let _=d(),p=_==null?null:_-u;u=_,l&&l({action:a,location:w.location,delta:p})}function f(_,p){a=ai.Push;let y=pm(w.location,_,p);n&&n(y,_),u=d()+1;let v=h_(y,u),E=w.createHref(y);try{o.pushState(v,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}s&&l&&l({action:a,location:w.location,delta:1})}function g(_,p){a=ai.Replace;let y=pm(w.location,_,p);n&&n(y,_),u=d();let v=h_(y,u),E=w.createHref(y);o.replaceState(v,"",E),s&&l&&l({action:a,location:w.location,delta:0})}function m(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof _=="string"?_:Ld(_);return Ae(p,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,p)}let w={get action(){return a},get location(){return e(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(d_,h),l=_,()=>{i.removeEventListener(d_,h),l=null}},createHref(_){return t(i,_)},createURL:m,encodeLocation(_){let p=m(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(_){return o.go(_)}};return w}var f_;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(f_||(f_={}));function DM(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ha(t):t,i=Vl(r.pathname||"/",n);if(i==null)return null;let s=JS(e);$M(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=qM(s[a],QM(i));return o}function JS(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=wi([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),JS(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:HM(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of ZS(s.path))i(s,o,l)}),t}function ZS(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ZS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function $M(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:WM(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const OM=/^:\w+$/,VM=3,UM=2,FM=1,zM=10,BM=-2,p_=e=>e==="*";function HM(e,t){let n=e.split("/"),r=n.length;return n.some(p_)&&(r+=BM),t&&(r+=UM),n.filter(i=>!p_(i)).reduce((i,s)=>i+(OM.test(s)?VM:s===""?FM:zM),r)}function WM(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function qM(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Dd({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let h=a.route;s.push({params:r,pathname:wi([i,d.pathname]),pathnameBase:ZM(wi([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=wi([i,d.pathnameBase]))}return s}function Dd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=GM(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:f,isOptional:g}=d;if(f==="*"){let w=a[h]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const m=a[h];return g&&!m?u[f]=void 0:u[f]=KM(m||"",f),u},{}),pathname:s,pathnameBase:o,pattern:e}}function GM(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ky(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function QM(e){try{return decodeURI(e)}catch(t){return ky(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function KM(e,t){try{return decodeURIComponent(e)}catch(n){return ky(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Vl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function YM(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ha(e):e;return{pathname:n?n.startsWith("/")?n:XM(n,t):t,search:eL(r),hash:tL(i)}}function XM(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rp(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function JM(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ek(e,t){let n=JM(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function tk(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ha(e):(i=Ol({},e),Ae(!i.pathname||!i.pathname.includes("?"),Rp("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Rp("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Rp("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else if(r){let h=t.length===0?[]:t[t.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h.pop();i.pathname=f.join("/")}a="/"+h.join("/")}else{let h=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?t[h]:"/"}let l=YM(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const wi=e=>e.join("/").replace(/\/\/+/g,"/"),ZM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),eL=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,tL=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function nL(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const nk=["post","put","patch","delete"];new Set(nk);const rL=["get",...nk];new Set(rL);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ul.apply(this,arguments)}const qh=T.createContext(null),rk=T.createContext(null),Oi=T.createContext(null),Gh=T.createContext(null),Vi=T.createContext({outlet:null,matches:[],isDataRoute:!1}),ik=T.createContext(null);function iL(e,t){let{relative:n}=t===void 0?{}:t;fa()||Ae(!1);let{basename:r,navigator:i}=T.useContext(Oi),{hash:s,pathname:o,search:a}=Qh(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:wi([r,o])),i.createHref({pathname:l,search:a,hash:s})}function fa(){return T.useContext(Gh)!=null}function Br(){return fa()||Ae(!1),T.useContext(Gh).location}function sL(e){fa()||Ae(!1);let{pathname:t}=Br();return T.useMemo(()=>Dd(e,t),[t,e])}function sk(e){T.useContext(Oi).static||T.useLayoutEffect(e)}function _c(){let{isDataRoute:e}=T.useContext(Vi);return e?_L():oL()}function oL(){fa()||Ae(!1);let e=T.useContext(qh),{basename:t,future:n,navigator:r}=T.useContext(Oi),{matches:i}=T.useContext(Vi),{pathname:s}=Br(),o=JSON.stringify(ek(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return sk(()=>{a.current=!0}),T.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=tk(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:wi([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,o,s,e])}const aL=T.createContext(null);function lL(e){let t=T.useContext(Vi).outlet;return t&&T.createElement(aL.Provider,{value:e},t)}function Qh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(Oi),{matches:i}=T.useContext(Vi),{pathname:s}=Br(),o=JSON.stringify(ek(i,r.v7_relativeSplatPath));return T.useMemo(()=>tk(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function cL(e,t){return uL(e,t)}function uL(e,t,n,r){fa()||Ae(!1);let{navigator:i}=T.useContext(Oi),{matches:s}=T.useContext(Vi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Br(),d;if(t){var h;let _=typeof t=="string"?ha(t):t;l==="/"||(h=_.pathname)!=null&&h.startsWith(l)||Ae(!1),d=_}else d=u;let f=d.pathname||"/",g=l==="/"?f:f.slice(l.length)||"/",m=DM(e,{pathname:g}),w=gL(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:wi([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:wi([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return t&&w?T.createElement(Gh.Provider,{value:{location:Ul({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ai.Pop}},w):w}function dL(){let e=wL(),t=nL(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,s)}const hL=T.createElement(dL,null);class fL extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(Vi.Provider,{value:this.props.routeContext},T.createElement(ik.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pL(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(qh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Vi.Provider,{value:t},r)}function gL(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));d>=0||Ae(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.loader&&h.route.id&&n.loaderData[h.route.id]===void 0&&(!n.errors||n.errors[h.route.id]===void 0)){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}return o.reduceRight((d,h,f)=>{let g,m=!1,w=null,_=null;n&&(g=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||hL,l&&(u<0&&f===0?(xL("route-fallback",!1),m=!0,_=null):u===f&&(m=!0,_=h.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,f+1)),y=()=>{let v;return g?v=w:m?v=_:h.route.Component?v=T.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=d,T.createElement(pL,{match:h,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?T.createElement(fL,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:y(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):y()},null)}var ok=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ok||{}),$d=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($d||{});function mL(e){let t=T.useContext(qh);return t||Ae(!1),t}function yL(e){let t=T.useContext(rk);return t||Ae(!1),t}function vL(e){let t=T.useContext(Vi);return t||Ae(!1),t}function ak(e){let t=vL(),n=t.matches[t.matches.length-1];return n.route.id||Ae(!1),n.route.id}function wL(){var e;let t=T.useContext(ik),n=yL($d.UseRouteError),r=ak($d.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _L(){let{router:e}=mL(ok.UseNavigateStable),t=ak($d.UseNavigateStable),n=T.useRef(!1);return sk(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ul({fromRouteId:t},s)))},[e,t])}const g_={};function xL(e,t,n){!t&&!g_[e]&&(g_[e]=!0)}function Cy(e){return lL(e.context)}function Od(e){Ae(!1)}function EL(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ai.Pop,navigator:s,static:o=!1,future:a}=e;fa()&&Ae(!1);let l=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:s,static:o,future:Ul({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ha(r));let{pathname:d="/",search:h="",hash:f="",state:g=null,key:m="default"}=r,w=T.useMemo(()=>{let _=Vl(d,l);return _==null?null:{location:{pathname:_,search:h,hash:f,state:g,key:m},navigationType:i}},[l,d,h,f,g,m,i]);return w==null?null:T.createElement(Oi.Provider,{value:u},T.createElement(Gh.Provider,{children:n,value:w}))}function IL(e){let{children:t,location:n}=e;return cL(gm(t),n)}new Promise(()=>{});function gm(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let s=[...t,i];if(r.type===T.Fragment){n.push.apply(n,gm(r.props.children,s));return}r.type!==Od&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=gm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vd(){return Vd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vd.apply(this,arguments)}function lk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function TL(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function SL(e,t){return e.button===0&&(!t||t==="_self")&&!TL(e)}function mm(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function kL(e,t){let n=mm(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const CL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],AL=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],RL=T.createContext({isTransitioning:!1}),PL="startTransition",m_=t2[PL];function bL(e){let{basename:t,children:n,future:r,window:i}=e,s=T.useRef();s.current==null&&(s.current=jM({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=T.useCallback(h=>{u&&m_?m_(()=>l(h)):l(h)},[l,u]);return T.useLayoutEffect(()=>o.listen(d),[o,d]),T.createElement(EL,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const NL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,js=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:h}=t,f=lk(t,CL),{basename:g}=T.useContext(Oi),m,w=!1;if(typeof u=="string"&&jL.test(u)&&(m=u,NL))try{let v=new URL(window.location.href),E=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=Vl(E.pathname,g);E.origin===v.origin&&S!=null?u=S+E.search+E.hash:w=!0}catch{}let _=iL(u,{relative:i}),p=LL(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:h});function y(v){r&&r(v),v.defaultPrevented||p(v)}return T.createElement("a",Vd({},f,{href:m||_,onClick:w||s?r:y,ref:n,target:l}))}),ck=T.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=t,h=lk(t,AL),f=Qh(l,{relative:h.relative}),g=Br(),m=T.useContext(rk),{navigator:w}=T.useContext(Oi),_=m!=null&&DL(f)&&u===!0,p=w.encodeLocation?w.encodeLocation(f).pathname:f.pathname,y=g.pathname,v=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(y=y.toLowerCase(),v=v?v.toLowerCase():null,p=p.toLowerCase());const E=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let S=y===p||!o&&y.startsWith(p)&&y.charAt(E)==="/",k=v!=null&&(v===p||!o&&v.startsWith(p)&&v.charAt(p.length)==="/"),I={isActive:S,isPending:k,isTransitioning:_},C=S?r:void 0,N;typeof s=="function"?N=s(I):N=[s,S?"active":null,k?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let F=typeof a=="function"?a(I):a;return T.createElement(js,Vd({},h,{"aria-current":C,className:N,ref:n,style:F,to:l,unstable_viewTransition:u}),typeof d=="function"?d(I):d)});var ym;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ym||(ym={}));var y_;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(y_||(y_={}));function ML(e){let t=T.useContext(qh);return t||Ae(!1),t}function LL(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=_c(),u=Br(),d=Qh(e,{relative:o});return T.useCallback(h=>{if(SL(h,n)){h.preventDefault();let f=r!==void 0?r:Ld(u)===Ld(d);l(e,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,e,s,o,a])}function uk(e){let t=T.useRef(mm(e)),n=T.useRef(!1),r=Br(),i=T.useMemo(()=>kL(r.search,n.current?null:t.current),[r.search]),s=_c(),o=T.useCallback((a,l)=>{const u=mm(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,l)},[s,i]);return[i,o]}function DL(e,t){t===void 0&&(t={});let n=T.useContext(RL);n==null&&Ae(!1);let{basename:r}=ML(ym.useViewTransitionState),i=Qh(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Vl(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Vl(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Dd(i.pathname,o)!=null||Dd(i.pathname,s)!=null}const H=x.button`
    border: none;
    background: ${({$background:e})=>e??"transparent"};
    border-radius: ${({theme:e})=>e.borderRadius.mild};
    font-size: 0.9rem;
    width: ${({$width:e})=>e??"100%"};
    min-height: ${({$height:e})=>e??"40px"};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: ${({$align:e="center"})=>e==="left"?"flex-start":e==="right"?"flex-end":e};
    transition: 0s;
    position: relative;
    color: ${({color:e})=>e};
    gap: 8px;

    &:disabled {
        filter: grayscale(1) brightness(1.4);
        pointer-events: none;

        & > * {
            opacity: 0.5;
        }
    }

    @media (hover: hover) {
        &:hover {
            filter: brightness(0.9);
            background: ${({$background:e,theme:t})=>e?"":t.colors.lightHover};
        }
    }

    @media (hover: none) {
        transition: 0.2s transform;

        &:active {
            background: ${({theme:e})=>e.colors.hover};
            transform: scale(0.95);
        }
    }
`,$L=x(H)`
    color: ${({theme:e})=>e.colors.textColor};
    filter: brightness(1.2);

    &.liked {
        color: ${({likeColor:e})=>e};
    }

    svg {
        width: 20px;
        height: 20px;
    }
`,_s={borderRadius:{mild:"9px",middle:"10px",big:"14px",huge:"5%"},colors:{brightness:1.1,pageTopButton:"#171717",skeleton:"#ffffff1f",playerDarkening:"#000000cb",textColor:"#fff",textColorOppiste:"#000",hover:"#ffffff14",pageBackground:"#101010",pageBackground2:"#191919",overlay:"#0e0e0ed4",input:"#202020",border:"#92929257",sidebar:"#161616",lightHover:"#ffffff1f",darkHover:"#0000002b",modal:"#242629",shadow:"0 0 40px #00000021",greyText:"#a2a2a2",header:"#1010109e",blue:{main:"#75a8fa",action:"#5193ff",mild:"#1b2c4e",transparent:"#5394ff4f",transparent2:"#5394ff2b"},purple:{main:"#9332d1"},red:{text:"#ffb3b3",transparent:"#ff636314",main:"#d64040"}}},OL={borderRadius:{mild:"6px",middle:"10px",big:"14px",huge:"5%"},colors:{brightness:.7,pageTopButton:"#fff",skeleton:"#0000001a",playerDarkening:"#f1f1f1c9",textColor:"#000",textColorOppiste:"#fff",hover:"#73737314",pageBackground:"#fff",pageBackground2:"#f7f7f7",overlay:"#0e0e0ed4",input:"#f0f0f0",border:"#b6b6b657",sidebar:"#f1f1f1",lightHover:"#ffffff80",darkHover:"#0000001c",modal:"#fff",shadow:"0 0 40px #00000021",header:"#ffffff9e",greyText:"#a2a2a2",blue:{main:"#5275b5",action:"#3481fe",mild:"#dfeaff",transparent:"#5394ff4f",transparent2:"#5394ff2b"},purple:{main:"#9332d1"},red:{text:"#e15353",transparent:"#ff636314",main:"#ff6f6f"}}},Kh=({songId:e,likeColor:t=_s.colors.greyText,onClick:n,background:r,height:i,width:s="30px",...o})=>{const[a,l]=T.useState(!1);T.useEffect(()=>{},[]);const u=d=>{d.stopPropagation(),e&&(n==null||n(e)),l(h=>!h)};return c.jsx($L,{...o,$width:s,$height:i,$background:r,className:"like-button "+(a?"liked":""),onClick:u,likeColor:t,children:a?c.jsx(Zj,{}):c.jsx(sy,{})})},pa=x.div`
  background-color: ${({$colors:e})=>(e==null?void 0:e[1])??"grey"};
  animation: bg 15s infinite;
  background-size: 150% 150%;

  //linear-gradient(#000000b0, #00000057)
  background-image: linear-gradient(#00000042, #00000038),
    radial-gradient(
      at 40% 20%,
      ${({$colors:e})=>(e==null?void 0:e[0])??"grey"} 0px,
      transparent 50%
    ),
    radial-gradient(
      at 80% 0%,
      ${({$colors:e})=>(e==null?void 0:e[5])??"grey"} 0px,
      transparent 50%
    ),
    radial-gradient(
      at 0% 50%,
      ${({$colors:e})=>(e==null?void 0:e[2])??"darkgrey"} 0px,
      transparent 50%
    ),
    radial-gradient(
      at 80% 50%,
      ${({$colors:e})=>(e==null?void 0:e[5])??"lightgrey"} 0px,
      transparent 50%
    ),
    radial-gradient(
      at 0% 100%,
      ${({$colors:e})=>(e==null?void 0:e[2])??"grey"} 0px,
      transparent 50%
    );



  @keyframes bg {
    0% {
		  background-position: 0 0;
      background-size: 150% 150%;
    }
    50% {
		  background-position: 0 0;
      background-size: 130% 130%;
    }
    100% {
		  background-position: 0 0;
      background-size: 150% 150%;
    }
  }
`,VL=x.img`
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
    opacity: ${({$coverLoaded:e})=>e?"1":"0"};
`,UL=x(pa)`
    width: ${({$size:e})=>e??"var(--size)"};
    min-width: ${({$size:e})=>e??"var(--size)"};
    height: ${({$size:e})=>e??"var(--size)"};
    display: flex;
    justify-content: center;
    /* background: ${({$color1:e})=>e??"grey"}; */
    position: relative;
    border-radius: ${({$borderRadius:e})=>e};
    display: flex;
    align-items: center;
    justify-content: center;
    animation: none;
    /* overflow: hidden; */

    img {
        border-radius: ${({$borderRadius:e})=>e};
        width: 100%;
    }

    .cover-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        svg {
            width: 45%;
            height: 45%;
            opacity: 0.7;
            color: #fff;
        }
    }
`,FL=({src:e})=>{const[t,n]=T.useState(!1),r=()=>{n(!0)};return c.jsx(VL,{$coverLoaded:t,onLoad:r,loading:"lazy",src:e})},zL="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/music-icon-mohammed-jabir-ap.jpg",Yh=({src:e,colors:t,children:n,size:r,fallbackIcon:i,borderRadius:s})=>c.jsxs(UL,{className:"general-cover",$colors:t,$borderRadius:s,$size:r,$color1:t==null?void 0:t[0],children:[e&&e!==zL?c.jsx(FL,{src:e}):c.jsx("div",{className:"cover-icon",children:i}),c.jsx("div",{className:"cover-children",children:n})]}),Ay=_s.borderRadius.mild,Ry=e=>c.jsx(Yh,{fallbackIcon:c.jsx(us,{}),...e,borderRadius:e.borderRadius??Ay}),xc=x.div`
    padding: 8px 0;

    .admin {
        font-size: 0.6rem;
        background: linear-gradient(45deg, #c633b7, #d2629f);
        color: #fff;
        padding: 2px 4px;
        margin-left: 30px;
        border-radius: 2px;
    }

    button {
        font-weight: 200;
        font-size: 0.9rem;
        gap: 16px;
        justify-content: flex-start;
        padding: 8px 16px;
        border-radius: 0;
        /* opacity: 0.8; */

        svg {
            width: 20px;
            height: 20px;
            opacity: 0.4;
        }
    }
`,Fl=x.div`
	width: 100%;
	height: 0.5px;
	background: #91919142;
	margin: 8px 0;
`,Sr={author:c.jsx(cS,{}),user:c.jsx(mS,{}),playlist:c.jsx(dS,{}),album:c.jsx(cy,{}),song:c.jsx(us,{})};var v_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},BL=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},hk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[d],n[h],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dk(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):BL(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new HL;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class HL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WL=function(e){const t=dk(e);return hk.encodeByteArray(t,!0)},Ud=function(e){return WL(e).replace(/\./g,"")},fk=function(e){try{return hk.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=()=>qL().__FIREBASE_DEFAULTS__,QL=()=>{if(typeof process>"u"||typeof v_>"u")return;const e=v_.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},KL=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&fk(e[1]);return t&&JSON.parse(t)},Py=()=>{try{return GL()||QL()||KL()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},pk=e=>{var t,n;return(n=(t=Py())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},YL=e=>{const t=pk(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},gk=()=>{var e;return(e=Py())===null||e===void 0?void 0:e.config},mk=e=>{var t;return(t=Py())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ud(JSON.stringify(n)),Ud(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function eD(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function tD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nD(){const e=_t();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function rD(){try{return typeof indexedDB=="object"}catch{return!1}}function iD(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD="FirebaseError";class ar extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=sD,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ec.prototype.create)}}class Ec{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?oD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ar(i,a,r)}}function oD(e,t){return e.replace(aD,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const aD=/\{\$([^}]+)}/g;function lD(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function zl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(w_(s)&&w_(o)){if(!zl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function w_(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ha(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Wa(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function cD(e,t){const n=new uD(e,t);return n.subscribe.bind(n)}class uD{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dD(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Pp),i.error===void 0&&(i.error=Pp),i.complete===void 0&&(i.complete=Pp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dD(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Pp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){return e&&e._delegate?e._delegate:e}class Ri{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new XL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pD(t))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Zi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zi){return this.instances.has(t)}getOptions(t=Zi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fD(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zi){return this.component?this.component.multipleInstances?t:Zi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fD(e){return e===Zi?void 0:e}function pD(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new hD(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const mD={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},yD=re.INFO,vD={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},wD=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=vD[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class by{constructor(t){this.name=t,this._logLevel=yD,this._logHandler=wD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?mD[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const _D=(e,t)=>t.some(n=>e instanceof n);let __,x_;function xD(){return __||(__=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ED(){return x_||(x_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yk=new WeakMap,vm=new WeakMap,vk=new WeakMap,bp=new WeakMap,Ny=new WeakMap;function ID(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(_i(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&yk.set(n,e)}).catch(()=>{}),Ny.set(t,e),t}function TD(e){if(vm.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});vm.set(e,t)}let wm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return vm.get(e);if(t==="objectStoreNames")return e.objectStoreNames||vk.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _i(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function SD(e){wm=e(wm)}function kD(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Np(this),t,...n);return vk.set(r,t.sort?t.sort():[t]),_i(r)}:ED().includes(e)?function(...t){return e.apply(Np(this),t),_i(yk.get(this))}:function(...t){return _i(e.apply(Np(this),t))}}function CD(e){return typeof e=="function"?kD(e):(e instanceof IDBTransaction&&TD(e),_D(e,xD())?new Proxy(e,wm):e)}function _i(e){if(e instanceof IDBRequest)return ID(e);if(bp.has(e))return bp.get(e);const t=CD(e);return t!==e&&(bp.set(e,t),Ny.set(t,e)),t}const Np=e=>Ny.get(e);function AD(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=_i(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_i(o.result),l.oldVersion,l.newVersion,_i(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const RD=["get","getKey","getAll","getAllKeys","count"],PD=["put","add","delete","clear"],jp=new Map;function E_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(jp.get(t))return jp.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=PD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return jp.set(t,s),s}SD(e=>({...e,get:(t,n,r)=>E_(t,n)||e.get(t,n,r),has:(t,n)=>!!E_(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ND(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ND(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _m="@firebase/app",I_="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new by("@firebase/app"),jD="@firebase/app-compat",MD="@firebase/analytics-compat",LD="@firebase/analytics",DD="@firebase/app-check-compat",$D="@firebase/app-check",OD="@firebase/auth",VD="@firebase/auth-compat",UD="@firebase/database",FD="@firebase/database-compat",zD="@firebase/functions",BD="@firebase/functions-compat",HD="@firebase/installations",WD="@firebase/installations-compat",qD="@firebase/messaging",GD="@firebase/messaging-compat",QD="@firebase/performance",KD="@firebase/performance-compat",YD="@firebase/remote-config",XD="@firebase/remote-config-compat",JD="@firebase/storage",ZD="@firebase/storage-compat",e$="@firebase/firestore",t$="@firebase/firestore-compat",n$="firebase",r$="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="[DEFAULT]",i$={[_m]:"fire-core",[jD]:"fire-core-compat",[LD]:"fire-analytics",[MD]:"fire-analytics-compat",[$D]:"fire-app-check",[DD]:"fire-app-check-compat",[OD]:"fire-auth",[VD]:"fire-auth-compat",[UD]:"fire-rtdb",[FD]:"fire-rtdb-compat",[zD]:"fire-fn",[BD]:"fire-fn-compat",[HD]:"fire-iid",[WD]:"fire-iid-compat",[qD]:"fire-fcm",[GD]:"fire-fcm-compat",[QD]:"fire-perf",[KD]:"fire-perf-compat",[YD]:"fire-rc",[XD]:"fire-rc-compat",[JD]:"fire-gcs",[ZD]:"fire-gcs-compat",[e$]:"fire-fst",[t$]:"fire-fst-compat","fire-js":"fire-js",[n$]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=new Map,Em=new Map;function s$(e,t){try{e.container.addComponent(t)}catch(n){xs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Es(e){const t=e.name;if(Em.has(t))return xs.debug(`There were multiple attempts to register component ${t}.`),!1;Em.set(t,e);for(const n of Fd.values())s$(n,e);return!0}function Xh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o$={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xi=new Ec("app","Firebase",o$);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=r$;function wk(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:xm,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw xi.create("bad-app-name",{appName:String(i)});if(n||(n=gk()),!n)throw xi.create("no-options");const s=Fd.get(i);if(s){if(zl(n,s.options)&&zl(r,s.config))return s;throw xi.create("duplicate-app",{appName:i})}const o=new gD(i);for(const l of Em.values())o.addComponent(l);const a=new a$(n,r,o);return Fd.set(i,a),a}function _k(e=xm){const t=Fd.get(e);if(!t&&e===xm&&gk())return wk();if(!t)throw xi.create("no-app",{appName:e});return t}function Jn(e,t,n){var r;let i=(r=i$[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}Es(new Ri(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l$="firebase-heartbeat-database",c$=1,Bl="firebase-heartbeat-store";let Mp=null;function xk(){return Mp||(Mp=AD(l$,c$,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Bl)}}}).catch(e=>{throw xi.create("idb-open",{originalErrorMessage:e.message})})),Mp}async function u$(e){try{return await(await xk()).transaction(Bl).objectStore(Bl).get(Ek(e))}catch(t){if(t instanceof ar)xs.warn(t.message);else{const n=xi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xs.warn(n.message)}}}async function T_(e,t){try{const r=(await xk()).transaction(Bl,"readwrite");await r.objectStore(Bl).put(t,Ek(e)),await r.done}catch(n){if(n instanceof ar)xs.warn(n.message);else{const r=xi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xs.warn(r.message)}}}function Ek(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d$=1024,h$=30*24*60*60*1e3;class f${constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new g$(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=S_();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=h$}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=S_(),{heartbeatsToSend:r,unsentEntries:i}=p$(this._heartbeatsCache.heartbeats),s=Ud(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function S_(){return new Date().toISOString().substring(0,10)}function p$(e,t=d$){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),k_(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),k_(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class g${constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rD()?iD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await u$(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return T_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return T_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function k_(e){return Ud(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m$(e){Es(new Ri("platform-logger",t=>new bD(t),"PRIVATE")),Es(new Ri("heartbeat",t=>new f$(t),"PRIVATE")),Jn(_m,I_,e),Jn(_m,I_,"esm2017"),Jn("fire-js","")}m$("");var y$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,jy=jy||{},K=y$||self;function Jh(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Tc(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function v$(e){return Object.prototype.hasOwnProperty.call(e,Lp)&&e[Lp]||(e[Lp]=++w$)}var Lp="closure_uid_"+(1e9*Math.random()>>>0),w$=0;function _$(e,t,n){return e.call.apply(e.bind,arguments)}function x$(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function mt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mt=_$:mt=x$,mt.apply(null,arguments)}function mu(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function et(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ui(){this.s=this.s,this.o=this.o}var E$=0;Ui.prototype.s=!1;Ui.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),E$!=0)&&v$(this)};Ui.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ik=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function My(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C_(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Jh(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function yt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var I$=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};K.addEventListener("test",n,t),K.removeEventListener("test",n,t)}catch{}return e}();function Hl(e){return/^[\s\xa0]*$/.test(e)}function Zh(){var e=K.navigator;return e&&(e=e.userAgent)?e:""}function Hn(e){return Zh().indexOf(e)!=-1}function Ly(e){return Ly[" "](e),e}Ly[" "]=function(){};function T$(e,t){var n=m3;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var S$=Hn("Opera"),Qo=Hn("Trident")||Hn("MSIE"),Tk=Hn("Edge"),Im=Tk||Qo,Sk=Hn("Gecko")&&!(Zh().toLowerCase().indexOf("webkit")!=-1&&!Hn("Edge"))&&!(Hn("Trident")||Hn("MSIE"))&&!Hn("Edge"),k$=Zh().toLowerCase().indexOf("webkit")!=-1&&!Hn("Edge");function kk(){var e=K.document;return e?e.documentMode:void 0}var Tm;e:{var Dp="",$p=function(){var e=Zh();if(Sk)return/rv:([^\);]+)(\)|;)/.exec(e);if(Tk)return/Edge\/([\d\.]+)/.exec(e);if(Qo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(k$)return/WebKit\/(\S+)/.exec(e);if(S$)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if($p&&(Dp=$p?$p[1]:""),Qo){var Op=kk();if(Op!=null&&Op>parseFloat(Dp)){Tm=String(Op);break e}}Tm=Dp}var Sm;if(K.document&&Qo){var A_=kk();Sm=A_||parseInt(Tm,10)||void 0}else Sm=void 0;var C$=Sm;function Wl(e,t){if(yt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Sk){e:{try{Ly(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:A$[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Wl.$.h.call(this)}}et(Wl,yt);var A$={2:"touch",3:"pen",4:"mouse"};Wl.prototype.h=function(){Wl.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Sc="closure_listenable_"+(1e6*Math.random()|0),R$=0;function P$(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++R$,this.fa=this.ia=!1}function ef(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Dy(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function b$(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Ck(e){const t={};for(const n in e)t[n]=e[n];return t}const R_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ak(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<R_.length;s++)n=R_[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function tf(e){this.src=e,this.g={},this.h=0}tf.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Cm(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new P$(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function km(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Ik(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ef(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Cm(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var $y="closure_lm_"+(1e6*Math.random()|0),Vp={};function Rk(e,t,n,r,i){if(r&&r.once)return bk(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Rk(e,t[s],n,r,i);return null}return n=Uy(n),e&&e[Sc]?e.O(t,n,Tc(r)?!!r.capture:!!r,i):Pk(e,t,n,!1,r,i)}function Pk(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Tc(i)?!!i.capture:!!i,a=Vy(e);if(a||(e[$y]=a=new tf(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=N$(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)I$||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(jk(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function N$(){function e(n){return t.call(e.src,e.listener,n)}const t=j$;return e}function bk(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)bk(e,t[s],n,r,i);return null}return n=Uy(n),e&&e[Sc]?e.P(t,n,Tc(r)?!!r.capture:!!r,i):Pk(e,t,n,!0,r,i)}function Nk(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Nk(e,t[s],n,r,i);else r=Tc(r)?!!r.capture:!!r,n=Uy(n),e&&e[Sc]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Cm(s,n,r,i),-1<n&&(ef(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Vy(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Cm(t,n,r,i)),(n=-1<e?t[e]:null)&&Oy(n))}function Oy(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Sc])km(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(jk(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Vy(t))?(km(n,e),n.h==0&&(n.src=null,t[$y]=null)):ef(e)}}}function jk(e){return e in Vp?Vp[e]:Vp[e]="on"+e}function j$(e,t){if(e.fa)e=!0;else{t=new Wl(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Oy(e),e=n.call(r,t)}return e}function Vy(e){return e=e[$y],e instanceof tf?e:null}var Up="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uy(e){return typeof e=="function"?e:(e[Up]||(e[Up]=function(t){return e.handleEvent(t)}),e[Up])}function Ze(){Ui.call(this),this.i=new tf(this),this.S=this,this.J=null}et(Ze,Ui);Ze.prototype[Sc]=!0;Ze.prototype.removeEventListener=function(e,t,n,r){Nk(this,e,t,n,r)};function at(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new yt(t,e);else if(t instanceof yt)t.target=t.target||e;else{var i=t;t=new yt(r,e),Ak(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=yu(o,r,!0,t)&&i}if(o=t.g=e,i=yu(o,r,!0,t)&&i,i=yu(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=yu(o,r,!1,t)&&i}Ze.prototype.N=function(){if(Ze.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ef(n[r]);delete e.g[t],e.h--}}this.J=null};Ze.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Ze.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function yu(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&km(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fy=K.JSON.stringify;class M${constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function L$(){var e=zy;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class D${constructor(){this.h=this.g=null}add(t,n){const r=Mk.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Mk=new M$(()=>new $$,e=>e.reset());class $${constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function O$(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function V$(e){K.setTimeout(()=>{throw e},0)}let ql,Gl=!1,zy=new D$,Lk=()=>{const e=K.Promise.resolve(void 0);ql=()=>{e.then(U$)}};var U$=()=>{for(var e;e=L$();){try{e.h.call(e.g)}catch(n){V$(n)}var t=Mk;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Gl=!1};function nf(e,t){Ze.call(this),this.h=e||1,this.g=t||K,this.j=mt(this.qb,this),this.l=Date.now()}et(nf,Ze);L=nf.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),at(this,"tick"),this.ga&&(By(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function By(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}L.N=function(){nf.$.N.call(this),By(this),delete this.g};function Hy(e,t,n){if(typeof e=="function")n&&(e=mt(e,n));else if(e&&typeof e.handleEvent=="function")e=mt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:K.setTimeout(e,t||0)}function Dk(e){e.g=Hy(()=>{e.g=null,e.i&&(e.i=!1,Dk(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class F$ extends Ui{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Dk(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ql(e){Ui.call(this),this.h=e,this.g={}}et(Ql,Ui);var P_=[];function $k(e,t,n,r){Array.isArray(n)||(n&&(P_[0]=n.toString()),n=P_);for(var i=0;i<n.length;i++){var s=Rk(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ok(e){Dy(e.g,function(t,n){this.g.hasOwnProperty(n)&&Oy(t)},e),e.g={}}Ql.prototype.N=function(){Ql.$.N.call(this),Ok(this)};Ql.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rf(){this.g=!0}rf.prototype.Ea=function(){this.g=!1};function z$(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var d=u[0];u=u[1];var h=d.split("_");o=2<=h.length&&h[1]=="type"?o+(d+"="+u+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function B$(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ho(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+W$(e,n)+(r?" "+r:"")})}function H$(e,t){e.info(function(){return"TIMEOUT: "+t})}rf.prototype.info=function(){};function W$(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Fy(n)}catch{return t}}var Ls={},b_=null;function sf(){return b_=b_||new Ze}Ls.Ta="serverreachability";function Vk(e){yt.call(this,Ls.Ta,e)}et(Vk,yt);function Kl(e){const t=sf();at(t,new Vk(t))}Ls.STAT_EVENT="statevent";function Uk(e,t){yt.call(this,Ls.STAT_EVENT,e),this.stat=t}et(Uk,yt);function Tt(e){const t=sf();at(t,new Uk(t,e))}Ls.Ua="timingevent";function Fk(e,t){yt.call(this,Ls.Ua,e),this.size=t}et(Fk,yt);function kc(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){e()},t)}var of={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zk={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Wy(){}Wy.prototype.h=null;function N_(e){return e.h||(e.h=e.i())}function Bk(){}var Cc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function qy(){yt.call(this,"d")}et(qy,yt);function Gy(){yt.call(this,"c")}et(Gy,yt);var Am;function af(){}et(af,Wy);af.prototype.g=function(){return new XMLHttpRequest};af.prototype.i=function(){return{}};Am=new af;function Ac(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ql(this),this.P=q$,e=Im?125:void 0,this.V=new nf(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Hk}function Hk(){this.i=null,this.g="",this.h=!1}var q$=45e3,Wk={},Rm={};L=Ac.prototype;L.setTimeout=function(e){this.P=e};function Pm(e,t,n){e.L=1,e.A=cf(Mr(t)),e.u=n,e.S=!0,qk(e,null)}function qk(e,t){e.G=Date.now(),Rc(e),e.B=Mr(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),eC(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Hk,e.g=xC(e.l,n?t:null,!e.u),0<e.O&&(e.M=new F$(mt(e.Pa,e,e.g),e.O)),$k(e.U,e.g,"readystatechange",e.nb),t=e.I?Ck(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Kl(),z$(e.j,e.v,e.B,e.m,e.W,e.u)}L.nb=function(e){e=e.target;const t=this.M;t&&qn(e)==3?t.l():this.Pa(e)};L.Pa=function(e){try{if(e==this.g)e:{const d=qn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>d)&&(d!=3||Im||this.g&&(this.h.h||this.g.ja()||D_(this.g)))){this.J||d!=4||t==7||(t==8||0>=h?Kl(3):Kl(2)),lf(this);var n=this.g.da();this.ca=n;t:if(Gk(this)){var r=D_(this.g);e="";var i=r.length,s=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){is(this),cl(this);var o="";break t}this.h.i=new K.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,B$(this.j,this.v,this.B,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hl(a)){var u=a;break t}}u=null}if(n=u)ho(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bm(this,n);else{this.i=!1,this.s=3,Tt(12),is(this),cl(this);break e}}this.S?(Qk(this,d,o),Im&&this.i&&d==3&&($k(this.U,this.V,"tick",this.mb),this.V.start())):(ho(this.j,this.m,o,null),bm(this,o)),d==4&&is(this),this.i&&!this.J&&(d==4?yC(this.l,this):(this.i=!1,Rc(this)))}else f3(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),is(this),cl(this)}}}catch{}finally{}};function Gk(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Qk(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=G$(e,n),i==Rm){t==4&&(e.s=4,Tt(14),r=!1),ho(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Wk){e.s=4,Tt(15),ho(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ho(e.j,e.m,i,null),bm(e,i);Gk(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Tt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zy(t),t.M=!0,Tt(11))):(ho(e.j,e.m,n,"[Invalid Chunked Response]"),is(e),cl(e))}L.mb=function(){if(this.g){var e=qn(this.g),t=this.g.ja();this.o<t.length&&(lf(this),Qk(this,e,t),this.i&&e!=4&&Rc(this))}};function G$(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Rm:(n=Number(t.substring(n,r)),isNaN(n)?Wk:(r+=1,r+n>t.length?Rm:(t=t.slice(r,r+n),e.o=r+n,t)))}L.cancel=function(){this.J=!0,is(this)};function Rc(e){e.Y=Date.now()+e.P,Kk(e,e.P)}function Kk(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=kc(mt(e.lb,e),t)}function lf(e){e.C&&(K.clearTimeout(e.C),e.C=null)}L.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(H$(this.j,this.B),this.L!=2&&(Kl(),Tt(17)),is(this),this.s=2,cl(this)):Kk(this,this.Y-e)};function cl(e){e.l.H==0||e.J||yC(e.l,e)}function is(e){lf(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,By(e.V),Ok(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function bm(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Nm(n.i,e))){if(!e.K&&Nm(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Hd(n),ff(n);else break e;Jy(n),Tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=kc(mt(n.ib,n),6e3));if(1>=rC(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ss(n,11)}else if((e.K||n.g==e)&&Hd(n),!Hl(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const d=u[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Qy(s,s.h),s.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,xe(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=_C(r,r.J?r.pa:null,r.Y),o.K){iC(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(lf(a),Rc(a)),r.g=o}else gC(r);0<n.j.length&&pf(n)}else u[0]!="stop"&&u[0]!="close"||ss(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ss(n,7):Xy(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Kl(4)}catch{}}function Q$(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Jh(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function K$(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Jh(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Yk(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Jh(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=K$(e),r=Q$(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Xk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Y$(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function hs(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof hs){this.h=e.h,zd(this,e.j),this.s=e.s,this.g=e.g,Bd(this,e.m),this.l=e.l;var t=e.i,n=new Yl;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),j_(this,n),this.o=e.o}else e&&(t=String(e).match(Xk))?(this.h=!1,zd(this,t[1]||"",!0),this.s=qa(t[2]||""),this.g=qa(t[3]||"",!0),Bd(this,t[4]),this.l=qa(t[5]||"",!0),j_(this,t[6]||"",!0),this.o=qa(t[7]||"")):(this.h=!1,this.i=new Yl(null,this.h))}hs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ga(t,M_,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ga(t,M_,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ga(n,n.charAt(0)=="/"?Z$:J$,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ga(n,t3)),e.join("")};function Mr(e){return new hs(e)}function zd(e,t,n){e.j=n?qa(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bd(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function j_(e,t,n){t instanceof Yl?(e.i=t,n3(e.i,e.h)):(n||(t=Ga(t,e3)),e.i=new Yl(t,e.h))}function xe(e,t,n){e.i.set(t,n)}function cf(e){return xe(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function qa(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ga(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,X$),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function X$(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var M_=/[#\/\?@]/g,J$=/[#\?:]/g,Z$=/[#\?]/g,e3=/[#\?@]/g,t3=/#/g;function Yl(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Fi(e){e.g||(e.g=new Map,e.h=0,e.i&&Y$(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}L=Yl.prototype;L.add=function(e,t){Fi(this),this.i=null,e=ga(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Jk(e,t){Fi(e),t=ga(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Zk(e,t){return Fi(e),t=ga(e,t),e.g.has(t)}L.forEach=function(e,t){Fi(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};L.ta=function(){Fi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};L.Z=function(e){Fi(this);let t=[];if(typeof e=="string")Zk(this,e)&&(t=t.concat(this.g.get(ga(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};L.set=function(e,t){return Fi(this),this.i=null,e=ga(this,e),Zk(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};L.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function eC(e,t,n){Jk(e,t),0<n.length&&(e.i=null,e.g.set(ga(e,t),My(n)),e.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ga(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function n3(e,t){t&&!e.j&&(Fi(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Jk(this,r),eC(this,i,n))},e)),e.j=t}var r3=class{constructor(e,t){this.g=e,this.map=t}};function tC(e){this.l=e||i3,K.PerformanceNavigationTiming?(e=K.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var i3=10;function nC(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function rC(e){return e.h?1:e.g?e.g.size:0}function Nm(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Qy(e,t){e.g?e.g.add(t):e.h=t}function iC(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}tC.prototype.cancel=function(){if(this.i=sC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function sC(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return My(e.i)}var s3=class{stringify(e){return K.JSON.stringify(e,void 0)}parse(e){return K.JSON.parse(e,void 0)}};function o3(){this.g=new s3}function a3(e,t,n){const r=n||"";try{Yk(e,function(i,s){let o=i;Tc(i)&&(o=Fy(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function l3(e,t){const n=new rf;if(K.Image){const r=new Image;r.onload=mu(vu,n,r,"TestLoadImage: loaded",!0,t),r.onerror=mu(vu,n,r,"TestLoadImage: error",!1,t),r.onabort=mu(vu,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=mu(vu,n,r,"TestLoadImage: timeout",!1,t),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function vu(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function uf(e){this.l=e.ec||null,this.j=e.ob||!1}et(uf,Wy);uf.prototype.g=function(){return new df(this.l,this.j)};uf.prototype.i=function(e){return function(){return e}}({});function df(e,t){Ze.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ky,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(df,Ze);var Ky=0;L=df.prototype;L.open=function(e,t){if(this.readyState!=Ky)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Xl(this)};L.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||K).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pc(this)),this.readyState=Ky};L.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Xl(this)),this.g&&(this.readyState=3,Xl(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oC(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function oC(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}L.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Pc(this):Xl(this),this.readyState==3&&oC(this)}};L.Za=function(e){this.g&&(this.response=this.responseText=e,Pc(this))};L.Ya=function(e){this.g&&(this.response=e,Pc(this))};L.ka=function(){this.g&&Pc(this)};function Pc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Xl(e)}L.setRequestHeader=function(e,t){this.v.append(e,t)};L.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Xl(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(df.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var c3=K.JSON.parse;function Ne(e){Ze.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=aC,this.L=this.M=!1}et(Ne,Ze);var aC="",u3=/^https?$/i,d3=["POST","PUT"];L=Ne.prototype;L.Oa=function(e){this.M=e};L.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Am.g(),this.C=this.u?N_(this.u):N_(Am),this.g.onreadystatechange=mt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){L_(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&e instanceof K.FormData,!(0<=Ik(d3,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{uC(this),0<this.B&&((this.L=h3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.ua,this)):this.A=Hy(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){L_(this,s)}};function h3(e){return Qo&&typeof e.timeout=="number"&&e.ontimeout!==void 0}L.ua=function(){typeof jy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function L_(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,lC(e),hf(e)}function lC(e){e.F||(e.F=!0,at(e,"complete"),at(e,"error"))}L.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,at(this,"complete"),at(this,"abort"),hf(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hf(this,!0)),Ne.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?cC(this):this.kb())};L.kb=function(){cC(this)};function cC(e){if(e.h&&typeof jy<"u"&&(!e.C[1]||qn(e)!=4||e.da()!=2)){if(e.v&&qn(e)==4)Hy(e.La,0,e);else if(at(e,"readystatechange"),qn(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Xk)[1]||null;!i&&K.self&&K.self.location&&(i=K.self.location.protocol.slice(0,-1)),r=!u3.test(i?i.toLowerCase():"")}n=r}if(n)at(e,"complete"),at(e,"success");else{e.m=6;try{var s=2<qn(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",lC(e)}}finally{hf(e)}}}}function hf(e,t){if(e.g){uC(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||at(e,"ready");try{n.onreadystatechange=r}catch{}}}function uC(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(K.clearTimeout(e.A),e.A=null)}L.isActive=function(){return!!this.g};function qn(e){return e.g?e.g.readyState:0}L.da=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),c3(t)}};function D_(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case aC:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function f3(e){const t={};e=(e.g&&2<=qn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Hl(e[r]))continue;var n=O$(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}b$(t,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dC(e){let t="";return Dy(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Yy(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=dC(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):xe(e,t,n))}function La(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function hC(e){this.Ga=0,this.j=[],this.l=new rf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=La("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=La("baseRetryDelayMs",5e3,e),this.hb=La("retryDelaySeedMs",1e4,e),this.eb=La("forwardChannelMaxRetries",2,e),this.xa=La("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new tC(e&&e.concurrentRequestLimit),this.Ja=new o3,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=hC.prototype;L.ra=8;L.H=1;function Xy(e){if(fC(e),e.H==3){var t=e.W++,n=Mr(e.I);if(xe(n,"SID",e.K),xe(n,"RID",t),xe(n,"TYPE","terminate"),bc(e,n),t=new Ac(e,e.l,t),t.L=2,t.A=cf(Mr(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&K.Image&&(new Image().src=t.A,n=!0),n||(t.g=xC(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Rc(t)}wC(e)}function ff(e){e.g&&(Zy(e),e.g.cancel(),e.g=null)}function fC(e){ff(e),e.u&&(K.clearTimeout(e.u),e.u=null),Hd(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&K.clearTimeout(e.m),e.m=null)}function pf(e){if(!nC(e.i)&&!e.m){e.m=!0;var t=e.Na;ql||Lk(),Gl||(ql(),Gl=!0),zy.add(t,e),e.C=0}}function p3(e,t){return rC(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=kc(mt(e.Na,e,t),vC(e,e.C)),e.C++,!0)}L.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Ac(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Ck(s),Ak(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=pC(this,i,t),n=Mr(this.I),xe(n,"RID",e),xe(n,"CVER",22),this.F&&xe(n,"X-HTTP-Session-Id",this.F),bc(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(dC(s)))+"&"+t:this.o&&Yy(n,this.o,s)),Qy(this.i,i),this.bb&&xe(n,"TYPE","init"),this.P?(xe(n,"$req",t),xe(n,"SID","null"),i.aa=!0,Pm(i,n,null)):Pm(i,n,t),this.H=2}}else this.H==3&&(e?$_(this,e):this.j.length==0||nC(this.i)||$_(this))};function $_(e,t){var n;t?n=t.m:n=e.W++;const r=Mr(e.I);xe(r,"SID",e.K),xe(r,"RID",n),xe(r,"AID",e.V),bc(e,r),e.o&&e.s&&Yy(r,e.o,e.s),n=new Ac(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=pC(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Qy(e.i,n),Pm(n,r,t)}function bc(e,t){e.na&&Dy(e.na,function(n,r){xe(t,r,n)}),e.h&&Yk({},function(n,r){xe(t,r,n)})}function pC(e,t,n){n=Math.min(e.j.length,n);var r=e.h?mt(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const d=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{a3(d,o,"req"+u+"_")}catch{r&&r(d)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function gC(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ql||Lk(),Gl||(ql(),Gl=!0),zy.add(t,e),e.A=0}}function Jy(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=kc(mt(e.Ma,e),vC(e,e.A)),e.A++,!0)}L.Ma=function(){if(this.u=null,mC(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=kc(mt(this.jb,this),e)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Tt(10),ff(this),mC(this))};function Zy(e){e.B!=null&&(K.clearTimeout(e.B),e.B=null)}function mC(e){e.g=new Ac(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Mr(e.wa);xe(t,"RID","rpc"),xe(t,"SID",e.K),xe(t,"AID",e.V),xe(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&xe(t,"TO",e.qa),xe(t,"TYPE","xmlhttp"),bc(e,t),e.o&&e.s&&Yy(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=cf(Mr(t)),n.u=null,n.S=!0,qk(n,e)}L.ib=function(){this.v!=null&&(this.v=null,ff(this),Jy(this),Tt(19))};function Hd(e){e.v!=null&&(K.clearTimeout(e.v),e.v=null)}function yC(e,t){var n=null;if(e.g==t){Hd(e),Zy(e),e.g=null;var r=2}else if(Nm(e.i,t))n=t.F,iC(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=sf(),at(r,new Fk(r,n)),pf(e)}else gC(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&p3(e,t)||r==2&&Jy(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ss(e,5);break;case 4:ss(e,10);break;case 3:ss(e,6);break;default:ss(e,2)}}}function vC(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ss(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=mt(e.pb,e);n||(n=new hs("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||zd(n,"https"),cf(n)),l3(n.toString(),r)}else Tt(2);e.H=0,e.h&&e.h.za(t),wC(e),fC(e)}L.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Tt(2)):(this.l.info("Failed to ping google.com"),Tt(1))};function wC(e){if(e.H=0,e.ma=[],e.h){const t=sC(e.i);(t.length!=0||e.j.length!=0)&&(C_(e.ma,t),C_(e.ma,e.j),e.i.i.length=0,My(e.j),e.j.length=0),e.h.ya()}}function _C(e,t,n){var r=n instanceof hs?Mr(n):new hs(n);if(r.g!="")t&&(r.g=t+"."+r.g),Bd(r,r.m);else{var i=K.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new hs(null);r&&zd(s,r),t&&(s.g=t),i&&Bd(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&xe(r,n,t),xe(r,"VER",e.ra),bc(e,r),r}function xC(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new Ne(new uf({ob:n})):new Ne(e.va),t.Oa(e.J),t}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function EC(){}L=EC.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Wd(){if(Qo&&!(10<=Number(C$)))throw Error("Environmental error: no available transport.")}Wd.prototype.g=function(e,t){return new Xt(e,t)};function Xt(e,t){Ze.call(this),this.g=new hC(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Hl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Hl(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ma(this)}et(Xt,Ze);Xt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Tt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=_C(e,null,e.Y),pf(e)};Xt.prototype.close=function(){Xy(this.g)};Xt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Fy(e),e=n);t.j.push(new r3(t.fb++,e)),t.H==3&&pf(t)};Xt.prototype.N=function(){this.g.h=null,delete this.j,Xy(this.g),delete this.g,Xt.$.N.call(this)};function IC(e){qy.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}et(IC,qy);function TC(){Gy.call(this),this.status=1}et(TC,Gy);function ma(e){this.g=e}et(ma,EC);ma.prototype.Ba=function(){at(this.g,"a")};ma.prototype.Aa=function(e){at(this.g,new IC(e))};ma.prototype.za=function(e){at(this.g,new TC)};ma.prototype.ya=function(){at(this.g,"b")};function g3(){this.blockSize=-1}function jn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}et(jn,g3);jn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Fp(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}jn.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Fp(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Fp(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Fp(this,r),i=0;break}}this.h=i,this.i+=t};jn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function he(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var m3={};function ev(e){return-128<=e&&128>e?T$(e,function(t){return new he([t|0],0>t?-1:0)}):new he([e|0],0>e?-1:0)}function Gn(e){if(isNaN(e)||!isFinite(e))return To;if(0>e)return rt(Gn(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=jm;return new he(t,0)}function SC(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return rt(SC(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Gn(Math.pow(t,8)),r=To,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Gn(Math.pow(t,s)),r=r.R(s).add(Gn(o))):(r=r.R(n),r=r.add(Gn(o)))}return r}var jm=4294967296,To=ev(0),Mm=ev(1),O_=ev(16777216);L=he.prototype;L.ea=function(){if(ln(this))return-rt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:jm+r)*t,t*=jm}return e};L.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(wr(this))return"0";if(ln(this))return"-"+rt(this).toString(e);for(var t=Gn(Math.pow(e,6)),n=this,r="";;){var i=Gd(n,t).g;n=qd(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,wr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function wr(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ln(e){return e.h==-1}L.X=function(e){return e=qd(this,e),ln(e)?-1:wr(e)?0:1};function rt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new he(n,~e.h).add(Mm)}L.abs=function(){return ln(this)?rt(this):this};L.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new he(n,n[n.length-1]&-2147483648?-1:0)};function qd(e,t){return e.add(rt(t))}L.R=function(e){if(wr(this)||wr(e))return To;if(ln(this))return ln(e)?rt(this).R(rt(e)):rt(rt(this).R(e));if(ln(e))return rt(this.R(rt(e)));if(0>this.X(O_)&&0>e.X(O_))return Gn(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,wu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,wu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,wu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,wu(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new he(n,0)};function wu(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Da(e,t){this.g=e,this.h=t}function Gd(e,t){if(wr(t))throw Error("division by zero");if(wr(e))return new Da(To,To);if(ln(e))return t=Gd(rt(e),t),new Da(rt(t.g),rt(t.h));if(ln(t))return t=Gd(e,rt(t)),new Da(rt(t.g),t.h);if(30<e.g.length){if(ln(e)||ln(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Mm,r=t;0>=r.X(e);)n=V_(n),r=V_(r);var i=Hs(n,1),s=Hs(r,1);for(r=Hs(r,2),n=Hs(n,2);!wr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Hs(r,1),n=Hs(n,1)}return t=qd(e,i.R(t)),new Da(i,t)}for(i=To;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Gn(n),o=s.R(t);ln(o)||0<o.X(e);)n-=r,s=Gn(n),o=s.R(t);wr(s)&&(s=Mm),i=i.add(s),e=qd(e,o)}return new Da(i,e)}L.gb=function(e){return Gd(this,e).h};L.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new he(n,this.h&e.h)};L.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new he(n,this.h|e.h)};L.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new he(n,this.h^e.h)};function V_(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new he(n,e.h)}function Hs(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new he(i,e.h)}Wd.prototype.createWebChannel=Wd.prototype.g;Xt.prototype.send=Xt.prototype.u;Xt.prototype.open=Xt.prototype.m;Xt.prototype.close=Xt.prototype.close;of.NO_ERROR=0;of.TIMEOUT=8;of.HTTP_ERROR=6;zk.COMPLETE="complete";Bk.EventType=Cc;Cc.OPEN="a";Cc.CLOSE="b";Cc.ERROR="c";Cc.MESSAGE="d";Ze.prototype.listen=Ze.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;jn.prototype.digest=jn.prototype.l;jn.prototype.reset=jn.prototype.reset;jn.prototype.update=jn.prototype.j;he.prototype.add=he.prototype.add;he.prototype.multiply=he.prototype.R;he.prototype.modulo=he.prototype.gb;he.prototype.compare=he.prototype.X;he.prototype.toNumber=he.prototype.ea;he.prototype.toString=he.prototype.toString;he.prototype.getBits=he.prototype.D;he.fromNumber=Gn;he.fromString=SC;var y3=function(){return new Wd},v3=function(){return sf()},zp=of,w3=zk,_3=Ls,U_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_u=Bk,x3=Ne,E3=jn,So=he;const F_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new by("@firebase/firestore");function $a(){return Is.logLevel}function U(e,...t){if(Is.logLevel<=re.DEBUG){const n=t.map(tv);Is.debug(`Firestore (${ya}): ${e}`,...n)}}function Lr(e,...t){if(Is.logLevel<=re.ERROR){const n=t.map(tv);Is.error(`Firestore (${ya}): ${e}`,...n)}}function Jl(e,...t){if(Is.logLevel<=re.WARN){const n=t.map(tv);Is.warn(`Firestore (${ya}): ${e}`,...n)}}function tv(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e="Unexpected state"){const t=`FIRESTORE (${ya}) INTERNAL ASSERTION FAILED: `+e;throw Lr(t),new Error(t)}function ye(e,t){e||Q()}function J(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends ar{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class T3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class S3{constructor(t){this.t=t,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new I3(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ye(t===null||typeof t=="string"),new Pt(t)}}class k3{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class C3{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new k3(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A3{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R3{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new A3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P3(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=P3(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function le(e,t){return e<t?-1:e>t?1:0}function Ko(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new D(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new D(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return qe.fromMillis(Date.now())}static fromDate(t){return qe.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?le(this.nanoseconds,t.nanoseconds):le(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Y(t)}static min(){return new Y(new qe(0,0))}static max(){return new Y(new qe(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,n,r){n===void 0?n=0:n>t.length&&Q(),r===void 0?r=t.length-n:r>t.length-n&&Q(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Zl.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Zl?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Ee extends Zl{construct(t,n,r){return new Ee(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const b3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Zl{construct(t,n,r){return new st(t,n,r)}static isValidIdentifier(t){return b3.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(A.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new D(A.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(A.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.path=t}static fromPath(t){return new B(Ee.fromString(t))}static fromName(t){return new B(Ee.fromString(t).popFirst(5))}static empty(){return new B(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ee.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Ee.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new Ee(t.slice()))}}function N3(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new Pi(i,B.empty(),t)}function j3(e){return new Pi(e.readTime,e.key,-1)}class Pi{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Pi(Y.min(),B.empty(),-1)}static max(){return new Pi(Y.max(),B.empty(),-1)}}function M3(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=B.comparator(e.documentKey,t.documentKey),n!==0?n:le(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class D3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(e){if(e.code!==A.FAILED_PRECONDITION||e.message!==L3)throw e;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):R.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):R.reject(n)}static resolve(t){return new R((n,r)=>{n(t)})}static reject(t){return new R((n,r)=>{r(t)})}static waitFor(t){return new R((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=R.resolve(!1);for(const r of t)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new R((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(d=>{o[u]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(t,n){return new R((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function jc(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}nv._e=-1;function gf(e){return e==null}function Qd(e){return e===0&&1/e==-1/0}function $3(e){return typeof e=="number"&&Number.isInteger(e)&&!Qd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ds(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function CC(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,n){this.comparator=t,this.root=n||nt.EMPTY}insert(t,n){return new Pe(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new Pe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xu(this.root,t,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xu(this.root,t,this.comparator,!0)}}class xu{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??nt.RED,this.left=i??nt.EMPTY,this.right=s??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new nt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const t=this.left.check();if(t!==this.right.check())throw Q();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,n,r,i,s){return this}insert(t,n,r){return new nt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.comparator=t,this.data=new Pe(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new B_(this.data.getIterator())}getIteratorFrom(t){return new B_(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new lt(this.comparator);return n.data=t,n}}class B_{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new Wt([])}unionWith(t){let n=new lt(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Wt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ko(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new AC("Invalid base64 string: "+s):s}}(t);return new xt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new xt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return le(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const O3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(e){if(ye(!!e),typeof e=="string"){let t=0;const n=O3.exec(e);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Oe(e.seconds),nanos:Oe(e.nanos)}}function Oe(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ts(e){return typeof e=="string"?xt.fromBase64String(e):xt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function iv(e){const t=e.mapValue.fields.__previous_value__;return rv(t)?iv(t):t}function ec(e){const t=bi(e.mapValue.fields.__local_write_time__.timestampValue);return new qe(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class tc{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new tc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof tc&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ss(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rv(e)?4:U3(e)?9007199254740991:10:Q()}function ir(e,t){if(e===t)return!0;const n=Ss(e);if(n!==Ss(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ec(e).isEqual(ec(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=bi(i.timestampValue),a=bi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Ts(i.bytesValue).isEqual(Ts(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),a=Oe(s.doubleValue);return o===a?Qd(o)===Qd(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ko(e.arrayValue.values||[],t.arrayValue.values||[],ir);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(z_(o)!==z_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ir(o[l],a[l])))return!1;return!0}(e,t);default:return Q()}}function nc(e,t){return(e.values||[]).find(n=>ir(n,t))!==void 0}function Yo(e,t){if(e===t)return 0;const n=Ss(e),r=Ss(t);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Oe(s.integerValue||s.doubleValue),l=Oe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return H_(e.timestampValue,t.timestampValue);case 4:return H_(ec(e),ec(t));case 5:return le(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Ts(s),l=Ts(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=le(a[u],l[u]);if(d!==0)return d}return le(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=le(Oe(s.latitude),Oe(o.latitude));return a!==0?a:le(Oe(s.longitude),Oe(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const d=Yo(a[u],l[u]);if(d)return d}return le(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Eu.mapValue&&o===Eu.mapValue)return 0;if(s===Eu.mapValue)return 1;if(o===Eu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let h=0;h<l.length&&h<d.length;++h){const f=le(l[h],d[h]);if(f!==0)return f;const g=Yo(a[l[h]],u[d[h]]);if(g!==0)return g}return le(l.length,d.length)}(e.mapValue,t.mapValue);default:throw Q()}}function H_(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return le(e,t);const n=bi(e),r=bi(t),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Xo(e){return Lm(e)}function Lm(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=bi(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ts(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return B.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Lm(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Lm(n.fields[o])}`;return i+"}"}(e.mapValue):Q()}function W_(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Dm(e){return!!e&&"integerValue"in e}function sv(e){return!!e&&"arrayValue"in e}function q_(e){return!!e&&"nullValue"in e}function G_(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Qu(e){return!!e&&"mapValue"in e}function ul(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ds(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ul(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ul(e.arrayValue.values[n]);return t}return Object.assign({},e)}function U3(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.value=t}static empty(){return new Nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Qu(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ul(n)}setAll(t){let n=st.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ul(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Qu(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ir(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Qu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Ds(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Nt(ul(this.value))}}function RC(e){const t=[];return Ds(e.fields,(n,r)=>{const i=new st([n]);if(Qu(r)){const s=RC(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new gt(t,0,Y.min(),Y.min(),Y.min(),Nt.empty(),0)}static newFoundDocument(t,n,r,i){return new gt(t,1,n,Y.min(),r,i,0)}static newNoDocument(t,n){return new gt(t,2,n,Y.min(),Y.min(),Nt.empty(),0)}static newUnknownDocument(t,n){return new gt(t,3,n,Y.min(),Y.min(),Nt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,n){this.position=t,this.inclusive=n}}function Q_(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=Yo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function K_(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ir(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,n="asc"){this.field=t,this.dir=n}}function F3(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{}class Fe extends PC{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new B3(t,n,r):n==="array-contains"?new q3(t,r):n==="in"?new G3(t,r):n==="not-in"?new Q3(t,r):n==="array-contains-any"?new K3(t,r):new Fe(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new H3(t,r):new W3(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yo(n,this.value)):n!==null&&Ss(this.value)===Ss(n)&&this.matchesComparison(Yo(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends PC{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Mn(t,n)}matches(t){return bC(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function bC(e){return e.op==="and"}function NC(e){return z3(e)&&bC(e)}function z3(e){for(const t of e.filters)if(t instanceof Mn)return!1;return!0}function $m(e){if(e instanceof Fe)return e.field.canonicalString()+e.op.toString()+Xo(e.value);if(NC(e))return e.filters.map(t=>$m(t)).join(",");{const t=e.filters.map(n=>$m(n)).join(",");return`${e.op}(${t})`}}function jC(e,t){return e instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&ir(r.value,i.value)}(e,t):e instanceof Mn?function(r,i){return i instanceof Mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&jC(o,i.filters[a]),!0):!1}(e,t):void Q()}function MC(e){return e instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${Xo(n.value)}`}(e):e instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(MC).join(" ,")+"}"}(e):"Filter"}class B3 extends Fe{constructor(t,n,r){super(t,n,r),this.key=B.fromName(r.referenceValue)}matches(t){const n=B.comparator(t.key,this.key);return this.matchesComparison(n)}}class H3 extends Fe{constructor(t,n){super(t,"in",n),this.keys=LC("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class W3 extends Fe{constructor(t,n){super(t,"not-in",n),this.keys=LC("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function LC(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class q3 extends Fe{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return sv(n)&&nc(n.arrayValue,this.value)}}class G3 extends Fe{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&nc(this.value.arrayValue,n)}}class Q3 extends Fe{constructor(t,n){super(t,"not-in",n)}matches(t){if(nc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!nc(this.value.arrayValue,n)}}class K3 extends Fe{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!sv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>nc(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Y_(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Y3(e,t,n,r,i,s,o)}function ov(e){const t=J(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>$m(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gf(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Xo(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Xo(r)).join(",")),t.ce=n}return t.ce}function av(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!F3(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!jC(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!K_(e.startAt,t.startAt)&&K_(e.endAt,t.endAt)}function Om(e){return B.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function X3(e,t,n,r,i,s,o,a){return new va(e,t,n,r,i,s,o,a)}function mf(e){return new va(e)}function X_(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function DC(e){return e.collectionGroup!==null}function dl(e){const t=J(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new lt(st.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new rc(s,r))}),n.has(st.keyField().canonicalString())||t.le.push(new rc(st.keyField(),r))}return t.le}function Zn(e){const t=J(e);return t.he||(t.he=J3(t,dl(e))),t.he}function J3(e,t){if(e.limitType==="F")return Y_(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new rc(i.field,s)});const n=e.endAt?new Kd(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Kd(e.startAt.position,e.startAt.inclusive):null;return Y_(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Vm(e,t){const n=e.filters.concat([t]);return new va(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Yd(e,t,n){return new va(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function yf(e,t){return av(Zn(e),Zn(t))&&e.limitType===t.limitType}function $C(e){return`${ov(Zn(e))}|lt:${e.limitType}`}function Gs(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>MC(i)).join(", ")}]`),gf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xo(i)).join(",")),`Target(${r})`}(Zn(e))}; limitType=${e.limitType})`}function vf(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of dl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Q_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,dl(r),i)||r.endAt&&!function(o,a,l){const u=Q_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,dl(r),i))}(e,t)}function Z3(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function OC(e){return(t,n)=>{let r=!1;for(const i of dl(e)){const s=eO(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eO(e,t,n){const r=e.field.isKeyField()?B.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Yo(l,u):Q()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ds(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return CC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new Pe(B.comparator);function Dr(){return tO}const VC=new Pe(B.comparator);function Qa(...e){let t=VC;for(const n of e)t=t.insert(n.key,n);return t}function UC(e){let t=VC;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function os(){return hl()}function FC(){return hl()}function hl(){return new wa(e=>e.toString(),(e,t)=>e.isEqual(t))}const nO=new Pe(B.comparator),rO=new lt(B.comparator);function te(...e){let t=rO;for(const n of e)t=t.add(n);return t}const iO=new lt(le);function sO(){return iO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qd(t)?"-0":t}}function BC(e){return{integerValue:""+e}}function HC(e,t){return $3(t)?BC(t):zC(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this._=void 0}}function oO(e,t,n){return e instanceof Xd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&rv(s)&&(s=iv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Jo?qC(e,t):e instanceof ic?GC(e,t):function(i,s){const o=WC(i,s),a=J_(o)+J_(i.Ie);return Dm(o)&&Dm(i.Ie)?BC(a):zC(i.serializer,a)}(e,t)}function aO(e,t,n){return e instanceof Jo?qC(e,t):e instanceof ic?GC(e,t):n}function WC(e,t){return e instanceof sc?function(r){return Dm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Xd extends wf{}class Jo extends wf{constructor(t){super(),this.elements=t}}function qC(e,t){const n=QC(t);for(const r of e.elements)n.some(i=>ir(i,r))||n.push(r);return{arrayValue:{values:n}}}class ic extends wf{constructor(t){super(),this.elements=t}}function GC(e,t){let n=QC(t);for(const r of e.elements)n=n.filter(i=>!ir(i,r));return{arrayValue:{values:n}}}class sc extends wf{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function J_(e){return Oe(e.integerValue||e.doubleValue)}function QC(e){return sv(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(t,n){this.field=t,this.transform=n}}function lO(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Jo&&i instanceof Jo||r instanceof ic&&i instanceof ic?Ko(r.elements,i.elements,ir):r instanceof sc&&i instanceof sc?ir(r.Ie,i.Ie):r instanceof Xd&&i instanceof Xd}(e.transform,t.transform)}class cO{constructor(t,n){this.version=t,this.transformResults=n}}class er{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new er}static exists(t){return new er(void 0,t)}static updateTime(t){return new er(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ku(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class _f{}function YC(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new JC(e.key,er.none()):new Mc(e.key,e.data,er.none());{const n=e.data,r=Nt.empty();let i=new lt(st.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zi(e.key,r,new Wt(i.toArray()),er.none())}}function uO(e,t,n){e instanceof Mc?function(i,s,o){const a=i.value.clone(),l=ex(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof zi?function(i,s,o){if(!Ku(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ex(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(XC(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function fl(e,t,n,r){return e instanceof Mc?function(s,o,a,l){if(!Ku(s.precondition,o))return a;const u=s.value.clone(),d=tx(s.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof zi?function(s,o,a,l){if(!Ku(s.precondition,o))return a;const u=tx(s.fieldTransforms,l,o),d=o.data;return d.setAll(XC(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Ku(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function dO(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=WC(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function Z_(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ko(r,i,(s,o)=>lO(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Mc extends _f{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zi extends _f{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function XC(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ex(e,t,n){const r=new Map;ye(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,aO(o,a,n[i]))}return r}function tx(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,oO(s,o,t))}return r}class JC extends _f{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hO extends _f{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&uO(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=fl(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=fl(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=FC();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=YC(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),te())}isEqual(t){return this.batchId===t.batchId&&Ko(this.mutations,t.mutations,(n,r)=>Z_(n,r))&&Ko(this.baseMutations,t.baseMutations,(n,r)=>Z_(n,r))}}class lv{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){ye(t.mutations.length===r.length);let i=function(){return nO}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new lv(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pO=class{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ie;function mO(e){switch(e){default:return Q();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function ZC(e){if(e===void 0)return Lr("GRPC error has no .code"),A.UNKNOWN;switch(e){case De.OK:return A.OK;case De.CANCELLED:return A.CANCELLED;case De.UNKNOWN:return A.UNKNOWN;case De.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case De.INTERNAL:return A.INTERNAL;case De.UNAVAILABLE:return A.UNAVAILABLE;case De.UNAUTHENTICATED:return A.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case De.NOT_FOUND:return A.NOT_FOUND;case De.ALREADY_EXISTS:return A.ALREADY_EXISTS;case De.PERMISSION_DENIED:return A.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case De.ABORTED:return A.ABORTED;case De.OUT_OF_RANGE:return A.OUT_OF_RANGE;case De.UNIMPLEMENTED:return A.UNIMPLEMENTED;case De.DATA_LOSS:return A.DATA_LOSS;default:return Q()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=new So([4294967295,4294967295],0);function nx(e){const t=yO().encode(e),n=new E3;return n.update(t),new Uint8Array(n.digest())}function rx(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new So([n,r],0),new So([i,s],0)]}class cv{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ka(`Invalid padding: ${n}`);if(r<0)throw new Ka(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ka(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ka(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=So.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(So.fromNumber(r)));return i.compare(vO)===1&&(i=new So([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=nx(t),[r,i]=rx(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new cv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=nx(t),[r,i]=rx(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Lc.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new xf(Y.min(),i,new Pe(le),Dr(),te())}}class Lc{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Lc(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class eA{constructor(t,n){this.targetId=t,this.fe=n}}class tA{constructor(t,n,r=xt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ix{constructor(){this.ge=0,this.pe=ox(),this.ye=xt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=te(),n=te(),r=te();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Lc(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=ox()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,ye(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class wO{constructor(t){this.Le=t,this.ke=new Map,this.qe=Dr(),this.Qe=sx(),this.Ke=new Pe(le)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:Q()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Om(s))if(r===0){const o=new B(s.path);this.We(n,o,gt.newNoDocument(o,Y.min()))}else ye(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ts(r).toUint8Array()}catch(l){if(l instanceof AC)return Jl("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new cv(o,i,s)}catch(l){return Jl(l instanceof Ka?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Om(a.target)){const l=new B(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,gt.newNoDocument(l,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=te();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new xf(t,n,this.Ke,this.qe,r);return this.qe=Dr(),this.Qe=sx(),this.Ke=new Pe(le),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new ix,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new lt(le),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||U("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new ix),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function sx(){return new Pe(B.comparator)}function ox(){return new Pe(B.comparator)}const _O={asc:"ASCENDING",desc:"DESCENDING"},xO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},EO={and:"AND",or:"OR"};class IO{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Um(e,t){return e.useProto3Json||gf(t)?t:{value:t}}function Jd(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nA(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function TO(e,t){return Jd(e,t.toTimestamp())}function tr(e){return ye(!!e),Y.fromTimestamp(function(n){const r=bi(n);return new qe(r.seconds,r.nanos)}(e))}function uv(e,t){return function(r){return new Ee(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function rA(e){const t=Ee.fromString(e);return ye(aA(t)),t}function Fm(e,t){return uv(e.databaseId,t.path)}function Bp(e,t){const n=rA(t);if(n.get(1)!==e.databaseId.projectId)throw new D(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new D(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new B(iA(n))}function zm(e,t){return uv(e.databaseId,t)}function SO(e){const t=rA(e);return t.length===4?Ee.emptyPath():iA(t)}function Bm(e){return new Ee(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iA(e){return ye(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ax(e,t,n){return{name:Fm(e,t),fields:n.value.mapValue.fields}}function kO(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(ye(d===void 0||typeof d=="string"),xt.fromBase64String(d||"")):(ye(d===void 0||d instanceof Uint8Array),xt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const d=u.code===void 0?A.UNKNOWN:ZC(u.code);return new D(d,u.message||"")}(o);n=new tA(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bp(e,r.document.name),s=tr(r.document.updateTime),o=r.document.createTime?tr(r.document.createTime):Y.min(),a=new Nt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(i,s,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Yu(u,d,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Bp(e,r.document),s=r.readTime?tr(r.readTime):Y.min(),o=gt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Yu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Bp(e,r.document),s=r.removedTargetIds||[];n=new Yu([],s,i,null)}else{if(!("filter"in t))return Q();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gO(i,s),a=r.targetId;n=new eA(a,o)}}return n}function CO(e,t){let n;if(t instanceof Mc)n={update:ax(e,t.key,t.value)};else if(t instanceof JC)n={delete:Fm(e,t.key)};else if(t instanceof zi)n={update:ax(e,t.key,t.data),updateMask:DO(t.fieldMask)};else{if(!(t instanceof hO))return Q();n={verify:Fm(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Xd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ic)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Q()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:TO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(e,t.precondition)),n}function AO(e,t){return e&&e.length>0?(ye(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?tr(i.updateTime):tr(s);return o.isEqual(Y.min())&&(o=tr(s)),new cO(o,i.transformResults||[])}(n,t))):[]}function RO(e,t){return{documents:[zm(e,t.path)]}}function PO(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=zm(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=zm(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return oA(Mn.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Qs(h.field),direction:jO(h.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Um(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function bO(e){let t=SO(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let s=[];n.where&&(s=function(h){const f=sA(h);return f instanceof Mn&&NC(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(m){return new rc(Ks(m.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,gf(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,g=h.values||[];return new Kd(g,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,g=h.values||[];return new Kd(g,f)}(n.endAt)),X3(t,i,o,s,a,"F",l,u)}function NO(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function sA(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ks(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ks(n.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ks(n.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ks(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(e):e.fieldFilter!==void 0?function(n){return Fe.create(Ks(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(r=>sA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(e):Q()}function jO(e){return _O[e]}function MO(e){return xO[e]}function LO(e){return EO[e]}function Qs(e){return{fieldPath:e.canonicalString()}}function Ks(e){return st.fromServerFormat(e.fieldPath)}function oA(e){return e instanceof Fe?function(n){if(n.op==="=="){if(G_(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NAN"}};if(q_(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(G_(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NAN"}};if(q_(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(n.field),op:MO(n.op),value:n.value}}}(e):e instanceof Mn?function(n){const r=n.getFilters().map(i=>oA(i));return r.length===1?r[0]:{compositeFilter:{op:LO(n.op),filters:r}}}(e):Q()}function DO(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function aA(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t,n,r,i,s=Y.min(),o=Y.min(),a=xt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new li(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(t){this.ut=t}}function OO(e){const t=bO({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Yd(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.on=new UO}addToCollectionParentIndex(t,n){return this.on.add(n),R.resolve()}getCollectionParents(t,n){return R.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return R.resolve()}deleteFieldIndex(t,n){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,n){return R.resolve()}getDocumentsMatchingTarget(t,n){return R.resolve(null)}getIndexType(t,n){return R.resolve(0)}getFieldIndexes(t,n){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,n){return R.resolve(Pi.min())}getMinOffsetFromCollectionGroup(t,n){return R.resolve(Pi.min())}updateCollectionGroup(t,n,r){return R.resolve()}updateIndexEntries(t,n){return R.resolve()}}class UO{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new lt(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new lt(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Zo(0)}static Nn(){return new Zo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.changes=new wa(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&fl(r.mutation,i,Wt.empty(),qe.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,te()).next(()=>r))}getLocalViewOfDocuments(t,n,r=te()){const i=os();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Qa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=os();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,te()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Dr();const o=hl(),a=function(){return hl()}();return n.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof zi)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),fl(d.mutation,u,d.mutation.getFieldMask(),qe.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var h;return a.set(u,new zO(d,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=hl();let i=new Pe((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Wt.empty();d=a.applyToLocalView(u,d),r.set(l,d);const h=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,h=FC();d.forEach(f=>{if(!s.has(f)){const g=YC(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):DC(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):R.resolve(os());let a=-1,l=s;return o.next(u=>R.forEach(u,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(d)?R.resolve():this.remoteDocumentCache.getEntry(t,d).next(f=>{l=l.insert(d,f)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,te())).next(d=>({batchId:a,changes:UC(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new B(n)).next(r=>{let i=Qa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=Qa();return this.indexManager.getCollectionParents(t,s).next(a=>R.forEach(a,l=>{const u=function(h,f){return new va(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(d=>{d.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,gt.newInvalidDocument(d)))});let a=Qa();return o.forEach((l,u)=>{const d=s.get(l);d!==void 0&&fl(d.mutation,u,Wt.empty(),qe.now()),vf(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return R.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:tr(i.createTime)}}(n)),R.resolve()}getNamedQuery(t,n){return R.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:OO(i.bundledQuery),readTime:tr(i.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(){this.overlays=new Pe(B.comparator),this.lr=new Map}getOverlay(t,n){return R.resolve(this.overlays.get(n))}getOverlays(t,n){const r=os();return R.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.lt(t,n,s)}),R.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),R.resolve()}getOverlaysForCollection(t,n,r){const i=os(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Pe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=os(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=os(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return R.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pO(n,r));let s=this.lr.get(n);s===void 0&&(s=te(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.hr=new lt(Qe.Pr),this.Ir=new lt(Qe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new Qe(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new Qe(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new B(new Ee([])),r=new Qe(n,t),i=new Qe(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new B(new Ee([])),r=new Qe(n,t),i=new Qe(n,t+1);let s=te();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Qe(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Qe{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return B.comparator(t.key,n.key)||le(t.gr,n.gr)}static Tr(t,n){return le(t.gr,n.gr)||B.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new lt(Qe.Pr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Qe(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(t,n){return R.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Qe(n,0),i=new Qe(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new lt(le);return n.forEach(i=>{const s=new Qe(i,0),o=new Qe(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),R.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new Qe(new B(s),0);let a=new lt(le);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),R.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){ye(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return R.forEach(n.mutations,i=>{const s=new Qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new Qe(n,0),i=this.yr.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(t){this.Cr=t,this.docs=function(){return new Pe(B.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(t,n){let r=Dr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Dr();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||M3(j3(d),r)<=0||(i.has(d.key)||vf(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(t,n,r,i){Q()}vr(t,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new QO(this)}getSize(t){return R.resolve(this.size)}}class QO extends FO{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),R.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(t){this.persistence=t,this.Fr=new wa(n=>ov(n),av),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Mr=0,this.Or=new dv,this.targetCount=0,this.Nr=Zo.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),R.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new Zo(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,R.resolve()}updateTargetData(t,n){return this.kn(n),R.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return R.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),R.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),R.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return R.resolve(r)}containsKey(t,n){return R.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(t,n){this.Br={},this.overlays={},this.Lr=new nv(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new KO(this),this.indexManager=new VO,this.remoteDocumentCache=function(i){return new GO(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new $O(n),this.Kr=new HO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new WO,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new qO(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){U("MemoryPersistence","Starting transaction:",t);const i=new XO(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class XO extends D3{constructor(t){super(),this.currentSequenceNumber=t}}class hv{constructor(t){this.persistence=t,this.Gr=new dv,this.zr=null}static jr(t){return new hv(t)}get Hr(){if(this.zr)return this.zr;throw Q()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),R.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),R.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Hr,r=>{const i=B.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return R.or([()=>R.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new fv(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.zi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new JO;return this.Hi(t,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>s.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?($a()<=re.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),R.resolve()):($a()<=re.DEBUG&&U("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?($a()<=re.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Zn(n))):R.resolve())}zi(t,n){if(X_(n))return R.resolve(null);let r=Zn(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yd(n,null,"F"),r=Zn(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=te(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(t,Yd(n,null,"F")):this.Xi(t,u,n,l)}))})))}ji(t,n,r,i){return X_(n)||i.isEqual(Y.min())?R.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?R.resolve(null):($a()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gs(n)),this.Xi(t,o,n,N3(i,-1)).next(a=>a))})}Yi(t,n){let r=new lt(OC(t));return n.forEach((i,s)=>{vf(t,s)&&(r=r.add(s))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,n,r){return $a()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.Gi.getDocumentsMatchingQuery(t,n,Pi.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new Pe(le),this.ns=new wa(s=>ov(s),av),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new BO(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function t5(e,t,n,r){return new e5(e,t,n,r)}async function lA(e,t){const n=J(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function n5(e,t){const n=J(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const h=u.batch,f=h.keys();let g=R.resolve();return f.forEach(m=>{g=g.next(()=>d.getEntry(l,m)).next(w=>{const _=u.docVersions.get(m);ye(_!==null),w.version.compareTo(_)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),d.addEntry(w)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function cA(e){const t=J(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function r5(e,t){const n=J(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];t.targetChanges.forEach((d,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(s,d.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,d.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(xt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),i=i.insert(h,g),function(w,_,p){return w.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(f,g,d)&&a.push(n.qr.updateTargetData(s,g))});let l=Dr(),u=te();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(i5(s,o,t.documentUpdates).next(d=>{l=d.us,u=d.cs})),!r.isEqual(Y.min())){const d=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function i5(e,t,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Dr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function s5(e,t){const n=J(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function o5(e,t){const n=J(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,t).next(s=>s?(i=s,R.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new li(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function Hm(e,t,n){const r=J(e),i=r.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!jc(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function lx(e,t,n){const r=J(e);let i=Y.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const h=J(l),f=h.ns.get(d);return f!==void 0?R.resolve(h.ts.get(f)):h.qr.getTargetData(u,d)}(r,o,Zn(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?i:Y.min(),n?s:te())).next(a=>(a5(r,Z3(t),a),{documents:a,ls:s})))}function a5(e,t,n){let r=e.rs.get(t)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.rs.set(t,r)}class cx{constructor(){this.activeTargetIds=sO()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class l5{constructor(){this.eo=new cx,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new cx,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c5{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu=null;function Hp(){return Iu===null?Iu=function(){return 268435456+Math.round(2147483648*Math.random())}():Iu++,"0x"+Iu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d5{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class h5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Hp(),l=this.So(n,r);U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(d=>(U("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Jl("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ya}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=u5[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const s=Hp();return new Promise((o,a)=>{const l=new x3;l.setWithCredentials(!0),l.listenOnce(w3.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case zp.NO_ERROR:const d=l.getResponseJson();U(ht,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(d)),o(d);break;case zp.TIMEOUT:U(ht,`RPC '${t}' ${s} timed out`),a(new D(A.DEADLINE_EXCEEDED,"Request time out"));break;case zp.HTTP_ERROR:const h=l.getStatus();if(U(ht,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const m=function(_){const p=_.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(p)>=0?p:A.UNKNOWN}(g.status);a(new D(m,g.message))}else a(new D(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(A.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{U(ht,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);U(ht,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(t,n,r){const i=Hp(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=y3(),a=v3(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");U(ht,`Creating RPC '${t}' stream ${i}: ${d}`,l);const h=o.createWebChannel(d,l);let f=!1,g=!1;const m=new d5({co:_=>{g?U(ht,`Not sending because RPC '${t}' stream ${i} is closed:`,_):(f||(U(ht,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),U(ht,`RPC '${t}' stream ${i} sending:`,_),h.send(_))},lo:()=>h.close()}),w=(_,p,y)=>{_.listen(p,v=>{try{y(v)}catch(E){setTimeout(()=>{throw E},0)}})};return w(h,_u.EventType.OPEN,()=>{g||U(ht,`RPC '${t}' stream ${i} transport opened.`)}),w(h,_u.EventType.CLOSE,()=>{g||(g=!0,U(ht,`RPC '${t}' stream ${i} transport closed`),m.Ro())}),w(h,_u.EventType.ERROR,_=>{g||(g=!0,Jl(ht,`RPC '${t}' stream ${i} transport errored:`,_),m.Ro(new D(A.UNAVAILABLE,"The operation could not be completed")))}),w(h,_u.EventType.MESSAGE,_=>{var p;if(!g){const y=_.data[0];ye(!!y);const v=y,E=v.error||((p=v[0])===null||p===void 0?void 0:p.error);if(E){U(ht,`RPC '${t}' stream ${i} received error:`,E);const S=E.status;let k=function(N){const F=De[N];if(F!==void 0)return ZC(F)}(S),I=E.message;k===void 0&&(k=A.INTERNAL,I="Unknown error status: "+S+" with message "+E.message),g=!0,m.Ro(new D(k,I)),h.close()}else U(ht,`RPC '${t}' stream ${i} received:`,y),m.Vo(y)}}),w(a,_3.STAT_EVENT,_=>{_.stat===U_.PROXY?U(ht,`RPC '${t}' stream ${i} detected buffering proxy`):_.stat===U_.NOPROXY&&U(ht,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function Wp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(e){return new IO(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(t,n,r,i,s,o,a,l){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new uA(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Lr(n.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new D(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return U("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class f5 extends dA{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=kO(this.serializer,t),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?tr(o.readTime):Y.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=Bm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Om(l)?{documents:RO(s,l)}:{query:PO(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=nA(s,o.resumeToken);const u=Um(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Jd(s,o.snapshotVersion.toTimestamp());const u=Um(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=NO(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=Bm(this.serializer),n.removeTarget=t,this.e_(n)}}class p5 extends dA{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(ye(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=AO(t.writeResults,t.commitTime),r=tr(t.commitTime);return this.listener.I_(r,n)}return ye(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Bm(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>CO(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g5 extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new D(A.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(A.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(A.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class m5{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Lr(n),this.f_=!1):U("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y5{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{$s(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=J(l);u.C_.add(4),await Dc(u),u.M_.set("Unknown"),u.C_.delete(4),await If(u)}(this))})}),this.M_=new m5(r,i)}}async function If(e){if($s(e))for(const t of e.v_)await t(!0)}async function Dc(e){for(const t of e.v_)await t(!1)}function hA(e,t){const n=J(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),mv(n)?gv(n):_a(n).Ho()&&pv(n,t))}function fA(e,t){const n=J(e),r=_a(n);n.D_.delete(t),r.Ho()&&pA(n,t),n.D_.size===0&&(r.Ho()?r.Zo():$s(n)&&n.M_.set("Unknown"))}function pv(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Y.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}_a(e).u_(t)}function pA(e,t){e.x_.Oe(t),_a(e).c_(t)}function gv(e){e.x_=new wO({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),_a(e).start(),e.M_.g_()}function mv(e){return $s(e)&&!_a(e).jo()&&e.D_.size>0}function $s(e){return J(e).C_.size===0}function gA(e){e.x_=void 0}async function v5(e){e.D_.forEach((t,n)=>{pv(e,t)})}async function w5(e,t){gA(e),mv(e)?(e.M_.w_(t),gv(e)):e.M_.set("Unknown")}async function _5(e,t,n){if(e.M_.set("Online"),t instanceof tA&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(e,t)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Zd(e,r)}else if(t instanceof Yu?e.x_.$e(t):t instanceof eA?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(Y.min()))try{const r=await cA(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.D_.get(u);d&&s.D_.set(u,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const d=s.D_.get(l);if(!d)return;s.D_.set(l,d.withResumeToken(xt.EMPTY_BYTE_STRING,d.snapshotVersion)),pA(s,l);const h=new li(d.target,l,u,d.sequenceNumber);pv(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Zd(e,r)}}async function Zd(e,t,n){if(!jc(t))throw t;e.C_.add(1),await Dc(e),e.M_.set("Offline"),n||(n=()=>cA(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await If(e)})}function mA(e,t){return t().catch(n=>Zd(e,n,t))}async function Tf(e){const t=J(e),n=Ni(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;x5(t);)try{const i=await s5(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,E5(t,i)}catch(i){await Zd(t,i)}yA(t)&&vA(t)}function x5(e){return $s(e)&&e.b_.length<10}function E5(e,t){e.b_.push(t);const n=Ni(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function yA(e){return $s(e)&&!Ni(e).jo()&&e.b_.length>0}function vA(e){Ni(e).start()}async function I5(e){Ni(e).E_()}async function T5(e){const t=Ni(e);for(const n of e.b_)t.P_(n.mutations)}async function S5(e,t,n){const r=e.b_.shift(),i=lv.from(r,t,n);await mA(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Tf(e)}async function k5(e,t){t&&Ni(e).h_&&await async function(r,i){if(function(o){return mO(o)&&o!==A.ABORTED}(i.code)){const s=r.b_.shift();Ni(r).Yo(),await mA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Tf(r)}}(e,t),yA(e)&&vA(e)}async function dx(e,t){const n=J(e);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=$s(n);n.C_.add(3),await Dc(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await If(n)}async function C5(e,t){const n=J(e);t?(n.C_.delete(2),await If(n)):t||(n.C_.add(2),await Dc(n),n.M_.set("Unknown"))}function _a(e){return e.O_||(e.O_=function(n,r,i){const s=J(n);return s.A_(),new f5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:v5.bind(null,e),Io:w5.bind(null,e),a_:_5.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),mv(e)?gv(e):e.M_.set("Unknown")):(await e.O_.stop(),gA(e))})),e.O_}function Ni(e){return e.N_||(e.N_=function(n,r,i){const s=J(n);return s.A_(),new p5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:I5.bind(null,e),Io:k5.bind(null,e),T_:T5.bind(null,e),I_:S5.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Tf(e)):(await e.N_.stop(),e.b_.length>0&&(U("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new yv(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(A.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vv(e,t){if(Lr("AsyncQueue",`${t}: ${e}`),jc(e))return new D(A.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t){this.comparator=t?(n,r)=>t(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=Qa(),this.sortedSet=new Pe(this.comparator)}static emptySet(t){return new ko(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ko)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ko;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(){this.B_=new Pe(B.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):Q():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ea{constructor(t,n,r,i,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ea(t,n,ko.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yf(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A5{constructor(){this.k_=void 0,this.listeners=[]}}class R5{constructor(){this.queries=new wa(t=>$C(t),yf),this.onlineState="Unknown",this.q_=new Set}}async function wv(e,t){const n=J(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new A5),i)try{s.k_=await n.onListen(r)}catch(o){const a=vv(o,`Initialization of query '${Gs(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.Q_(n.onlineState),s.k_&&t.K_(s.k_)&&xv(n)}async function _v(e,t){const n=J(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function P5(e,t){const n=J(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&xv(n)}function b5(e,t,n){const r=J(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function xv(e){e.q_.forEach(t=>{t.next()})}class Ev{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ea(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=ea.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(t){this.key=t}}class _A{constructor(t){this.key=t}}class N5{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=te(),this.mutatedKeys=te(),this._a=OC(t),this.aa=new ko(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new hx,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,h)=>{const f=i.get(d),g=vf(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let _=!1;f&&g?f.data.isEqual(g.data)?m!==w&&(r.track({type:3,doc:g}),_=!0):this.ha(f,g)||(r.track({type:2,doc:g}),_=!0,(l&&this._a(g,l)>0||u&&this._a(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),_=!0):f&&!g&&(r.track({type:1,doc:f}),_=!0,(l||u)&&(a=!0)),_&&(g?(o=o.add(g),s=w?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const o=t.la.L_();o.sort((d,h)=>function(g,m){const w=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return w(g)-w(m)}(d.type,h.type)||this._a(d.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new ea(this.query,t.aa,s,o,t.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new hx,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=te(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new _A(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new wA(r))}),n}da(t){this.ia=t.ls,this.oa=te();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return ea.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class j5{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class M5{constructor(t){this.key=t,this.Ra=!1}}class L5{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new wa(a=>$C(a),yf),this.fa=new Map,this.ga=new Set,this.pa=new Pe(B.comparator),this.ya=new Map,this.wa=new dv,this.Sa={},this.ba=new Map,this.Da=Zo.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function D5(e,t){const n=q5(e);let r,i;const s=n.ma.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await o5(n.localStore,Zn(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await $5(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&hA(n.remoteStore,o)}return i}async function $5(e,t,n,r,i){e.va=(h,f,g)=>async function(w,_,p,y){let v=_.view.ca(p);v.Zi&&(v=await lx(w.localStore,_.query,!1).then(({documents:I})=>_.view.ca(I,v)));const E=y&&y.targetChanges.get(_.targetId),S=y&&y.targetMismatches.get(_.targetId)!=null,k=_.view.applyChanges(v,w.isPrimaryClient,E,S);return px(w,_.targetId,k.Ta),k.snapshot}(e,h,f,g);const s=await lx(e.localStore,t,!0),o=new N5(t,s.ls),a=o.ca(s.documents),l=Lc.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,l);px(e,n,u.Ta);const d=new j5(t,n,o);return e.ma.set(t,d),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),u.snapshot}async function O5(e,t){const n=J(e),r=n.ma.get(t),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!yf(s,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Hm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),fA(n.remoteStore,r.targetId),Wm(n,r.targetId)}).catch(Nc)):(Wm(n,r.targetId),await Hm(n.localStore,r.targetId,!0))}async function V5(e,t,n){const r=G5(e);try{const i=await function(o,a){const l=J(o),u=qe.now(),d=a.reduce((g,m)=>g.add(m.key),te());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let m=Dr(),w=te();return l.ss.getEntries(g,d).next(_=>{m=_,m.forEach((p,y)=>{y.isValidDocument()||(w=w.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,m)).next(_=>{h=_;const p=[];for(const y of a){const v=dO(y,h.get(y.key).overlayedDocument);v!=null&&p.push(new zi(y.key,v,RC(v.value.mapValue),er.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,p,a)}).next(_=>{f=_;const p=_.applyToLocalDocumentSet(h,w);return l.documentOverlayCache.saveOverlays(g,_.batchId,p)})}).then(()=>({batchId:f.batchId,changes:UC(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new Pe(le)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await $c(r,i.changes),await Tf(r.remoteStore)}catch(i){const s=vv(i,"Failed to persist write");n.reject(s)}}async function xA(e,t){const n=J(e);try{const r=await r5(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?ye(o.Ra):i.removedDocuments.size>0&&(ye(o.Ra),o.Ra=!1))}),await $c(n,r,t)}catch(r){await Nc(r)}}function fx(e,t,n){const r=J(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=J(o);l.onlineState=a;let u=!1;l.queries.forEach((d,h)=>{for(const f of h.listeners)f.Q_(a)&&(u=!0)}),u&&xv(l)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function U5(e,t,n){const r=J(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new Pe(B.comparator);o=o.insert(s,gt.newNoDocument(s,Y.min()));const a=te().add(s),l=new xf(Y.min(),new Map,new Pe(le),o,a);await xA(r,l),r.pa=r.pa.remove(s),r.ya.delete(t),Iv(r)}else await Hm(r.localStore,t,!1).then(()=>Wm(r,t,n)).catch(Nc)}async function F5(e,t){const n=J(e),r=t.batch.batchId;try{const i=await n5(n.localStore,t);IA(n,r,null),EA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $c(n,i)}catch(i){await Nc(i)}}async function z5(e,t,n){const r=J(e);try{const i=await function(o,a){const l=J(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ye(h!==null),d=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,t);IA(r,t,n),EA(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await $c(r,i)}catch(i){await Nc(i)}}function EA(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function IA(e,t,n){const r=J(e);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function Wm(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||TA(e,r)})}function TA(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(fA(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),Iv(e))}function px(e,t,n){for(const r of n)r instanceof wA?(e.wa.addReference(r.key,t),B5(e,r)):r instanceof _A?(U("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||TA(e,r.key)):Q()}function B5(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(U("SyncEngine","New document in limbo: "+n),e.ga.add(r),Iv(e))}function Iv(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new B(Ee.fromString(t)),r=e.Da.next();e.ya.set(r,new M5(n)),e.pa=e.pa.insert(n,r),hA(e.remoteStore,new li(Zn(mf(n.path)),r,"TargetPurposeLimboResolution",nv._e))}}async function $c(e,t,n){const r=J(e),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const d=fv.Qi(l.targetId,u);s.push(d)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const d=J(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(u,f=>R.forEach(f.ki,g=>d.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>R.forEach(f.qi,g=>d.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!jc(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const g=d.ts.get(f),m=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(m);d.ts=d.ts.insert(f,w)}}}(r.localStore,s))}async function H5(e,t){const n=J(e);if(!n.currentUser.isEqual(t)){U("SyncEngine","User change. New user:",t.toKey());const r=await lA(n.localStore,t);n.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new D(A.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await $c(n,r._s)}}function W5(e,t){const n=J(e),r=n.ya.get(t);if(r&&r.Ra)return te().add(r.key);{let i=te();const s=n.fa.get(t);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function q5(e){const t=J(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=xA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=W5.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=U5.bind(null,t),t.Va.a_=P5.bind(null,t.eventManager),t.Va.Fa=b5.bind(null,t.eventManager),t}function G5(e){const t=J(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=F5.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=z5.bind(null,t),t}class gx{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ef(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return t5(this.persistence,new ZO,t.initialUser,this.serializer)}createPersistence(t){return new YO(hv.jr,this.serializer)}createSharedClientState(t){return new l5}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Q5{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fx(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=H5.bind(null,this.syncEngine),await C5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new R5}()}createDatastore(t){const n=Ef(t.databaseInfo.databaseId),r=function(s){return new h5(s)}(t.databaseInfo);return function(s,o,a,l){return new g5(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new y5(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>fx(this.syncEngine,n,0),function(){return ux.D()?new ux:new c5}())}createSyncEngine(t,n){return function(i,s,o,a,l,u,d){const h=new L5(i,s,o,a,l,u);return d&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=J(n);U("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Dc(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Lr("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K5{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=kC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=vv(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function qp(e,t){e.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lA(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function mx(e,t){e.asyncQueue.verifyOperationInProgress();const n=await X5(e);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>dx(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>dx(t.remoteStore,s)),e._onlineComponents=t}function Y5(e){return e.name==="FirebaseError"?e.code===A.FAILED_PRECONDITION||e.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function X5(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await qp(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Y5(n))throw n;Jl("Error using user provided cache. Falling back to memory cache: "+n),await qp(e,new gx)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await qp(e,new gx);return e._offlineComponents}async function SA(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await mx(e,e._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await mx(e,new Q5))),e._onlineComponents}function J5(e){return SA(e).then(t=>t.syncEngine)}async function eh(e){const t=await SA(e),n=t.eventManager;return n.onListen=D5.bind(null,t.syncEngine),n.onUnlisten=O5.bind(null,t.syncEngine),n}function Z5(e,t,n={}){const r=new kr;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new Tv({next:f=>{o.enqueueAndForget(()=>_v(s,h));const g=f.docs.has(a);!g&&f.fromCache?u.reject(new D(A.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&l&&l.source==="server"?u.reject(new D(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new Ev(mf(a.path),d,{includeMetadataChanges:!0,J_:!0});return wv(s,h)}(await eh(e),e.asyncQueue,t,n,r)),r.promise}function eV(e,t,n={}){const r=new kr;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new Tv({next:f=>{o.enqueueAndForget(()=>_v(s,h)),f.fromCache&&l.source==="server"?u.reject(new D(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new Ev(a,d,{includeMetadataChanges:!0,J_:!0});return wv(s,h)}(await eh(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(e,t,n){if(!n)throw new D(A.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function tV(e,t,n,r){if(t===!0&&r===!0)throw new D(A.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function vx(e){if(!B.isDocumentKey(e))throw new D(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function wx(e){if(B.isDocumentKey(e))throw new D(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Sf(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Q()}function kn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new D(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sf(e);throw new D(A.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function nV(e,t){if(t<=0)throw new D(A.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new D(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new D(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tV("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kA((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Sv{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _x({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new D(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _x(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new T3;switch(r.type){case"firstParty":return new C3(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yx.get(n);r&&(U("ComponentProvider","Removing Datastore"),yx.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Hr(this.firestore,t,this._query)}}class vt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new vt(this.firestore,t,this._key)}}class Ei extends Hr{constructor(t,n,r){super(t,n,mf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new vt(this.firestore,null,new B(t))}withConverter(t){return new Ei(this.firestore,t,this._path)}}function xx(e,t,...n){if(e=Be(e),CA("collection","path",t),e instanceof Sv){const r=Ee.fromString(t,...n);return wx(r),new Ei(e,null,r)}{if(!(e instanceof vt||e instanceof Ei))throw new D(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ee.fromString(t,...n));return wx(r),new Ei(e.firestore,null,r)}}function Xu(e,t,...n){if(e=Be(e),arguments.length===1&&(t=kC.newId()),CA("doc","path",t),e instanceof Sv){const r=Ee.fromString(t,...n);return vx(r),new vt(e,null,new B(r))}{if(!(e instanceof vt||e instanceof Ei))throw new D(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ee.fromString(t,...n));return vx(r),new vt(e.firestore,e instanceof Ei?e.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new uA(this,"async_queue_retry"),this.iu=()=>{const n=Wp();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=Wp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=Wp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new kr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!jc(t))throw t;U("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Lr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=yv.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&Q()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}function Ex(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class ks extends Sv{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new rV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||AA(this),this._firestoreClient.terminate()}}function iV(e,t,n){n||(n="(default)");const r=Xh(e,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(zl(s,t))return i;throw new D(A.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new D(A.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new D(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:n})}function kf(e){return e._firestoreClient||AA(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function AA(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,d){return new V3(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,kA(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new K5(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ta(xt.fromBase64String(t))}catch(n){throw new D(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ta(xt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new D(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new D(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new D(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return le(this._lat,t._lat)||le(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV=/^__.*__$/;class oV{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new zi(t,this.data,this.fieldMask,n,this.fieldTransforms):new Mc(t,this.data,n,this.fieldTransforms)}}class RA{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new zi(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function PA(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Af{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Af(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return th(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(PA(this.Iu)&&sV.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class aV{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ef(t)}pu(t,n,r,i=!1){return new Af({Iu:t,methodName:n,gu:r,path:st.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cv(e){const t=e._freezeSettings(),n=Ef(e._databaseId);return new aV(e._databaseId,!!t.ignoreUndefinedProperties,n)}function lV(e,t,n,r,i,s={}){const o=e.pu(s.merge||s.mergeFields?2:0,t,n,i);Av("Data must be an object, but it was:",o,r);const a=bA(r,o);let l,u;if(s.merge)l=new Wt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const f=qm(t,h,n);if(!o.contains(f))throw new D(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);jA(d,f)||d.push(f)}l=new Wt(d),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new oV(new Nt(a),l,u)}class Rf extends Oc{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Rf}}function cV(e,t,n){return new Af({Iu:3,gu:t.settings.gu,methodName:e._methodName,du:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class uV extends Oc{constructor(t,n){super(t),this.yu=n}_toFieldTransform(t){const n=cV(this,t,!0),r=this.yu.map(s=>xa(s,n)),i=new Jo(r);return new KC(t.path,i)}isEqual(t){return this===t}}class dV extends Oc{constructor(t,n){super(t),this.wu=n}_toFieldTransform(t){const n=new sc(t.serializer,HC(t.serializer,this.wu));return new KC(t.path,n)}isEqual(t){return this===t}}function hV(e,t,n,r){const i=e.pu(1,t,n);Av("Data must be an object, but it was:",i,r);const s=[],o=Nt.empty();Ds(r,(l,u)=>{const d=Rv(t,l,n);u=Be(u);const h=i.Ru(d);if(u instanceof Rf)s.push(d);else{const f=xa(u,h);f!=null&&(s.push(d),o.set(d,f))}});const a=new Wt(s);return new RA(o,a,i.fieldTransforms)}function fV(e,t,n,r,i,s){const o=e.pu(1,t,n),a=[qm(t,r,n)],l=[i];if(s.length%2!=0)throw new D(A.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(qm(t,s[f])),l.push(s[f+1]);const u=[],d=Nt.empty();for(let f=a.length-1;f>=0;--f)if(!jA(u,a[f])){const g=a[f];let m=l[f];m=Be(m);const w=o.Ru(g);if(m instanceof Rf)u.push(g);else{const _=xa(m,w);_!=null&&(u.push(g),d.set(g,_))}}const h=new Wt(u);return new RA(d,h,o.fieldTransforms)}function pV(e,t,n,r=!1){return xa(n,e.pu(r?4:3,t))}function xa(e,t){if(NA(e=Be(e)))return Av("Unsupported field value:",t,e),bA(e,t);if(e instanceof Oc)return function(r,i){if(!PA(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=xa(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:Jd(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jd(i.serializer,s)}}if(r instanceof kv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ta)return{bytesValue:nA(i.serializer,r._byteString)};if(r instanceof vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:uv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Sf(r)}`)}(e,t)}function bA(e,t){const n={};return CC(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ds(e,(r,i)=>{const s=xa(i,t.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function NA(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof qe||e instanceof kv||e instanceof ta||e instanceof vt||e instanceof Oc)}function Av(e,t,n){if(!NA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Sf(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function qm(e,t,n){if((t=Be(t))instanceof Cf)return t._internalPath;if(typeof t=="string")return Rv(e,t);throw th("Field path arguments must be of type string or ",e,!1,void 0,n)}const gV=new RegExp("[~\\*/\\[\\]]");function Rv(e,t,n){if(t.search(gV)>=0)throw th(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Cf(...t.split("."))._internalPath}catch{throw th(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function th(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(A.INVALID_ARGUMENT,a+e+l)}function jA(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new mV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Pf("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mV extends MA{data(){return super.data()}}function Pf(e,t){return typeof t=="string"?Rv(e,t):t instanceof Cf?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new D(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pv{}class bv extends Pv{}function qt(e,t,...n){let r=[];t instanceof Pv&&r.push(t),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Nv).length,a=s.filter(l=>l instanceof bf).length;if(o>1||o>0&&a>0)throw new D(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class bf extends bv{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new bf(t,n,r)}_apply(t){const n=this._parse(t);return DA(t._query,n),new Hr(t.firestore,t.converter,Vm(t._query,n))}_parse(t){const n=Cv(t.firestore);return function(s,o,a,l,u,d,h){let f;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new D(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Tx(h,d);const g=[];for(const m of h)g.push(Ix(l,s,m));f={arrayValue:{values:g}}}else f=Ix(l,s,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Tx(h,d),f=pV(a,o,h,d==="in"||d==="not-in");return Fe.create(u,d,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function _n(e,t,n){const r=t,i=Pf("where",e);return bf._create(i,r,n)}class Nv extends Pv{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Nv(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Mn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)DA(o,l),o=Vm(o,l)}(t._query,n),new Hr(t.firestore,t.converter,Vm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jv extends bv{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new jv(t,n)}_apply(t){const n=function(i,s,o){if(i.startAt!==null)throw new D(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new D(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rc(s,o)}(t._query,this._field,this._direction);return new Hr(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new va(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,n))}}function _r(e,t="asc"){const n=t,r=Pf("orderBy",e);return jv._create(r,n)}class Mv extends bv{constructor(t,n,r){super(),this.type=t,this._limit=n,this._limitType=r}static _create(t,n,r){return new Mv(t,n,r)}_apply(t){return new Hr(t.firestore,t.converter,Yd(t._query,this._limit,this._limitType))}}function Co(e){return nV("limit",e),Mv._create("limit",e,"F")}function Ix(e,t,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new D(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!DC(t)&&n.indexOf("/")!==-1)throw new D(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ee.fromString(n));if(!B.isDocumentKey(r))throw new D(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return W_(e,new B(r))}if(n instanceof vt)return W_(e,n._key);throw new D(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sf(n)}.`)}function Tx(e,t){if(!Array.isArray(e)||e.length===0)throw new D(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function DA(e,t){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new D(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class yV{convertValue(t,n="none"){switch(Ss(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Oe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ts(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Q()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Ds(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new kv(Oe(t.latitude),Oe(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=iv(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ec(t));default:return null}}convertTimestamp(t){const n=bi(t);return new qe(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Ee.fromString(t);ye(aA(r));const i=new tc(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||Lr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vV(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $A extends MA{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Pf("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ju extends $A{data(t={}){return super.data(t)}}class OA{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ya(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Ju(this._firestore,this._userDataWriter,r.key,r,new Ya(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ya(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ya(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:wV(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wV(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _V(e){e=kn(e,vt);const t=kn(e.firestore,ks);return Z5(kf(t),e._key).then(n=>FA(t,e,n))}class Lv extends yV{constructor(t){super(),this.firestore=t}convertBytes(t){return new ta(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function Gt(e){e=kn(e,Hr);const t=kn(e.firestore,ks),n=kf(t),r=new Lv(t);return LA(e._query),eV(n,e._query).then(i=>new OA(t,r,e,i))}function VA(e,t,n){e=kn(e,vt);const r=kn(e.firestore,ks),i=vV(e.converter,t,n);return UA(r,[lV(Cv(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,er.none())])}function xV(e,t,n,...r){e=kn(e,vt);const i=kn(e.firestore,ks),s=Cv(i);let o;return o=typeof(t=Be(t))=="string"||t instanceof Cf?fV(s,"updateDoc",e._key,t,n,r):hV(s,"updateDoc",e._key,t),UA(i,[o.toMutation(e._key,er.exists(!0))])}function EV(e,...t){var n,r,i;e=Be(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Ex(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ex(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,d;if(e instanceof vt)u=kn(e.firestore,ks),d=mf(e._key.path),l={next:h=>{t[o]&&t[o](FA(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=kn(e,Hr);u=kn(h.firestore,ks),d=h._query;const f=new Lv(u);l={next:g=>{t[o]&&t[o](new OA(u,f,h,g))},error:t[o+1],complete:t[o+2]},LA(e._query)}return function(f,g,m,w){const _=new Tv(w),p=new Ev(g,_,m);return f.asyncQueue.enqueueAndForget(async()=>wv(await eh(f),p)),()=>{_.Na(),f.asyncQueue.enqueueAndForget(async()=>_v(await eh(f),p))}}(kf(u),d,a,l)}function UA(e,t){return function(r,i){const s=new kr;return r.asyncQueue.enqueueAndForget(async()=>V5(await J5(r),i,s)),s.promise}(kf(e),t)}function FA(e,t,n){const r=n.docs.get(t._key),i=new Lv(e);return new $A(e,i,t._key,r,new Ya(n.hasPendingWrites,n.fromCache),t.converter)}function IV(...e){return new uV("arrayUnion",e)}function TV(e){return new dV("increment",e)}(function(t,n=!0){(function(i){ya=i})(Ms),Es(new Ri("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ks(new S3(r.getProvider("auth-internal")),new R3(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tc(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Jn(F_,"4.4.0",t),Jn(F_,"4.4.0","esm2017")})();var SV="firebase",kV="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn(SV,kV,"app");function zA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CV=zA,BA=new Ec("auth","Firebase",zA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new by("@firebase/auth");function AV(e,...t){nh.logLevel<=re.WARN&&nh.warn(`Auth (${Ms}): ${e}`,...t)}function Zu(e,...t){nh.logLevel<=re.ERROR&&nh.error(`Auth (${Ms}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e,...t){throw Dv(e,...t)}function nr(e,...t){return Dv(e,...t)}function RV(e,t,n){const r=Object.assign(Object.assign({},CV()),{[t]:n});return new Ec("auth","Firebase",r).create(t,{appName:e.name})}function Dv(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return BA.create(e,...t)}function G(e,t,...n){if(!e)throw Dv(t,...n)}function xr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Zu(t),new Error(t)}function $r(e,t){e||xr(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function PV(){return Sx()==="http:"||Sx()==="https:"}function Sx(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PV()||eD()||"connection"in navigator)?navigator.onLine:!0}function NV(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,n){this.shortDelay=t,this.longDelay=n,$r(n>t,"Short delay should be less than long delay!"),this.isMobile=ZL()||tD()}get(){return bV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(e,t){$r(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MV=new Vc(3e4,6e4);function Bi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Hi(e,t,n,r,i={}){return WA(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ic(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),HA.fetch()(qA(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function WA(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},jV),t);try{const i=new DV(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Tu(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tu(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Tu(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Tu(e,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw RV(e,d,u);Ln(e,d)}}catch(i){if(i instanceof ar)throw i;Ln(e,"network-request-failed",{message:String(i)})}}async function Uc(e,t,n,r,i={}){const s=await Hi(e,t,n,r,i);return"mfaPendingCredential"in s&&Ln(e,"multi-factor-auth-required",{_serverResponse:s}),s}function qA(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?$v(e.config,i):`${e.config.apiScheme}://${i}`}function LV(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DV{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nr(this.auth,"network-request-failed")),MV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tu(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nr(e,t,r);return i.customData._tokenResponse=n,i}function kx(e){return e!==void 0&&e.enterprise!==void 0}class $V{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return LV(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function OV(e,t){return Hi(e,"GET","/v2/recaptchaConfig",Bi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VV(e,t){return Hi(e,"POST","/v1/accounts:delete",t)}async function UV(e,t){return Hi(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function FV(e,t=!1){const n=Be(e),r=await n.getIdToken(t),i=Ov(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:pl(Gp(i.auth_time)),issuedAtTime:pl(Gp(i.iat)),expirationTime:pl(Gp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gp(e){return Number(e)*1e3}function Ov(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Zu("JWT malformed, contained fewer than 3 sections"),null;try{const i=fk(n);return i?JSON.parse(i):(Zu("Failed to decode base64 JWT payload"),null)}catch(i){return Zu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zV(e){const t=Ov(e);return G(t,"internal-error"),G(typeof t.exp<"u","internal-error"),G(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ar&&BV(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function BV({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pl(this.lastLoginAt),this.creationTime=pl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(e){var t;const n=e.auth,r=await e.getIdToken(),i=await oc(e,UV(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?GV(s.providerUserInfo):[],a=qV(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new GA(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function WV(e){const t=Be(e);await rh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function qV(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function GV(e){return e.map(t=>{var{providerId:n}=t,r=Y0(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QV(e,t){const n=await WA(e,{},async()=>{const r=Ic({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=qA(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",HA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KV(e,t){return Hi(e,"POST","/v2/accounts:revokeToken",Bi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){G(t.idToken,"internal-error"),G(typeof t.idToken<"u","internal-error"),G(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):zV(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return G(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QV(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ac;return r&&(G(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ac,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e,t){G(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class fs{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Y0(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new GA(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await oc(this,this.stsTokenManager.getToken(this.auth,t));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return FV(this,t)}reload(){return WV(this)}_assign(t){this!==t&&(G(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new fs(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await rh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await oc(this,VV(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:E,isAnonymous:S,providerData:k,stsTokenManager:I}=n;G(v&&I,t,"internal-error");const C=ac.fromJSON(this.name,I);G(typeof v=="string",t,"internal-error"),Kr(h,t.name),Kr(f,t.name),G(typeof E=="boolean",t,"internal-error"),G(typeof S=="boolean",t,"internal-error"),Kr(g,t.name),Kr(m,t.name),Kr(w,t.name),Kr(_,t.name),Kr(p,t.name),Kr(y,t.name);const N=new fs({uid:v,auth:t,email:f,emailVerified:E,displayName:h,isAnonymous:S,photoURL:m,phoneNumber:g,tenantId:w,stsTokenManager:C,createdAt:p,lastLoginAt:y});return k&&Array.isArray(k)&&(N.providerData=k.map(F=>Object.assign({},F))),_&&(N._redirectEventId=_),N}static async _fromIdTokenResponse(t,n,r=!1){const i=new ac;i.updateFromServerResponse(n);const s=new fs({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await rh(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=new Map;function Er(e){$r(e instanceof Function,"Expected a class definition");let t=Cx.get(e);return t?($r(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Cx.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}QA.type="NONE";const Ax=QA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e,t,n){return`firebase:${e}:${t}:${n}`}class Ao{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ed(this.userKey,i.apiKey,s),this.fullPersistenceKey=ed("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?fs._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ao(Er(Ax),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Er(Ax);const o=ed(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const h=fs._fromJSON(t,d);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ao(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ao(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(XA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(KA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ZA(t))return"Blackberry";if(eR(t))return"Webos";if(Vv(t))return"Safari";if((t.includes("chrome/")||YA(t))&&!t.includes("edge/"))return"Chrome";if(JA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KA(e=_t()){return/firefox\//i.test(e)}function Vv(e=_t()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function YA(e=_t()){return/crios\//i.test(e)}function XA(e=_t()){return/iemobile/i.test(e)}function JA(e=_t()){return/android/i.test(e)}function ZA(e=_t()){return/blackberry/i.test(e)}function eR(e=_t()){return/webos/i.test(e)}function Nf(e=_t()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function YV(e=_t()){var t;return Nf(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function XV(){return nD()&&document.documentMode===10}function tR(e=_t()){return Nf(e)||JA(e)||eR(e)||ZA(e)||/windows phone/i.test(e)||XA(e)}function JV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(e,t=[]){let n;switch(e){case"Browser":n=Rx(_t());break;case"Worker":n=`${Rx(_t())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ms}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e9(e,t={}){return Hi(e,"GET","/v2/passwordPolicy",Bi(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t9=6;class n9{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:t9,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r9{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Px(this),this.idTokenSubscription=new Px(this),this.beforeStateQueue=new ZV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ao.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await rh(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=NV()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Be(t):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&G(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await e9(this),n=new n9(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ec("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await KV(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Er(t)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ao.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=nR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&AV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Os(e){return Be(e)}class Px{constructor(t){this.auth=t,this.observer=null,this.addObserver=cD(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i9(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function rR(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=nr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",i9().appendChild(r)})}function s9(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const o9="https://www.google.com/recaptcha/enterprise.js?render=",a9="recaptcha-enterprise",l9="NO_RECAPTCHA";class c9{constructor(t){this.type=a9,this.auth=Os(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{OV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new $V(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;kx(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(l9)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&kx(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}rR(o9+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function bx(e,t,n,r=!1){const i=new c9(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qm(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await bx(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await bx(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u9(e,t){const n=Xh(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zl(s,t??{}))return i;Ln(i,"already-initialized")}return n.initialize({options:t})}function d9(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function h9(e,t,n){const r=Os(e);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=iR(t),{host:o,port:a}=f9(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||p9()}function iR(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function f9(e){const t=iR(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nx(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nx(o)}}}function Nx(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function p9(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return xr("not implemented")}_getIdTokenResponse(t){return xr("not implemented")}_linkToIdToken(t,n){return xr("not implemented")}_getReauthenticationResolver(t){return xr("not implemented")}}async function g9(e,t){return Hi(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m9(e,t){return Uc(e,"POST","/v1/accounts:signInWithPassword",Bi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y9(e,t){return Uc(e,"POST","/v1/accounts:signInWithEmailLink",Bi(e,t))}async function v9(e,t){return Uc(e,"POST","/v1/accounts:signInWithEmailLink",Bi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends Uv{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new lc(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new lc(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qm(t,n,"signInWithPassword",m9);case"emailLink":return y9(t,{email:this._email,oobCode:this._password});default:Ln(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qm(t,r,"signUpPassword",g9);case"emailLink":return v9(t,{idToken:n,email:this._email,oobCode:this._password});default:Ln(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(e,t){return Uc(e,"POST","/v1/accounts:signInWithIdp",Bi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w9="http://localhost";class Cs extends Uv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Cs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Y0(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Cs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Ro(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Ro(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ro(t,n)}buildRequest(){const t={requestUri:w9,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ic(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _9(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function x9(e){const t=Ha(Wa(e)).link,n=t?Ha(Wa(t)).deep_link_id:null,r=Ha(Wa(e)).deep_link_id;return(r?Ha(Wa(r)).link:null)||r||n||t||e}class Fv{constructor(t){var n,r,i,s,o,a;const l=Ha(Wa(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=_9((i=l.mode)!==null&&i!==void 0?i:null);G(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=x9(t);try{return new Fv(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.providerId=Ea.PROVIDER_ID}static credential(t,n){return lc._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Fv.parseLink(n);return G(r,"argument-error"),lc._fromEmailAndCode(t,r.code,r.tenantId)}}Ea.PROVIDER_ID="password";Ea.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ea.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends sR{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Fc{constructor(){super("facebook.com")}static credential(t){return Cs._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ti.credentialFromTaggedObject(t)}static credentialFromError(t){return ti.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ti.credential(t.oauthAccessToken)}catch{return null}}}ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";ti.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Fc{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Cs._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ni.credentialFromTaggedObject(t)}static credentialFromError(t){return ni.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return ni.credential(n,r)}catch{return null}}}ni.GOOGLE_SIGN_IN_METHOD="google.com";ni.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Fc{constructor(){super("github.com")}static credential(t){return Cs._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ri.credentialFromTaggedObject(t)}static credentialFromError(t){return ri.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ri.credential(t.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Fc{constructor(){super("twitter.com")}static credential(t,n){return Cs._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ii.credentialFromTaggedObject(t)}static credentialFromError(t){return ii.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ii.credential(n,r)}catch{return null}}}ii.TWITTER_SIGN_IN_METHOD="twitter.com";ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E9(e,t){return Uc(e,"POST","/v1/accounts:signUp",Bi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await fs._fromIdTokenResponse(t,r,i),o=jx(r);return new As({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=jx(r);return new As({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function jx(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends ar{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ih.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ih(t,n,r,i)}}function oR(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ih._fromErrorAndOperation(e,s,t,r):s})}async function I9(e,t,n=!1){const r=await oc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return As._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T9(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await oc(e,oR(r,i,t,e),n);G(s.idToken,r,"internal-error");const o=Ov(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(e.uid===a,r,"user-mismatch"),As._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aR(e,t,n=!1){const r="signIn",i=await oR(e,r,t),s=await As._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function S9(e,t){return aR(Os(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(e){const t=Os(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function k9(e,t,n){const r=Os(e),o=await Qm(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",E9).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&lR(e),l}),a=await As._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function C9(e,t,n){return S9(Be(e),Ea.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lR(e),r})}function A9(e,t,n,r){return Be(e).onIdTokenChanged(t,n,r)}function R9(e,t,n){return Be(e).beforeAuthStateChanged(t,n)}function P9(e,t,n,r){return Be(e).onAuthStateChanged(t,n,r)}function b9(e){return Be(e).signOut()}const sh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sh,"1"),this.storage.removeItem(sh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N9(){const e=_t();return Vv(e)||Nf(e)}const j9=1e3,M9=10;class uR extends cR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=N9()&&JV(),this.fallbackToPolling=tR(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);XV()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,M9):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},j9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}uR.type="LOCAL";const L9=uR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR extends cR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}dR.type="SESSION";const hR=dR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D9(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new jf(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await D9(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $9{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=zv("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return window}function O9(e){rr().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function V9(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function U9(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function F9(){return fR()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="firebaseLocalStorageDb",z9=1,oh="firebaseLocalStorage",gR="fbase_key";class zc{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mf(e,t){return e.transaction([oh],t?"readwrite":"readonly").objectStore(oh)}function B9(){const e=indexedDB.deleteDatabase(pR);return new zc(e).toPromise()}function Km(){const e=indexedDB.open(pR,z9);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(oh,{keyPath:gR})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(oh)?t(r):(r.close(),await B9(),t(await Km()))})})}async function Mx(e,t,n){const r=Mf(e,!0).put({[gR]:t,value:n});return new zc(r).toPromise()}async function H9(e,t){const n=Mf(e,!1).get(t),r=await new zc(n).toPromise();return r===void 0?null:r.value}function Lx(e,t){const n=Mf(e,!0).delete(t);return new zc(n).toPromise()}const W9=800,q9=3;class mR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Km(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>q9)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jf._getInstance(F9()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await V9(),!this.activeServiceWorker)return;this.sender=new $9(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||U9()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Km();return await Mx(t,sh,"1"),await Lx(t,sh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mx(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>H9(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lx(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Mf(i,!1).getAll();return new zc(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mR.type="LOCAL";const G9=mR;new Vc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q9(e,t){return t?Er(t):(G(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv extends Uv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ro(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ro(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ro(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function K9(e){return aR(e.auth,new Bv(e),e.bypassAuthState)}function Y9(e){const{auth:t,user:n}=e;return G(n,t,"internal-error"),T9(n,new Bv(e),e.bypassAuthState)}async function X9(e){const{auth:t,user:n}=e;return G(n,t,"internal-error"),I9(n,new Bv(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return K9;case"linkViaPopup":case"linkViaRedirect":return X9;case"reauthViaPopup":case"reauthViaRedirect":return Y9;default:Ln(this.auth,"internal-error")}}resolve(t){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J9=new Vc(2e3,1e4);class fo extends yR{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fo.currentPopupAction&&fo.currentPopupAction.cancel(),fo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return G(t,this.auth,"internal-error"),t}async onExecution(){$r(this.filter.length===1,"Popup operations only handle one event");const t=zv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fo.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,J9.get())};t()}}fo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z9="pendingRedirect",td=new Map;class e6 extends yR{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=td.get(this.auth._key());if(!t){try{const r=await t6(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}td.set(this.auth._key(),t)}return this.bypassAuthState||td.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t6(e,t){const n=i6(t),r=r6(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function n6(e,t){td.set(e._key(),t)}function r6(e){return Er(e._redirectPersistence)}function i6(e){return ed(Z9,e.config.apiKey,e.name)}async function s6(e,t,n=!1){const r=Os(e),i=Q9(r,t),o=await new e6(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o6=10*60*1e3;class a6{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!l6(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!vR(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=o6&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dx(t))}saveEventToCache(t){this.cachedEventUids.add(Dx(t)),this.lastProcessedEventTime=Date.now()}}function Dx(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function vR({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function l6(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vR(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c6(e,t={}){return Hi(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d6=/^https?/;async function h6(e){if(e.config.emulator)return;const{authorizedDomains:t}=await c6(e);for(const n of t)try{if(f6(n))return}catch{}Ln(e,"unauthorized-domain")}function f6(e){const t=Gm(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!d6.test(n))return!1;if(u6.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p6=new Vc(3e4,6e4);function $x(){const e=rr().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function g6(e){return new Promise((t,n)=>{var r,i,s;function o(){$x(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$x(),n(nr(e,"network-request-failed"))},timeout:p6.get()})}if(!((i=(r=rr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=rr().gapi)===null||s===void 0)&&s.load)o();else{const a=s9("iframefcb");return rr()[a]=()=>{gapi.load?o():n(nr(e,"network-request-failed"))},rR(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw nd=null,t})}let nd=null;function m6(e){return nd=nd||g6(e),nd}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y6=new Vc(5e3,15e3),v6="__/auth/iframe",w6="emulator/auth/iframe",_6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function E6(e){const t=e.config;G(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?$v(t,w6):`https://${e.config.authDomain}/${v6}`,r={apiKey:t.apiKey,appName:e.name,v:Ms},i=x6.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ic(r).slice(1)}`}async function I6(e){const t=await m6(e),n=rr().gapi;return G(n,e,"internal-error"),t.open({where:document.body,url:E6(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nr(e,"network-request-failed"),a=rr().setTimeout(()=>{s(o)},y6.get());function l(){rr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},S6=500,k6=600,C6="_blank",A6="http://localhost";class Ox{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function R6(e,t,n,r=S6,i=k6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},T6),{width:r.toString(),height:i.toString(),top:s,left:o}),u=_t().toLowerCase();n&&(a=YA(u)?C6:n),KA(u)&&(t=t||A6,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(YV(u)&&a!=="_self")return P6(t||"",a),new Ox(null);const h=window.open(t||"",a,d);G(h,e,"popup-blocked");try{h.focus()}catch{}return new Ox(h)}function P6(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b6="__/auth/handler",N6="emulator/auth/handler",j6=encodeURIComponent("fac");async function Vx(e,t,n,r,i,s){G(e.config.authDomain,e,"auth-domain-config-required"),G(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ms,eventId:i};if(t instanceof sR){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",lD(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))o[d]=h}if(t instanceof Fc){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${j6}=${encodeURIComponent(l)}`:"";return`${M6(e)}?${Ic(a).slice(1)}${u}`}function M6({config:e}){return e.emulator?$v(e,N6):`https://${e.authDomain}/${b6}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="webStorageSupport";class L6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hR,this._completeRedirectFn=s6,this._overrideRedirectResult=n6}async _openPopup(t,n,r,i){var s;$r((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Vx(t,n,r,Gm(),i);return R6(t,o,zv())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Vx(t,n,r,Gm(),i);return O9(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($r(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await I6(t),r=new a6(t);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Qp,{type:Qp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qp];o!==void 0&&n(!!o),Ln(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=h6(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return tR()||Vv()||Nf()}}const D6=L6;var Ux="@firebase/auth",Fx="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $6{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O6(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function V6(e){Es(new Ri("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nR(e)},u=new r9(r,i,s,l);return d9(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Es(new Ri("auth-internal",t=>{const n=Os(t.getProvider("auth").getImmediate());return(r=>new $6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(Ux,Fx,O6(e)),Jn(Ux,Fx,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U6=5*60,F6=mk("authIdTokenMaxAge")||U6;let zx=null;const z6=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>F6)return;const i=n==null?void 0:n.token;zx!==i&&(zx=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function B6(e=_k()){const t=Xh(e,"auth");if(t.isInitialized())return t.getImmediate();const n=u9(e,{popupRedirectResolver:D6,persistence:[G9,L9,hR]}),r=mk("authTokenSyncURL");if(r){const s=z6(r);R9(n,s,()=>s(n.currentUser)),A9(n,o=>s(o))}const i=pk("auth");return i&&h9(n,`http://${i}`),n}V6("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="firebasestorage.googleapis.com",H6="storageBucket",W6=2*60*1e3,q6=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends ar{constructor(t,n,r=0){super(Kp(t),`Firebase Storage: ${n} (${Kp(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lr.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Kp(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sr;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sr||(sr={}));function Kp(e){return"storage/"+e}function G6(){const e="An unknown error occurred, please check the error payload for server response.";return new lr(sr.UNKNOWN,e)}function Q6(){return new lr(sr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function K6(){return new lr(sr.CANCELED,"User canceled the upload/download.")}function Y6(e){return new lr(sr.INVALID_URL,"Invalid URL '"+e+"'.")}function X6(e){return new lr(sr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Bx(e){return new lr(sr.INVALID_ARGUMENT,e)}function _R(){return new lr(sr.APP_DELETED,"The Firebase app was deleted.")}function J6(e){return new lr(sr.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=xn.makeFromUrl(t,n)}catch{return new xn(t,"")}if(r.path==="")return r;throw X6(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${d}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},w=n===wR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${_}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:g,indices:m,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const S=v[E],k=S.regex.exec(t);if(k){const I=k[S.indices.bucket];let C=k[S.indices.path];C||(C=""),r=new xn(I,C),S.postModify(r);break}}if(r==null)throw Y6(t);return r}}class Z6{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eU(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(..._){u||(u=!0,t.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,e(g,l())},_)}function f(){s&&clearTimeout(s)}function g(_,...p){if(u){f();return}if(_){f(),d.call(null,_,...p);return}if(l()||o){f(),d.call(null,_,...p);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let m=!1;function w(_){m||(m=!0,f(),!u&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function tU(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nU(e){return e!==void 0}function Hx(e,t,n,r){if(r<t)throw Bx(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Bx(`Invalid value for '${e}'. Expected ${n} or less.`)}function rU(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ah;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(ah||(ah={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iU(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sU{constructor(t,n,r,i,s,o,a,l,u,d,h,f=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Su(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ah.NO_ERROR,l=s.getStatus();if(!a||iU(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ah.ABORT;r(!1,new Su(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Su(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());nU(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=G6();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?_R():K6();o(l)}else{const l=Q6();o(l)}};this.canceled_?n(!1,new Su(!1,null,!0)):this.backoffId_=eU(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&tU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Su{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function oU(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function aU(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function lU(e,t){t&&(e["X-Firebase-GMPID"]=t)}function cU(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function uU(e,t,n,r,i,s,o=!0){const a=rU(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return lU(u,t),oU(u,n),aU(u,s),cU(u,r),new sU(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dU(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function hU(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,n){this._service=t,n instanceof xn?this._location=n:this._location=xn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new lh(t,n)}get root(){const t=new xn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hU(this._location.path)}get storage(){return this._service}get parent(){const t=dU(this._location.path);if(t===null)return null;const n=new xn(this._location.bucket,t);return new lh(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw J6(t)}}function Wx(e,t){const n=t==null?void 0:t[H6];return n==null?null:xn.makeFromBucketSpec(n,e)}function fU(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:JL(i,e.app.options.projectId))}class pU{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=wR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=W6,this._maxUploadRetryTime=q6,this._requests=new Set,i!=null?this._bucket=xn.makeFromBucketSpec(i,this._host):this._bucket=Wx(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=xn.makeFromBucketSpec(this._url,t):this._bucket=Wx(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Hx("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Hx("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new lh(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new Z6(_R());{const o=uU(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const qx="@firebase/storage",Gx="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR="storage";function gU(e=_k(),t){e=Be(e);const r=Xh(e,xR).getImmediate({identifier:t}),i=YL("storage");return i&&mU(r,...i),r}function mU(e,t,n,r={}){fU(e,t,n,r)}function yU(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new pU(n,r,i,t,Ms)}function vU(){Es(new Ri(xR,yU,"PUBLIC").setMultipleInstances(!0)),Jn(qx,Gx,""),Jn(qx,Gx,"esm2017")}vU();const Mt=e=>e.docs.map(t=>t.data()),wU={apiKey:"AIzaSyBuDoETyUrO2RCDAlFMsW2uV-QmtCT8t6Y",authDomain:"soundbubble-27737.firebaseapp.com",projectId:"soundbubble-27737",storageBucket:"soundbubble-27737.appspot.com",messagingSenderId:"527274299416",appId:"1:527274299416:web:64b1ac2d05f4262df0736d",measurementId:"G-9TP9PEEV11"},Fn=class Fn{static get(t){return xx(this.firestore,t)}static getSubCollection(t,n){return xx(Fn.firestore,`${t}/${n}`)}static async createUser(t,n){return await k9(this.auth,t,n)}static async setById(t,n,r){const i=await this.get(t),s=Xu(i,n);return await VA(s,r)}static async updateById(t,n,r){const i=await this.get(t),s=Xu(i,n);return await xV(s,r)}static async login(t,n){return await C9(this.auth,t,n)}static async logout(){return await b9(this.auth)}static onAuthStateChanged(t){return P9(this.auth,t)}static async getById(t,n){const r=this.get(t),i=Xu(r,n);return(await _V(i)).data()}static async listenTo(t,n,r,i){const s=[];i&&s.push(i);const o=qt(this.get(t),r,...s);return EV(o,l=>{const u=Mt(l);console.log("changed data"),n(u)})}};Ge(Fn,"app",wk(wU)),Ge(Fn,"auth",B6(Fn.app)),Ge(Fn,"storage",gU(Fn.app)),Ge(Fn,"firestore",iV(Fn.app,{experimentalForceLongPolling:!1}));let fe=Fn;const Qx=e=>t=>`${e}. Причина: ${t}`,Bc={operationFailed:Qx("Не удалось выполнить операцию"),loginFailed:Qx("Не удалось войти в аккаунт")},go=class go{static async getAllSongs(){try{const t=await Gt(this.ref);return Mt(t)}catch(t){return console.error(t),[]}}static async getTopSongs(t=10){try{const n=await Gt(qt(this.ref,_r("listens","desc"),Co(t)));return Mt(n)}catch(n){return console.error(n),[]}}static async getSongsByUserId(t){try{const n=await Ot.getUserByUid(t);return this.getSongsByUids((n==null?void 0:n.addedSongs)??[])}catch(n){return console.error(n),[]}}};Ge(go,"ref",fe.get("songs")),Ge(go,"getSongByUid",async t=>{try{if(!t)throw new Error(Bc.operationFailed("UID must be provided"));return fe.getById("songs",t)}catch{throw new Error("Failed to get song by uid "+t)}}),Ge(go,"getSongsByUids",async(t,n)=>{if(t.length===0)return[];if(n){const i=[];i.push(_r("listens","desc"));const s=qt(fe.get("songs"),_n("id","in",t),...i),o=await Gt(s);return Mt(o)}const r=t.map(i=>go.getSongByUid(i));return Promise.all(r)});let gn=go;const _U={data:null,error:null,userPlaylists:[]},xU={user:null,error:null,loading:!1,songs:[],playlists:[],similarAuthors:[],similarAuthorsLoading:!0},Hv=10,EU=e=>e?"displayName"in e?e.displayName:"chatName"in e?e.chatName:e.name:"",Wv=e=>"uid"in e?e.uid:e.id,IU=e=>"photoURL"in e?e.photoURL:"image"in e?e.image:"chatImage"in e?e.chatImage:e.cover,Lf=e=>"isAuthor"in e&&(e!=null&&e.isAuthor)?"author":"displayName"in e&&(e!=null&&e.displayName)?"user":"isAlbum"in e&&(e!=null&&e.isAlbum)?"album":"subscribers"in e&&(e==null?void 0:e.subscribers)!==void 0?"playlist":"song",Kx=(e,t,n,r)=>e.filter(i=>!r(t).includes(n(i))),ji=(e,t)=>{if(!e.length)return"";const n=t??!0,r=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?r.replace(/[,'._/]/g,""):r},TU=(e,t)=>{const n=new Set;return e.filter(r=>{const i=r[t];return n.has(i)?!1:(n.add(i),!0)})};class ch{static async getTopAuthorSongs(t){try{return t!=null&&t.length?await gn.getSongsByUids(t,!0):[]}catch(n){throw new Error(n.message)}}static getEntitiesReqs(t){const n={users:Ot.getUserByUid,playlists:Cn.getPlaylistByUid,songs:gn.getSongByUid};return t.map(r=>n[r.place](r.uid))}static async getSearchSuggestions(t,n){try{const r=qt(this.ref,_n("variantsOfName","array-contains",ji(t)),_r("rank","desc"),Co(Hv)),i=await Gt(r),s=Kx(Mt(i),n,o=>o.fullName,o=>o.map(a=>a.fullName));return TU(s,"fullName")}catch(r){throw new Error(r.message)}}static async getSearchResult(t){var n;try{const r=qt(this.ref,_n("variantsOfName","array-contains",ji(t)),_r("rank","desc")),i=await Gt(r),s=Kx(Mt(i),[],l=>l.uid,l=>l.map(u=>Wv(u))),o=this.getEntitiesReqs(s);let a=await Promise.all(o);if(Lf(a[0])==="author"){const l=await this.getTopAuthorSongs((n=a[0].ownSongs)==null?void 0:n.slice(0,6));a=[...a.slice(0,1),...l,...a.slice(1,a.length)]}return a}catch(r){throw new Error(r.message)}}static async addRankToSuggestion(t){try{return await fe.updateById("search",t,{rank:TV(1)})}catch(n){throw new Error(n.message)}}}Ge(ch,"ref",fe.get("search"));class Cn{static async addSongToPlaylists(t,n){try{if(!t)throw new Error("Song id not specified");if(!n.length)throw new Error("Playlist ids not specified");const r=n.map(i=>fe.updateById("playlists",i,{songs:IV(t)}));return Promise.all(r)}catch(r){throw new Error(`Failed to add song to playlists ${t}, ${n}, ${r}`)}}}Ge(Cn,"ref",fe.get("playlists")),Ge(Cn,"getPlaylistByUid",async t=>{try{if(!t)throw new Error(Bc.operationFailed("UID must be provided"));return fe.getById("playlists",t)}catch{throw new Error("Failed to get playlist by uid "+t)}}),Ge(Cn,"getPlaylistsByUids",async t=>{if(t.length===0)return[];const n=qt(fe.get("playlists"),_n("id","in",t)),r=await Gt(n);return Mt(r)});class Ot{static createUser({email:t,password:n}){try{return fe.createUser(t,n)}catch(r){console.error(r)}}static async login({email:t,password:n}){try{return fe.login(t,n)}catch(r){console.error(r)}}static async logout(){try{return fe.logout()}catch(t){console.error(t)}}static async getUserByUid(t){try{if(!t)throw new Error(Bc.loginFailed("UID must be provided"));return fe.getById("users",t)}catch{throw new Error("Failed to get user by id: "+t)}}static async getUsersByUids(t,n){try{if((t??[]).length===0)return[];const r=[];n&&r.push(_r("numberOfListenersPerMonth","desc"));const i=await Gt(qt(this.ref,_n("uid","in",t),...r));return Mt(i)}catch(r){return console.error(r),[]}}static async getAuthorTopSongs(t,n=3){try{if(t.length===0)return[];const r=await Gt(qt(gn.ref,_n("id","in",t),_r("listens","desc"),Co(n)));return Mt(r)}catch(r){return console.error(r),[]}}static async getAuthorTopAlbums(t,n=3){try{if(t.length===0)return[];console.log(t);const r=await Gt(qt(Cn.ref,_n("id","in",t),Co(n)));return Mt(r)}catch(r){return console.error(r),[]}}static async getSimilarAuthorsBySongs(t){try{if(t.length===0)return[];const n=[...new Set(t.flatMap(r=>r.authors.map(i=>i.uid)))];return await this.getUsersByUids(n,!0)}catch(n){return console.error(n),[]}}static async getTopAuthorsByListenings(t=10){try{const n=await Gt(qt(this.ref,_n("isAuthor","==",!0),_r("numberOfListenersPerMonth","desc"),Co(t)));return Mt(n)}catch(n){return console.error(n),[]}}static async listenToUsersChanges(t,n){try{return await fe.listenTo("users",n,_n("uid","in",t),_r("online","desc"))}catch{throw new Error("Failed to listen to users changes")}}}Ge(Ot,"ref",fe.get("users")),Ge(Ot,"onAuthStateChanged",async t=>{try{return fe.onAuthStateChanged(t)}catch(n){return console.error(n),null}});class qv{static async getSearchHistory(t){try{if(!t)throw new Error("userId is required in getSearchHistory");const n=(await fe.getById("searchHistory",t)).history,r=qt(fe.get("search"),_n("uid","in",n.map(o=>o.id))),i=await Gt(r);return Mt(i).reverse()}catch(n){return console.error(n),[]}}static async addEntityToSearchHistory(t,n,r,i){try{if(!n)throw new Error("userId is required");if(!r)throw new Error("uid is required");if(!i)throw new Error("place is required");if(t.find(a=>a.uid===r))return;const o=[{id:r,type:i},...t.map(a=>({id:a.uid,type:a.place}))];await fe.updateById("searchHistory",n,{history:o})}catch(s){throw console.error(s),new Error("Failed to add entity to search history")}}}Ge(qv,"ref",fe.get("history"));class ER{static async getHistoryByUserId(t){try{const n=await fe.getById("history",t),r=new Set(n.history);return await gn.getSongsByUids(Array.from(r))}catch{throw new Error("Failed to get history for user")}}}Ge(ER,"ref",fe.get("history"));class Df{static ownChatsQuery(t){return qt(this.ref,_n("participants","array-contains",t))}static async getChatsByUserId(t){try{const n=await Gt(this.ownChatsQuery(t)),r=Mt(n),i={};let s={};const o={},a=r.map(async l=>{var h,f;const{messages:u,chatData:d}=await this.getChatMessagesByChatId(l.id,"desc",1);s=Object.assign(s,d),i[l.id]=u[0],o[l.id]=(f=((h=u[0])==null?void 0:h.seenBy)??[])!=null&&f.includes(t)?0:1});return await Promise.all(a),{chats:r.sort((l,u)=>{var d,h;return((d=i[u.id])==null?void 0:d.sentTime)-((h=i[l.id])==null?void 0:h.sentTime)}),chatDataObject:s,lastMessages:i,unreadCount:o}}catch{throw new Error("Failed to get chats by user id: "+t)}}static async getChatMessagesByChatId(t,n,r){try{const i=[];r!==void 0&&i.push(Co(r));const s=qt(fe.getSubCollection("newChats",`${t}/messages`),_r("sentTime",n??"asc"),...i),o=await Gt(s),a=Mt(o),l=a.map(async d=>[...await gn.getSongsByUids(d.attachedSongs),...await Cn.getPlaylistsByUids(d.attachedAlbums),...await Ot.getUsersByUids(d.attachedAuthors)]),u=(await Promise.all(l)).reduce((d,h)=>(h.forEach(f=>{d["id"in f?f.id:f.uid]=f}),d),{});return{messages:a,chatData:u}}catch{throw new Error("Failed to get messages by chatId id: "+t)}}static async sendMessage(t,n){try{const r=Xu(fe.firestore,`newChats/${t}/messages/${n.id}`);return await VA(r,n)}catch(r){throw new Error("Failed to send message"+r.toString())}}}Ge(Df,"ref",fe.get("newChats"));const SU=(e,t)=>j({clock:e.failData,source:t,fn:(n,r)=>({...n,error:r}),target:t}),Vs=(e,t)=>j({clock:e.doneData,fn:n=>n,target:t}),IR=(e,t,n)=>j({clock:e.pending,source:t,fn:(r,i)=>({...r,[n??"loading"]:i}),target:t}),kU=e=>e instanceof Error?e.message:typeof e=="string"?e:"Ошибка",Gv=(e,t)=>{try{return e()}catch(n){throw new Error(Bc[t](kU(n)))}},Qv=je(async e=>Gv(async()=>{const{email:t,password:n}=e;if(!t||!n)throw new Error(Bc.loginFailed("Не указана почта или пароль"));await Ot.login(e)},"operationFailed")),CU=je(()=>Gv(async()=>{await Ot.logout()},"operationFailed")),Kv=je(async e=>Gv(async()=>{var r,i;const t=((i=(r=e.data)==null?void 0:r.addedSongs)==null?void 0:i.reverse())??[];return await gn.getSongsByUids(t)},"operationFailed")),Yv=je(async e=>{try{if(!e.data)throw new Error("Failed to load added playlists");return await Cn.getPlaylistsByUids(e.data.ownPlaylists)}catch{throw new Error("Failed to load added playlists")}}),Xv=je(async e=>{try{if(!e.data)throw new Error("Failed to load added playlists");return await Cn.getPlaylistsByUids(e.data.addedPlaylists)}catch{throw new Error("Failed to load added playlists")}}),Hc=je(async e=>{try{const t=await Ot.getUserByUid(e),n=await gn.getSongsByUids((t==null?void 0:t.ownSongs)??[],!0),r=await Cn.getPlaylistsByUids((t==null?void 0:t.ownPlaylists)??[]);return{user:t,songs:n,playlists:r}}catch{throw new Error("Failed to get user's page info")}}),Jv=je(async e=>{try{return await Ot.getSimilarAuthorsBySongs(e)}catch{throw new Error("Failed to load similar authors")}}),TR=je(async e=>{var t,n;try{const r=((n=(t=e.data)==null?void 0:t.friends)==null?void 0:n.filter(i=>i.status==="added").map(i=>i.uid))??[];await Ot.listenToUsersChanges(r,t1)}catch{throw new Error("Failed to load user friends")}}),SR=je(async e=>{var t;try{const n=(t=e.data)==null?void 0:t.lastSongPlayed;return n?await gn.getSongByUid(n):null}catch{throw new Error("Failed to load last song played")}}),Zv=je(async e=>{var t;try{const n=((t=e.data)==null?void 0:t.addedAuthors)??[];return await Ot.getUsersByUids(n)}catch{throw new Error("Failed to load user added authors")}}),kR=je(async e=>{var t;try{const n=(t=e.data)==null?void 0:t.uid;return await qv.getSearchHistory(n)}catch{throw new Error("Failed to load search history")}}),CR=je(async({history:e,userId:t,suggestion:n})=>{await qv.addEntityToSearchHistory(e.slice(0,Hv-1),t,n==null?void 0:n.uid,n==null?void 0:n.place)}),e1=V(),Le=V(),AU=V(),AR=V(),RR=V(),RU=V(),PR=V(),bR=V(),t1=V(),NR=V(),jR=V(),PU=wy(),kt=ee(_U);kt.reset(Le);const MR=ee(!0),n1=ee([]);n1.reset(Le);const LR=ee(null);LR.reset(Le);const bU=ee([]);bU.reset(Le);const r1=ee([]);r1.reset(Le);const i1=ee([]);i1.reset(Le);const s1=ee([]);s1.reset(Le);const Rs=ee([]);Rs.reset(Le);const Or=ee(xU).reset(bR);Or.reset(Le);const DR=ee([]);j({clock:NR,target:MR});j({clock:e1,target:Qv});j({clock:Le,target:CU});j({clock:e1,source:kt,fn:e=>({...e,loggining:!0}),target:kt});j({clock:Qv.doneData,source:kt,fn:e=>({...e,loggining:!1}),target:kt});j({clock:Qv.failData,source:kt,fn:(e,t)=>({...e,error:t,loggining:!1}),target:kt});j({clock:t1,fn:e=>e,target:s1});j({clock:AR,source:kt,fn:(e,t)=>({...e,data:t,loggining:!1}),target:[kt,Kv,Yv,Xv,Zv,kR,TR,SR]});Vs(Kv,n1);Vs(Yv,r1);Vs(SR,LR);Vs(Xv,i1);Vs(Zv,DR);Vs(kR,Rs);j({clock:RR,source:kt,fn:(e,t)=>({...e,logginining:t}),target:kt});j({clock:RU,target:Hc});IR(Hc,Or,"loading");SU(Hc,Or);j({clock:Hc.doneData,source:Or,fn:(e,t)=>({...e,...t,similarAuthors:[]}),target:Or});j({clock:PR,target:Jv});IR(Jv,Or,"similarAuthorsLoading");j({clock:Jv.doneData,source:Or,fn:(e,t)=>({...e,similarAuthors:t}),target:Or});j({clock:CR.done,source:Rs,filter:(e,{params:t})=>!!t.suggestion&&!e.find(n=>{var r;return n.uid===((r=t.suggestion)==null?void 0:r.uid)}),fn:(e,{params:t})=>[t.suggestion,...e].slice(0,Hv),target:Rs});j({clock:jR,source:Rs,fn:(e,t)=>({history:e,...t}),target:CR});const ce={useUser:()=>_e([kt,MR]),useSongLibrary:()=>_e([n1,Kv.pending]),useOwnPlaylists:()=>_e([r1,Yv.pending]),useAddedPlaylists:()=>_e([i1,Xv.pending]),useAddedAuthors:()=>_e([DR,Zv.pending]),useSearchHistory:()=>_e(Rs),useUserPage:()=>_e(Or),useFriends:()=>_e([s1,TR.pending]),events:{login:e1,logout:Le,loadSimilarAuthors:PR,createUser:AU,setUser:AR,setLoggining:RR,loadUserPageFx:Hc,resetUserPage:bR,updateFriends:t1,setIsLoadingUsers:NR},gates:{useLoadUser:()=>vy(PU)}},NU={opened:!1,title:"",content:null},$R=V(),OR=V(),cc=ee(NU);j({clock:$R,source:cc,fn:(e,{title:t,content:n})=>({opened:!0,title:t,content:n}),target:cc});j({clock:OR,source:cc,fn:e=>({...e,opened:!1}),target:cc});const Ct={useModal:()=>_e(cc),events:{open:$R,close:OR}},Ia=je(async e=>{try{return await Df.getChatsByUserId(e)}catch(t){throw console.log(t),new Error(t.message)}}),o1=je(async({chats:e,chatDataObject:t})=>{try{const r=e.flatMap(s=>s.participants).filter(s=>!t[s]).map(s=>Ot.getUserByUid(s));return(await Promise.all([...r])).flatMap(s=>s).reduce((s,o)=>(s["id"in o?o.id:o.uid]=o,s),{...t})}catch(n){throw new Error(n.message)}}),Wc=je(async({chatId:e})=>{try{const t=await Df.getChatMessagesByChatId(e);return{...t,messages:t.messages}}catch(t){throw new Error(t.message)}}),a1=je(async({chatId:e,message:t})=>{try{await Df.sendMessage(e,t),console.log("error never appeared")}catch(n){throw console.log(n),new Error(n.message)}}),l1=V(),VR=V(),UR=V(),jU=V(),c1=V(),FR=V(),zR=V(),BR=V(),na=ee([]),qc=ee(""),Jt=ee([]),$f=ee({}),u1=ee(0),ra=ee({}),ia=ee({}),d1=ee(null);na.reset(Le);ra.reset(Le);u1.reset(Le);qc.reset(Le);Jt.reset(Le);$f.reset(Le);ra.reset(Le);ia.reset(Le);d1.reset(Le);const Ym=wy(),uh=kt.map(e=>{var t;return((t=e==null?void 0:e.data)==null?void 0:t.uid)??null}),MU=e=>Object.keys(e).reduce((t,n)=>(t+=e[n],t),0);j({clock:[Ym.open,uh],source:{gateStatus:Ym.status,userId:uh,chats:na},filter:({chats:e,userId:t,gateStatus:n})=>n&&t!==null&&e.length===0,fn:({userId:e})=>e,target:Ia});j({clock:Ia.doneData,fn:({chats:e})=>e,target:[na,l1]});j({clock:BR,source:{messages:Jt,userId:uh},filter:({userId:e})=>!!e,fn:({messages:e,userId:t},n)=>[...e].map(i=>(i.id===n&&i.seenBy.push(t),i)),target:Jt});j({clock:Ia.doneData,fn:({lastMessages:e})=>e,target:ia});j({clock:Ia.doneData,fn:e=>e,target:o1});j({clock:Ia.doneData,fn:({unreadCount:e})=>e,target:[$f,l1]});j({clock:l1,source:$f,fn:MU,target:u1});j({clock:o1.doneData,target:ra});j({clock:c1,fn:({chatId:e,message:{status:t,...n}})=>({chatId:e,message:n}),target:[a1]});j({clock:c1,source:Jt,fn:(e,{message:t})=>[...e,t],target:Jt});j({clock:a1.failData,source:Jt,fn:e=>(console.log("sending failed message"),e.map(t=>t.status==="pending"?{...t,status:"error"}:t)),target:Jt});j({clock:a1.done,source:Jt,fn:(e,{params:t})=>e.map(n=>{const{status:r,...i}=n;return t.message.id===n.id?i:n}),target:Jt});j({clock:Jt.updates,source:qc,fn:(e,t)=>({chatId:e,message:t.at(-1)}),target:FR});j({clock:FR,source:ia,filter:(e,{chatId:t,message:n})=>!!n&&!!t,fn:(e,{chatId:t,message:n})=>({...e,[t]:n}),target:[ia,zR]});j({clock:zR,source:{chats:na,lastMessages:ia},fn:({chats:e,lastMessages:t})=>e.sort((n,r)=>t[r.id].sentTime-t[n.id].sentTime),target:na});j({clock:VR,fn:e=>e,target:qc});j({clock:UR,source:ra,fn:(e,t)=>({...e,...t}),target:ra});j({clock:qc,filter:e=>(e==null?void 0:e.length)!==0,fn:e=>({chatId:e,messages:[]}),target:Wc});j({clock:Wc.doneData,fn:({chatData:e})=>e,target:UR});j({clock:Wc.doneData,fn:({messages:e})=>e,target:[Jt]});j({clock:Wc.doneData,source:{currentMessages:Jt,userId:uh},filter:({userId:e,currentMessages:t})=>!!e&&!!t.length,fn:({currentMessages:e,userId:t})=>{var n;return((n=e.find(r=>!r.seenBy.includes(t)))==null?void 0:n.id)??null},target:d1});const Qn={useChats:()=>_e({chats:na,loadingChats:Ia.pending,currentChatId:qc,currentChatMessages:Jt,currentChatMessagesLoading:Wc.pending,chatData:ra,loadingChatData:o1.pending,lastMessage:ia,unreadCounts:$f,firstUnreadMessageId:d1}),useLoadChats:()=>vy(Ym),useChatUnreadCount:()=>_e(u1),events:{setCurrentChatId:VR,loadPreviousMessages:jU,sendMessage:c1,seenMessage:BR}},LU=x.aside`
    min-width: 270px;
    width: 270px;
    height: 100dvh;
    padding: 10px;
    background: ${({theme:e})=>e.colors.sidebar};
    position: relative;
    border-right: 1px solid ${({theme:e})=>e.colors.border};

    @media (max-width: 1000px) {
        display: none;
    }
`,DU=x.div`
    padding: 10px;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,Yx=x.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin: 30px 0;

    & .add-playlist {
        color: ${({theme:e})=>e.colors.textColor};
        background: transparent;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
            width: 18px;
            height: 18px;
        }

        &:hover {
            background: ${({theme:e})=>e.colors.hover};
            color: ${({theme:e})=>e.colors.blue.main};
        }
    }
`,$U=x(ck)`
    text-decoration: none;
    padding: 10px 10px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};

    &:hover {
        background: ${({theme:e})=>e.colors.hover};
    }

    &.active {
        & > div > div {
            opacity: 1;
            color: ${({theme:e})=>e.colors.blue.main};
        }
    }
`,Xx=x.div`
    font-size: 0.8rem;
    opacity: 0.3;
    color: ${({theme:e})=>e.colors.textColor};
    padding: 4px 10px;
    text-transform: uppercase;
`,OU=x.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 0 2px;
`,h1=x.span`
    min-width: 20px;
    width: fit-content;
    height: 20px;
    font-size: 0.7rem;
    padding: 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme:e})=>e.colors.red.main};
    border-radius: 10px;
    color: #fff;
    font-weight: 400;
`,P=x.div`
  display: flex;
  align-items: ${({ai:e})=>e??"center"};
  justify-content: ${({jc:e})=>e??"flex-start"};
  flex-direction: ${({d:e})=>e??"row"};
  flex-wrap: ${({wrap:e})=>e};
  gap: ${({gap:e})=>`${e??0}px`};
  width: ${({width:e})=>e??"fit-content"};
  height: ${({height:e})=>e??"fit-content"};
  padding: ${({padding:e})=>e??"0"};
`,Vr=x.span`
    font-size: 0.8rem;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.textColor};
    opacity: 0.6;
`,VU=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 28px;
    border-radius: 20px;

    & > div:nth-child(1) {
        animation: typing 0.8s infinite;
        animation-delay: 0s;
    }

    & > div:nth-child(2) {
        animation: typing 0.8s infinite;
        animation-delay: 0.1s;
    }

    & > div:nth-child(3) {
        animation: typing 0.8s infinite;
        animation-delay: 0.2s;
    }

    @keyframes typing {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }
        50% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.5);
        }
    }
`,Yp=x.div`
    width: 6px;
    height: 6px;
    border-radius: 100%;
    opacity: 0;
    transform: scale(0);
    background: grey;
`,Jx=({isTyping:e=!0})=>e?c.jsxs(VU,{children:[c.jsx(Yp,{}),c.jsx(Yp,{}),c.jsx(Yp,{})]}):null,HR=({typing:e,isGroupChat:t,children:n})=>t&&e.length>0?c.jsxs(P,{gap:8,children:[c.jsxs(Vr,{children:[e.map((r,i)=>(i!==0?", ":"")+(r==null?void 0:r.displayName))," typing"]}),c.jsx(Jx,{isTyping:!0})]}):e.length>0?c.jsxs(P,{gap:8,children:[c.jsx(Vr,{children:"Typing"}),c.jsx(Jx,{isTyping:!0})]}):n,WR=({isMine:e,sendStatus:t})=>!e||t==="Error"?null:t==="Pending"?c.jsx(Hj,{}):t==="Sent"?c.jsx(Oj,{}):c.jsx(Vj,{}),Of=e=>{if(!e)return{status:"offline"};const t=new Date().getTime()-3e5,n=new Date().getTime()-18e5*4;if(e>t)return{status:"online"};const i=new Date(e),s=new Date(new Date().getTime()-i.getTime()).getMinutes(),o=Math.floor(s/60)>0?Math.floor(s/60)===1?"hour":"hours":"minutes";return e>n?{status:`last seen ${s} ${o} ago`}:{status:`last seen ${i.toLocaleDateString("ru-RU")}`}},Ur=e=>c.jsx(Yh,{...e,fallbackIcon:e.fallbackIcon??(e.isAuthor?Sr.author:Sr.user),borderRadius:"100%"}),UU=e=>{if((e==null?void 0:e.length)===0)return"linear-gradient(45deg, #c47200, #da471f)";switch(e==null?void 0:e[0]){case"A":case"D":case"G":case"J":case"X":return"linear-gradient(45deg, #b42db4, #7d35ca)";case"L":case"M":case"P":case"Z":case"1":case"2":return"linear-gradient(45deg, #2db42f, #35ca98)";case"F":case"K":case"Y":case"S":case"4":case"3":return"linear-gradient(45deg, #3f2db4, #3558ca)";case"H":case"E":case"T":case"U":case"C":case"5":case"6":case"7":return"linear-gradient(45deg, #b42d2d, #ca3578)";default:return"linear-gradient(45deg, #c47200, #da471f)"}},FU=x.div`
    width: ${({$width:e})=>e??"50px"};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: ${({$background:e})=>e};
    color: #fff;

    font-size: calc(${({$width:e})=>e??"50px"} / 3);

    @media (max-width: 768px) {
		width: ${({$width:e})=>e??"55px"};
    }
`,f1=({name:e,width:t})=>{const n=(e==null?void 0:e.split(" ").length)===1?e[0].toUpperCase()+e[1].toUpperCase():e==null?void 0:e.split(" ").map(i=>{var s;return(s=i[0])==null?void 0:s.toUpperCase()}).join(""),r=UU(n);return c.jsx(FU,{$background:r,$width:t,children:n})},zU=x.span`
	font-size: 0.8rem;
	font-weight: 300;
	opacity: 0.5;

	&.online {
		color: ${({theme:e,color:t})=>t??e.colors.blue.action};
		opacity: 1;
	}
`,Vf=({isAuthor:e,showLastSeen:t,status:n,color:r})=>c.jsx(zU,{color:r,className:n==="online"&&t?"online":"",children:e?"Author":t?n:"User"}),BU=x(js)`
    --size: calc(100vw / 10 - 17px);

    display: flex;
    flex-direction: ${({$orientation:e})=>e==="vertical"?"column":"row"};
    align-items: center;
    gap: ${({$orientation:e})=>e==="vertical"?"10px":"12px"};
    text-decoration: none;
    width: ${({$orientation:e})=>e==="vertical"?"var(--size)":"100%"};
    padding: ${({$orientation:e})=>e==="vertical"?"0":"6px"};
    border-radius: ${({theme:e})=>e.borderRadius.big};

    &:hover {
        background: ${({theme:e,$orientation:t})=>t==="horizontal"?e.colors.hover:"none"};
    }

    h4 {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: ${({$orientation:e})=>e==="vertical"?"1rem":"0.9rem"};
        font-weight: 300;
    }

    @media (max-width: 1200px) {
        --size: calc(100vw / 7 - 32px);
    }

    @media (max-width: 1000px) {
        --size: calc(100vw / 5 - 32px);

        h4 {
            font-size: ${({$orientation:e})=>e==="horizontal"?"1rem":"0.85rem"};
            font-weight: 200;
        }

        span {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 800px) {
        --size: calc(100vw / 5 - 24px);
        padding: 4px 0;

        .general-cover {
            min-width: 40px;
            min-height: 40px;
        }
    }

    @media (max-width: 650px) {
        --size: calc(100vw / 3 - 27px);
    }

    @media (max-width: 400px) {
        h4 {
            font-size: ${({$orientation:e})=>e==="horizontal"?"1rem":"0.75rem"};
        }
    }
`,p1=x.div`
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({theme:e})=>e.colors.blue.action};
    outline: 2px solid ${({theme:e})=>e.colors.pageBackground};
    position: absolute;
    bottom: 0px;
    right: 0px;
`,Zx={hour:36e5},HU=e=>{const t=new Date().getTime()-new Date((e==null?void 0:e.sentTime)??"").getTime(),n=t>Zx.hour*24,r=t>Zx.hour*24*7;return n?r?new Date((e==null?void 0:e.sentTime)??"").toLocaleDateString("ru-RU"):new Date((e==null?void 0:e.sentTime)??"").toLocaleDateString("ru-RU",{weekday:"short"}):new Date((e==null?void 0:e.sentTime)??"").toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})},qR="soundbubble",WU=(e,t,n,r)=>{if(!e)return{sender:""};if((e==null?void 0:e.sender)===qR)return{sender:""};const i=n[(e==null?void 0:e.sender)??""];return{sender:(i==null?void 0:i.uid)===(r==null?void 0:r.uid)?"You":t?i==null?void 0:i.displayName:""}},GR=e=>{var t;return(e==null?void 0:e.status)==="pending"?"Pending":(e==null?void 0:e.status)==="error"?"Error":e&&((t=e==null?void 0:e.seenBy)==null?void 0:t.filter(n=>n!==e.sender).length)===0?"Sent":"Received"},qU=x(js)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 25px;
    gap: 12px;
    background: ${({theme:e})=>e.colors.pageBackground};

    &.selected {
        background: ${({theme:e})=>e.colors.blue.transparent};
    }

    &:hover {
        filter: brightness(0.95);
    }

    @media (max-width: 768px) {
        padding: 10px 20px;

        & .general-cover {
            min-width: 55px;
            height: 55px;
        }
    }
`,QR=x.div`
    font-size: 0.9rem;
    font-weight: 300;
`,GU=x.div`
    height: 32px;
    font-size: 0.8rem;
    font-weight: 200;
`,QU=x.span`
    opacity: 0.5;
    overflow: hidden;
    display: inline-flex;
    flex-wrap: wrap;
    column-gap: 6px;
`,Xp=x.div`
    display: inline-flex;
    height: fit-content;
    align-items: center;
    gap: 2px;

    svg {
        display: inline;
        width: 14px;
        height: 14px;
    }
`;x.span`
    font-size: 0.8rem;
    font-weight: 200;
    opacity: 0.5;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-flex;
    margin-right: 4px;
`;const KR=x.div`
    font-size: 0.7rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 4px;

    span {
        opacity: 0.4;
    }

    svg {
        width: 16px;
        height: 16px;
        opacity: 1;
        color: ${({theme:e})=>e.colors.blue.main};
    }
`,Jp={s:"35px",m:"50px"},YR=({chat:e,isSelected:t,unreadCount:n,lastMessage:r,chatData:i,children:s,onClick:o,size:a="m"})=>{var I,C,N,F;const[{data:l}]=ce.useUser(),u=e.chatName!=="",d=e.participants.filter(ae=>ae!==(l==null?void 0:l.uid)),h=i[d[0]],f=u?e.chatImage:h==null?void 0:h.photoURL,g=u?e.chatName:h==null?void 0:h.displayName,m=Of(h==null?void 0:h.online).status,w=GR(r),{sender:_}=WU(r,u,i,l),p=HU(r),y=(r==null?void 0:r.attachedSongs.length)!==0?(I=i[(r==null?void 0:r.attachedSongs[0])??""])==null?void 0:I.name:null,v=(r==null?void 0:r.attachedAuthors.length)!==0?(C=i[(r==null?void 0:r.attachedAuthors[0])??""])==null?void 0:C.displayName:null,E=(r==null?void 0:r.attachedAlbums.length)!==0?(N=i[(r==null?void 0:r.attachedAlbums[0])??""])==null?void 0:N.name:null,S=(e==null?void 0:e.typing.filter(ae=>ae!==(l==null?void 0:l.uid)).map(ae=>i[ae]))??[],k=ae=>{o==null||o(e,ae)};return c.jsxs(qU,{onClick:k,to:`/chat/${e.id}`,className:t?"selected":"",children:[c.jsx(Ur,{fallbackIcon:c.jsx(f1,{name:g,width:Jp[a]}),size:Jp[a],src:f,colors:["grey"],isAuthor:!1,children:m==="online"&&!u&&c.jsx(p1,{})}),c.jsxs(P,{d:"column",ai:"flex-start",height:Jp[a],width:"100%",gap:2,children:[c.jsxs(P,{jc:"space-between",width:"100%",children:[c.jsx(QR,{children:g}),r&&c.jsxs(KR,{children:[c.jsx(WR,{isMine:_==="You",sendStatus:w}),c.jsx("span",{children:p})]})]}),c.jsxs(P,{width:"100%",jc:"space-between",children:[c.jsx(HR,{isGroupChat:u,typing:S,children:c.jsxs(GU,{children:[!r&&c.jsx(Vf,{status:u?`${e.participants.length} members`:m,isAuthor:!1,showLastSeen:!0}),c.jsxs(QU,{children:[_&&`${_}:`," ",r==null?void 0:r.message.substring(0,70)," ",(((F=r==null?void 0:r.message)==null?void 0:F.length)??0)>70?"...":"",y&&c.jsxs(Xp,{children:[Sr.song,y]}),v&&c.jsxs(Xp,{children:[Sr.author,v]}),E&&c.jsxs(Xp,{children:[Sr.album,E]})]})]})}),!!n&&c.jsx(h1,{children:n})]})]}),s]})},Gc=x.div`
    background: ${({theme:e})=>e.colors.skeleton};
    animation: pulse 2s infinite;

    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`,X=x(Gc)`
    width: ${({width:e})=>e??"100px"};
    min-width: ${({minWidth:e,width:t})=>e??t??"100px"};
    height: ${({height:e})=>e??"100px"};
    min-height: ${({height:e})=>e??"100px"};
    border-radius: ${({radius:e})=>e??"10px"};
`,ft=()=>c.jsxs(P,{gap:12,padding:"2px 25px",children:[c.jsx(X,{width:"50px",height:"50px",radius:"100%"}),c.jsxs(P,{d:"column",gap:4,ai:"flex-start",children:[c.jsx(X,{width:"140px",height:"14px"}),c.jsx(X,{width:"80px",height:"10px"})]})]}),XR=()=>c.jsxs(P,{d:"column",gap:16,padding:"16px 0",children:[c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{}),c.jsx(ft,{})]}),KU=x.div`
  width: 18px;
  height: 18px;

  svg {
    animation: loadinganim 0.5s infinite linear;
    transform-origin: center center;
    stroke-width: 3;
    width: 18px;
    height: 18px;

    @keyframes loadinganim {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`,Wi=()=>c.jsx(KU,{className:"loading",children:c.jsx(t4,{})}),eE=x.div`
  transition: 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;

  &.show {
    opacity: 1;
    visibility: visible;
    transform: scale(1) translate(-50%, -50%);
  }

  &.hide {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.9) translate(-50%, -50%);
  }
`,or=({loading:e,children:t,appearance:n="ghost",disabled:r,width:i,...s})=>{const o={primary:_s.colors.blue.action,secondary:_s.colors.blue.transparent,ghost:"transparent"};return c.jsxs(H,{disabled:r||e,$background:o[n],$width:i,color:n==="primary"?"#fff":"",...s,children:[c.jsx(eE,{className:e?"show":"hide",children:c.jsx(Wi,{})}),c.jsx(eE,{className:e?"hide":"show",children:t})]})},YU=x.div`
	color: ${({$checked:e,theme:t})=>e?t.colors.blue.action:t.colors.greyText};
	height: 24px;
`,g1=({checked:e})=>c.jsx(YU,{$checked:e,children:e?c.jsx(Uj,{size:24,color:"blue"}):c.jsx(Bj,{size:24})}),XU=x.div`
    position: relative;
    width: 100%;

    opacity: ${({$disabled:e})=>e?.4:1};
    pointer-events: ${({$disabled:e})=>e?"none":"all"};
`,JR=x.div`
    position: absolute;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 8px;

    svg {
        width: 18px;
        height: 18px;
        color: ${({theme:e})=>e.colors.textColor};
        opacity: 0.3;
    }

    @media (max-width: 768px) {
        /* top: 11px; */
    }
`,JU=x.div`
    height: fit-content;
    position: relative;
`,ZU=x(JR)`
    left: 10px;
`,eF=x(JR)`
    right: 10px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background: ${({theme:e})=>e.colors.hover};
    }
`,m1=x.label`
    font-size: 0.8rem;
    margin-bottom: 4px;
    font-weight: 300;
    display: inline-block;
    width: 100%;
    color: ${({theme:e})=>e.colors.greyText};
`,tF=x(m1)`
    margin-bottom: 0;
    margin-top: 4px;
    color: ${({theme:e})=>e.colors.red.text};
`,ZR=x.span`
    color: ${({theme:e})=>e.colors.red.main};
`,nF=x.input`
    border: none;
    background: ${({theme:e})=>e.colors.input};
    padding: 10px 10px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};
    color: ${({theme:e})=>e.colors.textColor};
    height: 40px;
    font-size: 0.90rem;
    font-weight: 200;
    width: 100%;
    border: 1px solid
        ${({theme:e,$hasError:t})=>t?e.colors.red.text:"none"};
    padding-left: ${({$hasIcon:e})=>e?"40px":"10px"};
    padding-right: ${({$hasRightIcon:e})=>e?"40px":"10px"};

    &:disabled {
        background: ${({theme:e})=>e.colors.border};
    }

    @media (max-width: 768px) {
        /* height: 45px;
        border-radius: 10px; */
    }
`,Vt=T.forwardRef(({icon:e,rightIcon:t,label:n,required:r,error:i,type:s,onRightIconClick:o,...a},l)=>c.jsxs(XU,{$disabled:a.disabled,children:[n&&c.jsxs(m1,{children:[n," ",c.jsx(ZR,{children:r?"*":""})]}),c.jsxs(JU,{children:[c.jsx(ZU,{children:e}),c.jsx(nF,{$hasError:!!i,$hasIcon:!!e,$hasRightIcon:!!t,type:s,required:r,ref:l,...a}),t&&c.jsx(eF,{onClick:o,children:t})]}),i&&c.jsx(tF,{children:i})]}));Vt.displayName="Input";const rF=x.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
`,iF=x.div`
    position: absolute;
    width: 100%;
    min-height: fit-content;
    left: 0;
    top: 0;
    z-index: 10;
    background: linear-gradient(
        360deg,
        ${({theme:e,$background:t})=>`${t??e.colors.pageBackground}, ${t??e.colors.pageBackground}, ${t??e.colors.pageBackground}`},
        transparent
    );
    background-size: 100% 500%;
    background-position: 0 0;

    transition: 0.4s background-position, 0.4s opacity;
    pointer-events: none;
    opacity: 0;
    overflow: hidden;

    &.loading {
        opacity: 1;
        pointer-events: all;
        background-position: 0 100%;
    }
`,sF=x.div`
    display: block;
    width: 100%;

    &.loading {
        display: none;
    }
`,qi=({loading:e,children:t,skeleton:n,background:r,...i})=>c.jsxs(rF,{...i,className:e?"":"loaded",children:[c.jsx(iF,{$background:r,className:e?"loading":"",children:n}),c.jsx(sF,{className:e?"loading":"",children:t})]}),eP=x.div`
    padding: 2px 5px;
    display: inline-block;
    background: #fff;
    color: ${({theme:e})=>e.colors.blue.action};
    font-weight: 600;
    font-size: 0.7rem;
    border-radius: 10px;
    height: 18px;
`,oF=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme:e})=>e.colors.hover};
    font-size: 0.75rem;
    gap: 10px;
    padding: 4px;
    border-radius: 15px;
    animation: appear 0.2s forwards;

    @keyframes appear {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    button {
        svg {
            color: #8a8a8a;
        }
    }
`,aF=x.div`
    width: 100%;
    position: sticky;
    background: ${({theme:e})=>e.colors.modal};
    bottom: 0px;
    outline: 25px solid ${({theme:e})=>e.colors.modal};
    margin-top: 50px;
    transform: translateY(50px);
    opacity: 0;
    transition: 0.2s;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &.open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
`,lF=x.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 456px;
    transition: 0.2s;
    position: sticky;
    top: 0;
    padding-bottom: 4px;
    z-index: 20;
    background: ${({theme:e})=>e.colors.modal};

    input {
        width: 100%;
    }
`,cF=({inputPlaceholder:e,added:t,allItems:n,searchValue:r,setAdded:i,setVisibleItems:s,itemImage:o,itemName:a,setSearchValue:l})=>{const u=h=>()=>{i(f=>f.filter(g=>g!==h))},d=h=>{console.log({e:h.target.value}),l(h.target.value),h.target.value!==void 0&&h.target.value.length!==0?s(()=>n.filter(f=>{var g;return f?ji(a(f)).includes(ji((g=h==null?void 0:h.target)==null?void 0:g.value)):!1})):s(n)};return c.jsxs(lF,{className:t.length>0?"open":"",children:[c.jsx(Vt,{width:100,placeholder:e,icon:c.jsx(br,{}),onChange:d,value:r}),c.jsx(P,{wrap:"wrap",width:"100%",gap:4,children:t.map(h=>{const f=n.find(g=>(g.id??g.uid??"")===h);return f?c.jsxs(oF,{children:[o(f),a(f),c.jsx(H,{$width:"20px",$height:"20px",onClick:u(h),children:c.jsx(zj,{size:18})})]}):null})})]})},uF=e=>{const[t,n]=T.useState(e),[r,i]=T.useState(""),[s,o]=T.useState([]);return{visibleItems:t,addedItems:s,searchValue:r,setSearchValue:i,handleClick:(d,h)=>{h.preventDefault();const f=Wv(d);s.find(m=>m===f)?o(m=>m.filter(w=>w!==f)):(o(m=>[...m,f]),r.length!==0&&(i(""),n(e)))},setVisibleItems:n,handleDeselectAll:()=>{n(e),o([]),i("")},setAddedItems:o,getItemImage:d=>{const h=Lf(d),f=IU(d);return c.jsx(Yh,{fallbackIcon:Sr[h],borderRadius:"100%",src:f,colors:["grey"],size:"18px"})}}},y1=({entities:e,inputPlaceholder:t,renderItem:n,renderButton:r})=>{const{visibleItems:i,addedItems:s,searchValue:o,setSearchValue:a,setVisibleItems:l,handleClick:u,handleDeselectAll:d,setAddedItems:h,getItemImage:f}=uF(e);return c.jsxs(c.Fragment,{children:[c.jsx(cF,{inputPlaceholder:t,added:s,allItems:e,searchValue:o,setSearchValue:a,itemImage:f,itemName:g=>EU(g),setAdded:h,setVisibleItems:l}),c.jsx(P,{jc:"flex-end",width:"100%",children:s.length>0&&c.jsx(H,{onClick:d,$height:"25px",$width:"90px",style:{fontSize:"0.8rem",opacity:"0.7"},children:"Deselect all"})}),c.jsx(P,{d:"column",width:"100%",children:i.map(g=>{const m=Wv(g),w=!!s.find(_=>_===m);return n(g,w,u)})}),c.jsx(aF,{className:s.length>0?"open":"",children:r(s)})]})},Qc=({})=>{const{chats:e,chatData:t,loadingChats:n}=Qn.useChats(),r=i=>{};return Qn.useLoadChats(),c.jsx(P,{d:"column",width:"100%",height:"100%",padding:"0 25px",children:c.jsx(qi,{loading:n,skeleton:c.jsx(XR,{}),children:c.jsx(y1,{inputPlaceholder:"Search for friends...",entities:e,renderItem:(i,s,o)=>c.jsx(YR,{size:"s",chat:i,chatData:t,onClick:o,lastMessage:void 0,unreadCount:0,isSelected:!1,children:c.jsx(g1,{checked:s})},i.id),renderButton:i=>c.jsxs(c.Fragment,{children:[c.jsx(Vt,{placeholder:"Your Message"}),c.jsxs(or,{appearance:"primary",onClick:()=>r(),children:["Send",c.jsx(eP,{children:i.length})]})]})})})})},tP=220,dF={content:null,isOpen:!1,x:0,y:0,height:0,width:tP,origin:"center"},hF=(e,t,n,r,i,s)=>{let o,a,l,u=0;return e-s<0?(l=e-n,a="left"):(a="right",l=e-s),t+i>window.innerHeight-100?(o="bottom",u=t-i-4):(o="top",u=t+r+4),{posX:l+n,posY:u,origin:`${o} ${a}`}},nP=V(),rP=V(),uc=ee(dF);j({clock:nP,source:uc,fn:(e,{content:t,width:n=tP,height:r,e:i})=>{const s=i.currentTarget.getBoundingClientRect(),{left:o,top:a,width:l,height:u}=s,{posX:d,posY:h,origin:f}=hF(o,a,l,u,r,n??e.width);return{content:t,x:d,y:h,origin:f,height:r,width:n??e.width,isOpen:!e.isOpen}},target:uc});j({clock:rP,source:uc,fn:e=>({...e,content:null,isOpen:!1}),target:uc});const Zt={usePopup:()=>_e(uc),events:{open:nP,close:rP}},fF={loadingPlaylistId:null,loadingAddedPlaylists:!1,loading:!1,currentPlaylist:null,currentPlaylistSongs:null,addedPlaylists:[]},iP=je(async e=>{try{if(!e.loadingPlaylistId)throw new Error("Playlist id not specified");const t=await Cn.getPlaylistByUid(e.loadingPlaylistId),n=await gn.getSongsByUids(t.songs);return{playlist:t,songs:n}}catch(t){throw new Error(t.message)}}),sP=je(async({songId:e,playlistIds:t})=>{try{if(!e)throw new Error("Song id not specified");if(!t.length)throw new Error("Playlist ids not specified");return await Cn.addSongToPlaylists(e,t)}catch(n){throw new Error(n.message)}}),oP=V(),aP=V(),dc=ee(fF);j({clock:oP,source:dc,fn:(e,t)=>({...e,loadingPlaylistId:t,loading:!0}),target:[dc,iP]});j({clock:iP.doneData,source:dc,fn:(e,{playlist:t,songs:n})=>({...e,loading:!1,currentPlaylist:t,currentPlaylistSongs:n}),target:dc});j({clock:aP,target:sP});const Xm={usePlaylist:()=>_e(dc),useAddingSongToPlaylists:()=>_e([sP.pending]),events:{loadPlaylist:oP,addSongToPlaylists:aP}},pF=x.div`
    font-size: 0.8rem;
    opacity: 0.7;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 4px;
    width: ${({$width:e})=>e??"100%"};
    opacity: 0.5;
    pointer-events: ${({$disableOnDesktop:e})=>e?"none":"all"};

    @media (max-width: 1000px) {
        pointer-events: ${({$disableOnMobile:e})=>e?"none":"all"};
    }
`,gF=x(js)`
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
        text-decoration: underline;
    }
`,sa=({authors:e,onAuthorClick:t,width:n,disableOnDesktop:r=!1,disableOnMobile:i=!0})=>{const s=o=>a=>{a.stopPropagation(),t==null||t(o)};return c.jsxs(pF,{className:"authors",$width:n,$disableOnDesktop:r,$disableOnMobile:i,children:[e==null?void 0:e.map((o,a)=>c.jsxs(c.Fragment,{children:[a!==0?"&":" ",c.jsx(gF,{onClick:s(o),to:`/author/${o.uid}`,children:o.displayName},o.uid+a)]})),!(e!=null&&e.length)&&"-"]})},Uf=({loading:e,playling:t,size:n})=>c.jsx(c.Fragment,{children:e?c.jsx(Wi,{}):t?c.jsx(uS,{size:n}):c.jsx(ly,{size:n})}),mF=()=>{const e=[10,5,15,12,7,10,4];return`@keyframes playing {
		${e.map((n,r)=>`${100/e.length*r+"%"} {
			height: ${n}px;
		}`)}
	}`},yF=x.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3px;
	width: 15px;
	height: 15px;
	animation-play-state: paused;

	& div {
		background: ${({$color:e})=>e??"white"};
	}

	& div:nth-child(1) {
		animation-delay: 0s;
	}

	& div:nth-child(2) {
		animation-delay: 0.2s;
	}

	& div:nth-child(3) {
		animation-delay: 0.4s;
	}

	.playing {
		& div {
			animation-play-state: running;
		}
	}

`,Zp=x.div`
	width: 2.5px;
	animation: playing 2.5s infinite;
	height: 12px;
	border-radius: 2px;

	${mF()}
`,lP=({playing:e,color:t})=>c.jsxs(yF,{$color:t,className:e?"playing-animation playing":"playing-animation",children:[c.jsx(Zp,{}),c.jsx(Zp,{}),c.jsx(Zp,{})]}),v1=_s.borderRadius.huge,cP=e=>c.jsx(Yh,{...e,borderRadius:e.borderRadius??v1,fallbackIcon:e.isAlbum?Sr.album:Sr.playlist}),Jm=x(H)`
    position: absolute;
    bottom: ${({$orientation:e})=>e==="vertical"?"60px":"6px"};
    left: ${({$orientation:e})=>e==="vertical"?"16px":"auto"};
    right: ${({$orientation:e})=>e==="vertical"?"auto":"6px"};
    width: ${({$orientation:e})=>e==="vertical"?"40px":"35px"};
    height: ${({$orientation:e})=>e==="vertical"?"40px":"35px"};
    min-height: auto;
    border-radius: 100px;
    color: ${({$color:e})=>e};
    background: ${({theme:e})=>e.colors.pageTopButton};
    transition: 0.2s opacity;
    opacity: 0;
    z-index: 10;

    &:hover {
        background: ${({theme:e})=>e.colors.pageBackground2};
    }
`,vF=x(js)`
    gap: 12px;
    display: flex;
    flex-direction: ${({$orientation:e})=>e==="vertical"?"column":"row"};
    align-items: ${({$orientation:e})=>e==="vertical"?"flex-start":"center"};
    height: fit-content;
    color: ${({theme:e})=>e.colors.textColor};
    position: relative;
    text-decoration: none;
    --size: ${({$orientation:e})=>e==="vertical"?"calc(100vw / 8 + 3px)":"34px"};

    width: ${({$orientation:e})=>e==="vertical"?"var(--size)":"100%"};
    padding: ${({$orientation:e})=>e==="vertical"?"0":"6px 8px"};
    border-radius: 6px;
    overflow: ${({$orientation:e})=>e==="vertical"?"none":"hidden"};

    &.playing {
        ${Jm} {
            opacity: 1;
            box-shadow: 0 0px 10px #00000017;
        }
    }

    .authors {
        font-size: 0.75rem;
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        width: var(--size);
        height: var(--size);
        transition: 0.2s opacity;
        box-shadow: 0 50px 100px ${({$color1:e})=>e};
        top: 0%;
        opacity: 0.2;
        border-radius: ${v1};
    }

    &:hover:before {
        opacity: 0.5;
    }

    &:hover {
        background: ${({$orientation:e,theme:t})=>e==="horizontal"?t.colors.hover:""};

        ${Jm} {
            opacity: 1;
        }
    }

    @media (max-width: 1200px) {
        --size: ${({$orientation:e})=>e==="vertical"?"calc(100vw / 6)":"34px"};
    }

    @media (max-width: 800px) {
        --size: ${({$orientation:e})=>e==="vertical"?"calc(100vw / 3 - 28px)":"34px"};

        padding: 8px 0;

        .general-cover {
            min-width: 40px;
            min-height: 40px;
        }

        &::before {
            display: none;
        }
    }

    @media (max-width: 500px) {
        --size: ${({$orientation:e})=>e==="vertical"?"calc(100vw / 2 - 30px)":"34px"};
    }
`,wF=x.div`
    font-size: 0.95rem;
    font-weight: 200;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`;x.div`
    font-size: 0.8rem;
`;const Ps=({playlist:e,children:t,onClick:n,as:r,orientation:i="vertical"})=>{const{image:s,name:o,imageColors:a,authors:l,id:u,songs:d,isAlbum:h,isPrivate:f}=e,{play:g}=q.useControls(),{state:m}=q.useSong(),{queue:w}=q.queue.useQueue(),[_,p]=T.useState(!1),y=`/playlist/${u}`,v=m==="playing"&&w.url===y,E=(I,C)=>{const N={currentSongIndex:C,name:o,icon:s,url:y,songs:I,shuffle:!1};g(I[0],N)},S=I=>{I.preventDefault(),p(!0),gn.getSongsByUids(d).then(C=>{E(C,0),p(!1)})},k=I=>{n==null||n(e,I)};return c.jsxs(vF,{as:r,onClick:k,$orientation:i,className:v?"playing":"",to:`/playlist/${u}`,$color1:a[0],children:[!t&&c.jsx(Jm,{$orientation:i,$color:a[0],onClick:S,children:v?c.jsx(lP,{playing:!0,color:a[1]}):c.jsx(Uf,{loading:_,playling:!1,size:18})}),c.jsx(cP,{size:void 0,borderRadius:i==="vertical"?void 0:"3px",src:s,colors:a,isAlbum:h}),c.jsxs(P,{width:"100%",jc:"space-between",children:[c.jsxs(P,{d:"column",width:"100%",gap:0,ai:"flex-start",children:[c.jsxs(P,{children:[c.jsx(wF,{children:o}),f&&c.jsx(lS,{size:18})]}),i==="vertical"?c.jsx(sa,{authors:l}):c.jsxs(P,{width:"100%",gap:4,children:[c.jsxs(Vr,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[h?"Album":"Playlist"," /"]}),c.jsx(sa,{width:"fit-content",authors:l})]})]}),t]})]})},uP=({song:e})=>{const[t]=ce.useOwnPlaylists(),n=r=>{e&&Xm.events.addSongToPlaylists({songId:e.id,playlistIds:r})};return c.jsx(P,{width:"100%",d:"column",padding:"0 25px",children:c.jsx(y1,{entities:t,inputPlaceholder:"Search for playlists...",renderItem:(r,i,s)=>c.jsx(Ps,{as:"div",playlist:r,onClick:s,orientation:"horizontal",children:c.jsx(g1,{checked:i})},r.id),renderButton:r=>c.jsx(c.Fragment,{children:c.jsx(or,{appearance:"primary",onClick:()=>n(r),children:"Save changes"})})})})},dP=({song:e})=>{var s;const[{data:t}]=ce.useUser(),n=(s=t==null?void 0:t.addedSongs)==null?void 0:s.find(o=>o===(e==null?void 0:e.id)),r=()=>{Ct.events.open({title:`Share "${e==null?void 0:e.name}" with friends`,content:c.jsx(Qc,{entity:e})}),Zt.events.close()},i=()=>{Ct.events.open({title:`Add "${e==null?void 0:e.name}" to playlist`,content:c.jsx(uP,{song:e})}),Zt.events.close()};return c.jsxs(xc,{children:[n?c.jsxs(H,{children:[c.jsx(Jj,{}),"Remove from Liked"]}):c.jsxs(H,{children:[c.jsx(sy,{size:20}),"Add to Liked"]}),c.jsxs(H,{onClick:i,children:[c.jsx(fS,{size:20}),"Add to playlist"]}),c.jsxs(H,{children:[c.jsx(c4,{}),"Add to queue"]}),c.jsx(Fl,{}),c.jsxs(H,{onClick:r,children:[c.jsx(vc,{}),"Share"]}),c.jsxs(H,{children:[c.jsx(ay,{}),"Info"]}),c.jsxs(H,{children:[Sr.author,"Authors"]}),(t==null?void 0:t.isAdmin)&&c.jsxs(c.Fragment,{children:[c.jsx(Fl,{}),c.jsxs(H,{children:[c.jsx(aS,{}),"Edit song",c.jsx("span",{className:"admin",children:"Admin"})]})]})]})},tE=e=>e<=9?`0${e}`:`${e}`,nE=e=>{const t=Math.floor(e/60),n=Math.floor(e%60);return`${tE(t)}:${tE(n)}`},hP=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    color: #fff;
`,_F=x.input`
    -webkit-appearance: none;
    appearance: none;
    height: 3px;
    width: 100%;
    border-radius: 10px;
    background: ${({theme:e})=>e.colors.skeleton};
    background-image: linear-gradient(
        90deg,
        ${({color1:e})=>e??"grey"} 100%,
        white 50%
    );
    background-repeat: no-repeat;
    transition: 0.2s filter;

    &:hover {
        filter: brightness(1.2);
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 2px 0 #555;
        background: ${({color1:e})=>e??"grey"};
        transition: 0.2s;

        &:hover {
            box-shadow: 0 0 0px 10px ${({theme:e})=>e.colors.lightHover};
        }
    }

    &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }

    @media (max-width: 768px) {
        height: 5px;
    }
`,rd=x.button`
    border: none;
    background: transparent;
    width: 60px;
    height: 60px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    cursor: pointer;
    transition: 0.2s transform;
    overflow: hidden;

    .loading {
        width: 30px;
        height: 30px;

        svg {
            width: 30px;
            height: 30px;
        }
    }

    .prev-icon-1 {
        margin-right: 60px;
        opacity: 1;
    }

    .prev-icon-2 {
        margin-right: 30px;
        opacity: 0;
    }

    .next-icon-1 {
        margin-left: 60px;
        opacity: 1;
    }

    .next-icon-2 {
        margin-left: 30px;
        opacity: 0;
    }

    &:disabled {
        opacity: 0.4;
    }

    &:not(:active) {
        .prev-icon-1,
        .prev-icon-2,
        .next-icon-1,
        .next-icon-2 {
            transition: margin-left 0.25s, margin-right 0.25s, 0.15s opacity;
        }
    }

    &:not(:disabled) {
        @media (hover: hover) {
            &:hover {
                background: ${({theme:e})=>e.colors.hover};

                svg {
                    filter: drop-shadow(0 0 15px black);
                }
            }
        }

        @media (hover: none) {
            &:active {
                background: ${({theme:e})=>e.colors.lightHover};
            }
        }

        &:active {
            transform: scale(0.9);

            .prev-icon-1 {
                margin-left: 30px;
                margin-right: 0px;
                opacity: 0;
            }

            .prev-icon-2 {
                margin-right: 0;
                margin-left: 60px;
                opacity: 1;
            }

            .next-icon-1 {
                margin-right: 30px;
                margin-left: 0px;
                opacity: 0;
            }

            .next-icon-2 {
                margin-left: 0;
                margin-right: 60px;
                opacity: 1;
            }

            svg {
                transform: scale(0.9);
            }

            @keyframes shift {
                0% {
                    margin-left: 30px;
                }
                100% {
                    margin-left: 0;
                    margin-right: 60px;
                }
            }
        }
    }

    svg {
        min-width: 30px;
        height: 30px;
        transition: 0.2s transform;
    }

    @media (max-width: 768px) {
        svg {
            min-width: 35px;
            height: 35px;
        }
    }
`,rE=x.div`
    font-size: 0.8rem;
`,gl=x(rd)`
    width: 40px;
    height: 40px;

    &.selected {
        background: ${({theme:e})=>e.colors.darkHover};
        svg {
            color: ${({$color1:e})=>e??"#fff"};
            opacity: 1;
        }
    }

    svg {
        width: 20px;
        height: 20px;
    }
`,fP=({state:e,colors:t,duration:n,currentTime:r,loopMode:i,shuffle:s,disableNextSongButton:o,handleShuffle:a,handleLoopMode:l,onPlay:u,onNext:d,onPrev:h,handleChangeTime:f,handleMouseUp:g})=>{const{getBackgroundSize:m,currentTimeStr:w,durationStr:_}=T.useMemo(()=>({getBackgroundSize:{backgroundSize:`calc(${r*100/n}% + 1px) 100%`},currentTimeStr:nE(r),durationStr:nE(n)}),[n,r]),p=t==null?void 0:t[0];return c.jsxs(hP,{className:"music-controls",children:[c.jsx(_F,{style:m,color1:t==null?void 0:t[0],type:"range",value:r,max:n,min:0,onChange:f,onMouseUp:g,className:"song-slider"}),c.jsxs(P,{jc:"space-between",width:"100%",className:"duration-numbers",children:[c.jsx(rE,{children:w}),c.jsx(rE,{children:_})]}),c.jsxs(P,{jc:"space-between",width:"100%",className:"control-buttons",children:[c.jsx(gl,{$color1:p,className:s?"queue-button selected":"queue-button",onClick:a,children:c.jsx(oS,{})}),c.jsxs(P,{gap:20,className:"playback-buttons",children:[c.jsxs(rd,{className:"control-button",onClick:h,children:[c.jsx(t_,{className:"prev-icon-2"}),c.jsx(t_,{className:"prev-icon-1"})]}),c.jsx(rd,{className:"control-button",disabled:e==="loading",onClick:u,children:c.jsx(Uf,{loading:e==="loading",playling:e==="playing"})}),c.jsxs(rd,{className:"control-button",disabled:o,onClick:d,children:[c.jsx(e_,{className:"next-icon-1"}),c.jsx(e_,{className:"next-icon-2"})]})]}),c.jsxs(gl,{className:i!==it.noloop?"queue-button selected":"queue-button",onClick:l,$color1:p,children:[i===it.loopone&&c.jsx(d4,{}),i!==it.loopone&&c.jsx(h4,{})]})]})]})},xF=x.button`
  position: absolute;
  top: 3%;
  right: 3%;
  border: none;
  background: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colors.textColor};
  border-radius: ${({theme:e})=>e.borderRadius.mild};
  cursor: pointer;
  z-index: 10;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${({theme:e})=>e.colors.hover};
  }
`,pP=({onClick:e})=>c.jsx(xF,{onClick:e,children:c.jsx(yS,{})}),gP=()=>{const{currentSong:e,state:t}=q.useSong(),{currentTime:n,duration:r}=q.playblack.usePlayback(),{queue:i,loop:s}=q.queue.useQueue(),{next:o,previous:a,play:l}=q.useControls(),u=i.songs.length<2||s===it.noloop&&i.currentSongIndex===i.songs.length-1,d=T.useCallback(()=>l(),[l]),h=_=>{q.playblack.setIsSliding(!0),q.playblack.setCurrentTime(+_.target.value)},f=_=>{q.playblack.setIsSliding(!1),q.playblack.setLastRangeValue(+_.currentTarget.value),q.lyrics.calculateCurrentLyric(+_.currentTarget.value)},g=()=>{q.queue.changeLoopMode()},m=()=>{},w=T.useCallback(_=>{_.key==="Space"&&d()},[d]);return T.useEffect(()=>(addEventListener("keydown",w),()=>removeEventListener("keydown",w)),[w]),{currentTime:n,duration:r,colors:e==null?void 0:e.imageColors,state:t,loopMode:s,shuffle:!0,disableNextSongButton:u,handleShuffle:m,handleLoopMode:g,onPlay:d,onPrev:a,onNext:o,handleMouseUp:f,handleChangeTime:h}},EF=()=>{const e=gP();return c.jsx(fP,{...e})},dh="${DESKTOP_COVER_WIDTH}",po="86vw",IF=x(pa)`
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    transition: 0.2s;
    bottom: 0;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transform: translateY(100px);

    & > button {
        color: #fff;
    }

    @media (max-width: 1000px) {
        &::before {
            content: '';
            display: block;
            width: 25px;
            height: 5px;
            border-radius: 4px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 20px;
            background: ${({theme:e})=>e.colors.lightHover};
        }

        & > button {
            opacity: 0;
            width: 100%;
            left: 0;
        }
    }

    &.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);
    }
`,TF=x.div`
    width: ${dh};
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 700px) {
        width: ${po};
    }

    & .authors {
        font-size: 1rem;
        color: #fff;

        a {
            color: #fff;
        }
    }

    & .like-button {
        color: #fff;
    }
`,SF=x.div`
    overflow: hidden;
    border-radius: ${({theme:e})=>e.borderRadius.middle};
    background: ${({$color1:e})=>e??"darkgrey"};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 130px #00000057;
    width: ${dh};
    height: ${dh};
    overflow: hidden;

    @media (max-width: 700px) {
        width: ${po};
        height: ${po};

        .general-cover {
            img {
                width: ${po};
                height: ${po};
            }
        }

        margin-bottom: 30px;
    }

    svg {
        color: dimgray;
        width: 100px;
        height: 100px;
    }
`;x.div`
    display: flex;
    height: 100%;
    width: 200%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    opacity: 0.2;

    transition: 0.2s;

    img {
        height: 100%;
    }

    & .song-cover:nth-child(1) {
        position: absolute;
        transform: translateX(-60px) scale(0.8);
    }

    & .song-cover:nth-child(2) {
        position: absolute;
        transform: translateX(60px) scale(0.8);
    }
`;const kF=x.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    position: relative;

    &.close {
        display: block;
        height: 100%;
    }

    @media (max-width: 768px) {
        padding-bottom: 40px;
    }
`,CF=x.div`
    font-size: 1.5rem;
    width: calc(${dh} - 40px);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;

    @media (max-width: 1000px) {
        width: calc(${po} - 40px);
    }
`,AF=x.div`
    width: 0%;
    height: 100%;
    padding: 180px 110px;
    overflow-y: auto;
    scroll-padding-bottom: 700px;
    opacity: 0;
    animation: slide-appear 0.5s forwards reverse;

    &.visible {
        animation: slide-appear 0.5s forwards;
    }

    @keyframes slide-appear {
        0% {
            opacity: 0;
            width: 0;
        }
        30% {
            opacity: 0;
            width: 100%;
        }
        100% {
            opacity: 1;
            width: 100%;
        }
    }
`,RF=x.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #fff;
    font-size: 1.8rem;
`,PF=x.div`
    padding: 10px;
    transition: 0.2s background, 0.2s opacity, 0.3s transform;
    cursor: pointer;
    opacity: 0.4;
    transform: scale(0.9);
    transform-origin: left center;
    border-radius: ${({theme:e})=>e.borderRadius.middle};
    font-weight: 500;

    &.ordinary {
        opacity: 1;
        transform: scale(1);
    }

    &.current {
        opacity: 1;
        transform: scale(1);
    }

    &.farFromCurrent {
        opacity: 0.1;
        transform: scale(0.8);
    }

    &:hover {
        background: #ffffff3d;
    }
`;x.button`
    border: none;
    background: transparent;
    color: #fff;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({theme:e})=>e.borderRadius.middle};
    cursor: pointer;

    svg {
        stroke-width: 2;
        width: 20px;
        height: 20px;
    }

    &:hover {
        background: ${({theme:e})=>e.colors.lightHover};
    }
`;const bF=x.div`
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0;
    transition: 0.5s opacity;

    & span {
        width: 10px;
        height: 10px;
        background: ${({theme:e})=>e.colors.lightHover};
        border-radius: 10px;
    }

    & span:nth-child(1) {
        animation: lyricloading ${({$duration:e})=>e/3}s forwards;
        animation-delay: 0;
        animation-play-state: paused;
    }

    & span:nth-child(2) {
        animation: lyricloading ${({$duration:e})=>e/3}s forwards;
        animation-delay: ${({$duration:e})=>e/3}s;
        animation-play-state: paused;
    }

    & span:nth-child(3) {
        animation: lyricloading ${({$duration:e})=>e/3}s forwards;
        animation-delay: ${({$duration:e})=>e*2/3}s;
        animation-play-state: paused;
    }

    &.current {
        animation: dissapear 0.8s forwards;
        transform-origin: left center;
        opacity: 1;
        animation-delay: ${({$duration:e})=>`calc(${e}s - 1s)`};

        & span {
            animation-play-state: running;
        }

        @keyframes lyricloading {
            0% {
                transform: scale(1);
                background: ${({theme:e})=>e.colors.lightHover};
            }
            100% {
                transform: scale(1.2);
                background: #fff;
            }
        }

        @keyframes dissapear {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            30% {
                transform: scale(0.95);
                opacity: 1;
            }
            60% {
                transform: scale(1.05);
                opacity: 1;
            }
            100% {
                transform: scale(0.8);
                opacity: 0;
            }
        }
    }
`,NF=x.div`
    position: absolute;
    left: 40px;
    bottom: 40px;
    width: calc(100% - 80px);
    display: flex;
    justify-content: space-between;

    @media (max-width: 1000px) {
        width: calc(100% - 40px);
        left: 20px;
    }
`,jF=x.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    & button {
        color: #fff;
    }

    & a {
        color: #fff;
    }

    & > * {
        color: #fff !important;
    }
`,MF=({type:e,hasLyrics:t,hasQueue:n,handleClickControlButton:r})=>{const{currentSong:i}=q.useSong(),s=()=>q.fullscreen.close();return c.jsx(kF,{children:c.jsxs(TF,{children:[c.jsx(SF,{$color1:i==null?void 0:i.imageColors[0],children:c.jsx(Ry,{size:"400px",colors:i==null?void 0:i.imageColors,src:i==null?void 0:i.cover})}),c.jsxs(P,{d:"column",gap:2,children:[c.jsxs(P,{width:"100%",gap:10,children:[c.jsx(CF,{children:(i==null?void 0:i.name)??"Untitled"}),c.jsx(Kh,{height:"30px",songId:i==null?void 0:i.id,onClick:()=>null,likeColor:i==null?void 0:i.imageColors[1]})]}),c.jsx(sa,{authors:i==null?void 0:i.authors,onAuthorClick:s})]}),c.jsx(EF,{}),c.jsxs(NF,{children:[c.jsx(gl,{children:c.jsx(m4,{opacity:.9})}),c.jsxs(P,{gap:20,children:[c.jsx(gl,{disabled:!n,$color1:i==null?void 0:i.imageColors[0],className:e==="queue"?"selected":"",onClick:r("queue"),children:c.jsx(dS,{opacity:.9})}),c.jsx(gl,{disabled:!t,$color1:i==null?void 0:i.imageColors[0],className:e==="lyrics"?"selected":"",onClick:r("lyrics"),children:c.jsx(hS,{opacity:.9})})]})]})]})})},mP=()=>{const e=T.useRef(null),[{lyrics:t,currentLyricIndex:n},r]=q.lyrics.useLyrics(),{state:i}=q.useSong(),s=o=>()=>{isNaN(+o)||(q.playblack.setLastRangeValue(+o),q.lyrics.calculateCurrentLyric(+o))};return T.useEffect(()=>{e.current&&e.current.scrollIntoView({behavior:"smooth",block:"end"})},[n]),T.useEffect(()=>(q.lyrics.setShouldCalculateLyrics(!0),()=>{q.lyrics.setShouldCalculateLyrics(!1)}),[]),t?c.jsx(RF,{children:t.map((o,a)=>{var m;const l=i==="pause"||isNaN(+o.startTime),u=a===n,d=a+1<n||a-1>n,h=o.text==="@loading",f=(((m=t[a+1])==null?void 0:m.startTime)??o.startTime)-o.startTime,g=l?"ordinary":u?"current":d?"farFromCurrent":"";return c.jsx(PF,{ref:r&&u&&!l?e:void 0,className:g,onClick:s(o.startTime),children:h?c.jsxs(bF,{className:u&&i==="playing"?"current":"",$duration:f,children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}):o.text},o.text+a)})}):"No lyrics available"},hh=x.div`
    border: none;
    transition: 0.2s opacity;
    cursor: pointer;

    width: var(--icon-size);
    height: var(--icon-size);
`,Ff=x.div`
    position: absolute;
    z-index: 1;
    background: #0e0e0e;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme:e})=>e.colors.overlay};
    border-radius: ${Ay};
`,fh=x.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 35px;
    height: 35px;
    color: ${({theme:e})=>e.colors.textColor};
    border: none;
    padding: 4px;
    margin-right: 10px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};
    cursor: pointer;
    opacity: 0;

    &:hover {
        background: ${({theme:e})=>e.colors.hover};
    }

    svg {
        width: var(--icon-size);
        height: var(--icon-size);
    }

    @container (max-width: 699px) {
        opacity: 1;
        margin-right: 0px;
    }
`,yP=x(Ff)`
    left: 0;
    top: 0;
    opacity: 0;
`,vP=x(Ff)`
    left: 0;
    top: 0;

    .playing-animation {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    ${hh} {
        opacity: 0;
    }

    svg {
        stroke-width: 1;
    }
`,LF=x(Ff)`
    left: 0;
    top: 0;
`,DF=x.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;

    ${Ff} {
        svg {
            color: ${({$color1:e})=>e};
        }
    }

    @container (min-width: 700px) {
        gap: 20px;
    }

    @container (max-width: 699px) {
        gap: 12px;
    }
`,$F=x.div`
    width: 100%;
    height: 50px;
    padding: 4px 8px;
    border-radius: calc(${({theme:e})=>e.borderRadius.mild} + 6px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme:e})=>e.colors.textColor};
    cursor: pointer;
    border: none;
    container-type: size;
    transition: 0.1s background;
    --icon-size: 18px;

    &.playing {
        background: ${({theme:e})=>e.colors.hover};
    }

    @media (hover: hover) {
        &:hover {
            background: ${({theme:e})=>e.colors.hover};
            /* box-shadow: 0 0 20px #14141473; */

            ${vP} {
                ${hh} {
                    opacity: 1;
                }

                .playing-animation {
                    opacity: 0;
                }
            }

            .cover-children {
                ${yP} {
                    opacity: 1;
                }
            }

            ${fh} {
                opacity: 1;
            }
        }
    }

    &:focus {
        background: ${({theme:e})=>e.colors.hover};
        outline: none;
    }

    &:active {
        background: ${({theme:e})=>e.colors.darkHover};
    }

    .cover-children {
        svg {
            width: var(--icon-size);
            height: var(--icon-size);
        }
    }

    &.playing {
        ${fh} {
            opacity: 1;
        }
    }

    @media (max-width: 1000px) {
        padding: 0;

        &:active {
            background: transparent;
        }

        .general-cover {
            min-width: 40px;
            width: 40px;
            height: 40px;
        }
    }

    /* @container (max-width: 699px) {
    height: 60px;
  } */
`,OF=x.div`
    display: flex;
    align-items: flex-start;
    width: 100%;

    @container (min-width: 700px) {
        flex-direction: row;
        align-items: center;
    }

    @container (max-width: 699px) {
        flex-direction: column;
    }
`,VF=x.div`
    font-weight: 200;
    opacity: 0.85;
    font-size: 1rem;

    @container (min-width: 700px) {
        white-space: nowrap;
    }
`,UF=x.div`
    display: flex;
    align-items: center;
    gap: 8px;

    @container (min-width: 700px) {
        width: 100%;
    }
`,iE=x.div`
    display: flex;
    align-items: center;
    gap: 1px;
    opacity: 0.7;
    font-size: 0.8rem;

    @container (min-width: 700px) {
        display: none;
    }

    &.outside {
        @container (min-width: 700px) {
            display: flex;
            min-width: 200px;
        }

        @container (max-width: 699px) {
            display: none;
        }
    }

    svg {
        width: 12px;
        height: 12px;
    }
`;x(H)`
    width: 30px;
    min-height: 30px;
    color: ${({theme:e})=>e.colors.greyText};

    svg {
        width: 22px;
        height: 22px;
    }
`;const FF=x.div`
    display: flex;
    align-items: center;
    gap: 6px;

    @container (max-width: 699px) {
        .like-button {
            display: none;
        }

        ${fh} {
            opacity: 0.4;
        }
    }
`,zF=x.div`
    container-type: size;
    width: 100%;
    height: 50px;
`,BF=x.div`
    width: 100%;
    @container (max-width: 699px) {
        display: none;
    }
`,HF=x.div`
    height: 60px;

    &.no-background > div {
        background: transparent;
    }

    @container (min-width: 700px) {
        display: none;
    }
`,zf=T.memo(({song:e,playing:t,loading:n,index:r,onClick:i})=>{const{id:s,name:o,authors:a,imageColors:l,cover:u,listens:d}=e,h=g=>{g.stopPropagation(),Zt.events.open({content:c.jsx(dP,{song:e}),height:272.5,e:g})},f=()=>i(e,r);return c.jsxs($F,{onClick:f,tabIndex:0,role:"button","aria-pressed":"false",className:t||n?"playing":"",children:[c.jsxs(DF,{$color1:l[0],children:[c.jsxs(Ry,{size:"35px",src:u,colors:l,children:[!n&&!t&&c.jsx(yP,{children:c.jsx(hh,{children:c.jsx(ly,{className:"action-icon"})})}),!n&&t&&c.jsxs(vP,{children:[c.jsx(hh,{children:c.jsx(uS,{className:"action-icon"})}),c.jsx(lP,{color:l[1],playing:!0})]}),n&&c.jsx(LF,{children:c.jsx(Wi,{})})]}),c.jsxs(OF,{children:[c.jsxs(UF,{children:[c.jsx(VF,{children:o}),c.jsxs(iE,{children:[d,c.jsx(Nd,{})]})]}),c.jsx(sa,{authors:a,disableOnMobile:!0})]})]}),c.jsxs(iE,{className:"outside",children:[d,c.jsx(Nd,{})]}),c.jsxs(FF,{children:[c.jsx(Kh,{width:"35px",height:"35px",songId:s,likeColor:l[1],onClick:()=>null}),c.jsx(fh,{onClick:h,children:c.jsx(iy,{})})]})]})});zf.displayName="SongItem";const wP=e=>{const{play:t}=q.useControls();return{handlePlay:(r,i)=>{const s={currentSongIndex:i,name:e.listName,icon:e.listIcon,url:e.listUrl,songs:e.songs,shuffle:!1};t(r,s)}}},w1=e=>{const{currentSong:t,state:n,loaded:r}=q.useSong(),{songs:i}=e,{handlePlay:s}=wP(e);return c.jsx(c.Fragment,{children:i.map((o,a)=>{const l=o.id===(t==null?void 0:t.id);return c.jsx(zf,{onClick:s,index:a,song:o,playing:l&&n==="playing",loading:l&&n==="loading",loaded:l&&r},o.id+a)})})},Fr=T.memo(({user:e,onClick:t,children:n,as:r,showLastSeen:i,orientation:s="vertical"})=>{if(!e)return null;const{uid:o,imageColors:a,photoURL:l,isAuthor:u,displayName:d,isVerified:h,online:f}=e,g=s==="vertical",m=Of(f).status,w=_=>{t==null||t(e,_)};return c.jsxs(BU,{as:r,to:`/author/${o}`,$orientation:s,onClick:w,children:[c.jsx(Ur,{colors:a,src:l,size:g?"var(--size)":"38px",isAuthor:u,children:m==="online"&&!u&&c.jsx(p1,{})}),c.jsxs(P,{d:"column",gap:g?4:1,width:"100%",ai:g?"center":"flex-start",children:[c.jsxs(P,{jc:g?"center":"flex-start",gap:8,width:"100%",children:[c.jsx("h4",{children:d}),h&&c.jsx(ry,{size:16,style:{color:_s.colors.blue.main}})]}),s==="horizontal"&&c.jsx(Vf,{status:m,isAuthor:u,showLastSeen:i})]}),n]})});Fr.displayName="UserItem";function _P(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}const WF=({displayName:e,photoURL:t,imageColors:n,isAuthor:r})=>({uid:_P(),imageColors:n??[],photoURL:t??"https://via.placeholder.com/150",isAuthor:r??!1,displayName:e??"Test User",isVerified:!0,online:0,lastSongPlayed:"",addedPlaylists:[],addedAuthors:[],addedSongs:[],ownPlaylists:[],lastQueue:{image:"",name:"",songsList:[],source:""},numberOfListenersPerMonth:0,subscribers:0}),qF=({queue:e})=>{var t;return c.jsxs(jF,{children:[(t=e.url)!=null&&t.includes("author")?c.jsx(Fr,{onClick:()=>q.fullscreen.close(),orientation:"horizontal",user:WF({displayName:e.name})}):null,c.jsx(Fl,{}),c.jsx(w1,{songs:e.songs,listName:null,listIcon:void 0,listUrl:null})]})},GF=({type:e})=>{const{queue:t}=q.queue.useQueue();return e===null?null:c.jsxs(AF,{className:e!==null?"visible":"",children:[e==="lyrics"&&c.jsx(mP,{}),e==="queue"&&c.jsx(qF,{queue:t})]})},QF=({open:e})=>{const{currentSong:t}=q.useSong(),{queue:n}=q.queue.useQueue(),[r,i]=T.useState(e),[s,o]=T.useState(null),a=(t==null?void 0:t.lyrics)!==void 0&&((t==null?void 0:t.lyrics.length)??0)>0,l=()=>{q.fullscreen.close()};T.useEffect(()=>{e?i(!0):setTimeout(()=>{i(!1)},200)},[e]);const u=d=>()=>{o(s===d?null:d)};return T.useEffect(()=>{!a&&s==="lyrics"&&o(null)},[a,s]),c.jsx(IF,{className:e?"open":"close",$colors:t==null?void 0:t.imageColors,children:r&&c.jsxs(c.Fragment,{children:[c.jsx(pP,{onClick:l}),c.jsx(MF,{type:s,handleClickControlButton:u,hasQueue:n.songs.length>0,hasLyrics:a}),c.jsx(GF,{type:s})]})})},KF="data:image/svg+xml;base64,PHN2ZyBpZD0i0KHQu9C+0LlfMSIgZGF0YS1uYW1lPSLQodC70L7QuSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzAyLjMyIDI0Ny4yMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj0JHQtdC30YvQvNGP0L3QvdGL0Llf0LPRgNCw0LTQuNC10L3Rgl85OCk7fS5jbHMtMntmaWxsOnVybCgj0JHQtdC30YvQvNGP0L3QvdGL0Llf0LPRgNCw0LTQuNC10L3Rgl8yOTcpO30uY2xzLTN7ZmlsbDp1cmwoI9CR0LXQt9GL0LzRj9C90L3Ri9C5X9Cz0YDQsNC00LjQtdC90YJfOTMpO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0i0JHQtdC30YvQvNGP0L3QvdGL0Llf0LPRgNCw0LTQuNC10L3Rgl85OCIgeDE9IjUwLjg2IiB5MT0iODUuODUiIHgyPSIxNjMuMzMiIHkyPSI4NS44NSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgzNi4xMiAxODUuOCkgcm90YXRlKC0xMDkuNDMpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2ZiMWZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZhYWRlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ItCR0LXQt9GL0LzRj9C90L3Ri9C5X9Cz0YDQsNC00LjQtdC90YJfMjk3IiB4MT0iLTgwLjA1IiB5MT0iMTY1Ljk1IiB4Mj0iLTMyLjIiIHkyPSIxNjUuOTUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc2LjQxIDE0Mi4wOCkgcm90YXRlKDUzLjQyKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzI4MzU5MyIvPjxzdG9wIG9mZnNldD0iMC45OSIgc3RvcC1jb2xvcj0iIzdkOGJmZSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSLQkdC10LfRi9C80Y/QvdC90YvQuV/Qs9GA0LDQtNC40LXQvdGCXzkzIiB4MT0iNDcuNzciIHkxPSIxNjQuNTciIHgyPSIzNTAuMDkiIHkyPSIxNjQuNTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzZmIxZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkNDk0ZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+TG9nbzM8L3RpdGxlPjx0ZXh0IHg9Ii00Ny43NyIgeT0iLTI5LjciLz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjgxLjQ2IiBjeT0iNTYuMjUiIHI9IjU2LjIzIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIyMDkuNyIgY3k9IjE5NS45IiByPSIyMy45MyIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTM1MCwxNDkuMTRBNjEuMzksNjEuMzksMCwwLDAsMjkyLjU1LDkwLjlhNjIuNzcsNjIuNzcsMCwwLDAtMTAuMjkuMjUsNTAuNyw1MC43LDAsMCwxLTM5LjQxLTEyLjQ4LDEwMy4zNywxMDMuMzcsMCwwLDAtNjQuNC0yNi4zM0MxMTkuNTksNDkuNjUsNjkuODEsOTcuMTUsNjkuODMsMTU2LjA2QTEwMy42MSwxMDMuNjEsMCwwLDAsNzMsMTgxLjM4YTYuMDYsNi4wNiwwLDAsMS0yLjgzLDYuNzMsNDUuMiw0NS4yLDAsMSwwLDU4LjYyLDY2LjYxLDYuMDcsNi4wNywwLDAsMSw3LTJsLjI3LjFhMTI0LDEyNCwwLDAsMSwyOC4wNywxNS43MSw0My43Myw0My43MywwLDAsMCw2My41Ny0xMy40NSwxMzEuODYsMTMxLjg2LDAsMCwxLDIwLTI2LjI2bC40NS0uNDZhNTEuMjYsNTEuMjYsMCwwLDEsMzguNy0xNS4xOWMuNjksMCwxLjM5LDAsMi4wOCwwQTYxLjIyLDYxLjIyLDAsMCwwLDM1MCwxNDkuMTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNzcgLTI5LjcpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTY1Ljc4LDEyNy4zM3Y0MS4yMmMwLDcuMjktMy43OCwxMS44OS0xMC43NiwxMi44NmExNS41NiwxNS41NiwwLDAsMS0xMS41NC0yLjVjLTYtNC4yNi02LTExLjg2LS4wNi0xNi4xM2ExNS40MywxNS40MywwLDAsMSwxMi44Ny0yLjMzYy40NS4xMS45LjE4LDEuNjEuMzJWMTE3LjQ1YzAtMi45MS42MS0zLjcsMy4zLTQuMjZsMTUuMTMtMy4yYzIuMjktLjQ4LDMsLjA2LDMsMi40M3EwLDQuNDgsMCw5YzAsMi4zMS0uOCwzLjIxLTMsMy42OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00Ny43NyAtMjkuNykiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xODguNTksMTg2LjgzVjE0My40NmMwLTMsLjM5LTMuNTYsMy4yOS00LjE5cTcuNzQtMS42OCwxNS41MS0zLjI4YzEuODYtLjM4LDIuNDcuMTMsMi40OSwyLjEuMDUsMy4yNywwLDYuNTQsMCw5LjgxYTIuODQsMi44NCwwLDAsMS0yLjU3LDMuMTNjLTIuOTUuNi01Ljg3LDEuNDMtOC44NCwxLjg3LTEuNzkuMjYtMi4wNiwxLjExLTIuMDYsMi43NS4wNiwxMi44LDAsMjUuNiwwLDM4LjQsMCw4Ljg4LTUuOSwxNC40NS0xNC40NywxMy42MmExNS4wNiwxNS4wNiwwLDAsMS04Ljg2LTMuNWMtNC43MS00LjE0LTQuNzQtMTAuNTMsMC0xNC42MiwzLjg4LTMuMzQsOC40Mi0zLjk0LDEzLjI1LTMuMTRDMTg3LDE4Ni41MSwxODcuNjYsMTg2LjY1LDE4OC41OSwxODYuODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNzcgLTI5LjcpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMjM2LjcyLDEzNy43N1YxNzljMCw3LjI5LTMuNzUsMTEuODQtMTAuNzgsMTIuODNhMTUuMjEsMTUuMjEsMCwwLDEtMTEuODQtMi43NWMtNS41Ni00LjIzLTUuNjEtMTEuNDQsMC0xNS42NGExNS4zLDE1LjMsMCwwLDEsMTMuMzgtMi41Yy4zNy4wOS43Ni4xMiwxLjQ3LjIyVjEyOC4xYzAtMy40My4zOC0zLjg2LDMuNjQtNC41NCw0LjkxLTEsOS44Mi0yLjEsMTQuNzMtMy4xNSwyLjMxLS40OSwyLjkzLDAsMi45NCwyLjQ2cTAsNC40OCwwLDljMCwyLjQtLjY3LDMuMi0yLjk0LDMuNjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNzcgLTI5LjcpIi8+PC9zdmc+",YF=x.img`
    width: 30px;
`,XF=x.div`
    font-size: 1.1rem;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.textColor};
    opacity: 0.9;
`,xP=({short:e=!1})=>c.jsxs(P,{gap:14,children:[c.jsx(YF,{src:KF,className:"logo",alt:"Logo"})," ",!e&&c.jsx(XF,{children:"Soundbubble"})]}),JF=x.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    background: ${({theme:e})=>e.colors.pageBackground};
    width: 100%;
    height: 100dvh;
    transition: 1s opacity, 1s visibility;

    span {
        text-align: center;
        font-size: 1rem;
        max-width: 250px;
        width: 80%;
    }

    & .logo {
        animation: logopulse 2s infinite;

        @keyframes logopulse {
            0% {
                transform: scale(1);
                filter: brightness(1);
            }
            50% {
                transform: scale(1.05);
                filter: brightness(1.05);
            }
            100% {
                transform: scale(1);
                filter: brightness(1);
            }
        }
    }

    img {
        width: 100px;
        height: 100px;
    }

    & .loading {
        position: absolute;
        bottom: 60px;
        margin: 0 auto;
    }

    &.loaded {
        animation: showApp 0.5s forwards;
        animation-delay: 1s;

        & .logo {
            animation: shiftLogo 1s forwards ease-in-out;
            animation-delay: 0.4s;

            @keyframes shiftLogo {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-10px);
                }
                100% {
                    transform: translateY(5px);
                }
            }
        }

        @keyframes showApp {
            0% {
                opacity: 1;
                visibility: visible;
            }
            100% {
                opacity: 0;
                visibility: hidden;
            }
        }
    }
`,sE={slowInternetMessage:1e4,fullStop:2e4},ZF=()=>{const[{data:e},t]=ce.useUser(),[n,r]=T.useState(!1),[i,s]=T.useState(!1);return T.useEffect(()=>{setTimeout(()=>{e||r(!0)},sE.slowInternetMessage),setTimeout(()=>{e||s(!0)},sE.fullStop)},[e]),c.jsxs(JF,{className:t?"loading":"loaded",children:[c.jsx(xP,{short:!0}),!i&&n&&c.jsx(Vr,{children:"It seems like You have slow internet connection..."}),i&&c.jsx(Vr,{children:"Failed to load Soundbubble. Please try again later"}),t&&c.jsx(Wi,{})]})},EP=x.div`
    display: grid;
    grid-gap: 4px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px 50px 50px;
    grid-auto-flow: column;
    container-type: size;
    width: 100%;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1000px) {
        grid-template-columns: 100% 100% 100%;
        grid-template-rows: 50px 50px 50px 50px;
        grid-gap: 2px;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;

        & > * {
            scroll-snap-align: center;
        }
    }
`,ez=e=>{const{songs:t}=e,{currentSong:n,state:r,loaded:i}=q.useSong(),{handlePlay:s}=wP(e);return c.jsx(EP,{children:t.map((o,a)=>{const l=o.id===(n==null?void 0:n.id);return c.jsx(zf,{onClick:s,index:a,song:o,playing:l&&r==="playing",loading:l&&r==="loading",loaded:l&&i},o.id+a)})})},ph=x(H)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    min-width: 40px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: ${({theme:e})=>e.colors.pageBackground};
    z-index: 10;
    display: none;

    &.left {
        left: 0px;
    }

    &.right {
        right: 0px;
    }
`,tz=x.div`
    width: 100%;
    height: fit-content;
    position: relative;
    overflow: hidden;
    display: flex;

    @media (min-width: 1001px) {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -20px;
            width: 20px;
            height: 100%;
            background: ${({theme:e})=>e.colors.pageBackground2};
            box-shadow: 10px 0 10px 10px
                ${({theme:e})=>e.colors.pageBackground2};
            pointer-events: none;
            z-index: 1;
            display: none;
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: -20px;
            width: 20px;
            height: 100%;
            background: ${({theme:e})=>e.colors.pageBackground2};
            box-shadow: -10px 0 10px 10px
                ${({theme:e})=>e.colors.pageBackground2};
            pointer-events: none;
            z-index: 1;
            display: none;
        }

        &.showLeft {
            &::before {
                display: block;
            }

            ${ph}.left {
                display: flex;
            }
        }

        &.showRight {
            &::after {
                display: block;
            }

            ${ph}.right {
                display: flex;
            }
        }
    }
`,nz=x.div`
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 100%;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;

    /* &::-webkit-scrollbar {
        display: none;
    } */
`,IP=({children:e})=>{const[t,n]=T.useState(!1),[r,i]=T.useState(!1),[s,o]=T.useState(0),a=T.useRef(null),l=h=>{n(h.currentTarget.scrollLeft!==0),i(h.currentTarget.scrollLeft+h.currentTarget.clientWidth<h.currentTarget.scrollWidth),o(h.currentTarget.scrollLeft)},u=()=>{var h;((h=a.current)==null?void 0:h.scrollLeft)!==void 0&&(a.current.scrollLeft=s-a.current.scrollWidth/3)},d=()=>{var h;((h=a.current)==null?void 0:h.scrollLeft)!==void 0&&(a.current.scrollLeft=s+a.current.scrollWidth/3)};return c.jsxs(tz,{className:`${t?"showLeft":""} ${r?"showRight":""}`,children:[c.jsx(ph,{className:"left",onClick:u,children:c.jsx(sS,{})}),c.jsx(nz,{ref:a,onScroll:l,children:e}),c.jsx(ph,{className:"right",onClick:d,children:c.jsx(bj,{})})]})},Zm=e=>e===void 0?null:e>=1e3&&e<1e6?(e/1e3).toFixed(1)+"K":e>=1e6&&e<1e9?(e/1e6).toFixed(1)+"M":e.toString(),rz=x(pa)`
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    position: relative;
    background-size: 150% 250%;
    animation: none;
    color: #fff;
    z-index: 4;

    a {
        color: #fff;
    }
`,iz=x.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 30px;
    gap: 10px;

    button {
        border-radius: 100%;
        color: #fff;
    }

    @media (max-width: 768px) {
        top: 16px;
        right: 16px;
    }
`,sz=x.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 30px;
    left: 30px;

    button {
        border-radius: 100%;
        color: #fff;
    }

    @media (max-width: 768px) {
        top: 16px;
        left: 16px;
    }
`;x.div`
    width: 100%;
    position: absolute;
    height: 100%;
    left: 0;
    padding-top: 100px;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;

    img {
        width: 300%;
        animation: bgWave 3s linear infinite;

        @keyframes bgWave {
            0% {
                transform: translateX(0%);
            }
            100% {
                transform: translate(-50%);
            }
        }
    }
`;const TP=({name:e,subtitle:t,bottomButtons:n,isPrivate:r,numberOfListenersPerMonth:i,subscribers:s,imageComponent:o,colors:a,isVerified:l,handleClickShare:u})=>{const d=_c(),h=f=>{f.stopPropagation(),Zt.events.open({e:f,height:96,content:c.jsxs(xc,{children:[c.jsxs(H,{onClick:u,children:[c.jsx(vc,{}),"Share"]}),c.jsxs(H,{children:[c.jsx(ay,{}),"Info"]})]})})};return c.jsxs(rz,{$colors:a,children:[o,c.jsxs(P,{gap:8,d:"column",ai:"center",children:[c.jsxs(P,{gap:4,d:"column",children:[c.jsxs(P,{gap:6,children:[c.jsx("h2",{children:e}),l&&c.jsx(ry,{color:a==null?void 0:a[1]}),r&&c.jsx(lS,{size:20})]}),t]}),c.jsxs(P,{gap:20,style:{opacity:"0.8",fontWeight:"300"},children:[c.jsxs(P,{gap:4,children:[Zm(i),c.jsx(Nd,{size:16})]}),c.jsxs(P,{gap:4,children:[Zm(s),c.jsx(gS,{size:16})]})]})]}),c.jsx(sz,{children:c.jsx(H,{$height:"40px",$width:"40px",onClick:()=>d(-1),children:c.jsx(sS,{size:20})})}),c.jsxs(iz,{children:[c.jsx(Kh,{songId:void 0,likeColor:void 0,height:"40px",width:"40px"}),c.jsx(H,{$height:"40px",$width:"40px",onClick:h,children:c.jsx(Gj,{size:20})})]}),n]})},Gi=x.div`
    overflow-y: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
`,Ta=x.div`
    padding: 20px 40px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;

    @media (max-width: 1000px) {
        padding: 0 20px;
        padding-bottom: 10px;
        gap: 4px;
    }
`,Bf=({page:e,onChangeId:t})=>{const n=sL(`${e}/:id`);T.useEffect(()=>{t(n==null?void 0:n.params.id)},[n==null?void 0:n.params.id])},oz=()=>c.jsx("div",{children:"AddAlbumModal"}),az=x.div`
  width: 100%;
  height: 100%;
  background: ${({theme:e})=>e.colors.overlay};
`,lz=x(az)`
    position: absolute;
    z-index: 12;
`,cz=x.div`
    min-width: 500px;
    max-width: 800px;
    min-height: 500px;
    height: fit-content;
    max-height: 80dvh;
    background: ${({theme:e})=>e.colors.modal};
    border: 2px solid ${({theme:e})=>e.colors.border};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${({theme:e})=>e.borderRadius.middle};
    display: flex;
    flex-direction: column;

    & > button {
        top: 22px;
        right: 25px;
        width: 30px;
        height: 30px;
        background-color: ${({theme:e})=>e.colors.hover};
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: auto;
        bottom: 0;
        left: 0;
        top: auto;
        transform: translateY(0);
        border-radius: 8px 8px 0 0;
        border: none;
        height: 80dvh;
    }
`,uz=x.h3`
    margin: 25px;
    margin-bottom: 15px;
    font-weight: 300;

    @media (max-width: 768px) {
        margin: 20px;
    }
`,dz=x.div`
    height: 100%;
    padding-bottom: 25px;
    padding-top: 0;
    overflow-y: auto;
`;x.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
`;const hz=x.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,fz=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,pz=x.textarea`
  border: none;
  background: ${({theme:e})=>e.colors.input};
  padding: 10px 10px;
  width: 100%;
  resize: none;
  min-height: 300px;
  outline: none;
  color: #fff;
  font-weight: 300;
  border-radius: ${({theme:e})=>e.borderRadius.mild};
`,gz=({label:e,...t})=>c.jsxs(fz,{children:[e&&c.jsxs(m1,{children:[e," ",c.jsx(ZR,{children:t.required?"*":""})]}),c.jsx(pz,{...t})]}),mz=x.div`
	font-size: 0.5rem;

`,yz=()=>c.jsxs(mz,{children:[c.jsxs(hz,{children:[c.jsx(Vt,{label:"Song name"}),c.jsx(Vt,{label:"Release date",type:"date"}),c.jsx(gz,{label:"Lyrics"})]}),c.jsx(or,{appearance:"primary",children:"Add new song"})]});x.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;x(pa)`
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    background-size: 300% 300%;
    animation: none;
`;x.div`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    overflow: hidden;
    z-index: 2;

    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
`;const SP=x.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    @media (max-width: 1000px) {
        padding: 40px 20px;
    }
`,oE=x.div`
    width: 100%;

    h3 {
        margin-bottom: 10px;
    }
`,aE=x.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 300px;
    margin-bottom: -70px;

    button {
        box-shadow: 0 20px 50px #00000036;

        & > div {
            filter: brightness(${({theme:e})=>e.colors.brightness});
        }
    }

    @media (max-width: 500px) {
        width: 100%;
        padding: 0 20px;
    }
`,vz=x.div`
    width: 100%;
    background: ${({theme:e})=>e.colors.pageBackground2};
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1000px) {
        padding: 20px;
    }
`,_1=({isAdmin:e,isPageOwner:t,queueInfo:n,buttonColor:r})=>{const{state:i}=q.useSong(),{queue:s}=q.queue.useQueue(),o=ny();return e&&t?c.jsxs(aE,{className:"bottom-buttons",children:[c.jsxs(H,{onClick:()=>Ct.events.open({content:c.jsx(yz,{}),title:"Add new song"}),$background:o.colors.pageBackground,style:{color:o.colors.blue.main,gap:"10px"},children:[c.jsx(o4,{size:18}),"New song"]}),c.jsxs(H,{onClick:()=>Ct.events.open({content:c.jsx(oz,{}),title:"Add new album"}),$background:o.colors.pageTopButton,style:{color:o.colors.blue.main,gap:"10px"},children:[c.jsx(cy,{size:18}),"New album"]})]}):c.jsxs(aE,{className:"bottom-buttons",children:[c.jsxs(or,{loading:i==="loading"&&s.url===n.listUrl,onClick:()=>null,style:{background:o.colors.pageTopButton,color:r},children:[c.jsx(Uf,{size:20,loading:i==="loading"&&s.url===n.listUrl,playling:i==="playing"&&s.url===n.listUrl}),"Play"]}),c.jsxs(or,{loading:!1,onClick:()=>null,style:{background:o.colors.pageTopButton,color:r},children:[c.jsx(oS,{size:20}),"Shuffle"]})]})},wz=x(X)`
    --size: calc(100vw / 10 - 17px);

    @media (max-width: 1200px) {
        --size: calc(100vw / 7 - 32px);
    }

    @media (max-width: 1000px) {
        --size: calc(100vw / 5 - 32px);
    }

    @media (max-width: 768px) {
        --size: calc(100vw / 3 - 27px);
    }

    width: var(--size);
    height: var(--size);
`,It=({orientation:e="vertical"})=>e==="horizontal"?c.jsxs(P,{gap:10,width:"100%",children:[c.jsx(X,{radius:"100%",width:"40px",height:"40px"}),c.jsxs(P,{d:"column",gap:4,ai:"flex-start",children:[c.jsx(X,{radius:"4px",width:"200px",height:"14px"}),c.jsx(X,{radius:"4px",width:"80px",height:"10px"})]})]}):c.jsxs(P,{d:"column",gap:10,children:[c.jsx(wz,{radius:"100%",width:"calc(100vw / 11)",height:"calc(100vw / 11)"}),c.jsxs(P,{d:"column",gap:4,children:[c.jsx(X,{radius:"4px",width:"140px",height:"20px"}),c.jsx(X,{radius:"4px",width:"80px",height:"14px"})]})]}),_z=(e,t)=>{const[n,r]=T.useState(!1),[i,s]=T.useState(!1),o=T.useMemo(()=>new IntersectionObserver(([a])=>{s(a.isIntersecting),n||r(a.isIntersecting)}),[e]);return T.useEffect(()=>{i&&t&&t()},[i,n]),T.useEffect(()=>(e.current!==null&&o.observe(e.current),()=>o.disconnect()),[]),i},xz=({songs:e,currentPageUser:t})=>{const n=T.useRef(null),{similarAuthors:r,similarAuthorsLoading:i}=ce.useUserPage();return _z(n,()=>{r.length===0&&ce.events.loadSimilarAuthors(e)}),c.jsxs(vz,{ref:n,children:[c.jsx("h3",{children:"Similar Authors"}),c.jsx(IP,{children:r.map(s=>s.uid===(t==null?void 0:t.uid)?null:c.jsx(Fr,{user:s},s.uid))}),i&&c.jsxs(P,{gap:20,children:[c.jsx(It,{}),c.jsx(It,{}),c.jsx(It,{}),c.jsx(It,{}),c.jsx(It,{}),c.jsx(It,{})]})]})},Ez=x(X)`
    --size: calc(100vw / 8 + 3px);

    @media (max-width: 1200px) {
        --size: calc(100vw / 6);
    }

    @media (max-width: 800px) {
        --size: calc(100vw / 2 - 30px);
    }

    width: var(--size);
    height: var(--size);
`,Ws=()=>{const e=ny();return c.jsxs(P,{gap:12,ai:"flex-start",d:"column",children:[c.jsx(Ez,{width:"calc(100vw / 8)",height:"calc(100vw / 8)",radius:e.borderRadius.middle}),c.jsxs(P,{gap:7,ai:"flex-start",d:"column",children:[c.jsx(X,{width:"120px",height:"15px",radius:"4px"}),c.jsx(X,{width:"80px",height:"12px",radius:"3px"})]})]})},$e=({removeBackground:e=!1})=>c.jsxs(zF,{children:[c.jsx(HF,{className:e?"no-background":"",children:c.jsx(X,{width:"100%",height:"50px",radius:"12px",children:c.jsxs(P,{gap:10,width:"100%",padding:"8px",children:[c.jsx(X,{width:"35px",height:"35px",radius:Ay}),c.jsxs(P,{width:"100%",d:"column",ai:"flex-start",gap:4,children:[c.jsx(X,{width:"70%",height:"14px"}),c.jsx(X,{width:"120px",height:"10px"})]})]})})}),c.jsx(BF,{children:c.jsx(X,{width:"100%",height:"46px",radius:"10px",children:c.jsxs(P,{width:"100%",gap:20,padding:"6px",children:[c.jsx(X,{width:"35px",height:"35px",radius:"6px"}),c.jsx(X,{width:"25%",height:"18px",radius:"6px"}),c.jsx(X,{width:"25%",height:"18px",radius:"6px"}),c.jsx(X,{width:"20%",height:"18px",radius:"6px"}),c.jsx(X,{width:"18%",height:"18px",radius:"6px"})]})})})]}),Iz=()=>c.jsxs(P,{width:"100%",d:"column",ai:"flex-start",height:"100%",children:[c.jsx(X,{width:"100%",height:"400px",radius:"0",children:c.jsxs(P,{width:"100%",d:"column",padding:"56px 50px 50px 50px",ai:"center",jc:"center",gap:21,children:[c.jsx(X,{width:"200px",height:"200px",radius:"100%"}),c.jsxs(P,{d:"column",gap:8,children:[c.jsx(X,{width:"200px",height:"30px"}),c.jsx(X,{width:"100px",height:"10px",radius:"3px"}),c.jsx(X,{width:"100px",height:"20px",radius:"3px"})]})]})}),c.jsxs(SP,{children:[c.jsxs(P,{d:"column",ai:"flex-start",gap:8,width:"100%",children:[c.jsx(X,{width:"95px",height:"25px",radius:"6px"}),c.jsxs(EP,{children:[c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{})]})]}),c.jsxs(P,{d:"column",ai:"flex-start",gap:8,width:"100%",children:[c.jsx(X,{width:"115px",height:"25px",radius:"6px"}),c.jsxs(P,{gap:14,width:"100%",children:[c.jsx(Ws,{}),c.jsx(Ws,{}),c.jsx(Ws,{}),c.jsx(Ws,{}),c.jsx(Ws,{}),c.jsx(Ws,{})]})]}),c.jsxs(P,{d:"column",ai:"flex-start",padding:"40px 0 0 0",gap:20,width:"100%",children:[c.jsx(X,{width:"145px",height:"25px",radius:"6px"}),c.jsxs(P,{gap:30,width:"100%",children:[c.jsx(It,{}),c.jsx(It,{}),c.jsx(It,{}),c.jsx(It,{}),c.jsx(It,{}),c.jsx(It,{}),c.jsx(It,{}),c.jsx(It,{})]})]})]})]}),kP=({userData:e})=>{const{user:t,songs:n,playlists:r,loading:i}=ce.useUserPage(),[{data:s}]=ce.useUser(),[o]=ce.useFriends(),a=e??t,l=!!o.find(w=>w.uid===(t==null?void 0:t.uid)),{status:u}=Of(t==null?void 0:t.online),[d,h,f]=[(a==null?void 0:a.isAuthor)??!1,(a==null?void 0:a.isAdmin)??!1,(s==null?void 0:s.uid)===(a==null?void 0:a.uid)];Bf({page:"author",onChangeId:w=>{w&&ce.events.loadUserPageFx(w)}});const g={listName:(a==null?void 0:a.displayName)??"Author",listIcon:a==null?void 0:a.photoURL,listUrl:`/author/${a==null?void 0:a.uid}`,songs:n.slice(0,9)},m=()=>{Ct.events.open({title:`Share ${t==null?void 0:t.displayName} with friends`,content:c.jsx(Qc,{entity:t})})};return c.jsx(Gi,{children:c.jsxs(qi,{color:(a==null?void 0:a.imageColors[0])??"grey",loading:i,skeleton:c.jsx(Iz,{}),children:[c.jsx(TP,{handleClickShare:m,id:a==null?void 0:a.uid,name:a==null?void 0:a.displayName,subtitle:c.jsx(Vf,{color:t==null?void 0:t.imageColors[1],isAuthor:d,status:u,showLastSeen:l||(s==null?void 0:s.isAdmin)}),numberOfListenersPerMonth:a==null?void 0:a.numberOfListenersPerMonth,isVerified:a==null?void 0:a.isVerified,subscribers:a==null?void 0:a.subscribers,imageComponent:c.jsx(Ur,{isAuthor:d,colors:a==null?void 0:a.imageColors,src:a==null?void 0:a.photoURL,size:"200px"}),colors:a==null?void 0:a.imageColors,bottomButtons:c.jsx(_1,{buttonColor:a==null?void 0:a.imageColors[1],isAdmin:h,isPageOwner:f,queueInfo:g})}),c.jsxs(SP,{children:[c.jsxs(oE,{children:[c.jsx("h3",{children:"Top songs"}),c.jsx(ez,{...g})]}),r.length!==0&&c.jsxs(oE,{children:[c.jsx("h3",{children:"Top Albums"}),c.jsx(IP,{children:r.map(w=>c.jsx(Ps,{playlist:w},w.id))})]})]}),!i&&c.jsx(xz,{songs:n,currentPageUser:a})]})})},Tz=x.div`
    padding: 10px 25px;
`,Sz=()=>{const[e]=ce.useFriends(),t=()=>{};return c.jsx(Tz,{children:c.jsx(y1,{inputPlaceholder:"Search for friends...",entities:e,renderItem:(n,r,i)=>c.jsx(Fr,{orientation:"horizontal",as:"div",user:n,onClick:i,children:c.jsx(g1,{checked:r})},n.uid),renderButton:n=>c.jsxs(c.Fragment,{children:[n.length>1&&c.jsx(Vt,{placeholder:"Chat Title"}),c.jsxs(or,{appearance:"primary",onClick:t,children:["Create ",n.length>1?"group":"chat",c.jsx(eP,{children:n.length})]})]})})})},kz=e=>{const[t,n]=T.useState("password"),r=t==="password"?c.jsx(Kj,{}):c.jsx(Yj,{}),i=()=>{n(s=>s==="password"?"text":"password")};return c.jsx(Vt,{label:"Password",placeholder:"Enter password",rightIcon:r,onRightIconClick:i,type:t,icon:c.jsx(a4,{}),...e})},Cz=({actionAfterLogin:e})=>{const[t,n]=T.useState(""),[r,i]=T.useState(""),[s,o]=T.useState({}),[{data:a,error:l},u]=ce.useUser(),d=()=>{const m={};return t||(m.email="Email is required"),r||(m.password="Password is required"),o(m),console.log(m),Object.keys(m).length!==0},h=()=>{const m=d();console.log(m,s),e&&e(),m||ce.events.login({email:t,password:r})};T.useEffect(()=>{a&&Ct.events.close()},[a]),console.log(l);const f=m=>{n(m.currentTarget.value),o(w=>{const _={...w};return delete _.email,_})},g=m=>{i(m.currentTarget.value),o(w=>{const _={...w};return delete _.password,_})};return c.jsxs(P,{d:"column",width:"100%",jc:"space-between",height:"100%",gap:20,padding:"0 25px",children:[c.jsxs(P,{d:"column",jc:"center",width:"100%",height:"300px",gap:20,onKeyDown:m=>m.key==="Enter"&&h(),children:[l==null?void 0:l.message,c.jsx(Vt,{value:t,onChange:f,placeholder:"Enter email",label:"Email",type:"email",onError:m=>console.log(m),required:!0,icon:c.jsx(Mj,{}),error:s==null?void 0:s.email}),c.jsx(kz,{onChange:g,value:r,required:!0,error:s==null?void 0:s.password})]}),c.jsx(or,{loading:u,onClick:h,appearance:"primary",children:"Login"}),c.jsx(H,{children:"Don't have an account"})]})},CP=()=>{const[{data:e}]=ce.useUser(),t=r=>()=>{Ct.events.open({title:"Войдите в аккаунт",content:c.jsx(Cz,{actionAfterLogin:r})})};return{loggedIn:r=>e===null?t(r):r,openLoginModal:t}},Az=70,Rz=110,Pz=x.header`
    width: 100%;
    max-width: 100%;
    min-height: ${Az}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px 45px 0 45px;
    top: 0px;
    position: sticky;
    scroll-padding-top: 150px;
    /* border-bottom: 1px solid ${({theme:e})=>e.colors.border}; */
    background: ${({theme:e})=>e.colors.header};
    backdrop-filter: blur(16px);
    color: ${({theme:e})=>e.colors.textColor};
    z-index: 11;

    &.hidden {
        display: none;
    }

    @media (max-width: 1000px) {
        padding: 10px 20px;
        min-height: ${Rz}px;
        display: flex;
        justify-content: flex-start;
    }
`,bz=x.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
        display: none;
    }
`,Nz=x.div`
    width: 100%;

    @media (min-width: 1001px) {
        display: none;
    }
`,jz=x.h2`
    width: 150px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 1000px) {
        font-weight: 500;
    }
`;var Ii=(e=>(e.light="light",e.dark="dark",e))(Ii||{});const Mz={[Ii.light]:OL,[Ii.dark]:_s},Lz=Ii.dark,Dz=()=>{const e=localStorage.getItem("theme");return e?Ii[e]:Lz},hc=ee(Dz()),$z=je(e=>{localStorage.setItem("theme",e)}),x1=V(),Oz=V();j({clock:x1,source:hc,fn:e=>e===Ii.light?Ii.dark:Ii.light,target:[hc,$z]});j({clock:Oz,source:hc,fn:(e,t)=>t,target:hc});const AP=()=>{const e=_e(hc);return{theme:e,themeParams:Mz[e]}},Vz=()=>{const[{data:e}]=ce.useUser(),t=_c(),n=()=>{ce.events.logout()},r=()=>{Ct.events.open({title:"Share profile with friends",content:c.jsx(Qc,{entity:e})}),Zt.events.close()};return c.jsxs(xc,{children:[c.jsxs(H,{onClick:()=>{t("/me"),Zt.events.close()},children:[c.jsx(Ur,{colors:(e==null?void 0:e.imageColors)??["grey"],src:e==null?void 0:e.photoURL,size:"20px",isAuthor:e==null?void 0:e.isAuthor}),"Go to profile"]}),c.jsxs(H,{onClick:r,children:[c.jsx(vc,{}),"Share profile"]}),c.jsx(Fl,{}),c.jsxs(H,{children:[c.jsx(aS,{}),"Edit"]}),c.jsxs(H,{children:[c.jsx(f4,{}),"Settings"]}),c.jsxs(H,{onClick:()=>x1(),children:[c.jsx(pS,{}),"Change theme"]}),c.jsx(Fl,{}),c.jsxs(H,{onClick:n,children:[c.jsx(n4,{}),"Logout"]})]})},Sa=({children:e,hide:t})=>{const[{data:n},r]=ce.useUser(),i=Br(),{openLoginModal:s}=CP(),o=R1.find(l=>l.url.includes(i.pathname.split("/")[1])),a=l=>{l.stopPropagation(),Zt.events.open({content:c.jsx(Vz,{}),e:l,height:289})};return c.jsxs(Pz,{className:t?"hidden":"",children:[c.jsxs(P,{width:"100%",height:"50px",jc:"space-between",gap:30,children:[c.jsx(jz,{children:o==null?void 0:o.title}),c.jsx(bz,{children:e}),c.jsxs(P,{width:"150px",gap:20,jc:"flex-end",children:[n&&c.jsx(H,{$width:"40px",onClick:a,children:c.jsx(Ur,{colors:n==null?void 0:n.imageColors,src:n==null?void 0:n.photoURL,size:"30px",isAuthor:n==null?void 0:n.isAuthor})}),!n&&c.jsx(or,{loading:r,width:"100px",onClick:s(),appearance:"secondary",children:"Login"})]})]}),c.jsx(Nz,{children:e})]})},Uz=x.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 768px) {
        width: auto;
        height: auto;
    }
`,Fz=x.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`,zz=x.div`
    display: block;

    @media (max-width: 768px) {
        display: none;
    }
`,Bz=x.div`
    min-width: 380px;
    max-width: 380px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    background: ${({theme:e})=>e.colors.pageBackground};
    border-right: 1px solid ${({theme:e})=>e.colors.border};

    @media (max-width: 768px) {
        width: 100%;
        max-width: none;
        overflow-y: hidden;
        display: none;

        &.no-chat {
            display: flex;
        }
    }
`,Hz=x.div`
    width: 100%;

    @media (max-width: 768px) {
        display: block;

        &.no-chat {
            display: none;
        }
    }
`,Wz=()=>{const{chats:e,loadingChats:t,chatData:n,lastMessage:r,loadingChatData:i,unreadCounts:s,currentChatId:o}=Qn.useChats(),a=ny();Qn.useLoadChats();const l=()=>{Ct.events.open({title:"Create chat with friends",content:c.jsx(Sz,{})})};return c.jsxs(Gi,{children:[c.jsx(Sa,{children:c.jsx(Fz,{children:c.jsxs(P,{gap:10,width:"100%",children:[c.jsx(Vt,{icon:c.jsx(br,{}),placeholder:"Search for chats..."}),c.jsx(H,{onClick:l,$width:"48px",children:c.jsx(Zw,{size:20})})]})})}),c.jsxs(Uz,{children:[c.jsxs(Bz,{className:o?"":"no-chat",children:[c.jsx(zz,{children:c.jsxs(P,{width:"100%",gap:10,children:[c.jsx(Vt,{icon:c.jsx(br,{}),placeholder:"Search for chats..."}),c.jsx(H,{onClick:l,$width:"48px",children:c.jsx(Zw,{size:20})})]})}),c.jsx(qi,{background:a.colors.pageBackground,loading:t||i,skeleton:c.jsx(XR,{}),children:c.jsx(P,{d:"column",gap:0,width:"100%",height:"100%",padding:"10px 0",children:e.map(u=>c.jsx(c.Fragment,{children:c.jsx(YR,{isSelected:o===u.id,unreadCount:s[u.id],lastMessage:r[u.id],chatData:n,chat:u},u.id)}))})})]}),c.jsx(Hz,{className:o?"":"no-chat",children:c.jsx(Cy,{})})]})]})},qz=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),Gz=e=>{let t=0;return e?e==null?void 0:e.reduce((n,r,i)=>{const s=e[i-1],o=(s==null?void 0:s.sender)===(r==null?void 0:r.sender),a=new Date((r==null?void 0:r.sentTime)??"").getTime()-new Date((s==null?void 0:s.sentTime)??"").getTime()<6e5;return o&&a?n[t]?n[t].push(r):n[t]=[r]:(t+=1,n[t]=[r]),n},[]):[]},Qz=()=>c.jsxs(xc,{children:[c.jsxs(H,{children:[c.jsx(ay,{}),"Info"]}),c.jsxs(H,{children:[c.jsx(Xj,{}),"Attacments"]}),c.jsxs(H,{children:[c.jsx(l4,{}),"Change wallpaper"]})]}),Kz=x.div`
    height: 100%;
    padding-bottom: 4px;
`,Yz=x.div`
    font-size: 0.7rem;
    margin-left: 10px;
    color: ${({theme:e})=>e.colors.greyText};
    font-weight: 300;
`,Xz=x.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`,Jz=x.div`
    padding: 8px 10px;
    padding-bottom: 4px;
    border-radius: 8px 10px 10px 12px;
    background: ${({theme:e})=>e.colors.input};
    max-width: 500px;
    font-size: 0.9rem;
    font-weight: 200;
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 10px;

    &::before {
        content: '';
        display: block;
        position: absolute;
        background: ${({theme:e})=>e.colors.input};
        width: 23px;
        height: 20px;
        bottom: 2px;
        left: -15px;
        border-radius: 100%;
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        background: ${({theme:e})=>e.colors.pageBackground};
        width: 15px;
        height: 21px;
        border-radius: 0 0 20px 0;
        bottom: 2px;
        left: -15px;
    }

    &.mine {
        background-color: ${({theme:e})=>e.colors.blue.mild};

        &::before {
            background-color: ${({theme:e})=>e.colors.blue.mild};
        }
    }

    &.isPrevByTheSameSender {
        border-radius: ${({$isFirst:e})=>e?"14px 14px 14px 8px":"8px 14px 14px 8px"};

        &::before {
            display: none;
        }
    }
`,Zz=x(KR)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 8px;
    font-size: 0.65rem;

    svg {
        width: 14px;
        height: 14px;
    }
`,e8=x.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,t8=x.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 20px;
    overflow-y: auto;
`,n8=x(Vt)`
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 16px;
`,r8=x.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    width: 100%;
    height: 80px;
    border-top: 1px solid ${({theme:e})=>e.colors.border};
`,i8=x.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border-radius: 30px;
    font-weight: 300;
    font-size: 0.8rem;
    position: sticky;
    top: 0px;
    z-index: 1;
    background: ${({theme:e})=>e.colors.pageBackground2};
    margin: 10px auto;
    width: 160px;
`,s8=x.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    padding: 6px 15px;
    width: 100%;
`,o8=x.div`
    width: 50px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: 0.2s;
`,a8=x.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
`,l8=x.div`
    position: sticky;
    bottom: 20px;
    transition: 0.2s;
`,c8=x.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background: ${({theme:e})=>e.colors.pageBackground2};
`,u8=x.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 10px 20px;
    font-weight: 300;
    font-size: 0.8rem;
    opacity: 0.6;
`,d8=x.div`
    width: 320px;
`,h8=x(H)`
    min-width: 35px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background: ${({theme:e})=>e.colors.blue.action};
    color: #fff;
`,f8=x(H)`
    position: fixed;
    bottom: 170px;
    right: 20px;
    width: 40px;
    border-radius: 100%;
    background: ${({theme:e})=>e.colors.pageBackground2};

    span {
        position: absolute;
        transform: translate(14px, 14px);
    }
`,p8=()=>{const{chats:e,currentChatId:t,chatData:n}=Qn.useChats(),[{data:r}]=ce.useUser(),i=e.find(m=>m.id===t),s=(i==null?void 0:i.typing.filter(m=>m!==(r==null?void 0:r.uid)).map(m=>n[m]))??[],o=(i==null?void 0:i.participants.filter(m=>m!==(r==null?void 0:r.uid)))??[],a=o.map(m=>{var w;return Of((w=n[m])==null?void 0:w.online).status})??[],l=a.filter(m=>m==="online").length,u=n[o[0]],d=(i==null?void 0:i.chatName)!=="",h=d?i==null?void 0:i.chatImage:u==null?void 0:u.photoURL,f=d?i==null?void 0:i.chatName:u==null?void 0:u.displayName,g=m=>{m.stopPropagation(),Zt.events.open({content:c.jsx(Qz,{}),e:m,height:136})};return c.jsxs(c8,{children:[c.jsxs(P,{gap:16,children:[!!Object.keys(n).length&&c.jsxs(c.Fragment,{children:[c.jsx(Ur,{fallbackIcon:c.jsx(f1,{name:f??"Undefined",width:"35px"}),size:"35px",src:h,colors:["grey"],isAuthor:!1,children:a[0]==="online"&&!d&&c.jsx(p1,{})}),c.jsxs(P,{d:"column",ai:"flex-start",children:[c.jsx(QR,{children:f??"Untitled"}),c.jsx(HR,{typing:s,isGroupChat:d,children:d?c.jsxs(Vr,{children:[i!=null&&i.participants.length?`${i==null?void 0:i.participants.length} members`:null,l!==0&&`, ${l} online`]}):c.jsx(Vf,{isAuthor:!1,showLastSeen:!0,status:a[0]})})]})]}),!Object.keys(n).length&&c.jsxs(P,{gap:16,children:[c.jsx(X,{width:"35px",height:"35px",radius:"100%"}),c.jsxs(P,{gap:2,d:"column",ai:"flex-start",children:[c.jsx(X,{width:"100px",height:"12px"}),c.jsx(X,{width:"40px",height:"9px"})]})]})]}),c.jsx(P,{width:"fit-content",children:c.jsx(H,{$width:"40px",onClick:g,children:c.jsx(iy,{size:20})})})]})},g8=()=>c.jsxs(xc,{children:[c.jsxs(H,{children:[c.jsx(vc,{}),"Reply"]}),c.jsxs(H,{children:[c.jsx(Wj,{}),"Copy"]})]}),m8=e=>{let t;try{t=new URL(e)}catch{return!1}return t.protocol==="http:"||t.protocol==="https:"},y8=x.a`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	color: ${({theme:e})=>e.colors.blue.main};
	padding: 4px;
	background: ${({theme:e})=>e.colors.blue.transparent2};
	border-radius: 6px;
`,v8=({message:e})=>{const t=e.split(" ");return c.jsx(c.Fragment,{children:t.map(n=>m8(n)?c.jsxs(y8,{href:n,target:"_blank",rel:"noreferrer",children:[c.jsx(e4,{size:18}),n.slice(8,n.length)]}):n+" ")})},eg=(e,t)=>e.map(n=>{const r=t[n];if(!r)return null;const i=Lf(r);return i==="user"||i==="author"?c.jsx(Fr,{user:r,orientation:"horizontal"},n):i==="album"||i==="playlist"?c.jsx(Ps,{playlist:r,orientation:"horizontal"},n):c.jsx(zf,{song:r,playing:!1,loading:!1,loaded:!1,index:0,onClick:()=>null},n)}),w8=({message:e,isNotSeen:t,isMine:n,chatData:r,isPrevByTheSameSender:i,isFirst:s,onSeen:o})=>{var g,m;const a=GR(e),l=e.attachedSongs.length||e.attachedAlbums.length||e.attachedAuthors.length,[u,d]=T.useState(!1),h=T.useRef(null);T.useEffect(()=>{const w=h.current,_=new IntersectionObserver(([p])=>{d(p.isIntersecting)},{root:null,rootMargin:"0px",threshold:.5});return w&&_.observe(w),()=>{w&&_.unobserve(w)}},[]),T.useEffect(()=>{u&&t&&o(e.id)},[u,t]);const f=w=>{w.stopPropagation(),w.preventDefault(),Zt.events.open({content:c.jsx(g8,{}),height:96,e:w})};return c.jsxs(Xz,{ref:h,children:[!n&&s&&c.jsx(Yz,{children:(g=r[e.sender])==null?void 0:g.displayName}),c.jsxs(P,{width:"100%",gap:10,children:[c.jsxs(Jz,{$isFirst:s,$background:n?(m=r[e.sender])==null?void 0:m.imageColors[1]:"",onContextMenu:f,className:(n?"mine":"")+(i?" isPrevByTheSameSender":""),children:[c.jsx(P,{d:"column",ai:"flex-start",children:c.jsxs(Kz,{children:[c.jsx(v8,{message:e.message}),!!l&&c.jsxs(d8,{children:[eg(e.attachedSongs,r),eg(e.attachedAlbums,r),eg(e.attachedAuthors,r)]})]})}),c.jsxs(Zz,{children:[c.jsx("span",{children:new Date(e.sentTime).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})}),c.jsx(WR,{isMine:n,sendStatus:a})]})]}),a==="Error"&&c.jsx(Qj,{color:"red",size:20})]})]})},_8=({message:e})=>c.jsx(u8,{children:e.message}),x8=(e,t)=>({id:_P(),sender:e,message:t,sentTime:new Date().getTime(),seenBy:[e],attachedAlbums:[],attachedSongs:[],attachedAuthors:[],inResponseToMessage:"",status:"pending"}),lE=()=>{const{chats:e,currentChatId:t,currentChatMessages:n,currentChatMessagesLoading:r,chatData:i}=Qn.useChats(),[{data:s}]=ce.useUser(),o=Gz(n),a=e.find(C=>C.id===t),l=(a==null?void 0:a.participants.filter(C=>C!==(s==null?void 0:s.uid)))??[],u=i[l[0]],d=(a==null?void 0:a.chatName)!=="",h=d?a==null?void 0:a.chatImage:u==null?void 0:u.photoURL,f=d?a==null?void 0:a.chatName:u==null?void 0:u.displayName,g=T.useRef(null),[m,w]=T.useState(!0),_=n.filter(C=>{var N;return!((N=C.seenBy)!=null&&N.includes((s==null?void 0:s.uid)??""))})??0,[p,y]=T.useState(""),v=T.useRef(null);Bf({page:"chat",onChangeId:C=>{w(!0),Qn.events.setCurrentChatId(C)}});const E=C=>{y(C.currentTarget.value)},S=C=>{console.log(C.currentTarget.scrollTop,C.currentTarget.scrollHeight),C.currentTarget.scrollTop>=C.currentTarget.scrollHeight-800?w(!0):w(!1)},k=()=>{var C;if(!(p.trim().length===0||!(s!=null&&s.uid))){if(t){const N=x8(s==null?void 0:s.uid,p);Qn.events.sendMessage({chatId:t,message:N})}y(""),(C=v.current)==null||C.focus()}};T.useEffect(()=>{console.log(m),g.current&&m&&g.current.scrollIntoView({block:"end"})},[n.length,m]);const I=C=>{Qn.events.seenMessage(C)};return c.jsxs(e8,{children:[c.jsx(p8,{}),c.jsxs(t8,{onScroll:S,children:[r&&c.jsx(P,{jc:"center",height:"100%",width:"100%",children:c.jsx(Wi,{})}),!r&&o.map((C,N,F)=>{var Fs,Wr,$n,M;const ae=i[C[0].sender],cr=!qz(new Date(((Fs=F[N][0])==null?void 0:Fs.sentTime)??""),new Date((($n=(Wr=F[N-1])==null?void 0:Wr[0])==null?void 0:$n.sentTime)??"")),Dn=C[0].sender===qR,Us=new Date(((M=F[N][0])==null?void 0:M.sentTime)??"").toLocaleDateString("ru-RU",{day:"2-digit",month:"long",year:"numeric"});return c.jsxs(c.Fragment,{children:[cr&&c.jsx(i8,{children:Us}),c.jsxs(s8,{children:[!Dn&&c.jsx(o8,{children:c.jsx(l8,{children:c.jsx(Ur,{fallbackIcon:c.jsx(Ur,{fallbackIcon:c.jsx(f1,{width:"35px",name:f??"Undefined"}),size:"35px",src:h,colors:["grey"],isAuthor:!1}),colors:["grey"],size:"35px",src:ae==null?void 0:ae.photoURL,isAuthor:!1})})}),c.jsx(a8,{children:C.map((z,W)=>{var Te;const oe=!((Te=z.seenBy)!=null&&Te.includes((s==null?void 0:s.uid)??""));return Dn?c.jsx(_8,{message:z},z.id):c.jsx(ge.Fragment,{children:c.jsx(w8,{isFirst:W===0,chatData:i,isPrevByTheSameSender:W!==C.length-1,message:z,isMine:z.sender===(s==null?void 0:s.uid),isNotSeen:!!oe,onSeen:I},z.id)},z.id)})})]})]})}),c.jsx("div",{ref:g,style:{width:"100%",minHeight:"20px"}}),!m&&c.jsxs(f8,{children:[c.jsx(Pj,{size:20}),_.length!==0&&c.jsx(h1,{children:_.length})]})]}),c.jsxs(r8,{children:[c.jsx(H,{$width:"40px",children:c.jsx(Fj,{})}),c.jsx(n8,{ref:v,onKeyDown:C=>{C.key==="Enter"&&k()},placeholder:"Type something",value:p,onChange:E}),p.length!==0&&c.jsx(h8,{$height:"35px",onClick:k,children:c.jsx(jj,{size:23})})]})]})};function qs(e){let t;if(e){if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)){t=e.substring(1).split(""),t.length==3&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]);const n=+("0x"+t.join(""));return[n>>16&255,n>>8&255,n&255].join(",")}throw new Error("Bad Hex")}}const E8=x.div`
	--color-bg1: ${({$colors:e})=>(e==null?void 0:e[0])??"purple"};
	--color-bg2: ${({theme:e})=>e.colors.pageBackground};
	--color1: ${({$colors:e})=>qs(e==null?void 0:e[2])??"18, 113, 255"};
	--color2: ${({$colors:e})=>qs(e==null?void 0:e[2])??"221, 74, 255"};
	--color3: ${({$colors:e})=>qs(e==null?void 0:e[3])??"100, 220, 255"};
	--color4: ${({$colors:e})=>qs(e==null?void 0:e[4])??"208, 50, 50"};
	--color5: ${({$colors:e})=>qs(e==null?void 0:e[5])??"188, 180, 50"};
	--color-interactive: ${({$colors:e})=>qs(e==null?void 0:e[1])??"140, 100, 255"};
	--circle-size: 150%;
	--blending: hard-light;

	width: 100%;
	height: 100%;

	position: absolute;
	overflow: hidden;
	transition: 0.2s;
	background: linear-gradient(180deg, var(--color-bg1), var(--color-bg2));

	.noise-layer {
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(var(--color-bg1, 0.2));
		background-image: url('./noise-light.png');
		opacity: 0.2;
		z-index: 1;
		transform: translateZ(0);

	}


	top: 0;
	left: 0;

	svg {
		display: none;
	}

	
	.gradients-container {
		width: 100%;
		height: 100%;
		filter: url(#goo);
	}

	@keyframes moveInCircle {
		0% {
			transform: rotate(0deg);
		}
		50%{
			transform: rotate(180deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}

	@keyframes moveVertical {
		0% {
			transform: translateY(-50%);
		}
		50%{
			transform: translateY(50%);
		}
		100%{
			transform: translateY(-50%);
		}
	}

	@keyframes moveHorizontal {
		0% {
			transform: translateX(-50%) translateY(-10%);
		}
		50%{
			transform: translateX(50%) translateY(10%);
		}
		100%{
			transform: translateX(-50%) translateY(-10%);
		}
	}

	.g1, .g2, .g3, .g4, .g5, .interactive {
		position: absolute;
		mix-blend-mode: var(--blending);

		width: var(--circle-size);
		height: var(--circle-size);

		top: calc(50% - var(--circle-size) / 2);
		left: calc(50% - var(--circle-size) / 2);

		opacity: 0.8;
	}

	.interactive {
		background: radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;
		opacity: 0.8;
		top: -50%;
		left: -65%;
		width: 100%;
		height: 100%;
	}

	.g1 {
		background: radial-gradient(circle at center, rgba(var(--color1), 0.8) 0, rgba(var(--color2), 0) 50%) no-repeat;
		transform-origin: center center;
		animation: moveVertical 30s ease infinite;
	}

	.g2 {
		background: radial-gradient(circle at center, rgba(var(--color2), 0.8) 0, rgba(var(--color2), 0) 50%) no-repeat;
		transform-origin: calc(50% - 400px);
		animation: moveInCircle 20s reverse infinite;
	}

	.g3 {
		background: radial-gradient(circle at center, rgba(var(--color3), 0.8) 0, rgba(var(--color3), 0) 50%) no-repeat;
		top: calc(50% - var(--circle-size) / 2 + 200px);
		left: calc(50% - var(--circle-size) / 2 + 200px);
		transform-origin: calc(50% + 400px);
		animation: moveInCircle 40s linear infinite;
	}

	.g4 {
		background: radial-gradient(circle at center, rgba(var(--color4), 0.8) 0, rgba(var(--color4), 0) 50%) no-repeat;
		opacity: 0.2;
		transform-origin: calc(50% - 200px);
		animation: moveHorizontal 40s ease infinite;
	}

	.g5 {
		background: radial-gradient(circle at center, rgba(var(--color5), 0.8) 0, rgba(var(--color5), 0) 50%) no-repeat;
		top: calc(50% - var(--circle-size));
		left: calc(50% - var(--circle-size));
		transform-origin: calc(50% - 800px) calc(50% + 200px);
		animation: moveInCircle 20s ease infinite;
	}
`;let tg=0,ng=0,cE=0,uE=0;const dE=50,I8=()=>{const e=T.useRef(null),{currentSong:t}=q.useSong(),n=T.useCallback(()=>{tg+=(cE-tg)/dE,ng+=(uE-ng)/dE,e.current&&(e.current.style.transform=`translate(${tg}px, ${ng}px)`),requestAnimationFrame(()=>n())},[]),r=i=>{cE=i.clientX,uE=i.clientY};return T.useEffect(()=>{n()},[n]),c.jsxs(E8,{$colors:(t==null?void 0:t.imageColors)??[],onMouseMove:r,children:[c.jsx("div",{className:"noise-layer"}),c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",children:c.jsx("defs",{children:c.jsxs("filter",{id:"goo",children:[c.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),c.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8",result:"goo"}),c.jsx("feBlend",{in:"SourceGraphic",in2:"goo"})]})})}),c.jsxs("div",{className:"gradients-container",children:[c.jsx("div",{className:"g1"}),c.jsx("div",{className:"g2"}),c.jsx("div",{className:"g3"}),c.jsx("div",{className:"g4"}),c.jsx("div",{className:"g5"}),c.jsx("div",{className:"interactive",ref:e})]})]})},T8=x.div`
   position: absolute;
   left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
`,S8=()=>{const e=q.fullscreen.useFullScreen();return c.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[!e&&c.jsx(I8,{}),c.jsx(T8,{children:c.jsx(H,{$width:"260px",style:{fontSize:"2rem",minHeight:"60px"},children:c.jsxs(P,{gap:10,children:[c.jsx(ly,{size:40}),"Play Wave"]})})})]})},k8=({orientation:e,quantity:t=15})=>c.jsx(P,{gap:10,d:"column",width:"100%",children:Array.from(Array(t)).map((n,r)=>c.jsx(It,{orientation:e},r))}),hE=x.div`
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    gap: 10px;
	 align-items: center;
`,C8=()=>{const[e,t]=ce.useFriends();return c.jsxs(Gi,{children:[c.jsx(Sa,{children:c.jsxs(hE,{children:[c.jsx(Vt,{placeholder:"Search for friends...",icon:c.jsx(br,{})}),c.jsx(or,{width:"200px",appearance:"primary",children:"Create group chat"})]})}),c.jsx(Ta,{children:c.jsx(hE,{children:c.jsx(qi,{loading:t,skeleton:c.jsx(k8,{orientation:"horizontal"}),children:c.jsx(P,{d:"column",gap:4,width:"100%",children:e.map(n=>c.jsx(Fr,{showLastSeen:!0,user:n,orientation:"horizontal",children:c.jsx(H,{$width:"40px",children:c.jsx(r4,{})})},n.uid))})})})})]})},E1=je(async e=>{try{return await ER.getHistoryByUserId(e)}catch(t){throw new Error(t.message)}}),e0=wy(),Hf=ee([]);Hf.reset(Le);const fE=kt.map(e=>{var t;return((t=e.data)==null?void 0:t.uid)??null});j({clock:[e0.open,fE],source:{gateStatus:e0.status,userId:fE,history:Hf},filter:({history:e,userId:t,gateStatus:n})=>n&&t!==null&&e.length===0,fn:({userId:e})=>e,target:E1});Vs(E1,Hf);const pE={useHistory:()=>_e([Hf,E1.pending]),useLoadHistory:()=>vy(e0)},I1=({quantity:e=15})=>c.jsx(P,{gap:4,d:"column",width:"100%",children:Array.from(Array(e)).map((t,n)=>c.jsx($e,{},n))}),A8=x.div`
`,R8=x.div`
    width: 100%;
    display: grid;
    padding: 8px;
    grid-template-columns: 55px 1fr 1fr 200px 86px;
    color: ${({theme:e})=>e.colors.textColor};
    position: sticky;
    top: 0;
    background: ${({theme:e})=>e.colors.pageBackground};
    z-index: 2;
`,ku=x.div`
    text-transform: uppercase;
    opacity: 0.3;
    font-size: 0.7rem;
    font-weight: 400;
`;x.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;x.div`
    container-type: size;
    display: flex;
    align-items: center;
    gap: 0px;
    width: 100%;
    height: 40px;
`;x(Gc)`
    border-radius: ${({theme:e})=>e.borderRadius.mild};

    @container (min-width: 700px) {
        min-width: 35px;
        height: 35px;
    }

    @container (max-width: 699px) {
        min-width: 40px;
        height: 40px;
    }
`;x.div`
    display: flex;
    width: 100%;

    @container (min-width: 700px) {
        flex-direction: row;
        align-items: center;
        gap: 30px;
        margin-left: 28px;
    }

    @container (max-width: 699px) {
        flex-direction: column;
        gap: 6px;
        margin-left: 15px;
    }
`;x(Gc)`
    height: 15px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};
    width: 100%;

    @container (min-width: 700px) {
        width: 100%;
    }

    @container (max-width: 699px) {
        width: 300px;
    }
`;x(Gc)`
    width: 100%;
    border-radius: ${({theme:e})=>e.borderRadius.mild};

    @container (min-width: 700px) {
        width: 100%;
        height: 15px;
    }

    @container (max-width: 699px) {
        width: 200px;
        height: 8px;
    }
`;x(Gc)`
    height: 15px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};

    @container (min-width: 700px) {
        width: 380px;
    }

    @container (max-width: 699px) {
        display: none;
    }
`;const T1=e=>c.jsxs(A8,{children:[!!e.songs.length&&c.jsxs(R8,{children:[c.jsx(ku,{}),c.jsx(ku,{children:"Name"}),c.jsx(ku,{children:"Author"}),c.jsx(ku,{children:"Listenings"})]}),c.jsx(w1,{...e})]}),P8=()=>{const[e,t]=pE.useHistory();return pE.useLoadHistory(),c.jsxs(Gi,{children:[c.jsx(Sa,{}),c.jsx(Ta,{children:c.jsx(qi,{color:"",loading:t,skeleton:c.jsx(I1,{}),children:c.jsx(T1,{songs:e,listName:"History",listIcon:c.jsx(oy,{}),listUrl:"/history"})})})]})},b8=x.div`
    width: fit-content;
    padding: 4px;
    border-radius: 20px;
    background: ${({theme:e})=>e.colors.pageBackground2};
    display: flex;
    align-items: center;
    gap: 0px;
    position: relative;
    /* box-shadow: ${({theme:e})=>e.colors.shadow}; */

    @media (max-width: 768px) {
        width: 100%;
    }
`,N8=x(js)`
    min-width: calc(100% / 3);
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border-radius: 16px;
    cursor: pointer;
    user-select: none;
    z-index: 1;
    font-size: 0.95rem;
    opacity: 0.7;
    transition: 0.2s color;

    &.selected {
        color: #fff;
        opacity: 1;
    }

    @media (hover: hover) {
        &:hover {
            background: ${({theme:e})=>e.colors.hover};
        }
    }

    @media (max-width: 1000px) {
        font-size: 0.8rem;
        height: 32px;
        padding: 4px 12px;
    }
`,j8=x.div`
    width: ${({$width:e})=>e};
    padding: 10px 16px;
    height: 38px;
    border-radius: 16px;
    background: ${({theme:e})=>e.colors.blue.action};
    position: absolute;
    transition: 0.2s;
    transform: translateX(
        calc(${({$shift:e})=>e*100}% - ${({$shift:e})=>e*4}px)
    );
    left: 4px;
    top: 4px;
    z-index: 0;

    @media (max-width: 1000px) {
        height: 32px;
        padding: 4px 12px;
    }
`,M8=({tabs:e,currentTab:t=0})=>{const[n,r]=T.useState(t);return T.useEffect(()=>{r(t)},[t]),c.jsxs(b8,{children:[c.jsx(j8,{$width:`${100/e.length}%`,$shift:n}),e.map(({title:i,url:s},o)=>c.jsx(N8,{to:s,className:o===n?"selected":"",onClick:()=>r(o),children:i},i+o))]})},RP=x.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    height: fit-content;

    @media (max-width: 768px) {
        gap: 20px;
    }
`,L8=x(RP)`
    gap: 32px;

    @media (max-width: 768px) {
        gap: 20px;
    }
`,D8=x(H)`
    min-width: 46px;
    width: 46px;
    height: 46px;
    border-radius: 20px;
    background: ${({theme:e})=>e.colors.pageBackground2};

    svg {
        opacity: 0.7;
        width: 20px;
        height: 20px;
    }

    @media (max-width: 768px) {
        min-width: 40px;
        width: 40px;
        height: 40px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`,gE=[{title:"Songs",url:""},{title:"Playlists",url:"playlists"},{title:"Authors",url:"authors"}],$8=()=>{const e=Br(),t=gE.findIndex(n=>n.url===e.pathname.split("/").at(-1));return c.jsxs(Gi,{children:[c.jsx(Sa,{children:c.jsxs(P,{width:"100%",jc:"center",gap:10,children:[c.jsx(M8,{tabs:gE,currentTab:t===-1?0:t}),c.jsx(D8,{children:c.jsx(br,{})})]})}),c.jsx(Cy,{})]})},O8=()=>{const[e,t]=ce.useAddedAuthors();return c.jsxs(Ta,{children:[t&&c.jsx(P,{width:"100%",height:"100%",jc:"center",children:c.jsx(Wi,{})}),c.jsx(L8,{children:e.map(n=>c.jsx(Fr,{user:n},n.uid))})]})},V8=()=>{const[e,t]=ce.useAddedPlaylists(),[n,r]=ce.useOwnPlaylists();return c.jsxs(Ta,{children:[(t||r)&&c.jsx(Wi,{}),c.jsx(RP,{children:[...n,...e].map(i=>c.jsx(Ps,{playlist:i},i.id))})]})},U8=()=>{const[e,t]=ce.useSongLibrary(),[{data:n}]=ce.useUser();return c.jsx(Ta,{children:c.jsxs(qi,{loading:t,skeleton:c.jsx(I1,{quantity:20}),children:[c.jsx(T1,{listName:"Library",listIcon:c.jsx(us,{}),listUrl:"/library",songs:e}),!n&&c.jsxs(P,{d:"column",gap:10,width:"100%",height:"100%",jc:"center",children:[c.jsx(us,{opacity:.5,size:100}),c.jsx(Vr,{style:{fontSize:"1.1rem"},children:"Need to log in into account to see your library"})]}),n&&!e.length&&c.jsxs(P,{d:"column",gap:10,width:"100%",children:[c.jsx(us,{opacity:.5,size:100}),c.jsx(Vr,{style:{fontSize:"1.1rem"},children:"No songs added to library"})]})]})})},F8=()=>{const[{data:e}]=ce.useUser();return c.jsx(kP,{userData:e})},z8="50px",B8=x.div`
    width: 100%;
`;x.div`
    background: ${({background:e})=>e};
    width: 100%;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
`;const PP=x.div`
    width: 100%;
    padding: 40px ${z8};

    @media (max-width: 1000px) {
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
`;x.div`
    width: 250px;
    height: 250px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;const H8=x.div``;x.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 20px;
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 70px;
        height: 70px;
    }

    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
`;const W8=x(P)`
    @media (max-width: 1000px) {
        display: none;
    }
`,q8=()=>c.jsxs(P,{width:"100%",d:"column",ai:"flex-start",children:[c.jsx(X,{width:"100%",height:"400px",radius:"0",children:c.jsxs(P,{width:"100%",d:"column",padding:"56px 50px 50px 50px",ai:"center",jc:"center",gap:20,children:[c.jsx(X,{width:"200px",height:"200px",radius:v1}),c.jsxs(P,{d:"column",gap:8,children:[c.jsx(X,{width:"200px",height:"30px"}),c.jsx(X,{width:"100px",height:"20px",radius:"3px"})]})]})}),c.jsxs(PP,{children:[c.jsxs(W8,{width:"100%",gap:20,style:{marginTop:"4px",marginBottom:"14px"},children:[c.jsx("div",{style:{width:"40px"}}),c.jsx("div",{style:{width:"calc(25% - 4px)",height:"18px"},children:c.jsx(X,{width:"50%",height:"18px",radius:"6px"})}),c.jsx("div",{style:{width:"calc(25% - 2px)",height:"18px"},children:c.jsx(X,{width:"50%",height:"18px",radius:"6px"})}),c.jsx("div",{style:{width:"20%",height:"18px"},children:c.jsx(X,{width:"50%",height:"18px",radius:"6px"})}),c.jsx("div",{style:{width:"18%",height:"18px"},children:c.jsx(X,{width:"50%",height:"18px",radius:"6px"})})]}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{}),c.jsx($e,{})]})]}),G8=()=>{const{currentPlaylist:e,currentPlaylistSongs:t,loading:n}=Xm.usePlaylist();Bf({page:"playlist",onChangeId:i=>{i&&Xm.events.loadPlaylist(i)}});const r=()=>{Ct.events.open({title:`Share ${e==null?void 0:e.name} with friends`,content:c.jsx(Qc,{entity:e})})};return c.jsx(Gi,{children:c.jsx(qi,{color:"",loading:n,skeleton:c.jsx(q8,{}),children:c.jsxs(B8,{children:[c.jsx(TP,{handleClickShare:r,id:"",name:e==null?void 0:e.name,subtitle:c.jsxs(P,{gap:3,children:[c.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:"300",opacity:"0.6"},children:[e!=null&&e.isAlbum?"Album":"Playlist"," ","/"," "]}),c.jsx(sa,{width:"fit-content",authors:e==null?void 0:e.authors})]}),numberOfListenersPerMonth:e==null?void 0:e.listens,subscribers:e==null?void 0:e.subscribers,imageComponent:c.jsx(cP,{size:"200px",isAlbum:(e==null?void 0:e.isAlbum)??!1,src:e==null?void 0:e.image,colors:e==null?void 0:e.imageColors}),isPrivate:e==null?void 0:e.isPrivate,colors:e==null?void 0:e.imageColors,bottomButtons:c.jsx(_1,{buttonColor:e==null?void 0:e.imageColors[0],isAdmin:!1,isPageOwner:!1,queueInfo:{listName:(e==null?void 0:e.name)??"",listIcon:void 0,listUrl:`/playlist/${(e==null?void 0:e.id)??""}`,songs:t??[]}})}),c.jsx(PP,{children:c.jsx(T1,{songs:t??[],listName:(e==null?void 0:e.name)??"",listIcon:(e==null?void 0:e.image)??"",listUrl:`/playlist/${(e==null?void 0:e.id)??""}`})}),c.jsx(H8,{})]})})})},bP=ee(""),S1=ee([]),k1=ee([]),NP=V(),jP=V(),Q8=V(),C1=V(),Wf=je(),A1=je(async({query:e,suggestion:t})=>{try{const n=await ch.getSearchResult(e);return t&&await ch.addRankToSuggestion(t.uid),n}catch(n){throw new Error(n.message)}}),K8=Wf.pending,Y8=A1.pending;j({clock:NP,fn:e=>e,target:[bP,jP]});j({clock:Q8,fn:e=>e,target:S1});const X8=Rs.map(e=>e),J8=kt.map(e=>{var t;return(t=e.data)==null?void 0:t.uid});j({clock:jP,source:X8,fn:(e,t)=>({value:t,history:e}),target:Wf});Wf.use(async({value:e,history:t})=>{try{return e.length===0?[]:await ch.getSearchSuggestions(e,t)}catch(n){throw new Error(n.message)}});j({clock:Wf.doneData,fn:e=>e,target:S1});j({clock:C1,target:A1});j({clock:C1,source:{userId:J8},filter:(e,{suggestion:t})=>!!t,fn:({userId:e},{suggestion:t})=>({userId:e,suggestion:t}),target:jR});j({clock:A1.doneData,fn:e=>e,target:k1});const Z8=x.div`
    width: 100%;
    position: relative;
`,eB=x.ul`
    width: 100%;
    background: ${({theme:e})=>e.colors.pageTopButton};
    height: fit-content;
    min-height: 45px;
    max-height: 568px;
    overflow-y: auto;
    padding: 4px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};
    position: absolute;
    top: calc(100% + 4px);
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: ${({theme:e})=>e.colors.textColor};
    border-top: none;
    z-index: 1;
    box-shadow: ${({theme:e})=>e.colors.shadow};

    & > * {
        animation: appear 0.3s;
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        box-shadow: none;
        height: calc(100vh - 240px);
        max-height: none;
        border-radius: 0;
        left: -20px;
        padding: 0 20px;
        width: calc(100% + 40px);
        background: ${({theme:e})=>e.colors.pageBackground};
    }
`,tB=x.li`
    padding: 6px;
    border-radius: ${({theme:e})=>`calc(${e.borderRadius.mild} - 2px)`};
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-weight: 200;
    width: 100%;

    .authors {
        width: fit-content;
        white-space: nowrap;
    }

    &:focus {
        background: ${({theme:e})=>e.colors.hover};
        outline: 1px solid ${({theme:e})=>e.colors.greyText};
    }

    @media (hover: hover) {
        &:hover {
            background: ${({theme:e})=>e.colors.hover};
        }

        &.selected {
            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    &.selected {
        background: ${({theme:e})=>e.colors.blue.transparent};
        font-weight: 400;
    }

    @media (max-width: 768px) {
        padding: 8px 0;
    }
`,nB=x.div`
    white-space: nowrap;
`,mE=x.div`
    min-width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        color: ${({theme:e})=>e.colors.greyText};
        width: 20px;
        height: 20px;
    }

    @media (max-width: 768px) {
        min-width: 20px;
        margin-right: 5px;
    }
`,rB=({item:e,icon:t,isSelected:n,searchHistory:r,handleSubmitSuggestion:i,handleCopyName:s})=>{const o=e.place&&(t??c.jsx(br,{})),a=e.fullName,l=!1,u=d=>{d.stopPropagation(),s(a)};return c.jsxs(tB,{tabIndex:0,className:n?"selected":"",onClick:i,children:[c.jsxs(P,{gap:8,width:"100%",children:[r&&c.jsx(mE,{children:c.jsx(oy,{})}),!r&&!l&&c.jsx(mE,{children:o}),c.jsx(P,{d:"column",ai:"flex-start",children:c.jsx(nB,{children:a})})]}),c.jsx(H,{$width:"40px",onClick:u,children:c.jsx(Nj,{size:20})})]})},yE=({suggestions:e,selected:t,isSearchHistory:n,startIndex:r=0,handleCopyName:i,handleSubmit:s})=>e.map((o,a)=>{const l=a+r,u=t!==null&&l===t;return c.jsx(rB,{isSelected:u,item:o,searchHistory:n,handleCopyName:i,handleSubmitSuggestion:()=>s(l)},o.uid)}),MP=(e,t)=>{const n=T.useCallback(r=>{e.current&&!e.current.contains(r.target)&&t()},[t,e]);T.useEffect(()=>(document.addEventListener("click",n),()=>{document.removeEventListener("click",n)}),[n])},iB=({initialValue:e,suggestions:t,historySuggestions:n,onChange:r,onSumbit:i,areSuggestionsLoading:s})=>{var C;const[o,a]=T.useState(null),[l,u]=T.useState(e),[d,h]=T.useState(n),f=[...d,...t],g=T.useRef(null),[m,w]=T.useState(!1),_=o!==null?(C=f[o])==null?void 0:C.fullName:l;T.useEffect(()=>{if(l===""){h(n);return}h(n.filter(N=>ji(N.fullName).includes(ji(l))))},[n,l]),MP(g,()=>{w(!1)});const p=()=>{var N;r(""),u(""),(N=g.current)==null||N.focus()},y=s?c.jsx(Wi,{}):l?c.jsx(yS,{}):null,v=N=>{if(N===null){if(_.length===0)return;i(l,null),w(!1);return}i(f[N].fullName,f[N]),a(null),u(f[N].fullName),w(!1)};return{inputValue:l,selectedSuggestion:o,rightIcon:y,showSuggestions:m,allSuggestions:f,visibleSearchHistory:d,ref:g,visibleInputValue:_,handleReset:p,handleFocus:()=>{w(f.length>0)},handleCopyName:N=>{var F;u(N),w(!1),(F=g.current)==null||F.focus()},handleKeyDown:N=>{N.key==="ArrowDown"&&(N.preventDefault(),a(F=>{const ae=Math.min(f.length,(F??-1)+1);return ae===f.length?null:ae})),N.key==="ArrowUp"&&(N.preventDefault(),a(F=>{const ae=Math.max(-1,(F??f.length)-1);return ae===-1?null:ae})),N.key==="Enter"&&(N.preventDefault(),v(o))},handleSubmit:v,handleChange:N=>{const F=N.target.value;r(F),u(F),w(!0),a(null)}}},sB=e=>{const{selectedSuggestion:t,rightIcon:n,showSuggestions:r,visibleSearchHistory:i,allSuggestions:s,visibleInputValue:o,ref:a,handleSubmit:l,handleChange:u,handleReset:d,handleFocus:h,handleCopyName:f,handleKeyDown:g}=iB(e),{suggestions:m}=e;return c.jsxs(Z8,{onKeyDown:g,children:[c.jsx(Vt,{id:"inputsearch",icon:c.jsx(br,{}),value:o,autoComplete:"off",placeholder:"Search...","aria-autocomplete":"list","aria-controls":"autocomplete-list",onChange:u,onFocus:h,rightIcon:n,ref:a,onRightIconClick:d,enterKeyHint:"done",type:"text"}),r&&s.length>0&&c.jsxs(eB,{children:[c.jsx(yE,{suggestions:i,selected:t,handleCopyName:f,handleSubmit:l,isSearchHistory:!0}),c.jsx(yE,{startIndex:i.length,suggestions:m,selected:t,handleCopyName:f,handleSubmit:l})]})]})},oB=()=>c.jsxs(P,{gap:8,d:"column",ai:"flex-start",width:"100%",height:"fit-content",children:[c.jsx(X,{width:"70px",height:"20px",radius:"4px"}),c.jsx(I1,{})]}),aB=x(js)`
    width: 100%;
    padding: 30px 30px;
    color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;
    transition: 0.2s filter;
    margin-bottom: 20px;

    .bottom-buttons {
        margin-bottom: 0px;
    }

    &:hover {
        filter: brightness(1.2);
    }

    @media (max-width: 768px) {
        padding: 16px;

        .bottom-buttons {
            width: 100%;
            padding: 0;
        }

        .general-cover {
            position: absolute;
            top: 0;
            right: 0;
            width: 80px;
            height: 80px;
            min-width: 80px;
        }
    }
`,lB=x(P)`
    @media (max-width: 768px) {
        width: 100%;
    }
`,cB=x(pa)`
    animation: none;
    background-size: 100% 300%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 8px;
        background-image: linear-gradient(#0000007d, #0000006e);
    }
`,uB=x.div`
    font-size: 24px;
    font-weight: 400;
    color: #fff;
`,vE=x.div`
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 4px;

    svg {
        width: 16px;
        height: 16px;
        opacity: 0.7;
    }
`,dB=({author:e})=>c.jsxs(aB,{to:`/author/${e.uid}`,children:[c.jsxs(P,{width:"100%",jc:"space-between",style:{position:"relative",zIndex:1},children:[c.jsxs(lB,{width:"250px",d:"column",height:"100%",jc:"space-between",ai:"flex-start",gap:30,children:[c.jsxs(P,{d:"column",gap:14,children:[c.jsxs(P,{width:"100%",d:"column",ai:"flex-start",children:[c.jsx(Vr,{style:{color:"#fff"},children:"Top Result"}),c.jsxs(P,{gap:10,children:[c.jsx(uB,{children:e==null?void 0:e.displayName}),e.isVerified&&c.jsx(ry,{})]})]}),c.jsx(P,{width:"100%",gap:30,children:c.jsxs(P,{gap:4,children:[c.jsxs(vE,{children:[Zm(e==null?void 0:e.numberOfListenersPerMonth),c.jsx(Nd,{})]}),"∙",c.jsxs(vE,{children:[e==null?void 0:e.subscribers,c.jsx(gS,{})]})]})})]}),c.jsx(_1,{buttonColor:e.imageColors[1],isAdmin:!1,isPageOwner:!1,queueInfo:{listName:"",listIcon:void 0,listUrl:"",songs:[]}})]}),c.jsx(Ur,{isAuthor:e==null?void 0:e.isAdmin,colors:e.imageColors,src:e==null?void 0:e.photoURL,size:"150px"})]}),c.jsx(cB,{$colors:e==null?void 0:e.imageColors})]}),hB=x.div`
    max-width: 650px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
`,fB={song:e=>c.jsx(w1,{songs:[e],listName:"Search",listIcon:c.jsx(br,{}),listUrl:`/search?query=${e.name}&type=query`}),author:e=>c.jsx(Fr,{user:e,orientation:"horizontal"}),user:e=>c.jsx(Fr,{user:e,orientation:"horizontal"}),playlist:e=>c.jsx(Ps,{orientation:"horizontal",playlist:e}),album:e=>c.jsx(Ps,{orientation:"horizontal",playlist:e})},pB=()=>{var o;const[e]=uk(),[t,n]=_e([k1,Y8]),r=t[0],i=!!r&&"isAuthor"in r&&(r==null?void 0:r.isAuthor)&&e.get("type")==="author",s=((o=e.get("query"))==null?void 0:o.length)!==0&&t.length===0&&!n;return c.jsx(Ta,{children:c.jsx(hB,{children:c.jsxs(qi,{color:"",loading:n,skeleton:c.jsx(oB,{}),children:[!i&&c.jsxs("h3",{style:{fontWeight:300,marginBottom:"10px"},children:[s?"No":""," Result"]}),c.jsxs(P,{d:"column",gap:4,width:"100%",children:[i&&c.jsx(dB,{author:r}),t.map((a,l)=>{const u=Lf(a);if(i&&l===0)return null;if(u)return fB[u](a)})]})]})})})},gB=x.div`
    max-width: 650px;
    width: 100%;
    min-width: 300px;

    @media (max-width: 1000px) {
        width: 100%;
        max-width: none;
    }
`,mB=()=>{const[e]=uk(),t=e.get("query")??"",n=_c(),r=T.useRef(),[i,s,o,a,l]=_e([bP,k1,K8,NP,C1]),u=ce.useSearchHistory(),d=_e(S1),h=g=>{clearTimeout(r.current),r.current=setTimeout(()=>{a(g)},100)},f=(g,m)=>{n(`/search?query=${g.trim()}&type=${m!==null&&m.place==="users"?"author":"query"}`),l({query:ji(g),suggestion:m})};return T.useEffect(()=>{t.length>0&&s.length===0&&(a(t),l({query:ji(t)}))},[l,t,s.length,a]),c.jsxs(Gi,{children:[c.jsx(Sa,{children:c.jsx(gB,{children:c.jsx(sB,{initialValue:t??i,suggestions:d,historySuggestions:u,areSuggestionsLoading:o,onChange:h,onSumbit:f})})}),c.jsx(pB,{})]})},yB=()=>c.jsx("div",{children:"SongPage"}),vB=()=>c.jsx(Gi,{children:c.jsx(Sa,{})}),R1=[{url:"discover",title:"Discover",icon:c.jsx(Lj,{}),component:c.jsx(S8,{}),section:"features",private:!1},{url:"search",title:"Search",icon:c.jsx(br,{}),component:c.jsx(mB,{}),section:"features",private:!1},{url:"trends",title:"Trends",icon:c.jsx(p4,{}),component:c.jsx(vB,{}),section:"features",private:!1},{url:"liked",title:"Liked",icon:c.jsx(sy,{}),component:c.jsx($8,{}),section:"your music",private:!0,children:[{url:"",title:"Songs",icon:c.jsx(us,{}),component:c.jsx(U8,{}),section:"your music",private:!0},{url:"playlists",title:"Playlists",icon:c.jsx(cy,{}),component:c.jsx(V8,{}),section:"your music",private:!0},{url:"authors",title:"Authors",icon:c.jsx(cS,{}),component:c.jsx(O8,{}),section:"your music",private:!0}]},{url:"history",title:"History",icon:c.jsx(oy,{}),component:c.jsx(P8,{}),section:"your music",private:!0},{url:"chat",title:"Chat",icon:c.jsx(Ip,{}),component:c.jsx(Wz,{}),children:[{url:":id",title:"Chat",icon:c.jsx(Ip,{}),component:c.jsx(lE,{}),section:"your activities",private:!0,children:[{url:":id",title:"Chat",icon:c.jsx(Ip,{}),component:c.jsx(lE,{}),section:"your activities",private:!0}]}],section:"your activities",private:!0},{url:"friends",title:"Friends",icon:c.jsx(g4,{}),component:c.jsx(C8,{}),section:"your activities",private:!0},{url:"song/:id",title:"Song",icon:c.jsx(us,{}),component:c.jsx(yB,{}),section:"your music",private:!0},{url:"playlist/:id",title:"Playlist",icon:c.jsx(qj,{}),component:c.jsx(G8,{}),section:"your music",private:!0},{url:"author/:id",title:"Author",icon:c.jsx(i4,{}),component:c.jsx(kP,{}),section:"your music",private:!0},{url:"me",title:"Me",icon:c.jsx(mS,{}),component:c.jsx(F8,{}),section:"your music",private:!0}],LP=e=>{const t=[];for(let n=0;n<e.length;n++){const r=e[n],i=R1.find(s=>s.title===r);i&&t.push(i)}return t},wB=LP(["Discover","Search","Trends","Liked","History","Chat","Friends"]),_B=LP(["Discover","Liked","Chat","Search"]),xB=x.nav`
    min-height: 80px;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding: 0 10px;
    padding-top: 10px;
`,EB=x.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
`,IB=x.li`
    width: 100%;
`,TB=x(ck)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    width: 100%;
    opacity: 0.5;

    &.active {
        opacity: 1;
        color: ${({theme:e})=>e.colors.blue.action};
    }
`,SB=x.div`
    svg {
        width: 26px;
        height: 26px;
    }
`,kB=x.div`
    font-weight: 300;
    font-size: 0.75rem;
`,CB=({isActive:e})=>e?"active":"",AB=({route:e})=>{const{url:t,title:n,icon:r}=e;return c.jsxs(TB,{to:t,className:CB,children:[c.jsx(SB,{children:r}),c.jsx(kB,{children:n})]})},RB=()=>{const[e,t]=T.useState(!1);return Bf({page:"chat",onChangeId:n=>{console.log(n),t(!!n)}}),e?null:c.jsx(xB,{children:c.jsx(EB,{children:_B.map(n=>c.jsx(IB,{children:c.jsx(AB,{route:n})},n.url))})})},PB=()=>{const{opened:e,title:t,content:n}=Ct.useModal();if(!e)return null;const r=()=>{Ct.events.close()};return c.jsx(lz,{children:c.jsxs(cz,{children:[c.jsx(pP,{onClick:r}),c.jsx(uz,{children:t}),c.jsx(dz,{children:n})]})})},bB=x.div`
    position: absolute;
    width: ${({$width:e})=>`${e}px`};
    background: ${({theme:e})=>e.colors.pageBackground2};
    height: ${({$height:e})=>`${e}px`};
    top: ${({$posY:e})=>`${e}px`};
    left: ${({$posX:e})=>`${e}px`};
    border-radius: ${({theme:e})=>e.borderRadius.mild};
    box-shadow: 0 0 40px #0000002e;
    visibility: ${({$isOpen:e})=>e?"visible":"hidden"};
    opacity: ${({$isOpen:e})=>e?1:0};
    z-index: 1000;
    transform: ${({$isOpen:e})=>e?"scale(1)":"scale(0.8)"};
    transition: 0.15s opacity, 0.15s visibility, 0.15s transform;
    transform-origin: ${({$transformOrigin:e})=>e};
    overflow: hidden;

    @media (max-width: 768px) {
        transform: ${({$isOpen:e})=>e?"scale(1.05)":"scale(0.8)"};
    }
`,NB=()=>{const{content:e,height:t,width:n,isOpen:r,x:i,y:s,origin:o}=Zt.usePopup(),a=T.useRef(null);return MP(a,()=>{r&&Zt.events.close()}),c.jsx(bB,{$isOpen:r,$transformOrigin:o,ref:a,$posX:i,$posY:s,$height:t,$width:n,children:e})},jB=x.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({theme:e})=>e.colors.textColor};
    opacity: 0.7;
`,MB=x.div`
    width: 21px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 21px;
        height: 21px;
    }
`,LB=x.div`
    font-weight: 300;
`,DB=({icon:e,text:t})=>c.jsxs(jB,{children:[c.jsx(MB,{children:e}),c.jsx(LB,{children:t})]}),$B=(e,t)=>{const n={};return e.forEach(r=>{const i=r[t];n[i]===void 0?n[i]=[r]:n[i].push(r)}),n},OB=x.label`
	width: 255px;
	height: 255px;
	border-radius: ${({theme:e})=>e.borderRadius.middle};
	background: ${({theme:e})=>e.colors.input};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.2s background;

	input[type=file] {
		display: none;
	}

	&:hover {
		background: ${({theme:e})=>e.colors.hover};
	}
`,VB=x.div`
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	background: ${({theme:e})=>e.colors.blue.action};
	color: #fff;
	box-shadow: 0 4px 50px ${({theme:e})=>e.colors.blue.action} ;

	svg {
		width: 30px;
		height: 30px;
	}
`,UB=()=>c.jsxs(OB,{children:[c.jsx("input",{type:"file"}),c.jsx(VB,{children:c.jsx($j,{})})]}),FB=()=>c.jsxs(P,{d:"column",gap:20,width:"100%",children:[c.jsx(UB,{}),c.jsx(Vt,{required:!0,placeholder:"Enter name",label:"Playlist name"}),c.jsx(or,{appearance:"primary",disabled:!0,children:"Create"})]}),zB=x(H)`
	min-height: 20px;
	height: 20px;
`,BB=x.div`
	width: 100%;
	height: 40px;
	position: relative;

	& svg {
		transform-origin: center center;
		transition: 0.2s;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	&.light {
		& svg:nth-child(1) {
			transform: translate(-50%, -50%) rotate(0deg);
			opacity: 1;
		}

		& svg:nth-child(2) {
			transform: translate(-50%, -50%) rotate(90deg);
			opacity: 0;
		}
	}
	
	&.dark {
		& svg:nth-child(1) {
			transform: translate(-50%, -50%) rotate(90deg);
			opacity: 0;
		}

		& svg:nth-child(2) {
			transform: translate(-50%, -50%) rotate(0deg);
			opacity: 1;
		}
	}
`,HB=()=>{const{theme:e}=AP(),t=()=>{x1()};return c.jsx(zB,{$width:"20px",onClick:t,children:c.jsxs(BB,{className:`theme ${e.toString()}`,children:[c.jsx(pS,{size:18}),c.jsx(s4,{size:18})]})})},WB=()=>{var o;const e=$B(wB,"section"),{loggedIn:t}=CP(),[n]=ce.useOwnPlaylists(),i={chat:Qn.useChatUnreadCount()},s=t(()=>{Ct.events.open({title:"Create Playlist",content:c.jsx(FB,{})})});return c.jsxs(LU,{children:[c.jsxs(DU,{children:[c.jsx(xP,{}),c.jsx(HB,{})]}),Object.keys(e).map((a,l)=>c.jsxs(Yx,{children:[c.jsx(Xx,{children:a}),e[a].map(u=>c.jsx($U,{to:u.url,children:c.jsxs(P,{width:"100%",jc:"space-between",children:[c.jsx(DB,{icon:u.icon,text:u.title}),!!i[u.url]&&c.jsx(h1,{children:i[u.url]})]})},u.url))]},l)),c.jsxs(Yx,{children:[c.jsxs(P,{jc:"space-between",width:"100%",children:[c.jsx(Xx,{children:"Your Playlists"}),c.jsx("button",{className:"add-playlist",onClick:s,children:c.jsx(u4,{})})]}),c.jsx(OU,{children:(o=n==null?void 0:n.slice(0,4))==null?void 0:o.map(a=>c.jsx(Ps,{orientation:"horizontal",playlist:a},a.id))})]})]})},qB=x.div`
    height: calc(100dvh - 80px);
    display: flex;

    @media (max-width: 1000px) {
        height: calc(100dvh - 130px);
    }
`,GB=x.div`
    width: 100%;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    transition: 0.5s background-color;
    background-color: ${({$background:e})=>e};
    background-image: ${({theme:e})=>`linear-gradient(${e.colors.playerDarkening}, ${e.colors.playerDarkening})`};
    gap: 50px;
    position: relative;
    z-index: 10;

    .music-controls {
        flex-direction: row-reverse;
    }

    .control-buttons {
        order: 3;
        width: fit-content;
        margin-bottom: 16px;

        .playback-buttons {
            gap: 0;

            .control-button {
                color: ${({theme:e})=>e.colors.textColor};
                transform: scale(0.7);
            }
        }

        .queue-button {
            color: ${({theme:e})=>e.colors.textColor};
            transform: scale(0.9);

            &.selected {
                background: ${({theme:e})=>e.colors.hover};
            }
        }
    }

    .song-slider {
        order: 2;
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        height: 2px;
        width: 35%;

        &::-webkit-slider-thumb {
            width: 10px;
            height: 10px;
        }
    }

    .duration-numbers {
        order: 1;
        position: absolute;
        left: 50%;
        bottom: 26px;
        transform: translateX(-50%);
        opacity: 0.6;
        font-size: 0.7rem;
        min-width: 70px;
        width: 35%;
        color: ${({theme:e})=>e.colors.textColor};

        & > * {
            font-size: 0.7rem;
            min-width: 36px;
            display: block;
        }
    }

    @media (max-width: 1000px) {
        padding: 6px;
        min-height: auto;
        border-radius: 14px;
        margin: 0 12px;
        width: calc(100% - 24px);
        box-shadow: 0px -10px 10px 0px ${({theme:e})=>e.colors.pageBackground};
        gap: 0;

        .music-controls {
            display: none;
        }
    }
`,QB=x.h1`
    font-size: 1.1rem;
    font-weight: 200;

    @media (max-width: 1000px) {
        font-size: 0.95rem;
    }
`,KB=x.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 300px;
    max-width: 300px;
    overflow: hidden;

    @media (max-width: 1000px) {
        min-width: calc(100% - 40px);
        width: calc(100% - 40px);
    }
`,YB=x(pa)`
    overflow-y: auto;
    height: 100%;
    padding: 50px 20px;
    animation: none;
    scroll-padding-bottom: 300px;

    & > * {
        gap: 10px;
        font-size: 1.4rem;
    }
`,XB=x.div`
    display: none;

    @media (max-width: 1000px) {
        display: block;
        width: fit-content;
    }
`,JB=x.div`
    min-width: 300px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    @media (max-width: 1000px) {
        display: none;
    }
`,ZB=()=>{const{currentSong:e}=q.useSong();return c.jsx(YB,{$colors:e==null?void 0:e.imageColors,children:c.jsx(mP,{})})},e7=()=>{const{currentSong:e}=q.useSong(),t=gP(),n=()=>{q.fullscreen.open()},r=a=>{a.stopPropagation(),Zt.events.open({content:c.jsx(dP,{song:e}),height:329,e:a})},i=()=>{Ct.events.open({title:`Share "${e==null?void 0:e.name}" with friends`,content:c.jsx(Qc,{entity:e})})},s=()=>{Ct.events.open({title:`Add "${e==null?void 0:e.name}" to playlist`,content:c.jsx(uP,{song:e})})},o=a=>{a.stopPropagation(),Zt.events.open({content:c.jsx(ZB,{}),height:500,width:350,e:a})};return c.jsxs(GB,{onClick:n,$background:(e==null?void 0:e.imageColors[0])??"darkgrey",children:[c.jsxs(KB,{children:[c.jsx(Ry,{colors:(e==null?void 0:e.imageColors)??["grey"],src:e==null?void 0:e.cover,size:"40px"}),c.jsxs(P,{d:"column",ai:"flex-start",children:[c.jsx(QB,{children:(e==null?void 0:e.name)??"Untitled"}),c.jsx(sa,{authors:e==null?void 0:e.authors})]})]}),c.jsxs(P,{gap:30,width:"100%",jc:"flex-end",children:[c.jsx(fP,{...t}),c.jsx(XB,{children:c.jsx(hP,{children:c.jsx(H,{$width:"40px",onClick:a=>{a.stopPropagation(),t.onPlay()},children:c.jsx(Uf,{loading:t.state==="loading",playling:t.state==="playing"})})})}),c.jsxs(JB,{children:[c.jsx(Kh,{disabled:!e,width:"42px",songId:e==null?void 0:e.id,likeColor:e==null?void 0:e.imageColors[0]}),c.jsx(H,{$width:"42px",disabled:!e,onClick:s,children:c.jsx(fS,{size:20})}),c.jsx(H,{$width:"42px",disabled:!e,onClick:i,children:c.jsx(vc,{size:20})}),c.jsx(H,{$width:"42px",disabled:!(e!=null&&e.lyrics.length),onClick:o,children:c.jsx(hS,{size:20})}),c.jsx(H,{$width:"42px",onClick:r,disabled:!e,children:c.jsx(iy,{size:20})})]})]})]})},t7=x.div`
    width: 100%;
    height: 100%;
    position: relative;
`,n7=()=>{const e=q.fullscreen.useFullScreen();return c.jsxs(c.Fragment,{children:[c.jsx(ZF,{}),c.jsx(QF,{open:e}),c.jsx(PB,{}),c.jsx(NB,{}),c.jsxs(qB,{children:[c.jsx(WB,{}),c.jsx(t7,{children:c.jsx(Cy,{})})]}),c.jsx(e7,{}),c.jsx(RB,{})]})},DP=e=>{var t;return c.jsx(Od,{element:e.component,path:e.url,children:(t=e==null?void 0:e.children)==null?void 0:t.map(n=>DP(n))},e.url)},r7=()=>c.jsx(IL,{children:c.jsxs(Od,{path:"/",element:c.jsx(n7,{}),children:[R1.map(e=>DP(e)),c.jsx(Od,{path:"*",element:c.jsx(c.Fragment,{children:"404"})})]})}),i7=pj`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Geologica', sans-serif;
		-webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
	}

	:root {
		--page-padding: 40px;

		@media (max-width: 768px) {
			--page-padding: 20px;
		}
	}

	body {
		color: ${({theme:e})=>e.colors.textColor};
		overflow: hidden;
	}

	a {
		color: ${({theme:e})=>e.colors.textColor};
      text-decoration: none;
	}

	button {
		color: ${({theme:e})=>e.colors.textColor};
		border: none;
		background: transparent;
		cursor: pointer;
	}

	input[type=text]:focus, select:focus, textarea:focus {
		outline: 1px solid ${({theme:e})=>e.colors.blue.main};
	}
`,s7=x.div`
    height: 100dvh;
    background: ${({theme:e})=>e.colors.pageBackground};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
`;function o7(){const{themeParams:e}=AP();return T.useEffect(()=>{ce.events.setIsLoadingUsers(!0),Ot.onAuthStateChanged(async t=>{if(ce.events.setIsLoadingUsers(!1),t!=null&&t.uid){const n=await Ot.getUserByUid(t.uid);ce.events.setUser(n)}})},[]),c.jsxs(dj,{theme:e,children:[c.jsx(i7,{}),c.jsx(bL,{basename:"/soundbubble-2.0/",children:c.jsx(s7,{children:c.jsxs(vS,{children:[c.jsx(NM,{}),c.jsx(r7,{})]})})})]})}rg.createRoot(document.getElementById("root")).render(c.jsx(ge.StrictMode,{children:c.jsx(vS,{children:c.jsx(o7,{})})}));
