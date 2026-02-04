function u2(e,t){for(var i=0;i<t.length;i++){const n=t[i];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();function f2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Df={exports:{}},Fs={},Vf={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),g2=Symbol.for("react.portal"),x2=Symbol.for("react.fragment"),w2=Symbol.for("react.strict_mode"),y2=Symbol.for("react.profiler"),v2=Symbol.for("react.provider"),b2=Symbol.for("react.context"),k2=Symbol.for("react.forward_ref"),j2=Symbol.for("react.suspense"),$2=Symbol.for("react.memo"),S2=Symbol.for("react.lazy"),N0=Symbol.iterator;function C2(e){return e===null||typeof e!="object"?null:(e=N0&&e[N0]||e["@@iterator"],typeof e=="function"?e:null)}var Nf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Of=Object.assign,_f={};function cr(e,t,i){this.props=e,this.context=t,this.refs=_f,this.updater=i||Nf}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hf(){}Hf.prototype=cr.prototype;function sm(e,t,i){this.props=e,this.context=t,this.refs=_f,this.updater=i||Nf}var lm=sm.prototype=new Hf;lm.constructor=sm;Of(lm,cr.prototype);lm.isPureReactComponent=!0;var O0=Array.isArray,Zf=Object.prototype.hasOwnProperty,dm={current:null},Uf={key:!0,ref:!0,__self:!0,__source:!0};function Yf(e,t,i){var n,a={},o=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Zf.call(t,n)&&!Uf.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(c===1)a.children=i;else if(1<c){for(var m=Array(c),h=0;h<c;h++)m[h]=arguments[h+2];a.children=m}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)a[n]===void 0&&(a[n]=c[n]);return{$$typeof:Ca,type:e,key:o,ref:s,props:a,_owner:dm.current}}function z2(e,t){return{$$typeof:Ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cm(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ca}function T2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var _0=/\/+/g;function yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?T2(""+e.key):t.toString(36)}function To(e,t,i,n,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ca:case g2:s=!0}}if(s)return s=e,a=a(s),e=n===""?"."+yl(s,0):n,O0(a)?(i="",e!=null&&(i=e.replace(_0,"$&/")+"/"),To(a,t,i,"",function(h){return h})):a!=null&&(cm(a)&&(a=z2(a,i+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(_0,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=n===""?".":n+":",O0(e))for(var c=0;c<e.length;c++){o=e[c];var m=n+yl(o,c);s+=To(o,t,i,m,a)}else if(m=C2(e),typeof m=="function")for(e=m.call(e),c=0;!(o=e.next()).done;)o=o.value,m=n+yl(o,c++),s+=To(o,t,i,m,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _a(e,t,i){if(e==null)return e;var n=[],a=0;return To(e,n,"","",function(o){return t.call(i,o,a++)}),n}function P2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Po={transition:null},M2={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Po,ReactCurrentOwner:dm};function Qf(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:_a,forEach:function(e,t,i){_a(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return _a(e,function(){t++}),t},toArray:function(e){return _a(e,function(t){return t})||[]},only:function(e){if(!cm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=cr;O.Fragment=x2;O.Profiler=y2;O.PureComponent=sm;O.StrictMode=w2;O.Suspense=j2;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M2;O.act=Qf;O.cloneElement=function(e,t,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Of({},e.props),a=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=dm.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(m in t)Zf.call(t,m)&&!Uf.hasOwnProperty(m)&&(n[m]=t[m]===void 0&&c!==void 0?c[m]:t[m])}var m=arguments.length-2;if(m===1)n.children=i;else if(1<m){c=Array(m);for(var h=0;h<m;h++)c[h]=arguments[h+2];n.children=c}return{$$typeof:Ca,type:e.type,key:a,ref:o,props:n,_owner:s}};O.createContext=function(e){return e={$$typeof:b2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:v2,_context:e},e.Consumer=e};O.createElement=Yf;O.createFactory=function(e){var t=Yf.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:k2,render:e}};O.isValidElement=cm;O.lazy=function(e){return{$$typeof:S2,_payload:{_status:-1,_result:e},_init:P2}};O.memo=function(e,t){return{$$typeof:$2,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Po.transition;Po.transition={};try{e()}finally{Po.transition=t}};O.unstable_act=Qf;O.useCallback=function(e,t){return Fe.current.useCallback(e,t)};O.useContext=function(e){return Fe.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};O.useEffect=function(e,t){return Fe.current.useEffect(e,t)};O.useId=function(){return Fe.current.useId()};O.useImperativeHandle=function(e,t,i){return Fe.current.useImperativeHandle(e,t,i)};O.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Fe.current.useMemo(e,t)};O.useReducer=function(e,t,i){return Fe.current.useReducer(e,t,i)};O.useRef=function(e){return Fe.current.useRef(e)};O.useState=function(e){return Fe.current.useState(e)};O.useSyncExternalStore=function(e,t,i){return Fe.current.useSyncExternalStore(e,t,i)};O.useTransition=function(){return Fe.current.useTransition()};O.version="18.3.1";Vf.exports=O;var j=Vf.exports;const he=f2(j),A2=u2({__proto__:null,default:he},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L2=j,E2=Symbol.for("react.element"),I2=Symbol.for("react.fragment"),R2=Object.prototype.hasOwnProperty,B2=L2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F2={key:!0,ref:!0,__self:!0,__source:!0};function Gf(e,t,i){var n,a={},o=null,s=null;i!==void 0&&(o=""+i),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)R2.call(t,n)&&!F2.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:E2,type:e,key:o,ref:s,props:a,_owner:B2.current}}Fs.Fragment=I2;Fs.jsx=Gf;Fs.jsxs=Gf;Df.exports=Fs;var r=Df.exports,_d={},Kf={exports:{}},tt={},qf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,R){var F=L.length;L.push(R);e:for(;0<F;){var B=F-1>>>1,H=L[B];if(0<a(H,R))L[B]=R,L[F]=H,F=B;else break e}}function i(L){return L.length===0?null:L[0]}function n(L){if(L.length===0)return null;var R=L[0],F=L.pop();if(F!==R){L[0]=F;e:for(var B=0,H=L.length,St=H>>>1;B<St;){var De=2*(B+1)-1,Ft=L[De],Se=De+1,Ct=L[Se];if(0>a(Ft,F))Se<H&&0>a(Ct,Ft)?(L[B]=Ct,L[Se]=F,B=Se):(L[B]=Ft,L[De]=F,B=De);else if(Se<H&&0>a(Ct,F))L[B]=Ct,L[Se]=F,B=Se;else break e}}return R}function a(L,R){var F=L.sortIndex-R.sortIndex;return F!==0?F:L.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var m=[],h=[],u=1,p=null,f=3,g=!1,v=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(L){for(var R=i(h);R!==null;){if(R.callback===null)n(h);else if(R.startTime<=L)n(h),R.sortIndex=R.expirationTime,t(m,R);else break;R=i(h)}}function $(L){if(b=!1,w(L),!v)if(i(m)!==null)v=!0,q(z);else{var R=i(h);R!==null&&re($,R.startTime-L)}}function z(L,R){v=!1,b&&(b=!1,y(P),P=-1),g=!0;var F=f;try{for(w(R),p=i(m);p!==null&&(!(p.expirationTime>R)||L&&!_());){var B=p.callback;if(typeof B=="function"){p.callback=null,f=p.priorityLevel;var H=B(p.expirationTime<=R);R=e.unstable_now(),typeof H=="function"?p.callback=H:p===i(m)&&n(m),w(R)}else n(m);p=i(m)}if(p!==null)var St=!0;else{var De=i(h);De!==null&&re($,De.startTime-R),St=!1}return St}finally{p=null,f=F,g=!1}}var T=!1,S=null,P=-1,E=5,A=-1;function _(){return!(e.unstable_now()-A<E)}function Y(){if(S!==null){var L=e.unstable_now();A=L;var R=!0;try{R=S(!0,L)}finally{R?ne():(T=!1,S=null)}}else T=!1}var ne;if(typeof x=="function")ne=function(){x(Y)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ue=X.port2;X.port1.onmessage=Y,ne=function(){ue.postMessage(null)}}else ne=function(){C(Y,0)};function q(L){S=L,T||(T=!0,ne())}function re(L,R){P=C(function(){L(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,q(z))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return i(m)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var F=f;f=R;try{return L()}finally{f=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,R){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var F=f;f=L;try{return R()}finally{f=F}},e.unstable_scheduleCallback=function(L,R,F){var B=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?B+F:B):F=B,L){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=F+H,L={id:u++,callback:R,priorityLevel:L,startTime:F,expirationTime:H,sortIndex:-1},F>B?(L.sortIndex=F,t(h,L),i(m)===null&&L===i(h)&&(b?(y(P),P=-1):b=!0,re($,F-B))):(L.sortIndex=H,t(m,L),v||g||(v=!0,q(z))),L},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(L){var R=f;return function(){var F=f;f=R;try{return L.apply(this,arguments)}finally{f=F}}}})(Xf);qf.exports=Xf;var W2=qf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D2=j,Je=W2;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jf=new Set,ea={};function hn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(ea[e]=t,e=0;e<t.length;e++)Jf.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hd=Object.prototype.hasOwnProperty,V2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H0={},Z0={};function N2(e){return Hd.call(Z0,e)?!0:Hd.call(H0,e)?!1:V2.test(e)?Z0[e]=!0:(H0[e]=!0,!1)}function O2(e,t,i,n){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _2(e,t,i,n){if(t===null||typeof t>"u"||O2(e,t,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,i,n,a,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var mm=/[\-:]([a-z])/g;function hm(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mm,hm);Pe[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mm,hm);Pe[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mm,hm);Pe[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function pm(e,t,i,n){var a=Pe.hasOwnProperty(t)?Pe[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_2(t,i,a,n)&&(i=null),n||a===null?N2(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):a.mustUseProperty?e[a.propertyName]=i===null?a.type===3?!1:"":i:(t=a.attributeName,n=a.attributeNamespace,i===null?e.removeAttribute(t):(a=a.type,i=a===3||a===4&&i===!0?"":""+i,n?e.setAttributeNS(n,t,i):e.setAttribute(t,i))))}var ti=D2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),um=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),fm=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),gm=Symbol.for("react.memo"),di=Symbol.for("react.lazy"),ig=Symbol.for("react.offscreen"),U0=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=U0&&e[U0]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,vl;function Ar(e){if(vl===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);vl=t&&t[1]||""}return`
`+vl+e}var bl=!1;function kl(e,t){if(!e||bl)return"";bl=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var n=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){n=h}e.call(t.prototype)}else{try{throw Error()}catch(h){n=h}e()}}catch(h){if(h&&n&&typeof h.stack=="string"){for(var a=h.stack.split(`
`),o=n.stack.split(`
`),s=a.length-1,c=o.length-1;1<=s&&0<=c&&a[s]!==o[c];)c--;for(;1<=s&&0<=c;s--,c--)if(a[s]!==o[c]){if(s!==1||c!==1)do if(s--,c--,0>c||a[s]!==o[c]){var m=`
`+a[s].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=s&&0<=c);break}}}finally{bl=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Ar(e):""}function H2(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=kl(e.type,!1),e;case 11:return e=kl(e.type.render,!1),e;case 1:return e=kl(e.type,!0),e;default:return""}}function Qd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case $n:return"Portal";case Zd:return"Profiler";case um:return"StrictMode";case Ud:return"Suspense";case Yd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tg:return(e.displayName||"Context")+".Consumer";case eg:return(e._context.displayName||"Context")+".Provider";case fm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gm:return t=e.displayName||null,t!==null?t:Qd(e.type)||"Memo";case di:t=e._payload,e=e._init;try{return Qd(e(t))}catch{}}return null}function Z2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qd(t);case 8:return t===um?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ng(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function U2(e){var t=ng(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,o=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Za(e){e._valueTracker||(e._valueTracker=U2(e))}function rg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=ng(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gd(e,t){var i=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Y0(e,t){var i=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;i=Mi(t.value!=null?t.value:i),e._wrapperState={initialChecked:n,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ag(e,t){t=t.checked,t!=null&&pm(e,"checked",t,!1)}function Kd(e,t){ag(e,t);var i=Mi(t.value),n=t.type;if(i!=null)n==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qd(e,t.type,i):t.hasOwnProperty("defaultValue")&&qd(e,t.type,Mi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Q0(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function qd(e,t,i){(t!=="number"||Ko(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Lr=Array.isArray;function On(e,t,i,n){if(e=e.options,t){t={};for(var a=0;a<i.length;a++)t["$"+i[a]]=!0;for(i=0;i<e.length;i++)a=t.hasOwnProperty("$"+e[i].value),e[i].selected!==a&&(e[i].selected=a),a&&n&&(e[i].defaultSelected=!0)}else{for(i=""+Mi(i),t=null,a=0;a<e.length;a++){if(e[a].value===i){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Xd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function G0(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(M(92));if(Lr(i)){if(1<i.length)throw Error(M(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Mi(i)}}function og(e,t){var i=Mi(t.value),n=Mi(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),n!=null&&(e.defaultValue=""+n)}function K0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ua,lg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,i,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ua=Ua||document.createElement("div"),Ua.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ua.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ta(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y2=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){Y2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function dg(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function cg(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var n=i.indexOf("--")===0,a=dg(i,t[i],n);i==="float"&&(i="cssFloat"),n?e.setProperty(i,a):e[i]=a}}var Q2=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(e,t){if(t){if(Q2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function tc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ic=null;function xm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nc=null,_n=null,Hn=null;function q0(e){if(e=Pa(e)){if(typeof nc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Os(t),nc(e.stateNode,e.type,t))}}function mg(e){_n?Hn?Hn.push(e):Hn=[e]:_n=e}function hg(){if(_n){var e=_n,t=Hn;if(Hn=_n=null,q0(e),t)for(e=0;e<t.length;e++)q0(t[e])}}function pg(e,t){return e(t)}function ug(){}var jl=!1;function fg(e,t,i){if(jl)return e(t,i);jl=!0;try{return pg(e,t,i)}finally{jl=!1,(_n!==null||Hn!==null)&&(ug(),hg())}}function ia(e,t){var i=e.stateNode;if(i===null)return null;var n=Os(i);if(n===null)return null;i=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(M(231,t,typeof i));return i}var rc=!1;if(Kt)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){rc=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{rc=!1}function G2(e,t,i,n,a,o,s,c,m){var h=Array.prototype.slice.call(arguments,3);try{t.apply(i,h)}catch(u){this.onError(u)}}var Dr=!1,qo=null,Xo=!1,ac=null,K2={onError:function(e){Dr=!0,qo=e}};function q2(e,t,i,n,a,o,s,c,m){Dr=!1,qo=null,G2.apply(K2,arguments)}function X2(e,t,i,n,a,o,s,c,m){if(q2.apply(this,arguments),Dr){if(Dr){var h=qo;Dr=!1,qo=null}else throw Error(M(198));Xo||(Xo=!0,ac=h)}}function pn(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function gg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function X0(e){if(pn(e)!==e)throw Error(M(188))}function J2(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var i=e,n=t;;){var a=i.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){i=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===i)return X0(a),e;if(o===n)return X0(a),t;o=o.sibling}throw Error(M(188))}if(i.return!==n.return)i=a,n=o;else{for(var s=!1,c=a.child;c;){if(c===i){s=!0,i=a,n=o;break}if(c===n){s=!0,n=a,i=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===i){s=!0,i=o,n=a;break}if(c===n){s=!0,n=o,i=a;break}c=c.sibling}if(!s)throw Error(M(189))}}if(i.alternate!==n)throw Error(M(190))}if(i.tag!==3)throw Error(M(188));return i.stateNode.current===i?e:t}function xg(e){return e=J2(e),e!==null?wg(e):null}function wg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wg(e);if(t!==null)return t;e=e.sibling}return null}var yg=Je.unstable_scheduleCallback,J0=Je.unstable_cancelCallback,ew=Je.unstable_shouldYield,tw=Je.unstable_requestPaint,fe=Je.unstable_now,iw=Je.unstable_getCurrentPriorityLevel,wm=Je.unstable_ImmediatePriority,vg=Je.unstable_UserBlockingPriority,Jo=Je.unstable_NormalPriority,nw=Je.unstable_LowPriority,bg=Je.unstable_IdlePriority,Ws=null,Et=null;function rw(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ws,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:sw,aw=Math.log,ow=Math.LN2;function sw(e){return e>>>=0,e===0?32:31-(aw(e)/ow|0)|0}var Ya=64,Qa=4194304;function Er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function es(e,t){var i=e.pendingLanes;if(i===0)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,s=i&268435455;if(s!==0){var c=s&~a;c!==0?n=Er(c):(o&=s,o!==0&&(n=Er(o)))}else s=i&~a,s!==0?n=Er(s):o!==0&&(n=Er(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(n&4&&(n|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)i=31-vt(t),a=1<<i,n|=e[i],t&=~a;return n}function lw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dw(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-vt(o),c=1<<s,m=a[s];m===-1?(!(c&i)||c&n)&&(a[s]=lw(c,t)):m<=t&&(e.expiredLanes|=c),o&=~c}}function oc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kg(){var e=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),e}function $l(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function za(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=i}function cw(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<i;){var a=31-vt(i),o=1<<a;t[a]=0,n[a]=-1,e[a]=-1,i&=~o}}function ym(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-vt(i),a=1<<n;a&t|e[n]&t&&(e[n]|=t),i&=~a}}var K=0;function jg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $g,vm,Sg,Cg,zg,sc=!1,Ga=[],yi=null,vi=null,bi=null,na=new Map,ra=new Map,hi=[],mw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eh(e,t){switch(e){case"focusin":case"focusout":yi=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":bi=null;break;case"pointerover":case"pointerout":na.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(t.pointerId)}}function wr(e,t,i,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Pa(t),t!==null&&vm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function hw(e,t,i,n,a){switch(t){case"focusin":return yi=wr(yi,e,t,i,n,a),!0;case"dragenter":return vi=wr(vi,e,t,i,n,a),!0;case"mouseover":return bi=wr(bi,e,t,i,n,a),!0;case"pointerover":var o=a.pointerId;return na.set(o,wr(na.get(o)||null,e,t,i,n,a)),!0;case"gotpointercapture":return o=a.pointerId,ra.set(o,wr(ra.get(o)||null,e,t,i,n,a)),!0}return!1}function Tg(e){var t=Yi(e.target);if(t!==null){var i=pn(t);if(i!==null){if(t=i.tag,t===13){if(t=gg(i),t!==null){e.blockedOn=t,zg(e.priority,function(){Sg(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=lc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);ic=n,i.target.dispatchEvent(n),ic=null}else return t=Pa(i),t!==null&&vm(t),e.blockedOn=i,!1;t.shift()}return!0}function th(e,t,i){Mo(e)&&i.delete(t)}function pw(){sc=!1,yi!==null&&Mo(yi)&&(yi=null),vi!==null&&Mo(vi)&&(vi=null),bi!==null&&Mo(bi)&&(bi=null),na.forEach(th),ra.forEach(th)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,sc||(sc=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,pw)))}function aa(e){function t(a){return yr(a,e)}if(0<Ga.length){yr(Ga[0],e);for(var i=1;i<Ga.length;i++){var n=Ga[i];n.blockedOn===e&&(n.blockedOn=null)}}for(yi!==null&&yr(yi,e),vi!==null&&yr(vi,e),bi!==null&&yr(bi,e),na.forEach(t),ra.forEach(t),i=0;i<hi.length;i++)n=hi[i],n.blockedOn===e&&(n.blockedOn=null);for(;0<hi.length&&(i=hi[0],i.blockedOn===null);)Tg(i),i.blockedOn===null&&hi.shift()}var Zn=ti.ReactCurrentBatchConfig,ts=!0;function uw(e,t,i,n){var a=K,o=Zn.transition;Zn.transition=null;try{K=1,bm(e,t,i,n)}finally{K=a,Zn.transition=o}}function fw(e,t,i,n){var a=K,o=Zn.transition;Zn.transition=null;try{K=4,bm(e,t,i,n)}finally{K=a,Zn.transition=o}}function bm(e,t,i,n){if(ts){var a=lc(e,t,i,n);if(a===null)Il(e,t,n,is,i),eh(e,n);else if(hw(a,e,t,i,n))n.stopPropagation();else if(eh(e,n),t&4&&-1<mw.indexOf(e)){for(;a!==null;){var o=Pa(a);if(o!==null&&$g(o),o=lc(e,t,i,n),o===null&&Il(e,t,n,is,i),o===a)break;a=o}a!==null&&n.stopPropagation()}else Il(e,t,n,null,i)}}var is=null;function lc(e,t,i,n){if(is=null,e=xm(n),e=Yi(e),e!==null)if(t=pn(e),t===null)e=null;else if(i=t.tag,i===13){if(e=gg(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return is=e,null}function Pg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iw()){case wm:return 1;case vg:return 4;case Jo:case nw:return 16;case bg:return 536870912;default:return 16}default:return 16}}var fi=null,km=null,Ao=null;function Mg(){if(Ao)return Ao;var e,t=km,i=t.length,n,a="value"in fi?fi.value:fi.textContent,o=a.length;for(e=0;e<i&&t[e]===a[e];e++);var s=i-e;for(n=1;n<=s&&t[i-n]===a[o-n];n++);return Ao=a.slice(e,1<n?1-n:void 0)}function Lo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ka(){return!0}function ih(){return!1}function it(e){function t(i,n,a,o,s){this._reactName=i,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(i=e[c],this[c]=i?i(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ka:ih,this.isPropagationStopped=ih,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jm=it(mr),Ta=de({},mr,{view:0,detail:0}),gw=it(Ta),Sl,Cl,vr,Ds=de({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$m,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Sl=e.screenX-vr.screenX,Cl=e.screenY-vr.screenY):Cl=Sl=0,vr=e),Sl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),nh=it(Ds),xw=de({},Ds,{dataTransfer:0}),ww=it(xw),yw=de({},Ta,{relatedTarget:0}),zl=it(yw),vw=de({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),bw=it(vw),kw=de({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jw=it(kw),$w=de({},mr,{data:0}),rh=it($w),Sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zw[e])?!!t[e]:!1}function $m(){return Tw}var Pw=de({},Ta,{key:function(e){if(e.key){var t=Sw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$m,charCode:function(e){return e.type==="keypress"?Lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mw=it(Pw),Aw=de({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=it(Aw),Lw=de({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$m}),Ew=it(Lw),Iw=de({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rw=it(Iw),Bw=de({},Ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fw=it(Bw),Ww=[9,13,27,32],Sm=Kt&&"CompositionEvent"in window,Vr=null;Kt&&"documentMode"in document&&(Vr=document.documentMode);var Dw=Kt&&"TextEvent"in window&&!Vr,Ag=Kt&&(!Sm||Vr&&8<Vr&&11>=Vr),oh=" ",sh=!1;function Lg(e,t){switch(e){case"keyup":return Ww.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Vw(e,t){switch(e){case"compositionend":return Eg(t);case"keypress":return t.which!==32?null:(sh=!0,oh);case"textInput":return e=t.data,e===oh&&sh?null:e;default:return null}}function Nw(e,t){if(Cn)return e==="compositionend"||!Sm&&Lg(e,t)?(e=Mg(),Ao=km=fi=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ag&&t.locale!=="ko"?null:t.data;default:return null}}var Ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ow[e.type]:t==="textarea"}function Ig(e,t,i,n){mg(n),t=ns(t,"onChange"),0<t.length&&(i=new jm("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var Nr=null,oa=null;function _w(e){Zg(e,0)}function Vs(e){var t=Pn(e);if(rg(t))return e}function Hw(e,t){if(e==="change")return t}var Rg=!1;if(Kt){var Tl;if(Kt){var Pl="oninput"in document;if(!Pl){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),Pl=typeof dh.oninput=="function"}Tl=Pl}else Tl=!1;Rg=Tl&&(!document.documentMode||9<document.documentMode)}function ch(){Nr&&(Nr.detachEvent("onpropertychange",Bg),oa=Nr=null)}function Bg(e){if(e.propertyName==="value"&&Vs(oa)){var t=[];Ig(t,oa,e,xm(e)),fg(_w,t)}}function Zw(e,t,i){e==="focusin"?(ch(),Nr=t,oa=i,Nr.attachEvent("onpropertychange",Bg)):e==="focusout"&&ch()}function Uw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vs(oa)}function Yw(e,t){if(e==="click")return Vs(t)}function Qw(e,t){if(e==="input"||e==="change")return Vs(t)}function Gw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Gw;function sa(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var a=i[n];if(!Hd.call(t,a)||!jt(e[a],t[a]))return!1}return!0}function mh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hh(e,t){var i=mh(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=mh(i)}}function Fg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wg(){for(var e=window,t=Ko();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Ko(e.document)}return t}function Cm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kw(e){var t=Wg(),i=e.focusedElem,n=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Fg(i.ownerDocument.documentElement,i)){if(n!==null&&Cm(i)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=i.textContent.length,o=Math.min(n.start,a);n=n.end===void 0?o:Math.min(n.end,a),!e.extend&&o>n&&(a=n,n=o,o=a),a=hh(i,o);var s=hh(i,n);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qw=Kt&&"documentMode"in document&&11>=document.documentMode,zn=null,dc=null,Or=null,cc=!1;function ph(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;cc||zn==null||zn!==Ko(n)||(n=zn,"selectionStart"in n&&Cm(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Or&&sa(Or,n)||(Or=n,n=ns(dc,"onSelect"),0<n.length&&(t=new jm("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=zn)))}function qa(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Tn={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},Ml={},Dg={};Kt&&(Dg=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function Ns(e){if(Ml[e])return Ml[e];if(!Tn[e])return e;var t=Tn[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Dg)return Ml[e]=t[i];return e}var Vg=Ns("animationend"),Ng=Ns("animationiteration"),Og=Ns("animationstart"),_g=Ns("transitionend"),Hg=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(e,t){Hg.set(e,t),hn(t,[e])}for(var Al=0;Al<uh.length;Al++){var Ll=uh[Al],Xw=Ll.toLowerCase(),Jw=Ll[0].toUpperCase()+Ll.slice(1);Ii(Xw,"on"+Jw)}Ii(Vg,"onAnimationEnd");Ii(Ng,"onAnimationIteration");Ii(Og,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(_g,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function fh(e,t,i){var n=e.type||"unknown-event";e.currentTarget=i,X2(n,t,void 0,e),e.currentTarget=null}function Zg(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var c=n[s],m=c.instance,h=c.currentTarget;if(c=c.listener,m!==o&&a.isPropagationStopped())break e;fh(a,c,h),o=m}else for(s=0;s<n.length;s++){if(c=n[s],m=c.instance,h=c.currentTarget,c=c.listener,m!==o&&a.isPropagationStopped())break e;fh(a,c,h),o=m}}}if(Xo)throw e=ac,Xo=!1,ac=null,e}function ee(e,t){var i=t[fc];i===void 0&&(i=t[fc]=new Set);var n=e+"__bubble";i.has(n)||(Ug(t,e,2,!1),i.add(n))}function El(e,t,i){var n=0;t&&(n|=4),Ug(i,e,n,t)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function la(e){if(!e[Xa]){e[Xa]=!0,Jf.forEach(function(i){i!=="selectionchange"&&(ey.has(i)||El(i,!1,e),El(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xa]||(t[Xa]=!0,El("selectionchange",!1,t))}}function Ug(e,t,i,n){switch(Pg(t)){case 1:var a=uw;break;case 4:a=fw;break;default:a=bm}i=a.bind(null,t,i,e),a=void 0,!rc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,i,{capture:!0,passive:a}):e.addEventListener(t,i,!0):a!==void 0?e.addEventListener(t,i,{passive:a}):e.addEventListener(t,i,!1)}function Il(e,t,i,n,a){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var c=n.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(s===4)for(s=n.return;s!==null;){var m=s.tag;if((m===3||m===4)&&(m=s.stateNode.containerInfo,m===a||m.nodeType===8&&m.parentNode===a))return;s=s.return}for(;c!==null;){if(s=Yi(c),s===null)return;if(m=s.tag,m===5||m===6){n=o=s;continue e}c=c.parentNode}}n=n.return}fg(function(){var h=o,u=xm(i),p=[];e:{var f=Hg.get(e);if(f!==void 0){var g=jm,v=e;switch(e){case"keypress":if(Lo(i)===0)break e;case"keydown":case"keyup":g=Mw;break;case"focusin":v="focus",g=zl;break;case"focusout":v="blur",g=zl;break;case"beforeblur":case"afterblur":g=zl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ww;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ew;break;case Vg:case Ng:case Og:g=bw;break;case _g:g=Rw;break;case"scroll":g=gw;break;case"wheel":g=Fw;break;case"copy":case"cut":case"paste":g=jw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ah}var b=(t&4)!==0,C=!b&&e==="scroll",y=b?f!==null?f+"Capture":null:f;b=[];for(var x=h,w;x!==null;){w=x;var $=w.stateNode;if(w.tag===5&&$!==null&&(w=$,y!==null&&($=ia(x,y),$!=null&&b.push(da(x,$,w)))),C)break;x=x.return}0<b.length&&(f=new g(f,v,null,i,u),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&i!==ic&&(v=i.relatedTarget||i.fromElement)&&(Yi(v)||v[qt]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=i.relatedTarget||i.toElement,g=h,v=v?Yi(v):null,v!==null&&(C=pn(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=h),g!==v)){if(b=nh,$="onMouseLeave",y="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(b=ah,$="onPointerLeave",y="onPointerEnter",x="pointer"),C=g==null?f:Pn(g),w=v==null?f:Pn(v),f=new b($,x+"leave",g,i,u),f.target=C,f.relatedTarget=w,$=null,Yi(u)===h&&(b=new b(y,x+"enter",v,i,u),b.target=w,b.relatedTarget=C,$=b),C=$,g&&v)t:{for(b=g,y=v,x=0,w=b;w;w=yn(w))x++;for(w=0,$=y;$;$=yn($))w++;for(;0<x-w;)b=yn(b),x--;for(;0<w-x;)y=yn(y),w--;for(;x--;){if(b===y||y!==null&&b===y.alternate)break t;b=yn(b),y=yn(y)}b=null}else b=null;g!==null&&gh(p,f,g,b,!1),v!==null&&C!==null&&gh(p,C,v,b,!0)}}e:{if(f=h?Pn(h):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var z=Hw;else if(lh(f))if(Rg)z=Qw;else{z=Uw;var T=Zw}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(z=Yw);if(z&&(z=z(e,h))){Ig(p,z,i,u);break e}T&&T(e,f,h),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&qd(f,"number",f.value)}switch(T=h?Pn(h):window,e){case"focusin":(lh(T)||T.contentEditable==="true")&&(zn=T,dc=h,Or=null);break;case"focusout":Or=dc=zn=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,ph(p,i,u);break;case"selectionchange":if(qw)break;case"keydown":case"keyup":ph(p,i,u)}var S;if(Sm)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Cn?Lg(e,i)&&(P="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(P="onCompositionStart");P&&(Ag&&i.locale!=="ko"&&(Cn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Cn&&(S=Mg()):(fi=u,km="value"in fi?fi.value:fi.textContent,Cn=!0)),T=ns(h,P),0<T.length&&(P=new rh(P,e,null,i,u),p.push({event:P,listeners:T}),S?P.data=S:(S=Eg(i),S!==null&&(P.data=S)))),(S=Dw?Vw(e,i):Nw(e,i))&&(h=ns(h,"onBeforeInput"),0<h.length&&(u=new rh("onBeforeInput","beforeinput",null,i,u),p.push({event:u,listeners:h}),u.data=S))}Zg(p,t)})}function da(e,t,i){return{instance:e,listener:t,currentTarget:i}}function ns(e,t){for(var i=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=ia(e,i),o!=null&&n.unshift(da(e,o,a)),o=ia(e,t),o!=null&&n.push(da(e,o,a))),e=e.return}return n}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gh(e,t,i,n,a){for(var o=t._reactName,s=[];i!==null&&i!==n;){var c=i,m=c.alternate,h=c.stateNode;if(m!==null&&m===n)break;c.tag===5&&h!==null&&(c=h,a?(m=ia(i,o),m!=null&&s.unshift(da(i,m,c))):a||(m=ia(i,o),m!=null&&s.push(da(i,m,c)))),i=i.return}s.length!==0&&e.push({event:t,listeners:s})}var ty=/\r\n?/g,iy=/\u0000|\uFFFD/g;function xh(e){return(typeof e=="string"?e:""+e).replace(ty,`
`).replace(iy,"")}function Ja(e,t,i){if(t=xh(t),xh(e)!==t&&i)throw Error(M(425))}function rs(){}var mc=null,hc=null;function pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,ny=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(e){return wh.resolve(null).then(e).catch(ay)}:uc;function ay(e){setTimeout(function(){throw e})}function Rl(e,t){var i=t,n=0;do{var a=i.nextSibling;if(e.removeChild(i),a&&a.nodeType===8)if(i=a.data,i==="/$"){if(n===0){e.removeChild(a),aa(t);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=a}while(i);aa(t)}function ki(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),Lt="__reactFiber$"+hr,ca="__reactProps$"+hr,qt="__reactContainer$"+hr,fc="__reactEvents$"+hr,oy="__reactListeners$"+hr,sy="__reactHandles$"+hr;function Yi(e){var t=e[Lt];if(t)return t;for(var i=e.parentNode;i;){if(t=i[qt]||i[Lt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=yh(e);e!==null;){if(i=e[Lt])return i;e=yh(e)}return t}e=i,i=e.parentNode}return null}function Pa(e){return e=e[Lt]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Os(e){return e[ca]||null}var gc=[],Mn=-1;function Ri(e){return{current:e}}function ie(e){0>Mn||(e.current=gc[Mn],gc[Mn]=null,Mn--)}function J(e,t){Mn++,gc[Mn]=e.current,e.current=t}var Ai={},Ee=Ri(Ai),He=Ri(!1),on=Ai;function Gn(e,t){var i=e.type.contextTypes;if(!i)return Ai;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in i)a[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ze(e){return e=e.childContextTypes,e!=null}function as(){ie(He),ie(Ee)}function vh(e,t,i){if(Ee.current!==Ai)throw Error(M(168));J(Ee,t),J(He,i)}function Yg(e,t,i){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(M(108,Z2(e)||"Unknown",a));return de({},i,n)}function os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ai,on=Ee.current,J(Ee,e),J(He,He.current),!0}function bh(e,t,i){var n=e.stateNode;if(!n)throw Error(M(169));i?(e=Yg(e,t,on),n.__reactInternalMemoizedMergedChildContext=e,ie(He),ie(Ee),J(Ee,e)):ie(He),J(He,i)}var Nt=null,_s=!1,Bl=!1;function Qg(e){Nt===null?Nt=[e]:Nt.push(e)}function ly(e){_s=!0,Qg(e)}function Bi(){if(!Bl&&Nt!==null){Bl=!0;var e=0,t=K;try{var i=Nt;for(K=1;e<i.length;e++){var n=i[e];do n=n(!0);while(n!==null)}Nt=null,_s=!1}catch(a){throw Nt!==null&&(Nt=Nt.slice(e+1)),yg(wm,Bi),a}finally{K=t,Bl=!1}}return null}var An=[],Ln=0,ss=null,ls=0,at=[],ot=0,sn=null,_t=1,Ht="";function Oi(e,t){An[Ln++]=ls,An[Ln++]=ss,ss=e,ls=t}function Gg(e,t,i){at[ot++]=_t,at[ot++]=Ht,at[ot++]=sn,sn=e;var n=_t;e=Ht;var a=32-vt(n)-1;n&=~(1<<a),i+=1;var o=32-vt(t)+a;if(30<o){var s=a-a%5;o=(n&(1<<s)-1).toString(32),n>>=s,a-=s,_t=1<<32-vt(t)+a|i<<a|n,Ht=o+e}else _t=1<<o|i<<a|n,Ht=e}function zm(e){e.return!==null&&(Oi(e,1),Gg(e,1,0))}function Tm(e){for(;e===ss;)ss=An[--Ln],An[Ln]=null,ls=An[--Ln],An[Ln]=null;for(;e===sn;)sn=at[--ot],at[ot]=null,Ht=at[--ot],at[ot]=null,_t=at[--ot],at[ot]=null}var Xe=null,qe=null,ae=!1,wt=null;function Kg(e,t){var i=st(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function kh(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,qe=ki(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=sn!==null?{id:_t,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=st(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Xe=e,qe=null,!0):!1;default:return!1}}function xc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wc(e){if(ae){var t=qe;if(t){var i=t;if(!kh(e,t)){if(xc(e))throw Error(M(418));t=ki(i.nextSibling);var n=Xe;t&&kh(e,t)?Kg(n,i):(e.flags=e.flags&-4097|2,ae=!1,Xe=e)}}else{if(xc(e))throw Error(M(418));e.flags=e.flags&-4097|2,ae=!1,Xe=e}}}function jh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function eo(e){if(e!==Xe)return!1;if(!ae)return jh(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pc(e.type,e.memoizedProps)),t&&(t=qe)){if(xc(e))throw qg(),Error(M(418));for(;t;)Kg(e,t),t=ki(t.nextSibling)}if(jh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){qe=ki(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Xe?ki(e.stateNode.nextSibling):null;return!0}function qg(){for(var e=qe;e;)e=ki(e.nextSibling)}function Kn(){qe=Xe=null,ae=!1}function Pm(e){wt===null?wt=[e]:wt.push(e)}var dy=ti.ReactCurrentBatchConfig;function br(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(M(309));var n=i.stateNode}if(!n)throw Error(M(147,e));var a=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var c=a.refs;s===null?delete c[o]:c[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!i._owner)throw Error(M(290,e))}return e}function to(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $h(e){var t=e._init;return t(e._payload)}function Xg(e){function t(y,x){if(e){var w=y.deletions;w===null?(y.deletions=[x],y.flags|=16):w.push(x)}}function i(y,x){if(!e)return null;for(;x!==null;)t(y,x),x=x.sibling;return null}function n(y,x){for(y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function a(y,x){return y=Ci(y,x),y.index=0,y.sibling=null,y}function o(y,x,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<x?(y.flags|=2,x):w):(y.flags|=2,x)):(y.flags|=1048576,x)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function c(y,x,w,$){return x===null||x.tag!==6?(x=_l(w,y.mode,$),x.return=y,x):(x=a(x,w),x.return=y,x)}function m(y,x,w,$){var z=w.type;return z===Sn?u(y,x,w.props.children,$,w.key):x!==null&&(x.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===di&&$h(z)===x.type)?($=a(x,w.props),$.ref=br(y,x,w),$.return=y,$):($=Do(w.type,w.key,w.props,null,y.mode,$),$.ref=br(y,x,w),$.return=y,$)}function h(y,x,w,$){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=Hl(w,y.mode,$),x.return=y,x):(x=a(x,w.children||[]),x.return=y,x)}function u(y,x,w,$,z){return x===null||x.tag!==7?(x=tn(w,y.mode,$,z),x.return=y,x):(x=a(x,w),x.return=y,x)}function p(y,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return x=_l(""+x,y.mode,w),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ha:return w=Do(x.type,x.key,x.props,null,y.mode,w),w.ref=br(y,null,x),w.return=y,w;case $n:return x=Hl(x,y.mode,w),x.return=y,x;case di:var $=x._init;return p(y,$(x._payload),w)}if(Lr(x)||gr(x))return x=tn(x,y.mode,w,null),x.return=y,x;to(y,x)}return null}function f(y,x,w,$){var z=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return z!==null?null:c(y,x,""+w,$);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ha:return w.key===z?m(y,x,w,$):null;case $n:return w.key===z?h(y,x,w,$):null;case di:return z=w._init,f(y,x,z(w._payload),$)}if(Lr(w)||gr(w))return z!==null?null:u(y,x,w,$,null);to(y,w)}return null}function g(y,x,w,$,z){if(typeof $=="string"&&$!==""||typeof $=="number")return y=y.get(w)||null,c(x,y,""+$,z);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Ha:return y=y.get($.key===null?w:$.key)||null,m(x,y,$,z);case $n:return y=y.get($.key===null?w:$.key)||null,h(x,y,$,z);case di:var T=$._init;return g(y,x,w,T($._payload),z)}if(Lr($)||gr($))return y=y.get(w)||null,u(x,y,$,z,null);to(x,$)}return null}function v(y,x,w,$){for(var z=null,T=null,S=x,P=x=0,E=null;S!==null&&P<w.length;P++){S.index>P?(E=S,S=null):E=S.sibling;var A=f(y,S,w[P],$);if(A===null){S===null&&(S=E);break}e&&S&&A.alternate===null&&t(y,S),x=o(A,x,P),T===null?z=A:T.sibling=A,T=A,S=E}if(P===w.length)return i(y,S),ae&&Oi(y,P),z;if(S===null){for(;P<w.length;P++)S=p(y,w[P],$),S!==null&&(x=o(S,x,P),T===null?z=S:T.sibling=S,T=S);return ae&&Oi(y,P),z}for(S=n(y,S);P<w.length;P++)E=g(S,y,P,w[P],$),E!==null&&(e&&E.alternate!==null&&S.delete(E.key===null?P:E.key),x=o(E,x,P),T===null?z=E:T.sibling=E,T=E);return e&&S.forEach(function(_){return t(y,_)}),ae&&Oi(y,P),z}function b(y,x,w,$){var z=gr(w);if(typeof z!="function")throw Error(M(150));if(w=z.call(w),w==null)throw Error(M(151));for(var T=z=null,S=x,P=x=0,E=null,A=w.next();S!==null&&!A.done;P++,A=w.next()){S.index>P?(E=S,S=null):E=S.sibling;var _=f(y,S,A.value,$);if(_===null){S===null&&(S=E);break}e&&S&&_.alternate===null&&t(y,S),x=o(_,x,P),T===null?z=_:T.sibling=_,T=_,S=E}if(A.done)return i(y,S),ae&&Oi(y,P),z;if(S===null){for(;!A.done;P++,A=w.next())A=p(y,A.value,$),A!==null&&(x=o(A,x,P),T===null?z=A:T.sibling=A,T=A);return ae&&Oi(y,P),z}for(S=n(y,S);!A.done;P++,A=w.next())A=g(S,y,P,A.value,$),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?P:A.key),x=o(A,x,P),T===null?z=A:T.sibling=A,T=A);return e&&S.forEach(function(Y){return t(y,Y)}),ae&&Oi(y,P),z}function C(y,x,w,$){if(typeof w=="object"&&w!==null&&w.type===Sn&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ha:e:{for(var z=w.key,T=x;T!==null;){if(T.key===z){if(z=w.type,z===Sn){if(T.tag===7){i(y,T.sibling),x=a(T,w.props.children),x.return=y,y=x;break e}}else if(T.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===di&&$h(z)===T.type){i(y,T.sibling),x=a(T,w.props),x.ref=br(y,T,w),x.return=y,y=x;break e}i(y,T);break}else t(y,T);T=T.sibling}w.type===Sn?(x=tn(w.props.children,y.mode,$,w.key),x.return=y,y=x):($=Do(w.type,w.key,w.props,null,y.mode,$),$.ref=br(y,x,w),$.return=y,y=$)}return s(y);case $n:e:{for(T=w.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){i(y,x.sibling),x=a(x,w.children||[]),x.return=y,y=x;break e}else{i(y,x);break}else t(y,x);x=x.sibling}x=Hl(w,y.mode,$),x.return=y,y=x}return s(y);case di:return T=w._init,C(y,x,T(w._payload),$)}if(Lr(w))return v(y,x,w,$);if(gr(w))return b(y,x,w,$);to(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,x!==null&&x.tag===6?(i(y,x.sibling),x=a(x,w),x.return=y,y=x):(i(y,x),x=_l(w,y.mode,$),x.return=y,y=x),s(y)):i(y,x)}return C}var qn=Xg(!0),Jg=Xg(!1),ds=Ri(null),cs=null,En=null,Mm=null;function Am(){Mm=En=cs=null}function Lm(e){var t=ds.current;ie(ds),e._currentValue=t}function yc(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function Un(e,t){cs=e,Mm=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Mm!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(cs===null)throw Error(M(308));En=e,cs.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var Qi=null;function Em(e){Qi===null?Qi=[e]:Qi.push(e)}function ex(e,t,i,n){var a=t.interleaved;return a===null?(i.next=i,Em(t)):(i.next=a.next,a.next=i),t.interleaved=i,Xt(e,n)}function Xt(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var ci=!1;function Im(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ji(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,Z&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,Xt(e,i)}return a=n.interleaved,a===null?(t.next=t,Em(n)):(t.next=a.next,a.next=t),n.interleaved=t,Xt(e,i)}function Eo(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,ym(e,i)}}function Sh(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var a=null,o=null;if(i=i.firstBaseUpdate,i!==null){do{var s={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};o===null?a=o=s:o=o.next=s,i=i.next}while(i!==null);o===null?a=o=t:o=o.next=t}else a=o=t;i={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function ms(e,t,i,n){var a=e.updateQueue;ci=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var m=c,h=m.next;m.next=null,s===null?o=h:s.next=h,s=m;var u=e.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==s&&(c===null?u.firstBaseUpdate=h:c.next=h,u.lastBaseUpdate=m))}if(o!==null){var p=a.baseState;s=0,u=h=m=null,c=o;do{var f=c.lane,g=c.eventTime;if((n&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var v=e,b=c;switch(f=t,g=i,b.tag){case 1:if(v=b.payload,typeof v=="function"){p=v.call(g,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,f=typeof v=="function"?v.call(g,p,f):v,f==null)break e;p=de({},p,f);break e;case 2:ci=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[c]:f.push(c))}else g={eventTime:g,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(h=u=g,m=p):u=u.next=g,s|=f;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;f=c,c=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);if(u===null&&(m=p),a.baseState=m,a.firstBaseUpdate=h,a.lastBaseUpdate=u,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);dn|=s,e.lanes=s,e.memoizedState=p}}function Ch(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=i,typeof a!="function")throw Error(M(191,a));a.call(n)}}}var Ma={},It=Ri(Ma),ma=Ri(Ma),ha=Ri(Ma);function Gi(e){if(e===Ma)throw Error(M(174));return e}function Rm(e,t){switch(J(ha,t),J(ma,e),J(It,Ma),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jd(t,e)}ie(It),J(It,t)}function Xn(){ie(It),ie(ma),ie(ha)}function ix(e){Gi(ha.current);var t=Gi(It.current),i=Jd(t,e.type);t!==i&&(J(ma,e),J(It,i))}function Bm(e){ma.current===e&&(ie(It),ie(ma))}var oe=Ri(0);function hs(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function Fm(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Io=ti.ReactCurrentDispatcher,Wl=ti.ReactCurrentBatchConfig,ln=0,le=null,ve=null,je=null,ps=!1,_r=!1,pa=0,cy=0;function Me(){throw Error(M(321))}function Wm(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!jt(e[i],t[i]))return!1;return!0}function Dm(e,t,i,n,a,o){if(ln=o,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Io.current=e===null||e.memoizedState===null?uy:fy,e=i(n,a),_r){o=0;do{if(_r=!1,pa=0,25<=o)throw Error(M(301));o+=1,je=ve=null,t.updateQueue=null,Io.current=gy,e=i(n,a)}while(_r)}if(Io.current=us,t=ve!==null&&ve.next!==null,ln=0,je=ve=le=null,ps=!1,t)throw Error(M(300));return e}function Vm(){var e=pa!==0;return pa=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?le.memoizedState=je=e:je=je.next=e,je}function ct(){if(ve===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=je===null?le.memoizedState:je.next;if(t!==null)je=t,ve=e;else{if(e===null)throw Error(M(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},je===null?le.memoizedState=je=e:je=je.next=e}return je}function ua(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=ct(),i=t.queue;if(i===null)throw Error(M(311));i.lastRenderedReducer=e;var n=ve,a=n.baseQueue,o=i.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}n.baseQueue=a=o,i.pending=null}if(a!==null){o=a.next,n=n.baseState;var c=s=null,m=null,h=o;do{var u=h.lane;if((ln&u)===u)m!==null&&(m=m.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),n=h.hasEagerState?h.eagerState:e(n,h.action);else{var p={lane:u,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};m===null?(c=m=p,s=n):m=m.next=p,le.lanes|=u,dn|=u}h=h.next}while(h!==null&&h!==o);m===null?s=n:m.next=c,jt(n,t.memoizedState)||(Oe=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=m,i.lastRenderedState=n}if(e=i.interleaved,e!==null){a=e;do o=a.lane,le.lanes|=o,dn|=o,a=a.next;while(a!==e)}else a===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Vl(e){var t=ct(),i=t.queue;if(i===null)throw Error(M(311));i.lastRenderedReducer=e;var n=i.dispatch,a=i.pending,o=t.memoizedState;if(a!==null){i.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jt(o,t.memoizedState)||(Oe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),i.lastRenderedState=o}return[o,n]}function nx(){}function rx(e,t){var i=le,n=ct(),a=t(),o=!jt(n.memoizedState,a);if(o&&(n.memoizedState=a,Oe=!0),n=n.queue,Nm(sx.bind(null,i,n,e),[e]),n.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(i.flags|=2048,fa(9,ox.bind(null,i,n,a,t),void 0,null),$e===null)throw Error(M(349));ln&30||ax(i,t,a)}return a}function ax(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function ox(e,t,i,n){t.value=i,t.getSnapshot=n,lx(t)&&dx(e)}function sx(e,t,i){return i(function(){lx(t)&&dx(e)})}function lx(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!jt(e,i)}catch{return!0}}function dx(e){var t=Xt(e,1);t!==null&&bt(t,e,1,-1)}function zh(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t.queue=e,e=e.dispatch=py.bind(null,le,e),[t.memoizedState,e]}function fa(e,t,i,n){return e={tag:e,create:t,destroy:i,deps:n,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e)),e}function cx(){return ct().memoizedState}function Ro(e,t,i,n){var a=At();le.flags|=e,a.memoizedState=fa(1|t,i,void 0,n===void 0?null:n)}function Hs(e,t,i,n){var a=ct();n=n===void 0?null:n;var o=void 0;if(ve!==null){var s=ve.memoizedState;if(o=s.destroy,n!==null&&Wm(n,s.deps)){a.memoizedState=fa(t,i,o,n);return}}le.flags|=e,a.memoizedState=fa(1|t,i,o,n)}function Th(e,t){return Ro(8390656,8,e,t)}function Nm(e,t){return Hs(2048,8,e,t)}function mx(e,t){return Hs(4,2,e,t)}function hx(e,t){return Hs(4,4,e,t)}function px(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ux(e,t,i){return i=i!=null?i.concat([e]):null,Hs(4,4,px.bind(null,t,e),i)}function Om(){}function fx(e,t){var i=ct();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&Wm(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function gx(e,t){var i=ct();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&Wm(t,n[1])?n[0]:(e=e(),i.memoizedState=[e,t],e)}function xx(e,t,i){return ln&21?(jt(i,t)||(i=kg(),le.lanes|=i,dn|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=i)}function my(e,t){var i=K;K=i!==0&&4>i?i:4,e(!0);var n=Wl.transition;Wl.transition={};try{e(!1),t()}finally{K=i,Wl.transition=n}}function wx(){return ct().memoizedState}function hy(e,t,i){var n=Si(e);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},yx(e))vx(t,i);else if(i=ex(e,t,i,n),i!==null){var a=Be();bt(i,e,n,a),bx(i,t,n)}}function py(e,t,i){var n=Si(e),a={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(yx(e))vx(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,c=o(s,i);if(a.hasEagerState=!0,a.eagerState=c,jt(c,s)){var m=t.interleaved;m===null?(a.next=a,Em(t)):(a.next=m.next,m.next=a),t.interleaved=a;return}}catch{}finally{}i=ex(e,t,a,n),i!==null&&(a=Be(),bt(i,e,n,a),bx(i,t,n))}}function yx(e){var t=e.alternate;return e===le||t!==null&&t===le}function vx(e,t){_r=ps=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function bx(e,t,i){if(i&4194240){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,ym(e,i)}}var us={readContext:dt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},uy={readContext:dt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Th,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,Ro(4194308,4,px.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var i=At();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var n=At();return t=i!==void 0?i(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=hy.bind(null,le,e),[n.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:zh,useDebugValue:Om,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=zh(!1),t=e[0];return e=my.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var n=le,a=At();if(ae){if(i===void 0)throw Error(M(407));i=i()}else{if(i=t(),$e===null)throw Error(M(349));ln&30||ax(n,t,i)}a.memoizedState=i;var o={value:i,getSnapshot:t};return a.queue=o,Th(sx.bind(null,n,o,e),[e]),n.flags|=2048,fa(9,ox.bind(null,n,o,i,t),void 0,null),i},useId:function(){var e=At(),t=$e.identifierPrefix;if(ae){var i=Ht,n=_t;i=(n&~(1<<32-vt(n)-1)).toString(32)+i,t=":"+t+"R"+i,i=pa++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=cy++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fy={readContext:dt,useCallback:fx,useContext:dt,useEffect:Nm,useImperativeHandle:ux,useInsertionEffect:mx,useLayoutEffect:hx,useMemo:gx,useReducer:Dl,useRef:cx,useState:function(){return Dl(ua)},useDebugValue:Om,useDeferredValue:function(e){var t=ct();return xx(t,ve.memoizedState,e)},useTransition:function(){var e=Dl(ua)[0],t=ct().memoizedState;return[e,t]},useMutableSource:nx,useSyncExternalStore:rx,useId:wx,unstable_isNewReconciler:!1},gy={readContext:dt,useCallback:fx,useContext:dt,useEffect:Nm,useImperativeHandle:ux,useInsertionEffect:mx,useLayoutEffect:hx,useMemo:gx,useReducer:Vl,useRef:cx,useState:function(){return Vl(ua)},useDebugValue:Om,useDeferredValue:function(e){var t=ct();return ve===null?t.memoizedState=e:xx(t,ve.memoizedState,e)},useTransition:function(){var e=Vl(ua)[0],t=ct().memoizedState;return[e,t]},useMutableSource:nx,useSyncExternalStore:rx,useId:wx,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function vc(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:de({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Zs={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var n=Be(),a=Si(e),o=Ut(n,a);o.payload=t,i!=null&&(o.callback=i),t=ji(e,o,a),t!==null&&(bt(t,e,a,n),Eo(t,e,a))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=Be(),a=Si(e),o=Ut(n,a);o.tag=1,o.payload=t,i!=null&&(o.callback=i),t=ji(e,o,a),t!==null&&(bt(t,e,a,n),Eo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Be(),n=Si(e),a=Ut(i,n);a.tag=2,t!=null&&(a.callback=t),t=ji(e,a,n),t!==null&&(bt(t,e,n,i),Eo(t,e,n))}};function Ph(e,t,i,n,a,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!sa(i,n)||!sa(a,o):!0}function kx(e,t,i){var n=!1,a=Ai,o=t.contextType;return typeof o=="object"&&o!==null?o=dt(o):(a=Ze(t)?on:Ee.current,n=t.contextTypes,o=(n=n!=null)?Gn(e,a):Ai),t=new t(i,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zs,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Mh(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&Zs.enqueueReplaceState(t,t.state,null)}function bc(e,t,i,n){var a=e.stateNode;a.props=i,a.state=e.memoizedState,a.refs={},Im(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=dt(o):(o=Ze(t)?on:Ee.current,a.context=Gn(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(vc(e,t,o,i),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Zs.enqueueReplaceState(a,a.state,null),ms(e,i,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var i="",n=t;do i+=H2(n),n=n.return;while(n);var a=i}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Nl(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function kc(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var xy=typeof WeakMap=="function"?WeakMap:Map;function jx(e,t,i){i=Ut(-1,i),i.tag=3,i.payload={element:null};var n=t.value;return i.callback=function(){gs||(gs=!0,Lc=n),kc(e,t)},i}function $x(e,t,i){i=Ut(-1,i),i.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;i.payload=function(){return n(a)},i.callback=function(){kc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(i.callback=function(){kc(e,t),typeof n!="function"&&($i===null?$i=new Set([this]):$i.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),i}function Ah(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new xy;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(i)||(a.add(i),e=Ay.bind(null,e,t,i),t.then(e,e))}function Lh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Eh(e,t,i,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Ut(-1,1),t.tag=2,ji(i,t,1))),i.lanes|=1),e)}var wy=ti.ReactCurrentOwner,Oe=!1;function Re(e,t,i,n){t.child=e===null?Jg(t,null,i,n):qn(t,e.child,i,n)}function Ih(e,t,i,n,a){i=i.render;var o=t.ref;return Un(t,a),n=Dm(e,t,i,n,o,a),i=Vm(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Jt(e,t,a)):(ae&&i&&zm(t),t.flags|=1,Re(e,t,n,a),t.child)}function Rh(e,t,i,n,a){if(e===null){var o=i.type;return typeof o=="function"&&!Km(o)&&o.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=o,Sx(e,t,o,n,a)):(e=Do(i.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var s=o.memoizedProps;if(i=i.compare,i=i!==null?i:sa,i(s,n)&&e.ref===t.ref)return Jt(e,t,a)}return t.flags|=1,e=Ci(o,n),e.ref=t.ref,e.return=t,t.child=e}function Sx(e,t,i,n,a){if(e!==null){var o=e.memoizedProps;if(sa(o,n)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=n=o,(e.lanes&a)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Jt(e,t,a)}return jc(e,t,i,n,a)}function Cx(e,t,i){var n=t.pendingProps,a=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Rn,Ke),Ke|=i;else{if(!(i&1073741824))return e=o!==null?o.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Rn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:i,J(Rn,Ke),Ke|=n}else o!==null?(n=o.baseLanes|i,t.memoizedState=null):n=i,J(Rn,Ke),Ke|=n;return Re(e,t,a,i),t.child}function zx(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function jc(e,t,i,n,a){var o=Ze(i)?on:Ee.current;return o=Gn(t,o),Un(t,a),i=Dm(e,t,i,n,o,a),n=Vm(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Jt(e,t,a)):(ae&&n&&zm(t),t.flags|=1,Re(e,t,i,a),t.child)}function Bh(e,t,i,n,a){if(Ze(i)){var o=!0;os(t)}else o=!1;if(Un(t,a),t.stateNode===null)Bo(e,t),kx(t,i,n),bc(t,i,n,a),n=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var m=s.context,h=i.contextType;typeof h=="object"&&h!==null?h=dt(h):(h=Ze(i)?on:Ee.current,h=Gn(t,h));var u=i.getDerivedStateFromProps,p=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==n||m!==h)&&Mh(t,s,n,h),ci=!1;var f=t.memoizedState;s.state=f,ms(t,n,s,a),m=t.memoizedState,c!==n||f!==m||He.current||ci?(typeof u=="function"&&(vc(t,i,u,n),m=t.memoizedState),(c=ci||Ph(t,i,c,n,f,m,h))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=m),s.props=n,s.state=m,s.context=h,n=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,tx(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:ft(t.type,c),s.props=h,p=t.pendingProps,f=s.context,m=i.contextType,typeof m=="object"&&m!==null?m=dt(m):(m=Ze(i)?on:Ee.current,m=Gn(t,m));var g=i.getDerivedStateFromProps;(u=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==p||f!==m)&&Mh(t,s,n,m),ci=!1,f=t.memoizedState,s.state=f,ms(t,n,s,a);var v=t.memoizedState;c!==p||f!==v||He.current||ci?(typeof g=="function"&&(vc(t,i,g,n),v=t.memoizedState),(h=ci||Ph(t,i,h,n,f,v,m)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,v,m),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,v,m)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),s.props=n,s.state=v,s.context=m,n=h):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return $c(e,t,i,n,o,a)}function $c(e,t,i,n,a,o){zx(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return a&&bh(t,i,!1),Jt(e,t,o);n=t.stateNode,wy.current=t;var c=s&&typeof i.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=qn(t,e.child,null,o),t.child=qn(t,null,c,o)):Re(e,t,c,o),t.memoizedState=n.state,a&&bh(t,i,!0),t.child}function Tx(e){var t=e.stateNode;t.pendingContext?vh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vh(e,t.context,!1),Rm(e,t.containerInfo)}function Fh(e,t,i,n,a){return Kn(),Pm(a),t.flags|=256,Re(e,t,i,n),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0};function Cc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Px(e,t,i){var n=t.pendingProps,a=oe.current,o=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),J(oe,a&1),e===null)return wc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,o?(n=t.mode,o=t.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Qs(s,n,0,null),e=tn(e,n,i,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Cc(i),t.memoizedState=Sc,e):_m(t,s));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return yy(e,t,s,n,c,a,i);if(o){o=n.fallback,s=t.mode,a=e.child,c=a.sibling;var m={mode:"hidden",children:n.children};return!(s&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=m,t.deletions=null):(n=Ci(a,m),n.subtreeFlags=a.subtreeFlags&14680064),c!==null?o=Ci(c,o):(o=tn(o,s,i,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,s=e.child.memoizedState,s=s===null?Cc(i):{baseLanes:s.baseLanes|i,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~i,t.memoizedState=Sc,n}return o=e.child,e=o.sibling,n=Ci(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=i),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n}function _m(e,t){return t=Qs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function io(e,t,i,n){return n!==null&&Pm(n),qn(t,e.child,null,i),e=_m(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yy(e,t,i,n,a,o,s){if(i)return t.flags&256?(t.flags&=-257,n=Nl(Error(M(422))),io(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,a=t.mode,n=Qs({mode:"visible",children:n.children},a,0,null),o=tn(o,a,s,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&qn(t,e.child,null,s),t.child.memoizedState=Cc(s),t.memoizedState=Sc,o);if(!(t.mode&1))return io(e,t,s,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var c=n.dgst;return n=c,o=Error(M(419)),n=Nl(o,n,void 0),io(e,t,s,n)}if(c=(s&e.childLanes)!==0,Oe||c){if(n=$e,n!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|s)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Xt(e,a),bt(n,e,a,-1))}return Gm(),n=Nl(Error(M(421))),io(e,t,s,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Ly.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,qe=ki(a.nextSibling),Xe=t,ae=!0,wt=null,e!==null&&(at[ot++]=_t,at[ot++]=Ht,at[ot++]=sn,_t=e.id,Ht=e.overflow,sn=t),t=_m(t,n.children),t.flags|=4096,t)}function Wh(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),yc(e.return,t,i)}function Ol(e,t,i,n,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=i,o.tailMode=a)}function Mx(e,t,i){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(Re(e,t,n.children,i),n=oe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wh(e,i,t);else if(e.tag===19)Wh(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(J(oe,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(i=t.child,a=null;i!==null;)e=i.alternate,e!==null&&hs(e)===null&&(a=i),i=i.sibling;i=a,i===null?(a=t.child,t.child=null):(a=i.sibling,i.sibling=null),Ol(t,!1,a,i,o);break;case"backwards":for(i=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&hs(e)===null){t.child=a;break}e=a.sibling,a.sibling=i,i=a,a=e}Ol(t,!0,i,null,o);break;case"together":Ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,i=Ci(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Ci(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function vy(e,t,i){switch(t.tag){case 3:Tx(t),Kn();break;case 5:ix(t);break;case 1:Ze(t.type)&&os(t);break;case 4:Rm(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;J(ds,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(J(oe,oe.current&1),t.flags|=128,null):i&t.child.childLanes?Px(e,t,i):(J(oe,oe.current&1),e=Jt(e,t,i),e!==null?e.sibling:null);J(oe,oe.current&1);break;case 19:if(n=(i&t.childLanes)!==0,e.flags&128){if(n)return Mx(e,t,i);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),J(oe,oe.current),n)break;return null;case 22:case 23:return t.lanes=0,Cx(e,t,i)}return Jt(e,t,i)}var Ax,zc,Lx,Ex;Ax=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};zc=function(){};Lx=function(e,t,i,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Gi(It.current);var o=null;switch(i){case"input":a=Gd(e,a),n=Gd(e,n),o=[];break;case"select":a=de({},a,{value:void 0}),n=de({},n,{value:void 0}),o=[];break;case"textarea":a=Xd(e,a),n=Xd(e,n),o=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=rs)}ec(i,n);var s;i=null;for(h in a)if(!n.hasOwnProperty(h)&&a.hasOwnProperty(h)&&a[h]!=null)if(h==="style"){var c=a[h];for(s in c)c.hasOwnProperty(s)&&(i||(i={}),i[s]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ea.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in n){var m=n[h];if(c=a!=null?a[h]:void 0,n.hasOwnProperty(h)&&m!==c&&(m!=null||c!=null))if(h==="style")if(c){for(s in c)!c.hasOwnProperty(s)||m&&m.hasOwnProperty(s)||(i||(i={}),i[s]="");for(s in m)m.hasOwnProperty(s)&&c[s]!==m[s]&&(i||(i={}),i[s]=m[s])}else i||(o||(o=[]),o.push(h,i)),i=m;else h==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,c=c?c.__html:void 0,m!=null&&c!==m&&(o=o||[]).push(h,m)):h==="children"?typeof m!="string"&&typeof m!="number"||(o=o||[]).push(h,""+m):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ea.hasOwnProperty(h)?(m!=null&&h==="onScroll"&&ee("scroll",e),o||c===m||(o=[])):(o=o||[]).push(h,m))}i&&(o=o||[]).push("style",i);var h=o;(t.updateQueue=h)&&(t.flags|=4)}};Ex=function(e,t,i,n){i!==n&&(t.flags|=4)};function kr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var a=e.child;a!==null;)i|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)i|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function by(e,t,i){var n=t.pendingProps;switch(Tm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ze(t.type)&&as(),Ae(t),null;case 3:return n=t.stateNode,Xn(),ie(He),ie(Ee),Fm(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wt!==null&&(Rc(wt),wt=null))),zc(e,t),Ae(t),null;case 5:Bm(t);var a=Gi(ha.current);if(i=t.type,e!==null&&t.stateNode!=null)Lx(e,t,i,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(M(166));return Ae(t),null}if(e=Gi(It.current),eo(t)){n=t.stateNode,i=t.type;var o=t.memoizedProps;switch(n[Lt]=t,n[ca]=o,e=(t.mode&1)!==0,i){case"dialog":ee("cancel",n),ee("close",n);break;case"iframe":case"object":case"embed":ee("load",n);break;case"video":case"audio":for(a=0;a<Ir.length;a++)ee(Ir[a],n);break;case"source":ee("error",n);break;case"img":case"image":case"link":ee("error",n),ee("load",n);break;case"details":ee("toggle",n);break;case"input":Y0(n,o),ee("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},ee("invalid",n);break;case"textarea":G0(n,o),ee("invalid",n)}ec(i,o),a=null;for(var s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="children"?typeof c=="string"?n.textContent!==c&&(o.suppressHydrationWarning!==!0&&Ja(n.textContent,c,e),a=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&Ja(n.textContent,c,e),a=["children",""+c]):ea.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&ee("scroll",n)}switch(i){case"input":Za(n),Q0(n,o,!0);break;case"textarea":Za(n),K0(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=rs)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sg(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(i,{is:n.is}):(e=s.createElement(i),i==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,i),e[Lt]=t,e[ca]=n,Ax(e,t,!1,!1),t.stateNode=e;e:{switch(s=tc(i,n),i){case"dialog":ee("cancel",e),ee("close",e),a=n;break;case"iframe":case"object":case"embed":ee("load",e),a=n;break;case"video":case"audio":for(a=0;a<Ir.length;a++)ee(Ir[a],e);a=n;break;case"source":ee("error",e),a=n;break;case"img":case"image":case"link":ee("error",e),ee("load",e),a=n;break;case"details":ee("toggle",e),a=n;break;case"input":Y0(e,n),a=Gd(e,n),ee("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=de({},n,{value:void 0}),ee("invalid",e);break;case"textarea":G0(e,n),a=Xd(e,n),ee("invalid",e);break;default:a=n}ec(i,a),c=a;for(o in c)if(c.hasOwnProperty(o)){var m=c[o];o==="style"?cg(e,m):o==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&lg(e,m)):o==="children"?typeof m=="string"?(i!=="textarea"||m!=="")&&ta(e,m):typeof m=="number"&&ta(e,""+m):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ea.hasOwnProperty(o)?m!=null&&o==="onScroll"&&ee("scroll",e):m!=null&&pm(e,o,m,s))}switch(i){case"input":Za(e),Q0(e,n,!1);break;case"textarea":Za(e),K0(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Mi(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?On(e,!!n.multiple,o,!1):n.defaultValue!=null&&On(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=rs)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Ex(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(M(166));if(i=Gi(ha.current),Gi(It.current),eo(t)){if(n=t.stateNode,i=t.memoizedProps,n[Lt]=t,(o=n.nodeValue!==i)&&(e=Xe,e!==null))switch(e.tag){case 3:Ja(n.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ja(n.nodeValue,i,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[Lt]=t,t.stateNode=n}return Ae(t),null;case 13:if(ie(oe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&qe!==null&&t.mode&1&&!(t.flags&128))qg(),Kn(),t.flags|=98560,o=!1;else if(o=eo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[Lt]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),o=!1}else wt!==null&&(Rc(wt),wt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ke===0&&(ke=3):Gm())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return Xn(),zc(e,t),e===null&&la(t.stateNode.containerInfo),Ae(t),null;case 10:return Lm(t.type._context),Ae(t),null;case 17:return Ze(t.type)&&as(),Ae(t),null;case 19:if(ie(oe),o=t.memoizedState,o===null)return Ae(t),null;if(n=(t.flags&128)!==0,s=o.rendering,s===null)if(n)kr(o,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=hs(e),s!==null){for(t.flags|=128,kr(o,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=i,i=t.child;i!==null;)o=i,e=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return J(oe,oe.current&1|2),t.child}e=e.sibling}o.tail!==null&&fe()>er&&(t.flags|=128,n=!0,kr(o,!1),t.lanes=4194304)}else{if(!n)if(e=hs(s),e!==null){if(t.flags|=128,n=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ae)return Ae(t),null}else 2*fe()-o.renderingStartTime>er&&i!==1073741824&&(t.flags|=128,n=!0,kr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(i=o.last,i!==null?i.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=fe(),t.sibling=null,i=oe.current,J(oe,n?i&1|2:i&1),t):(Ae(t),null);case 22:case 23:return Qm(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ke&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function ky(e,t){switch(Tm(t),t.tag){case 1:return Ze(t.type)&&as(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),ie(He),ie(Ee),Fm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bm(t),null;case 13:if(ie(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(oe),null;case 4:return Xn(),null;case 10:return Lm(t.type._context),null;case 22:case 23:return Qm(),null;case 24:return null;default:return null}}var no=!1,Le=!1,jy=typeof WeakSet=="function"?WeakSet:Set,I=null;function In(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){ce(e,t,n)}else i.current=null}function Tc(e,t,i){try{i()}catch(n){ce(e,t,n)}}var Dh=!1;function $y(e,t){if(mc=ts,e=Wg(),Cm(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{i.nodeType,o.nodeType}catch{i=null;break e}var s=0,c=-1,m=-1,h=0,u=0,p=e,f=null;t:for(;;){for(var g;p!==i||a!==0&&p.nodeType!==3||(c=s+a),p!==o||n!==0&&p.nodeType!==3||(m=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===e)break t;if(f===i&&++h===a&&(c=s),f===o&&++u===n&&(m=s),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}i=c===-1||m===-1?null:{start:c,end:m}}else i=null}i=i||{start:0,end:0}}else i=null;for(hc={focusedElem:e,selectionRange:i},ts=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,C=v.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?b:ft(t.type,b),C);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch($){ce(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=Dh,Dh=!1,v}function Hr(e,t,i){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Tc(t,i,o)}a=a.next}while(a!==n)}}function Us(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var n=i.create;i.destroy=n()}i=i.next}while(i!==t)}}function Pc(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function Ix(e){var t=e.alternate;t!==null&&(e.alternate=null,Ix(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[ca],delete t[fc],delete t[oy],delete t[sy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rx(e){return e.tag===5||e.tag===3||e.tag===4}function Vh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mc(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=rs));else if(n!==4&&(e=e.child,e!==null))for(Mc(e,t,i),e=e.sibling;e!==null;)Mc(e,t,i),e=e.sibling}function Ac(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ac(e,t,i),e=e.sibling;e!==null;)Ac(e,t,i),e=e.sibling}var Ce=null,gt=!1;function ri(e,t,i){for(i=i.child;i!==null;)Bx(e,t,i),i=i.sibling}function Bx(e,t,i){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ws,i)}catch{}switch(i.tag){case 5:Le||In(i,t);case 6:var n=Ce,a=gt;Ce=null,ri(e,t,i),Ce=n,gt=a,Ce!==null&&(gt?(e=Ce,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Ce.removeChild(i.stateNode));break;case 18:Ce!==null&&(gt?(e=Ce,i=i.stateNode,e.nodeType===8?Rl(e.parentNode,i):e.nodeType===1&&Rl(e,i),aa(e)):Rl(Ce,i.stateNode));break;case 4:n=Ce,a=gt,Ce=i.stateNode.containerInfo,gt=!0,ri(e,t,i),Ce=n,gt=a;break;case 0:case 11:case 14:case 15:if(!Le&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var o=a,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Tc(i,t,s),a=a.next}while(a!==n)}ri(e,t,i);break;case 1:if(!Le&&(In(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(c){ce(i,t,c)}ri(e,t,i);break;case 21:ri(e,t,i);break;case 22:i.mode&1?(Le=(n=Le)||i.memoizedState!==null,ri(e,t,i),Le=n):ri(e,t,i);break;default:ri(e,t,i)}}function Nh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new jy),t.forEach(function(n){var a=Ey.bind(null,e,n);i.has(n)||(i.add(n),n.then(a,a))})}}function pt(e,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var a=i[n];try{var o=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Ce=c.stateNode,gt=!1;break e;case 3:Ce=c.stateNode.containerInfo,gt=!0;break e;case 4:Ce=c.stateNode.containerInfo,gt=!0;break e}c=c.return}if(Ce===null)throw Error(M(160));Bx(o,s,a),Ce=null,gt=!1;var m=a.alternate;m!==null&&(m.return=null),a.return=null}catch(h){ce(a,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fx(t,e),t=t.sibling}function Fx(e,t){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),Pt(e),n&4){try{Hr(3,e,e.return),Us(3,e)}catch(b){ce(e,e.return,b)}try{Hr(5,e,e.return)}catch(b){ce(e,e.return,b)}}break;case 1:pt(t,e),Pt(e),n&512&&i!==null&&In(i,i.return);break;case 5:if(pt(t,e),Pt(e),n&512&&i!==null&&In(i,i.return),e.flags&32){var a=e.stateNode;try{ta(a,"")}catch(b){ce(e,e.return,b)}}if(n&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=i!==null?i.memoizedProps:o,c=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&ag(a,o),tc(c,s);var h=tc(c,o);for(s=0;s<m.length;s+=2){var u=m[s],p=m[s+1];u==="style"?cg(a,p):u==="dangerouslySetInnerHTML"?lg(a,p):u==="children"?ta(a,p):pm(a,u,p,h)}switch(c){case"input":Kd(a,o);break;case"textarea":og(a,o);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?On(a,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?On(a,!!o.multiple,o.defaultValue,!0):On(a,!!o.multiple,o.multiple?[]:"",!1))}a[ca]=o}catch(b){ce(e,e.return,b)}}break;case 6:if(pt(t,e),Pt(e),n&4){if(e.stateNode===null)throw Error(M(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(b){ce(e,e.return,b)}}break;case 3:if(pt(t,e),Pt(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{aa(t.containerInfo)}catch(b){ce(e,e.return,b)}break;case 4:pt(t,e),Pt(e);break;case 13:pt(t,e),Pt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Um=fe())),n&4&&Nh(e);break;case 22:if(u=i!==null&&i.memoizedState!==null,e.mode&1?(Le=(h=Le)||u,pt(t,e),Le=h):pt(t,e),Pt(e),n&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!u&&e.mode&1)for(I=e,u=e.child;u!==null;){for(p=I=u;I!==null;){switch(f=I,g=f.child,f.tag){case 0:case 11:case 14:case 15:Hr(4,f,f.return);break;case 1:In(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){n=f,i=f.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){ce(n,i,b)}}break;case 5:In(f,f.return);break;case 22:if(f.memoizedState!==null){_h(p);continue}}g!==null?(g.return=f,I=g):_h(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{a=p.stateNode,h?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=p.stateNode,m=p.memoizedProps.style,s=m!=null&&m.hasOwnProperty("display")?m.display:null,c.style.display=dg("display",s))}catch(b){ce(e,e.return,b)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(b){ce(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:pt(t,e),Pt(e),n&4&&Nh(e);break;case 21:break;default:pt(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(Rx(i)){var n=i;break e}i=i.return}throw Error(M(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(ta(a,""),n.flags&=-33);var o=Vh(e);Ac(e,o,a);break;case 3:case 4:var s=n.stateNode.containerInfo,c=Vh(e);Mc(e,c,s);break;default:throw Error(M(161))}}catch(m){ce(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sy(e,t,i){I=e,Wx(e)}function Wx(e,t,i){for(var n=(e.mode&1)!==0;I!==null;){var a=I,o=a.child;if(a.tag===22&&n){var s=a.memoizedState!==null||no;if(!s){var c=a.alternate,m=c!==null&&c.memoizedState!==null||Le;c=no;var h=Le;if(no=s,(Le=m)&&!h)for(I=a;I!==null;)s=I,m=s.child,s.tag===22&&s.memoizedState!==null?Hh(a):m!==null?(m.return=s,I=m):Hh(a);for(;o!==null;)I=o,Wx(o),o=o.sibling;I=a,no=c,Le=h}Oh(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,I=o):Oh(e)}}function Oh(e){for(;I!==null;){var t=I;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Us(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Le)if(i===null)n.componentDidMount();else{var a=t.elementType===t.type?i.memoizedProps:ft(t.type,i.memoizedProps);n.componentDidUpdate(a,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ch(t,o,n);break;case 3:var s=t.updateQueue;if(s!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}Ch(t,s,i)}break;case 5:var c=t.stateNode;if(i===null&&t.flags&4){i=c;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&i.focus();break;case"img":m.src&&(i.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var u=h.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&aa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Le||t.flags&512&&Pc(t)}catch(f){ce(t,t.return,f)}}if(t===e){I=null;break}if(i=t.sibling,i!==null){i.return=t.return,I=i;break}I=t.return}}function _h(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var i=t.sibling;if(i!==null){i.return=t.return,I=i;break}I=t.return}}function Hh(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Us(4,t)}catch(m){ce(t,i,m)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(m){ce(t,a,m)}}var o=t.return;try{Pc(t)}catch(m){ce(t,o,m)}break;case 5:var s=t.return;try{Pc(t)}catch(m){ce(t,s,m)}}}catch(m){ce(t,t.return,m)}if(t===e){I=null;break}var c=t.sibling;if(c!==null){c.return=t.return,I=c;break}I=t.return}}var Cy=Math.ceil,fs=ti.ReactCurrentDispatcher,Hm=ti.ReactCurrentOwner,lt=ti.ReactCurrentBatchConfig,Z=0,$e=null,we=null,Te=0,Ke=0,Rn=Ri(0),ke=0,ga=null,dn=0,Ys=0,Zm=0,Zr=null,Ne=null,Um=0,er=1/0,Dt=null,gs=!1,Lc=null,$i=null,ro=!1,gi=null,xs=0,Ur=0,Ec=null,Fo=-1,Wo=0;function Be(){return Z&6?fe():Fo!==-1?Fo:Fo=fe()}function Si(e){return e.mode&1?Z&2&&Te!==0?Te&-Te:dy.transition!==null?(Wo===0&&(Wo=kg()),Wo):(e=K,e!==0||(e=window.event,e=e===void 0?16:Pg(e.type)),e):1}function bt(e,t,i,n){if(50<Ur)throw Ur=0,Ec=null,Error(M(185));za(e,i,n),(!(Z&2)||e!==$e)&&(e===$e&&(!(Z&2)&&(Ys|=i),ke===4&&pi(e,Te)),Ue(e,n),i===1&&Z===0&&!(t.mode&1)&&(er=fe()+500,_s&&Bi()))}function Ue(e,t){var i=e.callbackNode;dw(e,t);var n=es(e,e===$e?Te:0);if(n===0)i!==null&&J0(i),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(i!=null&&J0(i),t===1)e.tag===0?ly(Zh.bind(null,e)):Qg(Zh.bind(null,e)),ry(function(){!(Z&6)&&Bi()}),i=null;else{switch(jg(n)){case 1:i=wm;break;case 4:i=vg;break;case 16:i=Jo;break;case 536870912:i=bg;break;default:i=Jo}i=Ux(i,Dx.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function Dx(e,t){if(Fo=-1,Wo=0,Z&6)throw Error(M(327));var i=e.callbackNode;if(Yn()&&e.callbackNode!==i)return null;var n=es(e,e===$e?Te:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ws(e,n);else{t=n;var a=Z;Z|=2;var o=Nx();($e!==e||Te!==t)&&(Dt=null,er=fe()+500,en(e,t));do try{Py();break}catch(c){Vx(e,c)}while(!0);Am(),fs.current=o,Z=a,we!==null?t=0:($e=null,Te=0,t=ke)}if(t!==0){if(t===2&&(a=oc(e),a!==0&&(n=a,t=Ic(e,a))),t===1)throw i=ga,en(e,0),pi(e,n),Ue(e,fe()),i;if(t===6)pi(e,n);else{if(a=e.current.alternate,!(n&30)&&!zy(a)&&(t=ws(e,n),t===2&&(o=oc(e),o!==0&&(n=o,t=Ic(e,o))),t===1))throw i=ga,en(e,0),pi(e,n),Ue(e,fe()),i;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(M(345));case 2:_i(e,Ne,Dt);break;case 3:if(pi(e,n),(n&130023424)===n&&(t=Um+500-fe(),10<t)){if(es(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Be(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=uc(_i.bind(null,e,Ne,Dt),t);break}_i(e,Ne,Dt);break;case 4:if(pi(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var s=31-vt(n);o=1<<s,s=t[s],s>a&&(a=s),n&=~o}if(n=a,n=fe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Cy(n/1960))-n,10<n){e.timeoutHandle=uc(_i.bind(null,e,Ne,Dt),n);break}_i(e,Ne,Dt);break;case 5:_i(e,Ne,Dt);break;default:throw Error(M(329))}}}return Ue(e,fe()),e.callbackNode===i?Dx.bind(null,e):null}function Ic(e,t){var i=Zr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=ws(e,t),e!==2&&(t=Ne,Ne=i,t!==null&&Rc(t)),e}function Rc(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function zy(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var a=i[n],o=a.getSnapshot;a=a.value;try{if(!jt(o(),a))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pi(e,t){for(t&=~Zm,t&=~Ys,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-vt(t),n=1<<i;e[i]=-1,t&=~n}}function Zh(e){if(Z&6)throw Error(M(327));Yn();var t=es(e,0);if(!(t&1))return Ue(e,fe()),null;var i=ws(e,t);if(e.tag!==0&&i===2){var n=oc(e);n!==0&&(t=n,i=Ic(e,n))}if(i===1)throw i=ga,en(e,0),pi(e,t),Ue(e,fe()),i;if(i===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_i(e,Ne,Dt),Ue(e,fe()),null}function Ym(e,t){var i=Z;Z|=1;try{return e(t)}finally{Z=i,Z===0&&(er=fe()+500,_s&&Bi())}}function cn(e){gi!==null&&gi.tag===0&&!(Z&6)&&Yn();var t=Z;Z|=1;var i=lt.transition,n=K;try{if(lt.transition=null,K=1,e)return e()}finally{K=n,lt.transition=i,Z=t,!(Z&6)&&Bi()}}function Qm(){Ke=Rn.current,ie(Rn)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,ny(i)),we!==null)for(i=we.return;i!==null;){var n=i;switch(Tm(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&as();break;case 3:Xn(),ie(He),ie(Ee),Fm();break;case 5:Bm(n);break;case 4:Xn();break;case 13:ie(oe);break;case 19:ie(oe);break;case 10:Lm(n.type._context);break;case 22:case 23:Qm()}i=i.return}if($e=e,we=e=Ci(e.current,null),Te=Ke=t,ke=0,ga=null,Zm=Ys=dn=0,Ne=Zr=null,Qi!==null){for(t=0;t<Qi.length;t++)if(i=Qi[t],n=i.interleaved,n!==null){i.interleaved=null;var a=n.next,o=i.pending;if(o!==null){var s=o.next;o.next=a,n.next=s}i.pending=n}Qi=null}return e}function Vx(e,t){do{var i=we;try{if(Am(),Io.current=us,ps){for(var n=le.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ps=!1}if(ln=0,je=ve=le=null,_r=!1,pa=0,Hm.current=null,i===null||i.return===null){ke=1,ga=t,we=null;break}e:{var o=e,s=i.return,c=i,m=t;if(t=Te,c.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var h=m,u=c,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=Lh(s);if(g!==null){g.flags&=-257,Eh(g,s,c,o,t),g.mode&1&&Ah(o,h,t),t=g,m=h;var v=t.updateQueue;if(v===null){var b=new Set;b.add(m),t.updateQueue=b}else v.add(m);break e}else{if(!(t&1)){Ah(o,h,t),Gm();break e}m=Error(M(426))}}else if(ae&&c.mode&1){var C=Lh(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Eh(C,s,c,o,t),Pm(Jn(m,c));break e}}o=m=Jn(m,c),ke!==4&&(ke=2),Zr===null?Zr=[o]:Zr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=jx(o,m,t);Sh(o,y);break e;case 1:c=m;var x=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&($i===null||!$i.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var $=$x(o,c,t);Sh(o,$);break e}}o=o.return}while(o!==null)}_x(i)}catch(z){t=z,we===i&&i!==null&&(we=i=i.return);continue}break}while(!0)}function Nx(){var e=fs.current;return fs.current=us,e===null?us:e}function Gm(){(ke===0||ke===3||ke===2)&&(ke=4),$e===null||!(dn&268435455)&&!(Ys&268435455)||pi($e,Te)}function ws(e,t){var i=Z;Z|=2;var n=Nx();($e!==e||Te!==t)&&(Dt=null,en(e,t));do try{Ty();break}catch(a){Vx(e,a)}while(!0);if(Am(),Z=i,fs.current=n,we!==null)throw Error(M(261));return $e=null,Te=0,ke}function Ty(){for(;we!==null;)Ox(we)}function Py(){for(;we!==null&&!ew();)Ox(we)}function Ox(e){var t=Zx(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?_x(e):we=t,Hm.current=null}function _x(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=ky(i,t),i!==null){i.flags&=32767,we=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,we=null;return}}else if(i=by(i,t,Ke),i!==null){we=i;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);ke===0&&(ke=5)}function _i(e,t,i){var n=K,a=lt.transition;try{lt.transition=null,K=1,My(e,t,i,n)}finally{lt.transition=a,K=n}return null}function My(e,t,i,n){do Yn();while(gi!==null);if(Z&6)throw Error(M(327));i=e.finishedWork;var a=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=i.lanes|i.childLanes;if(cw(e,o),e===$e&&(we=$e=null,Te=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||ro||(ro=!0,Ux(Jo,function(){return Yn(),null})),o=(i.flags&15990)!==0,i.subtreeFlags&15990||o){o=lt.transition,lt.transition=null;var s=K;K=1;var c=Z;Z|=4,Hm.current=null,$y(e,i),Fx(i,e),Kw(hc),ts=!!mc,hc=mc=null,e.current=i,Sy(i),tw(),Z=c,K=s,lt.transition=o}else e.current=i;if(ro&&(ro=!1,gi=e,xs=a),o=e.pendingLanes,o===0&&($i=null),rw(i.stateNode),Ue(e,fe()),t!==null)for(n=e.onRecoverableError,i=0;i<t.length;i++)a=t[i],n(a.value,{componentStack:a.stack,digest:a.digest});if(gs)throw gs=!1,e=Lc,Lc=null,e;return xs&1&&e.tag!==0&&Yn(),o=e.pendingLanes,o&1?e===Ec?Ur++:(Ur=0,Ec=e):Ur=0,Bi(),null}function Yn(){if(gi!==null){var e=jg(xs),t=lt.transition,i=K;try{if(lt.transition=null,K=16>e?16:e,gi===null)var n=!1;else{if(e=gi,gi=null,xs=0,Z&6)throw Error(M(331));var a=Z;for(Z|=4,I=e.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var c=o.deletions;if(c!==null){for(var m=0;m<c.length;m++){var h=c[m];for(I=h;I!==null;){var u=I;switch(u.tag){case 0:case 11:case 15:Hr(8,u,o)}var p=u.child;if(p!==null)p.return=u,I=p;else for(;I!==null;){u=I;var f=u.sibling,g=u.return;if(Ix(u),u===h){I=null;break}if(f!==null){f.return=g,I=f;break}I=g}}}var v=o.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hr(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,I=y;break e}I=o.return}}var x=e.current;for(I=x;I!==null;){s=I;var w=s.child;if(s.subtreeFlags&2064&&w!==null)w.return=s,I=w;else e:for(s=x;I!==null;){if(c=I,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Us(9,c)}}catch(z){ce(c,c.return,z)}if(c===s){I=null;break e}var $=c.sibling;if($!==null){$.return=c.return,I=$;break e}I=c.return}}if(Z=a,Bi(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ws,e)}catch{}n=!0}return n}finally{K=i,lt.transition=t}}return!1}function Uh(e,t,i){t=Jn(i,t),t=jx(e,t,1),e=ji(e,t,1),t=Be(),e!==null&&(za(e,1,t),Ue(e,t))}function ce(e,t,i){if(e.tag===3)Uh(e,e,i);else for(;t!==null;){if(t.tag===3){Uh(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&($i===null||!$i.has(n))){e=Jn(i,e),e=$x(t,e,1),t=ji(t,e,1),e=Be(),t!==null&&(za(t,1,e),Ue(t,e));break}}t=t.return}}function Ay(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&i,$e===e&&(Te&i)===i&&(ke===4||ke===3&&(Te&130023424)===Te&&500>fe()-Um?en(e,0):Zm|=i),Ue(e,t)}function Hx(e,t){t===0&&(e.mode&1?(t=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):t=1);var i=Be();e=Xt(e,t),e!==null&&(za(e,t,i),Ue(e,i))}function Ly(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Hx(e,i)}function Ey(e,t){var i=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(i=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(M(314))}n!==null&&n.delete(t),Hx(e,i)}var Zx;Zx=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Oe=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return Oe=!1,vy(e,t,i);Oe=!!(e.flags&131072)}else Oe=!1,ae&&t.flags&1048576&&Gg(t,ls,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Bo(e,t),e=t.pendingProps;var a=Gn(t,Ee.current);Un(t,i),a=Dm(null,t,n,e,a,i);var o=Vm();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(n)?(o=!0,os(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Im(t),a.updater=Zs,t.stateNode=a,a._reactInternals=t,bc(t,n,e,i),t=$c(null,t,n,!0,o,i)):(t.tag=0,ae&&o&&zm(t),Re(null,t,a,i),t=t.child),t;case 16:n=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=Ry(n),e=ft(n,e),a){case 0:t=jc(null,t,n,e,i);break e;case 1:t=Bh(null,t,n,e,i);break e;case 11:t=Ih(null,t,n,e,i);break e;case 14:t=Rh(null,t,n,ft(n.type,e),i);break e}throw Error(M(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:ft(n,a),jc(e,t,n,a,i);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:ft(n,a),Bh(e,t,n,a,i);case 3:e:{if(Tx(t),e===null)throw Error(M(387));n=t.pendingProps,o=t.memoizedState,a=o.element,tx(e,t),ms(t,n,null,i);var s=t.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Jn(Error(M(423)),t),t=Fh(e,t,n,i,a);break e}else if(n!==a){a=Jn(Error(M(424)),t),t=Fh(e,t,n,i,a);break e}else for(qe=ki(t.stateNode.containerInfo.firstChild),Xe=t,ae=!0,wt=null,i=Jg(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Kn(),n===a){t=Jt(e,t,i);break e}Re(e,t,n,i)}t=t.child}return t;case 5:return ix(t),e===null&&wc(t),n=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,s=a.children,pc(n,a)?s=null:o!==null&&pc(n,o)&&(t.flags|=32),zx(e,t),Re(e,t,s,i),t.child;case 6:return e===null&&wc(t),null;case 13:return Px(e,t,i);case 4:return Rm(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=qn(t,null,n,i):Re(e,t,n,i),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:ft(n,a),Ih(e,t,n,a,i);case 7:return Re(e,t,t.pendingProps,i),t.child;case 8:return Re(e,t,t.pendingProps.children,i),t.child;case 12:return Re(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,J(ds,n._currentValue),n._currentValue=s,o!==null)if(jt(o.value,s)){if(o.children===a.children&&!He.current){t=Jt(e,t,i);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var m=c.firstContext;m!==null;){if(m.context===n){if(o.tag===1){m=Ut(-1,i&-i),m.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var u=h.pending;u===null?m.next=m:(m.next=u.next,u.next=m),h.pending=m}}o.lanes|=i,m=o.alternate,m!==null&&(m.lanes|=i),yc(o.return,i,t),c.lanes|=i;break}m=m.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(M(341));s.lanes|=i,c=s.alternate,c!==null&&(c.lanes|=i),yc(s,i,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Re(e,t,a.children,i),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Un(t,i),a=dt(a),n=n(a),t.flags|=1,Re(e,t,n,i),t.child;case 14:return n=t.type,a=ft(n,t.pendingProps),a=ft(n.type,a),Rh(e,t,n,a,i);case 15:return Sx(e,t,t.type,t.pendingProps,i);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:ft(n,a),Bo(e,t),t.tag=1,Ze(n)?(e=!0,os(t)):e=!1,Un(t,i),kx(t,n,a),bc(t,n,a,i),$c(null,t,n,!0,e,i);case 19:return Mx(e,t,i);case 22:return Cx(e,t,i)}throw Error(M(156,t.tag))};function Ux(e,t){return yg(e,t)}function Iy(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,i,n){return new Iy(e,t,i,n)}function Km(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ry(e){if(typeof e=="function")return Km(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fm)return 11;if(e===gm)return 14}return 2}function Ci(e,t){var i=e.alternate;return i===null?(i=st(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Do(e,t,i,n,a,o){var s=2;if(n=e,typeof e=="function")Km(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sn:return tn(i.children,a,o,t);case um:s=8,a|=8;break;case Zd:return e=st(12,i,t,a|2),e.elementType=Zd,e.lanes=o,e;case Ud:return e=st(13,i,t,a),e.elementType=Ud,e.lanes=o,e;case Yd:return e=st(19,i,t,a),e.elementType=Yd,e.lanes=o,e;case ig:return Qs(i,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eg:s=10;break e;case tg:s=9;break e;case fm:s=11;break e;case gm:s=14;break e;case di:s=16,n=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=st(s,i,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function tn(e,t,i,n){return e=st(7,e,n,t),e.lanes=i,e}function Qs(e,t,i,n){return e=st(22,e,n,t),e.elementType=ig,e.lanes=i,e.stateNode={isHidden:!1},e}function _l(e,t,i){return e=st(6,e,null,t),e.lanes=i,e}function Hl(e,t,i){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function By(e,t,i,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function qm(e,t,i,n,a,o,s,c,m){return e=new By(e,t,i,c,m),t===1?(t=1,o===!0&&(t|=8)):t=0,o=st(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Im(o),e}function Fy(e,t,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:n==null?null:""+n,children:e,containerInfo:t,implementation:i}}function Yx(e){if(!e)return Ai;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var i=e.type;if(Ze(i))return Yg(e,i,t)}return t}function Qx(e,t,i,n,a,o,s,c,m){return e=qm(i,n,!0,e,a,o,s,c,m),e.context=Yx(null),i=e.current,n=Be(),a=Si(i),o=Ut(n,a),o.callback=t??null,ji(i,o,a),e.current.lanes=a,za(e,a,n),Ue(e,n),e}function Gs(e,t,i,n){var a=t.current,o=Be(),s=Si(a);return i=Yx(i),t.context===null?t.context=i:t.pendingContext=i,t=Ut(o,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=ji(a,t,s),e!==null&&(bt(e,a,s,o),Eo(e,a,s)),s}function ys(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Xm(e,t){Yh(e,t),(e=e.alternate)&&Yh(e,t)}function Wy(){return null}var Gx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jm(e){this._internalRoot=e}Ks.prototype.render=Jm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Gs(e,t,null,null)};Ks.prototype.unmount=Jm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){Gs(null,e,null,null)}),t[qt]=null}};function Ks(e){this._internalRoot=e}Ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cg();e={blockedOn:null,target:e,priority:t};for(var i=0;i<hi.length&&t!==0&&t<hi[i].priority;i++);hi.splice(i,0,e),i===0&&Tg(e)}};function e0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qh(){}function Dy(e,t,i,n,a){if(a){if(typeof n=="function"){var o=n;n=function(){var h=ys(s);o.call(h)}}var s=Qx(t,n,e,0,null,!1,!1,"",Qh);return e._reactRootContainer=s,e[qt]=s.current,la(e.nodeType===8?e.parentNode:e),cn(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var c=n;n=function(){var h=ys(m);c.call(h)}}var m=qm(e,0,!1,null,null,!1,!1,"",Qh);return e._reactRootContainer=m,e[qt]=m.current,la(e.nodeType===8?e.parentNode:e),cn(function(){Gs(t,m,i,n)}),m}function Xs(e,t,i,n,a){var o=i._reactRootContainer;if(o){var s=o;if(typeof a=="function"){var c=a;a=function(){var m=ys(s);c.call(m)}}Gs(t,s,e,a)}else s=Dy(i,t,e,a,n);return ys(s)}$g=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Er(t.pendingLanes);i!==0&&(ym(t,i|1),Ue(t,fe()),!(Z&6)&&(er=fe()+500,Bi()))}break;case 13:cn(function(){var n=Xt(e,1);if(n!==null){var a=Be();bt(n,e,1,a)}}),Xm(e,1)}};vm=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var i=Be();bt(t,e,134217728,i)}Xm(e,134217728)}};Sg=function(e){if(e.tag===13){var t=Si(e),i=Xt(e,t);if(i!==null){var n=Be();bt(i,e,t,n)}Xm(e,t)}};Cg=function(){return K};zg=function(e,t){var i=K;try{return K=e,t()}finally{K=i}};nc=function(e,t,i){switch(t){case"input":if(Kd(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var a=Os(n);if(!a)throw Error(M(90));rg(n),Kd(n,a)}}}break;case"textarea":og(e,i);break;case"select":t=i.value,t!=null&&On(e,!!i.multiple,t,!1)}};pg=Ym;ug=cn;var Vy={usingClientEntryPoint:!1,Events:[Pa,Pn,Os,mg,hg,Ym]},jr={findFiberByHostInstance:Yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ny={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xg(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Ws=ao.inject(Ny),Et=ao}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vy;tt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e0(t))throw Error(M(200));return Fy(e,t,null,i)};tt.createRoot=function(e,t){if(!e0(e))throw Error(M(299));var i=!1,n="",a=Gx;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=qm(e,1,!1,null,null,i,!1,n,a),e[qt]=t.current,la(e.nodeType===8?e.parentNode:e),new Jm(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=xg(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return cn(e)};tt.hydrate=function(e,t,i){if(!qs(t))throw Error(M(200));return Xs(null,e,t,!0,i)};tt.hydrateRoot=function(e,t,i){if(!e0(e))throw Error(M(405));var n=i!=null&&i.hydratedSources||null,a=!1,o="",s=Gx;if(i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onRecoverableError!==void 0&&(s=i.onRecoverableError)),t=Qx(t,null,e,1,i??null,a,!1,o,s),e[qt]=t.current,la(e),n)for(e=0;e<n.length;e++)i=n[e],a=i._getVersion,a=a(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,a]:t.mutableSourceEagerHydrationData.push(i,a);return new Ks(t)};tt.render=function(e,t,i){if(!qs(t))throw Error(M(200));return Xs(null,e,t,!1,i)};tt.unmountComponentAtNode=function(e){if(!qs(e))throw Error(M(40));return e._reactRootContainer?(cn(function(){Xs(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};tt.unstable_batchedUpdates=Ym;tt.unstable_renderSubtreeIntoContainer=function(e,t,i,n){if(!qs(i))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Xs(e,t,i,!1,n)};tt.version="18.3.1-next-f1338f8080-20240426";function Kx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kx)}catch(e){console.error(e)}}Kx(),Kf.exports=tt;var Oy=Kf.exports,Gh=Oy;_d.createRoot=Gh.createRoot,_d.hydrateRoot=Gh.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},xa.apply(this,arguments)}var xi;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xi||(xi={}));const Kh="popstate";function _y(e){e===void 0&&(e={});function t(n,a){let{pathname:o,search:s,hash:c}=n.location;return Bc("",{pathname:o,search:s,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function i(n,a){return typeof a=="string"?a:vs(a)}return Zy(t,i,null,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function t0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hy(){return Math.random().toString(36).substr(2,8)}function qh(e,t){return{usr:e.state,key:e.key,idx:t}}function Bc(e,t,i,n){return i===void 0&&(i=null),xa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pr(t):t,{state:i,key:t&&t.key||n||Hy()})}function vs(e){let{pathname:t="/",search:i="",hash:n=""}=e;return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function pr(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substr(i),e=e.substr(0,i));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Zy(e,t,i,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:o=!1}=n,s=a.history,c=xi.Pop,m=null,h=u();h==null&&(h=0,s.replaceState(xa({},s.state,{idx:h}),""));function u(){return(s.state||{idx:null}).idx}function p(){c=xi.Pop;let C=u(),y=C==null?null:C-h;h=C,m&&m({action:c,location:b.location,delta:y})}function f(C,y){c=xi.Push;let x=Bc(b.location,C,y);h=u()+1;let w=qh(x,h),$=b.createHref(x);try{s.pushState(w,"",$)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;a.location.assign($)}o&&m&&m({action:c,location:b.location,delta:1})}function g(C,y){c=xi.Replace;let x=Bc(b.location,C,y);h=u();let w=qh(x,h),$=b.createHref(x);s.replaceState(w,"",$),o&&m&&m({action:c,location:b.location,delta:0})}function v(C){let y=a.location.origin!=="null"?a.location.origin:a.location.href,x=typeof C=="string"?C:vs(C);return x=x.replace(/ $/,"%20"),ye(y,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,y)}let b={get action(){return c},get location(){return e(a,s)},listen(C){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(Kh,p),m=C,()=>{a.removeEventListener(Kh,p),m=null}},createHref(C){return t(a,C)},createURL:v,encodeLocation(C){let y=v(C);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:g,go(C){return s.go(C)}};return b}var Xh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Xh||(Xh={}));function Uy(e,t,i){return i===void 0&&(i="/"),Yy(e,t,i)}function Yy(e,t,i,n){let a=typeof t=="string"?pr(t):t,o=i0(a.pathname||"/",i);if(o==null)return null;let s=qx(e);Qy(s);let c=null;for(let m=0;c==null&&m<s.length;++m){let h=ov(o);c=nv(s[m],h)}return c}function qx(e,t,i,n){t===void 0&&(t=[]),i===void 0&&(i=[]),n===void 0&&(n="");let a=(o,s,c)=>{let m={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};m.relativePath.startsWith("/")&&(ye(m.relativePath.startsWith(n),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(n.length));let h=zi([n,m.relativePath]),u=i.concat(m);o.children&&o.children.length>0&&(ye(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),qx(o.children,t,u,h)),!(o.path==null&&!o.index)&&t.push({path:h,score:tv(h,o.index),routesMeta:u})};return e.forEach((o,s)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))a(o,s);else for(let m of Xx(o.path))a(o,s,m)}),t}function Xx(e){let t=e.split("/");if(t.length===0)return[];let[i,...n]=t,a=i.endsWith("?"),o=i.replace(/\?$/,"");if(n.length===0)return a?[o,""]:[o];let s=Xx(n.join("/")),c=[];return c.push(...s.map(m=>m===""?o:[o,m].join("/"))),a&&c.push(...s),c.map(m=>e.startsWith("/")&&m===""?"/":m)}function Qy(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:iv(t.routesMeta.map(n=>n.childrenIndex),i.routesMeta.map(n=>n.childrenIndex)))}const Gy=/^:[\w-]+$/,Ky=3,qy=2,Xy=1,Jy=10,ev=-2,Jh=e=>e==="*";function tv(e,t){let i=e.split("/"),n=i.length;return i.some(Jh)&&(n+=ev),t&&(n+=qy),i.filter(a=>!Jh(a)).reduce((a,o)=>a+(Gy.test(o)?Ky:o===""?Xy:Jy),n)}function iv(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function nv(e,t,i){let{routesMeta:n}=e,a={},o="/",s=[];for(let c=0;c<n.length;++c){let m=n[c],h=c===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",p=rv({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},u),f=m.route;if(!p)return null;Object.assign(a,p.params),s.push({params:a,pathname:zi([o,p.pathname]),pathnameBase:mv(zi([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=zi([o,p.pathnameBase]))}return s}function rv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,n]=av(e.path,e.caseSensitive,e.end),a=t.match(i);if(!a)return null;let o=a[0],s=o.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:n.reduce((h,u,p)=>{let{paramName:f,isOptional:g}=u;if(f==="*"){let b=c[p]||"";s=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const v=c[p];return g&&!v?h[f]=void 0:h[f]=(v||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:s,pattern:e}}function av(e,t,i){t===void 0&&(t=!1),i===void 0&&(i=!0),t0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,m)=>(n.push({paramName:c,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function ov(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return t0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function i0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,n=e.charAt(i);return n&&n!=="/"?null:e.slice(i)||"/"}const sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lv=e=>sv.test(e);function dv(e,t){t===void 0&&(t="/");let{pathname:i,search:n="",hash:a=""}=typeof e=="string"?pr(e):e,o;if(i)if(lv(i))o=i;else{if(i.includes("//")){let s=i;i=i.replace(/\/\/+/g,"/"),t0(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+i))}i.startsWith("/")?o=ep(i.substring(1),"/"):o=ep(i,t)}else o=t;return{pathname:o,search:hv(n),hash:pv(a)}}function ep(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?i.length>1&&i.pop():a!=="."&&i.push(a)}),i.length>1?i.join("/"):"/"}function Zl(e,t,i,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cv(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Jx(e,t){let i=cv(e);return t?i.map((n,a)=>a===i.length-1?n.pathname:n.pathnameBase):i.map(n=>n.pathnameBase)}function e1(e,t,i,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=pr(e):(a=xa({},e),ye(!a.pathname||!a.pathname.includes("?"),Zl("?","pathname","search",a)),ye(!a.pathname||!a.pathname.includes("#"),Zl("#","pathname","hash",a)),ye(!a.search||!a.search.includes("#"),Zl("#","search","hash",a)));let o=e===""||a.pathname==="",s=o?"/":a.pathname,c;if(s==null)c=i;else{let p=t.length-1;if(!n&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),p-=1;a.pathname=f.join("/")}c=p>=0?t[p]:"/"}let m=dv(a,c),h=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||u)&&(m.pathname+="/"),m}const zi=e=>e.join("/").replace(/\/\/+/g,"/"),mv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function uv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const t1=["post","put","patch","delete"];new Set(t1);const fv=["get",...t1];new Set(fv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wa(){return wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},wa.apply(this,arguments)}const n0=j.createContext(null),gv=j.createContext(null),un=j.createContext(null),Js=j.createContext(null),ii=j.createContext({outlet:null,matches:[],isDataRoute:!1}),i1=j.createContext(null);function xv(e,t){let{relative:i}=t===void 0?{}:t;Aa()||ye(!1);let{basename:n,navigator:a}=j.useContext(un),{hash:o,pathname:s,search:c}=a1(e,{relative:i}),m=s;return n!=="/"&&(m=s==="/"?n:zi([n,s])),a.createHref({pathname:m,search:c,hash:o})}function Aa(){return j.useContext(Js)!=null}function ur(){return Aa()||ye(!1),j.useContext(Js).location}function n1(e){j.useContext(un).static||j.useLayoutEffect(e)}function r1(){let{isDataRoute:e}=j.useContext(ii);return e?Ev():wv()}function wv(){Aa()||ye(!1);let e=j.useContext(n0),{basename:t,future:i,navigator:n}=j.useContext(un),{matches:a}=j.useContext(ii),{pathname:o}=ur(),s=JSON.stringify(Jx(a,i.v7_relativeSplatPath)),c=j.useRef(!1);return n1(()=>{c.current=!0}),j.useCallback(function(h,u){if(u===void 0&&(u={}),!c.current)return;if(typeof h=="number"){n.go(h);return}let p=e1(h,JSON.parse(s),o,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:zi([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,s,o,e])}const yv=j.createContext(null);function vv(e){let t=j.useContext(ii).outlet;return t&&j.createElement(yv.Provider,{value:e},t)}function bv(){let{matches:e}=j.useContext(ii),t=e[e.length-1];return t?t.params:{}}function a1(e,t){let{relative:i}=t===void 0?{}:t,{future:n}=j.useContext(un),{matches:a}=j.useContext(ii),{pathname:o}=ur(),s=JSON.stringify(Jx(a,n.v7_relativeSplatPath));return j.useMemo(()=>e1(e,JSON.parse(s),o,i==="path"),[e,s,o,i])}function kv(e,t){return jv(e,t)}function jv(e,t,i,n){Aa()||ye(!1);let{navigator:a}=j.useContext(un),{matches:o}=j.useContext(ii),s=o[o.length-1],c=s?s.params:{};s&&s.pathname;let m=s?s.pathnameBase:"/";s&&s.route;let h=ur(),u;if(t){var p;let C=typeof t=="string"?pr(t):t;m==="/"||(p=C.pathname)!=null&&p.startsWith(m)||ye(!1),u=C}else u=h;let f=u.pathname||"/",g=f;if(m!=="/"){let C=m.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=Uy(e,{pathname:g}),b=Tv(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},c,C.params),pathname:zi([m,a.encodeLocation?a.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?m:zi([m,a.encodeLocation?a.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,i,n);return t&&b?j.createElement(Js.Provider,{value:{location:wa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:xi.Pop}},b):b}function $v(){let e=Lv(),t=uv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),i?j.createElement("pre",{style:a},i):null,null)}const Sv=j.createElement($v,null);class Cv extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){console.error("React Router caught the following error during render",t,i)}render(){return this.state.error!==void 0?j.createElement(ii.Provider,{value:this.props.routeContext},j.createElement(i1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zv(e){let{routeContext:t,match:i,children:n}=e,a=j.useContext(n0);return a&&a.static&&a.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=i.route.id),j.createElement(ii.Provider,{value:t},n)}function Tv(e,t,i,n){var a;if(t===void 0&&(t=[]),i===void 0&&(i=null),n===void 0&&(n=null),e==null){var o;if(!i)return null;if(i.errors)e=i.matches;else if((o=n)!=null&&o.v7_partialHydration&&t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let s=e,c=(a=i)==null?void 0:a.errors;if(c!=null){let u=s.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);u>=0||ye(!1),s=s.slice(0,Math.min(s.length,u+1))}let m=!1,h=-1;if(i&&n&&n.v7_partialHydration)for(let u=0;u<s.length;u++){let p=s[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=u),p.route.id){let{loaderData:f,errors:g}=i,v=p.route.loader&&f[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||v){m=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((u,p,f)=>{let g,v=!1,b=null,C=null;i&&(g=c&&p.route.id?c[p.route.id]:void 0,b=p.route.errorElement||Sv,m&&(h<0&&f===0?(Iv("route-fallback"),v=!0,C=null):h===f&&(v=!0,C=p.route.hydrateFallbackElement||null)));let y=t.concat(s.slice(0,f+1)),x=()=>{let w;return g?w=b:v?w=C:p.route.Component?w=j.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=u,j.createElement(zv,{match:p,routeContext:{outlet:u,matches:y,isDataRoute:i!=null},children:w})};return i&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?j.createElement(Cv,{location:i.location,revalidation:i.revalidation,component:b,error:g,children:x(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):x()},null)}var o1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(o1||{}),s1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(s1||{});function Pv(e){let t=j.useContext(n0);return t||ye(!1),t}function Mv(e){let t=j.useContext(gv);return t||ye(!1),t}function Av(e){let t=j.useContext(ii);return t||ye(!1),t}function l1(e){let t=Av(),i=t.matches[t.matches.length-1];return i.route.id||ye(!1),i.route.id}function Lv(){var e;let t=j.useContext(i1),i=Mv(),n=l1();return t!==void 0?t:(e=i.errors)==null?void 0:e[n]}function Ev(){let{router:e}=Pv(o1.UseNavigateStable),t=l1(s1.UseNavigateStable),i=j.useRef(!1);return n1(()=>{i.current=!0}),j.useCallback(function(a,o){o===void 0&&(o={}),i.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,wa({fromRouteId:t},o)))},[e,t])}const tp={};function Iv(e,t,i){tp[e]||(tp[e]=!0)}function Rv(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Bv(e){return vv(e.context)}function ut(e){ye(!1)}function Fv(e){let{basename:t="/",children:i=null,location:n,navigationType:a=xi.Pop,navigator:o,static:s=!1,future:c}=e;Aa()&&ye(!1);let m=t.replace(/^\/*/,"/"),h=j.useMemo(()=>({basename:m,navigator:o,static:s,future:wa({v7_relativeSplatPath:!1},c)}),[m,c,o,s]);typeof n=="string"&&(n=pr(n));let{pathname:u="/",search:p="",hash:f="",state:g=null,key:v="default"}=n,b=j.useMemo(()=>{let C=i0(u,m);return C==null?null:{location:{pathname:C,search:p,hash:f,state:g,key:v},navigationType:a}},[m,u,p,f,g,v,a]);return b==null?null:j.createElement(un.Provider,{value:h},j.createElement(Js.Provider,{children:i,value:b}))}function Wv(e){let{children:t,location:i}=e;return kv(Fc(t),i)}new Promise(()=>{});function Fc(e,t){t===void 0&&(t=[]);let i=[];return j.Children.forEach(e,(n,a)=>{if(!j.isValidElement(n))return;let o=[...t,a];if(n.type===j.Fragment){i.push.apply(i,Fc(n.props.children,o));return}n.type!==ut&&ye(!1),!n.props.index||!n.props.children||ye(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Fc(n.props.children,o)),i.push(s)}),i}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wc(){return Wc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},Wc.apply(this,arguments)}function Dv(e,t){if(e==null)return{};var i={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(i[a]=e[a]);return i}function Vv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Nv(e,t){return e.button===0&&(!t||t==="_self")&&!Vv(e)}const Ov=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_v="6";try{window.__reactRouterVersion=_v}catch{}const Hv="startTransition",ip=A2[Hv];function Zv(e){let{basename:t,children:i,future:n,window:a}=e,o=j.useRef();o.current==null&&(o.current=_y({window:a,v5Compat:!0}));let s=o.current,[c,m]=j.useState({action:s.action,location:s.location}),{v7_startTransition:h}=n||{},u=j.useCallback(p=>{h&&ip?ip(()=>m(p)):m(p)},[m,h]);return j.useLayoutEffect(()=>s.listen(u),[s,u]),j.useEffect(()=>Rv(n),[n]),j.createElement(Fv,{basename:t,children:i,location:c.location,navigationType:c.action,navigator:s,future:n})}const Uv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V=j.forwardRef(function(t,i){let{onClick:n,relative:a,reloadDocument:o,replace:s,state:c,target:m,to:h,preventScrollReset:u,viewTransition:p}=t,f=Dv(t,Ov),{basename:g}=j.useContext(un),v,b=!1;if(typeof h=="string"&&Yv.test(h)&&(v=h,Uv))try{let w=new URL(window.location.href),$=h.startsWith("//")?new URL(w.protocol+h):new URL(h),z=i0($.pathname,g);$.origin===w.origin&&z!=null?h=z+$.search+$.hash:b=!0}catch{}let C=xv(h,{relative:a}),y=Qv(h,{replace:s,state:c,target:m,preventScrollReset:u,relative:a,viewTransition:p});function x(w){n&&n(w),w.defaultPrevented||y(w)}return j.createElement("a",Wc({},f,{href:v||C,onClick:b||o?n:x,ref:i,target:m}))});var np;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(np||(np={}));var rp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rp||(rp={}));function Qv(e,t){let{target:i,replace:n,state:a,preventScrollReset:o,relative:s,viewTransition:c}=t===void 0?{}:t,m=r1(),h=ur(),u=a1(e,{relative:s});return j.useCallback(p=>{if(Nv(p,i)){p.preventDefault();let f=n!==void 0?n:vs(h)===vs(u);m(e,{replace:f,state:a,preventScrollReset:o,relative:s,viewTransition:c})}},[h,m,u,n,a,i,e,o,s,c])}const r0=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),el=j.createContext({}),tl=j.createContext(null),il=typeof document<"u",La=il?j.useLayoutEffect:j.useEffect,d1=j.createContext({strict:!1}),a0=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Gv="framerAppearId",c1="data-"+a0(Gv);function Kv(e,t,i,n){const{visualElement:a}=j.useContext(el),o=j.useContext(d1),s=j.useContext(tl),c=j.useContext(r0).reducedMotion,m=j.useRef();n=n||o.renderer,!m.current&&n&&(m.current=n(e,{visualState:t,parent:a,props:i,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:c}));const h=m.current;j.useInsertionEffect(()=>{h&&h.update(i,s)});const u=j.useRef(!!(i[c1]&&!window.HandoffComplete));return La(()=>{h&&(h.render(),u.current&&h.animationState&&h.animationState.animateChanges())}),j.useEffect(()=>{h&&(h.updateFeatures(),!u.current&&h.animationState&&h.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),h}function Bn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function qv(e,t,i){return j.useCallback(n=>{n&&e.mount&&e.mount(n),t&&(n?t.mount(n):t.unmount()),i&&(typeof i=="function"?i(n):Bn(i)&&(i.current=n))},[t])}function ya(e){return typeof e=="string"||Array.isArray(e)}function nl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const o0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],s0=["initial",...o0];function rl(e){return nl(e.animate)||s0.some(t=>ya(e[t]))}function m1(e){return!!(rl(e)||e.variants)}function Xv(e,t){if(rl(e)){const{initial:i,animate:n}=e;return{initial:i===!1||ya(i)?i:void 0,animate:ya(n)?n:void 0}}return e.inherit!==!1?t:{}}function Jv(e){const{initial:t,animate:i}=Xv(e,j.useContext(el));return j.useMemo(()=>({initial:t,animate:i}),[ap(t),ap(i)])}function ap(e){return Array.isArray(e)?e.join(" "):e}const op={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},va={};for(const e in op)va[e]={isEnabled:t=>op[e].some(i=>!!t[i])};function eb(e){for(const t in e)va[t]={...va[t],...e[t]}}const l0=j.createContext({}),h1=j.createContext({}),tb=Symbol.for("motionComponentSymbol");function ib({preloadedFeatures:e,createVisualElement:t,useRender:i,useVisualState:n,Component:a}){e&&eb(e);function o(c,m){let h;const u={...j.useContext(r0),...c,layoutId:nb(c)},{isStatic:p}=u,f=Jv(c),g=n(c,p);if(!p&&il){f.visualElement=Kv(a,g,u,t);const v=j.useContext(h1),b=j.useContext(d1).strict;f.visualElement&&(h=f.visualElement.loadFeatures(u,b,e,v))}return j.createElement(el.Provider,{value:f},h&&f.visualElement?j.createElement(h,{visualElement:f.visualElement,...u}):null,i(a,c,qv(g,f.visualElement,m),g,p,f.visualElement))}const s=j.forwardRef(o);return s[tb]=a,s}function nb({layoutId:e}){const t=j.useContext(l0).id;return t&&e!==void 0?t+"-"+e:e}function rb(e){function t(n,a={}){return ib(e(n,a))}if(typeof Proxy>"u")return t;const i=new Map;return new Proxy(t,{get:(n,a)=>(i.has(a)||i.set(a,t(a)),i.get(a))})}const ab=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function d0(e){return typeof e!="string"||e.includes("-")?!1:!!(ab.indexOf(e)>-1||/[A-Z]/.test(e))}const bs={};function ob(e){Object.assign(bs,e)}const Ea=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fn=new Set(Ea);function p1(e,{layout:t,layoutId:i}){return fn.has(e)||e.startsWith("origin")||(t||i!==void 0)&&(!!bs[e]||e==="opacity")}const Ye=e=>!!(e&&e.getVelocity),sb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lb=Ea.length;function db(e,{enableHardwareAcceleration:t=!0,allowTransformNone:i=!0},n,a){let o="";for(let s=0;s<lb;s++){const c=Ea[s];if(e[c]!==void 0){const m=sb[c]||c;o+=`${m}(${e[c]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),a?o=a(e,n?"":o):i&&n&&(o="none"),o}const u1=e=>t=>typeof t=="string"&&t.startsWith(e),f1=u1("--"),Dc=u1("var(--"),cb=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,mb=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Li=(e,t,i)=>Math.min(Math.max(i,e),t),gn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Yr={...gn,transform:e=>Li(0,1,e)},oo={...gn,default:1},Qr=e=>Math.round(e*1e5)/1e5,al=/(-)?([\d]*\.?[\d])+/g,g1=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,hb=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ia(e){return typeof e=="string"}const Ra=e=>({test:t=>Ia(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),oi=Ra("deg"),Rt=Ra("%"),W=Ra("px"),pb=Ra("vh"),ub=Ra("vw"),sp={...Rt,parse:e=>Rt.parse(e)/100,transform:e=>Rt.transform(e*100)},lp={...gn,transform:Math.round},x1={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,size:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,rotate:oi,rotateX:oi,rotateY:oi,rotateZ:oi,scale:oo,scaleX:oo,scaleY:oo,scaleZ:oo,skew:oi,skewX:oi,skewY:oi,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:Yr,originX:sp,originY:sp,originZ:W,zIndex:lp,fillOpacity:Yr,strokeOpacity:Yr,numOctaves:lp};function c0(e,t,i,n){const{style:a,vars:o,transform:s,transformOrigin:c}=e;let m=!1,h=!1,u=!0;for(const p in t){const f=t[p];if(f1(p)){o[p]=f;continue}const g=x1[p],v=mb(f,g);if(fn.has(p)){if(m=!0,s[p]=v,!u)continue;f!==(g.default||0)&&(u=!1)}else p.startsWith("origin")?(h=!0,c[p]=v):a[p]=v}if(t.transform||(m||n?a.transform=db(e.transform,i,u,n):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:f="50%",originZ:g=0}=c;a.transformOrigin=`${p} ${f} ${g}`}}const m0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function w1(e,t,i){for(const n in t)!Ye(t[n])&&!p1(n,i)&&(e[n]=t[n])}function fb({transformTemplate:e},t,i){return j.useMemo(()=>{const n=m0();return c0(n,t,{enableHardwareAcceleration:!i},e),Object.assign({},n.vars,n.style)},[t])}function gb(e,t,i){const n=e.style||{},a={};return w1(a,n,e),Object.assign(a,fb(e,t,i)),e.transformValues?e.transformValues(a):a}function xb(e,t,i){const n={},a=gb(e,t,i);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=a,n}const wb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ks(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||wb.has(e)}let y1=e=>!ks(e);function yb(e){e&&(y1=t=>t.startsWith("on")?!ks(t):e(t))}try{yb(require("@emotion/is-prop-valid").default)}catch{}function vb(e,t,i){const n={};for(const a in e)a==="values"&&typeof e.values=="object"||(y1(a)||i===!0&&ks(a)||!t&&!ks(a)||e.draggable&&a.startsWith("onDrag"))&&(n[a]=e[a]);return n}function dp(e,t,i){return typeof e=="string"?e:W.transform(t+i*e)}function bb(e,t,i){const n=dp(t,e.x,e.width),a=dp(i,e.y,e.height);return`${n} ${a}`}const kb={offset:"stroke-dashoffset",array:"stroke-dasharray"},jb={offset:"strokeDashoffset",array:"strokeDasharray"};function $b(e,t,i=1,n=0,a=!0){e.pathLength=1;const o=a?kb:jb;e[o.offset]=W.transform(-n);const s=W.transform(t),c=W.transform(i);e[o.array]=`${s} ${c}`}function h0(e,{attrX:t,attrY:i,attrScale:n,originX:a,originY:o,pathLength:s,pathSpacing:c=1,pathOffset:m=0,...h},u,p,f){if(c0(e,h,u,f),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:v,dimensions:b}=e;g.transform&&(b&&(v.transform=g.transform),delete g.transform),b&&(a!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=bb(b,a!==void 0?a:.5,o!==void 0?o:.5)),t!==void 0&&(g.x=t),i!==void 0&&(g.y=i),n!==void 0&&(g.scale=n),s!==void 0&&$b(g,s,c,m,!1)}const v1=()=>({...m0(),attrs:{}}),p0=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Sb(e,t,i,n){const a=j.useMemo(()=>{const o=v1();return h0(o,t,{enableHardwareAcceleration:!1},p0(n),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};w1(o,e.style,e),a.style={...o,...a.style}}return a}function Cb(e=!1){return(i,n,a,{latestValues:o},s)=>{const m=(d0(i)?Sb:xb)(n,o,s,i),u={...vb(n,typeof i=="string",e),...m,ref:a},{children:p}=n,f=j.useMemo(()=>Ye(p)?p.get():p,[p]);return j.createElement(i,{...u,children:f})}}function b1(e,{style:t,vars:i},n,a){Object.assign(e.style,t,a&&a.getProjectionStyles(n));for(const o in i)e.style.setProperty(o,i[o])}const k1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function j1(e,t,i,n){b1(e,t,void 0,n);for(const a in t.attrs)e.setAttribute(k1.has(a)?a:a0(a),t.attrs[a])}function u0(e,t){const{style:i}=e,n={};for(const a in i)(Ye(i[a])||t.style&&Ye(t.style[a])||p1(a,e))&&(n[a]=i[a]);return n}function $1(e,t){const i=u0(e,t);for(const n in e)if(Ye(e[n])||Ye(t[n])){const a=Ea.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;i[a]=e[n]}return i}function f0(e,t,i,n={},a={}){return typeof t=="function"&&(t=t(i!==void 0?i:e.custom,n,a)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(i!==void 0?i:e.custom,n,a)),t}function Ba(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}const js=e=>Array.isArray(e),zb=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Tb=e=>js(e)?e[e.length-1]||0:e;function Vo(e){const t=Ye(e)?e.get():e;return zb(t)?t.toValue():t}function Pb({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:i},n,a,o){const s={latestValues:Mb(n,a,o,e),renderState:t()};return i&&(s.mount=c=>i(n,c,s)),s}const S1=e=>(t,i)=>{const n=j.useContext(el),a=j.useContext(tl),o=()=>Pb(e,t,n,a);return i?o():Ba(o)};function Mb(e,t,i,n){const a={},o=n(e,{});for(const f in o)a[f]=Vo(o[f]);let{initial:s,animate:c}=e;const m=rl(e),h=m1(e);t&&h&&!m&&e.inherit!==!1&&(s===void 0&&(s=t.initial),c===void 0&&(c=t.animate));let u=i?i.initial===!1:!1;u=u||s===!1;const p=u?c:s;return p&&typeof p!="boolean"&&!nl(p)&&(Array.isArray(p)?p:[p]).forEach(g=>{const v=f0(e,g);if(!v)return;const{transitionEnd:b,transition:C,...y}=v;for(const x in y){let w=y[x];if(Array.isArray(w)){const $=u?w.length-1:0;w=w[$]}w!==null&&(a[x]=w)}for(const x in b)a[x]=b[x]}),a}const pe=e=>e;class cp{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const i=this.order.indexOf(t);i!==-1&&(this.order.splice(i,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function Ab(e){let t=new cp,i=new cp,n=0,a=!1,o=!1;const s=new WeakSet,c={schedule:(m,h=!1,u=!1)=>{const p=u&&a,f=p?t:i;return h&&s.add(m),f.add(m)&&p&&a&&(n=t.order.length),m},cancel:m=>{i.remove(m),s.delete(m)},process:m=>{if(a){o=!0;return}if(a=!0,[t,i]=[i,t],i.clear(),n=t.order.length,n)for(let h=0;h<n;h++){const u=t.order[h];u(m),s.has(u)&&(c.schedule(u),e())}a=!1,o&&(o=!1,c.process(m))}};return c}const so=["prepare","read","update","preRender","render","postRender"],Lb=40;function Eb(e,t){let i=!1,n=!0;const a={delta:0,timestamp:0,isProcessing:!1},o=so.reduce((p,f)=>(p[f]=Ab(()=>i=!0),p),{}),s=p=>o[p].process(a),c=()=>{const p=performance.now();i=!1,a.delta=n?1e3/60:Math.max(Math.min(p-a.timestamp,Lb),1),a.timestamp=p,a.isProcessing=!0,so.forEach(s),a.isProcessing=!1,i&&t&&(n=!1,e(c))},m=()=>{i=!0,n=!0,a.isProcessing||e(c)};return{schedule:so.reduce((p,f)=>{const g=o[f];return p[f]=(v,b=!1,C=!1)=>(i||m(),g.schedule(v,b,C)),p},{}),cancel:p=>so.forEach(f=>o[f].cancel(p)),state:a,steps:o}}const{schedule:G,cancel:$t,state:ze,steps:Ul}=Eb(typeof requestAnimationFrame<"u"?requestAnimationFrame:pe,!0),Ib={useVisualState:S1({scrapeMotionValuesFromProps:$1,createRenderState:v1,onMount:(e,t,{renderState:i,latestValues:n})=>{G.read(()=>{try{i.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}),G.render(()=>{h0(i,n,{enableHardwareAcceleration:!1},p0(t.tagName),e.transformTemplate),j1(t,i)})}})},Rb={useVisualState:S1({scrapeMotionValuesFromProps:u0,createRenderState:m0})};function Bb(e,{forwardMotionProps:t=!1},i,n){return{...d0(e)?Ib:Rb,preloadedFeatures:i,useRender:Cb(t),createVisualElement:n,Component:e}}function Zt(e,t,i,n={passive:!0}){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i)}const C1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function ol(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const Fb=e=>t=>C1(t)&&e(t,ol(t));function Yt(e,t,i,n){return Zt(e,t,Fb(i),n)}const Wb=(e,t)=>i=>t(e(i)),Ti=(...e)=>e.reduce(Wb);function z1(e){let t=null;return()=>{const i=()=>{t=null};return t===null?(t=e,i):!1}}const mp=z1("dragHorizontal"),hp=z1("dragVertical");function T1(e){let t=!1;if(e==="y")t=hp();else if(e==="x")t=mp();else{const i=mp(),n=hp();i&&n?t=()=>{i(),n()}:(i&&i(),n&&n())}return t}function P1(){const e=T1(!0);return e?(e(),!1):!0}class Fi{constructor(t){this.isMounted=!1,this.node=t}update(){}}function pp(e,t){const i="pointer"+(t?"enter":"leave"),n="onHover"+(t?"Start":"End"),a=(o,s)=>{if(o.pointerType==="touch"||P1())return;const c=e.getProps();e.animationState&&c.whileHover&&e.animationState.setActive("whileHover",t),c[n]&&G.update(()=>c[n](o,s))};return Yt(e.current,i,a,{passive:!e.getProps()[n]})}class Db extends Fi{mount(){this.unmount=Ti(pp(this.node,!0),pp(this.node,!1))}unmount(){}}class Vb extends Fi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ti(Zt(this.node.current,"focus",()=>this.onFocus()),Zt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const M1=(e,t)=>t?e===t?!0:M1(e,t.parentElement):!1;function Yl(e,t){if(!t)return;const i=new PointerEvent("pointer"+e);t(i,ol(i))}class Nb extends Fi{constructor(){super(...arguments),this.removeStartListeners=pe,this.removeEndListeners=pe,this.removeAccessibleListeners=pe,this.startPointerPress=(t,i)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),o=Yt(window,"pointerup",(c,m)=>{if(!this.checkPressEnd())return;const{onTap:h,onTapCancel:u,globalTapTarget:p}=this.node.getProps();G.update(()=>{!p&&!M1(this.node.current,c.target)?u&&u(c,m):h&&h(c,m)})},{passive:!(n.onTap||n.onPointerUp)}),s=Yt(window,"pointercancel",(c,m)=>this.cancelPress(c,m),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=Ti(o,s),this.startPress(t,i)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=c=>{c.key!=="Enter"||!this.checkPressEnd()||Yl("up",(m,h)=>{const{onTap:u}=this.node.getProps();u&&G.update(()=>u(m,h))})};this.removeEndListeners(),this.removeEndListeners=Zt(this.node.current,"keyup",s),Yl("down",(c,m)=>{this.startPress(c,m)})},i=Zt(this.node.current,"keydown",t),n=()=>{this.isPressing&&Yl("cancel",(o,s)=>this.cancelPress(o,s))},a=Zt(this.node.current,"blur",n);this.removeAccessibleListeners=Ti(i,a)}}startPress(t,i){this.isPressing=!0;const{onTapStart:n,whileTap:a}=this.node.getProps();a&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&G.update(()=>n(t,i))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!P1()}cancelPress(t,i){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&G.update(()=>n(t,i))}mount(){const t=this.node.getProps(),i=Yt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),n=Zt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ti(i,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Vc=new WeakMap,Ql=new WeakMap,Ob=e=>{const t=Vc.get(e.target);t&&t(e)},_b=e=>{e.forEach(Ob)};function Hb({root:e,...t}){const i=e||document;Ql.has(i)||Ql.set(i,{});const n=Ql.get(i),a=JSON.stringify(t);return n[a]||(n[a]=new IntersectionObserver(_b,{root:e,...t})),n[a]}function Zb(e,t,i){const n=Hb(t);return Vc.set(e,i),n.observe(e),()=>{Vc.delete(e),n.unobserve(e)}}const Ub={some:0,all:1};class Yb extends Fi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:n,amount:a="some",once:o}=t,s={root:i?i.current:void 0,rootMargin:n,threshold:typeof a=="number"?a:Ub[a]},c=m=>{const{isIntersecting:h}=m;if(this.isInView===h||(this.isInView=h,o&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:u,onViewportLeave:p}=this.node.getProps(),f=h?u:p;f&&f(m)};return Zb(this.node.current,s,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(Qb(t,i))&&this.startObserver()}unmount(){}}function Qb({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}const Gb={inView:{Feature:Yb},tap:{Feature:Nb},focus:{Feature:Vb},hover:{Feature:Db}};function A1(e,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==e.length)return!1;for(let n=0;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kb(e){const t={};return e.values.forEach((i,n)=>t[n]=i.get()),t}function qb(e){const t={};return e.values.forEach((i,n)=>t[n]=i.getVelocity()),t}function sl(e,t,i){const n=e.getProps();return f0(n,t,i!==void 0?i:n.custom,Kb(e),qb(e))}let Xb=pe,g0=pe;const nn=e=>e*1e3,Qt=e=>e/1e3,Jb={current:!1},L1=e=>Array.isArray(e)&&typeof e[0]=="number";function E1(e){return!!(!e||typeof e=="string"&&I1[e]||L1(e)||Array.isArray(e)&&e.every(E1))}const Rr=([e,t,i,n])=>`cubic-bezier(${e}, ${t}, ${i}, ${n})`,I1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Rr([0,.65,.55,1]),circOut:Rr([.55,0,1,.45]),backIn:Rr([.31,.01,.66,-.59]),backOut:Rr([.33,1.53,.69,.99])};function R1(e){if(e)return L1(e)?Rr(e):Array.isArray(e)?e.map(R1):I1[e]}function e3(e,t,i,{delay:n=0,duration:a,repeat:o=0,repeatType:s="loop",ease:c,times:m}={}){const h={[t]:i};m&&(h.offset=m);const u=R1(c);return Array.isArray(u)&&(h.easing=u),e.animate(h,{delay:n,duration:a,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function t3(e,{repeat:t,repeatType:i="loop"}){const n=t&&i!=="loop"&&t%2===1?0:e.length-1;return e[n]}const B1=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,i3=1e-7,n3=12;function r3(e,t,i,n,a){let o,s,c=0;do s=t+(i-t)/2,o=B1(s,n,a)-e,o>0?i=s:t=s;while(Math.abs(o)>i3&&++c<n3);return s}function Fa(e,t,i,n){if(e===t&&i===n)return pe;const a=o=>r3(o,0,1,e,i);return o=>o===0||o===1?o:B1(a(o),t,n)}const a3=Fa(.42,0,1,1),o3=Fa(0,0,.58,1),F1=Fa(.42,0,.58,1),s3=e=>Array.isArray(e)&&typeof e[0]!="number",W1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,D1=e=>t=>1-e(1-t),x0=e=>1-Math.sin(Math.acos(e)),V1=D1(x0),l3=W1(x0),N1=Fa(.33,1.53,.69,.99),w0=D1(N1),d3=W1(w0),c3=e=>(e*=2)<1?.5*w0(e):.5*(2-Math.pow(2,-10*(e-1))),m3={linear:pe,easeIn:a3,easeInOut:F1,easeOut:o3,circIn:x0,circInOut:l3,circOut:V1,backIn:w0,backInOut:d3,backOut:N1,anticipate:c3},up=e=>{if(Array.isArray(e)){g0(e.length===4);const[t,i,n,a]=e;return Fa(t,i,n,a)}else if(typeof e=="string")return m3[e];return e},y0=(e,t)=>i=>!!(Ia(i)&&hb.test(i)&&i.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(i,t)),O1=(e,t,i)=>n=>{if(!Ia(n))return n;const[a,o,s,c]=n.match(al);return{[e]:parseFloat(a),[t]:parseFloat(o),[i]:parseFloat(s),alpha:c!==void 0?parseFloat(c):1}},h3=e=>Li(0,255,e),Gl={...gn,transform:e=>Math.round(h3(e))},Ki={test:y0("rgb","red"),parse:O1("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:n=1})=>"rgba("+Gl.transform(e)+", "+Gl.transform(t)+", "+Gl.transform(i)+", "+Qr(Yr.transform(n))+")"};function p3(e){let t="",i="",n="",a="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),n=e.substring(5,7),a=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),n=e.substring(3,4),a=e.substring(4,5),t+=t,i+=i,n+=n,a+=a),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:a?parseInt(a,16)/255:1}}const Nc={test:y0("#"),parse:p3,transform:Ki.transform},Fn={test:y0("hsl","hue"),parse:O1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:n=1})=>"hsla("+Math.round(e)+", "+Rt.transform(Qr(t))+", "+Rt.transform(Qr(i))+", "+Qr(Yr.transform(n))+")"},Ie={test:e=>Ki.test(e)||Nc.test(e)||Fn.test(e),parse:e=>Ki.test(e)?Ki.parse(e):Fn.test(e)?Fn.parse(e):Nc.parse(e),transform:e=>Ia(e)?e:e.hasOwnProperty("red")?Ki.transform(e):Fn.transform(e)},se=(e,t,i)=>-i*e+i*t+e;function Kl(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function u3({hue:e,saturation:t,lightness:i,alpha:n}){e/=360,t/=100,i/=100;let a=0,o=0,s=0;if(!t)a=o=s=i;else{const c=i<.5?i*(1+t):i+t-i*t,m=2*i-c;a=Kl(m,c,e+1/3),o=Kl(m,c,e),s=Kl(m,c,e-1/3)}return{red:Math.round(a*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:n}}const ql=(e,t,i)=>{const n=e*e;return Math.sqrt(Math.max(0,i*(t*t-n)+n))},f3=[Nc,Ki,Fn],g3=e=>f3.find(t=>t.test(e));function fp(e){const t=g3(e);let i=t.parse(e);return t===Fn&&(i=u3(i)),i}const _1=(e,t)=>{const i=fp(e),n=fp(t),a={...i};return o=>(a.red=ql(i.red,n.red,o),a.green=ql(i.green,n.green,o),a.blue=ql(i.blue,n.blue,o),a.alpha=se(i.alpha,n.alpha,o),Ki.transform(a))};function x3(e){var t,i;return isNaN(e)&&Ia(e)&&(((t=e.match(al))===null||t===void 0?void 0:t.length)||0)+(((i=e.match(g1))===null||i===void 0?void 0:i.length)||0)>0}const H1={regex:cb,countKey:"Vars",token:"${v}",parse:pe},Z1={regex:g1,countKey:"Colors",token:"${c}",parse:Ie.parse},U1={regex:al,countKey:"Numbers",token:"${n}",parse:gn.parse};function Xl(e,{regex:t,countKey:i,token:n,parse:a}){const o=e.tokenised.match(t);o&&(e["num"+i]=o.length,e.tokenised=e.tokenised.replace(t,n),e.values.push(...o.map(a)))}function $s(e){const t=e.toString(),i={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return i.value.includes("var(--")&&Xl(i,H1),Xl(i,Z1),Xl(i,U1),i}function Y1(e){return $s(e).values}function Q1(e){const{values:t,numColors:i,numVars:n,tokenised:a}=$s(e),o=t.length;return s=>{let c=a;for(let m=0;m<o;m++)m<n?c=c.replace(H1.token,s[m]):m<n+i?c=c.replace(Z1.token,Ie.transform(s[m])):c=c.replace(U1.token,Qr(s[m]));return c}}const w3=e=>typeof e=="number"?0:e;function y3(e){const t=Y1(e);return Q1(e)(t.map(w3))}const Ei={test:x3,parse:Y1,createTransformer:Q1,getAnimatableNone:y3},G1=(e,t)=>i=>`${i>0?t:e}`;function K1(e,t){return typeof e=="number"?i=>se(e,t,i):Ie.test(e)?_1(e,t):e.startsWith("var(")?G1(e,t):X1(e,t)}const q1=(e,t)=>{const i=[...e],n=i.length,a=e.map((o,s)=>K1(o,t[s]));return o=>{for(let s=0;s<n;s++)i[s]=a[s](o);return i}},v3=(e,t)=>{const i={...e,...t},n={};for(const a in i)e[a]!==void 0&&t[a]!==void 0&&(n[a]=K1(e[a],t[a]));return a=>{for(const o in n)i[o]=n[o](a);return i}},X1=(e,t)=>{const i=Ei.createTransformer(t),n=$s(e),a=$s(t);return n.numVars===a.numVars&&n.numColors===a.numColors&&n.numNumbers>=a.numNumbers?Ti(q1(n.values,a.values),i):G1(e,t)},tr=(e,t,i)=>{const n=t-e;return n===0?1:(i-e)/n},gp=(e,t)=>i=>se(e,t,i);function b3(e){return typeof e=="number"?gp:typeof e=="string"?Ie.test(e)?_1:X1:Array.isArray(e)?q1:typeof e=="object"?v3:gp}function k3(e,t,i){const n=[],a=i||b3(e[0]),o=e.length-1;for(let s=0;s<o;s++){let c=a(e[s],e[s+1]);if(t){const m=Array.isArray(t)?t[s]||pe:t;c=Ti(m,c)}n.push(c)}return n}function ll(e,t,{clamp:i=!0,ease:n,mixer:a}={}){const o=e.length;if(g0(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=k3(t,n,a),c=s.length,m=h=>{let u=0;if(c>1)for(;u<e.length-2&&!(h<e[u+1]);u++);const p=tr(e[u],e[u+1],h);return s[u](p)};return i?h=>m(Li(e[0],e[o-1],h)):m}function j3(e,t){const i=e[e.length-1];for(let n=1;n<=t;n++){const a=tr(0,t,n);e.push(se(i,1,a))}}function J1(e){const t=[0];return j3(t,e.length-1),t}function $3(e,t){return e.map(i=>i*t)}function S3(e,t){return e.map(()=>t||F1).splice(0,e.length-1)}function Ss({duration:e=300,keyframes:t,times:i,ease:n="easeInOut"}){const a=s3(n)?n.map(up):up(n),o={done:!1,value:t[0]},s=$3(i&&i.length===t.length?i:J1(t),e),c=ll(s,t,{ease:Array.isArray(a)?a:S3(t,a)});return{calculatedDuration:e,next:m=>(o.value=c(m),o.done=m>=e,o)}}function v0(e,t){return t?e*(1e3/t):0}const C3=5;function e5(e,t,i){const n=Math.max(t-C3,0);return v0(i-e(n),t-n)}const Jl=.001,z3=.01,T3=10,P3=.05,M3=1;function A3({duration:e=800,bounce:t=.25,velocity:i=0,mass:n=1}){let a,o,s=1-t;s=Li(P3,M3,s),e=Li(z3,T3,Qt(e)),s<1?(a=h=>{const u=h*s,p=u*e,f=u-i,g=Oc(h,s),v=Math.exp(-p);return Jl-f/g*v},o=h=>{const p=h*s*e,f=p*i+i,g=Math.pow(s,2)*Math.pow(h,2)*e,v=Math.exp(-p),b=Oc(Math.pow(h,2),s);return(-a(h)+Jl>0?-1:1)*((f-g)*v)/b}):(a=h=>{const u=Math.exp(-h*e),p=(h-i)*e+1;return-Jl+u*p},o=h=>{const u=Math.exp(-h*e),p=(i-h)*(e*e);return u*p});const c=5/e,m=E3(a,o,c);if(e=nn(e),isNaN(m))return{stiffness:100,damping:10,duration:e};{const h=Math.pow(m,2)*n;return{stiffness:h,damping:s*2*Math.sqrt(n*h),duration:e}}}const L3=12;function E3(e,t,i){let n=i;for(let a=1;a<L3;a++)n=n-e(n)/t(n);return n}function Oc(e,t){return e*Math.sqrt(1-t*t)}const I3=["duration","bounce"],R3=["stiffness","damping","mass"];function xp(e,t){return t.some(i=>e[i]!==void 0)}function B3(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!xp(e,R3)&&xp(e,I3)){const i=A3(e);t={...t,...i,mass:1},t.isResolvedFromDuration=!0}return t}function t5({keyframes:e,restDelta:t,restSpeed:i,...n}){const a=e[0],o=e[e.length-1],s={done:!1,value:a},{stiffness:c,damping:m,mass:h,duration:u,velocity:p,isResolvedFromDuration:f}=B3({...n,velocity:-Qt(n.velocity||0)}),g=p||0,v=m/(2*Math.sqrt(c*h)),b=o-a,C=Qt(Math.sqrt(c/h)),y=Math.abs(b)<5;i||(i=y?.01:2),t||(t=y?.005:.5);let x;if(v<1){const w=Oc(C,v);x=$=>{const z=Math.exp(-v*C*$);return o-z*((g+v*C*b)/w*Math.sin(w*$)+b*Math.cos(w*$))}}else if(v===1)x=w=>o-Math.exp(-C*w)*(b+(g+C*b)*w);else{const w=C*Math.sqrt(v*v-1);x=$=>{const z=Math.exp(-v*C*$),T=Math.min(w*$,300);return o-z*((g+v*C*b)*Math.sinh(T)+w*b*Math.cosh(T))/w}}return{calculatedDuration:f&&u||null,next:w=>{const $=x(w);if(f)s.done=w>=u;else{let z=g;w!==0&&(v<1?z=e5(x,w,$):z=0);const T=Math.abs(z)<=i,S=Math.abs(o-$)<=t;s.done=T&&S}return s.value=s.done?o:$,s}}}function wp({keyframes:e,velocity:t=0,power:i=.8,timeConstant:n=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:c,max:m,restDelta:h=.5,restSpeed:u}){const p=e[0],f={done:!1,value:p},g=P=>c!==void 0&&P<c||m!==void 0&&P>m,v=P=>c===void 0?m:m===void 0||Math.abs(c-P)<Math.abs(m-P)?c:m;let b=i*t;const C=p+b,y=s===void 0?C:s(C);y!==C&&(b=y-p);const x=P=>-b*Math.exp(-P/n),w=P=>y+x(P),$=P=>{const E=x(P),A=w(P);f.done=Math.abs(E)<=h,f.value=f.done?y:A};let z,T;const S=P=>{g(f.value)&&(z=P,T=t5({keyframes:[f.value,v(f.value)],velocity:e5(w,P,f.value),damping:a,stiffness:o,restDelta:h,restSpeed:u}))};return S(0),{calculatedDuration:null,next:P=>{let E=!1;return!T&&z===void 0&&(E=!0,$(P),S(P)),z!==void 0&&P>z?T.next(P-z):(!E&&$(P),f)}}}const F3=e=>{const t=({timestamp:i})=>e(i);return{start:()=>G.update(t,!0),stop:()=>$t(t),now:()=>ze.isProcessing?ze.timestamp:performance.now()}},yp=2e4;function vp(e){let t=0;const i=50;let n=e.next(t);for(;!n.done&&t<yp;)t+=i,n=e.next(t);return t>=yp?1/0:t}const W3={decay:wp,inertia:wp,tween:Ss,keyframes:Ss,spring:t5};function Cs({autoplay:e=!0,delay:t=0,driver:i=F3,keyframes:n,type:a="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:c="loop",onPlay:m,onStop:h,onComplete:u,onUpdate:p,...f}){let g=1,v=!1,b,C;const y=()=>{C=new Promise(B=>{b=B})};y();let x;const w=W3[a]||Ss;let $;w!==Ss&&typeof n[0]!="number"&&($=ll([0,100],n,{clamp:!1}),n=[0,100]);const z=w({...f,keyframes:n});let T;c==="mirror"&&(T=w({...f,keyframes:[...n].reverse(),velocity:-(f.velocity||0)}));let S="idle",P=null,E=null,A=null;z.calculatedDuration===null&&o&&(z.calculatedDuration=vp(z));const{calculatedDuration:_}=z;let Y=1/0,ne=1/0;_!==null&&(Y=_+s,ne=Y*(o+1)-s);let X=0;const ue=B=>{if(E===null)return;g>0&&(E=Math.min(E,B)),g<0&&(E=Math.min(B-ne/g,E)),P!==null?X=P:X=Math.round(B-E)*g;const H=X-t*(g>=0?1:-1),St=g>=0?H<0:H>ne;X=Math.max(H,0),S==="finished"&&P===null&&(X=ne);let De=X,Ft=z;if(o){const zt=Math.min(X,ne)/Y;let Wt=Math.floor(zt),Qe=zt%1;!Qe&&zt>=1&&(Qe=1),Qe===1&&Wt--,Wt=Math.min(Wt,o+1),!!(Wt%2)&&(c==="reverse"?(Qe=1-Qe,s&&(Qe-=s/Y)):c==="mirror"&&(Ft=T)),De=Li(0,1,Qe)*Y}const Se=St?{done:!1,value:n[0]}:Ft.next(De);$&&(Se.value=$(Se.value));let{done:Ct}=Se;!St&&_!==null&&(Ct=g>=0?X>=ne:X<=0);const xn=P===null&&(S==="finished"||S==="running"&&Ct);return p&&p(Se.value),xn&&L(),Se},q=()=>{x&&x.stop(),x=void 0},re=()=>{S="idle",q(),b(),y(),E=A=null},L=()=>{S="finished",u&&u(),q(),b()},R=()=>{if(v)return;x||(x=i(ue));const B=x.now();m&&m(),P!==null?E=B-P:(!E||S==="finished")&&(E=B),S==="finished"&&y(),A=E,P=null,S="running",x.start()};e&&R();const F={then(B,H){return C.then(B,H)},get time(){return Qt(X)},set time(B){B=nn(B),X=B,P!==null||!x||g===0?P=B:E=x.now()-B/g},get duration(){const B=z.calculatedDuration===null?vp(z):z.calculatedDuration;return Qt(B)},get speed(){return g},set speed(B){B===g||!x||(g=B,F.time=Qt(X))},get state(){return S},play:R,pause:()=>{S="paused",P=X},stop:()=>{v=!0,S!=="idle"&&(S="idle",h&&h(),re())},cancel:()=>{A!==null&&ue(A),re()},complete:()=>{S="finished"},sample:B=>(E=0,ue(B))};return F}function D3(e){let t;return()=>(t===void 0&&(t=e()),t)}const V3=D3(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),N3=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),lo=10,O3=2e4,_3=(e,t)=>t.type==="spring"||e==="backgroundColor"||!E1(t.ease);function H3(e,t,{onUpdate:i,onComplete:n,...a}){if(!(V3()&&N3.has(t)&&!a.repeatDelay&&a.repeatType!=="mirror"&&a.damping!==0&&a.type!=="inertia"))return!1;let s=!1,c,m,h=!1;const u=()=>{m=new Promise(w=>{c=w})};u();let{keyframes:p,duration:f=300,ease:g,times:v}=a;if(_3(t,a)){const w=Cs({...a,repeat:0,delay:0});let $={done:!1,value:p[0]};const z=[];let T=0;for(;!$.done&&T<O3;)$=w.sample(T),z.push($.value),T+=lo;v=void 0,p=z,f=T-lo,g="linear"}const b=e3(e.owner.current,t,p,{...a,duration:f,ease:g,times:v}),C=()=>{h=!1,b.cancel()},y=()=>{h=!0,G.update(C),c(),u()};return b.onfinish=()=>{h||(e.set(t3(p,a)),n&&n(),y())},{then(w,$){return m.then(w,$)},attachTimeline(w){return b.timeline=w,b.onfinish=null,pe},get time(){return Qt(b.currentTime||0)},set time(w){b.currentTime=nn(w)},get speed(){return b.playbackRate},set speed(w){b.playbackRate=w},get duration(){return Qt(f)},play:()=>{s||(b.play(),$t(C))},pause:()=>b.pause(),stop:()=>{if(s=!0,b.playState==="idle")return;const{currentTime:w}=b;if(w){const $=Cs({...a,autoplay:!1});e.setWithVelocity($.sample(w-lo).value,$.sample(w).value,lo)}y()},complete:()=>{h||b.finish()},cancel:y}}function Z3({keyframes:e,delay:t,onUpdate:i,onComplete:n}){const a=()=>(i&&i(e[e.length-1]),n&&n(),{time:0,speed:1,duration:0,play:pe,pause:pe,stop:pe,then:o=>(o(),Promise.resolve()),cancel:pe,complete:pe});return t?Cs({keyframes:[0,1],duration:0,delay:t,onComplete:a}):a()}const U3={type:"spring",stiffness:500,damping:25,restSpeed:10},Y3=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Q3={type:"keyframes",duration:.8},G3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},K3=(e,{keyframes:t})=>t.length>2?Q3:fn.has(e)?e.startsWith("scale")?Y3(t[1]):U3:G3,_c=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ei.test(t)||t==="0")&&!t.startsWith("url(")),q3=new Set(["brightness","contrast","saturate","opacity"]);function X3(e){const[t,i]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[n]=i.match(al)||[];if(!n)return e;const a=i.replace(n,"");let o=q3.has(t)?1:0;return n!==i&&(o*=100),t+"("+o+a+")"}const J3=/([a-z-]*)\(.*?\)/g,Hc={...Ei,getAnimatableNone:e=>{const t=e.match(J3);return t?t.map(X3).join(" "):e}},ek={...x1,color:Ie,backgroundColor:Ie,outlineColor:Ie,fill:Ie,stroke:Ie,borderColor:Ie,borderTopColor:Ie,borderRightColor:Ie,borderBottomColor:Ie,borderLeftColor:Ie,filter:Hc,WebkitFilter:Hc},b0=e=>ek[e];function i5(e,t){let i=b0(e);return i!==Hc&&(i=Ei),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const n5=e=>/^0[^.\s]+$/.test(e);function tk(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||n5(e)}function ik(e,t,i,n){const a=_c(t,i);let o;Array.isArray(i)?o=[...i]:o=[null,i];const s=n.from!==void 0?n.from:e.get();let c;const m=[];for(let h=0;h<o.length;h++)o[h]===null&&(o[h]=h===0?s:o[h-1]),tk(o[h])&&m.push(h),typeof o[h]=="string"&&o[h]!=="none"&&o[h]!=="0"&&(c=o[h]);if(a&&m.length&&c)for(let h=0;h<m.length;h++){const u=m[h];o[u]=i5(t,c)}return o}function nk({when:e,delay:t,delayChildren:i,staggerChildren:n,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:c,from:m,elapsed:h,...u}){return!!Object.keys(u).length}function k0(e,t){return e[t]||e.default||e}const rk={skipAnimations:!1},j0=(e,t,i,n={})=>a=>{const o=k0(n,e)||{},s=o.delay||n.delay||0;let{elapsed:c=0}=n;c=c-nn(s);const m=ik(t,e,i,o),h=m[0],u=m[m.length-1],p=_c(e,h),f=_c(e,u);let g={keyframes:m,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-c,onUpdate:v=>{t.set(v),o.onUpdate&&o.onUpdate(v)},onComplete:()=>{a(),o.onComplete&&o.onComplete()}};if(nk(o)||(g={...g,...K3(e,g)}),g.duration&&(g.duration=nn(g.duration)),g.repeatDelay&&(g.repeatDelay=nn(g.repeatDelay)),!p||!f||Jb.current||o.type===!1||rk.skipAnimations)return Z3(g);if(!n.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=H3(t,e,g);if(v)return v}return Cs(g)};function zs(e){return!!(Ye(e)&&e.add)}const r5=e=>/^\-?\d*\.?\d+$/.test(e);function $0(e,t){e.indexOf(t)===-1&&e.push(t)}function S0(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}class C0{constructor(){this.subscriptions=[]}add(t){return $0(this.subscriptions,t),()=>S0(this.subscriptions,t)}notify(t,i,n){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](t,i,n);else for(let o=0;o<a;o++){const s=this.subscriptions[o];s&&s(t,i,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ak=e=>!isNaN(parseFloat(e)),Gr={current:void 0};class ok{constructor(t,i={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(n,a=!0)=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:s}=ze;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,G.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),a&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>G.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=ak(this.current),this.owner=i.owner}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new C0);const n=this.events[t].add(i);return t==="change"?()=>{n(),G.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t,i=!0){!i||!this.passiveEffect?this.updateAndNotify(t,i):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,i,n){this.set(i),this.prev=t,this.timeDelta=n}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Gr.current&&Gr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?v0(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yt(e,t){return new ok(e,t)}const a5=e=>t=>t.test(e),sk={test:e=>e==="auto",parse:e=>e},o5=[gn,W,Rt,oi,ub,pb,sk],$r=e=>o5.find(a5(e)),lk=[...o5,Ie,Ei],dk=e=>lk.find(a5(e));function ck(e,t,i){e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,yt(i))}function mk(e,t){const i=sl(e,t);let{transitionEnd:n={},transition:a={},...o}=i?e.makeTargetAnimatable(i,!1):{};o={...o,...n};for(const s in o){const c=Tb(o[s]);ck(e,s,c)}}function hk(e,t,i){var n,a;const o=Object.keys(t).filter(c=>!e.hasValue(c)),s=o.length;if(s)for(let c=0;c<s;c++){const m=o[c],h=t[m];let u=null;Array.isArray(h)&&(u=h[0]),u===null&&(u=(a=(n=i[m])!==null&&n!==void 0?n:e.readValue(m))!==null&&a!==void 0?a:t[m]),u!=null&&(typeof u=="string"&&(r5(u)||n5(u))?u=parseFloat(u):!dk(u)&&Ei.test(h)&&(u=i5(m,h)),e.addValue(m,yt(u,{owner:e})),i[m]===void 0&&(i[m]=u),u!==null&&e.setBaseTarget(m,u))}}function pk(e,t){return t?(t[e]||t.default||t).from:void 0}function uk(e,t,i){const n={};for(const a in e){const o=pk(a,t);if(o!==void 0)n[a]=o;else{const s=i.getValue(a);s&&(n[a]=s.get())}}return n}function fk({protectedKeys:e,needsAnimating:t},i){const n=e.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,n}function gk(e,t){const i=e.get();if(Array.isArray(t)){for(let n=0;n<t.length;n++)if(t[n]!==i)return!0}else return i!==t}function s5(e,t,{delay:i=0,transitionOverride:n,type:a}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...c}=e.makeTargetAnimatable(t);const m=e.getValue("willChange");n&&(o=n);const h=[],u=a&&e.animationState&&e.animationState.getState()[a];for(const p in c){const f=e.getValue(p),g=c[p];if(!f||g===void 0||u&&fk(u,p))continue;const v={delay:i,elapsed:0,...k0(o||{},p)};if(window.HandoffAppearAnimations){const y=e.getProps()[c1];if(y){const x=window.HandoffAppearAnimations(y,p,f,G);x!==null&&(v.elapsed=x,v.isHandoff=!0)}}let b=!v.isHandoff&&!gk(f,g);if(v.type==="spring"&&(f.getVelocity()||v.velocity)&&(b=!1),f.animation&&(b=!1),b)continue;f.start(j0(p,f,g,e.shouldReduceMotion&&fn.has(p)?{type:!1}:v));const C=f.animation;zs(m)&&(m.add(p),C.then(()=>m.remove(p))),h.push(C)}return s&&Promise.all(h).then(()=>{s&&mk(e,s)}),h}function Zc(e,t,i={}){const n=sl(e,t,i.custom);let{transition:a=e.getDefaultTransition()||{}}=n||{};i.transitionOverride&&(a=i.transitionOverride);const o=n?()=>Promise.all(s5(e,n,i)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:h=0,staggerChildren:u,staggerDirection:p}=a;return xk(e,t,h+m,u,p,i)}:()=>Promise.resolve(),{when:c}=a;if(c){const[m,h]=c==="beforeChildren"?[o,s]:[s,o];return m().then(()=>h())}else return Promise.all([o(),s(i.delay)])}function xk(e,t,i=0,n=0,a=1,o){const s=[],c=(e.variantChildren.size-1)*n,m=a===1?(h=0)=>h*n:(h=0)=>c-h*n;return Array.from(e.variantChildren).sort(wk).forEach((h,u)=>{h.notify("AnimationStart",t),s.push(Zc(h,t,{...o,delay:i+m(u)}).then(()=>h.notify("AnimationComplete",t)))}),Promise.all(s)}function wk(e,t){return e.sortNodePosition(t)}function yk(e,t,i={}){e.notify("AnimationStart",t);let n;if(Array.isArray(t)){const a=t.map(o=>Zc(e,o,i));n=Promise.all(a)}else if(typeof t=="string")n=Zc(e,t,i);else{const a=typeof t=="function"?sl(e,t,i.custom):t;n=Promise.all(s5(e,a,i))}return n.then(()=>e.notify("AnimationComplete",t))}const vk=[...o0].reverse(),bk=o0.length;function kk(e){return t=>Promise.all(t.map(({animation:i,options:n})=>yk(e,i,n)))}function jk(e){let t=kk(e);const i=Sk();let n=!0;const a=(m,h)=>{const u=sl(e,h);if(u){const{transition:p,transitionEnd:f,...g}=u;m={...m,...g,...f}}return m};function o(m){t=m(e)}function s(m,h){const u=e.getProps(),p=e.getVariantContext(!0)||{},f=[],g=new Set;let v={},b=1/0;for(let y=0;y<bk;y++){const x=vk[y],w=i[x],$=u[x]!==void 0?u[x]:p[x],z=ya($),T=x===h?w.isActive:null;T===!1&&(b=y);let S=$===p[x]&&$!==u[x]&&z;if(S&&n&&e.manuallyAnimateOnMount&&(S=!1),w.protectedKeys={...v},!w.isActive&&T===null||!$&&!w.prevProp||nl($)||typeof $=="boolean")continue;let E=$k(w.prevProp,$)||x===h&&w.isActive&&!S&&z||y>b&&z,A=!1;const _=Array.isArray($)?$:[$];let Y=_.reduce(a,{});T===!1&&(Y={});const{prevResolvedValues:ne={}}=w,X={...ne,...Y},ue=q=>{E=!0,g.has(q)&&(A=!0,g.delete(q)),w.needsAnimating[q]=!0};for(const q in X){const re=Y[q],L=ne[q];if(v.hasOwnProperty(q))continue;let R=!1;js(re)&&js(L)?R=!A1(re,L):R=re!==L,R?re!==void 0?ue(q):g.add(q):re!==void 0&&g.has(q)?ue(q):w.protectedKeys[q]=!0}w.prevProp=$,w.prevResolvedValues=Y,w.isActive&&(v={...v,...Y}),n&&e.blockInitialAnimation&&(E=!1),E&&(!S||A)&&f.push(..._.map(q=>({animation:q,options:{type:x,...m}})))}if(g.size){const y={};g.forEach(x=>{const w=e.getBaseTarget(x);w!==void 0&&(y[x]=w)}),f.push({animation:y})}let C=!!f.length;return n&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(C=!1),n=!1,C?t(f):Promise.resolve()}function c(m,h,u){var p;if(i[m].isActive===h)return Promise.resolve();(p=e.variantChildren)===null||p===void 0||p.forEach(g=>{var v;return(v=g.animationState)===null||v===void 0?void 0:v.setActive(m,h)}),i[m].isActive=h;const f=s(u,m);for(const g in i)i[g].protectedKeys={};return f}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>i}}function $k(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!A1(t,e):!1}function Wi(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Sk(){return{animate:Wi(!0),whileInView:Wi(),whileHover:Wi(),whileTap:Wi(),whileDrag:Wi(),whileFocus:Wi(),exit:Wi()}}class Ck extends Fi{constructor(t){super(t),t.animationState||(t.animationState=jk(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),nl(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){}}let zk=0;class Tk extends Fi{constructor(){super(...arguments),this.id=zk++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i,custom:n}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const o=this.node.animationState.setActive("exit",!t,{custom:n??this.node.getProps().custom});i&&!t&&o.then(()=>i(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Pk={animation:{Feature:Ck},exit:{Feature:Tk}},bp=(e,t)=>Math.abs(e-t);function Mk(e,t){const i=bp(e.x,t.x),n=bp(e.y,t.y);return Math.sqrt(i**2+n**2)}class l5{constructor(t,i,{transformPagePoint:n,contextWindow:a,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=td(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=Mk(p.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:v}=p,{timestamp:b}=ze;this.history.push({...v,timestamp:b});const{onStart:C,onMove:y}=this.handlers;f||(C&&C(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,p)},this.handlePointerMove=(p,f)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=ed(f,this.transformPagePoint),G.update(this.updatePoint,!0)},this.handlePointerUp=(p,f)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=td(p.type==="pointercancel"?this.lastMoveEventInfo:ed(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(p,C),v&&v(p,C)},!C1(t))return;this.dragSnapToOrigin=o,this.handlers=i,this.transformPagePoint=n,this.contextWindow=a||window;const s=ol(t),c=ed(s,this.transformPagePoint),{point:m}=c,{timestamp:h}=ze;this.history=[{...m,timestamp:h}];const{onSessionStart:u}=i;u&&u(t,td(c,this.history)),this.removeListeners=Ti(Yt(this.contextWindow,"pointermove",this.handlePointerMove),Yt(this.contextWindow,"pointerup",this.handlePointerUp),Yt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),$t(this.updatePoint)}}function ed(e,t){return t?{point:t(e.point)}:e}function kp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function td({point:e},t){return{point:e,delta:kp(e,d5(t)),offset:kp(e,Ak(t)),velocity:Lk(t,.1)}}function Ak(e){return e[0]}function d5(e){return e[e.length-1]}function Lk(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,n=null;const a=d5(e);for(;i>=0&&(n=e[i],!(a.timestamp-n.timestamp>nn(t)));)i--;if(!n)return{x:0,y:0};const o=Qt(a.timestamp-n.timestamp);if(o===0)return{x:0,y:0};const s={x:(a.x-n.x)/o,y:(a.y-n.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function et(e){return e.max-e.min}function Uc(e,t=0,i=.01){return Math.abs(e-t)<=i}function jp(e,t,i,n=.5){e.origin=n,e.originPoint=se(t.min,t.max,e.origin),e.scale=et(i)/et(t),(Uc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=se(i.min,i.max,e.origin)-e.originPoint,(Uc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Kr(e,t,i,n){jp(e.x,t.x,i.x,n?n.originX:void 0),jp(e.y,t.y,i.y,n?n.originY:void 0)}function $p(e,t,i){e.min=i.min+t.min,e.max=e.min+et(t)}function Ek(e,t,i){$p(e.x,t.x,i.x),$p(e.y,t.y,i.y)}function Sp(e,t,i){e.min=t.min-i.min,e.max=e.min+et(t)}function qr(e,t,i){Sp(e.x,t.x,i.x),Sp(e.y,t.y,i.y)}function Ik(e,{min:t,max:i},n){return t!==void 0&&e<t?e=n?se(t,e,n.min):Math.max(e,t):i!==void 0&&e>i&&(e=n?se(i,e,n.max):Math.min(e,i)),e}function Cp(e,t,i){return{min:t!==void 0?e.min+t:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function Rk(e,{top:t,left:i,bottom:n,right:a}){return{x:Cp(e.x,i,a),y:Cp(e.y,t,n)}}function zp(e,t){let i=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,n]=[n,i]),{min:i,max:n}}function Bk(e,t){return{x:zp(e.x,t.x),y:zp(e.y,t.y)}}function Fk(e,t){let i=.5;const n=et(e),a=et(t);return a>n?i=tr(t.min,t.max-n,e.min):n>a&&(i=tr(e.min,e.max-a,t.min)),Li(0,1,i)}function Wk(e,t){const i={};return t.min!==void 0&&(i.min=t.min-e.min),t.max!==void 0&&(i.max=t.max-e.min),i}const Yc=.35;function Dk(e=Yc){return e===!1?e=0:e===!0&&(e=Yc),{x:Tp(e,"left","right"),y:Tp(e,"top","bottom")}}function Tp(e,t,i){return{min:Pp(e,t),max:Pp(e,i)}}function Pp(e,t){return typeof e=="number"?e:e[t]||0}const Mp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Wn=()=>({x:Mp(),y:Mp()}),Ap=()=>({min:0,max:0}),ge=()=>({x:Ap(),y:Ap()});function rt(e){return[e("x"),e("y")]}function c5({top:e,left:t,right:i,bottom:n}){return{x:{min:t,max:i},y:{min:e,max:n}}}function Vk({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Nk(e,t){if(!t)return e;const i=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}function id(e){return e===void 0||e===1}function Qc({scale:e,scaleX:t,scaleY:i}){return!id(e)||!id(t)||!id(i)}function Hi(e){return Qc(e)||m5(e)||e.z||e.rotate||e.rotateX||e.rotateY}function m5(e){return Lp(e.x)||Lp(e.y)}function Lp(e){return e&&e!=="0%"}function Ts(e,t,i){const n=e-i,a=t*n;return i+a}function Ep(e,t,i,n,a){return a!==void 0&&(e=Ts(e,a,n)),Ts(e,i,n)+t}function Gc(e,t=0,i=1,n,a){e.min=Ep(e.min,t,i,n,a),e.max=Ep(e.max,t,i,n,a)}function h5(e,{x:t,y:i}){Gc(e.x,t.translate,t.scale,t.originPoint),Gc(e.y,i.translate,i.scale,i.originPoint)}function Ok(e,t,i,n=!1){const a=i.length;if(!a)return;t.x=t.y=1;let o,s;for(let c=0;c<a;c++){o=i[c],s=o.projectionDelta;const m=o.instance;m&&m.style&&m.style.display==="contents"||(n&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Dn(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,h5(e,s)),n&&Hi(o.latestValues)&&Dn(e,o.latestValues))}t.x=Ip(t.x),t.y=Ip(t.y)}function Ip(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function mi(e,t){e.min=e.min+t,e.max=e.max+t}function Rp(e,t,[i,n,a]){const o=t[a]!==void 0?t[a]:.5,s=se(e.min,e.max,o);Gc(e,t[i],t[n],s,t.scale)}const _k=["x","scaleX","originX"],Hk=["y","scaleY","originY"];function Dn(e,t){Rp(e.x,t,_k),Rp(e.y,t,Hk)}function p5(e,t){return c5(Nk(e.getBoundingClientRect(),t))}function Zk(e,t,i){const n=p5(e,i),{scroll:a}=t;return a&&(mi(n.x,a.offset.x),mi(n.y,a.offset.y)),n}const u5=({current:e})=>e?e.ownerDocument.defaultView:null,Uk=new WeakMap;class Yk{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ge(),this.visualElement=t}start(t,{snapToCursor:i=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const a=u=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(ol(u,"page").point)},o=(u,p)=>{const{drag:f,dragPropagation:g,onDragStart:v}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=T1(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),rt(C=>{let y=this.getAxisMotionValue(C).get()||0;if(Rt.test(y)){const{projection:x}=this.visualElement;if(x&&x.layout){const w=x.layout.layoutBox[C];w&&(y=et(w)*(parseFloat(y)/100))}}this.originPoint[C]=y}),v&&G.update(()=>v(u,p),!1,!0);const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},s=(u,p)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:v,onDrag:b}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:C}=p;if(g&&this.currentDirection===null){this.currentDirection=Qk(C),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",p.point,C),this.updateAxis("y",p.point,C),this.visualElement.render(),b&&b(u,p)},c=(u,p)=>this.stop(u,p),m=()=>rt(u=>{var p;return this.getAnimationState(u)==="paused"&&((p=this.getAxisMotionValue(u).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new l5(t,{onSessionStart:a,onStart:o,onMove:s,onSessionEnd:c,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:u5(this.visualElement)})}stop(t,i){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:a}=i;this.startAnimation(a);const{onDragEnd:o}=this.getProps();o&&G.update(()=>o(t,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,n){const{drag:a}=this.getProps();if(!n||!co(t,a,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(s=Ik(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:i,dragElastic:n}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;i&&Bn(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&a?this.constraints=Rk(a.layoutBox,i):this.constraints=!1,this.elastic=Dk(n),o!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&rt(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=Wk(a.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!Bn(t))return!1;const n=t.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;const o=Zk(n,a.root,this.visualElement.getTransformPagePoint());let s=Bk(a.layout.layoutBox,o);if(i){const c=i(Vk(s));this.hasMutatedConstraints=!!c,c&&(s=c5(c))}return s}startAnimation(t){const{drag:i,dragMomentum:n,dragElastic:a,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:c}=this.getProps(),m=this.constraints||{},h=rt(u=>{if(!co(u,i,this.currentDirection))return;let p=m&&m[u]||{};s&&(p={min:0,max:0});const f=a?200:1e6,g=a?40:1e7,v={type:"inertia",velocity:n?t[u]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...p};return this.startAxisValueAnimation(u,v)});return Promise.all(h).then(c)}startAxisValueAnimation(t,i){const n=this.getAxisMotionValue(t);return n.start(j0(t,n,0,i))}stopAnimation(){rt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){rt(t=>{var i;return(i=this.getAxisMotionValue(t).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(t){var i;return(i=this.getAxisMotionValue(t).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(t){const i="_drag"+t.toUpperCase(),n=this.visualElement.getProps(),a=n[i];return a||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){rt(i=>{const{drag:n}=this.getProps();if(!co(i,n,this.currentDirection))return;const{projection:a}=this.visualElement,o=this.getAxisMotionValue(i);if(a&&a.layout){const{min:s,max:c}=a.layout.layoutBox[i];o.set(t[i]-se(s,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!Bn(i)||!n||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};rt(s=>{const c=this.getAxisMotionValue(s);if(c){const m=c.get();a[s]=Fk({min:m,max:m},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),rt(s=>{if(!co(s,t,null))return;const c=this.getAxisMotionValue(s),{min:m,max:h}=this.constraints[s];c.set(se(m,h,a[s]))})}addListeners(){if(!this.visualElement.current)return;Uk.set(this.visualElement,this);const t=this.visualElement.current,i=Yt(t,"pointerdown",m=>{const{drag:h,dragListener:u=!0}=this.getProps();h&&u&&this.start(m)}),n=()=>{const{dragConstraints:m}=this.getProps();Bn(m)&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,o=a.addEventListener("measure",n);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),n();const s=Zt(window,"resize",()=>this.scalePositionWithinConstraints()),c=a.addEventListener("didUpdate",({delta:m,hasLayoutChanged:h})=>{this.isDragging&&h&&(rt(u=>{const p=this.getAxisMotionValue(u);p&&(this.originPoint[u]+=m[u].translate,p.set(p.get()+m[u].translate))}),this.visualElement.render())});return()=>{s(),i(),o(),c&&c()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:a=!1,dragConstraints:o=!1,dragElastic:s=Yc,dragMomentum:c=!0}=t;return{...t,drag:i,dragDirectionLock:n,dragPropagation:a,dragConstraints:o,dragElastic:s,dragMomentum:c}}}function co(e,t,i){return(t===!0||t===e)&&(i===null||i===e)}function Qk(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}class Gk extends Fi{constructor(t){super(t),this.removeGroupControls=pe,this.removeListeners=pe,this.controls=new Yk(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||pe}unmount(){this.removeGroupControls(),this.removeListeners()}}const Bp=e=>(t,i)=>{e&&G.update(()=>e(t,i))};class Kk extends Fi{constructor(){super(...arguments),this.removePointerDownListener=pe}onPointerDown(t){this.session=new l5(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:u5(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:n,onPanEnd:a}=this.node.getProps();return{onSessionStart:Bp(t),onStart:Bp(i),onMove:n,onEnd:(o,s)=>{delete this.session,a&&G.update(()=>a(o,s))}}}mount(){this.removePointerDownListener=Yt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function qk(){const e=j.useContext(tl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:n}=e,a=j.useId();return j.useEffect(()=>n(a),[]),!t&&i?[!1,()=>i&&i(a)]:[!0]}const No={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Fp(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Sr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const i=Fp(e,t.target.x),n=Fp(e,t.target.y);return`${i}% ${n}%`}},Xk={correct:(e,{treeScale:t,projectionDelta:i})=>{const n=e,a=Ei.parse(e);if(a.length>5)return n;const o=Ei.createTransformer(e),s=typeof a[0]!="number"?1:0,c=i.x.scale*t.x,m=i.y.scale*t.y;a[0+s]/=c,a[1+s]/=m;const h=se(c,m,.5);return typeof a[2+s]=="number"&&(a[2+s]/=h),typeof a[3+s]=="number"&&(a[3+s]/=h),o(a)}};class Jk extends he.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:n,layoutId:a}=this.props,{projection:o}=t;ob(e4),o&&(i.group&&i.group.add(o),n&&n.register&&a&&n.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),No.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:n,drag:a,isPresent:o}=this.props,s=n.projection;return s&&(s.isPresent=o,a||t.layoutDependency!==i||i===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||G.postRender(()=>{const c=s.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:a}=t;a&&(a.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(a),n&&n.deregister&&n.deregister(a))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function f5(e){const[t,i]=qk(),n=j.useContext(l0);return he.createElement(Jk,{...e,layoutGroup:n,switchLayoutGroup:j.useContext(h1),isPresent:t,safeToRemove:i})}const e4={borderRadius:{...Sr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Sr,borderTopRightRadius:Sr,borderBottomLeftRadius:Sr,borderBottomRightRadius:Sr,boxShadow:Xk},g5=["TopLeft","TopRight","BottomLeft","BottomRight"],t4=g5.length,Wp=e=>typeof e=="string"?parseFloat(e):e,Dp=e=>typeof e=="number"||W.test(e);function i4(e,t,i,n,a,o){a?(e.opacity=se(0,i.opacity!==void 0?i.opacity:1,n4(n)),e.opacityExit=se(t.opacity!==void 0?t.opacity:1,0,r4(n))):o&&(e.opacity=se(t.opacity!==void 0?t.opacity:1,i.opacity!==void 0?i.opacity:1,n));for(let s=0;s<t4;s++){const c=`border${g5[s]}Radius`;let m=Vp(t,c),h=Vp(i,c);if(m===void 0&&h===void 0)continue;m||(m=0),h||(h=0),m===0||h===0||Dp(m)===Dp(h)?(e[c]=Math.max(se(Wp(m),Wp(h),n),0),(Rt.test(h)||Rt.test(m))&&(e[c]+="%")):e[c]=h}(t.rotate||i.rotate)&&(e.rotate=se(t.rotate||0,i.rotate||0,n))}function Vp(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const n4=x5(0,.5,V1),r4=x5(.5,.95,pe);function x5(e,t,i){return n=>n<e?0:n>t?1:i(tr(e,t,n))}function Np(e,t){e.min=t.min,e.max=t.max}function nt(e,t){Np(e.x,t.x),Np(e.y,t.y)}function Op(e,t,i,n,a){return e-=t,e=Ts(e,1/i,n),a!==void 0&&(e=Ts(e,1/a,n)),e}function a4(e,t=0,i=1,n=.5,a,o=e,s=e){if(Rt.test(t)&&(t=parseFloat(t),t=se(s.min,s.max,t/100)-s.min),typeof t!="number")return;let c=se(o.min,o.max,n);e===o&&(c-=t),e.min=Op(e.min,t,i,c,a),e.max=Op(e.max,t,i,c,a)}function _p(e,t,[i,n,a],o,s){a4(e,t[i],t[n],t[a],t.scale,o,s)}const o4=["x","scaleX","originX"],s4=["y","scaleY","originY"];function Hp(e,t,i,n){_p(e.x,t,o4,i?i.x:void 0,n?n.x:void 0),_p(e.y,t,s4,i?i.y:void 0,n?n.y:void 0)}function Zp(e){return e.translate===0&&e.scale===1}function w5(e){return Zp(e.x)&&Zp(e.y)}function l4(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function y5(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Up(e){return et(e.x)/et(e.y)}class d4{constructor(){this.members=[]}add(t){$0(this.members,t),t.scheduleRender()}remove(t){if(S0(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(a=>t===a);if(i===0)return!1;let n;for(let a=i;a>=0;a--){const o=this.members[a];if(o.isPresent!==!1){n=o;break}}return n?(this.promote(n),!0):!1}promote(t,i){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,i&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:a}=t.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:n}=t;i.onExitComplete&&i.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Yp(e,t,i){let n="";const a=e.x.translate/t.x,o=e.y.translate/t.y;if((a||o)&&(n=`translate3d(${a}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),i){const{rotate:m,rotateX:h,rotateY:u}=i;m&&(n+=`rotate(${m}deg) `),h&&(n+=`rotateX(${h}deg) `),u&&(n+=`rotateY(${u}deg) `)}const s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(n+=`scale(${s}, ${c})`),n||"none"}const c4=(e,t)=>e.depth-t.depth;class m4{constructor(){this.children=[],this.isDirty=!1}add(t){$0(this.children,t),this.isDirty=!0}remove(t){S0(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(c4),this.isDirty=!1,this.children.forEach(t)}}function h4(e,t){const i=performance.now(),n=({timestamp:a})=>{const o=a-i;o>=t&&($t(n),e(o-t))};return G.read(n,!0),()=>$t(n)}function p4(e){window.MotionDebug&&window.MotionDebug.record(e)}function u4(e){return e instanceof SVGElement&&e.tagName!=="svg"}function f4(e,t,i){const n=Ye(e)?e:yt(e);return n.start(j0("",n,t,i)),n.animation}const Qp=["","X","Y","Z"],g4={visibility:"hidden"},Gp=1e3;let x4=0;const Zi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function v5({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:n,resetTransform:a}){return class{constructor(s={},c=t==null?void 0:t()){this.id=x4++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Zi.totalNodes=Zi.resolvedTargetDeltas=Zi.recalculatedProjection=0,this.nodes.forEach(v4),this.nodes.forEach(S4),this.nodes.forEach(C4),this.nodes.forEach(b4),p4(Zi)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new m4)}addEventListener(s,c){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new C0),this.eventHandlers.get(s).add(c)}notifyListeners(s,...c){const m=this.eventHandlers.get(s);m&&m.notify(...c)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=u4(s),this.instance=s;const{layoutId:m,layout:h,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||m)&&(this.isLayoutDirty=!0),e){let p;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=h4(f,250),No.hasAnimatedSinceResize&&(No.hasAnimatedSinceResize=!1,this.nodes.forEach(qp))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&u&&(m||h)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||u.getDefaultTransition()||A4,{onLayoutAnimationStart:C,onLayoutAnimationComplete:y}=u.getProps(),x=!this.targetLayout||!y5(this.targetLayout,v)||g,w=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||w||f&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,w);const $={...k0(b,"layout"),onPlay:C,onComplete:y};(u.shouldReduceMotion||this.options.layoutRoot)&&($.delay=0,$.type=!1),this.startAnimation($)}else f||qp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,$t(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(z4),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const p=this.path[u];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:c,layout:m}=this.options;if(c===void 0&&!m)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Kp);return}this.isUpdating||this.nodes.forEach(j4),this.isUpdating=!1,this.nodes.forEach($4),this.nodes.forEach(w4),this.nodes.forEach(y4),this.clearAllSnapshots();const c=performance.now();ze.delta=Li(0,1e3/60,c-ze.timestamp),ze.timestamp=c,ze.isProcessing=!0,Ul.update.process(ze),Ul.preRender.process(ze),Ul.render.process(ze),ze.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(k4),this.sharedNodes.forEach(T4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,G.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){G.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ge(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let c=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(c=!1),c&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:n(this.instance),offset:i(this.instance)})}resetTransform(){if(!a)return;const s=this.isLayoutDirty||this.shouldResetTransform,c=this.projectionDelta&&!w5(this.projectionDelta),m=this.getTransformTemplate(),h=m?m(this.latestValues,""):void 0,u=h!==this.prevTransformTemplateValue;s&&(c||Hi(this.latestValues)||u)&&(a(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const c=this.measurePageBox();let m=this.removeElementScroll(c);return s&&(m=this.removeTransform(m)),L4(m),{animationId:this.root.animationId,measuredBox:c,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return ge();const c=s.measureViewportBox(),{scroll:m}=this.root;return m&&(mi(c.x,m.offset.x),mi(c.y,m.offset.y)),c}removeElementScroll(s){const c=ge();nt(c,s);for(let m=0;m<this.path.length;m++){const h=this.path[m],{scroll:u,options:p}=h;if(h!==this.root&&u&&p.layoutScroll){if(u.isRoot){nt(c,s);const{scroll:f}=this.root;f&&(mi(c.x,-f.offset.x),mi(c.y,-f.offset.y))}mi(c.x,u.offset.x),mi(c.y,u.offset.y)}}return c}applyTransform(s,c=!1){const m=ge();nt(m,s);for(let h=0;h<this.path.length;h++){const u=this.path[h];!c&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Dn(m,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Hi(u.latestValues)&&Dn(m,u.latestValues)}return Hi(this.latestValues)&&Dn(m,this.latestValues),m}removeTransform(s){const c=ge();nt(c,s);for(let m=0;m<this.path.length;m++){const h=this.path[m];if(!h.instance||!Hi(h.latestValues))continue;Qc(h.latestValues)&&h.updateSnapshot();const u=ge(),p=h.measurePageBox();nt(u,p),Hp(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,u)}return Hi(this.latestValues)&&Hp(c,this.latestValues),c}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ze.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var c;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==m;if(!(s||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:p,layoutId:f}=this.options;if(!(!this.layout||!(p||f))){if(this.resolvedRelativeTargetAt=ze.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ge(),this.relativeTargetOrigin=ge(),qr(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ge(),this.targetWithTransforms=ge()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ek(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):nt(this.target,this.layout.layoutBox),h5(this.target,this.targetDelta)):nt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ge(),this.relativeTargetOrigin=ge(),qr(this.relativeTargetOrigin,this.target,g.target),nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Zi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Qc(this.parent.latestValues)||m5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const c=this.getLead(),m=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(h=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===ze.timestamp&&(h=!1),h)return;const{layout:u,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||p))return;nt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;Ok(this.layoutCorrected,this.treeScale,this.path,m),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox);const{target:v}=c;if(!v){this.projectionTransform&&(this.projectionDelta=Wn(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Wn(),this.projectionDeltaWithTransform=Wn());const b=this.projectionTransform;Kr(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=Yp(this.projectionDelta,this.treeScale),(this.projectionTransform!==b||this.treeScale.x!==f||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Zi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,c=!1){const m=this.snapshot,h=m?m.latestValues:{},u={...this.latestValues},p=Wn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const f=ge(),g=m?m.source:void 0,v=this.layout?this.layout.source:void 0,b=g!==v,C=this.getStack(),y=!C||C.members.length<=1,x=!!(b&&!y&&this.options.crossfade===!0&&!this.path.some(M4));this.animationProgress=0;let w;this.mixTargetDelta=$=>{const z=$/1e3;Xp(p.x,s.x,z),Xp(p.y,s.y,z),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(qr(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),P4(this.relativeTarget,this.relativeTargetOrigin,f,z),w&&l4(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=ge()),nt(w,this.relativeTarget)),b&&(this.animationValues=u,i4(u,h,this.latestValues,z,x,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&($t(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=G.update(()=>{No.hasAnimatedSinceResize=!0,this.currentAnimation=f4(0,Gp,{...s,onUpdate:c=>{this.mixTargetDelta(c),s.onUpdate&&s.onUpdate(c)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Gp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:c,target:m,layout:h,latestValues:u}=s;if(!(!c||!m||!h)){if(this!==s&&this.layout&&h&&b5(this.options.animationType,this.layout.layoutBox,h.layoutBox)){m=this.target||ge();const p=et(this.layout.layoutBox.x);m.x.min=s.target.x.min,m.x.max=m.x.min+p;const f=et(this.layout.layoutBox.y);m.y.min=s.target.y.min,m.y.max=m.y.min+f}nt(c,m),Dn(c,u),Kr(this.projectionDeltaWithTransform,this.layoutCorrected,c,u)}}registerSharedNode(s,c){this.sharedNodes.has(s)||this.sharedNodes.set(s,new d4),this.sharedNodes.get(s).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:c}=this.options;return c?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:c}=this.options;return c?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:c,preserveFollowOpacity:m}={}){const h=this.getStack();h&&h.promote(this,m),s&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let c=!1;const{latestValues:m}=s;if((m.rotate||m.rotateX||m.rotateY||m.rotateZ)&&(c=!0),!c)return;const h={};for(let u=0;u<Qp.length;u++){const p="rotate"+Qp[u];m[p]&&(h[p]=m[p],s.setStaticValue(p,0))}s.render();for(const u in h)s.setStaticValue(u,h[u]);s.scheduleRender()}getProjectionStyles(s){var c,m;if(!this.instance||this.isSVG)return;if(!this.isVisible)return g4;const h={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Vo(s==null?void 0:s.pointerEvents)||"",h.transform=u?u(this.latestValues,""):"none",h;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=Vo(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Hi(this.latestValues)&&(b.transform=u?u({},""):"none",this.hasProjected=!1),b}const f=p.animationValues||p.latestValues;this.applyTransformsToTarget(),h.transform=Yp(this.projectionDeltaWithTransform,this.treeScale,f),u&&(h.transform=u(f,h.transform));const{x:g,y:v}=this.projectionDelta;h.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,p.animationValues?h.opacity=p===this?(m=(c=f.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&m!==void 0?m:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:h.opacity=p===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const b in bs){if(f[b]===void 0)continue;const{correct:C,applyTo:y}=bs[b],x=h.transform==="none"?f[b]:C(f[b],p);if(y){const w=y.length;for(let $=0;$<w;$++)h[y[$]]=x}else h[b]=x}return this.options.layoutId&&(h.pointerEvents=p===this?Vo(s==null?void 0:s.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var c;return(c=s.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(Kp),this.root.sharedNodes.clear()}}}function w4(e){e.updateLayout()}function y4(e){var t;const i=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:a}=e.layout,{animationType:o}=e.options,s=i.source!==e.layout.source;o==="size"?rt(p=>{const f=s?i.measuredBox[p]:i.layoutBox[p],g=et(f);f.min=n[p].min,f.max=f.min+g}):b5(o,i.layoutBox,n)&&rt(p=>{const f=s?i.measuredBox[p]:i.layoutBox[p],g=et(n[p]);f.max=f.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+g)});const c=Wn();Kr(c,n,i.layoutBox);const m=Wn();s?Kr(m,e.applyTransform(a,!0),i.measuredBox):Kr(m,n,i.layoutBox);const h=!w5(c);let u=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:g}=p;if(f&&g){const v=ge();qr(v,i.layoutBox,f.layoutBox);const b=ge();qr(b,n,g.layoutBox),y5(v,b)||(u=!0),p.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=v,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:i,delta:m,layoutDelta:c,hasLayoutChanged:h,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:n}=e.options;n&&n()}e.options.transition=void 0}function v4(e){Zi.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function b4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function k4(e){e.clearSnapshot()}function Kp(e){e.clearMeasurements()}function j4(e){e.isLayoutDirty=!1}function $4(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function qp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function S4(e){e.resolveTargetDelta()}function C4(e){e.calcProjection()}function z4(e){e.resetRotation()}function T4(e){e.removeLeadSnapshot()}function Xp(e,t,i){e.translate=se(t.translate,0,i),e.scale=se(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function Jp(e,t,i,n){e.min=se(t.min,i.min,n),e.max=se(t.max,i.max,n)}function P4(e,t,i,n){Jp(e.x,t.x,i.x,n),Jp(e.y,t.y,i.y,n)}function M4(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const A4={duration:.45,ease:[.4,0,.1,1]},eu=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),tu=eu("applewebkit/")&&!eu("chrome/")?Math.round:pe;function iu(e){e.min=tu(e.min),e.max=tu(e.max)}function L4(e){iu(e.x),iu(e.y)}function b5(e,t,i){return e==="position"||e==="preserve-aspect"&&!Uc(Up(t),Up(i),.2)}const E4=v5({attachResizeListener:(e,t)=>Zt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),nd={current:void 0},k5=v5({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!nd.current){const e=new E4({});e.mount(window),e.setOptions({layoutScroll:!0}),nd.current=e}return nd.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),I4={pan:{Feature:Kk},drag:{Feature:Gk,ProjectionNode:k5,MeasureLayout:f5}},R4=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function B4(e){const t=R4.exec(e);if(!t)return[,];const[,i,n]=t;return[i,n]}function Kc(e,t,i=1){const[n,a]=B4(e);if(!n)return;const o=window.getComputedStyle(t).getPropertyValue(n);if(o){const s=o.trim();return r5(s)?parseFloat(s):s}else return Dc(a)?Kc(a,t,i+1):a}function F4(e,{...t},i){const n=e.current;if(!(n instanceof Element))return{target:t,transitionEnd:i};i&&(i={...i}),e.values.forEach(a=>{const o=a.get();if(!Dc(o))return;const s=Kc(o,n);s&&a.set(s)});for(const a in t){const o=t[a];if(!Dc(o))continue;const s=Kc(o,n);s&&(t[a]=s,i||(i={}),i[a]===void 0&&(i[a]=o))}return{target:t,transitionEnd:i}}const W4=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),j5=e=>W4.has(e),D4=e=>Object.keys(e).some(j5),nu=e=>e===gn||e===W,ru=(e,t)=>parseFloat(e.split(", ")[t]),au=(e,t)=>(i,{transform:n})=>{if(n==="none"||!n)return 0;const a=n.match(/^matrix3d\((.+)\)$/);if(a)return ru(a[1],t);{const o=n.match(/^matrix\((.+)\)$/);return o?ru(o[1],e):0}},V4=new Set(["x","y","z"]),N4=Ea.filter(e=>!V4.has(e));function O4(e){const t=[];return N4.forEach(i=>{const n=e.getValue(i);n!==void 0&&(t.push([i,n.get()]),n.set(i.startsWith("scale")?1:0))}),t.length&&e.render(),t}const ir={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:au(4,13),y:au(5,14)};ir.translateX=ir.x;ir.translateY=ir.y;const _4=(e,t,i)=>{const n=t.measureViewportBox(),a=t.current,o=getComputedStyle(a),{display:s}=o,c={};s==="none"&&t.setStaticValue("display",e.display||"block"),i.forEach(h=>{c[h]=ir[h](n,o)}),t.render();const m=t.measureViewportBox();return i.forEach(h=>{const u=t.getValue(h);u&&u.jump(c[h]),e[h]=ir[h](m,o)}),e},H4=(e,t,i={},n={})=>{t={...t},n={...n};const a=Object.keys(t).filter(j5);let o=[],s=!1;const c=[];if(a.forEach(m=>{const h=e.getValue(m);if(!e.hasValue(m))return;let u=i[m],p=$r(u);const f=t[m];let g;if(js(f)){const v=f.length,b=f[0]===null?1:0;u=f[b],p=$r(u);for(let C=b;C<v&&f[C]!==null;C++)g?g0($r(f[C])===g):g=$r(f[C])}else g=$r(f);if(p!==g)if(nu(p)&&nu(g)){const v=h.get();typeof v=="string"&&h.set(parseFloat(v)),typeof f=="string"?t[m]=parseFloat(f):Array.isArray(f)&&g===W&&(t[m]=f.map(parseFloat))}else p!=null&&p.transform&&(g!=null&&g.transform)&&(u===0||f===0)?u===0?h.set(g.transform(u)):t[m]=p.transform(f):(s||(o=O4(e),s=!0),c.push(m),n[m]=n[m]!==void 0?n[m]:t[m],h.jump(f))}),c.length){const m=c.indexOf("height")>=0?window.pageYOffset:null,h=_4(t,e,c);return o.length&&o.forEach(([u,p])=>{e.getValue(u).set(p)}),e.render(),il&&m!==null&&window.scrollTo({top:m}),{target:h,transitionEnd:n}}else return{target:t,transitionEnd:n}};function Z4(e,t,i,n){return D4(t)?H4(e,t,i,n):{target:t,transitionEnd:n}}const U4=(e,t,i,n)=>{const a=F4(e,t,n);return t=a.target,n=a.transitionEnd,Z4(e,t,i,n)},Ps={current:null},z0={current:!1};function $5(){if(z0.current=!0,!!il)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ps.current=e.matches;e.addListener(t),t()}else Ps.current=!1}function Y4(e,t,i){const{willChange:n}=t;for(const a in t){const o=t[a],s=i[a];if(Ye(o))e.addValue(a,o),zs(n)&&n.add(a);else if(Ye(s))e.addValue(a,yt(o,{owner:e})),zs(n)&&n.remove(a);else if(s!==o)if(e.hasValue(a)){const c=e.getValue(a);!c.hasAnimated&&c.set(o)}else{const c=e.getStaticValue(a);e.addValue(a,yt(c!==void 0?c:o,{owner:e}))}}for(const a in i)t[a]===void 0&&e.removeValue(a);return t}const ou=new WeakMap,S5=Object.keys(va),Q4=S5.length,su=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],G4=s0.length;class K4{constructor({parent:t,props:i,presenceContext:n,reducedMotionConfig:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>G.render(this.render,!1,!0);const{latestValues:c,renderState:m}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=i.initial?{...c}:{},this.renderState=m,this.parent=t,this.props=i,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=a,this.options=s,this.isControllingVariants=rl(i),this.isVariantNode=m1(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:h,...u}=this.scrapeMotionValuesFromProps(i,{});for(const p in u){const f=u[p];c[p]!==void 0&&Ye(f)&&(f.set(c[p],!1),zs(h)&&h.add(p))}}scrapeMotionValuesFromProps(t,i){return{}}mount(t){this.current=t,ou.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,n)=>this.bindToMotionValue(n,i)),z0.current||$5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ps.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ou.delete(this.current),this.projection&&this.projection.unmount(),$t(this.notifyUpdate),$t(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,i){const n=fn.has(t),a=i.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&G.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),o=i.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{a(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...i},n,a,o){let s,c;for(let m=0;m<Q4;m++){const h=S5[m],{isEnabled:u,Feature:p,ProjectionNode:f,MeasureLayout:g}=va[h];f&&(s=f),u(i)&&(!this.features[h]&&p&&(this.features[h]=new p(this)),g&&(c=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:m,layout:h,drag:u,dragConstraints:p,layoutScroll:f,layoutRoot:g}=i;this.projection.setOptions({layoutId:m,layout:h,alwaysMeasureLayout:!!u||p&&Bn(p),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof h=="string"?h:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:g})}return c}updateFeatures(){for(const t in this.features){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ge()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}makeTargetAnimatable(t,i=!0){return this.makeTargetAnimatableFromInstance(t,this.props,i)}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let n=0;n<su.length;n++){const a=su[n];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const o=t["on"+a];o&&(this.propEventSubscriptions[a]=this.on(a,o))}this.prevMotionValues=Y4(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const n=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(n.initial=this.props.initial),n}const i={};for(let n=0;n<G4;n++){const a=s0[n],o=this.props[a];(ya(o)||o===!1)&&(i[a]=o)}return i}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){i!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,i)),this.values.set(t,i),this.latestValues[t]=i.get()}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&i!==void 0&&(n=yt(i,{owner:this}),this.addValue(t,n)),n}readValue(t){var i;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(i=this.getBaseTargetFromProps(this.props,t))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){var i;const{initial:n}=this.props,a=typeof n=="string"||typeof n=="object"?(i=f0(this.props,n))===null||i===void 0?void 0:i[t]:void 0;if(n&&a!==void 0)return a;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ye(o)?o:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new C0),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}}class C5 extends K4{sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:n}){delete i[t],delete n[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:i,...n},{transformValues:a},o){let s=uk(n,t||{},this);if(a&&(i&&(i=a(i)),n&&(n=a(n)),s&&(s=a(s))),o){hk(this,n,s);const c=U4(this,n,s,i);i=c.transitionEnd,n=c.target}return{transition:t,transitionEnd:i,...n}}}function q4(e){return window.getComputedStyle(e)}class X4 extends C5{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,i){if(fn.has(i)){const n=b0(i);return n&&n.default||0}else{const n=q4(t),a=(f1(i)?n.getPropertyValue(i):n[i])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(t,{transformPagePoint:i}){return p5(t,i)}build(t,i,n,a){c0(t,i,n,a.transformTemplate)}scrapeMotionValuesFromProps(t,i){return u0(t,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ye(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}renderInstance(t,i,n,a){b1(t,i,n,a)}}class J4 extends C5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(fn.has(i)){const n=b0(i);return n&&n.default||0}return i=k1.has(i)?i:a0(i),t.getAttribute(i)}measureInstanceViewportBox(){return ge()}scrapeMotionValuesFromProps(t,i){return $1(t,i)}build(t,i,n,a){h0(t,i,n,this.isSVGTag,a.transformTemplate)}renderInstance(t,i,n,a){j1(t,i,n,a)}mount(t){this.isSVGTag=p0(t.tagName),super.mount(t)}}const e6=(e,t)=>d0(e)?new J4(t,{enableHardwareAcceleration:!1}):new X4(t,{enableHardwareAcceleration:!0}),t6={layout:{ProjectionNode:k5,MeasureLayout:f5}},i6={...Pk,...Gb,...I4,...t6},k=rb((e,t)=>Bb(e,t,i6,e6));function z5(){const e=j.useRef(!1);return La(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function n6(){const e=z5(),[t,i]=j.useState(0),n=j.useCallback(()=>{e.current&&i(t+1)},[t]);return[j.useCallback(()=>G.postRender(n),[n]),t]}class r6 extends j.Component{getSnapshotBeforeUpdate(t){const i=this.props.childRef.current;if(i&&t.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=i.offsetHeight||0,n.width=i.offsetWidth||0,n.top=i.offsetTop,n.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function a6({children:e,isPresent:t}){const i=j.useId(),n=j.useRef(null),a=j.useRef({width:0,height:0,top:0,left:0});return j.useInsertionEffect(()=>{const{width:o,height:s,top:c,left:m}=a.current;if(t||!n.current||!o||!s)return;n.current.dataset.motionPopId=i;const h=document.createElement("style");return document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${c}px !important;
            left: ${m}px !important;
          }
        `),()=>{document.head.removeChild(h)}},[t]),j.createElement(r6,{isPresent:t,childRef:n,sizeRef:a},j.cloneElement(e,{ref:n}))}const rd=({children:e,initial:t,isPresent:i,onExitComplete:n,custom:a,presenceAffectsLayout:o,mode:s})=>{const c=Ba(o6),m=j.useId(),h=j.useMemo(()=>({id:m,initial:t,isPresent:i,custom:a,onExitComplete:u=>{c.set(u,!0);for(const p of c.values())if(!p)return;n&&n()},register:u=>(c.set(u,!1),()=>c.delete(u))}),o?void 0:[i]);return j.useMemo(()=>{c.forEach((u,p)=>c.set(p,!1))},[i]),j.useEffect(()=>{!i&&!c.size&&n&&n()},[i]),s==="popLayout"&&(e=j.createElement(a6,{isPresent:i},e)),j.createElement(tl.Provider,{value:h},e)};function o6(){return new Map}function s6(e){return j.useEffect(()=>()=>e(),[])}const Ui=e=>e.key||"";function l6(e,t){e.forEach(i=>{const n=Ui(i);t.set(n,i)})}function d6(e){const t=[];return j.Children.forEach(e,i=>{j.isValidElement(i)&&t.push(i)}),t}const Bt=({children:e,custom:t,initial:i=!0,onExitComplete:n,exitBeforeEnter:a,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const c=j.useContext(l0).forceRender||n6()[0],m=z5(),h=d6(e);let u=h;const p=j.useRef(new Map).current,f=j.useRef(u),g=j.useRef(new Map).current,v=j.useRef(!0);if(La(()=>{v.current=!1,l6(h,g),f.current=u}),s6(()=>{v.current=!0,g.clear(),p.clear()}),v.current)return j.createElement(j.Fragment,null,u.map(x=>j.createElement(rd,{key:Ui(x),isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:o,mode:s},x)));u=[...u];const b=f.current.map(Ui),C=h.map(Ui),y=b.length;for(let x=0;x<y;x++){const w=b[x];C.indexOf(w)===-1&&!p.has(w)&&p.set(w,void 0)}return s==="wait"&&p.size&&(u=[]),p.forEach((x,w)=>{if(C.indexOf(w)!==-1)return;const $=g.get(w);if(!$)return;const z=b.indexOf(w);let T=x;if(!T){const S=()=>{p.delete(w);const P=Array.from(g.keys()).filter(E=>!C.includes(E));if(P.forEach(E=>g.delete(E)),f.current=h.filter(E=>{const A=Ui(E);return A===w||P.includes(A)}),!p.size){if(m.current===!1)return;c(),n&&n()}};T=j.createElement(rd,{key:Ui($),isPresent:!1,onExitComplete:S,custom:t,presenceAffectsLayout:o,mode:s},$),p.set(w,T)}u.splice(z,0,T)}),u=u.map(x=>{const w=x.key;return p.has(w)?x:j.createElement(rd,{key:Ui(x),isPresent:!0,presenceAffectsLayout:o,mode:s},x)}),j.createElement(j.Fragment,null,p.size?u:u.map(x=>j.cloneElement(x)))};function c6(e){const t=Ba(()=>yt(e)),{isStatic:i}=j.useContext(r0);if(i){const[,n]=j.useState(e);j.useEffect(()=>t.on("change",n),[])}return t}const m6=e=>e&&typeof e=="object"&&e.mix,h6=e=>m6(e)?e.mix:void 0;function p6(...e){const t=!Array.isArray(e[0]),i=t?0:-1,n=e[0+i],a=e[1+i],o=e[2+i],s=e[3+i],c=ll(a,o,{mixer:h6(o[0]),...s});return t?c(n):c}function T5(e,t){const i=c6(t()),n=()=>i.set(t());return n(),La(()=>{const a=()=>G.update(n,!1,!0),o=e.map(s=>s.on("change",a));return()=>{o.forEach(s=>s()),$t(n)}}),i}function u6(e){Gr.current=[],e();const t=T5(Gr.current,e);return Gr.current=void 0,t}function nr(e,t,i,n){if(typeof e=="function")return u6(e);const a=typeof t=="function"?t:p6(t,i,n);return Array.isArray(e)?lu(e,a):lu([e],([o])=>a(o))}function lu(e,t){const i=Ba(()=>[]);return T5(e,()=>{i.length=0;const n=e.length;for(let a=0;a<n;a++)i[a]=e[a].get();return t(i)})}function P5(e,t,i){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const Oo=new WeakMap;let si;function f6(e,t){if(t){const{inlineSize:i,blockSize:n}=t[0];return{width:i,height:n}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function g6({target:e,contentRect:t,borderBoxSize:i}){var n;(n=Oo.get(e))===null||n===void 0||n.forEach(a=>{a({target:e,contentSize:t,get size(){return f6(e,i)}})})}function x6(e){e.forEach(g6)}function w6(){typeof ResizeObserver>"u"||(si=new ResizeObserver(x6))}function y6(e,t){si||w6();const i=P5(e);return i.forEach(n=>{let a=Oo.get(n);a||(a=new Set,Oo.set(n,a)),a.add(t),si==null||si.observe(n)}),()=>{i.forEach(n=>{const a=Oo.get(n);a==null||a.delete(t),a!=null&&a.size||si==null||si.unobserve(n)})}}const _o=new Set;let Xr;function v6(){Xr=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};_o.forEach(i=>i(t))},window.addEventListener("resize",Xr)}function b6(e){return _o.add(e),Xr||v6(),()=>{_o.delete(e),!_o.size&&Xr&&(Xr=void 0)}}function k6(e,t){return typeof e=="function"?b6(e):y6(e,t)}const j6=50,du=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),$6=()=>({time:0,x:du(),y:du()}),S6={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function cu(e,t,i,n){const a=i[t],{length:o,position:s}=S6[t],c=a.current,m=i.time;a.current=e["scroll"+s],a.scrollLength=e["scroll"+o]-e["client"+o],a.offset.length=0,a.offset[0]=0,a.offset[1]=a.scrollLength,a.progress=tr(0,a.scrollLength,a.current);const h=n-m;a.velocity=h>j6?0:v0(a.current-c,h)}function C6(e,t,i){cu(e,"x",t,i),cu(e,"y",t,i),t.time=i}function z6(e,t){const i={x:0,y:0};let n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)i.x+=n.offsetLeft,i.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const a=n.getBoundingClientRect();n=n.parentElement;const o=n.getBoundingClientRect();i.x+=a.left-o.left,i.y+=a.top-o.top}else if(n instanceof SVGGraphicsElement){const{x:a,y:o}=n.getBBox();i.x+=a,i.y+=o;let s=null,c=n.parentNode;for(;!s;)c.tagName==="svg"&&(s=c),c=n.parentNode;n=s}else break;return i}const T6={All:[[0,0],[1,1]]},qc={start:0,center:.5,end:1};function mu(e,t,i=0){let n=0;if(qc[e]!==void 0&&(e=qc[e]),typeof e=="string"){const a=parseFloat(e);e.endsWith("px")?n=a:e.endsWith("%")?e=a/100:e.endsWith("vw")?n=a/100*document.documentElement.clientWidth:e.endsWith("vh")?n=a/100*document.documentElement.clientHeight:e=a}return typeof e=="number"&&(n=t*e),i+n}const P6=[0,0];function M6(e,t,i,n){let a=Array.isArray(e)?e:P6,o=0,s=0;return typeof e=="number"?a=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?a=e.split(" "):a=[e,qc[e]?e:"0"]),o=mu(a[0],i,n),s=mu(a[1],t),o-s}const A6={x:0,y:0};function L6(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function E6(e,t,i){let{offset:n=T6.All}=i;const{target:a=e,axis:o="y"}=i,s=o==="y"?"height":"width",c=a!==e?z6(a,e):A6,m=a===e?{width:e.scrollWidth,height:e.scrollHeight}:L6(a),h={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let u=!t[o].interpolate;const p=n.length;for(let f=0;f<p;f++){const g=M6(n[f],h[s],m[s],c[o]);!u&&g!==t[o].interpolatorOffsets[f]&&(u=!0),t[o].offset[f]=g}u&&(t[o].interpolate=ll(t[o].offset,J1(n)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function I6(e,t=e,i){if(i.x.targetOffset=0,i.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)i.x.targetOffset+=n.offsetLeft,i.y.targetOffset+=n.offsetTop,n=n.offsetParent}i.x.targetLength=t===e?t.scrollWidth:t.clientWidth,i.y.targetLength=t===e?t.scrollHeight:t.clientHeight,i.x.containerLength=e.clientWidth,i.y.containerLength=e.clientHeight}function R6(e,t,i,n={}){return{measure:()=>I6(e,n.target,i),update:a=>{C6(e,i,a),(n.offset||n.target)&&E6(e,i,n)},notify:()=>t(i)}}const Cr=new WeakMap,hu=new WeakMap,ad=new WeakMap,pu=e=>e===document.documentElement?window:e;function B6(e,{container:t=document.documentElement,...i}={}){let n=ad.get(t);n||(n=new Set,ad.set(t,n));const a=$6(),o=R6(t,e,a,i);if(n.add(o),!Cr.has(t)){const c=()=>{for(const f of n)f.measure()},m=()=>{for(const f of n)f.update(ze.timestamp)},h=()=>{for(const f of n)f.notify()},u=()=>{G.read(c,!1,!0),G.read(m,!1,!0),G.update(h,!1,!0)};Cr.set(t,u);const p=pu(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&hu.set(t,k6(t,u)),p.addEventListener("scroll",u,{passive:!0})}const s=Cr.get(t);return G.read(s,!1,!0),()=>{var c;$t(s);const m=ad.get(t);if(!m||(m.delete(o),m.size))return;const h=Cr.get(t);Cr.delete(t),h&&(pu(t).removeEventListener("scroll",h),(c=hu.get(t))===null||c===void 0||c(),window.removeEventListener("resize",h))}}function uu(e,t){Xb(!!(!t||t.current))}const F6=()=>({scrollX:yt(0),scrollY:yt(0),scrollXProgress:yt(0),scrollYProgress:yt(0)});function T0({container:e,target:t,layoutEffect:i=!0,...n}={}){const a=Ba(F6);return(i?La:j.useEffect)(()=>(uu("target",t),uu("container",e),B6(({x:s,y:c})=>{a.scrollX.set(s.current),a.scrollXProgress.set(s.progress),a.scrollY.set(c.current),a.scrollYProgress.set(c.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(n.offset)]),a}function M5(){!z0.current&&$5();const[e]=j.useState(Ps.current);return e}const W6={some:0,all:1};function D6(e,t,{root:i,margin:n,amount:a="some"}={}){const o=P5(e),s=new WeakMap,c=h=>{h.forEach(u=>{const p=s.get(u.target);if(u.isIntersecting!==!!p)if(u.isIntersecting){const f=t(u);typeof f=="function"?s.set(u.target,f):m.unobserve(u.target)}else p&&(p(u),s.delete(u.target))})},m=new IntersectionObserver(c,{root:i,rootMargin:n,threshold:typeof a=="number"?a:W6[a]});return o.forEach(h=>m.observe(h)),()=>m.disconnect()}function N(e,{root:t,margin:i,amount:n,once:a=!1}={}){const[o,s]=j.useState(!1);return j.useEffect(()=>{if(!e.current||a&&o)return;const c=()=>(s(!0),a?void 0:()=>s(!1)),m={root:t&&t.current||void 0,margin:i,amount:n};return D6(e.current,c,m)},[t,e,i,a,n]),o}var A5={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},fu=he.createContext&&he.createContext(A5),Pi=function(){return Pi=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Pi.apply(this,arguments)},V6=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};function L5(e){return e&&e.map(function(t,i){return he.createElement(t.tag,Pi({key:i},t.attr),L5(t.child))})}function U(e){return function(t){return he.createElement(N6,Pi({attr:Pi({},e.attr)},t),L5(e.child))}}function N6(e){var t=function(i){var n=e.attr,a=e.size,o=e.title,s=V6(e,["attr","size","title"]),c=a||i.size||"1em",m;return i.className&&(m=i.className),e.className&&(m=(m?m+" ":"")+e.className),he.createElement("svg",Pi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,n,s,{className:m,style:Pi(Pi({color:e.color||i.color},i.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&he.createElement("title",null,o),e.children)};return fu!==void 0?he.createElement(fu.Consumer,null,function(i){return t(i)}):t(A5)}function gu(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(e)}function me(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}},{tag:"polyline",attr:{points:"12 5 19 12 12 19"}}]})(e)}function P0(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"}},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(e)}function O6(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}}]})(e)}function Ms(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}function xu(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}},{tag:"circle",attr:{cx:"12",cy:"13",r:"4"}}]})(e)}function qi(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(e)}function E5(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(e)}function I5(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}function ba(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}function _6(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polygon",attr:{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}}]})(e)}function ka(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}},{tag:"line",attr:{x1:"16",y1:"8",x2:"2",y2:"22"}},{tag:"line",attr:{x1:"17.5",y1:"15",x2:"9",y2:"15"}}]})(e)}function mt(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(e)}function rn(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}}]})(e)}function As(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}function H6(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(e)}function Z6(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function R5(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(e)}function Ls(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"}}]})(e)}function U6(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"}},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"}}]})(e)}function Y6(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"}},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"}},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"}},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"}}]})(e)}function Q6(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"path",attr:{d:"M8 14s1.5 2 4 2 4-2 4-2"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"9.01",y2:"9"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"15.01",y2:"9"}}]})(e)}function ei(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(e)}function Wa(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"}},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"}},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"}},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}}]})(e)}function G6(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"}}]})(e)}function dl(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"}}]})(e)}function K6(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function rr(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function cl(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}function q6(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}}]})(e)}function M0(e){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(e)}var _e=function(){return _e=Object.assign||function(t){for(var i,n=1,a=arguments.length;n<a;n++){i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},_e.apply(this,arguments)};function ja(e,t,i){if(i||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var te="-ms-",Jr="-moz-",Q="-webkit-",B5="comm",ml="rule",A0="decl",X6="@import",J6="@namespace",F5="@keyframes",ej="@layer",W5=Math.abs,L0=String.fromCharCode,Xc=Object.assign;function tj(e,t){return be(e,0)^45?(((t<<2^be(e,0))<<2^be(e,1))<<2^be(e,2))<<2^be(e,3):0}function D5(e){return e.trim()}function Vt(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,i){return e.replace(t,i)}function Ho(e,t,i){return e.indexOf(t,i)}function be(e,t){return e.charCodeAt(t)|0}function mn(e,t,i){return e.slice(t,i)}function xt(e){return e.length}function V5(e){return e.length}function Br(e,t){return t.push(e),e}function ij(e,t){return e.map(t).join("")}function wu(e,t){return e.filter(function(i){return!Vt(i,t)})}var hl=1,ar=1,N5=0,ht=0,xe=0,fr="";function pl(e,t,i,n,a,o,s,c){return{value:e,root:t,parent:i,type:n,props:a,children:o,line:hl,column:ar,length:s,return:"",siblings:c}}function li(e,t){return Xc(pl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function vn(e){for(;e.root;)e=li(e.root,{children:[e]});Br(e,e.siblings)}function nj(){return xe}function rj(){return xe=ht>0?be(fr,--ht):0,ar--,xe===10&&(ar=1,hl--),xe}function kt(){return xe=ht<N5?be(fr,ht++):0,ar++,xe===10&&(ar=1,hl++),xe}function wi(){return be(fr,ht)}function Zo(){return ht}function ul(e,t){return mn(fr,e,t)}function $a(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function aj(e){return hl=ar=1,N5=xt(fr=e),ht=0,[]}function oj(e){return fr="",e}function od(e){return D5(ul(ht-1,Jc(e===91?e+2:e===40?e+1:e)))}function sj(e){for(;(xe=wi())&&xe<33;)kt();return $a(e)>2||$a(xe)>3?"":" "}function lj(e,t){for(;--t&&kt()&&!(xe<48||xe>102||xe>57&&xe<65||xe>70&&xe<97););return ul(e,Zo()+(t<6&&wi()==32&&kt()==32))}function Jc(e){for(;kt();)switch(xe){case e:return ht;case 34:case 39:e!==34&&e!==39&&Jc(xe);break;case 40:e===41&&Jc(e);break;case 92:kt();break}return ht}function dj(e,t){for(;kt()&&e+xe!==57;)if(e+xe===84&&wi()===47)break;return"/*"+ul(t,ht-1)+"*"+L0(e===47?e:kt())}function cj(e){for(;!$a(wi());)kt();return ul(e,ht)}function mj(e){return oj(Uo("",null,null,null,[""],e=aj(e),0,[0],e))}function Uo(e,t,i,n,a,o,s,c,m){for(var h=0,u=0,p=s,f=0,g=0,v=0,b=1,C=1,y=1,x=0,w="",$=a,z=o,T=n,S=w;C;)switch(v=x,x=kt()){case 40:if(v!=108&&be(S,p-1)==58){Ho(S+=D(od(x),"&","&\f"),"&\f",W5(h?c[h-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:S+=od(x);break;case 9:case 10:case 13:case 32:S+=sj(v);break;case 92:S+=lj(Zo()-1,7);continue;case 47:switch(wi()){case 42:case 47:Br(hj(dj(kt(),Zo()),t,i,m),m),($a(v||1)==5||$a(wi()||1)==5)&&xt(S)&&mn(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*b:c[h++]=xt(S)*y;case 125*b:case 59:case 0:switch(x){case 0:case 125:C=0;case 59+u:y==-1&&(S=D(S,/\f/g,"")),g>0&&(xt(S)-p||b===0&&v===47)&&Br(g>32?vu(S+";",n,i,p-1,m):vu(D(S," ","")+";",n,i,p-2,m),m);break;case 59:S+=";";default:if(Br(T=yu(S,t,i,h,u,a,c,w,$=[],z=[],p,o),o),x===123)if(u===0)Uo(S,t,T,T,$,o,p,c,z);else{switch(f){case 99:if(be(S,3)===110)break;case 108:if(be(S,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Uo(e,T,T,n&&Br(yu(e,T,T,0,0,a,c,w,a,$=[],p,z),z),a,z,p,c,n?$:z):Uo(S,T,T,T,[""],z,0,c,z)}}h=u=g=0,b=y=1,w=S="",p=s;break;case 58:p=1+xt(S),g=v;default:if(b<1){if(x==123)--b;else if(x==125&&b++==0&&rj()==125)continue}switch(S+=L0(x),x*b){case 38:y=u>0?1:(S+="\f",-1);break;case 44:c[h++]=(xt(S)-1)*y,y=1;break;case 64:wi()===45&&(S+=od(kt())),f=wi(),u=p=xt(w=S+=cj(Zo())),x++;break;case 45:v===45&&xt(S)==2&&(b=0)}}return o}function yu(e,t,i,n,a,o,s,c,m,h,u,p){for(var f=a-1,g=a===0?o:[""],v=V5(g),b=0,C=0,y=0;b<n;++b)for(var x=0,w=mn(e,f+1,f=W5(C=s[b])),$=e;x<v;++x)($=D5(C>0?g[x]+" "+w:D(w,/&\f/g,g[x])))&&(m[y++]=$);return pl(e,t,i,a===0?ml:c,m,h,u,p)}function hj(e,t,i,n){return pl(e,t,i,B5,L0(nj()),mn(e,2,-2),0,n)}function vu(e,t,i,n,a){return pl(e,t,i,A0,mn(e,0,n),mn(e,n+1,-1),n,a)}function O5(e,t,i){switch(tj(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Q+e+e;case 4855:return Q+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Jr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+Jr+e+te+e+e;case 5936:switch(be(e,t+11)){case 114:return Q+e+te+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+te+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+te+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+te+e+e;case 6165:return Q+e+te+"flex-"+e+e;case 5187:return Q+e+D(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+te+"flex-$1$2")+e;case 5443:return Q+e+te+"flex-item-"+D(e,/flex-|-self/g,"")+(Vt(e,/flex-|baseline/)?"":te+"grid-row-"+D(e,/flex-|-self/g,""))+e;case 4675:return Q+e+te+"flex-line-pack"+D(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+te+D(e,"shrink","negative")+e;case 5292:return Q+e+te+D(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+D(e,"-grow","")+Q+e+te+D(e,"grow","positive")+e;case 4554:return Q+D(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+te+"flex-pack:$3"),/space-between/,"justify")+Q+e+e;case 4200:if(!Vt(e,/flex-|baseline/))return te+"grid-column-align"+mn(e,t)+e;break;case 2592:case 3360:return te+D(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(n,a){return t=a,Vt(n.props,/grid-\w+-end/)})?~Ho(e+(i=i[t].value),"span",0)?e:te+D(e,"-start","")+e+te+"grid-row-span:"+(~Ho(i,"span",0)?Vt(i,/\d+/):+Vt(i,/\d+/)-+Vt(e,/\d+/))+";":te+D(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(n){return Vt(n.props,/grid-\w+-start/)})?e:te+D(D(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(be(e,t+1)){case 109:if(be(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+Jr+(be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ho(e,"stretch",0)?O5(D(e,"stretch","fill-available"),t,i)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,a,o,s,c,m,h){return te+a+":"+o+h+(s?te+a+"-span:"+(c?m:+m-+o)+h:"")+e});case 4949:if(be(e,t+6)===121)return D(e,":",":"+Q)+e;break;case 6444:switch(be(e,be(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(be(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+te+"$2box$3")+e;case 100:return D(e,":",":"+te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,"scroll-","scroll-snap-")+e}return e}function Es(e,t){for(var i="",n=0;n<e.length;n++)i+=t(e[n],n,e,t)||"";return i}function pj(e,t,i,n){switch(e.type){case ej:if(e.children.length)break;case X6:case J6:case A0:return e.return=e.return||e.value;case B5:return"";case F5:return e.return=e.value+"{"+Es(e.children,n)+"}";case ml:if(!xt(e.value=e.props.join(",")))return""}return xt(i=Es(e.children,n))?e.return=e.value+"{"+i+"}":""}function uj(e){var t=V5(e);return function(i,n,a,o){for(var s="",c=0;c<t;c++)s+=e[c](i,n,a,o)||"";return s}}function fj(e){return function(t){t.root||(t=t.return)&&e(t)}}function gj(e,t,i,n){if(e.length>-1&&!e.return)switch(e.type){case A0:e.return=O5(e.value,e.length,i);return;case F5:return Es([li(e,{value:D(e.value,"@","@"+Q)})],n);case ml:if(e.length)return ij(i=e.props,function(a){switch(Vt(a,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vn(li(e,{props:[D(a,/:(read-\w+)/,":"+Jr+"$1")]})),vn(li(e,{props:[a]})),Xc(e,{props:wu(i,n)});break;case"::placeholder":vn(li(e,{props:[D(a,/:(plac\w+)/,":"+Q+"input-$1")]})),vn(li(e,{props:[D(a,/:(plac\w+)/,":"+Jr+"$1")]})),vn(li(e,{props:[D(a,/:(plac\w+)/,te+"input-$1")]})),vn(li(e,{props:[a]})),Xc(e,{props:wu(i,n)});break}return""})}}var xj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ge={},or=typeof process<"u"&&Ge!==void 0&&(Ge.REACT_APP_SC_ATTR||Ge.SC_ATTR)||"data-styled",_5="active",H5="data-styled-version",fl="6.3.8",E0=`/*!sc*/
`,Is=typeof window<"u"&&typeof document<"u",sr=he.createContext===void 0,wj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==""?Ge.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ge.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.SC_DISABLE_SPEEDY!==void 0&&Ge.SC_DISABLE_SPEEDY!==""&&Ge.SC_DISABLE_SPEEDY!=="false"&&Ge.SC_DISABLE_SPEEDY),gl=Object.freeze([]),lr=Object.freeze({});function yj(e,t,i){return i===void 0&&(i=lr),e.theme!==i.theme&&e.theme||t||i.theme}var Z5=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),vj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bj=/(^-|-$)/g;function bu(e){return e.replace(vj,"-").replace(bj,"")}var kj=/(a)(d)/gi,ku=function(e){return String.fromCharCode(e+(e>25?39:97))};function em(e){var t,i="";for(t=Math.abs(e);t>52;t=t/52|0)i=ku(t%52)+i;return(ku(t%52)+i).replace(kj,"$1-$2")}var sd,Vn=function(e,t){for(var i=t.length;i;)e=33*e^t.charCodeAt(--i);return e},U5=function(e){return Vn(5381,e)};function Y5(e){return em(U5(e)>>>0)}function jj(e){return e.displayName||e.name||"Component"}function ld(e){return typeof e=="string"&&!0}var Q5=typeof Symbol=="function"&&Symbol.for,G5=Q5?Symbol.for("react.memo"):60115,$j=Q5?Symbol.for("react.forward_ref"):60112,Sj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zj=((sd={})[$j]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sd[G5]=K5,sd);function ju(e){return("type"in(t=e)&&t.type.$$typeof)===G5?K5:"$$typeof"in e?zj[e.$$typeof]:Sj;var t}var Tj=Object.defineProperty,Pj=Object.getOwnPropertyNames,$u=Object.getOwnPropertySymbols,Mj=Object.getOwnPropertyDescriptor,Aj=Object.getPrototypeOf,Su=Object.prototype;function q5(e,t,i){if(typeof t!="string"){if(Su){var n=Aj(t);n&&n!==Su&&q5(e,n,i)}var a=Pj(t);$u&&(a=a.concat($u(t)));for(var o=ju(e),s=ju(t),c=0;c<a.length;++c){var m=a[c];if(!(m in Cj||i&&i[m]||s&&m in s||o&&m in o)){var h=Mj(t,m);try{Tj(e,m,h)}catch{}}}}return e}function dr(e){return typeof e=="function"}function I0(e){return typeof e=="object"&&"styledComponentId"in e}function Xi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function tm(e,t){if(e.length===0)return"";for(var i=e[0],n=1;n<e.length;n++)i+=e[n];return i}function Sa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function im(e,t,i){if(i===void 0&&(i=!1),!i&&!Sa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=im(e[n],t[n]);else if(Sa(t))for(var n in t)e[n]=im(e[n],t[n]);return e}function R0(e,t){Object.defineProperty(e,"toString",{value:t})}function Da(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Lj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var i=0,n=0;n<t;n++)i+=this.groupSizes[n];return i},e.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var n=this.groupSizes,a=n.length,o=a;t>=o;)if((o<<=1)<0)throw Da(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=a;s<o;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),m=(s=0,i.length);s<m;s++)this.tag.insertRule(c,i[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],n=this.indexOfGroup(t),a=n+i;this.groupSizes[t]=0;for(var o=n;o<a;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var n=this.groupSizes[t],a=this.indexOfGroup(t),o=a+n,s=a;s<o;s++)i+="".concat(this.tag.getRule(s)).concat(E0);return i},e}(),Yo=new Map,Rs=new Map,Qo=1,Fr=function(e){if(Yo.has(e))return Yo.get(e);for(;Rs.has(Qo);)Qo++;var t=Qo++;return Yo.set(e,t),Rs.set(t,e),t},Ej=function(e,t){Qo=t+1,Yo.set(e,t),Rs.set(t,e)},Ij="style[".concat(or,"][").concat(H5,'="').concat(fl,'"]'),Rj=new RegExp("^".concat(or,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Bj=function(e,t,i){for(var n,a=i.split(","),o=0,s=a.length;o<s;o++)(n=a[o])&&e.registerName(t,n)},Fj=function(e,t){for(var i,n=((i=t.textContent)!==null&&i!==void 0?i:"").split(E0),a=[],o=0,s=n.length;o<s;o++){var c=n[o].trim();if(c){var m=c.match(Rj);if(m){var h=0|parseInt(m[1],10),u=m[2];h!==0&&(Ej(u,h),Bj(e,u,m[3]),e.getTag().insertRules(h,a)),a.length=0}else a.push(c)}}},Cu=function(e){for(var t=document.querySelectorAll(Ij),i=0,n=t.length;i<n;i++){var a=t[i];a&&a.getAttribute(or)!==_5&&(Fj(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Wj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var X5=function(e){var t=document.head,i=e||t,n=document.createElement("style"),a=function(c){var m=Array.from(c.querySelectorAll("style[".concat(or,"]")));return m[m.length-1]}(i),o=a!==void 0?a.nextSibling:null;n.setAttribute(or,_5),n.setAttribute(H5,fl);var s=Wj();return s&&n.setAttribute("nonce",s),i.insertBefore(n,o),n},Dj=function(){function e(t){this.element=X5(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var n=document.styleSheets,a=0,o=n.length;a<o;a++){var s=n[a];if(s.ownerNode===i)return s}throw Da(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},e}(),Vj=function(){function e(t){this.element=X5(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var n=document.createTextNode(i);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Nj=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),zu=Is,Oj={isServer:!Is,useCSSOMInjection:!wj},J5=function(){function e(t,i,n){t===void 0&&(t=lr),i===void 0&&(i={});var a=this;this.options=_e(_e({},Oj),t),this.gs=i,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Is&&zu&&(zu=!1,Cu(this)),R0(this,function(){return function(o){for(var s=o.getTag(),c=s.length,m="",h=function(p){var f=function(y){return Rs.get(y)}(p);if(f===void 0)return"continue";var g=o.names.get(f),v=s.getGroup(p);if(g===void 0||!g.size||v.length===0)return"continue";var b="".concat(or,".g").concat(p,'[id="').concat(f,'"]'),C="";g!==void 0&&g.forEach(function(y){y.length>0&&(C+="".concat(y,","))}),m+="".concat(v).concat(b,'{content:"').concat(C,'"}').concat(E0)},u=0;u<c;u++)h(u);return m}(a)})}return e.registerId=function(t){return Fr(t)},e.prototype.rehydrate=function(){!this.server&&Is&&Cu(this)},e.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new e(_e(_e({},this.options),t),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(i){var n=i.useCSSOMInjection,a=i.target;return i.isServer?new Nj(a):n?new Dj(a):new Vj(a)}(this.options),new Lj(t)));var t},e.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},e.prototype.registerName=function(t,i){if(Fr(t),this.names.has(t))this.names.get(t).add(i);else{var n=new Set;n.add(i),this.names.set(t,n)}},e.prototype.insertRules=function(t,i,n){this.registerName(t,i),this.getTag().insertRules(Fr(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fr(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),_j=/&/g,Nn=47;function Tu(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,i=0,n=0,a=!1,o=0;o<t;o++){var s=e.charCodeAt(o);if(n!==0||a||s!==Nn||e.charCodeAt(o+1)!==42)if(a)s===42&&e.charCodeAt(o+1)===Nn&&(a=!1,o++);else if(s!==34&&s!==39||o!==0&&e.charCodeAt(o-1)===92){if(n===0){if(s===123)i++;else if(s===125&&--i<0)return!0}}else n===0?n=s:n===s&&(n=0);else a=!0,o++}return i!==0||n!==0}function e2(e,t){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=e2(i.children,t)),i})}function Hj(e){var t,i,n,a=lr,o=a.options,s=o===void 0?lr:o,c=a.plugins,m=c===void 0?gl:c,h=function(f,g,v){return v.startsWith(i)&&v.endsWith(i)&&v.replaceAll(i,"").length>0?".".concat(t):f},u=m.slice();u.push(function(f){f.type===ml&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(_j,i).replace(n,h))}),s.prefix&&u.push(gj),u.push(pj);var p=function(f,g,v,b){g===void 0&&(g=""),v===void 0&&(v=""),b===void 0&&(b="&"),t=b,i=g,n=new RegExp("\\".concat(i,"\\b"),"g");var C=function(w){if(!Tu(w))return w;for(var $=w.length,z="",T=0,S=0,P=0,E=!1,A=0;A<$;A++){var _=w.charCodeAt(A);if(P!==0||E||_!==Nn||w.charCodeAt(A+1)!==42)if(E)_===42&&w.charCodeAt(A+1)===Nn&&(E=!1,A++);else if(_!==34&&_!==39||A!==0&&w.charCodeAt(A-1)===92){if(P===0)if(_===123)S++;else if(_===125){if(--S<0){for(var Y=A+1;Y<$;){var ne=w.charCodeAt(Y);if(ne===59||ne===10)break;Y++}Y<$&&w.charCodeAt(Y)===59&&Y++,S=0,A=Y-1,T=Y;continue}S===0&&(z+=w.substring(T,A+1),T=A+1)}else _===59&&S===0&&(z+=w.substring(T,A+1),T=A+1)}else P===0?P=_:P===_&&(P=0);else E=!0,A++}if(T<$){var X=w.substring(T);Tu(X)||(z+=X)}return z}(function(w){if(w.indexOf("//")===-1)return w;for(var $=w.length,z=[],T=0,S=0,P=0,E=0;S<$;){var A=w.charCodeAt(S);if(A!==34&&A!==39||S!==0&&w.charCodeAt(S-1)===92)if(P===0)if(A===40&&S>=3&&(32|w.charCodeAt(S-1))==108&&(32|w.charCodeAt(S-2))==114&&(32|w.charCodeAt(S-3))==117)E=1,S++;else if(E>0)A===41?E--:A===40&&E++,S++;else if(A===Nn&&S+1<$&&w.charCodeAt(S+1)===Nn){for(S>T&&z.push(w.substring(T,S));S<$&&w.charCodeAt(S)!==10;)S++;T=S}else S++;else S++;else P===0?P=A:P===A&&(P=0),S++}return T===0?w:(T<$&&z.push(w.substring(T)),z.join(""))}(f)),y=mj(v||g?"".concat(v," ").concat(g," { ").concat(C," }"):C);s.namespace&&(y=e2(y,s.namespace));var x=[];return Es(y,uj(u.concat(fj(function(w){return x.push(w)})))),x};return p.hash=m.length?m.reduce(function(f,g){return g.name||Da(15),Vn(f,g.name)},5381).toString():"",p}var Zj=new J5,nm=Hj(),rm={shouldForwardProp:void 0,styleSheet:Zj,stylis:nm},t2=sr?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(rm)}}:he.createContext(rm);t2.Consumer;sr||he.createContext(void 0);function Pu(){return sr?rm:he.useContext(t2)}var i2=function(){function e(t,i){var n=this;this.inject=function(a,o){o===void 0&&(o=nm);var s=n.name+o.hash;a.hasNameForId(n.id,s)||a.insertRules(n.id,s,o(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,R0(this,function(){throw Da(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=nm),this.name+t.hash},e}();function Uj(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in xj||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Yj=function(e){return e>="A"&&e<="Z"};function Mu(e){for(var t="",i=0;i<e.length;i++){var n=e[i];if(i===1&&n==="-"&&e[0]==="-")return e;Yj(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var n2=function(e){return e==null||e===!1||e===""},r2=function(e){var t=[];for(var i in e){var n=e[i];e.hasOwnProperty(i)&&!n2(n)&&(Array.isArray(n)&&n.isCss||dr(n)?t.push("".concat(Mu(i),":"),n,";"):Sa(n)?t.push.apply(t,ja(ja(["".concat(i," {")],r2(n),!1),["}"],!1)):t.push("".concat(Mu(i),": ").concat(Uj(i,n),";")))}return t};function an(e,t,i,n){if(n2(e))return[];if(I0(e))return[".".concat(e.styledComponentId)];if(dr(e)){if(!dr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var a=e(t);return an(a,t,i,n)}var o;return e instanceof i2?i?(e.inject(i,n),[e.getName(n)]):[e]:Sa(e)?r2(e):Array.isArray(e)?Array.prototype.concat.apply(gl,e.map(function(s){return an(s,t,i,n)})):[e.toString()]}function Qj(e){for(var t=0;t<e.length;t+=1){var i=e[t];if(dr(i)&&!I0(i))return!1}return!0}var Gj=U5(fl),Kj=function(){function e(t,i,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Qj(t),this.componentId=i,this.baseHash=Vn(Gj,i),this.baseStyle=n,J5.registerId(i)}return e.prototype.generateAndInjectStyles=function(t,i,n){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))a=Xi(a,this.staticRulesId);else{var o=tm(an(this.rules,t,i,n)),s=em(Vn(this.baseHash,o)>>>0);if(!i.hasNameForId(this.componentId,s)){var c=n(o,".".concat(s),void 0,this.componentId);i.insertRules(this.componentId,s,c)}a=Xi(a,s),this.staticRulesId=s}else{for(var m=Vn(this.baseHash,n.hash),h="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")h+=p;else if(p){var f=tm(an(p,t,i,n));m=Vn(m,f+u),h+=f}}if(h){var g=em(m>>>0);if(!i.hasNameForId(this.componentId,g)){var v=n(h,".".concat(g),void 0,this.componentId);i.insertRules(this.componentId,g,v)}a=Xi(a,g)}}return{className:a,css:typeof window>"u"?i.getTag().getGroup(Fr(this.componentId)):""}},e}(),a2=sr?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:he.createContext(void 0);a2.Consumer;var dd={};function qj(e,t,i){var n=I0(e),a=e,o=!ld(e),s=t.attrs,c=s===void 0?gl:s,m=t.componentId,h=m===void 0?function($,z){var T=typeof $!="string"?"sc":bu($);dd[T]=(dd[T]||0)+1;var S="".concat(T,"-").concat(Y5(fl+T+dd[T]));return z?"".concat(z,"-").concat(S):S}(t.displayName,t.parentComponentId):m,u=t.displayName,p=u===void 0?function($){return ld($)?"styled.".concat($):"Styled(".concat(jj($),")")}(e):u,f=t.displayName&&t.componentId?"".concat(bu(t.displayName),"-").concat(t.componentId):t.componentId||h,g=n&&a.attrs?a.attrs.concat(c).filter(Boolean):c,v=t.shouldForwardProp;if(n&&a.shouldForwardProp){var b=a.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;v=function($,z){return b($,z)&&C($,z)}}else v=b}var y=new Kj(i,f,n?a.componentStyle:void 0);function x($,z){return function(T,S,P){var E=T.attrs,A=T.componentStyle,_=T.defaultProps,Y=T.foldedComponentIds,ne=T.styledComponentId,X=T.target,ue=sr?void 0:he.useContext(a2),q=Pu(),re=T.shouldForwardProp||q.shouldForwardProp,L=yj(S,ue,_)||lr,R=function(xn,zt,Wt){for(var Qe,Tt=_e(_e({},zt),{className:void 0,theme:Wt}),wl=0;wl<xn.length;wl+=1){var Oa=dr(Qe=xn[wl])?Qe(Tt):Qe;for(var wn in Oa)wn==="className"?Tt.className=Xi(Tt.className,Oa[wn]):wn==="style"?Tt.style=_e(_e({},Tt.style),Oa[wn]):Tt[wn]=Oa[wn]}return"className"in zt&&typeof zt.className=="string"&&(Tt.className=Xi(Tt.className,zt.className)),Tt}(E,S,L),F=R.as||X,B={};for(var H in R)R[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&R.theme===L||(H==="forwardedAs"?B.as=R.forwardedAs:re&&!re(H,F)||(B[H]=R[H]));var St=function(xn,zt){var Wt=Pu(),Qe=xn.generateAndInjectStyles(zt,Wt.styleSheet,Wt.stylis);return Qe}(A,R),De=St.className,Ft=St.css,Se=Xi(Y,ne);De&&(Se+=" "+De),R.className&&(Se+=" "+R.className),B[ld(F)&&!Z5.has(F)?"class":"className"]=Se,P&&(B.ref=P);var Ct=j.createElement(F,B);return sr&&Ft?he.createElement(he.Fragment,null,he.createElement("style",{precedence:"styled-components",href:"sc-".concat(ne,"-").concat(De),children:Ft}),Ct):Ct}(w,$,z)}x.displayName=p;var w=he.forwardRef(x);return w.attrs=g,w.componentStyle=y,w.displayName=p,w.shouldForwardProp=v,w.foldedComponentIds=n?Xi(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=f,w.target=n?a.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=n?function(z){for(var T=[],S=1;S<arguments.length;S++)T[S-1]=arguments[S];for(var P=0,E=T;P<E.length;P++)im(z,E[P],!0);return z}({},a.defaultProps,$):$}}),R0(w,function(){return".".concat(w.styledComponentId)}),o&&q5(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Au(e,t){for(var i=[e[0]],n=0,a=t.length;n<a;n+=1)i.push(t[n],e[n+1]);return i}var Lu=function(e){return Object.assign(e,{isCss:!0})};function o2(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(dr(e)||Sa(e))return Lu(an(Au(gl,ja([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?an(n):Lu(an(Au(n,t)))}function am(e,t,i){if(i===void 0&&(i=lr),!t)throw Da(1,t);var n=function(a){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,i,o2.apply(void 0,ja([a],o,!1)))};return n.attrs=function(a){return am(e,t,_e(_e({},i),{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},n.withConfig=function(a){return am(e,t,_e(_e({},i),a))},n}var s2=function(e){return am(qj,e)},l=s2;Z5.forEach(function(e){l[e]=s2(e)});function ni(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var n=tm(o2.apply(void 0,ja([e],t,!1))),a=Y5(n);return new i2(a,n)}const d={colors:{primary:"#22371b",secondary:"#A8C5A4",secondaryLight:"#C5DCC2",secondaryDark:"#8AA887",accent:"#cec5ad",accentLight:"#ddd6c3",accentDark:"#b8af97",background:"#FAF8F5",backgroundAlt:"#FFFFFF",backgroundDark:"#F5F2ED",text:"#21371a",textLight:"#5a6b55",cta:"#22371b",ctaHover:"#1a2b15"},fonts:{heading:"'Cormorant Garamond', serif",body:"'Montserrat', sans-serif",accent:"'Cormorant Garamond', serif"},fontSizes:{sm:"0.875rem","3xl":"1.875rem","4xl":"2.25rem"},borderRadius:{sm:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},shadows:{sm:"0 1px 3px rgba(139, 115, 85, 0.08)",md:"0 4px 12px rgba(139, 115, 85, 0.1)",lg:"0 10px 30px rgba(139, 115, 85, 0.12)",xl:"0 20px 50px rgba(139, 115, 85, 0.15)"},transitions:{base:"0.3s ease-in-out"},breakpoints:{mobile:"768px",tablet:"1024px",wide:"1536px"},zIndex:{fixed:300,modal:400}},Di={smooth:[.25,.1,.25,1],entrance:[0,0,.2,1],exit:[.4,0,1,1]},Xj=()=>{const[e,t]=j.useState(!1),[i,n]=j.useState(!1),a=ur(),o=M5();j.useEffect(()=>{let p=!1;const f=()=>{p||(window.requestAnimationFrame(()=>{t(window.scrollY>50),p=!1}),p=!0)};return window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),j.useEffect(()=>{n(!1),window.scrollTo({top:0,behavior:"smooth"})},[a]),j.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const s=j.useMemo(()=>[{path:"/",label:"Home"},{path:"/about",label:"About"},{path:"/services",label:"Services"},{path:"/portfolio",label:"Portfolio"},{path:"/contact",label:"Connect"}],[]);j.useMemo(()=>[{path:"/",label:"Home"},{path:"/portfolio",label:"Portfolio"},{path:"/contact",label:"Connect"}],[]);const c={hidden:{y:o?0:-100,opacity:o?1:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:Di.entrance}}},m={hidden:{opacity:0,x:"100%"},visible:{opacity:1,x:0,transition:{duration:o?.1:.5,ease:Di.smooth}},exit:{opacity:0,x:"100%",transition:{duration:o?.1:.4,ease:Di.exit}}},h={hidden:{opacity:0,x:30},visible:p=>({opacity:1,x:0,transition:{duration:o?.1:.4,delay:o?0:p*.08,ease:Di.entrance}})},u={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:o?.1:.5,delay:o?0:s.length*.08+.1,ease:Di.entrance}}};return r.jsxs(r.Fragment,{children:[r.jsx(Jj,{as:k.header,variants:c,initial:"hidden",animate:"visible",$isScrolled:e,children:r.jsxs(e7,{className:"container",children:[r.jsx(B0,{to:"/","aria-label":"BK Shikha - Home",children:r.jsxs(i7,{$isScrolled:e,children:[r.jsx(t7,{src:"/bk.jpg",alt:"BK Shikha Logo",$isScrolled:e}),r.jsxs(n7,{children:[r.jsx(r7,{$isScrolled:e,children:"BK Shikha"}),r.jsx(a7,{$isScrolled:e,children:"Create your Destiny"})]})]})}),r.jsxs(o7,{className:"hide-mobile",role:"navigation","aria-label":"Main navigation",children:[r.jsxs(ui,{to:"/",$isActive:a.pathname==="/","aria-current":a.pathname==="/"?"page":void 0,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[r.jsx(zr,{children:"Home"}),r.jsx(Tr,{$isActive:a.pathname==="/"})]}),r.jsxs(ui,{to:"/about",$isActive:a.pathname==="/about","aria-current":a.pathname==="/about"?"page":void 0,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[r.jsx(zr,{children:"About"}),r.jsx(Tr,{$isActive:a.pathname==="/about"})]}),r.jsxs(ui,{to:"/services",$isActive:a.pathname==="/services","aria-current":a.pathname==="/services"?"page":void 0,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[r.jsx(zr,{children:"Services"}),r.jsx(Tr,{$isActive:a.pathname==="/services"})]}),r.jsxs(ui,{to:"/portfolio",$isActive:a.pathname==="/portfolio","aria-current":a.pathname==="/portfolio"?"page":void 0,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[r.jsx(zr,{children:"Portfolio"}),r.jsx(Tr,{$isActive:a.pathname==="/portfolio"})]}),r.jsxs(ui,{to:"/contact",$isActive:a.pathname==="/contact","aria-current":a.pathname==="/contact"?"page":void 0,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[r.jsx(zr,{children:"Connect"}),r.jsx(Tr,{$isActive:a.pathname==="/contact"})]}),r.jsx(s7,{to:"/contact",whileHover:o?{}:{scale:1.03,y:-1},whileTap:o?{}:{scale:.98},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Begin Your Journey"})]}),r.jsx(l7,{className:"show-mobile",onClick:()=>n(!i),whileTap:o?{}:{scale:.92},"aria-expanded":i,"aria-controls":"mobile-navigation","aria-label":i?"Close menu":"Open menu",children:r.jsx(d7,{animate:{rotate:i?90:0},transition:{duration:.3,ease:Di.smooth},children:i?r.jsx(cl,{size:26}):r.jsx(Z6,{size:26})})})]})}),r.jsx(Bt,{children:i&&r.jsxs(r.Fragment,{children:[r.jsx(c7,{as:k.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:()=>n(!1),"aria-hidden":"true"}),r.jsxs(m7,{as:k.nav,id:"mobile-navigation",role:"navigation","aria-label":"Mobile navigation",variants:m,initial:"hidden",animate:"visible",exit:"exit",children:[r.jsxs(h7,{children:[r.jsx(p7,{children:"BK Shikha"}),r.jsx(u7,{children:"Your Wellness Journey"})]}),r.jsx(f7,{children:s.map((p,f)=>r.jsxs(g7,{to:p.path,as:k(V),custom:f,variants:h,initial:"hidden",animate:"visible",$isActive:a.pathname===p.path,"aria-current":a.pathname===p.path?"page":void 0,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[a.pathname===p.path&&r.jsx(x7,{as:k.span,layoutId:"activeIndicator",transition:{duration:.3,ease:Di.smooth}}),r.jsx(w7,{children:p.label})]},p.path))}),r.jsx(y7,{to:"/contact",as:k(V),variants:u,initial:"hidden",animate:"visible",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),whileHover:o?{}:{y:-2},whileTap:o?{}:{scale:.98},children:"Begin Your Journey"})]})]})})]})},Jj=l.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${d.zIndex.fixed};
  background: ${e=>e.$isScrolled?"rgba(34, 55, 27, 0.97)":"rgba(33, 55, 26, 0.92)"};
  backdrop-filter: blur(${e=>e.$isScrolled?"16px":"12px"});
  -webkit-backdrop-filter: blur(${e=>e.$isScrolled?"16px":"12px"});
  box-shadow: ${e=>e.$isScrolled?"0 4px 20px rgba(34, 55, 27, 0.3), 0 1px 3px rgba(34, 55, 27, 0.15)":"none"};
  transition: 
    background 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
    padding 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
    backdrop-filter 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  padding: ${e=>e.$isScrolled?"0.875rem 0":"1.375rem 0"};
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
    padding: ${e=>e.$isScrolled?"0.6875rem 0":"1rem 0"};
  }

  @media (max-width: 640px) {
    padding: ${e=>e.$isScrolled?"0.625rem 0":"0.9375rem 0"};
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: ${e=>e.$isScrolled?"0.625rem 0":"1rem 0"};
  }

  @media (max-width: 390px) {
    padding: ${e=>e.$isScrolled?"0.5625rem 0":"0.875rem 0"};
  }

  @media (max-width: 375px) {
    padding: ${e=>e.$isScrolled?"0.5rem 0":"0.8125rem 0"};
  }
  
  @media (max-width: 360px) {
    padding: ${e=>e.$isScrolled?"0.5rem 0":"0.75rem 0"};
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    padding: ${e=>e.$isScrolled?"1rem 0":"1.5rem 0"};
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,e7=l.div`
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
`,B0=l(V)`
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
`,t7=l.img`
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
`,i7=l.div`
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
`,n7=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$isScrolled?"0.0625rem":"0.125rem"};
  transition: gap 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateZ(0);
  backface-visibility: hidden;
`,r7=l.h1`
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
`,a7=l.span`
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
`,o7=l.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  /* Hide on tablet and below */
  @media (max-width: ${d.breakpoints.tablet}) {
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
`,ui=l(V)`
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
`,s7=l(k(V))`
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
`,l7=l(k.button)`
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

  /* Show on tablet and below */
  @media (max-width: ${d.breakpoints.tablet}) {
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
`,d7=l(k.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,c7=l.div`
  position: fixed;
  inset: 0;
  background: rgba(74, 74, 74, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: ${d.zIndex.modal-1};
  transform: translateZ(0);
  backface-visibility: hidden;
`,m7=l.nav`
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
`,h7=l.div`
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
`,p7=l.div`
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
`,u7=l.div`
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
`,f7=l.div`
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
`,g7=l(V)`
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
`,x7=l.span`
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
`,w7=l.span`
  position: relative;
`,y7=l(V)`
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
`,v7=()=>{const e=new Date().getFullYear(),t=[{path:"/about",label:"About BK Shikha"},{path:"/services",label:"Services"},{path:"/blog",label:"Wellness Insights"},{path:"/portfolio",label:"Portfolio"},{path:"/contact",label:"Connect"}],i=["Personalized Yoga Coaching","Emotional Wellness Mentoring","Mindset & NLP Coaching","Stress Relief Sessions","Confidence Building"];return r.jsx(b7,{children:r.jsxs(k7,{className:"container",children:[r.jsxs(j7,{children:[r.jsxs($7,{children:[r.jsx(S7,{children:"BK Shikha"}),r.jsx(C7,{children:"Yogic Lifestyle & Wellness Mentor"}),r.jsx(z7,{children:"Transforming lives through holistic wellness, yoga, and emotional balance. Your journey to inner peace and confident living begins here."}),r.jsxs(T7,{children:[r.jsx(cd,{href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.95},children:r.jsx(rn,{})}),r.jsx(cd,{href:"mailto:contact@bkshikha.com","aria-label":"Email",whileHover:{scale:1.1,rotate:-5},whileTap:{scale:.95},children:r.jsx(As,{})}),r.jsx(cd,{href:"tel:+1234567890","aria-label":"Phone",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.95},children:r.jsx(R5,{})})]})]}),r.jsxs(Eu,{children:[r.jsx(md,{children:"Quick Links"}),r.jsx(Iu,{children:t.map(n=>r.jsx(P7,{to:n.path,children:n.label},n.path))})]}),r.jsxs(Eu,{children:[r.jsx(md,{children:"Services"}),r.jsx(Iu,{children:i.map((n,a)=>r.jsx(M7,{children:n},a))})]}),r.jsxs(A7,{children:[r.jsx(md,{children:"Begin Your Journey"}),r.jsx(L7,{children:"Ready to transform your life through wellness and yoga? Let's connect and create your personalized path to inner peace."}),r.jsx(E7,{to:"/contact",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Book a Session"})]})]}),r.jsx(I7,{children:r.jsxs(R7,{children:["© ",e," BK Shikha. All rights reserved. Crafted with"," ",r.jsx(B7,{children:r.jsx(mt,{})})," ","for wellness seekers."]})})]})})},b7=l.footer`
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
`,k7=l.div`
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
`,j7=l.div`
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
`,$7=l.div`
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
`,S7=l.h3`
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
`,C7=l.p`
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
`,z7=l.p`
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
`,T7=l.div`
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
`,cd=l(k.a)`
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
`,P7=l(V)`
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
`,M7=l.p`
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
`,A7=l.div`
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
`,L7=l.p`
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
`,E7=l(k(V))`
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
`,I7=l.div`
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
`,R7=l.p`
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
`,B7=l.span`
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
`,F7=()=>{const e=ur();return r.jsxs(W7,{children:[r.jsx(Xj,{}),r.jsx(D7,{children:r.jsx(Bt,{mode:"wait",children:r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5,ease:"easeInOut"},children:r.jsx(Bv,{})},e.pathname)})}),r.jsx(v7,{})]})},W7=l.div`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  transform: translateZ(0);
  backface-visibility: hidden;
  isolation: isolate;
  will-change: auto;
`,D7=l.main`
  flex: 1;
  padding-top: 5rem; /* Account for fixed header */
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: auto;

  /* 4K screens */
  @media (min-width: 2560px) {
    padding-top: 7rem;
  }

  /* Ultra-wide screens */
  @media (min-width: 1920px) {
    padding-top: 6rem;
  }

  @media (max-width: 1440px) {
    padding-top: 5rem;
  }

  @media (max-width: 1200px) {
    padding-top: 4.75rem;
  }

  @media (max-width: 1024px) {
    padding-top: 4.5rem;
  }

  @media (max-width: 900px) {
    padding-top: 4.25rem;
  }

  @media (max-width: 768px) {
    padding-top: 4rem;
  }

  @media (max-width: 640px) {
    padding-top: 3.75rem;
  }

  @media (max-width: 480px) {
    padding-top: 3.5rem;
  }

  @media (max-width: 390px) {
    padding-top: 3.25rem;
  }

  @media (max-width: 375px) {
    padding-top: 3rem;
  }

  @media (max-width: 360px) {
    padding-top: 2.75rem;
  }
`,V7=({mediaType:e="video",mediaSrc:t,posterSrc:i,bgImageSrc:n,title:a,subtitle:o,scrollToExpand:s="Scroll to explore",textBlend:c=!0,children:m})=>{const[h,u]=j.useState(0),[p,f]=j.useState(!1),[g,v]=j.useState(!1),[b,C]=j.useState(0),[y,x]=j.useState(!1),w=j.useRef(null);j.useEffect(()=>{u(0),f(!1),v(!1)},[e]),j.useEffect(()=>{const A=ue=>{if(g&&ue.deltaY<0&&window.scrollY<=5)v(!1),ue.preventDefault();else if(!g){ue.preventDefault();const q=ue.deltaY*9e-4,re=Math.min(Math.max(h+q,0),1);u(re),re>=1?(v(!0),f(!0)):re<.75&&f(!1)}},_=ue=>{C(ue.touches[0].clientY)},Y=ue=>{if(!b)return;const q=ue.touches[0].clientY,re=b-q;if(g&&re<-20&&window.scrollY<=5)v(!1),ue.preventDefault();else if(!g){ue.preventDefault();const L=re<0?.008:.005,R=re*L,F=Math.min(Math.max(h+R,0),1);u(F),F>=1?(v(!0),f(!0)):F<.75&&f(!1),C(q)}},ne=()=>{C(0)},X=()=>{g||window.scrollTo(0,0)};return window.addEventListener("wheel",A,{passive:!1}),window.addEventListener("scroll",X),window.addEventListener("touchstart",_,{passive:!1}),window.addEventListener("touchmove",Y,{passive:!1}),window.addEventListener("touchend",ne),()=>{window.removeEventListener("wheel",A),window.removeEventListener("scroll",X),window.removeEventListener("touchstart",_),window.removeEventListener("touchmove",Y),window.removeEventListener("touchend",ne)}},[h,g,b]),j.useEffect(()=>{const A=()=>{x(window.innerWidth<768)};return A(),window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);const $=300+h*(y?650:1250),z=400+h*(y?200:400),T=h*(y?180:150),S=a?a.split(" "):[],P=S[0]||"",E=S.slice(1).join(" ");return r.jsx(N7,{ref:w,children:r.jsx(O7,{children:r.jsxs(_7,{children:[r.jsxs(H7,{as:k.div,initial:{opacity:0},animate:{opacity:1-h},transition:{duration:.1},children:[r.jsx(Z7,{src:n,alt:"Background"}),r.jsx(U7,{})]}),r.jsxs(Y7,{children:[r.jsxs(Q7,{children:[r.jsxs(G7,{style:{width:`${$}px`,height:`${z}px`},children:[e==="video"?t.includes("youtube.com")?r.jsxs(Ru,{children:[r.jsx("iframe",{width:"100%",height:"100%",src:t.includes("embed")?t+(t.includes("?")?"&":"?")+"autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1":t.replace("watch?v=","embed/")+"?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist="+t.split("v=")[1],frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{borderRadius:"16px"}}),r.jsx(hd,{as:k.div,initial:{opacity:.7},animate:{opacity:.5-h*.3},transition:{duration:.2}})]}):r.jsxs(Ru,{children:[r.jsx(K7,{src:t,poster:i,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto"}),r.jsx(hd,{as:k.div,initial:{opacity:.7},animate:{opacity:.5-h*.3},transition:{duration:.2}})]}):r.jsxs(q7,{children:[r.jsx(X7,{src:t,alt:a||"Media content"}),r.jsx(hd,{as:k.div,initial:{opacity:.7},animate:{opacity:.7-h*.3},transition:{duration:.2}})]}),r.jsx(J7,{style:{transform:`translateX(${T}vw)`},children:s})]}),r.jsxs(e8,{$textBlend:c,children:[r.jsx(t8,{as:k.h2,style:{transform:`translateX(-${T}vw)`},children:P}),r.jsx(i8,{as:k.h2,style:{transform:`translateX(${T}vw)`},children:E})]})]}),r.jsx(n8,{as:k.section,initial:{opacity:0},animate:{opacity:p?1:0},transition:{duration:.7},children:m})]})]})})})},N7=l.div`
  transition: background-color 0.7s ease-in-out;
  overflow-x: hidden;
  width: 100%;
  -webkit-overflow-scrolling: touch;
`,O7=l.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.mobile}) {
    min-height: 100vh;
    min-height: 100dvh;
    min-height: -webkit-fill-available;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    min-height: 600px;
  }
`,_7=l.div`
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
`,H7=l.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.mobile}) {
    position: fixed;
    height: 100vh;
    height: 100dvh;
    min-height: -webkit-fill-available;
  }
`,Z7=l.img`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  object-fit: cover;
  object-position: center center;
  min-height: 100vh;
  min-height: 100dvh;

  @media (max-width: ${d.breakpoints.tablet}) {
    object-position: center 40%;
    min-height: 100vh;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    object-position: center 35%;
    object-fit: cover;
    height: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  @media (max-width: 390px) {
    object-position: center 30%;
  }

  @media (max-width: 360px) {
    object-position: center 25%;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    object-position: center 50%;
    height: 100vh;
  }
`,U7=l.div`
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
`,Y7=l.div`
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
`,Q7=l.div`
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
`,G7=l.div`
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
`,K7=l.video`
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
`,q7=l.div`
  position: relative;
  width: 100%;
  height: 100%;
`,X7=l.img`
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
`,hd=l.div`
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
`,J7=l.p`
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
`,e8=l.div`
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
`,t8=l.h2`
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
`,i8=l.h2`
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
`,n8=l.section`
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
`,mo=[{image:"/new%20images/pranayam%20practice.png",category:"Breathing",title:"Pranayama Practice"},{image:"/new%20images/holistic%20healing.png",category:"Wellness",title:"Holistic Healing"},{image:"/new%20images/yogic%20coaching.png",category:"Lifestyle",title:"Yogic Lifestyle Coaching"},{image:"/new%20images/morning%20flow%20(2).png",category:"Yoga",title:"Morning Yoga Flow"},{image:"/new%20images/weekend%20wellness%20treat.png",category:"Retreat",title:"Weekend Wellness Retreat",objectPosition:"left center"},{image:"/new%20images/meditation.png",category:"Meditation",title:"Mindful Meditation"}],r8=()=>r.jsxs(a8,{children:[r.jsxs(o8,{children:[r.jsx(k.span,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:"Our Programs"}),r.jsx(k.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:"Transform Your Life"})]}),r.jsxs(s8,{as:k.div,initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},transition:{duration:1,delay:.3},viewport:{once:!0},children:[r.jsx(l8,{}),r.jsx(d8,{}),r.jsx(c8,{as:k.div,animate:{x:[0,-(mo.length*380/2)]},transition:{x:{repeat:1/0,repeatType:"loop",duration:mo.length*4,ease:"linear"}},children:[...mo,...mo].map((e,t)=>r.jsxs(m8,{as:k.div,whileHover:{scale:1.05,y:-10},transition:{duration:.3},children:[r.jsx(h8,{src:e.image,alt:e.title,loading:"lazy",$objectPosition:e.objectPosition}),r.jsx(p8,{}),r.jsxs(u8,{children:[r.jsx(f8,{children:e.category}),r.jsx(g8,{children:e.title})]})]},t))})]})]}),a8=l.section`
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
`;var Wf;const o8=l.div`
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

    @media (max-width: ${(Wf=d.breakpoints)==null?void 0:Wf.tablet}) {
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
`,s8=l.div`
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
`,l8=l.div`
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
`,d8=l.div`
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
`,c8=l.div`
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
`,m8=l.div`
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
`,h8=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${e=>e.$objectPosition||"center"};
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
`,p8=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
  transform: translateZ(0);
  backface-visibility: hidden;
`,u8=l.div`
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
`,f8=l.span`
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
`,g8=l.h3`
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
`,x8="/6 images/2nd Video.mp4",w8=()=>{const e=j.useRef(null),t=N(e,{once:!0,amount:.3}),i=M5(),n={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.15,delayChildren:.1}}},a={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.25,.1,.25,1]}}},o={hidden:{opacity:0,scale:.9,rotate:-2},visible:{opacity:1,scale:1,rotate:0,transition:{duration:1.2,ease:[.43,.13,.23,.96]}}},s={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}};return r.jsxs(y8,{ref:e,children:[r.jsx(v8,{as:k.div,initial:{opacity:0,x:-50},animate:{opacity:.3,x:0},transition:{duration:1,delay:.5},children:r.jsxs("svg",{viewBox:"0 0 100 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M50 0C50 0 80 50 80 100C80 150 50 200 50 250C50 200 20 150 20 100C20 50 50 0 50 0Z",stroke:"#5a8a62",strokeWidth:"1",fill:"none",opacity:"0.5"}),r.jsx("path",{d:"M50 50C50 50 70 80 70 120C70 160 50 190 50 220",stroke:"#5a8a62",strokeWidth:"1",fill:"none",opacity:"0.3"}),r.jsx("path",{d:"M30 80C30 80 50 100 50 130",stroke:"#5a8a62",strokeWidth:"1",fill:"none",opacity:"0.3"}),r.jsx("path",{d:"M70 80C70 80 50 100 50 130",stroke:"#5a8a62",strokeWidth:"1",fill:"none",opacity:"0.3"})]})}),r.jsxs(b8,{as:k.div,variants:n,initial:"hidden",animate:t?"visible":"hidden",children:[r.jsxs(k8,{children:[r.jsxs(j8,{children:[r.jsx($8,{as:k.span,variants:a,children:"Refreshing"}),r.jsx(S8,{as:k.h1,variants:a,children:"body and soul."})]}),r.jsx(C8,{as:k.p,variants:a,children:"Step into a journey of holistic wellness, emotional balance, and mindful living. As your Yogic Lifestyle & Wellness Mentor, I guide you toward lasting transformation."}),r.jsxs(z8,{as:k.div,variants:n,children:[r.jsx(T8,{as:k(V),to:"/contact",variants:s,whileHover:i?{}:{scale:1.03,boxShadow:"0 10px 30px rgba(90, 138, 98, 0.3)"},whileTap:i?{}:{scale:.98},children:"Join us"}),r.jsx(P8,{as:k(V),to:"/about",variants:s,whileHover:i?{}:{scale:1.03,backgroundColor:"rgba(90, 138, 98, 0.08)"},whileTap:i?{}:{scale:.98},children:"Learn more"})]})]}),r.jsx(M8,{children:r.jsxs(A8,{children:[r.jsx(L8,{as:k.div,initial:{opacity:0,scale:.8,rotate:-10},animate:{opacity:1,scale:1,rotate:0},transition:{duration:1.2,delay:.3,ease:"easeOut"},children:r.jsxs(E8,{viewBox:"0 0 600 600",preserveAspectRatio:"none",children:[r.jsx("path",{d:"M450,300Q480,400,400,480Q320,560,220,520Q120,480,80,380Q40,280,80,180Q120,80,220,60Q320,40,400,120Q480,200,450,300Z",fill:"url(#blob-gradient)"}),r.jsx("defs",{children:r.jsxs("linearGradient",{id:"blob-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[r.jsx("stop",{offset:"0%",stopColor:"#b8d4bc",stopOpacity:"0.8"}),r.jsx("stop",{offset:"100%",stopColor:"#9bc2a0",stopOpacity:"0.4"})]})})]})}),r.jsx(I8,{as:k.div,initial:{opacity:0,scale:0},animate:{opacity:.8,scale:1},transition:{duration:.8,delay:.8}}),r.jsx(R8,{as:k.div,initial:{opacity:0,scale:0},animate:{opacity:.6,scale:1},transition:{duration:.8,delay:1}}),r.jsx(B8,{as:k.div,variants:o,whileHover:i?{}:{scale:1.02,transition:{duration:.4}},children:r.jsxs(F8,{children:[r.jsxs(D8,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[r.jsx("source",{src:x8,type:"video/mp4"}),"Your browser does not support the video tag."]}),r.jsx(W8,{})]})})]})})]})]})},y8=l.section`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  background: linear-gradient(165deg, #FAF8F5 0%, #f5f7f3 35%, #eef3ed 70%, #e6ede5 100%);
  padding: 6rem 0 4rem;
  overflow: hidden;
  position: relative;
  isolation: isolate;
  will-change: auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(ellipse at 80% 30%, rgba(206, 197, 173, 0.15) 0%, transparent 60%);
    pointer-events: none;
    transform: translateZ(0);
  }

  @media (min-width: 1920px) {
    padding: 8rem 0 6rem;
  }

  @media (max-width: 1440px) {
    padding: 6rem 0 4rem;
  }

  @media (max-width: 1200px) {
    padding: 6rem 0 3.5rem;
  }

  @media (max-width: 1024px) {
    min-height: auto;
    padding: 6.5rem 0 3rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    min-height: auto;
    padding: 7rem 0 3rem;
  }

  @media (max-width: 640px) {
    padding: 6rem 0 2.5rem;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    min-height: auto;
    padding: 5rem 0 2rem;
  }
  
  /* Small phones */
  @media (max-width: 480px) {
    min-height: auto;
    padding: 5.5rem 0 2.5rem;
  }

  @media (max-width: 390px) {
    padding: 5rem 0 2rem;
  }

  @media (max-width: 375px) {
    padding: 4.5rem 0 2rem;
  }
  
  /* Landscape mobile */
  @media (max-width: 896px) and (orientation: landscape) {
    min-height: auto;
    padding: 5rem 0 2rem;
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    padding: 8rem 0 6rem;
  }
  
  /* 4K screens */
  @media (min-width: 2560px) {
    padding: 10rem 0 8rem;
  }
`,v8=l.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) translateZ(0);
  width: 80px;
  height: 300px;
  z-index: 1;
  will-change: auto;
  
  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1920px) {
    width: 100px;
    height: 350px;
  }

  @media (max-width: 1200px) {
    width: 70px;
    height: 270px;
  }

  @media (max-width: 1024px) {
    width: 60px;
    height: 240px;
    opacity: 0.8;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    display: none;
  }
`,b8=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  width: 100%;
  position: relative;
  z-index: 2;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    max-width: 1600px;
    gap: 8rem;
    padding: 0 5rem;
  }

  @media (max-width: 1440px) {
    gap: 5rem;
    padding: 0 3.5rem;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 1rem;
  }
  
  /* Small phones */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 1.25rem;
  }

  @media (max-width: 390px) {
    gap: 1.75rem;
    padding: 0 1rem;
  }

  @media (max-width: 375px) {
    gap: 1.5rem;
    padding: 0 0.875rem;
  }

  @media (max-width: 1200px) {
    gap: 4rem;
    padding: 0 3rem;
  }

  @media (max-width: 1024px) {
    gap: 3.5rem;
    padding: 0 2.5rem;
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
    padding: 0 1.25rem;
    gap: 2.25rem;
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    max-width: 1600px;
    gap: 8rem;
    padding: 0 5rem;
  }
  
  /* 4K screens */
  @media (min-width: 2560px) {
    max-width: 2000px;
    gap: 10rem;
  }
`,k8=l.div`
  max-width: 520px;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    max-width: 600px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    max-width: 600px;
    margin: 0 auto;
    order: 2;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    max-width: 100%;
  }
`,j8=l.div`
  margin-bottom: 1.5rem;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 1rem;
  }

  @media (max-width: 390px) {
    margin-bottom: 0.875rem;
  }
`,$8=l.span`
  display: block;
  font-family: ${d.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 300;
  font-style: italic;
  color: #22371b;
  line-height: 1.1;
  margin-bottom: 0.15rem;
  letter-spacing: 0.02em;
  opacity: 0.95;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    font-size: clamp(3rem, 5.5vw, 5rem);
    margin-bottom: 0.2rem;
  }

  @media (max-width: 1440px) {
    font-size: clamp(2.5rem, 5vw, 4.25rem);
  }

  @media (max-width: 1200px) {
    font-size: clamp(2.25rem, 5vw, 4rem);
  }

  @media (max-width: 1024px) {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: clamp(2rem, 6vw, 3.25rem);
  }

  @media (max-width: 640px) {
    font-size: clamp(1.875rem, 7vw, 2.75rem);
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    font-size: clamp(1.5rem, 7vw, 2rem);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: clamp(2rem, 8vw, 2.75rem);
  }

  @media (max-width: 390px) {
    font-size: clamp(1.75rem, 7.5vw, 2.25rem);
  }

  @media (max-width: 375px) {
    font-size: clamp(1.625rem, 7vw, 2.125rem);
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    font-size: clamp(3.5rem, 4vw, 5rem);
  }
`,S8=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.01em;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    font-size: clamp(3rem, 5.5vw, 5rem);
  }

  @media (max-width: 1440px) {
    font-size: clamp(2.5rem, 5vw, 4.25rem);
  }

  @media (max-width: 1200px) {
    font-size: clamp(2.25rem, 5vw, 4rem);
  }

  @media (max-width: 1024px) {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    font-size: clamp(2rem, 6vw, 3.25rem);
  }

  @media (max-width: 640px) {
    font-size: clamp(1.875rem, 7vw, 2.75rem);
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    font-size: clamp(1.5rem, 7vw, 2rem);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: clamp(2rem, 8vw, 2.75rem);
  }

  @media (max-width: 390px) {
    font-size: clamp(1.75rem, 7.5vw, 2.25rem);
  }

  @media (max-width: 375px) {
    font-size: clamp(1.625rem, 7vw, 2.125rem);
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    font-size: clamp(3.5rem, 4vw, 5rem);
  }
`,C8=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  line-height: 1.85;
  color: #21371a;
  margin-bottom: 2.75rem;
  max-width: 460px;
  opacity: 0.9;
  font-weight: 400;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    font-size: 1.25rem;
    max-width: 520px;
    margin-bottom: 3rem;
  }

  @media (max-width: 1440px) {
    font-size: 1.125rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.0625rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 2.25rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 0.9375rem;
    line-height: 1.75;
    margin-bottom: 2rem;
  }

  @media (max-width: 390px) {
    font-size: 0.875rem;
    line-height: 1.7;
    margin-bottom: 1.75rem;
  }

  @media (max-width: 375px) {
    font-size: 0.8125rem;
    margin-bottom: 1.5rem;
  }
`,z8=l.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  transform: translateZ(0);

  @media (min-width: 1920px) {
    gap: 1.25rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: 640px) {
    gap: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 0.75rem;
  }

  @media (max-width: 390px) {
    gap: 0.625rem;
    flex-direction: column;
    align-items: center;
  }
`,l2=l(V)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.25rem;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  white-space: nowrap;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 1920px) {
    padding: 1.125rem 2.5rem;
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    padding: 1rem 2.125rem;
  }

  @media (max-width: 1024px) {
    padding: 0.9375rem 2rem;
    font-size: 0.875rem;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 0.875rem 1.875rem;
  }

  @media (max-width: 640px) {
    padding: 0.8125rem 1.75rem;
    font-size: 0.8125rem;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.75rem;
  }

  @media (max-width: 390px) {
    padding: 0.6875rem 1.375rem;
    font-size: 0.6875rem;
    width: 100%;
    max-width: 280px;
  }

  @media (max-width: 375px) {
    padding: 0.625rem 1.25rem;
    max-width: 260px;
  }

  @media (max-width: 360px) {
    font-size: 0.625rem;
    max-width: 240px;
  }

  @media (hover: none) and (pointer: coarse) {
    &:active {
      transform: scale(0.98) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background 0.3s ease, box-shadow 0.3s ease;
  }
`,T8=l(l2)`
  background: linear-gradient(135deg, #cec5ad 0%, #d6ceb8 100%);
  color: #22371b;
  box-shadow: 0 4px 20px rgba(206, 197, 173, 0.35);
  font-weight: 600;
  letter-spacing: 0.02em;

  &:hover {
    background: linear-gradient(135deg, #22371b 0%, #2d4a23 100%);
    color: #FAF8F5;
    box-shadow: 0 10px 35px rgba(34, 55, 27, 0.45);
    transform: translateY(-3px) translateZ(0);
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
      box-shadow: 0 4px 20px rgba(206, 197, 173, 0.35);
    }

    &:active {
      background: linear-gradient(135deg, #22371b 0%, #2d4a23 100%);
      color: #FAF8F5;
      transform: scale(0.98) translateZ(0);
    }
  }
`,P8=l(l2)`
  background-color: transparent;
  color: #22371b;
  border: 2px solid rgba(34, 55, 27, 0.3);
  font-weight: 500;
  letter-spacing: 0.02em;

  &:hover {
    border-color: #5a8a62;
    background: linear-gradient(135deg, #5a8a62 0%, #4a7a52 100%);
    color: #FAF8F5;
    transform: translateY(-3px) translateZ(0);
    box-shadow: 0 8px 25px rgba(90, 138, 98, 0.35);
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translateZ(0);
      background: transparent;
      border-color: rgba(34, 55, 27, 0.3);
      color: #22371b;
      box-shadow: none;
    }

    &:active {
      background: linear-gradient(135deg, #5a8a62 0%, #4a7a52 100%);
      color: #FAF8F5;
      border-color: #5a8a62;
      transform: scale(0.98) translateZ(0);
    }
  }
`,M8=l.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    min-height: 700px;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    order: 1;
    min-height: 250px;
  }

  @media (max-width: 390px) {
    order: 1;
    min-height: 280px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    order: 1;
    min-height: 320px;
  }

  @media (max-width: 640px) {
    min-height: 360px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    order: 1;
    min-height: 400px;
  }

  @media (max-width: 1024px) {
    min-height: 450px;
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    min-height: 700px;
  }
`,A8=l.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    max-width: 700px;
    height: 700px;
  }
  
  /* Extra small phones */
  @media (max-width: 360px) {
    height: 280px;
    max-width: 280px;
  }

  @media (max-width: 390px) {
    height: 300px;
    max-width: 300px;
  }

  @media (max-width: 375px) {
    height: 290px;
    max-width: 290px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    height: 350px;
    max-width: 350px;
  }

  @media (max-width: 640px) {
    height: 380px;
    max-width: 380px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    height: 450px;
    max-width: 450px;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    height: 480px;
    max-width: 480px;
  }

  @media (max-width: 1200px) {
    height: 500px;
    max-width: 500px;
  }
  
  /* Large screens */
  @media (min-width: ${d.breakpoints.wide}) {
    height: 700px;
    max-width: 700px;
  }
  
  /* 4K screens */
  @media (min-width: 2560px) {
    height: 800px;
    max-width: 800px;
  }
`,L8=l.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateZ(0);
  width: 100%;
  height: 100%;
  z-index: 1;
  filter: blur(0px);
  backface-visibility: hidden;
  will-change: transform;
`,E8=l.svg`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 20px 40px rgba(90, 138, 98, 0.15));
  transform: translateZ(0);
  backface-visibility: hidden;
`,I8=l.div`
  position: absolute;
  top: 15%;
  right: 15%;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #cec5ad, #ddd6c3);
  border-radius: 50%;
  z-index: 2;
  opacity: 0.9;
  box-shadow: 0 8px 25px rgba(206, 197, 173, 0.4);
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    width: 60px;
    height: 60px;
    top: 20%;
    right: 20%;
  }

  @media (max-width: 640px) {
    width: 55px;
    height: 55px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 390px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 360px) {
    width: 40px;
    height: 40px;
  }
`,R8=l.div`
  position: absolute;
  bottom: 20%;
  left: 10%;
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #22371b, #3a5a34);
  border-radius: 50%;
  z-index: 2;
  opacity: 0.7;
  box-shadow: 0 6px 20px rgba(34, 55, 27, 0.3);
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 1920px) {
    width: 55px;
    height: 55px;
  }

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    width: 38px;
    height: 38px;
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 35px;
    height: 35px;
    bottom: 25%;
    left: 15%;
  }

  @media (max-width: 390px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 360px) {
    width: 28px;
    height: 28px;
  }
`,B8=l.div`
  position: relative;
  z-index: 3;
  width: 85%;
  height: 85%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  overflow: hidden;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.1),
    0 0 0 12px rgba(255, 255, 255, 0.8),
    inset 0 0 20px rgba(255, 255, 255, 0.6);
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;

  @media (min-width: 1920px) {
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.12),
      0 0 0 14px rgba(255, 255, 255, 0.85),
      inset 0 0 24px rgba(255, 255, 255, 0.65);
  }

  @media (max-width: 1024px) {
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.09),
      0 0 0 10px rgba(255, 255, 255, 0.75),
      inset 0 0 16px rgba(255, 255, 255, 0.55);
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    box-shadow: 
      0 18px 35px rgba(0, 0, 0, 0.08),
      0 0 0 9px rgba(255, 255, 255, 0.7),
      inset 0 0 14px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 90%;
    height: 90%;
    box-shadow: 
      0 15px 30px rgba(0, 0, 0, 0.07),
      0 0 0 8px rgba(255, 255, 255, 0.65),
      inset 0 0 12px rgba(255, 255, 255, 0.45);
  }

  @media (max-width: 390px) {
    box-shadow: 
      0 12px 24px rgba(0, 0, 0, 0.06),
      0 0 0 6px rgba(255, 255, 255, 0.6),
      inset 0 0 10px rgba(255, 255, 255, 0.4);
  }
`,F8=l.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  backface-visibility: hidden;
`;l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
  transition: transform 0.8s cubic-bezier(0.43, 0.13, 0.23, 0.96);
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
`;const W8=l.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${e=>e.$isVideo?"transparent":`linear-gradient(
    135deg,
    rgba(184, 212, 188, 0.1) 0%,
    rgba(155, 194, 160, 0.05) 50%,
    transparent 100%
  )`};
  pointer-events: none;
  transform: translateZ(0);
  backface-visibility: hidden;
`,D8=l.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
  transform: translateZ(0);
  backface-visibility: hidden;
`;l(k.button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateZ(0);
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  backface-visibility: hidden;
  will-change: transform;

  svg {
    font-size: 1.75rem;
    color: #22371b;
    margin-left: 4px;
  }

  &:hover {
    background: #cec5ad;
    transform: translate(-50%, -50%) scale(1.05) translateZ(0);
    
    svg {
      color: #22371b;
    }
  }

  @media (min-width: 1920px) {
    width: 80px;
    height: 80px;

    svg {
      font-size: 2rem;
    }
  }

  @media (max-width: 1024px) {
    width: 65px;
    height: 65px;

    svg {
      font-size: 1.625rem;
    }
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    width: 62px;
    height: 62px;

    svg {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    width: 60px;
    height: 60px;

    svg {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 390px) {
    width: 55px;
    height: 55px;

    svg {
      font-size: 1.375rem;
    }
  }

  @media (max-width: 360px) {
    width: 50px;
    height: 50px;

    svg {
      font-size: 1.25rem;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: translate(-50%, -50%) translateZ(0);
      background: rgba(255, 255, 255, 0.95);
    }

    &:active {
      background: #cec5ad;
      transform: translate(-50%, -50%) scale(0.98) translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background 0.3s ease;

    &:hover {
      transform: translate(-50%, -50%) translateZ(0);
    }
  }
`;const V8="/6 images/our story.jpeg",N8=()=>{const e=j.useRef(null),t=N(e,{once:!0,amount:.3}),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.2}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.1,.25,1]}}},a={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:.9,ease:[.25,.1,.25,1]}}};return r.jsxs(O8,{ref:e,children:[r.jsx(_8,{children:r.jsxs("svg",{viewBox:"0 0 200 400",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M100 20C100 20 180 100 180 200C180 300 100 380 100 380",stroke:"#d4e5d6",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100 60C100 60 150 120 150 200C150 280 100 340 100 340",stroke:"#d4e5d6",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M100 100C100 100 130 140 130 200C130 260 100 300 100 300",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M60 120C60 120 100 160 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M140 120C140 120 100 160 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M50 180C50 180 100 200 100 200",stroke:"#d4e5d6",strokeWidth:"0.6",fill:"none"}),r.jsx("path",{d:"M150 180C150 180 100 200 100 200",stroke:"#d4e5d6",strokeWidth:"0.6",fill:"none"}),r.jsx("path",{d:"M60 260C60 260 100 240 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M140 260C140 260 100 240 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"})]})}),r.jsxs(H8,{as:k.div,variants:i,initial:"hidden",animate:t?"visible":"hidden",children:[r.jsxs(Z8,{as:k.div,variants:a,children:[r.jsx(Bu,{className:"primary"}),r.jsx(Bu,{className:"secondary"}),r.jsx(ho,{className:"top-left",children:r.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"40",y2:"0",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("line",{x1:"0",y1:"0",x2:"0",y2:"40",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("circle",{cx:"4",cy:"4",r:"2",fill:"#cec5ad"})]})}),r.jsx(ho,{className:"top-right",children:r.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"40",y2:"0",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("line",{x1:"40",y1:"0",x2:"40",y2:"40",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("circle",{cx:"36",cy:"4",r:"2",fill:"#cec5ad"})]})}),r.jsx(ho,{className:"bottom-left",children:r.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",children:[r.jsx("line",{x1:"0",y1:"40",x2:"40",y2:"40",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("line",{x1:"0",y1:"0",x2:"0",y2:"40",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("circle",{cx:"4",cy:"36",r:"2",fill:"#cec5ad"})]})}),r.jsx(ho,{className:"bottom-right",children:r.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",children:[r.jsx("line",{x1:"0",y1:"40",x2:"40",y2:"40",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("line",{x1:"40",y1:"0",x2:"40",y2:"40",stroke:"#cec5ad",strokeWidth:"2"}),r.jsx("circle",{cx:"36",cy:"36",r:"2",fill:"#cec5ad"})]})}),r.jsx(pd,{className:"vertical-left"}),r.jsx(pd,{className:"vertical-right"}),r.jsx(pd,{className:"horizontal-top"}),r.jsx(U8,{children:r.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",children:[r.jsx("circle",{cx:"40",cy:"40",r:"38",fill:"#cec5ad",opacity:"0.95"}),r.jsx("circle",{cx:"40",cy:"40",r:"30",fill:"none",stroke:"#22371b",strokeWidth:"1",opacity:"0.3"}),r.jsx("text",{x:"40",y:"35",textAnchor:"middle",fill:"#22371b",fontSize:"12",fontWeight:"600",children:"12+"}),r.jsx("text",{x:"40",y:"48",textAnchor:"middle",fill:"#22371b",fontSize:"8",children:"Years"})]})}),r.jsxs(Y8,{children:[r.jsx(Q8,{}),r.jsxs(Ji,{children:[r.jsx(K8,{src:V8,alt:"About BK Shikha - Yoga & Wellness"}),r.jsx(G8,{})]})]})]}),r.jsxs(q8,{children:[r.jsx(k.div,{variants:n,children:r.jsx(X8,{children:"Philosophy"})}),r.jsx(k.div,{variants:n,children:r.jsx(J8,{children:"Our Story"})}),r.jsx(k.div,{variants:n,children:r.jsx(e$,{children:"Discover the journey behind BK Shikha's wellness mission"})}),r.jsx(k.div,{variants:n,children:r.jsx(Fu,{children:"BK Shikha is a dedicated Holistic Wellness Coach with over 12 years in Yoga and 15 years in Meditation. As a certified NLP Practitioner, Gut Health Expert, and Counselor, she specializes in mind-body healing, supporting children, teenagers, and adults through stress, anxiety, emotional wellness, and relationship challenges."})}),r.jsx(k.div,{variants:n,children:r.jsx(Fu,{children:"Her holistic approach combines ancient wisdom with modern science. True healing begins with the mind — when calm and balanced, the body naturally transforms, empowering long-term physical, mental, and emotional well-being."})}),r.jsx(k.div,{variants:n,children:r.jsx(t$,{to:"/philosophy",children:"Learn about our holistic approach"})})]})]})]})},O8=l.section`
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
`,_8=l.div`
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
`,H8=l.div`
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
`,Z8=l.div`
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
`,ho=l.div`
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
`,pd=l.div`
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
`,U8=l.div`
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
`,Y8=l.div`
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
`,Q8=l.div`
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
`,G8=l.div`
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
`,K8=l.img`
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
`,q8=l.div`
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
`,X8=l.span`
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
`,J8=l.h2`
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
`,e$=l.h3`
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
`,t$=l(V)`
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
`,i$=()=>r.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("path",{d:"M32 8v8M32 48v8M8 32h8M48 32h8",strokeLinecap:"round"}),r.jsx("circle",{cx:"32",cy:"32",r:"20"}),r.jsx("path",{d:"M32 20v12l8 8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M20 12l4 4M44 12l-4 4M20 52l4-4M44 52l-4-4",strokeLinecap:"round"})]}),n$=()=>r.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("circle",{cx:"32",cy:"16",r:"8"}),r.jsx("path",{d:"M32 24v8",strokeLinecap:"round"}),r.jsx("path",{d:"M24 36c0-4.4 3.6-8 8-8s8 3.6 8 8",strokeLinecap:"round"}),r.jsx("path",{d:"M20 44h24",strokeLinecap:"round"}),r.jsx("path",{d:"M16 52h32",strokeLinecap:"round"}),r.jsx("circle",{cx:"32",cy:"36",r:"4",fill:"currentColor",opacity:"0.3"})]}),r$=()=>r.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("circle",{cx:"32",cy:"12",r:"6"}),r.jsx("path",{d:"M32 18v14",strokeLinecap:"round"}),r.jsx("path",{d:"M32 32l-16 20",strokeLinecap:"round"}),r.jsx("path",{d:"M32 32l16 20",strokeLinecap:"round"}),r.jsx("path",{d:"M20 28l12 4l12-4",strokeLinecap:"round",strokeLinejoin:"round"})]}),a$=()=>r.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("ellipse",{cx:"32",cy:"52",rx:"12",ry:"4"}),r.jsx("ellipse",{cx:"32",cy:"40",rx:"10",ry:"3.5"}),r.jsx("ellipse",{cx:"32",cy:"30",rx:"8",ry:"3"}),r.jsx("ellipse",{cx:"32",cy:"22",rx:"5",ry:"2"})]}),o$=()=>r.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("path",{d:"M20 56h24c2 0 4-2 4-4V28c0-8-8-16-16-16S16 20 16 28v24c0 2 2 4 4 4z"}),r.jsx("path",{d:"M24 56v-8c0-2 2-4 4-4h8c2 0 4 2 4 4v8"}),r.jsx("path",{d:"M28 20c-4 4-4 8 0 12",strokeLinecap:"round"}),r.jsx("path",{d:"M36 20c4 4 4 8 0 12",strokeLinecap:"round"})]}),s$=()=>r.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("circle",{cx:"32",cy:"14",r:"6"}),r.jsx("path",{d:"M32 20v6",strokeLinecap:"round"}),r.jsx("path",{d:"M22 32c0-5.5 4.5-10 10-10s10 4.5 10 10",strokeLinecap:"round"}),r.jsx("path",{d:"M22 32v8c0 6 4 12 10 12s10-6 10-12v-8",strokeLinecap:"round"}),r.jsx("circle",{cx:"32",cy:"38",r:"6",fill:"currentColor",opacity:"0.2"})]}),l$=[{icon:i$,title:"Flexible Time",description:"Practice yoga at your own pace with sessions designed to fit your busy lifestyle and schedule."},{icon:n$,title:"Reduce Stress",description:"Learn powerful techniques to calm your mind, release tension, and find inner peace."},{icon:r$,title:"Many Yoga Styles",description:"Explore various yoga traditions from gentle Hatha to dynamic Vinyasa and restorative practices."},{icon:a$,title:"Life Balancing",description:"Achieve harmony between work, relationships, and personal growth through mindful living."},{icon:o$,title:"Health Tips",description:"Receive guidance on nutrition, sleep, and daily habits that support your wellness journey."},{icon:s$,title:"Life Consultation",description:"Get personalized coaching to overcome challenges and align with your true purpose."}],d$=()=>{const e=j.useRef(null),t=N(e,{once:!0,amount:.2}),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}};return r.jsxs(c$,{ref:e,children:[r.jsx(m$,{children:r.jsx("svg",{viewBox:"0 0 1440 120",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,120 C480,0 960,0 1440,120 L1440,0 L0,0 Z",fill:"#f8f9f6"})})}),r.jsxs(h$,{as:k.div,variants:i,initial:"hidden",animate:t?"visible":"hidden",children:[r.jsxs(p$,{children:[r.jsx(k.div,{variants:n,children:r.jsx(u$,{children:"Services"})}),r.jsx(k.div,{variants:n,children:r.jsx(f$,{children:"What we offer to you"})}),r.jsx(k.div,{variants:n,children:r.jsx(g$,{children:"Discover transformative practices that nurture your body, calm your mind, and elevate your spirit on this beautiful journey of self-discovery."})})]}),r.jsx(x$,{children:l$.map((a,o)=>r.jsxs(Go,{as:k.div,variants:n,children:[r.jsx(w$,{children:r.jsx(a.icon,{})}),r.jsx(y$,{children:a.title}),r.jsx(v$,{children:a.description})]},o))}),r.jsx(b$,{as:k.div,variants:n,children:r.jsx(k$,{to:"/services",children:"View All Services"})})]})]})},c$=l.section`
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
`,m$=l.div`
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
`,h$=l.div`
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
`,p$=l.div`
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
`,u$=l.span`
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
`,f$=l.h2`
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
`,g$=l.p`
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
`,x$=l.div`
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
`,Go=l.div`
  text-align: center;
  transform: translateZ(0);
  backface-visibility: hidden;
`,w$=l.div`
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

  ${Go}:hover & {
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
    ${Go}:hover & {
      transform: translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color 0.3s ease;
    
    ${Go}:hover & {
      transform: translateZ(0);
    }
  }
`,y$=l.h3`
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
`,v$=l.p`
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
`,b$=l.div`
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
`,k$=l(V)`
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
`;function Wu(e){return U({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}const j$=[{title:"Yoga & Meditation",description:"12+ years of Yoga and 15+ years of Meditation expertise"},{title:"NLP Coaching",description:"Mind coaching using Neuro-Linguistic Programming tools"},{title:"Counseling",description:"Professional support for children, teenagers, and adults"},{title:"Stress & Anxiety Relief",description:"Holistic approach to emotional wellness and balance"}],$$=[{title:"Gut Health Expert",description:"Digestive wellness and metabolism improvement programs"},{title:"Weight Management",description:"Sustainable, healthy weight loss and transformation"},{title:"Relationship Healing",description:"Emotional wellness and relationship counseling support"},{title:"Lifestyle Transformation",description:"Mindful nutrition and habit correction guidance"}],S$=()=>{const e=j.useRef(null),t=N(e,{once:!0,amount:.2});return r.jsx(C$,{ref:e,children:r.jsxs(z$,{children:[r.jsxs(T$,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.6},children:[r.jsx(P$,{children:"Areas of Expertise"}),r.jsx(M$,{children:"Comprehensive Wellness Services"}),r.jsx(A$,{children:"BK Shikha offers a complete range of holistic wellness services combining yoga, meditation, mindfulness practices, NLP tools, stress management, counseling, gut health correction, and sustainable weight management. Her approach empowers long-term physical, mental, and emotional well-being."})]}),r.jsxs(L$,{children:[r.jsx(E$,{children:j$.map((i,n)=>r.jsxs(Du,{initial:{opacity:0,x:-30},animate:t?{opacity:1,x:0}:{},transition:{duration:.5,delay:.2+n*.1},children:[r.jsxs(Vu,{$align:"right",children:[r.jsx(Nu,{children:i.title}),r.jsx(Ou,{children:i.description})]}),r.jsx(_u,{initial:{scale:0},animate:t?{scale:1}:{},transition:{duration:.3,delay:.4+n*.1},children:r.jsx(Wu,{})})]},n))}),r.jsx(R$,{initial:{opacity:0,scale:.8},animate:t?{opacity:1,scale:1}:{},transition:{duration:.8,delay:.3},children:r.jsx(B$,{src:"/more images/bk shikha yoga pose 3.png",alt:"BK Shikha Yoga Pose"})}),r.jsx(I$,{children:$$.map((i,n)=>r.jsxs(Du,{initial:{opacity:0,x:30},animate:t?{opacity:1,x:0}:{},transition:{duration:.5,delay:.2+n*.1},children:[r.jsx(_u,{initial:{scale:0},animate:t?{scale:1}:{},transition:{duration:.3,delay:.4+n*.1},children:r.jsx(Wu,{})}),r.jsxs(Vu,{$align:"left",children:[r.jsx(Nu,{children:i.title}),r.jsx(Ou,{children:i.description})]})]},n))})]})]})})},C$=l.section`
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
`,z$=l.div`
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
`,T$=l(k.div)`
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
`,P$=l.p`
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
`,M$=l.h2`
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
`,A$=l.p`
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
`,L$=l.div`
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
`,E$=l.div`
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
`,I$=l.div`
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
`,R$=l(k.div)`
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
`,B$=l.img`
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
`,Du=l(k.div)`
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
`,_u=l(k.div)`
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
`,F$=[{image:"/new images/online meditation (2).png",price:"₹999",title:"Online Meditation"},{image:"/new images/yoga at home (2).png",price:"₹1,499",title:"Yoga at Home",imagePosition:"center 20%"},{image:"/new images/couple yoga (2).png",price:"₹2,499",title:"Couple Yoga"},{image:"/new images/morning .png",price:"₹799",title:"Morning Flow"},{image:"/new images/stress relief (2).png",price:"₹1,299",title:"Stress Relief"},{image:"/new images/private session (2).png",price:"₹1,999",title:"Private Session"}],W$=()=>{const e=j.useRef(null),t=N(e,{once:!0,amount:.2}),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}};return r.jsxs(D$,{ref:e,children:[r.jsx(V$,{children:r.jsxs("svg",{viewBox:"0 0 200 400",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M100 20C100 20 180 100 180 200C180 300 100 380 100 380",stroke:"#d4e5d6",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100 60C100 60 150 120 150 200C150 280 100 340 100 340",stroke:"#d4e5d6",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M100 100C100 100 130 140 130 200C130 260 100 300 100 300",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M60 120C60 120 100 160 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M140 120C140 120 100 160 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M50 180C50 180 100 200 100 200",stroke:"#d4e5d6",strokeWidth:"0.6",fill:"none"}),r.jsx("path",{d:"M150 180C150 180 100 200 100 200",stroke:"#d4e5d6",strokeWidth:"0.6",fill:"none"}),r.jsx("path",{d:"M60 260C60 260 100 240 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M140 260C140 260 100 240 100 200",stroke:"#d4e5d6",strokeWidth:"0.8",fill:"none"})]})}),r.jsxs(N$,{as:k.div,variants:i,initial:"hidden",animate:t?"visible":"hidden",children:[r.jsxs(O$,{children:[r.jsx(k.div,{variants:n,children:r.jsx(_$,{children:"Our Classes"})}),r.jsx(k.div,{variants:n,children:r.jsx(H$,{children:"Most Favorite Classes"})}),r.jsx(k.div,{variants:n,children:r.jsx(Z$,{children:"Discover our most popular yoga and wellness classes designed to nurture your mind, body, and spirit on your journey to inner peace."})})]}),r.jsx(U$,{children:F$.map((a,o)=>r.jsxs(jn,{as:k.div,variants:n,whileHover:{y:-8},children:[r.jsx(Y$,{children:r.jsx(Q$,{src:a.image,alt:a.title,loading:"lazy",style:{objectPosition:a.imagePosition??"center"}})}),r.jsxs(G$,{children:[r.jsx(K$,{children:a.title}),r.jsxs(q$,{to:"/contact",children:["Book Now ",r.jsx(me,{})]})]})]},o))})]})]})},D$=l.section`
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
`,V$=l.div`
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
`,N$=l.div`
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
`,O$=l.div`
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
`,_$=l.span`
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
`,H$=l.h2`
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
`,Z$=l.p`
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
`,U$=l.div`
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
`,Y$=l.div`
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
`,Q$=l.img`
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
`,G$=l.div`
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
`;const K$=l.h3`
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
`,q$=l(V)`
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
`,X$=(e,t=2e3,i=!1)=>{const[n,a]=j.useState(0);return j.useEffect(()=>{if(!i)return;let o,s;const c=m=>{o||(o=m);const h=Math.min((m-o)/t,1);a(Math.floor(h*e)),h<1&&(s=requestAnimationFrame(c))};return s=requestAnimationFrame(c),()=>cancelAnimationFrame(s)},[e,t,i]),n},J$=[{number:20,suffix:"+",label:"Yoga Style",sublabel:"Workout"},{number:50,suffix:"+",label:"Professionals",sublabel:"Trainer"},{number:25,suffix:"+",label:"Year",sublabel:"Experience"},{number:90,suffix:"%",label:"Happy",sublabel:"Customer"}],e9=()=>{const e=j.useRef(null),t=j.useRef(null),i=N(e,{once:!0,amount:.3}),n=N(t,{once:!0,amount:.5}),a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.1}}},o={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}},s={hidden:{opacity:0,x:50},visible:{opacity:1,x:0,transition:{duration:.8,ease:[.25,.1,.25,1]}}};return r.jsxs(i9,{ref:e,children:[r.jsx(n9,{children:r.jsxs("svg",{viewBox:"0 0 200 400",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M80 380C80 380 20 300 30 200C40 100 100 40 100 40",stroke:"#a8c5a4",strokeWidth:"3",fill:"none"}),r.jsx("path",{d:"M100 40C100 40 140 80 150 140C160 200 140 280 100 340",stroke:"#a8c5a4",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M50 120C50 120 80 140 100 140",stroke:"#a8c5a4",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M40 180C40 180 70 180 100 160",stroke:"#a8c5a4",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M50 240C50 240 80 220 100 200",stroke:"#a8c5a4",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M60 300C60 300 85 270 100 250",stroke:"#a8c5a4",strokeWidth:"2",fill:"none"}),r.jsx("ellipse",{cx:"100",cy:"120",rx:"40",ry:"60",stroke:"#a8c5a4",strokeWidth:"1.5",fill:"none",opacity:"0.5"}),r.jsx("ellipse",{cx:"90",cy:"200",rx:"35",ry:"50",stroke:"#a8c5a4",strokeWidth:"1.5",fill:"none",opacity:"0.4"}),r.jsx("ellipse",{cx:"85",cy:"280",rx:"30",ry:"45",stroke:"#a8c5a4",strokeWidth:"1.5",fill:"none",opacity:"0.3"})]})}),r.jsx(r9,{children:r.jsxs("svg",{viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"150",cy:"50",r:"25",stroke:"#e8efe9",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M150 75V120",stroke:"#e8efe9",strokeWidth:"1"}),r.jsx("path",{d:"M150 120L100 180",stroke:"#e8efe9",strokeWidth:"1"}),r.jsx("path",{d:"M150 120L200 180",stroke:"#e8efe9",strokeWidth:"1"}),r.jsx("path",{d:"M120 100L180 100",stroke:"#e8efe9",strokeWidth:"1"}),r.jsx("path",{d:"M100 180L80 250",stroke:"#e8efe9",strokeWidth:"1"}),r.jsx("path",{d:"M200 180L220 250",stroke:"#e8efe9",strokeWidth:"1"})]})}),r.jsxs(a9,{as:k.div,variants:a,initial:"hidden",animate:i?"visible":"hidden",children:[r.jsxs(o9,{children:[r.jsxs(s9,{children:[r.jsx(k.div,{variants:o,children:r.jsx(l9,{children:"Fun Facts"})}),r.jsx(k.div,{variants:o,children:r.jsx(d9,{children:"Why We Are Better"})}),r.jsx(k.div,{variants:o,children:r.jsx(c9,{children:"With years of experience in yogic practices and holistic wellness, we bring authentic teachings that transform lives. Our approach combines ancient wisdom with modern understanding to create lasting positive change in your journey to wellness."})}),r.jsx(k.div,{variants:o,children:r.jsx(m9,{to:"/contact",children:"Join Now"})})]}),r.jsxs(h9,{as:k.div,variants:s,children:[r.jsx(Hu,{className:"top",children:[...Array(15)].map((c,m)=>r.jsx(Zu,{style:{left:`${m%5*14}px`,top:`${Math.floor(m/5)*14}px`}},m))}),r.jsx(p9,{children:r.jsx("svg",{viewBox:"0 0 500 500",preserveAspectRatio:"none",children:r.jsx("path",{d:"M400,250Q420,350,350,420Q280,490,180,450Q80,410,60,310Q40,210,100,130Q160,50,260,70Q360,90,400,170Q440,250,400,250Z",fill:"#3d5a40"})})}),r.jsx(u9,{children:r.jsx("svg",{viewBox:"0 0 200 200",preserveAspectRatio:"none",children:r.jsx("circle",{cx:"100",cy:"100",r:"80",fill:"#8ecfb3"})})}),r.jsx(f9,{children:r.jsx(g9,{src:"/yoga-gallery/another video.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0})}),r.jsx(Hu,{className:"bottom",children:[...Array(12)].map((c,m)=>r.jsx(Zu,{style:{left:`${m%4*14}px`,top:`${Math.floor(m/4)*14}px`}},m))})]})]}),r.jsx(x9,{ref:t,children:J$.map((c,m)=>r.jsxs(w9,{children:[r.jsxs(y9,{children:[r.jsx(t9,{end:c.number,isInView:n}),r.jsx(v9,{children:c.suffix})]}),r.jsx(b9,{children:c.label}),r.jsx(k9,{children:c.sublabel})]},m))})]})]})},t9=({end:e,isInView:t})=>{const i=X$(e,2e3,t);return r.jsx(r.Fragment,{children:i})},i9=l.section`
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
`,n9=l.div`
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
`,r9=l.div`
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
`,a9=l.div`
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
`,o9=l.div`
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
`,s9=l.div`
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
`,l9=l.span`
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
`,d9=l.h2`
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
`,c9=l.p`
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
`,m9=l(V)`
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
`,h9=l.div`
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
`,Zu=l.div`
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
`,p9=l.div`
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
`,u9=l.div`
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
`,f9=l.div`
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
`,g9=l.video`
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
`;const x9=l.div`
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
`,w9=l.div`
  text-align: left;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: ${d.breakpoints.tablet}) {
    text-align: center;
  }
`,y9=l.div`
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
`,v9=l.span`
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
`,b9=l.div`
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
`,k9=l.div`
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

We'll explore practical tips for mindful eating, the best foods to support your yoga practice, and how to develop a healthy, balanced relationship with nutrition. Discover how your plate can become an extension of your yoga mat, supporting your journey toward complete wellness.`,author:"BK Shikha",date:"2026-01-20",category:"Nutrition",image:"/6 images/mindful eating.png",readTime:"6 min read"}],j9=(e=3)=>F0.sort((t,i)=>new Date(i.date)-new Date(t.date)).slice(0,e),$9=e=>F0.find(t=>t.slug===e),S9=(e,t=3)=>F0.filter(i=>i.slug!==e).slice(0,t),Bs=({children:e,subtitle:t,align:i="center",color:n="primary",maxWidth:a,className:o})=>r.jsxs(C9,{as:k.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,ease:"easeOut"},$align:i,$maxWidth:a,className:o,children:[t&&r.jsx(z9,{children:t}),r.jsx(T9,{$color:n,children:e})]}),C9=l.div`
  text-align: ${e=>e.$align};
  max-width: ${e=>e.$maxWidth||"100%"};
  margin: ${e=>e.$align==="center"?"0 auto 3rem":"0 0 3rem"};

  @media (max-width: ${d.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }
`,z9=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${d.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 1rem;
`,T9=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 600;
  color: ${e=>{switch(e.$color){case"secondary":return d.colors.secondary;case"accent":return d.colors.accent;case"text":return d.colors.text;default:return d.colors.primary}}};
  line-height: 1.2;
  margin: 0;
`,Uu=({children:e,delay:t=0,duration:i=.6,direction:n="up",className:a,...o})=>{const s=j.useRef(null),[c,m]=j.useState(!1),[h,u]=j.useState(!1);j.useEffect(()=>{const b=window.matchMedia("(prefers-reduced-motion: reduce)");m(b.matches);const C=y=>m(y.matches);return b.addEventListener("change",C),()=>b.removeEventListener("change",C)},[]),j.useEffect(()=>{const b=()=>{u(window.innerWidth<=900)};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]);const f=N(s,{once:!0,margin:h?"-50px":"-100px"}),g=h?20:40,v={hidden:{opacity:c?1:0,y:c?0:n==="up"?g:n==="down"?-g:0,x:c?0:n==="left"?g:n==="right"?-g:0},visible:{opacity:1,y:0,x:0,transition:c?{duration:0}:{duration:h?Math.min(i,.4):i,delay:h?Math.min(t,.1):t,ease:[.4,0,.2,1]}}};return r.jsx(P9,{ref:s,initial:"hidden",animate:f?"visible":"hidden",variants:v,className:a,$prefersReducedMotion:c,...o,children:e})},P9=l(k.div)`
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
`,M9=()=>{const[e,t]=j.useState(null),i=j9(3);return j.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),!i||i.length===0?null:r.jsxs(r.Fragment,{children:[r.jsx(A9,{children:r.jsxs("div",{className:"container",children:[r.jsx(Uu,{children:r.jsx(Bs,{subtitle:"Latest Insights",title:"From the Blog",description:"Explore the latest thoughts on mindfulness, wellness, and personal growth"})}),r.jsx(L9,{children:i.map((n,a)=>r.jsx(Uu,{delay:.1+a*.1,children:r.jsxs(Ot,{as:k.article,whileHover:{y:-8},transition:{duration:.3},onClick:()=>t(n),children:[r.jsxs(E9,{children:[r.jsx(I9,{src:n.image,alt:n.title}),r.jsx(R9,{children:n.category})]}),r.jsxs(B9,{children:[r.jsxs(F9,{children:[r.jsxs(po,{children:[r.jsx(Ms,{size:14}),r.jsx("span",{children:new Date(n.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})})]}),r.jsxs(po,{children:[r.jsx(ba,{size:14}),r.jsx("span",{children:n.readTime})]})]}),r.jsx(W9,{children:n.title}),r.jsx(D9,{children:n.excerpt}),r.jsxs(V9,{as:k.div,whileHover:{x:4},transition:{duration:.2},children:[r.jsx("span",{children:"Read Article"}),r.jsx(me,{})]})]})]})},n.id))})]})}),r.jsx(Bt,{children:e&&r.jsxs(N9,{children:[r.jsx(O9,{as:k.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:()=>t(null)}),r.jsx(_9,{as:k.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.3},onClick:n=>n.stopPropagation(),children:r.jsxs(H9,{children:[r.jsxs(Z9,{children:[r.jsx(U9,{children:e.category}),r.jsx(Y9,{onClick:()=>t(null),"aria-label":"Close modal",children:r.jsx(cl,{size:24})})]}),r.jsx(Q9,{src:e.image,alt:e.title}),r.jsxs(G9,{children:[r.jsxs(K9,{children:[r.jsxs(po,{children:[r.jsx(Ms,{size:16}),r.jsx("span",{children:new Date(e.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})})]}),r.jsxs(po,{children:[r.jsx(ba,{size:16}),r.jsx("span",{children:e.readTime})]})]}),r.jsx(q9,{children:e.title}),r.jsx(X9,{children:e.content})]})]})})]})})]})},A9=l.section`
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
`,L9=l.div`
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
`,Ot=l.article`
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
`,E9=l.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/10;
  width: 100%;
  background: ${d.colors.backgroundAlt};
`,I9=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  ${Ot}:hover & {
    transform: scale(1.08) translateZ(0);
  }

  @media (max-width: ${d.breakpoints.tablet}) {
    transition: transform 0.3s ease;
    
    ${Ot}:hover & {
      transform: scale(1.05) translateZ(0);
    }
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    ${Ot}:hover & {
      transform: scale(1.03) translateZ(0);
    }
  }

  @media (hover: none) and (pointer: coarse) {
    ${Ot}:hover & {
      transform: translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    ${Ot}:hover & {
      transform: translateZ(0);
    }
  }
`,R9=l.span`
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
`,B9=l.div`
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
`,F9=l.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,po=l.div`
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
`,W9=l.h3`
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
`,D9=l.p`
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
`,V9=l.div`
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

  ${Ot}:hover & svg {
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
    ${Ot}:hover & svg {
      transform: translateX(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
    
    ${Ot}:hover & svg {
      transform: translateX(0);
    }
  }
`,N9=l.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  
  > * {
    pointer-events: auto;
  }
`,O9=l.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 9999;
`,_9=l.div`
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
`,H9=l.div`
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
`,Z9=l.div`
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
`,U9=l.span`
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
`,Y9=l.button`
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
`,Q9=l.img`
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
`,G9=l.div`
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
`,K9=l.div`
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
`,q9=l.h2`
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
`,X9=l.p`
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
`,J9=[{id:1,image:"/6 images/ig 1.heic.jpeg",alt:"Best Morning Routine Recipe"},{id:2,image:"/6 images/ig 2.jpg.jpeg",alt:"Create your Destiny - BK Shikha"},{id:3,image:"/6 images/ig 6.jpg.jpeg",alt:"Where do you feel tension"},{id:4,image:"/6 images/ig 4.jpg.jpeg",alt:"Myth vs Fact - Healthy Food"},{id:5,image:"/6 images/ig 5.jpg.jpeg",alt:"Create Your Destiny"},{id:6,image:"/6 images/ig 3.jpg.jpeg",alt:"How to rewire your Mind"}],eS=()=>{const e=j.useRef(null),t=N(e,{once:!0,amount:.2}),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}};return r.jsxs(aS,{ref:e,children:[r.jsx(oS,{className:"left",children:r.jsxs("svg",{viewBox:"0 0 150 300",fill:"none",children:[r.jsx("path",{d:"M75 0C75 0 15 75 15 150C15 225 75 300 75 300C75 300 135 225 135 150C135 75 75 0 75 0Z",fill:"#e8f0e9"}),r.jsx("path",{d:"M75 30V270",stroke:"#c5ddc8",strokeWidth:"1.5"}),r.jsx("path",{d:"M75 80L40 120",stroke:"#c5ddc8",strokeWidth:"1"}),r.jsx("path",{d:"M75 140L45 180",stroke:"#c5ddc8",strokeWidth:"1"}),r.jsx("path",{d:"M75 200L50 240",stroke:"#c5ddc8",strokeWidth:"1"}),r.jsx("path",{d:"M75 80L110 120",stroke:"#c5ddc8",strokeWidth:"1"}),r.jsx("path",{d:"M75 140L105 180",stroke:"#c5ddc8",strokeWidth:"1"}),r.jsx("path",{d:"M75 200L100 240",stroke:"#c5ddc8",strokeWidth:"1"})]})}),r.jsx(Yu,{className:"top-left",children:[...Array(12)].map((a,o)=>r.jsx(Qu,{style:{left:`${o%4*14}px`,top:`${Math.floor(o/4)*14}px`}},o))}),r.jsx(Yu,{className:"bottom-right",children:[...Array(15)].map((a,o)=>r.jsx(Qu,{style:{left:`${o%5*14}px`,top:`${Math.floor(o/5)*14}px`}},o))}),r.jsxs(sS,{as:k.div,variants:i,initial:"hidden",animate:t?"visible":"hidden",children:[r.jsxs(lS,{children:[r.jsx(k.div,{variants:n,children:r.jsx(dS,{children:"Community"})}),r.jsx(k.div,{variants:n,children:r.jsx(cS,{children:"Join Our Wellness Family"})}),r.jsx(k.div,{variants:n,children:r.jsx(mS,{children:"Connect with like-minded souls on the path to inner peace and holistic wellbeing"})})]}),r.jsx(hS,{as:k.div,variants:n,children:r.jsxs(pS,{children:[r.jsxs(uS,{children:[r.jsx(fS,{children:"INSTAGRAM"}),r.jsxs(gS,{href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer",children:[r.jsx(rn,{}),r.jsx("span",{children:"@cyd_bkshikha"})]}),r.jsx(xS,{children:"Follow for daily wellness inspiration"})]}),r.jsx(wS,{children:r.jsx(yS,{children:J9.map((a,o)=>r.jsxs(Gt,{as:k.a,href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-8,scale:1.02},transition:{duration:.3},style:{"--delay":`${o*.1}s`},className:`item-${o+1}`,children:[r.jsx(vS,{src:a.image,alt:a.alt,loading:"lazy"}),r.jsx(bS,{children:r.jsxs("svg",{viewBox:"0 0 100 100",children:[r.jsx("circle",{cx:"50",cy:"50",r:"30",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.6"}),r.jsx("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.6"}),r.jsx("circle",{cx:"50",cy:"50",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.6"}),r.jsx("path",{d:"M50,20 L65,35 L65,65 L50,80 L35,65 L35,35 Z",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.4"})]})}),r.jsxs(kS,{children:[r.jsx(jS,{children:r.jsx(rn,{})}),r.jsx($S,{children:r.jsxs(SS,{children:[r.jsx(mt,{})," 234"]})}),r.jsx(CS,{className:"ripple"})]})]},a.id))})})]})}),r.jsxs(zS,{as:k.div,variants:n,children:[r.jsxs(ud,{children:[r.jsx(fd,{className:"green",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})})}),r.jsx(gd,{children:"Daily Inspiration"}),r.jsx(xd,{children:"Wellness tips, yoga motivation & emotional healing guidance every day"})]}),r.jsxs(ud,{children:[r.jsx(fd,{className:"golden",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),r.jsx("circle",{cx:"9",cy:"7",r:"4"}),r.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),r.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),r.jsx(gd,{children:"Supportive Circle"}),r.jsx(xd,{children:"Connect with like-minded individuals on similar wellness journeys"})]}),r.jsxs(ud,{children:[r.jsx(fd,{className:"mint",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),r.jsx("path",{d:"M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"})]})}),r.jsx(gd,{children:"Exclusive Events"}),r.jsx(xd,{children:"Access workshops, group sessions, and special wellness challenges"})]})]}),r.jsx(TS,{as:k.div,variants:n,children:r.jsxs(PS,{children:[r.jsxs(MS,{children:[r.jsx(AS,{children:"Ready to Start Your Journey?"}),r.jsx(LS,{children:"Join thousands who have transformed their lives through yoga, mindfulness, and holistic wellness practices."}),r.jsxs(ES,{children:[r.jsxs(IS,{href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer",children:[r.jsx(rn,{}),"Follow on Instagram"]}),r.jsxs(RS,{to:"/contact",children:["Book a Session",r.jsx(me,{})]})]})]}),r.jsx(BS,{children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",children:[r.jsx("circle",{cx:"100",cy:"100",r:"80",stroke:"#c9a227",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.3"}),r.jsx("circle",{cx:"100",cy:"100",r:"60",stroke:"#5a8a62",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.4"}),r.jsx("circle",{cx:"100",cy:"100",r:"40",stroke:"#c9a227",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.5"})]})})]})})]})]})},tS=ni`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
`,iS=ni`
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`,nS=ni`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,rS=ni`
  0%, 100% { box-shadow: 0 0 20px rgba(201, 162, 39, 0.3), 0 0 40px rgba(90, 138, 98, 0.2); }
  25% { box-shadow: 0 0 25px rgba(90, 138, 98, 0.4), 0 0 50px rgba(201, 162, 39, 0.3); }
  50% { box-shadow: 0 0 30px rgba(142, 207, 179, 0.4), 0 0 60px rgba(90, 138, 98, 0.3); }
  75% { box-shadow: 0 0 25px rgba(201, 162, 39, 0.4), 0 0 50px rgba(142, 207, 179, 0.3); }
`,aS=l.section`
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
`,oS=l.div`
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
`,sS=l.div`
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
`,lS=l.div`
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
`,dS=l.span`
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
`,cS=l.h2`
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
`,mS=l.p`
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
`,hS=l.div`
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
`,pS=l.div`
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
`,uS=l.div`
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
`,fS=l.h2`
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
`,gS=l.a`
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
`,xS=l.p`
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
`,wS=l.div`
  flex: 1;
  position: relative;
  transform: translateZ(0);
`,yS=l.div`
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
`,Gt=l.a`
  position: relative;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.4s ease;
  animation: ${tS} 6s ease-in-out infinite;
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
    animation: ${rS} 2s ease-in-out infinite;
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
`,vS=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  ${Gt}:hover & {
    transform: scale(1.1) translateZ(0);
  }

  @media (hover: none) and (pointer: coarse) {
    ${Gt}:hover & {
      transform: translateZ(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    ${Gt}:hover & {
      transform: translateZ(0);
    }
  }
`,bS=l.div`
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
    animation: ${nS} 20s linear infinite;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  }

  ${Gt}:hover & {
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
`,kS=l.div`
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

  ${Gt}:hover & {
    opacity: 1;
  }

  @media (hover: none) and (pointer: coarse) {
    ${Gt}:hover & {
      opacity: 0;
    }
  }
`,jS=l.div`
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
`,$S=l.div`
  display: flex;
  gap: 1rem;
  transform: translateZ(0);

  @media (max-width: ${d.breakpoints.mobile}) {
    gap: 0.75rem;
  }
`,SS=l.span`
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
`,CS=l.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  opacity: 0;
  transform: translateZ(0);

  ${Gt}:hover & {
    animation: ${iS} 1.2s ease-out infinite;
  }

  @media (hover: none) and (pointer: coarse) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    ${Gt}:hover & {
      animation: none;
    }
  }
`,zS=l.div`
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
`,TS=l.div`
  transform: translateZ(0);
`,PS=l.div`
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
`,MS=l.div`
  position: relative;
  z-index: 2;
  text-align: center;
  transform: translateZ(0);
`,AS=l.h3`
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
`,LS=l.p`
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
`,ES=l.div`
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
`,IS=l.a`
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
`,RS=l(V)`
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
`,BS=l.div`
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
`,FS=()=>r.jsxs(r.Fragment,{children:[r.jsx(V7,{mediaType:"video",mediaSrc:"/yoga-gallery/d3b4c390-e5a0-42ce-9f9d-ff5a0bcc7ab4 (1).mp4",posterSrc:"/yoga-gallery/ChatGPT Image Feb 1, 2026, 01_49_50 PM.png",bgImageSrc:"/yoga-gallery/ChatGPT Image Feb 1, 2026, 01_49_50 PM.png",title:"Find Your Inner Peace",scrollToExpand:"Scroll to begin your journey",textBlend:!0}),r.jsx(r8,{}),r.jsx(N8,{}),r.jsx(d$,{}),r.jsx(w8,{}),r.jsx(S$,{}),r.jsx(W$,{}),r.jsx(e9,{}),r.jsx(M9,{}),r.jsx(eS,{})]}),Mt=[{id:1,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.06 PM.jpeg",title:"Warrior Flow",subtitle:"Strength & Balance",description:"Channeling inner strength through focused alignment"},{id:2,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.07 PM (1).jpeg",title:"Graceful Extension",subtitle:"Balance Pose",description:"Finding equilibrium between effort and ease"},{id:3,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.07 PM (2).jpeg",title:"Core Strength",subtitle:"Power Center",description:"Building stability from the inside out"},{id:4,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.07 PM.jpeg",title:"Mindful Movement",subtitle:"Flow State",description:"Where breath meets intention"},{id:5,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.08 PM (1).jpeg",title:"Dynamic Alignment",subtitle:"Precise Practice",description:"Every detail matters in the journey"},{id:6,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.08 PM.jpeg",title:"Heart Opening",subtitle:"Backbend Practice",description:"Releasing tension, embracing vulnerability"},{id:7,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.09 PM (1).jpeg",title:"Grounded Presence",subtitle:"Foundation Work",description:"Strong roots for powerful growth"},{id:8,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.09 PM.jpeg",title:"Fluid Motion",subtitle:"Vinyasa Flow",description:"Moving meditation in continuous rhythm"},{id:9,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.10 PM (1).jpeg",title:"Inner Focus",subtitle:"Concentration",description:"The mind leads, the body follows"},{id:10,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.10 PM.jpeg",title:"Serene Strength",subtitle:"Calm Power",description:"Finding peace within the practice"},{id:11,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.11 PM (1).jpeg",title:"Deep Stretch",subtitle:"Flexibility Training",description:"Opening pathways to greater freedom"},{id:12,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.11 PM.jpeg",title:"Balance Mastery",subtitle:"Equilibrium",description:"Standing tall in stillness"},{id:13,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.12 PM (1).jpeg",title:"Peak Pose",subtitle:"Advanced Practice",description:"Reaching new heights with dedication"},{id:14,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.12 PM.jpeg",title:"Breath & Body",subtitle:"Pranayama Flow",description:"Uniting movement with conscious breathing"},{id:15,src:"/yoga-gallery/WhatsApp Unknown 2026-02-02 at 10.57.49 AM/WhatsApp Image 2026-01-31 at 12.28.13 PM.jpeg",title:"Journey Within",subtitle:"Meditative Practice",description:"Where discipline meets grace"}],WS=()=>{const[e,t]=j.useState(null),[i,n]=j.useState(0),[a,o]=j.useState(!1),s=j.useRef(null),c=N(s,{once:!0,amount:.2}),m=a?Mt:Mt.slice(0,3),h=(v,b)=>{t(v),n(b),document.body.style.overflow="hidden"},u=()=>{t(null),document.body.style.overflow="unset"},p=v=>{const b=v==="next"?(i+1)%Mt.length:(i-1+Mt.length)%Mt.length;n(b),t(Mt[b])},f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},g={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:[.25,.46,.45,.94]}}};return r.jsxs(r.Fragment,{children:[r.jsxs(DS,{ref:s,children:[r.jsx(VS,{}),r.jsx(NS,{children:r.jsxs(OS,{as:k.div,variants:f,initial:"hidden",animate:c?"visible":"hidden",children:[r.jsx(k.div,{variants:g,children:r.jsxs(_S,{children:[r.jsxs(HS,{children:[r.jsx(xu,{})," Practice Gallery"]}),r.jsx(ZS,{children:"Yoga in Motion"}),r.jsx(US,{children:"A glimpse into the daily practice — where discipline meets grace, and every pose tells a story of dedication."})]})}),r.jsx(YS,{children:m.map((v,b)=>r.jsx(Va,{as:k.div,variants:g,className:b===0?"featured":b===2?"tall":"",whileHover:{y:-8},onClick:()=>h(v,Mt.findIndex(C=>C.id===v.id)),children:r.jsxs(QS,{children:[r.jsx(GS,{src:v.src,alt:v.title,loading:"lazy",onError:C=>{C.target.style.display="none",C.target.nextSibling.style.display="flex"}}),r.jsxs(KS,{children:[r.jsx(xu,{}),r.jsxs("span",{children:["Add ",v.title]})]}),r.jsxs(qS,{children:[r.jsxs(XS,{children:[r.jsx(JS,{children:v.title}),r.jsx(eC,{children:v.subtitle})]}),r.jsx(tC,{children:r.jsx(mt,{})})]})]})},v.id))}),!a&&Mt.length>3&&r.jsx(qu,{as:k.div,variants:g,children:r.jsxs(Xu,{onClick:()=>o(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:["View More (",Mt.length-3," more poses)"]})}),a&&r.jsx(qu,{as:k.div,variants:g,children:r.jsx(Xu,{onClick:()=>o(!1),whileHover:{scale:1.05},whileTap:{scale:.95},children:"View Less"})})]})}),r.jsx(Gu,{className:"orb1"}),r.jsx(Gu,{className:"orb2"})]}),r.jsx(Bt,{children:e&&r.jsx(iC,{as:k.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:u,children:r.jsxs(nC,{as:k.div,initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{type:"spring",damping:25,stiffness:300},onClick:v=>v.stopPropagation(),children:[r.jsx(rC,{src:e.src,alt:e.title}),r.jsxs(aC,{children:[r.jsx(oC,{children:e.title}),r.jsx(sC,{children:e.subtitle}),r.jsx(lC,{children:e.description})]}),r.jsx(dC,{onClick:u,children:r.jsx(cl,{})}),r.jsx(Ku,{className:"prev",onClick:()=>p("prev"),children:r.jsx(E5,{})}),r.jsx(Ku,{className:"next",onClick:()=>p("next"),children:r.jsx(I5,{})}),r.jsxs(cC,{children:[i+1," / ",Mt.length]})]})})})]})},DS=l.section`
  position: relative;
  padding: 7rem 0 8rem;
  background: linear-gradient(180deg, #ffffff 0%, #f8faf8 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0 5rem;
  }
`,VS=l.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 20% 80%, rgba(142, 207, 179, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(90, 138, 98, 0.08) 0%, transparent 50%);
  z-index: 0;
`,NS=l.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,OS=l.div`
  position: relative;
`,_S=l.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,HS=l.span`
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
`,ZS=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.15;
  margin: 0 0 1.25rem;
`,US=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,YS=l.div`
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
`,Va=l.div`
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
`,QS=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,GS=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${Va}:hover & {
    transform: scale(1.08);
  }
`,KS=l.div`
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
`,qS=l.div`
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

  ${Va}:hover & {
    opacity: 1;
  }
`,XS=l.div`
  transform: translateY(20px);
  transition: transform 0.4s ease;

  ${Va}:hover & {
    transform: translateY(0);
  }
`,JS=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.25rem;
`,eC=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
`,tC=l.div`
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

  ${Va}:hover & {
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
`,iC=l.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,nC=l.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,rC=l.img`
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
`,aC=l.div`
  text-align: center;
  margin-top: 1.5rem;
`,oC=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.25rem;
`,sC=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 0.5rem;
`,lC=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`,dC=l.button`
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
`,cC=l.span`
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
`,Xu=l(k.button)`
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
`,uo={hero:"/more images/about hero 4.png",founder:"/597937247_619016434604924_306615671335802667_n.jpg (2).jpeg",meditation:"/more images/begin your transformation 1.png",studio:"/more images/sacred healing space 2.png"},mC=[{year:"2009",title:"The Beginning",description:"Started the journey into meditation and self-discovery practices."},{year:"2012",title:"Yoga Mastery",description:"Completed advanced yoga teacher training and began instructing."},{year:"2015",title:"NLP Certification",description:"Became a certified NLP practitioner to enhance coaching methods."},{year:"2018",title:"Holistic Expansion",description:"Integrated gut health and nutrition into wellness programs."},{year:"2021",title:"Global Reach",description:"Launched online programs reaching students worldwide."},{year:"2024",title:"Community Impact",description:"Transformed 5000+ lives through holistic wellness coaching."}],hC=[{icon:r.jsx(P0,{}),title:"Certified Yoga Instructor",org:"Yoga Alliance International"},{icon:r.jsx(ei,{}),title:"NLP Master Practitioner",org:"Society of NLP"},{icon:r.jsx(mt,{}),title:"Meditation Guide",org:"Brahma Kumaris World Spiritual University"},{icon:r.jsx(dl,{}),title:"Gut Health Expert",org:"Institute of Integrative Nutrition"},{icon:r.jsx(M0,{}),title:"Wellness Counselor",org:"NIMHANS Certified"},{icon:r.jsx(ka,{}),title:"Breathwork Facilitator",org:"Art of Living Foundation"}],fo=[{id:1,question:"Wellness Q&A - Part 1",videoUrl:"/BK Q&A 21/Q&A 1.mp4",thumbnail:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=450&fit=crop&q=80"},{id:2,question:"Wellness Q&A - Part 2",videoUrl:"/BK Q&A 21/Q&A 2.mp4",thumbnail:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop&q=80"},{id:3,question:"Wellness Q&A - Part 3",videoUrl:"/BK Q&A 21/Q&A 3.mp4",thumbnail:"https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=450&fit=crop&q=80"},{id:4,question:"Wellness Q&A - Part 4",videoUrl:"/BK Q&A 21/Q&A 4.mp4",thumbnail:"https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?w=800&h=450&fit=crop&q=80"},{id:5,question:"Wellness Q&A - Part 5",videoUrl:"/BK Q&A 21/Q&A 5.mp4",thumbnail:"https://images.unsplash.com/photo-1506126279646-a697353d3166?w=800&h=450&fit=crop&q=80"},{id:6,question:"Wellness Q&A - Part 6",videoUrl:"/BK Q&A 21/Q&A 6.mp4",thumbnail:"https://images.unsplash.com/photo-1529693662653-9d480530a697?w=800&h=450&fit=crop&q=80"},{id:7,question:"Wellness Q&A - Part 7",videoUrl:"/BK Q&A 21/Q&A 7.mp4",thumbnail:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop&q=80"},{id:8,question:"Wellness Q&A - Part 8",videoUrl:"/BK Q&A 22/Q&A 8.mp4",thumbnail:"https://images.unsplash.com/photo-1559595500-e15296bdbb48?w=800&h=450&fit=crop&q=80"},{id:9,question:"Wellness Q&A - Part 9",videoUrl:"/BK Q&A 22/Q&A 9.mp4",thumbnail:"https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&h=450&fit=crop&q=80"},{id:10,question:"Wellness Q&A - Part 10",videoUrl:"/BK Q&A 22/Q&A 10.mp4",thumbnail:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop&q=80"},{id:11,question:"Wellness Q&A - Part 11",videoUrl:"/BK Q&A 22/Q&A 11.mp4",thumbnail:"https://images.unsplash.com/photo-1540206395-68808572332f?w=800&h=450&fit=crop&q=80"},{id:12,question:"Wellness Q&A - Part 12",videoUrl:"/BK Q&A 22/Q&A 12.mp4",thumbnail:"https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=450&fit=crop&q=80"},{id:14,question:"Wellness Q&A - Part 14",videoUrl:"/BK Q&A 22/Q&A 14.mp4",thumbnail:"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&h=450&fit=crop&q=80"},{id:16,question:"Wellness Q&A - Part 16",videoUrl:"/BK Q&A 22/Q&A 16.mp4",thumbnail:"https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=450&fit=crop&q=80"},{id:17,question:"Wellness Q&A - Part 17",videoUrl:"/BK Q&A 22/Q&A 17.mp4",thumbnail:"https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&h=450&fit=crop&q=80"},{id:18,question:"Wellness Q&A - Part 18",videoUrl:"/BK Q&A 22/Q&A 18.mp4",thumbnail:"https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=800&h=450&fit=crop&q=80"},{id:20,question:"Wellness Q&A - Part 20",videoUrl:"/BK Q&A 22/Q&A 20.mp4",thumbnail:"https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&h=450&fit=crop&q=80"},{id:21,question:"Wellness Q&A - Part 21",videoUrl:"/BK Q&A 22/Q&A 21.mp4",thumbnail:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=450&fit=crop&q=80"}],pC=[{icon:r.jsx(mt,{}),title:"Root-Cause Healing",description:"We address underlying causes, not just symptoms, for lasting transformation.",color:"#5a8a62"},{icon:r.jsx(Wa,{}),title:"Mind-First Approach",description:"True healing begins with the mind. When calm, the body naturally transforms.",color:"#cec5ad"},{icon:r.jsx(rr,{}),title:"Holistic Integration",description:"Combining ancient yogic wisdom with modern science for complete well-being.",color:"#8ecfb3"},{icon:r.jsx(ka,{}),title:"Compassionate Care",description:"Every journey is unique. We provide personalized guidance with empathy.",color:"#22371b"}],uC=[{number:"15+",label:"Years Experience",icon:r.jsx(Ms,{})},{number:"5000+",label:"Lives Transformed",icon:r.jsx(rr,{})},{number:"12+",label:"Years in Yoga",icon:r.jsx(Wa,{})},{number:"98%",label:"Satisfaction",icon:r.jsx(mt,{})}],fC=()=>{const[e,t]=j.useState(null),[i,n]=j.useState(!1),a=j.useRef(null),o=j.useRef(null),s=j.useRef(null),c=j.useRef(null),m=j.useRef(null),h=j.useRef(null),u=j.useRef(null),p=N(a,{once:!0,amount:.3}),f=N(o,{once:!0,amount:.2}),g=N(s,{once:!0,amount:.2}),v=N(c,{once:!0,amount:.1}),b=N(m,{once:!0,amount:.2}),C=N(h,{once:!0,amount:.2});N(u,{once:!0,amount:.3});const y=i?fo:fo.slice(0,3),{scrollYProgress:x}=T0({target:a,offset:["start start","end start"]}),w=nr(x,[0,1],[0,200]),$=nr(x,[0,.5],[1,0]),z={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},T={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.1,.25,1]}}};return r.jsxs(gC,{children:[r.jsxs(xC,{ref:a,children:[r.jsx(wC,{style:{y:w},children:r.jsx(yC,{src:uo.hero,alt:"About Hero"})}),r.jsx(wd,{className:"orb1"}),r.jsx(wd,{className:"orb2"}),r.jsx(wd,{className:"orb3"}),r.jsx(vC,{className:"right",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(206, 197, 173, 0.4)",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(206, 197, 173, 0.4)",strokeWidth:"1"}),r.jsx("path",{d:"M60 60L30 100",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L35 160",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L40 220",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 60L90 100",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L85 160",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L80 220",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"0.8"})]})}),r.jsxs(bC,{as:k.div,style:{opacity:$},variants:z,initial:"hidden",animate:p?"visible":"hidden",children:[r.jsx(k.div,{variants:T,children:r.jsxs(kC,{children:[r.jsx(ka,{})," Discover Our Story"]})}),r.jsx(k.div,{variants:T,children:r.jsxs(jC,{children:["Where Ancient Wisdom",r.jsx("br",{}),r.jsx($C,{children:"Meets Modern Healing"})]})}),r.jsx(k.div,{variants:T,children:r.jsx(SC,{children:"A journey of 15+ years in holistic wellness, dedicated to transforming lives through the profound connection of mind, body, and soul."})}),r.jsx(k.div,{variants:T,children:r.jsx(CC,{children:uC.map((S,P)=>r.jsxs(he.Fragment,{children:[P>0&&r.jsx(MC,{}),r.jsxs(zC,{children:[r.jsx(TC,{children:S.number}),r.jsx(PC,{children:S.label})]})]},P))})})]}),r.jsx(AC,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",fill:"#ffffff"})})})]}),r.jsx(LC,{ref:o,children:r.jsx(bn,{children:r.jsxs(EC,{as:k.div,variants:z,initial:"hidden",animate:f?"visible":"hidden",children:[r.jsx(IC,{as:k.div,variants:T,children:r.jsxs(RC,{children:[r.jsx(BC,{}),r.jsx(d2,{children:r.jsx(FC,{src:uo.founder,alt:"BK Shikha - Founder & Lead Mentor",loading:"lazy"})})]})}),r.jsxs(WC,{as:k.div,variants:T,children:[r.jsx(DC,{children:"Meet Your Mentor"}),r.jsx(VC,{children:"BK Shikha"}),r.jsx(NC,{children:"Founder & Lead Mentor"}),r.jsx(OC,{children:'"Guiding souls toward inner peace through the ancient wisdom of Raja Yoga and mindful living."'}),r.jsxs(_C,{children:[r.jsxs(yd,{children:[r.jsx(vd,{children:r.jsx(P0,{})}),r.jsx(bd,{children:"Certified Raja Yoga Teacher"})]}),r.jsxs(yd,{children:[r.jsx(vd,{children:r.jsx(ei,{})}),r.jsx(bd,{children:"20+ Years Experience"})]}),r.jsxs(yd,{children:[r.jsx(vd,{children:r.jsx(rr,{})}),r.jsx(bd,{children:"10,000+ Lives Transformed"})]})]}),r.jsxs(HC,{children:[r.jsxs(af,{to:"#journey",children:["Discover My Journey",r.jsx(me,{})]}),r.jsx(of,{to:"/contact",children:"Book Consultation"})]})]})]})})}),r.jsxs(ZC,{ref:s,children:[r.jsx(bn,{children:r.jsxs(UC,{as:k.div,variants:z,initial:"hidden",animate:g?"visible":"hidden",children:[r.jsx(k.div,{variants:T,children:r.jsxs(YC,{children:[r.jsx(go,{className:"center",children:"Wellness Philosophy"}),r.jsx(xo,{className:"center",children:"Our Core Values"}),r.jsx(QC,{children:"These foundational principles guide every aspect of our approach to holistic wellness."})]})}),r.jsx(GC,{children:pC.map((S,P)=>r.jsxs(KC,{as:k.div,variants:T,whileHover:{y:-10,boxShadow:"0 25px 60px rgba(34, 55, 27, 0.15)"},transition:{duration:.3},children:[r.jsx(qC,{style:{background:S.color},children:S.icon}),r.jsx(XC,{children:S.title}),r.jsx(JC,{children:S.description})]},P))})]})}),r.jsx(ez,{children:r.jsxs("svg",{viewBox:"0 0 200 400",fill:"none",children:[r.jsx("path",{d:"M100,20 Q150,100 140,200 Q130,300 100,380",stroke:"#e8f0e9",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M100,80 Q60,120 40,100",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,140 Q55,180 30,150",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,200 Q50,240 25,200",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"})]})})]}),r.jsx(WS,{}),r.jsxs(tz,{ref:c,children:[r.jsx(hz,{children:r.jsxs("svg",{viewBox:"0 0 200 600",fill:"none",children:[r.jsxs("g",{opacity:"0.3",children:[r.jsx("path",{d:"M100,80 Q85,60 85,45 Q85,30 100,30 Q115,30 115,45 Q115,60 100,80",fill:"rgba(206, 197, 173, 0.4)"}),r.jsx("path",{d:"M100,80 Q75,70 70,60 Q65,50 75,45 Q85,40 100,50",fill:"rgba(206, 197, 173, 0.3)"}),r.jsx("path",{d:"M100,80 Q125,70 130,60 Q135,50 125,45 Q115,40 100,50",fill:"rgba(206, 197, 173, 0.3)"}),r.jsx("path",{d:"M100,80 Q90,85 85,95 Q80,105 90,110 Q100,115 100,100",fill:"rgba(206, 197, 173, 0.35)"}),r.jsx("path",{d:"M100,80 Q110,85 115,95 Q120,105 110,110 Q100,115 100,100",fill:"rgba(206, 197, 173, 0.35)"}),r.jsx("circle",{cx:"100",cy:"80",r:"8",fill:"rgba(142, 207, 179, 0.5)"})]}),r.jsxs("g",{transform:"translate(30, 250)",opacity:"0.25",children:[r.jsx("path",{d:"M30,20 Q35,15 40,20 Q45,25 40,30 Q35,35 30,30 Q25,25 30,20",stroke:"rgba(206, 197, 173, 0.6)",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M40,25 Q50,20 55,30",stroke:"rgba(206, 197, 173, 0.6)",strokeWidth:"2",fill:"none"}),r.jsx("circle",{cx:"58",cy:"28",r:"3",fill:"rgba(206, 197, 173, 0.6)"}),r.jsx("path",{d:"M20,35 Q30,40 40,35",stroke:"rgba(206, 197, 173, 0.6)",strokeWidth:"2",fill:"none"})]}),r.jsxs("g",{transform:"translate(0, 400)",opacity:"0.3",children:[r.jsx("path",{d:"M100,80 Q85,60 85,45 Q85,30 100,30 Q115,30 115,45 Q115,60 100,80",fill:"rgba(142, 207, 179, 0.4)"}),r.jsx("path",{d:"M100,80 Q75,70 70,60 Q65,50 75,45 Q85,40 100,50",fill:"rgba(142, 207, 179, 0.3)"}),r.jsx("path",{d:"M100,80 Q125,70 130,60 Q135,50 125,45 Q115,40 100,50",fill:"rgba(142, 207, 179, 0.3)"}),r.jsx("circle",{cx:"100",cy:"80",r:"8",fill:"rgba(206, 197, 173, 0.5)"})]})]})}),r.jsx(pz,{children:r.jsxs("svg",{viewBox:"0 0 200 600",fill:"none",children:[r.jsxs("g",{transform:"translate(80, 100)",opacity:"0.2",children:[r.jsx("circle",{cx:"30",cy:"15",r:"12",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M30,27 L30,50",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"2"}),r.jsx("path",{d:"M30,35 Q20,40 15,35",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M30,35 Q40,40 45,35",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M30,50 Q20,60 15,65",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M30,50 Q40,60 45,65",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"2",fill:"none"})]}),r.jsxs("g",{transform:"translate(70, 320)",opacity:"0.25",children:[r.jsx("circle",{cx:"40",cy:"40",r:"25",stroke:"rgba(142, 207, 179, 0.6)",strokeWidth:"2.5",fill:"none"}),r.jsx("path",{d:"M40,40 L40,65",stroke:"rgba(142, 207, 179, 0.6)",strokeWidth:"2.5"}),r.jsx("path",{d:"M40,40 L20,55",stroke:"rgba(142, 207, 179, 0.6)",strokeWidth:"2.5"}),r.jsx("path",{d:"M40,40 L60,55",stroke:"rgba(142, 207, 179, 0.6)",strokeWidth:"2.5"})]}),r.jsx("g",{transform:"translate(60, 480)",opacity:"0.3",children:r.jsx("path",{d:"M20,30 Q30,10 50,10 Q70,10 80,30 Q85,50 70,65 Q50,80 30,65 Q10,50 20,30",stroke:"rgba(206, 197, 173, 0.5)",strokeWidth:"3",fill:"none",strokeDasharray:"5,3"})})]})}),r.jsx(uz,{children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",children:[r.jsx("circle",{cx:"100",cy:"100",r:"80",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"1",fill:"none"}),r.jsx("circle",{cx:"100",cy:"100",r:"60",stroke:"rgba(142, 207, 179, 0.2)",strokeWidth:"1",fill:"none"}),r.jsx("circle",{cx:"100",cy:"100",r:"40",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"1",fill:"none"}),r.jsx("circle",{cx:"100",cy:"100",r:"20",stroke:"rgba(142, 207, 179, 0.2)",strokeWidth:"1",fill:"none"}),[0,45,90,135,180,225,270,315].map(S=>r.jsx("line",{x1:"100",y1:"100",x2:100+80*Math.cos(S*Math.PI/180),y2:100+80*Math.sin(S*Math.PI/180),stroke:"rgba(206, 197, 173, 0.15)",strokeWidth:"0.5"},S))]})}),r.jsx(bn,{children:r.jsxs(iz,{as:k.div,variants:z,initial:"hidden",animate:v?"visible":"hidden",children:[r.jsx(k.div,{variants:T,children:r.jsxs(nz,{children:[r.jsx(go,{className:"center light",children:"The Journey"}),r.jsx(xo,{className:"center light",children:"Milestones of Transformation"})]})}),r.jsxs(rz,{children:[mC.map((S,P)=>r.jsxs(oz,{as:k.div,variants:T,className:P%2===0?"left":"right",children:[r.jsx(lz,{children:S.year}),r.jsxs(dz,{as:k.div,whileHover:{scale:1.02},children:[r.jsx(cz,{children:S.title}),r.jsx(mz,{children:S.description})]}),r.jsx(sz,{})]},P)),r.jsx(az,{})]})]})}),r.jsx(Ju,{className:"orb1"}),r.jsx(Ju,{className:"orb2"})]}),r.jsx(fz,{ref:m,children:r.jsx(bn,{children:r.jsxs(gz,{as:k.div,variants:z,initial:"hidden",animate:b?"visible":"hidden",children:[r.jsx(k.div,{variants:T,children:r.jsxs(xz,{children:[r.jsx(go,{className:"center",children:"Certifications"}),r.jsx(xo,{className:"center",children:"Credentials & Expertise"}),r.jsx(wz,{children:"Backed by internationally recognized certifications and years of dedicated practice."})]})}),r.jsx(yz,{children:hC.map((S,P)=>r.jsxs(vz,{as:k.div,variants:T,whileHover:{y:-5},children:[r.jsx(bz,{children:S.icon}),r.jsx(kz,{children:S.title}),r.jsx(jz,{children:S.org})]},P))})]})})}),r.jsxs($z,{ref:h,children:[r.jsx(bn,{children:r.jsxs(Sz,{as:k.div,variants:z,initial:"hidden",animate:C?"visible":"hidden",children:[r.jsx(k.div,{variants:T,children:r.jsxs(Cz,{children:[r.jsx(go,{className:"center",children:"Common Questions"}),r.jsx(xo,{className:"center",children:"Wellness Q&A Videos"}),r.jsx(zz,{children:"Get answers to the most frequently asked questions about holistic wellness, yoga practice, and the healing journey."})]})}),r.jsx(Tz,{children:y.map((S,P)=>r.jsxs(c2,{as:k.div,variants:T,whileHover:{y:-5},children:[r.jsx(Pz,{children:e===S.id?r.jsx(Az,{controls:!0,autoPlay:!0,src:S.videoUrl,children:"Your browser does not support the video tag."}):r.jsxs(r.Fragment,{children:[r.jsx(Mz,{src:S.thumbnail,alt:S.question}),r.jsx(Lz,{children:r.jsx(Ez,{onClick:()=>t(S.id),whileHover:{scale:1.1},whileTap:{scale:.95},children:r.jsx(Ls,{})})})]})}),r.jsx(Iz,{children:r.jsx(Rz,{children:S.question})})]},S.id))}),!i&&fo.length>3&&r.jsx(tf,{as:k.div,variants:T,children:r.jsxs(nf,{onClick:()=>n(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:["View More (",fo.length-3," more videos)"]})}),i&&r.jsx(tf,{as:k.div,variants:T,children:r.jsx(nf,{onClick:()=>n(!1),whileHover:{scale:1.05},whileTap:{scale:.95},children:"View Less"})})]})}),r.jsx(ef,{className:"left"}),r.jsx(ef,{className:"right"})]}),r.jsx(Bz,{children:r.jsxs(Fz,{children:[r.jsx(Wz,{src:uo.studio,alt:"Wellness Studio",loading:"lazy"}),r.jsxs(Dz,{children:[r.jsxs(Vz,{children:[r.jsx(Ls,{})," Virtual & In-Person Sessions"]}),r.jsx(Nz,{children:"A Sacred Space for Healing"}),r.jsx(Oz,{children:"Whether you join us in our serene studio or connect virtually, every session is designed to create a sanctuary for your transformation."})]})]})}),r.jsxs(_z,{children:[r.jsxs(Hz,{children:[r.jsx(Zz,{children:'"'}),r.jsx(Uz,{children:"The greatest wealth is health. When we nurture our mind, the body follows, and the soul finds its true purpose."}),r.jsx(Yz,{children:"— BK Shikha"})]}),r.jsx(rf,{className:"left"}),r.jsx(rf,{className:"right"})]}),r.jsx(Qz,{children:r.jsx(bn,{children:r.jsx(Gz,{as:k.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:r.jsxs(Kz,{children:[r.jsxs(qz,{children:[r.jsx(Xz,{children:"Begin Your Transformation"}),r.jsx(Jz,{children:"Ready to Experience True Wellness?"}),r.jsx(eT,{children:"Whether you seek stress relief, emotional balance, gut health improvement, or sustainable weight management, BK Shikha is here to guide you with compassion and expertise."}),r.jsxs(tT,{children:[r.jsxs(wo,{children:[r.jsx(qi,{})," Personalized Approach"]}),r.jsxs(wo,{children:[r.jsx(qi,{})," 15+ Years Experience"]}),r.jsxs(wo,{children:[r.jsx(qi,{})," Virtual & In-Person"]}),r.jsxs(wo,{children:[r.jsx(qi,{})," Holistic Healing"]})]}),r.jsxs(iT,{children:[r.jsxs(af,{to:"/contact",children:["Book Free Consultation",r.jsx(me,{})]}),r.jsx(of,{to:"/services",children:"Explore Programs"})]})]}),r.jsx(nT,{children:r.jsx(rT,{src:uo.meditation,alt:"Start your wellness journey"})})]})})})})]})},gC=l.div`
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
`,xC=l.section`
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
`,wC=l(k.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
`;l.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.35;
`;const yC=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.35;
`;l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(34, 55, 27, 0.85) 0%,
    rgba(33, 55, 26, 0.7) 50%,
    rgba(34, 55, 27, 0.85) 100%
  );
`;const wd=l.div`
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
`,vC=l.div`
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
`,bC=l.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  padding: 0 2rem;
`,kC=l.span`
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
`,jC=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 1.5rem;
`,$C=l.span`
  color: #cec5ad;
  font-style: italic;
  font-weight: 400;
`,SC=l.p`
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
  }
`,CC=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 1.5rem;
  }
`,zC=l.div`
  text-align: center;
`,TC=l.div`
  font-family: ${d.fonts.heading};
  font-size: 2.25rem;
  font-weight: 700;
  color: #cec5ad;
  line-height: 1;
  margin-bottom: 0.25rem;

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`,PC=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,MC=l.div`
  width: 1px;
  height: 50px;
  background: rgba(206, 197, 173, 0.3);

  @media (max-width: 600px) {
    height: 40px;
  }
`,AC=l.div`
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
`,LC=l.section`
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
`,EC=l.div`
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
`,IC=l.div`
  position: relative;
`,RC=l.div`
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
`,BC=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(142, 207, 179, 0.1) 0%, rgba(90, 138, 98, 0.05) 100%);
  border-radius: 30px;
  z-index: 0;
`,d2=l.div`
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
`,FC=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.5s ease;
  
  ${d2}:hover & {
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
`;const WC=l.div``;l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
`;const DC=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 500;
  color: #6b7c6f;
  margin-bottom: 0.5rem;
`,VC=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #22371b;
  line-height: 1.1;
  margin-bottom: 0.5rem;
`,NC=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.25rem;
  font-weight: 500;
  color: #5a8a62;
  margin-bottom: 2rem;
`,OC=l.blockquote`
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
`,_C=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
`,yd=l.div`
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
`,HC=l.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,go=l.span`
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
`,xo=l.h2`
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
`;const ZC=l.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,UC=l.div``,YC=l.div`
  text-align: center;
  margin-bottom: 3rem;
`,QC=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 600px;
  margin: 1rem auto 0;
`,GC=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,KC=l.div`
  background: #f8f9f6;
  padding: 2.5rem 2rem;
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(90, 138, 98, 0.08);
`,qC=l.div`
  width: 65px;
  height: 65px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #ffffff;
  font-size: 1.5rem;
`,XC=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.75rem;
`,JC=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #6b7c6f;
`,ez=l.div`
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
`,tz=l.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #22371b 0%, #21371a 50%, #1a2d15 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,iz=l.div``,nz=l.div`
  text-align: center;
  margin-bottom: 4rem;
`,rz=l.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`,az=l.div`
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
`,oz=l.div`
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
`,sz=l.div`
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
`,lz=l.span`
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
`,dz=l.div`
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
`,cz=l.h4`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`,mz=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
`,Ju=l.div`
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
`,hz=l.div`
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
`,pz=l.div`
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
`,uz=l.div`
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
`,fz=l.section`
  padding: 6rem 0;
  background: #f8f9f6;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,gz=l.div``,xz=l.div`
  text-align: center;
  margin-bottom: 3rem;
`,wz=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 600px;
  margin: 1rem auto 0;
`,yz=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,vz=l.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(34, 55, 27, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(90, 138, 98, 0.08);
`,bz=l.div`
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
`,kz=l.h4`
  font-family: ${d.fonts.heading};
  font-size: 1.0625rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.5rem;
`,jz=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: #7a8a7a;
  margin: 0;
`,$z=l.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,Sz=l.div`
  position: relative;
  z-index: 2;
`,Cz=l.div`
  text-align: center;
  margin-bottom: 3.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,zz=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 650px;
  margin: 1rem auto 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Tz=l.div`
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
`,c2=l.div`
  background: #f8f9f6;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(34, 55, 27, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(90, 138, 98, 0.08);

  &:hover {
    box-shadow: 0 15px 40px rgba(34, 55, 27, 0.12);
  }
`,Pz=l.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: #22371b;
  overflow: hidden;
`,Mz=l.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Az=l.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
`,Lz=l.div`
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

  ${c2}:hover & {
    background: linear-gradient(
      135deg,
      rgba(34, 55, 27, 0.3),
      rgba(34, 55, 27, 0.5)
    );
  }
`,Ez=l(k.button)`
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
`,Iz=l.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`,Rz=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #22371b;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,ef=l.div`
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
`,tf=l.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`,nf=l(k.button)`
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
`,Bz=l.section`
  position: relative;
`,Fz=l.div`
  position: relative;
  height: 500px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }
`,Wz=l.img`
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
`;const Dz=l.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  max-width: 600px;
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,Vz=l.span`
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
`,Nz=l.h3`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: #000000;
  margin-bottom: 1rem;
`,Oz=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #000000;
`,_z=l.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #22371b 0%, #21371a 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
`,Hz=l.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,Zz=l.span`
  display: block;
  font-family: ${d.fonts.heading};
  font-size: 8rem;
  color: #cec5ad;
  opacity: 0.2;
  line-height: 0.5;
  margin-bottom: 1rem;
`,Uz=l.p`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 400;
  font-style: italic;
  color: white;
  line-height: 1.6;
  margin: 0 0 1.5rem;
`,Yz=l.span`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  color: #cec5ad;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,rf=l.div`
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
`,Qz=l.section`
  padding: 6rem 0;
  background: #f8f9f6;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,Gz=l.div`
  background: white;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(34, 55, 27, 0.1);
`,Kz=l.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,qz=l.div`
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`,Xz=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`,Jz=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.2;
  margin: 0 0 1rem;
`,eT=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin: 0 0 1.5rem;
`,tT=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,wo=l.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  color: #5a8a62;

  svg {
    font-size: 0.875rem;
  }
`,iT=l.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,nT=l.div`
  position: relative;
  min-height: 400px;
  border-radius: 0 40px 40px 0;
  overflow: hidden;
  margin-right: 2rem;

  @media (max-width: 900px) {
    display: none;
  }
`,rT=l.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 40px;
`;l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(34, 55, 27, 0.2), rgba(90, 138, 98, 0.1));
`;const af=l(V)`
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
`,of=l(V)`
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
`,aT="/more images/services hero.png",kn={yoga:"/more images/personalized yoga 2.png",meditation:"/more images/mindset coaching.png",mindset:"/more images/emotionall wellness 2.png",stress:"/more images/stress relief.png",wellness:"/more images/holistic transformation 2.png",confidence:"/more images/self love.png"},oT=()=>{const e=j.useRef(null),t=j.useRef(null),i=j.useRef(null),n=j.useRef(null),[a,o]=j.useState(0),s=N(e,{once:!0,amount:.3}),c=N(t,{once:!0,amount:.1}),m=N(i,{once:!0,amount:.2}),h=N(n,{once:!0,amount:.3}),{scrollYProgress:u}=T0({target:e,offset:["start start","end start"]}),p=nr(u,[0,1],[0,150]),f=nr(u,[0,.5],[1,0]),g={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},v={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.1,.25,1]}}},b=[{icon:r.jsx(dl,{}),image:kn.yoga,title:"Personalized Yoga",tagline:"Move, Breathe, Transform",shortDesc:"One-on-one sessions tailored to your body and goals",features:["Custom practice design","Flexibility & strength","Mind-body connection","Daily routine building"],price:"From ₹999",duration:"60 min sessions",color:"#22371b"},{icon:r.jsx(mt,{}),image:kn.meditation,title:"Emotional Wellness",tagline:"Heal Your Heart, Find Peace",shortDesc:"Deep emotional healing and mental balance coaching",features:["Stress & anxiety relief","Emotional clarity","Healthy coping skills","Inner peace cultivation"],price:"From ₹1,499",duration:"90 min sessions",color:"#5a8a62"},{icon:r.jsx(M0,{}),image:kn.mindset,title:"Mindset Coaching",tagline:"Reprogram Your Mind",shortDesc:"NLP techniques for breakthrough success",features:["Limiting beliefs release","Confidence building","Goal clarity","Success mindset"],price:"From ₹1,999",duration:"75 min sessions",color:"#8ecfb3"},{icon:r.jsx(Wa,{}),image:kn.stress,title:"Stress Relief",tagline:"Release Tension, Embrace Calm",shortDesc:"Guided meditation and breathwork for deep relaxation",features:["Deep relaxation","Better sleep","Worry release","Grounded state"],price:"From ₹799",duration:"45 min sessions",color:"#cec5ad"},{icon:r.jsx(_6,{}),image:kn.wellness,title:"Holistic Transformation",tagline:"Complete Life Redesign",shortDesc:"Comprehensive program for total mind-body-spirit wellness",features:["Lifestyle redesign","Energy & vitality","Purpose discovery","Lasting change"],price:"From ₹4,999",duration:"3-12 month programs",color:"#21371a"},{icon:r.jsx(Q6,{}),image:kn.confidence,title:"Self-Love Journey",tagline:"Become Your Best Self",shortDesc:"Build unshakeable confidence and self-acceptance",features:["Self-esteem boost","Boundary setting","Authentic expression","Self-acceptance"],price:"From ₹1,299",duration:"60 min sessions",color:"#7fb88a"}],C=[{number:"01",title:"Discovery Call",desc:"Free 15-min consultation to understand your needs"},{number:"02",title:"Personalized Plan",desc:"Custom program designed for your unique journey"},{number:"03",title:"Begin Practice",desc:"Start your transformation with guided sessions"},{number:"04",title:"Evolve & Grow",desc:"Ongoing support as you blossom into your best self"}];return r.jsxs(sT,{children:[r.jsxs(lT,{ref:e,children:[r.jsx(jd,{className:"orb1"}),r.jsx(jd,{className:"orb2"}),r.jsx(jd,{className:"orb3"}),r.jsx(sf,{className:"left",children:r.jsxs("svg",{viewBox:"0 0 120 400",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 80 10 200C10 320 60 400 60 400",stroke:"#cec5ad",strokeWidth:"1.5",fill:"none",opacity:"0.4"}),r.jsx("path",{d:"M60 50C60 50 30 100 30 200C30 300 60 350 60 350",stroke:"#cec5ad",strokeWidth:"1",fill:"none",opacity:"0.3"}),r.jsx("path",{d:"M20 120C20 120 60 160 60 200",stroke:"#cec5ad",strokeWidth:"0.8",fill:"none",opacity:"0.3"}),r.jsx("path",{d:"M100 120C100 120 60 160 60 200",stroke:"#cec5ad",strokeWidth:"0.8",fill:"none",opacity:"0.3"}),r.jsx("path",{d:"M30 280C30 280 60 240 60 200",stroke:"#cec5ad",strokeWidth:"0.8",fill:"none",opacity:"0.3"}),r.jsx("path",{d:"M90 280C90 280 60 240 60 200",stroke:"#cec5ad",strokeWidth:"0.8",fill:"none",opacity:"0.3"})]})}),r.jsx(sf,{className:"right",children:r.jsxs("svg",{viewBox:"0 0 120 400",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 110 80 110 200C110 320 60 400 60 400",stroke:"#cec5ad",strokeWidth:"1.5",fill:"none",opacity:"0.4"}),r.jsx("path",{d:"M60 50C60 50 90 100 90 200C90 300 60 350 60 350",stroke:"#cec5ad",strokeWidth:"1",fill:"none",opacity:"0.3"})]})}),r.jsxs(dT,{style:{y:p},children:[r.jsx(cT,{src:aT,alt:"Services Hero"}),r.jsx(mT,{})]}),r.jsxs(hT,{as:k.div,style:{opacity:f},variants:g,initial:"hidden",animate:s?"visible":"hidden",children:[r.jsx(k.div,{variants:v,children:r.jsx(pT,{children:"Transformational Services"})}),r.jsx(k.div,{variants:v,children:r.jsxs(uT,{children:["Your Path to",r.jsx("br",{}),r.jsx(fT,{children:"Wellness Awaits"})]})}),r.jsx(k.div,{variants:v,children:r.jsx(gT,{children:"Discover personalized yoga, meditation, and holistic wellness programs designed to transform your mind, body, and spirit."})}),r.jsx(k.div,{variants:v,children:r.jsxs(xT,{children:[r.jsxs(wT,{as:V,to:"/contact",children:["Start Your Journey ",r.jsx(me,{})]}),r.jsx(yT,{onClick:()=>document.getElementById("services-grid").scrollIntoView({behavior:"smooth"}),children:"Explore Services"})]})})]}),r.jsx(vT,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z",fill:"#f8f9f6"})})})]}),r.jsx(bT,{id:"services-grid",ref:t,children:r.jsxs(kd,{children:[r.jsxs(kT,{as:k.div,variants:g,initial:"hidden",animate:c?"visible":"hidden",children:[r.jsx(k.div,{variants:v,children:r.jsx(lf,{children:"Our Services"})}),r.jsx(k.div,{variants:v,children:r.jsx(jT,{children:"Transform Every Aspect of Your Being"})}),r.jsx(k.div,{variants:v,children:r.jsx($T,{children:"Whether you're seeking physical vitality, emotional balance, or complete life transformation, there's a path designed specifically for you."})})]}),r.jsx(ST,{children:b.map((y,x)=>r.jsxs(CT,{$active:a===x,onClick:()=>o(x),as:k.button,whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(zT,{$active:a===x,children:y.icon}),r.jsx(TT,{children:y.title})]},x))}),r.jsxs(PT,{as:k.div,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5},children:[r.jsxs(MT,{children:[r.jsxs(AT,{children:[r.jsx(LT,{src:b[a].image,alt:b[a].title}),r.jsx(ET,{style:{backgroundColor:b[a].color}})]}),r.jsxs(IT,{children:[r.jsx(RT,{children:r.jsx(ei,{})}),r.jsx(BT,{children:"Popular Choice"})]})]}),r.jsxs(FT,{children:[r.jsx(WT,{style:{backgroundColor:b[a].color},children:b[a].icon}),r.jsx(DT,{children:b[a].tagline}),r.jsx(VT,{children:b[a].title}),r.jsx(NT,{children:b[a].shortDesc}),r.jsx(OT,{children:b[a].features.map((y,x)=>r.jsxs(_T,{children:[r.jsx(HT,{children:r.jsx(qi,{})}),r.jsx(ZT,{children:y})]},x))}),r.jsxs(UT,{children:[r.jsxs(df,{children:[r.jsx(cf,{children:"Investment"}),r.jsx(mf,{children:b[a].price})]}),r.jsxs(df,{children:[r.jsx(cf,{children:"Duration"}),r.jsx(mf,{children:b[a].duration})]})]}),r.jsxs(YT,{as:V,to:"/contact",children:["Book This Service ",r.jsx(me,{})]})]})]},a),r.jsx(QT,{children:b.map((y,x)=>r.jsxs(GT,{as:k.div,variants:v,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},whileHover:{y:-10,boxShadow:"0 25px 50px rgba(34, 55, 27, 0.15)"},onClick:()=>o(x),children:[r.jsxs(KT,{children:[r.jsx("img",{src:y.image,alt:y.title}),r.jsx(qT,{style:{backgroundColor:y.color}})]}),r.jsxs(XT,{children:[r.jsx(JT,{style:{color:y.color},children:y.icon}),r.jsx(eP,{children:y.title}),r.jsx(tP,{children:y.tagline}),r.jsx(iP,{children:y.price})]})]},x))})]})}),r.jsxs(nP,{ref:i,children:[r.jsx(rP,{children:r.jsxs("svg",{viewBox:"0 0 800 400",fill:"none",preserveAspectRatio:"xMidYMid slice",children:[r.jsx("circle",{cx:"100",cy:"100",r:"150",fill:"#22371b",opacity:"0.03"}),r.jsx("circle",{cx:"700",cy:"300",r:"200",fill:"#cec5ad",opacity:"0.05"}),r.jsx("circle",{cx:"400",cy:"50",r:"100",fill:"#5a8a62",opacity:"0.04"})]})}),r.jsx(kd,{children:r.jsxs(aP,{as:k.div,variants:g,initial:"hidden",animate:m?"visible":"hidden",children:[r.jsx(k.div,{variants:v,children:r.jsx(lf,{className:"center",children:"How It Works"})}),r.jsx(k.div,{variants:v,children:r.jsx(oP,{children:"Your Transformation Journey"})}),r.jsx(sP,{children:C.map((y,x)=>r.jsxs(lP,{as:k.div,variants:v,children:[r.jsx(dP,{children:y.number}),r.jsxs(cP,{children:[r.jsx(mP,{children:y.title}),r.jsx(hP,{children:y.desc})]}),x<C.length-1&&r.jsx(pP,{})]},x))})]})})]}),r.jsx(uP,{children:r.jsxs(fP,{children:[r.jsx(gP,{children:'"'}),r.jsx(xP,{children:"The journey of a thousand miles begins with a single step. Let that step be towards your own well-being."}),r.jsx(wP,{children:"— BK Shikha"})]})}),r.jsxs(yP,{ref:n,children:[r.jsx(hf,{className:"left"}),r.jsx(hf,{className:"right"}),r.jsx(kd,{children:r.jsxs(vP,{as:k.div,variants:g,initial:"hidden",animate:h?"visible":"hidden",children:[r.jsx(k.div,{variants:v,children:r.jsx(bP,{children:"Ready to Begin?"})}),r.jsx(k.div,{variants:v,children:r.jsx(kP,{children:"Not Sure Which Path Is Right for You?"})}),r.jsx(k.div,{variants:v,children:r.jsx(jP,{children:"Let's have a heartfelt conversation about your goals, challenges, and dreams. I'll help you discover the perfect service that aligns with your unique journey."})}),r.jsx(k.div,{variants:v,children:r.jsxs($P,{children:[r.jsxs(SP,{as:V,to:"/contact",children:["Schedule Free Consultation ",r.jsx(me,{})]}),r.jsx(CP,{as:V,to:"/about",children:"Learn More About Me"})]})})]})})]})]})},sT=l.div`
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
`,lT=l.section`
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
`,dT=l(k.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
`,cT=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
`;l.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
`;const mT=l.div`
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
`,sf=l.div`
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
`,hT=l.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
`,pT=l.span`
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
`,uT=l.h1`
  font-family: \${theme.fonts.heading};
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 1.5rem;
`,fT=l.span`
  color: #cec5ad;
  font-style: italic;
  font-weight: 400;
`,gT=l.p`
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
`,xT=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,wT=l(V)`
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
`,yT=l.button`
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
`,vT=l.div`
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
`,bT=l.section`
  padding: 6rem 0;
  background: #f8f9f6;

  @media (max-width: \${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,kT=l.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
`,lf=l.span`
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
`,jT=l.h2`
  font-family: \${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #22371b;
  margin: 0 0 1rem;
  line-height: 1.2;
`,$T=l.p`
  font-family: \${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #21371a;
  margin: 0;
`,ST=l.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  padding: 0 1rem;
`,CT=l.button`
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
`,zT=l.span`
  font-size: 1rem;
  display: flex;
  color: \${props => props.$active ? '#cec5ad' : '#5a8a62'};
`,TT=l.span`
  @media (max-width: \${theme.breakpoints.mobile}) {
    display: none;
  }
`,PT=l.div`
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
`,MT=l.div`
  position: relative;
`,AT=l.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4/3;
`,LT=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 50%;
  position: relative;
  z-index: 2;
`,ET=l.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  opacity: 0.3;
  z-index: 1;
`,IT=l.div`
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
`,RT=l.span`
  display: flex;
`,BT=l.span``,FT=l.div`
  display: flex;
  flex-direction: column;
`,WT=l.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`,DT=l.span`
  font-family: \${theme.fonts.heading};
  font-size: 1rem;
  font-style: italic;
  color: #5a8a62;
  margin-bottom: 0.5rem;
`,VT=l.h3`
  font-family: \${theme.fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  color: #22371b;
  margin: 0 0 1rem;
`,NT=l.p`
  font-family: \${theme.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #21371a;
  margin: 0 0 1.5rem;
`,OT=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: \${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,_T=l.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,HT=l.span`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(90, 138, 98, 0.15);
  color: #5a8a62;
  border-radius: 50%;
  font-size: 0.75rem;
`,ZT=l.span`
  font-family: \${theme.fonts.body};
  font-size: 0.9375rem;
  color: #21371a;
`,UT=l.div`
  display: flex;
  gap: 2rem;
  padding: 1.5rem 0;
  border-top: 1px solid #e8efe9;
  border-bottom: 1px solid #e8efe9;
  margin-bottom: 2rem;
`,df=l.div``,cf=l.span`
  display: block;
  font-family: \${theme.fonts.body};
  font-size: 0.8125rem;
  color: #7a8a7a;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
`,mf=l.span`
  font-family: \${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #22371b;
`,YT=l(V)`
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
`,QT=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: \${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: \${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,GT=l.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 2px solid transparent;

  &:hover {
    border-color: #cec5ad;
  }
`,KT=l.div`
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 50%;
    transition: transform 0.5s ease;
  }

  \${ServiceMiniCard}:hover & img {
    transform: scale(1.1);
  }
`,qT=l.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;

  \${ServiceMiniCard}:hover & {
    opacity: 0.2;
  }
`,XT=l.div`
  padding: 1.5rem;
`,JT=l.span`
  display: flex;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`,eP=l.h4`
  font-family: \${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 0.25rem;
`,tP=l.p`
  font-family: \${theme.fonts.body};
  font-size: 0.875rem;
  font-style: italic;
  color: #5a8a62;
  margin: 0 0 0.75rem;
`,iP=l.span`
  font-family: \${theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  color: #cec5ad;
  background: #22371b;
  padding: 0.375rem 0.875rem;
  border-radius: 100px;
`,nP=l.section`
  padding: 6rem 0;
  background: white;
  position: relative;
  overflow: hidden;

  @media (max-width: \${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,rP=l.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`,aP=l.div`
  position: relative;
  z-index: 1;
  text-align: center;
`,oP=l.h2`
  font-family: \${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #22371b;
  margin: 0 0 4rem;
`,sP=l.div`
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
`,lP=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 200px;
  max-width: 280px;
  position: relative;
`,dP=l.div`
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
`,cP=l.div``,mP=l.h4`
  font-family: \${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 0.5rem;
`,hP=l.p`
  font-family: \${theme.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #21371a;
  margin: 0;
`,pP=l.div`
  position: absolute;
  top: 40px;
  right: -30px;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #cec5ad, transparent);

  @media (max-width: \${theme.breakpoints.tablet}) {
    display: none;
  }
`,uP=l.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #22371b 0%, #21371a 100%);
  text-align: center;
`,fP=l.div`
  max-width: 800px;
  margin: 0 auto;
`,gP=l.span`
  display: block;
  font-family: \${theme.fonts.heading};
  font-size: 6rem;
  color: #cec5ad;
  opacity: 0.3;
  line-height: 0.5;
  margin-bottom: 1rem;
`,xP=l.p`
  font-family: \${theme.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 400;
  font-style: italic;
  color: white;
  line-height: 1.6;
  margin: 0 0 1.5rem;
`,wP=l.span`
  font-family: \${theme.fonts.body};
  font-size: 1rem;
  color: #cec5ad;
  letter-spacing: 0.1em;
`,yP=l.section`
  padding: 6rem 0;
  background: #f8f9f6;
  position: relative;
  overflow: hidden;

  @media (max-width: \${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,hf=l.div`
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
`,vP=l.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,bP=l.span`
  display: inline-block;
  font-family: \${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`,kP=l.h2`
  font-family: \${theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #22371b;
  margin: 0 0 1.5rem;
`,jP=l.p`
  font-family: \${theme.fonts.body};
  font-size: 1.125rem;
  line-height: 1.8;
  color: #21371a;
  margin: 0 0 2.5rem;
`,$P=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,SP=l(V)`
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
`,CP=l(V)`
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
`,ai={corporate:"https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=1600&h=2000&fit=crop&q=100",retreat:"https://images.unsplash.com/photo-1469521669194-babb45599def?w=1600&h=1200&fit=crop&q=100",workshop:"https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1600&h=2400&fit=crop&q=100",online:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1600&h=1200&fit=crop&q=100",community:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=1600&fit=crop&q=100",training:"https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1600&h=1200&fit=crop&q=100",meditation:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1600&h=2000&fit=crop&q=100",nature:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&h=1200&fit=crop&q=100"},zP="/more images/portfolio hero.png",pf=[{id:1,category:"Corporate",title:"Corporate Wellness Revolution",subtitle:"Tech Giants Wellness Program",description:"Transformed workplace wellness for 500+ professionals at leading tech companies through customized yoga and mindfulness programs.",image:ai.corporate,stats:{participants:"500+",satisfaction:"98%",companies:"12"},tags:["Corporate","Stress Management","Team Building"],featured:!0,size:"tall"},{id:2,category:"Retreat",title:"Himalayan Soul Journey",subtitle:"10-Day Spiritual Awakening",description:"Curated transformative retreats in the serene Himalayas, combining ancient yogic wisdom with modern healing practices.",image:ai.retreat,stats:{participants:"150+",rating:"4.9",retreats:"15"},tags:["Retreats","Meditation","Nature Immersion"],featured:!0,size:"wide"},{id:3,category:"Workshop",title:"Emotional Alchemy",subtitle:"Healing Through Movement",description:"Interactive workshops blending yoga therapy, breathwork, and NLP techniques for profound emotional transformation.",image:ai.workshop,stats:{workshops:"50+",healed:"1000+",cities:"8"},tags:["Emotional Wellness","Trauma Healing","Self-Discovery"],size:"tall"},{id:4,category:"Online",title:"30-Day Transformation",subtitle:"Virtual Wellness Journey",description:"A comprehensive online program combining daily yoga, meditation, and nutrition guidance for holistic transformation.",image:ai.online,stats:{students:"2000+",completion:"85%",countries:"25"},tags:["Online","Self-Paced","Global Reach"],size:"normal"},{id:5,category:"Community",title:"Yoga for All Initiative",subtitle:"Making Wellness Accessible",description:"Free weekly yoga sessions in parks and community centers, breaking financial barriers to wellness.",image:ai.community,stats:{sessions:"200+",lives:"3000+",years:"5"},tags:["Free Classes","Community Service","Inclusivity"],size:"square"},{id:6,category:"Training",title:"Teacher Training Academy",subtitle:"200-Hour Certification Program",description:"Comprehensive yoga teacher training that has certified 100+ passionate practitioners to spread wellness worldwide.",image:ai.training,stats:{graduates:"100+",employed:"90%",hours:"200"},tags:["Certification","Professional","Career"],size:"wide"},{id:7,category:"Meditation",title:"Silence Speaks",subtitle:"Vipassana Meditation Series",description:"Deep meditation programs helping practitioners access profound states of awareness and inner peace.",image:ai.meditation,stats:{sessions:"100+",hours:"500+",breakthroughs:"Many"},tags:["Meditation","Mindfulness","Inner Peace"],size:"tall"},{id:8,category:"Nature",title:"Forest Bathing Wellness",subtitle:"Shinrin-Yoku Experience",description:"Immersive nature therapy combining yoga, forest bathing, and eco-mindfulness for complete rejuvenation.",image:ai.nature,stats:{participants:"300+",locations:"10",nature:"100%"},tags:["Nature Therapy","Eco-Wellness","Outdoor"],size:"normal"}],uf=[{icon:r.jsx(rr,{}),number:"5000+",label:"Lives Transformed",color:"#cec5ad"},{icon:r.jsx(P0,{}),number:"15+",label:"Years Experience",color:"#8ecfb3"},{icon:r.jsx(mt,{}),number:"98%",label:"Client Satisfaction",color:"#5a8a62"},{icon:r.jsx(ei,{}),number:"500+",label:"Sessions Delivered",color:"#cec5ad"},{icon:r.jsx(H6,{}),number:"25+",label:"Countries Reached",color:"#8ecfb3"},{icon:r.jsx(dl,{}),number:"100%",label:"Dedication",color:"#5a8a62"}],TP=()=>{const e=j.useRef(null),t=j.useRef(null),i=j.useRef(null),n=j.useRef(null),[a,o]=j.useState("All"),[s,c]=j.useState(null),m=N(e,{once:!0,amount:.3}),h=N(t,{once:!0,amount:.1});N(i,{once:!0,amount:.2}),N(n,{once:!0,amount:.3});const{scrollYProgress:u}=T0({target:e,offset:["start start","end start"]}),p=nr(u,[0,1],[0,200]),f=nr(u,[0,.5],[1,0]),g=["All","Corporate","Retreat","Workshop","Online","Community","Training","Meditation","Nature"],v=a==="All"?pf:pf.filter(y=>y.category===a),b={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},C={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.1,.25,1]}}};return r.jsxs(PP,{children:[r.jsxs(MP,{ref:e,children:[r.jsxs(AP,{style:{y:p},children:[r.jsx(LP,{src:zP,alt:"Portfolio Hero"}),r.jsx(EP,{})]}),r.jsx($d,{className:"orb1"}),r.jsx($d,{className:"orb2"}),r.jsx($d,{className:"orb3"}),r.jsx(ff,{className:"left",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1"})]})}),r.jsx(ff,{className:"right",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1"})]})}),r.jsxs(IP,{as:k.div,style:{opacity:f},variants:b,initial:"hidden",animate:m?"visible":"hidden",children:[r.jsx(k.div,{variants:C,children:r.jsxs(RP,{children:[r.jsx(ei,{})," Our Journey of Impact"]})}),r.jsx(k.div,{variants:C,children:r.jsxs(BP,{children:["Transforming Lives,",r.jsx("br",{}),r.jsx(FP,{children:"One Breath at a Time"})]})}),r.jsx(k.div,{variants:C,children:r.jsx(WP,{children:"Explore our collection of transformative programs, workshops, and initiatives that have touched thousands of souls across the globe."})}),r.jsx(k.div,{variants:C,children:r.jsxs(DP,{children:[r.jsxs(VP,{to:"/contact",children:["Start Your Journey",r.jsx(me,{})]}),r.jsxs(NP,{onClick:()=>document.getElementById("gallery").scrollIntoView({behavior:"smooth"}),children:[r.jsx(Ls,{}),"View Portfolio"]})]})})]}),r.jsx(OP,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",fill:"#ffffff"})})})]}),r.jsx(_P,{ref:n,children:r.jsx(HP,{children:[...uf,...uf].map((y,x)=>r.jsxs(ZP,{children:[r.jsx(UP,{style:{color:y.color},children:y.icon}),r.jsx(YP,{children:y.number}),r.jsx(QP,{children:y.label})]},x))})}),r.jsxs(GP,{id:"gallery",ref:t,children:[r.jsxs(yo,{children:[r.jsxs(KP,{as:k.div,variants:b,initial:"hidden",animate:h?"visible":"hidden",children:[r.jsxs(k.div,{variants:C,children:[r.jsx(gf,{children:"Our Impact"}),r.jsx(xf,{children:"Featured Work & Projects"}),r.jsx(qP,{children:"Each project represents a unique journey of transformation, healing, and growth."})]}),r.jsx(XP,{as:k.div,variants:C,children:g.map(y=>r.jsx(JP,{$active:a===y,onClick:()=>o(y),as:k.button,whileHover:{scale:1.05},whileTap:{scale:.95},children:y},y))})]}),r.jsx(Bt,{mode:"wait",children:r.jsx(eM,{as:k.div,initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30},transition:{duration:.4},children:v.map((y,x)=>r.jsx(xl,{$size:y.size,as:k.div,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:x*.1},onClick:()=>c(y),whileHover:{y:-10},children:r.jsxs(tM,{children:[r.jsx(iM,{src:y.image,alt:y.title,loading:"lazy"}),r.jsxs(nM,{children:[r.jsx(rM,{children:y.category}),r.jsxs(aM,{children:[r.jsx(oM,{children:y.title}),r.jsx(sM,{children:y.subtitle}),r.jsxs(lM,{children:["View Project ",r.jsx(me,{})]})]})]}),y.featured&&r.jsxs(dM,{children:[r.jsx(ei,{})," Featured"]})]})},y.id))},a)})]}),r.jsx(cM,{children:r.jsxs("svg",{viewBox:"0 0 200 400",fill:"none",children:[r.jsx("path",{d:"M100,20 Q150,100 140,200 Q130,300 100,380",stroke:"#e8f0e9",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M100,80 Q60,120 40,100",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,140 Q55,180 30,150",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,200 Q50,240 25,200",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"})]})})]}),r.jsx(mM,{children:r.jsx(yo,{children:r.jsxs(hM,{as:k.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsx(pM,{children:'"'}),r.jsx(uM,{children:"Every soul I touch, every life I transform, is a reminder of why I walk this path. This portfolio is not just my work — it's our collective journey toward light."}),r.jsxs(fM,{children:[r.jsx(gM,{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=100",alt:"BK Shikha"}),r.jsxs(xM,{children:[r.jsx(wM,{children:"BK Shikha"}),r.jsx(yM,{children:"Holistic Wellness Coach"})]})]})]})})}),r.jsx(vM,{children:r.jsx(yo,{children:r.jsxs(bM,{as:k.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsxs(kM,{children:[r.jsx(gf,{children:"Follow the Journey"}),r.jsx(xf,{children:"Stay Connected"})]}),r.jsxs(jM,{children:[r.jsxs(wf,{href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer",as:k.a,whileHover:{y:-8},children:[r.jsx(yf,{className:"instagram",children:r.jsx(rn,{})}),r.jsxs(vf,{children:[r.jsx(bf,{children:"Instagram"}),r.jsx(kf,{children:"@cyd_bkshikha"})]}),r.jsx(jf,{children:r.jsx(me,{})})]}),r.jsxs(wf,{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer",as:k.a,whileHover:{y:-8},children:[r.jsx(yf,{className:"youtube",children:r.jsx(q6,{})}),r.jsxs(vf,{children:[r.jsx(bf,{children:"YouTube"}),r.jsx(kf,{children:"BK Shikha Wellness"})]}),r.jsx(jf,{children:r.jsx(me,{})})]})]})]})})}),r.jsxs($M,{children:[r.jsx(SM,{}),r.jsx(CM,{}),r.jsx(yo,{children:r.jsxs(zM,{as:k.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[r.jsx(TM,{children:"Begin Your Story"}),r.jsx(PM,{children:"Ready to Be Our Next Success Story?"}),r.jsx(MM,{children:"Your transformation journey begins with a single step. Let's write your success story together."}),r.jsxs(AM,{children:[r.jsxs(LM,{to:"/contact",children:["Book Free Consultation",r.jsx(me,{})]}),r.jsx(EM,{to:"/services",children:"Explore Programs"})]}),r.jsxs(IM,{children:[r.jsxs($f,{children:[r.jsx(qi,{})," Personalized Assessment"]}),r.jsxs($f,{children:[r.jsx(qi,{})," No Obligation"]})]})]})}),r.jsx(RM,{children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",children:[r.jsx("circle",{cx:"100",cy:"100",r:"80",stroke:"#cec5ad",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.3"}),r.jsx("circle",{cx:"100",cy:"100",r:"60",stroke:"#ffffff",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.2"}),r.jsx("circle",{cx:"100",cy:"100",r:"40",stroke:"#cec5ad",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.4"})]})})]}),r.jsx(Bt,{children:s&&r.jsx(BM,{as:k.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>c(null),children:r.jsxs(FM,{as:k.div,initial:{opacity:0,scale:.9,y:50},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:50},onClick:y=>y.stopPropagation(),children:[r.jsx(WM,{onClick:()=>c(null),children:r.jsx(cl,{})}),r.jsx(DM,{src:s.image,alt:s.title}),r.jsxs(VM,{children:[r.jsx(NM,{children:s.category}),r.jsx(OM,{children:s.title}),r.jsx(_M,{children:s.subtitle}),r.jsx(HM,{children:s.description}),r.jsx(ZM,{children:Object.entries(s.stats).map(([y,x])=>r.jsxs(UM,{children:[r.jsx(YM,{children:x}),r.jsx(QM,{children:y})]},y))}),r.jsx(GM,{children:s.tags.map((y,x)=>r.jsx(KM,{children:y},x))}),r.jsxs(qM,{to:"/contact",children:["Start Similar Journey ",r.jsx(me,{})]})]})]})})})]})},PP=l.div`
  position: relative;
  overflow-x: hidden;
`,yo=l.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,MP=l.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,AP=l(k.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
`,LP=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
`,EP=l.div`
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
`,ff=l.div`
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
`,IP=l.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
`,RP=l.span`
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
`,BP=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 1.5rem;
`,FP=l.span`
  color: #cec5ad;
  font-style: italic;
  font-weight: 400;
`,WP=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
`,DP=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,VP=l(V)`
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
`,NP=l.button`
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
`,OP=l.div`
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
`,_P=l.section`
  background: linear-gradient(135deg, #22371b 0%, #2d4d24 100%);
  padding: 2rem 0;
  overflow: hidden;
`,HP=l.div`
  display: flex;
  gap: 4rem;
  animation: marquee 30s linear infinite;

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`,ZP=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
`,UP=l.div`
  font-size: 1.5rem;
  display: flex;
`,YP=l.span`
  font-family: ${d.fonts.heading};
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
`,QP=l.span`
  font-family: ${d.fonts.body};
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,GP=l.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
`,KP=l.div`
  text-align: center;
  margin-bottom: 4rem;
`,gf=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  font-style: italic;
  color: #c9a227;
  margin-bottom: 0.75rem;
`,xf=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  color: #22371b;
  line-height: 1.2;
  margin-bottom: 1rem;
`,qP=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 600px;
  margin: 0 auto 2rem;
`,XP=l.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 1rem;
`,JP=l.button`
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
`,eM=l.div`
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
`,tM=l.div`
  position: relative;
  width: 100%;
  height: 100%;
`,iM=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${xl}:hover & {
    transform: scale(1.1);
  }
`,nM=l.div`
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
`,rM=l.span`
  align-self: flex-start;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.95);
  color: #22371b;
  font-family: ${d.fonts.body};
  font-size: 0.8125rem;
  font-weight: 600;
  border-radius: 100px;
`,aM=l.div``,oM=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
`,sM=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`,lM=l.span`
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
`,dM=l.div`
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
`,cM=l.div`
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
`;const mM=l.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #22371b 0%, #21371a 100%);
  position: relative;
  overflow: hidden;
`,hM=l.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`,pM=l.span`
  display: block;
  font-family: ${d.fonts.heading};
  font-size: 8rem;
  color: #cec5ad;
  opacity: 0.2;
  line-height: 0.5;
  margin-bottom: 1rem;
`,uM=l.p`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 400;
  font-style: italic;
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 2rem;
`,fM=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,gM=l.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #cec5ad;
`,xM=l.div`
  text-align: left;
`,wM=l.div`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #cec5ad;
`,yM=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
`,vM=l.section`
  padding: 5rem 0;
  background: #ffffff;
`,bM=l.div`
  text-align: center;
`,kM=l.div`
  margin-bottom: 3rem;
`,jM=l.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`,wf=l.a`
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
`,vf=l.div`
  flex: 1;
  text-align: left;
`,bf=l.div`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: #22371b;
`,kf=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: #6b7c6f;
`,jf=l.div`
  color: #5a8a62;
  font-size: 1.25rem;
`,$M=l.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #eef4ef 0%, #f8f9f6 100%);
  position: relative;
  overflow: hidden;
`,SM=l.div`
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
`,CM=l.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: #cec5ad;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.15;
  right: -150px;
  bottom: -100px;
`,zM=l.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,TM=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`,PM=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  color: #22371b;
  margin-bottom: 1rem;
`,MM=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin-bottom: 2.5rem;
`,AM=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`,LM=l(V)`
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
`,EM=l(V)`
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
`,IM=l.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`,$f=l.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  color: #5a8a62;

  svg {
    font-size: 1rem;
  }
`,RM=l.div`
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
`,BM=l.div`
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
`,FM=l.div`
  background: #ffffff;
  border-radius: 30px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,WM=l.button`
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
`,DM=l.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`,VM=l.div`
  padding: 2.5rem;
`,NM=l.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(90, 138, 98, 0.1);
  color: #5a8a62;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 100px;
  margin-bottom: 1rem;
`,OM=l.h2`
  font-family: ${d.fonts.heading};
  font-size: 2rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.5rem;
`,_M=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  color: #5a8a62;
  font-style: italic;
  margin-bottom: 1.5rem;
`,HM=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin-bottom: 2rem;
`,ZM=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid #e8efe9;
  border-bottom: 1px solid #e8efe9;
  margin-bottom: 1.5rem;
`,UM=l.div`
  text-align: center;
`,YM=l.div`
  font-family: ${d.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.25rem;
`,QM=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.8125rem;
  color: #7a8a7a;
  text-transform: capitalize;
`,GM=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`,KM=l.span`
  padding: 0.5rem 1rem;
  background: #f8f9f6;
  color: #5a8a62;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 100px;
`,qM=l(V)`
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
`;l(k.button)`
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
`;const XM=()=>{const[e,t]=j.useState({name:"",email:"",phone:"",service:"",message:""}),i=o=>{t({...e,[o.target.name]:o.target.value})},n=o=>{o.preventDefault(),console.log("Form submitted:",e),alert("Thank you! Your message has been sent. I'll be in touch soon. 🙏")},a=["Personalized Yoga Coaching","Emotional Wellness Mentoring","Mindset & NLP Coaching","Stress Relief Sessions","Holistic Transformation","Confidence Building","Not sure yet - Need guidance"];return r.jsxs(JM,{children:[r.jsx(eA,{children:r.jsx("div",{className:"container",children:r.jsxs(tA,{as:k.div,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:[r.jsx(iA,{children:"Let's Connect"}),r.jsx(nA,{children:"Begin Your Healing Journey Today"}),r.jsx(rA,{children:"Every transformation starts with a conversation. Share your story, ask your questions, and let's explore how we can work together to create the life you deserve."})]})})}),r.jsx(aA,{className:"section",children:r.jsx("div",{className:"container",children:r.jsxs(oA,{children:[r.jsxs(sA,{as:k.div,initial:{opacity:0,x:-40},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsx(lA,{children:"Send Me a Message"}),r.jsx(dA,{children:"Fill out the form below and I'll get back to you within 24 hours. ✨"}),r.jsxs(cA,{onSubmit:n,children:[r.jsxs(Pr,{children:[r.jsxs(Mr,{htmlFor:"name",children:["Your Name ",r.jsx(vo,{children:"*"})]}),r.jsx(Sd,{type:"text",id:"name",name:"name",value:e.name,onChange:i,placeholder:"What should I call you?",required:!0})]}),r.jsxs(Pr,{children:[r.jsxs(Mr,{htmlFor:"email",children:["Email Address ",r.jsx(vo,{children:"*"})]}),r.jsx(Sd,{type:"email",id:"email",name:"email",value:e.email,onChange:i,placeholder:"your@email.com",required:!0})]}),r.jsxs(Pr,{children:[r.jsx(Mr,{htmlFor:"phone",children:"Phone Number (Optional)"}),r.jsx(Sd,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:i,placeholder:"+91 XXX XXX XXXX"})]}),r.jsxs(Pr,{children:[r.jsxs(Mr,{htmlFor:"service",children:["Service You're Interested In ",r.jsx(vo,{children:"*"})]}),r.jsxs(mA,{id:"service",name:"service",value:e.service,onChange:i,required:!0,children:[r.jsx("option",{value:"",children:"Select a service..."}),a.map((o,s)=>r.jsx("option",{value:o,children:o},s))]})]}),r.jsxs(Pr,{children:[r.jsxs(Mr,{htmlFor:"message",children:["Tell Me About Your Journey ",r.jsx(vo,{children:"*"})]}),r.jsx(hA,{id:"message",name:"message",value:e.message,onChange:i,placeholder:"What brings you here? What are you hoping to achieve? Share as much or as little as you're comfortable with...",rows:"6",required:!0})]}),r.jsxs(pA,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(U6,{}),"Send Message"]})]})]}),r.jsxs(uA,{as:k.div,initial:{opacity:0,x:40},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsxs(fA,{children:[r.jsx(gA,{children:"Other Ways to Connect"}),r.jsxs(xA,{children:[r.jsxs(Cd,{children:[r.jsx(zd,{children:r.jsx(rn,{})}),r.jsxs(Td,{children:[r.jsx(Pd,{children:"Instagram"}),r.jsx(Md,{href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer",children:"@cyd_bkshikha"}),r.jsx(Ad,{children:"Daily wellness tips & inspiration"})]})]}),r.jsxs(Cd,{children:[r.jsx(zd,{children:r.jsx(As,{})}),r.jsxs(Td,{children:[r.jsx(Pd,{children:"Email"}),r.jsx(Md,{href:"mailto:contact@bkshikha.com",children:"contact@bkshikha.com"}),r.jsx(Ad,{children:"For detailed inquiries"})]})]}),r.jsxs(Cd,{children:[r.jsx(zd,{children:r.jsx(R5,{})}),r.jsxs(Td,{children:[r.jsx(Pd,{children:"WhatsApp"}),r.jsx(Md,{href:"tel:+1234567890",children:"+91 XXX XXX XXXX"}),r.jsx(Ad,{children:"Direct booking & quick questions"})]})]})]})]}),r.jsxs(wA,{children:[r.jsx(yA,{children:"📅"}),r.jsx(vA,{children:"Free Consultation Call"}),r.jsx(bA,{children:"Not sure where to start? Book a complimentary 15-minute consultation call where we'll discuss your goals and find the perfect service for you."}),r.jsx(kA,{children:"No pressure, no sales pitch - just a heartfelt conversation about your wellness journey."})]}),r.jsxs(jA,{children:[r.jsx($A,{children:'"The journey of a thousand miles begins with a single step."'}),r.jsx(SA,{children:"- Lao Tzu"})]})]})]})})}),r.jsx(CA,{className:"section",children:r.jsxs("div",{className:"container",children:[r.jsx(Bs,{subtitle:"Common Questions",children:"What You Might Be Wondering"}),r.jsxs(zA,{children:[r.jsxs(bo,{as:k.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[r.jsx(ko,{children:"How long does each session last?"}),r.jsx(jo,{children:"Session lengths vary by service: Yoga sessions are typically 60 minutes, emotional wellness and NLP coaching are 75-90 minutes, and stress relief sessions are 45 minutes."})]}),r.jsxs(bo,{as:k.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:[r.jsx(ko,{children:"Are sessions online or in-person?"}),r.jsx(jo,{children:"I offer both! Online sessions via Zoom are available worldwide. In-person sessions are available in select locations. We'll discuss what works best for you during our consultation."})]}),r.jsxs(bo,{as:k.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:[r.jsx(ko,{children:"What if I'm a complete beginner?"}),r.jsx(jo,{children:"Perfect! I work with people at all levels. Every practice is personalized to your current abilities and goals. There's no judgment, only support and guidance."})]}),r.jsxs(bo,{as:k.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.3},children:[r.jsx(ko,{children:"How quickly will I see results?"}),r.jsx(jo,{children:"Many clients feel shifts after the first session - increased calm, clarity, or hope. Lasting transformation typically unfolds over 8-12 weeks with consistent practice. Everyone's journey is unique."})]})]})]})})]})},JM=l.div``,eA=l.section`
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
`,tA=l.div`
  max-width: 800px;
  margin: 0 auto;
`,iA=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.95rem;
  font-weight: 600;
  color: #cec5ad;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1rem;
`,nA=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #22371b;
  margin: 0 0 1.5rem;
  line-height: 1.2;
`,rA=l.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #21371a;
  opacity: 0.85;
  margin: 0;
`,aA=l.section`
  background: ${d.colors.backgroundAlt};
`,oA=l.div`
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
`,sA=l.div``,lA=l.h2`
  font-family: ${d.fonts.heading};
  font-size: 2.25rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 1rem;
`,dA=l.p`
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #21371a;
  opacity: 0.8;
  margin: 0 0 2.5rem;
`,cA=l.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Pr=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Mr=l.label`
  font-family: ${d.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: #21371a;
`,vo=l.span`
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
`,mA=l.select`
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
`,hA=l.textarea`
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
`,pA=l(k.button)`
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
`,uA=l.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,fA=l.div`
  background: white;
  padding: 2.5rem;
  border-radius: ${d.borderRadius.xl};
  box-shadow: 0 4px 20px rgba(34, 55, 27, 0.08);
  border: 1px solid rgba(206, 197, 173, 0.2);
`,gA=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 2rem;
`,xA=l.div`
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
`,wA=l.div`
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
`,yA=l.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,vA=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: white;
  margin: 0 0 1rem;
`,bA=l.p`
  font-size: 1.0625rem;
  line-height: 1.7;
  margin: 0 0 1rem;
  opacity: 0.95;
`,kA=l.p`
  font-size: 0.9rem;
  font-style: italic;
  margin: 0;
  opacity: 0.9;
`,jA=l.div`
  background: white;
  padding: 2rem;
  border-radius: ${d.borderRadius.xl};
  border-left: 4px solid #cec5ad;
  box-shadow: 0 2px 12px rgba(34, 55, 27, 0.06);
`,$A=l.p`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-style: italic;
  line-height: 1.6;
  color: #22371b;
  margin: 0 0 0.75rem;
`,SA=l.p`
  font-size: 0.95rem;
  color: #cec5ad;
  font-weight: 500;
  margin: 0;
`,CA=l.section`
  background: white;
`,zA=l.div`
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
`,bo=l.div`
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
`,ko=l.h4`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  margin: 0 0 0.75rem;
`,jo=l.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #21371a;
  opacity: 0.85;
  margin: 0;
`,TA=()=>{const e=j.useRef(null),t=j.useRef(null),i=j.useRef(null),n=j.useRef(null),a=N(e,{once:!0,amount:.3}),o=N(t,{once:!0,amount:.3}),s=N(i,{once:!0,amount:.2}),c=N(n,{once:!0,amount:.3}),m={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.1}}},h={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}},u=[{icon:r.jsx(mt,{}),title:"Mind-First Healing",description:"True healing begins with the mind. When the mind is calm and balanced, the body naturally heals and transforms.",gradient:"linear-gradient(135deg, #5a8a62, #8ecfb3)",color:"#5a8a62"},{icon:r.jsx(dl,{}),title:"Root-Cause Oriented",description:"We address the underlying causes, not just symptoms, empowering sustainable transformation and lasting wellness.",gradient:"linear-gradient(135deg, #c9a227, #e0c45e)",color:"#c9a227"},{icon:r.jsx(Wa,{}),title:"Holistic Integration",description:"Combining ancient yogic wisdom with modern NLP, gut health science, and mindful nutrition for complete well-being.",gradient:"linear-gradient(135deg, #8ecfb3, #b8e0d2)",color:"#8ecfb3"},{icon:r.jsx(rr,{}),title:"Compassionate Guidance",description:"Every individual's journey is unique. We provide personalized, compassionate support adapted to your needs.",gradient:"linear-gradient(135deg, #6a9b72, #8bb894)",color:"#6a9b72"}],p=[{title:"Yoga & Breathing",description:"Improve flexibility and strength with yoga, stretching exercises, and breathing techniques.",image:"https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&h=600&fit=crop&q=100",icon:"🧘‍♀️"},{title:"Meditation & Mindfulness",description:"Cultivate peace and balance through meditation and mindfulness practices.",image:"https://images.unsplash.com/photo-1529693662653-9d480530a697?w=800&h=600&fit=crop&q=100",icon:"🪷"},{title:"Mind Coaching (NLP)",description:"Transform your mindset using powerful NLP tools and techniques.",image:"https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=800&h=600&fit=crop&q=100",icon:"🧠"},{title:"Emotional Wellness",description:"Comprehensive support for stress, anxiety, and emotional well-being.",image:"https://images.unsplash.com/photo-1499728603263-13571c13a2d7?w=800&h=600&fit=crop&q=100",icon:"💚"},{title:"Counseling Services",description:"Personalized counseling for children, adolescents, and adults.",image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=100",icon:"🤝"},{title:"Relationship Healing",description:"Restore harmony and emotional healing in your relationships.",image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=100",icon:"❤️"},{title:"Gut Health",description:"Restore your well-being with natural healing therapies and gut health correction.",image:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=100",icon:"🌿"},{title:"Weight Management",description:"Guidance on nourishing your body and mind with healthy weight loss programs.",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=100",icon:"🍊"},{title:"Lifestyle Transformation",description:"Deepen your practice with immersive lifestyle and habit transformation.",image:"https://images.unsplash.com/photo-1506126279646-a697353d3166?w=800&h=600&fit=crop&q=100",icon:"⚖️"}],f=[{title:"Children & Students",description:"Supporting young minds through emotional challenges, stress management, and building healthy habits early.",image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop&q=100",emoji:"🎓"},{title:"Working Professionals",description:"Managing workplace stress, achieving work-life balance, and maintaining physical and mental wellness.",image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=100",emoji:"💼"},{title:"Adults & Seniors",description:"Navigating life transitions, relationship challenges, and maintaining vitality through holistic practices.",image:"https://images.unsplash.com/photo-1505455184862-554165e5f6ba?w=1200&h=800&fit=crop&q=100",emoji:"🌟"},{title:"Wellness Seekers",description:"Anyone seeking digestive health, weight management, emotional balance, and a sustainable healthy lifestyle.",image:"https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1200&h=800&fit=crop&q=100",emoji:"🧘"}];return r.jsxs(PA,{children:[r.jsxs(MA,{ref:e,children:[r.jsx(Sf,{className:"left",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"#d0dcd2",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"#d0dcd2",strokeWidth:"1"}),r.jsx("path",{d:"M60 60L30 100",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L35 160",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L40 220",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 60L90 100",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L85 160",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L80 220",stroke:"#d0dcd2",strokeWidth:"0.8"})]})}),r.jsx(Sf,{className:"right",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"#d0dcd2",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"#d0dcd2",strokeWidth:"1"}),r.jsx("path",{d:"M60 60L30 100",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L35 160",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L40 220",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 60L90 100",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L85 160",stroke:"#d0dcd2",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L80 220",stroke:"#d0dcd2",strokeWidth:"0.8"})]})}),r.jsx(Vi,{children:r.jsxs(AA,{as:k.div,variants:m,initial:"hidden",animate:a?"visible":"hidden",children:[r.jsx(k.div,{variants:h,children:r.jsx(LA,{children:"Our Philosophy"})}),r.jsx(k.div,{variants:h,children:r.jsx(EA,{children:"Learn about our holistic approach to health & wellbeing"})})]})}),r.jsx(IA,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",fill:"#ffffff"})})})]}),r.jsx(RA,{children:r.jsx(Vi,{children:r.jsxs(BA,{as:k.div,variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[r.jsx(FA,{as:k.div,variants:h,children:r.jsxs(WA,{children:[r.jsx(DA,{children:r.jsx("svg",{viewBox:"0 0 400 500",fill:"none",children:r.jsx("path",{d:"M320,250 C350,380 280,470 180,480 C80,490 20,400 25,280 C30,160 90,40 200,30 C310,20 290,120 320,250 Z",fill:"#e8f0ea"})})}),r.jsx(VA,{src:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=1500&fit=crop&q=100",alt:"BK Shikha - Holistic Wellness Coach",loading:"lazy"}),r.jsxs(m2,{as:k.div,initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.5,duration:.4},children:[r.jsx("span",{children:"12+"}),r.jsx("small",{children:"Years in Yoga"})]}),r.jsxs(NA,{as:k.div,initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.7,duration:.4},children:[r.jsx("span",{children:"15+"}),r.jsx("small",{children:"Years in Meditation"})]})]})}),r.jsxs(OA,{as:k.div,variants:h,children:[r.jsx($o,{children:"Our Story"}),r.jsx(_A,{children:"Discover the Journey Behind BK Shikha's Wellness Mission"}),r.jsxs(Cf,{children:["BK Shikha is a dedicated ",r.jsx("strong",{children:"Holistic Wellness Coach"})," with over 12 years in Yoga and 15 years in Meditation. As a certified ",r.jsx("strong",{children:"NLP Practitioner"}),", ",r.jsx("strong",{children:"Gut Health Expert"}),", and ",r.jsx("strong",{children:"Counselor"}),", she specializes in mind-body healing, supporting children, teenagers, and adults through stress, anxiety, emotional wellness, and relationship challenges."]}),r.jsx(Cf,{children:"Her holistic approach combines ancient wisdom with modern science. True healing begins with the mind — when calm and balanced, the body naturally transforms, empowering long-term physical, mental, and emotional well-being."}),r.jsxs(HA,{children:[r.jsxs(Ld,{children:[r.jsx(Ed,{children:r.jsx(mt,{})}),r.jsxs(Id,{children:[r.jsx("span",{children:"Mind-Body"}),r.jsx("small",{children:"Healing Expert"})]})]}),r.jsxs(Ld,{children:[r.jsx(Ed,{children:r.jsx(M0,{})}),r.jsxs(Id,{children:[r.jsx("span",{children:"NLP"}),r.jsx("small",{children:"Certified Practitioner"})]})]}),r.jsxs(Ld,{children:[r.jsx(Ed,{children:r.jsx(rr,{})}),r.jsxs(Id,{children:[r.jsx("span",{children:"All Ages"}),r.jsx("small",{children:"Children to Adults"})]})]})]})]})]})})}),r.jsx(ZA,{children:r.jsx(Vi,{children:r.jsxs(UA,{as:k.div,variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[r.jsxs(YA,{as:k.div,variants:h,children:[r.jsx($o,{children:"Wellness Philosophy"}),r.jsx(zf,{children:"True Healing Begins with the Mind"}),r.jsx(GA,{children:'"When the mind is calm and balanced, the body naturally heals and transforms."'}),r.jsx(Tf,{children:"This fundamental principle guides everything we do at BK Shikha. We believe that lasting wellness cannot be achieved by treating symptoms alone. True transformation happens when we address the root causes — the thoughts, beliefs, emotions, and patterns that shape our physical and mental state."}),r.jsx(Tf,{children:"Our holistic approach integrates ancient wisdom with modern science, combining yoga, meditation, NLP techniques, gut health expertise, and lifestyle coaching to create sustainable, meaningful change in your life."})]}),r.jsx(QA,{as:k.div,variants:h,children:r.jsxs(KA,{children:[r.jsx(qA,{children:r.jsx("svg",{viewBox:"0 0 400 450",fill:"none",children:r.jsx("path",{d:"M350,225 C350,350 275,425 175,425 C75,425 25,350 25,225 C25,100 100,25 200,25 C300,25 350,100 350,225 Z",fill:"#8ecfb3"})})}),r.jsx(XA,{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&h=1200&fit=crop&q=100",alt:"Meditation and mindfulness practice",loading:"lazy"})]})})]})})}),r.jsxs(JA,{ref:t,children:[r.jsx(eL,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,60 C360,0 1080,120 1440,60 L1440,0 L0,0 Z",fill:"#ffffff"})})}),r.jsx(Vi,{children:r.jsxs(iL,{as:k.div,variants:m,initial:"hidden",animate:o?"visible":"hidden",children:[r.jsx(k.div,{variants:h,children:r.jsxs(nL,{children:[r.jsx($o,{className:"center",children:"Core Principles"}),r.jsx(rL,{children:"Our Approach to Wellness"})]})}),r.jsx(aL,{children:u.map((g,v)=>r.jsx(h2,{as:k.div,variants:h,whileHover:{y:-8,scale:1.02},transition:{duration:.3},$gradient:g.gradient,children:r.jsxs(oL,{children:[r.jsx(sL,{$color:g.color,children:r.jsx(lL,{children:g.icon})}),r.jsx(dL,{children:g.title}),r.jsx(cL,{children:g.description}),r.jsx(mL,{children:r.jsx(me,{})})]})},v))})]})}),r.jsx(tL,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",fill:"#ffffff"})})})]}),r.jsxs(hL,{ref:i,children:[r.jsx(pL,{}),r.jsx(Vi,{children:r.jsxs(uL,{as:k.div,variants:m,initial:"hidden",animate:s?"visible":"hidden",children:[r.jsxs(fL,{as:k.div,variants:h,children:[r.jsxs(gL,{children:[r.jsx(zf,{className:"centered",children:"Our Offerings"}),r.jsx(xL,{children:r.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",children:[r.jsx("path",{d:"M20 8 C20 8 15 12 15 18 C15 24 20 28 20 28 C20 28 25 24 25 18 C25 12 20 8 20 8 Z",stroke:"#c9a227",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M12 16 C12 16 8 18 8 22 C8 26 12 30 12 30",stroke:"#c9a227",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M28 16 C28 16 32 18 32 22 C32 26 28 30 28 30",stroke:"#c9a227",strokeWidth:"0.8",fill:"none"}),r.jsx("path",{d:"M10 22 C10 22 6 24 6 27 C6 30 10 32 10 32",stroke:"#c9a227",strokeWidth:"0.6",fill:"none"}),r.jsx("path",{d:"M30 22 C30 22 34 24 34 27 C34 30 30 32 30 32",stroke:"#c9a227",strokeWidth:"0.6",fill:"none"})]})})]}),r.jsx(wL,{children:"A gentle path towards balance, strength, and inner peace."}),r.jsx(yL,{children:"BK Shikha brings together over 12 years of Yoga experience, 15 years of Meditation practice, and 2+ years of NLP expertise, offering a complete spectrum of holistic wellness services tailored to your unique needs."})]}),r.jsx(vL,{children:p.map((g,v)=>r.jsxs(W0,{as:k.div,variants:h,whileHover:{y:-10,scale:1.02},transition:{duration:.4},children:[r.jsxs(bL,{children:[r.jsx("img",{src:g.image,alt:g.title,loading:"lazy"}),r.jsx(kL,{children:r.jsx(jL,{children:g.icon})})]}),r.jsxs($L,{children:[r.jsx(SL,{children:g.title}),r.jsx(CL,{children:g.description})]})]},v))})]})})]}),r.jsx(zL,{ref:n,children:r.jsx(Vi,{children:r.jsxs(TL,{as:k.div,variants:m,initial:"hidden",animate:c?"visible":"hidden",children:[r.jsx(k.div,{variants:h,children:r.jsxs(PL,{children:[r.jsx($o,{className:"center",children:"Who We Serve"}),r.jsx(ML,{children:"Who Can Benefit"})]})}),r.jsx(AL,{children:f.map((g,v)=>r.jsxs(D0,{as:k.div,variants:h,whileHover:{y:-8},transition:{duration:.4},children:[r.jsxs(LL,{children:[r.jsx(EL,{src:g.image,alt:g.title,loading:"lazy"}),r.jsx(IL,{children:r.jsx(RL,{children:g.emoji})})]}),r.jsxs(BL,{children:[r.jsx(FL,{children:g.title}),r.jsx(WL,{children:g.description})]})]},v))})]})})}),r.jsx(DL,{children:r.jsx(Vi,{children:r.jsx(VL,{as:k.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:r.jsxs(NL,{children:[r.jsx(OL,{children:"Experience the Transformation"}),r.jsx(_L,{children:"Ready to Begin Your Wellness Journey?"}),r.jsx(HL,{children:"Discover how our holistic, mind-first approach can help you achieve lasting physical, mental, and emotional well-being."}),r.jsxs(ZL,{to:"/contact",children:[r.jsx("span",{children:"Book Your Consultation"}),r.jsx(me,{})]})]})})})})]})},PA=l.div`
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
`,MA=l.section`
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
`,Sf=l.div`
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
`,AA=l.div`
  text-align: center;
`,LA=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 400;
  color: #2a3a2e;
  font-style: italic;
  margin: 0 0 1rem 0;
`,EA=l.p`
  font-family: ${d.fonts.body};
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  color: #5a8a62;
  font-style: italic;
  margin: 0;
`,IA=l.div`
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
`,RA=l.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,BA=l.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,FA=l.div`
  position: relative;
`,WA=l.div`
  position: relative;
  padding: 2rem;
`,DA=l.div`
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
`,VA=l.img`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
  height: auto;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: 200px 200px 100px 100px;
  box-shadow: 0 25px 60px rgba(42, 58, 46, 0.15);
`,m2=l.div`
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
`,NA=l(m2)`
  top: auto;
  bottom: 20%;
  right: -10px;
  background: linear-gradient(135deg, #c9a227 0%, #e0c45e 100%);
  box-shadow: 0 10px 30px rgba(201, 162, 39, 0.3);

  @media (max-width: ${d.breakpoints.mobile}) {
    bottom: 15%;
    right: 0;
  }
`,OA=l.div``,_A=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.875rem, 4vw, 2.5rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.25;
  margin-bottom: 1.5rem;
`,Cf=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.85;
  color: #6b7c6f;
  margin-bottom: 1.25rem;

  strong {
    color: #5a8a62;
    font-weight: 600;
  }
`,HA=l.div`
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
`,ZA=l.section`
  padding: 6rem 0;
  background: #ffffff;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,UA=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,YA=l.div``,QA=l.div`
  position: relative;

  @media (max-width: ${d.breakpoints.tablet}) {
    order: -1;
  }
`,$o=l.span`
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
`,zf=l.h2`
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
`,GA=l.p`
  font-family: ${d.fonts.heading};
  font-size: 1.375rem;
  font-style: italic;
  color: #5a8a62;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  border-left: 3px solid #c9a227;
`,Tf=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.85;
  color: #6b7c6f;
  margin-bottom: 1.25rem;
`,KA=l.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
`,qA=l.div`
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
`,XA=l.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  border-radius: 0 80px 0 80px;
  object-fit: cover;
  aspect-ratio: 5/6;
`,JA=l.section`
  padding: 8rem 0;
  background: linear-gradient(180deg, #f0f5f1 0%, #e8f0e9 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`,eL=l.div`
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
`,tL=l.div`
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
`,iL=l.div``,nL=l.div`
  text-align: center;
  margin-bottom: 4rem;
`,rL=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
`,aL=l.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,h2=l.div`
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
`,oL=l.div`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  padding: 2.5rem 2rem;
  border-radius: 22px;
  position: relative;
  height: 100%;
`,sL=l.div`
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
`,lL=l.div`
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
`,dL=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #2a3a2e;
  margin-bottom: 1rem;
  line-height: 1.3;
`,cL=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #6b7c6f;
  margin-bottom: 0;
`,mL=l.div`
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

  ${h2}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`,hL=l.section`
  padding: 7rem 0;
  background: linear-gradient(180deg, #faf7f2 0%, #f5ede4 50%, #f8f3eb 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`,pL=l.div`
  position: absolute;
  inset: 0;
  opacity: 0.4;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(200, 162, 39, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(90, 138, 98, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(142, 207, 179, 0.05) 0%, transparent 60%);
  pointer-events: none;
`,uL=l.div``,fL=l.div`
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
`,gL=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,xL=l.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,wL=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.125rem;
  font-style: italic;
  color: #7a6f5d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,yL=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.75;
  color: #6b7c6f;
  margin: 0;
`,vL=l.div`
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
`,bL=l.div`
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
`,kL=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(42, 58, 46, 0.1) 0%, rgba(42, 58, 46, 0.4) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,jL=l.div`
  font-size: 3.5rem;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
  transition: transform 0.4s ease;

  ${W0}:hover & {
    transform: scale(1.15) rotate(5deg);
  }
`,$L=l.div`
  padding: 1.75rem 1.5rem;
  text-align: center;
`,SL=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 500;
  color: #2a3a2e;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`,CL=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.65;
  color: #6b7c6f;
  margin: 0;
`,zL=l.section`
  padding: 6rem 0;
  background: #f8f9f6;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,TL=l.div``,PL=l.div`
  text-align: center;
  margin-bottom: 3rem;
`,ML=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #2a3a2e;
  line-height: 1.2;
`,AL=l.div`
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
`,LL=l.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`,EL=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${D0}:hover & {
    transform: scale(1.1);
  }
`,IL=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(42, 58, 46, 0.7) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1.5rem;
`,RL=l.div`
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  transition: transform 0.4s ease;

  ${D0}:hover & {
    transform: scale(1.2) rotate(10deg);
  }
`,BL=l.div`
  padding: 2rem 1.75rem;
`,FL=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.375rem;
  font-weight: 600;
  color: #2a3a2e;
  margin-bottom: 0.875rem;
  line-height: 1.3;
`,WL=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #6b7c6f;
  margin: 0;
`,DL=l.section`
  padding: 4rem 0 6rem;
  background: #f8f9f6;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 3rem 0 4rem;
  }
`,VL=l.div`
  background: linear-gradient(135deg, #2a3a2e 0%, #3d5a40 100%);
  border-radius: 28px;
  padding: 4rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 2.5rem 2rem;
  }
`,NL=l.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`,OL=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  color: #c9a227;
  margin-bottom: 0.75rem;
`,_L=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 400;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 1.25rem;
`,HL=l.p`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
`,ZL=l(V)`
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
`,UL=({testimonials:e,autoplay:t=!0,autoplayInterval:i=5e3,colors:n={name:d.colors.primary,designation:d.colors.textLight,testimony:d.colors.text,arrowBackground:d.colors.cta,arrowForeground:"#ffffff",arrowHoverBackground:d.colors.ctaHover},fontSizes:a={name:"1.5rem",designation:"1rem",quote:"1.125rem"}})=>{const[o,s]=j.useState(0),[c,m]=j.useState(0),h=j.useCallback(()=>{m(1),s(v=>(v+1)%e.length)},[e.length]),u=j.useCallback(()=>{m(-1),s(v=>(v-1+e.length)%e.length)},[e.length]);j.useEffect(()=>{if(!t)return;const v=setInterval(h,i);return()=>clearInterval(v)},[t,i,h]);const p=e[o],f={enter:v=>({x:v>0?100:-100,opacity:0}),center:{x:0,opacity:1},exit:v=>({x:v<0?100:-100,opacity:0})},g={enter:v=>({scale:.8,opacity:0,rotate:v>0?10:-10}),center:{scale:1,opacity:1,rotate:0},exit:v=>({scale:.8,opacity:0,rotate:v<0?10:-10})};return r.jsxs(YL,{children:[r.jsxs(QL,{children:[r.jsx(Bt,{mode:"wait",custom:c,children:r.jsxs(GL,{custom:c,variants:f,initial:"enter",animate:"center",exit:"exit",transition:{duration:.5,ease:"easeInOut"},children:[r.jsx(KL,{children:'"'}),r.jsx(qL,{style:{color:n.testimony,fontSize:a.quote},children:p.quote}),r.jsxs(XL,{children:[r.jsx(JL,{style:{color:n.name,fontSize:a.name},children:p.name}),r.jsx(eE,{style:{color:n.designation,fontSize:a.designation},children:p.designation}),p.location&&r.jsx(tE,{style:{color:n.designation},children:p.location})]})]},o)}),r.jsxs(iE,{children:[r.jsx(Pf,{onClick:u,$bgColor:n.arrowBackground,$fgColor:n.arrowForeground,$hoverColor:n.arrowHoverBackground,whileHover:{scale:1.1},whileTap:{scale:.95},children:r.jsx(E5,{})}),r.jsx(Pf,{onClick:h,$bgColor:n.arrowBackground,$fgColor:n.arrowForeground,$hoverColor:n.arrowHoverBackground,whileHover:{scale:1.1},whileTap:{scale:.95},children:r.jsx(I5,{})})]})]}),r.jsxs(nE,{children:[r.jsxs(rE,{children:[r.jsx(Bt,{mode:"wait",custom:c,children:r.jsx(aE,{custom:c,variants:g,initial:"enter",animate:"center",exit:"exit",transition:{duration:.5,ease:"easeInOut"},children:p.src?r.jsx("img",{src:p.src,alt:p.name}):r.jsx(oE,{children:p.emoji||"🧘"})},o)}),r.jsx(Mf,{$size:"120%",$opacity:.1}),r.jsx(Mf,{$size:"140%",$opacity:.05})]}),r.jsx(sE,{children:e.map((v,b)=>r.jsx(lE,{$isActive:b===o,onClick:()=>{m(b>o?1:-1),s(b)}},b))})]})]})},YL=l.div`
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
`,QL=l.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,GL=l(k.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,KL=l.span`
  font-family: ${d.fonts.heading};
  font-size: 5rem;
  line-height: 0.5;
  color: ${d.colors.accent};
  opacity: 0.3;
`,qL=l.p`
  font-family: ${d.fonts.body};
  line-height: 1.8;
  font-style: italic;
  margin: 0;
`,XL=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,JL=l.h4`
  font-family: ${d.fonts.heading};
  font-weight: 600;
  margin: 0;
`,eE=l.p`
  font-family: ${d.fonts.body};
  margin: 0;
`,tE=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  margin: 0;
  opacity: 0.8;
`,iE=l.div`
  display: flex;
  gap: 1rem;
`,Pf=l(k.button)`
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
`,nE=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,rE=l.div`
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
`,aE=l(k.div)`
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
`,oE=l.div`
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
`,Mf=l.div`
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
`,sE=l.div`
  display: flex;
  gap: 0.5rem;
`,lE=l.button`
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
`,dE=()=>{const e=[{quote:"BK Shikha transformed my life completely. I was drowning in work stress, constant anxiety, and felt disconnected from myself. Her yoga and mindfulness guidance gave me the peace I was desperately seeking. She has this incredible ability to understand exactly what you need without you even saying it.",name:"Priya Sharma",designation:"Software Engineer",location:"Bangalore",src:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=100"},{quote:"The confidence I've gained through her NLP coaching is nothing short of miraculous. I used to doubt myself constantly, second-guess every decision, and live in fear of judgment. BK Shikha helped me reprogram those limiting beliefs and step into my power.",name:"Anjali Verma",designation:"Entrepreneur",location:"Mumbai",src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=100"},{quote:"As a student dealing with academic pressure, family expectations, and career anxiety, I was constantly overwhelmed. BK Shikha's stress relief sessions were literally a lifesaver. She taught me breathing techniques and mindfulness practices I use every single day.",name:"Rahul Mehta",designation:"College Student",location:"Delhi",src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=100"},{quote:"I came to BK Shikha feeling stuck in every area of my life. Her holistic transformation program changed everything. It wasn't just about yoga poses or meditation; it was about redesigning my entire life with intention. Six months later, I'm living a life I only dreamed of.",name:"Kavita Singh",designation:"Marketing Manager",location:"Pune",src:"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&auto=format&fit=crop&q=100"}],t=[{name:"Priya Sharma",role:"Software Engineer",location:"Bangalore",image:"👩‍💻",text:"BK Shikha transformed my life completely. I was drowning in work stress, constant anxiety, and felt disconnected from myself. Her yoga and mindfulness guidance gave me the peace I was desperately seeking. She has this incredible ability to understand exactly what you need without you even saying it. The personalized approach, the genuine care - it's not just coaching, it's healing. I sleep better, I feel confident, and I've rediscovered joy in my life.",transformation:"From anxiety and burnout to peace and confidence",rating:5},{name:"Anjali Verma",role:"Entrepreneur",location:"Mumbai",image:"👩‍💼",text:"The confidence I've gained through her NLP coaching is nothing short of miraculous. I used to doubt myself constantly, second-guess every decision, and live in fear of judgment. BK Shikha helped me reprogram those limiting beliefs and step into my power. Her sessions are transformative - she combines practical tools with deep emotional work. Now I lead my team with confidence, speak my truth unapologetically, and trust my intuition completely.",transformation:"From self-doubt to empowered leadership",rating:5},{name:"Rahul Mehta",role:"College Student",location:"Delhi",image:"👨‍🎓",text:"As a student dealing with academic pressure, family expectations, and career anxiety, I was constantly overwhelmed. BK Shikha's stress relief sessions were literally a lifesaver. She taught me breathing techniques, mindfulness practices, and gave me tools I use every single day. What makes her special is how relatable and down-to-earth she is. She never makes you feel judged. Her guidance helped me ace my exams while staying mentally healthy.",transformation:"From overwhelm to balanced achievement",rating:5},{name:"Kavita Singh",role:"Marketing Manager",location:"Pune",image:"👩",text:"I came to BK Shikha feeling stuck in every area of my life - relationships, career, personal growth. Her holistic transformation program changed everything. It wasn't just about yoga poses or meditation; it was about redesigning my entire life with intention. She held space for my tears, celebrated my wins, and pushed me gently when I needed it. Six months later, I'm living a life I only dreamed of. This work is sacred.",transformation:"From feeling stuck to purposeful living",rating:5},{name:"Sanjay Kumar",role:"IT Professional",location:"Hyderabad",image:"👨‍💼",text:"I was skeptical about yoga and wellness coaching at first. But chronic back pain and stress-induced health issues forced me to try. BK Shikha's personalized yoga coaching not only healed my physical pain but also gave me mental clarity I hadn't experienced in years. Her scientific yet spiritual approach resonated with me. She explains the 'why' behind every practice, making it easy to commit. My life quality has improved dramatically.",transformation:"From physical pain to holistic wellness",rating:5},{name:"Meera Kapoor",role:"Stay-at-home Mom",location:"Jaipur",image:"👩‍🦰",text:"After becoming a mother, I lost myself completely. I was just 'mom', nothing more. BK Shikha's confidence and self-love coaching helped me rediscover who I am beyond my roles. She taught me that self-care isn't selfish, that my dreams still matter, and that I deserve to feel beautiful and confident. Her compassion and understanding made me feel seen for the first time in years. I'm now pursuing my passion and setting healthy boundaries.",transformation:"From lost identity to empowered woman",rating:5},{name:"Aditya Joshi",role:"Creative Professional",location:"Goa",image:"🎨",text:"BK Shikha's emotional wellness mentoring helped me process years of suppressed emotions and childhood trauma. I always thought I was 'fine' but was actually numbing myself through work and distractions. Her safe, judgment-free space allowed me to finally feel and heal. The tools she gave me for emotional regulation have been life-changing. I'm more present in my relationships, more creative in my work, and genuinely happy.",transformation:"From emotional numbness to authentic feeling",rating:5},{name:"Simran Patel",role:"HR Director",location:"Ahmedabad",image:"👩‍💼",text:"I work in a high-stress corporate environment where burnout is normalized. BK Shikha taught me that success doesn't require sacrificing my wellbeing. Through our sessions, I learned mindfulness practices that I integrate seamlessly into my workday. Her practical, no-nonsense approach fits perfectly with my lifestyle. I'm more productive, more patient with my team, and actually enjoy my life again. She's a game-changer.",transformation:"From corporate burnout to mindful success",rating:5},{name:"Rohan Desai",role:"Fitness Trainer",location:"Chennai",image:"💪",text:"Even as a fitness professional, I was missing the mind-body connection that yoga offers. BK Shikha's expertise in yogic philosophy and practice deepened my understanding of true wellness. She helped me see fitness as more than physical - it's emotional, mental, and spiritual. The knowledge I gained from her has made me a better trainer and a more balanced person. Her teachings are authentic and rooted in genuine experience.",transformation:"From physical fitness to holistic wellness",rating:5}];return r.jsxs(cE,{children:[r.jsx(mE,{children:r.jsx("div",{className:"container",children:r.jsxs(hE,{as:k.div,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:[r.jsx(pE,{children:"Transformation Stories"}),r.jsx(uE,{children:"Real People, Real Transformations"}),r.jsx(fE,{children:"These are the voices of beautiful souls who chose healing, growth, and transformation. Their journeys inspire us all."})]})})}),r.jsx(gE,{children:r.jsxs("div",{className:"container",children:[r.jsx(Bs,{subtitle:"Featured Stories",children:"Hear From Our Community"}),r.jsx(UL,{testimonials:e,autoplay:!0,autoplayInterval:6e3,colors:{name:d.colors.primary,designation:d.colors.textLight,testimony:d.colors.text,arrowBackground:d.colors.cta,arrowForeground:"#ffffff",arrowHoverBackground:d.colors.ctaHover},fontSizes:{name:"1.75rem",designation:"1rem",quote:"1.125rem"}})]})}),r.jsx(xE,{className:"section",children:r.jsx("div",{className:"container",children:r.jsx(wE,{children:t.map((i,n)=>r.jsxs(yE,{as:k.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.5,delay:n%3*.1},children:[r.jsx(vE,{children:'"'}),r.jsx(bE,{children:i.text}),r.jsxs(kE,{children:["✨ ",i.transformation]}),r.jsx(jE,{children:Array.from({length:i.rating}).map((a,o)=>r.jsx($E,{children:r.jsx(ei,{fill:d.colors.accent})},o))}),r.jsxs(SE,{children:[r.jsx(CE,{children:i.image}),r.jsxs(zE,{children:[r.jsx(TE,{children:i.name}),r.jsx(PE,{children:i.role}),r.jsx(ME,{children:i.location})]})]})]},n))})})}),r.jsx(AE,{className:"section",children:r.jsxs("div",{className:"container",children:[r.jsx(Bs,{subtitle:"Impact in Numbers",children:"A Community of Transformed Lives"}),r.jsxs(LE,{children:[r.jsxs(So,{as:k.div,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5},children:[r.jsx(Co,{children:"500+"}),r.jsx(zo,{children:"Lives Transformed"})]}),r.jsxs(So,{as:k.div,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5,delay:.1},children:[r.jsx(Co,{children:"1000+"}),r.jsx(zo,{children:"Healing Sessions"})]}),r.jsxs(So,{as:k.div,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5,delay:.2},children:[r.jsx(Co,{children:"10+"}),r.jsx(zo,{children:"Years of Experience"})]}),r.jsxs(So,{as:k.div,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5,delay:.3},children:[r.jsx(Co,{children:"98%"}),r.jsx(zo,{children:"Client Satisfaction"})]})]})]})}),r.jsx(EE,{className:"section",children:r.jsx("div",{className:"container",children:r.jsxs(IE,{as:k.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsx(RE,{children:"Ready to Write Your Own Transformation Story?"}),r.jsx(BE,{children:"Every journey begins with a single step. Let's take that step together and create the life you deserve."}),r.jsx(FE,{to:"/contact",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Begin Your Journey Today"})]})})})]})},cE=l.div``,mE=l.section`
  padding: 6rem 0 4rem;
  background: linear-gradient(
    135deg,
    ${d.colors.background} 0%,
    ${d.colors.backgroundAlt} 100%
  );
  text-align: center;
`,hE=l.div`
  max-width: 800px;
  margin: 0 auto;
`,pE=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${d.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 1rem;
`,uE=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: ${d.colors.primary};
  margin: 0 0 1.5rem;
`,fE=l.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${d.colors.text};
  margin: 0;
`,gE=l.section`
  padding: 5rem 0;
  background: ${d.colors.background};
`,xE=l.section`
  background: ${d.colors.backgroundAlt};
`,wE=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,yE=l.div`
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
`,vE=l.div`
  font-family: ${d.fonts.heading};
  font-size: 5rem;
  line-height: 1;
  color: ${d.colors.secondaryLight};
  opacity: 0.3;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  z-index: 1;
`,bE=l.p`
  font-size: 1.0625rem;
  line-height: 1.8;
  color: ${d.colors.text};
  margin: 0;
  position: relative;
  z-index: 2;
  font-style: italic;
`,kE=l.div`
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
`,jE=l.div`
  display: flex;
  gap: 0.25rem;
`,$E=l.span`
  color: ${d.colors.accent};
  font-size: 1.1rem;
`,SE=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${d.colors.backgroundDark};
`,CE=l.div`
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
`,zE=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,TE=l.h4`
  font-family: ${d.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: ${d.colors.primary};
  margin: 0;
`,PE=l.p`
  font-size: 0.9rem;
  color: ${d.colors.textLight};
  margin: 0;
`,ME=l.p`
  font-size: 0.85rem;
  color: ${d.colors.accent};
  margin: 0;
`,AE=l.section`
  background: white;
`,LE=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${d.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${d.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,So=l.div`
  background: linear-gradient(
    135deg,
    ${d.colors.secondaryLight},
    ${d.colors.accentLight}
  );
  padding: 3rem 2rem;
  border-radius: ${d.borderRadius.xl};
  text-align: center;
  box-shadow: ${d.shadows.md};
`,Co=l.div`
  font-family: ${d.fonts.heading};
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  line-height: 1;
  margin-bottom: 1rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`,zo=l.p`
  font-size: 1.125rem;
  color: white;
  margin: 0;
  opacity: 0.95;
`,EE=l.section`
  background: linear-gradient(
    135deg,
    ${d.colors.secondaryLight} 0%,
    ${d.colors.accentLight} 100%
  );
`,IE=l.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`,RE=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: white;
  margin: 0 0 1.5rem;
`,BE=l.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: white;
  margin: 0 0 2.5rem;
`,FE=l(k.a)`
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
`,Ve={featured:"https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=2400&h=1600&fit=crop&q=100",yoga1:"https://images.unsplash.com/photo-1573384666979-2b1e160d2d08?w=1600&h=1200&fit=crop&q=100",yoga2:"https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&h=1200&fit=crop&q=100",meditation:"https://images.unsplash.com/photo-1528319725582-ddc096101511?w=1600&h=1200&fit=crop&q=100",mindset:"https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&h=1200&fit=crop&q=100",wellness:"https://images.unsplash.com/photo-1559595500-e15296bdbb48?w=1600&h=1200&fit=crop&q=100",lifestyle:"https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=1600&h=1200&fit=crop&q=100",nature:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&h=1200&fit=crop&q=100",breathwork:"https://images.unsplash.com/photo-1512291313931-d4291c8475c4?w=1600&h=1200&fit=crop&q=100"},WE=()=>{const e=j.useRef(null),t=j.useRef(null),i=j.useRef(null),n=j.useRef(null),a=j.useRef(null),[o,s]=j.useState("All"),c=N(e,{once:!0,amount:.3}),m=N(t,{once:!0,amount:.2}),h=N(i,{once:!0,amount:.1}),u=N(n,{once:!0,amount:.3}),p=N(a,{once:!0,amount:.3}),f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},g={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.1,.25,1]}}},v=[{name:"All",icon:r.jsx(ei,{}),count:12},{name:"Yoga",icon:r.jsx(ka,{}),count:5},{name:"Meditation",icon:r.jsx(Wa,{}),count:3},{name:"Mindset",icon:r.jsx(O6,{}),count:2},{name:"Wellness",icon:r.jsx(mt,{}),count:2}],b={category:"Yoga & Wellness",title:"The Sacred Journey Within: Discovering Your True Self Through Yoga",excerpt:"Embark on a transformative exploration of self-discovery through the ancient wisdom of yoga. Learn how to connect with your innermost being, release limiting patterns, and awaken to the infinite potential that resides within you.",readTime:"12 min read",date:"January 25, 2026",image:Ve.featured,author:"BK Shikha"},C=[{category:"Yoga & Wellness",title:"Have a Good Body and Soul Balance",excerpt:"Discover how regular yoga practice can help you achieve perfect harmony between your physical body and inner peace.",readTime:"8 min read",date:"January 25, 2026",image:Ve.yoga2,slug:"body-soul-balance"},{category:"Yoga Tips",title:"How to Keep Yoga Practice During Busy Times",excerpt:"Learn effective strategies to maintain your yoga practice even during busy schedules and challenging times.",readTime:"7 min read",date:"January 20, 2026",image:Ve.yoga1,slug:"keep-yoga-practice"},{category:"Wellness",title:"The Yoga of Food and Mindful Eating",excerpt:"Explore the connection between mindful eating, nutrition, and your yoga journey for complete wellness.",readTime:"9 min read",date:"January 15, 2026",image:Ve.wellness,slug:"yoga-of-food"},{category:"Stress Relief",title:"5 Yoga Poses to Instantly Relieve Stress and Anxiety",excerpt:"Discover simple yet powerful yoga poses that calm your nervous system and bring immediate peace.",readTime:"5 min read",date:"January 22, 2026",image:Ve.meditation,slug:"yoga-stress-relief"},{category:"Morning Rituals",title:"Create a Mindful Morning Routine That Transforms Your Day",excerpt:"Learn how to design a morning practice that sets the tone for joy, productivity, and inner peace.",readTime:"7 min read",date:"January 18, 2026",image:Ve.lifestyle,slug:"mindful-morning-routine"},{category:"Meditation",title:"The Art of Stillness: A Guide to Deep Meditation",excerpt:"Explore the profound depths of meditation and discover techniques for achieving lasting inner calm.",readTime:"8 min read",date:"January 15, 2026",image:Ve.breathwork,slug:"deep-meditation-guide"},{category:"Mindset",title:"The Power of Mindset: How to Reset Your Thoughts for Success",excerpt:"Explore practical NLP techniques to reprogram limiting beliefs and create empowering thought patterns.",readTime:"8 min read",date:"January 12, 2026",image:Ve.mindset,slug:"mindset-reset"},{category:"Wellness",title:"Emotional Balance: Tools for Processing Difficult Feelings",excerpt:"Navigate challenging emotions with grace and wisdom. Discover techniques for emotional regulation.",readTime:"6 min read",date:"January 8, 2026",image:Ve.nature,slug:"emotional-balance"}],y=o==="All"?C:C.filter(x=>x.category.toLowerCase().includes(o.toLowerCase()));return r.jsxs(DE,{children:[r.jsxs(VE,{ref:e,children:[r.jsx(Rd,{className:"orb1"}),r.jsx(Rd,{className:"orb2"}),r.jsx(Rd,{className:"orb3"}),r.jsx(Af,{className:"left",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1"}),r.jsx("path",{d:"M60 60L30 100",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L35 160",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L40 220",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 60L90 100",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L85 160",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L80 220",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"})]})}),r.jsx(Af,{className:"right",children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"1"}),r.jsx("path",{d:"M60 60L30 100",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L35 160",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L40 220",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 60L90 100",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 120L85 160",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"}),r.jsx("path",{d:"M60 180L80 220",stroke:"rgba(206, 197, 173, 0.2)",strokeWidth:"0.8"})]})}),r.jsx(Ni,{children:r.jsxs(NE,{as:k.div,variants:f,initial:"hidden",animate:c?"visible":"hidden",children:[r.jsx(k.div,{variants:g,children:r.jsx(OE,{children:"Wellness Wisdom & Insights"})}),r.jsx(k.div,{variants:g,children:r.jsxs(_E,{children:["Stories of ",r.jsx(HE,{children:"Transformation"})]})}),r.jsx(k.div,{variants:g,children:r.jsx(ZE,{children:"Explore ancient wisdom and modern wellness practices. Discover articles on yoga, meditation, mindfulness, and holistic living to support your journey of self-discovery."})}),r.jsx(k.div,{variants:g,children:r.jsxs(UE,{children:[r.jsxs(Bd,{children:[r.jsx(Fd,{children:"50+"}),r.jsx(Wd,{children:"Articles"})]}),r.jsx(Lf,{}),r.jsxs(Bd,{children:[r.jsx(Fd,{children:"12"}),r.jsx(Wd,{children:"Topics"})]}),r.jsx(Lf,{}),r.jsxs(Bd,{children:[r.jsx(Fd,{children:"10K+"}),r.jsx(Wd,{children:"Readers"})]})]})})]})}),r.jsx(YE,{children:r.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",preserveAspectRatio:"none",children:r.jsx("path",{d:"M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",fill:"#ffffff"})})})]}),r.jsxs(QE,{ref:t,children:[r.jsx(Ni,{children:r.jsxs(GE,{as:k.div,variants:f,initial:"hidden",animate:m?"visible":"hidden",children:[r.jsx(KE,{as:k.div,variants:g,children:r.jsxs(qE,{children:[r.jsx(XE,{children:r.jsx("svg",{viewBox:"0 0 400 350",fill:"none",children:r.jsx("path",{d:"M350,175 C350,280 275,325 175,325 C75,325 25,280 25,175 C25,70 100,25 200,25 C300,25 350,70 350,175 Z",fill:"#8ecfb3",opacity:"0.3"})})}),r.jsx(JE,{src:b.image,alt:b.title}),r.jsxs(eI,{children:[r.jsx(ei,{}),"Featured Article"]})]})}),r.jsxs(tI,{as:k.div,variants:g,children:[r.jsxs(iI,{children:[r.jsx(ka,{}),b.category]}),r.jsx(nI,{children:b.title}),r.jsx(rI,{children:b.excerpt}),r.jsxs(aI,{children:[r.jsxs(Ef,{children:[r.jsx(ba,{}),b.readTime]}),r.jsx(oI,{children:"•"}),r.jsx(Ef,{children:b.date})]}),r.jsxs(sI,{children:[r.jsx(lI,{children:"BK"}),r.jsxs(dI,{children:[r.jsxs(cI,{children:["By ",b.author]}),r.jsx(mI,{children:"Holistic Wellness Coach"})]})]}),r.jsxs(hI,{to:"/blog/featured",children:["Read Full Article",r.jsx(me,{})]})]})]})}),r.jsx(pI,{children:r.jsxs("svg",{viewBox:"0 0 200 400",fill:"none",children:[r.jsx("path",{d:"M100,20 Q150,100 140,200 Q130,300 100,380",stroke:"#e8f0e9",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M100,80 Q60,120 40,100",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,140 Q55,180 30,150",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,200 Q50,240 25,200",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,80 Q140,120 160,100",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,140 Q145,180 170,150",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M100,200 Q150,240 175,200",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"})]})})]}),r.jsx(uI,{ref:n,children:r.jsx(Ni,{children:r.jsxs(fI,{as:k.div,variants:f,initial:"hidden",animate:u?"visible":"hidden",children:[r.jsx(k.div,{variants:g,children:r.jsxs(gI,{children:[r.jsx(xI,{children:"Explore Topics"}),r.jsx(wI,{children:"Browse by Category"})]})}),r.jsx(yI,{as:k.div,variants:g,children:v.map((x,w)=>r.jsxs(vI,{$active:o===x.name,onClick:()=>s(x.name),whileHover:{y:-3},whileTap:{scale:.97},children:[r.jsx(bI,{$active:o===x.name,children:x.icon}),r.jsx(kI,{children:x.name}),r.jsx(jI,{$active:o===x.name,children:x.count})]},x.name))})]})})}),r.jsxs($I,{ref:i,children:[r.jsx(Ni,{children:r.jsxs(SI,{as:k.div,variants:f,initial:"hidden",animate:h?"visible":"hidden",children:[r.jsx(Bt,{mode:"wait",children:r.jsx(CI,{as:k.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:y.map((x,w)=>r.jsxs(Na,{as:k.article,variants:g,whileHover:{y:-12,transition:{duration:.3}},onClick:()=>window.location.href=`/blog/${x.slug}`,style:{cursor:"pointer"},children:[r.jsxs(zI,{children:[r.jsx(TI,{src:x.image,alt:x.title,loading:"lazy"}),r.jsx(PI,{}),r.jsx(MI,{children:x.category}),r.jsx(AI,{children:r.jsx(Ls,{})})]}),r.jsxs(LI,{children:[r.jsxs(EI,{children:[r.jsx(II,{children:x.date}),r.jsxs(RI,{children:[r.jsx(ba,{}),x.readTime]})]}),r.jsx(BI,{children:x.title}),r.jsx(FI,{children:x.excerpt}),r.jsxs(WI,{as:V,to:`/blog/${x.slug}`,children:["Continue Reading",r.jsx(me,{})]})]})]},w))},o)}),r.jsx(DI,{children:r.jsxs(VI,{as:k.button,whileHover:{scale:1.03},whileTap:{scale:.97},children:["Load More Articles",r.jsx(me,{})]})})]})}),r.jsx(NI,{children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"#e8f0e9",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M60 30V270",stroke:"#e8f0e9",strokeWidth:"1"})]})})]}),r.jsxs(OI,{children:[r.jsx(Ni,{children:r.jsxs(_I,{as:k.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsx(HI,{children:'"'}),r.jsx(ZI,{children:"The journey of a thousand miles begins with a single breath. Every article here is a step toward your highest self."}),r.jsx(UI,{children:"— BK Shikha"})]})}),r.jsx(If,{className:"left"}),r.jsx(If,{className:"right"})]}),r.jsx(YI,{ref:a,children:r.jsx(Ni,{children:r.jsxs(QI,{as:k.div,variants:f,initial:"hidden",animate:p?"visible":"hidden",children:[r.jsxs(GI,{children:[r.jsx(KI,{as:k.div,variants:g,children:r.jsxs(qI,{children:[r.jsx(XI,{src:Ve.meditation,alt:"Meditation practice"}),r.jsx(JI,{}),r.jsxs(eR,{children:[r.jsx(tR,{children:r.jsx(As,{})}),r.jsx(iR,{children:"Weekly Wisdom"})]})]})}),r.jsxs(nR,{as:k.div,variants:g,children:[r.jsx(rR,{children:"Join Our Community"}),r.jsx(aR,{children:"Receive Weekly Wellness Wisdom"}),r.jsx(oR,{children:"Get exclusive articles, guided meditations, and wellness tips delivered straight to your inbox. Join 10,000+ mindful souls on this journey."}),r.jsxs(sR,{children:[r.jsxs(lR,{children:[r.jsx(As,{}),r.jsx(dR,{type:"email",placeholder:"Enter your email address","aria-label":"Email address"})]}),r.jsxs(cR,{as:k.button,whileHover:{scale:1.02},whileTap:{scale:.98},children:["Subscribe",r.jsx(me,{})]})]}),r.jsxs(mR,{children:[r.jsxs(Dd,{children:[r.jsx(Vd,{children:"✓"}),"Weekly articles & insights"]}),r.jsxs(Dd,{children:[r.jsx(Vd,{children:"✓"}),"Exclusive meditations"]}),r.jsxs(Dd,{children:[r.jsx(Vd,{children:"✓"}),"Unsubscribe anytime"]})]})]})]}),r.jsx(hR,{children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",children:[r.jsx("circle",{cx:"100",cy:"100",r:"80",stroke:"#cec5ad",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.3"}),r.jsx("circle",{cx:"100",cy:"100",r:"60",stroke:"#22371b",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.2"}),r.jsx("circle",{cx:"100",cy:"100",r:"40",stroke:"#cec5ad",strokeWidth:"1",strokeDasharray:"4 4",opacity:"0.4"})]})})]})})}),r.jsx(pR,{children:r.jsx(Ni,{children:r.jsxs(uR,{as:k.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[r.jsx(fR,{children:r.jsx(rn,{})}),r.jsx(gR,{children:"Follow the Journey"}),r.jsx(xR,{children:"Daily inspiration, behind-the-scenes moments, and wellness tips on Instagram"}),r.jsxs(wR,{href:"https://www.instagram.com/cyd_bkshikha",target:"_blank",rel:"noopener noreferrer",as:k.a,whileHover:{scale:1.05},whileTap:{scale:.95},children:["@cyd_bkshikha",r.jsx(me,{})]}),r.jsx(yR,{children:[Ve.yoga1,Ve.meditation,Ve.wellness,Ve.nature].map((x,w)=>r.jsxs(p2,{children:[r.jsx("img",{src:x,alt:`Instagram post ${w+1}`}),r.jsx(vR,{children:r.jsx(mt,{})})]},w))})]})})})]})},DE=l.div`
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
`,VE=l.section`
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
`,Af=l.div`
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
`,NE=l.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`,OE=l.span`
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
`,_E=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 1.5rem;
`,HE=l.span`
  color: #cec5ad;
  font-style: italic;
  font-weight: 400;
`,ZE=l.p`
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
`,UE=l.div`
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
`,Lf=l.div`
  width: 1px;
  height: 40px;
  background: rgba(206, 197, 173, 0.3);
`,YE=l.div`
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
`,QE=l.section`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,GE=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,KE=l.div`
  position: relative;
`,qE=l.div`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
`,XE=l.div`
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
`,JE=l.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 30px;
  position: relative;
  z-index: 1;
`,eI=l.div`
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
`,tI=l.div``,iI=l.div`
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
`,nI=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.25;
  margin: 0 0 1.25rem;
`,rI=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.85;
  color: #6b7c6f;
  margin: 0 0 1.5rem;
`,aI=l.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`,Ef=l.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: ${d.fonts.body};
  font-size: 0.9rem;
  color: #7a8a7a;

  svg {
    font-size: 1rem;
  }
`,oI=l.span`
  color: #cec5ad;
`,sI=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.25rem;
  background: #f8f9f6;
  border-radius: 16px;
`,lI=l.div`
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
`,dI=l.div``,cI=l.div`
  font-family: ${d.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  color: #22371b;
`,mI=l.div`
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  color: #7a8a7a;
`,hI=l(V)`
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
`,pI=l.div`
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
`,uI=l.section`
  padding: 4rem 0;
  background: linear-gradient(180deg, #f8f9f6 0%, #eef4ef 100%);
`,fI=l.div``,gI=l.div`
  text-align: center;
  margin-bottom: 2.5rem;
`,xI=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  font-style: italic;
  color: #c9a227;
  margin-bottom: 0.5rem;
`,wI=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #22371b;
  line-height: 1.2;
`,yI=l.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,vI=l(k.button)`
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
`,bI=l.span`
  display: flex;
  font-size: 1.125rem;
  color: ${e=>e.$active?"#cec5ad":"#5a8a62"};
`,kI=l.span``,jI=l.span`
  padding: 0.25rem 0.625rem;
  background: ${e=>e.$active?"rgba(206, 197, 173, 0.2)":"rgba(90, 138, 98, 0.1)"};
  color: ${e=>e.$active?"#cec5ad":"#5a8a62"};
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 600;
`,$I=l.section`
  padding: 5rem 0;
  background: #eef4ef;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,SI=l.div``,CI=l.div`
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
`,Na=l.article`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(34, 55, 27, 0.08);
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 20px 60px rgba(34, 55, 27, 0.15);
  }
`,zI=l.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
`,TI=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${Na}:hover & {
    transform: scale(1.1);
  }
`,PI=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(34, 55, 27, 0.4) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Na}:hover & {
    opacity: 1;
  }
`,MI=l.div`
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
`,AI=l.div`
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

  ${Na}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  svg {
    margin-left: 2px;
  }
`,LI=l.div`
  padding: 1.5rem;
`,EI=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`,II=l.span`
  font-family: ${d.fonts.body};
  font-size: 0.8125rem;
  color: #7a8a7a;
`,RI=l.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${d.fonts.body};
  font-size: 0.8125rem;
  color: #7a8a7a;

  svg {
    font-size: 0.875rem;
  }
`,BI=l.h3`
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
`,FI=l.p`
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #6b7c6f;
  margin: 0 0 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,WI=l.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${d.fonts.body};
  font-size: 0.9375rem;
  font-weight: 500;
  color: #5a8a62;
  text-decoration: none;
  transition: all 0.3s ease;

  ${Na}:hover & {
    color: #22371b;
    gap: 0.75rem;
  }
`,DI=l.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`,VI=l.button`
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
`,NI=l.div`
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
`,OI=l.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #22371b 0%, #21371a 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
`,_I=l.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,HI=l.span`
  display: block;
  font-family: ${d.fonts.heading};
  font-size: 8rem;
  color: #cec5ad;
  opacity: 0.2;
  line-height: 0.5;
  margin-bottom: 1rem;
`,ZI=l.p`
  font-family: ${d.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 400;
  font-style: italic;
  color: white;
  line-height: 1.6;
  margin: 0 0 1.5rem;
`,UI=l.span`
  font-family: ${d.fonts.body};
  font-size: 1rem;
  color: #cec5ad;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`,If=l.div`
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
`,YI=l.section`
  padding: 6rem 0;
  background: #f8f9f6;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,QI=l.div`
  background: white;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(34, 55, 27, 0.1);
  position: relative;
`,GI=l.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,KI=l.div`
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`,qI=l.div`
  position: relative;
  height: 100%;
  min-height: 500px;
`,XI=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,JI=l.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(34, 55, 27, 0.3), rgba(90, 138, 98, 0.2));
`,eR=l.div`
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
`,tR=l.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #22371b, #5a8a62);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`,iR=l.span`
  font-family: ${d.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  color: #22371b;
`,nR=l.div`
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`,rR=l.span`
  display: inline-block;
  font-family: ${d.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5a8a62;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
`,aR=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #22371b;
  line-height: 1.2;
  margin: 0 0 1rem;
`,oR=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  margin: 0 0 2rem;
`,sR=l.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`,lR=l.div`
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
`,dR=l.input`
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
`,cR=l.button`
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
`,mR=l.div`
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
`,hR=l.div`
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
`,pR=l.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #eef4ef 100%);

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`,uR=l.div`
  text-align: center;
`,fR=l.div`
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
`,gR=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 400;
  color: #22371b;
  margin: 0 0 1rem;
`,xR=l.p`
  font-family: ${d.fonts.body};
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7c6f;
  max-width: 500px;
  margin: 0 auto 2rem;
`,wR=l.a`
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
`,yR=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`,p2=l.div`
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
`,vR=l.div`
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

  ${p2}:hover & {
    opacity: 1;
  }
`,bR=()=>{const{slug:e}=bv(),t=r1(),i=j.useRef(null),n=j.useRef(null),a=j.useRef(null),o=N(i,{once:!0,amount:.3}),s=N(n,{once:!0,amount:.1}),c=N(a,{once:!0,amount:.2}),m=$9(e),h=S9(e);if(j.useEffect(()=>{window.scrollTo(0,0)},[e]),!m)return r.jsx(lB,{children:r.jsxs(dB,{children:[r.jsx("h1",{children:"Blog Post Not Found"}),r.jsx("p",{children:"Sorry, we couldn't find the blog post you're looking for."}),r.jsxs(cB,{to:"/blog",children:[r.jsx(gu,{})," Back to Blog"]})]})});const u={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},p={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}},f=(g,v)=>{switch(g.type){case"paragraph":return r.jsx(ER,{children:g.text},v);case"heading":return r.jsx(IR,{children:g.text},v);case"list":return r.jsx(RR,{children:g.items.map((b,C)=>r.jsx("li",{dangerouslySetInnerHTML:{__html:b}},C))},v);case"quote":return r.jsxs(BR,{children:[r.jsxs(FR,{children:['"',g.text,'"']}),g.author&&r.jsxs(WR,{children:["— ",g.author]})]},v);case"image":return r.jsx(DR,{children:r.jsx("img",{src:g.src,alt:g.alt,loading:"lazy"})},v);default:return null}};return r.jsxs(kR,{children:[r.jsxs(jR,{ref:i,$bgImage:m.image,children:[r.jsx($R,{}),r.jsxs(SR,{as:k.div,variants:u,initial:"hidden",animate:o?"visible":"hidden",children:[r.jsxs(CR,{as:k(V),to:"/blog",variants:p,whileHover:{x:-5},children:[r.jsx(gu,{})," Back to Blog"]}),r.jsx(k.div,{variants:p,children:r.jsx(zR,{children:m.category})}),r.jsx(k.div,{variants:p,children:r.jsx(TR,{children:m.fullTitle||m.title})}),r.jsxs(PR,{as:k.div,variants:p,children:[r.jsxs(Nd,{children:[r.jsx(K6,{}),m.author]}),r.jsxs(Nd,{children:[r.jsx(Ms,{}),m.date]}),r.jsxs(Nd,{children:[r.jsx(ba,{}),m.readTime]})]})]})]}),r.jsx(MR,{ref:n,children:r.jsxs(AR,{as:k.div,variants:u,initial:"hidden",animate:s?"visible":"hidden",children:[r.jsx(LR,{as:k.article,variants:p,children:m.content.map((g,v)=>f(g,v))}),m.tags&&m.tags.length>0&&r.jsxs(VR,{as:k.div,variants:p,children:[r.jsxs(NR,{children:[r.jsx(G6,{})," Tags"]}),r.jsx(OR,{children:m.tags.map((g,v)=>r.jsx(_R,{children:g},v))})]}),r.jsxs(HR,{as:k.div,variants:p,children:[r.jsxs(ZR,{children:[r.jsx(Y6,{})," Share this article"]}),r.jsx(UR,{children:"Help others discover this content"})]})]})}),h.length>0&&r.jsx(YR,{ref:a,children:r.jsxs(QR,{as:k.div,variants:u,initial:"hidden",animate:c?"visible":"hidden",children:[r.jsx(k.div,{variants:p,children:r.jsx(GR,{children:"Related Articles"})}),r.jsx(KR,{children:h.map((g,v)=>r.jsxs(V0,{as:k.article,variants:p,onClick:()=>t(`/blog/${g.slug}`),whileHover:{y:-8},children:[r.jsx(qR,{children:r.jsx("img",{src:g.image,alt:g.title,loading:"lazy"})}),r.jsxs(XR,{children:[r.jsx(JR,{children:g.category}),r.jsx(eB,{children:g.title}),r.jsx(tB,{children:g.excerpt}),r.jsxs(iB,{children:["Read More ",r.jsx(me,{})]})]})]},g.slug))})]})}),r.jsx(nB,{children:r.jsxs(rB,{children:[r.jsx(aB,{children:"Begin Your Wellness Journey"}),r.jsx(oB,{children:"Ready to transform your life through yoga and holistic wellness? Let's connect and create your personalized path to inner peace."}),r.jsx(sB,{as:k(V),to:"/contact",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Book a Session"})]})})]})},kR=l.div`
  min-height: 100vh;
  background: #FAF8F5;
`,jR=l.section`
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
`,$R=l.div`
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
`,SR=l.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  position: relative;
  z-index: 2;
  text-align: center;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 7rem 1.5rem 3rem;
  }
`,CR=l(V)`
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
`,zR=l.span`
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
`,TR=l.h1`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  color: #FAF8F5;
  line-height: 1.2;
  margin: 0 0 2rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
`,PR=l.div`
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
`,MR=l.section`
  padding: 5rem 0;
  background: #FAF8F5;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,AR=l.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`,LR=l.article`
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
`,ER=l.p`
  font-size: 1.125rem;
  line-height: 1.9;
  color: #21371a;
  margin-bottom: 1.75rem;
  opacity: 0.95;

  @media (max-width: ${d.breakpoints.mobile}) {
    font-size: 1.0625rem;
    line-height: 1.8;
  }
`,IR=l.h2`
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
`,RR=l.ul`
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
`,BR=l.blockquote`
  margin: 3rem 0;
  padding: 2rem 2.5rem;
  background: linear-gradient(135deg, rgba(206, 197, 173, 0.1) 0%, rgba(206, 197, 173, 0.05) 100%);
  border-left: 4px solid #cec5ad;
  border-radius: 0 ${d.borderRadius.medium} ${d.borderRadius.medium} 0;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 1.5rem 1.25rem;
    margin: 2rem 0;
  }
`,FR=l.p`
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
`,WR=l.cite`
  display: block;
  margin-top: 1rem;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  color: #cec5ad;
  letter-spacing: 0.02em;
`,DR=l.figure`
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
`,VR=l.div`
  margin-top: 3rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(206, 197, 173, 0.3);
`,NR=l.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 1rem;
`,OR=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,_R=l.span`
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
`,HR=l.div`
  margin-top: 2.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(90, 138, 98, 0.08) 0%, rgba(206, 197, 173, 0.08) 100%);
  border-radius: ${d.borderRadius.medium};
  text-align: center;
`,ZR=l.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #22371b;
  margin-bottom: 0.5rem;
`,UR=l.p`
  color: #21371a;
  opacity: 0.8;
  margin: 0;
`,YR=l.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, #FAF8F5 0%, #f5f7f4 100%);

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,QR=l.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`,GR=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #22371b;
  text-align: center;
  margin-bottom: 3rem;
`,KR=l.div`
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
`,qR=l.div`
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
`,XR=l.div`
  padding: 1.75rem;
`,JR=l.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #cec5ad;
  margin-bottom: 0.75rem;
`,eB=l.h3`
  font-family: ${d.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #22371b;
  line-height: 1.4;
  margin-bottom: 0.75rem;
`,tB=l.p`
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #21371a;
  opacity: 0.8;
  margin-bottom: 1rem;
`,iB=l.div`
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
`,nB=l.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #22371b 0%, #2d4a23 100%);
  text-align: center;

  @media (max-width: ${d.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`,rB=l.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${d.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`,aB=l.h2`
  font-family: ${d.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: #FAF8F5;
  margin-bottom: 1.25rem;
`,oB=l.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: rgba(250, 248, 245, 0.9);
  margin-bottom: 2.5rem;
`,sB=l(V)`
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
`,lB=l.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FAF8F5;
  padding: 8rem 2rem 4rem;
`,dB=l.div`
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
`,cB=l(V)`
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
`,mB=({onLoadingComplete:e})=>{const[t,i]=j.useState(!1),[n,a]=j.useState(!1),[o,s]=j.useState(!1),c=j.useRef(null),m=j.useRef(!1),h=()=>{m.current||(m.current=!0,i(!0),setTimeout(()=>{e()},800))},u=()=>{h()},p=()=>{console.warn("Video failed to load, completing loading screen"),h()};return j.useEffect(()=>{const f=()=>{a(window.innerWidth<=768)},g=window.matchMedia("(prefers-reduced-motion: reduce)");s(g.matches),f(),window.addEventListener("resize",f);const v=b=>s(b.matches);return g.addEventListener("change",v),()=>{window.removeEventListener("resize",f),g.removeEventListener("change",v)}},[]),j.useEffect(()=>{const g=setTimeout(()=>{h()},n?1e4:15e3);return()=>clearTimeout(g)},[n]),r.jsx(Bt,{children:!t&&r.jsxs(hB,{as:k.div,initial:{opacity:1},exit:{opacity:0},transition:{duration:.8,ease:[.4,0,.2,1]},children:[!n&&r.jsxs(r.Fragment,{children:[r.jsx(Od,{className:"leaf1",$reducedMotion:o,children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(142, 207, 179, 0.3)",strokeWidth:"2",fill:"rgba(142, 207, 179, 0.1)"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(142, 207, 179, 0.3)",strokeWidth:"2"}),r.jsx("path",{d:"M60 60L30 100",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 120L35 160",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 180L40 220",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 60L90 100",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 120L85 160",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 180L80 220",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"1.5"})]})}),r.jsx(Od,{className:"leaf2",$reducedMotion:o,children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"2",fill:"rgba(206, 197, 173, 0.1)"}),r.jsx("path",{d:"M60 30V270",stroke:"rgba(206, 197, 173, 0.3)",strokeWidth:"2"}),r.jsx("path",{d:"M60 80L25 120",stroke:"rgba(206, 197, 173, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 140L30 180",stroke:"rgba(206, 197, 173, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 200L35 240",stroke:"rgba(206, 197, 173, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 80L95 120",stroke:"rgba(206, 197, 173, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 140L90 180",stroke:"rgba(206, 197, 173, 0.25)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 200L85 240",stroke:"rgba(206, 197, 173, 0.25)",strokeWidth:"1.5"})]})}),r.jsx(Od,{className:"leaf3",$reducedMotion:o,children:r.jsxs("svg",{viewBox:"0 0 120 300",fill:"none",children:[r.jsx("path",{d:"M60 0C60 0 10 60 10 150C10 240 60 300 60 300C60 300 110 240 110 150C110 60 60 0 60 0Z",stroke:"rgba(90, 138, 98, 0.25)",strokeWidth:"2",fill:"rgba(90, 138, 98, 0.08)"}),r.jsx("path",{d:"M60 40V260",stroke:"rgba(90, 138, 98, 0.25)",strokeWidth:"2"}),r.jsx("path",{d:"M60 70L32 110",stroke:"rgba(90, 138, 98, 0.2)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 130L38 170",stroke:"rgba(90, 138, 98, 0.2)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 190L42 230",stroke:"rgba(90, 138, 98, 0.2)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 70L88 110",stroke:"rgba(90, 138, 98, 0.2)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 130L82 170",stroke:"rgba(90, 138, 98, 0.2)",strokeWidth:"1.5"}),r.jsx("path",{d:"M60 190L78 230",stroke:"rgba(90, 138, 98, 0.2)",strokeWidth:"1.5"})]})}),r.jsx(Rf,{className:"lotus1",$reducedMotion:o,children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",children:[r.jsx("ellipse",{cx:"100",cy:"140",rx:"35",ry:"50",fill:"rgba(142, 207, 179, 0.15)"}),r.jsx("ellipse",{cx:"70",cy:"130",rx:"30",ry:"45",fill:"rgba(142, 207, 179, 0.12)",transform:"rotate(-30 70 130)"}),r.jsx("ellipse",{cx:"130",cy:"130",rx:"30",ry:"45",fill:"rgba(142, 207, 179, 0.12)",transform:"rotate(30 130 130)"}),r.jsx("ellipse",{cx:"50",cy:"120",rx:"25",ry:"40",fill:"rgba(142, 207, 179, 0.1)",transform:"rotate(-50 50 120)"}),r.jsx("ellipse",{cx:"150",cy:"120",rx:"25",ry:"40",fill:"rgba(142, 207, 179, 0.1)",transform:"rotate(50 150 120)"}),r.jsx("circle",{cx:"100",cy:"130",r:"20",fill:"rgba(206, 197, 173, 0.2)"}),r.jsx("circle",{cx:"100",cy:"130",r:"10",fill:"rgba(206, 197, 173, 0.3)"})]})}),r.jsx(Rf,{className:"lotus2",$reducedMotion:o,children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",children:[r.jsx("ellipse",{cx:"100",cy:"140",rx:"30",ry:"45",fill:"rgba(206, 197, 173, 0.12)"}),r.jsx("ellipse",{cx:"75",cy:"132",rx:"25",ry:"40",fill:"rgba(206, 197, 173, 0.1)",transform:"rotate(-25 75 132)"}),r.jsx("ellipse",{cx:"125",cy:"132",rx:"25",ry:"40",fill:"rgba(206, 197, 173, 0.1)",transform:"rotate(25 125 132)"}),r.jsx("ellipse",{cx:"55",cy:"125",rx:"20",ry:"35",fill:"rgba(206, 197, 173, 0.08)",transform:"rotate(-45 55 125)"}),r.jsx("ellipse",{cx:"145",cy:"125",rx:"20",ry:"35",fill:"rgba(206, 197, 173, 0.08)",transform:"rotate(45 145 125)"}),r.jsx("circle",{cx:"100",cy:"135",r:"15",fill:"rgba(142, 207, 179, 0.2)"})]})}),r.jsx(wB,{className:"om1",$reducedMotion:o,children:r.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",children:[r.jsx("path",{d:"M50 20C40 20 35 25 35 35C35 45 45 50 50 50C55 50 65 45 65 35C65 25 60 20 50 20Z",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"2",fill:"rgba(142, 207, 179, 0.08)"}),r.jsx("path",{d:"M30 50C30 50 25 60 35 65C45 70 55 65 55 55",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M70 50C70 50 75 60 65 65C55 70 45 65 45 55",stroke:"rgba(142, 207, 179, 0.25)",strokeWidth:"2",fill:"none"}),r.jsx("circle",{cx:"50",cy:"75",r:"3",fill:"rgba(142, 207, 179, 0.3)"})]})}),r.jsx(yB,{className:"mandala1",$reducedMotion:o,children:r.jsxs("svg",{viewBox:"0 0 150 150",fill:"none",children:[r.jsx("circle",{cx:"75",cy:"75",r:"50",stroke:"rgba(90, 138, 98, 0.15)",strokeWidth:"1",fill:"none"}),r.jsx("circle",{cx:"75",cy:"75",r:"40",stroke:"rgba(90, 138, 98, 0.12)",strokeWidth:"1",fill:"none"}),r.jsx("circle",{cx:"75",cy:"75",r:"30",stroke:"rgba(90, 138, 98, 0.1)",strokeWidth:"1",fill:"none"}),r.jsx("circle",{cx:"75",cy:"75",r:"20",stroke:"rgba(90, 138, 98, 0.08)",strokeWidth:"1",fill:"none"}),[...Array(8)].map((f,g)=>r.jsx("line",{x1:"75",y1:"75",x2:75+50*Math.cos(g*Math.PI/4),y2:75+50*Math.sin(g*Math.PI/4),stroke:"rgba(90, 138, 98, 0.1)",strokeWidth:"1"},g))]})}),r.jsx(Bf,{className:"dots1",$reducedMotion:o,children:[...Array(12)].map((f,g)=>r.jsx(Ff,{style:{left:`${g%4*25}px`,top:`${Math.floor(g/4)*25}px`,animationDelay:`${g*.3}s`}},g))}),r.jsx(Bf,{className:"dots2",$reducedMotion:o,children:[...Array(9)].map((f,g)=>r.jsx(Ff,{style:{left:`${g%3*20}px`,top:`${Math.floor(g/3)*20}px`,animationDelay:`${g*.4}s`}},g))})]}),r.jsxs(pB,{ref:c,autoPlay:!0,muted:!0,playsInline:!0,onEnded:u,onError:p,onCanPlay:()=>{c.current&&c.current.play().catch(()=>{})},children:[r.jsx("source",{src:"/logo-animation.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})]})})},hB=l.div`
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
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
  }
`,pB=l.video`
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
`,om=ni`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`,uB=ni`
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
  50% { transform: translateY(-15px) rotate(-3deg) scale(1.05); }
`,fB=ni`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
`,gB=ni`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,xB=ni`
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
    animation: ${e=>e.$reducedMotion?"none":om} 8s ease-in-out infinite;
  }

  &.leaf2 {
    width: 120px;
    height: 300px;
    top: 50%;
    right: 3%;
    animation: ${e=>e.$reducedMotion?"none":uB} 10s ease-in-out infinite;
    animation-delay: 1s;
  }

  &.leaf3 {
    width: 90px;
    height: 220px;
    bottom: 15%;
    left: 8%;
    animation: ${e=>e.$reducedMotion?"none":om} 9s ease-in-out infinite;
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
`,Rf=l.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  animation: ${e=>e.$reducedMotion?"none":fB} 6s ease-in-out infinite;
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
`,wB=l.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  animation: ${e=>e.$reducedMotion?"none":om} 7s ease-in-out infinite;
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
`,yB=l.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  animation: ${e=>e.$reducedMotion?"none":gB} 40s linear infinite;
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
`,Bf=l.div`
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
`,Ff=l.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(142, 207, 179, 0.4);
  border-radius: 50%;
  animation: ${xB} 3s ease-in-out infinite;
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
`;function vB(){const[e,t]=j.useState(!0),i=()=>{t(!1)};return r.jsxs(r.Fragment,{children:[e&&r.jsx(mB,{onLoadingComplete:i}),r.jsx(Zv,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:r.jsx(Wv,{children:r.jsxs(ut,{path:"/",element:r.jsx(F7,{}),children:[r.jsx(ut,{index:!0,element:r.jsx(FS,{})}),r.jsx(ut,{path:"about",element:r.jsx(fC,{})}),r.jsx(ut,{path:"services",element:r.jsx(oT,{})}),r.jsx(ut,{path:"portfolio",element:r.jsx(TP,{})}),r.jsx(ut,{path:"contact",element:r.jsx(XM,{})}),r.jsx(ut,{path:"philosophy",element:r.jsx(TA,{})}),r.jsx(ut,{path:"testimonials",element:r.jsx(dE,{})}),r.jsx(ut,{path:"blog",element:r.jsx(WE,{})}),r.jsx(ut,{path:"blog/:slug",element:r.jsx(bR,{})})]})})})]})}_d.createRoot(document.getElementById("root")).render(r.jsx(he.StrictMode,{children:r.jsx(vB,{})}));
