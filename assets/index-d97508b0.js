(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function fh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function ph(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ke(s)?kE(s):ph(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ke(t))return t;if(Re(t))return t}}const CE=/;(?![^(]*\))/g,SE=/:([^]+)/,RE=/\/\*.*?\*\//gs;function kE(t){const e={};return t.replace(RE,"").split(CE).forEach(n=>{if(n){const s=n.split(SE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function mh(t){let e="";if(Ke(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=mh(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const AE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",NE=fh(AE);function Ng(t){return!!t||t===""}function xE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ti(t[s],e[s]);return n}function Ti(t,e){if(t===e)return!0;let n=If(t),s=If(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ur(t),s=Ur(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?xE(t,e):!1;if(n=Re(t),s=Re(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ti(t[o],e[o]))return!1}}return String(t)===String(e)}function OE(t,e){return t.findIndex(n=>Ti(n,e))}const Pt=t=>Ke(t)?t:t==null?"":z(t)||Re(t)&&(t.toString===Dg||!ee(t.toString))?JSON.stringify(t,xg,2):String(t),xg=(t,e)=>e&&e.__v_isRef?xg(t,e.value):pi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:hl(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!z(e)&&!Pg(e)?String(e):e,Ae={},fi=[],Zt=()=>{},DE=()=>!1,PE=/^on[^a-z]/,ul=t=>PE.test(t),gh=t=>t.startsWith("onUpdate:"),bt=Object.assign,_h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ME=Object.prototype.hasOwnProperty,ue=(t,e)=>ME.call(t,e),z=Array.isArray,pi=t=>uo(t)==="[object Map]",hl=t=>uo(t)==="[object Set]",If=t=>uo(t)==="[object Date]",ee=t=>typeof t=="function",Ke=t=>typeof t=="string",Ur=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",Og=t=>Re(t)&&ee(t.then)&&ee(t.catch),Dg=Object.prototype.toString,uo=t=>Dg.call(t),LE=t=>uo(t).slice(8,-1),Pg=t=>uo(t)==="[object Object]",yh=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ra=fh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},FE=/-(\w)/g,yn=dl(t=>t.replace(FE,(e,n)=>n?n.toUpperCase():"")),UE=/\B([A-Z])/g,zs=dl(t=>t.replace(UE,"-$1").toLowerCase()),fl=dl(t=>t.charAt(0).toUpperCase()+t.slice(1)),yc=dl(t=>t?`on${fl(t)}`:""),$r=(t,e)=>!Object.is(t,e),oa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ya=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},va=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cf;const $E=()=>Cf||(Cf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xt;class Mg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function VE(t){return new Mg(t)}function BE(t,e=xt){e&&e.active&&e.effects.push(t)}function Lg(){return xt}function jE(t){xt&&xt.cleanups.push(t)}const vh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Fg=t=>(t.w&os)>0,Ug=t=>(t.n&os)>0,qE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=os},HE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Fg(i)&&!Ug(i)?i.delete(t):e[n++]=i,i.w&=~os,i.n&=~os}e.length=n}},eu=new WeakMap;let mr=0,os=1;const tu=30;let Gt;const xs=Symbol(""),nu=Symbol("");class wh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,BE(this,s)}run(){if(!this.active)return this.fn();let e=Gt,n=es;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Gt,Gt=this,es=!0,os=1<<++mr,mr<=tu?qE(this):Sf(this),this.fn()}finally{mr<=tu&&HE(this),os=1<<--mr,Gt=this.parent,es=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Gt===this?this.deferStop=!0:this.active&&(Sf(this),this.onStop&&this.onStop(),this.active=!1)}}function Sf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let es=!0;const $g=[];function qi(){$g.push(es),es=!1}function Hi(){const t=$g.pop();es=t===void 0?!0:t}function At(t,e,n){if(es&&Gt){let s=eu.get(t);s||eu.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=vh()),Vg(i)}}function Vg(t,e){let n=!1;mr<=tu?Ug(t)||(t.n|=os,n=!Fg(t)):n=!t.has(Gt),n&&(t.add(Gt),Gt.deps.push(t))}function Mn(t,e,n,s,i,r){const o=eu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?yh(n)&&a.push(o.get("length")):(a.push(o.get(xs)),pi(t)&&a.push(o.get(nu)));break;case"delete":z(t)||(a.push(o.get(xs)),pi(t)&&a.push(o.get(nu)));break;case"set":pi(t)&&a.push(o.get(xs));break}if(a.length===1)a[0]&&su(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);su(vh(l))}}function su(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&Rf(s);for(const s of n)s.computed||Rf(s)}function Rf(t,e){(t!==Gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const WE=fh("__proto__,__v_isRef,__isVue"),Bg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ur)),KE=Eh(),zE=Eh(!1,!0),GE=Eh(!0),kf=QE();function QE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=me(this);for(let r=0,o=this.length;r<o;r++)At(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(me)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qi();const s=me(this)[e].apply(this,n);return Hi(),s}}),t}function YE(t){const e=me(this);return At(e,"has",t),e.hasOwnProperty(t)}function Eh(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?db:Kg:e?Wg:Hg).get(s))return s;const o=z(s);if(!t){if(o&&ue(kf,i))return Reflect.get(kf,i,r);if(i==="hasOwnProperty")return YE}const a=Reflect.get(s,i,r);return(Ur(i)?Bg.has(i):WE(i))||(t||At(s,"get",i),e)?a:it(a)?o&&yh(i)?a:a.value:Re(a)?t?zg(a):ho(a):a}}const XE=jg(),JE=jg(!0);function jg(t=!1){return function(n,s,i,r){let o=n[s];if(Ii(o)&&it(o)&&!it(i))return!1;if(!t&&(!wa(i)&&!Ii(i)&&(o=me(o),i=me(i)),!z(n)&&it(o)&&!it(i)))return o.value=i,!0;const a=z(n)&&yh(s)?Number(s)<n.length:ue(n,s),l=Reflect.set(n,s,i,r);return n===me(r)&&(a?$r(i,o)&&Mn(n,"set",s,i):Mn(n,"add",s,i)),l}}function ZE(t,e){const n=ue(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Mn(t,"delete",e,void 0),s}function eb(t,e){const n=Reflect.has(t,e);return(!Ur(e)||!Bg.has(e))&&At(t,"has",e),n}function tb(t){return At(t,"iterate",z(t)?"length":xs),Reflect.ownKeys(t)}const qg={get:KE,set:XE,deleteProperty:ZE,has:eb,ownKeys:tb},nb={get:GE,set(t,e){return!0},deleteProperty(t,e){return!0}},sb=bt({},qg,{get:zE,set:JE}),bh=t=>t,pl=t=>Reflect.getPrototypeOf(t);function Vo(t,e,n=!1,s=!1){t=t.__v_raw;const i=me(t),r=me(e);n||(e!==r&&At(i,"get",e),At(i,"get",r));const{has:o}=pl(i),a=s?bh:n?Ch:Vr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Bo(t,e=!1){const n=this.__v_raw,s=me(n),i=me(t);return e||(t!==i&&At(s,"has",t),At(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function jo(t,e=!1){return t=t.__v_raw,!e&&At(me(t),"iterate",xs),Reflect.get(t,"size",t)}function Af(t){t=me(t);const e=me(this);return pl(e).has.call(e,t)||(e.add(t),Mn(e,"add",t,t)),this}function Nf(t,e){e=me(e);const n=me(this),{has:s,get:i}=pl(n);let r=s.call(n,t);r||(t=me(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?$r(e,o)&&Mn(n,"set",t,e):Mn(n,"add",t,e),this}function xf(t){const e=me(this),{has:n,get:s}=pl(e);let i=n.call(e,t);i||(t=me(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Mn(e,"delete",t,void 0),r}function Of(){const t=me(this),e=t.size!==0,n=t.clear();return e&&Mn(t,"clear",void 0,void 0),n}function qo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=me(o),l=e?bh:t?Ch:Vr;return!t&&At(a,"iterate",xs),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Ho(t,e,n){return function(...s){const i=this.__v_raw,r=me(i),o=pi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?bh:e?Ch:Vr;return!e&&At(r,"iterate",l?nu:xs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Hn(t){return function(...e){return t==="delete"?!1:this}}function ib(){const t={get(r){return Vo(this,r)},get size(){return jo(this)},has:Bo,add:Af,set:Nf,delete:xf,clear:Of,forEach:qo(!1,!1)},e={get(r){return Vo(this,r,!1,!0)},get size(){return jo(this)},has:Bo,add:Af,set:Nf,delete:xf,clear:Of,forEach:qo(!1,!0)},n={get(r){return Vo(this,r,!0)},get size(){return jo(this,!0)},has(r){return Bo.call(this,r,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:qo(!0,!1)},s={get(r){return Vo(this,r,!0,!0)},get size(){return jo(this,!0)},has(r){return Bo.call(this,r,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:qo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ho(r,!1,!1),n[r]=Ho(r,!0,!1),e[r]=Ho(r,!1,!0),s[r]=Ho(r,!0,!0)}),[t,n,e,s]}const[rb,ob,ab,lb]=ib();function Th(t,e){const n=e?t?lb:ab:t?ob:rb;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ue(n,i)&&i in s?n:s,i,r)}const cb={get:Th(!1,!1)},ub={get:Th(!1,!0)},hb={get:Th(!0,!1)},Hg=new WeakMap,Wg=new WeakMap,Kg=new WeakMap,db=new WeakMap;function fb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pb(t){return t.__v_skip||!Object.isExtensible(t)?0:fb(LE(t))}function ho(t){return Ii(t)?t:Ih(t,!1,qg,cb,Hg)}function mb(t){return Ih(t,!1,sb,ub,Wg)}function zg(t){return Ih(t,!0,nb,hb,Kg)}function Ih(t,e,n,s,i){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=pb(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function mi(t){return Ii(t)?mi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ii(t){return!!(t&&t.__v_isReadonly)}function wa(t){return!!(t&&t.__v_isShallow)}function Gg(t){return mi(t)||Ii(t)}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Qg(t){return ya(t,"__v_skip",!0),t}const Vr=t=>Re(t)?ho(t):t,Ch=t=>Re(t)?zg(t):t;function Yg(t){es&&Gt&&(t=me(t),Vg(t.dep||(t.dep=vh())))}function Xg(t,e){t=me(t);const n=t.dep;n&&su(n)}function it(t){return!!(t&&t.__v_isRef===!0)}function he(t){return Zg(t,!1)}function Jg(t){return Zg(t,!0)}function Zg(t,e){return it(t)?t:new gb(t,e)}class gb{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:Vr(e)}get value(){return Yg(this),this._value}set value(e){const n=this.__v_isShallow||wa(e)||Ii(e);e=n?e:me(e),$r(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Vr(e),Xg(this))}}function tt(t){return it(t)?t.value:t}const _b={get:(t,e,n)=>tt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return it(i)&&!it(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function e_(t){return mi(t)?t:new Proxy(t,_b)}var t_;class yb{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[t_]=!1,this._dirty=!0,this.effect=new wh(e,()=>{this._dirty||(this._dirty=!0,Xg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=me(this);return Yg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}t_="__v_isReadonly";function vb(t,e,n=!1){let s,i;const r=ee(t);return r?(s=t,i=Zt):(s=t.get,i=t.set),new yb(s,i,r||!i,n)}function ts(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ml(r,e,n)}return i}function en(t,e,n,s){if(ee(t)){const r=ts(t,e,n,s);return r&&Og(r)&&r.catch(o=>{ml(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(en(t[r],e,n,s));return i}function ml(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ts(l,null,10,[t,o,a]);return}}wb(t,n,i,s)}function wb(t,e,n,s=!0){console.error(t)}let Br=!1,iu=!1;const ht=[];let dn=0;const gi=[];let Rn=null,Is=0;const n_=Promise.resolve();let Sh=null;function s_(t){const e=Sh||n_;return t?e.then(this?t.bind(this):t):e}function Eb(t){let e=dn+1,n=ht.length;for(;e<n;){const s=e+n>>>1;jr(ht[s])<t?e=s+1:n=s}return e}function Rh(t){(!ht.length||!ht.includes(t,Br&&t.allowRecurse?dn+1:dn))&&(t.id==null?ht.push(t):ht.splice(Eb(t.id),0,t),i_())}function i_(){!Br&&!iu&&(iu=!0,Sh=n_.then(o_))}function bb(t){const e=ht.indexOf(t);e>dn&&ht.splice(e,1)}function Tb(t){z(t)?gi.push(...t):(!Rn||!Rn.includes(t,t.allowRecurse?Is+1:Is))&&gi.push(t),i_()}function Df(t,e=Br?dn+1:0){for(;e<ht.length;e++){const n=ht[e];n&&n.pre&&(ht.splice(e,1),e--,n())}}function r_(t){if(gi.length){const e=[...new Set(gi)];if(gi.length=0,Rn){Rn.push(...e);return}for(Rn=e,Rn.sort((n,s)=>jr(n)-jr(s)),Is=0;Is<Rn.length;Is++)Rn[Is]();Rn=null,Is=0}}const jr=t=>t.id==null?1/0:t.id,Ib=(t,e)=>{const n=jr(t)-jr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function o_(t){iu=!1,Br=!0,ht.sort(Ib);const e=Zt;try{for(dn=0;dn<ht.length;dn++){const n=ht[dn];n&&n.active!==!1&&ts(n,null,14)}}finally{dn=0,ht.length=0,r_(),Br=!1,Sh=null,(ht.length||gi.length)&&o_()}}function Cb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ae;d&&(i=n.map(f=>Ke(f)?f.trim():f)),h&&(i=n.map(va))}let a,l=s[a=yc(e)]||s[a=yc(yn(e))];!l&&r&&(l=s[a=yc(zs(e))]),l&&en(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,en(c,t,6,i)}}function a_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ee(t)){const l=c=>{const u=a_(c,e,!0);u&&(a=!0,bt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Re(t)&&s.set(t,null),null):(z(r)?r.forEach(l=>o[l]=null):bt(o,r),Re(t)&&s.set(t,o),o)}function gl(t,e){return!t||!ul(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,zs(e))||ue(t,e))}let Ot=null,_l=null;function Ea(t){const e=Ot;return Ot=t,_l=t&&t.type.__scopeId||null,e}function wU(t){_l=t}function EU(){_l=null}function gr(t,e=Ot,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&jf(-1);const r=Ea(e);let o;try{o=t(...i)}finally{Ea(r),s._d&&jf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function vc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:_}=t;let y,b;const R=Ea(t);try{if(n.shapeFlag&4){const P=i||s;y=hn(u.call(P,P,h,r,f,d,m)),b=l}else{const P=e;y=hn(P.length>1?P(r,{attrs:l,slots:a,emit:c}):P(r,null)),b=e.props?l:Sb(l)}}catch(P){Sr.length=0,ml(P,t,1),y=Ce(Fs)}let A=y;if(b&&_!==!1){const P=Object.keys(b),{shapeFlag:te}=A;P.length&&te&7&&(o&&P.some(gh)&&(b=Rb(b,o)),A=Ci(A,b))}return n.dirs&&(A=Ci(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),y=A,Ea(R),y}const Sb=t=>{let e;for(const n in t)(n==="class"||n==="style"||ul(n))&&((e||(e={}))[n]=t[n]);return e},Rb=(t,e)=>{const n={};for(const s in t)(!gh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function kb(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Pf(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!gl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Pf(s,o,c):!0:!!o;return!1}function Pf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!gl(n,r))return!0}return!1}function Ab({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nb=t=>t.__isSuspense;function xb(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Tb(t)}function aa(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function jt(t,e,n=!1){const s=Ue||Ot;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ee(e)?e.call(s.proxy):e}}const Wo={};function Ir(t,e,n){return l_(t,e,n)}function l_(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ae){const a=Lg()===(Ue==null?void 0:Ue.scope)?Ue:null;let l,c=!1,u=!1;if(it(t)?(l=()=>t.value,c=wa(t)):mi(t)?(l=()=>t,s=!0):z(t)?(u=!0,c=t.some(A=>mi(A)||wa(A)),l=()=>t.map(A=>{if(it(A))return A.value;if(mi(A))return Ss(A);if(ee(A))return ts(A,a,2)})):ee(t)?e?l=()=>ts(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),en(t,a,3,[d])}:l=Zt,e&&s){const A=l;l=()=>Ss(A())}let h,d=A=>{h=b.onStop=()=>{ts(A,a,4)}},f;if(Hr)if(d=Zt,e?n&&en(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const A=bT();f=A.__watcherHandles||(A.__watcherHandles=[])}else return Zt;let m=u?new Array(t.length).fill(Wo):Wo;const _=()=>{if(b.active)if(e){const A=b.run();(s||c||(u?A.some((P,te)=>$r(P,m[te])):$r(A,m)))&&(h&&h(),en(e,a,3,[A,m===Wo?void 0:u&&m[0]===Wo?[]:m,d]),m=A)}else b.run()};_.allowRecurse=!!e;let y;i==="sync"?y=_:i==="post"?y=()=>Ct(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),y=()=>Rh(_));const b=new wh(l,y);e?n?_():m=b.run():i==="post"?Ct(b.run.bind(b),a&&a.suspense):b.run();const R=()=>{b.stop(),a&&a.scope&&_h(a.scope.effects,b)};return f&&f.push(R),R}function Ob(t,e,n){const s=this.proxy,i=Ke(t)?t.includes(".")?c_(s,t):()=>s[t]:t.bind(s,s);let r;ee(e)?r=e:(r=e.handler,n=e);const o=Ue;Si(this);const a=l_(i,r.bind(s),n);return o?Si(o):Os(),a}function c_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ss(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),it(t))Ss(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Ss(t[n],e);else if(hl(t)||pi(t))t.forEach(n=>{Ss(n,e)});else if(Pg(t))for(const n in t)Ss(t[n],e);return t}function u_(t){return ee(t)?{setup:t,name:t.name}:t}const la=t=>!!t.type.__asyncLoader,h_=t=>t.type.__isKeepAlive;function Db(t,e){d_(t,"a",e)}function Pb(t,e){d_(t,"da",e)}function d_(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(yl(e,s,n),n){let i=n.parent;for(;i&&i.parent;)h_(i.parent.vnode)&&Mb(s,e,n,i),i=i.parent}}function Mb(t,e,n,s){const i=yl(e,t,s,!0);p_(()=>{_h(s[e],i)},n)}function yl(t,e,n=Ue,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qi(),Si(n);const a=en(e,n,t,o);return Os(),Hi(),a});return s?i.unshift(r):i.push(r),r}}const Bn=t=>(e,n=Ue)=>(!Hr||t==="sp")&&yl(t,(...s)=>e(...s),n),Lb=Bn("bm"),f_=Bn("m"),Fb=Bn("bu"),Ub=Bn("u"),$b=Bn("bum"),p_=Bn("um"),m_=Bn("sp"),Vb=Bn("rtg"),Bb=Bn("rtc");function jb(t,e=Ue){yl("ec",t,e)}function St(t,e){const n=Ot;if(n===null)return t;const s=El(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ae]=e[r];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&Ss(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function vs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(qi(),en(l,n,8,[t.el,a,t,e]),Hi())}}const g_="components";function qb(t,e){return Wb(g_,t,!0,e)||t}const Hb=Symbol();function Wb(t,e,n=!0,s=!1){const i=Ot||Ue;if(i){const r=i.type;if(t===g_){const a=wT(r,!1);if(a&&(a===e||a===yn(e)||a===fl(yn(e))))return r}const o=Mf(i[t]||r[t],e)||Mf(i.appContext[t],e);return!o&&s?r:o}}function Mf(t,e){return t&&(t[e]||t[yn(e)]||t[fl(yn(e))])}function ba(t,e,n,s){let i;const r=n&&n[s];if(z(t)||Ke(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Re(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const ru=t=>t?R_(t)?El(t)||t.proxy:ru(t.parent):null,Cr=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ru(t.parent),$root:t=>ru(t.root),$emit:t=>t.emit,$options:t=>kh(t),$forceUpdate:t=>t.f||(t.f=()=>Rh(t.update)),$nextTick:t=>t.n||(t.n=s_.bind(t.proxy)),$watch:t=>Ob.bind(t)}),wc=(t,e)=>t!==Ae&&!t.__isScriptSetup&&ue(t,e),Kb={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(wc(s,e))return o[e]=1,s[e];if(i!==Ae&&ue(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ue(c,e))return o[e]=3,r[e];if(n!==Ae&&ue(n,e))return o[e]=4,n[e];ou&&(o[e]=0)}}const u=Cr[e];let h,d;if(u)return e==="$attrs"&&At(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&ue(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ue(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return wc(i,e)?(i[e]=n,!0):s!==Ae&&ue(s,e)?(s[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ae&&ue(t,o)||wc(e,o)||(a=r[0])&&ue(a,o)||ue(s,o)||ue(Cr,o)||ue(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ou=!0;function zb(t){const e=kh(t),n=t.proxy,s=t.ctx;ou=!1,e.beforeCreate&&Lf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:_,deactivated:y,beforeDestroy:b,beforeUnmount:R,destroyed:A,unmounted:P,render:te,renderTracked:de,renderTriggered:be,errorCaptured:De,serverPrefetch:Ut,expose:Tt,inheritAttrs:qn,components:ln,directives:ti,filters:_s}=e;if(c&&Gb(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const ve=o[Te];ee(ve)&&(s[Te]=ve.bind(n))}if(i){const Te=i.call(n,n);Re(Te)&&(t.data=ho(Te))}if(ou=!0,r)for(const Te in r){const ve=r[Te],Wt=ee(ve)?ve.bind(n,n):ee(ve.get)?ve.get.bind(n,n):Zt,ys=!ee(ve)&&ee(ve.set)?ve.set.bind(n):Zt,Kt=Vt({get:Wt,set:ys});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:It=>Kt.value=It})}if(a)for(const Te in a)__(a[Te],s,n,Te);if(l){const Te=ee(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(ve=>{aa(ve,Te[ve])})}u&&Lf(u,t,"c");function $e(Te,ve){z(ve)?ve.forEach(Wt=>Te(Wt.bind(n))):ve&&Te(ve.bind(n))}if($e(Lb,h),$e(f_,d),$e(Fb,f),$e(Ub,m),$e(Db,_),$e(Pb,y),$e(jb,De),$e(Bb,de),$e(Vb,be),$e($b,R),$e(p_,P),$e(m_,Ut),z(Tt))if(Tt.length){const Te=t.exposed||(t.exposed={});Tt.forEach(ve=>{Object.defineProperty(Te,ve,{get:()=>n[ve],set:Wt=>n[ve]=Wt})})}else t.exposed||(t.exposed={});te&&t.render===Zt&&(t.render=te),qn!=null&&(t.inheritAttrs=qn),ln&&(t.components=ln),ti&&(t.directives=ti)}function Gb(t,e,n=Zt,s=!1){z(t)&&(t=au(t));for(const i in t){const r=t[i];let o;Re(r)?"default"in r?o=jt(r.from||i,r.default,!0):o=jt(r.from||i):o=jt(r),it(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Lf(t,e,n){en(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function __(t,e,n,s){const i=s.includes(".")?c_(n,s):()=>n[s];if(Ke(t)){const r=e[t];ee(r)&&Ir(i,r)}else if(ee(t))Ir(i,t.bind(n));else if(Re(t))if(z(t))t.forEach(r=>__(r,e,n,s));else{const r=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(r)&&Ir(i,r,t)}}function kh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Ta(l,c,o,!0)),Ta(l,e,o)),Re(e)&&r.set(e,l),l}function Ta(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ta(t,r,n,!0),i&&i.forEach(o=>Ta(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Qb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Qb={data:Ff,props:Es,emits:Es,methods:Es,computed:Es,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Es,directives:Es,watch:Xb,provide:Ff,inject:Yb};function Ff(t,e){return e?t?function(){return bt(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function Yb(t,e){return Es(au(t),au(e))}function au(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Es(t,e){return t?bt(bt(Object.create(null),t),e):e}function Xb(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const s in e)n[s]=yt(t[s],e[s]);return n}function Jb(t,e,n,s=!1){const i={},r={};ya(r,wl,1),t.propsDefaults=Object.create(null),y_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:mb(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Zb(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=me(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(gl(t.emitsOptions,d))continue;const f=e[d];if(l)if(ue(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=yn(d);i[m]=lu(l,a,m,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{y_(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=zs(h))===h||!ue(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=lu(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ue(e,h))&&(delete r[h],c=!0)}c&&Mn(t,"set","$attrs")}function y_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ra(l))continue;const c=e[l];let u;i&&ue(i,u=yn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:gl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=me(n),c=a||Ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=lu(i,l,h,c[h],t,!ue(c,h))}}return o}function lu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&ee(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Si(i),s=c[n]=l.call(null,e),Os())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===zs(n))&&(s=!0))}return s}function v_(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ee(t)){const u=h=>{l=!0;const[d,f]=v_(h,e,!0);bt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Re(t)&&s.set(t,fi),fi;if(z(r))for(let u=0;u<r.length;u++){const h=yn(r[u]);Uf(h)&&(o[h]=Ae)}else if(r)for(const u in r){const h=yn(u);if(Uf(h)){const d=r[u],f=o[h]=z(d)||ee(d)?{type:d}:Object.assign({},d);if(f){const m=Bf(Boolean,f.type),_=Bf(String,f.type);f[0]=m>-1,f[1]=_<0||m<_,(m>-1||ue(f,"default"))&&a.push(h)}}}const c=[o,a];return Re(t)&&s.set(t,c),c}function Uf(t){return t[0]!=="$"}function $f(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Vf(t,e){return $f(t)===$f(e)}function Bf(t,e){return z(e)?e.findIndex(n=>Vf(n,t)):ee(e)&&Vf(e,t)?0:-1}const w_=t=>t[0]==="_"||t==="$stable",Ah=t=>z(t)?t.map(hn):[hn(t)],eT=(t,e,n)=>{if(e._n)return e;const s=gr((...i)=>Ah(e(...i)),n);return s._c=!1,s},E_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(w_(i))continue;const r=t[i];if(ee(r))e[i]=eT(i,r,s);else if(r!=null){const o=Ah(r);e[i]=()=>o}}},b_=(t,e)=>{const n=Ah(e);t.slots.default=()=>n},tT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),ya(e,"_",n)):E_(e,t.slots={})}else t.slots={},e&&b_(t,e);ya(t.slots,wl,1)},nT=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(bt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,E_(e,i)),o=e}else e&&(b_(t,e),o={default:1});if(r)for(const a in i)!w_(a)&&!(a in o)&&delete i[a]};function T_(){return{app:null,config:{isNativeTag:DE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sT=0;function iT(t,e){return function(s,i=null){ee(s)||(s=Object.assign({},s)),i!=null&&!Re(i)&&(i=null);const r=T_(),o=new Set;let a=!1;const l=r.app={_uid:sT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:TT,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Ce(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,El(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function cu(t,e,n,s,i=!1){if(z(t)){t.forEach((d,f)=>cu(d,e&&(z(e)?e[f]:e),n,s,i));return}if(la(s)&&!i)return;const r=s.shapeFlag&4?El(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ke(c)?(u[c]=null,ue(h,c)&&(h[c]=null)):it(c)&&(c.value=null)),ee(l))ts(l,a,12,[o,u]);else{const d=Ke(l),f=it(l);if(d||f){const m=()=>{if(t.f){const _=d?ue(h,l)?h[l]:u[l]:l.value;i?z(_)&&_h(_,r):z(_)?_.includes(r)||_.push(r):d?(u[l]=[r],ue(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ue(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ct(m,n)):m()}}}const Ct=xb;function rT(t){return oT(t)}function oT(t,e){const n=$E();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Zt,insertStaticContent:m}=t,_=(p,g,v,w=null,C=null,x=null,L=!1,N=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!lr(p,g)&&(w=M(p),It(p,C,x,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:S,ref:H,shapeFlag:$}=g;switch(S){case vl:y(p,g,v,w);break;case Fs:b(p,g,v,w);break;case Ec:p==null&&R(g,v,w,L);break;case vt:ln(p,g,v,w,C,x,L,N,O);break;default:$&1?te(p,g,v,w,C,x,L,N,O):$&6?ti(p,g,v,w,C,x,L,N,O):($&64||$&128)&&S.process(p,g,v,w,C,x,L,N,O,ce)}H!=null&&C&&cu(H,p&&p.ref,x,g||p,!g)},y=(p,g,v,w)=>{if(p==null)s(g.el=a(g.children),v,w);else{const C=g.el=p.el;g.children!==p.children&&c(C,g.children)}},b=(p,g,v,w)=>{p==null?s(g.el=l(g.children||""),v,w):g.el=p.el},R=(p,g,v,w)=>{[p.el,p.anchor]=m(p.children,g,v,w,p.el,p.anchor)},A=({el:p,anchor:g},v,w)=>{let C;for(;p&&p!==g;)C=d(p),s(p,v,w),p=C;s(g,v,w)},P=({el:p,anchor:g})=>{let v;for(;p&&p!==g;)v=d(p),i(p),p=v;i(g)},te=(p,g,v,w,C,x,L,N,O)=>{L=L||g.type==="svg",p==null?de(g,v,w,C,x,L,N,O):Ut(p,g,C,x,L,N,O)},de=(p,g,v,w,C,x,L,N)=>{let O,S;const{type:H,props:$,shapeFlag:W,transition:Y,dirs:se}=p;if(O=p.el=o(p.type,x,$&&$.is,$),W&8?u(O,p.children):W&16&&De(p.children,O,null,w,C,x&&H!=="foreignObject",L,N),se&&vs(p,null,w,"created"),be(O,p,p.scopeId,L,w),$){for(const we in $)we!=="value"&&!ra(we)&&r(O,we,null,$[we],x,p.children,w,C,F);"value"in $&&r(O,"value",null,$.value),(S=$.onVnodeBeforeMount)&&un(S,w,p)}se&&vs(p,null,w,"beforeMount");const Ie=(!C||C&&!C.pendingBranch)&&Y&&!Y.persisted;Ie&&Y.beforeEnter(O),s(O,g,v),((S=$&&$.onVnodeMounted)||Ie||se)&&Ct(()=>{S&&un(S,w,p),Ie&&Y.enter(O),se&&vs(p,null,w,"mounted")},C)},be=(p,g,v,w,C)=>{if(v&&f(p,v),w)for(let x=0;x<w.length;x++)f(p,w[x]);if(C){let x=C.subTree;if(g===x){const L=C.vnode;be(p,L,L.scopeId,L.slotScopeIds,C.parent)}}},De=(p,g,v,w,C,x,L,N,O=0)=>{for(let S=O;S<p.length;S++){const H=p[S]=N?zn(p[S]):hn(p[S]);_(null,H,g,v,w,C,x,L,N)}},Ut=(p,g,v,w,C,x,L)=>{const N=g.el=p.el;let{patchFlag:O,dynamicChildren:S,dirs:H}=g;O|=p.patchFlag&16;const $=p.props||Ae,W=g.props||Ae;let Y;v&&ws(v,!1),(Y=W.onVnodeBeforeUpdate)&&un(Y,v,g,p),H&&vs(g,p,v,"beforeUpdate"),v&&ws(v,!0);const se=C&&g.type!=="foreignObject";if(S?Tt(p.dynamicChildren,S,N,v,w,se,x):L||ve(p,g,N,null,v,w,se,x,!1),O>0){if(O&16)qn(N,g,$,W,v,w,C);else if(O&2&&$.class!==W.class&&r(N,"class",null,W.class,C),O&4&&r(N,"style",$.style,W.style,C),O&8){const Ie=g.dynamicProps;for(let we=0;we<Ie.length;we++){const Ve=Ie[we],zt=$[Ve],si=W[Ve];(si!==zt||Ve==="value")&&r(N,Ve,zt,si,C,p.children,v,w,F)}}O&1&&p.children!==g.children&&u(N,g.children)}else!L&&S==null&&qn(N,g,$,W,v,w,C);((Y=W.onVnodeUpdated)||H)&&Ct(()=>{Y&&un(Y,v,g,p),H&&vs(g,p,v,"updated")},w)},Tt=(p,g,v,w,C,x,L)=>{for(let N=0;N<g.length;N++){const O=p[N],S=g[N],H=O.el&&(O.type===vt||!lr(O,S)||O.shapeFlag&70)?h(O.el):v;_(O,S,H,null,w,C,x,L,!0)}},qn=(p,g,v,w,C,x,L)=>{if(v!==w){if(v!==Ae)for(const N in v)!ra(N)&&!(N in w)&&r(p,N,v[N],null,L,g.children,C,x,F);for(const N in w){if(ra(N))continue;const O=w[N],S=v[N];O!==S&&N!=="value"&&r(p,N,S,O,L,g.children,C,x,F)}"value"in w&&r(p,"value",v.value,w.value)}},ln=(p,g,v,w,C,x,L,N,O)=>{const S=g.el=p?p.el:a(""),H=g.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:Y}=g;Y&&(N=N?N.concat(Y):Y),p==null?(s(S,v,w),s(H,v,w),De(g.children,v,H,C,x,L,N,O)):$>0&&$&64&&W&&p.dynamicChildren?(Tt(p.dynamicChildren,W,v,C,x,L,N),(g.key!=null||C&&g===C.subTree)&&I_(p,g,!0)):ve(p,g,v,H,C,x,L,N,O)},ti=(p,g,v,w,C,x,L,N,O)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?C.ctx.activate(g,v,w,L,O):_s(g,v,w,C,x,L,O):or(p,g,O)},_s=(p,g,v,w,C,x,L)=>{const N=p.component=mT(p,w,C);if(h_(p)&&(N.ctx.renderer=ce),gT(N),N.asyncDep){if(C&&C.registerDep(N,$e),!p.el){const O=N.subTree=Ce(Fs);b(null,O,g,v)}return}$e(N,p,g,v,C,x,L)},or=(p,g,v)=>{const w=g.component=p.component;if(kb(p,g,v))if(w.asyncDep&&!w.asyncResolved){Te(w,g,v);return}else w.next=g,bb(w.update),w.update();else g.el=p.el,w.vnode=g},$e=(p,g,v,w,C,x,L)=>{const N=()=>{if(p.isMounted){let{next:H,bu:$,u:W,parent:Y,vnode:se}=p,Ie=H,we;ws(p,!1),H?(H.el=se.el,Te(p,H,L)):H=se,$&&oa($),(we=H.props&&H.props.onVnodeBeforeUpdate)&&un(we,Y,H,se),ws(p,!0);const Ve=vc(p),zt=p.subTree;p.subTree=Ve,_(zt,Ve,h(zt.el),M(zt),p,C,x),H.el=Ve.el,Ie===null&&Ab(p,Ve.el),W&&Ct(W,C),(we=H.props&&H.props.onVnodeUpdated)&&Ct(()=>un(we,Y,H,se),C)}else{let H;const{el:$,props:W}=g,{bm:Y,m:se,parent:Ie}=p,we=la(g);if(ws(p,!1),Y&&oa(Y),!we&&(H=W&&W.onVnodeBeforeMount)&&un(H,Ie,g),ws(p,!0),$&&ne){const Ve=()=>{p.subTree=vc(p),ne($,p.subTree,p,C,null)};we?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ve()):Ve()}else{const Ve=p.subTree=vc(p);_(null,Ve,v,w,p,C,x),g.el=Ve.el}if(se&&Ct(se,C),!we&&(H=W&&W.onVnodeMounted)){const Ve=g;Ct(()=>un(H,Ie,Ve),C)}(g.shapeFlag&256||Ie&&la(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&p.a&&Ct(p.a,C),p.isMounted=!0,g=v=w=null}},O=p.effect=new wh(N,()=>Rh(S),p.scope),S=p.update=()=>O.run();S.id=p.uid,ws(p,!0),S()},Te=(p,g,v)=>{g.component=p;const w=p.vnode.props;p.vnode=g,p.next=null,Zb(p,g.props,w,v),nT(p,g.children,v),qi(),Df(),Hi()},ve=(p,g,v,w,C,x,L,N,O=!1)=>{const S=p&&p.children,H=p?p.shapeFlag:0,$=g.children,{patchFlag:W,shapeFlag:Y}=g;if(W>0){if(W&128){ys(S,$,v,w,C,x,L,N,O);return}else if(W&256){Wt(S,$,v,w,C,x,L,N,O);return}}Y&8?(H&16&&F(S,C,x),$!==S&&u(v,$)):H&16?Y&16?ys(S,$,v,w,C,x,L,N,O):F(S,C,x,!0):(H&8&&u(v,""),Y&16&&De($,v,w,C,x,L,N,O))},Wt=(p,g,v,w,C,x,L,N,O)=>{p=p||fi,g=g||fi;const S=p.length,H=g.length,$=Math.min(S,H);let W;for(W=0;W<$;W++){const Y=g[W]=O?zn(g[W]):hn(g[W]);_(p[W],Y,v,null,C,x,L,N,O)}S>H?F(p,C,x,!0,!1,$):De(g,v,w,C,x,L,N,O,$)},ys=(p,g,v,w,C,x,L,N,O)=>{let S=0;const H=g.length;let $=p.length-1,W=H-1;for(;S<=$&&S<=W;){const Y=p[S],se=g[S]=O?zn(g[S]):hn(g[S]);if(lr(Y,se))_(Y,se,v,null,C,x,L,N,O);else break;S++}for(;S<=$&&S<=W;){const Y=p[$],se=g[W]=O?zn(g[W]):hn(g[W]);if(lr(Y,se))_(Y,se,v,null,C,x,L,N,O);else break;$--,W--}if(S>$){if(S<=W){const Y=W+1,se=Y<H?g[Y].el:w;for(;S<=W;)_(null,g[S]=O?zn(g[S]):hn(g[S]),v,se,C,x,L,N,O),S++}}else if(S>W)for(;S<=$;)It(p[S],C,x,!0),S++;else{const Y=S,se=S,Ie=new Map;for(S=se;S<=W;S++){const Nt=g[S]=O?zn(g[S]):hn(g[S]);Nt.key!=null&&Ie.set(Nt.key,S)}let we,Ve=0;const zt=W-se+1;let si=!1,Ef=0;const ar=new Array(zt);for(S=0;S<zt;S++)ar[S]=0;for(S=Y;S<=$;S++){const Nt=p[S];if(Ve>=zt){It(Nt,C,x,!0);continue}let cn;if(Nt.key!=null)cn=Ie.get(Nt.key);else for(we=se;we<=W;we++)if(ar[we-se]===0&&lr(Nt,g[we])){cn=we;break}cn===void 0?It(Nt,C,x,!0):(ar[cn-se]=S+1,cn>=Ef?Ef=cn:si=!0,_(Nt,g[cn],v,null,C,x,L,N,O),Ve++)}const bf=si?aT(ar):fi;for(we=bf.length-1,S=zt-1;S>=0;S--){const Nt=se+S,cn=g[Nt],Tf=Nt+1<H?g[Nt+1].el:w;ar[S]===0?_(null,cn,v,Tf,C,x,L,N,O):si&&(we<0||S!==bf[we]?Kt(cn,v,Tf,2):we--)}}},Kt=(p,g,v,w,C=null)=>{const{el:x,type:L,transition:N,children:O,shapeFlag:S}=p;if(S&6){Kt(p.component.subTree,g,v,w);return}if(S&128){p.suspense.move(g,v,w);return}if(S&64){L.move(p,g,v,ce);return}if(L===vt){s(x,g,v);for(let $=0;$<O.length;$++)Kt(O[$],g,v,w);s(p.anchor,g,v);return}if(L===Ec){A(p,g,v);return}if(w!==2&&S&1&&N)if(w===0)N.beforeEnter(x),s(x,g,v),Ct(()=>N.enter(x),C);else{const{leave:$,delayLeave:W,afterLeave:Y}=N,se=()=>s(x,g,v),Ie=()=>{$(x,()=>{se(),Y&&Y()})};W?W(x,se,Ie):Ie()}else s(x,g,v)},It=(p,g,v,w=!1,C=!1)=>{const{type:x,props:L,ref:N,children:O,dynamicChildren:S,shapeFlag:H,patchFlag:$,dirs:W}=p;if(N!=null&&cu(N,null,v,p,!0),H&256){g.ctx.deactivate(p);return}const Y=H&1&&W,se=!la(p);let Ie;if(se&&(Ie=L&&L.onVnodeBeforeUnmount)&&un(Ie,g,p),H&6)I(p.component,v,w);else{if(H&128){p.suspense.unmount(v,w);return}Y&&vs(p,null,g,"beforeUnmount"),H&64?p.type.remove(p,g,v,C,ce,w):S&&(x!==vt||$>0&&$&64)?F(S,g,v,!1,!0):(x===vt&&$&384||!C&&H&16)&&F(O,g,v),w&&ni(p)}(se&&(Ie=L&&L.onVnodeUnmounted)||Y)&&Ct(()=>{Ie&&un(Ie,g,p),Y&&vs(p,null,g,"unmounted")},v)},ni=p=>{const{type:g,el:v,anchor:w,transition:C}=p;if(g===vt){$o(v,w);return}if(g===Ec){P(p);return}const x=()=>{i(v),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:L,delayLeave:N}=C,O=()=>L(v,x);N?N(p.el,x,O):O()}else x()},$o=(p,g)=>{let v;for(;p!==g;)v=d(p),i(p),p=v;i(g)},I=(p,g,v)=>{const{bum:w,scope:C,update:x,subTree:L,um:N}=p;w&&oa(w),C.stop(),x&&(x.active=!1,It(L,p,g,v)),N&&Ct(N,g),Ct(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},F=(p,g,v,w=!1,C=!1,x=0)=>{for(let L=x;L<p.length;L++)It(p[L],g,v,w,C)},M=p=>p.shapeFlag&6?M(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),j=(p,g,v)=>{p==null?g._vnode&&It(g._vnode,null,null,!0):_(g._vnode||null,p,g,null,null,null,v),Df(),r_(),g._vnode=p},ce={p:_,um:It,m:Kt,r:ni,mt:_s,mc:De,pc:ve,pbc:Tt,n:M,o:t};let Me,ne;return e&&([Me,ne]=e(ce)),{render:j,hydrate:Me,createApp:iT(j,Me)}}function ws({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function I_(t,e,n=!1){const s=t.children,i=e.children;if(z(s)&&z(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=zn(i[r]),a.el=o.el),n||I_(o,a)),a.type===vl&&(a.el=o.el)}}function aT(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const lT=t=>t.__isTeleport,vt=Symbol(void 0),vl=Symbol(void 0),Fs=Symbol(void 0),Ec=Symbol(void 0),Sr=[];let Yt=null;function X(t=!1){Sr.push(Yt=t?null:[])}function cT(){Sr.pop(),Yt=Sr[Sr.length-1]||null}let qr=1;function jf(t){qr+=t}function C_(t){return t.dynamicChildren=qr>0?Yt||fi:null,cT(),qr>0&&Yt&&Yt.push(t),t}function pe(t,e,n,s,i,r){return C_(E(t,e,n,s,i,r,!0))}function $t(t,e,n,s,i){return C_(Ce(t,e,n,s,i,!0))}function uu(t){return t?t.__v_isVNode===!0:!1}function lr(t,e){return t.type===e.type&&t.key===e.key}const wl="__vInternal",S_=({key:t})=>t??null,ca=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ke(t)||it(t)||ee(t)?{i:Ot,r:t,k:e,f:!!n}:t:null;function E(t,e=null,n=null,s=0,i=null,r=t===vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&S_(e),ref:e&&ca(e),scopeId:_l,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ot};return a?(Nh(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),qr>0&&!o&&Yt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yt.push(l),l}const Ce=uT;function uT(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Hb)&&(t=Fs),uu(t)){const a=Ci(t,e,!0);return n&&Nh(a,n),qr>0&&!r&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(ET(t)&&(t=t.__vccOpts),e){e=hT(e);let{class:a,style:l}=e;a&&!Ke(a)&&(e.class=mh(a)),Re(l)&&(Gg(l)&&!z(l)&&(l=bt({},l)),e.style=ph(l))}const o=Ke(t)?1:Nb(t)?128:lT(t)?64:Re(t)?4:ee(t)?2:0;return E(t,e,n,s,i,o,r,!0)}function hT(t){return t?Gg(t)||wl in t?bt({},t):t:null}function Ci(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?dT(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&S_(a),ref:e&&e.ref?n&&i?z(i)?i.concat(ca(e)):[i,ca(e)]:ca(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ci(t.ssContent),ssFallback:t.ssFallback&&Ci(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Xe(t=" ",e=0){return Ce(vl,null,t,e)}function nt(t="",e=!1){return e?(X(),$t(Fs,null,t)):Ce(Fs,null,t)}function hn(t){return t==null||typeof t=="boolean"?Ce(Fs):z(t)?Ce(vt,null,t.slice()):typeof t=="object"?zn(t):Ce(vl,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ci(t)}function Nh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Nh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(wl in e)?e._ctx=Ot:i===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),s&64?(n=16,e=[Xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function dT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=mh([e.class,s.class]));else if(i==="style")e.style=ph([e.style,s.style]);else if(ul(i)){const r=e[i],o=s[i];o&&r!==o&&!(z(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function un(t,e,n,s=null){en(t,e,7,[n,s])}const fT=T_();let pT=0;function mT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||fT,r={uid:pT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:v_(s,i),emitsOptions:a_(s,i),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Cb.bind(null,r),t.ce&&t.ce(r),r}let Ue=null;const xh=()=>Ue||Ot,Si=t=>{Ue=t,t.scope.on()},Os=()=>{Ue&&Ue.scope.off(),Ue=null};function R_(t){return t.vnode.shapeFlag&4}let Hr=!1;function gT(t,e=!1){Hr=e;const{props:n,children:s}=t.vnode,i=R_(t);Jb(t,n,i,e),tT(t,s);const r=i?_T(t,e):void 0;return Hr=!1,r}function _T(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qg(new Proxy(t.ctx,Kb));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?vT(t):null;Si(t),qi();const r=ts(s,t,0,[t.props,i]);if(Hi(),Os(),Og(r)){if(r.then(Os,Os),e)return r.then(o=>{qf(t,o,e)}).catch(o=>{ml(o,t,0)});t.asyncDep=r}else qf(t,r,e)}else k_(t,e)}function qf(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=e_(e)),k_(t,n)}let Hf;function k_(t,e,n){const s=t.type;if(!t.render){if(!e&&Hf&&!s.render){const i=s.template||kh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=bt(bt({isCustomElement:r,delimiters:a},o),l);s.render=Hf(i,c)}}t.render=s.render||Zt}Si(t),qi(),zb(t),Hi(),Os()}function yT(t){return new Proxy(t.attrs,{get(e,n){return At(t,"get","$attrs"),e[n]}})}function vT(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=yT(t))},slots:t.slots,emit:t.emit,expose:e}}function El(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(e_(Qg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cr)return Cr[n](t)},has(e,n){return n in e||n in Cr}}))}function wT(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function ET(t){return ee(t)&&"__vccOpts"in t}const Vt=(t,e)=>vb(t,e,Hr);function A_(t,e,n){const s=arguments.length;return s===2?Re(e)&&!z(e)?uu(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&uu(n)&&(n=[n]),Ce(t,e,n))}const N_=Symbol(""),bT=()=>jt(N_),TT="3.2.47",IT="http://www.w3.org/2000/svg",Cs=typeof document<"u"?document:null,Wf=Cs&&Cs.createElement("template"),CT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Cs.createElementNS(IT,t):Cs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Cs.createTextNode(t),createComment:t=>Cs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Wf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Wf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ST(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function RT(t,e,n){const s=t.style,i=Ke(n);if(n&&!i){if(e&&!Ke(e))for(const r in e)n[r]==null&&hu(s,r,"");for(const r in n)hu(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Kf=/\s*!important$/;function hu(t,e,n){if(z(n))n.forEach(s=>hu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=kT(t,e);Kf.test(n)?t.setProperty(zs(s),n.replace(Kf,""),"important"):t[s]=n}}const zf=["Webkit","Moz","ms"],bc={};function kT(t,e){const n=bc[e];if(n)return n;let s=yn(e);if(s!=="filter"&&s in t)return bc[e]=s;s=fl(s);for(let i=0;i<zf.length;i++){const r=zf[i]+s;if(r in t)return bc[e]=r}return e}const Gf="http://www.w3.org/1999/xlink";function AT(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Gf,e.slice(6,e.length)):t.setAttributeNS(Gf,e,n);else{const r=NE(e);n==null||r&&!Ng(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function NT(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ng(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Qn(t,e,n,s){t.addEventListener(e,n,s)}function xT(t,e,n,s){t.removeEventListener(e,n,s)}function OT(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=DT(e);if(s){const c=r[e]=LT(s,i);Qn(t,a,c,l)}else o&&(xT(t,a,o,l),r[e]=void 0)}}const Qf=/(?:Once|Passive|Capture)$/;function DT(t){let e;if(Qf.test(t)){e={};let s;for(;s=t.match(Qf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zs(t.slice(2)),e]}let Tc=0;const PT=Promise.resolve(),MT=()=>Tc||(PT.then(()=>Tc=0),Tc=Date.now());function LT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;en(FT(s,n.value),e,5,[s])};return n.value=t,n.attached=MT(),n}function FT(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Yf=/^on[a-z]/,UT=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?ST(t,s,i):e==="style"?RT(t,n,s):ul(e)?gh(e)||OT(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$T(t,e,s,i))?NT(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),AT(t,e,s,i))};function $T(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Yf.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Yf.test(e)&&Ke(n)?!1:e in t}const Ri=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>oa(e,n):e};function VT(t){t.target.composing=!0}function Xf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const as={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Ri(i);const r=s||i.props&&i.props.type==="number";Qn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=va(a)),t._assign(a)}),n&&Qn(t,"change",()=>{t.value=t.value.trim()}),e||(Qn(t,"compositionstart",VT),Qn(t,"compositionend",Xf),Qn(t,"change",Xf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Ri(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&va(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ia={created(t,{value:e},n){t.checked=Ti(e,n.props.value),t._assign=Ri(n),Qn(t,"change",()=>{t._assign(Wr(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Ri(s),e!==n&&(t.checked=Ti(e,s.props.value))}},x_={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=hl(e);Qn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?va(Wr(o)):Wr(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Ri(s)},mounted(t,{value:e}){Jf(t,e)},beforeUpdate(t,e,n){t._assign=Ri(n)},updated(t,{value:e}){Jf(t,e)}};function Jf(t,e){const n=t.multiple;if(!(n&&!z(e)&&!hl(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Wr(r);if(n)z(e)?r.selected=OE(e,o)>-1:r.selected=e.has(o);else if(Ti(Wr(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Wr(t){return"_value"in t?t._value:t.value}const BT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zf=(t,e)=>n=>{if(!("key"in n))return;const s=zs(n.key);if(e.some(i=>i===s||BT[i]===s))return t(n)},jT=bt({patchProp:UT},CT);let ep;function qT(){return ep||(ep=rT(jT))}const HT=(...t)=>{const e=qT().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=WT(s);if(!i)return;const r=e._component;!ee(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function WT(t){return Ke(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw Wi(e)},Wi=function(t){return new Error("Firebase Database ("+O_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},KT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(D_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},P_=function(t){const e=D_(t);return bl.encodeByteArray(e,!0)},Ca=function(t){return P_(t).replace(/\./g,"")},Sa=function(t){try{return bl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t){return M_(void 0,t)}function M_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!GT(n)||(t[n]=M_(t[n],e[n]));return t}function GT(t){return t!=="__proto__"}/**
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
 */function QT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const YT=()=>QT().__FIREBASE_DEFAULTS__,XT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sa(t[1]);return e&&JSON.parse(e)},Oh=()=>{try{return YT()||XT()||JT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},L_=t=>{var e,n;return(n=(e=Oh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ZT=t=>{const e=L_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},eI=()=>{var t;return(t=Oh())===null||t===void 0?void 0:t.config},F_=t=>{var e;return(e=Oh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function tI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ca(JSON.stringify(n)),Ca(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function nI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function U_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sI(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $_(){return O_.NODE_ADMIN===!0}function V_(){try{return typeof indexedDB=="object"}catch{return!1}}function iI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="FirebaseError";class Tn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rI,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ki.prototype.create)}}class Ki{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?oI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,a,s)}}function oI(t,e){return t.replace(aI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const aI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){return JSON.parse(t)}function st(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=zr(Sa(r[0])||""),n=zr(Sa(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},lI=function(t){const e=B_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},cI=function(t){const e=B_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ki(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function du(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ra(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ka(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(tp(r)&&tp(o)){if(!ka(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function tp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _r(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function yr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function hI(t,e){const n=new dI(t,e);return n.subscribe.bind(n)}class dI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");fI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ic),i.error===void 0&&(i.error=Ic),i.complete===void 0&&(i.complete=Ic);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ic(){}function pI(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,D(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bs="[DEFAULT]";/**
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
 */class gI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Kr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yI(e))try{this.getOrInitializeService({instanceIdentifier:bs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bs){return this.instances.has(e)}getOptions(e=bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_I(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=bs){return this.component?this.component.multipleInstances?e:bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _I(t){return t===bs?void 0:t}function yI(t){return t.instantiationMode==="EAGER"}/**
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
 */class vI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const wI={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},EI=fe.INFO,bI={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},TI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=bI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fo{constructor(e){this.name=e,this._logLevel=EI,this._logHandler=TI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const II=(t,e)=>e.some(n=>t instanceof n);let np,sp;function CI(){return np||(np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SI(){return sp||(sp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j_=new WeakMap,fu=new WeakMap,q_=new WeakMap,Cc=new WeakMap,Ph=new WeakMap;function RI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ns(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&j_.set(n,t)}).catch(()=>{}),Ph.set(e,t),e}function kI(t){if(fu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});fu.set(t,e)}let pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||q_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ns(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AI(t){pu=t(pu)}function NI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Sc(this),e,...n);return q_.set(s,e.sort?e.sort():[e]),ns(s)}:SI().includes(t)?function(...e){return t.apply(Sc(this),e),ns(j_.get(this))}:function(...e){return ns(t.apply(Sc(this),e))}}function xI(t){return typeof t=="function"?NI(t):(t instanceof IDBTransaction&&kI(t),II(t,CI())?new Proxy(t,pu):t)}function ns(t){if(t instanceof IDBRequest)return RI(t);if(Cc.has(t))return Cc.get(t);const e=xI(t);return e!==t&&(Cc.set(t,e),Ph.set(e,t)),e}const Sc=t=>Ph.get(t);function OI(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ns(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ns(o.result),l.oldVersion,l.newVersion,ns(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const DI=["get","getKey","getAll","getAllKeys","count"],PI=["put","add","delete","clear"],Rc=new Map;function ip(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rc.get(e))return Rc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=PI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||DI.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Rc.set(e,r),r}AI(t=>({...t,get:(e,n,s)=>ip(e,n)||t.get(e,n,s),has:(e,n)=>!!ip(e,n)||t.has(e,n)}));/**
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
 */class MI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function LI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mu="@firebase/app",rp="0.9.3";/**
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
 */const Us=new fo("@firebase/app"),FI="@firebase/app-compat",UI="@firebase/analytics-compat",$I="@firebase/analytics",VI="@firebase/app-check-compat",BI="@firebase/app-check",jI="@firebase/auth",qI="@firebase/auth-compat",HI="@firebase/database",WI="@firebase/database-compat",KI="@firebase/functions",zI="@firebase/functions-compat",GI="@firebase/installations",QI="@firebase/installations-compat",YI="@firebase/messaging",XI="@firebase/messaging-compat",JI="@firebase/performance",ZI="@firebase/performance-compat",eC="@firebase/remote-config",tC="@firebase/remote-config-compat",nC="@firebase/storage",sC="@firebase/storage-compat",iC="@firebase/firestore",rC="@firebase/firestore-compat",oC="firebase",aC="9.17.1";/**
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
 */const gu="[DEFAULT]",lC={[mu]:"fire-core",[FI]:"fire-core-compat",[$I]:"fire-analytics",[UI]:"fire-analytics-compat",[BI]:"fire-app-check",[VI]:"fire-app-check-compat",[jI]:"fire-auth",[qI]:"fire-auth-compat",[HI]:"fire-rtdb",[WI]:"fire-rtdb-compat",[KI]:"fire-fn",[zI]:"fire-fn-compat",[GI]:"fire-iid",[QI]:"fire-iid-compat",[YI]:"fire-fcm",[XI]:"fire-fcm-compat",[JI]:"fire-perf",[ZI]:"fire-perf-compat",[eC]:"fire-rc",[tC]:"fire-rc-compat",[nC]:"fire-gcs",[sC]:"fire-gcs-compat",[iC]:"fire-fst",[rC]:"fire-fst-compat","fire-js":"fire-js",[oC]:"fire-js-all"};/**
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
 */const Aa=new Map,_u=new Map;function cC(t,e){try{t.container.addComponent(e)}catch(n){Us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(_u.has(e))return Us.debug(`There were multiple attempts to register component ${e}.`),!1;_u.set(e,t);for(const n of Aa.values())cC(n,t);return!0}function Mh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const uC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ss=new Ki("app","Firebase",uC);/**
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
 */class hC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ss.create("app-deleted",{appName:this._name})}}/**
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
 */const Gs=aC;function H_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:gu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ss.create("bad-app-name",{appName:String(i)});if(n||(n=eI()),!n)throw ss.create("no-options");const r=Aa.get(i);if(r){if(ka(n,r.options)&&ka(s,r.config))return r;throw ss.create("duplicate-app",{appName:i})}const o=new vI(i);for(const l of _u.values())o.addComponent(l);const a=new hC(n,s,o);return Aa.set(i,a),a}function Lh(t=gu){const e=Aa.get(t);if(!e&&t===gu)return H_();if(!e)throw ss.create("no-app",{appName:t});return e}function Mt(t,e,n){var s;let i=(s=lC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Us.warn(a.join(" "));return}vn(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dC="firebase-heartbeat-database",fC=1,Gr="firebase-heartbeat-store";let kc=null;function W_(){return kc||(kc=OI(dC,fC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gr)}}}).catch(t=>{throw ss.create("idb-open",{originalErrorMessage:t.message})})),kc}async function pC(t){try{return(await W_()).transaction(Gr).objectStore(Gr).get(K_(t))}catch(e){if(e instanceof Tn)Us.warn(e.message);else{const n=ss.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Us.warn(n.message)}}}async function op(t,e){try{const s=(await W_()).transaction(Gr,"readwrite");return await s.objectStore(Gr).put(e,K_(t)),s.done}catch(n){if(n instanceof Tn)Us.warn(n.message);else{const s=ss.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Us.warn(s.message)}}}function K_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mC=1024,gC=30*24*60*60*1e3;class _C{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ap();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=gC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ap(),{heartbeatsToSend:n,unsentEntries:s}=yC(this._heartbeatsCache.heartbeats),i=Ca(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ap(){return new Date().toISOString().substring(0,10)}function yC(t,e=mC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),lp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return V_()?iI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lp(t){return Ca(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wC(t){vn(new sn("platform-logger",e=>new MI(e),"PRIVATE")),vn(new sn("heartbeat",e=>new _C(e),"PRIVATE")),Mt(mu,rp,t),Mt(mu,rp,"esm2017"),Mt("fire-js","")}wC("");function Fh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function z_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EC=z_,G_=new Ki("auth","Firebase",z_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=new fo("@firebase/auth");function ua(t,...e){cp.logLevel<=fe.ERROR&&cp.error(`Auth (${Gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,...e){throw Uh(t,...e)}function mn(t,...e){return Uh(t,...e)}function bC(t,e,n){const s=Object.assign(Object.assign({},EC()),{[e]:n});return new Ki("auth","Firebase",s).create(e,{appName:t.name})}function Uh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return G_.create(t,...e)}function K(t,e,...n){if(!t)throw Uh(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ua(e),new Error(e)}function Ln(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new Map;function An(t){Ln(t instanceof Function,"Expected a class definition");let e=up.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,up.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e){const n=Mh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ka(r,e??{}))return i;rn(i,"already-initialized")}return n.initialize({options:e})}function IC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CC(){return hp()==="http:"||hp()==="https:"}function hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CC()||nI()||"connection"in navigator)?navigator.onLine:!0}function RC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=Dh()||U_()}get(){return SC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=new po(3e4,6e4);function Il(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gi(t,e,n,s,i={}){return Y_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=zi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Q_.fetch()(X_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Y_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},kC),e);try{const i=new NC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ko(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ko(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ko(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ko(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bC(t,u,c);rn(t,u)}}catch(i){if(i instanceof Tn)throw i;rn(t,"network-request-failed")}}async function Cl(t,e,n,s,i={}){const r=await Gi(t,e,n,s,i);return"mfaPendingCredential"in r&&rn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function X_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?$h(t.config,i):`${t.config.apiScheme}://${i}`}class NC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(mn(this.auth,"network-request-failed")),AC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ko(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=mn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e){return Gi(t,"POST","/v1/accounts:delete",e)}async function OC(t,e){return Gi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DC(t,e=!1){const n=Le(t),s=await n.getIdToken(e),i=Vh(s);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Rr(Ac(i.auth_time)),issuedAtTime:Rr(Ac(i.iat)),expirationTime:Rr(Ac(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function Vh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sa(n);return i?JSON.parse(i):(ua("Failed to decode base64 JWT payload"),null)}catch(i){return ua("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function PC(t){const e=Vh(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Tn&&MC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function MC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Na(t){var e;const n=t.auth,s=await t.getIdToken(),i=await $s(t,OC(n,{idToken:s}));K(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?$C(r.providerUserInfo):[],a=UC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new J_(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function FC(t){const e=Le(t);await Na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function $C(t){return t.map(e=>{var{providerId:n}=e,s=Fh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t,e){const n=await Y_(t,{},async()=>{const s=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=X_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Q_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await VC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Qr;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(K(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ds{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Fh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new J_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await $s(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DC(this,e)}reload(){return FC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ds(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Na(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $s(this,xC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:P,isAnonymous:te,providerData:de,stsTokenManager:be}=n;K(A&&be,e,"internal-error");const De=Qr.fromJSON(this.name,be);K(typeof A=="string",e,"internal-error"),Wn(h,e.name),Wn(d,e.name),K(typeof P=="boolean",e,"internal-error"),K(typeof te=="boolean",e,"internal-error"),Wn(f,e.name),Wn(m,e.name),Wn(_,e.name),Wn(y,e.name),Wn(b,e.name),Wn(R,e.name);const Ut=new Ds({uid:A,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:te,photoURL:m,phoneNumber:f,tenantId:_,stsTokenManager:De,createdAt:b,lastLoginAt:R});return de&&Array.isArray(de)&&(Ut.providerData=de.map(Tt=>Object.assign({},Tt))),y&&(Ut._redirectEventId=y),Ut}static async _fromIdTokenResponse(e,n,s=!1){const i=new Qr;i.updateFromServerResponse(n);const r=new Ds({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Na(r),r}}/**
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
 */class Z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Z_.type="NONE";const dp=Z_;/**
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
 */function ha(t,e,n){return`firebase:${t}:${e}:${n}`}class _i{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ha(this.userKey,i.apiKey,r),this.fullPersistenceKey=ha("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ds._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new _i(An(dp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||An(dp);const o=ha(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ds._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new _i(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new _i(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ny(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ey(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iy(e))return"Blackberry";if(ry(e))return"Webos";if(Bh(e))return"Safari";if((e.includes("chrome/")||ty(e))&&!e.includes("edge/"))return"Chrome";if(sy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ey(t=gt()){return/firefox\//i.test(t)}function Bh(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ty(t=gt()){return/crios\//i.test(t)}function ny(t=gt()){return/iemobile/i.test(t)}function sy(t=gt()){return/android/i.test(t)}function iy(t=gt()){return/blackberry/i.test(t)}function ry(t=gt()){return/webos/i.test(t)}function Sl(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BC(t=gt()){var e;return Sl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jC(){return sI()&&document.documentMode===10}function oy(t=gt()){return Sl(t)||sy(t)||ry(t)||iy(t)||/windows phone/i.test(t)||ny(t)}function qC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t,e=[]){let n;switch(t){case"Browser":n=fp(gt());break;case"Worker":n=`${fp(gt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${s}`}/**
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
 */class HC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pp(this),this.idTokenSubscription=new pp(this),this.beforeStateQueue=new HC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Le(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ki("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ay(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Rl(t){return Le(t)}class pp{constructor(e){this.auth=e,this.observer=null,this.addObserver=hI(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function KC(t,e,n){const s=Rl(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=ly(e),{host:o,port:a}=zC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||GC()}function ly(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zC(t){const e=ly(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:mp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:mp(o)}}}function mp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}async function cy(t,e){return Gi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e){return Cl(t,"POST","/v1/accounts:signInWithPassword",Il(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",Il(t,e))}async function XC(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",Il(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends jh{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Yr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return QC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return YC(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return cy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return XC(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t,e){return Cl(t,"POST","/v1/accounts:signInWithIdp",Il(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="http://localhost";class Vs extends jh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Fh(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Vs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,yi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yi(e,n)}buildRequest(){const e={requestUri:JC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eS(t){const e=_r(yr(t)).link,n=e?_r(yr(e)).deep_link_id:null,s=_r(yr(t)).deep_link_id;return(s?_r(yr(s)).link:null)||s||n||e||t}class qh{constructor(e){var n,s,i,r,o,a;const l=_r(yr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=ZC((i=l.mode)!==null&&i!==void 0?i:null);K(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eS(e);try{return new qh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.providerId=Qi.PROVIDER_ID}static credential(e,n){return Yr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=qh.parseLink(n);return K(s,"argument-error"),Yr._fromEmailAndCode(e,s.code,s.tenantId)}}Qi.PROVIDER_ID="password";Qi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mo extends uy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends mo{constructor(){super("facebook.com")}static credential(e){return Vs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vs._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Xn.credential(n,s)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends mo{constructor(){super("github.com")}static credential(e){return Vs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends mo{constructor(){super("twitter.com")}static credential(e,n){return Vs._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Zn.credential(n,s)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ds._fromIdTokenResponse(e,s,i),o=gp(s);return new Ai({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=gp(s);return new Ai({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function gp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends Tn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,xa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new xa(e,n,s,i)}}function hy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?xa._fromErrorAndOperation(t,r,e,s):r})}async function tS(t,e,n=!1){const s=await $s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ai._forOperation(t,"link",s)}/**
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
 */async function nS(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await $s(t,hy(s,i,e,t),n);K(r.idToken,s,"internal-error");const o=Vh(r.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),Ai._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&rn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(t,e,n=!1){const s="signIn",i=await hy(t,s,e),r=await Ai._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function sS(t,e){return dy(Rl(t),e)}function iS(t,e,n){return sS(Le(t),Qi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e){return Gi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bU(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Le(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await $s(s,rS(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function TU(t,e){return fy(Le(t),e,null)}function IU(t,e){return fy(Le(t),null,e)}async function fy(t,e,n){const{auth:s}=t,r={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(r.email=e),n&&(r.password=n);const o=await $s(t,cy(s,r));await t._updateTokensIfNecessary(o,!0)}function py(t,e,n,s){return Le(t).onIdTokenChanged(e,n,s)}function oS(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function CU(t){return Le(t).signOut()}const Oa="__sak";/**
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
 */class my{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(){const t=gt();return Bh(t)||Sl(t)}const lS=1e3,cS=10;class gy extends my{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aS()&&qC(),this.fallbackToPolling=oy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);jC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cS):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},lS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gy.type="LOCAL";const uS=gy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y extends my{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_y.type="SESSION";const yy=_y;/**
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
 */function hS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new kl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await hS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Hh("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function fS(t){gn().location.href=t}/**
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
 */function vy(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function pS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gS(){return vy()?self:null}/**
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
 */const wy="firebaseLocalStorageDb",_S=1,Da="firebaseLocalStorage",Ey="fbase_key";class go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Al(t,e){return t.transaction([Da],e?"readwrite":"readonly").objectStore(Da)}function yS(){const t=indexedDB.deleteDatabase(wy);return new go(t).toPromise()}function vu(){const t=indexedDB.open(wy,_S);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Da,{keyPath:Ey})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Da)?e(s):(s.close(),await yS(),e(await vu()))})})}async function _p(t,e,n){const s=Al(t,!0).put({[Ey]:e,value:n});return new go(s).toPromise()}async function vS(t,e){const n=Al(t,!1).get(e),s=await new go(n).toPromise();return s===void 0?null:s.value}function yp(t,e){const n=Al(t,!0).delete(e);return new go(n).toPromise()}const wS=800,ES=3;class by{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ES)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kl._getInstance(gS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pS(),!this.activeServiceWorker)return;this.sender=new dS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vu();return await _p(e,Oa,"1"),await yp(e,Oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_p(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>vS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Al(i,!1).getAll();return new go(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}by.type="LOCAL";const bS=by;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function IS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=mn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",TS().appendChild(s)})}function CS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new po(3e4,6e4);/**
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
 */function SS(t,e){return e?An(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Wh extends jh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RS(t){return dy(t.auth,new Wh(t),t.bypassAuthState)}function kS(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),nS(n,new Wh(t),t.bypassAuthState)}async function AS(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),tS(n,new Wh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RS;case"linkViaPopup":case"linkViaRedirect":return AS;case"reauthViaPopup":case"reauthViaRedirect":return kS;default:rn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=new po(2e3,1e4);class ci extends Ty{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Hh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,NS.get())};e()}}ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="pendingRedirect",da=new Map;class OS extends Ty{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=da.get(this.auth._key());if(!e){try{const s=await DS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}da.set(this.auth._key(),e)}return this.bypassAuthState||da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DS(t,e){const n=LS(e),s=MS(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function PS(t,e){da.set(t._key(),e)}function MS(t){return An(t._redirectPersistence)}function LS(t){return ha(xS,t.config.apiKey,t.name)}async function FS(t,e,n=!1){const s=Rl(t),i=SS(s,e),o=await new OS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=10*60*1e3;class $S{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Iy(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=US&&this.cachedEventUids.clear(),this.cachedEventUids.has(vp(e))}saveEventToCache(e){this.cachedEventUids.add(vp(e)),this.lastProcessedEventTime=Date.now()}}function vp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Iy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Iy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(t,e={}){return Gi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qS=/^https?/;async function HS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BS(t);for(const n of e)try{if(WS(n))return}catch{}rn(t,"unauthorized-domain")}function WS(t){const e=yu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!qS.test(n))return!1;if(jS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const KS=new po(3e4,6e4);function wp(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zS(t){return new Promise((e,n)=>{var s,i,r;function o(){wp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wp(),n(mn(t,"network-request-failed"))},timeout:KS.get()})}if(!((i=(s=gn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=gn().gapi)===null||r===void 0)&&r.load)o();else{const a=CS("iframefcb");return gn()[a]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},IS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fa=null,e})}let fa=null;function GS(t){return fa=fa||zS(t),fa}/**
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
 */const QS=new po(5e3,15e3),YS="__/auth/iframe",XS="emulator/auth/iframe",JS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eR(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$h(e,XS):`https://${t.config.authDomain}/${YS}`,s={apiKey:e.apiKey,appName:t.name,v:Gs},i=ZS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${zi(s).slice(1)}`}async function tR(t){const e=await GS(t),n=gn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:eR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),a=gn().setTimeout(()=>{r(o)},QS.get());function l(){gn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const nR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sR=500,iR=600,rR="_blank",oR="http://localhost";class Ep{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aR(t,e,n,s=sR,i=iR){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nR),{width:s.toString(),height:i.toString(),top:r,left:o}),c=gt().toLowerCase();n&&(a=ty(c)?rR:n),ey(c)&&(e=e||oR,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(BC(c)&&a!=="_self")return lR(e||"",a),new Ep(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Ep(h)}function lR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const cR="__/auth/handler",uR="emulator/auth/handler";function bp(t,e,n,s,i,r){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Gs,eventId:i};if(e instanceof uy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",du(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof mo){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${hR(t)}?${zi(a).slice(1)}`}function hR({config:t}){return t.emulator?$h(t,uR):`https://${t.authDomain}/${cR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="webStorageSupport";class dR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yy,this._completeRedirectFn=FS,this._overrideRedirectResult=PS}async _openPopup(e,n,s,i){var r;Ln((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=bp(e,n,s,yu(),i);return aR(e,o,Hh())}async _openRedirect(e,n,s,i){return await this._originValidation(e),fS(bp(e,n,s,yu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await tR(e),s=new $S(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nc,{type:Nc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Nc];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oy()||Bh()||Sl()}}const fR=dR;var Tp="@firebase/auth",Ip="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gR(t){vn(new sn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{K(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ay(t)},u=new WC(a,l,c);return IC(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),vn(new sn("auth-internal",e=>{const n=Rl(e.getProvider("auth").getImmediate());return(s=>new pR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(Tp,Ip,mR(t)),Mt(Tp,Ip,"esm2017")}/**
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
 */const _R=5*60,yR=F_("authIdTokenMaxAge")||_R;let Cp=null;const vR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>yR)return;const i=n==null?void 0:n.token;Cp!==i&&(Cp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Cy(t=Lh()){const e=Mh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TC(t,{popupRedirectResolver:fR,persistence:[bS,uS,yy]}),s=F_("authTokenSyncURL");if(s){const r=vR(s);oS(n,r,()=>r(n.currentUser)),py(n,o=>r(o))}const i=L_("auth");return i&&KC(n,`http://${i}`),n}gR("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=new Map,ER={activated:!1,tokenObservers:[]};function wn(t){return wR.get(t)||Object.assign({},ER)}const Sp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Kr,await TR(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Kr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function TR(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Pa=new Ki("appCheck","AppCheck",IR);function CR(t){if(!wn(t).activated)throw Pa.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="firebase-app-check-database",RR=1,wu="firebase-app-check-store";let zo=null;function kR(){return zo||(zo=new Promise((t,e)=>{try{const n=indexedDB.open(SR,RR);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Pa.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(wu,{keyPath:"compositeKey"})}}}catch(n){e(Pa.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),zo)}function AR(t,e){return NR(xR(t),e)}async function NR(t,e){const s=(await kR()).transaction(wu,"readwrite"),r=s.objectStore(wu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Pa.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function xR(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new fo("@firebase/app-check");function Rp(t,e){return V_()?AR(t,e).catch(n=>{Eu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR={error:"UNKNOWN_ERROR"};function DR(t){return bl.encodeString(JSON.stringify(t),!1)}async function bu(t,e=!1){const n=t.app;CR(n);const s=wn(n);let i=s.token,r;if(i&&!vr(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(vr(l)?i=l:await Rp(n,void 0))}if(!e&&i&&vr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await wn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Eu.warn(l.message):Eu.error(l),r=l}let a;return i?r?vr(i)?a={token:i.token,internalError:r}:a=Ap(r):(a={token:i.token},s.token=i,await Rp(n,i)):a=Ap(r),o&&LR(n,a),a}function PR(t,e,n,s){const{app:i}=t,r=wn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&vr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),kp(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>kp(t))}function Sy(t,e){const n=wn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function kp(t){const{app:e}=t,n=wn(e);let s=n.tokenRefresher;s||(s=MR(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function MR(t){const{app:e}=t;return new bR(async()=>{const n=wn(e);let s;if(n.token?s=await bu(t,!0):s=await bu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=wn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Sp.RETRIAL_MIN_WAIT,Sp.RETRIAL_MAX_WAIT)}function LR(t,e){const n=wn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function vr(t){return t.expireTimeMillis-Date.now()>0}function Ap(t){return{token:DR(OR),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=wn(this.app);for(const n of e)Sy(this.app,n.next);return Promise.resolve()}}function UR(t,e){return new FR(t,e)}function $R(t){return{getToken:e=>bu(t,e),addTokenListener:e=>PR(t,"INTERNAL",e),removeTokenListener:e=>Sy(t.app,e)}}const VR="@firebase/app-check",BR="0.6.3",jR="app-check",Np="app-check-internal";function qR(){vn(new sn(jR,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return UR(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Np).initialize()})),vn(new sn(Np,t=>{const e=t.getProvider("app-check").getImmediate();return $R(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Mt(VR,BR)}qR();var HR="firebase",WR="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(HR,WR,"app");const Ry=Symbol("firebaseApp");function Nl(t){return xh()&&jt(Ry,null)||Lh(t)}const Nn=()=>{};function Kh(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function KR(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Qs(t){return!!t&&typeof t=="object"}const zR=Object.prototype;function GR(t){return Qs(t)&&Object.getPrototypeOf(t)===zR}function zh(t){return Qs(t)&&t.type==="document"}function QR(t){return Qs(t)&&t.type==="collection"}function YR(t){return zh(t)||QR(t)}function XR(t){return Qs(t)&&t.type==="query"}function JR(t){return Qs(t)&&"ref"in t}function ZR(t){return Qs(t)&&typeof t.bucket=="string"}function ek(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function tk(){return!!(xh()&&jt(N_,null))}const Go=new WeakMap;function nk(t,e){if(!Go.has(t)){const n=VE(!0);Go.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Go.delete(t)}}return Go.get(t)}const sk=new WeakMap,Qo=new WeakMap;function ky(t){const e=Nl(t);if(!Qo.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{Qo.set(e,r),n(r.value)}];Qo.set(e,i)}return Qo.get(e)}function Ay(t){const e=ky(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function ik(t,e){const n=Cy(e);py(n,s=>{const i=ky();t.value=s,Array.isArray(i)&&i[1](t)})}const xp="@firebase/database",Op="0.14.3";/**
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
 */let Ny="";function rk(t){Ny=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),st(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:zr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return jn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ok(e)}}catch{}return new ak},Rs=xy("localStorage"),Tu=xy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new fo("@firebase/database"),lk=function(){let t=1;return function(){return t++}}(),Oy=function(t){const e=mI(t),n=new uI;n.update(e);const s=n.digest();return bl.encodeByteArray(s)},_o=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=_o.apply(null,s):typeof s=="object"?e+=st(s):e+=s,e+=" "}return e};let Ps=null,Dp=!0;const ck=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(vi.logLevel=fe.VERBOSE,Ps=vi.log.bind(vi),e&&Tu.set("logging_enabled",!0)):typeof t=="function"?Ps=t:(Ps=null,Tu.remove("logging_enabled"))},lt=function(...t){if(Dp===!0&&(Dp=!1,Ps===null&&Tu.get("logging_enabled")===!0&&ck(!0)),Ps){const e=_o.apply(null,t);Ps(e)}},yo=function(t){return function(...e){lt(t,...e)}},Iu=function(...t){const e="FIREBASE INTERNAL ERROR: "+_o(...t);vi.error(e)},Bs=function(...t){const e=`FIREBASE FATAL ERROR: ${_o(...t)}`;throw vi.error(e),new Error(e)},Lt=function(...t){const e="FIREBASE WARNING: "+_o(...t);vi.warn(e)},uk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ni="[MIN_NAME]",js="[MAX_NAME]",Yi=function(t,e){if(t===e)return 0;if(t===Ni||e===js)return-1;if(e===Ni||t===js)return 1;{const n=Pp(t),s=Pp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},dk=function(t,e){return t===e?0:t<e?-1:1},cr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+st(e))},Gh=function(t){if(typeof t!="object"||t===null)return st(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=st(e[s]),n+=":",n+=Gh(t[e[s]]);return n+="}",n},Py=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const My=function(t){D(!Dy(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},fk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},mk=new RegExp("^-?(0*)\\d{1,10}$"),gk=-2147483648,_k=2147483647,Pp=function(t){if(mk.test(t)){const e=Number(t);if(e>=gk&&e<=_k)return e}return null},vo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},yk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},kr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class vk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Lt(e)}}class Cu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Cu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="5",Ly="v",Fy="s",Uy="r",$y="f",Vy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,By="ls",jy="p",Su="ac",qy="websocket",Hy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function bk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Wy(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===qy)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Hy)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bk(t)&&(n.ns=t.namespace);const i=[];return Ht(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.counters_={}}incrementCounter(e,n=1){jn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc={},Oc={};function Yh(t){const e=t.toString();return xc[e]||(xc[e]=new Tk),xc[e]}function Ik(t,e){const n=t.toString();return Oc[n]||(Oc[n]=e()),Oc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&vo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="start",Sk="close",Rk="pLPCommand",kk="pRTLPCB",Ky="id",zy="pw",Gy="ser",Ak="cb",Nk="seg",xk="ts",Ok="d",Dk="dframe",Qy=1870,Yy=30,Pk=Qy-Yy,Mk=25e3,Lk=3e4;class ui{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yo(e),this.stats_=Yh(n),this.urlFn=l=>(this.appCheckToken&&(l[Su]=this.appCheckToken),Wy(n,Hy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ck(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Lk)),hk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xh((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mp)this.id=a,this.password=l;else if(o===Sk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Mp]="t",s[Gy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ak]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ly]=Qh,this.transportSessionId&&(s[Fy]=this.transportSessionId),this.lastSessionId&&(s[By]=this.lastSessionId),this.applicationId&&(s[jy]=this.applicationId),this.appCheckToken&&(s[Su]=this.appCheckToken),typeof location<"u"&&location.hostname&&Vy.test(location.hostname)&&(s[Uy]=$y);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fk()&&!pk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=P_(n),i=Py(s,Pk);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Dk]="t",s[Ky]=e,s[zy]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=st(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xh{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lk(),window[Rk+this.uniqueCallbackIdentifier]=e,window[kk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){lt("frame writing exception"),a.stack&&lt(a.stack),lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ky]=this.myID,e[zy]=this.myPW,e[Gy]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yy+s.length<=Qy;){const o=this.pendingSegs.shift();s=s+"&"+Nk+i+"="+o.seg+"&"+xk+i+"="+o.ts+"&"+Ok+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Mk)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=16384,Uk=45e3;let Ma=null;typeof MozWebSocket<"u"?Ma=MozWebSocket:typeof WebSocket<"u"&&(Ma=WebSocket);class Qt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yo(this.connId),this.stats_=Yh(n),this.connURL=Qt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ly]=Qh,typeof location<"u"&&location.hostname&&Vy.test(location.hostname)&&(o[Uy]=$y),n&&(o[Fy]=n),s&&(o[By]=s),i&&(o[Su]=i),r&&(o[jy]=r),Wy(e,qy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rs.set("previous_websocket_failure",!0);try{let s;$_(),this.mySock=new Ma(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ma!==null&&!Qt.forceDisallow_}static previouslyFailed(){return Rs.isInMemoryStorage||Rs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=zr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Py(n,Fk);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Uk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ui,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qt&&Qt.isAvailable();let s=n&&!Qt.previouslyFailed();if(e.webSocketOnly&&(n||Lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Qt];else{const i=this.transports_=[];for(const r of Xr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Xr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=6e4,Vk=5e3,Bk=10*1024,jk=100*1024,Dc="t",Lp="d",qk="s",Fp="r",Hk="e",Up="o",$p="a",Vp="n",Bp="p",Wk="h";class Kk{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yo("c:"+this.id+":"),this.transportManager_=new Xr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=kr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Bk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Dc in e){const n=e[Dc];n===$p?this.upgradeIfSecondaryHealthy_():n===Fp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Up&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=cr("t",e),s=cr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$p,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=cr("t",e),s=cr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=cr(Dc,e);if(Lp in e){const s=e[Lp];if(n===Wk){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Vp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qk?this.onConnectionShutdown_(s):n===Fp?this.onReset_(s):n===Hk?Iu("Server Error: "+s):n===Up?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Iu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qh!==s&&Lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),kr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($k))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):kr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Vk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends Jy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Dh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new La}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=32,qp=768;class Oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ee(){return new Oe("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ls(t){return t.pieces_.length-t.pieceNum_}function Ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Oe(t.pieces_,e)}function Zy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ev(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function tv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Oe(e,0)}function Je(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Oe(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function Bt(t,e){const n=ae(t),s=ae(e);if(n===null)return e;if(n===s)return Bt(Ne(t),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function nv(t,e){if(ls(t)!==ls(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ls(t)>ls(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Gk{constructor(e,n){this.errorPrefix_=n,this.parts_=ev(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Tl(this.parts_[s]);sv(this)}}function Qk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Tl(e),sv(t)}function Yk(t){const e=t.parts_.pop();t.byteLength_-=Tl(e),t.parts_.length>0&&(t.byteLength_-=1)}function sv(t){if(t.byteLength_>qp)throw new Error(t.errorPrefix_+"has a key path longer than "+qp+" bytes ("+t.byteLength_+").");if(t.parts_.length>jp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jp+") or object contains a cycle "+Ts(t))}function Ts(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh extends Jy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Jh}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=1e3,Xk=60*5*1e3,Hp=30*1e3,Jk=1.3,Zk=3e4,eA="server_kill",Wp=3;class Dn extends Xy{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Dn.nextPersistentConnectionId_++,this.log_=yo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ur,this.maxReconnectDelay_=Xk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!$_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&La.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(st(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Kr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Dn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&jn(e,"w")){const s=ki(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=lI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+st(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Iu("Unrecognized action received from server: "+st(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ur,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ur,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Zk&&(this.reconnectDelay_=ur),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Jk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Kk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Lt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(eA)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Lt(h),l())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],du(this.interruptReasons_)&&(this.reconnectDelay_=ur,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Gh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wp&&(this.reconnectDelay_=Hp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ny.replace(/\./g,"-")]=1,Dh()?e["framework.cordova"]=1:U_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=La.getInstance().currentlyOnline();return du(this.interruptReasons_)&&e}}Dn.nextPersistentConnectionId_=0;Dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new le(Ni,e),i=new le(Ni,n);return this.compare(s,i)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo;class iv extends xl{static get __EMPTY_NODE(){return Yo}static set __EMPTY_NODE(e){Yo=e}compare(e,n){return Yi(e.name,n.name)}isDefinedOn(e){throw Wi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(js,Yo)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,Yo)}toString(){return".key"}}const wi=new iv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=i??kt.EMPTY_NODE,this.right=r??kt.EMPTY_NODE}copy(e,n,s,i,r){return new Ye(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return kt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class tA{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kt{constructor(e,n=kt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new kt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xo(this.root_,null,this.comparator_,!0,e)}}kt.EMPTY_NODE=new tA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t,e){return Yi(t.name,e.name)}function Zh(t,e){return Yi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru;function sA(t){Ru=t}const rv=function(t){return typeof t=="number"?"number:"+My(t):"string:"+t},ov=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&jn(e,".sv"),"Priority must be a string or number.")}else D(t===Ru||t.isEmpty(),"priority of unexpected type.");D(t===Ru||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kp;class Ge{constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ov(this.priorityNode_)}static set __childrenNodeConstructor(e){Kp=e}static get __childrenNodeConstructor(){return Kp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ae(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ae(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||ls(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=My(this.value_):e+=this.value_,this.lazyHash_=Oy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ge.VALUE_TYPE_ORDER.indexOf(n),r=Ge.VALUE_TYPE_ORDER.indexOf(s);return D(i>=0,"Unknown leaf type: "+n),D(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let av,lv;function iA(t){av=t}function rA(t){lv=t}class oA extends xl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Yi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(js,new Ge("[PRIORITY-POST]",lv))}makePost(e,n){const s=av(e);return new le(n,new Ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const ft=new oA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=Math.log(2);class lA{constructor(e){const n=r=>parseInt(Math.log(r)/aA,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fa=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ye(d,h.node,Ye.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),_=i(f+1,c);return h=t[f],d=n?n(h):h,new Ye(d,h.node,Ye.BLACK,m,_)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,_){const y=h-m,b=h;h-=m;const R=i(y+1,b),A=t[y],P=n?n(A):A;f(new Ye(P,A.node,_,null,R))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),y=Math.pow(2,l.count-(m+1));_?d(y,Ye.BLACK):(d(y,Ye.BLACK),d(y,Ye.RED))}return u},o=new lA(t.length),a=r(o);return new kt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc;const ii={};class xn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(ii&&ft,"ChildrenNode.ts has not been loaded"),Pc=Pc||new xn({".priority":ii},{".priority":ft}),Pc}get(e){const n=ki(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof kt?n:null}hasIndex(e){return jn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==wi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(le.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Fa(s,e.getCompare()):a=ii;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new xn(u,c)}addToIndexes(e,n){const s=Ra(this.indexes_,(i,r)=>{const o=ki(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),i===ii)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(le.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Fa(a,o.getCompare())}else return ii;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new le(e.name,a))),l.insert(e,e.node)}});return new xn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ra(this.indexes_,i=>{if(i===ii)return i;{const r=n.get(e.name);return r?i.remove(new le(e.name,r)):i}});return new xn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr;class _e{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ov(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return hr||(hr=new _e(new kt(Zh),null,xn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hr}updatePriority(e){return this.children_.isEmpty()?this:new _e(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?hr:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new le(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?hr:this.priorityNode_;return new _e(i,o,r)}}updateChild(e,n){const s=ae(e);if(s===null)return n;{D(ae(e)!==".priority"||ls(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ne(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ft,(o,a)=>{n[o]=a.val(e),s++,r&&_e.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+rv(this.getPriority().val())+":"),this.forEachChild(ft,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Oy(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new le(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,le.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wo?-1:0}withIndex(e){if(e===wi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new _e(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===wi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ft),i=n.getIterator(ft);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wi?null:this.indexMap_.get(e.toString())}}_e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cA extends _e{constructor(){super(new kt(Zh),_e.EMPTY_NODE,xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _e.EMPTY_NODE}isEmpty(){return!1}}const wo=new cA;Object.defineProperties(le,{MIN:{value:new le(Ni,_e.EMPTY_NODE)},MAX:{value:new le(js,wo)}});iv.__EMPTY_NODE=_e.EMPTY_NODE;Ge.__childrenNodeConstructor=_e;sA(wo);rA(wo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=!0;function ct(t,e=null){if(t===null)return _e.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,ct(e))}if(!(t instanceof Array)&&uA){const n=[];let s=!1;if(Ht(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ct(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new le(o,l)))}}),n.length===0)return _e.EMPTY_NODE;const r=Fa(n,nA,o=>o.name,Zh);if(s){const o=Fa(n,ft.getCompare());return new _e(r,ct(e),new xn({".priority":o},{".priority":ft}))}else return new _e(r,ct(e),xn.Default)}else{let n=_e.EMPTY_NODE;return Ht(t,(s,i)=>{if(jn(t,s)&&s.substring(0,1)!=="."){const r=ct(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ct(e))}}iA(ct);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA extends xl{constructor(e){super(),this.indexPath_=e,D(!re(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Yi(e.name,n.name):r}makePost(e,n){const s=ct(e),i=_e.EMPTY_NODE.updateChild(this.indexPath_,s);return new le(n,i)}maxPost(){const e=_e.EMPTY_NODE.updateChild(this.indexPath_,wo);return new le(js,e)}toString(){return ev(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA extends xl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Yi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const s=ct(e);return new le(n,s)}toString(){return".value"}}const fA=new dA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){return{type:"value",snapshotNode:t}}function mA(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gA(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _A(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ft}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ni}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:js}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ft}copy(){const e=new ed;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Gp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ft?n="$priority":t.index_===fA?n="$value":t.index_===wi?n="$key":(D(t.index_ instanceof hA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=st(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=st(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+st(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=st(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+st(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ft&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Xy{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=yo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ua.getListenId_(e,s),a={};this.listens_[o]=a;const l=Gp(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ki(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ua.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Gp(e._queryParams),s=e._path.toString(),i=new Kr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=zr(a.responseText)}catch{Lt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Lt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.rootNode_=_e.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(){return{value:null,children:new Map}}function cv(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ae(e);t.children.has(s)||t.children.set(s,$a());const i=t.children.get(s);e=Ne(e),cv(i,e,n)}}function ku(t,e,n){t.value!==null?n(e,t.value):vA(t,(s,i)=>{const r=new Oe(e.toString()+"/"+s);ku(i,r,n)})}function vA(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ht(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=10*1e3,EA=30*1e3,bA=5*60*1e3;class TA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wA(e);const s=Yp+(EA-Yp)*Math.random();kr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ht(e,(i,r)=>{r>0&&jn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),kr(this.reportStats_.bind(this),Math.floor(Math.random()*2*bA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pn||(pn={}));function uv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=pn.ACK_USER_WRITE,this.source=uv()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Oe(e));return new Va(Ee(),n,this.revert)}}else return D(ae(this.path)===e,"operationForChild called for unrelated child."),new Va(Ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=pn.OVERWRITE}operationForChild(e){return re(this.path)?new qs(this.source,Ee(),this.snap.getImmediateChild(e)):new qs(this.source,Ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=pn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new Oe(e));return n.isEmpty()?null:n.value?new qs(this.source,Ee(),n.value):new Jr(this.source,Ee(),n)}else return D(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jr(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function IA(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_A(o.childName,o.snapshotNode))}),dr(t,i,"child_removed",e,s,n),dr(t,i,"child_added",e,s,n),dr(t,i,"child_moved",r,s,n),dr(t,i,"child_changed",e,s,n),dr(t,i,"value",e,s,n),i}function dr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>SA(t,a,l)),o.forEach(a=>{const l=CA(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function CA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function SA(t,e,n){if(e.childName==null||n.childName==null)throw Wi("Should only compare child_ events.");const s=new le(e.childName,e.snapshotNode),i=new le(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t,e){return{eventCache:t,serverCache:e}}function Ar(t,e,n,s){return fv(new td(e,n,s),t.serverCache)}function pv(t,e,n,s){return fv(t.eventCache,new td(e,n,s))}function Au(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Hs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mc;const RA=()=>(Mc||(Mc=new kt(dk)),Mc);class ke{constructor(e,n=RA()){this.value=e,this.children=n}static fromObject(e){let n=new ke(null);return Ht(e,(s,i)=>{n=n.set(new Oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ee(),value:this.value};if(re(e))return null;{const s=ae(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ne(e),n);return r!=null?{path:Je(new Oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ae(e),s=this.children.get(n);return s!==null?s.subtree(Ne(e)):new ke(null)}}set(e,n){if(re(e))return new ke(n,this.children);{const s=ae(e),r=(this.children.get(s)||new ke(null)).set(Ne(e),n),o=this.children.insert(s,r);return new ke(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=ae(e),s=this.children.get(n);if(s){const i=s.remove(Ne(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ke(null):new ke(this.value,r)}else return this}}get(e){if(re(e))return this.value;{const n=ae(e),s=this.children.get(n);return s?s.get(Ne(e)):null}}setTree(e,n){if(re(e))return n;{const s=ae(e),r=(this.children.get(s)||new ke(null)).setTree(Ne(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ke(this.value,o)}}fold(e){return this.fold_(Ee(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Je(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ee(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(re(e))return null;{const r=ae(e),o=this.children.get(r);return o?o.findOnPath_(Ne(e),Je(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ee(),n)}foreachOnPath_(e,n,s){if(re(e))return this;{this.value&&s(n,this.value);const i=ae(e),r=this.children.get(i);return r?r.foreachOnPath_(Ne(e),Je(n,i),s):new ke(null)}}foreach(e){this.foreach_(Ee(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Je(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new ke(null))}}function Nr(t,e,n){if(re(e))return new tn(new ke(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Bt(i,e);return r=r.updateChild(o,n),new tn(t.writeTree_.set(i,r))}else{const i=new ke(n),r=t.writeTree_.setTree(e,i);return new tn(r)}}}function Xp(t,e,n){let s=t;return Ht(n,(i,r)=>{s=Nr(s,Je(e,i),r)}),s}function Jp(t,e){if(re(e))return tn.empty();{const n=t.writeTree_.setTree(e,new ke(null));return new tn(n)}}function Nu(t,e){return Ys(t,e)!=null}function Ys(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Bt(n.path,e)):null}function Zp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ft,(s,i)=>{e.push(new le(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new le(s,i.value))}),e}function is(t,e){if(re(e))return t;{const n=Ys(t,e);return n!=null?new tn(new ke(n)):new tn(t.writeTree_.subtree(e))}}function xu(t){return t.writeTree_.isEmpty()}function xi(t,e){return mv(Ee(),t.writeTree_,e)}function mv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=mv(Je(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Je(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t,e){return Ev(e,t)}function kA(t,e,n,s,i){D(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Nr(t.visibleWrites,e,n)),t.lastWriteId=s}function AA(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function NA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&xA(a,s.path)?i=!1:Xt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return OA(t),!0;if(s.snap)t.visibleWrites=Jp(t.visibleWrites,s.path);else{const a=s.children;Ht(a,l=>{t.visibleWrites=Jp(t.visibleWrites,Je(s.path,l))})}return!0}else return!1}function xA(t,e){if(t.snap)return Xt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xt(Je(t.path,n),e))return!0;return!1}function OA(t){t.visibleWrites=_v(t.allWrites,DA,Ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function DA(t){return t.visible}function _v(t,e,n){let s=tn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Xt(n,o)?(a=Bt(n,o),s=Nr(s,a,r.snap)):Xt(o,n)&&(a=Bt(o,n),s=Nr(s,Ee(),r.snap.getChild(a)));else if(r.children){if(Xt(n,o))a=Bt(n,o),s=Xp(s,a,r.children);else if(Xt(o,n))if(a=Bt(o,n),re(a))s=Xp(s,Ee(),r.children);else{const l=ki(r.children,ae(a));if(l){const c=l.getChild(Ne(a));s=Nr(s,Ee(),c)}}}else throw Wi("WriteRecord should have .snap or .children")}}return s}function yv(t,e,n,s,i){if(!s&&!i){const r=Ys(t.visibleWrites,e);if(r!=null)return r;{const o=is(t.visibleWrites,e);if(xu(o))return n;if(n==null&&!Nu(o,Ee()))return null;{const a=n||_e.EMPTY_NODE;return xi(o,a)}}}else{const r=is(t.visibleWrites,e);if(!i&&xu(r))return n;if(!i&&n==null&&!Nu(r,Ee()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Xt(c.path,e)||Xt(e,c.path))},a=_v(t.allWrites,o,e),l=n||_e.EMPTY_NODE;return xi(a,l)}}}function PA(t,e,n){let s=_e.EMPTY_NODE;const i=Ys(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ft,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=is(t.visibleWrites,e);return n.forEachChild(ft,(o,a)=>{const l=xi(is(r,new Oe(o)),a);s=s.updateImmediateChild(o,l)}),Zp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=is(t.visibleWrites,e);return Zp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function MA(t,e,n,s,i){D(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Je(e,n);if(Nu(t.visibleWrites,r))return null;{const o=is(t.visibleWrites,r);return xu(o)?i.getChild(n):xi(o,i.getChild(n))}}function LA(t,e,n,s){const i=Je(e,n),r=Ys(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=is(t.visibleWrites,i);return xi(o,s.getNode().getImmediateChild(n))}else return null}function FA(t,e){return Ys(t.visibleWrites,e)}function UA(t,e,n,s,i,r,o){let a;const l=is(t.visibleWrites,e),c=Ys(l,Ee());if(c!=null)a=c;else if(n!=null)a=xi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function $A(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function Ou(t,e,n,s){return yv(t.writeTree,t.treePath,e,n,s)}function vv(t,e){return PA(t.writeTree,t.treePath,e)}function em(t,e,n,s){return MA(t.writeTree,t.treePath,e,n,s)}function Ba(t,e){return FA(t.writeTree,Je(t.treePath,e))}function VA(t,e,n,s,i,r){return UA(t.writeTree,t.treePath,e,n,s,i,r)}function nd(t,e,n){return LA(t.writeTree,t.treePath,e,n)}function wv(t,e){return Ev(Je(t.treePath,e),t.writeTree)}function Ev(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,zp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,gA(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,mA(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,zp(s,e.snapshotNode,i.oldSnap));else throw Wi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const bv=new jA;class sd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new td(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Hs(this.viewCache_),r=VA(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function qA(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function HA(t,e,n,s,i){const r=new BA;let o,a;if(n.type===pn.OVERWRITE){const c=n;c.source.fromUser?o=Du(t,e,c.path,c.snap,s,i,r):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!re(c.path),o=ja(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===pn.MERGE){const c=n;c.source.fromUser?o=KA(t,e,c.path,c.children,s,i,r):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Pu(t,e,c.path,c.children,s,i,a,r))}else if(n.type===pn.ACK_USER_WRITE){const c=n;c.revert?o=QA(t,e,c.path,s,i,r):o=zA(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===pn.LISTEN_COMPLETE)o=GA(t,e,n.path,s,r);else throw Wi("Unknown operation type: "+n.type);const l=r.getChanges();return WA(e,o,l),{viewCache:o,changes:l}}function WA(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Au(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(pA(Au(e)))}}function Tv(t,e,n,s,i,r){const o=e.eventCache;if(Ba(s,n)!=null)return e;{let a,l;if(re(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Hs(e),u=c instanceof _e?c:_e.EMPTY_NODE,h=vv(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ou(s,Hs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ae(n);if(c===".priority"){D(ls(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=em(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ne(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=em(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=nd(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Ar(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function ja(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(re(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ae(n);if(!l.isCompleteForPath(n)&&ls(n)>1)return e;const m=Ne(n),y=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,m,bv,null)}const h=pv(e,c,l.isFullyInitialized()||re(n),u.filtersNodes()),d=new sd(i,h,r);return Tv(t,h,n,i,d,a)}function Du(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new sd(i,e,r);if(re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ar(e,c,!0,t.filter.filtersNodes());else{const h=ae(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ar(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ne(n),f=a.getNode().getImmediateChild(h);let m;if(re(d))m=s;else{const _=u.getCompleteChild(h);_!=null?Zy(d)===".priority"&&_.getChild(tv(d)).isEmpty()?m=_:m=_.updateChild(d,s):m=_e.EMPTY_NODE}if(f.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Ar(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function tm(t,e){return t.eventCache.isCompleteForChild(e)}function KA(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Je(n,l);tm(e,ae(u))&&(a=Du(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Je(n,l);tm(e,ae(u))||(a=Du(t,a,u,c,i,r,o))}),a}function nm(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Pu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;re(n)?c=s:c=new ke(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=nm(t,f,d);l=ja(t,l,new Oe(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),_=nm(t,m,d);l=ja(t,l,new Oe(h),_,i,r,o,a)}}),l}function zA(t,e,n,s,i,r,o){if(Ba(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ja(t,e,n,l.getNode().getChild(n),i,r,a,o);if(re(n)){let c=new ke(null);return l.getNode().forEachChild(wi,(u,h)=>{c=c.set(new Oe(u),h)}),Pu(t,e,n,c,i,r,a,o)}else return e}else{let c=new ke(null);return s.foreach((u,h)=>{const d=Je(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Pu(t,e,n,c,i,r,a,o)}}function GA(t,e,n,s,i){const r=e.serverCache,o=pv(e,r.getNode(),r.isFullyInitialized()||re(n),r.isFiltered());return Tv(t,o,n,s,bv,i)}function QA(t,e,n,s,i,r){let o;if(Ba(s,n)!=null)return e;{const a=new sd(s,e,i),l=e.eventCache.getNode();let c;if(re(n)||ae(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ou(s,Hs(e));else{const h=e.serverCache.getNode();D(h instanceof _e,"serverChildren would be complete if leaf node"),u=vv(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ae(n);let h=nd(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ne(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,_e.EMPTY_NODE,Ne(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ou(s,Hs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ba(s,Ee())!=null,Ar(e,c,o,t.filter.filtersNodes())}}function YA(t,e){const n=Hs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function sm(t,e,n,s){e.type===pn.MERGE&&e.source.queryId!==null&&(D(Hs(t.viewCache_),"We should always have a full cache before handling merges"),D(Au(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=HA(t.processor_,i,e,n,s);return qA(t.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,XA(t,r.changes,r.viewCache.eventCache.getNode(),null)}function XA(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return IA(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im;function JA(t){D(!im,"__referenceConstructor has already been defined"),im=t}function id(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return D(r!=null,"SyncTree gave us an op for an invalid query."),sm(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(sm(o,e,n,s));return r}}function rd(t,e){let n=null;for(const s of t.views.values())n=n||YA(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rm;function ZA(t){D(!rm,"__referenceConstructor has already been defined"),rm=t}class om{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=$A(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function e1(t,e,n,s,i){return kA(t.pendingWriteTree_,e,n,s,i),i?Dl(t,new qs(uv(),e,n)):[]}function hi(t,e,n=!1){const s=AA(t.pendingWriteTree_,e);if(NA(t.pendingWriteTree_,e)){let r=new ke(null);return s.snap!=null?r=r.set(Ee(),!0):Ht(s.children,o=>{r=r.set(new Oe(o),!0)}),Dl(t,new Va(s.path,r,n))}else return[]}function Ol(t,e,n){return Dl(t,new qs(hv(),e,n))}function t1(t,e,n){const s=ke.fromObject(n);return Dl(t,new Jr(hv(),e,s))}function n1(t,e,n,s){const i=Rv(t,s);if(i!=null){const r=kv(i),o=r.path,a=r.queryId,l=Bt(o,e),c=new qs(dv(a),l,n);return Av(t,o,c)}else return[]}function s1(t,e,n,s){const i=Rv(t,s);if(i){const r=kv(i),o=r.path,a=r.queryId,l=Bt(o,e),c=ke.fromObject(n),u=new Jr(dv(a),l,c);return Av(t,o,u)}else return[]}function Iv(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Bt(o,e),c=rd(a,l);if(c)return c});return yv(i,e,r,n,!0)}function Dl(t,e){return Cv(e,t.syncPointTree_,null,gv(t.pendingWriteTree_,Ee()))}function Cv(t,e,n,s){if(re(t.path))return Sv(t,e,n,s);{const i=e.get(Ee());n==null&&i!=null&&(n=rd(i,Ee()));let r=[];const o=ae(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=wv(s,o);r=r.concat(Cv(a,l,c,u))}return i&&(r=r.concat(id(i,t,s,n))),r}}function Sv(t,e,n,s){const i=e.get(Ee());n==null&&i!=null&&(n=rd(i,Ee()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=wv(s,o),u=t.operationForChild(o);u&&(r=r.concat(Sv(u,a,l,c)))}),i&&(r=r.concat(id(i,t,s,n))),r}function Rv(t,e){return t.tagToQueryMap.get(e)}function kv(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Oe(t.substr(0,e))}}function Av(t,e,n){const s=t.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const i=gv(t.pendingWriteTree_,e);return id(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new od(n)}node(){return this.node_}}class ad{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Je(this.path_,e);return new ad(this.syncTree_,n)}node(){return Iv(this.syncTree_,this.path_)}}const i1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},am=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return r1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return o1(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},r1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},o1=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},a1=function(t,e,n,s){return ld(e,new ad(n,t),s)},l1=function(t,e,n){return ld(t,new od(e),n)};function ld(t,e,n){const s=t.getPriority().val(),i=am(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=am(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ge(a,ct(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ge(i))),o.forEachChild(ft,(a,l)=>{const c=ld(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ud(t,e){let n=e instanceof Oe?e:new Oe(e),s=t,i=ae(n);for(;i!==null;){const r=ki(s.node.children,i)||{children:{},childCount:0};s=new cd(i,s,r),n=Ne(n),i=ae(n)}return s}function Xi(t){return t.node.value}function Nv(t,e){t.node.value=e,Mu(t)}function xv(t){return t.node.childCount>0}function c1(t){return Xi(t)===void 0&&!xv(t)}function Pl(t,e){Ht(t.node.children,(n,s)=>{e(new cd(n,t,s))})}function Ov(t,e,n,s){n&&!s&&e(t),Pl(t,i=>{Ov(i,e,!0,s)}),n&&s&&e(t)}function u1(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Eo(t){return new Oe(t.parent===null?t.name:Eo(t.parent)+"/"+t.name)}function Mu(t){t.parent!==null&&h1(t.parent,t.name,t)}function h1(t,e,n){const s=c1(n),i=jn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Mu(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Mu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=/[\[\].#$\/\u0000-\u001F\u007F]/,f1=/[\[\].#$\u0000-\u001F\u007F]/,Lc=10*1024*1024,Dv=function(t){return typeof t=="string"&&t.length!==0&&!d1.test(t)},p1=function(t){return typeof t=="string"&&t.length!==0&&!f1.test(t)},m1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),p1(t)},Pv=function(t,e,n){const s=n instanceof Oe?new Gk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ts(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ts(s)+" with contents = "+e.toString());if(Dy(e))throw new Error(t+"contains "+e.toString()+" "+Ts(s));if(typeof e=="string"&&e.length>Lc/3&&Tl(e)>Lc)throw new Error(t+"contains a string greater than "+Lc+" utf8 bytes "+Ts(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ht(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Dv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ts(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qk(s,o),Pv(t,a,s),Yk(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ts(s)+" in addition to actual children.")}},g1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Dv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!m1(n))throw new Error(pI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function y1(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!nv(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Xs(t,e,n){y1(t,n),v1(t,s=>Xt(s,e)||Xt(e,s))}function v1(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(w1(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function w1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ps&&lt("event: "+n.toString()),vo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="repo_interrupt",b1=25;class T1{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$a(),this.transactionQueueTree_=new cd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function I1(t,e,n){if(t.stats_=Yh(t.repoInfo_),t.forceRestClient_||yk())t.server_=new Ua(t.repoInfo_,(s,i,r,o)=>{lm(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>cm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{st(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Dn(t.repoInfo_,e,(s,i,r,o)=>{lm(t,s,i,r,o)},s=>{cm(t,s)},s=>{S1(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ik(t.repoInfo_,()=>new TA(t.stats_,t.server_)),t.infoData_=new yA,t.infoSyncTree_=new om({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ol(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hd(t,"connected",!1),t.serverSyncTree_=new om({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Xs(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function C1(t){const n=t.infoData_.getNode(new Oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Mv(t){return i1({timestamp:C1(t)})}function lm(t,e,n,s,i){t.dataUpdateCount++;const r=new Oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Ra(n,c=>ct(c));o=s1(t.serverSyncTree_,r,l,i)}else{const l=ct(n);o=n1(t.serverSyncTree_,r,l,i)}else if(s){const l=Ra(n,c=>ct(c));o=t1(t.serverSyncTree_,r,l)}else{const l=ct(n);o=Ol(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=fd(t,r)),Xs(t.eventQueue_,a,o)}function cm(t,e){hd(t,"connected",e),e===!1&&k1(t)}function S1(t,e){Ht(e,(n,s)=>{hd(t,n,s)})}function hd(t,e,n){const s=new Oe("/.info/"+e),i=ct(n);t.infoData_.updateSnapshot(s,i);const r=Ol(t.infoSyncTree_,s,i);Xs(t.eventQueue_,s,r)}function R1(t){return t.nextWriteId_++}function k1(t){Lv(t,"onDisconnectEvents");const e=Mv(t),n=$a();ku(t.onDisconnect_,Ee(),(i,r)=>{const o=a1(i,r,t.serverSyncTree_,e);cv(n,i,o)});let s=[];ku(n,Ee(),(i,r)=>{s=s.concat(Ol(t.serverSyncTree_,i,r));const o=O1(t,i);fd(t,o)}),t.onDisconnect_=$a(),Xs(t.eventQueue_,Ee(),s)}function A1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(E1)}function Lv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),lt(n,...e)}function Fv(t,e,n){return Iv(t.serverSyncTree_,e,n)||_e.EMPTY_NODE}function dd(t,e=t.transactionQueueTree_){if(e||Ml(t,e),Xi(e)){const n=$v(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&N1(t,Eo(e),n)}else xv(e)&&Pl(e,n=>{dd(t,n)})}function N1(t,e,n){const s=n.map(c=>c.currentWriteId),i=Fv(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Bt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Lv(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(hi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ml(t,ud(t.transactionQueueTree_,e)),dd(t,t.transactionQueueTree_),Xs(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)vo(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Lt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}fd(t,e)}},o)}function fd(t,e){const n=Uv(t,e),s=Eo(n),i=$v(t,n);return x1(t,i,s),s}function x1(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Bt(n,l.path);let u=!1,h;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(hi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=b1)u=!0,h="maxretry",i=i.concat(hi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Fv(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Pv("transaction failed: Data returned ",f,l.path);let m=ct(f);typeof f=="object"&&f!=null&&jn(f,".priority")||(m=m.updatePriority(d.getPriority()));const y=l.currentWriteId,b=Mv(t),R=l1(m,d,b);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=R,l.currentWriteId=R1(t),o.splice(o.indexOf(y),1),i=i.concat(e1(t.serverSyncTree_,l.path,R,l.currentWriteId,l.applyLocally)),i=i.concat(hi(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(hi(t.serverSyncTree_,l.currentWriteId,!0))}Xs(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ml(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)vo(s[a]);dd(t,t.transactionQueueTree_)}function Uv(t,e){let n,s=t.transactionQueueTree_;for(n=ae(e);n!==null&&Xi(s)===void 0;)s=ud(s,n),e=Ne(e),n=ae(e);return s}function $v(t,e){const n=[];return Vv(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Vv(t,e,n){const s=Xi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Pl(e,i=>{Vv(t,i,n)})}function Ml(t,e){const n=Xi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Nv(e,n.length>0?n:void 0)}Pl(e,s=>{Ml(t,s)})}function O1(t,e){const n=Eo(Uv(t,e)),s=ud(t.transactionQueueTree_,e);return u1(s,i=>{Fc(t,i)}),Fc(t,s),Ov(s,i=>{Fc(t,i)}),n}function Fc(t,e){const n=Xi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Nv(e,void 0):n.length=r+1,Xs(t.eventQueue_,Eo(e),i);for(let o=0;o<s.length;o++)vo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function P1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const um=function(t,e){const n=M1(t),s=n.namespace;n.domain==="firebase.com"&&Bs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Bs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||uk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ek(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Oe(n.pathString)}},M1=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=D1(t.substring(u,h)));const d=P1(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return re(this._path)?null:Zy(this._path)}get ref(){return new Ji(this._repo,this._path)}get _queryIdentifier(){const e=Qp(this._queryParams),n=Gh(e);return n==="{}"?"default":n}get _queryObject(){return Qp(this._queryParams)}isEqual(e){if(e=Le(e),!(e instanceof pd))return!1;const n=this._repo===e._repo,s=nv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zk(this._path)}}class Ji extends pd{constructor(e,n){super(e,n,new ed,!1)}get parent(){const e=tv(this._path);return e===null?null:new Ji(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}JA(Ji);ZA(Ji);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="FIREBASE_DATABASE_EMULATOR_HOST",Lu={};let F1=!1;function U1(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Bs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=um(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[L1]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=um(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Cu(Cu.OWNER):new wk(t.name,t.options,e);g1("Invalid Firebase Database URL",o),re(o.path)||Bs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=V1(a,t,u,new vk(t.name,n));return new B1(h,t)}function $1(t,e){const n=Lu[e];(!n||n[t.key]!==t)&&Bs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),A1(t),delete n[t.key]}function V1(t,e,n,s){let i=Lu[e.name];i||(i={},Lu[e.name]=i);let r=i[t.toURLString()];return r&&Bs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new T1(t,F1,n,s),i[t.toURLString()]=r,r}class B1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(I1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ji(this._repo,Ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&($1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bs("Cannot call "+e+" on a deleted database.")}}/**
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
 */function j1(t){rk(Gs),vn(new sn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return U1(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Mt(xp,Op,t),Mt(xp,Op,"esm2017")}Dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};j1();var q1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,md=md||{},Q=q1||self;function qa(){}function Ll(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function H1(t){return Object.prototype.hasOwnProperty.call(t,Uc)&&t[Uc]||(t[Uc]=++W1)}var Uc="closure_uid_"+(1e9*Math.random()>>>0),W1=0;function K1(t,e,n){return t.call.apply(t.bind,arguments)}function z1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pt=K1:pt=z1,pt.apply(null,arguments)}function Jo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function fs(){this.s=this.s,this.o=this.o}var G1=0;fs.prototype.s=!1;fs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),G1!=0)&&H1(this)};fs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gd(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function hm(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ll(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var Q1=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",qa,e),Q.removeEventListener("test",qa,e)}catch{}return t}();function Ha(t){return/^[\s\xa0]*$/.test(t)}var dm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function $c(t,e){return t<e?-1:t>e?1:0}function Fl(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function fn(t){return Fl().indexOf(t)!=-1}function _d(t){return _d[" "](t),t}_d[" "]=qa;function Y1(t){var e=Z1;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var X1=fn("Opera"),Oi=fn("Trident")||fn("MSIE"),jv=fn("Edge"),Fu=jv||Oi,qv=fn("Gecko")&&!(Fl().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge"))&&!(fn("Trident")||fn("MSIE"))&&!fn("Edge"),J1=Fl().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge");function Hv(){var t=Q.document;return t?t.documentMode:void 0}var Wa;e:{var Vc="",Bc=function(){var t=Fl();if(qv)return/rv:([^\);]+)(\)|;)/.exec(t);if(jv)return/Edge\/([\d\.]+)/.exec(t);if(Oi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(J1)return/WebKit\/(\S+)/.exec(t);if(X1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bc&&(Vc=Bc?Bc[1]:""),Oi){var jc=Hv();if(jc!=null&&jc>parseFloat(Vc)){Wa=String(jc);break e}}Wa=Vc}var Z1={};function eN(){return Y1(function(){let t=0;const e=dm(String(Wa)).split("."),n=dm("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=$c(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||$c(i[2].length==0,r[2].length==0)||$c(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Uu;if(Q.document&&Oi){var fm=Hv();Uu=fm||parseInt(Wa,10)||void 0}else Uu=void 0;var tN=Uu;function Zr(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qv){e:{try{_d(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zr.X.h.call(this)}}ot(Zr,mt);var nN={2:"touch",3:"pen",4:"mouse"};Zr.prototype.h=function(){Zr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var To="closure_listenable_"+(1e6*Math.random()|0),sN=0;function iN(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++sN,this.ba=this.ea=!1}function Ul(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function yd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Wv(t){const e={};for(const n in t)e[n]=t[n];return e}const pm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kv(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<pm.length;r++)n=pm[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function $l(t){this.src=t,this.g={},this.h=0}$l.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Vu(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new iN(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function $u(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Bv(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ul(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vu(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var vd="closure_lm_"+(1e6*Math.random()|0),qc={};function zv(t,e,n,s,i){if(s&&s.once)return Qv(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)zv(t,e[r],n,s,i);return null}return n=bd(n),t&&t[To]?t.N(e,n,bo(s)?!!s.capture:!!s,i):Gv(t,e,n,!1,s,i)}function Gv(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=bo(i)?!!i.capture:!!i,a=Ed(t);if(a||(t[vd]=a=new $l(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=rN(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Q1||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Xv(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rN(){function t(n){return e.call(t.src,t.listener,n)}const e=oN;return t}function Qv(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Qv(t,e[r],n,s,i);return null}return n=bd(n),t&&t[To]?t.O(e,n,bo(s)?!!s.capture:!!s,i):Gv(t,e,n,!0,s,i)}function Yv(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Yv(t,e[r],n,s,i);else s=bo(s)?!!s.capture:!!s,n=bd(n),t&&t[To]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Vu(r,n,s,i),-1<n&&(Ul(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ed(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vu(e,n,s,i)),(n=-1<t?e[t]:null)&&wd(n))}function wd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[To])$u(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Xv(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ed(e))?($u(n,t),n.h==0&&(n.src=null,e[vd]=null)):Ul(t)}}}function Xv(t){return t in qc?qc[t]:qc[t]="on"+t}function oN(t,e){if(t.ba)t=!0;else{e=new Zr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wd(t),t=n.call(s,e)}return t}function Ed(t){return t=t[vd],t instanceof $l?t:null}var Hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function bd(t){return typeof t=="function"?t:(t[Hc]||(t[Hc]=function(e){return t.handleEvent(e)}),t[Hc])}function Ze(){fs.call(this),this.i=new $l(this),this.P=this,this.I=null}ot(Ze,fs);Ze.prototype[To]=!0;Ze.prototype.removeEventListener=function(t,e,n,s){Yv(this,t,e,n,s)};function rt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var i=e;e=new mt(s,t),Kv(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Zo(o,s,!0,e)&&i}if(o=e.g=t,i=Zo(o,s,!0,e)&&i,i=Zo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Zo(o,s,!1,e)&&i}Ze.prototype.M=function(){if(Ze.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ul(n[s]);delete t.g[e],t.h--}}this.I=null};Ze.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ze.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Zo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&$u(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Td=Q.JSON.stringify;function aN(){var t=ew;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lN{constructor(){this.h=this.g=null}add(e,n){const s=Jv.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Jv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new cN,t=>t.reset());class cN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uN(t){Q.setTimeout(()=>{throw t},0)}function Zv(t,e){Bu||hN(),ju||(Bu(),ju=!0),ew.add(t,e)}var Bu;function hN(){var t=Q.Promise.resolve(void 0);Bu=function(){t.then(dN)}}var ju=!1,ew=new lN;function dN(){for(var t;t=aN();){try{t.h.call(t.g)}catch(n){uN(n)}var e=Jv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ju=!1}function Vl(t,e){Ze.call(this),this.h=t||1,this.g=e||Q,this.j=pt(this.lb,this),this.l=Date.now()}ot(Vl,Ze);V=Vl.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),rt(this,"tick"),this.ca&&(Id(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Id(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){Vl.X.M.call(this),Id(this),delete this.g};function Cd(t,e,n){if(typeof t=="function")n&&(t=pt(t,n));else if(t&&typeof t.handleEvent=="function")t=pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function tw(t){t.g=Cd(()=>{t.g=null,t.i&&(t.i=!1,tw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class fN extends fs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:tw(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eo(t){fs.call(this),this.h=t,this.g={}}ot(eo,fs);var mm=[];function nw(t,e,n,s){Array.isArray(n)||(n&&(mm[0]=n.toString()),n=mm);for(var i=0;i<n.length;i++){var r=zv(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function sw(t){yd(t.g,function(e,n){this.g.hasOwnProperty(n)&&wd(e)},t),t.g={}}eo.prototype.M=function(){eo.X.M.call(this),sw(this)};eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bl(){this.g=!0}Bl.prototype.Aa=function(){this.g=!1};function pN(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function mN(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function di(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_N(t,n)+(s?" "+s:"")})}function gN(t,e){t.info(function(){return"TIMEOUT: "+e})}Bl.prototype.info=function(){};function _N(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Td(n)}catch{return e}}var Js={},gm=null;function jl(){return gm=gm||new Ze}Js.Pa="serverreachability";function iw(t){mt.call(this,Js.Pa,t)}ot(iw,mt);function to(t){const e=jl();rt(e,new iw(e))}Js.STAT_EVENT="statevent";function rw(t,e){mt.call(this,Js.STAT_EVENT,t),this.stat=e}ot(rw,mt);function wt(t){const e=jl();rt(e,new rw(e,t))}Js.Qa="timingevent";function ow(t,e){mt.call(this,Js.Qa,t),this.size=e}ot(ow,mt);function Io(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var ql={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},aw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Sd(){}Sd.prototype.h=null;function _m(t){return t.h||(t.h=t.i())}function lw(){}var Co={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Rd(){mt.call(this,"d")}ot(Rd,mt);function kd(){mt.call(this,"c")}ot(kd,mt);var qu;function Hl(){}ot(Hl,Sd);Hl.prototype.g=function(){return new XMLHttpRequest};Hl.prototype.i=function(){return{}};qu=new Hl;function So(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new eo(this),this.O=yN,t=Fu?125:void 0,this.T=new Vl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new cw}function cw(){this.i=null,this.g="",this.h=!1}var yN=45e3,Hu={},Ka={};V=So.prototype;V.setTimeout=function(t){this.O=t};function Wu(t,e,n){t.K=1,t.v=Kl(Fn(e)),t.s=n,t.P=!0,uw(t,null)}function uw(t,e){t.F=Date.now(),Ro(t),t.A=Fn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),yw(n.i,"t",s),t.C=0,n=t.l.H,t.h=new cw,t.g=$w(t.l,n?e:null,!t.s),0<t.N&&(t.L=new fN(pt(t.La,t,t.g),t.N)),nw(t.S,t.g,"readystatechange",t.ib),e=t.H?Wv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),to(),pN(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&On(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const u=On(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Fu||this.g&&(this.h.h||this.g.fa()||Em(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?to(3):to(2)),Wl(this);var n=this.g.aa();this.Y=n;t:if(hw(this)){var s=Em(this.g);t="";var i=s.length,r=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ks(this),xr(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,mN(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ha(a)){var c=a;break t}}c=null}if(n=c)di(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ku(this,n);else{this.i=!1,this.o=3,wt(12),ks(this),xr(this);break e}}this.P?(dw(this,u,o),Fu&&this.i&&u==3&&(nw(this.S,this.T,"tick",this.hb),this.T.start())):(di(this.j,this.m,o,null),Ku(this,o)),u==4&&ks(this),this.i&&!this.I&&(u==4?Mw(this.l,this):(this.i=!1,Ro(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,wt(12)):(this.o=0,wt(13)),ks(this),xr(this)}}}catch{}finally{}};function hw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function dw(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=vN(t,n),i==Ka){e==4&&(t.o=4,wt(14),s=!1),di(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Hu){t.o=4,wt(15),di(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else di(t.j,t.m,i,null),Ku(t,i);hw(t)&&i!=Ka&&i!=Hu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,wt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Md(e),e.K=!0,wt(11))):(di(t.j,t.m,n,"[Invalid Chunked Response]"),ks(t),xr(t))}V.hb=function(){if(this.g){var t=On(this.g),e=this.g.fa();this.C<e.length&&(Wl(this),dw(this,t,e),this.i&&t!=4&&Ro(this))}};function vN(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ka:(n=Number(e.substring(n,s)),isNaN(n)?Hu:(s+=1,s+n>e.length?Ka:(e=e.substr(s,n),t.C=s+n,e)))}V.cancel=function(){this.I=!0,ks(this)};function Ro(t){t.V=Date.now()+t.O,fw(t,t.O)}function fw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Io(pt(t.gb,t),e)}function Wl(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(gN(this.j,this.A),this.K!=2&&(to(),wt(17)),ks(this),this.o=2,xr(this)):fw(this,this.V-t)};function xr(t){t.l.G==0||t.I||Mw(t.l,t)}function ks(t){Wl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Id(t.T),sw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ku(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||zu(n.h,t))){if(!t.J&&zu(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Qa(n),Ql(n);else break e;Pd(n),wt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Io(pt(n.cb,n),6e3));if(1>=Ew(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else As(n,11)}else if((t.J||n.g==t)&&Qa(n),!Ha(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ad(r,r.h),r.h=null))}if(s.D){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Pe(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Uw(s,s.H?s.ka:null,s.V),o.J){bw(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Wl(a),Ro(a)),s.g=o}else Dw(s);0<n.i.length&&Yl(n)}else c[0]!="stop"&&c[0]!="close"||As(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?As(n,7):Dd(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}to(4)}catch{}}function wN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ll(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function EN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ll(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function pw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ll(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=EN(t),s=wN(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var mw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ms(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ms){this.h=e!==void 0?e:t.h,za(this,t.j),this.s=t.s,this.g=t.g,Ga(this,t.m),this.l=t.l,e=t.i;var n=new no;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ym(this,n),this.o=t.o}else t&&(n=String(t).match(mw))?(this.h=!!e,za(this,n[1]||"",!0),this.s=wr(n[2]||""),this.g=wr(n[3]||"",!0),Ga(this,n[4]),this.l=wr(n[5]||"",!0),ym(this,n[6]||"",!0),this.o=wr(n[7]||"")):(this.h=!!e,this.i=new no(null,this.h))}Ms.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Er(e,vm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Er(e,vm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Er(n,n.charAt(0)=="/"?CN:IN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Er(n,RN)),t.join("")};function Fn(t){return new Ms(t)}function za(t,e,n){t.j=n?wr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ga(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ym(t,e,n){e instanceof no?(t.i=e,kN(t.i,t.h)):(n||(e=Er(e,SN)),t.i=new no(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function Kl(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function wr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Er(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,TN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function TN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vm=/[#\/\?@]/g,IN=/[#\?:]/g,CN=/[#\?]/g,SN=/[#\?@]/g,RN=/#/g;function no(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ps(t){t.g||(t.g=new Map,t.h=0,t.i&&bN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=no.prototype;V.add=function(t,e){ps(this),this.i=null,t=Zi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function gw(t,e){ps(t),e=Zi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _w(t,e){return ps(t),e=Zi(t,e),t.g.has(e)}V.forEach=function(t,e){ps(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};V.oa=function(){ps(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};V.W=function(t){ps(this);let e=[];if(typeof t=="string")_w(this,t)&&(e=e.concat(this.g.get(Zi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return ps(this),this.i=null,t=Zi(this,t),_w(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function yw(t,e,n){gw(t,e),0<n.length&&(t.i=null,t.g.set(Zi(t,e),gd(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kN(t,e){e&&!t.j&&(ps(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(gw(this,s),yw(this,i,n))},t)),t.j=e}var AN=class{constructor(e,n){this.h=e,this.g=n}};function vw(t){this.l=t||NN,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NN=10;function ww(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ew(t){return t.h?1:t.g?t.g.size:0}function zu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ad(t,e){t.g?t.g.add(e):t.h=e}function bw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vw.prototype.cancel=function(){if(this.i=Tw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Tw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gd(t.i)}function Nd(){}Nd.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};Nd.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function xN(){this.g=new Nd}function ON(t,e,n){const s=n||"";try{pw(t,function(i,r){let o=i;bo(i)&&(o=Td(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function DN(t,e){const n=new Bl;if(Q.Image){const s=new Image;s.onload=Jo(ea,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Jo(ea,n,s,"TestLoadImage: error",!1,e),s.onabort=Jo(ea,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Jo(ea,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ea(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function ko(t){this.l=t.ac||null,this.j=t.jb||!1}ot(ko,Sd);ko.prototype.g=function(){return new zl(this.l,this.j)};ko.prototype.i=function(t){return function(){return t}}({});function zl(t,e){Ze.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(zl,Ze);var xd=0;V=zl.prototype;V.open=function(t,e){if(this.readyState!=xd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,so(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ao(this)),this.readyState=xd};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,so(this)),this.g&&(this.readyState=3,so(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Iw(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Iw(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ao(this):so(this),this.readyState==3&&Iw(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,Ao(this))};V.Ua=function(t){this.g&&(this.response=t,Ao(this))};V.ga=function(){this.g&&Ao(this)};function Ao(t){t.readyState=4,t.l=null,t.j=null,t.A=null,so(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function so(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PN=Q.JSON.parse;function Fe(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Cw,this.K=this.L=!1}ot(Fe,Ze);var Cw="",MN=/^https?$/i,LN=["POST","PUT"];V=Fe.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():qu.g(),this.C=this.u?_m(this.u):_m(qu),this.g.onreadystatechange=pt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){wm(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=Bv(LN,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{kw(this),0<this.B&&((this.K=FN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pt(this.qa,this)):this.A=Cd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){wm(this,r)}};function FN(t){return Oi&&eN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof md<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function wm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Sw(t),Gl(t)}function Sw(t){t.D||(t.D=!0,rt(t,"complete"),rt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,rt(this,"complete"),rt(this,"abort"),Gl(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gl(this,!0)),Fe.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?Rw(this):this.fb())};V.fb=function(){Rw(this)};function Rw(t){if(t.h&&typeof md<"u"&&(!t.C[1]||On(t)!=4||t.aa()!=2)){if(t.v&&On(t)==4)Cd(t.Ha,0,t);else if(rt(t,"readystatechange"),On(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(mw)[1]||null;if(!i&&Q.self&&Q.self.location){var r=Q.self.location.protocol;i=r.substr(0,r.length-1)}s=!MN.test(i?i.toLowerCase():"")}n=s}if(n)rt(t,"complete"),rt(t,"success");else{t.m=6;try{var o=2<On(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Sw(t)}}finally{Gl(t)}}}}function Gl(t,e){if(t.g){kw(t);const n=t.g,s=t.C[0]?qa:null;t.g=null,t.C=null,e||rt(t,"ready");try{n.onreadystatechange=s}catch{}}}function kw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function On(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PN(e)}};function Em(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Cw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Aw(t){let e="";return yd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Od(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Aw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function fr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Nw(t){this.Ca=0,this.i=[],this.j=new Bl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=fr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=fr("baseRetryDelayMs",5e3,t),this.bb=fr("retryDelaySeedMs",1e4,t),this.$a=fr("forwardChannelMaxRetries",2,t),this.ta=fr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new vw(t&&t.concurrentRequestLimit),this.Fa=new xN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=Nw.prototype;V.ma=8;V.G=1;function Dd(t){if(xw(t),t.G==3){var e=t.U++,n=Fn(t.F);Pe(n,"SID",t.I),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),No(t,n),e=new So(t,t.j,e,void 0),e.K=2,e.v=Kl(Fn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=$w(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ro(e)}Fw(t)}function Ql(t){t.g&&(Md(t),t.g.cancel(),t.g=null)}function xw(t){Ql(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Qa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Yl(t){ww(t.h)||t.m||(t.m=!0,Zv(t.Ja,t),t.C=0)}function UN(t,e){return Ew(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Io(pt(t.Ja,t,e),Lw(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new So(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Wv(r),Kv(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ow(this,i,e),n=Fn(this.F),Pe(n,"RID",t),Pe(n,"CVER",22),this.D&&Pe(n,"X-HTTP-Session-Id",this.D),No(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Aw(r)))+"&"+e:this.o&&Od(n,this.o,r)),Ad(this.h,i),this.Ya&&Pe(n,"TYPE","init"),this.O?(Pe(n,"$req",e),Pe(n,"SID","null"),i.Z=!0,Wu(i,n,null)):Wu(i,n,e),this.G=2}}else this.G==3&&(t?bm(this,t):this.i.length==0||ww(this.h)||bm(this))};function bm(t,e){var n;e?n=e.m:n=t.U++;const s=Fn(t.F);Pe(s,"SID",t.I),Pe(s,"RID",n),Pe(s,"AID",t.T),No(t,s),t.o&&t.s&&Od(s,t.o,t.s),n=new So(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ow(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ad(t.h,n),Wu(n,s,e)}function No(t,e){t.ia&&yd(t.ia,function(n,s){Pe(e,s,n)}),t.l&&pw({},function(n,s){Pe(e,s,n)})}function Ow(t,e,n){n=Math.min(t.i.length,n);var s=t.l?pt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{ON(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Dw(t){t.g||t.u||(t.Z=1,Zv(t.Ia,t),t.A=0)}function Pd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Io(pt(t.Ia,t),Lw(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,Pw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Io(pt(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,wt(10),Ql(this),Pw(this))};function Md(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Pw(t){t.g=new So(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Fn(t.sa);Pe(e,"RID","rpc"),Pe(e,"SID",t.I),Pe(e,"CI",t.L?"0":"1"),Pe(e,"AID",t.T),Pe(e,"TYPE","xmlhttp"),No(t,e),t.o&&t.s&&Od(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Kl(Fn(e)),n.s=null,n.P=!0,uw(n,t)}V.cb=function(){this.v!=null&&(this.v=null,Ql(this),Pd(this),wt(19))};function Qa(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Mw(t,e){var n=null;if(t.g==e){Qa(t),Md(t),t.g=null;var s=2}else if(zu(t.h,e))n=e.D,bw(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=jl(),rt(s,new ow(s,n)),Yl(t)}else Dw(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&UN(t,e)||s==2&&Pd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:As(t,5);break;case 4:As(t,10);break;case 3:As(t,6);break;default:As(t,2)}}}function Lw(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function As(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=pt(t.kb,t);n||(n=new Ms("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||za(n,"https"),Kl(n)),DN(n.toString(),s)}else wt(2);t.G=0,t.l&&t.l.va(e),Fw(t),xw(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Fw(t){if(t.G=0,t.la=[],t.l){const e=Tw(t.h);(e.length!=0||t.i.length!=0)&&(hm(t.la,e),hm(t.la,t.i),t.h.i.length=0,gd(t.i),t.i.length=0),t.l.ua()}}function Uw(t,e,n){var s=n instanceof Ms?Fn(n):new Ms(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ga(s,s.m);else{var i=Q.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ms(null,void 0);s&&za(r,s),e&&(r.g=e),i&&Ga(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Pe(s,n,e),Pe(s,"VER",t.ma),No(t,s),s}function $w(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Fe(new ko({jb:!0})):new Fe(t.ra),e.Ka(t.H),e}function Vw(){}V=Vw.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function Ya(){if(Oi&&!(10<=Number(tN)))throw Error("Environmental error: no available transport.")}Ya.prototype.g=function(t,e){return new Ft(t,e)};function Ft(t,e){Ze.call(this),this.g=new Nw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ha(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ha(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new er(this)}ot(Ft,Ze);Ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;wt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Uw(t,null,t.V),Yl(t)};Ft.prototype.close=function(){Dd(this.g)};Ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Td(t),t=n);e.i.push(new AN(e.ab++,t)),e.G==3&&Yl(e)};Ft.prototype.M=function(){this.g.l=null,delete this.j,Dd(this.g),delete this.g,Ft.X.M.call(this)};function Bw(t){Rd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(Bw,Rd);function jw(){kd.call(this),this.status=1}ot(jw,kd);function er(t){this.g=t}ot(er,Vw);er.prototype.xa=function(){rt(this.g,"a")};er.prototype.wa=function(t){rt(this.g,new Bw(t))};er.prototype.va=function(t){rt(this.g,new jw)};er.prototype.ua=function(){rt(this.g,"b")};Ya.prototype.createWebChannel=Ya.prototype.g;Ft.prototype.send=Ft.prototype.u;Ft.prototype.open=Ft.prototype.m;Ft.prototype.close=Ft.prototype.close;ql.NO_ERROR=0;ql.TIMEOUT=8;ql.HTTP_ERROR=6;aw.COMPLETE="complete";lw.EventType=Co;Co.OPEN="a";Co.CLOSE="b";Co.ERROR="c";Co.MESSAGE="d";Ze.prototype.listen=Ze.prototype.N;Fe.prototype.listenOnce=Fe.prototype.O;Fe.prototype.getLastError=Fe.prototype.Oa;Fe.prototype.getLastErrorCode=Fe.prototype.Ea;Fe.prototype.getStatus=Fe.prototype.aa;Fe.prototype.getResponseJson=Fe.prototype.Sa;Fe.prototype.getResponseText=Fe.prototype.fa;Fe.prototype.send=Fe.prototype.da;Fe.prototype.setWithCredentials=Fe.prototype.Ka;var $N=function(){return new Ya},VN=function(){return jl()},Wc=ql,BN=aw,jN=Js,Tm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},qN=ko,ta=lw,HN=Fe;const Im="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new fo("@firebase/firestore");function Cm(){return Ws.logLevel}function B(t,...e){if(Ws.logLevel<=fe.DEBUG){const n=e.map(Ld);Ws.debug(`Firestore (${tr}): ${t}`,...n)}}function Un(t,...e){if(Ws.logLevel<=fe.ERROR){const n=e.map(Ld);Ws.error(`Firestore (${tr}): ${t}`,...n)}}function Gu(t,...e){if(Ws.logLevel<=fe.WARN){const n=e.map(Ld);Ws.warn(`Firestore (${tr}): ${t}`,...n)}}function Ld(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${tr}) INTERNAL ASSERTION FAILED: `+t;throw Un(e),new Error(e)}function Se(t,e){t||G()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class KN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zN{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Pn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Se(typeof s.accessToken=="string"),new qw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new at(e)}}class GN{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=at.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Se(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class QN{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new GN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.A=n.token,new YN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=JN(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function Di(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new He(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new He(0,0))}static max(){return new J(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return io.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof io?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends io{construct(e,n,s){return new xe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const ZN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends io{construct(e,n,s){return new dt(e,n,s)}static isValidIdentifier(e){return ZN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new U(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new U(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(xe.fromString(e))}static fromName(e){return new q(xe.fromString(e).popFirst(5))}static empty(){return new q(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new xe(e.slice()))}}function ex(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(s===1e9?new He(n+1,0):new He(n,s));return new cs(i,q.empty(),e)}function tx(t){return new cs(t.readTime,t.key,-1)}class cs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new cs(J.min(),q.empty(),-1)}static max(){return new cs(J.max(),q.empty(),-1)}}function nx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ix{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==sx)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(i=>i?k.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new k((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new k((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Oo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Fd.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ww(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t){return t==null}function Xa(t){return t===0&&1/t==-1/0}function ox(t){return typeof t=="number"&&Number.isInteger(t)&&!Xa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const ax=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function us(t){if(Se(!!t),typeof t=="string"){let e=0;const n=ax.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pi(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zw(t){const e=t.mapValue.fields.__previous_value__;return Kw(e)?zw(e):e}function oo(t){const e=us(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ks(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kw(t)?4:lx(t)?9007199254740991:10:G()}function En(t,e){if(t===e)return!0;const n=Ks(t);if(n!==Ks(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oo(t).isEqual(oo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=us(s.timestampValue),o=us(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Pi(s.bytesValue).isEqual(Pi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=je(s.doubleValue),o=je(i.doubleValue);return r===o?Xa(r)===Xa(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Di(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Sm(r)!==Sm(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!En(r[a],o[a])))return!1;return!0}(t,e);default:return G()}}function ao(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Mi(t,e){if(t===e)return 0;const n=Ks(t),s=Ks(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=je(i.integerValue||i.doubleValue),a=je(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Rm(t.timestampValue,e.timestampValue);case 4:return Rm(oo(t),oo(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Pi(i),a=Pi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ge(o[l],a[l]);if(c!==0)return c}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ge(je(i.latitude),je(r.latitude));return o!==0?o:ge(je(i.longitude),je(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Mi(o[l],a[l]);if(c)return c}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===na.mapValue&&r===na.mapValue)return 0;if(i===na.mapValue)return 1;if(r===na.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ge(a[u],c[u]);if(h!==0)return h;const d=Mi(o[a[u]],l[c[u]]);if(d!==0)return d}return ge(a.length,c.length)}(t.mapValue,e.mapValue);default:throw G()}}function Rm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=us(t),s=us(e),i=ge(n.seconds,s.seconds);return i!==0?i:ge(n.nanos,s.nanos)}function Li(t){return Qu(t)}function Qu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=us(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Pi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Qu(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Qu(s.fields[a])}`;return r+"}"}(t.mapValue):G();var e,n}function km(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yu(t){return!!t&&"integerValue"in t}function Ud(t){return!!t&&"arrayValue"in t}function Am(t){return!!t&&"nullValue"in t}function Nm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pa(t){return!!t&&"mapValue"in t}function Or(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Or(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Or(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ja{constructor(e,n){this.position=e,this.inclusive=n}}function xm(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=Mi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Om(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gw{}class qe extends Gw{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ux(e,n,s):n==="array-contains"?new fx(e,s):n==="in"?new px(e,s):n==="not-in"?new mx(e,s):n==="array-contains-any"?new gx(e,s):new qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new hx(e,s):new dx(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mi(n,this.value)):n!==null&&Ks(this.value)===Ks(n)&&this.matchesComparison(Mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class on extends Gw{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new on(e,n)}matches(e){return Qw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Qw(t){return t.op==="and"}function Yw(t){return cx(t)&&Qw(t)}function cx(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function Xu(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+Li(t.value);if(Yw(t))return t.filters.map(e=>Xu(e)).join(",");{const e=t.filters.map(n=>Xu(n)).join(",");return`${t.op}(${e})`}}function Xw(t,e){return t instanceof qe?function(n,s){return s instanceof qe&&n.op===s.op&&n.field.isEqual(s.field)&&En(n.value,s.value)}(t,e):t instanceof on?function(n,s){return s instanceof on&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Xw(r,s.filters[o]),!0):!1}(t,e):void G()}function Jw(t){return t instanceof qe?function(e){return`${e.field.canonicalString()} ${e.op} ${Li(e.value)}`}(t):t instanceof on?function(e){return e.op.toString()+" {"+e.getFilters().map(Jw).join(" ,")+"}"}(t):"Filter"}class ux extends qe{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class hx extends qe{constructor(e,n){super(e,"in",n),this.keys=Zw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dx extends qe{constructor(e,n){super(e,"not-in",n),this.keys=Zw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Zw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class fx extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ud(n)&&ao(n.arrayValue,this.value)}}class px extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ao(this.value.arrayValue,n)}}class mx extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ao(this.value.arrayValue,n)}}class gx extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ud(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ao(this.value.arrayValue,s))}}/**
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
 */class Dr{constructor(e,n="asc"){this.field=e,this.dir=n}}function _x(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sa(this.root,e,this.comparator,!0)}}class sa{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??et.RED,this.left=i??et.EMPTY,this.right=r??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new et(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,i){return this}insert(t,e,n){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dm(this.data.getIterator())}getIteratorFrom(e){return new Dm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Dm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new We(dt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Di(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Or(n)}setAll(e){let n=dt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Or(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];pa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Zs(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Rt(Or(this.value))}}function e0(t){const e=[];return Zs(t.fields,(n,s)=>{const i=new dt([n]);if(pa(s)){const r=e0(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,J.min(),J.min(),J.min(),Rt.empty(),0)}static newFoundDocument(e,n,s,i){return new ut(e,1,n,J.min(),s,i,0)}static newNoDocument(e,n){return new ut(e,2,n,J.min(),J.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,J.min(),J.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yx{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Pm(t,e=null,n=[],s=[],i=null,r=null,o=null){return new yx(t,e,n,s,i,r,o)}function $d(t){const e=Z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Xu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Xl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Li(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Li(s)).join(",")),e.ft=n}return e.ft}function Vd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_x(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Xw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Om(t.startAt,e.startAt)&&Om(t.endAt,e.endAt)}function Ju(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function vx(t,e,n,s,i,r,o,a){return new Do(t,e,n,s,i,r,o,a)}function Jl(t){return new Do(t)}function Mm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function t0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bd(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function n0(t){return t.collectionGroup!==null}function Ei(t){const e=Z(t);if(e.dt===null){e.dt=[];const n=Bd(e),s=t0(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Dr(n)),e.dt.push(new Dr(dt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Dr(dt.keyField(),r))}}}return e.dt}function $n(t){const e=Z(t);if(!e._t)if(e.limitType==="F")e._t=Pm(e.path,e.collectionGroup,Ei(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ei(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Dr(r.field,o))}const s=e.endAt?new Ja(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ja(e.startAt.position,e.startAt.inclusive):null;e._t=Pm(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function Zu(t,e){e.getFirstInequalityField(),Bd(t);const n=t.filters.concat([e]);return new Do(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Za(t,e,n){return new Do(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zl(t,e){return Vd($n(t),$n(e))&&t.limitType===e.limitType}function s0(t){return`${$d($n(t))}|lt:${t.limitType}`}function eh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Jw(s)).join(", ")}]`),Xl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Li(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Li(s)).join(",")),`Target(${n})`}($n(t))}; limitType=${t.limitType})`}function ec(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Ei(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=xm(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ei(n),s)||n.endAt&&!function(i,r,o){const a=xm(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ei(n),s))}(t,e)}function wx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function i0(t){return(e,n)=>{let s=!1;for(const i of Ei(t)){const r=Ex(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Ex(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Mi(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xa(e)?"-0":e}}function o0(t){return{integerValue:""+t}}function bx(t,e){return ox(e)?o0(e):r0(t,e)}/**
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
 */class tc{constructor(){this._=void 0}}function Tx(t,e,n){return t instanceof el?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Fi?l0(t,e):t instanceof lo?c0(t,e):function(s,i){const r=a0(s,i),o=Lm(r)+Lm(s.gt);return Yu(r)&&Yu(s.gt)?o0(o):r0(s.yt,o)}(t,e)}function Ix(t,e,n){return t instanceof Fi?l0(t,e):t instanceof lo?c0(t,e):n}function a0(t,e){return t instanceof tl?Yu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class el extends tc{}class Fi extends tc{constructor(e){super(),this.elements=e}}function l0(t,e){const n=u0(e);for(const s of t.elements)n.some(i=>En(i,s))||n.push(s);return{arrayValue:{values:n}}}class lo extends tc{constructor(e){super(),this.elements=e}}function c0(t,e){let n=u0(e);for(const s of t.elements)n=n.filter(i=>!En(i,s));return{arrayValue:{values:n}}}class tl extends tc{constructor(e,n){super(),this.yt=e,this.gt=n}}function Lm(t){return je(t.integerValue||t.doubleValue)}function u0(t){return Ud(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,n){this.field=e,this.transform=n}}function Sx(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Fi&&s instanceof Fi||n instanceof lo&&s instanceof lo?Di(n.elements,s.elements,En):n instanceof tl&&s instanceof tl?En(n.gt,s.gt):n instanceof el&&s instanceof el}(t.transform,e.transform)}class Rx{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nc{}function h0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jd(t.key,nn.none()):new Po(t.key,t.data,nn.none());{const n=t.data,s=Rt.empty();let i=new We(dt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ms(t.key,s,new Dt(i.toArray()),nn.none())}}function kx(t,e,n){t instanceof Po?function(s,i,r){const o=s.value.clone(),a=Um(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ms?function(s,i,r){if(!ma(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Um(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(d0(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Pr(t,e,n,s){return t instanceof Po?function(i,r,o,a){if(!ma(i.precondition,r))return o;const l=i.value.clone(),c=$m(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof ms?function(i,r,o,a){if(!ma(i.precondition,r))return o;const l=$m(i.fieldTransforms,a,r),c=r.data;return c.setAll(d0(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return ma(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Ax(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=a0(s.transform,i||null);r!=null&&(n===null&&(n=Rt.empty()),n.set(s.field,r))}return n||null}function Fm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Di(n,s,(i,r)=>Sx(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Po extends nc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ms extends nc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function d0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Um(t,e,n){const s=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Ix(o,a,n[i]))}return s}function $m(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Tx(r,o,e))}return s}class jd extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nx extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,oe;function Ox(t){switch(t){default:return G();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function f0(t){if(t===void 0)return Un("GRPC error has no .code"),T.UNKNOWN;switch(t){case Be.OK:return T.OK;case Be.CANCELLED:return T.CANCELLED;case Be.UNKNOWN:return T.UNKNOWN;case Be.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Be.INTERNAL:return T.INTERNAL;case Be.UNAVAILABLE:return T.UNAVAILABLE;case Be.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Be.NOT_FOUND:return T.NOT_FOUND;case Be.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Be.ABORTED:return T.ABORTED;case Be.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Be.DATA_LOSS:return T.DATA_LOSS;default:return G()}}(oe=Be||(Be={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zs(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Ww(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=new ze(q.comparator);function Vn(){return Dx}const p0=new ze(q.comparator);function br(...t){let e=p0;for(const n of t)e=e.insert(n.key,n);return e}function m0(t){let e=p0;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ns(){return Mr()}function g0(){return Mr()}function Mr(){return new nr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Px=new ze(q.comparator),Mx=new We(q.comparator);function ie(...t){let e=Mx;for(const n of t)e=e.add(n);return e}const Lx=new We(ge);function _0(){return Lx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Mo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new sc(J.min(),i,_0(),Vn(),ie())}}class Mo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Mo(s,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class y0{constructor(e,n){this.targetId=e,this.Et=n}}class v0{constructor(e,n,s=_t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Vm{constructor(){this.At=0,this.Rt=jm(),this.bt=_t.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ie(),n=ie(),s=ie();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:G()}}),new Mo(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=jm()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Fx{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Vn(),this.qt=Bm(),this.Ut=new We(ge)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(Ju(r))if(s===0){const o=new q(r.path);this.Qt(n,o,ut.newNoDocument(o,J.min()))}else Se(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Ju(a.target)){const l=new q(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,ut.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=ie();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new sc(e,n,this.Ut,this.Lt,s);return this.Lt=Vn(),this.qt=Bm(),this.Ut=new We(ge),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Vm,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new We(ge),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Vm),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Bm(){return new ze(q.comparator)}function jm(){return new ze(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$x=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Vx=(()=>({and:"AND",or:"OR"}))();class Bx{constructor(e,n){this.databaseId=e,this.wt=n}}function nl(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function w0(t,e){return t.wt?e.toBase64():e.toUint8Array()}function jx(t,e){return nl(t,e.toTimestamp())}function _n(t){return Se(!!t),J.fromTimestamp(function(e){const n=us(e);return new He(n.seconds,n.nanos)}(t))}function qd(t,e){return function(n){return new xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function E0(t){const e=xe.fromString(t);return Se(C0(e)),e}function th(t,e){return qd(t.databaseId,e.path)}function Kc(t,e){const n=E0(e);if(n.get(1)!==t.databaseId.projectId)throw new U(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(b0(n))}function nh(t,e){return qd(t.databaseId,e)}function qx(t){const e=E0(t);return e.length===4?xe.emptyPath():b0(e)}function sh(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b0(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qm(t,e,n){return{name:th(t,e),fields:n.value.mapValue.fields}}function Hx(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.wt?(Se(c===void 0||typeof c=="string"),_t.fromBase64String(c||"")):(Se(c===void 0||c instanceof Uint8Array),_t.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?T.UNKNOWN:f0(l.code);return new U(c,l.message||"")}(o);n=new v0(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Kc(t,s.document.name),r=_n(s.document.updateTime),o=s.document.createTime?_n(s.document.createTime):J.min(),a=new Rt({mapValue:{fields:s.document.fields}}),l=ut.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new ga(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Kc(t,s.document),r=s.readTime?_n(s.readTime):J.min(),o=ut.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ga([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Kc(t,s.document),r=s.removedTargetIds||[];n=new ga([],r,i,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new xx(i),o=s.targetId;n=new y0(o,r)}}return n}function Wx(t,e){let n;if(e instanceof Po)n={update:qm(t,e.key,e.value)};else if(e instanceof jd)n={delete:th(t,e.key)};else if(e instanceof ms)n={update:qm(t,e.key,e.data),updateMask:eO(e.fieldMask)};else{if(!(e instanceof Nx))return G();n={verify:th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof el)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof lo)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof tl)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function Kx(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?_n(s.updateTime):_n(i);return r.isEqual(J.min())&&(r=_n(i)),new Rx(r,s.transformResults||[])}(n,e))):[]}function zx(t,e){return{documents:[nh(t,e.path)]}}function Gx(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=nh(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=nh(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return I0(on.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:oi(u.field),direction:Xx(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.wt||Xl(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Qx(t){let e=qx(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Se(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=T0(u);return h instanceof on&&Yw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Dr(ai(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Xl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Ja(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Ja(d,h)}(n.endAt)),vx(e,i,o,r,a,"F",l,c)}function Yx(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function T0(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ai(e.unaryFilter.field);return qe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ai(e.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ai(e.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ai(e.unaryFilter.field);return qe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return qe.create(ai(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return on.create(e.compositeFilter.filters.map(n=>T0(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function Xx(t){return Ux[t]}function Jx(t){return $x[t]}function Zx(t){return Vx[t]}function oi(t){return{fieldPath:t.canonicalString()}}function ai(t){return dt.fromServerFormat(t.fieldPath)}function I0(t){return t instanceof qe?function(e){if(e.op==="=="){if(Nm(e.value))return{unaryFilter:{field:oi(e.field),op:"IS_NAN"}};if(Am(e.value))return{unaryFilter:{field:oi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Nm(e.value))return{unaryFilter:{field:oi(e.field),op:"IS_NOT_NAN"}};if(Am(e.value))return{unaryFilter:{field:oi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oi(e.field),op:Jx(e.op),value:e.value}}}(t):t instanceof on?function(e){const n=e.getFilters().map(s=>I0(s));return n.length===1?n[0]:{compositeFilter:{op:Zx(e.op),filters:n}}}(t):G()}function eO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function C0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&kx(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Pr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Pr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=g0();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=h0(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Di(this.mutations,e.mutations,(n,s)=>Fm(n,s))&&Di(this.baseMutations,e.baseMutations,(n,s)=>Fm(n,s))}}class Hd{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Se(e.mutations.length===s.length);let i=Px;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Hd(e,n,s,i)}}/**
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
 */class nO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ls{constructor(e,n,s,i,r=J.min(),o=J.min(),a=_t.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ls(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.ie=e}}function iO(t){const e=Qx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Za(e,e.limit,"L"):e}/**
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
 */class rO{constructor(){this.Je=new oO}addToCollectionParentIndex(e,n){return this.Je.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(cs.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(cs.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class oO{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new We(xe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new We(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ui(0)}static vn(){return new Ui(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(){this.changes=new nr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Pr(s.mutation,i,Dt.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ie()){const i=Ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=br();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ie()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Vn();const o=Mr(),a=Mr();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof ms)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Pr(u.mutation,c,u.mutation.getFieldMask(),He.now())):o.set(c.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new lO(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Mr();let i=new ze((o,a)=>o-a),r=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Dt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=g0();u.forEach(d=>{if(!r.has(d)){const f=h0(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):n0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):k.resolve(Ns());let a=-1,l=r;return o.next(c=>k.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ie())).next(u=>({batchId:a,changes:m0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let i=br();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=br();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(c,u){return new Do(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,ut.newInvalidDocument(c)))});let o=br();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Pr(c.mutation,l,Dt.empty(),He.now()),ec(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return k.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:_n(s.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:iO(s.bundledQuery),readTime:_n(s.readTime)}}(n)),k.resolve()}}/**
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
 */class hO{constructor(){this.overlays=new ze(q.comparator),this.es=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ns();return k.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const i=Ns(),r=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ze((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Ns(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ns(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return k.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new nO(n,s));let r=this.es.get(n);r===void 0&&(r=ie(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.ns=new We(Qe.ss),this.rs=new We(Qe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Qe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Qe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new q(new xe([])),s=new Qe(n,e),i=new Qe(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new q(new xe([])),s=new Qe(n,e),i=new Qe(n,e+1);let r=ie();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Qe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Qe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return q.comparator(e.key,n.key)||ge(e._s,n._s)}static os(e,n){return ge(e._s,n._s)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new We(Qe.ss)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tO(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Qe(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return k.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Qe(n,0),i=new Qe(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new We(ge);return n.forEach(i=>{const r=new Qe(i,0),o=new Qe(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),k.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;q.isDocumentKey(r)||(r=r.child(""));const o=new Qe(new q(r),0);let a=new We(ge);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),k.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return k.forEach(n.mutations,i=>{const r=new Qe(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Qe(n,0),i=this.gs.firstAfterOrEqual(s);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.Es=e,this.docs=new ze(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let s=Vn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ut.newInvalidDocument(i))}),k.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Vn();const o=n.path,a=new q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||nx(tx(u),s)<=0||(i.has(u.key)||ec(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,n,s,i){G()}As(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new pO(this)}getSize(e){return k.resolve(this.size)}}class pO extends aO{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.persistence=e,this.Rs=new nr(n=>$d(n),Vd),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Wd,this.targetCount=0,this.vs=Ui.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),k.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ui(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Dn(n),k.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(r).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Fd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new mO(this),this.indexManager=new rO,this.remoteDocumentCache=function(s){return new fO(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new sO(n),this.Ns=new uO(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new dO(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const i=new _O(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return k.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class _O extends ix{constructor(e){super(),this.currentSequenceNumber=e}}class Kd{constructor(e){this.persistence=e,this.Fs=new Wd,this.$s=null}static Bs(e){return new Kd(e)}get Ls(){if(this.$s)return this.$s;throw G()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),k.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Ls,s=>{const i=q.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,J.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return k.or([()=>k.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=ie(),i=ie();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new zd(e,n.fromCache,s,i)}}/**
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
 */class yO{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Mm(n))return k.resolve(null);let s=$n(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Za(n,null,"F"),s=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ie(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,Za(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return Mm(n)||i.isEqual(J.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Cm()<=fe.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),eh(n)),this.Bi(e,o,n,ex(i,-1)))})}Fi(e,n){let s=new We(i0(e));return n.forEach((i,r)=>{ec(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Cm()<=fe.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",eh(n)),this.Ni.getDocumentsMatchingQuery(e,n,cs.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new ze(ge),this.Ui=new nr(r=>$d(r),Vd),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cO(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function wO(t,e,n,s){return new vO(t,e,n,s)}async function S0(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=ie();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function EO(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=k.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(m=>{const _=l.docVersions.get(f);Se(_!==null),m.version.compareTo(_)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ie();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function R0(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function bO(t,e){const n=Z(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(_t.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(m,_,y){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,u)&&a.push(n.Cs.updateTargetData(r,f))});let l=Vn(),c=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(TO(r,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!s.isEqual(J.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return k.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.qi=i,r))}function TO(t,e,n){let s=ie(),i=ie();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Vn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function IO(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function CO(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,k.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Ls(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function ih(t,e,n){const s=Z(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Oo(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function Hm(t,e,n){const s=Z(t);let i=J.min(),r=ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=Z(a),h=u.Ui.get(c);return h!==void 0?k.resolve(u.qi.get(h)):u.Cs.getTargetData(l,c)}(s,o,$n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?r:ie())).next(a=>(SO(s,wx(e),a),{documents:a,Hi:r})))}function SO(t,e,n){let s=t.Ki.get(e)||J.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class Wm{constructor(){this.activeTargetIds=_0()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RO{constructor(){this.Lr=new Wm,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Wm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class kO{Ur(e){}shutdown(){}}/**
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
 */class Km{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NO{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);B("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(B("RestConnection","Received: ",l),l),l=>{throw Gu("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+tr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=AO[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new HN;a.setWithCredentials(!0),a.listenOnce(BN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Wc.NO_ERROR:const c=a.getResponseJson();B("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Wc.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),o(new U(T.DEADLINE_EXCEEDED,"Request time out"));break;case Wc.HTTP_ERROR:const u=a.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(_)>=0?_:T.UNKNOWN}(d.status);o(new U(f,d.message))}else o(new U(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(T.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=$N(),o=VN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new qN({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");B("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new NO({Hr:m=>{h?B("Connection","Not sending because WebChannel is closed:",m):(u||(B("Connection","Opening WebChannel transport."),c.open(),u=!0),B("Connection","WebChannel sending:",m),c.send(m))},Jr:()=>c.close()}),f=(m,_,y)=>{m.listen(_,b=>{try{y(b)}catch(R){setTimeout(()=>{throw R},0)}})};return f(c,ta.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),f(c,ta.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),d.io())}),f(c,ta.EventType.ERROR,m=>{h||(h=!0,Gu("Connection","WebChannel transport errored:",m),d.io(new U(T.UNAVAILABLE,"The operation could not be completed")))}),f(c,ta.EventType.MESSAGE,m=>{var _;if(!h){const y=m.data[0];Se(!!y);const b=y,R=b.error||((_=b[0])===null||_===void 0?void 0:_.error);if(R){B("Connection","WebChannel received error:",R);const A=R.status;let P=function(de){const be=Be[de];if(be!==void 0)return f0(be)}(A),te=R.message;P===void 0&&(P=T.INTERNAL,te="Unknown error status: "+A+" with message "+R.message),h=!0,d.io(new U(P,te)),c.close()}else B("Connection","WebChannel received:",y),d.ro(y)}}),f(o,jN.STAT_EVENT,m=>{m.stat===Tm.PROXY?B("Connection","Detected buffering proxy"):m.stat===Tm.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function zc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return new Bx(t,!0)}class k0{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new k0(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new U(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OO extends A0{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Hx(this.yt,e),s=function(i){if(!("targetChange"in i))return J.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?J.min():r.readTime?_n(r.readTime):J.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=sh(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=Ju(a)?{documents:zx(i,a)}:{query:Gx(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=w0(i,r.resumeToken):r.snapshotVersion.compareTo(J.min())>0&&(o.readTime=nl(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=Yx(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=sh(this.yt),n.removeTarget=e,this.Bo(n)}}class DO extends A0{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Kx(e.writeResults,e.commitTime),s=_n(e.commitTime);return this.listener.Zo(s,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=sh(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Wx(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new U(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(T.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(T.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class MO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Un(n),this.ou=!1):B("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{ei(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Z(a);l._u.add(4),await Lo(l),l.gu.set("Unknown"),l._u.delete(4),await rc(l)}(this))})}),this.gu=new MO(s,i)}}async function rc(t){if(ei(t))for(const e of t.wu)await e(!0)}async function Lo(t){for(const e of t.wu)await e(!1)}function N0(t,e){const n=Z(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Yd(n)?Qd(n):sr(n).ko()&&Gd(n,e))}function x0(t,e){const n=Z(t),s=sr(n);n.du.delete(e),s.ko()&&O0(n,e),n.du.size===0&&(s.ko()?s.Fo():ei(n)&&n.gu.set("Unknown"))}function Gd(t,e){t.yu.Ot(e.targetId),sr(t).zo(e)}function O0(t,e){t.yu.Ot(e),sr(t).Ho(e)}function Qd(t){t.yu=new Fx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),sr(t).start(),t.gu.uu()}function Yd(t){return ei(t)&&!sr(t).No()&&t.du.size>0}function ei(t){return Z(t)._u.size===0}function D0(t){t.yu=void 0}async function FO(t){t.du.forEach((e,n)=>{Gd(t,e)})}async function UO(t,e){D0(t),Yd(t)?(t.gu.hu(e),Qd(t)):t.gu.set("Unknown")}async function $O(t,e,n){if(t.gu.set("Online"),e instanceof v0&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await sl(t,s)}else if(e instanceof ga?t.yu.Kt(e):e instanceof y0?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(J.min()))try{const s=await R0(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.du.get(l);c&&i.du.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(_t.EMPTY_BYTE_STRING,l.snapshotVersion)),O0(i,a);const c=new Ls(l.target,a,1,l.sequenceNumber);Gd(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await sl(t,s)}}async function sl(t,e,n){if(!Oo(e))throw e;t._u.add(1),await Lo(t),t.gu.set("Offline"),n||(n=()=>R0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await rc(t)})}function P0(t,e){return e().catch(n=>sl(t,n,e))}async function oc(t){const e=Z(t),n=hs(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;VO(e);)try{const i=await IO(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,BO(e,i)}catch(i){await sl(e,i)}M0(e)&&L0(e)}function VO(t){return ei(t)&&t.fu.length<10}function BO(t,e){t.fu.push(e);const n=hs(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function M0(t){return ei(t)&&!hs(t).No()&&t.fu.length>0}function L0(t){hs(t).start()}async function jO(t){hs(t).eu()}async function qO(t){const e=hs(t);for(const n of t.fu)e.Xo(n.mutations)}async function HO(t,e,n){const s=t.fu.shift(),i=Hd.from(s,e,n);await P0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await oc(t)}async function WO(t,e){e&&hs(t).Yo&&await async function(n,s){if(i=s.code,Ox(i)&&i!==T.ABORTED){const r=n.fu.shift();hs(n).Mo(),await P0(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await oc(n)}var i}(t,e),M0(t)&&L0(t)}async function zm(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=ei(n);n._u.add(3),await Lo(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await rc(n)}async function KO(t,e){const n=Z(t);e?(n._u.delete(2),await rc(n)):e||(n._u.add(2),await Lo(n),n.gu.set("Unknown"))}function sr(t){return t.pu||(t.pu=function(e,n,s){const i=Z(e);return i.su(),new OO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:FO.bind(null,t),Zr:UO.bind(null,t),Wo:$O.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Yd(t)?Qd(t):t.gu.set("Unknown")):(await t.pu.stop(),D0(t))})),t.pu}function hs(t){return t.Iu||(t.Iu=function(e,n,s){const i=Z(e);return i.su(),new DO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:jO.bind(null,t),Zr:WO.bind(null,t),tu:qO.bind(null,t),Zo:HO.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await oc(t)):(await t.Iu.stop(),t.fu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Xd(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jd(t,e){if(Un("AsyncQueue",`${e}: ${t}`),Oo(t))return new U(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=br(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new bi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.Tu=new ze(q.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):G():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class $i{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $i(e,n,bi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(){this.Au=void 0,this.listeners=[]}}class GO{constructor(){this.queries=new nr(e=>s0(e),Zl),this.onlineState="Unknown",this.Ru=new Set}}async function Zd(t,e){const n=Z(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new zO),i)try{r.Au=await n.onListen(s)}catch(o){const a=Jd(o,`Initialization of query '${eh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&tf(n)}async function ef(t,e){const n=Z(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function QO(t,e){const n=Z(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&tf(n)}function YO(t,e,n){const s=Z(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function tf(t){t.Ru.forEach(e=>{e.next()})}class nf{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new $i(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=$i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.key=e}}class U0{constructor(e){this.key=e}}class XO{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ie(),this.mutatedKeys=ie(),this.Gu=i0(e),this.Qu=new bi(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Gm,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=ec(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?m!==_&&(s.track({type:3,doc:f}),y=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),y=!0,(l&&this.Gu(f,l)>0||c&&this.Gu(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),y=!0):d&&!f&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((c,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return f(h)-f(d)}(c.type,u.type)||this.Gu(c.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,r.length!==0||l?{snapshot:new $i(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Gm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ie(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new U0(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new F0(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ie();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return $i.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class JO{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ZO{constructor(e){this.key=e,this.nc=!1}}class eD{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new nr(a=>s0(a),Zl),this.rc=new Map,this.oc=new Set,this.uc=new ze(q.comparator),this.cc=new Map,this.ac=new Wd,this.hc={},this.lc=new Map,this.fc=Ui.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function tD(t,e){const n=hD(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await CO(n.localStore,$n(e));n.isPrimaryClient&&N0(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await nD(n,e,s,a==="current",o.resumeToken)}return i}async function nD(t,e,n,s,i){t._c=(h,d,f)=>async function(m,_,y,b){let R=_.view.Wu(y);R.$i&&(R=await Hm(m.localStore,_.query,!1).then(({documents:te})=>_.view.Wu(te,R)));const A=b&&b.targetChanges.get(_.targetId),P=_.view.applyChanges(R,m.isPrimaryClient,A);return Ym(m,_.targetId,P.Xu),P.snapshot}(t,h,d,f);const r=await Hm(t.localStore,e,!0),o=new XO(e,r.Hi),a=o.Wu(r.documents),l=Mo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Ym(t,n,c.Xu);const u=new JO(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function sD(t,e){const n=Z(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!Zl(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ih(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),x0(n.remoteStore,s.targetId),rh(n,s.targetId)}).catch(xo)):(rh(n,s.targetId),await ih(n.localStore,s.targetId,!0))}async function iD(t,e,n){const s=dD(t);try{const i=await function(r,o){const a=Z(r),l=He.now(),c=o.reduce((d,f)=>d.add(f.key),ie());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Vn(),m=ie();return a.Gi.getEntries(d,c).next(_=>{f=_,f.forEach((y,b)=>{b.isValidDocument()||(m=m.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(_=>{u=_;const y=[];for(const b of o){const R=Ax(b,u.get(b.key).overlayedDocument);R!=null&&y.push(new ms(b.key,R,e0(R.value.mapValue),nn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,y,o)}).next(_=>{h=_;const y=_.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,_.batchId,y)})}).then(()=>({batchId:h.batchId,changes:m0(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new ze(ge)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Fo(s,i.changes),await oc(s.remoteStore)}catch(i){const r=Jd(i,"Failed to persist write");n.reject(r)}}async function $0(t,e){const n=Z(t);try{const s=await bO(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Se(o.nc):i.removedDocuments.size>0&&(Se(o.nc),o.nc=!1))}),await Fo(n,s,e)}catch(s){await xo(s)}}function Qm(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Z(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.bu(o)&&(l=!0)}),l&&tf(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function rD(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new ze(q.comparator);o=o.insert(r,ut.newNoDocument(r,J.min()));const a=ie().add(r),l=new sc(J.min(),new Map,new We(ge),o,a);await $0(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),sf(s)}else await ih(s.localStore,e,!1).then(()=>rh(s,e,n)).catch(xo)}async function oD(t,e){const n=Z(t),s=e.batch.batchId;try{const i=await EO(n.localStore,e);B0(n,s,null),V0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fo(n,i)}catch(i){await xo(i)}}async function aD(t,e,n){const s=Z(t);try{const i=await function(r,o){const a=Z(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Se(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);B0(s,e,n),V0(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Fo(s,i)}catch(i){await xo(i)}}function V0(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function B0(t,e,n){const s=Z(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function rh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||j0(t,s)})}function j0(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(x0(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),sf(t))}function Ym(t,e,n){for(const s of n)s instanceof F0?(t.ac.addReference(s.key,e),lD(t,s)):s instanceof U0?(B("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||j0(t,s.key)):G()}function lD(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(B("SyncEngine","New document in limbo: "+n),t.oc.add(s),sf(t))}function sf(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(xe.fromString(e)),s=t.fc.next();t.cc.set(s,new ZO(n)),t.uc=t.uc.insert(n,s),N0(t.remoteStore,new Ls($n(Jl(n.path)),s,2,Fd.at))}}async function Fo(t,e,n){const s=Z(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=zd.Ci(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,l){const c=Z(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>k.forEach(l,h=>k.forEach(h.Si,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>k.forEach(h.Di,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Oo(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.qi.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);c.qi=c.qi.insert(h,m)}}}(s.localStore,r))}async function cD(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await S0(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new U(T.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fo(n,s.ji)}}function uD(t,e){const n=Z(t),s=n.cc.get(e);if(s&&s.nc)return ie().add(s.key);{let i=ie();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function hD(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rD.bind(null,e),e.sc.Wo=QO.bind(null,e.eventManager),e.sc.wc=YO.bind(null,e.eventManager),e}function dD(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aD.bind(null,e),e}class fD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ic(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return wO(this.persistence,new yO,e.initialUser,this.yt)}yc(e){return new gO(Kd.Bs,this.yt)}gc(e){return new RO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=cD.bind(null,this.syncEngine),await KO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new GO}createDatastore(e){const n=ic(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new xO(i));var i;return function(r,o,a,l){return new PO(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Qm(this.syncEngine,a,0),o=Km.C()?new Km:new kO,new LO(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new eD(s,i,r,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);B("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Lo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t,e,n){if(!n)throw new U(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mD(t,e,n,s){if(e===!0&&s===!0)throw new U(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xm(t){if(!q.isDocumentKey(t))throw new U(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jm(t){if(q.isDocumentKey(t))throw new U(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ac(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ac(t);throw new U(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function gD(t,e){if(e<=0)throw new U(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=new Map;class eg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,mD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new WN;switch(n.type){case"gapi":const s=n.client;return new QN(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Zm.get(e);n&&(B("ComponentProvider","Removing Datastore"),Zm.delete(e),n.terminate())}(this),Promise.resolve()}}function _D(t,e,n,s={}){var i;const r=(t=qt(t,lc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Gu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=at.MOCK_USER;else{o=tI(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new U(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new at(l)}t._authCredentials=new KN(new qw(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class gs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gs(this.firestore,e,this._query)}}class rs extends gs{constructor(e,n,s){super(e,n,Jl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new q(e))}withConverter(e){return new rs(this.firestore,e,this._path)}}function yD(t,e,...n){if(t=Le(t),q0("collection","path",e),t instanceof lc){const s=xe.fromString(e,...n);return Jm(s),new rs(t,null,s)}{if(!(t instanceof Et||t instanceof rs))throw new U(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return Jm(s),new rs(t.firestore,null,s)}}function vD(t,e,...n){if(t=Le(t),arguments.length===1&&(e=Hw.R()),q0("doc","path",e),t instanceof lc){const s=xe.fromString(e,...n);return Xm(s),new Et(t,null,new q(s))}{if(!(t instanceof Et||t instanceof rs))throw new U(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return Xm(s),new Et(t.firestore,t instanceof rs?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=Hw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{B("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(B("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Jd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ED(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await S0(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function bD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TD(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>zm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>zm(e.remoteStore,r)),t.onlineComponents=e}async function TD(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await ED(t,new fD)),t.offlineComponents}async function H0(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await bD(t,new pD)),t.onlineComponents}function ID(t){return H0(t).then(e=>e.syncEngine)}async function il(t){const e=await H0(t),n=e.eventManager;return n.onListen=tD.bind(null,e.syncEngine),n.onUnlisten=sD.bind(null,e.syncEngine),n}function CD(t,e,n={}){const s=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new rf({next:h=>{r.enqueueAndForget(()=>ef(i,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new U(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new U(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new nf(Jl(o.path),c,{includeMetadataChanges:!0,Nu:!0});return Zd(i,u)}(await il(t),t.asyncQueue,e,n,s)),s.promise}function SD(t,e,n={}){const s=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new rf({next:h=>{r.enqueueAndForget(()=>ef(i,u)),h.fromCache&&a.source==="server"?l.reject(new U(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new nf(o,c,{includeMetadataChanges:!0,Nu:!0});return Zd(i,u)}(await il(t),t.asyncQueue,e,n,s)),s.promise}class RD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new k0(this,"async_queue_retry"),this.Wc=()=>{const n=zc();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=zc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Pn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Oo(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Un("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Xd.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&G()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function tg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ds extends lc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new RD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||K0(this),this._firestoreClient.terminate()}}function W0(t,e){const n=typeof t=="object"?t:Lh(),s=typeof t=="string"?t:e||"(default)",i=Mh(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=ZT("firestore");r&&_D(i,...r)}return i}function cc(t){return t._firestoreClient||K0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function K0(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new rx(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new wD(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vi(_t.fromBase64String(e))}catch(n){throw new U(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vi(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=/^__.*__$/;class AD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new Po(e,this.data,n,this.fieldTransforms)}}class z0{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ms(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function G0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class fc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new fc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return rl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(G0(this.sa)&&kD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class ND{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||ic(e)}da(e,n,s,i=!1){return new fc({sa:e,methodName:n,fa:s,path:dt.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function of(t){const e=t._freezeSettings(),n=ic(t._databaseId);return new ND(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xD(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);af("Data must be an object, but it was:",o,s);const a=Q0(s,o);let l,c;if(r.merge)l=new Dt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=oh(e,h,n);if(!o.contains(d))throw new U(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);X0(u,d)||u.push(d)}l=new Dt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new AD(new Rt(a),l,c)}class pc extends hc{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pc}}function OD(t,e,n){return new fc({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class DD extends hc{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=OD(this,e,!0),s=this._a.map(r=>ir(r,n)),i=new Fi(s);return new Cx(e.path,i)}isEqual(e){return this===e}}function PD(t,e,n,s){const i=t.da(1,e,n);af("Data must be an object, but it was:",i,s);const r=[],o=Rt.empty();Zs(s,(l,c)=>{const u=lf(e,l,n);c=Le(c);const h=i.ca(u);if(c instanceof pc)r.push(u);else{const d=ir(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Dt(r);return new z0(o,a,i.fieldTransforms)}function MD(t,e,n,s,i,r){const o=t.da(1,e,n),a=[oh(e,s,n)],l=[i];if(r.length%2!=0)throw new U(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(oh(e,r[d])),l.push(r[d+1]);const c=[],u=Rt.empty();for(let d=a.length-1;d>=0;--d)if(!X0(c,a[d])){const f=a[d];let m=l[d];m=Le(m);const _=o.ca(f);if(m instanceof pc)c.push(f);else{const y=ir(m,_);y!=null&&(c.push(f),u.set(f,y))}}const h=new Dt(c);return new z0(u,h,o.fieldTransforms)}function LD(t,e,n,s=!1){return ir(n,t.da(s?4:3,e))}function ir(t,e){if(Y0(t=Le(t)))return af("Unsupported field value:",e,t),Q0(t,e);if(t instanceof hc)return function(n,s){if(!G0(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ir(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Le(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return bx(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=He.fromDate(n);return{timestampValue:nl(s.yt,i)}}if(n instanceof He){const i=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:nl(s.yt,i)}}if(n instanceof dc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Vi)return{bytesValue:w0(s.yt,n._byteString)};if(n instanceof Et){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qd(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${ac(n)}`)}(t,e)}function Q0(t,e){const n={};return Ww(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zs(t,(s,i)=>{const r=ir(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Y0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof dc||t instanceof Vi||t instanceof Et||t instanceof hc)}function af(t,e,n){if(!Y0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ac(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function oh(t,e,n){if((e=Le(e))instanceof uc)return e._internalPath;if(typeof e=="string")return lf(t,e);throw rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const FD=new RegExp("[~\\*/\\[\\]]");function lf(t,e,n){if(e.search(FD)>=0)throw rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uc(...e.split("."))._internalPath}catch{throw rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new U(T.INVALID_ARGUMENT,a+t+l)}function X0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UD extends J0{data(){return super.data()}}function cf(t,e){return typeof e=="string"?lf(t,e):e instanceof uc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uf{}class eE extends uf{}function $D(t,e,...n){let s=[];e instanceof uf&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof hf).length,o=i.filter(a=>a instanceof mc).length;if(r>1||r>0&&o>0)throw new U(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class mc extends eE{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new mc(e,n,s)}_apply(e){const n=this._parse(e);return tE(e._query,n),new gs(e.firestore,e.converter,Zu(e._query,n))}_parse(e){const n=of(e.firestore);return function(i,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new U(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){sg(u,c);const d=[];for(const f of u)d.push(ng(a,i,f));h={arrayValue:{values:d}}}else h=ng(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||sg(u,c),h=LD(o,r,u,c==="in"||c==="not-in");return qe.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function VD(t,e,n){const s=e,i=cf("where",t);return mc._create(i,s,n)}class hf extends uf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hf(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:on.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)tE(r,a),r=Zu(r,a)}(e._query,n),new gs(e.firestore,e.converter,Zu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class df extends eE{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new df(e,n,s)}_apply(e){return new gs(e.firestore,e.converter,Za(e._query,this._limit,this._limitType))}}function BD(t){return gD("limit",t),df._create("limit",t,"F")}function ng(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new U(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!n0(e)&&n.indexOf("/")!==-1)throw new U(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(xe.fromString(n));if(!q.isDocumentKey(s))throw new U(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return km(t,new q(s))}if(n instanceof Et)return km(t,n._key);throw new U(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ac(n)}.`)}function sg(t,e){if(!Array.isArray(t)||t.length===0)throw new U(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new U(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function tE(t,e){if(e.isInequality()){const s=Bd(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new U(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=t0(t);r!==null&&jD(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function jD(t,e,n){if(!n.isEqual(e))throw new U(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class qD{convertValue(e,n="none"){switch(Ks(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return Zs(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new dc(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=zw(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(oo(e));default:return null}}convertTimestamp(e){const n=us(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=xe.fromString(e);Se(C0(s));const i=new ro(s.get(1),s.get(3)),r=new q(s.popFirst(5));return i.isEqual(n)||Un(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nE extends J0{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class _a extends nE{data(e={}){return super.data(e)}}class sE{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Tr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new _a(this._firestore,this._userDataWriter,s.key,s,new Tr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new _a(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Tr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new _a(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Tr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:WD(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t){t=qt(t,Et);const e=qt(t.firestore,ds);return CD(cc(e),t._key).then(n=>oE(e,t,n))}class ff extends qD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function rE(t){t=qt(t,gs);const e=qt(t.firestore,ds),n=cc(e),s=new ff(e);return Z0(t._query),SD(n,t._query).then(i=>new sE(e,s,t,i))}function Uo(t,e,n,...s){t=qt(t,Et);const i=qt(t.firestore,ds),r=of(i);let o;return o=typeof(e=Le(e))=="string"||e instanceof uc?MD(r,"updateDoc",t._key,e,n,s):PD(r,"updateDoc",t._key,e),mf(i,[o.toMutation(t._key,nn.exists(!0))])}function KD(t){return mf(qt(t.firestore,ds),[new jd(t._key,nn.none())])}function zD(t,e){const n=qt(t.firestore,ds),s=vD(t),i=HD(t.converter,e);return mf(n,[xD(of(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,nn.exists(!1))]).then(()=>s)}function pf(t,...e){var n,s,i;t=Le(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||tg(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(tg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Et)c=qt(t.firestore,ds),u=Jl(t._key.path),l={next:h=>{e[o]&&e[o](oE(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=qt(t,gs);c=qt(h.firestore,ds),u=h._query;const d=new ff(c);l={next:f=>{e[o]&&e[o](new sE(c,d,h,f))},error:e[o+1],complete:e[o+2]},Z0(t._query)}return function(h,d,f,m){const _=new rf(m),y=new nf(d,_,f);return h.asyncQueue.enqueueAndForget(async()=>Zd(await il(h),y)),()=>{_.bc(),h.asyncQueue.enqueueAndForget(async()=>ef(await il(h),y))}}(cc(c),u,a,l)}function mf(t,e){return function(n,s){const i=new Pn;return n.asyncQueue.enqueueAndForget(async()=>iD(await ID(n),s,i)),i.promise}(cc(t),e)}function oE(t,e,n){const s=n.docs.get(e._key),i=new ff(t);return new nE(t,i,e._key,s,new Tr(n.hasPendingWrites,n.fromCache),e.converter)}function GD(...t){return new DD("arrayUnion",t)}(function(t,e=!0){(function(n){tr=n})(Gs),vn(new sn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new ds(new zN(n.getProvider("auth-internal")),new XN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Mt(Im,"3.8.3",t),Mt(Im,"3.8.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="firebasestorage.googleapis.com",QD="storageBucket",YD=2*60*1e3,XD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Tn{constructor(e,n,s=0){super(Gc(e),`Firebase Storage: ${n} (${Gc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,In.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var bn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(bn||(bn={}));function Gc(t){return"storage/"+t}function JD(){const t="An unknown error occurred, please check the error payload for server response.";return new In(bn.UNKNOWN,t)}function ZD(){return new In(bn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eP(){return new In(bn.CANCELED,"User canceled the upload/download.")}function tP(t){return new In(bn.INVALID_URL,"Invalid URL '"+t+"'.")}function nP(t){return new In(bn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ig(t){return new In(bn.INVALID_ARGUMENT,t)}function lE(){return new In(bn.APP_DELETED,"The Firebase app was deleted.")}function sP(t){return new In(bn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(s.path==="")return s;throw nP(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},_=n===aE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",b=new RegExp(`^https?://${_}/${i}/${y}`,"i"),A=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:c},{regex:b,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<A.length;P++){const te=A[P],de=te.regex.exec(e);if(de){const be=de[te.indices.bucket];let De=de[te.indices.path];De||(De=""),s=new Jt(be,De),te.postModify(s);break}}if(s==null)throw tP(e);return s}}class iP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(f,l())},y)}function d(){r&&clearTimeout(r)}function f(y,...b){if(c){d();return}if(y){d(),u.call(null,y,...b);return}if(l()||o){d(),u.call(null,y,...b);return}s<64&&(s*=2);let A;a===1?(a=2,A=0):A=(s+Math.random())*1e3,h(A)}let m=!1;function _(y){m||(m=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function oP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t){return t!==void 0}function rg(t,e,n,s){if(s<e)throw ig(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ig(`Invalid value for '${t}'. Expected ${n} or less.`)}function lP(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ol;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ol||(ol={}));/**
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
 */class uP{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ia(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ol.NO_ERROR,l=r.getStatus();if(!a||cP(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ol.ABORT;s(!1,new ia(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new ia(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());aP(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=JD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?lE():eP();o(l)}else{const l=ZD();o(l)}};this.canceled_?n(!1,new ia(!1,null,!0)):this.backoffId_=rP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ia{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function hP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mP(t,e,n,s,i,r,o=!0){const a=lP(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return fP(c,e),hP(c,n),dP(c,r),pP(c,s),new uP(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _P(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class al{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new al(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _P(this._location.path)}get storage(){return this._service}get parent(){const e=gP(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new al(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sP(e)}}function og(t,e){const n=e==null?void 0:e[QD];return n==null?null:Jt.makeFromBucketSpec(n,t)}class yP{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=aE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YD,this._maxUploadRetryTime=XD,this._requests=new Set,i!=null?this._bucket=Jt.makeFromBucketSpec(i,this._host):this._bucket=og(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=og(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new al(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new iP(lE());{const o=mP(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const ag="@firebase/storage",lg="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="storage";function wP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new yP(n,s,i,e,Gs)}function EP(){vn(new sn(vP,wP,"PUBLIC").setMultipleInstances(!0)),Mt(ag,lg,""),Mt(ag,lg,"esm2017")}EP();const Qc=new WeakMap;function cE(t,e){return Qc.has(e)||Qc.set(e,t||{f:{},r:{},s:{},u:{}}),Qc.get(e)}function bP(t,e,n,s){if(!t)return n;const[i,r]=uE(t);if(!i)return n;const o=cE(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function TP(t,e,n,s){if(!t)return;const[i,r]=uE(t);if(!i)return;const o=cE(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}),a}function uE(t){return YR(t)||XR(t)?["f",t.path]:JR(t)?["r",t.toString()]:ZR(t)?["s",t.toString()]:[]}const Yc=new WeakMap;function IP(t,e,n){const s=Nl();Yc.has(s)||Yc.set(s,new Map);const i=Yc.get(s),r=TP(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):Nn}const CP={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function ah(t,e,n,s){if(!GR(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const m=Object.getOwnPropertyDescriptor(a,f);m&&!m.enumerable&&Object.defineProperty(h,f,m)});for(const f in a){const m=a[f];if(m==null||m instanceof Date||m instanceof He||m instanceof dc)h[f]=m;else if(zh(m)){const _=c+f;h[f]=_ in n?l[f]:m.path,d[_]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[f]=Array(m.length);for(let _=0;_<m.length;_++){const y=m[_];y&&y.path in r&&(h[f][_]=r[y.path])}o(m,l[f]||h[f],c+f+".",[h[f],d])}else Qs(m)?(h[f]={},o(m,l[f],c+f+".",[h[f],d])):h[f]=m}}return o(t,e,"",i),i}const gf={reset:!1,wait:!0,maxRefDepth:2,converter:CP,snapshotOptions:{serverTimestamps:"estimate"}};function ll(t){for(const e in t)t[e].unsub()}function lh(t,e,n,s,i,r,o,a,l){const[c,u]=ah(s.data(t.snapshotOptions),Kh(e,n),i,t);r.set(e,n,c),ch(t,e,n,i,u,r,o,a,l)}function SP({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=Nn;return a.once?iE(t).then(u=>{u.exists()?lh(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=pf(t,u=>{u.exists()?lh(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),ll(l)}}function ch(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(_=>c.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function m(_){_ in f&&++h>=d&&a(n)}c.forEach(_=>{const y=s[_],b=i[_],R=`${n}.${_}`;if(f[R]=!0,y)if(y.path!==b.path)y.unsub();else return;s[_]={data:()=>Kh(e,R),unsub:SP({ref:b,target:e,path:R,depth:o,ops:r,resolve:m.bind(null,R),reject:l},t),path:b.path}})}function RP(t,e,n,s,i,r){const o=Object.assign({},gf,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=he(c?[]:t.value);c||n.set(t,h,[]);const f=s;let m,_=Nn;const y=[],b={added:({newIndex:A,doc:P})=>{y.splice(A,0,Object.create(null));const te=y[A],[de,be]=ah(P.data(l),void 0,te,o);n.add(tt(d),A,de),ch(o,d,`${h}.${A}`,te,be,n,0,s.bind(null,P),i)},modified:({oldIndex:A,newIndex:P,doc:te})=>{const de=tt(d),be=y[A],De=de[A],[Ut,Tt]=ah(te.data(l),De,be,o);y.splice(P,0,be),n.remove(de,A),n.add(de,P,Ut),ch(o,d,`${h}.${P}`,be,Tt,n,0,s,i)},removed:({oldIndex:A})=>{const P=tt(d);n.remove(P,A),ll(y.splice(A,1)[0])}};function R(A){const P=A.docChanges(a);if(!m&&P.length){m=!0;let te=0;const de=P.length,be=Object.create(null);for(let De=0;De<de;De++)be[P[De].doc.id]=!0;s=De=>{De&&De.id in be&&++te>=de&&(c&&(n.set(t,h,tt(d)),d=t),f(tt(d)),s=Nn)}}P.forEach(te=>{b[te.type](te)}),P.length||(c&&(n.set(t,h,tt(d)),d=t),s(tt(d)))}return u?rE(e).then(R).catch(i):_=pf(e,R,i),A=>{if(_(),A){const P=typeof A=="function"?A():[];n.set(t,h,P)}y.forEach(ll)}}function kP(t,e,n,s,i,r){const o=Object.assign({},gf,r),a="value",l=Object.create(null);s=ek(s,()=>Kh(t,a));let c=Nn;function u(h){h.exists()?lh(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?iE(e).then(u).catch(i):c=pf(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}ll(l)}}function AP(t,e){let n=Nn;const s=Object.assign({},gf,e),i=tt(t),r=s.target||he();tk()&&(s.once=!0),r.value=bP(i,s.ssrKey,r.value,Nl());let o=r.value===void 0;const a=he(!1),l=he(),c=Jg(),u=Lg();let h=Nn;function d(){let _=tt(t);const y=new Promise((b,R)=>{if(n(s.reset),!_)return n=Nn,b(null);a.value=o,o=!0,_.converter||(_=_.withConverter(s.converter)),n=(zh(_)?kP:RP)(r,_,NP,b,R,s)}).catch(b=>(c.value===y&&(l.value=b),Promise.reject(b))).finally(()=>{c.value===y&&(a.value=!1)});c.value=y}let f=Nn;it(t)&&(f=Ir(t,d)),d(),i&&(h=IP(c.value,i,s.ssrKey)),xh()&&m_(()=>c.value),u&&jE(m);function m(_=s.reset){f(),h(),n(_)}return Object.defineProperties(r,{error:{get:()=>l},data:{get:()=>r},pending:{get:()=>a},promise:{get:()=>c},stop:{get:()=>m}})}const NP={set:(t,e,n)=>KR(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function xP(t,e){return AP(t,{target:he([]),...e})}function rr(t){return W0(Nl(t))}function OP(t){return(e,n)=>{const s=nk(e,n).run(()=>he(t));sk.set(e,s),ik(s,e)}}function DP(t,{firebaseApp:e,modules:n=[]}){t.provide(Ry,e);for(const s of n)t.use(s.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const li=typeof window<"u";function PP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function Xc(t,e){const n={};for(const s in e){const i=e[s];n[s]=an(i)?i.map(t):t(i)}return n}const Lr=()=>{},an=Array.isArray,MP=/\/$/,LP=t=>t.replace(MP,"");function Jc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=VP(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function FP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UP(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Bi(e.matched[s],n.matched[i])&&hE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Bi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$P(t[n],e[n]))return!1;return!0}function $P(t,e){return an(t)?ug(t,e):an(e)?ug(e,t):t===e}function ug(t,e){return an(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function VP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var co;(function(t){t.pop="pop",t.push="push"})(co||(co={}));var Fr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fr||(Fr={}));function BP(t){if(!t)if(li){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),LP(t)}const jP=/^[^#]+#/;function qP(t,e){return t.replace(jP,"#")+e}function HP(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const gc=()=>({left:window.pageXOffset,top:window.pageYOffset});function WP(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=HP(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function hg(t,e){return(history.state?history.state.position-e:-1)+t}const uh=new Map;function KP(t,e){uh.set(t,e)}function zP(t){const e=uh.get(t);return uh.delete(t),e}let GP=()=>location.protocol+"//"+location.host;function dE(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),cg(l,"")}return cg(n,t)+s+i}function QP(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=dE(t,location),m=n.value,_=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}y=_?d.position-_.position:0}else s(f);i.forEach(b=>{b(n.value,m,{delta:y,type:co.pop,direction:y?y>0?Fr.forward:Fr.back:Fr.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(ye({},d.state,{scroll:gc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function dg(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?gc():null}}function YP(t){const{history:e,location:n}=window,s={value:dE(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:GP()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=ye({},e.state,dg(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ye({},i.value,e.state,{forward:l,scroll:gc()});r(u.current,u,!0);const h=ye({},dg(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function XP(t){t=BP(t);const e=YP(t),n=QP(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ye({location:"",base:t,go:s,createHref:qP.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function JP(t){return typeof t=="string"||t&&typeof t=="object"}function fE(t){return typeof t=="string"||typeof t=="symbol"}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pE=Symbol("");var fg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fg||(fg={}));function ji(t,e){return ye(new Error,{type:t,[pE]:!0},e)}function Sn(t,e){return t instanceof Error&&pE in t&&(e==null||!!(t.type&e))}const pg="[^/]+?",ZP={sensitive:!1,strict:!1,start:!0,end:!0},eM=/[.+*?^${}()[\]/\\]/g;function tM(t,e){const n=ye({},ZP,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(eM,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:_,optional:y,regexp:b}=d;r.push({name:m,repeatable:_,optional:y});const R=b||pg;if(R!==pg){f+=10;try{new RegExp(`(${R})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${m}" (${R}): `+P.message)}}let A=_?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(A=y&&c.length<2?`(?:/${A})`:"/"+A),y&&(A+="?"),i+=A,f+=20,y&&(f+=-8),_&&(f+=-20),R===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=r[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:_,optional:y}=f,b=m in c?c[m]:"";if(an(b)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const R=an(b)?b.join("/"):b;if(!R)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function nM(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sM(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=nM(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(mg(s))return 1;if(mg(i))return-1}return i.length-s.length}function mg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iM={type:0,value:""},rM=/[a-zA-Z0-9_]/;function oM(t){if(!t)return[[]];if(t==="/")return[[iM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:rM.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function aM(t,e,n){const s=tM(oM(t.path),n),i=ye(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function lM(t,e){const n=[],s=new Map;e=yg({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,m=cM(u);m.aliasOf=d&&d.record;const _=yg(e,u),y=[m];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of A)y.push(ye({},m,{components:d?d.record.components:m.components,path:P,aliasOf:d?d.record:m}))}let b,R;for(const A of y){const{path:P}=A;if(h&&P[0]!=="/"){const te=h.record.path,de=te[te.length-1]==="/"?"":"/";A.path=h.record.path+(P&&de+P)}if(b=aM(A,h,_),d?d.alias.push(b):(R=R||b,R!==b&&R.alias.push(b),f&&u.name&&!_g(b)&&o(u.name)),m.children){const te=m.children;for(let de=0;de<te.length;de++)r(te[de],b,d&&d.children[de])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return R?()=>{o(R)}:Lr}function o(u){if(fE(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&sM(u,n[h])>=0&&(u.record.path!==n[h].record.path||!mE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!_g(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},m,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ji(1,{location:u});_=d.record.name,f=ye(gg(h.params,d.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&gg(u.params,d.keys.map(R=>R.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(R=>R.re.test(m)),d&&(f=d.parse(m),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(R=>R.re.test(h.path)),!d)throw ji(1,{location:u,currentLocation:h});_=d.record.name,f=ye({},h.params,u.params),m=d.stringify(f)}const y=[];let b=d;for(;b;)y.unshift(b.record),b=b.parent;return{name:_,path:m,params:f,matched:y,meta:hM(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function gg(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function cM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function uM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function _g(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hM(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function yg(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function mE(t,e){return e.children.some(n=>n===t||mE(t,n))}const gE=/#/g,dM=/&/g,fM=/\//g,pM=/=/g,mM=/\?/g,_E=/\+/g,gM=/%5B/g,_M=/%5D/g,yE=/%5E/g,yM=/%60/g,vE=/%7B/g,vM=/%7C/g,wE=/%7D/g,wM=/%20/g;function _f(t){return encodeURI(""+t).replace(vM,"|").replace(gM,"[").replace(_M,"]")}function EM(t){return _f(t).replace(vE,"{").replace(wE,"}").replace(yE,"^")}function hh(t){return _f(t).replace(_E,"%2B").replace(wM,"+").replace(gE,"%23").replace(dM,"%26").replace(yM,"`").replace(vE,"{").replace(wE,"}").replace(yE,"^")}function bM(t){return hh(t).replace(pM,"%3D")}function TM(t){return _f(t).replace(gE,"%23").replace(mM,"%3F")}function IM(t){return t==null?"":TM(t).replace(fM,"%2F")}function cl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function CM(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(_E," "),o=r.indexOf("="),a=cl(o<0?r:r.slice(0,o)),l=o<0?null:cl(r.slice(o+1));if(a in e){let c=e[a];an(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function vg(t){let e="";for(let n in t){const s=t[n];if(n=bM(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(s)?s.map(r=>r&&hh(r)):[s&&hh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function SM(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=an(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const RM=Symbol(""),wg=Symbol(""),_c=Symbol(""),EE=Symbol(""),dh=Symbol("");function pr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Gn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ji(4,{from:n,to:e})):h instanceof Error?a(h):JP(h)?a(ji(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Zc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(kM(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Gn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=PP(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Gn(d,n,s,r,o)()}))}}return i}function kM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Eg(t){const e=jt(_c),n=jt(EE),s=Vt(()=>e.resolve(tt(t.to))),i=Vt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Bi.bind(null,u));if(d>-1)return d;const f=bg(l[c-2]);return c>1&&bg(u)===f&&h[h.length-1].path!==f?h.findIndex(Bi.bind(null,l[c-2])):d}),r=Vt(()=>i.value>-1&&OM(n.params,s.value.params)),o=Vt(()=>i.value>-1&&i.value===n.matched.length-1&&hE(n.params,s.value.params));function a(l={}){return xM(l)?e[tt(t.replace)?"replace":"push"](tt(t.to)).catch(Lr):Promise.resolve()}return{route:s,href:Vt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const AM=u_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Eg,setup(t,{slots:e}){const n=ho(Eg(t)),{options:s}=jt(_c),i=Vt(()=>({[Tg(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Tg(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:A_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),NM=AM;function xM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OM(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!an(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function bg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tg=(t,e,n)=>t??e??n,DM=u_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=jt(dh),i=Vt(()=>t.route||s.value),r=jt(wg,0),o=Vt(()=>{let c=tt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Vt(()=>i.value.matched[o.value]);aa(wg,Vt(()=>o.value+1)),aa(RM,a),aa(dh,i);const l=he();return Ir(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Bi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ig(n.default,{Component:d,route:c});const f=h.props[u],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=A_(d,ye({},m,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Ig(n.default,{Component:y,route:c})||y}}});function Ig(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bE=DM;function PM(t){const e=lM(t.routes,t),n=t.parseQuery||CM,s=t.stringifyQuery||vg,i=t.history,r=pr(),o=pr(),a=pr(),l=Jg(Kn);let c=Kn;li&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xc.bind(null,I=>""+I),h=Xc.bind(null,IM),d=Xc.bind(null,cl);function f(I,F){let M,j;return fE(I)?(M=e.getRecordMatcher(I),j=F):j=I,e.addRoute(j,M)}function m(I){const F=e.getRecordMatcher(I);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(I=>I.record)}function y(I){return!!e.getRecordMatcher(I)}function b(I,F){if(F=ye({},F||l.value),typeof I=="string"){const p=Jc(n,I,F.path),g=e.resolve({path:p.path},F),v=i.createHref(p.fullPath);return ye(p,g,{params:d(g.params),hash:cl(p.hash),redirectedFrom:void 0,href:v})}let M;if("path"in I)M=ye({},I,{path:Jc(n,I.path,F.path).path});else{const p=ye({},I.params);for(const g in p)p[g]==null&&delete p[g];M=ye({},I,{params:h(I.params)}),F.params=h(F.params)}const j=e.resolve(M,F),ce=I.hash||"";j.params=u(d(j.params));const Me=FP(s,ye({},I,{hash:EM(ce),path:j.path})),ne=i.createHref(Me);return ye({fullPath:Me,hash:ce,query:s===vg?SM(I.query):I.query||{}},j,{redirectedFrom:void 0,href:ne})}function R(I){return typeof I=="string"?Jc(n,I,l.value.path):ye({},I)}function A(I,F){if(c!==I)return ji(8,{from:F,to:I})}function P(I){return be(I)}function te(I){return P(ye(R(I),{replace:!0}))}function de(I){const F=I.matched[I.matched.length-1];if(F&&F.redirect){const{redirect:M}=F;let j=typeof M=="function"?M(I):M;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=R(j):{path:j},j.params={}),ye({query:I.query,hash:I.hash,params:"path"in j?{}:I.params},j)}}function be(I,F){const M=c=b(I),j=l.value,ce=I.state,Me=I.force,ne=I.replace===!0,p=de(M);if(p)return be(ye(R(p),{state:typeof p=="object"?ye({},ce,p.state):ce,force:Me,replace:ne}),F||M);const g=M;g.redirectedFrom=F;let v;return!Me&&UP(s,j,M)&&(v=ji(16,{to:g,from:j}),ys(j,j,!0,!1)),(v?Promise.resolve(v):Ut(g,j)).catch(w=>Sn(w)?Sn(w,2)?w:Wt(w):Te(w,g,j)).then(w=>{if(w){if(Sn(w,2))return be(ye({replace:ne},R(w.to),{state:typeof w.to=="object"?ye({},ce,w.to.state):ce,force:Me}),F||g)}else w=qn(g,j,!0,ne,ce);return Tt(g,j,w),w})}function De(I,F){const M=A(I,F);return M?Promise.reject(M):Promise.resolve()}function Ut(I,F){let M;const[j,ce,Me]=MM(I,F);M=Zc(j.reverse(),"beforeRouteLeave",I,F);for(const p of j)p.leaveGuards.forEach(g=>{M.push(Gn(g,I,F))});const ne=De.bind(null,I,F);return M.push(ne),ri(M).then(()=>{M=[];for(const p of r.list())M.push(Gn(p,I,F));return M.push(ne),ri(M)}).then(()=>{M=Zc(ce,"beforeRouteUpdate",I,F);for(const p of ce)p.updateGuards.forEach(g=>{M.push(Gn(g,I,F))});return M.push(ne),ri(M)}).then(()=>{M=[];for(const p of I.matched)if(p.beforeEnter&&!F.matched.includes(p))if(an(p.beforeEnter))for(const g of p.beforeEnter)M.push(Gn(g,I,F));else M.push(Gn(p.beforeEnter,I,F));return M.push(ne),ri(M)}).then(()=>(I.matched.forEach(p=>p.enterCallbacks={}),M=Zc(Me,"beforeRouteEnter",I,F),M.push(ne),ri(M))).then(()=>{M=[];for(const p of o.list())M.push(Gn(p,I,F));return M.push(ne),ri(M)}).catch(p=>Sn(p,8)?p:Promise.reject(p))}function Tt(I,F,M){for(const j of a.list())j(I,F,M)}function qn(I,F,M,j,ce){const Me=A(I,F);if(Me)return Me;const ne=F===Kn,p=li?history.state:{};M&&(j||ne?i.replace(I.fullPath,ye({scroll:ne&&p&&p.scroll},ce)):i.push(I.fullPath,ce)),l.value=I,ys(I,F,M,ne),Wt()}let ln;function ti(){ln||(ln=i.listen((I,F,M)=>{if(!$o.listening)return;const j=b(I),ce=de(j);if(ce){be(ye(ce,{replace:!0}),j).catch(Lr);return}c=j;const Me=l.value;li&&KP(hg(Me.fullPath,M.delta),gc()),Ut(j,Me).catch(ne=>Sn(ne,12)?ne:Sn(ne,2)?(be(ne.to,j).then(p=>{Sn(p,20)&&!M.delta&&M.type===co.pop&&i.go(-1,!1)}).catch(Lr),Promise.reject()):(M.delta&&i.go(-M.delta,!1),Te(ne,j,Me))).then(ne=>{ne=ne||qn(j,Me,!1),ne&&(M.delta&&!Sn(ne,8)?i.go(-M.delta,!1):M.type===co.pop&&Sn(ne,20)&&i.go(-1,!1)),Tt(j,Me,ne)}).catch(Lr)}))}let _s=pr(),or=pr(),$e;function Te(I,F,M){Wt(I);const j=or.list();return j.length?j.forEach(ce=>ce(I,F,M)):console.error(I),Promise.reject(I)}function ve(){return $e&&l.value!==Kn?Promise.resolve():new Promise((I,F)=>{_s.add([I,F])})}function Wt(I){return $e||($e=!I,ti(),_s.list().forEach(([F,M])=>I?M(I):F()),_s.reset()),I}function ys(I,F,M,j){const{scrollBehavior:ce}=t;if(!li||!ce)return Promise.resolve();const Me=!M&&zP(hg(I.fullPath,0))||(j||!M)&&history.state&&history.state.scroll||null;return s_().then(()=>ce(I,F,Me)).then(ne=>ne&&WP(ne)).catch(ne=>Te(ne,I,F))}const Kt=I=>i.go(I);let It;const ni=new Set,$o={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:y,getRoutes:_,resolve:b,options:t,push:P,replace:te,go:Kt,back:()=>Kt(-1),forward:()=>Kt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:or.add,isReady:ve,install(I){const F=this;I.component("RouterLink",NM),I.component("RouterView",bE),I.config.globalProperties.$router=F,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>tt(l)}),li&&!It&&l.value===Kn&&(It=!0,P(i.location).catch(ce=>{}));const M={};for(const ce in Kn)M[ce]=Vt(()=>l.value[ce]);I.provide(_c,F),I.provide(EE,ho(M)),I.provide(dh,l);const j=I.unmount;ni.add(I),I.unmount=function(){ni.delete(I),ni.size<1&&(c=Kn,ln&&ln(),ln=null,l.value=Kn,It=!1,$e=!1),j()}}};return $o}function ri(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function MM(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Bi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Bi(c,l))||i.push(l))}return[n,s,i]}function LM(){return jt(_c)}const yf=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},FM={},UM={class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},$M=E("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"},null,-1),VM=[$M];function BM(t,e){return X(),pe("svg",UM,VM)}const jM=yf(FM,[["render",BM]]),qM={class:"bg-white px-2 sm:px-4 py-2.5 sticky w-full z-20 top-0 left-0 border-b border-gray-200"},HM={class:"container flex flex-wrap items-center justify-between mx-auto"},WM=E("span",{class:"self-center text-xl font-semibold whitespace-nowrap"},"domoticajs",-1),KM={class:"relative"},zM={key:0,class:"absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl"},GM={class:"block px-4 pt-2 text-sm text-gray-900"},QM={class:"block px-4 pb-2 text-sm font-medium text-gray-500 truncate"},YM={class:"py-2 text-sm text-gray-700"},XM={__name:"Navbar",setup(t){const e=he(!1),n=he(""),s=he("");return f_(async()=>{const i=await Ay();n.value=i.displayName?i.displayName:"Sin nombre",s.value=i.email}),(i,r)=>{const o=qb("RouterLink");return X(),pe("nav",qM,[E("div",HM,[Ce(o,{to:{name:"home"},class:"flex items-center"},{default:gr(()=>[WM]),_:1}),E("div",KM,[E("button",{onClick:r[0]||(r[0]=a=>e.value=!e.value),class:"relative z-10 p-2 ml-2 text-gray-700 bg-white border border-transparent rounded-md border-gray-700 focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none"},[Ce(jM)]),e.value?(X(),pe("div",zM,[E("div",null,[E("span",GM,Pt(n.value),1),E("span",QM,Pt(s.value),1)]),E("ul",YM,[E("li",null,[Ce(o,{to:{name:"home"},class:"block px-4 py-2 hover:bg-gray-100"},{default:gr(()=>[Xe("Dashboard")]),_:1})]),E("li",null,[Ce(o,{to:{name:"settings"},class:"block px-4 py-2 hover:bg-gray-100"},{default:gr(()=>[Xe("Ajustes")]),_:1})]),E("li",null,[Ce(o,{to:{name:"logout"},class:"block px-4 py-2 hover:bg-gray-100"},{default:gr(()=>[Xe("Cerrar Sesión")]),_:1})])])])):nt("",!0)])])])}}},JM={__name:"App",setup(t){return(e,n)=>(X(),pe(vt,null,[E("header",null,[Ce(XM)]),E("div",null,[Ce(tt(bE))])],64))}},ZM="modulepreload",eL=function(t,e){return new URL(t,e).href},Cg={},Sg=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=eL(r,s),r in Cg)return;Cg[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ZM,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},vf=t=>yD(t,"rooms"),Cn=async(t,e)=>{const n=$D(vf(t),VD("name","==",e,BD(1))),s=await rE(n);return s.size==0?null:s.docs[0]},tL=async(t,e)=>{await zD(vf(t),{name:e,devices:{}})},nL=async(t,e,n)=>{const s=await Cn(t,e);if(s==null)return!1;const i=s.data();i.name=n,await Uo(s.ref,{...i})},sL=async(t,e)=>{const n=await Cn(t,e);await KD(n.ref)},iL=async(t,e,n)=>{const s=await Cn(t,e);return s==null?!1:(await Uo(s.ref,{devices:GD(...n)}),!0)},rL=async(t,e,n)=>{const s=await Cn(t,e);if(s==null)return!1;const i=s.data();i.devices=i.devices.filter(r=>r.name!=n),await Uo(s.ref,{...i})},oL=async(t,e,n,s)=>{const i=await Cn(t,e);if(i==null)return!1;const r=i.data();for(let o=0;o<r.devices.length;o++)if(r.devices[o].name==n){r.devices[o]={...s};break}await Uo(i.ref,{...r})},aL=async(t,e,n)=>{const s=await Cn(t,e);if(s==null)return!1;const i=s.data(),{devices:r}=i;for(let o in r)if(r[o].name==n){r[o].status=!r[o].status;break}await Uo(s.ref,{...i})},lL={},cL={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-plus"},uL=E("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null,-1),hL=E("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1),dL=[uL,hL];function fL(t,e){return X(),pe("svg",cL,dL)}const Rg=yf(lL,[["render",fL]]),pL=["fill"],mL=E("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"},null,-1),gL=[mL],kg={__name:"CloseIcon",props:{color:String},setup(t){return(e,n)=>(X(),pe("svg",{fill:t.color,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},gL,8,pL))}},_L={class:"flex flex-col justify-center h-[100%] text-2xl"},yL={__name:"Sensor",props:{device:Object},setup(t){return(e,n)=>(X(),pe("div",null,[E("p",_L,Pt(t.device.info)+" "+Pt(t.device.suffix),1)]))}},vL=["fill"],wL=E("path",{stroke:"black","stroke-width":"1",d:"M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"},null,-1),EL=[wL],bL={__name:"LightBulbOn",props:{color:String},setup(t){return(e,n)=>(X(),pe("svg",{fill:t.color,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},EL,8,vL))}},TL=["fill"],IL=E("path",{stroke:"black","stroke-width":"1",d:"M12,2C9.76,2 7.78,3.05 6.5,4.68L16.31,14.5C17.94,13.21 19,11.24 19,9A7,7 0 0,0 12,2M3.28,4L2,5.27L5.04,8.3C5,8.53 5,8.76 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H14.73L18.73,22L20,20.72L3.28,4M9,20V21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9Z"},null,-1),CL=[IL],SL={__name:"LightBulbOff",props:{color:String},setup(t){return(e,n)=>(X(),pe("svg",{fill:t.color,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},CL,8,TL))}},RL=["fill"],kL=E("path",{stroke:"black","stroke-width":"0.5",d:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z"},null,-1),AL=[kL],NL={__name:"ToggleSwitch",props:{color:String},setup(t){return(e,n)=>(X(),pe("svg",{xmlns:"http://www.w3.org/2000/svg",fill:t.color,viewBox:"0 0 24 24"},AL,8,RL))}},xL=["fill"],OL=E("path",{stroke:"black","stroke-width":"0.5",d:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z"},null,-1),DL=[OL],PL={__name:"ToggleSwitchOff",props:{color:String},setup(t){return(e,n)=>(X(),pe("svg",{xmlns:"http://www.w3.org/2000/svg",fill:t.color,viewBox:"0 0 24 24"},DL,8,xL))}},ML={key:0},LL={key:1},FL={__name:"Executor",props:{room_name:String,device:Object},setup(t){const e=rr(),n=(s,i)=>{aL(e,s,i)};return(s,i)=>(X(),pe("div",null,[E("button",{class:"flex flex-col justify-center h-[100%] w-16",onClick:i[0]||(i[0]=r=>n(t.room_name,t.device.name))},[t.device.iconSet=="bulb"?(X(),pe("span",ML,[t.device.status?nt("",!0):(X(),$t(SL,{key:0,fill:"#ccc"})),t.device.status?(X(),$t(bL,{key:1,fill:"#ffcc00"})):nt("",!0)])):nt("",!0),t.device.iconSet=="toggleSwitch"?(X(),pe("span",LL,[t.device.status?nt("",!0):(X(),$t(PL,{key:0,fill:"#ccc"})),t.device.status?(X(),$t(NL,{key:1,fill:"#0f0"})):nt("",!0)])):nt("",!0)])]))}},UL={class:"relative z-10","aria-modal":"true"},$L=E("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),VL={class:"fixed inset-0 z-10 overflow-y-auto"},BL={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},jL={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},qL={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},HL={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},WL=E("h3",{class:"text-lg font-medium leading-6 text-gray-900"},"Añadir sala",-1),KL={for:"room_name"},zL={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},GL={__name:"AddRoomModal",emits:"closeModal",setup(t,{emit:e}){const n=rr(),s=he(""),i=async()=>{if(await Cn(n,s.value)!=null){alert("Existe una sala con ese nombre");return}await tL(n,s.value),alert("Sala añadida")};return(r,o)=>(X(),pe("div",UL,[$L,E("div",VL,[E("div",BL,[E("div",jL,[E("div",qL,[E("div",HL,[WL,E("label",KL,[Xe("Nombre Sala "),St(E("input",{type:"text",id:"room_name","onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a),class:"mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[as,s.value]])])])]),E("div",zL,[E("button",{onClick:o[1]||(o[1]=a=>e("closeModal")),class:"inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"}," Cancelar "),E("button",{onClick:i,class:"mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}," Añadir ")])])])])]))}},QL={class:"relative z-10","aria-modal":"true"},YL=E("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),XL={class:"fixed inset-0 z-10 overflow-y-auto"},JL={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},ZL={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},eF={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},tF={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},nF={class:"text-lg font-medium leading-6 text-gray-900"},sF={class:"mt-2"},iF={for:"device_name",class:"text-sm"},rF={class:"mt-2"},oF={class:"text-sm"},aF={for:"sensor"},lF=["value"],cF={for:"room",class:"ml-1"},uF=["value"],hF={key:0,class:"mt-2"},dF={for:"device_suffix",class:"text-sm"},fF={key:1,class:"mt-2"},pF={for:"iconSet",class:"text-sm"},mF=E("option",{selected:""},null,-1),gF=["value"],_F={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},yF={__name:"AddDeviceModal",props:{deviceModalRoom:String},emits:"closeModal",setup(t,{emit:e}){const n=t,s=rr(),i={SENSOR:0,EXECUTOR:1},r={bulb:"Bombilla",toggleSwitch:"Interruptor"},o=he(""),a=he(0),l=he("ºC"),c=he(""),u=async()=>{const h=await Cn(s,n.deviceModalRoom);if(h==null){alert("No existe ninguna sala con ese nombre");return}const d={name:o.value,type:a.value};a.value==i.SENSOR?(d.info="",d.suffix=l.value):a.value==i.EXECUTOR&&(d.status=!1,d.iconSet=c.value);const{name:f}=h.data();await iL(s,f,[d]),alert("Dispositivo añadido")};return(h,d)=>(X(),pe("div",QL,[YL,E("div",XL,[E("div",JL,[E("div",ZL,[E("div",eF,[E("div",tF,[E("h3",nF,"Añadir dispositivo a "+Pt(t.deviceModalRoom),1),E("div",sF,[E("label",iF,[Xe("Nombre Dispositivo "),St(E("input",{type:"text",id:"device_name","onUpdate:modelValue":d[0]||(d[0]=f=>o.value=f),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[as,o.value]])])]),E("div",rF,[E("label",oF,[Xe("Tipo: "),E("label",aF,[St(E("input",{type:"radio",id:"sensor",value:i.SENSOR,"onUpdate:modelValue":d[1]||(d[1]=f=>a.value=f)},null,8,lF),[[Ia,a.value]]),Xe(" Sensor ")]),E("label",cF,[St(E("input",{type:"radio",id:"executor",value:i.EXECUTOR,"onUpdate:modelValue":d[2]||(d[2]=f=>a.value=f)},null,8,uF),[[Ia,a.value]]),Xe(" Ejecutor ")])])]),a.value==i.SENSOR?(X(),pe("div",hF,[E("label",dF,[Xe("Sufijo "),St(E("input",{type:"text",id:"device_suffix","onUpdate:modelValue":d[3]||(d[3]=f=>l.value=f),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[as,l.value]])])])):nt("",!0),a.value==i.EXECUTOR?(X(),pe("div",fF,[E("label",pF,[Xe("Icono "),St(E("select",{id:"iconSet","onUpdate:modelValue":d[4]||(d[4]=f=>c.value=f),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},[mF,(X(),pe(vt,null,ba(r,(f,m)=>E("option",{key:m,value:m},Pt(f),9,gF)),64))],512),[[x_,c.value]])])])):nt("",!0)])]),E("div",_F,[E("button",{onClick:d[5]||(d[5]=f=>e("closeModal")),class:"inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"}," Cancelar "),E("button",{onClick:u,class:"mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}," Añadir ")])])])])]))}},vF={class:"relative z-10","aria-modal":"true"},wF=E("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),EF={class:"fixed inset-0 z-10 overflow-y-auto"},bF={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},TF={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},IF={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},CF={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},SF={class:"text-lg font-medium leading-6 text-gray-900"},RF={for:"room_name"},kF={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},AF={__name:"EditRoomModal",props:{room_name:String},emits:"closeModal",setup(t,{emit:e}){const n=t,s=rr(),i=he(""),r=async()=>{if(await Cn(s,room_name.value)!=null){alert("Existe una sala con ese nombre");return}await nL(s,n.room_name,i.value),alert("Sala actualizada")};return(o,a)=>(X(),pe("div",vF,[wF,E("div",EF,[E("div",bF,[E("div",TF,[E("div",IF,[E("div",CF,[E("h3",SF,"Renombrar sala: "+Pt(t.room_name),1),E("label",RF,[Xe("Nombre Sala "),St(E("input",{type:"text",id:"room_name","onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l),class:"mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[as,i.value]])])])]),E("div",kF,[E("button",{onClick:a[1]||(a[1]=l=>e("closeModal")),class:"inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"}," Cancelar "),E("button",{onClick:r,class:"mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}," Confirmar ")])])])])]))}},NF=["fill"],xF=E("path",{d:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"},null,-1),OF=[xF],Ag={__name:"PencilIcon",props:{color:String},setup(t){return(e,n)=>(X(),pe("svg",{fill:t.color,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},OF,8,NF))}},DF={class:"relative z-10","aria-modal":"true"},PF=E("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),MF={class:"fixed inset-0 z-10 overflow-y-auto"},LF={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},FF={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},UF={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},$F={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},VF={class:"text-lg font-medium leading-6 text-gray-900"},BF={class:"mt-2"},jF={for:"device_name",class:"text-sm"},qF={class:"mt-2"},HF={class:"text-sm"},WF={for:"sensor"},KF=["value"],zF={for:"room",class:"ml-1"},GF=["value"],QF={key:0,class:"mt-2"},YF={for:"device_suffix",class:"text-sm"},XF={key:1,class:"mt-2"},JF={for:"iconSet",class:"text-sm"},ZF=E("option",{selected:""},null,-1),eU=["value"],tU={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},nU={__name:"EditDeviceModal",props:{deviceModalDevice:String,deviceModalRoom:String,deviceModalType:Number,deviceModalSuffix:String,deviceModalIconSet:String},emits:"closeModal",setup(t,{emit:e}){const n=t,s=rr(),i={SENSOR:0,EXECUTOR:1},r={bulb:"Bombilla",toggleSwitch:"Interruptor"},o=he(n.deviceModalDevice),a=he(n.deviceModalType),l=he(n.deviceModalSuffix),c=he(n.deviceModalIconSet),u=async()=>{const h=await Cn(s,n.deviceModalRoom);if(h==null){alert("No existe ninguna sala con ese nombre");return}const d={name:o.value,type:a.value};a.value==i.SENSOR?(d.info="",d.suffix=l.value):a.value==i.EXECUTOR&&(d.status=!1,d.iconSet=c.value);const{name:f}=h.data();await oL(s,f,n.deviceModalDevice,d),alert("Dispositivo guardado")};return(h,d)=>(X(),pe("div",DF,[PF,E("div",MF,[E("div",LF,[E("div",FF,[E("div",UF,[E("div",$F,[E("h3",VF,"Editando dispositivo "+Pt(t.deviceModalDevice)+" en sala "+Pt(t.deviceModalRoom),1),E("div",BF,[E("label",jF,[Xe("Nombre Dispositivo "),St(E("input",{type:"text",id:"device_name","onUpdate:modelValue":d[0]||(d[0]=f=>o.value=f),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[as,o.value]])])]),E("div",qF,[E("label",HF,[Xe("Tipo: "),E("label",WF,[St(E("input",{type:"radio",id:"sensor",value:i.SENSOR,"onUpdate:modelValue":d[1]||(d[1]=f=>a.value=f)},null,8,KF),[[Ia,a.value]]),Xe(" Sensor ")]),E("label",zF,[St(E("input",{type:"radio",id:"executor",value:i.EXECUTOR,"onUpdate:modelValue":d[2]||(d[2]=f=>a.value=f)},null,8,GF),[[Ia,a.value]]),Xe(" Ejecutor ")])])]),a.value==i.SENSOR?(X(),pe("div",QF,[E("label",YF,[Xe("Sufijo "),St(E("input",{type:"text",id:"device_suffix","onUpdate:modelValue":d[3]||(d[3]=f=>l.value=f),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[as,l.value]])])])):nt("",!0),a.value==i.EXECUTOR?(X(),pe("div",XF,[E("label",JF,[Xe("Icono "),St(E("select",{id:"iconSet","onUpdate:modelValue":d[4]||(d[4]=f=>c.value=f),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},[ZF,(X(),pe(vt,null,ba(r,(f,m)=>E("option",{key:m,value:m},Pt(f),9,eU)),64))],512),[[x_,c.value]])])])):nt("",!0)])]),E("div",tU,[E("button",{onClick:d[5]||(d[5]=f=>e("closeModal")),class:"inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"}," Cancelar "),E("button",{onClick:u,class:"mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}," Guardar ")])])])])]))}},sU={class:"flex flex-row justify-center"},iU={class:"text-center font-bold text-white"},rU={class:"mt-2 flex flex-row"},oU={class:"text-center text-md"},aU={class:"flex justify-center h-1/2 m-auto"},lU=["onClick"],cU=["onClick"],uU=["onClick"],hU=["onClick"],dU=["onClick"],fU={__name:"HomeView",setup(t){const e=he(!1),n=he(!1),s=he(!1),i=he(!1),r=he(""),o=he(""),a=he(0),l=he(""),c=he(""),u=he(""),h=rr(),d=xP(vf(h)),f=_=>{confirm("¿Borrar esta sala?")&&sL(h,_)},m=(_,y)=>{confirm("¿Borrar este dispositivo?")&&rL(h,_,y)};return(_,y)=>(X(),pe(vt,null,[n.value?(X(),$t(GL,{key:0,onCloseModal:y[0]||(y[0]=b=>n.value=!1)})):nt("",!0),e.value?(X(),$t(yF,{key:1,onCloseModal:y[1]||(y[1]=b=>e.value=!1),deviceModalRoom:r.value},null,8,["deviceModalRoom"])):nt("",!0),s.value?(X(),$t(AF,{key:2,onCloseModal:y[2]||(y[2]=b=>s.value=!1),room_name:u.value},null,8,["room_name"])):nt("",!0),i.value?(X(),$t(nU,{key:3,onCloseModal:y[3]||(y[3]=b=>i.value=!1),deviceModalRoom:r.value,deviceModalDevice:o.value,deviceModalType:a.value,deviceModalSuffix:l.value,deviceModalIconSet:c.value},null,8,["deviceModalRoom","deviceModalDevice","deviceModalType","deviceModalSuffix","deviceModalIconSet"])):nt("",!0),E("div",sU,[(X(!0),pe(vt,null,ba(tt(d),b=>(X(),pe("div",{key:b.id,class:"m-1 p-4 bg-slate-500 relative"},[E("h1",iU,Pt(b.name),1),E("div",rU,[(X(!0),pe(vt,null,ba(b.devices,(R,A)=>(X(),pe("div",{key:A,class:"border rounded p-1 mr-1 w-32 h-32 bg-white relative"},[E("h2",oU,Pt(R.name),1),E("div",aU,[R.type==0?(X(),$t(yL,{key:0,device:R},null,8,["device"])):nt("",!0),R.type==1?(X(),$t(FL,{key:1,device:R,room_name:b.name},null,8,["device","room_name"])):nt("",!0)]),E("button",{onClick:P=>{i.value=!0,r.value=b.name,o.value=R.name,a.value=R.type,l.value=R.suffix,c.value=R.iconSet},class:"absolute top-0 right-6 m-1 text-white bg-white border border-transparent rounded-md focus:border-red-500 focus:ring-opacity-40 focus:ring-red-300 focus:ring focus:outline-none"},[Ce(Ag)],8,lU),E("button",{onClick:P=>m(b.name,R.name),class:"absolute top-0 right-0 m-1 text-white bg-red-500 border border-transparent rounded-md focus:border-red-500 focus:ring-opacity-40 focus:ring-red-300 focus:ring focus:outline-none"},[Ce(kg)],8,cU)]))),128)),E("button",{onClick:R=>{e.value=!0,r.value=b.name},class:"p-2 h-32 text-white bg-blue-500 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none"},[Ce(Rg)],8,uU)]),E("button",{onClick:R=>{s.value=!0,u.value=b.name},class:"absolute top-0 right-6 m-1 text-white bg-white border border-transparent rounded-md focus:border-red-500 focus:ring-opacity-40 focus:ring-red-300 focus:ring focus:outline-none"},[Ce(Ag)],8,hU),E("button",{onClick:R=>f(b.name),class:"absolute top-0 right-0 m-1 text-white bg-red-500 border border-transparent rounded-md focus:border-red-500 focus:ring-opacity-40 focus:ring-red-300 focus:ring focus:outline-none"},[Ce(kg)],8,dU)]))),128)),E("button",{onClick:y[4]||(y[4]=b=>n.value=!0),class:"p-2 text-white bg-green-500 border border-transparent rounded-md focus:border-green-500 focus:ring-opacity-40 focus:ring-green-300 focus:ring focus:outline-none"},[Ce(Rg)])])],64))}};const pU={class:"flex flex-col w-1/2 md:w-1/4 m-auto h-screen justify-center"},mU=["onKeydown"],gU=["onKeydown"],_U={__name:"Login",setup(t){const e=Cy(),n=LM(),s=he(""),i=he(""),r=he(""),o=()=>{iS(e,s.value,i.value).then(a=>{n.push({name:"home"}),r.value=""}).catch(a=>{a.code;const l=a.message;r.value=l})};return(a,l)=>(X(),pe("div",pU,[St(E("input",{type:"email",id:"email",onKeydown:Zf(o,["enter"]),"onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),placeholder:"E-mail"},null,40,mU),[[as,s.value]]),St(E("input",{type:"password",id:"password",class:"mt-2",onKeydown:Zf(o,["enter"]),"onUpdate:modelValue":l[1]||(l[1]=c=>i.value=c),placeholder:"Contraseña"},null,40,gU),[[as,i.value]]),E("button",{onClick:o},"Entrar"),E("div",null,Pt(r.value),1)]))}},yU=yf(_U,[["__scopeId","data-v-ee5cee4e"]]),vU={__name:"LoginView",setup(t){return(e,n)=>(X(),$t(yU))}},TE=PM({history:XP("./"),routes:[{path:"/",name:"home",component:fU},{path:"/login",name:"login",component:vU},{path:"/logout",name:"logout",component:()=>Sg(()=>import("./LogoutView-272c9ebd.js"),[],import.meta.url)},{path:"/settings",name:"settings",component:()=>Sg(()=>import("./SettingsView-3aa7ada5.js"),["./SettingsView-3aa7ada5.js","./SettingsView-ccbab12c.css"],import.meta.url)}]});TE.beforeEach(async(t,e,n)=>{!await Ay()&&t.name!="login"?n({name:"login"}):n()});const IE=H_({apiKey:"AIzaSyAygMdkwlZMPUzo8_xhxFrs-6mGmojrFfo",authDomain:"domoticajs-14f49.firebaseapp.com",projectId:"domoticajs-14f49",storageBucket:"domoticajs-14f49.appspot.com",messagingSenderId:"545225242492",appId:"1:545225242492:web:00f4ab5efca49dc6fb56f9"});W0(IE);const wf=HT(JM);wf.use(TE);wf.use(DP,{firebaseApp:IE,modules:[OP()]});wf.mount("#app");export{yf as _,E as a,f_ as b,pe as c,Ay as d,IU as e,bU as f,Cy as g,TU as h,EU as i,$t as j,X as o,wU as p,he as r,CU as s,LM as u,as as v,St as w};
