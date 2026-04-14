function m5(e,t){for(var i=0;i<t.length;i++){const n=t[i];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(n,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();function p5(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wf={exports:{}},Fs={},Df={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),h5=Symbol.for("react.portal"),u5=Symbol.for("react.fragment"),f5=Symbol.for("react.strict_mode"),g5=Symbol.for("react.profiler"),x5=Symbol.for("react.provider"),y5=Symbol.for("react.context"),w5=Symbol.for("react.forward_ref"),v5=Symbol.for("react.suspense"),b5=Symbol.for("react.memo"),k5=Symbol.for("react.lazy"),N0=Symbol.iterator;function j5(e){return e===null||typeof e!="object"?null:(e=N0&&e[N0]||e["@@iterator"],typeof e=="function"?e:null)}var Vf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nf=Object.assign,Of={};function cr(e,t,i){this.props=e,this.context=t,this.refs=Of,this.updater=i||Vf}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _f(){}_f.prototype=cr.prototype;function sm(e,t,i){this.props=e,this.context=t,this.refs=Of,this.updater=i||Vf}var lm=sm.prototype=new _f;lm.constructor=sm;Nf(lm,cr.prototype);lm.isPureReactComponent=!0;var O0=Array.isArray,Hf=Object.prototype.hasOwnProperty,dm={current:null},Uf={key:!0,ref:!0,__self:!0,__source:!0};function Zf(e,t,i){var n,o={},a=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Hf.call(t,n)&&!Uf.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(c===1)o.children=i;else if(1<c){for(var m=Array(c),p=0;p<c;p++)m[p]=arguments[p+2];o.children=m}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)o[n]===void 0&&(o[n]=c[n]);return{$$typeof:To,type:e,key:a,ref:s,props:o,_owner:dm.current}}function $5(e,t){return{$$typeof:To,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cm(e){return typeof e=="object"&&e!==null&&e.$$typeof===To}function S5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var _0=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S5(""+e.key):t.toString(36)}function Ta(e,t,i,n,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case To:case h5:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+wl(s,0):n,O0(o)?(i="",e!=null&&(i=e.replace(_0,"$&/")+"/"),Ta(o,t,i,"",function(p){return p})):o!=null&&(cm(o)&&(o=$5(o,i+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(_0,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",O0(e))for(var c=0;c<e.length;c++){a=e[c];var m=n+wl(a,c);s+=Ta(a,t,i,m,o)}else if(m=j5(e),typeof m=="function")for(e=m.call(e),c=0;!(a=e.next()).done;)a=a.value,m=n+wl(a,c++),s+=Ta(a,t,i,m,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Uo(e,t,i){if(e==null)return e;var n=[],o=0;return Ta(e,n,"","",function(a){return t.call(i,a,o++)}),n}function C5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Pa={transition:null},z5={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Pa,ReactCurrentOwner:dm};function Yf(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:Uo,forEach:function(e,t,i){Uo(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return Uo(e,function(){t++}),t},toArray:function(e){return Uo(e,function(t){return t})||[]},only:function(e){if(!cm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=cr;N.Fragment=u5;N.Profiler=g5;N.PureComponent=sm;N.StrictMode=f5;N.Suspense=v5;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z5;N.act=Yf;N.cloneElement=function(e,t,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Nf({},e.props),o=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=dm.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(m in t)Hf.call(t,m)&&!Uf.hasOwnProperty(m)&&(n[m]=t[m]===void 0&&c!==void 0?c[m]:t[m])}var m=arguments.length-2;if(m===1)n.children=i;else if(1<m){c=Array(m);for(var p=0;p<m;p++)c[p]=arguments[p+2];n.children=c}return{$$typeof:To,type:e.type,key:o,ref:a,props:n,_owner:s}};N.createContext=function(e){return e={$$typeof:y5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:x5,_context:e},e.Consumer=e};N.createElement=Zf;N.createFactory=function(e){var t=Zf.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:w5,render:e}};N.isValidElement=cm;N.lazy=function(e){return{$$typeof:k5,_payload:{_status:-1,_result:e},_init:C5}};N.memo=function(e,t){return{$$typeof:b5,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=Pa.transition;Pa.transition={};try{e()}finally{Pa.transition=t}};N.unstable_act=Yf;N.useCallback=function(e,t){return Be.current.useCallback(e,t)};N.useContext=function(e){return Be.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};N.useEffect=function(e,t){return Be.current.useEffect(e,t)};N.useId=function(){return Be.current.useId()};N.useImperativeHandle=function(e,t,i){return Be.current.useImperativeHandle(e,t,i)};N.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return Be.current.useMemo(e,t)};N.useReducer=function(e,t,i){return Be.current.useReducer(e,t,i)};N.useRef=function(e){return Be.current.useRef(e)};N.useState=function(e){return Be.current.useState(e)};N.useSyncExternalStore=function(e,t,i){return Be.current.useSyncExternalStore(e,t,i)};N.useTransition=function(){return Be.current.useTransition()};N.version="18.3.1";Df.exports=N;var k=Df.exports;const ae=p5(k),T5=m5({__proto__:null,default:ae},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P5=k,M5=Symbol.for("react.element"),A5=Symbol.for("react.fragment"),L5=Object.prototype.hasOwnProperty,E5=P5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I5={key:!0,ref:!0,__self:!0,__source:!0};function Qf(e,t,i){var n,o={},a=null,s=null;i!==void 0&&(a=""+i),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)L5.call(t,n)&&!I5.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:M5,type:e,key:a,ref:s,props:o,_owner:E5.current}}Fs.Fragment=A5;Fs.jsx=Qf;Fs.jsxs=Qf;Wf.exports=Fs;var r=Wf.exports,_d={},Gf={exports:{}},tt={},Kf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,R){var W=A.length;A.push(R);e:for(;0<W;){var B=W-1>>>1,U=A[B];if(0<o(U,R))A[B]=R,A[W]=U,W=B;else break e}}function i(A){return A.length===0?null:A[0]}function n(A){if(A.length===0)return null;var R=A[0],W=A.pop();if(W!==R){A[0]=W;e:for(var B=0,U=A.length,St=U>>>1;B<St;){var We=2*(B+1)-1,Wt=A[We],$e=We+1,Ct=A[$e];if(0>o(Wt,W))$e<U&&0>o(Ct,Wt)?(A[B]=Ct,A[$e]=W,B=$e):(A[B]=Wt,A[We]=W,B=We);else if($e<U&&0>o(Ct,W))A[B]=Ct,A[$e]=W,B=$e;else break e}}return R}function o(A,R){var W=A.sortIndex-R.sortIndex;return W!==0?W:A.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var m=[],p=[],u=1,h=null,f=3,g=!1,w=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var R=i(p);R!==null;){if(R.callback===null)n(p);else if(R.startTime<=A)n(p),R.sortIndex=R.expirationTime,t(m,R);else break;R=i(p)}}function $(A){if(b=!1,y(A),!w)if(i(m)!==null)w=!0,H(z);else{var R=i(p);R!==null&&he($,R.startTime-A)}}function z(A,R){w=!1,b&&(b=!1,v(P),P=-1),g=!0;var W=f;try{for(y(R),h=i(m);h!==null&&(!(h.expirationTime>R)||A&&!V());){var B=h.callback;if(typeof B=="function"){h.callback=null,f=h.priorityLevel;var U=B(h.expirationTime<=R);R=e.unstable_now(),typeof U=="function"?h.callback=U:h===i(m)&&n(m),y(R)}else n(m);h=i(m)}if(h!==null)var St=!0;else{var We=i(p);We!==null&&he($,We.startTime-R),St=!1}return St}finally{h=null,f=W,g=!1}}var T=!1,S=null,P=-1,E=5,L=-1;function V(){return!(e.unstable_now()-L<E)}function Q(){if(S!==null){var A=e.unstable_now();L=A;var R=!0;try{R=S(!0,A)}finally{R?ne():(T=!1,S=null)}}else T=!1}var ne;if(typeof x=="function")ne=function(){x(Q)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Ye=X.port2;X.port1.onmessage=Q,ne=function(){Ye.postMessage(null)}}else ne=function(){C(Q,0)};function H(A){S=A,T||(T=!0,ne())}function he(A,R){P=C(function(){A(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,H(z))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return i(m)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var W=f;f=R;try{return A()}finally{f=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,R){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var W=f;f=A;try{return R()}finally{f=W}},e.unstable_scheduleCallback=function(A,R,W){var B=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?B+W:B):W=B,A){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=W+U,A={id:u++,callback:R,priorityLevel:A,startTime:W,expirationTime:U,sortIndex:-1},W>B?(A.sortIndex=W,t(p,A),i(m)===null&&A===i(p)&&(b?(v(P),P=-1):b=!0,he($,W-B))):(A.sortIndex=U,t(m,A),w||g||(w=!0,H(z))),A},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(A){var R=f;return function(){var W=f;f=R;try{return A.apply(this,arguments)}finally{f=W}}}})(qf);Kf.exports=qf;var R5=Kf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B5=k,Je=R5;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xf=new Set,to={};function pn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(to[e]=t,e=0;e<t.length;e++)Xf.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hd=Object.prototype.hasOwnProperty,F5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H0={},U0={};function W5(e){return Hd.call(U0,e)?!0:Hd.call(H0,e)?!1:F5.test(e)?U0[e]=!0:(H0[e]=!0,!1)}function D5(e,t,i,n){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V5(e,t,i,n){if(t===null||typeof t>"u"||D5(e,t,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,i,n,o,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var mm=/[\-:]([a-z])/g;function pm(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mm,pm);Te[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mm,pm);Te[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mm,pm);Te[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function hm(e,t,i,n){var o=Te.hasOwnProperty(t)?Te[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(V5(t,i,o,n)&&(i=null),n||o===null?W5(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):o.mustUseProperty?e[o.propertyName]=i===null?o.type===3?!1:"":i:(t=o.attributeName,n=o.attributeNamespace,i===null?e.removeAttribute(t):(o=o.type,i=o===3||o===4&&i===!0?"":""+i,n?e.setAttributeNS(n,t,i):e.setAttribute(t,i))))}var ii=B5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),um=Symbol.for("react.strict_mode"),Ud=Symbol.for("react.profiler"),Jf=Symbol.for("react.provider"),eg=Symbol.for("react.context"),fm=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),gm=Symbol.for("react.memo"),di=Symbol.for("react.lazy"),tg=Symbol.for("react.offscreen"),Z0=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=Z0&&e[Z0]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,vl;function Lr(e){if(vl===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);vl=t&&t[1]||""}return`
`+vl+e}var bl=!1;function kl(e,t){if(!e||bl)return"";bl=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var n=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){n=p}e.call(t.prototype)}else{try{throw Error()}catch(p){n=p}e()}}catch(p){if(p&&n&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),a=n.stack.split(`
`),s=o.length-1,c=a.length-1;1<=s&&0<=c&&o[s]!==a[c];)c--;for(;1<=s&&0<=c;s--,c--)if(o[s]!==a[c]){if(s!==1||c!==1)do if(s--,c--,0>c||o[s]!==a[c]){var m=`
`+o[s].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=s&&0<=c);break}}}finally{bl=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Lr(e):""}function N5(e){switch(e.tag){case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return e=kl(e.type,!1),e;case 11:return e=kl(e.type.render,!1),e;case 1:return e=kl(e.type,!0),e;default:return""}}function Qd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case $n:return"Portal";case Ud:return"Profiler";case um:return"StrictMode";case Zd:return"Suspense";case Yd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case eg:return(e.displayName||"Context")+".Consumer";case Jf:return(e._context.displayName||"Context")+".Provider";case fm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gm:return t=e.displayName||null,t!==null?t:Qd(e.type)||"Memo";case di:t=e._payload,e=e._init;try{return Qd(e(t))}catch{}}return null}function O5(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qd(t);case 8:return t===um?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ig(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _5(e){var t=ig(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){n=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yo(e){e._valueTracker||(e._valueTracker=_5(e))}function ng(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=ig(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}function Ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gd(e,t){var i=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Y0(e,t){var i=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;i=Mi(t.value!=null?t.value:i),e._wrapperState={initialChecked:n,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rg(e,t){t=t.checked,t!=null&&hm(e,"checked",t,!1)}function Kd(e,t){rg(e,t);var i=Mi(t.value),n=t.type;if(i!=null)n==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qd(e,t.type,i):t.hasOwnProperty("defaultValue")&&qd(e,t.type,Mi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Q0(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function qd(e,t,i){(t!=="number"||Ka(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Er=Array.isArray;function On(e,t,i,n){if(e=e.options,t){t={};for(var o=0;o<i.length;o++)t["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=t.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&n&&(e[i].defaultSelected=!0)}else{for(i=""+Mi(i),t=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function G0(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(M(92));if(Er(i)){if(1<i.length)throw Error(M(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Mi(i)}}function og(e,t){var i=Mi(t.value),n=Mi(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),n!=null&&(e.defaultValue=""+n)}function K0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ag(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ag(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qo,sg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,i,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function io(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H5=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){H5.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function lg(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function dg(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var n=i.indexOf("--")===0,o=lg(i,t[i],n);i==="float"&&(i="cssFloat"),n?e.setProperty(i,o):e[i]=o}}var U5=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(e,t){if(t){if(U5[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function tc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ic=null;function xm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nc=null,_n=null,Hn=null;function q0(e){if(e=Ao(e)){if(typeof nc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Os(t),nc(e.stateNode,e.type,t))}}function cg(e){_n?Hn?Hn.push(e):Hn=[e]:_n=e}function mg(){if(_n){var e=_n,t=Hn;if(Hn=_n=null,q0(e),t)for(e=0;e<t.length;e++)q0(t[e])}}function pg(e,t){return e(t)}function hg(){}var jl=!1;function ug(e,t,i){if(jl)return e(t,i);jl=!0;try{return pg(e,t,i)}finally{jl=!1,(_n!==null||Hn!==null)&&(hg(),mg())}}function no(e,t){var i=e.stateNode;if(i===null)return null;var n=Os(i);if(n===null)return null;i=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(M(231,t,typeof i));return i}var rc=!1;if(qt)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){rc=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{rc=!1}function Z5(e,t,i,n,o,a,s,c,m){var p=Array.prototype.slice.call(arguments,3);try{t.apply(i,p)}catch(u){this.onError(u)}}var Vr=!1,qa=null,Xa=!1,oc=null,Y5={onError:function(e){Vr=!0,qa=e}};function Q5(e,t,i,n,o,a,s,c,m){Vr=!1,qa=null,Z5.apply(Y5,arguments)}function G5(e,t,i,n,o,a,s,c,m){if(Q5.apply(this,arguments),Vr){if(Vr){var p=qa;Vr=!1,qa=null}else throw Error(M(198));Xa||(Xa=!0,oc=p)}}function hn(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function fg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function X0(e){if(hn(e)!==e)throw Error(M(188))}function K5(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var i=e,n=t;;){var o=i.return;if(o===null)break;var a=o.alternate;if(a===null){if(n=o.return,n!==null){i=n;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===i)return X0(o),e;if(a===n)return X0(o),t;a=a.sibling}throw Error(M(188))}if(i.return!==n.return)i=o,n=a;else{for(var s=!1,c=o.child;c;){if(c===i){s=!0,i=o,n=a;break}if(c===n){s=!0,n=o,i=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===i){s=!0,i=a,n=o;break}if(c===n){s=!0,n=a,i=o;break}c=c.sibling}if(!s)throw Error(M(189))}}if(i.alternate!==n)throw Error(M(190))}if(i.tag!==3)throw Error(M(188));return i.stateNode.current===i?e:t}function gg(e){return e=K5(e),e!==null?xg(e):null}function xg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xg(e);if(t!==null)return t;e=e.sibling}return null}var yg=Je.unstable_scheduleCallback,J0=Je.unstable_cancelCallback,q5=Je.unstable_shouldYield,X5=Je.unstable_requestPaint,ue=Je.unstable_now,J5=Je.unstable_getCurrentPriorityLevel,ym=Je.unstable_ImmediatePriority,wg=Je.unstable_UserBlockingPriority,Ja=Je.unstable_NormalPriority,ey=Je.unstable_LowPriority,vg=Je.unstable_IdlePriority,Ws=null,Et=null;function ty(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ws,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:ry,iy=Math.log,ny=Math.LN2;function ry(e){return e>>>=0,e===0?32:31-(iy(e)/ny|0)|0}var Go=64,Ko=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function es(e,t){var i=e.pendingLanes;if(i===0)return 0;var n=0,o=e.suspendedLanes,a=e.pingedLanes,s=i&268435455;if(s!==0){var c=s&~o;c!==0?n=Ir(c):(a&=s,a!==0&&(n=Ir(a)))}else s=i&~o,s!==0?n=Ir(s):a!==0&&(n=Ir(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(n&4&&(n|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)i=31-vt(t),o=1<<i,n|=e[i],t&=~o;return n}function oy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ay(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-vt(a),c=1<<s,m=o[s];m===-1?(!(c&i)||c&n)&&(o[s]=oy(c,t)):m<=t&&(e.expiredLanes|=c),a&=~c}}function ac(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bg(){var e=Go;return Go<<=1,!(Go&4194240)&&(Go=64),e}function $l(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Po(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=i}function sy(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<i;){var o=31-vt(i),a=1<<o;t[o]=0,n[o]=-1,e[o]=-1,i&=~a}}function wm(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-vt(i),o=1<<n;o&t|e[n]&t&&(e[n]|=t),i&=~o}}var q=0;function kg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jg,vm,$g,Sg,Cg,sc=!1,qo=[],wi=null,vi=null,bi=null,ro=new Map,oo=new Map,pi=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ep(e,t){switch(e){case"focusin":case"focusout":wi=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":bi=null;break;case"pointerover":case"pointerout":ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(t.pointerId)}}function yr(e,t,i,n,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Ao(t),t!==null&&vm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function dy(e,t,i,n,o){switch(t){case"focusin":return wi=yr(wi,e,t,i,n,o),!0;case"dragenter":return vi=yr(vi,e,t,i,n,o),!0;case"mouseover":return bi=yr(bi,e,t,i,n,o),!0;case"pointerover":var a=o.pointerId;return ro.set(a,yr(ro.get(a)||null,e,t,i,n,o)),!0;case"gotpointercapture":return a=o.pointerId,oo.set(a,yr(oo.get(a)||null,e,t,i,n,o)),!0}return!1}function zg(e){var t=Yi(e.target);if(t!==null){var i=hn(t);if(i!==null){if(t=i.tag,t===13){if(t=fg(i),t!==null){e.blockedOn=t,Cg(e.priority,function(){$g(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ma(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=lc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);ic=n,i.target.dispatchEvent(n),ic=null}else return t=Ao(i),t!==null&&vm(t),e.blockedOn=i,!1;t.shift()}return!0}function tp(e,t,i){Ma(e)&&i.delete(t)}function cy(){sc=!1,wi!==null&&Ma(wi)&&(wi=null),vi!==null&&Ma(vi)&&(vi=null),bi!==null&&Ma(bi)&&(bi=null),ro.forEach(tp),oo.forEach(tp)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,sc||(sc=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,cy)))}function ao(e){function t(o){return wr(o,e)}if(0<qo.length){wr(qo[0],e);for(var i=1;i<qo.length;i++){var n=qo[i];n.blockedOn===e&&(n.blockedOn=null)}}for(wi!==null&&wr(wi,e),vi!==null&&wr(vi,e),bi!==null&&wr(bi,e),ro.forEach(t),oo.forEach(t),i=0;i<pi.length;i++)n=pi[i],n.blockedOn===e&&(n.blockedOn=null);for(;0<pi.length&&(i=pi[0],i.blockedOn===null);)zg(i),i.blockedOn===null&&pi.shift()}var Un=ii.ReactCurrentBatchConfig,ts=!0;function my(e,t,i,n){var o=q,a=Un.transition;Un.transition=null;try{q=1,bm(e,t,i,n)}finally{q=o,Un.transition=a}}function py(e,t,i,n){var o=q,a=Un.transition;Un.transition=null;try{q=4,bm(e,t,i,n)}finally{q=o,Un.transition=a}}function bm(e,t,i,n){if(ts){var o=lc(e,t,i,n);if(o===null)Il(e,t,n,is,i),ep(e,n);else if(dy(o,e,t,i,n))n.stopPropagation();else if(ep(e,n),t&4&&-1<ly.indexOf(e)){for(;o!==null;){var a=Ao(o);if(a!==null&&jg(a),a=lc(e,t,i,n),a===null&&Il(e,t,n,is,i),a===o)break;o=a}o!==null&&n.stopPropagation()}else Il(e,t,n,null,i)}}var is=null;function lc(e,t,i,n){if(is=null,e=xm(n),e=Yi(e),e!==null)if(t=hn(e),t===null)e=null;else if(i=t.tag,i===13){if(e=fg(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return is=e,null}function Tg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J5()){case ym:return 1;case wg:return 4;case Ja:case ey:return 16;case vg:return 536870912;default:return 16}default:return 16}}var fi=null,km=null,Aa=null;function Pg(){if(Aa)return Aa;var e,t=km,i=t.length,n,o="value"in fi?fi.value:fi.textContent,a=o.length;for(e=0;e<i&&t[e]===o[e];e++);var s=i-e;for(n=1;n<=s&&t[i-n]===o[a-n];n++);return Aa=o.slice(e,1<n?1-n:void 0)}function La(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function ip(){return!1}function it(e){function t(i,n,o,a,s){this._reactName=i,this._targetInst=o,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(i=e[c],this[c]=i?i(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Xo:ip,this.isPropagationStopped=ip,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jm=it(mr),Mo=de({},mr,{view:0,detail:0}),hy=it(Mo),Sl,Cl,vr,Ds=de({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$m,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Sl=e.screenX-vr.screenX,Cl=e.screenY-vr.screenY):Cl=Sl=0,vr=e),Sl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),np=it(Ds),uy=de({},Ds,{dataTransfer:0}),fy=it(uy),gy=de({},Mo,{relatedTarget:0}),zl=it(gy),xy=de({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),yy=it(xy),wy=de({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vy=it(wy),by=de({},mr,{data:0}),rp=it(by),ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$y[e])?!!t[e]:!1}function $m(){return Sy}var Cy=de({},Mo,{key:function(e){if(e.key){var t=ky[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=La(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$m,charCode:function(e){return e.type==="keypress"?La(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?La(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zy=it(Cy),Ty=de({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=it(Ty),Py=de({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$m}),My=it(Py),Ay=de({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ly=it(Ay),Ey=de({},Ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=it(Ey),Ry=[9,13,27,32],Sm=qt&&"CompositionEvent"in window,Nr=null;qt&&"documentMode"in document&&(Nr=document.documentMode);var By=qt&&"TextEvent"in window&&!Nr,Mg=qt&&(!Sm||Nr&&8<Nr&&11>=Nr),ap=" ",sp=!1;function Ag(e,t){switch(e){case"keyup":return Ry.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Fy(e,t){switch(e){case"compositionend":return Lg(t);case"keypress":return t.which!==32?null:(sp=!0,ap);case"textInput":return e=t.data,e===ap&&sp?null:e;default:return null}}function Wy(e,t){if(Cn)return e==="compositionend"||!Sm&&Ag(e,t)?(e=Pg(),Aa=km=fi=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mg&&t.locale!=="ko"?null:t.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dy[e.type]:t==="textarea"}function Eg(e,t,i,n){cg(n),t=ns(t,"onChange"),0<t.length&&(i=new jm("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var Or=null,so=null;function Vy(e){Hg(e,0)}function Vs(e){var t=Pn(e);if(ng(t))return e}function Ny(e,t){if(e==="change")return t}var Ig=!1;if(qt){var Tl;if(qt){var Pl="oninput"in document;if(!Pl){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),Pl=typeof dp.oninput=="function"}Tl=Pl}else Tl=!1;Ig=Tl&&(!document.documentMode||9<document.documentMode)}function cp(){Or&&(Or.detachEvent("onpropertychange",Rg),so=Or=null)}function Rg(e){if(e.propertyName==="value"&&Vs(so)){var t=[];Eg(t,so,e,xm(e)),ug(Vy,t)}}function Oy(e,t,i){e==="focusin"?(cp(),Or=t,so=i,Or.attachEvent("onpropertychange",Rg)):e==="focusout"&&cp()}function _y(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vs(so)}function Hy(e,t){if(e==="click")return Vs(t)}function Uy(e,t){if(e==="input"||e==="change")return Vs(t)}function Zy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Zy;function lo(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var o=i[n];if(!Hd.call(t,o)||!jt(e[o],t[o]))return!1}return!0}function mp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pp(e,t){var i=mp(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=mp(i)}}function Bg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fg(){for(var e=window,t=Ka();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Ka(e.document)}return t}function Cm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yy(e){var t=Fg(),i=e.focusedElem,n=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Bg(i.ownerDocument.documentElement,i)){if(n!==null&&Cm(i)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=i.textContent.length,a=Math.min(n.start,o);n=n.end===void 0?a:Math.min(n.end,o),!e.extend&&a>n&&(o=n,n=a,a=o),o=pp(i,a);var s=pp(i,n);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qy=qt&&"documentMode"in document&&11>=document.documentMode,zn=null,dc=null,_r=null,cc=!1;function hp(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;cc||zn==null||zn!==Ka(n)||(n=zn,"selectionStart"in n&&Cm(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),_r&&lo(_r,n)||(_r=n,n=ns(dc,"onSelect"),0<n.length&&(t=new jm("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=zn)))}function Jo(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Tn={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},Ml={},Wg={};qt&&(Wg=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function Ns(e){if(Ml[e])return Ml[e];if(!Tn[e])return e;var t=Tn[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Wg)return Ml[e]=t[i];return e}var Dg=Ns("animationend"),Vg=Ns("animationiteration"),Ng=Ns("animationstart"),Og=Ns("transitionend"),_g=new Map,up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(e,t){_g.set(e,t),pn(t,[e])}for(var Al=0;Al<up.length;Al++){var Ll=up[Al],Gy=Ll.toLowerCase(),Ky=Ll[0].toUpperCase()+Ll.slice(1);Ii(Gy,"on"+Ky)}Ii(Dg,"onAnimationEnd");Ii(Vg,"onAnimationIteration");Ii(Ng,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(Og,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function fp(e,t,i){var n=e.type||"unknown-event";e.currentTarget=i,G5(n,t,void 0,e),e.currentTarget=null}function Hg(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],o=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var s=n.length-1;0<=s;s--){var c=n[s],m=c.instance,p=c.currentTarget;if(c=c.listener,m!==a&&o.isPropagationStopped())break e;fp(o,c,p),a=m}else for(s=0;s<n.length;s++){if(c=n[s],m=c.instance,p=c.currentTarget,c=c.listener,m!==a&&o.isPropagationStopped())break e;fp(o,c,p),a=m}}}if(Xa)throw e=oc,Xa=!1,oc=null,e}function ee(e,t){var i=t[fc];i===void 0&&(i=t[fc]=new Set);var n=e+"__bubble";i.has(n)||(Ug(t,e,2,!1),i.add(n))}function El(e,t,i){var n=0;t&&(n|=4),Ug(i,e,n,t)}var ea="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[ea]){e[ea]=!0,Xf.forEach(function(i){i!=="selectionchange"&&(qy.has(i)||El(i,!1,e),El(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ea]||(t[ea]=!0,El("selectionchange",!1,t))}}function Ug(e,t,i,n){switch(Tg(t)){case 1:var o=my;break;case 4:o=py;break;default:o=bm}i=o.bind(null,t,i,e),o=void 0,!rc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,i,{capture:!0,passive:o}):e.addEventListener(t,i,!0):o!==void 0?e.addEventListener(t,i,{passive:o}):e.addEventListener(t,i,!1)}function Il(e,t,i,n,o){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var c=n.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(s===4)for(s=n.return;s!==null;){var m=s.tag;if((m===3||m===4)&&(m=s.stateNode.containerInfo,m===o||m.nodeType===8&&m.parentNode===o))return;s=s.return}for(;c!==null;){if(s=Yi(c),s===null)return;if(m=s.tag,m===5||m===6){n=a=s;continue e}c=c.parentNode}}n=n.return}ug(function(){var p=a,u=xm(i),h=[];e:{var f=_g.get(e);if(f!==void 0){var g=jm,w=e;switch(e){case"keypress":if(La(i)===0)break e;case"keydown":case"keyup":g=zy;break;case"focusin":w="focus",g=zl;break;case"focusout":w="blur",g=zl;break;case"beforeblur":case"afterblur":g=zl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=My;break;case Dg:case Vg:case Ng:g=yy;break;case Og:g=Ly;break;case"scroll":g=hy;break;case"wheel":g=Iy;break;case"copy":case"cut":case"paste":g=vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=op}var b=(t&4)!==0,C=!b&&e==="scroll",v=b?f!==null?f+"Capture":null:f;b=[];for(var x=p,y;x!==null;){y=x;var $=y.stateNode;if(y.tag===5&&$!==null&&(y=$,v!==null&&($=no(x,v),$!=null&&b.push(mo(x,$,y)))),C)break;x=x.return}0<b.length&&(f=new g(f,w,null,i,u),h.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&i!==ic&&(w=i.relatedTarget||i.fromElement)&&(Yi(w)||w[Xt]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(w=i.relatedTarget||i.toElement,g=p,w=w?Yi(w):null,w!==null&&(C=hn(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=p),g!==w)){if(b=np,$="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(b=op,$="onPointerLeave",v="onPointerEnter",x="pointer"),C=g==null?f:Pn(g),y=w==null?f:Pn(w),f=new b($,x+"leave",g,i,u),f.target=C,f.relatedTarget=y,$=null,Yi(u)===p&&(b=new b(v,x+"enter",w,i,u),b.target=y,b.relatedTarget=C,$=b),C=$,g&&w)t:{for(b=g,v=w,x=0,y=b;y;y=wn(y))x++;for(y=0,$=v;$;$=wn($))y++;for(;0<x-y;)b=wn(b),x--;for(;0<y-x;)v=wn(v),y--;for(;x--;){if(b===v||v!==null&&b===v.alternate)break t;b=wn(b),v=wn(v)}b=null}else b=null;g!==null&&gp(h,f,g,b,!1),w!==null&&C!==null&&gp(h,C,w,b,!0)}}e:{if(f=p?Pn(p):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var z=Ny;else if(lp(f))if(Ig)z=Uy;else{z=_y;var T=Oy}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(z=Hy);if(z&&(z=z(e,p))){Eg(h,z,i,u);break e}T&&T(e,f,p),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&qd(f,"number",f.value)}switch(T=p?Pn(p):window,e){case"focusin":(lp(T)||T.contentEditable==="true")&&(zn=T,dc=p,_r=null);break;case"focusout":_r=dc=zn=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,hp(h,i,u);break;case"selectionchange":if(Qy)break;case"keydown":case"keyup":hp(h,i,u)}var S;if(Sm)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Cn?Ag(e,i)&&(P="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(P="onCompositionStart");P&&(Mg&&i.locale!=="ko"&&(Cn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Cn&&(S=Pg()):(fi=u,km="value"in fi?fi.value:fi.textContent,Cn=!0)),T=ns(p,P),0<T.length&&(P=new rp(P,e,null,i,u),h.push({event:P,listeners:T}),S?P.data=S:(S=Lg(i),S!==null&&(P.data=S)))),(S=By?Fy(e,i):Wy(e,i))&&(p=ns(p,"onBeforeInput"),0<p.length&&(u=new rp("onBeforeInput","beforeinput",null,i,u),h.push({event:u,listeners:p}),u.data=S))}Hg(h,t)})}function mo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function ns(e,t){for(var i=t+"Capture",n=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=no(e,i),a!=null&&n.unshift(mo(e,a,o)),a=no(e,t),a!=null&&n.push(mo(e,a,o))),e=e.return}return n}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gp(e,t,i,n,o){for(var a=t._reactName,s=[];i!==null&&i!==n;){var c=i,m=c.alternate,p=c.stateNode;if(m!==null&&m===n)break;c.tag===5&&p!==null&&(c=p,o?(m=no(i,a),m!=null&&s.unshift(mo(i,m,c))):o||(m=no(i,a),m!=null&&s.push(mo(i,m,c)))),i=i.return}s.length!==0&&e.push({event:t,listeners:s})}var Xy=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function xp(e){return(typeof e=="string"?e:""+e).replace(Xy,`
`).replace(Jy,"")}function ta(e,t,i){if(t=xp(t),xp(e)!==t&&i)throw Error(M(425))}function rs(){}var mc=null,pc=null;function hc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,ew=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,tw=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(e){return yp.resolve(null).then(e).catch(iw)}:uc;function iw(e){setTimeout(function(){throw e})}function Rl(e,t){var i=t,n=0;do{var o=i.nextSibling;if(e.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"){if(n===0){e.removeChild(o),ao(t);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=o}while(i);ao(t)}function ki(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),Lt="__reactFiber$"+pr,po="__reactProps$"+pr,Xt="__reactContainer$"+pr,fc="__reactEvents$"+pr,nw="__reactListeners$"+pr,rw="__reactHandles$"+pr;function Yi(e){var t=e[Lt];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Xt]||i[Lt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=wp(e);e!==null;){if(i=e[Lt])return i;e=wp(e)}return t}e=i,i=e.parentNode}return null}function Ao(e){return e=e[Lt]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Os(e){return e[po]||null}var gc=[],Mn=-1;function Ri(e){return{current:e}}function ie(e){0>Mn||(e.current=gc[Mn],gc[Mn]=null,Mn--)}function J(e,t){Mn++,gc[Mn]=e.current,e.current=t}var Ai={},Le=Ri(Ai),_e=Ri(!1),an=Ai;function Gn(e,t){var i=e.type.contextTypes;if(!i)return Ai;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in i)o[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function os(){ie(_e),ie(Le)}function vp(e,t,i){if(Le.current!==Ai)throw Error(M(168));J(Le,t),J(_e,i)}function Zg(e,t,i){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(M(108,O5(e)||"Unknown",o));return de({},i,n)}function as(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ai,an=Le.current,J(Le,e),J(_e,_e.current),!0}function bp(e,t,i){var n=e.stateNode;if(!n)throw Error(M(169));i?(e=Zg(e,t,an),n.__reactInternalMemoizedMergedChildContext=e,ie(_e),ie(Le),J(Le,e)):ie(_e),J(_e,i)}var Ot=null,_s=!1,Bl=!1;function Yg(e){Ot===null?Ot=[e]:Ot.push(e)}function ow(e){_s=!0,Yg(e)}function Bi(){if(!Bl&&Ot!==null){Bl=!0;var e=0,t=q;try{var i=Ot;for(q=1;e<i.length;e++){var n=i[e];do n=n(!0);while(n!==null)}Ot=null,_s=!1}catch(o){throw Ot!==null&&(Ot=Ot.slice(e+1)),yg(ym,Bi),o}finally{q=t,Bl=!1}}return null}var An=[],Ln=0,ss=null,ls=0,ot=[],at=0,sn=null,Ht=1,Ut="";function Oi(e,t){An[Ln++]=ls,An[Ln++]=ss,ss=e,ls=t}function Qg(e,t,i){ot[at++]=Ht,ot[at++]=Ut,ot[at++]=sn,sn=e;var n=Ht;e=Ut;var o=32-vt(n)-1;n&=~(1<<o),i+=1;var a=32-vt(t)+o;if(30<a){var s=o-o%5;a=(n&(1<<s)-1).toString(32),n>>=s,o-=s,Ht=1<<32-vt(t)+o|i<<o|n,Ut=a+e}else Ht=1<<a|i<<o|n,Ut=e}function zm(e){e.return!==null&&(Oi(e,1),Qg(e,1,0))}function Tm(e){for(;e===ss;)ss=An[--Ln],An[Ln]=null,ls=An[--Ln],An[Ln]=null;for(;e===sn;)sn=ot[--at],ot[at]=null,Ut=ot[--at],ot[at]=null,Ht=ot[--at],ot[at]=null}var Xe=null,qe=null,re=!1,yt=null;function Gg(e,t){var i=st(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function kp(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,qe=ki(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=sn!==null?{id:Ht,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=st(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Xe=e,qe=null,!0):!1;default:return!1}}function xc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yc(e){if(re){var t=qe;if(t){var i=t;if(!kp(e,t)){if(xc(e))throw Error(M(418));t=ki(i.nextSibling);var n=Xe;t&&kp(e,t)?Gg(n,i):(e.flags=e.flags&-4097|2,re=!1,Xe=e)}}else{if(xc(e))throw Error(M(418));e.flags=e.flags&-4097|2,re=!1,Xe=e}}}function jp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function ia(e){if(e!==Xe)return!1;if(!re)return jp(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hc(e.type,e.memoizedProps)),t&&(t=qe)){if(xc(e))throw Kg(),Error(M(418));for(;t;)Gg(e,t),t=ki(t.nextSibling)}if(jp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){qe=ki(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Xe?ki(e.stateNode.nextSibling):null;return!0}function Kg(){for(var e=qe;e;)e=ki(e.nextSibling)}function Kn(){qe=Xe=null,re=!1}function Pm(e){yt===null?yt=[e]:yt.push(e)}var aw=ii.ReactCurrentBatchConfig;function br(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(M(309));var n=i.stateNode}if(!n)throw Error(M(147,e));var o=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var c=o.refs;s===null?delete c[a]:c[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(M(284));if(!i._owner)throw Error(M(290,e))}return e}function na(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $p(e){var t=e._init;return t(e._payload)}function qg(e){function t(v,x){if(e){var y=v.deletions;y===null?(v.deletions=[x],v.flags|=16):y.push(x)}}function i(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function n(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function o(v,x){return v=Ci(v,x),v.index=0,v.sibling=null,v}function a(v,x,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<x?(v.flags|=2,x):y):(v.flags|=2,x)):(v.flags|=1048576,x)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function c(v,x,y,$){return x===null||x.tag!==6?(x=_l(y,v.mode,$),x.return=v,x):(x=o(x,y),x.return=v,x)}function m(v,x,y,$){var z=y.type;return z===Sn?u(v,x,y.props.children,$,y.key):x!==null&&(x.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===di&&$p(z)===x.type)?($=o(x,y.props),$.ref=br(v,x,y),$.return=v,$):($=Da(y.type,y.key,y.props,null,v.mode,$),$.ref=br(v,x,y),$.return=v,$)}function p(v,x,y,$){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Hl(y,v.mode,$),x.return=v,x):(x=o(x,y.children||[]),x.return=v,x)}function u(v,x,y,$,z){return x===null||x.tag!==7?(x=tn(y,v.mode,$,z),x.return=v,x):(x=o(x,y),x.return=v,x)}function h(v,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=_l(""+x,v.mode,y),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zo:return y=Da(x.type,x.key,x.props,null,v.mode,y),y.ref=br(v,null,x),y.return=v,y;case $n:return x=Hl(x,v.mode,y),x.return=v,x;case di:var $=x._init;return h(v,$(x._payload),y)}if(Er(x)||gr(x))return x=tn(x,v.mode,y,null),x.return=v,x;na(v,x)}return null}function f(v,x,y,$){var z=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return z!==null?null:c(v,x,""+y,$);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zo:return y.key===z?m(v,x,y,$):null;case $n:return y.key===z?p(v,x,y,$):null;case di:return z=y._init,f(v,x,z(y._payload),$)}if(Er(y)||gr(y))return z!==null?null:u(v,x,y,$,null);na(v,y)}return null}function g(v,x,y,$,z){if(typeof $=="string"&&$!==""||typeof $=="number")return v=v.get(y)||null,c(x,v,""+$,z);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Zo:return v=v.get($.key===null?y:$.key)||null,m(x,v,$,z);case $n:return v=v.get($.key===null?y:$.key)||null,p(x,v,$,z);case di:var T=$._init;return g(v,x,y,T($._payload),z)}if(Er($)||gr($))return v=v.get(y)||null,u(x,v,$,z,null);na(x,$)}return null}function w(v,x,y,$){for(var z=null,T=null,S=x,P=x=0,E=null;S!==null&&P<y.length;P++){S.index>P?(E=S,S=null):E=S.sibling;var L=f(v,S,y[P],$);if(L===null){S===null&&(S=E);break}e&&S&&L.alternate===null&&t(v,S),x=a(L,x,P),T===null?z=L:T.sibling=L,T=L,S=E}if(P===y.length)return i(v,S),re&&Oi(v,P),z;if(S===null){for(;P<y.length;P++)S=h(v,y[P],$),S!==null&&(x=a(S,x,P),T===null?z=S:T.sibling=S,T=S);return re&&Oi(v,P),z}for(S=n(v,S);P<y.length;P++)E=g(S,v,P,y[P],$),E!==null&&(e&&E.alternate!==null&&S.delete(E.key===null?P:E.key),x=a(E,x,P),T===null?z=E:T.sibling=E,T=E);return e&&S.forEach(function(V){return t(v,V)}),re&&Oi(v,P),z}function b(v,x,y,$){var z=gr(y);if(typeof z!="function")throw Error(M(150));if(y=z.call(y),y==null)throw Error(M(151));for(var T=z=null,S=x,P=x=0,E=null,L=y.next();S!==null&&!L.done;P++,L=y.next()){S.index>P?(E=S,S=null):E=S.sibling;var V=f(v,S,L.value,$);if(V===null){S===null&&(S=E);break}e&&S&&V.alternate===null&&t(v,S),x=a(V,x,P),T===null?z=V:T.sibling=V,T=V,S=E}if(L.done)return i(v,S),re&&Oi(v,P),z;if(S===null){for(;!L.done;P++,L=y.next())L=h(v,L.value,$),L!==null&&(x=a(L,x,P),T===null?z=L:T.sibling=L,T=L);return re&&Oi(v,P),z}for(S=n(v,S);!L.done;P++,L=y.next())L=g(S,v,P,L.value,$),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?P:L.key),x=a(L,x,P),T===null?z=L:T.sibling=L,T=L);return e&&S.forEach(function(Q){return t(v,Q)}),re&&Oi(v,P),z}function C(v,x,y,$){if(typeof y=="object"&&y!==null&&y.type===Sn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Zo:e:{for(var z=y.key,T=x;T!==null;){if(T.key===z){if(z=y.type,z===Sn){if(T.tag===7){i(v,T.sibling),x=o(T,y.props.children),x.return=v,v=x;break e}}else if(T.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===di&&$p(z)===T.type){i(v,T.sibling),x=o(T,y.props),x.ref=br(v,T,y),x.return=v,v=x;break e}i(v,T);break}else t(v,T);T=T.sibling}y.type===Sn?(x=tn(y.props.children,v.mode,$,y.key),x.return=v,v=x):($=Da(y.type,y.key,y.props,null,v.mode,$),$.ref=br(v,x,y),$.return=v,v=$)}return s(v);case $n:e:{for(T=y.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){i(v,x.sibling),x=o(x,y.children||[]),x.return=v,v=x;break e}else{i(v,x);break}else t(v,x);x=x.sibling}x=Hl(y,v.mode,$),x.return=v,v=x}return s(v);case di:return T=y._init,C(v,x,T(y._payload),$)}if(Er(y))return w(v,x,y,$);if(gr(y))return b(v,x,y,$);na(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(i(v,x.sibling),x=o(x,y),x.return=v,v=x):(i(v,x),x=_l(y,v.mode,$),x.return=v,v=x),s(v)):i(v,x)}return C}var qn=qg(!0),Xg=qg(!1),ds=Ri(null),cs=null,En=null,Mm=null;function Am(){Mm=En=cs=null}function Lm(e){var t=ds.current;ie(ds),e._currentValue=t}function wc(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function Zn(e,t){cs=e,Mm=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Mm!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(cs===null)throw Error(M(308));En=e,cs.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var Qi=null;function Em(e){Qi===null?Qi=[e]:Qi.push(e)}function Jg(e,t,i,n){var o=t.interleaved;return o===null?(i.next=i,Em(t)):(i.next=o.next,o.next=i),t.interleaved=i,Jt(e,n)}function Jt(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var ci=!1;function Im(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ex(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ji(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,Z&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Jt(e,i)}return o=n.interleaved,o===null?(t.next=t,Em(n)):(t.next=o.next,o.next=t),n.interleaved=t,Jt(e,i)}function Ea(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,wm(e,i)}}function Sp(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var o=null,a=null;if(i=i.firstBaseUpdate,i!==null){do{var s={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};a===null?o=a=s:a=a.next=s,i=i.next}while(i!==null);a===null?o=a=t:a=a.next=t}else o=a=t;i={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function ms(e,t,i,n){var o=e.updateQueue;ci=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var m=c,p=m.next;m.next=null,s===null?a=p:s.next=p,s=m;var u=e.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==s&&(c===null?u.firstBaseUpdate=p:c.next=p,u.lastBaseUpdate=m))}if(a!==null){var h=o.baseState;s=0,u=p=m=null,c=a;do{var f=c.lane,g=c.eventTime;if((n&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var w=e,b=c;switch(f=t,g=i,b.tag){case 1:if(w=b.payload,typeof w=="function"){h=w.call(g,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,f=typeof w=="function"?w.call(g,h,f):w,f==null)break e;h=de({},h,f);break e;case 2:ci=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[c]:f.push(c))}else g={eventTime:g,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(p=u=g,m=h):u=u.next=g,s|=f;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;f=c,c=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(u===null&&(m=h),o.baseState=m,o.firstBaseUpdate=p,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);dn|=s,e.lanes=s,e.memoizedState=h}}function Cp(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=i,typeof o!="function")throw Error(M(191,o));o.call(n)}}}var Lo={},It=Ri(Lo),ho=Ri(Lo),uo=Ri(Lo);function Gi(e){if(e===Lo)throw Error(M(174));return e}function Rm(e,t){switch(J(uo,t),J(ho,e),J(It,Lo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jd(t,e)}ie(It),J(It,t)}function Xn(){ie(It),ie(ho),ie(uo)}function tx(e){Gi(uo.current);var t=Gi(It.current),i=Jd(t,e.type);t!==i&&(J(ho,e),J(It,i))}function Bm(e){ho.current===e&&(ie(It),ie(ho))}var oe=Ri(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function Fm(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Ia=ii.ReactCurrentDispatcher,Wl=ii.ReactCurrentBatchConfig,ln=0,le=null,we=null,ke=null,hs=!1,Hr=!1,fo=0,sw=0;function Pe(){throw Error(M(321))}function Wm(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!jt(e[i],t[i]))return!1;return!0}function Dm(e,t,i,n,o,a){if(ln=a,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ia.current=e===null||e.memoizedState===null?mw:pw,e=i(n,o),Hr){a=0;do{if(Hr=!1,fo=0,25<=a)throw Error(M(301));a+=1,ke=we=null,t.updateQueue=null,Ia.current=hw,e=i(n,o)}while(Hr)}if(Ia.current=us,t=we!==null&&we.next!==null,ln=0,ke=we=le=null,hs=!1,t)throw Error(M(300));return e}function Vm(){var e=fo!==0;return fo=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?le.memoizedState=ke=e:ke=ke.next=e,ke}function ct(){if(we===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=ke===null?le.memoizedState:ke.next;if(t!==null)ke=t,we=e;else{if(e===null)throw Error(M(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},ke===null?le.memoizedState=ke=e:ke=ke.next=e}return ke}function go(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=ct(),i=t.queue;if(i===null)throw Error(M(311));i.lastRenderedReducer=e;var n=we,o=n.baseQueue,a=i.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}n.baseQueue=o=a,i.pending=null}if(o!==null){a=o.next,n=n.baseState;var c=s=null,m=null,p=a;do{var u=p.lane;if((ln&u)===u)m!==null&&(m=m.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),n=p.hasEagerState?p.eagerState:e(n,p.action);else{var h={lane:u,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};m===null?(c=m=h,s=n):m=m.next=h,le.lanes|=u,dn|=u}p=p.next}while(p!==null&&p!==a);m===null?s=n:m.next=c,jt(n,t.memoizedState)||(Ne=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=m,i.lastRenderedState=n}if(e=i.interleaved,e!==null){o=e;do a=o.lane,le.lanes|=a,dn|=a,o=o.next;while(o!==e)}else o===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Vl(e){var t=ct(),i=t.queue;if(i===null)throw Error(M(311));i.lastRenderedReducer=e;var n=i.dispatch,o=i.pending,a=t.memoizedState;if(o!==null){i.pending=null;var s=o=o.next;do a=e(a,s.action),s=s.next;while(s!==o);jt(a,t.memoizedState)||(Ne=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),i.lastRenderedState=a}return[a,n]}function ix(){}function nx(e,t){var i=le,n=ct(),o=t(),a=!jt(n.memoizedState,o);if(a&&(n.memoizedState=o,Ne=!0),n=n.queue,Nm(ax.bind(null,i,n,e),[e]),n.getSnapshot!==t||a||ke!==null&&ke.memoizedState.tag&1){if(i.flags|=2048,xo(9,ox.bind(null,i,n,o,t),void 0,null),je===null)throw Error(M(349));ln&30||rx(i,t,o)}return o}function rx(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function ox(e,t,i,n){t.value=i,t.getSnapshot=n,sx(t)&&lx(e)}function ax(e,t,i){return i(function(){sx(t)&&lx(e)})}function sx(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!jt(e,i)}catch{return!0}}function lx(e){var t=Jt(e,1);t!==null&&bt(t,e,1,-1)}function zp(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},t.queue=e,e=e.dispatch=cw.bind(null,le,e),[t.memoizedState,e]}function xo(e,t,i,n){return e={tag:e,create:t,destroy:i,deps:n,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e)),e}function dx(){return ct().memoizedState}function Ra(e,t,i,n){var o=At();le.flags|=e,o.memoizedState=xo(1|t,i,void 0,n===void 0?null:n)}function Hs(e,t,i,n){var o=ct();n=n===void 0?null:n;var a=void 0;if(we!==null){var s=we.memoizedState;if(a=s.destroy,n!==null&&Wm(n,s.deps)){o.memoizedState=xo(t,i,a,n);return}}le.flags|=e,o.memoizedState=xo(1|t,i,a,n)}function Tp(e,t){return Ra(8390656,8,e,t)}function Nm(e,t){return Hs(2048,8,e,t)}function cx(e,t){return Hs(4,2,e,t)}function mx(e,t){return Hs(4,4,e,t)}function px(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hx(e,t,i){return i=i!=null?i.concat([e]):null,Hs(4,4,px.bind(null,t,e),i)}function Om(){}function ux(e,t){var i=ct();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&Wm(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function fx(e,t){var i=ct();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&Wm(t,n[1])?n[0]:(e=e(),i.memoizedState=[e,t],e)}function gx(e,t,i){return ln&21?(jt(i,t)||(i=bg(),le.lanes|=i,dn|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=i)}function lw(e,t){var i=q;q=i!==0&&4>i?i:4,e(!0);var n=Wl.transition;Wl.transition={};try{e(!1),t()}finally{q=i,Wl.transition=n}}function xx(){return ct().memoizedState}function dw(e,t,i){var n=Si(e);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},yx(e))wx(t,i);else if(i=Jg(e,t,i,n),i!==null){var o=Re();bt(i,e,n,o),vx(i,t,n)}}function cw(e,t,i){var n=Si(e),o={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(yx(e))wx(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,c=a(s,i);if(o.hasEagerState=!0,o.eagerState=c,jt(c,s)){var m=t.interleaved;m===null?(o.next=o,Em(t)):(o.next=m.next,m.next=o),t.interleaved=o;return}}catch{}finally{}i=Jg(e,t,o,n),i!==null&&(o=Re(),bt(i,e,n,o),vx(i,t,n))}}function yx(e){var t=e.alternate;return e===le||t!==null&&t===le}function wx(e,t){Hr=hs=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function vx(e,t,i){if(i&4194240){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,wm(e,i)}}var us={readContext:dt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},mw={readContext:dt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Tp,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,Ra(4194308,4,px.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ra(4,2,e,t)},useMemo:function(e,t){var i=At();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var n=At();return t=i!==void 0?i(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=dw.bind(null,le,e),[n.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:zp,useDebugValue:Om,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=zp(!1),t=e[0];return e=lw.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var n=le,o=At();if(re){if(i===void 0)throw Error(M(407));i=i()}else{if(i=t(),je===null)throw Error(M(349));ln&30||rx(n,t,i)}o.memoizedState=i;var a={value:i,getSnapshot:t};return o.queue=a,Tp(ax.bind(null,n,a,e),[e]),n.flags|=2048,xo(9,ox.bind(null,n,a,i,t),void 0,null),i},useId:function(){var e=At(),t=je.identifierPrefix;if(re){var i=Ut,n=Ht;i=(n&~(1<<32-vt(n)-1)).toString(32)+i,t=":"+t+"R"+i,i=fo++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=sw++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pw={readContext:dt,useCallback:ux,useContext:dt,useEffect:Nm,useImperativeHandle:hx,useInsertionEffect:cx,useLayoutEffect:mx,useMemo:fx,useReducer:Dl,useRef:dx,useState:function(){return Dl(go)},useDebugValue:Om,useDeferredValue:function(e){var t=ct();return gx(t,we.memoizedState,e)},useTransition:function(){var e=Dl(go)[0],t=ct().memoizedState;return[e,t]},useMutableSource:ix,useSyncExternalStore:nx,useId:xx,unstable_isNewReconciler:!1},hw={readContext:dt,useCallback:ux,useContext:dt,useEffect:Nm,useImperativeHandle:hx,useInsertionEffect:cx,useLayoutEffect:mx,useMemo:fx,useReducer:Vl,useRef:dx,useState:function(){return Vl(go)},useDebugValue:Om,useDeferredValue:function(e){var t=ct();return we===null?t.memoizedState=e:gx(t,we.memoizedState,e)},useTransition:function(){var e=Vl(go)[0],t=ct().memoizedState;return[e,t]},useMutableSource:ix,useSyncExternalStore:nx,useId:xx,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function vc(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:de({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Us={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var n=Re(),o=Si(e),a=Yt(n,o);a.payload=t,i!=null&&(a.callback=i),t=ji(e,a,o),t!==null&&(bt(t,e,o,n),Ea(t,e,o))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=Re(),o=Si(e),a=Yt(n,o);a.tag=1,a.payload=t,i!=null&&(a.callback=i),t=ji(e,a,o),t!==null&&(bt(t,e,o,n),Ea(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Re(),n=Si(e),o=Yt(i,n);o.tag=2,t!=null&&(o.callback=t),t=ji(e,o,n),t!==null&&(bt(t,e,n,i),Ea(t,e,n))}};function Pp(e,t,i,n,o,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,s):t.prototype&&t.prototype.isPureReactComponent?!lo(i,n)||!lo(o,a):!0}function bx(e,t,i){var n=!1,o=Ai,a=t.contextType;return typeof a=="object"&&a!==null?a=dt(a):(o=He(t)?an:Le.current,n=t.contextTypes,a=(n=n!=null)?Gn(e,o):Ai),t=new t(i,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Us,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Mp(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function bc(e,t,i,n){var o=e.stateNode;o.props=i,o.state=e.memoizedState,o.refs={},Im(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=dt(a):(a=He(t)?an:Le.current,o.context=Gn(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(vc(e,t,a,i),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Us.enqueueReplaceState(o,o.state,null),ms(e,i,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var i="",n=t;do i+=N5(n),n=n.return;while(n);var o=i}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Nl(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function kc(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var uw=typeof WeakMap=="function"?WeakMap:Map;function kx(e,t,i){i=Yt(-1,i),i.tag=3,i.payload={element:null};var n=t.value;return i.callback=function(){gs||(gs=!0,Lc=n),kc(e,t)},i}function jx(e,t,i){i=Yt(-1,i),i.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;i.payload=function(){return n(o)},i.callback=function(){kc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(i.callback=function(){kc(e,t),typeof n!="function"&&($i===null?$i=new Set([this]):$i.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),i}function Ap(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new uw;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(i)||(o.add(i),e=Tw.bind(null,e,t,i),t.then(e,e))}function Lp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ep(e,t,i,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Yt(-1,1),t.tag=2,ji(i,t,1))),i.lanes|=1),e)}var fw=ii.ReactCurrentOwner,Ne=!1;function Ie(e,t,i,n){t.child=e===null?Xg(t,null,i,n):qn(t,e.child,i,n)}function Ip(e,t,i,n,o){i=i.render;var a=t.ref;return Zn(t,o),n=Dm(e,t,i,n,a,o),i=Vm(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ei(e,t,o)):(re&&i&&zm(t),t.flags|=1,Ie(e,t,n,o),t.child)}function Rp(e,t,i,n,o){if(e===null){var a=i.type;return typeof a=="function"&&!Km(a)&&a.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=a,$x(e,t,a,n,o)):(e=Da(i.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var s=a.memoizedProps;if(i=i.compare,i=i!==null?i:lo,i(s,n)&&e.ref===t.ref)return ei(e,t,o)}return t.flags|=1,e=Ci(a,n),e.ref=t.ref,e.return=t,t.child=e}function $x(e,t,i,n,o){if(e!==null){var a=e.memoizedProps;if(lo(a,n)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=n=a,(e.lanes&o)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,ei(e,t,o)}return jc(e,t,i,n,o)}function Sx(e,t,i){var n=t.pendingProps,o=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Rn,Ke),Ke|=i;else{if(!(i&1073741824))return e=a!==null?a.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Rn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:i,J(Rn,Ke),Ke|=n}else a!==null?(n=a.baseLanes|i,t.memoizedState=null):n=i,J(Rn,Ke),Ke|=n;return Ie(e,t,o,i),t.child}function Cx(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function jc(e,t,i,n,o){var a=He(i)?an:Le.current;return a=Gn(t,a),Zn(t,o),i=Dm(e,t,i,n,a,o),n=Vm(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ei(e,t,o)):(re&&n&&zm(t),t.flags|=1,Ie(e,t,i,o),t.child)}function Bp(e,t,i,n,o){if(He(i)){var a=!0;as(t)}else a=!1;if(Zn(t,o),t.stateNode===null)Ba(e,t),bx(t,i,n),bc(t,i,n,o),n=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var m=s.context,p=i.contextType;typeof p=="object"&&p!==null?p=dt(p):(p=He(i)?an:Le.current,p=Gn(t,p));var u=i.getDerivedStateFromProps,h=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==n||m!==p)&&Mp(t,s,n,p),ci=!1;var f=t.memoizedState;s.state=f,ms(t,n,s,o),m=t.memoizedState,c!==n||f!==m||_e.current||ci?(typeof u=="function"&&(vc(t,i,u,n),m=t.memoizedState),(c=ci||Pp(t,i,c,n,f,m,p))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=m),s.props=n,s.state=m,s.context=p,n=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,ex(e,t),c=t.memoizedProps,p=t.type===t.elementType?c:ft(t.type,c),s.props=p,h=t.pendingProps,f=s.context,m=i.contextType,typeof m=="object"&&m!==null?m=dt(m):(m=He(i)?an:Le.current,m=Gn(t,m));var g=i.getDerivedStateFromProps;(u=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==h||f!==m)&&Mp(t,s,n,m),ci=!1,f=t.memoizedState,s.state=f,ms(t,n,s,o);var w=t.memoizedState;c!==h||f!==w||_e.current||ci?(typeof g=="function"&&(vc(t,i,g,n),w=t.memoizedState),(p=ci||Pp(t,i,p,n,f,w,m)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,w,m),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,w,m)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),s.props=n,s.state=w,s.context=m,n=p):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return $c(e,t,i,n,a,o)}function $c(e,t,i,n,o,a){Cx(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return o&&bp(t,i,!1),ei(e,t,a);n=t.stateNode,fw.current=t;var c=s&&typeof i.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=qn(t,e.child,null,a),t.child=qn(t,null,c,a)):Ie(e,t,c,a),t.memoizedState=n.state,o&&bp(t,i,!0),t.child}function zx(e){var t=e.stateNode;t.pendingContext?vp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vp(e,t.context,!1),Rm(e,t.containerInfo)}function Fp(e,t,i,n,o){return Kn(),Pm(o),t.flags|=256,Ie(e,t,i,n),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0};function Cc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tx(e,t,i){var n=t.pendingProps,o=oe.current,a=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(oe,o&1),e===null)return yc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,a?(n=t.mode,a=t.child,s={mode:"hidden",children:s},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Qs(s,n,0,null),e=tn(e,n,i,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Cc(i),t.memoizedState=Sc,e):_m(t,s));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return gw(e,t,s,n,c,o,i);if(a){a=n.fallback,s=t.mode,o=e.child,c=o.sibling;var m={mode:"hidden",children:n.children};return!(s&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=m,t.deletions=null):(n=Ci(o,m),n.subtreeFlags=o.subtreeFlags&14680064),c!==null?a=Ci(c,a):(a=tn(a,s,i,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,s=e.child.memoizedState,s=s===null?Cc(i):{baseLanes:s.baseLanes|i,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~i,t.memoizedState=Sc,n}return a=e.child,e=a.sibling,n=Ci(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=i),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n}function _m(e,t){return t=Qs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ra(e,t,i,n){return n!==null&&Pm(n),qn(t,e.child,null,i),e=_m(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gw(e,t,i,n,o,a,s){if(i)return t.flags&256?(t.flags&=-257,n=Nl(Error(M(422))),ra(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,o=t.mode,n=Qs({mode:"visible",children:n.children},o,0,null),a=tn(a,o,s,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&qn(t,e.child,null,s),t.child.memoizedState=Cc(s),t.memoizedState=Sc,a);if(!(t.mode&1))return ra(e,t,s,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var c=n.dgst;return n=c,a=Error(M(419)),n=Nl(a,n,void 0),ra(e,t,s,n)}if(c=(s&e.childLanes)!==0,Ne||c){if(n=je,n!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Jt(e,o),bt(n,e,o,-1))}return Gm(),n=Nl(Error(M(421))),ra(e,t,s,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Pw.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,qe=ki(o.nextSibling),Xe=t,re=!0,yt=null,e!==null&&(ot[at++]=Ht,ot[at++]=Ut,ot[at++]=sn,Ht=e.id,Ut=e.overflow,sn=t),t=_m(t,n.children),t.flags|=4096,t)}function Wp(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),wc(e.return,t,i)}function Ol(e,t,i,n,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=i,a.tailMode=o)}function Px(e,t,i){var n=t.pendingProps,o=n.revealOrder,a=n.tail;if(Ie(e,t,n.children,i),n=oe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wp(e,i,t);else if(e.tag===19)Wp(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(J(oe,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(i=t.child,o=null;i!==null;)e=i.alternate,e!==null&&ps(e)===null&&(o=i),i=i.sibling;i=o,i===null?(o=t.child,t.child=null):(o=i.sibling,i.sibling=null),Ol(t,!1,o,i,a);break;case"backwards":for(i=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ps(e)===null){t.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}Ol(t,!0,i,null,a);break;case"together":Ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ba(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ei(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,i=Ci(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Ci(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function xw(e,t,i){switch(t.tag){case 3:zx(t),Kn();break;case 5:tx(t);break;case 1:He(t.type)&&as(t);break;case 4:Rm(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;J(ds,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(J(oe,oe.current&1),t.flags|=128,null):i&t.child.childLanes?Tx(e,t,i):(J(oe,oe.current&1),e=ei(e,t,i),e!==null?e.sibling:null);J(oe,oe.current&1);break;case 19:if(n=(i&t.childLanes)!==0,e.flags&128){if(n)return Px(e,t,i);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(oe,oe.current),n)break;return null;case 22:case 23:return t.lanes=0,Sx(e,t,i)}return ei(e,t,i)}var Mx,zc,Ax,Lx;Mx=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};zc=function(){};Ax=function(e,t,i,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Gi(It.current);var a=null;switch(i){case"input":o=Gd(e,o),n=Gd(e,n),a=[];break;case"select":o=de({},o,{value:void 0}),n=de({},n,{value:void 0}),a=[];break;case"textarea":o=Xd(e,o),n=Xd(e,n),a=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=rs)}ec(i,n);var s;i=null;for(p in o)if(!n.hasOwnProperty(p)&&o.hasOwnProperty(p)&&o[p]!=null)if(p==="style"){var c=o[p];for(s in c)c.hasOwnProperty(s)&&(i||(i={}),i[s]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(to.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in n){var m=n[p];if(c=o!=null?o[p]:void 0,n.hasOwnProperty(p)&&m!==c&&(m!=null||c!=null))if(p==="style")if(c){for(s in c)!c.hasOwnProperty(s)||m&&m.hasOwnProperty(s)||(i||(i={}),i[s]="");for(s in m)m.hasOwnProperty(s)&&c[s]!==m[s]&&(i||(i={}),i[s]=m[s])}else i||(a||(a=[]),a.push(p,i)),i=m;else p==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,c=c?c.__html:void 0,m!=null&&c!==m&&(a=a||[]).push(p,m)):p==="children"?typeof m!="string"&&typeof m!="number"||(a=a||[]).push(p,""+m):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(to.hasOwnProperty(p)?(m!=null&&p==="onScroll"&&ee("scroll",e),a||c===m||(a=[])):(a=a||[]).push(p,m))}i&&(a=a||[]).push("style",i);var p=a;(t.updateQueue=p)&&(t.flags|=4)}};Lx=function(e,t,i,n){i!==n&&(t.flags|=4)};function kr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function yw(e,t,i){var n=t.pendingProps;switch(Tm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return He(t.type)&&os(),Me(t),null;case 3:return n=t.stateNode,Xn(),ie(_e),ie(Le),Fm(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Rc(yt),yt=null))),zc(e,t),Me(t),null;case 5:Bm(t);var o=Gi(uo.current);if(i=t.type,e!==null&&t.stateNode!=null)Ax(e,t,i,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(M(166));return Me(t),null}if(e=Gi(It.current),ia(t)){n=t.stateNode,i=t.type;var a=t.memoizedProps;switch(n[Lt]=t,n[po]=a,e=(t.mode&1)!==0,i){case"dialog":ee("cancel",n),ee("close",n);break;case"iframe":case"object":case"embed":ee("load",n);break;case"video":case"audio":for(o=0;o<Rr.length;o++)ee(Rr[o],n);break;case"source":ee("error",n);break;case"img":case"image":case"link":ee("error",n),ee("load",n);break;case"details":ee("toggle",n);break;case"input":Y0(n,a),ee("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},ee("invalid",n);break;case"textarea":G0(n,a),ee("invalid",n)}ec(i,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="children"?typeof c=="string"?n.textContent!==c&&(a.suppressHydrationWarning!==!0&&ta(n.textContent,c,e),o=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&ta(n.textContent,c,e),o=["children",""+c]):to.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&ee("scroll",n)}switch(i){case"input":Yo(n),Q0(n,a,!0);break;case"textarea":Yo(n),K0(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=rs)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ag(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(i,{is:n.is}):(e=s.createElement(i),i==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,i),e[Lt]=t,e[po]=n,Mx(e,t,!1,!1),t.stateNode=e;e:{switch(s=tc(i,n),i){case"dialog":ee("cancel",e),ee("close",e),o=n;break;case"iframe":case"object":case"embed":ee("load",e),o=n;break;case"video":case"audio":for(o=0;o<Rr.length;o++)ee(Rr[o],e);o=n;break;case"source":ee("error",e),o=n;break;case"img":case"image":case"link":ee("error",e),ee("load",e),o=n;break;case"details":ee("toggle",e),o=n;break;case"input":Y0(e,n),o=Gd(e,n),ee("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=de({},n,{value:void 0}),ee("invalid",e);break;case"textarea":G0(e,n),o=Xd(e,n),ee("invalid",e);break;default:o=n}ec(i,o),c=o;for(a in c)if(c.hasOwnProperty(a)){var m=c[a];a==="style"?dg(e,m):a==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&sg(e,m)):a==="children"?typeof m=="string"?(i!=="textarea"||m!=="")&&io(e,m):typeof m=="number"&&io(e,""+m):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(to.hasOwnProperty(a)?m!=null&&a==="onScroll"&&ee("scroll",e):m!=null&&hm(e,a,m,s))}switch(i){case"input":Yo(e),Q0(e,n,!1);break;case"textarea":Yo(e),K0(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Mi(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?On(e,!!n.multiple,a,!1):n.defaultValue!=null&&On(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=rs)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)Lx(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(M(166));if(i=Gi(uo.current),Gi(It.current),ia(t)){if(n=t.stateNode,i=t.memoizedProps,n[Lt]=t,(a=n.nodeValue!==i)&&(e=Xe,e!==null))switch(e.tag){case 3:ta(n.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ta(n.nodeValue,i,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[Lt]=t,t.stateNode=n}return Me(t),null;case 13:if(ie(oe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&qe!==null&&t.mode&1&&!(t.flags&128))Kg(),Kn(),t.flags|=98560,a=!1;else if(a=ia(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(M(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(M(317));a[Lt]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),a=!1}else yt!==null&&(Rc(yt),yt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?be===0&&(be=3):Gm())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return Xn(),zc(e,t),e===null&&co(t.stateNode.containerInfo),Me(t),null;case 10:return Lm(t.type._context),Me(t),null;case 17:return He(t.type)&&os(),Me(t),null;case 19:if(ie(oe),a=t.memoizedState,a===null)return Me(t),null;if(n=(t.flags&128)!==0,s=a.rendering,s===null)if(n)kr(a,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ps(e),s!==null){for(t.flags|=128,kr(a,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=i,i=t.child;i!==null;)a=i,e=n,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return J(oe,oe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ue()>er&&(t.flags|=128,n=!0,kr(a,!1),t.lanes=4194304)}else{if(!n)if(e=ps(s),e!==null){if(t.flags|=128,n=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),kr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!re)return Me(t),null}else 2*ue()-a.renderingStartTime>er&&i!==1073741824&&(t.flags|=128,n=!0,kr(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(i=a.last,i!==null?i.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ue(),t.sibling=null,i=oe.current,J(oe,n?i&1|2:i&1),t):(Me(t),null);case 22:case 23:return Qm(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ke&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function ww(e,t){switch(Tm(t),t.tag){case 1:return He(t.type)&&os(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),ie(_e),ie(Le),Fm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bm(t),null;case 13:if(ie(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(oe),null;case 4:return Xn(),null;case 10:return Lm(t.type._context),null;case 22:case 23:return Qm(),null;case 24:return null;default:return null}}var oa=!1,Ae=!1,vw=typeof WeakSet=="function"?WeakSet:Set,I=null;function In(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){ce(e,t,n)}else i.current=null}function Tc(e,t,i){try{i()}catch(n){ce(e,t,n)}}var Dp=!1;function bw(e,t){if(mc=ts,e=Fg(),Cm(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var o=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{i.nodeType,a.nodeType}catch{i=null;break e}var s=0,c=-1,m=-1,p=0,u=0,h=e,f=null;t:for(;;){for(var g;h!==i||o!==0&&h.nodeType!==3||(c=s+o),h!==a||n!==0&&h.nodeType!==3||(m=s+n),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===e)break t;if(f===i&&++p===o&&(c=s),f===a&&++u===n&&(m=s),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}i=c===-1||m===-1?null:{start:c,end:m}}else i=null}i=i||{start:0,end:0}}else i=null;for(pc={focusedElem:e,selectionRange:i},ts=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,C=w.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?b:ft(t.type,b),C);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch($){ce(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return w=Dp,Dp=!1,w}function Ur(e,t,i){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Tc(t,i,a)}o=o.next}while(o!==n)}}function Zs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var n=i.create;i.destroy=n()}i=i.next}while(i!==t)}}function Pc(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function Ex(e){var t=e.alternate;t!==null&&(e.alternate=null,Ex(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[po],delete t[fc],delete t[nw],delete t[rw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ix(e){return e.tag===5||e.tag===3||e.tag===4}function Vp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ix(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mc(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=rs));else if(n!==4&&(e=e.child,e!==null))for(Mc(e,t,i),e=e.sibling;e!==null;)Mc(e,t,i),e=e.sibling}function Ac(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ac(e,t,i),e=e.sibling;e!==null;)Ac(e,t,i),e=e.sibling}var Se=null,gt=!1;function ri(e,t,i){for(i=i.child;i!==null;)Rx(e,t,i),i=i.sibling}function Rx(e,t,i){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ws,i)}catch{}switch(i.tag){case 5:Ae||In(i,t);case 6:var n=Se,o=gt;Se=null,ri(e,t,i),Se=n,gt=o,Se!==null&&(gt?(e=Se,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Se.removeChild(i.stateNode));break;case 18:Se!==null&&(gt?(e=Se,i=i.stateNode,e.nodeType===8?Rl(e.parentNode,i):e.nodeType===1&&Rl(e,i),ao(e)):Rl(Se,i.stateNode));break;case 4:n=Se,o=gt,Se=i.stateNode.containerInfo,gt=!0,ri(e,t,i),Se=n,gt=o;break;case 0:case 11:case 14:case 15:if(!Ae&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Tc(i,t,s),o=o.next}while(o!==n)}ri(e,t,i);break;case 1:if(!Ae&&(In(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(c){ce(i,t,c)}ri(e,t,i);break;case 21:ri(e,t,i);break;case 22:i.mode&1?(Ae=(n=Ae)||i.memoizedState!==null,ri(e,t,i),Ae=n):ri(e,t,i);break;default:ri(e,t,i)}}function Np(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new vw),t.forEach(function(n){var o=Mw.bind(null,e,n);i.has(n)||(i.add(n),n.then(o,o))})}}function ht(e,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var o=i[n];try{var a=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Se=c.stateNode,gt=!1;break e;case 3:Se=c.stateNode.containerInfo,gt=!0;break e;case 4:Se=c.stateNode.containerInfo,gt=!0;break e}c=c.return}if(Se===null)throw Error(M(160));Rx(a,s,o),Se=null,gt=!1;var m=o.alternate;m!==null&&(m.return=null),o.return=null}catch(p){ce(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bx(t,e),t=t.sibling}function Bx(e,t){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),Pt(e),n&4){try{Ur(3,e,e.return),Zs(3,e)}catch(b){ce(e,e.return,b)}try{Ur(5,e,e.return)}catch(b){ce(e,e.return,b)}}break;case 1:ht(t,e),Pt(e),n&512&&i!==null&&In(i,i.return);break;case 5:if(ht(t,e),Pt(e),n&512&&i!==null&&In(i,i.return),e.flags&32){var o=e.stateNode;try{io(o,"")}catch(b){ce(e,e.return,b)}}if(n&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,s=i!==null?i.memoizedProps:a,c=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&rg(o,a),tc(c,s);var p=tc(c,a);for(s=0;s<m.length;s+=2){var u=m[s],h=m[s+1];u==="style"?dg(o,h):u==="dangerouslySetInnerHTML"?sg(o,h):u==="children"?io(o,h):hm(o,u,h,p)}switch(c){case"input":Kd(o,a);break;case"textarea":og(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?On(o,!!a.multiple,g,!1):f!==!!a.multiple&&(a.defaultValue!=null?On(o,!!a.multiple,a.defaultValue,!0):On(o,!!a.multiple,a.multiple?[]:"",!1))}o[po]=a}catch(b){ce(e,e.return,b)}}break;case 6:if(ht(t,e),Pt(e),n&4){if(e.stateNode===null)throw Error(M(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(b){ce(e,e.return,b)}}break;case 3:if(ht(t,e),Pt(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(b){ce(e,e.return,b)}break;case 4:ht(t,e),Pt(e);break;case 13:ht(t,e),Pt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Zm=ue())),n&4&&Np(e);break;case 22:if(u=i!==null&&i.memoizedState!==null,e.mode&1?(Ae=(p=Ae)||u,ht(t,e),Ae=p):ht(t,e),Pt(e),n&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!u&&e.mode&1)for(I=e,u=e.child;u!==null;){for(h=I=u;I!==null;){switch(f=I,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ur(4,f,f.return);break;case 1:In(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){n=f,i=f.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){ce(n,i,b)}}break;case 5:In(f,f.return);break;case 22:if(f.memoizedState!==null){_p(h);continue}}g!==null?(g.return=f,I=g):_p(h)}u=u.sibling}e:for(u=null,h=e;;){if(h.tag===5){if(u===null){u=h;try{o=h.stateNode,p?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=h.stateNode,m=h.memoizedProps.style,s=m!=null&&m.hasOwnProperty("display")?m.display:null,c.style.display=lg("display",s))}catch(b){ce(e,e.return,b)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=p?"":h.memoizedProps}catch(b){ce(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ht(t,e),Pt(e),n&4&&Np(e);break;case 21:break;default:ht(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(Ix(i)){var n=i;break e}i=i.return}throw Error(M(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(io(o,""),n.flags&=-33);var a=Vp(e);Ac(e,a,o);break;case 3:case 4:var s=n.stateNode.containerInfo,c=Vp(e);Mc(e,c,s);break;default:throw Error(M(161))}}catch(m){ce(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kw(e,t,i){I=e,Fx(e)}function Fx(e,t,i){for(var n=(e.mode&1)!==0;I!==null;){var o=I,a=o.child;if(o.tag===22&&n){var s=o.memoizedState!==null||oa;if(!s){var c=o.alternate,m=c!==null&&c.memoizedState!==null||Ae;c=oa;var p=Ae;if(oa=s,(Ae=m)&&!p)for(I=o;I!==null;)s=I,m=s.child,s.tag===22&&s.memoizedState!==null?Hp(o):m!==null?(m.return=s,I=m):Hp(o);for(;a!==null;)I=a,Fx(a),a=a.sibling;I=o,oa=c,Ae=p}Op(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,I=a):Op(e)}}function Op(e){for(;I!==null;){var t=I;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||Zs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ae)if(i===null)n.componentDidMount();else{var o=t.elementType===t.type?i.memoizedProps:ft(t.type,i.memoizedProps);n.componentDidUpdate(o,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Cp(t,a,n);break;case 3:var s=t.updateQueue;if(s!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}Cp(t,s,i)}break;case 5:var c=t.stateNode;if(i===null&&t.flags&4){i=c;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&i.focus();break;case"img":m.src&&(i.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var u=p.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&ao(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ae||t.flags&512&&Pc(t)}catch(f){ce(t,t.return,f)}}if(t===e){I=null;break}if(i=t.sibling,i!==null){i.return=t.return,I=i;break}I=t.return}}function _p(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var i=t.sibling;if(i!==null){i.return=t.return,I=i;break}I=t.return}}function Hp(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Zs(4,t)}catch(m){ce(t,i,m)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(m){ce(t,o,m)}}var a=t.return;try{Pc(t)}catch(m){ce(t,a,m)}break;case 5:var s=t.return;try{Pc(t)}catch(m){ce(t,s,m)}}}catch(m){ce(t,t.return,m)}if(t===e){I=null;break}var c=t.sibling;if(c!==null){c.return=t.return,I=c;break}I=t.return}}var jw=Math.ceil,fs=ii.ReactCurrentDispatcher,Hm=ii.ReactCurrentOwner,lt=ii.ReactCurrentBatchConfig,Z=0,je=null,xe=null,ze=0,Ke=0,Rn=Ri(0),be=0,yo=null,dn=0,Ys=0,Um=0,Zr=null,Ve=null,Zm=0,er=1/0,Vt=null,gs=!1,Lc=null,$i=null,aa=!1,gi=null,xs=0,Yr=0,Ec=null,Fa=-1,Wa=0;function Re(){return Z&6?ue():Fa!==-1?Fa:Fa=ue()}function Si(e){return e.mode&1?Z&2&&ze!==0?ze&-ze:aw.transition!==null?(Wa===0&&(Wa=bg()),Wa):(e=q,e!==0||(e=window.event,e=e===void 0?16:Tg(e.type)),e):1}function bt(e,t,i,n){if(50<Yr)throw Yr=0,Ec=null,Error(M(185));Po(e,i,n),(!(Z&2)||e!==je)&&(e===je&&(!(Z&2)&&(Ys|=i),be===4&&hi(e,ze)),Ue(e,n),i===1&&Z===0&&!(t.mode&1)&&(er=ue()+500,_s&&Bi()))}function Ue(e,t){var i=e.callbackNode;ay(e,t);var n=es(e,e===je?ze:0);if(n===0)i!==null&&J0(i),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(i!=null&&J0(i),t===1)e.tag===0?ow(Up.bind(null,e)):Yg(Up.bind(null,e)),tw(function(){!(Z&6)&&Bi()}),i=null;else{switch(kg(n)){case 1:i=ym;break;case 4:i=wg;break;case 16:i=Ja;break;case 536870912:i=vg;break;default:i=Ja}i=Ux(i,Wx.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function Wx(e,t){if(Fa=-1,Wa=0,Z&6)throw Error(M(327));var i=e.callbackNode;if(Yn()&&e.callbackNode!==i)return null;var n=es(e,e===je?ze:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ys(e,n);else{t=n;var o=Z;Z|=2;var a=Vx();(je!==e||ze!==t)&&(Vt=null,er=ue()+500,en(e,t));do try{Cw();break}catch(c){Dx(e,c)}while(!0);Am(),fs.current=a,Z=o,xe!==null?t=0:(je=null,ze=0,t=be)}if(t!==0){if(t===2&&(o=ac(e),o!==0&&(n=o,t=Ic(e,o))),t===1)throw i=yo,en(e,0),hi(e,n),Ue(e,ue()),i;if(t===6)hi(e,n);else{if(o=e.current.alternate,!(n&30)&&!$w(o)&&(t=ys(e,n),t===2&&(a=ac(e),a!==0&&(n=a,t=Ic(e,a))),t===1))throw i=yo,en(e,0),hi(e,n),Ue(e,ue()),i;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(M(345));case 2:_i(e,Ve,Vt);break;case 3:if(hi(e,n),(n&130023424)===n&&(t=Zm+500-ue(),10<t)){if(es(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Re(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=uc(_i.bind(null,e,Ve,Vt),t);break}_i(e,Ve,Vt);break;case 4:if(hi(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-vt(n);a=1<<s,s=t[s],s>o&&(o=s),n&=~a}if(n=o,n=ue()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*jw(n/1960))-n,10<n){e.timeoutHandle=uc(_i.bind(null,e,Ve,Vt),n);break}_i(e,Ve,Vt);break;case 5:_i(e,Ve,Vt);break;default:throw Error(M(329))}}}return Ue(e,ue()),e.callbackNode===i?Wx.bind(null,e):null}function Ic(e,t){var i=Zr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=ys(e,t),e!==2&&(t=Ve,Ve=i,t!==null&&Rc(t)),e}function Rc(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function $w(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var o=i[n],a=o.getSnapshot;o=o.value;try{if(!jt(a(),o))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hi(e,t){for(t&=~Um,t&=~Ys,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-vt(t),n=1<<i;e[i]=-1,t&=~n}}function Up(e){if(Z&6)throw Error(M(327));Yn();var t=es(e,0);if(!(t&1))return Ue(e,ue()),null;var i=ys(e,t);if(e.tag!==0&&i===2){var n=ac(e);n!==0&&(t=n,i=Ic(e,n))}if(i===1)throw i=yo,en(e,0),hi(e,t),Ue(e,ue()),i;if(i===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_i(e,Ve,Vt),Ue(e,ue()),null}function Ym(e,t){var i=Z;Z|=1;try{return e(t)}finally{Z=i,Z===0&&(er=ue()+500,_s&&Bi())}}function cn(e){gi!==null&&gi.tag===0&&!(Z&6)&&Yn();var t=Z;Z|=1;var i=lt.transition,n=q;try{if(lt.transition=null,q=1,e)return e()}finally{q=n,lt.transition=i,Z=t,!(Z&6)&&Bi()}}function Qm(){Ke=Rn.current,ie(Rn)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,ew(i)),xe!==null)for(i=xe.return;i!==null;){var n=i;switch(Tm(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&os();break;case 3:Xn(),ie(_e),ie(Le),Fm();break;case 5:Bm(n);break;case 4:Xn();break;case 13:ie(oe);break;case 19:ie(oe);break;case 10:Lm(n.type._context);break;case 22:case 23:Qm()}i=i.return}if(je=e,xe=e=Ci(e.current,null),ze=Ke=t,be=0,yo=null,Um=Ys=dn=0,Ve=Zr=null,Qi!==null){for(t=0;t<Qi.length;t++)if(i=Qi[t],n=i.interleaved,n!==null){i.interleaved=null;var o=n.next,a=i.pending;if(a!==null){var s=a.next;a.next=o,n.next=s}i.pending=n}Qi=null}return e}function Dx(e,t){do{var i=xe;try{if(Am(),Ia.current=us,hs){for(var n=le.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}hs=!1}if(ln=0,ke=we=le=null,Hr=!1,fo=0,Hm.current=null,i===null||i.return===null){be=1,yo=t,xe=null;break}e:{var a=e,s=i.return,c=i,m=t;if(t=ze,c.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var p=m,u=c,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=Lp(s);if(g!==null){g.flags&=-257,Ep(g,s,c,a,t),g.mode&1&&Ap(a,p,t),t=g,m=p;var w=t.updateQueue;if(w===null){var b=new Set;b.add(m),t.updateQueue=b}else w.add(m);break e}else{if(!(t&1)){Ap(a,p,t),Gm();break e}m=Error(M(426))}}else if(re&&c.mode&1){var C=Lp(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ep(C,s,c,a,t),Pm(Jn(m,c));break e}}a=m=Jn(m,c),be!==4&&(be=2),Zr===null?Zr=[a]:Zr.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=kx(a,m,t);Sp(a,v);break e;case 1:c=m;var x=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&($i===null||!$i.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var $=jx(a,c,t);Sp(a,$);break e}}a=a.return}while(a!==null)}Ox(i)}catch(z){t=z,xe===i&&i!==null&&(xe=i=i.return);continue}break}while(!0)}function Vx(){var e=fs.current;return fs.current=us,e===null?us:e}function Gm(){(be===0||be===3||be===2)&&(be=4),je===null||!(dn&268435455)&&!(Ys&268435455)||hi(je,ze)}function ys(e,t){var i=Z;Z|=2;var n=Vx();(je!==e||ze!==t)&&(Vt=null,en(e,t));do try{Sw();break}catch(o){Dx(e,o)}while(!0);if(Am(),Z=i,fs.current=n,xe!==null)throw Error(M(261));return je=null,ze=0,be}function Sw(){for(;xe!==null;)Nx(xe)}function Cw(){for(;xe!==null&&!q5();)Nx(xe)}function Nx(e){var t=Hx(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Ox(e):xe=t,Hm.current=null}function Ox(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=ww(i,t),i!==null){i.flags&=32767,xe=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,xe=null;return}}else if(i=yw(i,t,Ke),i!==null){xe=i;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);be===0&&(be=5)}function _i(e,t,i){var n=q,o=lt.transition;try{lt.transition=null,q=1,zw(e,t,i,n)}finally{lt.transition=o,q=n}return null}function zw(e,t,i,n){do Yn();while(gi!==null);if(Z&6)throw Error(M(327));i=e.finishedWork;var o=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var a=i.lanes|i.childLanes;if(sy(e,a),e===je&&(xe=je=null,ze=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||aa||(aa=!0,Ux(Ja,function(){return Yn(),null})),a=(i.flags&15990)!==0,i.subtreeFlags&15990||a){a=lt.transition,lt.transition=null;var s=q;q=1;var c=Z;Z|=4,Hm.current=null,bw(e,i),Bx(i,e),Yy(pc),ts=!!mc,pc=mc=null,e.current=i,kw(i),X5(),Z=c,q=s,lt.transition=a}else e.current=i;if(aa&&(aa=!1,gi=e,xs=o),a=e.pendingLanes,a===0&&($i=null),ty(i.stateNode),Ue(e,ue()),t!==null)for(n=e.onRecoverableError,i=0;i<t.length;i++)o=t[i],n(o.value,{componentStack:o.stack,digest:o.digest});if(gs)throw gs=!1,e=Lc,Lc=null,e;return xs&1&&e.tag!==0&&Yn(),a=e.pendingLanes,a&1?e===Ec?Yr++:(Yr=0,Ec=e):Yr=0,Bi(),null}function Yn(){if(gi!==null){var e=kg(xs),t=lt.transition,i=q;try{if(lt.transition=null,q=16>e?16:e,gi===null)var n=!1;else{if(e=gi,gi=null,xs=0,Z&6)throw Error(M(331));var o=Z;for(Z|=4,I=e.current;I!==null;){var a=I,s=a.child;if(I.flags&16){var c=a.deletions;if(c!==null){for(var m=0;m<c.length;m++){var p=c[m];for(I=p;I!==null;){var u=I;switch(u.tag){case 0:case 11:case 15:Ur(8,u,a)}var h=u.child;if(h!==null)h.return=u,I=h;else for(;I!==null;){u=I;var f=u.sibling,g=u.return;if(Ex(u),u===p){I=null;break}if(f!==null){f.return=g,I=f;break}I=g}}}var w=a.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}I=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,I=s;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ur(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,I=v;break e}I=a.return}}var x=e.current;for(I=x;I!==null;){s=I;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,I=y;else e:for(s=x;I!==null;){if(c=I,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Zs(9,c)}}catch(z){ce(c,c.return,z)}if(c===s){I=null;break e}var $=c.sibling;if($!==null){$.return=c.return,I=$;break e}I=c.return}}if(Z=o,Bi(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ws,e)}catch{}n=!0}return n}finally{q=i,lt.transition=t}}return!1}function Zp(e,t,i){t=Jn(i,t),t=kx(e,t,1),e=ji(e,t,1),t=Re(),e!==null&&(Po(e,1,t),Ue(e,t))}function ce(e,t,i){if(e.tag===3)Zp(e,e,i);else for(;t!==null;){if(t.tag===3){Zp(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&($i===null||!$i.has(n))){e=Jn(i,e),e=jx(t,e,1),t=ji(t,e,1),e=Re(),t!==null&&(Po(t,1,e),Ue(t,e));break}}t=t.return}}function Tw(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&i,je===e&&(ze&i)===i&&(be===4||be===3&&(ze&130023424)===ze&&500>ue()-Zm?en(e,0):Um|=i),Ue(e,t)}function _x(e,t){t===0&&(e.mode&1?(t=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):t=1);var i=Re();e=Jt(e,t),e!==null&&(Po(e,t,i),Ue(e,i))}function Pw(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),_x(e,i)}function Mw(e,t){var i=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(M(314))}n!==null&&n.delete(t),_x(e,i)}var Hx;Hx=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Ne=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return Ne=!1,xw(e,t,i);Ne=!!(e.flags&131072)}else Ne=!1,re&&t.flags&1048576&&Qg(t,ls,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ba(e,t),e=t.pendingProps;var o=Gn(t,Le.current);Zn(t,i),o=Dm(null,t,n,e,o,i);var a=Vm();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(n)?(a=!0,as(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Im(t),o.updater=Us,t.stateNode=o,o._reactInternals=t,bc(t,n,e,i),t=$c(null,t,n,!0,a,i)):(t.tag=0,re&&a&&zm(t),Ie(null,t,o,i),t=t.child),t;case 16:n=t.elementType;e:{switch(Ba(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=Lw(n),e=ft(n,e),o){case 0:t=jc(null,t,n,e,i);break e;case 1:t=Bp(null,t,n,e,i);break e;case 11:t=Ip(null,t,n,e,i);break e;case 14:t=Rp(null,t,n,ft(n.type,e),i);break e}throw Error(M(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ft(n,o),jc(e,t,n,o,i);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ft(n,o),Bp(e,t,n,o,i);case 3:e:{if(zx(t),e===null)throw Error(M(387));n=t.pendingProps,a=t.memoizedState,o=a.element,ex(e,t),ms(t,n,null,i);var s=t.memoizedState;if(n=s.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Jn(Error(M(423)),t),t=Fp(e,t,n,i,o);break e}else if(n!==o){o=Jn(Error(M(424)),t),t=Fp(e,t,n,i,o);break e}else for(qe=ki(t.stateNode.containerInfo.firstChild),Xe=t,re=!0,yt=null,i=Xg(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Kn(),n===o){t=ei(e,t,i);break e}Ie(e,t,n,i)}t=t.child}return t;case 5:return tx(t),e===null&&yc(t),n=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,s=o.children,hc(n,o)?s=null:a!==null&&hc(n,a)&&(t.flags|=32),Cx(e,t),Ie(e,t,s,i),t.child;case 6:return e===null&&yc(t),null;case 13:return Tx(e,t,i);case 4:return Rm(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=qn(t,null,n,i):Ie(e,t,n,i),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ft(n,o),Ip(e,t,n,o,i);case 7:return Ie(e,t,t.pendingProps,i),t.child;case 8:return Ie(e,t,t.pendingProps.children,i),t.child;case 12:return Ie(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,J(ds,n._currentValue),n._currentValue=s,a!==null)if(jt(a.value,s)){if(a.children===o.children&&!_e.current){t=ei(e,t,i);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){s=a.child;for(var m=c.firstContext;m!==null;){if(m.context===n){if(a.tag===1){m=Yt(-1,i&-i),m.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var u=p.pending;u===null?m.next=m:(m.next=u.next,u.next=m),p.pending=m}}a.lanes|=i,m=a.alternate,m!==null&&(m.lanes|=i),wc(a.return,i,t),c.lanes|=i;break}m=m.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(M(341));s.lanes|=i,c=s.alternate,c!==null&&(c.lanes|=i),wc(s,i,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Ie(e,t,o.children,i),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Zn(t,i),o=dt(o),n=n(o),t.flags|=1,Ie(e,t,n,i),t.child;case 14:return n=t.type,o=ft(n,t.pendingProps),o=ft(n.type,o),Rp(e,t,n,o,i);case 15:return $x(e,t,t.type,t.pendingProps,i);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ft(n,o),Ba(e,t),t.tag=1,He(n)?(e=!0,as(t)):e=!1,Zn(t,i),bx(t,n,o),bc(t,n,o,i),$c(null,t,n,!0,e,i);case 19:return Px(e,t,i);case 22:return Sx(e,t,i)}throw Error(M(156,t.tag))};function Ux(e,t){return yg(e,t)}function Aw(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,i,n){return new Aw(e,t,i,n)}function Km(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lw(e){if(typeof e=="function")return Km(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fm)return 11;if(e===gm)return 14}return 2}function Ci(e,t){var i=e.alternate;return i===null?(i=st(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Da(e,t,i,n,o,a){var s=2;if(n=e,typeof e=="function")Km(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sn:return tn(i.children,o,a,t);case um:s=8,o|=8;break;case Ud:return e=st(12,i,t,o|2),e.elementType=Ud,e.lanes=a,e;case Zd:return e=st(13,i,t,o),e.elementType=Zd,e.lanes=a,e;case Yd:return e=st(19,i,t,o),e.elementType=Yd,e.lanes=a,e;case tg:return Qs(i,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jf:s=10;break e;case eg:s=9;break e;case fm:s=11;break e;case gm:s=14;break e;case di:s=16,n=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=st(s,i,t,o),t.elementType=e,t.type=n,t.lanes=a,t}function tn(e,t,i,n){return e=st(7,e,n,t),e.lanes=i,e}function Qs(e,t,i,n){return e=st(22,e,n,t),e.elementType=tg,e.lanes=i,e.stateNode={isHidden:!1},e}function _l(e,t,i){return e=st(6,e,null,t),e.lanes=i,e}function Hl(e,t,i){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ew(e,t,i,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qm(e,t,i,n,o,a,s,c,m){return e=new Ew(e,t,i,c,m),t===1?(t=1,a===!0&&(t|=8)):t=0,a=st(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Im(a),e}function Iw(e,t,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:n==null?null:""+n,children:e,containerInfo:t,implementation:i}}function Zx(e){if(!e)return Ai;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var i=e.type;if(He(i))return Zg(e,i,t)}return t}function Yx(e,t,i,n,o,a,s,c,m){return e=qm(i,n,!0,e,o,a,s,c,m),e.context=Zx(null),i=e.current,n=Re(),o=Si(i),a=Yt(n,o),a.callback=t??null,ji(i,a,o),e.current.lanes=o,Po(e,o,n),Ue(e,n),e}function Gs(e,t,i,n){var o=t.current,a=Re(),s=Si(o);return i=Zx(i),t.context===null?t.context=i:t.pendingContext=i,t=Yt(a,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=ji(o,t,s),e!==null&&(bt(e,o,s,a),Ea(e,o,s)),s}function ws(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Xm(e,t){Yp(e,t),(e=e.alternate)&&Yp(e,t)}function Rw(){return null}var Qx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jm(e){this._internalRoot=e}Ks.prototype.render=Jm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Gs(e,t,null,null)};Ks.prototype.unmount=Jm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){Gs(null,e,null,null)}),t[Xt]=null}};function Ks(e){this._internalRoot=e}Ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sg();e={blockedOn:null,target:e,priority:t};for(var i=0;i<pi.length&&t!==0&&t<pi[i].priority;i++);pi.splice(i,0,e),i===0&&zg(e)}};function e0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function Bw(e,t,i,n,o){if(o){if(typeof n=="function"){var a=n;n=function(){var p=ws(s);a.call(p)}}var s=Yx(t,n,e,0,null,!1,!1,"",Qp);return e._reactRootContainer=s,e[Xt]=s.current,co(e.nodeType===8?e.parentNode:e),cn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var c=n;n=function(){var p=ws(m);c.call(p)}}var m=qm(e,0,!1,null,null,!1,!1,"",Qp);return e._reactRootContainer=m,e[Xt]=m.current,co(e.nodeType===8?e.parentNode:e),cn(function(){Gs(t,m,i,n)}),m}function Xs(e,t,i,n,o){var a=i._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var c=o;o=function(){var m=ws(s);c.call(m)}}Gs(t,s,e,o)}else s=Bw(i,t,e,o,n);return ws(s)}jg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Ir(t.pendingLanes);i!==0&&(wm(t,i|1),Ue(t,ue()),!(Z&6)&&(er=ue()+500,Bi()))}break;case 13:cn(function(){var n=Jt(e,1);if(n!==null){var o=Re();bt(n,e,1,o)}}),Xm(e,1)}};vm=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var i=Re();bt(t,e,134217728,i)}Xm(e,134217728)}};$g=function(e){if(e.tag===13){var t=Si(e),i=Jt(e,t);if(i!==null){var n=Re();bt(i,e,t,n)}Xm(e,t)}};Sg=function(){return q};Cg=function(e,t){var i=q;try{return q=e,t()}finally{q=i}};nc=function(e,t,i){switch(t){case"input":if(Kd(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var o=Os(n);if(!o)throw Error(M(90));ng(n),Kd(n,o)}}}break;case"textarea":og(e,i);break;case"select":t=i.value,t!=null&&On(e,!!i.multiple,t,!1)}};pg=Ym;hg=cn;var Fw={usingClientEntryPoint:!1,Events:[Ao,Pn,Os,cg,mg,Ym]},jr={findFiberByHostInstance:Yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ww={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gg(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{Ws=sa.inject(Ww),Et=sa}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fw;tt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e0(t))throw Error(M(200));return Iw(e,t,null,i)};tt.createRoot=function(e,t){if(!e0(e))throw Error(M(299));var i=!1,n="",o=Qx;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qm(e,1,!1,null,null,i,!1,n,o),e[Xt]=t.current,co(e.nodeType===8?e.parentNode:e),new Jm(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=gg(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return cn(e)};tt.hydrate=function(e,t,i){if(!qs(t))throw Error(M(200));return Xs(null,e,t,!0,i)};tt.hydrateRoot=function(e,t,i){if(!e0(e))throw Error(M(405));var n=i!=null&&i.hydratedSources||null,o=!1,a="",s=Qx;if(i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(s=i.onRecoverableError)),t=Yx(t,null,e,1,i??null,o,!1,a,s),e[Xt]=t.current,co(e),n)for(e=0;e<n.length;e++)i=n[e],o=i._getVersion,o=o(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,o]:t.mutableSourceEagerHydrationData.push(i,o);return new Ks(t)};tt.render=function(e,t,i){if(!qs(t))throw Error(M(200));return Xs(null,e,t,!1,i)};tt.unmountComponentAtNode=function(e){if(!qs(e))throw Error(M(40));return e._reactRootContainer?(cn(function(){Xs(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};tt.unstable_batchedUpdates=Ym;tt.unstable_renderSubtreeIntoContainer=function(e,t,i,n){if(!qs(i))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Xs(e,t,i,!1,n)};tt.version="18.3.1-next-f1338f8080-20240426";function Gx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gx)}catch(e){console.error(e)}}Gx(),Gf.exports=tt;var Dw=Gf.exports,Gp=Dw;_d.createRoot=Gp.createRoot,_d.hydrateRoot=Gp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},wo.apply(this,arguments)}var xi;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xi||(xi={}));const Kp="popstate";function Vw(e){e===void 0&&(e={});function t(n,o){let{pathname:a,search:s,hash:c}=n.location;return Bc("",{pathname:a,search:s,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(n,o){return typeof o=="string"?o:vs(o)}return Ow(t,i,null,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function t0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Nw(){return Math.random().toString(36).substr(2,8)}function qp(e,t){return{usr:e.state,key:e.key,idx:t}}function Bc(e,t,i,n){return i===void 0&&(i=null),wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hr(t):t,{state:i,key:t&&t.key||n||Nw()})}function vs(e){let{pathname:t="/",search:i="",hash:n=""}=e;return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function hr(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substr(i),e=e.substr(0,i));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Ow(e,t,i,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:a=!1}=n,s=o.history,c=xi.Pop,m=null,p=u();p==null&&(p=0,s.replaceState(wo({},s.state,{idx:p}),""));function u(){return(s.state||{idx:null}).idx}function h(){c=xi.Pop;let C=u(),v=C==null?null:C-p;p=C,m&&m({action:c,location:b.location,delta:v})}function f(C,v){c=xi.Push;let x=Bc(b.location,C,v);p=u()+1;let y=qp(x,p),$=b.createHref(x);try{s.pushState(y,"",$)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign($)}a&&m&&m({action:c,location:b.location,delta:1})}function g(C,v){c=xi.Replace;let x=Bc(b.location,C,v);p=u();let y=qp(x,p),$=b.createHref(x);s.replaceState(y,"",$),a&&m&&m({action:c,location:b.location,delta:0})}function w(C){let v=o.location.origin!=="null"?o.location.origin:o.location.href,x=typeof C=="string"?C:vs(C);return x=x.replace(/ $/,"%20"),ye(v,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,v)}let b={get action(){return c},get location(){return e(o,s)},listen(C){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Kp,h),m=C,()=>{o.removeEventListener(Kp,h),m=null}},createHref(C){return t(o,C)},createURL:w,encodeLocation(C){let v=w(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:g,go(C){return s.go(C)}};return b}var Xp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Xp||(Xp={}));function _w(e,t,i){return i===void 0&&(i="/"),Hw(e,t,i)}function Hw(e,t,i,n){let o=typeof t=="string"?hr(t):t,a=i0(o.pathname||"/",i);if(a==null)return null;let s=Kx(e);Uw(s);let c=null;for(let m=0;c==null&&m<s.length;++m){let p=nv(a);c=ev(s[m],p)}return c}function Kx(e,t,i,n){t===void 0&&(t=[]),i===void 0&&(i=[]),n===void 0&&(n="");let o=(a,s,c)=>{let m={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};m.relativePath.startsWith("/")&&(ye(m.relativePath.startsWith(n),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(n.length));let p=zi([n,m.relativePath]),u=i.concat(m);a.children&&a.children.length>0&&(ye(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Kx(a.children,t,u,p)),!(a.path==null&&!a.index)&&t.push({path:p,score:Xw(p,a.index),routesMeta:u})};return e.forEach((a,s)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))o(a,s);else for(let m of qx(a.path))o(a,s,m)}),t}function qx(e){let t=e.split("/");if(t.length===0)return[];let[i,...n]=t,o=i.endsWith("?"),a=i.replace(/\?$/,"");if(n.length===0)return o?[a,""]:[a];let s=qx(n.join("/")),c=[];return c.push(...s.map(m=>m===""?a:[a,m].join("/"))),o&&c.push(...s),c.map(m=>e.startsWith("/")&&m===""?"/":m)}function Uw(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:Jw(t.routesMeta.map(n=>n.childrenIndex),i.routesMeta.map(n=>n.childrenIndex)))}const Zw=/^:[\w-]+$/,Yw=3,Qw=2,Gw=1,Kw=10,qw=-2,Jp=e=>e==="*";function Xw(e,t){let i=e.split("/"),n=i.length;return i.some(Jp)&&(n+=qw),t&&(n+=Qw),i.filter(o=>!Jp(o)).reduce((o,a)=>o+(Zw.test(a)?Yw:a===""?Gw:Kw),n)}function Jw(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function ev(e,t,i){let{routesMeta:n}=e,o={},a="/",s=[];for(let c=0;c<n.length;++c){let m=n[c],p=c===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",h=tv({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},u),f=m.route;if(!h)return null;Object.assign(o,h.params),s.push({params:o,pathname:zi([a,h.pathname]),pathnameBase:lv(zi([a,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(a=zi([a,h.pathnameBase]))}return s}function tv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,n]=iv(e.path,e.caseSensitive,e.end),o=t.match(i);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:n.reduce((p,u,h)=>{let{paramName:f,isOptional:g}=u;if(f==="*"){let b=c[h]||"";s=a.slice(0,a.length-b.length).replace(/(.)\/+$/,"$1")}const w=c[h];return g&&!w?p[f]=void 0:p[f]=(w||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:s,pattern:e}}function iv(e,t,i){t===void 0&&(t=!1),i===void 0&&(i=!0),t0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,m)=>(n.push({paramName:c,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function nv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return t0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function i0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,n=e.charAt(i);return n&&n!=="/"?null:e.slice(i)||"/"}const rv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ov=e=>rv.test(e);function av(e,t){t===void 0&&(t="/");let{pathname:i,search:n="",hash:o=""}=typeof e=="string"?hr(e):e,a;if(i)if(ov(i))a=i;else{if(i.includes("//")){let s=i;i=i.replace(/\/\/+/g,"/"),t0(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+i))}i.startsWith("/")?a=eh(i.substring(1),"/"):a=eh(i,t)}else a=t;return{pathname:a,search:dv(n),hash:cv(o)}}function eh(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function Ul(e,t,i,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sv(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Xx(e,t){let i=sv(e);return t?i.map((n,o)=>o===i.length-1?n.pathname:n.pathnameBase):i.map(n=>n.pathnameBase)}function Jx(e,t,i,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=hr(e):(o=wo({},e),ye(!o.pathname||!o.pathname.includes("?"),Ul("?","pathname","search",o)),ye(!o.pathname||!o.pathname.includes("#"),Ul("#","pathname","hash",o)),ye(!o.search||!o.search.includes("#"),Ul("#","search","hash",o)));let a=e===""||o.pathname==="",s=a?"/":o.pathname,c;if(s==null)c=i;else{let h=t.length-1;if(!n&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),h-=1;o.pathname=f.join("/")}c=h>=0?t[h]:"/"}let m=av(o,c),p=s&&s!=="/"&&s.endsWith("/"),u=(a||s===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||u)&&(m.pathname+="/"),m}const zi=e=>e.join("/").replace(/\/\/+/g,"/"),lv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,cv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const e1=["post","put","patch","delete"];new Set(e1);const pv=["get",...e1];new Set(pv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},vo.apply(this,arguments)}const n0=k.createContext(null),hv=k.createContext(null),un=k.createContext(null),Js=k.createContext(null),ni=k.createContext({outlet:null,matches:[],isDataRoute:!1}),t1=k.createContext(null);function uv(e,t){let{relative:i}=t===void 0?{}:t;Eo()||ye(!1);let{basename:n,navigator:o}=k.useContext(un),{hash:a,pathname:s,search:c}=r1(e,{relative:i}),m=s;return n!=="/"&&(m=s==="/"?n:zi([n,s])),o.createHref({pathname:m,search:c,hash:a})}function Eo(){return k.useContext(Js)!=null}function ur(){return Eo()||ye(!1),k.useContext(Js).location}function i1(e){k.useContext(un).static||k.useLayoutEffect(e)}function n1(){let{isDataRoute:e}=k.useContext(ni);return e?Mv():fv()}function fv(){Eo()||ye(!1);let e=k.useContext(n0),{basename:t,future:i,navigator:n}=k.useContext(un),{matches:o}=k.useContext(ni),{pathname:a}=ur(),s=JSON.stringify(Xx(o,i.v7_relativeSplatPath)),c=k.useRef(!1);return i1(()=>{c.current=!0}),k.useCallback(function(p,u){if(u===void 0&&(u={}),!c.current)return;if(typeof p=="number"){n.go(p);return}let h=Jx(p,JSON.parse(s),a,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:zi([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,s,a,e])}const gv=k.createContext(null);function xv(e){let t=k.useContext(ni).outlet;return t&&k.createElement(gv.Provider,{value:e},t)}function yv(){let{matches:e}=k.useContext(ni),t=e[e.length-1];return t?t.params:{}}function r1(e,t){let{relative:i}=t===void 0?{}:t,{future:n}=k.useContext(un),{matches:o}=k.useContext(ni),{pathname:a}=ur(),s=JSON.stringify(Xx(o,n.v7_relativeSplatPath));return k.useMemo(()=>Jx(e,JSON.parse(s),a,i==="path"),[e,s,a,i])}function wv(e,t){return vv(e,t)}function vv(e,t,i,n){Eo()||ye(!1);let{navigator:o}=k.useContext(un),{matches:a}=k.useContext(ni),s=a[a.length-1],c=s?s.params:{};s&&s.pathname;let m=s?s.pathnameBase:"/";s&&s.route;let p=ur(),u;if(t){var h;let C=typeof t=="string"?hr(t):t;m==="/"||(h=C.pathname)!=null&&h.startsWith(m)||ye(!1),u=C}else u=p;let f=u.pathname||"/",g=f;if(m!=="/"){let C=m.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(C.length).join("/")}let w=_w(e,{pathname:g}),b=Sv(w&&w.map(C=>Object.assign({},C,{params:Object.assign({},c,C.params),pathname:zi([m,o.encodeLocation?o.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?m:zi([m,o.encodeLocation?o.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),a,i,n);return t&&b?k.createElement(Js.Provider,{value:{location:vo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:xi.Pop}},b):b}function bv(){let e=Pv(),t=mv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),i?k.createElement("pre",{style:o},i):null,null)}const kv=k.createElement(bv,null);class jv extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){console.error("React Router caught the following error during render",t,i)}render(){return this.state.error!==void 0?k.createElement(ni.Provider,{value:this.props.routeContext},k.createElement(t1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $v(e){let{routeContext:t,match:i,children:n}=e,o=k.useContext(n0);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),k.createElement(ni.Provider,{value:t},n)}function Sv(e,t,i,n){var o;if(t===void 0&&(t=[]),i===void 0&&(i=null),n===void 0&&(n=null),e==null){var a;if(!i)return null;if(i.errors)e=i.matches;else if((a=n)!=null&&a.v7_partialHydration&&t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let s=e,c=(o=i)==null?void 0:o.errors;if(c!=null){let u=s.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);u>=0||ye(!1),s=s.slice(0,Math.min(s.length,u+1))}let m=!1,p=-1;if(i&&n&&n.v7_partialHydration)for(let u=0;u<s.length;u++){let h=s[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(p=u),h.route.id){let{loaderData:f,errors:g}=i,w=h.route.loader&&f[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||w){m=!0,p>=0?s=s.slice(0,p+1):s=[s[0]];break}}}return s.reduceRight((u,h,f)=>{let g,w=!1,b=null,C=null;i&&(g=c&&h.route.id?c[h.route.id]:void 0,b=h.route.errorElement||kv,m&&(p<0&&f===0?(Av("route-fallback"),w=!0,C=null):p===f&&(w=!0,C=h.route.hydrateFallbackElement||null)));let v=t.concat(s.slice(0,f+1)),x=()=>{let y;return g?y=b:w?y=C:h.route.Component?y=k.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=u,k.createElement($v,{match:h,routeContext:{outlet:u,matches:v,isDataRoute:i!=null},children:y})};return i&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?k.createElement(jv,{location:i.location,revalidation:i.revalidation,component:b,error:g,children:x(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):x()},null)}var o1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(o1||{}),a1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(a1||{});function Cv(e){let t=k.useContext(n0);return t||ye(!1),t}function zv(e){let t=k.useContext(hv);return t||ye(!1),t}function Tv(e){let t=k.useContext(ni);return t||ye(!1),t}function s1(e){let t=Tv(),i=t.matches[t.matches.length-1];return i.route.id||ye(!1),i.route.id}function Pv(){var e;let t=k.useContext(t1),i=zv(),n=s1();return t!==void 0?t:(e=i.errors)==null?void 0:e[n]}function Mv(){let{router:e}=Cv(o1.UseNavigateStable),t=s1(a1.UseNavigateStable),i=k.useRef(!1);return i1(()=>{i.current=!0}),k.useCallback(function(o,a){a===void 0&&(a={}),i.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,vo({fromRouteId:t},a)))},[e,t])}const th={};function Av(e,t,i){th[e]||(th[e]=!0)}function Lv(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ev(e){return xv(e.context)}function ut(e){ye(!1)}function Iv(e){let{basename:t="/",children:i=null,location:n,navigationType:o=xi.Pop,navigator:a,static:s=!1,future:c}=e;Eo()&&ye(!1);let m=t.replace(/^\/*/,"/"),p=k.useMemo(()=>({basename:m,navigator:a,static:s,future:vo({v7_relativeSplatPath:!1},c)}),[m,c,a,s]);typeof n=="string"&&(n=hr(n));let{pathname:u="/",search:h="",hash:f="",state:g=null,key:w="default"}=n,b=k.useMemo(()=>{let C=i0(u,m);return C==null?null:{location:{pathname:C,search:h,hash:f,state:g,key:w},navigationType:o}},[m,u,h,f,g,w,o]);return b==null?null:k.createElement(un.Provider,{value:p},k.createElement(Js.Provider,{children:i,value:b}))}function Rv(e){let{children:t,location:i}=e;return wv(Fc(t),i)}new Promise(()=>{});function Fc(e,t){t===void 0&&(t=[]);let i=[];return k.Children.forEach(e,(n,o)=>{if(!k.isValidElement(n))return;let a=[...t,o];if(n.type===k.Fragment){i.push.apply(i,Fc(n.props.children,a));return}n.type!==ut&&ye(!1),!n.props.index||!n.props.children||ye(!1);let s={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Fc(n.props.children,a)),i.push(s)}),i}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wc(){return Wc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},Wc.apply(this,arguments)}function Bv(e,t){if(e==null)return{};var i={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(i[o]=e[o]);return i}function Fv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wv(e,t){return e.button===0&&(!t||t==="_self")&&!Fv(e)}const Dv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Vv="6";try{window.__reactRouterVersion=Vv}catch{}const Nv="startTransition",ih=T5[Nv];function Ov(e){let{basename:t,children:i,future:n,window:o}=e,a=k.useRef();a.current==null&&(a.current=Vw({window:o,v5Compat:!0}));let s=a.current,[c,m]=k.useState({action:s.action,location:s.location}),{v7_startTransition:p}=n||{},u=k.useCallback(h=>{p&&ih?ih(()=>m(h)):m(h)},[m,p]);return k.useLayoutEffect(()=>s.listen(u),[s,u]),k.useEffect(()=>Lv(n),[n]),k.createElement(Iv,{basename:t,children:i,location:c.location,navigationType:c.action,navigator:s,future:n})}const _v=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_=k.forwardRef(function(t,i){let{onClick:n,relative:o,reloadDocument:a,replace:s,state:c,target:m,to:p,preventScrollReset:u,viewTransition:h}=t,f=Bv(t,Dv),{basename:g}=k.useContext(un),w,b=!1;if(typeof p=="string"&&Hv.test(p)&&(w=p,_v))try{let y=new URL(window.location.href),$=p.startsWith("//")?new URL(y.protocol+p):new URL(p),z=i0($.pathname,g);$.origin===y.origin&&z!=null?p=z+$.search+$.hash:b=!0}catch{}let C=uv(p,{relative:o}),v=Uv(p,{replace:s,state:c,target:m,preventScrollReset:u,relative:o,viewTransition:h});function x(y){n&&n(y),y.defaultPrevented||v(y)}return k.createElement("a",Wc({},f,{href:w||C,onClick:b||a?n:x,ref:i,target:m}))});var nh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(nh||(nh={}));var rh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rh||(rh={}));function Uv(e,t){let{target:i,replace:n,state:o,preventScrollReset:a,relative:s,viewTransition:c}=t===void 0?{}:t,m=n1(),p=ur(),u=r1(e,{relative:s});return k.useCallback(h=>{if(Wv(h,i)){h.preventDefault();let f=n!==void 0?n:vs(p)===vs(u);m(e,{replace:f,state:o,preventScrollReset:a,relative:s,viewTransition:c})}},[p,m,u,n,o,i,e,a,s,c])}const r0=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),el=k.createContext({}),tl=k.createContext(null),il=typeof document<"u",Io=il?k.useLayoutEffect:k.useEffect,l1=k.createContext({strict:!1}),o0=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Zv="framerAppearId",d1="data-"+o0(Zv);function Yv(e,t,i,n){const{visualElement:o}=k.useContext(el),a=k.useContext(l1),s=k.useContext(tl),c=k.useContext(r0).reducedMotion,m=k.useRef();n=n||a.renderer,!m.current&&n&&(m.current=n(e,{visualState:t,parent:o,props:i,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:c}));const p=m.current;k.useInsertionEffect(()=>{p&&p.update(i,s)});const u=k.useRef(!!(i[d1]&&!window.HandoffComplete));return Io(()=>{p&&(p.render(),u.current&&p.animationState&&p.animationState.animateChanges())}),k.useEffect(()=>{p&&(p.updateFeatures(),!u.current&&p.animationState&&p.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),p}function Bn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Qv(e,t,i){return k.useCallback(n=>{n&&e.mount&&e.mount(n),t&&(n?t.mount(n):t.unmount()),i&&(typeof i=="function"?i(n):Bn(i)&&(i.current=n))},[t])}function bo(e){return typeof e=="string"||Array.isArray(e)}function nl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const a0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],s0=["initial",...a0];function rl(e){return nl(e.animate)||s0.some(t=>bo(e[t]))}function c1(e){return!!(rl(e)||e.variants)}function Gv(e,t){if(rl(e)){const{initial:i,animate:n}=e;return{initial:i===!1||bo(i)?i:void 0,animate:bo(n)?n:void 0}}return e.inherit!==!1?t:{}}function Kv(e){const{initial:t,animate:i}=Gv(e,k.useContext(el));return k.useMemo(()=>({initial:t,animate:i}),[oh(t),oh(i)])}function oh(e){return Array.isArray(e)?e.join(" "):e}const ah={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ko={};for(const e in ah)ko[e]={isEnabled:t=>ah[e].some(i=>!!t[i])};function qv(e){for(const t in e)ko[t]={...ko[t],...e[t]}}const l0=k.createContext({}),m1=k.createContext({}),Xv=Symbol.for("motionComponentSymbol");function Jv({preloadedFeatures:e,createVisualElement:t,useRender:i,useVisualState:n,Component:o}){e&&qv(e);function a(c,m){let p;const u={...k.useContext(r0),...c,layoutId:eb(c)},{isStatic:h}=u,f=Kv(c),g=n(c,h);if(!h&&il){f.visualElement=Yv(o,g,u,t);const w=k.useContext(m1),b=k.useContext(l1).strict;f.visualElement&&(p=f.visualElement.loadFeatures(u,b,e,w))}return k.createElement(el.Provider,{value:f},p&&f.visualElement?k.createElement(p,{visualElement:f.visualElement,...u}):null,i(o,c,Qv(g,f.visualElement,m),g,h,f.visualElement))}const s=k.forwardRef(a);return s[Xv]=o,s}function eb({layoutId:e}){const t=k.useContext(l0).id;return t&&e!==void 0?t+"-"+e:e}function tb(e){function t(n,o={}){return Jv(e(n,o))}if(typeof Proxy>"u")return t;const i=new Map;return new Proxy(t,{get:(n,o)=>(i.has(o)||i.set(o,t(o)),i.get(o))})}const ib=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function d0(e){return typeof e!="string"||e.includes("-")?!1:!!(ib.indexOf(e)>-1||/[A-Z]/.test(e))}const bs={};function nb(e){Object.assign(bs,e)}const Ro=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fn=new Set(Ro);function p1(e,{layout:t,layoutId:i}){return fn.has(e)||e.startsWith("origin")||(t||i!==void 0)&&(!!bs[e]||e==="opacity")}const Ze=e=>!!(e&&e.getVelocity),rb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ob=Ro.length;function ab(e,{enableHardwareAcceleration:t=!0,allowTransformNone:i=!0},n,o){let a="";for(let s=0;s<ob;s++){const c=Ro[s];if(e[c]!==void 0){const m=rb[c]||c;a+=`${m}(${e[c]}) `}}return t&&!e.z&&(a+="translateZ(0)"),a=a.trim(),o?a=o(e,n?"":a):i&&n&&(a="none"),a}const h1=e=>t=>typeof t=="string"&&t.startsWith(e),u1=h1("--"),Dc=h1("var(--"),sb=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,lb=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Li=(e,t,i)=>Math.min(Math.max(i,e),t),gn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Qr={...gn,transform:e=>Li(0,1,e)},la={...gn,default:1},Gr=e=>Math.round(e*1e5)/1e5,ol=/(-)?([\d]*\.?[\d])+/g,f1=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,db=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Bo(e){return typeof e=="string"}const Fo=e=>({test:t=>Bo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ai=Fo("deg"),Rt=Fo("%"),F=Fo("px"),cb=Fo("vh"),mb=Fo("vw"),sh={...Rt,parse:e=>Rt.parse(e)/100,transform:e=>Rt.transform(e*100)},lh={...gn,transform:Math.round},g1={borderWidth:F,borderTopWidth:F,borderRightWidth:F,borderBottomWidth:F,borderLeftWidth:F,borderRadius:F,radius:F,borderTopLeftRadius:F,borderTopRightRadius:F,borderBottomRightRadius:F,borderBottomLeftRadius:F,width:F,maxWidth:F,height:F,maxHeight:F,size:F,top:F,right:F,bottom:F,left:F,padding:F,paddingTop:F,paddingRight:F,paddingBottom:F,paddingLeft:F,margin:F,marginTop:F,marginRight:F,marginBottom:F,marginLeft:F,rotate:ai,rotateX:ai,rotateY:ai,rotateZ:ai,scale:la,scaleX:la,scaleY:la,scaleZ:la,skew:ai,skewX:ai,skewY:ai,distance:F,translateX:F,translateY:F,translateZ:F,x:F,y:F,z:F,perspective:F,transformPerspective:F,opacity:Qr,originX:sh,originY:sh,originZ:F,zIndex:lh,fillOpacity:Qr,strokeOpacity:Qr,numOctaves:lh};function c0(e,t,i,n){const{style:o,vars:a,transform:s,transformOrigin:c}=e;let m=!1,p=!1,u=!0;for(const h in t){const f=t[h];if(u1(h)){a[h]=f;continue}const g=g1[h],w=lb(f,g);if(fn.has(h)){if(m=!0,s[h]=w,!u)continue;f!==(g.default||0)&&(u=!1)}else h.startsWith("origin")?(p=!0,c[h]=w):o[h]=w}if(t.transform||(m||n?o.transform=ab(e.transform,i,u,n):o.transform&&(o.transform="none")),p){const{originX:h="50%",originY:f="50%",originZ:g=0}=c;o.transformOrigin=`${h} ${f} ${g}`}}const m0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function x1(e,t,i){for(const n in t)!Ze(t[n])&&!p1(n,i)&&(e[n]=t[n])}function pb({transformTemplate:e},t,i){return k.useMemo(()=>{const n=m0();return c0(n,t,{enableHardwareAcceleration:!i},e),Object.assign({},n.vars,n.style)},[t])}function hb(e,t,i){const n=e.style||{},o={};return x1(o,n,e),Object.assign(o,pb(e,t,i)),e.transformValues?e.transformValues(o):o}function ub(e,t,i){const n={},o=hb(e,t,i);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=o,n}const fb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ks(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||fb.has(e)}let y1=e=>!ks(e);function gb(e){e&&(y1=t=>t.startsWith("on")?!ks(t):e(t))}try{gb(require("@emotion/is-prop-valid").default)}catch{}function xb(e,t,i){const n={};for(const o in e)o==="values"&&typeof e.values=="object"||(y1(o)||i===!0&&ks(o)||!t&&!ks(o)||e.draggable&&o.startsWith("onDrag"))&&(n[o]=e[o]);return n}function dh(e,t,i){return typeof e=="string"?e:F.transform(t+i*e)}function yb(e,t,i){const n=dh(t,e.x,e.width),o=dh(i,e.y,e.height);return`${n} ${o}`}const wb={offset:"stroke-dashoffset",array:"stroke-dasharray"},vb={offset:"strokeDashoffset",array:"strokeDasharray"};function bb(e,t,i=1,n=0,o=!0){e.pathLength=1;const a=o?wb:vb;e[a.offset]=F.transform(-n);const s=F.transform(t),c=F.transform(i);e[a.array]=`${s} ${c}`}function p0(e,{attrX:t,attrY:i,attrScale:n,originX:o,originY:a,pathLength:s,pathSpacing:c=1,pathOffset:m=0,...p},u,h,f){if(c0(e,p,u,f),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:w,dimensions:b}=e;g.transform&&(b&&(w.transform=g.transform),delete g.transform),b&&(o!==void 0||a!==void 0||w.transform)&&(w.transformOrigin=yb(b,o!==void 0?o:.5,a!==void 0?a:.5)),t!==void 0&&(g.x=t),i!==void 0&&(g.y=i),n!==void 0&&(g.scale=n),s!==void 0&&bb(g,s,c,m,!1)}const w1=()=>({...m0(),attrs:{}}),h0=e=>typeof e=="string"&&e.toLowerCase()==="svg";function kb(e,t,i,n){const o=k.useMemo(()=>{const a=w1();return p0(a,t,{enableHardwareAcceleration:!1},h0(n),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};x1(a,e.style,e),o.style={...a,...o.style}}return o}function jb(e=!1){return(i,n,o,{latestValues:a},s)=>{const m=(d0(i)?kb:ub)(n,a,s,i),u={...xb(n,typeof i=="string",e),...m,ref:o},{children:h}=n,f=k.useMemo(()=>Ze(h)?h.get():h,[h]);return k.createElement(i,{...u,children:f})}}function v1(e,{style:t,vars:i},n,o){Object.assign(e.style,t,o&&o.getProjectionStyles(n));for(const a in i)e.style.setProperty(a,i[a])}const b1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function k1(e,t,i,n){v1(e,t,void 0,n);for(const o in t.attrs)e.setAttribute(b1.has(o)?o:o0(o),t.attrs[o])}function u0(e,t){const{style:i}=e,n={};for(const o in i)(Ze(i[o])||t.style&&Ze(t.style[o])||p1(o,e))&&(n[o]=i[o]);return n}function j1(e,t){const i=u0(e,t);for(const n in e)if(Ze(e[n])||Ze(t[n])){const o=Ro.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;i[o]=e[n]}return i}function f0(e,t,i,n={},o={}){return typeof t=="function"&&(t=t(i!==void 0?i:e.custom,n,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(i!==void 0?i:e.custom,n,o)),t}function Wo(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}const js=e=>Array.isArray(e),$b=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Sb=e=>js(e)?e[e.length-1]||0:e;function Va(e){const t=Ze(e)?e.get():e;return $b(t)?t.toValue():t}function Cb({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:i},n,o,a){const s={latestValues:zb(n,o,a,e),renderState:t()};return i&&(s.mount=c=>i(n,c,s)),s}const $1=e=>(t,i)=>{const n=k.useContext(el),o=k.useContext(tl),a=()=>Cb(e,t,n,o);return i?a():Wo(a)};function zb(e,t,i,n){const o={},a=n(e,{});for(const f in a)o[f]=Va(a[f]);let{initial:s,animate:c}=e;const m=rl(e),p=c1(e);t&&p&&!m&&e.inherit!==!1&&(s===void 0&&(s=t.initial),c===void 0&&(c=t.animate));let u=i?i.initial===!1:!1;u=u||s===!1;const h=u?c:s;return h&&typeof h!="boolean"&&!nl(h)&&(Array.isArray(h)?h:[h]).forEach(g=>{const w=f0(e,g);if(!w)return;const{transitionEnd:b,transition:C,...v}=w;for(const x in v){let y=v[x];if(Array.isArray(y)){const $=u?y.length-1:0;y=y[$]}y!==null&&(o[x]=y)}for(const x in b)o[x]=b[x]}),o}const pe=e=>e;class ch{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const i=this.order.indexOf(t);i!==-1&&(this.order.splice(i,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function Tb(e){let t=new ch,i=new ch,n=0,o=!1,a=!1;const s=new WeakSet,c={schedule:(m,p=!1,u=!1)=>{const h=u&&o,f=h?t:i;return p&&s.add(m),f.add(m)&&h&&o&&(n=t.order.length),m},cancel:m=>{i.remove(m),s.delete(m)},process:m=>{if(o){a=!0;return}if(o=!0,[t,i]=[i,t],i.clear(),n=t.order.length,n)for(let p=0;p<n;p++){const u=t.order[p];u(m),s.has(u)&&(c.schedule(u),e())}o=!1,a&&(a=!1,c.process(m))}};return c}const da=["prepare","read","update","preRender","render","postRender"],Pb=40;function Mb(e,t){let i=!1,n=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=da.reduce((h,f)=>(h[f]=Tb(()=>i=!0),h),{}),s=h=>a[h].process(o),c=()=>{const h=performance.now();i=!1,o.delta=n?1e3/60:Math.max(Math.min(h-o.timestamp,Pb),1),o.timestamp=h,o.isProcessing=!0,da.forEach(s),o.isProcessing=!1,i&&t&&(n=!1,e(c))},m=()=>{i=!0,n=!0,o.isProcessing||e(c)};return{schedule:da.reduce((h,f)=>{const g=a[f];return h[f]=(w,b=!1,C=!1)=>(i||m(),g.schedule(w,b,C)),h},{}),cancel:h=>da.forEach(f=>a[f].cancel(h)),state:o,steps:a}}const{schedule:K,cancel:$t,state:Ce,steps:Zl}=Mb(typeof requestAnimationFrame<"u"?requestAnimationFrame:pe,!0),Ab={useVisualState:$1({scrapeMotionValuesFromProps:j1,createRenderState:w1,onMount:(e,t,{renderState:i,latestValues:n})=>{K.read(()=>{try{i.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}),K.render(()=>{p0(i,n,{enableHardwareAcceleration:!1},h0(t.tagName),e.transformTemplate),k1(t,i)})}})},Lb={useVisualState:$1({scrapeMotionValuesFromProps:u0,createRenderState:m0})};function Eb(e,{forwardMotionProps:t=!1},i,n){return{...d0(e)?Ab:Lb,preloadedFeatures:i,useRender:jb(t),createVisualElement:n,Component:e}}function Zt(e,t,i,n={passive:!0}){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i)}const S1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function al(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const Ib=e=>t=>S1(t)&&e(t,al(t));function Qt(e,t,i,n){return Zt(e,t,Ib(i),n)}const Rb=(e,t)=>i=>t(e(i)),Ti=(...e)=>e.reduce(Rb);function C1(e){let t=null;return()=>{const i=()=>{t=null};return t===null?(t=e,i):!1}}const mh=C1("dragHorizontal"),ph=C1("dragVertical");function z1(e){let t=!1;if(e==="y")t=ph();else if(e==="x")t=mh();else{const i=mh(),n=ph();i&&n?t=()=>{i(),n()}:(i&&i(),n&&n())}return t}function T1(){const e=z1(!0);return e?(e(),!1):!0}class Fi{constructor(t){this.isMounted=!1,this.node=t}update(){}}function hh(e,t){const i="pointer"+(t?"enter":"leave"),n="onHover"+(t?"Start":"End"),o=(a,s)=>{if(a.pointerType==="touch"||T1())return;const c=e.getProps();e.animationState&&c.whileHover&&e.animationState.setActive("whileHover",t),c[n]&&K.update(()=>c[n](a,s))};return Qt(e.current,i,o,{passive:!e.getProps()[n]})}class Bb extends Fi{mount(){this.unmount=Ti(hh(this.node,!0),hh(this.node,!1))}unmount(){}}class Fb extends Fi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ti(Zt(this.node.current,"focus",()=>this.onFocus()),Zt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const P1=(e,t)=>t?e===t?!0:P1(e,t.parentElement):!1;function Yl(e,t){if(!t)return;const i=new PointerEvent("pointer"+e);t(i,al(i))}class Wb extends Fi{constructor(){super(...arguments),this.removeStartListeners=pe,this.removeEndListeners=pe,this.removeAccessibleListeners=pe,this.startPointerPress=(t,i)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),a=Qt(window,"pointerup",(c,m)=>{if(!this.checkPressEnd())return;const{onTap:p,onTapCancel:u,globalTapTarget:h}=this.node.getProps();K.update(()=>{!h&&!P1(this.node.current,c.target)?u&&u(c,m):p&&p(c,m)})},{passive:!(n.onTap||n.onPointerUp)}),s=Qt(window,"pointercancel",(c,m)=>this.cancelPress(c,m),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=Ti(a,s),this.startPress(t,i)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const s=c=>{c.key!=="Enter"||!this.checkPressEnd()||Yl("up",(m,p)=>{const{onTap:u}=this.node.getProps();u&&K.update(()=>u(m,p))})};this.removeEndListeners(),this.removeEndListeners=Zt(this.node.current,"keyup",s),Yl("down",(c,m)=>{this.startPress(c,m)})},i=Zt(this.node.current,"keydown",t),n=()=>{this.isPressing&&Yl("cancel",(a,s)=>this.cancelPress(a,s))},o=Zt(this.node.current,"blur",n);this.removeAccessibleListeners=Ti(i,o)}}startPress(t,i){this.isPressing=!0;const{onTapStart:n,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&K.update(()=>n(t,i))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!T1()}cancelPress(t,i){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&K.update(()=>n(t,i))}mount(){const t=this.node.getProps(),i=Qt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),n=Zt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ti(i,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Vc=new WeakMap,Ql=new WeakMap,Db=e=>{const t=Vc.get(e.target);t&&t(e)},Vb=e=>{e.forEach(Db)};function Nb({root:e,...t}){const i=e||document;Ql.has(i)||Ql.set(i,{});const n=Ql.get(i),o=JSON.stringify(t);return n[o]||(n[o]=new IntersectionObserver(Vb,{root:e,...t})),n[o]}function Ob(e,t,i){const n=Nb(t);return Vc.set(e,i),n.observe(e),()=>{Vc.delete(e),n.unobserve(e)}}const _b={some:0,all:1};class Hb extends Fi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:n,amount:o="some",once:a}=t,s={root:i?i.current:void 0,rootMargin:n,threshold:typeof o=="number"?o:_b[o]},c=m=>{const{isIntersecting:p}=m;if(this.isInView===p||(this.isInView=p,a&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),f=p?u:h;f&&f(m)};return Ob(this.node.current,s,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(Ub(t,i))&&this.startObserver()}unmount(){}}function Ub({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}const Zb={inView:{Feature:Hb},tap:{Feature:Wb},focus:{Feature:Fb},hover:{Feature:Bb}};function M1(e,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==e.length)return!1;for(let n=0;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yb(e){const t={};return e.values.forEach((i,n)=>t[n]=i.get()),t}function Qb(e){const t={};return e.values.forEach((i,n)=>t[n]=i.getVelocity()),t}function sl(e,t,i){const n=e.getProps();return f0(n,t,i!==void 0?i:n.custom,Yb(e),Qb(e))}let Gb=pe,g0=pe;const nn=e=>e*1e3,Gt=e=>e/1e3,Kb={current:!1},A1=e=>Array.isArray(e)&&typeof e[0]=="number";function L1(e){return!!(!e||typeof e=="string"&&E1[e]||A1(e)||Array.isArray(e)&&e.every(L1))}const Br=([e,t,i,n])=>`cubic-bezier(${e}, ${t}, ${i}, ${n})`,E1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Br([0,.65,.55,1]),circOut:Br([.55,0,1,.45]),backIn:Br([.31,.01,.66,-.59]),backOut:Br([.33,1.53,.69,.99])};function I1(e){if(e)return A1(e)?Br(e):Array.isArray(e)?e.map(I1):E1[e]}function qb(e,t,i,{delay:n=0,duration:o,repeat:a=0,repeatType:s="loop",ease:c,times:m}={}){const p={[t]:i};m&&(p.offset=m);const u=I1(c);return Array.isArray(u)&&(p.easing=u),e.animate(p,{delay:n,duration:o,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:s==="reverse"?"alternate":"normal"})}function Xb(e,{repeat:t,repeatType:i="loop"}){const n=t&&i!=="loop"&&t%2===1?0:e.length-1;return e[n]}const R1=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,Jb=1e-7,e3=12;function t3(e,t,i,n,o){let a,s,c=0;do s=t+(i-t)/2,a=R1(s,n,o)-e,a>0?i=s:t=s;while(Math.abs(a)>Jb&&++c<e3);return s}function Do(e,t,i,n){if(e===t&&i===n)return pe;const o=a=>t3(a,0,1,e,i);return a=>a===0||a===1?a:R1(o(a),t,n)}const i3=Do(.42,0,1,1),n3=Do(0,0,.58,1),B1=Do(.42,0,.58,1),r3=e=>Array.isArray(e)&&typeof e[0]!="number",F1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,W1=e=>t=>1-e(1-t),x0=e=>1-Math.sin(Math.acos(e)),D1=W1(x0),o3=F1(x0),V1=Do(.33,1.53,.69,.99),y0=W1(V1),a3=F1(y0),s3=e=>(e*=2)<1?.5*y0(e):.5*(2-Math.pow(2,-10*(e-1))),l3={linear:pe,easeIn:i3,easeInOut:B1,easeOut:n3,circIn:x0,circInOut:o3,circOut:D1,backIn:y0,backInOut:a3,backOut:V1,anticipate:s3},uh=e=>{if(Array.isArray(e)){g0(e.length===4);const[t,i,n,o]=e;return Do(t,i,n,o)}else if(typeof e=="string")return l3[e];return e},w0=(e,t)=>i=>!!(Bo(i)&&db.test(i)&&i.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(i,t)),N1=(e,t,i)=>n=>{if(!Bo(n))return n;const[o,a,s,c]=n.match(ol);return{[e]:parseFloat(o),[t]:parseFloat(a),[i]:parseFloat(s),alpha:c!==void 0?parseFloat(c):1}},d3=e=>Li(0,255,e),Gl={...gn,transform:e=>Math.round(d3(e))},Ki={test:w0("rgb","red"),parse:N1("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:n=1})=>"rgba("+Gl.transform(e)+", "+Gl.transform(t)+", "+Gl.transform(i)+", "+Gr(Qr.transform(n))+")"};function c3(e){let t="",i="",n="",o="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),n=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),n=e.substring(3,4),o=e.substring(4,5),t+=t,i+=i,n+=n,o+=o),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:o?parseInt(o,16)/255:1}}const Nc={test:w0("#"),parse:c3,transform:Ki.transform},Fn={test:w0("hsl","hue"),parse:N1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:n=1})=>"hsla("+Math.round(e)+", "+Rt.transform(Gr(t))+", "+Rt.transform(Gr(i))+", "+Gr(Qr.transform(n))+")"},Ee={test:e=>Ki.test(e)||Nc.test(e)||Fn.test(e),parse:e=>Ki.test(e)?Ki.parse(e):Fn.test(e)?Fn.parse(e):Nc.parse(e),transform:e=>Bo(e)?e:e.hasOwnProperty("red")?Ki.transform(e):Fn.transform(e)},se=(e,t,i)=>-i*e+i*t+e;function Kl(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function m3({hue:e,saturation:t,lightness:i,alpha:n}){e/=360,t/=100,i/=100;let o=0,a=0,s=0;if(!t)o=a=s=i;else{const c=i<.5?i*(1+t):i+t-i*t,m=2*i-c;o=Kl(m,c,e+1/3),a=Kl(m,c,e),s=Kl(m,c,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(s*255),alpha:n}}const ql=(e,t,i)=>{const n=e*e;return Math.sqrt(Math.max(0,i*(t*t-n)+n))},p3=[Nc,Ki,Fn],h3=e=>p3.find(t=>t.test(e));function fh(e){const t=h3(e);let i=t.parse(e);return t===Fn&&(i=m3(i)),i}const O1=(e,t)=>{const i=fh(e),n=fh(t),o={...i};return a=>(o.red=ql(i.red,n.red,a),o.green=ql(i.green,n.green,a),o.blue=ql(i.blue,n.blue,a),o.alpha=se(i.alpha,n.alpha,a),Ki.transform(o))};function u3(e){var t,i;return isNaN(e)&&Bo(e)&&(((t=e.match(ol))===null||t===void 0?void 0:t.length)||0)+(((i=e.match(f1))===null||i===void 0?void 0:i.length)||0)>0}const _1={regex:sb,countKey:"Vars",token:"${v}",parse:pe},H1={regex:f1,countKey:"Colors",token:"${c}",parse:Ee.parse},U1={regex:ol,countKey:"Numbers",token:"${n}",parse:gn.parse};function Xl(e,{regex:t,countKey:i,token:n,parse:o}){const a=e.tokenised.match(t);a&&(e["num"+i]=a.length,e.tokenised=e.tokenised.replace(t,n),e.values.push(...a.map(o)))}function $s(e){const t=e.toString(),i={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return i.value.includes("var(--")&&Xl(i,_1),Xl(i,H1),Xl(i,U1),i}function Z1(e){return $s(e).values}function Y1(e){const{values:t,numColors:i,numVars:n,tokenised:o}=$s(e),a=t.length;return s=>{let c=o;for(let m=0;m<a;m++)m<n?c=c.replace(_1.token,s[m]):m<n+i?c=c.replace(H1.token,Ee.transform(s[m])):c=c.replace(U1.token,Gr(s[m]));return c}}const f3=e=>typeof e=="number"?0:e;function g3(e){const t=Z1(e);return Y1(e)(t.map(f3))}const Ei={test:u3,parse:Z1,createTransformer:Y1,getAnimatableNone:g3},Q1=(e,t)=>i=>`${i>0?t:e}`;function G1(e,t){return typeof e=="number"?i=>se(e,t,i):Ee.test(e)?O1(e,t):e.startsWith("var(")?Q1(e,t):q1(e,t)}const K1=(e,t)=>{const i=[...e],n=i.length,o=e.map((a,s)=>G1(a,t[s]));return a=>{for(let s=0;s<n;s++)i[s]=o[s](a);return i}},x3=(e,t)=>{const i={...e,...t},n={};for(const o in i)e[o]!==void 0&&t[o]!==void 0&&(n[o]=G1(e[o],t[o]));return o=>{for(const a in n)i[a]=n[a](o);return i}},q1=(e,t)=>{const i=Ei.createTransformer(t),n=$s(e),o=$s(t);return n.numVars===o.numVars&&n.numColors===o.numColors&&n.numNumbers>=o.numNumbers?Ti(K1(n.values,o.values),i):Q1(e,t)},tr=(e,t,i)=>{const n=t-e;return n===0?1:(i-e)/n},gh=(e,t)=>i=>se(e,t,i);function y3(e){return typeof e=="number"?gh:typeof e=="string"?Ee.test(e)?O1:q1:Array.isArray(e)?K1:typeof e=="object"?x3:gh}function w3(e,t,i){const n=[],o=i||y3(e[0]),a=e.length-1;for(let s=0;s<a;s++){let c=o(e[s],e[s+1]);if(t){const m=Array.isArray(t)?t[s]||pe:t;c=Ti(m,c)}n.push(c)}return n}function ll(e,t,{clamp:i=!0,ease:n,mixer:o}={}){const a=e.length;if(g0(a===t.length),a===1)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=w3(t,n,o),c=s.length,m=p=>{let u=0;if(c>1)for(;u<e.length-2&&!(p<e[u+1]);u++);const h=tr(e[u],e[u+1],p);return s[u](h)};return i?p=>m(Li(e[0],e[a-1],p)):m}function v3(e,t){const i=e[e.length-1];for(let n=1;n<=t;n++){const o=tr(0,t,n);e.push(se(i,1,o))}}function X1(e){const t=[0];return v3(t,e.length-1),t}function b3(e,t){return e.map(i=>i*t)}function k3(e,t){return e.map(()=>t||B1).splice(0,e.length-1)}function Ss({duration:e=300,keyframes:t,times:i,ease:n="easeInOut"}){const o=r3(n)?n.map(uh):uh(n),a={done:!1,value:t[0]},s=b3(i&&i.length===t.length?i:X1(t),e),c=ll(s,t,{ease:Array.isArray(o)?o:k3(t,o)});return{calculatedDuration:e,next:m=>(a.value=c(m),a.done=m>=e,a)}}function v0(e,t){return t?e*(1e3/t):0}const j3=5;function J1(e,t,i){const n=Math.max(t-j3,0);return v0(i-e(n),t-n)}const Jl=.001,$3=.01,S3=10,C3=.05,z3=1;function T3({duration:e=800,bounce:t=.25,velocity:i=0,mass:n=1}){let o,a,s=1-t;s=Li(C3,z3,s),e=Li($3,S3,Gt(e)),s<1?(o=p=>{const u=p*s,h=u*e,f=u-i,g=Oc(p,s),w=Math.exp(-h);return Jl-f/g*w},a=p=>{const h=p*s*e,f=h*i+i,g=Math.pow(s,2)*Math.pow(p,2)*e,w=Math.exp(-h),b=Oc(Math.pow(p,2),s);return(-o(p)+Jl>0?-1:1)*((f-g)*w)/b}):(o=p=>{const u=Math.exp(-p*e),h=(p-i)*e+1;return-Jl+u*h},a=p=>{const u=Math.exp(-p*e),h=(i-p)*(e*e);return u*h});const c=5/e,m=M3(o,a,c);if(e=nn(e),isNaN(m))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(m,2)*n;return{stiffness:p,damping:s*2*Math.sqrt(n*p),duration:e}}}const P3=12;function M3(e,t,i){let n=i;for(let o=1;o<P3;o++)n=n-e(n)/t(n);return n}function Oc(e,t){return e*Math.sqrt(1-t*t)}const A3=["duration","bounce"],L3=["stiffness","damping","mass"];function xh(e,t){return t.some(i=>e[i]!==void 0)}function E3(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!xh(e,L3)&&xh(e,A3)){const i=T3(e);t={...t,...i,mass:1},t.isResolvedFromDuration=!0}return t}function e2({keyframes:e,restDelta:t,restSpeed:i,...n}){const o=e[0],a=e[e.length-1],s={done:!1,value:o},{stiffness:c,damping:m,mass:p,duration:u,velocity:h,isResolvedFromDuration:f}=E3({...n,velocity:-Gt(n.velocity||0)}),g=h||0,w=m/(2*Math.sqrt(c*p)),b=a-o,C=Gt(Math.sqrt(c/p)),v=Math.abs(b)<5;i||(i=v?.01:2),t||(t=v?.005:.5);let x;if(w<1){const y=Oc(C,w);x=$=>{const z=Math.exp(-w*C*$);return a-z*((g+w*C*b)/y*Math.sin(y*$)+b*Math.cos(y*$))}}else if(w===1)x=y=>a-Math.exp(-C*y)*(b+(g+C*b)*y);else{const y=C*Math.sqrt(w*w-1);x=$=>{const z=Math.exp(-w*C*$),T=Math.min(y*$,300);return a-z*((g+w*C*b)*Math.sinh(T)+y*b*Math.cosh(T))/y}}return{calculatedDuration:f&&u||null,next:y=>{const $=x(y);if(f)s.done=y>=u;else{let z=g;y!==0&&(w<1?z=J1(x,y,$):z=0);const T=Math.abs(z)<=i,S=Math.abs(a-$)<=t;s.done=T&&S}return s.value=s.done?a:$,s}}}function yh({keyframes:e,velocity:t=0,power:i=.8,timeConstant:n=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:s,min:c,max:m,restDelta:p=.5,restSpeed:u}){const h=e[0],f={done:!1,value:h},g=P=>c!==void 0&&P<c||m!==void 0&&P>m,w=P=>c===void 0?m:m===void 0||Math.abs(c-P)<Math.abs(m-P)?c:m;let b=i*t;const C=h+b,v=s===void 0?C:s(C);v!==C&&(b=v-h);const x=P=>-b*Math.exp(-P/n),y=P=>v+x(P),$=P=>{const E=x(P),L=y(P);f.done=Math.abs(E)<=p,f.value=f.done?v:L};let z,T;const S=P=>{g(f.value)&&(z=P,T=e2({keyframes:[f.value,w(f.value)],velocity:J1(y,P,f.value),damping:o,stiffness:a,restDelta:p,restSpeed:u}))};return S(0),{calculatedDuration:null,next:P=>{let E=!1;return!T&&z===void 0&&(E=!0,$(P),S(P)),z!==void 0&&P>z?T.next(P-z):(!E&&$(P),f)}}}const I3=e=>{const t=({timestamp:i})=>e(i);return{start:()=>K.update(t,!0),stop:()=>$t(t),now:()=>Ce.isProcessing?Ce.timestamp:performance.now()}},wh=2e4;function vh(e){let t=0;const i=50;let n=e.next(t);for(;!n.done&&t<wh;)t+=i,n=e.next(t);return t>=wh?1/0:t}const R3={decay:yh,inertia:yh,tween:Ss,keyframes:Ss,spring:e2};function Cs({autoplay:e=!0,delay:t=0,driver:i=I3,keyframes:n,type:o="keyframes",repeat:a=0,repeatDelay:s=0,repeatType:c="loop",onPlay:m,onStop:p,onComplete:u,onUpdate:h,...f}){let g=1,w=!1,b,C;const v=()=>{C=new Promise(B=>{b=B})};v();let x;const y=R3[o]||Ss;let $;y!==Ss&&typeof n[0]!="number"&&($=ll([0,100],n,{clamp:!1}),n=[0,100]);const z=y({...f,keyframes:n});let T;c==="mirror"&&(T=y({...f,keyframes:[...n].reverse(),velocity:-(f.velocity||0)}));let S="idle",P=null,E=null,L=null;z.calculatedDuration===null&&a&&(z.calculatedDuration=vh(z));const{calculatedDuration:V}=z;let Q=1/0,ne=1/0;V!==null&&(Q=V+s,ne=Q*(a+1)-s);let X=0;const Ye=B=>{if(E===null)return;g>0&&(E=Math.min(E,B)),g<0&&(E=Math.min(B-ne/g,E)),P!==null?X=P:X=Math.round(B-E)*g;const U=X-t*(g>=0?1:-1),St=g>=0?U<0:U>ne;X=Math.max(U,0),S==="finished"&&P===null&&(X=ne);let We=X,Wt=z;if(a){const zt=Math.min(X,ne)/Q;let Dt=Math.floor(zt),Qe=zt%1;!Qe&&zt>=1&&(Qe=1),Qe===1&&Dt--,Dt=Math.min(Dt,a+1),!!(Dt%2)&&(c==="reverse"?(Qe=1-Qe,s&&(Qe-=s/Q)):c==="mirror"&&(Wt=T)),We=Li(0,1,Qe)*Q}const $e=St?{done:!1,value:n[0]}:Wt.next(We);$&&($e.value=$($e.value));let{done:Ct}=$e;!St&&V!==null&&(Ct=g>=0?X>=ne:X<=0);const xn=P===null&&(S==="finished"||S==="running"&&Ct);return h&&h($e.value),xn&&A(),$e},H=()=>{x&&x.stop(),x=void 0},he=()=>{S="idle",H(),b(),v(),E=L=null},A=()=>{S="finished",u&&u(),H(),b()},R=()=>{if(w)return;x||(x=i(Ye));const B=x.now();m&&m(),P!==null?E=B-P:(!E||S==="finished")&&(E=B),S==="finished"&&v(),L=E,P=null,S="running",x.start()};e&&R();const W={then(B,U){return C.then(B,U)},get time(){return Gt(X)},set time(B){B=nn(B),X=B,P!==null||!x||g===0?P=B:E=x.now()-B/g},get duration(){const B=z.calculatedDuration===null?vh(z):z.calculatedDuration;return Gt(B)},get speed(){return g},set speed(B){B===g||!x||(g=B,W.time=Gt(X))},get state(){return S},play:R,pause:()=>{S="paused",P=X},stop:()=>{w=!0,S!=="idle"&&(S="idle",p&&p(),he())},cancel:()=>{L!==null&&Ye(L),he()},complete:()=>{S="finished"},sample:B=>(E=0,Ye(B))};return W}function B3(e){let t;return()=>(t===void 0&&(t=e()),t)}const F3=B3(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),W3=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ca=10,D3=2e4,V3=(e,t)=>t.type==="spring"||e==="backgroundColor"||!L1(t.ease);function N3(e,t,{onUpdate:i,onComplete:n,...o}){if(!(F3()&&W3.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let s=!1,c,m,p=!1;const u=()=>{m=new Promise(y=>{c=y})};u();let{keyframes:h,duration:f=300,ease:g,times:w}=o;if(V3(t,o)){const y=Cs({...o,repeat:0,delay:0});let $={done:!1,value:h[0]};const z=[];let T=0;for(;!$.done&&T<D3;)$=y.sample(T),z.push($.value),T+=ca;w=void 0,h=z,f=T-ca,g="linear"}const b=qb(e.owner.current,t,h,{...o,duration:f,ease:g,times:w}),C=()=>{p=!1,b.cancel()},v=()=>{p=!0,K.update(C),c(),u()};return b.onfinish=()=>{p||(e.set(Xb(h,o)),n&&n(),v())},{then(y,$){return m.then(y,$)},attachTimeline(y){return b.timeline=y,b.onfinish=null,pe},get time(){return Gt(b.currentTime||0)},set time(y){b.currentTime=nn(y)},get speed(){return b.playbackRate},set speed(y){b.playbackRate=y},get duration(){return Gt(f)},play:()=>{s||(b.play(),$t(C))},pause:()=>b.pause(),stop:()=>{if(s=!0,b.playState==="idle")return;const{currentTime:y}=b;if(y){const $=Cs({...o,autoplay:!1});e.setWithVelocity($.sample(y-ca).value,$.sample(y).value,ca)}v()},complete:()=>{p||b.finish()},cancel:v}}function O3({keyframes:e,delay:t,onUpdate:i,onComplete:n}){const o=()=>(i&&i(e[e.length-1]),n&&n(),{time:0,speed:1,duration:0,play:pe,pause:pe,stop:pe,then:a=>(a(),Promise.resolve()),cancel:pe,complete:pe});return t?Cs({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const _3={type:"spring",stiffness:500,damping:25,restSpeed:10},H3=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),U3={type:"keyframes",duration:.8},Z3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Y3=(e,{keyframes:t})=>t.length>2?U3:fn.has(e)?e.startsWith("scale")?H3(t[1]):_3:Z3,_c=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ei.test(t)||t==="0")&&!t.startsWith("url(")),Q3=new Set(["brightness","contrast","saturate","opacity"]);function G3(e){const[t,i]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[n]=i.match(ol)||[];if(!n)return e;const o=i.replace(n,"");let a=Q3.has(t)?1:0;return n!==i&&(a*=100),t+"("+a+o+")"}const K3=/([a-z-]*)\(.*?\)/g,Hc={...Ei,getAnimatableNone:e=>{const t=e.match(K3);return t?t.map(G3).join(" "):e}},q3={...g1,color:Ee,backgroundColor:Ee,outlineColor:Ee,fill:Ee,stroke:Ee,borderColor:Ee,borderTopColor:Ee,borderRightColor:Ee,borderBottomColor:Ee,borderLeftColor:Ee,filter:Hc,WebkitFilter:Hc},b0=e=>q3[e];function t2(e,t){let i=b0(e);return i!==Hc&&(i=Ei),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const i2=e=>/^0[^.\s]+$/.test(e);function X3(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||i2(e)}function J3(e,t,i,n){const o=_c(t,i);let a;Array.isArray(i)?a=[...i]:a=[null,i];const s=n.from!==void 0?n.from:e.get();let c;const m=[];for(let p=0;p<a.length;p++)a[p]===null&&(a[p]=p===0?s:a[p-1]),X3(a[p])&&m.push(p),typeof a[p]=="string"&&a[p]!=="none"&&a[p]!=="0"&&(c=a[p]);if(o&&m.length&&c)for(let p=0;p<m.length;p++){const u=m[p];a[u]=t2(t,c)}return a}function ek({when:e,delay:t,delayChildren:i,staggerChildren:n,staggerDirection:o,repeat:a,repeatType:s,repeatDelay:c,from:m,elapsed:p,...u}){return!!Object.keys(u).length}function k0(e,t){return e[t]||e.default||e}const tk={skipAnimations:!1},j0=(e,t,i,n={})=>o=>{const a=k0(n,e)||{},s=a.delay||n.delay||0;let{elapsed:c=0}=n;c=c-nn(s);const m=J3(t,e,i,a),p=m[0],u=m[m.length-1],h=_c(e,p),f=_c(e,u);let g={keyframes:m,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-c,onUpdate:w=>{t.set(w),a.onUpdate&&a.onUpdate(w)},onComplete:()=>{o(),a.onComplete&&a.onComplete()}};if(ek(a)||(g={...g,...Y3(e,g)}),g.duration&&(g.duration=nn(g.duration)),g.repeatDelay&&(g.repeatDelay=nn(g.repeatDelay)),!h||!f||Kb.current||a.type===!1||tk.skipAnimations)return O3(g);if(!n.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const w=N3(t,e,g);if(w)return w}return Cs(g)};function zs(e){return!!(Ze(e)&&e.add)}const n2=e=>/^\-?\d*\.?\d+$/.test(e);function $0(e,t){e.indexOf(t)===-1&&e.push(t)}function S0(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}class C0{constructor(){this.subscriptions=[]}add(t){return $0(this.subscriptions,t),()=>S0(this.subscriptions,t)}notify(t,i,n){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,i,n);else for(let a=0;a<o;a++){const s=this.subscriptions[a];s&&s(t,i,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ik=e=>!isNaN(parseFloat(e)),Kr={current:void 0};class nk{constructor(t,i={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(n,o=!0)=>{this.prev=this.current,this.current=n;const{delta:a,timestamp:s}=Ce;this.lastUpdated!==s&&(this.timeDelta=a,this.lastUpdated=s,K.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>K.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=ik(this.current),this.owner=i.owner}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new C0);const n=this.events[t].add(i);return t==="change"?()=>{n(),K.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t,i=!0){!i||!this.passiveEffect?this.updateAndNotify(t,i):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,i,n){this.set(i),this.prev=t,this.timeDelta=n}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Kr.current&&Kr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?v0(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function wt(e,t){return new nk(e,t)}const r2=e=>t=>t.test(e),rk={test:e=>e==="auto",parse:e=>e},o2=[gn,F,Rt,ai,mb,cb,rk],$r=e=>o2.find(r2(e)),ok=[...o2,Ee,Ei],ak=e=>ok.find(r2(e));function sk(e,t,i){e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,wt(i))}function lk(e,t){const i=sl(e,t);let{transitionEnd:n={},transition:o={},...a}=i?e.makeTargetAnimatable(i,!1):{};a={...a,...n};for(const s in a){const c=Sb(a[s]);sk(e,s,c)}}function dk(e,t,i){var n,o;const a=Object.keys(t).filter(c=>!e.hasValue(c)),s=a.length;if(s)for(let c=0;c<s;c++){const m=a[c],p=t[m];let u=null;Array.isArray(p)&&(u=p[0]),u===null&&(u=(o=(n=i[m])!==null&&n!==void 0?n:e.readValue(m))!==null&&o!==void 0?o:t[m]),u!=null&&(typeof u=="string"&&(n2(u)||i2(u))?u=parseFloat(u):!ak(u)&&Ei.test(p)&&(u=t2(m,p)),e.addValue(m,wt(u,{owner:e})),i[m]===void 0&&(i[m]=u),u!==null&&e.setBaseTarget(m,u))}}function ck(e,t){return t?(t[e]||t.default||t).from:void 0}function mk(e,t,i){const n={};for(const o in e){const a=ck(o,t);if(a!==void 0)n[o]=a;else{const s=i.getValue(o);s&&(n[o]=s.get())}}return n}function pk({protectedKeys:e,needsAnimating:t},i){const n=e.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,n}function hk(e,t){const i=e.get();if(Array.isArray(t)){for(let n=0;n<t.length;n++)if(t[n]!==i)return!0}else return i!==t}function a2(e,t,{delay:i=0,transitionOverride:n,type:o}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:s,...c}=e.makeTargetAnimatable(t);const m=e.getValue("willChange");n&&(a=n);const p=[],u=o&&e.animationState&&e.animationState.getState()[o];for(const h in c){const f=e.getValue(h),g=c[h];if(!f||g===void 0||u&&pk(u,h))continue;const w={delay:i,elapsed:0,...k0(a||{},h)};if(window.HandoffAppearAnimations){const v=e.getProps()[d1];if(v){const x=window.HandoffAppearAnimations(v,h,f,K);x!==null&&(w.elapsed=x,w.isHandoff=!0)}}let b=!w.isHandoff&&!hk(f,g);if(w.type==="spring"&&(f.getVelocity()||w.velocity)&&(b=!1),f.animation&&(b=!1),b)continue;f.start(j0(h,f,g,e.shouldReduceMotion&&fn.has(h)?{type:!1}:w));const C=f.animation;zs(m)&&(m.add(h),C.then(()=>m.remove(h))),p.push(C)}return s&&Promise.all(p).then(()=>{s&&lk(e,s)}),p}function Uc(e,t,i={}){const n=sl(e,t,i.custom);let{transition:o=e.getDefaultTransition()||{}}=n||{};i.transitionOverride&&(o=i.transitionOverride);const a=n?()=>Promise.all(a2(e,n,i)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:p=0,staggerChildren:u,staggerDirection:h}=o;return uk(e,t,p+m,u,h,i)}:()=>Promise.resolve(),{when:c}=o;if(c){const[m,p]=c==="beforeChildren"?[a,s]:[s,a];return m().then(()=>p())}else return Promise.all([a(),s(i.delay)])}function uk(e,t,i=0,n=0,o=1,a){const s=[],c=(e.variantChildren.size-1)*n,m=o===1?(p=0)=>p*n:(p=0)=>c-p*n;return Array.from(e.variantChildren).sort(fk).forEach((p,u)=>{p.notify("AnimationStart",t),s.push(Uc(p,t,{...a,delay:i+m(u)}).then(()=>p.notify("AnimationComplete",t)))}),Promise.all(s)}function fk(e,t){return e.sortNodePosition(t)}function gk(e,t,i={}){e.notify("AnimationStart",t);let n;if(Array.isArray(t)){const o=t.map(a=>Uc(e,a,i));n=Promise.all(o)}else if(typeof t=="string")n=Uc(e,t,i);else{const o=typeof t=="function"?sl(e,t,i.custom):t;n=Promise.all(a2(e,o,i))}return n.then(()=>e.notify("AnimationComplete",t))}const xk=[...a0].reverse(),yk=a0.length;function wk(e){return t=>Promise.all(t.map(({animation:i,options:n})=>gk(e,i,n)))}function vk(e){let t=wk(e);const i=kk();let n=!0;const o=(m,p)=>{const u=sl(e,p);if(u){const{transition:h,transitionEnd:f,...g}=u;m={...m,...g,...f}}return m};function a(m){t=m(e)}function s(m,p){const u=e.getProps(),h=e.getVariantContext(!0)||{},f=[],g=new Set;let w={},b=1/0;for(let v=0;v<yk;v++){const x=xk[v],y=i[x],$=u[x]!==void 0?u[x]:h[x],z=bo($),T=x===p?y.isActive:null;T===!1&&(b=v);let S=$===h[x]&&$!==u[x]&&z;if(S&&n&&e.manuallyAnimateOnMount&&(S=!1),y.protectedKeys={...w},!y.isActive&&T===null||!$&&!y.prevProp||nl($)||typeof $=="boolean")continue;let E=bk(y.prevProp,$)||x===p&&y.isActive&&!S&&z||v>b&&z,L=!1;const V=Array.isArray($)?$:[$];let Q=V.reduce(o,{});T===!1&&(Q={});const{prevResolvedValues:ne={}}=y,X={...ne,...Q},Ye=H=>{E=!0,g.has(H)&&(L=!0,g.delete(H)),y.needsAnimating[H]=!0};for(const H in X){const he=Q[H],A=ne[H];if(w.hasOwnProperty(H))continue;let R=!1;js(he)&&js(A)?R=!M1(he,A):R=he!==A,R?he!==void 0?Ye(H):g.add(H):he!==void 0&&g.has(H)?Ye(H):y.protectedKeys[H]=!0}y.prevProp=$,y.prevResolvedValues=Q,y.isActive&&(w={...w,...Q}),n&&e.blockInitialAnimation&&(E=!1),E&&(!S||L)&&f.push(...V.map(H=>({animation:H,options:{type:x,...m}})))}if(g.size){const v={};g.forEach(x=>{const y=e.getBaseTarget(x);y!==void 0&&(v[x]=y)}),f.push({animation:v})}let C=!!f.length;return n&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(C=!1),n=!1,C?t(f):Promise.resolve()}function c(m,p,u){var h;if(i[m].isActive===p)return Promise.resolve();(h=e.variantChildren)===null||h===void 0||h.forEach(g=>{var w;return(w=g.animationState)===null||w===void 0?void 0:w.setActive(m,p)}),i[m].isActive=p;const f=s(u,m);for(const g in i)i[g].protectedKeys={};return f}return{animateChanges:s,setActive:c,setAnimateFunction:a,getState:()=>i}}function bk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!M1(t,e):!1}function Wi(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function kk(){return{animate:Wi(!0),whileInView:Wi(),whileHover:Wi(),whileTap:Wi(),whileDrag:Wi(),whileFocus:Wi(),exit:Wi()}}class jk extends Fi{constructor(t){super(t),t.animationState||(t.animationState=vk(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),nl(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){}}let $k=0;class Sk extends Fi{constructor(){super(...arguments),this.id=$k++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i,custom:n}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const a=this.node.animationState.setActive("exit",!t,{custom:n??this.node.getProps().custom});i&&!t&&a.then(()=>i(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Ck={animation:{Feature:jk},exit:{Feature:Sk}},bh=(e,t)=>Math.abs(e-t);function zk(e,t){const i=bh(e.x,t.x),n=bh(e.y,t.y);return Math.sqrt(i**2+n**2)}class s2{constructor(t,i,{transformPagePoint:n,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=td(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=zk(h.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:w}=h,{timestamp:b}=Ce;this.history.push({...w,timestamp:b});const{onStart:C,onMove:v}=this.handlers;f||(C&&C(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,h)},this.handlePointerMove=(h,f)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=ed(f,this.transformPagePoint),K.update(this.updatePoint,!0)},this.handlePointerUp=(h,f)=>{this.end();const{onEnd:g,onSessionEnd:w,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=td(h.type==="pointercancel"?this.lastMoveEventInfo:ed(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(h,C),w&&w(h,C)},!S1(t))return;this.dragSnapToOrigin=a,this.handlers=i,this.transformPagePoint=n,this.contextWindow=o||window;const s=al(t),c=ed(s,this.transformPagePoint),{point:m}=c,{timestamp:p}=Ce;this.history=[{...m,timestamp:p}];const{onSessionStart:u}=i;u&&u(t,td(c,this.history)),this.removeListeners=Ti(Qt(this.contextWindow,"pointermove",this.handlePointerMove),Qt(this.contextWindow,"pointerup",this.handlePointerUp),Qt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),$t(this.updatePoint)}}function ed(e,t){return t?{point:t(e.point)}:e}function kh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function td({point:e},t){return{point:e,delta:kh(e,l2(t)),offset:kh(e,Tk(t)),velocity:Pk(t,.1)}}function Tk(e){return e[0]}function l2(e){return e[e.length-1]}function Pk(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,n=null;const o=l2(e);for(;i>=0&&(n=e[i],!(o.timestamp-n.timestamp>nn(t)));)i--;if(!n)return{x:0,y:0};const a=Gt(o.timestamp-n.timestamp);if(a===0)return{x:0,y:0};const s={x:(o.x-n.x)/a,y:(o.y-n.y)/a};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function et(e){return e.max-e.min}function Zc(e,t=0,i=.01){return Math.abs(e-t)<=i}function jh(e,t,i,n=.5){e.origin=n,e.originPoint=se(t.min,t.max,e.origin),e.scale=et(i)/et(t),(Zc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=se(i.min,i.max,e.origin)-e.originPoint,(Zc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function qr(e,t,i,n){jh(e.x,t.x,i.x,n?n.originX:void 0),jh(e.y,t.y,i.y,n?n.originY:void 0)}function $h(e,t,i){e.min=i.min+t.min,e.max=e.min+et(t)}function Mk(e,t,i){$h(e.x,t.x,i.x),$h(e.y,t.y,i.y)}function Sh(e,t,i){e.min=t.min-i.min,e.max=e.min+et(t)}function Xr(e,t,i){Sh(e.x,t.x,i.x),Sh(e.y,t.y,i.y)}function Ak(e,{min:t,max:i},n){return t!==void 0&&e<t?e=n?se(t,e,n.min):Math.max(e,t):i!==void 0&&e>i&&(e=n?se(i,e,n.max):Math.min(e,i)),e}function Ch(e,t,i){return{min:t!==void 0?e.min+t:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function Lk(e,{top:t,left:i,bottom:n,right:o}){return{x:Ch(e.x,i,o),y:Ch(e.y,t,n)}}function zh(e,t){let i=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,n]=[n,i]),{min:i,max:n}}function Ek(e,t){return{x:zh(e.x,t.x),y:zh(e.y,t.y)}}function Ik(e,t){let i=.5;const n=et(e),o=et(t);return o>n?i=tr(t.min,t.max-n,e.min):n>o&&(i=tr(e.min,e.max-o,t.min)),Li(0,1,i)}function Rk(e,t){const i={};return t.min!==void 0&&(i.min=t.min-e.min),t.max!==void 0&&(i.max=t.max-e.min),i}const Yc=.35;function Bk(e=Yc){return e===!1?e=0:e===!0&&(e=Yc),{x:Th(e,"left","right"),y:Th(e,"top","bottom")}}function Th(e,t,i){return{min:Ph(e,t),max:Ph(e,i)}}function Ph(e,t){return typeof e=="number"?e:e[t]||0}const Mh=()=>({translate:0,scale:1,origin:0,originPoint:0}),Wn=()=>({x:Mh(),y:Mh()}),Ah=()=>({min:0,max:0}),fe=()=>({x:Ah(),y:Ah()});function rt(e){return[e("x"),e("y")]}function d2({top:e,left:t,right:i,bottom:n}){return{x:{min:t,max:i},y:{min:e,max:n}}}function Fk({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Wk(e,t){if(!t)return e;const i=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}function id(e){return e===void 0||e===1}function Qc({scale:e,scaleX:t,scaleY:i}){return!id(e)||!id(t)||!id(i)}function Hi(e){return Qc(e)||c2(e)||e.z||e.rotate||e.rotateX||e.rotateY}function c2(e){return Lh(e.x)||Lh(e.y)}function Lh(e){return e&&e!=="0%"}function Ts(e,t,i){const n=e-i,o=t*n;return i+o}function Eh(e,t,i,n,o){return o!==void 0&&(e=Ts(e,o,n)),Ts(e,i,n)+t}function Gc(e,t=0,i=1,n,o){e.min=Eh(e.min,t,i,n,o),e.max=Eh(e.max,t,i,n,o)}function m2(e,{x:t,y:i}){Gc(e.x,t.translate,t.scale,t.originPoint),Gc(e.y,i.translate,i.scale,i.originPoint)}function Dk(e,t,i,n=!1){const o=i.length;if(!o)return;t.x=t.y=1;let a,s;for(let c=0;c<o;c++){a=i[c],s=a.projectionDelta;const m=a.instance;m&&m.style&&m.style.display==="contents"||(n&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Dn(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,m2(e,s)),n&&Hi(a.latestValues)&&Dn(e,a.latestValues))}t.x=Ih(t.x),t.y=Ih(t.y)}function Ih(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function mi(e,t){e.min=e.min+t,e.max=e.max+t}function Rh(e,t,[i,n,o]){const a=t[o]!==void 0?t[o]:.5,s=se(e.min,e.max,a);Gc(e,t[i],t[n],s,t.scale)}const Vk=["x","scaleX","originX"],Nk=["y","scaleY","originY"];function Dn(e,t){Rh(e.x,t,Vk),Rh(e.y,t,Nk)}function p2(e,t){return d2(Wk(e.getBoundingClientRect(),t))}function Ok(e,t,i){const n=p2(e,i),{scroll:o}=t;return o&&(mi(n.x,o.offset.x),mi(n.y,o.offset.y)),n}const h2=({current:e})=>e?e.ownerDocument.defaultView:null,_k=new WeakMap;class Hk{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=fe(),this.visualElement=t}start(t,{snapToCursor:i=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const o=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(al(u,"page").point)},a=(u,h)=>{const{drag:f,dragPropagation:g,onDragStart:w}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=z1(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),rt(C=>{let v=this.getAxisMotionValue(C).get()||0;if(Rt.test(v)){const{projection:x}=this.visualElement;if(x&&x.layout){const y=x.layout.layoutBox[C];y&&(v=et(y)*(parseFloat(v)/100))}}this.originPoint[C]=v}),w&&K.update(()=>w(u,h),!1,!0);const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},s=(u,h)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:w,onDrag:b}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:C}=h;if(g&&this.currentDirection===null){this.currentDirection=Uk(C),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",h.point,C),this.updateAxis("y",h.point,C),this.visualElement.render(),b&&b(u,h)},c=(u,h)=>this.stop(u,h),m=()=>rt(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new s2(t,{onSessionStart:o,onStart:a,onMove:s,onSessionEnd:c,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:h2(this.visualElement)})}stop(t,i){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&K.update(()=>a(t,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,n){const{drag:o}=this.getProps();if(!n||!ma(t,o,this.currentDirection))return;const a=this.getAxisMotionValue(t);let s=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(s=Ak(s,this.constraints[t],this.elastic[t])),a.set(s)}resolveConstraints(){var t;const{dragConstraints:i,dragElastic:n}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;i&&Bn(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&o?this.constraints=Lk(o.layoutBox,i):this.constraints=!1,this.elastic=Bk(n),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&rt(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=Rk(o.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!Bn(t))return!1;const n=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=Ok(n,o.root,this.visualElement.getTransformPagePoint());let s=Ek(o.layout.layoutBox,a);if(i){const c=i(Fk(s));this.hasMutatedConstraints=!!c,c&&(s=d2(c))}return s}startAnimation(t){const{drag:i,dragMomentum:n,dragElastic:o,dragTransition:a,dragSnapToOrigin:s,onDragTransitionEnd:c}=this.getProps(),m=this.constraints||{},p=rt(u=>{if(!ma(u,i,this.currentDirection))return;let h=m&&m[u]||{};s&&(h={min:0,max:0});const f=o?200:1e6,g=o?40:1e7,w={type:"inertia",velocity:n?t[u]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...a,...h};return this.startAxisValueAnimation(u,w)});return Promise.all(p).then(c)}startAxisValueAnimation(t,i){const n=this.getAxisMotionValue(t);return n.start(j0(t,n,0,i))}stopAnimation(){rt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){rt(t=>{var i;return(i=this.getAxisMotionValue(t).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(t){var i;return(i=this.getAxisMotionValue(t).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(t){const i="_drag"+t.toUpperCase(),n=this.visualElement.getProps(),o=n[i];return o||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){rt(i=>{const{drag:n}=this.getProps();if(!ma(i,n,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(i);if(o&&o.layout){const{min:s,max:c}=o.layout.layoutBox[i];a.set(t[i]-se(s,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!Bn(i)||!n||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};rt(s=>{const c=this.getAxisMotionValue(s);if(c){const m=c.get();o[s]=Ik({min:m,max:m},this.constraints[s])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),rt(s=>{if(!ma(s,t,null))return;const c=this.getAxisMotionValue(s),{min:m,max:p}=this.constraints[s];c.set(se(m,p,o[s]))})}addListeners(){if(!this.visualElement.current)return;_k.set(this.visualElement,this);const t=this.visualElement.current,i=Qt(t,"pointerdown",m=>{const{drag:p,dragListener:u=!0}=this.getProps();p&&u&&this.start(m)}),n=()=>{const{dragConstraints:m}=this.getProps();Bn(m)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",n);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),n();const s=Zt(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p})=>{this.isDragging&&p&&(rt(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=m[u].translate,h.set(h.get()+m[u].translate))}),this.visualElement.render())});return()=>{s(),i(),a(),c&&c()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:s=Yc,dragMomentum:c=!0}=t;return{...t,drag:i,dragDirectionLock:n,dragPropagation:o,dragConstraints:a,dragElastic:s,dragMomentum:c}}}function ma(e,t,i){return(t===!0||t===e)&&(i===null||i===e)}function Uk(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}class Zk extends Fi{constructor(t){super(t),this.removeGroupControls=pe,this.removeListeners=pe,this.controls=new Hk(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||pe}unmount(){this.removeGroupControls(),this.removeListeners()}}const Bh=e=>(t,i)=>{e&&K.update(()=>e(t,i))};class Yk extends Fi{constructor(){super(...arguments),this.removePointerDownListener=pe}onPointerDown(t){this.session=new s2(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:h2(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:n,onPanEnd:o}=this.node.getProps();return{onSessionStart:Bh(t),onStart:Bh(i),onMove:n,onEnd:(a,s)=>{delete this.session,o&&K.update(()=>o(a,s))}}}mount(){this.removePointerDownListener=Qt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Qk(){const e=k.useContext(tl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:n}=e,o=k.useId();return k.useEffect(()=>n(o),[]),!t&&i?[!1,()=>i&&i(o)]:[!0]}const Na={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Fh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Sr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(F.test(e))e=parseFloat(e);else return e;const i=Fh(e,t.target.x),n=Fh(e,t.target.y);return`${i}% ${n}%`}},Gk={correct:(e,{treeScale:t,projectionDelta:i})=>{const n=e,o=Ei.parse(e);if(o.length>5)return n;const a=Ei.createTransformer(e),s=typeof o[0]!="number"?1:0,c=i.x.scale*t.x,m=i.y.scale*t.y;o[0+s]/=c,o[1+s]/=m;const p=se(c,m,.5);return typeof o[2+s]=="number"&&(o[2+s]/=p),typeof o[3+s]=="number"&&(o[3+s]/=p),a(o)}};class Kk extends ae.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:n,layoutId:o}=this.props,{projection:a}=t;nb(qk),a&&(i.group&&i.group.add(a),n&&n.register&&o&&n.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Na.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:n,drag:o,isPresent:a}=this.props,s=n.projection;return s&&(s.isPresent=a,o||t.layoutDependency!==i||i===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?s.promote():s.relegate()||K.postRender(()=>{const c=s.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(o),n&&n.deregister&&n.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function u2(e){const[t,i]=Qk(),n=k.useContext(l0);return ae.createElement(Kk,{...e,layoutGroup:n,switchLayoutGroup:k.useContext(m1),isPresent:t,safeToRemove:i})}const qk={borderRadius:{...Sr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Sr,borderTopRightRadius:Sr,borderBottomLeftRadius:Sr,borderBottomRightRadius:Sr,boxShadow:Gk},f2=["TopLeft","TopRight","BottomLeft","BottomRight"],Xk=f2.length,Wh=e=>typeof e=="string"?parseFloat(e):e,Dh=e=>typeof e=="number"||F.test(e);function Jk(e,t,i,n,o,a){o?(e.opacity=se(0,i.opacity!==void 0?i.opacity:1,e4(n)),e.opacityExit=se(t.opacity!==void 0?t.opacity:1,0,t4(n))):a&&(e.opacity=se(t.opacity!==void 0?t.opacity:1,i.opacity!==void 0?i.opacity:1,n));for(let s=0;s<Xk;s++){const c=`border${f2[s]}Radius`;let m=Vh(t,c),p=Vh(i,c);if(m===void 0&&p===void 0)continue;m||(m=0),p||(p=0),m===0||p===0||Dh(m)===Dh(p)?(e[c]=Math.max(se(Wh(m),Wh(p),n),0),(Rt.test(p)||Rt.test(m))&&(e[c]+="%")):e[c]=p}(t.rotate||i.rotate)&&(e.rotate=se(t.rotate||0,i.rotate||0,n))}function Vh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const e4=g2(0,.5,D1),t4=g2(.5,.95,pe);function g2(e,t,i){return n=>n<e?0:n>t?1:i(tr(e,t,n))}function Nh(e,t){e.min=t.min,e.max=t.max}function nt(e,t){Nh(e.x,t.x),Nh(e.y,t.y)}function Oh(e,t,i,n,o){return e-=t,e=Ts(e,1/i,n),o!==void 0&&(e=Ts(e,1/o,n)),e}function i4(e,t=0,i=1,n=.5,o,a=e,s=e){if(Rt.test(t)&&(t=parseFloat(t),t=se(s.min,s.max,t/100)-s.min),typeof t!="number")return;let c=se(a.min,a.max,n);e===a&&(c-=t),e.min=Oh(e.min,t,i,c,o),e.max=Oh(e.max,t,i,c,o)}function _h(e,t,[i,n,o],a,s){i4(e,t[i],t[n],t[o],t.scale,a,s)}const n4=["x","scaleX","originX"],r4=["y","scaleY","originY"];function Hh(e,t,i,n){_h(e.x,t,n4,i?i.x:void 0,n?n.x:void 0),_h(e.y,t,r4,i?i.y:void 0,n?n.y:void 0)}function Uh(e){return e.translate===0&&e.scale===1}function x2(e){return Uh(e.x)&&Uh(e.y)}function o4(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function y2(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Zh(e){return et(e.x)/et(e.y)}class a4{constructor(){this.members=[]}add(t){$0(this.members,t),t.scheduleRender()}remove(t){if(S0(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(o=>t===o);if(i===0)return!1;let n;for(let o=i;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){n=a;break}}return n?(this.promote(n),!0):!1}promote(t,i){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,i&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:n}=t;i.onExitComplete&&i.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Yh(e,t,i){let n="";const o=e.x.translate/t.x,a=e.y.translate/t.y;if((o||a)&&(n=`translate3d(${o}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),i){const{rotate:m,rotateX:p,rotateY:u}=i;m&&(n+=`rotate(${m}deg) `),p&&(n+=`rotateX(${p}deg) `),u&&(n+=`rotateY(${u}deg) `)}const s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(n+=`scale(${s}, ${c})`),n||"none"}const s4=(e,t)=>e.depth-t.depth;class l4{constructor(){this.children=[],this.isDirty=!1}add(t){$0(this.children,t),this.isDirty=!0}remove(t){S0(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(s4),this.isDirty=!1,this.children.forEach(t)}}function d4(e,t){const i=performance.now(),n=({timestamp:o})=>{const a=o-i;a>=t&&($t(n),e(a-t))};return K.read(n,!0),()=>$t(n)}function c4(e){window.MotionDebug&&window.MotionDebug.record(e)}function m4(e){return e instanceof SVGElement&&e.tagName!=="svg"}function p4(e,t,i){const n=Ze(e)?e:wt(e);return n.start(j0("",n,t,i)),n.animation}const Qh=["","X","Y","Z"],h4={visibility:"hidden"},Gh=1e3;let u4=0;const Ui={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function w2({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:n,resetTransform:o}){return class{constructor(s={},c=t==null?void 0:t()){this.id=u4++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ui.totalNodes=Ui.resolvedTargetDeltas=Ui.recalculatedProjection=0,this.nodes.forEach(x4),this.nodes.forEach(k4),this.nodes.forEach(j4),this.nodes.forEach(y4),c4(Ui)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new l4)}addEventListener(s,c){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new C0),this.eventHandlers.get(s).add(c)}notifyListeners(s,...c){const m=this.eventHandlers.get(s);m&&m.notify(...c)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=m4(s),this.instance=s;const{layoutId:m,layout:p,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(p||m)&&(this.isLayoutDirty=!0),e){let h;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=d4(f,250),Na.hasAnimatedSinceResize&&(Na.hasAnimatedSinceResize=!1,this.nodes.forEach(qh))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&u&&(m||p)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||u.getDefaultTransition()||T4,{onLayoutAnimationStart:C,onLayoutAnimationComplete:v}=u.getProps(),x=!this.targetLayout||!y2(this.targetLayout,w)||g,y=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,y);const $={...k0(b,"layout"),onPlay:C,onComplete:v};(u.shouldReduceMotion||this.options.layoutRoot)&&($.delay=0,$.type=!1),this.startAnimation($)}else f||qh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,$t(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach($4),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:c,layout:m}=this.options;if(c===void 0&&!m)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Kh);return}this.isUpdating||this.nodes.forEach(v4),this.isUpdating=!1,this.nodes.forEach(b4),this.nodes.forEach(f4),this.nodes.forEach(g4),this.clearAllSnapshots();const c=performance.now();Ce.delta=Li(0,1e3/60,c-Ce.timestamp),Ce.timestamp=c,Ce.isProcessing=!0,Zl.update.process(Ce),Zl.preRender.process(Ce),Zl.render.process(Ce),Ce.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(w4),this.sharedNodes.forEach(S4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,K.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){K.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=fe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let c=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(c=!1),c&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:n(this.instance),offset:i(this.instance)})}resetTransform(){if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,c=this.projectionDelta&&!x2(this.projectionDelta),m=this.getTransformTemplate(),p=m?m(this.latestValues,""):void 0,u=p!==this.prevTransformTemplateValue;s&&(c||Hi(this.latestValues)||u)&&(o(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const c=this.measurePageBox();let m=this.removeElementScroll(c);return s&&(m=this.removeTransform(m)),P4(m),{animationId:this.root.animationId,measuredBox:c,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return fe();const c=s.measureViewportBox(),{scroll:m}=this.root;return m&&(mi(c.x,m.offset.x),mi(c.y,m.offset.y)),c}removeElementScroll(s){const c=fe();nt(c,s);for(let m=0;m<this.path.length;m++){const p=this.path[m],{scroll:u,options:h}=p;if(p!==this.root&&u&&h.layoutScroll){if(u.isRoot){nt(c,s);const{scroll:f}=this.root;f&&(mi(c.x,-f.offset.x),mi(c.y,-f.offset.y))}mi(c.x,u.offset.x),mi(c.y,u.offset.y)}}return c}applyTransform(s,c=!1){const m=fe();nt(m,s);for(let p=0;p<this.path.length;p++){const u=this.path[p];!c&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Dn(m,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Hi(u.latestValues)&&Dn(m,u.latestValues)}return Hi(this.latestValues)&&Dn(m,this.latestValues),m}removeTransform(s){const c=fe();nt(c,s);for(let m=0;m<this.path.length;m++){const p=this.path[m];if(!p.instance||!Hi(p.latestValues))continue;Qc(p.latestValues)&&p.updateSnapshot();const u=fe(),h=p.measurePageBox();nt(u,h),Hh(c,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,u)}return Hi(this.latestValues)&&Hh(c,this.latestValues),c}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ce.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var c;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==m;if(!(s||p&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=Ce.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fe(),this.relativeTargetOrigin=fe(),Xr(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=fe(),this.targetWithTransforms=fe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Mk(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):nt(this.target,this.layout.layoutBox),m2(this.target,this.targetDelta)):nt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fe(),this.relativeTargetOrigin=fe(),Xr(this.relativeTargetOrigin,this.target,g.target),nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ui.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Qc(this.parent.latestValues)||c2(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const c=this.getLead(),m=!!this.resumingFrom||this!==c;let p=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(p=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Ce.timestamp&&(p=!1),p)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;nt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;Dk(this.layoutCorrected,this.treeScale,this.path,m),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox);const{target:w}=c;if(!w){this.projectionTransform&&(this.projectionDelta=Wn(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Wn(),this.projectionDeltaWithTransform=Wn());const b=this.projectionTransform;qr(this.projectionDelta,this.layoutCorrected,w,this.latestValues),this.projectionTransform=Yh(this.projectionDelta,this.treeScale),(this.projectionTransform!==b||this.treeScale.x!==f||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w)),Ui.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,c=!1){const m=this.snapshot,p=m?m.latestValues:{},u={...this.latestValues},h=Wn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const f=fe(),g=m?m.source:void 0,w=this.layout?this.layout.source:void 0,b=g!==w,C=this.getStack(),v=!C||C.members.length<=1,x=!!(b&&!v&&this.options.crossfade===!0&&!this.path.some(z4));this.animationProgress=0;let y;this.mixTargetDelta=$=>{const z=$/1e3;Xh(h.x,s.x,z),Xh(h.y,s.y,z),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Xr(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),C4(this.relativeTarget,this.relativeTargetOrigin,f,z),y&&o4(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=fe()),nt(y,this.relativeTarget)),b&&(this.animationValues=u,Jk(u,p,this.latestValues,z,x,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&($t(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=K.update(()=>{Na.hasAnimatedSinceResize=!0,this.currentAnimation=p4(0,Gh,{...s,onUpdate:c=>{this.mixTargetDelta(c),s.onUpdate&&s.onUpdate(c)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Gh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:c,target:m,layout:p,latestValues:u}=s;if(!(!c||!m||!p)){if(this!==s&&this.layout&&p&&v2(this.options.animationType,this.layout.layoutBox,p.layoutBox)){m=this.target||fe();const h=et(this.layout.layoutBox.x);m.x.min=s.target.x.min,m.x.max=m.x.min+h;const f=et(this.layout.layoutBox.y);m.y.min=s.target.y.min,m.y.max=m.y.min+f}nt(c,m),Dn(c,u),qr(this.projectionDeltaWithTransform,this.layoutCorrected,c,u)}}registerSharedNode(s,c){this.sharedNodes.has(s)||this.sharedNodes.set(s,new a4),this.sharedNodes.get(s).add(c);const p=c.options.initialPromotionConfig;c.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(c):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:c}=this.options;return c?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:c}=this.options;return c?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:c,preserveFollowOpacity:m}={}){const p=this.getStack();p&&p.promote(this,m),s&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let c=!1;const{latestValues:m}=s;if((m.rotate||m.rotateX||m.rotateY||m.rotateZ)&&(c=!0),!c)return;const p={};for(let u=0;u<Qh.length;u++){const h="rotate"+Qh[u];m[h]&&(p[h]=m[h],s.setStaticValue(h,0))}s.render();for(const u in p)s.setStaticValue(u,p[u]);s.scheduleRender()}getProjectionStyles(s){var c,m;if(!this.instance||this.isSVG)return;if(!this.isVisible)return h4;const p={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,p.opacity="",p.pointerEvents=Va(s==null?void 0:s.pointerEvents)||"",p.transform=u?u(this.latestValues,""):"none",p;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=Va(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Hi(this.latestValues)&&(b.transform=u?u({},""):"none",this.hasProjected=!1),b}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),p.transform=Yh(this.projectionDeltaWithTransform,this.treeScale,f),u&&(p.transform=u(f,p.transform));const{x:g,y:w}=this.projectionDelta;p.transformOrigin=`${g.origin*100}% ${w.origin*100}% 0`,h.animationValues?p.opacity=h===this?(m=(c=f.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&m!==void 0?m:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:p.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const b in bs){if(f[b]===void 0)continue;const{correct:C,applyTo:v}=bs[b],x=p.transform==="none"?f[b]:C(f[b],h);if(v){const y=v.length;for(let $=0;$<y;$++)p[v[$]]=x}else p[b]=x}return this.options.layoutId&&(p.pointerEvents=h===this?Va(s==null?void 0:s.pointerEvents)||"":"none"),p}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var c;return(c=s.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(Kh),this.root.sharedNodes.clear()}}}function f4(e){e.updateLayout()}function g4(e){var t;const i=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:o}=e.layout,{animationType:a}=e.options,s=i.source!==e.layout.source;a==="size"?rt(h=>{const f=s?i.measuredBox[h]:i.layoutBox[h],g=et(f);f.min=n[h].min,f.max=f.min+g}):v2(a,i.layoutBox,n)&&rt(h=>{const f=s?i.measuredBox[h]:i.layoutBox[h],g=et(n[h]);f.max=f.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+g)});const c=Wn();qr(c,n,i.layoutBox);const m=Wn();s?qr(m,e.applyTransform(o,!0),i.measuredBox):qr(m,n,i.layoutBox);const p=!x2(c);let u=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:g}=h;if(f&&g){const w=fe();Xr(w,i.layoutBox,f.layoutBox);const b=fe();Xr(b,n,g.layoutBox),y2(w,b)||(u=!0),h.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=w,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:i,delta:m,layoutDelta:c,hasLayoutChanged:p,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:n}=e.options;n&&n()}e.options.transition=void 0}function x4(e){Ui.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function y4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function w4(e){e.clearSnapshot()}function Kh(e){e.clearMeasurements()}function v4(e){e.isLayoutDirty=!1}function b4(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function qh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function k4(e){e.resolveTargetDelta()}function j4(e){e.calcProjection()}function $4(e){e.resetRotation()}function S4(e){e.removeLeadSnapshot()}function Xh(e,t,i){e.translate=se(t.translate,0,i),e.scale=se(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function Jh(e,t,i,n){e.min=se(t.min,i.min,n),e.max=se(t.max,i.max,n)}function C4(e,t,i,n){Jh(e.x,t.x,i.x,n),Jh(e.y,t.y,i.y,n)}function z4(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const T4={duration:.45,ease:[.4,0,.1,1]},eu=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),tu=eu("applewebkit/")&&!eu("chrome/")?Math.round:pe;function iu(e){e.min=tu(e.min),e.max=tu(e.max)}function P4(e){iu(e.x),iu(e.y)}function v2(e,t,i){return e==="position"||e==="preserve-aspect"&&!Zc(Zh(t),Zh(i),.2)}const M4=w2({attachResizeListener:(e,t)=>Zt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),nd={current:void 0},b2=w2({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!nd.current){const e=new M4({});e.mount(window),e.setOptions({layoutScroll:!0}),nd.current=e}return nd.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),A4={pan:{Feature:Yk},drag:{Feature:Zk,ProjectionNode:b2,MeasureLayout:u2}},L4=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function E4(e){const t=L4.exec(e);if(!t)return[,];const[,i,n]=t;return[i,n]}function Kc(e,t,i=1){const[n,o]=E4(e);if(!n)return;const a=window.getComputedStyle(t).getPropertyValue(n);if(a){const s=a.trim();return n2(s)?parseFloat(s):s}else return Dc(o)?Kc(o,t,i+1):o}function I4(e,{...t},i){const n=e.current;if(!(n instanceof Element))return{target:t,transitionEnd:i};i&&(i={...i}),e.values.forEach(o=>{const a=o.get();if(!Dc(a))return;const s=Kc(a,n);s&&o.set(s)});for(const o in t){const a=t[o];if(!Dc(a))continue;const s=Kc(a,n);s&&(t[o]=s,i||(i={}),i[o]===void 0&&(i[o]=a))}return{target:t,transitionEnd:i}}const R4=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),k2=e=>R4.has(e),B4=e=>Object.keys(e).some(k2),nu=e=>e===gn||e===F,ru=(e,t)=>parseFloat(e.split(", ")[t]),ou=(e,t)=>(i,{transform:n})=>{if(n==="none"||!n)return 0;const o=n.match(/^matrix3d\((.+)\)$/);if(o)return ru(o[1],t);{const a=n.match(/^matrix\((.+)\)$/);return a?ru(a[1],e):0}},F4=new Set(["x","y","z"]),W4=Ro.filter(e=>!F4.has(e));function D4(e){const t=[];return W4.forEach(i=>{const n=e.getValue(i);n!==void 0&&(t.push([i,n.get()]),n.set(i.startsWith("scale")?1:0))}),t.length&&e.render(),t}const ir={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ou(4,13),y:ou(5,14)};ir.translateX=ir.x;ir.translateY=ir.y;const V4=(e,t,i)=>{const n=t.measureViewportBox(),o=t.current,a=getComputedStyle(o),{display:s}=a,c={};s==="none"&&t.setStaticValue("display",e.display||"block"),i.forEach(p=>{c[p]=ir[p](n,a)}),t.render();const m=t.measureViewportBox();return i.forEach(p=>{const u=t.getValue(p);u&&u.jump(c[p]),e[p]=ir[p](m,a)}),e},N4=(e,t,i={},n={})=>{t={...t},n={...n};const o=Object.keys(t).filter(k2);let a=[],s=!1;const c=[];if(o.forEach(m=>{const p=e.getValue(m);if(!e.hasValue(m))return;let u=i[m],h=$r(u);const f=t[m];let g;if(js(f)){const w=f.length,b=f[0]===null?1:0;u=f[b],h=$r(u);for(let C=b;C<w&&f[C]!==null;C++)g?g0($r(f[C])===g):g=$r(f[C])}else g=$r(f);if(h!==g)if(nu(h)&&nu(g)){const w=p.get();typeof w=="string"&&p.set(parseFloat(w)),typeof f=="string"?t[m]=parseFloat(f):Array.isArray(f)&&g===F&&(t[m]=f.map(parseFloat))}else h!=null&&h.transform&&(g!=null&&g.transform)&&(u===0||f===0)?u===0?p.set(g.transform(u)):t[m]=h.transform(f):(s||(a=D4(e),s=!0),c.push(m),n[m]=n[m]!==void 0?n[m]:t[m],p.jump(f))}),c.length){const m=c.indexOf("height")>=0?window.pageYOffset:null,p=V4(t,e,c);return a.length&&a.forEach(([u,h])=>{e.getValue(u).set(h)}),e.render(),il&&m!==null&&window.scrollTo({top:m}),{target:p,transitionEnd:n}}else return{target:t,transitionEnd:n}};function O4(e,t,i,n){return B4(t)?N4(e,t,i,n):{target:t,transitionEnd:n}}const _4=(e,t,i,n)=>{const o=I4(e,t,n);return t=o.target,n=o.transitionEnd,O4(e,t,i,n)},Ps={current:null},z0={current:!1};function j2(){if(z0.current=!0,!!il)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ps.current=e.matches;e.addListener(t),t()}else Ps.current=!1}function H4(e,t,i){const{willChange:n}=t;for(const o in t){const a=t[o],s=i[o];if(Ze(a))e.addValue(o,a),zs(n)&&n.add(o);else if(Ze(s))e.addValue(o,wt(a,{owner:e})),zs(n)&&n.remove(o);else if(s!==a)if(e.hasValue(o)){const c=e.getValue(o);!c.hasAnimated&&c.set(a)}else{const c=e.getStaticValue(o);e.addValue(o,wt(c!==void 0?c:a,{owner:e}))}}for(const o in i)t[o]===void 0&&e.removeValue(o);return t}const au=new WeakMap,$2=Object.keys(ko),U4=$2.length,su=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Z4=s0.length;class Y4{constructor({parent:t,props:i,presenceContext:n,reducedMotionConfig:o,visualState:a},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>K.render(this.render,!1,!0);const{latestValues:c,renderState:m}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=i.initial?{...c}:{},this.renderState=m,this.parent=t,this.props=i,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=s,this.isControllingVariants=rl(i),this.isVariantNode=c1(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:p,...u}=this.scrapeMotionValuesFromProps(i,{});for(const h in u){const f=u[h];c[h]!==void 0&&Ze(f)&&(f.set(c[h],!1),zs(p)&&p.add(h))}}scrapeMotionValuesFromProps(t,i){return{}}mount(t){this.current=t,au.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,n)=>this.bindToMotionValue(n,i)),z0.current||j2(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ps.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){au.delete(this.current),this.projection&&this.projection.unmount(),$t(this.notifyUpdate),$t(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,i){const n=fn.has(t),o=i.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&K.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),a=i.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...i},n,o,a){let s,c;for(let m=0;m<U4;m++){const p=$2[m],{isEnabled:u,Feature:h,ProjectionNode:f,MeasureLayout:g}=ko[p];f&&(s=f),u(i)&&(!this.features[p]&&h&&(this.features[p]=new h(this)),g&&(c=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:m,layout:p,drag:u,dragConstraints:h,layoutScroll:f,layoutRoot:g}=i;this.projection.setOptions({layoutId:m,layout:p,alwaysMeasureLayout:!!u||h&&Bn(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof p=="string"?p:"both",initialPromotionConfig:a,layoutScroll:f,layoutRoot:g})}return c}updateFeatures(){for(const t in this.features){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):fe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}makeTargetAnimatable(t,i=!0){return this.makeTargetAnimatableFromInstance(t,this.props,i)}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let n=0;n<su.length;n++){const o=su[n];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a=t["on"+o];a&&(this.propEventSubscriptions[o]=this.on(o,a))}this.prevMotionValues=H4(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const n=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(n.initial=this.props.initial),n}const i={};for(let n=0;n<Z4;n++){const o=s0[n],a=this.props[o];(bo(a)||a===!1)&&(i[o]=a)}return i}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){i!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,i)),this.values.set(t,i),this.latestValues[t]=i.get()}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&i!==void 0&&(n=wt(i,{owner:this}),this.addValue(t,n)),n}readValue(t){var i;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(i=this.getBaseTargetFromProps(this.props,t))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){var i;const{initial:n}=this.props,o=typeof n=="string"||typeof n=="object"?(i=f0(this.props,n))===null||i===void 0?void 0:i[t]:void 0;if(n&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!Ze(a)?a:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new C0),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}}class S2 extends Y4{sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:n}){delete i[t],delete n[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:i,...n},{transformValues:o},a){let s=mk(n,t||{},this);if(o&&(i&&(i=o(i)),n&&(n=o(n)),s&&(s=o(s))),a){dk(this,n,s);const c=_4(this,n,s,i);i=c.transitionEnd,n=c.target}return{transition:t,transitionEnd:i,...n}}}function Q4(e){return window.getComputedStyle(e)}class G4 extends S2{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,i){if(fn.has(i)){const n=b0(i);return n&&n.default||0}else{const n=Q4(t),o=(u1(i)?n.getPropertyValue(i):n[i])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:i}){return p2(t,i)}build(t,i,n,o){c0(t,i,n,o.transformTemplate)}scrapeMotionValuesFromProps(t,i){return u0(t,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ze(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}renderInstance(t,i,n,o){v1(t,i,n,o)}}class K4 extends S2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(fn.has(i)){const n=b0(i);return n&&n.default||0}return i=b1.has(i)?i:o0(i),t.getAttribute(i)}measureInstanceViewportBox(){return fe()}scrapeMotionValuesFromProps(t,i){return j1(t,i)}build(t,i,n,o){p0(t,i,n,this.isSVGTag,o.transformTemplate)}renderInstance(t,i,n,o){k1(t,i,n,o)}mount(t){this.isSVGTag=h0(t.tagName),super.mount(t)}}const q4=(e,t)=>d0(e)?new K4(t,{enableHardwareAcceleration:!1}):new G4(t,{enableHardwareAcceleration:!0}),X4={layout:{ProjectionNode:b2,MeasureLayout:u2}},J4={...Ck,...Zb,...A4,...X4},j=tb((e,t)=>Eb(e,t,J4,q4));function C2(){const e=k.useRef(!1);return Io(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function e6(){const e=C2(),[t,i]=k.useState(0),n=k.useCallback(()=>{e.current&&i(t+1)},[t]);return[k.useCallback(()=>K.postRender(n),[n]),t]}class t6 extends k.Component{getSnapshotBeforeUpdate(t){const i=this.props.childRef.current;if(i&&t.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=i.offsetHeight||0,n.width=i.offsetWidth||0,n.top=i.offsetTop,n.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function i6({children:e,isPresent:t}){const i=k.useId(),n=k.useRef(null),o=k.useRef({width:0,height:0,top:0,left:0});return k.useInsertionEffect(()=>{const{width:a,height:s,top:c,left:m}=o.current;if(t||!n.current||!a||!s)return;n.current.dataset.motionPopId=i;const p=document.createElement("style");return document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${c}px !important;
            left: ${m}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[t]),k.createElement(t6,{isPresent:t,childRef:n,sizeRef:o},k.cloneElement(e,{ref:n}))}const rd=({children:e,initial:t,isPresent:i,onExitComplete:n,custom:o,presenceAffectsLayout:a,mode:s})=>{const c=Wo(n6),m=k.useId(),p=k.useMemo(()=>({id:m,initial:t,isPresent:i,custom:o,onExitComplete:u=>{c.set(u,!0);for(const h of c.values())if(!h)return;n&&n()},register:u=>(c.set(u,!1),()=>c.delete(u))}),a?void 0:[i]);return k.useMemo(()=>{c.forEach((u,h)=>c.set(h,!1))},[i]),k.useEffect(()=>{!i&&!c.size&&n&&n()},[i]),s==="popLayout"&&(e=k.createElement(i6,{isPresent:i},e)),k.createElement(tl.Provider,{value:p},e)};function n6(){return new Map}function r6(e){return k.useEffect(()=>()=>e(),[])}const Zi=e=>e.key||"";function o6(e,t){e.forEach(i=>{const n=Zi(i);t.set(n,i)})}function a6(e){const t=[];return k.Children.forEach(e,i=>{k.isValidElement(i)&&t.push(i)}),t}const Bt=({children:e,custom:t,initial:i=!0,onExitComplete:n,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:s="sync"})=>{const c=k.useContext(l0).forceRender||e6()[0],m=C2(),p=a6(e);let u=p;const h=k.useRef(new Map).current,f=k.useRef(u),g=k.useRef(new Map).current,w=k.useRef(!0);if(Io(()=>{w.current=!1,o6(p,g),f.current=u}),r6(()=>{w.current=!0,g.clear(),h.clear()}),w.current)return k.createElement(k.Fragment,null,u.map(x=>k.createElement(rd,{key:Zi(x),isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:a,mode:s},x)));u=[...u];const b=f.current.map(Zi),C=p.map(Zi),v=b.length;for(let x=0;x<v;x++){const y=b[x];C.indexOf(y)===-1&&!h.has(y)&&h.set(y,void 0)}return s==="wait"&&h.size&&(u=[]),h.forEach((x,y)=>{if(C.indexOf(y)!==-1)return;const $=g.get(y);if(!$)return;const z=b.indexOf(y);let T=x;if(!T){const S=()=>{h.delete(y);const P=Array.from(g.keys()).filter(E=>!C.includes(E));if(P.forEach(E=>g.delete(E)),f.current=p.filter(E=>{const L=Zi(E);return L===y||P.includes(L)}),!h.size){if(m.current===!1)return;c(),n&&n()}};T=k.createElement(rd,{key:Zi($),isPresent:!1,onExitComplete:S,custom:t,presenceAffectsLayout:a,mode:s},$),h.set(y,T)}u.splice(z,0,T)}),u=u.map(x=>{const y=x.key;return h.has(y)?x:k.createElement(rd,{key:Zi(x),isPresent:!0,presenceAffectsLayout:a,mode:s},x)}),k.createElement(k.Fragment,null,h.size?u:u.map(x=>k.cloneElement(x)))};function s6(e){const t=Wo(()=>wt(e)),{isStatic:i}=k.useContext(r0);if(i){const[,n]=k.useState(e);k.useEffect(()=>t.on("change",n),[])}return t}const l6=e=>e&&typeof e=="object"&&e.mix,d6=e=>l6(e)?e.mix:void 0;function c6(...e){const t=!Array.isArray(e[0]),i=t?0:-1,n=e[0+i],o=e[1+i],a=e[2+i],s=e[3+i],c=ll(o,a,{mixer:d6(a[0]),...s});return t?c(n):c}function z2(e,t){const i=s6(t()),n=()=>i.set(t());return n(),Io(()=>{const o=()=>K.update(n,!1,!0),a=e.map(s=>s.on("change",o));return()=>{a.forEach(s=>s()),$t(n)}}),i}function m6(e){Kr.current=[],e();const t=z2(Kr.current,e);return Kr.current=void 0,t}function nr(e,t,i,n){if(typeof e=="function")return m6(e);const o=typeof t=="function"?t:c6(t,i,n);return Array.isArray(e)?lu(e,o):lu([e],([a])=>o(a))}function lu(e,t){const i=Wo(()=>[]);return z2(e,()=>{i.length=0;const n=e.length;for(let o=0;o<n;o++)i[o]=e[o].get();return t(i)})}function T2(e,t,i){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const Oa=new WeakMap;let si;function p6(e,t){if(t){const{inlineSize:i,blockSize:n}=t[0];return{width:i,height:n}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function h6({target:e,contentRect:t,borderBoxSize:i}){var n;(n=Oa.get(e))===null||n===void 0||n.forEach(o=>{o({target:e,contentSize:t,get size(){return p6(e,i)}})})}function u6(e){e.forEach(h6)}function f6(){typeof ResizeObserver>"u"||(si=new ResizeObserver(u6))}function g6(e,t){si||f6();const i=T2(e);return i.forEach(n=>{let o=Oa.get(n);o||(o=new Set,Oa.set(n,o)),o.add(t),si==null||si.observe(n)}),()=>{i.forEach(n=>{const o=Oa.get(n);o==null||o.delete(t),o!=null&&o.size||si==null||si.unobserve(n)})}}const _a=new Set;let Jr;function x6(){Jr=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};_a.forEach(i=>i(t))},window.addEventListener("resize",Jr)}function y6(e){return _a.add(e),Jr||x6(),()=>{_a.delete(e),!_a.size&&Jr&&(Jr=void 0)}}function w6(e,t){return typeof e=="function"?y6(e):g6(e,t)}const v6=50,du=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),b6=()=>({time:0,x:du(),y:du()}),k6={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function cu(e,t,i,n){const o=i[t],{length:a,position:s}=k6[t],c=o.current,m=i.time;o.current=e["scroll"+s],o.scrollLength=e["scroll"+a]-e["client"+a],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=tr(0,o.scrollLength,o.current);const p=n-m;o.velocity=p>v6?0:v0(o.current-c,p)}function j6(e,t,i){cu(e,"x",t,i),cu(e,"y",t,i),t.time=i}function $6(e,t){const i={x:0,y:0};let n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)i.x+=n.offsetLeft,i.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const o=n.getBoundingClientRect();n=n.parentElement;const a=n.getBoundingClientRect();i.x+=o.left-a.left,i.y+=o.top-a.top}else if(n instanceof SVGGraphicsElement){const{x:o,y:a}=n.getBBox();i.x+=o,i.y+=a;let s=null,c=n.parentNode;for(;!s;)c.tagName==="svg"&&(s=c),c=n.parentNode;n=s}else break;return i}const S6={All:[[0,0],[1,1]]},qc={start:0,center:.5,end:1};function mu(e,t,i=0){let n=0;if(qc[e]!==void 0&&(e=qc[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?n=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?n=o/100*document.documentElement.clientWidth:e.endsWith("vh")?n=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(n=t*e),i+n}const C6=[0,0];function z6(e,t,i,n){let o=Array.isArray(e)?e:C6,a=0,s=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,qc[e]?e:"0"]),a=mu(o[0],i,n),s=mu(o[1],t),a-s}const T6={x:0,y:0};function P6(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function M6(e,t,i){let{offset:n=S6.All}=i;const{target:o=e,axis:a="y"}=i,s=a==="y"?"height":"width",c=o!==e?$6(o,e):T6,m=o===e?{width:e.scrollWidth,height:e.scrollHeight}:P6(o),p={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let u=!t[a].interpolate;const h=n.length;for(let f=0;f<h;f++){const g=z6(n[f],p[s],m[s],c[a]);!u&&g!==t[a].interpolatorOffsets[f]&&(u=!0),t[a].offset[f]=g}u&&(t[a].interpolate=ll(t[a].offset,X1(n)),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=t[a].interpolate(t[a].current)}function A6(e,t=e,i){if(i.x.targetOffset=0,i.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)i.x.targetOffset+=n.offsetLeft,i.y.targetOffset+=n.offsetTop,n=n.offsetParent}i.x.targetLength=t===e?t.scrollWidth:t.clientWidth,i.y.targetLength=t===e?t.scrollHeight:t.clientHeight,i.x.containerLength=e.clientWidth,i.y.containerLength=e.clientHeight}function L6(e,t,i,n={}){return{measure:()=>A6(e,n.target,i),update:o=>{j6(e,i,o),(n.offset||n.target)&&M6(e,i,n)},notify:()=>t(i)}}const Cr=new WeakMap,pu=new WeakMap,od=new WeakMap,hu=e=>e===document.documentElement?window:e;function E6(e,{container:t=document.documentElement,...i}={}){let n=od.get(t);n||(n=new Set,od.set(t,n));const o=b6(),a=L6(t,e,o,i);if(n.add(a),!Cr.has(t)){const c=()=>{for(const f of n)f.measure()},m=()=>{for(const f of n)f.update(Ce.timestamp)},p=()=>{for(const f of n)f.notify()},u=()=>{K.read(c,!1,!0),K.read(m,!1,!0),K.update(p,!1,!0)};Cr.set(t,u);const h=hu(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&pu.set(t,w6(t,u)),h.addEventListener("scroll",u,{passive:!0})}const s=Cr.get(t);return K.read(s,!1,!0),()=>{var c;$t(s);const m=od.get(t);if(!m||(m.delete(a),m.size))return;const p=Cr.get(t);Cr.delete(t),p&&(hu(t).removeEventListener("scroll",p),(c=pu.get(t))===null||c===void 0||c(),window.removeEventListener("resize",p))}}function uu(e,t){Gb(!!(!t||t.current))}const I6=()=>({scrollX:wt(0),scrollY:wt(0),scrollXProgress:wt(0),scrollYProgress:wt(0)});function T0({container:e,target:t,layoutEffect:i=!0,...n}={}){const o=Wo(I6);return(i?Io:k.useEffect)(()=>(uu("target",t),uu("container",e),E6(({x:s,y:c})=>{o.scrollX.set(s.current),o.scrollXProgress.set(s.progress),o.scrollY.set(c.current),o.scrollYProgress.set(c.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(n.offset)]),o}function R6(){!z0.current&&j2();const[e]=k.useState(Ps.current);return e}const B6={some:0,all:1};function F6(e,t,{root:i,margin:n,amount:o="some"}={}){const a=T2(e),s=new WeakMap,c=p=>{p.forEach(u=>{const h=s.get(u.target);if(u.isIntersecting!==!!h)if(u.isIntersecting){const f=t(u);typeof f=="function"?s.set(u.target,f):m.unobserve(u.target)}else h&&(h(u),s.delete(u.target))})},m=new IntersectionObserver(c,{root:i,rootMargin:n,threshold:typeof o=="number"?o:B6[o]});return a.forEach(p=>m.observe(p)),()=>m.disconnect()}function O(e,{root:t,margin:i,amount:n,once:o=!1}={}){const[a,s]=k.useState(!1);return k.useEffect(()=>{if(!e.current||o&&a)return;const c=()=>(s(!0),o?void 0:()=>s(!1)),m={root:t&&t.current||void 0,margin:i,amount:n};return F6(e.current,c,m)},[t,e,i,o,n]),a}var P2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},fu=ae.createContext&&ae.createContext(P2),Pi=function(){return Pi=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++){t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Pi.apply(this,arguments)},W6=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]]);return i};function M2(e){return e&&e.map(function(t,i){return ae.createElement(t.tag,Pi({key:i},t.attr),M2(t.child))})}function Y(e){return function(t){return ae.createElement(D6,Pi({attr:Pi({},e.attr)},t),M2(e.child))}}function D6(e){var t=function(i){var n=e.attr,o=e.size,a=e.title,s=W6(e,["attr","size","title"]),c=o||i.size||"1em",m;return i.className&&(m=i.className),e.className&&(m=(m?m+" ":"")+e.className),ae.createElement("svg",Pi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,n,s,{className:m,style:Pi(Pi({color:e.color||i.color},i.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&ae.createElement("title",null,a),e.children)};return fu!==void 0?ae.createElement(fu.Consumer,null,function(i){return t(i)}):t(P2)}function gu(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(e)}function me(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}},{tag:"polyline",attr:{points:"12 5 19 12 12 19"}}]})(e)}function P0(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"}},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(e)}function V6(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}}]})(e)}function Ms(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}function xu(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}},{tag:"circle",attr:{cx:"12",cy:"13",r:"4"}}]})(e)}function qi(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(e)}function A2(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(e)}function L2(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}function jo(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}function N6(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polygon",attr:{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}}]})(e)}function $o(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}},{tag:"line",attr:{x1:"16",y1:"8",x2:"2",y2:"22"}},{tag:"line",attr:{x1:"17.5",y1:"15",x2:"9",y2:"15"}}]})(e)}function mt(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(e)}function rn(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}}]})(e)}function As(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}function O6(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(e)}function _6(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function E2(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(e)}function Ls(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"}}]})(e)}function H6(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"}},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"}}]})(e)}function U6(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"}},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"}},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"}},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"}}]})(e)}function Z6(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"path",attr:{d:"M8 14s1.5 2 4 2 4-2 4-2"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"9.01",y2:"9"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"15.01",y2:"9"}}]})(e)}function ti(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(e)}function Vo(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"}},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"}},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"}},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}}]})(e)}function Y6(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"}}]})(e)}function dl(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"}}]})(e)}function Q6(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function rr(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function cl(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}function G6(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}}]})(e)}function M0(e){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(e)}var Oe=function(){return Oe=Object.assign||function(t){for(var i,n=1,o=arguments.length;n<o;n++){i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},Oe.apply(this,arguments)};function So(e,t,i){if(i||arguments.length===2)for(var n=0,o=t.length,a;n<o;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var te="-ms-",eo="-moz-",G="-webkit-",I2="comm",ml="rule",A0="decl",K6="@import",q6="@namespace",R2="@keyframes",X6="@layer",B2=Math.abs,L0=String.fromCharCode,Xc=Object.assign;function J6(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function F2(e){return e.trim()}function Nt(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,i){return e.replace(t,i)}function Ha(e,t,i){return e.indexOf(t,i)}function ve(e,t){return e.charCodeAt(t)|0}function mn(e,t,i){return e.slice(t,i)}function xt(e){return e.length}function W2(e){return e.length}function Fr(e,t){return t.push(e),e}function ej(e,t){return e.map(t).join("")}function yu(e,t){return e.filter(function(i){return!Nt(i,t)})}var pl=1,or=1,D2=0,pt=0,ge=0,fr="";function hl(e,t,i,n,o,a,s,c){return{value:e,root:t,parent:i,type:n,props:o,children:a,line:pl,column:or,length:s,return:"",siblings:c}}function li(e,t){return Xc(hl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function vn(e){for(;e.root;)e=li(e.root,{children:[e]});Fr(e,e.siblings)}function tj(){return ge}function ij(){return ge=pt>0?ve(fr,--pt):0,or--,ge===10&&(or=1,pl--),ge}function kt(){return ge=pt<D2?ve(fr,pt++):0,or++,ge===10&&(or=1,pl++),ge}function yi(){return ve(fr,pt)}function Ua(){return pt}function ul(e,t){return mn(fr,e,t)}function Co(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nj(e){return pl=or=1,D2=xt(fr=e),pt=0,[]}function rj(e){return fr="",e}function ad(e){return F2(ul(pt-1,Jc(e===91?e+2:e===40?e+1:e)))}function oj(e){for(;(ge=yi())&&ge<33;)kt();return Co(e)>2||Co(ge)>3?"":" "}function aj(e,t){for(;--t&&kt()&&!(ge<48||ge>102||ge>57&&ge<65||ge>70&&ge<97););return ul(e,Ua()+(t<6&&yi()==32&&kt()==32))}function Jc(e){for(;kt();)switch(ge){case e:return pt;case 34:case 39:e!==34&&e!==39&&Jc(ge);break;case 40:e===41&&Jc(e);break;case 92:kt();break}return pt}function sj(e,t){for(;kt()&&e+ge!==57;)if(e+ge===84&&yi()===47)break;return"/*"+ul(t,pt-1)+"*"+L0(e===47?e:kt())}function lj(e){for(;!Co(yi());)kt();return ul(e,pt)}function dj(e){return rj(Za("",null,null,null,[""],e=nj(e),0,[0],e))}function Za(e,t,i,n,o,a,s,c,m){for(var p=0,u=0,h=s,f=0,g=0,w=0,b=1,C=1,v=1,x=0,y="",$=o,z=a,T=n,S=y;C;)switch(w=x,x=kt()){case 40:if(w!=108&&ve(S,h-1)==58){Ha(S+=D(ad(x),"&","&\f"),"&\f",B2(p?c[p-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:S+=ad(x);break;case 9:case 10:case 13:case 32:S+=oj(w);break;case 92:S+=aj(Ua()-1,7);continue;case 47:switch(yi()){case 42:case 47:Fr(cj(sj(kt(),Ua()),t,i,m),m),(Co(w||1)==5||Co(yi()||1)==5)&&xt(S)&&mn(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*b:c[p++]=xt(S)*v;case 125*b:case 59:case 0:switch(x){case 0:case 125:C=0;case 59+u:v==-1&&(S=D(S,/\f/g,"")),g>0&&(xt(S)-h||b===0&&w===47)&&Fr(g>32?vu(S+";",n,i,h-1,m):vu(D(S," ","")+";",n,i,h-2,m),m);break;case 59:S+=";";default:if(Fr(T=wu(S,t,i,p,u,o,c,y,$=[],z=[],h,a),a),x===123)if(u===0)Za(S,t,T,T,$,a,h,c,z);else{switch(f){case 99:if(ve(S,3)===110)break;case 108:if(ve(S,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Za(e,T,T,n&&Fr(wu(e,T,T,0,0,o,c,y,o,$=[],h,z),z),o,z,h,c,n?$:z):Za(S,T,T,T,[""],z,0,c,z)}}p=u=g=0,b=v=1,y=S="",h=s;break;case 58:h=1+xt(S),g=w;default:if(b<1){if(x==123)--b;else if(x==125&&b++==0&&ij()==125)continue}switch(S+=L0(x),x*b){case 38:v=u>0?1:(S+="\f",-1);break;case 44:c[p++]=(xt(S)-1)*v,v=1;break;case 64:yi()===45&&(S+=ad(kt())),f=yi(),u=h=xt(y=S+=lj(Ua())),x++;break;case 45:w===45&&xt(S)==2&&(b=0)}}return a}function wu(e,t,i,n,o,a,s,c,m,p,u,h){for(var f=o-1,g=o===0?a:[""],w=W2(g),b=0,C=0,v=0;b<n;++b)for(var x=0,y=mn(e,f+1,f=B2(C=s[b])),$=e;x<w;++x)($=F2(C>0?g[x]+" "+y:D(y,/&\f/g,g[x])))&&(m[v++]=$);return hl(e,t,i,o===0?ml:c,m,p,u,h)}function cj(e,t,i,n){return hl(e,t,i,I2,L0(tj()),mn(e,2,-2),0,n)}function vu(e,t,i,n,o){return hl(e,t,i,A0,mn(e,0,n),mn(e,n+1,-1),n,o)}function V2(e,t,i){switch(J6(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return G+e+e;case 4855:return G+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return eo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+eo+e+te+e+e;case 5936:switch(ve(e,t+11)){case 114:return G+e+te+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+te+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+te+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return G+e+te+e+e;case 6165:return G+e+te+"flex-"+e+e;case 5187:return G+e+D(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+te+"flex-$1$2")+e;case 5443:return G+e+te+"flex-item-"+D(e,/flex-|-self/g,"")+(Nt(e,/flex-|baseline/)?"":te+"grid-row-"+D(e,/flex-|-self/g,""))+e;case 4675:return G+e+te+"flex-line-pack"+D(e,/align-content|flex-|-self/g,"")+e;case 5548:return G+e+te+D(e,"shrink","negative")+e;case 5292:return G+e+te+D(e,"basis","preferred-size")+e;case 6060:return G+"box-"+D(e,"-grow","")+G+e+te+D(e,"grow","positive")+e;case 4554:return G+D(e,/([^-])(transform)/g,"$1"+G+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+te+"flex-pack:$3"),/space-between/,"justify")+G+e+e;case 4200:if(!Nt(e,/flex-|baseline/))return te+"grid-column-align"+mn(e,t)+e;break;case 2592:case 3360:return te+D(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(n,o){return t=o,Nt(n.props,/grid-\w+-end/)})?~Ha(e+(i=i[t].value),"span",0)?e:te+D(e,"-start","")+e+te+"grid-row-span:"+(~Ha(i,"span",0)?Nt(i,/\d+/):+Nt(i,/\d+/)-+Nt(e,/\d+/))+";":te+D(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(n){return Nt(n.props,/grid-\w+-start/)})?e:te+D(D(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+eo+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ha(e,"stretch",0)?V2(D(e,"stretch","fill-available"),t,i)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,a,s,c,m,p){return te+o+":"+a+p+(s?te+o+"-span:"+(c?m:+m-+a)+p:"")+e});case 4949:if(ve(e,t+6)===121)return D(e,":",":"+G)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+G+(ve(e,14)===45?"inline-":"")+"box$3$1"+G+"$2$3$1"+te+"$2box$3")+e;case 100:return D(e,":",":"+te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,"scroll-","scroll-snap-")+e}return e}function Es(e,t){for(var i="",n=0;n<e.length;n++)i+=t(e[n],n,e,t)||"";return i}function mj(e,t,i,n){switch(e.type){case X6:if(e.children.length)break;case K6:case q6:case A0:return e.return=e.return||e.value;case I2:return"";case R2:return e.return=e.value+"{"+Es(e.children,n)+"}";case ml:if(!xt(e.value=e.props.join(",")))return""}return xt(i=Es(e.children,n))?e.return=e.value+"{"+i+"}":""}function pj(e){var t=W2(e);return function(i,n,o,a){for(var s="",c=0;c<t;c++)s+=e[c](i,n,o,a)||"";return s}}function hj(e){return function(t){t.root||(t=t.return)&&e(t)}}function uj(e,t,i,n){if(e.length>-1&&!e.return)switch(e.type){case A0:e.return=V2(e.value,e.length,i);return;case R2:return Es([li(e,{value:D(e.value,"@","@"+G)})],n);case ml:if(e.length)return ej(i=e.props,function(o){switch(Nt(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vn(li(e,{props:[D(o,/:(read-\w+)/,":"+eo+"$1")]})),vn(li(e,{props:[o]})),Xc(e,{props:yu(i,n)});break;case"::placeholder":vn(li(e,{props:[D(o,/:(plac\w+)/,":"+G+"input-$1")]})),vn(li(e,{props:[D(o,/:(plac\w+)/,":"+eo+"$1")]})),vn(li(e,{props:[D(o,/:(plac\w+)/,te+"input-$1")]})),vn(li(e,{props:[o]})),Xc(e,{props:yu(i,n)});break}return""})}}var fj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ge={},ar=typeof process<"u"&&Ge!==void 0&&(Ge.REACT_APP_SC_ATTR||Ge.SC_ATTR)||"data-styled",N2="active",O2="data-styled-version",fl="6.3.8",E0=`/*!sc*/
`,Is=typeof window<"u"&&typeof document<"u",sr=ae.createContext===void 0,gj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==""?Ge.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ge.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.SC_DISABLE_SPEEDY!==void 0&&Ge.SC_DISABLE_SPEEDY!==""&&Ge.SC_DISABLE_SPEEDY!=="false"&&Ge.SC_DISABLE_SPEEDY),gl=Object.freeze([]),lr=Object.freeze({});function xj(e,t,i){return i===void 0&&(i=lr),e.theme!==i.theme&&e.theme||t||i.theme}var _2=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),yj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wj=/(^-|-$)/g;function bu(e){return e.replace(yj,"-").replace(wj,"")}var vj=/(a)(d)/gi,ku=function(e){return String.fromCharCode(e+(e>25?39:97))};function em(e){var t,i="";for(t=Math.abs(e);t>52;t=t/52|0)i=ku(t%52)+i;return(ku(t%52)+i).replace(vj,"$1-$2")}var sd,Vn=function(e,t){for(var i=t.length;i;)e=33*e^t.charCodeAt(--i);return e},H2=function(e){return Vn(5381,e)};function U2(e){return em(H2(e)>>>0)}function bj(e){return e.displayName||e.name||"Component"}function ld(e){return typeof e=="string"&&!0}var Z2=typeof Symbol=="function"&&Symbol.for,Y2=Z2?Symbol.for("react.memo"):60115,kj=Z2?Symbol.for("react.forward_ref"):60112,jj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$j={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Q2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sj=((sd={})[kj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sd[Y2]=Q2,sd);function ju(e){return("type"in(t=e)&&t.type.$$typeof)===Y2?Q2:"$$typeof"in e?Sj[e.$$typeof]:jj;var t}var Cj=Object.defineProperty,zj=Object.getOwnPropertyNames,$u=Object.getOwnPropertySymbols,Tj=Object.getOwnPropertyDescriptor,Pj=Object.getPrototypeOf,Su=Object.prototype;function G2(e,t,i){if(typeof t!="string"){if(Su){var n=Pj(t);n&&n!==Su&&G2(e,n,i)}var o=zj(t);$u&&(o=o.concat($u(t)));for(var a=ju(e),s=ju(t),c=0;c<o.length;++c){var m=o[c];if(!(m in $j||i&&i[m]||s&&m in s||a&&m in a)){var p=Tj(t,m);try{Cj(e,m,p)}catch{}}}}return e}function dr(e){return typeof e=="function"}function I0(e){return typeof e=="object"&&"styledComponentId"in e}function Xi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function tm(e,t){if(e.length===0)return"";for(var i=e[0],n=1;n<e.length;n++)i+=e[n];return i}function zo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function im(e,t,i){if(i===void 0&&(i=!1),!i&&!zo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=im(e[n],t[n]);else if(zo(t))for(var n in t)e[n]=im(e[n],t[n]);return e}function R0(e,t){Object.defineProperty(e,"toString",{value:t})}function No(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Mj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var i=0,n=0;n<t;n++)i+=this.groupSizes[n];return i},e.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,a=o;t>=a;)if((a<<=1)<0)throw No(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),m=(s=0,i.length);s<m;s++)this.tag.insertRule(c,i[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],n=this.indexOfGroup(t),o=n+i;this.groupSizes[t]=0;for(var a=n;a<o;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),a=o+n,s=o;s<a;s++)i+="".concat(this.tag.getRule(s)).concat(E0);return i},e}(),Ya=new Map,Rs=new Map,Qa=1,Wr=function(e){if(Ya.has(e))return Ya.get(e);for(;Rs.has(Qa);)Qa++;var t=Qa++;return Ya.set(e,t),Rs.set(t,e),t},Aj=function(e,t){Qa=t+1,Ya.set(e,t),Rs.set(t,e)},Lj="style[".concat(ar,"][").concat(O2,'="').concat(fl,'"]'),Ej=new RegExp("^".concat(ar,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ij=function(e,t,i){for(var n,o=i.split(","),a=0,s=o.length;a<s;a++)(n=o[a])&&e.registerName(t,n)},Rj=function(e,t){for(var i,n=((i=t.textContent)!==null&&i!==void 0?i:"").split(E0),o=[],a=0,s=n.length;a<s;a++){var c=n[a].trim();if(c){var m=c.match(Ej);if(m){var p=0|parseInt(m[1],10),u=m[2];p!==0&&(Aj(u,p),Ij(e,u,m[3]),e.getTag().insertRules(p,o)),o.length=0}else o.push(c)}}},Cu=function(e){for(var t=document.querySelectorAll(Lj),i=0,n=t.length;i<n;i++){var o=t[i];o&&o.getAttribute(ar)!==N2&&(Rj(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Bj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var K2=function(e){var t=document.head,i=e||t,n=document.createElement("style"),o=function(c){var m=Array.from(c.querySelectorAll("style[".concat(ar,"]")));return m[m.length-1]}(i),a=o!==void 0?o.nextSibling:null;n.setAttribute(ar,N2),n.setAttribute(O2,fl);var s=Bj();return s&&n.setAttribute("nonce",s),i.insertBefore(n,a),n},Fj=function(){function e(t){this.element=K2(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var n=document.styleSheets,o=0,a=n.length;o<a;o++){var s=n[o];if(s.ownerNode===i)return s}throw No(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},e}(),Wj=function(){function e(t){this.element=K2(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var n=document.createTextNode(i);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Dj=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),zu=Is,Vj={isServer:!Is,useCSSOMInjection:!gj},q2=function(){function e(t,i,n){t===void 0&&(t=lr),i===void 0&&(i={});var o=this;this.options=Oe(Oe({},Vj),t),this.gs=i,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Is&&zu&&(zu=!1,Cu(this)),R0(this,function(){return function(a){for(var s=a.getTag(),c=s.length,m="",p=function(h){var f=function(v){return Rs.get(v)}(h);if(f===void 0)return"continue";var g=a.names.get(f),w=s.getGroup(h);if(g===void 0||!g.size||w.length===0)return"continue";var b="".concat(ar,".g").concat(h,'[id="').concat(f,'"]'),C="";g!==void 0&&g.forEach(function(v){v.length>0&&(C+="".concat(v,","))}),m+="".concat(w).concat(b,'{content:"').concat(C,'"}').concat(E0)},u=0;u<c;u++)p(u);return m}(o)})}return e.registerId=function(t){return Wr(t)},e.prototype.rehydrate=function(){!this.server&&Is&&Cu(this)},e.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new e(Oe(Oe({},this.options),t),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(i){var n=i.useCSSOMInjection,o=i.target;return i.isServer?new Dj(o):n?new Fj(o):new Wj(o)}(this.options),new Mj(t)));var t},e.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},e.prototype.registerName=function(t,i){if(Wr(t),this.names.has(t))this.names.get(t).add(i);else{var n=new Set;n.add(i),this.names.set(t,n)}},e.prototype.insertRules=function(t,i,n){this.registerName(t,i),this.getTag().insertRules(Wr(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Wr(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Nj=/&/g,Nn=47;function Tu(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,i=0,n=0,o=!1,a=0;a<t;a++){var s=e.charCodeAt(a);if(n!==0||o||s!==Nn||e.charCodeAt(a+1)!==42)if(o)s===42&&e.charCodeAt(a+1)===Nn&&(o=!1,a++);else if(s!==34&&s!==39||a!==0&&e.charCodeAt(a-1)===92){if(n===0){if(s===123)i++;else if(s===125&&--i<0)return!0}}else n===0?n=s:n===s&&(n=0);else o=!0,a++}return i!==0||n!==0}function X2(e,t){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=X2(i.children,t)),i})}function Oj(e){var t,i,n,o=lr,a=o.options,s=a===void 0?lr:a,c=o.plugins,m=c===void 0?gl:c,p=function(f,g,w){return w.startsWith(i)&&w.endsWith(i)&&w.replaceAll(i,"").length>0?".".concat(t):f},u=m.slice();u.push(function(f){f.type===ml&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Nj,i).replace(n,p))}),s.prefix&&u.push(uj),u.push(mj);var h=function(f,g,w,b){g===void 0&&(g=""),w===void 0&&(w=""),b===void 0&&(b="&"),t=b,i=g,n=new RegExp("\\".concat(i,"\\b"),"g");var C=function(y){if(!Tu(y))return y;for(var $=y.length,z="",T=0,S=0,P=0,E=!1,L=0;L<$;L++){var V=y.charCodeAt(L);if(P!==0||E||V!==Nn||y.charCodeAt(L+1)!==42)if(E)V===42&&y.charCodeAt(L+1)===Nn&&(E=!1,L++);else if(V!==34&&V!==39||L!==0&&y.charCodeAt(L-1)===92){if(P===0)if(V===123)S++;else if(V===125){if(--S<0){for(var Q=L+1;Q<$;){var ne=y.charCodeAt(Q);if(ne===59||ne===10)break;Q++}Q<$&&y.charCodeAt(Q)===59&&Q++,S=0,L=Q-1,T=Q;continue}S===0&&(z+=y.substring(T,L+1),T=L+1)}else V===59&&S===0&&(z+=y.substring(T,L+1),T=L+1)}else P===0?P=V:P===V&&(P=0);else E=!0,L++}if(T<$){var X=y.substring(T);Tu(X)||(z+=X)}return z}(function(y){if(y.indexOf("//")===-1)return y;for(var $=y.length,z=[],T=0,S=0,P=0,E=0;S<$;){var L=y.charCodeAt(S);if(L!==34&&L!==39||S!==0&&y.charCodeAt(S-1)===92)if(P===0)if(L===40&&S>=3&&(32|y.charCodeAt(S-1))==108&&(32|y.charCodeAt(S-2))==114&&(32|y.charCodeAt(S-3))==117)E=1,S++;else if(E>0)L===41?E--:L===40&&E++,S++;else if(L===Nn&&S+1<$&&y.charCodeAt(S+1)===Nn){for(S>T&&z.push(y.substring(T,S));S<$&&y.charCodeAt(S)!==10;)S++;T=S}else S++;else S++;else P===0?P=L:P===L&&(P=0),S++}return T===0?y:(T<$&&z.push(y.substring(T)),z.join(""))}(f)),v=dj(w||g?"".concat(w," ").concat(g," { ").concat(C," }"):C);s.namespace&&(v=X2(v,s.namespace));var x=[];return Es(v,pj(u.concat(hj(function(y){return x.push(y)})))),x};return h.hash=m.length?m.reduce(function(f,g){return g.name||No(15),Vn(f,g.name)},5381).toString():"",h}var _j=new q2,nm=Oj(),rm={shouldForwardProp:void 0,styleSheet:_j,stylis:nm},J2=sr?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(rm)}}:ae.createContext(rm);J2.Consumer;sr||ae.createContext(void 0);function Pu(){return sr?rm:ae.useContext(J2)}var e5=function(){function e(t,i){var n=this;this.inject=function(o,a){a===void 0&&(a=nm);var s=n.name+a.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,a(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,R0(this,function(){throw No(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=nm),this.name+t.hash},e}();function Hj(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in fj||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Uj=function(e){return e>="A"&&e<="Z"};function Mu(e){for(var t="",i=0;i<e.length;i++){var n=e[i];if(i===1&&n==="-"&&e[0]==="-")return e;Uj(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var t5=function(e){return e==null||e===!1||e===""},i5=function(e){var t=[];for(var i in e){var n=e[i];e.hasOwnProperty(i)&&!t5(n)&&(Array.isArray(n)&&n.isCss||dr(n)?t.push("".concat(Mu(i),":"),n,";"):zo(n)?t.push.apply(t,So(So(["".concat(i," {")],i5(n),!1),["}"],!1)):t.push("".concat(Mu(i),": ").concat(Hj(i,n),";")))}return t};function on(e,t,i,n){if(t5(e))return[];if(I0(e))return[".".concat(e.styledComponentId)];if(dr(e)){if(!dr(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return on(o,t,i,n)}var a;return e instanceof e5?i?(e.inject(i,n),[e.getName(n)]):[e]:zo(e)?i5(e):Array.isArray(e)?Array.prototype.concat.apply(gl,e.map(function(s){return on(s,t,i,n)})):[e.toString()]}function Zj(e){for(var t=0;t<e.length;t+=1){var i=e[t];if(dr(i)&&!I0(i))return!1}return!0}var Yj=H2(fl),Qj=function(){function e(t,i,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Zj(t),this.componentId=i,this.baseHash=Vn(Yj,i),this.baseStyle=n,q2.registerId(i)}return e.prototype.generateAndInjectStyles=function(t,i,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=Xi(o,this.staticRulesId);else{var a=tm(on(this.rules,t,i,n)),s=em(Vn(this.baseHash,a)>>>0);if(!i.hasNameForId(this.componentId,s)){var c=n(a,".".concat(s),void 0,this.componentId);i.insertRules(this.componentId,s,c)}o=Xi(o,s),this.staticRulesId=s}else{for(var m=Vn(this.baseHash,n.hash),p="",u=0;u<this.rules.length;u++){var h=this.rules[u];if(typeof h=="string")p+=h;else if(h){var f=tm(on(h,t,i,n));m=Vn(m,f+u),p+=f}}if(p){var g=em(m>>>0);if(!i.hasNameForId(this.componentId,g)){var w=n(p,".".concat(g),void 0,this.componentId);i.insertRules(this.componentId,g,w)}o=Xi(o,g)}}return{className:o,css:typeof window>"u"?i.getTag().getGroup(Wr(this.componentId)):""}},e}(),n5=sr?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:ae.createContext(void 0);n5.Consumer;var dd={};function Gj(e,t,i){var n=I0(e),o=e,a=!ld(e),s=t.attrs,c=s===void 0?gl:s,m=t.componentId,p=m===void 0?function($,z){var T=typeof $!="string"?"sc":bu($);dd[T]=(dd[T]||0)+1;var S="".concat(T,"-").concat(U2(fl+T+dd[T]));return z?"".concat(z,"-").concat(S):S}(t.displayName,t.parentComponentId):m,u=t.displayName,h=u===void 0?function($){return ld($)?"styled.".concat($):"Styled(".concat(bj($),")")}(e):u,f=t.displayName&&t.componentId?"".concat(bu(t.displayName),"-").concat(t.componentId):t.componentId||p,g=n&&o.attrs?o.attrs.concat(c).filter(Boolean):c,w=t.shouldForwardProp;if(n&&o.shouldForwardProp){var b=o.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;w=function($,z){return b($,z)&&C($,z)}}else w=b}var v=new Qj(i,f,n?o.componentStyle:void 0);function x($,z){return function(T,S,P){var E=T.attrs,L=T.componentStyle,V=T.defaultProps,Q=T.foldedComponentIds,ne=T.styledComponentId,X=T.target,Ye=sr?void 0:ae.useContext(n5),H=Pu(),he=T.shouldForwardProp||H.shouldForwardProp,A=xj(S,Ye,V)||lr,R=function(xn,zt,Dt){for(var Qe,Tt=Oe(Oe({},zt),{className:void 0,theme:Dt}),yl=0;yl<xn.length;yl+=1){var Ho=dr(Qe=xn[yl])?Qe(Tt):Qe;for(var yn in Ho)yn==="className"?Tt.className=Xi(Tt.className,Ho[yn]):yn==="style"?Tt.style=Oe(Oe({},Tt.style),Ho[yn]):Tt[yn]=Ho[yn]}return"className"in zt&&typeof zt.className=="string"&&(Tt.className=Xi(Tt.className,zt.className)),Tt}(E,S,A),W=R.as||X,B={};for(var U in R)R[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&R.theme===A||(U==="forwardedAs"?B.as=R.forwardedAs:he&&!he(U,W)||(B[U]=R[U]));var St=function(xn,zt){var Dt=Pu(),Qe=xn.generateAndInjectStyles(zt,Dt.styleSheet,Dt.stylis);return Qe}(L,R),We=St.className,Wt=St.css,$e=Xi(Q,ne);We&&($e+=" "+We),R.className&&($e+=" "+R.className),B[ld(W)&&!_2.has(W)?"class":"className"]=$e,P&&(B.ref=P);var Ct=k.createElement(W,B);return sr&&Wt?ae.createElement(ae.Fragment,null,ae.createElement("style",{precedence:"styled-components",href:"sc-".concat(ne,"-").concat(We),children:Wt}),Ct):Ct}(y,$,z)}x.displayName=h;var y=ae.forwardRef(x);return y.attrs=g,y.componentStyle=v,y.displayName=h,y.shouldForwardProp=w,y.foldedComponentIds=n?Xi(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=f,y.target=n?o.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=n?function(z){for(var T=[],S=1;S<arguments.length;S++)T[S-1]=arguments[S];for(var P=0,E=T;P<E.length;P++)im(z,E[P],!0);return z}({},o.defaultProps,$):$}}),R0(y,function(){return".".concat(y.styledComponentId)}),a&&G2(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Au(e,t){for(var i=[e[0]],n=0,o=t.length;n<o;n+=1)i.push(t[n],e[n+1]);return i}var Lu=function(e){return Object.assign(e,{isCss:!0})};function r5(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(dr(e)||zo(e))return Lu(on(Au(gl,So([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?on(n):Lu(on(Au(n,t)))}function om(e,t,i){if(i===void 0&&(i=lr),!t)throw No(1,t);var n=function(o){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,i,r5.apply(void 0,So([o],a,!1)))};return n.attrs=function(o){return om(e,t,Oe(Oe({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return om(e,t,Oe(Oe({},i),o))},n}var o5=function(e){return om(Gj,e)},l=o5;_2.forEach(function(e){l[e]=o5(e)});function Ft(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var n=tm(r5.apply(void 0,So([e],t,!1))),o=U2(n);return new e5(o,n)}const d={colors:{primary:"#22371b",secondary:"#A8C5A4",secondaryLight:"#C5DCC2",secondaryDark:"#8AA887",accent:"#cec5ad",accentLight:"#ddd6c3",accentDark:"#b8af97",background:"#FAF8F5",backgroundAlt:"#FFFFFF",backgroundDark:"#F5F2ED",text:"#21371a",textLight:"#5a6b55",cta:"#22371b",ctaHover:"#1a2b15"},fonts:{heading:"'Cormorant Garamond', serif",body:"'Montserrat', sans-serif",accent:"'Cormorant Garamond', serif"},fontSizes:{sm:"0.875rem","3xl":"1.875rem","4xl":"2.25rem"},borderRadius:{sm:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},shadows:{sm:"0 1px 3px rgba(139, 115, 85, 0.08)",md:"0 4px 12px rgba(139, 115, 85, 0.1)",lg:"0 10px 30px rgba(139, 115, 85, 0.12)",xl:"0 20px 50px rgba(139, 115, 85, 0.15)"},transitions:{base:"0.3s ease-in-out"},breakpoints:{mobile:"768px",tablet:"1024px",wide:"1536px"},zIndex:{modal:400}},Di={smooth:[.25,.1,.25,1],entrance:[0,0,.2,1],exit:[.4,0,1,1]},Kj=()=>{const[e,t]=k.useState(!1),[i,n]=k.useState(!1),o=ur(),a=R6();k.useEffect(()=>{let h=!1;const f=()=>{h||(window.requestAnimationFrame(()=>{t(window.scrollY>50),h=!1}),h=!0)};return window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),k.useEffect(()=>{n(!1),window.scrollTo({top:0,behavior:"smooth"})},[o]),k.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const s=k.useMemo(()=>[{path:"/",label:"Home"},{path:"/about",label:"About"},{path:"/services",label:"Services"},{path:"/portfolio",label:"Portfolio"},{path:"/contact",label:"Connect"}],[]);k.useMemo(()=>[{path:"/",label:"Home"},{path:"/portfolio",label:"Portfolio"},{path:"/contact",label:"Connect"}],[]);const c={hidden:{y:a?0:-100,opacity:a?1:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:Di.entrance}}},m={hidden:{opacity:0,x:"100%"},visible:{opacity:1,x:0,transition:{duration:a?.1:.5,ease:Di.smooth}},exit:{opacity:0,x:"100%",transition:{duration:a?.1:.4,ease:Di.exit}}},p={hidden:{opacity:0,x:30},visible:h=>({opacity:1,x:0,transition:{duration:a?.1:.4,delay:a?0:h*.08,ease:Di.entrance}})},u={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:a?.1:.5,delay:a?0:s.length*.08+.1,ease:Di.entrance}}};return r.jsxs(r.Fragment,{children:[r.jsx(qj,{as:j.header,variants:c,initial:"hidden",animate:"visible",$isScrolled:e,children:r.jsxs(Xj,{className:"container",children:[r.jsx(B0,{to:"/","aria-label":"BK Shikha - Home",children:r.jsxs(e7,{$isScrolled:e,children:[r.jsx(Jj,{src:"/bk.jpg",alt:"BK Shikha Logo",$isScrolled:e}),r.jsxs(t7,{children:[r.jsx(i7,{$isScrolled:e,children:"BK Shikha"}),r.jsx(n7,{$isScrolled:e,children:"Create your Destiny"})]})]})}),r.jsxs(r7,{className:"hide-mobile",role:"navigation","aria-label":"Main navigation",children:[r.jsxs(ui,{to:"/",$isActive:o.pathname==="/","aria-current":o.pathname==="/"?"page":void 0,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[r.jsx(zr,{children:"Home"}),r.jsx(Tr,{$isActive:o.pathname==="/"})]}),r.jsxs(ui,{to:"/about",$isActive:o.pathname==="/about","aria-current":o.pathname==="/about"?"page":void 0,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[r.jsx(zr,{children:"About"}),r.jsx(Tr,{$isActive:o.pathname==="/about"})]}),r.jsxs(ui,{to:"/services",$isActive:o.pathname==="/services","aria-current":o.pathname==="/services"?"page":void 0,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[r.jsx(zr,{children:"Services"}),r.jsx(Tr,{$isActive:o.pathname==="/services"})]}),r.jsxs(ui,{to:"/portfolio",$isActive:o.pathname==="/portfolio","aria-current":o.pathname==="/portfolio"?"page":void 0,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[r.jsx(zr,{children:"Portfolio"}),r.jsx(Tr,{$isActive:o.pathname==="/portfolio"})]}),r.jsxs(ui,{to:"/contact",$isActive:o.pathname==="/contact","aria-current":o.pathname==="/contact"?"page":void 0,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[r.jsx(zr,{children:"Connect"}),r.jsx(Tr,{$isActive:o.pathname==="/contact"})]}),r.jsx(o7,{to:"/contact",whileHover:a?{}:{scale:1.03,y:-1},whileTap:a?{}:{scale:.98},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Begin Your Journey"})]}),r.jsx(a7,{className:"show-mobile",onClick:()=>n(!i),whileTap:a?{}:{scale:.92},"aria-expanded":i,"aria-controls":"mobile-navigation","aria-label":i?"Close menu":"Open menu",children:r.jsx(s7,{animate:{rotate:i?90:0},transition:{duration:.3,ease:Di.smooth},children:i?r.jsx(cl,{size:26}):r.jsx(_6,{size:26})})})]})}),r.jsx(Bt,{children:i&&r.jsxs(r.Fragment,{children:[r.jsx(l7,{as:j.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:()=>n(!1),"aria-hidden":"true"}),r.jsxs(d7,{as:j.nav,id:"mobile-navigation",role:"navigation","aria-label":"Mobile navigation",variants:m,initial:"hidden",animate:"visible",exit:"exit",children:[r.jsxs(c7,{children:[r.jsx(m7,{children:"BK Shikha"}),r.jsx(p7,{children:"Your Wellness Journey"})]}),r.jsx(h7,{children:s.map((h,f)=>r.jsxs(u7,{to:h.path,as:j(_),custom:f,variants:p,initial:"hidden",animate:"visible",$isActive:o.pathname===h.path,"aria-current":o.pathname===h.path?"page":void 0,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[o.pathname===h.path&&r.jsx(f7,{as:j.span,layoutId:"activeIndicator",transition:{duration:.3,ease:Di.smooth}}),r.jsx(g7,{children:h.label})]},h.path))}),r.jsx(x7,{to:"/contact",as:j(_),variants:u,initial:"hidden",animate:"visible",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),whileHover:a?{}:{y:-2},whileTap:a?{}:{scale:.98},children:"Begin Your Journey"})]})]})})]})},qj=l.header`
  position: relative;
  z-index: 100;
  background: rgba(33, 55, 26, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 8px rgba(34, 55, 27, 0.15);
  transition: 
    background 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
    padding 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    backdrop-filter 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  padding: 1.375rem 0;
  margin-bottom: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: auto;
  isolation: isolate;
  
  /* Safe area for notched devices */
  padding-top: max(${e=>e.$isScrolled?"0.875rem":"1.375rem"}, env(safe-area-inset-top));
  
  /* 4K screens */
  @media (min-width: 2560px) {
    padding: ${e=>e.$isScrolled?"1.25rem 0":"2rem 0"};
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    padding: ${e=>e.$isScrolled?"1.125rem 0":"1.75rem 0"};
  }

  @media (max-width: 1440px) {
    padding: ${e=>e.$isScrolled?"0.875rem 0":"1.375rem 0"};
  }

  @media (max-width: 1200px) {
    padding: ${e=>e.$isScrolled?"0.8125rem 0":"1.25rem 0"};
  }

  @media (max-width: 1024px) {
    padding: ${e=>e.$isScrolled?"0.75rem 0":"1.125rem 0"};
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: ${e=>e.$isScrolled?"0.6875rem 0 0":"1rem 0 0"};
  }

  @media (max-width: 640px) {
    padding: ${e=>e.$isScrolled?"0.625rem 0 0":"0.9375rem 0 0"};
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: ${e=>e.$isScrolled?"0.625rem 0 0":"1rem 0 0"};
  }

  @media (max-width: 390px) {
    padding: ${e=>e.$isScrolled?"0.5625rem 0 0":"0.875rem 0 0"};
  }

  @media (max-width: 375px) {
    padding: ${e=>e.$isScrolled?"0.5rem 0 0":"0.8125rem 0 0"};
  }
  
  @media (max-width: 360px) {
    padding: ${e=>e.$isScrolled?"0.5rem 0 0":"0.75rem 0 0"};
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    padding: ${e=>e.$isScrolled?"1rem 0":"1.5rem 0"};
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Xj=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    gap: 4rem;
  }

  @media (min-width: 1920px) {
    gap: 3.5rem;
  }

  @media (max-width: 1440px) {
    gap: 2.5rem;
  }

  @media (max-width: 1200px) {
    gap: 2.25rem;
  }

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    gap: 1.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 1rem;
  }

  @media (max-width: 390px) {
    gap: 0.875rem;
  }

  @media (max-width: 360px) {
    gap: 0.75rem;
  }
`,B0=l(_)`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  text-decoration: none;
  position: relative;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  &:focus-visible {
    outline: 2px solid ${d.colors.accent};
    outline-offset: 4px;
    border-radius: ${d.borderRadius.sm};
  }

  @media (min-width: 2560px) {
    gap: 1.125rem;
  }

  @media (max-width: 640px) {
    gap: 0.75rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 0.625rem;
  }

  @media (max-width: 360px) {
    gap: 0.5rem;
  }
`,Jj=l.img`
  height: ${e=>e.$isScrolled?"55px":"70px"};
  width: auto;
  object-fit: contain;
  border-radius: 8px;
  transition: 
    height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  
  ${B0}:hover & {
    opacity: 0.9;
  }
  
  @media (min-width: 2560px) {
    height: ${e=>e.$isScrolled?"70px":"90px"};
  }

  @media (min-width: 1920px) {
    height: ${e=>e.$isScrolled?"62px":"80px"};
  }

  @media (max-width: 1024px) {
    height: ${e=>e.$isScrolled?"52px":"65px"};
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    height: ${e=>e.$isScrolled?"50px":"62px"};
  }

  @media (max-width: 640px) {
    height: ${e=>e.$isScrolled?"48px":"58px"};
  }
  
  @media (max-width: ${d.breakpoints.mobile}) {
    height: ${e=>e.$isScrolled?"48px":"60px"};
  }

  @media (max-width: 390px) {
    height: ${e=>e.$isScrolled?"44px":"54px"};
  }

  @media (max-width: 375px) {
    height: ${e=>e.$isScrolled?"42px":"52px"};
  }

  @media (max-width: 360px) {
    height: ${e=>e.$isScrolled?"40px":"50px"};
    border-radius: 6px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,e7=l.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.$isScrolled?"0.5rem":"0.75rem"};
  transition: gap 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: 640px) {
    gap: ${e=>e.$isScrolled?"0.4375rem":"0.625rem"};
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: ${e=>e.$isScrolled?"0.4375rem":"0.625rem"};
  }

  @media (max-width: 360px) {
    gap: ${e=>e.$isScrolled?"0.375rem":"0.5rem"};
  }
`,t7=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$isScrolled?"0.0625rem":"0.125rem"};
  transition: gap 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateZ(0);
  backface-visibility: hidden;
`,i7=l.h1`
  font-family: ${d.fonts.heading};
  font-size: ${e=>e.$isScrolled?"1.375rem":"1.5rem"};
  font-weight: 600;
  color: #cec5ad;
  margin: 0;
  letter-spacing: 0.04em;
  line-height: 1.1;
  transition: 
    font-size 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  ${B0}:hover & {
    opacity: 0.85;
  }
  
  @media (min-width: 2560px) {
    font-size: ${e=>e.$isScrolled?"1.75rem":"2rem"};
  }

  @media (min-width: 1920px) {
    font-size: ${e=>e.$isScrolled?"1.5rem":"1.75rem"};
  }

  @media (max-width: 1024px) {
    font-size: ${e=>e.$isScrolled?"1.25rem":"1.375rem"};
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: ${e=>e.$isScrolled?"1.1875rem":"1.3125rem"};
  }

  @media (max-width: 640px) {
    font-size: ${e=>e.$isScrolled?"1.125rem":"1.25rem"};
  }
  
  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: ${e=>e.$isScrolled?"1.125rem":"1.25rem"};
  }

  @media (max-width: 390px) {
    font-size: ${e=>e.$isScrolled?"1.0625rem":"1.1875rem"};
  }

  @media (max-width: 375px) {
    font-size: ${e=>e.$isScrolled?"1rem":"1.125rem"};
  }

  @media (max-width: 360px) {
    font-size: ${e=>e.$isScrolled?"0.9375rem":"1.0625rem"};
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,n7=l.span`
  font-family: ${d.fonts.accent};
  font-size: ${e=>e.$isScrolled?"0.625rem":"0.6875rem"};
  font-weight: 400;
  font-style: italic;
  color: rgba(206, 197, 173, 0.85);
  letter-spacing: 0.06em;
  opacity: ${e=>e.$isScrolled?.85:1};
  transition: 
    font-size 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.3s ease;
  
  @media (min-width: 2560px) {
    font-size: ${e=>e.$isScrolled?"0.75rem":"0.875rem"};
  }

  @media (min-width: 1920px) {
    font-size: ${e=>e.$isScrolled?"0.6875rem":"0.75rem"};
  }

  @media (max-width: 1024px) {
    font-size: ${e=>e.$isScrolled?"0.5625rem":"0.625rem"};
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: ${e=>e.$isScrolled?"0.5625rem":"0.625rem"};
  }

  @media (max-width: 640px) {
    font-size: 0.5625rem;
    letter-spacing: 0.08em;
  }
  
  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.625rem;
    letter-spacing: 0.1em;
  }

  @media (max-width: 390px) {
    font-size: 0.5625rem;
    letter-spacing: 0.09em;
  }

  @media (max-width: 375px) {
    font-size: 0.5rem;
    letter-spacing: 0.08em;
  }

  @media (max-width: 360px) {
    font-size: 0.5rem;
    letter-spacing: 0.07em;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,r7=l.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  /* Hide on mobile and small tablets */
  @media (max-width: 900px) {
    display: none;
  }
  
  @media (min-width: 2560px) {
    gap: 3.5rem;
  }

  @media (min-width: 1920px) {
    gap: 3rem;
  }

  @media (min-width: ${d.breakpoints.wide}) {
    gap: 3rem;
  }

  @media (min-width: ${d.breakpoints.tablet}) {
    gap: 2.5rem;
  }

  @media (max-width: 1200px) {
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    gap: 1.75rem;
  }
`,ui=l(_)`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: ${e=>e.$isActive?500:400};
  color: ${e=>e.$isActive?"#cec5ad":"rgba(206, 197, 173, 0.85)"};
  text-decoration: none;
  position: relative;
  padding: 0.625rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: color 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    font-size: 1.125rem;
    padding: 0.75rem 0;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
    padding: 0.6875rem 0;
  }

  @media (max-width: 1200px) {
    font-size: 0.875rem;
    padding: 0.5625rem 0;
  }

  @media (max-width: 1024px) {
    font-size: 0.8125rem;
    padding: 0.5rem 0;
  }

  &:hover {
    color: #cec5ad;
  }
  
  &:focus-visible {
    outline: 2px solid ${d.colors.accent};
    outline-offset: 4px;
    border-radius: ${d.borderRadius.sm};
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,zr=l.span`
  position: relative;
  transition: transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
  
  ${ui}:hover & {
    transform: translateY(-1px);
  }
  
  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`,Tr=l.span`
  position: absolute;
  bottom: 0.25rem;
  left: 50%;
  height: 2px;
  background: #cec5ad;
  border-radius: 1px;
  transform: translateX(-50%) translateZ(0);
  width: ${e=>e.$isActive?"70%":"0"};
  opacity: ${e=>e.$isActive?1:0};
  transition: 
    width 0.35s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.35s ease;
  backface-visibility: hidden;
  
  ${ui}:hover & {
    width: 70%;
    opacity: 0.7;
  }
  
  ${ui}[aria-current="page"]:hover & {
    opacity: 1;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,o7=l(j(_))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8125rem 1.875rem;
  background: #5a8a62;
  color: #ffffff;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;
  border-radius: ${d.borderRadius.full};
  box-shadow: 
    0 2px 8px rgba(90, 138, 98, 0.3),
    0 1px 2px rgba(90, 138, 98, 0.15);
  transition: 
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
  white-space: nowrap;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 2560px) {
    padding: 1rem 2.5rem;
    font-size: 1.0625rem;
  }

  @media (min-width: 1920px) {
    padding: 0.9375rem 2.125rem;
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    padding: 0.75rem 1.625rem;
    font-size: 0.8125rem;
  }

  @media (max-width: 1024px) {
    padding: 0.6875rem 1.5rem;
    font-size: 0.75rem;
  }

  &:hover {
    background: #4a7a52;
    box-shadow: 
      0 8px 24px rgba(90, 138, 98, 0.4),
      0 4px 8px rgba(90, 138, 98, 0.2);
    transform: translateY(-2px) translateZ(0);
  }
  
  &:focus-visible {
    outline: 2px solid #5a8a62;
    outline-offset: 3px;
  }
  
  &:active {
    background: #3d6a45;
    transform: translateY(0) translateZ(0);
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: #4a7a52;
      transform: scale(0.98) translateZ(0);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: background 0.15s ease;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`,a7=l(j.button)`
  display: none;
  background: transparent;
  border: none;
  color: #cec5ad;
  padding: 0.75rem;
  margin-right: -0.75rem;
  cursor: pointer;
  border-radius: ${d.borderRadius.md};
  transition: background 0.2s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
  
  &:hover {
    background: rgba(206, 197, 173, 0.15);
  }
  
  &:focus-visible {
    outline: 2px solid #cec5ad;
    outline-offset: 2px;
  }

  /* Show on mobile and small tablets */
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 640px) {
    padding: 0.625rem;
    margin-right: -0.625rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0.5625rem;
    margin-right: -0.5625rem;
  }

  @media (max-width: 390px) {
    padding: 0.5rem;
    margin-right: -0.5rem;
  }
  
  @media (max-width: 360px) {
    padding: 0.5rem;
    margin-right: -0.5rem;
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: rgba(206, 197, 173, 0.2);
    }
  }
`,s7=l(j.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,l7=l.div`
  position: fixed;
  inset: 0;
  background: rgba(74, 74, 74, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: ${d.zIndex.modal-1};
  transform: translateZ(0);
  backface-visibility: hidden;
`,d7=l.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 400px;
  height: 100vh;
  height: 100dvh;
  background: linear-gradient(
    180deg,
    ${d.colors.backgroundAlt} 0%,
    ${d.colors.background} 100%
  );
  box-shadow: -8px 0 40px rgba(139, 115, 85, 0.12);
  padding: 2.5rem 2rem 3rem;
  padding-top: max(2.5rem, env(safe-area-inset-top));
  padding-bottom: max(3rem, env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  z-index: ${d.zIndex.modal};
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
  
  @media (min-width: 2560px) {
    max-width: 500px;
  }

  @media (min-width: 1920px) {
    max-width: 450px;
  }

  @media (max-width: 640px) {
    padding: 2.25rem 1.75rem 2.75rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 2rem 1.5rem 2.5rem;
  }

  @media (max-width: 390px) {
    width: 88%;
    padding: 1.875rem 1.375rem 2.25rem;
  }

  @media (max-width: 375px) {
    padding: 1.75rem 1.25rem 2rem;
  }
  
  @media (max-width: 360px) {
    width: 90%;
    padding: 2rem 1.5rem 2.5rem;
  }
  
  @media (min-width: 600px) {
    width: 60%;
  }
`,c7=l.div`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(139, 115, 85, 0.1);

  @media (max-width: 640px) {
    margin-bottom: 2.25rem;
    padding-bottom: 1.375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 2rem;
    padding-bottom: 1.25rem;
  }

  @media (max-width: 390px) {
    margin-bottom: 1.875rem;
    padding-bottom: 1.125rem;
  }

  @media (max-width: 360px) {
    margin-bottom: 1.75rem;
    padding-bottom: 1rem;
  }
`,m7=l.div`
  font-family: ${d.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #22371b;
  letter-spacing: 0.04em;
  margin-bottom: 0.25rem;

  @media (max-width: 640px) {
    font-size: 1.375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1.3125rem;
  }

  @media (max-width: 390px) {
    font-size: 1.25rem;
  }

  @media (max-width: 360px) {
    font-size: 1.1875rem;
  }
`,p7=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.75rem;
  font-weight: 400;
  color: ${d.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 0.12em;

  @media (max-width: 640px) {
    font-size: 0.6875rem;
    letter-spacing: 0.11em;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.6875rem;
    letter-spacing: 0.1em;
  }

  @media (max-width: 390px) {
    font-size: 0.625rem;
    letter-spacing: 0.09em;
  }

  @media (max-width: 360px) {
    font-size: 0.625rem;
  }
`,h7=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  flex: 1;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: 640px) {
    gap: 0.3125rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 0.25rem;
  }

  @media (max-width: 360px) {
    gap: 0.25rem;
  }
`,u7=l(_)`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  font-weight: ${e=>e.$isActive?500:400};
  color: ${e=>e.$isActive?"#22371b":"#21371a"};
  text-decoration: none;
  padding: 1rem 1rem 1rem 1.25rem;
  border-radius: ${d.borderRadius.lg};
  position: relative;
  display: flex;
  align-items: center;
  transition: 
    color 0.25s ease,
    background 0.25s ease;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: 640px) {
    font-size: 1.0625rem;
    padding: 0.9375rem 0.9375rem 0.9375rem 1.125rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 0.875rem 0.875rem 0.875rem 1rem;
  }

  @media (max-width: 390px) {
    font-size: 0.9375rem;
    padding: 0.8125rem 0.8125rem 0.8125rem 0.9375rem;
  }

  @media (max-width: 360px) {
    font-size: 0.9375rem;
    padding: 0.75rem 0.75rem 0.75rem 0.875rem;
  }

  &:hover {
    color: #22371b;
    background: rgba(206, 197, 173, 0.1);
  }
  
  &:focus-visible {
    outline: 2px solid #cec5ad;
    outline-offset: -2px;
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: rgba(206, 197, 173, 0.15);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,f7=l.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) translateZ(0);
  width: 3px;
  height: 1.5rem;
  background: #cec5ad;
  border-radius: 2px;
  backface-visibility: hidden;

  @media (max-width: 640px) {
    height: 1.375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    height: 1.25rem;
    width: 2.5px;
  }

  @media (max-width: 360px) {
    height: 1.125rem;
    width: 2px;
  }
`,g7=l.span`
  position: relative;
`,x7=l(_)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.125rem 2rem;
  background: #5a8a62;
  color: #ffffff;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-decoration: none;
  text-align: center;
  border-radius: ${d.borderRadius.full};
  box-shadow: 
    0 4px 16px rgba(90, 138, 98, 0.25),
    0 2px 4px rgba(90, 138, 98, 0.1);
  margin-top: auto;
  transition: 
    background 0.3s ease,
    box-shadow 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (max-width: 640px) {
    padding: 1.0625rem 1.875rem;
    font-size: 0.9375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 1rem 1.75rem;
    font-size: 0.9375rem;
  }

  @media (max-width: 390px) {
    padding: 0.9375rem 1.625rem;
    font-size: 0.875rem;
  }

  @media (max-width: 375px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.875rem;
  }

  @media (max-width: 360px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.8125rem;
  }

  &:hover {
    background: #4a7a52;
    box-shadow: 
      0 6px 24px rgba(90, 138, 98, 0.35),
      0 2px 6px rgba(90, 138, 98, 0.15);
  }
  
  &:focus-visible {
    outline: 2px solid #5a8a62;
    outline-offset: 3px;
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: #4a7a52;
      transform: scale(0.98) translateZ(0);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: background 0.15s ease;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`,y7=()=>{const e=new Date().getFullYear(),t=[{path:"/about",label:"About BK Shikha"},{path:"/services",label:"Services"},{path:"/blog",label:"Wellness Insights"},{path:"/portfolio",label:"Portfolio"},{path:"/contact",label:"Connect"}],i=["Personalized Yoga Coaching","Emotional Wellness Mentoring","Mindset & NLP Coaching","Stress Relief Sessions","Confidence Building"];return r.jsx(w7,{children:r.jsxs(v7,{className:"container",children:[r.jsxs(b7,{children:[r.jsxs(k7,{children:[r.jsx(j7,{children:"BK Shikha"}),r.jsx($7,{children:"Yogic Lifestyle & Wellness Mentor"}),r.jsx(S7,{children:"Transforming lives through holistic wellness, yoga, and emotional balance. Your journey to inner peace and confident living begins here."}),r.jsxs(C7,{children:[r.jsx(cd,{href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.95},children:r.jsx(rn,{})}),r.jsx(cd,{href:"mailto:contact@bkshikha.com","aria-label":"Email",whileHover:{scale:1.1,rotate:-5},whileTap:{scale:.95},children:r.jsx(As,{})}),r.jsx(cd,{href:"tel:+1234567890","aria-label":"Phone",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.95},children:r.jsx(E2,{})})]})]}),r.jsxs(Eu,{children:[r.jsx(md,{children:"Quick Links"}),r.jsx(Iu,{children:t.map(n=>r.jsx(z7,{to:n.path,children:n.label},n.path))})]}),r.jsxs(Eu,{children:[r.jsx(md,{children:"Services"}),r.jsx(Iu,{children:i.map((n,o)=>r.jsx(T7,{children:n},o))})]}),r.jsxs(P7,{children:[r.jsx(md,{children:"Begin Your Journey"}),r.jsx(M7,{children:"Ready to transform your life through wellness and yoga? Let's connect and create your personalized path to inner peace."}),r.jsx(A7,{to:"/contact",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Book a Session"})]})]}),r.jsx(L7,{children:r.jsxs(E7,{children:["© ",e," BK Shikha. All rights reserved. Crafted with"," ",r.jsx(I7,{children:r.jsx(mt,{})})," ","for wellness seekers."]})})]})})},w7=l.footer`
  background-image: url('/more images/footer.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top: 1px solid rgba(206, 197, 173, 0.2);
  padding: 5rem 0 2.5rem;
  margin-top: 0;
  position: relative;
  isolation: isolate;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(34, 55, 27, 0.75);
    z-index: 0;
    transform: translateZ(0);
  }

  /* 4K screens */
  @media (min-width: 2560px) {
    padding: 7rem 0 3.5rem;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    padding: 6rem 0 3rem;
  }

  @media (max-width: 1440px) {
    padding: 4.5rem 0 2.25rem;
  }

  @media (max-width: 1200px) {
    padding: 4rem 0 2rem;
  }

  @media (max-width: 1024px) {
    padding: 3.5rem 0 2rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 3rem 0 1.75rem;
  }

  @media (max-width: 640px) {
    padding: 2.75rem 0 1.5rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 2.5rem 0 1.5rem;
  }

  @media (max-width: 390px) {
    padding: 2rem 0 1.25rem;
  }

  @media (max-width: 375px) {
    padding: 2rem 0 1.25rem;
  }

  @media (max-width: 360px) {
    padding: 1.75rem 0 1rem;
  }
`,v7=l.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    max-width: 1600px;
    padding: 0 3rem;
  }

  @media (min-width: 1920px) {
    max-width: 1400px;
    padding: 0 2.5rem;
  }

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }

  @media (max-width: 1024px) {
    padding: 0 1.75rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 0 1.5rem;
  }

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1rem;
  }

  @media (max-width: 390px) {
    padding: 0 0.875rem;
  }

  @media (max-width: 375px) {
    padding: 0 0.75rem;
  }

  @media (max-width: 360px) {
    padding: 0 0.625rem;
  }
`,b7=l.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  /* 4K screens */
  @media (min-width: 2560px) {
    gap: 5rem;
    margin-bottom: 4.5rem;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    gap: 4.5rem;
    margin-bottom: 4rem;
  }

  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    gap: 4rem;
    margin-bottom: 3.5rem;
  }

  @media (max-width: 1440px) {
    gap: 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 1200px) {
    gap: 2.75rem;
    margin-bottom: 2.75rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 640px) {
    gap: 2.25rem;
    margin-bottom: 2.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 390px) {
    gap: 1.75rem;
    margin-bottom: 1.75rem;
  }

  @media (max-width: 375px) {
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`,k7=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateZ(0);

  @media (min-width: 2560px) {
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 0.75rem;
    align-items: center;
  }

  @media (max-width: 360px) {
    gap: 0.625rem;
  }
`,j7=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 2.25rem;
  font-weight: 700;
  color: #cec5ad;
  margin: 0;

  @media (min-width: 2560px) {
    font-size: 2.75rem;
  }

  @media (min-width: 1920px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: 1.875rem;
  }

  @media (max-width: 640px) {
    font-size: 1.75rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1.625rem;
  }

  @media (max-width: 390px) {
    font-size: 1.5rem;
  }

  @media (max-width: 360px) {
    font-size: 1.375rem;
  }
`,$7=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.85rem;
  font-weight: 700;
  color: #8ecfb3;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0;

  @media (min-width: 2560px) {
    font-size: 1rem;
    letter-spacing: 0.14em;
  }

  @media (min-width: 1920px) {
    font-size: 0.9375rem;
    letter-spacing: 0.13em;
  }

  @media (max-width: 640px) {
    font-size: 0.8125rem;
    letter-spacing: 0.11em;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.75rem;
    letter-spacing: 0.1em;
  }

  @media (max-width: 390px) {
    font-size: 0.6875rem;
    letter-spacing: 0.09em;
  }

  @media (max-width: 360px) {
    font-size: 0.625rem;
    letter-spacing: 0.08em;
  }
`,S7=l.p`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin: 0.75rem 0 1.75rem;

  @media (min-width: 2560px) {
    font-size: 1.1875rem;
    line-height: 1.85;
    margin: 1rem 0 2rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    line-height: 1.825;
    margin: 0.875rem 0 1.875rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.9375rem;
    margin: 0.625rem 0 1.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: 0.9375rem;
    line-height: 1.75;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.7;
    margin: 0.5rem 0 1.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.65;
    margin: 0.5rem 0 1rem;
    text-align: center;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    line-height: 1.6;
    margin: 0.5rem 0 1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.75rem;
    margin: 0.5rem 0 0.875rem;
  }
`,C7=l.div`
  display: flex;
  gap: 1rem;
  transform: translateZ(0);

  @media (min-width: 2560px) {
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    justify-content: center;
    gap: 0.75rem;
  }

  @media (max-width: 360px) {
    gap: 0.625rem;
  }
`,cd=l(j.a)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(206, 197, 173, 0.15);
  color: #cec5ad;
  border-radius: ${d.borderRadius.full};
  font-size: 1.25rem;
  transition: all 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 2560px) {
    width: 56px;
    height: 56px;
    font-size: 1.5rem;
  }

  @media (min-width: 1920px) {
    width: 52px;
    height: 52px;
    font-size: 1.375rem;
  }

  @media (max-width: 1024px) {
    width: 46px;
    height: 46px;
    font-size: 1.1875rem;
  }

  @media (max-width: 640px) {
    width: 44px;
    height: 44px;
    font-size: 1.125rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 42px;
    height: 42px;
    font-size: 1.0625rem;
  }

  @media (max-width: 390px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  @media (max-width: 360px) {
    width: 38px;
    height: 38px;
    font-size: 0.9375rem;
  }

  &:hover {
    background: #cec5ad;
    color: #22371b;
    transform: translateY(-3px) translateZ(0);
    box-shadow: 0 8px 25px rgba(206, 197, 173, 0.25);
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: #cec5ad;
      color: #22371b;
      transform: scale(0.95) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`,Eu=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateZ(0);

  @media (min-width: 2560px) {
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 0.75rem;
    align-items: center;
  }

  @media (max-width: 360px) {
    gap: 0.625rem;
  }
`,md=l.h4`
  font-family: ${d.fonts.heading};
  font-size: 1.375rem;
  font-weight: 700;
  color: #cec5ad;
  margin: 0 0 0.75rem;

  @media (min-width: 2560px) {
    font-size: 1.625rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.5rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: 1.1875rem;
  }

  @media (max-width: 640px) {
    font-size: 1.125rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1.0625rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 390px) {
    font-size: 1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.9375rem;
  }
`,Iu=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transform: translateZ(0);

  @media (min-width: 2560px) {
    gap: 0.9375rem;
  }

  @media (max-width: 640px) {
    gap: 0.625rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 0.5rem;
    align-items: center;
  }

  @media (max-width: 360px) {
    gap: 0.5rem;
  }
`,z7=l(_)`
  font-size: 0.9375rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: all 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    font-size: 1.0625rem;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.8125rem;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
  }

  @media (max-width: 360px) {
    font-size: 0.6875rem;
  }

  &:hover {
    color: #cec5ad;
    padding-left: 0.5rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    &:hover {
      padding-left: 0;
    }
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      color: #cec5ad;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,T7=l.p`
  font-size: 0.9375rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;

  @media (min-width: 2560px) {
    font-size: 1.0625rem;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.8125rem;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
  }

  @media (max-width: 360px) {
    font-size: 0.6875rem;
  }
`,P7=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateZ(0);

  @media (min-width: 2560px) {
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 0.75rem;
    align-items: center;
  }

  @media (max-width: 360px) {
    gap: 0.625rem;
  }
`,M7=l.p`
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;

  @media (min-width: 2560px) {
    font-size: 1.125rem;
    line-height: 1.7;
  }

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    line-height: 1.65;
  }

  @media (max-width: 1024px) {
    font-size: 0.9375rem;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.55;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.6;
    text-align: center;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    line-height: 1.55;
  }

  @media (max-width: 360px) {
    font-size: 0.75rem;
  }
`,A7=l(j(_))`
  display: inline-block;
  padding: 1rem 2.25rem;
  background: #22371b;
  color: #FAF8F5;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  border-radius: ${d.borderRadius.full};
  box-shadow: 0 4px 20px rgba(34, 55, 27, 0.25);
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 2560px) {
    padding: 1.25rem 3rem;
    font-size: 1.125rem;
  }

  @media (min-width: 1920px) {
    padding: 1.125rem 2.5rem;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    padding: 0.9375rem 2rem;
  }

  @media (max-width: 640px) {
    padding: 0.875rem 1.875rem;
    font-size: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0.8125rem 1.75rem;
    font-size: 0.8125rem;
    width: 100%;
    max-width: 280px;
  }

  @media (max-width: 390px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.8125rem;
  }

  @media (max-width: 360px) {
    padding: 0.6875rem 1.375rem;
    font-size: 0.75rem;
  }

  &:hover {
    background: #1a2b15;
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 8px 30px rgba(34, 55, 27, 0.35);
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: #1a2b15;
      transform: scale(0.98) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`,L7=l.div`
  text-align: center;
  padding-top: 2rem;
  transform: translateZ(0);

  @media (min-width: 2560px) {
    padding-top: 3rem;
  }

  @media (min-width: 1920px) {
    padding-top: 2.5rem;
  }

  @media (max-width: 1024px) {
    padding-top: 1.75rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding-top: 1.5rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding-top: 1.25rem;
  }

  @media (max-width: 390px) {
    padding-top: 1rem;
  }

  @media (max-width: 360px) {
    padding-top: 1rem;
  }
`,E7=l.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (min-width: 2560px) {
    font-size: 1.0625rem;
    gap: 0.625rem;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
    gap: 0.5625rem;
  }

  @media (max-width: 640px) {
    font-size: 0.8125rem;
    gap: 0.4375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.75rem;
    gap: 0.375rem;
  }

  @media (max-width: 390px) {
    font-size: 0.6875rem;
  }

  @media (max-width: 360px) {
    font-size: 0.625rem;
    gap: 0.3125rem;
  }
`,I7=l.span`
  color: #cec5ad;
  display: inline-flex;
  animation: heartbeat 1.5s ease-in-out infinite;
  transform: translateZ(0);
  backface-visibility: hidden;

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1) translateZ(0);
    }
    50% {
      transform: scale(1.15) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,R7=()=>{const e=ur();return r.jsxs(B7,{children:[r.jsx(Kj,{}),r.jsx(F7,{children:r.jsx(Bt,{mode:"wait",children:r.jsx(j.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5,ease:"easeInOut"},children:r.jsx(Ev,{})},e.pathname)})}),r.jsx(y7,{})]})},B7=l.div`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  transform: translateZ(0);
  backface-visibility: hidden;
  isolation: isolate;
  will-change: auto;
`,F7=l.main`
  flex: 1;
  padding-top: 0; /* No padding - navbar is relative positioned */
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: auto;
`,W7=({mediaType:e="video",mediaSrc:t,posterSrc:i,bgImageSrc:n,bgObjectPosition:o,title:a,subtitle:s,scrollToExpand:c="Scroll to explore",textBlend:m=!0,children:p})=>{const[u,h]=k.useState(0),[f,g]=k.useState(!1),[w,b]=k.useState(!1),[C,v]=k.useState(0),[x,y]=k.useState(!1),$=k.useRef(null);k.useEffect(()=>{h(0),g(!1),b(!1)},[e]),k.useEffect(()=>{if(x&&!w){const V=setTimeout(()=>{h(1),b(!0),g(!0)},2e3);return()=>clearTimeout(V)}},[x,w]),k.useEffect(()=>{const V=H=>{if(w&&H.deltaY<0&&window.scrollY<=5)b(!1),H.preventDefault();else if(!w&&!x){H.preventDefault();const he=H.deltaY*9e-4,A=Math.min(Math.max(u+he,0),1);h(A),A>=1?(b(!0),g(!0)):A<.75&&g(!1)}},Q=H=>{x&&!w&&(h(1),b(!0),g(!0)),v(H.touches[0].clientY)},ne=H=>{if(!C||x)return;const he=H.touches[0].clientY,A=C-he;if(w&&A<-20&&window.scrollY<=5)b(!1),H.preventDefault();else if(!w){H.preventDefault();const R=A<0?.008:.005,W=A*R,B=Math.min(Math.max(u+W,0),1);h(B),B>=1?(b(!0),g(!0)):B<.75&&g(!1),v(he)}},X=()=>{v(0)},Ye=()=>{!w&&!x&&window.scrollTo(0,0)};return x||(window.addEventListener("wheel",V,{passive:!1}),window.addEventListener("scroll",Ye)),window.addEventListener("touchstart",Q,{passive:!1}),window.addEventListener("touchmove",ne,{passive:!1}),window.addEventListener("touchend",X),()=>{window.removeEventListener("wheel",V),window.removeEventListener("scroll",Ye),window.removeEventListener("touchstart",Q),window.removeEventListener("touchmove",ne),window.removeEventListener("touchend",X)}},[u,w,C,x]),k.useEffect(()=>{const V=()=>{y(window.innerWidth<1025)};return V(),window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[]);const z=300+u*(x?650:1250),T=400+u*(x?200:400),S=u*(x?180:150),P=a?a.split(" "):[],E=P[0]||"",L=P.slice(1).join(" ");return r.jsx(D7,{ref:$,children:r.jsx(V7,{children:r.jsxs(N7,{children:[!x&&r.jsxs(O7,{as:j.div,initial:{opacity:0},animate:{opacity:1-u},transition:{duration:.1},children:[r.jsx(_7,{src:n,alt:"","aria-hidden":"true",loading:"eager",decoding:"async",$objectPosition:o}),r.jsx(H7,{})]}),r.jsxs(U7,{children:[r.jsxs(Z7,{children:[r.jsxs(Y7,{style:{width:`${z}px`,height:`${T}px`},children:[e==="video"?t.includes("youtube.com")?r.jsxs(Ru,{children:[r.jsx("iframe",{width:"100%",height:"100%",src:t.includes("embed")?t+(t.includes("?")?"&":"?")+"autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1":t.replace("watch?v=","embed/")+"?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist="+t.split("v=")[1],frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{borderRadius:"16px"}}),r.jsx(pd,{as:j.div,initial:{opacity:.7},animate:{opacity:.5-u*.3},transition:{duration:.2}})]}):r.jsxs(Ru,{children:[r.jsx(Q7,{src:t,poster:i,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto"}),r.jsx(pd,{as:j.div,initial:{opacity:.7},animate:{opacity:.5-u*.3},transition:{duration:.2}})]}):r.jsxs(G7,{children:[r.jsx(K7,{src:t,alt:a||"Media content"}),r.jsx(pd,{as:j.div,initial:{opacity:.7},animate:{opacity:.7-u*.3},transition:{duration:.2}})]}),r.jsx(q7,{style:{transform:`translateX(${S}vw)`},children:c})]}),r.jsxs(X7,{$textBlend:m,children:[r.jsx(J7,{as:j.h2,style:{transform:`translateX(-${S}vw)`},children:E}),r.jsx(e8,{as:j.h2,style:{transform:`translateX(${S}vw)`},children:L})]})]}),r.jsx(t8,{as:j.section,initial:{opacity:0},animate:{opacity:f?1:0},transition:{duration:.7},children:p})]})]})})})},D7=l.div`
  transition: background-color 0.7s ease-in-out;
  overflow-x: hidden;
  width: 100%;
  -webkit-overflow-scrolling: touch;
`,V7=l.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
  margin-top: 0;
  padding-top: 0;

  @media (max-width: ${d.breakpoints.mobile}) {
    min-height: 100vh;
    min-height: 100dvh;
    min-height: -webkit-fill-available;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    min-height: 600px;
  }
`,N7=l.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.mobile}) {
    min-height: 100vh;
    min-height: 100dvh;
  }
`,O7=l.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.mobile}) {
    position: absolute;
    height: 100%;
  }
`,_7=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${e=>e.$objectPosition||"center center"};

  @media (max-width: ${d.breakpoints.tablet}) {
    object-position: center 40%;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    object-position: center 35%;
  }

  @media (max-width: 390px) {
    object-position: center 30%;
  }

  @media (max-width: 360px) {
    object-position: center 25%;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    object-position: center 50%;
  }
`,H7=l.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1;

  @media (max-width: ${d.breakpoints.tablet}) {
    background: rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    background: rgba(0, 0, 0, 0.2);
  }
`,U7=l.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 10;
  
  @media (max-width: ${d.breakpoints.tablet}) {
    max-width: 100%;
    padding: 0;
  }
`,Z7=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  position: relative;
  padding: 0 1rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    height: 100vh;
    height: 100dvh;
    padding: 0 0.75rem;
  }

  @media (max-width: 390px) {
    padding: 0 0.5rem;
  }
`,Y7=l.div`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  max-width: 95vw;
  max-height: 85vh;
  box-shadow: 0px 10px 60px rgba(34, 55, 27, 0.35);
  overflow: hidden;

  @media (max-width: ${d.breakpoints.tablet}) {
    border-radius: 20px;
    max-width: 92vw;
    max-height: 80vh;
    box-shadow: 0px 8px 50px rgba(34, 55, 27, 0.3);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    border-radius: 16px;
    max-width: 90vw;
    max-height: 75vh;
    box-shadow: 0px 6px 40px rgba(34, 55, 27, 0.25);
  }

  @media (max-width: 390px) {
    border-radius: 14px;
    max-width: 88vw;
    max-height: 70vh;
  }

  @media (max-width: 360px) {
    border-radius: 12px;
    max-width: 86vw;
    max-height: 68vh;
  }
`,Ru=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;

  iframe {
    border-radius: 24px;

    @media (max-width: ${d.breakpoints.tablet}) {
      border-radius: 20px;
    }

    @media (max-width: ${d.breakpoints.mobile}) {
      border-radius: 16px;
    }

    @media (max-width: 390px) {
      border-radius: 14px;
    }

    @media (max-width: 360px) {
      border-radius: 12px;
    }
  }
`,Q7=l.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;

  @media (max-width: ${d.breakpoints.tablet}) {
    border-radius: 20px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    border-radius: 16px;
  }

  @media (max-width: 390px) {
    border-radius: 14px;
  }

  @media (max-width: 360px) {
    border-radius: 12px;
  }
`,G7=l.div`
  position: relative;
  width: 100%;
  height: 100%;
`,K7=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;

  @media (max-width: ${d.breakpoints.tablet}) {
    border-radius: 20px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    border-radius: 16px;
  }

  @media (max-width: 390px) {
    border-radius: 14px;
  }

  @media (max-width: 360px) {
    border-radius: 12px;
  }
`,pd=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(34, 55, 27, 0.15) 0%, rgba(34, 55, 27, 0.35) 100%);
  border-radius: 24px;

  @media (max-width: ${d.breakpoints.tablet}) {
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(34, 55, 27, 0.12) 0%, rgba(34, 55, 27, 0.3) 100%);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    border-radius: 16px;
    background: linear-gradient(180deg, rgba(34, 55, 27, 0.1) 0%, rgba(34, 55, 27, 0.28) 100%);
  }

  @media (max-width: 390px) {
    border-radius: 14px;
  }

  @media (max-width: 360px) {
    border-radius: 12px;
  }
`,q7=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.8125rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-top: 1.25rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  
  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.75rem;
    margin-top: 1rem;
    letter-spacing: 0.12em;
  }

  @media (max-width: 390px) {
    font-size: 0.6875rem;
    margin-top: 0.875rem;
  }
`,X7=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  width: 100%;
  position: relative;
  z-index: 10;
  mix-blend-mode: ${e=>e.$textBlend?"difference":"normal"};
  padding: 0 1rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 0.375rem;
    padding: 0 0.75rem;
  }

  @media (max-width: 390px) {
    gap: 0.25rem;
    padding: 0 0.5rem;
  }
`,J7=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 7vw, 5rem);
  font-weight: 600;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 30px rgba(34, 55, 27, 0.4);
  line-height: 1.1;
  margin: 0;

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: clamp(1.75rem, 9vw, 2.5rem);
    text-shadow: 0 3px 20px rgba(34, 55, 27, 0.5);
  }

  @media (max-width: 390px) {
    font-size: clamp(1.5rem, 9vw, 2rem);
  }

  @media (max-width: 360px) {
    font-size: clamp(1.375rem, 8.5vw, 1.875rem);
  }
`,e8=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 7vw, 5rem);
  font-weight: 600;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 30px rgba(34, 55, 27, 0.4);
  line-height: 1.1;
  margin: 0;

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: clamp(1.75rem, 9vw, 2.5rem);
    text-shadow: 0 3px 20px rgba(34, 55, 27, 0.5);
  }

  @media (max-width: 390px) {
    font-size: clamp(1.5rem, 9vw, 2rem);
  }

  @media (max-width: 360px) {
    font-size: clamp(1.375rem, 8.5vw, 1.875rem);
  }
`,t8=l.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  
  @media (min-width: ${d.breakpoints.tablet}) {
    padding: 4rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 1.5rem;
  }

  @media (max-width: 390px) {
    padding: 1.25rem;
  }

  @media (max-width: 360px) {
    padding: 1rem;
  }
`,pa=[{image:"/new%20images/pranayam%20practice.png",category:"Breathing",title:"Pranayama Practice"},{image:"/new%20images/holistic%20healing.png",category:"Wellness",title:"Holistic Healing"},{image:"/new%20images/yogic%20coaching.png",category:"Lifestyle",title:"Yogic Lifestyle Coaching"},{image:"/new%20images/morning%20flow%20(2).png",category:"Yoga",title:"Morning Yoga Flow"},{image:"/new%20images/weekend%20wellness%20treat.png",category:"Retreat",title:"Weekend Wellness Retreat",objectPosition:"left center"},{image:"/new%20images/meditation.png",category:"Meditation",title:"Mindful Meditation"}],i8=()=>r.jsxs(n8,{children:[r.jsxs(r8,{children:[r.jsx(j.span,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:"Our Programs"}),r.jsx(j.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:"Transform Your Life"})]}),r.jsxs(o8,{as:j.div,initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},transition:{duration:1,delay:.3},viewport:{once:!0},children:[r.jsx(a8,{}),r.jsx(s8,{}),r.jsx(l8,{as:j.div,animate:{x:[0,-(pa.length*380/2)]},transition:{x:{repeat:1/0,repeatType:"loop",duration:pa.length*4,ease:"linear"}},children:[...pa,...pa].map((e,t)=>r.jsxs(d8,{as:j.div,whileHover:{scale:1.05,y:-10},transition:{duration:.3},children:[r.jsx(c8,{src:e.image,alt:e.title,loading:"lazy",$objectPosition:e.objectPosition}),r.jsx(m8,{}),r.jsxs(p8,{children:[r.jsx(h8,{children:e.category}),r.jsx(u8,{children:e.title})]})]},t))})]})]}),n8=l.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, ${d.colors.background} 0%, ${d.colors.backgroundDark} 100%);
  overflow: hidden;
  isolation: isolate;
  will-change: auto;

  @media (min-width: 1920px) {
    padding: 7rem 0;
  }

  @media (max-width: 1440px) {
    padding: 5rem 0;
  }

  @media (max-width: 1200px) {
    padding: 4.5rem 0;
  }

  @media (max-width: 1024px) {
    padding: 4rem 0;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 3.5rem 0;
  }

  @media (max-width: 640px) {
    padding: 3rem 0;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 2.5rem 0;
  }

  @media (max-width: 390px) {
    padding: 2rem 0;
  }

  @media (max-width: 375px) {
    padding: 1.75rem 0;
  }
`;var Ff;const r8=l.div`
  text-align: center;
  margin-bottom: 3.5rem;
  padding: 0 1.5rem;
  transform: translateZ(0);

  span {
    display: block;
    font-family: ${d.fonts.body};
    font-size: ${d.fontSizes.sm};
    font-weight: 600;
    color: #cec5ad;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-family: ${d.fonts.heading};
    font-size: ${d.fontSizes["4xl"]};
    font-weight: 500;
    color: #22371b;
    margin: 0;
    transform: translateZ(0);

    @media (max-width: ${(Ff=d.breakpoints)==null?void 0:Ff.tablet}) {
      font-size: ${d.fontSizes["3xl"]};
    }
  }

  @media (min-width: 1920px) {
    margin-bottom: 4.5rem;
    padding: 0 2rem;

    span {
      font-size: 1rem;
      letter-spacing: 0.16em;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: clamp(2.5rem, 4.5vw, 3.75rem);
    }
  }

  @media (max-width: 1440px) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: 1200px) {
    margin-bottom: 3.25rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 3rem;
    padding: 0 1.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    margin-bottom: 2.75rem;
    padding: 0 1.25rem;

    span {
      font-size: 0.875rem;
      letter-spacing: 0.13em;
    }
  }

  @media (max-width: 640px) {
    margin-bottom: 2.5rem;
    padding: 0 1rem;

    span {
      font-size: 0.8125rem;
      letter-spacing: 0.12em;
      margin-bottom: 0.625rem;
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 2rem;
    padding: 0 1rem;

    span {
      font-size: 0.75rem;
      letter-spacing: 0.1em;
    }
  }

  @media (max-width: 390px) {
    margin-bottom: 1.75rem;
    padding: 0 0.875rem;

    span {
      font-size: 0.6875rem;
      letter-spacing: 0.09em;
    }
  }

  @media (max-width: 375px) {
    margin-bottom: 1.5rem;
    padding: 0 0.75rem;
  }
`,o8=l.div`
  position: relative;
  width: 100%;
  padding: 2rem 0;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 1024px) {
    padding: 1.75rem 0;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 1.5rem 0;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 1rem 0;
  }

  @media (max-width: 390px) {
    padding: 0.875rem 0;
  }

  @media (max-width: 375px) {
    padding: 0.75rem 0;
  }
`,a8=l.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 150px;
  background: linear-gradient(90deg, ${d.colors.background} 0%, rgba(250, 248, 245, 0) 100%);
  z-index: 10;
  pointer-events: none;
  transform: translateZ(0);
  will-change: auto;

  @media (min-width: 1920px) {
    width: 180px;
  }

  @media (max-width: 1440px) {
    width: 140px;
  }

  @media (max-width: 1200px) {
    width: 120px;
  }

  @media (max-width: 1024px) {
    width: 100px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    width: 80px;
  }

  @media (max-width: 640px) {
    width: 60px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 50px;
  }

  @media (max-width: 390px) {
    width: 40px;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    width: 30px;
  }
`,s8=l.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 150px;
  background: linear-gradient(270deg, ${d.colors.backgroundDark} 0%, rgba(245, 242, 237, 0) 100%);
  z-index: 10;
  pointer-events: none;
  transform: translateZ(0);
  will-change: auto;

  @media (min-width: 1920px) {
    width: 180px;
  }

  @media (max-width: 1440px) {
    width: 140px;
  }

  @media (max-width: 1200px) {
    width: 120px;
  }

  @media (max-width: 1024px) {
    width: 100px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    width: 80px;
  }

  @media (max-width: 640px) {
    width: 60px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 50px;
  }

  @media (max-width: 390px) {
    width: 40px;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    width: 30px;
  }
`,l8=l.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-left: 24px;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 1920px) {
    gap: 32px;
    padding-left: 32px;
  }

  @media (max-width: 1440px) {
    gap: 24px;
    padding-left: 24px;
  }

  @media (max-width: 1024px) {
    gap: 20px;
    padding-left: 20px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    gap: 18px;
    padding-left: 18px;
  }

  @media (max-width: 640px) {
    gap: 16px;
    padding-left: 16px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 14px;
    padding-left: 14px;
  }

  @media (max-width: 390px) {
    gap: 12px;
    padding-left: 12px;
  }

  @media (max-width: 360px) {
    gap: 10px;
    padding-left: 10px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,d8=l.div`
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 320px;
  height: 420px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(34, 55, 27, 0.12);
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 1920px) {
    width: 380px;
    height: 500px;
    border-radius: 28px;
    box-shadow: 0 12px 48px rgba(34, 55, 27, 0.14);
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    width: 360px;
    height: 480px;
    border-radius: 26px;
  }

  @media (max-width: 1440px) {
    width: 320px;
    height: 420px;
  }

  @media (max-width: 1200px) {
    width: 310px;
    height: 400px;
    border-radius: 22px;
  }

  @media (max-width: 1024px) {
    width: 300px;
    height: 380px;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(34, 55, 27, 0.1);
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    width: 280px;
    height: 360px;
    border-radius: 18px;
  }

  @media (max-width: 640px) {
    width: 270px;
    height: 350px;
    border-radius: 18px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 260px;
    height: 340px;
    border-radius: 16px;
    box-shadow: 0 6px 24px rgba(34, 55, 27, 0.08);
  }

  @media (max-width: 430px) {
    width: 250px;
    height: 330px;
  }

  @media (max-width: 390px) {
    width: 240px;
    height: 320px;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    width: 220px;
    height: 300px;
    border-radius: 14px;
  }

  @media (max-width: 375px) {
    width: 230px;
    height: 310px;
  }

  @media (hover: none) and (pointer: coarse) {
    &:active {
      transform: scale(0.98) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: translateZ(0);
    }
  }
`,c8=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${e=>e.$objectPosition||"center"};
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
`,m8=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
  transform: translateZ(0);
  backface-visibility: hidden;
`,p8=l.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    padding: 2rem;
    gap: 10px;
  }

  @media (max-width: 1440px) {
    padding: 1.5rem;
  }

  @media (max-width: 1024px) {
    padding: 1.375rem;
    gap: 7px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 1.25rem;
    gap: 6px;
  }

  @media (max-width: 640px) {
    padding: 1.125rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 1rem;
    gap: 5px;
  }

  @media (max-width: 390px) {
    padding: 0.875rem;
  }

  @media (max-width: 360px) {
    padding: 0.75rem;
    gap: 4px;
  }
`,h8=l.span`
  font-family: ${d.fonts.body};
  font-size: 11px;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 12px;
    letter-spacing: 0.16em;
  }

  @media (max-width: 1024px) {
    font-size: 10.5px;
    letter-spacing: 0.14em;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: 10px;
    letter-spacing: 0.13em;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 9.5px;
    letter-spacing: 0.12em;
  }

  @media (max-width: 390px) {
    font-size: 9px;
    letter-spacing: 0.11em;
  }

  @media (max-width: 360px) {
    font-size: 8.5px;
    letter-spacing: 0.1em;
  }
`,u8=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.3;
  margin: 0;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.35;
  }

  @media (max-width: 1440px) {
    font-size: 22px;
  }

  @media (max-width: 1200px) {
    font-size: 21px;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 1.28;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: 19px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 1.25;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 17px;
  }

  @media (max-width: 430px) {
    font-size: 16px;
  }

  @media (max-width: 390px) {
    font-size: 15px;
    line-height: 1.2;
  }

  @media (max-width: 360px) {
    font-size: 14px;
  }
`,f8="/6 images/our story.jpeg",g8=()=>{const e=k.useRef(null),t=O(e,{once:!0,amount:.3}),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.2}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.1,.25,1]}}},o={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:.9,ease:[.25,.1,.25,1]}}};return r.jsxs(x8,{ref:e,children:[r.jsx(y8,{children:r.jsxs("svg",{viewBox:"0 0 200 400",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M100 20C100 20 180 100 180 200C180 300 100 380 100 380",stroke:"#d4e5d6",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100 60C100 60 150 120 150 200C150 280 100 340 100 340",stroke:"#d4e5d6",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M100 100C100 100 130 140 130 200C130 260 100 300 100 300",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M60 120C60 120 100 160 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M140 120C140 120 100 160 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M50 180C50 180 100 200 100 200",stroke:"#d4e5d6",strokeWidth:"0.6",fill:"none"}),r.jsx("path",{d:"M150 180C150 180 100 200 100 200",stroke:"#d4e5d6",strokeWidth:"0.6",fill:"none"}),r.jsx("path",{d:"M60 260C60 260 100 240 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M140 260C140 260 100 240 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"})]})}),r.jsxs(w8,{as:j.div,variants:i,initial:"hidden",animate:t?"visible":"hidden",children:[r.jsxs(v8,{as:j.div,variants:o,children:[r.jsx(Bu,{className:"primary"}),r.jsx(Bu,{className:"secondary"}),r.jsx(ha,{className:"top-left",children:r.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"40",y2:"0",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("line",{x1:"0",y1:"0",x2:"0",y2:"40",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("circle",{cx:"4",cy:"4",r:"2",fill:"#cec5ad"})]})}),r.jsx(ha,{className:"top-right",children:r.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"40",y2:"0",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("line",{x1:"40",y1:"0",x2:"40",y2:"40",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("circle",{cx:"36",cy:"4",r:"2",fill:"#cec5ad"})]})}),r.jsx(ha,{className:"bottom-left",children:r.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",children:[r.jsx("line",{x1:"0",y1:"40",x2:"40",y2:"40",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("line",{x1:"0",y1:"0",x2:"0",y2:"40",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("circle",{cx:"4",cy:"36",r:"2",fill:"#cec5ad"})]})}),r.jsx(ha,{className:"bottom-right",children:r.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",children:[r.jsx("line",{x1:"0",y1:"40",x2:"40",y2:"40",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("line",{x1:"40",y1:"0",x2:"40",y2:"40",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("circle",{cx:"36",cy:"36",r:"2",fill:"#cec5ad"})]})}),r.jsx(hd,{className:"vertical-left"}),r.jsx(hd,{className:"vertical-right"}),r.jsx(hd,{className:"horizontal-top"}),r.jsx(b8,{children:r.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",children:[r.jsx("circle",{cx:"40",cy:"40",r:"38",fill:"#cec5ad",opacity:"0.95"}),r.jsx("circle",{cx:"40",cy:"40",r:"30",fill:"none",stroke:"#22371b",strokeWidth:"1",opacity:"0.3"}),r.jsx("text",{x:"40",y:"35",textAnchor:"middle",fill:"#22371b",fontSize:"12",fontWeight:"600",children:"12+"}),r.jsx("text",{x:"40",y:"48",textAnchor:"middle",fill:"#22371b",fontSize:"8",children:"Years"})]})}),r.jsxs(k8,{children:[r.jsx(j8,{}),r.jsxs(Ji,{children:[r.jsx(S8,{src:f8,alt:"About BK Shikha - Yoga & Wellness"}),r.jsx($8,{})]})]})]}),r.jsxs(C8,{children:[r.jsx(j.div,{variants:n,children:r.jsx(z8,{children:"Philosophy"})}),r.jsx(j.div,{variants:n,children:r.jsx(T8,{children:"Our Story"})}),r.jsx(j.div,{variants:n,children:r.jsx(P8,{children:"Discover the journey behind BK Shikha's wellness mission"})}),r.jsx(j.div,{variants:n,children:r.jsx(Fu,{children:"BK Shikha is a dedicated Holistic Wellness Coach with over 12 years in Yoga and 15 years in Meditation. As a certified NLP Practitioner, Gut Health Expert, and Counselor, she specializes in mind-body healing, supporting children, teenagers, and adults through stress, anxiety, emotional wellness, and relationship challenges."})}),r.jsx(j.div,{variants:n,children:r.jsx(Fu,{children:"Her holistic approach combines ancient wisdom with modern science. True healing begins with the mind — when calm and balanced, the body naturally transforms, empowering long-term physical, mental, and emotional well-being."})}),r.jsx(j.div,{variants:n,children:r.jsx(M8,{to:"/philosophy",children:"Learn about our holistic approach"})})]})]})]})},x8=l.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #f8f9f6 0%, #f3f5f2 50%, #eef1ec 100%);
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 100%;
    background: radial-gradient(ellipse at 20% 50%, rgba(206, 197, 173, 0.08) 0%, transparent 50%);
    pointer-events: none;
    will-change: auto;
  }

  @media (min-width: 1920px) {
    padding: 9rem 0;
  }

  @media (max-width: 1440px) {
    padding: 6rem 0;
  }

  @media (max-width: 1200px) {
    padding: 5rem 0;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4.5rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 3rem 0;
  }

  @media (max-width: 390px) {
    padding: 2.5rem 0;
  }
`,y8=l.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateZ(0);
  width: 150px;
  height: 400px;
  opacity: 0.6;
  pointer-events: none;
  will-change: auto;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    opacity: 0.4;
    width: 120px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    display: none;
  }
`,w8=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4rem;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1920px) {
    max-width: 1400px;
    gap: 8rem;
    padding: 0 5rem;
  }

  @media (max-width: 1440px) {
    gap: 5rem;
    padding: 0 3rem;
  }

  @media (max-width: 1200px) {
    gap: 4rem;
    padding: 0 2.5rem;
  }

  @media (max-width: 1024px) {
    gap: 4rem;
    padding: 0 2rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 0 2rem;
  }

  @media (max-width: 640px) {
    gap: 2.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 2rem;
    padding: 0 1.25rem;
  }

  @media (max-width: 390px) {
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 375px) {
    padding: 0 0.875rem;
  }
`,v8=l.div`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    height: 650px;
  }

  @media (max-width: 1200px) {
    height: 550px;
  }

  @media (max-width: 1024px) {
    height: 520px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    height: 500px;
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: 820px) {
    height: 480px;
    max-width: 450px;
  }

  @media (max-width: 640px) {
    height: 450px;
    max-width: 400px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    height: 420px;
    max-width: 350px;
  }

  @media (max-width: 430px) {
    height: 400px;
    max-width: 320px;
  }

  @media (max-width: 390px) {
    height: 380px;
    max-width: 300px;
  }

  @media (max-width: 375px) {
    height: 360px;
    max-width: 280px;
  }
`,Bu=l.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translateZ(0);
  backface-visibility: hidden;

  &.primary {
    transform: translate(-50%, -50%) rotate(-2deg) translateZ(0);
    width: 420px;
    height: 520px;
    background: linear-gradient(135deg, #1a2817 0%, #22371b 50%, #2d4a24 100%);
    border-radius: 16px;
    box-shadow: 
      0 30px 80px rgba(34, 55, 27, 0.4),
      0 15px 40px rgba(34, 55, 27, 0.3);
    will-change: transform;
  }

  &.secondary {
    transform: translate(-48%, -52%) rotate(2deg) translateZ(0);
    width: 410px;
    height: 510px;
    background: linear-gradient(135deg, rgba(206, 197, 173, 0.15) 0%, rgba(206, 197, 173, 0.08) 100%);
    border-radius: 16px;
    border: 1px solid rgba(206, 197, 173, 0.3);
  }

  @media (min-width: 1920px) {
    &.primary {
      width: 460px;
      height: 560px;
    }
    &.secondary {
      width: 450px;
      height: 550px;
    }
  }

  @media (max-width: 1200px) {
    &.primary {
      width: 400px;
      height: 500px;
    }
    &.secondary {
      width: 390px;
      height: 490px;
    }
  }

  @media (max-width: 1024px) {
    &.primary {
      width: 390px;
      height: 490px;
    }
    &.secondary {
      width: 380px;
      height: 480px;
    }
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    &.primary {
      width: 380px;
      height: 480px;
      box-shadow: 
        0 20px 60px rgba(34, 55, 27, 0.35),
        0 10px 30px rgba(34, 55, 27, 0.25);
    }
    &.secondary {
      width: 370px;
      height: 470px;
    }
  }

  @media (max-width: 820px) {
    &.primary {
      width: 350px;
      height: 450px;
    }
    &.secondary {
      width: 340px;
      height: 440px;
    }
  }

  @media (max-width: 640px) {
    &.primary {
      width: 330px;
      height: 420px;
    }
    &.secondary {
      width: 320px;
      height: 410px;
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    &.primary {
      width: 300px;
      height: 380px;
      box-shadow: 
        0 15px 40px rgba(34, 55, 27, 0.3),
        0 8px 20px rgba(34, 55, 27, 0.2);
    }
    &.secondary {
      width: 290px;
      height: 370px;
    }
  }

  @media (max-width: 430px) {
    &.primary {
      width: 280px;
      height: 360px;
    }
    &.secondary {
      width: 270px;
      height: 350px;
    }
  }

  @media (max-width: 390px) {
    &.primary {
      width: 260px;
      height: 340px;
    }
    &.secondary {
      width: 250px;
      height: 330px;
    }
  }

  @media (max-width: 375px) {
    &.primary {
      width: 245px;
      height: 320px;
      box-shadow: 
        0 10px 30px rgba(34, 55, 27, 0.25),
        0 5px 15px rgba(34, 55, 27, 0.15);
    }
    &.secondary {
      width: 235px;
      height: 310px;
    }
  }
`,ha=l.div`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 4;
  opacity: 0.9;
  transform: translateZ(0);

  &.top-left {
    top: 6%;
    left: 6%;
  }

  &.top-right {
    top: 6%;
    right: 6%;
  }

  &.bottom-left {
    bottom: 6%;
    left: 6%;
  }

  &.bottom-right {
    bottom: 6%;
    right: 6%;
  }

  @media (max-width: 1024px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    width: 34px;
    height: 34px;
    opacity: 0.85;
  }

  @media (max-width: 640px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 28px;
    height: 28px;
    
    svg line {
      stroke-width: 1.5;
    }
  }

  @media (max-width: 390px) {
    width: 24px;
    height: 24px;
    opacity: 0.8;
    
    svg line {
      stroke-width: 1.3;
    }
    svg circle {
      r: 1.5;
    }
  }

  @media (max-width: 375px) {
    display: none;
  }
`,hd=l.div`
  position: absolute;
  background: linear-gradient(90deg, transparent 0%, #cec5ad 50%, transparent 100%);
  z-index: 1;
  opacity: 0.4;
  transform: translateZ(0);

  &.vertical-left {
    left: 5%;
    top: 15%;
    width: 2px;
    height: 120px;
    background: linear-gradient(180deg, transparent 0%, #cec5ad 50%, transparent 100%);
  }

  &.vertical-right {
    right: 5%;
    bottom: 15%;
    width: 2px;
    height: 100px;
    background: linear-gradient(180deg, transparent 0%, #cec5ad 50%, transparent 100%);
  }

  &.horizontal-top {
    top: 10%;
    right: 10%;
    width: 80px;
    height: 2px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    display: none;
  }
`,b8=l.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 80px;
  height: 80px;
  z-index: 5;
  animation: floatBadge 4s ease-in-out infinite;
  filter: drop-shadow(0 4px 12px rgba(206, 197, 173, 0.5));
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  @keyframes floatBadge {
    0%, 100% {
      transform: translateY(0) rotate(0deg) translateZ(0);
    }
    50% {
      transform: translateY(-10px) rotate(5deg) translateZ(0);
    }
  }

  @media (min-width: 1920px) {
    width: 90px;
    height: 90px;
    top: -12px;
    right: -12px;
  }

  @media (max-width: 1024px) {
    width: 75px;
    height: 75px;
    top: -8px;
    right: -8px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    width: 70px;
    height: 70px;
    top: -5px;
    right: -5px;
  }

  @media (max-width: 640px) {
    width: 65px;
    height: 65px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 58px;
    height: 58px;
    top: -3px;
    right: -3px;
  }

  @media (max-width: 390px) {
    width: 52px;
    height: 52px;
    animation: floatBadgeSimple 4s ease-in-out infinite;
    
    @keyframes floatBadgeSimple {
      0%, 100% {
        transform: translateY(0) translateZ(0);
      }
      50% {
        transform: translateY(-6px) translateZ(0);
      }
    }
  }

  @media (max-width: 375px) {
    width: 48px;
    height: 48px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,k8=l.div`
  position: relative;
  width: 400px;
  height: 500px;
  z-index: 3;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    width: 440px;
    height: 540px;
  }

  @media (max-width: 1200px) {
    width: 380px;
    height: 480px;
  }

  @media (max-width: 1024px) {
    width: 370px;
    height: 470px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    width: 360px;
    height: 460px;
  }

  @media (max-width: 820px) {
    width: 340px;
    height: 440px;
  }

  @media (max-width: 640px) {
    width: 320px;
    height: 410px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 290px;
    height: 370px;
  }

  @media (max-width: 430px) {
    width: 270px;
    height: 350px;
  }

  @media (max-width: 390px) {
    width: 250px;
    height: 330px;
  }

  @media (max-width: 375px) {
    width: 235px;
    height: 310px;
  }
`,j8=l.div`
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: linear-gradient(135deg, #cec5ad 0%, #d4cdb3 50%, #cec5ad 100%);
  border-radius: 24px;
  z-index: -1;
  box-shadow: 
    0 8px 32px rgba(206, 197, 173, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  transform: translateZ(0);

  @media (max-width: 1200px) {
    border-radius: 22px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    border-radius: 20px;
    top: -7px;
    left: -7px;
    right: -7px;
    bottom: -7px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    border-radius: 18px;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    box-shadow: 
      0 6px 24px rgba(206, 197, 173, 0.25),
      inset 0 2px 3px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 390px) {
    border-radius: 16px;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
  }

  @media (max-width: 375px) {
    border-radius: 14px;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
  }
`,Ji=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 5px solid #FAF8F5;
  box-shadow: 
    0 30px 70px rgba(0, 0, 0, 0.25),
    0 15px 35px rgba(0, 0, 0, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 -2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: transform 0.4s ease;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    transform: translateY(-4px) translateZ(0);
    box-shadow: 
      0 35px 80px rgba(0, 0, 0, 0.3),
      0 18px 40px rgba(0, 0, 0, 0.22),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 1200px) {
    border-radius: 18px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    border-radius: 16px;
    border-width: 4px;
    box-shadow: 
      0 20px 50px rgba(0, 0, 0, 0.22),
      0 10px 25px rgba(0, 0, 0, 0.18),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);
    
    &:hover {
      transform: translateY(-3px) translateZ(0);
      box-shadow: 
        0 25px 60px rgba(0, 0, 0, 0.25),
        0 12px 30px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    border-width: 3px;
    border-radius: 14px;
    box-shadow: 
      0 15px 40px rgba(0, 0, 0, 0.2),
      0 8px 20px rgba(0, 0, 0, 0.15),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);
    
    &:hover {
      transform: translateY(-2px) translateZ(0);
    }
  }

  @media (max-width: 390px) {
    border-radius: 12px;
    border-width: 3px;
  }

  @media (max-width: 375px) {
    border-radius: 11px;
    border-width: 2px;
    box-shadow: 
      0 12px 30px rgba(0, 0, 0, 0.18),
      0 6px 15px rgba(0, 0, 0, 0.12);
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
      box-shadow: 
        0 15px 40px rgba(0, 0, 0, 0.2),
        0 8px 20px rgba(0, 0, 0, 0.15),
        inset 0 0 0 1px rgba(255, 255, 255, 0.2);
    }
  }
`,$8=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(34, 55, 27, 0.03) 0%,
    transparent 20%,
    transparent 80%,
    rgba(34, 55, 27, 0.08) 100%
  );
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.4s ease;
  transform: translateZ(0);

  ${Ji}:hover & {
    opacity: 0.5;
  }

  @media (hover: none) and (pointer: coarse) {
    ${Ji}:hover & {
      opacity: 1;
    }
  }
`,S8=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  ${Ji}:hover & {
    transform: scale(1.08) translateZ(0);
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    ${Ji}:hover & {
      transform: scale(1.05) translateZ(0);
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    transition: transform 0.4s ease;
    
    ${Ji}:hover & {
      transform: scale(1.03) translateZ(0);
    }
  }

  @media (hover: none) and (pointer: coarse) {
    ${Ji}:hover & {
      transform: translateZ(0);
    }
  }
`,C8=l.div`
  max-width: 500px;

  @media (min-width: 1920px) {
    max-width: 580px;
  }

  @media (max-width: 1200px) {
    max-width: 480px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,z8=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #22371b;
  margin-bottom: 1rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.9375rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 390px) {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }
`,T8=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 500;
  color: #22371b;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;

  @media (min-width: 1920px) {
    font-size: clamp(2.5rem, 4.5vw, 3.5rem);
    margin-bottom: 1.75rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  @media (max-width: 390px) {
    margin-bottom: 0.875rem;
  }
`,P8=l.h3`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  font-weight: 400;
  color: #21371a;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;

  @media (min-width: 1920px) {
    font-size: 1.25rem;
    margin-bottom: 1.75rem;
  }

  @media (max-width: 640px) {
    font-size: 1.0625rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.55;
  }

  @media (max-width: 390px) {
    font-size: 0.9375rem;
    margin-bottom: 0.875rem;
  }
`,Fu=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #21371a;
  margin-bottom: 2rem;

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    line-height: 1.85;
    margin-bottom: 2.25rem;
  }

  @media (max-width: 1200px) {
    margin-bottom: 1.75rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 1.5rem;
    line-height: 1.75;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.9375rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 390px) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    line-height: 1.65;
  }
`,M8=l(_)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.75rem;
  background: transparent;
  color: #22371b;
  border: 2px solid #22371b;
  border-radius: 100px;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
  white-space: nowrap;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    background: #22371b;
    color: #FAF8F5;
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 8px 25px rgba(34, 55, 27, 0.25);
  }

  @media (min-width: 1920px) {
    padding: 1.125rem 3rem;
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    padding: 0.9375rem 2.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    margin: 0 auto;
    padding: 1rem 2.5rem;
  }

  @media (max-width: 640px) {
    padding: 0.875rem 2.25rem;
    font-size: 0.875rem;
    white-space: normal;
    text-align: center;
    max-width: 280px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0.8125rem 2rem;
    font-size: 0.8125rem;
    max-width: 260px;
    
    &:hover {
      transform: translateY(-1px) translateZ(0);
      box-shadow: 0 6px 20px rgba(34, 55, 27, 0.22);
    }
  }

  @media (max-width: 390px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.75rem;
    max-width: 240px;
    border-width: 1.5px;
  }

  @media (max-width: 375px) {
    padding: 0.6875rem 1.5rem;
    font-size: 0.6875rem;
    max-width: 220px;
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
    }

    &:active {
      background: #22371b;
      color: #FAF8F5;
      transform: scale(0.98) translateZ(0);
    }
  }
`,A8=()=>r.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("path",{d:"M32 8v8M32 48v8M8 32h8M48 32h8",strokeLinecap:"round"}),r.jsx("circle",{cx:"32",cy:"32",r:"20"}),r.jsx("path",{d:"M32 20v12l8 8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M20 12l4 4M44 12l-4 4M20 52l4-4M44 52l-4-4",strokeLinecap:"round"})]}),L8=()=>r.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("circle",{cx:"32",cy:"16",r:"8"}),r.jsx("path",{d:"M32 24v8",strokeLinecap:"round"}),r.jsx("path",{d:"M24 36c0-4.4 3.6-8 8-8s8 3.6 8 8",strokeLinecap:"round"}),r.jsx("path",{d:"M20 44h24",strokeLinecap:"round"}),r.jsx("path",{d:"M16 52h32",strokeLinecap:"round"}),r.jsx("circle",{cx:"32",cy:"36",r:"4",fill:"currentColor",opacity:"0.3"})]}),E8=()=>r.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("circle",{cx:"32",cy:"12",r:"6"}),r.jsx("path",{d:"M32 18v14",strokeLinecap:"round"}),r.jsx("path",{d:"M32 32l-16 20",strokeLinecap:"round"}),r.jsx("path",{d:"M32 32l16 20",strokeLinecap:"round"}),r.jsx("path",{d:"M20 28l12 4l12-4",strokeLinecap:"round",strokeLinejoin:"round"})]}),I8=()=>r.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("ellipse",{cx:"32",cy:"52",rx:"12",ry:"4"}),r.jsx("ellipse",{cx:"32",cy:"40",rx:"10",ry:"3.5"}),r.jsx("ellipse",{cx:"32",cy:"30",rx:"8",ry:"3"}),r.jsx("ellipse",{cx:"32",cy:"22",rx:"5",ry:"2"})]}),R8=()=>r.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("path",{d:"M20 56h24c2 0 4-2 4-4V28c0-8-8-16-16-16S16 20 16 28v24c0 2 2 4 4 4z"}),r.jsx("path",{d:"M24 56v-8c0-2 2-4 4-4h8c2 0 4 2 4 4v8"}),r.jsx("path",{d:"M28 20c-4 4-4 8 0 12",strokeLinecap:"round"}),r.jsx("path",{d:"M36 20c4 4 4 8 0 12",strokeLinecap:"round"})]}),B8=()=>r.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("circle",{cx:"32",cy:"14",r:"6"}),r.jsx("path",{d:"M32 20v6",strokeLinecap:"round"}),r.jsx("path",{d:"M22 32c0-5.5 4.5-10 10-10s10 4.5 10 10",strokeLinecap:"round"}),r.jsx("path",{d:"M22 32v8c0 6 4 12 10 12s10-6 10-12v-8",strokeLinecap:"round"}),r.jsx("circle",{cx:"32",cy:"38",r:"6",fill:"currentColor",opacity:"0.2"})]}),F8=[{icon:A8,title:"Flexible Time",description:"Practice yoga at your own pace with sessions designed to fit your busy lifestyle and schedule."},{icon:L8,title:"Reduce Stress",description:"Learn powerful techniques to calm your mind, release tension, and find inner peace."},{icon:E8,title:"Many Yoga Styles",description:"Explore various yoga traditions from gentle Hatha to dynamic Vinyasa and restorative practices."},{icon:I8,title:"Life Balancing",description:"Achieve harmony between work, relationships, and personal growth through mindful living."},{icon:R8,title:"Health Tips",description:"Receive guidance on nutrition, sleep, and daily habits that support your wellness journey."},{icon:B8,title:"Life Consultation",description:"Get personalized coaching to overcome challenges and align with your true purpose."}],W8=()=>{const e=k.useRef(null),t=O(e,{once:!0,amount:.2}),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}};return r.jsxs(D8,{ref:e,children:[r.jsx(V8,{children:r.jsx("svg",{viewBox:"0 0 1440 120",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,120 C480,0 960,0 1440,120 L1440,0 L0,0 Z",fill:"#f8f9f6"})})}),r.jsxs(N8,{as:j.div,variants:i,initial:"hidden",animate:t?"visible":"hidden",children:[r.jsxs(O8,{children:[r.jsx(j.div,{variants:n,children:r.jsx(_8,{children:"Services"})}),r.jsx(j.div,{variants:n,children:r.jsx(H8,{children:"What we offer to you"})}),r.jsx(j.div,{variants:n,children:r.jsx(U8,{children:"Discover transformative practices that nurture your body, calm your mind, and elevate your spirit on this beautiful journey of self-discovery."})})]}),r.jsx(Z8,{children:F8.map((o,a)=>r.jsxs(Ga,{as:j.div,variants:n,children:[r.jsx(Y8,{children:r.jsx(o.icon,{})}),r.jsx(Q8,{children:o.title}),r.jsx(G8,{children:o.description})]},a))}),r.jsx(K8,{as:j.div,variants:n,children:r.jsx(q8,{to:"/services",children:"View All Services"})})]})]})},D8=l.section`
  padding: 8rem 0 6rem;
  background: linear-gradient(180deg, #f0f4f0 0%, #f5f8f5 40%, #FAF8F5 100%);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  will-change: auto;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateZ(0);
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(206, 197, 173, 0.4), transparent);
  }

  @media (min-width: 1920px) {
    padding: 10rem 0 8rem;
  }

  @media (max-width: 1440px) {
    padding: 7rem 0 5.5rem;
  }

  @media (max-width: 1200px) {
    padding: 6.5rem 0 5rem;
  }

  @media (max-width: 1024px) {
    padding: 6rem 0 4.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 5.5rem 0 4rem;
  }

  @media (max-width: 640px) {
    padding: 4.5rem 0 3.5rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 4rem 0 3rem;
  }

  @media (max-width: 390px) {
    padding: 3rem 0 2.5rem;
  }

  @media (max-width: 375px) {
    padding: 2.5rem 0 2rem;
  }
`,V8=l.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  pointer-events: none;
  transform: translateZ(0);

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (min-width: 1920px) {
    height: 140px;
  }

  @media (max-width: 1024px) {
    height: 90px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    height: 60px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    height: 40px;
  }

  @media (max-width: 375px) {
    height: 30px;
  }
`,N8=l.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 1920px) {
    max-width: 1300px;
    padding: 0 3rem;
  }

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }

  @media (max-width: 1024px) {
    padding: 0 1.75rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 0 1.5rem;
  }

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1rem;
  }

  @media (max-width: 390px) {
    padding: 0 0.875rem;
  }

  @media (max-width: 375px) {
    padding: 0 0.75rem;
  }
`,O8=l.div`
  text-align: center;
  max-width: 650px;
  margin: 0 auto 5rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    max-width: 750px;
    margin-bottom: 6rem;
  }

  @media (max-width: 1440px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 4.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    max-width: 600px;
    margin-bottom: 4rem;
  }

  @media (max-width: 640px) {
    max-width: 100%;
    margin-bottom: 3.5rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 3rem;
  }

  @media (max-width: 390px) {
    margin-bottom: 2.5rem;
  }
`,_8=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #cec5ad;
  margin-bottom: 1rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1rem;
    letter-spacing: 0.12em;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
    letter-spacing: 0.09em;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.8125rem;
    letter-spacing: 0.08em;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
    letter-spacing: 0.07em;
  }
`,H8=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.25rem, 4vw, 3.25rem);
  font-weight: 500;
  color: #22371b;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: clamp(2.75rem, 4.5vw, 3.75rem);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 640px) {
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 0.875rem;
    line-height: 1.25;
  }
`,U8=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.85;
  color: #21371a;
  opacity: 0.85;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    line-height: 1.9;
  }

  @media (max-width: 640px) {
    font-size: 0.9375rem;
    line-height: 1.8;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.75;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    line-height: 1.7;
  }
`,Z8=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 3rem;

  @media (min-width: 1920px) {
    gap: 5rem 4rem;
  }

  @media (max-width: 1200px) {
    gap: 3.5rem 2.75rem;
  }

  @media (max-width: 1024px) {
    gap: 3.25rem 2.5rem;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }

  @media (max-width: 640px) {
    gap: 2.75rem 1.75rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 390px) {
    gap: 2.5rem;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    gap: 2rem;
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    gap: 5rem 4rem;
  }
`,Ga=l.div`
  text-align: center;
  transform: translateZ(0);
  backface-visibility: hidden;
`,Y8=l.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.75rem;
  color: #cec5ad;
  transition: all 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  svg {
    width: 100%;
    height: 100%;
  }

  ${Ga}:hover & {
    color: #22371b;
    transform: scale(1.05) translateZ(0);
  }

  @media (min-width: 1920px) {
    width: 90px;
    height: 90px;
    margin-bottom: 2rem;
  }

  @media (max-width: 1024px) {
    width: 75px;
    height: 75px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    width: 72px;
    height: 72px;
  }

  @media (max-width: 640px) {
    width: 68px;
    height: 68px;
    margin-bottom: 1.375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 64px;
    height: 64px;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 390px) {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }

  @media (max-width: 360px) {
    width: 56px;
    height: 56px;
  }

  @media (hover: none) and (pointer: coarse) {
    ${Ga}:hover & {
      transform: translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color 0.3s ease;
    
    ${Ga}:hover & {
      transform: translateZ(0);
    }
  }
`,Q8=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.375rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.75rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1.5rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.3125rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: 1.25rem;
  }

  @media (max-width: 640px) {
    font-size: 1.1875rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1.125rem;
  }

  @media (max-width: 390px) {
    font-size: 1.0625rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`,G8=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #21371a;
  opacity: 0.8;
  max-width: 280px;
  margin: 0 auto;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1rem;
    max-width: 320px;
    line-height: 1.8;
  }

  @media (max-width: 1024px) {
    font-size: 0.9375rem;
    max-width: 270px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    max-width: 100%;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.7;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.8125rem;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
    line-height: 1.65;
  }
`,K8=l.div`
  text-align: center;
  margin-top: 4rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    margin-top: 5rem;
  }

  @media (max-width: 1440px) {
    margin-top: 4rem;
  }

  @media (max-width: 1024px) {
    margin-top: 3.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    margin-top: 3rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-top: 2.5rem;
  }

  @media (max-width: 390px) {
    margin-top: 2rem;
  }
`,q8=l(_)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.125rem 3rem;
  background: #22371b;
  color: #FAF8F5;
  border-radius: 100px;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(34, 55, 27, 0.25);
  letter-spacing: 0.02em;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    background: #1a2b15;
    transform: translateY(-3px) translateZ(0);
    box-shadow: 0 10px 35px rgba(34, 55, 27, 0.35);
  }

  @media (min-width: 1920px) {
    padding: 1.25rem 3.5rem;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    padding: 1.0625rem 2.75rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 1rem 2.5rem;
    font-size: 0.875rem;
  }

  @media (max-width: 640px) {
    padding: 0.9375rem 2.25rem;
    font-size: 0.8125rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0.875rem 2rem;
    font-size: 0.75rem;
    width: 100%;
    max-width: 280px;
  }

  @media (max-width: 390px) {
    padding: 0.8125rem 1.75rem;
    max-width: 260px;
  }

  @media (max-width: 360px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.6875rem;
    max-width: 240px;
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
      box-shadow: 0 4px 20px rgba(34, 55, 27, 0.25);
    }

    &:active {
      background: #1a2b15;
      transform: scale(0.98) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`;function Wu(e){return Y({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}const X8=[{title:"Yoga & Meditation",description:"12+ years of Yoga and 15+ years of Meditation expertise"},{title:"NLP Coaching",description:"Mind coaching using Neuro-Linguistic Programming tools"},{title:"Counseling",description:"Professional support for children, teenagers, and adults"},{title:"Stress & Anxiety Relief",description:"Holistic approach to emotional wellness and balance"}],J8=[{title:"Gut Health Expert",description:"Digestive wellness and metabolism improvement programs"},{title:"Weight Management",description:"Sustainable, healthy weight loss and transformation"},{title:"Relationship Healing",description:"Emotional wellness and relationship counseling support"},{title:"Lifestyle Transformation",description:"Mindful nutrition and habit correction guidance"}],e$=()=>{const e=k.useRef(null),t=O(e,{once:!0,amount:.2});return r.jsx(t$,{ref:e,children:r.jsxs(i$,{children:[r.jsxs(n$,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.6},children:[r.jsx(r$,{children:"Areas of Expertise"}),r.jsx(o$,{children:"Comprehensive Wellness Services"}),r.jsx(a$,{children:"BK Shikha offers a complete range of holistic wellness services combining yoga, meditation, mindfulness practices, NLP tools, stress management, counseling, gut health correction, and sustainable weight management. Her approach empowers long-term physical, mental, and emotional well-being."})]}),r.jsxs(s$,{children:[r.jsx(l$,{children:X8.map((i,n)=>r.jsxs(Du,{initial:{opacity:0,x:-30},animate:t?{opacity:1,x:0}:{},transition:{duration:.5,delay:.2+n*.1},children:[r.jsxs(Vu,{$align:"right",children:[r.jsx(Nu,{children:i.title}),r.jsx(Ou,{children:i.description})]}),r.jsx(_u,{initial:{scale:0},animate:t?{scale:1}:{},transition:{duration:.3,delay:.4+n*.1},children:r.jsx(Wu,{})})]},n))}),r.jsx(c$,{initial:{opacity:0,scale:.8},animate:t?{opacity:1,scale:1}:{},transition:{duration:.8,delay:.3},children:r.jsx(m$,{src:"/more images/bk shikha yoga pose 3.png",alt:"BK Shikha Yoga Pose"})}),r.jsx(d$,{children:J8.map((i,n)=>r.jsxs(Du,{initial:{opacity:0,x:30},animate:t?{opacity:1,x:0}:{},transition:{duration:.5,delay:.2+n*.1},children:[r.jsx(_u,{initial:{scale:0},animate:t?{scale:1}:{},transition:{duration:.3,delay:.4+n*.1},children:r.jsx(Wu,{})}),r.jsxs(Vu,{$align:"left",children:[r.jsx(Nu,{children:i.title}),r.jsx(Ou,{children:i.description})]})]},n))})]})]})})},t$=l.section`
  padding: 120px 0;
  background: linear-gradient(165deg, #FAF8F5 0%, #f5f7f4 50%, #f0f3ef 100%);
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateZ(0);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(206, 197, 173, 0.06) 0%, transparent 60%);
    pointer-events: none;
    will-change: auto;
  }

  @media (min-width: 1920px) {
    padding: 140px 0;
  }

  @media (max-width: 1440px) {
    padding: 100px 0;
  }

  @media (max-width: 1200px) {
    padding: 90px 0;
  }

  @media (max-width: 1024px) {
    padding: 80px 0;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 70px 0;
  }

  @media (max-width: 640px) {
    padding: 60px 0;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 50px 0;
  }

  @media (max-width: 390px) {
    padding: 40px 0;
  }

  @media (max-width: 375px) {
    padding: 35px 0;
  }
`,i$=l.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1920px) {
    max-width: 1600px;
    padding: 0 40px;
  }

  @media (max-width: 1440px) {
    padding: 0 30px;
  }

  @media (max-width: 1200px) {
    padding: 0 25px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 0 20px;
  }

  @media (max-width: 640px) {
    padding: 0 16px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 16px;
  }

  @media (max-width: 390px) {
    padding: 0 12px;
  }
`,n$=l(j.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 100px;

  @media (min-width: 1920px) {
    max-width: 900px;
    margin-bottom: 120px;
  }

  @media (max-width: 1200px) {
    margin-bottom: 80px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 70px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    margin-bottom: 60px;
    max-width: 700px;
  }

  @media (max-width: 640px) {
    margin-bottom: 50px;
    max-width: 100%;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 40px;
  }

  @media (max-width: 390px) {
    margin-bottom: 35px;
  }
`,r$=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: #cec5ad;
  margin-bottom: 16px;

  @media (min-width: 1920px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  @media (max-width: 1200px) {
    font-size: 0.875rem;
    letter-spacing: 2px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: 0.8125rem;
    letter-spacing: 2px;
    margin-bottom: 14px;
  }

  @media (max-width: 640px) {
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.6875rem;
    letter-spacing: 1.5px;
  }

  @media (max-width: 390px) {
    font-size: 0.625rem;
    letter-spacing: 1.2px;
    margin-bottom: 10px;
  }
`,o$=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.75rem, 5vw, 3.5rem);
  font-weight: 500;
  color: #22371b;
  margin-bottom: 24px;
  line-height: 1.15;

  @media (min-width: 1920px) {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 28px;
  }

  @media (max-width: 1440px) {
    font-size: clamp(2rem, 5vw, 3.25rem);
  }

  @media (max-width: 1200px) {
    font-size: clamp(1.875rem, 5vw, 3rem);
    margin-bottom: 22px;
  }

  @media (max-width: 1024px) {
    font-size: clamp(1.75rem, 5vw, 2.75rem);
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: clamp(1.625rem, 5vw, 2.5rem);
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    font-size: clamp(1.5rem, 5vw, 2.25rem);
    margin-bottom: 18px;
    line-height: 1.2;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: clamp(1.375rem, 5vw, 2rem);
    margin-bottom: 16px;
  }

  @media (max-width: 390px) {
    font-size: clamp(1.25rem, 5vw, 1.875rem);
    margin-bottom: 14px;
  }

  @media (max-width: 375px) {
    font-size: clamp(1.125rem, 5vw, 1.75rem);
  }
`,a$=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.1rem;
  line-height: 1.85;
  color: #21371a;
  opacity: 0.85;

  @media (min-width: 1920px) {
    font-size: 1.1875rem;
    line-height: 1.9;
  }

  @media (max-width: 1200px) {
    font-size: 1.0625rem;
    line-height: 1.8;
  }

  @media (max-width: 1024px) {
    font-size: 1.0313rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: 1rem;
    line-height: 1.75;
  }

  @media (max-width: 640px) {
    font-size: 0.9375rem;
    line-height: 1.7;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.65;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    line-height: 1.6;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`,s$=l.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 60px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 1920px) {
    max-width: 1400px;
    gap: 80px;
  }

  @media (min-width: ${d.breakpoints.wide}) {
    max-width: 1400px;
    gap: 80px;
  }

  @media (max-width: 1440px) {
    gap: 50px;
  }

  @media (max-width: 1200px) {
    gap: 45px;
  }

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  @media (max-width: 640px) {
    gap: 30px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 28px;
  }

  @media (max-width: 390px) {
    gap: 25px;
  }

  @media (max-width: 375px) {
    gap: 22px;
  }
`,l$=l.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1920px) {
    gap: 35px;
  }

  @media (max-width: 1200px) {
    gap: 28px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    order: 2;
    gap: 25px;
  }

  @media (max-width: 640px) {
    gap: 22px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 20px;
  }

  @media (max-width: 390px) {
    gap: 18px;
  }
`,d$=l.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1920px) {
    gap: 35px;
  }

  @media (max-width: 1200px) {
    gap: 28px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    order: 3;
    gap: 25px;
  }

  @media (max-width: 640px) {
    gap: 22px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 20px;
  }

  @media (max-width: 390px) {
    gap: 18px;
  }
`,c$=l(j.div)`
  position: relative;
  width: 400px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    width: 450px;
    height: 675px;
  }

  @media (max-width: 1440px) {
    width: 380px;
    height: 570px;
  }

  @media (max-width: 1200px) {
    width: 340px;
    height: 510px;
  }

  @media (max-width: 1024px) {
    width: 300px;
    height: 450px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    order: 1;
    width: 280px;
    height: 420px;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    width: 240px;
    height: 360px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 220px;
    height: 330px;
  }

  @media (max-width: 430px) {
    width: 200px;
    height: 300px;
  }

  @media (max-width: 390px) {
    width: 180px;
    height: 270px;
  }

  @media (max-width: 375px) {
    width: 160px;
    height: 240px;
  }
`,m$=l.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
  background: transparent;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  @media (max-width: ${d.breakpoints.tablet}) {
    filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.08));
  }

  @media (max-width: 390px) {
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
  }
`,Du=l(j.div)`
  display: flex;
  align-items: center;
  gap: 20px;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    gap: 24px;
  }

  @media (max-width: 1200px) {
    gap: 18px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    gap: 16px;
  }

  @media (max-width: 640px) {
    gap: 14px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 12px;
  }

  @media (max-width: 390px) {
    gap: 10px;
  }
`,Vu=l.div`
  text-align: ${e=>e.$align};
  flex: 1;

  @media (max-width: ${d.breakpoints.tablet}) {
    text-align: left;
  }
`,Nu=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.4rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 8px;

  @media (min-width: 1920px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  @media (max-width: 1440px) {
    font-size: 1.35rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: 1.2rem;
    margin-bottom: 7px;
  }

  @media (max-width: 640px) {
    font-size: 1.125rem;
    margin-bottom: 6px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1.0625rem;
  }

  @media (max-width: 390px) {
    font-size: 1rem;
    margin-bottom: 5px;
  }

  @media (max-width: 375px) {
    font-size: 0.9375rem;
  }
`,Ou=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.95rem;
  line-height: 1.65;
  color: #21371a;
  opacity: 0.8;

  @media (min-width: 1920px) {
    font-size: 1.0313rem;
    line-height: 1.7;
  }

  @media (max-width: 1440px) {
    font-size: 0.9375rem;
  }

  @media (max-width: 1200px) {
    font-size: 0.9063rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: 0.875rem;
    line-height: 1.6;
  }

  @media (max-width: 640px) {
    font-size: 0.8438rem;
    line-height: 1.55;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.8125rem;
    line-height: 1.5;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    font-size: 0.6875rem;
  }
`,_u=l(j.div)`
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #22371b 0%, #2d4a24 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(34, 55, 27, 0.3);
  color: white;
  font-size: 1.2rem;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    min-width: 56px;
    height: 56px;
    font-size: 1.3rem;
    box-shadow: 0 7px 24px rgba(34, 55, 27, 0.35);
  }

  @media (max-width: 1440px) {
    min-width: 48px;
    height: 48px;
    font-size: 1.15rem;
  }

  @media (max-width: 1200px) {
    min-width: 46px;
    height: 46px;
    font-size: 1.1rem;
  }

  @media (max-width: 1024px) {
    min-width: 44px;
    height: 44px;
    font-size: 1.05rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    min-width: 42px;
    height: 42px;
    font-size: 1.05rem;
    box-shadow: 0 5px 16px rgba(34, 55, 27, 0.25);
  }

  @media (max-width: 640px) {
    min-width: 38px;
    height: 38px;
    font-size: 0.95rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    min-width: 36px;
    height: 36px;
    font-size: 0.9rem;
    box-shadow: 0 4px 12px rgba(34, 55, 27, 0.22);
  }

  @media (max-width: 390px) {
    min-width: 32px;
    height: 32px;
    font-size: 0.8rem;
    box-shadow: 0 3px 10px rgba(34, 55, 27, 0.2);
  }

  @media (max-width: 375px) {
    min-width: 30px;
    height: 30px;
    font-size: 0.75rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
  }
`,p$=[{image:"/new images/online meditation (2).png",price:"₹999",title:"Online Meditation"},{image:"/new images/yoga at home (2).png",price:"₹1,499",title:"Yoga at Home",imagePosition:"center 20%"},{image:"/new images/couple yoga (2).png",price:"₹2,499",title:"Couple Yoga"},{image:"/new images/morning .png",price:"₹799",title:"Morning Flow"},{image:"/new images/stress relief (2).png",price:"₹1,299",title:"Stress Relief"},{image:"/new images/private session (2).png",price:"₹1,999",title:"Private Session"}],h$=()=>{const e=k.useRef(null),t=O(e,{once:!0,amount:.2}),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}};return r.jsxs(u$,{ref:e,children:[r.jsx(f$,{children:r.jsxs("svg",{viewBox:"0 0 200 400",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M100 20C100 20 180 100 180 200C180 300 100 380 100 380",stroke:"#d4e5d6",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100 60C100 60 150 120 150 200C150 280 100 340 100 340",stroke:"#d4e5d6",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M100 100C100 100 130 140 130 200C130 260 100 300 100 300",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M60 120C60 120 100 160 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M140 120C140 120 100 160 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M50 180C50 180 100 200 100 200",stroke:"#d4e5d6",strokeWidth:"0.6",fill:"none"}),r.jsx("path",{d:"M150 180C150 180 100 200 100 200",stroke:"#d4e5d6",strokeWidth:"0.6",fill:"none"}),r.jsx("path",{d:"M60 260C60 260 100 240 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M140 260C140 260 100 240 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"})]})}),r.jsxs(g$,{as:j.div,variants:i,initial:"hidden",animate:t?"visible":"hidden",children:[r.jsxs(x$,{children:[r.jsx(j.div,{variants:n,children:r.jsx(y$,{children:"Our Classes"})}),r.jsx(j.div,{variants:n,children:r.jsx(w$,{children:"Most Favorite Classes"})}),r.jsx(j.div,{variants:n,children:r.jsx(v$,{children:"Discover our most popular yoga and wellness classes designed to nurture your mind, body, and spirit on your journey to inner peace."})})]}),r.jsx(b$,{children:p$.map((o,a)=>r.jsxs(jn,{as:j.div,variants:n,whileHover:{y:-8},children:[r.jsx(k$,{children:r.jsx(j$,{src:o.image,alt:o.title,loading:"lazy",style:{objectPosition:o.imagePosition??"center"}})}),r.jsxs($$,{children:[r.jsx(S$,{children:o.title}),r.jsxs(C$,{to:"/contact",children:["Book Now ",r.jsx(me,{})]})]})]},a))})]})]})},u$=l.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #FAF8F5 0%, #f5f7f4 100%);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  will-change: auto;

  @media (min-width: 1920px) {
    padding: 8rem 0;
  }

  @media (max-width: 1440px) {
    padding: 6rem 0;
  }

  @media (max-width: 1200px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 1024px) {
    padding: 5rem 0;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4.5rem 0;
  }

  @media (max-width: 820px) {
    padding: 4rem 0;
  }

  @media (max-width: 640px) {
    padding: 3.5rem 0;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 3rem 0;
  }

  @media (max-width: 430px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 390px) {
    padding: 2.25rem 0;
  }

  @media (max-width: 375px) {
    padding: 2rem 0;
  }
`,f$=l.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 180px;
  height: 400px;
  opacity: 0.4;
  pointer-events: none;
  transform: translateZ(0);
  will-change: auto;

  svg {
    width: 100%;
    height: 100%;
  }

  svg path {
    stroke: #cec5ad;
  }

  @media (max-width: 1024px) {
    width: 150px;
    opacity: 0.35;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    display: none;
  }
`,g$=l.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 1920px) {
    max-width: 1300px;
    padding: 0 2.5rem;
  }

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }

  @media (max-width: 1200px) {
    padding: 0 1.75rem;
  }

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 0 1.5rem;
  }

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1rem;
  }

  @media (max-width: 390px) {
    padding: 0 0.875rem;
  }

  @media (max-width: 375px) {
    padding: 0 0.75rem;
  }
`,x$=l.div`
  max-width: 500px;
  margin-bottom: 3.5rem;

  @media (min-width: 1920px) {
    max-width: 600px;
    margin-bottom: 4rem;
  }

  @media (max-width: 1200px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 2.75rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    margin-bottom: 2.5rem;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    margin-bottom: 2.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }

  @media (max-width: 390px) {
    margin-bottom: 1.75rem;
  }
`,y$=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #cec5ad;
  margin-bottom: 0.75rem;

  @media (min-width: 1920px) {
    font-size: 1rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.875rem;
  }

  @media (max-width: 640px) {
    font-size: 0.8125rem;
    letter-spacing: 0.08em;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.75rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: 390px) {
    font-size: 0.6875rem;
    letter-spacing: 0.06em;
  }
`,w$=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #22371b;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (min-width: 1920px) {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1.25rem;
  }

  @media (max-width: 1024px) {
    line-height: 1.25;
  }

  @media (max-width: 640px) {
    margin-bottom: 0.875rem;
    line-height: 1.3;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 390px) {
    line-height: 1.35;
  }
`,v$=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.7;
  color: #21371a;

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    line-height: 1.75;
  }

  @media (max-width: 1024px) {
    font-size: 0.9688rem;
  }

  @media (max-width: 640px) {
    font-size: 0.9375rem;
    line-height: 1.65;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.6;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    line-height: 1.55;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`,b$=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (min-width: 1920px) {
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: ${d.breakpoints.wide}) {
    gap: 2.5rem;
  }

  @media (max-width: 1200px) {
    gap: 1.75rem;
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    gap: 1.375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
    gap: 1.5rem;
  }

  @media (max-width: 430px) {
    max-width: 360px;
    gap: 1.375rem;
  }

  @media (max-width: 390px) {
    max-width: 340px;
    gap: 1.25rem;
  }

  @media (max-width: 375px) {
    max-width: 320px;
    gap: 1.125rem;
  }
`,jn=l.div`
  position: relative;
  padding-bottom: 72px;
  transition: all 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    transform: translateY(-8px) translateZ(0);
  }

  @media (min-width: 1920px) {
    padding-bottom: 82px;
  }

  @media (max-width: 1024px) {
    padding-bottom: 68px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding-bottom: 72px;
    transition: all 0.25s ease;
    
    &:hover {
      transform: translateY(-6px) translateZ(0);
    }
  }

  @media (max-width: 640px) {
    padding-bottom: 68px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding-bottom: 64px;
    
    &:hover {
      transform: translateY(-4px) translateZ(0);
    }
  }

  @media (max-width: 390px) {
    padding-bottom: 60px;
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
    }

    &:active {
      transform: scale(0.98) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`,k$=l.div`
  width: 100%;
  height: 280px;
  margin-top: 0.5rem;
  overflow: hidden;
  border-radius: 12px;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    height: 320px;
    margin-top: 0.625rem;
    border-radius: 14px;
  }

  @media (max-width: 1200px) {
    height: 260px;
    margin-top: 0.5rem;
  }

  @media (max-width: 1024px) {
    height: 240px;
    margin-top: 0.4375rem;
    border-radius: 11px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    height: 260px;
    margin-top: 0.4375rem;
  }

  @media (max-width: 640px) {
    height: 240px;
    margin-top: 0.375rem;
    border-radius: 10px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    height: 220px;
    margin-top: 0.3125rem;
  }

  @media (max-width: 430px) {
    height: 200px;
    margin-top: 0.3125rem;
    border-radius: 9px;
  }

  @media (max-width: 390px) {
    height: 190px;
    margin-top: 0.25rem;
  }

  @media (max-width: 375px) {
    height: 180px;
    margin-top: 0.25rem;
    border-radius: 8px;
  }
`,j$=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  ${jn}:hover & {
    transform: scale(1.05) translateZ(0);
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    transition: transform 0.4s ease;
    
    ${jn}:hover & {
      transform: scale(1.04) translateZ(0);
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    transition: transform 0.3s ease;
    
    ${jn}:hover & {
      transform: scale(1.03) translateZ(0);
    }
  }

  @media (hover: none) and (pointer: coarse) {
    ${jn}:hover & {
      transform: translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    ${jn}:hover & {
      transform: translateZ(0);
    }
  }
`,$$=l.div`
  position: absolute;
  bottom: -10px;
  left: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transform: translateZ(0);

  @media (min-width: 1920px) {
    padding: 1.5rem 1.75rem;
    border-radius: 10px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.13);
  }

  @media (max-width: 1200px) {
    padding: 1.125rem 1.375rem;
  }

  @media (max-width: 1024px) {
    padding: 1rem 1.25rem;
    border-radius: 7px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.11);
  }

  @media (max-width: 640px) {
    left: 10px;
    right: 10px;
    padding: 0.9375rem 1.125rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0.875rem 1rem;
    border-radius: 6px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 390px) {
    left: 8px;
    right: 8px;
    padding: 0.8125rem 0.9375rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.09);
  }

  @media (max-width: 375px) {
    padding: 0.75rem 0.875rem;
  }
`;l.span`
  display: block;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 700;
  color: #22371b;
  margin-bottom: 0.35rem;

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    margin-bottom: 0.4375rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.9688rem;
    margin-bottom: 0.3125rem;
  }

  @media (max-width: 640px) {
    font-size: 0.9375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`;const S$=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.5rem;

  @media (min-width: 1920px) {
    font-size: 1.375rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.1875rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.125rem;
    margin-bottom: 0.4375rem;
  }

  @media (max-width: 640px) {
    font-size: 1.0625rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 0.375rem;
  }

  @media (max-width: 390px) {
    font-size: 0.9375rem;
    margin-bottom: 0.3125rem;
  }

  @media (max-width: 375px) {
    font-size: 0.875rem;
  }
`,C$=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  color: #22371b;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transform: translateZ(0);

  svg {
    font-size: 0.875rem;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  &:hover {
    color: #22371b;
    
    svg {
      transform: translateX(4px);
    }
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
    gap: 0.5625rem;
    
    svg {
      font-size: 0.9375rem;
    }
  }

  @media (max-width: 1024px) {
    font-size: 0.875rem;
    padding: 0.4375rem 0;
    
    svg {
      font-size: 0.8125rem;
    }
  }

  @media (max-width: 640px) {
    font-size: 0.8438rem;
    gap: 0.4375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.8125rem;
    padding: 0.375rem 0;
    
    svg {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 390px) {
    font-size: 0.7813rem;
    gap: 0.375rem;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
    padding: 0.3125rem 0;
    border-bottom-width: 1.5px;
    
    svg {
      font-size: 0.6875rem;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover svg {
      transform: translateX(0);
    }

    &:active {
      opacity: 0.7;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
    
    &:hover svg {
      transform: translateX(0);
    }
  }
`,z$=(e,t=2e3,i=!1)=>{const[n,o]=k.useState(0);return k.useEffect(()=>{if(!i)return;let a,s;const c=m=>{a||(a=m);const p=Math.min((m-a)/t,1);o(Math.floor(p*e)),p<1&&(s=requestAnimationFrame(c))};return s=requestAnimationFrame(c),()=>cancelAnimationFrame(s)},[e,t,i]),n},T$=[{number:20,suffix:"+",label:"Yoga Style",sublabel:"Workout"},{number:50,suffix:"+",label:"Professionals",sublabel:"Trainer"},{number:25,suffix:"+",label:"Year",sublabel:"Experience"},{number:90,suffix:"%",label:"Happy",sublabel:"Customer"}],P$=()=>{const e=k.useRef(null),t=k.useRef(null),i=O(e,{once:!0,amount:.3}),n=O(t,{once:!0,amount:.5}),o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.1}}},a={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}},s={hidden:{opacity:0,x:50},visible:{opacity:1,x:0,transition:{duration:.8,ease:[.25,.1,.25,1]}}};return r.jsxs(A$,{ref:e,children:[r.jsx(L$,{children:r.jsxs("svg",{viewBox:"0 0 200 400",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M80 380C80 380 20 300 30 200C40 100 100 40 100 40",stroke:"#a8c5a4",strokeWidth:"3",fill:"none"}),r.jsx("path",{d:"M100 40C100 40 140 80 150 140C160 200 140 280 100 340",stroke:"#a8c5a4",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M50 120C50 120 80 140 100 140",stroke:"#a8c5a4",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M40 180C40 180 70 180 100 160",stroke:"#a8c5a4",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M50 240C50 240 80 220 100 200",stroke:"#a8c5a4",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M60 300C60 300 85 270 100 250",stroke:"#a8c5a4",strokeWidth:"2",fill:"none"}),r.jsx("ellipse",{cx:"100",cy:"120",rx:"40",ry:"60",stroke:"#a8c5a4",strokeWidth:"1.5",fill:"none",opacity:"0.5"}),r.jsx("ellipse",{cx:"90",cy:"200",rx:"35",ry:"50",stroke:"#a8c5a4",strokeWidth:"1.5",fill:"none",opacity:"0.4"}),r.jsx("ellipse",{cx:"85",cy:"280",rx:"30",ry:"45",stroke:"#a8c5a4",strokeWidth:"1.5",fill:"none",opacity:"0.3"})]})}),r.jsx(E$,{children:r.jsxs("svg",{viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"150",cy:"50",r:"25",stroke:"#e8efe9",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M150 75V120",stroke:"#e8efe9",strokeWidth:"1"}),r.jsx("path",{d:"M150 120L100 180",stroke:"#e8efe9",strokeWidth:"1"}),r.jsx("path",{d:"M150 120L200 180",stroke:"#e8efe9",strokeWidth:"1"}),r.jsx("path",{d:"M120 100L180 100",stroke:"#e8efe9",strokeWidth:"1"}),r.jsx("path",{d:"M100 180L80 250",stroke:"#e8efe9",strokeWidth:"1"}),r.jsx("path",{d:"M200 180L220 250",stroke:"#e8efe9",strokeWidth:"1"})]})}),r.jsxs(I$,{as:j.div,variants:o,initial:"hidden",animate:i?"visible":"hidden",children:[r.jsxs(R$,{children:[r.jsxs(B$,{children:[r.jsx(j.div,{variants:a,children:r.jsx(F$,{children:"Fun Facts"})}),r.jsx(j.div,{variants:a,children:r.jsx(W$,{children:"Why We Are Better"})}),r.jsx(j.div,{variants:a,children:r.jsx(D$,{children:"With years of experience in yogic practices and holistic wellness, we bring authentic teachings that transform lives. Our approach combines ancient wisdom with modern understanding to create lasting positive change in your journey to wellness."})}),r.jsx(j.div,{variants:a,children:r.jsx(V$,{to:"/contact",children:"Join Now"})})]}),r.jsxs(N$,{as:j.div,variants:s,children:[r.jsx(Hu,{className:"top",children:[...Array(15)].map((c,m)=>r.jsx(Uu,{style:{left:`${m%5*14}px`,top:`${Math.floor(m/5)*14}px`}},m))}),r.jsx(O$,{children:r.jsx("svg",{viewBox:"0 0 500 500",preserveAspectRatio:"none",children:r.jsx("path",{d:"M400,250Q420,350,350,420Q280,490,180,450Q80,410,60,310Q40,210,100,130Q160,50,260,70Q360,90,400,170Q440,250,400,250Z",fill:"#3d5a40"})})}),r.jsx(_$,{children:r.jsx("svg",{viewBox:"0 0 200 200",preserveAspectRatio:"none",children:r.jsx("circle",{cx:"100",cy:"100",r:"80",fill:"#8ecfb3"})})}),r.jsx(H$,{children:r.jsx(U$,{src:"/yoga-gallery/another video.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0})}),r.jsx(Hu,{className:"bottom",children:[...Array(12)].map((c,m)=>r.jsx(Uu,{style:{left:`${m%4*14}px`,top:`${Math.floor(m/4)*14}px`}},m))})]})]}),r.jsx(Z$,{ref:t,children:T$.map((c,m)=>r.jsxs(Y$,{children:[r.jsxs(Q$,{children:[r.jsx(M$,{end:c.number,isInView:n}),r.jsx(G$,{children:c.suffix})]}),r.jsx(K$,{children:c.label}),r.jsx(q$,{children:c.sublabel})]},m))})]})]})},M$=({end:e,isInView:t})=>{const i=z$(e,2e3,t);return r.jsx(r.Fragment,{children:i})},A$=l.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #FAF8F5 0%, #f5f7f4 100%);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  /* 4K screens */
  @media (min-width: 2560px) {
    padding: 10rem 0;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    padding: 8rem 0;
  }

  @media (max-width: 1440px) {
    padding: 6.5rem 0;
  }

  @media (max-width: 1200px) {
    padding: 6rem 0;
  }

  @media (max-width: 1024px) {
    padding: 5.5rem 0;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 5rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 640px) {
    padding: 3.5rem 0;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 3rem 0;
  }

  @media (max-width: 390px) {
    padding: 2.75rem 0;
  }

  @media (max-width: 375px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 360px) {
    padding: 2.25rem 0;
  }
`,L$=l.div`
  position: absolute;
  left: -30px;
  bottom: 10%;
  width: 150px;
  height: 350px;
  opacity: 0.7;
  pointer-events: none;
  transform: rotate(-10deg) translateZ(0);
  backface-visibility: hidden;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    width: 130px;
    height: 300px;
  }

  @media (max-width: 1024px) {
    width: 110px;
    height: 260px;
    left: -20px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    display: none;
  }
`,E$=l.div`
  position: absolute;
  right: 5%;
  top: 10%;
  width: 200px;
  height: 200px;
  opacity: 0.4;
  pointer-events: none;
  transform: translateZ(0);
  backface-visibility: hidden;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1440px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 1200px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 1024px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    display: none;
  }
`,I$=l.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  transform: translateZ(0);
  backface-visibility: hidden;

  /* 4K screens */
  @media (min-width: 2560px) {
    max-width: 1600px;
    padding: 0 3rem;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    max-width: 1400px;
    padding: 0 2.5rem;
  }

  @media (max-width: 1440px) {
    max-width: 1100px;
  }

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (max-width: 1024px) {
    max-width: 900px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    max-width: 100%;
  }

  @media (max-width: 640px) {
    padding: 0 1.75rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }

  @media (max-width: 390px) {
    padding: 0 1.25rem;
  }

  @media (max-width: 375px) {
    padding: 0 1.125rem;
  }

  @media (max-width: 360px) {
    padding: 0 1rem;
  }
`,R$=l.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  /* 4K screens */
  @media (min-width: 2560px) {
    gap: 6rem;
    margin-bottom: 6rem;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    gap: 5rem;
    margin-bottom: 5rem;
  }

  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    gap: 5rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 1440px) {
    gap: 4rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 1200px) {
    gap: 3.5rem;
  }

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 640px) {
    gap: 2.5rem;
    margin-bottom: 2.75rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 2.25rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 390px) {
    gap: 2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 375px) {
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    margin-bottom: 2.5rem;
  }
`,B$=l.div`
  max-width: 480px;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    max-width: 600px;
  }

  @media (min-width: 1920px) {
    max-width: 540px;
  }

  @media (max-width: 1200px) {
    max-width: 450px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    max-width: 90%;
  }
`,F$=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #cec5ad;
  margin-bottom: 0.75rem;

  @media (min-width: 2560px) {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.8125rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`,W$=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.25rem, 4.5vw, 3rem);
  font-weight: 500;
  color: #22371b;
  line-height: 1.15;
  margin-bottom: 1.25rem;

  @media (min-width: 2560px) {
    font-size: clamp(3.5rem, 5vw, 4rem);
    margin-bottom: 1.75rem;
  }

  @media (min-width: 1920px) {
    font-size: clamp(3rem, 4.75vw, 3.5rem);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 640px) {
    font-size: clamp(2rem, 4vw, 2.25rem);
    margin-bottom: 1rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: clamp(1.75rem, 4vw, 2rem);
    margin-bottom: 0.875rem;
  }

  @media (max-width: 375px) {
    font-size: clamp(1.625rem, 4vw, 1.875rem);
    margin-bottom: 0.75rem;
  }

  @media (max-width: 360px) {
    font-size: clamp(1.5rem, 4vw, 1.75rem);
  }
`,D$=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.85;
  color: #21371a;
  opacity: 0.85;
  margin-bottom: 2.25rem;

  @media (min-width: 2560px) {
    font-size: 1.375rem;
    line-height: 1.9;
    margin-bottom: 3rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.1875rem;
    line-height: 1.875;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 640px) {
    font-size: 0.9375rem;
    line-height: 1.75;
    margin-bottom: 1.75rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    line-height: 1.65;
  }

  @media (max-width: 375px) {
    font-size: 0.8125rem;
  }
`,V$=l(_)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.75rem;
  background: #22371b;
  color: #FAF8F5;
  border: none;
  border-radius: 100px;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(34, 55, 27, 0.25);
  letter-spacing: 0.02em;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 2560px) {
    padding: 1.25rem 3.5rem;
    font-size: 1.125rem;
  }

  @media (min-width: 1920px) {
    padding: 1.125rem 3rem;
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    padding: 0.875rem 2.25rem;
    font-size: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0.8125rem 2rem;
    font-size: 0.8125rem;
  }

  @media (max-width: 390px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.8125rem;
    width: 100%;
    max-width: 280px;
  }

  @media (max-width: 375px) {
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: 360px) {
    padding: 0.6875rem 1.5rem;
    font-size: 0.75rem;
  }

  &:hover {
    background: #1a2b15;
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 8px 30px rgba(34, 55, 27, 0.35);
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: #1a2b15;
      transform: scale(0.98) translateZ(0);
    }
  }
`,N$=l.div`
  position: relative;
  height: 450px;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    height: 600px;
  }

  @media (min-width: 1920px) {
    height: 520px;
  }

  @media (max-width: 1440px) {
    height: 420px;
  }

  @media (max-width: 1200px) {
    height: 400px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    height: 400px;
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: 640px) {
    height: 360px;
    max-width: 450px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    height: 350px;
    max-width: 400px;
  }

  @media (max-width: 390px) {
    height: 320px;
  }

  @media (max-width: 375px) {
    height: 300px;
  }

  @media (max-width: 360px) {
    height: 280px;
  }
`,Hu=l.div`
  position: absolute;
  z-index: 3;
  transform: translateZ(0);

  &.top {
    top: 0;
    right: 10%;
    width: 70px;
    height: 45px;
  }

  &.bottom {
    bottom: 10%;
    left: 20%;
    width: 55px;
    height: 45px;
  }

  @media (min-width: 2560px) {
    &.top {
      width: 90px;
      height: 60px;
    }

    &.bottom {
      width: 70px;
      height: 55px;
    }
  }

  @media (max-width: 1024px) {
    &.top {
      width: 60px;
      height: 40px;
    }

    &.bottom {
      width: 48px;
      height: 40px;
    }
  }

  @media (max-width: 640px) {
    display: none;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    display: none;
  }
`,Uu=l.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #cec5ad;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(206, 197, 173, 0.4);
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    width: 10px;
    height: 10px;
  }

  @media (max-width: 1024px) {
    width: 7px;
    height: 7px;
  }
`,O$=l.div`
  position: absolute;
  top: 5%;
  right: 0;
  width: 90%;
  height: 90%;
  z-index: 1;
  transform: translateZ(0);
  backface-visibility: hidden;

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 15px 40px rgba(34, 55, 27, 0.2));
  }

  svg path {
    fill: #22371b;
  }

  @media (min-width: 2560px) {
    svg {
      filter: drop-shadow(0 20px 50px rgba(34, 55, 27, 0.25));
    }
  }

  @media (max-width: 640px) {
    width: 92%;
    height: 92%;

    svg {
      filter: drop-shadow(0 12px 30px rgba(34, 55, 27, 0.2));
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 94%;
    height: 94%;

    svg {
      filter: drop-shadow(0 10px 25px rgba(34, 55, 27, 0.18));
    }
  }

  @media (max-width: 360px) {
    svg {
      filter: drop-shadow(0 8px 20px rgba(34, 55, 27, 0.15));
    }
  }
`,_$=l.div`
  position: absolute;
  top: -5%;
  right: 5%;
  width: 100px;
  height: 100px;
  z-index: 2;
  transform: translateZ(0);
  backface-visibility: hidden;

  svg {
    width: 100%;
    height: 100%;
  }

  svg circle {
    fill: #cec5ad;
  }

  @media (min-width: 2560px) {
    width: 130px;
    height: 130px;
  }

  @media (min-width: 1920px) {
    width: 115px;
    height: 115px;
  }

  @media (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 640px) {
    width: 75px;
    height: 75px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 390px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 360px) {
    width: 55px;
    height: 55px;
  }
`,H$=l.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -50%) translateZ(0);
  width: 75%;
  height: 70%;
  border-radius: 20px;
  overflow: hidden;
  z-index: 2;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    border-radius: 28px;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.18);
  }

  @media (min-width: 1920px) {
    border-radius: 24px;
    box-shadow: 0 28px 65px rgba(0, 0, 0, 0.17);
  }

  @media (max-width: 1024px) {
    width: 78%;
    height: 72%;
  }

  @media (max-width: 640px) {
    width: 82%;
    height: 74%;
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 85%;
    height: 75%;
    border-radius: 14px;
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.14);
  }

  @media (max-width: 390px) {
    width: 88%;
    height: 78%;
    border-radius: 12px;
  }

  @media (max-width: 360px) {
    width: 90%;
    height: 80%;
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
`,U$=l.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;l.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateZ(0);
  width: 75px;
  height: 75px;
  background: rgba(255, 255, 255, 0.98);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 12px 45px rgba(34, 55, 27, 0.25);
  transition: all 0.3s ease;
  backface-visibility: hidden;
  will-change: transform;

  svg {
    font-size: 1.75rem;
    color: #22371b;
    margin-left: 4px;
  }

  @media (min-width: 2560px) {
    width: 95px;
    height: 95px;

    svg {
      font-size: 2.25rem;
      margin-left: 5px;
    }
  }

  @media (min-width: 1920px) {
    width: 85px;
    height: 85px;

    svg {
      font-size: 2rem;
    }
  }

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;

    svg {
      font-size: 1.625rem;
    }
  }

  @media (max-width: 640px) {
    width: 65px;
    height: 65px;

    svg {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 65px;
    height: 65px;

    svg {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 390px) {
    width: 58px;
    height: 58px;

    svg {
      font-size: 1.375rem;
      margin-left: 3px;
    }
  }

  @media (max-width: 375px) {
    width: 55px;
    height: 55px;

    svg {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 360px) {
    width: 52px;
    height: 52px;

    svg {
      font-size: 1.125rem;
    }
  }

  &:hover {
    background: #cec5ad;
    transform: translate(-50%, -50%) scale(1.08) translateZ(0);
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background: #cec5ad;
      transform: translate(-50%, -50%) scale(0.95) translateZ(0);
    }
  }
`;const Z$=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(206, 197, 173, 0.4);
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 2560px) {
    gap: 3rem;
    padding-top: 4.5rem;
  }

  @media (min-width: 1920px) {
    gap: 2.5rem;
    padding-top: 3.75rem;
  }

  @media (max-width: 1440px) {
    gap: 2rem;
    padding-top: 3rem;
  }

  @media (max-width: 1024px) {
    gap: 2rem;
    padding-top: 2.75rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 3rem;
  }

  @media (max-width: 640px) {
    gap: 1.75rem 2.5rem;
    padding-top: 2.5rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding-top: 2.25rem;
  }

  @media (max-width: 390px) {
    gap: 1.5rem 2rem;
    padding-top: 2rem;
  }

  @media (max-width: 375px) {
    gap: 1.25rem 1.75rem;
  }

  @media (max-width: 360px) {
    gap: 1.25rem 1.5rem;
    padding-top: 2rem;
  }
`,Y$=l.div`
  text-align: left;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: ${d.breakpoints.tablet}) {
    text-align: center;
  }
`,Q$=l.div`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.75rem, 5vw, 3.75rem);
  font-weight: 500;
  color: #22371b;
  line-height: 1;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;

  @media (min-width: 2560px) {
    font-size: clamp(4rem, 6vw, 5rem);
    margin-bottom: 0.75rem;
  }

  @media (min-width: 1920px) {
    font-size: clamp(3.5rem, 5.5vw, 4.5rem);
    margin-bottom: 0.625rem;
  }

  @media (max-width: 640px) {
    font-size: clamp(2.25rem, 5vw, 2.75rem);
    margin-bottom: 0.375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: clamp(2rem, 5vw, 2.5rem);
  }

  @media (max-width: 390px) {
    font-size: clamp(1.875rem, 5vw, 2.25rem);
  }

  @media (max-width: 375px) {
    font-size: clamp(1.75rem, 5vw, 2rem);
  }

  @media (max-width: 360px) {
    font-size: clamp(1.625rem, 5vw, 1.875rem);
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    justify-content: center;
  }
`,G$=l.span`
  font-size: 1.5rem;
  color: #cec5ad;
  font-weight: 600;
  margin-left: 2px;

  @media (min-width: 2560px) {
    font-size: 2rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.75rem;
  }

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1.125rem;
  }

  @media (max-width: 390px) {
    font-size: 1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.9375rem;
  }
`,K$=l.div`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  font-weight: 600;
  color: #22371b;

  @media (min-width: 2560px) {
    font-size: 1.375rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.1875rem;
  }

  @media (max-width: 640px) {
    font-size: 0.9375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.875rem;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
  }

  @media (max-width: 360px) {
    font-size: 0.75rem;
  }
`,q$=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  color: #21371a;
  opacity: 0.7;

  @media (min-width: 2560px) {
    font-size: 1.1875rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
  }

  @media (max-width: 640px) {
    font-size: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.8125rem;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
  }

  @media (max-width: 360px) {
    font-size: 0.6875rem;
  }
`,F0=[{id:1,slug:"good-body-soul-balance",title:"Have a Good Body and Soul Balance",excerpt:"Discover how regular yoga practice can help you achieve perfect harmony between your physical body and inner soul, creating lasting wellness.",content:`Achieving balance between body and soul is essential for holistic wellness. Through regular yoga practice, meditation, and mindful living, you can create a harmonious connection that transforms your entire life. This journey begins with awareness and dedication to both physical and spiritual growth.

Learn how ancient yogic principles combined with modern wellness techniques can help you maintain this delicate balance. We'll explore breathing exercises, meditation practices, and lifestyle adjustments that support your journey toward complete harmony.

Remember, balance is not a destination but a continuous practice. Each day brings new opportunities to align your physical actions with your spiritual intentions, creating a life of purpose and peace.`,author:"BK Shikha",date:"2026-01-28",category:"Wellness",image:"/6 images/body and soul balance.jfif.jpeg",readTime:"5 min read"},{id:2,slug:"yoga-practice-busy-times",title:"How to Keep Yoga Practice During Busy Times",excerpt:"Learn effective strategies to maintain your yoga practice even during your busiest days, ensuring consistent growth and wellness.",content:`In our fast-paced modern world, maintaining a consistent yoga practice can feel challenging. However, with the right strategies and mindset, you can integrate yoga into even the busiest schedule.

Start by understanding that yoga practice doesn't always require an hour-long session. Even 10-15 minutes of mindful movement can be transformative. Morning stretches, lunch break meditation, or evening wind-down routines can all become part of your practice.

Create a realistic schedule that works for your lifestyle. Perhaps it's three full sessions per week, supplemented by shorter daily practices. The key is consistency over perfection. Remember, your mat is always waiting for you, and every moment spent in practice is a gift to yourself.

We'll explore time-management techniques, quick yoga sequences for busy mornings, and ways to incorporate mindfulness into daily activities. Your practice can thrive even during life's most demanding periods.`,author:"BK Shikha",date:"2026-01-25",category:"Yoga",image:"/6 images/yoga on busy days.png",readTime:"7 min read"},{id:3,slug:"yoga-food-mindful-eating",title:"The Yoga of Food and Mindful Eating",excerpt:"Explore the connection between mindful eating, nutrition, and your yoga practice for complete wellness and vitality.",content:`Food is not just fuel—it's a form of yoga. The ancient yogic tradition recognizes that what we eat, how we eat, and our relationship with food profoundly impacts our physical, mental, and spiritual well-being.

Mindful eating is a practice that brings awareness to every aspect of nourishment. It's about being present during meals, appreciating the colors, textures, and flavors of your food, and understanding how different foods affect your energy and practice.

In yoga philosophy, food is classified into three categories: Sattvic (pure), Rajasic (stimulating), and Tamasic (dulling). Learning to choose foods that support your practice can enhance your flexibility, focus, and overall vitality.

We'll explore practical tips for mindful eating, the best foods to support your yoga practice, and how to develop a healthy, balanced relationship with nutrition. Discover how your plate can become an extension of your yoga mat, supporting your journey toward complete wellness.`,author:"BK Shikha",date:"2026-01-20",category:"Nutrition",image:"/6 images/mindful eating.png",readTime:"6 min read"}],X$=(e=3)=>F0.sort((t,i)=>new Date(i.date)-new Date(t.date)).slice(0,e),J$=e=>F0.find(t=>t.slug===e),e9=(e,t=3)=>F0.filter(i=>i.slug!==e).slice(0,t),Bs=({children:e,subtitle:t,align:i="center",color:n="primary",maxWidth:o,className:a})=>r.jsxs(t9,{as:j.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,ease:"easeOut"},$align:i,$maxWidth:o,className:a,children:[t&&r.jsx(i9,{children:t}),r.jsx(n9,{$color:n,children:e})]}),t9=l.div`
  text-align: ${e=>e.$align};
  max-width: ${e=>e.$maxWidth||"100%"};
  margin: ${e=>e.$align==="center"?"0 auto 3rem":"0 0 3rem"};

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }
`,i9=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${d.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 1rem;
`,n9=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 600;
  color: ${e=>{switch(e.$color){case"secondary":return d.colors.secondary;case"accent":return d.colors.accent;case"text":return d.colors.text;default:return d.colors.primary}}};
  line-height: 1.2;
  margin: 0;
`,Zu=({children:e,delay:t=0,duration:i=.6,direction:n="up",className:o,...a})=>{const s=k.useRef(null),[c,m]=k.useState(!1),[p,u]=k.useState(!1);k.useEffect(()=>{const b=window.matchMedia("(prefers-reduced-motion: reduce)");m(b.matches);const C=v=>m(v.matches);return b.addEventListener("change",C),()=>b.removeEventListener("change",C)},[]),k.useEffect(()=>{const b=()=>{u(window.innerWidth<=900)};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]);const f=O(s,{once:!0,margin:p?"-50px":"-100px"}),g=p?20:40,w={hidden:{opacity:c?1:0,y:c?0:n==="up"?g:n==="down"?-g:0,x:c?0:n==="left"?g:n==="right"?-g:0},visible:{opacity:1,y:0,x:0,transition:c?{duration:0}:{duration:p?Math.min(i,.4):i,delay:p?Math.min(t,.1):t,ease:[.4,0,.2,1]}}};return r.jsx(r9,{ref:s,initial:"hidden",animate:f?"visible":"hidden",variants:w,className:o,$prefersReducedMotion:c,...a,children:e})},r9=l(j.div)`
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: ${e=>e.$prefersReducedMotion?"auto":"transform, opacity"};
  isolation: isolate;
  
  /* Reset will-change after animation completes to free resources */
  &[data-projection-id] {
    @media (prefers-reduced-motion: reduce) {
      will-change: auto;
    }
  }

  /* Performance optimization for mobile devices */
  @media (max-width: 900px) {
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
  }

  /* Extra performance for small phones */
  @media (max-width: 480px) {
    will-change: ${e=>e.$prefersReducedMotion?"auto":"opacity"};
  }

  /* Touch device optimization */
  @media (hover: none) and (pointer: coarse) {
    -webkit-tap-highlight-color: transparent;
  }
`,o9=()=>{const[e,t]=k.useState(null),i=X$(3);return k.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),!i||i.length===0?null:r.jsxs(r.Fragment,{children:[r.jsx(a9,{children:r.jsxs("div",{className:"container",children:[r.jsx(Zu,{children:r.jsx(Bs,{subtitle:"Latest Insights",title:"From the Blog",description:"Explore the latest thoughts on mindfulness, wellness, and personal growth"})}),r.jsx(s9,{children:i.map((n,o)=>r.jsx(Zu,{delay:.1+o*.1,children:r.jsxs(_t,{as:j.article,whileHover:{y:-8},transition:{duration:.3},onClick:()=>t(n),children:[r.jsxs(l9,{children:[r.jsx(d9,{src:n.image,alt:n.title}),r.jsx(c9,{children:n.category})]}),r.jsxs(m9,{children:[r.jsxs(p9,{children:[r.jsxs(ua,{children:[r.jsx(Ms,{size:14}),r.jsx("span",{children:new Date(n.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})})]}),r.jsxs(ua,{children:[r.jsx(jo,{size:14}),r.jsx("span",{children:n.readTime})]})]}),r.jsx(h9,{children:n.title}),r.jsx(u9,{children:n.excerpt}),r.jsxs(f9,{as:j.div,whileHover:{x:4},transition:{duration:.2},children:[r.jsx("span",{children:"Read Article"}),r.jsx(me,{})]})]})]})},n.id))})]})}),r.jsx(Bt,{children:e&&r.jsxs(g9,{children:[r.jsx(x9,{as:j.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:()=>t(null)}),r.jsx(y9,{as:j.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.3},onClick:n=>n.stopPropagation(),children:r.jsxs(w9,{children:[r.jsxs(v9,{children:[r.jsx(b9,{children:e.category}),r.jsx(k9,{onClick:()=>t(null),"aria-label":"Close modal",children:r.jsx(cl,{size:24})})]}),r.jsx(j9,{src:e.image,alt:e.title}),r.jsxs($9,{children:[r.jsxs(S9,{children:[r.jsxs(ua,{children:[r.jsx(Ms,{size:16}),r.jsx("span",{children:new Date(e.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})})]}),r.jsxs(ua,{children:[r.jsx(jo,{size:16}),r.jsx("span",{children:e.readTime})]})]}),r.jsx(C9,{children:e.title}),r.jsx(z9,{children:e.content})]})]})})]})})]})},a9=l.section`
  padding: 6rem 0;
  background: ${d.colors.background};
  isolation: isolate;
  will-change: auto;

  @media (min-width: 1920px) {
    padding: 7rem 0;
  }

  @media (max-width: 1440px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 1200px) {
    padding: 5rem 0;
  }

  @media (max-width: 1024px) {
    padding: 4.5rem 0;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }

  @media (max-width: 820px) {
    padding: 3.5rem 0;
  }

  @media (max-width: 640px) {
    padding: 3.25rem 0;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 3rem 0;
  }

  @media (max-width: 430px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 390px) {
    padding: 2.25rem 0;
  }

  @media (max-width: 375px) {
    padding: 2rem 0;
  }
`,s9=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 1920px) {
    max-width: 1400px;
    gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }

  @media (max-width: 1440px) {
    gap: 1.875rem;
  }

  @media (max-width: 1200px) {
    gap: 1.75rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 600px;
  }

  @media (max-width: 640px) {
    gap: 1.75rem;
    padding: 0 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 1.5rem;
    padding: 0 0.75rem;
  }

  @media (max-width: 390px) {
    gap: 1.25rem;
  }

  @media (max-width: 375px) {
    gap: 1rem;
  }
`,_t=l.article`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: ${d.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(139, 115, 85, 0.08);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    box-shadow: 0 8px 30px rgba(139, 115, 85, 0.15);
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    box-shadow: 0 3px 16px rgba(139, 115, 85, 0.08);
    
    &:hover {
      box-shadow: 0 6px 24px rgba(139, 115, 85, 0.13);
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    box-shadow: 0 2px 12px rgba(139, 115, 85, 0.06);
    
    &:hover {
      box-shadow: 0 4px 18px rgba(139, 115, 85, 0.11);
    }
  }

  @media (max-width: 390px) {
    box-shadow: 0 2px 10px rgba(139, 115, 85, 0.05);
    
    &:hover {
      box-shadow: 0 3px 15px rgba(139, 115, 85, 0.1);
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      box-shadow: 0 4px 20px rgba(139, 115, 85, 0.08);
    }

    &:active {
      box-shadow: 0 6px 24px rgba(139, 115, 85, 0.13);
      transform: scale(0.99) translateZ(0);
    }
  }
`,l9=l.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/10;
  width: 100%;
  background: ${d.colors.backgroundAlt};
`,d9=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  ${_t}:hover & {
    transform: scale(1.08) translateZ(0);
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    transition: transform 0.3s ease;
    
    ${_t}:hover & {
      transform: scale(1.05) translateZ(0);
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    ${_t}:hover & {
      transform: scale(1.03) translateZ(0);
    }
  }

  @media (hover: none) and (pointer: coarse) {
    ${_t}:hover & {
      transform: translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    ${_t}:hover & {
      transform: translateZ(0);
    }
  }
`,c9=l.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(90, 138, 98, 0.95);
  color: #ffffff;
  padding: 0.375rem 0.875rem;
  border-radius: ${d.borderRadius.full};
  font-family: ${d.fonts.body};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 0.8125rem;
    padding: 0.4375rem 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.6875rem;
    padding: 0.3438rem 0.8125rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    top: 0.875rem;
    left: 0.875rem;
  }

  @media (max-width: 640px) {
    font-size: 0.625rem;
    padding: 0.3125rem 0.75rem;
    top: 0.75rem;
    left: 0.75rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.5938rem;
    padding: 0.2813rem 0.6875rem;
  }

  @media (max-width: 390px) {
    font-size: 0.5625rem;
    padding: 0.25rem 0.625rem;
    top: 0.625rem;
    left: 0.625rem;
  }
`,m9=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;

  @media (min-width: 1920px) {
    padding: 1.75rem;
    gap: 1.125rem;
  }

  @media (max-width: 1200px) {
    padding: 1.375rem;
    gap: 0.9375rem;
  }

  @media (max-width: 1024px) {
    padding: 1.25rem;
    gap: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 1.375rem;
    gap: 1rem;
  }

  @media (max-width: 640px) {
    padding: 1.25rem;
    gap: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 1.125rem;
    gap: 0.8125rem;
  }

  @media (max-width: 390px) {
    padding: 1rem;
    gap: 0.75rem;
  }

  @media (max-width: 375px) {
    padding: 0.875rem;
  }
`,p9=l.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,ua=l.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: ${d.colors.textLight};
  font-family: ${d.fonts.body};
  font-size: 0.8125rem;
  
  svg {
    color: ${d.colors.accent};
    flex-shrink: 0;
  }

  @media (min-width: 1920px) {
    font-size: 0.875rem;
    gap: 0.4375rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.7813rem;
    gap: 0.3438rem;
  }

  @media (max-width: 640px) {
    font-size: 0.75rem;
    gap: 0.3125rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.7188rem;
  }

  @media (max-width: 390px) {
    font-size: 0.6875rem;
    gap: 0.25rem;
  }

  @media (max-width: 375px) {
    font-size: 0.625rem;
  }
`,h9=l.h3`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.125rem, 2.5vw, 1.375rem);
  font-weight: 600;
  color: ${d.colors.text};
  line-height: 1.3;
  margin: 0;

  @media (min-width: 1920px) {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  }

  @media (max-width: 1024px) {
    line-height: 1.35;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    line-height: 1.3;
  }

  @media (max-width: 640px) {
    line-height: 1.35;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    line-height: 1.4;
  }

  @media (max-width: 390px) {
    line-height: 1.4;
  }
`,u9=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  color: ${d.colors.textLight};
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: 1920px) {
    font-size: 1rem;
    line-height: 1.65;
  }

  @media (max-width: 1200px) {
    font-size: 0.9063rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.875rem;
    line-height: 1.55;
  }

  @media (max-width: 640px) {
    font-size: 0.8438rem;
    line-height: 1.6;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.8125rem;
    line-height: 1.55;
  }

  @media (max-width: 390px) {
    font-size: 0.7813rem;
    -webkit-line-clamp: 2;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`,f9=l.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${d.colors.accent};
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  margin-top: 0.5rem;
  
  svg {
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  ${_t}:hover & svg {
    transform: translateX(4px);
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
    gap: 0.5625rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.875rem;
    margin-top: 0.375rem;
  }

  @media (max-width: 640px) {
    font-size: 0.8438rem;
    gap: 0.4375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.8125rem;
    margin-top: 0.25rem;
  }

  @media (max-width: 390px) {
    font-size: 0.7813rem;
    gap: 0.375rem;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }

  @media (hover: none) and (pointer: coarse) {
    ${_t}:hover & svg {
      transform: translateX(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
    
    ${_t}:hover & svg {
      transform: translateX(0);
    }
  }
`,g9=l.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  
  > * {
    pointer-events: auto;
  }
`,x9=l.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 9999;
`,y9=l.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 0.75rem;
  }

  @media (max-width: 640px) {
    padding: 0.625rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0.5rem;
  }

  @media (max-width: 390px) {
    padding: 0.375rem;
  }
`,w9=l.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  background: #ffffff;
  border-radius: ${d.borderRadius.xl};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  margin: auto;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    max-width: 900px;
  }

  @media (max-width: 1024px) {
    max-width: 700px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    max-width: 600px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 640px) {
    max-height: 92vh;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    max-height: 94vh;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 390px) {
    max-height: 95vh;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }
`,v9=l.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  z-index: 10;

  @media (max-width: 1024px) {
    padding: 1.25rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 1.125rem;
  }

  @media (max-width: 640px) {
    padding: 1rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0.875rem;
  }

  @media (max-width: 390px) {
    padding: 0.75rem;
  }
`,b9=l.span`
  background: rgba(90, 138, 98, 0.95);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: ${d.borderRadius.full};
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 0.9375rem;
    padding: 0.5625rem 1.125rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.8125rem;
    padding: 0.4375rem 0.9375rem;
  }

  @media (max-width: 640px) {
    font-size: 0.75rem;
    padding: 0.375rem 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.6875rem;
    padding: 0.3438rem 0.8125rem;
  }

  @media (max-width: 390px) {
    font-size: 0.625rem;
    padding: 0.3125rem 0.75rem;
  }
`,k9=l.button`
  background: rgba(255, 255, 255, 0.95);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${d.colors.text};
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    background: #ffffff;
    transform: scale(1.05) translateZ(0);
  }

  &:active {
    transform: scale(0.95) translateZ(0);
  }

  @media (min-width: 1920px) {
    width: 2.75rem;
    height: 2.75rem;
  }

  @media (max-width: 1024px) {
    width: 2.375rem;
    height: 2.375rem;
  }

  @media (max-width: 640px) {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 2rem;
    height: 2rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
    
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 390px) {
    width: 1.875rem;
    height: 1.875rem;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
    }
  }
`,j9=l.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center 30%;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  @media (min-width: 1920px) {
    height: 350px;
  }

  @media (max-width: 1024px) {
    height: 280px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    height: 250px;
  }

  @media (max-width: 640px) {
    height: 220px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    height: 200px;
  }

  @media (max-width: 430px) {
    height: 180px;
  }

  @media (max-width: 390px) {
    height: 160px;
  }

  @media (max-width: 375px) {
    height: 150px;
  }
`,$9=l.div`
  padding: 2rem;
  overflow-y: auto;
  flex: 1;

  @media (min-width: 1920px) {
    padding: 2.5rem;
  }

  @media (max-width: 1024px) {
    padding: 1.75rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 1.5rem;
  }

  @media (max-width: 640px) {
    padding: 1.375rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 1.25rem;
  }

  @media (max-width: 390px) {
    padding: 1rem;
  }

  @media (max-width: 375px) {
    padding: 0.875rem;
  }
`,S9=l.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 1rem;
    margin-bottom: 1.125rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 0.875rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 390px) {
    gap: 0.75rem;
    margin-bottom: 0.875rem;
  }
`,C9=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.375rem, 3vw, 2rem);
  font-weight: 600;
  color: ${d.colors.text};
  line-height: 1.3;
  margin: 0 0 1.5rem 0;

  @media (min-width: 1920px) {
    font-size: clamp(1.625rem, 3vw, 2.25rem);
    margin-bottom: 1.75rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 1.375rem;
    line-height: 1.35;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 1.125rem;
    line-height: 1.4;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 1rem;
  }

  @media (max-width: 390px) {
    margin-bottom: 0.875rem;
  }
`,z9=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  color: ${d.colors.textLight};
  line-height: 1.8;
  margin: 0;
  white-space: pre-line;

  @media (min-width: 1920px) {
    font-size: 1.125rem;
    line-height: 1.85;
  }

  @media (max-width: 1200px) {
    font-size: 1.0313rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.75;
  }

  @media (max-width: 640px) {
    font-size: 0.9688rem;
    line-height: 1.7;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.9375rem;
    line-height: 1.65;
  }

  @media (max-width: 390px) {
    font-size: 0.9063rem;
    line-height: 1.6;
  }

  @media (max-width: 375px) {
    font-size: 0.875rem;
  }
`,T9=[{id:1,image:"/6 images/ig 1.heic.jpeg",alt:"Best Morning Routine Recipe"},{id:2,image:"/6 images/ig 2.jpg.jpeg",alt:"Create your Destiny - BK Shikha"},{id:3,image:"/6 images/ig 6.jpg.jpeg",alt:"Where do you feel tension"},{id:4,image:"/6 images/ig 4.jpg.jpeg",alt:"Myth vs Fact - Healthy Food"},{id:5,image:"/6 images/ig 5.jpg.jpeg",alt:"Create Your Destiny"},{id:6,image:"/6 images/ig 3.jpg.jpeg",alt:"How to rewire your Mind"}],P9=()=>{const e=k.useRef(null),t=O(e,{once:!0,amount:.2}),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}};return r.jsxs(I9,{ref:e,children:[r.jsx(R9,{className:"left",children:r.jsxs("svg",{viewBox:"0 0 150 300",fill:"none",children:[r.jsx("path",{d:"M75 0C75 0 15 75 15 150C15 225 75 300 75 300C75 300 135 225 135 150C135 75 75 0 75 0Z",fill:"#e8f0e9"}),r.jsx("path",{d:"M75 30V270",stroke:"#c5ddc8",strokeWidth:"1.5"}),r.jsx("path",{d:"M75 80L40 120",stroke:"#c5ddc8",strokeWidth:"1"}),r.jsx("path",{d:"M75 140L45 180",stroke:"#c5ddc8",strokeWidth:"1"}),r.jsx("path",{d:"M75 200L50 240",stroke:"#c5ddc8",strokeWidth:"1"}),r.jsx("path",{d:"M75 80L110 120",stroke:"#c5ddc8",strokeWidth:"1"}),r.jsx("path",{d:"M75 140L105 180",stroke:"#c5ddc8",strokeWidth:"1"}),r.jsx("path",{d:"M75 200L100 240",stroke:"#c5ddc8",strokeWidth:"1"})]})}),r.jsx(Yu,{className:"top-left",children:[...Array(12)].map((o,a)=>r.jsx(Qu,{style:{left:`${a%4*14}px`,top:`${Math.floor(a/4)*14}px`}},a))}),r.jsx(Yu,{className:"bottom-right",children:[...Array(15)].map((o,a)=>r.jsx(Qu,{style:{left:`${a%5*14}px`,top:`${Math.floor(a/5)*14}px`}},a))}),r.jsxs(B9,{as:j.div,variants:i,initial:"hidden",animate:t?"visible":"hidden",children:[r.jsxs(F9,{children:[r.jsx(j.div,{variants:n,children:r.jsx(W9,{children:"Community"})}),r.jsx(j.div,{variants:n,children:r.jsx(D9,{children:"Join Our Wellness Family"})}),r.jsx(j.div,{variants:n,children:r.jsx(V9,{children:"Connect with like-minded souls on the path to inner peace and holistic wellbeing"})})]}),r.jsx(N9,{as:j.div,variants:n,children:r.jsxs(O9,{children:[r.jsxs(_9,{children:[r.jsx(H9,{children:"INSTAGRAM"}),r.jsxs(U9,{href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer",children:[r.jsx(rn,{}),r.jsx("span",{children:"@cyd_bkshikha"})]}),r.jsx(Z9,{children:"Follow for daily wellness inspiration"})]}),r.jsx(Y9,{children:r.jsx(Q9,{children:T9.map((o,a)=>r.jsxs(Kt,{as:j.a,href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-8,scale:1.02},transition:{duration:.3},style:{"--delay":`${a*.1}s`},className:`item-${a+1}`,children:[r.jsx(G9,{src:o.image,alt:o.alt,loading:"lazy"}),r.jsx(K9,{children:r.jsxs("svg",{viewBox:"0 0 100 100",children:[r.jsx("circle",{cx:"50",cy:"50",r:"30",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.6"}),r.jsx("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.6"}),r.jsx("circle",{cx:"50",cy:"50",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.6"}),r.jsx("path",{d:"M50,20 L65,35 L65,65 L50,80 L35,65 L35,35 Z",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.4"})]})}),r.jsxs(q9,{children:[r.jsx(X9,{children:r.jsx(rn,{})}),r.jsx(J9,{children:r.jsxs(eS,{children:[r.jsx(mt,{})," 234"]})}),r.jsx(tS,{className:"ripple"})]})]},o.id))})})]})}),r.jsxs(iS,{as:j.div,variants:n,children:[r.jsxs(ud,{children:[r.jsx(fd,{className:"green",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})})}),r.jsx(gd,{children:"Daily Inspiration"}),r.jsx(xd,{children:"Wellness tips, yoga motivation & emotional healing guidance every day"})]}),r.jsxs(ud,{children:[r.jsx(fd,{className:"golden",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),r.jsx("circle",{cx:"9",cy:"7",r:"4"}),r.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),r.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),r.jsx(gd,{children:"Supportive Circle"}),r.jsx(xd,{children:"Connect with like-minded individuals on similar wellness journeys"})]}),r.jsxs(ud,{children:[r.jsx(fd,{className:"mint",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),r.jsx("path",{d:"M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"})]})}),r.jsx(gd,{children:"Exclusive Events"}),r.jsx(xd,{children:"Access workshops, group sessions, and special wellness challenges"})]})]}),r.jsx(nS,{as:j.div,variants:n,children:r.jsxs(rS,{children:[r.jsxs(oS,{children:[r.jsx(aS,{children:"Ready to Start Your Journey?"}),r.jsx(sS,{children:"Join thousands who have transformed their lives through yoga, mindfulness, and holistic wellness practices."}),r.jsxs(lS,{children:[r.jsxs(dS,{href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer",children:[r.jsx(rn,{}),"Follow on Instagram"]}),r.jsxs(cS,{to:"/contact",children:["Book a Session",r.jsx(me,{})]})]})]}),r.jsx(mS,{children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",children:[r.jsx("circle",{cx:"100",cy:"100",r:"80",stroke:"#c9a227",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.3"}),r.jsx("circle",{cx:"100",cy:"100",r:"60",stroke:"#5a8a62",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.4"}),r.jsx("circle",{cx:"100",cy:"100",r:"40",stroke:"#c9a227",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.5"})]})})]})})]})]})},M9=Ft`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
`,A9=Ft`
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`,L9=Ft`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,E9=Ft`
  0%, 100% { box-shadow: 0 0 20px rgba(201, 162, 39, 0.3), 0 0 40px rgba(90, 138, 98, 0.2); }
  25% { box-shadow: 0 0 25px rgba(90, 138, 98, 0.4), 0 0 50px rgba(201, 162, 39, 0.3); }
  50% { box-shadow: 0 0 30px rgba(142, 207, 179, 0.4), 0 0 60px rgba(90, 138, 98, 0.3); }
  75% { box-shadow: 0 0 25px rgba(201, 162, 39, 0.4), 0 0 50px rgba(142, 207, 179, 0.3); }
`,I9=l.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #FAF8F5 0%, #f8f9f7 50%, #FAF8F5 100%);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  will-change: auto;

  @media (min-width: 1920px) {
    padding: 8rem 0;
  }

  @media (max-width: 1440px) {
    padding: 6rem 0;
  }

  @media (max-width: 1200px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 1024px) {
    padding: 5rem 0;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4.5rem 0;
  }

  @media (max-width: 820px) {
    padding: 4rem 0;
  }

  @media (max-width: 640px) {
    padding: 3.5rem 0;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 3rem 0;
  }

  @media (max-width: 430px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 390px) {
    padding: 2.25rem 0;
  }

  @media (max-width: 375px) {
    padding: 2rem 0;
  }
`,R9=l.div`
  position: absolute;
  width: 120px;
  height: 250px;
  opacity: 0.5;
  pointer-events: none;
  transform: translateZ(0);
  will-change: auto;

  &.left {
    left: -20px;
    top: 20%;
    transform: rotate(-15deg) translateZ(0);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    width: 100px;
    height: 210px;
    opacity: 0.4;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    display: none;
  }
`,Yu=l.div`
  position: absolute;
  z-index: 1;
  transform: translateZ(0);

  &.top-left {
    top: 8%;
    left: 8%;
    width: 55px;
    height: 45px;
  }

  &.bottom-right {
    bottom: 10%;
    right: 8%;
    width: 70px;
    height: 45px;
  }

  @media (max-width: 1024px) {
    &.top-left {
      width: 48px;
      height: 40px;
    }

    &.bottom-right {
      width: 60px;
      height: 40px;
    }
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    display: none;
  }
`,Qu=l.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #cec5ad;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(206, 197, 173, 0.4);
  transform: translateZ(0);

  @media (max-width: 1024px) {
    width: 7px;
    height: 7px;
  }
`,B9=l.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (min-width: 1920px) {
    max-width: 1400px;
    padding: 0 2.5rem;
  }

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }

  @media (max-width: 1200px) {
    padding: 0 1.75rem;
  }

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 0 1.5rem;
  }

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1rem;
  }

  @media (max-width: 390px) {
    padding: 0 0.875rem;
  }

  @media (max-width: 375px) {
    padding: 0 0.75rem;
  }
`,F9=l.div`
  text-align: center;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 2;

  @media (min-width: 1920px) {
    margin-bottom: 4.5rem;
  }

  @media (max-width: 1440px) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 3rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    margin-bottom: 2.75rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }
`,W9=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #cec5ad;
  margin-bottom: 0.75rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1rem;
    letter-spacing: 0.12em;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.875rem;
    letter-spacing: 0.08em;
  }

  @media (max-width: 390px) {
    font-size: 0.8125rem;
    letter-spacing: 0.06em;
  }
`,D9=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.25rem, 4.5vw, 3rem);
  font-weight: 500;
  color: #22371b;
  line-height: 1.15;
  margin-bottom: 1rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: clamp(2.75rem, 5vw, 3.5rem);
  }

  @media (max-width: 640px) {
    line-height: 1.2;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 0.875rem;
    line-height: 1.25;
  }
`,V9=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  color: #21371a;
  opacity: 0.8;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.75;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1.125rem;
    max-width: 600px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    max-width: 480px;
  }

  @media (max-width: 640px) {
    max-width: 100%;
    font-size: 1rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.9375rem;
    line-height: 1.7;
  }
`,N9=l.div`
  margin-bottom: 4rem;

  @media (min-width: 1920px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    margin-bottom: 3rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 2.5rem;
  }
`,O9=l.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  min-height: 500px;

  @media (min-width: 1920px) {
    gap: 5rem;
    min-height: 550px;
  }

  @media (max-width: 1200px) {
    gap: 3.5rem;
  }

  @media (max-width: 1024px) {
    gap: 3rem;
    min-height: 450px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    flex-direction: column;
    gap: 2.5rem;
    min-height: auto;
  }

  @media (max-width: 640px) {
    gap: 2rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 1.5rem;
  }
`,_9=l.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    flex: 0 0 350px;
  }

  @media (max-width: 1200px) {
    flex: 0 0 280px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    flex: none;
    align-items: center;
    text-align: center;
  }
`,H9=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(3rem, 8vw, 4.5rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  color: #22371b;
  line-height: 0.9;
  margin-bottom: 1.5rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: clamp(3.5rem, 8vw, 5rem);
  }

  @media (max-width: 640px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 1rem;
    line-height: 0.95;
  }
`,U9=l.a`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  color: #22371b;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.875rem 1.75rem;
  background: rgba(206, 197, 173, 0.2);
  border-radius: 50px;
  border: 2px solid transparent;
  transform: translateZ(0);
  backface-visibility: hidden;

  svg {
    font-size: 1.375rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    background: linear-gradient(135deg, #833AB4, #FD1D1D, #F77737);
    border-color: transparent;
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 8px 25px rgba(131, 58, 180, 0.3);

    svg {
      transform: scale(1.1);
    }
  }

  @media (min-width: 1920px) {
    font-size: 1.1875rem;
    padding: 1rem 2rem;
    
    svg {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1024px) {
    font-size: 1.0625rem;
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    justify-content: center;
    font-size: 1rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0.625rem 1.25rem;
    font-size: 0.9375rem;
    
    svg {
      font-size: 1.25rem;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateY(0) translateZ(0);
    }
    
    &:active {
      transform: scale(0.98) translateZ(0);
    }
  }
`,Z9=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  color: #21371a;
  opacity: 0.7;
  margin-top: 0.875rem;
  max-width: 200px;
  line-height: 1.65;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1rem;
    max-width: 240px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    max-width: none;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.7;
  }
`,Y9=l.div`
  flex: 1;
  position: relative;
  transform: translateZ(0);
`,Q9=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.25rem;
  max-width: 650px;

  @media (min-width: 1920px) {
    max-width: 750px;
    gap: 1.5rem;
  }

  @media (max-width: 1200px) {
    max-width: 580px;
    gap: 1.125rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  @media (max-width: 390px) {
    gap: 0.625rem;
  }
`,Kt=l.a`
  position: relative;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.4s ease;
  animation: ${M9} 6s ease-in-out infinite;
  animation-delay: calc(var(--delay, 0s));
  border: 2px solid transparent;
  background-clip: padding-box;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  &.item-1 {
    transform: translateY(0) translateZ(0);
    animation-delay: 0s;
  }

  &.item-2 {
    transform: translateY(20px) translateZ(0);
    animation-delay: 1s;
  }

  &.item-3 {
    transform: translateY(0) translateZ(0);
    animation-delay: 2s;
  }

  &.item-4 {
    transform: translateY(0) translateZ(0);
    animation-delay: 3s;
  }

  &.item-5 {
    transform: translateY(-20px) translateZ(0);
    animation-delay: 4s;
  }

  &.item-6 {
    transform: translateY(0) translateZ(0);
    animation-delay: 5s;
  }

  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    z-index: 10;
    animation: ${E9} 2s ease-in-out infinite;
    border-color: rgba(201, 162, 39, 0.5);
  }

  @media (min-width: 1920px) {
    border-radius: 24px;
  }

  @media (max-width: 1024px) {
    border-radius: 18px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    border-radius: 16px;
    
    &.item-2, &.item-5 {
      transform: translateY(0) translateZ(0);
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    border-radius: 14px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
  }

  @media (hover: none) and (pointer: coarse) {
    animation: none;
    transform: translateY(0) translateZ(0) !important;
    
    &:hover {
      animation: none;
    }
    
    &:active {
      transform: scale(0.97) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: translateY(0) translateZ(0) !important;
  }
`,G9=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  ${Kt}:hover & {
    transform: scale(1.1) translateZ(0);
  }

  @media (hover: none) and (pointer: coarse) {
    ${Kt}:hover & {
      transform: translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    ${Kt}:hover & {
      transform: translateZ(0);
    }
  }
`,K9=l.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  color: #ffffff;
  z-index: 2;
  transform: translateZ(0);

  svg {
    width: 80%;
    height: 80%;
    animation: ${L9} 20s linear infinite;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  }

  ${Kt}:hover & {
    opacity: 1;
  }

  @media (hover: none) and (pointer: coarse) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation: none;
    }
  }
`,q9=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  transform: translateZ(0);

  ${Kt}:hover & {
    opacity: 1;
  }

  @media (hover: none) and (pointer: coarse) {
    ${Kt}:hover & {
      opacity: 0;
    }
  }
`,X9=l.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  transform: translateZ(0);

  svg {
    font-size: 1.5rem;
    color: #ffffff;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 45px;
    height: 45px;
    
    svg {
      font-size: 1.375rem;
    }
  }
`,J9=l.div`
  display: flex;
  gap: 1rem;
  transform: translateZ(0);

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 0.75rem;
  }
`,eS=l.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: #ffffff;
  font-weight: 500;
  transform: translateZ(0);

  svg {
    font-size: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.8125rem;
    gap: 0.25rem;
    
    svg {
      font-size: 0.8125rem;
    }
  }
`,tS=l.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  opacity: 0;
  transform: translateZ(0);

  ${Kt}:hover & {
    animation: ${A9} 1.2s ease-out infinite;
  }

  @media (hover: none) and (pointer: coarse) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    ${Kt}:hover & {
      animation: none;
    }
  }
`,iS=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 1920px) {
    gap: 2.5rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 1200px) {
    gap: 1.75rem;
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
    margin-bottom: 3.5rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    gap: 1.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 2.5rem;
    gap: 1rem;
  }
`,ud=l.div`
  background: #ffffff;
  padding: 2.25rem;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 6px 30px rgba(34, 55, 27, 0.06);
  border: 1px solid rgba(206, 197, 173, 0.15);
  transition: all 0.4s ease;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    transform: translateY(-8px) translateZ(0);
    box-shadow: 0 20px 50px rgba(34, 55, 27, 0.1);
  }

  @media (min-width: 1920px) {
    padding: 2.5rem;
    border-radius: 26px;
  }

  @media (max-width: 1024px) {
    padding: 2rem;
    border-radius: 22px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 1.75rem;
    border-radius: 20px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 1.5rem;
    border-radius: 18px;
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
    }
    
    &:active {
      transform: scale(0.98) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow 0.3s ease;
    
    &:hover {
      transform: translateZ(0);
    }
  }
`,fd=l.div`
  width: 65px;
  height: 65px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transform: translateZ(0);

  &.green {
    background: linear-gradient(135deg, rgba(34, 55, 27, 0.12), rgba(34, 55, 27, 0.05));
    color: #22371b;
    color: #5a8a62;
  }

  &.golden {
    background: linear-gradient(135deg, rgba(201, 162, 39, 0.15), rgba(201, 162, 39, 0.05));
    color: #c9a227;
  }

  &.mint {
    background: linear-gradient(135deg, rgba(142, 207, 179, 0.2), rgba(142, 207, 179, 0.08));
    color: #5a9a72;
  }

  svg {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 1920px) {
    width: 70px;
    height: 70px;
    
    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
    
    svg {
      width: 26px;
      height: 26px;
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 55px;
    height: 55px;
    margin-bottom: 1.25rem;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`,gd=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.75rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1.375rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.1875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1.125rem;
    margin-bottom: 0.625rem;
  }
`,xd=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #21371a;
  opacity: 0.8;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.875rem;
    line-height: 1.7;
  }
`,nS=l.div`
  transform: translateZ(0);
`,rS=l.div`
  background: linear-gradient(135deg, #22371b 0%, #2d4a24 100%);
  border-radius: 32px;
  padding: 4rem;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  isolation: isolate;

  @media (min-width: 1920px) {
    border-radius: 36px;
    padding: 5rem;
  }

  @media (max-width: 1200px) {
    padding: 3.5rem;
  }

  @media (max-width: 1024px) {
    border-radius: 28px;
    padding: 3rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    border-radius: 24px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 3rem 2rem;
    border-radius: 20px;
  }

  @media (max-width: 390px) {
    padding: 2.5rem 1.5rem;
  }
`,oS=l.div`
  position: relative;
  z-index: 2;
  text-align: center;
  transform: translateZ(0);
`,aS=l.h3`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 1rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 0.875rem;
  }
`,sS=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  margin: 0 auto 2rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1.0625rem;
    max-width: 550px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    max-width: 480px;
  }

  @media (max-width: 640px) {
    max-width: 100%;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.9375rem;
    line-height: 1.75;
    margin-bottom: 1.75rem;
  }
`,lS=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
`,dS=l.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9375rem 2rem;
  background: linear-gradient(135deg, #833AB4, #FD1D1D, #F77737);
  color: #ffffff;
  border: none;
  border-radius: 100px;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(131, 58, 180, 0.4);
  transform: translateZ(0);
  backface-visibility: hidden;

  svg {
    font-size: 1.125rem;
  }

  &:hover {
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 8px 30px rgba(131, 58, 180, 0.5);
  }

  @media (min-width: 1920px) {
    padding: 1rem 2.25rem;
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    padding: 0.875rem 1.75rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0.8125rem 1.5rem;
    font-size: 0.875rem;
    width: 100%;
    max-width: 280px;
    justify-content: center;
    
    svg {
      font-size: 1.0625rem;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
    }
    
    &:active {
      transform: scale(0.98) translateZ(0);
    }
  }
`,cS=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: transparent;
  color: #cec5ad;
  border: 2px solid #cec5ad;
  border-radius: 100px;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  transform: translateZ(0);
  backface-visibility: hidden;

  svg {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #cec5ad;
    color: #22371b;

    svg {
      transform: translateX(4px);
    }
  }

  @media (min-width: 1920px) {
    padding: 1.0625rem 2.5rem;
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    padding: 0.9375rem 2rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0.875rem 1.75rem;
    font-size: 0.875rem;
    width: 100%;
    max-width: 280px;
    justify-content: center;
    
    svg {
      font-size: 0.9375rem;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
      
      svg {
        transform: translateX(0);
      }
    }
    
    &:active {
      transform: scale(0.98) translateZ(0);
      background: #cec5ad;
      color: #22371b;
    }
  }
`,mS=l.div`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%) translateZ(0);
  width: 300px;
  height: 300px;
  opacity: 0.3;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
    animation: spin 30s linear infinite;
  }

  @keyframes spin {
    from { transform: translateY(-50%) rotate(0deg) translateZ(0); }
    to { transform: translateY(-50%) rotate(360deg) translateZ(0); }
  }

  @media (min-width: 1920px) {
    width: 350px;
    height: 350px;
    right: -60px;
  }

  @media (max-width: 1200px) {
    width: 260px;
    height: 260px;
  }

  @media (max-width: 1024px) {
    width: 220px;
    height: 220px;
    right: -40px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation: none;
    }
  }
`,pS=()=>r.jsxs(hS,{children:[r.jsx(W7,{mediaType:"video",mediaSrc:"/yoga-gallery/d3b4c390-e5a0-42ce-9f9d-ff5a0bcc7ab4 (1).mp4",posterSrc:"/yoga-gallery/pose5.jpg",bgImageSrc:"/yoga-gallery/pose3.jpg",bgObjectPosition:"center 40%",title:"Find Your Inner Peace",scrollToExpand:"Scroll to begin your journey",textBlend:!0}),r.jsx(i8,{}),r.jsx(g8,{}),r.jsx(W8,{}),r.jsx(e$,{}),r.jsx(h$,{}),r.jsx(P$,{}),r.jsx(o9,{}),r.jsx(P9,{})]}),hS=l.div`
  /* No spacing - hero sits flush below navbar */
`,Mt=[{id:1,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.06 PM.jpeg",title:"Warrior Flow",subtitle:"Strength & Balance",description:"Channeling inner strength through focused alignment"},{id:2,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.07 PM (1).jpeg",title:"Graceful Extension",subtitle:"Balance Pose",description:"Finding equilibrium between effort and ease"},{id:3,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.07 PM (2).jpeg",title:"Core Strength",subtitle:"Power Center",description:"Building stability from the inside out"},{id:4,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.07 PM.jpeg",title:"Mindful Movement",subtitle:"Flow State",description:"Where breath meets intention"},{id:5,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.08 PM (1).jpeg",title:"Dynamic Alignment",subtitle:"Precise Practice",description:"Every detail matters in the journey"},{id:6,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.08 PM.jpeg",title:"Heart Opening",subtitle:"Backbend Practice",description:"Releasing tension, embracing vulnerability"},{id:7,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.09 PM (1).jpeg",title:"Grounded Presence",subtitle:"Foundation Work",description:"Strong roots for powerful growth"},{id:8,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.09 PM.jpeg",title:"Fluid Motion",subtitle:"Vinyasa Flow",description:"Moving meditation in continuous rhythm"},{id:9,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.10 PM (1).jpeg",title:"Inner Focus",subtitle:"Concentration",description:"The mind leads, the body follows"},{id:10,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.10 PM.jpeg",title:"Serene Strength",subtitle:"Calm Power",description:"Finding peace within the practice"},{id:11,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.11 PM (1).jpeg",title:"Deep Stretch",subtitle:"Flexibility Training",description:"Opening pathways to greater freedom"},{id:12,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.11 PM.jpeg",title:"Balance Mastery",subtitle:"Equilibrium",description:"Standing tall in stillness"},{id:13,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.12 PM (1).jpeg",title:"Peak Pose",subtitle:"Advanced Practice",description:"Reaching new heights with dedication"},{id:14,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.12 PM.jpeg",title:"Breath & Body",subtitle:"Pranayama Flow",description:"Uniting movement with conscious breathing"},{id:15,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.13 PM.jpeg",title:"Journey Within",subtitle:"Meditative Practice",description:"Where discipline meets grace"}],uS=()=>{const[e,t]=k.useState(null),[i,n]=k.useState(0),[o,a]=k.useState(!1),s=k.useRef(null),c=O(s,{once:!0,amount:.2}),m=o?Mt:Mt.slice(0,3),p=(w,b)=>{t(w),n(b),document.body.style.overflow="hidden"},u=()=>{t(null),document.body.style.overflow="unset"},h=w=>{const b=w==="next"?(i+1)%Mt.length:(i-1+Mt.length)%Mt.length;n(b),t(Mt[b])},f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},g={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:[.25,.46,.45,.94]}}};return r.jsxs(r.Fragment,{children:[r.jsxs(fS,{ref:s,children:[r.jsx(gS,{}),r.jsx(xS,{children:r.jsxs(yS,{as:j.div,variants:f,initial:"hidden",animate:c?"visible":"hidden",children:[r.jsx(j.div,{variants:g,children:r.jsxs(wS,{children:[r.jsxs(vS,{children:[r.jsx(xu,{})," Practice Gallery"]}),r.jsx(bS,{children:"Yoga in Motion"}),r.jsx(kS,{children:"A glimpse into the daily practice — where discipline meets grace, and every pose tells a story of dedication."})]})}),r.jsx(jS,{children:m.map((w,b)=>r.jsx(Oo,{as:j.div,variants:g,className:b===0?"featured":b===2?"tall":"",whileHover:{y:-8},onClick:()=>p(w,Mt.findIndex(C=>C.id===w.id)),children:r.jsxs($S,{children:[r.jsx(SS,{src:w.src,alt:w.title,loading:"lazy",onError:C=>{C.target.style.display="none",C.target.nextSibling.style.display="flex"}}),r.jsxs(CS,{children:[r.jsx(xu,{}),r.jsxs("span",{children:["Add ",w.title]})]}),r.jsxs(zS,{children:[r.jsxs(TS,{children:[r.jsx(PS,{children:w.title}),r.jsx(MS,{children:w.subtitle})]}),r.jsx(AS,{children:r.jsx(mt,{})})]})]})},w.id))}),!o&&Mt.length>3&&r.jsx(qu,{as:j.div,variants:g,children:r.jsxs(Xu,{onClick:()=>a(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:["View More (",Mt.length-3," more poses)"]})}),o&&r.jsx(qu,{as:j.div,variants:g,children:r.jsx(Xu,{onClick:()=>a(!1),whileHover:{scale:1.05},whileTap:{scale:.95},children:"View Less"})})]})}),r.jsx(Gu,{className:"orb1"}),r.jsx(Gu,{className:"orb2"})]}),r.jsx(Bt,{children:e&&r.jsx(LS,{as:j.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:u,children:r.jsxs(ES,{as:j.div,initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{type:"spring",damping:25,stiffness:300},onClick:w=>w.stopPropagation(),children:[r.jsx(IS,{src:e.src,alt:e.title}),r.jsxs(RS,{children:[r.jsx(BS,{children:e.title}),r.jsx(FS,{children:e.subtitle}),r.jsx(WS,{children:e.description})]}),r.jsx(DS,{onClick:u,children:r.jsx(cl,{})}),r.jsx(Ku,{className:"prev",onClick:()=>h("prev"),children:r.jsx(A2,{})}),r.jsx(Ku,{className:"next",onClick:()=>h("next"),children:r.jsx(L2,{})}),r.jsxs(VS,{children:[i+1," / ",Mt.length]})]})})})]})},fS=l.section`
  position: relative;
  padding: 7rem 0 8rem;
  background: linear-gradient(180deg, #ffffff 0%, #f8faf8 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0 5rem;
  }
`,gS=l.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 20% 80%, rgba(142, 207, 179, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(90, 138, 98, 0.08) 0%, transparent 50%);
  z-index: 0;
`,xS=l.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,yS=l.div`
  position: relative;
`,wS=l.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,vS=l.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;

  svg {
    font-size: 1rem;
  }
`,bS=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.15;
  margin: 0 0 1.25rem;
`,kS=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,jS=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Oo=l.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 3/4;
  background: #f0f4f1;

  &.featured {
    grid-column: span 1;
    grid-row: span 1;
    
    @media (min-width: 900px) {
      aspect-ratio: 3/4;
    }
  }

  &.tall {
    @media (min-width: 600px) {
      grid-row: span 1;
    }
  }
`,$S=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,SS=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${Oo}:hover & {
    transform: scale(1.08);
  }
`,CS=l.div`
  display: none;
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #e8f0e9 0%, #d4e5d6 100%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #5a8a62;
  
  svg {
    font-size: 3rem;
    opacity: 0.5;
  }
  
  span {
    font-family: ${d.fonts.body};
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0.7;
  }
`,zS=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 40%,
    rgba(34, 55, 27, 0.8) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;

  ${Oo}:hover & {
    opacity: 1;
  }
`,TS=l.div`
  transform: translateY(20px);
  transition: transform 0.4s ease;

  ${Oo}:hover & {
    transform: translateY(0);
  }
`,PS=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.25rem;
`,MS=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
`,AS=l.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transform: scale(0);
  transition: transform 0.3s ease;

  ${Oo}:hover & {
    transform: scale(1);
  }

  svg {
    font-size: 1.125rem;
  }
`,Gu=l.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;

  &.orb1 {
    width: 400px;
    height: 400px;
    background: rgba(142, 207, 179, 0.15);
    top: -100px;
    right: -100px;
  }

  &.orb2 {
    width: 300px;
    height: 300px;
    background: rgba(90, 138, 98, 0.1);
    bottom: -50px;
    left: -50px;
  }
`,LS=l.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,ES=l.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,IS=l.img`
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
`,RS=l.div`
  text-align: center;
  margin-top: 1.5rem;
`,BS=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.25rem;
`,FS=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 0.5rem;
`,WS=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`,DS=l.button`
  position: absolute;
  top: -60px;
  right: 0;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  svg {
    font-size: 1.5rem;
  }
`,Ku=l.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.prev {
    left: -80px;

    @media (max-width: 768px) {
      left: -10px;
    }
  }

  &.next {
    right: -80px;

    @media (max-width: 768px) {
      right: -10px;
    }
  }

  svg {
    font-size: 1.5rem;
  }
`,VS=l.span`
  position: absolute;
  bottom: -40px;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.1em;
`,qu=l.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`,Xu=l(j.button)`
  padding: 1rem 2.5rem;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #5a8a62 0%, #8ecfb3 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(90, 138, 98, 0.3);
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    box-shadow: 0 6px 30px rgba(90, 138, 98, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 0.9375rem;
  }
`,Pr={hero:"/more images/about hero 4.png",heroMobile:"/new images/mobile about hero.png",founder:"/597937247_619016434604924_306615671335802667_n.jpg (2).jpeg",meditation:"/new images/begin your transformation.png",studio:"/more images/sacred healing space 2.png"},NS=[{year:"2009",title:"The Beginning",description:"Started the journey into meditation and self-discovery practices."},{year:"2012",title:"Yoga Mastery",description:"Completed advanced yoga teacher training and began instructing."},{year:"2015",title:"NLP Certification",description:"Became a certified NLP practitioner to enhance coaching methods."},{year:"2018",title:"Holistic Expansion",description:"Integrated gut health and nutrition into wellness programs."},{year:"2021",title:"Global Reach",description:"Launched online programs reaching students worldwide."},{year:"2024",title:"Community Impact",description:"Transformed 5000+ lives through holistic wellness coaching."}],OS=[{icon:r.jsx(P0,{}),title:"Certified Yoga Instructor",org:"Yoga Alliance International"},{icon:r.jsx(ti,{}),title:"NLP Master Practitioner",org:"Society of NLP"},{icon:r.jsx(mt,{}),title:"Meditation Guide",org:"Brahma Kumaris World Spiritual University"},{icon:r.jsx(dl,{}),title:"Gut Health Expert",org:"Institute of Integrative Nutrition"},{icon:r.jsx(M0,{}),title:"Wellness Counselor",org:"NIMHANS Certified"},{icon:r.jsx($o,{}),title:"Breathwork Facilitator",org:"Art of Living Foundation"}],fa=[{id:1,question:"Wellness Q&A - Part 1",videoUrl:"/BK Q&A 21/Q&A 1.mp4",thumbnail:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=450&fit=crop&q=80"},{id:2,question:"Wellness Q&A - Part 2",videoUrl:"/BK Q&A 21/Q&A 2.mp4",thumbnail:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop&q=80"},{id:3,question:"Wellness Q&A - Part 3",videoUrl:"/BK Q&A 21/Q&A 3.mp4",thumbnail:"https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=450&fit=crop&q=80"},{id:4,question:"Wellness Q&A - Part 4",videoUrl:"/BK Q&A 21/Q&A 4.mp4",thumbnail:"https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?w=800&h=450&fit=crop&q=80"},{id:5,question:"Wellness Q&A - Part 5",videoUrl:"/BK Q&A 21/Q&A 5.mp4",thumbnail:"https://images.unsplash.com/photo-1506126279646-a697353d3166?w=800&h=450&fit=crop&q=80"},{id:6,question:"Wellness Q&A - Part 6",videoUrl:"/BK Q&A 21/Q&A 6.mp4",thumbnail:"https://images.unsplash.com/photo-1529693662653-9d480530a697?w=800&h=450&fit=crop&q=80"},{id:7,question:"Wellness Q&A - Part 7",videoUrl:"/BK Q&A 21/Q&A 7.mp4",thumbnail:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop&q=80"},{id:8,question:"Wellness Q&A - Part 8",videoUrl:"/BK Q&A 22/Q&A 8.mp4",thumbnail:"https://images.unsplash.com/photo-1559595500-e15296bdbb48?w=800&h=450&fit=crop&q=80"},{id:9,question:"Wellness Q&A - Part 9",videoUrl:"/BK Q&A 22/Q&A 9.mp4",thumbnail:"https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&h=450&fit=crop&q=80"},{id:10,question:"Wellness Q&A - Part 10",videoUrl:"/BK Q&A 22/Q&A 10.mp4",thumbnail:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop&q=80"},{id:11,question:"Wellness Q&A - Part 11",videoUrl:"/BK Q&A 22/Q&A 11.mp4",thumbnail:"https://images.unsplash.com/photo-1540206395-68808572332f?w=800&h=450&fit=crop&q=80"},{id:12,question:"Wellness Q&A - Part 12",videoUrl:"/BK Q&A 22/Q&A 12.mp4",thumbnail:"https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=450&fit=crop&q=80"},{id:14,question:"Wellness Q&A - Part 14",videoUrl:"/BK Q&A 22/Q&A 14.mp4",thumbnail:"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&h=450&fit=crop&q=80"},{id:16,question:"Wellness Q&A - Part 16",videoUrl:"/BK Q&A 22/Q&A 16.mp4",thumbnail:"https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=450&fit=crop&q=80"},{id:17,question:"Wellness Q&A - Part 17",videoUrl:"/BK Q&A 22/Q&A 17.mp4",thumbnail:"https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&h=450&fit=crop&q=80"},{id:18,question:"Wellness Q&A - Part 18",videoUrl:"/BK Q&A 22/Q&A 18.mp4",thumbnail:"https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=800&h=450&fit=crop&q=80"},{id:20,question:"Wellness Q&A - Part 20",videoUrl:"/BK Q&A 22/Q&A 20.mp4",thumbnail:"https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&h=450&fit=crop&q=80"},{id:21,question:"Wellness Q&A - Part 21",videoUrl:"/BK Q&A 22/Q&A 21.mp4",thumbnail:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=450&fit=crop&q=80"}],_S=[{icon:r.jsx(mt,{}),title:"Root-Cause Healing",description:"We address underlying causes, not just symptoms, for lasting transformation.",color:"#5a8a62"},{icon:r.jsx(Vo,{}),title:"Mind-First Approach",description:"True healing begins with the mind. When calm, the body naturally transforms.",color:"#cec5ad"},{icon:r.jsx(rr,{}),title:"Holistic Integration",description:"Combining ancient yogic wisdom with modern science for complete well-being.",color:"#8ecfb3"},{icon:r.jsx($o,{}),title:"Compassionate Care",description:"Every journey is unique. We provide personalized guidance with empathy.",color:"#22371b"}],HS=[{number:"15+",label:"Years Experience",icon:r.jsx(Ms,{})},{number:"5000+",label:"Lives Transformed",icon:r.jsx(rr,{})},{number:"12+",label:"Years in Yoga",icon:r.jsx(Vo,{})},{number:"98%",label:"Satisfaction",icon:r.jsx(mt,{})}],US=()=>{const[e,t]=k.useState(null),[i,n]=k.useState(!1),o=k.useRef(null),a=k.useRef(null),s=k.useRef(null),c=k.useRef(null),m=k.useRef(null),p=k.useRef(null),u=k.useRef(null),h=O(o,{once:!0,amount:.3}),f=O(a,{once:!0,amount:.2}),g=O(s,{once:!0,amount:.2}),w=O(c,{once:!0,amount:.1}),b=O(m,{once:!0,amount:.2}),C=O(p,{once:!0,amount:.2});O(u,{once:!0,amount:.3});const v=i?fa:fa.slice(0,3),{scrollYProgress:x}=T0({target:o,offset:["start start","end start"]}),y=nr(x,[0,1],[0,200]),$=nr(x,[0,.5],[1,0]),z={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},T={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.1,.25,1]}}};return r.jsxs(ZS,{children:[r.jsxs(YS,{ref:o,children:[r.jsxs(QS,{style:{y},children:[r.jsx(Ju,{src:Pr.hero,alt:"About Hero",className:"desktop-hero"}),r.jsx(Ju,{src:Pr.heroMobile,alt:"About Hero Mobile",className:"mobile-hero"})]}),r.jsx(yd,{className:"orb1"}),r.jsx(yd,{className:"orb2"}),r.jsx(yd,{className:"orb3"}),r.jsx(GS,{className:"right",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(206, 197, 173, 0.4)",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(206, 197, 173, 0.4)",strokeWidth:"1"}),r.jsx("path",{d:"M60 60L30 100",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L35 160",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L40 220",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 60L90 100",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L85 160",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L80 220",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"0.8"})]})}),r.jsxs(KS,{as:j.div,style:{opacity:$},variants:z,initial:"hidden",animate:h?"visible":"hidden",children:[r.jsx(j.div,{variants:T,children:r.jsxs(qS,{children:[r.jsx($o,{})," Discover Our Story"]})}),r.jsx(j.div,{variants:T,children:r.jsxs(XS,{children:["Where Ancient Wisdom",r.jsx("br",{}),r.jsx(JS,{children:"Meets Modern Healing"})]})}),r.jsx(j.div,{variants:T,children:r.jsx(eC,{children:"A journey of 15+ years in holistic wellness, dedicated to transforming lives through the profound connection of mind, body, and soul."})}),r.jsx(j.div,{variants:T,children:r.jsx(tC,{children:HS.map((S,P)=>r.jsxs(ae.Fragment,{children:[P>0&&r.jsx(oC,{}),r.jsxs(iC,{children:[r.jsx(nC,{children:S.number}),r.jsx(rC,{children:S.label})]})]},P))})})]}),r.jsx(aC,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",fill:"#ffffff"})})})]}),r.jsx(sC,{ref:a,children:r.jsx(bn,{children:r.jsxs(lC,{as:j.div,variants:z,initial:"hidden",animate:f?"visible":"hidden",children:[r.jsx(dC,{as:j.div,variants:T,children:r.jsxs(cC,{children:[r.jsx(mC,{}),r.jsx(a5,{children:r.jsx(pC,{src:Pr.founder,alt:"BK Shikha - Founder & Lead Mentor",loading:"lazy"})})]})}),r.jsxs(hC,{as:j.div,variants:T,children:[r.jsx(uC,{children:"Meet Your Mentor"}),r.jsx(fC,{children:"BK Shikha"}),r.jsx(gC,{children:"Founder & Lead Mentor"}),r.jsx(xC,{children:'"Guiding souls toward inner peace through the ancient wisdom of Raja Yoga and mindful living."'}),r.jsxs(yC,{children:[r.jsxs(wd,{children:[r.jsx(vd,{children:r.jsx(P0,{})}),r.jsx(bd,{children:"Certified Raja Yoga Teacher"})]}),r.jsxs(wd,{children:[r.jsx(vd,{children:r.jsx(ti,{})}),r.jsx(bd,{children:"20+ Years Experience"})]}),r.jsxs(wd,{children:[r.jsx(vd,{children:r.jsx(rr,{})}),r.jsx(bd,{children:"10,000+ Lives Transformed"})]})]}),r.jsxs(wC,{children:[r.jsxs(af,{to:"#journey",children:["Discover My Journey",r.jsx(me,{})]}),r.jsx(sf,{to:"/contact",children:"Book Consultation"})]})]})]})})}),r.jsxs(vC,{ref:s,children:[r.jsx(bn,{children:r.jsxs(bC,{as:j.div,variants:z,initial:"hidden",animate:g?"visible":"hidden",children:[r.jsx(j.div,{variants:T,children:r.jsxs(kC,{children:[r.jsx(ga,{className:"center",children:"Wellness Philosophy"}),r.jsx(xa,{className:"center",children:"Our Core Values"}),r.jsx(jC,{children:"These foundational principles guide every aspect of our approach to holistic wellness."})]})}),r.jsx($C,{children:_S.map((S,P)=>r.jsxs(SC,{as:j.div,variants:T,whileHover:{y:-10,boxShadow:"0 25px 60px rgba(34, 55, 27, 0.15)"},transition:{duration:.3},children:[r.jsx(CC,{style:{background:S.color},children:S.icon}),r.jsx(zC,{children:S.title}),r.jsx(TC,{children:S.description})]},P))})]})}),r.jsx(PC,{children:r.jsxs("svg",{viewBox:"0 0 200 400",fill:"none",children:[r.jsx("path",{d:"M100,20 Q150,100 140,200 Q130,300 100,380",stroke:"#e8f0e9",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M100,80 Q60,120 40,100",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,140 Q55,180 30,150",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,200 Q50,240 25,200",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"})]})})]}),r.jsx(uS,{}),r.jsxs(MC,{ref:c,children:[r.jsx(NC,{children:r.jsxs("svg",{viewBox:"0 0 200 600",fill:"none",children:[r.jsxs("g",{opacity:"0.3",children:[r.jsx("path",{d:"M100,80 Q85,60 85,45 Q85,30 100,30 Q115,30 115,45 Q115,60 100,80",fill:"rgba(206, 197, 173, 0.4)"}),r.jsx("path",{d:"M100,80 Q75,70 70,60 Q65,50 75,45 Q85,40 100,50",fill:"rgba(206, 197, 173, 0.3)"}),r.jsx("path",{d:"M100,80 Q125,70 130,60 Q135,50 125,45 Q115,40 100,50",fill:"rgba(206, 197, 173, 0.3)"}),r.jsx("path",{d:"M100,80 Q90,85 85,95 Q80,105 90,110 Q100,115 100,100",fill:"rgba(206, 197, 173, 0.35)"}),r.jsx("path",{d:"M100,80 Q110,85 115,95 Q120,105 110,110 Q100,115 100,100",fill:"rgba(206, 197, 173, 0.35)"}),r.jsx("circle",{cx:"100",cy:"80",r:"8",fill:"rgba(142, 207, 179, 0.5)"})]}),r.jsxs("g",{transform:"translate(30, 250)",opacity:"0.25",children:[r.jsx("path",{d:"M30,20 Q35,15 40,20 Q45,25 40,30 Q35,35 30,30 Q25,25 30,20",stroke:"rgba(206, 197, 173, 0.6)",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M40,25 Q50,20 55,30",stroke:"rgba(206, 197, 173, 0.6)",strokeWidth:"2",fill:"none"}),r.jsx("circle",{cx:"58",cy:"28",r:"3",fill:"rgba(206, 197, 173, 0.6)"}),r.jsx("path",{d:"M20,35 Q30,40 40,35",stroke:"rgba(206, 197, 173, 0.6)",strokeWidth:"2",fill:"none"})]}),r.jsxs("g",{transform:"translate(0, 400)",opacity:"0.3",children:[r.jsx("path",{d:"M100,80 Q85,60 85,45 Q85,30 100,30 Q115,30 115,45 Q115,60 100,80",fill:"rgba(142, 207, 179, 0.4)"}),r.jsx("path",{d:"M100,80 Q75,70 70,60 Q65,50 75,45 Q85,40 100,50",fill:"rgba(142, 207, 179, 0.3)"}),r.jsx("path",{d:"M100,80 Q125,70 130,60 Q135,50 125,45 Q115,40 100,50",fill:"rgba(142, 207, 179, 0.3)"}),r.jsx("circle",{cx:"100",cy:"80",r:"8",fill:"rgba(206, 197, 173, 0.5)"})]})]})}),r.jsx(OC,{children:r.jsxs("svg",{viewBox:"0 0 200 600",fill:"none",children:[r.jsxs("g",{transform:"translate(80, 100)",opacity:"0.2",children:[r.jsx("circle",{cx:"30",cy:"15",r:"12",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M30,27 L30,50",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"2"}),r.jsx("path",{d:"M30,35 Q20,40 15,35",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M30,35 Q40,40 45,35",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M30,50 Q20,60 15,65",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M30,50 Q40,60 45,65",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"2",fill:"none"})]}),r.jsxs("g",{transform:"translate(70, 320)",opacity:"0.25",children:[r.jsx("circle",{cx:"40",cy:"40",r:"25",stroke:"rgba(142, 207, 179, 0.6)",strokeWidth:"2.5",fill:"none"}),r.jsx("path",{d:"M40,40 L40,65",stroke:"rgba(142, 207, 179, 0.6)",strokeWidth:"2.5"}),r.jsx("path",{d:"M40,40 L20,55",stroke:"rgba(142, 207, 179, 0.6)",strokeWidth:"2.5"}),r.jsx("path",{d:"M40,40 L60,55",stroke:"rgba(142, 207, 179, 0.6)",strokeWidth:"2.5"})]}),r.jsx("g",{transform:"translate(60, 480)",opacity:"0.3",children:r.jsx("path",{d:"M20,30 Q30,10 50,10 Q70,10 80,30 Q85,50 70,65 Q50,80 30,65 Q10,50 20,30",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"3",fill:"none",strokeDasharray:"5,3"})})]})}),r.jsx(_C,{children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",children:[r.jsx("circle",{cx:"100",cy:"100",r:"80",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"1",fill:"none"}),r.jsx("circle",{cx:"100",cy:"100",r:"60",stroke:"rgba(142, 207, 179, 0.2)",strokeWidth:"1",fill:"none"}),r.jsx("circle",{cx:"100",cy:"100",r:"40",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"1",fill:"none"}),r.jsx("circle",{cx:"100",cy:"100",r:"20",stroke:"rgba(142, 207, 179, 0.2)",strokeWidth:"1",fill:"none"}),[0,45,90,135,180,225,270,315].map(S=>r.jsx("line",{x1:"100",y1:"100",x2:100+80*Math.cos(S*Math.PI/180),y2:100+80*Math.sin(S*Math.PI/180),stroke:"rgba(206, 197, 173, 0.15)",strokeWidth:"0.5"},S))]})}),r.jsx(bn,{children:r.jsxs(AC,{as:j.div,variants:z,initial:"hidden",animate:w?"visible":"hidden",children:[r.jsx(j.div,{variants:T,children:r.jsxs(LC,{children:[r.jsx(ga,{className:"center light",children:"The Journey"}),r.jsx(xa,{className:"center light",children:"Milestones of Transformation"})]})}),r.jsxs(EC,{children:[NS.map((S,P)=>r.jsxs(RC,{as:j.div,variants:T,className:P%2===0?"left":"right",children:[r.jsx(FC,{children:S.year}),r.jsxs(WC,{as:j.div,whileHover:{scale:1.02},children:[r.jsx(DC,{children:S.title}),r.jsx(VC,{children:S.description})]}),r.jsx(BC,{})]},P)),r.jsx(IC,{})]})]})}),r.jsx(ef,{className:"orb1"}),r.jsx(ef,{className:"orb2"})]}),r.jsx(HC,{ref:m,children:r.jsx(bn,{children:r.jsxs(UC,{as:j.div,variants:z,initial:"hidden",animate:b?"visible":"hidden",children:[r.jsx(j.div,{variants:T,children:r.jsxs(ZC,{children:[r.jsx(ga,{className:"center",children:"Certifications"}),r.jsx(xa,{className:"center",children:"Credentials & Expertise"}),r.jsx(YC,{children:"Backed by internationally recognized certifications and years of dedicated practice."})]})}),r.jsx(QC,{children:OS.map((S,P)=>r.jsxs(GC,{as:j.div,variants:T,whileHover:{y:-5},children:[r.jsx(KC,{children:S.icon}),r.jsx(qC,{children:S.title}),r.jsx(XC,{children:S.org})]},P))})]})})}),r.jsxs(JC,{ref:p,children:[r.jsx(bn,{children:r.jsxs(ez,{as:j.div,variants:z,initial:"hidden",animate:C?"visible":"hidden",children:[r.jsx(j.div,{variants:T,children:r.jsxs(tz,{children:[r.jsx(ga,{className:"center",children:"Common Questions"}),r.jsx(xa,{className:"center",children:"Wellness Q&A Videos"}),r.jsx(iz,{children:"Get answers to the most frequently asked questions about holistic wellness, yoga practice, and the healing journey."})]})}),r.jsx(nz,{children:v.map((S,P)=>r.jsxs(s5,{as:j.div,variants:T,whileHover:{y:-5},children:[r.jsx(rz,{children:e===S.id?r.jsx(az,{controls:!0,autoPlay:!0,src:S.videoUrl,children:"Your browser does not support the video tag."}):r.jsxs(r.Fragment,{children:[r.jsx(oz,{src:S.thumbnail,alt:S.question}),r.jsx(sz,{children:r.jsx(lz,{onClick:()=>t(S.id),whileHover:{scale:1.1},whileTap:{scale:.95},children:r.jsx(Ls,{})})})]})}),r.jsx(dz,{children:r.jsx(cz,{children:S.question})})]},S.id))}),!i&&fa.length>3&&r.jsx(nf,{as:j.div,variants:T,children:r.jsxs(rf,{onClick:()=>n(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:["View More (",fa.length-3," more videos)"]})}),i&&r.jsx(nf,{as:j.div,variants:T,children:r.jsx(rf,{onClick:()=>n(!1),whileHover:{scale:1.05},whileTap:{scale:.95},children:"View Less"})})]})}),r.jsx(tf,{className:"left"}),r.jsx(tf,{className:"right"})]}),r.jsx(mz,{children:r.jsxs(pz,{children:[r.jsx(hz,{src:Pr.studio,alt:"Wellness Studio",loading:"lazy"}),r.jsxs(uz,{children:[r.jsxs(fz,{children:[r.jsx(Ls,{})," Virtual & In-Person Sessions"]}),r.jsx(gz,{children:"A Sacred Space for Healing"}),r.jsx(xz,{children:"Whether you join us in our serene studio or connect virtually, every session is designed to create a sanctuary for your transformation."})]})]})}),r.jsxs(yz,{children:[r.jsxs(wz,{children:[r.jsx(vz,{children:'"'}),r.jsx(bz,{children:"The greatest wealth is health. When we nurture our mind, the body follows, and the soul finds its true purpose."}),r.jsx(kz,{children:"— BK Shikha"})]}),r.jsx(of,{className:"left"}),r.jsx(of,{className:"right"})]}),r.jsx(jz,{children:r.jsx(bn,{children:r.jsx($z,{as:j.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:r.jsxs(Sz,{children:[r.jsxs(Cz,{children:[r.jsx(zz,{children:"Begin Your Transformation"}),r.jsx(Tz,{children:"Ready to Experience True Wellness?"}),r.jsx(Pz,{children:"Whether you seek stress relief, emotional balance, gut health improvement, or sustainable weight management, BK Shikha is here to guide you with compassion and expertise."}),r.jsxs(Mz,{children:[r.jsxs(ya,{children:[r.jsx(qi,{})," Personalized Approach"]}),r.jsxs(ya,{children:[r.jsx(qi,{})," 15+ Years Experience"]}),r.jsxs(ya,{children:[r.jsx(qi,{})," Virtual & In-Person"]}),r.jsxs(ya,{children:[r.jsx(qi,{})," Holistic Healing"]})]}),r.jsxs(Az,{children:[r.jsxs(af,{to:"/contact",children:["Book Free Consultation",r.jsx(me,{})]}),r.jsx(sf,{to:"/services",children:"Explore Programs"})]})]}),r.jsx(Lz,{children:r.jsx(Ez,{src:Pr.meditation,alt:"Start your wellness journey"})})]})})})})]})},ZS=l.div`
  position: relative;
  overflow-x: hidden;
`,bn=l.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
  
  /* Large screens */
  @media (min-width: 1536px) {
    max-width: 1500px;
  }
  
  /* 4K screens */
  @media (min-width: 2560px) {
    max-width: 1800px;
  }
`,YS=l.section`
  min-height: 100vh;
  min-height: 100dvh;
  background: linear-gradient(135deg, #22371b 0%, #21371a 50%, #1a2d15 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8rem 0 10rem;
  overflow: hidden;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    min-height: auto;
    padding: 5rem 0 6rem;
  }

  @media (max-width: 768px) {
    min-height: 90vh;
    padding: 6rem 0 8rem;
  }
  
  /* Landscape mobile */
  @media (max-width: 896px) and (orientation: landscape) {
    min-height: auto;
    padding: 4rem 0 5rem;
  }
  
  /* Large screens */
  @media (min-width: 1536px) {
    padding: 10rem 0 12rem;
  }
`,QS=l(j.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
`;l.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.35;
`;const Ju=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0.35;
  
  &.mobile-hero {
    display: none;
  }
  
  @media (max-width: 1025px) {
    &.desktop-hero {
      display: none;
    }
    
    &.mobile-hero {
      display: block;
      object-fit: cover;
      object-position: center center;
    }
  }
  
  @media (orientation: landscape) and (max-height: 600px) {
    object-position: center center;
  }
`;l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(34, 55, 27, 0.85) 0%,
    rgba(33, 55, 26, 0.7) 50%,
    rgba(34, 55, 27, 0.85) 100%
  );
`;const yd=l.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
  animation: float 10s ease-in-out infinite;

  &.orb1 {
    width: 500px;
    height: 500px;
    background: #cec5ad;
    top: -150px;
    right: -150px;
    animation-delay: 0s;
  }

  &.orb2 {
    width: 400px;
    height: 400px;
    background: #5a8a62;
    bottom: -100px;
    left: -100px;
    animation-delay: 3s;
  }

  &.orb3 {
    width: 250px;
    height: 250px;
    background: #8ecfb3;
    top: 40%;
    left: 20%;
    animation-delay: 6s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-40px) scale(1.05); }
  }
`,GS=l.div`
  position: absolute;
  width: 100px;
  height: 280px;
  opacity: 0.8;
  pointer-events: none;
  z-index: 1;

  &.left {
    left: 3%;
    top: 50%;
    transform: translateY(-50%) rotate(-10deg);
  }

  &.right {
    right: 3%;
    top: 50%;
    transform: translateY(-50%) rotate(10deg) scaleX(-1);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`,KS=l.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  padding: 0 2rem;
  
  @media (max-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
  
  @media (max-width: 360px) {
    padding: 0 1rem;
  }
`,qS=l.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid rgba(206, 197, 173, 0.3);
  border-radius: 100px;
  
  @media (max-width: 640px) {
    font-size: 0.75rem;
    padding: 0.5rem 1.25rem;
    gap: 0.375rem;
    letter-spacing: 0.15em;
  }
  
  @media (max-width: 480px) {
    font-size: 0.6875rem;
    padding: 0.4375rem 1rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.625rem;
    padding: 0.375rem 0.875rem;
  }
`,XS=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 1.5rem;
  
  @media (max-width: 640px) {
    font-size: clamp(2rem, 5vw, 2.5rem);
    line-height: 1.2;
    margin: 0 0 1.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 5vw, 2rem);
    margin: 0 0 1rem;
  }
  
  @media (max-width: 360px) {
    font-size: clamp(1.5rem, 5vw, 1.75rem);
  }
`,JS=l.span`
  color: #cec5ad;
  font-style: italic;
  font-weight: 400;
`,eC=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 640px) {
    font-size: 0.9375rem;
    line-height: 1.75;
    margin-bottom: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.8125rem;
  }
`,tC=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.25rem;
  }
  
  @media (max-width: 360px) {
    gap: 1rem;
  }
`,iC=l.div`
  text-align: center;
`,nC=l.div`
  font-family: ${d.fonts.heading};
  font-size: 2.25rem;
  font-weight: 700;
  color: #cec5ad;
  line-height: 1;
  margin-bottom: 0.25rem;

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`,rC=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.6875rem;
    letter-spacing: 0.08em;
  }
`,oC=l.div`
  width: 1px;
  height: 50px;
  background: rgba(206, 197, 173, 0.3);

  @media (max-width: 600px) {
    height: 40px;
  }
  
  @media (max-width: 480px) {
    height: 35px;
  }
  
  @media (max-width: 360px) {
    height: 30px;
  }
`,aC=l.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  pointer-events: none;
  z-index: 5;

  svg {
    width: 100%;
    height: 100%;
  }
`,sC=l.section`
  padding: 7rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    padding: 3rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
  
  /* Large screens */
  @media (min-width: 1536px) {
    padding: 9rem 0;
  }
`,lC=l.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  /* Large screens */
  @media (min-width: 1536px) {
    gap: 6rem;
  }
`,dC=l.div`
  position: relative;
`,cC=l.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 600px;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    height: 350px;
    max-width: 280px;
  }

  @media (max-width: 768px) {
    height: 450px;
    max-width: 380px;
  }
  
  /* Large screens */
  @media (min-width: 1536px) {
    height: 680px;
    max-width: 580px;
  }
`,mC=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(142, 207, 179, 0.1) 0%, rgba(90, 138, 98, 0.05) 100%);
  border-radius: 30px;
  z-index: 0;
`,a5=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(34, 55, 27, 0.2);
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 0%,
      transparent 60%,
      rgba(34, 55, 27, 0.3) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`,pC=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.5s ease;
  
  ${a5}:hover & {
    transform: scale(1.05);
  }
`;l.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 1rem;
  padding: 2rem;
  z-index: 3;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.5rem;
  }
`;l.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(34, 55, 27, 0.15);
  
  @media (max-width: 768px) {
    padding: 0.875rem 1.25rem;
  }
`;l.div`
  font-family: ${d.fonts.heading};
  font-size: 1.75rem;
  font-weight: 700;
  color: #22371b;
  line-height: 1;
  margin-bottom: 0.25rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;l.div`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: #5a8a62;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;const hC=l.div``;l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
`;const uC=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 500;
  color: #6b7c6f;
  margin-bottom: 0.5rem;
`,fC=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #22371b;
  line-height: 1.1;
  margin-bottom: 0.5rem;
`,gC=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.25rem;
  font-weight: 500;
  color: #5a8a62;
  margin-bottom: 2rem;
`,xC=l.blockquote`
  font-family: ${d.fonts.heading};
  font-size: 1.375rem;
  font-style: italic;
  font-weight: 400;
  color: #22371b;
  line-height: 1.6;
  padding: 2rem 0 2rem 2rem;
  margin: 0 0 2.5rem 0;
  border-left: 4px solid #cec5ad;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    left: -15px;
    top: 0;
    font-size: 4rem;
    color: #cec5ad;
    opacity: 0.5;
    font-family: ${d.fonts.heading};
    line-height: 1;
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    padding: 1.5rem 0 1.5rem 1.5rem;
  }
`,yC=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
`,wd=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(90, 138, 98, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(90, 138, 98, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(90, 138, 98, 0.08);
    transform: translateX(5px);
  }
`,vd=l.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #5a8a62, #8ecfb3);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1.25rem;
  flex-shrink: 0;
`,bd=l.span`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  color: #22371b;
`,wC=l.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,ga=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  font-style: italic;
  color: #c9a227;
  margin-bottom: 0.75rem;

  &.center {
    display: block;
    text-align: center;
  }

  &.light {
    color: #cec5ad;
  }
`,xa=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.2;
  margin-bottom: 1rem;

  &.center {
    text-align: center;
  }

  &.light {
    color: #ffffff;
  }
`;l.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, #f8f9f6 0%, #eef4ef 100%);
`;l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;l.div`
  background: white;
  padding: 3rem;
  border-radius: 30px;
  box-shadow: 0 15px 50px rgba(34, 55, 27, 0.08);
  text-align: center;

  &.vision {
    background: #22371b;
    
    h3, p {
      color: white;
    }
    
    p {
      color: rgba(255, 255, 255, 0.85);
    }
  }
`;l.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.75rem;

  &.mission {
    background: linear-gradient(135deg, #22371b, #5a8a62);
    color: #cec5ad;
  }

  &.vision {
    background: rgba(206, 197, 173, 0.2);
    color: #cec5ad;
  }
`;l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 1rem;
`;l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #6b7c6f;
`;const vC=l.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,bC=l.div``,kC=l.div`
  text-align: center;
  margin-bottom: 3rem;
`,jC=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 600px;
  margin: 1rem auto 0;
`,$C=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,SC=l.div`
  background: #f8f9f6;
  padding: 2.5rem 2rem;
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(90, 138, 98, 0.08);
`,CC=l.div`
  width: 65px;
  height: 65px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #ffffff;
  font-size: 1.5rem;
`,zC=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.75rem;
`,TC=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #6b7c6f;
`,PC=l.div`
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 350px;
  opacity: 0.6;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`,MC=l.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #22371b 0%, #21371a 50%, #1a2d15 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,AC=l.div``,LC=l.div`
  text-align: center;
  margin-bottom: 4rem;
`,EC=l.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`,IC=l.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, #cec5ad, #cec5ad, transparent);
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 20px;
  }
`,RC=l.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  &.left {
    flex-direction: row;
    padding-right: calc(50% + 40px);
    text-align: right;

    @media (max-width: 768px) {
      padding-right: 0;
      padding-left: 60px;
      text-align: left;
    }
  }

  &.right {
    flex-direction: row-reverse;
    padding-left: calc(50% + 40px);

    @media (max-width: 768px) {
      padding-left: 60px;
      padding-right: 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`,BC=l.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: #cec5ad;
  border: 3px solid #22371b;
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 768px) {
    left: 20px;
  }
`,FC=l.span`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  color: #cec5ad;
  min-width: 70px;

  @media (max-width: 768px) {
    position: absolute;
    left: 50px;
    top: -25px;
    font-size: 0.875rem;
  }
`,WC=l.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(206, 197, 173, 0.2);
  flex: 1;
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`,DC=l.h4`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`,VC=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
`,ef=l.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;

  &.orb1 {
    width: 400px;
    height: 400px;
    background: #cec5ad;
    top: -100px;
    left: -100px;
  }

  &.orb2 {
    width: 300px;
    height: 300px;
    background: #8ecfb3;
    bottom: -50px;
    right: -50px;
  }
`,NC=l.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 600px;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 1200px) {
    display: none;
  }
`,OC=l.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 600px;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 1200px) {
    display: none;
  }
`,_C=l.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 200px;
  height: 200px;
  opacity: 0.6;
  animation: rotate 60s linear infinite;
  pointer-events: none;
  z-index: 1;

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: 1200px) {
    width: 150px;
    height: 150px;
    top: 5%;
    right: 2%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,HC=l.section`
  padding: 6rem 0;
  background: #f8f9f6;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,UC=l.div``,ZC=l.div`
  text-align: center;
  margin-bottom: 3rem;
`,YC=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 600px;
  margin: 1rem auto 0;
`,QC=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,GC=l.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(34, 55, 27, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(90, 138, 98, 0.08);
`,KC=l.div`
  width: 55px;
  height: 55px;
  margin: 0 auto 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #22371b, #5a8a62);
  border-radius: 50%;
  color: #cec5ad;
  font-size: 1.25rem;
`,qC=l.h4`
  font-family: ${d.fonts.heading};
  font-size: 1.0625rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.5rem;
`,XC=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: #7a8a7a;
  margin: 0;
`,JC=l.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,ez=l.div`
  position: relative;
  z-index: 2;
`,tz=l.div`
  text-align: center;
  margin-bottom: 3.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,iz=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 650px;
  margin: 1rem auto 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,nz=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,s5=l.div`
  background: #f8f9f6;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(34, 55, 27, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(90, 138, 98, 0.08);

  &:hover {
    box-shadow: 0 15px 40px rgba(34, 55, 27, 0.12);
  }
`,rz=l.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: #22371b;
  overflow: hidden;
`,oz=l.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,az=l.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
`,sz=l.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(34, 55, 27, 0.4),
    rgba(34, 55, 27, 0.6)
  );
  transition: all 0.3s ease;

  ${s5}:hover & {
    background: linear-gradient(
      135deg,
      rgba(34, 55, 27, 0.3),
      rgba(34, 55, 27, 0.5)
    );
  }
`,lz=l(j.button)`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  color: #22371b;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  padding-left: 5px;

  svg {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  &:hover {
    background: #cec5ad;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`,dz=l.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`,cz=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #22371b;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,tf=l.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.1;
  pointer-events: none;

  &.left {
    width: 400px;
    height: 400px;
    background: #8ecfb3;
    top: 10%;
    left: -100px;
  }

  &.right {
    width: 350px;
    height: 350px;
    background: #cec5ad;
    bottom: 10%;
    right: -100px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,nf=l.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`,rf=l(j.button)`
  padding: 1rem 2.5rem;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #5a8a62 0%, #8ecfb3 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(90, 138, 98, 0.3);
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    box-shadow: 0 6px 30px rgba(90, 138, 98, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 0.9375rem;
  }
`,mz=l.section`
  position: relative;
`,pz=l.div`
  position: relative;
  height: 500px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }
`,hz=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 50%;
`;l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(34, 55, 27, 0.9) 0%,
    rgba(34, 55, 27, 0.7) 50%,
    rgba(34, 55, 27, 0.4) 100%
  );
`;const uz=l.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  max-width: 600px;
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,fz=l.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
`,gz=l.h3`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: #000000;
  margin-bottom: 1rem;
`,xz=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #000000;
`,yz=l.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #22371b 0%, #21371a 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
`,wz=l.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,vz=l.span`
  display: block;
  font-family: ${d.fonts.heading};
  font-size: 8rem;
  color: #cec5ad;
  opacity: 0.2;
  line-height: 0.5;
  margin-bottom: 1rem;
`,bz=l.p`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 400;
  font-style: italic;
  color: white;
  line-height: 1.6;
  margin: 0 0 1.5rem;
`,kz=l.span`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  color: #cec5ad;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,of=l.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;

  &.left {
    background: #cec5ad;
    left: -100px;
    bottom: -100px;
  }

  &.right {
    background: #5a8a62;
    right: -100px;
    top: -100px;
  }
`,jz=l.section`
  padding: 6rem 0;
  background: #f8f9f6;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,$z=l.div`
  background: white;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(34, 55, 27, 0.1);
`,Sz=l.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Cz=l.div`
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`,zz=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`,Tz=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.2;
  margin: 0 0 1rem;
`,Pz=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin: 0 0 1.5rem;
`,Mz=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,ya=l.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  color: #5a8a62;

  svg {
    font-size: 0.875rem;
  }
`,Az=l.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,Lz=l.div`
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9f6 0%, #ffffff 100%);

  @media (max-width: 900px) {
    display: none;
  }
`,Ez=l.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 12px;
`;l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(34, 55, 27, 0.2), rgba(90, 138, 98, 0.1));
`;const af=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #22371b;
  color: #cec5ad;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #1a2d15;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);

    svg {
      transform: translateX(4px);
    }
  }
`,sf=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #22371b;
  border: 2px solid #22371b;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(34, 55, 27, 0.05);
  }
`,Iz="/more images/services hero.png",Rz="/more images/mobile services hero.png",kn={yoga:"/new images/personalized yoga (2).png",meditation:"/new images/emotional wellness (2).png",mindset:"/more images/mindset coaching.png",stress:"/more images/stress relief.png",wellness:"/new images/holistic healing (3).png",confidence:"/new images/self love (2).png"},Bz=()=>{const e=k.useRef(null),t=k.useRef(null),i=k.useRef(null),n=k.useRef(null),[o,a]=k.useState(0),s=O(e,{once:!0,amount:.3}),c=O(t,{once:!0,amount:.1}),m=O(i,{once:!0,amount:.2}),p=O(n,{once:!0,amount:.3}),{scrollYProgress:u}=T0({target:e,offset:["start start","end start"]}),h=nr(u,[0,1],[0,150]),f=nr(u,[0,.5],[1,0]),g={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},w={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.1,.25,1]}}},b=[{icon:r.jsx(dl,{}),image:kn.yoga,objectPosition:"center 20%",title:"Personalized Yoga",tagline:"Move, Breathe, Transform",shortDesc:"One-on-one sessions tailored to your body and goals",features:["Custom practice design","Flexibility & strength","Mind-body connection","Daily routine building"],price:"From ₹999",duration:"60 min sessions",color:"#22371b"},{icon:r.jsx(mt,{}),image:kn.meditation,objectPosition:"center 20%",title:"Emotional Wellness",tagline:"Heal Your Heart, Find Peace",shortDesc:"Deep emotional healing and mental balance coaching",features:["Stress & anxiety relief","Emotional clarity","Healthy coping skills","Inner peace cultivation"],price:"From ₹1,499",duration:"90 min sessions",color:"#5a8a62"},{icon:r.jsx(M0,{}),image:kn.mindset,objectPosition:"center 15%",title:"Mindset Coaching",tagline:"Reprogram Your Mind",shortDesc:"NLP techniques for breakthrough success",features:["Limiting beliefs release","Confidence building","Goal clarity","Success mindset"],price:"From ₹1,999",duration:"75 min sessions",color:"#8ecfb3"},{icon:r.jsx(Vo,{}),image:kn.stress,objectPosition:"center 20%",title:"Stress Relief",tagline:"Release Tension, Embrace Calm",shortDesc:"Guided meditation and breathwork for deep relaxation",features:["Deep relaxation","Better sleep","Worry release","Grounded state"],price:"From ₹799",duration:"45 min sessions",color:"#cec5ad"},{icon:r.jsx(N6,{}),image:kn.wellness,objectPosition:"center 20%",title:"Holistic Transformation",tagline:"Complete Life Redesign",shortDesc:"Comprehensive program for total mind-body-spirit wellness",features:["Lifestyle redesign","Energy & vitality","Purpose discovery","Lasting change"],price:"From ₹4,999",duration:"3-12 month programs",color:"#21371a"},{icon:r.jsx(Z6,{}),image:kn.confidence,objectPosition:"center 20%",title:"Self-Love Journey",tagline:"Become Your Best Self",shortDesc:"Build unshakeable confidence and self-acceptance",features:["Self-esteem boost","Boundary setting","Authentic expression","Self-acceptance"],price:"From ₹1,299",duration:"60 min sessions",color:"#7fb88a"}],C=[{number:"01",title:"Discovery Call",desc:"Free 15-min consultation to understand your needs"},{number:"02",title:"Personalized Plan",desc:"Custom program designed for your unique journey"},{number:"03",title:"Begin Practice",desc:"Start your transformation with guided sessions"},{number:"04",title:"Evolve & Grow",desc:"Ongoing support as you blossom into your best self"}];return r.jsxs(Fz,{children:[r.jsxs(Wz,{ref:e,children:[r.jsx(jd,{className:"orb1"}),r.jsx(jd,{className:"orb2"}),r.jsx(jd,{className:"orb3"}),r.jsx(df,{className:"left",children:r.jsxs("svg",{viewBox:"0 0 120 400",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 80 10 200C10 320 60 400 60 400",stroke:"#cec5ad",strokeWidth:"1.5",fill:"none",opacity:"0.4"}),r.jsx("path",{d:"M60 50C60 50 30 100 30 200C30 300 60 350 60 350",stroke:"#cec5ad",strokeWidth:"1",fill:"none",opacity:"0.3"}),r.jsx("path",{d:"M20 120C20 120 60 160 60 200",stroke:"#cec5ad",strokeWidth:"0.8",fill:"none",opacity:"0.3"}),r.jsx("path",{d:"M100 120C100 120 60 160 60 200",stroke:"#cec5ad",strokeWidth:"0.8",fill:"none",opacity:"0.3"}),r.jsx("path",{d:"M30 280C30 280 60 240 60 200",stroke:"#cec5ad",strokeWidth:"0.8",fill:"none",opacity:"0.3"}),r.jsx("path",{d:"M90 280C90 280 60 240 60 200",stroke:"#cec5ad",strokeWidth:"0.8",fill:"none",opacity:"0.3"})]})}),r.jsx(df,{className:"right",children:r.jsxs("svg",{viewBox:"0 0 120 400",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 110 80 110 200C110 320 60 400 60 400",stroke:"#cec5ad",strokeWidth:"1.5",fill:"none",opacity:"0.4"}),r.jsx("path",{d:"M60 50C60 50 90 100 90 200C90 300 60 350 60 350",stroke:"#cec5ad",strokeWidth:"1",fill:"none",opacity:"0.3"})]})}),r.jsxs(Dz,{style:{y:h},children:[r.jsx(lf,{src:Iz,alt:"Services Hero",className:"desktop-hero"}),r.jsx(lf,{src:Rz,alt:"Services Hero Mobile",className:"mobile-hero"}),r.jsx(Vz,{})]}),r.jsxs(Nz,{as:j.div,style:{opacity:f},variants:g,initial:"hidden",animate:s?"visible":"hidden",children:[r.jsx(j.div,{variants:w,children:r.jsx(Oz,{children:"Transformational Services"})}),r.jsx(j.div,{variants:w,children:r.jsxs(_z,{children:["Your Path to",r.jsx("br",{}),r.jsx(Hz,{children:"Wellness Awaits"})]})}),r.jsx(j.div,{variants:w,children:r.jsx(Uz,{children:"Discover personalized yoga, meditation, and holistic wellness programs designed to transform your mind, body, and spirit."})}),r.jsx(j.div,{variants:w,children:r.jsxs(Zz,{children:[r.jsxs(Yz,{as:_,to:"/contact",children:["Start Your Journey ",r.jsx(me,{})]}),r.jsx(Qz,{onClick:()=>document.getElementById("services-grid").scrollIntoView({behavior:"smooth"}),children:"Explore Services"})]})})]}),r.jsx(Gz,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z",fill:"#f8f9f6"})})})]}),r.jsx(Kz,{id:"services-grid",ref:t,children:r.jsxs(kd,{children:[r.jsxs(qz,{as:j.div,variants:g,initial:"hidden",animate:c?"visible":"hidden",children:[r.jsx(j.div,{variants:w,children:r.jsx(cf,{children:"Our Services"})}),r.jsx(j.div,{variants:w,children:r.jsx(Xz,{children:"Transform Every Aspect of Your Being"})}),r.jsx(j.div,{variants:w,children:r.jsx(Jz,{children:"Whether you're seeking physical vitality, emotional balance, or complete life transformation, there's a path designed specifically for you."})})]}),r.jsx(eT,{children:b.map((v,x)=>r.jsxs(tT,{$active:o===x,onClick:()=>a(x),as:j.button,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(iT,{$active:o===x,children:v.icon}),r.jsx(nT,{children:v.title})]},x))}),r.jsxs(rT,{as:j.div,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5},children:[r.jsxs(oT,{children:[r.jsxs(aT,{children:[r.jsx(sT,{src:b[o].image,alt:b[o].title,$objectPosition:b[o].objectPosition}),r.jsx(lT,{style:{backgroundColor:b[o].color}})]}),r.jsxs(dT,{children:[r.jsx(cT,{children:r.jsx(ti,{})}),r.jsx(mT,{children:"Popular Choice"})]})]}),r.jsxs(pT,{children:[r.jsx(hT,{style:{backgroundColor:b[o].color},children:b[o].icon}),r.jsx(uT,{children:b[o].tagline}),r.jsx(fT,{children:b[o].title}),r.jsx(gT,{children:b[o].shortDesc}),r.jsx(xT,{children:b[o].features.map((v,x)=>r.jsxs(yT,{children:[r.jsx(wT,{children:r.jsx(qi,{})}),r.jsx(vT,{children:v})]},x))}),r.jsxs(bT,{as:_,to:"/contact",children:["Book This Service ",r.jsx(me,{})]})]})]},o),r.jsx(kT,{children:b.map((v,x)=>r.jsxs(jT,{as:j.div,variants:w,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},whileHover:{y:-10,boxShadow:"0 25px 50px rgba(34, 55, 27, 0.15)"},onClick:()=>a(x),children:[r.jsxs($T,{style:{"--object-position":v.objectPosition||"center 50%"},children:[r.jsx("img",{src:v.image,alt:v.title}),r.jsx(ST,{style:{backgroundColor:v.color}})]}),r.jsxs(CT,{children:[r.jsx(zT,{style:{color:v.color},children:v.icon}),r.jsx(TT,{children:v.title}),r.jsx(PT,{children:v.tagline})]})]},x))})]})}),r.jsxs(MT,{ref:i,children:[r.jsx(AT,{children:r.jsxs("svg",{viewBox:"0 0 800 400",fill:"none",preserveAspectRatio:"xMidYMid slice",children:[r.jsx("circle",{cx:"100",cy:"100",r:"150",fill:"#22371b",opacity:"0.03"}),r.jsx("circle",{cx:"700",cy:"300",r:"200",fill:"#cec5ad",opacity:"0.05"}),r.jsx("circle",{cx:"400",cy:"50",r:"100",fill:"#5a8a62",opacity:"0.04"})]})}),r.jsx(kd,{children:r.jsxs(LT,{as:j.div,variants:g,initial:"hidden",animate:m?"visible":"hidden",children:[r.jsx(j.div,{variants:w,children:r.jsx(cf,{className:"center",children:"How It Works"})}),r.jsx(j.div,{variants:w,children:r.jsx(ET,{children:"Your Transformation Journey"})}),r.jsx(IT,{children:C.map((v,x)=>r.jsxs(RT,{as:j.div,variants:w,children:[r.jsx(BT,{children:v.number}),r.jsxs(FT,{children:[r.jsx(WT,{children:v.title}),r.jsx(DT,{children:v.desc})]}),x<C.length-1&&r.jsx(VT,{})]},x))})]})})]}),r.jsx(NT,{children:r.jsxs(OT,{children:[r.jsx(_T,{children:'"'}),r.jsx(HT,{children:"The journey of a thousand miles begins with a single step. Let that step be towards your own well-being."}),r.jsx(UT,{children:"— BK Shikha"})]})}),r.jsxs(ZT,{ref:n,children:[r.jsx(mf,{className:"left"}),r.jsx(mf,{className:"right"}),r.jsx(kd,{children:r.jsxs(YT,{as:j.div,variants:g,initial:"hidden",animate:p?"visible":"hidden",children:[r.jsx(j.div,{variants:w,children:r.jsx(QT,{children:"Ready to Begin?"})}),r.jsx(j.div,{variants:w,children:r.jsx(GT,{children:"Not Sure Which Path Is Right for You?"})}),r.jsx(j.div,{variants:w,children:r.jsx(KT,{children:"Let's have a heartfelt conversation about your goals, challenges, and dreams. I'll help you discover the perfect service that aligns with your unique journey."})}),r.jsx(j.div,{variants:w,children:r.jsxs(qT,{children:[r.jsxs(XT,{as:_,to:"/contact",children:["Schedule Free Consultation ",r.jsx(me,{})]}),r.jsx(JT,{as:_,to:"/about",children:"Learn More About Me"})]})})]})})]})]})},Fz=l.div`
  overflow-x: hidden;
`,kd=l.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    padding: 0 1rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1.25rem;
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    max-width: 1600px;
  }
`,Wz=l.section`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #22371b 0%, #21371a 50%, #1a2d15 100%);
  
  /* Extra small phones */
  @media (max-width: 360px) {
    min-height: auto;
    padding: 5rem 0 6rem;
  }
  
  /* Landscape mobile */
  @media (max-width: 896px) and (orientation: landscape) {
    min-height: auto;
    padding: 4rem 0 5rem;
  }
`,Dz=l(j.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
`,lf=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0.7;
  
  &.mobile-hero {
    display: none;
  }
  
  @media (max-width: 1025px) {
    &.desktop-hero {
      display: none;
    }
    
    &.mobile-hero {
      display: block;
      object-fit: cover;
      object-position: center center;
    }
  }
  
  @media (orientation: landscape) and (max-height: 600px) {
    object-position: center center;
  }
`;l.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
`;const Vz=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(34, 55, 27, 0.85) 0%,
    rgba(33, 55, 26, 0.7) 50%,
    rgba(34, 55, 27, 0.85) 100%
  );
`,jd=l.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: float 8s ease-in-out infinite;

  &.orb1 {
    width: 400px;
    height: 400px;
    background: #cec5ad;
    top: -100px;
    right: -100px;
    animation-delay: 0s;
  }

  &.orb2 {
    width: 300px;
    height: 300px;
    background: #5a8a62;
    bottom: 10%;
    left: -50px;
    animation-delay: 2s;
  }

  &.orb3 {
    width: 200px;
    height: 200px;
    background: #8ecfb3;
    top: 40%;
    right: 20%;
    animation-delay: 4s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-30px) scale(1.05); }
  }
`,df=l.div`
  position: absolute;
  width: 120px;
  height: 400px;
  z-index: 1;
  
  &.left {
    left: 2%;
    top: 50%;
    transform: translateY(-50%);
  }

  &.right {
    right: 2%;
    top: 50%;
    transform: translateY(-50%) scaleX(-1);
  }

  @media (max-width: \${theme.breakpoints.tablet}) {
    display: none;
  }
`,Nz=l.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
`,Oz=l.span`
  display: inline-block;
  font-family: \${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid rgba(206, 197, 173, 0.3);
  border-radius: 100px;
`,_z=l.h1`
  font-family: \${theme.fonts.heading};
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 1.5rem;
`,Hz=l.span`
  color: #cec5ad;
  font-style: italic;
  font-weight: 400;
`,Uz=l.p`
  font-family: \${theme.fonts.body};
  font-size: 1.25rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: \${theme.breakpoints.mobile}) {
    font-size: 1.0625rem;
  }
`,Zz=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,Yz=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #cec5ad;
  color: #22371b;
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #e0d9c7;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(206, 197, 173, 0.3);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,Qz=l.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #ffffff;
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #cec5ad;
    color: #cec5ad;
  }
`,Gz=l.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  z-index: 5;

  svg {
    width: 100%;
    height: 100%;
  }
`,Kz=l.section`
  padding: 6rem 0;
  background: #f8f9f6;

  @media (max-width: \${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,qz=l.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
`,cf=l.span`
  display: inline-block;
  font-family: \${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #22371b;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;

  &.center {
    display: block;
    text-align: center;
  }
`,Xz=l.h2`
  font-family: \${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #22371b;
  margin: 0 0 1rem;
  line-height: 1.2;
`,Jz=l.p`
  font-family: \${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #21371a;
  margin: 0;
`,eT=l.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  padding: 0 1rem;
`,tT=l.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: \${props => props.$active ? '#22371b' : 'white'};
  color: \${props => props.$active ? '#cec5ad' : '#22371b'};
  border: 2px solid \${props => props.$active ? '#22371b' : '#e8efe9'};
  border-radius: 100px;
  font-family: \${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #22371b;
    background: \${props => props.$active ? '#22371b' : 'rgba(34, 55, 27, 0.05)'};
  }
`,iT=l.span`
  font-size: 1rem;
  display: flex;
  color: \${props => props.$active ? '#cec5ad' : '#5a8a62'};
`,nT=l.span`
  @media (max-width: \${theme.breakpoints.mobile}) {
    display: none;
  }
`,rT=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  background: white;
  border-radius: 30px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(34, 55, 27, 0.08);
  margin-bottom: 5rem;

  @media (max-width: \${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }
`,oT=l.div`
  position: relative;
`,aT=l.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4/3;
`,sT=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${e=>e.$objectPosition||"center 50%"};
  position: relative;
  z-index: 2;
`,lT=l.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  opacity: 0.3;
  z-index: 1;
`,dT=l.div`
  position: absolute;
  bottom: -15px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #22371b;
  color: #cec5ad;
  padding: 0.75rem 1.25rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
  z-index: 10;
`,cT=l.span`
  display: flex;
`,mT=l.span``,pT=l.div`
  display: flex;
  flex-direction: column;
`,hT=l.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`,uT=l.span`
  font-family: \${theme.fonts.heading};
  font-size: 1rem;
  font-style: italic;
  color: #5a8a62;
  margin-bottom: 0.5rem;
`,fT=l.h3`
  font-family: \${theme.fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  color: #22371b;
  margin: 0 0 1rem;
`,gT=l.p`
  font-family: \${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #21371a;
  margin: 0 0 1.5rem;
`,xT=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: \${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,yT=l.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,wT=l.span`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(90, 138, 98, 0.15);
  color: #5a8a62;
  border-radius: 50%;
  font-size: 0.75rem;
`,vT=l.span`
  font-family: \${theme.fonts.body};
  font-size: 0.9375rem;
  color: #21371a;
`;l.div`
  display: flex;
  gap: 2rem;
  padding: 1.5rem 0;
  border-top: 1px solid #e8efe9;
  border-bottom: 1px solid #e8efe9;
  margin-bottom: 2rem;
`;l.div``;l.span`
  display: block;
  font-family: \${theme.fonts.body};
  font-size: 0.8125rem;
  color: #7a8a7a;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
`;l.span`
  font-family: \${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #22371b;
`;const bT=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #22371b;
  color: #cec5ad;
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background: #1a2d15;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,kT=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: \${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: \${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,jT=l.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 2px solid transparent;

  &:hover {
    border-color: #cec5ad;
  }
`,$T=l.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: var(--object-position, center 50%);
    transition: transform 0.5s ease;
  }

  \${ServiceMiniCard}:hover & img {
    transform: scale(1.1);
  }
`,ST=l.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;

  \${ServiceMiniCard}:hover & {
    opacity: 0.2;
  }
`,CT=l.div`
  padding: 1.5rem;
`,zT=l.span`
  display: flex;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`,TT=l.h4`
  font-family: \${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 0.25rem;
`,PT=l.p`
  font-family: \${theme.fonts.body};
  font-size: 0.875rem;
  font-style: italic;
  color: #5a8a62;
  margin: 0 0 0.75rem;
`,MT=l.section`
  padding: 6rem 0;
  background: white;
  position: relative;
  overflow: hidden;

  @media (max-width: \${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,AT=l.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`,LT=l.div`
  position: relative;
  z-index: 1;
  text-align: center;
`,ET=l.h2`
  font-family: \${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #22371b;
  margin: 0 0 4rem;
`,IT=l.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: \${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`,RT=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 200px;
  max-width: 280px;
  position: relative;
`,BT=l.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #22371b 0%, #5a8a62 100%);
  color: #cec5ad;
  font-family: \${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
`,FT=l.div``,WT=l.h4`
  font-family: \${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 0.5rem;
`,DT=l.p`
  font-family: \${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #21371a;
  margin: 0;
`,VT=l.div`
  position: absolute;
  top: 40px;
  right: -30px;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #cec5ad, transparent);

  @media (max-width: \${theme.breakpoints.tablet}) {
    display: none;
  }
`,NT=l.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #22371b 0%, #21371a 100%);
  text-align: center;
`,OT=l.div`
  max-width: 800px;
  margin: 0 auto;
`,_T=l.span`
  display: block;
  font-family: \${theme.fonts.heading};
  font-size: 6rem;
  color: #cec5ad;
  opacity: 0.3;
  line-height: 0.5;
  margin-bottom: 1rem;
`,HT=l.p`
  font-family: \${theme.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 400;
  font-style: italic;
  color: white;
  line-height: 1.6;
  margin: 0 0 1.5rem;
`,UT=l.span`
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  color: #cec5ad;
  letter-spacing: 0.1em;
`,ZT=l.section`
  padding: 6rem 0;
  background: #f8f9f6;
  position: relative;
  overflow: hidden;

  @media (max-width: \${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,mf=l.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;

  &.left {
    background: #22371b;
    top: -100px;
    left: -100px;
  }

  &.right {
    background: #cec5ad;
    bottom: -100px;
    right: -100px;
  }
`,YT=l.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,QT=l.span`
  display: inline-block;
  font-family: \${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`,GT=l.h2`
  font-family: \${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #22371b;
  margin: 0 0 1.5rem;
`,KT=l.p`
  font-family: \${theme.fonts.body};
  font-size: 1.125rem;
  line-height: 1.8;
  color: #21371a;
  margin: 0 0 2.5rem;
`,qT=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,XT=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.125rem 2.25rem;
  background: #22371b;
  color: #cec5ad;
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #1a2d15;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,JT=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.125rem 2.25rem;
  background: transparent;
  color: #22371b;
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid #22371b;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(34, 55, 27, 0.05);
  }
`,oi={corporate:"https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=1600&h=2000&fit=crop&q=100",retreat:"https://images.unsplash.com/photo-1469521669194-babb45599def?w=1600&h=1200&fit=crop&q=100",workshop:"https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1600&h=2400&fit=crop&q=100",online:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1600&h=1200&fit=crop&q=100",community:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=1600&fit=crop&q=100",training:"https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1600&h=1200&fit=crop&q=100",meditation:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1600&h=2000&fit=crop&q=100",nature:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&h=1200&fit=crop&q=100"},eP="/more images/portfolio 1 (1).png",tP="/more images/portfolio hero mobile.png",pf=[{id:1,category:"Corporate",title:"Corporate Wellness Revolution",subtitle:"Tech Giants Wellness Program",description:"Transformed workplace wellness for 500+ professionals at leading tech companies through customized yoga and mindfulness programs.",image:oi.corporate,stats:{participants:"500+",satisfaction:"98%",companies:"12"},tags:["Corporate","Stress Management","Team Building"],featured:!0,size:"tall"},{id:2,category:"Retreat",title:"Himalayan Soul Journey",subtitle:"10-Day Spiritual Awakening",description:"Curated transformative retreats in the serene Himalayas, combining ancient yogic wisdom with modern healing practices.",image:oi.retreat,stats:{participants:"150+",rating:"4.9",retreats:"15"},tags:["Retreats","Meditation","Nature Immersion"],featured:!0,size:"wide"},{id:3,category:"Workshop",title:"Emotional Alchemy",subtitle:"Healing Through Movement",description:"Interactive workshops blending yoga therapy, breathwork, and NLP techniques for profound emotional transformation.",image:oi.workshop,stats:{workshops:"50+",healed:"1000+",cities:"8"},tags:["Emotional Wellness","Trauma Healing","Self-Discovery"],size:"tall"},{id:4,category:"Online",title:"30-Day Transformation",subtitle:"Virtual Wellness Journey",description:"A comprehensive online program combining daily yoga, meditation, and nutrition guidance for holistic transformation.",image:oi.online,stats:{students:"2000+",completion:"85%",countries:"25"},tags:["Online","Self-Paced","Global Reach"],size:"normal"},{id:5,category:"Community",title:"Yoga for All Initiative",subtitle:"Making Wellness Accessible",description:"Free weekly yoga sessions in parks and community centers, breaking financial barriers to wellness.",image:oi.community,stats:{sessions:"200+",lives:"3000+",years:"5"},tags:["Free Classes","Community Service","Inclusivity"],size:"square"},{id:6,category:"Training",title:"Teacher Training Academy",subtitle:"200-Hour Certification Program",description:"Comprehensive yoga teacher training that has certified 100+ passionate practitioners to spread wellness worldwide.",image:oi.training,stats:{graduates:"100+",employed:"90%",hours:"200"},tags:["Certification","Professional","Career"],size:"wide"},{id:7,category:"Meditation",title:"Silence Speaks",subtitle:"Vipassana Meditation Series",description:"Deep meditation programs helping practitioners access profound states of awareness and inner peace.",image:oi.meditation,stats:{sessions:"100+",hours:"500+",breakthroughs:"Many"},tags:["Meditation","Mindfulness","Inner Peace"],size:"tall"},{id:8,category:"Nature",title:"Forest Bathing Wellness",subtitle:"Shinrin-Yoku Experience",description:"Immersive nature therapy combining yoga, forest bathing, and eco-mindfulness for complete rejuvenation.",image:oi.nature,stats:{participants:"300+",locations:"10",nature:"100%"},tags:["Nature Therapy","Eco-Wellness","Outdoor"],size:"normal"}],hf=[{icon:r.jsx(rr,{}),number:"5000+",label:"Lives Transformed",color:"#cec5ad"},{icon:r.jsx(P0,{}),number:"15+",label:"Years Experience",color:"#8ecfb3"},{icon:r.jsx(mt,{}),number:"98%",label:"Client Satisfaction",color:"#5a8a62"},{icon:r.jsx(ti,{}),number:"500+",label:"Sessions Delivered",color:"#cec5ad"},{icon:r.jsx(O6,{}),number:"25+",label:"Countries Reached",color:"#8ecfb3"},{icon:r.jsx(dl,{}),number:"100%",label:"Dedication",color:"#5a8a62"}],iP=()=>{const e=k.useRef(null),t=k.useRef(null),i=k.useRef(null),n=k.useRef(null),[o,a]=k.useState("All"),[s,c]=k.useState(null),[m,p]=k.useState(!1),u=O(e,{once:!0,amount:.3}),h=O(t,{once:!0,amount:.1});O(i,{once:!0,amount:.2}),O(n,{once:!0,amount:.3}),ae.useEffect(()=>{const y=()=>{p(window.innerWidth<=768)};return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]);const{scrollYProgress:f}=T0({target:e,offset:["start start","end start"]}),g=nr(f,[0,1],[0,200]),w=nr(f,[0,.5],[1,0]),b=["All","Corporate","Retreat","Workshop","Online","Community","Training","Meditation","Nature"],C=o==="All"?pf:pf.filter(y=>y.category===o),v={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},x={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.1,.25,1]}}};return r.jsxs(nP,{children:[r.jsxs(rP,{ref:e,children:[r.jsxs(oP,{style:{y:g},children:[r.jsx(aP,{src:m?tP:eP,alt:"Portfolio Hero"}),r.jsx(sP,{})]}),r.jsx($d,{className:"orb1"}),r.jsx($d,{className:"orb2"}),r.jsx($d,{className:"orb3"}),r.jsx(uf,{className:"left",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1"})]})}),r.jsx(uf,{className:"right",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1"})]})}),r.jsxs(lP,{as:j.div,style:{opacity:w},variants:v,initial:"hidden",animate:u?"visible":"hidden",children:[r.jsx(j.div,{variants:x,children:r.jsxs(dP,{children:[r.jsx(ti,{})," Our Journey of Impact"]})}),r.jsx(j.div,{variants:x,children:r.jsxs(cP,{children:["Transforming Lives,",r.jsx("br",{}),r.jsx(mP,{children:"One Breath at a Time"})]})}),r.jsx(j.div,{variants:x,children:r.jsx(pP,{children:"Explore our collection of transformative programs, workshops, and initiatives that have touched thousands of souls across the globe."})}),r.jsx(j.div,{variants:x,children:r.jsxs(hP,{children:[r.jsxs(uP,{to:"/contact",children:["Start Your Journey",r.jsx(me,{})]}),r.jsxs(fP,{onClick:()=>document.getElementById("gallery").scrollIntoView({behavior:"smooth"}),children:[r.jsx(Ls,{}),"View Portfolio"]})]})})]}),r.jsx(gP,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",fill:"#ffffff"})})})]}),r.jsx(xP,{ref:n,children:r.jsx(yP,{children:[...hf,...hf].map((y,$)=>r.jsxs(wP,{children:[r.jsx(vP,{style:{color:y.color},children:y.icon}),r.jsx(bP,{children:y.number}),r.jsx(kP,{children:y.label})]},$))})}),r.jsxs(jP,{id:"gallery",ref:t,children:[r.jsxs(wa,{children:[r.jsxs($P,{as:j.div,variants:v,initial:"hidden",animate:h?"visible":"hidden",children:[r.jsxs(j.div,{variants:x,children:[r.jsx(ff,{children:"Our Impact"}),r.jsx(gf,{children:"Featured Work & Projects"}),r.jsx(SP,{children:"Each project represents a unique journey of transformation, healing, and growth."})]}),r.jsx(CP,{as:j.div,variants:x,children:b.map(y=>r.jsx(zP,{$active:o===y,onClick:()=>a(y),as:j.button,whileHover:{scale:1.05},whileTap:{scale:.95},children:y},y))})]}),r.jsx(Bt,{mode:"wait",children:r.jsx(TP,{as:j.div,initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30},transition:{duration:.4},children:C.map((y,$)=>r.jsx(xl,{$size:y.size,as:j.div,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:$*.1},onClick:()=>c(y),whileHover:{y:-10},children:r.jsxs(PP,{children:[r.jsx(MP,{src:y.image,alt:y.title,loading:"lazy"}),r.jsxs(AP,{children:[r.jsx(LP,{children:y.category}),r.jsxs(EP,{children:[r.jsx(IP,{children:y.title}),r.jsx(RP,{children:y.subtitle}),r.jsxs(BP,{children:["View Project ",r.jsx(me,{})]})]})]}),y.featured&&r.jsxs(FP,{children:[r.jsx(ti,{})," Featured"]})]})},y.id))},o)})]}),r.jsx(WP,{children:r.jsxs("svg",{viewBox:"0 0 200 400",fill:"none",children:[r.jsx("path",{d:"M100,20 Q150,100 140,200 Q130,300 100,380",stroke:"#e8f0e9",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M100,80 Q60,120 40,100",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,140 Q55,180 30,150",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,200 Q50,240 25,200",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"})]})})]}),r.jsx(DP,{children:r.jsx(wa,{children:r.jsxs(VP,{as:j.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsx(NP,{children:'"'}),r.jsx(OP,{children:"Every soul I touch, every life I transform, is a reminder of why I walk this path. This portfolio is not just my work — it's our collective journey toward light."}),r.jsxs(_P,{children:[r.jsx(HP,{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=100",alt:"BK Shikha"}),r.jsxs(UP,{children:[r.jsx(ZP,{children:"BK Shikha"}),r.jsx(YP,{children:"Holistic Wellness Coach"})]})]})]})})}),r.jsx(QP,{children:r.jsx(wa,{children:r.jsxs(GP,{as:j.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsxs(KP,{children:[r.jsx(ff,{children:"Follow the Journey"}),r.jsx(gf,{children:"Stay Connected"})]}),r.jsxs(qP,{children:[r.jsxs(xf,{href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer",as:j.a,whileHover:{y:-8},children:[r.jsx(yf,{className:"instagram",children:r.jsx(rn,{})}),r.jsxs(wf,{children:[r.jsx(vf,{children:"Instagram"}),r.jsx(bf,{children:"@cyd_bkshikha"})]}),r.jsx(kf,{children:r.jsx(me,{})})]}),r.jsxs(xf,{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer",as:j.a,whileHover:{y:-8},children:[r.jsx(yf,{className:"youtube",children:r.jsx(G6,{})}),r.jsxs(wf,{children:[r.jsx(vf,{children:"YouTube"}),r.jsx(bf,{children:"BK Shikha Wellness"})]}),r.jsx(kf,{children:r.jsx(me,{})})]})]})]})})}),r.jsxs(XP,{children:[r.jsx(JP,{}),r.jsx(eM,{}),r.jsx(wa,{children:r.jsxs(tM,{as:j.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[r.jsx(iM,{children:"Begin Your Story"}),r.jsx(nM,{children:"Ready to Be Our Next Success Story?"}),r.jsx(rM,{children:"Your transformation journey begins with a single step. Let's write your success story together."}),r.jsxs(oM,{children:[r.jsxs(aM,{to:"/contact",children:["Book Free Consultation",r.jsx(me,{})]}),r.jsx(sM,{to:"/services",children:"Explore Programs"})]}),r.jsxs(lM,{children:[r.jsxs(jf,{children:[r.jsx(qi,{})," Personalized Assessment"]}),r.jsxs(jf,{children:[r.jsx(qi,{})," No Obligation"]})]})]})}),r.jsx(dM,{children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",children:[r.jsx("circle",{cx:"100",cy:"100",r:"80",stroke:"#cec5ad",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.3"}),r.jsx("circle",{cx:"100",cy:"100",r:"60",stroke:"#ffffff",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.2"}),r.jsx("circle",{cx:"100",cy:"100",r:"40",stroke:"#cec5ad",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.4"})]})})]}),r.jsx(Bt,{children:s&&r.jsx(cM,{as:j.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>c(null),children:r.jsxs(mM,{as:j.div,initial:{opacity:0,scale:.9,y:50},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:50},onClick:y=>y.stopPropagation(),children:[r.jsx(pM,{onClick:()=>c(null),children:r.jsx(cl,{})}),r.jsx(hM,{src:s.image,alt:s.title}),r.jsxs(uM,{children:[r.jsx(fM,{children:s.category}),r.jsx(gM,{children:s.title}),r.jsx(xM,{children:s.subtitle}),r.jsx(yM,{children:s.description}),r.jsx(wM,{children:Object.entries(s.stats).map(([y,$])=>r.jsxs(vM,{children:[r.jsx(bM,{children:$}),r.jsx(kM,{children:y})]},y))}),r.jsx(jM,{children:s.tags.map((y,$)=>r.jsx($M,{children:y},$))}),r.jsxs(SM,{to:"/contact",children:["Start Similar Journey ",r.jsx(me,{})]})]})]})})})]})},nP=l.div`
  position: relative;
  overflow-x: hidden;
`,wa=l.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,rP=l.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,oP=l(j.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
`,aP=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0.7;
  
  @media (max-width: 1024px) {
    object-position: center 30%;
  }
  
  @media (max-width: 768px) {
    object-position: center 25%;
    opacity: 0.6;
  }
  
  @media (max-width: 640px) {
    object-position: center 20%;
  }
  
  @media (max-width: 480px) {
    object-position: center 15%;
  }
  
  @media (max-width: 360px) {
    object-position: center 10%;
  }
  
  @media (orientation: landscape) and (max-height: 600px) {
    object-position: center center;
  }
`,sP=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(34, 55, 27, 0.6) 0%,
    rgba(33, 55, 26, 0.5) 50%,
    rgba(34, 55, 27, 0.6) 100%
  );
`,$d=l.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
  animation: float 12s ease-in-out infinite;
  z-index: 1;

  &.orb1 {
    width: 500px;
    height: 500px;
    background: #cec5ad;
    top: -150px;
    right: -150px;
  }

  &.orb2 {
    width: 400px;
    height: 400px;
    background: #5a8a62;
    bottom: -100px;
    left: -100px;
    animation-delay: 4s;
  }

  &.orb3 {
    width: 300px;
    height: 300px;
    background: #8ecfb3;
    top: 50%;
    left: 30%;
    animation-delay: 8s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-50px) scale(1.05); }
  }
`,uf=l.div`
  position: absolute;
  width: 100px;
  height: 280px;
  z-index: 2;

  &.left {
    left: 3%;
    top: 50%;
    transform: translateY(-50%);
  }

  &.right {
    right: 3%;
    top: 50%;
    transform: translateY(-50%) scaleX(-1);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`,lP=l.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
`,dP=l.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid rgba(206, 197, 173, 0.3);
  border-radius: 100px;

  svg {
    font-size: 1rem;
  }
`,cP=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 1.5rem;
`,mP=l.span`
  color: #cec5ad;
  font-style: italic;
  font-weight: 400;
`,pP=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
`,hP=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,uP=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #cec5ad;
  color: #22371b;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #e0d9c7;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(206, 197, 173, 0.3);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,fP=l.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #ffffff;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #cec5ad;
    color: #cec5ad;
  }
`,gP=l.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  z-index: 5;

  svg {
    width: 100%;
    height: 100%;
  }
`,xP=l.section`
  background: linear-gradient(135deg, #22371b 0%, #2d4d24 100%);
  padding: 2rem 0;
  overflow: hidden;
`,yP=l.div`
  display: flex;
  gap: 4rem;
  animation: marquee 30s linear infinite;

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`,wP=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
`,vP=l.div`
  font-size: 1.5rem;
  display: flex;
`,bP=l.span`
  font-family: ${d.fonts.heading};
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
`,kP=l.span`
  font-family: ${d.fonts.body};
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,jP=l.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
`,$P=l.div`
  text-align: center;
  margin-bottom: 4rem;
`,ff=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  font-style: italic;
  color: #c9a227;
  margin-bottom: 0.75rem;
`,gf=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  color: #22371b;
  line-height: 1.2;
  margin-bottom: 1rem;
`,SP=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 600px;
  margin: 0 auto 2rem;
`,CP=l.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 1rem;
`,zP=l.button`
  padding: 0.75rem 1.5rem;
  background: ${e=>e.$active?"#22371b":"transparent"};
  color: ${e=>e.$active?"#cec5ad":"#22371b"};
  border: 2px solid ${e=>e.$active?"#22371b":"rgba(34, 55, 27, 0.2)"};
  border-radius: 100px;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #22371b;
    background: ${e=>e.$active?"#22371b":"rgba(34, 55, 27, 0.05)"};
  }
`,TP=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 280px;
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 250px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 300px;
  }
`,xl=l.div`
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  
  ${e=>e.$size==="tall"&&`
    grid-row: span 2;
  `}
  
  ${e=>e.$size==="wide"&&`
    grid-column: span 2;
    
    @media (max-width: 600px) {
      grid-column: span 1;
    }
  `}
  
  ${e=>e.$size==="square"&&`
    grid-row: span 1;
    grid-column: span 1;
  `}
`,PP=l.div`
  position: relative;
  width: 100%;
  height: 100%;
`,MP=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${xl}:hover & {
    transform: scale(1.1);
  }
`,AP=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(34, 55, 27, 0) 0%, rgba(34, 55, 27, 0.9) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;

  ${xl}:hover & {
    opacity: 1;
  }
`,LP=l.span`
  align-self: flex-start;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.95);
  color: #22371b;
  font-family: ${d.fonts.body};
  font-size: 0.8125rem;
  font-weight: 600;
  border-radius: 100px;
`,EP=l.div``,IP=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
`,RP=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`,BP=l.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  color: #cec5ad;
  
  svg {
    transition: transform 0.3s ease;
  }

  ${xl}:hover & svg {
    transform: translateX(4px);
  }
`,FP=l.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 1rem;
  background: #cec5ad;
  color: #22371b;
  font-family: ${d.fonts.body};
  font-size: 0.8125rem;
  font-weight: 600;
  border-radius: 100px;
  z-index: 5;

  svg {
    font-size: 0.875rem;
  }
`,WP=l.div`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 350px;
  opacity: 0.4;
  pointer-events: none;

  @media (max-width: 1200px) {
    display: none;
  }
`;l.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, #f8f9f6 0%, #eef4ef 100%);
  position: relative;
  overflow: hidden;
`;l.div``;l.div`
  text-align: center;
  margin-bottom: 4rem;
`;l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;l.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(34, 55, 27, 0.08);
  transition: all 0.3s ease;
`;l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;l.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #cec5ad;
`;l.div`
  flex: 1;
`;l.h4`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.125rem;
`;l.span`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: #6b7c6f;
`;l.span`
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #22371b, #5a8a62);
  color: #ffffff;
  font-family: ${d.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #4a5a4d;
  font-style: italic;
  margin-bottom: 1.5rem;
`;l.div`
  display: flex;
  gap: 0.25rem;
  color: #cec5ad;

  svg {
    fill: currentColor;
    font-size: 1rem;
  }
`;l.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;

  &.left {
    background: #22371b;
    left: -200px;
    top: 50%;
    transform: translateY(-50%);
  }

  &.right {
    background: #cec5ad;
    right: -200px;
    top: 50%;
    transform: translateY(-50%);
  }
`;const DP=l.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #22371b 0%, #21371a 100%);
  position: relative;
  overflow: hidden;
`,VP=l.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`,NP=l.span`
  display: block;
  font-family: ${d.fonts.heading};
  font-size: 8rem;
  color: #cec5ad;
  opacity: 0.2;
  line-height: 0.5;
  margin-bottom: 1rem;
`,OP=l.p`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 400;
  font-style: italic;
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 2rem;
`,_P=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,HP=l.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #cec5ad;
`,UP=l.div`
  text-align: left;
`,ZP=l.div`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #cec5ad;
`,YP=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
`,QP=l.section`
  padding: 5rem 0;
  background: #ffffff;
`,GP=l.div`
  text-align: center;
`,KP=l.div`
  margin-bottom: 3rem;
`,qP=l.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`,xf=l.a`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem 2rem;
  background: #f8f9f6;
  border-radius: 20px;
  text-decoration: none;
  min-width: 280px;
  transition: all 0.3s ease;

  &:hover {
    background: #eef4ef;
    box-shadow: 0 15px 40px rgba(34, 55, 27, 0.1);
  }
`,yf=l.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;

  &.instagram {
    background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af);
  }

  &.youtube {
    background: #FF0000;
  }
`,wf=l.div`
  flex: 1;
  text-align: left;
`,vf=l.div`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #22371b;
`,bf=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: #6b7c6f;
`,kf=l.div`
  color: #5a8a62;
  font-size: 1.25rem;
`,XP=l.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #eef4ef 0%, #f8f9f6 100%);
  position: relative;
  overflow: hidden;
`,JP=l.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: #22371b;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.08;
  left: -200px;
  top: 50%;
  transform: translateY(-50%);
`,eM=l.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: #cec5ad;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.15;
  right: -150px;
  bottom: -100px;
`,tM=l.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,iM=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`,nM=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  color: #22371b;
  margin-bottom: 1rem;
`,rM=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin-bottom: 2.5rem;
`,oM=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`,aM=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.125rem 2.25rem;
  background: #22371b;
  color: #cec5ad;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #1a2d15;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,sM=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.125rem 2.25rem;
  background: transparent;
  color: #22371b;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid #22371b;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(34, 55, 27, 0.05);
  }
`,lM=l.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`,jf=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  color: #5a8a62;

  svg {
    font-size: 1rem;
  }
`,dM=l.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 200px;
  opacity: 0.5;
  pointer-events: none;

  @media (max-width: 1200px) {
    display: none;
  }
`,cM=l.div`
  position: fixed;
  inset: 0;
  background: rgba(34, 55, 27, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 1000;
  overflow-y: auto;
`,mM=l.div`
  background: #ffffff;
  border-radius: 30px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,pM=l.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 1.25rem;
  color: #22371b;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  &:hover {
    background: #22371b;
    color: #cec5ad;
  }
`,hM=l.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`,uM=l.div`
  padding: 2.5rem;
`,fM=l.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(90, 138, 98, 0.1);
  color: #5a8a62;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 100px;
  margin-bottom: 1rem;
`,gM=l.h2`
  font-family: ${d.fonts.heading};
  font-size: 2rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.5rem;
`,xM=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  color: #5a8a62;
  font-style: italic;
  margin-bottom: 1.5rem;
`,yM=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin-bottom: 2rem;
`,wM=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid #e8efe9;
  border-bottom: 1px solid #e8efe9;
  margin-bottom: 1.5rem;
`,vM=l.div`
  text-align: center;
`,bM=l.div`
  font-family: ${d.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.25rem;
`,kM=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.8125rem;
  color: #7a8a7a;
  text-transform: capitalize;
`,jM=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`,$M=l.span`
  padding: 0.5rem 1rem;
  background: #f8f9f6;
  color: #5a8a62;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 100px;
`,SM=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #22371b;
  color: #cec5ad;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #1a2d15;
  }
`;l(j.button)`
  display: ${e=>e.$fullWidth?"block":"inline-block"};
  width: ${e=>e.$fullWidth?"100%":"auto"};
  padding: ${e=>{switch(e.$size){case"small":return"0.625rem 1.5rem";case"large":return"1.125rem 2.5rem";default:return"0.875rem 2rem"}}};
  font-family: ${d.fonts.body};
  font-size: ${e=>{switch(e.$size){case"small":return"0.875rem";case"large":return"1.125rem";default:return"1rem"}}};
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: ${d.borderRadius.full};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.6:1};
  box-shadow: ${d.shadows.sm};
  transition: all ${d.transitions.base};
  
  /* Performance optimizations */
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: auto;
  isolation: isolate;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: ${e=>{switch(e.$variant){case"secondary":return d.colors.secondary;case"outline":return"transparent";case"accent":return d.colors.accent;default:return d.colors.cta}}};

  color: ${e=>{switch(e.$variant){case"outline":return d.colors.primary;default:return"white"}}};

  border: ${e=>{switch(e.$variant){case"outline":return`2px solid ${d.colors.primary}`;default:return"none"}}};

  /* 4K screens */
  @media (min-width: 2560px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.75rem 1.875rem";case"large":return"1.375rem 3rem";default:return"1.125rem 2.5rem"}}};
    font-size: ${e=>{switch(e.$size){case"small":return"1rem";case"large":return"1.375rem";default:return"1.1875rem"}}};
    border-radius: 3.5rem;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.6875rem 1.75rem";case"large":return"1.25rem 2.75rem";default:return"1rem 2.25rem"}}};
    font-size: ${e=>{switch(e.$size){case"small":return"0.9375rem";case"large":return"1.25rem";default:return"1.0625rem"}}};
  }

  /* Desktop */
  @media (max-width: 1440px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.625rem 1.5rem";case"large":return"1.125rem 2.5rem";default:return"0.875rem 2rem"}}};
  }

  @media (max-width: 1200px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.5625rem 1.375rem";case"large":return"1rem 2.25rem";default:return"0.8125rem 1.875rem"}}};
    font-size: ${e=>{switch(e.$size){case"small":return"0.8125rem";case"large":return"1.0625rem";default:return"0.9375rem"}}};
  }

  /* Laptop */
  @media (max-width: 1024px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.5rem 1.25rem";case"large":return"0.9375rem 2rem";default:return"0.75rem 1.75rem"}}};
  }

  /* Tablets */
  @media (max-width: 900px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.5rem 1.125rem";case"large":return"0.875rem 1.875rem";default:return"0.6875rem 1.625rem"}}};
    font-size: ${e=>{switch(e.$size){case"small":return"0.8125rem";case"large":return"1rem";default:return"0.9375rem"}}};
    border-radius: 2.5rem;
  }

  @media (max-width: 820px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.5rem 1.125rem";case"large":return"0.8125rem 1.75rem";default:return"0.6875rem 1.5rem"}}};
  }

  @media (max-width: 768px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.5rem 1rem";case"large":return"0.8125rem 1.625rem";default:return"0.6875rem 1.5rem"}}};
    font-size: ${e=>{switch(e.$size){case"small":return"0.8125rem";case"large":return"0.9375rem";default:return"0.875rem"}}};
  }

  /* Mobile landscape */
  @media (max-width: 640px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.5rem 1rem";case"large":return"0.75rem 1.5rem";default:return"0.625rem 1.375rem"}}};
    font-size: ${e=>{switch(e.$size){case"small":return"0.8125rem";case"large":return"0.9375rem";default:return"0.875rem"}}};
    border-radius: 2rem;
  }

  /* Mobile portrait */
  @media (max-width: 480px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.5rem 0.9375rem";case"large":return"0.75rem 1.375rem";default:return"0.625rem 1.25rem"}}};
    font-size: ${e=>{switch(e.$size){case"small":return"0.8125rem";case"large":return"0.9375rem";default:return"0.875rem"}}};
  }

  /* iPhone 14 Pro Max, iPhone 13 Pro Max */
  @media (max-width: 430px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.5rem 0.875rem";case"large":return"0.6875rem 1.25rem";default:return"0.625rem 1.125rem"}}};
  }

  /* iPhone 12 Pro, iPhone 13 */
  @media (max-width: 390px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.5rem 0.875rem";case"large":return"0.6875rem 1.125rem";default:return"0.5625rem 1rem"}}};
    font-size: ${e=>{switch(e.$size){case"small":return"0.75rem";case"large":return"0.875rem";default:return"0.8125rem"}}};
  }

  /* iPhone SE, iPhone 12 mini */
  @media (max-width: 375px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.5rem 0.875rem";case"large":return"0.6875rem 1.125rem";default:return"0.5625rem 1rem"}}};
    font-size: ${e=>{switch(e.$size){case"small":return"0.75rem";case"large":return"0.875rem";default:return"0.8125rem"}}};
    border-radius: 1.75rem;
  }

  /* Extra small phones */
  @media (max-width: 360px) {
    padding: ${e=>{switch(e.$size){case"small":return"0.5rem 0.75rem";case"large":return"0.625rem 1rem";default:return"0.5rem 0.875rem"}}};
    font-size: ${e=>{switch(e.$size){case"small":return"0.75rem";case"large":return"0.8125rem";default:return"0.75rem"}}};
    border-radius: 1.5rem;
  }

  &:hover:not(:disabled) {
    background: ${e=>{switch(e.$variant){case"secondary":return d.colors.secondaryDark;case"outline":return d.colors.primary;case"accent":return d.colors.accentDark;default:return d.colors.ctaHover}}};

    color: ${e=>{switch(e.$variant){case"outline":return"white";default:return"white"}}};

    box-shadow: ${d.shadows.md};
  }

  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    
    &:active:not(:disabled) {
      background: ${e=>{switch(e.$variant){case"secondary":return d.colors.secondaryDark;case"outline":return d.colors.primary;case"accent":return d.colors.accentDark;default:return d.colors.ctaHover}}};
      
      color: ${e=>{switch(e.$variant){case"outline":return"white";default:return"white"}}};
      
      opacity: 0.9;
    }
  }

  &:focus-visible {
    outline: 2px solid ${d.colors.accent};
    outline-offset: 3px;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    will-change: auto;
  }
`;const CM=()=>{const[e,t]=k.useState({name:"",email:"",phone:"",service:"",message:""}),i=a=>{t({...e,[a.target.name]:a.target.value})},n=a=>{a.preventDefault(),console.log("Form submitted:",e),alert("Thank you! Your message has been sent. I'll be in touch soon. 🙏")},o=["Personalized Yoga Coaching","Emotional Wellness Mentoring","Mindset & NLP Coaching","Stress Relief Sessions","Holistic Transformation","Confidence Building","Not sure yet - Need guidance"];return r.jsxs(zM,{children:[r.jsx(TM,{children:r.jsx("div",{className:"container",children:r.jsxs(PM,{as:j.div,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:[r.jsx(MM,{children:"Let's Connect"}),r.jsx(AM,{children:"Begin Your Healing Journey Today"}),r.jsx(LM,{children:"Every transformation starts with a conversation. Share your story, ask your questions, and let's explore how we can work together to create the life you deserve."})]})})}),r.jsx(EM,{className:"section",children:r.jsx("div",{className:"container",children:r.jsxs(IM,{children:[r.jsxs(RM,{as:j.div,initial:{opacity:0,x:-40},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsx(BM,{children:"Send Me a Message"}),r.jsx(FM,{children:"Fill out the form below and I'll get back to you within 24 hours. ✨"}),r.jsxs(WM,{onSubmit:n,children:[r.jsxs(Mr,{children:[r.jsxs(Ar,{htmlFor:"name",children:["Your Name ",r.jsx(va,{children:"*"})]}),r.jsx(Sd,{type:"text",id:"name",name:"name",value:e.name,onChange:i,placeholder:"What should I call you?",required:!0})]}),r.jsxs(Mr,{children:[r.jsxs(Ar,{htmlFor:"email",children:["Email Address ",r.jsx(va,{children:"*"})]}),r.jsx(Sd,{type:"email",id:"email",name:"email",value:e.email,onChange:i,placeholder:"your@email.com",required:!0})]}),r.jsxs(Mr,{children:[r.jsx(Ar,{htmlFor:"phone",children:"Phone Number (Optional)"}),r.jsx(Sd,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:i,placeholder:"+91 XXX XXX XXXX"})]}),r.jsxs(Mr,{children:[r.jsxs(Ar,{htmlFor:"service",children:["Service You're Interested In ",r.jsx(va,{children:"*"})]}),r.jsxs(DM,{id:"service",name:"service",value:e.service,onChange:i,required:!0,children:[r.jsx("option",{value:"",children:"Select a service..."}),o.map((a,s)=>r.jsx("option",{value:a,children:a},s))]})]}),r.jsxs(Mr,{children:[r.jsxs(Ar,{htmlFor:"message",children:["Tell Me About Your Journey ",r.jsx(va,{children:"*"})]}),r.jsx(VM,{id:"message",name:"message",value:e.message,onChange:i,placeholder:"What brings you here? What are you hoping to achieve? Share as much or as little as you're comfortable with...",rows:"6",required:!0})]}),r.jsxs(NM,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(H6,{}),"Send Message"]})]})]}),r.jsxs(OM,{as:j.div,initial:{opacity:0,x:40},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsxs(_M,{children:[r.jsx(HM,{children:"Other Ways to Connect"}),r.jsxs(UM,{children:[r.jsxs(Cd,{children:[r.jsx(zd,{children:r.jsx(rn,{})}),r.jsxs(Td,{children:[r.jsx(Pd,{children:"Instagram"}),r.jsx(Md,{href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer",children:"@cyd_bkshikha"}),r.jsx(Ad,{children:"Daily wellness tips & inspiration"})]})]}),r.jsxs(Cd,{children:[r.jsx(zd,{children:r.jsx(As,{})}),r.jsxs(Td,{children:[r.jsx(Pd,{children:"Email"}),r.jsx(Md,{href:"mailto:contact@bkshikha.com",children:"contact@bkshikha.com"}),r.jsx(Ad,{children:"For detailed inquiries"})]})]}),r.jsxs(Cd,{children:[r.jsx(zd,{children:r.jsx(E2,{})}),r.jsxs(Td,{children:[r.jsx(Pd,{children:"WhatsApp"}),r.jsx(Md,{href:"tel:+1234567890",children:"+91 XXX XXX XXXX"}),r.jsx(Ad,{children:"Direct booking & quick questions"})]})]})]})]}),r.jsxs(ZM,{children:[r.jsx(YM,{children:"📅"}),r.jsx(QM,{children:"Free Consultation Call"}),r.jsx(GM,{children:"Not sure where to start? Book a complimentary 15-minute consultation call where we'll discuss your goals and find the perfect service for you."}),r.jsx(KM,{children:"No pressure, no sales pitch - just a heartfelt conversation about your wellness journey."})]}),r.jsxs(qM,{children:[r.jsx(XM,{children:'"The journey of a thousand miles begins with a single step."'}),r.jsx(JM,{children:"- Lao Tzu"})]})]})]})})}),r.jsx(eA,{className:"section",children:r.jsxs("div",{className:"container",children:[r.jsx(Bs,{subtitle:"Common Questions",children:"What You Might Be Wondering"}),r.jsxs(tA,{children:[r.jsxs(ba,{as:j.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[r.jsx(ka,{children:"How long does each session last?"}),r.jsx(ja,{children:"Session lengths vary by service: Yoga sessions are typically 60 minutes, emotional wellness and NLP coaching are 75-90 minutes, and stress relief sessions are 45 minutes."})]}),r.jsxs(ba,{as:j.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:[r.jsx(ka,{children:"Are sessions online or in-person?"}),r.jsx(ja,{children:"I offer both! Online sessions via Zoom are available worldwide. In-person sessions are available in select locations. We'll discuss what works best for you during our consultation."})]}),r.jsxs(ba,{as:j.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:[r.jsx(ka,{children:"What if I'm a complete beginner?"}),r.jsx(ja,{children:"Perfect! I work with people at all levels. Every practice is personalized to your current abilities and goals. There's no judgment, only support and guidance."})]}),r.jsxs(ba,{as:j.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.3},children:[r.jsx(ka,{children:"How quickly will I see results?"}),r.jsx(ja,{children:"Many clients feel shifts after the first session - increased calm, clarity, or hope. Lasting transformation typically unfolds over 8-12 weeks with consistent practice. Everyone's journey is unique."})]})]})]})})]})},zM=l.div``,TM=l.section`
  padding: 6rem 0 4rem;
  background: linear-gradient(
    135deg,
    ${d.colors.background} 0%,
    rgba(206, 197, 173, 0.15) 50%,
    ${d.colors.backgroundAlt} 100%
  );
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 30% 20%, rgba(34, 55, 27, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`,PM=l.div`
  max-width: 800px;
  margin: 0 auto;
`,MM=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.95rem;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1rem;
`,AM=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #22371b;
  margin: 0 0 1.5rem;
  line-height: 1.2;
`,LM=l.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #21371a;
  opacity: 0.85;
  margin: 0;
`,EM=l.section`
  background: ${d.colors.backgroundAlt};
`,IM=l.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    gap: 5rem;
  }
`,RM=l.div``,BM=l.h2`
  font-family: ${d.fonts.heading};
  font-size: 2.25rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 1rem;
`,FM=l.p`
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #21371a;
  opacity: 0.8;
  margin: 0 0 2.5rem;
`,WM=l.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Mr=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ar=l.label`
  font-family: ${d.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: #21371a;
`,va=l.span`
  color: #c45e4a;
`,Sd=l.input`
  padding: 1rem 1.25rem;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  color: #21371a;
  background: white;
  border: 2px solid rgba(206, 197, 173, 0.4);
  border-radius: ${d.borderRadius.lg};
  transition: all ${d.transitions.base};

  &:focus {
    outline: none;
    border-color: #22371b;
    box-shadow: 0 0 0 3px rgba(34, 55, 27, 0.15);
  }

  &::placeholder {
    color: rgba(33, 55, 26, 0.5);
  }
`,DM=l.select`
  padding: 1rem 1.25rem;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  color: #21371a;
  background: white;
  border: 2px solid rgba(206, 197, 173, 0.4);
  border-radius: ${d.borderRadius.lg};
  transition: all ${d.transitions.base};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #22371b;
    box-shadow: 0 0 0 3px rgba(34, 55, 27, 0.15);
  }
`,VM=l.textarea`
  padding: 1rem 1.25rem;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.7;
  color: #21371a;
  background: white;
  border: 2px solid rgba(206, 197, 173, 0.4);
  border-radius: ${d.borderRadius.lg};
  resize: vertical;
  transition: all ${d.transitions.base};

  &:focus {
    outline: none;
    border-color: #22371b;
    box-shadow: 0 0 0 3px rgba(34, 55, 27, 0.15);
  }

  &::placeholder {
    color: rgba(33, 55, 26, 0.5);
  }
`,NM=l(j.button)`
  padding: 1.125rem 2.5rem;
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #22371b 0%, #2d4a23 100%);
  border: none;
  border-radius: ${d.borderRadius.full};
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(34, 55, 27, 0.3);
  transition: all ${d.transitions.base};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  align-self: flex-start;

  &:hover {
    background: linear-gradient(135deg, #2d4a23 0%, #22371b 100%);
    box-shadow: 0 6px 20px rgba(34, 55, 27, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 100%;
  }
`,OM=l.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,_M=l.div`
  background: white;
  padding: 2.5rem;
  border-radius: ${d.borderRadius.xl};
  box-shadow: 0 4px 20px rgba(34, 55, 27, 0.08);
  border: 1px solid rgba(206, 197, 173, 0.2);
`,HM=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 2rem;
`,UM=l.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Cd=l.div`
  display: flex;
  gap: 1.25rem;
`,zd=l.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    #22371b 0%,
    #2d4a23 100%
  );
  color: #cec5ad;
  font-size: 1.5rem;
  border-radius: ${d.borderRadius.lg};
`,Td=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Pd=l.h4`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #22371b;
  margin: 0;
`,Md=l.a`
  font-size: 1rem;
  font-weight: 500;
  color: #22371b;
  text-decoration: none;
  transition: all ${d.transitions.base};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #cec5ad;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #21371a;
    
    &::after {
      width: 100%;
    }
  }
`,Ad=l.p`
  font-size: 0.9rem;
  color: rgba(33, 55, 26, 0.65);
  margin: 0;
`,ZM=l.div`
  background: linear-gradient(
    135deg,
    #22371b 0%,
    #2d4a23 50%,
    #22371b 100%
  );
  padding: 2.5rem;
  border-radius: ${d.borderRadius.xl};
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(206, 197, 173, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`,YM=l.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,QM=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: white;
  margin: 0 0 1rem;
`,GM=l.p`
  font-size: 1.0625rem;
  line-height: 1.7;
  margin: 0 0 1rem;
  opacity: 0.95;
`,KM=l.p`
  font-size: 0.9rem;
  font-style: italic;
  margin: 0;
  opacity: 0.9;
`,qM=l.div`
  background: white;
  padding: 2rem;
  border-radius: ${d.borderRadius.xl};
  border-left: 4px solid #cec5ad;
  box-shadow: 0 2px 12px rgba(34, 55, 27, 0.06);
`,XM=l.p`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-style: italic;
  line-height: 1.6;
  color: #22371b;
  margin: 0 0 0.75rem;
`,JM=l.p`
  font-size: 0.95rem;
  color: #cec5ad;
  font-weight: 500;
  margin: 0;
`,eA=l.section`
  background: white;
`,tA=l.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    gap: 2.5rem;
  }
`,ba=l.div`
  background: ${d.colors.background};
  padding: 2rem;
  border-radius: ${d.borderRadius.lg};
  border: 2px solid rgba(206, 197, 173, 0.3);
  transition: all ${d.transitions.base};

  &:hover {
    border-color: #cec5ad;
    box-shadow: 0 4px 15px rgba(34, 55, 27, 0.08);
    transform: translateY(-2px);
  }
`,ka=l.h4`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 0.75rem;
`,ja=l.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #21371a;
  opacity: 0.85;
  margin: 0;
`,iA=()=>{const e=k.useRef(null),t=k.useRef(null),i=k.useRef(null),n=k.useRef(null),o=O(e,{once:!0,amount:.3}),a=O(t,{once:!0,amount:.3}),s=O(i,{once:!0,amount:.2}),c=O(n,{once:!0,amount:.3}),m={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.1}}},p={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}},u=[{icon:r.jsx(mt,{}),title:"Mind-First Healing",description:"True healing begins with the mind. When the mind is calm and balanced, the body naturally heals and transforms.",gradient:"linear-gradient(135deg, #5a8a62, #8ecfb3)",color:"#5a8a62"},{icon:r.jsx(dl,{}),title:"Root-Cause Oriented",description:"We address the underlying causes, not just symptoms, empowering sustainable transformation and lasting wellness.",gradient:"linear-gradient(135deg, #c9a227, #e0c45e)",color:"#c9a227"},{icon:r.jsx(Vo,{}),title:"Holistic Integration",description:"Combining ancient yogic wisdom with modern NLP, gut health science, and mindful nutrition for complete well-being.",gradient:"linear-gradient(135deg, #8ecfb3, #b8e0d2)",color:"#8ecfb3"},{icon:r.jsx(rr,{}),title:"Compassionate Guidance",description:"Every individual's journey is unique. We provide personalized, compassionate support adapted to your needs.",gradient:"linear-gradient(135deg, #6a9b72, #8bb894)",color:"#6a9b72"}],h=[{title:"Yoga & Breathing",description:"Improve flexibility and strength with yoga, stretching exercises, and breathing techniques.",image:"https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&h=600&fit=crop&q=100",icon:"🧘‍♀️"},{title:"Meditation & Mindfulness",description:"Cultivate peace and balance through meditation and mindfulness practices.",image:"https://images.unsplash.com/photo-1529693662653-9d480530a697?w=800&h=600&fit=crop&q=100",icon:"🪷"},{title:"Mind Coaching (NLP)",description:"Transform your mindset using powerful NLP tools and techniques.",image:"https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=800&h=600&fit=crop&q=100",icon:"🧠"},{title:"Emotional Wellness",description:"Comprehensive support for stress, anxiety, and emotional well-being.",image:"https://images.unsplash.com/photo-1499728603263-13571c13a2d7?w=800&h=600&fit=crop&q=100",icon:"💚"},{title:"Counseling Services",description:"Personalized counseling for children, adolescents, and adults.",image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=100",icon:"🤝"},{title:"Relationship Healing",description:"Restore harmony and emotional healing in your relationships.",image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=100",icon:"❤️"},{title:"Gut Health",description:"Restore your well-being with natural healing therapies and gut health correction.",image:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=100",icon:"🌿"},{title:"Weight Management",description:"Guidance on nourishing your body and mind with healthy weight loss programs.",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=100",icon:"🍊"},{title:"Lifestyle Transformation",description:"Deepen your practice with immersive lifestyle and habit transformation.",image:"https://images.unsplash.com/photo-1506126279646-a697353d3166?w=800&h=600&fit=crop&q=100",icon:"⚖️"}],f=[{title:"Children & Students",description:"Supporting young minds through emotional challenges, stress management, and building healthy habits early.",image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop&q=100",emoji:"🎓"},{title:"Working Professionals",description:"Managing workplace stress, achieving work-life balance, and maintaining physical and mental wellness.",image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=100",emoji:"💼"},{title:"Adults & Seniors",description:"Navigating life transitions, relationship challenges, and maintaining vitality through holistic practices.",image:"https://images.unsplash.com/photo-1505455184862-554165e5f6ba?w=1200&h=800&fit=crop&q=100",emoji:"🌟"},{title:"Wellness Seekers",description:"Anyone seeking digestive health, weight management, emotional balance, and a sustainable healthy lifestyle.",image:"https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1200&h=800&fit=crop&q=100",emoji:"🧘"}];return r.jsxs(nA,{children:[r.jsxs(rA,{ref:e,children:[r.jsx($f,{className:"left",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"#d0dcd2",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"#d0dcd2",strokeWidth:"1"}),r.jsx("path",{d:"M60 60L30 100",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L35 160",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L40 220",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 60L90 100",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L85 160",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L80 220",stroke:"#d0dcd2",strokeWidth:"0.8"})]})}),r.jsx($f,{className:"right",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"#d0dcd2",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"#d0dcd2",strokeWidth:"1"}),r.jsx("path",{d:"M60 60L30 100",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L35 160",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L40 220",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 60L90 100",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L85 160",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L80 220",stroke:"#d0dcd2",strokeWidth:"0.8"})]})}),r.jsx(Vi,{children:r.jsxs(oA,{as:j.div,variants:m,initial:"hidden",animate:o?"visible":"hidden",children:[r.jsx(j.div,{variants:p,children:r.jsx(aA,{children:"Our Philosophy"})}),r.jsx(j.div,{variants:p,children:r.jsx(sA,{children:"Learn about our holistic approach to health & wellbeing"})})]})}),r.jsx(lA,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",fill:"#ffffff"})})})]}),r.jsx(dA,{children:r.jsx(Vi,{children:r.jsxs(cA,{as:j.div,variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[r.jsx(mA,{as:j.div,variants:p,children:r.jsxs(pA,{children:[r.jsx(hA,{children:r.jsx("svg",{viewBox:"0 0 400 500",fill:"none",children:r.jsx("path",{d:"M320,250 C350,380 280,470 180,480 C80,490 20,400 25,280 C30,160 90,40 200,30 C310,20 290,120 320,250 Z",fill:"#e8f0ea"})})}),r.jsx(uA,{src:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=1500&fit=crop&q=100",alt:"BK Shikha - Holistic Wellness Coach",loading:"lazy"}),r.jsxs(l5,{as:j.div,initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.5,duration:.4},children:[r.jsx("span",{children:"12+"}),r.jsx("small",{children:"Years in Yoga"})]}),r.jsxs(fA,{as:j.div,initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.7,duration:.4},children:[r.jsx("span",{children:"15+"}),r.jsx("small",{children:"Years in Meditation"})]})]})}),r.jsxs(gA,{as:j.div,variants:p,children:[r.jsx($a,{children:"Our Story"}),r.jsx(xA,{children:"Discover the Journey Behind BK Shikha's Wellness Mission"}),r.jsxs(Sf,{children:["BK Shikha is a dedicated ",r.jsx("strong",{children:"Holistic Wellness Coach"})," with over 12 years in Yoga and 15 years in Meditation. As a certified ",r.jsx("strong",{children:"NLP Practitioner"}),", ",r.jsx("strong",{children:"Gut Health Expert"}),", and ",r.jsx("strong",{children:"Counselor"}),", she specializes in mind-body healing, supporting children, teenagers, and adults through stress, anxiety, emotional wellness, and relationship challenges."]}),r.jsx(Sf,{children:"Her holistic approach combines ancient wisdom with modern science. True healing begins with the mind — when calm and balanced, the body naturally transforms, empowering long-term physical, mental, and emotional well-being."}),r.jsxs(yA,{children:[r.jsxs(Ld,{children:[r.jsx(Ed,{children:r.jsx(mt,{})}),r.jsxs(Id,{children:[r.jsx("span",{children:"Mind-Body"}),r.jsx("small",{children:"Healing Expert"})]})]}),r.jsxs(Ld,{children:[r.jsx(Ed,{children:r.jsx(M0,{})}),r.jsxs(Id,{children:[r.jsx("span",{children:"NLP"}),r.jsx("small",{children:"Certified Practitioner"})]})]}),r.jsxs(Ld,{children:[r.jsx(Ed,{children:r.jsx(rr,{})}),r.jsxs(Id,{children:[r.jsx("span",{children:"All Ages"}),r.jsx("small",{children:"Children to Adults"})]})]})]})]})]})})}),r.jsx(wA,{children:r.jsx(Vi,{children:r.jsxs(vA,{as:j.div,variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[r.jsxs(bA,{as:j.div,variants:p,children:[r.jsx($a,{children:"Wellness Philosophy"}),r.jsx(Cf,{children:"True Healing Begins with the Mind"}),r.jsx(jA,{children:'"When the mind is calm and balanced, the body naturally heals and transforms."'}),r.jsx(zf,{children:"This fundamental principle guides everything we do at BK Shikha. We believe that lasting wellness cannot be achieved by treating symptoms alone. True transformation happens when we address the root causes — the thoughts, beliefs, emotions, and patterns that shape our physical and mental state."}),r.jsx(zf,{children:"Our holistic approach integrates ancient wisdom with modern science, combining yoga, meditation, NLP techniques, gut health expertise, and lifestyle coaching to create sustainable, meaningful change in your life."})]}),r.jsx(kA,{as:j.div,variants:p,children:r.jsxs($A,{children:[r.jsx(SA,{children:r.jsx("svg",{viewBox:"0 0 400 450",fill:"none",children:r.jsx("path",{d:"M350,225 C350,350 275,425 175,425 C75,425 25,350 25,225 C25,100 100,25 200,25 C300,25 350,100 350,225 Z",fill:"#8ecfb3"})})}),r.jsx(CA,{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&h=1200&fit=crop&q=100",alt:"Meditation and mindfulness practice",loading:"lazy"})]})})]})})}),r.jsxs(zA,{ref:t,children:[r.jsx(TA,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,60 C360,0 1080,120 1440,60 L1440,0 L0,0 Z",fill:"#ffffff"})})}),r.jsx(Vi,{children:r.jsxs(MA,{as:j.div,variants:m,initial:"hidden",animate:a?"visible":"hidden",children:[r.jsx(j.div,{variants:p,children:r.jsxs(AA,{children:[r.jsx($a,{className:"center",children:"Core Principles"}),r.jsx(LA,{children:"Our Approach to Wellness"})]})}),r.jsx(EA,{children:u.map((g,w)=>r.jsx(d5,{as:j.div,variants:p,whileHover:{y:-8,scale:1.02},transition:{duration:.3},$gradient:g.gradient,children:r.jsxs(IA,{children:[r.jsx(RA,{$color:g.color,children:r.jsx(BA,{children:g.icon})}),r.jsx(FA,{children:g.title}),r.jsx(WA,{children:g.description}),r.jsx(DA,{children:r.jsx(me,{})})]})},w))})]})}),r.jsx(PA,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",fill:"#ffffff"})})})]}),r.jsxs(VA,{ref:i,children:[r.jsx(NA,{}),r.jsx(Vi,{children:r.jsxs(OA,{as:j.div,variants:m,initial:"hidden",animate:s?"visible":"hidden",children:[r.jsxs(_A,{as:j.div,variants:p,children:[r.jsxs(HA,{children:[r.jsx(Cf,{className:"centered",children:"Our Offerings"}),r.jsx(UA,{children:r.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",children:[r.jsx("path",{d:"M20 8 C20 8 15 12 15 18 C15 24 20 28 20 28 C20 28 25 24 25 18 C25 12 20 8 20 8 Z",stroke:"#c9a227",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M12 16 C12 16 8 18 8 22 C8 26 12 30 12 30",stroke:"#c9a227",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M28 16 C28 16 32 18 32 22 C32 26 28 30 28 30",stroke:"#c9a227",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M10 22 C10 22 6 24 6 27 C6 30 10 32 10 32",stroke:"#c9a227",strokeWidth:"0.6",fill:"none"}),r.jsx("path",{d:"M30 22 C30 22 34 24 34 27 C34 30 30 32 30 32",stroke:"#c9a227",strokeWidth:"0.6",fill:"none"})]})})]}),r.jsx(ZA,{children:"A gentle path towards balance, strength, and inner peace."}),r.jsx(YA,{children:"BK Shikha brings together over 12 years of Yoga experience, 15 years of Meditation practice, and 2+ years of NLP expertise, offering a complete spectrum of holistic wellness services tailored to your unique needs."})]}),r.jsx(QA,{children:h.map((g,w)=>r.jsxs(W0,{as:j.div,variants:p,whileHover:{y:-10,scale:1.02},transition:{duration:.4},children:[r.jsxs(GA,{children:[r.jsx("img",{src:g.image,alt:g.title,loading:"lazy"}),r.jsx(KA,{children:r.jsx(qA,{children:g.icon})})]}),r.jsxs(XA,{children:[r.jsx(JA,{children:g.title}),r.jsx(eL,{children:g.description})]})]},w))})]})})]}),r.jsx(tL,{ref:n,children:r.jsx(Vi,{children:r.jsxs(iL,{as:j.div,variants:m,initial:"hidden",animate:c?"visible":"hidden",children:[r.jsx(j.div,{variants:p,children:r.jsxs(nL,{children:[r.jsx($a,{className:"center",children:"Who We Serve"}),r.jsx(rL,{children:"Who Can Benefit"})]})}),r.jsx(oL,{children:f.map((g,w)=>r.jsxs(D0,{as:j.div,variants:p,whileHover:{y:-8},transition:{duration:.4},children:[r.jsxs(aL,{children:[r.jsx(sL,{src:g.image,alt:g.title,loading:"lazy"}),r.jsx(lL,{children:r.jsx(dL,{children:g.emoji})})]}),r.jsxs(cL,{children:[r.jsx(mL,{children:g.title}),r.jsx(pL,{children:g.description})]})]},w))})]})})}),r.jsx(hL,{children:r.jsx(Vi,{children:r.jsx(uL,{as:j.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:r.jsxs(fL,{children:[r.jsx(gL,{children:"Experience the Transformation"}),r.jsx(xL,{children:"Ready to Begin Your Wellness Journey?"}),r.jsx(yL,{children:"Discover how our holistic, mind-first approach can help you achieve lasting physical, mental, and emotional well-being."}),r.jsxs(wL,{to:"/contact",children:[r.jsx("span",{children:"Book Your Consultation"}),r.jsx(me,{})]})]})})})})]})},nA=l.div`
  overflow-x: hidden;
`,Vi=l.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`,rA=l.section`
  min-height: 55vh;
  background: 
    linear-gradient(180deg, rgba(238, 244, 239, 0.92) 0%, rgba(220, 232, 222, 0.88) 100%),
    url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&h=1080&fit=crop&q=100');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8rem 0 6rem;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.tablet}) {
    min-height: 45vh;
    padding: 6rem 0 4rem;
    background-attachment: scroll;
  }
`,$f=l.div`
  position: absolute;
  width: 100px;
  height: 280px;
  opacity: 0.6;
  pointer-events: none;

  &.left {
    left: 2%;
    top: 50%;
    transform: translateY(-50%) rotate(-10deg);
  }

  &.right {
    right: 2%;
    top: 50%;
    transform: translateY(-50%) rotate(10deg) scaleX(-1);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    display: none;
  }
`,oA=l.div`
  text-align: center;
`,aA=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 400;
  color: #2a3a2e;
  font-style: italic;
  margin: 0 0 1rem 0;
`,sA=l.p`
  font-family: ${d.fonts.body};
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  color: #5a8a62;
  font-style: italic;
  margin: 0;
`,lA=l.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`,dA=l.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,cA=l.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,mA=l.div`
  position: relative;
`,pA=l.div`
  position: relative;
  padding: 2rem;
`,hA=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`,uA=l.img`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
  height: auto;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: 200px 200px 100px 100px;
  box-shadow: 0 25px 60px rgba(42, 58, 46, 0.15);
`,l5=l.div`
  position: absolute;
  top: 15%;
  right: 0;
  background: linear-gradient(135deg, #5a8a62 0%, #6a9b72 100%);
  color: white;
  padding: 1rem 1.25rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(90, 138, 98, 0.3);
  z-index: 2;

  span {
    display: block;
    font-family: ${d.fonts.heading};
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1;
  }

  small {
    display: block;
    font-family: ${d.fonts.body};
    font-size: 0.75rem;
    font-weight: 500;
    margin-top: 0.25rem;
    opacity: 0.9;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    top: 10%;
    right: 5%;
    padding: 0.75rem 1rem;
    
    span {
      font-size: 1.5rem;
    }
  }
`,fA=l(l5)`
  top: auto;
  bottom: 20%;
  right: -10px;
  background: linear-gradient(135deg, #c9a227 0%, #e0c45e 100%);
  box-shadow: 0 10px 30px rgba(201, 162, 39, 0.3);

  @media (max-width: ${d.breakpoints.mobile}) {
    bottom: 15%;
    right: 0;
  }
`,gA=l.div``,xA=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.875rem, 4vw, 2.5rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.25;
  margin-bottom: 1.5rem;
`,Sf=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.85;
  color: #6b7c6f;
  margin-bottom: 1.25rem;

  strong {
    color: #5a8a62;
    font-weight: 600;
  }
`,yA=l.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e8f0ea;

  @media (max-width: ${d.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1.25rem;
  }
`,Ld=l.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Ed=l.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e8f0ea 0%, #d8e8dc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5a8a62;
  font-size: 1rem;
`,Id=l.div`
  span {
    display: block;
    font-family: ${d.fonts.body};
    font-size: 0.9375rem;
    font-weight: 600;
    color: #2a3a2e;
    line-height: 1.2;
  }

  small {
    display: block;
    font-family: ${d.fonts.body};
    font-size: 0.8125rem;
    color: #6b7c6f;
    margin-top: 0.125rem;
  }
`,wA=l.section`
  padding: 6rem 0;
  background: #ffffff;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,vA=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,bA=l.div``,kA=l.div`
  position: relative;

  @media (max-width: ${d.breakpoints.tablet}) {
    order: -1;
  }
`,$a=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 0.02em;
  color: #c9a227;
  margin-bottom: 0.75rem;

  &.center {
    display: block;
    text-align: center;
  }
`,Cf=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  &.centered {
    text-align: center;
    margin-bottom: 0;
  }
`,jA=l.p`
  font-family: ${d.fonts.heading};
  font-size: 1.375rem;
  font-style: italic;
  color: #5a8a62;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  border-left: 3px solid #c9a227;
`,zf=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.85;
  color: #6b7c6f;
  margin-bottom: 1.25rem;
`,$A=l.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
`,SA=l.div`
  position: absolute;
  width: 110%;
  height: 110%;
  left: -5%;
  top: -5%;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }
`,CA=l.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  border-radius: 0 80px 0 80px;
  object-fit: cover;
  aspect-ratio: 5/6;
`,zA=l.section`
  padding: 8rem 0;
  background: linear-gradient(180deg, #f0f5f1 0%, #e8f0e9 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`,TA=l.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`,PA=l.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`,MA=l.div``,AA=l.div`
  text-align: center;
  margin-bottom: 4rem;
`,LA=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
`,EA=l.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,d5=l.div`
  background: ${e=>e.$gradient};
  padding: 3px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.$gradient};
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 0.1;
  }
`,IA=l.div`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  padding: 2.5rem 2rem;
  border-radius: 22px;
  position: relative;
  height: 100%;
`,RA=l.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: ${e=>e.$color};
    border-radius: 50%;
    opacity: 0.15;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.15; }
    50% { transform: scale(1.1); opacity: 0.25; }
  }
`,BA=l.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0.9));
  border-radius: 50%;
  color: ${e=>{var t,i;return((i=(t=e.theme)==null?void 0:t.colors)==null?void 0:i.primary)||"#5a8a62"}};
  font-size: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 1;
  border: 1px solid rgba(90, 138, 98, 0.1);
`,FA=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #2a3a2e;
  margin-bottom: 1rem;
  line-height: 1.3;
`,WA=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #6b7c6f;
  margin-bottom: 0;
`,DA=l.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(90, 138, 98, 0.08);
  border-radius: 50%;
  color: #5a8a62;
  font-size: 1.125rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;

  ${d5}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`,VA=l.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #faf7f2 0%, #f5ede4 50%, #f8f3eb 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`,NA=l.div`
  position: absolute;
  inset: 0;
  opacity: 0.4;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(200, 162, 39, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(90, 138, 98, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(142, 207, 179, 0.05) 0%, transparent 60%);
  pointer-events: none;
`,OA=l.div``,_A=l.div`
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
`,HA=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,UA=l.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,ZA=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  font-style: italic;
  color: #7a6f5d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,YA=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.75;
  color: #6b7c6f;
  margin: 0;
`,QA=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,W0=l.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.6);

  &:hover {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
    transform: translateY(-10px);
    border-color: rgba(200, 162, 39, 0.3);
  }
`,GA=l.div`
  position: relative;
  height: 180px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${W0}:hover & img {
    transform: scale(1.1);
  }
`,KA=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(42, 58, 46, 0.1) 0%, rgba(42, 58, 46, 0.4) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,qA=l.div`
  font-size: 3.5rem;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
  transition: transform 0.4s ease;

  ${W0}:hover & {
    transform: scale(1.15) rotate(5deg);
  }
`,XA=l.div`
  padding: 1.75rem 1.5rem;
  text-align: center;
`,JA=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 500;
  color: #2a3a2e;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`,eL=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.65;
  color: #6b7c6f;
  margin: 0;
`,tL=l.section`
  padding: 6rem 0;
  background: #f8f9f6;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,iL=l.div``,nL=l.div`
  text-align: center;
  margin-bottom: 3rem;
`,rL=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
`,oL=l.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,D0=l.div`
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(90, 138, 98, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);

  &:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    transform: translateY(-8px);
    border-color: rgba(90, 138, 98, 0.15);
  }
`,aL=l.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`,sL=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${D0}:hover & {
    transform: scale(1.1);
  }
`,lL=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(42, 58, 46, 0.7) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1.5rem;
`,dL=l.div`
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  transition: transform 0.4s ease;

  ${D0}:hover & {
    transform: scale(1.2) rotate(10deg);
  }
`,cL=l.div`
  padding: 2rem 1.75rem;
`,mL=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.375rem;
  font-weight: 600;
  color: #2a3a2e;
  margin-bottom: 0.875rem;
  line-height: 1.3;
`,pL=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #6b7c6f;
  margin: 0;
`,hL=l.section`
  padding: 4rem 0 6rem;
  background: #f8f9f6;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 3rem 0 4rem;
  }
`,uL=l.div`
  background: linear-gradient(135deg, #2a3a2e 0%, #3d5a40 100%);
  border-radius: 28px;
  padding: 4rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 2.5rem 2rem;
  }
`,fL=l.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`,gL=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  color: #c9a227;
  margin-bottom: 0.75rem;
`,xL=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 400;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 1.25rem;
`,yL=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
`,wL=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.125rem 2.75rem;
  background: linear-gradient(135deg, #5a8a62, #6a9b72);
  color: #ffffff;
  border: none;
  border-radius: 100px;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #6a9b72, #7aab82);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(90, 138, 98, 0.3);

    &::before {
      opacity: 1;
    }
  }

  svg {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  span {
    position: relative;
    z-index: 1;
  }
`,vL=({testimonials:e,autoplay:t=!0,autoplayInterval:i=5e3,colors:n={name:d.colors.primary,designation:d.colors.textLight,testimony:d.colors.text,arrowBackground:d.colors.cta,arrowForeground:"#ffffff",arrowHoverBackground:d.colors.ctaHover},fontSizes:o={name:"1.5rem",designation:"1rem",quote:"1.125rem"}})=>{const[a,s]=k.useState(0),[c,m]=k.useState(0),p=k.useCallback(()=>{m(1),s(w=>(w+1)%e.length)},[e.length]),u=k.useCallback(()=>{m(-1),s(w=>(w-1+e.length)%e.length)},[e.length]);k.useEffect(()=>{if(!t)return;const w=setInterval(p,i);return()=>clearInterval(w)},[t,i,p]);const h=e[a],f={enter:w=>({x:w>0?100:-100,opacity:0}),center:{x:0,opacity:1},exit:w=>({x:w<0?100:-100,opacity:0})},g={enter:w=>({scale:.8,opacity:0,rotate:w>0?10:-10}),center:{scale:1,opacity:1,rotate:0},exit:w=>({scale:.8,opacity:0,rotate:w<0?10:-10})};return r.jsxs(bL,{children:[r.jsxs(kL,{children:[r.jsx(Bt,{mode:"wait",custom:c,children:r.jsxs(jL,{custom:c,variants:f,initial:"enter",animate:"center",exit:"exit",transition:{duration:.5,ease:"easeInOut"},children:[r.jsx($L,{children:'"'}),r.jsx(SL,{style:{color:n.testimony,fontSize:o.quote},children:h.quote}),r.jsxs(CL,{children:[r.jsx(zL,{style:{color:n.name,fontSize:o.name},children:h.name}),r.jsx(TL,{style:{color:n.designation,fontSize:o.designation},children:h.designation}),h.location&&r.jsx(PL,{style:{color:n.designation},children:h.location})]})]},a)}),r.jsxs(ML,{children:[r.jsx(Tf,{onClick:u,$bgColor:n.arrowBackground,$fgColor:n.arrowForeground,$hoverColor:n.arrowHoverBackground,whileHover:{scale:1.1},whileTap:{scale:.95},children:r.jsx(A2,{})}),r.jsx(Tf,{onClick:p,$bgColor:n.arrowBackground,$fgColor:n.arrowForeground,$hoverColor:n.arrowHoverBackground,whileHover:{scale:1.1},whileTap:{scale:.95},children:r.jsx(L2,{})})]})]}),r.jsxs(AL,{children:[r.jsxs(LL,{children:[r.jsx(Bt,{mode:"wait",custom:c,children:r.jsx(EL,{custom:c,variants:g,initial:"enter",animate:"center",exit:"exit",transition:{duration:.5,ease:"easeInOut"},children:h.src?r.jsx("img",{src:h.src,alt:h.name}):r.jsx(IL,{children:h.emoji||"🧘"})},a)}),r.jsx(Pf,{$size:"120%",$opacity:.1}),r.jsx(Pf,{$size:"140%",$opacity:.05})]}),r.jsx(RL,{children:e.map((w,b)=>r.jsx(BL,{$isActive:b===a,onClick:()=>{m(b>a?1:-1),s(b)}},b))})]})]})},bL=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    flex-direction: column-reverse;
    gap: 1.5rem;
    padding: 0.75rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    flex-direction: column-reverse;
    gap: 2rem;
    padding: 1rem;
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    max-width: 1400px;
    gap: 5rem;
  }
`,kL=l.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,jL=l(j.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,$L=l.span`
  font-family: ${d.fonts.heading};
  font-size: 5rem;
  line-height: 0.5;
  color: ${d.colors.accent};
  opacity: 0.3;
`,SL=l.p`
  font-family: ${d.fonts.body};
  line-height: 1.8;
  font-style: italic;
  margin: 0;
`,CL=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,zL=l.h4`
  font-family: ${d.fonts.heading};
  font-weight: 600;
  margin: 0;
`,TL=l.p`
  font-family: ${d.fonts.body};
  margin: 0;
`,PL=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  margin: 0;
  opacity: 0.8;
`,ML=l.div`
  display: flex;
  gap: 1rem;
`,Tf=l(j.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.$bgColor};
  color: ${e=>e.$fgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: ${e=>e.$hoverColor};
  }
`,AL=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,LL=l.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Extra small phones */
  @media (max-width: 360px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 220px;
    height: 220px;
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    width: 350px;
    height: 350px;
  }
`,EL=l(j.div)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    width: 130px;
    height: 130px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 180px;
    height: 180px;
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    width: 300px;
    height: 300px;
  }
`,IL=l.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  background: linear-gradient(
    135deg,
    ${d.colors.secondaryLight},
    ${d.colors.accentLight}
  );

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 3.5rem;
  }
`,Pf=l.div`
  position: absolute;
  width: ${e=>e.$size};
  height: ${e=>e.$size};
  border-radius: 50%;
  border: 2px solid ${d.colors.accent};
  opacity: ${e=>e.$opacity};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`,RL=l.div`
  display: flex;
  gap: 0.5rem;
`,BL=l.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.$isActive?d.colors.accent:d.colors.backgroundDark};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background: ${e=>e.$isActive?d.colors.accent:d.colors.textLight};
  }
`,FL=()=>{const e=[{quote:"BK Shikha transformed my life completely. I was drowning in work stress, constant anxiety, and felt disconnected from myself. Her yoga and mindfulness guidance gave me the peace I was desperately seeking. She has this incredible ability to understand exactly what you need without you even saying it.",name:"Priya Sharma",designation:"Software Engineer",location:"Bangalore",src:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=100"},{quote:"The confidence I've gained through her NLP coaching is nothing short of miraculous. I used to doubt myself constantly, second-guess every decision, and live in fear of judgment. BK Shikha helped me reprogram those limiting beliefs and step into my power.",name:"Anjali Verma",designation:"Entrepreneur",location:"Mumbai",src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=100"},{quote:"As a student dealing with academic pressure, family expectations, and career anxiety, I was constantly overwhelmed. BK Shikha's stress relief sessions were literally a lifesaver. She taught me breathing techniques and mindfulness practices I use every single day.",name:"Rahul Mehta",designation:"College Student",location:"Delhi",src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=100"},{quote:"I came to BK Shikha feeling stuck in every area of my life. Her holistic transformation program changed everything. It wasn't just about yoga poses or meditation; it was about redesigning my entire life with intention. Six months later, I'm living a life I only dreamed of.",name:"Kavita Singh",designation:"Marketing Manager",location:"Pune",src:"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&auto=format&fit=crop&q=100"}],t=[{name:"Priya Sharma",role:"Software Engineer",location:"Bangalore",image:"👩‍💻",text:"BK Shikha transformed my life completely. I was drowning in work stress, constant anxiety, and felt disconnected from myself. Her yoga and mindfulness guidance gave me the peace I was desperately seeking. She has this incredible ability to understand exactly what you need without you even saying it. The personalized approach, the genuine care - it's not just coaching, it's healing. I sleep better, I feel confident, and I've rediscovered joy in my life.",transformation:"From anxiety and burnout to peace and confidence",rating:5},{name:"Anjali Verma",role:"Entrepreneur",location:"Mumbai",image:"👩‍💼",text:"The confidence I've gained through her NLP coaching is nothing short of miraculous. I used to doubt myself constantly, second-guess every decision, and live in fear of judgment. BK Shikha helped me reprogram those limiting beliefs and step into my power. Her sessions are transformative - she combines practical tools with deep emotional work. Now I lead my team with confidence, speak my truth unapologetically, and trust my intuition completely.",transformation:"From self-doubt to empowered leadership",rating:5},{name:"Rahul Mehta",role:"College Student",location:"Delhi",image:"👨‍🎓",text:"As a student dealing with academic pressure, family expectations, and career anxiety, I was constantly overwhelmed. BK Shikha's stress relief sessions were literally a lifesaver. She taught me breathing techniques, mindfulness practices, and gave me tools I use every single day. What makes her special is how relatable and down-to-earth she is. She never makes you feel judged. Her guidance helped me ace my exams while staying mentally healthy.",transformation:"From overwhelm to balanced achievement",rating:5},{name:"Kavita Singh",role:"Marketing Manager",location:"Pune",image:"👩",text:"I came to BK Shikha feeling stuck in every area of my life - relationships, career, personal growth. Her holistic transformation program changed everything. It wasn't just about yoga poses or meditation; it was about redesigning my entire life with intention. She held space for my tears, celebrated my wins, and pushed me gently when I needed it. Six months later, I'm living a life I only dreamed of. This work is sacred.",transformation:"From feeling stuck to purposeful living",rating:5},{name:"Sanjay Kumar",role:"IT Professional",location:"Hyderabad",image:"👨‍💼",text:"I was skeptical about yoga and wellness coaching at first. But chronic back pain and stress-induced health issues forced me to try. BK Shikha's personalized yoga coaching not only healed my physical pain but also gave me mental clarity I hadn't experienced in years. Her scientific yet spiritual approach resonated with me. She explains the 'why' behind every practice, making it easy to commit. My life quality has improved dramatically.",transformation:"From physical pain to holistic wellness",rating:5},{name:"Meera Kapoor",role:"Stay-at-home Mom",location:"Jaipur",image:"👩‍🦰",text:"After becoming a mother, I lost myself completely. I was just 'mom', nothing more. BK Shikha's confidence and self-love coaching helped me rediscover who I am beyond my roles. She taught me that self-care isn't selfish, that my dreams still matter, and that I deserve to feel beautiful and confident. Her compassion and understanding made me feel seen for the first time in years. I'm now pursuing my passion and setting healthy boundaries.",transformation:"From lost identity to empowered woman",rating:5},{name:"Aditya Joshi",role:"Creative Professional",location:"Goa",image:"🎨",text:"BK Shikha's emotional wellness mentoring helped me process years of suppressed emotions and childhood trauma. I always thought I was 'fine' but was actually numbing myself through work and distractions. Her safe, judgment-free space allowed me to finally feel and heal. The tools she gave me for emotional regulation have been life-changing. I'm more present in my relationships, more creative in my work, and genuinely happy.",transformation:"From emotional numbness to authentic feeling",rating:5},{name:"Simran Patel",role:"HR Director",location:"Ahmedabad",image:"👩‍💼",text:"I work in a high-stress corporate environment where burnout is normalized. BK Shikha taught me that success doesn't require sacrificing my wellbeing. Through our sessions, I learned mindfulness practices that I integrate seamlessly into my workday. Her practical, no-nonsense approach fits perfectly with my lifestyle. I'm more productive, more patient with my team, and actually enjoy my life again. She's a game-changer.",transformation:"From corporate burnout to mindful success",rating:5},{name:"Rohan Desai",role:"Fitness Trainer",location:"Chennai",image:"💪",text:"Even as a fitness professional, I was missing the mind-body connection that yoga offers. BK Shikha's expertise in yogic philosophy and practice deepened my understanding of true wellness. She helped me see fitness as more than physical - it's emotional, mental, and spiritual. The knowledge I gained from her has made me a better trainer and a more balanced person. Her teachings are authentic and rooted in genuine experience.",transformation:"From physical fitness to holistic wellness",rating:5}];return r.jsxs(WL,{children:[r.jsx(DL,{children:r.jsx("div",{className:"container",children:r.jsxs(VL,{as:j.div,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:[r.jsx(NL,{children:"Transformation Stories"}),r.jsx(OL,{children:"Real People, Real Transformations"}),r.jsx(_L,{children:"These are the voices of beautiful souls who chose healing, growth, and transformation. Their journeys inspire us all."})]})})}),r.jsx(HL,{children:r.jsxs("div",{className:"container",children:[r.jsx(Bs,{subtitle:"Featured Stories",children:"Hear From Our Community"}),r.jsx(vL,{testimonials:e,autoplay:!0,autoplayInterval:6e3,colors:{name:d.colors.primary,designation:d.colors.textLight,testimony:d.colors.text,arrowBackground:d.colors.cta,arrowForeground:"#ffffff",arrowHoverBackground:d.colors.ctaHover},fontSizes:{name:"1.75rem",designation:"1rem",quote:"1.125rem"}})]})}),r.jsx(UL,{className:"section",children:r.jsx("div",{className:"container",children:r.jsx(ZL,{children:t.map((i,n)=>r.jsxs(YL,{as:j.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.5,delay:n%3*.1},children:[r.jsx(QL,{children:'"'}),r.jsx(GL,{children:i.text}),r.jsxs(KL,{children:["✨ ",i.transformation]}),r.jsx(qL,{children:Array.from({length:i.rating}).map((o,a)=>r.jsx(XL,{children:r.jsx(ti,{fill:d.colors.accent})},a))}),r.jsxs(JL,{children:[r.jsx(eE,{children:i.image}),r.jsxs(tE,{children:[r.jsx(iE,{children:i.name}),r.jsx(nE,{children:i.role}),r.jsx(rE,{children:i.location})]})]})]},n))})})}),r.jsx(oE,{className:"section",children:r.jsxs("div",{className:"container",children:[r.jsx(Bs,{subtitle:"Impact in Numbers",children:"A Community of Transformed Lives"}),r.jsxs(aE,{children:[r.jsxs(Sa,{as:j.div,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5},children:[r.jsx(Ca,{children:"500+"}),r.jsx(za,{children:"Lives Transformed"})]}),r.jsxs(Sa,{as:j.div,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5,delay:.1},children:[r.jsx(Ca,{children:"1000+"}),r.jsx(za,{children:"Healing Sessions"})]}),r.jsxs(Sa,{as:j.div,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5,delay:.2},children:[r.jsx(Ca,{children:"10+"}),r.jsx(za,{children:"Years of Experience"})]}),r.jsxs(Sa,{as:j.div,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5,delay:.3},children:[r.jsx(Ca,{children:"98%"}),r.jsx(za,{children:"Client Satisfaction"})]})]})]})}),r.jsx(sE,{className:"section",children:r.jsx("div",{className:"container",children:r.jsxs(lE,{as:j.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsx(dE,{children:"Ready to Write Your Own Transformation Story?"}),r.jsx(cE,{children:"Every journey begins with a single step. Let's take that step together and create the life you deserve."}),r.jsx(mE,{to:"/contact",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Begin Your Journey Today"})]})})})]})},WL=l.div``,DL=l.section`
  padding: 6rem 0 4rem;
  background: linear-gradient(
    135deg,
    ${d.colors.background} 0%,
    ${d.colors.backgroundAlt} 100%
  );
  text-align: center;
`,VL=l.div`
  max-width: 800px;
  margin: 0 auto;
`,NL=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${d.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 1rem;
`,OL=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: ${d.colors.primary};
  margin: 0 0 1.5rem;
`,_L=l.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${d.colors.text};
  margin: 0;
`,HL=l.section`
  padding: 5rem 0;
  background: ${d.colors.background};
`,UL=l.section`
  background: ${d.colors.backgroundAlt};
`,ZL=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,YL=l.div`
  background: white;
  padding: 2.5rem;
  border-radius: ${d.borderRadius.xl};
  box-shadow: ${d.shadows.md};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: 2px solid ${d.colors.backgroundDark};
  transition: all ${d.transitions.base};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${d.shadows.xl};
    border-color: ${d.colors.secondaryLight};
  }
`,QL=l.div`
  font-family: ${d.fonts.heading};
  font-size: 5rem;
  line-height: 1;
  color: ${d.colors.secondaryLight};
  opacity: 0.3;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  z-index: 1;
`,GL=l.p`
  font-size: 1.0625rem;
  line-height: 1.8;
  color: ${d.colors.text};
  margin: 0;
  position: relative;
  z-index: 2;
  font-style: italic;
`,KL=l.div`
  background: linear-gradient(
    135deg,
    ${d.colors.secondaryLight},
    ${d.colors.accentLight}
  );
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: ${d.borderRadius.lg};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  font-style: normal;
`,qL=l.div`
  display: flex;
  gap: 0.25rem;
`,XL=l.span`
  color: ${d.colors.accent};
  font-size: 1.1rem;
`,JL=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${d.colors.backgroundDark};
`,eE=l.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${d.colors.secondaryLight},
    ${d.colors.accentLight}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  flex-shrink: 0;
`,tE=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,iE=l.h4`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: ${d.colors.primary};
  margin: 0;
`,nE=l.p`
  font-size: 0.9rem;
  color: ${d.colors.textLight};
  margin: 0;
`,rE=l.p`
  font-size: 0.85rem;
  color: ${d.colors.accent};
  margin: 0;
`,oE=l.section`
  background: white;
`,aE=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Sa=l.div`
  background: linear-gradient(
    135deg,
    ${d.colors.secondaryLight},
    ${d.colors.accentLight}
  );
  padding: 3rem 2rem;
  border-radius: ${d.borderRadius.xl};
  text-align: center;
  box-shadow: ${d.shadows.md};
`,Ca=l.div`
  font-family: ${d.fonts.heading};
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  line-height: 1;
  margin-bottom: 1rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`,za=l.p`
  font-size: 1.125rem;
  color: white;
  margin: 0;
  opacity: 0.95;
`,sE=l.section`
  background: linear-gradient(
    135deg,
    ${d.colors.secondaryLight} 0%,
    ${d.colors.accentLight} 100%
  );
`,lE=l.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`,dE=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: white;
  margin: 0 0 1.5rem;
`,cE=l.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: white;
  margin: 0 0 2.5rem;
`,mE=l(j.a)`
  display: inline-block;
  padding: 1.25rem 3rem;
  background: white;
  color: ${d.colors.primary};
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: ${d.borderRadius.full};
  box-shadow: ${d.shadows.lg};
  transition: all ${d.transitions.base};

  &:hover {
    box-shadow: ${d.shadows.xl};
    transform: translateY(-2px);
  }
`,De={featured:"https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=2400&h=1600&fit=crop&q=100",yoga1:"https://images.unsplash.com/photo-1573384666979-2b1e160d2d08?w=1600&h=1200&fit=crop&q=100",yoga2:"https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&h=1200&fit=crop&q=100",meditation:"https://images.unsplash.com/photo-1528319725582-ddc096101511?w=1600&h=1200&fit=crop&q=100",mindset:"https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&h=1200&fit=crop&q=100",wellness:"https://images.unsplash.com/photo-1559595500-e15296bdbb48?w=1600&h=1200&fit=crop&q=100",lifestyle:"https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=1600&h=1200&fit=crop&q=100",nature:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&h=1200&fit=crop&q=100",breathwork:"https://images.unsplash.com/photo-1512291313931-d4291c8475c4?w=1600&h=1200&fit=crop&q=100"},pE=()=>{const e=k.useRef(null),t=k.useRef(null),i=k.useRef(null),n=k.useRef(null),o=k.useRef(null),[a,s]=k.useState("All"),c=O(e,{once:!0,amount:.3}),m=O(t,{once:!0,amount:.2}),p=O(i,{once:!0,amount:.1}),u=O(n,{once:!0,amount:.3}),h=O(o,{once:!0,amount:.3}),f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},g={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.1,.25,1]}}},w=[{name:"All",icon:r.jsx(ti,{}),count:12},{name:"Yoga",icon:r.jsx($o,{}),count:5},{name:"Meditation",icon:r.jsx(Vo,{}),count:3},{name:"Mindset",icon:r.jsx(V6,{}),count:2},{name:"Wellness",icon:r.jsx(mt,{}),count:2}],b={category:"Yoga & Wellness",title:"The Sacred Journey Within: Discovering Your True Self Through Yoga",excerpt:"Embark on a transformative exploration of self-discovery through the ancient wisdom of yoga. Learn how to connect with your innermost being, release limiting patterns, and awaken to the infinite potential that resides within you.",readTime:"12 min read",date:"January 25, 2026",image:De.featured,author:"BK Shikha"},C=[{category:"Yoga & Wellness",title:"Have a Good Body and Soul Balance",excerpt:"Discover how regular yoga practice can help you achieve perfect harmony between your physical body and inner peace.",readTime:"8 min read",date:"January 25, 2026",image:De.yoga2,slug:"body-soul-balance"},{category:"Yoga Tips",title:"How to Keep Yoga Practice During Busy Times",excerpt:"Learn effective strategies to maintain your yoga practice even during busy schedules and challenging times.",readTime:"7 min read",date:"January 20, 2026",image:De.yoga1,slug:"keep-yoga-practice"},{category:"Wellness",title:"The Yoga of Food and Mindful Eating",excerpt:"Explore the connection between mindful eating, nutrition, and your yoga journey for complete wellness.",readTime:"9 min read",date:"January 15, 2026",image:De.wellness,slug:"yoga-of-food"},{category:"Stress Relief",title:"5 Yoga Poses to Instantly Relieve Stress and Anxiety",excerpt:"Discover simple yet powerful yoga poses that calm your nervous system and bring immediate peace.",readTime:"5 min read",date:"January 22, 2026",image:De.meditation,slug:"yoga-stress-relief"},{category:"Morning Rituals",title:"Create a Mindful Morning Routine That Transforms Your Day",excerpt:"Learn how to design a morning practice that sets the tone for joy, productivity, and inner peace.",readTime:"7 min read",date:"January 18, 2026",image:De.lifestyle,slug:"mindful-morning-routine"},{category:"Meditation",title:"The Art of Stillness: A Guide to Deep Meditation",excerpt:"Explore the profound depths of meditation and discover techniques for achieving lasting inner calm.",readTime:"8 min read",date:"January 15, 2026",image:De.breathwork,slug:"deep-meditation-guide"},{category:"Mindset",title:"The Power of Mindset: How to Reset Your Thoughts for Success",excerpt:"Explore practical NLP techniques to reprogram limiting beliefs and create empowering thought patterns.",readTime:"8 min read",date:"January 12, 2026",image:De.mindset,slug:"mindset-reset"},{category:"Wellness",title:"Emotional Balance: Tools for Processing Difficult Feelings",excerpt:"Navigate challenging emotions with grace and wisdom. Discover techniques for emotional regulation.",readTime:"6 min read",date:"January 8, 2026",image:De.nature,slug:"emotional-balance"}],v=a==="All"?C:C.filter(x=>x.category.toLowerCase().includes(a.toLowerCase()));return r.jsxs(hE,{children:[r.jsxs(uE,{ref:e,children:[r.jsx(Rd,{className:"orb1"}),r.jsx(Rd,{className:"orb2"}),r.jsx(Rd,{className:"orb3"}),r.jsx(Mf,{className:"left",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1"}),r.jsx("path",{d:"M60 60L30 100",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L35 160",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L40 220",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 60L90 100",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L85 160",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L80 220",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"})]})}),r.jsx(Mf,{className:"right",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1"}),r.jsx("path",{d:"M60 60L30 100",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L35 160",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L40 220",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 60L90 100",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L85 160",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L80 220",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"})]})}),r.jsx(Ni,{children:r.jsxs(fE,{as:j.div,variants:f,initial:"hidden",animate:c?"visible":"hidden",children:[r.jsx(j.div,{variants:g,children:r.jsx(gE,{children:"Wellness Wisdom & Insights"})}),r.jsx(j.div,{variants:g,children:r.jsxs(xE,{children:["Stories of ",r.jsx(yE,{children:"Transformation"})]})}),r.jsx(j.div,{variants:g,children:r.jsx(wE,{children:"Explore ancient wisdom and modern wellness practices. Discover articles on yoga, meditation, mindfulness, and holistic living to support your journey of self-discovery."})}),r.jsx(j.div,{variants:g,children:r.jsxs(vE,{children:[r.jsxs(Bd,{children:[r.jsx(Fd,{children:"50+"}),r.jsx(Wd,{children:"Articles"})]}),r.jsx(Af,{}),r.jsxs(Bd,{children:[r.jsx(Fd,{children:"12"}),r.jsx(Wd,{children:"Topics"})]}),r.jsx(Af,{}),r.jsxs(Bd,{children:[r.jsx(Fd,{children:"10K+"}),r.jsx(Wd,{children:"Readers"})]})]})})]})}),r.jsx(bE,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",fill:"#ffffff"})})})]}),r.jsxs(kE,{ref:t,children:[r.jsx(Ni,{children:r.jsxs(jE,{as:j.div,variants:f,initial:"hidden",animate:m?"visible":"hidden",children:[r.jsx($E,{as:j.div,variants:g,children:r.jsxs(SE,{children:[r.jsx(CE,{children:r.jsx("svg",{viewBox:"0 0 400 350",fill:"none",children:r.jsx("path",{d:"M350,175 C350,280 275,325 175,325 C75,325 25,280 25,175 C25,70 100,25 200,25 C300,25 350,70 350,175 Z",fill:"#8ecfb3",opacity:"0.3"})})}),r.jsx(zE,{src:b.image,alt:b.title}),r.jsxs(TE,{children:[r.jsx(ti,{}),"Featured Article"]})]})}),r.jsxs(PE,{as:j.div,variants:g,children:[r.jsxs(ME,{children:[r.jsx($o,{}),b.category]}),r.jsx(AE,{children:b.title}),r.jsx(LE,{children:b.excerpt}),r.jsxs(EE,{children:[r.jsxs(Lf,{children:[r.jsx(jo,{}),b.readTime]}),r.jsx(IE,{children:"•"}),r.jsx(Lf,{children:b.date})]}),r.jsxs(RE,{children:[r.jsx(BE,{children:"BK"}),r.jsxs(FE,{children:[r.jsxs(WE,{children:["By ",b.author]}),r.jsx(DE,{children:"Holistic Wellness Coach"})]})]}),r.jsxs(VE,{to:"/blog/featured",children:["Read Full Article",r.jsx(me,{})]})]})]})}),r.jsx(NE,{children:r.jsxs("svg",{viewBox:"0 0 200 400",fill:"none",children:[r.jsx("path",{d:"M100,20 Q150,100 140,200 Q130,300 100,380",stroke:"#e8f0e9",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M100,80 Q60,120 40,100",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,140 Q55,180 30,150",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,200 Q50,240 25,200",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,80 Q140,120 160,100",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,140 Q145,180 170,150",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,200 Q150,240 175,200",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"})]})})]}),r.jsx(OE,{ref:n,children:r.jsx(Ni,{children:r.jsxs(_E,{as:j.div,variants:f,initial:"hidden",animate:u?"visible":"hidden",children:[r.jsx(j.div,{variants:g,children:r.jsxs(HE,{children:[r.jsx(UE,{children:"Explore Topics"}),r.jsx(ZE,{children:"Browse by Category"})]})}),r.jsx(YE,{as:j.div,variants:g,children:w.map((x,y)=>r.jsxs(QE,{$active:a===x.name,onClick:()=>s(x.name),whileHover:{y:-3},whileTap:{scale:.97},children:[r.jsx(GE,{$active:a===x.name,children:x.icon}),r.jsx(KE,{children:x.name}),r.jsx(qE,{$active:a===x.name,children:x.count})]},x.name))})]})})}),r.jsxs(XE,{ref:i,children:[r.jsx(Ni,{children:r.jsxs(JE,{as:j.div,variants:f,initial:"hidden",animate:p?"visible":"hidden",children:[r.jsx(Bt,{mode:"wait",children:r.jsx(eI,{as:j.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:v.map((x,y)=>r.jsxs(_o,{as:j.article,variants:g,whileHover:{y:-12,transition:{duration:.3}},onClick:()=>window.location.href=`/blog/${x.slug}`,style:{cursor:"pointer"},children:[r.jsxs(tI,{children:[r.jsx(iI,{src:x.image,alt:x.title,loading:"lazy"}),r.jsx(nI,{}),r.jsx(rI,{children:x.category}),r.jsx(oI,{children:r.jsx(Ls,{})})]}),r.jsxs(aI,{children:[r.jsxs(sI,{children:[r.jsx(lI,{children:x.date}),r.jsxs(dI,{children:[r.jsx(jo,{}),x.readTime]})]}),r.jsx(cI,{children:x.title}),r.jsx(mI,{children:x.excerpt}),r.jsxs(pI,{as:_,to:`/blog/${x.slug}`,children:["Continue Reading",r.jsx(me,{})]})]})]},y))},a)}),r.jsx(hI,{children:r.jsxs(uI,{as:j.button,whileHover:{scale:1.03},whileTap:{scale:.97},children:["Load More Articles",r.jsx(me,{})]})})]})}),r.jsx(fI,{children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"#e8f0e9",strokeWidth:"1"})]})})]}),r.jsxs(gI,{children:[r.jsx(Ni,{children:r.jsxs(xI,{as:j.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsx(yI,{children:'"'}),r.jsx(wI,{children:"The journey of a thousand miles begins with a single breath. Every article here is a step toward your highest self."}),r.jsx(vI,{children:"— BK Shikha"})]})}),r.jsx(Ef,{className:"left"}),r.jsx(Ef,{className:"right"})]}),r.jsx(bI,{ref:o,children:r.jsx(Ni,{children:r.jsxs(kI,{as:j.div,variants:f,initial:"hidden",animate:h?"visible":"hidden",children:[r.jsxs(jI,{children:[r.jsx($I,{as:j.div,variants:g,children:r.jsxs(SI,{children:[r.jsx(CI,{src:De.meditation,alt:"Meditation practice"}),r.jsx(zI,{}),r.jsxs(TI,{children:[r.jsx(PI,{children:r.jsx(As,{})}),r.jsx(MI,{children:"Weekly Wisdom"})]})]})}),r.jsxs(AI,{as:j.div,variants:g,children:[r.jsx(LI,{children:"Join Our Community"}),r.jsx(EI,{children:"Receive Weekly Wellness Wisdom"}),r.jsx(II,{children:"Get exclusive articles, guided meditations, and wellness tips delivered straight to your inbox. Join 10,000+ mindful souls on this journey."}),r.jsxs(RI,{children:[r.jsxs(BI,{children:[r.jsx(As,{}),r.jsx(FI,{type:"email",placeholder:"Enter your email address","aria-label":"Email address"})]}),r.jsxs(WI,{as:j.button,whileHover:{scale:1.02},whileTap:{scale:.98},children:["Subscribe",r.jsx(me,{})]})]}),r.jsxs(DI,{children:[r.jsxs(Dd,{children:[r.jsx(Vd,{children:"✓"}),"Weekly articles & insights"]}),r.jsxs(Dd,{children:[r.jsx(Vd,{children:"✓"}),"Exclusive meditations"]}),r.jsxs(Dd,{children:[r.jsx(Vd,{children:"✓"}),"Unsubscribe anytime"]})]})]})]}),r.jsx(VI,{children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",children:[r.jsx("circle",{cx:"100",cy:"100",r:"80",stroke:"#cec5ad",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.3"}),r.jsx("circle",{cx:"100",cy:"100",r:"60",stroke:"#22371b",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.2"}),r.jsx("circle",{cx:"100",cy:"100",r:"40",stroke:"#cec5ad",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.4"})]})})]})})}),r.jsx(NI,{children:r.jsx(Ni,{children:r.jsxs(OI,{as:j.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsx(_I,{children:r.jsx(rn,{})}),r.jsx(HI,{children:"Follow the Journey"}),r.jsx(UI,{children:"Daily inspiration, behind-the-scenes moments, and wellness tips on Instagram"}),r.jsxs(ZI,{href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer",as:j.a,whileHover:{scale:1.05},whileTap:{scale:.95},children:["@cyd_bkshikha",r.jsx(me,{})]}),r.jsx(YI,{children:[De.yoga1,De.meditation,De.wellness,De.nature].map((x,y)=>r.jsxs(c5,{children:[r.jsx("img",{src:x,alt:`Instagram post ${y+1}`}),r.jsx(QI,{children:r.jsx(mt,{})})]},y))})]})})})]})},hE=l.div`
  position: relative;
  overflow-x: hidden;
`,Ni=l.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,uE=l.section`
  min-height: 85vh;
  background: linear-gradient(135deg, #22371b 0%, #21371a 50%, #1a2d15 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8rem 0 10rem;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 6rem 0 8rem;
  }
`,Rd=l.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
  animation: float 10s ease-in-out infinite;

  &.orb1 {
    width: 500px;
    height: 500px;
    background: #cec5ad;
    top: -150px;
    right: -150px;
    animation-delay: 0s;
  }

  &.orb2 {
    width: 400px;
    height: 400px;
    background: #5a8a62;
    bottom: -100px;
    left: -100px;
    animation-delay: 3s;
  }

  &.orb3 {
    width: 250px;
    height: 250px;
    background: #8ecfb3;
    top: 40%;
    left: 20%;
    animation-delay: 6s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-40px) scale(1.05); }
  }
`,Mf=l.div`
  position: absolute;
  width: 100px;
  height: 280px;
  opacity: 0.8;
  pointer-events: none;

  &.left {
    left: 3%;
    top: 50%;
    transform: translateY(-50%) rotate(-10deg);
  }

  &.right {
    right: 3%;
    top: 50%;
    transform: translateY(-50%) rotate(10deg) scaleX(-1);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`,fE=l.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`,gE=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid rgba(206, 197, 173, 0.3);
  border-radius: 100px;
`,xE=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 1.5rem;
`,yE=l.span`
  color: #cec5ad;
  font-style: italic;
  font-weight: 400;
`,wE=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,vE=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`,Bd=l.div`
  text-align: center;
`,Fd=l.div`
  font-family: ${d.fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  color: #cec5ad;
  line-height: 1;
  margin-bottom: 0.25rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,Wd=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,Af=l.div`
  width: 1px;
  height: 40px;
  background: rgba(206, 197, 173, 0.3);
`,bE=l.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`,kE=l.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,jE=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,$E=l.div`
  position: relative;
`,SE=l.div`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
`,CE=l.div`
  position: absolute;
  width: 120%;
  height: 120%;
  left: -10%;
  top: -10%;
  z-index: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`,zE=l.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 30px;
  position: relative;
  z-index: 1;
`,TE=l.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #22371b;
  color: #cec5ad;
  padding: 0.75rem 1.25rem;
  border-radius: 100px;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  z-index: 10;
  box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
`,PE=l.div``,ME=l.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  color: #5a8a62;
  margin-bottom: 1rem;

  svg {
    font-size: 1rem;
  }
`,AE=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.25;
  margin: 0 0 1.25rem;
`,LE=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.85;
  color: #6b7c6f;
  margin: 0 0 1.5rem;
`,EE=l.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`,Lf=l.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: ${d.fonts.body};
  font-size: 0.9rem;
  color: #7a8a7a;

  svg {
    font-size: 1rem;
  }
`,IE=l.span`
  color: #cec5ad;
`,RE=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.25rem;
  background: #f8f9f6;
  border-radius: 16px;
`,BE=l.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #22371b, #5a8a62);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cec5ad;
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
`,FE=l.div``,WE=l.div`
  font-family: ${d.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  color: #22371b;
`,DE=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: #7a8a7a;
`,VE=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #22371b;
  color: #cec5ad;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;

  &:hover {
    background: #1a2d15;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,NE=l.div`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 350px;
  opacity: 0.5;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`,OE=l.section`
  padding: 4rem 0;
  background: linear-gradient(180deg, #f8f9f6 0%, #eef4ef 100%);
`,_E=l.div``,HE=l.div`
  text-align: center;
  margin-bottom: 2.5rem;
`,UE=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  font-style: italic;
  color: #c9a227;
  margin-bottom: 0.5rem;
`,ZE=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #22371b;
  line-height: 1.2;
`,YE=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,QE=l(j.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.75rem;
  background: ${e=>e.$active?"#22371b":"white"};
  color: ${e=>e.$active?"#cec5ad":"#22371b"};
  border: 2px solid ${e=>e.$active?"#22371b":"rgba(34, 55, 27, 0.1)"};
  border-radius: 100px;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${e=>e.$active?"0 10px 30px rgba(34, 55, 27, 0.15)":"0 4px 15px rgba(0,0,0,0.05)"};

  &:hover {
    border-color: #22371b;
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.1);
  }
`,GE=l.span`
  display: flex;
  font-size: 1.125rem;
  color: ${e=>e.$active?"#cec5ad":"#5a8a62"};
`,KE=l.span``,qE=l.span`
  padding: 0.25rem 0.625rem;
  background: ${e=>e.$active?"rgba(206, 197, 173, 0.2)":"rgba(90, 138, 98, 0.1)"};
  color: ${e=>e.$active?"#cec5ad":"#5a8a62"};
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 600;
`,XE=l.section`
  padding: 5rem 0;
  background: #eef4ef;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,JE=l.div``,eI=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,_o=l.article`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(34, 55, 27, 0.08);
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 20px 60px rgba(34, 55, 27, 0.15);
  }
`,tI=l.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
`,iI=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${_o}:hover & {
    transform: scale(1.1);
  }
`,nI=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(34, 55, 27, 0.4) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${_o}:hover & {
    opacity: 1;
  }
`,rI=l.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: white;
  color: #22371b;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-family: ${d.fonts.body};
  font-size: 0.8125rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`,oI=l.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: #cec5ad;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #22371b;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;

  ${_o}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  svg {
    margin-left: 2px;
  }
`,aI=l.div`
  padding: 1.5rem;
`,sI=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`,lI=l.span`
  font-family: ${d.fonts.body};
  font-size: 0.8125rem;
  color: #7a8a7a;
`,dI=l.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${d.fonts.body};
  font-size: 0.8125rem;
  color: #7a8a7a;

  svg {
    font-size: 0.875rem;
  }
`,cI=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  line-height: 1.35;
  margin: 0 0 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,mI=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #6b7c6f;
  margin: 0 0 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,pI=l.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  color: #5a8a62;
  text-decoration: none;
  transition: all 0.3s ease;

  ${_o}:hover & {
    color: #22371b;
    gap: 0.75rem;
  }
`,hI=l.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`,uI=l.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: transparent;
  color: #22371b;
  border: 2px solid #22371b;
  border-radius: 100px;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #22371b;
    color: #cec5ad;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,fI=l.div`
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  height: 280px;
  opacity: 0.5;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`,gI=l.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #22371b 0%, #21371a 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
`,xI=l.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,yI=l.span`
  display: block;
  font-family: ${d.fonts.heading};
  font-size: 8rem;
  color: #cec5ad;
  opacity: 0.2;
  line-height: 0.5;
  margin-bottom: 1rem;
`,wI=l.p`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 400;
  font-style: italic;
  color: white;
  line-height: 1.6;
  margin: 0 0 1.5rem;
`,vI=l.span`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  color: #cec5ad;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,Ef=l.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;

  &.left {
    background: #cec5ad;
    left: -100px;
    bottom: -100px;
  }

  &.right {
    background: #5a8a62;
    right: -100px;
    top: -100px;
  }
`,bI=l.section`
  padding: 6rem 0;
  background: #f8f9f6;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,kI=l.div`
  background: white;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(34, 55, 27, 0.1);
  position: relative;
`,jI=l.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,$I=l.div`
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`,SI=l.div`
  position: relative;
  height: 100%;
  min-height: 500px;
`,CI=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,zI=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(34, 55, 27, 0.3), rgba(90, 138, 98, 0.2));
`,TI=l.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 100px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
`,PI=l.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #22371b, #5a8a62);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`,MI=l.span`
  font-family: ${d.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  color: #22371b;
`,AI=l.div`
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`,LI=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`,EI=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.2;
  margin: 0 0 1rem;
`,II=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin: 0 0 2rem;
`,RI=l.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`,BI=l.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 1.25rem;
    color: #7a8a7a;
    font-size: 1.125rem;
  }
`,FI=l.input`
  width: 100%;
  padding: 1rem 1.25rem 1rem 3rem;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  border: 2px solid #e8efe9;
  border-radius: 100px;
  background: #f8f9f6;
  color: #22371b;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #5a8a62;
    background: white;
  }

  &::placeholder {
    color: #a0b0a2;
  }
`,WI=l.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #22371b;
  color: #cec5ad;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #1a2d15;
    box-shadow: 0 10px 30px rgba(34, 55, 27, 0.2);
  }
`,DI=l.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`,Dd=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.9rem;
  color: #6b7c6f;
`,Vd=l.span`
  color: #5a8a62;
  font-weight: 600;
`,VI=l.div`
  position: absolute;
  right: -50px;
  top: -50px;
  width: 200px;
  height: 200px;
  opacity: 0.5;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`,NI=l.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #eef4ef 100%);

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,OI=l.div`
  text-align: center;
`,_I=l.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
`,HI=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #22371b;
  margin: 0 0 1rem;
`,UI=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 500px;
  margin: 0 auto 2rem;
`,ZI=l.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4);
  color: white;
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  box-shadow: 0 10px 30px rgba(221, 42, 123, 0.3);
  transition: all 0.3s ease;
  margin-bottom: 3rem;

  &:hover {
    box-shadow: 0 15px 40px rgba(221, 42, 123, 0.4);
    transform: translateY(-2px);
  }
`,YI=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`,c5=l.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`,QI=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(245, 133, 41, 0.6), rgba(221, 42, 123, 0.6));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  svg {
    color: white;
    font-size: 2rem;
  }

  ${c5}:hover & {
    opacity: 1;
  }
`,GI=()=>{const{slug:e}=yv(),t=n1(),i=k.useRef(null),n=k.useRef(null),o=k.useRef(null),a=O(i,{once:!0,amount:.3}),s=O(n,{once:!0,amount:.1}),c=O(o,{once:!0,amount:.2}),m=J$(e),p=e9(e);if(k.useEffect(()=>{window.scrollTo(0,0)},[e]),!m)return r.jsx(BR,{children:r.jsxs(FR,{children:[r.jsx("h1",{children:"Blog Post Not Found"}),r.jsx("p",{children:"Sorry, we couldn't find the blog post you're looking for."}),r.jsxs(WR,{to:"/blog",children:[r.jsx(gu,{})," Back to Blog"]})]})});const u={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},h={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}},f=(g,w)=>{switch(g.type){case"paragraph":return r.jsx(sR,{children:g.text},w);case"heading":return r.jsx(lR,{children:g.text},w);case"list":return r.jsx(dR,{children:g.items.map((b,C)=>r.jsx("li",{dangerouslySetInnerHTML:{__html:b}},C))},w);case"quote":return r.jsxs(cR,{children:[r.jsxs(mR,{children:['"',g.text,'"']}),g.author&&r.jsxs(pR,{children:["— ",g.author]})]},w);case"image":return r.jsx(hR,{children:r.jsx("img",{src:g.src,alt:g.alt,loading:"lazy"})},w);default:return null}};return r.jsxs(KI,{children:[r.jsxs(qI,{ref:i,$bgImage:m.image,children:[r.jsx(XI,{}),r.jsxs(JI,{as:j.div,variants:u,initial:"hidden",animate:a?"visible":"hidden",children:[r.jsxs(eR,{as:j(_),to:"/blog",variants:h,whileHover:{x:-5},children:[r.jsx(gu,{})," Back to Blog"]}),r.jsx(j.div,{variants:h,children:r.jsx(tR,{children:m.category})}),r.jsx(j.div,{variants:h,children:r.jsx(iR,{children:m.fullTitle||m.title})}),r.jsxs(nR,{as:j.div,variants:h,children:[r.jsxs(Nd,{children:[r.jsx(Q6,{}),m.author]}),r.jsxs(Nd,{children:[r.jsx(Ms,{}),m.date]}),r.jsxs(Nd,{children:[r.jsx(jo,{}),m.readTime]})]})]})]}),r.jsx(rR,{ref:n,children:r.jsxs(oR,{as:j.div,variants:u,initial:"hidden",animate:s?"visible":"hidden",children:[r.jsx(aR,{as:j.article,variants:h,children:m.content.map((g,w)=>f(g,w))}),m.tags&&m.tags.length>0&&r.jsxs(uR,{as:j.div,variants:h,children:[r.jsxs(fR,{children:[r.jsx(Y6,{})," Tags"]}),r.jsx(gR,{children:m.tags.map((g,w)=>r.jsx(xR,{children:g},w))})]}),r.jsxs(yR,{as:j.div,variants:h,children:[r.jsxs(wR,{children:[r.jsx(U6,{})," Share this article"]}),r.jsx(vR,{children:"Help others discover this content"})]})]})}),p.length>0&&r.jsx(bR,{ref:o,children:r.jsxs(kR,{as:j.div,variants:u,initial:"hidden",animate:c?"visible":"hidden",children:[r.jsx(j.div,{variants:h,children:r.jsx(jR,{children:"Related Articles"})}),r.jsx($R,{children:p.map((g,w)=>r.jsxs(V0,{as:j.article,variants:h,onClick:()=>t(`/blog/${g.slug}`),whileHover:{y:-8},children:[r.jsx(SR,{children:r.jsx("img",{src:g.image,alt:g.title,loading:"lazy"})}),r.jsxs(CR,{children:[r.jsx(zR,{children:g.category}),r.jsx(TR,{children:g.title}),r.jsx(PR,{children:g.excerpt}),r.jsxs(MR,{children:["Read More ",r.jsx(me,{})]})]})]},g.slug))})]})}),r.jsx(AR,{children:r.jsxs(LR,{children:[r.jsx(ER,{children:"Begin Your Wellness Journey"}),r.jsx(IR,{children:"Ready to transform your life through yoga and holistic wellness? Let's connect and create your personalized path to inner peace."}),r.jsx(RR,{as:j(_),to:"/contact",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Book a Session"})]})})]})},KI=l.div`
  min-height: 100vh;
  background: #FAF8F5;
`,qI=l.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: ${e=>`url(${e.$bgImage})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  @media (max-width: ${d.breakpoints.tablet}) {
    min-height: 50vh;
    background-attachment: scroll;
  }
`,XI=l.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(34, 55, 27, 0.85) 0%,
    rgba(34, 55, 27, 0.75) 50%,
    rgba(90, 138, 98, 0.65) 100%
  );
`,JI=l.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  position: relative;
  z-index: 2;
  text-align: center;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 7rem 1.5rem 3rem;
  }
`,eR=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #FAF8F5;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 2rem;
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    gap: 0.75rem;
  }
`,tR=l.span`
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(206, 197, 173, 0.25);
  color: #cec5ad;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
`,iR=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  color: #FAF8F5;
  line-height: 1.2;
  margin: 0 0 2rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
`,nR=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  color: rgba(250, 248, 245, 0.9);

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 1rem;
  }
`,Nd=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  
  svg {
    opacity: 0.8;
  }
`,rR=l.section`
  padding: 5rem 0;
  background: #FAF8F5;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,oR=l.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`,aR=l.article`
  background: white;
  padding: 4rem;
  border-radius: ${d.borderRadius.large};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 2.5rem 2rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`,sR=l.p`
  font-size: 1.125rem;
  line-height: 1.9;
  color: #21371a;
  margin-bottom: 1.75rem;
  opacity: 0.95;

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1.0625rem;
    line-height: 1.8;
  }
`,lR=l.h2`
  font-family: ${d.fonts.heading};
  font-size: 1.875rem;
  font-weight: 600;
  color: #22371b;
  margin: 3rem 0 1.5rem;
  line-height: 1.3;

  &:first-child {
    margin-top: 0;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1.625rem;
    margin: 2.5rem 0 1.25rem;
  }
`,dR=l.ul`
  margin: 1.5rem 0 2rem;
  padding-left: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1.25rem;
    font-size: 1.0625rem;
    line-height: 1.8;
    color: #21371a;
    opacity: 0.95;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.65em;
      width: 8px;
      height: 8px;
      background: #cec5ad;
      border-radius: 50%;
    }

    strong {
      color: #22371b;
      font-weight: 600;
    }
  }
`,cR=l.blockquote`
  margin: 3rem 0;
  padding: 2rem 2.5rem;
  background: linear-gradient(135deg, rgba(206, 197, 173, 0.1) 0%, rgba(206, 197, 173, 0.05) 100%);
  border-left: 4px solid #cec5ad;
  border-radius: 0 ${d.borderRadius.medium} ${d.borderRadius.medium} 0;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 1.5rem 1.25rem;
    margin: 2rem 0;
  }
`,mR=l.p`
  font-family: ${d.fonts.heading};
  font-size: 1.375rem;
  font-style: italic;
  font-weight: 400;
  color: #22371b;
  line-height: 1.6;
  margin: 0;

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1.1875rem;
  }
`,pR=l.cite`
  display: block;
  margin-top: 1rem;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  color: #cec5ad;
  letter-spacing: 0.02em;
`,hR=l.figure`
  margin: 3rem 0;
  
  img {
    width: 100%;
    height: auto;
    border-radius: ${d.borderRadius.medium};
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin: 2rem 0;
  }
`,uR=l.div`
  margin-top: 3rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(206, 197, 173, 0.3);
`,fR=l.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 1rem;
`,gR=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,xR=l.span`
  padding: 0.5rem 1rem;
  background: rgba(206, 197, 173, 0.15);
  color: #22371b;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 50px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(206, 197, 173, 0.25);
  }
`,yR=l.div`
  margin-top: 2.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(90, 138, 98, 0.08) 0%, rgba(206, 197, 173, 0.08) 100%);
  border-radius: ${d.borderRadius.medium};
  text-align: center;
`,wR=l.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.5rem;
`,vR=l.p`
  color: #21371a;
  opacity: 0.8;
  margin: 0;
`,bR=l.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, #FAF8F5 0%, #f5f7f4 100%);

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,kR=l.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`,jR=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #22371b;
  text-align: center;
  margin-bottom: 3rem;
`,$R=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,V0=l.article`
  background: white;
  border-radius: ${d.borderRadius.large};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
`,SR=l.div`
  width: 100%;
  height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${V0}:hover & img {
    transform: scale(1.05);
  }
`,CR=l.div`
  padding: 1.75rem;
`,zR=l.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #cec5ad;
  margin-bottom: 0.75rem;
`,TR=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  line-height: 1.4;
  margin-bottom: 0.75rem;
`,PR=l.p`
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #21371a;
  opacity: 0.8;
  margin-bottom: 1rem;
`,MR=l.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #22371b;
  font-size: 0.9375rem;
  font-weight: 600;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  ${V0}:hover & {
    color: #5a8a62;
    gap: 0.75rem;

    svg {
      transform: translateX(3px);
    }
  }
`,AR=l.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #22371b 0%, #2d4a23 100%);
  text-align: center;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,LR=l.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`,ER=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #FAF8F5;
  margin-bottom: 1.25rem;
`,IR=l.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: rgba(250, 248, 245, 0.9);
  margin-bottom: 2.5rem;
`,RR=l(_)`
  display: inline-block;
  padding: 1.125rem 2.75rem;
  background: linear-gradient(135deg, #cec5ad 0%, #d6ceb8 100%);
  color: #22371b;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: ${d.borderRadius.full};
  box-shadow: 0 6px 25px rgba(206, 197, 173, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 35px rgba(206, 197, 173, 0.4);
    background: linear-gradient(135deg, #d6ceb8 0%, #ddd6c3 100%);
  }
`,BR=l.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FAF8F5;
  padding: 8rem 2rem 4rem;
`,FR=l.div`
  text-align: center;
  max-width: 500px;

  h1 {
    font-family: ${d.fonts.heading};
    font-size: 2.5rem;
    color: #22371b;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    color: #21371a;
    opacity: 0.8;
    margin-bottom: 2rem;
  }
`,WR=l(_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #22371b;
  color: #FAF8F5;
  font-weight: 600;
  text-decoration: none;
  border-radius: ${d.borderRadius.full};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(34, 55, 27, 0.3);
  }
`,DR=({onLoadingComplete:e})=>{const[t,i]=k.useState(!1),[n,o]=k.useState(!1),[a,s]=k.useState(!1),c=k.useRef(null),m=k.useRef(!1),p=()=>{m.current||(m.current=!0,i(!0),setTimeout(()=>{e()},800))},u=()=>{p()},h=()=>{console.warn("Video failed to load, completing loading screen"),p()};return k.useEffect(()=>{const f=()=>{o(window.innerWidth<=768)},g=window.matchMedia("(prefers-reduced-motion: reduce)");s(g.matches),f(),window.addEventListener("resize",f);const w=b=>s(b.matches);return g.addEventListener("change",w),()=>{window.removeEventListener("resize",f),g.removeEventListener("change",w)}},[]),k.useEffect(()=>{const g=setTimeout(()=>{p()},n?3e3:15e3);return()=>clearTimeout(g)},[n]),r.jsx(Bt,{children:!t&&r.jsx(VR,{as:j.div,initial:{opacity:1},exit:{opacity:0},transition:{duration:.8,ease:[.4,0,.2,1]},children:n?r.jsxs(NR,{children:[r.jsx(OR,{children:"BK Shikha"}),r.jsx(_R,{children:r.jsx(UR,{})}),r.jsx(ZR,{children:"Loading your wellness journey..."})]}):r.jsxs(r.Fragment,{children:[r.jsx(Od,{className:"leaf1",$reducedMotion:a,children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(142, 207, 179, 0.3)",strokeWidth:"2",fill:"rgba(142, 207, 179, 0.1)"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(142, 207, 179, 0.3)",strokeWidth:"2"}),r.jsx("path",{d:"M60 60L30 100",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 120L35 160",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 180L40 220",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 60L90 100",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 120L85 160",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 180L80 220",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"1.5"})]})}),r.jsx(Od,{className:"leaf2",$reducedMotion:a,children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"2",fill:"rgba(206, 197, 173, 0.1)"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"2"}),r.jsx("path",{d:"M60 80L25 120",stroke:"rgba(206, 197, 173, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 140L30 180",stroke:"rgba(206, 197, 173, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 200L35 240",stroke:"rgba(206, 197, 173, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 80L95 120",stroke:"rgba(206, 197, 173, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 140L90 180",stroke:"rgba(206, 197, 173, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 200L85 240",stroke:"rgba(206, 197, 173, 0.25)",strokeWidth:"1.5"})]})}),r.jsx(Od,{className:"leaf3",$reducedMotion:a,children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(90, 138, 98, 0.25)",strokeWidth:"2",fill:"rgba(90, 138, 98, 0.08)"}),r.jsx("path",{d:"M60 40V260",stroke:"rgba(90, 138, 98, 0.25)",strokeWidth:"2"}),r.jsx("path",{d:"M60 70L32 110",stroke:"rgba(90, 138, 98, 0.2)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 130L38 170",stroke:"rgba(90, 138, 98, 0.2)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 190L42 230",stroke:"rgba(90, 138, 98, 0.2)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 70L88 110",stroke:"rgba(90, 138, 98, 0.2)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 130L82 170",stroke:"rgba(90, 138, 98, 0.2)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 190L78 230",stroke:"rgba(90, 138, 98, 0.2)",strokeWidth:"1.5"})]})}),r.jsx(If,{className:"lotus1",$reducedMotion:a,children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",children:[r.jsx("ellipse",{cx:"100",cy:"140",rx:"35",ry:"50",fill:"rgba(142, 207, 179, 0.15)"}),r.jsx("ellipse",{cx:"70",cy:"130",rx:"30",ry:"45",fill:"rgba(142, 207, 179, 0.12)",transform:"rotate(-30 70 130)"}),r.jsx("ellipse",{cx:"130",cy:"130",rx:"30",ry:"45",fill:"rgba(142, 207, 179, 0.12)",transform:"rotate(30 130 130)"}),r.jsx("ellipse",{cx:"50",cy:"120",rx:"25",ry:"40",fill:"rgba(142, 207, 179, 0.1)",transform:"rotate(-50 50 120)"}),r.jsx("ellipse",{cx:"150",cy:"120",rx:"25",ry:"40",fill:"rgba(142, 207, 179, 0.1)",transform:"rotate(50 150 120)"}),r.jsx("circle",{cx:"100",cy:"130",r:"20",fill:"rgba(206, 197, 173, 0.2)"}),r.jsx("circle",{cx:"100",cy:"130",r:"10",fill:"rgba(206, 197, 173, 0.3)"})]})}),r.jsx(If,{className:"lotus2",$reducedMotion:a,children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",children:[r.jsx("ellipse",{cx:"100",cy:"140",rx:"30",ry:"45",fill:"rgba(206, 197, 173, 0.12)"}),r.jsx("ellipse",{cx:"75",cy:"132",rx:"25",ry:"40",fill:"rgba(206, 197, 173, 0.1)",transform:"rotate(-25 75 132)"}),r.jsx("ellipse",{cx:"125",cy:"132",rx:"25",ry:"40",fill:"rgba(206, 197, 173, 0.1)",transform:"rotate(25 125 132)"}),r.jsx("ellipse",{cx:"55",cy:"125",rx:"20",ry:"35",fill:"rgba(206, 197, 173, 0.08)",transform:"rotate(-45 55 125)"}),r.jsx("ellipse",{cx:"145",cy:"125",rx:"20",ry:"35",fill:"rgba(206, 197, 173, 0.08)",transform:"rotate(45 145 125)"}),r.jsx("circle",{cx:"100",cy:"135",r:"15",fill:"rgba(142, 207, 179, 0.2)"})]})}),r.jsx(XR,{className:"om1",$reducedMotion:a,children:r.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",children:[r.jsx("path",{d:"M50 20C40 20 35 25 35 35C35 45 45 50 50 50C55 50 65 45 65 35C65 25 60 20 50 20Z",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"2",fill:"rgba(142, 207, 179, 0.08)"}),r.jsx("path",{d:"M30 50C30 50 25 60 35 65C45 70 55 65 55 55",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M70 50C70 50 75 60 65 65C55 70 45 65 45 55",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"2",fill:"none"}),r.jsx("circle",{cx:"50",cy:"75",r:"3",fill:"rgba(142, 207, 179, 0.3)"})]})}),r.jsx(JR,{className:"mandala1",$reducedMotion:a,children:r.jsxs("svg",{viewBox:"0 0 150 150",fill:"none",children:[r.jsx("circle",{cx:"75",cy:"75",r:"50",stroke:"rgba(90, 138, 98, 0.15)",strokeWidth:"1",fill:"none"}),r.jsx("circle",{cx:"75",cy:"75",r:"40",stroke:"rgba(90, 138, 98, 0.12)",strokeWidth:"1",fill:"none"}),r.jsx("circle",{cx:"75",cy:"75",r:"30",stroke:"rgba(90, 138, 98, 0.1)",strokeWidth:"1",fill:"none"}),r.jsx("circle",{cx:"75",cy:"75",r:"20",stroke:"rgba(90, 138, 98, 0.08)",strokeWidth:"1",fill:"none"}),[...Array(8)].map((f,g)=>r.jsx("line",{x1:"75",y1:"75",x2:75+50*Math.cos(g*Math.PI/4),y2:75+50*Math.sin(g*Math.PI/4),stroke:"rgba(90, 138, 98, 0.1)",strokeWidth:"1"},g))]})}),r.jsx(Rf,{className:"dots1",$reducedMotion:a,children:[...Array(12)].map((f,g)=>r.jsx(Bf,{style:{left:`${g%4*25}px`,top:`${Math.floor(g/4)*25}px`,animationDelay:`${g*.3}s`}},g))}),r.jsx(Rf,{className:"dots2",$reducedMotion:a,children:[...Array(9)].map((f,g)=>r.jsx(Bf,{style:{left:`${g%3*20}px`,top:`${Math.floor(g/3)*20}px`,animationDelay:`${g*.4}s`}},g))}),r.jsxs(YR,{ref:c,autoPlay:!0,muted:!0,playsInline:!0,onEnded:u,onError:h,onCanPlay:()=>{c.current&&c.current.play().catch(()=>{})},children:[r.jsx("source",{src:"/logo-animation.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})]})})})},VR=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  z-index: 9999;
  overflow: hidden;
  
  @media (max-width: 768px) {
    background: linear-gradient(135deg, #22371b 0%, #3a5a34 100%);
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
  }
`,NR=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
`,OR=l.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  font-weight: 600;
  color: #A8C5A4;
  letter-spacing: 0.1em;
  text-align: center;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 360px) {
    font-size: 2rem;
  }
`,_R=l.div`
  position: relative;
  width: 60px;
  height: 60px;
`,HR=Ft`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,UR=l.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(168, 197, 164, 0.2);
  border-top: 4px solid #A8C5A4;
  border-radius: 50%;
  animation: ${HR} 1s linear infinite;
`,ZR=l.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  letter-spacing: 0.05em;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.75rem;
  }
`,YR=l.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
    object-fit: cover;
  }
  
  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
  }
  
  @media (max-width: 390px) {
    width: 100vw;
    height: 100vh;
  }
  
  @media (max-width: 375px) {
    width: 100vw;
    height: 100vh;
  }
  
  @media (max-width: 360px) {
    width: 100vw;
    height: 100vh;
  }
`,am=Ft`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`,QR=Ft`
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
  50% { transform: translateY(-15px) rotate(-3deg) scale(1.05); }
`,GR=Ft`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
`,KR=Ft`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,qR=Ft`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
`,Od=l.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  opacity: 0.6;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: ${e=>e.$reducedMotion?"auto":"transform"};

  &.leaf1 {
    width: 100px;
    height: 250px;
    top: 10%;
    left: 5%;
    animation: ${e=>e.$reducedMotion?"none":am} 8s ease-in-out infinite;
  }

  &.leaf2 {
    width: 120px;
    height: 300px;
    top: 50%;
    right: 3%;
    animation: ${e=>e.$reducedMotion?"none":QR} 10s ease-in-out infinite;
    animation-delay: 1s;
  }

  &.leaf3 {
    width: 90px;
    height: 220px;
    bottom: 15%;
    left: 8%;
    animation: ${e=>e.$reducedMotion?"none":am} 9s ease-in-out infinite;
    animation-delay: 2s;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  /* 4K screens */
  @media (min-width: 2560px) {
    &.leaf1 {
      width: 140px;
      height: 350px;
    }
    &.leaf2 {
      width: 160px;
      height: 400px;
    }
    &.leaf3 {
      width: 120px;
      height: 300px;
    }
  }

  /* Ultra-wide */
  @media (min-width: 1920px) {
    &.leaf1 {
      width: 120px;
      height: 300px;
    }
    &.leaf2 {
      width: 140px;
      height: 350px;
    }
    &.leaf3 {
      width: 110px;
      height: 270px;
    }
  }

  /* Laptop */
  @media (max-width: 1024px) {
    opacity: 0.5;
    &.leaf1 {
      width: 80px;
      height: 200px;
    }
    &.leaf2 {
      width: 90px;
      height: 220px;
    }
    &.leaf3 {
      width: 70px;
      height: 170px;
    }
  }

  /* Tablets */
  @media (max-width: 900px) {
    opacity: 0.4;
    &.leaf1 {
      width: 70px;
      height: 170px;
    }
    &.leaf2 {
      width: 80px;
      height: 200px;
    }
    &.leaf3 {
      width: 60px;
      height: 150px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    will-change: auto;
  }
`,If=l.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  animation: ${e=>e.$reducedMotion?"none":GR} 6s ease-in-out infinite;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: ${e=>e.$reducedMotion?"auto":"transform, opacity"};

  &.lotus1 {
    width: 120px;
    height: 120px;
    top: 20%;
    right: 8%;
    animation-delay: 0.5s;
  }

  &.lotus2 {
    width: 100px;
    height: 100px;
    bottom: 25%;
    right: 12%;
    animation-delay: 1.5s;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  /* 4K screens */
  @media (min-width: 2560px) {
    &.lotus1 {
      width: 160px;
      height: 160px;
    }
    &.lotus2 {
      width: 140px;
      height: 140px;
    }
  }

  /* Ultra-wide */
  @media (min-width: 1920px) {
    &.lotus1 {
      width: 140px;
      height: 140px;
    }
    &.lotus2 {
      width: 120px;
      height: 120px;
    }
  }

  /* Laptop */
  @media (max-width: 1024px) {
    &.lotus1 {
      width: 100px;
      height: 100px;
    }
    &.lotus2 {
      width: 85px;
      height: 85px;
    }
  }

  /* Tablets */
  @media (max-width: 900px) {
    opacity: 0.8;
    &.lotus1 {
      width: 90px;
      height: 90px;
    }
    &.lotus2 {
      width: 75px;
      height: 75px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    will-change: auto;
  }
`,XR=l.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  animation: ${e=>e.$reducedMotion?"none":am} 7s ease-in-out infinite;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: ${e=>e.$reducedMotion?"auto":"transform"};

  &.om1 {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 15%;
    animation-delay: 1s;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  /* 4K screens */
  @media (min-width: 2560px) {
    width: 120px;
    height: 120px;
  }

  /* Ultra-wide */
  @media (min-width: 1920px) {
    width: 100px;
    height: 100px;
  }

  /* Laptop */
  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
  }

  /* Tablets */
  @media (max-width: 900px) {
    width: 60px;
    height: 60px;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    will-change: auto;
  }
`,JR=l.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  animation: ${e=>e.$reducedMotion?"none":KR} 40s linear infinite;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: ${e=>e.$reducedMotion?"auto":"transform"};

  &.mandala1 {
    width: 150px;
    height: 150px;
    top: 35%;
    left: 10%;
    opacity: 0.4;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  /* 4K screens */
  @media (min-width: 2560px) {
    width: 200px;
    height: 200px;
  }

  /* Ultra-wide */
  @media (min-width: 1920px) {
    width: 180px;
    height: 180px;
  }

  /* Laptop */
  @media (max-width: 1024px) {
    width: 130px;
    height: 130px;
  }

  /* Tablets */
  @media (max-width: 900px) {
    width: 110px;
    height: 110px;
    opacity: 0.35;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    will-change: auto;
  }
`,Rf=l.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  transform: translateZ(0);
  backface-visibility: hidden;

  &.dots1 {
    top: 15%;
    right: 20%;
    width: 100px;
    height: 80px;
  }

  &.dots2 {
    bottom: 30%;
    left: 20%;
    width: 60px;
    height: 60px;
  }

  /* 4K screens */
  @media (min-width: 2560px) {
    &.dots1 {
      width: 140px;
      height: 110px;
    }
    &.dots2 {
      width: 80px;
      height: 80px;
    }
  }

  /* Ultra-wide */
  @media (min-width: 1920px) {
    &.dots1 {
      width: 120px;
      height: 95px;
    }
    &.dots2 {
      width: 70px;
      height: 70px;
    }
  }

  /* Laptop */
  @media (max-width: 1024px) {
    &.dots1 {
      width: 85px;
      height: 70px;
    }
    &.dots2 {
      width: 50px;
      height: 50px;
    }
  }

  /* Tablets and below */
  @media (max-width: 900px) {
    display: none;
  }
`,Bf=l.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(142, 207, 179, 0.4);
  border-radius: 50%;
  animation: ${qR} 3s ease-in-out infinite;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: opacity;

  /* 4K screens */
  @media (min-width: 2560px) {
    width: 8px;
    height: 8px;
  }

  /* Ultra-wide */
  @media (min-width: 1920px) {
    width: 7px;
    height: 7px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    will-change: auto;
    opacity: 0.4;
  }
`;function eB(){const[e,t]=k.useState(!0),i=()=>{t(!1)};return r.jsxs(r.Fragment,{children:[e&&r.jsx(DR,{onLoadingComplete:i}),r.jsx(Ov,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:r.jsx(Rv,{children:r.jsxs(ut,{path:"/",element:r.jsx(R7,{}),children:[r.jsx(ut,{index:!0,element:r.jsx(pS,{})}),r.jsx(ut,{path:"about",element:r.jsx(US,{})}),r.jsx(ut,{path:"services",element:r.jsx(Bz,{})}),r.jsx(ut,{path:"portfolio",element:r.jsx(iP,{})}),r.jsx(ut,{path:"contact",element:r.jsx(CM,{})}),r.jsx(ut,{path:"philosophy",element:r.jsx(iA,{})}),r.jsx(ut,{path:"testimonials",element:r.jsx(FL,{})}),r.jsx(ut,{path:"blog",element:r.jsx(pE,{})}),r.jsx(ut,{path:"blog/:slug",element:r.jsx(GI,{})})]})})})]})}_d.createRoot(document.getElementById("root")).render(r.jsx(ae.StrictMode,{children:r.jsx(eB,{})}));
