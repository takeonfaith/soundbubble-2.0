var PP=Object.defineProperty;var bP=(e,t,n)=>t in e?PP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ke=(e,t,n)=>(bP(e,typeof t!="symbol"?t+"":t,n),n);function jP(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function r0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uE={exports:{}},fh={},dE={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc=Symbol.for("react.element"),NP=Symbol.for("react.portal"),MP=Symbol.for("react.fragment"),LP=Symbol.for("react.strict_mode"),DP=Symbol.for("react.profiler"),$P=Symbol.for("react.provider"),OP=Symbol.for("react.context"),VP=Symbol.for("react.forward_ref"),UP=Symbol.for("react.suspense"),FP=Symbol.for("react.memo"),zP=Symbol.for("react.lazy"),I1=Symbol.iterator;function BP(e){return e===null||typeof e!="object"?null:(e=I1&&e[I1]||e["@@iterator"],typeof e=="function"?e:null)}var hE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fE=Object.assign,pE={};function la(e,t,n){this.props=e,this.context=t,this.refs=pE,this.updater=n||hE}la.prototype.isReactComponent={};la.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};la.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gE(){}gE.prototype=la.prototype;function i0(e,t,n){this.props=e,this.context=t,this.refs=pE,this.updater=n||hE}var s0=i0.prototype=new gE;s0.constructor=i0;fE(s0,la.prototype);s0.isPureReactComponent=!0;var S1=Array.isArray,mE=Object.prototype.hasOwnProperty,o0={current:null},yE={key:!0,ref:!0,__self:!0,__source:!0};function vE(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)mE.call(t,r)&&!yE.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:hc,type:e,key:s,ref:o,props:i,_owner:o0.current}}function HP(e,t){return{$$typeof:hc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function a0(e){return typeof e=="object"&&e!==null&&e.$$typeof===hc}function WP(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var T1=/\/+/g;function Kf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?WP(""+e.key):t.toString(36)}function ku(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case hc:case NP:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Kf(o,0):r,S1(i)?(n="",e!=null&&(n=e.replace(T1,"$&/")+"/"),ku(i,t,n,"",function(u){return u})):i!=null&&(a0(i)&&(i=HP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(T1,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",S1(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Kf(s,a);o+=ku(s,t,n,l,i)}else if(l=BP(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Kf(s,a++),o+=ku(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Kc(e,t,n){if(e==null)return e;var r=[],i=0;return ku(e,r,"","",function(s){return t.call(n,s,i++)}),r}function qP(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var jt={current:null},Cu={transition:null},GP={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Cu,ReactCurrentOwner:o0};se.Children={map:Kc,forEach:function(e,t,n){Kc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kc(e,function(){t++}),t},toArray:function(e){return Kc(e,function(t){return t})||[]},only:function(e){if(!a0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=la;se.Fragment=MP;se.Profiler=DP;se.PureComponent=i0;se.StrictMode=LP;se.Suspense=UP;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GP;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fE({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=o0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)mE.call(t,l)&&!yE.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:hc,type:e.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(e){return e={$$typeof:OP,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$P,_context:e},e.Consumer=e};se.createElement=vE;se.createFactory=function(e){var t=vE.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:VP,render:e}};se.isValidElement=a0;se.lazy=function(e){return{$$typeof:zP,_payload:{_status:-1,_result:e},_init:qP}};se.memo=function(e,t){return{$$typeof:FP,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=Cu.transition;Cu.transition={};try{e()}finally{Cu.transition=t}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(e,t){return jt.current.useCallback(e,t)};se.useContext=function(e){return jt.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return jt.current.useDeferredValue(e)};se.useEffect=function(e,t){return jt.current.useEffect(e,t)};se.useId=function(){return jt.current.useId()};se.useImperativeHandle=function(e,t,n){return jt.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return jt.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return jt.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return jt.current.useMemo(e,t)};se.useReducer=function(e,t,n){return jt.current.useReducer(e,t,n)};se.useRef=function(e){return jt.current.useRef(e)};se.useState=function(e){return jt.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return jt.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return jt.current.useTransition()};se.version="18.2.0";dE.exports=se;var S=dE.exports;const ye=r0(S),QP=jP({__proto__:null,default:ye},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KP=S,YP=Symbol.for("react.element"),XP=Symbol.for("react.fragment"),JP=Object.prototype.hasOwnProperty,ZP=KP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,e2={key:!0,ref:!0,__self:!0,__source:!0};function _E(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)JP.call(t,r)&&!e2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:YP,type:e,key:s,ref:o,props:i,_owner:ZP.current}}fh.Fragment=XP;fh.jsx=_E;fh.jsxs=_E;uE.exports=fh;var c=uE.exports,ig={},wE={exports:{}},sn={},xE={exports:{}},EE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,W){var Q=N.length;N.push(W);e:for(;0<Q;){var le=Q-1>>>1,ke=N[le];if(0<i(ke,W))N[le]=W,N[Q]=ke,Q=le;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var W=N[0],Q=N.pop();if(Q!==W){N[0]=Q;e:for(var le=0,ke=N.length,ht=ke>>>1;le<ht;){var Tt=2*(le+1)-1,wn=N[Tt],kt=Tt+1,Fn=N[kt];if(0>i(wn,Q))kt<ke&&0>i(Fn,wn)?(N[le]=Fn,N[kt]=Q,le=kt):(N[le]=wn,N[Tt]=Q,le=Tt);else if(kt<ke&&0>i(Fn,Q))N[le]=Fn,N[kt]=Q,le=kt;else break e}}return W}function i(N,W){var Q=N.sortIndex-W.sortIndex;return Q!==0?Q:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,h=null,f=3,p=!1,m=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=N)r(u),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(u)}}function E(N){if(v=!1,_(N),!m)if(n(l)!==null)m=!0,qi(T);else{var W=n(u);W!==null&&Un(E,W.startTime-N)}}function T(N,W){m=!1,v&&(v=!1,g(A),A=-1),p=!0;var Q=f;try{for(_(W),h=n(l);h!==null&&(!(h.expirationTime>W)||N&&!ee());){var le=h.callback;if(typeof le=="function"){h.callback=null,f=h.priorityLevel;var ke=le(h.expirationTime<=W);W=e.unstable_now(),typeof ke=="function"?h.callback=ke:h===n(l)&&r(l),_(W)}else r(l);h=n(l)}if(h!==null)var ht=!0;else{var Tt=n(u);Tt!==null&&Un(E,Tt.startTime-W),ht=!1}return ht}finally{h=null,f=Q,p=!1}}var k=!1,I=null,A=-1,z=5,H=-1;function ee(){return!(e.unstable_now()-H<z)}function F(){if(I!==null){var N=e.unstable_now();H=N;var W=!0;try{W=I(!0,N)}finally{W?Oe():(k=!1,I=null)}}else k=!1}var Oe;if(typeof y=="function")Oe=function(){y(F)};else if(typeof MessageChannel<"u"){var Wr=new MessageChannel,Wi=Wr.port2;Wr.port1.onmessage=F,Oe=function(){Wi.postMessage(null)}}else Oe=function(){w(F,0)};function qi(N){I=N,k||(k=!0,Oe())}function Un(N,W){A=w(function(){N(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,qi(T))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var Q=f;f=W;try{return N()}finally{f=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=f;f=N;try{return W()}finally{f=Q}},e.unstable_scheduleCallback=function(N,W,Q){var le=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,N){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=Q+ke,N={id:d++,callback:W,priorityLevel:N,startTime:Q,expirationTime:ke,sortIndex:-1},Q>le?(N.sortIndex=Q,t(u,N),n(l)===null&&N===n(u)&&(v?(g(A),A=-1):v=!0,Un(E,Q-le))):(N.sortIndex=ke,t(l,N),m||p||(m=!0,qi(T))),N},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(N){var W=f;return function(){var Q=f;f=W;try{return N.apply(this,arguments)}finally{f=Q}}}})(EE);xE.exports=EE;var t2=xE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IE=S,Xt=t2;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var SE=new Set,yl={};function js(e,t){Po(e,t),Po(e+"Capture",t)}function Po(e,t){for(yl[e]=t,e=0;e<t.length;e++)SE.add(t[e])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sg=Object.prototype.hasOwnProperty,n2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k1={},C1={};function r2(e){return sg.call(C1,e)?!0:sg.call(k1,e)?!1:n2.test(e)?C1[e]=!0:(k1[e]=!0,!1)}function i2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function s2(e,t,n,r){if(t===null||typeof t>"u"||i2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Nt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){dt[e]=new Nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];dt[t]=new Nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){dt[e]=new Nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){dt[e]=new Nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){dt[e]=new Nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){dt[e]=new Nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){dt[e]=new Nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){dt[e]=new Nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){dt[e]=new Nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var l0=/[\-:]([a-z])/g;function c0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(l0,c0);dt[t]=new Nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(l0,c0);dt[t]=new Nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(l0,c0);dt[t]=new Nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){dt[e]=new Nt(e,1,!1,e.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){dt[e]=new Nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function u0(e,t,n,r){var i=dt.hasOwnProperty(t)?dt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(s2(t,n,i,r)&&(n=null),r||i===null?r2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Br=IE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yc=Symbol.for("react.element"),Ks=Symbol.for("react.portal"),Ys=Symbol.for("react.fragment"),d0=Symbol.for("react.strict_mode"),og=Symbol.for("react.profiler"),TE=Symbol.for("react.provider"),kE=Symbol.for("react.context"),h0=Symbol.for("react.forward_ref"),ag=Symbol.for("react.suspense"),lg=Symbol.for("react.suspense_list"),f0=Symbol.for("react.memo"),Yr=Symbol.for("react.lazy"),CE=Symbol.for("react.offscreen"),A1=Symbol.iterator;function Ca(e){return e===null||typeof e!="object"?null:(e=A1&&e[A1]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Yf;function Va(e){if(Yf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yf=t&&t[1]||""}return`
`+Yf+e}var Xf=!1;function Jf(e,t){if(!e||Xf)return"";Xf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Va(e):""}function o2(e){switch(e.tag){case 5:return Va(e.type);case 16:return Va("Lazy");case 13:return Va("Suspense");case 19:return Va("SuspenseList");case 0:case 2:case 15:return e=Jf(e.type,!1),e;case 11:return e=Jf(e.type.render,!1),e;case 1:return e=Jf(e.type,!0),e;default:return""}}function cg(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ys:return"Fragment";case Ks:return"Portal";case og:return"Profiler";case d0:return"StrictMode";case ag:return"Suspense";case lg:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kE:return(e.displayName||"Context")+".Consumer";case TE:return(e._context.displayName||"Context")+".Provider";case h0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case f0:return t=e.displayName||null,t!==null?t:cg(e.type)||"Memo";case Yr:t=e._payload,e=e._init;try{return cg(e(t))}catch{}}return null}function a2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cg(t);case 8:return t===d0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ii(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function AE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l2(e){var t=AE(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xc(e){e._valueTracker||(e._valueTracker=l2(e))}function RE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=AE(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function rd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ug(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function R1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ii(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function PE(e,t){t=t.checked,t!=null&&u0(e,"checked",t,!1)}function dg(e,t){PE(e,t);var n=Ii(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hg(e,t.type,n):t.hasOwnProperty("defaultValue")&&hg(e,t.type,Ii(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function P1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hg(e,t,n){(t!=="number"||rd(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ua=Array.isArray;function mo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ii(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function fg(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function b1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Ua(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ii(n)}}function bE(e,t){var n=Ii(t.value),r=Ii(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function j1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jE(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pg(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jE(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jc,NE=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Jc=Jc||document.createElement("div"),Jc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Jc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c2=["Webkit","ms","Moz","O"];Object.keys(Ja).forEach(function(e){c2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ja[t]=Ja[e]})});function ME(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ja.hasOwnProperty(e)&&Ja[e]?(""+t).trim():t+"px"}function LE(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ME(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var u2=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gg(e,t){if(t){if(u2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function mg(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yg=null;function p0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vg=null,yo=null,vo=null;function N1(e){if(e=gc(e)){if(typeof vg!="function")throw Error(P(280));var t=e.stateNode;t&&(t=vh(t),vg(e.stateNode,e.type,t))}}function DE(e){yo?vo?vo.push(e):vo=[e]:yo=e}function $E(){if(yo){var e=yo,t=vo;if(vo=yo=null,N1(e),t)for(e=0;e<t.length;e++)N1(t[e])}}function OE(e,t){return e(t)}function VE(){}var Zf=!1;function UE(e,t,n){if(Zf)return e(t,n);Zf=!0;try{return OE(e,t,n)}finally{Zf=!1,(yo!==null||vo!==null)&&(VE(),$E())}}function _l(e,t){var n=e.stateNode;if(n===null)return null;var r=vh(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var _g=!1;if(Pr)try{var Aa={};Object.defineProperty(Aa,"passive",{get:function(){_g=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{_g=!1}function d2(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Za=!1,id=null,sd=!1,wg=null,h2={onError:function(e){Za=!0,id=e}};function f2(e,t,n,r,i,s,o,a,l){Za=!1,id=null,d2.apply(h2,arguments)}function p2(e,t,n,r,i,s,o,a,l){if(f2.apply(this,arguments),Za){if(Za){var u=id;Za=!1,id=null}else throw Error(P(198));sd||(sd=!0,wg=u)}}function Ns(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function FE(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M1(e){if(Ns(e)!==e)throw Error(P(188))}function g2(e){var t=e.alternate;if(!t){if(t=Ns(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return M1(i),e;if(s===r)return M1(i),t;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function zE(e){return e=g2(e),e!==null?BE(e):null}function BE(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=BE(e);if(t!==null)return t;e=e.sibling}return null}var HE=Xt.unstable_scheduleCallback,L1=Xt.unstable_cancelCallback,m2=Xt.unstable_shouldYield,y2=Xt.unstable_requestPaint,Le=Xt.unstable_now,v2=Xt.unstable_getCurrentPriorityLevel,g0=Xt.unstable_ImmediatePriority,WE=Xt.unstable_UserBlockingPriority,od=Xt.unstable_NormalPriority,_2=Xt.unstable_LowPriority,qE=Xt.unstable_IdlePriority,ph=null,Jn=null;function w2(e){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(ph,e,void 0,(e.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:I2,x2=Math.log,E2=Math.LN2;function I2(e){return e>>>=0,e===0?32:31-(x2(e)/E2|0)|0}var Zc=64,eu=4194304;function Fa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ad(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fa(a):(s&=o,s!==0&&(r=Fa(s)))}else o=n&~i,o!==0?r=Fa(o):s!==0&&(r=Fa(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kn(t),i=1<<n,r|=e[n],t&=~i;return r}function S2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-kn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=S2(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function xg(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function GE(){var e=Zc;return Zc<<=1,!(Zc&4194240)&&(Zc=64),e}function ep(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kn(t),e[t]=n}function k2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function m0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function QE(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var KE,y0,YE,XE,JE,Eg=!1,tu=[],li=null,ci=null,ui=null,wl=new Map,xl=new Map,Jr=[],C2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function D1(e,t){switch(e){case"focusin":case"focusout":li=null;break;case"dragenter":case"dragleave":ci=null;break;case"mouseover":case"mouseout":ui=null;break;case"pointerover":case"pointerout":wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(t.pointerId)}}function Ra(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=gc(t),t!==null&&y0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function A2(e,t,n,r,i){switch(t){case"focusin":return li=Ra(li,e,t,n,r,i),!0;case"dragenter":return ci=Ra(ci,e,t,n,r,i),!0;case"mouseover":return ui=Ra(ui,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return wl.set(s,Ra(wl.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xl.set(s,Ra(xl.get(s)||null,e,t,n,r,i)),!0}return!1}function ZE(e){var t=Zi(e.target);if(t!==null){var n=Ns(t);if(n!==null){if(t=n.tag,t===13){if(t=FE(n),t!==null){e.blockedOn=t,JE(e.priority,function(){YE(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Au(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ig(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yg=r,n.target.dispatchEvent(r),yg=null}else return t=gc(n),t!==null&&y0(t),e.blockedOn=n,!1;t.shift()}return!0}function $1(e,t,n){Au(e)&&n.delete(t)}function R2(){Eg=!1,li!==null&&Au(li)&&(li=null),ci!==null&&Au(ci)&&(ci=null),ui!==null&&Au(ui)&&(ui=null),wl.forEach($1),xl.forEach($1)}function Pa(e,t){e.blockedOn===t&&(e.blockedOn=null,Eg||(Eg=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,R2)))}function El(e){function t(i){return Pa(i,e)}if(0<tu.length){Pa(tu[0],e);for(var n=1;n<tu.length;n++){var r=tu[n];r.blockedOn===e&&(r.blockedOn=null)}}for(li!==null&&Pa(li,e),ci!==null&&Pa(ci,e),ui!==null&&Pa(ui,e),wl.forEach(t),xl.forEach(t),n=0;n<Jr.length;n++)r=Jr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jr.length&&(n=Jr[0],n.blockedOn===null);)ZE(n),n.blockedOn===null&&Jr.shift()}var _o=Br.ReactCurrentBatchConfig,ld=!0;function P2(e,t,n,r){var i=fe,s=_o.transition;_o.transition=null;try{fe=1,v0(e,t,n,r)}finally{fe=i,_o.transition=s}}function b2(e,t,n,r){var i=fe,s=_o.transition;_o.transition=null;try{fe=4,v0(e,t,n,r)}finally{fe=i,_o.transition=s}}function v0(e,t,n,r){if(ld){var i=Ig(e,t,n,r);if(i===null)up(e,t,r,cd,n),D1(e,r);else if(A2(i,e,t,n,r))r.stopPropagation();else if(D1(e,r),t&4&&-1<C2.indexOf(e)){for(;i!==null;){var s=gc(i);if(s!==null&&KE(s),s=Ig(e,t,n,r),s===null&&up(e,t,r,cd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else up(e,t,r,null,n)}}var cd=null;function Ig(e,t,n,r){if(cd=null,e=p0(r),e=Zi(e),e!==null)if(t=Ns(e),t===null)e=null;else if(n=t.tag,n===13){if(e=FE(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cd=e,null}function eI(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v2()){case g0:return 1;case WE:return 4;case od:case _2:return 16;case qE:return 536870912;default:return 16}default:return 16}}var ii=null,_0=null,Ru=null;function tI(){if(Ru)return Ru;var e,t=_0,n=t.length,r,i="value"in ii?ii.value:ii.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ru=i.slice(e,1<r?1-r:void 0)}function Pu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nu(){return!0}function O1(){return!1}function on(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nu:O1,this.isPropagationStopped=O1,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nu)},persist:function(){},isPersistent:nu}),t}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},w0=on(ca),pc=be({},ca,{view:0,detail:0}),j2=on(pc),tp,np,ba,gh=be({},pc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:x0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ba&&(ba&&e.type==="mousemove"?(tp=e.screenX-ba.screenX,np=e.screenY-ba.screenY):np=tp=0,ba=e),tp)},movementY:function(e){return"movementY"in e?e.movementY:np}}),V1=on(gh),N2=be({},gh,{dataTransfer:0}),M2=on(N2),L2=be({},pc,{relatedTarget:0}),rp=on(L2),D2=be({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),$2=on(D2),O2=be({},ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V2=on(O2),U2=be({},ca,{data:0}),U1=on(U2),F2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B2[e])?!!t[e]:!1}function x0(){return H2}var W2=be({},pc,{key:function(e){if(e.key){var t=F2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:x0,charCode:function(e){return e.type==="keypress"?Pu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q2=on(W2),G2=be({},gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),F1=on(G2),Q2=be({},pc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:x0}),K2=on(Q2),Y2=be({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),X2=on(Y2),J2=be({},gh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z2=on(J2),eb=[9,13,27,32],E0=Pr&&"CompositionEvent"in window,el=null;Pr&&"documentMode"in document&&(el=document.documentMode);var tb=Pr&&"TextEvent"in window&&!el,nI=Pr&&(!E0||el&&8<el&&11>=el),z1=" ",B1=!1;function rI(e,t){switch(e){case"keyup":return eb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iI(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xs=!1;function nb(e,t){switch(e){case"compositionend":return iI(t);case"keypress":return t.which!==32?null:(B1=!0,z1);case"textInput":return e=t.data,e===z1&&B1?null:e;default:return null}}function rb(e,t){if(Xs)return e==="compositionend"||!E0&&rI(e,t)?(e=tI(),Ru=_0=ii=null,Xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nI&&t.locale!=="ko"?null:t.data;default:return null}}var ib={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ib[e.type]:t==="textarea"}function sI(e,t,n,r){DE(r),t=ud(t,"onChange"),0<t.length&&(n=new w0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var tl=null,Il=null;function sb(e){mI(e,0)}function mh(e){var t=eo(e);if(RE(t))return e}function ob(e,t){if(e==="change")return t}var oI=!1;if(Pr){var ip;if(Pr){var sp="oninput"in document;if(!sp){var W1=document.createElement("div");W1.setAttribute("oninput","return;"),sp=typeof W1.oninput=="function"}ip=sp}else ip=!1;oI=ip&&(!document.documentMode||9<document.documentMode)}function q1(){tl&&(tl.detachEvent("onpropertychange",aI),Il=tl=null)}function aI(e){if(e.propertyName==="value"&&mh(Il)){var t=[];sI(t,Il,e,p0(e)),UE(sb,t)}}function ab(e,t,n){e==="focusin"?(q1(),tl=t,Il=n,tl.attachEvent("onpropertychange",aI)):e==="focusout"&&q1()}function lb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mh(Il)}function cb(e,t){if(e==="click")return mh(t)}function ub(e,t){if(e==="input"||e==="change")return mh(t)}function db(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jn=typeof Object.is=="function"?Object.is:db;function Sl(e,t){if(jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sg.call(t,i)||!jn(e[i],t[i]))return!1}return!0}function G1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Q1(e,t){var n=G1(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=G1(n)}}function lI(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lI(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cI(){for(var e=window,t=rd();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rd(e.document)}return t}function I0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hb(e){var t=cI(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lI(n.ownerDocument.documentElement,n)){if(r!==null&&I0(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Q1(n,s);var o=Q1(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fb=Pr&&"documentMode"in document&&11>=document.documentMode,Js=null,Sg=null,nl=null,Tg=!1;function K1(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tg||Js==null||Js!==rd(r)||(r=Js,"selectionStart"in r&&I0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nl&&Sl(nl,r)||(nl=r,r=ud(Sg,"onSelect"),0<r.length&&(t=new w0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Js)))}function ru(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zs={animationend:ru("Animation","AnimationEnd"),animationiteration:ru("Animation","AnimationIteration"),animationstart:ru("Animation","AnimationStart"),transitionend:ru("Transition","TransitionEnd")},op={},uI={};Pr&&(uI=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function yh(e){if(op[e])return op[e];if(!Zs[e])return e;var t=Zs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uI)return op[e]=t[n];return e}var dI=yh("animationend"),hI=yh("animationiteration"),fI=yh("animationstart"),pI=yh("transitionend"),gI=new Map,Y1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ji(e,t){gI.set(e,t),js(t,[e])}for(var ap=0;ap<Y1.length;ap++){var lp=Y1[ap],pb=lp.toLowerCase(),gb=lp[0].toUpperCase()+lp.slice(1);ji(pb,"on"+gb)}ji(dI,"onAnimationEnd");ji(hI,"onAnimationIteration");ji(fI,"onAnimationStart");ji("dblclick","onDoubleClick");ji("focusin","onFocus");ji("focusout","onBlur");ji(pI,"onTransitionEnd");Po("onMouseEnter",["mouseout","mouseover"]);Po("onMouseLeave",["mouseout","mouseover"]);Po("onPointerEnter",["pointerout","pointerover"]);Po("onPointerLeave",["pointerout","pointerover"]);js("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));js("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));js("onBeforeInput",["compositionend","keypress","textInput","paste"]);js("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));js("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));js("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mb=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function X1(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,p2(r,t,void 0,e),e.currentTarget=null}function mI(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;X1(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;X1(i,a,u),s=l}}}if(sd)throw e=wg,sd=!1,wg=null,e}function we(e,t){var n=t[Pg];n===void 0&&(n=t[Pg]=new Set);var r=e+"__bubble";n.has(r)||(yI(t,e,2,!1),n.add(r))}function cp(e,t,n){var r=0;t&&(r|=4),yI(n,e,r,t)}var iu="_reactListening"+Math.random().toString(36).slice(2);function Tl(e){if(!e[iu]){e[iu]=!0,SE.forEach(function(n){n!=="selectionchange"&&(mb.has(n)||cp(n,!1,e),cp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[iu]||(t[iu]=!0,cp("selectionchange",!1,t))}}function yI(e,t,n,r){switch(eI(t)){case 1:var i=P2;break;case 4:i=b2;break;default:i=v0}n=i.bind(null,t,n,e),i=void 0,!_g||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function up(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Zi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}UE(function(){var u=s,d=p0(n),h=[];e:{var f=gI.get(e);if(f!==void 0){var p=w0,m=e;switch(e){case"keypress":if(Pu(n)===0)break e;case"keydown":case"keyup":p=q2;break;case"focusin":m="focus",p=rp;break;case"focusout":m="blur",p=rp;break;case"beforeblur":case"afterblur":p=rp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=V1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=M2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=K2;break;case dI:case hI:case fI:p=$2;break;case pI:p=X2;break;case"scroll":p=j2;break;case"wheel":p=Z2;break;case"copy":case"cut":case"paste":p=V2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=F1}var v=(t&4)!==0,w=!v&&e==="scroll",g=v?f!==null?f+"Capture":null:f;v=[];for(var y=u,_;y!==null;){_=y;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,g!==null&&(E=_l(y,g),E!=null&&v.push(kl(y,E,_)))),w)break;y=y.return}0<v.length&&(f=new p(f,m,null,n,d),h.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==yg&&(m=n.relatedTarget||n.fromElement)&&(Zi(m)||m[br]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Zi(m):null,m!==null&&(w=Ns(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(v=V1,E="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(v=F1,E="onPointerLeave",g="onPointerEnter",y="pointer"),w=p==null?f:eo(p),_=m==null?f:eo(m),f=new v(E,y+"leave",p,n,d),f.target=w,f.relatedTarget=_,E=null,Zi(d)===u&&(v=new v(g,y+"enter",m,n,d),v.target=_,v.relatedTarget=w,E=v),w=E,p&&m)t:{for(v=p,g=m,y=0,_=v;_;_=Fs(_))y++;for(_=0,E=g;E;E=Fs(E))_++;for(;0<y-_;)v=Fs(v),y--;for(;0<_-y;)g=Fs(g),_--;for(;y--;){if(v===g||g!==null&&v===g.alternate)break t;v=Fs(v),g=Fs(g)}v=null}else v=null;p!==null&&J1(h,f,p,v,!1),m!==null&&w!==null&&J1(h,w,m,v,!0)}}e:{if(f=u?eo(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=ob;else if(H1(f))if(oI)T=ub;else{T=lb;var k=ab}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=cb);if(T&&(T=T(e,u))){sI(h,T,n,d);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&hg(f,"number",f.value)}switch(k=u?eo(u):window,e){case"focusin":(H1(k)||k.contentEditable==="true")&&(Js=k,Sg=u,nl=null);break;case"focusout":nl=Sg=Js=null;break;case"mousedown":Tg=!0;break;case"contextmenu":case"mouseup":case"dragend":Tg=!1,K1(h,n,d);break;case"selectionchange":if(fb)break;case"keydown":case"keyup":K1(h,n,d)}var I;if(E0)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Xs?rI(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(nI&&n.locale!=="ko"&&(Xs||A!=="onCompositionStart"?A==="onCompositionEnd"&&Xs&&(I=tI()):(ii=d,_0="value"in ii?ii.value:ii.textContent,Xs=!0)),k=ud(u,A),0<k.length&&(A=new U1(A,e,null,n,d),h.push({event:A,listeners:k}),I?A.data=I:(I=iI(n),I!==null&&(A.data=I)))),(I=tb?nb(e,n):rb(e,n))&&(u=ud(u,"onBeforeInput"),0<u.length&&(d=new U1("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=I))}mI(h,t)})}function kl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ud(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=_l(e,n),s!=null&&r.unshift(kl(e,s,i)),s=_l(e,t),s!=null&&r.push(kl(e,s,i))),e=e.return}return r}function Fs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function J1(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=_l(n,s),l!=null&&o.unshift(kl(n,l,a))):i||(l=_l(n,s),l!=null&&o.push(kl(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var yb=/\r\n?/g,vb=/\u0000|\uFFFD/g;function Z1(e){return(typeof e=="string"?e:""+e).replace(yb,`
`).replace(vb,"")}function su(e,t,n){if(t=Z1(t),Z1(e)!==t&&n)throw Error(P(425))}function dd(){}var kg=null,Cg=null;function Ag(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rg=typeof setTimeout=="function"?setTimeout:void 0,_b=typeof clearTimeout=="function"?clearTimeout:void 0,e_=typeof Promise=="function"?Promise:void 0,wb=typeof queueMicrotask=="function"?queueMicrotask:typeof e_<"u"?function(e){return e_.resolve(null).then(e).catch(xb)}:Rg;function xb(e){setTimeout(function(){throw e})}function dp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),El(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);El(t)}function di(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function t_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ua=Math.random().toString(36).slice(2),qn="__reactFiber$"+ua,Cl="__reactProps$"+ua,br="__reactContainer$"+ua,Pg="__reactEvents$"+ua,Eb="__reactListeners$"+ua,Ib="__reactHandles$"+ua;function Zi(e){var t=e[qn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[br]||n[qn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=t_(e);e!==null;){if(n=e[qn])return n;e=t_(e)}return t}e=n,n=e.parentNode}return null}function gc(e){return e=e[qn]||e[br],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function eo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function vh(e){return e[Cl]||null}var bg=[],to=-1;function Ni(e){return{current:e}}function Te(e){0>to||(e.current=bg[to],bg[to]=null,to--)}function ve(e,t){to++,bg[to]=e.current,e.current=t}var Si={},Et=Ni(Si),Vt=Ni(!1),ps=Si;function bo(e,t){var n=e.type.contextTypes;if(!n)return Si;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(e){return e=e.childContextTypes,e!=null}function hd(){Te(Vt),Te(Et)}function n_(e,t,n){if(Et.current!==Si)throw Error(P(168));ve(Et,t),ve(Vt,n)}function vI(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,a2(e)||"Unknown",i));return be({},n,r)}function fd(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Si,ps=Et.current,ve(Et,e),ve(Vt,Vt.current),!0}function r_(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=vI(e,t,ps),r.__reactInternalMemoizedMergedChildContext=e,Te(Vt),Te(Et),ve(Et,e)):Te(Vt),ve(Vt,n)}var gr=null,_h=!1,hp=!1;function _I(e){gr===null?gr=[e]:gr.push(e)}function Sb(e){_h=!0,_I(e)}function Mi(){if(!hp&&gr!==null){hp=!0;var e=0,t=fe;try{var n=gr;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gr=null,_h=!1}catch(i){throw gr!==null&&(gr=gr.slice(e+1)),HE(g0,Mi),i}finally{fe=t,hp=!1}}return null}var no=[],ro=0,pd=null,gd=0,an=[],ln=0,gs=null,mr=1,yr="";function Yi(e,t){no[ro++]=gd,no[ro++]=pd,pd=e,gd=t}function wI(e,t,n){an[ln++]=mr,an[ln++]=yr,an[ln++]=gs,gs=e;var r=mr;e=yr;var i=32-kn(r)-1;r&=~(1<<i),n+=1;var s=32-kn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mr=1<<32-kn(t)+i|n<<i|r,yr=s+e}else mr=1<<s|n<<i|r,yr=e}function S0(e){e.return!==null&&(Yi(e,1),wI(e,1,0))}function T0(e){for(;e===pd;)pd=no[--ro],no[ro]=null,gd=no[--ro],no[ro]=null;for(;e===gs;)gs=an[--ln],an[ln]=null,yr=an[--ln],an[ln]=null,mr=an[--ln],an[ln]=null}var Yt=null,Wt=null,Ce=!1,Sn=null;function xI(e,t){var n=dn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function i_(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Yt=e,Wt=di(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Yt=e,Wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gs!==null?{id:mr,overflow:yr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Yt=e,Wt=null,!0):!1;default:return!1}}function jg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ng(e){if(Ce){var t=Wt;if(t){var n=t;if(!i_(e,t)){if(jg(e))throw Error(P(418));t=di(n.nextSibling);var r=Yt;t&&i_(e,t)?xI(r,n):(e.flags=e.flags&-4097|2,Ce=!1,Yt=e)}}else{if(jg(e))throw Error(P(418));e.flags=e.flags&-4097|2,Ce=!1,Yt=e}}}function s_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Yt=e}function ou(e){if(e!==Yt)return!1;if(!Ce)return s_(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ag(e.type,e.memoizedProps)),t&&(t=Wt)){if(jg(e))throw EI(),Error(P(418));for(;t;)xI(e,t),t=di(t.nextSibling)}if(s_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Wt=di(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Wt=null}}else Wt=Yt?di(e.stateNode.nextSibling):null;return!0}function EI(){for(var e=Wt;e;)e=di(e.nextSibling)}function jo(){Wt=Yt=null,Ce=!1}function k0(e){Sn===null?Sn=[e]:Sn.push(e)}var Tb=Br.ReactCurrentBatchConfig;function En(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var md=Ni(null),yd=null,io=null,C0=null;function A0(){C0=io=yd=null}function R0(e){var t=md.current;Te(md),e._currentValue=t}function Mg(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wo(e,t){yd=e,C0=io=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ot=!0),e.firstContext=null)}function yn(e){var t=e._currentValue;if(C0!==e)if(e={context:e,memoizedValue:t,next:null},io===null){if(yd===null)throw Error(P(308));io=e,yd.dependencies={lanes:0,firstContext:e}}else io=io.next=e;return t}var es=null;function P0(e){es===null?es=[e]:es.push(e)}function II(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,P0(t)):(n.next=i.next,i.next=n),t.interleaved=n,jr(e,r)}function jr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xr=!1;function b0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function SI(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hi(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,jr(e,n)}return i=r.interleaved,i===null?(t.next=t,P0(r)):(t.next=i.next,i.next=t),r.interleaved=t,jr(e,n)}function bu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,m0(e,n)}}function o_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vd(e,t,n,r){var i=e.updateQueue;Xr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,v=a;switch(f=t,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(p,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,f=typeof m=="function"?m.call(p,h,f):m,f==null)break e;h=be({},h,f);break e;case 2:Xr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=h):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);ys|=o,e.lanes=o,e.memoizedState=h}}function a_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var TI=new IE.Component().refs;function Lg(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wh={isMounted:function(e){return(e=e._reactInternals)?Ns(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Rt(),i=pi(e),s=kr(r,i);s.payload=t,n!=null&&(s.callback=n),t=hi(e,s,i),t!==null&&(Cn(t,e,i,r),bu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Rt(),i=pi(e),s=kr(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=hi(e,s,i),t!==null&&(Cn(t,e,i,r),bu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rt(),r=pi(e),i=kr(n,r);i.tag=2,t!=null&&(i.callback=t),t=hi(e,i,r),t!==null&&(Cn(t,e,r,n),bu(t,e,r))}};function l_(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Sl(n,r)||!Sl(i,s):!0}function kI(e,t,n){var r=!1,i=Si,s=t.contextType;return typeof s=="object"&&s!==null?s=yn(s):(i=Ut(t)?ps:Et.current,r=t.contextTypes,s=(r=r!=null)?bo(e,i):Si),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wh,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function c_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wh.enqueueReplaceState(t,t.state,null)}function Dg(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=TI,b0(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=yn(s):(s=Ut(t)?ps:Et.current,i.context=bo(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Lg(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wh.enqueueReplaceState(i,i.state,null),vd(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ja(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===TI&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function au(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function u_(e){var t=e._init;return t(e._payload)}function CI(e){function t(g,y){if(e){var _=g.deletions;_===null?(g.deletions=[y],g.flags|=16):_.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function i(g,y){return g=gi(g,y),g.index=0,g.sibling=null,g}function s(g,y,_){return g.index=_,e?(_=g.alternate,_!==null?(_=_.index,_<y?(g.flags|=2,y):_):(g.flags|=2,y)):(g.flags|=1048576,y)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,y,_,E){return y===null||y.tag!==6?(y=_p(_,g.mode,E),y.return=g,y):(y=i(y,_),y.return=g,y)}function l(g,y,_,E){var T=_.type;return T===Ys?d(g,y,_.props.children,E,_.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yr&&u_(T)===y.type)?(E=i(y,_.props),E.ref=ja(g,y,_),E.return=g,E):(E=$u(_.type,_.key,_.props,null,g.mode,E),E.ref=ja(g,y,_),E.return=g,E)}function u(g,y,_,E){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=wp(_,g.mode,E),y.return=g,y):(y=i(y,_.children||[]),y.return=g,y)}function d(g,y,_,E,T){return y===null||y.tag!==7?(y=ls(_,g.mode,E,T),y.return=g,y):(y=i(y,_),y.return=g,y)}function h(g,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=_p(""+y,g.mode,_),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yc:return _=$u(y.type,y.key,y.props,null,g.mode,_),_.ref=ja(g,null,y),_.return=g,_;case Ks:return y=wp(y,g.mode,_),y.return=g,y;case Yr:var E=y._init;return h(g,E(y._payload),_)}if(Ua(y)||Ca(y))return y=ls(y,g.mode,_,null),y.return=g,y;au(g,y)}return null}function f(g,y,_,E){var T=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:a(g,y,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yc:return _.key===T?l(g,y,_,E):null;case Ks:return _.key===T?u(g,y,_,E):null;case Yr:return T=_._init,f(g,y,T(_._payload),E)}if(Ua(_)||Ca(_))return T!==null?null:d(g,y,_,E,null);au(g,_)}return null}function p(g,y,_,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(_)||null,a(y,g,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Yc:return g=g.get(E.key===null?_:E.key)||null,l(y,g,E,T);case Ks:return g=g.get(E.key===null?_:E.key)||null,u(y,g,E,T);case Yr:var k=E._init;return p(g,y,_,k(E._payload),T)}if(Ua(E)||Ca(E))return g=g.get(_)||null,d(y,g,E,T,null);au(y,E)}return null}function m(g,y,_,E){for(var T=null,k=null,I=y,A=y=0,z=null;I!==null&&A<_.length;A++){I.index>A?(z=I,I=null):z=I.sibling;var H=f(g,I,_[A],E);if(H===null){I===null&&(I=z);break}e&&I&&H.alternate===null&&t(g,I),y=s(H,y,A),k===null?T=H:k.sibling=H,k=H,I=z}if(A===_.length)return n(g,I),Ce&&Yi(g,A),T;if(I===null){for(;A<_.length;A++)I=h(g,_[A],E),I!==null&&(y=s(I,y,A),k===null?T=I:k.sibling=I,k=I);return Ce&&Yi(g,A),T}for(I=r(g,I);A<_.length;A++)z=p(I,g,A,_[A],E),z!==null&&(e&&z.alternate!==null&&I.delete(z.key===null?A:z.key),y=s(z,y,A),k===null?T=z:k.sibling=z,k=z);return e&&I.forEach(function(ee){return t(g,ee)}),Ce&&Yi(g,A),T}function v(g,y,_,E){var T=Ca(_);if(typeof T!="function")throw Error(P(150));if(_=T.call(_),_==null)throw Error(P(151));for(var k=T=null,I=y,A=y=0,z=null,H=_.next();I!==null&&!H.done;A++,H=_.next()){I.index>A?(z=I,I=null):z=I.sibling;var ee=f(g,I,H.value,E);if(ee===null){I===null&&(I=z);break}e&&I&&ee.alternate===null&&t(g,I),y=s(ee,y,A),k===null?T=ee:k.sibling=ee,k=ee,I=z}if(H.done)return n(g,I),Ce&&Yi(g,A),T;if(I===null){for(;!H.done;A++,H=_.next())H=h(g,H.value,E),H!==null&&(y=s(H,y,A),k===null?T=H:k.sibling=H,k=H);return Ce&&Yi(g,A),T}for(I=r(g,I);!H.done;A++,H=_.next())H=p(I,g,A,H.value,E),H!==null&&(e&&H.alternate!==null&&I.delete(H.key===null?A:H.key),y=s(H,y,A),k===null?T=H:k.sibling=H,k=H);return e&&I.forEach(function(F){return t(g,F)}),Ce&&Yi(g,A),T}function w(g,y,_,E){if(typeof _=="object"&&_!==null&&_.type===Ys&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Yc:e:{for(var T=_.key,k=y;k!==null;){if(k.key===T){if(T=_.type,T===Ys){if(k.tag===7){n(g,k.sibling),y=i(k,_.props.children),y.return=g,g=y;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yr&&u_(T)===k.type){n(g,k.sibling),y=i(k,_.props),y.ref=ja(g,k,_),y.return=g,g=y;break e}n(g,k);break}else t(g,k);k=k.sibling}_.type===Ys?(y=ls(_.props.children,g.mode,E,_.key),y.return=g,g=y):(E=$u(_.type,_.key,_.props,null,g.mode,E),E.ref=ja(g,y,_),E.return=g,g=E)}return o(g);case Ks:e:{for(k=_.key;y!==null;){if(y.key===k)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(g,y.sibling),y=i(y,_.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=wp(_,g.mode,E),y.return=g,g=y}return o(g);case Yr:return k=_._init,w(g,y,k(_._payload),E)}if(Ua(_))return m(g,y,_,E);if(Ca(_))return v(g,y,_,E);au(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(g,y.sibling),y=i(y,_),y.return=g,g=y):(n(g,y),y=_p(_,g.mode,E),y.return=g,g=y),o(g)):n(g,y)}return w}var No=CI(!0),AI=CI(!1),mc={},Zn=Ni(mc),Al=Ni(mc),Rl=Ni(mc);function ts(e){if(e===mc)throw Error(P(174));return e}function j0(e,t){switch(ve(Rl,t),ve(Al,e),ve(Zn,mc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pg(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pg(t,e)}Te(Zn),ve(Zn,t)}function Mo(){Te(Zn),Te(Al),Te(Rl)}function RI(e){ts(Rl.current);var t=ts(Zn.current),n=pg(t,e.type);t!==n&&(ve(Al,e),ve(Zn,n))}function N0(e){Al.current===e&&(Te(Zn),Te(Al))}var Ae=Ni(0);function _d(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fp=[];function M0(){for(var e=0;e<fp.length;e++)fp[e]._workInProgressVersionPrimary=null;fp.length=0}var ju=Br.ReactCurrentDispatcher,pp=Br.ReactCurrentBatchConfig,ms=0,Re=null,qe=null,Xe=null,wd=!1,rl=!1,Pl=0,kb=0;function ft(){throw Error(P(321))}function L0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jn(e[n],t[n]))return!1;return!0}function D0(e,t,n,r,i,s){if(ms=s,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ju.current=e===null||e.memoizedState===null?Pb:bb,e=n(r,i),rl){s=0;do{if(rl=!1,Pl=0,25<=s)throw Error(P(301));s+=1,Xe=qe=null,t.updateQueue=null,ju.current=jb,e=n(r,i)}while(rl)}if(ju.current=xd,t=qe!==null&&qe.next!==null,ms=0,Xe=qe=Re=null,wd=!1,t)throw Error(P(300));return e}function $0(){var e=Pl!==0;return Pl=0,e}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Re.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function vn(){if(qe===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=Xe===null?Re.memoizedState:Xe.next;if(t!==null)Xe=t,qe=e;else{if(e===null)throw Error(P(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Xe===null?Re.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function bl(e,t){return typeof t=="function"?t(e):t}function gp(e){var t=vn(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((ms&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Re.lanes|=d,ys|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,jn(r,t.memoizedState)||(Ot=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Re.lanes|=s,ys|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function mp(e){var t=vn(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);jn(s,t.memoizedState)||(Ot=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function PI(){}function bI(e,t){var n=Re,r=vn(),i=t(),s=!jn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,O0(MI.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,jl(9,NI.bind(null,n,r,i,t),void 0,null),et===null)throw Error(P(349));ms&30||jI(n,t,i)}return i}function jI(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function NI(e,t,n,r){t.value=n,t.getSnapshot=r,LI(t)&&DI(e)}function MI(e,t,n){return n(function(){LI(t)&&DI(e)})}function LI(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jn(e,n)}catch{return!0}}function DI(e){var t=jr(e,1);t!==null&&Cn(t,e,1,-1)}function d_(e){var t=Bn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:e},t.queue=e,e=e.dispatch=Rb.bind(null,Re,e),[t.memoizedState,e]}function jl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $I(){return vn().memoizedState}function Nu(e,t,n,r){var i=Bn();Re.flags|=e,i.memoizedState=jl(1|t,n,void 0,r===void 0?null:r)}function xh(e,t,n,r){var i=vn();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&L0(r,o.deps)){i.memoizedState=jl(t,n,s,r);return}}Re.flags|=e,i.memoizedState=jl(1|t,n,s,r)}function h_(e,t){return Nu(8390656,8,e,t)}function O0(e,t){return xh(2048,8,e,t)}function OI(e,t){return xh(4,2,e,t)}function VI(e,t){return xh(4,4,e,t)}function UI(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function FI(e,t,n){return n=n!=null?n.concat([e]):null,xh(4,4,UI.bind(null,t,e),n)}function V0(){}function zI(e,t){var n=vn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&L0(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function BI(e,t){var n=vn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&L0(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function HI(e,t,n){return ms&21?(jn(n,t)||(n=GE(),Re.lanes|=n,ys|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ot=!0),e.memoizedState=n)}function Cb(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=pp.transition;pp.transition={};try{e(!1),t()}finally{fe=n,pp.transition=r}}function WI(){return vn().memoizedState}function Ab(e,t,n){var r=pi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qI(e))GI(t,n);else if(n=II(e,t,n,r),n!==null){var i=Rt();Cn(n,e,r,i),QI(n,t,r)}}function Rb(e,t,n){var r=pi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qI(e))GI(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,jn(a,o)){var l=t.interleaved;l===null?(i.next=i,P0(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=II(e,t,i,r),n!==null&&(i=Rt(),Cn(n,e,r,i),QI(n,t,r))}}function qI(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function GI(e,t){rl=wd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function QI(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,m0(e,n)}}var xd={readContext:yn,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},Pb={readContext:yn,useCallback:function(e,t){return Bn().memoizedState=[e,t===void 0?null:t],e},useContext:yn,useEffect:h_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nu(4194308,4,UI.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nu(4,2,e,t)},useMemo:function(e,t){var n=Bn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ab.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=Bn();return e={current:e},t.memoizedState=e},useState:d_,useDebugValue:V0,useDeferredValue:function(e){return Bn().memoizedState=e},useTransition:function(){var e=d_(!1),t=e[0];return e=Cb.bind(null,e[1]),Bn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,i=Bn();if(Ce){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),et===null)throw Error(P(349));ms&30||jI(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,h_(MI.bind(null,r,s,e),[e]),r.flags|=2048,jl(9,NI.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Bn(),t=et.identifierPrefix;if(Ce){var n=yr,r=mr;n=(r&~(1<<32-kn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bb={readContext:yn,useCallback:zI,useContext:yn,useEffect:O0,useImperativeHandle:FI,useInsertionEffect:OI,useLayoutEffect:VI,useMemo:BI,useReducer:gp,useRef:$I,useState:function(){return gp(bl)},useDebugValue:V0,useDeferredValue:function(e){var t=vn();return HI(t,qe.memoizedState,e)},useTransition:function(){var e=gp(bl)[0],t=vn().memoizedState;return[e,t]},useMutableSource:PI,useSyncExternalStore:bI,useId:WI,unstable_isNewReconciler:!1},jb={readContext:yn,useCallback:zI,useContext:yn,useEffect:O0,useImperativeHandle:FI,useInsertionEffect:OI,useLayoutEffect:VI,useMemo:BI,useReducer:mp,useRef:$I,useState:function(){return mp(bl)},useDebugValue:V0,useDeferredValue:function(e){var t=vn();return qe===null?t.memoizedState=e:HI(t,qe.memoizedState,e)},useTransition:function(){var e=mp(bl)[0],t=vn().memoizedState;return[e,t]},useMutableSource:PI,useSyncExternalStore:bI,useId:WI,unstable_isNewReconciler:!1};function Lo(e,t){try{var n="",r=t;do n+=o2(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function yp(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $g(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nb=typeof WeakMap=="function"?WeakMap:Map;function KI(e,t,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Id||(Id=!0,Gg=r),$g(e,t)},n}function YI(e,t,n){n=kr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$g(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$g(e,t),typeof r!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function f_(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Gb.bind(null,e,t,n),t.then(e,e))}function p_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function g_(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kr(-1,1),t.tag=2,hi(n,t,1))),n.lanes|=1),e)}var Mb=Br.ReactCurrentOwner,Ot=!1;function Ct(e,t,n,r){t.child=e===null?AI(t,null,n,r):No(t,e.child,n,r)}function m_(e,t,n,r,i){n=n.render;var s=t.ref;return wo(t,i),r=D0(e,t,n,r,s,i),n=$0(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nr(e,t,i)):(Ce&&n&&S0(t),t.flags|=1,Ct(e,t,r,i),t.child)}function y_(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!G0(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,XI(e,t,s,r,i)):(e=$u(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Sl,n(o,r)&&e.ref===t.ref)return Nr(e,t,i)}return t.flags|=1,e=gi(s,r),e.ref=t.ref,e.return=t,t.child=e}function XI(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Sl(s,r)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ot=!0);else return t.lanes=e.lanes,Nr(e,t,i)}return Og(e,t,n,r,i)}function JI(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(oo,Ht),Ht|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(oo,Ht),Ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(oo,Ht),Ht|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ve(oo,Ht),Ht|=r;return Ct(e,t,i,n),t.child}function ZI(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Og(e,t,n,r,i){var s=Ut(n)?ps:Et.current;return s=bo(t,s),wo(t,i),n=D0(e,t,n,r,s,i),r=$0(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nr(e,t,i)):(Ce&&r&&S0(t),t.flags|=1,Ct(e,t,n,i),t.child)}function v_(e,t,n,r,i){if(Ut(n)){var s=!0;fd(t)}else s=!1;if(wo(t,i),t.stateNode===null)Mu(e,t),kI(t,n,r),Dg(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yn(u):(u=Ut(n)?ps:Et.current,u=bo(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&c_(t,o,r,u),Xr=!1;var f=t.memoizedState;o.state=f,vd(t,r,o,i),l=t.memoizedState,a!==r||f!==l||Vt.current||Xr?(typeof d=="function"&&(Lg(t,n,d,r),l=t.memoizedState),(a=Xr||l_(t,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,SI(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:En(t.type,a),o.props=u,h=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yn(l):(l=Ut(n)?ps:Et.current,l=bo(t,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&c_(t,o,r,l),Xr=!1,f=t.memoizedState,o.state=f,vd(t,r,o,i);var m=t.memoizedState;a!==h||f!==m||Vt.current||Xr?(typeof p=="function"&&(Lg(t,n,p,r),m=t.memoizedState),(u=Xr||l_(t,n,u,r,f,m,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Vg(e,t,n,r,s,i)}function Vg(e,t,n,r,i,s){ZI(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&r_(t,n,!1),Nr(e,t,s);r=t.stateNode,Mb.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=No(t,e.child,null,s),t.child=No(t,null,a,s)):Ct(e,t,a,s),t.memoizedState=r.state,i&&r_(t,n,!0),t.child}function eS(e){var t=e.stateNode;t.pendingContext?n_(e,t.pendingContext,t.pendingContext!==t.context):t.context&&n_(e,t.context,!1),j0(e,t.containerInfo)}function __(e,t,n,r,i){return jo(),k0(i),t.flags|=256,Ct(e,t,n,r),t.child}var Ug={dehydrated:null,treeContext:null,retryLane:0};function Fg(e){return{baseLanes:e,cachePool:null,transitions:null}}function tS(e,t,n){var r=t.pendingProps,i=Ae.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ae,i&1),e===null)return Ng(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sh(o,r,0,null),e=ls(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Fg(n),t.memoizedState=Ug,e):U0(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Lb(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=gi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=gi(a,s):(s=ls(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Fg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Ug,r}return s=e.child,e=s.sibling,r=gi(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function U0(e,t){return t=Sh({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function lu(e,t,n,r){return r!==null&&k0(r),No(t,e.child,null,n),e=U0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lb(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=yp(Error(P(422))),lu(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Sh({mode:"visible",children:r.children},i,0,null),s=ls(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&No(t,e.child,null,o),t.child.memoizedState=Fg(o),t.memoizedState=Ug,s);if(!(t.mode&1))return lu(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=yp(s,r,void 0),lu(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ot||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jr(e,i),Cn(r,e,i,-1))}return q0(),r=yp(Error(P(421))),lu(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Qb.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Wt=di(i.nextSibling),Yt=t,Ce=!0,Sn=null,e!==null&&(an[ln++]=mr,an[ln++]=yr,an[ln++]=gs,mr=e.id,yr=e.overflow,gs=t),t=U0(t,r.children),t.flags|=4096,t)}function w_(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Mg(e.return,t,n)}function vp(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nS(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ct(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&w_(e,n,t);else if(e.tag===19)w_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_d(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vp(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_d(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vp(t,!0,n,null,s);break;case"together":vp(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ys|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Db(e,t,n){switch(t.tag){case 3:eS(t),jo();break;case 5:RI(t);break;case 1:Ut(t.type)&&fd(t);break;case 4:j0(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(md,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?tS(e,t,n):(ve(Ae,Ae.current&1),e=Nr(e,t,n),e!==null?e.sibling:null);ve(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nS(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,JI(e,t,n)}return Nr(e,t,n)}var rS,zg,iS,sS;rS=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zg=function(){};iS=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ts(Zn.current);var s=null;switch(n){case"input":i=ug(e,i),r=ug(e,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=fg(e,i),r=fg(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=dd)}gg(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};sS=function(e,t,n,r){n!==r&&(t.flags|=4)};function Na(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $b(e,t,n){var r=t.pendingProps;switch(T0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return Ut(t.type)&&hd(),pt(t),null;case 3:return r=t.stateNode,Mo(),Te(Vt),Te(Et),M0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ou(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Sn!==null&&(Yg(Sn),Sn=null))),zg(e,t),pt(t),null;case 5:N0(t);var i=ts(Rl.current);if(n=t.type,e!==null&&t.stateNode!=null)iS(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return pt(t),null}if(e=ts(Zn.current),ou(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[qn]=t,r[Cl]=s,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<za.length;i++)we(za[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":R1(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":b1(r,s),we("invalid",r)}gg(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&su(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&su(r.textContent,a,e),i=["children",""+a]):yl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Xc(r),P1(r,s,!0);break;case"textarea":Xc(r),j1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=dd)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jE(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qn]=t,e[Cl]=r,rS(e,t,!1,!1),t.stateNode=e;e:{switch(o=mg(n,r),n){case"dialog":we("cancel",e),we("close",e),i=r;break;case"iframe":case"object":case"embed":we("load",e),i=r;break;case"video":case"audio":for(i=0;i<za.length;i++)we(za[i],e);i=r;break;case"source":we("error",e),i=r;break;case"img":case"image":case"link":we("error",e),we("load",e),i=r;break;case"details":we("toggle",e),i=r;break;case"input":R1(e,r),i=ug(e,r),we("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),we("invalid",e);break;case"textarea":b1(e,r),i=fg(e,r),we("invalid",e);break;default:i=r}gg(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?LE(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&NE(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vl(e,l):typeof l=="number"&&vl(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",e):l!=null&&u0(e,s,l,o))}switch(n){case"input":Xc(e),P1(e,r,!1);break;case"textarea":Xc(e),j1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ii(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?mo(e,!!r.multiple,s,!1):r.defaultValue!=null&&mo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=dd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)sS(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=ts(Rl.current),ts(Zn.current),ou(t)){if(r=t.stateNode,n=t.memoizedProps,r[qn]=t,(s=r.nodeValue!==n)&&(e=Yt,e!==null))switch(e.tag){case 3:su(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&su(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=t,t.stateNode=r}return pt(t),null;case 13:if(Te(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Wt!==null&&t.mode&1&&!(t.flags&128))EI(),jo(),t.flags|=98560,s=!1;else if(s=ou(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[qn]=t}else jo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pt(t),s=!1}else Sn!==null&&(Yg(Sn),Sn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Ge===0&&(Ge=3):q0())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return Mo(),zg(e,t),e===null&&Tl(t.stateNode.containerInfo),pt(t),null;case 10:return R0(t.type._context),pt(t),null;case 17:return Ut(t.type)&&hd(),pt(t),null;case 19:if(Te(Ae),s=t.memoizedState,s===null)return pt(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Na(s,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_d(e),o!==null){for(t.flags|=128,Na(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ae,Ae.current&1|2),t.child}e=e.sibling}s.tail!==null&&Le()>Do&&(t.flags|=128,r=!0,Na(s,!1),t.lanes=4194304)}else{if(!r)if(e=_d(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return pt(t),null}else 2*Le()-s.renderingStartTime>Do&&n!==1073741824&&(t.flags|=128,r=!0,Na(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Le(),t.sibling=null,n=Ae.current,ve(Ae,r?n&1|2:n&1),t):(pt(t),null);case 22:case 23:return W0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ht&1073741824&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Ob(e,t){switch(T0(t),t.tag){case 1:return Ut(t.type)&&hd(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mo(),Te(Vt),Te(Et),M0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return N0(t),null;case 13:if(Te(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));jo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Ae),null;case 4:return Mo(),null;case 10:return R0(t.type._context),null;case 22:case 23:return W0(),null;case 24:return null;default:return null}}var cu=!1,yt=!1,Vb=typeof WeakSet=="function"?WeakSet:Set,$=null;function so(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function Bg(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var x_=!1;function Ub(e,t){if(kg=ld,e=cI(),I0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cg={focusedElem:e,selectionRange:n},ld=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,w=m.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:En(t.type,v),w);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){Ne(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return m=x_,x_=!1,m}function il(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bg(t,n,s)}i=i.next}while(i!==r)}}function Eh(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hg(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function oS(e){var t=e.alternate;t!==null&&(e.alternate=null,oS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qn],delete t[Cl],delete t[Pg],delete t[Eb],delete t[Ib])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function aS(e){return e.tag===5||e.tag===3||e.tag===4}function E_(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||aS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dd));else if(r!==4&&(e=e.child,e!==null))for(Wg(e,t,n),e=e.sibling;e!==null;)Wg(e,t,n),e=e.sibling}function qg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qg(e,t,n),e=e.sibling;e!==null;)qg(e,t,n),e=e.sibling}var rt=null,In=!1;function Gr(e,t,n){for(n=n.child;n!==null;)lS(e,t,n),n=n.sibling}function lS(e,t,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(ph,n)}catch{}switch(n.tag){case 5:yt||so(n,t);case 6:var r=rt,i=In;rt=null,Gr(e,t,n),rt=r,In=i,rt!==null&&(In?(e=rt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(In?(e=rt,n=n.stateNode,e.nodeType===8?dp(e.parentNode,n):e.nodeType===1&&dp(e,n),El(e)):dp(rt,n.stateNode));break;case 4:r=rt,i=In,rt=n.stateNode.containerInfo,In=!0,Gr(e,t,n),rt=r,In=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bg(n,t,o),i=i.next}while(i!==r)}Gr(e,t,n);break;case 1:if(!yt&&(so(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,t,a)}Gr(e,t,n);break;case 21:Gr(e,t,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,Gr(e,t,n),yt=r):Gr(e,t,n);break;default:Gr(e,t,n)}}function I_(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vb),t.forEach(function(r){var i=Kb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,In=!1;break e;case 3:rt=a.stateNode.containerInfo,In=!0;break e;case 4:rt=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(rt===null)throw Error(P(160));lS(s,o,i),rt=null,In=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cS(t,e),t=t.sibling}function cS(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xn(t,e),zn(e),r&4){try{il(3,e,e.return),Eh(3,e)}catch(v){Ne(e,e.return,v)}try{il(5,e,e.return)}catch(v){Ne(e,e.return,v)}}break;case 1:xn(t,e),zn(e),r&512&&n!==null&&so(n,n.return);break;case 5:if(xn(t,e),zn(e),r&512&&n!==null&&so(n,n.return),e.flags&32){var i=e.stateNode;try{vl(i,"")}catch(v){Ne(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&PE(i,s),mg(a,o);var u=mg(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?LE(i,h):d==="dangerouslySetInnerHTML"?NE(i,h):d==="children"?vl(i,h):u0(i,d,h,u)}switch(a){case"input":dg(i,s);break;case"textarea":bE(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?mo(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?mo(i,!!s.multiple,s.defaultValue,!0):mo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Cl]=s}catch(v){Ne(e,e.return,v)}}break;case 6:if(xn(t,e),zn(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Ne(e,e.return,v)}}break;case 3:if(xn(t,e),zn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{El(t.containerInfo)}catch(v){Ne(e,e.return,v)}break;case 4:xn(t,e),zn(e);break;case 13:xn(t,e),zn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(B0=Le())),r&4&&I_(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(yt=(u=yt)||d,xn(t,e),yt=u):xn(t,e),zn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for($=e,d=e.child;d!==null;){for(h=$=d;$!==null;){switch(f=$,p=f.child,f.tag){case 0:case 11:case 14:case 15:il(4,f,f.return);break;case 1:so(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){Ne(r,n,v)}}break;case 5:so(f,f.return);break;case 22:if(f.memoizedState!==null){T_(h);continue}}p!==null?(p.return=f,$=p):T_(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ME("display",o))}catch(v){Ne(e,e.return,v)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Ne(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:xn(t,e),zn(e),r&4&&I_(e);break;case 21:break;default:xn(t,e),zn(e)}}function zn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(aS(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vl(i,""),r.flags&=-33);var s=E_(e);qg(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=E_(e);Wg(e,a,o);break;default:throw Error(P(161))}}catch(l){Ne(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fb(e,t,n){$=e,uS(e)}function uS(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||yt;a=cu;var u=yt;if(cu=o,(yt=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?k_(i):l!==null?(l.return=o,$=l):k_(i);for(;s!==null;)$=s,uS(s),s=s.sibling;$=i,cu=a,yt=u}S_(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):S_(e)}}function S_(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:yt||Eh(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:En(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&a_(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}a_(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&El(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}yt||t.flags&512&&Hg(t)}catch(f){Ne(t,t.return,f)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function T_(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function k_(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Eh(4,t)}catch(l){Ne(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ne(t,i,l)}}var s=t.return;try{Hg(t)}catch(l){Ne(t,s,l)}break;case 5:var o=t.return;try{Hg(t)}catch(l){Ne(t,o,l)}}}catch(l){Ne(t,t.return,l)}if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}var zb=Math.ceil,Ed=Br.ReactCurrentDispatcher,F0=Br.ReactCurrentOwner,gn=Br.ReactCurrentBatchConfig,ce=0,et=null,ze=null,lt=0,Ht=0,oo=Ni(0),Ge=0,Nl=null,ys=0,Ih=0,z0=0,sl=null,Dt=null,B0=0,Do=1/0,fr=null,Id=!1,Gg=null,fi=null,uu=!1,si=null,Sd=0,ol=0,Qg=null,Lu=-1,Du=0;function Rt(){return ce&6?Le():Lu!==-1?Lu:Lu=Le()}function pi(e){return e.mode&1?ce&2&&lt!==0?lt&-lt:Tb.transition!==null?(Du===0&&(Du=GE()),Du):(e=fe,e!==0||(e=window.event,e=e===void 0?16:eI(e.type)),e):1}function Cn(e,t,n,r){if(50<ol)throw ol=0,Qg=null,Error(P(185));fc(e,n,r),(!(ce&2)||e!==et)&&(e===et&&(!(ce&2)&&(Ih|=n),Ge===4&&Zr(e,lt)),Ft(e,r),n===1&&ce===0&&!(t.mode&1)&&(Do=Le()+500,_h&&Mi()))}function Ft(e,t){var n=e.callbackNode;T2(e,t);var r=ad(e,e===et?lt:0);if(r===0)n!==null&&L1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&L1(n),t===1)e.tag===0?Sb(C_.bind(null,e)):_I(C_.bind(null,e)),wb(function(){!(ce&6)&&Mi()}),n=null;else{switch(QE(r)){case 1:n=g0;break;case 4:n=WE;break;case 16:n=od;break;case 536870912:n=qE;break;default:n=od}n=vS(n,dS.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dS(e,t){if(Lu=-1,Du=0,ce&6)throw Error(P(327));var n=e.callbackNode;if(xo()&&e.callbackNode!==n)return null;var r=ad(e,e===et?lt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Td(e,r);else{t=r;var i=ce;ce|=2;var s=fS();(et!==e||lt!==t)&&(fr=null,Do=Le()+500,as(e,t));do try{Wb();break}catch(a){hS(e,a)}while(!0);A0(),Ed.current=s,ce=i,ze!==null?t=0:(et=null,lt=0,t=Ge)}if(t!==0){if(t===2&&(i=xg(e),i!==0&&(r=i,t=Kg(e,i))),t===1)throw n=Nl,as(e,0),Zr(e,r),Ft(e,Le()),n;if(t===6)Zr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Bb(i)&&(t=Td(e,r),t===2&&(s=xg(e),s!==0&&(r=s,t=Kg(e,s))),t===1))throw n=Nl,as(e,0),Zr(e,r),Ft(e,Le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Xi(e,Dt,fr);break;case 3:if(Zr(e,r),(r&130023424)===r&&(t=B0+500-Le(),10<t)){if(ad(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Rt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rg(Xi.bind(null,e,Dt,fr),t);break}Xi(e,Dt,fr);break;case 4:if(Zr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-kn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zb(r/1960))-r,10<r){e.timeoutHandle=Rg(Xi.bind(null,e,Dt,fr),r);break}Xi(e,Dt,fr);break;case 5:Xi(e,Dt,fr);break;default:throw Error(P(329))}}}return Ft(e,Le()),e.callbackNode===n?dS.bind(null,e):null}function Kg(e,t){var n=sl;return e.current.memoizedState.isDehydrated&&(as(e,t).flags|=256),e=Td(e,t),e!==2&&(t=Dt,Dt=n,t!==null&&Yg(t)),e}function Yg(e){Dt===null?Dt=e:Dt.push.apply(Dt,e)}function Bb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zr(e,t){for(t&=~z0,t&=~Ih,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kn(t),r=1<<n;e[n]=-1,t&=~r}}function C_(e){if(ce&6)throw Error(P(327));xo();var t=ad(e,0);if(!(t&1))return Ft(e,Le()),null;var n=Td(e,t);if(e.tag!==0&&n===2){var r=xg(e);r!==0&&(t=r,n=Kg(e,r))}if(n===1)throw n=Nl,as(e,0),Zr(e,t),Ft(e,Le()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xi(e,Dt,fr),Ft(e,Le()),null}function H0(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(Do=Le()+500,_h&&Mi())}}function vs(e){si!==null&&si.tag===0&&!(ce&6)&&xo();var t=ce;ce|=1;var n=gn.transition,r=fe;try{if(gn.transition=null,fe=1,e)return e()}finally{fe=r,gn.transition=n,ce=t,!(ce&6)&&Mi()}}function W0(){Ht=oo.current,Te(oo)}function as(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_b(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(T0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hd();break;case 3:Mo(),Te(Vt),Te(Et),M0();break;case 5:N0(r);break;case 4:Mo();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:R0(r.type._context);break;case 22:case 23:W0()}n=n.return}if(et=e,ze=e=gi(e.current,null),lt=Ht=t,Ge=0,Nl=null,z0=Ih=ys=0,Dt=sl=null,es!==null){for(t=0;t<es.length;t++)if(n=es[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}es=null}return e}function hS(e,t){do{var n=ze;try{if(A0(),ju.current=xd,wd){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wd=!1}if(ms=0,Xe=qe=Re=null,rl=!1,Pl=0,F0.current=null,n===null||n.return===null){Ge=1,Nl=t,ze=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=p_(o);if(p!==null){p.flags&=-257,g_(p,o,a,s,t),p.mode&1&&f_(s,u,t),t=p,l=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(l),t.updateQueue=v}else m.add(l);break e}else{if(!(t&1)){f_(s,u,t),q0();break e}l=Error(P(426))}}else if(Ce&&a.mode&1){var w=p_(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),g_(w,o,a,s,t),k0(Lo(l,a));break e}}s=l=Lo(l,a),Ge!==4&&(Ge=2),sl===null?sl=[s]:sl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=KI(s,l,t);o_(s,g);break e;case 1:a=l;var y=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(fi===null||!fi.has(_)))){s.flags|=65536,t&=-t,s.lanes|=t;var E=YI(s,a,t);o_(s,E);break e}}s=s.return}while(s!==null)}gS(n)}catch(T){t=T,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function fS(){var e=Ed.current;return Ed.current=xd,e===null?xd:e}function q0(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),et===null||!(ys&268435455)&&!(Ih&268435455)||Zr(et,lt)}function Td(e,t){var n=ce;ce|=2;var r=fS();(et!==e||lt!==t)&&(fr=null,as(e,t));do try{Hb();break}catch(i){hS(e,i)}while(!0);if(A0(),ce=n,Ed.current=r,ze!==null)throw Error(P(261));return et=null,lt=0,Ge}function Hb(){for(;ze!==null;)pS(ze)}function Wb(){for(;ze!==null&&!m2();)pS(ze)}function pS(e){var t=yS(e.alternate,e,Ht);e.memoizedProps=e.pendingProps,t===null?gS(e):ze=t,F0.current=null}function gS(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ob(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,ze=null;return}}else if(n=$b(n,t,Ht),n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Ge===0&&(Ge=5)}function Xi(e,t,n){var r=fe,i=gn.transition;try{gn.transition=null,fe=1,qb(e,t,n,r)}finally{gn.transition=i,fe=r}return null}function qb(e,t,n,r){do xo();while(si!==null);if(ce&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(k2(e,s),e===et&&(ze=et=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uu||(uu=!0,vS(od,function(){return xo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gn.transition,gn.transition=null;var o=fe;fe=1;var a=ce;ce|=4,F0.current=null,Ub(e,n),cS(n,e),hb(Cg),ld=!!kg,Cg=kg=null,e.current=n,Fb(n),y2(),ce=a,fe=o,gn.transition=s}else e.current=n;if(uu&&(uu=!1,si=e,Sd=i),s=e.pendingLanes,s===0&&(fi=null),w2(n.stateNode),Ft(e,Le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Id)throw Id=!1,e=Gg,Gg=null,e;return Sd&1&&e.tag!==0&&xo(),s=e.pendingLanes,s&1?e===Qg?ol++:(ol=0,Qg=e):ol=0,Mi(),null}function xo(){if(si!==null){var e=QE(Sd),t=gn.transition,n=fe;try{if(gn.transition=null,fe=16>e?16:e,si===null)var r=!1;else{if(e=si,si=null,Sd=0,ce&6)throw Error(P(331));var i=ce;for(ce|=4,$=e.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:il(8,d,s)}var h=d.child;if(h!==null)h.return=d,$=h;else for(;$!==null;){d=$;var f=d.sibling,p=d.return;if(oS(d),d===u){$=null;break}if(f!==null){f.return=p,$=f;break}$=p}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:il(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,$=g;break e}$=s.return}}var y=e.current;for($=y;$!==null;){o=$;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,$=_;else e:for(o=y;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eh(9,a)}}catch(T){Ne(a,a.return,T)}if(a===o){$=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,$=E;break e}$=a.return}}if(ce=i,Mi(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(ph,e)}catch{}r=!0}return r}finally{fe=n,gn.transition=t}}return!1}function A_(e,t,n){t=Lo(n,t),t=KI(e,t,1),e=hi(e,t,1),t=Rt(),e!==null&&(fc(e,1,t),Ft(e,t))}function Ne(e,t,n){if(e.tag===3)A_(e,e,n);else for(;t!==null;){if(t.tag===3){A_(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fi===null||!fi.has(r))){e=Lo(n,e),e=YI(t,e,1),t=hi(t,e,1),e=Rt(),t!==null&&(fc(t,1,e),Ft(t,e));break}}t=t.return}}function Gb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Rt(),e.pingedLanes|=e.suspendedLanes&n,et===e&&(lt&n)===n&&(Ge===4||Ge===3&&(lt&130023424)===lt&&500>Le()-B0?as(e,0):z0|=n),Ft(e,t)}function mS(e,t){t===0&&(e.mode&1?(t=eu,eu<<=1,!(eu&130023424)&&(eu=4194304)):t=1);var n=Rt();e=jr(e,t),e!==null&&(fc(e,t,n),Ft(e,n))}function Qb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mS(e,n)}function Kb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),mS(e,n)}var yS;yS=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Vt.current)Ot=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ot=!1,Db(e,t,n);Ot=!!(e.flags&131072)}else Ot=!1,Ce&&t.flags&1048576&&wI(t,gd,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mu(e,t),e=t.pendingProps;var i=bo(t,Et.current);wo(t,n),i=D0(null,t,r,e,i,n);var s=$0();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ut(r)?(s=!0,fd(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,b0(t),i.updater=wh,t.stateNode=i,i._reactInternals=t,Dg(t,r,e,n),t=Vg(null,t,r,!0,s,n)):(t.tag=0,Ce&&s&&S0(t),Ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xb(r),e=En(r,e),i){case 0:t=Og(null,t,r,e,n);break e;case 1:t=v_(null,t,r,e,n);break e;case 11:t=m_(null,t,r,e,n);break e;case 14:t=y_(null,t,r,En(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:En(r,i),Og(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:En(r,i),v_(e,t,r,i,n);case 3:e:{if(eS(t),e===null)throw Error(P(387));r=t.pendingProps,s=t.memoizedState,i=s.element,SI(e,t),vd(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Lo(Error(P(423)),t),t=__(e,t,r,n,i);break e}else if(r!==i){i=Lo(Error(P(424)),t),t=__(e,t,r,n,i);break e}else for(Wt=di(t.stateNode.containerInfo.firstChild),Yt=t,Ce=!0,Sn=null,n=AI(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jo(),r===i){t=Nr(e,t,n);break e}Ct(e,t,r,n)}t=t.child}return t;case 5:return RI(t),e===null&&Ng(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ag(r,i)?o=null:s!==null&&Ag(r,s)&&(t.flags|=32),ZI(e,t),Ct(e,t,o,n),t.child;case 6:return e===null&&Ng(t),null;case 13:return tS(e,t,n);case 4:return j0(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=No(t,null,r,n):Ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:En(r,i),m_(e,t,r,i,n);case 7:return Ct(e,t,t.pendingProps,n),t.child;case 8:return Ct(e,t,t.pendingProps.children,n),t.child;case 12:return Ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,ve(md,r._currentValue),r._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===i.children&&!Vt.current){t=Nr(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=kr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mg(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mg(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,wo(t,n),i=yn(i),r=r(i),t.flags|=1,Ct(e,t,r,n),t.child;case 14:return r=t.type,i=En(r,t.pendingProps),i=En(r.type,i),y_(e,t,r,i,n);case 15:return XI(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:En(r,i),Mu(e,t),t.tag=1,Ut(r)?(e=!0,fd(t)):e=!1,wo(t,n),kI(t,r,i),Dg(t,r,i,n),Vg(null,t,r,!0,e,n);case 19:return nS(e,t,n);case 22:return JI(e,t,n)}throw Error(P(156,t.tag))};function vS(e,t){return HE(e,t)}function Yb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,t,n,r){return new Yb(e,t,n,r)}function G0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xb(e){if(typeof e=="function")return G0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===h0)return 11;if(e===f0)return 14}return 2}function gi(e,t){var n=e.alternate;return n===null?(n=dn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $u(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")G0(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ys:return ls(n.children,i,s,t);case d0:o=8,i|=8;break;case og:return e=dn(12,n,t,i|2),e.elementType=og,e.lanes=s,e;case ag:return e=dn(13,n,t,i),e.elementType=ag,e.lanes=s,e;case lg:return e=dn(19,n,t,i),e.elementType=lg,e.lanes=s,e;case CE:return Sh(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case TE:o=10;break e;case kE:o=9;break e;case h0:o=11;break e;case f0:o=14;break e;case Yr:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=dn(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function ls(e,t,n,r){return e=dn(7,e,r,t),e.lanes=n,e}function Sh(e,t,n,r){return e=dn(22,e,r,t),e.elementType=CE,e.lanes=n,e.stateNode={isHidden:!1},e}function _p(e,t,n){return e=dn(6,e,null,t),e.lanes=n,e}function wp(e,t,n){return t=dn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jb(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ep(0),this.expirationTimes=ep(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ep(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Q0(e,t,n,r,i,s,o,a,l){return e=new Jb(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=dn(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},b0(s),e}function Zb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ks,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _S(e){if(!e)return Si;e=e._reactInternals;e:{if(Ns(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ut(n))return vI(e,n,t)}return t}function wS(e,t,n,r,i,s,o,a,l){return e=Q0(n,r,!0,e,i,s,o,a,l),e.context=_S(null),n=e.current,r=Rt(),i=pi(n),s=kr(r,i),s.callback=t??null,hi(n,s,i),e.current.lanes=i,fc(e,i,r),Ft(e,r),e}function Th(e,t,n,r){var i=t.current,s=Rt(),o=pi(i);return n=_S(n),t.context===null?t.context=n:t.pendingContext=n,t=kr(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hi(i,t,o),e!==null&&(Cn(e,i,o,s),bu(e,i,o)),o}function kd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function R_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function K0(e,t){R_(e,t),(e=e.alternate)&&R_(e,t)}function ej(){return null}var xS=typeof reportError=="function"?reportError:function(e){console.error(e)};function Y0(e){this._internalRoot=e}kh.prototype.render=Y0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Th(e,t,null,null)};kh.prototype.unmount=Y0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vs(function(){Th(null,e,null,null)}),t[br]=null}};function kh(e){this._internalRoot=e}kh.prototype.unstable_scheduleHydration=function(e){if(e){var t=XE();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jr.length&&t!==0&&t<Jr[n].priority;n++);Jr.splice(n,0,e),n===0&&ZE(e)}};function X0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ch(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function P_(){}function tj(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=kd(o);s.call(u)}}var o=wS(t,r,e,0,null,!1,!1,"",P_);return e._reactRootContainer=o,e[br]=o.current,Tl(e.nodeType===8?e.parentNode:e),vs(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=kd(l);a.call(u)}}var l=Q0(e,0,!1,null,null,!1,!1,"",P_);return e._reactRootContainer=l,e[br]=l.current,Tl(e.nodeType===8?e.parentNode:e),vs(function(){Th(t,l,n,r)}),l}function Ah(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=kd(o);a.call(l)}}Th(t,o,e,i)}else o=tj(n,t,e,i,r);return kd(o)}KE=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fa(t.pendingLanes);n!==0&&(m0(t,n|1),Ft(t,Le()),!(ce&6)&&(Do=Le()+500,Mi()))}break;case 13:vs(function(){var r=jr(e,1);if(r!==null){var i=Rt();Cn(r,e,1,i)}}),K0(e,1)}};y0=function(e){if(e.tag===13){var t=jr(e,134217728);if(t!==null){var n=Rt();Cn(t,e,134217728,n)}K0(e,134217728)}};YE=function(e){if(e.tag===13){var t=pi(e),n=jr(e,t);if(n!==null){var r=Rt();Cn(n,e,t,r)}K0(e,t)}};XE=function(){return fe};JE=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};vg=function(e,t,n){switch(t){case"input":if(dg(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vh(r);if(!i)throw Error(P(90));RE(r),dg(r,i)}}}break;case"textarea":bE(e,n);break;case"select":t=n.value,t!=null&&mo(e,!!n.multiple,t,!1)}};OE=H0;VE=vs;var nj={usingClientEntryPoint:!1,Events:[gc,eo,vh,DE,$E,H0]},Ma={findFiberByHostInstance:Zi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rj={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Br.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zE(e),e===null?null:e.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||ej,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{ph=du.inject(rj),Jn=du}catch{}}sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nj;sn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!X0(t))throw Error(P(200));return Zb(e,t,null,n)};sn.createRoot=function(e,t){if(!X0(e))throw Error(P(299));var n=!1,r="",i=xS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Q0(e,1,!1,null,null,n,!1,r,i),e[br]=t.current,Tl(e.nodeType===8?e.parentNode:e),new Y0(t)};sn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=zE(t),e=e===null?null:e.stateNode,e};sn.flushSync=function(e){return vs(e)};sn.hydrate=function(e,t,n){if(!Ch(t))throw Error(P(200));return Ah(null,e,t,!0,n)};sn.hydrateRoot=function(e,t,n){if(!X0(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=xS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=wS(t,null,e,1,n??null,i,!1,s,o),e[br]=t.current,Tl(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new kh(t)};sn.render=function(e,t,n){if(!Ch(t))throw Error(P(200));return Ah(null,e,t,!1,n)};sn.unmountComponentAtNode=function(e){if(!Ch(e))throw Error(P(40));return e._reactRootContainer?(vs(function(){Ah(null,null,e,!1,function(){e._reactRootContainer=null,e[br]=null})}),!0):!1};sn.unstable_batchedUpdates=H0;sn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ch(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ah(e,t,n,!1,r)};sn.version="18.2.0-next-9e3b772b8-20220608";function ES(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ES)}catch(e){console.error(e)}}ES(),wE.exports=sn;var ij=wE.exports,b_=ij;ig.createRoot=b_.createRoot,ig.hydrateRoot=b_.hydrateRoot;var Ze=function(){return Ze=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ze.apply(this,arguments)};function J0(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ml(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var xe="-ms-",al="-moz-",de="-webkit-",IS="comm",Rh="rule",Z0="decl",sj="@import",SS="@keyframes",oj="@layer",aj=Math.abs,ey=String.fromCharCode,Xg=Object.assign;function lj(e,t){return Je(e,0)^45?(((t<<2^Je(e,0))<<2^Je(e,1))<<2^Je(e,2))<<2^Je(e,3):0}function TS(e){return e.trim()}function pr(e,t){return(e=t.exec(e))?e[0]:e}function te(e,t,n){return e.replace(t,n)}function Ou(e,t){return e.indexOf(t)}function Je(e,t){return e.charCodeAt(t)|0}function $o(e,t,n){return e.slice(t,n)}function Wn(e){return e.length}function kS(e){return e.length}function Ba(e,t){return t.push(e),e}function cj(e,t){return e.map(t).join("")}function j_(e,t){return e.filter(function(n){return!pr(n,t)})}var Ph=1,Oo=1,CS=0,_n=0,Fe=0,da="";function bh(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ph,column:Oo,length:o,return:"",siblings:a}}function Kr(e,t){return Xg(bh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function zs(e){for(;e.root;)e=Kr(e.root,{children:[e]});Ba(e,e.siblings)}function uj(){return Fe}function dj(){return Fe=_n>0?Je(da,--_n):0,Oo--,Fe===10&&(Oo=1,Ph--),Fe}function An(){return Fe=_n<CS?Je(da,_n++):0,Oo++,Fe===10&&(Oo=1,Ph++),Fe}function cs(){return Je(da,_n)}function Vu(){return _n}function jh(e,t){return $o(da,e,t)}function Jg(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hj(e){return Ph=Oo=1,CS=Wn(da=e),_n=0,[]}function fj(e){return da="",e}function xp(e){return TS(jh(_n-1,Zg(e===91?e+2:e===40?e+1:e)))}function pj(e){for(;(Fe=cs())&&Fe<33;)An();return Jg(e)>2||Jg(Fe)>3?"":" "}function gj(e,t){for(;--t&&An()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return jh(e,Vu()+(t<6&&cs()==32&&An()==32))}function Zg(e){for(;An();)switch(Fe){case e:return _n;case 34:case 39:e!==34&&e!==39&&Zg(Fe);break;case 40:e===41&&Zg(e);break;case 92:An();break}return _n}function mj(e,t){for(;An()&&e+Fe!==57;)if(e+Fe===84&&cs()===47)break;return"/*"+jh(t,_n-1)+"*"+ey(e===47?e:An())}function yj(e){for(;!Jg(cs());)An();return jh(e,_n)}function vj(e){return fj(Uu("",null,null,null,[""],e=hj(e),0,[0],e))}function Uu(e,t,n,r,i,s,o,a,l){for(var u=0,d=0,h=o,f=0,p=0,m=0,v=1,w=1,g=1,y=0,_="",E=i,T=s,k=r,I=_;w;)switch(m=y,y=An()){case 40:if(m!=108&&Je(I,h-1)==58){Ou(I+=te(xp(y),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:I+=xp(y);break;case 9:case 10:case 13:case 32:I+=pj(m);break;case 92:I+=gj(Vu()-1,7);continue;case 47:switch(cs()){case 42:case 47:Ba(_j(mj(An(),Vu()),t,n,l),l);break;default:I+="/"}break;case 123*v:a[u++]=Wn(I)*g;case 125*v:case 59:case 0:switch(y){case 0:case 125:w=0;case 59+d:g==-1&&(I=te(I,/\f/g,"")),p>0&&Wn(I)-h&&Ba(p>32?M_(I+";",r,n,h-1,l):M_(te(I," ","")+";",r,n,h-2,l),l);break;case 59:I+=";";default:if(Ba(k=N_(I,t,n,u,d,i,a,_,E=[],T=[],h,s),s),y===123)if(d===0)Uu(I,t,k,k,E,s,h,a,T);else switch(f===99&&Je(I,3)===110?100:f){case 100:case 108:case 109:case 115:Uu(e,k,k,r&&Ba(N_(e,k,k,0,0,i,a,_,i,E=[],h,T),T),i,T,h,a,r?E:T);break;default:Uu(I,k,k,k,[""],T,0,a,T)}}u=d=p=0,v=g=1,_=I="",h=o;break;case 58:h=1+Wn(I),p=m;default:if(v<1){if(y==123)--v;else if(y==125&&v++==0&&dj()==125)continue}switch(I+=ey(y),y*v){case 38:g=d>0?1:(I+="\f",-1);break;case 44:a[u++]=(Wn(I)-1)*g,g=1;break;case 64:cs()===45&&(I+=xp(An())),f=cs(),d=h=Wn(_=I+=yj(Vu())),y++;break;case 45:m===45&&Wn(I)==2&&(v=0)}}return s}function N_(e,t,n,r,i,s,o,a,l,u,d,h){for(var f=i-1,p=i===0?s:[""],m=kS(p),v=0,w=0,g=0;v<r;++v)for(var y=0,_=$o(e,f+1,f=aj(w=o[v])),E=e;y<m;++y)(E=TS(w>0?p[y]+" "+_:te(_,/&\f/g,p[y])))&&(l[g++]=E);return bh(e,t,n,i===0?Rh:a,l,u,d,h)}function _j(e,t,n,r){return bh(e,t,n,IS,ey(uj()),$o(e,2,-2),0,r)}function M_(e,t,n,r,i){return bh(e,t,n,Z0,$o(e,0,r),$o(e,r+1,-1),r,i)}function AS(e,t,n){switch(lj(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 4789:return al+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+al+e+xe+e+e;case 5936:switch(Je(e,t+11)){case 114:return de+e+xe+te(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+xe+te(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+xe+te(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return de+e+xe+e+e;case 6165:return de+e+xe+"flex-"+e+e;case 5187:return de+e+te(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return de+e+xe+"flex-item-"+te(e,/flex-|-self/g,"")+(pr(e,/flex-|baseline/)?"":xe+"grid-row-"+te(e,/flex-|-self/g,""))+e;case 4675:return de+e+xe+"flex-line-pack"+te(e,/align-content|flex-|-self/g,"")+e;case 5548:return de+e+xe+te(e,"shrink","negative")+e;case 5292:return de+e+xe+te(e,"basis","preferred-size")+e;case 6060:return de+"box-"+te(e,"-grow","")+de+e+xe+te(e,"grow","positive")+e;case 4554:return de+te(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return te(te(te(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return te(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return te(te(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4200:if(!pr(e,/flex-|baseline/))return xe+"grid-column-align"+$o(e,t)+e;break;case 2592:case 3360:return xe+te(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,pr(r.props,/grid-\w+-end/)})?~Ou(e+(n=n[t].value),"span")?e:xe+te(e,"-start","")+e+xe+"grid-row-span:"+(~Ou(n,"span")?pr(n,/\d+/):+pr(n,/\d+/)-+pr(e,/\d+/))+";":xe+te(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pr(r.props,/grid-\w+-start/)})?e:xe+te(te(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return te(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wn(e)-1-t>6)switch(Je(e,t+1)){case 109:if(Je(e,t+4)!==45)break;case 102:return te(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+al+(Je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ou(e,"stretch")?AS(te(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return te(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return xe+i+":"+s+u+(o?xe+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(Je(e,t+6)===121)return te(e,":",":"+de)+e;break;case 6444:switch(Je(e,Je(e,14)===45?18:11)){case 120:return te(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+de+(Je(e,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+xe+"$2box$3")+e;case 100:return te(e,":",":"+xe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(e,"scroll-","scroll-snap-")+e}return e}function Cd(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function wj(e,t,n,r){switch(e.type){case oj:if(e.children.length)break;case sj:case Z0:return e.return=e.return||e.value;case IS:return"";case SS:return e.return=e.value+"{"+Cd(e.children,r)+"}";case Rh:if(!Wn(e.value=e.props.join(",")))return""}return Wn(n=Cd(e.children,r))?e.return=e.value+"{"+n+"}":""}function xj(e){var t=kS(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function Ej(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ij(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Z0:e.return=AS(e.value,e.length,n);return;case SS:return Cd([Kr(e,{value:te(e.value,"@","@"+de)})],r);case Rh:if(e.length)return cj(n=e.props,function(i){switch(pr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zs(Kr(e,{props:[te(i,/:(read-\w+)/,":"+al+"$1")]})),zs(Kr(e,{props:[i]})),Xg(e,{props:j_(n,r)});break;case"::placeholder":zs(Kr(e,{props:[te(i,/:(plac\w+)/,":"+de+"input-$1")]})),zs(Kr(e,{props:[te(i,/:(plac\w+)/,":"+al+"$1")]})),zs(Kr(e,{props:[te(i,/:(plac\w+)/,xe+"input-$1")]})),zs(Kr(e,{props:[i]})),Xg(e,{props:j_(n,r)});break}return""})}}var Sj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bt={},Vo=typeof process<"u"&&Bt!==void 0&&(Bt.REACT_APP_SC_ATTR||Bt.SC_ATTR)||"data-styled",ty=typeof window<"u"&&"HTMLElement"in window,Tj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==""?Bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.SC_DISABLE_SPEEDY!==void 0&&Bt.SC_DISABLE_SPEEDY!==""&&Bt.SC_DISABLE_SPEEDY!=="false"&&Bt.SC_DISABLE_SPEEDY),kj={},Nh=Object.freeze([]),Uo=Object.freeze({});function RS(e,t,n){return n===void 0&&(n=Uo),e.theme!==n.theme&&e.theme||t||n.theme}var PS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Aj=/(^-|-$)/g;function L_(e){return e.replace(Cj,"-").replace(Aj,"")}var Rj=/(a)(d)/gi,D_=function(e){return String.fromCharCode(e+(e>25?39:97))};function em(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=D_(t%52)+n;return(D_(t%52)+n).replace(Rj,"$1-$2")}var Ep,ao=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},bS=function(e){return ao(5381,e)};function jS(e){return em(bS(e)>>>0)}function Pj(e){return e.displayName||e.name||"Component"}function Ip(e){return typeof e=="string"&&!0}var NS=typeof Symbol=="function"&&Symbol.for,MS=NS?Symbol.for("react.memo"):60115,bj=NS?Symbol.for("react.forward_ref"):60112,jj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},LS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mj=((Ep={})[bj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ep[MS]=LS,Ep);function $_(e){return("type"in(t=e)&&t.type.$$typeof)===MS?LS:"$$typeof"in e?Mj[e.$$typeof]:jj;var t}var Lj=Object.defineProperty,Dj=Object.getOwnPropertyNames,O_=Object.getOwnPropertySymbols,$j=Object.getOwnPropertyDescriptor,Oj=Object.getPrototypeOf,V_=Object.prototype;function DS(e,t,n){if(typeof t!="string"){if(V_){var r=Oj(t);r&&r!==V_&&DS(e,r,n)}var i=Dj(t);O_&&(i=i.concat(O_(t)));for(var s=$_(e),o=$_(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Nj||n&&n[l]||o&&l in o||s&&l in s)){var u=$j(t,l);try{Lj(e,l,u)}catch{}}}}return e}function _s(e){return typeof e=="function"}function ny(e){return typeof e=="object"&&"styledComponentId"in e}function ns(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function tm(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ll(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nm(e,t,n){if(n===void 0&&(n=!1),!n&&!Ll(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=nm(e[r],t[r]);else if(Ll(t))for(var r in t)e[r]=nm(e[r],t[r]);return e}function ry(e,t){Object.defineProperty(e,"toString",{value:t})}function Ti(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Vj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Ti(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Fu=new Map,Ad=new Map,zu=1,hu=function(e){if(Fu.has(e))return Fu.get(e);for(;Ad.has(zu);)zu++;var t=zu++;return Fu.set(e,t),Ad.set(t,e),t},Uj=function(e,t){zu=t+1,Fu.set(e,t),Ad.set(t,e)},Fj="style[".concat(Vo,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),zj=new RegExp("^".concat(Vo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Bj=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},Hj=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(zj);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(Uj(d,u),Bj(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Wj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $S=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Vo,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Vo,"active"),r.setAttribute("data-styled-version","6.1.1");var o=Wj();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},qj=function(){function e(t){this.element=$S(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ti(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Gj=function(){function e(t){this.element=$S(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Qj=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),U_=ty,Kj={isServer:!ty,useCSSOMInjection:!Tj},Rd=function(){function e(t,n,r){t===void 0&&(t=Uo),n===void 0&&(n={});var i=this;this.options=Ze(Ze({},Kj),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ty&&U_&&(U_=!1,function(s){for(var o=document.querySelectorAll(Fj),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Vo)!=="active"&&(Hj(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),ry(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var f=function(g){return Ad.get(g)}(h);if(f===void 0)return"continue";var p=s.names.get(f),m=o.getGroup(h);if(p===void 0||m.length===0)return"continue";var v="".concat(Vo,".g").concat(h,'[id="').concat(f,'"]'),w="";p!==void 0&&p.forEach(function(g){g.length>0&&(w+="".concat(g,","))}),l+="".concat(m).concat(v,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return l}(i)})}return e.registerId=function(t){return hu(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ze(Ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Qj(i):r?new qj(i):new Gj(i)}(this.options),new Vj(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(hu(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(hu(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(hu(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Yj=/&/g,Xj=/^\s*\/\/.*$/gm;function OS(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=OS(n.children,t)),n})}function Jj(e){var t,n,r,i=e===void 0?Uo:e,s=i.options,o=s===void 0?Uo:s,a=i.plugins,l=a===void 0?Nh:a,u=function(f,p,m){return m===n||m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===Rh&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Yj,n).replace(r,u))}),o.prefix&&d.push(Ij),d.push(wj);var h=function(f,p,m,v){p===void 0&&(p=""),m===void 0&&(m=""),v===void 0&&(v="&"),t=v,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(Xj,""),g=vj(m||p?"".concat(m," ").concat(p," { ").concat(w," }"):w);o.namespace&&(g=OS(g,o.namespace));var y=[];return Cd(g,xj(d.concat(Ej(function(_){return y.push(_)})))),y};return h.hash=l.length?l.reduce(function(f,p){return p.name||Ti(15),ao(f,p.name)},5381).toString():"",h}var Zj=new Rd,rm=Jj(),VS=ye.createContext({shouldForwardProp:void 0,styleSheet:Zj,stylis:rm});VS.Consumer;ye.createContext(void 0);function im(){return S.useContext(VS)}var eN=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=rm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ry(this,function(){throw Ti(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=rm),this.name+t.hash},e}(),tN=function(e){return e>="A"&&e<="Z"};function F_(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;tN(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var US=function(e){return e==null||e===!1||e===""},FS=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!US(s)&&(Array.isArray(s)&&s.isCss||_s(s)?r.push("".concat(F_(i),":"),s,";"):Ll(s)?r.push.apply(r,Ml(Ml(["".concat(i," {")],FS(s),!1),["}"],!1)):r.push("".concat(F_(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Sj||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function mi(e,t,n,r){if(US(e))return[];if(ny(e))return[".".concat(e.styledComponentId)];if(_s(e)){if(!_s(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return mi(i,t,n,r)}var s;return e instanceof eN?n?(e.inject(n,r),[e.getName(r)]):[e]:Ll(e)?FS(e):Array.isArray(e)?Array.prototype.concat.apply(Nh,e.map(function(o){return mi(o,t,n,r)})):[e.toString()]}function zS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(_s(n)&&!ny(n))return!1}return!0}var nN=bS("6.1.1"),rN=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&zS(t),this.componentId=n,this.baseHash=ao(nN,n),this.baseStyle=r,Rd.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ns(i,this.staticRulesId);else{var s=tm(mi(this.rules,t,n,r)),o=em(ao(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ns(i,o),this.staticRulesId=o}else{for(var l=ao(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var f=tm(mi(h,t,n,r));l=ao(l,f+d),u+=f}}if(u){var p=em(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=ns(i,p)}}return i},e}(),Fo=ye.createContext(void 0);Fo.Consumer;function Mh(){var e=S.useContext(Fo);if(!e)throw Ti(18);return e}function iN(e){var t=ye.useContext(Fo),n=S.useMemo(function(){return function(r,i){if(!r)throw Ti(14);if(_s(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Ti(8);return i?Ze(Ze({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?ye.createElement(Fo.Provider,{value:n},e.children):null}var Sp={};function sN(e,t,n){var r=ny(e),i=e,s=!Ip(e),o=t.attrs,a=o===void 0?Nh:o,l=t.componentId,u=l===void 0?function(E,T){var k=typeof E!="string"?"sc":L_(E);Sp[k]=(Sp[k]||0)+1;var I="".concat(k,"-").concat(jS("6.1.1"+k+Sp[k]));return T?"".concat(T,"-").concat(I):I}(t.displayName,t.parentComponentId):l,d=t.displayName,h=d===void 0?function(E){return Ip(E)?"styled.".concat(E):"Styled(".concat(Pj(E),")")}(e):d,f=t.displayName&&t.componentId?"".concat(L_(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(E,T){return v(E,T)&&w(E,T)}}else m=v}var g=new rN(n,f,r?i.componentStyle:void 0);function y(E,T){return function(k,I,A){var z=k.attrs,H=k.componentStyle,ee=k.defaultProps,F=k.foldedComponentIds,Oe=k.styledComponentId,Wr=k.target,Wi=ye.useContext(Fo),qi=im(),Un=k.shouldForwardProp||qi.shouldForwardProp,N=function(Tt,wn,kt){for(var Fn,Gi=Ze(Ze({},wn),{className:void 0,theme:kt}),Qf=0;Qf<Tt.length;Qf+=1){var Qc=_s(Fn=Tt[Qf])?Fn(Gi):Fn;for(var qr in Qc)Gi[qr]=qr==="className"?ns(Gi[qr],Qc[qr]):qr==="style"?Ze(Ze({},Gi[qr]),Qc[qr]):Qc[qr]}return wn.className&&(Gi.className=ns(Gi.className,wn.className)),Gi}(z,I,RS(I,Wi,ee)||Uo),W=N.as||Wr,Q={};for(var le in N)N[le]===void 0||le[0]==="$"||le==="as"||le==="theme"||(le==="forwardedAs"?Q.as=N.forwardedAs:Un&&!Un(le,W)||(Q[le]=N[le]));var ke=function(Tt,wn){var kt=im(),Fn=Tt.generateAndInjectStyles(wn,kt.styleSheet,kt.stylis);return Fn}(H,N),ht=ns(F,Oe);return ke&&(ht+=" "+ke),N.className&&(ht+=" "+N.className),Q[Ip(W)&&!PS.has(W)?"class":"className"]=ht,Q.ref=A,S.createElement(W,Q)}(_,E,T)}y.displayName=h;var _=ye.forwardRef(y);return _.attrs=p,_.componentStyle=g,_.displayName=h,_.shouldForwardProp=m,_.foldedComponentIds=r?ns(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=f,_.target=r?i.target:e,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(T){for(var k=[],I=1;I<arguments.length;I++)k[I-1]=arguments[I];for(var A=0,z=k;A<z.length;A++)nm(T,z[A],!0);return T}({},i.defaultProps,E):E}}),ry(_,function(){return".".concat(_.styledComponentId)}),s&&DS(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function z_(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var B_=function(e){return Object.assign(e,{isCss:!0})};function BS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(_s(e)||Ll(e)){var r=e;return B_(mi(z_(Nh,Ml([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?mi(i):B_(mi(z_(i,t)))}function sm(e,t,n){if(n===void 0&&(n=Uo),!t)throw Ti(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,BS.apply(void 0,Ml([i],s,!1)))};return r.attrs=function(i){return sm(e,t,Ze(Ze({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return sm(e,t,Ze(Ze({},n),i))},r}var HS=function(e){return sm(sN,e)},x=HS;PS.forEach(function(e){x[e]=HS(e)});var oN=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=zS(t),Rd.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(tm(mi(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Rd.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function aN(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=BS.apply(void 0,Ml([e],t,!1)),i="sc-global-".concat(jS(JSON.stringify(r))),s=new oN(r,i),o=function(l){var u=im(),d=ye.useContext(Fo),h=ye.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,d,u.stylis),ye.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,d,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,d,u.stylis]),null};function a(l,u,d,h,f){if(s.isStatic)s.renderStyles(l,kj,d,f);else{var p=Ze(Ze({},u),{theme:RS(u,h,o.defaultProps)});s.renderStyles(l,p,d,f)}}return ye.memo(o)}const lN=x.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  font-weight: 200;
`,cN=x.div`
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
`,uN=x.h3`
  font-weight: 300;
  color: #fff;
  font-size: 1.5rem;
`,dN=x.span`
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
`;var WS={exports:{}},hN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fN=hN,pN=fN;function qS(){}function GS(){}GS.resetWarningCache=qS;var gN=function(){function e(r,i,s,o,a,l){if(l!==pN){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:GS,resetWarningCache:qS};return n.PropTypes=n,n};WS.exports=gN();var mN=WS.exports;const Qi=r0(mN);var yN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},vN=Object.defineProperty,_N=Object.defineProperties,wN=Object.getOwnPropertyDescriptors,Pd=Object.getOwnPropertySymbols,QS=Object.prototype.hasOwnProperty,KS=Object.prototype.propertyIsEnumerable,H_=(e,t,n)=>t in e?vN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W_=(e,t)=>{for(var n in t||(t={}))QS.call(t,n)&&H_(e,n,t[n]);if(Pd)for(var n of Pd(t))KS.call(t,n)&&H_(e,n,t[n]);return e},xN=(e,t)=>_N(e,wN(t)),EN=(e,t)=>{var n={};for(var r in e)QS.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Pd)for(var r of Pd(e))t.indexOf(r)<0&&KS.call(e,r)&&(n[r]=e[r]);return n},D=(e,t,n)=>{const r=S.forwardRef((i,s)=>{var o=i,{color:a="currentColor",size:l=24,stroke:u=2,children:d}=o,h=EN(o,["color","size","stroke","children"]);return S.createElement("svg",W_(xN(W_({ref:s},yN),{width:l,height:l,stroke:a,strokeWidth:u,className:`tabler-icon tabler-icon-${e}`}),h),[...n.map(([f,p])=>S.createElement(f,p)),...d||[]])});return r.propTypes={color:Qi.string,size:Qi.oneOfType([Qi.string,Qi.number]),stroke:Qi.oneOfType([Qi.string,Qi.number])},r.displayName=`${t}`,r},IN=D("arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]]),YS=D("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]),SN=D("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]]),TN=D("arrow-up-left","IconArrowUpLeft",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M16 7l-9 0l0 9",key:"svg-1"}]]),kN=D("arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]]),XS=D("arrows-shuffle","IconArrowsShuffle",[["path",{d:"M18 4l3 3l-3 3",key:"svg-0"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-1"}],["path",{d:"M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5",key:"svg-2"}],["path",{d:"M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3",key:"svg-3"}]]),CN=D("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]]),AN=D("brand-safari","IconBrandSafari",[["path",{d:"M8 16l2 -6l6 -2l-2 6l-6 2",key:"svg-0"}],["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-1"}]]),RN=D("bug","IconBug",[["path",{d:"M9 9v-1a3 3 0 0 1 6 0v1",key:"svg-0"}],["path",{d:"M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3",key:"svg-1"}],["path",{d:"M3 13l4 0",key:"svg-2"}],["path",{d:"M17 13l4 0",key:"svg-3"}],["path",{d:"M12 20l0 -6",key:"svg-4"}],["path",{d:"M4 19l3.35 -2",key:"svg-5"}],["path",{d:"M20 19l-3.35 -2",key:"svg-6"}],["path",{d:"M4 7l3.75 2.4",key:"svg-7"}],["path",{d:"M20 7l-3.75 2.4",key:"svg-8"}]]),PN=D("camera","IconCamera",[["path",{d:"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2",key:"svg-0"}],["path",{d:"M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]),bN=D("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),jN=D("checks","IconChecks",[["path",{d:"M7 12l5 5l10 -10",key:"svg-0"}],["path",{d:"M2 12l5 5m5 -5l5 -5",key:"svg-1"}]]),NN=D("circle-check-filled","IconCircleCheckFilled",[["path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),MN=D("circle-plus","IconCirclePlus",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M9 12h6",key:"svg-1"}],["path",{d:"M12 9v6",key:"svg-2"}]]),LN=D("circle-x-filled","IconCircleXFilled",[["path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),DN=D("circle","IconCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}]]),$N=D("clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]]),ON=D("copy","IconCopy",[["path",{d:"M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",key:"svg-1"}]]),VN=D("disc","IconDisc",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M7 12a5 5 0 0 1 5 -5",key:"svg-2"}],["path",{d:"M12 17a5 5 0 0 0 5 -5",key:"svg-3"}]]),Lh=D("discount-check-filled","IconDiscountCheckFilled",[["path",{d:"M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),UN=D("dots-vertical","IconDotsVertical",[["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),iy=D("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),JS=D("edit-circle","IconEditCircle",[["path",{d:"M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z",key:"svg-0"}],["path",{d:"M16 5l3 3",key:"svg-1"}],["path",{d:"M9 7.07a7 7 0 0 0 1 13.93a7 7 0 0 0 6.929 -6",key:"svg-2"}]]),FN=D("exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]]),zN=D("eye-closed","IconEyeClosed",[["path",{d:"M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4",key:"svg-0"}],["path",{d:"M3 15l2.5 -3.8",key:"svg-1"}],["path",{d:"M21 14.976l-2.492 -3.776",key:"svg-2"}],["path",{d:"M9 17l.5 -4",key:"svg-3"}],["path",{d:"M15 17l-.5 -4",key:"svg-4"}]]),BN=D("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]]),HN=D("files","IconFiles",[["path",{d:"M15 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2",key:"svg-2"}]]),bd=D("headphones","IconHeadphones",[["path",{d:"M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z",key:"svg-1"}],["path",{d:"M4 15v-3a8 8 0 0 1 16 0v3",key:"svg-2"}]]),WN=D("heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]),qN=D("heart-filled","IconHeartFilled",[["path",{d:"M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),sy=D("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]]),oy=D("history","IconHistory",[["path",{d:"M12 8l0 4l2 2",key:"svg-0"}],["path",{d:"M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5",key:"svg-1"}]]),ay=D("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]),GN=D("link","IconLink",[["path",{d:"M9 15l6 -6",key:"svg-0"}],["path",{d:"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464",key:"svg-1"}],["path",{d:"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463",key:"svg-2"}]]),QN=D("loader-2","IconLoader2",[["path",{d:"M12 3a9 9 0 1 0 9 9",key:"svg-0"}]]),ZS=D("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]]),KN=D("logout","IconLogout",[["path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M9 12h12l-3 -3",key:"svg-1"}],["path",{d:"M18 15l3 -3",key:"svg-2"}]]),YN=D("message-2","IconMessage2",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z",key:"svg-2"}]]),XN=D("message-plus","IconMessagePlus",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5",key:"svg-2"}],["path",{d:"M16 19h6",key:"svg-3"}],["path",{d:"M19 16v6",key:"svg-4"}]]),q_=D("message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]]),eT=D("microphone-2","IconMicrophone2",[["path",{d:"M15 12.9a5 5 0 1 0 -3.902 -3.9",key:"svg-0"}],["path",{d:"M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z",key:"svg-1"}]]),JN=D("microphone","IconMicrophone",[["path",{d:"M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z",key:"svg-0"}],["path",{d:"M5 10a7 7 0 0 0 14 0",key:"svg-1"}],["path",{d:"M8 21l8 0",key:"svg-2"}],["path",{d:"M12 17l0 4",key:"svg-3"}]]),ZN=D("moon","IconMoon",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}]]),e4=D("music-plus","IconMusicPlus",[["path",{d:"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M9 17v-13h10v8",key:"svg-1"}],["path",{d:"M9 8h10",key:"svg-2"}],["path",{d:"M16 19h6",key:"svg-3"}],["path",{d:"M19 16v6",key:"svg-4"}]]),us=D("music","IconMusic",[["path",{d:"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}],["path",{d:"M9 17v-13h10v13",key:"svg-2"}],["path",{d:"M9 8h10",key:"svg-3"}]]),t4=D("password","IconPassword",[["path",{d:"M12 10v4",key:"svg-0"}],["path",{d:"M10 13l4 -2",key:"svg-1"}],["path",{d:"M10 11l4 2",key:"svg-2"}],["path",{d:"M5 10v4",key:"svg-3"}],["path",{d:"M3 13l4 -2",key:"svg-4"}],["path",{d:"M3 11l4 2",key:"svg-5"}],["path",{d:"M19 10v4",key:"svg-6"}],["path",{d:"M17 13l4 -2",key:"svg-7"}],["path",{d:"M17 11l4 2",key:"svg-8"}]]),n4=D("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]]),tT=D("player-pause-filled","IconPlayerPauseFilled",[["path",{d:"M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}],["path",{d:"M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",fill:"currentColor",key:"svg-1",strokeWidth:"0"}]]),ly=D("player-play-filled","IconPlayerPlayFilled",[["path",{d:"M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),G_=D("player-track-next-filled","IconPlayerTrackNextFilled",[["path",{d:"M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}],["path",{d:"M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z",fill:"currentColor",key:"svg-1",strokeWidth:"0"}]]),Q_=D("player-track-prev-filled","IconPlayerTrackPrevFilled",[["path",{d:"M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}],["path",{d:"M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z",fill:"currentColor",key:"svg-1",strokeWidth:"0"}]]),r4=D("playlist-add","IconPlaylistAdd",[["path",{d:"M19 8h-14",key:"svg-0"}],["path",{d:"M5 12h9",key:"svg-1"}],["path",{d:"M11 16h-6",key:"svg-2"}],["path",{d:"M15 16h6",key:"svg-3"}],["path",{d:"M18 13v6",key:"svg-4"}]]),nT=D("playlist","IconPlaylist",[["path",{d:"M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M17 17v-13h4",key:"svg-1"}],["path",{d:"M13 5h-10",key:"svg-2"}],["path",{d:"M3 9l10 0",key:"svg-3"}],["path",{d:"M9 13h-6",key:"svg-4"}]]),i4=D("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]),rT=D("quote","IconQuote",[["path",{d:"M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5",key:"svg-0"}],["path",{d:"M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5",key:"svg-1"}]]),s4=D("repeat-once","IconRepeatOnce",[["path",{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3",key:"svg-0"}],["path",{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3",key:"svg-1"}],["path",{d:"M11 11l1 -1v4",key:"svg-2"}]]),o4=D("repeat","IconRepeat",[["path",{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3",key:"svg-0"}],["path",{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3",key:"svg-1"}]]),ha=D("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]),a4=D("settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]),yc=D("share-3","IconShare3",[["path",{d:"M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z",key:"svg-0"}]]),iT=D("square-rounded-plus","IconSquareRoundedPlus",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",key:"svg-0"}],["path",{d:"M15 12h-6",key:"svg-1"}],["path",{d:"M12 9v6",key:"svg-2"}]]),sT=D("sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]]),l4=D("trending-up","IconTrendingUp",[["path",{d:"M3 17l6 -6l4 4l8 -8",key:"svg-0"}],["path",{d:"M14 7l7 0l0 7",key:"svg-1"}]]),oT=D("user-plus","IconUserPlus",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M16 19h6",key:"svg-1"}],["path",{d:"M19 16v6",key:"svg-2"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4",key:"svg-3"}]]),aT=D("user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]),c4=D("users","IconUsers",[["path",{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"svg-2"}],["path",{d:"M21 21v-2a4 4 0 0 0 -3 -3.85",key:"svg-3"}]]),cy=D("vinyl","IconVinyl",[["path",{d:"M16 3.937a9 9 0 1 0 5 8.063",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M20 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M20 4l-3.5 10l-2.5 2",key:"svg-3"}]]),u4=D("volume","IconVolume",[["path",{d:"M15 8a5 5 0 0 1 0 8",key:"svg-0"}],["path",{d:"M17.7 5a9 9 0 0 1 0 14",key:"svg-1"}],["path",{d:"M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",key:"svg-2"}]]),lT=D("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);class cT extends ye.Component{constructor(n){super(n);Ke(this,"state",{error:null});this.state={error:null}}static getDerivedStateFromError(n){return{error:n}}render(){return this.state.error?c.jsxs(lN,{children:[c.jsx(cN,{children:c.jsx(RN,{})}),c.jsx(uN,{children:"Something went wrong."}),c.jsx(dN,{children:this.state.error.message})]}):this.props.children}}const d4=e=>e!=null;function uy(e,t){for(const n in e)t(e[n],n)}function qt(e,t){e.forEach(t)}function He(e,t,n){if(!e)throw Error(`${n?n+": ":""}${t}`)}function Mr({node:e=[],from:t,source:n,parent:r=t||n,to:i,target:s,child:o=i||s,scope:a={},meta:l={},family:u={type:"regular"},regional:d}={}){const h=Ha(r),f=Ha(u.links),p=Ha(u.owners),m=[];qt(e,w=>w&&_r(m,w));const v={id:S4(),seq:m,next:Ha(o),meta:l,scope:a,family:{type:u.type||"crosslink",links:f,owners:p}};return qt(f,w=>_r(Dh(w),v)),qt(p,w=>_r($h(w),v)),qt(h,w=>_r(w.next,v)),d&&Eo&&Vh(ll(Eo),[v]),v}function zo(e,t,n){let r,i=Kn,s=null,o=ge;if(e.target&&(t=e.params,n=e.defer,r=e.meta,i="page"in e?e.page:i,e.stack&&(s=e.stack),o=lo(e)||o,e=e.target),o&&ge&&o!==ge&&(ge=null),Array.isArray(e))for(let m=0;m<e.length;m++)Ki("pure",i,Nn(e[m]),s,t[m],o,r);else Ki("pure",i,Nn(e),s,t,o,r);if(n&&!pu)return;const a={isRoot:pu,currentPage:Kn,scope:ge,isWatch:Hu,isPure:Wu};let l,u,d,h,f,p;pu=0;e:for(;h=P4();){const{idx:m,stack:v,type:w}=h;d=v.node,Kn=f=v.page,ge=lo(v),f?p=f.reg:ge&&(p=ge.reg);const g=!!f,y=!!ge,_={fail:0,scope:d.scope};l=u=0;for(let E=m;E<d.seq.length&&!l;E++){const T=d.seq[E];if(T.order){const{priority:k,barrierID:I}=T.order,A=I?f?`${f.fullID}_${I}`:I:0;if(E!==m||w!==k){I?kp.has(A)||(kp.add(A),lm(E,v,k,I)):lm(E,v,k,0);continue e}I&&kp.delete(A)}switch(T.type){case"mov":{const I=T.data;let A;switch(I.from){case"stack":A=ll(v);break;case"a":case"b":A=v[I.from];break;case"value":A=I.store;break;case"store":if(p&&!p[I.store.id])if(g){const z=vT(f,I.store.id);v.page=f=z,z?p=z.reg:y?(Wo(ge,I.store,0,1,I.softRead),p=ge.reg):p=void 0}else y&&Wo(ge,I.store,0,1,I.softRead);A=cl(p&&p[I.store.id]||I.store)}switch(I.to){case"stack":v.value=A;break;case"a":case"b":v[I.to]=A;break;case"store":b4(f,ge,I.target,0).current=A}break}case"compute":const k=T.data;if(k.fn){Hu=d.meta.op==="watch",Wu=k.pure;const I=k.safe?(0,k.fn)(ll(v),_.scope,v):N4(_,k.fn,v);k.filter?u=!I:v.value=I,Hu=a.isWatch,Wu=a.isPure}}l=_.fail||u}if(!l){const E=ll(v),T=lo(v);if(qt(d.next,k=>{Ki("child",f,k,v,E,T)}),T){d.meta.needFxCounter&&Ki("child",f,T.fxCount,v,E,T),d.meta.storeChange&&Ki("child",f,T.storeChange,v,E,T),d.meta.warnSerialize&&Ki("child",f,T.warnSerializeNode,v,E,T);const k=T.additionalLinks[d.id];k&&qt(k,I=>{Ki("child",f,I,v,E,T)})}}}pu=a.isRoot,Kn=a.currentPage,ge=lo(a)}function uT(e,t="combine"){let n=t+"(",r="",i=0;return uy(e,s=>{i<25&&(s!=null&&(n+=r,n+=ki(s)?dT(s).fullName:s.toString()),i+=1,r=", ")}),n+")"}function h4(e,t){let n,r;const i=e;if(t){const s=dT(t);e.length===0?(n=s.path,r=s.fullName):(n=s.path.concat([e]),r=s.fullName.length===0?e:s.fullName+"/"+e)}else n=e.length===0?[]:[e],r=e;return{shortName:i,fullName:r,path:n}}function Li(e,t){if(!t||!t.name&&!t.named&&!t.loc)return e;let n=`[${e}]`;const r=t.named||t.name;r&&(n+=` unit '${r}'`);const i=t.loc;return!r&&i&&(n+=` (${i.file}:${i.line}:${i.column})`),n}function dy(e,t){const n=t?e:e[0];gT(n);let r=n.or;const i=n.and;if(i){const s=t?i:i[0];if(Ln(s)&&"and"in s){const o=dy(i,t);e=o[0],r={...r,...o[1]}}else e=i}return[e,r]}function om(e){const t=()=>e();return t.unsubscribe=()=>e(),t}function Rn(e,...t){const n=fy();if(n){const r=n.handlers[e];if(r)return r(n,...t)}}function V(e,t){const n=qo({or:t,and:typeof e=="string"?{name:e}:e}),r=Li("event",n),i=(a,...l)=>(He(!yi(i,"derived"),"call of derived event is not supported, use createEvent instead",r),He(!Wu,"unit call from pure function is not supported, use operators like sample instead",r),Kn?((u,d,h,f)=>{const p=Kn;let m=null;if(d)for(m=Kn;m&&m.template!==d;)m=Bo(m);Z_(m);const v=u.create(h,f);return Z_(p),v})(i,s,a,l):i.create(a,l)),s=fy(),o=Object.assign(i,{graphite:Mr({meta:xT(n.actualOp||"event",i,n),regional:1}),create:a=>(zo({target:i,params:a,scope:ge}),a),watch:a=>wT(i,a),map:a=>Cp(i,"map",a,[wr()]),filter:a=>Cp(i,"filter",a.fn?a:a.fn,[wr(Uh,1)]),filterMap:a=>Cp(i,"filterMap",a,[wr(),Cr(l=>!hn(l),1)]),prepend(a){He(i.targetable,".prepend of derived event is not supported, call source event instead",r);const l=V("* → "+i.shortName,{parent:Bo(i)});return Rn("eventPrepend",Nn(l)),fa(l,i,[wr()],"prepend",a),M4(i,l),l}});return n!=null&&n.domain&&n.domain.hooks.event(o),vr(o,"id",o.graphite.id),pT(o.graphite),o}function K_(e,t,n,r,i){return Nd(n,`${i} ${t}`,"first argument"),He(Gt(r),"second argument should be a function",i),Dl(!yi(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`,i),qt(Array.isArray(n)?n:[n],s=>{e.off(s),jd(e).set(s,_T(ET(s,e,"on",A4,r)))}),e}function ne(e,t){const n=qo(t),r=Ho(e),i=Li("store",n),s=V({named:"updates",derived:1});Rn("storeBase",r);const o=r.id,a="skipVoid"in n,l=a&&!n.skipVoid;Dl(!(a&&n.skipVoid),"{skipVoid: true}","updateFilter",i);const u={subscribers:new Map,updates:s,defaultState:e,stateRef:r,getState(){let g,y=r;if(Kn){let _=Kn;for(;_&&!_.reg[o];)_=Bo(_);_&&(g=_)}return!g&&ge&&(Wo(ge,r,1),g=ge),g&&(y=g.reg[o]),cl(y)},setState:g=>zo({target:u,params:g,defer:1,scope:ge}),reset:(...g)=>(He(u.targetable,".reset of derived store is not supported",i),qt(g,y=>K_(u,".reset",y,()=>u.defaultState,i)),u),on:(g,y)=>(He(u.targetable,".on of derived store is not supported",i),K_(u,".on",g,y,i)),off(g){const y=jd(u).get(g);return y&&(y(),jd(u).delete(g)),u},map(g,y){let _,E;Ln(g)&&(_=g,g=g.fn);const T=u.getState(),k=hn(T);(!k||k&&l)&&(E=g(T));const I=ne(E,{name:`${u.shortName} → *`,derived:1,...y,and:_}),A=ET(u,I,"map",Uh,g);return am(er(I),{type:"map",fn:g,from:r}),er(I).noInit=1,Rn("storeMap",r,A),I},watch(g,y){if(Dl(!y,"watch second argument","sample",i),!y||!ki(g)){const _=wT(u,g);return Rn("storeWatch",r,g)||g(u.getState()),_}return He(Gt(y),"second argument should be a function",i),g.watch(_=>y(u.getState(),_))}},d=xT("store",u,n),h=u.defaultConfig.updateFilter;u.graphite=Mr({scope:{state:r,fn:h},node:[Cr((g,y,_)=>(_.scope&&!_.scope.reg[r.id]&&(_.b=1),g)),ds(r),Cr((g,y,{a:_,b:E})=>{const T=hn(g);return T&&!a&&console.error(`${i}: ${qu}`),(T&&l||!T)&&(g!==_||E)},1),h&&wr(mT,1),cn({from:"stack",target:r})],child:s,meta:{...d,defaultState:e},regional:1}),vr(u,"id",u.graphite.id),vr(u,"rootStateRefId",o);const f=yi(u,"serialize"),p=yi(u,"derived"),m=f==="ignore",v=yi(u,"sid");v&&(vr(u,"storeChange",1),r.sid=v),v||m||p||vr(u,"warnSerialize",1);const w=hn(e);return He(p||!w||w&&l,qu,i),p&&w&&!a&&console.error(`${i}: ${qu}`),Vh(u,[s]),n!=null&&n.domain&&n.domain.hooks.store(u),p||(u.reinit=V({named:"reinit"}),u.reset(u.reinit)),r.meta=u.graphite.meta,pT(u.graphite),u}function f4(...e){let t,n,r;[e,r]=dy(e);const i=Li("combine",r),s=e[e.length-1],o=!Mn(s)&&Ln(s),a=o&&s,l=o?e[e.length-2]:s;let u,d,h;if(Gt(l)?(n=e.slice(0,o?-2:-1),t=l):n=e,n.length===1){const f=n[0];Mn(f)||(u=f,d=1)}if(!d&&(u=n,t)){h=1;const f=t;t=p=>f(...p)}return He(Ln(u),`${i}: shape should be an object`),L4(Array.isArray(u),!h,u,r,t,a)}function p4(){const e={};return e.req=new Promise((t,n)=>{e.rs=t,e.rj=n}),e.req.catch(()=>{}),e}function De(e,t={}){const n=qo(Gt(e)?{handler:e}:e,t),r=Li("effect",n),i=V(Gt(e)?{handler:e}:e,{...t,actualOp:"effect"}),s=Nn(i);vr(s,"op",i.kind="effect"),i.use=m=>(He(Gt(m),".use argument should be a function",r),h.scope.handler=m,i),i.use.getCurrent=()=>h.scope.handler;const o=i.finally=V({named:"finally",derived:1}),a=i.done=o.filterMap({named:"done",fn({status:m,params:v,result:w}){if(m==="done")return{params:v,result:w}}}),l=i.fail=o.filterMap({named:"fail",fn({status:m,params:v,error:w}){if(m==="fail")return{params:v,error:w}}}),u=i.doneData=a.map({named:"doneData",fn:({result:m})=>m}),d=i.failData=l.map({named:"failData",fn:({error:m})=>m}),h=Mr({scope:{handler:i.defaultConfig.handler||(()=>He(0,`no handler used in ${i.compositeName.fullName}`))},node:[Cr((m,v,w)=>{let g=v.handler;const y=lo(w);if(y){const _=y.handlers.unitMap.get(i)||y.handlers.sidMap[i.sid];_&&(g=_)}return m.handler=g,m},0,1),Cr((m,v,w)=>{if(v.runnerFn&&!v.runnerFn(m,null,w))return;const{params:g,req:y,handler:_,args:E=[g]}=m,T=tw(g,y,1,o,w),k=tw(g,y,0,o,w),[I,A]=D4(_,k,E);I&&(Ln(A)&&Gt(A.then)?A.then(T,k):T(A))},0,1)],meta:{op:"fx",fx:"runner"}});s.scope.runner=h,_r(s.seq,Cr((m,{runner:v},w)=>{const g=Bo(w)?{params:m,req:{rs(y){},rj(y){}}}:m;return w.meta||(w.meta={fxID:T4()}),zo({target:v,params:g,defer:1,scope:lo(w),meta:w.meta}),g.params})),i.create=m=>{const v=p4(),w={params:m,req:v};if(ge&&!Hu){const g=ge;v.req.finally(()=>{um(g)}).catch(()=>{})}return zo({target:i,params:w,scope:ge}),v.req};const f=i.inFlight=ne(0,{serialize:"ignore",named:(yi(i,"name")||i.graphite.id)+".inFlight"}).on(i,m=>m+1).on(o,m=>m-1).map({fn:m=>m,named:"inFlight"});vr(o,"needFxCounter","dec"),vr(i,"needFxCounter",1);const p=i.pending=f.map({fn:m=>m>0,named:"pending"});return Vh(i,[o,a,l,u,d,p,f]),n!=null&&n.domain&&n.domain.hooks.effect(i),i}function g4(e,t){const n=Li("merge",t);Nd(e,n,"first argument");const r=V({name:uT(e,"merge"),derived:1,and:t});return fa(e,r,[],"merge"),r}function m4(e,t){let n=0;return qt(O4,r=>{r in e&&(He(e[r]!=null,IT(t,r)),n=1)}),n}function j(...e){let t,n,r,i,[[s,o,a],l]=dy(e),u=1;const d=Li("sample",l);return hn(o)&&Ln(s)&&m4(s,d)&&(o=s.clock,a=s.fn,"batch"in s?u=s.batch:(Dl(!("greedy"in s),"greedy in sample","batch",d),u=!s.greedy),i=s.filter,t=s.target,n=s.name,r=s.sid,s=s.source),V4("sample",o,s,i,t,a,n,l,u,1,0,r)}function y4(e,{scope:t,safe:n}={}){He(t||ge||n,"scopeBind: scope not found");const r=t||ge;return i=>{function s(){um(l)}let o,a=0;const l=ge;um(r);try{o=e(i)}catch(u){o=u,a=1}if(s(),a)throw o;return o instanceof Promise&&o.then(s,s),o}}function hy({unit:e,fn:t,scope:n,batch:r}){const i=[Bu.run({fn:o=>t(o)})];r&&i.unshift(Bu.compute({priority:"sampler",batch:1})),Mn(e)&&i.unshift(Bu.mov({store:e.stateRef,to:"stack"}));const s=Array.isArray(e)?e:[e];if(n){const o=[],a=n.additionalLinks;return s.forEach(l=>{const u=a[l.graphite.id]||[];a[l.graphite.id]=u;const d=Mr({node:v4(i,l),meta:{watchOp:l.kind}});u.push(d),o.push(()=>{const h=u.indexOf(d);h!==-1&&u.splice(h,1),hm(d)})}),om(()=>{o.forEach(l=>l())})}{const o=Mr({node:i,parent:s,family:{owners:s}});return om(()=>{hm(o)})}}function v4(e,t){return Mn(t)?[Bu.mov({store:t.stateRef,to:"stack"}),...e]:e}const _4=typeof Symbol<"u"&&Symbol.observable||"@@observable",Nn=e=>e.graphite||e,Dh=e=>e.family.owners,$h=e=>e.family.links,er=e=>e.stateRef,ll=e=>e.value,jd=e=>e.subscribers,Bo=e=>e.parent,lo=e=>e.scope,yi=(e,t)=>Nn(e).meta[t],vr=(e,t,n)=>Nn(e).meta[t]=n,dT=e=>e.compositeName,ki=e=>(Gt(e)||Ln(e))&&"kind"in e,vc=e=>t=>ki(t)&&t.kind===e,Mn=vc("store"),w4=vc("event"),Y_=vc("effect"),x4=e=>ki(e)&&!!e.targetable,hT=vc("domain"),E4=vc("scope");var fu={__proto__:null,unit:ki,store:Mn,event:w4,effect:Y_,targetable:x4,domain:hT,scope:E4,attached:e=>Y_(e)&&yi(e,"attached")==1};const Tp=(e,t)=>{const n=e.indexOf(t);n!==-1&&e.splice(n,1)},_r=(e,t)=>e.push(t),Dl=(e,t,n,r)=>!e&&console.error(`${r?r+": ":""}${t} is deprecated${n?`, use ${n} instead`:""}`),Oh=()=>{let e=0;return()=>""+ ++e},I4=Oh(),fT=Oh(),S4=Oh(),T4=Oh();let Eo=null;const pT=e=>{},fy=()=>Eo,k4=e=>(e&&Eo&&Eo.sidRoot&&(e=`${Eo.sidRoot}|${e}`),e),Vh=(e,t)=>{const n=Nn(e);qt(t,r=>{const i=Nn(r);n.family.type!=="domain"&&(i.family.type="crosslink"),_r(Dh(i),n),_r($h(n),i)})},Ha=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(Nn),Ln=e=>typeof e=="object"&&e!==null,Gt=e=>typeof e=="function",hn=e=>e===void 0,gT=e=>He(Ln(e)||Gt(e),"expect first argument be an object"),X_=(e,t,n,r)=>He(!(!Ln(e)&&!Gt(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${n} to be a unit (store, event or effect)${r}`),Nd=(e,t,n)=>{Array.isArray(e)?qt(e,(r,i)=>X_(r,t,`${i} item of ${n}`,"")):X_(e,t,n," or array of units")},C4=(e,t,n="target")=>qt(Ha(t),r=>He(!yi(r,"derived"),`${e}: derived unit in "${n}" is not supported, use createStore/createEvent instead"`)),mT=(e,{fn:t},{a:n})=>t(e,n),A4=(e,{fn:t},{a:n})=>t(n,e),Uh=(e,{fn:t})=>t(e),yT=(e,t,n,r)=>{const i={id:fT(),type:e,data:t};return n&&(i.order={priority:n},r&&(i.order.barrierID=++R4)),i};let R4=0;const cn=({from:e="store",store:t,target:n,to:r=n?"store":"stack",batch:i,priority:s})=>yT("mov",{from:e,store:t,to:r,target:n},s,i),$l=({fn:e,batch:t,priority:n,safe:r=0,filter:i=0,pure:s=0})=>yT("compute",{fn:e,safe:r,filter:i,pure:s},n,t),py=({fn:e})=>$l({fn:e,priority:"effect"}),Cr=(e,t,n)=>$l({fn:e,safe:1,filter:t,priority:n&&"effect"}),ds=(e,t,n)=>cn({store:e,to:t?"stack":"a",priority:n&&"sampler",batch:1}),wr=(e=Uh,t)=>$l({fn:e,pure:1,filter:t}),Bu={mov:cn,compute:$l,filter:({fn:e,pure:t})=>$l({fn:e,filter:1,pure:t}),run:py},Ho=e=>({id:fT(),current:e,initial:e}),cl=({current:e})=>e,am=(e,t)=>{e.before||(e.before=[]),_r(e.before,t)};let co=null;const gy=(e,t)=>{if(!e)return t;if(!t)return e;let n;return(e.v.type===t.v.type&&e.v.id>t.v.id||cm(e.v.type)>cm(t.v.type))&&(n=e,e=t,t=n),n=gy(e.r,t),e.r=e.l,e.l=n,e},my=[];let J_=0;for(;J_<6;)_r(my,{first:null,last:null,size:0}),J_+=1;const P4=()=>{for(let e=0;e<6;e++){const t=my[e];if(t.size>0){if(e===3||e===4){t.size-=1;const r=co.v;return co=gy(co.l,co.r),r}t.size===1&&(t.last=null);const n=t.first;return t.first=n.r,t.size-=1,n.v}}},Ki=(e,t,n,r,i,s,o)=>lm(0,{a:null,b:null,node:n,parent:r,value:i,page:t,scope:s,meta:o},e,0),lm=(e,t,n,r)=>{const i=cm(n),s=my[i],o={v:{idx:e,stack:t,type:n,id:r},l:null,r:null};i===3||i===4?co=gy(co,o):(s.size===0?s.first=o:s.last.r=o,s.last=o),s.size+=1},cm=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},kp=new Set;let ge,pu=1,Hu=0,Wu=0,Kn=null;const um=e=>{ge=e},Z_=e=>{Kn=e},vT=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=e.parent;if(e)return e}return null},b4=(e,t,n,r)=>{const i=vT(e,n.id);return i?i.reg[n.id]:t?(Wo(t,n,r),t.reg[n.id]):n},j4=e=>e,Wo=(e,t,n,r,i)=>{const s=e.reg;if(s[t.id])return;const o=t.sid,a={id:t.id,current:t.initial,meta:t.meta};if(a.id in e.values.idMap)a.current=e.values.idMap[a.id];else if(o&&o in e.values.sidMap&&!(o in e.sidIdMap)){var l;const u=t==null||(l=t.meta)===null||l===void 0?void 0:l.serialize;a.current=(e.fromSerialize&&u!=="ignore"&&(u==null?void 0:u.read)||j4)(e.values.sidMap[o])}else if(t.before&&!i){let u=0;const d=n||!t.noInit||r;qt(t.before,h=>{switch(h.type){case"map":{const f=h.from;if((f||h.fn)&&(f&&Wo(e,f,n,r),d)){const p=f&&s[f.id].current;a.current=h.fn?h.fn(p):p}break}case"field":Wo(e,h.from,n,r),u||(u=1,a.current=Array.isArray(a.current)?[...a.current]:{...a.current}),d&&(a.current[h.field]=s[s[h.from.id].id].current)}})}o&&(e.sidIdMap[o]=t.id),s[t.id]=a},N4=(e,t,n)=>{try{return t(ll(n),e.scope,n)}catch(r){console.error(r),e.fail=1,e.failReason=r}},qo=(e,t={})=>(Ln(e)&&(qo(e.or,t),uy(e,(n,r)=>{hn(n)||r==="or"||r==="and"||(t[r]=n)}),qo(e.and,t)),t),ew=(e,t)=>{Tp(e.next,t),Tp(Dh(e),t),Tp($h(e),t)},dm=(e,t,n)=>{let r;e.next.length=0,e.seq.length=0,e.scope=null;let i=$h(e);for(;r=i.pop();)ew(r,e),(t||n&&e.meta.op!=="sample"||r.family.type==="crosslink")&&dm(r,t,r.meta.op!=="on"&&n);for(i=Dh(e);r=i.pop();)ew(r,e),n&&r.family.type==="crosslink"&&dm(r,t,r.meta.op!=="on"&&n)},La=e=>e.clear(),hm=(e,{deep:t}={})=>{let n=0;if(e.ownerSet&&e.ownerSet.delete(e),Mn(e))La(jd(e));else if(hT(e)){n=1;const r=e.history;La(r.events),La(r.effects),La(r.stores),La(r.domains)}dm(Nn(e),!!t,n)},_T=e=>om(()=>hm(e)),fa=(e,t,n,r,i)=>Mr({node:n,parent:e,child:t,scope:{fn:i},meta:{op:r},family:{owners:[e,t],links:t},regional:1}),wT=(e,t)=>(He(Gt(t),".watch argument should be a function"),_T(Mr({scope:{fn:t},node:[py({fn:Uh})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),M4=(e,t,n="event")=>{Bo(e)&&Bo(e).hooks[n](t)},xT=(e,t,n)=>{const r=qo(n),i=e==="domain",s=I4(),{sid:o=null,named:a=null,domain:l=null,parent:u=l}=r,d=a||r.name||(i?"":s),h=h4(d,u),f={op:t.kind=e,name:t.shortName=d,sid:t.sid=k4(o),named:a,unitId:t.id=s,serialize:r.serialize,derived:r.derived,config:r};return t.targetable=!r.derived,t.parent=u,t.compositeName=h,t.defaultConfig=r,t.getType=()=>(Dl(0,"getType","compositeName.fullName"),h.fullName),!i&&(t.subscribe=p=>(gT(p),t.watch(Gt(p)?p:m=>p.next&&p.next(m))),t[_4]=()=>t),f},Cp=(e,t,n,r)=>{let i;Ln(n)&&(i=n,n=n.fn);const s=V({name:`${e.shortName} → *`,derived:1,and:i});return fa(e,s,r,t,n),s},qu="undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option",ET=(e,t,n,r,i)=>{const s=er(t),o=cn({store:s,to:"a",priority:"read"});n==="map"&&(o.data.softRead=1);const a=[o,wr(r)];return Rn("storeOnMap",s,a,Mn(e)&&er(e)),fa(e,t,a,n,i)},L4=(e,t,n,r,i,s)=>{const o=Li("combine",r),a=e?g=>[...g]:g=>({...g}),l=e?[]:{},u=a(l),d=Ho(u),h=Ho(1);d.type=e?"list":"shape",d.noInit=1,Rn("combineBase",d,h);const f=ne(u,{name:uT(n),derived:1,...s,and:r}),p=er(f);p.noInit=1,vr(f,"isCombine",1);const m=ds(d);m.order={priority:"barrier"};const v=cn({store:p,to:"b",priority:"read"});v.data.softRead=1;const w=[Cr((g,y,_)=>(_.scope&&!_.scope.reg[d.id]&&(_.c=1),g)),m,cn({store:h,to:"b"}),Cr((g,{key:y},_)=>{if(_.c||g!==_.a[y])return t&&_.b&&(_.a=a(_.a)),_.a[y]=g,1},1),cn({from:"a",target:d}),cn({from:"value",store:0,target:h}),cn({from:"value",store:1,target:h,priority:"barrier",batch:1}),ds(d,1,1),i&&wr(),v];if(uy(n,(g,y)=>{if(!Mn(g))return He(!ki(g)&&!hn(g),`combine expects a store in a field ${y}`,o),void(u[y]=l[y]=g);l[y]=g.defaultState,u[y]=g.getState();const _=fa(g,f,w,"combine",i);_.scope.key=y;const E=er(g);am(d,{type:"field",field:y,from:E}),Rn("combineField",E,_)}),f.defaultShape=n,am(p,{type:"map",from:d,fn:i}),!fy())if(i){const g=i(u);!hn(g)||s&&"skipVoid"in s||console.error(`${o}: ${qu}`),p.current=g,p.initial=g,f.defaultState=g}else f.defaultState=l;return f},D4=(e,t,n)=>{try{return[1,e(...n)]}catch(r){return t(r),[0,null]}},tw=(e,t,n,r,i)=>s=>{zo({target:[r,$4],params:[n?{status:"done",params:e,result:s}:{status:"fail",params:e,error:s},{value:s,fn:n?t.rs:t.rj}],defer:1,page:i.page,scope:i.scope,meta:i.meta})},$4=Mr({node:[py({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}}),O4=["source","clock","target"],IT=(e,t)=>e+`: ${t} should be defined`,V4=(e,t,n,r,i,s,o,a,l,u,d,h)=>{const f=Li(e,a),p=!!i;He(!hn(n)||!hn(t),IT(f,"either source or clock"));let m=0;hn(n)?m=1:ki(n)||(n=f4(n)),hn(t)?t=n:(Nd(t,f,"clock"),Array.isArray(t)&&(t=g4(t))),m&&(n=t),a||o||(o=n.shortName);let v="none";(d||r)&&(ki(r)?v="unit":(He(Gt(r),"`filter` should be function or unit"),v="fn")),i?(Nd(i,f,"target"),C4(f,i)):v==="none"&&u&&Mn(n)&&Mn(t)?i=ne(s?s(cl(er(n)),cl(er(t))):cl(er(n)),{name:o,sid:h,or:a}):(i=V({name:o,derived:1,or:a}),Rn("sampleTarget",Nn(i)));const w=Ho();let g=[];if(v==="unit"){const[E,T,k]=nw(r,i,t,w,e);k||g.push(...Ap(T)),g.push(...Ap(E))}const y=[];if(m)l&&y.push(ds(w,1,1));else{const[E,T,k]=nw(n,i,t,w,e);k||y.push(...Ap(T)),y.push(ds(E,1,l))}const _=fa(t,i,[Rn("sampleSourceLoader"),cn({from:"stack",target:w}),...y,...g,ds(w),v==="fn"&&wr((E,T,{a:k})=>r(E,k),1),s&&wr(mT),Rn("sampleSourceUpward",p)],e,s);return Vh(n,[_]),Object.assign(_.meta,a,{joint:1}),i},Ap=e=>[ds(e),Cr((t,n,{a:r})=>r,1)],nw=(e,t,n,r,i)=>{const s=Mn(e),o=s?er(e):Ho(),a=Ho(s);return s||Mr({parent:e,node:[cn({from:"stack",target:o}),cn({from:"value",store:1,target:a})],family:{owners:[e,t,n],links:t},meta:{op:i},regional:1}),Rn("sampleSource",a,o,r),[o,a,s]};var U4={},ST={exports:{}},TT={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=S;function F4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var z4=typeof Object.is=="function"?Object.is:F4,B4=Go.useState,H4=Go.useEffect,W4=Go.useLayoutEffect,q4=Go.useDebugValue;function G4(e,t){var n=t(),r=B4({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return W4(function(){i.value=n,i.getSnapshot=t,Rp(i)&&s({inst:i})},[e,n,t]),H4(function(){return Rp(i)&&s({inst:i}),e(function(){Rp(i)&&s({inst:i})})},[e]),q4(n),n}function Rp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!z4(e,n)}catch{return!0}}function Q4(e,t){return t()}var K4=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Q4:G4;TT.useSyncExternalStore=Go.useSyncExternalStore!==void 0?Go.useSyncExternalStore:K4;ST.exports=TT;var kT=ST.exports;const Y4=r0(kT);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh=S,X4=kT;function J4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Z4=typeof Object.is=="function"?Object.is:J4,eM=X4.useSyncExternalStore,tM=Fh.useRef,nM=Fh.useEffect,rM=Fh.useMemo,iM=Fh.useDebugValue;U4.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=tM(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=rM(function(){function l(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&o.hasValue){var m=o.value;if(i(m,p))return h=m}return h=p}if(m=h,Z4(d,p))return m;var v=r(p);return i!==void 0&&i(m,v)?m:(d=p,h=v)}var u=!1,d,h,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=eM(e,s[0],s[1]);return nM(function(){o.hasValue=!0,o.value=a},[a]),iM(a),a};function sM(e,t){return t.displayName=e,t}function CT(e,t){const n=fu.unit(e);let r={};n?r={unit:e}:"@@unitShape"in e?typeof e["@@unitShape"]=="function"?r=e["@@unitShape"]():fm("expect @@unitShape to be a function"):r=e;const i=Array.isArray(r),s=ye.useRef({stale:1,justSubscribed:0,scope:t}),[o,a,l,u,d]=ye.useMemo(()=>{s.current.stale=1;const m=Array.isArray(r)?[]:{},v=[],w=[],g=[],y=[];for(const _ in r){if(!{}.hasOwnProperty.call(r,_))continue;const E=r[_];fu.unit(E)||fm(`expect useUnit ${n?"argument":`value in key "${_}"`} to be a unit`),fu.event(E)||fu.effect(E)?(m[_]=t?y4(E,{scope:t}):E,g.push(_),y.push(E)):(m[_]=null,v.push(_),w.push(E))}return[m,v,w,g,y]},[s,t,...Object.keys(r),...Object.values(r)]),h=ye.useRef({value:o,storeKeys:a,eventKeys:u,eventValues:d}),f=ye.useCallback(m=>{const v=s.current;return v.justSubscribed=1,hy({unit:l,fn:()=>{v.stale||(v.stale=1,m())},scope:t,batch:1})},[l,t,h,s]),p=ye.useCallback(()=>{const m=h.current,v=s.current;let w,g=0;const y=m.value,_=m.storeKeys,E=m.eventKeys,T=m.eventValues,k=t!==v.scope;if(v.stale||v.justSubscribed||k){g=!v.justSubscribed||k,w=i?[...o]:{...o},_.length===a.length&&E.length===u.length||(g=1);for(let I=0;I<a.length;I++){const A=lM(l[I],t),z=a[I];g||(g=_.includes(z)?y[z]!==A:1),w[z]=A}for(let I=0;I<u.length;I++){const A=d[I],z=u[I];g||(g=E.includes(z)?T[E.indexOf(z)]!==A:1)}}return g&&(m.value=w),m.storeKeys=a,m.eventKeys=u,m.eventValues=d,v.stale=0,v.justSubscribed=!g,v.scope=t,n?m.value.unit:m.value},[f,l,d,t,h,s]);return aM(f,p,p)}function AT(e,t={},n){const{open:r,close:i,set:s}=CT({open:e.open,close:e.close,set:e.set},n),o=ye.useMemo(()=>({open:r,close:i,set:s}),[e,r]),a=ye.useRef({value:null,count:0});rw(()=>(o.open(a.current.value),()=>o.close(a.current.value)),[o]),((l,u)=>{if(l===u)return 1;if(typeof l=="object"&&l!==null&&typeof u=="object"&&u!==null){const d=Object.keys(l),h=Object.keys(u);if(d.length!==h.length)return 0;for(let f=0;f<d.length;f++){const p=d[f];if(l[p]!==u[p])return 0}return 1}return 0})(a.current.value,t)||(a.current.value=t,a.current.count+=1),rw(()=>{o.set(a.current.value)},[a.current.count])}function yy(e){const t=ye.useContext(cM);return e&&!t&&fm("No scope found, consider adding <Provider> to app root"),t}function me(e,t){return CT(e,yy(t==null?void 0:t.forceScope))}function vy(e,t={},n){return AT(e,t,yy(n==null?void 0:n.forceScope))}function RT(e,t){const n=t?e:e[0];var r;(o=>{if(!o)throw Error("expect first argument be an object")})(Io(r=n)||(o=>typeof o=="function")(r));let i=n.or;const s=n.and;if(s){const o=t?s:s[0];if(Io(o)&&"and"in o){const a=RT(s,t);e=a[0],i={...i,...a[1]}}else e=s}return[e,i]}function oM(e,t){const n=t&&Io(r=t[0])&&(r.and||r.or)?t:[{and:t}];var r;const[[i,s],o]=RT(n);let a,l={},u={},d=o;var h;return typeof i=="string"?(u={name:i},Io(h=s)&&"sid"in h||(l=s||{})):(f=>Io(f)&&("domain"in f||"defaultState"in f||"name"in f))(i)&&(u=i,l=i.defaultState||{},a=i.domain),{hook:e,domain:a,defaultState:l,mainConfig:u,maybeConfig:d}}function _y(...e){return(({domain:t,defaultState:n,hook:r,mainConfig:i,maybeConfig:s})=>{function o(m){return r(o,m,yy()),null}const a=pm({or:s,and:i}),l=`${t?`${t.compositeName.fullName}/`:""}${a.name||"gate"}`,u=V({name:`${l}.set`,sid:a.sid?`${a.sid}|set`:void 0}),d=V({name:`${l}.open`,sid:a.sid?`${a.sid}|open`:void 0}),h=V({name:`${l}.close`,sid:a.sid?`${a.sid}|close`:void 0}),f=ne(!1,{name:`${l}.status`,serialize:"ignore"}).on(d,()=>!0).on(h,()=>!1),p=ne(n,{name:`${l}.state`,sid:a.sid}).on(u,(m,v)=>v).on(d,(m,v)=>v).reset(h);if(t){const{hooks:m}=t;zo({target:[m.store,m.store,m.event,m.event,m.event],params:[f,p,d,h,u]})}return o.open=d,o.close=h,o.status=f,o.state=p,o.set=u,sM(`Gate:${l}`,o)})(oM(AT,e))}const fm=e=>{throw Error(e)},rw=typeof window<"u"?ye.useLayoutEffect:ye.useEffect,{useSyncExternalStore:aM}=Y4,lM=(e,t)=>t?t.getState(e):e.getState(),cM=ye.createContext(null),Io=e=>typeof e=="object"&&e!==null,pm=(e,t={})=>(Io(e)&&(pm(e.or,t),(n=>{for(const s in n)i=s,(o=>o===void 0)(r=n[s])||i==="or"||i==="and"||(t[i]=r);var r,i})(e),pm(e.and,t)),t),uM={currentSong:null,loaded:!1,state:null},dM={currentTime:0,duration:0,isSliding:!1,lastRangeValue:null},hM={currentSongIndex:null,songs:[],name:null,url:null,icon:null,shuffle:!1,willGoToPrevTrack:!0},fM={lyrics:[],currentLyricIndex:0},pM=5;var ot=(e=>(e[e.noloop=0]="noloop",e[e.loopall=1]="loopall",e[e.loopone=2]="loopone",e))(ot||{});const PT=V(),bT=V(),wy=V(),jT=V(),Jt=ne(dM);j({clock:PT,source:Jt,fn:(e,t)=>({...e,currentTime:t}),target:Jt});j({clock:bT,source:Jt,fn:(e,t)=>({...e,duration:t}),target:Jt});j({clock:wy,source:Jt,fn:(e,t)=>(console.log({lastRangeValue:t}),{...e,lastRangeValue:t}),target:Jt});j({clock:jT,source:Jt,fn:(e,t)=>({...e,isSliding:t}),target:Jt});const gM=()=>me(Jt),mM=({queue:e,loop:t})=>{const{currentSongIndex:n,songs:r}=e;console.log(t);const i=n!==null?n+1:null;return t===ot.loopone?e:typeof i=="number"&&i>r.length-1?t===ot.noloop?e:t===ot.loopall?{...e,currentSongIndex:0}:e:{...e,currentSongIndex:i}},yM=e=>{let t=ot.noloop;return e===ot.noloop&&(t=ot.loopall),e===ot.loopall&&(t=ot.loopone),t},zh=V(),pa=V(),NT=V(),MT=V(),Ci=ne(hM),Ol=ne(ot.noloop);j({clock:MT,source:Ci,fn:(e,{queue:t})=>t??e,target:Ci});j({clock:zh,source:{queue:Ci,loop:Ol},fn:mM,target:Ci});j({clock:zh,source:Ol,filter:e=>e===ot.loopone,target:pa});j({clock:NT,source:Ol,fn:yM,target:Ol});hy({unit:Ci,fn:e=>{const{currentSongIndex:t,songs:n}=e;if(t!==null){const r=n[t];Wh({song:r,queue:void 0})}}});const vM=()=>me({queue:Ci,loop:Ol}),xy=Jt.map(({currentTime:e})=>e<5e3),_M=xy.map(e=>!e),Ey=V(),LT=V();j({clock:pa,source:xy,filter:Boolean,target:Ey});j({clock:pa,source:xy,filter:Boolean,target:Ey});j({clock:pa,source:_M,filter:Boolean,target:LT});j({clock:Ey,source:Ci,filter:e=>!!e.currentSongIndex,fn:e=>({...e,currentSongIndex:e.currentSongIndex-1}),target:Ci});j({clock:LT,source:Jt,filter:Boolean,fn:e=>({...e,currentTime:0}),target:Jt});const wM=({lyrics:e},t)=>{console.log(e,t);const{lyrics:n}=e,r=n.findIndex((i,s,o)=>{var a;return(((a=o[s+1])==null?void 0:a.startTime)??-1/0)>t});return r===e.currentLyricIndex?e:{...e,currentLyricIndex:r}},xM=({lyrics:e},t)=>{console.log("test",e,t);const{lyrics:n,currentLyricIndex:r}=e;return!n.length||isNaN(n[0].startTime)?e:n[r+1].startTime<t?{...e,currentLyricIndex:r+1}:e},DT=V(),$T=V(),Iy=V(),Sy=V(),OT=V(),Lr=ne(fM),Bh=ne(!1);j({clock:DT,source:{shouldCalculateLyrics:Bh,lyrics:Lr},filter:({shouldCalculateLyrics:e})=>e,fn:wM,target:Lr});j({clock:$T,source:{shouldCalculateLyrics:Bh,lyrics:Lr},filter:({shouldCalculateLyrics:e})=>e,fn:xM,target:Lr});j({clock:Iy,source:Lr,fn:(e,t)=>({...e,lyrics:t}),target:Lr});j({clock:Sy,source:Lr,fn:(e,t)=>({...e,currentLyricIndex:t}),target:Lr});j({clock:OT,fn:e=>e,target:Bh});const EM=()=>me([Lr,Bh]),IM=()=>{const[{loaded:e,state:t,currentSong:n},{currentTime:r}]=me([Dn,Jt]);return{play:(i=n,s)=>i?!e||(i==null?void 0:i.id)!==(n==null?void 0:n.id)?Wh({song:i,queue:s}):t==="playing"?zT():Hh():null,next:()=>{console.log("next"),zh()},previous:()=>{if(r<pM){pa();return}console.log(t),wy(0),Sy(0)}}},Ty=ne(!1),VT=V(),UT=V();j({clock:VT,fn:()=>!0,target:Ty});j({clock:UT,fn:()=>!1,target:Ty});const SM=()=>me(Ty),Hh=V(),Wh=V(),FT=V(),zT=V(),Dn=ne(uM);j({clock:Hh,source:Dn,fn:e=>({...e,state:"playing"}),target:Dn});j({clock:zT,source:Dn,fn:e=>({...e,state:"pause"}),target:Dn});j({clock:FT,source:Dn,fn:e=>({...e,loaded:!0}),target:[Dn,Hh]});j({clock:Wh,target:MT});hy({unit:Dn,fn:({currentSong:e,state:t})=>{e&&e.lyrics&&t==="loading"&&(console.log("reset"),Iy(e.lyrics),Sy(0))}});j({clock:Wh,source:Dn,fn:(e,{song:t})=>({...e,state:"loading",loaded:!1,currentSong:t}),target:Dn});const G={useSong:()=>me(Dn),useControls:IM,queue:{useQueue:vM,next:zh,previous:pa,changeLoopMode:NT},playblack:{usePlayback:gM,setCurrentTime:PT,setDuration:bT,setLastRangeValue:wy,setIsSliding:jT},fullscreen:{useFullScreen:SM,open:VT,close:UT},lyrics:{useLyrics:EM,calculateCurrentLyric:DT,nextCurrentLyric:$T,setLyrics:Iy,setShouldCalculateLyrics:OT},events:{loaded:FT,play:Hh}},TM=()=>{const{state:e}=G.useSong(),{loop:t,queue:n}=G.queue.useQueue(),{lastRangeValue:r,isSliding:i}=G.playblack.usePlayback(),{next:s,previous:o}=G.useControls(),a=S.useRef(null),l=h=>{G.events.loaded(),G.playblack.setDuration(h.currentTarget.duration),G.playblack.setLastRangeValue(null)},u=h=>{i||(G.playblack.setCurrentTime(h.currentTarget.currentTime),G.lyrics.nextCurrentLyric(h.currentTarget.currentTime))},d=()=>{if(console.log("ended"),t===ot.noloop&&n.currentSongIndex===n.songs.length-1){o();return}s()};return S.useEffect(()=>{a.current&&d4(r)&&!isNaN(r??0)&&(a.current.currentTime=+r)},[r]),S.useEffect(()=>{var h;a.current&&(e==="playing"?a.current.play():(h=a.current)==null||h.pause())},[e]),{audioRef:a,loop:t,handleEnded:d,handlePlaying:u,handleOnCanPlay:l}},kM=()=>{const{audioRef:e,loop:t,handleOnCanPlay:n,handlePlaying:r,handleEnded:i}=TM(),{currentSong:s}=G.useSong();return c.jsx("audio",{onEnded:i,src:s==null?void 0:s.songSrc,loop:t===ot.loopone,ref:e,onTimeUpdate:r,onCanPlay:n})};/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vl(){return Vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vl.apply(this,arguments)}var oi;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(oi||(oi={}));const iw="popstate";function CM(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return gm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Md(i)}return RM(t,n,null,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ky(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function AM(){return Math.random().toString(36).substr(2,8)}function sw(e,t){return{usr:e.state,key:e.key,idx:t}}function gm(e,t,n,r){return n===void 0&&(n=null),Vl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ga(t):t,{state:n,key:t&&t.key||r||AM()})}function Md(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ga(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function RM(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=oi.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Vl({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=oi.Pop;let w=d(),g=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:g})}function f(w,g){a=oi.Push;let y=gm(v.location,w,g);n&&n(y,w),u=d()+1;let _=sw(y,u),E=v.createHref(y);try{o.pushState(_,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(w,g){a=oi.Replace;let y=gm(v.location,w,g);n&&n(y,w),u=d();let _=sw(y,u),E=v.createHref(y);o.replaceState(_,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function m(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof w=="string"?w:Md(w);return Pe(g,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,g)}let v={get action(){return a},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(iw,h),l=w,()=>{i.removeEventListener(iw,h),l=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let g=m(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(w){return o.go(w)}};return v}var ow;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ow||(ow={}));function PM(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ga(t):t,i=Ul(r.pathname||"/",n);if(i==null)return null;let s=BT(e);bM(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=UM(s[a],zM(i));return o}function BT(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=vi([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),BT(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:OM(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of HT(s.path))i(s,o,l)}),t}function HT(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=HT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function bM(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:VM(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jM=/^:\w+$/,NM=3,MM=2,LM=1,DM=10,$M=-2,aw=e=>e==="*";function OM(e,t){let n=e.split("/"),r=n.length;return n.some(aw)&&(r+=$M),t&&(r+=MM),n.filter(i=>!aw(i)).reduce((i,s)=>i+(jM.test(s)?NM:s===""?LM:DM),r)}function VM(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function UM(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Ld({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let h=a.route;s.push({params:r,pathname:vi([i,d.pathname]),pathnameBase:GM(vi([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=vi([i,d.pathnameBase]))}return s}function Ld(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=FM(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let v=a[h]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const m=a[h];return p&&!m?u[f]=void 0:u[f]=BM(m||"",f),u},{}),pathname:s,pathnameBase:o,pattern:e}}function FM(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ky(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function zM(e){try{return decodeURI(e)}catch(t){return ky(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function BM(e,t){try{return decodeURIComponent(e)}catch(n){return ky(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ul(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function HM(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ga(e):e;return{pathname:n?n.startsWith("/")?n:WM(n,t):t,search:QM(r),hash:KM(i)}}function WM(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pp(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qM(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function WT(e,t){let n=qM(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qT(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ga(e):(i=Vl({},e),Pe(!i.pathname||!i.pathname.includes("?"),Pp("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),Pp("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),Pp("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else if(r){let h=t.length===0?[]:t[t.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h.pop();i.pathname=f.join("/")}a="/"+h.join("/")}else{let h=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?t[h]:"/"}let l=HM(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const vi=e=>e.join("/").replace(/\/\/+/g,"/"),GM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),QM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,KM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function YM(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const GT=["post","put","patch","delete"];new Set(GT);const XM=["get",...GT];new Set(XM);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fl(){return Fl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fl.apply(this,arguments)}const qh=S.createContext(null),QT=S.createContext(null),Di=S.createContext(null),Gh=S.createContext(null),$i=S.createContext({outlet:null,matches:[],isDataRoute:!1}),KT=S.createContext(null);function JM(e,t){let{relative:n}=t===void 0?{}:t;ma()||Pe(!1);let{basename:r,navigator:i}=S.useContext(Di),{hash:s,pathname:o,search:a}=Qh(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:vi([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ma(){return S.useContext(Gh)!=null}function ur(){return ma()||Pe(!1),S.useContext(Gh).location}function ZM(e){ma()||Pe(!1);let{pathname:t}=ur();return S.useMemo(()=>Ld(e,t),[t,e])}function YT(e){S.useContext(Di).static||S.useLayoutEffect(e)}function _c(){let{isDataRoute:e}=S.useContext($i);return e?pL():eL()}function eL(){ma()||Pe(!1);let e=S.useContext(qh),{basename:t,future:n,navigator:r}=S.useContext(Di),{matches:i}=S.useContext($i),{pathname:s}=ur(),o=JSON.stringify(WT(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return YT(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=qT(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:vi([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,o,s,e])}const tL=S.createContext(null);function nL(e){let t=S.useContext($i).outlet;return t&&S.createElement(tL.Provider,{value:e},t)}function Qh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Di),{matches:i}=S.useContext($i),{pathname:s}=ur(),o=JSON.stringify(WT(i,r.v7_relativeSplatPath));return S.useMemo(()=>qT(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function rL(e,t){return iL(e,t)}function iL(e,t,n,r){ma()||Pe(!1);let{navigator:i}=S.useContext(Di),{matches:s}=S.useContext($i),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=ur(),d;if(t){var h;let w=typeof t=="string"?ga(t):t;l==="/"||(h=w.pathname)!=null&&h.startsWith(l)||Pe(!1),d=w}else d=u;let f=d.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",m=PM(e,{pathname:p}),v=cL(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:vi([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:vi([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return t&&v?S.createElement(Gh.Provider,{value:{location:Fl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:oi.Pop}},v):v}function sL(){let e=fL(),t=YM(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,s)}const oL=S.createElement(sL,null);class aL extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement($i.Provider,{value:this.props.routeContext},S.createElement(KT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lL(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(qh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement($i.Provider,{value:t},r)}function cL(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));d>=0||Pe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.loader&&h.route.id&&n.loaderData[h.route.id]===void 0&&(!n.errors||n.errors[h.route.id]===void 0)){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}return o.reduceRight((d,h,f)=>{let p,m=!1,v=null,w=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,v=h.route.errorElement||oL,l&&(u<0&&f===0?(gL("route-fallback",!1),m=!0,w=null):u===f&&(m=!0,w=h.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,f+1)),y=()=>{let _;return p?_=v:m?_=w:h.route.Component?_=S.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=d,S.createElement(lL,{match:h,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:_})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?S.createElement(aL,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var XT=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(XT||{}),Dd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Dd||{});function uL(e){let t=S.useContext(qh);return t||Pe(!1),t}function dL(e){let t=S.useContext(QT);return t||Pe(!1),t}function hL(e){let t=S.useContext($i);return t||Pe(!1),t}function JT(e){let t=hL(),n=t.matches[t.matches.length-1];return n.route.id||Pe(!1),n.route.id}function fL(){var e;let t=S.useContext(KT),n=dL(Dd.UseRouteError),r=JT(Dd.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function pL(){let{router:e}=uL(XT.UseNavigateStable),t=JT(Dd.UseNavigateStable),n=S.useRef(!1);return YT(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Fl({fromRouteId:t},s)))},[e,t])}const lw={};function gL(e,t,n){!t&&!lw[e]&&(lw[e]=!0)}function ZT(e){return nL(e.context)}function uo(e){Pe(!1)}function mL(e){let{basename:t="/",children:n=null,location:r,navigationType:i=oi.Pop,navigator:s,static:o=!1,future:a}=e;ma()&&Pe(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:Fl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ga(r));let{pathname:d="/",search:h="",hash:f="",state:p=null,key:m="default"}=r,v=S.useMemo(()=>{let w=Ul(d,l);return w==null?null:{location:{pathname:w,search:h,hash:f,state:p,key:m},navigationType:i}},[l,d,h,f,p,m,i]);return v==null?null:S.createElement(Di.Provider,{value:u},S.createElement(Gh.Provider,{children:n,value:v}))}function ek(e){let{children:t,location:n}=e;return rL(mm(t),n)}new Promise(()=>{});function mm(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let s=[...t,i];if(r.type===S.Fragment){n.push.apply(n,mm(r.props.children,s));return}r.type!==uo&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=mm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $d(){return $d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$d.apply(this,arguments)}function tk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function yL(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vL(e,t){return e.button===0&&(!t||t==="_self")&&!yL(e)}function ym(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function _L(e,t){let n=ym(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const wL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],xL=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],EL=S.createContext({isTransitioning:!1}),IL="startTransition",cw=QP[IL];function SL(e){let{basename:t,children:n,future:r,window:i}=e,s=S.useRef();s.current==null&&(s.current=CM({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(h=>{u&&cw?cw(()=>l(h)):l(h)},[l,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.createElement(mL,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const TL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ms=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:h}=t,f=tk(t,wL),{basename:p}=S.useContext(Di),m,v=!1;if(typeof u=="string"&&kL.test(u)&&(m=u,TL))try{let _=new URL(window.location.href),E=u.startsWith("//")?new URL(_.protocol+u):new URL(u),T=Ul(E.pathname,p);E.origin===_.origin&&T!=null?u=T+E.search+E.hash:v=!0}catch{}let w=JM(u,{relative:i}),g=AL(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:h});function y(_){r&&r(_),_.defaultPrevented||g(_)}return S.createElement("a",$d({},f,{href:m||w,onClick:v||s?r:y,ref:n,target:l}))}),nk=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=t,h=tk(t,xL),f=Qh(l,{relative:h.relative}),p=ur(),m=S.useContext(QT),{navigator:v}=S.useContext(Di),w=m!=null&&RL(f)&&u===!0,g=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,y=p.pathname,_=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(y=y.toLowerCase(),_=_?_.toLowerCase():null,g=g.toLowerCase());const E=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let T=y===g||!o&&y.startsWith(g)&&y.charAt(E)==="/",k=_!=null&&(_===g||!o&&_.startsWith(g)&&_.charAt(g.length)==="/"),I={isActive:T,isPending:k,isTransitioning:w},A=T?r:void 0,z;typeof s=="function"?z=s(I):z=[s,T?"active":null,k?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let H=typeof a=="function"?a(I):a;return S.createElement(Ms,$d({},h,{"aria-current":A,className:z,ref:n,style:H,to:l,unstable_viewTransition:u}),typeof d=="function"?d(I):d)});var vm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vm||(vm={}));var uw;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(uw||(uw={}));function CL(e){let t=S.useContext(qh);return t||Pe(!1),t}function AL(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=_c(),u=ur(),d=Qh(e,{relative:o});return S.useCallback(h=>{if(vL(h,n)){h.preventDefault();let f=r!==void 0?r:Md(u)===Md(d);l(e,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,e,s,o,a])}function rk(e){let t=S.useRef(ym(e)),n=S.useRef(!1),r=ur(),i=S.useMemo(()=>_L(r.search,n.current?null:t.current),[r.search]),s=_c(),o=S.useCallback((a,l)=>{const u=ym(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,l)},[s,i]);return[i,o]}function RL(e,t){t===void 0&&(t={});let n=S.useContext(EL);n==null&&Pe(!1);let{basename:r}=CL(vm.useViewTransitionState),i=Qh(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Ul(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ul(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ld(i.pathname,o)!=null||Ld(i.pathname,s)!=null}const q=x.button`
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
`,PL=x(q)`
    color: ${({theme:e})=>e.colors.textColor};
    filter: brightness(1.2);

    &.liked {
        color: ${({likeColor:e})=>e};
    }

    svg {
        width: 20px;
        height: 20px;
    }
`,ws={borderRadius:{mild:"9px",middle:"10px",big:"14px",huge:"5%"},colors:{brightness:1.1,pageTopButton:"#171717",skeleton:"#ffffff1f",playerDarkening:"#000000cb",textColor:"#fff",textColorOppiste:"#000",hover:"#ffffff14",pageBackground:"#101010",pageBackground2:"#191919",overlay:"#0e0e0ed4",input:"#202020",border:"#92929257",sidebar:"#161616",lightHover:"#ffffff1f",darkHover:"#0000002b",modal:"#242629",shadow:"0 0 40px #00000021",greyText:"#a2a2a2",header:"#1010109e",blue:{main:"#75a8fa",action:"#5193ff",mild:"#1b2c4e",transparent:"#5394ff4f",transparent2:"#5394ff2b"},purple:{main:"#9332d1"},red:{text:"#ffb3b3",transparent:"#ff636314",main:"#d64040"}}},bL={borderRadius:{mild:"6px",middle:"10px",big:"14px",huge:"5%"},colors:{brightness:.7,pageTopButton:"#fff",skeleton:"#0000001a",playerDarkening:"#f1f1f1c9",textColor:"#000",textColorOppiste:"#fff",hover:"#73737314",pageBackground:"#fff",pageBackground2:"#f7f7f7",overlay:"#0e0e0ed4",input:"#f0f0f0",border:"#b6b6b657",sidebar:"#f1f1f1",lightHover:"#ffffff80",darkHover:"#0000002b",modal:"#fff",shadow:"0 0 40px #00000021",header:"#ffffff9e",greyText:"#a2a2a2",blue:{main:"#5275b5",action:"#3481fe",mild:"#dfeaff",transparent:"#5394ff4f",transparent2:"#5394ff2b"},purple:{main:"#9332d1"},red:{text:"#e15353",transparent:"#ff636314",main:"#ff6f6f"}}},Kh=({songId:e,likeColor:t=ws.colors.greyText,onClick:n,background:r,height:i,width:s="30px",...o})=>{const[a,l]=S.useState(!1);S.useEffect(()=>{},[]);const u=d=>{d.stopPropagation(),e&&(n==null||n(e)),l(h=>!h)};return c.jsx(PL,{...o,$width:s,$height:i,$background:r,className:"like-button "+(a?"liked":""),onClick:u,likeColor:t,children:a?c.jsx(qN,{}):c.jsx(sy,{})})},ya=x.div`
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
`,jL=x.img`
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
    opacity: ${({$coverLoaded:e})=>e?"1":"0"};
`,NL=x(ya)`
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
`,ML=({src:e})=>{const[t,n]=S.useState(!1),r=()=>{n(!0)};return c.jsx(jL,{$coverLoaded:t,onLoad:r,loading:"lazy",src:e})},LL="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/music-icon-mohammed-jabir-ap.jpg",Yh=({src:e,colors:t,children:n,size:r,fallbackIcon:i,borderRadius:s})=>c.jsxs(NL,{className:"general-cover",$colors:t,$borderRadius:s,$size:r,$color1:t==null?void 0:t[0],children:[e&&e!==LL?c.jsx(ML,{src:e}):c.jsx("div",{className:"cover-icon",children:i}),c.jsx("div",{className:"cover-children",children:n})]}),Cy=ws.borderRadius.mild,Ay=e=>c.jsx(Yh,{fallbackIcon:c.jsx(us,{}),...e,borderRadius:e.borderRadius??Cy}),wc=x.div`
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
`,Qo=x.div`
	width: 100%;
	height: 0.5px;
	background: #91919142;
	margin: 8px 0;
`,Pn={author:c.jsx(eT,{}),user:c.jsx(aT,{}),playlist:c.jsx(nT,{}),album:c.jsx(cy,{}),song:c.jsx(us,{})};var dw={};/**
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
 */const ik=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},DL=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},sk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[d],n[h],n[f],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ik(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):DL(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new $L;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class $L extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OL=function(e){const t=ik(e);return sk.encodeByteArray(t,!0)},Od=function(e){return OL(e).replace(/\./g,"")},ok=function(e){try{return sk.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function VL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UL=()=>VL().__FIREBASE_DEFAULTS__,FL=()=>{if(typeof process>"u"||typeof dw>"u")return;const e=dw.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},zL=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ok(e[1]);return t&&JSON.parse(t)},Ry=()=>{try{return UL()||FL()||zL()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ak=e=>{var t,n;return(n=(t=Ry())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},BL=e=>{const t=ak(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},lk=()=>{var e;return(e=Ry())===null||e===void 0?void 0:e.config},ck=e=>{var t;return(t=Ry())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class HL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function WL(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Od(JSON.stringify(n)),Od(JSON.stringify(o)),a].join(".")}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function GL(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function QL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KL(){const e=It();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function YL(){try{return typeof indexedDB=="object"}catch{return!1}}function XL(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const JL="FirebaseError";class dr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=JL,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xc.prototype.create)}}class xc{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?ZL(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dr(i,a,r)}}function ZL(e,t){return e.replace(eD,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const eD=/\{\$([^}]+)}/g;function tD(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function zl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(hw(s)&&hw(o)){if(!zl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hw(e){return e!==null&&typeof e=="object"}/**
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
 */function Ec(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Wa(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function qa(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function nD(e,t){const n=new rD(e,t);return n.subscribe.bind(n)}class rD{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iD(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=bp),i.error===void 0&&(i.error=bp),i.complete===void 0&&(i.complete=bp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iD(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function bp(){}/**
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
 */function We(e){return e&&e._delegate?e._delegate:e}class Ai{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ji="[DEFAULT]";/**
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
 */class sD{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new HL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(aD(t))try{this.getOrInitializeService({instanceIdentifier:Ji})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ji){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ji){return this.instances.has(t)}getOptions(t=Ji){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oD(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ji){return this.component?this.component.multipleInstances?t:Ji:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oD(e){return e===Ji?void 0:e}function aD(e){return e.instantiationMode==="EAGER"}/**
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
 */class lD{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new sD(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(oe||(oe={}));const cD={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},uD=oe.INFO,dD={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},hD=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=dD[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Py{constructor(t){this.name=t,this._logLevel=uD,this._logHandler=hD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in oe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?cD[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...t),this._logHandler(this,oe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...t),this._logHandler(this,oe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...t),this._logHandler(this,oe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...t),this._logHandler(this,oe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...t),this._logHandler(this,oe.ERROR,...t)}}const fD=(e,t)=>t.some(n=>e instanceof n);let fw,pw;function pD(){return fw||(fw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gD(){return pw||(pw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uk=new WeakMap,_m=new WeakMap,dk=new WeakMap,jp=new WeakMap,by=new WeakMap;function mD(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(_i(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&uk.set(n,e)}).catch(()=>{}),by.set(t,e),t}function yD(e){if(_m.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});_m.set(e,t)}let wm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return _m.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dk.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _i(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function vD(e){wm=e(wm)}function _D(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Np(this),t,...n);return dk.set(r,t.sort?t.sort():[t]),_i(r)}:gD().includes(e)?function(...t){return e.apply(Np(this),t),_i(uk.get(this))}:function(...t){return _i(e.apply(Np(this),t))}}function wD(e){return typeof e=="function"?_D(e):(e instanceof IDBTransaction&&yD(e),fD(e,pD())?new Proxy(e,wm):e)}function _i(e){if(e instanceof IDBRequest)return mD(e);if(jp.has(e))return jp.get(e);const t=wD(e);return t!==e&&(jp.set(e,t),by.set(t,e)),t}const Np=e=>by.get(e);function xD(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=_i(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_i(o.result),l.oldVersion,l.newVersion,_i(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ED=["get","getKey","getAll","getAllKeys","count"],ID=["put","add","delete","clear"],Mp=new Map;function gw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Mp.get(t))return Mp.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ID.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ED.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Mp.set(t,s),s}vD(e=>({...e,get:(t,n,r)=>gw(t,n)||e.get(t,n,r),has:(t,n)=>!!gw(t,n)||e.has(t,n)}));/**
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
 */class SD{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TD(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xm="@firebase/app",mw="0.9.25";/**
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
 */const xs=new Py("@firebase/app"),kD="@firebase/app-compat",CD="@firebase/analytics-compat",AD="@firebase/analytics",RD="@firebase/app-check-compat",PD="@firebase/app-check",bD="@firebase/auth",jD="@firebase/auth-compat",ND="@firebase/database",MD="@firebase/database-compat",LD="@firebase/functions",DD="@firebase/functions-compat",$D="@firebase/installations",OD="@firebase/installations-compat",VD="@firebase/messaging",UD="@firebase/messaging-compat",FD="@firebase/performance",zD="@firebase/performance-compat",BD="@firebase/remote-config",HD="@firebase/remote-config-compat",WD="@firebase/storage",qD="@firebase/storage-compat",GD="@firebase/firestore",QD="@firebase/firestore-compat",KD="firebase",YD="10.7.1";/**
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
 */const Em="[DEFAULT]",XD={[xm]:"fire-core",[kD]:"fire-core-compat",[AD]:"fire-analytics",[CD]:"fire-analytics-compat",[PD]:"fire-app-check",[RD]:"fire-app-check-compat",[bD]:"fire-auth",[jD]:"fire-auth-compat",[ND]:"fire-rtdb",[MD]:"fire-rtdb-compat",[LD]:"fire-fn",[DD]:"fire-fn-compat",[$D]:"fire-iid",[OD]:"fire-iid-compat",[VD]:"fire-fcm",[UD]:"fire-fcm-compat",[FD]:"fire-perf",[zD]:"fire-perf-compat",[BD]:"fire-rc",[HD]:"fire-rc-compat",[WD]:"fire-gcs",[qD]:"fire-gcs-compat",[GD]:"fire-fst",[QD]:"fire-fst-compat","fire-js":"fire-js",[KD]:"fire-js-all"};/**
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
 */const Vd=new Map,Im=new Map;function JD(e,t){try{e.container.addComponent(t)}catch(n){xs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Es(e){const t=e.name;if(Im.has(t))return xs.debug(`There were multiple attempts to register component ${t}.`),!1;Im.set(t,e);for(const n of Vd.values())JD(n,e);return!0}function Xh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const ZD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wi=new xc("app","Firebase",ZD);/**
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
 */class e3{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ai("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=YD;function hk(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Em,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw wi.create("bad-app-name",{appName:String(i)});if(n||(n=lk()),!n)throw wi.create("no-options");const s=Vd.get(i);if(s){if(zl(n,s.options)&&zl(r,s.config))return s;throw wi.create("duplicate-app",{appName:i})}const o=new lD(i);for(const l of Im.values())o.addComponent(l);const a=new e3(n,r,o);return Vd.set(i,a),a}function fk(e=Em){const t=Vd.get(e);if(!t&&e===Em&&lk())return hk();if(!t)throw wi.create("no-app",{appName:e});return t}function tr(e,t,n){var r;let i=(r=XD[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}Es(new Ai(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const t3="firebase-heartbeat-database",n3=1,Bl="firebase-heartbeat-store";let Lp=null;function pk(){return Lp||(Lp=xD(t3,n3,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Bl)}}}).catch(e=>{throw wi.create("idb-open",{originalErrorMessage:e.message})})),Lp}async function r3(e){try{return await(await pk()).transaction(Bl).objectStore(Bl).get(gk(e))}catch(t){if(t instanceof dr)xs.warn(t.message);else{const n=wi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xs.warn(n.message)}}}async function yw(e,t){try{const r=(await pk()).transaction(Bl,"readwrite");await r.objectStore(Bl).put(t,gk(e)),await r.done}catch(n){if(n instanceof dr)xs.warn(n.message);else{const r=wi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xs.warn(r.message)}}}function gk(e){return`${e.name}!${e.options.appId}`}/**
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
 */const i3=1024,s3=30*24*60*60*1e3;class o3{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new l3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vw();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=s3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vw(),{heartbeatsToSend:r,unsentEntries:i}=a3(this._heartbeatsCache.heartbeats),s=Od(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function vw(){return new Date().toISOString().substring(0,10)}function a3(e,t=i3){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_w(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_w(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class l3{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YL()?XL().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await r3(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yw(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yw(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function _w(e){return Od(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function c3(e){Es(new Ai("platform-logger",t=>new SD(t),"PRIVATE")),Es(new Ai("heartbeat",t=>new o3(t),"PRIVATE")),tr(xm,mw,e),tr(xm,mw,"esm2017"),tr("fire-js","")}c3("");var u3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,jy=jy||{},X=u3||self;function Jh(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ic(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function d3(e){return Object.prototype.hasOwnProperty.call(e,Dp)&&e[Dp]||(e[Dp]=++h3)}var Dp="closure_uid_"+(1e9*Math.random()>>>0),h3=0;function f3(e,t,n){return e.call.apply(e.bind,arguments)}function p3(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function _t(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_t=f3:_t=p3,_t.apply(null,arguments)}function gu(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function nt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Oi(){this.s=this.s,this.o=this.o}var g3=0;Oi.prototype.s=!1;Oi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),g3!=0)&&d3(this)};Oi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mk=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ny(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ww(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Jh(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function wt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var m3=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};X.addEventListener("test",n,t),X.removeEventListener("test",n,t)}catch{}return e}();function Hl(e){return/^[\s\xa0]*$/.test(e)}function Zh(){var e=X.navigator;return e&&(e=e.userAgent)?e:""}function Gn(e){return Zh().indexOf(e)!=-1}function My(e){return My[" "](e),e}My[" "]=function(){};function y3(e,t){var n=c$;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var v3=Gn("Opera"),Ko=Gn("Trident")||Gn("MSIE"),yk=Gn("Edge"),Sm=yk||Ko,vk=Gn("Gecko")&&!(Zh().toLowerCase().indexOf("webkit")!=-1&&!Gn("Edge"))&&!(Gn("Trident")||Gn("MSIE"))&&!Gn("Edge"),_3=Zh().toLowerCase().indexOf("webkit")!=-1&&!Gn("Edge");function _k(){var e=X.document;return e?e.documentMode:void 0}var Tm;e:{var $p="",Op=function(){var e=Zh();if(vk)return/rv:([^\);]+)(\)|;)/.exec(e);if(yk)return/Edge\/([\d\.]+)/.exec(e);if(Ko)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(_3)return/WebKit\/(\S+)/.exec(e);if(v3)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Op&&($p=Op?Op[1]:""),Ko){var Vp=_k();if(Vp!=null&&Vp>parseFloat($p)){Tm=String(Vp);break e}}Tm=$p}var km;if(X.document&&Ko){var xw=_k();km=xw||parseInt(Tm,10)||void 0}else km=void 0;var w3=km;function Wl(e,t){if(wt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(vk){e:{try{My(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:x3[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Wl.$.h.call(this)}}nt(Wl,wt);var x3={2:"touch",3:"pen",4:"mouse"};Wl.prototype.h=function(){Wl.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Sc="closure_listenable_"+(1e6*Math.random()|0),E3=0;function I3(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++E3,this.fa=this.ia=!1}function ef(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ly(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function S3(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function wk(e){const t={};for(const n in e)t[n]=e[n];return t}const Ew="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xk(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Ew.length;s++)n=Ew[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function tf(e){this.src=e,this.g={},this.h=0}tf.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Am(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new I3(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Cm(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=mk(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ef(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Am(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Dy="closure_lm_"+(1e6*Math.random()|0),Up={};function Ek(e,t,n,r,i){if(r&&r.once)return Sk(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ek(e,t[s],n,r,i);return null}return n=Vy(n),e&&e[Sc]?e.O(t,n,Ic(r)?!!r.capture:!!r,i):Ik(e,t,n,!1,r,i)}function Ik(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Ic(i)?!!i.capture:!!i,a=Oy(e);if(a||(e[Dy]=a=new tf(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=T3(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)m3||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(kk(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function T3(){function e(n){return t.call(e.src,e.listener,n)}const t=k3;return e}function Sk(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Sk(e,t[s],n,r,i);return null}return n=Vy(n),e&&e[Sc]?e.P(t,n,Ic(r)?!!r.capture:!!r,i):Ik(e,t,n,!0,r,i)}function Tk(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Tk(e,t[s],n,r,i);else r=Ic(r)?!!r.capture:!!r,n=Vy(n),e&&e[Sc]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Am(s,n,r,i),-1<n&&(ef(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Oy(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Am(t,n,r,i)),(n=-1<e?t[e]:null)&&$y(n))}function $y(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Sc])Cm(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(kk(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Oy(t))?(Cm(n,e),n.h==0&&(n.src=null,t[Dy]=null)):ef(e)}}}function kk(e){return e in Up?Up[e]:Up[e]="on"+e}function k3(e,t){if(e.fa)e=!0;else{t=new Wl(t,this);var n=e.listener,r=e.la||e.src;e.ia&&$y(e),e=n.call(r,t)}return e}function Oy(e){return e=e[Dy],e instanceof tf?e:null}var Fp="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vy(e){return typeof e=="function"?e:(e[Fp]||(e[Fp]=function(t){return e.handleEvent(t)}),e[Fp])}function tt(){Oi.call(this),this.i=new tf(this),this.S=this,this.J=null}nt(tt,Oi);tt.prototype[Sc]=!0;tt.prototype.removeEventListener=function(e,t,n,r){Tk(this,e,t,n,r)};function ct(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new wt(t,e);else if(t instanceof wt)t.target=t.target||e;else{var i=t;t=new wt(r,e),xk(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=mu(o,r,!0,t)&&i}if(o=t.g=e,i=mu(o,r,!0,t)&&i,i=mu(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=mu(o,r,!1,t)&&i}tt.prototype.N=function(){if(tt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ef(n[r]);delete e.g[t],e.h--}}this.J=null};tt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};tt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function mu(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Cm(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Uy=X.JSON.stringify;class C3{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function A3(){var e=Fy;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class R3{constructor(){this.h=this.g=null}add(t,n){const r=Ck.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ck=new C3(()=>new P3,e=>e.reset());class P3{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function b3(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function j3(e){X.setTimeout(()=>{throw e},0)}let ql,Gl=!1,Fy=new R3,Ak=()=>{const e=X.Promise.resolve(void 0);ql=()=>{e.then(N3)}};var N3=()=>{for(var e;e=A3();){try{e.h.call(e.g)}catch(n){j3(n)}var t=Ck;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Gl=!1};function nf(e,t){tt.call(this),this.h=e||1,this.g=t||X,this.j=_t(this.qb,this),this.l=Date.now()}nt(nf,tt);M=nf.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(zy(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zy(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}M.N=function(){nf.$.N.call(this),zy(this),delete this.g};function By(e,t,n){if(typeof e=="function")n&&(e=_t(e,n));else if(e&&typeof e.handleEvent=="function")e=_t(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:X.setTimeout(e,t||0)}function Rk(e){e.g=By(()=>{e.g=null,e.i&&(e.i=!1,Rk(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class M3 extends Oi{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Rk(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ql(e){Oi.call(this),this.h=e,this.g={}}nt(Ql,Oi);var Iw=[];function Pk(e,t,n,r){Array.isArray(n)||(n&&(Iw[0]=n.toString()),n=Iw);for(var i=0;i<n.length;i++){var s=Ek(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function bk(e){Ly(e.g,function(t,n){this.g.hasOwnProperty(n)&&$y(t)},e),e.g={}}Ql.prototype.N=function(){Ql.$.N.call(this),bk(this)};Ql.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rf(){this.g=!0}rf.prototype.Ea=function(){this.g=!1};function L3(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var d=u[0];u=u[1];var h=d.split("_");o=2<=h.length&&h[1]=="type"?o+(d+"="+u+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function D3(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ho(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+O3(e,n)+(r?" "+r:"")})}function $3(e,t){e.info(function(){return"TIMEOUT: "+t})}rf.prototype.info=function(){};function O3(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Uy(n)}catch{return t}}var Ds={},Sw=null;function sf(){return Sw=Sw||new tt}Ds.Ta="serverreachability";function jk(e){wt.call(this,Ds.Ta,e)}nt(jk,wt);function Kl(e){const t=sf();ct(t,new jk(t))}Ds.STAT_EVENT="statevent";function Nk(e,t){wt.call(this,Ds.STAT_EVENT,e),this.stat=t}nt(Nk,wt);function At(e){const t=sf();ct(t,new Nk(t,e))}Ds.Ua="timingevent";function Mk(e,t){wt.call(this,Ds.Ua,e),this.size=t}nt(Mk,wt);function Tc(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){e()},t)}var of={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Lk={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hy(){}Hy.prototype.h=null;function Tw(e){return e.h||(e.h=e.i())}function Dk(){}var kc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wy(){wt.call(this,"d")}nt(Wy,wt);function qy(){wt.call(this,"c")}nt(qy,wt);var Rm;function af(){}nt(af,Hy);af.prototype.g=function(){return new XMLHttpRequest};af.prototype.i=function(){return{}};Rm=new af;function Cc(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ql(this),this.P=V3,e=Sm?125:void 0,this.V=new nf(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new $k}function $k(){this.i=null,this.g="",this.h=!1}var V3=45e3,Ok={},Pm={};M=Cc.prototype;M.setTimeout=function(e){this.P=e};function bm(e,t,n){e.L=1,e.A=cf(Dr(t)),e.u=n,e.S=!0,Vk(e,null)}function Vk(e,t){e.G=Date.now(),Ac(e),e.B=Dr(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Gk(n.i,"t",r),e.o=0,n=e.l.J,e.h=new $k,e.g=pC(e.l,n?t:null,!e.u),0<e.O&&(e.M=new M3(_t(e.Pa,e,e.g),e.O)),Pk(e.U,e.g,"readystatechange",e.nb),t=e.I?wk(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Kl(),L3(e.j,e.v,e.B,e.m,e.W,e.u)}M.nb=function(e){e=e.target;const t=this.M;t&&Yn(e)==3?t.l():this.Pa(e)};M.Pa=function(e){try{if(e==this.g)e:{const d=Yn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>d)&&(d!=3||Sm||this.g&&(this.h.h||this.g.ja()||Rw(this.g)))){this.J||d!=4||t==7||(t==8||0>=h?Kl(3):Kl(2)),lf(this);var n=this.g.da();this.ca=n;t:if(Uk(this)){var r=Rw(this.g);e="";var i=r.length,s=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rs(this),ul(this);var o="";break t}this.h.i=new X.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,D3(this.j,this.v,this.B,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hl(a)){var u=a;break t}}u=null}if(n=u)ho(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jm(this,n);else{this.i=!1,this.s=3,At(12),rs(this),ul(this);break e}}this.S?(Fk(this,d,o),Sm&&this.i&&d==3&&(Pk(this.U,this.V,"tick",this.mb),this.V.start())):(ho(this.j,this.m,o,null),jm(this,o)),d==4&&rs(this),this.i&&!this.J&&(d==4?uC(this.l,this):(this.i=!1,Ac(this)))}else o$(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),rs(this),ul(this)}}}catch{}finally{}};function Uk(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Fk(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=U3(e,n),i==Pm){t==4&&(e.s=4,At(14),r=!1),ho(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Ok){e.s=4,At(15),ho(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ho(e.j,e.m,i,null),jm(e,i);Uk(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,At(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jy(t),t.M=!0,At(11))):(ho(e.j,e.m,n,"[Invalid Chunked Response]"),rs(e),ul(e))}M.mb=function(){if(this.g){var e=Yn(this.g),t=this.g.ja();this.o<t.length&&(lf(this),Fk(this,e,t),this.i&&e!=4&&Ac(this))}};function U3(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Pm:(n=Number(t.substring(n,r)),isNaN(n)?Ok:(r+=1,r+n>t.length?Pm:(t=t.slice(r,r+n),e.o=r+n,t)))}M.cancel=function(){this.J=!0,rs(this)};function Ac(e){e.Y=Date.now()+e.P,zk(e,e.P)}function zk(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Tc(_t(e.lb,e),t)}function lf(e){e.C&&(X.clearTimeout(e.C),e.C=null)}M.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?($3(this.j,this.B),this.L!=2&&(Kl(),At(17)),rs(this),this.s=2,ul(this)):zk(this,this.Y-e)};function ul(e){e.l.H==0||e.J||uC(e.l,e)}function rs(e){lf(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,zy(e.V),bk(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function jm(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Nm(n.i,e))){if(!e.K&&Nm(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)zd(n),ff(n);else break e;Xy(n),At(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Tc(_t(n.ib,n),6e3));if(1>=Yk(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else is(n,11)}else if((e.K||n.g==e)&&zd(n),!Hl(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const d=u[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Gy(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ie(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=fC(r,r.J?r.pa:null,r.Y),o.K){Xk(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(lf(a),Ac(a)),r.g=o}else lC(r);0<n.j.length&&pf(n)}else u[0]!="stop"&&u[0]!="close"||is(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?is(n,7):Yy(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Kl(4)}catch{}}function F3(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Jh(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function z3(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Jh(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Bk(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Jh(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=z3(e),r=F3(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Hk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function B3(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function hs(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof hs){this.h=e.h,Ud(this,e.j),this.s=e.s,this.g=e.g,Fd(this,e.m),this.l=e.l;var t=e.i,n=new Yl;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),kw(this,n),this.o=e.o}else e&&(t=String(e).match(Hk))?(this.h=!1,Ud(this,t[1]||"",!0),this.s=Ga(t[2]||""),this.g=Ga(t[3]||"",!0),Fd(this,t[4]),this.l=Ga(t[5]||"",!0),kw(this,t[6]||"",!0),this.o=Ga(t[7]||"")):(this.h=!1,this.i=new Yl(null,this.h))}hs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qa(t,Cw,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Qa(t,Cw,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Qa(n,n.charAt(0)=="/"?q3:W3,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qa(n,Q3)),e.join("")};function Dr(e){return new hs(e)}function Ud(e,t,n){e.j=n?Ga(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Fd(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function kw(e,t,n){t instanceof Yl?(e.i=t,K3(e.i,e.h)):(n||(t=Qa(t,G3)),e.i=new Yl(t,e.h))}function Ie(e,t,n){e.i.set(t,n)}function cf(e){return Ie(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ga(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qa(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,H3),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function H3(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Cw=/[#\/\?@]/g,W3=/[#\?:]/g,q3=/[#\?]/g,G3=/[#\?@]/g,Q3=/#/g;function Yl(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Vi(e){e.g||(e.g=new Map,e.h=0,e.i&&B3(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}M=Yl.prototype;M.add=function(e,t){Vi(this),this.i=null,e=va(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Wk(e,t){Vi(e),t=va(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function qk(e,t){return Vi(e),t=va(e,t),e.g.has(t)}M.forEach=function(e,t){Vi(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};M.ta=function(){Vi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};M.Z=function(e){Vi(this);let t=[];if(typeof e=="string")qk(this,e)&&(t=t.concat(this.g.get(va(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};M.set=function(e,t){return Vi(this),this.i=null,e=va(this,e),qk(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};M.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Gk(e,t,n){Wk(e,t),0<n.length&&(e.i=null,e.g.set(va(e,t),Ny(n)),e.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function va(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function K3(e,t){t&&!e.j&&(Vi(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Wk(this,r),Gk(this,i,n))},e)),e.j=t}var Y3=class{constructor(e,t){this.g=e,this.map=t}};function Qk(e){this.l=e||X3,X.PerformanceNavigationTiming?(e=X.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var X3=10;function Kk(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Yk(e){return e.h?1:e.g?e.g.size:0}function Nm(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Gy(e,t){e.g?e.g.add(t):e.h=t}function Xk(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Qk.prototype.cancel=function(){if(this.i=Jk(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Jk(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ny(e.i)}var J3=class{stringify(e){return X.JSON.stringify(e,void 0)}parse(e){return X.JSON.parse(e,void 0)}};function Z3(){this.g=new J3}function e$(e,t,n){const r=n||"";try{Bk(e,function(i,s){let o=i;Ic(i)&&(o=Uy(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function t$(e,t){const n=new rf;if(X.Image){const r=new Image;r.onload=gu(yu,n,r,"TestLoadImage: loaded",!0,t),r.onerror=gu(yu,n,r,"TestLoadImage: error",!1,t),r.onabort=gu(yu,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=gu(yu,n,r,"TestLoadImage: timeout",!1,t),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function yu(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function uf(e){this.l=e.ec||null,this.j=e.ob||!1}nt(uf,Hy);uf.prototype.g=function(){return new df(this.l,this.j)};uf.prototype.i=function(e){return function(){return e}}({});function df(e,t){tt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Qy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(df,tt);var Qy=0;M=df.prototype;M.open=function(e,t){if(this.readyState!=Qy)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Xl(this)};M.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||X).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rc(this)),this.readyState=Qy};M.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Xl(this)),this.g&&(this.readyState=3,Xl(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Zk(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Zk(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}M.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Rc(this):Xl(this),this.readyState==3&&Zk(this)}};M.Za=function(e){this.g&&(this.response=this.responseText=e,Rc(this))};M.Ya=function(e){this.g&&(this.response=e,Rc(this))};M.ka=function(){this.g&&Rc(this)};function Rc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Xl(e)}M.setRequestHeader=function(e,t){this.v.append(e,t)};M.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Xl(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(df.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var n$=X.JSON.parse;function Me(e){tt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=eC,this.L=this.M=!1}nt(Me,tt);var eC="",r$=/^https?$/i,i$=["POST","PUT"];M=Me.prototype;M.Oa=function(e){this.M=e};M.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Rm.g(),this.C=this.u?Tw(this.u):Tw(Rm),this.g.onreadystatechange=_t(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Aw(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=X.FormData&&e instanceof X.FormData,!(0<=mk(i$,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{rC(this),0<this.B&&((this.L=s$(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_t(this.ua,this)):this.A=By(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Aw(this,s)}};function s$(e){return Ko&&typeof e.timeout=="number"&&e.ontimeout!==void 0}M.ua=function(){typeof jy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function Aw(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,tC(e),hf(e)}function tC(e){e.F||(e.F=!0,ct(e,"complete"),ct(e,"error"))}M.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ct(this,"complete"),ct(this,"abort"),hf(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hf(this,!0)),Me.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?nC(this):this.kb())};M.kb=function(){nC(this)};function nC(e){if(e.h&&typeof jy<"u"&&(!e.C[1]||Yn(e)!=4||e.da()!=2)){if(e.v&&Yn(e)==4)By(e.La,0,e);else if(ct(e,"readystatechange"),Yn(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Hk)[1]||null;!i&&X.self&&X.self.location&&(i=X.self.location.protocol.slice(0,-1)),r=!r$.test(i?i.toLowerCase():"")}n=r}if(n)ct(e,"complete"),ct(e,"success");else{e.m=6;try{var s=2<Yn(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",tC(e)}}finally{hf(e)}}}}function hf(e,t){if(e.g){rC(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ct(e,"ready");try{n.onreadystatechange=r}catch{}}}function rC(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(X.clearTimeout(e.A),e.A=null)}M.isActive=function(){return!!this.g};function Yn(e){return e.g?e.g.readyState:0}M.da=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),n$(t)}};function Rw(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case eC:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function o$(e){const t={};e=(e.g&&2<=Yn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Hl(e[r]))continue;var n=b3(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}S3(t,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function iC(e){let t="";return Ly(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ky(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=iC(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Ie(e,t,n))}function Da(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function sC(e){this.Ga=0,this.j=[],this.l=new rf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Da("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Da("baseRetryDelayMs",5e3,e),this.hb=Da("retryDelaySeedMs",1e4,e),this.eb=Da("forwardChannelMaxRetries",2,e),this.xa=Da("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Qk(e&&e.concurrentRequestLimit),this.Ja=new Z3,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=sC.prototype;M.ra=8;M.H=1;function Yy(e){if(oC(e),e.H==3){var t=e.W++,n=Dr(e.I);if(Ie(n,"SID",e.K),Ie(n,"RID",t),Ie(n,"TYPE","terminate"),Pc(e,n),t=new Cc(e,e.l,t),t.L=2,t.A=cf(Dr(n)),n=!1,X.navigator&&X.navigator.sendBeacon)try{n=X.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&X.Image&&(new Image().src=t.A,n=!0),n||(t.g=pC(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Ac(t)}hC(e)}function ff(e){e.g&&(Jy(e),e.g.cancel(),e.g=null)}function oC(e){ff(e),e.u&&(X.clearTimeout(e.u),e.u=null),zd(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&X.clearTimeout(e.m),e.m=null)}function pf(e){if(!Kk(e.i)&&!e.m){e.m=!0;var t=e.Na;ql||Ak(),Gl||(ql(),Gl=!0),Fy.add(t,e),e.C=0}}function a$(e,t){return Yk(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Tc(_t(e.Na,e,t),dC(e,e.C)),e.C++,!0)}M.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Cc(this,this.l,e);let s=this.s;if(this.U&&(s?(s=wk(s),xk(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=aC(this,i,t),n=Dr(this.I),Ie(n,"RID",e),Ie(n,"CVER",22),this.F&&Ie(n,"X-HTTP-Session-Id",this.F),Pc(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(iC(s)))+"&"+t:this.o&&Ky(n,this.o,s)),Gy(this.i,i),this.bb&&Ie(n,"TYPE","init"),this.P?(Ie(n,"$req",t),Ie(n,"SID","null"),i.aa=!0,bm(i,n,null)):bm(i,n,t),this.H=2}}else this.H==3&&(e?Pw(this,e):this.j.length==0||Kk(this.i)||Pw(this))};function Pw(e,t){var n;t?n=t.m:n=e.W++;const r=Dr(e.I);Ie(r,"SID",e.K),Ie(r,"RID",n),Ie(r,"AID",e.V),Pc(e,r),e.o&&e.s&&Ky(r,e.o,e.s),n=new Cc(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=aC(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Gy(e.i,n),bm(n,r,t)}function Pc(e,t){e.na&&Ly(e.na,function(n,r){Ie(t,r,n)}),e.h&&Bk({},function(n,r){Ie(t,r,n)})}function aC(e,t,n){n=Math.min(e.j.length,n);var r=e.h?_t(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const d=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{e$(d,o,"req"+u+"_")}catch{r&&r(d)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function lC(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ql||Ak(),Gl||(ql(),Gl=!0),Fy.add(t,e),e.A=0}}function Xy(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Tc(_t(e.Ma,e),dC(e,e.A)),e.A++,!0)}M.Ma=function(){if(this.u=null,cC(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Tc(_t(this.jb,this),e)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,At(10),ff(this),cC(this))};function Jy(e){e.B!=null&&(X.clearTimeout(e.B),e.B=null)}function cC(e){e.g=new Cc(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Dr(e.wa);Ie(t,"RID","rpc"),Ie(t,"SID",e.K),Ie(t,"AID",e.V),Ie(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Ie(t,"TO",e.qa),Ie(t,"TYPE","xmlhttp"),Pc(e,t),e.o&&e.s&&Ky(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=cf(Dr(t)),n.u=null,n.S=!0,Vk(n,e)}M.ib=function(){this.v!=null&&(this.v=null,ff(this),Xy(this),At(19))};function zd(e){e.v!=null&&(X.clearTimeout(e.v),e.v=null)}function uC(e,t){var n=null;if(e.g==t){zd(e),Jy(e),e.g=null;var r=2}else if(Nm(e.i,t))n=t.F,Xk(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=sf(),ct(r,new Mk(r,n)),pf(e)}else lC(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&a$(e,t)||r==2&&Xy(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:is(e,5);break;case 4:is(e,10);break;case 3:is(e,6);break;default:is(e,2)}}}function dC(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function is(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=_t(e.pb,e);n||(n=new hs("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Ud(n,"https"),cf(n)),t$(n.toString(),r)}else At(2);e.H=0,e.h&&e.h.za(t),hC(e),oC(e)}M.pb=function(e){e?(this.l.info("Successfully pinged google.com"),At(2)):(this.l.info("Failed to ping google.com"),At(1))};function hC(e){if(e.H=0,e.ma=[],e.h){const t=Jk(e.i);(t.length!=0||e.j.length!=0)&&(ww(e.ma,t),ww(e.ma,e.j),e.i.i.length=0,Ny(e.j),e.j.length=0),e.h.ya()}}function fC(e,t,n){var r=n instanceof hs?Dr(n):new hs(n);if(r.g!="")t&&(r.g=t+"."+r.g),Fd(r,r.m);else{var i=X.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new hs(null);r&&Ud(s,r),t&&(s.g=t),i&&Fd(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Ie(r,n,t),Ie(r,"VER",e.ra),Pc(e,r),r}function pC(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new Me(new uf({ob:n})):new Me(e.va),t.Oa(e.J),t}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function gC(){}M=gC.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Bd(){if(Ko&&!(10<=Number(w3)))throw Error("Environmental error: no available transport.")}Bd.prototype.g=function(e,t){return new Zt(e,t)};function Zt(e,t){tt.call(this),this.g=new sC(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Hl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Hl(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new _a(this)}nt(Zt,tt);Zt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;At(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=fC(e,null,e.Y),pf(e)};Zt.prototype.close=function(){Yy(this.g)};Zt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Uy(e),e=n);t.j.push(new Y3(t.fb++,e)),t.H==3&&pf(t)};Zt.prototype.N=function(){this.g.h=null,delete this.j,Yy(this.g),delete this.g,Zt.$.N.call(this)};function mC(e){Wy.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}nt(mC,Wy);function yC(){qy.call(this),this.status=1}nt(yC,qy);function _a(e){this.g=e}nt(_a,gC);_a.prototype.Ba=function(){ct(this.g,"a")};_a.prototype.Aa=function(e){ct(this.g,new mC(e))};_a.prototype.za=function(e){ct(this.g,new yC)};_a.prototype.ya=function(){ct(this.g,"b")};function l$(){this.blockSize=-1}function $n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt($n,l$);$n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function zp(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}$n.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)zp(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){zp(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){zp(this,r),i=0;break}}this.h=i,this.i+=t};$n.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function pe(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var c$={};function Zy(e){return-128<=e&&128>e?y3(e,function(t){return new pe([t|0],0>t?-1:0)}):new pe([e|0],0>e?-1:0)}function Xn(e){if(isNaN(e)||!isFinite(e))return So;if(0>e)return st(Xn(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Mm;return new pe(t,0)}function vC(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return st(vC(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Xn(Math.pow(t,8)),r=So,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Xn(Math.pow(t,s)),r=r.R(s).add(Xn(o))):(r=r.R(n),r=r.add(Xn(o)))}return r}var Mm=4294967296,So=Zy(0),Lm=Zy(1),bw=Zy(16777216);M=pe.prototype;M.ea=function(){if(un(this))return-st(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Mm+r)*t,t*=Mm}return e};M.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(xr(this))return"0";if(un(this))return"-"+st(this).toString(e);for(var t=Xn(Math.pow(e,6)),n=this,r="";;){var i=Wd(n,t).g;n=Hd(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,xr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};M.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function xr(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function un(e){return e.h==-1}M.X=function(e){return e=Hd(this,e),un(e)?-1:xr(e)?0:1};function st(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new pe(n,~e.h).add(Lm)}M.abs=function(){return un(this)?st(this):this};M.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function Hd(e,t){return e.add(st(t))}M.R=function(e){if(xr(this)||xr(e))return So;if(un(this))return un(e)?st(this).R(st(e)):st(st(this).R(e));if(un(e))return st(this.R(st(e)));if(0>this.X(bw)&&0>e.X(bw))return Xn(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,vu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,vu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,vu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,vu(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new pe(n,0)};function vu(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function $a(e,t){this.g=e,this.h=t}function Wd(e,t){if(xr(t))throw Error("division by zero");if(xr(e))return new $a(So,So);if(un(e))return t=Wd(st(e),t),new $a(st(t.g),st(t.h));if(un(t))return t=Wd(e,st(t)),new $a(st(t.g),t.h);if(30<e.g.length){if(un(e)||un(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Lm,r=t;0>=r.X(e);)n=jw(n),r=jw(r);var i=Bs(n,1),s=Bs(r,1);for(r=Bs(r,2),n=Bs(n,2);!xr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Bs(r,1),n=Bs(n,1)}return t=Hd(e,i.R(t)),new $a(i,t)}for(i=So;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Xn(n),o=s.R(t);un(o)||0<o.X(e);)n-=r,s=Xn(n),o=s.R(t);xr(s)&&(s=Lm),i=i.add(s),e=Hd(e,o)}return new $a(i,e)}M.gb=function(e){return Wd(this,e).h};M.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new pe(n,this.h&e.h)};M.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new pe(n,this.h|e.h)};M.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new pe(n,this.h^e.h)};function jw(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new pe(n,e.h)}function Bs(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new pe(i,e.h)}Bd.prototype.createWebChannel=Bd.prototype.g;Zt.prototype.send=Zt.prototype.u;Zt.prototype.open=Zt.prototype.m;Zt.prototype.close=Zt.prototype.close;of.NO_ERROR=0;of.TIMEOUT=8;of.HTTP_ERROR=6;Lk.COMPLETE="complete";Dk.EventType=kc;kc.OPEN="a";kc.CLOSE="b";kc.ERROR="c";kc.MESSAGE="d";tt.prototype.listen=tt.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;$n.prototype.digest=$n.prototype.l;$n.prototype.reset=$n.prototype.reset;$n.prototype.update=$n.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=Xn;pe.fromString=vC;var u$=function(){return new Bd},d$=function(){return sf()},Bp=of,h$=Lk,f$=Ds,Nw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_u=Dk,p$=Me,g$=$n,To=pe;const Mw="@firebase/firestore";/**
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
 */class Mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
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
 */let wa="10.7.0";/**
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
 */const Is=new Py("@firebase/firestore");function Oa(){return Is.logLevel}function O(e,...t){if(Is.logLevel<=oe.DEBUG){const n=t.map(ev);Is.debug(`Firestore (${wa}): ${e}`,...n)}}function $r(e,...t){if(Is.logLevel<=oe.ERROR){const n=t.map(ev);Is.error(`Firestore (${wa}): ${e}`,...n)}}function Jl(e,...t){if(Is.logLevel<=oe.WARN){const n=t.map(ev);Is.warn(`Firestore (${wa}): ${e}`,...n)}}function ev(e){if(typeof e=="string")return e;try{/**
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
 */function Y(e="Unexpected state"){const t=`FIRESTORE (${wa}) INTERNAL ASSERTION FAILED: `+e;throw $r(t),new Error(t)}function _e(e,t){e||Y()}function Z(e,t){return e}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends dr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ar{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class m${constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class y${getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Mt.UNAUTHENTICATED))}shutdown(){}}class v${constructor(t){this.t=t,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ar,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ar)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new m$(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return _e(t===null||typeof t=="string"),new Mt(t)}}class _${constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class w${constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new _$(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class x${constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class E${constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(_e(typeof n.token=="string"),this.R=n.token,new x$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function I$(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _C{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=I$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function ue(e,t){return e<t?-1:e>t?1:0}function Yo(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Qe{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Qe.fromMillis(Date.now())}static fromDate(t){return Qe.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ue(this.nanoseconds,t.nanoseconds):ue(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(t){this.timestamp=t}static fromTimestamp(t){return new J(t)}static min(){return new J(new Qe(0,0))}static max(){return new J(new Qe(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zl{constructor(t,n,r){n===void 0?n=0:n>t.length&&Y(),r===void 0?r=t.length-n:r>t.length-n&&Y(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Zl.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Zl?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Se extends Zl{construct(t,n,r){return new Se(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const S$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Zl{construct(t,n,r){return new at(t,n,r)}static isValidIdentifier(t){return S$.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class B{constructor(t){this.path=t}static fromPath(t){return new B(Se.fromString(t))}static fromName(t){return new B(Se.fromString(t).popFirst(5))}static empty(){return new B(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Se.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Se.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new Se(t.slice()))}}function T$(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new Ri(i,B.empty(),t)}function k$(e){return new Ri(e.readTime,e.key,-1)}class Ri{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ri(J.min(),B.empty(),-1)}static max(){return new Ri(J.max(),B.empty(),-1)}}function C$(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=B.comparator(e.documentKey,t.documentKey),n!==0?n:ue(e.largestBatchId,t.largestBatchId))}/**
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
 */const A$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class R${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function bc(e){if(e.code!==C.FAILED_PRECONDITION||e.message!==A$)throw e;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):R.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):R.reject(n)}static resolve(t){return new R((n,r)=>{n(t)})}static reject(t){return new R((n,r)=>{r(t)})}static waitFor(t){return new R((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=R.resolve(!1);for(const r of t)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new R((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(d=>{o[u]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(t,n){return new R((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function jc(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class tv{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}tv._e=-1;function gf(e){return e==null}function qd(e){return e===0&&1/e==-1/0}function P$(e){return typeof e=="number"&&Number.isInteger(e)&&!qd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Lw(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function $s(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wC(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class je{constructor(t,n){this.comparator=t,this.root=n||it.EMPTY}insert(t,n){return new je(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new je(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wu(this.root,t,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wu(this.root,t,this.comparator,!0)}}class wu{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new it(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const t=this.left.check();if(t!==this.right.check())throw Y();return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,n,r,i,s){return this}insert(t,n,r){return new it(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(t){this.comparator=t,this.data=new je(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dw(this.data.getIterator())}getIteratorFrom(t){return new Dw(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ut(this.comparator);return n.data=t,n}}class Dw{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new Qt([])}unionWith(t){let n=new ut(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Qt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Yo(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class St{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new xC("Invalid base64 string: "+s):s}}(t);return new St(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new St(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ue(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}St.EMPTY_BYTE_STRING=new St("");const b$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(e){if(_e(!!e),typeof e=="string"){let t=0;const n=b$.exec(e);if(_e(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ue(e.seconds),nanos:Ue(e.nanos)}}function Ue(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ss(e){return typeof e=="string"?St.fromBase64String(e):St.fromUint8Array(e)}/**
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
 */function nv(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rv(e){const t=e.mapValue.fields.__previous_value__;return nv(t)?rv(t):t}function ec(e){const t=Pi(e.mapValue.fields.__local_write_time__.timestampValue);return new Qe(t.seconds,t.nanos)}/**
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
 */class j${constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class tc{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new tc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof tc&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const xu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ts(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?nv(e)?4:N$(e)?9007199254740991:10:Y()}function ar(e,t){if(e===t)return!0;const n=Ts(e);if(n!==Ts(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ec(e).isEqual(ec(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Pi(i.timestampValue),a=Pi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Ss(i.bytesValue).isEqual(Ss(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Ue(i.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ue(i.integerValue)===Ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ue(i.doubleValue),a=Ue(s.doubleValue);return o===a?qd(o)===qd(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Yo(e.arrayValue.values||[],t.arrayValue.values||[],ar);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Lw(o)!==Lw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ar(o[l],a[l])))return!1;return!0}(e,t);default:return Y()}}function nc(e,t){return(e.values||[]).find(n=>ar(n,t))!==void 0}function Xo(e,t){if(e===t)return 0;const n=Ts(e),r=Ts(t);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Ue(s.integerValue||s.doubleValue),l=Ue(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return $w(e.timestampValue,t.timestampValue);case 4:return $w(ec(e),ec(t));case 5:return ue(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Ss(s),l=Ss(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=ue(a[u],l[u]);if(d!==0)return d}return ue(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=ue(Ue(s.latitude),Ue(o.latitude));return a!==0?a:ue(Ue(s.longitude),Ue(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const d=Xo(a[u],l[u]);if(d)return d}return ue(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===xu.mapValue&&o===xu.mapValue)return 0;if(s===xu.mapValue)return 1;if(o===xu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let h=0;h<l.length&&h<d.length;++h){const f=ue(l[h],d[h]);if(f!==0)return f;const p=Xo(a[l[h]],u[d[h]]);if(p!==0)return p}return ue(l.length,d.length)}(e.mapValue,t.mapValue);default:throw Y()}}function $w(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ue(e,t);const n=Pi(e),r=Pi(t),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Jo(e){return Dm(e)}function Dm(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Pi(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ss(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return B.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dm(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dm(n.fields[o])}`;return i+"}"}(e.mapValue):Y()}function Ow(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function $m(e){return!!e&&"integerValue"in e}function iv(e){return!!e&&"arrayValue"in e}function Vw(e){return!!e&&"nullValue"in e}function Uw(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gu(e){return!!e&&"mapValue"in e}function dl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return $s(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=dl(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=dl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function N$(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $t{constructor(t){this.value=t}static empty(){return new $t({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Gu(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=dl(n)}setAll(t){let n=at.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=dl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Gu(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ar(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Gu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){$s(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new $t(dl(this.value))}}function EC(e){const t=[];return $s(e.fields,(n,r)=>{const i=new at([n]);if(Gu(r)){const s=EC(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Qt(t)}/**
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
 */class vt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new vt(t,0,J.min(),J.min(),J.min(),$t.empty(),0)}static newFoundDocument(t,n,r,i){return new vt(t,1,n,J.min(),r,i,0)}static newNoDocument(t,n){return new vt(t,2,n,J.min(),J.min(),$t.empty(),0)}static newUnknownDocument(t,n){return new vt(t,3,n,J.min(),J.min(),$t.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gd{constructor(t,n){this.position=t,this.inclusive=n}}function Fw(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=Xo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function zw(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ar(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class rc{constructor(t,n="asc"){this.field=t,this.dir=n}}function M$(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class IC{}class Be extends IC{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new D$(t,n,r):n==="array-contains"?new V$(t,r):n==="in"?new U$(t,r):n==="not-in"?new F$(t,r):n==="array-contains-any"?new z$(t,r):new Be(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new $$(t,r):new O$(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xo(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(Xo(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends IC{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new On(t,n)}matches(t){return SC(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function SC(e){return e.op==="and"}function TC(e){return L$(e)&&SC(e)}function L$(e){for(const t of e.filters)if(t instanceof On)return!1;return!0}function Om(e){if(e instanceof Be)return e.field.canonicalString()+e.op.toString()+Jo(e.value);if(TC(e))return e.filters.map(t=>Om(t)).join(",");{const t=e.filters.map(n=>Om(n)).join(",");return`${e.op}(${t})`}}function kC(e,t){return e instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&ar(r.value,i.value)}(e,t):e instanceof On?function(r,i){return i instanceof On&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&kC(o,i.filters[a]),!0):!1}(e,t):void Y()}function CC(e){return e instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${Jo(n.value)}`}(e):e instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(CC).join(" ,")+"}"}(e):"Filter"}class D$ extends Be{constructor(t,n,r){super(t,n,r),this.key=B.fromName(r.referenceValue)}matches(t){const n=B.comparator(t.key,this.key);return this.matchesComparison(n)}}class $$ extends Be{constructor(t,n){super(t,"in",n),this.keys=AC("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class O$ extends Be{constructor(t,n){super(t,"not-in",n),this.keys=AC("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function AC(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class V$ extends Be{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return iv(n)&&nc(n.arrayValue,this.value)}}class U$ extends Be{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&nc(this.value.arrayValue,n)}}class F$ extends Be{constructor(t,n){super(t,"not-in",n)}matches(t){if(nc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!nc(this.value.arrayValue,n)}}class z$ extends Be{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!iv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>nc(this.value.arrayValue,r))}}/**
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
 */class B${constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Bw(e,t=null,n=[],r=[],i=null,s=null,o=null){return new B$(e,t,n,r,i,s,o)}function sv(e){const t=Z(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Om(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gf(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Jo(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Jo(r)).join(",")),t.ce=n}return t.ce}function ov(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!M$(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!kC(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!zw(e.startAt,t.startAt)&&zw(e.endAt,t.endAt)}function Vm(e){return B.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class xa{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function H$(e,t,n,r,i,s,o,a){return new xa(e,t,n,r,i,s,o,a)}function mf(e){return new xa(e)}function Hw(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function RC(e){return e.collectionGroup!==null}function hl(e){const t=Z(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(at.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new rc(s,r))}),n.has(at.keyField().canonicalString())||t.le.push(new rc(at.keyField(),r))}return t.le}function nr(e){const t=Z(e);return t.he||(t.he=W$(t,hl(e))),t.he}function W$(e,t){if(e.limitType==="F")return Bw(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new rc(i.field,s)});const n=e.endAt?new Gd(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Gd(e.startAt.position,e.startAt.inclusive):null;return Bw(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Um(e,t){const n=e.filters.concat([t]);return new xa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Qd(e,t,n){return new xa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function yf(e,t){return ov(nr(e),nr(t))&&e.limitType===t.limitType}function PC(e){return`${sv(nr(e))}|lt:${e.limitType}`}function qs(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>CC(i)).join(", ")}]`),gf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Jo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Jo(i)).join(",")),`Target(${r})`}(nr(e))}; limitType=${e.limitType})`}function vf(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of hl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Fw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,hl(r),i)||r.endAt&&!function(o,a,l){const u=Fw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,hl(r),i))}(e,t)}function q$(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function bC(e){return(t,n)=>{let r=!1;for(const i of hl(e)){const s=G$(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function G$(e,t,n){const r=e.field.isKeyField()?B.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Xo(l,u):Y()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Ea{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){$s(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return wC(this.inner)}size(){return this.innerSize}}/**
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
 */const Q$=new je(B.comparator);function Or(){return Q$}const jC=new je(B.comparator);function Ka(...e){let t=jC;for(const n of e)t=t.insert(n.key,n);return t}function NC(e){let t=jC;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function ss(){return fl()}function MC(){return fl()}function fl(){return new Ea(e=>e.toString(),(e,t)=>e.isEqual(t))}const K$=new je(B.comparator),Y$=new ut(B.comparator);function ie(...e){let t=Y$;for(const n of e)t=t.add(n);return t}const X$=new ut(ue);function J$(){return X$}/**
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
 */function LC(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qd(t)?"-0":t}}function DC(e){return{integerValue:""+e}}function Z$(e,t){return P$(t)?DC(t):LC(e,t)}/**
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
 */class _f{constructor(){this._=void 0}}function eO(e,t,n){return e instanceof Kd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&nv(s)&&(s=rv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Zo?OC(e,t):e instanceof ic?VC(e,t):function(i,s){const o=$C(i,s),a=Ww(o)+Ww(i.Ie);return $m(o)&&$m(i.Ie)?DC(a):LC(i.serializer,a)}(e,t)}function tO(e,t,n){return e instanceof Zo?OC(e,t):e instanceof ic?VC(e,t):n}function $C(e,t){return e instanceof Yd?function(r){return $m(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Kd extends _f{}class Zo extends _f{constructor(t){super(),this.elements=t}}function OC(e,t){const n=UC(t);for(const r of e.elements)n.some(i=>ar(i,r))||n.push(r);return{arrayValue:{values:n}}}class ic extends _f{constructor(t){super(),this.elements=t}}function VC(e,t){let n=UC(t);for(const r of e.elements)n=n.filter(i=>!ar(i,r));return{arrayValue:{values:n}}}class Yd extends _f{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Ww(e){return Ue(e.integerValue||e.doubleValue)}function UC(e){return iv(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class nO{constructor(t,n){this.field=t,this.transform=n}}function rO(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Zo&&i instanceof Zo||r instanceof ic&&i instanceof ic?Yo(r.elements,i.elements,ar):r instanceof Yd&&i instanceof Yd?ar(r.Ie,i.Ie):r instanceof Kd&&i instanceof Kd}(e.transform,t.transform)}class iO{constructor(t,n){this.version=t,this.transformResults=n}}class rr{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new rr}static exists(t){return new rr(void 0,t)}static updateTime(t){return new rr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Qu(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class wf{}function FC(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new BC(e.key,rr.none()):new Nc(e.key,e.data,rr.none());{const n=e.data,r=$t.empty();let i=new ut(at.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ui(e.key,r,new Qt(i.toArray()),rr.none())}}function sO(e,t,n){e instanceof Nc?function(i,s,o){const a=i.value.clone(),l=Gw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Ui?function(i,s,o){if(!Qu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Gw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(zC(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function pl(e,t,n,r){return e instanceof Nc?function(s,o,a,l){if(!Qu(s.precondition,o))return a;const u=s.value.clone(),d=Qw(s.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ui?function(s,o,a,l){if(!Qu(s.precondition,o))return a;const u=Qw(s.fieldTransforms,l,o),d=o.data;return d.setAll(zC(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Qu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function oO(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=$C(r.transform,i||null);s!=null&&(n===null&&(n=$t.empty()),n.set(r.field,s))}return n||null}function qw(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Yo(r,i,(s,o)=>rO(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Nc extends wf{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ui extends wf{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zC(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Gw(e,t,n){const r=new Map;_e(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,tO(o,a,n[i]))}return r}function Qw(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,eO(s,o,t))}return r}class BC extends wf{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aO extends wf{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lO{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&sO(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=pl(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=pl(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=MC();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=FC(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ie())}isEqual(t){return this.batchId===t.batchId&&Yo(this.mutations,t.mutations,(n,r)=>qw(n,r))&&Yo(this.baseMutations,t.baseMutations,(n,r)=>qw(n,r))}}class av{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){_e(t.mutations.length===r.length);let i=function(){return K$}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new av(t,n,r,i)}}/**
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
 */let cO=class{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class uO{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Ve,ae;function dO(e){switch(e){default:return Y();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function HC(e){if(e===void 0)return $r("GRPC error has no .code"),C.UNKNOWN;switch(e){case Ve.OK:return C.OK;case Ve.CANCELLED:return C.CANCELLED;case Ve.UNKNOWN:return C.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return C.INTERNAL;case Ve.UNAVAILABLE:return C.UNAVAILABLE;case Ve.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Ve.NOT_FOUND:return C.NOT_FOUND;case Ve.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Ve.ABORTED:return C.ABORTED;case Ve.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Ve.DATA_LOSS:return C.DATA_LOSS;default:return Y()}}(ae=Ve||(Ve={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hO(){return new TextEncoder}/**
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
 */const fO=new To([4294967295,4294967295],0);function Kw(e){const t=hO().encode(e),n=new g$;return n.update(t),new Uint8Array(n.digest())}function Yw(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new To([n,r],0),new To([i,s],0)]}class lv{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ya(`Invalid padding: ${n}`);if(r<0)throw new Ya(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ya(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ya(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=To.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(To.fromNumber(r)));return i.compare(fO)===1&&(i=new To([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Kw(t),[r,i]=Yw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new lv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Kw(t),[r,i]=Yw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xf{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Mc.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new xf(J.min(),i,new je(ue),Or(),ie())}}class Mc{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Mc(r,n,ie(),ie(),ie())}}/**
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
 */class Ku{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class WC{constructor(t,n){this.targetId=t,this.fe=n}}class qC{constructor(t,n,r=St.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xw{constructor(){this.ge=0,this.pe=Zw(),this.ye=St.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=ie(),n=ie(),r=ie();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Mc(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Zw()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,_e(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class pO{constructor(t){this.Le=t,this.ke=new Map,this.qe=Or(),this.Qe=Jw(),this.Ke=new je(ue)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:Y()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Vm(s))if(r===0){const o=new B(s.path);this.We(n,o,vt.newNoDocument(o,J.min()))}else _e(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ss(r).toUint8Array()}catch(l){if(l instanceof xC)return Jl("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new lv(o,i,s)}catch(l){return Jl(l instanceof Ya?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Vm(a.target)){const l=new B(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,vt.newNoDocument(l,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ie();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new xf(t,n,this.Ke,this.qe,r);return this.qe=Or(),this.Qe=Jw(),this.Ke=new je(ue),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Xw,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new ut(ue),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||O("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Xw),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Jw(){return new je(B.comparator)}function Zw(){return new je(B.comparator)}const gO={asc:"ASCENDING",desc:"DESCENDING"},mO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yO={and:"AND",or:"OR"};class vO{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Fm(e,t){return e.useProto3Json||gf(t)?t:{value:t}}function Xd(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function GC(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function _O(e,t){return Xd(e,t.toTimestamp())}function ir(e){return _e(!!e),J.fromTimestamp(function(n){const r=Pi(n);return new Qe(r.seconds,r.nanos)}(e))}function cv(e,t){return function(r){return new Se(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function QC(e){const t=Se.fromString(e);return _e(JC(t)),t}function zm(e,t){return cv(e.databaseId,t.path)}function Hp(e,t){const n=QC(t);if(n.get(1)!==e.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new B(KC(n))}function Bm(e,t){return cv(e.databaseId,t)}function wO(e){const t=QC(e);return t.length===4?Se.emptyPath():KC(t)}function Hm(e){return new Se(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function KC(e){return _e(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ex(e,t,n){return{name:zm(e,t),fields:n.value.mapValue.fields}}function xO(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Y()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(_e(d===void 0||typeof d=="string"),St.fromBase64String(d||"")):(_e(d===void 0||d instanceof Uint8Array),St.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const d=u.code===void 0?C.UNKNOWN:HC(u.code);return new L(d,u.message||"")}(o);n=new qC(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hp(e,r.document.name),s=ir(r.document.updateTime),o=r.document.createTime?ir(r.document.createTime):J.min(),a=new $t({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(i,s,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Ku(u,d,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Hp(e,r.document),s=r.readTime?ir(r.readTime):J.min(),o=vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ku([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Hp(e,r.document),s=r.removedTargetIds||[];n=new Ku([],s,i,null)}else{if(!("filter"in t))return Y();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new uO(i,s),a=r.targetId;n=new WC(a,o)}}return n}function EO(e,t){let n;if(t instanceof Nc)n={update:ex(e,t.key,t.value)};else if(t instanceof BC)n={delete:zm(e,t.key)};else if(t instanceof Ui)n={update:ex(e,t.key,t.data),updateMask:bO(t.fieldMask)};else{if(!(t instanceof aO))return Y();n={verify:zm(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Kd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ic)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yd)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Y()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_O(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(e,t.precondition)),n}function IO(e,t){return e&&e.length>0?(_e(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?ir(i.updateTime):ir(s);return o.isEqual(J.min())&&(o=ir(s)),new iO(o,i.transformResults||[])}(n,t))):[]}function SO(e,t){return{documents:[Bm(e,t.path)]}}function TO(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Bm(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Bm(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return XC(On.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Gs(h.field),direction:AO(h.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Fm(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function kO(e){let t=wO(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let s=[];n.where&&(s=function(h){const f=YC(h);return f instanceof On&&TC(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(m){return new rc(Qs(m.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,gf(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,p=h.values||[];return new Gd(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,p=h.values||[];return new Gd(p,f)}(n.endAt)),H$(t,i,o,s,a,"F",l,u)}function CO(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function YC(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qs(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qs(n.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(e):e.fieldFilter!==void 0?function(n){return Be.create(Qs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>YC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(e):Y()}function AO(e){return gO[e]}function RO(e){return mO[e]}function PO(e){return yO[e]}function Gs(e){return{fieldPath:e.canonicalString()}}function Qs(e){return at.fromServerFormat(e.fieldPath)}function XC(e){return e instanceof Be?function(n){if(n.op==="=="){if(Uw(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NAN"}};if(Vw(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Uw(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NAN"}};if(Vw(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(n.field),op:RO(n.op),value:n.value}}}(e):e instanceof On?function(n){const r=n.getFilters().map(i=>XC(i));return r.length===1?r[0]:{compositeFilter:{op:PO(n.op),filters:r}}}(e):Y()}function bO(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function JC(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class ai{constructor(t,n,r,i,s=J.min(),o=J.min(),a=St.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new ai(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class jO{constructor(t){this.ut=t}}function NO(e){const t=kO({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Qd(t,t.limit,"L"):t}/**
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
 */class MO{constructor(){this.on=new LO}addToCollectionParentIndex(t,n){return this.on.add(n),R.resolve()}getCollectionParents(t,n){return R.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return R.resolve()}deleteFieldIndex(t,n){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,n){return R.resolve()}getDocumentsMatchingTarget(t,n){return R.resolve(null)}getIndexType(t,n){return R.resolve(0)}getFieldIndexes(t,n){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,n){return R.resolve(Ri.min())}getMinOffsetFromCollectionGroup(t,n){return R.resolve(Ri.min())}updateCollectionGroup(t,n,r){return R.resolve()}updateIndexEntries(t,n){return R.resolve()}}class LO{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new ut(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ut(Se.comparator)).toArray()}}/**
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
 */class ea{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new ea(0)}static Nn(){return new ea(-1)}}/**
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
 */class DO{constructor(){this.changes=new Ea(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class $O{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class OO{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&pl(r.mutation,i,Qt.empty(),Qe.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ie()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ie()){const i=ss();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Ka();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=ss();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ie()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Or();const o=fl(),a=function(){return fl()}();return n.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof Ui)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),pl(d.mutation,u,d.mutation.getFieldMask(),Qe.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var h;return a.set(u,new $O(d,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=fl();let i=new je((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Qt.empty();d=a.applyToLocalView(u,d),r.set(l,d);const h=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,h=MC();d.forEach(f=>{if(!s.has(f)){const p=FC(n.get(f),r.get(f));p!==null&&h.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):RC(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):R.resolve(ss());let a=-1,l=s;return o.next(u=>R.forEach(u,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(d)?R.resolve():this.remoteDocumentCache.getEntry(t,d).next(f=>{l=l.insert(d,f)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,ie())).next(d=>({batchId:a,changes:NC(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new B(n)).next(r=>{let i=Ka();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=Ka();return this.indexManager.getCollectionParents(t,s).next(a=>R.forEach(a,l=>{const u=function(h,f){return new xa(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(d=>{d.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,vt.newInvalidDocument(d)))});let a=Ka();return o.forEach((l,u)=>{const d=s.get(l);d!==void 0&&pl(d.mutation,u,Qt.empty(),Qe.now()),vf(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class VO{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return R.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ir(i.createTime)}}(n)),R.resolve()}getNamedQuery(t,n){return R.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:NO(i.bundledQuery),readTime:ir(i.readTime)}}(n)),R.resolve()}}/**
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
 */class UO{constructor(){this.overlays=new je(B.comparator),this.lr=new Map}getOverlay(t,n){return R.resolve(this.overlays.get(n))}getOverlays(t,n){const r=ss();return R.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.lt(t,n,s)}),R.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),R.resolve()}getOverlaysForCollection(t,n,r){const i=ss(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new je((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=ss(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=ss(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return R.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cO(n,r));let s=this.lr.get(n);s===void 0&&(s=ie(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class uv{constructor(){this.hr=new ut(Ye.Pr),this.Ir=new ut(Ye.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new Ye(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new Ye(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new B(new Se([])),r=new Ye(n,t),i=new Ye(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new B(new Se([])),r=new Ye(n,t),i=new Ye(n,t+1);let s=ie();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Ye(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ye{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return B.comparator(t.key,n.key)||ue(t.gr,n.gr)}static Tr(t,n){return ue(t.gr,n.gr)||B.comparator(t.key,n.key)}}/**
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
 */class FO{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ut(Ye.Pr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Ye(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(t,n){return R.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new ut(ue);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),R.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new B(s),0);let a=new ut(ue);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),R.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){_e(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return R.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new Ye(n,0),i=this.yr.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zO{constructor(t){this.Cr=t,this.docs=function(){return new je(B.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(t,n){let r=Or();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():vt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Or();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||C$(k$(d),r)<=0||(i.has(d.key)||vf(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(t,n,r,i){Y()}vr(t,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new BO(this)}getSize(t){return R.resolve(this.size)}}class BO extends DO{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),R.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
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
 */class HO{constructor(t){this.persistence=t,this.Fr=new Ea(n=>sv(n),ov),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Mr=0,this.Or=new uv,this.targetCount=0,this.Nr=ea.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),R.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new ea(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,R.resolve()}updateTargetData(t,n){return this.kn(n),R.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return R.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),R.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),R.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return R.resolve(r)}containsKey(t,n){return R.resolve(this.Or.containsKey(n))}}/**
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
 */class WO{constructor(t,n){this.Br={},this.overlays={},this.Lr=new tv(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new HO(this),this.indexManager=new MO,this.remoteDocumentCache=function(i){return new zO(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new jO(n),this.Kr=new VO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new UO,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new FO(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){O("MemoryPersistence","Starting transaction:",t);const i=new qO(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class qO extends R${constructor(t){super(),this.currentSequenceNumber=t}}class dv{constructor(t){this.persistence=t,this.Gr=new uv,this.zr=null}static jr(t){return new dv(t)}get Hr(){if(this.zr)return this.zr;throw Y()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),R.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),R.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Hr,r=>{const i=B.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return R.or([()=>R.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
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
 */class hv{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hv(t,n.fromCache,r,i)}}/**
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
 */class GO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class QO{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.zi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new GO;return this.Hi(t,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>s.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(Oa()<=oe.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),R.resolve()):(Oa()<=oe.DEBUG&&O("QueryEngine","Query:",qs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Oa()<=oe.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,nr(n))):R.resolve())}zi(t,n){if(Hw(n))return R.resolve(null);let r=nr(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qd(n,null,"F"),r=nr(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=ie(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(t,Qd(n,null,"F")):this.Xi(t,u,n,l)}))})))}ji(t,n,r,i){return Hw(n)||i.isEqual(J.min())?R.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?R.resolve(null):(Oa()<=oe.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qs(n)),this.Xi(t,o,n,T$(i,-1)).next(a=>a))})}Yi(t,n){let r=new ut(bC(t));return n.forEach((i,s)=>{vf(t,s)&&(r=r.add(s))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,n,r){return Oa()<=oe.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",qs(n)),this.Gi.getDocumentsMatchingQuery(t,n,Ri.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class KO{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new je(ue),this.ns=new Ea(s=>sv(s),ov),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new OO(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function YO(e,t,n,r){return new KO(e,t,n,r)}async function ZC(e,t){const n=Z(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ie();for(const u of i){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function XO(e,t){const n=Z(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const h=u.batch,f=h.keys();let p=R.resolve();return f.forEach(m=>{p=p.next(()=>d.getEntry(l,m)).next(v=>{const w=u.docVersions.get(m);_e(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),d.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function eA(e){const t=Z(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function JO(e,t){const n=Z(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];t.targetChanges.forEach((d,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(s,d.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,d.addedDocuments,h)));let p=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?p=p.withResumeToken(St.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(d.resumeToken,r)),i=i.insert(h,p),function(v,w,g){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,p,d)&&a.push(n.qr.updateTargetData(s,p))});let l=Or(),u=ie();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(ZO(s,o,t.documentUpdates).next(d=>{l=d.us,u=d.cs})),!r.isEqual(J.min())){const d=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function ZO(e,t,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Or();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function e5(e,t){const n=Z(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function t5(e,t){const n=Z(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,t).next(s=>s?(i=s,R.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new ai(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function Wm(e,t,n){const r=Z(e),i=r.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!jc(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function tx(e,t,n){const r=Z(e);let i=J.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const h=Z(l),f=h.ns.get(d);return f!==void 0?R.resolve(h.ts.get(f)):h.qr.getTargetData(u,d)}(r,o,nr(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?i:J.min(),n?s:ie())).next(a=>(n5(r,q$(t),a),{documents:a,ls:s})))}function n5(e,t,n){let r=e.rs.get(t)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.rs.set(t,r)}class nx{constructor(){this.activeTargetIds=J$()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class r5{constructor(){this.eo=new nx,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new nx,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class i5{ro(t){}shutdown(){}}/**
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
 */class rx{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Eu=null;function Wp(){return Eu===null?Eu=function(){return 268435456+Math.round(2147483648*Math.random())}():Eu++,"0x"+Eu.toString(16)}/**
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
 */const s5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class o5{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
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
 */const gt="WebChannelConnection";class a5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Wp(),l=this.So(n,r);O("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(d=>(O("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Jl("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=s5[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const s=Wp();return new Promise((o,a)=>{const l=new p$;l.setWithCredentials(!0),l.listenOnce(h$.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Bp.NO_ERROR:const d=l.getResponseJson();O(gt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(d)),o(d);break;case Bp.TIMEOUT:O(gt,`RPC '${t}' ${s} timed out`),a(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case Bp.HTTP_ERROR:const h=l.getStatus();if(O(gt,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const m=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(g)>=0?g:C.UNKNOWN}(p.status);a(new L(m,p.message))}else a(new L(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(C.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{O(gt,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);O(gt,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(t,n,r){const i=Wp(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=u$(),a=d$(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");O(gt,`Creating RPC '${t}' stream ${i}: ${d}`,l);const h=o.createWebChannel(d,l);let f=!1,p=!1;const m=new o5({co:w=>{p?O(gt,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(f||(O(gt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),O(gt,`RPC '${t}' stream ${i} sending:`,w),h.send(w))},lo:()=>h.close()}),v=(w,g,y)=>{w.listen(g,_=>{try{y(_)}catch(E){setTimeout(()=>{throw E},0)}})};return v(h,_u.EventType.OPEN,()=>{p||O(gt,`RPC '${t}' stream ${i} transport opened.`)}),v(h,_u.EventType.CLOSE,()=>{p||(p=!0,O(gt,`RPC '${t}' stream ${i} transport closed`),m.Ro())}),v(h,_u.EventType.ERROR,w=>{p||(p=!0,Jl(gt,`RPC '${t}' stream ${i} transport errored:`,w),m.Ro(new L(C.UNAVAILABLE,"The operation could not be completed")))}),v(h,_u.EventType.MESSAGE,w=>{var g;if(!p){const y=w.data[0];_e(!!y);const _=y,E=_.error||((g=_[0])===null||g===void 0?void 0:g.error);if(E){O(gt,`RPC '${t}' stream ${i} received error:`,E);const T=E.status;let k=function(z){const H=Ve[z];if(H!==void 0)return HC(H)}(T),I=E.message;k===void 0&&(k=C.INTERNAL,I="Unknown error status: "+T+" with message "+E.message),p=!0,m.Ro(new L(k,I)),h.close()}else O(gt,`RPC '${t}' stream ${i} received:`,y),m.Vo(y)}}),v(a,f$.STAT_EVENT,w=>{w.stat===Nw.PROXY?O(gt,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===Nw.NOPROXY&&O(gt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function qp(){return typeof document<"u"?document:null}/**
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
 */function Ef(e){return new vO(e,!0)}/**
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
 */class tA{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class nA{constructor(t,n,r,i,s,o,a,l){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new tA(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?($r(n.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new L(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return O("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class l5 extends nA{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=xO(this.serializer,t),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?ir(o.readTime):J.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=Hm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Vm(l)?{documents:SO(s,l)}:{query:TO(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GC(s,o.resumeToken);const u=Fm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Xd(s,o.snapshotVersion.toTimestamp());const u=Fm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=CO(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=Hm(this.serializer),n.removeTarget=t,this.e_(n)}}class c5 extends nA{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(_e(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=IO(t.writeResults,t.commitTime),r=ir(t.commitTime);return this.listener.I_(r,n)}return _e(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Hm(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>EO(this.serializer,r))};this.e_(n)}}/**
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
 */class u5 extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(C.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(C.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class d5{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?($r(n),this.f_=!1):O("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class h5{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Os(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Z(l);u.C_.add(4),await Lc(u),u.M_.set("Unknown"),u.C_.delete(4),await If(u)}(this))})}),this.M_=new d5(r,i)}}async function If(e){if(Os(e))for(const t of e.v_)await t(!0)}async function Lc(e){for(const t of e.v_)await t(!1)}function rA(e,t){const n=Z(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),gv(n)?pv(n):Ia(n).Ho()&&fv(n,t))}function iA(e,t){const n=Z(e),r=Ia(n);n.D_.delete(t),r.Ho()&&sA(n,t),n.D_.size===0&&(r.Ho()?r.Zo():Os(n)&&n.M_.set("Unknown"))}function fv(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(J.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ia(e).u_(t)}function sA(e,t){e.x_.Oe(t),Ia(e).c_(t)}function pv(e){e.x_=new pO({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ia(e).start(),e.M_.g_()}function gv(e){return Os(e)&&!Ia(e).jo()&&e.D_.size>0}function Os(e){return Z(e).C_.size===0}function oA(e){e.x_=void 0}async function f5(e){e.D_.forEach((t,n)=>{fv(e,t)})}async function p5(e,t){oA(e),gv(e)?(e.M_.w_(t),pv(e)):e.M_.set("Unknown")}async function g5(e,t,n){if(e.M_.set("Online"),t instanceof qC&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(e,t)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Jd(e,r)}else if(t instanceof Ku?e.x_.$e(t):t instanceof WC?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(J.min()))try{const r=await eA(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.D_.get(u);d&&s.D_.set(u,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const d=s.D_.get(l);if(!d)return;s.D_.set(l,d.withResumeToken(St.EMPTY_BYTE_STRING,d.snapshotVersion)),sA(s,l);const h=new ai(d.target,l,u,d.sequenceNumber);fv(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Jd(e,r)}}async function Jd(e,t,n){if(!jc(t))throw t;e.C_.add(1),await Lc(e),e.M_.set("Offline"),n||(n=()=>eA(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await If(e)})}function aA(e,t){return t().catch(n=>Jd(e,n,t))}async function Sf(e){const t=Z(e),n=bi(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;m5(t);)try{const i=await e5(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,y5(t,i)}catch(i){await Jd(t,i)}lA(t)&&cA(t)}function m5(e){return Os(e)&&e.b_.length<10}function y5(e,t){e.b_.push(t);const n=bi(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function lA(e){return Os(e)&&!bi(e).jo()&&e.b_.length>0}function cA(e){bi(e).start()}async function v5(e){bi(e).E_()}async function _5(e){const t=bi(e);for(const n of e.b_)t.P_(n.mutations)}async function w5(e,t,n){const r=e.b_.shift(),i=av.from(r,t,n);await aA(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Sf(e)}async function x5(e,t){t&&bi(e).h_&&await async function(r,i){if(function(o){return dO(o)&&o!==C.ABORTED}(i.code)){const s=r.b_.shift();bi(r).Yo(),await aA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Sf(r)}}(e,t),lA(e)&&cA(e)}async function ix(e,t){const n=Z(e);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Os(n);n.C_.add(3),await Lc(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await If(n)}async function E5(e,t){const n=Z(e);t?(n.C_.delete(2),await If(n)):t||(n.C_.add(2),await Lc(n),n.M_.set("Unknown"))}function Ia(e){return e.O_||(e.O_=function(n,r,i){const s=Z(n);return s.A_(),new l5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:f5.bind(null,e),Io:p5.bind(null,e),a_:g5.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),gv(e)?pv(e):e.M_.set("Unknown")):(await e.O_.stop(),oA(e))})),e.O_}function bi(e){return e.N_||(e.N_=function(n,r,i){const s=Z(n);return s.A_(),new c5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:v5.bind(null,e),Io:x5.bind(null,e),T_:_5.bind(null,e),I_:w5.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Sf(e)):(await e.N_.stop(),e.b_.length>0&&(O("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
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
 */class mv{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new mv(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yv(e,t){if($r("AsyncQueue",`${t}: ${e}`),jc(e))return new L(C.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class ko{constructor(t){this.comparator=t?(n,r)=>t(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=Ka(),this.sortedSet=new je(this.comparator)}static emptySet(t){return new ko(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ko)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class sx{constructor(){this.B_=new je(B.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):Y():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ta{constructor(t,n,r,i,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ta(t,n,ko.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yf(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class I5{constructor(){this.k_=void 0,this.listeners=[]}}class S5{constructor(){this.queries=new Ea(t=>PC(t),yf),this.onlineState="Unknown",this.q_=new Set}}async function vv(e,t){const n=Z(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new I5),i)try{s.k_=await n.onListen(r)}catch(o){const a=yv(o,`Initialization of query '${qs(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.Q_(n.onlineState),s.k_&&t.K_(s.k_)&&wv(n)}async function _v(e,t){const n=Z(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function T5(e,t){const n=Z(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&wv(n)}function k5(e,t,n){const r=Z(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function wv(e){e.q_.forEach(t=>{t.next()})}class xv{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ta(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=ta.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
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
 */class uA{constructor(t){this.key=t}}class dA{constructor(t){this.key=t}}class C5{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ie(),this.mutatedKeys=ie(),this._a=bC(t),this.aa=new ko(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new sx,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,h)=>{const f=i.get(d),p=vf(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;f&&p?f.data.isEqual(p.data)?m!==v&&(r.track({type:3,doc:p}),w=!0):this.ha(f,p)||(r.track({type:2,doc:p}),w=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),w=!0):f&&!p&&(r.track({type:1,doc:f}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=v?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const o=t.la.L_();o.sort((d,h)=>function(p,m){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return v(p)-v(m)}(d.type,h.type)||this._a(d.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new ta(this.query,t.aa,s,o,t.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new sx,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=ie(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new dA(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new uA(r))}),n}da(t){this.ia=t.ls,this.oa=ie();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return ta.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class A5{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class R5{constructor(t){this.key=t,this.Ra=!1}}class P5{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ea(a=>PC(a),yf),this.fa=new Map,this.ga=new Set,this.pa=new je(B.comparator),this.ya=new Map,this.wa=new uv,this.Sa={},this.ba=new Map,this.Da=ea.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function b5(e,t){const n=F5(e);let r,i;const s=n.ma.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await t5(n.localStore,nr(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await j5(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&rA(n.remoteStore,o)}return i}async function j5(e,t,n,r,i){e.va=(h,f,p)=>async function(v,w,g,y){let _=w.view.ca(g);_.Zi&&(_=await tx(v.localStore,w.query,!1).then(({documents:I})=>w.view.ca(I,_)));const E=y&&y.targetChanges.get(w.targetId),T=y&&y.targetMismatches.get(w.targetId)!=null,k=w.view.applyChanges(_,v.isPrimaryClient,E,T);return ax(v,w.targetId,k.Ta),k.snapshot}(e,h,f,p);const s=await tx(e.localStore,t,!0),o=new C5(t,s.ls),a=o.ca(s.documents),l=Mc.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,l);ax(e,n,u.Ta);const d=new A5(t,n,o);return e.ma.set(t,d),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),u.snapshot}async function N5(e,t){const n=Z(e),r=n.ma.get(t),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!yf(s,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),iA(n.remoteStore,r.targetId),qm(n,r.targetId)}).catch(bc)):(qm(n,r.targetId),await Wm(n.localStore,r.targetId,!0))}async function M5(e,t,n){const r=z5(e);try{const i=await function(o,a){const l=Z(o),u=Qe.now(),d=a.reduce((p,m)=>p.add(m.key),ie());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=Or(),v=ie();return l.ss.getEntries(p,d).next(w=>{m=w,m.forEach((g,y)=>{y.isValidDocument()||(v=v.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,m)).next(w=>{h=w;const g=[];for(const y of a){const _=oO(y,h.get(y.key).overlayedDocument);_!=null&&g.push(new Ui(y.key,_,EC(_.value.mapValue),rr.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(w=>{f=w;const g=w.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(p,w.batchId,g)})}).then(()=>({batchId:f.batchId,changes:NC(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new je(ue)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Dc(r,i.changes),await Sf(r.remoteStore)}catch(i){const s=yv(i,"Failed to persist write");n.reject(s)}}async function hA(e,t){const n=Z(e);try{const r=await JO(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?_e(o.Ra):i.removedDocuments.size>0&&(_e(o.Ra),o.Ra=!1))}),await Dc(n,r,t)}catch(r){await bc(r)}}function ox(e,t,n){const r=Z(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach((d,h)=>{for(const f of h.listeners)f.Q_(a)&&(u=!0)}),u&&wv(l)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function L5(e,t,n){const r=Z(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new je(B.comparator);o=o.insert(s,vt.newNoDocument(s,J.min()));const a=ie().add(s),l=new xf(J.min(),new Map,new je(ue),o,a);await hA(r,l),r.pa=r.pa.remove(s),r.ya.delete(t),Ev(r)}else await Wm(r.localStore,t,!1).then(()=>qm(r,t,n)).catch(bc)}async function D5(e,t){const n=Z(e),r=t.batch.batchId;try{const i=await XO(n.localStore,t);pA(n,r,null),fA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Dc(n,i)}catch(i){await bc(i)}}async function $5(e,t,n){const r=Z(e);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(_e(h!==null),d=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,t);pA(r,t,n),fA(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Dc(r,i)}catch(i){await bc(i)}}function fA(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function pA(e,t,n){const r=Z(e);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function qm(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||gA(e,r)})}function gA(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(iA(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),Ev(e))}function ax(e,t,n){for(const r of n)r instanceof uA?(e.wa.addReference(r.key,t),O5(e,r)):r instanceof dA?(O("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||gA(e,r.key)):Y()}function O5(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(O("SyncEngine","New document in limbo: "+n),e.ga.add(r),Ev(e))}function Ev(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new B(Se.fromString(t)),r=e.Da.next();e.ya.set(r,new R5(n)),e.pa=e.pa.insert(n,r),rA(e.remoteStore,new ai(nr(mf(n.path)),r,"TargetPurposeLimboResolution",tv._e))}}async function Dc(e,t,n){const r=Z(e),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const d=hv.Qi(l.targetId,u);s.push(d)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const d=Z(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(u,f=>R.forEach(f.ki,p=>d.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>R.forEach(f.qi,p=>d.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!jc(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const p=d.ts.get(f),m=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(m);d.ts=d.ts.insert(f,v)}}}(r.localStore,s))}async function V5(e,t){const n=Z(e);if(!n.currentUser.isEqual(t)){O("SyncEngine","User change. New user:",t.toKey());const r=await ZC(n.localStore,t);n.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new L(C.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Dc(n,r._s)}}function U5(e,t){const n=Z(e),r=n.ya.get(t);if(r&&r.Ra)return ie().add(r.key);{let i=ie();const s=n.fa.get(t);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function F5(e){const t=Z(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=hA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=U5.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=L5.bind(null,t),t.Va.a_=T5.bind(null,t.eventManager),t.Va.Fa=k5.bind(null,t.eventManager),t}function z5(e){const t=Z(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=D5.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$5.bind(null,t),t}class lx{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ef(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return YO(this.persistence,new QO,t.initialUser,this.serializer)}createPersistence(t){return new WO(dv.jr,this.serializer)}createSharedClientState(t){return new r5}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class B5{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ox(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=V5.bind(null,this.syncEngine),await E5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new S5}()}createDatastore(t){const n=Ef(t.databaseInfo.databaseId),r=function(s){return new a5(s)}(t.databaseInfo);return function(s,o,a,l){return new u5(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new h5(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ox(this.syncEngine,n,0),function(){return rx.D()?new rx:new i5}())}createSyncEngine(t,n){return function(i,s,o,a,l,u,d){const h=new P5(i,s,o,a,l,u);return d&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);O("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Lc(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Iv{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):$r("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class H5{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Mt.UNAUTHENTICATED,this.clientId=_C.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=yv(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Gp(e,t){e.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ZC(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function cx(e,t){e.asyncQueue.verifyOperationInProgress();const n=await q5(e);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>ix(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>ix(t.remoteStore,s)),e._onlineComponents=t}function W5(e){return e.name==="FirebaseError"?e.code===C.FAILED_PRECONDITION||e.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function q5(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gp(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!W5(n))throw n;Jl("Error using user provided cache. Falling back to memory cache: "+n),await Gp(e,new lx)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Gp(e,new lx);return e._offlineComponents}async function mA(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await cx(e,e._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await cx(e,new B5))),e._onlineComponents}function G5(e){return mA(e).then(t=>t.syncEngine)}async function Zd(e){const t=await mA(e),n=t.eventManager;return n.onListen=b5.bind(null,t.syncEngine),n.onUnlisten=N5.bind(null,t.syncEngine),n}function Q5(e,t,n={}){const r=new Ar;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new Iv({next:f=>{o.enqueueAndForget(()=>_v(s,h));const p=f.docs.has(a);!p&&f.fromCache?u.reject(new L(C.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&l&&l.source==="server"?u.reject(new L(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new xv(mf(a.path),d,{includeMetadataChanges:!0,J_:!0});return vv(s,h)}(await Zd(e),e.asyncQueue,t,n,r)),r.promise}function K5(e,t,n={}){const r=new Ar;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new Iv({next:f=>{o.enqueueAndForget(()=>_v(s,h)),f.fromCache&&l.source==="server"?u.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new xv(a,d,{includeMetadataChanges:!0,J_:!0});return vv(s,h)}(await Zd(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function yA(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const ux=new Map;/**
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
 */function vA(e,t,n){if(!n)throw new L(C.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Y5(e,t,n,r){if(t===!0&&r===!0)throw new L(C.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function dx(e){if(!B.isDocumentKey(e))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function hx(e){if(B.isDocumentKey(e))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Tf(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Y()}function bn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tf(e);throw new L(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function X5(e,t){if(t<=0)throw new L(C.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */class fx{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Y5("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yA((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Sv{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fx({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fx(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new y$;switch(r.type){case"firstParty":return new w$(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ux.get(n);r&&(O("ComponentProvider","Removing Datastore"),ux.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Hr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Hr(this.firestore,t,this._query)}}class xt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xt(this.firestore,t,this._key)}}class xi extends Hr{constructor(t,n,r){super(t,n,mf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xt(this.firestore,null,new B(t))}withConverter(t){return new xi(this.firestore,t,this._path)}}function px(e,t,...n){if(e=We(e),vA("collection","path",t),e instanceof Sv){const r=Se.fromString(t,...n);return hx(r),new xi(e,null,r)}{if(!(e instanceof xt||e instanceof xi))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Se.fromString(t,...n));return hx(r),new xi(e.firestore,null,r)}}function Yu(e,t,...n){if(e=We(e),arguments.length===1&&(t=_C.newId()),vA("doc","path",t),e instanceof Sv){const r=Se.fromString(t,...n);return dx(r),new xt(e,null,new B(r))}{if(!(e instanceof xt||e instanceof xi))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Se.fromString(t,...n));return dx(r),new xt(e.firestore,e instanceof xi?e.converter:null,new B(r))}}/**
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
 */class J5{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new tA(this,"async_queue_retry"),this.iu=()=>{const n=qp();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=qp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=qp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Ar;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!jc(t))throw t;O("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $r("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=mv.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&Y()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}function gx(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class ks extends Sv{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new J5}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_A(this),this._firestoreClient.terminate()}}function Z5(e,t,n){n||(n="(default)");const r=Xh(e,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(zl(s,t))return i;throw new L(C.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new L(C.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:n})}function kf(e){return e._firestoreClient||_A(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function _A(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,d){return new j$(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,yA(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new H5(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class na{constructor(t){this._byteString=t}static fromBase64String(t){try{return new na(St.fromBase64String(t))}catch(n){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new na(St.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Cf{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Af{constructor(t){this._methodName=t}}/**
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
 */class Tv{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ue(this._lat,t._lat)||ue(this._long,t._long)}}/**
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
 */const eV=/^__.*__$/;class tV{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Ui(t,this.data,this.fieldMask,n,this.fieldTransforms):new Nc(t,this.data,n,this.fieldTransforms)}}class wA{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Ui(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function xA(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Rf{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Rf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return eh(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(xA(this.Iu)&&eV.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class nV{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ef(t)}pu(t,n,r,i=!1){return new Rf({Iu:t,methodName:n,gu:r,path:at.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kv(e){const t=e._freezeSettings(),n=Ef(e._databaseId);return new nV(e._databaseId,!!t.ignoreUndefinedProperties,n)}function rV(e,t,n,r,i,s={}){const o=e.pu(s.merge||s.mergeFields?2:0,t,n,i);Cv("Data must be an object, but it was:",o,r);const a=EA(r,o);let l,u;if(s.merge)l=new Qt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const f=Gm(t,h,n);if(!o.contains(f))throw new L(C.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);SA(d,f)||d.push(f)}l=new Qt(d),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new tV(new $t(a),l,u)}class Pf extends Af{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Pf}}function iV(e,t,n){return new Rf({Iu:3,gu:t.settings.gu,methodName:e._methodName,du:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class sV extends Af{constructor(t,n){super(t),this.yu=n}_toFieldTransform(t){const n=iV(this,t,!0),r=this.yu.map(s=>Sa(s,n)),i=new Zo(r);return new nO(t.path,i)}isEqual(t){return this===t}}function oV(e,t,n,r){const i=e.pu(1,t,n);Cv("Data must be an object, but it was:",i,r);const s=[],o=$t.empty();$s(r,(l,u)=>{const d=Av(t,l,n);u=We(u);const h=i.Ru(d);if(u instanceof Pf)s.push(d);else{const f=Sa(u,h);f!=null&&(s.push(d),o.set(d,f))}});const a=new Qt(s);return new wA(o,a,i.fieldTransforms)}function aV(e,t,n,r,i,s){const o=e.pu(1,t,n),a=[Gm(t,r,n)],l=[i];if(s.length%2!=0)throw new L(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Gm(t,s[f])),l.push(s[f+1]);const u=[],d=$t.empty();for(let f=a.length-1;f>=0;--f)if(!SA(u,a[f])){const p=a[f];let m=l[f];m=We(m);const v=o.Ru(p);if(m instanceof Pf)u.push(p);else{const w=Sa(m,v);w!=null&&(u.push(p),d.set(p,w))}}const h=new Qt(u);return new wA(d,h,o.fieldTransforms)}function lV(e,t,n,r=!1){return Sa(n,e.pu(r?4:3,t))}function Sa(e,t){if(IA(e=We(e)))return Cv("Unsupported field value:",t,e),EA(e,t);if(e instanceof Af)return function(r,i){if(!xA(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Sa(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Z$(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Qe.fromDate(r);return{timestampValue:Xd(i.serializer,s)}}if(r instanceof Qe){const s=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xd(i.serializer,s)}}if(r instanceof Tv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof na)return{bytesValue:GC(i.serializer,r._byteString)};if(r instanceof xt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:cv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Tf(r)}`)}(e,t)}function EA(e,t){const n={};return wC(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$s(e,(r,i)=>{const s=Sa(i,t.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function IA(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Qe||e instanceof Tv||e instanceof na||e instanceof xt||e instanceof Af)}function Cv(e,t,n){if(!IA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Tf(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function Gm(e,t,n){if((t=We(t))instanceof Cf)return t._internalPath;if(typeof t=="string")return Av(e,t);throw eh("Field path arguments must be of type string or ",e,!1,void 0,n)}const cV=new RegExp("[~\\*/\\[\\]]");function Av(e,t,n){if(t.search(cV)>=0)throw eh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Cf(...t.split("."))._internalPath}catch{throw eh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function eh(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(C.INVALID_ARGUMENT,a+e+l)}function SA(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class TA{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new uV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(bf("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uV extends TA{data(){return super.data()}}function bf(e,t){return typeof t=="string"?Av(e,t):t instanceof Cf?t._internalPath:t._delegate._internalPath}/**
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
 */function kA(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rv{}class Pv extends Rv{}function fn(e,t,...n){let r=[];t instanceof Rv&&r.push(t),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof bv).length,a=s.filter(l=>l instanceof jf).length;if(o>1||o>0&&a>0)throw new L(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class jf extends Pv{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new jf(t,n,r)}_apply(t){const n=this._parse(t);return CA(t._query,n),new Hr(t.firestore,t.converter,Um(t._query,n))}_parse(t){const n=kv(t.firestore);return function(s,o,a,l,u,d,h){let f;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new L(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){yx(h,d);const p=[];for(const m of h)p.push(mx(l,s,m));f={arrayValue:{values:p}}}else f=mx(l,s,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||yx(h,d),f=lV(a,o,h,d==="in"||d==="not-in");return Be.create(u,d,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Qn(e,t,n){const r=t,i=bf("where",e);return jf._create(i,r,n)}class bv extends Rv{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new bv(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:On.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)CA(o,l),o=Um(o,l)}(t._query,n),new Hr(t.firestore,t.converter,Um(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jv extends Pv{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new jv(t,n)}_apply(t){const n=function(i,s,o){if(i.startAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rc(s,o)}(t._query,this._field,this._direction);return new Hr(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new xa(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,n))}}function Er(e,t="asc"){const n=t,r=bf("orderBy",e);return jv._create(r,n)}class Nv extends Pv{constructor(t,n,r){super(),this.type=t,this._limit=n,this._limitType=r}static _create(t,n,r){return new Nv(t,n,r)}_apply(t){return new Hr(t.firestore,t.converter,Qd(t._query,this._limit,this._limitType))}}function Co(e){return X5("limit",e),Nv._create("limit",e,"F")}function mx(e,t,n){if(typeof(n=We(n))=="string"){if(n==="")throw new L(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RC(t)&&n.indexOf("/")!==-1)throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Se.fromString(n));if(!B.isDocumentKey(r))throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ow(e,new B(r))}if(n instanceof xt)return Ow(e,n._key);throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tf(n)}.`)}function yx(e,t){if(!Array.isArray(e)||e.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function CA(e,t){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class dV{convertValue(t,n="none"){switch(Ts(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ue(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ss(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Y()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return $s(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Tv(Ue(t.latitude),Ue(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=rv(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ec(t));default:return null}}convertTimestamp(t){const n=Pi(t);return new Qe(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Se.fromString(t);_e(JC(r));const i=new tc(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||$r(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function hV(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Xa{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class AA extends TA{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(bf("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Xu extends AA{data(t={}){return super.data(t)}}class RA{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Xu(this._firestore,this._userDataWriter,r.key,r,new Xa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Xu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Xu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:fV(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fV(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function pV(e){e=bn(e,xt);const t=bn(e.firestore,ks);return Q5(kf(t),e._key).then(n=>jA(t,e,n))}class Mv extends dV{constructor(t){super(),this.firestore=t}convertBytes(t){return new na(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function pn(e){e=bn(e,Hr);const t=bn(e.firestore,ks),n=kf(t),r=new Mv(t);return kA(e._query),K5(n,e._query).then(i=>new RA(t,r,e,i))}function PA(e,t,n){e=bn(e,xt);const r=bn(e.firestore,ks),i=hV(e.converter,t,n);return bA(r,[rV(kv(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,rr.none())])}function gV(e,t,n,...r){e=bn(e,xt);const i=bn(e.firestore,ks),s=kv(i);let o;return o=typeof(t=We(t))=="string"||t instanceof Cf?aV(s,"updateDoc",e._key,t,n,r):oV(s,"updateDoc",e._key,t),bA(i,[o.toMutation(e._key,rr.exists(!0))])}function mV(e,...t){var n,r,i;e=We(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||gx(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(gx(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,d;if(e instanceof xt)u=bn(e.firestore,ks),d=mf(e._key.path),l={next:h=>{t[o]&&t[o](jA(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=bn(e,Hr);u=bn(h.firestore,ks),d=h._query;const f=new Mv(u);l={next:p=>{t[o]&&t[o](new RA(u,f,h,p))},error:t[o+1],complete:t[o+2]},kA(e._query)}return function(f,p,m,v){const w=new Iv(v),g=new xv(p,w,m);return f.asyncQueue.enqueueAndForget(async()=>vv(await Zd(f),g)),()=>{w.Na(),f.asyncQueue.enqueueAndForget(async()=>_v(await Zd(f),g))}}(kf(u),d,a,l)}function bA(e,t){return function(r,i){const s=new Ar;return r.asyncQueue.enqueueAndForget(async()=>M5(await G5(r),i,s)),s.promise}(kf(e),t)}function jA(e,t,n){const r=n.docs.get(t._key),i=new Mv(e);return new AA(e,i,t._key,r,new Xa(n.hasPendingWrites,n.fromCache),t.converter)}function yV(...e){return new sV("arrayUnion",e)}(function(t,n=!0){(function(i){wa=i})(Ls),Es(new Ai("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ks(new v$(r.getProvider("auth-internal")),new E$(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tc(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),tr(Mw,"4.4.0",t),tr(Mw,"4.4.0","esm2017")})();var vV="firebase",_V="10.7.1";/**
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
 */tr(vV,_V,"app");function NA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wV=NA,MA=new xc("auth","Firebase",NA());/**
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
 */const th=new Py("@firebase/auth");function xV(e,...t){th.logLevel<=oe.WARN&&th.warn(`Auth (${Ls}): ${e}`,...t)}function Ju(e,...t){th.logLevel<=oe.ERROR&&th.error(`Auth (${Ls}): ${e}`,...t)}/**
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
 */function Vn(e,...t){throw Lv(e,...t)}function sr(e,...t){return Lv(e,...t)}function EV(e,t,n){const r=Object.assign(Object.assign({},wV()),{[t]:n});return new xc("auth","Firebase",r).create(t,{appName:e.name})}function Lv(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return MA.create(e,...t)}function K(e,t,...n){if(!e)throw Lv(t,...n)}function Ir(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ju(t),new Error(t)}function Vr(e,t){e||Ir(t)}/**
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
 */function Qm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function IV(){return vx()==="http:"||vx()==="https:"}function vx(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function SV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IV()||GL()||"connection"in navigator)?navigator.onLine:!0}function TV(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class $c{constructor(t,n){this.shortDelay=t,this.longDelay=n,Vr(n>t,"Short delay should be less than long delay!"),this.isMobile=qL()||QL()}get(){return SV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dv(e,t){Vr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class LA{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const CV=new $c(3e4,6e4);function Fi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zi(e,t,n,r,i={}){return DA(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ec(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),LA.fetch()($A(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function DA(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},kV),t);try{const i=new RV(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Iu(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Iu(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Iu(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Iu(e,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw EV(e,d,u);Vn(e,d)}}catch(i){if(i instanceof dr)throw i;Vn(e,"network-request-failed",{message:String(i)})}}async function Oc(e,t,n,r,i={}){const s=await zi(e,t,n,r,i);return"mfaPendingCredential"in s&&Vn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function $A(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Dv(e.config,i):`${e.config.apiScheme}://${i}`}function AV(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RV{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sr(this.auth,"network-request-failed")),CV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Iu(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sr(e,t,r);return i.customData._tokenResponse=n,i}function _x(e){return e!==void 0&&e.enterprise!==void 0}class PV{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return AV(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function bV(e,t){return zi(e,"GET","/v2/recaptchaConfig",Fi(e,t))}/**
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
 */async function jV(e,t){return zi(e,"POST","/v1/accounts:delete",t)}async function NV(e,t){return zi(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function gl(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function MV(e,t=!1){const n=We(e),r=await n.getIdToken(t),i=$v(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:gl(Qp(i.auth_time)),issuedAtTime:gl(Qp(i.iat)),expirationTime:gl(Qp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qp(e){return Number(e)*1e3}function $v(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ju("JWT malformed, contained fewer than 3 sections"),null;try{const i=ok(n);return i?JSON.parse(i):(Ju("Failed to decode base64 JWT payload"),null)}catch(i){return Ju("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function LV(e){const t=$v(e);return K(t,"internal-error"),K(typeof t.exp<"u","internal-error"),K(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function sc(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof dr&&DV(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function DV({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class $V{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class OA{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gl(this.lastLoginAt),this.creationTime=gl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nh(e){var t;const n=e.auth,r=await e.getIdToken(),i=await sc(e,NV(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?UV(s.providerUserInfo):[],a=VV(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new OA(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function OV(e){const t=We(e);await nh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function VV(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function UV(e){return e.map(t=>{var{providerId:n}=t,r=J0(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function FV(e,t){const n=await DA(e,{},async()=>{const r=Ec({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=$A(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zV(e,t){return zi(e,"POST","/v2/accounts:revokeToken",Fi(e,t))}/**
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
 */class oc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){K(t.idToken,"internal-error"),K(typeof t.idToken<"u","internal-error"),K(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):LV(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return K(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FV(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new oc;return r&&(K(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new oc,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
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
 */function Qr(e,t){K(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class fs{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=J0(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $V(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new OA(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await sc(this,this.stsTokenManager.getToken(this.auth,t));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return MV(this,t)}reload(){return OV(this)}_assign(t){this!==t&&(K(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new fs(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await nh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await sc(this,jV(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_,emailVerified:E,isAnonymous:T,providerData:k,stsTokenManager:I}=n;K(_&&I,t,"internal-error");const A=oc.fromJSON(this.name,I);K(typeof _=="string",t,"internal-error"),Qr(h,t.name),Qr(f,t.name),K(typeof E=="boolean",t,"internal-error"),K(typeof T=="boolean",t,"internal-error"),Qr(p,t.name),Qr(m,t.name),Qr(v,t.name),Qr(w,t.name),Qr(g,t.name),Qr(y,t.name);const z=new fs({uid:_,auth:t,email:f,emailVerified:E,displayName:h,isAnonymous:T,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:A,createdAt:g,lastLoginAt:y});return k&&Array.isArray(k)&&(z.providerData=k.map(H=>Object.assign({},H))),w&&(z._redirectEventId=w),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new oc;i.updateFromServerResponse(n);const s=new fs({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await nh(s),s}}/**
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
 */const wx=new Map;function Sr(e){Vr(e instanceof Function,"Expected a class definition");let t=wx.get(e);return t?(Vr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,wx.set(e,t),t)}/**
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
 */class VA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}VA.type="NONE";const xx=VA;/**
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
 */function Zu(e,t,n){return`firebase:${e}:${t}:${n}`}class Ao{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?fs._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ao(Sr(xx),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Sr(xx);const o=Zu(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const h=fs._fromJSON(t,d);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ao(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ao(s,t,r))}}/**
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
 */function Ex(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(UA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(HA(t))return"Blackberry";if(WA(t))return"Webos";if(Ov(t))return"Safari";if((t.includes("chrome/")||FA(t))&&!t.includes("edge/"))return"Chrome";if(BA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function UA(e=It()){return/firefox\//i.test(e)}function Ov(e=It()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function FA(e=It()){return/crios\//i.test(e)}function zA(e=It()){return/iemobile/i.test(e)}function BA(e=It()){return/android/i.test(e)}function HA(e=It()){return/blackberry/i.test(e)}function WA(e=It()){return/webos/i.test(e)}function Nf(e=It()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function BV(e=It()){var t;return Nf(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function HV(){return KL()&&document.documentMode===10}function qA(e=It()){return Nf(e)||BA(e)||WA(e)||HA(e)||/windows phone/i.test(e)||zA(e)}function WV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function GA(e,t=[]){let n;switch(e){case"Browser":n=Ex(It());break;case"Worker":n=`${Ex(It())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
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
 */class qV{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function GV(e,t={}){return zi(e,"GET","/v2/passwordPolicy",Fi(e,t))}/**
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
 */const QV=6;class KV{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class YV{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ix(this),this.idTokenSubscription=new Ix(this),this.beforeStateQueue=new qV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=MA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Sr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ao.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await nh(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=TV()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?We(t):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&K(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await GV(this),n=new KV(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new xc("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zV(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Sr(t)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ao.create(this,[Sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=GA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&xV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vs(e){return We(e)}class Ix{constructor(t){this.auth=t,this.observer=null,this.addObserver=nD(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function XV(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function QA(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=sr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XV().appendChild(r)})}function JV(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const ZV="https://www.google.com/recaptcha/enterprise.js?render=",e9="recaptcha-enterprise",t9="NO_RECAPTCHA";class n9{constructor(t){this.type=e9,this.auth=Vs(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{bV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new PV(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;_x(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(t9)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&_x(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}QA(ZV+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Sx(e,t,n,r=!1){const i=new n9(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Km(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Sx(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sx(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
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
 */function r9(e,t){const n=Xh(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zl(s,t??{}))return i;Vn(i,"already-initialized")}return n.initialize({options:t})}function i9(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sr);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function s9(e,t,n){const r=Vs(e);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=KA(t),{host:o,port:a}=o9(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||a9()}function KA(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function o9(e){const t=KA(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tx(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Tx(o)}}}function Tx(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function a9(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Vv{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ir("not implemented")}_getIdTokenResponse(t){return Ir("not implemented")}_linkToIdToken(t,n){return Ir("not implemented")}_getReauthenticationResolver(t){return Ir("not implemented")}}async function l9(e,t){return zi(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function c9(e,t){return Oc(e,"POST","/v1/accounts:signInWithPassword",Fi(e,t))}/**
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
 */async function u9(e,t){return Oc(e,"POST","/v1/accounts:signInWithEmailLink",Fi(e,t))}async function d9(e,t){return Oc(e,"POST","/v1/accounts:signInWithEmailLink",Fi(e,t))}/**
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
 */class ac extends Vv{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ac(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ac(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Km(t,n,"signInWithPassword",c9);case"emailLink":return u9(t,{email:this._email,oobCode:this._password});default:Vn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Km(t,r,"signUpPassword",l9);case"emailLink":return d9(t,{idToken:n,email:this._email,oobCode:this._password});default:Vn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Ro(e,t){return Oc(e,"POST","/v1/accounts:signInWithIdp",Fi(e,t))}/**
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
 */const h9="http://localhost";class Cs extends Vv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Cs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=J0(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Cs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Ro(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Ro(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ro(t,n)}buildRequest(){const t={requestUri:h9,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ec(n)}return t}}/**
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
 */function f9(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p9(e){const t=Wa(qa(e)).link,n=t?Wa(qa(t)).deep_link_id:null,r=Wa(qa(e)).deep_link_id;return(r?Wa(qa(r)).link:null)||r||n||t||e}class Uv{constructor(t){var n,r,i,s,o,a;const l=Wa(qa(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=f9((i=l.mode)!==null&&i!==void 0?i:null);K(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=p9(t);try{return new Uv(n)}catch{return null}}}/**
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
 */class Ta{constructor(){this.providerId=Ta.PROVIDER_ID}static credential(t,n){return ac._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Uv.parseLink(n);return K(r,"argument-error"),ac._fromEmailAndCode(t,r.code,r.tenantId)}}Ta.PROVIDER_ID="password";Ta.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ta.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class YA{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vc extends YA{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ei extends Vc{constructor(){super("facebook.com")}static credential(t){return Cs._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ei.credentialFromTaggedObject(t)}static credentialFromError(t){return ei.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ei.credential(t.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
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
 */class ti extends Vc{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Cs._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ti.credentialFromTaggedObject(t)}static credentialFromError(t){return ti.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return ti.credential(n,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
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
 */class ni extends Vc{constructor(){super("github.com")}static credential(t){return Cs._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ni.credentialFromTaggedObject(t)}static credentialFromError(t){return ni.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ni.credential(t.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
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
 */class ri extends Vc{constructor(){super("twitter.com")}static credential(t,n){return Cs._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ri.credentialFromTaggedObject(t)}static credentialFromError(t){return ri.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ri.credential(n,r)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
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
 */async function g9(e,t){return Oc(e,"POST","/v1/accounts:signUp",Fi(e,t))}/**
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
 */class As{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await fs._fromIdTokenResponse(t,r,i),o=kx(r);return new As({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=kx(r);return new As({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function kx(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class rh extends dr{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rh.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new rh(t,n,r,i)}}function XA(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rh._fromErrorAndOperation(e,s,t,r):s})}async function m9(e,t,n=!1){const r=await sc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return As._forOperation(e,"link",r)}/**
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
 */async function y9(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await sc(e,XA(r,i,t,e),n);K(s.idToken,r,"internal-error");const o=$v(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(e.uid===a,r,"user-mismatch"),As._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),s}}/**
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
 */async function JA(e,t,n=!1){const r="signIn",i=await XA(e,r,t),s=await As._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function v9(e,t){return JA(Vs(e),t)}/**
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
 */async function ZA(e){const t=Vs(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function _9(e,t,n){const r=Vs(e),o=await Km(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",g9).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ZA(e),l}),a=await As._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function w9(e,t,n){return v9(We(e),Ta.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ZA(e),r})}function x9(e,t,n,r){return We(e).onIdTokenChanged(t,n,r)}function E9(e,t,n){return We(e).beforeAuthStateChanged(t,n)}function I9(e,t,n,r){return We(e).onAuthStateChanged(t,n,r)}function S9(e){return We(e).signOut()}const ih="__sak";/**
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
 */class eR{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ih,"1"),this.storage.removeItem(ih),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function T9(){const e=It();return Ov(e)||Nf(e)}const k9=1e3,C9=10;class tR extends eR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=T9()&&WV(),this.fallbackToPolling=qA(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HV()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,C9):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},k9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}tR.type="LOCAL";const A9=tR;/**
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
 */class nR extends eR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}nR.type="SESSION";const rR=nR;/**
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
 */function R9(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Mf{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Mf(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await R9(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mf.receivers=[];/**
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
 */function Fv(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class P9{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Fv("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function or(){return window}function b9(e){or().location.href=e}/**
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
 */function iR(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function j9(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N9(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function M9(){return iR()?self:null}/**
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
 */const sR="firebaseLocalStorageDb",L9=1,sh="firebaseLocalStorage",oR="fbase_key";class Uc{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lf(e,t){return e.transaction([sh],t?"readwrite":"readonly").objectStore(sh)}function D9(){const e=indexedDB.deleteDatabase(sR);return new Uc(e).toPromise()}function Ym(){const e=indexedDB.open(sR,L9);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(sh,{keyPath:oR})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(sh)?t(r):(r.close(),await D9(),t(await Ym()))})})}async function Cx(e,t,n){const r=Lf(e,!0).put({[oR]:t,value:n});return new Uc(r).toPromise()}async function $9(e,t){const n=Lf(e,!1).get(t),r=await new Uc(n).toPromise();return r===void 0?null:r.value}function Ax(e,t){const n=Lf(e,!0).delete(t);return new Uc(n).toPromise()}const O9=800,V9=3;class aR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ym(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>V9)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mf._getInstance(M9()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await j9(),!this.activeServiceWorker)return;this.sender=new P9(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||N9()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ym();return await Cx(t,ih,"1"),await Ax(t,ih),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cx(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>$9(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ax(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Lf(i,!1).getAll();return new Uc(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),O9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aR.type="LOCAL";const U9=aR;new $c(3e4,6e4);/**
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
 */function F9(e,t){return t?Sr(t):(K(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class zv extends Vv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ro(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ro(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ro(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function z9(e){return JA(e.auth,new zv(e),e.bypassAuthState)}function B9(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),y9(n,new zv(e),e.bypassAuthState)}async function H9(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),m9(n,new zv(e),e.bypassAuthState)}/**
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
 */class lR{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return z9;case"linkViaPopup":case"linkViaRedirect":return H9;case"reauthViaPopup":case"reauthViaRedirect":return B9;default:Vn(this.auth,"internal-error")}}resolve(t){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const W9=new $c(2e3,1e4);class fo extends lR{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fo.currentPopupAction&&fo.currentPopupAction.cancel(),fo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return K(t,this.auth,"internal-error"),t}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const t=Fv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fo.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,W9.get())};t()}}fo.currentPopupAction=null;/**
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
 */const q9="pendingRedirect",ed=new Map;class G9 extends lR{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ed.get(this.auth._key());if(!t){try{const r=await Q9(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ed.set(this.auth._key(),t)}return this.bypassAuthState||ed.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q9(e,t){const n=X9(t),r=Y9(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function K9(e,t){ed.set(e._key(),t)}function Y9(e){return Sr(e._redirectPersistence)}function X9(e){return Zu(q9,e.config.apiKey,e.name)}async function J9(e,t,n=!1){const r=Vs(e),i=F9(r,t),o=await new G9(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const Z9=10*60*1e3;class e6{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!t6(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!cR(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Z9&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rx(t))}saveEventToCache(t){this.cachedEventUids.add(Rx(t)),this.lastProcessedEventTime=Date.now()}}function Rx(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function cR({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function t6(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cR(e);default:return!1}}/**
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
 */async function n6(e,t={}){return zi(e,"GET","/v1/projects",t)}/**
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
 */const r6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i6=/^https?/;async function s6(e){if(e.config.emulator)return;const{authorizedDomains:t}=await n6(e);for(const n of t)try{if(o6(n))return}catch{}Vn(e,"unauthorized-domain")}function o6(e){const t=Qm(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!i6.test(n))return!1;if(r6.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const a6=new $c(3e4,6e4);function Px(){const e=or().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function l6(e){return new Promise((t,n)=>{var r,i,s;function o(){Px(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Px(),n(sr(e,"network-request-failed"))},timeout:a6.get()})}if(!((i=(r=or().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=or().gapi)===null||s===void 0)&&s.load)o();else{const a=JV("iframefcb");return or()[a]=()=>{gapi.load?o():n(sr(e,"network-request-failed"))},QA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw td=null,t})}let td=null;function c6(e){return td=td||l6(e),td}/**
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
 */const u6=new $c(5e3,15e3),d6="__/auth/iframe",h6="emulator/auth/iframe",f6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},p6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function g6(e){const t=e.config;K(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Dv(t,h6):`https://${e.config.authDomain}/${d6}`,r={apiKey:t.apiKey,appName:e.name,v:Ls},i=p6.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ec(r).slice(1)}`}async function m6(e){const t=await c6(e),n=or().gapi;return K(n,e,"internal-error"),t.open({where:document.body,url:g6(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sr(e,"network-request-failed"),a=or().setTimeout(()=>{s(o)},u6.get());function l(){or().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const y6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},v6=500,_6=600,w6="_blank",x6="http://localhost";class bx{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function E6(e,t,n,r=v6,i=_6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},y6),{width:r.toString(),height:i.toString(),top:s,left:o}),u=It().toLowerCase();n&&(a=FA(u)?w6:n),UA(u)&&(t=t||x6,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(BV(u)&&a!=="_self")return I6(t||"",a),new bx(null);const h=window.open(t||"",a,d);K(h,e,"popup-blocked");try{h.focus()}catch{}return new bx(h)}function I6(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const S6="__/auth/handler",T6="emulator/auth/handler",k6=encodeURIComponent("fac");async function jx(e,t,n,r,i,s){K(e.config.authDomain,e,"auth-domain-config-required"),K(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ls,eventId:i};if(t instanceof YA){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",tD(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))o[d]=h}if(t instanceof Vc){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${k6}=${encodeURIComponent(l)}`:"";return`${C6(e)}?${Ec(a).slice(1)}${u}`}function C6({config:e}){return e.emulator?Dv(e,T6):`https://${e.authDomain}/${S6}`}/**
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
 */const Kp="webStorageSupport";class A6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rR,this._completeRedirectFn=J9,this._overrideRedirectResult=K9}async _openPopup(t,n,r,i){var s;Vr((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jx(t,n,r,Qm(),i);return E6(t,o,Fv())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await jx(t,n,r,Qm(),i);return b9(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await m6(t),r=new e6(t);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Kp,{type:Kp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Kp];o!==void 0&&n(!!o),Vn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=s6(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return qA()||Ov()||Nf()}}const R6=A6;var Nx="@firebase/auth",Mx="1.5.1";/**
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
 */class P6{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function b6(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function j6(e){Es(new Ai("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GA(e)},u=new YV(r,i,s,l);return i9(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Es(new Ai("auth-internal",t=>{const n=Vs(t.getProvider("auth").getImmediate());return(r=>new P6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(Nx,Mx,b6(e)),tr(Nx,Mx,"esm2017")}/**
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
 */const N6=5*60,M6=ck("authIdTokenMaxAge")||N6;let Lx=null;const L6=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>M6)return;const i=n==null?void 0:n.token;Lx!==i&&(Lx=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function D6(e=fk()){const t=Xh(e,"auth");if(t.isInitialized())return t.getImmediate();const n=r9(e,{popupRedirectResolver:R6,persistence:[U9,A9,rR]}),r=ck("authTokenSyncURL");if(r){const s=L6(r);E9(n,s,()=>s(n.currentUser)),x9(n,o=>s(o))}const i=ak("auth");return i&&s9(n,`http://${i}`),n}j6("Browser");/**
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
 */const uR="firebasestorage.googleapis.com",$6="storageBucket",O6=2*60*1e3,V6=10*60*1e3;/**
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
 */class hr extends dr{constructor(t,n,r=0){super(Yp(t),`Firebase Storage: ${n} (${Yp(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,hr.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Yp(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lr;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lr||(lr={}));function Yp(e){return"storage/"+e}function U6(){const e="An unknown error occurred, please check the error payload for server response.";return new hr(lr.UNKNOWN,e)}function F6(){return new hr(lr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function z6(){return new hr(lr.CANCELED,"User canceled the upload/download.")}function B6(e){return new hr(lr.INVALID_URL,"Invalid URL '"+e+"'.")}function H6(e){return new hr(lr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Dx(e){return new hr(lr.INVALID_ARGUMENT,e)}function dR(){return new hr(lr.APP_DELETED,"The Firebase app was deleted.")}function W6(e){return new hr(lr.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Tn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Tn.makeFromUrl(t,n)}catch{return new Tn(t,"")}if(r.path==="")return r;throw H6(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${d}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},v=n===uR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${v}/${i}/${w}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:p,indices:m,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<_.length;E++){const T=_[E],k=T.regex.exec(t);if(k){const I=k[T.indices.bucket];let A=k[T.indices.path];A||(A=""),r=new Tn(I,A),T.postModify(r);break}}if(r==null)throw B6(t);return r}}class q6{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function G6(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...w){u||(u=!0,t.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,e(p,l())},w)}function f(){s&&clearTimeout(s)}function p(w,...g){if(u){f();return}if(w){f(),d.call(null,w,...g);return}if(l()||o){f(),d.call(null,w,...g);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,h(_)}let m=!1;function v(w){m||(m=!0,f(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function Q6(e){e(!1)}/**
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
 */function K6(e){return e!==void 0}function $x(e,t,n,r){if(r<t)throw Dx(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Dx(`Invalid value for '${e}'. Expected ${n} or less.`)}function Y6(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var oh;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(oh||(oh={}));/**
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
 */function X6(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class J6{constructor(t,n,r,i,s,o,a,l,u,d,h,f=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Su(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===oh.NO_ERROR,l=s.getStatus();if(!a||X6(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===oh.ABORT;r(!1,new Su(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Su(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());K6(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=U6();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?dR():z6();o(l)}else{const l=F6();o(l)}};this.canceled_?n(!1,new Su(!1,null,!0)):this.backoffId_=G6(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Q6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Su{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Z6(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function eU(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function tU(e,t){t&&(e["X-Firebase-GMPID"]=t)}function nU(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function rU(e,t,n,r,i,s,o=!0){const a=Y6(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return tU(u,t),Z6(u,n),eU(u,s),nU(u,r),new J6(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
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
 */function iU(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function sU(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class ah{constructor(t,n){this._service=t,n instanceof Tn?this._location=n:this._location=Tn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ah(t,n)}get root(){const t=new Tn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sU(this._location.path)}get storage(){return this._service}get parent(){const t=iU(this._location.path);if(t===null)return null;const n=new Tn(this._location.bucket,t);return new ah(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw W6(t)}}function Ox(e,t){const n=t==null?void 0:t[$6];return n==null?null:Tn.makeFromBucketSpec(n,e)}function oU(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:WL(i,e.app.options.projectId))}class aU{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=uR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=O6,this._maxUploadRetryTime=V6,this._requests=new Set,i!=null?this._bucket=Tn.makeFromBucketSpec(i,this._host):this._bucket=Ox(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Tn.makeFromBucketSpec(this._url,t):this._bucket=Ox(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){$x("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){$x("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ah(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new q6(dR());{const o=rU(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Vx="@firebase/storage",Ux="0.12.0";/**
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
 */const hR="storage";function lU(e=fk(),t){e=We(e);const r=Xh(e,hR).getImmediate({identifier:t}),i=BL("storage");return i&&cU(r,...i),r}function cU(e,t,n,r={}){oU(e,t,n,r)}function uU(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new aU(n,r,i,t,Ls)}function dU(){Es(new Ai(hR,uU,"PUBLIC").setMultipleInstances(!0)),tr(Vx,Ux,""),tr(Vx,Ux,"esm2017")}dU();const Kt=e=>e.docs.map(t=>t.data()),hU={apiKey:"AIzaSyBuDoETyUrO2RCDAlFMsW2uV-QmtCT8t6Y",authDomain:"soundbubble-27737.firebaseapp.com",projectId:"soundbubble-27737",storageBucket:"soundbubble-27737.appspot.com",messagingSenderId:"527274299416",appId:"1:527274299416:web:64b1ac2d05f4262df0736d",measurementId:"G-9TP9PEEV11"},Hn=class Hn{static get(t){return px(this.firestore,t)}static getSubCollection(t,n){return px(Hn.firestore,`${t}/${n}`)}static async createUser(t,n){return await _9(this.auth,t,n)}static async setById(t,n,r){const i=await this.get(t),s=Yu(i,n);return await PA(s,r)}static async updateById(t,n,r){const i=await this.get(t),s=Yu(i,n);return await gV(s,r)}static async login(t,n){return await w9(this.auth,t,n)}static async logout(){return await S9(this.auth)}static onAuthStateChanged(t){return I9(this.auth,t)}static async getById(t,n){const r=this.get(t),i=Yu(r,n);return(await pV(i)).data()}static async listenTo(t,n,r,i){const s=[];i&&s.push(i);const o=fn(this.get(t),r,...s);return mV(o,l=>{const u=Kt(l);console.log("changed data"),n(u)})}};Ke(Hn,"app",hk(hU)),Ke(Hn,"auth",D6(Hn.app)),Ke(Hn,"storage",lU(Hn.app)),Ke(Hn,"firestore",Z5(Hn.app,{experimentalForceLongPolling:!1}));let Ee=Hn;console.log({app:Ee});const Fx=e=>t=>`${e}. Причина: ${t}`,Fc={operationFailed:Fx("Не удалось выполнить операцию"),loginFailed:Fx("Не удалось войти в аккаунт")},go=class go{static async getAllSongs(){try{const t=await pn(this.ref);return Kt(t)}catch(t){return console.error(t),[]}}static async getTopSongs(t=10){try{const n=await pn(fn(this.ref,Er("listens","desc"),Co(t)));return Kt(n)}catch(n){return console.error(n),[]}}static async getSongsByUserId(t){try{const n=await Pt.getUserByUid(t);return this.getSongsByUids((n==null?void 0:n.addedSongs)??[])}catch(n){return console.error(n),[]}}};Ke(go,"ref",Ee.get("songs")),Ke(go,"getSongByUid",async t=>{try{if(!t)throw new Error(Fc.operationFailed("UID must be provided"));return Ee.getById("songs",t)}catch{throw new Error("Failed to get song by uid "+t)}}),Ke(go,"getSongsByUids",async(t,n)=>{if(t.length===0)return[];if(n){const i=[];i.push(Er("listens","desc"));const s=fn(Ee.get("songs"),Qn("id","in",t),...i),o=await pn(s);return Kt(o)}const r=t.map(i=>go.getSongByUid(i));return Promise.all(r)});let en=go;const Rs=(e,t)=>{if(!e.length)return"";const n=t??!0,r=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?r.replace(/[,'._/]/g,""):r},zx=(e,t,n,r)=>e.filter(i=>!r(t).includes(n(i))),os=e=>e?"displayName"in e?e.displayName:"chatName"in e?e.chatName:e.name:"",ra=e=>"uid"in e?e.uid:e.id,fU=e=>"photoURL"in e?e.photoURL:"image"in e?e.image:"chatImage"in e?e.chatImage:e.cover;class Bv{static async getTopAuthorSongs(t){try{return t!=null&&t.length?await en.getSongsByUids(t,!0):[]}catch(n){throw new Error(n.message)}}static getEntitiesReqs(t){const n={users:Pt.getUserByUid,playlists:mn.getPlaylistByUid,songs:en.getSongByUid};return t.map(r=>n[r.place](r.uid))}static async getSearchSuggestions(t,n){try{const r=fn(this.ref,Qn("variantsOfName","array-contains",Rs(t)),Er("rank","desc"),Co(10)),i=await pn(r),s=zx(Kt(i),n,l=>l.uid,l=>l.map(u=>ra(u))),o=this.getEntitiesReqs(s);return s.length===0?[]:await Promise.all(o)}catch(r){throw new Error(r.message)}}static async getSearchResult(t){var n;try{const r=fn(this.ref,Qn("variantsOfName","array-contains",Rs(t)),Er("rank","desc")),i=await pn(r),s=zx(Kt(i),[],l=>l.uid,l=>l.map(u=>ra(u))),o=this.getEntitiesReqs(s);let a=await Promise.all(o);if(s[0].place==="users"){const l=await this.getTopAuthorSongs((n=a[0].ownSongs)==null?void 0:n.slice(0,6));a=[...a.slice(0,1),...l,...a.slice(1,a.length)]}return a}catch(r){throw new Error(r.message)}}}Ke(Bv,"ref",Ee.get("search"));class mn{static async addSongToPlaylists(t,n){try{if(!t)throw new Error("Song id not specified");if(!n.length)throw new Error("Playlist ids not specified");const r=n.map(i=>Ee.updateById("playlists",i,{songs:yV(t)}));return Promise.all(r)}catch(r){throw new Error(`Failed to add song to playlists ${t}, ${n}, ${r}`)}}}Ke(mn,"ref",Ee.get("playlists")),Ke(mn,"getPlaylistByUid",async t=>{try{if(!t)throw new Error(Fc.operationFailed("UID must be provided"));return Ee.getById("playlists",t)}catch{throw new Error("Failed to get playlist by uid "+t)}}),Ke(mn,"getPlaylistsByUids",async t=>{if(t.length===0)return[];const n=fn(Ee.get("playlists"),Qn("id","in",t)),r=await pn(n);return Kt(r)});class Pt{static createUser({email:t,password:n}){try{return Ee.createUser(t,n)}catch(r){console.error(r)}}static async login({email:t,password:n}){try{return Ee.login(t,n)}catch(r){console.error(r)}}static async logout(){try{return Ee.logout()}catch(t){console.error(t)}}static async getUserByUid(t){try{if(!t)throw new Error(Fc.loginFailed("UID must be provided"));return Ee.getById("users",t)}catch{throw new Error("Failed to get user by id: "+t)}}static async getUsersByUids(t,n){try{if((t??[]).length===0)return[];const r=[];n&&r.push(Er("numberOfListenersPerMonth","desc"));const i=await pn(fn(this.ref,Qn("uid","in",t),...r));return Kt(i)}catch(r){return console.error(r),[]}}static async getAuthorTopSongs(t,n=3){try{if(t.length===0)return[];const r=await pn(fn(en.ref,Qn("id","in",t),Er("listens","desc"),Co(n)));return Kt(r)}catch(r){return console.error(r),[]}}static async getAuthorTopAlbums(t,n=3){try{if(t.length===0)return[];console.log(t);const r=await pn(fn(mn.ref,Qn("id","in",t),Co(n)));return Kt(r)}catch(r){return console.error(r),[]}}static async getSimilarAuthorsBySongs(t){try{if(t.length===0)return[];const n=[...new Set(t.flatMap(r=>r.authors.map(i=>i.uid)))];return await this.getUsersByUids(n,!0)}catch(n){return console.error(n),[]}}static async getTopAuthorsByListenings(t=10){try{const n=await pn(fn(this.ref,Qn("isAuthor","==",!0),Er("numberOfListenersPerMonth","desc"),Co(t)));return Kt(n)}catch(n){return console.error(n),[]}}static async listenToUsersChanges(t,n){try{return await Ee.listenTo("users",n,Qn("uid","in",t),Er("online","desc"))}catch{throw new Error("Failed to listen to users changes")}}}Ke(Pt,"ref",Ee.get("users")),Ke(Pt,"onAuthStateChanged",async t=>{try{return Ee.onAuthStateChanged(t)}catch(n){return console.error(n),null}});class fR{static async getSearchHistory(t){try{if(!t)throw new Error("userId is required in getSearchHistory");const n={playlists:mn.getPlaylistByUid,songs:en.getSongByUid,users:Pt.getUserByUid},i=(await Ee.getById("searchHistory",t)).history.slice(0,10).map(s=>n[s.type](s.id));return await Promise.all(i)}catch(n){return console.error(n),[]}}}Ke(fR,"ref",Ee.get("history"));class pR{static async getHistoryByUserId(t){try{const n=await Ee.getById("history",t),r=new Set(n.history);return await en.getSongsByUids(Array.from(r))}catch{throw new Error("Failed to get history for user")}}}Ke(pR,"ref",Ee.get("history"));class Df{static ownChatsQuery(t){return fn(this.ref,Qn("participants","array-contains",t))}static async getChatsByUserId(t){try{const n=await pn(this.ownChatsQuery(t)),r=Kt(n),i={};let s={};const o={},a=r.map(async l=>{var h,f;const{messages:u,chatData:d}=await this.getChatMessagesByChatId(l.id,"desc",1);s=Object.assign(s,d),i[l.id]=u[0],o[l.id]=(f=((h=u[0])==null?void 0:h.seenBy)??[])!=null&&f.includes(t)?0:1});return await Promise.all(a),{chats:r.sort((l,u)=>{var d,h;return((d=i[u.id])==null?void 0:d.sentTime)-((h=i[l.id])==null?void 0:h.sentTime)}),chatDataObject:s,lastMessages:i,unreadCount:o}}catch{throw new Error("Failed to get chats by user id: "+t)}}static async getChatMessagesByChatId(t,n,r){try{const i=[];r!==void 0&&i.push(Co(r));const s=fn(Ee.getSubCollection("newChats",`${t}/messages`),Er("sentTime",n??"asc"),...i),o=await pn(s),a=Kt(o),l=a.map(async d=>[...await en.getSongsByUids(d.attachedSongs),...await mn.getPlaylistsByUids(d.attachedAlbums),...await Pt.getUsersByUids(d.attachedAuthors)]),u=(await Promise.all(l)).reduce((d,h)=>(h.forEach(f=>{d["id"in f?f.id:f.uid]=f}),d),{});return{messages:a,chatData:u}}catch{throw new Error("Failed to get messages by chatId id: "+t)}}static async sendMessage(t,n){try{const r=Yu(Ee.firestore,`newChats/${t}/messages/${n.id}`);return await PA(r,n)}catch(r){throw new Error("Failed to send message"+r.toString())}}}Ke(Df,"ref",Ee.get("newChats"));const pU=(e,t)=>j({clock:e.failData,source:t,fn:(n,r)=>({...n,error:r}),target:t}),gR=(e,t,n)=>j({clock:e.pending,source:t,fn:(r,i)=>({...r,[n??"loading"]:i}),target:t}),gU=e=>e instanceof Error?e.message:typeof e=="string"?e:"Ошибка",Hv=(e,t)=>{try{return e()}catch(n){throw new Error(Fc[t](gU(n)))}},mU={data:null,error:null,userPlaylists:[]},yU={user:null,error:null,loading:!1,songs:[],playlists:[],similarAuthors:[],similarAuthorsLoading:!0},Us=(e,t)=>j({clock:e.doneData,fn:n=>n,target:t}),Wv=De(async e=>Hv(async()=>{const{email:t,password:n}=e;if(!t||!n)throw new Error(Fc.loginFailed("Не указана почта или пароль"));await Pt.login(e)},"operationFailed")),vU=De(()=>Hv(async()=>{await Pt.logout()},"operationFailed")),qv=De(async e=>Hv(async()=>{var r,i;const t=((i=(r=e.data)==null?void 0:r.addedSongs)==null?void 0:i.reverse())??[],n=await en.getSongsByUids(t);return console.log({result:n}),n},"operationFailed")),Gv=De(async e=>{try{if(!e.data)throw new Error("Failed to load added playlists");return await mn.getPlaylistsByUids(e.data.ownPlaylists)}catch{throw new Error("Failed to load added playlists")}}),Qv=De(async e=>{try{if(!e.data)throw new Error("Failed to load added playlists");return await mn.getPlaylistsByUids(e.data.addedPlaylists)}catch{throw new Error("Failed to load added playlists")}}),zc=De(async e=>{try{const t=await Pt.getUserByUid(e),n=await en.getSongsByUids((t==null?void 0:t.ownSongs)??[],!0),r=await mn.getPlaylistsByUids((t==null?void 0:t.ownPlaylists)??[]);return{user:t,songs:n,playlists:r}}catch{throw new Error("Failed to get user's page info")}}),Kv=De(async e=>{try{return await Pt.getSimilarAuthorsBySongs(e)}catch{throw new Error("Failed to load similar authors")}}),mR=De(async e=>{var t;try{const n=(t=e.data)==null?void 0:t.uid;return await fR.getSearchHistory(n)}catch{throw new Error("Failed to load search history")}}),yR=De(async e=>{var t,n;try{const r=((n=(t=e.data)==null?void 0:t.friends)==null?void 0:n.filter(i=>i.status==="added").map(i=>i.uid))??[];await Pt.listenToUsersChanges(r,Jv)}catch{throw new Error("Failed to load user friends")}}),vR=De(async e=>{var t;try{const n=(t=e.data)==null?void 0:t.lastSongPlayed;return n?await en.getSongByUid(n):null}catch{throw new Error("Failed to load last song played")}}),Yv=De(async e=>{var t;try{const n=((t=e.data)==null?void 0:t.addedAuthors)??[];return await Pt.getUsersByUids(n)}catch{throw new Error("Failed to load user added authors")}}),Xv=V(),$e=V(),_U=V(),_R=V(),wR=V(),wU=V(),xR=V(),ER=V(),Jv=V(),IR=V(),xU=_y(),zt=ne(mU);zt.reset($e);const SR=ne(!0),Zv=ne([]);Zv.reset($e);const TR=ne(null);TR.reset($e);const EU=ne([]);EU.reset($e);const e1=ne([]);e1.reset($e);const t1=ne([]);t1.reset($e);const n1=ne([]);n1.reset($e);const $f=ne([]);$f.reset($e);const Ur=ne(yU).reset(ER);Ur.reset($e);const kR=ne([]);j({clock:IR,target:SR});j({clock:Xv,target:Wv});j({clock:$e,target:vU});j({clock:Xv,source:zt,fn:e=>({...e,loggining:!0}),target:zt});j({clock:Wv.doneData,source:zt,fn:e=>({...e,loggining:!1}),target:zt});j({clock:Wv.failData,source:zt,fn:(e,t)=>({...e,error:t,loggining:!1}),target:zt});j({clock:Jv,fn:e=>e,target:n1});j({clock:_R,source:zt,fn:(e,t)=>({...e,data:t,loggining:!1}),target:[zt,qv,Gv,Qv,Yv,mR,yR,vR]});Us(qv,Zv);Us(Gv,e1);Us(vR,TR);Us(Qv,t1);Us(Yv,kR);Us(mR,$f);j({clock:wR,source:zt,fn:(e,t)=>({...e,logginining:t}),target:zt});j({clock:wU,target:zc});gR(zc,Ur,"loading");pU(zc,Ur);j({clock:zc.doneData,source:Ur,fn:(e,t)=>({...e,...t,similarAuthors:[]}),target:Ur});j({clock:xR,target:Kv});gR(Kv,Ur,"similarAuthorsLoading");j({clock:Kv.doneData,source:Ur,fn:(e,t)=>({...e,similarAuthors:t}),target:Ur});const he={useUser:()=>me([zt,SR]),useSongLibrary:()=>me([Zv,qv.pending]),useOwnPlaylists:()=>me([e1,Gv.pending]),useAddedPlaylists:()=>me([t1,Qv.pending]),useAddedAuthors:()=>me([kR,Yv.pending]),useSearchHistory:()=>me($f),useUserPage:()=>me(Ur),useFriends:()=>me([n1,yR.pending]),events:{login:Xv,logout:$e,loadSimilarAuthors:xR,createUser:_U,setUser:_R,setLoggining:wR,loadUserPageFx:zc,resetUserPage:ER,updateFriends:Jv,setIsLoadingUsers:IR},gates:{useLoadUser:()=>vy(xU)}},IU={opened:!1,title:"",content:null},CR=V(),AR=V(),lc=ne(IU);j({clock:CR,source:lc,fn:(e,{title:t,content:n})=>({opened:!0,title:t,content:n}),target:lc});j({clock:AR,source:lc,fn:e=>({...e,opened:!1}),target:lc});const bt={useModal:()=>me(lc),events:{open:CR,close:AR}},ka=De(async e=>{try{return await Df.getChatsByUserId(e)}catch(t){throw console.log(t),new Error(t.message)}}),r1=De(async({chats:e,chatDataObject:t})=>{try{const r=e.flatMap(s=>s.participants).filter(s=>!t[s]).map(s=>Pt.getUserByUid(s));return(await Promise.all([...r])).flatMap(s=>s).reduce((s,o)=>(s["id"in o?o.id:o.uid]=o,s),{...t})}catch(n){throw new Error(n.message)}}),Bc=De(async({chatId:e})=>{try{const t=await Df.getChatMessagesByChatId(e);return{...t,messages:t.messages}}catch(t){throw new Error(t.message)}}),i1=De(async({chatId:e,message:t})=>{try{await Df.sendMessage(e,t),console.log("error never appeared")}catch(n){throw console.log(n),new Error(n.message)}}),s1=V(),RR=V(),PR=V(),SU=V(),o1=V(),bR=V(),jR=V(),NR=V(),ia=ne([]),Hc=ne(""),tn=ne([]),Of=ne({}),a1=ne(0),sa=ne({}),oa=ne({}),l1=ne(null);ia.reset($e);sa.reset($e);a1.reset($e);Hc.reset($e);tn.reset($e);Of.reset($e);sa.reset($e);oa.reset($e);l1.reset($e);const Xm=_y(),lh=zt.map(e=>{var t;return((t=e==null?void 0:e.data)==null?void 0:t.uid)??null}),TU=e=>Object.keys(e).reduce((t,n)=>(t+=e[n],t),0);j({clock:[Xm.open,lh],source:{gateStatus:Xm.status,userId:lh,chats:ia},filter:({chats:e,userId:t,gateStatus:n})=>n&&t!==null&&e.length===0,fn:({userId:e})=>e,target:ka});j({clock:ka.doneData,fn:({chats:e})=>e,target:[ia,s1]});j({clock:NR,source:{messages:tn,userId:lh},filter:({userId:e})=>!!e,fn:({messages:e,userId:t},n)=>[...e].map(i=>(i.id===n&&i.seenBy.push(t),i)),target:tn});j({clock:ka.doneData,fn:({lastMessages:e})=>e,target:oa});j({clock:ka.doneData,fn:e=>e,target:r1});j({clock:ka.doneData,fn:({unreadCount:e})=>e,target:[Of,s1]});j({clock:s1,source:Of,fn:TU,target:a1});j({clock:r1.doneData,target:sa});j({clock:o1,fn:({chatId:e,message:{status:t,...n}})=>({chatId:e,message:n}),target:[i1]});j({clock:o1,source:tn,fn:(e,{message:t})=>[...e,t],target:tn});j({clock:i1.failData,source:tn,fn:e=>(console.log("sending failed message"),e.map(t=>t.status==="pending"?{...t,status:"error"}:t)),target:tn});j({clock:i1.done,source:tn,fn:(e,{params:t})=>e.map(n=>{const{status:r,...i}=n;return t.message.id===n.id?i:n}),target:tn});j({clock:tn.updates,source:Hc,fn:(e,t)=>({chatId:e,message:t.at(-1)}),target:bR});j({clock:bR,source:oa,filter:(e,{message:t})=>!!t,fn:(e,{chatId:t,message:n})=>({...e,[t]:n}),target:[oa,jR]});j({clock:jR,source:{chats:ia,lastMessages:oa},fn:({chats:e,lastMessages:t})=>e.sort((n,r)=>t[r.id].sentTime-t[n.id].sentTime),target:ia});j({clock:RR,fn:e=>e,target:Hc});j({clock:PR,source:sa,fn:(e,t)=>({...e,...t}),target:sa});j({clock:Hc,filter:e=>e.length!==0,fn:e=>({chatId:e,messages:[]}),target:Bc});j({clock:Bc.doneData,fn:({chatData:e})=>e,target:PR});j({clock:Bc.doneData,fn:({messages:e})=>e,target:[tn]});j({clock:Bc.doneData,source:{currentMessages:tn,userId:lh},filter:({userId:e,currentMessages:t})=>!!e&&!!t.length,fn:({currentMessages:e,userId:t})=>{var n;return((n=e.find(r=>!r.seenBy.includes(t)))==null?void 0:n.id)??null},target:l1});const Tr={useChats:()=>me({chats:ia,loadingChats:ka.pending,currentChatId:Hc,currentChatMessages:tn,currentChatMessagesLoading:Bc.pending,chatData:sa,loadingChatData:r1.pending,lastMessage:oa,unreadCounts:Of,firstUnreadMessageId:l1}),useLoadChats:()=>vy(Xm),useChatUnreadCount:()=>me(a1),events:{setCurrentChatId:RR,loadPreviousMessages:SU,sendMessage:o1,seenMessage:NR}},kU=x.aside`
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
`,CU=x.div`
    padding: 10px;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,Bx=x.div`
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
`,AU=x(nk)`
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
`,Hx=x.div`
    font-size: 0.8rem;
    opacity: 0.3;
    color: ${({theme:e})=>e.colors.textColor};
    padding: 4px 10px;
    text-transform: uppercase;
`,RU=x.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 0 2px;
`,c1=x.span`
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
`,b=x.div`
  display: flex;
  align-items: ${({ai:e})=>e??"center"};
  justify-content: ${({jc:e})=>e??"flex-start"};
  flex-direction: ${({d:e})=>e??"row"};
  flex-wrap: ${({wrap:e})=>e};
  gap: ${({gap:e})=>`${e??0}px`};
  width: ${({width:e})=>e??"fit-content"};
  height: ${({height:e})=>e??"fit-content"};
  padding: ${({padding:e})=>e??"0"};
`,Fr=x.span`
    font-size: 0.8rem;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.textColor};
    opacity: 0.6;
`,PU=x.div`
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
`,Xp=x.div`
    width: 6px;
    height: 6px;
    border-radius: 100%;
    opacity: 0;
    transform: scale(0);
    background: grey;
`,Wx=({isTyping:e=!0})=>e?c.jsxs(PU,{children:[c.jsx(Xp,{}),c.jsx(Xp,{}),c.jsx(Xp,{})]}):null,MR=({typing:e,isGroupChat:t,children:n})=>t&&e.length>0?c.jsxs(b,{gap:8,children:[c.jsxs(Fr,{children:[e.map((r,i)=>(i!==0?", ":"")+(r==null?void 0:r.displayName))," typing"]}),c.jsx(Wx,{isTyping:!0})]}):e.length>0?c.jsxs(b,{gap:8,children:[c.jsx(Fr,{children:"Typing"}),c.jsx(Wx,{isTyping:!0})]}):n,LR=({isMine:e,sendStatus:t})=>!e||t==="Error"?null:t==="Pending"?c.jsx($N,{}):t==="Sent"?c.jsx(bN,{}):c.jsx(jN,{}),Vf=e=>{if(!e)return{status:"offline"};const t=new Date().getTime()-3e5,n=new Date().getTime()-18e5*4;if(e>t)return{status:"online"};const i=new Date(e),s=new Date(new Date().getTime()-i.getTime()).getMinutes(),o=Math.floor(s/60)>0?Math.floor(s/60)===1?"hour":"hours":"minutes";return e>n?{status:`last seen ${s} ${o} ago`}:{status:`last seen ${i.toLocaleDateString("ru-RU")}`}},Rr=e=>c.jsx(Yh,{...e,fallbackIcon:e.fallbackIcon??(e.isAuthor?Pn.author:Pn.user),borderRadius:"100%"}),bU=e=>{if((e==null?void 0:e.length)===0)return"linear-gradient(45deg, #c47200, #da471f)";switch(e==null?void 0:e[0]){case"A":case"D":case"G":case"J":case"X":return"linear-gradient(45deg, #b42db4, #7d35ca)";case"L":case"M":case"P":case"Z":case"1":case"2":return"linear-gradient(45deg, #2db42f, #35ca98)";case"F":case"K":case"Y":case"S":case"4":case"3":return"linear-gradient(45deg, #3f2db4, #3558ca)";case"H":case"E":case"T":case"U":case"C":case"5":case"6":case"7":return"linear-gradient(45deg, #b42d2d, #ca3578)";default:return"linear-gradient(45deg, #c47200, #da471f)"}},jU=x.div`
    width: ${({$width:e})=>e??"50px"};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: ${({$background:e})=>e};
    color: #fff;

	 font-size: calc(${({$width:e})=>e??"50px"} / 3);
`,Jm=({name:e,width:t})=>{const n=(e==null?void 0:e.split(" ").length)===1?e[0].toUpperCase()+e[1].toUpperCase():e==null?void 0:e.split(" ").map(i=>{var s;return(s=i[0])==null?void 0:s.toUpperCase()}).join(""),r=bU(n);return c.jsx(jU,{$background:r,$width:t,children:n})},NU=x.span`
	font-size: 0.8rem;
	font-weight: 300;
	opacity: 0.5;

	&.online {
		color: ${({theme:e,color:t})=>t??e.colors.blue.action};
		opacity: 1;
	}
`,Uf=({isAuthor:e,showLastSeen:t,status:n,color:r})=>c.jsx(NU,{color:r,className:n==="online"&&t?"online":"",children:e?"Author":t?n:"User"}),MU=x(Ms)`
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
        padding: 4px 0;

        .general-cover {
            min-width: 40px;
            min-height: 40px;
        }
    }
`,u1=x.div`
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({theme:e})=>e.colors.blue.action};
    outline: 2px solid ${({theme:e})=>e.colors.pageBackground};
    position: absolute;
    bottom: 0px;
    right: 0px;
`,qx={hour:36e5},LU=e=>{const t=new Date().getTime()-new Date((e==null?void 0:e.sentTime)??"").getTime(),n=t>qx.hour*24,r=t>qx.hour*24*7;return n?r?new Date((e==null?void 0:e.sentTime)??"").toLocaleDateString("ru-RU"):new Date((e==null?void 0:e.sentTime)??"").toLocaleDateString("ru-RU",{weekday:"short"}):new Date((e==null?void 0:e.sentTime)??"").toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})},DR="soundbubble",DU=(e,t,n,r)=>{if(!e)return{sender:""};if((e==null?void 0:e.sender)===DR)return{sender:""};const i=n[(e==null?void 0:e.sender)??""];return{sender:(i==null?void 0:i.uid)===(r==null?void 0:r.uid)?"You":t?i==null?void 0:i.displayName:""}},$R=e=>{var t;return(e==null?void 0:e.status)==="pending"?"Pending":(e==null?void 0:e.status)==="error"?"Error":e&&((t=e==null?void 0:e.seenBy)==null?void 0:t.filter(n=>n!==e.sender).length)===0?"Sent":"Received"},$U=x(Ms)`
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
`,OR=x.div`
    font-size: 0.9rem;
    font-weight: 300;
`,OU=x.div`
    height: 32px;
    font-size: 0.8rem;
    font-weight: 200;
`,VU=x.span`
    opacity: 0.5;
    overflow: hidden;
    display: inline-flex;
    flex-wrap: wrap;
    column-gap: 6px;
`,Jp=x.div`
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
`;const VR=x.div`
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
`,Zp={s:"35px",m:"50px"},UR=({chat:e,isSelected:t,unreadCount:n,lastMessage:r,chatData:i,children:s,onClick:o,size:a="m"})=>{var I,A,z,H;const[{data:l}]=he.useUser(),u=e.chatName!=="",d=e.participants.filter(ee=>ee!==(l==null?void 0:l.uid)),h=i[d[0]],f=u?e.chatImage:h==null?void 0:h.photoURL,p=u?e.chatName:h==null?void 0:h.displayName,m=Vf(h==null?void 0:h.online).status,v=$R(r),{sender:w}=DU(r,u,i,l),g=LU(r),y=(r==null?void 0:r.attachedSongs.length)!==0?(I=i[(r==null?void 0:r.attachedSongs[0])??""])==null?void 0:I.name:null,_=(r==null?void 0:r.attachedAuthors.length)!==0?(A=i[(r==null?void 0:r.attachedAuthors[0])??""])==null?void 0:A.displayName:null,E=(r==null?void 0:r.attachedAlbums.length)!==0?(z=i[(r==null?void 0:r.attachedAlbums[0])??""])==null?void 0:z.name:null,T=(e==null?void 0:e.typing.filter(ee=>ee!==(l==null?void 0:l.uid)).map(ee=>i[ee]))??[],k=ee=>{o==null||o(e,ee)};return c.jsxs($U,{onClick:k,to:`/chat/${e.id}`,className:t?"selected":"",children:[c.jsx(Rr,{fallbackIcon:c.jsx(Jm,{name:p,width:Zp[a]}),size:Zp[a],src:f,colors:["grey"],isAuthor:!1,children:m==="online"&&!u&&c.jsx(u1,{})}),c.jsxs(b,{d:"column",ai:"flex-start",height:Zp[a],width:"100%",gap:2,children:[c.jsxs(b,{jc:"space-between",width:"100%",children:[c.jsx(OR,{children:p}),r&&c.jsxs(VR,{children:[c.jsx(LR,{isMine:w==="You",sendStatus:v}),c.jsx("span",{children:g})]})]}),c.jsxs(b,{width:"100%",jc:"space-between",children:[c.jsx(MR,{isGroupChat:u,typing:T,children:c.jsxs(OU,{children:[!r&&c.jsx(Uf,{status:u?`${e.participants.length} members`:m,isAuthor:!1,showLastSeen:!0}),c.jsxs(VU,{children:[w&&`${w}:`," ",r==null?void 0:r.message.substring(0,70)," ",(((H=r==null?void 0:r.message)==null?void 0:H.length)??0)>70?"...":"",y&&c.jsxs(Jp,{children:[Pn.song,y]}),_&&c.jsxs(Jp,{children:[Pn.author,_]}),E&&c.jsxs(Jp,{children:[Pn.album,E]})]})]})}),!!n&&c.jsx(c1,{children:n})]})]}),s]})},Wc=x.div`
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
`,re=x(Wc)`
    width: ${({width:e})=>e??"100px"};
    min-width: ${({minWidth:e,width:t})=>e??t??"100px"};
    height: ${({height:e})=>e??"100px"};
    border-radius: ${({radius:e})=>e??"10px"};
`,mt=()=>c.jsxs(b,{gap:12,padding:"2px 25px",children:[c.jsx(re,{width:"50px",height:"50px",radius:"100%"}),c.jsxs(b,{d:"column",gap:4,ai:"flex-start",children:[c.jsx(re,{width:"140px",height:"14px"}),c.jsx(re,{width:"80px",height:"10px"})]})]}),FR=()=>c.jsxs(b,{d:"column",gap:16,padding:"16px 0",children:[c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{}),c.jsx(mt,{})]}),UU=x.div`
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
`,Bi=()=>c.jsx(UU,{className:"loading",children:c.jsx(QN,{})}),Gx=x.div`
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
`,cr=({loading:e,children:t,appearance:n="ghost",disabled:r,width:i,...s})=>{const o={primary:ws.colors.blue.action,secondary:ws.colors.blue.transparent,ghost:"transparent"};return c.jsxs(q,{disabled:r||e,$background:o[n],$width:i,color:n==="primary"?"#fff":"",...s,children:[c.jsx(Gx,{className:e?"show":"hide",children:c.jsx(Bi,{})}),c.jsx(Gx,{className:e?"hide":"show",children:t})]})},FU=x.div`
	color: ${({$checked:e,theme:t})=>e?t.colors.blue.action:t.colors.greyText};
	height: 24px;
`,d1=({checked:e})=>c.jsx(FU,{$checked:e,children:e?c.jsx(NN,{size:24,color:"blue"}):c.jsx(DN,{size:24})}),zU=x.div`
    position: relative;
    width: 100%;

    opacity: ${({$disabled:e})=>e?.4:1};
    pointer-events: ${({$disabled:e})=>e?"none":"all"};
`,zR=x.div`
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
`,BU=x.div`
    height: fit-content;
    position: relative;
`,HU=x(zR)`
    left: 10px;
`,WU=x(zR)`
    right: 10px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background: ${({theme:e})=>e.colors.lightHover};
    }
`,h1=x.label`
    font-size: 0.8rem;
    margin-bottom: 4px;
    font-weight: 300;
    display: inline-block;
    width: 100%;
    color: ${({theme:e})=>e.colors.greyText};
`,qU=x(h1)`
    margin-bottom: 0;
    margin-top: 4px;
    color: ${({theme:e})=>e.colors.red.text};
`,BR=x.span`
    color: ${({theme:e})=>e.colors.red.main};
`,GU=x.input`
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
`,nn=S.forwardRef(({icon:e,rightIcon:t,label:n,required:r,error:i,type:s,onRightIconClick:o,...a},l)=>c.jsxs(zU,{$disabled:a.disabled,children:[n&&c.jsxs(h1,{children:[n," ",c.jsx(BR,{children:r?"*":""})]}),c.jsxs(BU,{children:[c.jsx(HU,{children:e}),c.jsx(GU,{$hasError:!!i,$hasIcon:!!e,$hasRightIcon:!!t,type:s,required:r,ref:l,...a}),t&&c.jsx(WU,{onClick:o,children:t})]}),i&&c.jsx(qU,{children:i})]}));nn.displayName="Input";const QU=x.div`
    width: 100%;
    height: 100%;
    position: relative;
`,KU=x.div`
    position: absolute;
    width: 100%;
    max-height: 100vh;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    overflow: hidden;
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
        height: fit-content;
        pointer-events: all;
        background-position: 0 100%;
    }
`,YU=x.div``,Hi=({loading:e,children:t,skeleton:n,background:r,...i})=>c.jsxs(QU,{...i,children:[c.jsx(KU,{$background:r,className:e?"loading":"",children:n}),c.jsx(YU,{children:t})]}),HR=x.div`
    padding: 2px 5px;
    display: inline-block;
    background: #fff;
    color: ${({theme:e})=>e.colors.blue.action};
    font-weight: 600;
    font-size: 0.7rem;
    border-radius: 10px;
    height: 18px;
`,XU=x.div`
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
`,JU=x.div`
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
`,ZU=x.div`
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
`,eF=({inputPlaceholder:e,added:t,allItems:n,searchValue:r,setAdded:i,setVisibleItems:s,itemImage:o,itemName:a,setSearchValue:l})=>{const u=h=>()=>{i(f=>f.filter(p=>p!==h))},d=h=>{console.log({e:h.target.value}),l(h.target.value),h.target.value!==void 0&&h.target.value.length!==0?s(()=>n.filter(f=>{var p;return f?Rs(a(f)).includes(Rs((p=h==null?void 0:h.target)==null?void 0:p.value)):!1})):s(n)};return c.jsxs(ZU,{className:t.length>0?"open":"",children:[c.jsx(nn,{width:100,placeholder:e,icon:c.jsx(ha,{}),onChange:d,value:r}),c.jsx(b,{wrap:"wrap",width:"100%",gap:4,children:t.map(h=>{const f=n.find(p=>(p.id??p.uid??"")===h);return f?c.jsxs(XU,{children:[o(f),a(f),c.jsx(q,{$width:"20px",$height:"20px",onClick:u(h),children:c.jsx(LN,{size:18})})]}):null})})]})},aa=e=>"isAuthor"in e&&(e!=null&&e.isAuthor)?"author":"displayName"in e&&(e!=null&&e.displayName)?"user":"isAlbum"in e&&(e!=null&&e.isAlbum)?"album":"subscribers"in e&&(e==null?void 0:e.subscribers)!==void 0?"playlist":"song",tF=e=>{const[t,n]=S.useState(e),[r,i]=S.useState(""),[s,o]=S.useState([]);return{visibleItems:t,addedItems:s,searchValue:r,setSearchValue:i,handleClick:(d,h)=>{h.preventDefault();const f=ra(d);s.find(m=>m===f)?o(m=>m.filter(v=>v!==f)):(o(m=>[...m,f]),r.length!==0&&(i(""),n(e)))},setVisibleItems:n,handleDeselectAll:()=>{n(e),o([]),i("")},setAddedItems:o,getItemImage:d=>{const h=aa(d),f=fU(d);return c.jsx(Yh,{fallbackIcon:Pn[h],borderRadius:"100%",src:f,colors:["grey"],size:"18px"})}}},f1=({entities:e,inputPlaceholder:t,renderItem:n,renderButton:r})=>{const{visibleItems:i,addedItems:s,searchValue:o,setSearchValue:a,setVisibleItems:l,handleClick:u,handleDeselectAll:d,setAddedItems:h,getItemImage:f}=tF(e);return c.jsxs(c.Fragment,{children:[c.jsx(eF,{inputPlaceholder:t,added:s,allItems:e,searchValue:o,setSearchValue:a,itemImage:f,itemName:p=>os(p),setAdded:h,setVisibleItems:l}),c.jsx(b,{jc:"flex-end",width:"100%",children:s.length>0&&c.jsx(q,{onClick:d,$height:"25px",$width:"90px",style:{fontSize:"0.8rem",opacity:"0.7"},children:"Deselect all"})}),c.jsx(b,{d:"column",width:"100%",children:i.map(p=>{const m=ra(p),v=!!s.find(w=>w===m);return n(p,v,u)})}),c.jsx(JU,{className:s.length>0?"open":"",children:r(s)})]})},qc=({})=>{const{chats:e,chatData:t,loadingChats:n}=Tr.useChats(),r=i=>{};return Tr.useLoadChats(),c.jsx(b,{d:"column",width:"100%",height:"100%",padding:"0 25px",children:c.jsx(Hi,{loading:n,skeleton:c.jsx(FR,{}),children:c.jsx(f1,{inputPlaceholder:"Search for friends...",entities:e,renderItem:(i,s,o)=>c.jsx(UR,{size:"s",chat:i,chatData:t,onClick:o,lastMessage:void 0,unreadCount:0,isSelected:!1,children:c.jsx(d1,{checked:s})},i.id),renderButton:i=>c.jsxs(c.Fragment,{children:[c.jsx(nn,{placeholder:"Your Message"}),c.jsxs(cr,{appearance:"primary",onClick:()=>r(),children:["Send",c.jsx(HR,{children:i.length})]})]})})})})},WR=220,nF={content:null,isOpen:!1,x:0,y:0,height:0,width:WR,origin:"center"},rF=(e,t,n,r,i,s)=>{let o,a,l,u=0;return e-s<0?(l=e-n,a="left"):(a="right",l=e-s),t+i>window.innerHeight-100?(o="bottom",u=t-i-4):(o="top",u=t+r+4),{posX:l+n,posY:u,origin:`${o} ${a}`}},qR=V(),GR=V(),cc=ne(nF);j({clock:qR,source:cc,fn:(e,{content:t,width:n=WR,height:r,e:i})=>{const s=i.currentTarget.getBoundingClientRect(),{left:o,top:a,width:l,height:u}=s,{posX:d,posY:h,origin:f}=rF(o,a,l,u,r,n??e.width);return{content:t,x:d,y:h,origin:f,height:r,width:n??e.width,isOpen:!e.isOpen}},target:cc});j({clock:GR,source:cc,fn:e=>({...e,content:null,isOpen:!1}),target:cc});const rn={usePopup:()=>me(cc),events:{open:qR,close:GR}},iF={loadingPlaylistId:null,loadingAddedPlaylists:!1,loading:!1,currentPlaylist:null,currentPlaylistSongs:null,addedPlaylists:[]},QR=De(async e=>{try{if(!e.loadingPlaylistId)throw new Error("Playlist id not specified");const t=await mn.getPlaylistByUid(e.loadingPlaylistId),n=await en.getSongsByUids(t.songs);return{playlist:t,songs:n}}catch(t){throw new Error(t.message)}}),KR=De(async({songId:e,playlistIds:t})=>{try{if(!e)throw new Error("Song id not specified");if(!t.length)throw new Error("Playlist ids not specified");return await mn.addSongToPlaylists(e,t)}catch(n){throw new Error(n.message)}}),YR=V(),XR=V(),uc=ne(iF);j({clock:YR,source:uc,fn:(e,t)=>({...e,loadingPlaylistId:t,loading:!0}),target:[uc,QR]});j({clock:QR.doneData,source:uc,fn:(e,{playlist:t,songs:n})=>({...e,loading:!1,currentPlaylist:t,currentPlaylistSongs:n}),target:uc});j({clock:XR,target:KR});const Zm={usePlaylist:()=>me(uc),useAddingSongToPlaylists:()=>me([KR.pending]),events:{loadPlaylist:YR,addSongToPlaylists:XR}},sF=x.div`
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
`,oF=x(Ms)`
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
        text-decoration: underline;
    }
`,Ps=({authors:e,onAuthorClick:t,width:n,disableOnDesktop:r=!1,disableOnMobile:i=!0})=>{const s=o=>a=>{a.stopPropagation(),t==null||t(o)};return c.jsxs(sF,{className:"authors",$width:n,$disableOnDesktop:r,$disableOnMobile:i,children:[e==null?void 0:e.map((o,a)=>c.jsxs(c.Fragment,{children:[a!==0?"&":" ",c.jsx(oF,{onClick:s(o),to:`/author/${o.uid}`,children:o.displayName},o.uid+a)]})),!(e!=null&&e.length)&&"-"]})},Ff=({loading:e,playling:t,size:n})=>c.jsx(c.Fragment,{children:e?c.jsx(Bi,{}):t?c.jsx(tT,{size:n}):c.jsx(ly,{size:n})}),aF=()=>{const e=[10,11,8,4,12,13,7,13,10,5,9,8,10,12,4,12,5,13,12,11,5,9,8,10];return`@keyframes playing {
		${e.map((n,r)=>`${100/e.length*r+"%"} {
			height: ${n}px;
		}`)}
	}`},lF=x.div`
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

`,eg=x.div`
	width: 2.5px;
	animation: playing 8s infinite;
	height: 12px;
	border-radius: 2px;

	${aF()}
`,JR=({playing:e,color:t})=>c.jsxs(lF,{$color:t,className:e?"playing-animation playing":"playing-animation",children:[c.jsx(eg,{}),c.jsx(eg,{}),c.jsx(eg,{})]}),p1=ws.borderRadius.huge,ZR=e=>c.jsx(Yh,{...e,borderRadius:e.borderRadius??p1,fallbackIcon:e.isAlbum?Pn.album:Pn.playlist}),e0=x(q)`
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
`,cF=x(Ms)`
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
        ${e0} {
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
        border-radius: ${p1};
    }

    &:hover:before {
        opacity: 0.5;
    }

    &:hover {
        background: ${({$orientation:e,theme:t})=>e==="horizontal"?t.colors.hover:""};

        ${e0} {
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
`,uF=x.div`
    font-size: 0.95rem;
    font-weight: 200;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`;x.div`
    font-size: 0.8rem;
`;const bs=({playlist:e,children:t,onClick:n,as:r,orientation:i="vertical"})=>{const{image:s,name:o,imageColors:a,authors:l,id:u,songs:d,isAlbum:h,isPrivate:f}=e,{play:p}=G.useControls(),{state:m}=G.useSong(),{queue:v}=G.queue.useQueue(),[w,g]=S.useState(!1),y=`/playlist/${u}`,_=m==="playing"&&v.url===y,E=(I,A)=>{const z={currentSongIndex:A,name:o,icon:s,url:y,songs:I,shuffle:!1};p(I[0],z)},T=I=>{I.preventDefault(),g(!0),en.getSongsByUids(d).then(A=>{E(A,0),g(!1)})},k=I=>{n==null||n(e,I)};return c.jsxs(cF,{as:r,onClick:k,$orientation:i,className:_?"playing":"",to:`/playlist/${u}`,$color1:a[0],children:[!t&&c.jsx(e0,{$orientation:i,$color:a[0],onClick:T,children:_?c.jsx(JR,{playing:!0,color:a[1]}):c.jsx(Ff,{loading:w,playling:!1,size:18})}),c.jsx(ZR,{size:void 0,borderRadius:i==="vertical"?void 0:"3px",src:s,colors:a,isAlbum:h}),c.jsxs(b,{width:"100%",jc:"space-between",children:[c.jsxs(b,{d:"column",width:"100%",gap:0,ai:"flex-start",children:[c.jsxs(b,{children:[c.jsx(uF,{children:o}),f&&c.jsx(ZS,{size:18})]}),i==="vertical"?c.jsx(Ps,{authors:l}):c.jsxs(b,{width:"100%",gap:4,children:[c.jsxs(Fr,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[h?"Album":"Playlist"," /"]}),c.jsx(Ps,{width:"fit-content",authors:l})]})]}),t]})]})},eP=({song:e})=>{const[t]=he.useOwnPlaylists(),n=r=>{e&&Zm.events.addSongToPlaylists({songId:e.id,playlistIds:r})};return c.jsx(b,{width:"100%",d:"column",padding:"0 25px",children:c.jsx(f1,{entities:t,inputPlaceholder:"Search for playlists...",renderItem:(r,i,s)=>c.jsx(bs,{as:"div",playlist:r,onClick:s,orientation:"horizontal",children:c.jsx(d1,{checked:i})},r.id),renderButton:r=>c.jsx(c.Fragment,{children:c.jsx(cr,{appearance:"primary",onClick:()=>n(r),children:"Save changes"})})})})},tP=({song:e})=>{var s;const[{data:t}]=he.useUser(),n=(s=t==null?void 0:t.addedSongs)==null?void 0:s.find(o=>o===(e==null?void 0:e.id)),r=()=>{bt.events.open({title:`Share "${e==null?void 0:e.name}" with friends`,content:c.jsx(qc,{entity:e})}),rn.events.close()},i=()=>{bt.events.open({title:`Add "${e==null?void 0:e.name}" to playlist`,content:c.jsx(eP,{song:e})}),rn.events.close()};return c.jsxs(wc,{children:[n?c.jsxs(q,{children:[c.jsx(WN,{}),"Remove from Liked"]}):c.jsxs(q,{children:[c.jsx(sy,{size:20}),"Add to Liked"]}),c.jsxs(q,{onClick:i,children:[c.jsx(iT,{size:20}),"Add to playlist"]}),c.jsxs(q,{children:[c.jsx(r4,{}),"Add to queue"]}),c.jsx(Qo,{}),c.jsxs(q,{onClick:r,children:[c.jsx(yc,{}),"Share"]}),c.jsxs(q,{children:[c.jsx(ay,{}),"Info"]}),c.jsxs(q,{children:[Pn.author,"Authors"]}),(t==null?void 0:t.isAdmin)&&c.jsxs(c.Fragment,{children:[c.jsx(Qo,{}),c.jsxs(q,{children:[c.jsx(JS,{}),"Edit song",c.jsx("span",{className:"admin",children:"Admin"})]})]})]})},Qx=e=>e<=9?`0${e}`:`${e}`,Kx=e=>{const t=Math.floor(e/60),n=Math.floor(e%60);return`${Qx(t)}:${Qx(n)}`},nP=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    color: #fff;
`,dF=x.input`
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
`,nd=x.button`
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
`,Yx=x.div`
    font-size: 0.8rem;
`,ml=x(nd)`
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
`,rP=({state:e,colors:t,duration:n,currentTime:r,loopMode:i,shuffle:s,disableNextSongButton:o,handleShuffle:a,handleLoopMode:l,onPlay:u,onNext:d,onPrev:h,handleChangeTime:f,handleMouseUp:p})=>{const{getBackgroundSize:m,currentTimeStr:v,durationStr:w}=S.useMemo(()=>({getBackgroundSize:{backgroundSize:`calc(${r*100/n}% + 1px) 100%`},currentTimeStr:Kx(r),durationStr:Kx(n)}),[n,r]),g=t==null?void 0:t[0];return c.jsxs(nP,{className:"music-controls",children:[c.jsx(dF,{style:m,color1:t==null?void 0:t[0],type:"range",value:r,max:n,min:0,onChange:f,onMouseUp:p,className:"song-slider"}),c.jsxs(b,{jc:"space-between",width:"100%",className:"duration-numbers",children:[c.jsx(Yx,{children:v}),c.jsx(Yx,{children:w})]}),c.jsxs(b,{jc:"space-between",width:"100%",className:"control-buttons",children:[c.jsx(ml,{$color1:g,className:s?"queue-button selected":"queue-button",onClick:a,children:c.jsx(XS,{})}),c.jsxs(b,{gap:20,className:"playback-buttons",children:[c.jsxs(nd,{className:"control-button",onClick:h,children:[c.jsx(Q_,{className:"prev-icon-2"}),c.jsx(Q_,{className:"prev-icon-1"})]}),c.jsx(nd,{className:"control-button",disabled:e==="loading",onClick:u,children:c.jsx(Ff,{loading:e==="loading",playling:e==="playing"})}),c.jsxs(nd,{className:"control-button",disabled:o,onClick:d,children:[c.jsx(G_,{className:"next-icon-1"}),c.jsx(G_,{className:"next-icon-2"})]})]}),c.jsxs(ml,{className:i!==ot.noloop?"queue-button selected":"queue-button",onClick:l,$color1:g,children:[i===ot.loopone&&c.jsx(s4,{}),i!==ot.loopone&&c.jsx(o4,{})]})]})]})},hF=x.button`
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
`,iP=({onClick:e})=>c.jsx(hF,{onClick:e,children:c.jsx(lT,{})}),sP=()=>{const{currentSong:e,state:t}=G.useSong(),{currentTime:n,duration:r}=G.playblack.usePlayback(),{queue:i,loop:s}=G.queue.useQueue(),{next:o,previous:a,play:l}=G.useControls(),u=i.songs.length<2||s===ot.noloop&&i.currentSongIndex===i.songs.length-1,d=S.useCallback(()=>l(),[l]),h=w=>{G.playblack.setIsSliding(!0),G.playblack.setCurrentTime(+w.target.value)},f=w=>{G.playblack.setIsSliding(!1),G.playblack.setLastRangeValue(+w.currentTarget.value),G.lyrics.calculateCurrentLyric(+w.currentTarget.value)},p=()=>{G.queue.changeLoopMode()},m=()=>{},v=S.useCallback(w=>{console.log(w.key),w.key==="Space"&&d()},[d]);return S.useEffect(()=>(addEventListener("keydown",v),()=>removeEventListener("keydown",v)),[v]),{currentTime:n,duration:r,colors:e==null?void 0:e.imageColors,state:t,loopMode:s,shuffle:!0,disableNextSongButton:u,handleShuffle:m,handleLoopMode:p,onPlay:d,onPrev:a,onNext:o,handleMouseUp:f,handleChangeTime:h}},fF=()=>{const e=sP();return c.jsx(rP,{...e})},ch="${DESKTOP_COVER_WIDTH}",po="86vw",pF=x(ya)`
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
`,gF=x.div`
    width: ${ch};
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
`,mF=x.div`
    overflow: hidden;
    border-radius: ${({theme:e})=>e.borderRadius.middle};
    background: ${({$color1:e})=>e??"darkgrey"};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 130px #00000057;
    width: ${ch};
    height: ${ch};
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
`;const yF=x.div`
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
`,vF=x.div`
    font-size: 1.5rem;
    width: calc(${ch} - 40px);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;

    @media (max-width: 1000px) {
        width: calc(${po} - 40px);
    }
`,_F=x.div`
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
`,wF=x.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #fff;
    font-size: 1.8rem;
`,xF=x.div`
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
`;const EF=x.div`
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
`,IF=x.div`
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
`,SF=x.div`
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
`,TF=({type:e,hasLyrics:t,hasQueue:n,handleClickControlButton:r})=>{const{currentSong:i}=G.useSong(),s=()=>G.fullscreen.close();return c.jsx(yF,{children:c.jsxs(gF,{children:[c.jsx(mF,{$color1:i==null?void 0:i.imageColors[0],children:c.jsx(Ay,{size:"400px",colors:i==null?void 0:i.imageColors,src:i==null?void 0:i.cover})}),c.jsxs(b,{d:"column",gap:2,children:[c.jsxs(b,{width:"100%",gap:10,children:[c.jsx(vF,{children:(i==null?void 0:i.name)??"Untitled"}),c.jsx(Kh,{height:"30px",songId:i==null?void 0:i.id,onClick:()=>null,likeColor:i==null?void 0:i.imageColors[1]})]}),c.jsx(Ps,{authors:i==null?void 0:i.authors,onAuthorClick:s})]}),c.jsx(fF,{}),c.jsxs(IF,{children:[c.jsx(ml,{children:c.jsx(u4,{opacity:.9})}),c.jsxs(b,{gap:20,children:[c.jsx(ml,{disabled:!n,$color1:i==null?void 0:i.imageColors[0],className:e==="queue"?"selected":"",onClick:r("queue"),children:c.jsx(nT,{opacity:.9})}),c.jsx(ml,{disabled:!t,$color1:i==null?void 0:i.imageColors[0],className:e==="lyrics"?"selected":"",onClick:r("lyrics"),children:c.jsx(rT,{opacity:.9})})]})]})]})})},oP=()=>{const e=S.useRef(null),[{lyrics:t,currentLyricIndex:n},r]=G.lyrics.useLyrics(),{state:i}=G.useSong(),s=o=>()=>{isNaN(+o)||(G.playblack.setLastRangeValue(+o),G.lyrics.calculateCurrentLyric(+o))};return S.useEffect(()=>{e.current&&e.current.scrollIntoView({behavior:"smooth",block:"end"})},[n]),S.useEffect(()=>(G.lyrics.setShouldCalculateLyrics(!0),()=>{G.lyrics.setShouldCalculateLyrics(!1)}),[]),t?c.jsx(wF,{children:t.map((o,a)=>{var m;const l=i==="pause"||isNaN(+o.startTime),u=a===n,d=a+1<n||a-1>n,h=o.text==="@loading",f=(((m=t[a+1])==null?void 0:m.startTime)??o.startTime)-o.startTime,p=l?"ordinary":u?"current":d?"farFromCurrent":"";return c.jsx(xF,{ref:r&&u&&!l?e:void 0,className:p,onClick:s(o.startTime),children:h?c.jsxs(EF,{className:u&&i==="playing"?"current":"",$duration:f,children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}):o.text},o.text+a)})}):"No lyrics available"},uh=x.div`
    border: none;
    transition: 0.2s opacity;
    cursor: pointer;

    width: var(--icon-size);
    height: var(--icon-size);
`,zf=x.div`
    position: absolute;
    z-index: 1;
    background: #0e0e0e;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme:e})=>e.colors.overlay};
    border-radius: ${Cy};
`,dh=x.button`
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
`,aP=x(zf)`
    left: 0;
    top: 0;
    opacity: 0;
`,lP=x(zf)`
    left: 0;
    top: 0;

    .playing-animation {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    ${uh} {
        opacity: 0;
    }

    svg {
        stroke-width: 1;
    }
`,kF=x(zf)`
    left: 0;
    top: 0;
`,CF=x.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;

    ${zf} {
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
`,AF=x.div`
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

            ${lP} {
                ${uh} {
                    opacity: 1;
                }

                .playing-animation {
                    opacity: 0;
                }
            }

            .cover-children {
                ${aP} {
                    opacity: 1;
                }
            }

            ${dh} {
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

    ${dh} {
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
`,RF=x.div`
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
`,PF=x.div`
    font-weight: 200;
    opacity: 0.85;
    font-size: 1rem;

    @container (min-width: 700px) {
        white-space: nowrap;
    }
`,bF=x.div`
    display: flex;
    align-items: center;
    gap: 8px;

    @container (min-width: 700px) {
        width: 100%;
    }
`,Xx=x.div`
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
`;x(q)`
    width: 30px;
    min-height: 30px;
    color: ${({theme:e})=>e.colors.greyText};

    svg {
        width: 22px;
        height: 22px;
    }
`;const jF=x.div`
    display: flex;
    align-items: center;
    gap: 6px;

    @container (max-width: 699px) {
        .like-button {
            display: none;
        }

        ${dh} {
            opacity: 0.4;
        }
    }
`,NF=x.div`
    container-type: size;
    width: 100%;
    height: 50px;
`,MF=x.div`
    width: 100%;
    @container (max-width: 699px) {
        display: none;
    }
`,LF=x.div`
    height: 60px;

    @container (min-width: 700px) {
        display: none;
    }
`,Gc=S.memo(({song:e,playing:t,loading:n,index:r,onClick:i})=>{const{id:s,name:o,authors:a,imageColors:l,cover:u,listens:d}=e,h=p=>{p.stopPropagation(),rn.events.open({content:c.jsx(tP,{song:e}),height:272.5,e:p})},f=()=>i(e,r);return c.jsxs(AF,{onClick:f,tabIndex:0,role:"button","aria-pressed":"false",playing:t,children:[c.jsxs(CF,{$color1:l[0],children:[c.jsxs(Ay,{size:"35px",src:u,colors:l,children:[!n&&!t&&c.jsx(aP,{children:c.jsx(uh,{children:c.jsx(ly,{className:"action-icon"})})}),!n&&t&&c.jsxs(lP,{children:[c.jsx(uh,{children:c.jsx(tT,{className:"action-icon"})}),c.jsx(JR,{color:l[1],playing:!0})]}),n&&c.jsx(kF,{children:c.jsx(Bi,{})})]}),c.jsxs(RF,{children:[c.jsxs(bF,{children:[c.jsx(PF,{children:o}),c.jsxs(Xx,{children:[d,c.jsx(bd,{})]})]}),c.jsx(Ps,{authors:a,disableOnMobile:!0})]})]}),c.jsxs(Xx,{className:"outside",children:[d,c.jsx(bd,{})]}),c.jsxs(jF,{children:[c.jsx(Kh,{width:"35px",height:"35px",songId:s,likeColor:l[1],onClick:()=>null}),c.jsx(dh,{onClick:h,children:c.jsx(iy,{})})]})]})});Gc.displayName="SongItem";const g1=e=>{const{play:t}=G.useControls();return{handlePlay:(r,i)=>{const s={currentSongIndex:i,name:e.listName,icon:e.listIcon,url:e.listUrl,songs:e.songs,shuffle:!1};t(r,s)}}},cP=e=>{const{currentSong:t,state:n,loaded:r}=G.useSong(),{songs:i}=e,{handlePlay:s}=g1(e);return c.jsx(c.Fragment,{children:i.map((o,a)=>{const l=o.id===(t==null?void 0:t.id);return c.jsx(Gc,{onClick:s,index:a,song:o,playing:l&&n==="playing",loading:l&&n==="loading",loaded:l&&r},o.id+a)})})},zr=S.memo(({user:e,onClick:t,children:n,as:r,showLastSeen:i,orientation:s="vertical"})=>{if(!e)return null;const{uid:o,imageColors:a,photoURL:l,isAuthor:u,displayName:d,isVerified:h,online:f}=e,p=s==="vertical",m=Vf(f).status,v=w=>{t==null||t(e,w)};return c.jsxs(MU,{as:r,to:`/author/${o}`,$orientation:s,onClick:v,children:[c.jsx(Rr,{colors:a,src:l,size:p?"var(--size)":"38px",isAuthor:u,children:m==="online"&&!u&&c.jsx(u1,{})}),c.jsxs(b,{d:"column",gap:p?4:1,width:"100%",ai:p?"center":"flex-start",children:[c.jsxs(b,{jc:p?"center":"flex-start",gap:8,width:"100%",children:[c.jsx("h4",{children:d}),h&&c.jsx(Lh,{size:16,style:{color:ws.colors.blue.main}})]}),c.jsx(Uf,{status:m,isAuthor:u,showLastSeen:i})]}),n]})});zr.displayName="UserItem";function uP(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}const DF=({displayName:e,photoURL:t,imageColors:n,isAuthor:r})=>({uid:uP(),imageColors:n??[],photoURL:t??"https://via.placeholder.com/150",isAuthor:r??!1,displayName:e??"Test User",isVerified:!0,online:0,lastSongPlayed:"",addedPlaylists:[],addedAuthors:[],addedSongs:[],ownPlaylists:[],lastQueue:{image:"",name:"",songsList:[],source:""},numberOfListenersPerMonth:0,subscribers:0}),$F=({queue:e})=>{var t;return c.jsxs(SF,{children:[(t=e.url)!=null&&t.includes("author")?c.jsx(zr,{onClick:()=>G.fullscreen.close(),orientation:"horizontal",user:DF({displayName:e.name})}):null,c.jsx(Qo,{}),c.jsx(cP,{songs:e.songs,listName:null,listIcon:void 0,listUrl:null})]})},OF=({type:e})=>{const{queue:t}=G.queue.useQueue();return e===null?null:c.jsxs(_F,{className:e!==null?"visible":"",children:[e==="lyrics"&&c.jsx(oP,{}),e==="queue"&&c.jsx($F,{queue:t})]})},VF=({open:e})=>{const{currentSong:t}=G.useSong(),{queue:n}=G.queue.useQueue(),[r,i]=S.useState(e),[s,o]=S.useState(null),a=(t==null?void 0:t.lyrics)!==void 0&&((t==null?void 0:t.lyrics.length)??0)>0,l=()=>{G.fullscreen.close()};S.useEffect(()=>{e?i(!0):setTimeout(()=>{i(!1)},200)},[e]);const u=d=>()=>{o(s===d?null:d)};return S.useEffect(()=>{!a&&s==="lyrics"&&o(null)},[a,s]),c.jsx(pF,{className:e?"open":"close",$colors:t==null?void 0:t.imageColors,children:r&&c.jsxs(c.Fragment,{children:[c.jsx(iP,{onClick:l}),c.jsx(TF,{type:s,handleClickControlButton:u,hasQueue:n.songs.length>0,hasLyrics:a}),c.jsx(OF,{type:s})]})})},UF="data:image/svg+xml;base64,PHN2ZyBpZD0i0KHQu9C+0LlfMSIgZGF0YS1uYW1lPSLQodC70L7QuSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzAyLjMyIDI0Ny4yMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj0JHQtdC30YvQvNGP0L3QvdGL0Llf0LPRgNCw0LTQuNC10L3Rgl85OCk7fS5jbHMtMntmaWxsOnVybCgj0JHQtdC30YvQvNGP0L3QvdGL0Llf0LPRgNCw0LTQuNC10L3Rgl8yOTcpO30uY2xzLTN7ZmlsbDp1cmwoI9CR0LXQt9GL0LzRj9C90L3Ri9C5X9Cz0YDQsNC00LjQtdC90YJfOTMpO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0i0JHQtdC30YvQvNGP0L3QvdGL0Llf0LPRgNCw0LTQuNC10L3Rgl85OCIgeDE9IjUwLjg2IiB5MT0iODUuODUiIHgyPSIxNjMuMzMiIHkyPSI4NS44NSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgzNi4xMiAxODUuOCkgcm90YXRlKC0xMDkuNDMpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2ZiMWZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZhYWRlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ItCR0LXQt9GL0LzRj9C90L3Ri9C5X9Cz0YDQsNC00LjQtdC90YJfMjk3IiB4MT0iLTgwLjA1IiB5MT0iMTY1Ljk1IiB4Mj0iLTMyLjIiIHkyPSIxNjUuOTUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc2LjQxIDE0Mi4wOCkgcm90YXRlKDUzLjQyKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzI4MzU5MyIvPjxzdG9wIG9mZnNldD0iMC45OSIgc3RvcC1jb2xvcj0iIzdkOGJmZSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSLQkdC10LfRi9C80Y/QvdC90YvQuV/Qs9GA0LDQtNC40LXQvdGCXzkzIiB4MT0iNDcuNzciIHkxPSIxNjQuNTciIHgyPSIzNTAuMDkiIHkyPSIxNjQuNTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzZmIxZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkNDk0ZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+TG9nbzM8L3RpdGxlPjx0ZXh0IHg9Ii00Ny43NyIgeT0iLTI5LjciLz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjgxLjQ2IiBjeT0iNTYuMjUiIHI9IjU2LjIzIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIyMDkuNyIgY3k9IjE5NS45IiByPSIyMy45MyIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTM1MCwxNDkuMTRBNjEuMzksNjEuMzksMCwwLDAsMjkyLjU1LDkwLjlhNjIuNzcsNjIuNzcsMCwwLDAtMTAuMjkuMjUsNTAuNyw1MC43LDAsMCwxLTM5LjQxLTEyLjQ4LDEwMy4zNywxMDMuMzcsMCwwLDAtNjQuNC0yNi4zM0MxMTkuNTksNDkuNjUsNjkuODEsOTcuMTUsNjkuODMsMTU2LjA2QTEwMy42MSwxMDMuNjEsMCwwLDAsNzMsMTgxLjM4YTYuMDYsNi4wNiwwLDAsMS0yLjgzLDYuNzMsNDUuMiw0NS4yLDAsMSwwLDU4LjYyLDY2LjYxLDYuMDcsNi4wNywwLDAsMSw3LTJsLjI3LjFhMTI0LDEyNCwwLDAsMSwyOC4wNywxNS43MSw0My43Myw0My43MywwLDAsMCw2My41Ny0xMy40NSwxMzEuODYsMTMxLjg2LDAsMCwxLDIwLTI2LjI2bC40NS0uNDZhNTEuMjYsNTEuMjYsMCwwLDEsMzguNy0xNS4xOWMuNjksMCwxLjM5LDAsMi4wOCwwQTYxLjIyLDYxLjIyLDAsMCwwLDM1MCwxNDkuMTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNzcgLTI5LjcpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTY1Ljc4LDEyNy4zM3Y0MS4yMmMwLDcuMjktMy43OCwxMS44OS0xMC43NiwxMi44NmExNS41NiwxNS41NiwwLDAsMS0xMS41NC0yLjVjLTYtNC4yNi02LTExLjg2LS4wNi0xNi4xM2ExNS40MywxNS40MywwLDAsMSwxMi44Ny0yLjMzYy40NS4xMS45LjE4LDEuNjEuMzJWMTE3LjQ1YzAtMi45MS42MS0zLjcsMy4zLTQuMjZsMTUuMTMtMy4yYzIuMjktLjQ4LDMsLjA2LDMsMi40M3EwLDQuNDgsMCw5YzAsMi4zMS0uOCwzLjIxLTMsMy42OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00Ny43NyAtMjkuNykiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xODguNTksMTg2LjgzVjE0My40NmMwLTMsLjM5LTMuNTYsMy4yOS00LjE5cTcuNzQtMS42OCwxNS41MS0zLjI4YzEuODYtLjM4LDIuNDcuMTMsMi40OSwyLjEuMDUsMy4yNywwLDYuNTQsMCw5LjgxYTIuODQsMi44NCwwLDAsMS0yLjU3LDMuMTNjLTIuOTUuNi01Ljg3LDEuNDMtOC44NCwxLjg3LTEuNzkuMjYtMi4wNiwxLjExLTIuMDYsMi43NS4wNiwxMi44LDAsMjUuNiwwLDM4LjQsMCw4Ljg4LTUuOSwxNC40NS0xNC40NywxMy42MmExNS4wNiwxNS4wNiwwLDAsMS04Ljg2LTMuNWMtNC43MS00LjE0LTQuNzQtMTAuNTMsMC0xNC42MiwzLjg4LTMuMzQsOC40Mi0zLjk0LDEzLjI1LTMuMTRDMTg3LDE4Ni41MSwxODcuNjYsMTg2LjY1LDE4OC41OSwxODYuODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNzcgLTI5LjcpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMjM2LjcyLDEzNy43N1YxNzljMCw3LjI5LTMuNzUsMTEuODQtMTAuNzgsMTIuODNhMTUuMjEsMTUuMjEsMCwwLDEtMTEuODQtMi43NWMtNS41Ni00LjIzLTUuNjEtMTEuNDQsMC0xNS42NGExNS4zLDE1LjMsMCwwLDEsMTMuMzgtMi41Yy4zNy4wOS43Ni4xMiwxLjQ3LjIyVjEyOC4xYzAtMy40My4zOC0zLjg2LDMuNjQtNC41NCw0LjkxLTEsOS44Mi0yLjEsMTQuNzMtMy4xNSwyLjMxLS40OSwyLjkzLDAsMi45NCwyLjQ2cTAsNC40OCwwLDljMCwyLjQtLjY3LDMuMi0yLjk0LDMuNjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNzcgLTI5LjcpIi8+PC9zdmc+",FF=x.img`
    width: 30px;
`,zF=x.div`
    font-size: 1.1rem;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.textColor};
    opacity: 0.9;
`,dP=({short:e=!1})=>c.jsxs(b,{gap:14,children:[c.jsx(FF,{src:UF,className:"logo",alt:"Logo"})," ",!e&&c.jsx(zF,{children:"Soundbubble"})]}),BF=x.div`
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
            animation-delay: 0.8s;

            @keyframes shiftLogo {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(5px);
                }
                100% {
                    transform: translateY(-10px);
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
`,Jx={slowInternetMessage:1e4,fullStop:2e4},HF=()=>{const[{data:e},t]=he.useUser(),[n,r]=S.useState(!1),[i,s]=S.useState(!1);return S.useEffect(()=>{setTimeout(()=>{e||r(!0)},Jx.slowInternetMessage),setTimeout(()=>{e||s(!0)},Jx.fullStop)},[e]),c.jsxs(BF,{className:t?"loading":"loaded",children:[c.jsx(dP,{short:!0}),!i&&n&&c.jsx(Fr,{children:"It seems like You have slow internet connection..."}),i&&c.jsx(Fr,{children:"Failed to load Soundbubble. Please try again later"}),t&&c.jsx(Bi,{})]})},hP=x.div`
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
`,WF=e=>{const{songs:t}=e,{currentSong:n,state:r,loaded:i}=G.useSong(),{handlePlay:s}=g1(e);return c.jsx(hP,{children:t.map((o,a)=>{const l=o.id===(n==null?void 0:n.id);return c.jsx(Gc,{onClick:s,index:a,song:o,playing:l&&r==="playing",loading:l&&r==="loading",loaded:l&&i},o.id+a)})})},hh=x(q)`
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
`,qF=x.div`
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

            ${hh}.left {
                display: flex;
            }
        }

        &.showRight {
            &::after {
                display: block;
            }

            ${hh}.right {
                display: flex;
            }
        }
    }
`,GF=x.div`
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
`,fP=({children:e})=>{const[t,n]=S.useState(!1),[r,i]=S.useState(!1),[s,o]=S.useState(0),a=S.useRef(null),l=h=>{n(h.currentTarget.scrollLeft!==0),i(h.currentTarget.scrollLeft+h.currentTarget.clientWidth<h.currentTarget.scrollWidth),o(h.currentTarget.scrollLeft)},u=()=>{var h;((h=a.current)==null?void 0:h.scrollLeft)!==void 0&&(a.current.scrollLeft=s-a.current.scrollWidth/3)},d=()=>{var h;((h=a.current)==null?void 0:h.scrollLeft)!==void 0&&(a.current.scrollLeft=s+a.current.scrollWidth/3)};return c.jsxs(qF,{className:`${t?"showLeft":""} ${r?"showRight":""}`,children:[c.jsx(hh,{className:"left",onClick:u,children:c.jsx(YS,{})}),c.jsx(GF,{ref:a,onScroll:l,children:e}),c.jsx(hh,{className:"right",onClick:d,children:c.jsx(SN,{})})]})},t0=e=>e===void 0?null:e>=1e3&&e<1e6?(e/1e3).toFixed(1)+"K":e>=1e6&&e<1e9?(e/1e6).toFixed(1)+"M":e.toString(),QF=x(ya)`
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
`,KF=x.div`
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
`,YF=x.div`
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
`;const pP=({name:e,subtitle:t,bottomButtons:n,isPrivate:r,numberOfListenersPerMonth:i,subscribers:s,imageComponent:o,colors:a,isVerified:l,handleClickShare:u})=>{const d=_c(),h=f=>{f.stopPropagation(),rn.events.open({e:f,height:96,content:c.jsxs(wc,{children:[c.jsxs(q,{onClick:u,children:[c.jsx(yc,{}),"Share"]}),c.jsxs(q,{children:[c.jsx(ay,{}),"Info"]})]})})};return c.jsxs(QF,{$colors:a,children:[o,c.jsxs(b,{gap:8,d:"column",ai:"center",children:[c.jsxs(b,{gap:4,d:"column",children:[c.jsxs(b,{gap:6,children:[c.jsx("h2",{children:e}),l&&c.jsx(Lh,{color:a==null?void 0:a[1]}),r&&c.jsx(ZS,{size:20})]}),t]}),c.jsxs(b,{gap:20,style:{opacity:"0.8",fontWeight:"300"},children:[c.jsxs(b,{gap:4,children:[t0(i),c.jsx(bd,{size:16})]}),c.jsxs(b,{gap:4,children:[t0(s),c.jsx(oT,{size:16})]})]})]}),c.jsx(YF,{children:c.jsx(q,{$height:"40px",$width:"40px",onClick:()=>d(-1),children:c.jsx(YS,{size:20})})}),c.jsxs(KF,{children:[c.jsx(Kh,{songId:void 0,likeColor:void 0,height:"40px",width:"40px"}),c.jsx(q,{$height:"40px",$width:"40px",onClick:h,children:c.jsx(UN,{size:20})})]}),n]})},m1=({page:e,onChangeId:t})=>{const n=ZM(`${e}/:id`);S.useEffect(()=>{n!=null&&n.params.id&&t(n.params.id)},[n==null?void 0:n.params.id])},XF=()=>c.jsx("div",{children:"AddAlbumModal"}),JF=x.div`
  width: 100%;
  height: 100%;
  background: ${({theme:e})=>e.colors.overlay};
`,ZF=x(JF)`
    position: absolute;
    z-index: 12;
`,ez=x.div`
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
`,tz=x.h3`
    margin: 25px;
    margin-bottom: 15px;
    font-weight: 300;

    @media (max-width: 768px) {
        margin: 20px;
    }
`,nz=x.div`
    height: 100%;
    padding-bottom: 25px;
    padding-top: 0;
    overflow-y: auto;
`;x.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
`;const rz=x.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,iz=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,sz=x.textarea`
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
`,oz=({label:e,...t})=>c.jsxs(iz,{children:[e&&c.jsxs(h1,{children:[e," ",c.jsx(BR,{children:t.required?"*":""})]}),c.jsx(sz,{...t})]}),az=x.div`
	font-size: 0.5rem;

`,lz=()=>c.jsxs(az,{children:[c.jsxs(rz,{children:[c.jsx(nn,{label:"Song name"}),c.jsx(nn,{label:"Release date",type:"date"}),c.jsx(oz,{label:"Lyrics"})]}),c.jsx(cr,{appearance:"primary",children:"Add new song"})]}),cz=x.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;x(ya)`
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
`;const gP=x.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    @media (max-width: 1000px) {
        padding: 40px 20px;
    }
`,Zx=x.div`
    width: 100%;

    h3 {
        margin-bottom: 10px;
    }
`,eE=x.div`
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
`,uz=x.div`
    width: 100%;
    background: ${({theme:e})=>e.colors.pageBackground2};
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1000px) {
        padding: 20px;
    }
`,y1=({isAdmin:e,isPageOwner:t,queueInfo:n,buttonColor:r})=>{const{state:i}=G.useSong(),{queue:s}=G.queue.useQueue(),o=Mh();return e&&t?c.jsxs(eE,{className:"bottom-buttons",children:[c.jsxs(q,{onClick:()=>bt.events.open({content:c.jsx(lz,{}),title:"Add new song"}),$background:o.colors.pageBackground,style:{color:o.colors.blue.main,gap:"10px"},children:[c.jsx(e4,{size:18}),"New song"]}),c.jsxs(q,{onClick:()=>bt.events.open({content:c.jsx(XF,{}),title:"Add new album"}),$background:o.colors.pageTopButton,style:{color:o.colors.blue.main,gap:"10px"},children:[c.jsx(cy,{size:18}),"New album"]})]}):c.jsxs(eE,{className:"bottom-buttons",children:[c.jsxs(cr,{loading:i==="loading"&&s.url===n.listUrl,onClick:()=>null,style:{background:o.colors.pageTopButton,color:r},children:[c.jsx(Ff,{size:20,loading:i==="loading"&&s.url===n.listUrl,playling:i==="playing"&&s.url===n.listUrl}),"Play"]}),c.jsxs(cr,{loading:!1,onClick:()=>null,style:{background:o.colors.pageTopButton,color:r},children:[c.jsx(XS,{size:20}),"Shuffle"]})]})},dz=x(re)`
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
`,Lt=()=>c.jsxs(b,{d:"column",gap:10,children:[c.jsx(dz,{radius:"100%",width:"calc(100vw / 11)",height:"calc(100vw / 11)"}),c.jsxs(b,{d:"column",gap:4,children:[c.jsx(re,{radius:"4px",width:"140px",height:"20px"}),c.jsx(re,{radius:"4px",width:"80px",height:"14px"})]})]}),hz=(e,t)=>{const[n,r]=S.useState(!1),[i,s]=S.useState(!1),o=S.useMemo(()=>new IntersectionObserver(([a])=>{s(a.isIntersecting),n||r(a.isIntersecting)}),[e]);return S.useEffect(()=>{i&&t&&t()},[i,n]),S.useEffect(()=>(e.current!==null&&o.observe(e.current),()=>o.disconnect()),[]),i},fz=({songs:e,currentPageUser:t})=>{const n=S.useRef(null),{similarAuthors:r,similarAuthorsLoading:i}=he.useUserPage();return hz(n,()=>{r.length===0&&he.events.loadSimilarAuthors(e)}),c.jsxs(uz,{ref:n,children:[c.jsx("h3",{children:"Similar Authors"}),c.jsx(fP,{children:r.map(s=>s.uid===(t==null?void 0:t.uid)?null:c.jsx(zr,{user:s},s.uid))}),i&&c.jsxs(b,{gap:20,children:[c.jsx(Lt,{}),c.jsx(Lt,{}),c.jsx(Lt,{}),c.jsx(Lt,{}),c.jsx(Lt,{}),c.jsx(Lt,{})]})]})},pz=x(re)`
    --size: calc(100vw / 8 + 3px);

    @media (max-width: 1200px) {
        --size: calc(100vw / 6);
    }

    @media (max-width: 800px) {
        --size: calc(100vw / 2 - 30px);
    }

    width: var(--size);
    height: var(--size);
`,Hs=()=>{const e=Mh();return c.jsxs(b,{gap:12,ai:"flex-start",d:"column",children:[c.jsx(pz,{width:"calc(100vw / 8)",height:"calc(100vw / 8)",radius:e.borderRadius.middle}),c.jsxs(b,{gap:7,ai:"flex-start",d:"column",children:[c.jsx(re,{width:"120px",height:"15px",radius:"4px"}),c.jsx(re,{width:"80px",height:"12px",radius:"3px"})]})]})},U=()=>c.jsxs(NF,{children:[c.jsx(LF,{children:c.jsx(re,{width:"100%",height:"50px",radius:"12px",children:c.jsxs(b,{gap:10,width:"100%",padding:"8px",children:[c.jsx(re,{width:"35px",height:"35px",radius:Cy}),c.jsxs(b,{width:"100%",d:"column",ai:"flex-start",gap:4,children:[c.jsx(re,{width:"70%",height:"14px"}),c.jsx(re,{width:"120px",height:"10px"})]})]})})}),c.jsx(MF,{children:c.jsx(re,{width:"100%",height:"46px",radius:"10px",children:c.jsxs(b,{width:"100%",gap:20,padding:"6px",children:[c.jsx(re,{width:"35px",height:"35px",radius:"6px"}),c.jsx(re,{width:"25%",height:"18px",radius:"6px"}),c.jsx(re,{width:"25%",height:"18px",radius:"6px"}),c.jsx(re,{width:"20%",height:"18px",radius:"6px"}),c.jsx(re,{width:"18%",height:"18px",radius:"6px"})]})})})]}),mP=()=>c.jsxs(b,{width:"100%",d:"column",ai:"flex-start",height:"100%",children:[c.jsx(re,{width:"100%",height:"400px",radius:"0",children:c.jsxs(b,{width:"100%",d:"column",padding:"56px 50px 50px 50px",ai:"center",jc:"center",gap:21,children:[c.jsx(re,{width:"200px",height:"200px",radius:"100%"}),c.jsxs(b,{d:"column",gap:8,children:[c.jsx(re,{width:"200px",height:"30px"}),c.jsx(re,{width:"100px",height:"10px",radius:"3px"}),c.jsx(re,{width:"100px",height:"20px",radius:"3px"})]})]})}),c.jsxs(gP,{children:[c.jsxs(b,{d:"column",ai:"flex-start",gap:8,width:"100%",children:[c.jsx(re,{width:"95px",height:"25px",radius:"6px"}),c.jsxs(hP,{children:[c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{})]})]}),c.jsxs(b,{d:"column",ai:"flex-start",gap:8,width:"100%",children:[c.jsx(re,{width:"115px",height:"25px",radius:"6px"}),c.jsxs(b,{gap:14,width:"100%",children:[c.jsx(Hs,{}),c.jsx(Hs,{}),c.jsx(Hs,{}),c.jsx(Hs,{}),c.jsx(Hs,{}),c.jsx(Hs,{})]})]}),c.jsxs(b,{d:"column",ai:"flex-start",padding:"40px 0 0 0",gap:20,width:"100%",children:[c.jsx(re,{width:"145px",height:"25px",radius:"6px"}),c.jsxs(b,{gap:30,width:"100%",children:[c.jsx(Lt,{}),c.jsx(Lt,{}),c.jsx(Lt,{}),c.jsx(Lt,{}),c.jsx(Lt,{}),c.jsx(Lt,{}),c.jsx(Lt,{}),c.jsx(Lt,{})]})]})]})]}),yP=({userData:e})=>{const{user:t,songs:n,playlists:r,loading:i}=he.useUserPage(),[{data:s}]=he.useUser(),[o]=he.useFriends(),a=e??t,l=!!o.find(v=>v.uid===(t==null?void 0:t.uid)),{status:u}=Vf(t==null?void 0:t.online),[d,h,f]=[(a==null?void 0:a.isAuthor)??!1,(a==null?void 0:a.isAdmin)??!1,(s==null?void 0:s.uid)===(a==null?void 0:a.uid)];m1({page:"author",onChangeId:v=>{he.events.loadUserPageFx(v)}});const p={listName:(a==null?void 0:a.displayName)??"Author",listIcon:a==null?void 0:a.photoURL,listUrl:`/author/${a==null?void 0:a.uid}`,songs:n.slice(0,9)},m=()=>{bt.events.open({title:`Share ${t==null?void 0:t.displayName} with friends`,content:c.jsx(qc,{entity:t})})};return c.jsx(cz,{children:c.jsxs(Hi,{color:(a==null?void 0:a.imageColors[0])??"grey",loading:i,skeleton:c.jsx(mP,{}),children:[c.jsx(pP,{handleClickShare:m,id:a==null?void 0:a.uid,name:a==null?void 0:a.displayName,subtitle:c.jsx(Uf,{color:t==null?void 0:t.imageColors[1],isAuthor:d,status:u,showLastSeen:l||(s==null?void 0:s.isAdmin)}),numberOfListenersPerMonth:a==null?void 0:a.numberOfListenersPerMonth,isVerified:a==null?void 0:a.isVerified,subscribers:a==null?void 0:a.subscribers,imageComponent:c.jsx(Rr,{isAuthor:d,colors:a==null?void 0:a.imageColors,src:a==null?void 0:a.photoURL,size:"200px"}),colors:a==null?void 0:a.imageColors,bottomButtons:c.jsx(y1,{buttonColor:a==null?void 0:a.imageColors[1],isAdmin:h,isPageOwner:f,queueInfo:p})}),c.jsxs(gP,{children:[c.jsxs(Zx,{children:[c.jsx("h3",{children:"Top songs"}),c.jsx(WF,{...p})]}),r.length!==0&&c.jsxs(Zx,{children:[c.jsx("h3",{children:"Top Albums"}),c.jsx(fP,{children:r.map(v=>c.jsx(bs,{playlist:v},v.id))})]})]}),!i&&c.jsx(fz,{songs:n,currentPageUser:a})]})})},gz=x.div`
    padding: 10px 25px;
`,mz=()=>{const[e]=he.useFriends(),t=()=>{};return c.jsx(gz,{children:c.jsx(f1,{inputPlaceholder:"Search for friends...",entities:e,renderItem:(n,r,i)=>c.jsx(zr,{orientation:"horizontal",as:"div",user:n,onClick:i,children:c.jsx(d1,{checked:r})},n.uid),renderButton:n=>c.jsxs(c.Fragment,{children:[n.length>1&&c.jsx(nn,{placeholder:"Chat Title"}),c.jsxs(cr,{appearance:"primary",onClick:t,children:["Create ",n.length>1?"group":"chat",c.jsx(HR,{children:n.length})]})]})})})},yz=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),vz=e=>{let t=0;return e?e==null?void 0:e.reduce((n,r,i)=>{const s=e[i-1],o=(s==null?void 0:s.sender)===(r==null?void 0:r.sender),a=new Date((r==null?void 0:r.sentTime)??"").getTime()-new Date((s==null?void 0:s.sentTime)??"").getTime()<6e5;return o&&a?n[t]?n[t].push(r):n[t]=[r]:(t+=1,n[t]=[r]),n},[]):[]},_z=()=>c.jsxs(wc,{children:[c.jsxs(q,{children:[c.jsx(ay,{}),"Info"]}),c.jsxs(q,{children:[c.jsx(HN,{}),"Attacments"]}),c.jsxs(q,{children:[c.jsx(n4,{}),"Change wallpaper"]})]}),wz=()=>c.jsxs(wc,{children:[c.jsxs(q,{children:[c.jsx(yc,{}),"Reply"]}),c.jsxs(q,{children:[c.jsx(ON,{}),"Copy"]})]}),xz=x.div`
    height: 100%;
    padding-bottom: 4px;
`,Ez=x.div`
    font-size: 0.7rem;
    margin-left: 10px;
    color: ${({theme:e})=>e.colors.greyText};
    font-weight: 300;
`,Iz=x.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`,Sz=x.div`
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
`,Tz=x(VR)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 8px;
    font-size: 0.65rem;

    svg {
        width: 14px;
        height: 14px;
    }
`,kz=x.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Cz=x.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 20px;
    overflow-y: auto;
`,Az=x(nn)`
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 16px;
`,Rz=x.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    width: 100%;
    height: 80px;
    border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Pz=x.div`
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
`,bz=x.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    padding: 6px 15px;
    width: 100%;
`,jz=x.div`
    width: 50px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: 0.2s;
`,Nz=x.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
`,Mz=x.div`
    position: sticky;
    bottom: 20px;
    transition: 0.2s;
`,Lz=x.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background: ${({theme:e})=>e.colors.pageBackground2};
`,Dz=x.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 10px 20px;
    font-weight: 300;
    font-size: 0.8rem;
    opacity: 0.6;
`,$z=x.div`
    width: 320px;
`,Oz=x(q)`
    min-width: 35px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background: ${({theme:e})=>e.colors.blue.action};
    color: #fff;
`,Vz=x(q)`
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
`,Uz=e=>{let t;try{t=new URL(e)}catch{return!1}return t.protocol==="http:"||t.protocol==="https:"},Fz=x.a`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	color: ${({theme:e})=>e.colors.blue.main};
	padding: 4px;
	background: ${({theme:e})=>e.colors.blue.transparent2};
	border-radius: 6px;
`,zz=({message:e})=>{const t=e.split(" ");return c.jsx(c.Fragment,{children:t.map(n=>Uz(n)?c.jsxs(Fz,{href:n,target:"_blank",rel:"noreferrer",children:[c.jsx(GN,{size:18}),n.slice(8,n.length)]}):n+" ")})},tg=(e,t)=>e.map(n=>{const r=t[n];if(!r)return null;const i=aa(r);return i==="user"||i==="author"?c.jsx(zr,{user:r,orientation:"horizontal"},n):i==="album"||i==="playlist"?c.jsx(bs,{playlist:r,orientation:"horizontal"},n):c.jsx(Gc,{song:r,playing:!1,loading:!1,loaded:!1,index:0,onClick:()=>null},n)}),Bz=({message:e,isNotSeen:t,isMine:n,chatData:r,isPrevByTheSameSender:i,isFirst:s,onSeen:o})=>{var p,m;const a=$R(e),l=e.attachedSongs.length||e.attachedAlbums.length||e.attachedAuthors.length,[u,d]=S.useState(!1),h=S.useRef(null);S.useEffect(()=>{const v=h.current,w=new IntersectionObserver(([g])=>{d(g.isIntersecting)},{root:null,rootMargin:"0px",threshold:.5});return v&&w.observe(v),()=>{v&&w.unobserve(v)}},[]),S.useEffect(()=>{u&&t&&o(e.id)},[u,t]);const f=v=>{v.stopPropagation(),v.preventDefault(),rn.events.open({content:c.jsx(wz,{}),height:96,e:v})};return c.jsxs(Iz,{ref:h,children:[!n&&s&&c.jsx(Ez,{children:(p=r[e.sender])==null?void 0:p.displayName}),c.jsxs(b,{width:"100%",gap:10,children:[c.jsxs(Sz,{$isFirst:s,$background:n?(m=r[e.sender])==null?void 0:m.imageColors[1]:"",onContextMenu:f,className:(n?"mine":"")+(i?" isPrevByTheSameSender":""),children:[c.jsx(b,{d:"column",ai:"flex-start",children:c.jsxs(xz,{children:[c.jsx(zz,{message:e.message}),!!l&&c.jsxs($z,{children:[tg(e.attachedSongs,r),tg(e.attachedAlbums,r),tg(e.attachedAuthors,r)]})]})}),c.jsxs(Tz,{children:[c.jsx("span",{children:new Date(e.sentTime).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})}),c.jsx(LR,{isMine:n,sendStatus:a})]})]}),a==="Error"&&c.jsx(FN,{color:"red",size:20})]})]})},Hz=({message:e})=>c.jsx(Dz,{children:e.message}),Wz=(e,t)=>({id:uP(),sender:e,message:t,sentTime:new Date().getTime(),seenBy:[e],attachedAlbums:[],attachedSongs:[],attachedAuthors:[],inResponseToMessage:"",status:"pending"}),vP=()=>{const{chats:e,currentChatId:t,currentChatMessages:n,currentChatMessagesLoading:r,chatData:i}=Tr.useChats(),[{data:s}]=he.useUser(),o=vz(n),a=e.find(F=>F.id===t),l=(a==null?void 0:a.participants.filter(F=>F!==(s==null?void 0:s.uid)))??[],u=i[l[0]],d=(a==null?void 0:a.chatName)!=="",h=d?a==null?void 0:a.chatImage:u==null?void 0:u.photoURL,f=d?a==null?void 0:a.chatName:u==null?void 0:u.displayName,p=l.map(F=>{var Oe;return Vf((Oe=i[F])==null?void 0:Oe.online).status})??[],m=S.useRef(null),v=(a==null?void 0:a.typing.filter(F=>F!==(s==null?void 0:s.uid)).map(F=>i[F]))??[],w=p.filter(F=>F==="online").length,[g,y]=S.useState(!0),_=n.filter(F=>{var Oe;return!((Oe=F.seenBy)!=null&&Oe.includes((s==null?void 0:s.uid)??""))})??0,[E,T]=S.useState(""),k=S.useRef(null);m1({page:"chat",onChangeId:F=>{y(!0),Tr.events.setCurrentChatId(F)}});const I=F=>{T(F.currentTarget.value)},A=F=>{F.stopPropagation(),rn.events.open({content:c.jsx(_z,{}),e:F,height:136})},z=F=>{console.log(F.currentTarget.scrollTop,F.currentTarget.scrollHeight),F.currentTarget.scrollTop>=F.currentTarget.scrollHeight-800?y(!0):y(!1)},H=()=>{var Oe;if(E.trim().length===0||!(s!=null&&s.uid))return;const F=Wz(s==null?void 0:s.uid,E);Tr.events.sendMessage({chatId:t,message:F}),T(""),(Oe=k.current)==null||Oe.focus()};S.useEffect(()=>{console.log(g),m.current&&g&&m.current.scrollIntoView({block:"end"})},[n.length,g]);const ee=F=>{Tr.events.seenMessage(F)};return c.jsxs(kz,{children:[c.jsxs(Lz,{children:[c.jsxs(b,{gap:16,children:[!!Object.keys(i).length&&c.jsxs(c.Fragment,{children:[c.jsx(Rr,{fallbackIcon:c.jsx(Jm,{name:f??"Undefined",width:"35px"}),size:"35px",src:h,colors:["grey"],isAuthor:!1,children:p[0]==="online"&&!d&&c.jsx(u1,{})}),c.jsxs(b,{d:"column",ai:"flex-start",children:[c.jsx(OR,{children:f??"Untitled"}),c.jsx(MR,{typing:v,isGroupChat:d,children:d?c.jsxs(Fr,{children:[a!=null&&a.participants.length?`${a==null?void 0:a.participants.length} members`:null,w!==0&&`, ${w} online`]}):c.jsx(Uf,{isAuthor:!1,showLastSeen:!0,status:p[0]})})]})]}),!Object.keys(i).length&&c.jsxs(b,{gap:16,children:[c.jsx(re,{width:"35px",height:"35px",radius:"100%"}),c.jsxs(b,{gap:2,d:"column",ai:"flex-start",children:[c.jsx(re,{width:"100px",height:"12px"}),c.jsx(re,{width:"40px",height:"9px"})]})]})]}),c.jsx(b,{width:"fit-content",children:c.jsx(q,{$width:"40px",onClick:A,children:c.jsx(iy,{size:20})})})]}),c.jsxs(Cz,{onScroll:z,children:[r&&c.jsx(b,{jc:"center",height:"100%",width:"100%",children:c.jsx(Bi,{})}),!r&&o.map((F,Oe,Wr)=>{var W,Q,le,ke;const Wi=i[F[0].sender],qi=!yz(new Date(((W=Wr[Oe][0])==null?void 0:W.sentTime)??""),new Date(((le=(Q=Wr[Oe-1])==null?void 0:Q[0])==null?void 0:le.sentTime)??"")),Un=F[0].sender===DR,N=new Date(((ke=Wr[Oe][0])==null?void 0:ke.sentTime)??"").toLocaleDateString("ru-RU",{day:"2-digit",month:"long",year:"numeric"});return c.jsxs(c.Fragment,{children:[qi&&c.jsx(Pz,{children:N}),c.jsxs(bz,{children:[!Un&&c.jsx(jz,{children:c.jsx(Mz,{children:c.jsx(Rr,{fallbackIcon:c.jsx(Rr,{fallbackIcon:c.jsx(Jm,{width:"35px",name:f??"Undefined"}),size:"35px",src:h,colors:["grey"],isAuthor:!1}),colors:["grey"],size:"35px",src:Wi==null?void 0:Wi.photoURL,isAuthor:!1})})}),c.jsx(Nz,{children:F.map((ht,Tt)=>{var kt;const wn=!((kt=ht.seenBy)!=null&&kt.includes((s==null?void 0:s.uid)??""));return Un?c.jsx(Hz,{message:ht},ht.id):c.jsx(ye.Fragment,{children:c.jsx(Bz,{isFirst:Tt===0,chatData:i,isPrevByTheSameSender:Tt!==F.length-1,message:ht,isMine:ht.sender===(s==null?void 0:s.uid),isNotSeen:!!wn,onSeen:ee},ht.id)},ht.id)})})]})]})}),c.jsx("div",{ref:m,style:{width:"100%",minHeight:"20px"}}),!g&&c.jsxs(Vz,{children:[c.jsx(IN,{size:20}),_.length!==0&&c.jsx(c1,{children:_.length})]})]}),c.jsxs(Rz,{children:[c.jsx(q,{$width:"40px",children:c.jsx(MN,{})}),c.jsx(Az,{ref:k,onKeyDown:F=>{F.key==="Enter"&&H()},placeholder:"Type something",value:E,onChange:I}),E.length!==0&&c.jsx(Oz,{$height:"35px",onClick:H,children:c.jsx(kN,{size:23})})]})]})},qz=x.div`
  width: 100%;
  height: 100%;
  display: flex;
`,Gz=x.div`
	min-width: 380px;
	max-width: 380px;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	background: ${({theme:e})=>e.colors.pageBackground};
	border-right: 1px solid ${({theme:e})=>e.colors.border};
`,Qz=x.div`
	width: 100%;
`,Kz=()=>{const{chats:e,loadingChats:t,chatData:n,lastMessage:r,loadingChatData:i,unreadCounts:s,currentChatId:o}=Tr.useChats(),a=Mh();Tr.useLoadChats();const l=()=>{bt.events.open({title:"Create chat with friends",content:c.jsx(mz,{})})};return c.jsxs(qz,{children:[c.jsxs(Gz,{children:[c.jsxs(b,{padding:"20px 25px 10px 25px",width:"100%",gap:10,children:[c.jsx(nn,{icon:c.jsx(ha,{}),placeholder:"Search for chats..."}),c.jsx(q,{onClick:l,$width:"48px",children:c.jsx(XN,{size:20})})]}),c.jsx(Hi,{background:a.colors.pageBackground2,loading:t||i,skeleton:c.jsx(FR,{}),children:c.jsx(b,{d:"column",gap:0,width:"100%",height:"100%",padding:"10px 0",children:e.map(u=>c.jsx(c.Fragment,{children:c.jsx(UR,{isSelected:o===u.id,unreadCount:s[u.id],lastMessage:r[u.id],chatData:n,chat:u},u.id)}))})})]}),c.jsx(Qz,{children:c.jsx(ek,{children:c.jsx(uo,{path:":id",element:c.jsx(vP,{})})})})]})};function Ws(e){let t;if(e){if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)){t=e.substring(1).split(""),t.length==3&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]);const n=+("0x"+t.join(""));return[n>>16&255,n>>8&255,n&255].join(",")}throw new Error("Bad Hex")}}const Yz=x.div`
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
`;let ng=0,rg=0,tE=0,nE=0;const rE=50,Xz=()=>{const e=S.useRef(null),{currentSong:t}=G.useSong(),n=S.useCallback(()=>{ng+=(tE-ng)/rE,rg+=(nE-rg)/rE,e.current&&(e.current.style.transform=`translate(${ng}px, ${rg}px)`),requestAnimationFrame(()=>n())},[]),r=i=>{tE=i.clientX,nE=i.clientY};return S.useEffect(()=>{n()},[n]),c.jsxs(Yz,{$colors:(t==null?void 0:t.imageColors)??[],onMouseMove:r,children:[c.jsx("div",{className:"noise-layer"}),c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",children:c.jsx("defs",{children:c.jsxs("filter",{id:"goo",children:[c.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),c.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8",result:"goo"}),c.jsx("feBlend",{in:"SourceGraphic",in2:"goo"})]})})}),c.jsxs("div",{className:"gradients-container",children:[c.jsx("div",{className:"g1"}),c.jsx("div",{className:"g2"}),c.jsx("div",{className:"g3"}),c.jsx("div",{className:"g4"}),c.jsx("div",{className:"g5"}),c.jsx("div",{className:"interactive",ref:e})]})]})},Jz=x.div`
   position: absolute;
   left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
`,Zz=()=>{const e=G.fullscreen.useFullScreen();return c.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[!e&&c.jsx(Xz,{}),c.jsx(Jz,{children:c.jsx(q,{$width:"260px",style:{fontSize:"2rem",minHeight:"60px"},children:c.jsxs(b,{gap:10,children:[c.jsx(ly,{size:40}),"Play Wave"]})})})]})},e8=e=>{const[t,n]=S.useState("password"),r=t==="password"?c.jsx(zN,{}):c.jsx(BN,{}),i=()=>{n(s=>s==="password"?"text":"password")};return c.jsx(nn,{label:"Password",placeholder:"Enter password",rightIcon:r,onRightIconClick:i,type:t,icon:c.jsx(t4,{}),...e})},t8=({actionAfterLogin:e})=>{const[t,n]=S.useState(""),[r,i]=S.useState(""),[s,o]=S.useState({}),[{data:a,error:l},u]=he.useUser(),d=()=>{const m={};return t||(m.email="Email is required"),r||(m.password="Password is required"),o(m),console.log(m),Object.keys(m).length!==0},h=()=>{const m=d();console.log(m,s),e&&e(),m||he.events.login({email:t,password:r})};S.useEffect(()=>{a&&bt.events.close()},[a]),console.log(l);const f=m=>{n(m.currentTarget.value),o(v=>{const w={...v};return delete w.email,w})},p=m=>{i(m.currentTarget.value),o(v=>{const w={...v};return delete w.password,w})};return c.jsxs(b,{d:"column",width:"100%",jc:"space-between",height:"100%",gap:20,padding:"0 25px",children:[c.jsxs(b,{d:"column",jc:"center",width:"100%",height:"300px",gap:20,onKeyDown:m=>m.key==="Enter"&&h(),children:[l==null?void 0:l.message,c.jsx(nn,{value:t,onChange:f,placeholder:"Enter email",label:"Email",type:"email",onError:m=>console.log(m),required:!0,icon:c.jsx(CN,{}),error:s==null?void 0:s.email}),c.jsx(e8,{onChange:p,value:r,required:!0,error:s==null?void 0:s.password})]}),c.jsx(cr,{loading:u,onClick:h,appearance:"primary",children:"Login"}),c.jsx(q,{children:"Don't have an account"})]})},_P=()=>{const[{data:e}]=he.useUser(),t=r=>()=>{bt.events.open({title:"Войдите в аккаунт",content:c.jsx(t8,{actionAfterLogin:r})})};return{loggedIn:r=>e===null?t(r):r,openLoginModal:t}},n8=x.header`
    width: 100%;
    max-width: 100%;
    min-height: 70px;
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
        min-height: 80px;
        height: fit-content;
    }
`,r8=x.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
        display: none;
    }
`,i8=x.div`
    width: 100%;

    @media (min-width: 1001px) {
        display: none;
    }
`,s8=x.h2`
    width: 150px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 1000px) {
        font-weight: 500;
    }
`;var Ei=(e=>(e.light="light",e.dark="dark",e))(Ei||{});const o8={[Ei.light]:bL,[Ei.dark]:ws},a8=Ei.dark,l8=()=>{const e=localStorage.getItem("theme");return e?Ei[e]:a8},dc=ne(l8()),c8=De(e=>{localStorage.setItem("theme",e)}),v1=V(),u8=V();j({clock:v1,source:dc,fn:e=>e===Ei.light?Ei.dark:Ei.light,target:[dc,c8]});j({clock:u8,source:dc,fn:(e,t)=>t,target:dc});const wP=()=>{const e=me(dc);return{theme:e,themeParams:o8[e]}},d8=()=>{const[{data:e}]=he.useUser(),t=_c(),n=()=>{he.events.logout()},r=()=>{bt.events.open({title:"Share profile with friends",content:c.jsx(qc,{entity:e})}),rn.events.close()};return c.jsxs(wc,{children:[c.jsxs(q,{onClick:()=>{t("/me"),rn.events.close()},children:[c.jsx(Rr,{colors:(e==null?void 0:e.imageColors)??["grey"],src:e==null?void 0:e.photoURL,size:"20px",isAuthor:e==null?void 0:e.isAuthor}),"Go to profile"]}),c.jsxs(q,{onClick:r,children:[c.jsx(yc,{}),"Share profile"]}),c.jsx(Qo,{}),c.jsxs(q,{children:[c.jsx(JS,{}),"Edit"]}),c.jsxs(q,{children:[c.jsx(a4,{}),"Settings"]}),c.jsxs(q,{onClick:()=>v1(),children:[c.jsx(sT,{}),"Change theme"]}),c.jsx(Qo,{}),c.jsxs(q,{onClick:n,children:[c.jsx(KN,{}),"Logout"]})]})},Bf=({children:e,hide:t})=>{const[{data:n},r]=he.useUser(),i=ur(),{openLoginModal:s}=_P(),o=E1.find(l=>l.url.includes(i.pathname.split("/")[1])),a=l=>{l.stopPropagation(),rn.events.open({content:c.jsx(d8,{}),e:l,height:289})};return c.jsxs(n8,{className:t?"hidden":"",children:[c.jsxs(b,{width:"100%",height:"50px",jc:"space-between",gap:30,children:[c.jsx(s8,{children:o==null?void 0:o.title}),c.jsx(r8,{children:e}),c.jsxs(b,{width:"150px",gap:20,jc:"flex-end",children:[n&&c.jsx(q,{$width:"40px",onClick:a,children:c.jsx(Rr,{colors:n==null?void 0:n.imageColors,src:n==null?void 0:n.photoURL,size:"30px",isAuthor:n==null?void 0:n.isAuthor})}),!n&&c.jsx(cr,{loading:r,width:"100px",onClick:s(),appearance:"secondary",children:"Login"})]})]}),c.jsx(i8,{children:e})]})},h8=x.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,f8=x.div`
  padding: 20px 50px;
  height: 100%;
  width: 100%;
`,p8=()=>{const[e,t]=he.useFriends();return c.jsxs(h8,{children:[c.jsx(Bf,{}),c.jsx(Hi,{loading:t,skeleton:c.jsx(mP,{}),children:c.jsxs(f8,{children:[c.jsxs(b,{gap:10,width:"100%",children:[c.jsx(nn,{placeholder:"Search for friends...",icon:c.jsx(ha,{})}),c.jsx(cr,{width:"200px",appearance:"primary",children:"Create group chat"})]}),c.jsx(Qo,{}),e.map(n=>c.jsx(zr,{showLastSeen:!0,user:n,orientation:"horizontal",children:c.jsx(q,{$width:"40px",children:c.jsx(YN,{})})},n.uid))]})})]})},_1=De(async e=>{try{return await pR.getHistoryByUserId(e)}catch(t){throw new Error(t.message)}}),n0=_y(),Hf=ne([]);Hf.reset($e);const iE=zt.map(e=>{var t;return((t=e.data)==null?void 0:t.uid)??null});j({clock:[n0.open,iE],source:{gateStatus:n0.status,userId:iE,history:Hf},filter:({history:e,userId:t,gateStatus:n})=>n&&t!==null&&e.length===0,fn:({userId:e})=>e,target:_1});Us(_1,Hf);const sE={useHistory:()=>me([Hf,_1.pending]),useLoadHistory:()=>vy(n0)},g8=x.div``,m8=x.div`
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
`,Tu=x.div`
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
`;x(Wc)`
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
`;x(Wc)`
    height: 15px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};
    width: 100%;

    @container (min-width: 700px) {
        width: 100%;
    }

    @container (max-width: 699px) {
        width: 300px;
    }
`;x(Wc)`
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
`;x(Wc)`
    height: 15px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};

    @container (min-width: 700px) {
        width: 380px;
    }

    @container (max-width: 699px) {
        display: none;
    }
`;const w1=e=>c.jsxs(g8,{children:[!!e.songs.length&&c.jsxs(m8,{children:[c.jsx(Tu,{}),c.jsx(Tu,{children:"Name"}),c.jsx(Tu,{children:"Author"}),c.jsx(Tu,{children:"Listenings"})]}),c.jsx(cP,{...e})]}),y8=()=>c.jsxs(b,{d:"column",width:"100%",height:"100%",padding:"20px 50px",children:[c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{})]}),v8=x.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
`,_8=x.div`
   padding: 20px 50px;
   height: 100%;
   width: 100%;
`,w8=()=>{const[e,t]=sE.useHistory();return sE.useLoadHistory(),c.jsxs(v8,{children:[c.jsx(Bf,{}),c.jsx(Hi,{color:"",loading:t,skeleton:c.jsx(y8,{}),children:c.jsx(_8,{children:c.jsx(w1,{songs:e,listName:"History",listIcon:c.jsx(oy,{}),listUrl:"/history"})})})]})},x8=x.div`
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
`,E8=x(Ms)`
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
`,I8=x.div`
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
`,S8=({tabs:e,currentTab:t=0})=>{const[n,r]=S.useState(t);return S.useEffect(()=>{r(t)},[t]),c.jsxs(x8,{children:[c.jsx(I8,{$width:`${100/e.length}%`,$shift:n}),e.map(({title:i,url:s},o)=>c.jsx(E8,{to:s,className:o===n?"selected":"",onClick:()=>r(o),children:i},i+o))]})},xP=x.div`
    height: 100%;
    width: 100%;
    display: flex;
    padding: var(--page-padding);
`,EP=x.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    height: fit-content;

    @media (max-width: 768px) {
        gap: 20px;
    }
`,T8=x(q)`
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
`,k8=x.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-bottom: 20px;
`,oE=[{title:"Songs",url:""},{title:"Playlists",url:"playlists"},{title:"Authors",url:"authors"}],C8=()=>{const e=ur(),t=oE.findIndex(n=>n.url===e.pathname.split("/").at(-1));return c.jsxs(k8,{children:[c.jsx(Bf,{children:c.jsxs(b,{width:"100%",jc:"center",gap:10,children:[c.jsx(S8,{tabs:oE,currentTab:t===-1?0:t}),c.jsx(T8,{children:c.jsx(ha,{})})]})}),c.jsx(ZT,{})]})},A8=()=>{const[e,t]=he.useAddedAuthors();return c.jsxs(xP,{children:[t&&c.jsx(b,{width:"100%",height:"100%",jc:"center",children:c.jsx(Bi,{})}),c.jsx(EP,{children:e.map(n=>c.jsx(zr,{user:n},n.uid))})]})},R8=()=>{const[e,t]=he.useAddedPlaylists(),[n,r]=he.useOwnPlaylists();return c.jsxs(xP,{children:[(t||r)&&c.jsx(Bi,{}),c.jsx(EP,{children:[...n,...e].map(i=>c.jsx(bs,{playlist:i},i.id))})]})},P8=()=>c.jsxs(b,{d:"column",gap:4,width:"100%",children:[c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{})]}),b8=x.div`
    padding: 20px 40px;
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
`,j8=()=>{const[e,t]=he.useSongLibrary(),[{data:n}]=he.useUser();return c.jsx(b8,{children:c.jsxs(Hi,{loading:t,skeleton:c.jsx(P8,{}),children:[c.jsx(w1,{listName:"Library",listIcon:c.jsx(us,{}),listUrl:"/library",songs:e}),!n&&c.jsxs(b,{d:"column",gap:10,width:"100%",height:"100%",jc:"center",children:[c.jsx(us,{opacity:.5,size:100}),c.jsx(Fr,{style:{fontSize:"1.1rem"},children:"Need to log in into account to see your library"})]}),n&&!e.length&&c.jsxs(b,{d:"column",gap:10,width:"100%",children:[c.jsx(us,{opacity:.5,size:100}),c.jsx(Fr,{style:{fontSize:"1.1rem"},children:"No songs added to library"})]})]})})},N8=()=>{const[{data:e}]=he.useUser();return c.jsx(yP,{userData:e})},M8="50px",L8=x.div`
    width: 100%;
`;x.div`
    background: ${({background:e})=>e};
    width: 100%;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
`;const IP=x.div`
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
`;const $8=x(b)`
    @media (max-width: 1000px) {
        display: none;
    }
`,O8=()=>c.jsxs(b,{width:"100%",d:"column",ai:"flex-start",children:[c.jsx(re,{width:"100%",height:"400px",radius:"0",children:c.jsxs(b,{width:"100%",d:"column",padding:"56px 50px 50px 50px",ai:"center",jc:"center",gap:20,children:[c.jsx(re,{width:"200px",height:"200px",radius:p1}),c.jsxs(b,{d:"column",gap:8,children:[c.jsx(re,{width:"200px",height:"30px"}),c.jsx(re,{width:"100px",height:"20px",radius:"3px"})]})]})}),c.jsxs(IP,{children:[c.jsxs($8,{width:"100%",gap:20,style:{marginTop:"4px",marginBottom:"14px"},children:[c.jsx("div",{style:{width:"40px"}}),c.jsx("div",{style:{width:"calc(25% - 4px)",height:"18px"},children:c.jsx(re,{width:"50%",height:"18px",radius:"6px"})}),c.jsx("div",{style:{width:"calc(25% - 2px)",height:"18px"},children:c.jsx(re,{width:"50%",height:"18px",radius:"6px"})}),c.jsx("div",{style:{width:"20%",height:"18px"},children:c.jsx(re,{width:"50%",height:"18px",radius:"6px"})}),c.jsx("div",{style:{width:"18%",height:"18px"},children:c.jsx(re,{width:"50%",height:"18px",radius:"6px"})})]}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{})]})]}),V8=()=>{const{currentPlaylist:e,currentPlaylistSongs:t,loading:n}=Zm.usePlaylist();m1({page:"playlist",onChangeId:i=>Zm.events.loadPlaylist(i)});const r=()=>{bt.events.open({title:`Share ${e==null?void 0:e.name} with friends`,content:c.jsx(qc,{entity:e})})};return c.jsx(Hi,{color:"",loading:n,skeleton:c.jsx(O8,{}),children:c.jsxs(L8,{children:[c.jsx(pP,{handleClickShare:r,id:"",name:e==null?void 0:e.name,subtitle:c.jsxs(b,{gap:3,children:[c.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:"300",opacity:"0.6"},children:[e!=null&&e.isAlbum?"Album":"Playlist"," / "]}),c.jsx(Ps,{width:"fit-content",authors:e==null?void 0:e.authors})]}),numberOfListenersPerMonth:e==null?void 0:e.listens,subscribers:e==null?void 0:e.subscribers,imageComponent:c.jsx(ZR,{size:"200px",isAlbum:(e==null?void 0:e.isAlbum)??!1,src:e==null?void 0:e.image,colors:e==null?void 0:e.imageColors}),isPrivate:e==null?void 0:e.isPrivate,colors:e==null?void 0:e.imageColors,bottomButtons:c.jsx(y1,{buttonColor:e==null?void 0:e.imageColors[0],isAdmin:!1,isPageOwner:!1,queueInfo:{listName:(e==null?void 0:e.name)??"",listIcon:void 0,listUrl:`/playlist/${(e==null?void 0:e.id)??""}`,songs:t??[]}})}),c.jsx(IP,{children:c.jsx(w1,{songs:t??[],listName:(e==null?void 0:e.name)??"",listIcon:(e==null?void 0:e.image)??"",listUrl:`/playlist/${(e==null?void 0:e.id)??""}`})}),c.jsx(D8,{})]})})},Wf=ne(""),x1=ne([]),SP=ne([]),TP=V(),kP=V(),CP=V(),AP=V(),qf=De(),Gf=De(async e=>{try{return await Bv.getSearchResult(e)}catch(t){throw new Error(t.message)}});Gf.watch(console.log);const U8=qf.pending,F8=Gf.pending;j({clock:TP,fn:e=>e,target:[Wf,kP]});j({clock:CP,fn:e=>e,target:x1});const z8=$f.map(e=>e);j({clock:kP,source:z8,fn:(e,t)=>({value:t,history:e}),target:qf});qf.use(async({value:e,history:t})=>{try{return await Bv.getSearchSuggestions(e,t)}catch(n){throw new Error(n.message)}});j({clock:qf.doneData,fn:e=>e,target:x1});j({clock:AP,target:Wf});j({clock:Wf,target:Gf});j({clock:Gf.doneData,fn:e=>e,target:SP});const B8=x.div`
    width: 100%;
    position: relative;
`,H8=x.div`
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

    @media (max-width: 768px) {
        box-shadow: none;
        height: calc(100vh - 240px);
        max-height: none;
        border-radius: 0;
        left: -20px;
        padding: 0 20px;
        width: calc(100% + 40px);
    }
`,W8=x.div`
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

    &.selected {
        background: ${({theme:e})=>e.colors.blue.transparent};
        font-weight: 400;
    }

    &:hover {
        background: ${({theme:e})=>e.colors.hover};
    }

    @media (max-width: 768px) {
        padding: 8px 0;
    }
`,q8=x.div`
    white-space: nowrap;
`,aE=x.div`
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
`,lE=({item:e,handleSubmitSuggestion:t,suggestedIndex:n,index:r,icon:i,searchHistory:s})=>{const o=aa(e),a=i??Pn[o],l=Mh(),u=os(e),d=!1;return c.jsxs(W8,{className:n===r?"selected":"",onClick:()=>t(r),children:[c.jsxs(b,{gap:8,width:"100%",children:[s&&c.jsx(aE,{children:c.jsx(oy,{})}),d,!s&&!d&&c.jsx(aE,{children:a}),c.jsxs(b,{d:"column",ai:"flex-start",children:[c.jsx(q8,{children:u}),e.authors&&c.jsx(Ps,{disableOnDesktop:!0,authors:e.authors})]}),e.isVerified&&c.jsx(Lh,{size:18,style:{color:l.colors.blue.main}})]}),c.jsx(q,{$width:"40px",children:c.jsx(TN,{size:20})})]},e.id??e.uid+r)},G8=({initialValue:e,suggestions:t,historySuggestions:n,onChange:r,onSumbit:i,onChangeSuggestions:s,onSuggestionSubmit:o})=>{const[a,l]=S.useState(!1),[u,d]=S.useState(n),[h,f]=S.useState(e??""),[p,m]=S.useState(null),v=[...u,...t],w=S.useRef(null),[g,y]=S.useState(!1),_=p!==null?os(v[p]):h,E=()=>{y(!0),l(v.length>0)};S.useEffect(()=>{l(g&&v.length>0)},[v.length,g]);const T=()=>{y(!1),l(!1)};S.useEffect(()=>{const ee=(h==null?void 0:h.length)!==0?n.filter(F=>Rs(os(F)).includes(Rs(h??""))):n;d(ee)},[n,h]);const k=ee=>{if(ee!==null){const F=os(v[ee]);if(f(F),!o){console.log(os(v[ee])),s([]),l(!1),m(null);return}l(!1),o(v[ee]);return}y(!1),l(!1),i(_)};return{inputValue:_,showHints:a,ref:w,suggestedIndex:p,localHistorySuggestions:u,handleFocus:E,handleBlur:T,handleReset:()=>{f("")},handleKeyDown:ee=>{if(ee.key==="ArrowDown"){ee.preventDefault(),m(F=>F===null?0:F===v.length-1?null:F+1);return}if(ee.key==="ArrowUp"){ee.preventDefault(),m(F=>F===0?null:F===null?v.length-1:F-1);return}if(ee.key==="Enter"){ee.preventDefault(),console.log("here --- "),k(p);return}p!==null&&(f(ee.currentTarget.value),m(null))},handleChange:ee=>{const F=ee.currentTarget.value;console.log("value::::::",F),r(F),f(F),l(v.length>0),ee.currentTarget.value.length===0&&(l(!1),m(null))},onRightIconClick:()=>{r("")},handleSubmitSuggestion:k}},Q8=e=>{const{inputValue:t,ref:n,localHistorySuggestions:r,showHints:i,suggestedIndex:s,handleFocus:o,handleKeyDown:a,handleChange:l,handleReset:u,onRightIconClick:d,handleSubmitSuggestion:h}=G8(e),{suggestions:f,areSuggestionsLoading:p}=e;return c.jsxs(B8,{onKeyDown:a,children:[c.jsx(nn,{id:"inputsearch",icon:c.jsx(ha,{}),value:t,onChange:l,onFocus:o,autoComplete:"off",onClick:o,placeholder:"Search...",rightIcon:p?c.jsx(Bi,{}):t?c.jsx(lT,{onClick:u}):null,onRightIconClick:d,type:"text"}),i&&c.jsxs(H8,{id:"hints",ref:n,children:[r==null?void 0:r.map((m,v)=>c.jsx(lE,{value:t,searchHistory:!0,suggestedIndex:s,item:m,index:v,handleSubmitSuggestion:h},ra(m))),f.map((m,v)=>m?c.jsx(lE,{value:t,suggestedIndex:s,item:m,index:r.length+v,handleSubmitSuggestion:h},ra(m)+v):null)]})]})},K8=()=>c.jsxs(b,{gap:6,width:"100%",height:"100%",d:"column",style:{maxWidth:"650px",marginBottom:"20px"},children:[c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{})]}),Y8=x(Ms)`
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
`,X8=x(b)`
    @media (max-width: 768px) {
        width: 100%;
    }
`,J8=x(ya)`
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
`,Z8=x.div`
    font-size: 24px;
    font-weight: 400;
    color: #fff;
`,cE=x.div`
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
`,eB=({author:e})=>c.jsxs(Y8,{to:`/author/${e.uid}`,children:[c.jsxs(b,{width:"100%",jc:"space-between",style:{position:"relative",zIndex:1},children:[c.jsxs(X8,{width:"250px",d:"column",height:"100%",jc:"space-between",ai:"flex-start",gap:30,children:[c.jsxs(b,{d:"column",gap:14,children:[c.jsxs(b,{width:"100%",d:"column",ai:"flex-start",children:[c.jsx(Fr,{style:{color:"#fff"},children:"Top Result"}),c.jsxs(b,{gap:10,children:[c.jsx(Z8,{children:e==null?void 0:e.displayName}),e.isVerified&&c.jsx(Lh,{})]})]}),c.jsx(b,{width:"100%",gap:30,children:c.jsxs(b,{gap:4,children:[c.jsxs(cE,{children:[t0(e==null?void 0:e.numberOfListenersPerMonth),c.jsx(bd,{})]}),"∙",c.jsxs(cE,{children:[e==null?void 0:e.subscribers,c.jsx(oT,{})]})]})})]}),c.jsx(y1,{buttonColor:e.imageColors[1],isAdmin:!1,isPageOwner:!1,queueInfo:{listName:"",listIcon:void 0,listUrl:"",songs:[]}})]}),c.jsx(Rr,{isAuthor:e==null?void 0:e.isAdmin,colors:e.imageColors,src:e==null?void 0:e.photoURL,size:"150px"})]}),c.jsx(J8,{$colors:e==null?void 0:e.imageColors})]}),tB=x.div`
    width: 100%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 30px;
    max-width: 650px;

    @media (max-width: 1000px) {
        padding: 0 20px;
    }
`,nB=()=>{const[e]=rk(),[t,n]=me([SP,F8]),r=ur(),{currentSong:i,state:s,loaded:o}=G.useSong(),a={listName:"Search",listIcon:Pn.song,listUrl:r.pathname,songs:t.filter(f=>aa(f)==="song")},{handlePlay:l}=g1(a),u=t[0],d={song:(f,p,m)=>c.jsx(Gc,{song:f,playing:m&&s==="playing",loading:m&&s==="loading",loaded:m&&o,index:p,onClick:l}),author:f=>c.jsx(zr,{user:f,orientation:"horizontal"}),user:f=>c.jsx(zr,{user:f,orientation:"horizontal"}),playlist:f=>c.jsx(bs,{orientation:"horizontal",playlist:f}),album:f=>c.jsx(bs,{orientation:"horizontal",playlist:f})},h=!!u&&"isAuthor"in u&&(u==null?void 0:u.isAuthor)&&e.get("type")==="author";return console.log({isLoading:n}),t.length===0&&!n?null:c.jsx(tB,{children:c.jsxs(Hi,{color:"",loading:n,skeleton:c.jsx(K8,{}),children:[!h&&c.jsx("h3",{style:{fontWeight:300,marginBottom:"10px"},children:"Result"}),h&&c.jsx(eB,{author:u}),t.map((f,p)=>{const m=aa(f);if(h&&p===0)return null;if(m==="song"){const v=f.id===(i==null?void 0:i.id);return d[m](f,p,v)}return d[m](f)})]})})},rB=x.div`
    max-width: 650px;
    width: 100%;
    min-width: 300px;

    @media (max-width: 1000px) {
        width: 100%;
        max-width: none;
    }
`,iB=x.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`,sB=()=>{const[e]=rk(),t=e.get("query")??"",n=_c(),[r,i,s]=me([Wf,TP,U8]),o=he.useSearchHistory(),a=me(x1),[l]=me([AP]),u=()=>{},d=p=>{const m=os(p),v=aa(p);console.log({type:v}),n(`/search?query=${m}&type=${v}`)},h=p=>{CP(p)},f=p=>{console.log("onSumbit"),n(`/search?query=${p}&type=query`)};return S.useEffect(()=>{t&&(console.log({queryValue:t}),l(Rs(t)))},[l,t]),c.jsxs(iB,{children:[c.jsx(Bf,{children:c.jsx(rB,{children:c.jsx(Q8,{initialValue:t??r,suggestions:a,historySuggestions:o,areSuggestionsLoading:s,onChange:u,onChangeSuggestions:h,onSumbit:f,onSuggestionSubmit:d})})}),c.jsx(nB,{})]})},oB=()=>c.jsx("div",{children:"SongPage"}),aB=x.div`
	padding: 40px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 10px;
`;x.div`
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
`;const lB=()=>c.jsx(aB,{}),E1=[{url:"discover",title:"Discover",icon:c.jsx(AN,{}),component:c.jsx(Zz,{}),section:"features",private:!1},{url:"search",title:"Search",icon:c.jsx(ha,{}),component:c.jsx(sB,{}),section:"features",private:!1},{url:"trends",title:"Trends",icon:c.jsx(l4,{}),component:c.jsx(lB,{}),section:"features",private:!1},{url:"liked",title:"Liked",icon:c.jsx(sy,{}),component:c.jsx(C8,{}),section:"your music",private:!0,children:[{url:"",title:"Songs",icon:c.jsx(us,{}),component:c.jsx(j8,{}),section:"your music",private:!0},{url:"playlists",title:"Playlists",icon:c.jsx(cy,{}),component:c.jsx(R8,{}),section:"your music",private:!0},{url:"authors",title:"Authors",icon:c.jsx(eT,{}),component:c.jsx(A8,{}),section:"your music",private:!0}]},{url:"history",title:"History",icon:c.jsx(oy,{}),component:c.jsx(w8,{}),section:"your music",private:!0},{url:"chat",title:"Chat",icon:c.jsx(q_,{}),component:c.jsx(Kz,{}),children:[{url:":id",title:"Chat",icon:c.jsx(q_,{}),component:c.jsx(vP,{}),section:"your activities",private:!0}],section:"your activities",private:!0},{url:"friends",title:"Friends",icon:c.jsx(c4,{}),component:c.jsx(p8,{}),section:"your activities",private:!0},{url:"song/:id",title:"Song",icon:c.jsx(us,{}),component:c.jsx(oB,{}),section:"your music",private:!0},{url:"playlist/:id",title:"Playlist",icon:c.jsx(VN,{}),component:c.jsx(V8,{}),section:"your music",private:!0},{url:"author/:id",title:"Author",icon:c.jsx(JN,{}),component:c.jsx(yP,{}),section:"your music",private:!0},{url:"me",title:"Me",icon:c.jsx(aT,{}),component:c.jsx(N8,{}),section:"your music",private:!0}],RP=e=>{const t=[];for(let n=0;n<e.length;n++){const r=e[n],i=E1.find(s=>s.title===r);i&&t.push(i)}return t},cB=RP(["Discover","Search","Trends","Liked","History","Chat","Friends"]),uB=RP(["Discover","Liked","Chat","Search"]),dB=x.nav`
    min-height: 80px;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding: 0 10px;
    padding-top: 10px;
`,hB=x.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
`,fB=x.li`
    width: 100%;
`,pB=x(nk)`
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
`,gB=x.div`
    svg {
        width: 26px;
        height: 26px;
    }
`,mB=x.div`
    font-weight: 300;
    font-size: 0.75rem;
`,yB=({isActive:e})=>e?"active":"",vB=({route:e})=>{const{url:t,title:n,icon:r}=e;return c.jsxs(pB,{to:t,className:yB,children:[c.jsx(gB,{children:r}),c.jsx(mB,{children:n})]})},_B=()=>c.jsx(dB,{children:c.jsx(hB,{children:uB.map(e=>c.jsx(fB,{children:c.jsx(vB,{route:e})},e.url))})}),wB=()=>{const{opened:e,title:t,content:n}=bt.useModal();if(!e)return null;const r=()=>{bt.events.close()};return c.jsx(ZF,{children:c.jsxs(ez,{children:[c.jsx(iP,{onClick:r}),c.jsx(tz,{children:t}),c.jsx(nz,{children:n})]})})},xB=(e,t)=>{const n=S.useCallback(r=>{e.current&&!e.current.contains(r.target)&&t()},[t,e]);S.useEffect(()=>(document.addEventListener("click",n),()=>{document.removeEventListener("click",n)}),[n])},EB=x.div`
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
`,IB=()=>{const{content:e,height:t,width:n,isOpen:r,x:i,y:s,origin:o}=rn.usePopup(),a=S.useRef(null);return xB(a,()=>{r&&rn.events.close()}),c.jsx(EB,{$isOpen:r,$transformOrigin:o,ref:a,$posX:i,$posY:s,$height:t,$width:n,children:e})},SB=x.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({theme:e})=>e.colors.textColor};
    opacity: 0.7;
`,TB=x.div`
    width: 21px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 21px;
        height: 21px;
    }
`,kB=x.div`
    font-weight: 300;
`,CB=({icon:e,text:t})=>c.jsxs(SB,{children:[c.jsx(TB,{children:e}),c.jsx(kB,{children:t})]}),AB=(e,t)=>{const n={};return e.forEach(r=>{const i=r[t];n[i]===void 0?n[i]=[r]:n[i].push(r)}),n},RB=x.label`
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
`,PB=x.div`
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
`,bB=()=>c.jsxs(RB,{children:[c.jsx("input",{type:"file"}),c.jsx(PB,{children:c.jsx(PN,{})})]}),jB=()=>c.jsxs(b,{d:"column",gap:20,width:"100%",children:[c.jsx(bB,{}),c.jsx(nn,{required:!0,placeholder:"Enter name",label:"Playlist name"}),c.jsx(cr,{appearance:"primary",disabled:!0,children:"Create"})]}),NB=x(q)`
	min-height: 20px;
	height: 20px;
`,MB=x.div`
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
`,LB=()=>{const{theme:e}=wP(),t=()=>{v1()};return c.jsx(NB,{$width:"20px",onClick:t,children:c.jsxs(MB,{className:`theme ${e.toString()}`,children:[c.jsx(sT,{size:18}),c.jsx(ZN,{size:18})]})})},DB=()=>{var o;const e=AB(cB,"section"),{loggedIn:t}=_P(),[n]=he.useOwnPlaylists(),i={chat:Tr.useChatUnreadCount()},s=t(()=>{bt.events.open({title:"Create Playlist",content:c.jsx(jB,{})})});return c.jsxs(kU,{children:[c.jsxs(CU,{children:[c.jsx(dP,{}),c.jsx(LB,{})]}),Object.keys(e).map((a,l)=>c.jsxs(Bx,{children:[c.jsx(Hx,{children:a}),e[a].map(u=>c.jsx(AU,{to:u.url,className:({isActive:d})=>d?"active":"",children:c.jsxs(b,{width:"100%",jc:"space-between",children:[c.jsx(CB,{icon:u.icon,text:u.title}),!!i[u.url]&&c.jsx(c1,{children:i[u.url]})]})},u.url))]},l)),c.jsxs(Bx,{children:[c.jsxs(b,{jc:"space-between",width:"100%",children:[c.jsx(Hx,{children:"Your Playlists"}),c.jsx("button",{className:"add-playlist",onClick:s,children:c.jsx(i4,{})})]}),c.jsx(RU,{children:(o=n==null?void 0:n.slice(0,4))==null?void 0:o.map(a=>c.jsx(bs,{orientation:"horizontal",playlist:a},a.id))})]})]})},$B=x.div`
    height: calc(100dvh - 80px);
    display: flex;

    @media (max-width: 1000px) {
        height: calc(100dvh - 130px);
    }
`,OB=x.div`
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
`,VB=x.h1`
    font-size: 1.1rem;
    font-weight: 200;

    @media (max-width: 1000px) {
        font-size: 0.95rem;
    }
`,UB=x.div`
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
`,FB=x(ya)`
    overflow-y: auto;
    height: 100%;
    padding: 50px 20px;
    animation: none;
    scroll-padding-bottom: 300px;

    & > * {
        gap: 10px;
        font-size: 1.4rem;
    }
`,zB=x.div`
    display: none;

    @media (max-width: 1000px) {
        display: block;
        width: fit-content;
    }
`,BB=x.div`
    min-width: 300px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    @media (max-width: 1000px) {
        display: none;
    }
`,HB=()=>{const{currentSong:e}=G.useSong();return c.jsx(FB,{$colors:e==null?void 0:e.imageColors,children:c.jsx(oP,{})})},WB=()=>{const{currentSong:e}=G.useSong(),t=sP(),n=()=>{G.fullscreen.open()},r=a=>{a.stopPropagation(),rn.events.open({content:c.jsx(tP,{song:e}),height:329,e:a})},i=()=>{bt.events.open({title:`Share "${e==null?void 0:e.name}" with friends`,content:c.jsx(qc,{entity:e})})},s=()=>{bt.events.open({title:`Add "${e==null?void 0:e.name}" to playlist`,content:c.jsx(eP,{song:e})})},o=a=>{a.stopPropagation(),rn.events.open({content:c.jsx(HB,{}),height:500,width:350,e:a})};return c.jsxs(OB,{onClick:n,$background:(e==null?void 0:e.imageColors[0])??"darkgrey",children:[c.jsxs(UB,{children:[c.jsx(Ay,{colors:(e==null?void 0:e.imageColors)??["grey"],src:e==null?void 0:e.cover,size:"40px"}),c.jsxs(b,{d:"column",ai:"flex-start",children:[c.jsx(VB,{children:(e==null?void 0:e.name)??"Untitled"}),c.jsx(Ps,{authors:e==null?void 0:e.authors})]})]}),c.jsxs(b,{gap:30,width:"100%",jc:"flex-end",children:[c.jsx(rP,{...t}),c.jsx(zB,{children:c.jsx(nP,{children:c.jsx(q,{$width:"40px",onClick:a=>{a.stopPropagation(),t.onPlay()},children:c.jsx(Ff,{loading:t.state==="loading",playling:t.state==="playing"})})})}),c.jsxs(BB,{children:[c.jsx(Kh,{disabled:!e,width:"42px",songId:e==null?void 0:e.id,likeColor:e==null?void 0:e.imageColors[0]}),c.jsx(q,{$width:"42px",disabled:!e,onClick:s,children:c.jsx(iT,{size:20})}),c.jsx(q,{$width:"42px",disabled:!e,onClick:i,children:c.jsx(yc,{size:20})}),c.jsx(q,{$width:"42px",disabled:!(e!=null&&e.lyrics.length),onClick:o,children:c.jsx(rT,{size:20})}),c.jsx(q,{$width:"42px",onClick:r,disabled:!e,children:c.jsx(iy,{size:20})})]})]})]})},qB=x.div`
    width: 100%;
    height: 100%;
    position: relative;
`,GB=()=>{const e=G.fullscreen.useFullScreen();return c.jsxs(c.Fragment,{children:[c.jsx(HF,{}),c.jsx(VF,{open:e}),c.jsx(wB,{}),c.jsx(IB,{}),c.jsxs($B,{children:[c.jsx(DB,{}),c.jsx(qB,{children:c.jsx(ZT,{})})]}),c.jsx(WB,{}),c.jsx(_B,{})]})},QB=()=>c.jsx(ek,{children:c.jsxs(uo,{path:"/",element:c.jsx(GB,{}),children:[E1.map(e=>c.jsx(uo,{element:e.component,path:e.url,children:e.children&&e.children.map(t=>c.jsx(uo,{element:t.component,path:t.url},t.url))},e.url)),c.jsx(uo,{path:"*",element:c.jsx(c.Fragment,{children:"404"})})]})}),KB=aN`
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
`,YB=x.div`
    height: 100dvh;
    background: ${({theme:e})=>e.colors.pageBackground};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
`;function XB(){const{themeParams:e}=wP();return S.useEffect(()=>{he.events.setIsLoadingUsers(!0),Pt.onAuthStateChanged(async t=>{if(he.events.setIsLoadingUsers(!1),t!=null&&t.uid){const n=await Pt.getUserByUid(t.uid);he.events.setUser(n)}})},[]),c.jsxs(iN,{theme:e,children:[c.jsx(KB,{}),c.jsx(SL,{basename:"/soundbubble-2.0/",children:c.jsx(YB,{children:c.jsxs(cT,{children:[c.jsx(kM,{}),c.jsx(QB,{})]})})})]})}ig.createRoot(document.getElementById("root")).render(c.jsx(ye.StrictMode,{children:c.jsx(cT,{children:c.jsx(XB,{})})}));
