(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function hh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function dh(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ke(s)?S0(s):dh(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ke(t))return t;if(be(t))return t}}const I0=/;(?![^(]*\))/g,b0=/:([^]+)/,C0=/\/\*.*?\*\//gs;function S0(t){const e={};return t.replace(C0,"").split(I0).forEach(n=>{if(n){const s=n.split(b0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fh(t){let e="";if(Ke(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=fh(t[n]);s&&(e+=s+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const R0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",A0=hh(R0);function km(t){return!!t||t===""}function k0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ei(t[s],e[s]);return n}function Ei(t,e){if(t===e)return!0;let n=If(t),s=If(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Lr(t),s=Lr(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?k0(t,e):!1;if(n=be(t),s=be(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ei(t[o],e[o]))return!1}}return String(t)===String(e)}function N0(t,e){return t.findIndex(n=>Ei(n,e))}const On=t=>Ke(t)?t:t==null?"":z(t)||be(t)&&(t.toString===Om||!Z(t.toString))?JSON.stringify(t,Nm,2):String(t),Nm=(t,e)=>e&&e.__v_isRef?Nm(t,e.value):di(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ac(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!z(e)&&!Dm(e)?String(e):e,Se={},hi=[],Yt=()=>{},x0=()=>!1,O0=/^on[^a-z]/,oc=t=>O0.test(t),ph=t=>t.startsWith("onUpdate:"),vt=Object.assign,gh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},D0=Object.prototype.hasOwnProperty,ue=(t,e)=>D0.call(t,e),z=Array.isArray,di=t=>lo(t)==="[object Map]",ac=t=>lo(t)==="[object Set]",If=t=>lo(t)==="[object Date]",Z=t=>typeof t=="function",Ke=t=>typeof t=="string",Lr=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",xm=t=>be(t)&&Z(t.then)&&Z(t.catch),Om=Object.prototype.toString,lo=t=>Om.call(t),P0=t=>lo(t).slice(8,-1),Dm=t=>lo(t)==="[object Object]",mh=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,sa=hh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},M0=/-(\w)/g,mn=cc(t=>t.replace(M0,(e,n)=>n?n.toUpperCase():"")),L0=/\B([A-Z])/g,Ws=cc(t=>t.replace(L0,"-$1").toLowerCase()),lc=cc(t=>t.charAt(0).toUpperCase()+t.slice(1)),gl=cc(t=>t?`on${lc(t)}`:""),Fr=(t,e)=>!Object.is(t,e),ia=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ma=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_a=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bf;const F0=()=>bf||(bf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let At;class Pm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function U0(t){return new Pm(t)}function $0(t,e=At){e&&e.active&&e.effects.push(t)}function Mm(){return At}function V0(t){At&&At.cleanups.push(t)}const _h=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Lm=t=>(t.w&rs)>0,Fm=t=>(t.n&rs)>0,B0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=rs},j0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Lm(i)&&!Fm(i)?i.delete(t):e[n++]=i,i.w&=~rs,i.n&=~rs}e.length=n}},Xl=new WeakMap;let fr=0,rs=1;const Jl=30;let Wt;const ks=Symbol(""),Zl=Symbol("");class yh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$0(this,s)}run(){if(!this.active)return this.fn();let e=Wt,n=Zn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Wt,Wt=this,Zn=!0,rs=1<<++fr,fr<=Jl?B0(this):Cf(this),this.fn()}finally{fr<=Jl&&j0(this),rs=1<<--fr,Wt=this.parent,Zn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Wt===this?this.deferStop=!0:this.active&&(Cf(this),this.onStop&&this.onStop(),this.active=!1)}}function Cf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Zn=!0;const Um=[];function Bi(){Um.push(Zn),Zn=!1}function ji(){const t=Um.pop();Zn=t===void 0?!0:t}function St(t,e,n){if(Zn&&Wt){let s=Xl.get(t);s||Xl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=_h()),$m(i)}}function $m(t,e){let n=!1;fr<=Jl?Fm(t)||(t.n|=rs,n=!Lm(t)):n=!t.has(Wt),n&&(t.add(Wt),Wt.deps.push(t))}function Dn(t,e,n,s,i,r){const o=Xl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?mh(n)&&a.push(o.get("length")):(a.push(o.get(ks)),di(t)&&a.push(o.get(Zl)));break;case"delete":z(t)||(a.push(o.get(ks)),di(t)&&a.push(o.get(Zl)));break;case"set":di(t)&&a.push(o.get(ks));break}if(a.length===1)a[0]&&eu(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);eu(_h(c))}}function eu(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&Sf(s);for(const s of n)s.computed||Sf(s)}function Sf(t,e){(t!==Wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const q0=hh("__proto__,__v_isRef,__isVue"),Vm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Lr)),H0=vh(),W0=vh(!1,!0),K0=vh(!0),Rf=z0();function z0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=fe(this);for(let r=0,o=this.length;r<o;r++)St(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(fe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Bi();const s=fe(this)[e].apply(this,n);return ji(),s}}),t}function G0(t){const e=fe(this);return St(e,"has",t),e.hasOwnProperty(t)}function vh(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?uT:Wm:e?Hm:qm).get(s))return s;const o=z(s);if(!t){if(o&&ue(Rf,i))return Reflect.get(Rf,i,r);if(i==="hasOwnProperty")return G0}const a=Reflect.get(s,i,r);return(Lr(i)?Vm.has(i):q0(i))||(t||St(s,"get",i),e)?a:nt(a)?o&&mh(i)?a:a.value:be(a)?t?Km(a):uo(a):a}}const Q0=Bm(),Y0=Bm(!0);function Bm(t=!1){return function(n,s,i,r){let o=n[s];if(Ti(o)&&nt(o)&&!nt(i))return!1;if(!t&&(!ya(i)&&!Ti(i)&&(o=fe(o),i=fe(i)),!z(n)&&nt(o)&&!nt(i)))return o.value=i,!0;const a=z(n)&&mh(s)?Number(s)<n.length:ue(n,s),c=Reflect.set(n,s,i,r);return n===fe(r)&&(a?Fr(i,o)&&Dn(n,"set",s,i):Dn(n,"add",s,i)),c}}function X0(t,e){const n=ue(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Dn(t,"delete",e,void 0),s}function J0(t,e){const n=Reflect.has(t,e);return(!Lr(e)||!Vm.has(e))&&St(t,"has",e),n}function Z0(t){return St(t,"iterate",z(t)?"length":ks),Reflect.ownKeys(t)}const jm={get:H0,set:Q0,deleteProperty:X0,has:J0,ownKeys:Z0},eT={get:K0,set(t,e){return!0},deleteProperty(t,e){return!0}},tT=vt({},jm,{get:W0,set:Y0}),wh=t=>t,uc=t=>Reflect.getPrototypeOf(t);function Uo(t,e,n=!1,s=!1){t=t.__v_raw;const i=fe(t),r=fe(e);n||(e!==r&&St(i,"get",e),St(i,"get",r));const{has:o}=uc(i),a=s?wh:n?Ih:Ur;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function $o(t,e=!1){const n=this.__v_raw,s=fe(n),i=fe(t);return e||(t!==i&&St(s,"has",t),St(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Vo(t,e=!1){return t=t.__v_raw,!e&&St(fe(t),"iterate",ks),Reflect.get(t,"size",t)}function Af(t){t=fe(t);const e=fe(this);return uc(e).has.call(e,t)||(e.add(t),Dn(e,"add",t,t)),this}function kf(t,e){e=fe(e);const n=fe(this),{has:s,get:i}=uc(n);let r=s.call(n,t);r||(t=fe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Fr(e,o)&&Dn(n,"set",t,e):Dn(n,"add",t,e),this}function Nf(t){const e=fe(this),{has:n,get:s}=uc(e);let i=n.call(e,t);i||(t=fe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Dn(e,"delete",t,void 0),r}function xf(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&Dn(t,"clear",void 0,void 0),n}function Bo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=fe(o),c=e?wh:t?Ih:Ur;return!t&&St(a,"iterate",ks),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function jo(t,e,n){return function(...s){const i=this.__v_raw,r=fe(i),o=di(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?wh:e?Ih:Ur;return!e&&St(r,"iterate",c?Zl:ks),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function jn(t){return function(...e){return t==="delete"?!1:this}}function nT(){const t={get(r){return Uo(this,r)},get size(){return Vo(this)},has:$o,add:Af,set:kf,delete:Nf,clear:xf,forEach:Bo(!1,!1)},e={get(r){return Uo(this,r,!1,!0)},get size(){return Vo(this)},has:$o,add:Af,set:kf,delete:Nf,clear:xf,forEach:Bo(!1,!0)},n={get(r){return Uo(this,r,!0)},get size(){return Vo(this,!0)},has(r){return $o.call(this,r,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Bo(!0,!1)},s={get(r){return Uo(this,r,!0,!0)},get size(){return Vo(this,!0)},has(r){return $o.call(this,r,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Bo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=jo(r,!1,!1),n[r]=jo(r,!0,!1),e[r]=jo(r,!1,!0),s[r]=jo(r,!0,!0)}),[t,n,e,s]}const[sT,iT,rT,oT]=nT();function Eh(t,e){const n=e?t?oT:rT:t?iT:sT;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ue(n,i)&&i in s?n:s,i,r)}const aT={get:Eh(!1,!1)},cT={get:Eh(!1,!0)},lT={get:Eh(!0,!1)},qm=new WeakMap,Hm=new WeakMap,Wm=new WeakMap,uT=new WeakMap;function hT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dT(t){return t.__v_skip||!Object.isExtensible(t)?0:hT(P0(t))}function uo(t){return Ti(t)?t:Th(t,!1,jm,aT,qm)}function fT(t){return Th(t,!1,tT,cT,Hm)}function Km(t){return Th(t,!0,eT,lT,Wm)}function Th(t,e,n,s,i){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=dT(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function fi(t){return Ti(t)?fi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ti(t){return!!(t&&t.__v_isReadonly)}function ya(t){return!!(t&&t.__v_isShallow)}function zm(t){return fi(t)||Ti(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Gm(t){return ma(t,"__v_skip",!0),t}const Ur=t=>be(t)?uo(t):t,Ih=t=>be(t)?Km(t):t;function Qm(t){Zn&&Wt&&(t=fe(t),$m(t.dep||(t.dep=_h())))}function Ym(t,e){t=fe(t);const n=t.dep;n&&eu(n)}function nt(t){return!!(t&&t.__v_isRef===!0)}function Ue(t){return Jm(t,!1)}function Xm(t){return Jm(t,!0)}function Jm(t,e){return nt(t)?t:new pT(t,e)}class pT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:Ur(e)}get value(){return Qm(this),this._value}set value(e){const n=this.__v_isShallow||ya(e)||Ti(e);e=n?e:fe(e),Fr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ur(e),Ym(this))}}function et(t){return nt(t)?t.value:t}const gT={get:(t,e,n)=>et(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return nt(i)&&!nt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Zm(t){return fi(t)?t:new Proxy(t,gT)}var e_;class mT{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[e_]=!1,this._dirty=!0,this.effect=new yh(e,()=>{this._dirty||(this._dirty=!0,Ym(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=fe(this);return Qm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}e_="__v_isReadonly";function _T(t,e,n=!1){let s,i;const r=Z(t);return r?(s=t,i=Yt):(s=t.get,i=t.set),new mT(s,i,r||!i,n)}function es(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){hc(r,e,n)}return i}function Xt(t,e,n,s){if(Z(t)){const r=es(t,e,n,s);return r&&xm(r)&&r.catch(o=>{hc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Xt(t[r],e,n,s));return i}function hc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){es(c,null,10,[t,o,a]);return}}yT(t,n,i,s)}function yT(t,e,n,s=!0){console.error(t)}let $r=!1,tu=!1;const lt=[];let ln=0;const pi=[];let bn=null,Ts=0;const t_=Promise.resolve();let bh=null;function n_(t){const e=bh||t_;return t?e.then(this?t.bind(this):t):e}function vT(t){let e=ln+1,n=lt.length;for(;e<n;){const s=e+n>>>1;Vr(lt[s])<t?e=s+1:n=s}return e}function Ch(t){(!lt.length||!lt.includes(t,$r&&t.allowRecurse?ln+1:ln))&&(t.id==null?lt.push(t):lt.splice(vT(t.id),0,t),s_())}function s_(){!$r&&!tu&&(tu=!0,bh=t_.then(r_))}function wT(t){const e=lt.indexOf(t);e>ln&&lt.splice(e,1)}function ET(t){z(t)?pi.push(...t):(!bn||!bn.includes(t,t.allowRecurse?Ts+1:Ts))&&pi.push(t),s_()}function Of(t,e=$r?ln+1:0){for(;e<lt.length;e++){const n=lt[e];n&&n.pre&&(lt.splice(e,1),e--,n())}}function i_(t){if(pi.length){const e=[...new Set(pi)];if(pi.length=0,bn){bn.push(...e);return}for(bn=e,bn.sort((n,s)=>Vr(n)-Vr(s)),Ts=0;Ts<bn.length;Ts++)bn[Ts]();bn=null,Ts=0}}const Vr=t=>t.id==null?1/0:t.id,TT=(t,e)=>{const n=Vr(t)-Vr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function r_(t){tu=!1,$r=!0,lt.sort(TT);const e=Yt;try{for(ln=0;ln<lt.length;ln++){const n=lt[ln];n&&n.active!==!1&&es(n,null,14)}}finally{ln=0,lt.length=0,i_(),$r=!1,bh=null,(lt.length||pi.length)&&r_()}}function IT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Se;d&&(i=n.map(f=>Ke(f)?f.trim():f)),h&&(i=n.map(_a))}let a,c=s[a=gl(e)]||s[a=gl(mn(e))];!c&&r&&(c=s[a=gl(Ws(e))]),c&&Xt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xt(l,t,6,i)}}function o_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=o_(l,e,!0);u&&(a=!0,vt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(be(t)&&s.set(t,null),null):(z(r)?r.forEach(c=>o[c]=null):vt(o,r),be(t)&&s.set(t,o),o)}function dc(t,e){return!t||!oc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,Ws(e))||ue(t,e))}let Nt=null,fc=null;function va(t){const e=Nt;return Nt=t,fc=t&&t.type.__scopeId||null,e}function xF(t){fc=t}function OF(){fc=null}function pr(t,e=Nt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Bf(-1);const r=va(e);let o;try{o=t(...i)}finally{va(r),s._d&&Bf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ml(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:_}=t;let v,b;const N=va(t);try{if(n.shapeFlag&4){const M=i||s;v=cn(u.call(M,M,h,r,f,d,m)),b=c}else{const M=e;v=cn(M.length>1?M(r,{attrs:c,slots:a,emit:l}):M(r,null)),b=e.props?c:bT(c)}}catch(M){br.length=0,hc(M,t,1),v=De(Ms)}let R=v;if(b&&_!==!1){const M=Object.keys(b),{shapeFlag:ee}=R;M.length&&ee&7&&(o&&M.some(ph)&&(b=CT(b,o)),R=Ii(R,b))}return n.dirs&&(R=Ii(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),v=R,va(N),v}const bT=t=>{let e;for(const n in t)(n==="class"||n==="style"||oc(n))&&((e||(e={}))[n]=t[n]);return e},CT=(t,e)=>{const n={};for(const s in t)(!ph(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ST(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Df(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!dc(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Df(s,o,l):!0:!!o;return!1}function Df(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!dc(n,r))return!0}return!1}function RT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const AT=t=>t.__isSuspense;function kT(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):ET(t)}function ra(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function Ut(t,e,n=!1){const s=Fe||Nt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Z(e)?e.call(s.proxy):e}}const qo={};function Tr(t,e,n){return a_(t,e,n)}function a_(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Se){const a=Mm()===(Fe==null?void 0:Fe.scope)?Fe:null;let c,l=!1,u=!1;if(nt(t)?(c=()=>t.value,l=ya(t)):fi(t)?(c=()=>t,s=!0):z(t)?(u=!0,l=t.some(R=>fi(R)||ya(R)),c=()=>t.map(R=>{if(nt(R))return R.value;if(fi(R))return bs(R);if(Z(R))return es(R,a,2)})):Z(t)?e?c=()=>es(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Xt(t,a,3,[d])}:c=Yt,e&&s){const R=c;c=()=>bs(R())}let h,d=R=>{h=b.onStop=()=>{es(R,a,4)}},f;if(jr)if(d=Yt,e?n&&Xt(e,a,3,[c(),u?[]:void 0,d]):c(),i==="sync"){const R=wI();f=R.__watcherHandles||(R.__watcherHandles=[])}else return Yt;let m=u?new Array(t.length).fill(qo):qo;const _=()=>{if(b.active)if(e){const R=b.run();(s||l||(u?R.some((M,ee)=>Fr(M,m[ee])):Fr(R,m)))&&(h&&h(),Xt(e,a,3,[R,m===qo?void 0:u&&m[0]===qo?[]:m,d]),m=R)}else b.run()};_.allowRecurse=!!e;let v;i==="sync"?v=_:i==="post"?v=()=>Tt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),v=()=>Ch(_));const b=new yh(c,v);e?n?_():m=b.run():i==="post"?Tt(b.run.bind(b),a&&a.suspense):b.run();const N=()=>{b.stop(),a&&a.scope&&gh(a.scope.effects,b)};return f&&f.push(N),N}function NT(t,e,n){const s=this.proxy,i=Ke(t)?t.includes(".")?c_(s,t):()=>s[t]:t.bind(s,s);let r;Z(e)?r=e:(r=e.handler,n=e);const o=Fe;bi(this);const a=a_(i,r.bind(s),n);return o?bi(o):Ns(),a}function c_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function bs(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),nt(t))bs(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)bs(t[n],e);else if(ac(t)||di(t))t.forEach(n=>{bs(n,e)});else if(Dm(t))for(const n in t)bs(t[n],e);return t}function l_(t){return Z(t)?{setup:t,name:t.name}:t}const oa=t=>!!t.type.__asyncLoader,u_=t=>t.type.__isKeepAlive;function xT(t,e){h_(t,"a",e)}function OT(t,e){h_(t,"da",e)}function h_(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(pc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)u_(i.parent.vnode)&&DT(s,e,n,i),i=i.parent}}function DT(t,e,n,s){const i=pc(e,t,s,!0);f_(()=>{gh(s[e],i)},n)}function pc(t,e,n=Fe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Bi(),bi(n);const a=Xt(e,n,t,o);return Ns(),ji(),a});return s?i.unshift(r):i.push(r),r}}const $n=t=>(e,n=Fe)=>(!jr||t==="sp")&&pc(t,(...s)=>e(...s),n),PT=$n("bm"),d_=$n("m"),MT=$n("bu"),LT=$n("u"),FT=$n("bum"),f_=$n("um"),p_=$n("sp"),UT=$n("rtg"),$T=$n("rtc");function VT(t,e=Fe){pc("ec",t,e)}function zn(t,e){const n=Nt;if(n===null)return t;const s=_c(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Se]=e[r];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&bs(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function _s(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Bi(),Xt(c,n,8,[t.el,a,t,e]),ji())}}const g_="components";function BT(t,e){return qT(g_,t,!0,e)||t}const jT=Symbol();function qT(t,e,n=!0,s=!1){const i=Nt||Fe;if(i){const r=i.type;if(t===g_){const a=yI(r,!1);if(a&&(a===e||a===mn(e)||a===lc(mn(e))))return r}const o=Pf(i[t]||r[t],e)||Pf(i.appContext[t],e);return!o&&s?r:o}}function Pf(t,e){return t&&(t[e]||t[mn(e)]||t[lc(mn(e))])}function nu(t,e,n,s){let i;const r=n&&n[s];if(z(t)||Ke(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(be(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const su=t=>t?S_(t)?_c(t)||t.proxy:su(t.parent):null,Ir=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>su(t.parent),$root:t=>su(t.root),$emit:t=>t.emit,$options:t=>Sh(t),$forceUpdate:t=>t.f||(t.f=()=>Ch(t.update)),$nextTick:t=>t.n||(t.n=n_.bind(t.proxy)),$watch:t=>NT.bind(t)}),_l=(t,e)=>t!==Se&&!t.__isScriptSetup&&ue(t,e),HT={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(_l(s,e))return o[e]=1,s[e];if(i!==Se&&ue(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,r[e];if(n!==Se&&ue(n,e))return o[e]=4,n[e];iu&&(o[e]=0)}}const u=Ir[e];let h,d;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Se&&ue(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ue(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return _l(i,e)?(i[e]=n,!0):s!==Se&&ue(s,e)?(s[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Se&&ue(t,o)||_l(e,o)||(a=r[0])&&ue(a,o)||ue(s,o)||ue(Ir,o)||ue(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let iu=!0;function WT(t){const e=Sh(t),n=t.proxy,s=t.ctx;iu=!1,e.beforeCreate&&Mf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:_,deactivated:v,beforeDestroy:b,beforeUnmount:N,destroyed:R,unmounted:M,render:ee,renderTracked:he,renderTriggered:we,errorCaptured:xe,serverPrefetch:Mt,expose:wt,inheritAttrs:Bn,components:rn,directives:Zs,filters:gs}=e;if(l&&KT(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ee in o){const _e=o[Ee];Z(_e)&&(s[Ee]=_e.bind(n))}if(i){const Ee=i.call(n,n);be(Ee)&&(t.data=uo(Ee))}if(iu=!0,r)for(const Ee in r){const _e=r[Ee],Bt=Z(_e)?_e.bind(n,n):Z(_e.get)?_e.get.bind(n,n):Yt,ms=!Z(_e)&&Z(_e.set)?_e.set.bind(n):Yt,jt=Lt({get:Bt,set:ms});Object.defineProperty(s,Ee,{enumerable:!0,configurable:!0,get:()=>jt.value,set:Et=>jt.value=Et})}if(a)for(const Ee in a)m_(a[Ee],s,n,Ee);if(c){const Ee=Z(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(_e=>{ra(_e,Ee[_e])})}u&&Mf(u,t,"c");function $e(Ee,_e){z(_e)?_e.forEach(Bt=>Ee(Bt.bind(n))):_e&&Ee(_e.bind(n))}if($e(PT,h),$e(d_,d),$e(MT,f),$e(LT,m),$e(xT,_),$e(OT,v),$e(VT,xe),$e($T,he),$e(UT,we),$e(FT,N),$e(f_,M),$e(p_,Mt),z(wt))if(wt.length){const Ee=t.exposed||(t.exposed={});wt.forEach(_e=>{Object.defineProperty(Ee,_e,{get:()=>n[_e],set:Bt=>n[_e]=Bt})})}else t.exposed||(t.exposed={});ee&&t.render===Yt&&(t.render=ee),Bn!=null&&(t.inheritAttrs=Bn),rn&&(t.components=rn),Zs&&(t.directives=Zs)}function KT(t,e,n=Yt,s=!1){z(t)&&(t=ru(t));for(const i in t){const r=t[i];let o;be(r)?"default"in r?o=Ut(r.from||i,r.default,!0):o=Ut(r.from||i):o=Ut(r),nt(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Mf(t,e,n){Xt(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function m_(t,e,n,s){const i=s.includes(".")?c_(n,s):()=>n[s];if(Ke(t)){const r=e[t];Z(r)&&Tr(i,r)}else if(Z(t))Tr(i,t.bind(n));else if(be(t))if(z(t))t.forEach(r=>m_(r,e,n,s));else{const r=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(r)&&Tr(i,r,t)}}function Sh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>wa(c,l,o,!0)),wa(c,e,o)),be(e)&&r.set(e,c),c}function wa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&wa(t,r,n,!0),i&&i.forEach(o=>wa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=zT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const zT={data:Lf,props:vs,emits:vs,methods:vs,computed:vs,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:vs,directives:vs,watch:QT,provide:Lf,inject:GT};function Lf(t,e){return e?t?function(){return vt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function GT(t,e){return vs(ru(t),ru(e))}function ru(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function vs(t,e){return t?vt(vt(Object.create(null),t),e):e}function QT(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const s in e)n[s]=mt(t[s],e[s]);return n}function YT(t,e,n,s=!1){const i={},r={};ma(r,mc,1),t.propsDefaults=Object.create(null),__(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:fT(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function XT(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=fe(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(dc(t.emitsOptions,d))continue;const f=e[d];if(c)if(ue(r,d))f!==r[d]&&(r[d]=f,l=!0);else{const m=mn(d);i[m]=ou(c,a,m,f,t,!1)}else f!==r[d]&&(r[d]=f,l=!0)}}}else{__(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=Ws(h))===h||!ue(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ou(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ue(e,h))&&(delete r[h],l=!0)}l&&Dn(t,"set","$attrs")}function __(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(sa(c))continue;const l=e[c];let u;i&&ue(i,u=mn(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:dc(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=fe(n),l=a||Se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ou(i,c,h,l[h],t,!ue(l,h))}}return o}function ou(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(bi(i),s=l[n]=c.call(null,e),Ns())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ws(n))&&(s=!0))}return s}function y_(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[d,f]=y_(h,e,!0);vt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return be(t)&&s.set(t,hi),hi;if(z(r))for(let u=0;u<r.length;u++){const h=mn(r[u]);Ff(h)&&(o[h]=Se)}else if(r)for(const u in r){const h=mn(u);if(Ff(h)){const d=r[u],f=o[h]=z(d)||Z(d)?{type:d}:Object.assign({},d);if(f){const m=Vf(Boolean,f.type),_=Vf(String,f.type);f[0]=m>-1,f[1]=_<0||m<_,(m>-1||ue(f,"default"))&&a.push(h)}}}const l=[o,a];return be(t)&&s.set(t,l),l}function Ff(t){return t[0]!=="$"}function Uf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function $f(t,e){return Uf(t)===Uf(e)}function Vf(t,e){return z(e)?e.findIndex(n=>$f(n,t)):Z(e)&&$f(e,t)?0:-1}const v_=t=>t[0]==="_"||t==="$stable",Rh=t=>z(t)?t.map(cn):[cn(t)],JT=(t,e,n)=>{if(e._n)return e;const s=pr((...i)=>Rh(e(...i)),n);return s._c=!1,s},w_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(v_(i))continue;const r=t[i];if(Z(r))e[i]=JT(i,r,s);else if(r!=null){const o=Rh(r);e[i]=()=>o}}},E_=(t,e)=>{const n=Rh(e);t.slots.default=()=>n},ZT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),ma(e,"_",n)):w_(e,t.slots={})}else t.slots={},e&&E_(t,e);ma(t.slots,mc,1)},eI=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(vt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,w_(e,i)),o=e}else e&&(E_(t,e),o={default:1});if(r)for(const a in i)!v_(a)&&!(a in o)&&delete i[a]};function T_(){return{app:null,config:{isNativeTag:x0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tI=0;function nI(t,e){return function(s,i=null){Z(s)||(s=Object.assign({},s)),i!=null&&!be(i)&&(i=null);const r=T_(),o=new Set;let a=!1;const c=r.app={_uid:tI++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:EI,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=De(s,i);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,_c(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function au(t,e,n,s,i=!1){if(z(t)){t.forEach((d,f)=>au(d,e&&(z(e)?e[f]:e),n,s,i));return}if(oa(s)&&!i)return;const r=s.shapeFlag&4?_c(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ke(l)?(u[l]=null,ue(h,l)&&(h[l]=null)):nt(l)&&(l.value=null)),Z(c))es(c,a,12,[o,u]);else{const d=Ke(c),f=nt(c);if(d||f){const m=()=>{if(t.f){const _=d?ue(h,c)?h[c]:u[c]:c.value;i?z(_)&&gh(_,r):z(_)?_.includes(r)||_.push(r):d?(u[c]=[r],ue(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ue(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Tt(m,n)):m()}}}const Tt=kT;function sI(t){return iI(t)}function iI(t,e){const n=F0();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Yt,insertStaticContent:m}=t,_=(p,g,y,w=null,I=null,k=null,L=!1,A=null,x=!!g.dynamicChildren)=>{if(p===g)return;p&&!or(p,g)&&(w=P(p),Et(p,I,k,!0),p=null),g.patchFlag===-2&&(x=!1,g.dynamicChildren=null);const{type:C,ref:H,shapeFlag:$}=g;switch(C){case gc:v(p,g,y,w);break;case Ms:b(p,g,y,w);break;case yl:p==null&&N(g,y,w,L);break;case It:rn(p,g,y,w,I,k,L,A,x);break;default:$&1?ee(p,g,y,w,I,k,L,A,x):$&6?Zs(p,g,y,w,I,k,L,A,x):($&64||$&128)&&C.process(p,g,y,w,I,k,L,A,x,le)}H!=null&&I&&au(H,p&&p.ref,k,g||p,!g)},v=(p,g,y,w)=>{if(p==null)s(g.el=a(g.children),y,w);else{const I=g.el=p.el;g.children!==p.children&&l(I,g.children)}},b=(p,g,y,w)=>{p==null?s(g.el=c(g.children||""),y,w):g.el=p.el},N=(p,g,y,w)=>{[p.el,p.anchor]=m(p.children,g,y,w,p.el,p.anchor)},R=({el:p,anchor:g},y,w)=>{let I;for(;p&&p!==g;)I=d(p),s(p,y,w),p=I;s(g,y,w)},M=({el:p,anchor:g})=>{let y;for(;p&&p!==g;)y=d(p),i(p),p=y;i(g)},ee=(p,g,y,w,I,k,L,A,x)=>{L=L||g.type==="svg",p==null?he(g,y,w,I,k,L,A,x):Mt(p,g,I,k,L,A,x)},he=(p,g,y,w,I,k,L,A)=>{let x,C;const{type:H,props:$,shapeFlag:W,transition:Y,dirs:ne}=p;if(x=p.el=o(p.type,k,$&&$.is,$),W&8?u(x,p.children):W&16&&xe(p.children,x,null,w,I,k&&H!=="foreignObject",L,A),ne&&_s(p,null,w,"created"),we(x,p,p.scopeId,L,w),$){for(const ye in $)ye!=="value"&&!sa(ye)&&r(x,ye,null,$[ye],k,p.children,w,I,F);"value"in $&&r(x,"value",null,$.value),(C=$.onVnodeBeforeMount)&&an(C,w,p)}ne&&_s(p,null,w,"beforeMount");const Te=(!I||I&&!I.pendingBranch)&&Y&&!Y.persisted;Te&&Y.beforeEnter(x),s(x,g,y),((C=$&&$.onVnodeMounted)||Te||ne)&&Tt(()=>{C&&an(C,w,p),Te&&Y.enter(x),ne&&_s(p,null,w,"mounted")},I)},we=(p,g,y,w,I)=>{if(y&&f(p,y),w)for(let k=0;k<w.length;k++)f(p,w[k]);if(I){let k=I.subTree;if(g===k){const L=I.vnode;we(p,L,L.scopeId,L.slotScopeIds,I.parent)}}},xe=(p,g,y,w,I,k,L,A,x=0)=>{for(let C=x;C<p.length;C++){const H=p[C]=A?Wn(p[C]):cn(p[C]);_(null,H,g,y,w,I,k,L,A)}},Mt=(p,g,y,w,I,k,L)=>{const A=g.el=p.el;let{patchFlag:x,dynamicChildren:C,dirs:H}=g;x|=p.patchFlag&16;const $=p.props||Se,W=g.props||Se;let Y;y&&ys(y,!1),(Y=W.onVnodeBeforeUpdate)&&an(Y,y,g,p),H&&_s(g,p,y,"beforeUpdate"),y&&ys(y,!0);const ne=I&&g.type!=="foreignObject";if(C?wt(p.dynamicChildren,C,A,y,w,ne,k):L||_e(p,g,A,null,y,w,ne,k,!1),x>0){if(x&16)Bn(A,g,$,W,y,w,I);else if(x&2&&$.class!==W.class&&r(A,"class",null,W.class,I),x&4&&r(A,"style",$.style,W.style,I),x&8){const Te=g.dynamicProps;for(let ye=0;ye<Te.length;ye++){const Ve=Te[ye],qt=$[Ve],ti=W[Ve];(ti!==qt||Ve==="value")&&r(A,Ve,qt,ti,I,p.children,y,w,F)}}x&1&&p.children!==g.children&&u(A,g.children)}else!L&&C==null&&Bn(A,g,$,W,y,w,I);((Y=W.onVnodeUpdated)||H)&&Tt(()=>{Y&&an(Y,y,g,p),H&&_s(g,p,y,"updated")},w)},wt=(p,g,y,w,I,k,L)=>{for(let A=0;A<g.length;A++){const x=p[A],C=g[A],H=x.el&&(x.type===It||!or(x,C)||x.shapeFlag&70)?h(x.el):y;_(x,C,H,null,w,I,k,L,!0)}},Bn=(p,g,y,w,I,k,L)=>{if(y!==w){if(y!==Se)for(const A in y)!sa(A)&&!(A in w)&&r(p,A,y[A],null,L,g.children,I,k,F);for(const A in w){if(sa(A))continue;const x=w[A],C=y[A];x!==C&&A!=="value"&&r(p,A,C,x,L,g.children,I,k,F)}"value"in w&&r(p,"value",y.value,w.value)}},rn=(p,g,y,w,I,k,L,A,x)=>{const C=g.el=p?p.el:a(""),H=g.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:Y}=g;Y&&(A=A?A.concat(Y):Y),p==null?(s(C,y,w),s(H,y,w),xe(g.children,y,H,I,k,L,A,x)):$>0&&$&64&&W&&p.dynamicChildren?(wt(p.dynamicChildren,W,y,I,k,L,A),(g.key!=null||I&&g===I.subTree)&&I_(p,g,!0)):_e(p,g,y,H,I,k,L,A,x)},Zs=(p,g,y,w,I,k,L,A,x)=>{g.slotScopeIds=A,p==null?g.shapeFlag&512?I.ctx.activate(g,y,w,L,x):gs(g,y,w,I,k,L,x):ir(p,g,x)},gs=(p,g,y,w,I,k,L)=>{const A=p.component=fI(p,w,I);if(u_(p)&&(A.ctx.renderer=le),pI(A),A.asyncDep){if(I&&I.registerDep(A,$e),!p.el){const x=A.subTree=De(Ms);b(null,x,g,y)}return}$e(A,p,g,y,I,k,L)},ir=(p,g,y)=>{const w=g.component=p.component;if(ST(p,g,y))if(w.asyncDep&&!w.asyncResolved){Ee(w,g,y);return}else w.next=g,wT(w.update),w.update();else g.el=p.el,w.vnode=g},$e=(p,g,y,w,I,k,L)=>{const A=()=>{if(p.isMounted){let{next:H,bu:$,u:W,parent:Y,vnode:ne}=p,Te=H,ye;ys(p,!1),H?(H.el=ne.el,Ee(p,H,L)):H=ne,$&&ia($),(ye=H.props&&H.props.onVnodeBeforeUpdate)&&an(ye,Y,H,ne),ys(p,!0);const Ve=ml(p),qt=p.subTree;p.subTree=Ve,_(qt,Ve,h(qt.el),P(qt),p,I,k),H.el=Ve.el,Te===null&&RT(p,Ve.el),W&&Tt(W,I),(ye=H.props&&H.props.onVnodeUpdated)&&Tt(()=>an(ye,Y,H,ne),I)}else{let H;const{el:$,props:W}=g,{bm:Y,m:ne,parent:Te}=p,ye=oa(g);if(ys(p,!1),Y&&ia(Y),!ye&&(H=W&&W.onVnodeBeforeMount)&&an(H,Te,g),ys(p,!0),$&&te){const Ve=()=>{p.subTree=ml(p),te($,p.subTree,p,I,null)};ye?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ve()):Ve()}else{const Ve=p.subTree=ml(p);_(null,Ve,y,w,p,I,k),g.el=Ve.el}if(ne&&Tt(ne,I),!ye&&(H=W&&W.onVnodeMounted)){const Ve=g;Tt(()=>an(H,Te,Ve),I)}(g.shapeFlag&256||Te&&oa(Te.vnode)&&Te.vnode.shapeFlag&256)&&p.a&&Tt(p.a,I),p.isMounted=!0,g=y=w=null}},x=p.effect=new yh(A,()=>Ch(C),p.scope),C=p.update=()=>x.run();C.id=p.uid,ys(p,!0),C()},Ee=(p,g,y)=>{g.component=p;const w=p.vnode.props;p.vnode=g,p.next=null,XT(p,g.props,w,y),eI(p,g.children,y),Bi(),Of(),ji()},_e=(p,g,y,w,I,k,L,A,x=!1)=>{const C=p&&p.children,H=p?p.shapeFlag:0,$=g.children,{patchFlag:W,shapeFlag:Y}=g;if(W>0){if(W&128){ms(C,$,y,w,I,k,L,A,x);return}else if(W&256){Bt(C,$,y,w,I,k,L,A,x);return}}Y&8?(H&16&&F(C,I,k),$!==C&&u(y,$)):H&16?Y&16?ms(C,$,y,w,I,k,L,A,x):F(C,I,k,!0):(H&8&&u(y,""),Y&16&&xe($,y,w,I,k,L,A,x))},Bt=(p,g,y,w,I,k,L,A,x)=>{p=p||hi,g=g||hi;const C=p.length,H=g.length,$=Math.min(C,H);let W;for(W=0;W<$;W++){const Y=g[W]=x?Wn(g[W]):cn(g[W]);_(p[W],Y,y,null,I,k,L,A,x)}C>H?F(p,I,k,!0,!1,$):xe(g,y,w,I,k,L,A,x,$)},ms=(p,g,y,w,I,k,L,A,x)=>{let C=0;const H=g.length;let $=p.length-1,W=H-1;for(;C<=$&&C<=W;){const Y=p[C],ne=g[C]=x?Wn(g[C]):cn(g[C]);if(or(Y,ne))_(Y,ne,y,null,I,k,L,A,x);else break;C++}for(;C<=$&&C<=W;){const Y=p[$],ne=g[W]=x?Wn(g[W]):cn(g[W]);if(or(Y,ne))_(Y,ne,y,null,I,k,L,A,x);else break;$--,W--}if(C>$){if(C<=W){const Y=W+1,ne=Y<H?g[Y].el:w;for(;C<=W;)_(null,g[C]=x?Wn(g[C]):cn(g[C]),y,ne,I,k,L,A,x),C++}}else if(C>W)for(;C<=$;)Et(p[C],I,k,!0),C++;else{const Y=C,ne=C,Te=new Map;for(C=ne;C<=W;C++){const Rt=g[C]=x?Wn(g[C]):cn(g[C]);Rt.key!=null&&Te.set(Rt.key,C)}let ye,Ve=0;const qt=W-ne+1;let ti=!1,wf=0;const rr=new Array(qt);for(C=0;C<qt;C++)rr[C]=0;for(C=Y;C<=$;C++){const Rt=p[C];if(Ve>=qt){Et(Rt,I,k,!0);continue}let on;if(Rt.key!=null)on=Te.get(Rt.key);else for(ye=ne;ye<=W;ye++)if(rr[ye-ne]===0&&or(Rt,g[ye])){on=ye;break}on===void 0?Et(Rt,I,k,!0):(rr[on-ne]=C+1,on>=wf?wf=on:ti=!0,_(Rt,g[on],y,null,I,k,L,A,x),Ve++)}const Ef=ti?rI(rr):hi;for(ye=Ef.length-1,C=qt-1;C>=0;C--){const Rt=ne+C,on=g[Rt],Tf=Rt+1<H?g[Rt+1].el:w;rr[C]===0?_(null,on,y,Tf,I,k,L,A,x):ti&&(ye<0||C!==Ef[ye]?jt(on,y,Tf,2):ye--)}}},jt=(p,g,y,w,I=null)=>{const{el:k,type:L,transition:A,children:x,shapeFlag:C}=p;if(C&6){jt(p.component.subTree,g,y,w);return}if(C&128){p.suspense.move(g,y,w);return}if(C&64){L.move(p,g,y,le);return}if(L===It){s(k,g,y);for(let $=0;$<x.length;$++)jt(x[$],g,y,w);s(p.anchor,g,y);return}if(L===yl){R(p,g,y);return}if(w!==2&&C&1&&A)if(w===0)A.beforeEnter(k),s(k,g,y),Tt(()=>A.enter(k),I);else{const{leave:$,delayLeave:W,afterLeave:Y}=A,ne=()=>s(k,g,y),Te=()=>{$(k,()=>{ne(),Y&&Y()})};W?W(k,ne,Te):Te()}else s(k,g,y)},Et=(p,g,y,w=!1,I=!1)=>{const{type:k,props:L,ref:A,children:x,dynamicChildren:C,shapeFlag:H,patchFlag:$,dirs:W}=p;if(A!=null&&au(A,null,y,p,!0),H&256){g.ctx.deactivate(p);return}const Y=H&1&&W,ne=!oa(p);let Te;if(ne&&(Te=L&&L.onVnodeBeforeUnmount)&&an(Te,g,p),H&6)T(p.component,y,w);else{if(H&128){p.suspense.unmount(y,w);return}Y&&_s(p,null,g,"beforeUnmount"),H&64?p.type.remove(p,g,y,I,le,w):C&&(k!==It||$>0&&$&64)?F(C,g,y,!1,!0):(k===It&&$&384||!I&&H&16)&&F(x,g,y),w&&ei(p)}(ne&&(Te=L&&L.onVnodeUnmounted)||Y)&&Tt(()=>{Te&&an(Te,g,p),Y&&_s(p,null,g,"unmounted")},y)},ei=p=>{const{type:g,el:y,anchor:w,transition:I}=p;if(g===It){Fo(y,w);return}if(g===yl){M(p);return}const k=()=>{i(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:L,delayLeave:A}=I,x=()=>L(y,k);A?A(p.el,k,x):x()}else k()},Fo=(p,g)=>{let y;for(;p!==g;)y=d(p),i(p),p=y;i(g)},T=(p,g,y)=>{const{bum:w,scope:I,update:k,subTree:L,um:A}=p;w&&ia(w),I.stop(),k&&(k.active=!1,Et(L,p,g,y)),A&&Tt(A,g),Tt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},F=(p,g,y,w=!1,I=!1,k=0)=>{for(let L=k;L<p.length;L++)Et(p[L],g,y,w,I)},P=p=>p.shapeFlag&6?P(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),j=(p,g,y)=>{p==null?g._vnode&&Et(g._vnode,null,null,!0):_(g._vnode||null,p,g,null,null,null,y),Of(),i_(),g._vnode=p},le={p:_,um:Et,m:jt,r:ei,mt:gs,mc:xe,pc:_e,pbc:wt,n:P,o:t};let Pe,te;return e&&([Pe,te]=e(le)),{render:j,hydrate:Pe,createApp:nI(j,Pe)}}function ys({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function I_(t,e,n=!1){const s=t.children,i=e.children;if(z(s)&&z(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Wn(i[r]),a.el=o.el),n||I_(o,a)),a.type===gc&&(a.el=o.el)}}function rI(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const oI=t=>t.__isTeleport,It=Symbol(void 0),gc=Symbol(void 0),Ms=Symbol(void 0),yl=Symbol(void 0),br=[];let zt=null;function ie(t=!1){br.push(zt=t?null:[])}function aI(){br.pop(),zt=br[br.length-1]||null}let Br=1;function Bf(t){Br+=t}function b_(t){return t.dynamicChildren=Br>0?zt||hi:null,aI(),Br>0&&zt&&zt.push(t),t}function ke(t,e,n,s,i,r){return b_(O(t,e,n,s,i,r,!0))}function hn(t,e,n,s,i){return b_(De(t,e,n,s,i,!0))}function cu(t){return t?t.__v_isVNode===!0:!1}function or(t,e){return t.type===e.type&&t.key===e.key}const mc="__vInternal",C_=({key:t})=>t??null,aa=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ke(t)||nt(t)||Z(t)?{i:Nt,r:t,k:e,f:!!n}:t:null;function O(t,e=null,n=null,s=0,i=null,r=t===It?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&C_(e),ref:e&&aa(e),scopeId:fc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Nt};return a?(Ah(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),Br>0&&!o&&zt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&zt.push(c),c}const De=cI;function cI(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===jT)&&(t=Ms),cu(t)){const a=Ii(t,e,!0);return n&&Ah(a,n),Br>0&&!r&&zt&&(a.shapeFlag&6?zt[zt.indexOf(t)]=a:zt.push(a)),a.patchFlag|=-2,a}if(vI(t)&&(t=t.__vccOpts),e){e=lI(e);let{class:a,style:c}=e;a&&!Ke(a)&&(e.class=fh(a)),be(c)&&(zm(c)&&!z(c)&&(c=vt({},c)),e.style=dh(c))}const o=Ke(t)?1:AT(t)?128:oI(t)?64:be(t)?4:Z(t)?2:0;return O(t,e,n,s,i,o,r,!0)}function lI(t){return t?zm(t)||mc in t?vt({},t):t:null}function Ii(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?uI(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&C_(a),ref:e&&e.ref?n&&i?z(i)?i.concat(aa(e)):[i,aa(e)]:aa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ii(t.ssContent),ssFallback:t.ssFallback&&Ii(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ht(t=" ",e=0){return De(gc,null,t,e)}function kt(t="",e=!1){return e?(ie(),hn(Ms,null,t)):De(Ms,null,t)}function cn(t){return t==null||typeof t=="boolean"?De(Ms):z(t)?De(It,null,t.slice()):typeof t=="object"?Wn(t):De(gc,null,String(t))}function Wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ii(t)}function Ah(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ah(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(mc in e)?e._ctx=Nt:i===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),s&64?(n=16,e=[Ht(e)]):n=8);t.children=e,t.shapeFlag|=n}function uI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=fh([e.class,s.class]));else if(i==="style")e.style=dh([e.style,s.style]);else if(oc(i)){const r=e[i],o=s[i];o&&r!==o&&!(z(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function an(t,e,n,s=null){Xt(t,e,7,[n,s])}const hI=T_();let dI=0;function fI(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||hI,r={uid:dI++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:y_(s,i),emitsOptions:o_(s,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=IT.bind(null,r),t.ce&&t.ce(r),r}let Fe=null;const kh=()=>Fe||Nt,bi=t=>{Fe=t,t.scope.on()},Ns=()=>{Fe&&Fe.scope.off(),Fe=null};function S_(t){return t.vnode.shapeFlag&4}let jr=!1;function pI(t,e=!1){jr=e;const{props:n,children:s}=t.vnode,i=S_(t);YT(t,n,i,e),ZT(t,s);const r=i?gI(t,e):void 0;return jr=!1,r}function gI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gm(new Proxy(t.ctx,HT));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?_I(t):null;bi(t),Bi();const r=es(s,t,0,[t.props,i]);if(ji(),Ns(),xm(r)){if(r.then(Ns,Ns),e)return r.then(o=>{jf(t,o,e)}).catch(o=>{hc(o,t,0)});t.asyncDep=r}else jf(t,r,e)}else R_(t,e)}function jf(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=Zm(e)),R_(t,n)}let qf;function R_(t,e,n){const s=t.type;if(!t.render){if(!e&&qf&&!s.render){const i=s.template||Sh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=vt(vt({isCustomElement:r,delimiters:a},o),c);s.render=qf(i,l)}}t.render=s.render||Yt}bi(t),Bi(),WT(t),ji(),Ns()}function mI(t){return new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}})}function _I(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=mI(t))},slots:t.slots,emit:t.emit,expose:e}}function _c(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zm(Gm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ir)return Ir[n](t)},has(e,n){return n in e||n in Ir}}))}function yI(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function vI(t){return Z(t)&&"__vccOpts"in t}const Lt=(t,e)=>_T(t,e,jr);function A_(t,e,n){const s=arguments.length;return s===2?be(e)&&!z(e)?cu(e)?De(t,null,[e]):De(t,e):De(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&cu(n)&&(n=[n]),De(t,e,n))}const k_=Symbol(""),wI=()=>Ut(k_),EI="3.2.47",TI="http://www.w3.org/2000/svg",Is=typeof document<"u"?document:null,Hf=Is&&Is.createElement("template"),II={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Is.createElementNS(TI,t):Is.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Is.createTextNode(t),createComment:t=>Is.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Is.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Hf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Hf.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function bI(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function CI(t,e,n){const s=t.style,i=Ke(n);if(n&&!i){if(e&&!Ke(e))for(const r in e)n[r]==null&&lu(s,r,"");for(const r in n)lu(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Wf=/\s*!important$/;function lu(t,e,n){if(z(n))n.forEach(s=>lu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=SI(t,e);Wf.test(n)?t.setProperty(Ws(s),n.replace(Wf,""),"important"):t[s]=n}}const Kf=["Webkit","Moz","ms"],vl={};function SI(t,e){const n=vl[e];if(n)return n;let s=mn(e);if(s!=="filter"&&s in t)return vl[e]=s;s=lc(s);for(let i=0;i<Kf.length;i++){const r=Kf[i]+s;if(r in t)return vl[e]=r}return e}const zf="http://www.w3.org/1999/xlink";function RI(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zf,e.slice(6,e.length)):t.setAttributeNS(zf,e,n);else{const r=A0(e);n==null||r&&!km(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function AI(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=km(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Gn(t,e,n,s){t.addEventListener(e,n,s)}function kI(t,e,n,s){t.removeEventListener(e,n,s)}function NI(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=xI(e);if(s){const l=r[e]=PI(s,i);Gn(t,a,l,c)}else o&&(kI(t,a,o,c),r[e]=void 0)}}const Gf=/(?:Once|Passive|Capture)$/;function xI(t){let e;if(Gf.test(t)){e={};let s;for(;s=t.match(Gf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ws(t.slice(2)),e]}let wl=0;const OI=Promise.resolve(),DI=()=>wl||(OI.then(()=>wl=0),wl=Date.now());function PI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xt(MI(s,n.value),e,5,[s])};return n.value=t,n.attached=DI(),n}function MI(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Qf=/^on[a-z]/,LI=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?bI(t,s,i):e==="style"?CI(t,n,s):oc(e)?ph(e)||NI(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):FI(t,e,s,i))?AI(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),RI(t,e,s,i))};function FI(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Qf.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qf.test(e)&&Ke(n)?!1:e in t}const Ci=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>ia(e,n):e};function UI(t){t.target.composing=!0}function Yf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qr={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Ci(i);const r=s||i.props&&i.props.type==="number";Gn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=_a(a)),t._assign(a)}),n&&Gn(t,"change",()=>{t.value=t.value.trim()}),e||(Gn(t,"compositionstart",UI),Gn(t,"compositionend",Yf),Gn(t,"change",Yf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Ci(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&_a(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Xf={created(t,{value:e},n){t.checked=Ei(e,n.props.value),t._assign=Ci(n),Gn(t,"change",()=>{t._assign(Hr(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Ci(s),e!==n&&(t.checked=Ei(e,s.props.value))}},$I={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=ac(e);Gn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?_a(Hr(o)):Hr(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Ci(s)},mounted(t,{value:e}){Jf(t,e)},beforeUpdate(t,e,n){t._assign=Ci(n)},updated(t,{value:e}){Jf(t,e)}};function Jf(t,e){const n=t.multiple;if(!(n&&!z(e)&&!ac(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Hr(r);if(n)z(e)?r.selected=N0(e,o)>-1:r.selected=e.has(o);else if(Ei(Hr(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Hr(t){return"_value"in t?t._value:t.value}const VI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zf=(t,e)=>n=>{if(!("key"in n))return;const s=Ws(n.key);if(e.some(i=>i===s||VI[i]===s))return t(n)},BI=vt({patchProp:LI},II);let ep;function jI(){return ep||(ep=sI(BI))}const qI=(...t)=>{const e=jI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=HI(s);if(!i)return;const r=e._component;!Z(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function HI(t){return Ke(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw qi(e)},qi=function(t){return new Error("Firebase Database ("+N_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},WI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},O_=function(t){const e=x_(t);return yc.encodeByteArray(e,!0)},Ea=function(t){return O_(t).replace(/\./g,"")},Ta=function(t){try{return yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){return D_(void 0,t)}function D_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!zI(n)||(t[n]=D_(t[n],e[n]));return t}function zI(t){return t!=="__proto__"}/**
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
 */function GI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QI=()=>GI().__FIREBASE_DEFAULTS__,YI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ta(t[1]);return e&&JSON.parse(e)},Nh=()=>{try{return QI()||YI()||XI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},P_=t=>{var e,n;return(n=(e=Nh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JI=t=>{const e=P_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ZI=()=>{var t;return(t=Nh())===null||t===void 0?void 0:t.config},M_=t=>{var e;return(e=Nh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function eb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ea(JSON.stringify(n)),Ea(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function tb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function L_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nb(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function F_(){return N_.NODE_ADMIN===!0}function U_(){try{return typeof indexedDB=="object"}catch{return!1}}function sb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="FirebaseError";class En extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ib,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?rb(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new En(i,a,s)}}function rb(t,e){return t.replace(ob,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ob=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t){return JSON.parse(t)}function tt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Kr(Ta(r[0])||""),n=Kr(Ta(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ab=function(t){const e=$_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},cb=function(t){const e=$_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Si(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function uu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ia(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ba(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(tp(r)&&tp(o)){if(!ba(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function tp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function gr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function mr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ub(t,e){const n=new hb(t,e);return n.subscribe.bind(n)}class hb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");db(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=El),i.error===void 0&&(i.error=El),i.complete===void 0&&(i.complete=El);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function db(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function El(){}function fb(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,D(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ws="[DEFAULT]";/**
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
 */class gb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Wr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_b(e))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ws){return this.instances.has(e)}getOptions(e=ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:mb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ws){return this.component?this.component.multipleInstances?e:ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mb(t){return t===ws?void 0:t}function _b(t){return t.instantiationMode==="EAGER"}/**
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
 */class yb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const vb={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},wb=de.INFO,Eb={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Tb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Eb[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ho{constructor(e){this.name=e,this._logLevel=wb,this._logHandler=Tb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Ib=(t,e)=>e.some(n=>t instanceof n);let np,sp;function bb(){return np||(np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cb(){return sp||(sp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V_=new WeakMap,hu=new WeakMap,B_=new WeakMap,Tl=new WeakMap,Oh=new WeakMap;function Sb(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ts(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&V_.set(n,t)}).catch(()=>{}),Oh.set(e,t),e}function Rb(t){if(hu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hu.set(t,e)}let du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||B_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ts(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ab(t){du=t(du)}function kb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Il(this),e,...n);return B_.set(s,e.sort?e.sort():[e]),ts(s)}:Cb().includes(t)?function(...e){return t.apply(Il(this),e),ts(V_.get(this))}:function(...e){return ts(t.apply(Il(this),e))}}function Nb(t){return typeof t=="function"?kb(t):(t instanceof IDBTransaction&&Rb(t),Ib(t,bb())?new Proxy(t,du):t)}function ts(t){if(t instanceof IDBRequest)return Sb(t);if(Tl.has(t))return Tl.get(t);const e=Nb(t);return e!==t&&(Tl.set(t,e),Oh.set(e,t)),e}const Il=t=>Oh.get(t);function xb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ts(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ts(o.result),c.oldVersion,c.newVersion,ts(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ob=["get","getKey","getAll","getAllKeys","count"],Db=["put","add","delete","clear"],bl=new Map;function ip(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bl.get(e))return bl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Db.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ob.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return bl.set(e,r),r}Ab(t=>({...t,get:(e,n,s)=>ip(e,n)||t.get(e,n,s),has:(e,n)=>!!ip(e,n)||t.has(e,n)}));/**
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
 */class Pb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Mb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fu="@firebase/app",rp="0.9.3";/**
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
 */const Ls=new ho("@firebase/app"),Lb="@firebase/app-compat",Fb="@firebase/analytics-compat",Ub="@firebase/analytics",$b="@firebase/app-check-compat",Vb="@firebase/app-check",Bb="@firebase/auth",jb="@firebase/auth-compat",qb="@firebase/database",Hb="@firebase/database-compat",Wb="@firebase/functions",Kb="@firebase/functions-compat",zb="@firebase/installations",Gb="@firebase/installations-compat",Qb="@firebase/messaging",Yb="@firebase/messaging-compat",Xb="@firebase/performance",Jb="@firebase/performance-compat",Zb="@firebase/remote-config",eC="@firebase/remote-config-compat",tC="@firebase/storage",nC="@firebase/storage-compat",sC="@firebase/firestore",iC="@firebase/firestore-compat",rC="firebase",oC="9.17.1";/**
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
 */const pu="[DEFAULT]",aC={[fu]:"fire-core",[Lb]:"fire-core-compat",[Ub]:"fire-analytics",[Fb]:"fire-analytics-compat",[Vb]:"fire-app-check",[$b]:"fire-app-check-compat",[Bb]:"fire-auth",[jb]:"fire-auth-compat",[qb]:"fire-rtdb",[Hb]:"fire-rtdb-compat",[Wb]:"fire-fn",[Kb]:"fire-fn-compat",[zb]:"fire-iid",[Gb]:"fire-iid-compat",[Qb]:"fire-fcm",[Yb]:"fire-fcm-compat",[Xb]:"fire-perf",[Jb]:"fire-perf-compat",[Zb]:"fire-rc",[eC]:"fire-rc-compat",[tC]:"fire-gcs",[nC]:"fire-gcs-compat",[sC]:"fire-fst",[iC]:"fire-fst-compat","fire-js":"fire-js",[rC]:"fire-js-all"};/**
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
 */const Ca=new Map,gu=new Map;function cC(t,e){try{t.container.addComponent(e)}catch(n){Ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(gu.has(e))return Ls.debug(`There were multiple attempts to register component ${e}.`),!1;gu.set(e,t);for(const n of Ca.values())cC(n,t);return!0}function Dh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const lC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ns=new Hi("app","Firebase",lC);/**
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
 */class uC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ns.create("app-deleted",{appName:this._name})}}/**
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
 */const Ks=oC;function j_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:pu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ns.create("bad-app-name",{appName:String(i)});if(n||(n=ZI()),!n)throw ns.create("no-options");const r=Ca.get(i);if(r){if(ba(n,r.options)&&ba(s,r.config))return r;throw ns.create("duplicate-app",{appName:i})}const o=new yb(i);for(const c of gu.values())o.addComponent(c);const a=new uC(n,s,o);return Ca.set(i,a),a}function Ph(t=pu){const e=Ca.get(t);if(!e&&t===pu)return j_();if(!e)throw ns.create("no-app",{appName:t});return e}function Ot(t,e,n){var s;let i=(s=aC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ls.warn(a.join(" "));return}_n(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const hC="firebase-heartbeat-database",dC=1,zr="firebase-heartbeat-store";let Cl=null;function q_(){return Cl||(Cl=xb(hC,dC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zr)}}}).catch(t=>{throw ns.create("idb-open",{originalErrorMessage:t.message})})),Cl}async function fC(t){try{return(await q_()).transaction(zr).objectStore(zr).get(H_(t))}catch(e){if(e instanceof En)Ls.warn(e.message);else{const n=ns.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ls.warn(n.message)}}}async function op(t,e){try{const s=(await q_()).transaction(zr,"readwrite");return await s.objectStore(zr).put(e,H_(t)),s.done}catch(n){if(n instanceof En)Ls.warn(n.message);else{const s=ns.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ls.warn(s.message)}}}function H_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pC=1024,gC=30*24*60*60*1e3;class mC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ap();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=gC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ap(),{heartbeatsToSend:n,unsentEntries:s}=_C(this._heartbeatsCache.heartbeats),i=Ea(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ap(){return new Date().toISOString().substring(0,10)}function _C(t,e=pC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),cp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U_()?sb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cp(t){return Ea(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vC(t){_n(new en("platform-logger",e=>new Pb(e),"PRIVATE")),_n(new en("heartbeat",e=>new mC(e),"PRIVATE")),Ot(fu,rp,t),Ot(fu,rp,"esm2017"),Ot("fire-js","")}vC("");function Mh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function W_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wC=W_,K_=new Hi("auth","Firebase",W_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new ho("@firebase/auth");function ca(t,...e){lp.logLevel<=de.ERROR&&lp.error(`Auth (${Ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw Lh(t,...e)}function fn(t,...e){return Lh(t,...e)}function EC(t,e,n){const s=Object.assign(Object.assign({},wC()),{[e]:n});return new Hi("auth","Firebase",s).create(e,{appName:t.name})}function Lh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return K_.create(t,...e)}function K(t,e,...n){if(!t)throw Lh(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ca(e),new Error(e)}function Pn(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new Map;function Sn(t){Pn(t instanceof Function,"Expected a class definition");let e=up.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,up.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e){const n=Dh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ba(r,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function IC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bC(){return hp()==="http:"||hp()==="https:"}function hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bC()||tb()||"connection"in navigator)?navigator.onLine:!0}function SC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=xh()||L_()}get(){return CC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=new fo(3e4,6e4);function wc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ki(t,e,n,s,i={}){return G_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Wi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),z_.fetch()(Q_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function G_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},RC),e);try{const i=new kC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ho(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ho(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw EC(t,u,l);tn(t,u)}}catch(i){if(i instanceof En)throw i;tn(t,"network-request-failed")}}async function Ec(t,e,n,s,i={}){const r=await Ki(t,e,n,s,i);return"mfaPendingCredential"in r&&tn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Q_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Fh(t.config,i):`${t.config.apiScheme}://${i}`}class kC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(fn(this.auth,"network-request-failed")),AC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ho(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=fn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e){return Ki(t,"POST","/v1/accounts:delete",e)}async function xC(t,e){return Ki(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OC(t,e=!1){const n=Me(t),s=await n.getIdToken(e),i=Uh(s);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Cr(Sl(i.auth_time)),issuedAtTime:Cr(Sl(i.iat)),expirationTime:Cr(Sl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Sl(t){return Number(t)*1e3}function Uh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ca("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ta(n);return i?JSON.parse(i):(ca("Failed to decode base64 JWT payload"),null)}catch(i){return ca("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function DC(t){const e=Uh(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof En&&PC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function PC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sa(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Fs(t,xC(n,{idToken:s}));K(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?UC(r.providerUserInfo):[],a=FC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Y_(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function LC(t){const e=Me(t);await Sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function UC(t){return t.map(e=>{var{providerId:n}=e,s=Mh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(t,e){const n=await G_(t,{},async()=>{const s=Wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Q_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",z_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):DC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await $C(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Gr;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(K(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Mh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Y_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OC(this,e)}reload(){return LC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new xs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Sa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fs(this,NC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:M,isAnonymous:ee,providerData:he,stsTokenManager:we}=n;K(R&&we,e,"internal-error");const xe=Gr.fromJSON(this.name,we);K(typeof R=="string",e,"internal-error"),qn(h,e.name),qn(d,e.name),K(typeof M=="boolean",e,"internal-error"),K(typeof ee=="boolean",e,"internal-error"),qn(f,e.name),qn(m,e.name),qn(_,e.name),qn(v,e.name),qn(b,e.name),qn(N,e.name);const Mt=new xs({uid:R,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:ee,photoURL:m,phoneNumber:f,tenantId:_,stsTokenManager:xe,createdAt:b,lastLoginAt:N});return he&&Array.isArray(he)&&(Mt.providerData=he.map(wt=>Object.assign({},wt))),v&&(Mt._redirectEventId=v),Mt}static async _fromIdTokenResponse(e,n,s=!1){const i=new Gr;i.updateFromServerResponse(n);const r=new xs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Sa(r),r}}/**
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
 */class X_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}X_.type="NONE";const dp=X_;/**
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
 */function la(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=la(this.userKey,i.apiKey,r),this.fullPersistenceKey=la("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gi(Sn(dp),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Sn(dp);const o=la(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=xs._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new gi(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new gi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ey(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ny(e))return"Blackberry";if(sy(e))return"Webos";if($h(e))return"Safari";if((e.includes("chrome/")||Z_(e))&&!e.includes("edge/"))return"Chrome";if(ty(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function J_(t=pt()){return/firefox\//i.test(t)}function $h(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Z_(t=pt()){return/crios\//i.test(t)}function ey(t=pt()){return/iemobile/i.test(t)}function ty(t=pt()){return/android/i.test(t)}function ny(t=pt()){return/blackberry/i.test(t)}function sy(t=pt()){return/webos/i.test(t)}function Tc(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VC(t=pt()){var e;return Tc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BC(){return nb()&&document.documentMode===10}function iy(t=pt()){return Tc(t)||ty(t)||sy(t)||ny(t)||/windows phone/i.test(t)||ey(t)}function jC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t,e=[]){let n;switch(t){case"Browser":n=fp(pt());break;case"Worker":n=`${fp(pt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${s}`}/**
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
 */class qC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pp(this),this.idTokenSubscription=new pp(this),this.beforeStateQueue=new qC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=K_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ry(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ic(t){return Me(t)}class pp{constructor(e){this.auth=e,this.observer=null,this.addObserver=ub(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function WC(t,e,n){const s=Ic(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=oy(e),{host:o,port:a}=KC(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zC()}function oy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KC(t){const e=oy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:gp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:gp(o)}}}function gp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}async function ay(t,e){return Ki(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(t,e){return Ec(t,"POST","/v1/accounts:signInWithPassword",wc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e){return Ec(t,"POST","/v1/accounts:signInWithEmailLink",wc(t,e))}async function YC(t,e){return Ec(t,"POST","/v1/accounts:signInWithEmailLink",wc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Vh{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Qr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Qr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return GC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return QC(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ay(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return YC(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t,e){return Ec(t,"POST","/v1/accounts:signInWithIdp",wc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="http://localhost";class Us extends Vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Mh(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Us(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,mi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mi(e,n)}buildRequest(){const e={requestUri:XC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZC(t){const e=gr(mr(t)).link,n=e?gr(mr(e)).deep_link_id:null,s=gr(mr(t)).deep_link_id;return(s?gr(mr(s)).link:null)||s||n||e||t}class Bh{constructor(e){var n,s,i,r,o,a;const c=gr(mr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=JC((i=c.mode)!==null&&i!==void 0?i:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ZC(e);try{return new Bh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.providerId=zi.PROVIDER_ID}static credential(e,n){return Qr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Bh.parseLink(n);return K(s,"argument-error"),Qr._fromEmailAndCode(e,s.code,s.tenantId)}}zi.PROVIDER_ID="password";zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class po extends cy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends po{constructor(){super("facebook.com")}static credential(e){return Us._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Us._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends po{constructor(){super("github.com")}static credential(e){return Us._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends po{constructor(){super("twitter.com")}static credential(e,n){return Us._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Jn.credential(n,s)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await xs._fromIdTokenResponse(e,s,i),o=mp(s);return new Ri({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=mp(s);return new Ri({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends En{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ra.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ra(e,n,s,i)}}function ly(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ra._fromErrorAndOperation(t,r,e,s):r})}async function eS(t,e,n=!1){const s=await Fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ri._forOperation(t,"link",s)}/**
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
 */async function tS(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Fs(t,ly(s,i,e,t),n);K(r.idToken,s,"internal-error");const o=Uh(r.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),Ri._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&tn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(t,e,n=!1){const s="signIn",i=await ly(t,s,e),r=await Ri._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function nS(t,e){return uy(Ic(t),e)}function sS(t,e,n){return nS(Me(t),zi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(t,e){return Ki(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DF(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Me(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fs(s,iS(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function PF(t,e){return hy(Me(t),e,null)}function MF(t,e){return hy(Me(t),null,e)}async function hy(t,e,n){const{auth:s}=t,r={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(r.email=e),n&&(r.password=n);const o=await Fs(t,ay(s,r));await t._updateTokensIfNecessary(o,!0)}function dy(t,e,n,s){return Me(t).onIdTokenChanged(e,n,s)}function rS(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function LF(t){return Me(t).signOut()}const Aa="__sak";/**
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
 */class fy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Aa,"1"),this.storage.removeItem(Aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(){const t=pt();return $h(t)||Tc(t)}const aS=1e3,cS=10;class py extends fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oS()&&jC(),this.fallbackToPolling=iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);BC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cS):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},aS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}py.type="LOCAL";const lS=py;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gy.type="SESSION";const my=gy;/**
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
 */function uS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new bc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await uS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=jh("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function dS(t){pn().location.href=t}/**
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
 */function _y(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function fS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gS(){return _y()?self:null}/**
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
 */const yy="firebaseLocalStorageDb",mS=1,ka="firebaseLocalStorage",vy="fbase_key";class go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cc(t,e){return t.transaction([ka],e?"readwrite":"readonly").objectStore(ka)}function _S(){const t=indexedDB.deleteDatabase(yy);return new go(t).toPromise()}function _u(){const t=indexedDB.open(yy,mS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ka,{keyPath:vy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ka)?e(s):(s.close(),await _S(),e(await _u()))})})}async function _p(t,e,n){const s=Cc(t,!0).put({[vy]:e,value:n});return new go(s).toPromise()}async function yS(t,e){const n=Cc(t,!1).get(e),s=await new go(n).toPromise();return s===void 0?null:s.value}function yp(t,e){const n=Cc(t,!0).delete(e);return new go(n).toPromise()}const vS=800,wS=3;class wy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _u(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>wS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _y()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(gS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fS(),!this.activeServiceWorker)return;this.sender=new hS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _u();return await _p(e,Aa,"1"),await yp(e,Aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_p(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>yS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Cc(i,!1).getAll();return new go(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wy.type="LOCAL";const ES=wy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function IS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=fn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",TS().appendChild(s)})}function bS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new fo(3e4,6e4);/**
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
 */function CS(t,e){return e?Sn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qh extends Vh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SS(t){return uy(t.auth,new qh(t),t.bypassAuthState)}function RS(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),tS(n,new qh(t),t.bypassAuthState)}async function AS(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),eS(n,new qh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SS;case"linkViaPopup":case"linkViaRedirect":return AS;case"reauthViaPopup":case"reauthViaRedirect":return RS;default:tn(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=new fo(2e3,1e4);class ai extends Ey{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,kS.get())};e()}}ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS="pendingRedirect",ua=new Map;class xS extends Ey{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ua.get(this.auth._key());if(!e){try{const s=await OS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ua.set(this.auth._key(),e)}return this.bypassAuthState||ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OS(t,e){const n=MS(e),s=PS(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function DS(t,e){ua.set(t._key(),e)}function PS(t){return Sn(t._redirectPersistence)}function MS(t){return la(NS,t.config.apiKey,t.name)}async function LS(t,e,n=!1){const s=Ic(t),i=CS(s,e),o=await new xS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=10*60*1e3;class US{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$S(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ty(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FS&&this.cachedEventUids.clear(),this.cachedEventUids.has(vp(e))}saveEventToCache(e){this.cachedEventUids.add(vp(e)),this.lastProcessedEventTime=Date.now()}}function vp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ty({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $S(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ty(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,e={}){return Ki(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jS=/^https?/;async function qS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VS(t);for(const n of e)try{if(HS(n))return}catch{}tn(t,"unauthorized-domain")}function HS(t){const e=mu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!jS.test(n))return!1;if(BS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const WS=new fo(3e4,6e4);function wp(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KS(t){return new Promise((e,n)=>{var s,i,r;function o(){wp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wp(),n(fn(t,"network-request-failed"))},timeout:WS.get()})}if(!((i=(s=pn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=pn().gapi)===null||r===void 0)&&r.load)o();else{const a=bS("iframefcb");return pn()[a]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},IS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ha=null,e})}let ha=null;function zS(t){return ha=ha||KS(t),ha}/**
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
 */const GS=new fo(5e3,15e3),QS="__/auth/iframe",YS="emulator/auth/iframe",XS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZS(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fh(e,YS):`https://${t.config.authDomain}/${QS}`,s={apiKey:e.apiKey,appName:t.name,v:Ks},i=JS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Wi(s).slice(1)}`}async function eR(t){const e=await zS(t),n=pn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:ZS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),a=pn().setTimeout(()=>{r(o)},GS.get());function c(){pn().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const tR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nR=500,sR=600,iR="_blank",rR="http://localhost";class Ep{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oR(t,e,n,s=nR,i=sR){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tR),{width:s.toString(),height:i.toString(),top:r,left:o}),l=pt().toLowerCase();n&&(a=Z_(l)?iR:n),J_(l)&&(e=e||rR,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(VC(l)&&a!=="_self")return aR(e||"",a),new Ep(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Ep(h)}function aR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const cR="__/auth/handler",lR="emulator/auth/handler";function Tp(t,e,n,s,i,r){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ks,eventId:i};if(e instanceof cy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(e instanceof po){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${uR(t)}?${Wi(a).slice(1)}`}function uR({config:t}){return t.emulator?Fh(t,lR):`https://${t.authDomain}/${cR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="webStorageSupport";class hR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=my,this._completeRedirectFn=LS,this._overrideRedirectResult=DS}async _openPopup(e,n,s,i){var r;Pn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Tp(e,n,s,mu(),i);return oR(e,o,jh())}async _openRedirect(e,n,s,i){return await this._originValidation(e),dS(Tp(e,n,s,mu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await eR(e),s=new US(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rl,{type:Rl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Rl];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iy()||$h()||Tc()}}const dR=hR;var Ip="@firebase/auth",bp="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gR(t){_n(new en("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{K(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ry(t)},u=new HC(a,c,l);return IC(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_n(new en("auth-internal",e=>{const n=Ic(e.getProvider("auth").getImmediate());return(s=>new fR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Ip,bp,pR(t)),Ot(Ip,bp,"esm2017")}/**
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
 */const mR=5*60,_R=M_("authIdTokenMaxAge")||mR;let Cp=null;const yR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>_R)return;const i=n==null?void 0:n.token;Cp!==i&&(Cp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Iy(t=Ph()){const e=Dh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TC(t,{popupRedirectResolver:dR,persistence:[ES,lS,my]}),s=M_("authTokenSyncURL");if(s){const r=yR(s);rS(n,r,()=>r(n.currentUser)),dy(n,o=>r(o))}const i=P_("auth");return i&&WC(n,`http://${i}`),n}gR("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=new Map,wR={activated:!1,tokenObservers:[]};function yn(t){return vR.get(t)||Object.assign({},wR)}const Sp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Wr,await TR(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Wr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function TR(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Na=new Hi("appCheck","AppCheck",IR);function bR(t){if(!yn(t).activated)throw Na.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR="firebase-app-check-database",SR=1,yu="firebase-app-check-store";let Wo=null;function RR(){return Wo||(Wo=new Promise((t,e)=>{try{const n=indexedDB.open(CR,SR);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Na.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(yu,{keyPath:"compositeKey"})}}}catch(n){e(Na.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Wo)}function AR(t,e){return kR(NR(t),e)}async function kR(t,e){const s=(await RR()).transaction(yu,"readwrite"),r=s.objectStore(yu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var l;a(Na.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function NR(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new ho("@firebase/app-check");function Rp(t,e){return U_()?AR(t,e).catch(n=>{vu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR={error:"UNKNOWN_ERROR"};function OR(t){return yc.encodeString(JSON.stringify(t),!1)}async function wu(t,e=!1){const n=t.app;bR(n);const s=yn(n);let i=s.token,r;if(i&&!_r(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(_r(c)?i=c:await Rp(n,void 0))}if(!e&&i&&_r(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await yn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?vu.warn(c.message):vu.error(c),r=c}let a;return i?r?_r(i)?a={token:i.token,internalError:r}:a=kp(r):(a={token:i.token},s.token=i,await Rp(n,i)):a=kp(r),o&&MR(n,a),a}function DR(t,e,n,s){const{app:i}=t,r=yn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&_r(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Ap(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Ap(t))}function by(t,e){const n=yn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Ap(t){const{app:e}=t,n=yn(e);let s=n.tokenRefresher;s||(s=PR(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function PR(t){const{app:e}=t;return new ER(async()=>{const n=yn(e);let s;if(n.token?s=await wu(t,!0):s=await wu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=yn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Sp.RETRIAL_MIN_WAIT,Sp.RETRIAL_MAX_WAIT)}function MR(t,e){const n=yn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function _r(t){return t.expireTimeMillis-Date.now()>0}function kp(t){return{token:OR(xR),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=yn(this.app);for(const n of e)by(this.app,n.next);return Promise.resolve()}}function FR(t,e){return new LR(t,e)}function UR(t){return{getToken:e=>wu(t,e),addTokenListener:e=>DR(t,"INTERNAL",e),removeTokenListener:e=>by(t.app,e)}}const $R="@firebase/app-check",VR="0.6.3",BR="app-check",Np="app-check-internal";function jR(){_n(new en(BR,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return FR(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Np).initialize()})),_n(new en(Np,t=>{const e=t.getProvider("app-check").getImmediate();return UR(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ot($R,VR)}jR();var qR="firebase",HR="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(qR,HR,"app");const Cy=Symbol("firebaseApp");function Sc(t){return kh()&&Ut(Cy,null)||Ph(t)}const Rn=()=>{};function Hh(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function WR(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function zs(t){return!!t&&typeof t=="object"}const KR=Object.prototype;function zR(t){return zs(t)&&Object.getPrototypeOf(t)===KR}function Wh(t){return zs(t)&&t.type==="document"}function GR(t){return zs(t)&&t.type==="collection"}function QR(t){return Wh(t)||GR(t)}function YR(t){return zs(t)&&t.type==="query"}function XR(t){return zs(t)&&"ref"in t}function JR(t){return zs(t)&&typeof t.bucket=="string"}function ZR(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function eA(){return!!(kh()&&Ut(k_,null))}const Ko=new WeakMap;function tA(t,e){if(!Ko.has(t)){const n=U0(!0);Ko.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Ko.delete(t)}}return Ko.get(t)}const nA=new WeakMap,zo=new WeakMap;function Sy(t){const e=Sc(t);if(!zo.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{zo.set(e,r),n(r.value)}];zo.set(e,i)}return zo.get(e)}function Ry(t){const e=Sy(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function sA(t,e){const n=Iy(e);dy(n,s=>{const i=Sy();t.value=s,Array.isArray(i)&&i[1](t)})}const xp="@firebase/database",Op="0.14.3";/**
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
 */let Ay="";function iA(t){Ay=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Kr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new rA(e)}}catch{}return new oA},Cs=ky("localStorage"),Eu=ky("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new ho("@firebase/database"),aA=function(){let t=1;return function(){return t++}}(),Ny=function(t){const e=pb(t),n=new lb;n.update(e);const s=n.digest();return yc.encodeByteArray(s)},mo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=mo.apply(null,s):typeof s=="object"?e+=tt(s):e+=s,e+=" "}return e};let Os=null,Dp=!0;const cA=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(_i.logLevel=de.VERBOSE,Os=_i.log.bind(_i),e&&Eu.set("logging_enabled",!0)):typeof t=="function"?Os=t:(Os=null,Eu.remove("logging_enabled"))},ot=function(...t){if(Dp===!0&&(Dp=!1,Os===null&&Eu.get("logging_enabled")===!0&&cA(!0)),Os){const e=mo.apply(null,t);Os(e)}},_o=function(t){return function(...e){ot(t,...e)}},Tu=function(...t){const e="FIREBASE INTERNAL ERROR: "+mo(...t);_i.error(e)},$s=function(...t){const e=`FIREBASE FATAL ERROR: ${mo(...t)}`;throw _i.error(e),new Error(e)},Dt=function(...t){const e="FIREBASE WARNING: "+mo(...t);_i.warn(e)},lA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},uA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ai="[MIN_NAME]",Vs="[MAX_NAME]",Gi=function(t,e){if(t===e)return 0;if(t===Ai||e===Vs)return-1;if(e===Ai||t===Vs)return 1;{const n=Pp(t),s=Pp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},hA=function(t,e){return t===e?0:t<e?-1:1},ar=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+tt(e))},Kh=function(t){if(typeof t!="object"||t===null)return tt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=tt(e[s]),n+=":",n+=Kh(t[e[s]]);return n+="}",n},Oy=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Vt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Dy=function(t){D(!xy(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},dA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},pA=new RegExp("^-?(0*)\\d{1,10}$"),gA=-2147483648,mA=2147483647,Pp=function(t){if(pA.test(t)){const e=Number(t);if(e>=gA&&e<=mA)return e}return null},yo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},_A=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Sr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class yA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}class Iu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Iu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="5",Py="v",My="s",Ly="r",Fy="f",Uy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$y="ls",Vy="p",bu="ac",By="websocket",jy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function EA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qy(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===By)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===jy)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);EA(t)&&(n.ns=t.namespace);const i=[];return Vt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this.counters_={}}incrementCounter(e,n=1){Vn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return KI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al={},kl={};function Gh(t){const e=t.toString();return Al[e]||(Al[e]=new TA),Al[e]}function IA(t,e){const n=t.toString();return kl[n]||(kl[n]=e()),kl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&yo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="start",CA="close",SA="pLPCommand",RA="pRTLPCB",Hy="id",Wy="pw",Ky="ser",AA="cb",kA="seg",NA="ts",xA="d",OA="dframe",zy=1870,Gy=30,DA=zy-Gy,PA=25e3,MA=3e4;class ci{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_o(e),this.stats_=Gh(n),this.urlFn=c=>(this.appCheckToken&&(c[bu]=this.appCheckToken),qy(n,jy,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(MA)),uA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qh((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mp)this.id=a,this.password=c;else if(o===CA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Mp]="t",s[Ky]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[AA]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Py]=zh,this.transportSessionId&&(s[My]=this.transportSessionId),this.lastSessionId&&(s[$y]=this.lastSessionId),this.applicationId&&(s[Vy]=this.applicationId),this.appCheckToken&&(s[bu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Uy.test(location.hostname)&&(s[Ly]=Fy);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ci.forceAllow_=!0}static forceDisallow(){ci.forceDisallow_=!0}static isAvailable(){return ci.forceAllow_?!0:!ci.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!dA()&&!fA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=O_(n),i=Oy(s,DA);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[OA]="t",s[Hy]=e,s[Wy]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qh{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=aA(),window[SA+this.uniqueCallbackIdentifier]=e,window[RA+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Hy]=this.myID,e[Wy]=this.myPW,e[Ky]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gy+s.length<=zy;){const o=this.pendingSegs.shift();s=s+"&"+kA+i+"="+o.seg+"&"+NA+i+"="+o.ts+"&"+xA+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(PA)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=16384,FA=45e3;let xa=null;typeof MozWebSocket<"u"?xa=MozWebSocket:typeof WebSocket<"u"&&(xa=WebSocket);class Kt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_o(this.connId),this.stats_=Gh(n),this.connURL=Kt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Py]=zh,typeof location<"u"&&location.hostname&&Uy.test(location.hostname)&&(o[Ly]=Fy),n&&(o[My]=n),s&&(o[$y]=s),i&&(o[bu]=i),r&&(o[Vy]=r),qy(e,By,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cs.set("previous_websocket_failure",!0);try{let s;F_(),this.mySock=new xa(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&xa!==null&&!Kt.forceDisallow_}static previouslyFailed(){return Cs.isInMemoryStorage||Cs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Kr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Oy(n,LA);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(FA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ci,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kt&&Kt.isAvailable();let s=n&&!Kt.previouslyFailed();if(e.webSocketOnly&&(n||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Kt];else{const i=this.transports_=[];for(const r of Yr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Yr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=6e4,$A=5e3,VA=10*1024,BA=100*1024,Nl="t",Lp="d",jA="s",Fp="r",qA="e",Up="o",$p="a",Vp="n",Bp="p",HA="h";class WA{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_o("c:"+this.id+":"),this.transportManager_=new Yr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Sr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>BA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>VA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nl in e){const n=e[Nl];n===$p?this.upgradeIfSecondaryHealthy_():n===Fp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Up&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ar("t",e),s=ar("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$p,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ar("t",e),s=ar("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ar(Nl,e);if(Lp in e){const s=e[Lp];if(n===HA){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Vp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jA?this.onConnectionShutdown_(s):n===Fp?this.onReset_(s):n===qA?Tu("Server Error: "+s):n===Up?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Tu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),zh!==s&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Sr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(UA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Sr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($A))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends Yy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Oa}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=32,qp=768;class Ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Ne("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function os(t){return t.pieces_.length-t.pieceNum_}function Re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ne(t.pieces_,e)}function Xy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function KA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Jy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Zy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ne(e,0)}function Xe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ne(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function Ft(t,e){const n=ae(t),s=ae(e);if(n===null)return e;if(n===s)return Ft(Re(t),Re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ev(t,e){if(os(t)!==os(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Gt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(os(t)>os(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class zA{constructor(e,n){this.errorPrefix_=n,this.parts_=Jy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=vc(this.parts_[s]);tv(this)}}function GA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=vc(e),tv(t)}function QA(t){const e=t.parts_.pop();t.byteLength_-=vc(e),t.parts_.length>0&&(t.byteLength_-=1)}function tv(t){if(t.byteLength_>qp)throw new Error(t.errorPrefix_+"has a key path longer than "+qp+" bytes ("+t.byteLength_+").");if(t.parts_.length>jp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jp+") or object contains a cycle "+Es(t))}function Es(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends Yy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Yh}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=1e3,YA=60*5*1e3,Hp=30*1e3,XA=1.3,JA=3e4,ZA="server_kill",Wp=3;class Nn extends Qy{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Nn.nextPersistentConnectionId_++,this.log_=_o("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=cr,this.maxReconnectDelay_=YA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!F_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Oa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(tt(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Wr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Nn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vn(e,"w")){const s=Si(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ab(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Tu("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=cr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=cr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>JA&&(this.reconnectDelay_=cr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*XA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Nn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new WA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Dt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(ZA)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Dt(h),c())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],uu(this.interruptReasons_)&&(this.reconnectDelay_=cr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Kh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wp&&(this.reconnectDelay_=Hp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ay.replace(/\./g,"-")]=1,xh()?e["framework.cordova"]=1:L_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Oa.getInstance().currentlyOnline();return uu(this.interruptReasons_)&&e}}Nn.nextPersistentConnectionId_=0;Nn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ce(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ce(Ai,e),i=new ce(Ai,n);return this.compare(s,i)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go;class nv extends Rc{static get __EMPTY_NODE(){return Go}static set __EMPTY_NODE(e){Go=e}compare(e,n){return Gi(e.name,n.name)}isDefinedOn(e){throw qi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(Vs,Go)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,Go)}toString(){return".key"}}const yi=new nv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=i??Ct.EMPTY_NODE,this.right=r??Ct.EMPTY_NODE}copy(e,n,s,i,r){return new Ye(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class ek{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qo(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new ek;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t,e){return Gi(t.name,e.name)}function Xh(t,e){return Gi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu;function nk(t){Cu=t}const sv=function(t){return typeof t=="number"?"number:"+Dy(t):"string:"+t},iv=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vn(e,".sv"),"Priority must be a string or number.")}else D(t===Cu||t.isEmpty(),"priority of unexpected type.");D(t===Cu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kp;class Ge{constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),iv(this.priorityNode_)}static set __childrenNodeConstructor(e){Kp=e}static get __childrenNodeConstructor(){return Kp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ae(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ae(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||os(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Dy(this.value_):e+=this.value_,this.lazyHash_=Ny(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ge.VALUE_TYPE_ORDER.indexOf(n),r=Ge.VALUE_TYPE_ORDER.indexOf(s);return D(i>=0,"Unknown leaf type: "+n),D(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rv,ov;function sk(t){rv=t}function ik(t){ov=t}class rk extends Rc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Gi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(Vs,new Ge("[PRIORITY-POST]",ov))}makePost(e,n){const s=rv(e);return new ce(n,new Ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const ht=new rk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=Math.log(2);class ak{constructor(e){const n=r=>parseInt(Math.log(r)/ok,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Da=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new Ye(d,h.node,Ye.BLACK,null,null);{const f=parseInt(u/2,10)+c,m=i(c,f),_=i(f+1,l);return h=t[f],d=n?n(h):h,new Ye(d,h.node,Ye.BLACK,m,_)}},r=function(c){let l=null,u=null,h=t.length;const d=function(m,_){const v=h-m,b=h;h-=m;const N=i(v+1,b),R=t[v],M=n?n(R):R;f(new Ye(M,R.node,_,null,N))},f=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const _=c.nextBitIsOne(),v=Math.pow(2,c.count-(m+1));_?d(v,Ye.BLACK):(d(v,Ye.BLACK),d(v,Ye.RED))}return u},o=new ak(t.length),a=r(o);return new Ct(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xl;const ni={};class An{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(ni&&ht,"ChildrenNode.ts has not been loaded"),xl=xl||new An({".priority":ni},{".priority":ht}),xl}get(e){const n=Si(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return Vn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==yi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ce.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Da(s,e.getCompare()):a=ni;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new An(u,l)}addToIndexes(e,n){const s=Ia(this.indexes_,(i,r)=>{const o=Si(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),i===ni)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ce.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Da(a,o.getCompare())}else return ni;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new ce(e.name,a))),c.insert(e,e.node)}});return new An(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ia(this.indexes_,i=>{if(i===ni)return i;{const r=n.get(e.name);return r?i.remove(new ce(e.name,r)):i}});return new An(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr;class ge{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&iv(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return lr||(lr=new ge(new Ct(Xh),null,An.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||lr}updatePriority(e){return this.children_.isEmpty()?this:new ge(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?lr:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ce(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?lr:this.priorityNode_;return new ge(i,o,r)}}updateChild(e,n){const s=ae(e);if(s===null)return n;{D(ae(e)!==".priority"||os(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ht,(o,a)=>{n[o]=a.val(e),s++,r&&ge.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sv(this.getPriority().val())+":"),this.forEachChild(ht,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ny(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ce(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vo?-1:0}withIndex(e){if(e===yi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ge(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ht),i=n.getIterator(ht);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yi?null:this.indexMap_.get(e.toString())}}ge.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ck extends ge{constructor(){super(new Ct(Xh),ge.EMPTY_NODE,An.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ge.EMPTY_NODE}isEmpty(){return!1}}const vo=new ck;Object.defineProperties(ce,{MIN:{value:new ce(Ai,ge.EMPTY_NODE)},MAX:{value:new ce(Vs,vo)}});nv.__EMPTY_NODE=ge.EMPTY_NODE;Ge.__childrenNodeConstructor=ge;nk(vo);ik(vo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=!0;function at(t,e=null){if(t===null)return ge.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,at(e))}if(!(t instanceof Array)&&lk){const n=[];let s=!1;if(Vt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=at(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new ce(o,c)))}}),n.length===0)return ge.EMPTY_NODE;const r=Da(n,tk,o=>o.name,Xh);if(s){const o=Da(n,ht.getCompare());return new ge(r,at(e),new An({".priority":o},{".priority":ht}))}else return new ge(r,at(e),An.Default)}else{let n=ge.EMPTY_NODE;return Vt(t,(s,i)=>{if(Vn(t,s)&&s.substring(0,1)!=="."){const r=at(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(at(e))}}sk(at);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk extends Rc{constructor(e){super(),this.indexPath_=e,D(!re(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Gi(e.name,n.name):r}makePost(e,n){const s=at(e),i=ge.EMPTY_NODE.updateChild(this.indexPath_,s);return new ce(n,i)}maxPost(){const e=ge.EMPTY_NODE.updateChild(this.indexPath_,vo);return new ce(Vs,e)}toString(){return Jy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk extends Rc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Gi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const s=at(e);return new ce(n,s)}toString(){return".value"}}const dk=new hk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){return{type:"value",snapshotNode:t}}function pk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ai}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ht}copy(){const e=new Jh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Gp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ht?n="$priority":t.index_===dk?n="$value":t.index_===yi?n="$key":(D(t.index_ instanceof uk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=tt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=tt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+tt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=tt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ht&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Qy{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=_o("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Pa.getListenId_(e,s),a={};this.listens_[o]=a;const c=Gp(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),Si(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,n){const s=Pa.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Gp(e._queryParams),s=e._path.toString(),i=new Wr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Kr(a.responseText)}catch{Dt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Dt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(){this.rootNode_=ge.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(){return{value:null,children:new Map}}function av(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ae(e);t.children.has(s)||t.children.set(s,Ma());const i=t.children.get(s);e=Re(e),av(i,e,n)}}function Su(t,e,n){t.value!==null?n(e,t.value):yk(t,(s,i)=>{const r=new Ne(e.toString()+"/"+s);Su(i,r,n)})}function yk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Vt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=10*1e3,wk=30*1e3,Ek=5*60*1e3;class Tk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new vk(e);const s=Yp+(wk-Yp)*Math.random();Sr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Vt(e,(i,r)=>{r>0&&Vn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Sr(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ek))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dn||(dn={}));function cv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=dn.ACK_USER_WRITE,this.source=cv()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ne(e));return new La(ve(),n,this.revert)}}else return D(ae(this.path)===e,"operationForChild called for unrelated child."),new La(Re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=dn.OVERWRITE}operationForChild(e){return re(this.path)?new Bs(this.source,ve(),this.snap.getImmediateChild(e)):new Bs(this.source,Re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=dn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new Ne(e));return n.isEmpty()?null:n.value?new Bs(this.source,ve(),n.value):new Xr(this.source,ve(),n)}else return D(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xr(this.source,Re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Ik(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(mk(o.childName,o.snapshotNode))}),ur(t,i,"child_removed",e,s,n),ur(t,i,"child_added",e,s,n),ur(t,i,"child_moved",r,s,n),ur(t,i,"child_changed",e,s,n),ur(t,i,"value",e,s,n),i}function ur(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>Ck(t,a,c)),o.forEach(a=>{const c=bk(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function bk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ck(t,e,n){if(e.childName==null||n.childName==null)throw qi("Should only compare child_ events.");const s=new ce(e.childName,e.snapshotNode),i=new ce(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e){return{eventCache:t,serverCache:e}}function Rr(t,e,n,s){return hv(new Zh(e,n,s),t.serverCache)}function dv(t,e,n,s){return hv(t.eventCache,new Zh(e,n,s))}function Ru(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function js(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;const Sk=()=>(Ol||(Ol=new Ct(hA)),Ol);class Ce{constructor(e,n=Sk()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return Vt(e,(s,i)=>{n=n.set(new Ne(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(re(e))return null;{const s=ae(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Re(e),n);return r!=null?{path:Xe(new Ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ae(e),s=this.children.get(n);return s!==null?s.subtree(Re(e)):new Ce(null)}}set(e,n){if(re(e))return new Ce(n,this.children);{const s=ae(e),r=(this.children.get(s)||new Ce(null)).set(Re(e),n),o=this.children.insert(s,r);return new Ce(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ae(e),s=this.children.get(n);if(s){const i=s.remove(Re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ce(null):new Ce(this.value,r)}else return this}}get(e){if(re(e))return this.value;{const n=ae(e),s=this.children.get(n);return s?s.get(Re(e)):null}}setTree(e,n){if(re(e))return n;{const s=ae(e),r=(this.children.get(s)||new Ce(null)).setTree(Re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ce(this.value,o)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Xe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(re(e))return null;{const r=ae(e),o=this.children.get(r);return o?o.findOnPath_(Re(e),Xe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,s){if(re(e))return this;{this.value&&s(n,this.value);const i=ae(e),r=this.children.get(i);return r?r.foreachOnPath_(Re(e),Xe(n,i),s):new Ce(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Xe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new Ce(null))}}function Ar(t,e,n){if(re(e))return new Jt(new Ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ft(i,e);return r=r.updateChild(o,n),new Jt(t.writeTree_.set(i,r))}else{const i=new Ce(n),r=t.writeTree_.setTree(e,i);return new Jt(r)}}}function Xp(t,e,n){let s=t;return Vt(n,(i,r)=>{s=Ar(s,Xe(e,i),r)}),s}function Jp(t,e){if(re(e))return Jt.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new Jt(n)}}function Au(t,e){return Gs(t,e)!=null}function Gs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ft(n.path,e)):null}function Zp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ht,(s,i)=>{e.push(new ce(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ce(s,i.value))}),e}function ss(t,e){if(re(e))return t;{const n=Gs(t,e);return n!=null?new Jt(new Ce(n)):new Jt(t.writeTree_.subtree(e))}}function ku(t){return t.writeTree_.isEmpty()}function ki(t,e){return fv(ve(),t.writeTree_,e)}function fv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=fv(Xe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Xe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t,e){return vv(e,t)}function Rk(t,e,n,s,i){D(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ar(t.visibleWrites,e,n)),t.lastWriteId=s}function Ak(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function kk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Nk(a,s.path)?i=!1:Gt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return xk(t),!0;if(s.snap)t.visibleWrites=Jp(t.visibleWrites,s.path);else{const a=s.children;Vt(a,c=>{t.visibleWrites=Jp(t.visibleWrites,Xe(s.path,c))})}return!0}else return!1}function Nk(t,e){if(t.snap)return Gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Gt(Xe(t.path,n),e))return!0;return!1}function xk(t){t.visibleWrites=gv(t.allWrites,Ok,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ok(t){return t.visible}function gv(t,e,n){let s=Jt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Gt(n,o)?(a=Ft(n,o),s=Ar(s,a,r.snap)):Gt(o,n)&&(a=Ft(o,n),s=Ar(s,ve(),r.snap.getChild(a)));else if(r.children){if(Gt(n,o))a=Ft(n,o),s=Xp(s,a,r.children);else if(Gt(o,n))if(a=Ft(o,n),re(a))s=Xp(s,ve(),r.children);else{const c=Si(r.children,ae(a));if(c){const l=c.getChild(Re(a));s=Ar(s,ve(),l)}}}else throw qi("WriteRecord should have .snap or .children")}}return s}function mv(t,e,n,s,i){if(!s&&!i){const r=Gs(t.visibleWrites,e);if(r!=null)return r;{const o=ss(t.visibleWrites,e);if(ku(o))return n;if(n==null&&!Au(o,ve()))return null;{const a=n||ge.EMPTY_NODE;return ki(o,a)}}}else{const r=ss(t.visibleWrites,e);if(!i&&ku(r))return n;if(!i&&n==null&&!Au(r,ve()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(Gt(l.path,e)||Gt(e,l.path))},a=gv(t.allWrites,o,e),c=n||ge.EMPTY_NODE;return ki(a,c)}}}function Dk(t,e,n){let s=ge.EMPTY_NODE;const i=Gs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ht,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ss(t.visibleWrites,e);return n.forEachChild(ht,(o,a)=>{const c=ki(ss(r,new Ne(o)),a);s=s.updateImmediateChild(o,c)}),Zp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ss(t.visibleWrites,e);return Zp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Pk(t,e,n,s,i){D(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Xe(e,n);if(Au(t.visibleWrites,r))return null;{const o=ss(t.visibleWrites,r);return ku(o)?i.getChild(n):ki(o,i.getChild(n))}}function Mk(t,e,n,s){const i=Xe(e,n),r=Gs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ss(t.visibleWrites,i);return ki(o,s.getNode().getImmediateChild(n))}else return null}function Lk(t,e){return Gs(t.visibleWrites,e)}function Fk(t,e,n,s,i,r,o){let a;const c=ss(t.visibleWrites,e),l=Gs(c,ve());if(l!=null)a=l;else if(n!=null)a=ki(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Uk(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function Nu(t,e,n,s){return mv(t.writeTree,t.treePath,e,n,s)}function _v(t,e){return Dk(t.writeTree,t.treePath,e)}function eg(t,e,n,s){return Pk(t.writeTree,t.treePath,e,n,s)}function Fa(t,e){return Lk(t.writeTree,Xe(t.treePath,e))}function $k(t,e,n,s,i,r){return Fk(t.writeTree,t.treePath,e,n,s,i,r)}function ed(t,e,n){return Mk(t.writeTree,t.treePath,e,n)}function yv(t,e){return vv(Xe(t.treePath,e),t.writeTree)}function vv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,zp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,gk(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,pk(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,zp(s,e.snapshotNode,i.oldSnap));else throw qi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const wv=new Bk;class td{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Zh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ed(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:js(this.viewCache_),r=$k(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function jk(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qk(t,e,n,s,i){const r=new Vk;let o,a;if(n.type===dn.OVERWRITE){const l=n;l.source.fromUser?o=xu(t,e,l.path,l.snap,s,i,r):(D(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!re(l.path),o=Ua(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===dn.MERGE){const l=n;l.source.fromUser?o=Wk(t,e,l.path,l.children,s,i,r):(D(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Ou(t,e,l.path,l.children,s,i,a,r))}else if(n.type===dn.ACK_USER_WRITE){const l=n;l.revert?o=Gk(t,e,l.path,s,i,r):o=Kk(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===dn.LISTEN_COMPLETE)o=zk(t,e,n.path,s,r);else throw qi("Unknown operation type: "+n.type);const c=r.getChanges();return Hk(e,o,c),{viewCache:o,changes:c}}function Hk(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ru(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(fk(Ru(e)))}}function Ev(t,e,n,s,i,r){const o=e.eventCache;if(Fa(s,n)!=null)return e;{let a,c;if(re(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=js(e),u=l instanceof ge?l:ge.EMPTY_NODE,h=_v(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Nu(s,js(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=ae(n);if(l===".priority"){D(os(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=eg(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Re(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=eg(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=ed(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return Rr(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function Ua(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(re(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),f,null)}else{const f=ae(n);if(!c.isCompleteForPath(n)&&os(n)>1)return e;const m=Re(n),v=c.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?l=u.updatePriority(c.getNode(),v):l=u.updateChild(c.getNode(),f,v,m,wv,null)}const h=dv(e,l,c.isFullyInitialized()||re(n),u.filtersNodes()),d=new td(i,h,r);return Ev(t,h,n,i,d,a)}function xu(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new td(i,e,r);if(re(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Rr(e,l,!0,t.filter.filtersNodes());else{const h=ae(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=Rr(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=Re(n),f=a.getNode().getImmediateChild(h);let m;if(re(d))m=s;else{const _=u.getCompleteChild(h);_!=null?Xy(d)===".priority"&&_.getChild(Zy(d)).isEmpty()?m=_:m=_.updateChild(d,s):m=ge.EMPTY_NODE}if(f.equals(m))c=e;else{const _=t.filter.updateChild(a.getNode(),h,m,d,u,o);c=Rr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function tg(t,e){return t.eventCache.isCompleteForChild(e)}function Wk(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=Xe(n,c);tg(e,ae(u))&&(a=xu(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=Xe(n,c);tg(e,ae(u))||(a=xu(t,a,u,l,i,r,o))}),a}function ng(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ou(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;re(n)?l=s:l=new Ce(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=ng(t,f,d);c=Ua(t,c,new Ne(h),m,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),_=ng(t,m,d);c=Ua(t,c,new Ne(h),_,i,r,o,a)}}),c}function Kk(t,e,n,s,i,r,o){if(Fa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(re(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ua(t,e,n,c.getNode().getChild(n),i,r,a,o);if(re(n)){let l=new Ce(null);return c.getNode().forEachChild(yi,(u,h)=>{l=l.set(new Ne(u),h)}),Ou(t,e,n,l,i,r,a,o)}else return e}else{let l=new Ce(null);return s.foreach((u,h)=>{const d=Xe(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Ou(t,e,n,l,i,r,a,o)}}function zk(t,e,n,s,i){const r=e.serverCache,o=dv(e,r.getNode(),r.isFullyInitialized()||re(n),r.isFiltered());return Ev(t,o,n,s,wv,i)}function Gk(t,e,n,s,i,r){let o;if(Fa(s,n)!=null)return e;{const a=new td(s,e,i),c=e.eventCache.getNode();let l;if(re(n)||ae(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Nu(s,js(e));else{const h=e.serverCache.getNode();D(h instanceof ge,"serverChildren would be complete if leaf node"),u=_v(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=ae(n);let h=ed(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Re(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,ge.EMPTY_NODE,Re(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Nu(s,js(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Fa(s,ve())!=null,Rr(e,l,o,t.filter.filtersNodes())}}function Qk(t,e){const n=js(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function sg(t,e,n,s){e.type===dn.MERGE&&e.source.queryId!==null&&(D(js(t.viewCache_),"We should always have a full cache before handling merges"),D(Ru(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=qk(t.processor_,i,e,n,s);return jk(t.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Yk(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Yk(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ik(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ig;function Xk(t){D(!ig,"__referenceConstructor has already been defined"),ig=t}function nd(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return D(r!=null,"SyncTree gave us an op for an invalid query."),sg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(sg(o,e,n,s));return r}}function sd(t,e){let n=null;for(const s of t.views.values())n=n||Qk(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rg;function Jk(t){D(!rg,"__referenceConstructor has already been defined"),rg=t}class og{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=Uk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zk(t,e,n,s,i){return Rk(t.pendingWriteTree_,e,n,s,i),i?kc(t,new Bs(cv(),e,n)):[]}function li(t,e,n=!1){const s=Ak(t.pendingWriteTree_,e);if(kk(t.pendingWriteTree_,e)){let r=new Ce(null);return s.snap!=null?r=r.set(ve(),!0):Vt(s.children,o=>{r=r.set(new Ne(o),!0)}),kc(t,new La(s.path,r,n))}else return[]}function Ac(t,e,n){return kc(t,new Bs(lv(),e,n))}function eN(t,e,n){const s=Ce.fromObject(n);return kc(t,new Xr(lv(),e,s))}function tN(t,e,n,s){const i=Cv(t,s);if(i!=null){const r=Sv(i),o=r.path,a=r.queryId,c=Ft(o,e),l=new Bs(uv(a),c,n);return Rv(t,o,l)}else return[]}function nN(t,e,n,s){const i=Cv(t,s);if(i){const r=Sv(i),o=r.path,a=r.queryId,c=Ft(o,e),l=Ce.fromObject(n),u=new Xr(uv(a),c,l);return Rv(t,o,u)}else return[]}function Tv(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ft(o,e),l=sd(a,c);if(l)return l});return mv(i,e,r,n,!0)}function kc(t,e){return Iv(e,t.syncPointTree_,null,pv(t.pendingWriteTree_,ve()))}function Iv(t,e,n,s){if(re(t.path))return bv(t,e,n,s);{const i=e.get(ve());n==null&&i!=null&&(n=sd(i,ve()));let r=[];const o=ae(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=yv(s,o);r=r.concat(Iv(a,c,l,u))}return i&&(r=r.concat(nd(i,t,s,n))),r}}function bv(t,e,n,s){const i=e.get(ve());n==null&&i!=null&&(n=sd(i,ve()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=yv(s,o),u=t.operationForChild(o);u&&(r=r.concat(bv(u,a,c,l)))}),i&&(r=r.concat(nd(i,t,s,n))),r}function Cv(t,e){return t.tagToQueryMap.get(e)}function Sv(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ne(t.substr(0,e))}}function Rv(t,e,n){const s=t.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const i=pv(t.pendingWriteTree_,e);return nd(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new id(n)}node(){return this.node_}}class rd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new rd(this.syncTree_,n)}node(){return Tv(this.syncTree_,this.path_)}}const sN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ag=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return iN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return rN(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},iN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},rN=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},oN=function(t,e,n,s){return od(e,new rd(n,t),s)},aN=function(t,e,n){return od(t,new id(e),n)};function od(t,e,n){const s=t.getPriority().val(),i=ag(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ag(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ge(a,at(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ge(i))),o.forEachChild(ht,(a,c)=>{const l=od(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function cd(t,e){let n=e instanceof Ne?e:new Ne(e),s=t,i=ae(n);for(;i!==null;){const r=Si(s.node.children,i)||{children:{},childCount:0};s=new ad(i,s,r),n=Re(n),i=ae(n)}return s}function Qi(t){return t.node.value}function Av(t,e){t.node.value=e,Du(t)}function kv(t){return t.node.childCount>0}function cN(t){return Qi(t)===void 0&&!kv(t)}function Nc(t,e){Vt(t.node.children,(n,s)=>{e(new ad(n,t,s))})}function Nv(t,e,n,s){n&&!s&&e(t),Nc(t,i=>{Nv(i,e,!0,s)}),n&&s&&e(t)}function lN(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function wo(t){return new Ne(t.parent===null?t.name:wo(t.parent)+"/"+t.name)}function Du(t){t.parent!==null&&uN(t.parent,t.name,t)}function uN(t,e,n){const s=cN(n),i=Vn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Du(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Du(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=/[\[\].#$\/\u0000-\u001F\u007F]/,dN=/[\[\].#$\u0000-\u001F\u007F]/,Dl=10*1024*1024,xv=function(t){return typeof t=="string"&&t.length!==0&&!hN.test(t)},fN=function(t){return typeof t=="string"&&t.length!==0&&!dN.test(t)},pN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fN(t)},Ov=function(t,e,n){const s=n instanceof Ne?new zA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Es(s));if(typeof e=="function")throw new Error(t+"contains a function "+Es(s)+" with contents = "+e.toString());if(xy(e))throw new Error(t+"contains "+e.toString()+" "+Es(s));if(typeof e=="string"&&e.length>Dl/3&&vc(e)>Dl)throw new Error(t+"contains a string greater than "+Dl+" utf8 bytes "+Es(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Vt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!xv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Es(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);GA(s,o),Ov(t,a,s),QA(s)}),i&&r)throw new Error(t+' contains ".value" child '+Es(s)+" in addition to actual children.")}},gN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!pN(n))throw new Error(fb(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _N(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!ev(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Qs(t,e,n){_N(t,n),yN(t,s=>Gt(s,e)||Gt(e,s))}function yN(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(vN(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function vN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Os&&ot("event: "+n.toString()),yo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN="repo_interrupt",EN=25;class TN{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ma(),this.transactionQueueTree_=new ad,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function IN(t,e,n){if(t.stats_=Gh(t.repoInfo_),t.forceRestClient_||_A())t.server_=new Pa(t.repoInfo_,(s,i,r,o)=>{cg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>lg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Nn(t.repoInfo_,e,(s,i,r,o)=>{cg(t,s,i,r,o)},s=>{lg(t,s)},s=>{CN(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=IA(t.repoInfo_,()=>new Tk(t.stats_,t.server_)),t.infoData_=new _k,t.infoSyncTree_=new og({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Ac(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ld(t,"connected",!1),t.serverSyncTree_=new og({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Qs(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function bN(t){const n=t.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Dv(t){return sN({timestamp:bN(t)})}function cg(t,e,n,s,i){t.dataUpdateCount++;const r=new Ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ia(n,l=>at(l));o=nN(t.serverSyncTree_,r,c,i)}else{const c=at(n);o=tN(t.serverSyncTree_,r,c,i)}else if(s){const c=Ia(n,l=>at(l));o=eN(t.serverSyncTree_,r,c)}else{const c=at(n);o=Ac(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=hd(t,r)),Qs(t.eventQueue_,a,o)}function lg(t,e){ld(t,"connected",e),e===!1&&RN(t)}function CN(t,e){Vt(e,(n,s)=>{ld(t,n,s)})}function ld(t,e,n){const s=new Ne("/.info/"+e),i=at(n);t.infoData_.updateSnapshot(s,i);const r=Ac(t.infoSyncTree_,s,i);Qs(t.eventQueue_,s,r)}function SN(t){return t.nextWriteId_++}function RN(t){Pv(t,"onDisconnectEvents");const e=Dv(t),n=Ma();Su(t.onDisconnect_,ve(),(i,r)=>{const o=oN(i,r,t.serverSyncTree_,e);av(n,i,o)});let s=[];Su(n,ve(),(i,r)=>{s=s.concat(Ac(t.serverSyncTree_,i,r));const o=xN(t,i);hd(t,o)}),t.onDisconnect_=Ma(),Qs(t.eventQueue_,ve(),s)}function AN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(wN)}function Pv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function Mv(t,e,n){return Tv(t.serverSyncTree_,e,n)||ge.EMPTY_NODE}function ud(t,e=t.transactionQueueTree_){if(e||xc(t,e),Qi(e)){const n=Fv(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&kN(t,wo(e),n)}else kv(e)&&Nc(e,n=>{ud(t,n)})}function kN(t,e,n){const s=n.map(l=>l.currentWriteId),i=Mv(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ft(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{Pv(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(li(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();xc(t,cd(t.transactionQueueTree_,e)),ud(t,t.transactionQueueTree_),Qs(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)yo(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Dt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}hd(t,e)}},o)}function hd(t,e){const n=Lv(t,e),s=wo(n),i=Fv(t,n);return NN(t,i,s),s}function NN(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Ft(n,c.path);let u=!1,h;if(D(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(li(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=EN)u=!0,h="maxretry",i=i.concat(li(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Mv(t,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Ov("transaction failed: Data returned ",f,c.path);let m=at(f);typeof f=="object"&&f!=null&&Vn(f,".priority")||(m=m.updatePriority(d.getPriority()));const v=c.currentWriteId,b=Dv(t),N=aN(m,d,b);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=N,c.currentWriteId=SN(t),o.splice(o.indexOf(v),1),i=i.concat(Zk(t.serverSyncTree_,c.path,N,c.currentWriteId,c.applyLocally)),i=i.concat(li(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(li(t.serverSyncTree_,c.currentWriteId,!0))}Qs(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}xc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)yo(s[a]);ud(t,t.transactionQueueTree_)}function Lv(t,e){let n,s=t.transactionQueueTree_;for(n=ae(e);n!==null&&Qi(s)===void 0;)s=cd(s,n),e=Re(e),n=ae(e);return s}function Fv(t,e){const n=[];return Uv(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Uv(t,e,n){const s=Qi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Nc(e,i=>{Uv(t,i,n)})}function xc(t,e){const n=Qi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Av(e,n.length>0?n:void 0)}Nc(e,s=>{xc(t,s)})}function xN(t,e){const n=wo(Lv(t,e)),s=cd(t.transactionQueueTree_,e);return lN(s,i=>{Pl(t,i)}),Pl(t,s),Nv(s,i=>{Pl(t,i)}),n}function Pl(t,e){const n=Qi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(li(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Av(e,void 0):n.length=r+1,Qs(t.eventQueue_,wo(e),i);for(let o=0;o<s.length;o++)yo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function DN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const ug=function(t,e){const n=PN(t),s=n.namespace;n.domain==="firebase.com"&&$s(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&$s("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lA();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new wA(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ne(n.pathString)}},PN=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=ON(t.substring(u,h)));const d=DN(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return re(this._path)?null:Xy(this._path)}get ref(){return new Yi(this._repo,this._path)}get _queryIdentifier(){const e=Qp(this._queryParams),n=Kh(e);return n==="{}"?"default":n}get _queryObject(){return Qp(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof dd))return!1;const n=this._repo===e._repo,s=ev(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+KA(this._path)}}class Yi extends dd{constructor(e,n){super(e,n,new Jh,!1)}get parent(){const e=Zy(this._path);return e===null?null:new Yi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Xk(Yi);Jk(Yi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN="FIREBASE_DATABASE_EMULATOR_HOST",Pu={};let LN=!1;function FN(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||$s("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ug(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[MN]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=ug(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Iu(Iu.OWNER):new vA(t.name,t.options,e);gN("Invalid Firebase Database URL",o),re(o.path)||$s("Database URL must point to the root of a Firebase Database (not including a child path).");const h=$N(a,t,u,new yA(t.name,n));return new VN(h,t)}function UN(t,e){const n=Pu[e];(!n||n[t.key]!==t)&&$s(`Database ${e}(${t.repoInfo_}) has already been deleted.`),AN(t),delete n[t.key]}function $N(t,e,n,s){let i=Pu[e.name];i||(i={},Pu[e.name]=i);let r=i[t.toURLString()];return r&&$s("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new TN(t,LN,n,s),i[t.toURLString()]=r,r}class VN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(IN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yi(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(UN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$s("Cannot call "+e+" on a deleted database.")}}/**
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
 */function BN(t){iA(Ks),_n(new en("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return FN(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ot(xp,Op,t),Ot(xp,Op,"esm2017")}Nn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};BN();var jN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,fd=fd||{},Q=jN||self;function $a(){}function Oc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Eo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function qN(t){return Object.prototype.hasOwnProperty.call(t,Ml)&&t[Ml]||(t[Ml]=++HN)}var Ml="closure_uid_"+(1e9*Math.random()>>>0),HN=0;function WN(t,e,n){return t.call.apply(t.bind,arguments)}function KN(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=WN:dt=KN,dt.apply(null,arguments)}function Yo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function it(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function hs(){this.s=this.s,this.o=this.o}var zN=0;hs.prototype.s=!1;hs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zN!=0)&&qN(this)};hs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $v=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pd(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function hg(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Oc(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var GN=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",$a,e),Q.removeEventListener("test",$a,e)}catch{}return t}();function Va(t){return/^[\s\xa0]*$/.test(t)}var dg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ll(t,e){return t<e?-1:t>e?1:0}function Dc(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function un(t){return Dc().indexOf(t)!=-1}function gd(t){return gd[" "](t),t}gd[" "]=$a;function QN(t){var e=JN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var YN=un("Opera"),Ni=un("Trident")||un("MSIE"),Vv=un("Edge"),Mu=Vv||Ni,Bv=un("Gecko")&&!(Dc().toLowerCase().indexOf("webkit")!=-1&&!un("Edge"))&&!(un("Trident")||un("MSIE"))&&!un("Edge"),XN=Dc().toLowerCase().indexOf("webkit")!=-1&&!un("Edge");function jv(){var t=Q.document;return t?t.documentMode:void 0}var Ba;e:{var Fl="",Ul=function(){var t=Dc();if(Bv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Vv)return/Edge\/([\d\.]+)/.exec(t);if(Ni)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(XN)return/WebKit\/(\S+)/.exec(t);if(YN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ul&&(Fl=Ul?Ul[1]:""),Ni){var $l=jv();if($l!=null&&$l>parseFloat(Fl)){Ba=String($l);break e}}Ba=Fl}var JN={};function ZN(){return QN(function(){let t=0;const e=dg(String(Ba)).split("."),n=dg("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ll(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ll(i[2].length==0,r[2].length==0)||Ll(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Lu;if(Q.document&&Ni){var fg=jv();Lu=fg||parseInt(Ba,10)||void 0}else Lu=void 0;var e1=Lu;function Jr(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Bv){e:{try{gd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:t1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jr.X.h.call(this)}}it(Jr,ft);var t1={2:"touch",3:"pen",4:"mouse"};Jr.prototype.h=function(){Jr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var To="closure_listenable_"+(1e6*Math.random()|0),n1=0;function s1(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++n1,this.ba=this.ea=!1}function Pc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function md(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function qv(t){const e={};for(const n in t)e[n]=t[n];return e}const pg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hv(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<pg.length;r++)n=pg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Mc(t){this.src=t,this.g={},this.h=0}Mc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Uu(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new s1(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Fu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=$v(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Pc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Uu(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var _d="closure_lm_"+(1e6*Math.random()|0),Vl={};function Wv(t,e,n,s,i){if(s&&s.once)return zv(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Wv(t,e[r],n,s,i);return null}return n=wd(n),t&&t[To]?t.N(e,n,Eo(s)?!!s.capture:!!s,i):Kv(t,e,n,!1,s,i)}function Kv(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Eo(i)?!!i.capture:!!i,a=vd(t);if(a||(t[_d]=a=new Mc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=i1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)GN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Qv(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function i1(){function t(n){return e.call(t.src,t.listener,n)}const e=r1;return t}function zv(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)zv(t,e[r],n,s,i);return null}return n=wd(n),t&&t[To]?t.O(e,n,Eo(s)?!!s.capture:!!s,i):Kv(t,e,n,!0,s,i)}function Gv(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Gv(t,e[r],n,s,i);else s=Eo(s)?!!s.capture:!!s,n=wd(n),t&&t[To]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Uu(r,n,s,i),-1<n&&(Pc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=vd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Uu(e,n,s,i)),(n=-1<t?e[t]:null)&&yd(n))}function yd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[To])Fu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Qv(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=vd(e))?(Fu(n,t),n.h==0&&(n.src=null,e[_d]=null)):Pc(t)}}}function Qv(t){return t in Vl?Vl[t]:Vl[t]="on"+t}function r1(t,e){if(t.ba)t=!0;else{e=new Jr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&yd(t),t=n.call(s,e)}return t}function vd(t){return t=t[_d],t instanceof Mc?t:null}var Bl="__closure_events_fn_"+(1e9*Math.random()>>>0);function wd(t){return typeof t=="function"?t:(t[Bl]||(t[Bl]=function(e){return t.handleEvent(e)}),t[Bl])}function Je(){hs.call(this),this.i=new Mc(this),this.P=this,this.I=null}it(Je,hs);Je.prototype[To]=!0;Je.prototype.removeEventListener=function(t,e,n,s){Gv(this,t,e,n,s)};function st(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var i=e;e=new ft(s,t),Hv(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Xo(o,s,!0,e)&&i}if(o=e.g=t,i=Xo(o,s,!0,e)&&i,i=Xo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Xo(o,s,!1,e)&&i}Je.prototype.M=function(){if(Je.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Pc(n[s]);delete t.g[e],t.h--}}this.I=null};Je.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Xo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Fu(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ed=Q.JSON.stringify;function o1(){var t=Jv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class a1{constructor(){this.h=this.g=null}add(e,n){const s=Yv.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Yv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new c1,t=>t.reset());class c1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function l1(t){Q.setTimeout(()=>{throw t},0)}function Xv(t,e){$u||u1(),Vu||($u(),Vu=!0),Jv.add(t,e)}var $u;function u1(){var t=Q.Promise.resolve(void 0);$u=function(){t.then(h1)}}var Vu=!1,Jv=new a1;function h1(){for(var t;t=o1();){try{t.h.call(t.g)}catch(n){l1(n)}var e=Yv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vu=!1}function Lc(t,e){Je.call(this),this.h=t||1,this.g=e||Q,this.j=dt(this.lb,this),this.l=Date.now()}it(Lc,Je);V=Lc.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),st(this,"tick"),this.ca&&(Td(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Td(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){Lc.X.M.call(this),Td(this),delete this.g};function Id(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function Zv(t){t.g=Id(()=>{t.g=null,t.i&&(t.i=!1,Zv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class d1 extends hs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Zv(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(t){hs.call(this),this.h=t,this.g={}}it(Zr,hs);var gg=[];function ew(t,e,n,s){Array.isArray(n)||(n&&(gg[0]=n.toString()),n=gg);for(var i=0;i<n.length;i++){var r=Wv(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function tw(t){md(t.g,function(e,n){this.g.hasOwnProperty(n)&&yd(e)},t),t.g={}}Zr.prototype.M=function(){Zr.X.M.call(this),tw(this)};Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fc(){this.g=!0}Fc.prototype.Aa=function(){this.g=!1};function f1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function p1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ui(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+m1(t,n)+(s?" "+s:"")})}function g1(t,e){t.info(function(){return"TIMEOUT: "+e})}Fc.prototype.info=function(){};function m1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ed(n)}catch{return e}}var Ys={},mg=null;function Uc(){return mg=mg||new Je}Ys.Pa="serverreachability";function nw(t){ft.call(this,Ys.Pa,t)}it(nw,ft);function eo(t){const e=Uc();st(e,new nw(e))}Ys.STAT_EVENT="statevent";function sw(t,e){ft.call(this,Ys.STAT_EVENT,t),this.stat=e}it(sw,ft);function _t(t){const e=Uc();st(e,new sw(e,t))}Ys.Qa="timingevent";function iw(t,e){ft.call(this,Ys.Qa,t),this.size=e}it(iw,ft);function Io(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var $c={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},rw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function bd(){}bd.prototype.h=null;function _g(t){return t.h||(t.h=t.i())}function ow(){}var bo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Cd(){ft.call(this,"d")}it(Cd,ft);function Sd(){ft.call(this,"c")}it(Sd,ft);var Bu;function Vc(){}it(Vc,bd);Vc.prototype.g=function(){return new XMLHttpRequest};Vc.prototype.i=function(){return{}};Bu=new Vc;function Co(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Zr(this),this.O=_1,t=Mu?125:void 0,this.T=new Lc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new aw}function aw(){this.i=null,this.g="",this.h=!1}var _1=45e3,ju={},ja={};V=Co.prototype;V.setTimeout=function(t){this.O=t};function qu(t,e,n){t.K=1,t.v=jc(Mn(e)),t.s=n,t.P=!0,cw(t,null)}function cw(t,e){t.F=Date.now(),So(t),t.A=Mn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),mw(n.i,"t",s),t.C=0,n=t.l.H,t.h=new aw,t.g=Fw(t.l,n?e:null,!t.s),0<t.N&&(t.L=new d1(dt(t.La,t,t.g),t.N)),ew(t.S,t.g,"readystatechange",t.ib),e=t.H?qv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),eo(),f1(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&kn(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const u=kn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Mu||this.g&&(this.h.h||this.g.fa()||Eg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?eo(3):eo(2)),Bc(this);var n=this.g.aa();this.Y=n;t:if(lw(this)){var s=Eg(this.g);t="";var i=s.length,r=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ss(this),kr(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,p1(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Va(a)){var l=a;break t}}l=null}if(n=l)ui(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hu(this,n);else{this.i=!1,this.o=3,_t(12),Ss(this),kr(this);break e}}this.P?(uw(this,u,o),Mu&&this.i&&u==3&&(ew(this.S,this.T,"tick",this.hb),this.T.start())):(ui(this.j,this.m,o,null),Hu(this,o)),u==4&&Ss(this),this.i&&!this.I&&(u==4?Dw(this.l,this):(this.i=!1,So(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_t(12)):(this.o=0,_t(13)),Ss(this),kr(this)}}}catch{}finally{}};function lw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function uw(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=y1(t,n),i==ja){e==4&&(t.o=4,_t(14),s=!1),ui(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ju){t.o=4,_t(15),ui(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ui(t.j,t.m,i,null),Hu(t,i);lw(t)&&i!=ja&&i!=ju&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_t(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dd(e),e.K=!0,_t(11))):(ui(t.j,t.m,n,"[Invalid Chunked Response]"),Ss(t),kr(t))}V.hb=function(){if(this.g){var t=kn(this.g),e=this.g.fa();this.C<e.length&&(Bc(this),uw(this,t,e),this.i&&t!=4&&So(this))}};function y1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ja:(n=Number(e.substring(n,s)),isNaN(n)?ju:(s+=1,s+n>e.length?ja:(e=e.substr(s,n),t.C=s+n,e)))}V.cancel=function(){this.I=!0,Ss(this)};function So(t){t.V=Date.now()+t.O,hw(t,t.O)}function hw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Io(dt(t.gb,t),e)}function Bc(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(g1(this.j,this.A),this.K!=2&&(eo(),_t(17)),Ss(this),this.o=2,kr(this)):hw(this,this.V-t)};function kr(t){t.l.G==0||t.I||Dw(t.l,t)}function Ss(t){Bc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Td(t.T),tw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Hu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Wu(n.h,t))){if(!t.J&&Wu(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Wa(n),Wc(n);else break e;Od(n),_t(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Io(dt(n.cb,n),6e3));if(1>=vw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Rs(n,11)}else if((t.J||n.g==t)&&Wa(n),!Va(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Rd(r,r.h),r.h=null))}if(s.D){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Oe(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Lw(s,s.H?s.ka:null,s.V),o.J){ww(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Bc(a),So(a)),s.g=o}else xw(s);0<n.i.length&&Kc(n)}else l[0]!="stop"&&l[0]!="close"||Rs(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Rs(n,7):xd(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}eo(4)}catch{}}function v1(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Oc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function w1(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Oc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function dw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Oc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=w1(t),s=v1(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var fw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function E1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ds(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ds){this.h=e!==void 0?e:t.h,qa(this,t.j),this.s=t.s,this.g=t.g,Ha(this,t.m),this.l=t.l,e=t.i;var n=new to;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yg(this,n),this.o=t.o}else t&&(n=String(t).match(fw))?(this.h=!!e,qa(this,n[1]||"",!0),this.s=yr(n[2]||""),this.g=yr(n[3]||"",!0),Ha(this,n[4]),this.l=yr(n[5]||"",!0),yg(this,n[6]||"",!0),this.o=yr(n[7]||"")):(this.h=!!e,this.i=new to(null,this.h))}Ds.prototype.toString=function(){var t=[],e=this.j;e&&t.push(vr(e,vg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(vr(e,vg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(vr(n,n.charAt(0)=="/"?b1:I1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",vr(n,S1)),t.join("")};function Mn(t){return new Ds(t)}function qa(t,e,n){t.j=n?yr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ha(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yg(t,e,n){e instanceof to?(t.i=e,R1(t.i,t.h)):(n||(e=vr(e,C1)),t.i=new to(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function jc(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,T1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function T1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vg=/[#\/\?@]/g,I1=/[#\?:]/g,b1=/[#\?]/g,C1=/[#\?@]/g,S1=/#/g;function to(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ds(t){t.g||(t.g=new Map,t.h=0,t.i&&E1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=to.prototype;V.add=function(t,e){ds(this),this.i=null,t=Xi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function pw(t,e){ds(t),e=Xi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function gw(t,e){return ds(t),e=Xi(t,e),t.g.has(e)}V.forEach=function(t,e){ds(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};V.oa=function(){ds(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};V.W=function(t){ds(this);let e=[];if(typeof t=="string")gw(this,t)&&(e=e.concat(this.g.get(Xi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return ds(this),this.i=null,t=Xi(this,t),gw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function mw(t,e,n){pw(t,e),0<n.length&&(t.i=null,t.g.set(Xi(t,e),pd(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Xi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function R1(t,e){e&&!t.j&&(ds(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(pw(this,s),mw(this,i,n))},t)),t.j=e}var A1=class{constructor(e,n){this.h=e,this.g=n}};function _w(t){this.l=t||k1,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var k1=10;function yw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function vw(t){return t.h?1:t.g?t.g.size:0}function Wu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rd(t,e){t.g?t.g.add(e):t.h=e}function ww(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_w.prototype.cancel=function(){if(this.i=Ew(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ew(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return pd(t.i)}function Ad(){}Ad.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};Ad.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function N1(){this.g=new Ad}function x1(t,e,n){const s=n||"";try{dw(t,function(i,r){let o=i;Eo(i)&&(o=Ed(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function O1(t,e){const n=new Fc;if(Q.Image){const s=new Image;s.onload=Yo(Jo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Yo(Jo,n,s,"TestLoadImage: error",!1,e),s.onabort=Yo(Jo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Yo(Jo,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Jo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ro(t){this.l=t.ac||null,this.j=t.jb||!1}it(Ro,bd);Ro.prototype.g=function(){return new qc(this.l,this.j)};Ro.prototype.i=function(t){return function(){return t}}({});function qc(t,e){Je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=kd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(qc,Je);var kd=0;V=qc.prototype;V.open=function(t,e){if(this.readyState!=kd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,no(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ao(this)),this.readyState=kd};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,no(this)),this.g&&(this.readyState=3,no(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tw(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Tw(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ao(this):no(this),this.readyState==3&&Tw(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,Ao(this))};V.Ua=function(t){this.g&&(this.response=t,Ao(this))};V.ga=function(){this.g&&Ao(this)};function Ao(t){t.readyState=4,t.l=null,t.j=null,t.A=null,no(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function no(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var D1=Q.JSON.parse;function Le(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Iw,this.K=this.L=!1}it(Le,Je);var Iw="",P1=/^https?$/i,M1=["POST","PUT"];V=Le.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Bu.g(),this.C=this.u?_g(this.u):_g(Bu),this.g.onreadystatechange=dt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){wg(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=$v(M1,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Sw(this),0<this.B&&((this.K=L1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.qa,this)):this.A=Id(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){wg(this,r)}};function L1(t){return Ni&&ZN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof fd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function wg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bw(t),Hc(t)}function bw(t){t.D||(t.D=!0,st(t,"complete"),st(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),Hc(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hc(this,!0)),Le.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?Cw(this):this.fb())};V.fb=function(){Cw(this)};function Cw(t){if(t.h&&typeof fd<"u"&&(!t.C[1]||kn(t)!=4||t.aa()!=2)){if(t.v&&kn(t)==4)Id(t.Ha,0,t);else if(st(t,"readystatechange"),kn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(fw)[1]||null;if(!i&&Q.self&&Q.self.location){var r=Q.self.location.protocol;i=r.substr(0,r.length-1)}s=!P1.test(i?i.toLowerCase():"")}n=s}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var o=2<kn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",bw(t)}}finally{Hc(t)}}}}function Hc(t,e){if(t.g){Sw(t);const n=t.g,s=t.C[0]?$a:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=s}catch{}}}function Sw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function kn(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),D1(e)}};function Eg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Iw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rw(t){let e="";return md(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Nd(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Rw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function hr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Aw(t){this.Ca=0,this.i=[],this.j=new Fc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=hr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=hr("baseRetryDelayMs",5e3,t),this.bb=hr("retryDelaySeedMs",1e4,t),this.$a=hr("forwardChannelMaxRetries",2,t),this.ta=hr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new _w(t&&t.concurrentRequestLimit),this.Fa=new N1,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=Aw.prototype;V.ma=8;V.G=1;function xd(t){if(kw(t),t.G==3){var e=t.U++,n=Mn(t.F);Oe(n,"SID",t.I),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),ko(t,n),e=new Co(t,t.j,e,void 0),e.K=2,e.v=jc(Mn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Fw(e.l,null),e.g.da(e.v)),e.F=Date.now(),So(e)}Mw(t)}function Wc(t){t.g&&(Dd(t),t.g.cancel(),t.g=null)}function kw(t){Wc(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Wa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Kc(t){yw(t.h)||t.m||(t.m=!0,Xv(t.Ja,t),t.C=0)}function F1(t,e){return vw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Io(dt(t.Ja,t,e),Pw(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Co(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=qv(r),Hv(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Nw(this,i,e),n=Mn(this.F),Oe(n,"RID",t),Oe(n,"CVER",22),this.D&&Oe(n,"X-HTTP-Session-Id",this.D),ko(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Rw(r)))+"&"+e:this.o&&Nd(n,this.o,r)),Rd(this.h,i),this.Ya&&Oe(n,"TYPE","init"),this.O?(Oe(n,"$req",e),Oe(n,"SID","null"),i.Z=!0,qu(i,n,null)):qu(i,n,e),this.G=2}}else this.G==3&&(t?Tg(this,t):this.i.length==0||yw(this.h)||Tg(this))};function Tg(t,e){var n;e?n=e.m:n=t.U++;const s=Mn(t.F);Oe(s,"SID",t.I),Oe(s,"RID",n),Oe(s,"AID",t.T),ko(t,s),t.o&&t.s&&Nd(s,t.o,t.s),n=new Co(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Nw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Rd(t.h,n),qu(n,s,e)}function ko(t,e){t.ia&&md(t.ia,function(n,s){Oe(e,s,n)}),t.l&&dw({},function(n,s){Oe(e,s,n)})}function Nw(t,e,n){n=Math.min(t.i.length,n);var s=t.l?dt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{x1(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function xw(t){t.g||t.u||(t.Z=1,Xv(t.Ia,t),t.A=0)}function Od(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Io(dt(t.Ia,t),Pw(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,Ow(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Io(dt(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,_t(10),Wc(this),Ow(this))};function Dd(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Ow(t){t.g=new Co(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Mn(t.sa);Oe(e,"RID","rpc"),Oe(e,"SID",t.I),Oe(e,"CI",t.L?"0":"1"),Oe(e,"AID",t.T),Oe(e,"TYPE","xmlhttp"),ko(t,e),t.o&&t.s&&Nd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=jc(Mn(e)),n.s=null,n.P=!0,cw(n,t)}V.cb=function(){this.v!=null&&(this.v=null,Wc(this),Od(this),_t(19))};function Wa(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Dw(t,e){var n=null;if(t.g==e){Wa(t),Dd(t),t.g=null;var s=2}else if(Wu(t.h,e))n=e.D,ww(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Uc(),st(s,new iw(s,n)),Kc(t)}else xw(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&F1(t,e)||s==2&&Od(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Rs(t,5);break;case 4:Rs(t,10);break;case 3:Rs(t,6);break;default:Rs(t,2)}}}function Pw(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Rs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=dt(t.kb,t);n||(n=new Ds("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||qa(n,"https"),jc(n)),O1(n.toString(),s)}else _t(2);t.G=0,t.l&&t.l.va(e),Mw(t),kw(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Mw(t){if(t.G=0,t.la=[],t.l){const e=Ew(t.h);(e.length!=0||t.i.length!=0)&&(hg(t.la,e),hg(t.la,t.i),t.h.i.length=0,pd(t.i),t.i.length=0),t.l.ua()}}function Lw(t,e,n){var s=n instanceof Ds?Mn(n):new Ds(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ha(s,s.m);else{var i=Q.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ds(null,void 0);s&&qa(r,s),e&&(r.g=e),i&&Ha(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Oe(s,n,e),Oe(s,"VER",t.ma),ko(t,s),s}function Fw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Le(new Ro({jb:!0})):new Le(t.ra),e.Ka(t.H),e}function Uw(){}V=Uw.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function Ka(){if(Ni&&!(10<=Number(e1)))throw Error("Environmental error: no available transport.")}Ka.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){Je.call(this),this.g=new Aw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Va(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Va(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ji(this)}it(Pt,Je);Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Lw(t,null,t.V),Kc(t)};Pt.prototype.close=function(){xd(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ed(t),t=n);e.i.push(new A1(e.ab++,t)),e.G==3&&Kc(e)};Pt.prototype.M=function(){this.g.l=null,delete this.j,xd(this.g),delete this.g,Pt.X.M.call(this)};function $w(t){Cd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it($w,Cd);function Vw(){Sd.call(this),this.status=1}it(Vw,Sd);function Ji(t){this.g=t}it(Ji,Uw);Ji.prototype.xa=function(){st(this.g,"a")};Ji.prototype.wa=function(t){st(this.g,new $w(t))};Ji.prototype.va=function(t){st(this.g,new Vw)};Ji.prototype.ua=function(){st(this.g,"b")};Ka.prototype.createWebChannel=Ka.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;$c.NO_ERROR=0;$c.TIMEOUT=8;$c.HTTP_ERROR=6;rw.COMPLETE="complete";ow.EventType=bo;bo.OPEN="a";bo.CLOSE="b";bo.ERROR="c";bo.MESSAGE="d";Je.prototype.listen=Je.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.Oa;Le.prototype.getLastErrorCode=Le.prototype.Ea;Le.prototype.getStatus=Le.prototype.aa;Le.prototype.getResponseJson=Le.prototype.Sa;Le.prototype.getResponseText=Le.prototype.fa;Le.prototype.send=Le.prototype.da;Le.prototype.setWithCredentials=Le.prototype.Ka;var U1=function(){return new Ka},$1=function(){return Uc()},jl=$c,V1=rw,B1=Ys,Ig={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},j1=Ro,Zo=ow,q1=Le;const bg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new ho("@firebase/firestore");function Cg(){return qs.logLevel}function B(t,...e){if(qs.logLevel<=de.DEBUG){const n=e.map(Pd);qs.debug(`Firestore (${Zi}): ${t}`,...n)}}function Ln(t,...e){if(qs.logLevel<=de.ERROR){const n=e.map(Pd);qs.error(`Firestore (${Zi}): ${t}`,...n)}}function Ku(t,...e){if(qs.logLevel<=de.WARN){const n=e.map(Pd);qs.warn(`Firestore (${Zi}): ${t}`,...n)}}function Pd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function Ie(t,e){t||G()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class H1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class W1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class K1{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new xn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ie(typeof s.accessToken=="string"),new Bw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new rt(e)}}class z1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ie(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class G1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new z1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Q1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Y1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.A=n.token,new Q1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=X1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function pe(t,e){return t<e?-1:t>e?1:0}function xi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new He(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new He(0,0))}static max(){return new X(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return so.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof so?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends so{construct(e,n,s){return new Ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const J1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends so{construct(e,n,s){return new ut(e,n,s)}static isValidIdentifier(e){return J1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new U(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new U(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ae.fromString(e))}static fromName(e){return new q(Ae.fromString(e).popFirst(5))}static empty(){return new q(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ae(e.slice()))}}function Z1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(s===1e9?new He(n+1,0):new He(n,s));return new as(i,q.empty(),e)}function ex(t){return new as(t.readTime,t.key,-1)}class as{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new as(X.min(),q.empty(),-1)}static max(){return new as(X.max(),q.empty(),-1)}}function tx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==nx)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(i=>i?S.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new S((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new S((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function xo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Md{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Md.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){return t==null}function za(t){return t===0&&1/t==-1/0}function rx(t){return typeof t=="number"&&Number.isInteger(t)&&!za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const ox=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cs(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=ox.exec(t);if(Ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Oi(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ww(t){const e=t.mapValue.fields.__previous_value__;return Hw(e)?Ww(e):e}function ro(t){const e=cs(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hw(t)?4:ax(t)?9007199254740991:10:G()}function vn(t,e){if(t===e)return!0;const n=Hs(t);if(n!==Hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ro(t).isEqual(ro(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=cs(s.timestampValue),o=cs(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Oi(s.bytesValue).isEqual(Oi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=je(s.doubleValue),o=je(i.doubleValue);return r===o?za(r)===za(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return xi(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Sg(r)!==Sg(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!vn(r[a],o[a])))return!1;return!0}(t,e);default:return G()}}function oo(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=Hs(t),s=Hs(e);if(n!==s)return pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=je(i.integerValue||i.doubleValue),a=je(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Rg(t.timestampValue,e.timestampValue);case 4:return Rg(ro(t),ro(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Oi(i),a=Oi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=pe(o[c],a[c]);if(l!==0)return l}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=pe(je(i.latitude),je(r.latitude));return o!==0?o:pe(je(i.longitude),je(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Di(o[c],a[c]);if(l)return l}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ea.mapValue&&r===ea.mapValue)return 0;if(i===ea.mapValue)return 1;if(r===ea.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=pe(a[u],l[u]);if(h!==0)return h;const d=Di(o[a[u]],c[l[u]]);if(d!==0)return d}return pe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function Rg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=cs(t),s=cs(e),i=pe(n.seconds,s.seconds);return i!==0?i:pe(n.nanos,s.nanos)}function Pi(t){return zu(t)}function zu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=cs(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Oi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=zu(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${zu(s.fields[a])}`;return r+"}"}(t.mapValue):G();var e,n}function Ag(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gu(t){return!!t&&"integerValue"in t}function Ld(t){return!!t&&"arrayValue"in t}function kg(t){return!!t&&"nullValue"in t}function Ng(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function da(t){return!!t&&"mapValue"in t}function Nr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Nr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Nr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ax(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ga{constructor(e,n){this.position=e,this.inclusive=n}}function xg(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=Di(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Og(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Kw{}class qe extends Kw{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new lx(e,n,s):n==="array-contains"?new dx(e,s):n==="in"?new fx(e,s):n==="not-in"?new px(e,s):n==="array-contains-any"?new gx(e,s):new qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ux(e,s):new hx(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Di(n,this.value)):n!==null&&Hs(this.value)===Hs(n)&&this.matchesComparison(Di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class nn extends Kw{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new nn(e,n)}matches(e){return zw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zw(t){return t.op==="and"}function Gw(t){return cx(t)&&zw(t)}function cx(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Qu(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+Pi(t.value);if(Gw(t))return t.filters.map(e=>Qu(e)).join(",");{const e=t.filters.map(n=>Qu(n)).join(",");return`${t.op}(${e})`}}function Qw(t,e){return t instanceof qe?function(n,s){return s instanceof qe&&n.op===s.op&&n.field.isEqual(s.field)&&vn(n.value,s.value)}(t,e):t instanceof nn?function(n,s){return s instanceof nn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Qw(r,s.filters[o]),!0):!1}(t,e):void G()}function Yw(t){return t instanceof qe?function(e){return`${e.field.canonicalString()} ${e.op} ${Pi(e.value)}`}(t):t instanceof nn?function(e){return e.op.toString()+" {"+e.getFilters().map(Yw).join(" ,")+"}"}(t):"Filter"}class lx extends qe{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class ux extends qe{constructor(e,n){super(e,"in",n),this.keys=Xw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hx extends qe{constructor(e,n){super(e,"not-in",n),this.keys=Xw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class dx extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ld(n)&&oo(n.arrayValue,this.value)}}class fx extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oo(this.value.arrayValue,n)}}class px extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!oo(this.value.arrayValue,n)}}class gx extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ld(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>oo(this.value.arrayValue,s))}}/**
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
 */class xr{constructor(e,n="asc"){this.field=e,this.dir=n}}function mx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ta(this.root,e,this.comparator,!0)}}class ta{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ze.RED,this.left=i??Ze.EMPTY,this.right=r??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ze(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dg(this.data.getIterator())}getIteratorFrom(e){return new Dg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Dg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new xt([])}unionWith(e){let n=new We(ut.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!da(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nr(n)}setAll(e){let n=ut.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Nr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());da(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];da(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Xs(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new bt(Nr(this.value))}}function Jw(t){const e=[];return Xs(t.fields,(n,s)=>{const i=new ut([n]);if(da(s)){const r=Jw(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ct(e,0,X.min(),X.min(),X.min(),bt.empty(),0)}static newFoundDocument(e,n,s,i){return new ct(e,1,n,X.min(),s,i,0)}static newNoDocument(e,n){return new ct(e,2,n,X.min(),X.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,X.min(),X.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _x{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Pg(t,e=null,n=[],s=[],i=null,r=null,o=null){return new _x(t,e,n,s,i,r,o)}function Fd(t){const e=J(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Qu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),zc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Pi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Pi(s)).join(",")),e.ft=n}return e.ft}function Ud(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Qw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Og(t.startAt,e.startAt)&&Og(t.endAt,e.endAt)}function Yu(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function yx(t,e,n,s,i,r,o,a){return new Oo(t,e,n,s,i,r,o,a)}function Gc(t){return new Oo(t)}function Mg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Zw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $d(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function eE(t){return t.collectionGroup!==null}function vi(t){const e=J(t);if(e.dt===null){e.dt=[];const n=$d(e),s=Zw(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new xr(n)),e.dt.push(new xr(ut.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new xr(ut.keyField(),r))}}}return e.dt}function Fn(t){const e=J(t);if(!e._t)if(e.limitType==="F")e._t=Pg(e.path,e.collectionGroup,vi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of vi(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new xr(r.field,o))}const s=e.endAt?new Ga(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ga(e.startAt.position,e.startAt.inclusive):null;e._t=Pg(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function Xu(t,e){e.getFirstInequalityField(),$d(t);const n=t.filters.concat([e]);return new Oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qa(t,e,n){return new Oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qc(t,e){return Ud(Fn(t),Fn(e))&&t.limitType===e.limitType}function tE(t){return`${Fd(Fn(t))}|lt:${t.limitType}`}function Ju(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Yw(s)).join(", ")}]`),zc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Pi(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Pi(s)).join(",")),`Target(${n})`}(Fn(t))}; limitType=${t.limitType})`}function Yc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of vi(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=xg(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,vi(n),s)||n.endAt&&!function(i,r,o){const a=xg(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,vi(n),s))}(t,e)}function vx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nE(t){return(e,n)=>{let s=!1;for(const i of vi(t)){const r=wx(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function wx(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Di(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:za(e)?"-0":e}}function iE(t){return{integerValue:""+t}}function Ex(t,e){return rx(e)?iE(e):sE(t,e)}/**
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
 */class Xc{constructor(){this._=void 0}}function Tx(t,e,n){return t instanceof Ya?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Mi?oE(t,e):t instanceof ao?aE(t,e):function(s,i){const r=rE(s,i),o=Lg(r)+Lg(s.gt);return Gu(r)&&Gu(s.gt)?iE(o):sE(s.yt,o)}(t,e)}function Ix(t,e,n){return t instanceof Mi?oE(t,e):t instanceof ao?aE(t,e):n}function rE(t,e){return t instanceof Xa?Gu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ya extends Xc{}class Mi extends Xc{constructor(e){super(),this.elements=e}}function oE(t,e){const n=cE(e);for(const s of t.elements)n.some(i=>vn(i,s))||n.push(s);return{arrayValue:{values:n}}}class ao extends Xc{constructor(e){super(),this.elements=e}}function aE(t,e){let n=cE(e);for(const s of t.elements)n=n.filter(i=>!vn(i,s));return{arrayValue:{values:n}}}class Xa extends Xc{constructor(e,n){super(),this.yt=e,this.gt=n}}function Lg(t){return je(t.integerValue||t.doubleValue)}function cE(t){return Ld(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n){this.field=e,this.transform=n}}function Cx(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Mi&&s instanceof Mi||n instanceof ao&&s instanceof ao?xi(n.elements,s.elements,vn):n instanceof Xa&&s instanceof Xa?vn(n.gt,s.gt):n instanceof Ya&&s instanceof Ya}(t.transform,e.transform)}class Sx{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jc{}function lE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vd(t.key,Zt.none()):new Do(t.key,t.data,Zt.none());{const n=t.data,s=bt.empty();let i=new We(ut.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new fs(t.key,s,new xt(i.toArray()),Zt.none())}}function Rx(t,e,n){t instanceof Do?function(s,i,r){const o=s.value.clone(),a=Ug(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof fs?function(s,i,r){if(!fa(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ug(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(uE(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Or(t,e,n,s){return t instanceof Do?function(i,r,o,a){if(!fa(i.precondition,r))return o;const c=i.value.clone(),l=$g(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof fs?function(i,r,o,a){if(!fa(i.precondition,r))return o;const c=$g(i.fieldTransforms,a,r),l=r.data;return l.setAll(uE(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return fa(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Ax(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=rE(s.transform,i||null);r!=null&&(n===null&&(n=bt.empty()),n.set(s.field,r))}return n||null}function Fg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&xi(n,s,(i,r)=>Cx(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Do extends Jc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fs extends Jc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function uE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ug(t,e,n){const s=new Map;Ie(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Ix(o,a,n[i]))}return s}function $g(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Tx(r,o,e))}return s}class Vd extends Jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kx extends Jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,oe;function xx(t){switch(t){default:return G();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function hE(t){if(t===void 0)return Ln("GRPC error has no .code"),E.UNKNOWN;switch(t){case Be.OK:return E.OK;case Be.CANCELLED:return E.CANCELLED;case Be.UNKNOWN:return E.UNKNOWN;case Be.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Be.INTERNAL:return E.INTERNAL;case Be.UNAVAILABLE:return E.UNAVAILABLE;case Be.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Be.NOT_FOUND:return E.NOT_FOUND;case Be.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Be.ABORTED:return E.ABORTED;case Be.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Be.DATA_LOSS:return E.DATA_LOSS;default:return G()}}(oe=Be||(Be={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return qw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=new ze(q.comparator);function Un(){return Ox}const dE=new ze(q.comparator);function wr(...t){let e=dE;for(const n of t)e=e.insert(n.key,n);return e}function fE(t){let e=dE;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function As(){return Dr()}function pE(){return Dr()}function Dr(){return new er(t=>t.toString(),(t,e)=>t.isEqual(e))}const Dx=new ze(q.comparator),Px=new We(q.comparator);function se(...t){let e=Px;for(const n of t)e=e.add(n);return e}const Mx=new We(pe);function gE(){return Mx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Zc(X.min(),i,gE(),Un(),se())}}class Po{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Po(s,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class mE{constructor(e,n){this.targetId=e,this.Et=n}}class _E{constructor(e,n,s=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Vg{constructor(){this.At=0,this.Rt=jg(),this.bt=gt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=se(),n=se(),s=se();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:G()}}),new Po(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=jg()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Lx{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Un(),this.qt=Bg(),this.Ut=new We(pe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(Yu(r))if(s===0){const o=new q(r.path);this.Qt(n,o,ct.newNoDocument(o,X.min()))}else Ie(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Yu(a.target)){const c=new q(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ct.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=se();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new Zc(e,n,this.Ut,this.Lt,s);return this.Lt=Un(),this.qt=Bg(),this.Ut=new We(pe),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Vg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new We(pe),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Vg),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Bg(){return new ze(q.comparator)}function jg(){return new ze(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ux=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$x=(()=>({and:"AND",or:"OR"}))();class Vx{constructor(e,n){this.databaseId=e,this.wt=n}}function Ja(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yE(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Bx(t,e){return Ja(t,e.toTimestamp())}function gn(t){return Ie(!!t),X.fromTimestamp(function(e){const n=cs(e);return new He(n.seconds,n.nanos)}(t))}function Bd(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function vE(t){const e=Ae.fromString(t);return Ie(IE(e)),e}function Zu(t,e){return Bd(t.databaseId,e.path)}function ql(t,e){const n=vE(e);if(n.get(1)!==t.databaseId.projectId)throw new U(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(wE(n))}function eh(t,e){return Bd(t.databaseId,e)}function jx(t){const e=vE(t);return e.length===4?Ae.emptyPath():wE(e)}function th(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wE(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qg(t,e,n){return{name:Zu(t,e),fields:n.value.mapValue.fields}}function qx(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.wt?(Ie(l===void 0||typeof l=="string"),gt.fromBase64String(l||"")):(Ie(l===void 0||l instanceof Uint8Array),gt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:hE(c.code);return new U(l,c.message||"")}(o);n=new _E(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ql(t,s.document.name),r=gn(s.document.updateTime),o=s.document.createTime?gn(s.document.createTime):X.min(),a=new bt({mapValue:{fields:s.document.fields}}),c=ct.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new pa(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ql(t,s.document),r=s.readTime?gn(s.readTime):X.min(),o=ct.newNoDocument(i,r),a=s.removedTargetIds||[];n=new pa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ql(t,s.document),r=s.removedTargetIds||[];n=new pa([],r,i,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Nx(i),o=s.targetId;n=new mE(o,r)}}return n}function Hx(t,e){let n;if(e instanceof Do)n={update:qg(t,e.key,e.value)};else if(e instanceof Vd)n={delete:Zu(t,e.key)};else if(e instanceof fs)n={update:qg(t,e.key,e.data),updateMask:Zx(e.fieldMask)};else{if(!(e instanceof kx))return G();n={verify:Zu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ya)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Mi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ao)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Xa)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Bx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function Wx(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?gn(s.updateTime):gn(i);return r.isEqual(X.min())&&(r=gn(i)),new Sx(r,s.transformResults||[])}(n,e))):[]}function Kx(t,e){return{documents:[eh(t,e.path)]}}function zx(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=eh(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=eh(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return TE(nn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ii(u.field),direction:Yx(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.wt||zc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Gx(t){let e=jx(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ie(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=EE(u);return h instanceof nn&&Gw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new xr(ri(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,zc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Ga(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Ga(d,h)}(n.endAt)),yx(e,i,o,r,a,"F",c,l)}function Qx(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function EE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ri(e.unaryFilter.field);return qe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ri(e.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ri(e.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ri(e.unaryFilter.field);return qe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return qe.create(ri(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return nn.create(e.compositeFilter.filters.map(n=>EE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function Yx(t){return Fx[t]}function Xx(t){return Ux[t]}function Jx(t){return $x[t]}function ii(t){return{fieldPath:t.canonicalString()}}function ri(t){return ut.fromServerFormat(t.fieldPath)}function TE(t){return t instanceof qe?function(e){if(e.op==="=="){if(Ng(e.value))return{unaryFilter:{field:ii(e.field),op:"IS_NAN"}};if(kg(e.value))return{unaryFilter:{field:ii(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ng(e.value))return{unaryFilter:{field:ii(e.field),op:"IS_NOT_NAN"}};if(kg(e.value))return{unaryFilter:{field:ii(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(e.field),op:Xx(e.op),value:e.value}}}(t):t instanceof nn?function(e){const n=e.getFilters().map(s=>TE(s));return n.length===1?n[0]:{compositeFilter:{op:Jx(e.op),filters:n}}}(t):G()}function Zx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function IE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Rx(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Or(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Or(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=pE();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=lE(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,(n,s)=>Fg(n,s))&&xi(this.baseMutations,e.baseMutations,(n,s)=>Fg(n,s))}}class jd{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ie(e.mutations.length===s.length);let i=Dx;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new jd(e,n,s,i)}}/**
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
 */class tO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,s,i,r=X.min(),o=X.min(),a=gt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ps(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ps(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ps(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.ie=e}}function sO(t){const e=Gx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qa(e,e.limit,"L"):e}/**
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
 */class iO{constructor(){this.Je=new rO}addToCollectionParentIndex(e,n){return this.Je.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(as.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(as.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class rO{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new We(Ae.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new We(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Li(0)}static vn(){return new Li(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(){this.changes=new er(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class aO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Or(s.mutation,i,xt.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const i=As();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=wr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=As();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Un();const o=Dr(),a=Dr();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof fs)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Or(u.mutation,l,u.mutation.getFieldMask(),He.now())):o.set(l.key,xt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new aO(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Dr();let i=new ze((o,a)=>o-a),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||xt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||se()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=pE();u.forEach(d=>{if(!r.has(d)){const f=lE(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):eE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):S.resolve(As());let a=-1,c=r;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:fE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let i=wr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=wr();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const c=function(l,u){return new Oo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,ct.newInvalidDocument(l)))});let o=wr();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Or(l.mutation,c,xt.empty(),He.now()),Yc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:gn(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:sO(s.bundledQuery),readTime:gn(s.readTime)}}(n)),S.resolve()}}/**
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
 */class uO{constructor(){this.overlays=new ze(q.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=As();return S.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const i=As(),r=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ze((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=As(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=As(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return S.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new tO(n,s));let r=this.es.get(n);r===void 0&&(r=se(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.ns=new We(Qe.ss),this.rs=new We(Qe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Qe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Qe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new q(new Ae([])),s=new Qe(n,e),i=new Qe(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new q(new Ae([])),s=new Qe(n,e),i=new Qe(n,e+1);let r=se();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Qe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Qe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return q.comparator(e.key,n.key)||pe(e._s,n._s)}static os(e,n){return pe(e._s,n._s)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new We(Qe.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eO(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Qe(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return S.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Qe(n,0),i=new Qe(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),S.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new We(pe);return n.forEach(i=>{const r=new Qe(i,0),o=new Qe(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),S.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;q.isDocumentKey(r)||(r=r.child(""));const o=new Qe(new q(r),0);let a=new We(pe);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ie(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return S.forEach(n.mutations,i=>{const r=new Qe(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Qe(n,0),i=this.gs.firstAfterOrEqual(s);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e){this.Es=e,this.docs=new ze(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let s=Un();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ct.newInvalidDocument(i))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Un();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||tx(ex(u),s)<=0||(i.has(u.key)||Yc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return S.resolve(r)}getAllFromCollectionGroup(e,n,s,i){G()}As(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new fO(this)}getSize(e){return S.resolve(this.size)}}class fO extends oO{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.persistence=e,this.Rs=new er(n=>Fd(n),Ud),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.bs=0,this.Ps=new qd,this.targetCount=0,this.vs=Li.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Li(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(r).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Md(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new pO(this),this.indexManager=new iO,this.remoteDocumentCache=function(s){return new dO(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new nO(n),this.Ns=new lO(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new hO(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const i=new mO(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return S.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class mO extends sx{constructor(e){super(),this.currentSequenceNumber=e}}class Hd{constructor(e){this.persistence=e,this.Fs=new qd,this.$s=null}static Bs(e){return new Hd(e)}get Ls(){if(this.$s)return this.$s;throw G()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,s=>{const i=q.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,X.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=se(),i=se();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Wd(e,n.fromCache,s,i)}}/**
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
 */class _O{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Mg(n))return S.resolve(null);let s=Fn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qa(n,null,"F"),s=Fn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=se(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,Qa(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,i){return Mg(n)||i.isEqual(X.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Cg()<=de.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ju(n)),this.Bi(e,o,n,Z1(i,-1)))})}Fi(e,n){let s=new We(nE(e));return n.forEach((i,r)=>{Yc(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Cg()<=de.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Ju(n)),this.Ni.getDocumentsMatchingQuery(e,n,as.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new ze(pe),this.Ui=new er(r=>Fd(r),Ud),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cO(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function vO(t,e,n,s){return new yO(t,e,n,s)}async function bE(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=se();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function wO(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(m=>{const _=c.docVersions.get(f);Ie(_!==null),m.version.compareTo(_)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function CE(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function EO(t,e){const n=J(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(gt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(m,_,v){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,f,u)&&a.push(n.Cs.updateTargetData(r,f))});let c=Un(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(TO(r,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(X.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.qi=i,r))}function TO(t,e,n){let s=se(),i=se();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Un();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function IO(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function bO(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,S.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Ps(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function nh(t,e,n){const s=J(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xo(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function Hg(t,e,n){const s=J(t);let i=X.min(),r=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.Ui.get(l);return h!==void 0?S.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,Fn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?r:se())).next(a=>(CO(s,vx(e),a),{documents:a,Hi:r})))}function CO(t,e,n){let s=t.Ki.get(e)||X.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class Wg{constructor(){this.activeTargetIds=gE()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SO{constructor(){this.Lr=new Wg,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Wg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RO{Ur(e){}shutdown(){}}/**
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
 */class Kg{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);B("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(c=>(B("RestConnection","Received: ",c),c),c=>{throw Ku("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=AO[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new q1;a.setWithCredentials(!0),a.listenOnce(V1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case jl.NO_ERROR:const l=a.getResponseJson();B("Connection","XHR received:",JSON.stringify(l)),r(l);break;case jl.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),o(new U(E.DEADLINE_EXCEEDED,"Request time out"));break;case jl.HTTP_ERROR:const u=a.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(_)>=0?_:E.UNKNOWN}(d.status);o(new U(f,d.message))}else o(new U(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(E.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=U1(),o=$1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new j1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");B("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new kO({Hr:m=>{h?B("Connection","Not sending because WebChannel is closed:",m):(u||(B("Connection","Opening WebChannel transport."),l.open(),u=!0),B("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),f=(m,_,v)=>{m.listen(_,b=>{try{v(b)}catch(N){setTimeout(()=>{throw N},0)}})};return f(l,Zo.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),f(l,Zo.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),d.io())}),f(l,Zo.EventType.ERROR,m=>{h||(h=!0,Ku("Connection","WebChannel transport errored:",m),d.io(new U(E.UNAVAILABLE,"The operation could not be completed")))}),f(l,Zo.EventType.MESSAGE,m=>{var _;if(!h){const v=m.data[0];Ie(!!v);const b=v,N=b.error||((_=b[0])===null||_===void 0?void 0:_.error);if(N){B("Connection","WebChannel received error:",N);const R=N.status;let M=function(he){const we=Be[he];if(we!==void 0)return hE(we)}(R),ee=N.message;M===void 0&&(M=E.INTERNAL,ee="Unknown error status: "+R+" with message "+N.message),h=!0,d.io(new U(M,ee)),l.close()}else B("Connection","WebChannel received:",v),d.ro(v)}}),f(o,B1.STAT_EVENT,m=>{m.stat===Ig.PROXY?B("Connection","Detected buffering proxy"):m.stat===Ig.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Hl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t){return new Vx(t,!0)}class SE{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n,s,i,r,o,a,c){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new SE(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new U(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xO extends RE{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=qx(this.yt,e),s=function(i){if(!("targetChange"in i))return X.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?X.min():r.readTime?gn(r.readTime):X.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=th(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=Yu(a)?{documents:Kx(i,a)}:{query:zx(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=yE(i,r.resumeToken):r.snapshotVersion.compareTo(X.min())>0&&(o.readTime=Ja(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=Qx(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=th(this.yt),n.removeTarget=e,this.Bo(n)}}class OO extends RE{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Wx(e.writeResults,e.commitTime),s=gn(e.commitTime);return this.listener.Zo(s,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=th(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Hx(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new U(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(E.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(E.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class PO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ln(n),this.ou=!1):B("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Js(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c._u.add(4),await Mo(c),c.gu.set("Unknown"),c._u.delete(4),await tl(c)}(this))})}),this.gu=new PO(s,i)}}async function tl(t){if(Js(t))for(const e of t.wu)await e(!0)}async function Mo(t){for(const e of t.wu)await e(!1)}function AE(t,e){const n=J(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Gd(n)?zd(n):tr(n).ko()&&Kd(n,e))}function kE(t,e){const n=J(t),s=tr(n);n.du.delete(e),s.ko()&&NE(n,e),n.du.size===0&&(s.ko()?s.Fo():Js(n)&&n.gu.set("Unknown"))}function Kd(t,e){t.yu.Ot(e.targetId),tr(t).zo(e)}function NE(t,e){t.yu.Ot(e),tr(t).Ho(e)}function zd(t){t.yu=new Lx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),tr(t).start(),t.gu.uu()}function Gd(t){return Js(t)&&!tr(t).No()&&t.du.size>0}function Js(t){return J(t)._u.size===0}function xE(t){t.yu=void 0}async function LO(t){t.du.forEach((e,n)=>{Kd(t,e)})}async function FO(t,e){xE(t),Gd(t)?(t.gu.hu(e),zd(t)):t.gu.set("Unknown")}async function UO(t,e,n){if(t.gu.set("Online"),e instanceof _E&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Za(t,s)}else if(e instanceof pa?t.yu.Kt(e):e instanceof mE?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(X.min()))try{const s=await CE(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(c);l&&i.du.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(gt.EMPTY_BYTE_STRING,c.snapshotVersion)),NE(i,a);const l=new Ps(c.target,a,1,c.sequenceNumber);Kd(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await Za(t,s)}}async function Za(t,e,n){if(!xo(e))throw e;t._u.add(1),await Mo(t),t.gu.set("Offline"),n||(n=()=>CE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await tl(t)})}function OE(t,e){return e().catch(n=>Za(t,n,e))}async function nl(t){const e=J(t),n=ls(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;$O(e);)try{const i=await IO(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,VO(e,i)}catch(i){await Za(e,i)}DE(e)&&PE(e)}function $O(t){return Js(t)&&t.fu.length<10}function VO(t,e){t.fu.push(e);const n=ls(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function DE(t){return Js(t)&&!ls(t).No()&&t.fu.length>0}function PE(t){ls(t).start()}async function BO(t){ls(t).eu()}async function jO(t){const e=ls(t);for(const n of t.fu)e.Xo(n.mutations)}async function qO(t,e,n){const s=t.fu.shift(),i=jd.from(s,e,n);await OE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nl(t)}async function HO(t,e){e&&ls(t).Yo&&await async function(n,s){if(i=s.code,xx(i)&&i!==E.ABORTED){const r=n.fu.shift();ls(n).Mo(),await OE(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await nl(n)}var i}(t,e),DE(t)&&PE(t)}async function zg(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=Js(n);n._u.add(3),await Mo(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await tl(n)}async function WO(t,e){const n=J(t);e?(n._u.delete(2),await tl(n)):e||(n._u.add(2),await Mo(n),n.gu.set("Unknown"))}function tr(t){return t.pu||(t.pu=function(e,n,s){const i=J(e);return i.su(),new xO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:LO.bind(null,t),Zr:FO.bind(null,t),Wo:UO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Gd(t)?zd(t):t.gu.set("Unknown")):(await t.pu.stop(),xE(t))})),t.pu}function ls(t){return t.Iu||(t.Iu=function(e,n,s){const i=J(e);return i.su(),new OO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:BO.bind(null,t),Zr:HO.bind(null,t),tu:jO.bind(null,t),Zo:qO.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await nl(t)):(await t.Iu.stop(),t.fu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Qd(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yd(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),xo(t))return new U(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=wr(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new wi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof wi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new wi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.Tu=new ze(q.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):G():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Fi{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fi(e,n,wi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(){this.Au=void 0,this.listeners=[]}}class zO{constructor(){this.queries=new er(e=>tE(e),Qc),this.onlineState="Unknown",this.Ru=new Set}}async function Xd(t,e){const n=J(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new KO),i)try{r.Au=await n.onListen(s)}catch(o){const a=Yd(o,`Initialization of query '${Ju(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&Zd(n)}async function Jd(t,e){const n=J(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function GO(t,e){const n=J(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&Zd(n)}function QO(t,e,n){const s=J(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Zd(t){t.Ru.forEach(e=>{e.next()})}class ef{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Fi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.key=e}}class LE{constructor(e){this.key=e}}class YO{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=se(),this.mutatedKeys=se(),this.Gu=nE(e),this.Qu=new wi(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Gg,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Yc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==_&&(s.track({type:3,doc:f}),v=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),v=!0,(c&&this.Gu(f,c)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(f?(o=o.add(f),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((l,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return f(h)-f(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,r.length!==0||c?{snapshot:new Fi(this.query,e.Qu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Gg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=se(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new LE(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new ME(s))}),n}tc(e){this.qu=e.Hi,this.Ku=se();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Fi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class XO{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class JO{constructor(e){this.key=e,this.nc=!1}}class ZO{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new er(a=>tE(a),Qc),this.rc=new Map,this.oc=new Set,this.uc=new ze(q.comparator),this.cc=new Map,this.ac=new qd,this.hc={},this.lc=new Map,this.fc=Li.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function eD(t,e){const n=uD(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await bO(n.localStore,Fn(e));n.isPrimaryClient&&AE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await tD(n,e,s,a==="current",o.resumeToken)}return i}async function tD(t,e,n,s,i){t._c=(h,d,f)=>async function(m,_,v,b){let N=_.view.Wu(v);N.$i&&(N=await Hg(m.localStore,_.query,!1).then(({documents:ee})=>_.view.Wu(ee,N)));const R=b&&b.targetChanges.get(_.targetId),M=_.view.applyChanges(N,m.isPrimaryClient,R);return Yg(m,_.targetId,M.Xu),M.snapshot}(t,h,d,f);const r=await Hg(t.localStore,e,!0),o=new YO(e,r.Hi),a=o.Wu(r.documents),c=Po.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Yg(t,n,l.Xu);const u=new XO(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function nD(t,e){const n=J(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!Qc(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await nh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),kE(n.remoteStore,s.targetId),sh(n,s.targetId)}).catch(No)):(sh(n,s.targetId),await nh(n.localStore,s.targetId,!0))}async function sD(t,e,n){const s=hD(t);try{const i=await function(r,o){const a=J(r),c=He.now(),l=o.reduce((d,f)=>d.add(f.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Un(),m=se();return a.Gi.getEntries(d,l).next(_=>{f=_,f.forEach((v,b)=>{b.isValidDocument()||(m=m.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(_=>{u=_;const v=[];for(const b of o){const N=Ax(b,u.get(b.key).overlayedDocument);N!=null&&v.push(new fs(b.key,N,Jw(N.value.mapValue),Zt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(_=>{h=_;const v=_.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,_.batchId,v)})}).then(()=>({batchId:h.batchId,changes:fE(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new ze(pe)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Lo(s,i.changes),await nl(s.remoteStore)}catch(i){const r=Yd(i,"Failed to persist write");n.reject(r)}}async function FE(t,e){const n=J(t);try{const s=await EO(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Ie(o.nc):i.removedDocuments.size>0&&(Ie(o.nc),o.nc=!1))}),await Lo(n,s,e)}catch(s){await No(s)}}function Qg(t,e,n){const s=J(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=J(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Zd(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function iD(t,e,n){const s=J(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new ze(q.comparator);o=o.insert(r,ct.newNoDocument(r,X.min()));const a=se().add(r),c=new Zc(X.min(),new Map,new We(pe),o,a);await FE(s,c),s.uc=s.uc.remove(r),s.cc.delete(e),tf(s)}else await nh(s.localStore,e,!1).then(()=>sh(s,e,n)).catch(No)}async function rD(t,e){const n=J(t),s=e.batch.batchId;try{const i=await wO(n.localStore,e);$E(n,s,null),UE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Lo(n,i)}catch(i){await No(i)}}async function oD(t,e,n){const s=J(t);try{const i=await function(r,o){const a=J(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);$E(s,e,n),UE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Lo(s,i)}catch(i){await No(i)}}function UE(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function $E(t,e,n){const s=J(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function sh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||VE(t,s)})}function VE(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(kE(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),tf(t))}function Yg(t,e,n){for(const s of n)s instanceof ME?(t.ac.addReference(s.key,e),aD(t,s)):s instanceof LE?(B("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||VE(t,s.key)):G()}function aD(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(B("SyncEngine","New document in limbo: "+n),t.oc.add(s),tf(t))}function tf(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(Ae.fromString(e)),s=t.fc.next();t.cc.set(s,new JO(n)),t.uc=t.uc.insert(n,s),AE(t.remoteStore,new Ps(Fn(Gc(n.path)),s,2,Md.at))}}async function Lo(t,e,n){const s=J(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Wd.Ci(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!xo(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.qi.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);l.qi=l.qi.insert(h,m)}}}(s.localStore,r))}async function cD(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await bE(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new U(E.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Lo(n,s.ji)}}function lD(t,e){const n=J(t),s=n.cc.get(e);if(s&&s.nc)return se().add(s.key);{let i=se();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function uD(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=FE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iD.bind(null,e),e.sc.Wo=GO.bind(null,e.eventManager),e.sc.wc=QO.bind(null,e.eventManager),e}function hD(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oD.bind(null,e),e}class dD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=el(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return vO(this.persistence,new _O,e.initialUser,this.yt)}yc(e){return new gO(Hd.Bs,this.yt)}gc(e){return new SO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=cD.bind(null,this.syncEngine),await WO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new zO}createDatastore(e){const n=el(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new NO(i));var i;return function(r,o,a,c){return new DO(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Qg(this.syncEngine,a,0),o=Kg.C()?new Kg:new RO,new MO(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new ZO(s,i,r,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);B("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Mo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t,e,n){if(!n)throw new U(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pD(t,e,n,s){if(e===!0&&s===!0)throw new U(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xg(t){if(!q.isDocumentKey(t))throw new U(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jg(t){if(q.isDocumentKey(t))throw new U(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function $t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sl(t);throw new U(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function gD(t,e){if(e<=0)throw new U(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Map;class em{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new em({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new em(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new H1;switch(n.type){case"gapi":const s=n.client;return new G1(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Zg.get(e);n&&(B("ComponentProvider","Removing Datastore"),Zg.delete(e),n.terminate())}(this),Promise.resolve()}}function mD(t,e,n,s={}){var i;const r=(t=$t(t,il))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Ku("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=rt.MOCK_USER;else{o=eb(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new U(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new rt(c)}t._authCredentials=new W1(new Bw(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class ps{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ps(this.firestore,e,this._query)}}class is extends ps{constructor(e,n,s){super(e,n,Gc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new q(e))}withConverter(e){return new is(this.firestore,e,this._path)}}function _D(t,e,...n){if(t=Me(t),BE("collection","path",e),t instanceof il){const s=Ae.fromString(e,...n);return Jg(s),new is(t,null,s)}{if(!(t instanceof yt||t instanceof is))throw new U(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return Jg(s),new is(t.firestore,null,s)}}function yD(t,e,...n){if(t=Me(t),arguments.length===1&&(e=jw.R()),BE("doc","path",e),t instanceof il){const s=Ae.fromString(e,...n);return Xg(s),new yt(t,null,new q(s))}{if(!(t instanceof yt||t instanceof is))throw new U(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return Xg(s),new yt(t.firestore,t instanceof is?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=jw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{B("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(B("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Yd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function wD(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await bE(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ED(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TD(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>zg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>zg(e.remoteStore,r)),t.onlineComponents=e}async function TD(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await wD(t,new dD)),t.offlineComponents}async function jE(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await ED(t,new fD)),t.onlineComponents}function ID(t){return jE(t).then(e=>e.syncEngine)}async function ec(t){const e=await jE(t),n=e.eventManager;return n.onListen=eD.bind(null,e.syncEngine),n.onUnlisten=nD.bind(null,e.syncEngine),n}function bD(t,e,n={}){const s=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new nf({next:h=>{r.enqueueAndForget(()=>Jd(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new U(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new U(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ef(Gc(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Xd(i,u)}(await ec(t),t.asyncQueue,e,n,s)),s.promise}function CD(t,e,n={}){const s=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new nf({next:h=>{r.enqueueAndForget(()=>Jd(i,u)),h.fromCache&&a.source==="server"?c.reject(new U(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ef(o,l,{includeMetadataChanges:!0,Nu:!0});return Xd(i,u)}(await ec(t),t.asyncQueue,e,n,s)),s.promise}class SD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new SE(this,"async_queue_retry"),this.Wc=()=>{const n=Hl();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Hl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Hl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new xn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!xo(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ln("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Qd.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&G()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function tm(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class us extends il{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new SD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||HE(this),this._firestoreClient.terminate()}}function qE(t,e){const n=typeof t=="object"?t:Ph(),s=typeof t=="string"?t:e||"(default)",i=Dh(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=JI("firestore");r&&mD(i,...r)}return i}function rl(t){return t._firestoreClient||HE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function HE(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new ix(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new vD(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ui(gt.fromBase64String(e))}catch(n){throw new U(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ui(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD=/^__.*__$/;class AD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Do(e,this.data,n,this.fieldTransforms)}}class WE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new fs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function KE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class ll{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new ll(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return tc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(KE(this.sa)&&RD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class kD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||el(e)}da(e,n,s,i=!1){return new ll({sa:e,methodName:n,fa:s,path:ut.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function sf(t){const e=t._freezeSettings(),n=el(t._databaseId);return new kD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ND(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);rf("Data must be an object, but it was:",o,s);const a=zE(s,o);let c,l;if(r.merge)c=new xt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=ih(e,h,n);if(!o.contains(d))throw new U(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);QE(u,d)||u.push(d)}c=new xt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new AD(new bt(a),c,l)}class ul extends al{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ul}}function xD(t,e,n){return new ll({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class OD extends al{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=xD(this,e,!0),s=this._a.map(r=>nr(r,n)),i=new Mi(s);return new bx(e.path,i)}isEqual(e){return this===e}}function DD(t,e,n,s){const i=t.da(1,e,n);rf("Data must be an object, but it was:",i,s);const r=[],o=bt.empty();Xs(s,(c,l)=>{const u=of(e,c,n);l=Me(l);const h=i.ca(u);if(l instanceof ul)r.push(u);else{const d=nr(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new xt(r);return new WE(o,a,i.fieldTransforms)}function PD(t,e,n,s,i,r){const o=t.da(1,e,n),a=[ih(e,s,n)],c=[i];if(r.length%2!=0)throw new U(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(ih(e,r[d])),c.push(r[d+1]);const l=[],u=bt.empty();for(let d=a.length-1;d>=0;--d)if(!QE(l,a[d])){const f=a[d];let m=c[d];m=Me(m);const _=o.ca(f);if(m instanceof ul)l.push(f);else{const v=nr(m,_);v!=null&&(l.push(f),u.set(f,v))}}const h=new xt(l);return new WE(u,h,o.fieldTransforms)}function MD(t,e,n,s=!1){return nr(n,t.da(s?4:3,e))}function nr(t,e){if(GE(t=Me(t)))return rf("Unsupported field value:",e,t),zE(t,e);if(t instanceof al)return function(n,s){if(!KE(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=nr(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ex(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=He.fromDate(n);return{timestampValue:Ja(s.yt,i)}}if(n instanceof He){const i=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ja(s.yt,i)}}if(n instanceof cl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ui)return{bytesValue:yE(s.yt,n._byteString)};if(n instanceof yt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bd(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${sl(n)}`)}(t,e)}function zE(t,e){const n={};return qw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(s,i)=>{const r=nr(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function GE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof cl||t instanceof Ui||t instanceof yt||t instanceof al)}function rf(t,e,n){if(!GE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=sl(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function ih(t,e,n){if((e=Me(e))instanceof ol)return e._internalPath;if(typeof e=="string")return of(t,e);throw tc("Field path arguments must be of type string or ",t,!1,void 0,n)}const LD=new RegExp("[~\\*/\\[\\]]");function of(t,e,n){if(e.search(LD)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ol(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tc(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new U(E.INVALID_ARGUMENT,a+t+c)}function QE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(af("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FD extends YE{data(){return super.data()}}function af(t,e){return typeof e=="string"?of(t,e):e instanceof ol?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cf{}class JE extends cf{}function UD(t,e,...n){let s=[];e instanceof cf&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof lf).length,o=i.filter(a=>a instanceof hl).length;if(r>1||r>0&&o>0)throw new U(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class hl extends JE{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new hl(e,n,s)}_apply(e){const n=this._parse(e);return ZE(e._query,n),new ps(e.firestore,e.converter,Xu(e._query,n))}_parse(e){const n=sf(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new U(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){sm(u,l);const d=[];for(const f of u)d.push(nm(a,i,f));h={arrayValue:{values:d}}}else h=nm(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||sm(u,l),h=MD(o,r,u,l==="in"||l==="not-in");return qe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $D(t,e,n){const s=e,i=af("where",t);return hl._create(i,s,n)}class lf extends cf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lf(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)ZE(r,a),r=Xu(r,a)}(e._query,n),new ps(e.firestore,e.converter,Xu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uf extends JE{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new uf(e,n,s)}_apply(e){return new ps(e.firestore,e.converter,Qa(e._query,this._limit,this._limitType))}}function VD(t){return gD("limit",t),uf._create("limit",t,"F")}function nm(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new U(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eE(e)&&n.indexOf("/")!==-1)throw new U(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ae.fromString(n));if(!q.isDocumentKey(s))throw new U(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ag(t,new q(s))}if(n instanceof yt)return Ag(t,n._key);throw new U(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sl(n)}.`)}function sm(t,e){if(!Array.isArray(t)||t.length===0)throw new U(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new U(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function ZE(t,e){if(e.isInequality()){const s=$d(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new U(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Zw(t);r!==null&&BD(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function BD(t,e,n){if(!n.isEqual(e))throw new U(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class jD{convertValue(e,n="none"){switch(Hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return Xs(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new cl(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ww(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ro(e));default:return null}}convertTimestamp(e){const n=cs(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ae.fromString(e);Ie(IE(s));const i=new io(s.get(1),s.get(3)),r=new q(s.popFirst(5));return i.isEqual(n)||Ln(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class e0 extends YE{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(af("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ga extends e0{data(e={}){return super.data(e)}}class t0{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Er(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ga(this._firestore,this._userDataWriter,s.key,s,new Er(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ga(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Er(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ga(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Er(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:HD(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t){t=$t(t,yt);const e=$t(t.firestore,us);return bD(rl(e),t._key).then(n=>i0(e,t,n))}class hf extends jD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ui(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function s0(t){t=$t(t,ps);const e=$t(t.firestore,us),n=rl(e),s=new hf(e);return XE(t._query),CD(n,t._query).then(i=>new t0(e,s,t,i))}function df(t,e,n,...s){t=$t(t,yt);const i=$t(t.firestore,us),r=sf(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof ol?PD(r,"updateDoc",t._key,e,n,s):DD(r,"updateDoc",t._key,e),pf(i,[o.toMutation(t._key,Zt.exists(!0))])}function WD(t){return pf($t(t.firestore,us),[new Vd(t._key,Zt.none())])}function KD(t,e){const n=$t(t.firestore,us),s=yD(t),i=qD(t.converter,e);return pf(n,[ND(sf(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Zt.exists(!1))]).then(()=>s)}function ff(t,...e){var n,s,i;t=Me(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||tm(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(tm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof yt)l=$t(t.firestore,us),u=Gc(t._key.path),c={next:h=>{e[o]&&e[o](i0(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=$t(t,ps);l=$t(h.firestore,us),u=h._query;const d=new hf(l);c={next:f=>{e[o]&&e[o](new t0(l,d,h,f))},error:e[o+1],complete:e[o+2]},XE(t._query)}return function(h,d,f,m){const _=new nf(m),v=new ef(d,_,f);return h.asyncQueue.enqueueAndForget(async()=>Xd(await ec(h),v)),()=>{_.bc(),h.asyncQueue.enqueueAndForget(async()=>Jd(await ec(h),v))}}(rl(l),u,a,c)}function pf(t,e){return function(n,s){const i=new xn;return n.asyncQueue.enqueueAndForget(async()=>sD(await ID(n),s,i)),i.promise}(rl(t),e)}function i0(t,e,n){const s=n.docs.get(e._key),i=new hf(t);return new e0(t,i,e._key,s,new Er(n.hasPendingWrites,n.fromCache),e.converter)}function zD(...t){return new OD("arrayUnion",t)}(function(t,e=!0){(function(n){Zi=n})(Ks),_n(new en("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new us(new K1(n.getProvider("auth-internal")),new Y1(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new io(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ot(bg,"3.8.3",t),Ot(bg,"3.8.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="firebasestorage.googleapis.com",GD="storageBucket",QD=2*60*1e3,YD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends En{constructor(e,n,s=0){super(Wl(e),`Firebase Storage: ${n} (${Wl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var wn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(wn||(wn={}));function Wl(t){return"storage/"+t}function XD(){const t="An unknown error occurred, please check the error payload for server response.";return new Tn(wn.UNKNOWN,t)}function JD(){return new Tn(wn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ZD(){return new Tn(wn.CANCELED,"User canceled the upload/download.")}function eP(t){return new Tn(wn.INVALID_URL,"Invalid URL '"+t+"'.")}function tP(t){return new Tn(wn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function im(t){return new Tn(wn.INVALID_ARGUMENT,t)}function o0(){return new Tn(wn.APP_DELETED,"The Firebase app was deleted.")}function nP(t){return new Tn(wn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Qt.makeFromUrl(e,n)}catch{return new Qt(e,"")}if(s.path==="")return s;throw tP(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(M){M.path_=decodeURIComponent(M.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},_=n===r0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",b=new RegExp(`^https?://${_}/${i}/${v}`,"i"),R=[{regex:a,indices:c,postModify:r},{regex:f,indices:m,postModify:l},{regex:b,indices:{bucket:1,path:2},postModify:l}];for(let M=0;M<R.length;M++){const ee=R[M],he=ee.regex.exec(e);if(he){const we=he[ee.indices.bucket];let xe=he[ee.indices.path];xe||(xe=""),s=new Qt(we,xe),ee.postModify(s);break}}if(s==null)throw eP(e);return s}}class sP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(f,c())},v)}function d(){r&&clearTimeout(r)}function f(v,...b){if(l){d();return}if(v){d(),u.call(null,v,...b);return}if(c()||o){d(),u.call(null,v,...b);return}s<64&&(s*=2);let R;a===1?(a=2,R=0):R=(s+Math.random())*1e3,h(R)}let m=!1;function _(v){m||(m=!0,d(),!l&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function rP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t){return t!==void 0}function rm(t,e,n,s){if(s<e)throw im(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw im(`Invalid value for '${t}'. Expected ${n} or less.`)}function aP(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(nc||(nc={}));/**
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
 */function cP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new na(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===nc.NO_ERROR,c=r.getStatus();if(!a||cP(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===nc.ABORT;s(!1,new na(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new na(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());oP(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=XD();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?o0():ZD();o(c)}else{const c=JD();o(c)}};this.canceled_?n(!1,new na(!1,null,!0)):this.backoffId_=iP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class na{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function uP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pP(t,e,n,s,i,r,o=!0){const a=aP(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return dP(l,e),uP(l,n),hP(l,r),fP(l,s),new lP(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class sc{constructor(e,n){this._service=e,n instanceof Qt?this._location=n:this._location=Qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new sc(e,n)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mP(this._location.path)}get storage(){return this._service}get parent(){const e=gP(this._location.path);if(e===null)return null;const n=new Qt(this._location.bucket,e);return new sc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nP(e)}}function om(t,e){const n=e==null?void 0:e[GD];return n==null?null:Qt.makeFromBucketSpec(n,t)}class _P{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=r0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QD,this._maxUploadRetryTime=YD,this._requests=new Set,i!=null?this._bucket=Qt.makeFromBucketSpec(i,this._host):this._bucket=om(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=om(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new sc(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new sP(o0());{const o=pP(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const am="@firebase/storage",cm="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP="storage";function vP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new _P(n,s,i,e,Ks)}function wP(){_n(new en(yP,vP,"PUBLIC").setMultipleInstances(!0)),Ot(am,cm,""),Ot(am,cm,"esm2017")}wP();const Kl=new WeakMap;function a0(t,e){return Kl.has(e)||Kl.set(e,t||{f:{},r:{},s:{},u:{}}),Kl.get(e)}function EP(t,e,n,s){if(!t)return n;const[i,r]=c0(t);if(!i)return n;const o=a0(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function TP(t,e,n,s){if(!t)return;const[i,r]=c0(t);if(!i)return;const o=a0(void 0,s)[i],a=e||r;if(a)return n.then(c=>{o[a]=c}),a}function c0(t){return QR(t)||YR(t)?["f",t.path]:XR(t)?["r",t.toString()]:JR(t)?["s",t.toString()]:[]}const zl=new WeakMap;function IP(t,e,n){const s=Sc();zl.has(s)||zl.set(s,new Map);const i=zl.get(s),r=TP(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):Rn}const bP={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function rh(t,e,n,s){if(!zR(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const m=Object.getOwnPropertyDescriptor(a,f);m&&!m.enumerable&&Object.defineProperty(h,f,m)});for(const f in a){const m=a[f];if(m==null||m instanceof Date||m instanceof He||m instanceof cl)h[f]=m;else if(Wh(m)){const _=l+f;h[f]=_ in n?c[f]:m.path,d[_]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[f]=Array(m.length);for(let _=0;_<m.length;_++){const v=m[_];v&&v.path in r&&(h[f][_]=r[v.path])}o(m,c[f]||h[f],l+f+".",[h[f],d])}else zs(m)?(h[f]={},o(m,c[f],l+f+".",[h[f],d])):h[f]=m}}return o(t,e,"",i),i}const gf={reset:!1,wait:!0,maxRefDepth:2,converter:bP,snapshotOptions:{serverTimestamps:"estimate"}};function ic(t){for(const e in t)t[e].unsub()}function oh(t,e,n,s,i,r,o,a,c){const[l,u]=rh(s.data(t.snapshotOptions),Hh(e,n),i,t);r.set(e,n,l),ah(t,e,n,i,u,r,o,a,c)}function CP({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const c=Object.create(null);let l=Rn;return a.once?n0(t).then(u=>{u.exists()?oh(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())}).catch(r):l=ff(t,u=>{u.exists()?oh(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())},r),()=>{l(),ic(c)}}function ah(t,e,n,s,i,r,o,a,c){const l=Object.keys(i);if(Object.keys(s).filter(_=>l.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const d=l.length,f=Object.create(null);function m(_){_ in f&&++h>=d&&a(n)}l.forEach(_=>{const v=s[_],b=i[_],N=`${n}.${_}`;if(f[N]=!0,v)if(v.path!==b.path)v.unsub();else return;s[_]={data:()=>Hh(e,N),unsub:CP({ref:b,target:e,path:N,depth:o,ops:r,resolve:m.bind(null,N),reject:c},t),path:b.path}})}function SP(t,e,n,s,i,r){const o=Object.assign({},gf,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let d=Ue(l?[]:t.value);l||n.set(t,h,[]);const f=s;let m,_=Rn;const v=[],b={added:({newIndex:R,doc:M})=>{v.splice(R,0,Object.create(null));const ee=v[R],[he,we]=rh(M.data(c),void 0,ee,o);n.add(et(d),R,he),ah(o,d,`${h}.${R}`,ee,we,n,0,s.bind(null,M),i)},modified:({oldIndex:R,newIndex:M,doc:ee})=>{const he=et(d),we=v[R],xe=he[R],[Mt,wt]=rh(ee.data(c),xe,we,o);v.splice(M,0,we),n.remove(he,R),n.add(he,M,Mt),ah(o,d,`${h}.${M}`,we,wt,n,0,s,i)},removed:({oldIndex:R})=>{const M=et(d);n.remove(M,R),ic(v.splice(R,1)[0])}};function N(R){const M=R.docChanges(a);if(!m&&M.length){m=!0;let ee=0;const he=M.length,we=Object.create(null);for(let xe=0;xe<he;xe++)we[M[xe].doc.id]=!0;s=xe=>{xe&&xe.id in we&&++ee>=he&&(l&&(n.set(t,h,et(d)),d=t),f(et(d)),s=Rn)}}M.forEach(ee=>{b[ee.type](ee)}),M.length||(l&&(n.set(t,h,et(d)),d=t),s(et(d)))}return u?s0(e).then(N).catch(i):_=ff(e,N,i),R=>{if(_(),R){const M=typeof R=="function"?R():[];n.set(t,h,M)}v.forEach(ic)}}function RP(t,e,n,s,i,r){const o=Object.assign({},gf,r),a="value",c=Object.create(null);s=ZR(s,()=>Hh(t,a));let l=Rn;function u(h){h.exists()?oh(o,t,a,h,c,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?n0(e).then(u).catch(i):l=ff(e,u,i),h=>{if(l(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}ic(c)}}function AP(t,e){let n=Rn;const s=Object.assign({},gf,e),i=et(t),r=s.target||Ue();eA()&&(s.once=!0),r.value=EP(i,s.ssrKey,r.value,Sc());let o=r.value===void 0;const a=Ue(!1),c=Ue(),l=Xm(),u=Mm();let h=Rn;function d(){let _=et(t);const v=new Promise((b,N)=>{if(n(s.reset),!_)return n=Rn,b(null);a.value=o,o=!0,_.converter||(_=_.withConverter(s.converter)),n=(Wh(_)?RP:SP)(r,_,kP,b,N,s)}).catch(b=>(l.value===v&&(c.value=b),Promise.reject(b))).finally(()=>{l.value===v&&(a.value=!1)});l.value=v}let f=Rn;nt(t)&&(f=Tr(t,d)),d(),i&&(h=IP(l.value,i,s.ssrKey)),kh()&&p_(()=>l.value),u&&V0(m);function m(_=s.reset){f(),h(),n(_)}return Object.defineProperties(r,{error:{get:()=>c},data:{get:()=>r},pending:{get:()=>a},promise:{get:()=>l},stop:{get:()=>m}})}const kP={set:(t,e,n)=>WR(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function NP(t,e){return AP(t,{target:Ue([]),...e})}function dl(t){return qE(Sc(t))}function xP(t){return(e,n)=>{const s=tA(e,n).run(()=>Ue(t));nA.set(e,s),sA(s,e)}}function OP(t,{firebaseApp:e,modules:n=[]}){t.provide(Cy,e);for(const s of n)t.use(s.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const oi=typeof window<"u";function DP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function Gl(t,e){const n={};for(const s in e){const i=e[s];n[s]=sn(i)?i.map(t):t(i)}return n}const Pr=()=>{},sn=Array.isArray,PP=/\/$/,MP=t=>t.replace(PP,"");function Ql(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=$P(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function LP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function FP(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&$i(e.matched[s],n.matched[i])&&l0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $i(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function l0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!UP(t[n],e[n]))return!1;return!0}function UP(t,e){return sn(t)?um(t,e):sn(e)?um(e,t):t===e}function um(t,e){return sn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function $P(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var co;(function(t){t.pop="pop",t.push="push"})(co||(co={}));var Mr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Mr||(Mr={}));function VP(t){if(!t)if(oi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),MP(t)}const BP=/^[^#]+#/;function jP(t,e){return t.replace(BP,"#")+e}function qP(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const fl=()=>({left:window.pageXOffset,top:window.pageYOffset});function HP(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=qP(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function hm(t,e){return(history.state?history.state.position-e:-1)+t}const ch=new Map;function WP(t,e){ch.set(t,e)}function KP(t){const e=ch.get(t);return ch.delete(t),e}let zP=()=>location.protocol+"//"+location.host;function u0(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),lm(c,"")}return lm(n,t)+s+i}function GP(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=u0(t,location),m=n.value,_=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}v=_?d.position-_.position:0}else s(f);i.forEach(b=>{b(n.value,m,{delta:v,type:co.pop,direction:v?v>0?Mr.forward:Mr.back:Mr.unknown})})};function c(){o=n.value}function l(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(me({},d.state,{scroll:fl()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function dm(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?fl():null}}function QP(t){const{history:e,location:n}=window,s={value:u0(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:zP()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=me({},e.state,dm(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=me({},i.value,e.state,{forward:c,scroll:fl()});r(u.current,u,!0);const h=me({},dm(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function YP(t){t=VP(t);const e=QP(t),n=GP(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=me({location:"",base:t,go:s,createHref:jP.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function XP(t){return typeof t=="string"||t&&typeof t=="object"}function h0(t){return typeof t=="string"||typeof t=="symbol"}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},d0=Symbol("");var fm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fm||(fm={}));function Vi(t,e){return me(new Error,{type:t,[d0]:!0},e)}function In(t,e){return t instanceof Error&&d0 in t&&(e==null||!!(t.type&e))}const pm="[^/]+?",JP={sensitive:!1,strict:!1,start:!0,end:!0},ZP=/[.+*?^${}()[\]/\\]/g;function eM(t,e){const n=me({},JP,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(ZP,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:_,optional:v,regexp:b}=d;r.push({name:m,repeatable:_,optional:v});const N=b||pm;if(N!==pm){f+=10;try{new RegExp(`(${N})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${N}): `+M.message)}}let R=_?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(R=v&&l.length<2?`(?:/${R})`:"/"+R),v&&(R+="?"),i+=R,f+=20,v&&(f+=-8),_&&(f+=-20),N===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=r[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:_,optional:v}=f,b=m in l?l[m]:"";if(sn(b)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const N=sn(b)?b.join("/"):b;if(!N)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function tM(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nM(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=tM(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(gm(s))return 1;if(gm(i))return-1}return i.length-s.length}function gm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sM={type:0,value:""},iM=/[a-zA-Z0-9_]/;function rM(t){if(!t)return[[]];if(t==="/")return[[sM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:iM.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function oM(t,e,n){const s=eM(rM(t.path),n),i=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function aM(t,e){const n=[],s=new Map;e=ym({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,m=cM(u);m.aliasOf=d&&d.record;const _=ym(e,u),v=[m];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of R)v.push(me({},m,{components:d?d.record.components:m.components,path:M,aliasOf:d?d.record:m}))}let b,N;for(const R of v){const{path:M}=R;if(h&&M[0]!=="/"){const ee=h.record.path,he=ee[ee.length-1]==="/"?"":"/";R.path=h.record.path+(M&&he+M)}if(b=oM(R,h,_),d?d.alias.push(b):(N=N||b,N!==b&&N.alias.push(b),f&&u.name&&!_m(b)&&o(u.name)),m.children){const ee=m.children;for(let he=0;he<ee.length;he++)r(ee[he],b,d&&d.children[he])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return N?()=>{o(N)}:Pr}function o(u){if(h0(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&nM(u,n[h])>=0&&(u.record.path!==n[h].record.path||!f0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!_m(u)&&s.set(u.record.name,u)}function l(u,h){let d,f={},m,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Vi(1,{location:u});_=d.record.name,f=me(mm(h.params,d.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&mm(u.params,d.keys.map(N=>N.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(N=>N.re.test(m)),d&&(f=d.parse(m),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!d)throw Vi(1,{location:u,currentLocation:h});_=d.record.name,f=me({},h.params,u.params),m=d.stringify(f)}const v=[];let b=d;for(;b;)v.unshift(b.record),b=b.parent;return{name:_,path:m,params:f,matched:v,meta:uM(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function mm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function cM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function _m(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uM(t){return t.reduce((e,n)=>me(e,n.meta),{})}function ym(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function f0(t,e){return e.children.some(n=>n===t||f0(t,n))}const p0=/#/g,hM=/&/g,dM=/\//g,fM=/=/g,pM=/\?/g,g0=/\+/g,gM=/%5B/g,mM=/%5D/g,m0=/%5E/g,_M=/%60/g,_0=/%7B/g,yM=/%7C/g,y0=/%7D/g,vM=/%20/g;function mf(t){return encodeURI(""+t).replace(yM,"|").replace(gM,"[").replace(mM,"]")}function wM(t){return mf(t).replace(_0,"{").replace(y0,"}").replace(m0,"^")}function lh(t){return mf(t).replace(g0,"%2B").replace(vM,"+").replace(p0,"%23").replace(hM,"%26").replace(_M,"`").replace(_0,"{").replace(y0,"}").replace(m0,"^")}function EM(t){return lh(t).replace(fM,"%3D")}function TM(t){return mf(t).replace(p0,"%23").replace(pM,"%3F")}function IM(t){return t==null?"":TM(t).replace(dM,"%2F")}function rc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function bM(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(g0," "),o=r.indexOf("="),a=rc(o<0?r:r.slice(0,o)),c=o<0?null:rc(r.slice(o+1));if(a in e){let l=e[a];sn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function vm(t){let e="";for(let n in t){const s=t[n];if(n=EM(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(sn(s)?s.map(r=>r&&lh(r)):[s&&lh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function CM(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=sn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const SM=Symbol(""),wm=Symbol(""),pl=Symbol(""),v0=Symbol(""),uh=Symbol("");function dr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Kn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Vi(4,{from:n,to:e})):h instanceof Error?a(h):XP(h)?a(Vi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Yl(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(RM(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Kn(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=DP(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Kn(d,n,s,r,o)()}))}}return i}function RM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Em(t){const e=Ut(pl),n=Ut(v0),s=Lt(()=>e.resolve(et(t.to))),i=Lt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex($i.bind(null,u));if(d>-1)return d;const f=Tm(c[l-2]);return l>1&&Tm(u)===f&&h[h.length-1].path!==f?h.findIndex($i.bind(null,c[l-2])):d}),r=Lt(()=>i.value>-1&&xM(n.params,s.value.params)),o=Lt(()=>i.value>-1&&i.value===n.matched.length-1&&l0(n.params,s.value.params));function a(c={}){return NM(c)?e[et(t.replace)?"replace":"push"](et(t.to)).catch(Pr):Promise.resolve()}return{route:s,href:Lt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const AM=l_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Em,setup(t,{slots:e}){const n=uo(Em(t)),{options:s}=Ut(pl),i=Lt(()=>({[Im(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Im(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:A_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),kM=AM;function NM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xM(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!sn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Tm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Im=(t,e,n)=>t??e??n,OM=l_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ut(uh),i=Lt(()=>t.route||s.value),r=Ut(wm,0),o=Lt(()=>{let l=et(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Lt(()=>i.value.matched[o.value]);ra(wm,Lt(()=>o.value+1)),ra(SM,a),ra(uh,i);const c=Ue();return Tr(()=>[c.value,a.value,t.name],([l,u,h],[d,f,m])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!$i(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return bm(n.default,{Component:d,route:l});const f=h.props[u],m=f?f===!0?l.params:typeof f=="function"?f(l):f:null,v=A_(d,me({},m,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return bm(n.default,{Component:v,route:l})||v}}});function bm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const w0=OM;function DM(t){const e=aM(t.routes,t),n=t.parseQuery||bM,s=t.stringifyQuery||vm,i=t.history,r=dr(),o=dr(),a=dr(),c=Xm(Hn);let l=Hn;oi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Gl.bind(null,T=>""+T),h=Gl.bind(null,IM),d=Gl.bind(null,rc);function f(T,F){let P,j;return h0(T)?(P=e.getRecordMatcher(T),j=F):j=T,e.addRoute(j,P)}function m(T){const F=e.getRecordMatcher(T);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(T=>T.record)}function v(T){return!!e.getRecordMatcher(T)}function b(T,F){if(F=me({},F||c.value),typeof T=="string"){const p=Ql(n,T,F.path),g=e.resolve({path:p.path},F),y=i.createHref(p.fullPath);return me(p,g,{params:d(g.params),hash:rc(p.hash),redirectedFrom:void 0,href:y})}let P;if("path"in T)P=me({},T,{path:Ql(n,T.path,F.path).path});else{const p=me({},T.params);for(const g in p)p[g]==null&&delete p[g];P=me({},T,{params:h(T.params)}),F.params=h(F.params)}const j=e.resolve(P,F),le=T.hash||"";j.params=u(d(j.params));const Pe=LP(s,me({},T,{hash:wM(le),path:j.path})),te=i.createHref(Pe);return me({fullPath:Pe,hash:le,query:s===vm?CM(T.query):T.query||{}},j,{redirectedFrom:void 0,href:te})}function N(T){return typeof T=="string"?Ql(n,T,c.value.path):me({},T)}function R(T,F){if(l!==T)return Vi(8,{from:F,to:T})}function M(T){return we(T)}function ee(T){return M(me(N(T),{replace:!0}))}function he(T){const F=T.matched[T.matched.length-1];if(F&&F.redirect){const{redirect:P}=F;let j=typeof P=="function"?P(T):P;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=N(j):{path:j},j.params={}),me({query:T.query,hash:T.hash,params:"path"in j?{}:T.params},j)}}function we(T,F){const P=l=b(T),j=c.value,le=T.state,Pe=T.force,te=T.replace===!0,p=he(P);if(p)return we(me(N(p),{state:typeof p=="object"?me({},le,p.state):le,force:Pe,replace:te}),F||P);const g=P;g.redirectedFrom=F;let y;return!Pe&&FP(s,j,P)&&(y=Vi(16,{to:g,from:j}),ms(j,j,!0,!1)),(y?Promise.resolve(y):Mt(g,j)).catch(w=>In(w)?In(w,2)?w:Bt(w):Ee(w,g,j)).then(w=>{if(w){if(In(w,2))return we(me({replace:te},N(w.to),{state:typeof w.to=="object"?me({},le,w.to.state):le,force:Pe}),F||g)}else w=Bn(g,j,!0,te,le);return wt(g,j,w),w})}function xe(T,F){const P=R(T,F);return P?Promise.reject(P):Promise.resolve()}function Mt(T,F){let P;const[j,le,Pe]=PM(T,F);P=Yl(j.reverse(),"beforeRouteLeave",T,F);for(const p of j)p.leaveGuards.forEach(g=>{P.push(Kn(g,T,F))});const te=xe.bind(null,T,F);return P.push(te),si(P).then(()=>{P=[];for(const p of r.list())P.push(Kn(p,T,F));return P.push(te),si(P)}).then(()=>{P=Yl(le,"beforeRouteUpdate",T,F);for(const p of le)p.updateGuards.forEach(g=>{P.push(Kn(g,T,F))});return P.push(te),si(P)}).then(()=>{P=[];for(const p of T.matched)if(p.beforeEnter&&!F.matched.includes(p))if(sn(p.beforeEnter))for(const g of p.beforeEnter)P.push(Kn(g,T,F));else P.push(Kn(p.beforeEnter,T,F));return P.push(te),si(P)}).then(()=>(T.matched.forEach(p=>p.enterCallbacks={}),P=Yl(Pe,"beforeRouteEnter",T,F),P.push(te),si(P))).then(()=>{P=[];for(const p of o.list())P.push(Kn(p,T,F));return P.push(te),si(P)}).catch(p=>In(p,8)?p:Promise.reject(p))}function wt(T,F,P){for(const j of a.list())j(T,F,P)}function Bn(T,F,P,j,le){const Pe=R(T,F);if(Pe)return Pe;const te=F===Hn,p=oi?history.state:{};P&&(j||te?i.replace(T.fullPath,me({scroll:te&&p&&p.scroll},le)):i.push(T.fullPath,le)),c.value=T,ms(T,F,P,te),Bt()}let rn;function Zs(){rn||(rn=i.listen((T,F,P)=>{if(!Fo.listening)return;const j=b(T),le=he(j);if(le){we(me(le,{replace:!0}),j).catch(Pr);return}l=j;const Pe=c.value;oi&&WP(hm(Pe.fullPath,P.delta),fl()),Mt(j,Pe).catch(te=>In(te,12)?te:In(te,2)?(we(te.to,j).then(p=>{In(p,20)&&!P.delta&&P.type===co.pop&&i.go(-1,!1)}).catch(Pr),Promise.reject()):(P.delta&&i.go(-P.delta,!1),Ee(te,j,Pe))).then(te=>{te=te||Bn(j,Pe,!1),te&&(P.delta&&!In(te,8)?i.go(-P.delta,!1):P.type===co.pop&&In(te,20)&&i.go(-1,!1)),wt(j,Pe,te)}).catch(Pr)}))}let gs=dr(),ir=dr(),$e;function Ee(T,F,P){Bt(T);const j=ir.list();return j.length?j.forEach(le=>le(T,F,P)):console.error(T),Promise.reject(T)}function _e(){return $e&&c.value!==Hn?Promise.resolve():new Promise((T,F)=>{gs.add([T,F])})}function Bt(T){return $e||($e=!T,Zs(),gs.list().forEach(([F,P])=>T?P(T):F()),gs.reset()),T}function ms(T,F,P,j){const{scrollBehavior:le}=t;if(!oi||!le)return Promise.resolve();const Pe=!P&&KP(hm(T.fullPath,0))||(j||!P)&&history.state&&history.state.scroll||null;return n_().then(()=>le(T,F,Pe)).then(te=>te&&HP(te)).catch(te=>Ee(te,T,F))}const jt=T=>i.go(T);let Et;const ei=new Set,Fo={currentRoute:c,listening:!0,addRoute:f,removeRoute:m,hasRoute:v,getRoutes:_,resolve:b,options:t,push:M,replace:ee,go:jt,back:()=>jt(-1),forward:()=>jt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ir.add,isReady:_e,install(T){const F=this;T.component("RouterLink",kM),T.component("RouterView",w0),T.config.globalProperties.$router=F,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>et(c)}),oi&&!Et&&c.value===Hn&&(Et=!0,M(i.location).catch(le=>{}));const P={};for(const le in Hn)P[le]=Lt(()=>c.value[le]);T.provide(pl,F),T.provide(v0,uo(P)),T.provide(uh,c);const j=T.unmount;ei.add(T),T.unmount=function(){ei.delete(T),ei.size<1&&(l=Hn,rn&&rn(),rn=null,c.value=Hn,Et=!1,$e=!1),j()}}};return Fo}function si(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function PM(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>$i(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>$i(l,c))||i.push(c))}return[n,s,i]}function MM(){return Ut(pl)}const _f=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},LM={},FM={class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},UM=O("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"},null,-1),$M=[UM];function VM(t,e){return ie(),ke("svg",FM,$M)}const BM=_f(LM,[["render",VM]]),jM={class:"bg-white px-2 sm:px-4 py-2.5 sticky w-full z-20 top-0 left-0 border-b border-gray-200"},qM={class:"container flex flex-wrap items-center justify-between mx-auto"},HM=O("span",{class:"self-center text-xl font-semibold whitespace-nowrap"},"domoticajs",-1),WM={class:"relative"},KM={key:0,class:"absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl"},zM={class:"block px-4 pt-2 text-sm text-gray-900"},GM={class:"block px-4 pb-2 text-sm font-medium text-gray-500 truncate"},QM={class:"py-2 text-sm text-gray-700"},YM={__name:"Navbar",setup(t){const e=Ue(!1),n=Ue(""),s=Ue("");return d_(async()=>{const i=await Ry();n.value=i.displayName?i.displayName:"Sin nombre",s.value=i.email}),(i,r)=>{const o=BT("RouterLink");return ie(),ke("nav",jM,[O("div",qM,[De(o,{to:{name:"home"},class:"flex items-center"},{default:pr(()=>[HM]),_:1}),O("div",WM,[O("button",{onClick:r[0]||(r[0]=a=>e.value=!e.value),class:"relative z-10 p-2 ml-2 text-gray-700 bg-white border border-transparent rounded-md border-gray-700 focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none"},[De(BM)]),e.value?(ie(),ke("div",KM,[O("div",null,[O("span",zM,On(n.value),1),O("span",GM,On(s.value),1)]),O("ul",QM,[O("li",null,[De(o,{to:{name:"home"},class:"block px-4 py-2 hover:bg-gray-100"},{default:pr(()=>[Ht("Dashboard")]),_:1})]),O("li",null,[De(o,{to:{name:"settings"},class:"block px-4 py-2 hover:bg-gray-100"},{default:pr(()=>[Ht("Ajustes")]),_:1})]),O("li",null,[De(o,{to:{name:"logout"},class:"block px-4 py-2 hover:bg-gray-100"},{default:pr(()=>[Ht("Cerrar Sesión")]),_:1})])])])):kt("",!0)])])])}}},XM={__name:"App",setup(t){return(e,n)=>(ie(),ke(It,null,[O("header",null,[De(YM)]),O("div",null,[De(et(w0))])],64))}},JM="modulepreload",ZM=function(t,e){return new URL(t,e).href},Cm={},Sm=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=ZM(r,s),r in Cm)return;Cm[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":JM,o||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},yf=t=>_D(t,"rooms"),sr=async(t,e)=>{const n=UD(yf(t),$D("name","==",e,VD(1))),s=await s0(n);return s.size==0?null:s.docs[0]},eL=async(t,e)=>{await KD(yf(t),{name:e,devices:{}})},tL=async(t,e)=>{const n=await sr(t,e);await WD(n.ref)},nL=async(t,e,n)=>{const s=await sr(t,e);return s==null?!1:(await df(s.ref,{devices:zD(...n)}),!0)},sL=async(t,e,n)=>{const s=await sr(t,e);if(s==null)return!1;const i=s.data();i.devices=i.devices.filter(r=>r.name!=n),await df(s.ref,{...i})},iL=async(t,e,n)=>{const s=await sr(t,e);if(s==null)return!1;const i=s.data(),{devices:r}=i;for(let o in r)if(r[o].name==n){r[o].status=!r[o].status;break}await df(s.ref,{...i})},rL={},oL={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-plus"},aL=O("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null,-1),cL=O("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1),lL=[aL,cL];function uL(t,e){return ie(),ke("svg",oL,lL)}const Rm=_f(rL,[["render",uL]]),hL=["fill"],dL=O("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"},null,-1),fL=[dL],Am={__name:"CloseIcon",props:{color:String},setup(t){return(e,n)=>(ie(),ke("svg",{fill:t.color,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},fL,8,hL))}},pL={class:"flex flex-col justify-center h-[100%] text-2xl"},gL={__name:"Sensor",props:{device:Object},setup(t){return(e,n)=>(ie(),ke("div",null,[O("p",pL,On(t.device.info)+" "+On(t.device.suffix),1)]))}},mL=["fill"],_L=O("path",{stroke:"black","stroke-width":"1",d:"M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"},null,-1),yL=[_L],vL={__name:"LightBulbOn",props:{color:String},setup(t){return(e,n)=>(ie(),ke("svg",{fill:t.color,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},yL,8,mL))}},wL=["fill"],EL=O("path",{stroke:"black","stroke-width":"1",d:"M12,2C9.76,2 7.78,3.05 6.5,4.68L16.31,14.5C17.94,13.21 19,11.24 19,9A7,7 0 0,0 12,2M3.28,4L2,5.27L5.04,8.3C5,8.53 5,8.76 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H14.73L18.73,22L20,20.72L3.28,4M9,20V21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9Z"},null,-1),TL=[EL],IL={__name:"LightBulbOff",props:{color:String},setup(t){return(e,n)=>(ie(),ke("svg",{fill:t.color,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},TL,8,wL))}},bL=["fill"],CL=O("path",{stroke:"black","stroke-width":"0.5",d:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z"},null,-1),SL=[CL],RL={__name:"ToggleSwitch",props:{color:String},setup(t){return(e,n)=>(ie(),ke("svg",{xmlns:"http://www.w3.org/2000/svg",fill:t.color,viewBox:"0 0 24 24"},SL,8,bL))}},AL=["fill"],kL=O("path",{stroke:"black","stroke-width":"0.5",d:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z"},null,-1),NL=[kL],xL={__name:"ToggleSwitchOff",props:{color:String},setup(t){return(e,n)=>(ie(),ke("svg",{xmlns:"http://www.w3.org/2000/svg",fill:t.color,viewBox:"0 0 24 24"},NL,8,AL))}},OL={key:0},DL={key:1},PL={__name:"Executor",props:{room_name:String,device:Object},setup(t){const e=dl(),n=(s,i)=>{iL(e,s,i)};return(s,i)=>(ie(),ke("div",null,[O("button",{class:"flex flex-col justify-center h-[100%] w-16",onClick:i[0]||(i[0]=r=>n(t.room_name,t.device.name))},[t.device.iconSet=="bulb"?(ie(),ke("span",OL,[t.device.status?kt("",!0):(ie(),hn(IL,{key:0,fill:"#ccc"})),t.device.status?(ie(),hn(vL,{key:1,fill:"#ffcc00"})):kt("",!0)])):kt("",!0),t.device.iconSet=="toggleSwitch"?(ie(),ke("span",DL,[t.device.status?kt("",!0):(ie(),hn(xL,{key:0,fill:"#ccc"})),t.device.status?(ie(),hn(RL,{key:1,fill:"#0f0"})):kt("",!0)])):kt("",!0)])]))}},ML={class:"relative z-10","aria-modal":"true"},LL=O("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),FL={class:"fixed inset-0 z-10 overflow-y-auto"},UL={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},$L={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},VL={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},BL={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},jL=O("h3",{class:"text-lg font-medium leading-6 text-gray-900"},"Añadir sala",-1),qL={for:"room_name"},HL={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},WL={__name:"AddRoomModal",emits:"closeModal",setup(t,{emit:e}){const n=dl(),s=Ue(""),i=async()=>{if(await sr(n,s.value)!=null){alert("Existe una sala con ese nombre");return}await eL(n,s.value),alert("Sala añadida")};return(r,o)=>(ie(),ke("div",ML,[LL,O("div",FL,[O("div",UL,[O("div",$L,[O("div",VL,[O("div",BL,[jL,O("label",qL,[Ht("Nombre Sala "),zn(O("input",{type:"text",id:"room_name","onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a),class:"mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[qr,s.value]])])])]),O("div",HL,[O("button",{onClick:o[1]||(o[1]=a=>e("closeModal")),class:"inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"}," Cancelar "),O("button",{onClick:i,class:"mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}," Añadir ")])])])])]))}},KL={class:"relative z-10","aria-modal":"true"},zL=O("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),GL={class:"fixed inset-0 z-10 overflow-y-auto"},QL={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},YL={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},XL={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},JL={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},ZL={class:"text-lg font-medium leading-6 text-gray-900"},eF={class:"mt-2"},tF={for:"device_name",class:"text-sm"},nF={class:"mt-2"},sF={class:"text-sm"},iF={for:"sensor"},rF=["value"],oF={for:"room",class:"ml-1"},aF=["value"],cF={key:0,class:"mt-2"},lF={for:"device_suffix",class:"text-sm"},uF={key:1,class:"mt-2"},hF={for:"iconSet",class:"text-sm"},dF=O("option",{selected:""},null,-1),fF=["value"],pF={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},gF={__name:"AddDeviceModal",props:{deviceModalRoom:String},emits:"closeModal",setup(t,{emit:e}){const n=t,s=dl(),i={SENSOR:0,EXECUTOR:1},r={bulb:"Bombilla",toggleSwitch:"Interruptor"},o=Ue(""),a=Ue(0),c=Ue("ºC"),l=Ue(""),u=async()=>{const h=await sr(s,n.deviceModalRoom);if(h==null){alert("No existe ninguna sala con ese nombre");return}const d={name:o.value,type:a.value};a.value==i.SENSOR?(d.info="",d.suffix=c.value):a.value==i.EXECUTOR&&(d.status=!1,d.iconSet=l.value);const{name:f}=h.data();await nL(s,f,[d]),alert("Dispositivo añadido")};return(h,d)=>(ie(),ke("div",KL,[zL,O("div",GL,[O("div",QL,[O("div",YL,[O("div",XL,[O("div",JL,[O("h3",ZL,"Añadir dispositivo a "+On(t.deviceModalRoom),1),O("div",eF,[O("label",tF,[Ht("Nombre Dispositivo "),zn(O("input",{type:"text",id:"device_name","onUpdate:modelValue":d[0]||(d[0]=f=>o.value=f),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[qr,o.value]])])]),O("div",nF,[O("label",sF,[Ht("Tipo: "),O("label",iF,[zn(O("input",{type:"radio",id:"sensor",value:i.SENSOR,"onUpdate:modelValue":d[1]||(d[1]=f=>a.value=f)},null,8,rF),[[Xf,a.value]]),Ht(" Sensor ")]),O("label",oF,[zn(O("input",{type:"radio",id:"executor",value:i.EXECUTOR,"onUpdate:modelValue":d[2]||(d[2]=f=>a.value=f)},null,8,aF),[[Xf,a.value]]),Ht(" Ejecutor ")])])]),a.value==i.SENSOR?(ie(),ke("div",cF,[O("label",lF,[Ht("Sufijo "),zn(O("input",{type:"text",id:"device_suffix","onUpdate:modelValue":d[3]||(d[3]=f=>c.value=f),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[qr,c.value]])])])):kt("",!0),a.value==i.EXECUTOR?(ie(),ke("div",uF,[O("label",hF,[Ht("Icono "),zn(O("select",{id:"iconSet","onUpdate:modelValue":d[4]||(d[4]=f=>l.value=f),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},[dF,(ie(),ke(It,null,nu(r,(f,m)=>O("option",{key:m,value:m},On(f),9,fF)),64))],512),[[$I,l.value]])])])):kt("",!0)])]),O("div",pF,[O("button",{onClick:d[5]||(d[5]=f=>e("closeModal")),class:"inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"}," Cancelar "),O("button",{onClick:u,class:"mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}," Añadir ")])])])])]))}},mF={class:"flex flex-row justify-center"},_F={class:"text-center font-bold text-white"},yF={class:"mt-2 flex flex-row"},vF={class:"text-center text-md"},wF={class:"flex justify-center h-1/2 m-auto"},EF=["onClick"],TF=["onClick"],IF=["onClick"],bF={__name:"HomeView",setup(t){const e=Ue(!1),n=Ue(!1),s=Ue(""),i=dl(),r=NP(yf(i)),o=c=>{confirm("¿Borrar esta sala?")&&tL(i,c)},a=(c,l)=>{confirm("¿Borrar este dispositivo?")&&sL(i,c,l)};return(c,l)=>(ie(),ke(It,null,[n.value?(ie(),hn(WL,{key:0,onCloseModal:l[0]||(l[0]=u=>n.value=!1)})):kt("",!0),e.value?(ie(),hn(gF,{key:1,onCloseModal:l[1]||(l[1]=u=>e.value=!1),deviceModalRoom:s.value},null,8,["deviceModalRoom"])):kt("",!0),O("div",mF,[(ie(!0),ke(It,null,nu(et(r),u=>(ie(),ke("div",{key:u.id,class:"m-1 p-4 bg-slate-500 relative"},[O("h1",_F,On(u.name),1),O("div",yF,[(ie(!0),ke(It,null,nu(u.devices,(h,d)=>(ie(),ke("div",{key:d,class:"border rounded p-1 mr-1 w-32 h-32 bg-white relative"},[O("h2",vF,On(h.name),1),O("div",wF,[h.type==0?(ie(),hn(gL,{key:0,device:h},null,8,["device"])):kt("",!0),h.type==1?(ie(),hn(PL,{key:1,device:h,room_name:u.name},null,8,["device","room_name"])):kt("",!0)]),O("button",{onClick:f=>a(u.name,h.name),class:"absolute top-0 right-0 m-1 text-white bg-red-500 border border-transparent rounded-md focus:border-red-500 focus:ring-opacity-40 focus:ring-red-300 focus:ring focus:outline-none"},[De(Am)],8,EF)]))),128)),O("button",{onClick:h=>{e.value=!0,s.value=u.name},class:"p-2 h-32 text-white bg-blue-500 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none"},[De(Rm)],8,TF)]),O("button",{onClick:h=>o(u.name),class:"absolute top-0 right-0 m-1 text-white bg-red-500 border border-transparent rounded-md focus:border-red-500 focus:ring-opacity-40 focus:ring-red-300 focus:ring focus:outline-none"},[De(Am)],8,IF)]))),128)),O("button",{onClick:l[2]||(l[2]=u=>n.value=!0),class:"p-2 text-white bg-green-500 border border-transparent rounded-md focus:border-green-500 focus:ring-opacity-40 focus:ring-green-300 focus:ring focus:outline-none"},[De(Rm)])])],64))}};const CF={class:"flex flex-col w-1/2 md:w-1/4 m-auto h-screen justify-center"},SF=["onKeydown"],RF=["onKeydown"],AF={__name:"Login",setup(t){const e=Iy(),n=MM(),s=Ue(""),i=Ue(""),r=Ue(""),o=()=>{sS(e,s.value,i.value).then(a=>{n.push({name:"home"}),r.value=""}).catch(a=>{a.code;const c=a.message;r.value=c})};return(a,c)=>(ie(),ke("div",CF,[zn(O("input",{type:"email",id:"email",onKeydown:Zf(o,["enter"]),"onUpdate:modelValue":c[0]||(c[0]=l=>s.value=l),placeholder:"E-mail"},null,40,SF),[[qr,s.value]]),zn(O("input",{type:"password",id:"password",class:"mt-2",onKeydown:Zf(o,["enter"]),"onUpdate:modelValue":c[1]||(c[1]=l=>i.value=l),placeholder:"Contraseña"},null,40,RF),[[qr,i.value]]),O("button",{onClick:o},"Entrar"),O("div",null,On(r.value),1)]))}},kF=_f(AF,[["__scopeId","data-v-ee5cee4e"]]),NF={__name:"LoginView",setup(t){return(e,n)=>(ie(),hn(kF))}},E0=DM({history:YP("./"),routes:[{path:"/",name:"home",component:bF},{path:"/login",name:"login",component:NF},{path:"/logout",name:"logout",component:()=>Sm(()=>import("./LogoutView-a6be341d.js"),[],import.meta.url)},{path:"/settings",name:"settings",component:()=>Sm(()=>import("./SettingsView-11ab5b07.js"),["./SettingsView-11ab5b07.js","./SettingsView-ccbab12c.css"],import.meta.url)}]});E0.beforeEach(async(t,e,n)=>{!await Ry()&&t.name!="login"?n({name:"login"}):n()});const T0=j_({apiKey:"",authDomain:"domoticajs-14f49.firebaseapp.com",projectId:"domoticajs-14f49",storageBucket:"domoticajs-14f49.appspot.com",messagingSenderId:"545225242492",appId:"1:545225242492:web:00f4ab5efca49dc6fb56f9"});qE(T0);const vf=qI(XM);vf.use(E0);vf.use(OP,{firebaseApp:T0,modules:[xP()]});vf.mount("#app");export{_f as _,O as a,d_ as b,ke as c,Ry as d,MF as e,DF as f,Iy as g,PF as h,OF as i,hn as j,ie as o,xF as p,Ue as r,LF as s,MM as u,qr as v,zn as w};
