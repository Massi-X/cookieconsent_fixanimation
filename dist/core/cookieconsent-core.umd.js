/*!
* CookieConsent 3.0.0-rc.16
* https://github.com/orestbida/cookieconsent/tree/v3.0-beta
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',o='opt-out',n='data-category';class s{constructor(){this.t={mode:t,revision:0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],C:!1,v:null,S:null,h:null,D:'',T:!0,N:!1,k:!0,j:[],F:!1,O:'',I:!1,M:[],A:[],R:[],P:[],B:!1,J:!1,L:!1,U:[],G:[],H:[],q:{},K:{},V:{},W:{},X:{},Y:[]},this.Z={$:{},ee:{}},this.te={},this.oe={ne:'cc:onFirstConsent',se:'cc:onConsent',ce:'cc:onChange'}}}const c=new s,a=(e,t)=>e.indexOf(t),r=(e,t)=>-1!==a(e,t),i=e=>Array.isArray(e),l=e=>'string'==typeof e,f=e=>!!e&&'object'==typeof e&&!i(e),d=e=>'function'==typeof e,_=e=>Object.keys(e),u=e=>Array.from(new Set(e)),p=e=>e.dispatchEvent(new Event('change')),m=e=>{const t=document.createElement(e);return'button'===e&&(t.type=e),t},g=(e,t,o)=>e.setAttribute(t,o),C=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},v=(e,t,o)=>e.getAttribute(o?'data-'+t:t),y=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=y(n)}return t},S=()=>{const e={},{M:t,q:o,K:n}=c.o;for(const s of t)e[s]=b(n[s],_(o[s]));return e},h=()=>{const e=c.t.cookie.expiresAfterDays;return d(e)?e(c.o.O):e},b=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!r(n,e))).concat(n.filter((e=>!r(o,e))))},w=e=>{c.o.A=u(e),c.o.O=(()=>{let e='custom';const{A:t,M:o,R:n}=c.o,s=t.length;return s===o.length?e='all':s===n.length&&(e='necessary'),e})()},D=(e,t,o)=>{const{ce:n,se:s,ne:a,ae:r,re:i,ie:l}=c.te,f=c.oe,_={cookie:c.o.p};e===f.ne?d(a)&&a(y(_)):e===f.se?d(s)&&s(y(_)):(_.changedCategories=c.o.j,_.changedServices=c.o.W,d(n)&&n(y(_))),((e,t)=>{dispatchEvent(new CustomEvent(e,{detail:t}))})(e,y(_))},T=e=>{const{K:t,W:o,M:s,q:a,Y:i,p:l,j:f}=c.o;for(const e of s){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.le&&r(t[e],o)&&d(s)?(n.le=!0,s()):n.le&&!r(t[e],o)&&d(c)&&(n.le=!1,c())}}if(!c.t.manageScriptTags)return;const _=i,u=e||l.categories||[],p=(e,s)=>{if(s>=e.length)return;const c=i[s];if(c.fe)return p(e,s+1);const a=c.de,l=c._e,d=c.ue,_=r(u,l),y=!!d&&r(t[l],d);if(!d&&!c.pe&&_||!d&&c.pe&&!_&&r(f,l)||d&&!c.pe&&y||d&&c.pe&&!y&&r(o[l]||[],d)){c.fe=!0;const t=v(a,'type',!0);C(a,'type',!!t),C(a,n);let o=v(a,'src',!0);o&&C(a,'src',!0);const r=m('script');r.textContent=a.innerHTML;for(const{nodeName:e}of a.attributes)g(r,e,a[e]||v(a,e));t&&(r.type=t),o?r.src=o:o=a.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(r.onload=r.onerror=()=>{p(e,++s)}),a.replaceWith(r),i)return}p(e,++s)};p(_,0)},E=e=>{const{hostname:t,protocol:o}=location,{name:n,path:s,domain:a,sameSite:i}=c.t.cookie,l=encodeURIComponent(JSON.stringify(c.o.p)),f=e?(()=>{const e=c.o.h,t=e?new Date-e:0;return 864e5*h()-t})():864e5*h(),d=new Date;d.setTime(d.getTime()+f);let _=n+'='+l+(0!==f?'; expires='+d.toUTCString():'')+'; Path='+s+'; SameSite='+i;r(t,'.')&&(_+='; Domain='+a),'https:'===o&&(_+='; Secure'),document.cookie=_,c.o.p},N=(e,t,o)=>{const n=o||c.t.cookie.domain,s=t||c.t.cookie.path,a='www.'===n.slice(0,4),r=a&&n.substring(4),i=(e,t)=>{document.cookie=e+'=; path='+s+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)i(t),i(t,n),a&&i(t,r)},x=e=>(e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t})(k(e||c.t.cookie.name,!0)),k=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},j=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];if(e)try{e.test(t)&&o.push(t)}catch(e){}else o.push(t)}return o},F=(e,n=[])=>{((e,t)=>{const{M:o,A:n,R:s,me:a,V:f,q:d}=c.o;let u=[];if(e){i(e)?u.push(...e):l(e)&&(u='all'===e?o:[e]);for(const e of o)f[e]=r(u,e)?_(d[e]):[]}else u=a?(()=>{const e=c.Z.$;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})():n;u=u.filter((e=>!r(o,e)||!r(t,e))),u.push(...s),w(u)})(e,n),(e=>{const t=c.o,{V:o,R:n,K:s,q:a,M:i}=t,l=i;t.X=y(s);for(const e of l){const t=a[e],c=_(t),i=o[e]&&o[e].length>0,l=r(n,e);if(0!==c.length){if(s[e]=[],l)s[e].push(...c);else if(i){const t=o[e];s[e].push(...t)}else s[e]=[];s[e]=u(s[e])}}})(),(()=>{const e=c.o;c.t.mode===o&&e.T?e.j=b(e.P,e.A):e.j=b(e.A,e.p.categories);let n=e.j.length>0,s=!1;for(const t of e.M)e.W[t]=b(e.K[t],e.X[t]),e.W[t].length>0&&(s=!0);const i=c.Z.$;for(let t in i)i[t].checked=r(e.A,t);for(const t of e.M){const o=c.Z.ee[t],n=e.K[t];for(const e in o)o[e].checked=r(n,e)}e.S||(e.S=new Date),e.D||(e.D=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:y(e.A),revision:c.t.revision,data:e.v,consentTimestamp:e.S.toISOString(),consentId:e.D,services:y(e.K)};let l=!1;(e.T||n||s)&&(e.T&&(e.T=!1,l=!0),e.h?e.h=new Date:e.h=e.S,e.p.lastConsentTimestamp=e.h.toISOString(),E(),c.t.autoClearCookies&&(l||!e.T&&n)&&(e=>{const t=c.o,o=j();t.F=!1;let n=e?t.M:t.j;n=n.filter((e=>{let o=t.I[e];return!!o&&!o.readOnly&&!!o.autoClear}));for(const s of n){const n=t.I[s].autoClear,c=n&&n.cookies||[],i=r(t.j,s),l=!r(t.A,s),f=i&&l;if(e&&l||!e&&f){!0===n.reloadPage&&f&&(t.F=!0);for(const e of c){let t=[];const n=e.name,s=e.domain,c=e.path;if(n instanceof RegExp)for(let e of o)n.test(e)&&t.push(e);else{let e=a(o,n);e>-1&&t.push(o[e])}t.length>0&&N(t,c,s)}}}})(l),T()),l&&(D(c.oe.ne),D(c.oe.se),c.t.mode===t)||((n||s)&&D(c.oe.ce),e.F&&location.reload())})()},O=(e,t,o)=>{let n=[];const s=e=>{if(l(e)){let t=k(e);''!==t&&n.push(t)}else n.push(...j(e))};if(i(e))for(let t of e)s(t);else s(e);N(n,t,o)},I=(e,t)=>{const o=x(t);return e?o[e]:o},M=()=>!c.o.T;e.acceptCategory=F,e.acceptService=(e,t)=>{const{M:o,q:n}=c.o;if(!(e&&t&&l(t)&&r(o,t)&&0!==_(n[t]).length))return!1;((e,t)=>{const o=c.o,{q:n,V:s,me:a}=o,f=c.Z.ee[t]||{},d=c.Z.$[t]||{},m=_(n[t]);if(s[t]=[],l(e)){if('all'===e){if(s[t].push(...m),a)for(let e in f)f[e].checked=!0,p(f[e])}else if(r(m,e)&&s[t].push(e),a)for(let t in f)f[t].checked=e===t,p(f[t])}else if(i(e))for(let o of m){const n=r(e,o);n&&s[t].push(o),a&&(f[o].checked=n,p(f[o]))}const g=0===s[t].length;o.A=g?o.A.filter((e=>e!==t)):u([...o.A,t]),a&&(d.checked=!g,p(d))})(e,t),F()},e.acceptedCategory=e=>{const t=c.o.T?[]:c.o.A;return r(t,e)},e.acceptedService=(e,t)=>{const o=c.o.T?[]:c.o.K[t];return r(o,e)},e.eraseCookies=O,e.getConfig=e=>{const t=c.t,o=c.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=I,e.getUserPreferences=()=>{const{O:e,K:t}=c.o,{accepted:o,rejected:n}=(()=>{const{T:e,A:t,M:o}=c.o;return{accepted:t,rejected:e?[]:o.filter((e=>!r(t,e)))}})();return y({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:S()})},e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=m('script'),f(t))for(const e in t)g(o,e,t[e]);var s,c;o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,s=document.head,c=o,s.appendChild(c)}))},e.reset=e=>{const{name:t,path:o,domain:n}=c.t.cookie;e&&O(t,o,n);for(const{ge:e,Ce:t,ve:o}of c.o.m)e.removeEventListener(t,o);const a=new s;for(const e in c)c[e]=a[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:s,oe:a}=c,d=window;if(!d._ccRun){if(d._ccRun=!0,(e=>{const{Z:t,t:s,o:a}=c,i=s,l=a,{cookie:d}=i,u=c.te,p=e.cookie,m=e.categories,g=_(m)||[],C=navigator,y=document;t.ye=y,t.Se=y.documentElement,d.domain=location.hostname,l.i=e,l.I=m,l.M=g,u.ne=e.onFirstConsent,u.se=e.onConsent,u.ce=e.onChange;const{mode:S,autoClearCookies:h,revision:b,manageScriptTags:w,hideFromBots:D}=e;S===o&&(i.mode=S),'boolean'==typeof h&&(i.autoClearCookies=h),'boolean'==typeof w&&(i.manageScriptTags=w),'number'==typeof b&&b>=0&&(i.revision=b,l.N=!0),!1===D&&(i.hideFromBots=!1),!0===i.hideFromBots&&C&&(l.B=C.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(C.userAgent)||C.webdriver),f(p)&&(i.cookie={...d,...p}),i.autoClearCookies,l.N,i.manageScriptTags,(e=>{const{I:t,q:o,K:n,V:s,R:a}=c.o;for(let r of e){const e=t[r],i=e.services||{},l=f(i)&&_(i)||[];o[r]={},n[r]=[],s[r]=[],e.readOnly&&(a.push(r),n[r]=l),c.Z.ee[r]={};for(let e of l){const t=i[e];t.le=!1,o[r][e]=t}}})(g),(()=>{if(!c.t.manageScriptTags)return;const e=c.o,t=(o=document,s='script['+n+']',o.querySelectorAll(s));var o,s;for(const o of t){let t=v(o,n),s=o.dataset.service||'',c=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),c=!0),'!'===s.charAt(0)&&(s=s.slice(1),c=!0),r(e.M,t)&&(e.Y.push({de:o,fe:!1,pe:c,_e:t,ue:s}),s)){const o=e.q[t];o[s]||(o[s]={le:!1})}}})()})(e),t.B)return;if((()=>{const e=c.o,t=c.t,n=x(),{categories:s,services:a,consentId:r,consentTimestamp:f,lastConsentTimestamp:d,data:_,revision:u}=n,p=i(s);e.p=n,e.D=r;const m=!!r&&l(r);e.S=f,e.S&&(e.S=new Date(f)),e.h=d,e.h&&(e.h=new Date(d)),e.v=void 0!==_?_:null,e.N&&m&&u!==t.revision&&(e.k=!1),e.T=!(m&&e.k&&e.S&&e.h&&p),e.T,(()=>{const e=c.o;for(const t of e.M){const o=e.I[t];if(o.readOnly||o.enabled&&e.T){e.P.push(t);const o=e.q[t]||{};for(let n in o)e.K[t].push(n)}}})(),e.T?t.mode===o&&(e.A=[...e.P]):(e.K={...e.K,...a},w([...e.R,...s])),e.V={...e.K}})(),M())return T(),D(a.se);s.mode===o&&T(t.P)}},e.setCookieData=e=>{let t,o=e.value,n=e.mode,s=!1;const a=c.o;if('update'===n){a.v=t=I('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],s=!0)}else!e&&t||t===o||(t=o,s=!0)}else t=o,s=!0;return s&&(a.v=t,a.p.data=t,E(!0)),s},e.validConsent=M,e.validCookie=e=>''!==k(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
