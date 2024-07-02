var NP=Object.defineProperty;var jP=(e,t,n)=>t in e?NP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var De=(e,t,n)=>(jP(e,typeof t!="symbol"?t+"":t,n),n);function MP(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function l0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hE={exports:{}},yh={},fE={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc=Symbol.for("react.element"),LP=Symbol.for("react.portal"),DP=Symbol.for("react.fragment"),$P=Symbol.for("react.strict_mode"),OP=Symbol.for("react.profiler"),VP=Symbol.for("react.provider"),UP=Symbol.for("react.context"),FP=Symbol.for("react.forward_ref"),zP=Symbol.for("react.suspense"),BP=Symbol.for("react.memo"),HP=Symbol.for("react.lazy"),C1=Symbol.iterator;function WP(e){return e===null||typeof e!="object"?null:(e=C1&&e[C1]||e["@@iterator"],typeof e=="function"?e:null)}var pE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gE=Object.assign,mE={};function oa(e,t,n){this.props=e,this.context=t,this.refs=mE,this.updater=n||pE}oa.prototype.isReactComponent={};oa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yE(){}yE.prototype=oa.prototype;function c0(e,t,n){this.props=e,this.context=t,this.refs=mE,this.updater=n||pE}var u0=c0.prototype=new yE;u0.constructor=c0;gE(u0,oa.prototype);u0.isPureReactComponent=!0;var A1=Array.isArray,vE=Object.prototype.hasOwnProperty,d0={current:null},_E={key:!0,ref:!0,__self:!0,__source:!0};function wE(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)vE.call(t,r)&&!_E.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:hc,type:e,key:s,ref:o,props:i,_owner:d0.current}}function qP(e,t){return{$$typeof:hc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function h0(e){return typeof e=="object"&&e!==null&&e.$$typeof===hc}function GP(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var R1=/\/+/g;function Jf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?GP(""+e.key):t.toString(36)}function Cu(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case hc:case LP:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Jf(o,0):r,A1(i)?(n="",e!=null&&(n=e.replace(R1,"$&/")+"/"),Cu(i,t,n,"",function(u){return u})):i!=null&&(h0(i)&&(i=qP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(R1,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",A1(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Jf(s,a);o+=Cu(s,t,n,l,i)}else if(l=WP(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Jf(s,a++),o+=Cu(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Yc(e,t,n){if(e==null)return e;var r=[],i=0;return Cu(e,r,"","",function(s){return t.call(n,s,i++)}),r}function QP(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Dt={current:null},Au={transition:null},KP={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:Au,ReactCurrentOwner:d0};ie.Children={map:Yc,forEach:function(e,t,n){Yc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yc(e,function(){t++}),t},toArray:function(e){return Yc(e,function(t){return t})||[]},only:function(e){if(!h0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=oa;ie.Fragment=DP;ie.Profiler=OP;ie.PureComponent=c0;ie.StrictMode=$P;ie.Suspense=zP;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KP;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gE({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=d0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)vE.call(t,l)&&!_E.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:hc,type:e.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(e){return e={$$typeof:UP,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:VP,_context:e},e.Consumer=e};ie.createElement=wE;ie.createFactory=function(e){var t=wE.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:FP,render:e}};ie.isValidElement=h0;ie.lazy=function(e){return{$$typeof:HP,_payload:{_status:-1,_result:e},_init:QP}};ie.memo=function(e,t){return{$$typeof:BP,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=Au.transition;Au.transition={};try{e()}finally{Au.transition=t}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(e,t){return Dt.current.useCallback(e,t)};ie.useContext=function(e){return Dt.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return Dt.current.useDeferredValue(e)};ie.useEffect=function(e,t){return Dt.current.useEffect(e,t)};ie.useId=function(){return Dt.current.useId()};ie.useImperativeHandle=function(e,t,n){return Dt.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return Dt.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return Dt.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return Dt.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return Dt.current.useReducer(e,t,n)};ie.useRef=function(e){return Dt.current.useRef(e)};ie.useState=function(e){return Dt.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return Dt.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return Dt.current.useTransition()};ie.version="18.2.0";fE.exports=ie;var S=fE.exports;const ge=l0(S),YP=MP({__proto__:null,default:ge},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XP=S,JP=Symbol.for("react.element"),ZP=Symbol.for("react.fragment"),e2=Object.prototype.hasOwnProperty,t2=XP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n2={key:!0,ref:!0,__self:!0,__source:!0};function xE(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)e2.call(t,r)&&!n2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:JP,type:e,key:s,ref:o,props:i,_owner:t2.current}}yh.Fragment=ZP;yh.jsx=xE;yh.jsxs=xE;hE.exports=yh;var c=hE.exports,lg={},EE={exports:{}},cn={},IE={exports:{}},SE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,B){var q=j.length;j.push(B);e:for(;0<q;){var ae=q-1>>>1,ke=j[ae];if(0<i(ke,B))j[ae]=B,j[q]=ke,q=ae;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var B=j[0],q=j.pop();if(q!==B){j[0]=q;e:for(var ae=0,ke=j.length,ft=ke>>>1;ae<ft;){var Ct=2*(ae+1)-1,En=j[Ct],At=Ct+1,Bn=j[At];if(0>i(En,q))At<ke&&0>i(Bn,En)?(j[ae]=Bn,j[At]=q,ae=At):(j[ae]=En,j[Ct]=q,ae=Ct);else if(At<ke&&0>i(Bn,q))j[ae]=Bn,j[At]=q,ae=At;else break e}}return B}function i(j,B){var q=j.sortIndex-B.sortIndex;return q!==0?q:j.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,h=null,f=3,p=!1,m=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(j){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=j)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function E(j){if(_=!1,v(j),!m)if(n(l)!==null)m=!0,Wi(T);else{var B=n(u);B!==null&&zn(E,B.startTime-j)}}function T(j,B){m=!1,_&&(_=!1,g(C),C=-1),p=!0;var q=f;try{for(v(B),h=n(l);h!==null&&(!(h.expirationTime>B)||j&&!ve());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,f=h.priorityLevel;var ke=ae(h.expirationTime<=B);B=e.unstable_now(),typeof ke=="function"?h.callback=ke:h===n(l)&&r(l),v(B)}else r(l);h=n(l)}if(h!==null)var ft=!0;else{var Ct=n(u);Ct!==null&&zn(E,Ct.startTime-B),ft=!1}return ft}finally{h=null,f=q,p=!1}}var k=!1,I=null,C=-1,$=5,z=-1;function ve(){return!(e.unstable_now()-z<$)}function Y(){if(I!==null){var j=e.unstable_now();z=j;var B=!0;try{B=I(!0,j)}finally{B?Ve():(k=!1,I=null)}}else k=!1}var Ve;if(typeof y=="function")Ve=function(){y(Y)};else if(typeof MessageChannel<"u"){var Hr=new MessageChannel,Hi=Hr.port2;Hr.port1.onmessage=Y,Ve=function(){Hi.postMessage(null)}}else Ve=function(){w(Y,0)};function Wi(j){I=j,k||(k=!0,Ve())}function zn(j,B){C=w(function(){j(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,Wi(T))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(j){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var q=f;f=B;try{return j()}finally{f=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,B){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var q=f;f=j;try{return B()}finally{f=q}},e.unstable_scheduleCallback=function(j,B,q){var ae=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ae+q:ae):q=ae,j){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=q+ke,j={id:d++,callback:B,priorityLevel:j,startTime:q,expirationTime:ke,sortIndex:-1},q>ae?(j.sortIndex=q,t(u,j),n(l)===null&&j===n(u)&&(_?(g(C),C=-1):_=!0,zn(E,q-ae))):(j.sortIndex=ke,t(l,j),m||p||(m=!0,Wi(T))),j},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(j){var B=f;return function(){var q=f;f=B;try{return j.apply(this,arguments)}finally{f=q}}}})(SE);IE.exports=SE;var r2=IE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TE=S,tn=r2;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kE=new Set,yl={};function bs(e,t){Ro(e,t),Ro(e+"Capture",t)}function Ro(e,t){for(yl[e]=t,e=0;e<t.length;e++)kE.add(t[e])}var br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cg=Object.prototype.hasOwnProperty,i2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P1={},b1={};function s2(e){return cg.call(b1,e)?!0:cg.call(P1,e)?!1:i2.test(e)?b1[e]=!0:(P1[e]=!0,!1)}function o2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function a2(e,t,n,r){if(t===null||typeof t>"u"||o2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $t(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ht[e]=new $t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ht[t]=new $t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ht[e]=new $t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ht[e]=new $t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ht[e]=new $t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ht[e]=new $t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ht[e]=new $t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ht[e]=new $t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ht[e]=new $t(e,5,!1,e.toLowerCase(),null,!1,!1)});var f0=/[\-:]([a-z])/g;function p0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(f0,p0);ht[t]=new $t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(f0,p0);ht[t]=new $t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(f0,p0);ht[t]=new $t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ht[e]=new $t(e,1,!1,e.toLowerCase(),null,!1,!1)});ht.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ht[e]=new $t(e,1,!1,e.toLowerCase(),null,!0,!0)});function g0(e,t,n,r){var i=ht.hasOwnProperty(t)?ht[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(a2(t,n,i,r)&&(n=null),r||i===null?s2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zr=TE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xc=Symbol.for("react.element"),Ks=Symbol.for("react.portal"),Ys=Symbol.for("react.fragment"),m0=Symbol.for("react.strict_mode"),ug=Symbol.for("react.profiler"),CE=Symbol.for("react.provider"),AE=Symbol.for("react.context"),y0=Symbol.for("react.forward_ref"),dg=Symbol.for("react.suspense"),hg=Symbol.for("react.suspense_list"),v0=Symbol.for("react.memo"),Kr=Symbol.for("react.lazy"),RE=Symbol.for("react.offscreen"),N1=Symbol.iterator;function ka(e){return e===null||typeof e!="object"?null:(e=N1&&e[N1]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Zf;function Oa(e){if(Zf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zf=t&&t[1]||""}return`
`+Zf+e}var ep=!1;function tp(e,t){if(!e||ep)return"";ep=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{ep=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Oa(e):""}function l2(e){switch(e.tag){case 5:return Oa(e.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return e=tp(e.type,!1),e;case 11:return e=tp(e.type.render,!1),e;case 1:return e=tp(e.type,!0),e;default:return""}}function fg(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ys:return"Fragment";case Ks:return"Portal";case ug:return"Profiler";case m0:return"StrictMode";case dg:return"Suspense";case hg:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case AE:return(e.displayName||"Context")+".Consumer";case CE:return(e._context.displayName||"Context")+".Provider";case y0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case v0:return t=e.displayName||null,t!==null?t:fg(e.type)||"Memo";case Kr:t=e._payload,e=e._init;try{return fg(e(t))}catch{}}return null}function c2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fg(t);case 8:return t===m0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ii(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function PE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function u2(e){var t=PE(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jc(e){e._valueTracker||(e._valueTracker=u2(e))}function bE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=PE(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function id(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pg(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function j1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ii(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function NE(e,t){t=t.checked,t!=null&&g0(e,"checked",t,!1)}function gg(e,t){NE(e,t);var n=Ii(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mg(e,t.type,n):t.hasOwnProperty("defaultValue")&&mg(e,t.type,Ii(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function M1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mg(e,t,n){(t!=="number"||id(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Va=Array.isArray;function go(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ii(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function yg(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function L1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Va(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ii(n)}}function jE(e,t){var n=Ii(t.value),r=Ii(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function D1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ME(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vg(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ME(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zc,LE=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zc=Zc||document.createElement("div"),Zc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d2=["Webkit","ms","Moz","O"];Object.keys(Ja).forEach(function(e){d2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ja[t]=Ja[e]})});function DE(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ja.hasOwnProperty(e)&&Ja[e]?(""+t).trim():t+"px"}function $E(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=DE(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var h2=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _g(e,t){if(t){if(h2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function wg(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xg=null;function _0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Eg=null,mo=null,yo=null;function $1(e){if(e=gc(e)){if(typeof Eg!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Eh(t),Eg(e.stateNode,e.type,t))}}function OE(e){mo?yo?yo.push(e):yo=[e]:mo=e}function VE(){if(mo){var e=mo,t=yo;if(yo=mo=null,$1(e),t)for(e=0;e<t.length;e++)$1(t[e])}}function UE(e,t){return e(t)}function FE(){}var np=!1;function zE(e,t,n){if(np)return e(t,n);np=!0;try{return UE(e,t,n)}finally{np=!1,(mo!==null||yo!==null)&&(FE(),VE())}}function _l(e,t){var n=e.stateNode;if(n===null)return null;var r=Eh(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Ig=!1;if(br)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){Ig=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{Ig=!1}function f2(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Za=!1,sd=null,od=!1,Sg=null,p2={onError:function(e){Za=!0,sd=e}};function g2(e,t,n,r,i,s,o,a,l){Za=!1,sd=null,f2.apply(p2,arguments)}function m2(e,t,n,r,i,s,o,a,l){if(g2.apply(this,arguments),Za){if(Za){var u=sd;Za=!1,sd=null}else throw Error(b(198));od||(od=!0,Sg=u)}}function Ns(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function BE(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O1(e){if(Ns(e)!==e)throw Error(b(188))}function y2(e){var t=e.alternate;if(!t){if(t=Ns(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return O1(i),e;if(s===r)return O1(i),t;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function HE(e){return e=y2(e),e!==null?WE(e):null}function WE(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=WE(e);if(t!==null)return t;e=e.sibling}return null}var qE=tn.unstable_scheduleCallback,V1=tn.unstable_cancelCallback,v2=tn.unstable_shouldYield,_2=tn.unstable_requestPaint,$e=tn.unstable_now,w2=tn.unstable_getCurrentPriorityLevel,w0=tn.unstable_ImmediatePriority,GE=tn.unstable_UserBlockingPriority,ad=tn.unstable_NormalPriority,x2=tn.unstable_LowPriority,QE=tn.unstable_IdlePriority,vh=null,er=null;function E2(e){if(er&&typeof er.onCommitFiberRoot=="function")try{er.onCommitFiberRoot(vh,e,void 0,(e.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:T2,I2=Math.log,S2=Math.LN2;function T2(e){return e>>>=0,e===0?32:31-(I2(e)/S2|0)|0}var eu=64,tu=4194304;function Ua(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ld(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ua(a):(s&=o,s!==0&&(r=Ua(s)))}else o=n&~i,o!==0?r=Ua(o):s!==0&&(r=Ua(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-An(t),i=1<<n,r|=e[n],t&=~i;return r}function k2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-An(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=k2(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Tg(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function KE(){var e=eu;return eu<<=1,!(eu&4194240)&&(eu=64),e}function rp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-An(t),e[t]=n}function A2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-An(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function x0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-An(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function YE(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var XE,E0,JE,ZE,eI,kg=!1,nu=[],ai=null,li=null,ci=null,wl=new Map,xl=new Map,Xr=[],R2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function U1(e,t){switch(e){case"focusin":case"focusout":ai=null;break;case"dragenter":case"dragleave":li=null;break;case"mouseover":case"mouseout":ci=null;break;case"pointerover":case"pointerout":wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(t.pointerId)}}function Aa(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=gc(t),t!==null&&E0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function P2(e,t,n,r,i){switch(t){case"focusin":return ai=Aa(ai,e,t,n,r,i),!0;case"dragenter":return li=Aa(li,e,t,n,r,i),!0;case"mouseover":return ci=Aa(ci,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return wl.set(s,Aa(wl.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xl.set(s,Aa(xl.get(s)||null,e,t,n,r,i)),!0}return!1}function tI(e){var t=Ji(e.target);if(t!==null){var n=Ns(t);if(n!==null){if(t=n.tag,t===13){if(t=BE(n),t!==null){e.blockedOn=t,eI(e.priority,function(){JE(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ru(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cg(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xg=r,n.target.dispatchEvent(r),xg=null}else return t=gc(n),t!==null&&E0(t),e.blockedOn=n,!1;t.shift()}return!0}function F1(e,t,n){Ru(e)&&n.delete(t)}function b2(){kg=!1,ai!==null&&Ru(ai)&&(ai=null),li!==null&&Ru(li)&&(li=null),ci!==null&&Ru(ci)&&(ci=null),wl.forEach(F1),xl.forEach(F1)}function Ra(e,t){e.blockedOn===t&&(e.blockedOn=null,kg||(kg=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,b2)))}function El(e){function t(i){return Ra(i,e)}if(0<nu.length){Ra(nu[0],e);for(var n=1;n<nu.length;n++){var r=nu[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ai!==null&&Ra(ai,e),li!==null&&Ra(li,e),ci!==null&&Ra(ci,e),wl.forEach(t),xl.forEach(t),n=0;n<Xr.length;n++)r=Xr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xr.length&&(n=Xr[0],n.blockedOn===null);)tI(n),n.blockedOn===null&&Xr.shift()}var vo=zr.ReactCurrentBatchConfig,cd=!0;function N2(e,t,n,r){var i=de,s=vo.transition;vo.transition=null;try{de=1,I0(e,t,n,r)}finally{de=i,vo.transition=s}}function j2(e,t,n,r){var i=de,s=vo.transition;vo.transition=null;try{de=4,I0(e,t,n,r)}finally{de=i,vo.transition=s}}function I0(e,t,n,r){if(cd){var i=Cg(e,t,n,r);if(i===null)fp(e,t,r,ud,n),U1(e,r);else if(P2(i,e,t,n,r))r.stopPropagation();else if(U1(e,r),t&4&&-1<R2.indexOf(e)){for(;i!==null;){var s=gc(i);if(s!==null&&XE(s),s=Cg(e,t,n,r),s===null&&fp(e,t,r,ud,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fp(e,t,r,null,n)}}var ud=null;function Cg(e,t,n,r){if(ud=null,e=_0(r),e=Ji(e),e!==null)if(t=Ns(e),t===null)e=null;else if(n=t.tag,n===13){if(e=BE(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ud=e,null}function nI(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w2()){case w0:return 1;case GE:return 4;case ad:case x2:return 16;case QE:return 536870912;default:return 16}default:return 16}}var ri=null,S0=null,Pu=null;function rI(){if(Pu)return Pu;var e,t=S0,n=t.length,r,i="value"in ri?ri.value:ri.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Pu=i.slice(e,1<r?1-r:void 0)}function bu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ru(){return!0}function z1(){return!1}function un(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ru:z1,this.isPropagationStopped=z1,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ru)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ru)},persist:function(){},isPersistent:ru}),t}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},T0=un(aa),pc=be({},aa,{view:0,detail:0}),M2=un(pc),ip,sp,Pa,_h=be({},pc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:k0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pa&&(Pa&&e.type==="mousemove"?(ip=e.screenX-Pa.screenX,sp=e.screenY-Pa.screenY):sp=ip=0,Pa=e),ip)},movementY:function(e){return"movementY"in e?e.movementY:sp}}),B1=un(_h),L2=be({},_h,{dataTransfer:0}),D2=un(L2),$2=be({},pc,{relatedTarget:0}),op=un($2),O2=be({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),V2=un(O2),U2=be({},aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F2=un(U2),z2=be({},aa,{data:0}),H1=un(z2),B2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=W2[e])?!!t[e]:!1}function k0(){return q2}var G2=be({},pc,{key:function(e){if(e.key){var t=B2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?H2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:k0,charCode:function(e){return e.type==="keypress"?bu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Q2=un(G2),K2=be({},_h,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),W1=un(K2),Y2=be({},pc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:k0}),X2=un(Y2),J2=be({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z2=un(J2),eb=be({},_h,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tb=un(eb),nb=[9,13,27,32],C0=br&&"CompositionEvent"in window,el=null;br&&"documentMode"in document&&(el=document.documentMode);var rb=br&&"TextEvent"in window&&!el,iI=br&&(!C0||el&&8<el&&11>=el),q1=" ",G1=!1;function sI(e,t){switch(e){case"keyup":return nb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oI(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xs=!1;function ib(e,t){switch(e){case"compositionend":return oI(t);case"keypress":return t.which!==32?null:(G1=!0,q1);case"textInput":return e=t.data,e===q1&&G1?null:e;default:return null}}function sb(e,t){if(Xs)return e==="compositionend"||!C0&&sI(e,t)?(e=rI(),Pu=S0=ri=null,Xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return iI&&t.locale!=="ko"?null:t.data;default:return null}}var ob={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Q1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ob[e.type]:t==="textarea"}function aI(e,t,n,r){OE(r),t=dd(t,"onChange"),0<t.length&&(n=new T0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var tl=null,Il=null;function ab(e){vI(e,0)}function wh(e){var t=eo(e);if(bE(t))return e}function lb(e,t){if(e==="change")return t}var lI=!1;if(br){var ap;if(br){var lp="oninput"in document;if(!lp){var K1=document.createElement("div");K1.setAttribute("oninput","return;"),lp=typeof K1.oninput=="function"}ap=lp}else ap=!1;lI=ap&&(!document.documentMode||9<document.documentMode)}function Y1(){tl&&(tl.detachEvent("onpropertychange",cI),Il=tl=null)}function cI(e){if(e.propertyName==="value"&&wh(Il)){var t=[];aI(t,Il,e,_0(e)),zE(ab,t)}}function cb(e,t,n){e==="focusin"?(Y1(),tl=t,Il=n,tl.attachEvent("onpropertychange",cI)):e==="focusout"&&Y1()}function ub(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wh(Il)}function db(e,t){if(e==="click")return wh(t)}function hb(e,t){if(e==="input"||e==="change")return wh(t)}function fb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mn=typeof Object.is=="function"?Object.is:fb;function Sl(e,t){if(Mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cg.call(t,i)||!Mn(e[i],t[i]))return!1}return!0}function X1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function J1(e,t){var n=X1(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=X1(n)}}function uI(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uI(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dI(){for(var e=window,t=id();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=id(e.document)}return t}function A0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pb(e){var t=dI(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&uI(n.ownerDocument.documentElement,n)){if(r!==null&&A0(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=J1(n,s);var o=J1(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gb=br&&"documentMode"in document&&11>=document.documentMode,Js=null,Ag=null,nl=null,Rg=!1;function Z1(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rg||Js==null||Js!==id(r)||(r=Js,"selectionStart"in r&&A0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nl&&Sl(nl,r)||(nl=r,r=dd(Ag,"onSelect"),0<r.length&&(t=new T0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Js)))}function iu(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zs={animationend:iu("Animation","AnimationEnd"),animationiteration:iu("Animation","AnimationIteration"),animationstart:iu("Animation","AnimationStart"),transitionend:iu("Transition","TransitionEnd")},cp={},hI={};br&&(hI=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function xh(e){if(cp[e])return cp[e];if(!Zs[e])return e;var t=Zs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hI)return cp[e]=t[n];return e}var fI=xh("animationend"),pI=xh("animationiteration"),gI=xh("animationstart"),mI=xh("transitionend"),yI=new Map,e_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ni(e,t){yI.set(e,t),bs(t,[e])}for(var up=0;up<e_.length;up++){var dp=e_[up],mb=dp.toLowerCase(),yb=dp[0].toUpperCase()+dp.slice(1);Ni(mb,"on"+yb)}Ni(fI,"onAnimationEnd");Ni(pI,"onAnimationIteration");Ni(gI,"onAnimationStart");Ni("dblclick","onDoubleClick");Ni("focusin","onFocus");Ni("focusout","onBlur");Ni(mI,"onTransitionEnd");Ro("onMouseEnter",["mouseout","mouseover"]);Ro("onMouseLeave",["mouseout","mouseover"]);Ro("onPointerEnter",["pointerout","pointerover"]);Ro("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function t_(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,m2(r,t,void 0,e),e.currentTarget=null}function vI(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;t_(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;t_(i,a,u),s=l}}}if(od)throw e=Sg,od=!1,Sg=null,e}function _e(e,t){var n=t[Mg];n===void 0&&(n=t[Mg]=new Set);var r=e+"__bubble";n.has(r)||(_I(t,e,2,!1),n.add(r))}function hp(e,t,n){var r=0;t&&(r|=4),_I(n,e,r,t)}var su="_reactListening"+Math.random().toString(36).slice(2);function Tl(e){if(!e[su]){e[su]=!0,kE.forEach(function(n){n!=="selectionchange"&&(vb.has(n)||hp(n,!1,e),hp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[su]||(t[su]=!0,hp("selectionchange",!1,t))}}function _I(e,t,n,r){switch(nI(t)){case 1:var i=N2;break;case 4:i=j2;break;default:i=I0}n=i.bind(null,t,n,e),i=void 0,!Ig||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fp(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ji(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}zE(function(){var u=s,d=_0(n),h=[];e:{var f=yI.get(e);if(f!==void 0){var p=T0,m=e;switch(e){case"keypress":if(bu(n)===0)break e;case"keydown":case"keyup":p=Q2;break;case"focusin":m="focus",p=op;break;case"focusout":m="blur",p=op;break;case"beforeblur":case"afterblur":p=op;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=B1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=D2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=X2;break;case fI:case pI:case gI:p=V2;break;case mI:p=Z2;break;case"scroll":p=M2;break;case"wheel":p=tb;break;case"copy":case"cut":case"paste":p=F2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=W1}var _=(t&4)!==0,w=!_&&e==="scroll",g=_?f!==null?f+"Capture":null:f;_=[];for(var y=u,v;y!==null;){v=y;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=_l(y,g),E!=null&&_.push(kl(y,E,v)))),w)break;y=y.return}0<_.length&&(f=new p(f,m,null,n,d),h.push({event:f,listeners:_}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==xg&&(m=n.relatedTarget||n.fromElement)&&(Ji(m)||m[Nr]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Ji(m):null,m!==null&&(w=Ns(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(_=B1,E="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(_=W1,E="onPointerLeave",g="onPointerEnter",y="pointer"),w=p==null?f:eo(p),v=m==null?f:eo(m),f=new _(E,y+"leave",p,n,d),f.target=w,f.relatedTarget=v,E=null,Ji(d)===u&&(_=new _(g,y+"enter",m,n,d),_.target=v,_.relatedTarget=w,E=_),w=E,p&&m)t:{for(_=p,g=m,y=0,v=_;v;v=Fs(v))y++;for(v=0,E=g;E;E=Fs(E))v++;for(;0<y-v;)_=Fs(_),y--;for(;0<v-y;)g=Fs(g),v--;for(;y--;){if(_===g||g!==null&&_===g.alternate)break t;_=Fs(_),g=Fs(g)}_=null}else _=null;p!==null&&n_(h,f,p,_,!1),m!==null&&w!==null&&n_(h,w,m,_,!0)}}e:{if(f=u?eo(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=lb;else if(Q1(f))if(lI)T=hb;else{T=ub;var k=cb}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=db);if(T&&(T=T(e,u))){aI(h,T,n,d);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&mg(f,"number",f.value)}switch(k=u?eo(u):window,e){case"focusin":(Q1(k)||k.contentEditable==="true")&&(Js=k,Ag=u,nl=null);break;case"focusout":nl=Ag=Js=null;break;case"mousedown":Rg=!0;break;case"contextmenu":case"mouseup":case"dragend":Rg=!1,Z1(h,n,d);break;case"selectionchange":if(gb)break;case"keydown":case"keyup":Z1(h,n,d)}var I;if(C0)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Xs?sI(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(iI&&n.locale!=="ko"&&(Xs||C!=="onCompositionStart"?C==="onCompositionEnd"&&Xs&&(I=rI()):(ri=d,S0="value"in ri?ri.value:ri.textContent,Xs=!0)),k=dd(u,C),0<k.length&&(C=new H1(C,e,null,n,d),h.push({event:C,listeners:k}),I?C.data=I:(I=oI(n),I!==null&&(C.data=I)))),(I=rb?ib(e,n):sb(e,n))&&(u=dd(u,"onBeforeInput"),0<u.length&&(d=new H1("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=I))}vI(h,t)})}function kl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function dd(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=_l(e,n),s!=null&&r.unshift(kl(e,s,i)),s=_l(e,t),s!=null&&r.push(kl(e,s,i))),e=e.return}return r}function Fs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function n_(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=_l(n,s),l!=null&&o.unshift(kl(n,l,a))):i||(l=_l(n,s),l!=null&&o.push(kl(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var _b=/\r\n?/g,wb=/\u0000|\uFFFD/g;function r_(e){return(typeof e=="string"?e:""+e).replace(_b,`
`).replace(wb,"")}function ou(e,t,n){if(t=r_(t),r_(e)!==t&&n)throw Error(b(425))}function hd(){}var Pg=null,bg=null;function Ng(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jg=typeof setTimeout=="function"?setTimeout:void 0,xb=typeof clearTimeout=="function"?clearTimeout:void 0,i_=typeof Promise=="function"?Promise:void 0,Eb=typeof queueMicrotask=="function"?queueMicrotask:typeof i_<"u"?function(e){return i_.resolve(null).then(e).catch(Ib)}:jg;function Ib(e){setTimeout(function(){throw e})}function pp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),El(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);El(t)}function ui(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function s_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var la=Math.random().toString(36).slice(2),Qn="__reactFiber$"+la,Cl="__reactProps$"+la,Nr="__reactContainer$"+la,Mg="__reactEvents$"+la,Sb="__reactListeners$"+la,Tb="__reactHandles$"+la;function Ji(e){var t=e[Qn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nr]||n[Qn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=s_(e);e!==null;){if(n=e[Qn])return n;e=s_(e)}return t}e=n,n=e.parentNode}return null}function gc(e){return e=e[Qn]||e[Nr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function eo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Eh(e){return e[Cl]||null}var Lg=[],to=-1;function ji(e){return{current:e}}function Te(e){0>to||(e.current=Lg[to],Lg[to]=null,to--)}function me(e,t){to++,Lg[to]=e.current,e.current=t}var Si={},St=ji(Si),Bt=ji(!1),hs=Si;function Po(e,t){var n=e.type.contextTypes;if(!n)return Si;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(e){return e=e.childContextTypes,e!=null}function fd(){Te(Bt),Te(St)}function o_(e,t,n){if(St.current!==Si)throw Error(b(168));me(St,t),me(Bt,n)}function wI(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,c2(e)||"Unknown",i));return be({},n,r)}function pd(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Si,hs=St.current,me(St,e),me(Bt,Bt.current),!0}function a_(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=wI(e,t,hs),r.__reactInternalMemoizedMergedChildContext=e,Te(Bt),Te(St),me(St,e)):Te(Bt),me(Bt,n)}var vr=null,Ih=!1,gp=!1;function xI(e){vr===null?vr=[e]:vr.push(e)}function kb(e){Ih=!0,xI(e)}function Mi(){if(!gp&&vr!==null){gp=!0;var e=0,t=de;try{var n=vr;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vr=null,Ih=!1}catch(i){throw vr!==null&&(vr=vr.slice(e+1)),qE(w0,Mi),i}finally{de=t,gp=!1}}return null}var no=[],ro=0,gd=null,md=0,dn=[],hn=0,fs=null,_r=1,wr="";function Ki(e,t){no[ro++]=md,no[ro++]=gd,gd=e,md=t}function EI(e,t,n){dn[hn++]=_r,dn[hn++]=wr,dn[hn++]=fs,fs=e;var r=_r;e=wr;var i=32-An(r)-1;r&=~(1<<i),n+=1;var s=32-An(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_r=1<<32-An(t)+i|n<<i|r,wr=s+e}else _r=1<<s|n<<i|r,wr=e}function R0(e){e.return!==null&&(Ki(e,1),EI(e,1,0))}function P0(e){for(;e===gd;)gd=no[--ro],no[ro]=null,md=no[--ro],no[ro]=null;for(;e===fs;)fs=dn[--hn],dn[hn]=null,wr=dn[--hn],dn[hn]=null,_r=dn[--hn],dn[hn]=null}var Zt=null,Kt=null,Ce=!1,kn=null;function II(e,t){var n=gn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function l_(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Zt=e,Kt=ui(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Zt=e,Kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fs!==null?{id:_r,overflow:wr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Zt=e,Kt=null,!0):!1;default:return!1}}function Dg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $g(e){if(Ce){var t=Kt;if(t){var n=t;if(!l_(e,t)){if(Dg(e))throw Error(b(418));t=ui(n.nextSibling);var r=Zt;t&&l_(e,t)?II(r,n):(e.flags=e.flags&-4097|2,Ce=!1,Zt=e)}}else{if(Dg(e))throw Error(b(418));e.flags=e.flags&-4097|2,Ce=!1,Zt=e}}}function c_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zt=e}function au(e){if(e!==Zt)return!1;if(!Ce)return c_(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ng(e.type,e.memoizedProps)),t&&(t=Kt)){if(Dg(e))throw SI(),Error(b(418));for(;t;)II(e,t),t=ui(t.nextSibling)}if(c_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Kt=ui(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Kt=null}}else Kt=Zt?ui(e.stateNode.nextSibling):null;return!0}function SI(){for(var e=Kt;e;)e=ui(e.nextSibling)}function bo(){Kt=Zt=null,Ce=!1}function b0(e){kn===null?kn=[e]:kn.push(e)}var Cb=zr.ReactCurrentBatchConfig;function Sn(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var yd=ji(null),vd=null,io=null,N0=null;function j0(){N0=io=vd=null}function M0(e){var t=yd.current;Te(yd),e._currentValue=t}function Og(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _o(e,t){vd=e,N0=io=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(zt=!0),e.firstContext=null)}function _n(e){var t=e._currentValue;if(N0!==e)if(e={context:e,memoizedValue:t,next:null},io===null){if(vd===null)throw Error(b(308));io=e,vd.dependencies={lanes:0,firstContext:e}}else io=io.next=e;return t}var Zi=null;function L0(e){Zi===null?Zi=[e]:Zi.push(e)}function TI(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,L0(t)):(n.next=i.next,i.next=n),t.interleaved=n,jr(e,r)}function jr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yr=!1;function D0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kI(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ar(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function di(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,jr(e,n)}return i=r.interleaved,i===null?(t.next=t,L0(r)):(t.next=i.next,i.next=t),r.interleaved=t,jr(e,n)}function Nu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,x0(e,n)}}function u_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _d(e,t,n,r){var i=e.updateQueue;Yr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,_=a;switch(f=t,p=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){h=m.call(p,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,f=typeof m=="function"?m.call(p,h,f):m,f==null)break e;h=be({},h,f);break e;case 2:Yr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=h):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);gs|=o,e.lanes=o,e.memoizedState=h}}function d_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var CI=new TE.Component().refs;function Vg(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sh={isMounted:function(e){return(e=e._reactInternals)?Ns(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Mt(),i=fi(e),s=Ar(r,i);s.payload=t,n!=null&&(s.callback=n),t=di(e,s,i),t!==null&&(Rn(t,e,i,r),Nu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Mt(),i=fi(e),s=Ar(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=di(e,s,i),t!==null&&(Rn(t,e,i,r),Nu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mt(),r=fi(e),i=Ar(n,r);i.tag=2,t!=null&&(i.callback=t),t=di(e,i,r),t!==null&&(Rn(t,e,r,n),Nu(t,e,r))}};function h_(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Sl(n,r)||!Sl(i,s):!0}function AI(e,t,n){var r=!1,i=Si,s=t.contextType;return typeof s=="object"&&s!==null?s=_n(s):(i=Ht(t)?hs:St.current,r=t.contextTypes,s=(r=r!=null)?Po(e,i):Si),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sh,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function f_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sh.enqueueReplaceState(t,t.state,null)}function Ug(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=CI,D0(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=_n(s):(s=Ht(t)?hs:St.current,i.context=Po(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Vg(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Sh.enqueueReplaceState(i,i.state,null),_d(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ba(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===CI&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function lu(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function p_(e){var t=e._init;return t(e._payload)}function RI(e){function t(g,y){if(e){var v=g.deletions;v===null?(g.deletions=[y],g.flags|=16):v.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function i(g,y){return g=pi(g,y),g.index=0,g.sibling=null,g}function s(g,y,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<y?(g.flags|=2,y):v):(g.flags|=2,y)):(g.flags|=1048576,y)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,y,v,E){return y===null||y.tag!==6?(y=Ep(v,g.mode,E),y.return=g,y):(y=i(y,v),y.return=g,y)}function l(g,y,v,E){var T=v.type;return T===Ys?d(g,y,v.props.children,E,v.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Kr&&p_(T)===y.type)?(E=i(y,v.props),E.ref=ba(g,y,v),E.return=g,E):(E=Ou(v.type,v.key,v.props,null,g.mode,E),E.ref=ba(g,y,v),E.return=g,E)}function u(g,y,v,E){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Ip(v,g.mode,E),y.return=g,y):(y=i(y,v.children||[]),y.return=g,y)}function d(g,y,v,E,T){return y===null||y.tag!==7?(y=os(v,g.mode,E,T),y.return=g,y):(y=i(y,v),y.return=g,y)}function h(g,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Ep(""+y,g.mode,v),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xc:return v=Ou(y.type,y.key,y.props,null,g.mode,v),v.ref=ba(g,null,y),v.return=g,v;case Ks:return y=Ip(y,g.mode,v),y.return=g,y;case Kr:var E=y._init;return h(g,E(y._payload),v)}if(Va(y)||ka(y))return y=os(y,g.mode,v,null),y.return=g,y;lu(g,y)}return null}function f(g,y,v,E){var T=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(g,y,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xc:return v.key===T?l(g,y,v,E):null;case Ks:return v.key===T?u(g,y,v,E):null;case Kr:return T=v._init,f(g,y,T(v._payload),E)}if(Va(v)||ka(v))return T!==null?null:d(g,y,v,E,null);lu(g,v)}return null}function p(g,y,v,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,a(y,g,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Xc:return g=g.get(E.key===null?v:E.key)||null,l(y,g,E,T);case Ks:return g=g.get(E.key===null?v:E.key)||null,u(y,g,E,T);case Kr:var k=E._init;return p(g,y,v,k(E._payload),T)}if(Va(E)||ka(E))return g=g.get(v)||null,d(y,g,E,T,null);lu(y,E)}return null}function m(g,y,v,E){for(var T=null,k=null,I=y,C=y=0,$=null;I!==null&&C<v.length;C++){I.index>C?($=I,I=null):$=I.sibling;var z=f(g,I,v[C],E);if(z===null){I===null&&(I=$);break}e&&I&&z.alternate===null&&t(g,I),y=s(z,y,C),k===null?T=z:k.sibling=z,k=z,I=$}if(C===v.length)return n(g,I),Ce&&Ki(g,C),T;if(I===null){for(;C<v.length;C++)I=h(g,v[C],E),I!==null&&(y=s(I,y,C),k===null?T=I:k.sibling=I,k=I);return Ce&&Ki(g,C),T}for(I=r(g,I);C<v.length;C++)$=p(I,g,C,v[C],E),$!==null&&(e&&$.alternate!==null&&I.delete($.key===null?C:$.key),y=s($,y,C),k===null?T=$:k.sibling=$,k=$);return e&&I.forEach(function(ve){return t(g,ve)}),Ce&&Ki(g,C),T}function _(g,y,v,E){var T=ka(v);if(typeof T!="function")throw Error(b(150));if(v=T.call(v),v==null)throw Error(b(151));for(var k=T=null,I=y,C=y=0,$=null,z=v.next();I!==null&&!z.done;C++,z=v.next()){I.index>C?($=I,I=null):$=I.sibling;var ve=f(g,I,z.value,E);if(ve===null){I===null&&(I=$);break}e&&I&&ve.alternate===null&&t(g,I),y=s(ve,y,C),k===null?T=ve:k.sibling=ve,k=ve,I=$}if(z.done)return n(g,I),Ce&&Ki(g,C),T;if(I===null){for(;!z.done;C++,z=v.next())z=h(g,z.value,E),z!==null&&(y=s(z,y,C),k===null?T=z:k.sibling=z,k=z);return Ce&&Ki(g,C),T}for(I=r(g,I);!z.done;C++,z=v.next())z=p(I,g,C,z.value,E),z!==null&&(e&&z.alternate!==null&&I.delete(z.key===null?C:z.key),y=s(z,y,C),k===null?T=z:k.sibling=z,k=z);return e&&I.forEach(function(Y){return t(g,Y)}),Ce&&Ki(g,C),T}function w(g,y,v,E){if(typeof v=="object"&&v!==null&&v.type===Ys&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Xc:e:{for(var T=v.key,k=y;k!==null;){if(k.key===T){if(T=v.type,T===Ys){if(k.tag===7){n(g,k.sibling),y=i(k,v.props.children),y.return=g,g=y;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Kr&&p_(T)===k.type){n(g,k.sibling),y=i(k,v.props),y.ref=ba(g,k,v),y.return=g,g=y;break e}n(g,k);break}else t(g,k);k=k.sibling}v.type===Ys?(y=os(v.props.children,g.mode,E,v.key),y.return=g,g=y):(E=Ou(v.type,v.key,v.props,null,g.mode,E),E.ref=ba(g,y,v),E.return=g,g=E)}return o(g);case Ks:e:{for(k=v.key;y!==null;){if(y.key===k)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(g,y.sibling),y=i(y,v.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=Ip(v,g.mode,E),y.return=g,g=y}return o(g);case Kr:return k=v._init,w(g,y,k(v._payload),E)}if(Va(v))return m(g,y,v,E);if(ka(v))return _(g,y,v,E);lu(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(g,y.sibling),y=i(y,v),y.return=g,g=y):(n(g,y),y=Ep(v,g.mode,E),y.return=g,g=y),o(g)):n(g,y)}return w}var No=RI(!0),PI=RI(!1),mc={},tr=ji(mc),Al=ji(mc),Rl=ji(mc);function es(e){if(e===mc)throw Error(b(174));return e}function $0(e,t){switch(me(Rl,t),me(Al,e),me(tr,mc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vg(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vg(t,e)}Te(tr),me(tr,t)}function jo(){Te(tr),Te(Al),Te(Rl)}function bI(e){es(Rl.current);var t=es(tr.current),n=vg(t,e.type);t!==n&&(me(Al,e),me(tr,n))}function O0(e){Al.current===e&&(Te(tr),Te(Al))}var Ae=ji(0);function wd(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mp=[];function V0(){for(var e=0;e<mp.length;e++)mp[e]._workInProgressVersionPrimary=null;mp.length=0}var ju=zr.ReactCurrentDispatcher,yp=zr.ReactCurrentBatchConfig,ps=0,Re=null,Ge=null,Je=null,xd=!1,rl=!1,Pl=0,Ab=0;function pt(){throw Error(b(321))}function U0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mn(e[n],t[n]))return!1;return!0}function F0(e,t,n,r,i,s){if(ps=s,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ju.current=e===null||e.memoizedState===null?Nb:jb,e=n(r,i),rl){s=0;do{if(rl=!1,Pl=0,25<=s)throw Error(b(301));s+=1,Je=Ge=null,t.updateQueue=null,ju.current=Mb,e=n(r,i)}while(rl)}if(ju.current=Ed,t=Ge!==null&&Ge.next!==null,ps=0,Je=Ge=Re=null,xd=!1,t)throw Error(b(300));return e}function z0(){var e=Pl!==0;return Pl=0,e}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Re.memoizedState=Je=e:Je=Je.next=e,Je}function wn(){if(Ge===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Je===null?Re.memoizedState:Je.next;if(t!==null)Je=t,Ge=e;else{if(e===null)throw Error(b(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Je===null?Re.memoizedState=Je=e:Je=Je.next=e}return Je}function bl(e,t){return typeof t=="function"?t(e):t}function vp(e){var t=wn(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((ps&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Re.lanes|=d,gs|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Mn(r,t.memoizedState)||(zt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Re.lanes|=s,gs|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _p(e){var t=wn(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Mn(s,t.memoizedState)||(zt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function NI(){}function jI(e,t){var n=Re,r=wn(),i=t(),s=!Mn(r.memoizedState,i);if(s&&(r.memoizedState=i,zt=!0),r=r.queue,B0(DI.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Nl(9,LI.bind(null,n,r,i,t),void 0,null),tt===null)throw Error(b(349));ps&30||MI(n,t,i)}return i}function MI(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function LI(e,t,n,r){t.value=n,t.getSnapshot=r,$I(t)&&OI(e)}function DI(e,t,n){return n(function(){$I(t)&&OI(e)})}function $I(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mn(e,n)}catch{return!0}}function OI(e){var t=jr(e,1);t!==null&&Rn(t,e,1,-1)}function g_(e){var t=Wn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:e},t.queue=e,e=e.dispatch=bb.bind(null,Re,e),[t.memoizedState,e]}function Nl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function VI(){return wn().memoizedState}function Mu(e,t,n,r){var i=Wn();Re.flags|=e,i.memoizedState=Nl(1|t,n,void 0,r===void 0?null:r)}function Th(e,t,n,r){var i=wn();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&U0(r,o.deps)){i.memoizedState=Nl(t,n,s,r);return}}Re.flags|=e,i.memoizedState=Nl(1|t,n,s,r)}function m_(e,t){return Mu(8390656,8,e,t)}function B0(e,t){return Th(2048,8,e,t)}function UI(e,t){return Th(4,2,e,t)}function FI(e,t){return Th(4,4,e,t)}function zI(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function BI(e,t,n){return n=n!=null?n.concat([e]):null,Th(4,4,zI.bind(null,t,e),n)}function H0(){}function HI(e,t){var n=wn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&U0(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function WI(e,t){var n=wn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&U0(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qI(e,t,n){return ps&21?(Mn(n,t)||(n=KE(),Re.lanes|=n,gs|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,zt=!0),e.memoizedState=n)}function Rb(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=yp.transition;yp.transition={};try{e(!1),t()}finally{de=n,yp.transition=r}}function GI(){return wn().memoizedState}function Pb(e,t,n){var r=fi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},QI(e))KI(t,n);else if(n=TI(e,t,n,r),n!==null){var i=Mt();Rn(n,e,r,i),YI(n,t,r)}}function bb(e,t,n){var r=fi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(QI(e))KI(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Mn(a,o)){var l=t.interleaved;l===null?(i.next=i,L0(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=TI(e,t,i,r),n!==null&&(i=Mt(),Rn(n,e,r,i),YI(n,t,r))}}function QI(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function KI(e,t){rl=xd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function YI(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,x0(e,n)}}var Ed={readContext:_n,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},Nb={readContext:_n,useCallback:function(e,t){return Wn().memoizedState=[e,t===void 0?null:t],e},useContext:_n,useEffect:m_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mu(4194308,4,zI.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mu(4,2,e,t)},useMemo:function(e,t){var n=Wn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Pb.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=Wn();return e={current:e},t.memoizedState=e},useState:g_,useDebugValue:H0,useDeferredValue:function(e){return Wn().memoizedState=e},useTransition:function(){var e=g_(!1),t=e[0];return e=Rb.bind(null,e[1]),Wn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,i=Wn();if(Ce){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),tt===null)throw Error(b(349));ps&30||MI(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,m_(DI.bind(null,r,s,e),[e]),r.flags|=2048,Nl(9,LI.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Wn(),t=tt.identifierPrefix;if(Ce){var n=wr,r=_r;n=(r&~(1<<32-An(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ab++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jb={readContext:_n,useCallback:HI,useContext:_n,useEffect:B0,useImperativeHandle:BI,useInsertionEffect:UI,useLayoutEffect:FI,useMemo:WI,useReducer:vp,useRef:VI,useState:function(){return vp(bl)},useDebugValue:H0,useDeferredValue:function(e){var t=wn();return qI(t,Ge.memoizedState,e)},useTransition:function(){var e=vp(bl)[0],t=wn().memoizedState;return[e,t]},useMutableSource:NI,useSyncExternalStore:jI,useId:GI,unstable_isNewReconciler:!1},Mb={readContext:_n,useCallback:HI,useContext:_n,useEffect:B0,useImperativeHandle:BI,useInsertionEffect:UI,useLayoutEffect:FI,useMemo:WI,useReducer:_p,useRef:VI,useState:function(){return _p(bl)},useDebugValue:H0,useDeferredValue:function(e){var t=wn();return Ge===null?t.memoizedState=e:qI(t,Ge.memoizedState,e)},useTransition:function(){var e=_p(bl)[0],t=wn().memoizedState;return[e,t]},useMutableSource:NI,useSyncExternalStore:jI,useId:GI,unstable_isNewReconciler:!1};function Mo(e,t){try{var n="",r=t;do n+=l2(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function wp(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fg(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lb=typeof WeakMap=="function"?WeakMap:Map;function XI(e,t,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sd||(Sd=!0,Xg=r),Fg(e,t)},n}function JI(e,t,n){n=Ar(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fg(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fg(e,t),typeof r!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function y_(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Kb.bind(null,e,t,n),t.then(e,e))}function v_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function __(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ar(-1,1),t.tag=2,di(n,t,1))),n.lanes|=1),e)}var Db=zr.ReactCurrentOwner,zt=!1;function Rt(e,t,n,r){t.child=e===null?PI(t,null,n,r):No(t,e.child,n,r)}function w_(e,t,n,r,i){n=n.render;var s=t.ref;return _o(t,i),r=F0(e,t,n,r,s,i),n=z0(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mr(e,t,i)):(Ce&&n&&R0(t),t.flags|=1,Rt(e,t,r,i),t.child)}function x_(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!J0(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ZI(e,t,s,r,i)):(e=Ou(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Sl,n(o,r)&&e.ref===t.ref)return Mr(e,t,i)}return t.flags|=1,e=pi(s,r),e.ref=t.ref,e.return=t,t.child=e}function ZI(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Sl(s,r)&&e.ref===t.ref)if(zt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(zt=!0);else return t.lanes=e.lanes,Mr(e,t,i)}return zg(e,t,n,r,i)}function eS(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(oo,Qt),Qt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(oo,Qt),Qt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(oo,Qt),Qt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,me(oo,Qt),Qt|=r;return Rt(e,t,i,n),t.child}function tS(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zg(e,t,n,r,i){var s=Ht(n)?hs:St.current;return s=Po(t,s),_o(t,i),n=F0(e,t,n,r,s,i),r=z0(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mr(e,t,i)):(Ce&&r&&R0(t),t.flags|=1,Rt(e,t,n,i),t.child)}function E_(e,t,n,r,i){if(Ht(n)){var s=!0;pd(t)}else s=!1;if(_o(t,i),t.stateNode===null)Lu(e,t),AI(t,n,r),Ug(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_n(u):(u=Ht(n)?hs:St.current,u=Po(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&f_(t,o,r,u),Yr=!1;var f=t.memoizedState;o.state=f,_d(t,r,o,i),l=t.memoizedState,a!==r||f!==l||Bt.current||Yr?(typeof d=="function"&&(Vg(t,n,d,r),l=t.memoizedState),(a=Yr||h_(t,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,kI(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Sn(t.type,a),o.props=u,h=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_n(l):(l=Ht(n)?hs:St.current,l=Po(t,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&f_(t,o,r,l),Yr=!1,f=t.memoizedState,o.state=f,_d(t,r,o,i);var m=t.memoizedState;a!==h||f!==m||Bt.current||Yr?(typeof p=="function"&&(Vg(t,n,p,r),m=t.memoizedState),(u=Yr||h_(t,n,u,r,f,m,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Bg(e,t,n,r,s,i)}function Bg(e,t,n,r,i,s){tS(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&a_(t,n,!1),Mr(e,t,s);r=t.stateNode,Db.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=No(t,e.child,null,s),t.child=No(t,null,a,s)):Rt(e,t,a,s),t.memoizedState=r.state,i&&a_(t,n,!0),t.child}function nS(e){var t=e.stateNode;t.pendingContext?o_(e,t.pendingContext,t.pendingContext!==t.context):t.context&&o_(e,t.context,!1),$0(e,t.containerInfo)}function I_(e,t,n,r,i){return bo(),b0(i),t.flags|=256,Rt(e,t,n,r),t.child}var Hg={dehydrated:null,treeContext:null,retryLane:0};function Wg(e){return{baseLanes:e,cachePool:null,transitions:null}}function rS(e,t,n){var r=t.pendingProps,i=Ae.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Ae,i&1),e===null)return $g(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ah(o,r,0,null),e=os(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Wg(n),t.memoizedState=Hg,e):W0(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $b(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=pi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=pi(a,s):(s=os(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Wg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Hg,r}return s=e.child,e=s.sibling,r=pi(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function W0(e,t){return t=Ah({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function cu(e,t,n,r){return r!==null&&b0(r),No(t,e.child,null,n),e=W0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $b(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=wp(Error(b(422))),cu(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ah({mode:"visible",children:r.children},i,0,null),s=os(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&No(t,e.child,null,o),t.child.memoizedState=Wg(o),t.memoizedState=Hg,s);if(!(t.mode&1))return cu(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=wp(s,r,void 0),cu(e,t,o,r)}if(a=(o&e.childLanes)!==0,zt||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jr(e,i),Rn(r,e,i,-1))}return X0(),r=wp(Error(b(421))),cu(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Yb.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Kt=ui(i.nextSibling),Zt=t,Ce=!0,kn=null,e!==null&&(dn[hn++]=_r,dn[hn++]=wr,dn[hn++]=fs,_r=e.id,wr=e.overflow,fs=t),t=W0(t,r.children),t.flags|=4096,t)}function S_(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Og(e.return,t,n)}function xp(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function iS(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&S_(e,n,t);else if(e.tag===19)S_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wd(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xp(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wd(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xp(t,!0,n,null,s);break;case"together":xp(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gs|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ob(e,t,n){switch(t.tag){case 3:nS(t),bo();break;case 5:bI(t);break;case 1:Ht(t.type)&&pd(t);break;case 4:$0(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(yd,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?rS(e,t,n):(me(Ae,Ae.current&1),e=Mr(e,t,n),e!==null?e.sibling:null);me(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return iS(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,eS(e,t,n)}return Mr(e,t,n)}var sS,qg,oS,aS;sS=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qg=function(){};oS=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,es(tr.current);var s=null;switch(n){case"input":i=pg(e,i),r=pg(e,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=yg(e,i),r=yg(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hd)}_g(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};aS=function(e,t,n,r){n!==r&&(t.flags|=4)};function Na(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function gt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vb(e,t,n){var r=t.pendingProps;switch(P0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(t),null;case 1:return Ht(t.type)&&fd(),gt(t),null;case 3:return r=t.stateNode,jo(),Te(Bt),Te(St),V0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(au(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kn!==null&&(em(kn),kn=null))),qg(e,t),gt(t),null;case 5:O0(t);var i=es(Rl.current);if(n=t.type,e!==null&&t.stateNode!=null)oS(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return gt(t),null}if(e=es(tr.current),au(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Qn]=t,r[Cl]=s,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Fa.length;i++)_e(Fa[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":j1(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":L1(r,s),_e("invalid",r)}_g(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ou(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ou(r.textContent,a,e),i=["children",""+a]):yl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Jc(r),M1(r,s,!0);break;case"textarea":Jc(r),D1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hd)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ME(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Qn]=t,e[Cl]=r,sS(e,t,!1,!1),t.stateNode=e;e:{switch(o=wg(n,r),n){case"dialog":_e("cancel",e),_e("close",e),i=r;break;case"iframe":case"object":case"embed":_e("load",e),i=r;break;case"video":case"audio":for(i=0;i<Fa.length;i++)_e(Fa[i],e);i=r;break;case"source":_e("error",e),i=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),i=r;break;case"details":_e("toggle",e),i=r;break;case"input":j1(e,r),i=pg(e,r),_e("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),_e("invalid",e);break;case"textarea":L1(e,r),i=yg(e,r),_e("invalid",e);break;default:i=r}_g(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$E(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&LE(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vl(e,l):typeof l=="number"&&vl(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",e):l!=null&&g0(e,s,l,o))}switch(n){case"input":Jc(e),M1(e,r,!1);break;case"textarea":Jc(e),D1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ii(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?go(e,!!r.multiple,s,!1):r.defaultValue!=null&&go(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return gt(t),null;case 6:if(e&&t.stateNode!=null)aS(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=es(Rl.current),es(tr.current),au(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qn]=t,(s=r.nodeValue!==n)&&(e=Zt,e!==null))switch(e.tag){case 3:ou(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ou(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qn]=t,t.stateNode=r}return gt(t),null;case 13:if(Te(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Kt!==null&&t.mode&1&&!(t.flags&128))SI(),bo(),t.flags|=98560,s=!1;else if(s=au(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(b(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Qn]=t}else bo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;gt(t),s=!1}else kn!==null&&(em(kn),kn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Qe===0&&(Qe=3):X0())),t.updateQueue!==null&&(t.flags|=4),gt(t),null);case 4:return jo(),qg(e,t),e===null&&Tl(t.stateNode.containerInfo),gt(t),null;case 10:return M0(t.type._context),gt(t),null;case 17:return Ht(t.type)&&fd(),gt(t),null;case 19:if(Te(Ae),s=t.memoizedState,s===null)return gt(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Na(s,!1);else{if(Qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=wd(e),o!==null){for(t.flags|=128,Na(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Ae,Ae.current&1|2),t.child}e=e.sibling}s.tail!==null&&$e()>Lo&&(t.flags|=128,r=!0,Na(s,!1),t.lanes=4194304)}else{if(!r)if(e=wd(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return gt(t),null}else 2*$e()-s.renderingStartTime>Lo&&n!==1073741824&&(t.flags|=128,r=!0,Na(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=$e(),t.sibling=null,n=Ae.current,me(Ae,r?n&1|2:n&1),t):(gt(t),null);case 22:case 23:return Y0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qt&1073741824&&(gt(t),t.subtreeFlags&6&&(t.flags|=8192)):gt(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Ub(e,t){switch(P0(t),t.tag){case 1:return Ht(t.type)&&fd(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jo(),Te(Bt),Te(St),V0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return O0(t),null;case 13:if(Te(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));bo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Ae),null;case 4:return jo(),null;case 10:return M0(t.type._context),null;case 22:case 23:return Y0(),null;case 24:return null;default:return null}}var uu=!1,vt=!1,Fb=typeof WeakSet=="function"?WeakSet:Set,O=null;function so(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function Gg(e,t,n){try{n()}catch(r){je(e,t,r)}}var T_=!1;function zb(e,t){if(Pg=cd,e=dI(),A0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bg={focusedElem:e,selectionRange:n},cd=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,w=m.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?_:Sn(t.type,_),w);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(E){je(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return m=T_,T_=!1,m}function il(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gg(t,n,s)}i=i.next}while(i!==r)}}function kh(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qg(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lS(e){var t=e.alternate;t!==null&&(e.alternate=null,lS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qn],delete t[Cl],delete t[Mg],delete t[Sb],delete t[Tb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cS(e){return e.tag===5||e.tag===3||e.tag===4}function k_(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hd));else if(r!==4&&(e=e.child,e!==null))for(Kg(e,t,n),e=e.sibling;e!==null;)Kg(e,t,n),e=e.sibling}function Yg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yg(e,t,n),e=e.sibling;e!==null;)Yg(e,t,n),e=e.sibling}var it=null,Tn=!1;function qr(e,t,n){for(n=n.child;n!==null;)uS(e,t,n),n=n.sibling}function uS(e,t,n){if(er&&typeof er.onCommitFiberUnmount=="function")try{er.onCommitFiberUnmount(vh,n)}catch{}switch(n.tag){case 5:vt||so(n,t);case 6:var r=it,i=Tn;it=null,qr(e,t,n),it=r,Tn=i,it!==null&&(Tn?(e=it,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(Tn?(e=it,n=n.stateNode,e.nodeType===8?pp(e.parentNode,n):e.nodeType===1&&pp(e,n),El(e)):pp(it,n.stateNode));break;case 4:r=it,i=Tn,it=n.stateNode.containerInfo,Tn=!0,qr(e,t,n),it=r,Tn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gg(n,t,o),i=i.next}while(i!==r)}qr(e,t,n);break;case 1:if(!vt&&(so(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,t,a)}qr(e,t,n);break;case 21:qr(e,t,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,qr(e,t,n),vt=r):qr(e,t,n);break;default:qr(e,t,n)}}function C_(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fb),t.forEach(function(r){var i=Xb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function In(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,Tn=!1;break e;case 3:it=a.stateNode.containerInfo,Tn=!0;break e;case 4:it=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(it===null)throw Error(b(160));uS(s,o,i),it=null,Tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){je(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dS(t,e),t=t.sibling}function dS(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(In(t,e),Hn(e),r&4){try{il(3,e,e.return),kh(3,e)}catch(_){je(e,e.return,_)}try{il(5,e,e.return)}catch(_){je(e,e.return,_)}}break;case 1:In(t,e),Hn(e),r&512&&n!==null&&so(n,n.return);break;case 5:if(In(t,e),Hn(e),r&512&&n!==null&&so(n,n.return),e.flags&32){var i=e.stateNode;try{vl(i,"")}catch(_){je(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&NE(i,s),wg(a,o);var u=wg(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?$E(i,h):d==="dangerouslySetInnerHTML"?LE(i,h):d==="children"?vl(i,h):g0(i,d,h,u)}switch(a){case"input":gg(i,s);break;case"textarea":jE(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?go(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?go(i,!!s.multiple,s.defaultValue,!0):go(i,!!s.multiple,s.multiple?[]:"",!1))}i[Cl]=s}catch(_){je(e,e.return,_)}}break;case 6:if(In(t,e),Hn(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){je(e,e.return,_)}}break;case 3:if(In(t,e),Hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{El(t.containerInfo)}catch(_){je(e,e.return,_)}break;case 4:In(t,e),Hn(e);break;case 13:In(t,e),Hn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Q0=$e())),r&4&&C_(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(vt=(u=vt)||d,In(t,e),vt=u):In(t,e),Hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(h=O=d;O!==null;){switch(f=O,p=f.child,f.tag){case 0:case 11:case 14:case 15:il(4,f,f.return);break;case 1:so(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(_){je(r,n,_)}}break;case 5:so(f,f.return);break;case 22:if(f.memoizedState!==null){R_(h);continue}}p!==null?(p.return=f,O=p):R_(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=DE("display",o))}catch(_){je(e,e.return,_)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){je(e,e.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:In(t,e),Hn(e),r&4&&C_(e);break;case 21:break;default:In(t,e),Hn(e)}}function Hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cS(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vl(i,""),r.flags&=-33);var s=k_(e);Yg(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=k_(e);Kg(e,a,o);break;default:throw Error(b(161))}}catch(l){je(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bb(e,t,n){O=e,hS(e)}function hS(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||vt;a=uu;var u=vt;if(uu=o,(vt=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?P_(i):l!==null?(l.return=o,O=l):P_(i);for(;s!==null;)O=s,hS(s),s=s.sibling;O=i,uu=a,vt=u}A_(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):A_(e)}}function A_(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:vt||kh(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Sn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&d_(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}d_(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&El(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}vt||t.flags&512&&Qg(t)}catch(f){je(t,t.return,f)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function R_(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function P_(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{kh(4,t)}catch(l){je(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){je(t,i,l)}}var s=t.return;try{Qg(t)}catch(l){je(t,s,l)}break;case 5:var o=t.return;try{Qg(t)}catch(l){je(t,o,l)}}}catch(l){je(t,t.return,l)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Hb=Math.ceil,Id=zr.ReactCurrentDispatcher,q0=zr.ReactCurrentOwner,yn=zr.ReactCurrentBatchConfig,le=0,tt=null,Be=null,ct=0,Qt=0,oo=ji(0),Qe=0,jl=null,gs=0,Ch=0,G0=0,sl=null,Ut=null,Q0=0,Lo=1/0,mr=null,Sd=!1,Xg=null,hi=null,du=!1,ii=null,Td=0,ol=0,Jg=null,Du=-1,$u=0;function Mt(){return le&6?$e():Du!==-1?Du:Du=$e()}function fi(e){return e.mode&1?le&2&&ct!==0?ct&-ct:Cb.transition!==null?($u===0&&($u=KE()),$u):(e=de,e!==0||(e=window.event,e=e===void 0?16:nI(e.type)),e):1}function Rn(e,t,n,r){if(50<ol)throw ol=0,Jg=null,Error(b(185));fc(e,n,r),(!(le&2)||e!==tt)&&(e===tt&&(!(le&2)&&(Ch|=n),Qe===4&&Jr(e,ct)),Wt(e,r),n===1&&le===0&&!(t.mode&1)&&(Lo=$e()+500,Ih&&Mi()))}function Wt(e,t){var n=e.callbackNode;C2(e,t);var r=ld(e,e===tt?ct:0);if(r===0)n!==null&&V1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&V1(n),t===1)e.tag===0?kb(b_.bind(null,e)):xI(b_.bind(null,e)),Eb(function(){!(le&6)&&Mi()}),n=null;else{switch(YE(r)){case 1:n=w0;break;case 4:n=GE;break;case 16:n=ad;break;case 536870912:n=QE;break;default:n=ad}n=wS(n,fS.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fS(e,t){if(Du=-1,$u=0,le&6)throw Error(b(327));var n=e.callbackNode;if(wo()&&e.callbackNode!==n)return null;var r=ld(e,e===tt?ct:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=kd(e,r);else{t=r;var i=le;le|=2;var s=gS();(tt!==e||ct!==t)&&(mr=null,Lo=$e()+500,ss(e,t));do try{Gb();break}catch(a){pS(e,a)}while(!0);j0(),Id.current=s,le=i,Be!==null?t=0:(tt=null,ct=0,t=Qe)}if(t!==0){if(t===2&&(i=Tg(e),i!==0&&(r=i,t=Zg(e,i))),t===1)throw n=jl,ss(e,0),Jr(e,r),Wt(e,$e()),n;if(t===6)Jr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Wb(i)&&(t=kd(e,r),t===2&&(s=Tg(e),s!==0&&(r=s,t=Zg(e,s))),t===1))throw n=jl,ss(e,0),Jr(e,r),Wt(e,$e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Yi(e,Ut,mr);break;case 3:if(Jr(e,r),(r&130023424)===r&&(t=Q0+500-$e(),10<t)){if(ld(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Mt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jg(Yi.bind(null,e,Ut,mr),t);break}Yi(e,Ut,mr);break;case 4:if(Jr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-An(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hb(r/1960))-r,10<r){e.timeoutHandle=jg(Yi.bind(null,e,Ut,mr),r);break}Yi(e,Ut,mr);break;case 5:Yi(e,Ut,mr);break;default:throw Error(b(329))}}}return Wt(e,$e()),e.callbackNode===n?fS.bind(null,e):null}function Zg(e,t){var n=sl;return e.current.memoizedState.isDehydrated&&(ss(e,t).flags|=256),e=kd(e,t),e!==2&&(t=Ut,Ut=n,t!==null&&em(t)),e}function em(e){Ut===null?Ut=e:Ut.push.apply(Ut,e)}function Wb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Mn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jr(e,t){for(t&=~G0,t&=~Ch,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-An(t),r=1<<n;e[n]=-1,t&=~r}}function b_(e){if(le&6)throw Error(b(327));wo();var t=ld(e,0);if(!(t&1))return Wt(e,$e()),null;var n=kd(e,t);if(e.tag!==0&&n===2){var r=Tg(e);r!==0&&(t=r,n=Zg(e,r))}if(n===1)throw n=jl,ss(e,0),Jr(e,t),Wt(e,$e()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yi(e,Ut,mr),Wt(e,$e()),null}function K0(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(Lo=$e()+500,Ih&&Mi())}}function ms(e){ii!==null&&ii.tag===0&&!(le&6)&&wo();var t=le;le|=1;var n=yn.transition,r=de;try{if(yn.transition=null,de=1,e)return e()}finally{de=r,yn.transition=n,le=t,!(le&6)&&Mi()}}function Y0(){Qt=oo.current,Te(oo)}function ss(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xb(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(P0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fd();break;case 3:jo(),Te(Bt),Te(St),V0();break;case 5:O0(r);break;case 4:jo();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:M0(r.type._context);break;case 22:case 23:Y0()}n=n.return}if(tt=e,Be=e=pi(e.current,null),ct=Qt=t,Qe=0,jl=null,G0=Ch=gs=0,Ut=sl=null,Zi!==null){for(t=0;t<Zi.length;t++)if(n=Zi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zi=null}return e}function pS(e,t){do{var n=Be;try{if(j0(),ju.current=Ed,xd){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xd=!1}if(ps=0,Je=Ge=Re=null,rl=!1,Pl=0,q0.current=null,n===null||n.return===null){Qe=1,jl=t,Be=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=v_(o);if(p!==null){p.flags&=-257,__(p,o,a,s,t),p.mode&1&&y_(s,u,t),t=p,l=u;var m=t.updateQueue;if(m===null){var _=new Set;_.add(l),t.updateQueue=_}else m.add(l);break e}else{if(!(t&1)){y_(s,u,t),X0();break e}l=Error(b(426))}}else if(Ce&&a.mode&1){var w=v_(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),__(w,o,a,s,t),b0(Mo(l,a));break e}}s=l=Mo(l,a),Qe!==4&&(Qe=2),sl===null?sl=[s]:sl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=XI(s,l,t);u_(s,g);break e;case 1:a=l;var y=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(hi===null||!hi.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var E=JI(s,a,t);u_(s,E);break e}}s=s.return}while(s!==null)}yS(n)}catch(T){t=T,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function gS(){var e=Id.current;return Id.current=Ed,e===null?Ed:e}function X0(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||!(gs&268435455)&&!(Ch&268435455)||Jr(tt,ct)}function kd(e,t){var n=le;le|=2;var r=gS();(tt!==e||ct!==t)&&(mr=null,ss(e,t));do try{qb();break}catch(i){pS(e,i)}while(!0);if(j0(),le=n,Id.current=r,Be!==null)throw Error(b(261));return tt=null,ct=0,Qe}function qb(){for(;Be!==null;)mS(Be)}function Gb(){for(;Be!==null&&!v2();)mS(Be)}function mS(e){var t=_S(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?yS(e):Be=t,q0.current=null}function yS(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ub(n,t),n!==null){n.flags&=32767,Be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,Be=null;return}}else if(n=Vb(n,t,Qt),n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);Qe===0&&(Qe=5)}function Yi(e,t,n){var r=de,i=yn.transition;try{yn.transition=null,de=1,Qb(e,t,n,r)}finally{yn.transition=i,de=r}return null}function Qb(e,t,n,r){do wo();while(ii!==null);if(le&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(A2(e,s),e===tt&&(Be=tt=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||du||(du=!0,wS(ad,function(){return wo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yn.transition,yn.transition=null;var o=de;de=1;var a=le;le|=4,q0.current=null,zb(e,n),dS(n,e),pb(bg),cd=!!Pg,bg=Pg=null,e.current=n,Bb(n),_2(),le=a,de=o,yn.transition=s}else e.current=n;if(du&&(du=!1,ii=e,Td=i),s=e.pendingLanes,s===0&&(hi=null),E2(n.stateNode),Wt(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sd)throw Sd=!1,e=Xg,Xg=null,e;return Td&1&&e.tag!==0&&wo(),s=e.pendingLanes,s&1?e===Jg?ol++:(ol=0,Jg=e):ol=0,Mi(),null}function wo(){if(ii!==null){var e=YE(Td),t=yn.transition,n=de;try{if(yn.transition=null,de=16>e?16:e,ii===null)var r=!1;else{if(e=ii,ii=null,Td=0,le&6)throw Error(b(331));var i=le;for(le|=4,O=e.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:il(8,d,s)}var h=d.child;if(h!==null)h.return=d,O=h;else for(;O!==null;){d=O;var f=d.sibling,p=d.return;if(lS(d),d===u){O=null;break}if(f!==null){f.return=p,O=f;break}O=p}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:il(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,O=g;break e}O=s.return}}var y=e.current;for(O=y;O!==null;){o=O;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,O=v;else e:for(o=y;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kh(9,a)}}catch(T){je(a,a.return,T)}if(a===o){O=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,O=E;break e}O=a.return}}if(le=i,Mi(),er&&typeof er.onPostCommitFiberRoot=="function")try{er.onPostCommitFiberRoot(vh,e)}catch{}r=!0}return r}finally{de=n,yn.transition=t}}return!1}function N_(e,t,n){t=Mo(n,t),t=XI(e,t,1),e=di(e,t,1),t=Mt(),e!==null&&(fc(e,1,t),Wt(e,t))}function je(e,t,n){if(e.tag===3)N_(e,e,n);else for(;t!==null;){if(t.tag===3){N_(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hi===null||!hi.has(r))){e=Mo(n,e),e=JI(t,e,1),t=di(t,e,1),e=Mt(),t!==null&&(fc(t,1,e),Wt(t,e));break}}t=t.return}}function Kb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Mt(),e.pingedLanes|=e.suspendedLanes&n,tt===e&&(ct&n)===n&&(Qe===4||Qe===3&&(ct&130023424)===ct&&500>$e()-Q0?ss(e,0):G0|=n),Wt(e,t)}function vS(e,t){t===0&&(e.mode&1?(t=tu,tu<<=1,!(tu&130023424)&&(tu=4194304)):t=1);var n=Mt();e=jr(e,t),e!==null&&(fc(e,t,n),Wt(e,n))}function Yb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vS(e,n)}function Xb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),vS(e,n)}var _S;_S=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Bt.current)zt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return zt=!1,Ob(e,t,n);zt=!!(e.flags&131072)}else zt=!1,Ce&&t.flags&1048576&&EI(t,md,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lu(e,t),e=t.pendingProps;var i=Po(t,St.current);_o(t,n),i=F0(null,t,r,e,i,n);var s=z0();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ht(r)?(s=!0,pd(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,D0(t),i.updater=Sh,t.stateNode=i,i._reactInternals=t,Ug(t,r,e,n),t=Bg(null,t,r,!0,s,n)):(t.tag=0,Ce&&s&&R0(t),Rt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Zb(r),e=Sn(r,e),i){case 0:t=zg(null,t,r,e,n);break e;case 1:t=E_(null,t,r,e,n);break e;case 11:t=w_(null,t,r,e,n);break e;case 14:t=x_(null,t,r,Sn(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Sn(r,i),zg(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Sn(r,i),E_(e,t,r,i,n);case 3:e:{if(nS(t),e===null)throw Error(b(387));r=t.pendingProps,s=t.memoizedState,i=s.element,kI(e,t),_d(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Mo(Error(b(423)),t),t=I_(e,t,r,n,i);break e}else if(r!==i){i=Mo(Error(b(424)),t),t=I_(e,t,r,n,i);break e}else for(Kt=ui(t.stateNode.containerInfo.firstChild),Zt=t,Ce=!0,kn=null,n=PI(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),r===i){t=Mr(e,t,n);break e}Rt(e,t,r,n)}t=t.child}return t;case 5:return bI(t),e===null&&$g(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ng(r,i)?o=null:s!==null&&Ng(r,s)&&(t.flags|=32),tS(e,t),Rt(e,t,o,n),t.child;case 6:return e===null&&$g(t),null;case 13:return rS(e,t,n);case 4:return $0(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=No(t,null,r,n):Rt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Sn(r,i),w_(e,t,r,i,n);case 7:return Rt(e,t,t.pendingProps,n),t.child;case 8:return Rt(e,t,t.pendingProps.children,n),t.child;case 12:return Rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,me(yd,r._currentValue),r._currentValue=o,s!==null)if(Mn(s.value,o)){if(s.children===i.children&&!Bt.current){t=Mr(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ar(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Og(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Og(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_o(t,n),i=_n(i),r=r(i),t.flags|=1,Rt(e,t,r,n),t.child;case 14:return r=t.type,i=Sn(r,t.pendingProps),i=Sn(r.type,i),x_(e,t,r,i,n);case 15:return ZI(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Sn(r,i),Lu(e,t),t.tag=1,Ht(r)?(e=!0,pd(t)):e=!1,_o(t,n),AI(t,r,i),Ug(t,r,i,n),Bg(null,t,r,!0,e,n);case 19:return iS(e,t,n);case 22:return eS(e,t,n)}throw Error(b(156,t.tag))};function wS(e,t){return qE(e,t)}function Jb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(e,t,n,r){return new Jb(e,t,n,r)}function J0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zb(e){if(typeof e=="function")return J0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===y0)return 11;if(e===v0)return 14}return 2}function pi(e,t){var n=e.alternate;return n===null?(n=gn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ou(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")J0(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ys:return os(n.children,i,s,t);case m0:o=8,i|=8;break;case ug:return e=gn(12,n,t,i|2),e.elementType=ug,e.lanes=s,e;case dg:return e=gn(13,n,t,i),e.elementType=dg,e.lanes=s,e;case hg:return e=gn(19,n,t,i),e.elementType=hg,e.lanes=s,e;case RE:return Ah(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case CE:o=10;break e;case AE:o=9;break e;case y0:o=11;break e;case v0:o=14;break e;case Kr:o=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=gn(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function os(e,t,n,r){return e=gn(7,e,r,t),e.lanes=n,e}function Ah(e,t,n,r){return e=gn(22,e,r,t),e.elementType=RE,e.lanes=n,e.stateNode={isHidden:!1},e}function Ep(e,t,n){return e=gn(6,e,null,t),e.lanes=n,e}function Ip(e,t,n){return t=gn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function eN(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rp(0),this.expirationTimes=rp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Z0(e,t,n,r,i,s,o,a,l){return e=new eN(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=gn(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},D0(s),e}function tN(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ks,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xS(e){if(!e)return Si;e=e._reactInternals;e:{if(Ns(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Ht(n))return wI(e,n,t)}return t}function ES(e,t,n,r,i,s,o,a,l){return e=Z0(n,r,!0,e,i,s,o,a,l),e.context=xS(null),n=e.current,r=Mt(),i=fi(n),s=Ar(r,i),s.callback=t??null,di(n,s,i),e.current.lanes=i,fc(e,i,r),Wt(e,r),e}function Rh(e,t,n,r){var i=t.current,s=Mt(),o=fi(i);return n=xS(n),t.context===null?t.context=n:t.pendingContext=n,t=Ar(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=di(i,t,o),e!==null&&(Rn(e,i,o,s),Nu(e,i,o)),o}function Cd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function j_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ey(e,t){j_(e,t),(e=e.alternate)&&j_(e,t)}function nN(){return null}var IS=typeof reportError=="function"?reportError:function(e){console.error(e)};function ty(e){this._internalRoot=e}Ph.prototype.render=ty.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Rh(e,t,null,null)};Ph.prototype.unmount=ty.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ms(function(){Rh(null,e,null,null)}),t[Nr]=null}};function Ph(e){this._internalRoot=e}Ph.prototype.unstable_scheduleHydration=function(e){if(e){var t=ZE();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xr.length&&t!==0&&t<Xr[n].priority;n++);Xr.splice(n,0,e),n===0&&tI(e)}};function ny(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function M_(){}function rN(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Cd(o);s.call(u)}}var o=ES(t,r,e,0,null,!1,!1,"",M_);return e._reactRootContainer=o,e[Nr]=o.current,Tl(e.nodeType===8?e.parentNode:e),ms(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Cd(l);a.call(u)}}var l=Z0(e,0,!1,null,null,!1,!1,"",M_);return e._reactRootContainer=l,e[Nr]=l.current,Tl(e.nodeType===8?e.parentNode:e),ms(function(){Rh(t,l,n,r)}),l}function Nh(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Cd(o);a.call(l)}}Rh(t,o,e,i)}else o=rN(n,t,e,i,r);return Cd(o)}XE=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ua(t.pendingLanes);n!==0&&(x0(t,n|1),Wt(t,$e()),!(le&6)&&(Lo=$e()+500,Mi()))}break;case 13:ms(function(){var r=jr(e,1);if(r!==null){var i=Mt();Rn(r,e,1,i)}}),ey(e,1)}};E0=function(e){if(e.tag===13){var t=jr(e,134217728);if(t!==null){var n=Mt();Rn(t,e,134217728,n)}ey(e,134217728)}};JE=function(e){if(e.tag===13){var t=fi(e),n=jr(e,t);if(n!==null){var r=Mt();Rn(n,e,t,r)}ey(e,t)}};ZE=function(){return de};eI=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};Eg=function(e,t,n){switch(t){case"input":if(gg(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Eh(r);if(!i)throw Error(b(90));bE(r),gg(r,i)}}}break;case"textarea":jE(e,n);break;case"select":t=n.value,t!=null&&go(e,!!n.multiple,t,!1)}};UE=K0;FE=ms;var iN={usingClientEntryPoint:!1,Events:[gc,eo,Eh,OE,VE,K0]},ja={findFiberByHostInstance:Ji,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sN={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=HE(e),e===null?null:e.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||nN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{vh=hu.inject(sN),er=hu}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iN;cn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ny(t))throw Error(b(200));return tN(e,t,null,n)};cn.createRoot=function(e,t){if(!ny(e))throw Error(b(299));var n=!1,r="",i=IS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Z0(e,1,!1,null,null,n,!1,r,i),e[Nr]=t.current,Tl(e.nodeType===8?e.parentNode:e),new ty(t)};cn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=HE(t),e=e===null?null:e.stateNode,e};cn.flushSync=function(e){return ms(e)};cn.hydrate=function(e,t,n){if(!bh(t))throw Error(b(200));return Nh(null,e,t,!0,n)};cn.hydrateRoot=function(e,t,n){if(!ny(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=IS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ES(t,null,e,1,n??null,i,!1,s,o),e[Nr]=t.current,Tl(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ph(t)};cn.render=function(e,t,n){if(!bh(t))throw Error(b(200));return Nh(null,e,t,!1,n)};cn.unmountComponentAtNode=function(e){if(!bh(e))throw Error(b(40));return e._reactRootContainer?(ms(function(){Nh(null,null,e,!1,function(){e._reactRootContainer=null,e[Nr]=null})}),!0):!1};cn.unstable_batchedUpdates=K0;cn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bh(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Nh(e,t,n,!1,r)};cn.version="18.2.0-next-9e3b772b8-20220608";function SS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SS)}catch(e){console.error(e)}}SS(),EE.exports=cn;var oN=EE.exports,L_=oN;lg.createRoot=L_.createRoot,lg.hydrateRoot=L_.hydrateRoot;var et=function(){return et=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},et.apply(this,arguments)};function ry(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ml(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var we="-ms-",al="-moz-",ue="-webkit-",TS="comm",jh="rule",iy="decl",aN="@import",kS="@keyframes",lN="@layer",cN=Math.abs,sy=String.fromCharCode,tm=Object.assign;function uN(e,t){return Ze(e,0)^45?(((t<<2^Ze(e,0))<<2^Ze(e,1))<<2^Ze(e,2))<<2^Ze(e,3):0}function CS(e){return e.trim()}function yr(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function Vu(e,t){return e.indexOf(t)}function Ze(e,t){return e.charCodeAt(t)|0}function Do(e,t,n){return e.slice(t,n)}function Gn(e){return e.length}function AS(e){return e.length}function za(e,t){return t.push(e),e}function dN(e,t){return e.map(t).join("")}function D_(e,t){return e.filter(function(n){return!yr(n,t)})}var Mh=1,$o=1,RS=0,xn=0,ze=0,ca="";function Lh(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Mh,column:$o,length:o,return:"",siblings:a}}function Qr(e,t){return tm(Lh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function zs(e){for(;e.root;)e=Qr(e.root,{children:[e]});za(e,e.siblings)}function hN(){return ze}function fN(){return ze=xn>0?Ze(ca,--xn):0,$o--,ze===10&&($o=1,Mh--),ze}function Pn(){return ze=xn<RS?Ze(ca,xn++):0,$o++,ze===10&&($o=1,Mh++),ze}function as(){return Ze(ca,xn)}function Uu(){return xn}function Dh(e,t){return Do(ca,e,t)}function nm(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pN(e){return Mh=$o=1,RS=Gn(ca=e),xn=0,[]}function gN(e){return ca="",e}function Sp(e){return CS(Dh(xn-1,rm(e===91?e+2:e===40?e+1:e)))}function mN(e){for(;(ze=as())&&ze<33;)Pn();return nm(e)>2||nm(ze)>3?"":" "}function yN(e,t){for(;--t&&Pn()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Dh(e,Uu()+(t<6&&as()==32&&Pn()==32))}function rm(e){for(;Pn();)switch(ze){case e:return xn;case 34:case 39:e!==34&&e!==39&&rm(ze);break;case 40:e===41&&rm(e);break;case 92:Pn();break}return xn}function vN(e,t){for(;Pn()&&e+ze!==57;)if(e+ze===84&&as()===47)break;return"/*"+Dh(t,xn-1)+"*"+sy(e===47?e:Pn())}function _N(e){for(;!nm(as());)Pn();return Dh(e,xn)}function wN(e){return gN(Fu("",null,null,null,[""],e=pN(e),0,[0],e))}function Fu(e,t,n,r,i,s,o,a,l){for(var u=0,d=0,h=o,f=0,p=0,m=0,_=1,w=1,g=1,y=0,v="",E=i,T=s,k=r,I=v;w;)switch(m=y,y=Pn()){case 40:if(m!=108&&Ze(I,h-1)==58){Vu(I+=ee(Sp(y),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:I+=Sp(y);break;case 9:case 10:case 13:case 32:I+=mN(m);break;case 92:I+=yN(Uu()-1,7);continue;case 47:switch(as()){case 42:case 47:za(xN(vN(Pn(),Uu()),t,n,l),l);break;default:I+="/"}break;case 123*_:a[u++]=Gn(I)*g;case 125*_:case 59:case 0:switch(y){case 0:case 125:w=0;case 59+d:g==-1&&(I=ee(I,/\f/g,"")),p>0&&Gn(I)-h&&za(p>32?O_(I+";",r,n,h-1,l):O_(ee(I," ","")+";",r,n,h-2,l),l);break;case 59:I+=";";default:if(za(k=$_(I,t,n,u,d,i,a,v,E=[],T=[],h,s),s),y===123)if(d===0)Fu(I,t,k,k,E,s,h,a,T);else switch(f===99&&Ze(I,3)===110?100:f){case 100:case 108:case 109:case 115:Fu(e,k,k,r&&za($_(e,k,k,0,0,i,a,v,i,E=[],h,T),T),i,T,h,a,r?E:T);break;default:Fu(I,k,k,k,[""],T,0,a,T)}}u=d=p=0,_=g=1,v=I="",h=o;break;case 58:h=1+Gn(I),p=m;default:if(_<1){if(y==123)--_;else if(y==125&&_++==0&&fN()==125)continue}switch(I+=sy(y),y*_){case 38:g=d>0?1:(I+="\f",-1);break;case 44:a[u++]=(Gn(I)-1)*g,g=1;break;case 64:as()===45&&(I+=Sp(Pn())),f=as(),d=h=Gn(v=I+=_N(Uu())),y++;break;case 45:m===45&&Gn(I)==2&&(_=0)}}return s}function $_(e,t,n,r,i,s,o,a,l,u,d,h){for(var f=i-1,p=i===0?s:[""],m=AS(p),_=0,w=0,g=0;_<r;++_)for(var y=0,v=Do(e,f+1,f=cN(w=o[_])),E=e;y<m;++y)(E=CS(w>0?p[y]+" "+v:ee(v,/&\f/g,p[y])))&&(l[g++]=E);return Lh(e,t,n,i===0?jh:a,l,u,d,h)}function xN(e,t,n,r){return Lh(e,t,n,TS,sy(hN()),Do(e,2,-2),0,r)}function O_(e,t,n,r,i){return Lh(e,t,n,iy,Do(e,0,r),Do(e,r+1,-1),r,i)}function PS(e,t,n){switch(uN(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 4789:return al+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+al+e+we+e+e;case 5936:switch(Ze(e,t+11)){case 114:return ue+e+we+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+we+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+we+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+we+e+e;case 6165:return ue+e+we+"flex-"+e+e;case 5187:return ue+e+ee(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+we+"flex-$1$2")+e;case 5443:return ue+e+we+"flex-item-"+ee(e,/flex-|-self/g,"")+(yr(e,/flex-|baseline/)?"":we+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return ue+e+we+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+we+ee(e,"shrink","negative")+e;case 5292:return ue+e+we+ee(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ee(e,"-grow","")+ue+e+we+ee(e,"grow","positive")+e;case 4554:return ue+ee(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4200:if(!yr(e,/flex-|baseline/))return we+"grid-column-align"+Do(e,t)+e;break;case 2592:case 3360:return we+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,yr(r.props,/grid-\w+-end/)})?~Vu(e+(n=n[t].value),"span")?e:we+ee(e,"-start","")+e+we+"grid-row-span:"+(~Vu(n,"span")?yr(n,/\d+/):+yr(n,/\d+/)-+yr(e,/\d+/))+";":we+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return yr(r.props,/grid-\w+-start/)})?e:we+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gn(e)-1-t>6)switch(Ze(e,t+1)){case 109:if(Ze(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+al+(Ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Vu(e,"stretch")?PS(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return we+i+":"+s+u+(o?we+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(Ze(e,t+6)===121)return ee(e,":",":"+ue)+e;break;case 6444:switch(Ze(e,Ze(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Ze(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+we+"$2box$3")+e;case 100:return ee(e,":",":"+we)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function Ad(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function EN(e,t,n,r){switch(e.type){case lN:if(e.children.length)break;case aN:case iy:return e.return=e.return||e.value;case TS:return"";case kS:return e.return=e.value+"{"+Ad(e.children,r)+"}";case jh:if(!Gn(e.value=e.props.join(",")))return""}return Gn(n=Ad(e.children,r))?e.return=e.value+"{"+n+"}":""}function IN(e){var t=AS(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function SN(e){return function(t){t.root||(t=t.return)&&e(t)}}function TN(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case iy:e.return=PS(e.value,e.length,n);return;case kS:return Ad([Qr(e,{value:ee(e.value,"@","@"+ue)})],r);case jh:if(e.length)return dN(n=e.props,function(i){switch(yr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zs(Qr(e,{props:[ee(i,/:(read-\w+)/,":"+al+"$1")]})),zs(Qr(e,{props:[i]})),tm(e,{props:D_(n,r)});break;case"::placeholder":zs(Qr(e,{props:[ee(i,/:(plac\w+)/,":"+ue+"input-$1")]})),zs(Qr(e,{props:[ee(i,/:(plac\w+)/,":"+al+"$1")]})),zs(Qr(e,{props:[ee(i,/:(plac\w+)/,we+"input-$1")]})),zs(Qr(e,{props:[i]})),tm(e,{props:D_(n,r)});break}return""})}}var kN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gt={},Oo=typeof process<"u"&&Gt!==void 0&&(Gt.REACT_APP_SC_ATTR||Gt.SC_ATTR)||"data-styled",oy=typeof window<"u"&&"HTMLElement"in window,CN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==""?Gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.SC_DISABLE_SPEEDY!==void 0&&Gt.SC_DISABLE_SPEEDY!==""&&Gt.SC_DISABLE_SPEEDY!=="false"&&Gt.SC_DISABLE_SPEEDY),AN={},$h=Object.freeze([]),Vo=Object.freeze({});function bS(e,t,n){return n===void 0&&(n=Vo),e.theme!==n.theme&&e.theme||t||n.theme}var NS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),RN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,PN=/(^-|-$)/g;function V_(e){return e.replace(RN,"-").replace(PN,"")}var bN=/(a)(d)/gi,U_=function(e){return String.fromCharCode(e+(e>25?39:97))};function im(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=U_(t%52)+n;return(U_(t%52)+n).replace(bN,"$1-$2")}var Tp,ao=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},jS=function(e){return ao(5381,e)};function MS(e){return im(jS(e)>>>0)}function NN(e){return e.displayName||e.name||"Component"}function kp(e){return typeof e=="string"&&!0}var LS=typeof Symbol=="function"&&Symbol.for,DS=LS?Symbol.for("react.memo"):60115,jN=LS?Symbol.for("react.forward_ref"):60112,MN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},LN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$S={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},DN=((Tp={})[jN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tp[DS]=$S,Tp);function F_(e){return("type"in(t=e)&&t.type.$$typeof)===DS?$S:"$$typeof"in e?DN[e.$$typeof]:MN;var t}var $N=Object.defineProperty,ON=Object.getOwnPropertyNames,z_=Object.getOwnPropertySymbols,VN=Object.getOwnPropertyDescriptor,UN=Object.getPrototypeOf,B_=Object.prototype;function OS(e,t,n){if(typeof t!="string"){if(B_){var r=UN(t);r&&r!==B_&&OS(e,r,n)}var i=ON(t);z_&&(i=i.concat(z_(t)));for(var s=F_(e),o=F_(t),a=0;a<i.length;++a){var l=i[a];if(!(l in LN||n&&n[l]||o&&l in o||s&&l in s)){var u=VN(t,l);try{$N(e,l,u)}catch{}}}}return e}function ys(e){return typeof e=="function"}function ay(e){return typeof e=="object"&&"styledComponentId"in e}function ts(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function sm(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ll(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function om(e,t,n){if(n===void 0&&(n=!1),!n&&!Ll(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=om(e[r],t[r]);else if(Ll(t))for(var r in t)e[r]=om(e[r],t[r]);return e}function ly(e,t){Object.defineProperty(e,"toString",{value:t})}function Ti(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var FN=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Ti(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),zu=new Map,Rd=new Map,Bu=1,fu=function(e){if(zu.has(e))return zu.get(e);for(;Rd.has(Bu);)Bu++;var t=Bu++;return zu.set(e,t),Rd.set(t,e),t},zN=function(e,t){Bu=t+1,zu.set(e,t),Rd.set(t,e)},BN="style[".concat(Oo,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),HN=new RegExp("^".concat(Oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),WN=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},qN=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(HN);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(zN(d,u),WN(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function GN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var VS=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Oo,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Oo,"active"),r.setAttribute("data-styled-version","6.1.1");var o=GN();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},QN=function(){function e(t){this.element=VS(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ti(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),KN=function(){function e(t){this.element=VS(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),YN=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),H_=oy,XN={isServer:!oy,useCSSOMInjection:!CN},Pd=function(){function e(t,n,r){t===void 0&&(t=Vo),n===void 0&&(n={});var i=this;this.options=et(et({},XN),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&oy&&H_&&(H_=!1,function(s){for(var o=document.querySelectorAll(BN),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Oo)!=="active"&&(qN(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),ly(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var f=function(g){return Rd.get(g)}(h);if(f===void 0)return"continue";var p=s.names.get(f),m=o.getGroup(h);if(p===void 0||m.length===0)return"continue";var _="".concat(Oo,".g").concat(h,'[id="').concat(f,'"]'),w="";p!==void 0&&p.forEach(function(g){g.length>0&&(w+="".concat(g,","))}),l+="".concat(m).concat(_,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return l}(i)})}return e.registerId=function(t){return fu(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(et(et({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new YN(i):r?new QN(i):new KN(i)}(this.options),new FN(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(fu(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(fu(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(fu(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),JN=/&/g,ZN=/^\s*\/\/.*$/gm;function US(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=US(n.children,t)),n})}function ej(e){var t,n,r,i=e===void 0?Vo:e,s=i.options,o=s===void 0?Vo:s,a=i.plugins,l=a===void 0?$h:a,u=function(f,p,m){return m===n||m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===jh&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(JN,n).replace(r,u))}),o.prefix&&d.push(TN),d.push(EN);var h=function(f,p,m,_){p===void 0&&(p=""),m===void 0&&(m=""),_===void 0&&(_="&"),t=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(ZN,""),g=wN(m||p?"".concat(m," ").concat(p," { ").concat(w," }"):w);o.namespace&&(g=US(g,o.namespace));var y=[];return Ad(g,IN(d.concat(SN(function(v){return y.push(v)})))),y};return h.hash=l.length?l.reduce(function(f,p){return p.name||Ti(15),ao(f,p.name)},5381).toString():"",h}var tj=new Pd,am=ej(),FS=ge.createContext({shouldForwardProp:void 0,styleSheet:tj,stylis:am});FS.Consumer;ge.createContext(void 0);function lm(){return S.useContext(FS)}var nj=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=am);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ly(this,function(){throw Ti(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=am),this.name+t.hash},e}(),rj=function(e){return e>="A"&&e<="Z"};function W_(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;rj(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var zS=function(e){return e==null||e===!1||e===""},BS=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!zS(s)&&(Array.isArray(s)&&s.isCss||ys(s)?r.push("".concat(W_(i),":"),s,";"):Ll(s)?r.push.apply(r,Ml(Ml(["".concat(i," {")],BS(s),!1),["}"],!1)):r.push("".concat(W_(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in kN||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function gi(e,t,n,r){if(zS(e))return[];if(ay(e))return[".".concat(e.styledComponentId)];if(ys(e)){if(!ys(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return gi(i,t,n,r)}var s;return e instanceof nj?n?(e.inject(n,r),[e.getName(r)]):[e]:Ll(e)?BS(e):Array.isArray(e)?Array.prototype.concat.apply($h,e.map(function(o){return gi(o,t,n,r)})):[e.toString()]}function HS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ys(n)&&!ay(n))return!1}return!0}var ij=jS("6.1.1"),sj=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&HS(t),this.componentId=n,this.baseHash=ao(ij,n),this.baseStyle=r,Pd.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ts(i,this.staticRulesId);else{var s=sm(gi(this.rules,t,n,r)),o=im(ao(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ts(i,o),this.staticRulesId=o}else{for(var l=ao(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var f=sm(gi(h,t,n,r));l=ao(l,f+d),u+=f}}if(u){var p=im(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=ts(i,p)}}return i},e}(),Uo=ge.createContext(void 0);Uo.Consumer;function Oh(){var e=S.useContext(Uo);if(!e)throw Ti(18);return e}function oj(e){var t=ge.useContext(Uo),n=S.useMemo(function(){return function(r,i){if(!r)throw Ti(14);if(ys(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Ti(8);return i?et(et({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?ge.createElement(Uo.Provider,{value:n},e.children):null}var Cp={};function aj(e,t,n){var r=ay(e),i=e,s=!kp(e),o=t.attrs,a=o===void 0?$h:o,l=t.componentId,u=l===void 0?function(E,T){var k=typeof E!="string"?"sc":V_(E);Cp[k]=(Cp[k]||0)+1;var I="".concat(k,"-").concat(MS("6.1.1"+k+Cp[k]));return T?"".concat(T,"-").concat(I):I}(t.displayName,t.parentComponentId):l,d=t.displayName,h=d===void 0?function(E){return kp(E)?"styled.".concat(E):"Styled(".concat(NN(E),")")}(e):d,f=t.displayName&&t.componentId?"".concat(V_(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(E,T){return _(E,T)&&w(E,T)}}else m=_}var g=new sj(n,f,r?i.componentStyle:void 0);function y(E,T){return function(k,I,C){var $=k.attrs,z=k.componentStyle,ve=k.defaultProps,Y=k.foldedComponentIds,Ve=k.styledComponentId,Hr=k.target,Hi=ge.useContext(Uo),Wi=lm(),zn=k.shouldForwardProp||Wi.shouldForwardProp,j=function(Ct,En,At){for(var Bn,qi=et(et({},En),{className:void 0,theme:At}),Xf=0;Xf<Ct.length;Xf+=1){var Kc=ys(Bn=Ct[Xf])?Bn(qi):Bn;for(var Wr in Kc)qi[Wr]=Wr==="className"?ts(qi[Wr],Kc[Wr]):Wr==="style"?et(et({},qi[Wr]),Kc[Wr]):Kc[Wr]}return En.className&&(qi.className=ts(qi.className,En.className)),qi}($,I,bS(I,Hi,ve)||Vo),B=j.as||Hr,q={};for(var ae in j)j[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"||(ae==="forwardedAs"?q.as=j.forwardedAs:zn&&!zn(ae,B)||(q[ae]=j[ae]));var ke=function(Ct,En){var At=lm(),Bn=Ct.generateAndInjectStyles(En,At.styleSheet,At.stylis);return Bn}(z,j),ft=ts(Y,Ve);return ke&&(ft+=" "+ke),j.className&&(ft+=" "+j.className),q[kp(B)&&!NS.has(B)?"class":"className"]=ft,q.ref=C,S.createElement(B,q)}(v,E,T)}y.displayName=h;var v=ge.forwardRef(y);return v.attrs=p,v.componentStyle=g,v.displayName=h,v.shouldForwardProp=m,v.foldedComponentIds=r?ts(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=f,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(T){for(var k=[],I=1;I<arguments.length;I++)k[I-1]=arguments[I];for(var C=0,$=k;C<$.length;C++)om(T,$[C],!0);return T}({},i.defaultProps,E):E}}),ly(v,function(){return".".concat(v.styledComponentId)}),s&&OS(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function q_(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var G_=function(e){return Object.assign(e,{isCss:!0})};function WS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ys(e)||Ll(e)){var r=e;return G_(gi(q_($h,Ml([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?gi(i):G_(gi(q_(i,t)))}function cm(e,t,n){if(n===void 0&&(n=Vo),!t)throw Ti(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,WS.apply(void 0,Ml([i],s,!1)))};return r.attrs=function(i){return cm(e,t,et(et({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return cm(e,t,et(et({},n),i))},r}var qS=function(e){return cm(aj,e)},x=qS;NS.forEach(function(e){x[e]=qS(e)});var lj=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=HS(t),Pd.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(sm(gi(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Pd.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function cj(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=WS.apply(void 0,Ml([e],t,!1)),i="sc-global-".concat(MS(JSON.stringify(r))),s=new lj(r,i),o=function(l){var u=lm(),d=ge.useContext(Uo),h=ge.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,d,u.stylis),ge.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,d,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,d,u.stylis]),null};function a(l,u,d,h,f){if(s.isStatic)s.renderStyles(l,AN,d,f);else{var p=et(et({},u),{theme:bS(u,h,o.defaultProps)});s.renderStyles(l,p,d,f)}}return ge.memo(o)}const uj=x.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  font-weight: 200;
`,dj=x.div`
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
`,hj=x.h3`
  font-weight: 300;
  color: #fff;
  font-size: 1.5rem;
`,fj=x.span`
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
`;var GS={exports:{}},pj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",gj=pj,mj=gj;function QS(){}function KS(){}KS.resetWarningCache=QS;var yj=function(){function e(r,i,s,o,a,l){if(l!==mj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:KS,resetWarningCache:QS};return n.PropTypes=n,n};GS.exports=yj();var vj=GS.exports;const Gi=l0(vj);var _j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},wj=Object.defineProperty,xj=Object.defineProperties,Ej=Object.getOwnPropertyDescriptors,bd=Object.getOwnPropertySymbols,YS=Object.prototype.hasOwnProperty,XS=Object.prototype.propertyIsEnumerable,Q_=(e,t,n)=>t in e?wj(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,K_=(e,t)=>{for(var n in t||(t={}))YS.call(t,n)&&Q_(e,n,t[n]);if(bd)for(var n of bd(t))XS.call(t,n)&&Q_(e,n,t[n]);return e},Ij=(e,t)=>xj(e,Ej(t)),Sj=(e,t)=>{var n={};for(var r in e)YS.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&bd)for(var r of bd(e))t.indexOf(r)<0&&XS.call(e,r)&&(n[r]=e[r]);return n},D=(e,t,n)=>{const r=S.forwardRef((i,s)=>{var o=i,{color:a="currentColor",size:l=24,stroke:u=2,children:d}=o,h=Sj(o,["color","size","stroke","children"]);return S.createElement("svg",K_(Ij(K_({ref:s},_j),{width:l,height:l,stroke:a,strokeWidth:u,className:`tabler-icon tabler-icon-${e}`}),h),[...n.map(([f,p])=>S.createElement(f,p)),...d||[]])});return r.propTypes={color:Gi.string,size:Gi.oneOfType([Gi.string,Gi.number]),stroke:Gi.oneOfType([Gi.string,Gi.number])},r.displayName=`${t}`,r},Tj=D("arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]]),JS=D("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]),kj=D("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]]),Cj=D("arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]]),ZS=D("arrows-shuffle","IconArrowsShuffle",[["path",{d:"M18 4l3 3l-3 3",key:"svg-0"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-1"}],["path",{d:"M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5",key:"svg-2"}],["path",{d:"M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3",key:"svg-3"}]]),Aj=D("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]]),Rj=D("brand-safari","IconBrandSafari",[["path",{d:"M8 16l2 -6l6 -2l-2 6l-6 2",key:"svg-0"}],["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-1"}]]),Pj=D("bug","IconBug",[["path",{d:"M9 9v-1a3 3 0 0 1 6 0v1",key:"svg-0"}],["path",{d:"M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3",key:"svg-1"}],["path",{d:"M3 13l4 0",key:"svg-2"}],["path",{d:"M17 13l4 0",key:"svg-3"}],["path",{d:"M12 20l0 -6",key:"svg-4"}],["path",{d:"M4 19l3.35 -2",key:"svg-5"}],["path",{d:"M20 19l-3.35 -2",key:"svg-6"}],["path",{d:"M4 7l3.75 2.4",key:"svg-7"}],["path",{d:"M20 7l-3.75 2.4",key:"svg-8"}]]),bj=D("camera","IconCamera",[["path",{d:"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2",key:"svg-0"}],["path",{d:"M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]),Nj=D("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),jj=D("checks","IconChecks",[["path",{d:"M7 12l5 5l10 -10",key:"svg-0"}],["path",{d:"M2 12l5 5m5 -5l5 -5",key:"svg-1"}]]),Mj=D("circle-check-filled","IconCircleCheckFilled",[["path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),Lj=D("circle-plus","IconCirclePlus",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M9 12h6",key:"svg-1"}],["path",{d:"M12 9v6",key:"svg-2"}]]),Dj=D("circle-x-filled","IconCircleXFilled",[["path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),$j=D("circle","IconCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}]]),Oj=D("clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]]),Vj=D("copy","IconCopy",[["path",{d:"M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",key:"svg-1"}]]),Uj=D("disc","IconDisc",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M7 12a5 5 0 0 1 5 -5",key:"svg-2"}],["path",{d:"M12 17a5 5 0 0 0 5 -5",key:"svg-3"}]]),Vh=D("discount-check-filled","IconDiscountCheckFilled",[["path",{d:"M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),Fj=D("dots-vertical","IconDotsVertical",[["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),cy=D("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),eT=D("edit-circle","IconEditCircle",[["path",{d:"M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z",key:"svg-0"}],["path",{d:"M16 5l3 3",key:"svg-1"}],["path",{d:"M9 7.07a7 7 0 0 0 1 13.93a7 7 0 0 0 6.929 -6",key:"svg-2"}]]),zj=D("exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]]),Bj=D("eye-closed","IconEyeClosed",[["path",{d:"M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4",key:"svg-0"}],["path",{d:"M3 15l2.5 -3.8",key:"svg-1"}],["path",{d:"M21 14.976l-2.492 -3.776",key:"svg-2"}],["path",{d:"M9 17l.5 -4",key:"svg-3"}],["path",{d:"M15 17l-.5 -4",key:"svg-4"}]]),Hj=D("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]]),Wj=D("files","IconFiles",[["path",{d:"M15 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2",key:"svg-2"}]]),Nd=D("headphones","IconHeadphones",[["path",{d:"M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z",key:"svg-1"}],["path",{d:"M4 15v-3a8 8 0 0 1 16 0v3",key:"svg-2"}]]),qj=D("heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]),Gj=D("heart-filled","IconHeartFilled",[["path",{d:"M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),uy=D("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]]),dy=D("history","IconHistory",[["path",{d:"M12 8l0 4l2 2",key:"svg-0"}],["path",{d:"M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5",key:"svg-1"}]]),hy=D("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]),Qj=D("link","IconLink",[["path",{d:"M9 15l6 -6",key:"svg-0"}],["path",{d:"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464",key:"svg-1"}],["path",{d:"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463",key:"svg-2"}]]),Kj=D("loader-2","IconLoader2",[["path",{d:"M12 3a9 9 0 1 0 9 9",key:"svg-0"}]]),tT=D("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]]),Yj=D("logout","IconLogout",[["path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M9 12h12l-3 -3",key:"svg-1"}],["path",{d:"M18 15l3 -3",key:"svg-2"}]]),Xj=D("maximize","IconMaximize",[["path",{d:"M4 8v-2a2 2 0 0 1 2 -2h2",key:"svg-0"}],["path",{d:"M4 16v2a2 2 0 0 0 2 2h2",key:"svg-1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"svg-2"}],["path",{d:"M16 20h2a2 2 0 0 0 2 -2v-2",key:"svg-3"}]]),Jj=D("message-2","IconMessage2",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z",key:"svg-2"}]]),Zj=D("message-plus","IconMessagePlus",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5",key:"svg-2"}],["path",{d:"M16 19h6",key:"svg-3"}],["path",{d:"M19 16v6",key:"svg-4"}]]),Y_=D("message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]]),nT=D("microphone-2","IconMicrophone2",[["path",{d:"M15 12.9a5 5 0 1 0 -3.902 -3.9",key:"svg-0"}],["path",{d:"M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z",key:"svg-1"}]]),e4=D("microphone","IconMicrophone",[["path",{d:"M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z",key:"svg-0"}],["path",{d:"M5 10a7 7 0 0 0 14 0",key:"svg-1"}],["path",{d:"M8 21l8 0",key:"svg-2"}],["path",{d:"M12 17l0 4",key:"svg-3"}]]),t4=D("moon","IconMoon",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}]]),n4=D("music-plus","IconMusicPlus",[["path",{d:"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M9 17v-13h10v8",key:"svg-1"}],["path",{d:"M9 8h10",key:"svg-2"}],["path",{d:"M16 19h6",key:"svg-3"}],["path",{d:"M19 16v6",key:"svg-4"}]]),ls=D("music","IconMusic",[["path",{d:"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}],["path",{d:"M9 17v-13h10v13",key:"svg-2"}],["path",{d:"M9 8h10",key:"svg-3"}]]),r4=D("password","IconPassword",[["path",{d:"M12 10v4",key:"svg-0"}],["path",{d:"M10 13l4 -2",key:"svg-1"}],["path",{d:"M10 11l4 2",key:"svg-2"}],["path",{d:"M5 10v4",key:"svg-3"}],["path",{d:"M3 13l4 -2",key:"svg-4"}],["path",{d:"M3 11l4 2",key:"svg-5"}],["path",{d:"M19 10v4",key:"svg-6"}],["path",{d:"M17 13l4 -2",key:"svg-7"}],["path",{d:"M17 11l4 2",key:"svg-8"}]]),i4=D("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]]),rT=D("player-pause-filled","IconPlayerPauseFilled",[["path",{d:"M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}],["path",{d:"M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",fill:"currentColor",key:"svg-1",strokeWidth:"0"}]]),fy=D("player-play-filled","IconPlayerPlayFilled",[["path",{d:"M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),X_=D("player-track-next-filled","IconPlayerTrackNextFilled",[["path",{d:"M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}],["path",{d:"M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z",fill:"currentColor",key:"svg-1",strokeWidth:"0"}]]),J_=D("player-track-prev-filled","IconPlayerTrackPrevFilled",[["path",{d:"M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}],["path",{d:"M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z",fill:"currentColor",key:"svg-1",strokeWidth:"0"}]]),s4=D("playlist-add","IconPlaylistAdd",[["path",{d:"M19 8h-14",key:"svg-0"}],["path",{d:"M5 12h9",key:"svg-1"}],["path",{d:"M11 16h-6",key:"svg-2"}],["path",{d:"M15 16h6",key:"svg-3"}],["path",{d:"M18 13v6",key:"svg-4"}]]),iT=D("playlist","IconPlaylist",[["path",{d:"M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M17 17v-13h4",key:"svg-1"}],["path",{d:"M13 5h-10",key:"svg-2"}],["path",{d:"M3 9l10 0",key:"svg-3"}],["path",{d:"M9 13h-6",key:"svg-4"}]]),o4=D("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]),sT=D("quote","IconQuote",[["path",{d:"M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5",key:"svg-0"}],["path",{d:"M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5",key:"svg-1"}]]),a4=D("repeat-once","IconRepeatOnce",[["path",{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3",key:"svg-0"}],["path",{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3",key:"svg-1"}],["path",{d:"M11 11l1 -1v4",key:"svg-2"}]]),l4=D("repeat","IconRepeat",[["path",{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3",key:"svg-0"}],["path",{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3",key:"svg-1"}]]),ua=D("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]),c4=D("settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]),yc=D("share-3","IconShare3",[["path",{d:"M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z",key:"svg-0"}]]),oT=D("square-rounded-plus","IconSquareRoundedPlus",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",key:"svg-0"}],["path",{d:"M15 12h-6",key:"svg-1"}],["path",{d:"M12 9v6",key:"svg-2"}]]),aT=D("sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]]),u4=D("trending-up","IconTrendingUp",[["path",{d:"M3 17l6 -6l4 4l8 -8",key:"svg-0"}],["path",{d:"M14 7l7 0l0 7",key:"svg-1"}]]),lT=D("user-plus","IconUserPlus",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M16 19h6",key:"svg-1"}],["path",{d:"M19 16v6",key:"svg-2"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4",key:"svg-3"}]]),cT=D("user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]),d4=D("users","IconUsers",[["path",{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"svg-2"}],["path",{d:"M21 21v-2a4 4 0 0 0 -3 -3.85",key:"svg-3"}]]),py=D("vinyl","IconVinyl",[["path",{d:"M16 3.937a9 9 0 1 0 5 8.063",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M20 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M20 4l-3.5 10l-2.5 2",key:"svg-3"}]]),h4=D("volume","IconVolume",[["path",{d:"M15 8a5 5 0 0 1 0 8",key:"svg-0"}],["path",{d:"M17.7 5a9 9 0 0 1 0 14",key:"svg-1"}],["path",{d:"M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",key:"svg-2"}]]),uT=D("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);class dT extends ge.Component{constructor(n){super(n);De(this,"state",{error:null});this.state={error:null}}static getDerivedStateFromError(n){return{error:n}}render(){return this.state.error?c.jsxs(uj,{children:[c.jsx(dj,{children:c.jsx(Pj,{})}),c.jsx(hj,{children:"Something went wrong."}),c.jsx(fj,{children:this.state.error.message})]}):this.props.children}}const f4=e=>e!=null;function gy(e,t){for(const n in e)t(e[n],n)}function Yt(e,t){e.forEach(t)}function We(e,t,n){if(!e)throw Error(`${n?n+": ":""}${t}`)}function Lr({node:e=[],from:t,source:n,parent:r=t||n,to:i,target:s,child:o=i||s,scope:a={},meta:l={},family:u={type:"regular"},regional:d}={}){const h=Ba(r),f=Ba(u.links),p=Ba(u.owners),m=[];Yt(e,w=>w&&Er(m,w));const _={id:k4(),seq:m,next:Ba(o),meta:l,scope:a,family:{type:u.type||"crosslink",links:f,owners:p}};return Yt(f,w=>Er(Uh(w),_)),Yt(p,w=>Er(Fh(w),_)),Yt(h,w=>Er(w.next,_)),d&&xo&&Bh(ll(xo),[_]),_}function Fo(e,t,n){let r,i=Yn,s=null,o=pe;if(e.target&&(t=e.params,n=e.defer,r=e.meta,i="page"in e?e.page:i,e.stack&&(s=e.stack),o=lo(e)||o,e=e.target),o&&pe&&o!==pe&&(pe=null),Array.isArray(e))for(let m=0;m<e.length;m++)Qi("pure",i,Ln(e[m]),s,t[m],o,r);else Qi("pure",i,Ln(e),s,t,o,r);if(n&&!gu)return;const a={isRoot:gu,currentPage:Yn,scope:pe,isWatch:Wu,isPure:qu};let l,u,d,h,f,p;gu=0;e:for(;h=N4();){const{idx:m,stack:_,type:w}=h;d=_.node,Yn=f=_.page,pe=lo(_),f?p=f.reg:pe&&(p=pe.reg);const g=!!f,y=!!pe,v={fail:0,scope:d.scope};l=u=0;for(let E=m;E<d.seq.length&&!l;E++){const T=d.seq[E];if(T.order){const{priority:k,barrierID:I}=T.order,C=I?f?`${f.fullID}_${I}`:I:0;if(E!==m||w!==k){I?Rp.has(C)||(Rp.add(C),hm(E,_,k,I)):hm(E,_,k,0);continue e}I&&Rp.delete(C)}switch(T.type){case"mov":{const I=T.data;let C;switch(I.from){case"stack":C=ll(_);break;case"a":case"b":C=_[I.from];break;case"value":C=I.store;break;case"store":if(p&&!p[I.store.id])if(g){const $=wT(f,I.store.id);_.page=f=$,$?p=$.reg:y?(Ho(pe,I.store,0,1,I.softRead),p=pe.reg):p=void 0}else y&&Ho(pe,I.store,0,1,I.softRead);C=cl(p&&p[I.store.id]||I.store)}switch(I.to){case"stack":_.value=C;break;case"a":case"b":_[I.to]=C;break;case"store":j4(f,pe,I.target,0).current=C}break}case"compute":const k=T.data;if(k.fn){Wu=d.meta.op==="watch",qu=k.pure;const I=k.safe?(0,k.fn)(ll(_),v.scope,_):L4(v,k.fn,_);k.filter?u=!I:_.value=I,Wu=a.isWatch,qu=a.isPure}}l=v.fail||u}if(!l){const E=ll(_),T=lo(_);if(Yt(d.next,k=>{Qi("child",f,k,_,E,T)}),T){d.meta.needFxCounter&&Qi("child",f,T.fxCount,_,E,T),d.meta.storeChange&&Qi("child",f,T.storeChange,_,E,T),d.meta.warnSerialize&&Qi("child",f,T.warnSerializeNode,_,E,T);const k=T.additionalLinks[d.id];k&&Yt(k,I=>{Qi("child",f,I,_,E,T)})}}}gu=a.isRoot,Yn=a.currentPage,pe=lo(a)}function hT(e,t="combine"){let n=t+"(",r="",i=0;return gy(e,s=>{i<25&&(s!=null&&(n+=r,n+=ki(s)?fT(s).fullName:s.toString()),i+=1,r=", ")}),n+")"}function p4(e,t){let n,r;const i=e;if(t){const s=fT(t);e.length===0?(n=s.path,r=s.fullName):(n=s.path.concat([e]),r=s.fullName.length===0?e:s.fullName+"/"+e)}else n=e.length===0?[]:[e],r=e;return{shortName:i,fullName:r,path:n}}function Li(e,t){if(!t||!t.name&&!t.named&&!t.loc)return e;let n=`[${e}]`;const r=t.named||t.name;r&&(n+=` unit '${r}'`);const i=t.loc;return!r&&i&&(n+=` (${i.file}:${i.line}:${i.column})`),n}function my(e,t){const n=t?e:e[0];yT(n);let r=n.or;const i=n.and;if(i){const s=t?i:i[0];if($n(s)&&"and"in s){const o=my(i,t);e=o[0],r={...r,...o[1]}}else e=i}return[e,r]}function um(e){const t=()=>e();return t.unsubscribe=()=>e(),t}function bn(e,...t){const n=vy();if(n){const r=n.handlers[e];if(r)return r(n,...t)}}function U(e,t){const n=Wo({or:t,and:typeof e=="string"?{name:e}:e}),r=Li("event",n),i=(a,...l)=>(We(!mi(i,"derived"),"call of derived event is not supported, use createEvent instead",r),We(!qu,"unit call from pure function is not supported, use operators like sample instead",r),Yn?((u,d,h,f)=>{const p=Yn;let m=null;if(d)for(m=Yn;m&&m.template!==d;)m=zo(m);rw(m);const _=u.create(h,f);return rw(p),_})(i,s,a,l):i.create(a,l)),s=vy(),o=Object.assign(i,{graphite:Lr({meta:IT(n.actualOp||"event",i,n),regional:1}),create:a=>(Fo({target:i,params:a,scope:pe}),a),watch:a=>ET(i,a),map:a=>Pp(i,"map",a,[Ir()]),filter:a=>Pp(i,"filter",a.fn?a:a.fn,[Ir(Hh,1)]),filterMap:a=>Pp(i,"filterMap",a,[Ir(),Rr(l=>!mn(l),1)]),prepend(a){We(i.targetable,".prepend of derived event is not supported, call source event instead",r);const l=U("* → "+i.shortName,{parent:zo(i)});return bn("eventPrepend",Ln(l)),da(l,i,[Ir()],"prepend",a),D4(i,l),l}});return n!=null&&n.domain&&n.domain.hooks.event(o),xr(o,"id",o.graphite.id),mT(o.graphite),o}function Z_(e,t,n,r,i){return Md(n,`${i} ${t}`,"first argument"),We(Xt(r),"second argument should be a function",i),Dl(!mi(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`,i),Yt(Array.isArray(n)?n:[n],s=>{e.off(s),jd(e).set(s,xT(ST(s,e,"on",P4,r)))}),e}function te(e,t){const n=Wo(t),r=Bo(e),i=Li("store",n),s=U({named:"updates",derived:1});bn("storeBase",r);const o=r.id,a="skipVoid"in n,l=a&&!n.skipVoid;Dl(!(a&&n.skipVoid),"{skipVoid: true}","updateFilter",i);const u={subscribers:new Map,updates:s,defaultState:e,stateRef:r,getState(){let g,y=r;if(Yn){let v=Yn;for(;v&&!v.reg[o];)v=zo(v);v&&(g=v)}return!g&&pe&&(Ho(pe,r,1),g=pe),g&&(y=g.reg[o]),cl(y)},setState:g=>Fo({target:u,params:g,defer:1,scope:pe}),reset:(...g)=>(We(u.targetable,".reset of derived store is not supported",i),Yt(g,y=>Z_(u,".reset",y,()=>u.defaultState,i)),u),on:(g,y)=>(We(u.targetable,".on of derived store is not supported",i),Z_(u,".on",g,y,i)),off(g){const y=jd(u).get(g);return y&&(y(),jd(u).delete(g)),u},map(g,y){let v,E;$n(g)&&(v=g,g=g.fn);const T=u.getState(),k=mn(T);(!k||k&&l)&&(E=g(T));const I=te(E,{name:`${u.shortName} → *`,derived:1,...y,and:v}),C=ST(u,I,"map",Hh,g);return dm(nr(I),{type:"map",fn:g,from:r}),nr(I).noInit=1,bn("storeMap",r,C),I},watch(g,y){if(Dl(!y,"watch second argument","sample",i),!y||!ki(g)){const v=ET(u,g);return bn("storeWatch",r,g)||g(u.getState()),v}return We(Xt(y),"second argument should be a function",i),g.watch(v=>y(u.getState(),v))}},d=IT("store",u,n),h=u.defaultConfig.updateFilter;u.graphite=Lr({scope:{state:r,fn:h},node:[Rr((g,y,v)=>(v.scope&&!v.scope.reg[r.id]&&(v.b=1),g)),cs(r),Rr((g,y,{a:v,b:E})=>{const T=mn(g);return T&&!a&&console.error(`${i}: ${Gu}`),(T&&l||!T)&&(g!==v||E)},1),h&&Ir(vT,1),fn({from:"stack",target:r})],child:s,meta:{...d,defaultState:e},regional:1}),xr(u,"id",u.graphite.id),xr(u,"rootStateRefId",o);const f=mi(u,"serialize"),p=mi(u,"derived"),m=f==="ignore",_=mi(u,"sid");_&&(xr(u,"storeChange",1),r.sid=_),_||m||p||xr(u,"warnSerialize",1);const w=mn(e);return We(p||!w||w&&l,Gu,i),p&&w&&!a&&console.error(`${i}: ${Gu}`),Bh(u,[s]),n!=null&&n.domain&&n.domain.hooks.store(u),p||(u.reinit=U({named:"reinit"}),u.reset(u.reinit)),r.meta=u.graphite.meta,mT(u.graphite),u}function g4(...e){let t,n,r;[e,r]=my(e);const i=Li("combine",r),s=e[e.length-1],o=!Dn(s)&&$n(s),a=o&&s,l=o?e[e.length-2]:s;let u,d,h;if(Xt(l)?(n=e.slice(0,o?-2:-1),t=l):n=e,n.length===1){const f=n[0];Dn(f)||(u=f,d=1)}if(!d&&(u=n,t)){h=1;const f=t;t=p=>f(...p)}return We($n(u),`${i}: shape should be an object`),$4(Array.isArray(u),!h,u,r,t,a)}function m4(){const e={};return e.req=new Promise((t,n)=>{e.rs=t,e.rj=n}),e.req.catch(()=>{}),e}function Le(e,t={}){const n=Wo(Xt(e)?{handler:e}:e,t),r=Li("effect",n),i=U(Xt(e)?{handler:e}:e,{...t,actualOp:"effect"}),s=Ln(i);xr(s,"op",i.kind="effect"),i.use=m=>(We(Xt(m),".use argument should be a function",r),h.scope.handler=m,i),i.use.getCurrent=()=>h.scope.handler;const o=i.finally=U({named:"finally",derived:1}),a=i.done=o.filterMap({named:"done",fn({status:m,params:_,result:w}){if(m==="done")return{params:_,result:w}}}),l=i.fail=o.filterMap({named:"fail",fn({status:m,params:_,error:w}){if(m==="fail")return{params:_,error:w}}}),u=i.doneData=a.map({named:"doneData",fn:({result:m})=>m}),d=i.failData=l.map({named:"failData",fn:({error:m})=>m}),h=Lr({scope:{handler:i.defaultConfig.handler||(()=>We(0,`no handler used in ${i.compositeName.fullName}`))},node:[Rr((m,_,w)=>{let g=_.handler;const y=lo(w);if(y){const v=y.handlers.unitMap.get(i)||y.handlers.sidMap[i.sid];v&&(g=v)}return m.handler=g,m},0,1),Rr((m,_,w)=>{if(_.runnerFn&&!_.runnerFn(m,null,w))return;const{params:g,req:y,handler:v,args:E=[g]}=m,T=sw(g,y,1,o,w),k=sw(g,y,0,o,w),[I,C]=O4(v,k,E);I&&($n(C)&&Xt(C.then)?C.then(T,k):T(C))},0,1)],meta:{op:"fx",fx:"runner"}});s.scope.runner=h,Er(s.seq,Rr((m,{runner:_},w)=>{const g=zo(w)?{params:m,req:{rs(y){},rj(y){}}}:m;return w.meta||(w.meta={fxID:C4()}),Fo({target:_,params:g,defer:1,scope:lo(w),meta:w.meta}),g.params})),i.create=m=>{const _=m4(),w={params:m,req:_};if(pe&&!Wu){const g=pe;_.req.finally(()=>{pm(g)}).catch(()=>{})}return Fo({target:i,params:w,scope:pe}),_.req};const f=i.inFlight=te(0,{serialize:"ignore",named:(mi(i,"name")||i.graphite.id)+".inFlight"}).on(i,m=>m+1).on(o,m=>m-1).map({fn:m=>m,named:"inFlight"});xr(o,"needFxCounter","dec"),xr(i,"needFxCounter",1);const p=i.pending=f.map({fn:m=>m>0,named:"pending"});return Bh(i,[o,a,l,u,d,p,f]),n!=null&&n.domain&&n.domain.hooks.effect(i),i}function y4(e,t){const n=Li("merge",t);Md(e,n,"first argument");const r=U({name:hT(e,"merge"),derived:1,and:t});return da(e,r,[],"merge"),r}function v4(e,t){let n=0;return Yt(U4,r=>{r in e&&(We(e[r]!=null,TT(t,r)),n=1)}),n}function N(...e){let t,n,r,i,[[s,o,a],l]=my(e),u=1;const d=Li("sample",l);return mn(o)&&$n(s)&&v4(s,d)&&(o=s.clock,a=s.fn,"batch"in s?u=s.batch:(Dl(!("greedy"in s),"greedy in sample","batch",d),u=!s.greedy),i=s.filter,t=s.target,n=s.name,r=s.sid,s=s.source),F4("sample",o,s,i,t,a,n,l,u,1,0,r)}function _4(e,{scope:t,safe:n}={}){We(t||pe||n,"scopeBind: scope not found");const r=t||pe;return i=>{function s(){pm(l)}let o,a=0;const l=pe;pm(r);try{o=e(i)}catch(u){o=u,a=1}if(s(),a)throw o;return o instanceof Promise&&o.then(s,s),o}}function yy({unit:e,fn:t,scope:n,batch:r}){const i=[Hu.run({fn:o=>t(o)})];r&&i.unshift(Hu.compute({priority:"sampler",batch:1})),Dn(e)&&i.unshift(Hu.mov({store:e.stateRef,to:"stack"}));const s=Array.isArray(e)?e:[e];if(n){const o=[],a=n.additionalLinks;return s.forEach(l=>{const u=a[l.graphite.id]||[];a[l.graphite.id]=u;const d=Lr({node:w4(i,l),meta:{watchOp:l.kind}});u.push(d),o.push(()=>{const h=u.indexOf(d);h!==-1&&u.splice(h,1),mm(d)})}),um(()=>{o.forEach(l=>l())})}{const o=Lr({node:i,parent:s,family:{owners:s}});return um(()=>{mm(o)})}}function w4(e,t){return Dn(t)?[Hu.mov({store:t.stateRef,to:"stack"}),...e]:e}const x4=typeof Symbol<"u"&&Symbol.observable||"@@observable",Ln=e=>e.graphite||e,Uh=e=>e.family.owners,Fh=e=>e.family.links,nr=e=>e.stateRef,ll=e=>e.value,jd=e=>e.subscribers,zo=e=>e.parent,lo=e=>e.scope,mi=(e,t)=>Ln(e).meta[t],xr=(e,t,n)=>Ln(e).meta[t]=n,fT=e=>e.compositeName,ki=e=>(Xt(e)||$n(e))&&"kind"in e,vc=e=>t=>ki(t)&&t.kind===e,Dn=vc("store"),E4=vc("event"),ew=vc("effect"),I4=e=>ki(e)&&!!e.targetable,pT=vc("domain"),S4=vc("scope");var pu={__proto__:null,unit:ki,store:Dn,event:E4,effect:ew,targetable:I4,domain:pT,scope:S4,attached:e=>ew(e)&&mi(e,"attached")==1};const Ap=(e,t)=>{const n=e.indexOf(t);n!==-1&&e.splice(n,1)},Er=(e,t)=>e.push(t),Dl=(e,t,n,r)=>!e&&console.error(`${r?r+": ":""}${t} is deprecated${n?`, use ${n} instead`:""}`),zh=()=>{let e=0;return()=>""+ ++e},T4=zh(),gT=zh(),k4=zh(),C4=zh();let xo=null;const mT=e=>{},vy=()=>xo,A4=e=>(e&&xo&&xo.sidRoot&&(e=`${xo.sidRoot}|${e}`),e),Bh=(e,t)=>{const n=Ln(e);Yt(t,r=>{const i=Ln(r);n.family.type!=="domain"&&(i.family.type="crosslink"),Er(Uh(i),n),Er(Fh(n),i)})},Ba=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(Ln),$n=e=>typeof e=="object"&&e!==null,Xt=e=>typeof e=="function",mn=e=>e===void 0,yT=e=>We($n(e)||Xt(e),"expect first argument be an object"),tw=(e,t,n,r)=>We(!(!$n(e)&&!Xt(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${n} to be a unit (store, event or effect)${r}`),Md=(e,t,n)=>{Array.isArray(e)?Yt(e,(r,i)=>tw(r,t,`${i} item of ${n}`,"")):tw(e,t,n," or array of units")},R4=(e,t,n="target")=>Yt(Ba(t),r=>We(!mi(r,"derived"),`${e}: derived unit in "${n}" is not supported, use createStore/createEvent instead"`)),vT=(e,{fn:t},{a:n})=>t(e,n),P4=(e,{fn:t},{a:n})=>t(n,e),Hh=(e,{fn:t})=>t(e),_T=(e,t,n,r)=>{const i={id:gT(),type:e,data:t};return n&&(i.order={priority:n},r&&(i.order.barrierID=++b4)),i};let b4=0;const fn=({from:e="store",store:t,target:n,to:r=n?"store":"stack",batch:i,priority:s})=>_T("mov",{from:e,store:t,to:r,target:n},s,i),$l=({fn:e,batch:t,priority:n,safe:r=0,filter:i=0,pure:s=0})=>_T("compute",{fn:e,safe:r,filter:i,pure:s},n,t),_y=({fn:e})=>$l({fn:e,priority:"effect"}),Rr=(e,t,n)=>$l({fn:e,safe:1,filter:t,priority:n&&"effect"}),cs=(e,t,n)=>fn({store:e,to:t?"stack":"a",priority:n&&"sampler",batch:1}),Ir=(e=Hh,t)=>$l({fn:e,pure:1,filter:t}),Hu={mov:fn,compute:$l,filter:({fn:e,pure:t})=>$l({fn:e,filter:1,pure:t}),run:_y},Bo=e=>({id:gT(),current:e,initial:e}),cl=({current:e})=>e,dm=(e,t)=>{e.before||(e.before=[]),Er(e.before,t)};let co=null;const wy=(e,t)=>{if(!e)return t;if(!t)return e;let n;return(e.v.type===t.v.type&&e.v.id>t.v.id||fm(e.v.type)>fm(t.v.type))&&(n=e,e=t,t=n),n=wy(e.r,t),e.r=e.l,e.l=n,e},xy=[];let nw=0;for(;nw<6;)Er(xy,{first:null,last:null,size:0}),nw+=1;const N4=()=>{for(let e=0;e<6;e++){const t=xy[e];if(t.size>0){if(e===3||e===4){t.size-=1;const r=co.v;return co=wy(co.l,co.r),r}t.size===1&&(t.last=null);const n=t.first;return t.first=n.r,t.size-=1,n.v}}},Qi=(e,t,n,r,i,s,o)=>hm(0,{a:null,b:null,node:n,parent:r,value:i,page:t,scope:s,meta:o},e,0),hm=(e,t,n,r)=>{const i=fm(n),s=xy[i],o={v:{idx:e,stack:t,type:n,id:r},l:null,r:null};i===3||i===4?co=wy(co,o):(s.size===0?s.first=o:s.last.r=o,s.last=o),s.size+=1},fm=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},Rp=new Set;let pe,gu=1,Wu=0,qu=0,Yn=null;const pm=e=>{pe=e},rw=e=>{Yn=e},wT=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=e.parent;if(e)return e}return null},j4=(e,t,n,r)=>{const i=wT(e,n.id);return i?i.reg[n.id]:t?(Ho(t,n,r),t.reg[n.id]):n},M4=e=>e,Ho=(e,t,n,r,i)=>{const s=e.reg;if(s[t.id])return;const o=t.sid,a={id:t.id,current:t.initial,meta:t.meta};if(a.id in e.values.idMap)a.current=e.values.idMap[a.id];else if(o&&o in e.values.sidMap&&!(o in e.sidIdMap)){var l;const u=t==null||(l=t.meta)===null||l===void 0?void 0:l.serialize;a.current=(e.fromSerialize&&u!=="ignore"&&(u==null?void 0:u.read)||M4)(e.values.sidMap[o])}else if(t.before&&!i){let u=0;const d=n||!t.noInit||r;Yt(t.before,h=>{switch(h.type){case"map":{const f=h.from;if((f||h.fn)&&(f&&Ho(e,f,n,r),d)){const p=f&&s[f.id].current;a.current=h.fn?h.fn(p):p}break}case"field":Ho(e,h.from,n,r),u||(u=1,a.current=Array.isArray(a.current)?[...a.current]:{...a.current}),d&&(a.current[h.field]=s[s[h.from.id].id].current)}})}o&&(e.sidIdMap[o]=t.id),s[t.id]=a},L4=(e,t,n)=>{try{return t(ll(n),e.scope,n)}catch(r){console.error(r),e.fail=1,e.failReason=r}},Wo=(e,t={})=>($n(e)&&(Wo(e.or,t),gy(e,(n,r)=>{mn(n)||r==="or"||r==="and"||(t[r]=n)}),Wo(e.and,t)),t),iw=(e,t)=>{Ap(e.next,t),Ap(Uh(e),t),Ap(Fh(e),t)},gm=(e,t,n)=>{let r;e.next.length=0,e.seq.length=0,e.scope=null;let i=Fh(e);for(;r=i.pop();)iw(r,e),(t||n&&e.meta.op!=="sample"||r.family.type==="crosslink")&&gm(r,t,r.meta.op!=="on"&&n);for(i=Uh(e);r=i.pop();)iw(r,e),n&&r.family.type==="crosslink"&&gm(r,t,r.meta.op!=="on"&&n)},Ma=e=>e.clear(),mm=(e,{deep:t}={})=>{let n=0;if(e.ownerSet&&e.ownerSet.delete(e),Dn(e))Ma(jd(e));else if(pT(e)){n=1;const r=e.history;Ma(r.events),Ma(r.effects),Ma(r.stores),Ma(r.domains)}gm(Ln(e),!!t,n)},xT=e=>um(()=>mm(e)),da=(e,t,n,r,i)=>Lr({node:n,parent:e,child:t,scope:{fn:i},meta:{op:r},family:{owners:[e,t],links:t},regional:1}),ET=(e,t)=>(We(Xt(t),".watch argument should be a function"),xT(Lr({scope:{fn:t},node:[_y({fn:Hh})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),D4=(e,t,n="event")=>{zo(e)&&zo(e).hooks[n](t)},IT=(e,t,n)=>{const r=Wo(n),i=e==="domain",s=T4(),{sid:o=null,named:a=null,domain:l=null,parent:u=l}=r,d=a||r.name||(i?"":s),h=p4(d,u),f={op:t.kind=e,name:t.shortName=d,sid:t.sid=A4(o),named:a,unitId:t.id=s,serialize:r.serialize,derived:r.derived,config:r};return t.targetable=!r.derived,t.parent=u,t.compositeName=h,t.defaultConfig=r,t.getType=()=>(Dl(0,"getType","compositeName.fullName"),h.fullName),!i&&(t.subscribe=p=>(yT(p),t.watch(Xt(p)?p:m=>p.next&&p.next(m))),t[x4]=()=>t),f},Pp=(e,t,n,r)=>{let i;$n(n)&&(i=n,n=n.fn);const s=U({name:`${e.shortName} → *`,derived:1,and:i});return da(e,s,r,t,n),s},Gu="undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option",ST=(e,t,n,r,i)=>{const s=nr(t),o=fn({store:s,to:"a",priority:"read"});n==="map"&&(o.data.softRead=1);const a=[o,Ir(r)];return bn("storeOnMap",s,a,Dn(e)&&nr(e)),da(e,t,a,n,i)},$4=(e,t,n,r,i,s)=>{const o=Li("combine",r),a=e?g=>[...g]:g=>({...g}),l=e?[]:{},u=a(l),d=Bo(u),h=Bo(1);d.type=e?"list":"shape",d.noInit=1,bn("combineBase",d,h);const f=te(u,{name:hT(n),derived:1,...s,and:r}),p=nr(f);p.noInit=1,xr(f,"isCombine",1);const m=cs(d);m.order={priority:"barrier"};const _=fn({store:p,to:"b",priority:"read"});_.data.softRead=1;const w=[Rr((g,y,v)=>(v.scope&&!v.scope.reg[d.id]&&(v.c=1),g)),m,fn({store:h,to:"b"}),Rr((g,{key:y},v)=>{if(v.c||g!==v.a[y])return t&&v.b&&(v.a=a(v.a)),v.a[y]=g,1},1),fn({from:"a",target:d}),fn({from:"value",store:0,target:h}),fn({from:"value",store:1,target:h,priority:"barrier",batch:1}),cs(d,1,1),i&&Ir(),_];if(gy(n,(g,y)=>{if(!Dn(g))return We(!ki(g)&&!mn(g),`combine expects a store in a field ${y}`,o),void(u[y]=l[y]=g);l[y]=g.defaultState,u[y]=g.getState();const v=da(g,f,w,"combine",i);v.scope.key=y;const E=nr(g);dm(d,{type:"field",field:y,from:E}),bn("combineField",E,v)}),f.defaultShape=n,dm(p,{type:"map",from:d,fn:i}),!vy())if(i){const g=i(u);!mn(g)||s&&"skipVoid"in s||console.error(`${o}: ${Gu}`),p.current=g,p.initial=g,f.defaultState=g}else f.defaultState=l;return f},O4=(e,t,n)=>{try{return[1,e(...n)]}catch(r){return t(r),[0,null]}},sw=(e,t,n,r,i)=>s=>{Fo({target:[r,V4],params:[n?{status:"done",params:e,result:s}:{status:"fail",params:e,error:s},{value:s,fn:n?t.rs:t.rj}],defer:1,page:i.page,scope:i.scope,meta:i.meta})},V4=Lr({node:[_y({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}}),U4=["source","clock","target"],TT=(e,t)=>e+`: ${t} should be defined`,F4=(e,t,n,r,i,s,o,a,l,u,d,h)=>{const f=Li(e,a),p=!!i;We(!mn(n)||!mn(t),TT(f,"either source or clock"));let m=0;mn(n)?m=1:ki(n)||(n=g4(n)),mn(t)?t=n:(Md(t,f,"clock"),Array.isArray(t)&&(t=y4(t))),m&&(n=t),a||o||(o=n.shortName);let _="none";(d||r)&&(ki(r)?_="unit":(We(Xt(r),"`filter` should be function or unit"),_="fn")),i?(Md(i,f,"target"),R4(f,i)):_==="none"&&u&&Dn(n)&&Dn(t)?i=te(s?s(cl(nr(n)),cl(nr(t))):cl(nr(n)),{name:o,sid:h,or:a}):(i=U({name:o,derived:1,or:a}),bn("sampleTarget",Ln(i)));const w=Bo();let g=[];if(_==="unit"){const[E,T,k]=ow(r,i,t,w,e);k||g.push(...bp(T)),g.push(...bp(E))}const y=[];if(m)l&&y.push(cs(w,1,1));else{const[E,T,k]=ow(n,i,t,w,e);k||y.push(...bp(T)),y.push(cs(E,1,l))}const v=da(t,i,[bn("sampleSourceLoader"),fn({from:"stack",target:w}),...y,...g,cs(w),_==="fn"&&Ir((E,T,{a:k})=>r(E,k),1),s&&Ir(vT),bn("sampleSourceUpward",p)],e,s);return Bh(n,[v]),Object.assign(v.meta,a,{joint:1}),i},bp=e=>[cs(e),Rr((t,n,{a:r})=>r,1)],ow=(e,t,n,r,i)=>{const s=Dn(e),o=s?nr(e):Bo(),a=Bo(s);return s||Lr({parent:e,node:[fn({from:"stack",target:o}),fn({from:"value",store:1,target:a})],family:{owners:[e,t,n],links:t},meta:{op:i},regional:1}),bn("sampleSource",a,o,r),[o,a,s]};var z4={},kT={exports:{}},CT={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo=S;function B4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var H4=typeof Object.is=="function"?Object.is:B4,W4=qo.useState,q4=qo.useEffect,G4=qo.useLayoutEffect,Q4=qo.useDebugValue;function K4(e,t){var n=t(),r=W4({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return G4(function(){i.value=n,i.getSnapshot=t,Np(i)&&s({inst:i})},[e,n,t]),q4(function(){return Np(i)&&s({inst:i}),e(function(){Np(i)&&s({inst:i})})},[e]),Q4(n),n}function Np(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!H4(e,n)}catch{return!0}}function Y4(e,t){return t()}var X4=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Y4:K4;CT.useSyncExternalStore=qo.useSyncExternalStore!==void 0?qo.useSyncExternalStore:X4;kT.exports=CT;var AT=kT.exports;const J4=l0(AT);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh=S,Z4=AT;function eM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tM=typeof Object.is=="function"?Object.is:eM,nM=Z4.useSyncExternalStore,rM=Wh.useRef,iM=Wh.useEffect,sM=Wh.useMemo,oM=Wh.useDebugValue;z4.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=rM(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=sM(function(){function l(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&o.hasValue){var m=o.value;if(i(m,p))return h=m}return h=p}if(m=h,tM(d,p))return m;var _=r(p);return i!==void 0&&i(m,_)?m:(d=p,h=_)}var u=!1,d,h,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=nM(e,s[0],s[1]);return iM(function(){o.hasValue=!0,o.value=a},[a]),oM(a),a};function aM(e,t){return t.displayName=e,t}function RT(e,t){const n=pu.unit(e);let r={};n?r={unit:e}:"@@unitShape"in e?typeof e["@@unitShape"]=="function"?r=e["@@unitShape"]():ym("expect @@unitShape to be a function"):r=e;const i=Array.isArray(r),s=ge.useRef({stale:1,justSubscribed:0,scope:t}),[o,a,l,u,d]=ge.useMemo(()=>{s.current.stale=1;const m=Array.isArray(r)?[]:{},_=[],w=[],g=[],y=[];for(const v in r){if(!{}.hasOwnProperty.call(r,v))continue;const E=r[v];pu.unit(E)||ym(`expect useUnit ${n?"argument":`value in key "${v}"`} to be a unit`),pu.event(E)||pu.effect(E)?(m[v]=t?_4(E,{scope:t}):E,g.push(v),y.push(E)):(m[v]=null,_.push(v),w.push(E))}return[m,_,w,g,y]},[s,t,...Object.keys(r),...Object.values(r)]),h=ge.useRef({value:o,storeKeys:a,eventKeys:u,eventValues:d}),f=ge.useCallback(m=>{const _=s.current;return _.justSubscribed=1,yy({unit:l,fn:()=>{_.stale||(_.stale=1,m())},scope:t,batch:1})},[l,t,h,s]),p=ge.useCallback(()=>{const m=h.current,_=s.current;let w,g=0;const y=m.value,v=m.storeKeys,E=m.eventKeys,T=m.eventValues,k=t!==_.scope;if(_.stale||_.justSubscribed||k){g=!_.justSubscribed||k,w=i?[...o]:{...o},v.length===a.length&&E.length===u.length||(g=1);for(let I=0;I<a.length;I++){const C=uM(l[I],t),$=a[I];g||(g=v.includes($)?y[$]!==C:1),w[$]=C}for(let I=0;I<u.length;I++){const C=d[I],$=u[I];g||(g=E.includes($)?T[E.indexOf($)]!==C:1)}}return g&&(m.value=w),m.storeKeys=a,m.eventKeys=u,m.eventValues=d,_.stale=0,_.justSubscribed=!g,_.scope=t,n?m.value.unit:m.value},[f,l,d,t,h,s]);return cM(f,p,p)}function PT(e,t={},n){const{open:r,close:i,set:s}=RT({open:e.open,close:e.close,set:e.set},n),o=ge.useMemo(()=>({open:r,close:i,set:s}),[e,r]),a=ge.useRef({value:null,count:0});aw(()=>(o.open(a.current.value),()=>o.close(a.current.value)),[o]),((l,u)=>{if(l===u)return 1;if(typeof l=="object"&&l!==null&&typeof u=="object"&&u!==null){const d=Object.keys(l),h=Object.keys(u);if(d.length!==h.length)return 0;for(let f=0;f<d.length;f++){const p=d[f];if(l[p]!==u[p])return 0}return 1}return 0})(a.current.value,t)||(a.current.value=t,a.current.count+=1),aw(()=>{o.set(a.current.value)},[a.current.count])}function Ey(e){const t=ge.useContext(dM);return e&&!t&&ym("No scope found, consider adding <Provider> to app root"),t}function xe(e,t){return RT(e,Ey(t==null?void 0:t.forceScope))}function Iy(e,t={},n){return PT(e,t,Ey(n==null?void 0:n.forceScope))}function bT(e,t){const n=t?e:e[0];var r;(o=>{if(!o)throw Error("expect first argument be an object")})(Eo(r=n)||(o=>typeof o=="function")(r));let i=n.or;const s=n.and;if(s){const o=t?s:s[0];if(Eo(o)&&"and"in o){const a=bT(s,t);e=a[0],i={...i,...a[1]}}else e=s}return[e,i]}function lM(e,t){const n=t&&Eo(r=t[0])&&(r.and||r.or)?t:[{and:t}];var r;const[[i,s],o]=bT(n);let a,l={},u={},d=o;var h;return typeof i=="string"?(u={name:i},Eo(h=s)&&"sid"in h||(l=s||{})):(f=>Eo(f)&&("domain"in f||"defaultState"in f||"name"in f))(i)&&(u=i,l=i.defaultState||{},a=i.domain),{hook:e,domain:a,defaultState:l,mainConfig:u,maybeConfig:d}}function Sy(...e){return(({domain:t,defaultState:n,hook:r,mainConfig:i,maybeConfig:s})=>{function o(m){return r(o,m,Ey()),null}const a=vm({or:s,and:i}),l=`${t?`${t.compositeName.fullName}/`:""}${a.name||"gate"}`,u=U({name:`${l}.set`,sid:a.sid?`${a.sid}|set`:void 0}),d=U({name:`${l}.open`,sid:a.sid?`${a.sid}|open`:void 0}),h=U({name:`${l}.close`,sid:a.sid?`${a.sid}|close`:void 0}),f=te(!1,{name:`${l}.status`,serialize:"ignore"}).on(d,()=>!0).on(h,()=>!1),p=te(n,{name:`${l}.state`,sid:a.sid}).on(u,(m,_)=>_).on(d,(m,_)=>_).reset(h);if(t){const{hooks:m}=t;Fo({target:[m.store,m.store,m.event,m.event,m.event],params:[f,p,d,h,u]})}return o.open=d,o.close=h,o.status=f,o.state=p,o.set=u,aM(`Gate:${l}`,o)})(lM(PT,e))}const ym=e=>{throw Error(e)},aw=typeof window<"u"?ge.useLayoutEffect:ge.useEffect,{useSyncExternalStore:cM}=J4,uM=(e,t)=>t?t.getState(e):e.getState(),dM=ge.createContext(null),Eo=e=>typeof e=="object"&&e!==null,vm=(e,t={})=>(Eo(e)&&(vm(e.or,t),(n=>{for(const s in n)i=s,(o=>o===void 0)(r=n[s])||i==="or"||i==="and"||(t[i]=r);var r,i})(e),vm(e.and,t)),t),hM={currentSong:null,loaded:!1,state:null},fM={currentTime:0,duration:0,isSliding:!1,lastRangeValue:null},pM={currentSongIndex:null,songs:[],name:null,url:null,icon:null,shuffle:!1,willGoToPrevTrack:!0},gM={lyrics:[],currentLyricIndex:0},mM=5;var at=(e=>(e[e.noloop=0]="noloop",e[e.loopall=1]="loopall",e[e.loopone=2]="loopone",e))(at||{});const NT=U(),jT=U(),Ty=U(),MT=U(),nn=te(fM);N({clock:NT,source:nn,fn:(e,t)=>({...e,currentTime:t}),target:nn});N({clock:jT,source:nn,fn:(e,t)=>({...e,duration:t}),target:nn});N({clock:Ty,source:nn,fn:(e,t)=>(console.log({lastRangeValue:t}),{...e,lastRangeValue:t}),target:nn});N({clock:MT,source:nn,fn:(e,t)=>({...e,isSliding:t}),target:nn});const yM=()=>xe(nn),vM=({queue:e,loop:t})=>{const{currentSongIndex:n,songs:r}=e;console.log(t);const i=n!==null?n+1:null;return t===at.loopone?e:typeof i=="number"&&i>r.length-1?t===at.noloop?e:t===at.loopall?{...e,currentSongIndex:0}:e:{...e,currentSongIndex:i}},_M=e=>{let t=at.noloop;return e===at.noloop&&(t=at.loopall),e===at.loopall&&(t=at.loopone),t},qh=U(),ha=U(),LT=U(),DT=U(),Ci=te(pM),Ol=te(at.noloop);N({clock:DT,source:Ci,fn:(e,{queue:t})=>t??e,target:Ci});N({clock:qh,source:{queue:Ci,loop:Ol},fn:vM,target:Ci});N({clock:qh,source:Ol,filter:e=>e===at.loopone,target:ha});N({clock:LT,source:Ol,fn:_M,target:Ol});yy({unit:Ci,fn:e=>{const{currentSongIndex:t,songs:n}=e;if(t!==null){const r=n[t];Kh({song:r,queue:void 0})}}});const wM=()=>xe({queue:Ci,loop:Ol}),ky=nn.map(({currentTime:e})=>e<5e3),xM=ky.map(e=>!e),Cy=U(),$T=U();N({clock:ha,source:ky,filter:Boolean,target:Cy});N({clock:ha,source:ky,filter:Boolean,target:Cy});N({clock:ha,source:xM,filter:Boolean,target:$T});N({clock:Cy,source:Ci,filter:e=>!!e.currentSongIndex,fn:e=>({...e,currentSongIndex:e.currentSongIndex-1}),target:Ci});N({clock:$T,source:nn,filter:Boolean,fn:e=>({...e,currentTime:0}),target:nn});const EM=({lyrics:e},t)=>{console.log(e,t);const{lyrics:n}=e,r=n.findIndex((i,s,o)=>{var a;return(((a=o[s+1])==null?void 0:a.startTime)??-1/0)>t});return r===e.currentLyricIndex?e:{...e,currentLyricIndex:r}},IM=({lyrics:e},t)=>{console.log("test",e,t);const{lyrics:n,currentLyricIndex:r}=e;return!n.length||isNaN(n[0].startTime)?e:n[r+1].startTime<t?{...e,currentLyricIndex:r+1}:e},OT=U(),VT=U(),Ay=U(),Ry=U(),UT=U(),Dr=te(gM),Gh=te(!1);N({clock:OT,source:{shouldCalculateLyrics:Gh,lyrics:Dr},filter:({shouldCalculateLyrics:e})=>e,fn:EM,target:Dr});N({clock:VT,source:{shouldCalculateLyrics:Gh,lyrics:Dr},filter:({shouldCalculateLyrics:e})=>e,fn:IM,target:Dr});N({clock:Ay,source:Dr,fn:(e,t)=>({...e,lyrics:t}),target:Dr});N({clock:Ry,source:Dr,fn:(e,t)=>({...e,currentLyricIndex:t}),target:Dr});N({clock:UT,fn:e=>e,target:Gh});const SM=()=>xe([Dr,Gh]),TM=()=>{const[{loaded:e,state:t,currentSong:n},{currentTime:r}]=xe([On,nn]);return{play:(i=n,s)=>i?!e||(i==null?void 0:i.id)!==(n==null?void 0:n.id)?Kh({song:i,queue:s}):t==="playing"?HT():Qh():null,next:()=>{console.log("next"),qh()},previous:()=>{if(r<mM){ha();return}console.log(t),Ty(0),Ry(0)}}},Py=te(!1),FT=U(),zT=U();N({clock:FT,fn:()=>!0,target:Py});N({clock:zT,fn:()=>!1,target:Py});const kM=()=>xe(Py),Qh=U(),Kh=U(),BT=U(),HT=U(),On=te(hM);N({clock:Qh,source:On,fn:e=>({...e,state:"playing"}),target:On});N({clock:HT,source:On,fn:e=>({...e,state:"pause"}),target:On});N({clock:BT,source:On,fn:e=>({...e,loaded:!0}),target:[On,Qh]});N({clock:Kh,target:DT});yy({unit:On,fn:({currentSong:e,state:t})=>{e&&e.lyrics&&t==="loading"&&(console.log("reset"),Ay(e.lyrics),Ry(0))}});N({clock:Kh,source:On,fn:(e,{song:t})=>({...e,state:"loading",loaded:!1,currentSong:t}),target:On});const H={useSong:()=>xe(On),useControls:TM,queue:{useQueue:wM,next:qh,previous:ha,changeLoopMode:LT},playblack:{usePlayback:yM,setCurrentTime:NT,setDuration:jT,setLastRangeValue:Ty,setIsSliding:MT},fullscreen:{useFullScreen:kM,open:FT,close:zT},lyrics:{useLyrics:SM,calculateCurrentLyric:OT,nextCurrentLyric:VT,setLyrics:Ay,setShouldCalculateLyrics:UT},events:{loaded:BT,play:Qh}},CM=()=>{const{state:e}=H.useSong(),{loop:t,queue:n}=H.queue.useQueue(),{lastRangeValue:r,isSliding:i}=H.playblack.usePlayback(),{next:s,previous:o}=H.useControls(),a=S.useRef(null),l=h=>{H.events.loaded(),H.playblack.setDuration(h.currentTarget.duration),H.playblack.setLastRangeValue(null)},u=h=>{i||(H.playblack.setCurrentTime(h.currentTarget.currentTime),H.lyrics.nextCurrentLyric(h.currentTarget.currentTime))},d=()=>{if(console.log("ended"),t===at.noloop&&n.currentSongIndex===n.songs.length-1){o();return}s()};return S.useEffect(()=>{a.current&&f4(r)&&!isNaN(r??0)&&(a.current.currentTime=+r)},[r]),S.useEffect(()=>{var h;a.current&&(e==="playing"?a.current.play():(h=a.current)==null||h.pause())},[e]),{audioRef:a,loop:t,handleEnded:d,handlePlaying:u,handleOnCanPlay:l}},AM=()=>{const{audioRef:e,loop:t,handleOnCanPlay:n,handlePlaying:r,handleEnded:i}=CM(),{currentSong:s}=H.useSong();return c.jsx("audio",{onEnded:i,src:s==null?void 0:s.songSrc,loop:t===at.loopone,ref:e,onTimeUpdate:r,onCanPlay:n})};/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vl(){return Vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vl.apply(this,arguments)}var si;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(si||(si={}));const lw="popstate";function RM(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return _m("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ld(i)}return bM(t,n,null,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function by(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function PM(){return Math.random().toString(36).substr(2,8)}function cw(e,t){return{usr:e.state,key:e.key,idx:t}}function _m(e,t,n,r){return n===void 0&&(n=null),Vl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fa(t):t,{state:n,key:t&&t.key||r||PM()})}function Ld(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function fa(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function bM(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=si.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Vl({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=si.Pop;let w=d(),g=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:g})}function f(w,g){a=si.Push;let y=_m(_.location,w,g);n&&n(y,w),u=d()+1;let v=cw(y,u),E=_.createHref(y);try{o.pushState(v,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function p(w,g){a=si.Replace;let y=_m(_.location,w,g);n&&n(y,w),u=d();let v=cw(y,u),E=_.createHref(y);o.replaceState(v,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function m(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof w=="string"?w:Ld(w);return Pe(g,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,g)}let _={get action(){return a},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(lw,h),l=w,()=>{i.removeEventListener(lw,h),l=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let g=m(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(w){return o.go(w)}};return _}var uw;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(uw||(uw={}));function NM(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?fa(t):t,i=Ul(r.pathname||"/",n);if(i==null)return null;let s=WT(e);jM(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=zM(s[a],HM(i));return o}function WT(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=yi([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),WT(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:UM(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of qT(s.path))i(s,o,l)}),t}function qT(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=qT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function jM(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:FM(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const MM=/^:\w+$/,LM=3,DM=2,$M=1,OM=10,VM=-2,dw=e=>e==="*";function UM(e,t){let n=e.split("/"),r=n.length;return n.some(dw)&&(r+=VM),t&&(r+=DM),n.filter(i=>!dw(i)).reduce((i,s)=>i+(MM.test(s)?LM:s===""?$M:OM),r)}function FM(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function zM(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Dd({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let h=a.route;s.push({params:r,pathname:yi([i,d.pathname]),pathnameBase:KM(yi([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=yi([i,d.pathnameBase]))}return s}function Dd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=BM(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const m=a[h];return p&&!m?u[f]=void 0:u[f]=WM(m||"",f),u},{}),pathname:s,pathnameBase:o,pattern:e}}function BM(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),by(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function HM(e){try{return decodeURI(e)}catch(t){return by(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function WM(e,t){try{return decodeURIComponent(e)}catch(n){return by(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ul(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function qM(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?fa(e):e;return{pathname:n?n.startsWith("/")?n:GM(n,t):t,search:YM(r),hash:XM(i)}}function GM(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jp(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function QM(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function GT(e,t){let n=QM(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function QT(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=fa(e):(i=Vl({},e),Pe(!i.pathname||!i.pathname.includes("?"),jp("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),jp("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),jp("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else if(r){let h=t.length===0?[]:t[t.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h.pop();i.pathname=f.join("/")}a="/"+h.join("/")}else{let h=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?t[h]:"/"}let l=qM(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const yi=e=>e.join("/").replace(/\/\/+/g,"/"),KM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),YM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,XM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function JM(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const KT=["post","put","patch","delete"];new Set(KT);const ZM=["get",...KT];new Set(ZM);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fl(){return Fl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fl.apply(this,arguments)}const Yh=S.createContext(null),YT=S.createContext(null),Di=S.createContext(null),Xh=S.createContext(null),$i=S.createContext({outlet:null,matches:[],isDataRoute:!1}),XT=S.createContext(null);function eL(e,t){let{relative:n}=t===void 0?{}:t;pa()||Pe(!1);let{basename:r,navigator:i}=S.useContext(Di),{hash:s,pathname:o,search:a}=Jh(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:yi([r,o])),i.createHref({pathname:l,search:a,hash:s})}function pa(){return S.useContext(Xh)!=null}function fr(){return pa()||Pe(!1),S.useContext(Xh).location}function tL(e){pa()||Pe(!1);let{pathname:t}=fr();return S.useMemo(()=>Dd(e,t),[t,e])}function JT(e){S.useContext(Di).static||S.useLayoutEffect(e)}function _c(){let{isDataRoute:e}=S.useContext($i);return e?mL():nL()}function nL(){pa()||Pe(!1);let e=S.useContext(Yh),{basename:t,future:n,navigator:r}=S.useContext(Di),{matches:i}=S.useContext($i),{pathname:s}=fr(),o=JSON.stringify(GT(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return JT(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=QT(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:yi([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,o,s,e])}const rL=S.createContext(null);function iL(e){let t=S.useContext($i).outlet;return t&&S.createElement(rL.Provider,{value:e},t)}function Jh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Di),{matches:i}=S.useContext($i),{pathname:s}=fr(),o=JSON.stringify(GT(i,r.v7_relativeSplatPath));return S.useMemo(()=>QT(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function sL(e,t){return oL(e,t)}function oL(e,t,n,r){pa()||Pe(!1);let{navigator:i}=S.useContext(Di),{matches:s}=S.useContext($i),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=fr(),d;if(t){var h;let w=typeof t=="string"?fa(t):t;l==="/"||(h=w.pathname)!=null&&h.startsWith(l)||Pe(!1),d=w}else d=u;let f=d.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",m=NM(e,{pathname:p}),_=dL(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:yi([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:yi([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return t&&_?S.createElement(Xh.Provider,{value:{location:Fl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:si.Pop}},_):_}function aL(){let e=gL(),t=JM(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,s)}const lL=S.createElement(aL,null);class cL extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement($i.Provider,{value:this.props.routeContext},S.createElement(XT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uL(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(Yh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement($i.Provider,{value:t},r)}function dL(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));d>=0||Pe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.loader&&h.route.id&&n.loaderData[h.route.id]===void 0&&(!n.errors||n.errors[h.route.id]===void 0)){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}return o.reduceRight((d,h,f)=>{let p,m=!1,_=null,w=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,_=h.route.errorElement||lL,l&&(u<0&&f===0?(yL("route-fallback",!1),m=!0,w=null):u===f&&(m=!0,w=h.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,f+1)),y=()=>{let v;return p?v=_:m?v=w:h.route.Component?v=S.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=d,S.createElement(uL,{match:h,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?S.createElement(cL,{location:n.location,revalidation:n.revalidation,component:_,error:p,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var ZT=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ZT||{}),$d=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($d||{});function hL(e){let t=S.useContext(Yh);return t||Pe(!1),t}function fL(e){let t=S.useContext(YT);return t||Pe(!1),t}function pL(e){let t=S.useContext($i);return t||Pe(!1),t}function ek(e){let t=pL(),n=t.matches[t.matches.length-1];return n.route.id||Pe(!1),n.route.id}function gL(){var e;let t=S.useContext(XT),n=fL($d.UseRouteError),r=ek($d.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function mL(){let{router:e}=hL(ZT.UseNavigateStable),t=ek($d.UseNavigateStable),n=S.useRef(!1);return JT(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Fl({fromRouteId:t},s)))},[e,t])}const hw={};function yL(e,t,n){!t&&!hw[e]&&(hw[e]=!0)}function tk(e){return iL(e.context)}function uo(e){Pe(!1)}function vL(e){let{basename:t="/",children:n=null,location:r,navigationType:i=si.Pop,navigator:s,static:o=!1,future:a}=e;pa()&&Pe(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:Fl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=fa(r));let{pathname:d="/",search:h="",hash:f="",state:p=null,key:m="default"}=r,_=S.useMemo(()=>{let w=Ul(d,l);return w==null?null:{location:{pathname:w,search:h,hash:f,state:p,key:m},navigationType:i}},[l,d,h,f,p,m,i]);return _==null?null:S.createElement(Di.Provider,{value:u},S.createElement(Xh.Provider,{children:n,value:_}))}function nk(e){let{children:t,location:n}=e;return sL(wm(t),n)}new Promise(()=>{});function wm(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let s=[...t,i];if(r.type===S.Fragment){n.push.apply(n,wm(r.props.children,s));return}r.type!==uo&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=wm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Od(){return Od=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Od.apply(this,arguments)}function rk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function _L(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wL(e,t){return e.button===0&&(!t||t==="_self")&&!_L(e)}function xm(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function xL(e,t){let n=xm(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const EL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],IL=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],SL=S.createContext({isTransitioning:!1}),TL="startTransition",fw=YP[TL];function kL(e){let{basename:t,children:n,future:r,window:i}=e,s=S.useRef();s.current==null&&(s.current=RM({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(h=>{u&&fw?fw(()=>l(h)):l(h)},[l,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.createElement(vL,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const CL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,js=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:h}=t,f=rk(t,EL),{basename:p}=S.useContext(Di),m,_=!1;if(typeof u=="string"&&AL.test(u)&&(m=u,CL))try{let v=new URL(window.location.href),E=u.startsWith("//")?new URL(v.protocol+u):new URL(u),T=Ul(E.pathname,p);E.origin===v.origin&&T!=null?u=T+E.search+E.hash:_=!0}catch{}let w=eL(u,{relative:i}),g=PL(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:h});function y(v){r&&r(v),v.defaultPrevented||g(v)}return S.createElement("a",Od({},f,{href:m||w,onClick:_||s?r:y,ref:n,target:l}))}),ik=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=t,h=rk(t,IL),f=Jh(l,{relative:h.relative}),p=fr(),m=S.useContext(YT),{navigator:_}=S.useContext(Di),w=m!=null&&bL(f)&&u===!0,g=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,y=p.pathname,v=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(y=y.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase());const E=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let T=y===g||!o&&y.startsWith(g)&&y.charAt(E)==="/",k=v!=null&&(v===g||!o&&v.startsWith(g)&&v.charAt(g.length)==="/"),I={isActive:T,isPending:k,isTransitioning:w},C=T?r:void 0,$;typeof s=="function"?$=s(I):$=[s,T?"active":null,k?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let z=typeof a=="function"?a(I):a;return S.createElement(js,Od({},h,{"aria-current":C,className:$,ref:n,style:z,to:l,unstable_viewTransition:u}),typeof d=="function"?d(I):d)});var Em;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Em||(Em={}));var pw;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pw||(pw={}));function RL(e){let t=S.useContext(Yh);return t||Pe(!1),t}function PL(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=_c(),u=fr(),d=Jh(e,{relative:o});return S.useCallback(h=>{if(wL(h,n)){h.preventDefault();let f=r!==void 0?r:Ld(u)===Ld(d);l(e,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,e,s,o,a])}function sk(e){let t=S.useRef(xm(e)),n=S.useRef(!1),r=fr(),i=S.useMemo(()=>xL(r.search,n.current?null:t.current),[r.search]),s=_c(),o=S.useCallback((a,l)=>{const u=xm(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,l)},[s,i]);return[i,o]}function bL(e,t){t===void 0&&(t={});let n=S.useContext(SL);n==null&&Pe(!1);let{basename:r}=RL(Em.useViewTransitionState),i=Jh(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Ul(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ul(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Dd(i.pathname,o)!=null||Dd(i.pathname,s)!=null}const W=x.button`
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
        opacity: 0.5;
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
`,NL=x(W)`
    color: ${({theme:e})=>e.colors.textColor};
    filter: brightness(1.2);

    &.liked {
        color: ${({likeColor:e})=>e};
    }

    svg {
        width: 20px;
        height: 20px;
    }
`,vs={borderRadius:{mild:"9px",middle:"10px",big:"14px",huge:"5%"},colors:{brightness:1.1,pageTopButton:"#171717",skeleton:"#ffffff1f",playerDarkening:"#000000cb",textColor:"#fff",textColorOppiste:"#000",hover:"#ffffff14",pageBackground:"#101010",pageBackground2:"#191919",overlay:"#0e0e0ed4",input:"#202020",border:"#92929257",sidebar:"#161616",lightHover:"#ffffff1f",darkHover:"#0000002b",modal:"#242629",shadow:"0 0 40px #00000021",greyText:"#a2a2a2",header:"#1010109e",blue:{main:"#75a8fa",action:"#5193ff",mild:"#1b2c4e",transparent:"#5394ff4f",transparent2:"#5394ff2b"},purple:{main:"#9332d1"},red:{text:"#ffb3b3",transparent:"#ff636314",main:"#d64040"}}},jL={borderRadius:{mild:"6px",middle:"10px",big:"14px",huge:"5%"},colors:{brightness:.7,pageTopButton:"#fff",skeleton:"#0000001a",playerDarkening:"#f1f1f1c9",textColor:"#000",textColorOppiste:"#fff",hover:"#73737314",pageBackground:"#fff",pageBackground2:"#f7f7f7",overlay:"#0e0e0ed4",input:"#f0f0f0",border:"#b6b6b657",sidebar:"#f1f1f1",lightHover:"#ffffff80",darkHover:"#0000002b",modal:"#fff",shadow:"0 0 40px #00000021",header:"#ffffff9e",greyText:"#a2a2a2",blue:{main:"#5275b5",action:"#3481fe",mild:"#dfeaff",transparent:"#5394ff4f",transparent2:"#5394ff2b"},purple:{main:"#9332d1"},red:{text:"#e15353",transparent:"#ff636314",main:"#ff6f6f"}}},Zh=({songId:e,likeColor:t=vs.colors.greyText,onClick:n,background:r,height:i,width:s="30px",...o})=>{const[a,l]=S.useState(!1);S.useEffect(()=>{},[]);const u=d=>{d.stopPropagation(),e&&(n==null||n(e)),l(h=>!h)};return c.jsx(NL,{...o,$width:s,$height:i,$background:r,className:"like-button "+(a?"liked":""),onClick:u,likeColor:t,children:a?c.jsx(Gj,{}):c.jsx(uy,{})})},ga=x.div`
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

  &.close {
    opacity: 0;
    visibility: hidden;
    transform: translateY(200px);
  }

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
`,ML=x.img`
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
    opacity: ${({$coverLoaded:e})=>e?"1":"0"};
`,LL=x(ga)`
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
            width: 40%;
            height: 40%;
            opacity: 0.7;
            color: #fff;
        }
    }
`,DL=({src:e})=>{const[t,n]=S.useState(!1),r=()=>{n(!0)};return c.jsx(ML,{$coverLoaded:t,onLoad:r,loading:"lazy",src:e})},$L="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/music-icon-mohammed-jabir-ap.jpg",ef=({src:e,colors:t,children:n,size:r,fallbackIcon:i,borderRadius:s})=>c.jsxs(LL,{className:"general-cover",$colors:t,$borderRadius:s,$size:r,$color1:t==null?void 0:t[0],children:[e&&e!==$L?c.jsx(DL,{src:e}):c.jsx("div",{className:"cover-icon",children:i}),c.jsx("div",{className:"cover-children",children:n})]}),Ny=vs.borderRadius.mild,tf=e=>c.jsx(ef,{fallbackIcon:c.jsx(ls,{}),...e,borderRadius:e.borderRadius??Ny}),wc=x.div`
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
        font-weight: 300;
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
`,Go=x.div`
	width: 100%;
	height: 0.5px;
	background: #91919142;
	margin: 8px 0;
`,en={author:c.jsx(nT,{}),user:c.jsx(cT,{}),playlist:c.jsx(iT,{}),album:c.jsx(py,{}),song:c.jsx(ls,{})};var gw={};/**
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
 */const ok=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},OL=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},ak={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[d],n[h],n[f],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ok(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):OL(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new VL;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class VL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UL=function(e){const t=ok(e);return ak.encodeByteArray(t,!0)},Vd=function(e){return UL(e).replace(/\./g,"")},lk=function(e){try{return ak.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function FL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zL=()=>FL().__FIREBASE_DEFAULTS__,BL=()=>{if(typeof process>"u"||typeof gw>"u")return;const e=gw.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},HL=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&lk(e[1]);return t&&JSON.parse(t)},jy=()=>{try{return zL()||BL()||HL()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ck=e=>{var t,n;return(n=(t=jy())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},WL=e=>{const t=ck(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},uk=()=>{var e;return(e=jy())===null||e===void 0?void 0:e.config},dk=e=>{var t;return(t=jy())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class qL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function GL(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Vd(JSON.stringify(n)),Vd(JSON.stringify(o)),a].join(".")}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function KL(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function YL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XL(){const e=Tt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function JL(){try{return typeof indexedDB=="object"}catch{return!1}}function ZL(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const eD="FirebaseError";class pr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=eD,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xc.prototype.create)}}class xc{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?tD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pr(i,a,r)}}function tD(e,t){return e.replace(nD,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const nD=/\{\$([^}]+)}/g;function rD(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function zl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(mw(s)&&mw(o)){if(!zl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mw(e){return e!==null&&typeof e=="object"}/**
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
 */function Ec(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ha(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Wa(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function iD(e,t){const n=new sD(e,t);return n.subscribe.bind(n)}class sD{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oD(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Mp),i.error===void 0&&(i.error=Mp),i.complete===void 0&&(i.complete=Mp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oD(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Mp(){}/**
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
 */function qe(e){return e&&e._delegate?e._delegate:e}class Ai{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xi="[DEFAULT]";/**
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
 */class aD{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new qL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(cD(t))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Xi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xi){return this.instances.has(t)}getOptions(t=Xi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lD(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xi){return this.component?this.component.multipleInstances?t:Xi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lD(e){return e===Xi?void 0:e}function cD(e){return e.instantiationMode==="EAGER"}/**
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
 */class uD{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new aD(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(se||(se={}));const dD={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},hD=se.INFO,fD={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},pD=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=fD[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class My{constructor(t){this.name=t,this._logLevel=hD,this._logHandler=pD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dD[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}}const gD=(e,t)=>t.some(n=>e instanceof n);let yw,vw;function mD(){return yw||(yw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yD(){return vw||(vw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hk=new WeakMap,Im=new WeakMap,fk=new WeakMap,Lp=new WeakMap,Ly=new WeakMap;function vD(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(vi(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&hk.set(n,e)}).catch(()=>{}),Ly.set(t,e),t}function _D(e){if(Im.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Im.set(e,t)}let Sm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Im.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fk.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vi(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function wD(e){Sm=e(Sm)}function xD(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Dp(this),t,...n);return fk.set(r,t.sort?t.sort():[t]),vi(r)}:yD().includes(e)?function(...t){return e.apply(Dp(this),t),vi(hk.get(this))}:function(...t){return vi(e.apply(Dp(this),t))}}function ED(e){return typeof e=="function"?xD(e):(e instanceof IDBTransaction&&_D(e),gD(e,mD())?new Proxy(e,Sm):e)}function vi(e){if(e instanceof IDBRequest)return vD(e);if(Lp.has(e))return Lp.get(e);const t=ED(e);return t!==e&&(Lp.set(e,t),Ly.set(t,e)),t}const Dp=e=>Ly.get(e);function ID(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=vi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vi(o.result),l.oldVersion,l.newVersion,vi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const SD=["get","getKey","getAll","getAllKeys","count"],TD=["put","add","delete","clear"],$p=new Map;function _w(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if($p.get(t))return $p.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=TD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $p.set(t,s),s}wD(e=>({...e,get:(t,n,r)=>_w(t,n)||e.get(t,n,r),has:(t,n)=>!!_w(t,n)||e.has(t,n)}));/**
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
 */class kD{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CD(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Tm="@firebase/app",ww="0.9.25";/**
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
 */const _s=new My("@firebase/app"),AD="@firebase/app-compat",RD="@firebase/analytics-compat",PD="@firebase/analytics",bD="@firebase/app-check-compat",ND="@firebase/app-check",jD="@firebase/auth",MD="@firebase/auth-compat",LD="@firebase/database",DD="@firebase/database-compat",$D="@firebase/functions",OD="@firebase/functions-compat",VD="@firebase/installations",UD="@firebase/installations-compat",FD="@firebase/messaging",zD="@firebase/messaging-compat",BD="@firebase/performance",HD="@firebase/performance-compat",WD="@firebase/remote-config",qD="@firebase/remote-config-compat",GD="@firebase/storage",QD="@firebase/storage-compat",KD="@firebase/firestore",YD="@firebase/firestore-compat",XD="firebase",JD="10.7.1";/**
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
 */const km="[DEFAULT]",ZD={[Tm]:"fire-core",[AD]:"fire-core-compat",[PD]:"fire-analytics",[RD]:"fire-analytics-compat",[ND]:"fire-app-check",[bD]:"fire-app-check-compat",[jD]:"fire-auth",[MD]:"fire-auth-compat",[LD]:"fire-rtdb",[DD]:"fire-rtdb-compat",[$D]:"fire-fn",[OD]:"fire-fn-compat",[VD]:"fire-iid",[UD]:"fire-iid-compat",[FD]:"fire-fcm",[zD]:"fire-fcm-compat",[BD]:"fire-perf",[HD]:"fire-perf-compat",[WD]:"fire-rc",[qD]:"fire-rc-compat",[GD]:"fire-gcs",[QD]:"fire-gcs-compat",[KD]:"fire-fst",[YD]:"fire-fst-compat","fire-js":"fire-js",[XD]:"fire-js-all"};/**
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
 */const Ud=new Map,Cm=new Map;function e3(e,t){try{e.container.addComponent(t)}catch(n){_s.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ws(e){const t=e.name;if(Cm.has(t))return _s.debug(`There were multiple attempts to register component ${t}.`),!1;Cm.set(t,e);for(const n of Ud.values())e3(n,e);return!0}function nf(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const t3={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_i=new xc("app","Firebase",t3);/**
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
 */class n3{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ai("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
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
 */const Ms=JD;function pk(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:km,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw _i.create("bad-app-name",{appName:String(i)});if(n||(n=uk()),!n)throw _i.create("no-options");const s=Ud.get(i);if(s){if(zl(n,s.options)&&zl(r,s.config))return s;throw _i.create("duplicate-app",{appName:i})}const o=new uD(i);for(const l of Cm.values())o.addComponent(l);const a=new n3(n,r,o);return Ud.set(i,a),a}function gk(e=km){const t=Ud.get(e);if(!t&&e===km&&uk())return pk();if(!t)throw _i.create("no-app",{appName:e});return t}function rr(e,t,n){var r;let i=(r=ZD[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_s.warn(a.join(" "));return}ws(new Ai(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const r3="firebase-heartbeat-database",i3=1,Bl="firebase-heartbeat-store";let Op=null;function mk(){return Op||(Op=ID(r3,i3,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Bl)}}}).catch(e=>{throw _i.create("idb-open",{originalErrorMessage:e.message})})),Op}async function s3(e){try{return await(await mk()).transaction(Bl).objectStore(Bl).get(yk(e))}catch(t){if(t instanceof pr)_s.warn(t.message);else{const n=_i.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_s.warn(n.message)}}}async function xw(e,t){try{const r=(await mk()).transaction(Bl,"readwrite");await r.objectStore(Bl).put(t,yk(e)),await r.done}catch(n){if(n instanceof pr)_s.warn(n.message);else{const r=_i.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_s.warn(r.message)}}}function yk(e){return`${e.name}!${e.options.appId}`}/**
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
 */const o3=1024,a3=30*24*60*60*1e3;class l3{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new u3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ew();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=a3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ew(),{heartbeatsToSend:r,unsentEntries:i}=c3(this._heartbeatsCache.heartbeats),s=Vd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ew(){return new Date().toISOString().substring(0,10)}function c3(e,t=o3){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Iw(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Iw(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class u3{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JL()?ZL().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await s3(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xw(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xw(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Iw(e){return Vd(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function d3(e){ws(new Ai("platform-logger",t=>new kD(t),"PRIVATE")),ws(new Ai("heartbeat",t=>new l3(t),"PRIVATE")),rr(Tm,ww,e),rr(Tm,ww,"esm2017"),rr("fire-js","")}d3("");var h3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Dy=Dy||{},K=h3||self;function rf(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ic(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function f3(e){return Object.prototype.hasOwnProperty.call(e,Vp)&&e[Vp]||(e[Vp]=++p3)}var Vp="closure_uid_"+(1e9*Math.random()>>>0),p3=0;function g3(e,t,n){return e.call.apply(e.bind,arguments)}function m3(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function xt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=g3:xt=m3,xt.apply(null,arguments)}function mu(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function rt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Oi(){this.s=this.s,this.o=this.o}var y3=0;Oi.prototype.s=!1;Oi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),y3!=0)&&f3(this)};Oi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vk=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function $y(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Sw(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(rf(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Et(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var v3=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};K.addEventListener("test",n,t),K.removeEventListener("test",n,t)}catch{}return e}();function Hl(e){return/^[\s\xa0]*$/.test(e)}function sf(){var e=K.navigator;return e&&(e=e.userAgent)?e:""}function Kn(e){return sf().indexOf(e)!=-1}function Oy(e){return Oy[" "](e),e}Oy[" "]=function(){};function _3(e,t){var n=d$;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var w3=Kn("Opera"),Qo=Kn("Trident")||Kn("MSIE"),_k=Kn("Edge"),Am=_k||Qo,wk=Kn("Gecko")&&!(sf().toLowerCase().indexOf("webkit")!=-1&&!Kn("Edge"))&&!(Kn("Trident")||Kn("MSIE"))&&!Kn("Edge"),x3=sf().toLowerCase().indexOf("webkit")!=-1&&!Kn("Edge");function xk(){var e=K.document;return e?e.documentMode:void 0}var Rm;e:{var Up="",Fp=function(){var e=sf();if(wk)return/rv:([^\);]+)(\)|;)/.exec(e);if(_k)return/Edge\/([\d\.]+)/.exec(e);if(Qo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(x3)return/WebKit\/(\S+)/.exec(e);if(w3)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Fp&&(Up=Fp?Fp[1]:""),Qo){var zp=xk();if(zp!=null&&zp>parseFloat(Up)){Rm=String(zp);break e}}Rm=Up}var Pm;if(K.document&&Qo){var Tw=xk();Pm=Tw||parseInt(Rm,10)||void 0}else Pm=void 0;var E3=Pm;function Wl(e,t){if(Et.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(wk){e:{try{Oy(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:I3[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Wl.$.h.call(this)}}rt(Wl,Et);var I3={2:"touch",3:"pen",4:"mouse"};Wl.prototype.h=function(){Wl.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Sc="closure_listenable_"+(1e6*Math.random()|0),S3=0;function T3(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++S3,this.fa=this.ia=!1}function of(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Vy(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function k3(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Ek(e){const t={};for(const n in e)t[n]=e[n];return t}const kw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ik(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<kw.length;s++)n=kw[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function af(e){this.src=e,this.g={},this.h=0}af.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Nm(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new T3(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function bm(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=vk(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(of(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Nm(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Uy="closure_lm_"+(1e6*Math.random()|0),Bp={};function Sk(e,t,n,r,i){if(r&&r.once)return kk(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Sk(e,t[s],n,r,i);return null}return n=By(n),e&&e[Sc]?e.O(t,n,Ic(r)?!!r.capture:!!r,i):Tk(e,t,n,!1,r,i)}function Tk(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Ic(i)?!!i.capture:!!i,a=zy(e);if(a||(e[Uy]=a=new af(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=C3(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)v3||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ak(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function C3(){function e(n){return t.call(e.src,e.listener,n)}const t=A3;return e}function kk(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)kk(e,t[s],n,r,i);return null}return n=By(n),e&&e[Sc]?e.P(t,n,Ic(r)?!!r.capture:!!r,i):Tk(e,t,n,!0,r,i)}function Ck(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ck(e,t[s],n,r,i);else r=Ic(r)?!!r.capture:!!r,n=By(n),e&&e[Sc]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Nm(s,n,r,i),-1<n&&(of(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=zy(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Nm(t,n,r,i)),(n=-1<e?t[e]:null)&&Fy(n))}function Fy(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Sc])bm(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ak(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=zy(t))?(bm(n,e),n.h==0&&(n.src=null,t[Uy]=null)):of(e)}}}function Ak(e){return e in Bp?Bp[e]:Bp[e]="on"+e}function A3(e,t){if(e.fa)e=!0;else{t=new Wl(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Fy(e),e=n.call(r,t)}return e}function zy(e){return e=e[Uy],e instanceof af?e:null}var Hp="__closure_events_fn_"+(1e9*Math.random()>>>0);function By(e){return typeof e=="function"?e:(e[Hp]||(e[Hp]=function(t){return e.handleEvent(t)}),e[Hp])}function nt(){Oi.call(this),this.i=new af(this),this.S=this,this.J=null}rt(nt,Oi);nt.prototype[Sc]=!0;nt.prototype.removeEventListener=function(e,t,n,r){Ck(this,e,t,n,r)};function ut(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Et(t,e);else if(t instanceof Et)t.target=t.target||e;else{var i=t;t=new Et(r,e),Ik(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=yu(o,r,!0,t)&&i}if(o=t.g=e,i=yu(o,r,!0,t)&&i,i=yu(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=yu(o,r,!1,t)&&i}nt.prototype.N=function(){if(nt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)of(n[r]);delete e.g[t],e.h--}}this.J=null};nt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};nt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function yu(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&bm(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Hy=K.JSON.stringify;class R3{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function P3(){var e=Wy;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class b3{constructor(){this.h=this.g=null}add(t,n){const r=Rk.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Rk=new R3(()=>new N3,e=>e.reset());class N3{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function j3(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function M3(e){K.setTimeout(()=>{throw e},0)}let ql,Gl=!1,Wy=new b3,Pk=()=>{const e=K.Promise.resolve(void 0);ql=()=>{e.then(L3)}};var L3=()=>{for(var e;e=P3();){try{e.h.call(e.g)}catch(n){M3(n)}var t=Rk;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Gl=!1};function lf(e,t){nt.call(this),this.h=e||1,this.g=t||K,this.j=xt(this.qb,this),this.l=Date.now()}rt(lf,nt);M=lf.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ut(this,"tick"),this.ga&&(qy(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qy(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}M.N=function(){lf.$.N.call(this),qy(this),delete this.g};function Gy(e,t,n){if(typeof e=="function")n&&(e=xt(e,n));else if(e&&typeof e.handleEvent=="function")e=xt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:K.setTimeout(e,t||0)}function bk(e){e.g=Gy(()=>{e.g=null,e.i&&(e.i=!1,bk(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class D3 extends Oi{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:bk(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ql(e){Oi.call(this),this.h=e,this.g={}}rt(Ql,Oi);var Cw=[];function Nk(e,t,n,r){Array.isArray(n)||(n&&(Cw[0]=n.toString()),n=Cw);for(var i=0;i<n.length;i++){var s=Sk(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function jk(e){Vy(e.g,function(t,n){this.g.hasOwnProperty(n)&&Fy(t)},e),e.g={}}Ql.prototype.N=function(){Ql.$.N.call(this),jk(this)};Ql.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function cf(){this.g=!0}cf.prototype.Ea=function(){this.g=!1};function $3(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var d=u[0];u=u[1];var h=d.split("_");o=2<=h.length&&h[1]=="type"?o+(d+"="+u+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function O3(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ho(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+U3(e,n)+(r?" "+r:"")})}function V3(e,t){e.info(function(){return"TIMEOUT: "+t})}cf.prototype.info=function(){};function U3(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Hy(n)}catch{return t}}var Ls={},Aw=null;function uf(){return Aw=Aw||new nt}Ls.Ta="serverreachability";function Mk(e){Et.call(this,Ls.Ta,e)}rt(Mk,Et);function Kl(e){const t=uf();ut(t,new Mk(t))}Ls.STAT_EVENT="statevent";function Lk(e,t){Et.call(this,Ls.STAT_EVENT,e),this.stat=t}rt(Lk,Et);function bt(e){const t=uf();ut(t,new Lk(t,e))}Ls.Ua="timingevent";function Dk(e,t){Et.call(this,Ls.Ua,e),this.size=t}rt(Dk,Et);function Tc(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){e()},t)}var df={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},$k={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qy(){}Qy.prototype.h=null;function Rw(e){return e.h||(e.h=e.i())}function Ok(){}var kc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ky(){Et.call(this,"d")}rt(Ky,Et);function Yy(){Et.call(this,"c")}rt(Yy,Et);var jm;function hf(){}rt(hf,Qy);hf.prototype.g=function(){return new XMLHttpRequest};hf.prototype.i=function(){return{}};jm=new hf;function Cc(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ql(this),this.P=F3,e=Am?125:void 0,this.V=new lf(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Vk}function Vk(){this.i=null,this.g="",this.h=!1}var F3=45e3,Uk={},Mm={};M=Cc.prototype;M.setTimeout=function(e){this.P=e};function Lm(e,t,n){e.L=1,e.A=pf($r(t)),e.u=n,e.S=!0,Fk(e,null)}function Fk(e,t){e.G=Date.now(),Ac(e),e.B=$r(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Kk(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Vk,e.g=mC(e.l,n?t:null,!e.u),0<e.O&&(e.M=new D3(xt(e.Pa,e,e.g),e.O)),Nk(e.U,e.g,"readystatechange",e.nb),t=e.I?Ek(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Kl(),$3(e.j,e.v,e.B,e.m,e.W,e.u)}M.nb=function(e){e=e.target;const t=this.M;t&&Xn(e)==3?t.l():this.Pa(e)};M.Pa=function(e){try{if(e==this.g)e:{const d=Xn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>d)&&(d!=3||Am||this.g&&(this.h.h||this.g.ja()||jw(this.g)))){this.J||d!=4||t==7||(t==8||0>=h?Kl(3):Kl(2)),ff(this);var n=this.g.da();this.ca=n;t:if(zk(this)){var r=jw(this.g);e="";var i=r.length,s=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ns(this),ul(this);var o="";break t}this.h.i=new K.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,O3(this.j,this.v,this.B,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hl(a)){var u=a;break t}}u=null}if(n=u)ho(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dm(this,n);else{this.i=!1,this.s=3,bt(12),ns(this),ul(this);break e}}this.S?(Bk(this,d,o),Am&&this.i&&d==3&&(Nk(this.U,this.V,"tick",this.mb),this.V.start())):(ho(this.j,this.m,o,null),Dm(this,o)),d==4&&ns(this),this.i&&!this.J&&(d==4?hC(this.l,this):(this.i=!1,Ac(this)))}else l$(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),ns(this),ul(this)}}}catch{}finally{}};function zk(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Bk(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=z3(e,n),i==Mm){t==4&&(e.s=4,bt(14),r=!1),ho(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Uk){e.s=4,bt(15),ho(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ho(e.j,e.m,i,null),Dm(e,i);zk(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,bt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nv(t),t.M=!0,bt(11))):(ho(e.j,e.m,n,"[Invalid Chunked Response]"),ns(e),ul(e))}M.mb=function(){if(this.g){var e=Xn(this.g),t=this.g.ja();this.o<t.length&&(ff(this),Bk(this,e,t),this.i&&e!=4&&Ac(this))}};function z3(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Mm:(n=Number(t.substring(n,r)),isNaN(n)?Uk:(r+=1,r+n>t.length?Mm:(t=t.slice(r,r+n),e.o=r+n,t)))}M.cancel=function(){this.J=!0,ns(this)};function Ac(e){e.Y=Date.now()+e.P,Hk(e,e.P)}function Hk(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Tc(xt(e.lb,e),t)}function ff(e){e.C&&(K.clearTimeout(e.C),e.C=null)}M.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(V3(this.j,this.B),this.L!=2&&(Kl(),bt(17)),ns(this),this.s=2,ul(this)):Hk(this,this.Y-e)};function ul(e){e.l.H==0||e.J||hC(e.l,e)}function ns(e){ff(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,qy(e.V),jk(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Dm(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||$m(n.i,e))){if(!e.K&&$m(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Bd(n),vf(n);else break e;tv(n),bt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Tc(xt(n.ib,n),6e3));if(1>=Jk(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else rs(n,11)}else if((e.K||n.g==e)&&Bd(n),!Hl(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const d=u[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Xy(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Ie(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=gC(r,r.J?r.pa:null,r.Y),o.K){Zk(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(ff(a),Ac(a)),r.g=o}else uC(r);0<n.j.length&&_f(n)}else u[0]!="stop"&&u[0]!="close"||rs(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?rs(n,7):ev(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Kl(4)}catch{}}function B3(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(rf(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function H3(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(rf(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Wk(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(rf(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=H3(e),r=B3(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var qk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function W3(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function us(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof us){this.h=e.h,Fd(this,e.j),this.s=e.s,this.g=e.g,zd(this,e.m),this.l=e.l;var t=e.i,n=new Yl;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Pw(this,n),this.o=e.o}else e&&(t=String(e).match(qk))?(this.h=!1,Fd(this,t[1]||"",!0),this.s=qa(t[2]||""),this.g=qa(t[3]||"",!0),zd(this,t[4]),this.l=qa(t[5]||"",!0),Pw(this,t[6]||"",!0),this.o=qa(t[7]||"")):(this.h=!1,this.i=new Yl(null,this.h))}us.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ga(t,bw,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ga(t,bw,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ga(n,n.charAt(0)=="/"?Q3:G3,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ga(n,Y3)),e.join("")};function $r(e){return new us(e)}function Fd(e,t,n){e.j=n?qa(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function zd(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Pw(e,t,n){t instanceof Yl?(e.i=t,X3(e.i,e.h)):(n||(t=Ga(t,K3)),e.i=new Yl(t,e.h))}function Ie(e,t,n){e.i.set(t,n)}function pf(e){return Ie(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function qa(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ga(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,q3),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function q3(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var bw=/[#\/\?@]/g,G3=/[#\?:]/g,Q3=/[#\?]/g,K3=/[#\?@]/g,Y3=/#/g;function Yl(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Vi(e){e.g||(e.g=new Map,e.h=0,e.i&&W3(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}M=Yl.prototype;M.add=function(e,t){Vi(this),this.i=null,e=ma(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Gk(e,t){Vi(e),t=ma(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Qk(e,t){return Vi(e),t=ma(e,t),e.g.has(t)}M.forEach=function(e,t){Vi(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};M.ta=function(){Vi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};M.Z=function(e){Vi(this);let t=[];if(typeof e=="string")Qk(this,e)&&(t=t.concat(this.g.get(ma(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};M.set=function(e,t){return Vi(this),this.i=null,e=ma(this,e),Qk(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};M.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Kk(e,t,n){Gk(e,t),0<n.length&&(e.i=null,e.g.set(ma(e,t),$y(n)),e.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ma(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function X3(e,t){t&&!e.j&&(Vi(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Gk(this,r),Kk(this,i,n))},e)),e.j=t}var J3=class{constructor(e,t){this.g=e,this.map=t}};function Yk(e){this.l=e||Z3,K.PerformanceNavigationTiming?(e=K.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Z3=10;function Xk(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Jk(e){return e.h?1:e.g?e.g.size:0}function $m(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Xy(e,t){e.g?e.g.add(t):e.h=t}function Zk(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Yk.prototype.cancel=function(){if(this.i=eC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function eC(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return $y(e.i)}var e$=class{stringify(e){return K.JSON.stringify(e,void 0)}parse(e){return K.JSON.parse(e,void 0)}};function t$(){this.g=new e$}function n$(e,t,n){const r=n||"";try{Wk(e,function(i,s){let o=i;Ic(i)&&(o=Hy(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function r$(e,t){const n=new cf;if(K.Image){const r=new Image;r.onload=mu(vu,n,r,"TestLoadImage: loaded",!0,t),r.onerror=mu(vu,n,r,"TestLoadImage: error",!1,t),r.onabort=mu(vu,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=mu(vu,n,r,"TestLoadImage: timeout",!1,t),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function vu(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function gf(e){this.l=e.ec||null,this.j=e.ob||!1}rt(gf,Qy);gf.prototype.g=function(){return new mf(this.l,this.j)};gf.prototype.i=function(e){return function(){return e}}({});function mf(e,t){nt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Jy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(mf,nt);var Jy=0;M=mf.prototype;M.open=function(e,t){if(this.readyState!=Jy)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Xl(this)};M.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||K).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rc(this)),this.readyState=Jy};M.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Xl(this)),this.g&&(this.readyState=3,Xl(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tC(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function tC(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}M.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Rc(this):Xl(this),this.readyState==3&&tC(this)}};M.Za=function(e){this.g&&(this.response=this.responseText=e,Rc(this))};M.Ya=function(e){this.g&&(this.response=e,Rc(this))};M.ka=function(){this.g&&Rc(this)};function Rc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Xl(e)}M.setRequestHeader=function(e,t){this.v.append(e,t)};M.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Xl(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(mf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var i$=K.JSON.parse;function Me(e){nt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=nC,this.L=this.M=!1}rt(Me,nt);var nC="",s$=/^https?$/i,o$=["POST","PUT"];M=Me.prototype;M.Oa=function(e){this.M=e};M.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():jm.g(),this.C=this.u?Rw(this.u):Rw(jm),this.g.onreadystatechange=xt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Nw(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&e instanceof K.FormData,!(0<=vk(o$,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{sC(this),0<this.B&&((this.L=a$(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.ua,this)):this.A=Gy(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Nw(this,s)}};function a$(e){return Qo&&typeof e.timeout=="number"&&e.ontimeout!==void 0}M.ua=function(){typeof Dy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function Nw(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,rC(e),yf(e)}function rC(e){e.F||(e.F=!0,ut(e,"complete"),ut(e,"error"))}M.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ut(this,"complete"),ut(this,"abort"),yf(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yf(this,!0)),Me.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?iC(this):this.kb())};M.kb=function(){iC(this)};function iC(e){if(e.h&&typeof Dy<"u"&&(!e.C[1]||Xn(e)!=4||e.da()!=2)){if(e.v&&Xn(e)==4)Gy(e.La,0,e);else if(ut(e,"readystatechange"),Xn(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(qk)[1]||null;!i&&K.self&&K.self.location&&(i=K.self.location.protocol.slice(0,-1)),r=!s$.test(i?i.toLowerCase():"")}n=r}if(n)ut(e,"complete"),ut(e,"success");else{e.m=6;try{var s=2<Xn(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",rC(e)}}finally{yf(e)}}}}function yf(e,t){if(e.g){sC(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ut(e,"ready");try{n.onreadystatechange=r}catch{}}}function sC(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(K.clearTimeout(e.A),e.A=null)}M.isActive=function(){return!!this.g};function Xn(e){return e.g?e.g.readyState:0}M.da=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),i$(t)}};function jw(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case nC:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function l$(e){const t={};e=(e.g&&2<=Xn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Hl(e[r]))continue;var n=j3(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}k3(t,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function oC(e){let t="";return Vy(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Zy(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=oC(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Ie(e,t,n))}function La(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function aC(e){this.Ga=0,this.j=[],this.l=new cf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=La("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=La("baseRetryDelayMs",5e3,e),this.hb=La("retryDelaySeedMs",1e4,e),this.eb=La("forwardChannelMaxRetries",2,e),this.xa=La("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Yk(e&&e.concurrentRequestLimit),this.Ja=new t$,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=aC.prototype;M.ra=8;M.H=1;function ev(e){if(lC(e),e.H==3){var t=e.W++,n=$r(e.I);if(Ie(n,"SID",e.K),Ie(n,"RID",t),Ie(n,"TYPE","terminate"),Pc(e,n),t=new Cc(e,e.l,t),t.L=2,t.A=pf($r(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&K.Image&&(new Image().src=t.A,n=!0),n||(t.g=mC(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Ac(t)}pC(e)}function vf(e){e.g&&(nv(e),e.g.cancel(),e.g=null)}function lC(e){vf(e),e.u&&(K.clearTimeout(e.u),e.u=null),Bd(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&K.clearTimeout(e.m),e.m=null)}function _f(e){if(!Xk(e.i)&&!e.m){e.m=!0;var t=e.Na;ql||Pk(),Gl||(ql(),Gl=!0),Wy.add(t,e),e.C=0}}function c$(e,t){return Jk(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Tc(xt(e.Na,e,t),fC(e,e.C)),e.C++,!0)}M.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Cc(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Ek(s),Ik(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cC(this,i,t),n=$r(this.I),Ie(n,"RID",e),Ie(n,"CVER",22),this.F&&Ie(n,"X-HTTP-Session-Id",this.F),Pc(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(oC(s)))+"&"+t:this.o&&Zy(n,this.o,s)),Xy(this.i,i),this.bb&&Ie(n,"TYPE","init"),this.P?(Ie(n,"$req",t),Ie(n,"SID","null"),i.aa=!0,Lm(i,n,null)):Lm(i,n,t),this.H=2}}else this.H==3&&(e?Mw(this,e):this.j.length==0||Xk(this.i)||Mw(this))};function Mw(e,t){var n;t?n=t.m:n=e.W++;const r=$r(e.I);Ie(r,"SID",e.K),Ie(r,"RID",n),Ie(r,"AID",e.V),Pc(e,r),e.o&&e.s&&Zy(r,e.o,e.s),n=new Cc(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=cC(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Xy(e.i,n),Lm(n,r,t)}function Pc(e,t){e.na&&Vy(e.na,function(n,r){Ie(t,r,n)}),e.h&&Wk({},function(n,r){Ie(t,r,n)})}function cC(e,t,n){n=Math.min(e.j.length,n);var r=e.h?xt(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const d=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{n$(d,o,"req"+u+"_")}catch{r&&r(d)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function uC(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ql||Pk(),Gl||(ql(),Gl=!0),Wy.add(t,e),e.A=0}}function tv(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Tc(xt(e.Ma,e),fC(e,e.A)),e.A++,!0)}M.Ma=function(){if(this.u=null,dC(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Tc(xt(this.jb,this),e)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,bt(10),vf(this),dC(this))};function nv(e){e.B!=null&&(K.clearTimeout(e.B),e.B=null)}function dC(e){e.g=new Cc(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=$r(e.wa);Ie(t,"RID","rpc"),Ie(t,"SID",e.K),Ie(t,"AID",e.V),Ie(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Ie(t,"TO",e.qa),Ie(t,"TYPE","xmlhttp"),Pc(e,t),e.o&&e.s&&Zy(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=pf($r(t)),n.u=null,n.S=!0,Fk(n,e)}M.ib=function(){this.v!=null&&(this.v=null,vf(this),tv(this),bt(19))};function Bd(e){e.v!=null&&(K.clearTimeout(e.v),e.v=null)}function hC(e,t){var n=null;if(e.g==t){Bd(e),nv(e),e.g=null;var r=2}else if($m(e.i,t))n=t.F,Zk(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=uf(),ut(r,new Dk(r,n)),_f(e)}else uC(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&c$(e,t)||r==2&&tv(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:rs(e,5);break;case 4:rs(e,10);break;case 3:rs(e,6);break;default:rs(e,2)}}}function fC(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function rs(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=xt(e.pb,e);n||(n=new us("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Fd(n,"https"),pf(n)),r$(n.toString(),r)}else bt(2);e.H=0,e.h&&e.h.za(t),pC(e),lC(e)}M.pb=function(e){e?(this.l.info("Successfully pinged google.com"),bt(2)):(this.l.info("Failed to ping google.com"),bt(1))};function pC(e){if(e.H=0,e.ma=[],e.h){const t=eC(e.i);(t.length!=0||e.j.length!=0)&&(Sw(e.ma,t),Sw(e.ma,e.j),e.i.i.length=0,$y(e.j),e.j.length=0),e.h.ya()}}function gC(e,t,n){var r=n instanceof us?$r(n):new us(n);if(r.g!="")t&&(r.g=t+"."+r.g),zd(r,r.m);else{var i=K.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new us(null);r&&Fd(s,r),t&&(s.g=t),i&&zd(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Ie(r,n,t),Ie(r,"VER",e.ra),Pc(e,r),r}function mC(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new Me(new gf({ob:n})):new Me(e.va),t.Oa(e.J),t}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function yC(){}M=yC.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Hd(){if(Qo&&!(10<=Number(E3)))throw Error("Environmental error: no available transport.")}Hd.prototype.g=function(e,t){return new rn(e,t)};function rn(e,t){nt.call(this),this.g=new aC(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Hl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Hl(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ya(this)}rt(rn,nt);rn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;bt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=gC(e,null,e.Y),_f(e)};rn.prototype.close=function(){ev(this.g)};rn.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Hy(e),e=n);t.j.push(new J3(t.fb++,e)),t.H==3&&_f(t)};rn.prototype.N=function(){this.g.h=null,delete this.j,ev(this.g),delete this.g,rn.$.N.call(this)};function vC(e){Ky.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}rt(vC,Ky);function _C(){Yy.call(this),this.status=1}rt(_C,Yy);function ya(e){this.g=e}rt(ya,yC);ya.prototype.Ba=function(){ut(this.g,"a")};ya.prototype.Aa=function(e){ut(this.g,new vC(e))};ya.prototype.za=function(e){ut(this.g,new _C)};ya.prototype.ya=function(){ut(this.g,"b")};function u$(){this.blockSize=-1}function Vn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}rt(Vn,u$);Vn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wp(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Vn.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Wp(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Wp(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Wp(this,r),i=0;break}}this.h=i,this.i+=t};Vn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function he(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var d$={};function rv(e){return-128<=e&&128>e?_3(e,function(t){return new he([t|0],0>t?-1:0)}):new he([e|0],0>e?-1:0)}function Jn(e){if(isNaN(e)||!isFinite(e))return Io;if(0>e)return ot(Jn(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Om;return new he(t,0)}function wC(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return ot(wC(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jn(Math.pow(t,8)),r=Io,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Jn(Math.pow(t,s)),r=r.R(s).add(Jn(o))):(r=r.R(n),r=r.add(Jn(o)))}return r}var Om=4294967296,Io=rv(0),Vm=rv(1),Lw=rv(16777216);M=he.prototype;M.ea=function(){if(pn(this))return-ot(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Om+r)*t,t*=Om}return e};M.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Sr(this))return"0";if(pn(this))return"-"+ot(this).toString(e);for(var t=Jn(Math.pow(e,6)),n=this,r="";;){var i=qd(n,t).g;n=Wd(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Sr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};M.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Sr(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function pn(e){return e.h==-1}M.X=function(e){return e=Wd(this,e),pn(e)?-1:Sr(e)?0:1};function ot(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new he(n,~e.h).add(Vm)}M.abs=function(){return pn(this)?ot(this):this};M.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new he(n,n[n.length-1]&-2147483648?-1:0)};function Wd(e,t){return e.add(ot(t))}M.R=function(e){if(Sr(this)||Sr(e))return Io;if(pn(this))return pn(e)?ot(this).R(ot(e)):ot(ot(this).R(e));if(pn(e))return ot(this.R(ot(e)));if(0>this.X(Lw)&&0>e.X(Lw))return Jn(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,_u(n,2*r+2*i),n[2*r+2*i+1]+=s*l,_u(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,_u(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,_u(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new he(n,0)};function _u(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Da(e,t){this.g=e,this.h=t}function qd(e,t){if(Sr(t))throw Error("division by zero");if(Sr(e))return new Da(Io,Io);if(pn(e))return t=qd(ot(e),t),new Da(ot(t.g),ot(t.h));if(pn(t))return t=qd(e,ot(t)),new Da(ot(t.g),t.h);if(30<e.g.length){if(pn(e)||pn(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Vm,r=t;0>=r.X(e);)n=Dw(n),r=Dw(r);var i=Bs(n,1),s=Bs(r,1);for(r=Bs(r,2),n=Bs(n,2);!Sr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Bs(r,1),n=Bs(n,1)}return t=Wd(e,i.R(t)),new Da(i,t)}for(i=Io;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Jn(n),o=s.R(t);pn(o)||0<o.X(e);)n-=r,s=Jn(n),o=s.R(t);Sr(s)&&(s=Vm),i=i.add(s),e=Wd(e,o)}return new Da(i,e)}M.gb=function(e){return qd(this,e).h};M.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new he(n,this.h&e.h)};M.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new he(n,this.h|e.h)};M.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new he(n,this.h^e.h)};function Dw(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new he(n,e.h)}function Bs(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new he(i,e.h)}Hd.prototype.createWebChannel=Hd.prototype.g;rn.prototype.send=rn.prototype.u;rn.prototype.open=rn.prototype.m;rn.prototype.close=rn.prototype.close;df.NO_ERROR=0;df.TIMEOUT=8;df.HTTP_ERROR=6;$k.COMPLETE="complete";Ok.EventType=kc;kc.OPEN="a";kc.CLOSE="b";kc.ERROR="c";kc.MESSAGE="d";nt.prototype.listen=nt.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;Vn.prototype.digest=Vn.prototype.l;Vn.prototype.reset=Vn.prototype.reset;Vn.prototype.update=Vn.prototype.j;he.prototype.add=he.prototype.add;he.prototype.multiply=he.prototype.R;he.prototype.modulo=he.prototype.gb;he.prototype.compare=he.prototype.X;he.prototype.toNumber=he.prototype.ea;he.prototype.toString=he.prototype.toString;he.prototype.getBits=he.prototype.D;he.fromNumber=Jn;he.fromString=wC;var h$=function(){return new Hd},f$=function(){return uf()},qp=df,p$=$k,g$=Ls,$w={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wu=Ok,m$=Me,y$=Vn,So=he;const Ow="@firebase/firestore";/**
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
 */class Ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
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
 */let va="10.7.0";/**
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
 */const xs=new My("@firebase/firestore");function $a(){return xs.logLevel}function V(e,...t){if(xs.logLevel<=se.DEBUG){const n=t.map(iv);xs.debug(`Firestore (${va}): ${e}`,...n)}}function Or(e,...t){if(xs.logLevel<=se.ERROR){const n=t.map(iv);xs.error(`Firestore (${va}): ${e}`,...n)}}function Jl(e,...t){if(xs.logLevel<=se.WARN){const n=t.map(iv);xs.warn(`Firestore (${va}): ${e}`,...n)}}function iv(e){if(typeof e=="string")return e;try{/**
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
 */function Q(e="Unexpected state"){const t=`FIRESTORE (${va}) INTERNAL ASSERTION FAILED: `+e;throw Or(t),new Error(t)}function ye(e,t){e||Q()}function Z(e,t){return e}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends pr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class v${constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _${getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class w${constructor(t){this.t=t,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new v$(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ye(t===null||typeof t=="string"),new Ot(t)}}class x${constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class E${constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new x$(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class I${constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class S${constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new I$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function T$(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class xC{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=T$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function ce(e,t){return e<t?-1:e>t?1:0}function Ko(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Ye{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new L(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new L(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ye.fromMillis(Date.now())}static fromDate(t){return Ye.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ce(this.nanoseconds,t.nanoseconds):ce(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(t){this.timestamp=t}static fromTimestamp(t){return new X(t)}static min(){return new X(new Ye(0,0))}static max(){return new X(new Ye(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zl{constructor(t,n,r){n===void 0?n=0:n>t.length&&Q(),r===void 0?r=t.length-n:r>t.length-n&&Q(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Zl.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Zl?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Se extends Zl{construct(t,n,r){return new Se(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const k$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Zl{construct(t,n,r){return new lt(t,n,r)}static isValidIdentifier(t){return k$.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(A.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new L(A.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(A.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(Se.fromString(t))}static fromName(t){return new F(Se.fromString(t).popFirst(5))}static empty(){return new F(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Se.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Se.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new Se(t.slice()))}}function C$(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Ri(i,F.empty(),t)}function A$(e){return new Ri(e.readTime,e.key,-1)}class Ri{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ri(X.min(),F.empty(),-1)}static max(){return new Ri(X.max(),F.empty(),-1)}}function R$(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=F.comparator(e.documentKey,t.documentKey),n!==0?n:ce(e.largestBatchId,t.largestBatchId))}/**
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
 */const P$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class b${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function bc(e){if(e.code!==A.FAILED_PRECONDITION||e.message!==P$)throw e;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):R.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):R.reject(n)}static resolve(t){return new R((n,r)=>{n(t)})}static reject(t){return new R((n,r)=>{r(t)})}static waitFor(t){return new R((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=R.resolve(!1);for(const r of t)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new R((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(d=>{o[u]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(t,n){return new R((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Nc(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class sv{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}sv._e=-1;function wf(e){return e==null}function Gd(e){return e===0&&1/e==-1/0}function N$(e){return typeof e=="number"&&Number.isInteger(e)&&!Gd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Vw(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ds(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function EC(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Ne{constructor(t,n){this.comparator=t,this.root=n||st.EMPTY}insert(t,n){return new Ne(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new Ne(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xu(this.root,t,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xu(this.root,t,this.comparator,!0)}}class xu{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class st{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=s??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new st(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const t=this.left.check();if(t!==this.right.check())throw Q();return t+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,n,r,i,s){return this}insert(t,n,r){return new st(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(t){this.comparator=t,this.data=new Ne(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uw(this.data.getIterator())}getIteratorFrom(t){return new Uw(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new dt(this.comparator);return n.data=t,n}}class Uw{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Jt([])}unionWith(t){let n=new dt(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Jt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ko(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class IC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new IC("Invalid base64 string: "+s):s}}(t);return new kt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new kt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ce(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const j$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(e){if(ye(!!e),typeof e=="string"){let t=0;const n=j$.exec(e);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Fe(e.seconds),nanos:Fe(e.nanos)}}function Fe(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Es(e){return typeof e=="string"?kt.fromBase64String(e):kt.fromUint8Array(e)}/**
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
 */function ov(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function av(e){const t=e.mapValue.fields.__previous_value__;return ov(t)?av(t):t}function ec(e){const t=Pi(e.mapValue.fields.__local_write_time__.timestampValue);return new Ye(t.seconds,t.nanos)}/**
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
 */class M${constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class tc{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new tc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof tc&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Eu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Is(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ov(e)?4:L$(e)?9007199254740991:10:Q()}function cr(e,t){if(e===t)return!0;const n=Is(e);if(n!==Is(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ec(e).isEqual(ec(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Pi(i.timestampValue),a=Pi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Es(i.bytesValue).isEqual(Es(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fe(i.doubleValue),a=Fe(s.doubleValue);return o===a?Gd(o)===Gd(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ko(e.arrayValue.values||[],t.arrayValue.values||[],cr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Vw(o)!==Vw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!cr(o[l],a[l])))return!1;return!0}(e,t);default:return Q()}}function nc(e,t){return(e.values||[]).find(n=>cr(n,t))!==void 0}function Yo(e,t){if(e===t)return 0;const n=Is(e),r=Is(t);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Fe(s.integerValue||s.doubleValue),l=Fe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return Fw(e.timestampValue,t.timestampValue);case 4:return Fw(ec(e),ec(t));case 5:return ce(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Es(s),l=Es(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=ce(a[u],l[u]);if(d!==0)return d}return ce(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=ce(Fe(s.latitude),Fe(o.latitude));return a!==0?a:ce(Fe(s.longitude),Fe(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const d=Yo(a[u],l[u]);if(d)return d}return ce(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Eu.mapValue&&o===Eu.mapValue)return 0;if(s===Eu.mapValue)return 1;if(o===Eu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let h=0;h<l.length&&h<d.length;++h){const f=ce(l[h],d[h]);if(f!==0)return f;const p=Yo(a[l[h]],u[d[h]]);if(p!==0)return p}return ce(l.length,d.length)}(e.mapValue,t.mapValue);default:throw Q()}}function Fw(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ce(e,t);const n=Pi(e),r=Pi(t),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Xo(e){return Um(e)}function Um(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Pi(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Es(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return F.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Um(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Um(n.fields[o])}`;return i+"}"}(e.mapValue):Q()}function zw(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Fm(e){return!!e&&"integerValue"in e}function lv(e){return!!e&&"arrayValue"in e}function Bw(e){return!!e&&"nullValue"in e}function Hw(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Qu(e){return!!e&&"mapValue"in e}function dl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ds(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=dl(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=dl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function L$(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ft{constructor(t){this.value=t}static empty(){return new Ft({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Qu(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=dl(n)}setAll(t){let n=lt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=dl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Qu(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return cr(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Qu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Ds(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Ft(dl(this.value))}}function SC(e){const t=[];return Ds(e.fields,(n,r)=>{const i=new lt([n]);if(Qu(r)){const s=SC(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Jt(t)}/**
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
 */class _t{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new _t(t,0,X.min(),X.min(),X.min(),Ft.empty(),0)}static newFoundDocument(t,n,r,i){return new _t(t,1,n,X.min(),r,i,0)}static newNoDocument(t,n){return new _t(t,2,n,X.min(),X.min(),Ft.empty(),0)}static newUnknownDocument(t,n){return new _t(t,3,n,X.min(),X.min(),Ft.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qd{constructor(t,n){this.position=t,this.inclusive=n}}function Ww(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=Yo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qw(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!cr(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class rc{constructor(t,n="asc"){this.field=t,this.dir=n}}function D$(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class TC{}class He extends TC{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new O$(t,n,r):n==="array-contains"?new F$(t,r):n==="in"?new z$(t,r):n==="not-in"?new B$(t,r):n==="array-contains-any"?new H$(t,r):new He(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new V$(t,r):new U$(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yo(n,this.value)):n!==null&&Is(this.value)===Is(n)&&this.matchesComparison(Yo(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Un extends TC{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Un(t,n)}matches(t){return kC(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function kC(e){return e.op==="and"}function CC(e){return $$(e)&&kC(e)}function $$(e){for(const t of e.filters)if(t instanceof Un)return!1;return!0}function zm(e){if(e instanceof He)return e.field.canonicalString()+e.op.toString()+Xo(e.value);if(CC(e))return e.filters.map(t=>zm(t)).join(",");{const t=e.filters.map(n=>zm(n)).join(",");return`${e.op}(${t})`}}function AC(e,t){return e instanceof He?function(r,i){return i instanceof He&&r.op===i.op&&r.field.isEqual(i.field)&&cr(r.value,i.value)}(e,t):e instanceof Un?function(r,i){return i instanceof Un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&AC(o,i.filters[a]),!0):!1}(e,t):void Q()}function RC(e){return e instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${Xo(n.value)}`}(e):e instanceof Un?function(n){return n.op.toString()+" {"+n.getFilters().map(RC).join(" ,")+"}"}(e):"Filter"}class O$ extends He{constructor(t,n,r){super(t,n,r),this.key=F.fromName(r.referenceValue)}matches(t){const n=F.comparator(t.key,this.key);return this.matchesComparison(n)}}class V$ extends He{constructor(t,n){super(t,"in",n),this.keys=PC("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class U$ extends He{constructor(t,n){super(t,"not-in",n),this.keys=PC("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function PC(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class F$ extends He{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return lv(n)&&nc(n.arrayValue,this.value)}}class z$ extends He{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&nc(this.value.arrayValue,n)}}class B$ extends He{constructor(t,n){super(t,"not-in",n)}matches(t){if(nc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!nc(this.value.arrayValue,n)}}class H$ extends He{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!lv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>nc(this.value.arrayValue,r))}}/**
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
 */class W${constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Gw(e,t=null,n=[],r=[],i=null,s=null,o=null){return new W$(e,t,n,r,i,s,o)}function cv(e){const t=Z(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>zm(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wf(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Xo(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Xo(r)).join(",")),t.ce=n}return t.ce}function uv(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!D$(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!AC(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!qw(e.startAt,t.startAt)&&qw(e.endAt,t.endAt)}function Bm(e){return F.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class _a{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function q$(e,t,n,r,i,s,o,a){return new _a(e,t,n,r,i,s,o,a)}function xf(e){return new _a(e)}function Qw(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function bC(e){return e.collectionGroup!==null}function hl(e){const t=Z(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new dt(lt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new rc(s,r))}),n.has(lt.keyField().canonicalString())||t.le.push(new rc(lt.keyField(),r))}return t.le}function ir(e){const t=Z(e);return t.he||(t.he=G$(t,hl(e))),t.he}function G$(e,t){if(e.limitType==="F")return Gw(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new rc(i.field,s)});const n=e.endAt?new Qd(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Qd(e.startAt.position,e.startAt.inclusive):null;return Gw(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Hm(e,t){const n=e.filters.concat([t]);return new _a(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Kd(e,t,n){return new _a(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ef(e,t){return uv(ir(e),ir(t))&&e.limitType===t.limitType}function NC(e){return`${cv(ir(e))}|lt:${e.limitType}`}function qs(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>RC(i)).join(", ")}]`),wf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xo(i)).join(",")),`Target(${r})`}(ir(e))}; limitType=${e.limitType})`}function If(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):F.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of hl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Ww(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,hl(r),i)||r.endAt&&!function(o,a,l){const u=Ww(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,hl(r),i))}(e,t)}function Q$(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function jC(e){return(t,n)=>{let r=!1;for(const i of hl(e)){const s=K$(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function K$(e,t,n){const r=e.field.isKeyField()?F.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Yo(l,u):Q()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class wa{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ds(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return EC(this.inner)}size(){return this.innerSize}}/**
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
 */const Y$=new Ne(F.comparator);function Vr(){return Y$}const MC=new Ne(F.comparator);function Qa(...e){let t=MC;for(const n of e)t=t.insert(n.key,n);return t}function LC(e){let t=MC;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function is(){return fl()}function DC(){return fl()}function fl(){return new wa(e=>e.toString(),(e,t)=>e.isEqual(t))}const X$=new Ne(F.comparator),J$=new dt(F.comparator);function re(...e){let t=J$;for(const n of e)t=t.add(n);return t}const Z$=new dt(ce);function eO(){return Z$}/**
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
 */function $C(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gd(t)?"-0":t}}function OC(e){return{integerValue:""+e}}function tO(e,t){return N$(t)?OC(t):$C(e,t)}/**
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
 */class Sf{constructor(){this._=void 0}}function nO(e,t,n){return e instanceof Yd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ov(s)&&(s=av(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Jo?UC(e,t):e instanceof ic?FC(e,t):function(i,s){const o=VC(i,s),a=Kw(o)+Kw(i.Ie);return Fm(o)&&Fm(i.Ie)?OC(a):$C(i.serializer,a)}(e,t)}function rO(e,t,n){return e instanceof Jo?UC(e,t):e instanceof ic?FC(e,t):n}function VC(e,t){return e instanceof Xd?function(r){return Fm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Yd extends Sf{}class Jo extends Sf{constructor(t){super(),this.elements=t}}function UC(e,t){const n=zC(t);for(const r of e.elements)n.some(i=>cr(i,r))||n.push(r);return{arrayValue:{values:n}}}class ic extends Sf{constructor(t){super(),this.elements=t}}function FC(e,t){let n=zC(t);for(const r of e.elements)n=n.filter(i=>!cr(i,r));return{arrayValue:{values:n}}}class Xd extends Sf{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Kw(e){return Fe(e.integerValue||e.doubleValue)}function zC(e){return lv(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class iO{constructor(t,n){this.field=t,this.transform=n}}function sO(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Jo&&i instanceof Jo||r instanceof ic&&i instanceof ic?Ko(r.elements,i.elements,cr):r instanceof Xd&&i instanceof Xd?cr(r.Ie,i.Ie):r instanceof Yd&&i instanceof Yd}(e.transform,t.transform)}class oO{constructor(t,n){this.version=t,this.transformResults=n}}class sr{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new sr}static exists(t){return new sr(void 0,t)}static updateTime(t){return new sr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ku(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Tf{}function BC(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new WC(e.key,sr.none()):new jc(e.key,e.data,sr.none());{const n=e.data,r=Ft.empty();let i=new dt(lt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ui(e.key,r,new Jt(i.toArray()),sr.none())}}function aO(e,t,n){e instanceof jc?function(i,s,o){const a=i.value.clone(),l=Xw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Ui?function(i,s,o){if(!Ku(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Xw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(HC(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function pl(e,t,n,r){return e instanceof jc?function(s,o,a,l){if(!Ku(s.precondition,o))return a;const u=s.value.clone(),d=Jw(s.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ui?function(s,o,a,l){if(!Ku(s.precondition,o))return a;const u=Jw(s.fieldTransforms,l,o),d=o.data;return d.setAll(HC(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Ku(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function lO(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=VC(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function Yw(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ko(r,i,(s,o)=>sO(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class jc extends Tf{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ui extends Tf{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function HC(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Xw(e,t,n){const r=new Map;ye(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,rO(o,a,n[i]))}return r}function Jw(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nO(s,o,t))}return r}class WC extends Tf{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cO extends Tf{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uO{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&aO(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=pl(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=pl(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=DC();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=BC(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),re())}isEqual(t){return this.batchId===t.batchId&&Ko(this.mutations,t.mutations,(n,r)=>Yw(n,r))&&Ko(this.baseMutations,t.baseMutations,(n,r)=>Yw(n,r))}}class dv{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){ye(t.mutations.length===r.length);let i=function(){return X$}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new dv(t,n,r,i)}}/**
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
 */let dO=class{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class hO{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Ue,oe;function fO(e){switch(e){default:return Q();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function qC(e){if(e===void 0)return Or("GRPC error has no .code"),A.UNKNOWN;switch(e){case Ue.OK:return A.OK;case Ue.CANCELLED:return A.CANCELLED;case Ue.UNKNOWN:return A.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return A.INTERNAL;case Ue.UNAVAILABLE:return A.UNAVAILABLE;case Ue.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Ue.NOT_FOUND:return A.NOT_FOUND;case Ue.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Ue.ABORTED:return A.ABORTED;case Ue.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Ue.DATA_LOSS:return A.DATA_LOSS;default:return Q()}}(oe=Ue||(Ue={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pO(){return new TextEncoder}/**
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
 */const gO=new So([4294967295,4294967295],0);function Zw(e){const t=pO().encode(e),n=new y$;return n.update(t),new Uint8Array(n.digest())}function ex(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new So([n,r],0),new So([i,s],0)]}class hv{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ka(`Invalid padding: ${n}`);if(r<0)throw new Ka(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ka(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ka(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=So.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(So.fromNumber(r)));return i.compare(gO)===1&&(i=new So([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Zw(t),[r,i]=ex(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new hv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Zw(t),[r,i]=ex(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kf{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Mc.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new kf(X.min(),i,new Ne(ce),Vr(),re())}}class Mc{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Mc(r,n,re(),re(),re())}}/**
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
 */class Yu{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class GC{constructor(t,n){this.targetId=t,this.fe=n}}class QC{constructor(t,n,r=kt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class tx{constructor(){this.ge=0,this.pe=rx(),this.ye=kt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=re(),n=re(),r=re();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Mc(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=rx()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,ye(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class mO{constructor(t){this.Le=t,this.ke=new Map,this.qe=Vr(),this.Qe=nx(),this.Ke=new Ne(ce)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:Q()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Bm(s))if(r===0){const o=new F(s.path);this.We(n,o,_t.newNoDocument(o,X.min()))}else ye(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Es(r).toUint8Array()}catch(l){if(l instanceof IC)return Jl("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new hv(o,i,s)}catch(l){return Jl(l instanceof Ka?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Bm(a.target)){const l=new F(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,_t.newNoDocument(l,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=re();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new kf(t,n,this.Ke,this.qe,r);return this.qe=Vr(),this.Qe=nx(),this.Ke=new Ne(ce),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new tx,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new dt(ce),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||V("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new tx),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function nx(){return new Ne(F.comparator)}function rx(){return new Ne(F.comparator)}const yO={asc:"ASCENDING",desc:"DESCENDING"},vO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_O={and:"AND",or:"OR"};class wO{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Wm(e,t){return e.useProto3Json||wf(t)?t:{value:t}}function Jd(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function KC(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function xO(e,t){return Jd(e,t.toTimestamp())}function or(e){return ye(!!e),X.fromTimestamp(function(n){const r=Pi(n);return new Ye(r.seconds,r.nanos)}(e))}function fv(e,t){return function(r){return new Se(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function YC(e){const t=Se.fromString(e);return ye(eA(t)),t}function qm(e,t){return fv(e.databaseId,t.path)}function Gp(e,t){const n=YC(t);if(n.get(1)!==e.databaseId.projectId)throw new L(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new L(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new F(XC(n))}function Gm(e,t){return fv(e.databaseId,t)}function EO(e){const t=YC(e);return t.length===4?Se.emptyPath():XC(t)}function Qm(e){return new Se(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function XC(e){return ye(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ix(e,t,n){return{name:qm(e,t),fields:n.value.mapValue.fields}}function IO(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(ye(d===void 0||typeof d=="string"),kt.fromBase64String(d||"")):(ye(d===void 0||d instanceof Uint8Array),kt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const d=u.code===void 0?A.UNKNOWN:qC(u.code);return new L(d,u.message||"")}(o);n=new QC(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gp(e,r.document.name),s=or(r.document.updateTime),o=r.document.createTime?or(r.document.createTime):X.min(),a=new Ft({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(i,s,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Yu(u,d,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Gp(e,r.document),s=r.readTime?or(r.readTime):X.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Yu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Gp(e,r.document),s=r.removedTargetIds||[];n=new Yu([],s,i,null)}else{if(!("filter"in t))return Q();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hO(i,s),a=r.targetId;n=new GC(a,o)}}return n}function SO(e,t){let n;if(t instanceof jc)n={update:ix(e,t.key,t.value)};else if(t instanceof WC)n={delete:qm(e,t.key)};else if(t instanceof Ui)n={update:ix(e,t.key,t.data),updateMask:jO(t.fieldMask)};else{if(!(t instanceof cO))return Q();n={verify:qm(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Yd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ic)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Xd)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Q()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(e,t.precondition)),n}function TO(e,t){return e&&e.length>0?(ye(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?or(i.updateTime):or(s);return o.isEqual(X.min())&&(o=or(s)),new oO(o,i.transformResults||[])}(n,t))):[]}function kO(e,t){return{documents:[Gm(e,t.path)]}}function CO(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Gm(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Gm(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return ZC(Un.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Gs(h.field),direction:PO(h.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Wm(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function AO(e){let t=EO(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let s=[];n.where&&(s=function(h){const f=JC(h);return f instanceof Un&&CC(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(m){return new rc(Qs(m.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,wf(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,p=h.values||[];return new Qd(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,p=h.values||[];return new Qd(p,f)}(n.endAt)),q$(t,i,o,s,a,"F",l,u)}function RO(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function JC(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qs(n.unaryFilter.field);return He.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qs(n.unaryFilter.field);return He.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(e):e.fieldFilter!==void 0?function(n){return He.create(Qs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Un.create(n.compositeFilter.filters.map(r=>JC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(e):Q()}function PO(e){return yO[e]}function bO(e){return vO[e]}function NO(e){return _O[e]}function Gs(e){return{fieldPath:e.canonicalString()}}function Qs(e){return lt.fromServerFormat(e.fieldPath)}function ZC(e){return e instanceof He?function(n){if(n.op==="=="){if(Hw(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NAN"}};if(Bw(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hw(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NAN"}};if(Bw(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(n.field),op:bO(n.op),value:n.value}}}(e):e instanceof Un?function(n){const r=n.getFilters().map(i=>ZC(i));return r.length===1?r[0]:{compositeFilter:{op:NO(n.op),filters:r}}}(e):Q()}function jO(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function eA(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class oi{constructor(t,n,r,i,s=X.min(),o=X.min(),a=kt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new oi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class MO{constructor(t){this.ut=t}}function LO(e){const t=AO({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Kd(t,t.limit,"L"):t}/**
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
 */class DO{constructor(){this.on=new $O}addToCollectionParentIndex(t,n){return this.on.add(n),R.resolve()}getCollectionParents(t,n){return R.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return R.resolve()}deleteFieldIndex(t,n){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,n){return R.resolve()}getDocumentsMatchingTarget(t,n){return R.resolve(null)}getIndexType(t,n){return R.resolve(0)}getFieldIndexes(t,n){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,n){return R.resolve(Ri.min())}getMinOffsetFromCollectionGroup(t,n){return R.resolve(Ri.min())}updateCollectionGroup(t,n,r){return R.resolve()}updateIndexEntries(t,n){return R.resolve()}}class $O{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new dt(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new dt(Se.comparator)).toArray()}}/**
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
 */class OO{constructor(){this.changes=new wa(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class VO{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class UO{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&pl(r.mutation,i,Jt.empty(),Ye.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,re()).next(()=>r))}getLocalViewOfDocuments(t,n,r=re()){const i=is();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Qa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=is();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,re()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Vr();const o=fl(),a=function(){return fl()}();return n.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof Ui)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),pl(d.mutation,u,d.mutation.getFieldMask(),Ye.now())):o.set(u.key,Jt.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var h;return a.set(u,new VO(d,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=fl();let i=new Ne((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Jt.empty();d=a.applyToLocalView(u,d),r.set(l,d);const h=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,h=DC();d.forEach(f=>{if(!s.has(f)){const p=BC(n.get(f),r.get(f));p!==null&&h.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):bC(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):R.resolve(is());let a=-1,l=s;return o.next(u=>R.forEach(u,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(d)?R.resolve():this.remoteDocumentCache.getEntry(t,d).next(f=>{l=l.insert(d,f)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,re())).next(d=>({batchId:a,changes:LC(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new F(n)).next(r=>{let i=Qa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=Qa();return this.indexManager.getCollectionParents(t,s).next(a=>R.forEach(a,l=>{const u=function(h,f){return new _a(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(d=>{d.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,_t.newInvalidDocument(d)))});let a=Qa();return o.forEach((l,u)=>{const d=s.get(l);d!==void 0&&pl(d.mutation,u,Jt.empty(),Ye.now()),If(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class FO{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return R.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:or(i.createTime)}}(n)),R.resolve()}getNamedQuery(t,n){return R.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:LO(i.bundledQuery),readTime:or(i.readTime)}}(n)),R.resolve()}}/**
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
 */class zO{constructor(){this.overlays=new Ne(F.comparator),this.lr=new Map}getOverlay(t,n){return R.resolve(this.overlays.get(n))}getOverlays(t,n){const r=is();return R.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.lt(t,n,s)}),R.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),R.resolve()}getOverlaysForCollection(t,n,r){const i=is(),s=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Ne((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=is(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=is(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return R.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dO(n,r));let s=this.lr.get(n);s===void 0&&(s=re(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class pv{constructor(){this.hr=new dt(Xe.Pr),this.Ir=new dt(Xe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new Xe(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new Xe(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new F(new Se([])),r=new Xe(n,t),i=new Xe(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new F(new Se([])),r=new Xe(n,t),i=new Xe(n,t+1);let s=re();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Xe(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Xe{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return F.comparator(t.key,n.key)||ce(t.gr,n.gr)}static Tr(t,n){return ce(t.gr,n.gr)||F.comparator(t.key,n.key)}}/**
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
 */class BO{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new dt(Xe.Pr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(t,n){return R.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new dt(ce);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),R.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new F(s),0);let a=new dt(ce);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),R.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){ye(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return R.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new Xe(n,0),i=this.yr.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HO{constructor(t){this.Cr=t,this.docs=function(){return new Ne(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(t,n){let r=Vr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Vr();const o=n.path,a=new F(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||R$(A$(d),r)<=0||(i.has(d.key)||If(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(t,n,r,i){Q()}vr(t,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new WO(this)}getSize(t){return R.resolve(this.size)}}class WO extends OO{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),R.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
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
 */class qO{constructor(t){this.persistence=t,this.Fr=new wa(n=>cv(n),uv),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Mr=0,this.Or=new pv,this.targetCount=0,this.Nr=Zo.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),R.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new Zo(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,R.resolve()}updateTargetData(t,n){return this.kn(n),R.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return R.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),R.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),R.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return R.resolve(r)}containsKey(t,n){return R.resolve(this.Or.containsKey(n))}}/**
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
 */class GO{constructor(t,n){this.Br={},this.overlays={},this.Lr=new sv(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new qO(this),this.indexManager=new DO,this.remoteDocumentCache=function(i){return new HO(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new MO(n),this.Kr=new FO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new zO,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new BO(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){V("MemoryPersistence","Starting transaction:",t);const i=new QO(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class QO extends b${constructor(t){super(),this.currentSequenceNumber=t}}class gv{constructor(t){this.persistence=t,this.Gr=new pv,this.zr=null}static jr(t){return new gv(t)}get Hr(){if(this.zr)return this.zr;throw Q()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),R.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),R.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Hr,r=>{const i=F.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return R.or([()=>R.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
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
 */class mv{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new mv(t,n.fromCache,r,i)}}/**
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
 */class KO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class YO{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.zi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new KO;return this.Hi(t,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>s.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?($a()<=se.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),R.resolve()):($a()<=se.DEBUG&&V("QueryEngine","Query:",qs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?($a()<=se.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ir(n))):R.resolve())}zi(t,n){if(Qw(n))return R.resolve(null);let r=ir(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Kd(n,null,"F"),r=ir(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=re(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(t,Kd(n,null,"F")):this.Xi(t,u,n,l)}))})))}ji(t,n,r,i){return Qw(n)||i.isEqual(X.min())?R.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?R.resolve(null):($a()<=se.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qs(n)),this.Xi(t,o,n,C$(i,-1)).next(a=>a))})}Yi(t,n){let r=new dt(jC(t));return n.forEach((i,s)=>{If(t,s)&&(r=r.add(s))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,n,r){return $a()<=se.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",qs(n)),this.Gi.getDocumentsMatchingQuery(t,n,Ri.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class XO{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new Ne(ce),this.ns=new wa(s=>cv(s),uv),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new UO(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function JO(e,t,n,r){return new XO(e,t,n,r)}async function tA(e,t){const n=Z(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const u of i){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function ZO(e,t){const n=Z(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const h=u.batch,f=h.keys();let p=R.resolve();return f.forEach(m=>{p=p.next(()=>d.getEntry(l,m)).next(_=>{const w=u.docVersions.get(m);ye(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),d.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=re();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function nA(e){const t=Z(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function e5(e,t){const n=Z(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];t.targetChanges.forEach((d,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(s,d.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,d.addedDocuments,h)));let p=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?p=p.withResumeToken(kt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(d.resumeToken,r)),i=i.insert(h,p),function(_,w,g){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,p,d)&&a.push(n.qr.updateTargetData(s,p))});let l=Vr(),u=re();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(t5(s,o,t.documentUpdates).next(d=>{l=d.us,u=d.cs})),!r.isEqual(X.min())){const d=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function t5(e,t,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Vr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function n5(e,t){const n=Z(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function r5(e,t){const n=Z(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,t).next(s=>s?(i=s,R.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new oi(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function Km(e,t,n){const r=Z(e),i=r.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Nc(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function sx(e,t,n){const r=Z(e);let i=X.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const h=Z(l),f=h.ns.get(d);return f!==void 0?R.resolve(h.ts.get(f)):h.qr.getTargetData(u,d)}(r,o,ir(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?i:X.min(),n?s:re())).next(a=>(i5(r,Q$(t),a),{documents:a,ls:s})))}function i5(e,t,n){let r=e.rs.get(t)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.rs.set(t,r)}class ox{constructor(){this.activeTargetIds=eO()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class s5{constructor(){this.eo=new ox,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new ox,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class o5{ro(t){}shutdown(){}}/**
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
 */class ax{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Iu=null;function Qp(){return Iu===null?Iu=function(){return 268435456+Math.round(2147483648*Math.random())}():Iu++,"0x"+Iu.toString(16)}/**
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
 */const a5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class l5{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
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
 */const mt="WebChannelConnection";class c5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Qp(),l=this.So(n,r);V("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(d=>(V("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Jl("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+va}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=a5[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const s=Qp();return new Promise((o,a)=>{const l=new m$;l.setWithCredentials(!0),l.listenOnce(p$.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qp.NO_ERROR:const d=l.getResponseJson();V(mt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(d)),o(d);break;case qp.TIMEOUT:V(mt,`RPC '${t}' ${s} timed out`),a(new L(A.DEADLINE_EXCEEDED,"Request time out"));break;case qp.HTTP_ERROR:const h=l.getStatus();if(V(mt,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const m=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(g)>=0?g:A.UNKNOWN}(p.status);a(new L(m,p.message))}else a(new L(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(A.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{V(mt,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);V(mt,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(t,n,r){const i=Qp(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=h$(),a=f$(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");V(mt,`Creating RPC '${t}' stream ${i}: ${d}`,l);const h=o.createWebChannel(d,l);let f=!1,p=!1;const m=new l5({co:w=>{p?V(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(f||(V(mt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),V(mt,`RPC '${t}' stream ${i} sending:`,w),h.send(w))},lo:()=>h.close()}),_=(w,g,y)=>{w.listen(g,v=>{try{y(v)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,wu.EventType.OPEN,()=>{p||V(mt,`RPC '${t}' stream ${i} transport opened.`)}),_(h,wu.EventType.CLOSE,()=>{p||(p=!0,V(mt,`RPC '${t}' stream ${i} transport closed`),m.Ro())}),_(h,wu.EventType.ERROR,w=>{p||(p=!0,Jl(mt,`RPC '${t}' stream ${i} transport errored:`,w),m.Ro(new L(A.UNAVAILABLE,"The operation could not be completed")))}),_(h,wu.EventType.MESSAGE,w=>{var g;if(!p){const y=w.data[0];ye(!!y);const v=y,E=v.error||((g=v[0])===null||g===void 0?void 0:g.error);if(E){V(mt,`RPC '${t}' stream ${i} received error:`,E);const T=E.status;let k=function($){const z=Ue[$];if(z!==void 0)return qC(z)}(T),I=E.message;k===void 0&&(k=A.INTERNAL,I="Unknown error status: "+T+" with message "+E.message),p=!0,m.Ro(new L(k,I)),h.close()}else V(mt,`RPC '${t}' stream ${i} received:`,y),m.Vo(y)}}),_(a,g$.STAT_EVENT,w=>{w.stat===$w.PROXY?V(mt,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===$w.NOPROXY&&V(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function Kp(){return typeof document<"u"?document:null}/**
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
 */function Cf(e){return new wO(e,!0)}/**
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
 */class rA{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class iA{constructor(t,n,r,i,s,o,a,l){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new rA(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Or(n.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new L(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u5 extends iA{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=IO(this.serializer,t),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?or(o.readTime):X.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=Qm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Bm(l)?{documents:kO(s,l)}:{query:CO(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=KC(s,o.resumeToken);const u=Wm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Jd(s,o.snapshotVersion.toTimestamp());const u=Wm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=RO(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=Qm(this.serializer),n.removeTarget=t,this.e_(n)}}class d5 extends iA{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(ye(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=TO(t.writeResults,t.commitTime),r=or(t.commitTime);return this.listener.I_(r,n)}return ye(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Qm(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>SO(this.serializer,r))};this.e_(n)}}/**
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
 */class h5 extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new L(A.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(A.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(A.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class f5{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Or(n),this.f_=!1):V("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class p5{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{$s(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Z(l);u.C_.add(4),await Lc(u),u.M_.set("Unknown"),u.C_.delete(4),await Af(u)}(this))})}),this.M_=new f5(r,i)}}async function Af(e){if($s(e))for(const t of e.v_)await t(!0)}async function Lc(e){for(const t of e.v_)await t(!1)}function sA(e,t){const n=Z(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),_v(n)?vv(n):xa(n).Ho()&&yv(n,t))}function oA(e,t){const n=Z(e),r=xa(n);n.D_.delete(t),r.Ho()&&aA(n,t),n.D_.size===0&&(r.Ho()?r.Zo():$s(n)&&n.M_.set("Unknown"))}function yv(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(X.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}xa(e).u_(t)}function aA(e,t){e.x_.Oe(t),xa(e).c_(t)}function vv(e){e.x_=new mO({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),xa(e).start(),e.M_.g_()}function _v(e){return $s(e)&&!xa(e).jo()&&e.D_.size>0}function $s(e){return Z(e).C_.size===0}function lA(e){e.x_=void 0}async function g5(e){e.D_.forEach((t,n)=>{yv(e,t)})}async function m5(e,t){lA(e),_v(e)?(e.M_.w_(t),vv(e)):e.M_.set("Unknown")}async function y5(e,t,n){if(e.M_.set("Online"),t instanceof QC&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(e,t)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Zd(e,r)}else if(t instanceof Yu?e.x_.$e(t):t instanceof GC?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(X.min()))try{const r=await nA(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.D_.get(u);d&&s.D_.set(u,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const d=s.D_.get(l);if(!d)return;s.D_.set(l,d.withResumeToken(kt.EMPTY_BYTE_STRING,d.snapshotVersion)),aA(s,l);const h=new oi(d.target,l,u,d.sequenceNumber);yv(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Zd(e,r)}}async function Zd(e,t,n){if(!Nc(t))throw t;e.C_.add(1),await Lc(e),e.M_.set("Offline"),n||(n=()=>nA(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await Af(e)})}function cA(e,t){return t().catch(n=>Zd(e,n,t))}async function Rf(e){const t=Z(e),n=bi(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;v5(t);)try{const i=await n5(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,_5(t,i)}catch(i){await Zd(t,i)}uA(t)&&dA(t)}function v5(e){return $s(e)&&e.b_.length<10}function _5(e,t){e.b_.push(t);const n=bi(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function uA(e){return $s(e)&&!bi(e).jo()&&e.b_.length>0}function dA(e){bi(e).start()}async function w5(e){bi(e).E_()}async function x5(e){const t=bi(e);for(const n of e.b_)t.P_(n.mutations)}async function E5(e,t,n){const r=e.b_.shift(),i=dv.from(r,t,n);await cA(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Rf(e)}async function I5(e,t){t&&bi(e).h_&&await async function(r,i){if(function(o){return fO(o)&&o!==A.ABORTED}(i.code)){const s=r.b_.shift();bi(r).Yo(),await cA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Rf(r)}}(e,t),uA(e)&&dA(e)}async function lx(e,t){const n=Z(e);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=$s(n);n.C_.add(3),await Lc(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await Af(n)}async function S5(e,t){const n=Z(e);t?(n.C_.delete(2),await Af(n)):t||(n.C_.add(2),await Lc(n),n.M_.set("Unknown"))}function xa(e){return e.O_||(e.O_=function(n,r,i){const s=Z(n);return s.A_(),new u5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:g5.bind(null,e),Io:m5.bind(null,e),a_:y5.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),_v(e)?vv(e):e.M_.set("Unknown")):(await e.O_.stop(),lA(e))})),e.O_}function bi(e){return e.N_||(e.N_=function(n,r,i){const s=Z(n);return s.A_(),new d5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:w5.bind(null,e),Io:I5.bind(null,e),T_:x5.bind(null,e),I_:E5.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Rf(e)):(await e.N_.stop(),e.b_.length>0&&(V("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
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
 */class wv{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new wv(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(A.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xv(e,t){if(Or("AsyncQueue",`${t}: ${e}`),Nc(e))return new L(A.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class To{constructor(t){this.comparator=t?(n,r)=>t(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=Qa(),this.sortedSet=new Ne(this.comparator)}static emptySet(t){return new To(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof To)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new To;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class cx{constructor(){this.B_=new Ne(F.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):Q():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ea{constructor(t,n,r,i,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ea(t,n,To.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ef(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class T5{constructor(){this.k_=void 0,this.listeners=[]}}class k5{constructor(){this.queries=new wa(t=>NC(t),Ef),this.onlineState="Unknown",this.q_=new Set}}async function Ev(e,t){const n=Z(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new T5),i)try{s.k_=await n.onListen(r)}catch(o){const a=xv(o,`Initialization of query '${qs(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.Q_(n.onlineState),s.k_&&t.K_(s.k_)&&Sv(n)}async function Iv(e,t){const n=Z(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function C5(e,t){const n=Z(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Sv(n)}function A5(e,t,n){const r=Z(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Sv(e){e.q_.forEach(t=>{t.next()})}class Tv{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ea(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=ea.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
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
 */class hA{constructor(t){this.key=t}}class fA{constructor(t){this.key=t}}class R5{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=re(),this.mutatedKeys=re(),this._a=jC(t),this.aa=new To(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new cx,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,h)=>{const f=i.get(d),p=If(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;f&&p?f.data.isEqual(p.data)?m!==_&&(r.track({type:3,doc:p}),w=!0):this.ha(f,p)||(r.track({type:2,doc:p}),w=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),w=!0):f&&!p&&(r.track({type:1,doc:f}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=_?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const o=t.la.L_();o.sort((d,h)=>function(p,m){const _=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return _(p)-_(m)}(d.type,h.type)||this._a(d.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new ea(this.query,t.aa,s,o,t.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new cx,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=re(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new fA(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new hA(r))}),n}da(t){this.ia=t.ls,this.oa=re();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return ea.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class P5{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class b5{constructor(t){this.key=t,this.Ra=!1}}class N5{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new wa(a=>NC(a),Ef),this.fa=new Map,this.ga=new Set,this.pa=new Ne(F.comparator),this.ya=new Map,this.wa=new pv,this.Sa={},this.ba=new Map,this.Da=Zo.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function j5(e,t){const n=B5(e);let r,i;const s=n.ma.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await r5(n.localStore,ir(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await M5(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&sA(n.remoteStore,o)}return i}async function M5(e,t,n,r,i){e.va=(h,f,p)=>async function(_,w,g,y){let v=w.view.ca(g);v.Zi&&(v=await sx(_.localStore,w.query,!1).then(({documents:I})=>w.view.ca(I,v)));const E=y&&y.targetChanges.get(w.targetId),T=y&&y.targetMismatches.get(w.targetId)!=null,k=w.view.applyChanges(v,_.isPrimaryClient,E,T);return dx(_,w.targetId,k.Ta),k.snapshot}(e,h,f,p);const s=await sx(e.localStore,t,!0),o=new R5(t,s.ls),a=o.ca(s.documents),l=Mc.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,l);dx(e,n,u.Ta);const d=new P5(t,n,o);return e.ma.set(t,d),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),u.snapshot}async function L5(e,t){const n=Z(e),r=n.ma.get(t),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Ef(s,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Km(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),oA(n.remoteStore,r.targetId),Ym(n,r.targetId)}).catch(bc)):(Ym(n,r.targetId),await Km(n.localStore,r.targetId,!0))}async function D5(e,t,n){const r=H5(e);try{const i=await function(o,a){const l=Z(o),u=Ye.now(),d=a.reduce((p,m)=>p.add(m.key),re());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=Vr(),_=re();return l.ss.getEntries(p,d).next(w=>{m=w,m.forEach((g,y)=>{y.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,m)).next(w=>{h=w;const g=[];for(const y of a){const v=lO(y,h.get(y.key).overlayedDocument);v!=null&&g.push(new Ui(y.key,v,SC(v.value.mapValue),sr.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(w=>{f=w;const g=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(p,w.batchId,g)})}).then(()=>({batchId:f.batchId,changes:LC(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new Ne(ce)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Dc(r,i.changes),await Rf(r.remoteStore)}catch(i){const s=xv(i,"Failed to persist write");n.reject(s)}}async function pA(e,t){const n=Z(e);try{const r=await e5(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?ye(o.Ra):i.removedDocuments.size>0&&(ye(o.Ra),o.Ra=!1))}),await Dc(n,r,t)}catch(r){await bc(r)}}function ux(e,t,n){const r=Z(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach((d,h)=>{for(const f of h.listeners)f.Q_(a)&&(u=!0)}),u&&Sv(l)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function $5(e,t,n){const r=Z(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new Ne(F.comparator);o=o.insert(s,_t.newNoDocument(s,X.min()));const a=re().add(s),l=new kf(X.min(),new Map,new Ne(ce),o,a);await pA(r,l),r.pa=r.pa.remove(s),r.ya.delete(t),kv(r)}else await Km(r.localStore,t,!1).then(()=>Ym(r,t,n)).catch(bc)}async function O5(e,t){const n=Z(e),r=t.batch.batchId;try{const i=await ZO(n.localStore,t);mA(n,r,null),gA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Dc(n,i)}catch(i){await bc(i)}}async function V5(e,t,n){const r=Z(e);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ye(h!==null),d=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,t);mA(r,t,n),gA(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Dc(r,i)}catch(i){await bc(i)}}function gA(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function mA(e,t,n){const r=Z(e);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function Ym(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||yA(e,r)})}function yA(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(oA(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),kv(e))}function dx(e,t,n){for(const r of n)r instanceof hA?(e.wa.addReference(r.key,t),U5(e,r)):r instanceof fA?(V("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||yA(e,r.key)):Q()}function U5(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(V("SyncEngine","New document in limbo: "+n),e.ga.add(r),kv(e))}function kv(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new F(Se.fromString(t)),r=e.Da.next();e.ya.set(r,new b5(n)),e.pa=e.pa.insert(n,r),sA(e.remoteStore,new oi(ir(xf(n.path)),r,"TargetPurposeLimboResolution",sv._e))}}async function Dc(e,t,n){const r=Z(e),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const d=mv.Qi(l.targetId,u);s.push(d)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const d=Z(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(u,f=>R.forEach(f.ki,p=>d.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>R.forEach(f.qi,p=>d.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Nc(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const p=d.ts.get(f),m=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(m);d.ts=d.ts.insert(f,_)}}}(r.localStore,s))}async function F5(e,t){const n=Z(e);if(!n.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const r=await tA(n.localStore,t);n.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new L(A.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Dc(n,r._s)}}function z5(e,t){const n=Z(e),r=n.ya.get(t);if(r&&r.Ra)return re().add(r.key);{let i=re();const s=n.fa.get(t);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function B5(e){const t=Z(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=pA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=z5.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=$5.bind(null,t),t.Va.a_=C5.bind(null,t.eventManager),t.Va.Fa=A5.bind(null,t.eventManager),t}function H5(e){const t=Z(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=O5.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=V5.bind(null,t),t}class hx{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Cf(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return JO(this.persistence,new YO,t.initialUser,this.serializer)}createPersistence(t){return new GO(gv.jr,this.serializer)}createSharedClientState(t){return new s5}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class W5{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ux(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=F5.bind(null,this.syncEngine),await S5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new k5}()}createDatastore(t){const n=Cf(t.databaseInfo.databaseId),r=function(s){return new c5(s)}(t.databaseInfo);return function(s,o,a,l){return new h5(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new p5(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ux(this.syncEngine,n,0),function(){return ax.D()?new ax:new o5}())}createSyncEngine(t,n){return function(i,s,o,a,l,u,d){const h=new N5(i,s,o,a,l,u);return d&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);V("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Lc(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Cv{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Or("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class q5{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ot.UNAUTHENTICATED,this.clientId=xC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=xv(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Yp(e,t){e.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await tA(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function fx(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Q5(e);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>lx(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>lx(t.remoteStore,s)),e._onlineComponents=t}function G5(e){return e.name==="FirebaseError"?e.code===A.FAILED_PRECONDITION||e.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Q5(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yp(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!G5(n))throw n;Jl("Error using user provided cache. Falling back to memory cache: "+n),await Yp(e,new hx)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Yp(e,new hx);return e._offlineComponents}async function vA(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await fx(e,e._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await fx(e,new W5))),e._onlineComponents}function K5(e){return vA(e).then(t=>t.syncEngine)}async function eh(e){const t=await vA(e),n=t.eventManager;return n.onListen=j5.bind(null,t.syncEngine),n.onUnlisten=L5.bind(null,t.syncEngine),n}function Y5(e,t,n={}){const r=new Pr;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new Cv({next:f=>{o.enqueueAndForget(()=>Iv(s,h));const p=f.docs.has(a);!p&&f.fromCache?u.reject(new L(A.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&l&&l.source==="server"?u.reject(new L(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new Tv(xf(a.path),d,{includeMetadataChanges:!0,J_:!0});return Ev(s,h)}(await eh(e),e.asyncQueue,t,n,r)),r.promise}function X5(e,t,n={}){const r=new Pr;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new Cv({next:f=>{o.enqueueAndForget(()=>Iv(s,h)),f.fromCache&&l.source==="server"?u.reject(new L(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new Tv(a,d,{includeMetadataChanges:!0,J_:!0});return Ev(s,h)}(await eh(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function _A(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const px=new Map;/**
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
 */function wA(e,t,n){if(!n)throw new L(A.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function J5(e,t,n,r){if(t===!0&&r===!0)throw new L(A.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function gx(e){if(!F.isDocumentKey(e))throw new L(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function mx(e){if(F.isDocumentKey(e))throw new L(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Pf(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Q()}function Nn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pf(e);throw new L(A.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Z5(e,t){if(t<=0)throw new L(A.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */class yx{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}J5("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_A((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Av{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yx({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new L(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yx(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _$;switch(r.type){case"firstParty":return new E$(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=px.get(n);r&&(V("ComponentProvider","Removing Datastore"),px.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Br{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Br(this.firestore,t,this._query)}}class It{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class wi extends Br{constructor(t,n,r){super(t,n,xf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new F(t))}withConverter(t){return new wi(this.firestore,t,this._path)}}function vx(e,t,...n){if(e=qe(e),wA("collection","path",t),e instanceof Av){const r=Se.fromString(t,...n);return mx(r),new wi(e,null,r)}{if(!(e instanceof It||e instanceof wi))throw new L(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Se.fromString(t,...n));return mx(r),new wi(e.firestore,null,r)}}function Xu(e,t,...n){if(e=qe(e),arguments.length===1&&(t=xC.newId()),wA("doc","path",t),e instanceof Av){const r=Se.fromString(t,...n);return gx(r),new It(e,null,new F(r))}{if(!(e instanceof It||e instanceof wi))throw new L(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Se.fromString(t,...n));return gx(r),new It(e.firestore,e instanceof wi?e.converter:null,new F(r))}}/**
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
 */class eV{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new rA(this,"async_queue_retry"),this.iu=()=>{const n=Kp();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=Kp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=Kp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Pr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Nc(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Or("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=wv.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&Q()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}function _x(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Ss extends Av{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new eV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xA(this),this._firestoreClient.terminate()}}function tV(e,t,n){n||(n="(default)");const r=nf(e,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(zl(s,t))return i;throw new L(A.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new L(A.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:n})}function bf(e){return e._firestoreClient||xA(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function xA(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,d){return new M$(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,_A(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new q5(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class ta{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ta(kt.fromBase64String(t))}catch(n){throw new L(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ta(kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Nf{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new L(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class jf{constructor(t){this._methodName=t}}/**
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
 */class Rv{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new L(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new L(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ce(this._lat,t._lat)||ce(this._long,t._long)}}/**
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
 */const nV=/^__.*__$/;class rV{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Ui(t,this.data,this.fieldMask,n,this.fieldTransforms):new jc(t,this.data,n,this.fieldTransforms)}}class EA{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Ui(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function IA(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Mf{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Mf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return th(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(IA(this.Iu)&&nV.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class iV{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Cf(t)}pu(t,n,r,i=!1){return new Mf({Iu:t,methodName:n,gu:r,path:lt.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pv(e){const t=e._freezeSettings(),n=Cf(e._databaseId);return new iV(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sV(e,t,n,r,i,s={}){const o=e.pu(s.merge||s.mergeFields?2:0,t,n,i);bv("Data must be an object, but it was:",o,r);const a=SA(r,o);let l,u;if(s.merge)l=new Jt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const f=Xm(t,h,n);if(!o.contains(f))throw new L(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);kA(d,f)||d.push(f)}l=new Jt(d),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new rV(new Ft(a),l,u)}class Lf extends jf{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Lf}}function oV(e,t,n){return new Mf({Iu:3,gu:t.settings.gu,methodName:e._methodName,du:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class aV extends jf{constructor(t,n){super(t),this.yu=n}_toFieldTransform(t){const n=oV(this,t,!0),r=this.yu.map(s=>Ea(s,n)),i=new Jo(r);return new iO(t.path,i)}isEqual(t){return this===t}}function lV(e,t,n,r){const i=e.pu(1,t,n);bv("Data must be an object, but it was:",i,r);const s=[],o=Ft.empty();Ds(r,(l,u)=>{const d=Nv(t,l,n);u=qe(u);const h=i.Ru(d);if(u instanceof Lf)s.push(d);else{const f=Ea(u,h);f!=null&&(s.push(d),o.set(d,f))}});const a=new Jt(s);return new EA(o,a,i.fieldTransforms)}function cV(e,t,n,r,i,s){const o=e.pu(1,t,n),a=[Xm(t,r,n)],l=[i];if(s.length%2!=0)throw new L(A.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Xm(t,s[f])),l.push(s[f+1]);const u=[],d=Ft.empty();for(let f=a.length-1;f>=0;--f)if(!kA(u,a[f])){const p=a[f];let m=l[f];m=qe(m);const _=o.Ru(p);if(m instanceof Lf)u.push(p);else{const w=Ea(m,_);w!=null&&(u.push(p),d.set(p,w))}}const h=new Jt(u);return new EA(d,h,o.fieldTransforms)}function uV(e,t,n,r=!1){return Ea(n,e.pu(r?4:3,t))}function Ea(e,t){if(TA(e=qe(e)))return bv("Unsupported field value:",t,e),SA(e,t);if(e instanceof jf)return function(r,i){if(!IA(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ea(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:Jd(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jd(i.serializer,s)}}if(r instanceof Rv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ta)return{bytesValue:KC(i.serializer,r._byteString)};if(r instanceof It){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:fv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Pf(r)}`)}(e,t)}function SA(e,t){const n={};return EC(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ds(e,(r,i)=>{const s=Ea(i,t.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function TA(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Ye||e instanceof Rv||e instanceof ta||e instanceof It||e instanceof jf)}function bv(e,t,n){if(!TA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Pf(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function Xm(e,t,n){if((t=qe(t))instanceof Nf)return t._internalPath;if(typeof t=="string")return Nv(e,t);throw th("Field path arguments must be of type string or ",e,!1,void 0,n)}const dV=new RegExp("[~\\*/\\[\\]]");function Nv(e,t,n){if(t.search(dV)>=0)throw th(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Nf(...t.split("."))._internalPath}catch{throw th(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function th(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(A.INVALID_ARGUMENT,a+e+l)}function kA(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class CA{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new hV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Df("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hV extends CA{data(){return super.data()}}function Df(e,t){return typeof t=="string"?Nv(e,t):t instanceof Nf?t._internalPath:t._delegate._internalPath}/**
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
 */function AA(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new L(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jv{}class Mv extends jv{}function Nt(e,t,...n){let r=[];t instanceof jv&&r.push(t),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Ia).length,a=s.filter(l=>l instanceof $c).length;if(o>1||o>0&&a>0)throw new L(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class $c extends Mv{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new $c(t,n,r)}_apply(t){const n=this._parse(t);return RA(t._query,n),new Br(t.firestore,t.converter,Hm(t._query,n))}_parse(t){const n=Pv(t.firestore);return function(s,o,a,l,u,d,h){let f;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new L(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){xx(h,d);const p=[];for(const m of h)p.push(wx(l,s,m));f={arrayValue:{values:p}}}else f=wx(l,s,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||xx(h,d),f=uV(a,o,h,d==="in"||d==="not-in");return He.create(u,d,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Pt(e,t,n){const r=t,i=Df("where",e);return $c._create(i,r,n)}class Ia extends jv{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Ia(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Un.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)RA(o,l),o=Hm(o,l)}(t._query,n),new Br(t.firestore,t.converter,Hm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function fV(...e){return e.forEach(t=>PA("or",t)),Ia._create("or",e)}function pV(...e){return e.forEach(t=>PA("and",t)),Ia._create("and",e)}class Lv extends Mv{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Lv(t,n)}_apply(t){const n=function(i,s,o){if(i.startAt!==null)throw new L(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rc(s,o)}(t._query,this._field,this._direction);return new Br(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new _a(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,n))}}function Zn(e,t="asc"){const n=t,r=Df("orderBy",e);return Lv._create(r,n)}class Dv extends Mv{constructor(t,n,r){super(),this.type=t,this._limit=n,this._limitType=r}static _create(t,n,r){return new Dv(t,n,r)}_apply(t){return new Br(t.firestore,t.converter,Kd(t._query,this._limit,this._limitType))}}function xi(e){return Z5("limit",e),Dv._create("limit",e,"F")}function wx(e,t,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new L(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bC(t)&&n.indexOf("/")!==-1)throw new L(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Se.fromString(n));if(!F.isDocumentKey(r))throw new L(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zw(e,new F(r))}if(n instanceof It)return zw(e,n._key);throw new L(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pf(n)}.`)}function xx(e,t){if(!Array.isArray(e)||e.length===0)throw new L(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function RA(e,t){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new L(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function PA(e,t){if(!(t instanceof $c||t instanceof Ia))throw new L(A.INVALID_ARGUMENT,`Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class gV{convertValue(t,n="none"){switch(Is(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Es(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Q()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Ds(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Rv(Fe(t.latitude),Fe(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=av(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ec(t));default:return null}}convertTimestamp(t){const n=Pi(t);return new Ye(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Se.fromString(t);ye(eA(r));const i=new tc(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(n)||Or(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function mV(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Ya{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class bA extends CA{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Df("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ju extends bA{data(t={}){return super.data(t)}}class NA{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ya(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Ju(this._firestore,this._userDataWriter,r.key,r,new Ya(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ya(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ya(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:yV(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yV(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function vV(e){e=Nn(e,It);const t=Nn(e.firestore,Ss);return Y5(bf(t),e._key).then(n=>LA(t,e,n))}class $v extends gV{constructor(t){super(),this.firestore=t}convertBytes(t){return new ta(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,n)}}function jt(e){e=Nn(e,Br);const t=Nn(e.firestore,Ss),n=bf(t),r=new $v(t);return AA(e._query),X5(n,e._query).then(i=>new NA(t,r,e,i))}function jA(e,t,n){e=Nn(e,It);const r=Nn(e.firestore,Ss),i=mV(e.converter,t,n);return MA(r,[sV(Pv(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,sr.none())])}function _V(e,t,n,...r){e=Nn(e,It);const i=Nn(e.firestore,Ss),s=Pv(i);let o;return o=typeof(t=qe(t))=="string"||t instanceof Nf?cV(s,"updateDoc",e._key,t,n,r):lV(s,"updateDoc",e._key,t),MA(i,[o.toMutation(e._key,sr.exists(!0))])}function wV(e,...t){var n,r,i;e=qe(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||_x(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(_x(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,d;if(e instanceof It)u=Nn(e.firestore,Ss),d=xf(e._key.path),l={next:h=>{t[o]&&t[o](LA(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Nn(e,Br);u=Nn(h.firestore,Ss),d=h._query;const f=new $v(u);l={next:p=>{t[o]&&t[o](new NA(u,f,h,p))},error:t[o+1],complete:t[o+2]},AA(e._query)}return function(f,p,m,_){const w=new Cv(_),g=new Tv(p,w,m);return f.asyncQueue.enqueueAndForget(async()=>Ev(await eh(f),g)),()=>{w.Na(),f.asyncQueue.enqueueAndForget(async()=>Iv(await eh(f),g))}}(bf(u),d,a,l)}function MA(e,t){return function(r,i){const s=new Pr;return r.asyncQueue.enqueueAndForget(async()=>D5(await K5(r),i,s)),s.promise}(bf(e),t)}function LA(e,t,n){const r=n.docs.get(t._key),i=new $v(e);return new bA(e,i,t._key,r,new Ya(n.hasPendingWrites,n.fromCache),t.converter)}function xV(...e){return new aV("arrayUnion",e)}(function(t,n=!0){(function(i){va=i})(Ms),ws(new Ai("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ss(new w$(r.getProvider("auth-internal")),new S$(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tc(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),rr(Ow,"4.4.0",t),rr(Ow,"4.4.0","esm2017")})();var EV="firebase",IV="10.7.1";/**
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
 */rr(EV,IV,"app");function DA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SV=DA,$A=new xc("auth","Firebase",DA());/**
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
 */const nh=new My("@firebase/auth");function TV(e,...t){nh.logLevel<=se.WARN&&nh.warn(`Auth (${Ms}): ${e}`,...t)}function Zu(e,...t){nh.logLevel<=se.ERROR&&nh.error(`Auth (${Ms}): ${e}`,...t)}/**
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
 */function Fn(e,...t){throw Ov(e,...t)}function ar(e,...t){return Ov(e,...t)}function kV(e,t,n){const r=Object.assign(Object.assign({},SV()),{[t]:n});return new xc("auth","Firebase",r).create(t,{appName:e.name})}function Ov(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return $A.create(e,...t)}function G(e,t,...n){if(!e)throw Ov(t,...n)}function Tr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Zu(t),new Error(t)}function Ur(e,t){e||Tr(t)}/**
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
 */function Jm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function CV(){return Ex()==="http:"||Ex()==="https:"}function Ex(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function AV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CV()||KL()||"connection"in navigator)?navigator.onLine:!0}function RV(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Oc{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ur(n>t,"Short delay should be less than long delay!"),this.isMobile=QL()||YL()}get(){return AV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vv(e,t){Ur(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class OA{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bV=new Oc(3e4,6e4);function Fi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zi(e,t,n,r,i={}){return VA(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ec(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),OA.fetch()(UA(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function VA(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},PV),t);try{const i=new jV(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Su(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Su(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Su(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Su(e,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kV(e,d,u);Fn(e,d)}}catch(i){if(i instanceof pr)throw i;Fn(e,"network-request-failed",{message:String(i)})}}async function Vc(e,t,n,r,i={}){const s=await zi(e,t,n,r,i);return"mfaPendingCredential"in s&&Fn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function UA(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Vv(e.config,i):`${e.config.apiScheme}://${i}`}function NV(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jV{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ar(this.auth,"network-request-failed")),bV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Su(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ar(e,t,r);return i.customData._tokenResponse=n,i}function Ix(e){return e!==void 0&&e.enterprise!==void 0}class MV{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return NV(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function LV(e,t){return zi(e,"GET","/v2/recaptchaConfig",Fi(e,t))}/**
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
 */async function DV(e,t){return zi(e,"POST","/v1/accounts:delete",t)}async function $V(e,t){return zi(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function gl(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function OV(e,t=!1){const n=qe(e),r=await n.getIdToken(t),i=Uv(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:gl(Xp(i.auth_time)),issuedAtTime:gl(Xp(i.iat)),expirationTime:gl(Xp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xp(e){return Number(e)*1e3}function Uv(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Zu("JWT malformed, contained fewer than 3 sections"),null;try{const i=lk(n);return i?JSON.parse(i):(Zu("Failed to decode base64 JWT payload"),null)}catch(i){return Zu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function VV(e){const t=Uv(e);return G(t,"internal-error"),G(typeof t.exp<"u","internal-error"),G(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function sc(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof pr&&UV(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function UV({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class FV{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class FA{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gl(this.lastLoginAt),this.creationTime=gl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rh(e){var t;const n=e.auth,r=await e.getIdToken(),i=await sc(e,$V(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?HV(s.providerUserInfo):[],a=BV(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new FA(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function zV(e){const t=qe(e);await rh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function BV(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function HV(e){return e.map(t=>{var{providerId:n}=t,r=ry(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WV(e,t){const n=await VA(e,{},async()=>{const r=Ec({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=UA(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",OA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qV(e,t){return zi(e,"POST","/v2/accounts:revokeToken",Fi(e,t))}/**
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
 */class oc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){G(t.idToken,"internal-error"),G(typeof t.idToken<"u","internal-error"),G(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):VV(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return G(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WV(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new oc;return r&&(G(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new oc,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
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
 */function Gr(e,t){G(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ds{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=ry(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new FA(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await sc(this,this.stsTokenManager.getToken(this.auth,t));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return OV(this,t)}reload(){return zV(this)}_assign(t){this!==t&&(G(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ds(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await rh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await sc(this,DV(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:E,isAnonymous:T,providerData:k,stsTokenManager:I}=n;G(v&&I,t,"internal-error");const C=oc.fromJSON(this.name,I);G(typeof v=="string",t,"internal-error"),Gr(h,t.name),Gr(f,t.name),G(typeof E=="boolean",t,"internal-error"),G(typeof T=="boolean",t,"internal-error"),Gr(p,t.name),Gr(m,t.name),Gr(_,t.name),Gr(w,t.name),Gr(g,t.name),Gr(y,t.name);const $=new ds({uid:v,auth:t,email:f,emailVerified:E,displayName:h,isAnonymous:T,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:C,createdAt:g,lastLoginAt:y});return k&&Array.isArray(k)&&($.providerData=k.map(z=>Object.assign({},z))),w&&($._redirectEventId=w),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new oc;i.updateFromServerResponse(n);const s=new ds({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await rh(s),s}}/**
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
 */const Sx=new Map;function kr(e){Ur(e instanceof Function,"Expected a class definition");let t=Sx.get(e);return t?(Ur(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Sx.set(e,t),t)}/**
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
 */class zA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}zA.type="NONE";const Tx=zA;/**
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
 */function ed(e,t,n){return`firebase:${e}:${t}:${n}`}class ko{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ed(this.userKey,i.apiKey,s),this.fullPersistenceKey=ed("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ds._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ko(kr(Tx),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||kr(Tx);const o=ed(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const h=ds._fromJSON(t,d);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ko(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ko(s,t,r))}}/**
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
 */function kx(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(WA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(BA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(GA(t))return"Blackberry";if(QA(t))return"Webos";if(Fv(t))return"Safari";if((t.includes("chrome/")||HA(t))&&!t.includes("edge/"))return"Chrome";if(qA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function BA(e=Tt()){return/firefox\//i.test(e)}function Fv(e=Tt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function HA(e=Tt()){return/crios\//i.test(e)}function WA(e=Tt()){return/iemobile/i.test(e)}function qA(e=Tt()){return/android/i.test(e)}function GA(e=Tt()){return/blackberry/i.test(e)}function QA(e=Tt()){return/webos/i.test(e)}function $f(e=Tt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function GV(e=Tt()){var t;return $f(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function QV(){return XL()&&document.documentMode===10}function KA(e=Tt()){return $f(e)||qA(e)||QA(e)||GA(e)||/windows phone/i.test(e)||WA(e)}function KV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function YA(e,t=[]){let n;switch(e){case"Browser":n=kx(Tt());break;case"Worker":n=`${kx(Tt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ms}/${r}`}/**
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
 */class YV{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function XV(e,t={}){return zi(e,"GET","/v2/passwordPolicy",Fi(e,t))}/**
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
 */const JV=6;class ZV{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:JV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class e9{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cx(this),this.idTokenSubscription=new Cx(this),this.beforeStateQueue=new YV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$A,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=kr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ko.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await rh(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=RV()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?qe(t):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&G(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await XV(this),n=new ZV(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new xc("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qV(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&kr(t)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await ko.create(this,[kr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=YA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&TV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Os(e){return qe(e)}class Cx{constructor(t){this.auth=t,this.observer=null,this.addObserver=iD(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function t9(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function XA(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ar("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",t9().appendChild(r)})}function n9(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const r9="https://www.google.com/recaptcha/enterprise.js?render=",i9="recaptcha-enterprise",s9="NO_RECAPTCHA";class o9{constructor(t){this.type=i9,this.auth=Os(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{LV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new MV(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ix(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(s9)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ix(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}XA(r9+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ax(e,t,n,r=!1){const i=new o9(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Zm(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ax(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ax(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
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
 */function a9(e,t){const n=nf(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zl(s,t??{}))return i;Fn(i,"already-initialized")}return n.initialize({options:t})}function l9(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kr);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function c9(e,t,n){const r=Os(e);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=JA(t),{host:o,port:a}=u9(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||d9()}function JA(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function u9(e){const t=JA(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Rx(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Rx(o)}}}function Rx(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function d9(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class zv{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Tr("not implemented")}_getIdTokenResponse(t){return Tr("not implemented")}_linkToIdToken(t,n){return Tr("not implemented")}_getReauthenticationResolver(t){return Tr("not implemented")}}async function h9(e,t){return zi(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function f9(e,t){return Vc(e,"POST","/v1/accounts:signInWithPassword",Fi(e,t))}/**
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
 */async function p9(e,t){return Vc(e,"POST","/v1/accounts:signInWithEmailLink",Fi(e,t))}async function g9(e,t){return Vc(e,"POST","/v1/accounts:signInWithEmailLink",Fi(e,t))}/**
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
 */class ac extends zv{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ac(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ac(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zm(t,n,"signInWithPassword",f9);case"emailLink":return p9(t,{email:this._email,oobCode:this._password});default:Fn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zm(t,r,"signUpPassword",h9);case"emailLink":return g9(t,{idToken:n,email:this._email,oobCode:this._password});default:Fn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Co(e,t){return Vc(e,"POST","/v1/accounts:signInWithIdp",Fi(e,t))}/**
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
 */const m9="http://localhost";class Ts extends zv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ts(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=ry(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ts(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Co(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Co(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Co(t,n)}buildRequest(){const t={requestUri:m9,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ec(n)}return t}}/**
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
 */function y9(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function v9(e){const t=Ha(Wa(e)).link,n=t?Ha(Wa(t)).deep_link_id:null,r=Ha(Wa(e)).deep_link_id;return(r?Ha(Wa(r)).link:null)||r||n||t||e}class Bv{constructor(t){var n,r,i,s,o,a;const l=Ha(Wa(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=y9((i=l.mode)!==null&&i!==void 0?i:null);G(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=v9(t);try{return new Bv(n)}catch{return null}}}/**
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
 */class Sa{constructor(){this.providerId=Sa.PROVIDER_ID}static credential(t,n){return ac._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Bv.parseLink(n);return G(r,"argument-error"),ac._fromEmailAndCode(t,r.code,r.tenantId)}}Sa.PROVIDER_ID="password";Sa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ZA{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Uc extends ZA{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zr extends Uc{constructor(){super("facebook.com")}static credential(t){return Ts._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Zr.credentialFromTaggedObject(t)}static credentialFromError(t){return Zr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Zr.credential(t.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
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
 */class ei extends Uc{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ts._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ei.credentialFromTaggedObject(t)}static credentialFromError(t){return ei.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return ei.credential(n,r)}catch{return null}}}ei.GOOGLE_SIGN_IN_METHOD="google.com";ei.PROVIDER_ID="google.com";/**
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
 */class ti extends Uc{constructor(){super("github.com")}static credential(t){return Ts._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ti.credentialFromTaggedObject(t)}static credentialFromError(t){return ti.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ti.credential(t.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
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
 */class ni extends Uc{constructor(){super("twitter.com")}static credential(t,n){return Ts._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ni.credentialFromTaggedObject(t)}static credentialFromError(t){return ni.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ni.credential(n,r)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
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
 */async function _9(e,t){return Vc(e,"POST","/v1/accounts:signUp",Fi(e,t))}/**
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
 */class ks{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await ds._fromIdTokenResponse(t,r,i),o=Px(r);return new ks({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Px(r);return new ks({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Px(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ih extends pr{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ih.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ih(t,n,r,i)}}function eR(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ih._fromErrorAndOperation(e,s,t,r):s})}async function w9(e,t,n=!1){const r=await sc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ks._forOperation(e,"link",r)}/**
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
 */async function x9(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await sc(e,eR(r,i,t,e),n);G(s.idToken,r,"internal-error");const o=Uv(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(e.uid===a,r,"user-mismatch"),ks._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Fn(r,"user-mismatch"),s}}/**
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
 */async function tR(e,t,n=!1){const r="signIn",i=await eR(e,r,t),s=await ks._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function E9(e,t){return tR(Os(e),t)}/**
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
 */async function nR(e){const t=Os(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function I9(e,t,n){const r=Os(e),o=await Zm(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_9).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&nR(e),l}),a=await ks._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function S9(e,t,n){return E9(qe(e),Sa.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nR(e),r})}function T9(e,t,n,r){return qe(e).onIdTokenChanged(t,n,r)}function k9(e,t,n){return qe(e).beforeAuthStateChanged(t,n)}function C9(e,t,n,r){return qe(e).onAuthStateChanged(t,n,r)}function A9(e){return qe(e).signOut()}const sh="__sak";/**
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
 */class rR{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sh,"1"),this.storage.removeItem(sh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function R9(){const e=Tt();return Fv(e)||$f(e)}const P9=1e3,b9=10;class iR extends rR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=R9()&&KV(),this.fallbackToPolling=KA(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QV()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,b9):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},P9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}iR.type="LOCAL";const N9=iR;/**
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
 */class sR extends rR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}sR.type="SESSION";const oR=sR;/**
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
 */function j9(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Of{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Of(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await j9(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Of.receivers=[];/**
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
 */function Hv(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class M9{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Hv("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function lr(){return window}function L9(e){lr().location.href=e}/**
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
 */function aR(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function D9(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $9(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function O9(){return aR()?self:null}/**
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
 */const lR="firebaseLocalStorageDb",V9=1,oh="firebaseLocalStorage",cR="fbase_key";class Fc{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vf(e,t){return e.transaction([oh],t?"readwrite":"readonly").objectStore(oh)}function U9(){const e=indexedDB.deleteDatabase(lR);return new Fc(e).toPromise()}function e0(){const e=indexedDB.open(lR,V9);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(oh,{keyPath:cR})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(oh)?t(r):(r.close(),await U9(),t(await e0()))})})}async function bx(e,t,n){const r=Vf(e,!0).put({[cR]:t,value:n});return new Fc(r).toPromise()}async function F9(e,t){const n=Vf(e,!1).get(t),r=await new Fc(n).toPromise();return r===void 0?null:r.value}function Nx(e,t){const n=Vf(e,!0).delete(t);return new Fc(n).toPromise()}const z9=800,B9=3;class uR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await e0(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>B9)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Of._getInstance(O9()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await D9(),!this.activeServiceWorker)return;this.sender=new M9(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||$9()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await e0();return await bx(t,sh,"1"),await Nx(t,sh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bx(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>F9(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nx(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Vf(i,!1).getAll();return new Fc(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uR.type="LOCAL";const H9=uR;new Oc(3e4,6e4);/**
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
 */function W9(e,t){return t?kr(t):(G(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Wv extends zv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Co(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Co(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Co(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function q9(e){return tR(e.auth,new Wv(e),e.bypassAuthState)}function G9(e){const{auth:t,user:n}=e;return G(n,t,"internal-error"),x9(n,new Wv(e),e.bypassAuthState)}async function Q9(e){const{auth:t,user:n}=e;return G(n,t,"internal-error"),w9(n,new Wv(e),e.bypassAuthState)}/**
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
 */class dR{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return q9;case"linkViaPopup":case"linkViaRedirect":return Q9;case"reauthViaPopup":case"reauthViaRedirect":return G9;default:Fn(this.auth,"internal-error")}}resolve(t){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const K9=new Oc(2e3,1e4);class fo extends dR{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fo.currentPopupAction&&fo.currentPopupAction.cancel(),fo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return G(t,this.auth,"internal-error"),t}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const t=Hv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fo.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,K9.get())};t()}}fo.currentPopupAction=null;/**
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
 */const Y9="pendingRedirect",td=new Map;class X9 extends dR{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=td.get(this.auth._key());if(!t){try{const r=await J9(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}td.set(this.auth._key(),t)}return this.bypassAuthState||td.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function J9(e,t){const n=t6(t),r=e6(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Z9(e,t){td.set(e._key(),t)}function e6(e){return kr(e._redirectPersistence)}function t6(e){return ed(Y9,e.config.apiKey,e.name)}async function n6(e,t,n=!1){const r=Os(e),i=W9(r,t),o=await new X9(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const r6=10*60*1e3;class i6{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!s6(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!hR(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ar(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=r6&&this.cachedEventUids.clear(),this.cachedEventUids.has(jx(t))}saveEventToCache(t){this.cachedEventUids.add(jx(t)),this.lastProcessedEventTime=Date.now()}}function jx(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function hR({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function s6(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hR(e);default:return!1}}/**
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
 */async function o6(e,t={}){return zi(e,"GET","/v1/projects",t)}/**
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
 */const a6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,l6=/^https?/;async function c6(e){if(e.config.emulator)return;const{authorizedDomains:t}=await o6(e);for(const n of t)try{if(u6(n))return}catch{}Fn(e,"unauthorized-domain")}function u6(e){const t=Jm(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!l6.test(n))return!1;if(a6.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const d6=new Oc(3e4,6e4);function Mx(){const e=lr().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function h6(e){return new Promise((t,n)=>{var r,i,s;function o(){Mx(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mx(),n(ar(e,"network-request-failed"))},timeout:d6.get()})}if(!((i=(r=lr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=lr().gapi)===null||s===void 0)&&s.load)o();else{const a=n9("iframefcb");return lr()[a]=()=>{gapi.load?o():n(ar(e,"network-request-failed"))},XA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw nd=null,t})}let nd=null;function f6(e){return nd=nd||h6(e),nd}/**
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
 */const p6=new Oc(5e3,15e3),g6="__/auth/iframe",m6="emulator/auth/iframe",y6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},v6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _6(e){const t=e.config;G(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vv(t,m6):`https://${e.config.authDomain}/${g6}`,r={apiKey:t.apiKey,appName:e.name,v:Ms},i=v6.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ec(r).slice(1)}`}async function w6(e){const t=await f6(e),n=lr().gapi;return G(n,e,"internal-error"),t.open({where:document.body,url:_6(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:y6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ar(e,"network-request-failed"),a=lr().setTimeout(()=>{s(o)},p6.get());function l(){lr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const x6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E6=500,I6=600,S6="_blank",T6="http://localhost";class Lx{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k6(e,t,n,r=E6,i=I6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},x6),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Tt().toLowerCase();n&&(a=HA(u)?S6:n),BA(u)&&(t=t||T6,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(GV(u)&&a!=="_self")return C6(t||"",a),new Lx(null);const h=window.open(t||"",a,d);G(h,e,"popup-blocked");try{h.focus()}catch{}return new Lx(h)}function C6(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const A6="__/auth/handler",R6="emulator/auth/handler",P6=encodeURIComponent("fac");async function Dx(e,t,n,r,i,s){G(e.config.authDomain,e,"auth-domain-config-required"),G(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ms,eventId:i};if(t instanceof ZA){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",rD(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))o[d]=h}if(t instanceof Uc){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${P6}=${encodeURIComponent(l)}`:"";return`${b6(e)}?${Ec(a).slice(1)}${u}`}function b6({config:e}){return e.emulator?Vv(e,R6):`https://${e.authDomain}/${A6}`}/**
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
 */const Jp="webStorageSupport";class N6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oR,this._completeRedirectFn=n6,this._overrideRedirectResult=Z9}async _openPopup(t,n,r,i){var s;Ur((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Dx(t,n,r,Jm(),i);return k6(t,o,Hv())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Dx(t,n,r,Jm(),i);return L9(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ur(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await w6(t),r=new i6(t);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Jp,{type:Jp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jp];o!==void 0&&n(!!o),Fn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=c6(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return KA()||Fv()||$f()}}const j6=N6;var $x="@firebase/auth",Ox="1.5.1";/**
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
 */class M6{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function L6(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function D6(e){ws(new Ai("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:YA(e)},u=new e9(r,i,s,l);return l9(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ws(new Ai("auth-internal",t=>{const n=Os(t.getProvider("auth").getImmediate());return(r=>new M6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr($x,Ox,L6(e)),rr($x,Ox,"esm2017")}/**
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
 */const $6=5*60,O6=dk("authIdTokenMaxAge")||$6;let Vx=null;const V6=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>O6)return;const i=n==null?void 0:n.token;Vx!==i&&(Vx=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function U6(e=gk()){const t=nf(e,"auth");if(t.isInitialized())return t.getImmediate();const n=a9(e,{popupRedirectResolver:j6,persistence:[H9,N9,oR]}),r=dk("authTokenSyncURL");if(r){const s=V6(r);k9(n,s,()=>s(n.currentUser)),T9(n,o=>s(o))}const i=ck("auth");return i&&c9(n,`http://${i}`),n}D6("Browser");/**
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
 */const fR="firebasestorage.googleapis.com",F6="storageBucket",z6=2*60*1e3,B6=10*60*1e3;/**
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
 */class gr extends pr{constructor(t,n,r=0){super(Zp(t),`Firebase Storage: ${n} (${Zp(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,gr.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Zp(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ur;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ur||(ur={}));function Zp(e){return"storage/"+e}function H6(){const e="An unknown error occurred, please check the error payload for server response.";return new gr(ur.UNKNOWN,e)}function W6(){return new gr(ur.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function q6(){return new gr(ur.CANCELED,"User canceled the upload/download.")}function G6(e){return new gr(ur.INVALID_URL,"Invalid URL '"+e+"'.")}function Q6(e){return new gr(ur.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ux(e){return new gr(ur.INVALID_ARGUMENT,e)}function pR(){return new gr(ur.APP_DELETED,"The Firebase app was deleted.")}function K6(e){return new gr(ur.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Cn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Cn.makeFromUrl(t,n)}catch{return new Cn(t,"")}if(r.path==="")return r;throw Q6(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${d}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},_=n===fR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${w}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:p,indices:m,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const T=v[E],k=T.regex.exec(t);if(k){const I=k[T.indices.bucket];let C=k[T.indices.path];C||(C=""),r=new Cn(I,C),T.postModify(r);break}}if(r==null)throw G6(t);return r}}class Y6{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function X6(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...w){u||(u=!0,t.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,e(p,l())},w)}function f(){s&&clearTimeout(s)}function p(w,...g){if(u){f();return}if(w){f(),d.call(null,w,...g);return}if(l()||o){f(),d.call(null,w,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let m=!1;function _(w){m||(m=!0,f(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function J6(e){e(!1)}/**
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
 */function Z6(e){return e!==void 0}function Fx(e,t,n,r){if(r<t)throw Ux(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Ux(`Invalid value for '${e}'. Expected ${n} or less.`)}function eU(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function tU(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class nU{constructor(t,n,r,i,s,o,a,l,u,d,h,f=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Tu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ah.NO_ERROR,l=s.getStatus();if(!a||tU(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ah.ABORT;r(!1,new Tu(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Tu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Z6(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=H6();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?pR():q6();o(l)}else{const l=W6();o(l)}};this.canceled_?n(!1,new Tu(!1,null,!0)):this.backoffId_=X6(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&J6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tu{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function rU(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function iU(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function sU(e,t){t&&(e["X-Firebase-GMPID"]=t)}function oU(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function aU(e,t,n,r,i,s,o=!0){const a=eU(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return sU(u,t),rU(u,n),iU(u,s),oU(u,r),new nU(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
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
 */function lU(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function cU(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class lh{constructor(t,n){this._service=t,n instanceof Cn?this._location=n:this._location=Cn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new lh(t,n)}get root(){const t=new Cn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cU(this._location.path)}get storage(){return this._service}get parent(){const t=lU(this._location.path);if(t===null)return null;const n=new Cn(this._location.bucket,t);return new lh(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw K6(t)}}function zx(e,t){const n=t==null?void 0:t[F6];return n==null?null:Cn.makeFromBucketSpec(n,e)}function uU(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:GL(i,e.app.options.projectId))}class dU{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=fR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=z6,this._maxUploadRetryTime=B6,this._requests=new Set,i!=null?this._bucket=Cn.makeFromBucketSpec(i,this._host):this._bucket=zx(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Cn.makeFromBucketSpec(this._url,t):this._bucket=zx(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Fx("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Fx("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new lh(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new Y6(pR());{const o=aU(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Bx="@firebase/storage",Hx="0.12.0";/**
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
 */const gR="storage";function hU(e=gk(),t){e=qe(e);const r=nf(e,gR).getImmediate({identifier:t}),i=WL("storage");return i&&fU(r,...i),r}function fU(e,t,n,r={}){uU(e,t,n,r)}function pU(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new dU(n,r,i,t,Ms)}function gU(){ws(new Ai(gR,pU,"PUBLIC").setMultipleInstances(!0)),rr(Bx,Hx,""),rr(Bx,Hx,"esm2017")}gU();const wt=e=>e.docs.map(t=>t.data()),mU={apiKey:"AIzaSyBuDoETyUrO2RCDAlFMsW2uV-QmtCT8t6Y",authDomain:"soundbubble-27737.firebaseapp.com",projectId:"soundbubble-27737",storageBucket:"soundbubble-27737.appspot.com",messagingSenderId:"527274299416",appId:"1:527274299416:web:64b1ac2d05f4262df0736d",measurementId:"G-9TP9PEEV11"},qn=class qn{static get(t){return vx(this.firestore,t)}static getSubCollection(t,n){return vx(qn.firestore,`${t}/${n}`)}static async createUser(t,n){return await I9(this.auth,t,n)}static async setById(t,n,r){const i=await this.get(t),s=Xu(i,n);return await jA(s,r)}static async updateById(t,n,r){const i=await this.get(t),s=Xu(i,n);return await _V(s,r)}static async login(t,n){return await S9(this.auth,t,n)}static async logout(){return await A9(this.auth)}static onAuthStateChanged(t){return C9(this.auth,t)}static async getById(t,n){const r=this.get(t),i=Xu(r,n);return(await vV(i)).data()}static async listenTo(t,n,r,i){const s=[];i&&s.push(i);const o=Nt(this.get(t),r,...s);return wV(o,l=>{const u=wt(l);console.log("changed data"),n(u)})}};De(qn,"app",pk(mU)),De(qn,"auth",U6(qn.app)),De(qn,"storage",hU(qn.app)),De(qn,"firestore",tV(qn.app,{experimentalForceLongPolling:!1}));let Ee=qn;console.log({app:Ee});const Wx=e=>t=>`${e}. Причина: ${t}`,zc={operationFailed:Wx("Не удалось выполнить операцию"),loginFailed:Wx("Не удалось войти в аккаунт")},po=class po{static async getAllSongs(){try{const t=await jt(this.ref);return wt(t)}catch(t){return console.error(t),[]}}static async getTopSongs(t=10){try{const n=await jt(Nt(this.ref,Zn("listens","desc"),xi(t)));return wt(n)}catch(n){return console.error(n),[]}}static async getSongsByUserId(t){try{const n=await Ke.getUserByUid(t);return this.getSongsByUids((n==null?void 0:n.addedSongs)??[])}catch(n){return console.error(n),[]}}};De(po,"ref",Ee.get("songs")),De(po,"getSongByUid",async t=>{try{if(!t)throw new Error(zc.operationFailed("UID must be provided"));return Ee.getById("songs",t)}catch{throw new Error("Failed to get song by uid "+t)}}),De(po,"getSongsByUids",async(t,n)=>{if(t.length===0)return[];if(n){const i=[];i.push(Zn("listens","desc"));const s=Nt(Ee.get("songs"),Pt("id","in",t),...i),o=await jt(s);return wt(o)}const r=t.map(i=>po.getSongByUid(i));return Promise.all(r)});let sn=po;class Xa{static async getAuthorsSong(t,n){var o,a;const r=[],i=n;return i?(((o=i.ownSongs)==null?void 0:o.length)!==0&&r.push(Pt("uid","in",i.ownSongs)),((a=i.ownPlaylists)==null?void 0:a.length)!==0&&r.push(Pt("uid","in",i.ownPlaylists)),wt(await jt(Nt(this.ref,pV(Pt("variantsOfName","array-contains",t),fV(...r)),Zn("rank","desc"),xi(3))))):[]}static async getFinalSuggestions(t,n){var r,i;try{const s=t[0];if(t.length!==0)return this.savedSuggestion={place:s.place,id:s.uid,lastSearch:n},t;const o=n.replace(((r=this.savedSuggestion)==null?void 0:r.lastSearch)??"","");if(console.log(o),((i=this.savedSuggestion)==null?void 0:i.place)==="users")return await this.getAuthorsSong(o);const l=wt(await jt(Nt(this.ref,Pt("variantsOfName","array-contains",o),Pt("place","==","users")))).map(d=>d.uid),u=wt(await jt(Nt(Ke.ref,Pt("uid","in",l))));return u?(await Promise.all(u.map(async d=>await this.getAuthorsSong(this.savedSuggestion.lastSearch,d)))).flatMap(d=>d):[]}catch(s){return console.error(s),[]}}static async getSearch(t){try{const n=await jt(Nt(this.ref,Pt("variantsOfName","array-contains",t),Zn("rank","desc"),xi(10)));return wt(n)}catch(n){return console.error(n),[]}}static removeDuplicateSongs(t){const n={},r=[];return t.forEach(i=>{if(i){const s="id"in i?i.id:"uid"in i?i.uid:null;s&&!n[s]&&(r.push(i),n[s]=!0)}}),r}static async getResult(t,n=0){const r={playlists:vn.getPlaylistByUid,songs:sn.getSongByUid,users:Ke.getUserByUid},i=this.lastSuggestions.length!==t.length||this.lastSuggestions.findIndex((u,d)=>u.uid!==t[d].uid)!==-1;if(this.lastSuggestions=t,!i&&this.lastResult.length!==0)return this.lastResult;const s=t.map(async u=>await r[u.place](u.uid));let o=(await Promise.all(s)).flatMap(u=>u);const a=o[0];if(!a||o.length===0)return o;if("isAuthor"in a&&(a==null?void 0:a.isAuthor)&&"ownSongs"in a&&n!==0){const u=await Ke.getAuthorTopSongs(a.ownSongs,n),d=await Ke.getAuthorTopAlbums(a.ownPlaylists,3);console.log(d);const h=[a,...u,...d,...o];o=this.removeDuplicateSongs(h)}return this.lastResult=o,o}}De(Xa,"ref",Ee.get("search")),De(Xa,"savedSuggestion",null),De(Xa,"lastSuggestions",[]),De(Xa,"lastResult",[]);class qv extends Xa{static async getSearchSuggestions(t){try{if(t.length===0)return[];const n=await this.getSearch(t);console.log(t,n);const r=await this.getFinalSuggestions(n,t);return await this.getResult(r,3)}catch{throw new Error("Failed to get suggestions")}}static async getTopSearches(t=10){try{const n=await jt(Nt(this.ref,Zn("rank","desc"),xi(t)));return await this.getResult(wt(n),3)}catch(n){return console.error(n),[]}}static async getSearchResult(t){try{const n=await this.getSearch(t);return this.getResult(n,6)}catch{throw new Error("Failed to get search result")}}}class vn{static async addSongToPlaylists(t,n){try{if(!t)throw new Error("Song id not specified");if(!n.length)throw new Error("Playlist ids not specified");const r=n.map(i=>Ee.updateById("playlists",i,{songs:xV(t)}));return Promise.all(r)}catch(r){throw new Error(`Failed to add song to playlists ${t}, ${n}, ${r}`)}}}De(vn,"ref",Ee.get("playlists")),De(vn,"getPlaylistByUid",async t=>{try{if(!t)throw new Error(zc.operationFailed("UID must be provided"));return Ee.getById("playlists",t)}catch{throw new Error("Failed to get playlist by uid "+t)}}),De(vn,"getPlaylistsByUids",async t=>{if(t.length===0)return[];const n=Nt(Ee.get("playlists"),Pt("id","in",t)),r=await jt(n);return wt(r)});class Ke{static createUser({email:t,password:n}){try{return Ee.createUser(t,n)}catch(r){console.error(r)}}static async login({email:t,password:n}){try{return Ee.login(t,n)}catch(r){console.error(r)}}static async logout(){try{return Ee.logout()}catch(t){console.error(t)}}static async getUserByUid(t){try{if(!t)throw new Error(zc.loginFailed("UID must be provided"));return Ee.getById("users",t)}catch{throw new Error("Failed to get user by id: "+t)}}static async getUsersByUids(t,n){try{if((t??[]).length===0)return[];const r=[];n&&r.push(Zn("numberOfListenersPerMonth","desc"));const i=await jt(Nt(this.ref,Pt("uid","in",t),...r));return wt(i)}catch(r){return console.error(r),[]}}static async getAuthorTopSongs(t,n=3){try{if(t.length===0)return[];const r=await jt(Nt(sn.ref,Pt("id","in",t),Zn("listens","desc"),xi(n)));return wt(r)}catch(r){return console.error(r),[]}}static async getAuthorTopAlbums(t,n=3){try{if(t.length===0)return[];console.log(t);const r=await jt(Nt(vn.ref,Pt("id","in",t),xi(n)));return wt(r)}catch(r){return console.error(r),[]}}static async getSimilarAuthorsBySongs(t){try{if(t.length===0)return[];const n=[...new Set(t.flatMap(r=>r.authors.map(i=>i.uid)))];return await this.getUsersByUids(n,!0)}catch(n){return console.error(n),[]}}static async getTopAuthorsByListenings(t=10){try{const n=await jt(Nt(this.ref,Pt("isAuthor","==",!0),Zn("numberOfListenersPerMonth","desc"),xi(t)));return wt(n)}catch(n){return console.error(n),[]}}static async listenToUsersChanges(t,n){try{return await Ee.listenTo("users",n,Pt("uid","in",t),Zn("online","desc"))}catch{throw new Error("Failed to listen to users changes")}}}De(Ke,"ref",Ee.get("users")),De(Ke,"onAuthStateChanged",async t=>{try{return Ee.onAuthStateChanged(t)}catch(n){return console.error(n),null}});class mR{static async getSearchHistory(t){try{if(!t)throw new Error("userId is required in getSearchHistory");const n={playlists:vn.getPlaylistByUid,songs:sn.getSongByUid,users:Ke.getUserByUid},i=(await Ee.getById("searchHistory",t)).history.slice(0,10).map(async s=>await n[s.type](s.id));return Promise.all(i)}catch(n){return console.error(n),[]}}}De(mR,"ref",Ee.get("history"));class yR{static async getHistoryByUserId(t){try{const n=await Ee.getById("history",t),r=new Set(n.history);return await sn.getSongsByUids(Array.from(r))}catch{throw new Error("Failed to get history for user")}}}De(yR,"ref",Ee.get("history"));class Uf{static ownChatsQuery(t){return Nt(this.ref,Pt("participants","array-contains",t))}static async getChatsByUserId(t){try{const n=await jt(this.ownChatsQuery(t)),r=wt(n),i={};let s={};const o={},a=r.map(async l=>{var h,f;const{messages:u,chatData:d}=await this.getChatMessagesByChatId(l.id,"desc",1);s=Object.assign(s,d),i[l.id]=u[0],o[l.id]=(f=((h=u[0])==null?void 0:h.seenBy)??[])!=null&&f.includes(t)?0:1});return await Promise.all(a),{chats:r.sort((l,u)=>{var d,h;return((d=i[u.id])==null?void 0:d.sentTime)-((h=i[l.id])==null?void 0:h.sentTime)}),chatDataObject:s,lastMessages:i,unreadCount:o}}catch{throw new Error("Failed to get chats by user id: "+t)}}static async getChatMessagesByChatId(t,n,r){try{const i=[];r!==void 0&&i.push(xi(r));const s=Nt(Ee.getSubCollection("newChats",`${t}/messages`),Zn("sentTime",n??"asc"),...i),o=await jt(s),a=wt(o),l=a.map(async d=>[...await sn.getSongsByUids(d.attachedSongs),...await vn.getPlaylistsByUids(d.attachedAlbums),...await Ke.getUsersByUids(d.attachedAuthors)]),u=(await Promise.all(l)).reduce((d,h)=>(h.forEach(f=>{d["id"in f?f.id:f.uid]=f}),d),{});return{messages:a,chatData:u}}catch{throw new Error("Failed to get messages by chatId id: "+t)}}static async sendMessage(t,n){try{const r=Xu(Ee.firestore,`newChats/${t}/messages/${n.id}`);return await jA(r,n)}catch(r){throw new Error("Failed to send message"+r.toString())}}}De(Uf,"ref",Ee.get("newChats"));const yU=(e,t)=>N({clock:e.failData,source:t,fn:(n,r)=>({...n,error:r}),target:t}),vR=(e,t,n)=>N({clock:e.pending,source:t,fn:(r,i)=>({...r,[n??"loading"]:i}),target:t}),vU=e=>e instanceof Error?e.message:typeof e=="string"?e:"Ошибка",Gv=(e,t)=>{try{return e()}catch(n){throw new Error(zc[t](vU(n)))}},_U={data:null,error:null,userPlaylists:[]},wU={user:null,error:null,loading:!1,songs:[],playlists:[],similarAuthors:[],similarAuthorsLoading:!0},Vs=(e,t)=>N({clock:e.doneData,fn:n=>n,target:t}),Qv=Le(async e=>Gv(async()=>{const{email:t,password:n}=e;if(!t||!n)throw new Error(zc.loginFailed("Не указана почта или пароль"));await Ke.login(e)},"operationFailed")),xU=Le(()=>Gv(async()=>{await Ke.logout()},"operationFailed")),Kv=Le(async e=>Gv(async()=>{var r,i;const t=((i=(r=e.data)==null?void 0:r.addedSongs)==null?void 0:i.reverse())??[],n=await sn.getSongsByUids(t);return console.log({result:n}),n},"operationFailed")),Yv=Le(async e=>{try{if(!e.data)throw new Error("Failed to load added playlists");return await vn.getPlaylistsByUids(e.data.ownPlaylists)}catch{throw new Error("Failed to load added playlists")}}),Xv=Le(async e=>{try{if(!e.data)throw new Error("Failed to load added playlists");return await vn.getPlaylistsByUids(e.data.addedPlaylists)}catch{throw new Error("Failed to load added playlists")}}),Bc=Le(async e=>{try{const t=await Ke.getUserByUid(e),n=await sn.getSongsByUids((t==null?void 0:t.ownSongs)??[],!0),r=await vn.getPlaylistsByUids((t==null?void 0:t.ownPlaylists)??[]);return{user:t,songs:n,playlists:r}}catch{throw new Error("Failed to get user's page info")}}),Jv=Le(async e=>{try{return await Ke.getSimilarAuthorsBySongs(e)}catch{throw new Error("Failed to load similar authors")}}),_R=Le(async e=>{var t;try{const n=(t=e.data)==null?void 0:t.uid;return await mR.getSearchHistory(n)}catch{throw new Error("Failed to load search history")}}),wR=Le(async e=>{var t,n;try{const r=((n=(t=e.data)==null?void 0:t.friends)==null?void 0:n.filter(i=>i.status==="added").map(i=>i.uid))??[];await Ke.listenToUsersChanges(r,n1)}catch{throw new Error("Failed to load user friends")}}),xR=Le(async e=>{var t;try{const n=(t=e.data)==null?void 0:t.lastSongPlayed;return n?await sn.getSongByUid(n):null}catch{throw new Error("Failed to load last song played")}}),ER=Le(async()=>{try{await Ke.onAuthStateChanged(async e=>{const t=await Ke.getUserByUid(e==null?void 0:e.uid);console.log({userCred:e,user:t}),t1(t)})}catch{throw new Error("Failed to load user data")}}),Zv=Le(async e=>{var t;try{const n=((t=e.data)==null?void 0:t.addedAuthors)??[];console.log(n);const r=await Ke.getUsersByUids(n);return console.log(r),r}catch{throw new Error("Failed to load user added authors")}}),e1=U(),Oe=U(),EU=U(),t1=U(),IR=U(),IU=U(),SR=U(),TR=U(),n1=U(),kR=Sy(),qt=te(_U);qt.reset(Oe);const r1=te([]);r1.reset(Oe);const CR=te(null);CR.reset(Oe);const SU=te([]);SU.reset(Oe);const i1=te([]);i1.reset(Oe);const s1=te([]);s1.reset(Oe);const o1=te([]);o1.reset(Oe);const a1=te([]);a1.reset(Oe);const Fr=te(wU).reset(TR);Fr.reset(Oe);const AR=te([]);N({clock:kR.open,target:ER});N({clock:e1,target:Qv});N({clock:Oe,target:xU});N({clock:e1,source:qt,fn:e=>({...e,loggining:!0}),target:qt});N({clock:Qv.doneData,source:qt,fn:e=>({...e,loggining:!1}),target:qt});N({clock:Qv.failData,source:qt,fn:(e,t)=>({...e,error:t,loggining:!1}),target:qt});N({clock:n1,fn:e=>e,target:o1});N({clock:t1,source:qt,fn:(e,t)=>({...e,data:t,loggining:!1}),target:[qt,Kv,Yv,Xv,Zv,_R,wR,xR]});Vs(Kv,r1);Vs(Yv,i1);Vs(xR,CR);Vs(Xv,s1);Vs(Zv,AR);Vs(_R,a1);N({clock:IR,source:qt,fn:(e,t)=>({...e,logginining:t}),target:qt});N({clock:IU,target:Bc});vR(Bc,Fr,"loading");yU(Bc,Fr);N({clock:Bc.doneData,source:Fr,fn:(e,t)=>({...e,...t,similarAuthors:[]}),target:Fr});N({clock:SR,target:Jv});vR(Jv,Fr,"similarAuthorsLoading");N({clock:Jv.doneData,source:Fr,fn:(e,t)=>({...e,similarAuthors:t}),target:Fr});const fe={useUser:()=>xe([qt,ER.pending]),useSongLibrary:()=>xe([r1,Kv.pending]),useOwnPlaylists:()=>xe([i1,Yv.pending]),useAddedPlaylists:()=>xe([s1,Xv.pending]),useAddedAuthors:()=>xe([AR,Zv.pending]),useSearchHistory:()=>xe(a1),useUserPage:()=>xe(Fr),useFriends:()=>xe([o1,wR.pending]),events:{login:e1,logout:Oe,loadSimilarAuthors:SR,createUser:EU,setUser:t1,setLoggining:IR,loadUserPageFx:Bc,resetUserPage:TR,updateFriends:n1},gates:{useLoadUser:()=>Iy(kR)}},TU={opened:!1,title:"",content:null},RR=U(),PR=U(),lc=te(TU);N({clock:RR,source:lc,fn:(e,{title:t,content:n})=>({opened:!0,title:t,content:n}),target:lc});N({clock:PR,source:lc,fn:e=>({...e,opened:!1}),target:lc});const Lt={useModal:()=>xe(lc),events:{open:RR,close:PR}},Ta=Le(async e=>{try{return await Uf.getChatsByUserId(e)}catch(t){throw console.log(t),new Error(t.message)}}),l1=Le(async({chats:e,chatDataObject:t})=>{try{const r=e.flatMap(s=>s.participants).filter(s=>!t[s]).map(async s=>await Ke.getUserByUid(s));return(await Promise.all([...r])).flatMap(s=>s).reduce((s,o)=>(s["id"in o?o.id:o.uid]=o,s),{...t})}catch(n){throw new Error(n.message)}}),Hc=Le(async({chatId:e})=>{try{const t=await Uf.getChatMessagesByChatId(e);return{...t,messages:t.messages}}catch(t){throw new Error(t.message)}}),c1=Le(async({chatId:e,message:t})=>{try{await Uf.sendMessage(e,t),console.log("error never appeared")}catch(n){throw console.log(n),new Error(n.message)}}),u1=U(),bR=U(),NR=U(),kU=U(),d1=U(),jR=U(),MR=U(),LR=U(),na=te([]),Wc=te(""),on=te([]),Ff=te({}),h1=te(0),ra=te({}),ia=te({}),f1=te(null);na.reset(Oe);ra.reset(Oe);h1.reset(Oe);Wc.reset(Oe);on.reset(Oe);Ff.reset(Oe);ra.reset(Oe);ia.reset(Oe);f1.reset(Oe);const t0=Sy(),ch=qt.map(e=>{var t;return((t=e==null?void 0:e.data)==null?void 0:t.uid)??null}),CU=e=>Object.keys(e).reduce((t,n)=>(t+=e[n],t),0);N({clock:[t0.open,ch],source:{gateStatus:t0.status,userId:ch,chats:na},filter:({chats:e,userId:t,gateStatus:n})=>n&&t!==null&&e.length===0,fn:({userId:e})=>e,target:Ta});N({clock:Ta.doneData,fn:({chats:e})=>e,target:[na,u1]});N({clock:LR,source:{messages:on,userId:ch},filter:({userId:e})=>!!e,fn:({messages:e,userId:t},n)=>[...e].map(i=>(i.id===n&&i.seenBy.push(t),i)),target:on});N({clock:Ta.doneData,fn:({lastMessages:e})=>e,target:ia});N({clock:Ta.doneData,fn:e=>e,target:l1});N({clock:Ta.doneData,fn:({unreadCount:e})=>e,target:[Ff,u1]});N({clock:u1,source:Ff,fn:CU,target:h1});N({clock:l1.doneData,target:ra});N({clock:d1,fn:({chatId:e,message:{status:t,...n}})=>({chatId:e,message:n}),target:[c1]});N({clock:d1,source:on,fn:(e,{message:t})=>[...e,t],target:on});N({clock:c1.failData,source:on,fn:e=>(console.log("sending failed message"),e.map(t=>t.status==="pending"?{...t,status:"error"}:t)),target:on});N({clock:c1.done,source:on,fn:(e,{params:t})=>(console.log("done"),e.map(({status:n,...r})=>t.message.id===r.id?r:{status:n,...r})),target:on});N({clock:on.updates,source:Wc,fn:(e,t)=>({chatId:e,message:t.at(-1)}),target:jR});N({clock:jR,source:ia,filter:(e,{message:t})=>!!t,fn:(e,{chatId:t,message:n})=>({...e,[t]:n}),target:[ia,MR]});N({clock:MR,source:{chats:na,lastMessages:ia},fn:({chats:e,lastMessages:t})=>e.sort((n,r)=>t[r.id].sentTime-t[n.id].sentTime),target:na});N({clock:bR,fn:e=>e,target:Wc});N({clock:NR,source:ra,fn:(e,t)=>({...e,...t}),target:ra});N({clock:Wc,filter:e=>e.length!==0,fn:e=>({chatId:e,messages:[]}),target:Hc});N({clock:Hc.doneData,fn:({chatData:e})=>e,target:NR});N({clock:Hc.doneData,fn:({messages:e})=>e,target:[on]});N({clock:Hc.doneData,source:{currentMessages:on,userId:ch},filter:({userId:e,currentMessages:t})=>!!e&&!!t.length,fn:({currentMessages:e,userId:t})=>{var n;return((n=e.find(r=>!r.seenBy.includes(t)))==null?void 0:n.id)??null},target:f1});const Cr={useChats:()=>xe({chats:na,loadingChats:Ta.pending,currentChatId:Wc,currentChatMessages:on,currentChatMessagesLoading:Hc.pending,chatData:ra,loadingChatData:l1.pending,lastMessage:ia,unreadCounts:Ff,firstUnreadMessageId:f1}),useLoadChats:()=>Iy(t0),useChatUnreadCount:()=>xe(h1),events:{setCurrentChatId:bR,loadPreviousMessages:kU,sendMessage:d1,seenMessage:LR}},AU=x.aside`
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
`,RU=x.div`
    padding: 10px;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,qx=x.div`
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
`,PU=x(ik)`
    text-decoration: none;
    padding: 10px 10px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};

    &:hover {
        background: ${({theme:e})=>e.colors.hover};
    }

    &.active {
        & > div {
            opacity: 1;
            color: ${({theme:e})=>e.colors.blue.main};
        }
    }
`,Gx=x.div`
    font-size: 0.8rem;
    opacity: 0.3;
    color: ${({theme:e})=>e.colors.textColor};
    padding: 4px 10px;
    text-transform: uppercase;
`,bU=x.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 0 2px;
`,p1=x.span`
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
`,Cs=x.span`
    font-size: 0.8rem;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.textColor};
    opacity: 0.6;
`,NU=x.div`
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
`,eg=x.div`
    width: 6px;
    height: 6px;
    border-radius: 100%;
    opacity: 0;
    transform: scale(0);
    background: grey;
`,Qx=({isTyping:e=!0})=>e?c.jsxs(NU,{children:[c.jsx(eg,{}),c.jsx(eg,{}),c.jsx(eg,{})]}):null,DR=({typing:e,isGroupChat:t,children:n})=>t&&e.length>0?c.jsxs(P,{gap:8,children:[c.jsxs(Cs,{children:[e.map((r,i)=>(i!==0?", ":"")+(r==null?void 0:r.displayName))," typing"]}),c.jsx(Qx,{isTyping:!0})]}):e.length>0?c.jsxs(P,{gap:8,children:[c.jsx(Cs,{children:"Typing"}),c.jsx(Qx,{isTyping:!0})]}):n,$R=({isMine:e,sendStatus:t})=>!e||t==="Error"?null:t==="Pending"?c.jsx(Oj,{}):t==="Sent"?c.jsx(Nj,{}):c.jsx(jj,{}),zf=e=>{if(!e)return{status:"offline"};const t=new Date().getTime()-3e5,n=new Date().getTime()-18e5*4;if(e>t)return{status:"online"};const i=new Date(e),s=new Date(new Date().getTime()-i.getTime()).getMinutes(),o=Math.floor(s/60)>0?Math.floor(s/60)===1?"hour":"hours":"minutes";return e>n?{status:`last seen ${s} ${o} ago`}:{status:`last seen ${i.toLocaleDateString("ru-RU")}`}},jn=e=>c.jsx(ef,{...e,fallbackIcon:e.fallbackIcon??(e.isAuthor?en.author:en.user),borderRadius:"100%"}),jU=e=>{if((e==null?void 0:e.length)===0)return"linear-gradient(45deg, #c47200, #da471f)";switch(e==null?void 0:e[0]){case"A":case"D":case"G":case"J":case"X":return"linear-gradient(45deg, #b42db4, #7d35ca)";case"L":case"M":case"P":case"Z":case"1":case"2":return"linear-gradient(45deg, #2db42f, #35ca98)";case"F":case"K":case"Y":case"S":case"4":case"3":return"linear-gradient(45deg, #3f2db4, #3558ca)";case"H":case"E":case"T":case"U":case"C":case"5":case"6":case"7":return"linear-gradient(45deg, #b42d2d, #ca3578)";default:return"linear-gradient(45deg, #c47200, #da471f)"}},MU=x.div`
    width: ${({$width:e})=>e??"50px"};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: ${({$background:e})=>e};
    color: #fff;

	 font-size: calc(${({$width:e})=>e??"50px"} / 3);
`,n0=({name:e,width:t})=>{const n=(e==null?void 0:e.split(" ").length)===1?e[0].toUpperCase()+e[1].toUpperCase():e==null?void 0:e.split(" ").map(i=>{var s;return(s=i[0])==null?void 0:s.toUpperCase()}).join(""),r=jU(n);return c.jsx(MU,{$background:r,$width:t,children:n})},LU=x.span`
	font-size: 0.8rem;
	font-weight: 300;
	opacity: 0.5;

	&.online {
		color: ${({theme:e,color:t})=>t??e.colors.blue.action};
		opacity: 1;
	}
`,Bf=({isAuthor:e,showLastSeen:t,status:n,color:r})=>c.jsx(LU,{color:r,className:n==="online"&&t?"online":"",children:e?"Author":t?n:"User"}),DU=x(js)`
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
        font-weight: ${({$orientation:e})=>e==="vertical"?"400":"300"};
    }

    @media (max-width: 1200px) {
        --size: calc(100vw / 7 - 32px);
    }

    @media (max-width: 1000px) {
        --size: calc(100vw / 5 - 32px);

        h4 {
            font-size: 0.8rem;
        }

        span {
            font-size: 0.68rem;
        }
    }

    @media (max-width: 768px) {
        --size: calc(100vw / 3 - 27px);
    }
`,g1=x.div`
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({theme:e})=>e.colors.blue.action};
    outline: 2px solid ${({theme:e})=>e.colors.pageBackground};
    position: absolute;
    bottom: 0px;
    right: 0px;
`,Kx={hour:36e5},$U=e=>{const t=new Date().getTime()-new Date((e==null?void 0:e.sentTime)??"").getTime(),n=t>Kx.hour*24,r=t>Kx.hour*24*7;return n?r?new Date((e==null?void 0:e.sentTime)??"").toLocaleDateString("ru-RU"):new Date((e==null?void 0:e.sentTime)??"").toLocaleDateString("ru-RU",{weekday:"short"}):new Date((e==null?void 0:e.sentTime)??"").toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})},OR="soundbubble",OU=(e,t,n,r)=>{if(!e)return{sender:""};if((e==null?void 0:e.sender)===OR)return{sender:""};const i=n[(e==null?void 0:e.sender)??""];return{sender:(i==null?void 0:i.uid)===(r==null?void 0:r.uid)?"You":t?i==null?void 0:i.displayName:""}},VR=e=>{var t;return(e==null?void 0:e.status)==="pending"?"Pending":(e==null?void 0:e.status)==="error"?"Error":e&&((t=e==null?void 0:e.seenBy)==null?void 0:t.filter(n=>n!==e.sender).length)===0?"Sent":"Received"},VU=x(js)`
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
`,UR=x.div`
    font-size: 0.9rem;
    font-weight: 300;
`,UU=x.div`
    height: 32px;
    font-size: 0.8rem;
    font-weight: 200;
`,FU=x.span`
    opacity: 0.5;
    overflow: hidden;
    display: inline-flex;
    flex-wrap: wrap;
    column-gap: 6px;
`,tg=x.div`
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
`;const FR=x.div`
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
`,ng={s:"35px",m:"50px"},zR=({chat:e,isSelected:t,unreadCount:n,lastMessage:r,chatData:i,children:s,onClick:o,size:a="m"})=>{var I,C,$,z;const[{data:l}]=fe.useUser(),u=e.chatName!=="",d=e.participants.filter(ve=>ve!==(l==null?void 0:l.uid)),h=i[d[0]],f=u?e.chatImage:h==null?void 0:h.photoURL,p=u?e.chatName:h==null?void 0:h.displayName,m=zf(h==null?void 0:h.online).status,_=VR(r),{sender:w}=OU(r,u,i,l),g=$U(r),y=(r==null?void 0:r.attachedSongs.length)!==0?(I=i[(r==null?void 0:r.attachedSongs[0])??""])==null?void 0:I.name:null,v=(r==null?void 0:r.attachedAuthors.length)!==0?(C=i[(r==null?void 0:r.attachedAuthors[0])??""])==null?void 0:C.displayName:null,E=(r==null?void 0:r.attachedAlbums.length)!==0?($=i[(r==null?void 0:r.attachedAlbums[0])??""])==null?void 0:$.name:null,T=(e==null?void 0:e.typing.filter(ve=>ve!==(l==null?void 0:l.uid)).map(ve=>i[ve]))??[],k=ve=>{o==null||o(e,ve)};return c.jsxs(VU,{onClick:k,to:`/chat/${e.id}`,className:t?"selected":"",children:[c.jsx(jn,{fallbackIcon:c.jsx(n0,{name:p,width:ng[a]}),size:ng[a],src:f,colors:["grey"],isAuthor:!1,children:m==="online"&&!u&&c.jsx(g1,{})}),c.jsxs(P,{d:"column",ai:"flex-start",height:ng[a],width:"100%",gap:2,children:[c.jsxs(P,{jc:"space-between",width:"100%",children:[c.jsx(UR,{children:p}),r&&c.jsxs(FR,{children:[c.jsx($R,{isMine:w==="You",sendStatus:_}),c.jsx("span",{children:g})]})]}),c.jsxs(P,{width:"100%",jc:"space-between",children:[c.jsx(DR,{isGroupChat:u,typing:T,children:c.jsxs(UU,{children:[!r&&c.jsx(Bf,{status:u?`${e.participants.length} members`:m,isAuthor:!1,showLastSeen:!0}),c.jsxs(FU,{children:[w&&`${w}:`," ",r==null?void 0:r.message.substring(0,70)," ",(((z=r==null?void 0:r.message)==null?void 0:z.length)??0)>70?"...":"",y&&c.jsxs(tg,{children:[en.song,y]}),v&&c.jsxs(tg,{children:[en.author,v]}),E&&c.jsxs(tg,{children:[en.album,E]})]})]})}),!!n&&c.jsx(p1,{children:n})]})]}),s]})},qc=x.div`
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
`,ne=x(qc)`
    width: ${({width:e})=>e??"100px"};
    min-width: ${({minWidth:e,width:t})=>e??t??"100px"};
    height: ${({height:e})=>e??"100px"};
    border-radius: ${({radius:e})=>e??"10px"};
`,yt=()=>c.jsxs(P,{gap:12,padding:"2px 25px",children:[c.jsx(ne,{width:"50px",height:"50px",radius:"100%"}),c.jsxs(P,{d:"column",gap:4,ai:"flex-start",children:[c.jsx(ne,{width:"140px",height:"14px"}),c.jsx(ne,{width:"80px",height:"10px"})]})]}),BR=()=>c.jsxs(P,{d:"column",gap:16,padding:"16px 0",children:[c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{})]}),zU=x.div`
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
`,Bi=()=>c.jsx(zU,{className:"loading",children:c.jsx(Kj,{})}),Yx=x.div`
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
`,dr=({loading:e,children:t,appearance:n="ghost",disabled:r,width:i,...s})=>{const o={primary:vs.colors.blue.action,secondary:vs.colors.blue.transparent,ghost:"transparent"};return c.jsxs(W,{disabled:r||e,$background:o[n],$width:i,color:n==="primary"?"#fff":"",...s,children:[c.jsx(Yx,{className:e?"show":"hide",children:c.jsx(Bi,{})}),c.jsx(Yx,{className:e?"hide":"show",children:t})]})},BU=x.div`
	color: ${({$checked:e,theme:t})=>e?t.colors.blue.action:t.colors.greyText};
	height: 24px;
`,m1=({checked:e})=>c.jsx(BU,{$checked:e,children:e?c.jsx(Mj,{size:24,color:"blue"}):c.jsx($j,{size:24})}),HU=x.div`
    position: relative;
    width: 100%;

    opacity: ${({$disabled:e})=>e?.4:1};
    pointer-events: ${({$disabled:e})=>e?"none":"all"};
`,HR=x.div`
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
`,WU=x.div`
    height: fit-content;
    position: relative;
`,qU=x(HR)`
    left: 10px;
`,GU=x(HR)`
    right: 10px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background: ${({theme:e})=>e.colors.lightHover};
    }
`,y1=x.label`
    font-size: 0.8rem;
    margin-bottom: 4px;
    font-weight: 300;
    display: inline-block;
    width: 100%;
    color: ${({theme:e})=>e.colors.greyText};
`,QU=x(y1)`
    margin-bottom: 0;
    margin-top: 4px;
    color: ${({theme:e})=>e.colors.red.text};
`,WR=x.span`
    color: ${({theme:e})=>e.colors.red.main};
`,KU=x.input`
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
`,an=S.forwardRef(({icon:e,rightIcon:t,label:n,required:r,error:i,type:s,onRightIconClick:o,...a},l)=>c.jsxs(HU,{$disabled:a.disabled,children:[n&&c.jsxs(y1,{children:[n," ",c.jsx(WR,{children:r?"*":""})]}),c.jsxs(WU,{children:[c.jsx(qU,{children:e}),c.jsx(KU,{$hasError:!!i,$hasIcon:!!e,$hasRightIcon:!!t,type:s,required:r,ref:l,...a}),t&&c.jsx(GU,{onClick:o,children:t})]}),i&&c.jsx(QU,{children:i})]}));an.displayName="Input";const YU=x.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
`,XU=x.div`
    position: absolute;
    width: 100%;
    height: 100%;
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

    transition: 0.4s background-position, 0.3s opacity;
    pointer-events: none;
    opacity: 0;
    overflow-y: auto;
    overflow-x: hidden;

    &.loading {
        opacity: 1;
        height: fit-content;
        pointer-events: all;
        background-position: 0 100%;
    }
`,JU=x.div``,Us=({loading:e,children:t,skeleton:n,background:r,...i})=>c.jsxs(YU,{...i,children:[c.jsx(XU,{$background:r,className:e?"loading":"",children:n}),c.jsx(JU,{children:t})]}),qR=x.div`
    padding: 2px 5px;
    display: inline-block;
    background: #fff;
    color: ${({theme:e})=>e.colors.blue.action};
    font-weight: 600;
    font-size: 0.7rem;
    border-radius: 10px;
    height: 18px;
`,ZU=x.div`
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
`,eF=x.div`
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
`,As=(e,t)=>{if(!e.length)return"";const n=t??!0,r=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?r.replace(/[,'._/]/g,""):r},tF=x.div`
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
`,nF=({inputPlaceholder:e,added:t,allItems:n,searchValue:r,setAdded:i,setVisibleItems:s,itemImage:o,itemName:a,setSearchValue:l})=>{const u=h=>()=>{i(f=>f.filter(p=>p!==h))},d=h=>{console.log({e:h.target.value}),l(h.target.value),h.target.value!==void 0&&h.target.value.length!==0?s(()=>n.filter(f=>{var p;return f?As(a(f)).includes(As((p=h==null?void 0:h.target)==null?void 0:p.value)):!1})):s(n)};return c.jsxs(tF,{className:t.length>0?"open":"",children:[c.jsx(an,{width:100,placeholder:e,icon:c.jsx(ua,{}),onChange:d,value:r}),c.jsx(P,{wrap:"wrap",width:"100%",gap:4,children:t.map(h=>{const f=n.find(p=>(p.id??p.uid??"")===h);return f?c.jsxs(ZU,{children:[o(f),a(f),c.jsx(W,{$width:"20px",$height:"20px",onClick:u(h),children:c.jsx(Dj,{size:18})})]}):null})})]})},Ao=e=>"displayName"in e?e.displayName:"chatName"in e?e.chatName:e.name,uh=e=>"uid"in e?e.uid:e.id,rF=e=>"photoURL"in e?e.photoURL:"image"in e?e.image:"chatImage"in e?e.chatImage:e.cover,sa=e=>"isAuthor"in e&&(e!=null&&e.isAuthor)?"author":"displayName"in e&&(e!=null&&e.displayName)?"user":"isAlbum"in e&&(e!=null&&e.isAlbum)?"album":"subscribers"in e&&(e==null?void 0:e.subscribers)!==void 0?"playlist":"song",iF=e=>{const[t,n]=S.useState(e),[r,i]=S.useState(""),[s,o]=S.useState([]);return{visibleItems:t,addedItems:s,searchValue:r,setSearchValue:i,handleClick:(d,h)=>{h.preventDefault();const f=uh(d);s.find(m=>m===f)?o(m=>m.filter(_=>_!==f)):(o(m=>[...m,f]),r.length!==0&&(i(""),n(e)))},setVisibleItems:n,handleDeselectAll:()=>{n(e),o([]),i("")},setAddedItems:o,getItemImage:d=>{const h=sa(d),f=rF(d);return c.jsx(ef,{fallbackIcon:en[h],borderRadius:"100%",src:f,colors:["grey"],size:"18px"})}}},v1=({entities:e,inputPlaceholder:t,renderItem:n,renderButton:r})=>{const{visibleItems:i,addedItems:s,searchValue:o,setSearchValue:a,setVisibleItems:l,handleClick:u,handleDeselectAll:d,setAddedItems:h,getItemImage:f}=iF(e);return c.jsxs(c.Fragment,{children:[c.jsx(nF,{inputPlaceholder:t,added:s,allItems:e,searchValue:o,setSearchValue:a,itemImage:f,itemName:p=>Ao(p),setAdded:h,setVisibleItems:l}),c.jsx(P,{jc:"flex-end",width:"100%",children:s.length>0&&c.jsx(W,{onClick:d,$height:"25px",$width:"90px",style:{fontSize:"0.8rem",opacity:"0.7"},children:"Deselect all"})}),c.jsx(P,{d:"column",width:"100%",children:i.map(p=>{const m=uh(p),_=!!s.find(w=>w===m);return n(p,_,u)})}),c.jsx(eF,{className:s.length>0?"open":"",children:r(s)})]})},Gc=({})=>{const{chats:e,chatData:t,loadingChats:n}=Cr.useChats(),r=i=>{};return Cr.useLoadChats(),c.jsx(P,{d:"column",width:"100%",height:"100%",padding:"0 25px",children:c.jsx(Us,{loading:n,skeleton:c.jsx(BR,{}),children:c.jsx(v1,{inputPlaceholder:"Search for friends...",entities:e,renderItem:(i,s,o)=>c.jsx(zR,{size:"s",chat:i,chatData:t,onClick:o,lastMessage:void 0,unreadCount:0,isSelected:!1,children:c.jsx(m1,{checked:s})},i.id),renderButton:i=>c.jsxs(c.Fragment,{children:[c.jsx(an,{placeholder:"Your Message"}),c.jsxs(dr,{appearance:"primary",onClick:()=>r(),children:["Send",c.jsx(qR,{children:i.length})]})]})})})})},GR=220,sF={content:null,isOpen:!1,x:0,y:0,height:0,width:GR,origin:"center"},oF=(e,t,n,r,i,s)=>{let o,a,l,u=0;return e-s<0?(l=e-n,a="left"):(a="right",l=e-s),t+i>window.innerHeight-100?(o="bottom",u=t-i-4):(o="top",u=t+r+4),{posX:l+n,posY:u,origin:`${o} ${a}`}},QR=U(),KR=U(),cc=te(sF);N({clock:QR,source:cc,fn:(e,{content:t,width:n=GR,height:r,e:i})=>{const s=i.currentTarget.getBoundingClientRect(),{left:o,top:a,width:l,height:u}=s,{posX:d,posY:h,origin:f}=oF(o,a,l,u,r,n??e.width);return{content:t,x:d,y:h,origin:f,height:r,width:n??e.width,isOpen:!e.isOpen}},target:cc});N({clock:KR,source:cc,fn:e=>({...e,content:null,isOpen:!1}),target:cc});const ln={usePopup:()=>xe(cc),events:{open:QR,close:KR}},aF={loadingPlaylistId:null,loadingAddedPlaylists:!1,loading:!1,currentPlaylist:null,currentPlaylistSongs:null,addedPlaylists:[]},YR=Le(async e=>{try{if(!e.loadingPlaylistId)throw new Error("Playlist id not specified");const t=await vn.getPlaylistByUid(e.loadingPlaylistId),n=await sn.getSongsByUids(t.songs);return{playlist:t,songs:n}}catch(t){throw new Error(t.message)}}),XR=Le(async({songId:e,playlistIds:t})=>{try{if(!e)throw new Error("Song id not specified");if(!t.length)throw new Error("Playlist ids not specified");return await vn.addSongToPlaylists(e,t)}catch(n){throw new Error(n.message)}}),JR=U(),ZR=U(),uc=te(aF);N({clock:JR,source:uc,fn:(e,t)=>({...e,loadingPlaylistId:t,loading:!0}),target:[uc,YR]});N({clock:YR.doneData,source:uc,fn:(e,{playlist:t,songs:n})=>({...e,loading:!1,currentPlaylist:t,currentPlaylistSongs:n}),target:uc});N({clock:ZR,target:XR});const r0={usePlaylist:()=>xe(uc),useAddingSongToPlaylists:()=>xe([XR.pending]),events:{loadPlaylist:JR,addSongToPlaylists:ZR}},lF=x.div`
    font-size: 0.8rem;
    opacity: 0.7;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 4px;
    width: ${({$width:e})=>e??"100%"};

    @media (max-width: 1000px) {
        pointer-events: ${({$disableOnMobile:e})=>e?"none":"all"};
    }
`,cF=x(js)`
    opacity: 0.8;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
        text-decoration: underline;
    }
`,Rs=({authors:e,onAuthorClick:t,width:n,disableOnMobile:r=!0})=>{const i=s=>o=>{o.stopPropagation(),t==null||t(s)};return c.jsxs(lF,{className:"authors",$width:n,$disableOnMobile:r,children:[e==null?void 0:e.map((s,o)=>c.jsxs(c.Fragment,{children:[o!==0?"&":" ",c.jsx(cF,{onClick:i(s),to:`/author/${s.uid}`,children:s.displayName},s.uid+o)]})),!(e!=null&&e.length)&&"-"]})},Hf=({loading:e,playling:t,size:n})=>c.jsx(c.Fragment,{children:e?c.jsx(Bi,{}):t?c.jsx(rT,{size:n}):c.jsx(fy,{size:n})}),uF=()=>{const e=[10,11,8,4,12,13,7,13,10,5,9,8,10,12,4,12,5,13,12,11,5,9,8,10];return`@keyframes playing {
		${e.map((n,r)=>`${100/e.length*r+"%"} {
			height: ${n}px;
		}`)}
	}`},dF=x.div`
	display: flex;
	align-items: flex-end;
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

`,rg=x.div`
	width: 2.5px;
	animation: playing 8s infinite;
	height: 12px;
	border-radius: 2px;

	${uF()}
`,eP=({playing:e,color:t})=>c.jsxs(dF,{$color:t,className:e?"playing-animation playing":"playing-animation",children:[c.jsx(rg,{}),c.jsx(rg,{}),c.jsx(rg,{})]}),_1=vs.borderRadius.huge,dh=e=>c.jsx(ef,{...e,borderRadius:e.borderRadius??_1,fallbackIcon:e.isAlbum?en.album:en.playlist}),i0=x(W)`
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
`,hF=x(js)`
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
        ${i0} {
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
        border-radius: ${_1};
    }

    &:hover:before {
        opacity: 0.5;
    }

    &:hover {
        background: ${({$orientation:e,theme:t})=>e==="horizontal"?t.colors.hover:""};

        ${i0} {
            opacity: 1;
        }
    }

    @media (max-width: 1200px) {
        --size: ${({$orientation:e})=>e==="vertical"?"calc(100vw / 6)":"34px"};
    }

    @media (max-width: 800px) {
        --size: ${({$orientation:e})=>e==="vertical"?"calc(100vw / 2 - 30px)":"34px"};

        padding: 8px 0;

        &::before {
            display: none;
        }
    }
`,fF=x.div`
    font-size: 0.95rem;
    font-weight: 200;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`;x.div`
    font-size: 0.8rem;
`;const Ps=({playlist:e,children:t,onClick:n,as:r,orientation:i="vertical"})=>{const{image:s,name:o,imageColors:a,authors:l,id:u,songs:d,isAlbum:h,isPrivate:f}=e,{play:p}=H.useControls(),{state:m}=H.useSong(),{queue:_}=H.queue.useQueue(),[w,g]=S.useState(!1),y=`/playlist/${u}`,v=m==="playing"&&_.url===y,E=(I,C)=>{const $={currentSongIndex:C,name:o,icon:s,url:y,songs:I,shuffle:!1};p(I[0],$)},T=I=>{I.preventDefault(),g(!0),sn.getSongsByUids(d).then(C=>{E(C,0),g(!1)})},k=I=>{n==null||n(e,I)};return c.jsxs(hF,{as:r,onClick:k,$orientation:i,className:v?"playing":"",to:`/playlist/${u}`,$color1:a[0],children:[!t&&c.jsx(i0,{$orientation:i,$color:a[0],onClick:T,children:v?c.jsx(eP,{playing:!0,color:a[1]}):c.jsx(Hf,{loading:w,playling:!1,size:18})}),c.jsx(dh,{size:void 0,borderRadius:i==="vertical"?void 0:"3px",src:s,colors:a,isAlbum:h}),c.jsxs(P,{width:"100%",jc:"space-between",children:[c.jsxs(P,{d:"column",width:"100%",gap:0,ai:"flex-start",children:[c.jsxs(P,{children:[c.jsx(fF,{children:o}),f&&c.jsx(tT,{size:18})]}),i==="vertical"?c.jsx(Rs,{authors:l}):c.jsxs(P,{width:"100%",gap:4,children:[c.jsxs(Cs,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[h?"Album":"Playlist"," /"]}),c.jsx(Rs,{width:"fit-content",authors:l})]})]}),t]})]})},tP=({song:e})=>{const[t]=fe.useOwnPlaylists(),n=r=>{e&&r0.events.addSongToPlaylists({songId:e.id,playlistIds:r})};return c.jsx(P,{width:"100%",d:"column",padding:"0 25px",children:c.jsx(v1,{entities:t,inputPlaceholder:"Search for playlists...",renderItem:(r,i,s)=>c.jsx(Ps,{as:"div",playlist:r,onClick:s,orientation:"horizontal",children:c.jsx(m1,{checked:i})},r.id),renderButton:r=>c.jsx(c.Fragment,{children:c.jsx(dr,{appearance:"primary",onClick:()=>n(r),children:"Save changes"})})})})},nP=({song:e})=>{var s;const[{data:t}]=fe.useUser(),n=(s=t==null?void 0:t.addedSongs)==null?void 0:s.find(o=>o===(e==null?void 0:e.id)),r=()=>{Lt.events.open({title:`Share "${e==null?void 0:e.name}" with friends`,content:c.jsx(Gc,{entity:e})}),ln.events.close()},i=()=>{Lt.events.open({title:`Add "${e==null?void 0:e.name}" to playlist`,content:c.jsx(tP,{song:e})}),ln.events.close()};return c.jsxs(wc,{children:[n?c.jsxs(W,{children:[c.jsx(qj,{}),"Remove from Liked"]}):c.jsxs(W,{children:[c.jsx(uy,{size:20}),"Add to Liked"]}),c.jsxs(W,{onClick:i,children:[c.jsx(oT,{size:20}),"Add to playlist"]}),c.jsxs(W,{children:[c.jsx(s4,{}),"Add to queue"]}),c.jsx(Go,{}),c.jsxs(W,{onClick:r,children:[c.jsx(yc,{}),"Share"]}),c.jsxs(W,{children:[c.jsx(hy,{}),"Info"]}),c.jsxs(W,{children:[en.author,"Authors"]}),(t==null?void 0:t.isAdmin)&&c.jsxs(c.Fragment,{children:[c.jsx(Go,{}),c.jsxs(W,{children:[c.jsx(eT,{}),"Edit song",c.jsx("span",{className:"admin",children:"Admin"})]})]})]})},Xx=e=>e<=9?`0${e}`:`${e}`,Jx=e=>{const t=Math.floor(e/60),n=Math.floor(e%60);return`${Xx(t)}:${Xx(n)}`},rP=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    color: #fff;
`,pF=x.input`
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
        &:hover {
            background: ${({theme:e})=>e.colors.lightHover};

            svg {
                filter: drop-shadow(0 0 15px black);
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
`,Zx=x.div`
    font-size: 0.8rem;
`,ml=x(rd)`
    width: 40px;
    height: 40px;

    &.selected {
        background: ${({theme:e})=>e.colors.darkHover};
        svg {
            color: ${({$color1:e,theme:t})=>e??t.colors.textColor};
            opacity: 1;
        }
    }

    svg {
        width: 20px;
        height: 20px;
    }
`,iP=({state:e,colors:t,duration:n,currentTime:r,loopMode:i,shuffle:s,disableNextSongButton:o,handleShuffle:a,handleLoopMode:l,onPlay:u,onNext:d,onPrev:h,handleChangeTime:f,handleMouseUp:p})=>{const{getBackgroundSize:m,currentTimeStr:_,durationStr:w}=S.useMemo(()=>({getBackgroundSize:{backgroundSize:`calc(${r*100/n}% + 1px) 100%`},currentTimeStr:Jx(r),durationStr:Jx(n)}),[n,r]),g=t==null?void 0:t[0];return c.jsxs(rP,{className:"music-controls",children:[c.jsx(pF,{style:m,color1:t==null?void 0:t[0],type:"range",value:r,max:n,min:0,onChange:f,onMouseUp:p,className:"song-slider"}),c.jsxs(P,{jc:"space-between",width:"100%",className:"duration-numbers",children:[c.jsx(Zx,{children:_}),c.jsx(Zx,{children:w})]}),c.jsxs(P,{jc:"space-between",width:"100%",className:"control-buttons",children:[c.jsx(ml,{$color1:g,className:s?"queue-button selected":"queue-button",onClick:a,children:c.jsx(ZS,{})}),c.jsxs(P,{gap:20,className:"playback-buttons",children:[c.jsxs(rd,{className:"control-button",onClick:h,children:[c.jsx(J_,{className:"prev-icon-2"}),c.jsx(J_,{className:"prev-icon-1"})]}),c.jsx(rd,{className:"control-button",disabled:e==="loading",onClick:u,children:c.jsx(Hf,{loading:e==="loading",playling:e==="playing"})}),c.jsxs(rd,{className:"control-button",disabled:o,onClick:d,children:[c.jsx(X_,{className:"next-icon-1"}),c.jsx(X_,{className:"next-icon-2"})]})]}),c.jsxs(ml,{className:i!==at.noloop?"queue-button selected":"queue-button",onClick:l,$color1:g,children:[i===at.loopone&&c.jsx(a4,{}),i!==at.loopone&&c.jsx(l4,{})]})]})]})},gF=x.button`
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
`,sP=({onClick:e})=>c.jsx(gF,{onClick:e,children:c.jsx(uT,{})}),oP=()=>{const{currentSong:e,state:t}=H.useSong(),{currentTime:n,duration:r}=H.playblack.usePlayback(),{queue:i,loop:s}=H.queue.useQueue(),{next:o,previous:a,play:l}=H.useControls(),u=i.songs.length<2||s===at.noloop&&i.currentSongIndex===i.songs.length-1,d=S.useCallback(()=>l(),[l]),h=w=>{H.playblack.setIsSliding(!0),H.playblack.setCurrentTime(+w.target.value)},f=w=>{H.playblack.setIsSliding(!1),H.playblack.setLastRangeValue(+w.currentTarget.value),H.lyrics.calculateCurrentLyric(+w.currentTarget.value)},p=()=>{H.queue.changeLoopMode()},m=()=>{},_=S.useCallback(w=>{console.log(w.key),w.key==="Space"&&d()},[d]);return S.useEffect(()=>(addEventListener("keydown",_),()=>removeEventListener("keydown",_)),[_]),{currentTime:n,duration:r,colors:e==null?void 0:e.imageColors,state:t,loopMode:s,shuffle:!0,disableNextSongButton:u,handleShuffle:m,handleLoopMode:p,onPlay:d,onPrev:a,onNext:o,handleMouseUp:f,handleChangeTime:h}},mF=()=>{const e=oP();return c.jsx(iP,{...e})},hh="${DESKTOP_COVER_WIDTH}",fh="86vw",yF=x(ga)`
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    transition: 0.2s, 0.5s background;
    bottom: 0;
    align-items: center;
    will-change: transform, opacity;

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
`,vF=x.div`
    width: ${hh};
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 700px) {
        width: ${fh};
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
`,_F=x.div`
    overflow: hidden;
    border-radius: ${({theme:e})=>e.borderRadius.middle};
    background: ${({$color1:e})=>e??"darkgrey"};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 130px #00000057;
    width: ${hh};
    height: ${hh};
    overflow: hidden;

    @media (max-width: 700px) {
        width: ${fh};
        height: ${fh};

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
`;const wF=x.div`
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
`,xF=x.div`
    font-size: 1.5rem;
    width: calc(${hh} - 40px);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;

    @media (max-width: 1000px) {
        width: calc(${fh} - 40px);
    }
`,EF=x.div`
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
`,IF=x.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #fff;
    font-size: 1.8rem;
`,SF=x.div`
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
`;const TF=x.div`
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
`,kF=x.div`
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
`,CF=({type:e,hasLyrics:t,hasQueue:n,handleClickControlButton:r})=>{const{currentSong:i}=H.useSong(),s=()=>H.fullscreen.close();return c.jsx(wF,{children:c.jsxs(vF,{children:[c.jsx(_F,{$color1:i==null?void 0:i.imageColors[0],children:c.jsx(tf,{size:"400px",colors:i==null?void 0:i.imageColors,src:i==null?void 0:i.cover})}),c.jsxs(P,{d:"column",gap:2,children:[c.jsxs(P,{width:"100%",gap:10,children:[c.jsx(xF,{children:(i==null?void 0:i.name)??"Untitled"}),c.jsx(Zh,{height:"30px",songId:i==null?void 0:i.id,onClick:()=>null,likeColor:i==null?void 0:i.imageColors[1]})]}),c.jsx(Rs,{authors:i==null?void 0:i.authors,onAuthorClick:s})]}),c.jsx(mF,{}),c.jsxs(kF,{children:[c.jsx(ml,{children:c.jsx(h4,{opacity:.9})}),c.jsxs(P,{gap:20,children:[c.jsx(ml,{disabled:!n,className:e==="queue"?"selected":"",onClick:r("queue"),children:c.jsx(iT,{opacity:.9})}),c.jsx(ml,{disabled:!t,className:e==="lyrics"?"selected":"",onClick:r("lyrics"),children:c.jsx(sT,{opacity:.9})})]})]})]})})},aP=()=>{const e=S.useRef(null),[{lyrics:t,currentLyricIndex:n},r]=H.lyrics.useLyrics(),{state:i}=H.useSong(),s=o=>()=>{isNaN(+o)||(H.playblack.setLastRangeValue(+o),H.lyrics.calculateCurrentLyric(+o))};return S.useEffect(()=>{e.current&&e.current.scrollIntoView({behavior:"smooth",block:"end"})},[n]),S.useEffect(()=>(H.lyrics.setShouldCalculateLyrics(!0),()=>{H.lyrics.setShouldCalculateLyrics(!1)}),[]),t?c.jsx(IF,{children:t.map((o,a)=>{var m;const l=i==="pause"||isNaN(+o.startTime),u=a===n,d=a+1<n||a-1>n,h=o.text==="@loading",f=(((m=t[a+1])==null?void 0:m.startTime)??o.startTime)-o.startTime,p=l?"ordinary":u?"current":d?"farFromCurrent":"";return c.jsx(SF,{ref:r&&u&&!l?e:void 0,className:p,onClick:s(o.startTime),children:h?c.jsxs(TF,{className:u&&i==="playing"?"current":"",$duration:f,children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}):o.text},o.text+a)})}):"No lyrics available"},ph=x.div`
    border: none;
    transition: 0.2s opacity;
    cursor: pointer;

    width: var(--icon-size);
    height: var(--icon-size);
`,Wf=x.div`
    position: absolute;
    z-index: 1;
    background: #0e0e0e;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme:e})=>e.colors.overlay};
    border-radius: ${Ny};
`,gh=x.button`
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
`,lP=x(Wf)`
    left: 0;
    top: 0;
    opacity: 0;
`,cP=x(Wf)`
    left: 0;
    top: 0;

    .playing-animation {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    ${ph} {
        opacity: 0;
    }

    svg {
        stroke-width: 1;
    }
`,AF=x(Wf)`
    left: 0;
    top: 0;
`,RF=x.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;

    ${Wf} {
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
`,PF=x.div`
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
    --icon-size: 18px;

    @media (hover: hover) {
        &:hover {
            background: ${({theme:e})=>e.colors.hover};
            /* box-shadow: 0 0 20px #14141473; */

            ${cP} {
                ${ph} {
                    opacity: 1;
                }

                .playing-animation {
                    opacity: 0;
                }
            }

            .cover-children {
                ${lP} {
                    opacity: 1;
                }
            }

            ${gh} {
                opacity: 1;
            }
        }
    }

    .cover-children {
        svg {
            width: var(--icon-size);
            height: var(--icon-size);
        }
    }

    ${gh} {
        ${({playing:e})=>e?"opacity: 1":"opacity: 0"};
    }

    @media (max-width: 1000px) {
        padding: 0;

        .general-cover {
            min-width: 40px;
            width: 40px;
            height: 40px;
        }
    }

    /* @container (max-width: 699px) {
    height: 60px;
  } */
`,bF=x.div`
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
`,NF=x.div`
    font-weight: 200;
    opacity: 0.85;
    font-size: 1rem;

    @container (min-width: 700px) {
        white-space: nowrap;
    }
`,jF=x.div`
    display: flex;
    align-items: center;
    gap: 8px;

    @container (min-width: 700px) {
        width: 100%;
    }
`,eE=x.div`
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
`;x(W)`
    width: 30px;
    min-height: 30px;
    color: ${({theme:e})=>e.colors.greyText};

    svg {
        width: 22px;
        height: 22px;
    }
`;const MF=x.div`
    display: flex;
    align-items: center;
    gap: 6px;

    @container (max-width: 699px) {
        .like-button {
            display: none;
        }

        ${gh} {
            opacity: 0.4;
        }
    }
`,LF=x.div`
    container-type: size;
    width: 100%;
    height: 50px;
`,DF=x.div`
    width: 100%;
    @container (max-width: 699px) {
        display: none;
    }
`,$F=x.div`
    height: 60px;

    @container (min-width: 700px) {
        display: none;
    }
`,Qc=S.memo(({song:e,playing:t,loading:n,index:r,onClick:i})=>{const{id:s,name:o,authors:a,imageColors:l,cover:u,listens:d}=e,h=p=>{p.stopPropagation(),ln.events.open({content:c.jsx(nP,{song:e}),height:329,e:p})},f=()=>i(e,r);return c.jsxs(PF,{onClick:f,tabIndex:0,role:"button","aria-pressed":"false",playing:t,children:[c.jsxs(RF,{$color1:l[0],children:[c.jsxs(tf,{size:"35px",src:u,colors:l,children:[!n&&!t&&c.jsx(lP,{children:c.jsx(ph,{children:c.jsx(fy,{className:"action-icon"})})}),!n&&t&&c.jsxs(cP,{children:[c.jsx(ph,{children:c.jsx(rT,{className:"action-icon"})}),c.jsx(eP,{color:l[1],playing:!0})]}),n&&c.jsx(AF,{children:c.jsx(Bi,{})})]}),c.jsxs(bF,{children:[c.jsxs(jF,{children:[c.jsx(NF,{children:o}),c.jsxs(eE,{children:[d,c.jsx(Nd,{})]})]}),c.jsx(Rs,{authors:a,disableOnMobile:!0})]})]}),c.jsxs(eE,{className:"outside",children:[d,c.jsx(Nd,{})]}),c.jsxs(MF,{children:[c.jsx(Zh,{width:"35px",height:"35px",songId:s,likeColor:l[1],onClick:()=>null}),c.jsx(gh,{onClick:h,children:c.jsx(cy,{})})]})]})});Qc.displayName="SongItem";const w1=e=>{const{play:t}=H.useControls();return{handlePlay:(r,i)=>{const s={currentSongIndex:i,name:e.listName,icon:e.listIcon,url:e.listUrl,songs:e.songs,shuffle:!1};t(r,s)}}},uP=e=>{const{currentSong:t,state:n,loaded:r}=H.useSong(),{songs:i}=e,{handlePlay:s}=w1(e);return c.jsx(c.Fragment,{children:i.map((o,a)=>{const l=o.id===(t==null?void 0:t.id);return c.jsx(Qc,{onClick:s,index:a,song:o,playing:l&&n==="playing",loading:l&&n==="loading",loaded:l&&r},o.id+a)})})},hr=S.memo(({user:e,onClick:t,children:n,as:r,showLastSeen:i,orientation:s="vertical"})=>{if(!e)return null;const{uid:o,imageColors:a,photoURL:l,isAuthor:u,displayName:d,isVerified:h,online:f}=e,p=s==="vertical",m=zf(f).status,_=w=>{t==null||t(e,w)};return c.jsxs(DU,{as:r,to:`/author/${o}`,$orientation:s,onClick:_,children:[c.jsx(jn,{colors:a,src:l,size:p?"var(--size)":"38px",isAuthor:u,children:m==="online"&&!u&&c.jsx(g1,{})}),c.jsxs(P,{d:"column",gap:p?4:1,width:"100%",ai:p?"center":"flex-start",children:[c.jsxs(P,{jc:p?"center":"flex-start",gap:8,width:"100%",children:[c.jsx("h4",{children:d}),h&&c.jsx(Vh,{size:16,style:{color:vs.colors.blue.main}})]}),c.jsx(Bf,{status:m,isAuthor:u,showLastSeen:i})]}),n]})});hr.displayName="UserItem";function dP(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}const OF=({displayName:e,photoURL:t,imageColors:n,isAuthor:r})=>({uid:dP(),imageColors:n??[],photoURL:t??"https://via.placeholder.com/150",isAuthor:r??!1,displayName:e??"Test User",isVerified:!0,online:0,lastSongPlayed:"",addedPlaylists:[],addedAuthors:[],addedSongs:[],ownPlaylists:[],lastQueue:{image:"",name:"",songsList:[],source:""},numberOfListenersPerMonth:0,subscribers:0}),VF=({queue:e})=>{var t;return c.jsxs(P,{d:"column",gap:4,width:"100%",children:[(t=e.url)!=null&&t.includes("author")?c.jsx(hr,{onClick:()=>H.fullscreen.close(),orientation:"horizontal",user:OF({displayName:e.name})}):null,c.jsx(Go,{}),c.jsx(uP,{songs:e.songs,listName:null,listIcon:void 0,listUrl:null})]})},UF=({type:e})=>{const{queue:t}=H.queue.useQueue();return e===null?null:c.jsxs(EF,{className:e!==null?"visible":"",children:[e==="lyrics"&&c.jsx(aP,{}),e==="queue"&&c.jsx(VF,{queue:t})]})},FF=({open:e})=>{const{currentSong:t}=H.useSong(),{queue:n}=H.queue.useQueue(),[r,i]=S.useState(e),[s,o]=S.useState(null),a=(t==null?void 0:t.lyrics)!==void 0&&((t==null?void 0:t.lyrics.length)??0)>0,l=()=>{H.fullscreen.close()};S.useEffect(()=>{e?i(!0):setTimeout(()=>{i(!1)},200)},[e]);const u=d=>()=>{o(s===d?null:d)};return S.useEffect(()=>{!a&&s==="lyrics"&&o(null)},[a,s]),c.jsx(yF,{className:e?"open":"close",$colors:t==null?void 0:t.imageColors,children:r&&c.jsxs(c.Fragment,{children:[c.jsx(sP,{onClick:l}),c.jsx(CF,{type:s,handleClickControlButton:u,hasQueue:n.songs.length>0,hasLyrics:a}),c.jsx(UF,{type:s})]})})},zF="data:image/svg+xml;base64,PHN2ZyBpZD0i0KHQu9C+0LlfMSIgZGF0YS1uYW1lPSLQodC70L7QuSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzAyLjMyIDI0Ny4yMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj0JHQtdC30YvQvNGP0L3QvdGL0Llf0LPRgNCw0LTQuNC10L3Rgl85OCk7fS5jbHMtMntmaWxsOnVybCgj0JHQtdC30YvQvNGP0L3QvdGL0Llf0LPRgNCw0LTQuNC10L3Rgl8yOTcpO30uY2xzLTN7ZmlsbDp1cmwoI9CR0LXQt9GL0LzRj9C90L3Ri9C5X9Cz0YDQsNC00LjQtdC90YJfOTMpO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0i0JHQtdC30YvQvNGP0L3QvdGL0Llf0LPRgNCw0LTQuNC10L3Rgl85OCIgeDE9IjUwLjg2IiB5MT0iODUuODUiIHgyPSIxNjMuMzMiIHkyPSI4NS44NSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgzNi4xMiAxODUuOCkgcm90YXRlKC0xMDkuNDMpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2ZiMWZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZhYWRlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ItCR0LXQt9GL0LzRj9C90L3Ri9C5X9Cz0YDQsNC00LjQtdC90YJfMjk3IiB4MT0iLTgwLjA1IiB5MT0iMTY1Ljk1IiB4Mj0iLTMyLjIiIHkyPSIxNjUuOTUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc2LjQxIDE0Mi4wOCkgcm90YXRlKDUzLjQyKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzI4MzU5MyIvPjxzdG9wIG9mZnNldD0iMC45OSIgc3RvcC1jb2xvcj0iIzdkOGJmZSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSLQkdC10LfRi9C80Y/QvdC90YvQuV/Qs9GA0LDQtNC40LXQvdGCXzkzIiB4MT0iNDcuNzciIHkxPSIxNjQuNTciIHgyPSIzNTAuMDkiIHkyPSIxNjQuNTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzZmIxZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkNDk0ZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+TG9nbzM8L3RpdGxlPjx0ZXh0IHg9Ii00Ny43NyIgeT0iLTI5LjciLz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjgxLjQ2IiBjeT0iNTYuMjUiIHI9IjU2LjIzIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIyMDkuNyIgY3k9IjE5NS45IiByPSIyMy45MyIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTM1MCwxNDkuMTRBNjEuMzksNjEuMzksMCwwLDAsMjkyLjU1LDkwLjlhNjIuNzcsNjIuNzcsMCwwLDAtMTAuMjkuMjUsNTAuNyw1MC43LDAsMCwxLTM5LjQxLTEyLjQ4LDEwMy4zNywxMDMuMzcsMCwwLDAtNjQuNC0yNi4zM0MxMTkuNTksNDkuNjUsNjkuODEsOTcuMTUsNjkuODMsMTU2LjA2QTEwMy42MSwxMDMuNjEsMCwwLDAsNzMsMTgxLjM4YTYuMDYsNi4wNiwwLDAsMS0yLjgzLDYuNzMsNDUuMiw0NS4yLDAsMSwwLDU4LjYyLDY2LjYxLDYuMDcsNi4wNywwLDAsMSw3LTJsLjI3LjFhMTI0LDEyNCwwLDAsMSwyOC4wNywxNS43MSw0My43Myw0My43MywwLDAsMCw2My41Ny0xMy40NSwxMzEuODYsMTMxLjg2LDAsMCwxLDIwLTI2LjI2bC40NS0uNDZhNTEuMjYsNTEuMjYsMCwwLDEsMzguNy0xNS4xOWMuNjksMCwxLjM5LDAsMi4wOCwwQTYxLjIyLDYxLjIyLDAsMCwwLDM1MCwxNDkuMTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNzcgLTI5LjcpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTY1Ljc4LDEyNy4zM3Y0MS4yMmMwLDcuMjktMy43OCwxMS44OS0xMC43NiwxMi44NmExNS41NiwxNS41NiwwLDAsMS0xMS41NC0yLjVjLTYtNC4yNi02LTExLjg2LS4wNi0xNi4xM2ExNS40MywxNS40MywwLDAsMSwxMi44Ny0yLjMzYy40NS4xMS45LjE4LDEuNjEuMzJWMTE3LjQ1YzAtMi45MS42MS0zLjcsMy4zLTQuMjZsMTUuMTMtMy4yYzIuMjktLjQ4LDMsLjA2LDMsMi40M3EwLDQuNDgsMCw5YzAsMi4zMS0uOCwzLjIxLTMsMy42OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00Ny43NyAtMjkuNykiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xODguNTksMTg2LjgzVjE0My40NmMwLTMsLjM5LTMuNTYsMy4yOS00LjE5cTcuNzQtMS42OCwxNS41MS0zLjI4YzEuODYtLjM4LDIuNDcuMTMsMi40OSwyLjEuMDUsMy4yNywwLDYuNTQsMCw5LjgxYTIuODQsMi44NCwwLDAsMS0yLjU3LDMuMTNjLTIuOTUuNi01Ljg3LDEuNDMtOC44NCwxLjg3LTEuNzkuMjYtMi4wNiwxLjExLTIuMDYsMi43NS4wNiwxMi44LDAsMjUuNiwwLDM4LjQsMCw4Ljg4LTUuOSwxNC40NS0xNC40NywxMy42MmExNS4wNiwxNS4wNiwwLDAsMS04Ljg2LTMuNWMtNC43MS00LjE0LTQuNzQtMTAuNTMsMC0xNC42MiwzLjg4LTMuMzQsOC40Mi0zLjk0LDEzLjI1LTMuMTRDMTg3LDE4Ni41MSwxODcuNjYsMTg2LjY1LDE4OC41OSwxODYuODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNzcgLTI5LjcpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMjM2LjcyLDEzNy43N1YxNzljMCw3LjI5LTMuNzUsMTEuODQtMTAuNzgsMTIuODNhMTUuMjEsMTUuMjEsMCwwLDEtMTEuODQtMi43NWMtNS41Ni00LjIzLTUuNjEtMTEuNDQsMC0xNS42NGExNS4zLDE1LjMsMCwwLDEsMTMuMzgtMi41Yy4zNy4wOS43Ni4xMiwxLjQ3LjIyVjEyOC4xYzAtMy40My4zOC0zLjg2LDMuNjQtNC41NCw0LjkxLTEsOS44Mi0yLjEsMTQuNzMtMy4xNSwyLjMxLS40OSwyLjkzLDAsMi45NCwyLjQ2cTAsNC40OCwwLDljMCwyLjQtLjY3LDMuMi0yLjk0LDMuNjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNzcgLTI5LjcpIi8+PC9zdmc+",BF=x.img`
    width: 30px;
`,HF=x.div`
    font-size: 1.1rem;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.textColor};
    opacity: 0.9;
`,hP=({short:e=!1})=>c.jsxs(P,{gap:14,children:[c.jsx(BF,{src:zF,alt:"Logo"})," ",!e&&c.jsx(HF,{children:"Soundbubble"})]}),WF=x.div`
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
    transition: 1s;

    span {
        font-weight: 300;
        color: ${({theme:e})=>e.colors.greyText};
    }

    img {
        width: 100px;
        height: 100px;
    }

    &.loading {
    }

    &.loaded {
        opacity: 0;
        visibility: hidden;
    }
`,tE={slowInternetMessage:1e4,fullStop:2e4},qF=()=>{const[{data:e},t]=fe.useUser(),[n,r]=S.useState(!1),[i,s]=S.useState(!1);return S.useEffect(()=>{setTimeout(()=>{e||r(!0)},tE.slowInternetMessage),setTimeout(()=>{e||s(!0)},tE.fullStop)},[e]),c.jsxs(WF,{className:t?"loading":"loaded",children:[c.jsx(hP,{short:!0}),n&&c.jsx("span",{children:"It seems like You have slow internet connection..."}),i&&c.jsx("span",{children:"Failed to load Soundbubble. Please try again later"}),t&&c.jsx(Bi,{})]})},fP=x.div`
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
    }
`,GF=e=>{const{songs:t}=e,{currentSong:n,state:r,loaded:i}=H.useSong(),{handlePlay:s}=w1(e);return c.jsx(fP,{children:t.map((o,a)=>{const l=o.id===(n==null?void 0:n.id);return c.jsx(Qc,{onClick:s,index:a,song:o,playing:l&&r==="playing",loading:l&&r==="loading",loaded:l&&i},o.id+a)})})},mh=x(W)`
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
`,QF=x.div`
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

            ${mh}.left {
                display: flex;
            }
        }

        &.showRight {
            &::after {
                display: block;
            }

            ${mh}.right {
                display: flex;
            }
        }
    }
`,KF=x.div`
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
`,pP=({children:e})=>{const[t,n]=S.useState(!1),[r,i]=S.useState(!1),[s,o]=S.useState(0),a=S.useRef(null),l=h=>{n(h.currentTarget.scrollLeft!==0),i(h.currentTarget.scrollLeft+h.currentTarget.clientWidth<h.currentTarget.scrollWidth),o(h.currentTarget.scrollLeft)},u=()=>{var h;((h=a.current)==null?void 0:h.scrollLeft)!==void 0&&(a.current.scrollLeft=s-a.current.scrollWidth/3)},d=()=>{var h;((h=a.current)==null?void 0:h.scrollLeft)!==void 0&&(a.current.scrollLeft=s+a.current.scrollWidth/3)};return c.jsxs(QF,{className:`${t?"showLeft":""} ${r?"showRight":""}`,children:[c.jsx(mh,{className:"left",onClick:u,children:c.jsx(JS,{})}),c.jsx(KF,{ref:a,onScroll:l,children:e}),c.jsx(mh,{className:"right",onClick:d,children:c.jsx(kj,{})})]})},s0=e=>e===void 0?null:e>=1e3&&e<1e6?(e/1e3).toFixed(1)+"K":e>=1e6&&e<1e9?(e/1e6).toFixed(1)+"M":e.toString(),YF=x(ga)`
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
`,XF=x.div`
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
        top: 10px;
        right: 10px;
    }
`,JF=x.div`
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
        top: 10px;
        left: 10px;
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
`;const gP=({name:e,subtitle:t,bottomButtons:n,isPrivate:r,numberOfListenersPerMonth:i,subscribers:s,imageComponent:o,colors:a,isVerified:l,handleClickShare:u})=>{const d=_c(),h=f=>{f.stopPropagation(),ln.events.open({e:f,height:96,content:c.jsxs(wc,{children:[c.jsxs(W,{onClick:u,children:[c.jsx(yc,{}),"Share"]}),c.jsxs(W,{children:[c.jsx(hy,{}),"Info"]})]})})};return c.jsxs(YF,{$colors:a,children:[o,c.jsxs(P,{gap:8,d:"column",ai:"center",children:[c.jsxs(P,{gap:4,d:"column",children:[c.jsxs(P,{gap:6,children:[c.jsx("h2",{children:e}),l&&c.jsx(Vh,{color:a==null?void 0:a[1]}),r&&c.jsx(tT,{size:20})]}),t]}),c.jsxs(P,{gap:20,style:{opacity:"0.8",fontWeight:"300"},children:[c.jsxs(P,{gap:4,children:[s0(i),c.jsx(Nd,{size:16})]}),c.jsxs(P,{gap:4,children:[s0(s),c.jsx(lT,{size:16})]})]})]}),c.jsx(JF,{children:c.jsx(W,{$height:"40px",$width:"40px",onClick:()=>d(-1),children:c.jsx(JS,{size:20})})}),c.jsxs(XF,{children:[c.jsx(Zh,{songId:void 0,likeColor:void 0,height:"40px",width:"40px"}),c.jsx(W,{$height:"40px",$width:"40px",onClick:h,children:c.jsx(Fj,{size:20})})]}),n]})},x1=({page:e,onChangeId:t})=>{const n=tL(`${e}/:id`);S.useEffect(()=>{n!=null&&n.params.id&&t(n.params.id)},[n==null?void 0:n.params.id])},ZF=()=>c.jsx("div",{children:"AddAlbumModal"}),ez=x.div`
  width: 100%;
  height: 100%;
  background: ${({theme:e})=>e.colors.overlay};
`,tz=x(ez)`
    position: absolute;
    z-index: 11;
`,nz=x.div`
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
`,rz=x.h3`
    margin: 25px;
    margin-bottom: 15px;
    font-weight: 300;

    @media (max-width: 768px) {
        margin: 20px;
    }
`,iz=x.div`
    height: 100%;
    padding-bottom: 25px;
    padding-top: 0;
    overflow-y: auto;
`;x.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
`;const sz=x.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,oz=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,az=x.textarea`
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
`,lz=({label:e,...t})=>c.jsxs(oz,{children:[e&&c.jsxs(y1,{children:[e," ",c.jsx(WR,{children:t.required?"*":""})]}),c.jsx(az,{...t})]}),cz=x.div`
	font-size: 0.5rem;

`,uz=()=>c.jsxs(cz,{children:[c.jsxs(sz,{children:[c.jsx(an,{label:"Song name"}),c.jsx(an,{label:"Release date",type:"date"}),c.jsx(lz,{label:"Lyrics"})]}),c.jsx(dr,{appearance:"primary",children:"Add new song"})]}),dz=x.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;x(ga)`
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
`;const mP=x.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    @media (max-width: 1000px) {
        padding: 40px 20px;
    }
`,nE=x.div`
    width: 100%;

    h3 {
        margin-bottom: 10px;
    }
`,rE=x.div`
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
`,hz=x.div`
    width: 100%;
    background: ${({theme:e})=>e.colors.pageBackground2};
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1000px) {
        padding: 20px;
    }
`,E1=({isAdmin:e,isPageOwner:t,queueInfo:n,buttonColor:r})=>{const{state:i}=H.useSong(),{queue:s}=H.queue.useQueue(),o=Oh();return e&&t?c.jsxs(rE,{className:"bottom-buttons",children:[c.jsxs(W,{onClick:()=>Lt.events.open({content:c.jsx(uz,{}),title:"Add new song"}),$background:o.colors.pageBackground,style:{color:o.colors.blue.main,gap:"10px"},children:[c.jsx(n4,{size:18}),"New song"]}),c.jsxs(W,{onClick:()=>Lt.events.open({content:c.jsx(ZF,{}),title:"Add new album"}),$background:o.colors.pageTopButton,style:{color:o.colors.blue.main,gap:"10px"},children:[c.jsx(py,{size:18}),"New album"]})]}):c.jsxs(rE,{className:"bottom-buttons",children:[c.jsxs(dr,{loading:i==="loading"&&s.url===n.listUrl,onClick:()=>null,style:{background:o.colors.pageTopButton,color:r},children:[c.jsx(Hf,{size:20,loading:i==="loading"&&s.url===n.listUrl,playling:i==="playing"&&s.url===n.listUrl}),"Play"]}),c.jsxs(dr,{loading:!1,onClick:()=>null,style:{background:o.colors.pageTopButton,color:r},children:[c.jsx(ZS,{size:20}),"Shuffle"]})]})},fz=x(ne)`
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
`,Vt=()=>c.jsxs(P,{d:"column",gap:10,children:[c.jsx(fz,{radius:"100%",width:"calc(100vw / 11)",height:"calc(100vw / 11)"}),c.jsxs(P,{d:"column",gap:4,children:[c.jsx(ne,{radius:"4px",width:"140px",height:"20px"}),c.jsx(ne,{radius:"4px",width:"80px",height:"14px"})]})]}),pz=(e,t)=>{const[n,r]=S.useState(!1),[i,s]=S.useState(!1),o=S.useMemo(()=>new IntersectionObserver(([a])=>{s(a.isIntersecting),n||r(a.isIntersecting)}),[e]);return S.useEffect(()=>{i&&t&&t()},[i,n]),S.useEffect(()=>(e.current!==null&&o.observe(e.current),()=>o.disconnect()),[]),i},gz=({songs:e,currentPageUser:t})=>{const n=S.useRef(null),{similarAuthors:r,similarAuthorsLoading:i}=fe.useUserPage();return pz(n,()=>{r.length===0&&fe.events.loadSimilarAuthors(e)}),c.jsxs(hz,{ref:n,children:[c.jsx("h3",{children:"Similar Authors"}),c.jsx(pP,{children:r.map(s=>s.uid===(t==null?void 0:t.uid)?null:c.jsx(hr,{user:s},s.uid))}),i&&c.jsxs(P,{gap:20,children:[c.jsx(Vt,{}),c.jsx(Vt,{}),c.jsx(Vt,{}),c.jsx(Vt,{}),c.jsx(Vt,{}),c.jsx(Vt,{})]})]})},mz=x(ne)`
    --size: calc(100vw / 8 + 3px);

    @media (max-width: 1200px) {
        --size: calc(100vw / 6);
    }

    @media (max-width: 800px) {
        --size: calc(100vw / 2 - 30px);
    }

    width: var(--size);
    height: var(--size);
`,Hs=()=>{const e=Oh();return c.jsxs(P,{gap:12,ai:"flex-start",d:"column",children:[c.jsx(mz,{width:"calc(100vw / 8)",height:"calc(100vw / 8)",radius:e.borderRadius.middle}),c.jsxs(P,{gap:7,ai:"flex-start",d:"column",children:[c.jsx(ne,{width:"120px",height:"15px",radius:"4px"}),c.jsx(ne,{width:"80px",height:"12px",radius:"3px"})]})]})},J=()=>c.jsxs(LF,{children:[c.jsx($F,{children:c.jsx(ne,{width:"100%",height:"50px",radius:"12px",children:c.jsxs(P,{gap:10,width:"100%",padding:"8px",children:[c.jsx(ne,{width:"35px",height:"35px",radius:Ny}),c.jsxs(P,{width:"100%",d:"column",ai:"flex-start",gap:4,children:[c.jsx(ne,{width:"70%",height:"14px"}),c.jsx(ne,{width:"120px",height:"10px"})]})]})})}),c.jsx(DF,{children:c.jsx(ne,{width:"100%",height:"46px",radius:"10px",children:c.jsxs(P,{width:"100%",gap:20,padding:"6px",children:[c.jsx(ne,{width:"35px",height:"35px",radius:"6px"}),c.jsx(ne,{width:"25%",height:"18px",radius:"6px"}),c.jsx(ne,{width:"25%",height:"18px",radius:"6px"}),c.jsx(ne,{width:"20%",height:"18px",radius:"6px"}),c.jsx(ne,{width:"18%",height:"18px",radius:"6px"})]})})})]}),yP=()=>c.jsxs(P,{width:"100%",d:"column",ai:"flex-start",height:"100%",children:[c.jsx(ne,{width:"100%",height:"400px",radius:"0",children:c.jsxs(P,{width:"100%",d:"column",padding:"56px 50px 50px 50px",ai:"center",jc:"center",gap:21,children:[c.jsx(ne,{width:"200px",height:"200px",radius:"100%"}),c.jsxs(P,{d:"column",gap:8,children:[c.jsx(ne,{width:"200px",height:"30px"}),c.jsx(ne,{width:"100px",height:"10px",radius:"3px"}),c.jsx(ne,{width:"100px",height:"20px",radius:"3px"})]})]})}),c.jsxs(mP,{children:[c.jsxs(P,{d:"column",ai:"flex-start",gap:8,width:"100%",children:[c.jsx(ne,{width:"95px",height:"25px",radius:"6px"}),c.jsxs(fP,{children:[c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{})]})]}),c.jsxs(P,{d:"column",ai:"flex-start",gap:8,width:"100%",children:[c.jsx(ne,{width:"115px",height:"25px",radius:"6px"}),c.jsxs(P,{gap:14,width:"100%",children:[c.jsx(Hs,{}),c.jsx(Hs,{}),c.jsx(Hs,{}),c.jsx(Hs,{}),c.jsx(Hs,{}),c.jsx(Hs,{})]})]}),c.jsxs(P,{d:"column",ai:"flex-start",padding:"40px 0 0 0",gap:20,width:"100%",children:[c.jsx(ne,{width:"145px",height:"25px",radius:"6px"}),c.jsxs(P,{gap:30,width:"100%",children:[c.jsx(Vt,{}),c.jsx(Vt,{}),c.jsx(Vt,{}),c.jsx(Vt,{}),c.jsx(Vt,{}),c.jsx(Vt,{}),c.jsx(Vt,{}),c.jsx(Vt,{})]})]})]})]}),vP=({userData:e})=>{const{user:t,songs:n,playlists:r,loading:i}=fe.useUserPage(),[{data:s}]=fe.useUser(),[o]=fe.useFriends(),a=e??t,l=!!o.find(_=>_.uid===(t==null?void 0:t.uid)),{status:u}=zf(t==null?void 0:t.online),[d,h,f]=[(a==null?void 0:a.isAuthor)??!1,(a==null?void 0:a.isAdmin)??!1,(s==null?void 0:s.uid)===(a==null?void 0:a.uid)];x1({page:"author",onChangeId:_=>{fe.events.loadUserPageFx(_)}});const p={listName:(a==null?void 0:a.displayName)??"Author",listIcon:a==null?void 0:a.photoURL,listUrl:`/author/${a==null?void 0:a.uid}`,songs:n.slice(0,9)},m=()=>{Lt.events.open({title:`Share ${t==null?void 0:t.displayName} with friends`,content:c.jsx(Gc,{entity:t})})};return c.jsx(Us,{color:(a==null?void 0:a.imageColors[0])??"grey",loading:i,skeleton:c.jsx(yP,{}),children:c.jsxs(dz,{children:[c.jsx(gP,{handleClickShare:m,id:a==null?void 0:a.uid,name:a==null?void 0:a.displayName,subtitle:c.jsx(Bf,{color:t==null?void 0:t.imageColors[1],isAuthor:d,status:u,showLastSeen:l||(s==null?void 0:s.isAdmin)}),numberOfListenersPerMonth:a==null?void 0:a.numberOfListenersPerMonth,isVerified:a==null?void 0:a.isVerified,subscribers:a==null?void 0:a.subscribers,imageComponent:c.jsx(jn,{isAuthor:d,colors:a==null?void 0:a.imageColors,src:a==null?void 0:a.photoURL,size:"200px"}),colors:a==null?void 0:a.imageColors,bottomButtons:c.jsx(E1,{buttonColor:a==null?void 0:a.imageColors[1],isAdmin:h,isPageOwner:f,queueInfo:p})}),c.jsxs(mP,{children:[c.jsxs(nE,{children:[c.jsx("h3",{children:"Top songs"}),c.jsx(GF,{...p})]}),r.length!==0&&c.jsxs(nE,{children:[c.jsx("h3",{children:"Top Albums"}),c.jsx(pP,{children:r.map(_=>c.jsx(Ps,{playlist:_},_.id))})]})]}),!i&&c.jsx(gz,{songs:n,currentPageUser:a})]})})},yz=x.div`
    padding: 10px 25px;
`,vz=()=>{const[e]=fe.useFriends(),t=()=>{};return c.jsx(yz,{children:c.jsx(v1,{inputPlaceholder:"Search for friends...",entities:e,renderItem:(n,r,i)=>c.jsx(hr,{orientation:"horizontal",as:"div",user:n,onClick:i,children:c.jsx(m1,{checked:r})},n.uid),renderButton:n=>c.jsxs(c.Fragment,{children:[n.length>1&&c.jsx(an,{placeholder:"Chat Title"}),c.jsxs(dr,{appearance:"primary",onClick:t,children:["Create ",n.length>1?"group":"chat",c.jsx(qR,{children:n.length})]})]})})})},_z=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),wz=e=>{let t=0;return e?e==null?void 0:e.reduce((n,r,i)=>{const s=e[i-1],o=(s==null?void 0:s.sender)===(r==null?void 0:r.sender),a=new Date((r==null?void 0:r.sentTime)??"").getTime()-new Date((s==null?void 0:s.sentTime)??"").getTime()<6e5;return o&&a?n[t]?n[t].push(r):n[t]=[r]:(t+=1,n[t]=[r]),n},[]):[]},xz=()=>c.jsxs(wc,{children:[c.jsxs(W,{children:[c.jsx(hy,{}),"Info"]}),c.jsxs(W,{children:[c.jsx(Wj,{}),"Attacments"]}),c.jsxs(W,{children:[c.jsx(i4,{}),"Change wallpaper"]})]}),Ez=()=>c.jsxs(wc,{children:[c.jsxs(W,{children:[c.jsx(yc,{}),"Reply"]}),c.jsxs(W,{children:[c.jsx(Vj,{}),"Copy"]})]}),Iz=x.div`
    height: 100%;
    padding-bottom: 4px;
`,Sz=x.div`
    font-size: 0.7rem;
    margin-left: 10px;
    color: ${({theme:e})=>e.colors.greyText};
    font-weight: 300;
`,Tz=x.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`,kz=x.div`
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
`,Cz=x(FR)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 8px;
    font-size: 0.65rem;

    svg {
        width: 14px;
        height: 14px;
    }
`,Az=x.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Rz=x.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 20px;
    overflow-y: auto;
`,Pz=x(an)`
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 16px;
`,bz=x.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    width: 100%;
    height: 80px;
    border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Nz=x.div`
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
`,jz=x.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    padding: 6px 15px;
    width: 100%;
`,Mz=x.div`
    width: 50px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: 0.2s;
`,Lz=x.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
`,Dz=x.div`
    position: sticky;
    bottom: 20px;
    transition: 0.2s;
`,$z=x.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background: ${({theme:e})=>e.colors.pageBackground2};
`,Oz=x.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 10px 20px;
    font-weight: 300;
    font-size: 0.8rem;
    opacity: 0.6;
`,Vz=x.div`
    width: 320px;
`,Uz=x(W)`
    min-width: 35px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background: ${({theme:e})=>e.colors.blue.action};
    color: #fff;
`,Fz=x(W)`
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
`,zz=e=>{let t;try{t=new URL(e)}catch{return!1}return t.protocol==="http:"||t.protocol==="https:"},Bz=x.a`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	color: ${({theme:e})=>e.colors.blue.main};
	padding: 4px;
	background: ${({theme:e})=>e.colors.blue.transparent2};
	border-radius: 6px;
`,Hz=({message:e})=>{const t=e.split(" ");return c.jsx(c.Fragment,{children:t.map(n=>zz(n)?c.jsxs(Bz,{href:n,target:"_blank",rel:"noreferrer",children:[c.jsx(Qj,{size:18}),n.slice(8,n.length)]}):n+" ")})},ig=(e,t)=>e.map(n=>{const r=t[n];if(!r)return null;const i=sa(r);return i==="user"||i==="author"?c.jsx(hr,{user:r,orientation:"horizontal"},n):i==="album"||i==="playlist"?c.jsx(Ps,{playlist:r,orientation:"horizontal"},n):c.jsx(Qc,{song:r,playing:!1,loading:!1,loaded:!1,index:0,onClick:()=>null},n)}),Wz=({message:e,isNotSeen:t,isMine:n,chatData:r,isPrevByTheSameSender:i,isFirst:s,onSeen:o})=>{var p,m;const a=VR(e),l=e.attachedSongs.length||e.attachedAlbums.length||e.attachedAuthors.length,[u,d]=S.useState(!1),h=S.useRef(null);S.useEffect(()=>{const _=h.current,w=new IntersectionObserver(([g])=>{d(g.isIntersecting)},{root:null,rootMargin:"0px",threshold:.5});return _&&w.observe(_),()=>{_&&w.unobserve(_)}},[]),S.useEffect(()=>{u&&t&&o(e.id)},[u,t]);const f=_=>{_.stopPropagation(),_.preventDefault(),ln.events.open({content:c.jsx(Ez,{}),height:96,e:_})};return c.jsxs(Tz,{ref:h,children:[!n&&s&&c.jsx(Sz,{children:(p=r[e.sender])==null?void 0:p.displayName}),c.jsxs(P,{width:"100%",gap:10,children:[c.jsxs(kz,{$isFirst:s,$background:n?(m=r[e.sender])==null?void 0:m.imageColors[1]:"",onContextMenu:f,className:(n?"mine":"")+(i?" isPrevByTheSameSender":""),children:[c.jsx(P,{d:"column",ai:"flex-start",children:c.jsxs(Iz,{children:[c.jsx(Hz,{message:e.message}),!!l&&c.jsxs(Vz,{children:[ig(e.attachedSongs,r),ig(e.attachedAlbums,r),ig(e.attachedAuthors,r)]})]})}),c.jsxs(Cz,{children:[c.jsx("span",{children:new Date(e.sentTime).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})}),c.jsx($R,{isMine:n,sendStatus:a})]})]}),a==="Error"&&c.jsx(zj,{color:"red",size:20})]})]})},qz=({message:e})=>c.jsx(Oz,{children:e.message}),Gz=(e,t)=>({id:dP(),sender:e,message:t,sentTime:new Date().getTime(),seenBy:[e],attachedAlbums:[],attachedSongs:[],attachedAuthors:[],inResponseToMessage:"",status:"pending"}),_P=()=>{const{chats:e,currentChatId:t,currentChatMessages:n,currentChatMessagesLoading:r,chatData:i}=Cr.useChats(),[{data:s}]=fe.useUser(),o=wz(n),a=e.find(Y=>Y.id===t),l=(a==null?void 0:a.participants.filter(Y=>Y!==(s==null?void 0:s.uid)))??[],u=i[l[0]],d=(a==null?void 0:a.chatName)!=="",h=d?a==null?void 0:a.chatImage:u==null?void 0:u.photoURL,f=d?a==null?void 0:a.chatName:u==null?void 0:u.displayName,p=l.map(Y=>{var Ve;return zf((Ve=i[Y])==null?void 0:Ve.online).status})??[],m=S.useRef(null),_=(a==null?void 0:a.typing.filter(Y=>Y!==(s==null?void 0:s.uid)).map(Y=>i[Y]))??[],w=p.filter(Y=>Y==="online").length,[g,y]=S.useState(!0),v=n.filter(Y=>{var Ve;return!((Ve=Y.seenBy)!=null&&Ve.includes((s==null?void 0:s.uid)??""))})??0,[E,T]=S.useState(""),k=S.useRef(null);x1({page:"chat",onChangeId:Y=>{y(!0),Cr.events.setCurrentChatId(Y)}});const I=Y=>{T(Y.currentTarget.value)},C=Y=>{Y.stopPropagation(),ln.events.open({content:c.jsx(xz,{}),e:Y,height:136})},$=Y=>{console.log(Y.currentTarget.scrollTop,Y.currentTarget.scrollHeight),Y.currentTarget.scrollTop>=Y.currentTarget.scrollHeight-800?y(!0):y(!1)},z=()=>{var Ve;if(E.trim().length===0||!(s!=null&&s.uid))return;const Y=Gz(s==null?void 0:s.uid,E);Cr.events.sendMessage({chatId:t,message:Y}),T(""),(Ve=k.current)==null||Ve.focus()};S.useEffect(()=>{console.log(g),m.current&&g&&m.current.scrollIntoView({block:"end"})},[n.length,g]);const ve=Y=>{Cr.events.seenMessage(Y)};return c.jsxs(Az,{children:[c.jsxs($z,{children:[c.jsxs(P,{gap:16,children:[!!Object.keys(i).length&&c.jsxs(c.Fragment,{children:[c.jsx(jn,{fallbackIcon:c.jsx(n0,{name:f??"Undefined",width:"35px"}),size:"35px",src:h,colors:["grey"],isAuthor:!1,children:p[0]==="online"&&!d&&c.jsx(g1,{})}),c.jsxs(P,{d:"column",ai:"flex-start",children:[c.jsx(UR,{children:f??"Untitled"}),c.jsx(DR,{typing:_,isGroupChat:d,children:d?c.jsxs(Cs,{children:[a!=null&&a.participants.length?`${a==null?void 0:a.participants.length} members`:null,w!==0&&`, ${w} online`]}):c.jsx(Bf,{isAuthor:!1,showLastSeen:!0,status:p[0]})})]})]}),!Object.keys(i).length&&c.jsxs(P,{gap:16,children:[c.jsx(ne,{width:"35px",height:"35px",radius:"100%"}),c.jsxs(P,{gap:2,d:"column",ai:"flex-start",children:[c.jsx(ne,{width:"100px",height:"12px"}),c.jsx(ne,{width:"40px",height:"9px"})]})]})]}),c.jsx(P,{width:"fit-content",children:c.jsx(W,{$width:"40px",onClick:C,children:c.jsx(cy,{size:20})})})]}),c.jsxs(Rz,{onScroll:$,children:[r&&c.jsx(P,{jc:"center",height:"100%",width:"100%",children:c.jsx(Bi,{})}),!r&&o.map((Y,Ve,Hr)=>{var B,q,ae,ke;const Hi=i[Y[0].sender],Wi=!_z(new Date(((B=Hr[Ve][0])==null?void 0:B.sentTime)??""),new Date(((ae=(q=Hr[Ve-1])==null?void 0:q[0])==null?void 0:ae.sentTime)??"")),zn=Y[0].sender===OR,j=new Date(((ke=Hr[Ve][0])==null?void 0:ke.sentTime)??"").toLocaleDateString("ru-RU",{day:"2-digit",month:"long",year:"numeric"});return c.jsxs(c.Fragment,{children:[Wi&&c.jsx(Nz,{children:j}),c.jsxs(jz,{children:[!zn&&c.jsx(Mz,{children:c.jsx(Dz,{children:c.jsx(jn,{fallbackIcon:c.jsx(jn,{fallbackIcon:c.jsx(n0,{width:"35px",name:f??"Undefined"}),size:"35px",src:h,colors:["grey"],isAuthor:!1}),colors:["grey"],size:"35px",src:Hi==null?void 0:Hi.photoURL,isAuthor:!1})})}),c.jsx(Lz,{children:Y.map((ft,Ct)=>{var At;const En=!((At=ft.seenBy)!=null&&At.includes((s==null?void 0:s.uid)??""));return zn?c.jsx(qz,{message:ft},ft.id):c.jsx(ge.Fragment,{children:c.jsx(Wz,{isFirst:Ct===0,chatData:i,isPrevByTheSameSender:Ct!==Y.length-1,message:ft,isMine:ft.sender===(s==null?void 0:s.uid),isNotSeen:!!En,onSeen:ve},ft.id)},ft.id)})})]})]})}),c.jsx("div",{ref:m,style:{width:"100%",minHeight:"20px"}}),!g&&c.jsxs(Fz,{children:[c.jsx(Tj,{size:20}),v.length!==0&&c.jsx(p1,{children:v.length})]})]}),c.jsxs(bz,{children:[c.jsx(W,{$width:"40px",children:c.jsx(Lj,{})}),c.jsx(Pz,{ref:k,onKeyDown:Y=>{Y.key==="Enter"&&z()},placeholder:"Type something",value:E,onChange:I}),E.length!==0&&c.jsx(Uz,{$height:"35px",onClick:z,children:c.jsx(Cj,{size:23})})]})]})},Qz=x.div`
    width: 100%;
    height: 100%;
    display: flex;
`,Kz=x.div`
    min-width: 380px;
    max-width: 380px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    background: ${({theme:e})=>e.colors.pageBackground};
    border-right: 1px solid ${({theme:e})=>e.colors.border};
`,Yz=x.div`
    width: 100%;
`,Xz=()=>{const{chats:e,loadingChats:t,chatData:n,lastMessage:r,loadingChatData:i,unreadCounts:s,currentChatId:o}=Cr.useChats(),a=Oh();Cr.useLoadChats();const l=()=>{Lt.events.open({title:"Create chat with friends",content:c.jsx(vz,{})})};return c.jsxs(Qz,{children:[!o&&c.jsxs(Kz,{children:[c.jsxs(P,{padding:"20px 25px 10px 25px",width:"100%",gap:10,children:[c.jsx(an,{icon:c.jsx(ua,{}),placeholder:"Search for chats..."}),c.jsx(W,{onClick:l,$width:"48px",children:c.jsx(Zj,{size:20})})]}),c.jsx(Us,{background:a.colors.pageBackground2,loading:t||i,skeleton:c.jsx(BR,{}),children:c.jsx(P,{d:"column",gap:0,width:"100%",height:"100%",padding:"10px 0",children:e.map(u=>c.jsx(c.Fragment,{children:c.jsx(zR,{isSelected:o===u.id,unreadCount:s[u.id],lastMessage:r[u.id],chatData:n,chat:u},u.id)}))})})]}),c.jsx(Yz,{children:c.jsx(nk,{children:c.jsx(uo,{path:":id",element:c.jsx(_P,{})})})})]})};function Ws(e){let t;if(e){if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)){t=e.substring(1).split(""),t.length==3&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]);const n=+("0x"+t.join(""));return[n>>16&255,n>>8&255,n&255].join(",")}throw new Error("Bad Hex")}}const Jz=x.div`
	--color-bg1: ${({$colors:e})=>(e==null?void 0:e[0])??"purple"};
	--color-bg2: ${({theme:e})=>e.colors.pageBackground};
	--color1: ${({$colors:e})=>Ws(e==null?void 0:e[2])??"18, 113, 255"};
	--color2: ${({$colors:e})=>Ws(e==null?void 0:e[2])??"221, 74, 255"};
	--color3: ${({$colors:e})=>Ws(e==null?void 0:e[3])??"100, 220, 255"};
	--color4: ${({$colors:e})=>Ws(e==null?void 0:e[4])??"208, 50, 50"};
	--color5: ${({$colors:e})=>Ws(e==null?void 0:e[5])??"188, 180, 50"};
	--color-interactive: ${({$colors:e})=>Ws(e==null?void 0:e[1])??"140, 100, 255"};
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
`;let sg=0,og=0,iE=0,sE=0;const oE=50,Zz=()=>{const e=S.useRef(null),{currentSong:t}=H.useSong(),n=S.useCallback(()=>{sg+=(iE-sg)/oE,og+=(sE-og)/oE,e.current&&(e.current.style.transform=`translate(${sg}px, ${og}px)`),requestAnimationFrame(()=>n())},[]),r=i=>{iE=i.clientX,sE=i.clientY};return S.useEffect(()=>{n()},[n]),c.jsxs(Jz,{$colors:(t==null?void 0:t.imageColors)??[],onMouseMove:r,children:[c.jsx("div",{className:"noise-layer"}),c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",children:c.jsx("defs",{children:c.jsxs("filter",{id:"goo",children:[c.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),c.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8",result:"goo"}),c.jsx("feBlend",{in:"SourceGraphic",in2:"goo"})]})})}),c.jsxs("div",{className:"gradients-container",children:[c.jsx("div",{className:"g1"}),c.jsx("div",{className:"g2"}),c.jsx("div",{className:"g3"}),c.jsx("div",{className:"g4"}),c.jsx("div",{className:"g5"}),c.jsx("div",{className:"interactive",ref:e})]})]})},e8=x.div`
   position: absolute;
   left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
`,t8=()=>{const e=H.fullscreen.useFullScreen();return c.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[!e&&c.jsx(Zz,{}),c.jsx(e8,{children:c.jsx(W,{$width:"260px",style:{fontSize:"2rem",minHeight:"60px"},children:c.jsxs(P,{gap:10,children:[c.jsx(fy,{size:40}),"Play Wave"]})})})]})},n8=e=>{const[t,n]=S.useState("password"),r=t==="password"?c.jsx(Bj,{}):c.jsx(Hj,{}),i=()=>{n(s=>s==="password"?"text":"password")};return c.jsx(an,{label:"Password",placeholder:"Enter password",rightIcon:r,onRightIconClick:i,type:t,icon:c.jsx(r4,{}),...e})},r8=({actionAfterLogin:e})=>{const[t,n]=S.useState(""),[r,i]=S.useState(""),[s,o]=S.useState({}),[{data:a,error:l},u]=fe.useUser(),d=()=>{const m={};return t||(m.email="Email is required"),r||(m.password="Password is required"),o(m),console.log(m),Object.keys(m).length!==0},h=()=>{const m=d();console.log(m,s),e&&e(),m||fe.events.login({email:t,password:r})};S.useEffect(()=>{a&&Lt.events.close()},[a]),console.log(l);const f=m=>{n(m.currentTarget.value),o(_=>{const w={..._};return delete w.email,w})},p=m=>{i(m.currentTarget.value),o(_=>{const w={..._};return delete w.password,w})};return c.jsxs(P,{d:"column",width:"100%",jc:"space-between",height:"100%",gap:20,padding:"0 25px",children:[c.jsxs(P,{d:"column",jc:"center",width:"100%",height:"300px",gap:20,onKeyDown:m=>m.key==="Enter"&&h(),children:[l==null?void 0:l.message,c.jsx(an,{value:t,onChange:f,placeholder:"Enter email",label:"Email",type:"email",onError:m=>console.log(m),required:!0,icon:c.jsx(Aj,{}),error:s==null?void 0:s.email}),c.jsx(n8,{onChange:p,value:r,required:!0,error:s==null?void 0:s.password})]}),c.jsx(dr,{loading:u,onClick:h,appearance:"primary",children:"Login"}),c.jsx(W,{children:"Don't have an account"})]})},wP=()=>{const[{data:e}]=fe.useUser(),t=r=>()=>{Lt.events.open({title:"Войдите в аккаунт",content:c.jsx(r8,{actionAfterLogin:r})})};return{loggedIn:r=>e===null?t(r):r,openLoginModal:t}},i8=x.header`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px 55px 0 55px;
    top: 0px;
    position: sticky;
    scroll-padding-top: 150px;
    /* border-bottom: 1px solid ${({theme:e})=>e.colors.border}; */
    background: ${({theme:e})=>e.colors.header};
    backdrop-filter: blur(16px);
    color: ${({theme:e})=>e.colors.textColor};
    z-index: 10;

    &.hidden {
        display: none;
    }

    @media (max-width: 1000px) {
        padding: 10px 20px;
        min-height: 80px;
        height: fit-content;
    }
`,s8=x.div`
    width: fit-content;

    @media (max-width: 1000px) {
        display: none;
    }
`,o8=x.div`
    width: 100%;

    @media (min-width: 1001px) {
        display: none;
    }
`,a8=x.h2`
    width: 150px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 1000px) {
        font-weight: 500;
    }
`;var Ei=(e=>(e.light="light",e.dark="dark",e))(Ei||{});const l8={[Ei.light]:jL,[Ei.dark]:vs},c8=Ei.dark,u8=()=>{const e=localStorage.getItem("theme");return e?Ei[e]:c8},dc=te(u8()),d8=Le(e=>{localStorage.setItem("theme",e)}),I1=U(),h8=U();N({clock:I1,source:dc,fn:e=>e===Ei.light?Ei.dark:Ei.light,target:[dc,d8]});N({clock:h8,source:dc,fn:(e,t)=>t,target:dc});const xP=()=>{const e=xe(dc);return{theme:e,themeParams:l8[e]}},f8=()=>{const[{data:e}]=fe.useUser(),t=_c(),n=()=>{fe.events.logout()},r=()=>{Lt.events.open({title:"Share profile with friends",content:c.jsx(Gc,{entity:e})}),ln.events.close()};return c.jsxs(wc,{children:[c.jsxs(W,{onClick:()=>{t("/me"),ln.events.close()},children:[c.jsx(jn,{colors:(e==null?void 0:e.imageColors)??["grey"],src:e==null?void 0:e.photoURL,size:"20px",isAuthor:e==null?void 0:e.isAuthor}),"Go to profile"]}),c.jsxs(W,{onClick:r,children:[c.jsx(yc,{}),"Share profile"]}),c.jsx(Go,{}),c.jsxs(W,{children:[c.jsx(eT,{}),"Edit"]}),c.jsxs(W,{children:[c.jsx(c4,{}),"Settings"]}),c.jsxs(W,{onClick:()=>I1(),children:[c.jsx(aT,{}),"Change theme"]}),c.jsx(Go,{}),c.jsxs(W,{onClick:n,children:[c.jsx(Yj,{}),"Logout"]})]})},qf=({children:e,hide:t})=>{const[{data:n},r]=fe.useUser(),i=fr(),{openLoginModal:s}=wP(),o=k1.find(l=>l.url.includes(i.pathname.split("/")[1])),a=l=>{l.stopPropagation(),ln.events.open({content:c.jsx(f8,{}),e:l,height:289})};return c.jsxs(i8,{className:t?"hidden":"",children:[c.jsxs(P,{width:"100%",height:"50px",jc:"space-between",gap:30,children:[c.jsx(a8,{children:o==null?void 0:o.title}),c.jsx(s8,{children:e}),c.jsxs(P,{width:"150px",gap:20,jc:"flex-end",children:[n&&c.jsx(W,{$width:"40px",onClick:a,children:c.jsx(jn,{colors:n==null?void 0:n.imageColors,src:n==null?void 0:n.photoURL,size:"30px",isAuthor:n==null?void 0:n.isAuthor})}),!n&&c.jsx(dr,{loading:r,width:"100px",onClick:s(),appearance:"primary",children:"Login"})]})]}),c.jsx(o8,{children:e})]})},p8=x.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,g8=x.div`
  padding: 20px 50px;
  height: 100%;
  width: 100%;
`,m8=()=>{const[e,t]=fe.useFriends();return c.jsxs(p8,{children:[c.jsx(qf,{}),c.jsx(Us,{loading:t,skeleton:c.jsx(yP,{}),children:c.jsxs(g8,{children:[c.jsxs(P,{gap:10,width:"100%",children:[c.jsx(an,{placeholder:"Search for friends...",icon:c.jsx(ua,{})}),c.jsx(dr,{width:"200px",appearance:"primary",children:"Create group chat"})]}),c.jsx(Go,{}),e.map(n=>c.jsx(hr,{showLastSeen:!0,user:n,orientation:"horizontal",children:c.jsx(W,{$width:"40px",children:c.jsx(Jj,{})})},n.uid))]})})]})},S1=Le(async e=>{try{return await yR.getHistoryByUserId(e)}catch(t){throw new Error(t.message)}}),o0=Sy(),Gf=te([]);Gf.reset(Oe);const aE=qt.map(e=>{var t;return((t=e.data)==null?void 0:t.uid)??null});N({clock:[o0.open,aE],source:{gateStatus:o0.status,userId:aE,history:Gf},filter:({history:e,userId:t,gateStatus:n})=>n&&t!==null&&e.length===0,fn:({userId:e})=>e,target:S1});Vs(S1,Gf);const lE={useHistory:()=>xe([Gf,S1.pending]),useLoadHistory:()=>Iy(o0)},y8=x.div``,v8=x.div`
    width: 100%;
    display: grid;
    padding: 8px;
    grid-template-columns: 55px 1fr 1fr 200px 86px;
    color: ${({theme:e})=>e.colors.textColor};
    position: sticky;
    top: 0;
    background: ${({theme:e})=>e.colors.pageBackground};
    z-index: 2;

    @media (max-width: 1080px) {
        display: none;
    }
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
`;x(qc)`
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
`;x(qc)`
    height: 15px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};
    width: 100%;

    @container (min-width: 700px) {
        width: 100%;
    }

    @container (max-width: 699px) {
        width: 300px;
    }
`;x(qc)`
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
`;x(qc)`
    height: 15px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};

    @container (min-width: 700px) {
        width: 380px;
    }

    @container (max-width: 699px) {
        display: none;
    }
`;const Qf=e=>c.jsxs(y8,{children:[!!e.songs.length&&c.jsxs(v8,{children:[c.jsx(ku,{}),c.jsx(ku,{children:"Name"}),c.jsx(ku,{children:"Author"}),c.jsx(ku,{children:"Listenings"})]}),c.jsx(uP,{...e})]}),_8=()=>c.jsxs(P,{d:"column",width:"100%",height:"100%",padding:"20px 50px",children:[c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{})]}),w8=x.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
`,x8=x.div`
   padding: 20px 50px;
   height: 100%;
   width: 100%;
`,E8=()=>{const[e,t]=lE.useHistory();return lE.useLoadHistory(),c.jsxs(w8,{children:[c.jsx(qf,{}),c.jsx(Us,{color:"",loading:t,skeleton:c.jsx(_8,{}),children:c.jsx(x8,{children:c.jsx(Qf,{songs:e,listName:"History",listIcon:c.jsx(dy,{}),listUrl:"/history"})})})]})},I8=x.div`
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
`,S8=x(js)`
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
`,T8=x.div`
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
`,k8=({tabs:e,currentTab:t=0})=>{const[n,r]=S.useState(t);return S.useEffect(()=>{r(t)},[t]),c.jsxs(I8,{children:[c.jsx(T8,{$width:`${100/e.length}%`,$shift:n}),e.map(({title:i,url:s},o)=>c.jsx(S8,{to:s,className:o===n?"selected":"",onClick:()=>r(o),children:i},i+o))]})},C8=x.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`,cE=[{title:"Songs",url:""},{title:"Playlists",url:"playlists"},{title:"Authors",url:"authors"}],A8=()=>{const e=fr(),t=cE.findIndex(n=>n.url===e.pathname.split("/").at(-1));return c.jsxs(C8,{children:[c.jsx(qf,{children:c.jsx(k8,{tabs:cE,currentTab:t===-1?0:t})}),c.jsx(tk,{})]})},EP=x.div`
    height: 10%;
    width: 100%;
    display: flex;
    padding: var(--page-padding);
`,IP=x.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    height: fit-content;

    @media (max-width: 768px) {
        gap: 20px;
    }
`,R8=()=>{const[e,t]=fe.useAddedAuthors();return c.jsxs(EP,{children:[t&&c.jsx(Bi,{}),c.jsx(IP,{children:e.map(n=>c.jsx(hr,{user:n},n.uid))})]})},P8=()=>{const[e,t]=fe.useAddedPlaylists(),[n,r]=fe.useOwnPlaylists();return c.jsxs(EP,{children:[(t||r)&&c.jsx(Bi,{}),c.jsx(IP,{children:[...n,...e].map(i=>c.jsx(Ps,{playlist:i},i.id))})]})},b8=x.div`
    padding: 20px 50px;
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;

    @media (max-width: 1000px) {
        padding: 0 20px;
        padding-bottom: 40px;
        gap: 4px;
    }
`,N8=()=>{const[e]=fe.useSongLibrary(),[{data:t}]=fe.useUser();return c.jsxs(b8,{children:[c.jsx(Qf,{listName:"Library",listIcon:c.jsx(ls,{}),listUrl:"/library",songs:e}),!t&&c.jsxs(P,{d:"column",gap:10,width:"100%",height:"100%",jc:"center",children:[c.jsx(ls,{opacity:.5,size:100}),c.jsx(Cs,{style:{fontSize:"1.1rem"},children:"Need to log in into account to see your library"})]}),t&&!e.length&&c.jsxs(P,{d:"column",gap:10,width:"100%",children:[c.jsx(ls,{opacity:.5,size:100}),c.jsx(Cs,{style:{fontSize:"1.1rem"},children:"No songs added to library"})]})]})},j8=()=>{const[{data:e}]=fe.useUser();return c.jsx(vP,{userData:e})},M8="50px",L8=x.div`
    width: 100%;
`;x.div`
    background: ${({background:e})=>e};
    width: 100%;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
`;const SP=x.div`
    width: 100%;
    padding: 40px ${M8};

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
`;const D8=x.div``;x.div`
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
`;const $8=x(P)`
    @media (max-width: 1000px) {
        display: none;
    }
`,O8=()=>c.jsxs(P,{width:"100%",d:"column",ai:"flex-start",children:[c.jsx(ne,{width:"100%",height:"400px",radius:"0",children:c.jsxs(P,{width:"100%",d:"column",padding:"56px 50px 50px 50px",ai:"center",jc:"center",gap:20,children:[c.jsx(ne,{width:"200px",height:"200px",radius:_1}),c.jsxs(P,{d:"column",gap:8,children:[c.jsx(ne,{width:"200px",height:"30px"}),c.jsx(ne,{width:"100px",height:"20px",radius:"3px"})]})]})}),c.jsxs(SP,{children:[c.jsxs($8,{width:"100%",gap:20,style:{marginTop:"4px",marginBottom:"14px"},children:[c.jsx("div",{style:{width:"40px"}}),c.jsx("div",{style:{width:"calc(25% - 4px)",height:"18px"},children:c.jsx(ne,{width:"50%",height:"18px",radius:"6px"})}),c.jsx("div",{style:{width:"calc(25% - 2px)",height:"18px"},children:c.jsx(ne,{width:"50%",height:"18px",radius:"6px"})}),c.jsx("div",{style:{width:"20%",height:"18px"},children:c.jsx(ne,{width:"50%",height:"18px",radius:"6px"})}),c.jsx("div",{style:{width:"18%",height:"18px"},children:c.jsx(ne,{width:"50%",height:"18px",radius:"6px"})})]}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{})]})]}),V8=()=>{const{currentPlaylist:e,currentPlaylistSongs:t,loading:n}=r0.usePlaylist();x1({page:"playlist",onChangeId:i=>r0.events.loadPlaylist(i)});const r=()=>{Lt.events.open({title:`Share ${e==null?void 0:e.name} with friends`,content:c.jsx(Gc,{entity:e})})};return c.jsx(Us,{color:"",loading:n,skeleton:c.jsx(O8,{}),children:c.jsxs(L8,{children:[c.jsx(gP,{handleClickShare:r,id:"",name:e==null?void 0:e.name,subtitle:c.jsxs(P,{gap:3,children:[c.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:"300",opacity:"0.6"},children:[e!=null&&e.isAlbum?"Album":"Playlist"," / "]}),c.jsx(Rs,{width:"fit-content",authors:e==null?void 0:e.authors})]}),numberOfListenersPerMonth:e==null?void 0:e.listens,subscribers:e==null?void 0:e.subscribers,imageComponent:c.jsx(dh,{size:"200px",isAlbum:(e==null?void 0:e.isAlbum)??!1,src:e==null?void 0:e.image,colors:e==null?void 0:e.imageColors}),isPrivate:e==null?void 0:e.isPrivate,colors:e==null?void 0:e.imageColors,bottomButtons:c.jsx(E1,{buttonColor:e==null?void 0:e.imageColors[0],isAdmin:!1,isPageOwner:!1,queueInfo:{listName:(e==null?void 0:e.name)??"",listIcon:void 0,listUrl:`/playlist/${(e==null?void 0:e.id)??""}`,songs:t??[]}})}),c.jsx(SP,{children:c.jsx(Qf,{songs:t??[],listName:(e==null?void 0:e.name)??"",listIcon:(e==null?void 0:e.image)??"",listUrl:`/playlist/${(e==null?void 0:e.id)??""}`})}),c.jsx(D8,{})]})})},TP=te(""),T1=te([]),kP=te([]),CP=U(),AP=U(),RP=U(),PP=U(),Kf=Le(),Yf=Le(),U8=Kf.pending,F8=Yf.pending;N({clock:CP,fn:e=>e,target:[TP,AP]});N({clock:RP,fn:e=>e,target:T1});N({clock:AP,target:Kf});Kf.use(async e=>{try{return await qv.getSearchSuggestions(e)}catch(t){throw new Error(t.message)}});N({clock:Kf.doneData,fn:e=>e,target:T1});N({clock:PP,target:Yf});N({clock:Yf.doneData,fn:e=>e,target:kP});Yf.use(async e=>{try{return await qv.getSearchResult(e)}catch(t){throw new Error(t.message)}});const z8=x.div`
    width: 100%;
    position: relative;
`,B8=x.div`
    width: 100%;
    background: ${({theme:e})=>e.colors.pageBackground};
    height: fit-content;
    min-height: 45px;
    max-height: 504px;
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
        animation: appear 0.5s;
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`,H8=x.div`
    padding: 8px 6px;
    padding-right: 15px;
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

    &.selected {
        background: ${({theme:e})=>e.colors.blue.transparent};
        font-weight: 400;
    }

    &:hover {
        background: ${({theme:e})=>e.colors.lightHover};
    }
`,W8=x.div`
    white-space: nowrap;
`,uE=x.div`
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
`,a0=({item:e,handleSubmitSuggestion:t,suggestedIndex:n,index:r,icon:i,value:s,searchHistory:o})=>{const a=sa(e),l=i??en[a],u=Oh(),d=Ao(e),h=!o&&(s.length>=4||As(s).includes(As(d)))&&r===0,f=(p,m)=>({user:c.jsx(jn,{isAuthor:!1,src:m.photoURL,colors:m.imageColors,size:"30px"}),author:c.jsx(jn,{isAuthor:!0,src:m.photoURL,colors:m.imageColors,size:"30px"}),song:c.jsx(tf,{src:m.cover,colors:m.imageColors,size:"30px"}),playlist:c.jsx(dh,{src:m.image,colors:m.imageColors,size:"30px",isAlbum:!1}),album:c.jsx(dh,{src:m.image,colors:m.imageColors,size:"30px",isAlbum:!0})})[p];return c.jsxs(H8,{className:n===r?"selected":"",onClick:()=>t(r),children:[c.jsxs(P,{gap:8,width:"100%",children:[o&&c.jsx(uE,{children:c.jsx(dy,{})}),h&&f(a,e),!o&&!h&&c.jsx(uE,{children:l}),c.jsx(W8,{children:d}),e.isVerified&&c.jsx(Vh,{size:18,style:{color:u.colors.blue.main}})]}),e.authors&&c.jsx(Rs,{authors:e.authors})]},e.id??e.uid+r)},q8=({initialValue:e,suggestions:t,historySuggestions:n,onChange:r,onSumbit:i,onChangeSuggestions:s,onSuggestionSubmit:o})=>{const[a,l]=S.useState(!1),[u,d]=S.useState(n),[h,f]=S.useState(e??""),[p,m]=S.useState(null),_=[...t,...u],w=S.useRef(null),g=p!==null?Ao(_[p]):h,y=()=>{l(t.length>0||((u==null?void 0:u.length)??0)>0)},v=()=>{l(!1)};S.useEffect(()=>{d(n)},[n]);const E=C=>{if(C!==null){if(!o){f(Ao(t[C])),s([]),l(!1),m(null);return}l(!1),o(_[C],C);return}l(!1),i(g)};return{inputValue:g,showHints:a,ref:w,suggestedIndex:p,localHistorySuggestions:u,handleFocus:y,handleBlur:v,handleKeyDown:C=>{if(_.length!==0){if(C.key==="ArrowDown"){C.preventDefault(),m($=>$===null?0:$===_.length-1?null:$+1);return}if(C.key==="ArrowUp"){C.preventDefault(),m($=>$===0?null:$===null?_.length-1:$-1);return}if(C.key==="Enter"){C.preventDefault(),E(p);return}p!==null&&(f(C.currentTarget.value),m(null))}},handleChange:C=>{const $=C.currentTarget.value;if(console.log("value::::::",$),r($),f($),l(_.length>0),$.length!==0){console.log(u);const z=n.filter(ve=>As(Ao(ve)).includes(As($??"")));d(z)}else d(n);C.currentTarget.value.length===0&&(l(!1),m(null))},onRightIconClick:()=>{r("")},handleSubmitSuggestion:E}},G8=e=>{const{inputValue:t,ref:n,localHistorySuggestions:r,showHints:i,suggestedIndex:s,handleFocus:o,handleKeyDown:a,handleChange:l,onRightIconClick:u,handleSubmitSuggestion:d}=q8(e),{suggestions:h,areSuggestionsLoading:f}=e;return c.jsxs(z8,{children:[c.jsx(an,{icon:c.jsx(ua,{}),value:t,onKeyDown:a,onChange:l,onFocus:o,onClick:o,placeholder:"Search...",rightIcon:f?c.jsx(Bi,{}):t?c.jsx(uT,{}):null,onRightIconClick:u,type:"text"}),i&&c.jsxs(B8,{ref:n,onClick:p=>p.preventDefault(),children:[r==null?void 0:r.map((p,m)=>c.jsx(a0,{value:t,searchHistory:!0,suggestedIndex:s,item:p,index:m,handleSubmitSuggestion:d},uh(p))),h.map((p,m)=>p?(console.log(r.length+m),c.jsx(a0,{value:t,suggestedIndex:s,item:p,index:r.length+m,handleSubmitSuggestion:d},uh(p)+m)):null)]})]})},Q8=x(js)`
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
`,K8=x(ga)`
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
`,Y8=x.div`
    font-size: 24px;
    font-weight: 400;
    color: #fff;
`,dE=x.div`
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
`,X8=({author:e})=>c.jsxs(Q8,{to:`/author/${e.uid}`,children:[c.jsxs(P,{width:"100%",jc:"space-between",style:{position:"relative",zIndex:1},children:[c.jsxs(P,{width:"250px",d:"column",height:"100%",jc:"space-between",ai:"flex-start",gap:30,children:[c.jsxs(P,{d:"column",gap:14,children:[c.jsxs(P,{width:"100%",d:"column",ai:"flex-start",children:[c.jsx(Cs,{style:{color:"#fff"},children:"Top Result"}),c.jsxs(P,{gap:10,children:[c.jsx(Y8,{children:e==null?void 0:e.displayName}),e.isVerified&&c.jsx(Vh,{})]})]}),c.jsx(P,{width:"100%",gap:30,children:c.jsxs(P,{gap:4,children:[c.jsxs(dE,{children:[s0(e==null?void 0:e.numberOfListenersPerMonth),c.jsx(Nd,{})]}),"∙",c.jsxs(dE,{children:[e==null?void 0:e.subscribers,c.jsx(lT,{})]})]})})]}),c.jsx(E1,{buttonColor:e.imageColors[1],isAdmin:!1,isPageOwner:!1,queueInfo:{listName:"",listIcon:void 0,listUrl:"",songs:[]}})]}),c.jsx(jn,{isAuthor:e==null?void 0:e.isAdmin,colors:e.imageColors,src:e==null?void 0:e.photoURL,size:"150px"})]}),c.jsx(K8,{$colors:e==null?void 0:e.imageColors})]}),J8=x.div`
    width: 100%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 30px;
    max-width: 650px;

    @media (max-width: 1000px) {
        padding: 0 20px;
    }
`,Z8=({result:e})=>{const[t]=sk(),n=fr(),{currentSong:r,state:i,loaded:s}=H.useSong(),o={listName:"Search",listIcon:en.song,listUrl:n.pathname,songs:e.filter(h=>sa(h)==="song")},{handlePlay:a}=w1(o);if(e.length===0)return null;const l=e[0],u={song:(h,f,p)=>c.jsx(Qc,{song:h,playing:p&&i==="playing",loading:p&&i==="loading",loaded:p&&s,index:f,onClick:a}),author:h=>c.jsx(hr,{user:h,orientation:"horizontal"}),user:h=>c.jsx(hr,{user:h,orientation:"horizontal"}),playlist:h=>c.jsx(Ps,{orientation:"horizontal",playlist:h}),album:h=>c.jsx(Ps,{orientation:"horizontal",playlist:h})},d="isAuthor"in l&&l.isAuthor&&t.get("type")==="author";return c.jsxs(J8,{children:[!d&&c.jsx("h3",{style:{fontWeight:300,marginBottom:"10px"},children:"Result"}),d&&c.jsx(X8,{author:l}),e.map((h,f)=>{const p=sa(h);if(d&&f===0)return null;if(p==="song"){const m=h.id===(r==null?void 0:r.id);return u[p](h,f,m)}return u[p](h)})]})},eB=()=>c.jsxs(P,{gap:6,width:"100%",height:"100%",d:"column",style:{maxWidth:"650px",margin:"20px auto"},children:[c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{}),c.jsx(J,{})]}),tB=x.div`
    width: 100%;
    margin: auto;
    margin-top: 1px;
    max-width: 650px;
    z-index: 10;

    @media (max-width: 1000px) {
        padding: 20px;
        padding-top: 0;
    }
`,nB=()=>{const[e]=sk(),t=e.get("query")??"",n=_c(),[r,i,s]=xe([TP,CP,U8]),o=fe.useSearchHistory(),a=xe(T1),[l,u,d]=xe([kP,F8,PP]),h=_=>{i(_)},f=_=>{const w=Ao(_),g=sa(_);console.log({type:g}),n(`/search?query=${w}&type=${g}`)},p=_=>{RP(_)},m=_=>{console.log("onSumbit"),n(`/search?query=${_}&type=query`)};return S.useEffect(()=>{t&&d(As(t))},[d,t]),c.jsxs(P,{d:"column",width:"100%",height:"100%",children:[c.jsx(qf,{}),c.jsx(tB,{children:c.jsx(G8,{initialValue:t??r,suggestions:a,historySuggestions:o,areSuggestionsLoading:s,onChange:h,onChangeSuggestions:p,onSumbit:m,onSuggestionSubmit:f})}),c.jsx(Us,{color:"",loading:u,skeleton:c.jsx(eB,{}),children:c.jsx(Z8,{result:l})})]})},rB=()=>c.jsx("div",{children:"SongPage"}),iB=x.div`
	padding: 40px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 10px;
`,ag=x.div`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	background: #00000029;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 16px;


	.title {
		svg {
			width: 18px;
			height: 18px;
		}
	}

	h3 {
		color: #fff;
		font-weight: 300;
		opacity: 0.9;
	}
`,sB=()=>{const[e,t]=S.useState([]),[n,r]=S.useState([]),[i,s]=S.useState([]);return S.useEffect(()=>{qv.getTopSearches().then(o=>{t(o)}),sn.getTopSongs().then(o=>{r(o)}),Ke.getTopAuthorsByListenings().then(o=>{console.log(o),s(o)})},[]),c.jsxs(iB,{children:[c.jsxs(ag,{children:[c.jsxs(P,{className:"title",jc:"space-between",width:"100%",children:[c.jsx("h3",{children:"Trending Searches"}),c.jsx(ua,{})]}),c.jsx(P,{d:"column",gap:4,ai:"flex-start",width:"100%",children:e.map(o=>{if(o)return c.jsx(a0,{value:"",index:1,item:o,handleSubmitSuggestion:()=>null},"id"in o?o.id:o.uid)})})]}),c.jsxs(ag,{children:[c.jsxs(P,{className:"title",jc:"space-between",width:"100%",children:[c.jsx("h3",{children:"Top songs"}),en.song]}),c.jsx(P,{d:"column",gap:4,ai:"flex-start",width:"100%",children:c.jsx(Qf,{songs:n,listName:null,listIcon:void 0,listUrl:null})})]}),c.jsxs(ag,{children:[c.jsxs(P,{className:"title",jc:"space-between",width:"100%",children:[c.jsx("h3",{children:"Top authors"}),en.author]}),c.jsx(P,{d:"column",gap:4,ai:"flex-start",width:"100%",children:i.map(o=>c.jsx(hr,{orientation:"horizontal",user:o},o.uid))})]})]})},k1=[{url:"discover",title:"Discover",icon:c.jsx(Rj,{}),component:c.jsx(t8,{}),section:"features",private:!1},{url:"search",title:"Search",icon:c.jsx(ua,{}),component:c.jsx(nB,{}),section:"features",private:!1},{url:"trends",title:"Trends",icon:c.jsx(u4,{}),component:c.jsx(sB,{}),section:"features",private:!1},{url:"liked",title:"Liked",icon:c.jsx(uy,{}),component:c.jsx(A8,{}),section:"your music",private:!0,children:[{url:"",title:"Songs",icon:c.jsx(ls,{}),component:c.jsx(N8,{}),section:"your music",private:!0},{url:"playlists",title:"Playlists",icon:c.jsx(py,{}),component:c.jsx(P8,{}),section:"your music",private:!0},{url:"authors",title:"Authors",icon:c.jsx(nT,{}),component:c.jsx(R8,{}),section:"your music",private:!0}]},{url:"history",title:"History",icon:c.jsx(dy,{}),component:c.jsx(E8,{}),section:"your music",private:!0},{url:"chat",title:"Chat",icon:c.jsx(Y_,{}),component:c.jsx(Xz,{}),children:[{url:":id",title:"Chat",icon:c.jsx(Y_,{}),component:c.jsx(_P,{}),section:"your activities",private:!0}],section:"your activities",private:!0},{url:"friends",title:"Friends",icon:c.jsx(d4,{}),component:c.jsx(m8,{}),section:"your activities",private:!0},{url:"song/:id",title:"Song",icon:c.jsx(ls,{}),component:c.jsx(rB,{}),section:"your music",private:!0},{url:"playlist/:id",title:"Playlist",icon:c.jsx(Uj,{}),component:c.jsx(V8,{}),section:"your music",private:!0},{url:"author/:id",title:"Author",icon:c.jsx(e4,{}),component:c.jsx(vP,{}),section:"your music",private:!0},{url:"me",title:"Me",icon:c.jsx(cT,{}),component:c.jsx(j8,{}),section:"your music",private:!0}],bP=e=>{const t=[];for(let n=0;n<e.length;n++){const r=e[n],i=k1.find(s=>s.title===r);i&&t.push(i)}return t},oB=bP(["Discover","Search","Trends","Liked","History","Chat","Friends"]),aB=bP(["Discover","Liked","Chat","Search"]),lB=x.nav`
    min-height: 80px;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding: 0 10px;
    padding-top: 10px;
`,cB=x.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
`,uB=x.li`
    width: 100%;
`,dB=x(ik)`
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
`,hB=x.div`
    svg {
        width: 26px;
        height: 26px;
    }
`,fB=x.div`
    font-weight: 300;
    font-size: 0.75rem;
`,pB=({route:e})=>{const{url:t,title:n,icon:r}=e;return c.jsxs(dB,{to:t,className:({isActive:i})=>i?"active":"",children:[c.jsx(hB,{children:r}),c.jsx(fB,{children:n})]})},gB=()=>c.jsx(lB,{children:c.jsx(cB,{children:aB.map(e=>c.jsx(uB,{children:c.jsx(pB,{route:e})},e.url))})}),mB=()=>{const{opened:e,title:t,content:n}=Lt.useModal();if(!e)return null;const r=()=>{Lt.events.close()};return c.jsx(tz,{children:c.jsxs(nz,{children:[c.jsx(sP,{onClick:r}),c.jsx(rz,{children:t}),c.jsx(iz,{children:n})]})})},yB=(e,t)=>{const n=S.useCallback(r=>{e.current&&!e.current.contains(r.target)&&t()},[t,e]);S.useEffect(()=>(document.addEventListener("click",n),()=>{document.removeEventListener("click",n)}),[n])},vB=x.div`
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
`,_B=()=>{const{content:e,height:t,width:n,isOpen:r,x:i,y:s,origin:o}=ln.usePopup(),a=S.useRef(null);return yB(a,()=>{r&&ln.events.close()}),c.jsx(vB,{$isOpen:r,$transformOrigin:o,ref:a,$posX:i,$posY:s,$height:t,$width:n,children:e})},wB=x.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({theme:e})=>e.colors.textColor};
    opacity: 0.7;
`,xB=x.div`
    width: 21px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 21px;
        height: 21px;
    }
`,EB=x.div`
    font-weight: 300;
`,IB=({icon:e,text:t})=>c.jsxs(wB,{children:[c.jsx(xB,{children:e}),c.jsx(EB,{children:t})]}),SB=(e,t)=>{const n={};return e.forEach(r=>{const i=r[t];n[i]===void 0?n[i]=[r]:n[i].push(r)}),n},TB=x.label`
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
`,kB=x.div`
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
`,CB=()=>c.jsxs(TB,{children:[c.jsx("input",{type:"file"}),c.jsx(kB,{children:c.jsx(bj,{})})]}),AB=()=>c.jsxs(P,{d:"column",gap:20,width:"100%",children:[c.jsx(CB,{}),c.jsx(an,{required:!0,placeholder:"Enter name",label:"Playlist name"}),c.jsx(dr,{appearance:"primary",disabled:!0,children:"Create"})]}),RB=x(W)`
	min-height: 20px;
	height: 20px;
`,PB=x.div`
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
`,bB=()=>{const{theme:e}=xP(),t=()=>{I1()};return c.jsx(RB,{$width:"20px",onClick:t,children:c.jsxs(PB,{className:`theme ${e.toString()}`,children:[c.jsx(aT,{size:18}),c.jsx(t4,{size:18})]})})},NB=()=>{var o;const e=SB(oB,"section"),{loggedIn:t}=wP(),[n]=fe.useOwnPlaylists(),i={chat:Cr.useChatUnreadCount()},s=t(()=>{Lt.events.open({title:"Create Playlist",content:c.jsx(AB,{})})});return c.jsxs(AU,{children:[c.jsxs(RU,{children:[c.jsx(hP,{}),c.jsx(bB,{})]}),Object.keys(e).map((a,l)=>c.jsxs(qx,{children:[c.jsx(Gx,{children:a}),e[a].map(u=>c.jsx(PU,{to:u.url,className:({isActive:d})=>d?"active":"",children:c.jsxs(P,{width:"100%",jc:"space-between",children:[c.jsx(IB,{icon:u.icon,text:u.title}),!!i[u.url]&&c.jsx(p1,{children:i[u.url]})]})},u.url))]},l)),c.jsxs(qx,{children:[c.jsxs(P,{jc:"space-between",width:"100%",children:[c.jsx(Gx,{children:"Your Playlists"}),c.jsx("button",{className:"add-playlist",onClick:s,children:c.jsx(o4,{})})]}),c.jsx(bU,{children:(o=n==null?void 0:n.slice(0,4))==null?void 0:o.map(a=>c.jsx(Ps,{orientation:"horizontal",playlist:a},a.id))})]})]})},jB=x.div`
    height: calc(100dvh - 80px);
    display: flex;

    @media (max-width: 1000px) {
        height: calc(100dvh - 130px);
    }
`,MB=x.div`
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
`,LB=x.h1`
    font-size: 1.1rem;
    font-weight: 200;

    @media (max-width: 1000px) {
        font-size: 0.95rem;
    }
`,DB=x.div`
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
`,$B=x(ga)`
    overflow-y: auto;
    height: 100%;
    padding: 50px 20px;
    animation: none;
    scroll-padding-bottom: 300px;

    & > * {
        gap: 10px;
        font-size: 1.4rem;
    }
`,OB=x.div`
    display: none;

    @media (max-width: 1000px) {
        display: block;
        width: fit-content;
    }
`,VB=x.div`
    min-width: 300px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    @media (max-width: 1000px) {
        display: none;
    }
`,UB=()=>{const{currentSong:e}=H.useSong();return c.jsx($B,{$colors:e==null?void 0:e.imageColors,children:c.jsx(aP,{})})},FB=()=>{const{currentSong:e}=H.useSong(),t=oP(),n=()=>{H.fullscreen.open()},r=a=>{a.stopPropagation(),ln.events.open({content:c.jsx(nP,{song:e}),height:329,e:a})},i=()=>{Lt.events.open({title:`Share "${e==null?void 0:e.name}" with friends`,content:c.jsx(Gc,{entity:e})})},s=()=>{Lt.events.open({title:`Add "${e==null?void 0:e.name}" to playlist`,content:c.jsx(tP,{song:e})})},o=a=>{a.stopPropagation(),ln.events.open({content:c.jsx(UB,{}),height:500,width:350,e:a})};return c.jsxs(MB,{onClick:n,$background:(e==null?void 0:e.imageColors[0])??"darkgrey",children:[c.jsxs(DB,{children:[c.jsx(tf,{colors:(e==null?void 0:e.imageColors)??["grey"],src:e==null?void 0:e.cover,size:"40px"}),c.jsxs(P,{d:"column",ai:"flex-start",children:[c.jsx(LB,{children:(e==null?void 0:e.name)??"Untitled"}),c.jsx(Rs,{authors:e==null?void 0:e.authors})]})]}),c.jsxs(P,{gap:30,width:"100%",jc:"flex-end",children:[c.jsx(iP,{...t}),c.jsx(OB,{children:c.jsx(rP,{children:c.jsx(W,{$width:"40px",onClick:a=>{a.stopPropagation(),t.onPlay()},children:c.jsx(Hf,{loading:t.state==="loading",playling:t.state==="playing"})})})}),c.jsxs(VB,{children:[c.jsx(Zh,{disabled:!e,width:"42px",songId:e==null?void 0:e.id,likeColor:e==null?void 0:e.imageColors[0]}),c.jsx(W,{$width:"42px",disabled:!e,onClick:s,children:c.jsx(oT,{size:20})}),c.jsx(W,{$width:"42px",disabled:!e,onClick:i,children:c.jsx(yc,{size:20})}),c.jsx(W,{$width:"42px",onClick:o,children:c.jsx(sT,{size:20})}),c.jsx(W,{$width:"42px",onClick:r,disabled:!e,children:c.jsx(cy,{size:20})}),c.jsx(W,{$width:"42px",onClick:n,children:c.jsx(Xj,{})})]})]})]})},zB=x.div`
    width: 100%;
    height: 100%;
    position: relative;
`,BB=()=>{const e=H.fullscreen.useFullScreen();return c.jsxs(c.Fragment,{children:[c.jsx(qF,{}),c.jsx(FF,{open:e}),c.jsx(mB,{}),c.jsx(_B,{}),c.jsxs(jB,{children:[c.jsx(NB,{}),c.jsx(zB,{children:c.jsx(tk,{})})]}),c.jsx(FB,{}),c.jsx(gB,{})]})},HB=()=>c.jsx(nk,{children:c.jsxs(uo,{path:"/",element:c.jsx(BB,{}),children:[k1.map(e=>c.jsx(uo,{element:e.component,path:e.url,children:e.children&&e.children.map(t=>c.jsx(uo,{element:t.component,path:t.url},t.url))},e.url)),c.jsx(uo,{path:"*",element:c.jsx(c.Fragment,{children:"404"})})]})}),WB=cj`
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
`,qB=x.div`
  height: 100dvh;
  background: ${({theme:e})=>e.colors.pageBackground};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
`;function GB(){const{themeParams:e}=xP();return fe.gates.useLoadUser(),c.jsxs(oj,{theme:e,children:[c.jsx(WB,{}),c.jsx(kL,{basename:"/soundbubble-2.0/",children:c.jsx(qB,{children:c.jsxs(dT,{children:[c.jsx(AM,{}),c.jsx(HB,{})]})})})]})}lg.createRoot(document.getElementById("root")).render(c.jsx(ge.StrictMode,{children:c.jsx(dT,{children:c.jsx(GB,{})})}));
