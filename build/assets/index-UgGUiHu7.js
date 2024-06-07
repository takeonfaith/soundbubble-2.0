var gP=Object.defineProperty;var mP=(e,t,n)=>t in e?gP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Le=(e,t,n)=>(mP(e,typeof t!="symbol"?t+"":t,n),n);function yP(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function t0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var iE={exports:{}},fh={},sE={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc=Symbol.for("react.element"),vP=Symbol.for("react.portal"),_P=Symbol.for("react.fragment"),wP=Symbol.for("react.strict_mode"),xP=Symbol.for("react.profiler"),EP=Symbol.for("react.provider"),IP=Symbol.for("react.context"),SP=Symbol.for("react.forward_ref"),TP=Symbol.for("react.suspense"),kP=Symbol.for("react.memo"),CP=Symbol.for("react.lazy"),y1=Symbol.iterator;function AP(e){return e===null||typeof e!="object"?null:(e=y1&&e[y1]||e["@@iterator"],typeof e=="function"?e:null)}var oE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aE=Object.assign,lE={};function ta(e,t,n){this.props=e,this.context=t,this.refs=lE,this.updater=n||oE}ta.prototype.isReactComponent={};ta.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ta.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cE(){}cE.prototype=ta.prototype;function n0(e,t,n){this.props=e,this.context=t,this.refs=lE,this.updater=n||oE}var r0=n0.prototype=new cE;r0.constructor=n0;aE(r0,ta.prototype);r0.isPureReactComponent=!0;var v1=Array.isArray,uE=Object.prototype.hasOwnProperty,i0={current:null},dE={key:!0,ref:!0,__self:!0,__source:!0};function hE(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)uE.call(t,r)&&!dE.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:dc,type:e,key:s,ref:o,props:i,_owner:i0.current}}function RP(e,t){return{$$typeof:dc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function s0(e){return typeof e=="object"&&e!==null&&e.$$typeof===dc}function PP(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _1=/\/+/g;function Gf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?PP(""+e.key):t.toString(36)}function ku(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case dc:case vP:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Gf(o,0):r,v1(i)?(n="",e!=null&&(n=e.replace(_1,"$&/")+"/"),ku(i,t,n,"",function(u){return u})):i!=null&&(s0(i)&&(i=RP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_1,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",v1(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Gf(s,a);o+=ku(s,t,n,l,i)}else if(l=AP(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Gf(s,a++),o+=ku(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Kc(e,t,n){if(e==null)return e;var r=[],i=0;return ku(e,r,"","",function(s){return t.call(n,s,i++)}),r}function NP(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var bt={current:null},Cu={transition:null},jP={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Cu,ReactCurrentOwner:i0};re.Children={map:Kc,forEach:function(e,t,n){Kc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kc(e,function(){t++}),t},toArray:function(e){return Kc(e,function(t){return t})||[]},only:function(e){if(!s0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=ta;re.Fragment=_P;re.Profiler=xP;re.PureComponent=n0;re.StrictMode=wP;re.Suspense=TP;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jP;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=aE({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=i0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)uE.call(t,l)&&!dE.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:dc,type:e.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(e){return e={$$typeof:IP,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:EP,_context:e},e.Consumer=e};re.createElement=hE;re.createFactory=function(e){var t=hE.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:SP,render:e}};re.isValidElement=s0;re.lazy=function(e){return{$$typeof:CP,_payload:{_status:-1,_result:e},_init:NP}};re.memo=function(e,t){return{$$typeof:kP,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Cu.transition;Cu.transition={};try{e()}finally{Cu.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return bt.current.useCallback(e,t)};re.useContext=function(e){return bt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return bt.current.useDeferredValue(e)};re.useEffect=function(e,t){return bt.current.useEffect(e,t)};re.useId=function(){return bt.current.useId()};re.useImperativeHandle=function(e,t,n){return bt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return bt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return bt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return bt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return bt.current.useReducer(e,t,n)};re.useRef=function(e){return bt.current.useRef(e)};re.useState=function(e){return bt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return bt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return bt.current.useTransition()};re.version="18.2.0";sE.exports=re;var T=sE.exports;const pe=t0(T),bP=yP({__proto__:null,default:pe},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MP=T,LP=Symbol.for("react.element"),DP=Symbol.for("react.fragment"),OP=Object.prototype.hasOwnProperty,$P=MP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VP={key:!0,ref:!0,__self:!0,__source:!0};function fE(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)OP.call(t,r)&&!VP.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:LP,type:e,key:s,ref:o,props:i,_owner:$P.current}}fh.Fragment=DP;fh.jsx=fE;fh.jsxs=fE;iE.exports=fh;var c=iE.exports,ng={},pE={exports:{}},on={},gE={exports:{}},mE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,H){var q=b.length;b.push(H);e:for(;0<q;){var ae=q-1>>>1,Se=b[ae];if(0<i(Se,H))b[ae]=H,b[q]=Se,q=ae;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var H=b[0],q=b.pop();if(q!==H){b[0]=q;e:for(var ae=0,Se=b.length,In=Se>>>1;ae<In;){var je=2*(ae+1)-1,ln=b[je],Lt=je+1,qt=b[Lt];if(0>i(ln,q))Lt<Se&&0>i(qt,ln)?(b[ae]=qt,b[Lt]=q,ae=Lt):(b[ae]=ln,b[je]=q,ae=je);else if(Lt<Se&&0>i(qt,q))b[ae]=qt,b[Lt]=q,ae=Lt;else break e}}return H}function i(b,H){var q=b.sortIndex-H.sortIndex;return q!==0?q:b.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,h=null,f=3,g=!1,m=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=b)r(u),H.sortIndex=H.expirationTime,t(l,H);else break;H=n(u)}}function x(b){if(_=!1,v(b),!m)if(n(l)!==null)m=!0,Bi(S);else{var H=n(u);H!==null&&Bn(x,H.startTime-b)}}function S(b,H){m=!1,_&&(_=!1,p(A),A=-1),g=!0;var q=f;try{for(v(H),h=n(l);h!==null&&(!(h.expirationTime>H)||b&&!rt());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,f=h.priorityLevel;var Se=ae(h.expirationTime<=H);H=e.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),v(H)}else r(l);h=n(l)}if(h!==null)var In=!0;else{var je=n(u);je!==null&&Bn(x,je.startTime-H),In=!1}return In}finally{h=null,f=q,g=!1}}var k=!1,I=null,A=-1,$=5,B=-1;function rt(){return!(e.unstable_now()-B<$)}function K(){if(I!==null){var b=e.unstable_now();B=b;var H=!0;try{H=I(!0,b)}finally{H?it():(k=!1,I=null)}}else k=!1}var it;if(typeof y=="function")it=function(){y(K)};else if(typeof MessageChannel<"u"){var Br=new MessageChannel,zi=Br.port2;Br.port1.onmessage=K,it=function(){zi.postMessage(null)}}else it=function(){w(K,0)};function Bi(b){I=b,k||(k=!0,it())}function Bn(b,H){A=w(function(){b(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){m||g||(m=!0,Bi(S))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var q=f;f=H;try{return b()}finally{f=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,H){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var q=f;f=b;try{return H()}finally{f=q}},e.unstable_scheduleCallback=function(b,H,q){var ae=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ae+q:ae):q=ae,b){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=q+Se,b={id:d++,callback:H,priorityLevel:b,startTime:q,expirationTime:Se,sortIndex:-1},q>ae?(b.sortIndex=q,t(u,b),n(l)===null&&b===n(u)&&(_?(p(A),A=-1):_=!0,Bn(x,q-ae))):(b.sortIndex=Se,t(l,b),m||g||(m=!0,Bi(S))),b},e.unstable_shouldYield=rt,e.unstable_wrapCallback=function(b){var H=f;return function(){var q=f;f=H;try{return b.apply(this,arguments)}finally{f=q}}}})(mE);gE.exports=mE;var FP=gE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE=T,en=FP;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vE=new Set,pl={};function As(e,t){So(e,t),So(e+"Capture",t)}function So(e,t){for(pl[e]=t,e=0;e<t.length;e++)vE.add(t[e])}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rg=Object.prototype.hasOwnProperty,UP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w1={},x1={};function zP(e){return rg.call(x1,e)?!0:rg.call(w1,e)?!1:UP.test(e)?x1[e]=!0:(w1[e]=!0,!1)}function BP(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function HP(e,t,n,r){if(t===null||typeof t>"u"||BP(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Mt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ft[e]=new Mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ft[t]=new Mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ft[e]=new Mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ft[e]=new Mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ft[e]=new Mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ft[e]=new Mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ft[e]=new Mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ft[e]=new Mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ft[e]=new Mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var o0=/[\-:]([a-z])/g;function a0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(o0,a0);ft[t]=new Mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(o0,a0);ft[t]=new Mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(o0,a0);ft[t]=new Mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ft[e]=new Mt(e,1,!1,e.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ft[e]=new Mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function l0(e,t,n,r){var i=ft.hasOwnProperty(t)?ft[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(HP(t,n,i,r)&&(n=null),r||i===null?zP(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Fr=yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yc=Symbol.for("react.element"),Hs=Symbol.for("react.portal"),Ws=Symbol.for("react.fragment"),c0=Symbol.for("react.strict_mode"),ig=Symbol.for("react.profiler"),_E=Symbol.for("react.provider"),wE=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),sg=Symbol.for("react.suspense"),og=Symbol.for("react.suspense_list"),d0=Symbol.for("react.memo"),Qr=Symbol.for("react.lazy"),xE=Symbol.for("react.offscreen"),E1=Symbol.iterator;function Ia(e){return e===null||typeof e!="object"?null:(e=E1&&e[E1]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Qf;function La(e){if(Qf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qf=t&&t[1]||""}return`
`+Qf+e}var Kf=!1;function Yf(e,t){if(!e||Kf)return"";Kf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?La(e):""}function WP(e){switch(e.tag){case 5:return La(e.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 2:case 15:return e=Yf(e.type,!1),e;case 11:return e=Yf(e.type.render,!1),e;case 1:return e=Yf(e.type,!0),e;default:return""}}function ag(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ws:return"Fragment";case Hs:return"Portal";case ig:return"Profiler";case c0:return"StrictMode";case sg:return"Suspense";case og:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wE:return(e.displayName||"Context")+".Consumer";case _E:return(e._context.displayName||"Context")+".Provider";case u0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case d0:return t=e.displayName||null,t!==null?t:ag(e.type)||"Memo";case Qr:t=e._payload,e=e._init;try{return ag(e(t))}catch{}}return null}function qP(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ag(t);case 8:return t===c0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ei(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function EE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function GP(e){var t=EE(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xc(e){e._valueTracker||(e._valueTracker=GP(e))}function IE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=EE(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function id(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lg(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function I1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ei(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function SE(e,t){t=t.checked,t!=null&&l0(e,"checked",t,!1)}function cg(e,t){SE(e,t);var n=Ei(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ug(e,t.type,n):t.hasOwnProperty("defaultValue")&&ug(e,t.type,Ei(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function S1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ug(e,t,n){(t!=="number"||id(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Da=Array.isArray;function co(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ei(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function dg(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function T1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Da(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ei(n)}}function TE(e,t){var n=Ei(t.value),r=Ei(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function k1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kE(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hg(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kE(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jc,CE=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Jc=Jc||document.createElement("div"),Jc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Jc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QP=["Webkit","ms","Moz","O"];Object.keys(Ka).forEach(function(e){QP.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ka[t]=Ka[e]})});function AE(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ka.hasOwnProperty(e)&&Ka[e]?(""+t).trim():t+"px"}function RE(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=AE(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var KP=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fg(e,t){if(t){if(KP[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function pg(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gg=null;function h0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mg=null,uo=null,ho=null;function C1(e){if(e=pc(e)){if(typeof mg!="function")throw Error(N(280));var t=e.stateNode;t&&(t=vh(t),mg(e.stateNode,e.type,t))}}function PE(e){uo?ho?ho.push(e):ho=[e]:uo=e}function NE(){if(uo){var e=uo,t=ho;if(ho=uo=null,C1(e),t)for(e=0;e<t.length;e++)C1(t[e])}}function jE(e,t){return e(t)}function bE(){}var Xf=!1;function ME(e,t,n){if(Xf)return e(t,n);Xf=!0;try{return jE(e,t,n)}finally{Xf=!1,(uo!==null||ho!==null)&&(bE(),NE())}}function ml(e,t){var n=e.stateNode;if(n===null)return null;var r=vh(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var yg=!1;if(Ar)try{var Sa={};Object.defineProperty(Sa,"passive",{get:function(){yg=!0}}),window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{yg=!1}function YP(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ya=!1,sd=null,od=!1,vg=null,XP={onError:function(e){Ya=!0,sd=e}};function JP(e,t,n,r,i,s,o,a,l){Ya=!1,sd=null,YP.apply(XP,arguments)}function ZP(e,t,n,r,i,s,o,a,l){if(JP.apply(this,arguments),Ya){if(Ya){var u=sd;Ya=!1,sd=null}else throw Error(N(198));od||(od=!0,vg=u)}}function Rs(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function LE(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A1(e){if(Rs(e)!==e)throw Error(N(188))}function e2(e){var t=e.alternate;if(!t){if(t=Rs(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return A1(i),e;if(s===r)return A1(i),t;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function DE(e){return e=e2(e),e!==null?OE(e):null}function OE(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=OE(e);if(t!==null)return t;e=e.sibling}return null}var $E=en.unstable_scheduleCallback,R1=en.unstable_cancelCallback,t2=en.unstable_shouldYield,n2=en.unstable_requestPaint,De=en.unstable_now,r2=en.unstable_getCurrentPriorityLevel,f0=en.unstable_ImmediatePriority,VE=en.unstable_UserBlockingPriority,ad=en.unstable_NormalPriority,i2=en.unstable_LowPriority,FE=en.unstable_IdlePriority,ph=null,er=null;function s2(e){if(er&&typeof er.onCommitFiberRoot=="function")try{er.onCommitFiberRoot(ph,e,void 0,(e.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:l2,o2=Math.log,a2=Math.LN2;function l2(e){return e>>>=0,e===0?32:31-(o2(e)/a2|0)|0}var Zc=64,eu=4194304;function Oa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ld(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Oa(a):(s&=o,s!==0&&(r=Oa(s)))}else o=n&~i,o!==0?r=Oa(o):s!==0&&(r=Oa(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rn(t),i=1<<n,r|=e[n],t&=~i;return r}function c2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Rn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=c2(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function _g(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function UE(){var e=Zc;return Zc<<=1,!(Zc&4194240)&&(Zc=64),e}function Jf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rn(t),e[t]=n}function d2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Rn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function p0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function zE(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var BE,g0,HE,WE,qE,wg=!1,tu=[],oi=null,ai=null,li=null,yl=new Map,vl=new Map,Yr=[],h2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function P1(e,t){switch(e){case"focusin":case"focusout":oi=null;break;case"dragenter":case"dragleave":ai=null;break;case"mouseover":case"mouseout":li=null;break;case"pointerover":case"pointerout":yl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(t.pointerId)}}function Ta(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=pc(t),t!==null&&g0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function f2(e,t,n,r,i){switch(t){case"focusin":return oi=Ta(oi,e,t,n,r,i),!0;case"dragenter":return ai=Ta(ai,e,t,n,r,i),!0;case"mouseover":return li=Ta(li,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return yl.set(s,Ta(yl.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vl.set(s,Ta(vl.get(s)||null,e,t,n,r,i)),!0}return!1}function GE(e){var t=Yi(e.target);if(t!==null){var n=Rs(t);if(n!==null){if(t=n.tag,t===13){if(t=LE(n),t!==null){e.blockedOn=t,qE(e.priority,function(){HE(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Au(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xg(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gg=r,n.target.dispatchEvent(r),gg=null}else return t=pc(n),t!==null&&g0(t),e.blockedOn=n,!1;t.shift()}return!0}function N1(e,t,n){Au(e)&&n.delete(t)}function p2(){wg=!1,oi!==null&&Au(oi)&&(oi=null),ai!==null&&Au(ai)&&(ai=null),li!==null&&Au(li)&&(li=null),yl.forEach(N1),vl.forEach(N1)}function ka(e,t){e.blockedOn===t&&(e.blockedOn=null,wg||(wg=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,p2)))}function _l(e){function t(i){return ka(i,e)}if(0<tu.length){ka(tu[0],e);for(var n=1;n<tu.length;n++){var r=tu[n];r.blockedOn===e&&(r.blockedOn=null)}}for(oi!==null&&ka(oi,e),ai!==null&&ka(ai,e),li!==null&&ka(li,e),yl.forEach(t),vl.forEach(t),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)GE(n),n.blockedOn===null&&Yr.shift()}var fo=Fr.ReactCurrentBatchConfig,cd=!0;function g2(e,t,n,r){var i=de,s=fo.transition;fo.transition=null;try{de=1,m0(e,t,n,r)}finally{de=i,fo.transition=s}}function m2(e,t,n,r){var i=de,s=fo.transition;fo.transition=null;try{de=4,m0(e,t,n,r)}finally{de=i,fo.transition=s}}function m0(e,t,n,r){if(cd){var i=xg(e,t,n,r);if(i===null)lp(e,t,r,ud,n),P1(e,r);else if(f2(i,e,t,n,r))r.stopPropagation();else if(P1(e,r),t&4&&-1<h2.indexOf(e)){for(;i!==null;){var s=pc(i);if(s!==null&&BE(s),s=xg(e,t,n,r),s===null&&lp(e,t,r,ud,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lp(e,t,r,null,n)}}var ud=null;function xg(e,t,n,r){if(ud=null,e=h0(r),e=Yi(e),e!==null)if(t=Rs(e),t===null)e=null;else if(n=t.tag,n===13){if(e=LE(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ud=e,null}function QE(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r2()){case f0:return 1;case VE:return 4;case ad:case i2:return 16;case FE:return 536870912;default:return 16}default:return 16}}var ni=null,y0=null,Ru=null;function KE(){if(Ru)return Ru;var e,t=y0,n=t.length,r,i="value"in ni?ni.value:ni.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ru=i.slice(e,1<r?1-r:void 0)}function Pu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nu(){return!0}function j1(){return!1}function an(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nu:j1,this.isPropagationStopped=j1,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nu)},persist:function(){},isPersistent:nu}),t}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},v0=an(na),fc=Pe({},na,{view:0,detail:0}),y2=an(fc),Zf,ep,Ca,gh=Pe({},fc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ca&&(Ca&&e.type==="mousemove"?(Zf=e.screenX-Ca.screenX,ep=e.screenY-Ca.screenY):ep=Zf=0,Ca=e),Zf)},movementY:function(e){return"movementY"in e?e.movementY:ep}}),b1=an(gh),v2=Pe({},gh,{dataTransfer:0}),_2=an(v2),w2=Pe({},fc,{relatedTarget:0}),tp=an(w2),x2=Pe({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),E2=an(x2),I2=Pe({},na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S2=an(I2),T2=Pe({},na,{data:0}),M1=an(T2),k2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=A2[e])?!!t[e]:!1}function _0(){return R2}var P2=Pe({},fc,{key:function(e){if(e.key){var t=k2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?C2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_0,charCode:function(e){return e.type==="keypress"?Pu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),N2=an(P2),j2=Pe({},gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),L1=an(j2),b2=Pe({},fc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_0}),M2=an(b2),L2=Pe({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),D2=an(L2),O2=Pe({},gh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$2=an(O2),V2=[9,13,27,32],w0=Ar&&"CompositionEvent"in window,Xa=null;Ar&&"documentMode"in document&&(Xa=document.documentMode);var F2=Ar&&"TextEvent"in window&&!Xa,YE=Ar&&(!w0||Xa&&8<Xa&&11>=Xa),D1=" ",O1=!1;function XE(e,t){switch(e){case"keyup":return V2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function JE(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qs=!1;function U2(e,t){switch(e){case"compositionend":return JE(t);case"keypress":return t.which!==32?null:(O1=!0,D1);case"textInput":return e=t.data,e===D1&&O1?null:e;default:return null}}function z2(e,t){if(qs)return e==="compositionend"||!w0&&XE(e,t)?(e=KE(),Ru=y0=ni=null,qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return YE&&t.locale!=="ko"?null:t.data;default:return null}}var B2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B2[e.type]:t==="textarea"}function ZE(e,t,n,r){PE(r),t=dd(t,"onChange"),0<t.length&&(n=new v0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ja=null,wl=null;function H2(e){uI(e,0)}function mh(e){var t=Ks(e);if(IE(t))return e}function W2(e,t){if(e==="change")return t}var eI=!1;if(Ar){var np;if(Ar){var rp="oninput"in document;if(!rp){var V1=document.createElement("div");V1.setAttribute("oninput","return;"),rp=typeof V1.oninput=="function"}np=rp}else np=!1;eI=np&&(!document.documentMode||9<document.documentMode)}function F1(){Ja&&(Ja.detachEvent("onpropertychange",tI),wl=Ja=null)}function tI(e){if(e.propertyName==="value"&&mh(wl)){var t=[];ZE(t,wl,e,h0(e)),ME(H2,t)}}function q2(e,t,n){e==="focusin"?(F1(),Ja=t,wl=n,Ja.attachEvent("onpropertychange",tI)):e==="focusout"&&F1()}function G2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mh(wl)}function Q2(e,t){if(e==="click")return mh(t)}function K2(e,t){if(e==="input"||e==="change")return mh(t)}function Y2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mn=typeof Object.is=="function"?Object.is:Y2;function xl(e,t){if(Mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rg.call(t,i)||!Mn(e[i],t[i]))return!1}return!0}function U1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function z1(e,t){var n=U1(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=U1(n)}}function nI(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nI(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rI(){for(var e=window,t=id();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=id(e.document)}return t}function x0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function X2(e){var t=rI(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nI(n.ownerDocument.documentElement,n)){if(r!==null&&x0(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=z1(n,s);var o=z1(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var J2=Ar&&"documentMode"in document&&11>=document.documentMode,Gs=null,Eg=null,Za=null,Ig=!1;function B1(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ig||Gs==null||Gs!==id(r)||(r=Gs,"selectionStart"in r&&x0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Za&&xl(Za,r)||(Za=r,r=dd(Eg,"onSelect"),0<r.length&&(t=new v0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gs)))}function ru(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qs={animationend:ru("Animation","AnimationEnd"),animationiteration:ru("Animation","AnimationIteration"),animationstart:ru("Animation","AnimationStart"),transitionend:ru("Transition","TransitionEnd")},ip={},iI={};Ar&&(iI=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function yh(e){if(ip[e])return ip[e];if(!Qs[e])return e;var t=Qs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in iI)return ip[e]=t[n];return e}var sI=yh("animationend"),oI=yh("animationiteration"),aI=yh("animationstart"),lI=yh("transitionend"),cI=new Map,H1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ni(e,t){cI.set(e,t),As(t,[e])}for(var sp=0;sp<H1.length;sp++){var op=H1[sp],Z2=op.toLowerCase(),eN=op[0].toUpperCase()+op.slice(1);Ni(Z2,"on"+eN)}Ni(sI,"onAnimationEnd");Ni(oI,"onAnimationIteration");Ni(aI,"onAnimationStart");Ni("dblclick","onDoubleClick");Ni("focusin","onFocus");Ni("focusout","onBlur");Ni(lI,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tN=new Set("cancel close invalid load scroll toggle".split(" ").concat($a));function W1(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ZP(r,t,void 0,e),e.currentTarget=null}function uI(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;W1(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;W1(i,a,u),s=l}}}if(od)throw e=vg,od=!1,vg=null,e}function ye(e,t){var n=t[Ag];n===void 0&&(n=t[Ag]=new Set);var r=e+"__bubble";n.has(r)||(dI(t,e,2,!1),n.add(r))}function ap(e,t,n){var r=0;t&&(r|=4),dI(n,e,r,t)}var iu="_reactListening"+Math.random().toString(36).slice(2);function El(e){if(!e[iu]){e[iu]=!0,vE.forEach(function(n){n!=="selectionchange"&&(tN.has(n)||ap(n,!1,e),ap(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[iu]||(t[iu]=!0,ap("selectionchange",!1,t))}}function dI(e,t,n,r){switch(QE(t)){case 1:var i=g2;break;case 4:i=m2;break;default:i=m0}n=i.bind(null,t,n,e),i=void 0,!yg||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function lp(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Yi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ME(function(){var u=s,d=h0(n),h=[];e:{var f=cI.get(e);if(f!==void 0){var g=v0,m=e;switch(e){case"keypress":if(Pu(n)===0)break e;case"keydown":case"keyup":g=N2;break;case"focusin":m="focus",g=tp;break;case"focusout":m="blur",g=tp;break;case"beforeblur":case"afterblur":g=tp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=b1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=M2;break;case sI:case oI:case aI:g=E2;break;case lI:g=D2;break;case"scroll":g=y2;break;case"wheel":g=$2;break;case"copy":case"cut":case"paste":g=S2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=L1}var _=(t&4)!==0,w=!_&&e==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var y=u,v;y!==null;){v=y;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,p!==null&&(x=ml(y,p),x!=null&&_.push(Il(y,x,v)))),w)break;y=y.return}0<_.length&&(f=new g(f,m,null,n,d),h.push({event:f,listeners:_}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==gg&&(m=n.relatedTarget||n.fromElement)&&(Yi(m)||m[Rr]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=u,m=m?Yi(m):null,m!==null&&(w=Rs(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=u),g!==m)){if(_=b1,x="onMouseLeave",p="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(_=L1,x="onPointerLeave",p="onPointerEnter",y="pointer"),w=g==null?f:Ks(g),v=m==null?f:Ks(m),f=new _(x,y+"leave",g,n,d),f.target=w,f.relatedTarget=v,x=null,Yi(d)===u&&(_=new _(p,y+"enter",m,n,d),_.target=v,_.relatedTarget=w,x=_),w=x,g&&m)t:{for(_=g,p=m,y=0,v=_;v;v=Ds(v))y++;for(v=0,x=p;x;x=Ds(x))v++;for(;0<y-v;)_=Ds(_),y--;for(;0<v-y;)p=Ds(p),v--;for(;y--;){if(_===p||p!==null&&_===p.alternate)break t;_=Ds(_),p=Ds(p)}_=null}else _=null;g!==null&&q1(h,f,g,_,!1),m!==null&&w!==null&&q1(h,w,m,_,!0)}}e:{if(f=u?Ks(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=W2;else if($1(f))if(eI)S=K2;else{S=G2;var k=q2}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Q2);if(S&&(S=S(e,u))){ZE(h,S,n,d);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&ug(f,"number",f.value)}switch(k=u?Ks(u):window,e){case"focusin":($1(k)||k.contentEditable==="true")&&(Gs=k,Eg=u,Za=null);break;case"focusout":Za=Eg=Gs=null;break;case"mousedown":Ig=!0;break;case"contextmenu":case"mouseup":case"dragend":Ig=!1,B1(h,n,d);break;case"selectionchange":if(J2)break;case"keydown":case"keyup":B1(h,n,d)}var I;if(w0)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else qs?XE(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(YE&&n.locale!=="ko"&&(qs||A!=="onCompositionStart"?A==="onCompositionEnd"&&qs&&(I=KE()):(ni=d,y0="value"in ni?ni.value:ni.textContent,qs=!0)),k=dd(u,A),0<k.length&&(A=new M1(A,e,null,n,d),h.push({event:A,listeners:k}),I?A.data=I:(I=JE(n),I!==null&&(A.data=I)))),(I=F2?U2(e,n):z2(e,n))&&(u=dd(u,"onBeforeInput"),0<u.length&&(d=new M1("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=I))}uI(h,t)})}function Il(e,t,n){return{instance:e,listener:t,currentTarget:n}}function dd(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ml(e,n),s!=null&&r.unshift(Il(e,s,i)),s=ml(e,t),s!=null&&r.push(Il(e,s,i))),e=e.return}return r}function Ds(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function q1(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ml(n,s),l!=null&&o.unshift(Il(n,l,a))):i||(l=ml(n,s),l!=null&&o.push(Il(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var nN=/\r\n?/g,rN=/\u0000|\uFFFD/g;function G1(e){return(typeof e=="string"?e:""+e).replace(nN,`
`).replace(rN,"")}function su(e,t,n){if(t=G1(t),G1(e)!==t&&n)throw Error(N(425))}function hd(){}var Sg=null,Tg=null;function kg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cg=typeof setTimeout=="function"?setTimeout:void 0,iN=typeof clearTimeout=="function"?clearTimeout:void 0,Q1=typeof Promise=="function"?Promise:void 0,sN=typeof queueMicrotask=="function"?queueMicrotask:typeof Q1<"u"?function(e){return Q1.resolve(null).then(e).catch(oN)}:Cg;function oN(e){setTimeout(function(){throw e})}function cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),_l(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_l(t)}function ci(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function K1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ra=Math.random().toString(36).slice(2),Qn="__reactFiber$"+ra,Sl="__reactProps$"+ra,Rr="__reactContainer$"+ra,Ag="__reactEvents$"+ra,aN="__reactListeners$"+ra,lN="__reactHandles$"+ra;function Yi(e){var t=e[Qn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rr]||n[Qn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=K1(e);e!==null;){if(n=e[Qn])return n;e=K1(e)}return t}e=n,n=e.parentNode}return null}function pc(e){return e=e[Qn]||e[Rr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ks(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function vh(e){return e[Sl]||null}var Rg=[],Ys=-1;function ji(e){return{current:e}}function Ee(e){0>Ys||(e.current=Rg[Ys],Rg[Ys]=null,Ys--)}function ge(e,t){Ys++,Rg[Ys]=e.current,e.current=t}var Ii={},St=ji(Ii),Ut=ji(!1),us=Ii;function To(e,t){var n=e.type.contextTypes;if(!n)return Ii;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zt(e){return e=e.childContextTypes,e!=null}function fd(){Ee(Ut),Ee(St)}function Y1(e,t,n){if(St.current!==Ii)throw Error(N(168));ge(St,t),ge(Ut,n)}function hI(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,qP(e)||"Unknown",i));return Pe({},n,r)}function pd(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ii,us=St.current,ge(St,e),ge(Ut,Ut.current),!0}function X1(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=hI(e,t,us),r.__reactInternalMemoizedMergedChildContext=e,Ee(Ut),Ee(St),ge(St,e)):Ee(Ut),ge(Ut,n)}var mr=null,_h=!1,up=!1;function fI(e){mr===null?mr=[e]:mr.push(e)}function cN(e){_h=!0,fI(e)}function bi(){if(!up&&mr!==null){up=!0;var e=0,t=de;try{var n=mr;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mr=null,_h=!1}catch(i){throw mr!==null&&(mr=mr.slice(e+1)),$E(f0,bi),i}finally{de=t,up=!1}}return null}var Xs=[],Js=0,gd=null,md=0,cn=[],un=0,ds=null,yr=1,vr="";function Gi(e,t){Xs[Js++]=md,Xs[Js++]=gd,gd=e,md=t}function pI(e,t,n){cn[un++]=yr,cn[un++]=vr,cn[un++]=ds,ds=e;var r=yr;e=vr;var i=32-Rn(r)-1;r&=~(1<<i),n+=1;var s=32-Rn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yr=1<<32-Rn(t)+i|n<<i|r,vr=s+e}else yr=1<<s|n<<i|r,vr=e}function E0(e){e.return!==null&&(Gi(e,1),pI(e,1,0))}function I0(e){for(;e===gd;)gd=Xs[--Js],Xs[Js]=null,md=Xs[--Js],Xs[Js]=null;for(;e===ds;)ds=cn[--un],cn[un]=null,vr=cn[--un],cn[un]=null,yr=cn[--un],cn[un]=null}var Zt=null,Kt=null,ke=!1,Cn=null;function gI(e,t){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function J1(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Zt=e,Kt=ci(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Zt=e,Kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ds!==null?{id:yr,overflow:vr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Zt=e,Kt=null,!0):!1;default:return!1}}function Pg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ng(e){if(ke){var t=Kt;if(t){var n=t;if(!J1(e,t)){if(Pg(e))throw Error(N(418));t=ci(n.nextSibling);var r=Zt;t&&J1(e,t)?gI(r,n):(e.flags=e.flags&-4097|2,ke=!1,Zt=e)}}else{if(Pg(e))throw Error(N(418));e.flags=e.flags&-4097|2,ke=!1,Zt=e}}}function Z1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zt=e}function ou(e){if(e!==Zt)return!1;if(!ke)return Z1(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kg(e.type,e.memoizedProps)),t&&(t=Kt)){if(Pg(e))throw mI(),Error(N(418));for(;t;)gI(e,t),t=ci(t.nextSibling)}if(Z1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Kt=ci(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Kt=null}}else Kt=Zt?ci(e.stateNode.nextSibling):null;return!0}function mI(){for(var e=Kt;e;)e=ci(e.nextSibling)}function ko(){Kt=Zt=null,ke=!1}function S0(e){Cn===null?Cn=[e]:Cn.push(e)}var uN=Fr.ReactCurrentBatchConfig;function Tn(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var yd=ji(null),vd=null,Zs=null,T0=null;function k0(){T0=Zs=vd=null}function C0(e){var t=yd.current;Ee(yd),e._currentValue=t}function jg(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function po(e,t){vd=e,T0=Zs=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ft=!0),e.firstContext=null)}function _n(e){var t=e._currentValue;if(T0!==e)if(e={context:e,memoizedValue:t,next:null},Zs===null){if(vd===null)throw Error(N(308));Zs=e,vd.dependencies={lanes:0,firstContext:e}}else Zs=Zs.next=e;return t}var Xi=null;function A0(e){Xi===null?Xi=[e]:Xi.push(e)}function yI(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,A0(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pr(e,r)}function Pr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kr=!1;function R0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vI(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ui(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pr(e,n)}return i=r.interleaved,i===null?(t.next=t,A0(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pr(e,n)}function Nu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,p0(e,n)}}function e_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _d(e,t,n,r){var i=e.updateQueue;Kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,_=a;switch(f=t,g=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){h=m.call(g,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,f=typeof m=="function"?m.call(g,h,f):m,f==null)break e;h=Pe({},h,f);break e;case 2:Kr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=h):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);fs|=o,e.lanes=o,e.memoizedState=h}}function t_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var _I=new yE.Component().refs;function bg(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wh={isMounted:function(e){return(e=e._reactInternals)?Rs(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jt(),i=hi(e),s=Tr(r,i);s.payload=t,n!=null&&(s.callback=n),t=ui(e,s,i),t!==null&&(Pn(t,e,i,r),Nu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jt(),i=hi(e),s=Tr(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ui(e,s,i),t!==null&&(Pn(t,e,i,r),Nu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jt(),r=hi(e),i=Tr(n,r);i.tag=2,t!=null&&(i.callback=t),t=ui(e,i,r),t!==null&&(Pn(t,e,r,n),Nu(t,e,r))}};function n_(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!xl(n,r)||!xl(i,s):!0}function wI(e,t,n){var r=!1,i=Ii,s=t.contextType;return typeof s=="object"&&s!==null?s=_n(s):(i=zt(t)?us:St.current,r=t.contextTypes,s=(r=r!=null)?To(e,i):Ii),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wh,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function r_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wh.enqueueReplaceState(t,t.state,null)}function Mg(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=_I,R0(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=_n(s):(s=zt(t)?us:St.current,i.context=To(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(bg(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wh.enqueueReplaceState(i,i.state,null),_d(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Aa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===_I&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function au(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function i_(e){var t=e._init;return t(e._payload)}function xI(e){function t(p,y){if(e){var v=p.deletions;v===null?(p.deletions=[y],p.flags|=16):v.push(y)}}function n(p,y){if(!e)return null;for(;y!==null;)t(p,y),y=y.sibling;return null}function r(p,y){for(p=new Map;y!==null;)y.key!==null?p.set(y.key,y):p.set(y.index,y),y=y.sibling;return p}function i(p,y){return p=fi(p,y),p.index=0,p.sibling=null,p}function s(p,y,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<y?(p.flags|=2,y):v):(p.flags|=2,y)):(p.flags|=1048576,y)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,y,v,x){return y===null||y.tag!==6?(y=yp(v,p.mode,x),y.return=p,y):(y=i(y,v),y.return=p,y)}function l(p,y,v,x){var S=v.type;return S===Ws?d(p,y,v.props.children,x,v.key):y!==null&&(y.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qr&&i_(S)===y.type)?(x=i(y,v.props),x.ref=Aa(p,y,v),x.return=p,x):(x=Ou(v.type,v.key,v.props,null,p.mode,x),x.ref=Aa(p,y,v),x.return=p,x)}function u(p,y,v,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=vp(v,p.mode,x),y.return=p,y):(y=i(y,v.children||[]),y.return=p,y)}function d(p,y,v,x,S){return y===null||y.tag!==7?(y=ss(v,p.mode,x,S),y.return=p,y):(y=i(y,v),y.return=p,y)}function h(p,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=yp(""+y,p.mode,v),y.return=p,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yc:return v=Ou(y.type,y.key,y.props,null,p.mode,v),v.ref=Aa(p,null,y),v.return=p,v;case Hs:return y=vp(y,p.mode,v),y.return=p,y;case Qr:var x=y._init;return h(p,x(y._payload),v)}if(Da(y)||Ia(y))return y=ss(y,p.mode,v,null),y.return=p,y;au(p,y)}return null}function f(p,y,v,x){var S=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(p,y,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yc:return v.key===S?l(p,y,v,x):null;case Hs:return v.key===S?u(p,y,v,x):null;case Qr:return S=v._init,f(p,y,S(v._payload),x)}if(Da(v)||Ia(v))return S!==null?null:d(p,y,v,x,null);au(p,v)}return null}function g(p,y,v,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(v)||null,a(y,p,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Yc:return p=p.get(x.key===null?v:x.key)||null,l(y,p,x,S);case Hs:return p=p.get(x.key===null?v:x.key)||null,u(y,p,x,S);case Qr:var k=x._init;return g(p,y,v,k(x._payload),S)}if(Da(x)||Ia(x))return p=p.get(v)||null,d(y,p,x,S,null);au(y,x)}return null}function m(p,y,v,x){for(var S=null,k=null,I=y,A=y=0,$=null;I!==null&&A<v.length;A++){I.index>A?($=I,I=null):$=I.sibling;var B=f(p,I,v[A],x);if(B===null){I===null&&(I=$);break}e&&I&&B.alternate===null&&t(p,I),y=s(B,y,A),k===null?S=B:k.sibling=B,k=B,I=$}if(A===v.length)return n(p,I),ke&&Gi(p,A),S;if(I===null){for(;A<v.length;A++)I=h(p,v[A],x),I!==null&&(y=s(I,y,A),k===null?S=I:k.sibling=I,k=I);return ke&&Gi(p,A),S}for(I=r(p,I);A<v.length;A++)$=g(I,p,A,v[A],x),$!==null&&(e&&$.alternate!==null&&I.delete($.key===null?A:$.key),y=s($,y,A),k===null?S=$:k.sibling=$,k=$);return e&&I.forEach(function(rt){return t(p,rt)}),ke&&Gi(p,A),S}function _(p,y,v,x){var S=Ia(v);if(typeof S!="function")throw Error(N(150));if(v=S.call(v),v==null)throw Error(N(151));for(var k=S=null,I=y,A=y=0,$=null,B=v.next();I!==null&&!B.done;A++,B=v.next()){I.index>A?($=I,I=null):$=I.sibling;var rt=f(p,I,B.value,x);if(rt===null){I===null&&(I=$);break}e&&I&&rt.alternate===null&&t(p,I),y=s(rt,y,A),k===null?S=rt:k.sibling=rt,k=rt,I=$}if(B.done)return n(p,I),ke&&Gi(p,A),S;if(I===null){for(;!B.done;A++,B=v.next())B=h(p,B.value,x),B!==null&&(y=s(B,y,A),k===null?S=B:k.sibling=B,k=B);return ke&&Gi(p,A),S}for(I=r(p,I);!B.done;A++,B=v.next())B=g(I,p,A,B.value,x),B!==null&&(e&&B.alternate!==null&&I.delete(B.key===null?A:B.key),y=s(B,y,A),k===null?S=B:k.sibling=B,k=B);return e&&I.forEach(function(K){return t(p,K)}),ke&&Gi(p,A),S}function w(p,y,v,x){if(typeof v=="object"&&v!==null&&v.type===Ws&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Yc:e:{for(var S=v.key,k=y;k!==null;){if(k.key===S){if(S=v.type,S===Ws){if(k.tag===7){n(p,k.sibling),y=i(k,v.props.children),y.return=p,p=y;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qr&&i_(S)===k.type){n(p,k.sibling),y=i(k,v.props),y.ref=Aa(p,k,v),y.return=p,p=y;break e}n(p,k);break}else t(p,k);k=k.sibling}v.type===Ws?(y=ss(v.props.children,p.mode,x,v.key),y.return=p,p=y):(x=Ou(v.type,v.key,v.props,null,p.mode,x),x.ref=Aa(p,y,v),x.return=p,p=x)}return o(p);case Hs:e:{for(k=v.key;y!==null;){if(y.key===k)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(p,y.sibling),y=i(y,v.children||[]),y.return=p,p=y;break e}else{n(p,y);break}else t(p,y);y=y.sibling}y=vp(v,p.mode,x),y.return=p,p=y}return o(p);case Qr:return k=v._init,w(p,y,k(v._payload),x)}if(Da(v))return m(p,y,v,x);if(Ia(v))return _(p,y,v,x);au(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(p,y.sibling),y=i(y,v),y.return=p,p=y):(n(p,y),y=yp(v,p.mode,x),y.return=p,p=y),o(p)):n(p,y)}return w}var Co=xI(!0),EI=xI(!1),gc={},tr=ji(gc),Tl=ji(gc),kl=ji(gc);function Ji(e){if(e===gc)throw Error(N(174));return e}function P0(e,t){switch(ge(kl,t),ge(Tl,e),ge(tr,gc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hg(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hg(t,e)}Ee(tr),ge(tr,t)}function Ao(){Ee(tr),Ee(Tl),Ee(kl)}function II(e){Ji(kl.current);var t=Ji(tr.current),n=hg(t,e.type);t!==n&&(ge(Tl,e),ge(tr,n))}function N0(e){Tl.current===e&&(Ee(tr),Ee(Tl))}var Ce=ji(0);function wd(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dp=[];function j0(){for(var e=0;e<dp.length;e++)dp[e]._workInProgressVersionPrimary=null;dp.length=0}var ju=Fr.ReactCurrentDispatcher,hp=Fr.ReactCurrentBatchConfig,hs=0,Ae=null,qe=null,Ye=null,xd=!1,el=!1,Cl=0,dN=0;function pt(){throw Error(N(321))}function b0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mn(e[n],t[n]))return!1;return!0}function M0(e,t,n,r,i,s){if(hs=s,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ju.current=e===null||e.memoizedState===null?gN:mN,e=n(r,i),el){s=0;do{if(el=!1,Cl=0,25<=s)throw Error(N(301));s+=1,Ye=qe=null,t.updateQueue=null,ju.current=yN,e=n(r,i)}while(el)}if(ju.current=Ed,t=qe!==null&&qe.next!==null,hs=0,Ye=qe=Ae=null,xd=!1,t)throw Error(N(300));return e}function L0(){var e=Cl!==0;return Cl=0,e}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ae.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function wn(){if(qe===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=Ye===null?Ae.memoizedState:Ye.next;if(t!==null)Ye=t,qe=e;else{if(e===null)throw Error(N(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Ye===null?Ae.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Al(e,t){return typeof t=="function"?t(e):t}function fp(e){var t=wn(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((hs&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ae.lanes|=d,fs|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Mn(r,t.memoizedState)||(Ft=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ae.lanes|=s,fs|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pp(e){var t=wn(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Mn(s,t.memoizedState)||(Ft=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function SI(){}function TI(e,t){var n=Ae,r=wn(),i=t(),s=!Mn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ft=!0),r=r.queue,D0(AI.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Rl(9,CI.bind(null,n,r,i,t),void 0,null),et===null)throw Error(N(349));hs&30||kI(n,t,i)}return i}function kI(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function CI(e,t,n,r){t.value=n,t.getSnapshot=r,RI(t)&&PI(e)}function AI(e,t,n){return n(function(){RI(t)&&PI(e)})}function RI(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mn(e,n)}catch{return!0}}function PI(e){var t=Pr(e,1);t!==null&&Pn(t,e,1,-1)}function s_(e){var t=Wn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Al,lastRenderedState:e},t.queue=e,e=e.dispatch=pN.bind(null,Ae,e),[t.memoizedState,e]}function Rl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function NI(){return wn().memoizedState}function bu(e,t,n,r){var i=Wn();Ae.flags|=e,i.memoizedState=Rl(1|t,n,void 0,r===void 0?null:r)}function xh(e,t,n,r){var i=wn();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&b0(r,o.deps)){i.memoizedState=Rl(t,n,s,r);return}}Ae.flags|=e,i.memoizedState=Rl(1|t,n,s,r)}function o_(e,t){return bu(8390656,8,e,t)}function D0(e,t){return xh(2048,8,e,t)}function jI(e,t){return xh(4,2,e,t)}function bI(e,t){return xh(4,4,e,t)}function MI(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function LI(e,t,n){return n=n!=null?n.concat([e]):null,xh(4,4,MI.bind(null,t,e),n)}function O0(){}function DI(e,t){var n=wn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&b0(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function OI(e,t){var n=wn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&b0(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $I(e,t,n){return hs&21?(Mn(n,t)||(n=UE(),Ae.lanes|=n,fs|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ft=!0),e.memoizedState=n)}function hN(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=hp.transition;hp.transition={};try{e(!1),t()}finally{de=n,hp.transition=r}}function VI(){return wn().memoizedState}function fN(e,t,n){var r=hi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},FI(e))UI(t,n);else if(n=yI(e,t,n,r),n!==null){var i=jt();Pn(n,e,r,i),zI(n,t,r)}}function pN(e,t,n){var r=hi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(FI(e))UI(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Mn(a,o)){var l=t.interleaved;l===null?(i.next=i,A0(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=yI(e,t,i,r),n!==null&&(i=jt(),Pn(n,e,r,i),zI(n,t,r))}}function FI(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function UI(e,t){el=xd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zI(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,p0(e,n)}}var Ed={readContext:_n,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},gN={readContext:_n,useCallback:function(e,t){return Wn().memoizedState=[e,t===void 0?null:t],e},useContext:_n,useEffect:o_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bu(4194308,4,MI.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bu(4194308,4,e,t)},useInsertionEffect:function(e,t){return bu(4,2,e,t)},useMemo:function(e,t){var n=Wn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fN.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Wn();return e={current:e},t.memoizedState=e},useState:s_,useDebugValue:O0,useDeferredValue:function(e){return Wn().memoizedState=e},useTransition:function(){var e=s_(!1),t=e[0];return e=hN.bind(null,e[1]),Wn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=Wn();if(ke){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),et===null)throw Error(N(349));hs&30||kI(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,o_(AI.bind(null,r,s,e),[e]),r.flags|=2048,Rl(9,CI.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Wn(),t=et.identifierPrefix;if(ke){var n=vr,r=yr;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Cl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dN++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mN={readContext:_n,useCallback:DI,useContext:_n,useEffect:D0,useImperativeHandle:LI,useInsertionEffect:jI,useLayoutEffect:bI,useMemo:OI,useReducer:fp,useRef:NI,useState:function(){return fp(Al)},useDebugValue:O0,useDeferredValue:function(e){var t=wn();return $I(t,qe.memoizedState,e)},useTransition:function(){var e=fp(Al)[0],t=wn().memoizedState;return[e,t]},useMutableSource:SI,useSyncExternalStore:TI,useId:VI,unstable_isNewReconciler:!1},yN={readContext:_n,useCallback:DI,useContext:_n,useEffect:D0,useImperativeHandle:LI,useInsertionEffect:jI,useLayoutEffect:bI,useMemo:OI,useReducer:pp,useRef:NI,useState:function(){return pp(Al)},useDebugValue:O0,useDeferredValue:function(e){var t=wn();return qe===null?t.memoizedState=e:$I(t,qe.memoizedState,e)},useTransition:function(){var e=pp(Al)[0],t=wn().memoizedState;return[e,t]},useMutableSource:SI,useSyncExternalStore:TI,useId:VI,unstable_isNewReconciler:!1};function Ro(e,t){try{var n="",r=t;do n+=WP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function gp(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Lg(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vN=typeof WeakMap=="function"?WeakMap:Map;function BI(e,t,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sd||(Sd=!0,Wg=r),Lg(e,t)},n}function HI(e,t,n){n=Tr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Lg(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lg(e,t),typeof r!="function"&&(di===null?di=new Set([this]):di.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function a_(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vN;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jN.bind(null,e,t,n),t.then(e,e))}function l_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function c_(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tr(-1,1),t.tag=2,ui(n,t,1))),n.lanes|=1),e)}var _N=Fr.ReactCurrentOwner,Ft=!1;function Ct(e,t,n,r){t.child=e===null?EI(t,null,n,r):Co(t,e.child,n,r)}function u_(e,t,n,r,i){n=n.render;var s=t.ref;return po(t,i),r=M0(e,t,n,r,s,i),n=L0(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nr(e,t,i)):(ke&&n&&E0(t),t.flags|=1,Ct(e,t,r,i),t.child)}function d_(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!W0(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,WI(e,t,s,r,i)):(e=Ou(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xl,n(o,r)&&e.ref===t.ref)return Nr(e,t,i)}return t.flags|=1,e=fi(s,r),e.ref=t.ref,e.return=t,t.child=e}function WI(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(xl(s,r)&&e.ref===t.ref)if(Ft=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ft=!0);else return t.lanes=e.lanes,Nr(e,t,i)}return Dg(e,t,n,r,i)}function qI(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(to,Qt),Qt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(to,Qt),Qt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(to,Qt),Qt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ge(to,Qt),Qt|=r;return Ct(e,t,i,n),t.child}function GI(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dg(e,t,n,r,i){var s=zt(n)?us:St.current;return s=To(t,s),po(t,i),n=M0(e,t,n,r,s,i),r=L0(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nr(e,t,i)):(ke&&r&&E0(t),t.flags|=1,Ct(e,t,n,i),t.child)}function h_(e,t,n,r,i){if(zt(n)){var s=!0;pd(t)}else s=!1;if(po(t,i),t.stateNode===null)Mu(e,t),wI(t,n,r),Mg(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_n(u):(u=zt(n)?us:St.current,u=To(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&r_(t,o,r,u),Kr=!1;var f=t.memoizedState;o.state=f,_d(t,r,o,i),l=t.memoizedState,a!==r||f!==l||Ut.current||Kr?(typeof d=="function"&&(bg(t,n,d,r),l=t.memoizedState),(a=Kr||n_(t,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,vI(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Tn(t.type,a),o.props=u,h=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_n(l):(l=zt(n)?us:St.current,l=To(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&r_(t,o,r,l),Kr=!1,f=t.memoizedState,o.state=f,_d(t,r,o,i);var m=t.memoizedState;a!==h||f!==m||Ut.current||Kr?(typeof g=="function"&&(bg(t,n,g,r),m=t.memoizedState),(u=Kr||n_(t,n,u,r,f,m,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Og(e,t,n,r,s,i)}function Og(e,t,n,r,i,s){GI(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&X1(t,n,!1),Nr(e,t,s);r=t.stateNode,_N.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Co(t,e.child,null,s),t.child=Co(t,null,a,s)):Ct(e,t,a,s),t.memoizedState=r.state,i&&X1(t,n,!0),t.child}function QI(e){var t=e.stateNode;t.pendingContext?Y1(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Y1(e,t.context,!1),P0(e,t.containerInfo)}function f_(e,t,n,r,i){return ko(),S0(i),t.flags|=256,Ct(e,t,n,r),t.child}var $g={dehydrated:null,treeContext:null,retryLane:0};function Vg(e){return{baseLanes:e,cachePool:null,transitions:null}}function KI(e,t,n){var r=t.pendingProps,i=Ce.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ce,i&1),e===null)return Ng(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sh(o,r,0,null),e=ss(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Vg(n),t.memoizedState=$g,e):$0(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wN(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=fi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fi(a,s):(s=ss(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Vg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=$g,r}return s=e.child,e=s.sibling,r=fi(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $0(e,t){return t=Sh({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function lu(e,t,n,r){return r!==null&&S0(r),Co(t,e.child,null,n),e=$0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wN(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=gp(Error(N(422))),lu(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Sh({mode:"visible",children:r.children},i,0,null),s=ss(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Co(t,e.child,null,o),t.child.memoizedState=Vg(o),t.memoizedState=$g,s);if(!(t.mode&1))return lu(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=gp(s,r,void 0),lu(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ft||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pr(e,i),Pn(r,e,i,-1))}return H0(),r=gp(Error(N(421))),lu(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bN.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Kt=ci(i.nextSibling),Zt=t,ke=!0,Cn=null,e!==null&&(cn[un++]=yr,cn[un++]=vr,cn[un++]=ds,yr=e.id,vr=e.overflow,ds=t),t=$0(t,r.children),t.flags|=4096,t)}function p_(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jg(e.return,t,n)}function mp(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function YI(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ct(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&p_(e,n,t);else if(e.tag===19)p_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wd(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),mp(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wd(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}mp(t,!0,n,null,s);break;case"together":mp(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fs|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=fi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xN(e,t,n){switch(t.tag){case 3:QI(t),ko();break;case 5:II(t);break;case 1:zt(t.type)&&pd(t);break;case 4:P0(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(yd,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?KI(e,t,n):(ge(Ce,Ce.current&1),e=Nr(e,t,n),e!==null?e.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return YI(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,qI(e,t,n)}return Nr(e,t,n)}var XI,Fg,JI,ZI;XI=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fg=function(){};JI=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ji(tr.current);var s=null;switch(n){case"input":i=lg(e,i),r=lg(e,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=dg(e,i),r=dg(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hd)}fg(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(pl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(pl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ye("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};ZI=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ra(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function gt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function EN(e,t,n){var r=t.pendingProps;switch(I0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(t),null;case 1:return zt(t.type)&&fd(),gt(t),null;case 3:return r=t.stateNode,Ao(),Ee(Ut),Ee(St),j0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ou(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Cn!==null&&(Qg(Cn),Cn=null))),Fg(e,t),gt(t),null;case 5:N0(t);var i=Ji(kl.current);if(n=t.type,e!==null&&t.stateNode!=null)JI(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return gt(t),null}if(e=Ji(tr.current),ou(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Qn]=t,r[Sl]=s,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<$a.length;i++)ye($a[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":I1(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":T1(r,s),ye("invalid",r)}fg(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&su(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&su(r.textContent,a,e),i=["children",""+a]):pl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":Xc(r),S1(r,s,!0);break;case"textarea":Xc(r),k1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hd)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kE(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Qn]=t,e[Sl]=r,XI(e,t,!1,!1),t.stateNode=e;e:{switch(o=pg(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<$a.length;i++)ye($a[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":I1(e,r),i=lg(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ye("invalid",e);break;case"textarea":T1(e,r),i=dg(e,r),ye("invalid",e);break;default:i=r}fg(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?RE(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&CE(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&gl(e,l):typeof l=="number"&&gl(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ye("scroll",e):l!=null&&l0(e,s,l,o))}switch(n){case"input":Xc(e),S1(e,r,!1);break;case"textarea":Xc(e),k1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ei(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?co(e,!!r.multiple,s,!1):r.defaultValue!=null&&co(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return gt(t),null;case 6:if(e&&t.stateNode!=null)ZI(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Ji(kl.current),Ji(tr.current),ou(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qn]=t,(s=r.nodeValue!==n)&&(e=Zt,e!==null))switch(e.tag){case 3:su(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&su(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qn]=t,t.stateNode=r}return gt(t),null;case 13:if(Ee(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&Kt!==null&&t.mode&1&&!(t.flags&128))mI(),ko(),t.flags|=98560,s=!1;else if(s=ou(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Qn]=t}else ko(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;gt(t),s=!1}else Cn!==null&&(Qg(Cn),Cn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Ge===0&&(Ge=3):H0())),t.updateQueue!==null&&(t.flags|=4),gt(t),null);case 4:return Ao(),Fg(e,t),e===null&&El(t.stateNode.containerInfo),gt(t),null;case 10:return C0(t.type._context),gt(t),null;case 17:return zt(t.type)&&fd(),gt(t),null;case 19:if(Ee(Ce),s=t.memoizedState,s===null)return gt(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Ra(s,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=wd(e),o!==null){for(t.flags|=128,Ra(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),t.child}e=e.sibling}s.tail!==null&&De()>Po&&(t.flags|=128,r=!0,Ra(s,!1),t.lanes=4194304)}else{if(!r)if(e=wd(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ra(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return gt(t),null}else 2*De()-s.renderingStartTime>Po&&n!==1073741824&&(t.flags|=128,r=!0,Ra(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=De(),t.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),t):(gt(t),null);case 22:case 23:return B0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qt&1073741824&&(gt(t),t.subtreeFlags&6&&(t.flags|=8192)):gt(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function IN(e,t){switch(I0(t),t.tag){case 1:return zt(t.type)&&fd(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ao(),Ee(Ut),Ee(St),j0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return N0(t),null;case 13:if(Ee(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));ko()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Ce),null;case 4:return Ao(),null;case 10:return C0(t.type._context),null;case 22:case 23:return B0(),null;case 24:return null;default:return null}}var cu=!1,vt=!1,SN=typeof WeakSet=="function"?WeakSet:Set,D=null;function eo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(e,t,r)}else n.current=null}function Ug(e,t,n){try{n()}catch(r){be(e,t,r)}}var g_=!1;function TN(e,t){if(Sg=cd,e=rI(),x0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tg={focusedElem:e,selectionRange:n},cd=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,w=m.memoizedState,p=t.stateNode,y=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:Tn(t.type,_),w);p.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(x){be(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return m=g_,g_=!1,m}function tl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ug(t,n,s)}i=i.next}while(i!==r)}}function Eh(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zg(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eS(e){var t=e.alternate;t!==null&&(e.alternate=null,eS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qn],delete t[Sl],delete t[Ag],delete t[aN],delete t[lN])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tS(e){return e.tag===5||e.tag===3||e.tag===4}function m_(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hd));else if(r!==4&&(e=e.child,e!==null))for(Bg(e,t,n),e=e.sibling;e!==null;)Bg(e,t,n),e=e.sibling}function Hg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hg(e,t,n),e=e.sibling;e!==null;)Hg(e,t,n),e=e.sibling}var st=null,kn=!1;function Wr(e,t,n){for(n=n.child;n!==null;)nS(e,t,n),n=n.sibling}function nS(e,t,n){if(er&&typeof er.onCommitFiberUnmount=="function")try{er.onCommitFiberUnmount(ph,n)}catch{}switch(n.tag){case 5:vt||eo(n,t);case 6:var r=st,i=kn;st=null,Wr(e,t,n),st=r,kn=i,st!==null&&(kn?(e=st,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(kn?(e=st,n=n.stateNode,e.nodeType===8?cp(e.parentNode,n):e.nodeType===1&&cp(e,n),_l(e)):cp(st,n.stateNode));break;case 4:r=st,i=kn,st=n.stateNode.containerInfo,kn=!0,Wr(e,t,n),st=r,kn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ug(n,t,o),i=i.next}while(i!==r)}Wr(e,t,n);break;case 1:if(!vt&&(eo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,t,a)}Wr(e,t,n);break;case 21:Wr(e,t,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,Wr(e,t,n),vt=r):Wr(e,t,n);break;default:Wr(e,t,n)}}function y_(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new SN),t.forEach(function(r){var i=MN.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Sn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,kn=!1;break e;case 3:st=a.stateNode.containerInfo,kn=!0;break e;case 4:st=a.stateNode.containerInfo,kn=!0;break e}a=a.return}if(st===null)throw Error(N(160));nS(s,o,i),st=null,kn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){be(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rS(t,e),t=t.sibling}function rS(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(t,e),Hn(e),r&4){try{tl(3,e,e.return),Eh(3,e)}catch(_){be(e,e.return,_)}try{tl(5,e,e.return)}catch(_){be(e,e.return,_)}}break;case 1:Sn(t,e),Hn(e),r&512&&n!==null&&eo(n,n.return);break;case 5:if(Sn(t,e),Hn(e),r&512&&n!==null&&eo(n,n.return),e.flags&32){var i=e.stateNode;try{gl(i,"")}catch(_){be(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&SE(i,s),pg(a,o);var u=pg(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?RE(i,h):d==="dangerouslySetInnerHTML"?CE(i,h):d==="children"?gl(i,h):l0(i,d,h,u)}switch(a){case"input":cg(i,s);break;case"textarea":TE(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?co(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?co(i,!!s.multiple,s.defaultValue,!0):co(i,!!s.multiple,s.multiple?[]:"",!1))}i[Sl]=s}catch(_){be(e,e.return,_)}}break;case 6:if(Sn(t,e),Hn(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){be(e,e.return,_)}}break;case 3:if(Sn(t,e),Hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_l(t.containerInfo)}catch(_){be(e,e.return,_)}break;case 4:Sn(t,e),Hn(e);break;case 13:Sn(t,e),Hn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(U0=De())),r&4&&y_(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(vt=(u=vt)||d,Sn(t,e),vt=u):Sn(t,e),Hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(h=D=d;D!==null;){switch(f=D,g=f.child,f.tag){case 0:case 11:case 14:case 15:tl(4,f,f.return);break;case 1:eo(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(_){be(r,n,_)}}break;case 5:eo(f,f.return);break;case 22:if(f.memoizedState!==null){__(h);continue}}g!==null?(g.return=f,D=g):__(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=AE("display",o))}catch(_){be(e,e.return,_)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){be(e,e.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Sn(t,e),Hn(e),r&4&&y_(e);break;case 21:break;default:Sn(t,e),Hn(e)}}function Hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tS(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gl(i,""),r.flags&=-33);var s=m_(e);Hg(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=m_(e);Bg(e,a,o);break;default:throw Error(N(161))}}catch(l){be(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kN(e,t,n){D=e,iS(e)}function iS(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||vt;a=cu;var u=vt;if(cu=o,(vt=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?w_(i):l!==null?(l.return=o,D=l):w_(i);for(;s!==null;)D=s,iS(s),s=s.sibling;D=i,cu=a,vt=u}v_(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):v_(e)}}function v_(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:vt||Eh(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&t_(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}t_(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&_l(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}vt||t.flags&512&&zg(t)}catch(f){be(t,t.return,f)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function __(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function w_(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Eh(4,t)}catch(l){be(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){be(t,i,l)}}var s=t.return;try{zg(t)}catch(l){be(t,s,l)}break;case 5:var o=t.return;try{zg(t)}catch(l){be(t,o,l)}}}catch(l){be(t,t.return,l)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var CN=Math.ceil,Id=Fr.ReactCurrentDispatcher,V0=Fr.ReactCurrentOwner,gn=Fr.ReactCurrentBatchConfig,le=0,et=null,ze=null,ut=0,Qt=0,to=ji(0),Ge=0,Pl=null,fs=0,Ih=0,F0=0,nl=null,$t=null,U0=0,Po=1/0,pr=null,Sd=!1,Wg=null,di=null,uu=!1,ri=null,Td=0,rl=0,qg=null,Lu=-1,Du=0;function jt(){return le&6?De():Lu!==-1?Lu:Lu=De()}function hi(e){return e.mode&1?le&2&&ut!==0?ut&-ut:uN.transition!==null?(Du===0&&(Du=UE()),Du):(e=de,e!==0||(e=window.event,e=e===void 0?16:QE(e.type)),e):1}function Pn(e,t,n,r){if(50<rl)throw rl=0,qg=null,Error(N(185));hc(e,n,r),(!(le&2)||e!==et)&&(e===et&&(!(le&2)&&(Ih|=n),Ge===4&&Xr(e,ut)),Bt(e,r),n===1&&le===0&&!(t.mode&1)&&(Po=De()+500,_h&&bi()))}function Bt(e,t){var n=e.callbackNode;u2(e,t);var r=ld(e,e===et?ut:0);if(r===0)n!==null&&R1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&R1(n),t===1)e.tag===0?cN(x_.bind(null,e)):fI(x_.bind(null,e)),sN(function(){!(le&6)&&bi()}),n=null;else{switch(zE(r)){case 1:n=f0;break;case 4:n=VE;break;case 16:n=ad;break;case 536870912:n=FE;break;default:n=ad}n=hS(n,sS.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sS(e,t){if(Lu=-1,Du=0,le&6)throw Error(N(327));var n=e.callbackNode;if(go()&&e.callbackNode!==n)return null;var r=ld(e,e===et?ut:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=kd(e,r);else{t=r;var i=le;le|=2;var s=aS();(et!==e||ut!==t)&&(pr=null,Po=De()+500,is(e,t));do try{PN();break}catch(a){oS(e,a)}while(!0);k0(),Id.current=s,le=i,ze!==null?t=0:(et=null,ut=0,t=Ge)}if(t!==0){if(t===2&&(i=_g(e),i!==0&&(r=i,t=Gg(e,i))),t===1)throw n=Pl,is(e,0),Xr(e,r),Bt(e,De()),n;if(t===6)Xr(e,r);else{if(i=e.current.alternate,!(r&30)&&!AN(i)&&(t=kd(e,r),t===2&&(s=_g(e),s!==0&&(r=s,t=Gg(e,s))),t===1))throw n=Pl,is(e,0),Xr(e,r),Bt(e,De()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Qi(e,$t,pr);break;case 3:if(Xr(e,r),(r&130023424)===r&&(t=U0+500-De(),10<t)){if(ld(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){jt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cg(Qi.bind(null,e,$t,pr),t);break}Qi(e,$t,pr);break;case 4:if(Xr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Rn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*CN(r/1960))-r,10<r){e.timeoutHandle=Cg(Qi.bind(null,e,$t,pr),r);break}Qi(e,$t,pr);break;case 5:Qi(e,$t,pr);break;default:throw Error(N(329))}}}return Bt(e,De()),e.callbackNode===n?sS.bind(null,e):null}function Gg(e,t){var n=nl;return e.current.memoizedState.isDehydrated&&(is(e,t).flags|=256),e=kd(e,t),e!==2&&(t=$t,$t=n,t!==null&&Qg(t)),e}function Qg(e){$t===null?$t=e:$t.push.apply($t,e)}function AN(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Mn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xr(e,t){for(t&=~F0,t&=~Ih,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rn(t),r=1<<n;e[n]=-1,t&=~r}}function x_(e){if(le&6)throw Error(N(327));go();var t=ld(e,0);if(!(t&1))return Bt(e,De()),null;var n=kd(e,t);if(e.tag!==0&&n===2){var r=_g(e);r!==0&&(t=r,n=Gg(e,r))}if(n===1)throw n=Pl,is(e,0),Xr(e,t),Bt(e,De()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qi(e,$t,pr),Bt(e,De()),null}function z0(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(Po=De()+500,_h&&bi())}}function ps(e){ri!==null&&ri.tag===0&&!(le&6)&&go();var t=le;le|=1;var n=gn.transition,r=de;try{if(gn.transition=null,de=1,e)return e()}finally{de=r,gn.transition=n,le=t,!(le&6)&&bi()}}function B0(){Qt=to.current,Ee(to)}function is(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,iN(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(I0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fd();break;case 3:Ao(),Ee(Ut),Ee(St),j0();break;case 5:N0(r);break;case 4:Ao();break;case 13:Ee(Ce);break;case 19:Ee(Ce);break;case 10:C0(r.type._context);break;case 22:case 23:B0()}n=n.return}if(et=e,ze=e=fi(e.current,null),ut=Qt=t,Ge=0,Pl=null,F0=Ih=fs=0,$t=nl=null,Xi!==null){for(t=0;t<Xi.length;t++)if(n=Xi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xi=null}return e}function oS(e,t){do{var n=ze;try{if(k0(),ju.current=Ed,xd){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xd=!1}if(hs=0,Ye=qe=Ae=null,el=!1,Cl=0,V0.current=null,n===null||n.return===null){Ge=1,Pl=t,ze=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=l_(o);if(g!==null){g.flags&=-257,c_(g,o,a,s,t),g.mode&1&&a_(s,u,t),t=g,l=u;var m=t.updateQueue;if(m===null){var _=new Set;_.add(l),t.updateQueue=_}else m.add(l);break e}else{if(!(t&1)){a_(s,u,t),H0();break e}l=Error(N(426))}}else if(ke&&a.mode&1){var w=l_(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),c_(w,o,a,s,t),S0(Ro(l,a));break e}}s=l=Ro(l,a),Ge!==4&&(Ge=2),nl===null?nl=[s]:nl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=BI(s,l,t);e_(s,p);break e;case 1:a=l;var y=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(di===null||!di.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=HI(s,a,t);e_(s,x);break e}}s=s.return}while(s!==null)}cS(n)}catch(S){t=S,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function aS(){var e=Id.current;return Id.current=Ed,e===null?Ed:e}function H0(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),et===null||!(fs&268435455)&&!(Ih&268435455)||Xr(et,ut)}function kd(e,t){var n=le;le|=2;var r=aS();(et!==e||ut!==t)&&(pr=null,is(e,t));do try{RN();break}catch(i){oS(e,i)}while(!0);if(k0(),le=n,Id.current=r,ze!==null)throw Error(N(261));return et=null,ut=0,Ge}function RN(){for(;ze!==null;)lS(ze)}function PN(){for(;ze!==null&&!t2();)lS(ze)}function lS(e){var t=dS(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?cS(e):ze=t,V0.current=null}function cS(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=IN(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,ze=null;return}}else if(n=EN(n,t,Qt),n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Ge===0&&(Ge=5)}function Qi(e,t,n){var r=de,i=gn.transition;try{gn.transition=null,de=1,NN(e,t,n,r)}finally{gn.transition=i,de=r}return null}function NN(e,t,n,r){do go();while(ri!==null);if(le&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(d2(e,s),e===et&&(ze=et=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uu||(uu=!0,hS(ad,function(){return go(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gn.transition,gn.transition=null;var o=de;de=1;var a=le;le|=4,V0.current=null,TN(e,n),rS(n,e),X2(Tg),cd=!!Sg,Tg=Sg=null,e.current=n,kN(n),n2(),le=a,de=o,gn.transition=s}else e.current=n;if(uu&&(uu=!1,ri=e,Td=i),s=e.pendingLanes,s===0&&(di=null),s2(n.stateNode),Bt(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sd)throw Sd=!1,e=Wg,Wg=null,e;return Td&1&&e.tag!==0&&go(),s=e.pendingLanes,s&1?e===qg?rl++:(rl=0,qg=e):rl=0,bi(),null}function go(){if(ri!==null){var e=zE(Td),t=gn.transition,n=de;try{if(gn.transition=null,de=16>e?16:e,ri===null)var r=!1;else{if(e=ri,ri=null,Td=0,le&6)throw Error(N(331));var i=le;for(le|=4,D=e.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:tl(8,d,s)}var h=d.child;if(h!==null)h.return=d,D=h;else for(;D!==null;){d=D;var f=d.sibling,g=d.return;if(eS(d),d===u){D=null;break}if(f!==null){f.return=g,D=f;break}D=g}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:tl(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,D=p;break e}D=s.return}}var y=e.current;for(D=y;D!==null;){o=D;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,D=v;else e:for(o=y;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eh(9,a)}}catch(S){be(a,a.return,S)}if(a===o){D=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,D=x;break e}D=a.return}}if(le=i,bi(),er&&typeof er.onPostCommitFiberRoot=="function")try{er.onPostCommitFiberRoot(ph,e)}catch{}r=!0}return r}finally{de=n,gn.transition=t}}return!1}function E_(e,t,n){t=Ro(n,t),t=BI(e,t,1),e=ui(e,t,1),t=jt(),e!==null&&(hc(e,1,t),Bt(e,t))}function be(e,t,n){if(e.tag===3)E_(e,e,n);else for(;t!==null;){if(t.tag===3){E_(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(di===null||!di.has(r))){e=Ro(n,e),e=HI(t,e,1),t=ui(t,e,1),e=jt(),t!==null&&(hc(t,1,e),Bt(t,e));break}}t=t.return}}function jN(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=jt(),e.pingedLanes|=e.suspendedLanes&n,et===e&&(ut&n)===n&&(Ge===4||Ge===3&&(ut&130023424)===ut&&500>De()-U0?is(e,0):F0|=n),Bt(e,t)}function uS(e,t){t===0&&(e.mode&1?(t=eu,eu<<=1,!(eu&130023424)&&(eu=4194304)):t=1);var n=jt();e=Pr(e,t),e!==null&&(hc(e,t,n),Bt(e,n))}function bN(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uS(e,n)}function MN(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),uS(e,n)}var dS;dS=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ut.current)Ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ft=!1,xN(e,t,n);Ft=!!(e.flags&131072)}else Ft=!1,ke&&t.flags&1048576&&pI(t,md,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mu(e,t),e=t.pendingProps;var i=To(t,St.current);po(t,n),i=M0(null,t,r,e,i,n);var s=L0();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zt(r)?(s=!0,pd(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,R0(t),i.updater=wh,t.stateNode=i,i._reactInternals=t,Mg(t,r,e,n),t=Og(null,t,r,!0,s,n)):(t.tag=0,ke&&s&&E0(t),Ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=DN(r),e=Tn(r,e),i){case 0:t=Dg(null,t,r,e,n);break e;case 1:t=h_(null,t,r,e,n);break e;case 11:t=u_(null,t,r,e,n);break e;case 14:t=d_(null,t,r,Tn(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tn(r,i),Dg(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tn(r,i),h_(e,t,r,i,n);case 3:e:{if(QI(t),e===null)throw Error(N(387));r=t.pendingProps,s=t.memoizedState,i=s.element,vI(e,t),_d(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ro(Error(N(423)),t),t=f_(e,t,r,n,i);break e}else if(r!==i){i=Ro(Error(N(424)),t),t=f_(e,t,r,n,i);break e}else for(Kt=ci(t.stateNode.containerInfo.firstChild),Zt=t,ke=!0,Cn=null,n=EI(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ko(),r===i){t=Nr(e,t,n);break e}Ct(e,t,r,n)}t=t.child}return t;case 5:return II(t),e===null&&Ng(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,kg(r,i)?o=null:s!==null&&kg(r,s)&&(t.flags|=32),GI(e,t),Ct(e,t,o,n),t.child;case 6:return e===null&&Ng(t),null;case 13:return KI(e,t,n);case 4:return P0(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Co(t,null,r,n):Ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tn(r,i),u_(e,t,r,i,n);case 7:return Ct(e,t,t.pendingProps,n),t.child;case 8:return Ct(e,t,t.pendingProps.children,n),t.child;case 12:return Ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,ge(yd,r._currentValue),r._currentValue=o,s!==null)if(Mn(s.value,o)){if(s.children===i.children&&!Ut.current){t=Nr(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Tr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jg(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jg(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,po(t,n),i=_n(i),r=r(i),t.flags|=1,Ct(e,t,r,n),t.child;case 14:return r=t.type,i=Tn(r,t.pendingProps),i=Tn(r.type,i),d_(e,t,r,i,n);case 15:return WI(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tn(r,i),Mu(e,t),t.tag=1,zt(r)?(e=!0,pd(t)):e=!1,po(t,n),wI(t,r,i),Mg(t,r,i,n),Og(null,t,r,!0,e,n);case 19:return YI(e,t,n);case 22:return qI(e,t,n)}throw Error(N(156,t.tag))};function hS(e,t){return $E(e,t)}function LN(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(e,t,n,r){return new LN(e,t,n,r)}function W0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function DN(e){if(typeof e=="function")return W0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===u0)return 11;if(e===d0)return 14}return 2}function fi(e,t){var n=e.alternate;return n===null?(n=fn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ou(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")W0(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ws:return ss(n.children,i,s,t);case c0:o=8,i|=8;break;case ig:return e=fn(12,n,t,i|2),e.elementType=ig,e.lanes=s,e;case sg:return e=fn(13,n,t,i),e.elementType=sg,e.lanes=s,e;case og:return e=fn(19,n,t,i),e.elementType=og,e.lanes=s,e;case xE:return Sh(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _E:o=10;break e;case wE:o=9;break e;case u0:o=11;break e;case d0:o=14;break e;case Qr:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=fn(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function ss(e,t,n,r){return e=fn(7,e,r,t),e.lanes=n,e}function Sh(e,t,n,r){return e=fn(22,e,r,t),e.elementType=xE,e.lanes=n,e.stateNode={isHidden:!1},e}function yp(e,t,n){return e=fn(6,e,null,t),e.lanes=n,e}function vp(e,t,n){return t=fn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ON(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jf(0),this.expirationTimes=Jf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function q0(e,t,n,r,i,s,o,a,l){return e=new ON(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=fn(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},R0(s),e}function $N(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hs,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fS(e){if(!e)return Ii;e=e._reactInternals;e:{if(Rs(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(zt(n))return hI(e,n,t)}return t}function pS(e,t,n,r,i,s,o,a,l){return e=q0(n,r,!0,e,i,s,o,a,l),e.context=fS(null),n=e.current,r=jt(),i=hi(n),s=Tr(r,i),s.callback=t??null,ui(n,s,i),e.current.lanes=i,hc(e,i,r),Bt(e,r),e}function Th(e,t,n,r){var i=t.current,s=jt(),o=hi(i);return n=fS(n),t.context===null?t.context=n:t.pendingContext=n,t=Tr(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ui(i,t,o),e!==null&&(Pn(e,i,o,s),Nu(e,i,o)),o}function Cd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function I_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function G0(e,t){I_(e,t),(e=e.alternate)&&I_(e,t)}function VN(){return null}var gS=typeof reportError=="function"?reportError:function(e){console.error(e)};function Q0(e){this._internalRoot=e}kh.prototype.render=Q0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Th(e,t,null,null)};kh.prototype.unmount=Q0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ps(function(){Th(null,e,null,null)}),t[Rr]=null}};function kh(e){this._internalRoot=e}kh.prototype.unstable_scheduleHydration=function(e){if(e){var t=WE();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yr.length&&t!==0&&t<Yr[n].priority;n++);Yr.splice(n,0,e),n===0&&GE(e)}};function K0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ch(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function S_(){}function FN(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Cd(o);s.call(u)}}var o=pS(t,r,e,0,null,!1,!1,"",S_);return e._reactRootContainer=o,e[Rr]=o.current,El(e.nodeType===8?e.parentNode:e),ps(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Cd(l);a.call(u)}}var l=q0(e,0,!1,null,null,!1,!1,"",S_);return e._reactRootContainer=l,e[Rr]=l.current,El(e.nodeType===8?e.parentNode:e),ps(function(){Th(t,l,n,r)}),l}function Ah(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Cd(o);a.call(l)}}Th(t,o,e,i)}else o=FN(n,t,e,i,r);return Cd(o)}BE=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Oa(t.pendingLanes);n!==0&&(p0(t,n|1),Bt(t,De()),!(le&6)&&(Po=De()+500,bi()))}break;case 13:ps(function(){var r=Pr(e,1);if(r!==null){var i=jt();Pn(r,e,1,i)}}),G0(e,1)}};g0=function(e){if(e.tag===13){var t=Pr(e,134217728);if(t!==null){var n=jt();Pn(t,e,134217728,n)}G0(e,134217728)}};HE=function(e){if(e.tag===13){var t=hi(e),n=Pr(e,t);if(n!==null){var r=jt();Pn(n,e,t,r)}G0(e,t)}};WE=function(){return de};qE=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};mg=function(e,t,n){switch(t){case"input":if(cg(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vh(r);if(!i)throw Error(N(90));IE(r),cg(r,i)}}}break;case"textarea":TE(e,n);break;case"select":t=n.value,t!=null&&co(e,!!n.multiple,t,!1)}};jE=z0;bE=ps;var UN={usingClientEntryPoint:!1,Events:[pc,Ks,vh,PE,NE,z0]},Pa={findFiberByHostInstance:Yi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zN={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=DE(e),e===null?null:e.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||VN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{ph=du.inject(zN),er=du}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UN;on.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!K0(t))throw Error(N(200));return $N(e,t,null,n)};on.createRoot=function(e,t){if(!K0(e))throw Error(N(299));var n=!1,r="",i=gS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=q0(e,1,!1,null,null,n,!1,r,i),e[Rr]=t.current,El(e.nodeType===8?e.parentNode:e),new Q0(t)};on.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=DE(t),e=e===null?null:e.stateNode,e};on.flushSync=function(e){return ps(e)};on.hydrate=function(e,t,n){if(!Ch(t))throw Error(N(200));return Ah(null,e,t,!0,n)};on.hydrateRoot=function(e,t,n){if(!K0(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=pS(t,null,e,1,n??null,i,!1,s,o),e[Rr]=t.current,El(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new kh(t)};on.render=function(e,t,n){if(!Ch(t))throw Error(N(200));return Ah(null,e,t,!1,n)};on.unmountComponentAtNode=function(e){if(!Ch(e))throw Error(N(40));return e._reactRootContainer?(ps(function(){Ah(null,null,e,!1,function(){e._reactRootContainer=null,e[Rr]=null})}),!0):!1};on.unstable_batchedUpdates=z0;on.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ch(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Ah(e,t,n,!1,r)};on.version="18.2.0-next-9e3b772b8-20220608";function mS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mS)}catch(e){console.error(e)}}mS(),pE.exports=on;var BN=pE.exports,T_=BN;ng.createRoot=T_.createRoot,ng.hydrateRoot=T_.hydrateRoot;var Je=function(){return Je=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Je.apply(this,arguments)};function Y0(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Nl(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var ve="-ms-",il="-moz-",ue="-webkit-",yS="comm",Rh="rule",X0="decl",HN="@import",vS="@keyframes",WN="@layer",qN=Math.abs,J0=String.fromCharCode,Kg=Object.assign;function GN(e,t){return Xe(e,0)^45?(((t<<2^Xe(e,0))<<2^Xe(e,1))<<2^Xe(e,2))<<2^Xe(e,3):0}function _S(e){return e.trim()}function gr(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function $u(e,t){return e.indexOf(t)}function Xe(e,t){return e.charCodeAt(t)|0}function No(e,t,n){return e.slice(t,n)}function Gn(e){return e.length}function wS(e){return e.length}function Va(e,t){return t.push(e),e}function QN(e,t){return e.map(t).join("")}function k_(e,t){return e.filter(function(n){return!gr(n,t)})}var Ph=1,jo=1,xS=0,xn=0,Ue=0,ia="";function Nh(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ph,column:jo,length:o,return:"",siblings:a}}function Gr(e,t){return Kg(Nh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Os(e){for(;e.root;)e=Gr(e.root,{children:[e]});Va(e,e.siblings)}function KN(){return Ue}function YN(){return Ue=xn>0?Xe(ia,--xn):0,jo--,Ue===10&&(jo=1,Ph--),Ue}function Nn(){return Ue=xn<xS?Xe(ia,xn++):0,jo++,Ue===10&&(jo=1,Ph++),Ue}function os(){return Xe(ia,xn)}function Vu(){return xn}function jh(e,t){return No(ia,e,t)}function Yg(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function XN(e){return Ph=jo=1,xS=Gn(ia=e),xn=0,[]}function JN(e){return ia="",e}function _p(e){return _S(jh(xn-1,Xg(e===91?e+2:e===40?e+1:e)))}function ZN(e){for(;(Ue=os())&&Ue<33;)Nn();return Yg(e)>2||Yg(Ue)>3?"":" "}function ej(e,t){for(;--t&&Nn()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return jh(e,Vu()+(t<6&&os()==32&&Nn()==32))}function Xg(e){for(;Nn();)switch(Ue){case e:return xn;case 34:case 39:e!==34&&e!==39&&Xg(Ue);break;case 40:e===41&&Xg(e);break;case 92:Nn();break}return xn}function tj(e,t){for(;Nn()&&e+Ue!==57;)if(e+Ue===84&&os()===47)break;return"/*"+jh(t,xn-1)+"*"+J0(e===47?e:Nn())}function nj(e){for(;!Yg(os());)Nn();return jh(e,xn)}function rj(e){return JN(Fu("",null,null,null,[""],e=XN(e),0,[0],e))}function Fu(e,t,n,r,i,s,o,a,l){for(var u=0,d=0,h=o,f=0,g=0,m=0,_=1,w=1,p=1,y=0,v="",x=i,S=s,k=r,I=v;w;)switch(m=y,y=Nn()){case 40:if(m!=108&&Xe(I,h-1)==58){$u(I+=ee(_p(y),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:I+=_p(y);break;case 9:case 10:case 13:case 32:I+=ZN(m);break;case 92:I+=ej(Vu()-1,7);continue;case 47:switch(os()){case 42:case 47:Va(ij(tj(Nn(),Vu()),t,n,l),l);break;default:I+="/"}break;case 123*_:a[u++]=Gn(I)*p;case 125*_:case 59:case 0:switch(y){case 0:case 125:w=0;case 59+d:p==-1&&(I=ee(I,/\f/g,"")),g>0&&Gn(I)-h&&Va(g>32?A_(I+";",r,n,h-1,l):A_(ee(I," ","")+";",r,n,h-2,l),l);break;case 59:I+=";";default:if(Va(k=C_(I,t,n,u,d,i,a,v,x=[],S=[],h,s),s),y===123)if(d===0)Fu(I,t,k,k,x,s,h,a,S);else switch(f===99&&Xe(I,3)===110?100:f){case 100:case 108:case 109:case 115:Fu(e,k,k,r&&Va(C_(e,k,k,0,0,i,a,v,i,x=[],h,S),S),i,S,h,a,r?x:S);break;default:Fu(I,k,k,k,[""],S,0,a,S)}}u=d=g=0,_=p=1,v=I="",h=o;break;case 58:h=1+Gn(I),g=m;default:if(_<1){if(y==123)--_;else if(y==125&&_++==0&&YN()==125)continue}switch(I+=J0(y),y*_){case 38:p=d>0?1:(I+="\f",-1);break;case 44:a[u++]=(Gn(I)-1)*p,p=1;break;case 64:os()===45&&(I+=_p(Nn())),f=os(),d=h=Gn(v=I+=nj(Vu())),y++;break;case 45:m===45&&Gn(I)==2&&(_=0)}}return s}function C_(e,t,n,r,i,s,o,a,l,u,d,h){for(var f=i-1,g=i===0?s:[""],m=wS(g),_=0,w=0,p=0;_<r;++_)for(var y=0,v=No(e,f+1,f=qN(w=o[_])),x=e;y<m;++y)(x=_S(w>0?g[y]+" "+v:ee(v,/&\f/g,g[y])))&&(l[p++]=x);return Nh(e,t,n,i===0?Rh:a,l,u,d,h)}function ij(e,t,n,r){return Nh(e,t,n,yS,J0(KN()),No(e,2,-2),0,r)}function A_(e,t,n,r,i){return Nh(e,t,n,X0,No(e,0,r),No(e,r+1,-1),r,i)}function ES(e,t,n){switch(GN(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 4789:return il+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+il+e+ve+e+e;case 5936:switch(Xe(e,t+11)){case 114:return ue+e+ve+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ve+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ve+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ve+e+e;case 6165:return ue+e+ve+"flex-"+e+e;case 5187:return ue+e+ee(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ve+"flex-$1$2")+e;case 5443:return ue+e+ve+"flex-item-"+ee(e,/flex-|-self/g,"")+(gr(e,/flex-|baseline/)?"":ve+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ve+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ve+ee(e,"shrink","negative")+e;case 5292:return ue+e+ve+ee(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ee(e,"-grow","")+ue+e+ve+ee(e,"grow","positive")+e;case 4554:return ue+ee(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4200:if(!gr(e,/flex-|baseline/))return ve+"grid-column-align"+No(e,t)+e;break;case 2592:case 3360:return ve+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,gr(r.props,/grid-\w+-end/)})?~$u(e+(n=n[t].value),"span")?e:ve+ee(e,"-start","")+e+ve+"grid-row-span:"+(~$u(n,"span")?gr(n,/\d+/):+gr(n,/\d+/)-+gr(e,/\d+/))+";":ve+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return gr(r.props,/grid-\w+-start/)})?e:ve+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gn(e)-1-t>6)switch(Xe(e,t+1)){case 109:if(Xe(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+il+(Xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$u(e,"stretch")?ES(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return ve+i+":"+s+u+(o?ve+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(Xe(e,t+6)===121)return ee(e,":",":"+ue)+e;break;case 6444:switch(Xe(e,Xe(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Xe(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ve+"$2box$3")+e;case 100:return ee(e,":",":"+ve)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function Ad(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function sj(e,t,n,r){switch(e.type){case WN:if(e.children.length)break;case HN:case X0:return e.return=e.return||e.value;case yS:return"";case vS:return e.return=e.value+"{"+Ad(e.children,r)+"}";case Rh:if(!Gn(e.value=e.props.join(",")))return""}return Gn(n=Ad(e.children,r))?e.return=e.value+"{"+n+"}":""}function oj(e){var t=wS(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function aj(e){return function(t){t.root||(t=t.return)&&e(t)}}function lj(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case X0:e.return=ES(e.value,e.length,n);return;case vS:return Ad([Gr(e,{value:ee(e.value,"@","@"+ue)})],r);case Rh:if(e.length)return QN(n=e.props,function(i){switch(gr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Os(Gr(e,{props:[ee(i,/:(read-\w+)/,":"+il+"$1")]})),Os(Gr(e,{props:[i]})),Kg(e,{props:k_(n,r)});break;case"::placeholder":Os(Gr(e,{props:[ee(i,/:(plac\w+)/,":"+ue+"input-$1")]})),Os(Gr(e,{props:[ee(i,/:(plac\w+)/,":"+il+"$1")]})),Os(Gr(e,{props:[ee(i,/:(plac\w+)/,ve+"input-$1")]})),Os(Gr(e,{props:[i]})),Kg(e,{props:k_(n,r)});break}return""})}}var cj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gt={},bo=typeof process<"u"&&Gt!==void 0&&(Gt.REACT_APP_SC_ATTR||Gt.SC_ATTR)||"data-styled",Z0=typeof window<"u"&&"HTMLElement"in window,uj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==""?Gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.SC_DISABLE_SPEEDY!==void 0&&Gt.SC_DISABLE_SPEEDY!==""&&Gt.SC_DISABLE_SPEEDY!=="false"&&Gt.SC_DISABLE_SPEEDY),dj={},bh=Object.freeze([]),Mo=Object.freeze({});function IS(e,t,n){return n===void 0&&(n=Mo),e.theme!==n.theme&&e.theme||t||n.theme}var SS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fj=/(^-|-$)/g;function R_(e){return e.replace(hj,"-").replace(fj,"")}var pj=/(a)(d)/gi,P_=function(e){return String.fromCharCode(e+(e>25?39:97))};function Jg(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=P_(t%52)+n;return(P_(t%52)+n).replace(pj,"$1-$2")}var wp,no=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},TS=function(e){return no(5381,e)};function kS(e){return Jg(TS(e)>>>0)}function gj(e){return e.displayName||e.name||"Component"}function xp(e){return typeof e=="string"&&!0}var CS=typeof Symbol=="function"&&Symbol.for,AS=CS?Symbol.for("react.memo"):60115,mj=CS?Symbol.for("react.forward_ref"):60112,yj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},RS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_j=((wp={})[mj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wp[AS]=RS,wp);function N_(e){return("type"in(t=e)&&t.type.$$typeof)===AS?RS:"$$typeof"in e?_j[e.$$typeof]:yj;var t}var wj=Object.defineProperty,xj=Object.getOwnPropertyNames,j_=Object.getOwnPropertySymbols,Ej=Object.getOwnPropertyDescriptor,Ij=Object.getPrototypeOf,b_=Object.prototype;function PS(e,t,n){if(typeof t!="string"){if(b_){var r=Ij(t);r&&r!==b_&&PS(e,r,n)}var i=xj(t);j_&&(i=i.concat(j_(t)));for(var s=N_(e),o=N_(t),a=0;a<i.length;++a){var l=i[a];if(!(l in vj||n&&n[l]||o&&l in o||s&&l in s)){var u=Ej(t,l);try{wj(e,l,u)}catch{}}}}return e}function gs(e){return typeof e=="function"}function ey(e){return typeof e=="object"&&"styledComponentId"in e}function Zi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zg(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function jl(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function em(e,t,n){if(n===void 0&&(n=!1),!n&&!jl(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=em(e[r],t[r]);else if(jl(t))for(var r in t)e[r]=em(e[r],t[r]);return e}function ty(e,t){Object.defineProperty(e,"toString",{value:t})}function Si(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Sj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Si(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Uu=new Map,Rd=new Map,zu=1,hu=function(e){if(Uu.has(e))return Uu.get(e);for(;Rd.has(zu);)zu++;var t=zu++;return Uu.set(e,t),Rd.set(t,e),t},Tj=function(e,t){zu=t+1,Uu.set(e,t),Rd.set(t,e)},kj="style[".concat(bo,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Cj=new RegExp("^".concat(bo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Aj=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},Rj=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(Cj);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(Tj(d,u),Aj(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Pj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var NS=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(bo,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(bo,"active"),r.setAttribute("data-styled-version","6.1.1");var o=Pj();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Nj=function(){function e(t){this.element=NS(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Si(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),jj=function(){function e(t){this.element=NS(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),bj=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),M_=Z0,Mj={isServer:!Z0,useCSSOMInjection:!uj},Pd=function(){function e(t,n,r){t===void 0&&(t=Mo),n===void 0&&(n={});var i=this;this.options=Je(Je({},Mj),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Z0&&M_&&(M_=!1,function(s){for(var o=document.querySelectorAll(kj),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(bo)!=="active"&&(Rj(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),ty(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var f=function(p){return Rd.get(p)}(h);if(f===void 0)return"continue";var g=s.names.get(f),m=o.getGroup(h);if(g===void 0||m.length===0)return"continue";var _="".concat(bo,".g").concat(h,'[id="').concat(f,'"]'),w="";g!==void 0&&g.forEach(function(p){p.length>0&&(w+="".concat(p,","))}),l+="".concat(m).concat(_,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return l}(i)})}return e.registerId=function(t){return hu(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Je(Je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new bj(i):r?new Nj(i):new jj(i)}(this.options),new Sj(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(hu(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(hu(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(hu(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Lj=/&/g,Dj=/^\s*\/\/.*$/gm;function jS(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=jS(n.children,t)),n})}function Oj(e){var t,n,r,i=e===void 0?Mo:e,s=i.options,o=s===void 0?Mo:s,a=i.plugins,l=a===void 0?bh:a,u=function(f,g,m){return m===n||m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===Rh&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Lj,n).replace(r,u))}),o.prefix&&d.push(lj),d.push(sj);var h=function(f,g,m,_){g===void 0&&(g=""),m===void 0&&(m=""),_===void 0&&(_="&"),t=_,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(Dj,""),p=rj(m||g?"".concat(m," ").concat(g," { ").concat(w," }"):w);o.namespace&&(p=jS(p,o.namespace));var y=[];return Ad(p,oj(d.concat(aj(function(v){return y.push(v)})))),y};return h.hash=l.length?l.reduce(function(f,g){return g.name||Si(15),no(f,g.name)},5381).toString():"",h}var $j=new Pd,tm=Oj(),bS=pe.createContext({shouldForwardProp:void 0,styleSheet:$j,stylis:tm});bS.Consumer;pe.createContext(void 0);function nm(){return T.useContext(bS)}var Vj=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=tm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ty(this,function(){throw Si(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=tm),this.name+t.hash},e}(),Fj=function(e){return e>="A"&&e<="Z"};function L_(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Fj(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var MS=function(e){return e==null||e===!1||e===""},LS=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!MS(s)&&(Array.isArray(s)&&s.isCss||gs(s)?r.push("".concat(L_(i),":"),s,";"):jl(s)?r.push.apply(r,Nl(Nl(["".concat(i," {")],LS(s),!1),["}"],!1)):r.push("".concat(L_(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in cj||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function pi(e,t,n,r){if(MS(e))return[];if(ey(e))return[".".concat(e.styledComponentId)];if(gs(e)){if(!gs(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return pi(i,t,n,r)}var s;return e instanceof Vj?n?(e.inject(n,r),[e.getName(r)]):[e]:jl(e)?LS(e):Array.isArray(e)?Array.prototype.concat.apply(bh,e.map(function(o){return pi(o,t,n,r)})):[e.toString()]}function DS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(gs(n)&&!ey(n))return!1}return!0}var Uj=TS("6.1.1"),zj=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&DS(t),this.componentId=n,this.baseHash=no(Uj,n),this.baseStyle=r,Pd.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Zi(i,this.staticRulesId);else{var s=Zg(pi(this.rules,t,n,r)),o=Jg(no(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Zi(i,o),this.staticRulesId=o}else{for(var l=no(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var f=Zg(pi(h,t,n,r));l=no(l,f+d),u+=f}}if(u){var g=Jg(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Zi(i,g)}}return i},e}(),Lo=pe.createContext(void 0);Lo.Consumer;function mc(){var e=T.useContext(Lo);if(!e)throw Si(18);return e}function Bj(e){var t=pe.useContext(Lo),n=T.useMemo(function(){return function(r,i){if(!r)throw Si(14);if(gs(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Si(8);return i?Je(Je({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?pe.createElement(Lo.Provider,{value:n},e.children):null}var Ep={};function Hj(e,t,n){var r=ey(e),i=e,s=!xp(e),o=t.attrs,a=o===void 0?bh:o,l=t.componentId,u=l===void 0?function(x,S){var k=typeof x!="string"?"sc":R_(x);Ep[k]=(Ep[k]||0)+1;var I="".concat(k,"-").concat(kS("6.1.1"+k+Ep[k]));return S?"".concat(S,"-").concat(I):I}(t.displayName,t.parentComponentId):l,d=t.displayName,h=d===void 0?function(x){return xp(x)?"styled.".concat(x):"Styled(".concat(gj(x),")")}(e):d,f=t.displayName&&t.componentId?"".concat(R_(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(x,S){return _(x,S)&&w(x,S)}}else m=_}var p=new zj(n,f,r?i.componentStyle:void 0);function y(x,S){return function(k,I,A){var $=k.attrs,B=k.componentStyle,rt=k.defaultProps,K=k.foldedComponentIds,it=k.styledComponentId,Br=k.target,zi=pe.useContext(Lo),Bi=nm(),Bn=k.shouldForwardProp||Bi.shouldForwardProp,b=function(je,ln,Lt){for(var qt,Hi=Je(Je({},ln),{className:void 0,theme:Lt}),qf=0;qf<je.length;qf+=1){var Qc=gs(qt=je[qf])?qt(Hi):qt;for(var Hr in Qc)Hi[Hr]=Hr==="className"?Zi(Hi[Hr],Qc[Hr]):Hr==="style"?Je(Je({},Hi[Hr]),Qc[Hr]):Qc[Hr]}return ln.className&&(Hi.className=Zi(Hi.className,ln.className)),Hi}($,I,IS(I,zi,rt)||Mo),H=b.as||Br,q={};for(var ae in b)b[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"||(ae==="forwardedAs"?q.as=b.forwardedAs:Bn&&!Bn(ae,H)||(q[ae]=b[ae]));var Se=function(je,ln){var Lt=nm(),qt=je.generateAndInjectStyles(ln,Lt.styleSheet,Lt.stylis);return qt}(B,b),In=Zi(K,it);return Se&&(In+=" "+Se),b.className&&(In+=" "+b.className),q[xp(H)&&!SS.has(H)?"class":"className"]=In,q.ref=A,T.createElement(H,q)}(v,x,S)}y.displayName=h;var v=pe.forwardRef(y);return v.attrs=g,v.componentStyle=p,v.displayName=h,v.shouldForwardProp=m,v.foldedComponentIds=r?Zi(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=f,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(S){for(var k=[],I=1;I<arguments.length;I++)k[I-1]=arguments[I];for(var A=0,$=k;A<$.length;A++)em(S,$[A],!0);return S}({},i.defaultProps,x):x}}),ty(v,function(){return".".concat(v.styledComponentId)}),s&&PS(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function D_(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var O_=function(e){return Object.assign(e,{isCss:!0})};function OS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(gs(e)||jl(e)){var r=e;return O_(pi(D_(bh,Nl([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?pi(i):O_(pi(D_(i,t)))}function rm(e,t,n){if(n===void 0&&(n=Mo),!t)throw Si(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,OS.apply(void 0,Nl([i],s,!1)))};return r.attrs=function(i){return rm(e,t,Je(Je({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return rm(e,t,Je(Je({},n),i))},r}var $S=function(e){return rm(Hj,e)},E=$S;SS.forEach(function(e){E[e]=$S(e)});var Wj=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=DS(t),Pd.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(Zg(pi(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Pd.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function qj(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=OS.apply(void 0,Nl([e],t,!1)),i="sc-global-".concat(kS(JSON.stringify(r))),s=new Wj(r,i),o=function(l){var u=nm(),d=pe.useContext(Lo),h=pe.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,d,u.stylis),pe.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,d,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,d,u.stylis]),null};function a(l,u,d,h,f){if(s.isStatic)s.renderStyles(l,dj,d,f);else{var g=Je(Je({},u),{theme:IS(u,h,o.defaultProps)});s.renderStyles(l,g,d,f)}}return pe.memo(o)}const Gj=E.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  font-weight: 200;
`,Qj=E.div`
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
`,Kj=E.h3`
  font-weight: 300;
  color: #fff;
  font-size: 1.5rem;
`,Yj=E.span`
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
`;var VS={exports:{}},Xj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Jj=Xj,Zj=Jj;function FS(){}function US(){}US.resetWarningCache=FS;var eb=function(){function e(r,i,s,o,a,l){if(l!==Zj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:US,resetWarningCache:FS};return n.PropTypes=n,n};VS.exports=eb();var tb=VS.exports;const Wi=t0(tb);var nb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},rb=Object.defineProperty,ib=Object.defineProperties,sb=Object.getOwnPropertyDescriptors,Nd=Object.getOwnPropertySymbols,zS=Object.prototype.hasOwnProperty,BS=Object.prototype.propertyIsEnumerable,$_=(e,t,n)=>t in e?rb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V_=(e,t)=>{for(var n in t||(t={}))zS.call(t,n)&&$_(e,n,t[n]);if(Nd)for(var n of Nd(t))BS.call(t,n)&&$_(e,n,t[n]);return e},ob=(e,t)=>ib(e,sb(t)),ab=(e,t)=>{var n={};for(var r in e)zS.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Nd)for(var r of Nd(e))t.indexOf(r)<0&&BS.call(e,r)&&(n[r]=e[r]);return n},O=(e,t,n)=>{const r=T.forwardRef((i,s)=>{var o=i,{color:a="currentColor",size:l=24,stroke:u=2,children:d}=o,h=ab(o,["color","size","stroke","children"]);return T.createElement("svg",V_(ob(V_({ref:s},nb),{width:l,height:l,stroke:a,strokeWidth:u,className:`tabler-icon tabler-icon-${e}`}),h),[...n.map(([f,g])=>T.createElement(f,g)),...d||[]])});return r.propTypes={color:Wi.string,size:Wi.oneOfType([Wi.string,Wi.number]),stroke:Wi.oneOfType([Wi.string,Wi.number])},r.displayName=`${t}`,r},lb=O("arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]]),cb=O("arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]]),HS=O("arrows-shuffle","IconArrowsShuffle",[["path",{d:"M18 4l3 3l-3 3",key:"svg-0"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-1"}],["path",{d:"M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5",key:"svg-2"}],["path",{d:"M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3",key:"svg-3"}]]),ub=O("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]]),db=O("brand-safari","IconBrandSafari",[["path",{d:"M8 16l2 -6l6 -2l-2 6l-6 2",key:"svg-0"}],["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-1"}]]),hb=O("bug","IconBug",[["path",{d:"M9 9v-1a3 3 0 0 1 6 0v1",key:"svg-0"}],["path",{d:"M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3",key:"svg-1"}],["path",{d:"M3 13l4 0",key:"svg-2"}],["path",{d:"M17 13l4 0",key:"svg-3"}],["path",{d:"M12 20l0 -6",key:"svg-4"}],["path",{d:"M4 19l3.35 -2",key:"svg-5"}],["path",{d:"M20 19l-3.35 -2",key:"svg-6"}],["path",{d:"M4 7l3.75 2.4",key:"svg-7"}],["path",{d:"M20 7l-3.75 2.4",key:"svg-8"}]]),fb=O("camera","IconCamera",[["path",{d:"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2",key:"svg-0"}],["path",{d:"M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]),pb=O("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),gb=O("checks","IconChecks",[["path",{d:"M7 12l5 5l10 -10",key:"svg-0"}],["path",{d:"M2 12l5 5m5 -5l5 -5",key:"svg-1"}]]),mb=O("circle-check-filled","IconCircleCheckFilled",[["path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),yb=O("circle-plus","IconCirclePlus",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M9 12h6",key:"svg-1"}],["path",{d:"M12 9v6",key:"svg-2"}]]),vb=O("circle-x-filled","IconCircleXFilled",[["path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),_b=O("circle","IconCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}]]),wb=O("clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]]),xb=O("copy","IconCopy",[["path",{d:"M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",key:"svg-1"}]]),Eb=O("disc","IconDisc",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M7 12a5 5 0 0 1 5 -5",key:"svg-2"}],["path",{d:"M12 17a5 5 0 0 0 5 -5",key:"svg-3"}]]),Mh=O("discount-check-filled","IconDiscountCheckFilled",[["path",{d:"M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),ny=O("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),WS=O("edit-circle","IconEditCircle",[["path",{d:"M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z",key:"svg-0"}],["path",{d:"M16 5l3 3",key:"svg-1"}],["path",{d:"M9 7.07a7 7 0 0 0 1 13.93a7 7 0 0 0 6.929 -6",key:"svg-2"}]]),Ib=O("exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]]),Sb=O("eye-closed","IconEyeClosed",[["path",{d:"M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4",key:"svg-0"}],["path",{d:"M3 15l2.5 -3.8",key:"svg-1"}],["path",{d:"M21 14.976l-2.492 -3.776",key:"svg-2"}],["path",{d:"M9 17l.5 -4",key:"svg-3"}],["path",{d:"M15 17l-.5 -4",key:"svg-4"}]]),Tb=O("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]]),kb=O("files","IconFiles",[["path",{d:"M15 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2",key:"svg-2"}]]),jd=O("headphones","IconHeadphones",[["path",{d:"M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z",key:"svg-1"}],["path",{d:"M4 15v-3a8 8 0 0 1 16 0v3",key:"svg-2"}]]),Cb=O("heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]),Ab=O("heart-filled","IconHeartFilled",[["path",{d:"M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),ry=O("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]]),iy=O("history","IconHistory",[["path",{d:"M12 8l0 4l2 2",key:"svg-0"}],["path",{d:"M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5",key:"svg-1"}]]),sy=O("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]),Rb=O("loader-2","IconLoader2",[["path",{d:"M12 3a9 9 0 1 0 9 9",key:"svg-0"}]]),qS=O("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]]),Pb=O("logout","IconLogout",[["path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M9 12h12l-3 -3",key:"svg-1"}],["path",{d:"M18 15l3 -3",key:"svg-2"}]]),Nb=O("maximize","IconMaximize",[["path",{d:"M4 8v-2a2 2 0 0 1 2 -2h2",key:"svg-0"}],["path",{d:"M4 16v2a2 2 0 0 0 2 2h2",key:"svg-1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"svg-2"}],["path",{d:"M16 20h2a2 2 0 0 0 2 -2v-2",key:"svg-3"}]]),jb=O("message-2","IconMessage2",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z",key:"svg-2"}]]),bb=O("message-plus","IconMessagePlus",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5",key:"svg-2"}],["path",{d:"M16 19h6",key:"svg-3"}],["path",{d:"M19 16v6",key:"svg-4"}]]),F_=O("message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]]),Mb=O("microphone-2","IconMicrophone2",[["path",{d:"M15 12.9a5 5 0 1 0 -3.902 -3.9",key:"svg-0"}],["path",{d:"M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z",key:"svg-1"}]]),Lb=O("microphone","IconMicrophone",[["path",{d:"M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z",key:"svg-0"}],["path",{d:"M5 10a7 7 0 0 0 14 0",key:"svg-1"}],["path",{d:"M8 21l8 0",key:"svg-2"}],["path",{d:"M12 17l0 4",key:"svg-3"}]]),Db=O("moon","IconMoon",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}]]),Ob=O("music-plus","IconMusicPlus",[["path",{d:"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M9 17v-13h10v8",key:"svg-1"}],["path",{d:"M9 8h10",key:"svg-2"}],["path",{d:"M16 19h6",key:"svg-3"}],["path",{d:"M19 16v6",key:"svg-4"}]]),mo=O("music","IconMusic",[["path",{d:"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}],["path",{d:"M9 17v-13h10v13",key:"svg-2"}],["path",{d:"M9 8h10",key:"svg-3"}]]),$b=O("password","IconPassword",[["path",{d:"M12 10v4",key:"svg-0"}],["path",{d:"M10 13l4 -2",key:"svg-1"}],["path",{d:"M10 11l4 2",key:"svg-2"}],["path",{d:"M5 10v4",key:"svg-3"}],["path",{d:"M3 13l4 -2",key:"svg-4"}],["path",{d:"M3 11l4 2",key:"svg-5"}],["path",{d:"M19 10v4",key:"svg-6"}],["path",{d:"M17 13l4 -2",key:"svg-7"}],["path",{d:"M17 11l4 2",key:"svg-8"}]]),Vb=O("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]]),GS=O("player-pause-filled","IconPlayerPauseFilled",[["path",{d:"M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}],["path",{d:"M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",fill:"currentColor",key:"svg-1",strokeWidth:"0"}]]),oy=O("player-play-filled","IconPlayerPlayFilled",[["path",{d:"M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),U_=O("player-track-next-filled","IconPlayerTrackNextFilled",[["path",{d:"M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}],["path",{d:"M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z",fill:"currentColor",key:"svg-1",strokeWidth:"0"}]]),z_=O("player-track-prev-filled","IconPlayerTrackPrevFilled",[["path",{d:"M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}],["path",{d:"M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z",fill:"currentColor",key:"svg-1",strokeWidth:"0"}]]),Fb=O("playlist-add","IconPlaylistAdd",[["path",{d:"M19 8h-14",key:"svg-0"}],["path",{d:"M5 12h9",key:"svg-1"}],["path",{d:"M11 16h-6",key:"svg-2"}],["path",{d:"M15 16h6",key:"svg-3"}],["path",{d:"M18 13v6",key:"svg-4"}]]),QS=O("playlist","IconPlaylist",[["path",{d:"M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M17 17v-13h4",key:"svg-1"}],["path",{d:"M13 5h-10",key:"svg-2"}],["path",{d:"M3 9l10 0",key:"svg-3"}],["path",{d:"M9 13h-6",key:"svg-4"}]]),KS=O("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]),YS=O("quote","IconQuote",[["path",{d:"M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5",key:"svg-0"}],["path",{d:"M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5",key:"svg-1"}]]),Ub=O("repeat-once","IconRepeatOnce",[["path",{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3",key:"svg-0"}],["path",{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3",key:"svg-1"}],["path",{d:"M11 11l1 -1v4",key:"svg-2"}]]),zb=O("repeat","IconRepeat",[["path",{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3",key:"svg-0"}],["path",{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3",key:"svg-1"}]]),sa=O("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]),Bb=O("settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]),yc=O("share-3","IconShare3",[["path",{d:"M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z",key:"svg-0"}]]),XS=O("square-rounded-plus","IconSquareRoundedPlus",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",key:"svg-0"}],["path",{d:"M15 12h-6",key:"svg-1"}],["path",{d:"M12 9v6",key:"svg-2"}]]),JS=O("sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]]),Hb=O("trending-up","IconTrendingUp",[["path",{d:"M3 17l6 -6l4 4l8 -8",key:"svg-0"}],["path",{d:"M14 7l7 0l0 7",key:"svg-1"}]]),ZS=O("user-plus","IconUserPlus",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M16 19h6",key:"svg-1"}],["path",{d:"M19 16v6",key:"svg-2"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4",key:"svg-3"}]]),eT=O("user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]),Wb=O("users","IconUsers",[["path",{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"svg-2"}],["path",{d:"M21 21v-2a4 4 0 0 0 -3 -3.85",key:"svg-3"}]]),tT=O("vinyl","IconVinyl",[["path",{d:"M16 3.937a9 9 0 1 0 5 8.063",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M20 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M20 4l-3.5 10l-2.5 2",key:"svg-3"}]]),qb=O("volume","IconVolume",[["path",{d:"M15 8a5 5 0 0 1 0 8",key:"svg-0"}],["path",{d:"M17.7 5a9 9 0 0 1 0 14",key:"svg-1"}],["path",{d:"M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",key:"svg-2"}]]),nT=O("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);class rT extends pe.Component{constructor(n){super(n);Le(this,"state",{error:null});this.state={error:null}}static getDerivedStateFromError(n){return{error:n}}render(){return this.state.error?c.jsxs(Gj,{children:[c.jsx(Qj,{children:c.jsx(hb,{})}),c.jsx(Kj,{children:"Something went wrong."}),c.jsx(Yj,{children:this.state.error.message})]}):this.props.children}}const Gb=e=>e!=null;function ay(e,t){for(const n in e)t(e[n],n)}function Yt(e,t){e.forEach(t)}function He(e,t,n){if(!e)throw Error(`${n?n+": ":""}${t}`)}function jr({node:e=[],from:t,source:n,parent:r=t||n,to:i,target:s,child:o=i||s,scope:a={},meta:l={},family:u={type:"regular"},regional:d}={}){const h=Fa(r),f=Fa(u.links),g=Fa(u.owners),m=[];Yt(e,w=>w&&wr(m,w));const _={id:oM(),seq:m,next:Fa(o),meta:l,scope:a,family:{type:u.type||"crosslink",links:f,owners:g}};return Yt(f,w=>wr(Lh(w),_)),Yt(g,w=>wr(Dh(w),_)),Yt(h,w=>wr(w.next,_)),d&&yo&&$h(sl(yo),[_]),_}function Do(e,t,n){let r,i=Yn,s=null,o=fe;if(e.target&&(t=e.params,n=e.defer,r=e.meta,i="page"in e?e.page:i,e.stack&&(s=e.stack),o=ro(e)||o,e=e.target),o&&fe&&o!==fe&&(fe=null),Array.isArray(e))for(let m=0;m<e.length;m++)qi("pure",i,Ln(e[m]),s,t[m],o,r);else qi("pure",i,Ln(e),s,t,o,r);if(n&&!pu)return;const a={isRoot:pu,currentPage:Yn,scope:fe,isWatch:Hu,isPure:Wu};let l,u,d,h,f,g;pu=0;e:for(;h=hM();){const{idx:m,stack:_,type:w}=h;d=_.node,Yn=f=_.page,fe=ro(_),f?g=f.reg:fe&&(g=fe.reg);const p=!!f,y=!!fe,v={fail:0,scope:d.scope};l=u=0;for(let x=m;x<d.seq.length&&!l;x++){const S=d.seq[x];if(S.order){const{priority:k,barrierID:I}=S.order,A=I?f?`${f.fullID}_${I}`:I:0;if(x!==m||w!==k){I?Sp.has(A)||(Sp.add(A),om(x,_,k,I)):om(x,_,k,0);continue e}I&&Sp.delete(A)}switch(S.type){case"mov":{const I=S.data;let A;switch(I.from){case"stack":A=sl(_);break;case"a":case"b":A=_[I.from];break;case"value":A=I.store;break;case"store":if(g&&!g[I.store.id])if(p){const $=hT(f,I.store.id);_.page=f=$,$?g=$.reg:y?(Vo(fe,I.store,0,1,I.softRead),g=fe.reg):g=void 0}else y&&Vo(fe,I.store,0,1,I.softRead);A=ol(g&&g[I.store.id]||I.store)}switch(I.to){case"stack":_.value=A;break;case"a":case"b":_[I.to]=A;break;case"store":fM(f,fe,I.target,0).current=A}break}case"compute":const k=S.data;if(k.fn){Hu=d.meta.op==="watch",Wu=k.pure;const I=k.safe?(0,k.fn)(sl(_),v.scope,_):gM(v,k.fn,_);k.filter?u=!I:_.value=I,Hu=a.isWatch,Wu=a.isPure}}l=v.fail||u}if(!l){const x=sl(_),S=ro(_);if(Yt(d.next,k=>{qi("child",f,k,_,x,S)}),S){d.meta.needFxCounter&&qi("child",f,S.fxCount,_,x,S),d.meta.storeChange&&qi("child",f,S.storeChange,_,x,S),d.meta.warnSerialize&&qi("child",f,S.warnSerializeNode,_,x,S);const k=S.additionalLinks[d.id];k&&Yt(k,I=>{qi("child",f,I,_,x,S)})}}}pu=a.isRoot,Yn=a.currentPage,fe=ro(a)}function iT(e,t="combine"){let n=t+"(",r="",i=0;return ay(e,s=>{i<25&&(s!=null&&(n+=r,n+=Ti(s)?sT(s).fullName:s.toString()),i+=1,r=", ")}),n+")"}function Qb(e,t){let n,r;const i=e;if(t){const s=sT(t);e.length===0?(n=s.path,r=s.fullName):(n=s.path.concat([e]),r=s.fullName.length===0?e:s.fullName+"/"+e)}else n=e.length===0?[]:[e],r=e;return{shortName:i,fullName:r,path:n}}function Mi(e,t){if(!t||!t.name&&!t.named&&!t.loc)return e;let n=`[${e}]`;const r=t.named||t.name;r&&(n+=` unit '${r}'`);const i=t.loc;return!r&&i&&(n+=` (${i.file}:${i.line}:${i.column})`),n}function ly(e,t){const n=t?e:e[0];cT(n);let r=n.or;const i=n.and;if(i){const s=t?i:i[0];if(On(s)&&"and"in s){const o=ly(i,t);e=o[0],r={...r,...o[1]}}else e=i}return[e,r]}function im(e){const t=()=>e();return t.unsubscribe=()=>e(),t}function jn(e,...t){const n=uy();if(n){const r=n.handlers[e];if(r)return r(n,...t)}}function F(e,t){const n=Fo({or:t,and:typeof e=="string"?{name:e}:e}),r=Mi("event",n),i=(a,...l)=>(He(!gi(i,"derived"),"call of derived event is not supported, use createEvent instead",r),He(!Wu,"unit call from pure function is not supported, use operators like sample instead",r),Yn?((u,d,h,f)=>{const g=Yn;let m=null;if(d)for(m=Yn;m&&m.template!==d;)m=Oo(m);G_(m);const _=u.create(h,f);return G_(g),_})(i,s,a,l):i.create(a,l)),s=uy(),o=Object.assign(i,{graphite:jr({meta:gT(n.actualOp||"event",i,n),regional:1}),create:a=>(Do({target:i,params:a,scope:fe}),a),watch:a=>pT(i,a),map:a=>Tp(i,"map",a,[xr()]),filter:a=>Tp(i,"filter",a.fn?a:a.fn,[xr(Vh,1)]),filterMap:a=>Tp(i,"filterMap",a,[xr(),kr(l=>!pn(l),1)]),prepend(a){He(i.targetable,".prepend of derived event is not supported, call source event instead",r);const l=F("* → "+i.shortName,{parent:Oo(i)});return jn("eventPrepend",Ln(l)),oa(l,i,[xr()],"prepend",a),mM(i,l),l}});return n!=null&&n.domain&&n.domain.hooks.event(o),_r(o,"id",o.graphite.id),lT(o.graphite),o}function B_(e,t,n,r,i){return Md(n,`${i} ${t}`,"first argument"),He(Xt(r),"second argument should be a function",i),bl(!gi(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`,i),Yt(Array.isArray(n)?n:[n],s=>{e.off(s),bd(e).set(s,fT(mT(s,e,"on",uM,r)))}),e}function te(e,t){const n=Fo(t),r=$o(e),i=Mi("store",n),s=F({named:"updates",derived:1});jn("storeBase",r);const o=r.id,a="skipVoid"in n,l=a&&!n.skipVoid;bl(!(a&&n.skipVoid),"{skipVoid: true}","updateFilter",i);const u={subscribers:new Map,updates:s,defaultState:e,stateRef:r,getState(){let p,y=r;if(Yn){let v=Yn;for(;v&&!v.reg[o];)v=Oo(v);v&&(p=v)}return!p&&fe&&(Vo(fe,r,1),p=fe),p&&(y=p.reg[o]),ol(y)},setState:p=>Do({target:u,params:p,defer:1,scope:fe}),reset:(...p)=>(He(u.targetable,".reset of derived store is not supported",i),Yt(p,y=>B_(u,".reset",y,()=>u.defaultState,i)),u),on:(p,y)=>(He(u.targetable,".on of derived store is not supported",i),B_(u,".on",p,y,i)),off(p){const y=bd(u).get(p);return y&&(y(),bd(u).delete(p)),u},map(p,y){let v,x;On(p)&&(v=p,p=p.fn);const S=u.getState(),k=pn(S);(!k||k&&l)&&(x=p(S));const I=te(x,{name:`${u.shortName} → *`,derived:1,...y,and:v}),A=mT(u,I,"map",Vh,p);return sm(nr(I),{type:"map",fn:p,from:r}),nr(I).noInit=1,jn("storeMap",r,A),I},watch(p,y){if(bl(!y,"watch second argument","sample",i),!y||!Ti(p)){const v=pT(u,p);return jn("storeWatch",r,p)||p(u.getState()),v}return He(Xt(y),"second argument should be a function",i),p.watch(v=>y(u.getState(),v))}},d=gT("store",u,n),h=u.defaultConfig.updateFilter;u.graphite=jr({scope:{state:r,fn:h},node:[kr((p,y,v)=>(v.scope&&!v.scope.reg[r.id]&&(v.b=1),p)),as(r),kr((p,y,{a:v,b:x})=>{const S=pn(p);return S&&!a&&console.error(`${i}: ${qu}`),(S&&l||!S)&&(p!==v||x)},1),h&&xr(uT,1),dn({from:"stack",target:r})],child:s,meta:{...d,defaultState:e},regional:1}),_r(u,"id",u.graphite.id),_r(u,"rootStateRefId",o);const f=gi(u,"serialize"),g=gi(u,"derived"),m=f==="ignore",_=gi(u,"sid");_&&(_r(u,"storeChange",1),r.sid=_),_||m||g||_r(u,"warnSerialize",1);const w=pn(e);return He(g||!w||w&&l,qu,i),g&&w&&!a&&console.error(`${i}: ${qu}`),$h(u,[s]),n!=null&&n.domain&&n.domain.hooks.store(u),g||(u.reinit=F({named:"reinit"}),u.reset(u.reinit)),r.meta=u.graphite.meta,lT(u.graphite),u}function Kb(...e){let t,n,r;[e,r]=ly(e);const i=Mi("combine",r),s=e[e.length-1],o=!Dn(s)&&On(s),a=o&&s,l=o?e[e.length-2]:s;let u,d,h;if(Xt(l)?(n=e.slice(0,o?-2:-1),t=l):n=e,n.length===1){const f=n[0];Dn(f)||(u=f,d=1)}if(!d&&(u=n,t)){h=1;const f=t;t=g=>f(...g)}return He(On(u),`${i}: shape should be an object`),yM(Array.isArray(u),!h,u,r,t,a)}function Yb(){const e={};return e.req=new Promise((t,n)=>{e.rs=t,e.rj=n}),e.req.catch(()=>{}),e}function Oe(e,t={}){const n=Fo(Xt(e)?{handler:e}:e,t),r=Mi("effect",n),i=F(Xt(e)?{handler:e}:e,{...t,actualOp:"effect"}),s=Ln(i);_r(s,"op",i.kind="effect"),i.use=m=>(He(Xt(m),".use argument should be a function",r),h.scope.handler=m,i),i.use.getCurrent=()=>h.scope.handler;const o=i.finally=F({named:"finally",derived:1}),a=i.done=o.filterMap({named:"done",fn({status:m,params:_,result:w}){if(m==="done")return{params:_,result:w}}}),l=i.fail=o.filterMap({named:"fail",fn({status:m,params:_,error:w}){if(m==="fail")return{params:_,error:w}}}),u=i.doneData=a.map({named:"doneData",fn:({result:m})=>m}),d=i.failData=l.map({named:"failData",fn:({error:m})=>m}),h=jr({scope:{handler:i.defaultConfig.handler||(()=>He(0,`no handler used in ${i.compositeName.fullName}`))},node:[kr((m,_,w)=>{let p=_.handler;const y=ro(w);if(y){const v=y.handlers.unitMap.get(i)||y.handlers.sidMap[i.sid];v&&(p=v)}return m.handler=p,m},0,1),kr((m,_,w)=>{if(_.runnerFn&&!_.runnerFn(m,null,w))return;const{params:p,req:y,handler:v,args:x=[p]}=m,S=K_(p,y,1,o,w),k=K_(p,y,0,o,w),[I,A]=vM(v,k,x);I&&(On(A)&&Xt(A.then)?A.then(S,k):S(A))},0,1)],meta:{op:"fx",fx:"runner"}});s.scope.runner=h,wr(s.seq,kr((m,{runner:_},w)=>{const p=Oo(w)?{params:m,req:{rs(y){},rj(y){}}}:m;return w.meta||(w.meta={fxID:aM()}),Do({target:_,params:p,defer:1,scope:ro(w),meta:w.meta}),p.params})),i.create=m=>{const _=Yb(),w={params:m,req:_};if(fe&&!Hu){const p=fe;_.req.finally(()=>{lm(p)}).catch(()=>{})}return Do({target:i,params:w,scope:fe}),_.req};const f=i.inFlight=te(0,{serialize:"ignore",named:(gi(i,"name")||i.graphite.id)+".inFlight"}).on(i,m=>m+1).on(o,m=>m-1).map({fn:m=>m,named:"inFlight"});_r(o,"needFxCounter","dec"),_r(i,"needFxCounter",1);const g=i.pending=f.map({fn:m=>m>0,named:"pending"});return $h(i,[o,a,l,u,d,g,f]),n!=null&&n.domain&&n.domain.hooks.effect(i),i}function Xb(e,t){const n=Mi("merge",t);Md(e,n,"first argument");const r=F({name:iT(e,"merge"),derived:1,and:t});return oa(e,r,[],"merge"),r}function Jb(e,t){let n=0;return Yt(wM,r=>{r in e&&(He(e[r]!=null,yT(t,r)),n=1)}),n}function j(...e){let t,n,r,i,[[s,o,a],l]=ly(e),u=1;const d=Mi("sample",l);return pn(o)&&On(s)&&Jb(s,d)&&(o=s.clock,a=s.fn,"batch"in s?u=s.batch:(bl(!("greedy"in s),"greedy in sample","batch",d),u=!s.greedy),i=s.filter,t=s.target,n=s.name,r=s.sid,s=s.source),xM("sample",o,s,i,t,a,n,l,u,1,0,r)}function Zb(e,{scope:t,safe:n}={}){He(t||fe||n,"scopeBind: scope not found");const r=t||fe;return i=>{function s(){lm(l)}let o,a=0;const l=fe;lm(r);try{o=e(i)}catch(u){o=u,a=1}if(s(),a)throw o;return o instanceof Promise&&o.then(s,s),o}}function cy({unit:e,fn:t,scope:n,batch:r}){const i=[Bu.run({fn:o=>t(o)})];r&&i.unshift(Bu.compute({priority:"sampler",batch:1})),Dn(e)&&i.unshift(Bu.mov({store:e.stateRef,to:"stack"}));const s=Array.isArray(e)?e:[e];if(n){const o=[],a=n.additionalLinks;return s.forEach(l=>{const u=a[l.graphite.id]||[];a[l.graphite.id]=u;const d=jr({node:eM(i,l),meta:{watchOp:l.kind}});u.push(d),o.push(()=>{const h=u.indexOf(d);h!==-1&&u.splice(h,1),um(d)})}),im(()=>{o.forEach(l=>l())})}{const o=jr({node:i,parent:s,family:{owners:s}});return im(()=>{um(o)})}}function eM(e,t){return Dn(t)?[Bu.mov({store:t.stateRef,to:"stack"}),...e]:e}const tM=typeof Symbol<"u"&&Symbol.observable||"@@observable",Ln=e=>e.graphite||e,Lh=e=>e.family.owners,Dh=e=>e.family.links,nr=e=>e.stateRef,sl=e=>e.value,bd=e=>e.subscribers,Oo=e=>e.parent,ro=e=>e.scope,gi=(e,t)=>Ln(e).meta[t],_r=(e,t,n)=>Ln(e).meta[t]=n,sT=e=>e.compositeName,Ti=e=>(Xt(e)||On(e))&&"kind"in e,vc=e=>t=>Ti(t)&&t.kind===e,Dn=vc("store"),nM=vc("event"),H_=vc("effect"),rM=e=>Ti(e)&&!!e.targetable,oT=vc("domain"),iM=vc("scope");var fu={__proto__:null,unit:Ti,store:Dn,event:nM,effect:H_,targetable:rM,domain:oT,scope:iM,attached:e=>H_(e)&&gi(e,"attached")==1};const Ip=(e,t)=>{const n=e.indexOf(t);n!==-1&&e.splice(n,1)},wr=(e,t)=>e.push(t),bl=(e,t,n,r)=>!e&&console.error(`${r?r+": ":""}${t} is deprecated${n?`, use ${n} instead`:""}`),Oh=()=>{let e=0;return()=>""+ ++e},sM=Oh(),aT=Oh(),oM=Oh(),aM=Oh();let yo=null;const lT=e=>{},uy=()=>yo,lM=e=>(e&&yo&&yo.sidRoot&&(e=`${yo.sidRoot}|${e}`),e),$h=(e,t)=>{const n=Ln(e);Yt(t,r=>{const i=Ln(r);n.family.type!=="domain"&&(i.family.type="crosslink"),wr(Lh(i),n),wr(Dh(n),i)})},Fa=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(Ln),On=e=>typeof e=="object"&&e!==null,Xt=e=>typeof e=="function",pn=e=>e===void 0,cT=e=>He(On(e)||Xt(e),"expect first argument be an object"),W_=(e,t,n,r)=>He(!(!On(e)&&!Xt(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${n} to be a unit (store, event or effect)${r}`),Md=(e,t,n)=>{Array.isArray(e)?Yt(e,(r,i)=>W_(r,t,`${i} item of ${n}`,"")):W_(e,t,n," or array of units")},cM=(e,t,n="target")=>Yt(Fa(t),r=>He(!gi(r,"derived"),`${e}: derived unit in "${n}" is not supported, use createStore/createEvent instead"`)),uT=(e,{fn:t},{a:n})=>t(e,n),uM=(e,{fn:t},{a:n})=>t(n,e),Vh=(e,{fn:t})=>t(e),dT=(e,t,n,r)=>{const i={id:aT(),type:e,data:t};return n&&(i.order={priority:n},r&&(i.order.barrierID=++dM)),i};let dM=0;const dn=({from:e="store",store:t,target:n,to:r=n?"store":"stack",batch:i,priority:s})=>dT("mov",{from:e,store:t,to:r,target:n},s,i),Ml=({fn:e,batch:t,priority:n,safe:r=0,filter:i=0,pure:s=0})=>dT("compute",{fn:e,safe:r,filter:i,pure:s},n,t),dy=({fn:e})=>Ml({fn:e,priority:"effect"}),kr=(e,t,n)=>Ml({fn:e,safe:1,filter:t,priority:n&&"effect"}),as=(e,t,n)=>dn({store:e,to:t?"stack":"a",priority:n&&"sampler",batch:1}),xr=(e=Vh,t)=>Ml({fn:e,pure:1,filter:t}),Bu={mov:dn,compute:Ml,filter:({fn:e,pure:t})=>Ml({fn:e,filter:1,pure:t}),run:dy},$o=e=>({id:aT(),current:e,initial:e}),ol=({current:e})=>e,sm=(e,t)=>{e.before||(e.before=[]),wr(e.before,t)};let io=null;const hy=(e,t)=>{if(!e)return t;if(!t)return e;let n;return(e.v.type===t.v.type&&e.v.id>t.v.id||am(e.v.type)>am(t.v.type))&&(n=e,e=t,t=n),n=hy(e.r,t),e.r=e.l,e.l=n,e},fy=[];let q_=0;for(;q_<6;)wr(fy,{first:null,last:null,size:0}),q_+=1;const hM=()=>{for(let e=0;e<6;e++){const t=fy[e];if(t.size>0){if(e===3||e===4){t.size-=1;const r=io.v;return io=hy(io.l,io.r),r}t.size===1&&(t.last=null);const n=t.first;return t.first=n.r,t.size-=1,n.v}}},qi=(e,t,n,r,i,s,o)=>om(0,{a:null,b:null,node:n,parent:r,value:i,page:t,scope:s,meta:o},e,0),om=(e,t,n,r)=>{const i=am(n),s=fy[i],o={v:{idx:e,stack:t,type:n,id:r},l:null,r:null};i===3||i===4?io=hy(io,o):(s.size===0?s.first=o:s.last.r=o,s.last=o),s.size+=1},am=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},Sp=new Set;let fe,pu=1,Hu=0,Wu=0,Yn=null;const lm=e=>{fe=e},G_=e=>{Yn=e},hT=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=e.parent;if(e)return e}return null},fM=(e,t,n,r)=>{const i=hT(e,n.id);return i?i.reg[n.id]:t?(Vo(t,n,r),t.reg[n.id]):n},pM=e=>e,Vo=(e,t,n,r,i)=>{const s=e.reg;if(s[t.id])return;const o=t.sid,a={id:t.id,current:t.initial,meta:t.meta};if(a.id in e.values.idMap)a.current=e.values.idMap[a.id];else if(o&&o in e.values.sidMap&&!(o in e.sidIdMap)){var l;const u=t==null||(l=t.meta)===null||l===void 0?void 0:l.serialize;a.current=(e.fromSerialize&&u!=="ignore"&&(u==null?void 0:u.read)||pM)(e.values.sidMap[o])}else if(t.before&&!i){let u=0;const d=n||!t.noInit||r;Yt(t.before,h=>{switch(h.type){case"map":{const f=h.from;if((f||h.fn)&&(f&&Vo(e,f,n,r),d)){const g=f&&s[f.id].current;a.current=h.fn?h.fn(g):g}break}case"field":Vo(e,h.from,n,r),u||(u=1,a.current=Array.isArray(a.current)?[...a.current]:{...a.current}),d&&(a.current[h.field]=s[s[h.from.id].id].current)}})}o&&(e.sidIdMap[o]=t.id),s[t.id]=a},gM=(e,t,n)=>{try{return t(sl(n),e.scope,n)}catch(r){console.error(r),e.fail=1,e.failReason=r}},Fo=(e,t={})=>(On(e)&&(Fo(e.or,t),ay(e,(n,r)=>{pn(n)||r==="or"||r==="and"||(t[r]=n)}),Fo(e.and,t)),t),Q_=(e,t)=>{Ip(e.next,t),Ip(Lh(e),t),Ip(Dh(e),t)},cm=(e,t,n)=>{let r;e.next.length=0,e.seq.length=0,e.scope=null;let i=Dh(e);for(;r=i.pop();)Q_(r,e),(t||n&&e.meta.op!=="sample"||r.family.type==="crosslink")&&cm(r,t,r.meta.op!=="on"&&n);for(i=Lh(e);r=i.pop();)Q_(r,e),n&&r.family.type==="crosslink"&&cm(r,t,r.meta.op!=="on"&&n)},Na=e=>e.clear(),um=(e,{deep:t}={})=>{let n=0;if(e.ownerSet&&e.ownerSet.delete(e),Dn(e))Na(bd(e));else if(oT(e)){n=1;const r=e.history;Na(r.events),Na(r.effects),Na(r.stores),Na(r.domains)}cm(Ln(e),!!t,n)},fT=e=>im(()=>um(e)),oa=(e,t,n,r,i)=>jr({node:n,parent:e,child:t,scope:{fn:i},meta:{op:r},family:{owners:[e,t],links:t},regional:1}),pT=(e,t)=>(He(Xt(t),".watch argument should be a function"),fT(jr({scope:{fn:t},node:[dy({fn:Vh})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),mM=(e,t,n="event")=>{Oo(e)&&Oo(e).hooks[n](t)},gT=(e,t,n)=>{const r=Fo(n),i=e==="domain",s=sM(),{sid:o=null,named:a=null,domain:l=null,parent:u=l}=r,d=a||r.name||(i?"":s),h=Qb(d,u),f={op:t.kind=e,name:t.shortName=d,sid:t.sid=lM(o),named:a,unitId:t.id=s,serialize:r.serialize,derived:r.derived,config:r};return t.targetable=!r.derived,t.parent=u,t.compositeName=h,t.defaultConfig=r,t.getType=()=>(bl(0,"getType","compositeName.fullName"),h.fullName),!i&&(t.subscribe=g=>(cT(g),t.watch(Xt(g)?g:m=>g.next&&g.next(m))),t[tM]=()=>t),f},Tp=(e,t,n,r)=>{let i;On(n)&&(i=n,n=n.fn);const s=F({name:`${e.shortName} → *`,derived:1,and:i});return oa(e,s,r,t,n),s},qu="undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option",mT=(e,t,n,r,i)=>{const s=nr(t),o=dn({store:s,to:"a",priority:"read"});n==="map"&&(o.data.softRead=1);const a=[o,xr(r)];return jn("storeOnMap",s,a,Dn(e)&&nr(e)),oa(e,t,a,n,i)},yM=(e,t,n,r,i,s)=>{const o=Mi("combine",r),a=e?p=>[...p]:p=>({...p}),l=e?[]:{},u=a(l),d=$o(u),h=$o(1);d.type=e?"list":"shape",d.noInit=1,jn("combineBase",d,h);const f=te(u,{name:iT(n),derived:1,...s,and:r}),g=nr(f);g.noInit=1,_r(f,"isCombine",1);const m=as(d);m.order={priority:"barrier"};const _=dn({store:g,to:"b",priority:"read"});_.data.softRead=1;const w=[kr((p,y,v)=>(v.scope&&!v.scope.reg[d.id]&&(v.c=1),p)),m,dn({store:h,to:"b"}),kr((p,{key:y},v)=>{if(v.c||p!==v.a[y])return t&&v.b&&(v.a=a(v.a)),v.a[y]=p,1},1),dn({from:"a",target:d}),dn({from:"value",store:0,target:h}),dn({from:"value",store:1,target:h,priority:"barrier",batch:1}),as(d,1,1),i&&xr(),_];if(ay(n,(p,y)=>{if(!Dn(p))return He(!Ti(p)&&!pn(p),`combine expects a store in a field ${y}`,o),void(u[y]=l[y]=p);l[y]=p.defaultState,u[y]=p.getState();const v=oa(p,f,w,"combine",i);v.scope.key=y;const x=nr(p);sm(d,{type:"field",field:y,from:x}),jn("combineField",x,v)}),f.defaultShape=n,sm(g,{type:"map",from:d,fn:i}),!uy())if(i){const p=i(u);!pn(p)||s&&"skipVoid"in s||console.error(`${o}: ${qu}`),g.current=p,g.initial=p,f.defaultState=p}else f.defaultState=l;return f},vM=(e,t,n)=>{try{return[1,e(...n)]}catch(r){return t(r),[0,null]}},K_=(e,t,n,r,i)=>s=>{Do({target:[r,_M],params:[n?{status:"done",params:e,result:s}:{status:"fail",params:e,error:s},{value:s,fn:n?t.rs:t.rj}],defer:1,page:i.page,scope:i.scope,meta:i.meta})},_M=jr({node:[dy({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}}),wM=["source","clock","target"],yT=(e,t)=>e+`: ${t} should be defined`,xM=(e,t,n,r,i,s,o,a,l,u,d,h)=>{const f=Mi(e,a),g=!!i;He(!pn(n)||!pn(t),yT(f,"either source or clock"));let m=0;pn(n)?m=1:Ti(n)||(n=Kb(n)),pn(t)?t=n:(Md(t,f,"clock"),Array.isArray(t)&&(t=Xb(t))),m&&(n=t),a||o||(o=n.shortName);let _="none";(d||r)&&(Ti(r)?_="unit":(He(Xt(r),"`filter` should be function or unit"),_="fn")),i?(Md(i,f,"target"),cM(f,i)):_==="none"&&u&&Dn(n)&&Dn(t)?i=te(s?s(ol(nr(n)),ol(nr(t))):ol(nr(n)),{name:o,sid:h,or:a}):(i=F({name:o,derived:1,or:a}),jn("sampleTarget",Ln(i)));const w=$o();let p=[];if(_==="unit"){const[x,S,k]=Y_(r,i,t,w,e);k||p.push(...kp(S)),p.push(...kp(x))}const y=[];if(m)l&&y.push(as(w,1,1));else{const[x,S,k]=Y_(n,i,t,w,e);k||y.push(...kp(S)),y.push(as(x,1,l))}const v=oa(t,i,[jn("sampleSourceLoader"),dn({from:"stack",target:w}),...y,...p,as(w),_==="fn"&&xr((x,S,{a:k})=>r(x,k),1),s&&xr(uT),jn("sampleSourceUpward",g)],e,s);return $h(n,[v]),Object.assign(v.meta,a,{joint:1}),i},kp=e=>[as(e),kr((t,n,{a:r})=>r,1)],Y_=(e,t,n,r,i)=>{const s=Dn(e),o=s?nr(e):$o(),a=$o(s);return s||jr({parent:e,node:[dn({from:"stack",target:o}),dn({from:"value",store:1,target:a})],family:{owners:[e,t,n],links:t},meta:{op:i},regional:1}),jn("sampleSource",a,o,r),[o,a,s]};var EM={},vT={exports:{}},_T={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=T;function IM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var SM=typeof Object.is=="function"?Object.is:IM,TM=Uo.useState,kM=Uo.useEffect,CM=Uo.useLayoutEffect,AM=Uo.useDebugValue;function RM(e,t){var n=t(),r=TM({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return CM(function(){i.value=n,i.getSnapshot=t,Cp(i)&&s({inst:i})},[e,n,t]),kM(function(){return Cp(i)&&s({inst:i}),e(function(){Cp(i)&&s({inst:i})})},[e]),AM(n),n}function Cp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!SM(e,n)}catch{return!0}}function PM(e,t){return t()}var NM=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?PM:RM;_T.useSyncExternalStore=Uo.useSyncExternalStore!==void 0?Uo.useSyncExternalStore:NM;vT.exports=_T;var wT=vT.exports;const jM=t0(wT);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh=T,bM=wT;function MM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var LM=typeof Object.is=="function"?Object.is:MM,DM=bM.useSyncExternalStore,OM=Fh.useRef,$M=Fh.useEffect,VM=Fh.useMemo,FM=Fh.useDebugValue;EM.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=OM(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=VM(function(){function l(g){if(!u){if(u=!0,d=g,g=r(g),i!==void 0&&o.hasValue){var m=o.value;if(i(m,g))return h=m}return h=g}if(m=h,LM(d,g))return m;var _=r(g);return i!==void 0&&i(m,_)?m:(d=g,h=_)}var u=!1,d,h,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=DM(e,s[0],s[1]);return $M(function(){o.hasValue=!0,o.value=a},[a]),FM(a),a};function UM(e,t){return t.displayName=e,t}function xT(e,t){const n=fu.unit(e);let r={};n?r={unit:e}:"@@unitShape"in e?typeof e["@@unitShape"]=="function"?r=e["@@unitShape"]():dm("expect @@unitShape to be a function"):r=e;const i=Array.isArray(r),s=pe.useRef({stale:1,justSubscribed:0,scope:t}),[o,a,l,u,d]=pe.useMemo(()=>{s.current.stale=1;const m=Array.isArray(r)?[]:{},_=[],w=[],p=[],y=[];for(const v in r){if(!{}.hasOwnProperty.call(r,v))continue;const x=r[v];fu.unit(x)||dm(`expect useUnit ${n?"argument":`value in key "${v}"`} to be a unit`),fu.event(x)||fu.effect(x)?(m[v]=t?Zb(x,{scope:t}):x,p.push(v),y.push(x)):(m[v]=null,_.push(v),w.push(x))}return[m,_,w,p,y]},[s,t,...Object.keys(r),...Object.values(r)]),h=pe.useRef({value:o,storeKeys:a,eventKeys:u,eventValues:d}),f=pe.useCallback(m=>{const _=s.current;return _.justSubscribed=1,cy({unit:l,fn:()=>{_.stale||(_.stale=1,m())},scope:t,batch:1})},[l,t,h,s]),g=pe.useCallback(()=>{const m=h.current,_=s.current;let w,p=0;const y=m.value,v=m.storeKeys,x=m.eventKeys,S=m.eventValues,k=t!==_.scope;if(_.stale||_.justSubscribed||k){p=!_.justSubscribed||k,w=i?[...o]:{...o},v.length===a.length&&x.length===u.length||(p=1);for(let I=0;I<a.length;I++){const A=HM(l[I],t),$=a[I];p||(p=v.includes($)?y[$]!==A:1),w[$]=A}for(let I=0;I<u.length;I++){const A=d[I],$=u[I];p||(p=x.includes($)?S[x.indexOf($)]!==A:1)}}return p&&(m.value=w),m.storeKeys=a,m.eventKeys=u,m.eventValues=d,_.stale=0,_.justSubscribed=!p,_.scope=t,n?m.value.unit:m.value},[f,l,d,t,h,s]);return BM(f,g,g)}function ET(e,t={},n){const{open:r,close:i,set:s}=xT({open:e.open,close:e.close,set:e.set},n),o=pe.useMemo(()=>({open:r,close:i,set:s}),[e,r]),a=pe.useRef({value:null,count:0});X_(()=>(o.open(a.current.value),()=>o.close(a.current.value)),[o]),((l,u)=>{if(l===u)return 1;if(typeof l=="object"&&l!==null&&typeof u=="object"&&u!==null){const d=Object.keys(l),h=Object.keys(u);if(d.length!==h.length)return 0;for(let f=0;f<d.length;f++){const g=d[f];if(l[g]!==u[g])return 0}return 1}return 0})(a.current.value,t)||(a.current.value=t,a.current.count+=1),X_(()=>{o.set(a.current.value)},[a.current.count])}function py(e){const t=pe.useContext(WM);return e&&!t&&dm("No scope found, consider adding <Provider> to app root"),t}function Te(e,t){return xT(e,py(t==null?void 0:t.forceScope))}function gy(e,t={},n){return ET(e,t,py(n==null?void 0:n.forceScope))}function IT(e,t){const n=t?e:e[0];var r;(o=>{if(!o)throw Error("expect first argument be an object")})(vo(r=n)||(o=>typeof o=="function")(r));let i=n.or;const s=n.and;if(s){const o=t?s:s[0];if(vo(o)&&"and"in o){const a=IT(s,t);e=a[0],i={...i,...a[1]}}else e=s}return[e,i]}function zM(e,t){const n=t&&vo(r=t[0])&&(r.and||r.or)?t:[{and:t}];var r;const[[i,s],o]=IT(n);let a,l={},u={},d=o;var h;return typeof i=="string"?(u={name:i},vo(h=s)&&"sid"in h||(l=s||{})):(f=>vo(f)&&("domain"in f||"defaultState"in f||"name"in f))(i)&&(u=i,l=i.defaultState||{},a=i.domain),{hook:e,domain:a,defaultState:l,mainConfig:u,maybeConfig:d}}function my(...e){return(({domain:t,defaultState:n,hook:r,mainConfig:i,maybeConfig:s})=>{function o(m){return r(o,m,py()),null}const a=hm({or:s,and:i}),l=`${t?`${t.compositeName.fullName}/`:""}${a.name||"gate"}`,u=F({name:`${l}.set`,sid:a.sid?`${a.sid}|set`:void 0}),d=F({name:`${l}.open`,sid:a.sid?`${a.sid}|open`:void 0}),h=F({name:`${l}.close`,sid:a.sid?`${a.sid}|close`:void 0}),f=te(!1,{name:`${l}.status`,serialize:"ignore"}).on(d,()=>!0).on(h,()=>!1),g=te(n,{name:`${l}.state`,sid:a.sid}).on(u,(m,_)=>_).on(d,(m,_)=>_).reset(h);if(t){const{hooks:m}=t;Do({target:[m.store,m.store,m.event,m.event,m.event],params:[f,g,d,h,u]})}return o.open=d,o.close=h,o.status=f,o.state=g,o.set=u,UM(`Gate:${l}`,o)})(zM(ET,e))}const dm=e=>{throw Error(e)},X_=typeof window<"u"?pe.useLayoutEffect:pe.useEffect,{useSyncExternalStore:BM}=jM,HM=(e,t)=>t?t.getState(e):e.getState(),WM=pe.createContext(null),vo=e=>typeof e=="object"&&e!==null,hm=(e,t={})=>(vo(e)&&(hm(e.or,t),(n=>{for(const s in n)i=s,(o=>o===void 0)(r=n[s])||i==="or"||i==="and"||(t[i]=r);var r,i})(e),hm(e.and,t)),t),qM={currentSong:null,loaded:!1,state:null},GM={currentTime:0,duration:0,isSliding:!1,lastRangeValue:null},QM={currentSongIndex:null,songs:[],name:null,url:null,icon:null,shuffle:!1,willGoToPrevTrack:!0},KM={lyrics:[],currentLyricIndex:0},YM=5;var lt=(e=>(e[e.noloop=0]="noloop",e[e.loopall=1]="loopall",e[e.loopone=2]="loopone",e))(lt||{});const ST=F(),TT=F(),yy=F(),kT=F(),tn=te(GM);j({clock:ST,source:tn,fn:(e,t)=>({...e,currentTime:t}),target:tn});j({clock:TT,source:tn,fn:(e,t)=>({...e,duration:t}),target:tn});j({clock:yy,source:tn,fn:(e,t)=>(console.log({lastRangeValue:t}),{...e,lastRangeValue:t}),target:tn});j({clock:kT,source:tn,fn:(e,t)=>({...e,isSliding:t}),target:tn});const XM=()=>Te(tn),JM=({queue:e,loop:t})=>{const{currentSongIndex:n,songs:r}=e;console.log(t);const i=n!==null?n+1:null;return t===lt.loopone?e:typeof i=="number"&&i>r.length-1?t===lt.noloop?e:t===lt.loopall?{...e,currentSongIndex:0}:e:{...e,currentSongIndex:i}},ZM=e=>{let t=lt.noloop;return e===lt.noloop&&(t=lt.loopall),e===lt.loopall&&(t=lt.loopone),t},Uh=F(),aa=F(),CT=F(),AT=F(),ki=te(QM),Ll=te(lt.noloop);j({clock:AT,source:ki,fn:(e,{queue:t})=>t??e,target:ki});j({clock:Uh,source:{queue:ki,loop:Ll},fn:JM,target:ki});j({clock:Uh,source:Ll,filter:e=>e===lt.loopone,target:aa});j({clock:CT,source:Ll,fn:ZM,target:Ll});cy({unit:ki,fn:e=>{const{currentSongIndex:t,songs:n}=e;if(t!==null){const r=n[t];Hh({song:r,queue:void 0})}}});const e4=()=>Te({queue:ki,loop:Ll}),vy=tn.map(({currentTime:e})=>e<5e3),t4=vy.map(e=>!e),_y=F(),RT=F();j({clock:aa,source:vy,filter:Boolean,target:_y});j({clock:aa,source:vy,filter:Boolean,target:_y});j({clock:aa,source:t4,filter:Boolean,target:RT});j({clock:_y,source:ki,filter:e=>!!e.currentSongIndex,fn:e=>({...e,currentSongIndex:e.currentSongIndex-1}),target:ki});j({clock:RT,source:tn,filter:Boolean,fn:e=>({...e,currentTime:0}),target:tn});const n4=({lyrics:e},t)=>{console.log(e,t);const{lyrics:n}=e,r=n.findIndex((i,s,o)=>{var a;return(((a=o[s+1])==null?void 0:a.startTime)??-1/0)>t});return r===e.currentLyricIndex?e:{...e,currentLyricIndex:r}},r4=({lyrics:e},t)=>{console.log("test",e,t);const{lyrics:n,currentLyricIndex:r}=e;return!n.length||isNaN(n[0].startTime)?e:n[r+1].startTime<t?{...e,currentLyricIndex:r+1}:e},PT=F(),NT=F(),wy=F(),xy=F(),jT=F(),br=te(KM),zh=te(!1);j({clock:PT,source:{shouldCalculateLyrics:zh,lyrics:br},filter:({shouldCalculateLyrics:e})=>e,fn:n4,target:br});j({clock:NT,source:{shouldCalculateLyrics:zh,lyrics:br},filter:({shouldCalculateLyrics:e})=>e,fn:r4,target:br});j({clock:wy,source:br,fn:(e,t)=>({...e,lyrics:t}),target:br});j({clock:xy,source:br,fn:(e,t)=>({...e,currentLyricIndex:t}),target:br});j({clock:jT,fn:e=>e,target:zh});const i4=()=>Te([br,zh]),s4=()=>{const[{loaded:e,state:t,currentSong:n},{currentTime:r}]=Te([$n,tn]);return{play:(i=n,s)=>i?!e||(i==null?void 0:i.id)!==(n==null?void 0:n.id)?Hh({song:i,queue:s}):t==="playing"?DT():Bh():null,next:()=>{console.log("next"),Uh()},previous:()=>{if(r<YM){aa();return}console.log(t),yy(0),xy(0)}}},Ey=te(!1),bT=F(),MT=F();j({clock:bT,fn:()=>!0,target:Ey});j({clock:MT,fn:()=>!1,target:Ey});const o4=()=>Te(Ey),Bh=F(),Hh=F(),LT=F(),DT=F(),$n=te(qM);j({clock:Bh,source:$n,fn:e=>({...e,state:"playing"}),target:$n});j({clock:DT,source:$n,fn:e=>({...e,state:"pause"}),target:$n});j({clock:LT,source:$n,fn:e=>({...e,loaded:!0}),target:[$n,Bh]});j({clock:Hh,target:AT});cy({unit:$n,fn:({currentSong:e,state:t})=>{e&&e.lyrics&&t==="loading"&&(console.log("reset"),wy(e.lyrics),xy(0))}});j({clock:Hh,source:$n,fn:(e,{song:t})=>({...e,state:"loading",loaded:!1,currentSong:t}),target:$n});const W={useSong:()=>Te($n),useControls:s4,queue:{useQueue:e4,next:Uh,previous:aa,changeLoopMode:CT},playblack:{usePlayback:XM,setCurrentTime:ST,setDuration:TT,setLastRangeValue:yy,setIsSliding:kT},fullscreen:{useFullScreen:o4,open:bT,close:MT},lyrics:{useLyrics:i4,calculateCurrentLyric:PT,nextCurrentLyric:NT,setLyrics:wy,setShouldCalculateLyrics:jT},events:{loaded:LT,play:Bh}},a4=()=>{const{state:e}=W.useSong(),{loop:t,queue:n}=W.queue.useQueue(),{lastRangeValue:r,isSliding:i}=W.playblack.usePlayback(),{next:s,previous:o}=W.useControls(),a=T.useRef(null),l=h=>{W.events.loaded(),W.playblack.setDuration(h.currentTarget.duration),W.playblack.setLastRangeValue(null)},u=h=>{i||(W.playblack.setCurrentTime(h.currentTarget.currentTime),W.lyrics.nextCurrentLyric(h.currentTarget.currentTime))},d=()=>{if(console.log("ended"),t===lt.noloop&&n.currentSongIndex===n.songs.length-1){o();return}s()};return T.useEffect(()=>{a.current&&Gb(r)&&!isNaN(r??0)&&(a.current.currentTime=+r)},[r]),T.useEffect(()=>{var h;a.current&&(e==="playing"?a.current.play():(h=a.current)==null||h.pause())},[e]),{audioRef:a,loop:t,handleEnded:d,handlePlaying:u,handleOnCanPlay:l}},l4=()=>{const{audioRef:e,loop:t,handleOnCanPlay:n,handlePlaying:r,handleEnded:i}=a4(),{currentSong:s}=W.useSong();return c.jsx("audio",{onEnded:i,src:s==null?void 0:s.songSrc,loop:t===lt.loopone,ref:e,onTimeUpdate:r,onCanPlay:n})};/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dl(){return Dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dl.apply(this,arguments)}var ii;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ii||(ii={}));const J_="popstate";function c4(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return fm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ld(i)}return d4(t,n,null,e)}function Re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Iy(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function u4(){return Math.random().toString(36).substr(2,8)}function Z_(e,t){return{usr:e.state,key:e.key,idx:t}}function fm(e,t,n,r){return n===void 0&&(n=null),Dl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?la(t):t,{state:n,key:t&&t.key||r||u4()})}function Ld(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function la(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function d4(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ii.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Dl({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=ii.Pop;let w=d(),p=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:p})}function f(w,p){a=ii.Push;let y=fm(_.location,w,p);n&&n(y,w),u=d()+1;let v=Z_(y,u),x=_.createHref(y);try{o.pushState(v,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(x)}s&&l&&l({action:a,location:_.location,delta:1})}function g(w,p){a=ii.Replace;let y=fm(_.location,w,p);n&&n(y,w),u=d();let v=Z_(y,u),x=_.createHref(y);o.replaceState(v,"",x),s&&l&&l({action:a,location:_.location,delta:0})}function m(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof w=="string"?w:Ld(w);return Re(p,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,p)}let _={get action(){return a},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(J_,h),l=w,()=>{i.removeEventListener(J_,h),l=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let p=m(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(w){return o.go(w)}};return _}var ew;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ew||(ew={}));function h4(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?la(t):t,i=Ol(r.pathname||"/",n);if(i==null)return null;let s=OT(e);f4(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=E4(s[a],S4(i));return o}function OT(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=mi([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),OT(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:w4(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of $T(s.path))i(s,o,l)}),t}function $T(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$T(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function f4(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:x4(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const p4=/^:\w+$/,g4=3,m4=2,y4=1,v4=10,_4=-2,tw=e=>e==="*";function w4(e,t){let n=e.split("/"),r=n.length;return n.some(tw)&&(r+=_4),t&&(r+=m4),n.filter(i=>!tw(i)).reduce((i,s)=>i+(p4.test(s)?g4:s===""?y4:v4),r)}function x4(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function E4(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Dd({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let h=a.route;s.push({params:r,pathname:mi([i,d.pathname]),pathnameBase:R4(mi([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=mi([i,d.pathnameBase]))}return s}function Dd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=I4(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:f,isOptional:g}=d;if(f==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const m=a[h];return g&&!m?u[f]=void 0:u[f]=T4(m||"",f),u},{}),pathname:s,pathnameBase:o,pattern:e}}function I4(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Iy(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function S4(e){try{return decodeURI(e)}catch(t){return Iy(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function T4(e,t){try{return decodeURIComponent(e)}catch(n){return Iy(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ol(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function k4(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?la(e):e;return{pathname:n?n.startsWith("/")?n:C4(n,t):t,search:P4(r),hash:N4(i)}}function C4(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ap(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function A4(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function VT(e,t){let n=A4(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function FT(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=la(e):(i=Dl({},e),Re(!i.pathname||!i.pathname.includes("?"),Ap("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),Ap("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),Ap("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else if(r){let h=t.length===0?[]:t[t.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h.pop();i.pathname=f.join("/")}a="/"+h.join("/")}else{let h=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?t[h]:"/"}let l=k4(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const mi=e=>e.join("/").replace(/\/\/+/g,"/"),R4=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),P4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,N4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function j4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const UT=["post","put","patch","delete"];new Set(UT);const b4=["get",...UT];new Set(b4);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $l(){return $l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$l.apply(this,arguments)}const Wh=T.createContext(null),zT=T.createContext(null),Li=T.createContext(null),qh=T.createContext(null),Di=T.createContext({outlet:null,matches:[],isDataRoute:!1}),BT=T.createContext(null);function M4(e,t){let{relative:n}=t===void 0?{}:t;ca()||Re(!1);let{basename:r,navigator:i}=T.useContext(Li),{hash:s,pathname:o,search:a}=Qh(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:mi([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ca(){return T.useContext(qh)!=null}function Ur(){return ca()||Re(!1),T.useContext(qh).location}function L4(e){ca()||Re(!1);let{pathname:t}=Ur();return T.useMemo(()=>Dd(e,t),[t,e])}function HT(e){T.useContext(Li).static||T.useLayoutEffect(e)}function Gh(){let{isDataRoute:e}=T.useContext(Di);return e?Y4():D4()}function D4(){ca()||Re(!1);let e=T.useContext(Wh),{basename:t,future:n,navigator:r}=T.useContext(Li),{matches:i}=T.useContext(Di),{pathname:s}=Ur(),o=JSON.stringify(VT(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return HT(()=>{a.current=!0}),T.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=FT(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:mi([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,o,s,e])}const O4=T.createContext(null);function $4(e){let t=T.useContext(Di).outlet;return t&&T.createElement(O4.Provider,{value:e},t)}function Qh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(Li),{matches:i}=T.useContext(Di),{pathname:s}=Ur(),o=JSON.stringify(VT(i,r.v7_relativeSplatPath));return T.useMemo(()=>FT(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function V4(e,t){return F4(e,t)}function F4(e,t,n,r){ca()||Re(!1);let{navigator:i}=T.useContext(Li),{matches:s}=T.useContext(Di),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ur(),d;if(t){var h;let w=typeof t=="string"?la(t):t;l==="/"||(h=w.pathname)!=null&&h.startsWith(l)||Re(!1),d=w}else d=u;let f=d.pathname||"/",g=l==="/"?f:f.slice(l.length)||"/",m=h4(e,{pathname:g}),_=W4(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:mi([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:mi([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return t&&_?T.createElement(qh.Provider,{value:{location:$l({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ii.Pop}},_):_}function U4(){let e=K4(),t=j4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,s)}const z4=T.createElement(U4,null);class B4 extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(Di.Provider,{value:this.props.routeContext},T.createElement(BT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function H4(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Wh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Di.Provider,{value:t},r)}function W4(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));d>=0||Re(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.loader&&h.route.id&&n.loaderData[h.route.id]===void 0&&(!n.errors||n.errors[h.route.id]===void 0)){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}return o.reduceRight((d,h,f)=>{let g,m=!1,_=null,w=null;n&&(g=a&&h.route.id?a[h.route.id]:void 0,_=h.route.errorElement||z4,l&&(u<0&&f===0?(X4("route-fallback",!1),m=!0,w=null):u===f&&(m=!0,w=h.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,f+1)),y=()=>{let v;return g?v=_:m?v=w:h.route.Component?v=T.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=d,T.createElement(H4,{match:h,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?T.createElement(B4,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:y(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):y()},null)}var WT=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(WT||{}),Od=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Od||{});function q4(e){let t=T.useContext(Wh);return t||Re(!1),t}function G4(e){let t=T.useContext(zT);return t||Re(!1),t}function Q4(e){let t=T.useContext(Di);return t||Re(!1),t}function qT(e){let t=Q4(),n=t.matches[t.matches.length-1];return n.route.id||Re(!1),n.route.id}function K4(){var e;let t=T.useContext(BT),n=G4(Od.UseRouteError),r=qT(Od.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Y4(){let{router:e}=q4(WT.UseNavigateStable),t=qT(Od.UseNavigateStable),n=T.useRef(!1);return HT(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,$l({fromRouteId:t},s)))},[e,t])}const nw={};function X4(e,t,n){!t&&!nw[e]&&(nw[e]=!0)}function J4(e){return $4(e.context)}function so(e){Re(!1)}function Z4(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ii.Pop,navigator:s,static:o=!1,future:a}=e;ca()&&Re(!1);let l=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:s,static:o,future:$l({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=la(r));let{pathname:d="/",search:h="",hash:f="",state:g=null,key:m="default"}=r,_=T.useMemo(()=>{let w=Ol(d,l);return w==null?null:{location:{pathname:w,search:h,hash:f,state:g,key:m},navigationType:i}},[l,d,h,f,g,m,i]);return _==null?null:T.createElement(Li.Provider,{value:u},T.createElement(qh.Provider,{children:n,value:_}))}function GT(e){let{children:t,location:n}=e;return V4(pm(t),n)}new Promise(()=>{});function pm(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let s=[...t,i];if(r.type===T.Fragment){n.push.apply(n,pm(r.props.children,s));return}r.type!==so&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=pm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $d(){return $d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$d.apply(this,arguments)}function QT(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function eL(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tL(e,t){return e.button===0&&(!t||t==="_self")&&!eL(e)}function gm(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function nL(e,t){let n=gm(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const rL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],iL=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],sL=T.createContext({isTransitioning:!1}),oL="startTransition",rw=bP[oL];function aL(e){let{basename:t,children:n,future:r,window:i}=e,s=T.useRef();s.current==null&&(s.current=c4({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=T.useCallback(h=>{u&&rw?rw(()=>l(h)):l(h)},[l,u]);return T.useLayoutEffect(()=>o.listen(d),[o,d]),T.createElement(Z4,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const lL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ua=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:h}=t,f=QT(t,rL),{basename:g}=T.useContext(Li),m,_=!1;if(typeof u=="string"&&cL.test(u)&&(m=u,lL))try{let v=new URL(window.location.href),x=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=Ol(x.pathname,g);x.origin===v.origin&&S!=null?u=S+x.search+x.hash:_=!0}catch{}let w=M4(u,{relative:i}),p=hL(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:h});function y(v){r&&r(v),v.defaultPrevented||p(v)}return T.createElement("a",$d({},f,{href:m||w,onClick:_||s?r:y,ref:n,target:l}))}),uL=T.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=t,h=QT(t,iL),f=Qh(l,{relative:h.relative}),g=Ur(),m=T.useContext(zT),{navigator:_}=T.useContext(Li),w=m!=null&&fL(f)&&u===!0,p=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,y=g.pathname,v=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(y=y.toLowerCase(),v=v?v.toLowerCase():null,p=p.toLowerCase());const x=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let S=y===p||!o&&y.startsWith(p)&&y.charAt(x)==="/",k=v!=null&&(v===p||!o&&v.startsWith(p)&&v.charAt(p.length)==="/"),I={isActive:S,isPending:k,isTransitioning:w},A=S?r:void 0,$;typeof s=="function"?$=s(I):$=[s,S?"active":null,k?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let B=typeof a=="function"?a(I):a;return T.createElement(ua,$d({},h,{"aria-current":A,className:$,ref:n,style:B,to:l,unstable_viewTransition:u}),typeof d=="function"?d(I):d)});var mm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mm||(mm={}));var iw;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(iw||(iw={}));function dL(e){let t=T.useContext(Wh);return t||Re(!1),t}function hL(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=Gh(),u=Ur(),d=Qh(e,{relative:o});return T.useCallback(h=>{if(tL(h,n)){h.preventDefault();let f=r!==void 0?r:Ld(u)===Ld(d);l(e,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,e,s,o,a])}function Sy(e){let t=T.useRef(gm(e)),n=T.useRef(!1),r=Ur(),i=T.useMemo(()=>nL(r.search,n.current?null:t.current),[r.search]),s=Gh(),o=T.useCallback((a,l)=>{const u=gm(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,l)},[s,i]);return[i,o]}function fL(e,t){t===void 0&&(t={});let n=T.useContext(sL);n==null&&Re(!1);let{basename:r}=dL(mm.useViewTransitionState),i=Qh(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Ol(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ol(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Dd(i.pathname,o)!=null||Dd(i.pathname,s)!=null}const J=E.button`
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

    &:hover {
        filter: brightness(0.9);
        background: ${({$background:e,theme:t})=>e?"":t.colors.lightHover};
    }
`,pL=E(J)`
    color: ${({isLiked:e,likeColor:t,theme:n})=>e?t:n.colors.textColor};
    filter: brightness(1.2);

    svg {
        width: 20px;
        height: 20px;
    }
`,ms={borderRadius:{mild:"9px",middle:"10px",big:"14px",huge:"5%"},colors:{brightness:1.1,pageTopButton:"#171717",skeleton:"#ffffff1f",playerDarkening:"#000000cb",textColor:"#fff",textColorOppiste:"#000",hover:"#ffffff14",pageBackground:"#101010",pageBackground2:"#191919",overlay:"#0e0e0ed4",input:"#202020",border:"#92929257",sidebar:"#161616",lightHover:"#ffffff1f",darkHover:"#0000002b",modal:"#242629",shadow:"0 30px 30px #00000066",greyText:"#a2a2a2",blue:{main:"#75a8fa",action:"#5193ff",mild:"#1b2c4e",transparent:"#5394ff4f"},purple:{main:"#9332d1"},red:{text:"#ffb3b3",transparent:"#ff636314",main:"#d64040"}}},gL={borderRadius:{mild:"6px",middle:"10px",big:"14px",huge:"5%"},colors:{brightness:.7,pageTopButton:"#fff",skeleton:"#0000001a",playerDarkening:"#f1f1f1c9",textColor:"#000",textColorOppiste:"#fff",hover:"#73737314",pageBackground:"#fff",pageBackground2:"#f7f7f7",overlay:"#0e0e0ed4",input:"#f0f0f0",border:"#b6b6b657",sidebar:"#f1f1f1",lightHover:"#ffffff80",darkHover:"#0000002b",modal:"#fff",shadow:"0 35px 30px #00000040",greyText:"#a2a2a2",blue:{main:"#5275b5",action:"#3481fe",mild:"#dfeaff",transparent:"#5394ff4f"},purple:{main:"#9332d1"},red:{text:"#e15353",transparent:"#ff636314",main:"#ff6f6f"}}},Kh=({songId:e,likeColor:t=ms.colors.greyText,onClick:n,background:r,height:i,width:s="30px",...o})=>{const[a,l]=T.useState(!1);T.useEffect(()=>{},[]);const u=d=>{d.stopPropagation(),e&&(n==null||n(e)),l(h=>!h)};return c.jsx(pL,{...o,$width:s,$height:i,$background:r,className:"like-button",onClick:u,isLiked:a,likeColor:t,children:a?c.jsx(Ab,{}):c.jsx(ry,{})})},mL=E.img`
    height: 100%;
    object-fit: cover;
    /* transition: 0.4s; */
    /* opacity: ${({$coverLoaded:e})=>e?"1":"0"};
    transform: ${({$coverLoaded:e})=>e?"scale(1)":"scale(1.2)"}; */
`,yL=E.div`
    width: ${({$size:e})=>e??"var(--size)"};
    min-width: ${({$size:e})=>e??"var(--size)"};
    height: ${({$size:e})=>e??"var(--size)"};
    display: flex;
    justify-content: center;
    background: ${({$color1:e})=>e??"grey"};
    position: relative;
    border-radius: ${({$borderRadius:e})=>e};
    /* overflow: hidden; */

    img {
        border-radius: ${({$borderRadius:e})=>e};
        width: 100%;
    }

    .cover-icon {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 70%;
            height: 70%;
            opacity: 0.8;
            color: #fff;
        }
    }
`,vL=({src:e})=>{const[t,n]=T.useState(!1),r=()=>{n(!0)};return c.jsx(mL,{$coverLoaded:t,onLoad:r,loading:"lazy",src:e})},_L="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/music-icon-mohammed-jabir-ap.jpg",Ty=({src:e,color:t,children:n,size:r,fallbackIcon:i,borderRadius:s})=>c.jsxs(yL,{$borderRadius:s,$size:r,$color1:t,children:[e&&e!==_L?c.jsx(vL,{src:e}):c.jsx("div",{className:"cover-icon",children:i}),c.jsx("div",{className:"cover-children",children:n})]}),ky=ms.borderRadius.mild,Yh=e=>c.jsx(Ty,{fallbackIcon:c.jsx(mo,{}),...e,borderRadius:e.borderRadius??ky});var sw={};/**
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
 */const KT=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},wL=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},YT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[d],n[h],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(KT(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):wL(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new xL;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class xL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EL=function(e){const t=KT(e);return YT.encodeByteArray(t,!0)},Vd=function(e){return EL(e).replace(/\./g,"")},XT=function(e){try{return YT.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function IL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SL=()=>IL().__FIREBASE_DEFAULTS__,TL=()=>{if(typeof process>"u"||typeof sw>"u")return;const e=sw.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},kL=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&XT(e[1]);return t&&JSON.parse(t)},Cy=()=>{try{return SL()||TL()||kL()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},JT=e=>{var t,n;return(n=(t=Cy())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},CL=e=>{const t=JT(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ZT=()=>{var e;return(e=Cy())===null||e===void 0?void 0:e.config},ek=e=>{var t;return(t=Cy())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class AL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function RL(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Vd(JSON.stringify(n)),Vd(JSON.stringify(o)),a].join(".")}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function NL(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function jL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bL(){const e=Tt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ML(){try{return typeof indexedDB=="object"}catch{return!1}}function LL(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const DL="FirebaseError";class hr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=DL,Object.setPrototypeOf(this,hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_c.prototype.create)}}class _c{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?OL(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hr(i,a,r)}}function OL(e,t){return e.replace($L,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const $L=/\{\$([^}]+)}/g;function VL(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Vl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(ow(s)&&ow(o)){if(!Vl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ow(e){return e!==null&&typeof e=="object"}/**
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
 */function wc(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ua(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function za(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function FL(e,t){const n=new UL(e,t);return n.subscribe.bind(n)}class UL{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zL(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Rp),i.error===void 0&&(i.error=Rp),i.complete===void 0&&(i.complete=Rp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zL(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Rp(){}/**
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
 */function We(e){return e&&e._delegate?e._delegate:e}class Ci{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ki="[DEFAULT]";/**
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
 */class BL{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new AL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(WL(t))try{this.getOrInitializeService({instanceIdentifier:Ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ki){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ki){return this.instances.has(t)}getOptions(t=Ki){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HL(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ki){return this.component?this.component.multipleInstances?t:Ki:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HL(e){return e===Ki?void 0:e}function WL(e){return e.instantiationMode==="EAGER"}/**
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
 */class qL{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new BL(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ie||(ie={}));const GL={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},QL=ie.INFO,KL={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},YL=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=KL[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ay{constructor(t){this.name=t,this._logLevel=QL,this._logHandler=YL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ie))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?GL[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...t),this._logHandler(this,ie.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...t),this._logHandler(this,ie.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...t),this._logHandler(this,ie.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...t),this._logHandler(this,ie.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...t),this._logHandler(this,ie.ERROR,...t)}}const XL=(e,t)=>t.some(n=>e instanceof n);let aw,lw;function JL(){return aw||(aw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZL(){return lw||(lw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tk=new WeakMap,ym=new WeakMap,nk=new WeakMap,Pp=new WeakMap,Ry=new WeakMap;function eD(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(yi(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&tk.set(n,e)}).catch(()=>{}),Ry.set(t,e),t}function tD(e){if(ym.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ym.set(e,t)}let vm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ym.get(e);if(t==="objectStoreNames")return e.objectStoreNames||nk.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yi(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function nD(e){vm=e(vm)}function rD(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Np(this),t,...n);return nk.set(r,t.sort?t.sort():[t]),yi(r)}:ZL().includes(e)?function(...t){return e.apply(Np(this),t),yi(tk.get(this))}:function(...t){return yi(e.apply(Np(this),t))}}function iD(e){return typeof e=="function"?rD(e):(e instanceof IDBTransaction&&tD(e),XL(e,JL())?new Proxy(e,vm):e)}function yi(e){if(e instanceof IDBRequest)return eD(e);if(Pp.has(e))return Pp.get(e);const t=iD(e);return t!==e&&(Pp.set(e,t),Ry.set(t,e)),t}const Np=e=>Ry.get(e);function sD(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=yi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yi(o.result),l.oldVersion,l.newVersion,yi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const oD=["get","getKey","getAll","getAllKeys","count"],aD=["put","add","delete","clear"],jp=new Map;function cw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(jp.get(t))return jp.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=aD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return jp.set(t,s),s}nD(e=>({...e,get:(t,n,r)=>cw(t,n)||e.get(t,n,r),has:(t,n)=>!!cw(t,n)||e.has(t,n)}));/**
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
 */class lD{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cD(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _m="@firebase/app",uw="0.9.25";/**
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
 */const ys=new Ay("@firebase/app"),uD="@firebase/app-compat",dD="@firebase/analytics-compat",hD="@firebase/analytics",fD="@firebase/app-check-compat",pD="@firebase/app-check",gD="@firebase/auth",mD="@firebase/auth-compat",yD="@firebase/database",vD="@firebase/database-compat",_D="@firebase/functions",wD="@firebase/functions-compat",xD="@firebase/installations",ED="@firebase/installations-compat",ID="@firebase/messaging",SD="@firebase/messaging-compat",TD="@firebase/performance",kD="@firebase/performance-compat",CD="@firebase/remote-config",AD="@firebase/remote-config-compat",RD="@firebase/storage",PD="@firebase/storage-compat",ND="@firebase/firestore",jD="@firebase/firestore-compat",bD="firebase",MD="10.7.1";/**
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
 */const wm="[DEFAULT]",LD={[_m]:"fire-core",[uD]:"fire-core-compat",[hD]:"fire-analytics",[dD]:"fire-analytics-compat",[pD]:"fire-app-check",[fD]:"fire-app-check-compat",[gD]:"fire-auth",[mD]:"fire-auth-compat",[yD]:"fire-rtdb",[vD]:"fire-rtdb-compat",[_D]:"fire-fn",[wD]:"fire-fn-compat",[xD]:"fire-iid",[ED]:"fire-iid-compat",[ID]:"fire-fcm",[SD]:"fire-fcm-compat",[TD]:"fire-perf",[kD]:"fire-perf-compat",[CD]:"fire-rc",[AD]:"fire-rc-compat",[RD]:"fire-gcs",[PD]:"fire-gcs-compat",[ND]:"fire-fst",[jD]:"fire-fst-compat","fire-js":"fire-js",[bD]:"fire-js-all"};/**
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
 */const Fd=new Map,xm=new Map;function DD(e,t){try{e.container.addComponent(t)}catch(n){ys.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function vs(e){const t=e.name;if(xm.has(t))return ys.debug(`There were multiple attempts to register component ${t}.`),!1;xm.set(t,e);for(const n of Fd.values())DD(n,e);return!0}function Xh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const OD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vi=new _c("app","Firebase",OD);/**
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
 */class $D{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ps=MD;function rk(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:wm,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw vi.create("bad-app-name",{appName:String(i)});if(n||(n=ZT()),!n)throw vi.create("no-options");const s=Fd.get(i);if(s){if(Vl(n,s.options)&&Vl(r,s.config))return s;throw vi.create("duplicate-app",{appName:i})}const o=new qL(i);for(const l of xm.values())o.addComponent(l);const a=new $D(n,r,o);return Fd.set(i,a),a}function ik(e=wm){const t=Fd.get(e);if(!t&&e===wm&&ZT())return rk();if(!t)throw vi.create("no-app",{appName:e});return t}function rr(e,t,n){var r;let i=(r=LD[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ys.warn(a.join(" "));return}vs(new Ci(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const VD="firebase-heartbeat-database",FD=1,Fl="firebase-heartbeat-store";let bp=null;function sk(){return bp||(bp=sD(VD,FD,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Fl)}}}).catch(e=>{throw vi.create("idb-open",{originalErrorMessage:e.message})})),bp}async function UD(e){try{return await(await sk()).transaction(Fl).objectStore(Fl).get(ok(e))}catch(t){if(t instanceof hr)ys.warn(t.message);else{const n=vi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ys.warn(n.message)}}}async function dw(e,t){try{const r=(await sk()).transaction(Fl,"readwrite");await r.objectStore(Fl).put(t,ok(e)),await r.done}catch(n){if(n instanceof hr)ys.warn(n.message);else{const r=vi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ys.warn(r.message)}}}function ok(e){return`${e.name}!${e.options.appId}`}/**
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
 */const zD=1024,BD=30*24*60*60*1e3;class HD{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hw();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=BD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hw(),{heartbeatsToSend:r,unsentEntries:i}=WD(this._heartbeatsCache.heartbeats),s=Vd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function hw(){return new Date().toISOString().substring(0,10)}function WD(e,t=zD){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fw(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fw(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qD{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ML()?LL().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await UD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dw(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dw(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function fw(e){return Vd(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function GD(e){vs(new Ci("platform-logger",t=>new lD(t),"PRIVATE")),vs(new Ci("heartbeat",t=>new HD(t),"PRIVATE")),rr(_m,uw,e),rr(_m,uw,"esm2017"),rr("fire-js","")}GD("");var QD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Py=Py||{},Y=QD||self;function Jh(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function xc(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function KD(e){return Object.prototype.hasOwnProperty.call(e,Mp)&&e[Mp]||(e[Mp]=++YD)}var Mp="closure_uid_"+(1e9*Math.random()>>>0),YD=0;function XD(e,t,n){return e.call.apply(e.bind,arguments)}function JD(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function xt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=XD:xt=JD,xt.apply(null,arguments)}function gu(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function nt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Oi(){this.s=this.s,this.o=this.o}var ZD=0;Oi.prototype.s=!1;Oi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ZD!=0)&&KD(this)};Oi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ak=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ny(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function pw(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Jh(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Et(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var e3=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};Y.addEventListener("test",n,t),Y.removeEventListener("test",n,t)}catch{}return e}();function Ul(e){return/^[\s\xa0]*$/.test(e)}function Zh(){var e=Y.navigator;return e&&(e=e.userAgent)?e:""}function Kn(e){return Zh().indexOf(e)!=-1}function jy(e){return jy[" "](e),e}jy[" "]=function(){};function t3(e,t){var n=G3;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var n3=Kn("Opera"),zo=Kn("Trident")||Kn("MSIE"),lk=Kn("Edge"),Em=lk||zo,ck=Kn("Gecko")&&!(Zh().toLowerCase().indexOf("webkit")!=-1&&!Kn("Edge"))&&!(Kn("Trident")||Kn("MSIE"))&&!Kn("Edge"),r3=Zh().toLowerCase().indexOf("webkit")!=-1&&!Kn("Edge");function uk(){var e=Y.document;return e?e.documentMode:void 0}var Im;e:{var Lp="",Dp=function(){var e=Zh();if(ck)return/rv:([^\);]+)(\)|;)/.exec(e);if(lk)return/Edge\/([\d\.]+)/.exec(e);if(zo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(r3)return/WebKit\/(\S+)/.exec(e);if(n3)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Dp&&(Lp=Dp?Dp[1]:""),zo){var Op=uk();if(Op!=null&&Op>parseFloat(Lp)){Im=String(Op);break e}}Im=Lp}var Sm;if(Y.document&&zo){var gw=uk();Sm=gw||parseInt(Im,10)||void 0}else Sm=void 0;var i3=Sm;function zl(e,t){if(Et.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ck){e:{try{jy(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:s3[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&zl.$.h.call(this)}}nt(zl,Et);var s3={2:"touch",3:"pen",4:"mouse"};zl.prototype.h=function(){zl.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ec="closure_listenable_"+(1e6*Math.random()|0),o3=0;function a3(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++o3,this.fa=this.ia=!1}function ef(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function by(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function l3(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function dk(e){const t={};for(const n in e)t[n]=e[n];return t}const mw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hk(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<mw.length;s++)n=mw[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function tf(e){this.src=e,this.g={},this.h=0}tf.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=km(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new a3(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Tm(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=ak(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ef(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function km(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var My="closure_lm_"+(1e6*Math.random()|0),$p={};function fk(e,t,n,r,i){if(r&&r.once)return gk(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)fk(e,t[s],n,r,i);return null}return n=Oy(n),e&&e[Ec]?e.O(t,n,xc(r)?!!r.capture:!!r,i):pk(e,t,n,!1,r,i)}function pk(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=xc(i)?!!i.capture:!!i,a=Dy(e);if(a||(e[My]=a=new tf(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=c3(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)e3||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(yk(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function c3(){function e(n){return t.call(e.src,e.listener,n)}const t=u3;return e}function gk(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)gk(e,t[s],n,r,i);return null}return n=Oy(n),e&&e[Ec]?e.P(t,n,xc(r)?!!r.capture:!!r,i):pk(e,t,n,!0,r,i)}function mk(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)mk(e,t[s],n,r,i);else r=xc(r)?!!r.capture:!!r,n=Oy(n),e&&e[Ec]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=km(s,n,r,i),-1<n&&(ef(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Dy(e))&&(t=e.g[t.toString()],e=-1,t&&(e=km(t,n,r,i)),(n=-1<e?t[e]:null)&&Ly(n))}function Ly(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ec])Tm(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(yk(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Dy(t))?(Tm(n,e),n.h==0&&(n.src=null,t[My]=null)):ef(e)}}}function yk(e){return e in $p?$p[e]:$p[e]="on"+e}function u3(e,t){if(e.fa)e=!0;else{t=new zl(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ly(e),e=n.call(r,t)}return e}function Dy(e){return e=e[My],e instanceof tf?e:null}var Vp="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oy(e){return typeof e=="function"?e:(e[Vp]||(e[Vp]=function(t){return e.handleEvent(t)}),e[Vp])}function tt(){Oi.call(this),this.i=new tf(this),this.S=this,this.J=null}nt(tt,Oi);tt.prototype[Ec]=!0;tt.prototype.removeEventListener=function(e,t,n,r){mk(this,e,t,n,r)};function dt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Et(t,e);else if(t instanceof Et)t.target=t.target||e;else{var i=t;t=new Et(r,e),hk(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=mu(o,r,!0,t)&&i}if(o=t.g=e,i=mu(o,r,!0,t)&&i,i=mu(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=mu(o,r,!1,t)&&i}tt.prototype.N=function(){if(tt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ef(n[r]);delete e.g[t],e.h--}}this.J=null};tt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};tt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function mu(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Tm(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var $y=Y.JSON.stringify;class d3{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function h3(){var e=Vy;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class f3{constructor(){this.h=this.g=null}add(t,n){const r=vk.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var vk=new d3(()=>new p3,e=>e.reset());class p3{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function g3(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function m3(e){Y.setTimeout(()=>{throw e},0)}let Bl,Hl=!1,Vy=new f3,_k=()=>{const e=Y.Promise.resolve(void 0);Bl=()=>{e.then(y3)}};var y3=()=>{for(var e;e=h3();){try{e.h.call(e.g)}catch(n){m3(n)}var t=vk;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Hl=!1};function nf(e,t){tt.call(this),this.h=e||1,this.g=t||Y,this.j=xt(this.qb,this),this.l=Date.now()}nt(nf,tt);M=nf.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),dt(this,"tick"),this.ga&&(Fy(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fy(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}M.N=function(){nf.$.N.call(this),Fy(this),delete this.g};function Uy(e,t,n){if(typeof e=="function")n&&(e=xt(e,n));else if(e&&typeof e.handleEvent=="function")e=xt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:Y.setTimeout(e,t||0)}function wk(e){e.g=Uy(()=>{e.g=null,e.i&&(e.i=!1,wk(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class v3 extends Oi{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:wk(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wl(e){Oi.call(this),this.h=e,this.g={}}nt(Wl,Oi);var yw=[];function xk(e,t,n,r){Array.isArray(n)||(n&&(yw[0]=n.toString()),n=yw);for(var i=0;i<n.length;i++){var s=fk(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ek(e){by(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ly(t)},e),e.g={}}Wl.prototype.N=function(){Wl.$.N.call(this),Ek(this)};Wl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rf(){this.g=!0}rf.prototype.Ea=function(){this.g=!1};function _3(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var d=u[0];u=u[1];var h=d.split("_");o=2<=h.length&&h[1]=="type"?o+(d+"="+u+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function w3(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function oo(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+E3(e,n)+(r?" "+r:"")})}function x3(e,t){e.info(function(){return"TIMEOUT: "+t})}rf.prototype.info=function(){};function E3(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return $y(n)}catch{return t}}var Ns={},vw=null;function sf(){return vw=vw||new tt}Ns.Ta="serverreachability";function Ik(e){Et.call(this,Ns.Ta,e)}nt(Ik,Et);function ql(e){const t=sf();dt(t,new Ik(t))}Ns.STAT_EVENT="statevent";function Sk(e,t){Et.call(this,Ns.STAT_EVENT,e),this.stat=t}nt(Sk,Et);function Rt(e){const t=sf();dt(t,new Sk(t,e))}Ns.Ua="timingevent";function Tk(e,t){Et.call(this,Ns.Ua,e),this.size=t}nt(Tk,Et);function Ic(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){e()},t)}var of={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kk={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zy(){}zy.prototype.h=null;function _w(e){return e.h||(e.h=e.i())}function Ck(){}var Sc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function By(){Et.call(this,"d")}nt(By,Et);function Hy(){Et.call(this,"c")}nt(Hy,Et);var Cm;function af(){}nt(af,zy);af.prototype.g=function(){return new XMLHttpRequest};af.prototype.i=function(){return{}};Cm=new af;function Tc(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Wl(this),this.P=I3,e=Em?125:void 0,this.V=new nf(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ak}function Ak(){this.i=null,this.g="",this.h=!1}var I3=45e3,Rk={},Am={};M=Tc.prototype;M.setTimeout=function(e){this.P=e};function Rm(e,t,n){e.L=1,e.A=cf(Mr(t)),e.u=n,e.S=!0,Pk(e,null)}function Pk(e,t){e.G=Date.now(),kc(e),e.B=Mr(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),$k(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Ak,e.g=sC(e.l,n?t:null,!e.u),0<e.O&&(e.M=new v3(xt(e.Pa,e,e.g),e.O)),xk(e.U,e.g,"readystatechange",e.nb),t=e.I?dk(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ql(),_3(e.j,e.v,e.B,e.m,e.W,e.u)}M.nb=function(e){e=e.target;const t=this.M;t&&Xn(e)==3?t.l():this.Pa(e)};M.Pa=function(e){try{if(e==this.g)e:{const d=Xn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>d)&&(d!=3||Em||this.g&&(this.h.h||this.g.ja()||Iw(this.g)))){this.J||d!=4||t==7||(t==8||0>=h?ql(3):ql(2)),lf(this);var n=this.g.da();this.ca=n;t:if(Nk(this)){var r=Iw(this.g);e="";var i=r.length,s=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){es(this),al(this);var o="";break t}this.h.i=new Y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,w3(this.j,this.v,this.B,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ul(a)){var u=a;break t}}u=null}if(n=u)oo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pm(this,n);else{this.i=!1,this.s=3,Rt(12),es(this),al(this);break e}}this.S?(jk(this,d,o),Em&&this.i&&d==3&&(xk(this.U,this.V,"tick",this.mb),this.V.start())):(oo(this.j,this.m,o,null),Pm(this,o)),d==4&&es(this),this.i&&!this.J&&(d==4?tC(this.l,this):(this.i=!1,kc(this)))}else H3(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),es(this),al(this)}}}catch{}finally{}};function Nk(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function jk(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=S3(e,n),i==Am){t==4&&(e.s=4,Rt(14),r=!1),oo(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Rk){e.s=4,Rt(15),oo(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else oo(e.j,e.m,i,null),Pm(e,i);Nk(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Rt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yy(t),t.M=!0,Rt(11))):(oo(e.j,e.m,n,"[Invalid Chunked Response]"),es(e),al(e))}M.mb=function(){if(this.g){var e=Xn(this.g),t=this.g.ja();this.o<t.length&&(lf(this),jk(this,e,t),this.i&&e!=4&&kc(this))}};function S3(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Am:(n=Number(t.substring(n,r)),isNaN(n)?Rk:(r+=1,r+n>t.length?Am:(t=t.slice(r,r+n),e.o=r+n,t)))}M.cancel=function(){this.J=!0,es(this)};function kc(e){e.Y=Date.now()+e.P,bk(e,e.P)}function bk(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Ic(xt(e.lb,e),t)}function lf(e){e.C&&(Y.clearTimeout(e.C),e.C=null)}M.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(x3(this.j,this.B),this.L!=2&&(ql(),Rt(17)),es(this),this.s=2,al(this)):bk(this,this.Y-e)};function al(e){e.l.H==0||e.J||tC(e.l,e)}function es(e){lf(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Fy(e.V),Ek(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Pm(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Nm(n.i,e))){if(!e.K&&Nm(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Bd(n),ff(n);else break e;Ky(n),Rt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ic(xt(n.ib,n),6e3));if(1>=Uk(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ts(n,11)}else if((e.K||n.g==e)&&Bd(n),!Ul(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const d=u[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Wy(s,s.h),s.h=null))}if(r.F){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,we(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=iC(r,r.J?r.pa:null,r.Y),o.K){zk(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(lf(a),kc(a)),r.g=o}else Zk(r);0<n.j.length&&pf(n)}else u[0]!="stop"&&u[0]!="close"||ts(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ts(n,7):Qy(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ql(4)}catch{}}function T3(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Jh(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function k3(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Jh(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Mk(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Jh(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=k3(e),r=T3(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Lk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C3(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ls(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ls){this.h=e.h,Ud(this,e.j),this.s=e.s,this.g=e.g,zd(this,e.m),this.l=e.l;var t=e.i,n=new Gl;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ww(this,n),this.o=e.o}else e&&(t=String(e).match(Lk))?(this.h=!1,Ud(this,t[1]||"",!0),this.s=Ba(t[2]||""),this.g=Ba(t[3]||"",!0),zd(this,t[4]),this.l=Ba(t[5]||"",!0),ww(this,t[6]||"",!0),this.o=Ba(t[7]||"")):(this.h=!1,this.i=new Gl(null,this.h))}ls.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ha(t,xw,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ha(t,xw,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ha(n,n.charAt(0)=="/"?P3:R3,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ha(n,j3)),e.join("")};function Mr(e){return new ls(e)}function Ud(e,t,n){e.j=n?Ba(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function zd(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ww(e,t,n){t instanceof Gl?(e.i=t,b3(e.i,e.h)):(n||(t=Ha(t,N3)),e.i=new Gl(t,e.h))}function we(e,t,n){e.i.set(t,n)}function cf(e){return we(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ba(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ha(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,A3),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function A3(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var xw=/[#\/\?@]/g,R3=/[#\?:]/g,P3=/[#\?]/g,N3=/[#\?@]/g,j3=/#/g;function Gl(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function $i(e){e.g||(e.g=new Map,e.h=0,e.i&&C3(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}M=Gl.prototype;M.add=function(e,t){$i(this),this.i=null,e=da(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Dk(e,t){$i(e),t=da(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ok(e,t){return $i(e),t=da(e,t),e.g.has(t)}M.forEach=function(e,t){$i(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};M.ta=function(){$i(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};M.Z=function(e){$i(this);let t=[];if(typeof e=="string")Ok(this,e)&&(t=t.concat(this.g.get(da(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};M.set=function(e,t){return $i(this),this.i=null,e=da(this,e),Ok(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};M.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function $k(e,t,n){Dk(e,t),0<n.length&&(e.i=null,e.g.set(da(e,t),Ny(n)),e.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function da(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function b3(e,t){t&&!e.j&&($i(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Dk(this,r),$k(this,i,n))},e)),e.j=t}var M3=class{constructor(e,t){this.g=e,this.map=t}};function Vk(e){this.l=e||L3,Y.PerformanceNavigationTiming?(e=Y.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var L3=10;function Fk(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Uk(e){return e.h?1:e.g?e.g.size:0}function Nm(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Wy(e,t){e.g?e.g.add(t):e.h=t}function zk(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Vk.prototype.cancel=function(){if(this.i=Bk(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Bk(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ny(e.i)}var D3=class{stringify(e){return Y.JSON.stringify(e,void 0)}parse(e){return Y.JSON.parse(e,void 0)}};function O3(){this.g=new D3}function $3(e,t,n){const r=n||"";try{Mk(e,function(i,s){let o=i;xc(i)&&(o=$y(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function V3(e,t){const n=new rf;if(Y.Image){const r=new Image;r.onload=gu(yu,n,r,"TestLoadImage: loaded",!0,t),r.onerror=gu(yu,n,r,"TestLoadImage: error",!1,t),r.onabort=gu(yu,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=gu(yu,n,r,"TestLoadImage: timeout",!1,t),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function yu(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function uf(e){this.l=e.ec||null,this.j=e.ob||!1}nt(uf,zy);uf.prototype.g=function(){return new df(this.l,this.j)};uf.prototype.i=function(e){return function(){return e}}({});function df(e,t){tt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=qy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(df,tt);var qy=0;M=df.prototype;M.open=function(e,t){if(this.readyState!=qy)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ql(this)};M.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Y).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cc(this)),this.readyState=qy};M.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ql(this)),this.g&&(this.readyState=3,Ql(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Hk(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Hk(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}M.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Cc(this):Ql(this),this.readyState==3&&Hk(this)}};M.Za=function(e){this.g&&(this.response=this.responseText=e,Cc(this))};M.Ya=function(e){this.g&&(this.response=e,Cc(this))};M.ka=function(){this.g&&Cc(this)};function Cc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ql(e)}M.setRequestHeader=function(e,t){this.v.append(e,t)};M.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ql(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(df.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var F3=Y.JSON.parse;function Me(e){tt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Wk,this.L=this.M=!1}nt(Me,tt);var Wk="",U3=/^https?$/i,z3=["POST","PUT"];M=Me.prototype;M.Oa=function(e){this.M=e};M.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Cm.g(),this.C=this.u?_w(this.u):_w(Cm),this.g.onreadystatechange=xt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Ew(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&e instanceof Y.FormData,!(0<=ak(z3,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Qk(this),0<this.B&&((this.L=B3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.ua,this)):this.A=Uy(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Ew(this,s)}};function B3(e){return zo&&typeof e.timeout=="number"&&e.ontimeout!==void 0}M.ua=function(){typeof Py<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dt(this,"timeout"),this.abort(8))};function Ew(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,qk(e),hf(e)}function qk(e){e.F||(e.F=!0,dt(e,"complete"),dt(e,"error"))}M.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,dt(this,"complete"),dt(this,"abort"),hf(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hf(this,!0)),Me.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?Gk(this):this.kb())};M.kb=function(){Gk(this)};function Gk(e){if(e.h&&typeof Py<"u"&&(!e.C[1]||Xn(e)!=4||e.da()!=2)){if(e.v&&Xn(e)==4)Uy(e.La,0,e);else if(dt(e,"readystatechange"),Xn(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Lk)[1]||null;!i&&Y.self&&Y.self.location&&(i=Y.self.location.protocol.slice(0,-1)),r=!U3.test(i?i.toLowerCase():"")}n=r}if(n)dt(e,"complete"),dt(e,"success");else{e.m=6;try{var s=2<Xn(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",qk(e)}}finally{hf(e)}}}}function hf(e,t){if(e.g){Qk(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||dt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Qk(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Y.clearTimeout(e.A),e.A=null)}M.isActive=function(){return!!this.g};function Xn(e){return e.g?e.g.readyState:0}M.da=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),F3(t)}};function Iw(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Wk:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function H3(e){const t={};e=(e.g&&2<=Xn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Ul(e[r]))continue;var n=g3(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}l3(t,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Kk(e){let t="";return by(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Gy(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Kk(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):we(e,t,n))}function ja(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Yk(e){this.Ga=0,this.j=[],this.l=new rf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ja("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ja("baseRetryDelayMs",5e3,e),this.hb=ja("retryDelaySeedMs",1e4,e),this.eb=ja("forwardChannelMaxRetries",2,e),this.xa=ja("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Vk(e&&e.concurrentRequestLimit),this.Ja=new O3,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=Yk.prototype;M.ra=8;M.H=1;function Qy(e){if(Xk(e),e.H==3){var t=e.W++,n=Mr(e.I);if(we(n,"SID",e.K),we(n,"RID",t),we(n,"TYPE","terminate"),Ac(e,n),t=new Tc(e,e.l,t),t.L=2,t.A=cf(Mr(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon)try{n=Y.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&Y.Image&&(new Image().src=t.A,n=!0),n||(t.g=sC(t.l,null),t.g.ha(t.A)),t.G=Date.now(),kc(t)}rC(e)}function ff(e){e.g&&(Yy(e),e.g.cancel(),e.g=null)}function Xk(e){ff(e),e.u&&(Y.clearTimeout(e.u),e.u=null),Bd(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&Y.clearTimeout(e.m),e.m=null)}function pf(e){if(!Fk(e.i)&&!e.m){e.m=!0;var t=e.Na;Bl||_k(),Hl||(Bl(),Hl=!0),Vy.add(t,e),e.C=0}}function W3(e,t){return Uk(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ic(xt(e.Na,e,t),nC(e,e.C)),e.C++,!0)}M.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Tc(this,this.l,e);let s=this.s;if(this.U&&(s?(s=dk(s),hk(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Jk(this,i,t),n=Mr(this.I),we(n,"RID",e),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),Ac(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Kk(s)))+"&"+t:this.o&&Gy(n,this.o,s)),Wy(this.i,i),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",t),we(n,"SID","null"),i.aa=!0,Rm(i,n,null)):Rm(i,n,t),this.H=2}}else this.H==3&&(e?Sw(this,e):this.j.length==0||Fk(this.i)||Sw(this))};function Sw(e,t){var n;t?n=t.m:n=e.W++;const r=Mr(e.I);we(r,"SID",e.K),we(r,"RID",n),we(r,"AID",e.V),Ac(e,r),e.o&&e.s&&Gy(r,e.o,e.s),n=new Tc(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Jk(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Wy(e.i,n),Rm(n,r,t)}function Ac(e,t){e.na&&by(e.na,function(n,r){we(t,r,n)}),e.h&&Mk({},function(n,r){we(t,r,n)})}function Jk(e,t,n){n=Math.min(e.j.length,n);var r=e.h?xt(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const d=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{$3(d,o,"req"+u+"_")}catch{r&&r(d)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Zk(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Bl||_k(),Hl||(Bl(),Hl=!0),Vy.add(t,e),e.A=0}}function Ky(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ic(xt(e.Ma,e),nC(e,e.A)),e.A++,!0)}M.Ma=function(){if(this.u=null,eC(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ic(xt(this.jb,this),e)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Rt(10),ff(this),eC(this))};function Yy(e){e.B!=null&&(Y.clearTimeout(e.B),e.B=null)}function eC(e){e.g=new Tc(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Mr(e.wa);we(t,"RID","rpc"),we(t,"SID",e.K),we(t,"AID",e.V),we(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&we(t,"TO",e.qa),we(t,"TYPE","xmlhttp"),Ac(e,t),e.o&&e.s&&Gy(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=cf(Mr(t)),n.u=null,n.S=!0,Pk(n,e)}M.ib=function(){this.v!=null&&(this.v=null,ff(this),Ky(this),Rt(19))};function Bd(e){e.v!=null&&(Y.clearTimeout(e.v),e.v=null)}function tC(e,t){var n=null;if(e.g==t){Bd(e),Yy(e),e.g=null;var r=2}else if(Nm(e.i,t))n=t.F,zk(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=sf(),dt(r,new Tk(r,n)),pf(e)}else Zk(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&W3(e,t)||r==2&&Ky(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ts(e,5);break;case 4:ts(e,10);break;case 3:ts(e,6);break;default:ts(e,2)}}}function nC(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ts(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=xt(e.pb,e);n||(n=new ls("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Ud(n,"https"),cf(n)),V3(n.toString(),r)}else Rt(2);e.H=0,e.h&&e.h.za(t),rC(e),Xk(e)}M.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Rt(2)):(this.l.info("Failed to ping google.com"),Rt(1))};function rC(e){if(e.H=0,e.ma=[],e.h){const t=Bk(e.i);(t.length!=0||e.j.length!=0)&&(pw(e.ma,t),pw(e.ma,e.j),e.i.i.length=0,Ny(e.j),e.j.length=0),e.h.ya()}}function iC(e,t,n){var r=n instanceof ls?Mr(n):new ls(n);if(r.g!="")t&&(r.g=t+"."+r.g),zd(r,r.m);else{var i=Y.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ls(null);r&&Ud(s,r),t&&(s.g=t),i&&zd(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&we(r,n,t),we(r,"VER",e.ra),Ac(e,r),r}function sC(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new Me(new uf({ob:n})):new Me(e.va),t.Oa(e.J),t}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function oC(){}M=oC.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Hd(){if(zo&&!(10<=Number(i3)))throw Error("Environmental error: no available transport.")}Hd.prototype.g=function(e,t){return new nn(e,t)};function nn(e,t){tt.call(this),this.g=new Yk(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Ul(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ul(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ha(this)}nt(nn,tt);nn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Rt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=iC(e,null,e.Y),pf(e)};nn.prototype.close=function(){Qy(this.g)};nn.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=$y(e),e=n);t.j.push(new M3(t.fb++,e)),t.H==3&&pf(t)};nn.prototype.N=function(){this.g.h=null,delete this.j,Qy(this.g),delete this.g,nn.$.N.call(this)};function aC(e){By.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}nt(aC,By);function lC(){Hy.call(this),this.status=1}nt(lC,Hy);function ha(e){this.g=e}nt(ha,oC);ha.prototype.Ba=function(){dt(this.g,"a")};ha.prototype.Aa=function(e){dt(this.g,new aC(e))};ha.prototype.za=function(e){dt(this.g,new lC)};ha.prototype.ya=function(){dt(this.g,"b")};function q3(){this.blockSize=-1}function Vn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt(Vn,q3);Vn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Fp(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Vn.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Fp(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Fp(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Fp(this,r),i=0;break}}this.h=i,this.i+=t};Vn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function he(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var G3={};function Xy(e){return-128<=e&&128>e?t3(e,function(t){return new he([t|0],0>t?-1:0)}):new he([e|0],0>e?-1:0)}function Jn(e){if(isNaN(e)||!isFinite(e))return _o;if(0>e)return at(Jn(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=jm;return new he(t,0)}function cC(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return at(cC(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jn(Math.pow(t,8)),r=_o,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Jn(Math.pow(t,s)),r=r.R(s).add(Jn(o))):(r=r.R(n),r=r.add(Jn(o)))}return r}var jm=4294967296,_o=Xy(0),bm=Xy(1),Tw=Xy(16777216);M=he.prototype;M.ea=function(){if(hn(this))return-at(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:jm+r)*t,t*=jm}return e};M.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Er(this))return"0";if(hn(this))return"-"+at(this).toString(e);for(var t=Jn(Math.pow(e,6)),n=this,r="";;){var i=qd(n,t).g;n=Wd(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Er(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};M.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Er(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function hn(e){return e.h==-1}M.X=function(e){return e=Wd(this,e),hn(e)?-1:Er(e)?0:1};function at(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new he(n,~e.h).add(bm)}M.abs=function(){return hn(this)?at(this):this};M.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new he(n,n[n.length-1]&-2147483648?-1:0)};function Wd(e,t){return e.add(at(t))}M.R=function(e){if(Er(this)||Er(e))return _o;if(hn(this))return hn(e)?at(this).R(at(e)):at(at(this).R(e));if(hn(e))return at(this.R(at(e)));if(0>this.X(Tw)&&0>e.X(Tw))return Jn(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,vu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,vu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,vu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,vu(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new he(n,0)};function vu(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ba(e,t){this.g=e,this.h=t}function qd(e,t){if(Er(t))throw Error("division by zero");if(Er(e))return new ba(_o,_o);if(hn(e))return t=qd(at(e),t),new ba(at(t.g),at(t.h));if(hn(t))return t=qd(e,at(t)),new ba(at(t.g),t.h);if(30<e.g.length){if(hn(e)||hn(t))throw Error("slowDivide_ only works with positive integers.");for(var n=bm,r=t;0>=r.X(e);)n=kw(n),r=kw(r);var i=$s(n,1),s=$s(r,1);for(r=$s(r,2),n=$s(n,2);!Er(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=$s(r,1),n=$s(n,1)}return t=Wd(e,i.R(t)),new ba(i,t)}for(i=_o;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Jn(n),o=s.R(t);hn(o)||0<o.X(e);)n-=r,s=Jn(n),o=s.R(t);Er(s)&&(s=bm),i=i.add(s),e=Wd(e,o)}return new ba(i,e)}M.gb=function(e){return qd(this,e).h};M.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new he(n,this.h&e.h)};M.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new he(n,this.h|e.h)};M.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new he(n,this.h^e.h)};function kw(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new he(n,e.h)}function $s(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new he(i,e.h)}Hd.prototype.createWebChannel=Hd.prototype.g;nn.prototype.send=nn.prototype.u;nn.prototype.open=nn.prototype.m;nn.prototype.close=nn.prototype.close;of.NO_ERROR=0;of.TIMEOUT=8;of.HTTP_ERROR=6;kk.COMPLETE="complete";Ck.EventType=Sc;Sc.OPEN="a";Sc.CLOSE="b";Sc.ERROR="c";Sc.MESSAGE="d";tt.prototype.listen=tt.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;Vn.prototype.digest=Vn.prototype.l;Vn.prototype.reset=Vn.prototype.reset;Vn.prototype.update=Vn.prototype.j;he.prototype.add=he.prototype.add;he.prototype.multiply=he.prototype.R;he.prototype.modulo=he.prototype.gb;he.prototype.compare=he.prototype.X;he.prototype.toNumber=he.prototype.ea;he.prototype.toString=he.prototype.toString;he.prototype.getBits=he.prototype.D;he.fromNumber=Jn;he.fromString=cC;var Q3=function(){return new Hd},K3=function(){return sf()},Up=of,Y3=kk,X3=Ns,Cw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_u=Ck,J3=Me,Z3=Vn,wo=he;const Aw="@firebase/firestore";/**
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
 */class Dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
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
 */let fa="10.7.0";/**
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
 */const _s=new Ay("@firebase/firestore");function Ma(){return _s.logLevel}function V(e,...t){if(_s.logLevel<=ie.DEBUG){const n=t.map(Jy);_s.debug(`Firestore (${fa}): ${e}`,...n)}}function Lr(e,...t){if(_s.logLevel<=ie.ERROR){const n=t.map(Jy);_s.error(`Firestore (${fa}): ${e}`,...n)}}function Kl(e,...t){if(_s.logLevel<=ie.WARN){const n=t.map(Jy);_s.warn(`Firestore (${fa}): ${e}`,...n)}}function Jy(e){if(typeof e=="string")return e;try{/**
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
 */function Q(e="Unexpected state"){const t=`FIRESTORE (${fa}) INTERNAL ASSERTION FAILED: `+e;throw Lr(t),new Error(t)}function me(e,t){e||Q()}function Z(e,t){return e}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends hr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class eO{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class tO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class nO{constructor(t){this.t=t,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Cr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Cr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Cr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new eO(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return me(t===null||typeof t=="string"),new Dt(t)}}class rO{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class iO{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new rO(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sO{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oO{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new sO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function aO(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class uC{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=aO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function ce(e,t){return e<t?-1:e>t?1:0}function Bo(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Qe{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Qe.fromMillis(Date.now())}static fromDate(t){return Qe.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ce(this.nanoseconds,t.nanoseconds):ce(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(t){this.timestamp=t}static fromTimestamp(t){return new X(t)}static min(){return new X(new Qe(0,0))}static max(){return new X(new Qe(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Yl{constructor(t,n,r){n===void 0?n=0:n>t.length&&Q(),r===void 0?r=t.length-n:r>t.length-n&&Q(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Yl.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Yl?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class xe extends Yl{construct(t,n,r){return new xe(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const lO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Yl{construct(t,n,r){return new ct(t,n,r)}static isValidIdentifier(t){return lO.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class z{constructor(t){this.path=t}static fromPath(t){return new z(xe.fromString(t))}static fromName(t){return new z(xe.fromString(t).popFirst(5))}static empty(){return new z(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&xe.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return xe.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new z(new xe(t.slice()))}}function cO(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new Ai(i,z.empty(),t)}function uO(e){return new Ai(e.readTime,e.key,-1)}class Ai{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ai(X.min(),z.empty(),-1)}static max(){return new Ai(X.max(),z.empty(),-1)}}function dO(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=z.comparator(e.documentKey,t.documentKey),n!==0?n:ce(e.largestBatchId,t.largestBatchId))}/**
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
 */const hO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Rc(e){if(e.code!==C.FAILED_PRECONDITION||e.message!==hO)throw e;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):P.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):P.reject(n)}static resolve(t){return new P((n,r)=>{n(t)})}static reject(t){return new P((n,r)=>{r(t)})}static waitFor(t){return new P((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=P.resolve(!1);for(const r of t)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new P((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(d=>{o[u]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(t,n){return new P((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Pc(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Zy{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Zy._e=-1;function gf(e){return e==null}function Gd(e){return e===0&&1/e==-1/0}function pO(e){return typeof e=="number"&&Number.isInteger(e)&&!Gd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Rw(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function js(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function dC(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Ne{constructor(t,n){this.comparator=t,this.root=n||ot.EMPTY}insert(t,n){return new Ne(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new Ne(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wu(this.root,t,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wu(this.root,t,this.comparator,!0)}}class wu{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=s??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new ot(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const t=this.left.check();if(t!==this.right.check())throw Q();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,n,r,i,s){return this}insert(t,n,r){return new ot(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(t){this.comparator=t,this.data=new Ne(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pw(this.data.getIterator())}getIteratorFrom(t){return new Pw(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ht(this.comparator);return n.data=t,n}}class Pw{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Jt([])}unionWith(t){let n=new ht(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Jt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Bo(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class hC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new hC("Invalid base64 string: "+s):s}}(t);return new kt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new kt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ce(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const gO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(e){if(me(!!e),typeof e=="string"){let t=0;const n=gO.exec(e);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Fe(e.seconds),nanos:Fe(e.nanos)}}function Fe(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ws(e){return typeof e=="string"?kt.fromBase64String(e):kt.fromUint8Array(e)}/**
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
 */function ev(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tv(e){const t=e.mapValue.fields.__previous_value__;return ev(t)?tv(t):t}function Xl(e){const t=Ri(e.mapValue.fields.__local_write_time__.timestampValue);return new Qe(t.seconds,t.nanos)}/**
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
 */class mO{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Jl{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Jl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Jl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const xu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ev(e)?4:yO(e)?9007199254740991:10:Q()}function cr(e,t){if(e===t)return!0;const n=xs(e);if(n!==xs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Xl(e).isEqual(Xl(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ri(i.timestampValue),a=Ri(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return ws(i.bytesValue).isEqual(ws(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fe(i.doubleValue),a=Fe(s.doubleValue);return o===a?Gd(o)===Gd(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Bo(e.arrayValue.values||[],t.arrayValue.values||[],cr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Rw(o)!==Rw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!cr(o[l],a[l])))return!1;return!0}(e,t);default:return Q()}}function Zl(e,t){return(e.values||[]).find(n=>cr(n,t))!==void 0}function Ho(e,t){if(e===t)return 0;const n=xs(e),r=xs(t);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Fe(s.integerValue||s.doubleValue),l=Fe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return Nw(e.timestampValue,t.timestampValue);case 4:return Nw(Xl(e),Xl(t));case 5:return ce(e.stringValue,t.stringValue);case 6:return function(s,o){const a=ws(s),l=ws(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=ce(a[u],l[u]);if(d!==0)return d}return ce(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=ce(Fe(s.latitude),Fe(o.latitude));return a!==0?a:ce(Fe(s.longitude),Fe(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const d=Ho(a[u],l[u]);if(d)return d}return ce(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===xu.mapValue&&o===xu.mapValue)return 0;if(s===xu.mapValue)return 1;if(o===xu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let h=0;h<l.length&&h<d.length;++h){const f=ce(l[h],d[h]);if(f!==0)return f;const g=Ho(a[l[h]],u[d[h]]);if(g!==0)return g}return ce(l.length,d.length)}(e.mapValue,t.mapValue);default:throw Q()}}function Nw(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ce(e,t);const n=Ri(e),r=Ri(t),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Wo(e){return Mm(e)}function Mm(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Ri(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return ws(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return z.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mm(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mm(n.fields[o])}`;return i+"}"}(e.mapValue):Q()}function jw(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Lm(e){return!!e&&"integerValue"in e}function nv(e){return!!e&&"arrayValue"in e}function bw(e){return!!e&&"nullValue"in e}function Mw(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gu(e){return!!e&&"mapValue"in e}function ll(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return js(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ll(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ll(e.arrayValue.values[n]);return t}return Object.assign({},e)}function yO(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Gu(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ll(n)}setAll(t){let n=ct.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ll(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Gu(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return cr(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Gu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){js(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Vt(ll(this.value))}}function fC(e){const t=[];return js(e.fields,(n,r)=>{const i=new ct([n]);if(Gu(r)){const s=fC(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Jt(t)}/**
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
 */class _t{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new _t(t,0,X.min(),X.min(),X.min(),Vt.empty(),0)}static newFoundDocument(t,n,r,i){return new _t(t,1,n,X.min(),r,i,0)}static newNoDocument(t,n){return new _t(t,2,n,X.min(),X.min(),Vt.empty(),0)}static newUnknownDocument(t,n){return new _t(t,3,n,X.min(),X.min(),Vt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qd{constructor(t,n){this.position=t,this.inclusive=n}}function Lw(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=Ho(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dw(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!cr(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ec{constructor(t,n="asc"){this.field=t,this.dir=n}}function vO(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class pC{}class Be extends pC{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new wO(t,n,r):n==="array-contains"?new IO(t,r):n==="in"?new SO(t,r):n==="not-in"?new TO(t,r):n==="array-contains-any"?new kO(t,r):new Be(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new xO(t,r):new EO(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ho(n,this.value)):n!==null&&xs(this.value)===xs(n)&&this.matchesComparison(Ho(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends pC{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Fn(t,n)}matches(t){return gC(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function gC(e){return e.op==="and"}function mC(e){return _O(e)&&gC(e)}function _O(e){for(const t of e.filters)if(t instanceof Fn)return!1;return!0}function Dm(e){if(e instanceof Be)return e.field.canonicalString()+e.op.toString()+Wo(e.value);if(mC(e))return e.filters.map(t=>Dm(t)).join(",");{const t=e.filters.map(n=>Dm(n)).join(",");return`${e.op}(${t})`}}function yC(e,t){return e instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&cr(r.value,i.value)}(e,t):e instanceof Fn?function(r,i){return i instanceof Fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&yC(o,i.filters[a]),!0):!1}(e,t):void Q()}function vC(e){return e instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${Wo(n.value)}`}(e):e instanceof Fn?function(n){return n.op.toString()+" {"+n.getFilters().map(vC).join(" ,")+"}"}(e):"Filter"}class wO extends Be{constructor(t,n,r){super(t,n,r),this.key=z.fromName(r.referenceValue)}matches(t){const n=z.comparator(t.key,this.key);return this.matchesComparison(n)}}class xO extends Be{constructor(t,n){super(t,"in",n),this.keys=_C("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class EO extends Be{constructor(t,n){super(t,"not-in",n),this.keys=_C("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function _C(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class IO extends Be{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return nv(n)&&Zl(n.arrayValue,this.value)}}class SO extends Be{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Zl(this.value.arrayValue,n)}}class TO extends Be{constructor(t,n){super(t,"not-in",n)}matches(t){if(Zl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Zl(this.value.arrayValue,n)}}class kO extends Be{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!nv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zl(this.value.arrayValue,r))}}/**
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
 */class CO{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Ow(e,t=null,n=[],r=[],i=null,s=null,o=null){return new CO(e,t,n,r,i,s,o)}function rv(e){const t=Z(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Dm(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gf(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Wo(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Wo(r)).join(",")),t.ce=n}return t.ce}function iv(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!vO(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!yC(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Dw(e.startAt,t.startAt)&&Dw(e.endAt,t.endAt)}function Om(e){return z.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class pa{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function AO(e,t,n,r,i,s,o,a){return new pa(e,t,n,r,i,s,o,a)}function mf(e){return new pa(e)}function $w(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function wC(e){return e.collectionGroup!==null}function cl(e){const t=Z(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ht(ct.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new ec(s,r))}),n.has(ct.keyField().canonicalString())||t.le.push(new ec(ct.keyField(),r))}return t.le}function ir(e){const t=Z(e);return t.he||(t.he=RO(t,cl(e))),t.he}function RO(e,t){if(e.limitType==="F")return Ow(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ec(i.field,s)});const n=e.endAt?new Qd(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Qd(e.startAt.position,e.startAt.inclusive):null;return Ow(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function $m(e,t){const n=e.filters.concat([t]);return new pa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Kd(e,t,n){return new pa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function yf(e,t){return iv(ir(e),ir(t))&&e.limitType===t.limitType}function xC(e){return`${rv(ir(e))}|lt:${e.limitType}`}function Us(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>vC(i)).join(", ")}]`),gf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Wo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Wo(i)).join(",")),`Target(${r})`}(ir(e))}; limitType=${e.limitType})`}function vf(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of cl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Lw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,cl(r),i)||r.endAt&&!function(o,a,l){const u=Lw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,cl(r),i))}(e,t)}function PO(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function EC(e){return(t,n)=>{let r=!1;for(const i of cl(e)){const s=NO(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function NO(e,t,n){const r=e.field.isKeyField()?z.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ho(l,u):Q()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class ga{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){js(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return dC(this.inner)}size(){return this.innerSize}}/**
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
 */const jO=new Ne(z.comparator);function Dr(){return jO}const IC=new Ne(z.comparator);function Wa(...e){let t=IC;for(const n of e)t=t.insert(n.key,n);return t}function SC(e){let t=IC;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function ns(){return ul()}function TC(){return ul()}function ul(){return new ga(e=>e.toString(),(e,t)=>e.isEqual(t))}const bO=new Ne(z.comparator),MO=new ht(z.comparator);function ne(...e){let t=MO;for(const n of e)t=t.add(n);return t}const LO=new ht(ce);function DO(){return LO}/**
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
 */function kC(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gd(t)?"-0":t}}function CC(e){return{integerValue:""+e}}function OO(e,t){return pO(t)?CC(t):kC(e,t)}/**
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
 */class _f{constructor(){this._=void 0}}function $O(e,t,n){return e instanceof Yd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ev(s)&&(s=tv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof qo?RC(e,t):e instanceof tc?PC(e,t):function(i,s){const o=AC(i,s),a=Vw(o)+Vw(i.Ie);return Lm(o)&&Lm(i.Ie)?CC(a):kC(i.serializer,a)}(e,t)}function VO(e,t,n){return e instanceof qo?RC(e,t):e instanceof tc?PC(e,t):n}function AC(e,t){return e instanceof Xd?function(r){return Lm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Yd extends _f{}class qo extends _f{constructor(t){super(),this.elements=t}}function RC(e,t){const n=NC(t);for(const r of e.elements)n.some(i=>cr(i,r))||n.push(r);return{arrayValue:{values:n}}}class tc extends _f{constructor(t){super(),this.elements=t}}function PC(e,t){let n=NC(t);for(const r of e.elements)n=n.filter(i=>!cr(i,r));return{arrayValue:{values:n}}}class Xd extends _f{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Vw(e){return Fe(e.integerValue||e.doubleValue)}function NC(e){return nv(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class FO{constructor(t,n){this.field=t,this.transform=n}}function UO(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof qo&&i instanceof qo||r instanceof tc&&i instanceof tc?Bo(r.elements,i.elements,cr):r instanceof Xd&&i instanceof Xd?cr(r.Ie,i.Ie):r instanceof Yd&&i instanceof Yd}(e.transform,t.transform)}class zO{constructor(t,n){this.version=t,this.transformResults=n}}class sr{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new sr}static exists(t){return new sr(void 0,t)}static updateTime(t){return new sr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Qu(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class wf{}function jC(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new MC(e.key,sr.none()):new Nc(e.key,e.data,sr.none());{const n=e.data,r=Vt.empty();let i=new ht(ct.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Vi(e.key,r,new Jt(i.toArray()),sr.none())}}function BO(e,t,n){e instanceof Nc?function(i,s,o){const a=i.value.clone(),l=Uw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Vi?function(i,s,o){if(!Qu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Uw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(bC(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function dl(e,t,n,r){return e instanceof Nc?function(s,o,a,l){if(!Qu(s.precondition,o))return a;const u=s.value.clone(),d=zw(s.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Vi?function(s,o,a,l){if(!Qu(s.precondition,o))return a;const u=zw(s.fieldTransforms,l,o),d=o.data;return d.setAll(bC(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Qu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function HO(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=AC(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function Fw(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bo(r,i,(s,o)=>UO(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Nc extends wf{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vi extends wf{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function bC(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Uw(e,t,n){const r=new Map;me(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,VO(o,a,n[i]))}return r}function zw(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$O(s,o,t))}return r}class MC extends wf{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WO extends wf{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qO{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&BO(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=dl(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=dl(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=TC();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=jC(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ne())}isEqual(t){return this.batchId===t.batchId&&Bo(this.mutations,t.mutations,(n,r)=>Fw(n,r))&&Bo(this.baseMutations,t.baseMutations,(n,r)=>Fw(n,r))}}class sv{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){me(t.mutations.length===r.length);let i=function(){return bO}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sv(t,n,r,i)}}/**
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
 */let GO=class{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class QO{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Ve,oe;function KO(e){switch(e){default:return Q();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function LC(e){if(e===void 0)return Lr("GRPC error has no .code"),C.UNKNOWN;switch(e){case Ve.OK:return C.OK;case Ve.CANCELLED:return C.CANCELLED;case Ve.UNKNOWN:return C.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return C.INTERNAL;case Ve.UNAVAILABLE:return C.UNAVAILABLE;case Ve.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Ve.NOT_FOUND:return C.NOT_FOUND;case Ve.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Ve.ABORTED:return C.ABORTED;case Ve.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Ve.DATA_LOSS:return C.DATA_LOSS;default:return Q()}}(oe=Ve||(Ve={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function YO(){return new TextEncoder}/**
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
 */const XO=new wo([4294967295,4294967295],0);function Bw(e){const t=YO().encode(e),n=new Z3;return n.update(t),new Uint8Array(n.digest())}function Hw(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new wo([n,r],0),new wo([i,s],0)]}class ov{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qa(`Invalid padding: ${n}`);if(r<0)throw new qa(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new qa(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new qa(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=wo.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(wo.fromNumber(r)));return i.compare(XO)===1&&(i=new wo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Bw(t),[r,i]=Hw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new ov(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Bw(t),[r,i]=Hw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xf{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,jc.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new xf(X.min(),i,new Ne(ce),Dr(),ne())}}class jc{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new jc(r,n,ne(),ne(),ne())}}/**
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
 */class Ku{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class DC{constructor(t,n){this.targetId=t,this.fe=n}}class OC{constructor(t,n,r=kt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ww{constructor(){this.ge=0,this.pe=Gw(),this.ye=kt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=ne(),n=ne(),r=ne();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new jc(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Gw()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,me(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class JO{constructor(t){this.Le=t,this.ke=new Map,this.qe=Dr(),this.Qe=qw(),this.Ke=new Ne(ce)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:Q()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Om(s))if(r===0){const o=new z(s.path);this.We(n,o,_t.newNoDocument(o,X.min()))}else me(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ws(r).toUint8Array()}catch(l){if(l instanceof hC)return Kl("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ov(o,i,s)}catch(l){return Kl(l instanceof qa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Om(a.target)){const l=new z(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,_t.newNoDocument(l,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ne();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new xf(t,n,this.Ke,this.qe,r);return this.qe=Dr(),this.Qe=qw(),this.Ke=new Ne(ce),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Ww,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new ht(ce),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||V("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Ww),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function qw(){return new Ne(z.comparator)}function Gw(){return new Ne(z.comparator)}const ZO={asc:"ASCENDING",desc:"DESCENDING"},e$={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t$={and:"AND",or:"OR"};class n${constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Vm(e,t){return e.useProto3Json||gf(t)?t:{value:t}}function Jd(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $C(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function r$(e,t){return Jd(e,t.toTimestamp())}function or(e){return me(!!e),X.fromTimestamp(function(n){const r=Ri(n);return new Qe(r.seconds,r.nanos)}(e))}function av(e,t){return function(r){return new xe(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function VC(e){const t=xe.fromString(e);return me(BC(t)),t}function Fm(e,t){return av(e.databaseId,t.path)}function zp(e,t){const n=VC(t);if(n.get(1)!==e.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new z(FC(n))}function Um(e,t){return av(e.databaseId,t)}function i$(e){const t=VC(e);return t.length===4?xe.emptyPath():FC(t)}function zm(e){return new xe(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function FC(e){return me(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Qw(e,t,n){return{name:Fm(e,t),fields:n.value.mapValue.fields}}function s$(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(me(d===void 0||typeof d=="string"),kt.fromBase64String(d||"")):(me(d===void 0||d instanceof Uint8Array),kt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const d=u.code===void 0?C.UNKNOWN:LC(u.code);return new L(d,u.message||"")}(o);n=new OC(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=zp(e,r.document.name),s=or(r.document.updateTime),o=r.document.createTime?or(r.document.createTime):X.min(),a=new Vt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(i,s,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Ku(u,d,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=zp(e,r.document),s=r.readTime?or(r.readTime):X.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ku([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=zp(e,r.document),s=r.removedTargetIds||[];n=new Ku([],s,i,null)}else{if(!("filter"in t))return Q();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new QO(i,s),a=r.targetId;n=new DC(a,o)}}return n}function o$(e,t){let n;if(t instanceof Nc)n={update:Qw(e,t.key,t.value)};else if(t instanceof MC)n={delete:Fm(e,t.key)};else if(t instanceof Vi)n={update:Qw(e,t.key,t.data),updateMask:g$(t.fieldMask)};else{if(!(t instanceof WO))return Q();n={verify:Fm(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Yd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof tc)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Xd)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Q()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:r$(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(e,t.precondition)),n}function a$(e,t){return e&&e.length>0?(me(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?or(i.updateTime):or(s);return o.isEqual(X.min())&&(o=or(s)),new zO(o,i.transformResults||[])}(n,t))):[]}function l$(e,t){return{documents:[Um(e,t.path)]}}function c$(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Um(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Um(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return zC(Fn.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:zs(h.field),direction:h$(h.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Vm(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function u$(e){let t=i$(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let s=[];n.where&&(s=function(h){const f=UC(h);return f instanceof Fn&&mC(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(m){return new ec(Bs(m.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,gf(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,g=h.values||[];return new Qd(g,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,g=h.values||[];return new Qd(g,f)}(n.endAt)),AO(t,i,o,s,a,"F",l,u)}function d$(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function UC(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bs(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Bs(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bs(n.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bs(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(e):e.fieldFilter!==void 0?function(n){return Be.create(Bs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Fn.create(n.compositeFilter.filters.map(r=>UC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(e):Q()}function h$(e){return ZO[e]}function f$(e){return e$[e]}function p$(e){return t$[e]}function zs(e){return{fieldPath:e.canonicalString()}}function Bs(e){return ct.fromServerFormat(e.fieldPath)}function zC(e){return e instanceof Be?function(n){if(n.op==="=="){if(Mw(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NAN"}};if(bw(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mw(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NAN"}};if(bw(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zs(n.field),op:f$(n.op),value:n.value}}}(e):e instanceof Fn?function(n){const r=n.getFilters().map(i=>zC(i));return r.length===1?r[0]:{compositeFilter:{op:p$(n.op),filters:r}}}(e):Q()}function g$(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function BC(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class si{constructor(t,n,r,i,s=X.min(),o=X.min(),a=kt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new si(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class m${constructor(t){this.ut=t}}function y$(e){const t=u$({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Kd(t,t.limit,"L"):t}/**
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
 */class v${constructor(){this.on=new _$}addToCollectionParentIndex(t,n){return this.on.add(n),P.resolve()}getCollectionParents(t,n){return P.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return P.resolve()}deleteFieldIndex(t,n){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,n){return P.resolve()}getDocumentsMatchingTarget(t,n){return P.resolve(null)}getIndexType(t,n){return P.resolve(0)}getFieldIndexes(t,n){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,n){return P.resolve(Ai.min())}getMinOffsetFromCollectionGroup(t,n){return P.resolve(Ai.min())}updateCollectionGroup(t,n,r){return P.resolve()}updateIndexEntries(t,n){return P.resolve()}}class _${constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new ht(xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ht(xe.comparator)).toArray()}}/**
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
 */class Go{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Go(0)}static Nn(){return new Go(-1)}}/**
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
 */class w${constructor(){this.changes=new ga(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class x${constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class E${constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&dl(r.mutation,i,Jt.empty(),Qe.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ne()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ne()){const i=ns();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Wa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=ns();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ne()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Dr();const o=ul(),a=function(){return ul()}();return n.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof Vi)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),dl(d.mutation,u,d.mutation.getFieldMask(),Qe.now())):o.set(u.key,Jt.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var h;return a.set(u,new x$(d,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=ul();let i=new Ne((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Jt.empty();d=a.applyToLocalView(u,d),r.set(l,d);const h=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,h=TC();d.forEach(f=>{if(!s.has(f)){const g=jC(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):wC(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):P.resolve(ns());let a=-1,l=s;return o.next(u=>P.forEach(u,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(d)?P.resolve():this.remoteDocumentCache.getEntry(t,d).next(f=>{l=l.insert(d,f)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,ne())).next(d=>({batchId:a,changes:SC(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new z(n)).next(r=>{let i=Wa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=Wa();return this.indexManager.getCollectionParents(t,s).next(a=>P.forEach(a,l=>{const u=function(h,f){return new pa(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(d=>{d.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,_t.newInvalidDocument(d)))});let a=Wa();return o.forEach((l,u)=>{const d=s.get(l);d!==void 0&&dl(d.mutation,u,Jt.empty(),Qe.now()),vf(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class I${constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return P.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:or(i.createTime)}}(n)),P.resolve()}getNamedQuery(t,n){return P.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:y$(i.bundledQuery),readTime:or(i.readTime)}}(n)),P.resolve()}}/**
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
 */class S${constructor(){this.overlays=new Ne(z.comparator),this.lr=new Map}getOverlay(t,n){return P.resolve(this.overlays.get(n))}getOverlays(t,n){const r=ns();return P.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.lt(t,n,s)}),P.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),P.resolve()}getOverlaysForCollection(t,n,r){const i=ns(),s=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Ne((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=ns(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=ns(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return P.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GO(n,r));let s=this.lr.get(n);s===void 0&&(s=ne(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class lv{constructor(){this.hr=new ht(Ke.Pr),this.Ir=new ht(Ke.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new Ke(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new Ke(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new z(new xe([])),r=new Ke(n,t),i=new Ke(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new z(new xe([])),r=new Ke(n,t),i=new Ke(n,t+1);let s=ne();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Ke(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ke{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return z.comparator(t.key,n.key)||ce(t.gr,n.gr)}static Tr(t,n){return ce(t.gr,n.gr)||z.comparator(t.key,n.key)}}/**
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
 */class T${constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ht(Ke.Pr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Ke(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(t,n){return P.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new ht(ce);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),P.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new z(s),0);let a=new ht(ce);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),P.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){me(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return P.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new Ke(n,0),i=this.yr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class k${constructor(t){this.Cr=t,this.docs=function(){return new Ne(z.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(t,n){let r=Dr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Dr();const o=n.path,a=new z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||dO(uO(d),r)<=0||(i.has(d.key)||vf(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(t,n,r,i){Q()}vr(t,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new C$(this)}getSize(t){return P.resolve(this.size)}}class C$ extends w${constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),P.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
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
 */class A${constructor(t){this.persistence=t,this.Fr=new ga(n=>rv(n),iv),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Mr=0,this.Or=new lv,this.targetCount=0,this.Nr=Go.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),P.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new Go(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,P.resolve()}updateTargetData(t,n){return this.kn(n),P.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return P.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),P.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),P.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return P.resolve(r)}containsKey(t,n){return P.resolve(this.Or.containsKey(n))}}/**
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
 */class R${constructor(t,n){this.Br={},this.overlays={},this.Lr=new Zy(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new A$(this),this.indexManager=new v$,this.remoteDocumentCache=function(i){return new k$(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new m$(n),this.Kr=new I$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new S$,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new T$(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){V("MemoryPersistence","Starting transaction:",t);const i=new P$(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class P$ extends fO{constructor(t){super(),this.currentSequenceNumber=t}}class cv{constructor(t){this.persistence=t,this.Gr=new lv,this.zr=null}static jr(t){return new cv(t)}get Hr(){if(this.zr)return this.zr;throw Q()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),P.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),P.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Hr,r=>{const i=z.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return P.or([()=>P.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
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
 */class uv{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new uv(t,n.fromCache,r,i)}}/**
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
 */class N${constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class j${constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.zi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new N$;return this.Hi(t,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>s.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(Ma()<=ie.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),P.resolve()):(Ma()<=ie.DEBUG&&V("QueryEngine","Query:",Us(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Ma()<=ie.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ir(n))):P.resolve())}zi(t,n){if($w(n))return P.resolve(null);let r=ir(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Kd(n,null,"F"),r=ir(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=ne(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(t,Kd(n,null,"F")):this.Xi(t,u,n,l)}))})))}ji(t,n,r,i){return $w(n)||i.isEqual(X.min())?P.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?P.resolve(null):(Ma()<=ie.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Us(n)),this.Xi(t,o,n,cO(i,-1)).next(a=>a))})}Yi(t,n){let r=new ht(EC(t));return n.forEach((i,s)=>{vf(t,s)&&(r=r.add(s))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,n,r){return Ma()<=ie.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Us(n)),this.Gi.getDocumentsMatchingQuery(t,n,Ai.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class b${constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new Ne(ce),this.ns=new ga(s=>rv(s),iv),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new E$(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function M$(e,t,n,r){return new b$(e,t,n,r)}async function HC(e,t){const n=Z(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ne();for(const u of i){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function L$(e,t){const n=Z(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const h=u.batch,f=h.keys();let g=P.resolve();return f.forEach(m=>{g=g.next(()=>d.getEntry(l,m)).next(_=>{const w=u.docVersions.get(m);me(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),d.addEntry(_)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function WC(e){const t=Z(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function D$(e,t){const n=Z(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];t.targetChanges.forEach((d,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(s,d.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,d.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(kt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),i=i.insert(h,g),function(_,w,p){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(f,g,d)&&a.push(n.qr.updateTargetData(s,g))});let l=Dr(),u=ne();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(O$(s,o,t.documentUpdates).next(d=>{l=d.us,u=d.cs})),!r.isEqual(X.min())){const d=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function O$(e,t,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Dr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function $$(e,t){const n=Z(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function V$(e,t){const n=Z(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,t).next(s=>s?(i=s,P.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new si(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function Bm(e,t,n){const r=Z(e),i=r.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pc(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function Kw(e,t,n){const r=Z(e);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const h=Z(l),f=h.ns.get(d);return f!==void 0?P.resolve(h.ts.get(f)):h.qr.getTargetData(u,d)}(r,o,ir(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?i:X.min(),n?s:ne())).next(a=>(F$(r,PO(t),a),{documents:a,ls:s})))}function F$(e,t,n){let r=e.rs.get(t)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.rs.set(t,r)}class Yw{constructor(){this.activeTargetIds=DO()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class U${constructor(){this.eo=new Yw,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Yw,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class z${ro(t){}shutdown(){}}/**
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
 */class Xw{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Eu=null;function Bp(){return Eu===null?Eu=function(){return 268435456+Math.round(2147483648*Math.random())}():Eu++,"0x"+Eu.toString(16)}/**
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
 */const B$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class H${constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
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
 */const mt="WebChannelConnection";class W$ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Bp(),l=this.So(n,r);V("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(d=>(V("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Kl("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=B$[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const s=Bp();return new Promise((o,a)=>{const l=new J3;l.setWithCredentials(!0),l.listenOnce(Y3.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Up.NO_ERROR:const d=l.getResponseJson();V(mt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(d)),o(d);break;case Up.TIMEOUT:V(mt,`RPC '${t}' ${s} timed out`),a(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case Up.HTTP_ERROR:const h=l.getStatus();if(V(mt,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const m=function(w){const p=w.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(p)>=0?p:C.UNKNOWN}(g.status);a(new L(m,g.message))}else a(new L(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(C.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{V(mt,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);V(mt,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(t,n,r){const i=Bp(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Q3(),a=K3(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");V(mt,`Creating RPC '${t}' stream ${i}: ${d}`,l);const h=o.createWebChannel(d,l);let f=!1,g=!1;const m=new H$({co:w=>{g?V(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(f||(V(mt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),V(mt,`RPC '${t}' stream ${i} sending:`,w),h.send(w))},lo:()=>h.close()}),_=(w,p,y)=>{w.listen(p,v=>{try{y(v)}catch(x){setTimeout(()=>{throw x},0)}})};return _(h,_u.EventType.OPEN,()=>{g||V(mt,`RPC '${t}' stream ${i} transport opened.`)}),_(h,_u.EventType.CLOSE,()=>{g||(g=!0,V(mt,`RPC '${t}' stream ${i} transport closed`),m.Ro())}),_(h,_u.EventType.ERROR,w=>{g||(g=!0,Kl(mt,`RPC '${t}' stream ${i} transport errored:`,w),m.Ro(new L(C.UNAVAILABLE,"The operation could not be completed")))}),_(h,_u.EventType.MESSAGE,w=>{var p;if(!g){const y=w.data[0];me(!!y);const v=y,x=v.error||((p=v[0])===null||p===void 0?void 0:p.error);if(x){V(mt,`RPC '${t}' stream ${i} received error:`,x);const S=x.status;let k=function($){const B=Ve[$];if(B!==void 0)return LC(B)}(S),I=x.message;k===void 0&&(k=C.INTERNAL,I="Unknown error status: "+S+" with message "+x.message),g=!0,m.Ro(new L(k,I)),h.close()}else V(mt,`RPC '${t}' stream ${i} received:`,y),m.Vo(y)}}),_(a,X3.STAT_EVENT,w=>{w.stat===Cw.PROXY?V(mt,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===Cw.NOPROXY&&V(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function Hp(){return typeof document<"u"?document:null}/**
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
 */function Ef(e){return new n$(e,!0)}/**
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
 */class qC{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class GC{constructor(t,n,r,i,s,o,a,l){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new qC(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Lr(n.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new L(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class q$ extends GC{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=s$(this.serializer,t),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?or(o.readTime):X.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=zm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Om(l)?{documents:l$(s,l)}:{query:c$(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$C(s,o.resumeToken);const u=Vm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Jd(s,o.snapshotVersion.toTimestamp());const u=Vm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=d$(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=zm(this.serializer),n.removeTarget=t,this.e_(n)}}class G$ extends GC{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(me(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=a$(t.writeResults,t.commitTime),r=or(t.commitTime);return this.listener.I_(r,n)}return me(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=zm(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>o$(this.serializer,r))};this.e_(n)}}/**
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
 */class Q$ extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(C.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(C.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class K${constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Lr(n),this.f_=!1):V("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class Y${constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{bs(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Z(l);u.C_.add(4),await bc(u),u.M_.set("Unknown"),u.C_.delete(4),await If(u)}(this))})}),this.M_=new K$(r,i)}}async function If(e){if(bs(e))for(const t of e.v_)await t(!0)}async function bc(e){for(const t of e.v_)await t(!1)}function QC(e,t){const n=Z(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),fv(n)?hv(n):ma(n).Ho()&&dv(n,t))}function KC(e,t){const n=Z(e),r=ma(n);n.D_.delete(t),r.Ho()&&YC(n,t),n.D_.size===0&&(r.Ho()?r.Zo():bs(n)&&n.M_.set("Unknown"))}function dv(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(X.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ma(e).u_(t)}function YC(e,t){e.x_.Oe(t),ma(e).c_(t)}function hv(e){e.x_=new JO({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),ma(e).start(),e.M_.g_()}function fv(e){return bs(e)&&!ma(e).jo()&&e.D_.size>0}function bs(e){return Z(e).C_.size===0}function XC(e){e.x_=void 0}async function X$(e){e.D_.forEach((t,n)=>{dv(e,t)})}async function J$(e,t){XC(e),fv(e)?(e.M_.w_(t),hv(e)):e.M_.set("Unknown")}async function Z$(e,t,n){if(e.M_.set("Online"),t instanceof OC&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(e,t)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Zd(e,r)}else if(t instanceof Ku?e.x_.$e(t):t instanceof DC?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(X.min()))try{const r=await WC(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.D_.get(u);d&&s.D_.set(u,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const d=s.D_.get(l);if(!d)return;s.D_.set(l,d.withResumeToken(kt.EMPTY_BYTE_STRING,d.snapshotVersion)),YC(s,l);const h=new si(d.target,l,u,d.sequenceNumber);dv(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Zd(e,r)}}async function Zd(e,t,n){if(!Pc(t))throw t;e.C_.add(1),await bc(e),e.M_.set("Offline"),n||(n=()=>WC(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await If(e)})}function JC(e,t){return t().catch(n=>Zd(e,n,t))}async function Sf(e){const t=Z(e),n=Pi(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;e5(t);)try{const i=await $$(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,t5(t,i)}catch(i){await Zd(t,i)}ZC(t)&&eA(t)}function e5(e){return bs(e)&&e.b_.length<10}function t5(e,t){e.b_.push(t);const n=Pi(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function ZC(e){return bs(e)&&!Pi(e).jo()&&e.b_.length>0}function eA(e){Pi(e).start()}async function n5(e){Pi(e).E_()}async function r5(e){const t=Pi(e);for(const n of e.b_)t.P_(n.mutations)}async function i5(e,t,n){const r=e.b_.shift(),i=sv.from(r,t,n);await JC(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Sf(e)}async function s5(e,t){t&&Pi(e).h_&&await async function(r,i){if(function(o){return KO(o)&&o!==C.ABORTED}(i.code)){const s=r.b_.shift();Pi(r).Yo(),await JC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Sf(r)}}(e,t),ZC(e)&&eA(e)}async function Jw(e,t){const n=Z(e);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=bs(n);n.C_.add(3),await bc(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await If(n)}async function o5(e,t){const n=Z(e);t?(n.C_.delete(2),await If(n)):t||(n.C_.add(2),await bc(n),n.M_.set("Unknown"))}function ma(e){return e.O_||(e.O_=function(n,r,i){const s=Z(n);return s.A_(),new q$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:X$.bind(null,e),Io:J$.bind(null,e),a_:Z$.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),fv(e)?hv(e):e.M_.set("Unknown")):(await e.O_.stop(),XC(e))})),e.O_}function Pi(e){return e.N_||(e.N_=function(n,r,i){const s=Z(n);return s.A_(),new G$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:n5.bind(null,e),Io:s5.bind(null,e),T_:r5.bind(null,e),I_:i5.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Sf(e)):(await e.N_.stop(),e.b_.length>0&&(V("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
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
 */class pv{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new pv(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gv(e,t){if(Lr("AsyncQueue",`${t}: ${e}`),Pc(e))return new L(C.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class xo{constructor(t){this.comparator=t?(n,r)=>t(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=Wa(),this.sortedSet=new Ne(this.comparator)}static emptySet(t){return new xo(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof xo)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new xo;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Zw{constructor(){this.B_=new Ne(z.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):Q():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Qo{constructor(t,n,r,i,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qo(t,n,xo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yf(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class a5{constructor(){this.k_=void 0,this.listeners=[]}}class l5{constructor(){this.queries=new ga(t=>xC(t),yf),this.onlineState="Unknown",this.q_=new Set}}async function mv(e,t){const n=Z(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new a5),i)try{s.k_=await n.onListen(r)}catch(o){const a=gv(o,`Initialization of query '${Us(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.Q_(n.onlineState),s.k_&&t.K_(s.k_)&&vv(n)}async function yv(e,t){const n=Z(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function c5(e,t){const n=Z(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&vv(n)}function u5(e,t,n){const r=Z(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function vv(e){e.q_.forEach(t=>{t.next()})}class _v{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Qo(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=Qo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
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
 */class tA{constructor(t){this.key=t}}class nA{constructor(t){this.key=t}}class d5{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ne(),this.mutatedKeys=ne(),this._a=EC(t),this.aa=new xo(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new Zw,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,h)=>{const f=i.get(d),g=vf(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;f&&g?f.data.isEqual(g.data)?m!==_&&(r.track({type:3,doc:g}),w=!0):this.ha(f,g)||(r.track({type:2,doc:g}),w=!0,(l&&this._a(g,l)>0||u&&this._a(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),w=!0):f&&!g&&(r.track({type:1,doc:f}),w=!0,(l||u)&&(a=!0)),w&&(g?(o=o.add(g),s=_?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const o=t.la.L_();o.sort((d,h)=>function(g,m){const _=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return _(g)-_(m)}(d.type,h.type)||this._a(d.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new Qo(this.query,t.aa,s,o,t.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Zw,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=ne(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new nA(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new tA(r))}),n}da(t){this.ia=t.ls,this.oa=ne();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return Qo.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class h5{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class f5{constructor(t){this.key=t,this.Ra=!1}}class p5{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ga(a=>xC(a),yf),this.fa=new Map,this.ga=new Set,this.pa=new Ne(z.comparator),this.ya=new Map,this.wa=new lv,this.Sa={},this.ba=new Map,this.Da=Go.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function g5(e,t){const n=T5(e);let r,i;const s=n.ma.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await V$(n.localStore,ir(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await m5(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&QC(n.remoteStore,o)}return i}async function m5(e,t,n,r,i){e.va=(h,f,g)=>async function(_,w,p,y){let v=w.view.ca(p);v.Zi&&(v=await Kw(_.localStore,w.query,!1).then(({documents:I})=>w.view.ca(I,v)));const x=y&&y.targetChanges.get(w.targetId),S=y&&y.targetMismatches.get(w.targetId)!=null,k=w.view.applyChanges(v,_.isPrimaryClient,x,S);return tx(_,w.targetId,k.Ta),k.snapshot}(e,h,f,g);const s=await Kw(e.localStore,t,!0),o=new d5(t,s.ls),a=o.ca(s.documents),l=jc.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,l);tx(e,n,u.Ta);const d=new h5(t,n,o);return e.ma.set(t,d),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),u.snapshot}async function y5(e,t){const n=Z(e),r=n.ma.get(t),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!yf(s,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Bm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),KC(n.remoteStore,r.targetId),Hm(n,r.targetId)}).catch(Rc)):(Hm(n,r.targetId),await Bm(n.localStore,r.targetId,!0))}async function v5(e,t,n){const r=k5(e);try{const i=await function(o,a){const l=Z(o),u=Qe.now(),d=a.reduce((g,m)=>g.add(m.key),ne());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let m=Dr(),_=ne();return l.ss.getEntries(g,d).next(w=>{m=w,m.forEach((p,y)=>{y.isValidDocument()||(_=_.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,m)).next(w=>{h=w;const p=[];for(const y of a){const v=HO(y,h.get(y.key).overlayedDocument);v!=null&&p.push(new Vi(y.key,v,fC(v.value.mapValue),sr.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,p,a)}).next(w=>{f=w;const p=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(g,w.batchId,p)})}).then(()=>({batchId:f.batchId,changes:SC(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new Ne(ce)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Mc(r,i.changes),await Sf(r.remoteStore)}catch(i){const s=gv(i,"Failed to persist write");n.reject(s)}}async function rA(e,t){const n=Z(e);try{const r=await D$(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?me(o.Ra):i.removedDocuments.size>0&&(me(o.Ra),o.Ra=!1))}),await Mc(n,r,t)}catch(r){await Rc(r)}}function ex(e,t,n){const r=Z(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach((d,h)=>{for(const f of h.listeners)f.Q_(a)&&(u=!0)}),u&&vv(l)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function _5(e,t,n){const r=Z(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new Ne(z.comparator);o=o.insert(s,_t.newNoDocument(s,X.min()));const a=ne().add(s),l=new xf(X.min(),new Map,new Ne(ce),o,a);await rA(r,l),r.pa=r.pa.remove(s),r.ya.delete(t),wv(r)}else await Bm(r.localStore,t,!1).then(()=>Hm(r,t,n)).catch(Rc)}async function w5(e,t){const n=Z(e),r=t.batch.batchId;try{const i=await L$(n.localStore,t);sA(n,r,null),iA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Mc(n,i)}catch(i){await Rc(i)}}async function x5(e,t,n){const r=Z(e);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(me(h!==null),d=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,t);sA(r,t,n),iA(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Mc(r,i)}catch(i){await Rc(i)}}function iA(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function sA(e,t,n){const r=Z(e);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function Hm(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||oA(e,r)})}function oA(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(KC(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),wv(e))}function tx(e,t,n){for(const r of n)r instanceof tA?(e.wa.addReference(r.key,t),E5(e,r)):r instanceof nA?(V("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||oA(e,r.key)):Q()}function E5(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(V("SyncEngine","New document in limbo: "+n),e.ga.add(r),wv(e))}function wv(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new z(xe.fromString(t)),r=e.Da.next();e.ya.set(r,new f5(n)),e.pa=e.pa.insert(n,r),QC(e.remoteStore,new si(ir(mf(n.path)),r,"TargetPurposeLimboResolution",Zy._e))}}async function Mc(e,t,n){const r=Z(e),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const d=uv.Qi(l.targetId,u);s.push(d)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const d=Z(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(u,f=>P.forEach(f.ki,g=>d.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>P.forEach(f.qi,g=>d.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!Pc(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const g=d.ts.get(f),m=g.snapshotVersion,_=g.withLastLimboFreeSnapshotVersion(m);d.ts=d.ts.insert(f,_)}}}(r.localStore,s))}async function I5(e,t){const n=Z(e);if(!n.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const r=await HC(n.localStore,t);n.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new L(C.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Mc(n,r._s)}}function S5(e,t){const n=Z(e),r=n.ya.get(t);if(r&&r.Ra)return ne().add(r.key);{let i=ne();const s=n.fa.get(t);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function T5(e){const t=Z(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=rA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=S5.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_5.bind(null,t),t.Va.a_=c5.bind(null,t.eventManager),t.Va.Fa=u5.bind(null,t.eventManager),t}function k5(e){const t=Z(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=w5.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=x5.bind(null,t),t}class nx{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ef(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return M$(this.persistence,new j$,t.initialUser,this.serializer)}createPersistence(t){return new R$(cv.jr,this.serializer)}createSharedClientState(t){return new U$}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class C5{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ex(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=I5.bind(null,this.syncEngine),await o5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new l5}()}createDatastore(t){const n=Ef(t.databaseInfo.databaseId),r=function(s){return new W$(s)}(t.databaseInfo);return function(s,o,a,l){return new Q$(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Y$(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ex(this.syncEngine,n,0),function(){return Xw.D()?new Xw:new z$}())}createSyncEngine(t,n){return function(i,s,o,a,l,u,d){const h=new p5(i,s,o,a,l,u);return d&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);V("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await bc(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class xv{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Lr("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class A5{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Dt.UNAUTHENTICATED,this.clientId=uC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=gv(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Wp(e,t){e.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await HC(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function rx(e,t){e.asyncQueue.verifyOperationInProgress();const n=await P5(e);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Jw(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Jw(t.remoteStore,s)),e._onlineComponents=t}function R5(e){return e.name==="FirebaseError"?e.code===C.FAILED_PRECONDITION||e.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function P5(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wp(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!R5(n))throw n;Kl("Error using user provided cache. Falling back to memory cache: "+n),await Wp(e,new nx)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Wp(e,new nx);return e._offlineComponents}async function aA(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await rx(e,e._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await rx(e,new C5))),e._onlineComponents}function N5(e){return aA(e).then(t=>t.syncEngine)}async function eh(e){const t=await aA(e),n=t.eventManager;return n.onListen=g5.bind(null,t.syncEngine),n.onUnlisten=y5.bind(null,t.syncEngine),n}function j5(e,t,n={}){const r=new Cr;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new xv({next:f=>{o.enqueueAndForget(()=>yv(s,h));const g=f.docs.has(a);!g&&f.fromCache?u.reject(new L(C.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&l&&l.source==="server"?u.reject(new L(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new _v(mf(a.path),d,{includeMetadataChanges:!0,J_:!0});return mv(s,h)}(await eh(e),e.asyncQueue,t,n,r)),r.promise}function b5(e,t,n={}){const r=new Cr;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const d=new xv({next:f=>{o.enqueueAndForget(()=>yv(s,h)),f.fromCache&&l.source==="server"?u.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new _v(a,d,{includeMetadataChanges:!0,J_:!0});return mv(s,h)}(await eh(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function lA(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const ix=new Map;/**
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
 */function cA(e,t,n){if(!n)throw new L(C.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function M5(e,t,n,r){if(t===!0&&r===!0)throw new L(C.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sx(e){if(!z.isDocumentKey(e))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ox(e){if(z.isDocumentKey(e))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Tf(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Q()}function bn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tf(e);throw new L(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function L5(e,t){if(t<=0)throw new L(C.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */class ax{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}M5("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lA((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ev{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ax({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ax(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tO;switch(r.type){case"firstParty":return new iO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ix.get(n);r&&(V("ComponentProvider","Removing Datastore"),ix.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class zr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new zr(this.firestore,t,this._query)}}class It{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class _i extends zr{constructor(t,n,r){super(t,n,mf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new z(t))}withConverter(t){return new _i(this.firestore,t,this._path)}}function lx(e,t,...n){if(e=We(e),cA("collection","path",t),e instanceof Ev){const r=xe.fromString(t,...n);return ox(r),new _i(e,null,r)}{if(!(e instanceof It||e instanceof _i))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(xe.fromString(t,...n));return ox(r),new _i(e.firestore,null,r)}}function Yu(e,t,...n){if(e=We(e),arguments.length===1&&(t=uC.newId()),cA("doc","path",t),e instanceof Ev){const r=xe.fromString(t,...n);return sx(r),new It(e,null,new z(r))}{if(!(e instanceof It||e instanceof _i))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(xe.fromString(t,...n));return sx(r),new It(e.firestore,e instanceof _i?e.converter:null,new z(r))}}/**
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
 */class D5{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new qC(this,"async_queue_retry"),this.iu=()=>{const n=Hp();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=Hp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=Hp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Cr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Pc(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Lr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=pv.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&Q()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}function cx(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Es extends Ev{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new D5}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uA(this),this._firestoreClient.terminate()}}function O5(e,t,n){n||(n="(default)");const r=Xh(e,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(Vl(s,t))return i;throw new L(C.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new L(C.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:n})}function kf(e){return e._firestoreClient||uA(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function uA(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,d){return new mO(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,lA(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new A5(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ko{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ko(kt.fromBase64String(t))}catch(n){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ko(kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Cf{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Iv{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ce(this._lat,t._lat)||ce(this._long,t._long)}}/**
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
 */const $5=/^__.*__$/;class V5{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Vi(t,this.data,this.fieldMask,n,this.fieldTransforms):new Nc(t,this.data,n,this.fieldTransforms)}}class dA{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Vi(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function hA(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Rf{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Rf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return th(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(hA(this.Iu)&&$5.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class F5{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ef(t)}pu(t,n,r,i=!1){return new Rf({Iu:t,methodName:n,gu:r,path:ct.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sv(e){const t=e._freezeSettings(),n=Ef(e._databaseId);return new F5(e._databaseId,!!t.ignoreUndefinedProperties,n)}function U5(e,t,n,r,i,s={}){const o=e.pu(s.merge||s.mergeFields?2:0,t,n,i);Tv("Data must be an object, but it was:",o,r);const a=fA(r,o);let l,u;if(s.merge)l=new Jt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const f=Wm(t,h,n);if(!o.contains(f))throw new L(C.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);gA(d,f)||d.push(f)}l=new Jt(d),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new V5(new Vt(a),l,u)}class Pf extends Af{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Pf}}function z5(e,t,n){return new Rf({Iu:3,gu:t.settings.gu,methodName:e._methodName,du:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class B5 extends Af{constructor(t,n){super(t),this.yu=n}_toFieldTransform(t){const n=z5(this,t,!0),r=this.yu.map(s=>ya(s,n)),i=new qo(r);return new FO(t.path,i)}isEqual(t){return this===t}}function H5(e,t,n,r){const i=e.pu(1,t,n);Tv("Data must be an object, but it was:",i,r);const s=[],o=Vt.empty();js(r,(l,u)=>{const d=kv(t,l,n);u=We(u);const h=i.Ru(d);if(u instanceof Pf)s.push(d);else{const f=ya(u,h);f!=null&&(s.push(d),o.set(d,f))}});const a=new Jt(s);return new dA(o,a,i.fieldTransforms)}function W5(e,t,n,r,i,s){const o=e.pu(1,t,n),a=[Wm(t,r,n)],l=[i];if(s.length%2!=0)throw new L(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Wm(t,s[f])),l.push(s[f+1]);const u=[],d=Vt.empty();for(let f=a.length-1;f>=0;--f)if(!gA(u,a[f])){const g=a[f];let m=l[f];m=We(m);const _=o.Ru(g);if(m instanceof Pf)u.push(g);else{const w=ya(m,_);w!=null&&(u.push(g),d.set(g,w))}}const h=new Jt(u);return new dA(d,h,o.fieldTransforms)}function q5(e,t,n,r=!1){return ya(n,e.pu(r?4:3,t))}function ya(e,t){if(pA(e=We(e)))return Tv("Unsupported field value:",t,e),fA(e,t);if(e instanceof Af)return function(r,i){if(!hA(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ya(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return OO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Qe.fromDate(r);return{timestampValue:Jd(i.serializer,s)}}if(r instanceof Qe){const s=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jd(i.serializer,s)}}if(r instanceof Iv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ko)return{bytesValue:$C(i.serializer,r._byteString)};if(r instanceof It){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:av(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Tf(r)}`)}(e,t)}function fA(e,t){const n={};return dC(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):js(e,(r,i)=>{const s=ya(i,t.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function pA(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Qe||e instanceof Iv||e instanceof Ko||e instanceof It||e instanceof Af)}function Tv(e,t,n){if(!pA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Tf(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function Wm(e,t,n){if((t=We(t))instanceof Cf)return t._internalPath;if(typeof t=="string")return kv(e,t);throw th("Field path arguments must be of type string or ",e,!1,void 0,n)}const G5=new RegExp("[~\\*/\\[\\]]");function kv(e,t,n){if(t.search(G5)>=0)throw th(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Cf(...t.split("."))._internalPath}catch{throw th(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function th(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(C.INVALID_ARGUMENT,a+e+l)}function gA(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class mA{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Q5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Nf("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Q5 extends mA{data(){return super.data()}}function Nf(e,t){return typeof t=="string"?kv(e,t):t instanceof Cf?t._internalPath:t._delegate._internalPath}/**
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
 */function yA(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cv{}class Av extends Cv{}function Pt(e,t,...n){let r=[];t instanceof Cv&&r.push(t),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof va).length,a=s.filter(l=>l instanceof Lc).length;if(o>1||o>0&&a>0)throw new L(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class Lc extends Av{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Lc(t,n,r)}_apply(t){const n=this._parse(t);return vA(t._query,n),new zr(t.firestore,t.converter,$m(t._query,n))}_parse(t){const n=Sv(t.firestore);return function(s,o,a,l,u,d,h){let f;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new L(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){dx(h,d);const g=[];for(const m of h)g.push(ux(l,s,m));f={arrayValue:{values:g}}}else f=ux(l,s,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||dx(h,d),f=q5(a,o,h,d==="in"||d==="not-in");return Be.create(u,d,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function At(e,t,n){const r=t,i=Nf("where",e);return Lc._create(i,r,n)}class va extends Cv{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new va(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Fn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)vA(o,l),o=$m(o,l)}(t._query,n),new zr(t.firestore,t.converter,$m(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function K5(...e){return e.forEach(t=>_A("or",t)),va._create("or",e)}function Y5(...e){return e.forEach(t=>_A("and",t)),va._create("and",e)}class Rv extends Av{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Rv(t,n)}_apply(t){const n=function(i,s,o){if(i.startAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ec(s,o)}(t._query,this._field,this._direction);return new zr(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new pa(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,n))}}function Zn(e,t="asc"){const n=t,r=Nf("orderBy",e);return Rv._create(r,n)}class Pv extends Av{constructor(t,n,r){super(),this.type=t,this._limit=n,this._limitType=r}static _create(t,n,r){return new Pv(t,n,r)}_apply(t){return new zr(t.firestore,t.converter,Kd(t._query,this._limit,this._limitType))}}function wi(e){return L5("limit",e),Pv._create("limit",e,"F")}function ux(e,t,n){if(typeof(n=We(n))=="string"){if(n==="")throw new L(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wC(t)&&n.indexOf("/")!==-1)throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(xe.fromString(n));if(!z.isDocumentKey(r))throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jw(e,new z(r))}if(n instanceof It)return jw(e,n._key);throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tf(n)}.`)}function dx(e,t){if(!Array.isArray(e)||e.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function vA(e,t){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function _A(e,t){if(!(t instanceof Lc||t instanceof va))throw new L(C.INVALID_ARGUMENT,`Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class X5{convertValue(t,n="none"){switch(xs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ws(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Q()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return js(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Iv(Fe(t.latitude),Fe(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=tv(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xl(t));default:return null}}convertTimestamp(t){const n=Ri(t);return new Qe(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=xe.fromString(t);me(BC(r));const i=new Jl(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||Lr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function J5(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Ga{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class wA extends mA{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Nf("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Xu extends wA{data(t={}){return super.data(t)}}class xA{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ga(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Xu(this._firestore,this._userDataWriter,r.key,r,new Ga(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Xu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ga(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Xu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ga(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:Z5(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Z5(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function eV(e){e=bn(e,It);const t=bn(e.firestore,Es);return j5(kf(t),e._key).then(n=>SA(t,e,n))}class Nv extends X5{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ko(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,n)}}function Nt(e){e=bn(e,zr);const t=bn(e.firestore,Es),n=kf(t),r=new Nv(t);return yA(e._query),b5(n,e._query).then(i=>new xA(t,r,e,i))}function EA(e,t,n){e=bn(e,It);const r=bn(e.firestore,Es),i=J5(e.converter,t,n);return IA(r,[U5(Sv(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,sr.none())])}function tV(e,t,n,...r){e=bn(e,It);const i=bn(e.firestore,Es),s=Sv(i);let o;return o=typeof(t=We(t))=="string"||t instanceof Cf?W5(s,"updateDoc",e._key,t,n,r):H5(s,"updateDoc",e._key,t),IA(i,[o.toMutation(e._key,sr.exists(!0))])}function nV(e,...t){var n,r,i;e=We(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||cx(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(cx(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,d;if(e instanceof It)u=bn(e.firestore,Es),d=mf(e._key.path),l={next:h=>{t[o]&&t[o](SA(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=bn(e,zr);u=bn(h.firestore,Es),d=h._query;const f=new Nv(u);l={next:g=>{t[o]&&t[o](new xA(u,f,h,g))},error:t[o+1],complete:t[o+2]},yA(e._query)}return function(f,g,m,_){const w=new xv(_),p=new _v(g,w,m);return f.asyncQueue.enqueueAndForget(async()=>mv(await eh(f),p)),()=>{w.Na(),f.asyncQueue.enqueueAndForget(async()=>yv(await eh(f),p))}}(kf(u),d,a,l)}function IA(e,t){return function(r,i){const s=new Cr;return r.asyncQueue.enqueueAndForget(async()=>v5(await N5(r),i,s)),s.promise}(kf(e),t)}function SA(e,t,n){const r=n.docs.get(t._key),i=new Nv(e);return new wA(e,i,t._key,r,new Ga(n.hasPendingWrites,n.fromCache),t.converter)}function rV(...e){return new B5("arrayUnion",e)}(function(t,n=!0){(function(i){fa=i})(Ps),vs(new Ci("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Es(new nO(r.getProvider("auth-internal")),new oO(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jl(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),rr(Aw,"4.4.0",t),rr(Aw,"4.4.0","esm2017")})();var iV="firebase",sV="10.7.1";/**
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
 */rr(iV,sV,"app");function TA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oV=TA,kA=new _c("auth","Firebase",TA());/**
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
 */const nh=new Ay("@firebase/auth");function aV(e,...t){nh.logLevel<=ie.WARN&&nh.warn(`Auth (${Ps}): ${e}`,...t)}function Ju(e,...t){nh.logLevel<=ie.ERROR&&nh.error(`Auth (${Ps}): ${e}`,...t)}/**
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
 */function Un(e,...t){throw jv(e,...t)}function ar(e,...t){return jv(e,...t)}function lV(e,t,n){const r=Object.assign(Object.assign({},oV()),{[t]:n});return new _c("auth","Firebase",r).create(t,{appName:e.name})}function jv(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return kA.create(e,...t)}function G(e,t,...n){if(!e)throw jv(t,...n)}function Ir(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ju(t),new Error(t)}function Or(e,t){e||Ir(t)}/**
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
 */function qm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function cV(){return hx()==="http:"||hx()==="https:"}function hx(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function uV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cV()||NL()||"connection"in navigator)?navigator.onLine:!0}function dV(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Dc{constructor(t,n){this.shortDelay=t,this.longDelay=n,Or(n>t,"Short delay should be less than long delay!"),this.isMobile=PL()||jL()}get(){return uV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bv(e,t){Or(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class CA{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fV=new Dc(3e4,6e4);function Fi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ui(e,t,n,r,i={}){return AA(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=wc(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),CA.fetch()(RA(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function AA(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},hV),t);try{const i=new gV(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Iu(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Iu(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Iu(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Iu(e,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw lV(e,d,u);Un(e,d)}}catch(i){if(i instanceof hr)throw i;Un(e,"network-request-failed",{message:String(i)})}}async function Oc(e,t,n,r,i={}){const s=await Ui(e,t,n,r,i);return"mfaPendingCredential"in s&&Un(e,"multi-factor-auth-required",{_serverResponse:s}),s}function RA(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?bv(e.config,i):`${e.config.apiScheme}://${i}`}function pV(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gV{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ar(this.auth,"network-request-failed")),fV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Iu(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ar(e,t,r);return i.customData._tokenResponse=n,i}function fx(e){return e!==void 0&&e.enterprise!==void 0}class mV{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return pV(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function yV(e,t){return Ui(e,"GET","/v2/recaptchaConfig",Fi(e,t))}/**
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
 */async function vV(e,t){return Ui(e,"POST","/v1/accounts:delete",t)}async function _V(e,t){return Ui(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function hl(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function wV(e,t=!1){const n=We(e),r=await n.getIdToken(t),i=Mv(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hl(qp(i.auth_time)),issuedAtTime:hl(qp(i.iat)),expirationTime:hl(qp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qp(e){return Number(e)*1e3}function Mv(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ju("JWT malformed, contained fewer than 3 sections"),null;try{const i=XT(n);return i?JSON.parse(i):(Ju("Failed to decode base64 JWT payload"),null)}catch(i){return Ju("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xV(e){const t=Mv(e);return G(t,"internal-error"),G(typeof t.exp<"u","internal-error"),G(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function nc(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof hr&&EV(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function EV({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class IV{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class PA{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hl(this.lastLoginAt),this.creationTime=hl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rh(e){var t;const n=e.auth,r=await e.getIdToken(),i=await nc(e,_V(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?kV(s.providerUserInfo):[],a=TV(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new PA(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function SV(e){const t=We(e);await rh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function TV(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function kV(e){return e.map(t=>{var{providerId:n}=t,r=Y0(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function CV(e,t){const n=await AA(e,{},async()=>{const r=wc({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=RA(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",CA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AV(e,t){return Ui(e,"POST","/v2/accounts:revokeToken",Fi(e,t))}/**
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
 */class rc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){G(t.idToken,"internal-error"),G(typeof t.idToken<"u","internal-error"),G(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):xV(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return G(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await CV(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new rc;return r&&(G(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rc,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
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
 */function qr(e,t){G(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class cs{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Y0(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new PA(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await nc(this,this.stsTokenManager.getToken(this.auth,t));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return wV(this,t)}reload(){return SV(this)}_assign(t){this!==t&&(G(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new cs(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await rh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await nc(this,vV(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:x,isAnonymous:S,providerData:k,stsTokenManager:I}=n;G(v&&I,t,"internal-error");const A=rc.fromJSON(this.name,I);G(typeof v=="string",t,"internal-error"),qr(h,t.name),qr(f,t.name),G(typeof x=="boolean",t,"internal-error"),G(typeof S=="boolean",t,"internal-error"),qr(g,t.name),qr(m,t.name),qr(_,t.name),qr(w,t.name),qr(p,t.name),qr(y,t.name);const $=new cs({uid:v,auth:t,email:f,emailVerified:x,displayName:h,isAnonymous:S,photoURL:m,phoneNumber:g,tenantId:_,stsTokenManager:A,createdAt:p,lastLoginAt:y});return k&&Array.isArray(k)&&($.providerData=k.map(B=>Object.assign({},B))),w&&($._redirectEventId=w),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new rc;i.updateFromServerResponse(n);const s=new cs({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await rh(s),s}}/**
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
 */const px=new Map;function Sr(e){Or(e instanceof Function,"Expected a class definition");let t=px.get(e);return t?(Or(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,px.set(e,t),t)}/**
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
 */class NA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}NA.type="NONE";const gx=NA;/**
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
 */function Zu(e,t,n){return`firebase:${e}:${t}:${n}`}class Eo{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?cs._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Eo(Sr(gx),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Sr(gx);const o=Zu(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const h=cs._fromJSON(t,d);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Eo(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Eo(s,t,r))}}/**
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
 */function mx(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(MA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(jA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(DA(t))return"Blackberry";if(OA(t))return"Webos";if(Lv(t))return"Safari";if((t.includes("chrome/")||bA(t))&&!t.includes("edge/"))return"Chrome";if(LA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jA(e=Tt()){return/firefox\//i.test(e)}function Lv(e=Tt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function bA(e=Tt()){return/crios\//i.test(e)}function MA(e=Tt()){return/iemobile/i.test(e)}function LA(e=Tt()){return/android/i.test(e)}function DA(e=Tt()){return/blackberry/i.test(e)}function OA(e=Tt()){return/webos/i.test(e)}function jf(e=Tt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function RV(e=Tt()){var t;return jf(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function PV(){return bL()&&document.documentMode===10}function $A(e=Tt()){return jf(e)||LA(e)||OA(e)||DA(e)||/windows phone/i.test(e)||MA(e)}function NV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function VA(e,t=[]){let n;switch(e){case"Browser":n=mx(Tt());break;case"Worker":n=`${mx(Tt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}/**
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
 */class jV{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bV(e,t={}){return Ui(e,"GET","/v2/passwordPolicy",Fi(e,t))}/**
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
 */const MV=6;class LV{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class DV{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yx(this),this.idTokenSubscription=new yx(this),this.beforeStateQueue=new jV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Sr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Eo.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await rh(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=dV()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?We(t):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&G(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await bV(this),n=new LV(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new _c("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AV(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Sr(t)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Eo.create(this,[Sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=VA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&aV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ms(e){return We(e)}class yx{constructor(t){this.auth=t,this.observer=null,this.addObserver=FL(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function OV(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function FA(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ar("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OV().appendChild(r)})}function $V(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const VV="https://www.google.com/recaptcha/enterprise.js?render=",FV="recaptcha-enterprise",UV="NO_RECAPTCHA";class zV{constructor(t){this.type=FV,this.auth=Ms(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new mV(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;fx(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(UV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&fx(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}FA(VV+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function vx(e,t,n,r=!1){const i=new zV(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Gm(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await vx(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await vx(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
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
 */function BV(e,t){const n=Xh(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vl(s,t??{}))return i;Un(i,"already-initialized")}return n.initialize({options:t})}function HV(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sr);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function WV(e,t,n){const r=Ms(e);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=UA(t),{host:o,port:a}=qV(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||GV()}function UA(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function qV(e){const t=UA(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:_x(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:_x(o)}}}function _x(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function GV(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Dv{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ir("not implemented")}_getIdTokenResponse(t){return Ir("not implemented")}_linkToIdToken(t,n){return Ir("not implemented")}_getReauthenticationResolver(t){return Ir("not implemented")}}async function QV(e,t){return Ui(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function KV(e,t){return Oc(e,"POST","/v1/accounts:signInWithPassword",Fi(e,t))}/**
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
 */async function YV(e,t){return Oc(e,"POST","/v1/accounts:signInWithEmailLink",Fi(e,t))}async function XV(e,t){return Oc(e,"POST","/v1/accounts:signInWithEmailLink",Fi(e,t))}/**
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
 */class ic extends Dv{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ic(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ic(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gm(t,n,"signInWithPassword",KV);case"emailLink":return YV(t,{email:this._email,oobCode:this._password});default:Un(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gm(t,r,"signUpPassword",QV);case"emailLink":return XV(t,{idToken:n,email:this._email,oobCode:this._password});default:Un(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Io(e,t){return Oc(e,"POST","/v1/accounts:signInWithIdp",Fi(e,t))}/**
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
 */const JV="http://localhost";class Is extends Dv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Is(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Y0(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Is(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Io(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Io(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Io(t,n)}buildRequest(){const t={requestUri:JV,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=wc(n)}return t}}/**
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
 */function ZV(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function e9(e){const t=Ua(za(e)).link,n=t?Ua(za(t)).deep_link_id:null,r=Ua(za(e)).deep_link_id;return(r?Ua(za(r)).link:null)||r||n||t||e}class Ov{constructor(t){var n,r,i,s,o,a;const l=Ua(za(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=ZV((i=l.mode)!==null&&i!==void 0?i:null);G(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=e9(t);try{return new Ov(n)}catch{return null}}}/**
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
 */class _a{constructor(){this.providerId=_a.PROVIDER_ID}static credential(t,n){return ic._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ov.parseLink(n);return G(r,"argument-error"),ic._fromEmailAndCode(t,r.code,r.tenantId)}}_a.PROVIDER_ID="password";_a.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_a.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zA{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $c extends zA{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jr extends $c{constructor(){super("facebook.com")}static credential(t){return Is._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jr.credentialFromTaggedObject(t)}static credentialFromError(t){return Jr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jr.credential(t.oauthAccessToken)}catch{return null}}}Jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jr.PROVIDER_ID="facebook.com";/**
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
 */class Zr extends $c{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Is._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Zr.credentialFromTaggedObject(t)}static credentialFromError(t){return Zr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Zr.credential(n,r)}catch{return null}}}Zr.GOOGLE_SIGN_IN_METHOD="google.com";Zr.PROVIDER_ID="google.com";/**
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
 */class ei extends $c{constructor(){super("github.com")}static credential(t){return Is._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ei.credentialFromTaggedObject(t)}static credentialFromError(t){return ei.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ei.credential(t.oauthAccessToken)}catch{return null}}}ei.GITHUB_SIGN_IN_METHOD="github.com";ei.PROVIDER_ID="github.com";/**
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
 */class ti extends $c{constructor(){super("twitter.com")}static credential(t,n){return Is._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ti.credentialFromTaggedObject(t)}static credentialFromError(t){return ti.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ti.credential(n,r)}catch{return null}}}ti.TWITTER_SIGN_IN_METHOD="twitter.com";ti.PROVIDER_ID="twitter.com";/**
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
 */async function t9(e,t){return Oc(e,"POST","/v1/accounts:signUp",Fi(e,t))}/**
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
 */class Ss{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await cs._fromIdTokenResponse(t,r,i),o=wx(r);return new Ss({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=wx(r);return new Ss({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function wx(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ih extends hr{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ih.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ih(t,n,r,i)}}function BA(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ih._fromErrorAndOperation(e,s,t,r):s})}async function n9(e,t,n=!1){const r=await nc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ss._forOperation(e,"link",r)}/**
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
 */async function r9(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await nc(e,BA(r,i,t,e),n);G(s.idToken,r,"internal-error");const o=Mv(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(e.uid===a,r,"user-mismatch"),Ss._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Un(r,"user-mismatch"),s}}/**
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
 */async function HA(e,t,n=!1){const r="signIn",i=await BA(e,r,t),s=await Ss._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function i9(e,t){return HA(Ms(e),t)}/**
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
 */async function WA(e){const t=Ms(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function s9(e,t,n){const r=Ms(e),o=await Gm(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",t9).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&WA(e),l}),a=await Ss._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function o9(e,t,n){return i9(We(e),_a.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&WA(e),r})}function a9(e,t,n,r){return We(e).onIdTokenChanged(t,n,r)}function l9(e,t,n){return We(e).beforeAuthStateChanged(t,n)}function c9(e,t,n,r){return We(e).onAuthStateChanged(t,n,r)}function u9(e){return We(e).signOut()}const sh="__sak";/**
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
 */class qA{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sh,"1"),this.storage.removeItem(sh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function d9(){const e=Tt();return Lv(e)||jf(e)}const h9=1e3,f9=10;class GA extends qA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=d9()&&NV(),this.fallbackToPolling=$A(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PV()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,f9):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},h9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}GA.type="LOCAL";const p9=GA;/**
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
 */class QA extends qA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}QA.type="SESSION";const KA=QA;/**
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
 */function g9(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bf{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new bf(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await g9(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bf.receivers=[];/**
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
 */function $v(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class m9{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=$v("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function lr(){return window}function y9(e){lr().location.href=e}/**
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
 */function YA(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function v9(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _9(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function w9(){return YA()?self:null}/**
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
 */const XA="firebaseLocalStorageDb",x9=1,oh="firebaseLocalStorage",JA="fbase_key";class Vc{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mf(e,t){return e.transaction([oh],t?"readwrite":"readonly").objectStore(oh)}function E9(){const e=indexedDB.deleteDatabase(XA);return new Vc(e).toPromise()}function Qm(){const e=indexedDB.open(XA,x9);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(oh,{keyPath:JA})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(oh)?t(r):(r.close(),await E9(),t(await Qm()))})})}async function xx(e,t,n){const r=Mf(e,!0).put({[JA]:t,value:n});return new Vc(r).toPromise()}async function I9(e,t){const n=Mf(e,!1).get(t),r=await new Vc(n).toPromise();return r===void 0?null:r.value}function Ex(e,t){const n=Mf(e,!0).delete(t);return new Vc(n).toPromise()}const S9=800,T9=3;class ZA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>T9)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return YA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bf._getInstance(w9()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await v9(),!this.activeServiceWorker)return;this.sender=new m9(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||_9()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Qm();return await xx(t,sh,"1"),await Ex(t,sh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xx(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>I9(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ex(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Mf(i,!1).getAll();return new Vc(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZA.type="LOCAL";const k9=ZA;new Dc(3e4,6e4);/**
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
 */function C9(e,t){return t?Sr(t):(G(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Vv extends Dv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Io(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Io(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Io(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function A9(e){return HA(e.auth,new Vv(e),e.bypassAuthState)}function R9(e){const{auth:t,user:n}=e;return G(n,t,"internal-error"),r9(n,new Vv(e),e.bypassAuthState)}async function P9(e){const{auth:t,user:n}=e;return G(n,t,"internal-error"),n9(n,new Vv(e),e.bypassAuthState)}/**
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
 */class eR{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return A9;case"linkViaPopup":case"linkViaRedirect":return P9;case"reauthViaPopup":case"reauthViaRedirect":return R9;default:Un(this.auth,"internal-error")}}resolve(t){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const N9=new Dc(2e3,1e4);class ao extends eR{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ao.currentPopupAction&&ao.currentPopupAction.cancel(),ao.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return G(t,this.auth,"internal-error"),t}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const t=$v();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ao.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,N9.get())};t()}}ao.currentPopupAction=null;/**
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
 */const j9="pendingRedirect",ed=new Map;class b9 extends eR{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ed.get(this.auth._key());if(!t){try{const r=await M9(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ed.set(this.auth._key(),t)}return this.bypassAuthState||ed.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M9(e,t){const n=O9(t),r=D9(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function L9(e,t){ed.set(e._key(),t)}function D9(e){return Sr(e._redirectPersistence)}function O9(e){return Zu(j9,e.config.apiKey,e.name)}async function $9(e,t,n=!1){const r=Ms(e),i=C9(r,t),o=await new b9(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const V9=10*60*1e3;class F9{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!U9(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!tR(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ar(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=V9&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ix(t))}saveEventToCache(t){this.cachedEventUids.add(Ix(t)),this.lastProcessedEventTime=Date.now()}}function Ix(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function tR({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function U9(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tR(e);default:return!1}}/**
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
 */async function z9(e,t={}){return Ui(e,"GET","/v1/projects",t)}/**
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
 */const B9=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H9=/^https?/;async function W9(e){if(e.config.emulator)return;const{authorizedDomains:t}=await z9(e);for(const n of t)try{if(q9(n))return}catch{}Un(e,"unauthorized-domain")}function q9(e){const t=qm(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!H9.test(n))return!1;if(B9.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const G9=new Dc(3e4,6e4);function Sx(){const e=lr().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Q9(e){return new Promise((t,n)=>{var r,i,s;function o(){Sx(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Sx(),n(ar(e,"network-request-failed"))},timeout:G9.get()})}if(!((i=(r=lr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=lr().gapi)===null||s===void 0)&&s.load)o();else{const a=$V("iframefcb");return lr()[a]=()=>{gapi.load?o():n(ar(e,"network-request-failed"))},FA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw td=null,t})}let td=null;function K9(e){return td=td||Q9(e),td}/**
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
 */const Y9=new Dc(5e3,15e3),X9="__/auth/iframe",J9="emulator/auth/iframe",Z9={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t6(e){const t=e.config;G(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?bv(t,J9):`https://${e.config.authDomain}/${X9}`,r={apiKey:t.apiKey,appName:e.name,v:Ps},i=e6.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wc(r).slice(1)}`}async function n6(e){const t=await K9(e),n=lr().gapi;return G(n,e,"internal-error"),t.open({where:document.body,url:t6(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z9,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ar(e,"network-request-failed"),a=lr().setTimeout(()=>{s(o)},Y9.get());function l(){lr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const r6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i6=500,s6=600,o6="_blank",a6="http://localhost";class Tx{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l6(e,t,n,r=i6,i=s6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},r6),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Tt().toLowerCase();n&&(a=bA(u)?o6:n),jA(u)&&(t=t||a6,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(RV(u)&&a!=="_self")return c6(t||"",a),new Tx(null);const h=window.open(t||"",a,d);G(h,e,"popup-blocked");try{h.focus()}catch{}return new Tx(h)}function c6(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const u6="__/auth/handler",d6="emulator/auth/handler",h6=encodeURIComponent("fac");async function kx(e,t,n,r,i,s){G(e.config.authDomain,e,"auth-domain-config-required"),G(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ps,eventId:i};if(t instanceof zA){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",VL(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))o[d]=h}if(t instanceof $c){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${h6}=${encodeURIComponent(l)}`:"";return`${f6(e)}?${wc(a).slice(1)}${u}`}function f6({config:e}){return e.emulator?bv(e,d6):`https://${e.authDomain}/${u6}`}/**
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
 */const Gp="webStorageSupport";class p6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KA,this._completeRedirectFn=$9,this._overrideRedirectResult=L9}async _openPopup(t,n,r,i){var s;Or((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await kx(t,n,r,qm(),i);return l6(t,o,$v())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await kx(t,n,r,qm(),i);return y9(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await n6(t),r=new F9(t);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Gp,{type:Gp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Gp];o!==void 0&&n(!!o),Un(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=W9(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return $A()||Lv()||jf()}}const g6=p6;var Cx="@firebase/auth",Ax="1.5.1";/**
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
 */class m6{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function y6(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function v6(e){vs(new Ci("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VA(e)},u=new DV(r,i,s,l);return HV(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),vs(new Ci("auth-internal",t=>{const n=Ms(t.getProvider("auth").getImmediate());return(r=>new m6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(Cx,Ax,y6(e)),rr(Cx,Ax,"esm2017")}/**
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
 */const _6=5*60,w6=ek("authIdTokenMaxAge")||_6;let Rx=null;const x6=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>w6)return;const i=n==null?void 0:n.token;Rx!==i&&(Rx=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function E6(e=ik()){const t=Xh(e,"auth");if(t.isInitialized())return t.getImmediate();const n=BV(e,{popupRedirectResolver:g6,persistence:[k9,p9,KA]}),r=ek("authTokenSyncURL");if(r){const s=x6(r);l9(n,s,()=>s(n.currentUser)),a9(n,o=>s(o))}const i=JT("auth");return i&&WV(n,`http://${i}`),n}v6("Browser");/**
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
 */const nR="firebasestorage.googleapis.com",I6="storageBucket",S6=2*60*1e3,T6=10*60*1e3;/**
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
 */class fr extends hr{constructor(t,n,r=0){super(Qp(t),`Firebase Storage: ${n} (${Qp(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fr.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Qp(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ur;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ur||(ur={}));function Qp(e){return"storage/"+e}function k6(){const e="An unknown error occurred, please check the error payload for server response.";return new fr(ur.UNKNOWN,e)}function C6(){return new fr(ur.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function A6(){return new fr(ur.CANCELED,"User canceled the upload/download.")}function R6(e){return new fr(ur.INVALID_URL,"Invalid URL '"+e+"'.")}function P6(e){return new fr(ur.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Px(e){return new fr(ur.INVALID_ARGUMENT,e)}function rR(){return new fr(ur.APP_DELETED,"The Firebase app was deleted.")}function N6(e){return new fr(ur.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class An{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=An.makeFromUrl(t,n)}catch{return new An(t,"")}if(r.path==="")return r;throw P6(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${d}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},_=n===nR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",p=new RegExp(`^https?://${_}/${i}/${w}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:g,indices:m,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<v.length;x++){const S=v[x],k=S.regex.exec(t);if(k){const I=k[S.indices.bucket];let A=k[S.indices.path];A||(A=""),r=new An(I,A),S.postModify(r);break}}if(r==null)throw R6(t);return r}}class j6{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function b6(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...w){u||(u=!0,t.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,e(g,l())},w)}function f(){s&&clearTimeout(s)}function g(w,...p){if(u){f();return}if(w){f(),d.call(null,w,...p);return}if(l()||o){f(),d.call(null,w,...p);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let m=!1;function _(w){m||(m=!0,f(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function M6(e){e(!1)}/**
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
 */function L6(e){return e!==void 0}function Nx(e,t,n,r){if(r<t)throw Px(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Px(`Invalid value for '${e}'. Expected ${n} or less.`)}function D6(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function O6(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class $6{constructor(t,n,r,i,s,o,a,l,u,d,h,f=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Su(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ah.NO_ERROR,l=s.getStatus();if(!a||O6(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ah.ABORT;r(!1,new Su(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Su(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());L6(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=k6();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?rR():A6();o(l)}else{const l=C6();o(l)}};this.canceled_?n(!1,new Su(!1,null,!0)):this.backoffId_=b6(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&M6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Su{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function V6(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function F6(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function U6(e,t){t&&(e["X-Firebase-GMPID"]=t)}function z6(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function B6(e,t,n,r,i,s,o=!0){const a=D6(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return U6(u,t),V6(u,n),F6(u,s),z6(u,r),new $6(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
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
 */function H6(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function W6(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class lh{constructor(t,n){this._service=t,n instanceof An?this._location=n:this._location=An.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new lh(t,n)}get root(){const t=new An(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return W6(this._location.path)}get storage(){return this._service}get parent(){const t=H6(this._location.path);if(t===null)return null;const n=new An(this._location.bucket,t);return new lh(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw N6(t)}}function jx(e,t){const n=t==null?void 0:t[I6];return n==null?null:An.makeFromBucketSpec(n,e)}function q6(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:RL(i,e.app.options.projectId))}class G6{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=nR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=S6,this._maxUploadRetryTime=T6,this._requests=new Set,i!=null?this._bucket=An.makeFromBucketSpec(i,this._host):this._bucket=jx(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=An.makeFromBucketSpec(this._url,t):this._bucket=jx(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Nx("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Nx("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new lh(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new j6(rR());{const o=B6(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const bx="@firebase/storage",Mx="0.12.0";/**
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
 */const iR="storage";function Q6(e=ik(),t){e=We(e);const r=Xh(e,iR).getImmediate({identifier:t}),i=CL("storage");return i&&K6(r,...i),r}function K6(e,t,n,r={}){q6(e,t,n,r)}function Y6(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new G6(n,r,i,t,Ps)}function X6(){vs(new Ci(iR,Y6,"PUBLIC").setMultipleInstances(!0)),rr(bx,Mx,""),rr(bx,Mx,"esm2017")}X6();const wt=e=>e.docs.map(t=>t.data()),J6={apiKey:"AIzaSyBuDoETyUrO2RCDAlFMsW2uV-QmtCT8t6Y",authDomain:"soundbubble-27737.firebaseapp.com",projectId:"soundbubble-27737",storageBucket:"soundbubble-27737.appspot.com",messagingSenderId:"527274299416",appId:"1:527274299416:web:64b1ac2d05f4262df0736d",measurementId:"G-9TP9PEEV11"},qn=class qn{static get(t){return lx(this.firestore,t)}static getSubCollection(t,n){return lx(qn.firestore,`${t}/${n}`)}static async createUser(t,n){return await s9(this.auth,t,n)}static async setById(t,n,r){const i=await this.get(t),s=Yu(i,n);return await EA(s,r)}static async updateById(t,n,r){const i=await this.get(t),s=Yu(i,n);return await tV(s,r)}static async login(t,n){return await o9(this.auth,t,n)}static async logout(){return await u9(this.auth)}static onAuthStateChanged(t){return c9(this.auth,t)}static async getById(t,n){const r=this.get(t),i=Yu(r,n);return(await eV(i)).data()}static async listenTo(t,n,r,i){const s=[];i&&s.push(i);const o=Pt(this.get(t),r,...s);return nV(o,l=>{const u=wt(l);console.log("changed data"),n(u)})}};Le(qn,"app",rk(J6)),Le(qn,"auth",E6(qn.app)),Le(qn,"storage",Q6(qn.app)),Le(qn,"firestore",O5(qn.app,{experimentalForceLongPolling:!1}));let _e=qn;console.log({app:_e});const Lx=e=>t=>`${e}. Причина: ${t}`,Fc={operationFailed:Lx("Не удалось выполнить операцию"),loginFailed:Lx("Не удалось войти в аккаунт")},lo=class lo{static async getAllSongs(){try{const t=await Nt(this.ref);return wt(t)}catch(t){return console.error(t),[]}}static async getTopSongs(t=10){try{const n=await Nt(Pt(this.ref,Zn("listens","desc"),wi(t)));return wt(n)}catch(n){return console.error(n),[]}}static async getSongsByUserId(t){try{const n=await Ze.getUserByUid(t);return this.getSongsByUids((n==null?void 0:n.addedSongs)??[])}catch(n){return console.error(n),[]}}};Le(lo,"ref",_e.get("songs")),Le(lo,"getSongByUid",async t=>{try{if(!t)throw new Error(Fc.operationFailed("UID must be provided"));return _e.getById("songs",t)}catch{throw new Error("Failed to get song by uid "+t)}}),Le(lo,"getSongsByUids",async(t,n)=>{if(t.length===0)return[];if(n){const i=[];i.push(Zn("listens","desc"));const s=Pt(_e.get("songs"),At("id","in",t),...i),o=await Nt(s);return wt(o)}const r=t.map(i=>lo.getSongByUid(i));return Promise.all(r)});let rn=lo;class Qa{static async getAuthorsSong(t,n){var o,a;const r=[],i=n;return i?(((o=i.ownSongs)==null?void 0:o.length)!==0&&r.push(At("uid","in",i.ownSongs)),((a=i.ownPlaylists)==null?void 0:a.length)!==0&&r.push(At("uid","in",i.ownPlaylists)),wt(await Nt(Pt(this.ref,Y5(At("variantsOfName","array-contains",t),K5(...r)),Zn("rank","desc"),wi(3))))):[]}static async getFinalSuggestions(t,n){var r,i;try{const s=t[0];if(t.length!==0)return this.savedSuggestion={place:s.place,id:s.uid,lastSearch:n},t;const o=n.replace(((r=this.savedSuggestion)==null?void 0:r.lastSearch)??"","");if(console.log(o),((i=this.savedSuggestion)==null?void 0:i.place)==="users")return await this.getAuthorsSong(o);const l=wt(await Nt(Pt(this.ref,At("variantsOfName","array-contains",o),At("place","==","users")))).map(d=>d.uid),u=wt(await Nt(Pt(Ze.ref,At("uid","in",l))));return u?(await Promise.all(u.map(async d=>await this.getAuthorsSong(this.savedSuggestion.lastSearch,d)))).flatMap(d=>d):[]}catch(s){return console.error(s),[]}}static async getSearch(t){try{const n=await Nt(Pt(this.ref,At("variantsOfName","array-contains",t),Zn("rank","desc"),wi(10)));return wt(n)}catch(n){return console.error(n),[]}}static removeDuplicateSongs(t){const n={},r=[];return t.forEach(i=>{if(i){const s="id"in i?i.id:"uid"in i?i.uid:null;s&&!n[s]&&(r.push(i),n[s]=!0)}}),r}static async getResult(t,n=0){const r={playlists:mn.getPlaylistByUid,songs:rn.getSongByUid,users:Ze.getUserByUid},i=this.lastSuggestions.length!==t.length||this.lastSuggestions.findIndex((u,d)=>u.uid!==t[d].uid)!==-1;if(this.lastSuggestions=t,!i&&this.lastResult.length!==0)return this.lastResult;const s=t.map(async u=>await r[u.place](u.uid));let o=(await Promise.all(s)).flatMap(u=>u);const a=o[0];if(!a||o.length===0)return o;if("isAuthor"in a&&(a==null?void 0:a.isAuthor)&&"ownSongs"in a&&n!==0){const u=await Ze.getAuthorTopSongs(a.ownSongs,n),d=await Ze.getAuthorTopAlbums(a.ownPlaylists,3);console.log(d);const h=[a,...u,...d,...o];o=this.removeDuplicateSongs(h)}return this.lastResult=o,o}}Le(Qa,"ref",_e.get("search")),Le(Qa,"savedSuggestion",null),Le(Qa,"lastSuggestions",[]),Le(Qa,"lastResult",[]);class Fv extends Qa{static async getSearchSuggestions(t){try{if(t.length===0)return[];const n=await this.getSearch(t);console.log(t,n);const r=await this.getFinalSuggestions(n,t);return await this.getResult(r,3)}catch{throw new Error("Failed to get suggestions")}}static async getTopSearches(t=10){try{const n=await Nt(Pt(this.ref,Zn("rank","desc"),wi(t)));return await this.getResult(wt(n),3)}catch(n){return console.error(n),[]}}static async getSearchResult(t){try{const n=await this.getSearch(t);return this.getResult(n,6)}catch{throw new Error("Failed to get search result")}}}class mn{static async addSongToPlaylists(t,n){try{if(!t)throw new Error("Song id not specified");if(!n.length)throw new Error("Playlist ids not specified");const r=n.map(i=>_e.updateById("playlists",i,{songs:rV(t)}));return Promise.all(r)}catch(r){throw new Error(`Failed to add song to playlists ${t}, ${n}, ${r}`)}}}Le(mn,"ref",_e.get("playlists")),Le(mn,"getPlaylistByUid",async t=>{try{if(!t)throw new Error(Fc.operationFailed("UID must be provided"));return _e.getById("playlists",t)}catch{throw new Error("Failed to get playlist by uid "+t)}}),Le(mn,"getPlaylistsByUids",async t=>{if(t.length===0)return[];const n=Pt(_e.get("playlists"),At("id","in",t)),r=await Nt(n);return wt(r)});class Ze{static createUser({email:t,password:n}){try{return _e.createUser(t,n)}catch(r){console.error(r)}}static async login({email:t,password:n}){try{return _e.login(t,n)}catch(r){console.error(r)}}static async logout(){try{return _e.logout()}catch(t){console.error(t)}}static async getUserByUid(t){try{if(!t)throw new Error(Fc.loginFailed("UID must be provided"));return _e.getById("users",t)}catch{throw new Error("Failed to get user by id: "+t)}}static async getUsersByUids(t,n){try{if((t??[]).length===0)return[];const r=[];n&&r.push(Zn("numberOfListenersPerMonth","desc"));const i=await Nt(Pt(this.ref,At("uid","in",t),...r));return wt(i)}catch(r){return console.error(r),[]}}static async getAuthorTopSongs(t,n=3){try{if(t.length===0)return[];const r=await Nt(Pt(rn.ref,At("id","in",t),Zn("listens","desc"),wi(n)));return wt(r)}catch(r){return console.error(r),[]}}static async getAuthorTopAlbums(t,n=3){try{if(t.length===0)return[];console.log(t);const r=await Nt(Pt(mn.ref,At("id","in",t),wi(n)));return wt(r)}catch(r){return console.error(r),[]}}static async getSimilarAuthorsBySongs(t){try{if(t.length===0)return[];const n=[...new Set(t.flatMap(r=>r.authors.map(i=>i.uid)))];return await this.getUsersByUids(n,!0)}catch(n){return console.error(n),[]}}static async getTopAuthorsByListenings(t=10){try{const n=await Nt(Pt(this.ref,At("isAuthor","==",!0),Zn("numberOfListenersPerMonth","desc"),wi(t)));return wt(n)}catch(n){return console.error(n),[]}}static async listenToUsersChanges(t,n){try{return await _e.listenTo("users",n,At("uid","in",t),Zn("online","desc"))}catch{throw new Error("Failed to listen to users changes")}}}Le(Ze,"ref",_e.get("users")),Le(Ze,"onAuthStateChanged",async t=>{try{return _e.onAuthStateChanged(t)}catch(n){return console.error(n),null}});class sR{static async getSearchHistory(t){try{if(!t)throw new Error("userId is required in getSearchHistory");const n={playlists:mn.getPlaylistByUid,songs:rn.getSongByUid,users:Ze.getUserByUid},i=(await _e.getById("searchHistory",t)).history.slice(0,10).map(async s=>await n[s.type](s.id));return Promise.all(i)}catch(n){return console.error(n),[]}}}Le(sR,"ref",_e.get("history"));class oR{static async getHistoryByUserId(t){try{const n=await _e.getById("history",t),r=new Set(n.history);return await rn.getSongsByUids(Array.from(r))}catch{throw new Error("Failed to get history for user")}}}Le(oR,"ref",_e.get("history"));class Lf{static ownChatsQuery(t){return Pt(this.ref,At("participants","array-contains",t))}static async getChatsByUserId(t){try{const n=await Nt(this.ownChatsQuery(t)),r=wt(n),i={};let s={};const o={},a=r.map(async l=>{var h,f;const{messages:u,chatData:d}=await this.getChatMessagesByChatId(l.id,"desc",1);s=Object.assign(s,d),i[l.id]=u[0],o[l.id]=(f=((h=u[0])==null?void 0:h.seenBy)??[])!=null&&f.includes(t)?0:1});return await Promise.all(a),{chats:r.sort((l,u)=>{var d,h;return((d=i[u.id])==null?void 0:d.sentTime)-((h=i[l.id])==null?void 0:h.sentTime)}),chatDataObject:s,lastMessages:i,unreadCount:o}}catch{throw new Error("Failed to get chats by user id: "+t)}}static async getChatMessagesByChatId(t,n,r){try{const i=[];r!==void 0&&i.push(wi(r));const s=Pt(_e.getSubCollection("newChats",`${t}/messages`),Zn("sentTime",n??"asc"),...i),o=await Nt(s),a=wt(o),l=a.map(async d=>[...await rn.getSongsByUids(d.attachedSongs),...await mn.getPlaylistsByUids(d.attachedAlbums),...await Ze.getUsersByUids(d.attachedAuthors)]),u=(await Promise.all(l)).reduce((d,h)=>(h.forEach(f=>{d["id"in f?f.id:f.uid]=f}),d),{});return{messages:a,chatData:u}}catch{throw new Error("Failed to get messages by chatId id: "+t)}}static async sendMessage(t,n){try{console.log(t,n);const r=Yu(_e.firestore,`newChats/${t}/messages/${n.id}`);await EA(r,n)}catch(r){throw new Error("Failed to send message"+r.toString())}}}Le(Lf,"ref",_e.get("newChats"));const Z6={loadingPlaylistId:null,loadingAddedPlaylists:!1,loading:!1,currentPlaylist:null,currentPlaylistSongs:null,addedPlaylists:[]},aR=Oe(async e=>{try{if(!e.loadingPlaylistId)throw new Error("Playlist id not specified");const t=await mn.getPlaylistByUid(e.loadingPlaylistId),n=await rn.getSongsByUids(t.songs);return{playlist:t,songs:n}}catch(t){throw new Error(t.message)}}),lR=Oe(async({songId:e,playlistIds:t})=>{try{if(!e)throw new Error("Song id not specified");if(!t.length)throw new Error("Playlist ids not specified");return await mn.addSongToPlaylists(e,t)}catch(n){throw new Error(n.message)}}),cR=F(),uR=F(),sc=te(Z6);j({clock:cR,source:sc,fn:(e,t)=>({...e,loadingPlaylistId:t,loading:!0}),target:[sc,aR]});j({clock:aR.doneData,source:sc,fn:(e,{playlist:t,songs:n})=>({...e,loading:!1,currentPlaylist:t,currentPlaylistSongs:n}),target:sc});j({clock:uR,target:lR});const ch={usePlaylist:()=>Te(sc),useAddingSongToPlaylists:()=>Te([lR.pending]),events:{loadPlaylist:cR,addSongToPlaylists:uR}},eF=E.div`
    font-size: 0.8rem;
    opacity: 0.7;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 4px;
    width: ${({$width:e})=>e??"100%"};
`,tF=E(ua)`
    opacity: 0.8;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
        text-decoration: underline;
    }
`,Ts=({authors:e,onAuthorClick:t,width:n})=>{const r=i=>s=>{s.stopPropagation(),t==null||t(i)};return c.jsxs(eF,{className:"authors",$width:n,children:[e==null?void 0:e.map((i,s)=>c.jsxs(c.Fragment,{children:[s!==0?"&":" ",c.jsx(tF,{onClick:r(i),to:`/author/${i.uid}`,children:i.displayName},i.uid+s)]})),!(e!=null&&e.length)&&"-"]})},R=E.div`
  display: flex;
  align-items: ${({ai:e})=>e??"center"};
  justify-content: ${({jc:e})=>e??"flex-start"};
  flex-direction: ${({d:e})=>e??"row"};
  flex-wrap: ${({wrap:e})=>e};
  gap: ${({gap:e})=>`${e??0}px`};
  width: ${({width:e})=>e??"fit-content"};
  height: ${({height:e})=>e??"fit-content"};
  padding: ${({padding:e})=>e??"0"};
`,nF=E.div`
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
`,wa=()=>c.jsx(nF,{className:"loading",children:c.jsx(Rb,{})}),Uv=({loading:e,playling:t,size:n})=>c.jsx(c.Fragment,{children:e?c.jsx(wa,{}):t?c.jsx(GS,{size:n}):c.jsx(oy,{size:n})}),rF=()=>{const e=[10,11,8,4,12,13,7,13,10,5,9,8,10,12,4,12,5,13,12,11,5,9,8,10];return`@keyframes playing {
		${e.map((n,r)=>`${100/e.length*r+"%"} {
			height: ${n}px;
		}`)}
	}`},iF=E.div`
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

`,Kp=E.div`
	width: 2.5px;
	animation: playing 8s infinite;
	height: 12px;
	border-radius: 2px;

	${rF()}
`,dR=({playing:e,color:t})=>c.jsxs(iF,{$color:t,className:e?"playing-animation playing":"playing-animation",children:[c.jsx(Kp,{}),c.jsx(Kp,{}),c.jsx(Kp,{})]}),ks=E.span`
    font-size: 0.8rem;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.textColor};
    opacity: 0.6;
`,yn={author:c.jsx(Mb,{}),user:c.jsx(eT,{}),playlist:c.jsx(QS,{}),album:c.jsx(tT,{}),song:c.jsx(mo,{})},Df=ms.borderRadius.huge,oc=e=>c.jsx(Ty,{...e,borderRadius:e.borderRadius??Df,fallbackIcon:e.isAlbum?yn.album:yn.playlist}),Km=E(J)`
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
`,sF=E(ua)`
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
        ${Km} {
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
        border-radius: ${Df};
    }

    &:hover:before {
        opacity: 0.5;
    }

    &:hover {
        background: ${({$orientation:e,theme:t})=>e==="horizontal"?t.colors.hover:""};

        ${Km} {
            opacity: 1;
        }
    }

    @media (max-width: 1200px) {
        --size: ${({$orientation:e})=>e==="vertical"?"calc(100vw / 6)":"34px"};
    }

    @media (max-width: 800px) {
        --size: ${({$orientation:e})=>e==="vertical"?"calc(100vw / 4)":"34px"};
    }
`,oF=E.div`
    font-size: 0.95rem;
    font-weight: 200;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`;E.div`
    font-size: 0.8rem;
`;const Yo=({playlist:e,children:t,onClick:n,orientation:r="vertical"})=>{const{image:i,name:s,imageColors:o,authors:a,id:l,songs:u,isAlbum:d,isPrivate:h}=e,{play:f}=W.useControls(),{state:g}=W.useSong(),{queue:m}=W.queue.useQueue(),[_,w]=T.useState(!1),p=`/playlist/${l}`,y=g==="playing"&&m.url===p,v=(k,I)=>{const A={currentSongIndex:I,name:s,icon:i,url:p,songs:k,shuffle:!1};f(k[0],A)},x=k=>{k.preventDefault(),w(!0),rn.getSongsByUids(u).then(I=>{v(I,0),w(!1)})},S=k=>{n==null||n(e,k)};return c.jsxs(sF,{onClick:S,$orientation:r,className:y?"playing":"",to:`/playlist/${l}`,$color1:o[0],children:[!t&&c.jsx(Km,{$orientation:r,$color:o[0],onClick:x,children:y?c.jsx(dR,{playing:!0,color:o[1]}):c.jsx(Uv,{loading:_,playling:!1,size:18})}),c.jsx(oc,{size:void 0,borderRadius:r==="vertical"?void 0:"3px",src:i,color:o[0],isAlbum:d}),c.jsxs(R,{width:"100%",jc:"space-between",children:[c.jsxs(R,{d:"column",width:"100%",gap:0,ai:"flex-start",children:[c.jsxs(R,{children:[c.jsx(oF,{children:s}),h&&c.jsx(qS,{size:18})]}),r==="vertical"?c.jsx(Ts,{authors:a}):c.jsxs(R,{width:"100%",gap:4,children:[c.jsxs(ks,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[d?"Album":"Playlist"," /"]}),c.jsx(Ts,{width:"fit-content",authors:a})]})]}),t]})]})},aF=(e,t)=>j({clock:e.failData,source:t,fn:(n,r)=>({...n,error:r}),target:t}),hR=(e,t,n)=>j({clock:e.pending,source:t,fn:(r,i)=>({...r,[n??"loading"]:i}),target:t}),lF=e=>e instanceof Error?e.message:typeof e=="string"?e:"Ошибка",zv=(e,t)=>{try{return e()}catch(n){throw new Error(Fc[t](lF(n)))}},cF={data:null,error:null,userPlaylists:[]},uF={user:null,error:null,loading:!1,songs:[],playlists:[],similarAuthors:[],similarAuthorsLoading:!0},xa=(e,t)=>j({clock:e.doneData,fn:n=>n,target:t}),Bv=Oe(async e=>zv(async()=>{const{email:t,password:n}=e;if(!t||!n)throw new Error(Fc.loginFailed("Не указана почта или пароль"));await Ze.login(e)},"operationFailed")),dF=Oe(()=>zv(async()=>{await Ze.logout()},"operationFailed")),Hv=Oe(async e=>zv(async()=>{var r,i;const t=((i=(r=e.data)==null?void 0:r.addedSongs)==null?void 0:i.reverse())??[],n=await rn.getSongsByUids(t);return console.log({result:n}),n},"operationFailed")),Wv=Oe(async e=>{try{if(!e.data)throw new Error("Failed to load added playlists");return await mn.getPlaylistsByUids(e.data.ownPlaylists)}catch{throw new Error("Failed to load added playlists")}}),qv=Oe(async e=>{try{if(!e.data)throw new Error("Failed to load added playlists");return await mn.getPlaylistsByUids(e.data.addedPlaylists)}catch{throw new Error("Failed to load added playlists")}}),Uc=Oe(async e=>{try{const t=await Ze.getUserByUid(e),n=await rn.getSongsByUids((t==null?void 0:t.ownSongs)??[],!0),r=await mn.getPlaylistsByUids((t==null?void 0:t.ownPlaylists)??[]);return{user:t,songs:n,playlists:r}}catch{throw new Error("Failed to get user's page info")}}),Gv=Oe(async e=>{try{return await Ze.getSimilarAuthorsBySongs(e)}catch{throw new Error("Failed to load similar authors")}}),fR=Oe(async e=>{var t;try{const n=(t=e.data)==null?void 0:t.uid;return await sR.getSearchHistory(n)}catch{throw new Error("Failed to load search history")}}),pR=Oe(async e=>{var t,n;try{const r=((n=(t=e.data)==null?void 0:t.friends)==null?void 0:n.filter(i=>i.status==="added").map(i=>i.uid))??[];await Ze.listenToUsersChanges(r,Yv)}catch{throw new Error("Failed to load user friends")}}),gR=Oe(async e=>{var t;try{const n=(t=e.data)==null?void 0:t.lastSongPlayed;return n?await rn.getSongByUid(n):null}catch{throw new Error("Failed to load last song played")}}),mR=Oe(async()=>{try{await Ze.onAuthStateChanged(async e=>{const t=await Ze.getUserByUid(e==null?void 0:e.uid);console.log({userCred:e,user:t}),Kv(t)})}catch{throw new Error("Failed to load user data")}}),Qv=F(),$e=F(),hF=F(),Kv=F(),yR=F(),fF=F(),vR=F(),_R=F(),Yv=F(),wR=my(),Ht=te(cF);Ht.reset($e);const Xv=te([]);Xv.reset($e);const xR=te(null);xR.reset($e);const pF=te([]);pF.reset($e);const Jv=te([]);Jv.reset($e);const Zv=te([]);Zv.reset($e);const e1=te([]);e1.reset($e);const t1=te([]);t1.reset($e);const $r=te(uF).reset(_R);$r.reset($e);j({clock:wR.open,target:mR});j({clock:Qv,target:Bv});j({clock:$e,target:dF});j({clock:Qv,source:Ht,fn:e=>({...e,loggining:!0}),target:Ht});j({clock:Bv.doneData,source:Ht,fn:e=>({...e,loggining:!1}),target:Ht});j({clock:Bv.failData,source:Ht,fn:(e,t)=>({...e,error:t,loggining:!1}),target:Ht});j({clock:Yv,fn:e=>e,target:e1});j({clock:Kv,source:Ht,fn:(e,t)=>({...e,data:t,loggining:!1}),target:[Ht,Hv,Wv,qv,fR,pR,gR]});xa(Hv,Xv);xa(Wv,Jv);xa(gR,xR);xa(qv,Zv);xa(fR,t1);j({clock:yR,source:Ht,fn:(e,t)=>({...e,logginining:t}),target:Ht});j({clock:fF,target:Uc});hR(Uc,$r,"loading");aF(Uc,$r);j({clock:Uc.doneData,source:$r,fn:(e,t)=>({...e,...t,similarAuthors:[]}),target:$r});j({clock:vR,target:Gv});hR(Gv,$r,"similarAuthorsLoading");j({clock:Gv.doneData,source:$r,fn:(e,t)=>({...e,similarAuthors:t}),target:$r});const Ie={useUser:()=>Te([Ht,mR.pending]),useSongLibrary:()=>Te([Xv,Hv.pending]),useOwnPlaylists:()=>Te([Jv,Wv.pending]),useAddedPlaylists:()=>Te([Zv,qv.pending]),useSearchHistory:()=>Te(t1),useUserPage:()=>Te($r),useFriends:()=>Te([e1,pR.pending]),events:{login:Qv,logout:$e,loadSimilarAuthors:vR,createUser:hF,setUser:Kv,setLoggining:yR,loadUserPageFx:Uc,resetUserPage:_R,updateFriends:Yv},gates:{useLoadUser:()=>gy(wR)}},ER=E.div`
    padding: 2px 5px;
    display: inline-block;
    background: #fff;
    color: ${({theme:e})=>e.colors.blue.action};
    font-weight: 600;
    font-size: 0.7rem;
    border-radius: 10px;
    height: 18px;
`,gF=E.div`
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
`,IR=E.div`
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
`,Cs=(e,t)=>{if(!e.length)return"";const n=t??!0,r=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?r.replace(/[,'._/]/g,""):r},mF=E.div`
    position: relative;
    width: 100%;

    opacity: ${({$disabled:e})=>e?.4:1};
    pointer-events: ${({$disabled:e})=>e?"none":"all"};
`,SR=E.div`
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
`,yF=E.div`
    height: fit-content;
    position: relative;
`,vF=E(SR)`
    left: 10px;
`,_F=E(SR)`
    right: 10px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background: ${({theme:e})=>e.colors.lightHover};
    }
`,n1=E.label`
    font-size: 0.8rem;
    margin-bottom: 4px;
    font-weight: 300;
    display: inline-block;
    width: 100%;
    color: ${({theme:e})=>e.colors.greyText};
`,wF=E(n1)`
    margin-bottom: 0;
    margin-top: 4px;
    color: ${({theme:e})=>e.colors.red.text};
`,TR=E.span`
    color: ${({theme:e})=>e.colors.red.main};
`,xF=E.input`
    border: none;
    background: ${({theme:e})=>e.colors.input};
    padding: 10px 10px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};
    color: ${({theme:e})=>e.colors.textColor};
    height: 40px;
    font-size: 0.95rem;
    font-weight: 300;
    width: 100%;
    border: 1px solid
        ${({theme:e,$hasError:t})=>t?e.colors.red.text:"none"};
    padding-left: ${({$hasIcon:e})=>e?"40px":"10px"};
    padding-right: ${({$hasRightIcon:e})=>e?"40px":"10px"};

    &:disabled {
        background: ${({theme:e})=>e.colors.border};
    }
`,zn=({icon:e,rightIcon:t,label:n,required:r,error:i,type:s,onRightIconClick:o,...a})=>c.jsxs(mF,{$disabled:a.disabled,children:[n&&c.jsxs(n1,{children:[n," ",c.jsx(TR,{children:r?"*":""})]}),c.jsxs(yF,{children:[c.jsx(vF,{children:e}),c.jsx(xF,{$hasError:!!i,$hasIcon:!!e,$hasRightIcon:!!t,type:s,required:r,...a}),t&&c.jsx(_F,{onClick:o,children:t})]}),i&&c.jsx(wF,{children:i})]}),EF=E.div`
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
`,kR=({inputPlaceholder:e,added:t,allItems:n,searchValue:r,setAdded:i,setVisibleItems:s,itemImage:o,itemName:a,setSearchValue:l})=>{const u=h=>()=>{i(f=>f.filter(g=>g!==h))},d=h=>{console.log({e:h.target.value}),l(h.target.value),h.target.value!==void 0&&h.target.value.length!==0?s(()=>n.filter(f=>{var g;return f?Cs(a(f)).includes(Cs((g=h==null?void 0:h.target)==null?void 0:g.value)):!1})):s(n)};return c.jsxs(EF,{className:t.length>0?"open":"",children:[c.jsx(zn,{width:100,placeholder:e,icon:c.jsx(sa,{}),onChange:d,value:r}),c.jsx(R,{wrap:"wrap",width:"100%",gap:4,children:t.map(h=>{const f=n.find(g=>(g.id??g.uid??"")===h);return f?c.jsxs(gF,{children:[o(f),a(f),c.jsx(J,{$width:"20px",$height:"20px",onClick:u(h),children:c.jsx(vb,{size:18})})]}):null})})]})},Dx=E.div`
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
`,dr=({loading:e,children:t,appearance:n="ghost",disabled:r,width:i,...s})=>{const o={primary:ms.colors.blue.action,secondary:ms.colors.blue.transparent,ghost:"transparent"};return c.jsxs(J,{disabled:r||e,$background:o[n],$width:i,color:n==="primary"?"#fff":"",...s,children:[c.jsx(Dx,{className:e?"show":"hide",children:c.jsx(wa,{})}),c.jsx(Dx,{className:e?"hide":"show",children:t})]})},IF=E.div`
	color: ${({$checked:e,theme:t})=>e?t.colors.blue.action:t.colors.greyText};
	height: 24px;
`,CR=({checked:e})=>c.jsx(IF,{$checked:e,children:e?c.jsx(mb,{size:24,color:"blue"}):c.jsx(_b,{size:24})}),SF=E(J)`
  font-size: 0.9rem;
  padding: 7px;
  gap: 12px;
  font-weight: 300;
`,TF=E.div`
  width: 35px;
  height: 35px;
  border-radius: ${Df};
  background: ${({theme:e})=>e.colors.pageBackground2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.blue.action};
  
  svg {
    width: 20px;
    height: 20px;
  }
`,AR=({song:e})=>{const[t]=Ie.useOwnPlaylists(),[n,r]=T.useState(""),[i,s]=T.useState(t),[o,a]=T.useState(e?t.filter(h=>h.songs.includes(e==null?void 0:e.id)).map(h=>h.id):[]),[l]=ch.useAddingSongToPlaylists(),u=(h,f)=>{f.preventDefault(),o.find(m=>m===h.id)?a(m=>m.filter(_=>_!==h.id)):(a(m=>[...m,h.id]),n.length!==0&&(r(""),s(t)))},d=()=>{e&&ch.events.addSongToPlaylists({songId:e.id,playlistIds:o})};return c.jsxs(R,{width:"100%",d:"column",padding:"0 25px",children:[c.jsx(kR,{inputPlaceholder:"Search for playlists...",added:o,allItems:t,searchValue:n,setSearchValue:r,itemImage:h=>c.jsx(oc,{color:"grey",src:h.image,size:"18px",isAlbum:h.isAlbum}),itemName:h=>h.name,setAdded:a,setVisibleItems:s}),c.jsxs(SF,{$align:"left",children:[c.jsx(TF,{children:c.jsx(KS,{})}),"New Playlist"]}),i.map(h=>{const f=!!o.find(g=>g===h.id);return c.jsx(Yo,{onClick:u,orientation:"horizontal",playlist:h,children:c.jsx(CR,{checked:f})},h.id)}),c.jsx(IR,{className:o.length>0?"open":"",children:c.jsxs(dr,{appearance:"primary",onClick:d,loading:l,children:["Add to",c.jsx(ER,{children:o.length}),"playlist"]})})]})},vn=e=>c.jsx(Ty,{...e,fallbackIcon:e.fallbackIcon??(e.isAuthor?yn.author:yn.user),borderRadius:"100%"}),kF=E(ua)`
    --size: calc(100vw / 11);

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
        --size: calc(100vw / 9);
    }

    @media (max-width: 1000px) {
        --size: calc(100vw / 7);

        h4 {
            font-size: 0.86rem;
        }

        span {
            font-size: 0.7rem;
        }
    }
`,r1=E.div`
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({theme:e})=>e.colors.blue.action};
    outline: 2px solid ${({theme:e})=>e.colors.pageBackground};
    position: absolute;
    bottom: 0px;
    right: 0px;
`,CF=E.span`
	font-size: 0.8rem;
	font-weight: 300;
	opacity: 0.5;

	&.online {
		color: ${({theme:e,color:t})=>t??e.colors.blue.action};
		opacity: 1;
	}
`,i1=({isAuthor:e,showLastSeen:t,status:n,color:r})=>c.jsx(CF,{color:r,className:n==="online"&&t?"online":"",children:e?"Author":t?n:"User"}),Of=e=>{if(!e)return{status:"offline"};const t=new Date().getTime()-3e5,n=new Date().getTime()-18e5*4;if(e>t)return{status:"online"};const i=new Date(e),s=new Date(new Date().getTime()-i.getTime()).getMinutes(),o=Math.floor(s/60)>0?Math.floor(s/60)===1?"hour":"hours":"minutes";return e>n?{status:`last seen ${s} ${o} ago`}:{status:`last seen ${i.toLocaleDateString("ru-RU")}`}},Vr=T.memo(({user:e,onClick:t,children:n,as:r,showLastSeen:i,orientation:s="vertical"})=>{if(!e)return null;const{uid:o,imageColors:a,photoURL:l,isAuthor:u,displayName:d,isVerified:h,online:f}=e,g=s==="vertical",m=Of(f).status,_=w=>{t==null||t(e,w)};return c.jsxs(kF,{as:r,to:`/author/${o}`,$orientation:s,onClick:_,children:[c.jsx(vn,{color:a==null?void 0:a[0],src:l,size:g?"var(--size)":"38px",isAuthor:u,children:m==="online"&&!u&&c.jsx(r1,{})}),c.jsxs(R,{d:"column",gap:g?4:1,width:"100%",ai:g?"center":"flex-start",children:[c.jsxs(R,{jc:g?"center":"flex-start",gap:8,width:"100%",children:[c.jsx("h4",{children:d}),h&&c.jsx(Mh,{size:16,style:{color:ms.colors.blue.main}})]}),c.jsx(i1,{status:m,isAuthor:u,showLastSeen:i})]}),n]})});Vr.displayName="UserItem";const zc=({entity:e})=>{const[t]=Ie.useFriends(),[n,r]=T.useState(t),[i,s]=T.useState(""),[o,a]=T.useState([]),l=(h,f)=>{f.preventDefault(),o.find(m=>m===h.uid)?a(m=>m.filter(_=>_!==h.uid)):(a(m=>[...m,h.uid]),i.length!==0&&(s(""),r(t)))},u=()=>{r(t),a([]),s("")},d=()=>{console.log(e)};return c.jsxs(R,{d:"column",height:"600px",width:"100%",padding:"0 25px",children:[c.jsx(kR,{inputPlaceholder:"Search for friends...",added:o,allItems:t,searchValue:i,setSearchValue:s,itemImage:h=>c.jsx(vn,{color:"grey",src:h.photoURL,size:"18px",isAuthor:h.isAuthor}),itemName:h=>h.displayName,setAdded:a,setVisibleItems:r}),c.jsx(R,{jc:"flex-end",width:"100%",children:o.length>0&&c.jsx(J,{onClick:u,$height:"25px",$width:"90px",style:{fontSize:"0.8rem",opacity:"0.7"},children:"Deselect all"})}),c.jsx(R,{d:"column",width:"100%",children:n.map(h=>{const f=!!o.find(g=>g===h.uid);return c.jsx(Vr,{showLastSeen:!0,as:"button",onClick:l,orientation:"horizontal",user:h,children:c.jsx(CR,{checked:f})},h.uid)})}),c.jsxs(IR,{className:o.length>0?"open":"",children:[c.jsx(zn,{placeholder:"Your Message"}),c.jsxs(dr,{appearance:"primary",onClick:d,children:["Send",c.jsx(ER,{children:o.length})]})]})]})},Ox=e=>e<=9?`0${e}`:`${e}`,$x=e=>{const t=Math.floor(e/60),n=Math.floor(e%60);return`${Ox(t)}:${Ox(n)}`},AF=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    color: #fff;
`,RF=E.input`
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
`,nd=E.button`
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
`,Vx=E.div`
    font-size: 0.8rem;
`,fl=E(nd)`
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
`,RR=({state:e,colors:t,duration:n,currentTime:r,loopMode:i,shuffle:s,disableNextSongButton:o,handleShuffle:a,handleLoopMode:l,onPlay:u,onNext:d,onPrev:h,handleChangeTime:f,handleMouseUp:g})=>{const{getBackgroundSize:m,currentTimeStr:_,durationStr:w}=T.useMemo(()=>({getBackgroundSize:{backgroundSize:`calc(${r*100/n}% + 1px) 100%`},currentTimeStr:$x(r),durationStr:$x(n)}),[n,r]),p=t==null?void 0:t[0];return c.jsxs(AF,{className:"music-controls",children:[c.jsx(RF,{style:m,color1:t==null?void 0:t[0],type:"range",value:r,max:n,min:0,onChange:f,onMouseUp:g,className:"song-slider"}),c.jsxs(R,{jc:"space-between",width:"100%",className:"duration-numbers",children:[c.jsx(Vx,{children:_}),c.jsx(Vx,{children:w})]}),c.jsxs(R,{jc:"space-between",width:"100%",className:"control-buttons",children:[c.jsx(fl,{$color1:p,className:s?"queue-button selected":"queue-button",onClick:a,children:c.jsx(HS,{})}),c.jsxs(R,{gap:20,className:"playback-buttons",children:[c.jsxs(nd,{className:"control-button",onClick:h,children:[c.jsx(z_,{className:"prev-icon-2"}),c.jsx(z_,{className:"prev-icon-1"})]}),c.jsx(nd,{className:"control-button",disabled:e==="loading",onClick:u,children:c.jsx(Uv,{loading:e==="loading",playling:e==="playing"})}),c.jsxs(nd,{className:"control-button",disabled:o,onClick:d,children:[c.jsx(U_,{className:"next-icon-1"}),c.jsx(U_,{className:"next-icon-2"})]})]}),c.jsxs(fl,{className:i!==lt.noloop?"queue-button selected":"queue-button",onClick:l,$color1:p,children:[i===lt.loopone&&c.jsx(Ub,{}),i!==lt.loopone&&c.jsx(zb,{})]})]})]})},PF=E.button`
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
`,PR=({onClick:e})=>c.jsx(PF,{onClick:e,children:c.jsx(nT,{})}),NR=()=>{const{currentSong:e,state:t}=W.useSong(),{currentTime:n,duration:r}=W.playblack.usePlayback(),{queue:i,loop:s}=W.queue.useQueue(),{next:o,previous:a,play:l}=W.useControls(),u=i.songs.length<2||s===lt.noloop&&i.currentSongIndex===i.songs.length-1,d=T.useCallback(()=>l(),[l]),h=w=>{W.playblack.setIsSliding(!0),W.playblack.setCurrentTime(+w.target.value)},f=w=>{W.playblack.setIsSliding(!1),W.playblack.setLastRangeValue(+w.currentTarget.value),W.lyrics.calculateCurrentLyric(+w.currentTarget.value)},g=()=>{W.queue.changeLoopMode()},m=()=>{},_=T.useCallback(w=>{console.log(w.key),w.key==="Space"&&d()},[d]);return T.useEffect(()=>(addEventListener("keydown",_),()=>removeEventListener("keydown",_)),[_]),{currentTime:n,duration:r,colors:e==null?void 0:e.imageColors,state:t,loopMode:s,shuffle:!0,disableNextSongButton:u,handleShuffle:m,handleLoopMode:g,onPlay:d,onPrev:a,onNext:o,handleMouseUp:f,handleChangeTime:h}},NF=()=>{const e=NR();return c.jsx(RR,{...e})},Bc=E.div`
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
		  background-position: -200px -220px;
      background-size: 130% 130%;
    }
    100% {
		  background-position: 0 0;
      background-size: 150% 150%;
    }
  }
`,jF=E(Bc)`
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    transition: 0.2s, 0.5s background;
    bottom: 0;
    align-items: center;
    will-change: transform, opacity;
`,bF=E.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & .authors {
        font-size: 1rem;
        color: #fff;

        a {
            color: #fff;
        }
    }
`,MF=E.div`
    overflow: hidden;
    border-radius: ${({theme:e})=>e.borderRadius.middle};
    background: ${({$color1:e})=>e??"darkgrey"};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 130px #00000057;
    width: 400px;
    height: 400px;
    overflow: hidden;

    svg {
        color: dimgray;
        width: 100px;
        height: 100px;
    }
`;E.div`
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
`;const LF=E.div`
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
`,DF=E.div`
    font-size: 1.5rem;
    width: 360px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
`,OF=E.div`
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
`,$F=E.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #fff;
    font-size: 1.8rem;
`,VF=E.div`
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
`;E.button`
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
`;const FF=E.div`
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
`,UF=E.div`
    position: absolute;
    left: 40px;
    bottom: 40px;
    width: calc(100% - 80px);
    display: flex;
    justify-content: space-between;
`,zF=({type:e,hasLyrics:t,hasQueue:n,handleClickControlButton:r})=>{const{currentSong:i}=W.useSong(),s=()=>W.fullscreen.close();return c.jsx(LF,{children:c.jsxs(bF,{children:[c.jsx(MF,{$color1:i==null?void 0:i.imageColors[0],children:c.jsx(Yh,{size:"400px",color:i==null?void 0:i.imageColors[0],src:i==null?void 0:i.cover})}),c.jsxs(R,{d:"column",gap:2,children:[c.jsxs(R,{width:"100%",gap:10,children:[c.jsx(DF,{children:(i==null?void 0:i.name)??"Untitled"}),c.jsx(Kh,{height:"30px",songId:i==null?void 0:i.id,onClick:()=>null,likeColor:i==null?void 0:i.imageColors[1]})]}),c.jsx(Ts,{authors:i==null?void 0:i.authors,onAuthorClick:s})]}),c.jsx(NF,{}),c.jsxs(UF,{children:[c.jsx(fl,{children:c.jsx(qb,{opacity:.9})}),c.jsxs(R,{gap:20,children:[c.jsx(fl,{disabled:!n,className:e==="queue"?"selected":"",onClick:r("queue"),children:c.jsx(QS,{opacity:.9})}),c.jsx(fl,{disabled:!t,className:e==="lyrics"?"selected":"",onClick:r("lyrics"),children:c.jsx(YS,{opacity:.9})})]})]})]})})},jR=()=>{const e=T.useRef(null),[{lyrics:t,currentLyricIndex:n},r]=W.lyrics.useLyrics(),{state:i}=W.useSong(),s=o=>()=>{isNaN(+o)||(W.playblack.setLastRangeValue(+o),W.lyrics.calculateCurrentLyric(+o))};return T.useEffect(()=>{e.current&&e.current.scrollIntoView({behavior:"smooth",block:"end"})},[n]),T.useEffect(()=>(W.lyrics.setShouldCalculateLyrics(!0),()=>{W.lyrics.setShouldCalculateLyrics(!1)}),[]),t?c.jsx($F,{children:t.map((o,a)=>{var m;const l=i==="pause"||isNaN(+o.startTime),u=a===n,d=a+1<n||a-1>n,h=o.text==="@loading",f=(((m=t[a+1])==null?void 0:m.startTime)??o.startTime)-o.startTime,g=l?"ordinary":u?"current":d?"farFromCurrent":"";return c.jsx(VF,{ref:r&&u&&!l?e:void 0,className:g,onClick:s(o.startTime),children:h?c.jsxs(FF,{className:u&&i==="playing"?"current":"",$duration:f,children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}):o.text},o.text+a)})}):"No lyrics available"},bR=220,BF={content:null,isOpen:!1,x:0,y:0,height:0,width:bR,origin:"center"},HF=(e,t,n,r,i,s)=>{let o,a,l,u=0;return e-s<0?(l=e-n,a="left"):(a="right",l=e-s),t+i>window.innerHeight-100?(o="bottom",u=t-i-4):(o="top",u=t+r+4),{posX:l+n,posY:u,origin:`${o} ${a}`}},MR=F(),LR=F(),ac=te(BF);j({clock:MR,source:ac,fn:(e,{content:t,width:n=bR,height:r,e:i})=>{const s=i.currentTarget.getBoundingClientRect(),{left:o,top:a,width:l,height:u}=s,{posX:d,posY:h,origin:f}=HF(o,a,l,u,r,n??e.width);return{content:t,x:d,y:h,origin:f,height:r,width:n??e.width,isOpen:!e.isOpen}},target:ac});j({clock:LR,source:ac,fn:e=>({...e,content:null,isOpen:!1}),target:ac});const En={usePopup:()=>Te(ac),events:{open:MR,close:LR}},$f=E.div`
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
`,Xo=E.div`
	width: 100%;
	height: 0.5px;
	background: #91919142;
	margin: 8px 0;
`,WF={opened:!1,title:"",content:null},DR=F(),OR=F(),lc=te(WF);j({clock:DR,source:lc,fn:(e,{title:t,content:n})=>({opened:!0,title:t,content:n}),target:lc});j({clock:OR,source:lc,fn:e=>({...e,opened:!1}),target:lc});const Wt={useModal:()=>Te(lc),events:{open:DR,close:OR}},$R=({song:e})=>{var s;const[{data:t}]=Ie.useUser(),n=(s=t==null?void 0:t.addedSongs)==null?void 0:s.find(o=>o===(e==null?void 0:e.id)),r=()=>{Wt.events.open({title:`Share "${e==null?void 0:e.name}" with friends`,content:c.jsx(zc,{entity:e})}),En.events.close()},i=()=>{Wt.events.open({title:`Add "${e==null?void 0:e.name}" to playlist`,content:c.jsx(AR,{song:e})}),En.events.close()};return c.jsxs($f,{children:[n?c.jsxs(J,{children:[c.jsx(Cb,{}),"Remove from Liked"]}):c.jsxs(J,{children:[c.jsx(ry,{size:20}),"Add to Liked"]}),c.jsxs(J,{onClick:i,children:[c.jsx(XS,{size:20}),"Add to playlist"]}),c.jsxs(J,{children:[c.jsx(Fb,{}),"Add to queue"]}),c.jsx(Xo,{}),c.jsxs(J,{onClick:r,children:[c.jsx(yc,{}),"Share"]}),c.jsxs(J,{children:[c.jsx(sy,{}),"Info"]}),c.jsxs(J,{children:[yn.author,"Authors"]}),(t==null?void 0:t.isAdmin)&&c.jsxs(c.Fragment,{children:[c.jsx(Xo,{}),c.jsxs(J,{children:[c.jsx(WS,{}),"Edit song",c.jsx("span",{className:"admin",children:"Admin"})]})]})]})},uh=E.div`
    border: none;
    transition: 0.2s opacity;
    cursor: pointer;

    width: var(--icon-size);
    height: var(--icon-size);
`,Vf=E.div`
    position: absolute;
    z-index: 1;
    background: #0e0e0e;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme:e})=>e.colors.overlay};
    border-radius: ${ky};
`,dh=E.button`
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
`,VR=E(Vf)`
    left: 0;
    top: 0;
    opacity: 0;
`,FR=E(Vf)`
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
`,qF=E(Vf)`
    left: 0;
    top: 0;
`,GF=E.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;

    ${Vf} {
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
`,QF=E.div`
    width: 100%;
    height: 50px;
    background: ${({playing:e,theme:t})=>e?t.colors.lightHover:"transparent"};
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

    &:hover {
        background: ${({theme:e})=>e.colors.hover};
        /* box-shadow: 0 0 20px #14141473; */

        ${FR} {
            ${uh} {
                opacity: 1;
            }

            .playing-animation {
                opacity: 0;
            }
        }

        .cover-children {
            ${VR} {
                opacity: 1;
            }
        }

        ${dh} {
            opacity: 1;
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

    /* @container (max-width: 699px) {
    height: 60px;
  } */
`,KF=E.div`
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
`,YF=E.div`
    font-weight: 200;
    opacity: 0.85;
    font-size: 1rem;

    @container (min-width: 700px) {
        white-space: nowrap;
    }
`,XF=E.div`
    display: flex;
    align-items: center;
    gap: 8px;

    @container (min-width: 700px) {
        width: 100%;
    }
`,Fx=E.div`
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
`;E(J)`
    width: 30px;
    min-height: 30px;
    color: ${({theme:e})=>e.colors.greyText};

    svg {
        width: 22px;
        height: 22px;
    }
`;const JF=E.div`
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
`,ZF=E.div`
    container-type: size;
    width: 100%;
    height: 50px;
`,eU=E.div`
    width: 100%;
    @container (max-width: 699px) {
        display: none;
    }
`,tU=E.div`
    height: 60px;

    @container (min-width: 700px) {
        display: none;
    }
`,Hc=T.memo(({song:e,playing:t,loading:n,index:r,onClick:i})=>{const{id:s,name:o,authors:a,imageColors:l,cover:u,listens:d}=e,h=g=>{g.stopPropagation(),En.events.open({content:c.jsx($R,{song:e}),height:329,e:g})},f=()=>i(e,r);return c.jsxs(QF,{onClick:f,tabIndex:0,role:"button","aria-pressed":"false",playing:t,children:[c.jsxs(GF,{$color1:l[0],children:[c.jsxs(Yh,{size:"35px",src:u,color:l[0],children:[!n&&!t&&c.jsx(VR,{children:c.jsx(uh,{children:c.jsx(oy,{className:"action-icon"})})}),!n&&t&&c.jsxs(FR,{children:[c.jsx(uh,{children:c.jsx(GS,{className:"action-icon"})}),c.jsx(dR,{color:l[1],playing:!0})]}),n&&c.jsx(qF,{children:c.jsx(wa,{})})]}),c.jsxs(KF,{children:[c.jsxs(XF,{children:[c.jsx(YF,{children:o}),c.jsxs(Fx,{children:[d,c.jsx(jd,{})]})]}),c.jsx(Ts,{authors:a})]})]}),c.jsxs(Fx,{className:"outside",children:[d,c.jsx(jd,{})]}),c.jsxs(JF,{children:[c.jsx(Kh,{width:"35px",height:"35px",songId:s,likeColor:l[1],onClick:()=>null}),c.jsx(dh,{onClick:h,children:c.jsx(ny,{})})]})]})});Hc.displayName="SongItem";const s1=e=>{const{play:t}=W.useControls();return{handlePlay:(r,i)=>{const s={currentSongIndex:i,name:e.listName,icon:e.listIcon,url:e.listUrl,songs:e.songs,shuffle:!1};t(r,s)}}},UR=e=>{const{currentSong:t,state:n,loaded:r}=W.useSong(),{songs:i}=e,{handlePlay:s}=s1(e);return c.jsx(c.Fragment,{children:i.map((o,a)=>{const l=o.id===(t==null?void 0:t.id);return c.jsx(Hc,{onClick:s,index:a,song:o,playing:l&&n==="playing",loading:l&&n==="loading",loaded:l&&r},o.id+a)})})},nU=({queue:e})=>{var t;return c.jsxs(R,{d:"column",gap:4,width:"100%",children:[(t=e.url)!=null&&t.includes("author")?c.jsx(Vr,{onClick:()=>W.fullscreen.close(),orientation:"horizontal",user:{displayName:e.name??"",uid:e.url.split("/author/")[1],imageColors:[],photoURL:e.icon,isVerified:!0,isAuthor:!0,online:0,lastSongPlayed:""}}):null,c.jsx(Xo,{}),c.jsx(UR,{songs:e.songs,listName:null,listIcon:void 0,listUrl:null})]})},rU=({type:e})=>{const{queue:t}=W.queue.useQueue();return e===null?null:c.jsxs(OF,{className:e!==null?"visible":"",children:[e==="lyrics"&&c.jsx(jR,{}),e==="queue"&&c.jsx(nU,{queue:t})]})},iU=({open:e})=>{const{currentSong:t}=W.useSong(),{queue:n}=W.queue.useQueue(),[r,i]=T.useState(e),[s,o]=T.useState(null),a=(t==null?void 0:t.lyrics)!==void 0&&((t==null?void 0:t.lyrics.length)??0)>0,l=()=>{W.fullscreen.close()};T.useEffect(()=>{e?i(!0):setTimeout(()=>{i(!1)},200)},[e]);const u=d=>()=>{o(s===d?null:d)};return T.useEffect(()=>{!a&&s==="lyrics"&&o(null)},[a,s]),c.jsx(jF,{className:e?"open":"close",$colors:t==null?void 0:t.imageColors,children:r&&c.jsxs(c.Fragment,{children:[c.jsx(PR,{onClick:l}),c.jsx(zF,{type:s,handleClickControlButton:u,hasQueue:n.songs.length>0,hasLyrics:a}),c.jsx(rU,{type:s})]})})},sU="data:image/svg+xml;base64,PHN2ZyBpZD0i0KHQu9C+0LlfMSIgZGF0YS1uYW1lPSLQodC70L7QuSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzAyLjMyIDI0Ny4yMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj0JHQtdC30YvQvNGP0L3QvdGL0Llf0LPRgNCw0LTQuNC10L3Rgl85OCk7fS5jbHMtMntmaWxsOnVybCgj0JHQtdC30YvQvNGP0L3QvdGL0Llf0LPRgNCw0LTQuNC10L3Rgl8yOTcpO30uY2xzLTN7ZmlsbDp1cmwoI9CR0LXQt9GL0LzRj9C90L3Ri9C5X9Cz0YDQsNC00LjQtdC90YJfOTMpO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0i0JHQtdC30YvQvNGP0L3QvdGL0Llf0LPRgNCw0LTQuNC10L3Rgl85OCIgeDE9IjUwLjg2IiB5MT0iODUuODUiIHgyPSIxNjMuMzMiIHkyPSI4NS44NSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgzNi4xMiAxODUuOCkgcm90YXRlKC0xMDkuNDMpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2ZiMWZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZhYWRlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ItCR0LXQt9GL0LzRj9C90L3Ri9C5X9Cz0YDQsNC00LjQtdC90YJfMjk3IiB4MT0iLTgwLjA1IiB5MT0iMTY1Ljk1IiB4Mj0iLTMyLjIiIHkyPSIxNjUuOTUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc2LjQxIDE0Mi4wOCkgcm90YXRlKDUzLjQyKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzI4MzU5MyIvPjxzdG9wIG9mZnNldD0iMC45OSIgc3RvcC1jb2xvcj0iIzdkOGJmZSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSLQkdC10LfRi9C80Y/QvdC90YvQuV/Qs9GA0LDQtNC40LXQvdGCXzkzIiB4MT0iNDcuNzciIHkxPSIxNjQuNTciIHgyPSIzNTAuMDkiIHkyPSIxNjQuNTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzZmIxZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkNDk0ZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+TG9nbzM8L3RpdGxlPjx0ZXh0IHg9Ii00Ny43NyIgeT0iLTI5LjciLz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjgxLjQ2IiBjeT0iNTYuMjUiIHI9IjU2LjIzIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIyMDkuNyIgY3k9IjE5NS45IiByPSIyMy45MyIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTM1MCwxNDkuMTRBNjEuMzksNjEuMzksMCwwLDAsMjkyLjU1LDkwLjlhNjIuNzcsNjIuNzcsMCwwLDAtMTAuMjkuMjUsNTAuNyw1MC43LDAsMCwxLTM5LjQxLTEyLjQ4LDEwMy4zNywxMDMuMzcsMCwwLDAtNjQuNC0yNi4zM0MxMTkuNTksNDkuNjUsNjkuODEsOTcuMTUsNjkuODMsMTU2LjA2QTEwMy42MSwxMDMuNjEsMCwwLDAsNzMsMTgxLjM4YTYuMDYsNi4wNiwwLDAsMS0yLjgzLDYuNzMsNDUuMiw0NS4yLDAsMSwwLDU4LjYyLDY2LjYxLDYuMDcsNi4wNywwLDAsMSw3LTJsLjI3LjFhMTI0LDEyNCwwLDAsMSwyOC4wNywxNS43MSw0My43Myw0My43MywwLDAsMCw2My41Ny0xMy40NSwxMzEuODYsMTMxLjg2LDAsMCwxLDIwLTI2LjI2bC40NS0uNDZhNTEuMjYsNTEuMjYsMCwwLDEsMzguNy0xNS4xOWMuNjksMCwxLjM5LDAsMi4wOCwwQTYxLjIyLDYxLjIyLDAsMCwwLDM1MCwxNDkuMTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNzcgLTI5LjcpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTY1Ljc4LDEyNy4zM3Y0MS4yMmMwLDcuMjktMy43OCwxMS44OS0xMC43NiwxMi44NmExNS41NiwxNS41NiwwLDAsMS0xMS41NC0yLjVjLTYtNC4yNi02LTExLjg2LS4wNi0xNi4xM2ExNS40MywxNS40MywwLDAsMSwxMi44Ny0yLjMzYy40NS4xMS45LjE4LDEuNjEuMzJWMTE3LjQ1YzAtMi45MS42MS0zLjcsMy4zLTQuMjZsMTUuMTMtMy4yYzIuMjktLjQ4LDMsLjA2LDMsMi40M3EwLDQuNDgsMCw5YzAsMi4zMS0uOCwzLjIxLTMsMy42OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00Ny43NyAtMjkuNykiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xODguNTksMTg2LjgzVjE0My40NmMwLTMsLjM5LTMuNTYsMy4yOS00LjE5cTcuNzQtMS42OCwxNS41MS0zLjI4YzEuODYtLjM4LDIuNDcuMTMsMi40OSwyLjEuMDUsMy4yNywwLDYuNTQsMCw5LjgxYTIuODQsMi44NCwwLDAsMS0yLjU3LDMuMTNjLTIuOTUuNi01Ljg3LDEuNDMtOC44NCwxLjg3LTEuNzkuMjYtMi4wNiwxLjExLTIuMDYsMi43NS4wNiwxMi44LDAsMjUuNiwwLDM4LjQsMCw4Ljg4LTUuOSwxNC40NS0xNC40NywxMy42MmExNS4wNiwxNS4wNiwwLDAsMS04Ljg2LTMuNWMtNC43MS00LjE0LTQuNzQtMTAuNTMsMC0xNC42MiwzLjg4LTMuMzQsOC40Mi0zLjk0LDEzLjI1LTMuMTRDMTg3LDE4Ni41MSwxODcuNjYsMTg2LjY1LDE4OC41OSwxODYuODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNzcgLTI5LjcpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMjM2LjcyLDEzNy43N1YxNzljMCw3LjI5LTMuNzUsMTEuODQtMTAuNzgsMTIuODNhMTUuMjEsMTUuMjEsMCwwLDEtMTEuODQtMi43NWMtNS41Ni00LjIzLTUuNjEtMTEuNDQsMC0xNS42NGExNS4zLDE1LjMsMCwwLDEsMTMuMzgtMi41Yy4zNy4wOS43Ni4xMiwxLjQ3LjIyVjEyOC4xYzAtMy40My4zOC0zLjg2LDMuNjQtNC41NCw0LjkxLTEsOS44Mi0yLjEsMTQuNzMtMy4xNSwyLjMxLS40OSwyLjkzLDAsMi45NCwyLjQ2cTAsNC40OCwwLDljMCwyLjQtLjY3LDMuMi0yLjk0LDMuNjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNzcgLTI5LjcpIi8+PC9zdmc+",oU=E.img`
    width: 30px;
`,aU=E.div`
    font-size: 1.1rem;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.textColor};
    opacity: 0.9;
`,zR=({short:e=!1})=>c.jsxs(R,{gap:14,children:[c.jsx(oU,{src:sU,alt:"Logo"})," ",!e&&c.jsx(aU,{children:"Soundbubble"})]}),lU=E.div`
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
`,Ux={slowInternetMessage:1e4,fullStop:2e4},cU=()=>{const[{data:e},t]=Ie.useUser(),[n,r]=T.useState(!1),[i,s]=T.useState(!1);return T.useEffect(()=>{setTimeout(()=>{e||r(!0)},Ux.slowInternetMessage),setTimeout(()=>{e||s(!0)},Ux.fullStop)},[e]),c.jsxs(lU,{className:t?"loading":"loaded",children:[c.jsx(zR,{short:!0}),n&&c.jsx("span",{children:"It seems like You have slow internet connection..."}),i&&c.jsx("span",{children:"Failed to load Soundbubble. Please try again later"}),t&&c.jsx(wa,{})]})},uU=E.div`
  width: 100%;
  height: 100%;
  background: ${({theme:e})=>e.colors.overlay};
`,dU=E(uU)`
    position: absolute;
    z-index: 11;
`,hU=E.div`
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
`,fU=E.h3`
    margin: 25px;
    margin-bottom: 15px;
    font-weight: 300;
`,pU=E.div`
    height: 100%;
    padding-bottom: 25px;
    padding-top: 0;
    overflow-y: auto;
`;E.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
`;const gU=E.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,mU=()=>{const{opened:e,title:t,content:n}=Wt.useModal();if(!e)return null;const r=()=>{Wt.events.close()};return c.jsx(dU,{children:c.jsxs(hU,{children:[c.jsx(PR,{onClick:r}),c.jsx(fU,{children:t}),c.jsx(pU,{children:n})]})})},yU=E.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({theme:e})=>e.colors.textColor};
    opacity: 0.7;
`,vU=E.div`
    width: 21px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 21px;
        height: 21px;
    }
`,_U=E.div`
    font-weight: 300;
`,wU=({icon:e,text:t})=>c.jsxs(yU,{children:[c.jsx(vU,{children:e}),c.jsx(_U,{children:t})]}),xU=(e,t)=>{const n={};return e.forEach(r=>{const i=r[t];n[i]===void 0?n[i]=[r]:n[i].push(r)}),n},EU=e=>{const[t,n]=T.useState("password"),r=t==="password"?c.jsx(Sb,{}):c.jsx(Tb,{}),i=()=>{n(s=>s==="password"?"text":"password")};return c.jsx(zn,{label:"Password",placeholder:"Enter password",rightIcon:r,onRightIconClick:i,type:t,icon:c.jsx($b,{}),...e})},IU=({actionAfterLogin:e})=>{const[t,n]=T.useState(""),[r,i]=T.useState(""),[s,o]=T.useState({}),[{data:a,error:l},u]=Ie.useUser(),d=()=>{const m={};return t||(m.email="Email is required"),r||(m.password="Password is required"),o(m),console.log(m),Object.keys(m).length!==0},h=()=>{const m=d();console.log(m,s),e&&e(),m||Ie.events.login({email:t,password:r})};T.useEffect(()=>{a&&Wt.events.close()},[a]),console.log(l);const f=m=>{n(m.currentTarget.value),o(_=>{const w={..._};return delete w.email,w})},g=m=>{i(m.currentTarget.value),o(_=>{const w={..._};return delete w.password,w})};return c.jsxs(R,{d:"column",width:"100%",jc:"space-between",height:"100%",gap:20,padding:"0 25px",children:[c.jsxs(R,{d:"column",jc:"center",width:"100%",height:"300px",gap:20,onKeyDown:m=>m.key==="Enter"&&h(),children:[l==null?void 0:l.message,c.jsx(zn,{value:t,onChange:f,placeholder:"Enter email",label:"Email",type:"email",onError:m=>console.log(m),required:!0,icon:c.jsx(ub,{}),error:s==null?void 0:s.email}),c.jsx(EU,{onChange:g,value:r,required:!0,error:s==null?void 0:s.password})]}),c.jsx(dr,{loading:u,onClick:h,appearance:"primary",children:"Login"}),c.jsx(J,{children:"Don't have an account"})]})},BR=()=>{const[{data:e}]=Ie.useUser(),t=r=>()=>{Wt.events.open({title:"Войдите в аккаунт",content:c.jsx(IU,{actionAfterLogin:r})})};return{loggedIn:r=>e===null?t(r):r,openLoginModal:t}},SU=E.div`
	display: grid;
	grid-gap: 4px;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 50px 50px 50px;
	grid-auto-flow: column;
	container-type: size;
	width: 100%;

	@media(max-width:1300px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media(max-width:1000px) {
		grid-template-columns: repeat(1, 1fr);
	}
`,TU=e=>{const{songs:t}=e,{currentSong:n,state:r,loaded:i}=W.useSong(),{handlePlay:s}=s1(e);return c.jsx(SU,{children:t.map((o,a)=>{const l=o.id===(n==null?void 0:n.id);return c.jsx(Hc,{onClick:s,index:a,song:o,playing:l&&r==="playing",loading:l&&r==="loading",loaded:l&&i},o.id+a)})})},Ym=e=>e===void 0?null:e>=1e3&&e<1e6?(e/1e3).toFixed(1)+"K":e>=1e6&&e<1e9?(e/1e6).toFixed(1)+"M":e.toString(),kU=E(Bc)`
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
`,CU=E.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 30px;
    gap: 10px;

    button {
        color: #fff;
    }
`;E.div`
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
`;const HR=({name:e,subtitle:t,bottomButtons:n,isPrivate:r,numberOfListenersPerMonth:i,subscribers:s,imageComponent:o,colors:a,isVerified:l,handleClickShare:u})=>{const d=mc();return c.jsxs(kU,{$colors:a,children:[o,c.jsxs(R,{gap:8,d:"column",ai:"center",children:[c.jsxs(R,{gap:4,d:"column",children:[c.jsxs(R,{gap:6,children:[c.jsx("h2",{children:e}),l&&c.jsx(Mh,{color:a==null?void 0:a[1]}),r&&c.jsx(qS,{size:20})]}),t]}),c.jsxs(R,{gap:20,style:{opacity:"0.8",fontWeight:"300"},children:[c.jsxs(R,{gap:4,children:[Ym(i),c.jsx(jd,{size:16})]}),c.jsxs(R,{gap:4,children:[Ym(s),c.jsx(ZS,{size:16})]})]}),c.jsxs(CU,{children:[c.jsx(Kh,{songId:void 0,likeColor:void 0,background:d.colors.darkHover,height:"32px",width:"45px"}),c.jsx(J,{$height:"32px",$width:"45px",onClick:u,$background:d.colors.darkHover,children:c.jsx(yc,{size:20})}),c.jsx(J,{$height:"32px",$width:"45px",$background:d.colors.darkHover,children:c.jsx(sy,{size:20})})]})]}),n]})},AU=E.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
`,RU=E.div`
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
`,PU=E.div``,Ls=({loading:e,children:t,skeleton:n,background:r,...i})=>c.jsxs(AU,{...i,children:[c.jsx(RU,{$background:r,className:e?"loading":"",children:n}),c.jsx(PU,{children:t})]}),o1=({page:e,onChangeId:t})=>{const n=L4(`${e}/:id`);T.useEffect(()=>{n!=null&&n.params.id&&t(n.params.id)},[n==null?void 0:n.params.id])},NU=()=>c.jsx("div",{children:"AddAlbumModal"}),jU=E.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,bU=E.textarea`
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
`,MU=({label:e,...t})=>c.jsxs(jU,{children:[e&&c.jsxs(n1,{children:[e," ",c.jsx(TR,{children:t.required?"*":""})]}),c.jsx(bU,{...t})]}),LU=E.div`
	font-size: 0.5rem;

`,DU=()=>c.jsxs(LU,{children:[c.jsxs(gU,{children:[c.jsx(zn,{label:"Song name"}),c.jsx(zn,{label:"Release date",type:"date"}),c.jsx(MU,{label:"Lyrics"})]}),c.jsx(dr,{appearance:"primary",children:"Add new song"})]}),OU=E.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;E(Bc)`
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    background-size: 300% 300%;
    animation: none;
`;E.div`
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
`;const $U=E.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`,zx=E.div`
    width: 100%;

    h3 {
        margin-bottom: 10px;
    }
`,Bx=E.div`
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
`,VU=E.div`
    width: 100%;
    background: ${({theme:e})=>e.colors.pageBackground2};
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,a1=({isAdmin:e,isPageOwner:t,queueInfo:n,buttonColor:r})=>{const{state:i}=W.useSong(),{queue:s}=W.queue.useQueue(),o=mc();return e&&t?c.jsxs(Bx,{className:"bottom-buttons",children:[c.jsxs(J,{onClick:()=>Wt.events.open({content:c.jsx(DU,{}),title:"Add new song"}),$background:o.colors.pageBackground,style:{color:o.colors.blue.main,gap:"10px"},children:[c.jsx(Ob,{size:18}),"New song"]}),c.jsxs(J,{onClick:()=>Wt.events.open({content:c.jsx(NU,{}),title:"Add new album"}),$background:o.colors.pageTopButton,style:{color:o.colors.blue.main,gap:"10px"},children:[c.jsx(tT,{size:18}),"New album"]})]}):c.jsxs(Bx,{className:"bottom-buttons",children:[c.jsxs(dr,{loading:i==="loading"&&s.url===n.listUrl,onClick:()=>null,style:{background:o.colors.pageTopButton,color:r},children:[c.jsx(Uv,{size:20,loading:i==="loading"&&s.url===n.listUrl,playling:i==="playing"&&s.url===n.listUrl}),"Play"]}),c.jsxs(dr,{loading:!1,onClick:()=>null,style:{background:o.colors.pageTopButton,color:r},children:[c.jsx(HS,{size:20}),"Shuffle"]})]})},FU=(e,t)=>{const[n,r]=T.useState(!1),[i,s]=T.useState(!1),o=T.useMemo(()=>new IntersectionObserver(([a])=>{s(a.isIntersecting),n||r(a.isIntersecting)}),[e]);return T.useEffect(()=>{i&&t&&t()},[i,n]),T.useEffect(()=>(e.current!==null&&o.observe(e.current),()=>o.disconnect()),[]),i},Wc=E.div`
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
`,se=E(Wc)`
    width: ${({width:e})=>e??"100px"};
    min-width: ${({minWidth:e,width:t})=>e??t??"100px"};
    height: ${({height:e})=>e??"100px"};
    border-radius: ${({radius:e})=>e??"10px"};
`,Ot=()=>c.jsxs(R,{d:"column",gap:10,children:[c.jsx(se,{radius:"100%",width:"calc(100vw / 11)",height:"calc(100vw / 11)"}),c.jsxs(R,{d:"column",gap:4,children:[c.jsx(se,{radius:"4px",width:"140px",height:"20px"}),c.jsx(se,{radius:"4px",width:"80px",height:"14px"})]})]}),UU=({songs:e,currentPageUser:t})=>{const n=T.useRef(null),{similarAuthors:r,similarAuthorsLoading:i}=Ie.useUserPage();return FU(n,()=>{r.length===0&&Ie.events.loadSimilarAuthors(e)}),c.jsxs(VU,{ref:n,children:[c.jsx("h3",{children:"Similar Authors"}),c.jsxs(R,{gap:30,children:[r.map(s=>s.uid===(t==null?void 0:t.uid)?null:c.jsx(Vr,{user:s},s.uid)),i&&c.jsxs(c.Fragment,{children:[c.jsx(Ot,{}),c.jsx(Ot,{}),c.jsx(Ot,{}),c.jsx(Ot,{}),c.jsx(Ot,{}),c.jsx(Ot,{})]})]})]})},Vs=()=>{const e=mc();return c.jsxs(R,{gap:12,ai:"flex-start",d:"column",children:[c.jsx(se,{width:"calc(100vw / 8)",height:"calc(100vw / 8)",radius:e.borderRadius.middle}),c.jsxs(R,{gap:7,ai:"flex-start",d:"column",children:[c.jsx(se,{width:"120px",height:"15px",radius:"4px"}),c.jsx(se,{width:"80px",height:"12px",radius:"3px"})]})]})},U=()=>c.jsxs(ZF,{children:[c.jsx(tU,{children:c.jsx(se,{width:"100%",height:"50px",radius:"12px",children:c.jsxs(R,{gap:10,width:"100%",padding:"8px",children:[c.jsx(se,{width:"35px",height:"35px",radius:ky}),c.jsxs(R,{width:"100%",d:"column",ai:"flex-start",gap:4,children:[c.jsx(se,{width:"70%",height:"14px"}),c.jsx(se,{width:"120px",height:"10px"})]})]})})}),c.jsx(eU,{children:c.jsx(se,{width:"100%",height:"46px",radius:"10px",children:c.jsxs(R,{width:"100%",gap:20,padding:"6px",children:[c.jsx(se,{width:"35px",height:"35px",radius:"6px"}),c.jsx(se,{width:"25%",height:"18px",radius:"6px"}),c.jsx(se,{width:"25%",height:"18px",radius:"6px"}),c.jsx(se,{width:"20%",height:"18px",radius:"6px"}),c.jsx(se,{width:"18%",height:"18px",radius:"6px"})]})})})]}),WR=()=>c.jsxs(R,{width:"100%",d:"column",ai:"flex-start",height:"100%",children:[c.jsx(se,{width:"100%",height:"400px",radius:"0",children:c.jsxs(R,{width:"100%",d:"column",padding:"56px 50px 50px 50px",ai:"center",jc:"center",gap:21,children:[c.jsx(se,{width:"200px",height:"200px",radius:"100%"}),c.jsxs(R,{d:"column",gap:8,children:[c.jsx(se,{width:"200px",height:"30px"}),c.jsx(se,{width:"100px",height:"10px",radius:"3px"}),c.jsx(se,{width:"100px",height:"20px",radius:"3px"})]})]})}),c.jsxs(R,{d:"column",gap:30,padding:"40px",width:"100%",children:[c.jsxs(R,{d:"column",ai:"flex-start",gap:8,width:"100%",children:[c.jsx(se,{width:"95px",height:"25px",radius:"6px"}),c.jsxs(R,{gap:4,width:"100%",children:[c.jsxs(R,{width:"100%",d:"column",gap:4,ai:"flex-start",children:[c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{})]}),c.jsxs(R,{width:"100%",d:"column",gap:4,ai:"flex-start",children:[c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{})]}),c.jsxs(R,{width:"100%",d:"column",gap:4,ai:"flex-start",children:[c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{})]})]})]}),c.jsxs(R,{d:"column",ai:"flex-start",gap:8,width:"100%",children:[c.jsx(se,{width:"115px",height:"25px",radius:"6px"}),c.jsxs(R,{gap:14,width:"100%",children:[c.jsx(Vs,{}),c.jsx(Vs,{}),c.jsx(Vs,{}),c.jsx(Vs,{}),c.jsx(Vs,{}),c.jsx(Vs,{})]})]}),c.jsxs(R,{d:"column",ai:"flex-start",padding:"40px 0 0 0",gap:20,width:"100%",children:[c.jsx(se,{width:"145px",height:"25px",radius:"6px"}),c.jsxs(R,{gap:30,width:"100%",children:[c.jsx(Ot,{}),c.jsx(Ot,{}),c.jsx(Ot,{}),c.jsx(Ot,{}),c.jsx(Ot,{}),c.jsx(Ot,{}),c.jsx(Ot,{}),c.jsx(Ot,{})]})]})]})]}),qR=({userData:e})=>{const{user:t,songs:n,playlists:r,loading:i}=Ie.useUserPage(),[{data:s}]=Ie.useUser(),[o]=Ie.useFriends(),a=e??t,l=!!o.find(_=>_.uid===(t==null?void 0:t.uid)),{status:u}=Of(t==null?void 0:t.online),[d,h,f]=[(a==null?void 0:a.isAuthor)??!1,(a==null?void 0:a.isAdmin)??!1,(s==null?void 0:s.uid)===(a==null?void 0:a.uid)];o1({page:"author",onChangeId:_=>{Ie.events.loadUserPageFx(_)}});const g={listName:(a==null?void 0:a.displayName)??"Author",listIcon:a==null?void 0:a.photoURL,listUrl:`/author/${a==null?void 0:a.uid}`,songs:n.slice(0,9)},m=()=>{Wt.events.open({title:`Share ${t==null?void 0:t.displayName} with friends`,content:c.jsx(zc,{entity:t})})};return c.jsx(Ls,{color:(a==null?void 0:a.imageColors[0])??"grey",loading:i,skeleton:c.jsx(WR,{}),children:c.jsxs(OU,{children:[c.jsx(HR,{handleClickShare:m,id:a==null?void 0:a.uid,name:a==null?void 0:a.displayName,subtitle:c.jsx(i1,{color:t==null?void 0:t.imageColors[1],isAuthor:d,status:u,showLastSeen:l||(s==null?void 0:s.isAdmin)}),numberOfListenersPerMonth:a==null?void 0:a.numberOfListenersPerMonth,isVerified:a==null?void 0:a.isVerified,subscribers:a==null?void 0:a.subscribers,imageComponent:c.jsx(vn,{isAuthor:d,color:a==null?void 0:a.imageColors[0],src:a==null?void 0:a.photoURL,size:"200px"}),colors:a==null?void 0:a.imageColors,bottomButtons:c.jsx(a1,{buttonColor:a==null?void 0:a.imageColors[1],isAdmin:h,isPageOwner:f,queueInfo:g})}),c.jsxs($U,{children:[c.jsxs(zx,{children:[c.jsx("h3",{children:"Top songs"}),c.jsx(TU,{...g})]}),r.length!==0&&c.jsxs(zx,{children:[c.jsx("h3",{children:"Top Albums"}),c.jsx(R,{gap:14,children:r.map(_=>c.jsx(Yo,{playlist:_},_.id))})]})]}),!i&&c.jsx(UU,{songs:n,currentPageUser:a})]})})},Ea=Oe(async e=>{try{return await Lf.getChatsByUserId(e)}catch(t){throw console.log(t),new Error(t.message)}}),l1=Oe(async({chats:e,chatDataObject:t})=>{try{const r=e.flatMap(s=>s.participants).filter(s=>!t[s]).map(async s=>await Ze.getUserByUid(s));return(await Promise.all([...r])).flatMap(s=>s).reduce((s,o)=>(s["id"in o?o.id:o.uid]=o,s),{...t})}catch(n){throw new Error(n.message)}}),qc=Oe(async({chatId:e})=>{try{const t=await Lf.getChatMessagesByChatId(e);return{...t,messages:t.messages}}catch(t){throw new Error(t.message)}}),c1=Oe(async({chatId:e,message:t})=>{try{await Lf.sendMessage(e,t),console.log("error never appeared")}catch(n){throw console.log(n),new Error(n.message)}}),u1=F(),GR=F(),QR=F(),zU=F(),d1=F(),KR=F(),YR=F(),XR=F(),Jo=te([]),Gc=te(""),sn=te([]),Ff=te({}),h1=te(0),Zo=te({}),ea=te({}),f1=te(null);Jo.reset($e);Zo.reset($e);h1.reset($e);Gc.reset($e);sn.reset($e);Ff.reset($e);Zo.reset($e);ea.reset($e);f1.reset($e);const Xm=my(),hh=Ht.map(e=>{var t;return((t=e==null?void 0:e.data)==null?void 0:t.uid)??null}),BU=e=>Object.keys(e).reduce((t,n)=>(t+=e[n],t),0);j({clock:[Xm.open,hh],source:{gateStatus:Xm.status,userId:hh,chats:Jo},filter:({chats:e,userId:t,gateStatus:n})=>n&&t!==null&&e.length===0,fn:({userId:e})=>e,target:Ea});j({clock:Ea.doneData,fn:({chats:e})=>e,target:[Jo,u1]});j({clock:XR,source:{messages:sn,userId:hh},filter:({userId:e})=>!!e,fn:({messages:e,userId:t},n)=>[...e].map(i=>(i.id===n&&i.seenBy.push(t),i)),target:sn});j({clock:Ea.doneData,fn:({lastMessages:e})=>e,target:ea});j({clock:Ea.doneData,fn:e=>e,target:l1});j({clock:Ea.doneData,fn:({unreadCount:e})=>e,target:[Ff,u1]});j({clock:u1,source:Ff,fn:BU,target:h1});j({clock:l1.doneData,target:Zo});j({clock:d1,fn:({chatId:e,message:{status:t,...n}})=>({chatId:e,message:n}),target:[c1]});j({clock:d1,source:sn,fn:(e,{message:t})=>[...e,t],target:sn});j({clock:c1.failData,source:sn,fn:e=>(console.log("sending failed message"),e.map(t=>t.status==="pending"?{...t,status:"error"}:t)),target:sn});j({clock:c1.done,source:sn,fn:(e,{params:t})=>(console.log("done"),e.map(({status:n,...r})=>t.message.id===r.id?r:{status:n,...r})),target:sn});j({clock:sn.updates,source:Gc,fn:(e,t)=>({chatId:e,message:t.at(-1)}),target:KR});j({clock:KR,source:ea,filter:(e,{message:t})=>!!t,fn:(e,{chatId:t,message:n})=>({...e,[t]:n}),target:[ea,YR]});j({clock:YR,source:{chats:Jo,lastMessages:ea},fn:({chats:e,lastMessages:t})=>e.sort((n,r)=>t[r.id].sentTime-t[n.id].sentTime),target:Jo});j({clock:GR,fn:e=>e,target:Gc});j({clock:QR,source:Zo,fn:(e,t)=>({...e,...t}),target:Zo});j({clock:Gc,filter:e=>e.length!==0,fn:e=>({chatId:e,messages:[]}),target:qc});j({clock:qc.doneData,fn:({chatData:e})=>e,target:QR});j({clock:qc.doneData,fn:({messages:e})=>e,target:[sn]});j({clock:qc.doneData,source:{currentMessages:sn,userId:hh},filter:({userId:e,currentMessages:t})=>!!e&&!!t.length,fn:({currentMessages:e,userId:t})=>{var n;return((n=e.find(r=>!r.seenBy.includes(t)))==null?void 0:n.id)??null},target:f1});const rs={useChats:()=>Te({chats:Jo,loadingChats:Ea.pending,currentChatId:Gc,currentChatMessages:sn,currentChatMessagesLoading:qc.pending,chatData:Zo,loadingChatData:l1.pending,lastMessage:ea,unreadCounts:Ff,firstUnreadMessageId:f1}),useLoadChats:()=>gy(Xm),useChatUnreadCount:()=>Te(h1),events:{setCurrentChatId:GR,loadPreviousMessages:zU,sendMessage:d1,seenMessage:XR}},HU=E.aside`
    min-width: 270px;
    width: 270px;
    height: 100dvh;
    padding: 10px;
    background: ${({theme:e})=>e.colors.sidebar};
    position: relative;
    border-right: 1px solid ${({theme:e})=>e.colors.border};
`,WU=E.div`
    padding: 10px;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,Hx=E.div`
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
`,qU=E(uL)`
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
`,Wx=E.div`
    font-size: 0.8rem;
    opacity: 0.3;
    color: ${({theme:e})=>e.colors.textColor};
    padding: 4px 10px;
    text-transform: uppercase;
`,GU=E.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 0 2px;
`,p1=E.span`
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
`,QU=E.div`
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
`,Yp=E.div`
    width: 6px;
    height: 6px;
    border-radius: 100%;
    opacity: 0;
    transform: scale(0);
    background: grey;
`,qx=({isTyping:e=!0})=>e?c.jsxs(QU,{children:[c.jsx(Yp,{}),c.jsx(Yp,{}),c.jsx(Yp,{})]}):null,JR=({typing:e,isGroupChat:t,children:n})=>t&&e.length>0?c.jsxs(R,{gap:8,children:[c.jsxs(ks,{children:[e.map((r,i)=>(i!==0?", ":"")+(r==null?void 0:r.displayName))," typing"]}),c.jsx(qx,{isTyping:!0})]}):e.length>0?c.jsxs(R,{gap:8,children:[c.jsx(ks,{children:"Typing"}),c.jsx(qx,{isTyping:!0})]}):n,ZR=({isMine:e,sendStatus:t})=>!e||t==="Error"?null:t==="Pending"?c.jsx(wb,{}):t==="Sent"?c.jsx(pb,{}):c.jsx(gb,{}),KU=e=>{if((e==null?void 0:e.length)===0)return"linear-gradient(45deg, #c47200, #da471f)";switch(e==null?void 0:e[0]){case"A":case"D":case"G":case"J":case"X":return"linear-gradient(45deg, #b42db4, #7d35ca)";case"L":case"M":case"P":case"Z":case"1":case"2":return"linear-gradient(45deg, #2db42f, #35ca98)";case"F":case"K":case"Y":case"S":case"4":case"3":return"linear-gradient(45deg, #3f2db4, #3558ca)";case"H":case"E":case"T":case"U":case"C":case"5":case"6":case"7":return"linear-gradient(45deg, #b42d2d, #ca3578)";default:return"linear-gradient(45deg, #c47200, #da471f)"}},YU=E.div`
    width: ${({$width:e})=>e??"50px"};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: ${({$background:e})=>e};
    color: #fff;

	 font-size: calc(${({$width:e})=>e??"50px"} / 3);
`,Jm=({name:e,width:t})=>{const n=(e==null?void 0:e.split(" ").length)===1?e[0].toUpperCase()+e[1].toUpperCase():e==null?void 0:e.split(" ").map(i=>{var s;return(s=i[0])==null?void 0:s.toUpperCase()}).join(""),r=KU(n);return c.jsx(YU,{$background:r,$width:t,children:n})},Gx={hour:36e5},XU=e=>{const t=new Date().getTime()-new Date((e==null?void 0:e.sentTime)??"").getTime(),n=t>Gx.hour*24,r=t>Gx.hour*24*7;return n?r?new Date((e==null?void 0:e.sentTime)??"").toLocaleDateString("ru-RU"):new Date((e==null?void 0:e.sentTime)??"").toLocaleDateString("ru-RU",{weekday:"short"}):new Date((e==null?void 0:e.sentTime)??"").toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})},eP="soundbubble",JU=(e,t,n,r)=>{if(!e)return{sender:""};if((e==null?void 0:e.sender)===eP)return{sender:""};const i=n[(e==null?void 0:e.sender)??""];return{sender:(i==null?void 0:i.uid)===(r==null?void 0:r.uid)?"You":t?i==null?void 0:i.displayName:""}},tP=e=>{var t;return(e==null?void 0:e.status)==="pending"?"Pending":(e==null?void 0:e.status)==="error"?"Error":e&&((t=e==null?void 0:e.seenBy)==null?void 0:t.filter(n=>n!==e.sender).length)===0?"Sent":"Received"},ZU=E(ua)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 25px;
    padding-right: 8px;
    gap: 12px;
    background: ${({theme:e})=>e.colors.pageBackground2};

    &.selected {
        background: ${({theme:e})=>e.colors.blue.transparent};
    }

    &:hover {
        filter: brightness(0.95);
    }
`,nP=E.div`
    font-size: 0.9rem;
    font-weight: 300;
`,ez=E.span`
    height: 32px;
    overflow: hidden;
    display: inline-flex;
    flex-wrap: wrap;
    column-gap: 6px;
    font-size: 0.8rem;
    font-weight: 200;
    opacity: 0.5;
`,Xp=E.div`
    display: inline-flex;
    height: fit-content;
    align-items: center;
    gap: 2px;

    svg {
        display: inline;
        width: 14px;
        height: 14px;
    }
`;E.span`
    font-size: 0.8rem;
    font-weight: 200;
    opacity: 0.5;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-flex;
    margin-right: 4px;
`;const rP=E.div`
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
`,tz=({chat:e,isSelected:t,unreadCount:n,lastMessage:r,chatData:i})=>{var v,x,S;const[{data:s}]=Ie.useUser(),o=e.chatName!=="",a=e.participants.filter(k=>k!==(s==null?void 0:s.uid)),l=i[a[0]],u=o?e.chatImage:l==null?void 0:l.photoURL,d=o?e.chatName:l==null?void 0:l.displayName,h=Of(l==null?void 0:l.online).status,f=tP(r),{sender:g}=JU(r,o,i,s),m=XU(r),_=(r==null?void 0:r.attachedSongs.length)!==0?(v=i[(r==null?void 0:r.attachedSongs[0])??""])==null?void 0:v.name:null,w=(r==null?void 0:r.attachedAuthors.length)!==0?(x=i[(r==null?void 0:r.attachedAuthors[0])??""])==null?void 0:x.displayName:null,p=(r==null?void 0:r.attachedAlbums.length)!==0?(S=i[(r==null?void 0:r.attachedAlbums[0])??""])==null?void 0:S.name:null,y=(e==null?void 0:e.typing.filter(k=>k!==(s==null?void 0:s.uid)).map(k=>i[k]))??[];return c.jsxs(ZU,{to:`/chat/${e.id}`,className:t?"selected":"",children:[c.jsx(vn,{fallbackIcon:c.jsx(Jm,{name:d}),size:"50px",src:u,color:"grey",isAuthor:!1,children:h==="online"&&!o&&c.jsx(r1,{})}),c.jsxs(R,{d:"column",ai:"flex-start",height:"50px",width:"100%",gap:2,children:[c.jsxs(R,{jc:"space-between",width:"100%",children:[c.jsx(nP,{children:d}),r&&c.jsxs(rP,{children:[c.jsx(ZR,{isMine:g==="You",sendStatus:f}),c.jsx("span",{children:m})]})]}),c.jsxs(R,{width:"100%",jc:"space-between",children:[c.jsx(JR,{isGroupChat:o,typing:y,children:c.jsxs(ez,{children:[g&&`${g}:`," ",r==null?void 0:r.message.substring(0,70)," ",(r==null?void 0:r.message.length)>70?"...":"",_&&c.jsxs(Xp,{children:[yn.song,_]}),w&&c.jsxs(Xp,{children:[yn.author,w]}),p&&c.jsxs(Xp,{children:[yn.album,p]})]})}),!!n&&c.jsx(p1,{children:n})]})]})]})},yt=()=>c.jsxs(R,{gap:12,padding:"2px 25px",children:[c.jsx(se,{width:"50px",height:"50px",radius:"100%"}),c.jsxs(R,{d:"column",gap:4,ai:"flex-start",children:[c.jsx(se,{width:"140px",height:"14px"}),c.jsx(se,{width:"80px",height:"10px"})]})]}),nz=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear();function rz(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}const iz=e=>{let t=0;return e?e==null?void 0:e.reduce((n,r,i)=>{const s=e[i-1],o=(s==null?void 0:s.sender)===(r==null?void 0:r.sender),a=new Date((r==null?void 0:r.sentTime)??"").getTime()-new Date((s==null?void 0:s.sentTime)??"").getTime()<6e5;return o&&a?n[t]?n[t].push(r):n[t]=[r]:(t+=1,n[t]=[r]),n},[]):[]},sz=()=>c.jsxs($f,{children:[c.jsxs(J,{children:[c.jsx(sy,{}),"Info"]}),c.jsxs(J,{children:[c.jsx(kb,{}),"Attacments"]}),c.jsxs(J,{children:[c.jsx(Vb,{}),"Change wallpaper"]})]}),cc=e=>e!=null&&e.isAuthor?"author":e!=null&&e.displayName?"user":e!=null&&e.isAlbum?"album":(e==null?void 0:e.subscribers)!==void 0?"playlist":"song",oz=()=>c.jsxs($f,{children:[c.jsxs(J,{children:[c.jsx(yc,{}),"Reply"]}),c.jsxs(J,{children:[c.jsx(xb,{}),"Copy"]})]}),az=E.div`
    height: 100%;
    padding-bottom: 4px;
`,lz=E.div`
    font-weight: 300;
    font-size: 0.8rem;
    color: ${({theme:e})=>e.colors.purple.main};
    font-weight: 300;
`,cz=E.div`
    width: 100%;
    display: flex;
    gap: 10px;
`,uz=E.div`
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
        border-radius: 8px 14px 14px 8px;

        &::before {
            display: none;
        }
    }
`,dz=E(rP)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 8px;
    font-size: 0.65rem;

    svg {
        width: 14px;
        height: 14px;
    }
`,hz=E.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,fz=E.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding-top: 20px;
    overflow-y: auto;
`,pz=E(zn)`
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 16px;
`,gz=E.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    width: 100%;
    height: 80px;
    border-top: 1px solid ${({theme:e})=>e.colors.border};
`,mz=E.div`
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
`,yz=E.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    padding: 6px 15px;
    width: 100%;
`,vz=E.div`
    width: 50px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: 0.2s;
`,_z=E.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
`,wz=E.div`
    position: sticky;
    bottom: 20px;
    transition: 0.2s;
`,xz=E.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background: ${({theme:e})=>e.colors.pageBackground2};
`,Ez=E.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 10px 20px;
    font-weight: 300;
    font-size: 0.8rem;
    opacity: 0.6;
`,Iz=E.div`
    width: 320px;
`,Sz=E(J)`
    min-width: 35px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background: ${({theme:e})=>e.colors.blue.action};
    color: #fff;
`,Tz=E(J)`
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
`,Jp=(e,t)=>e.map(n=>{const r=t[n];if(!r)return null;const i=cc(r);return i==="user"||i==="author"?c.jsx(Vr,{user:r,orientation:"horizontal"},n):i==="album"||i==="playlist"?c.jsx(Yo,{playlist:r,orientation:"horizontal"},n):c.jsx(Hc,{song:r,playing:!1,loading:!1,loaded:!1,index:0,onClick:()=>null},n)}),kz=({message:e,isNotSeen:t,isMine:n,chatData:r,isPrevByTheSameSender:i,isFirst:s,onSeen:o})=>{var g,m;const a=tP(e),l=e.attachedSongs.length||e.attachedAlbums.length||e.attachedAuthors.length,[u,d]=T.useState(!1),h=T.useRef(null);T.useEffect(()=>{const _=h.current,w=new IntersectionObserver(([p])=>{d(p.isIntersecting)},{root:null,rootMargin:"0px",threshold:.5});return _&&w.observe(_),()=>{_&&w.unobserve(_)}},[]),T.useEffect(()=>{u&&t&&o(e.id)},[u,t]);const f=_=>{_.stopPropagation(),_.preventDefault(),En.events.open({content:c.jsx(oz,{}),height:96,e:_})};return c.jsxs(cz,{ref:h,children:[c.jsxs(uz,{$background:n?(g=r[e.sender])==null?void 0:g.imageColors[1]:"",onContextMenu:f,className:(n?"mine":"")+(i?" isPrevByTheSameSender":""),children:[c.jsxs(R,{d:"column",ai:"flex-start",children:[!n&&c.jsx(lz,{children:s&&((m=r[e.sender])==null?void 0:m.displayName)}),c.jsxs(az,{children:[e.message,!!l&&c.jsxs(Iz,{children:[Jp(e.attachedSongs,r),Jp(e.attachedAlbums,r),Jp(e.attachedAuthors,r)]})]})]}),c.jsxs(dz,{children:[c.jsx("span",{children:new Date(e.sentTime).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})}),c.jsx(ZR,{isMine:n,sendStatus:a})]})]}),a==="Error"&&c.jsx(Ib,{color:"red"})]})},Qx=({message:e})=>c.jsx(Ez,{children:e.message}),Kx=(e,t)=>({id:rz(),sender:e,message:t,sentTime:new Date().getTime(),seenBy:[e],attachedAlbums:[],attachedSongs:[],attachedAuthors:[],inResponseToMessage:"",status:"pending"}),iP=()=>{const{chats:e,currentChatId:t,currentChatMessages:n,currentChatMessagesLoading:r,chatData:i,firstUnreadMessageId:s}=rs.useChats(),[{data:o}]=Ie.useUser(),a=iz(n),l=e.find(K=>K.id===t),u=(l==null?void 0:l.participants.filter(K=>K!==(o==null?void 0:o.uid)))??[],d=i[u[0]],h=(l==null?void 0:l.chatName)!=="",f=h?l==null?void 0:l.chatImage:d==null?void 0:d.photoURL,g=h?l==null?void 0:l.chatName:d==null?void 0:d.displayName,m=u.map(K=>{var it;return Of((it=i[K])==null?void 0:it.online).status})??[],_=T.useRef(null),w=(l==null?void 0:l.typing.filter(K=>K!==(o==null?void 0:o.uid)).map(K=>i[K]))??[],p=m.filter(K=>K==="online").length,[y,v]=T.useState(!0),x=n.filter(K=>{var it;return!((it=K.seenBy)!=null&&it.includes((o==null?void 0:o.uid)??""))})??0,[S,k]=T.useState("");o1({page:"chat",onChangeId:K=>{v(!0),rs.events.setCurrentChatId(K)}});const I=K=>{k(K.currentTarget.value)},A=K=>{K.stopPropagation(),En.events.open({content:c.jsx(sz,{}),e:K,height:136})},$=K=>{console.log(K.currentTarget.scrollTop,K.currentTarget.scrollHeight),K.currentTarget.scrollTop>=K.currentTarget.scrollHeight-800?v(!0):v(!1)},B=()=>{if(S.trim().length===0||!(o!=null&&o.uid))return;const K=Kx(o.uid,S);rs.events.sendMessage({chatId:t,message:K}),k("")};T.useEffect(()=>{console.log(y),_.current&&y&&_.current.scrollIntoView({block:"end"})},[n.length,y]);const rt=K=>{rs.events.seenMessage(K)};return c.jsxs(hz,{style:{backgroundImage:`url(${l==null?void 0:l.wallpaper})`},children:[c.jsxs(xz,{children:[c.jsxs(R,{gap:16,children:[c.jsx(vn,{fallbackIcon:c.jsx(Jm,{name:g??"Undefined",width:"35px"}),size:"35px",src:f,color:"grey",isAuthor:!1,children:m[0]==="online"&&!h&&c.jsx(r1,{})}),c.jsxs(R,{d:"column",ai:"flex-start",children:[c.jsx(nP,{children:g??"Untitled"}),c.jsx(JR,{typing:w,isGroupChat:h,children:h?c.jsxs(ks,{children:[l!=null&&l.participants.length?`${l==null?void 0:l.participants.length} members`:null,p!==0&&`, ${p} online`]}):c.jsx(i1,{isAuthor:!1,showLastSeen:!0,status:m[0]})})]})]}),c.jsx(R,{width:"fit-content",children:c.jsx(J,{$width:"40px",onClick:A,children:c.jsx(ny,{size:20})})})]}),c.jsxs(fz,{onScroll:$,children:[r&&c.jsx(R,{jc:"center",height:"100%",width:"100%",children:c.jsx(wa,{})}),!r&&a.map((K,it,Br)=>{var q,ae,Se,In;const zi=i[K[0].sender],Bi=!nz(new Date(((q=Br[it][0])==null?void 0:q.sentTime)??""),new Date(((Se=(ae=Br[it-1])==null?void 0:ae[0])==null?void 0:Se.sentTime)??"")),Bn=K[0].sender===eP,b=new Date(((In=Br[it][0])==null?void 0:In.sentTime)??"").toLocaleDateString("ru-RU",{day:"2-digit",month:"long",year:"numeric"}),H=K.find(je=>je.id===s);return c.jsxs(c.Fragment,{children:[Bi&&c.jsx(mz,{children:b}),H&&c.jsx(Qx,{message:Kx("soundbubble","Unread Messages")}),c.jsxs(yz,{children:[!Bn&&c.jsx(vz,{children:c.jsx(wz,{children:c.jsx(vn,{fallbackIcon:c.jsx(vn,{fallbackIcon:c.jsx(Jm,{width:"35px",name:g??"Undefined"}),size:"35px",src:f,color:"grey",isAuthor:!1}),color:"grey",size:"35px",src:zi==null?void 0:zi.photoURL,isAuthor:!1})})}),c.jsx(_z,{children:K.map((je,ln)=>{var qt;const Lt=!((qt=je.seenBy)!=null&&qt.includes((o==null?void 0:o.uid)??""));return Bn?c.jsx(Qx,{message:je},je.id):c.jsx(pe.Fragment,{children:c.jsx(kz,{isFirst:ln===0,chatData:i,isPrevByTheSameSender:ln!==K.length-1,message:je,isMine:je.sender===(o==null?void 0:o.uid),isNotSeen:!!Lt,onSeen:rt},je.id)},je.id)})})]}),H&&c.jsx("div",{ref:_,style:{width:"100%",minHeight:"20px"}})]})}),c.jsx("div",{ref:_,style:{width:"100%",minHeight:"20px"}}),!y&&c.jsxs(Tz,{children:[c.jsx(lb,{size:20}),x.length!==0&&c.jsx(p1,{children:x.length})]})]}),c.jsxs(gz,{children:[c.jsx(J,{$width:"40px",children:c.jsx(yb,{})}),c.jsx(pz,{onKeyDown:K=>K.key==="Enter"&&B(),placeholder:"Type something",value:S,onChange:I}),S.length!==0&&c.jsx(Sz,{$height:"35px",onClick:B,children:c.jsx(cb,{size:23})})]})]})},Cz=E.div`
  width: 100%;
  height: 100%;
  display: flex;
`,Az=E.div`
	min-width: 380px;
	max-width: 380px;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	background: ${({theme:e})=>e.colors.pageBackground2};
	border-right: 1px solid ${({theme:e})=>e.colors.border};
`,Rz=E.div`
	width: 100%;
`,Pz=()=>c.jsxs(R,{d:"column",gap:16,padding:"16px 0",children:[c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{}),c.jsx(yt,{})]}),Nz=()=>{const{chats:e,loadingChats:t,chatData:n,lastMessage:r,loadingChatData:i,unreadCounts:s,currentChatId:o}=rs.useChats(),a=mc();return rs.useLoadChats(),c.jsxs(Cz,{children:[c.jsxs(Az,{children:[c.jsxs(R,{padding:"20px 25px 10px 25px",width:"100%",gap:10,children:[c.jsx(zn,{icon:c.jsx(sa,{}),placeholder:"Search for chats..."}),c.jsx(dr,{appearance:"ghost",width:"48px",children:c.jsx(bb,{size:20})})]}),c.jsx(Ls,{background:a.colors.pageBackground2,loading:t||i,skeleton:c.jsx(Pz,{}),children:c.jsx(R,{d:"column",gap:0,width:"100%",height:"100%",padding:"10px 0",children:e.map(l=>c.jsx(c.Fragment,{children:c.jsx(tz,{isSelected:o===l.id,unreadCount:s[l.id],lastMessage:r[l.id],chatData:n,chat:l},l.id)}))})})]}),c.jsx(Rz,{children:c.jsx(GT,{children:c.jsx(so,{path:":id",element:c.jsx(iP,{})})})})]})};function Fs(e){let t;if(e){if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)){t=e.substring(1).split(""),t.length==3&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]);const n=+("0x"+t.join(""));return[n>>16&255,n>>8&255,n&255].join(",")}throw new Error("Bad Hex")}}const jz=E.div`
	--color-bg1: ${({$colors:e})=>(e==null?void 0:e[0])??"purple"};
	--color-bg2: ${({theme:e})=>e.colors.pageBackground};
	--color1: ${({$colors:e})=>Fs(e==null?void 0:e[2])??"18, 113, 255"};
	--color2: ${({$colors:e})=>Fs(e==null?void 0:e[2])??"221, 74, 255"};
	--color3: ${({$colors:e})=>Fs(e==null?void 0:e[3])??"100, 220, 255"};
	--color4: ${({$colors:e})=>Fs(e==null?void 0:e[4])??"208, 50, 50"};
	--color5: ${({$colors:e})=>Fs(e==null?void 0:e[5])??"188, 180, 50"};
	--color-interactive: ${({$colors:e})=>Fs(e==null?void 0:e[1])??"140, 100, 255"};
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
`;let Zp=0,eg=0,Yx=0,Xx=0;const Jx=50,bz=()=>{const e=T.useRef(null),{currentSong:t}=W.useSong(),n=T.useCallback(()=>{Zp+=(Yx-Zp)/Jx,eg+=(Xx-eg)/Jx,e.current&&(e.current.style.transform=`translate(${Zp}px, ${eg}px)`),requestAnimationFrame(()=>n())},[]),r=i=>{Yx=i.clientX,Xx=i.clientY};return T.useEffect(()=>{n()},[n]),c.jsxs(jz,{$colors:(t==null?void 0:t.imageColors)??[],onMouseMove:r,children:[c.jsx("div",{className:"noise-layer"}),c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",children:c.jsx("defs",{children:c.jsxs("filter",{id:"goo",children:[c.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),c.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8",result:"goo"}),c.jsx("feBlend",{in:"SourceGraphic",in2:"goo"})]})})}),c.jsxs("div",{className:"gradients-container",children:[c.jsx("div",{className:"g1"}),c.jsx("div",{className:"g2"}),c.jsx("div",{className:"g3"}),c.jsx("div",{className:"g4"}),c.jsx("div",{className:"g5"}),c.jsx("div",{className:"interactive",ref:e})]})]})},Mz=E.div`
   position: absolute;
   left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
`,Lz=()=>{const e=W.fullscreen.useFullScreen();return c.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[!e&&c.jsx(bz,{}),c.jsx(Mz,{children:c.jsx(J,{$width:"260px",style:{fontSize:"2rem",minHeight:"60px"},children:c.jsxs(R,{gap:10,children:[c.jsx(oy,{size:40}),"Play Wave"]})})})]})},sP=te(""),g1=te([]),oP=te([]),aP=F(),lP=F(),cP=F(),uP=F(),Uf=Oe(),zf=Oe(),Dz=Uf.pending,Oz=zf.pending;j({clock:aP,fn:e=>e,target:[sP,lP]});j({clock:cP,fn:e=>e,target:g1});j({clock:lP,target:Uf});Uf.use(async e=>{try{return await Fv.getSearchSuggestions(e)}catch(t){throw new Error(t.message)}});j({clock:Uf.doneData,fn:e=>e,target:g1});j({clock:uP,target:zf});j({clock:zf.doneData,fn:e=>e,target:oP});zf.use(async e=>{try{return await Fv.getSearchResult(e)}catch(t){throw new Error(t.message)}});const $z=E.div`
    width: 100%;
    position: relative;
`,Vz=E.div`
    width: 100%;
    background: ${({theme:e})=>e.colors.input};
    height: fit-content;
    min-height: 45px;
    max-height: 504px;
    overflow-y: auto;
    padding: 4px;
    border-radius: ${({theme:e})=>`0 0 ${e.borderRadius.mild} ${e.borderRadius.mild}`};
    position: absolute;
    top: calc(100% - 4px);
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
`,Fz=E.div`
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
`,Uz=E.div`
    white-space: nowrap;
`,Zx=E.div`
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
`,rd=e=>"displayName"in e?e.displayName:e.name,eE=e=>"uid"in e?e.uid:e.id,Zm=({item:e,handleSubmitSuggestion:t,suggestedIndex:n,index:r,icon:i,value:s,searchHistory:o})=>{const a=cc(e),l=i??yn[a],u=mc(),d=rd(e),h=!o&&(s.length>=4||Cs(s).includes(Cs(d)))&&r===0,f=(g,m)=>{var w,p,y,v;return{user:c.jsx(vn,{isAuthor:!1,src:m.photoURL,color:(w=m.imageColors)==null?void 0:w[0],size:"30px"}),author:c.jsx(vn,{isAuthor:!0,src:m.photoURL,color:(p=m.imageColors)==null?void 0:p[0],size:"30px"}),song:c.jsx(Yh,{src:m.cover,color:m.imageColors[0],size:"30px"}),playlist:c.jsx(oc,{src:m.image,color:(y=m.imageColors)==null?void 0:y[0],size:"30px",isAlbum:!1}),album:c.jsx(oc,{src:m.image,color:(v=m.imageColors)==null?void 0:v[0],size:"30px",isAlbum:!0})}[g]};return c.jsxs(Fz,{className:n===r?"selected":"",onClick:()=>t(r),children:[c.jsxs(R,{gap:8,width:"100%",children:[o&&c.jsx(Zx,{children:c.jsx(iy,{})}),h&&f(a,e),!o&&!h&&c.jsx(Zx,{children:l}),c.jsx(Uz,{children:d}),e.isVerified&&c.jsx(Mh,{size:18,style:{color:u.colors.blue.main}})]}),e.authors&&c.jsx(Ts,{authors:e.authors})]},e.id??e.uid+r)},zz=({initialValue:e,suggestions:t,historySuggestions:n,onChange:r,onSumbit:i,onChangeSuggestions:s,onSuggestionSubmit:o})=>{const[a,l]=T.useState(!1),[u,d]=T.useState(n),[h,f]=T.useState(e??""),[g,m]=T.useState(null),_=[...t,...u],w=T.useRef(null),p=g!==null?rd(_[g]):h,y=()=>{l(t.length>0||((u==null?void 0:u.length)??0)>0)},v=()=>{l(!1)};T.useEffect(()=>{d(n)},[n]);const x=A=>{if(A!==null){if(!o){f(rd(t[A])),s([]),l(!1),m(null);return}l(!1),o(_[A],A);return}l(!1),i(p)};return{inputValue:p,showHints:a,ref:w,suggestedIndex:g,localHistorySuggestions:u,handleFocus:y,handleBlur:v,handleKeyDown:A=>{if(_.length!==0){if(A.key==="ArrowDown"){A.preventDefault(),m($=>$===null?0:$===_.length-1?null:$+1);return}if(A.key==="ArrowUp"){A.preventDefault(),m($=>$===0?null:$===null?_.length-1:$-1);return}if(A.key==="Enter"){A.preventDefault(),x(g);return}g!==null&&(f(A.currentTarget.value),m(null))}},handleChange:A=>{const $=A.currentTarget.value;if(console.log("value::::::",$),r($),f($),l(_.length>0),$.length!==0){console.log(u);const B=n.filter(rt=>Cs(rd(rt)).includes(Cs($??"")));d(B)}else d(n);A.currentTarget.value.length===0&&(l(!1),m(null))},onRightIconClick:()=>{r("")},handleSubmitSuggestion:x}},Bz=e=>{const{inputValue:t,ref:n,localHistorySuggestions:r,showHints:i,suggestedIndex:s,handleFocus:o,handleBlur:a,handleKeyDown:l,handleChange:u,onRightIconClick:d,handleSubmitSuggestion:h}=zz(e),{suggestions:f,areSuggestionsLoading:g}=e;return c.jsxs($z,{children:[c.jsx(zn,{icon:c.jsx(sa,{}),value:t,onKeyDown:l,onChange:u,onFocus:o,onClick:o,onBlur:a,placeholder:"Search...",rightIcon:g?c.jsx(wa,{}):t?c.jsx(nT,{}):null,onRightIconClick:d,type:"text"}),i&&c.jsxs(Vz,{ref:n,onClick:m=>m.preventDefault(),children:[r==null?void 0:r.map((m,_)=>c.jsx(Zm,{value:t,searchHistory:!0,suggestedIndex:s,item:m,index:_,handleSubmitSuggestion:h},eE(m))),f.map((m,_)=>m?(console.log(r.length+_),c.jsx(Zm,{value:t,suggestedIndex:s,item:m,index:r.length+_,handleSubmitSuggestion:h},eE(m)+_)):null)]})]})},Hz=E.header`
    width: 100%;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px 55px 0 55px;
    top: 0px;
    position: sticky;
    scroll-padding-top: 150px;
    /* border-bottom: 1px solid ${({theme:e})=>e.colors.border}; */
    background: ${({theme:e})=>e.colors.pageBackground};
    color: ${({theme:e})=>e.colors.textColor};
    z-index: 10;
`,Wz=E.h2`
    width: 150px;
    display: flex;
    align-items: center;
    gap: 8px;
`,qz=E.div`
    width: 100%;
    max-width: 650px;

    @media (max-width: 1000px) {
        width: 100%;
    }
`,Gz=()=>{const[{data:e}]=Ie.useUser(),t=Gh(),n=()=>{Ie.events.logout()},r=()=>{Wt.events.open({title:"Share profile with friends",content:c.jsx(zc,{entity:e})}),En.events.close()};return c.jsxs($f,{children:[c.jsxs(J,{onClick:()=>{t("/me"),En.events.close()},children:[c.jsx(vn,{color:void 0,src:e==null?void 0:e.photoURL,size:"20px",isAuthor:e==null?void 0:e.isAuthor}),"Go to profile"]}),c.jsxs(J,{onClick:r,children:[c.jsx(yc,{}),"Share profile"]}),c.jsx(Xo,{}),c.jsxs(J,{children:[c.jsx(WS,{}),"Edit"]}),c.jsxs(J,{children:[c.jsx(Bb,{}),"Settings"]}),c.jsxs(J,{children:[c.jsx(JS,{}),"Change theme"]}),c.jsx(Xo,{}),c.jsxs(J,{onClick:n,children:[c.jsx(Pb,{}),"Logout"]})]})},Bf=()=>{const[{data:e},t]=Ie.useUser(),n=Ie.useSearchHistory(),r=Te(g1),[i,s,o]=Te([sP,aP,Dz]),a=Ur(),[l]=Sy(),{openLoginModal:u}=BR(),d=hP.find(p=>p.url.includes(a.pathname.slice(1,a.pathname.length))),h=Gh(),f=p=>{const y="displayName"in p?p.displayName:p.name,v=cc(p);console.log({type:v}),h(`/search?query=${y}&type=${v}`)},g=p=>{s(p)},m=p=>{cP(p)},_=p=>{console.log("onSumbit"),h(`/search?query=${p}&type=query`)},w=p=>{p.stopPropagation(),En.events.open({content:c.jsx(Gz,{}),e:p,height:289})};return c.jsx(Hz,{children:c.jsxs(R,{width:"100%",height:"50px",jc:"space-between",gap:30,children:[c.jsx(Wz,{children:d==null?void 0:d.title}),c.jsx(qz,{children:c.jsx(Bz,{suggestions:r,initialValue:l.get("query")??i,historySuggestions:n,onSuggestionSubmit:f,areSuggestionsLoading:o,onChange:g,onSumbit:_,onChangeSuggestions:m})}),c.jsxs(R,{width:"150px",gap:20,jc:"flex-end",children:[e&&c.jsx(J,{$width:"40px",onClick:w,children:c.jsx(vn,{color:e==null?void 0:e.imageColors[0],src:e==null?void 0:e.photoURL,size:"30px",isAuthor:e==null?void 0:e.isAuthor})}),!e&&c.jsx(dr,{loading:t,width:"100px",onClick:u(),appearance:"primary",children:"Login"})]})]})})},Qz=E.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,Kz=E.div`
  padding: 20px 50px;
  height: 100%;
  width: 100%;
`,Yz=()=>{const[e,t]=Ie.useFriends();return c.jsxs(Qz,{children:[c.jsx(Bf,{}),c.jsx(Ls,{loading:t,skeleton:c.jsx(WR,{}),children:c.jsxs(Kz,{children:[c.jsxs(R,{gap:10,width:"100%",children:[c.jsx(zn,{placeholder:"Search for friends...",icon:c.jsx(sa,{})}),c.jsx(dr,{width:"200px",appearance:"primary",children:"Create group chat"})]}),c.jsx(Xo,{}),e.map(n=>c.jsx(Vr,{showLastSeen:!0,user:n,orientation:"horizontal",children:c.jsx(J,{$width:"40px",children:c.jsx(jb,{})})},n.uid))]})})]})},m1=Oe(async e=>{try{return await oR.getHistoryByUserId(e)}catch(t){throw new Error(t.message)}}),e0=my(),Hf=te([]);Hf.reset($e);const tE=Ht.map(e=>{var t;return((t=e.data)==null?void 0:t.uid)??null});j({clock:[e0.open,tE],source:{gateStatus:e0.status,userId:tE,history:Hf},filter:({history:e,userId:t,gateStatus:n})=>n&&t!==null&&e.length===0,fn:({userId:e})=>e,target:m1});xa(m1,Hf);const nE={useHistory:()=>Te([Hf,m1.pending]),useLoadHistory:()=>gy(e0)},Xz=E.div``,Jz=E.div`
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
`,Tu=E.div`
    text-transform: uppercase;
    opacity: 0.3;
    font-size: 0.7rem;
    font-weight: 400;
`;E.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;E.div`
    container-type: size;
    display: flex;
    align-items: center;
    gap: 0px;
    width: 100%;
    height: 40px;
`;E(Wc)`
    border-radius: ${({theme:e})=>e.borderRadius.mild};

    @container (min-width: 700px) {
        min-width: 35px;
        height: 35px;
    }

    @container (max-width: 699px) {
        min-width: 40px;
        height: 40px;
    }
`;E.div`
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
`;E(Wc)`
    height: 15px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};
    width: 100%;

    @container (min-width: 700px) {
        width: 100%;
    }

    @container (max-width: 699px) {
        width: 300px;
    }
`;E(Wc)`
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
`;E(Wc)`
    height: 15px;
    border-radius: ${({theme:e})=>e.borderRadius.mild};

    @container (min-width: 700px) {
        width: 380px;
    }

    @container (max-width: 699px) {
        display: none;
    }
`;const Wf=e=>c.jsxs(Xz,{children:[!!e.songs.length&&c.jsxs(Jz,{children:[c.jsx(Tu,{}),c.jsx(Tu,{children:"Name"}),c.jsx(Tu,{children:"Author"}),c.jsx(Tu,{children:"Listenings"})]}),c.jsx(UR,{...e})]}),Zz=()=>c.jsxs(R,{d:"column",width:"100%",height:"100%",padding:"20px 50px",children:[c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{})]}),e8=E.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
`,t8=E.div`
   padding: 20px 50px;
   height: 100%;
   width: 100%;
`,n8=()=>{const[e,t]=nE.useHistory();return nE.useLoadHistory(),c.jsxs(e8,{children:[c.jsx(Bf,{}),c.jsx(Ls,{color:"",loading:t,skeleton:c.jsx(Zz,{}),children:c.jsx(t8,{children:c.jsx(Wf,{songs:e,listName:"History",listIcon:c.jsx(iy,{}),listUrl:"/history"})})})]})},r8=E.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,i8=E.div`
  padding: 20px 50px;
  height: 100%;
  width: 100%;
`,s8=()=>c.jsxs(R,{padding:"20px 50px",width:"100%",d:"column",gap:0,children:[c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{})]}),o8=()=>{const[e,t]=Ie.useSongLibrary(),[{data:n}]=Ie.useUser();return c.jsxs(r8,{children:[c.jsx(Bf,{}),c.jsx(Ls,{color:"",loading:t,skeleton:c.jsx(s8,{}),children:c.jsxs(i8,{children:[c.jsx(Wf,{listName:"Library",listIcon:c.jsx(mo,{}),listUrl:"/library",songs:e}),!n&&c.jsxs(R,{d:"column",gap:10,width:"100%",height:"100%",jc:"center",children:[c.jsx(mo,{opacity:.5,size:100}),c.jsx(ks,{style:{fontSize:"1.1rem"},children:"Need to log in into account to see your library"})]}),n&&!e.length&&c.jsxs(R,{d:"column",gap:10,width:"100%",children:[c.jsx(mo,{opacity:.5,size:100}),c.jsx(ks,{style:{fontSize:"1.1rem"},children:"No songs added to library"})]})]})})]})},a8=()=>{const[{data:e}]=Ie.useUser();return c.jsx(qR,{userData:e})},l8=()=>c.jsxs(R,{width:"100%",d:"column",ai:"flex-start",children:[c.jsx(se,{width:"100%",height:"400px",radius:"0",children:c.jsxs(R,{width:"100%",d:"column",padding:"56px 50px 50px 50px",ai:"center",jc:"center",gap:20,children:[c.jsx(se,{width:"200px",height:"200px",radius:Df}),c.jsxs(R,{d:"column",gap:8,children:[c.jsx(se,{width:"200px",height:"30px"}),c.jsx(se,{width:"100px",height:"20px",radius:"3px"})]})]})}),c.jsxs(R,{d:"column",padding:"42px 40px 40px 58px",width:"100%",gap:0,children:[c.jsxs(R,{width:"100%",gap:20,style:{marginTop:"4px",marginBottom:"14px"},children:[c.jsx("div",{style:{width:"40px"}}),c.jsx("div",{style:{width:"calc(25% - 4px)",height:"18px"},children:c.jsx(se,{width:"50%",height:"18px",radius:"6px"})}),c.jsx("div",{style:{width:"calc(25% - 2px)",height:"18px"},children:c.jsx(se,{width:"50%",height:"18px",radius:"6px"})}),c.jsx("div",{style:{width:"20%",height:"18px"},children:c.jsx(se,{width:"50%",height:"18px",radius:"6px"})}),c.jsx("div",{style:{width:"18%",height:"18px"},children:c.jsx(se,{width:"50%",height:"18px",radius:"6px"})})]}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{})]})]}),c8="50px",u8=E.div`
	width: 100%;
`;E.div`
	background: ${({background:e})=>e};
	width: 100%;
	height: 320px;
	display: flex;
	align-items: center;
	justify-content: center;
`;const d8=E.div`
	width: 100%;
	padding: 40px ${c8};
`;E.div`
	width: 250px;
	height: 250px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`;const h8=E.div``;E.div`
	width: 200px;
	height: 200px;
	overflow: hidden;
	border-radius: 20px;
	background: grey;
	display: flex;
	align-items: center;
	justify-content: center;

	svg{ 
		width:70px;
		height:70px;
	}

	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
	}
`;const f8=()=>{const{currentPlaylist:e,currentPlaylistSongs:t,loading:n}=ch.usePlaylist();o1({page:"playlist",onChangeId:i=>ch.events.loadPlaylist(i)});const r=()=>{Wt.events.open({title:`Share ${e==null?void 0:e.name} with friends`,content:c.jsx(zc,{entity:e})})};return c.jsx(Ls,{color:"",loading:n,skeleton:c.jsx(l8,{}),children:c.jsxs(u8,{children:[c.jsx(HR,{handleClickShare:r,id:"",name:e==null?void 0:e.name,subtitle:c.jsxs(R,{gap:3,children:[c.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:"300",opacity:"0.6"},children:[e!=null&&e.isAlbum?"Album":"Playlist"," / "]}),c.jsx(Ts,{width:"fit-content",authors:e==null?void 0:e.authors})]}),numberOfListenersPerMonth:e==null?void 0:e.listens,subscribers:e==null?void 0:e.subscribers,imageComponent:c.jsx(oc,{size:"200px",isAlbum:(e==null?void 0:e.isAlbum)??!1,src:e==null?void 0:e.image,color:e==null?void 0:e.imageColors[0]}),isPrivate:e==null?void 0:e.isPrivate,colors:e==null?void 0:e.imageColors,bottomButtons:c.jsx(a1,{buttonColor:e==null?void 0:e.imageColors[0],isAdmin:!1,isPageOwner:!1,queueInfo:{listName:(e==null?void 0:e.name)??"",listIcon:void 0,listUrl:`/playlist/${(e==null?void 0:e.id)??""}`,songs:t??[]}})}),c.jsx(d8,{children:c.jsx(Wf,{songs:t??[],listName:(e==null?void 0:e.name)??"",listIcon:(e==null?void 0:e.image)??"",listUrl:`/playlist/${(e==null?void 0:e.id)??""}`})}),c.jsx(h8,{})]})})},p8=E(ua)`
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
  `,g8=E(Bc)`
  animation: none;
  background-size: 100% 300%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 8px;
    background-image: linear-gradient(#0000007d, #0000006e);
  }
`,m8=E.div`
  font-size: 24px;
  font-weight: 400;
  color: #fff;
`,rE=E.div`
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
`,y8=({author:e})=>c.jsxs(p8,{to:`/author/${e.uid}`,children:[c.jsxs(R,{width:"100%",jc:"space-between",style:{position:"relative",zIndex:1},children:[c.jsxs(R,{width:"250px",d:"column",height:"100%",jc:"space-between",ai:"flex-start",gap:30,children:[c.jsxs(R,{d:"column",gap:14,children:[c.jsxs(R,{width:"100%",d:"column",ai:"flex-start",children:[c.jsx(ks,{style:{color:"#fff"},children:"Top Result"}),c.jsxs(R,{gap:10,children:[c.jsx(m8,{children:e==null?void 0:e.displayName}),e.isVerified&&c.jsx(Mh,{})]})]}),c.jsx(R,{width:"100%",gap:30,children:c.jsxs(R,{gap:4,children:[c.jsxs(rE,{children:[Ym(e==null?void 0:e.numberOfListenersPerMonth),c.jsx(jd,{})]}),"∙",c.jsxs(rE,{children:[e==null?void 0:e.subscribers,c.jsx(ZS,{})]})]})})]}),c.jsx(a1,{buttonColor:e.imageColors[1],isAdmin:!1,isPageOwner:!1,queueInfo:{listName:"",listIcon:void 0,listUrl:"",songs:[]}})]}),c.jsx(vn,{isAuthor:e==null?void 0:e.isAdmin,color:"",src:e==null?void 0:e.photoURL,size:"150px"})]}),c.jsx(g8,{$colors:e==null?void 0:e.imageColors})]}),v8=E.div`
  width: 100%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 30px;
  max-width: 650px;
`,_8=({result:e})=>{const[t]=Sy(),n=Ur(),{currentSong:r,state:i,loaded:s}=W.useSong(),o={listName:"Search",listIcon:yn.song,listUrl:n.pathname,songs:e.filter(h=>cc(h)==="song")},{handlePlay:a}=s1(o);if(e.length===0)return null;const l=e[0],u={song:(h,f,g)=>c.jsx(Hc,{song:h,playing:g&&i==="playing",loading:g&&i==="loading",loaded:g&&s,index:f,onClick:a}),author:h=>c.jsx(Vr,{user:h,orientation:"horizontal"}),user:h=>c.jsx(Vr,{user:h,orientation:"horizontal"}),playlist:h=>c.jsx(Yo,{orientation:"horizontal",playlist:h}),album:h=>c.jsx(Yo,{orientation:"horizontal",playlist:h})},d="isAuthor"in l&&l.isAuthor&&t.get("type")==="author";return c.jsxs(v8,{children:[!d&&c.jsx("h3",{style:{fontWeight:300,marginBottom:"10px"},children:"Result"}),d&&c.jsx(y8,{author:l}),e.map((h,f)=>{const g=cc(h);if(d&&f===0)return null;if(g==="song"){const m=h.id===(r==null?void 0:r.id);return u[g](h,f,m)}return u[g](h)})]})},w8=()=>c.jsxs(R,{gap:6,width:"100%",height:"100%",d:"column",style:{maxWidth:"650px",margin:"20px auto"},children:[c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{}),c.jsx(U,{})]}),x8=()=>{const[e]=Sy(),t=e.get("query"),[n,r,i]=Te([oP,Oz,uP]);return T.useEffect(()=>{t&&i(Cs(t))},[i,t]),c.jsxs(R,{d:"column",width:"100%",height:"100%",children:[c.jsx(Bf,{}),c.jsx(Ls,{color:"",loading:r,skeleton:c.jsx(w8,{}),children:c.jsx(_8,{result:n})})]})},E8=()=>c.jsx("div",{children:"SongPage"}),I8=E.div`
	padding: 40px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 10px;
`,tg=E.div`
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
`,S8=()=>{const[e,t]=T.useState([]),[n,r]=T.useState([]),[i,s]=T.useState([]);return T.useEffect(()=>{Fv.getTopSearches().then(o=>{t(o)}),rn.getTopSongs().then(o=>{r(o)}),Ze.getTopAuthorsByListenings().then(o=>{console.log(o),s(o)})},[]),c.jsxs(I8,{children:[c.jsxs(tg,{children:[c.jsxs(R,{className:"title",jc:"space-between",width:"100%",children:[c.jsx("h3",{children:"Trending Searches"}),c.jsx(sa,{})]}),c.jsx(R,{d:"column",gap:4,ai:"flex-start",width:"100%",children:e.map(o=>{if(o)return c.jsx(Zm,{value:"",index:1,item:o,handleSubmitSuggestion:()=>null},"id"in o?o.id:o.uid)})})]}),c.jsxs(tg,{children:[c.jsxs(R,{className:"title",jc:"space-between",width:"100%",children:[c.jsx("h3",{children:"Top songs"}),yn.song]}),c.jsx(R,{d:"column",gap:4,ai:"flex-start",width:"100%",children:c.jsx(Wf,{songs:n,listName:null,listIcon:void 0,listUrl:null})})]}),c.jsxs(tg,{children:[c.jsxs(R,{className:"title",jc:"space-between",width:"100%",children:[c.jsx("h3",{children:"Top authors"}),yn.author]}),c.jsx(R,{d:"column",gap:4,ai:"flex-start",width:"100%",children:i.map(o=>c.jsx(Vr,{orientation:"horizontal",user:o},o.uid))})]})]})},dP=[{url:"discover",title:"Discover",icon:c.jsx(db,{}),component:c.jsx(Lz,{}),section:"features"},{url:"trends",title:"Trends",icon:c.jsx(Hb,{}),component:c.jsx(S8,{}),section:"features"},{url:"liked",title:"Liked",icon:c.jsx(ry,{}),component:c.jsx(o8,{}),section:"your music",private:!0},{url:"history",title:"History",icon:c.jsx(iy,{}),component:c.jsx(n8,{}),section:"your music",private:!0},{url:"chat",title:"Chat",icon:c.jsx(F_,{}),component:c.jsx(Nz,{}),children:[{url:":id",title:"Chat",icon:c.jsx(F_,{}),component:c.jsx(iP,{}),section:"your activities",private:!0}],section:"your activities",private:!0},{url:"friends",title:"Friends",icon:c.jsx(Wb,{}),component:c.jsx(Yz,{}),section:"your activities",private:!0}],T8=[{url:"song/:id",title:"Song",icon:c.jsx(mo,{}),component:c.jsx(E8,{}),section:"your music",private:!0},{url:"search",title:"Search",icon:c.jsx(sa,{}),component:c.jsx(x8,{}),section:"features"},{url:"playlist/:id",title:"Playlist",icon:c.jsx(Eb,{}),component:c.jsx(f8,{}),section:"your music",private:!0},{url:"author/:id",title:"Author",icon:c.jsx(Lb,{}),component:c.jsx(qR,{}),section:"your music",private:!0},{url:"me",title:"Me",icon:c.jsx(eT,{}),component:c.jsx(a8,{}),section:"your music",private:!0}],hP=[...dP,...T8],k8=E.label`
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
`,C8=E.div`
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
`,A8=()=>c.jsxs(k8,{children:[c.jsx("input",{type:"file"}),c.jsx(C8,{children:c.jsx(fb,{})})]}),R8=()=>c.jsxs(R,{d:"column",gap:20,width:"100%",children:[c.jsx(A8,{}),c.jsx(zn,{required:!0,placeholder:"Enter name",label:"Playlist name"}),c.jsx(dr,{appearance:"primary",disabled:!0,children:"Create"})]});var xi=(e=>(e.light="light",e.dark="dark",e))(xi||{});const P8={[xi.light]:gL,[xi.dark]:ms},N8=xi.dark,j8=()=>{const e=localStorage.getItem("theme");return e?xi[e]:N8},uc=te(j8()),b8=Oe(e=>{localStorage.setItem("theme",e)}),fP=F(),M8=F();j({clock:fP,source:uc,fn:e=>e===xi.light?xi.dark:xi.light,target:[uc,b8]});j({clock:M8,source:uc,fn:(e,t)=>t,target:uc});const pP=()=>{const e=Te(uc);return{theme:e,themeParams:P8[e]}},L8=E(J)`
	min-height: 20px;
	height: 20px;
`,D8=E.div`
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
`,O8=()=>{const{theme:e}=pP(),t=()=>{fP()};return c.jsx(L8,{$width:"20px",onClick:t,children:c.jsxs(D8,{className:`theme ${e.toString()}`,children:[c.jsx(JS,{size:18}),c.jsx(Db,{size:18})]})})},$8=()=>{var o;const e=xU(dP,"section"),{loggedIn:t}=BR(),[n]=Ie.useOwnPlaylists(),i={chat:rs.useChatUnreadCount()},s=t(()=>{Wt.events.open({title:"Create Playlist",content:c.jsx(R8,{})})});return c.jsxs(HU,{children:[c.jsxs(WU,{children:[c.jsx(zR,{}),c.jsx(O8,{})]}),Object.keys(e).map((a,l)=>c.jsxs(Hx,{children:[c.jsx(Wx,{children:a}),e[a].map(u=>c.jsx(qU,{to:u.url,className:({isActive:d})=>d?"active":"",children:c.jsxs(R,{width:"100%",jc:"space-between",children:[c.jsx(wU,{icon:u.icon,text:u.title}),!!i[u.url]&&c.jsx(p1,{children:i[u.url]})]})},u.url))]},l)),c.jsxs(Hx,{children:[c.jsxs(R,{jc:"space-between",width:"100%",children:[c.jsx(Wx,{children:"Your Playlists"}),c.jsx("button",{className:"add-playlist",onClick:s,children:c.jsx(KS,{})})]}),c.jsx(GU,{children:(o=n==null?void 0:n.slice(0,4))==null?void 0:o.map(a=>c.jsx(Yo,{orientation:"horizontal",playlist:a},a.id))})]})]})},V8=(e,t)=>{const n=T.useCallback(r=>{e.current&&!e.current.contains(r.target)&&t()},[t,e]);T.useEffect(()=>(document.addEventListener("click",n),()=>{document.removeEventListener("click",n)}),[n])},F8=E.div`
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
`,U8=()=>{const{content:e,height:t,width:n,isOpen:r,x:i,y:s,origin:o}=En.usePopup(),a=T.useRef(null);return V8(a,()=>{r&&En.events.close()}),c.jsx(F8,{$isOpen:r,$transformOrigin:o,ref:a,$posX:i,$posY:s,$height:t,$width:n,children:e})},z8=E.div`
  height: calc(100dvh - 80px);
  display: flex;
`,B8=E.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  transition: 0.5s background-color;
  background-color:  ${({$background:e})=>e};
  background-image: ${({theme:e})=>`linear-gradient(${e.colors.playerDarkening}, ${e.colors.playerDarkening})`};
  position: absolute;
  left: 0;
  bottom: 0;
  gap: 50px;
  z-index: 10;

  .music-controls {
    flex-direction: row-reverse
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
`,H8=E.h1`
  font-size: 1.1rem;
  font-weight: 200;
`,W8=E.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 300px;
  max-width: 300px;
  overflow: hidden;
`,q8=E(Bc)`
  overflow-y: auto;
  height: 100%;
  padding:  50px 20px;
  animation: none;
  scroll-padding-bottom: 300px;

  & > * {
    gap: 10px;
    font-size: 1.4rem;
  }
`,G8=()=>{const{currentSong:e}=W.useSong();return c.jsx(q8,{$colors:e==null?void 0:e.imageColors,children:c.jsx(jR,{})})},Q8=()=>{const{currentSong:e}=W.useSong(),t=NR(),n=()=>{W.fullscreen.open()},r=a=>{a.stopPropagation(),En.events.open({content:c.jsx($R,{song:e}),height:329,e:a})},i=()=>{Wt.events.open({title:`Share "${e==null?void 0:e.name}" with friends`,content:c.jsx(zc,{entity:e})})},s=()=>{Wt.events.open({title:`Add "${e==null?void 0:e.name}" to playlist`,content:c.jsx(AR,{song:e})})},o=a=>{a.stopPropagation(),En.events.open({content:c.jsx(G8,{}),height:500,width:350,e:a})};return c.jsxs(B8,{$background:(e==null?void 0:e.imageColors[0])??"darkgrey",children:[c.jsxs(W8,{children:[c.jsx(Yh,{color:(e==null?void 0:e.imageColors[0])??"grey",src:e==null?void 0:e.cover,size:"40px"}),c.jsxs(R,{d:"column",ai:"flex-start",children:[c.jsx(H8,{children:(e==null?void 0:e.name)??"Untitled"}),c.jsx(Ts,{authors:e==null?void 0:e.authors})]})]}),c.jsxs(R,{gap:30,width:"100%",children:[c.jsx(RR,{...t}),c.jsxs("div",{style:{minWidth:"300px",display:"flex",justifyContent:"flex-end",gap:"10px"},children:[c.jsx(Kh,{disabled:!e,width:"42px",songId:e==null?void 0:e.id,likeColor:e==null?void 0:e.imageColors[0]}),c.jsx(J,{$width:"42px",disabled:!e,onClick:s,children:c.jsx(XS,{size:20})}),c.jsx(J,{$width:"42px",disabled:!e,onClick:i,children:c.jsx(yc,{size:20})}),c.jsx(J,{$width:"42px",onClick:o,children:c.jsx(YS,{size:20})}),c.jsx(J,{$width:"42px",onClick:r,disabled:!e,children:c.jsx(ny,{size:20})}),c.jsx(J,{$width:"42px",onClick:n,children:c.jsx(Nb,{})})]})]})]})},K8=E.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Y8=()=>{const e=W.fullscreen.useFullScreen();return c.jsxs(c.Fragment,{children:[c.jsx(cU,{}),c.jsx(iU,{open:e}),c.jsx(mU,{}),c.jsx(U8,{}),c.jsxs(z8,{children:[c.jsx($8,{}),c.jsx(K8,{children:c.jsx(J4,{})})]}),c.jsx(Q8,{})]})},X8=()=>c.jsx(GT,{children:c.jsxs(so,{path:"/",element:c.jsx(Y8,{}),children:[hP.map(e=>c.jsx(so,{element:e.component,path:e.url,children:e.children&&e.children.map(t=>c.jsx(so,{element:t.component,path:t.url},t.url))},e.url)),c.jsx(so,{path:"*",element:c.jsx(c.Fragment,{children:"404"})})]})}),J8=qj`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Geologica', sans-serif;
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
`,Z8=E.div`
  height: 100dvh;
  background: ${({theme:e})=>e.colors.pageBackground};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;function eB(){const{themeParams:e}=pP();return Ie.gates.useLoadUser(),c.jsxs(Bj,{theme:e,children:[c.jsx(J8,{}),c.jsx(aL,{children:c.jsx(Z8,{children:c.jsxs(rT,{children:[c.jsx(l4,{}),c.jsx(X8,{})]})})})]})}ng.createRoot(document.getElementById("root")).render(c.jsx(pe.StrictMode,{children:c.jsx(rT,{children:c.jsx(eB,{})})}));
