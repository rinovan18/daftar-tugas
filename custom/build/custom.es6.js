/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,e$5=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$5=Symbol(),o$7=new WeakMap;let n$5 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$5&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$7.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$7.set(s,t));}return t}toString(){return this.cssText}};const r$5=t=>new n$5("string"==typeof t?t:t+"",void 0,s$5),i$7=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$5(o,t,s$5)},S$3=(s,o)=>{if(e$5)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$5=e$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$5(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$6,defineProperty:e$4,getOwnPropertyDescriptor:h$3,getOwnPropertyNames:r$4,getOwnPropertySymbols:o$6,getPrototypeOf:n$4}=Object,a$3=globalThis,c$4=a$3.trustedTypes,l$3=c$4?c$4.emptyScript:"",p$3=a$3.reactiveElementPolyfillSupport,d$3=(t,s)=>t,u$3={toAttribute(t,s){switch(s){case Boolean:t=t?l$3:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$3=(t,s)=>!i$6(t,s),b$3={attribute:true,type:String,converter:u$3,reflect:false,useDefault:false,hasChanged:f$3};Symbol.metadata??=Symbol("metadata"),a$3.litPropertyMetadata??=new WeakMap;let y$3 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$3){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$4(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$3(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$3}static _$Ei(){if(this.hasOwnProperty(d$3("elementProperties")))return;const t=n$4(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$3("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$3("properties"))){const t=this.properties,s=[...r$4(t),...o$6(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$5(s));}else void 0!==s&&i.push(c$5(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$3(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$3).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$3;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$3)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$3.elementStyles=[],y$3.shadowRootOptions={mode:"open"},y$3[d$3("elementProperties")]=new Map,y$3[d$3("finalized")]=new Map,p$3?.({ReactiveElement:y$3}),(a$3.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,i$5=t=>t,s$4=t$2.trustedTypes,e$3=s$4?s$4.createPolicy("lit-html",{createHTML:t=>t}):void 0,h$2="$lit$",o$5=`lit$${Math.random().toFixed(9).slice(2)}$`,n$3="?"+o$5,r$3=`<${n$3}>`,l$2=document,c$3=()=>l$2.createComment(""),a$2=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u$2=Array.isArray,d$2=t=>u$2(t)||"function"==typeof t?.[Symbol.iterator],f$2="[ \t\n\f\r]",v$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_$1=/-->/g,m$1=/>/g,p$2=RegExp(`>|${f$2}(?:([^\\s"'>=/]+)(${f$2}*=${f$2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g$1=/'/g,$$1=/"/g,y$2=/^(?:script|style|textarea|title)$/i,x$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b$2=x$1(1),E$1=Symbol.for("lit-noChange"),A$1=Symbol.for("lit-nothing"),C$1=new WeakMap,P$1=l$2.createTreeWalker(l$2,129);function V$1(t,i){if(!u$2(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$3?e$3.createHTML(i):i}const N$1=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v$1;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v$1?"!--"===u[1]?c=_$1:void 0!==u[1]?c=m$1:void 0!==u[2]?(y$2.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p$2):void 0!==u[3]&&(c=p$2):c===p$2?">"===u[0]?(c=n??v$1,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p$2:'"'===u[3]?$$1:g$1):c===$$1||c===g$1?c=p$2:c===_$1||c===m$1?c=v$1:(c=p$2,n=void 0);const x=c===p$2&&t[i+1].startsWith("/>")?" ":"";l+=c===v$1?s+r$3:d>=0?(e.push(a),s.slice(0,d)+h$2+s.slice(d)+o$5+x):s+o$5+(-2===d?i:x);}return [V$1(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};let S$2 = class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N$1(t,i);if(this.el=S.createElement(f,e),P$1.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P$1.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h$2)){const i=v[a++],s=r.getAttribute(t).split(o$5),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I$1:"?"===e[1]?L$1:"@"===e[1]?z$1:H$1}),r.removeAttribute(t);}else t.startsWith(o$5)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y$2.test(r.tagName)){const t=r.textContent.split(o$5),i=t.length-1;if(i>0){r.textContent=s$4?s$4.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c$3()),P$1.nextNode(),d.push({type:2,index:++l});r.append(t[i],c$3());}}}else if(8===r.nodeType)if(r.data===n$3)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$5,t+1));)d.push({type:7,index:l}),t+=o$5.length-1;}l++;}}static createElement(t,i){const s=l$2.createElement("template");return s.innerHTML=t,s}};function M$1(t,i,s=t,e){if(i===E$1)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a$2(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M$1(t,h._$AS(t,i.values),h,e)),i}let R$1 = class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l$2).importNode(i,true);P$1.currentNode=e;let h=P$1.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k$1(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z$1(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P$1.nextNode(),o++);}return P$1.currentNode=l$2,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}};let k$1 = class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M$1(this,t,i),a$2(t)?t===A$1||null==t||""===t?(this._$AH!==A$1&&this._$AR(),this._$AH=A$1):t!==this._$AH&&t!==E$1&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d$2(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A$1&&a$2(this._$AH)?this._$AA.nextSibling.data=t:this.T(l$2.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S$2.createElement(V$1(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R$1(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C$1.get(t.strings);return void 0===i&&C$1.set(t.strings,i=new S$2(t)),i}k(t){u$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c$3()),this.O(c$3()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$5(t).nextSibling;i$5(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}};let H$1 = class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A$1;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M$1(this,t,i,0),o=!a$2(t)||t!==this._$AH&&t!==E$1,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M$1(this,e[s+n],i,n),r===E$1&&(r=this._$AH[n]),o||=!a$2(r)||r!==this._$AH[n],r===A$1?t=A$1:t!==A$1&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}};let I$1 = class I extends H$1{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A$1?void 0:t;}};let L$1 = class L extends H$1{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A$1);}};let z$1 = class z extends H$1{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M$1(this,t,i,0)??A$1)===E$1)return;const s=this._$AH,e=t===A$1&&s!==A$1||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A$1&&(s===A$1||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}};let Z$1 = class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M$1(this,t);}};const B$1=t$2.litHtmlPolyfillSupport;B$1?.(S$2,k$1),(t$2.litHtmlVersions??=[]).push("3.3.3");const D$1=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k$1(i.insertBefore(c$3(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$3=globalThis;let i$4 = class i extends y$3{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D$1(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E$1}};i$4._$litElement$=true,i$4["finalized"]=true,s$3.litElementHydrateSupport?.({LitElement:i$4});const o$4=s$3.litElementPolyfillSupport;o$4?.({LitElement:i$4});(s$3.litElementVersions??=[]).push("4.2.2");

/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 *
 * `simple-colors-shared-styles`
 * @element simple-colors-shared-styles
 * a shared set of styles for `simple-colors`
 *
 *

 * @demo ./demo/index.html
 */

globalThis.SimpleColorsSharedStyles = {};
globalThis.SimpleColorsSharedStyles.instance = null;

let SimpleColorsSharedStyles$1 = class SimpleColorsSharedStyles extends i$4 {
  //styles function
  static get styles() {
    return [
      i$7`
        html {
          --simple-colors-default-theme-accent-1: #ffffff;
          --simple-colors-default-theme-accent-2: #eeeeee;
          --simple-colors-default-theme-accent-3: #dddddd;
          --simple-colors-default-theme-accent-4: #cccccc;
          --simple-colors-default-theme-accent-5: #bbbbbb;
          --simple-colors-default-theme-accent-6: #999999;
          --simple-colors-default-theme-accent-7: #666666;
          --simple-colors-default-theme-accent-8: #444444;
          --simple-colors-default-theme-accent-9: #333333;
          --simple-colors-default-theme-accent-10: #222222;
          --simple-colors-default-theme-accent-11: #111111;
          --simple-colors-default-theme-accent-12: #000000;

          --simple-colors-default-theme-grey-1: #ffffff;
          --simple-colors-default-theme-grey-2: #eeeeee;
          --simple-colors-default-theme-grey-3: #dddddd;
          --simple-colors-default-theme-grey-4: #cccccc;
          --simple-colors-default-theme-grey-5: #bbbbbb;
          --simple-colors-default-theme-grey-6: #999999;
          --simple-colors-default-theme-grey-7: #666666;
          --simple-colors-default-theme-grey-8: #444444;
          --simple-colors-default-theme-grey-9: #333333;
          --simple-colors-default-theme-grey-10: #222222;
          --simple-colors-default-theme-grey-11: #111111;
          --simple-colors-default-theme-grey-12: #000000;

          --simple-colors-default-theme-red-1: #ffdddd;
          --simple-colors-default-theme-red-2: #ffaeae;
          --simple-colors-default-theme-red-3: #ff8f8f;
          --simple-colors-default-theme-red-4: #ff7474;
          --simple-colors-default-theme-red-5: #fd5151;
          --simple-colors-default-theme-red-6: #ff2222;
          --simple-colors-default-theme-red-7: #ee0000;
          --simple-colors-default-theme-red-8: #ac0000;
          --simple-colors-default-theme-red-9: #850000;
          --simple-colors-default-theme-red-10: #670000;
          --simple-colors-default-theme-red-11: #520000;
          --simple-colors-default-theme-red-12: #3f0000;

          --simple-colors-default-theme-pink-1: #ffe6f1;
          --simple-colors-default-theme-pink-2: #ffa5cf;
          --simple-colors-default-theme-pink-3: #ff87c0;
          --simple-colors-default-theme-pink-4: #ff73b5;
          --simple-colors-default-theme-pink-5: #fd60aa;
          --simple-colors-default-theme-pink-6: #ff3996;
          --simple-colors-default-theme-pink-7: #da004e;
          --simple-colors-default-theme-pink-8: #b80042;
          --simple-colors-default-theme-pink-9: #980036;
          --simple-colors-default-theme-pink-10: #78002b;
          --simple-colors-default-theme-pink-11: #5a0020;
          --simple-colors-default-theme-pink-12: #440019;

          --simple-colors-default-theme-purple-1: #fce6ff;
          --simple-colors-default-theme-purple-2: #f4affd;
          --simple-colors-default-theme-purple-3: #f394ff;
          --simple-colors-default-theme-purple-4: #f07cff;
          --simple-colors-default-theme-purple-5: #ed61ff;
          --simple-colors-default-theme-purple-6: #e200ff;
          --simple-colors-default-theme-purple-7: #a500ba;
          --simple-colors-default-theme-purple-8: #8a009b;
          --simple-colors-default-theme-purple-9: #6c0079;
          --simple-colors-default-theme-purple-10: #490052;
          --simple-colors-default-theme-purple-11: #33003a;
          --simple-colors-default-theme-purple-12: #200025;

          --simple-colors-default-theme-deep-purple-1: #f3e4ff;
          --simple-colors-default-theme-deep-purple-2: #ddacff;
          --simple-colors-default-theme-deep-purple-3: #c97eff;
          --simple-colors-default-theme-deep-purple-4: #bb63f9;
          --simple-colors-default-theme-deep-purple-5: #b44aff;
          --simple-colors-default-theme-deep-purple-6: #a931ff;
          --simple-colors-default-theme-deep-purple-7: #7e00d8;
          --simple-colors-default-theme-deep-purple-8: #5d009f;
          --simple-colors-default-theme-deep-purple-9: #4c0081;
          --simple-colors-default-theme-deep-purple-10: #3a0063;
          --simple-colors-default-theme-deep-purple-11: #2a0049;
          --simple-colors-default-theme-deep-purple-12: #1d0033;

          --simple-colors-default-theme-indigo-1: #e5ddff;
          --simple-colors-default-theme-indigo-2: #c3b2ff;
          --simple-colors-default-theme-indigo-3: #af97ff;
          --simple-colors-default-theme-indigo-4: #9e82ff;
          --simple-colors-default-theme-indigo-5: #9373ff;
          --simple-colors-default-theme-indigo-6: #835fff;
          --simple-colors-default-theme-indigo-7: #3a00ff;
          --simple-colors-default-theme-indigo-8: #2801b0;
          --simple-colors-default-theme-indigo-9: #20008c;
          --simple-colors-default-theme-indigo-10: #160063;
          --simple-colors-default-theme-indigo-11: #100049;
          --simple-colors-default-theme-indigo-12: #0a0030;

          --simple-colors-default-theme-blue-1: #e2ecff;
          --simple-colors-default-theme-blue-2: #acc9ff;
          --simple-colors-default-theme-blue-3: #95baff;
          --simple-colors-default-theme-blue-4: #74a5ff;
          --simple-colors-default-theme-blue-5: #5892fd;
          --simple-colors-default-theme-blue-6: #4083ff;
          --simple-colors-default-theme-blue-7: #0059ff;
          --simple-colors-default-theme-blue-8: #0041bb;
          --simple-colors-default-theme-blue-9: #003494;
          --simple-colors-default-theme-blue-10: #002569;
          --simple-colors-default-theme-blue-11: #001947;
          --simple-colors-default-theme-blue-12: #001333;

          --simple-colors-default-theme-light-blue-1: #cde8ff;
          --simple-colors-default-theme-light-blue-2: #a1d1ff;
          --simple-colors-default-theme-light-blue-3: #92c9ff;
          --simple-colors-default-theme-light-blue-4: #65b3ff;
          --simple-colors-default-theme-light-blue-5: #58adff;
          --simple-colors-default-theme-light-blue-6: #41a1ff;
          --simple-colors-default-theme-light-blue-7: #007ffc;
          --simple-colors-default-theme-light-blue-8: #0066ca;
          --simple-colors-default-theme-light-blue-9: #0055a8;
          --simple-colors-default-theme-light-blue-10: #003f7d;
          --simple-colors-default-theme-light-blue-11: #002850;
          --simple-colors-default-theme-light-blue-12: #001b36;

          --simple-colors-default-theme-cyan-1: #ccf3fd;
          --simple-colors-default-theme-cyan-2: #9beaff;
          --simple-colors-default-theme-cyan-3: #77e2ff;
          --simple-colors-default-theme-cyan-4: #33d4ff;
          --simple-colors-default-theme-cyan-5: #1ccfff;
          --simple-colors-default-theme-cyan-6: #00c9ff;
          --simple-colors-default-theme-cyan-7: #009dc7;
          --simple-colors-default-theme-cyan-8: #007999;
          --simple-colors-default-theme-cyan-9: #005970;
          --simple-colors-default-theme-cyan-10: #003f50;
          --simple-colors-default-theme-cyan-11: #002c38;
          --simple-colors-default-theme-cyan-12: #001a20;

          --simple-colors-default-theme-teal-1: #d4ffee;
          --simple-colors-default-theme-teal-2: #98ffd7;
          --simple-colors-default-theme-teal-3: #79ffcb;
          --simple-colors-default-theme-teal-4: #56ffbd;
          --simple-colors-default-theme-teal-5: #29ffac;
          --simple-colors-default-theme-teal-6: #00ff9c;
          --simple-colors-default-theme-teal-7: #009d75;
          --simple-colors-default-theme-teal-8: #007658;
          --simple-colors-default-theme-teal-9: #004e3a;
          --simple-colors-default-theme-teal-10: #003829;
          --simple-colors-default-theme-teal-11: #002a20;
          --simple-colors-default-theme-teal-12: #001b14;

          --simple-colors-default-theme-green-1: #e1ffeb;
          --simple-colors-default-theme-green-2: #acffc9;
          --simple-colors-default-theme-green-3: #79ffa7;
          --simple-colors-default-theme-green-4: #49ff88;
          --simple-colors-default-theme-green-5: #24ff70;
          --simple-colors-default-theme-green-6: #00f961;
          --simple-colors-default-theme-green-7: #008c37;
          --simple-colors-default-theme-green-8: #00762e;
          --simple-colors-default-theme-green-9: #005a23;
          --simple-colors-default-theme-green-10: #003d18;
          --simple-colors-default-theme-green-11: #002a11;
          --simple-colors-default-theme-green-12: #001d0c;

          --simple-colors-default-theme-light-green-1: #ebffdb;
          --simple-colors-default-theme-light-green-2: #c7ff9b;
          --simple-colors-default-theme-light-green-3: #b1ff75;
          --simple-colors-default-theme-light-green-4: #a1fd5a;
          --simple-colors-default-theme-light-green-5: #8efd38;
          --simple-colors-default-theme-light-green-6: #6fff00;
          --simple-colors-default-theme-light-green-7: #429d00;
          --simple-colors-default-theme-light-green-8: #357f00;
          --simple-colors-default-theme-light-green-9: #296100;
          --simple-colors-default-theme-light-green-10: #1b3f00;
          --simple-colors-default-theme-light-green-11: #143000;
          --simple-colors-default-theme-light-green-12: #0d2000;

          --simple-colors-default-theme-lime-1: #f1ffd2;
          --simple-colors-default-theme-lime-2: #dfff9b;
          --simple-colors-default-theme-lime-3: #d4ff77;
          --simple-colors-default-theme-lime-4: #caff58;
          --simple-colors-default-theme-lime-5: #bdff2d;
          --simple-colors-default-theme-lime-6: #aeff00;
          --simple-colors-default-theme-lime-7: #649900;
          --simple-colors-default-theme-lime-8: #4d7600;
          --simple-colors-default-theme-lime-9: #3b5a00;
          --simple-colors-default-theme-lime-10: #293f00;
          --simple-colors-default-theme-lime-11: #223400;
          --simple-colors-default-theme-lime-12: #182400;

          --simple-colors-default-theme-yellow-1: #ffffd5;
          --simple-colors-default-theme-yellow-2: #ffffac;
          --simple-colors-default-theme-yellow-3: #ffff90;
          --simple-colors-default-theme-yellow-4: #ffff7c;
          --simple-colors-default-theme-yellow-5: #ffff3a;
          --simple-colors-default-theme-yellow-6: #f6f600;
          --simple-colors-default-theme-yellow-7: #929100;
          --simple-colors-default-theme-yellow-8: #787700;
          --simple-colors-default-theme-yellow-9: #585700;
          --simple-colors-default-theme-yellow-10: #454400;
          --simple-colors-default-theme-yellow-11: #303000;
          --simple-colors-default-theme-yellow-12: #242400;

          --simple-colors-default-theme-amber-1: #fff2d4;
          --simple-colors-default-theme-amber-2: #ffdf92;
          --simple-colors-default-theme-amber-3: #ffd677;
          --simple-colors-default-theme-amber-4: #ffcf5e;
          --simple-colors-default-theme-amber-5: #ffc235;
          --simple-colors-default-theme-amber-6: #ffc500;
          --simple-colors-default-theme-amber-7: #b28900;
          --simple-colors-default-theme-amber-8: #876800;
          --simple-colors-default-theme-amber-9: #614b00;
          --simple-colors-default-theme-amber-10: #413200;
          --simple-colors-default-theme-amber-11: #302500;
          --simple-colors-default-theme-amber-12: #221a00;

          --simple-colors-default-theme-orange-1: #ffebd7;
          --simple-colors-default-theme-orange-2: #ffca92;
          --simple-colors-default-theme-orange-3: #ffbd75;
          --simple-colors-default-theme-orange-4: #ffb05c;
          --simple-colors-default-theme-orange-5: #ff9e36;
          --simple-colors-default-theme-orange-6: #ff9625;
          --simple-colors-default-theme-orange-7: #e56a00;
          --simple-colors-default-theme-orange-8: #ae5100;
          --simple-colors-default-theme-orange-9: #833d00;
          --simple-colors-default-theme-orange-10: #612d00;
          --simple-colors-default-theme-orange-11: #3d1c00;
          --simple-colors-default-theme-orange-12: #2c1400;

          --simple-colors-default-theme-deep-orange-1: #ffe7e0;
          --simple-colors-default-theme-deep-orange-2: #ffb299;
          --simple-colors-default-theme-deep-orange-3: #ffa588;
          --simple-colors-default-theme-deep-orange-4: #ff8a64;
          --simple-colors-default-theme-deep-orange-5: #ff7649;
          --simple-colors-default-theme-deep-orange-6: #ff6c3c;
          --simple-colors-default-theme-deep-orange-7: #f53100;
          --simple-colors-default-theme-deep-orange-8: #b92500;
          --simple-colors-default-theme-deep-orange-9: #8a1c00;
          --simple-colors-default-theme-deep-orange-10: #561100;
          --simple-colors-default-theme-deep-orange-11: #3a0c00;
          --simple-colors-default-theme-deep-orange-12: #240700;

          --simple-colors-default-theme-brown-1: #f0e2de;
          --simple-colors-default-theme-brown-2: #e5b8aa;
          --simple-colors-default-theme-brown-3: #c59485;
          --simple-colors-default-theme-brown-4: #b68373;
          --simple-colors-default-theme-brown-5: #ac7868;
          --simple-colors-default-theme-brown-6: #a47060;
          --simple-colors-default-theme-brown-7: #85574a;
          --simple-colors-default-theme-brown-8: #724539;
          --simple-colors-default-theme-brown-9: #5b3328;
          --simple-colors-default-theme-brown-10: #3b1e15;
          --simple-colors-default-theme-brown-11: #2c140e;
          --simple-colors-default-theme-brown-12: #200e09;

          --simple-colors-default-theme-blue-grey-1: #e7eff1;
          --simple-colors-default-theme-blue-grey-2: #b1c5ce;
          --simple-colors-default-theme-blue-grey-3: #9badb6;
          --simple-colors-default-theme-blue-grey-4: #8d9fa7;
          --simple-colors-default-theme-blue-grey-5: #7a8f98;
          --simple-colors-default-theme-blue-grey-6: #718892;
          --simple-colors-default-theme-blue-grey-7: #56707c;
          --simple-colors-default-theme-blue-grey-8: #40535b;
          --simple-colors-default-theme-blue-grey-9: #2f3e45;
          --simple-colors-default-theme-blue-grey-10: #1e282c;
          --simple-colors-default-theme-blue-grey-11: #182023;
          --simple-colors-default-theme-blue-grey-12: #0f1518;
          --simple-colors-fixed-theme-accent-1: #ffffff;
          --simple-colors-fixed-theme-accent-2: #eeeeee;
          --simple-colors-fixed-theme-accent-3: #dddddd;
          --simple-colors-fixed-theme-accent-4: #cccccc;
          --simple-colors-fixed-theme-accent-5: #bbbbbb;
          --simple-colors-fixed-theme-accent-6: #999999;
          --simple-colors-fixed-theme-accent-7: #666666;
          --simple-colors-fixed-theme-accent-8: #444444;
          --simple-colors-fixed-theme-accent-9: #333333;
          --simple-colors-fixed-theme-accent-10: #222222;
          --simple-colors-fixed-theme-accent-11: #111111;
          --simple-colors-fixed-theme-accent-12: #000000;

          --simple-colors-fixed-theme-grey-1: #ffffff;
          --simple-colors-fixed-theme-grey-2: #eeeeee;
          --simple-colors-fixed-theme-grey-3: #dddddd;
          --simple-colors-fixed-theme-grey-4: #cccccc;
          --simple-colors-fixed-theme-grey-5: #bbbbbb;
          --simple-colors-fixed-theme-grey-6: #999999;
          --simple-colors-fixed-theme-grey-7: #666666;
          --simple-colors-fixed-theme-grey-8: #444444;
          --simple-colors-fixed-theme-grey-9: #333333;
          --simple-colors-fixed-theme-grey-10: #222222;
          --simple-colors-fixed-theme-grey-11: #111111;
          --simple-colors-fixed-theme-grey-12: #000000;

          --simple-colors-fixed-theme-red-1: #ffdddd;
          --simple-colors-fixed-theme-red-2: #ffaeae;
          --simple-colors-fixed-theme-red-3: #ff8f8f;
          --simple-colors-fixed-theme-red-4: #ff7474;
          --simple-colors-fixed-theme-red-5: #fd5151;
          --simple-colors-fixed-theme-red-6: #ff2222;
          --simple-colors-fixed-theme-red-7: #ee0000;
          --simple-colors-fixed-theme-red-8: #ac0000;
          --simple-colors-fixed-theme-red-9: #850000;
          --simple-colors-fixed-theme-red-10: #670000;
          --simple-colors-fixed-theme-red-11: #520000;
          --simple-colors-fixed-theme-red-12: #3f0000;

          --simple-colors-fixed-theme-pink-1: #ffe6f1;
          --simple-colors-fixed-theme-pink-2: #ffa5cf;
          --simple-colors-fixed-theme-pink-3: #ff87c0;
          --simple-colors-fixed-theme-pink-4: #ff73b5;
          --simple-colors-fixed-theme-pink-5: #fd60aa;
          --simple-colors-fixed-theme-pink-6: #ff3996;
          --simple-colors-fixed-theme-pink-7: #da004e;
          --simple-colors-fixed-theme-pink-8: #b80042;
          --simple-colors-fixed-theme-pink-9: #980036;
          --simple-colors-fixed-theme-pink-10: #78002b;
          --simple-colors-fixed-theme-pink-11: #5a0020;
          --simple-colors-fixed-theme-pink-12: #440019;

          --simple-colors-fixed-theme-purple-1: #fce6ff;
          --simple-colors-fixed-theme-purple-2: #f4affd;
          --simple-colors-fixed-theme-purple-3: #f394ff;
          --simple-colors-fixed-theme-purple-4: #f07cff;
          --simple-colors-fixed-theme-purple-5: #ed61ff;
          --simple-colors-fixed-theme-purple-6: #e200ff;
          --simple-colors-fixed-theme-purple-7: #a500ba;
          --simple-colors-fixed-theme-purple-8: #8a009b;
          --simple-colors-fixed-theme-purple-9: #6c0079;
          --simple-colors-fixed-theme-purple-10: #490052;
          --simple-colors-fixed-theme-purple-11: #33003a;
          --simple-colors-fixed-theme-purple-12: #200025;

          --simple-colors-fixed-theme-deep-purple-1: #f3e4ff;
          --simple-colors-fixed-theme-deep-purple-2: #ddacff;
          --simple-colors-fixed-theme-deep-purple-3: #c97eff;
          --simple-colors-fixed-theme-deep-purple-4: #bb63f9;
          --simple-colors-fixed-theme-deep-purple-5: #b44aff;
          --simple-colors-fixed-theme-deep-purple-6: #a931ff;
          --simple-colors-fixed-theme-deep-purple-7: #7e00d8;
          --simple-colors-fixed-theme-deep-purple-8: #5d009f;
          --simple-colors-fixed-theme-deep-purple-9: #4c0081;
          --simple-colors-fixed-theme-deep-purple-10: #3a0063;
          --simple-colors-fixed-theme-deep-purple-11: #2a0049;
          --simple-colors-fixed-theme-deep-purple-12: #1d0033;

          --simple-colors-fixed-theme-indigo-1: #e5ddff;
          --simple-colors-fixed-theme-indigo-2: #c3b2ff;
          --simple-colors-fixed-theme-indigo-3: #af97ff;
          --simple-colors-fixed-theme-indigo-4: #9e82ff;
          --simple-colors-fixed-theme-indigo-5: #9373ff;
          --simple-colors-fixed-theme-indigo-6: #835fff;
          --simple-colors-fixed-theme-indigo-7: #3a00ff;
          --simple-colors-fixed-theme-indigo-8: #2801b0;
          --simple-colors-fixed-theme-indigo-9: #20008c;
          --simple-colors-fixed-theme-indigo-10: #160063;
          --simple-colors-fixed-theme-indigo-11: #100049;
          --simple-colors-fixed-theme-indigo-12: #0a0030;

          --simple-colors-fixed-theme-blue-1: #e2ecff;
          --simple-colors-fixed-theme-blue-2: #acc9ff;
          --simple-colors-fixed-theme-blue-3: #95baff;
          --simple-colors-fixed-theme-blue-4: #74a5ff;
          --simple-colors-fixed-theme-blue-5: #5892fd;
          --simple-colors-fixed-theme-blue-6: #4083ff;
          --simple-colors-fixed-theme-blue-7: #0059ff;
          --simple-colors-fixed-theme-blue-8: #0041bb;
          --simple-colors-fixed-theme-blue-9: #003494;
          --simple-colors-fixed-theme-blue-10: #002569;
          --simple-colors-fixed-theme-blue-11: #001947;
          --simple-colors-fixed-theme-blue-12: #001333;

          --simple-colors-fixed-theme-light-blue-1: #cde8ff;
          --simple-colors-fixed-theme-light-blue-2: #a1d1ff;
          --simple-colors-fixed-theme-light-blue-3: #92c9ff;
          --simple-colors-fixed-theme-light-blue-4: #65b3ff;
          --simple-colors-fixed-theme-light-blue-5: #58adff;
          --simple-colors-fixed-theme-light-blue-6: #41a1ff;
          --simple-colors-fixed-theme-light-blue-7: #007ffc;
          --simple-colors-fixed-theme-light-blue-8: #0066ca;
          --simple-colors-fixed-theme-light-blue-9: #0055a8;
          --simple-colors-fixed-theme-light-blue-10: #003f7d;
          --simple-colors-fixed-theme-light-blue-11: #002850;
          --simple-colors-fixed-theme-light-blue-12: #001b36;

          --simple-colors-fixed-theme-cyan-1: #ccf3fd;
          --simple-colors-fixed-theme-cyan-2: #9beaff;
          --simple-colors-fixed-theme-cyan-3: #77e2ff;
          --simple-colors-fixed-theme-cyan-4: #33d4ff;
          --simple-colors-fixed-theme-cyan-5: #1ccfff;
          --simple-colors-fixed-theme-cyan-6: #00c9ff;
          --simple-colors-fixed-theme-cyan-7: #009dc7;
          --simple-colors-fixed-theme-cyan-8: #007999;
          --simple-colors-fixed-theme-cyan-9: #005970;
          --simple-colors-fixed-theme-cyan-10: #003f50;
          --simple-colors-fixed-theme-cyan-11: #002c38;
          --simple-colors-fixed-theme-cyan-12: #001a20;

          --simple-colors-fixed-theme-teal-1: #d4ffee;
          --simple-colors-fixed-theme-teal-2: #98ffd7;
          --simple-colors-fixed-theme-teal-3: #79ffcb;
          --simple-colors-fixed-theme-teal-4: #56ffbd;
          --simple-colors-fixed-theme-teal-5: #29ffac;
          --simple-colors-fixed-theme-teal-6: #00ff9c;
          --simple-colors-fixed-theme-teal-7: #009d75;
          --simple-colors-fixed-theme-teal-8: #007658;
          --simple-colors-fixed-theme-teal-9: #004e3a;
          --simple-colors-fixed-theme-teal-10: #003829;
          --simple-colors-fixed-theme-teal-11: #002a20;
          --simple-colors-fixed-theme-teal-12: #001b14;

          --simple-colors-fixed-theme-green-1: #e1ffeb;
          --simple-colors-fixed-theme-green-2: #acffc9;
          --simple-colors-fixed-theme-green-3: #79ffa7;
          --simple-colors-fixed-theme-green-4: #49ff88;
          --simple-colors-fixed-theme-green-5: #24ff70;
          --simple-colors-fixed-theme-green-6: #00f961;
          --simple-colors-fixed-theme-green-7: #008c37;
          --simple-colors-fixed-theme-green-8: #00762e;
          --simple-colors-fixed-theme-green-9: #005a23;
          --simple-colors-fixed-theme-green-10: #003d18;
          --simple-colors-fixed-theme-green-11: #002a11;
          --simple-colors-fixed-theme-green-12: #001d0c;

          --simple-colors-fixed-theme-light-green-1: #ebffdb;
          --simple-colors-fixed-theme-light-green-2: #c7ff9b;
          --simple-colors-fixed-theme-light-green-3: #b1ff75;
          --simple-colors-fixed-theme-light-green-4: #a1fd5a;
          --simple-colors-fixed-theme-light-green-5: #8efd38;
          --simple-colors-fixed-theme-light-green-6: #6fff00;
          --simple-colors-fixed-theme-light-green-7: #429d00;
          --simple-colors-fixed-theme-light-green-8: #357f00;
          --simple-colors-fixed-theme-light-green-9: #296100;
          --simple-colors-fixed-theme-light-green-10: #1b3f00;
          --simple-colors-fixed-theme-light-green-11: #143000;
          --simple-colors-fixed-theme-light-green-12: #0d2000;

          --simple-colors-fixed-theme-lime-1: #f1ffd2;
          --simple-colors-fixed-theme-lime-2: #dfff9b;
          --simple-colors-fixed-theme-lime-3: #d4ff77;
          --simple-colors-fixed-theme-lime-4: #caff58;
          --simple-colors-fixed-theme-lime-5: #bdff2d;
          --simple-colors-fixed-theme-lime-6: #aeff00;
          --simple-colors-fixed-theme-lime-7: #649900;
          --simple-colors-fixed-theme-lime-8: #4d7600;
          --simple-colors-fixed-theme-lime-9: #3b5a00;
          --simple-colors-fixed-theme-lime-10: #293f00;
          --simple-colors-fixed-theme-lime-11: #223400;
          --simple-colors-fixed-theme-lime-12: #182400;

          --simple-colors-fixed-theme-yellow-1: #ffffd5;
          --simple-colors-fixed-theme-yellow-2: #ffffac;
          --simple-colors-fixed-theme-yellow-3: #ffff90;
          --simple-colors-fixed-theme-yellow-4: #ffff7c;
          --simple-colors-fixed-theme-yellow-5: #ffff3a;
          --simple-colors-fixed-theme-yellow-6: #f6f600;
          --simple-colors-fixed-theme-yellow-7: #929100;
          --simple-colors-fixed-theme-yellow-8: #787700;
          --simple-colors-fixed-theme-yellow-9: #585700;
          --simple-colors-fixed-theme-yellow-10: #454400;
          --simple-colors-fixed-theme-yellow-11: #303000;
          --simple-colors-fixed-theme-yellow-12: #242400;

          --simple-colors-fixed-theme-amber-1: #fff2d4;
          --simple-colors-fixed-theme-amber-2: #ffdf92;
          --simple-colors-fixed-theme-amber-3: #ffd677;
          --simple-colors-fixed-theme-amber-4: #ffcf5e;
          --simple-colors-fixed-theme-amber-5: #ffc235;
          --simple-colors-fixed-theme-amber-6: #ffc500;
          --simple-colors-fixed-theme-amber-7: #b28900;
          --simple-colors-fixed-theme-amber-8: #876800;
          --simple-colors-fixed-theme-amber-9: #614b00;
          --simple-colors-fixed-theme-amber-10: #413200;
          --simple-colors-fixed-theme-amber-11: #302500;
          --simple-colors-fixed-theme-amber-12: #221a00;

          --simple-colors-fixed-theme-orange-1: #ffebd7;
          --simple-colors-fixed-theme-orange-2: #ffca92;
          --simple-colors-fixed-theme-orange-3: #ffbd75;
          --simple-colors-fixed-theme-orange-4: #ffb05c;
          --simple-colors-fixed-theme-orange-5: #ff9e36;
          --simple-colors-fixed-theme-orange-6: #ff9625;
          --simple-colors-fixed-theme-orange-7: #e56a00;
          --simple-colors-fixed-theme-orange-8: #ae5100;
          --simple-colors-fixed-theme-orange-9: #833d00;
          --simple-colors-fixed-theme-orange-10: #612d00;
          --simple-colors-fixed-theme-orange-11: #3d1c00;
          --simple-colors-fixed-theme-orange-12: #2c1400;

          --simple-colors-fixed-theme-deep-orange-1: #ffe7e0;
          --simple-colors-fixed-theme-deep-orange-2: #ffb299;
          --simple-colors-fixed-theme-deep-orange-3: #ffa588;
          --simple-colors-fixed-theme-deep-orange-4: #ff8a64;
          --simple-colors-fixed-theme-deep-orange-5: #ff7649;
          --simple-colors-fixed-theme-deep-orange-6: #ff6c3c;
          --simple-colors-fixed-theme-deep-orange-7: #f53100;
          --simple-colors-fixed-theme-deep-orange-8: #b92500;
          --simple-colors-fixed-theme-deep-orange-9: #8a1c00;
          --simple-colors-fixed-theme-deep-orange-10: #561100;
          --simple-colors-fixed-theme-deep-orange-11: #3a0c00;
          --simple-colors-fixed-theme-deep-orange-12: #240700;

          --simple-colors-fixed-theme-brown-1: #f0e2de;
          --simple-colors-fixed-theme-brown-2: #e5b8aa;
          --simple-colors-fixed-theme-brown-3: #c59485;
          --simple-colors-fixed-theme-brown-4: #b68373;
          --simple-colors-fixed-theme-brown-5: #ac7868;
          --simple-colors-fixed-theme-brown-6: #a47060;
          --simple-colors-fixed-theme-brown-7: #85574a;
          --simple-colors-fixed-theme-brown-8: #724539;
          --simple-colors-fixed-theme-brown-9: #5b3328;
          --simple-colors-fixed-theme-brown-10: #3b1e15;
          --simple-colors-fixed-theme-brown-11: #2c140e;
          --simple-colors-fixed-theme-brown-12: #200e09;

          --simple-colors-fixed-theme-blue-grey-1: #e7eff1;
          --simple-colors-fixed-theme-blue-grey-2: #b1c5ce;
          --simple-colors-fixed-theme-blue-grey-3: #9badb6;
          --simple-colors-fixed-theme-blue-grey-4: #8d9fa7;
          --simple-colors-fixed-theme-blue-grey-5: #7a8f98;
          --simple-colors-fixed-theme-blue-grey-6: #718892;
          --simple-colors-fixed-theme-blue-grey-7: #56707c;
          --simple-colors-fixed-theme-blue-grey-8: #40535b;
          --simple-colors-fixed-theme-blue-grey-9: #2f3e45;
          --simple-colors-fixed-theme-blue-grey-10: #1e282c;
          --simple-colors-fixed-theme-blue-grey-11: #182023;
          --simple-colors-fixed-theme-blue-grey-12: #0f1518;
        }
      `,
    ];
  }

  // render function
  render() {
    return b$2``;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,

      /**
       * The colors object.
       * Each color contains an array of shades as hex codes from lightest to darkest.
       */
      colors: {
        attribute: "colors",
        type: Object,
      },
      /**
    * Object with information on which color combinations are WCAG 2.0AA compliant, "eg": 
     {
       "greyColor": {          //if either the color or its contrast will be a grey
         "aaLarge": [          //if bold text >= 14pt, text >= 18pt, decorative only, or disabled
           {                 //for the first shade of a color
             "min": 7,         //index of the lightest contrasting shade of another color
             "max": 12         //index of the darkest contrasting shade of another color
           },
           ...
         ],
         "aa": [ ... ]         //if bold text < 14pt, or text < 18pt
       },
       "colorColor": { ... }   //if neither the color nor its contrast are grey
     }
   */
      contrasts: {
        attribute: "contrasts",
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.colors = {
      grey: [
        "#ffffff",
        "#eeeeee",
        "#dddddd",
        "#cccccc",
        "#bbbbbb",
        "#999999",
        "#666666",
        "#444444",
        "#333333",
        "#222222",
        "#111111",
        "#000000",
      ],
      red: [
        "#ffdddd",
        "#ffaeae",
        "#ff8f8f",
        "#ff7474",
        "#fd5151",
        "#ff2222",
        "#ee0000",
        "#ac0000",
        "#850000",
        "#670000",
        "#520000",
        "#3f0000",
      ],
      pink: [
        "#ffe6f1",
        "#ffa5cf",
        "#ff87c0",
        "#ff73b5",
        "#fd60aa",
        "#ff3996",
        "#da004e",
        "#b80042",
        "#980036",
        "#78002b",
        "#5a0020",
        "#440019",
      ],
      purple: [
        "#fce6ff",
        "#f4affd",
        "#f394ff",
        "#f07cff",
        "#ed61ff",
        "#e200ff",
        "#a500ba",
        "#8a009b",
        "#6c0079",
        "#490052",
        "#33003a",
        "#200025",
      ],
      "deep-purple": [
        "#f3e4ff",
        "#ddacff",
        "#c97eff",
        "#bb63f9",
        "#b44aff",
        "#a931ff",
        "#7e00d8",
        "#5d009f",
        "#4c0081",
        "#3a0063",
        "#2a0049",
        "#1d0033",
      ],
      indigo: [
        "#e5ddff",
        "#c3b2ff",
        "#af97ff",
        "#9e82ff",
        "#9373ff",
        "#835fff",
        "#3a00ff",
        "#2801b0",
        "#20008c",
        "#160063",
        "#100049",
        "#0a0030",
      ],
      blue: [
        "#e2ecff",
        "#acc9ff",
        "#95baff",
        "#74a5ff",
        "#5892fd",
        "#4083ff",
        "#0059ff",
        "#0041bb",
        "#003494",
        "#002569",
        "#001947",
        "#001333",
      ],
      "light-blue": [
        "#cde8ff",
        "#a1d1ff",
        "#92c9ff",
        "#65b3ff",
        "#58adff",
        "#41a1ff",
        "#007ffc",
        "#0066ca",
        "#0055a8",
        "#003f7d",
        "#002850",
        "#001b36",
      ],
      cyan: [
        "#ddf8ff",
        "#9beaff",
        "#77e2ff",
        "#33d4ff",
        "#1ccfff",
        "#00c9ff",
        "#009dc7",
        "#007999",
        "#005970",
        "#003f50",
        "#002c38",
        "#001a20",
      ],
      teal: [
        "#d9fff0",
        "#98ffd7",
        "#79ffcb",
        "#56ffbd",
        "#29ffac",
        "#00ff9c",
        "#009d75",
        "#007658",
        "#004e3a",
        "#003829",
        "#002a20",
        "#001b14",
      ],
      green: [
        "#e1ffeb",
        "#acffc9",
        "#79ffa7",
        "#49ff88",
        "#24ff70",
        "#00f961",
        "#008c37",
        "#00762e",
        "#005a23",
        "#003d18",
        "#002a11",
        "#001d0c",
      ],
      "light-green": [
        "#ebffdb",
        "#c7ff9b",
        "#b1ff75",
        "#a1fd5a",
        "#8efd38",
        "#6fff00",
        "#429d00",
        "#357f00",
        "#296100",
        "#1b3f00",
        "#143000",
        "#0d2000",
      ],
      lime: [
        "#f1ffd2",
        "#dfff9b",
        "#d4ff77",
        "#caff58",
        "#bdff2d",
        "#aeff00",
        "#649900",
        "#4d7600",
        "#3b5a00",
        "#293f00",
        "#223400",
        "#182400",
      ],
      yellow: [
        "#ffffd5",
        "#ffffac",
        "#ffff90",
        "#ffff7c",
        "#ffff3a",
        "#f6f600",
        "#929100",
        "#787700",
        "#585700",
        "#454400",
        "#303000",
        "#242400",
      ],
      amber: [
        "#fff2d4",
        "#ffdf92",
        "#ffd677",
        "#ffcf5e",
        "#ffc235",
        "#ffc500",
        "#b28900",
        "#876800",
        "#614b00",
        "#413200",
        "#302500",
        "#221a00",
      ],
      orange: [
        "#ffebd7",
        "#ffca92",
        "#ffbd75",
        "#ffb05c",
        "#ff9e36",
        "#ff9625",
        "#e56a00",
        "#ae5100",
        "#833d00",
        "#612d00",
        "#3d1c00",
        "#2c1400",
      ],
      "deep-orange": [
        "#ffe7e0",
        "#ffb299",
        "#ffa588",
        "#ff8a64",
        "#ff7649",
        "#ff6c3c",
        "#f53100",
        "#b92500",
        "#8a1c00",
        "#561100",
        "#3a0c00",
        "#240700",
      ],
      brown: [
        "#f0e2de",
        "#e5b8aa",
        "#c59485",
        "#b68373",
        "#ac7868",
        "#a47060",
        "#85574a",
        "#724539",
        "#5b3328",
        "#3b1e15",
        "#2c140e",
        "#200e09",
      ],
      "blue-grey": [
        "#e7eff1",
        "#b1c5ce",
        "#9badb6",
        "#8d9fa7",
        "#7a8f98",
        "#718892",
        "#56707c",
        "#40535b",
        "#2f3e45",
        "#1e282c",
        "#182023",
        "#0f1518",
      ],
    };
    this.contrasts = {
      greyColor: {
        aaLarge: [
          { min: 7, max: 12 },
          { min: 7, max: 12 },
          { min: 7, max: 12 },
          { min: 7, max: 12 },
          { min: 8, max: 12 },
          { min: 10, max: 12 },
          { min: 1, max: 3 },
          { min: 1, max: 5 },
          { min: 1, max: 6 },
          { min: 1, max: 6 },
          { min: 1, max: 6 },
          { min: 1, max: 6 },
        ],
        aa: [
          //if bold text < 14pt, or text < 18pt
          { min: 7, max: 12 },
          { min: 7, max: 12 },
          { min: 7, max: 12 },
          { min: 8, max: 12 },
          { min: 8, max: 12 },
          { min: 11, max: 12 },
          { min: 1, max: 2 },
          { min: 1, max: 7 },
          { min: 1, max: 7 },
          { min: 1, max: 6 },
          { min: 1, max: 6 },
          { min: 1, max: 6 },
        ],
      },
      colorColor: {
        //if neither the color nor its contrast are grey
        aaLarge: [
          { min: 7, max: 12 },
          { min: 7, max: 12 },
          { min: 8, max: 12 },
          { min: 9, max: 12 },
          { min: 10, max: 12 },
          { min: 11, max: 12 },
          { min: 1, max: 2 },
          { min: 1, max: 3 },
          { min: 1, max: 4 },
          { min: 1, max: 5 },
          { min: 1, max: 6 },
          { min: 1, max: 6 },
        ],
        aa: [
          { min: 8, max: 12 },
          { min: 8, max: 12 },
          { min: 9, max: 12 },
          { min: 9, max: 12 },
          { min: 11, max: 12 },
          { min: 12, max: 12 },
          { min: 1, max: 1 },
          { min: 1, max: 2 },
          { min: 1, max: 4 },
          { min: 1, max: 4 },
          { min: 1, max: 5 },
          { min: 1, max: 5 },
        ],
      },
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "simple-colors-shared-styles";
  }

  /**
   * gets the color information of a given CSS variable or class
   *
   * @param {string} the CSS variable (eg. `--simple-colors-fixed-theme-red-3`)
   * @param {object} an object that includes the theme, color, and shade information
   */
  getColorInfo(colorName) {
    let temp1 = colorName
        .replace(/(simple-colors-)?(-text)?(-border)?/g, "")
        .split("-theme-"),
      theme = temp1.length > 0 ? temp1[0] : "default",
      temp2 = temp1.length > 0 ? temp1[1].split("-") : temp1[0].split("-"),
      color =
        temp2.length > 1 ? temp2.slice(1, temp2.length - 1).join("-") : "grey",
      shade = temp2.length > 1 ? temp2[temp2.length - 1] : "1";
    return {
      theme: theme,
      color: color,
      shade: shade,
    };
  }
  /**
   * returns a variable based on color name, shade, and fixed theme
   *
   * @param {string} the color name
   * @param {number} the color shade
   * @param {boolean} the color shade
   * @returns {string} the CSS Variable
   */
  makeVariable(color = "grey", shade = 1, theme = "default") {
    return ["--simple-colors", theme, "theme", color, shade].join("-");
  }
  /**
   * for large or small text given a color and its shade,
   * lists all the shades of another color that would be
   * WCAG 2.0 AA-compliant for contrast
   *
   * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
   * @param {string} color name, e.g. "deep-purple"
   * @param {string} color shade, e.g. 3
   * @param {string} contrasting color name, e.g. "grey"
   * @param {array} all of the WCAG 2.0 AA-compliant shades of the contrasting color
   */
  getContrastingShades(isLarge, colorName, colorShade, contrastName) {
    let hasGrey =
        colorName === "grey" || contrastName === "grey"
          ? "greyColor"
          : "colorColor",
      aa = isLarge ? "aaLarge" : "aa",
      index = parseInt(colorShade),
      range = this.contrasts[hasGrey][aa][index];
    return Array(range.max - range.min + 1)
      .fill()
      .map((_, idx) => range.min + idx);
  }

  /**
   * for large or small text given a color and its shade,
   * lists all the colors and shades that would be
   * WCAG 2.0 AA-compliant for contrast
   *
   * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
   * @param {string} color name, e.g. "deep-purple"
   * @param {string} color shade, e.g. 3
   * @param {object} all of the WCAG 2.0 AA-compliant colors and shades
   */
  getContrastingColors(colorName, colorShade, isLarge) {
    let result = {};
    Object.keys(this.colors).forEach((color) => {
      result[color] = this.getContrastingShades(
        isLarge,
        colorName,
        colorShade,
        color,
      );
    });
    return result;
  }
  /**
   * determines if two shades are WCAG 2.0 AA-compliant for contrast
   *
   * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
   * @param {string} color name, e.g. "deep-purple"
   * @param {string} color shade, e.g. 3
   * @param {string} contrasting color name, e.g. "grey"
   * @param {string} contrast shade, e.g. 12
   * @param {boolean} whether or not the contrasting shade is WCAG 2.0 AA-compliant
   */
  isContrastCompliant(
    isLarge,
    colorName,
    colorShade,
    contrastName,
    contrastShade,
  ) {
    let hasGrey =
        colorName === "grey" || contrastName === "grey"
          ? "greyColor"
          : "colorColor",
      aa = isLarge ? "aaLarge" : "aa",
      index = parseInt(colorShade) + 1,
      range = this.contrasts[hasGrey][aa][index];
    return contrastShade >= range.min && ontrastShade >= range.max;
  }

  /**
   * gets the current shade based on the index
   *
   * @param {string} the index
   * @param {number} the shade
   */
  indexToShade(index) {
    return parseInt(index) + 1;
  }

  /**
   * gets the current shade based on the index
   *
   * @param {string} the shade
   * @param {number} the index
   */
  shadeToIndex(shade) {
    return parseInt(shade) - 1;
  }
};
globalThis.customElements.define(
  SimpleColorsSharedStyles$1.tag,
  SimpleColorsSharedStyles$1,
);
/**
 * Checks to see if there is an instance available, and if not appends one
 */
globalThis.SimpleColorsSharedStyles.requestAvailability = () => {
  if (globalThis.SimpleColorsSharedStyles.instance == null) {
    globalThis.SimpleColorsSharedStyles.instance =
      globalThis.document.createElement("simple-colors-shared-styles");
    globalThis.SimpleColorsSharedStyles.colors =
      globalThis.SimpleColorsSharedStyles.instance.colors;
    globalThis.SimpleColorsSharedStyles.contrasts =
      globalThis.SimpleColorsSharedStyles.instance.contrasts;
    globalThis.SimpleColorsSharedStyles.stylesheet =
      globalThis.document.createElement("style");
    globalThis.SimpleColorsSharedStyles.stylesheet.innerHTML = `${SimpleColorsSharedStyles$1.styles[0].cssText}`;
    globalThis.document.head.appendChild(
      globalThis.SimpleColorsSharedStyles.stylesheet,
    );
  }
  return globalThis.SimpleColorsSharedStyles.instance;
};
const SimpleColorsSharedStylesGlobal$1 =
  typeof global !== "undefined"
    ? new SimpleColorsSharedStyles$1()
    : globalThis.SimpleColorsSharedStyles.requestAvailability();

/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
const SimpleColorsSuper$1 = function (SuperClass) {
  return class extends SuperClass {
    //styles function
    static get styles() {
      let styles = i$7("");
      if (super.styles) {
        styles = super.styles;
      }
      return [
        styles,
        i$7`
          :host([dark]) {
            --simple-colors-default-theme-accent-1: #000000;
            --simple-colors-default-theme-accent-2: #111111;
            --simple-colors-default-theme-accent-3: #222222;
            --simple-colors-default-theme-accent-4: #333333;
            --simple-colors-default-theme-accent-5: #444444;
            --simple-colors-default-theme-accent-6: #666666;
            --simple-colors-default-theme-accent-7: #999999;
            --simple-colors-default-theme-accent-8: #bbbbbb;
            --simple-colors-default-theme-accent-9: #cccccc;
            --simple-colors-default-theme-accent-10: #dddddd;
            --simple-colors-default-theme-accent-11: #eeeeee;
            --simple-colors-default-theme-accent-12: #ffffff;

            --simple-colors-default-theme-grey-1: #000000;
            --simple-colors-default-theme-grey-2: #111111;
            --simple-colors-default-theme-grey-3: #222222;
            --simple-colors-default-theme-grey-4: #333333;
            --simple-colors-default-theme-grey-5: #444444;
            --simple-colors-default-theme-grey-6: #666666;
            --simple-colors-default-theme-grey-7: #999999;
            --simple-colors-default-theme-grey-8: #bbbbbb;
            --simple-colors-default-theme-grey-9: #cccccc;
            --simple-colors-default-theme-grey-10: #dddddd;
            --simple-colors-default-theme-grey-11: #eeeeee;
            --simple-colors-default-theme-grey-12: #ffffff;

            --simple-colors-default-theme-red-1: #3f0000;
            --simple-colors-default-theme-red-2: #520000;
            --simple-colors-default-theme-red-3: #670000;
            --simple-colors-default-theme-red-4: #850000;
            --simple-colors-default-theme-red-5: #ac0000;
            --simple-colors-default-theme-red-6: #ee0000;
            --simple-colors-default-theme-red-7: #ff2222;
            --simple-colors-default-theme-red-8: #fd5151;
            --simple-colors-default-theme-red-9: #ff7474;
            --simple-colors-default-theme-red-10: #ff8f8f;
            --simple-colors-default-theme-red-11: #ffaeae;
            --simple-colors-default-theme-red-12: #ffdddd;

            --simple-colors-default-theme-pink-1: #440019;
            --simple-colors-default-theme-pink-2: #5a0020;
            --simple-colors-default-theme-pink-3: #78002b;
            --simple-colors-default-theme-pink-4: #980036;
            --simple-colors-default-theme-pink-5: #b80042;
            --simple-colors-default-theme-pink-6: #da004e;
            --simple-colors-default-theme-pink-7: #ff3996;
            --simple-colors-default-theme-pink-8: #fd60aa;
            --simple-colors-default-theme-pink-9: #ff73b5;
            --simple-colors-default-theme-pink-10: #ff87c0;
            --simple-colors-default-theme-pink-11: #ffa5cf;
            --simple-colors-default-theme-pink-12: #ffe6f1;

            --simple-colors-default-theme-purple-1: #200025;
            --simple-colors-default-theme-purple-2: #33003a;
            --simple-colors-default-theme-purple-3: #490052;
            --simple-colors-default-theme-purple-4: #6c0079;
            --simple-colors-default-theme-purple-5: #8a009b;
            --simple-colors-default-theme-purple-6: #a500ba;
            --simple-colors-default-theme-purple-7: #e200ff;
            --simple-colors-default-theme-purple-8: #ed61ff;
            --simple-colors-default-theme-purple-9: #f07cff;
            --simple-colors-default-theme-purple-10: #f394ff;
            --simple-colors-default-theme-purple-11: #f4affd;
            --simple-colors-default-theme-purple-12: #fce6ff;

            --simple-colors-default-theme-deep-purple-1: #1d0033;
            --simple-colors-default-theme-deep-purple-2: #2a0049;
            --simple-colors-default-theme-deep-purple-3: #3a0063;
            --simple-colors-default-theme-deep-purple-4: #4c0081;
            --simple-colors-default-theme-deep-purple-5: #5d009f;
            --simple-colors-default-theme-deep-purple-6: #7e00d8;
            --simple-colors-default-theme-deep-purple-7: #a931ff;
            --simple-colors-default-theme-deep-purple-8: #b44aff;
            --simple-colors-default-theme-deep-purple-9: #bb63f9;
            --simple-colors-default-theme-deep-purple-10: #c97eff;
            --simple-colors-default-theme-deep-purple-11: #ddacff;
            --simple-colors-default-theme-deep-purple-12: #f3e4ff;

            --simple-colors-default-theme-indigo-1: #0a0030;
            --simple-colors-default-theme-indigo-2: #100049;
            --simple-colors-default-theme-indigo-3: #160063;
            --simple-colors-default-theme-indigo-4: #20008c;
            --simple-colors-default-theme-indigo-5: #2801b0;
            --simple-colors-default-theme-indigo-6: #3a00ff;
            --simple-colors-default-theme-indigo-7: #835fff;
            --simple-colors-default-theme-indigo-8: #9373ff;
            --simple-colors-default-theme-indigo-9: #9e82ff;
            --simple-colors-default-theme-indigo-10: #af97ff;
            --simple-colors-default-theme-indigo-11: #c3b2ff;
            --simple-colors-default-theme-indigo-12: #e5ddff;

            --simple-colors-default-theme-blue-1: #001333;
            --simple-colors-default-theme-blue-2: #001947;
            --simple-colors-default-theme-blue-3: #002569;
            --simple-colors-default-theme-blue-4: #003494;
            --simple-colors-default-theme-blue-5: #0041bb;
            --simple-colors-default-theme-blue-6: #0059ff;
            --simple-colors-default-theme-blue-7: #4083ff;
            --simple-colors-default-theme-blue-8: #5892fd;
            --simple-colors-default-theme-blue-9: #74a5ff;
            --simple-colors-default-theme-blue-10: #95baff;
            --simple-colors-default-theme-blue-11: #acc9ff;
            --simple-colors-default-theme-blue-12: #e2ecff;

            --simple-colors-default-theme-light-blue-1: #001b36;
            --simple-colors-default-theme-light-blue-2: #002850;
            --simple-colors-default-theme-light-blue-3: #003f7d;
            --simple-colors-default-theme-light-blue-4: #0055a8;
            --simple-colors-default-theme-light-blue-5: #0066ca;
            --simple-colors-default-theme-light-blue-6: #007ffc;
            --simple-colors-default-theme-light-blue-7: #41a1ff;
            --simple-colors-default-theme-light-blue-8: #58adff;
            --simple-colors-default-theme-light-blue-9: #65b3ff;
            --simple-colors-default-theme-light-blue-10: #92c9ff;
            --simple-colors-default-theme-light-blue-11: #a1d1ff;
            --simple-colors-default-theme-light-blue-12: #cde8ff;

            --simple-colors-default-theme-cyan-1: #001a20;
            --simple-colors-default-theme-cyan-2: #002c38;
            --simple-colors-default-theme-cyan-3: #003f50;
            --simple-colors-default-theme-cyan-4: #005970;
            --simple-colors-default-theme-cyan-5: #007999;
            --simple-colors-default-theme-cyan-6: #009dc7;
            --simple-colors-default-theme-cyan-7: #00c9ff;
            --simple-colors-default-theme-cyan-8: #1ccfff;
            --simple-colors-default-theme-cyan-9: #33d4ff;
            --simple-colors-default-theme-cyan-10: #77e2ff;
            --simple-colors-default-theme-cyan-11: #9beaff;
            --simple-colors-default-theme-cyan-12: #ddf8ff;

            --simple-colors-default-theme-teal-1: #001b14;
            --simple-colors-default-theme-teal-2: #002a20;
            --simple-colors-default-theme-teal-3: #003829;
            --simple-colors-default-theme-teal-4: #004e3a;
            --simple-colors-default-theme-teal-5: #007658;
            --simple-colors-default-theme-teal-6: #009d75;
            --simple-colors-default-theme-teal-7: #00ff9c;
            --simple-colors-default-theme-teal-8: #29ffac;
            --simple-colors-default-theme-teal-9: #56ffbd;
            --simple-colors-default-theme-teal-10: #79ffcb;
            --simple-colors-default-theme-teal-11: #98ffd7;
            --simple-colors-default-theme-teal-12: #d9fff0;

            --simple-colors-default-theme-green-1: #001d0c;
            --simple-colors-default-theme-green-2: #002a11;
            --simple-colors-default-theme-green-3: #003d18;
            --simple-colors-default-theme-green-4: #005a23;
            --simple-colors-default-theme-green-5: #00762e;
            --simple-colors-default-theme-green-6: #008c37;
            --simple-colors-default-theme-green-7: #00f961;
            --simple-colors-default-theme-green-8: #24ff70;
            --simple-colors-default-theme-green-9: #49ff88;
            --simple-colors-default-theme-green-10: #79ffa7;
            --simple-colors-default-theme-green-11: #acffc9;
            --simple-colors-default-theme-green-12: #e1ffeb;

            --simple-colors-default-theme-light-green-1: #0d2000;
            --simple-colors-default-theme-light-green-2: #143000;
            --simple-colors-default-theme-light-green-3: #1b3f00;
            --simple-colors-default-theme-light-green-4: #296100;
            --simple-colors-default-theme-light-green-5: #357f00;
            --simple-colors-default-theme-light-green-6: #429d00;
            --simple-colors-default-theme-light-green-7: #6fff00;
            --simple-colors-default-theme-light-green-8: #8efd38;
            --simple-colors-default-theme-light-green-9: #a1fd5a;
            --simple-colors-default-theme-light-green-10: #b1ff75;
            --simple-colors-default-theme-light-green-11: #c7ff9b;
            --simple-colors-default-theme-light-green-12: #ebffdb;

            --simple-colors-default-theme-lime-1: #182400;
            --simple-colors-default-theme-lime-2: #223400;
            --simple-colors-default-theme-lime-3: #293f00;
            --simple-colors-default-theme-lime-4: #3b5a00;
            --simple-colors-default-theme-lime-5: #4d7600;
            --simple-colors-default-theme-lime-6: #649900;
            --simple-colors-default-theme-lime-7: #aeff00;
            --simple-colors-default-theme-lime-8: #bdff2d;
            --simple-colors-default-theme-lime-9: #caff58;
            --simple-colors-default-theme-lime-10: #d4ff77;
            --simple-colors-default-theme-lime-11: #dfff9b;
            --simple-colors-default-theme-lime-12: #f1ffd2;

            --simple-colors-default-theme-yellow-1: #242400;
            --simple-colors-default-theme-yellow-2: #303000;
            --simple-colors-default-theme-yellow-3: #454400;
            --simple-colors-default-theme-yellow-4: #585700;
            --simple-colors-default-theme-yellow-5: #787700;
            --simple-colors-default-theme-yellow-6: #929100;
            --simple-colors-default-theme-yellow-7: #f6f600;
            --simple-colors-default-theme-yellow-8: #ffff3a;
            --simple-colors-default-theme-yellow-9: #ffff7c;
            --simple-colors-default-theme-yellow-10: #ffff90;
            --simple-colors-default-theme-yellow-11: #ffffac;
            --simple-colors-default-theme-yellow-12: #ffffd5;

            --simple-colors-default-theme-amber-1: #221a00;
            --simple-colors-default-theme-amber-2: #302500;
            --simple-colors-default-theme-amber-3: #413200;
            --simple-colors-default-theme-amber-4: #614b00;
            --simple-colors-default-theme-amber-5: #876800;
            --simple-colors-default-theme-amber-6: #b28900;
            --simple-colors-default-theme-amber-7: #ffc500;
            --simple-colors-default-theme-amber-8: #ffc235;
            --simple-colors-default-theme-amber-9: #ffcf5e;
            --simple-colors-default-theme-amber-10: #ffd677;
            --simple-colors-default-theme-amber-11: #ffdf92;
            --simple-colors-default-theme-amber-12: #fff2d4;

            --simple-colors-default-theme-orange-1: #2c1400;
            --simple-colors-default-theme-orange-2: #3d1c00;
            --simple-colors-default-theme-orange-3: #612d00;
            --simple-colors-default-theme-orange-4: #833d00;
            --simple-colors-default-theme-orange-5: #ae5100;
            --simple-colors-default-theme-orange-6: #e56a00;
            --simple-colors-default-theme-orange-7: #ff9625;
            --simple-colors-default-theme-orange-8: #ff9e36;
            --simple-colors-default-theme-orange-9: #ffb05c;
            --simple-colors-default-theme-orange-10: #ffbd75;
            --simple-colors-default-theme-orange-11: #ffca92;
            --simple-colors-default-theme-orange-12: #ffebd7;

            --simple-colors-default-theme-deep-orange-1: #240700;
            --simple-colors-default-theme-deep-orange-2: #3a0c00;
            --simple-colors-default-theme-deep-orange-3: #561100;
            --simple-colors-default-theme-deep-orange-4: #8a1c00;
            --simple-colors-default-theme-deep-orange-5: #b92500;
            --simple-colors-default-theme-deep-orange-6: #f53100;
            --simple-colors-default-theme-deep-orange-7: #ff6c3c;
            --simple-colors-default-theme-deep-orange-8: #ff7649;
            --simple-colors-default-theme-deep-orange-9: #ff8a64;
            --simple-colors-default-theme-deep-orange-10: #ffa588;
            --simple-colors-default-theme-deep-orange-11: #ffb299;
            --simple-colors-default-theme-deep-orange-12: #ffe7e0;

            --simple-colors-default-theme-brown-1: #200e09;
            --simple-colors-default-theme-brown-2: #2c140e;
            --simple-colors-default-theme-brown-3: #3b1e15;
            --simple-colors-default-theme-brown-4: #5b3328;
            --simple-colors-default-theme-brown-5: #724539;
            --simple-colors-default-theme-brown-6: #85574a;
            --simple-colors-default-theme-brown-7: #a47060;
            --simple-colors-default-theme-brown-8: #ac7868;
            --simple-colors-default-theme-brown-9: #b68373;
            --simple-colors-default-theme-brown-10: #c59485;
            --simple-colors-default-theme-brown-11: #e5b8aa;
            --simple-colors-default-theme-brown-12: #f0e2de;

            --simple-colors-default-theme-blue-grey-1: #0f1518;
            --simple-colors-default-theme-blue-grey-2: #182023;
            --simple-colors-default-theme-blue-grey-3: #1e282c;
            --simple-colors-default-theme-blue-grey-4: #2f3e45;
            --simple-colors-default-theme-blue-grey-5: #40535b;
            --simple-colors-default-theme-blue-grey-6: #56707c;
            --simple-colors-default-theme-blue-grey-7: #718892;
            --simple-colors-default-theme-blue-grey-8: #7a8f98;
            --simple-colors-default-theme-blue-grey-9: #8d9fa7;
            --simple-colors-default-theme-blue-grey-10: #9badb6;
            --simple-colors-default-theme-blue-grey-11: #b1c5ce;
            --simple-colors-default-theme-blue-grey-12: #e7eff1;
          }

          :host {
            accent-color: var(--simple-colors-default-theme-accent-7);
          }

          :host([accent-color="grey"]) {
            --simple-colors-default-theme-accent-1: #ffffff;
            --simple-colors-default-theme-accent-2: #eeeeee;
            --simple-colors-default-theme-accent-3: #dddddd;
            --simple-colors-default-theme-accent-4: #cccccc;
            --simple-colors-default-theme-accent-5: #bbbbbb;
            --simple-colors-default-theme-accent-6: #999999;
            --simple-colors-default-theme-accent-7: #666666;
            --simple-colors-default-theme-accent-8: #444444;
            --simple-colors-default-theme-accent-9: #333333;
            --simple-colors-default-theme-accent-10: #222222;
            --simple-colors-default-theme-accent-11: #111111;
            --simple-colors-default-theme-accent-12: #000000;
            --simple-colors-fixed-theme-accent-1: #ffffff;
            --simple-colors-fixed-theme-accent-2: #eeeeee;
            --simple-colors-fixed-theme-accent-3: #dddddd;
            --simple-colors-fixed-theme-accent-4: #cccccc;
            --simple-colors-fixed-theme-accent-5: #bbbbbb;
            --simple-colors-fixed-theme-accent-6: #999999;
            --simple-colors-fixed-theme-accent-7: #666666;
            --simple-colors-fixed-theme-accent-8: #444444;
            --simple-colors-fixed-theme-accent-9: #333333;
            --simple-colors-fixed-theme-accent-10: #222222;
            --simple-colors-fixed-theme-accent-11: #111111;
            --simple-colors-fixed-theme-accent-12: #000000;
          }

          :host([dark][accent-color="grey"]) {
            --simple-colors-default-theme-accent-1: #000000;
            --simple-colors-default-theme-accent-2: #111111;
            --simple-colors-default-theme-accent-3: #222222;
            --simple-colors-default-theme-accent-4: #333333;
            --simple-colors-default-theme-accent-5: #444444;
            --simple-colors-default-theme-accent-6: #666666;
            --simple-colors-default-theme-accent-7: #999999;
            --simple-colors-default-theme-accent-8: #bbbbbb;
            --simple-colors-default-theme-accent-9: #cccccc;
            --simple-colors-default-theme-accent-10: #dddddd;
            --simple-colors-default-theme-accent-11: #eeeeee;
            --simple-colors-default-theme-accent-12: #ffffff;
          }

          :host([accent-color="red"]) {
            --simple-colors-default-theme-accent-1: #ffdddd;
            --simple-colors-default-theme-accent-2: #ffaeae;
            --simple-colors-default-theme-accent-3: #ff8f8f;
            --simple-colors-default-theme-accent-4: #ff7474;
            --simple-colors-default-theme-accent-5: #fd5151;
            --simple-colors-default-theme-accent-6: #ff2222;
            --simple-colors-default-theme-accent-7: #ee0000;
            --simple-colors-default-theme-accent-8: #ac0000;
            --simple-colors-default-theme-accent-9: #850000;
            --simple-colors-default-theme-accent-10: #670000;
            --simple-colors-default-theme-accent-11: #520000;
            --simple-colors-default-theme-accent-12: #3f0000;
            --simple-colors-fixed-theme-accent-1: #ffdddd;
            --simple-colors-fixed-theme-accent-2: #ffaeae;
            --simple-colors-fixed-theme-accent-3: #ff8f8f;
            --simple-colors-fixed-theme-accent-4: #ff7474;
            --simple-colors-fixed-theme-accent-5: #fd5151;
            --simple-colors-fixed-theme-accent-6: #ff2222;
            --simple-colors-fixed-theme-accent-7: #ee0000;
            --simple-colors-fixed-theme-accent-8: #ac0000;
            --simple-colors-fixed-theme-accent-9: #850000;
            --simple-colors-fixed-theme-accent-10: #670000;
            --simple-colors-fixed-theme-accent-11: #520000;
            --simple-colors-fixed-theme-accent-12: #3f0000;
          }

          :host([dark][accent-color="red"]) {
            --simple-colors-default-theme-accent-1: #3f0000;
            --simple-colors-default-theme-accent-2: #520000;
            --simple-colors-default-theme-accent-3: #670000;
            --simple-colors-default-theme-accent-4: #850000;
            --simple-colors-default-theme-accent-5: #ac0000;
            --simple-colors-default-theme-accent-6: #ee0000;
            --simple-colors-default-theme-accent-7: #ff2222;
            --simple-colors-default-theme-accent-8: #fd5151;
            --simple-colors-default-theme-accent-9: #ff7474;
            --simple-colors-default-theme-accent-10: #ff8f8f;
            --simple-colors-default-theme-accent-11: #ffaeae;
            --simple-colors-default-theme-accent-12: #ffdddd;
          }

          :host([accent-color="pink"]) {
            --simple-colors-default-theme-accent-1: #ffe6f1;
            --simple-colors-default-theme-accent-2: #ffa5cf;
            --simple-colors-default-theme-accent-3: #ff87c0;
            --simple-colors-default-theme-accent-4: #ff73b5;
            --simple-colors-default-theme-accent-5: #fd60aa;
            --simple-colors-default-theme-accent-6: #ff3996;
            --simple-colors-default-theme-accent-7: #da004e;
            --simple-colors-default-theme-accent-8: #b80042;
            --simple-colors-default-theme-accent-9: #980036;
            --simple-colors-default-theme-accent-10: #78002b;
            --simple-colors-default-theme-accent-11: #5a0020;
            --simple-colors-default-theme-accent-12: #440019;
            --simple-colors-fixed-theme-accent-1: #ffe6f1;
            --simple-colors-fixed-theme-accent-2: #ffa5cf;
            --simple-colors-fixed-theme-accent-3: #ff87c0;
            --simple-colors-fixed-theme-accent-4: #ff73b5;
            --simple-colors-fixed-theme-accent-5: #fd60aa;
            --simple-colors-fixed-theme-accent-6: #ff3996;
            --simple-colors-fixed-theme-accent-7: #da004e;
            --simple-colors-fixed-theme-accent-8: #b80042;
            --simple-colors-fixed-theme-accent-9: #980036;
            --simple-colors-fixed-theme-accent-10: #78002b;
            --simple-colors-fixed-theme-accent-11: #5a0020;
            --simple-colors-fixed-theme-accent-12: #440019;
          }

          :host([dark][accent-color="pink"]) {
            --simple-colors-default-theme-accent-1: #440019;
            --simple-colors-default-theme-accent-2: #5a0020;
            --simple-colors-default-theme-accent-3: #78002b;
            --simple-colors-default-theme-accent-4: #980036;
            --simple-colors-default-theme-accent-5: #b80042;
            --simple-colors-default-theme-accent-6: #da004e;
            --simple-colors-default-theme-accent-7: #ff3996;
            --simple-colors-default-theme-accent-8: #fd60aa;
            --simple-colors-default-theme-accent-9: #ff73b5;
            --simple-colors-default-theme-accent-10: #ff87c0;
            --simple-colors-default-theme-accent-11: #ffa5cf;
            --simple-colors-default-theme-accent-12: #ffe6f1;
          }

          :host([accent-color="purple"]) {
            --simple-colors-default-theme-accent-1: #fce6ff;
            --simple-colors-default-theme-accent-2: #f4affd;
            --simple-colors-default-theme-accent-3: #f394ff;
            --simple-colors-default-theme-accent-4: #f07cff;
            --simple-colors-default-theme-accent-5: #ed61ff;
            --simple-colors-default-theme-accent-6: #e200ff;
            --simple-colors-default-theme-accent-7: #a500ba;
            --simple-colors-default-theme-accent-8: #8a009b;
            --simple-colors-default-theme-accent-9: #6c0079;
            --simple-colors-default-theme-accent-10: #490052;
            --simple-colors-default-theme-accent-11: #33003a;
            --simple-colors-default-theme-accent-12: #200025;
            --simple-colors-fixed-theme-accent-1: #fce6ff;
            --simple-colors-fixed-theme-accent-2: #f4affd;
            --simple-colors-fixed-theme-accent-3: #f394ff;
            --simple-colors-fixed-theme-accent-4: #f07cff;
            --simple-colors-fixed-theme-accent-5: #ed61ff;
            --simple-colors-fixed-theme-accent-6: #e200ff;
            --simple-colors-fixed-theme-accent-7: #a500ba;
            --simple-colors-fixed-theme-accent-8: #8a009b;
            --simple-colors-fixed-theme-accent-9: #6c0079;
            --simple-colors-fixed-theme-accent-10: #490052;
            --simple-colors-fixed-theme-accent-11: #33003a;
            --simple-colors-fixed-theme-accent-12: #200025;
          }

          :host([dark][accent-color="purple"]) {
            --simple-colors-default-theme-accent-1: #200025;
            --simple-colors-default-theme-accent-2: #33003a;
            --simple-colors-default-theme-accent-3: #490052;
            --simple-colors-default-theme-accent-4: #6c0079;
            --simple-colors-default-theme-accent-5: #8a009b;
            --simple-colors-default-theme-accent-6: #a500ba;
            --simple-colors-default-theme-accent-7: #e200ff;
            --simple-colors-default-theme-accent-8: #ed61ff;
            --simple-colors-default-theme-accent-9: #f07cff;
            --simple-colors-default-theme-accent-10: #f394ff;
            --simple-colors-default-theme-accent-11: #f4affd;
            --simple-colors-default-theme-accent-12: #fce6ff;
          }

          :host([accent-color="deep-purple"]) {
            --simple-colors-default-theme-accent-1: #f3e4ff;
            --simple-colors-default-theme-accent-2: #ddacff;
            --simple-colors-default-theme-accent-3: #c97eff;
            --simple-colors-default-theme-accent-4: #bb63f9;
            --simple-colors-default-theme-accent-5: #b44aff;
            --simple-colors-default-theme-accent-6: #a931ff;
            --simple-colors-default-theme-accent-7: #7e00d8;
            --simple-colors-default-theme-accent-8: #5d009f;
            --simple-colors-default-theme-accent-9: #4c0081;
            --simple-colors-default-theme-accent-10: #3a0063;
            --simple-colors-default-theme-accent-11: #2a0049;
            --simple-colors-default-theme-accent-12: #1d0033;
            --simple-colors-fixed-theme-accent-1: #f3e4ff;
            --simple-colors-fixed-theme-accent-2: #ddacff;
            --simple-colors-fixed-theme-accent-3: #c97eff;
            --simple-colors-fixed-theme-accent-4: #bb63f9;
            --simple-colors-fixed-theme-accent-5: #b44aff;
            --simple-colors-fixed-theme-accent-6: #a931ff;
            --simple-colors-fixed-theme-accent-7: #7e00d8;
            --simple-colors-fixed-theme-accent-8: #5d009f;
            --simple-colors-fixed-theme-accent-9: #4c0081;
            --simple-colors-fixed-theme-accent-10: #3a0063;
            --simple-colors-fixed-theme-accent-11: #2a0049;
            --simple-colors-fixed-theme-accent-12: #1d0033;
          }

          :host([dark][accent-color="deep-purple"]) {
            --simple-colors-default-theme-accent-1: #1d0033;
            --simple-colors-default-theme-accent-2: #2a0049;
            --simple-colors-default-theme-accent-3: #3a0063;
            --simple-colors-default-theme-accent-4: #4c0081;
            --simple-colors-default-theme-accent-5: #5d009f;
            --simple-colors-default-theme-accent-6: #7e00d8;
            --simple-colors-default-theme-accent-7: #a931ff;
            --simple-colors-default-theme-accent-8: #b44aff;
            --simple-colors-default-theme-accent-9: #bb63f9;
            --simple-colors-default-theme-accent-10: #c97eff;
            --simple-colors-default-theme-accent-11: #ddacff;
            --simple-colors-default-theme-accent-12: #f3e4ff;
          }

          :host([accent-color="indigo"]) {
            --simple-colors-default-theme-accent-1: #e5ddff;
            --simple-colors-default-theme-accent-2: #c3b2ff;
            --simple-colors-default-theme-accent-3: #af97ff;
            --simple-colors-default-theme-accent-4: #9e82ff;
            --simple-colors-default-theme-accent-5: #9373ff;
            --simple-colors-default-theme-accent-6: #835fff;
            --simple-colors-default-theme-accent-7: #3a00ff;
            --simple-colors-default-theme-accent-8: #2801b0;
            --simple-colors-default-theme-accent-9: #20008c;
            --simple-colors-default-theme-accent-10: #160063;
            --simple-colors-default-theme-accent-11: #100049;
            --simple-colors-default-theme-accent-12: #0a0030;
            --simple-colors-fixed-theme-accent-1: #e5ddff;
            --simple-colors-fixed-theme-accent-2: #c3b2ff;
            --simple-colors-fixed-theme-accent-3: #af97ff;
            --simple-colors-fixed-theme-accent-4: #9e82ff;
            --simple-colors-fixed-theme-accent-5: #9373ff;
            --simple-colors-fixed-theme-accent-6: #835fff;
            --simple-colors-fixed-theme-accent-7: #3a00ff;
            --simple-colors-fixed-theme-accent-8: #2801b0;
            --simple-colors-fixed-theme-accent-9: #20008c;
            --simple-colors-fixed-theme-accent-10: #160063;
            --simple-colors-fixed-theme-accent-11: #100049;
            --simple-colors-fixed-theme-accent-12: #0a0030;
          }

          :host([dark][accent-color="indigo"]) {
            --simple-colors-default-theme-accent-1: #0a0030;
            --simple-colors-default-theme-accent-2: #100049;
            --simple-colors-default-theme-accent-3: #160063;
            --simple-colors-default-theme-accent-4: #20008c;
            --simple-colors-default-theme-accent-5: #2801b0;
            --simple-colors-default-theme-accent-6: #3a00ff;
            --simple-colors-default-theme-accent-7: #835fff;
            --simple-colors-default-theme-accent-8: #9373ff;
            --simple-colors-default-theme-accent-9: #9e82ff;
            --simple-colors-default-theme-accent-10: #af97ff;
            --simple-colors-default-theme-accent-11: #c3b2ff;
            --simple-colors-default-theme-accent-12: #e5ddff;
          }

          :host([accent-color="blue"]) {
            --simple-colors-default-theme-accent-1: #e2ecff;
            --simple-colors-default-theme-accent-2: #acc9ff;
            --simple-colors-default-theme-accent-3: #95baff;
            --simple-colors-default-theme-accent-4: #74a5ff;
            --simple-colors-default-theme-accent-5: #5892fd;
            --simple-colors-default-theme-accent-6: #4083ff;
            --simple-colors-default-theme-accent-7: #0059ff;
            --simple-colors-default-theme-accent-8: #0041bb;
            --simple-colors-default-theme-accent-9: #003494;
            --simple-colors-default-theme-accent-10: #002569;
            --simple-colors-default-theme-accent-11: #001947;
            --simple-colors-default-theme-accent-12: #001333;
            --simple-colors-fixed-theme-accent-1: #e2ecff;
            --simple-colors-fixed-theme-accent-2: #acc9ff;
            --simple-colors-fixed-theme-accent-3: #95baff;
            --simple-colors-fixed-theme-accent-4: #74a5ff;
            --simple-colors-fixed-theme-accent-5: #5892fd;
            --simple-colors-fixed-theme-accent-6: #4083ff;
            --simple-colors-fixed-theme-accent-7: #0059ff;
            --simple-colors-fixed-theme-accent-8: #0041bb;
            --simple-colors-fixed-theme-accent-9: #003494;
            --simple-colors-fixed-theme-accent-10: #002569;
            --simple-colors-fixed-theme-accent-11: #001947;
            --simple-colors-fixed-theme-accent-12: #001333;
          }

          :host([dark][accent-color="blue"]) {
            --simple-colors-default-theme-accent-1: #001333;
            --simple-colors-default-theme-accent-2: #001947;
            --simple-colors-default-theme-accent-3: #002569;
            --simple-colors-default-theme-accent-4: #003494;
            --simple-colors-default-theme-accent-5: #0041bb;
            --simple-colors-default-theme-accent-6: #0059ff;
            --simple-colors-default-theme-accent-7: #4083ff;
            --simple-colors-default-theme-accent-8: #5892fd;
            --simple-colors-default-theme-accent-9: #74a5ff;
            --simple-colors-default-theme-accent-10: #95baff;
            --simple-colors-default-theme-accent-11: #acc9ff;
            --simple-colors-default-theme-accent-12: #e2ecff;
          }

          :host([accent-color="light-blue"]) {
            --simple-colors-default-theme-accent-1: #cde8ff;
            --simple-colors-default-theme-accent-2: #a1d1ff;
            --simple-colors-default-theme-accent-3: #92c9ff;
            --simple-colors-default-theme-accent-4: #65b3ff;
            --simple-colors-default-theme-accent-5: #58adff;
            --simple-colors-default-theme-accent-6: #41a1ff;
            --simple-colors-default-theme-accent-7: #007ffc;
            --simple-colors-default-theme-accent-8: #0066ca;
            --simple-colors-default-theme-accent-9: #0055a8;
            --simple-colors-default-theme-accent-10: #003f7d;
            --simple-colors-default-theme-accent-11: #002850;
            --simple-colors-default-theme-accent-12: #001b36;
            --simple-colors-fixed-theme-accent-1: #cde8ff;
            --simple-colors-fixed-theme-accent-2: #a1d1ff;
            --simple-colors-fixed-theme-accent-3: #92c9ff;
            --simple-colors-fixed-theme-accent-4: #65b3ff;
            --simple-colors-fixed-theme-accent-5: #58adff;
            --simple-colors-fixed-theme-accent-6: #41a1ff;
            --simple-colors-fixed-theme-accent-7: #007ffc;
            --simple-colors-fixed-theme-accent-8: #0066ca;
            --simple-colors-fixed-theme-accent-9: #0055a8;
            --simple-colors-fixed-theme-accent-10: #003f7d;
            --simple-colors-fixed-theme-accent-11: #002850;
            --simple-colors-fixed-theme-accent-12: #001b36;
          }

          :host([dark][accent-color="light-blue"]) {
            --simple-colors-default-theme-accent-1: #001b36;
            --simple-colors-default-theme-accent-2: #002850;
            --simple-colors-default-theme-accent-3: #003f7d;
            --simple-colors-default-theme-accent-4: #0055a8;
            --simple-colors-default-theme-accent-5: #0066ca;
            --simple-colors-default-theme-accent-6: #007ffc;
            --simple-colors-default-theme-accent-7: #41a1ff;
            --simple-colors-default-theme-accent-8: #58adff;
            --simple-colors-default-theme-accent-9: #65b3ff;
            --simple-colors-default-theme-accent-10: #92c9ff;
            --simple-colors-default-theme-accent-11: #a1d1ff;
            --simple-colors-default-theme-accent-12: #cde8ff;
          }

          :host([accent-color="cyan"]) {
            --simple-colors-default-theme-accent-1: #ddf8ff;
            --simple-colors-default-theme-accent-2: #9beaff;
            --simple-colors-default-theme-accent-3: #77e2ff;
            --simple-colors-default-theme-accent-4: #33d4ff;
            --simple-colors-default-theme-accent-5: #1ccfff;
            --simple-colors-default-theme-accent-6: #00c9ff;
            --simple-colors-default-theme-accent-7: #009dc7;
            --simple-colors-default-theme-accent-8: #007999;
            --simple-colors-default-theme-accent-9: #005970;
            --simple-colors-default-theme-accent-10: #003f50;
            --simple-colors-default-theme-accent-11: #002c38;
            --simple-colors-default-theme-accent-12: #001a20;
            --simple-colors-fixed-theme-accent-1: #ddf8ff;
            --simple-colors-fixed-theme-accent-2: #9beaff;
            --simple-colors-fixed-theme-accent-3: #77e2ff;
            --simple-colors-fixed-theme-accent-4: #33d4ff;
            --simple-colors-fixed-theme-accent-5: #1ccfff;
            --simple-colors-fixed-theme-accent-6: #00c9ff;
            --simple-colors-fixed-theme-accent-7: #009dc7;
            --simple-colors-fixed-theme-accent-8: #007999;
            --simple-colors-fixed-theme-accent-9: #005970;
            --simple-colors-fixed-theme-accent-10: #003f50;
            --simple-colors-fixed-theme-accent-11: #002c38;
            --simple-colors-fixed-theme-accent-12: #001a20;
          }

          :host([dark][accent-color="cyan"]) {
            --simple-colors-default-theme-accent-1: #001a20;
            --simple-colors-default-theme-accent-2: #002c38;
            --simple-colors-default-theme-accent-3: #003f50;
            --simple-colors-default-theme-accent-4: #005970;
            --simple-colors-default-theme-accent-5: #007999;
            --simple-colors-default-theme-accent-6: #009dc7;
            --simple-colors-default-theme-accent-7: #00c9ff;
            --simple-colors-default-theme-accent-8: #1ccfff;
            --simple-colors-default-theme-accent-9: #33d4ff;
            --simple-colors-default-theme-accent-10: #77e2ff;
            --simple-colors-default-theme-accent-11: #9beaff;
            --simple-colors-default-theme-accent-12: #ddf8ff;
          }

          :host([accent-color="teal"]) {
            --simple-colors-default-theme-accent-1: #d9fff0;
            --simple-colors-default-theme-accent-2: #98ffd7;
            --simple-colors-default-theme-accent-3: #79ffcb;
            --simple-colors-default-theme-accent-4: #56ffbd;
            --simple-colors-default-theme-accent-5: #29ffac;
            --simple-colors-default-theme-accent-6: #00ff9c;
            --simple-colors-default-theme-accent-7: #009d75;
            --simple-colors-default-theme-accent-8: #007658;
            --simple-colors-default-theme-accent-9: #004e3a;
            --simple-colors-default-theme-accent-10: #003829;
            --simple-colors-default-theme-accent-11: #002a20;
            --simple-colors-default-theme-accent-12: #001b14;
            --simple-colors-fixed-theme-accent-1: #d9fff0;
            --simple-colors-fixed-theme-accent-2: #98ffd7;
            --simple-colors-fixed-theme-accent-3: #79ffcb;
            --simple-colors-fixed-theme-accent-4: #56ffbd;
            --simple-colors-fixed-theme-accent-5: #29ffac;
            --simple-colors-fixed-theme-accent-6: #00ff9c;
            --simple-colors-fixed-theme-accent-7: #009d75;
            --simple-colors-fixed-theme-accent-8: #007658;
            --simple-colors-fixed-theme-accent-9: #004e3a;
            --simple-colors-fixed-theme-accent-10: #003829;
            --simple-colors-fixed-theme-accent-11: #002a20;
            --simple-colors-fixed-theme-accent-12: #001b14;
          }

          :host([dark][accent-color="teal"]) {
            --simple-colors-default-theme-accent-1: #001b14;
            --simple-colors-default-theme-accent-2: #002a20;
            --simple-colors-default-theme-accent-3: #003829;
            --simple-colors-default-theme-accent-4: #004e3a;
            --simple-colors-default-theme-accent-5: #007658;
            --simple-colors-default-theme-accent-6: #009d75;
            --simple-colors-default-theme-accent-7: #00ff9c;
            --simple-colors-default-theme-accent-8: #29ffac;
            --simple-colors-default-theme-accent-9: #56ffbd;
            --simple-colors-default-theme-accent-10: #79ffcb;
            --simple-colors-default-theme-accent-11: #98ffd7;
            --simple-colors-default-theme-accent-12: #d9fff0;
          }

          :host([accent-color="green"]) {
            --simple-colors-default-theme-accent-1: #e1ffeb;
            --simple-colors-default-theme-accent-2: #acffc9;
            --simple-colors-default-theme-accent-3: #79ffa7;
            --simple-colors-default-theme-accent-4: #49ff88;
            --simple-colors-default-theme-accent-5: #24ff70;
            --simple-colors-default-theme-accent-6: #00f961;
            --simple-colors-default-theme-accent-7: #008c37;
            --simple-colors-default-theme-accent-8: #00762e;
            --simple-colors-default-theme-accent-9: #005a23;
            --simple-colors-default-theme-accent-10: #003d18;
            --simple-colors-default-theme-accent-11: #002a11;
            --simple-colors-default-theme-accent-12: #001d0c;
            --simple-colors-fixed-theme-accent-1: #e1ffeb;
            --simple-colors-fixed-theme-accent-2: #acffc9;
            --simple-colors-fixed-theme-accent-3: #79ffa7;
            --simple-colors-fixed-theme-accent-4: #49ff88;
            --simple-colors-fixed-theme-accent-5: #24ff70;
            --simple-colors-fixed-theme-accent-6: #00f961;
            --simple-colors-fixed-theme-accent-7: #008c37;
            --simple-colors-fixed-theme-accent-8: #00762e;
            --simple-colors-fixed-theme-accent-9: #005a23;
            --simple-colors-fixed-theme-accent-10: #003d18;
            --simple-colors-fixed-theme-accent-11: #002a11;
            --simple-colors-fixed-theme-accent-12: #001d0c;
          }

          :host([dark][accent-color="green"]) {
            --simple-colors-default-theme-accent-1: #001d0c;
            --simple-colors-default-theme-accent-2: #002a11;
            --simple-colors-default-theme-accent-3: #003d18;
            --simple-colors-default-theme-accent-4: #005a23;
            --simple-colors-default-theme-accent-5: #00762e;
            --simple-colors-default-theme-accent-6: #008c37;
            --simple-colors-default-theme-accent-7: #00f961;
            --simple-colors-default-theme-accent-8: #24ff70;
            --simple-colors-default-theme-accent-9: #49ff88;
            --simple-colors-default-theme-accent-10: #79ffa7;
            --simple-colors-default-theme-accent-11: #acffc9;
            --simple-colors-default-theme-accent-12: #e1ffeb;
          }

          :host([accent-color="light-green"]) {
            --simple-colors-default-theme-accent-1: #ebffdb;
            --simple-colors-default-theme-accent-2: #c7ff9b;
            --simple-colors-default-theme-accent-3: #b1ff75;
            --simple-colors-default-theme-accent-4: #a1fd5a;
            --simple-colors-default-theme-accent-5: #8efd38;
            --simple-colors-default-theme-accent-6: #6fff00;
            --simple-colors-default-theme-accent-7: #429d00;
            --simple-colors-default-theme-accent-8: #357f00;
            --simple-colors-default-theme-accent-9: #296100;
            --simple-colors-default-theme-accent-10: #1b3f00;
            --simple-colors-default-theme-accent-11: #143000;
            --simple-colors-default-theme-accent-12: #0d2000;
            --simple-colors-fixed-theme-accent-1: #ebffdb;
            --simple-colors-fixed-theme-accent-2: #c7ff9b;
            --simple-colors-fixed-theme-accent-3: #b1ff75;
            --simple-colors-fixed-theme-accent-4: #a1fd5a;
            --simple-colors-fixed-theme-accent-5: #8efd38;
            --simple-colors-fixed-theme-accent-6: #6fff00;
            --simple-colors-fixed-theme-accent-7: #429d00;
            --simple-colors-fixed-theme-accent-8: #357f00;
            --simple-colors-fixed-theme-accent-9: #296100;
            --simple-colors-fixed-theme-accent-10: #1b3f00;
            --simple-colors-fixed-theme-accent-11: #143000;
            --simple-colors-fixed-theme-accent-12: #0d2000;
          }

          :host([dark][accent-color="light-green"]) {
            --simple-colors-default-theme-accent-1: #0d2000;
            --simple-colors-default-theme-accent-2: #143000;
            --simple-colors-default-theme-accent-3: #1b3f00;
            --simple-colors-default-theme-accent-4: #296100;
            --simple-colors-default-theme-accent-5: #357f00;
            --simple-colors-default-theme-accent-6: #429d00;
            --simple-colors-default-theme-accent-7: #6fff00;
            --simple-colors-default-theme-accent-8: #8efd38;
            --simple-colors-default-theme-accent-9: #a1fd5a;
            --simple-colors-default-theme-accent-10: #b1ff75;
            --simple-colors-default-theme-accent-11: #c7ff9b;
            --simple-colors-default-theme-accent-12: #ebffdb;
          }

          :host([accent-color="lime"]) {
            --simple-colors-default-theme-accent-1: #f1ffd2;
            --simple-colors-default-theme-accent-2: #dfff9b;
            --simple-colors-default-theme-accent-3: #d4ff77;
            --simple-colors-default-theme-accent-4: #caff58;
            --simple-colors-default-theme-accent-5: #bdff2d;
            --simple-colors-default-theme-accent-6: #aeff00;
            --simple-colors-default-theme-accent-7: #649900;
            --simple-colors-default-theme-accent-8: #4d7600;
            --simple-colors-default-theme-accent-9: #3b5a00;
            --simple-colors-default-theme-accent-10: #293f00;
            --simple-colors-default-theme-accent-11: #223400;
            --simple-colors-default-theme-accent-12: #182400;
            --simple-colors-fixed-theme-accent-1: #f1ffd2;
            --simple-colors-fixed-theme-accent-2: #dfff9b;
            --simple-colors-fixed-theme-accent-3: #d4ff77;
            --simple-colors-fixed-theme-accent-4: #caff58;
            --simple-colors-fixed-theme-accent-5: #bdff2d;
            --simple-colors-fixed-theme-accent-6: #aeff00;
            --simple-colors-fixed-theme-accent-7: #649900;
            --simple-colors-fixed-theme-accent-8: #4d7600;
            --simple-colors-fixed-theme-accent-9: #3b5a00;
            --simple-colors-fixed-theme-accent-10: #293f00;
            --simple-colors-fixed-theme-accent-11: #223400;
            --simple-colors-fixed-theme-accent-12: #182400;
          }

          :host([dark][accent-color="lime"]) {
            --simple-colors-default-theme-accent-1: #182400;
            --simple-colors-default-theme-accent-2: #223400;
            --simple-colors-default-theme-accent-3: #293f00;
            --simple-colors-default-theme-accent-4: #3b5a00;
            --simple-colors-default-theme-accent-5: #4d7600;
            --simple-colors-default-theme-accent-6: #649900;
            --simple-colors-default-theme-accent-7: #aeff00;
            --simple-colors-default-theme-accent-8: #bdff2d;
            --simple-colors-default-theme-accent-9: #caff58;
            --simple-colors-default-theme-accent-10: #d4ff77;
            --simple-colors-default-theme-accent-11: #dfff9b;
            --simple-colors-default-theme-accent-12: #f1ffd2;
          }

          :host([accent-color="yellow"]) {
            --simple-colors-default-theme-accent-1: #ffffd5;
            --simple-colors-default-theme-accent-2: #ffffac;
            --simple-colors-default-theme-accent-3: #ffff90;
            --simple-colors-default-theme-accent-4: #ffff7c;
            --simple-colors-default-theme-accent-5: #ffff3a;
            --simple-colors-default-theme-accent-6: #f6f600;
            --simple-colors-default-theme-accent-7: #929100;
            --simple-colors-default-theme-accent-8: #787700;
            --simple-colors-default-theme-accent-9: #585700;
            --simple-colors-default-theme-accent-10: #454400;
            --simple-colors-default-theme-accent-11: #303000;
            --simple-colors-default-theme-accent-12: #242400;
            --simple-colors-fixed-theme-accent-1: #ffffd5;
            --simple-colors-fixed-theme-accent-2: #ffffac;
            --simple-colors-fixed-theme-accent-3: #ffff90;
            --simple-colors-fixed-theme-accent-4: #ffff7c;
            --simple-colors-fixed-theme-accent-5: #ffff3a;
            --simple-colors-fixed-theme-accent-6: #f6f600;
            --simple-colors-fixed-theme-accent-7: #929100;
            --simple-colors-fixed-theme-accent-8: #787700;
            --simple-colors-fixed-theme-accent-9: #585700;
            --simple-colors-fixed-theme-accent-10: #454400;
            --simple-colors-fixed-theme-accent-11: #303000;
            --simple-colors-fixed-theme-accent-12: #242400;
          }

          :host([dark][accent-color="yellow"]) {
            --simple-colors-default-theme-accent-1: #242400;
            --simple-colors-default-theme-accent-2: #303000;
            --simple-colors-default-theme-accent-3: #454400;
            --simple-colors-default-theme-accent-4: #585700;
            --simple-colors-default-theme-accent-5: #787700;
            --simple-colors-default-theme-accent-6: #929100;
            --simple-colors-default-theme-accent-7: #f6f600;
            --simple-colors-default-theme-accent-8: #ffff3a;
            --simple-colors-default-theme-accent-9: #ffff7c;
            --simple-colors-default-theme-accent-10: #ffff90;
            --simple-colors-default-theme-accent-11: #ffffac;
            --simple-colors-default-theme-accent-12: #ffffd5;
          }

          :host([accent-color="amber"]) {
            --simple-colors-default-theme-accent-1: #fff2d4;
            --simple-colors-default-theme-accent-2: #ffdf92;
            --simple-colors-default-theme-accent-3: #ffd677;
            --simple-colors-default-theme-accent-4: #ffcf5e;
            --simple-colors-default-theme-accent-5: #ffc235;
            --simple-colors-default-theme-accent-6: #ffc500;
            --simple-colors-default-theme-accent-7: #b28900;
            --simple-colors-default-theme-accent-8: #876800;
            --simple-colors-default-theme-accent-9: #614b00;
            --simple-colors-default-theme-accent-10: #413200;
            --simple-colors-default-theme-accent-11: #302500;
            --simple-colors-default-theme-accent-12: #221a00;
            --simple-colors-fixed-theme-accent-1: #fff2d4;
            --simple-colors-fixed-theme-accent-2: #ffdf92;
            --simple-colors-fixed-theme-accent-3: #ffd677;
            --simple-colors-fixed-theme-accent-4: #ffcf5e;
            --simple-colors-fixed-theme-accent-5: #ffc235;
            --simple-colors-fixed-theme-accent-6: #ffc500;
            --simple-colors-fixed-theme-accent-7: #b28900;
            --simple-colors-fixed-theme-accent-8: #876800;
            --simple-colors-fixed-theme-accent-9: #614b00;
            --simple-colors-fixed-theme-accent-10: #413200;
            --simple-colors-fixed-theme-accent-11: #302500;
            --simple-colors-fixed-theme-accent-12: #221a00;
          }

          :host([dark][accent-color="amber"]) {
            --simple-colors-default-theme-accent-1: #221a00;
            --simple-colors-default-theme-accent-2: #302500;
            --simple-colors-default-theme-accent-3: #413200;
            --simple-colors-default-theme-accent-4: #614b00;
            --simple-colors-default-theme-accent-5: #876800;
            --simple-colors-default-theme-accent-6: #b28900;
            --simple-colors-default-theme-accent-7: #ffc500;
            --simple-colors-default-theme-accent-8: #ffc235;
            --simple-colors-default-theme-accent-9: #ffcf5e;
            --simple-colors-default-theme-accent-10: #ffd677;
            --simple-colors-default-theme-accent-11: #ffdf92;
            --simple-colors-default-theme-accent-12: #fff2d4;
          }

          :host([accent-color="orange"]) {
            --simple-colors-default-theme-accent-1: #ffebd7;
            --simple-colors-default-theme-accent-2: #ffca92;
            --simple-colors-default-theme-accent-3: #ffbd75;
            --simple-colors-default-theme-accent-4: #ffb05c;
            --simple-colors-default-theme-accent-5: #ff9e36;
            --simple-colors-default-theme-accent-6: #ff9625;
            --simple-colors-default-theme-accent-7: #e56a00;
            --simple-colors-default-theme-accent-8: #ae5100;
            --simple-colors-default-theme-accent-9: #833d00;
            --simple-colors-default-theme-accent-10: #612d00;
            --simple-colors-default-theme-accent-11: #3d1c00;
            --simple-colors-default-theme-accent-12: #2c1400;
            --simple-colors-fixed-theme-accent-1: #ffebd7;
            --simple-colors-fixed-theme-accent-2: #ffca92;
            --simple-colors-fixed-theme-accent-3: #ffbd75;
            --simple-colors-fixed-theme-accent-4: #ffb05c;
            --simple-colors-fixed-theme-accent-5: #ff9e36;
            --simple-colors-fixed-theme-accent-6: #ff9625;
            --simple-colors-fixed-theme-accent-7: #e56a00;
            --simple-colors-fixed-theme-accent-8: #ae5100;
            --simple-colors-fixed-theme-accent-9: #833d00;
            --simple-colors-fixed-theme-accent-10: #612d00;
            --simple-colors-fixed-theme-accent-11: #3d1c00;
            --simple-colors-fixed-theme-accent-12: #2c1400;
          }

          :host([dark][accent-color="orange"]) {
            --simple-colors-default-theme-accent-1: #2c1400;
            --simple-colors-default-theme-accent-2: #3d1c00;
            --simple-colors-default-theme-accent-3: #612d00;
            --simple-colors-default-theme-accent-4: #833d00;
            --simple-colors-default-theme-accent-5: #ae5100;
            --simple-colors-default-theme-accent-6: #e56a00;
            --simple-colors-default-theme-accent-7: #ff9625;
            --simple-colors-default-theme-accent-8: #ff9e36;
            --simple-colors-default-theme-accent-9: #ffb05c;
            --simple-colors-default-theme-accent-10: #ffbd75;
            --simple-colors-default-theme-accent-11: #ffca92;
            --simple-colors-default-theme-accent-12: #ffebd7;
          }

          :host([accent-color="deep-orange"]) {
            --simple-colors-default-theme-accent-1: #ffe7e0;
            --simple-colors-default-theme-accent-2: #ffb299;
            --simple-colors-default-theme-accent-3: #ffa588;
            --simple-colors-default-theme-accent-4: #ff8a64;
            --simple-colors-default-theme-accent-5: #ff7649;
            --simple-colors-default-theme-accent-6: #ff6c3c;
            --simple-colors-default-theme-accent-7: #f53100;
            --simple-colors-default-theme-accent-8: #b92500;
            --simple-colors-default-theme-accent-9: #8a1c00;
            --simple-colors-default-theme-accent-10: #561100;
            --simple-colors-default-theme-accent-11: #3a0c00;
            --simple-colors-default-theme-accent-12: #240700;
            --simple-colors-fixed-theme-accent-1: #ffe7e0;
            --simple-colors-fixed-theme-accent-2: #ffb299;
            --simple-colors-fixed-theme-accent-3: #ffa588;
            --simple-colors-fixed-theme-accent-4: #ff8a64;
            --simple-colors-fixed-theme-accent-5: #ff7649;
            --simple-colors-fixed-theme-accent-6: #ff6c3c;
            --simple-colors-fixed-theme-accent-7: #f53100;
            --simple-colors-fixed-theme-accent-8: #b92500;
            --simple-colors-fixed-theme-accent-9: #8a1c00;
            --simple-colors-fixed-theme-accent-10: #561100;
            --simple-colors-fixed-theme-accent-11: #3a0c00;
            --simple-colors-fixed-theme-accent-12: #240700;
          }

          :host([dark][accent-color="deep-orange"]) {
            --simple-colors-default-theme-accent-1: #240700;
            --simple-colors-default-theme-accent-2: #3a0c00;
            --simple-colors-default-theme-accent-3: #561100;
            --simple-colors-default-theme-accent-4: #8a1c00;
            --simple-colors-default-theme-accent-5: #b92500;
            --simple-colors-default-theme-accent-6: #f53100;
            --simple-colors-default-theme-accent-7: #ff6c3c;
            --simple-colors-default-theme-accent-8: #ff7649;
            --simple-colors-default-theme-accent-9: #ff8a64;
            --simple-colors-default-theme-accent-10: #ffa588;
            --simple-colors-default-theme-accent-11: #ffb299;
            --simple-colors-default-theme-accent-12: #ffe7e0;
          }

          :host([accent-color="brown"]) {
            --simple-colors-default-theme-accent-1: #f0e2de;
            --simple-colors-default-theme-accent-2: #e5b8aa;
            --simple-colors-default-theme-accent-3: #c59485;
            --simple-colors-default-theme-accent-4: #b68373;
            --simple-colors-default-theme-accent-5: #ac7868;
            --simple-colors-default-theme-accent-6: #a47060;
            --simple-colors-default-theme-accent-7: #85574a;
            --simple-colors-default-theme-accent-8: #724539;
            --simple-colors-default-theme-accent-9: #5b3328;
            --simple-colors-default-theme-accent-10: #3b1e15;
            --simple-colors-default-theme-accent-11: #2c140e;
            --simple-colors-default-theme-accent-12: #200e09;
            --simple-colors-fixed-theme-accent-1: #f0e2de;
            --simple-colors-fixed-theme-accent-2: #e5b8aa;
            --simple-colors-fixed-theme-accent-3: #c59485;
            --simple-colors-fixed-theme-accent-4: #b68373;
            --simple-colors-fixed-theme-accent-5: #ac7868;
            --simple-colors-fixed-theme-accent-6: #a47060;
            --simple-colors-fixed-theme-accent-7: #85574a;
            --simple-colors-fixed-theme-accent-8: #724539;
            --simple-colors-fixed-theme-accent-9: #5b3328;
            --simple-colors-fixed-theme-accent-10: #3b1e15;
            --simple-colors-fixed-theme-accent-11: #2c140e;
            --simple-colors-fixed-theme-accent-12: #200e09;
          }

          :host([dark][accent-color="brown"]) {
            --simple-colors-default-theme-accent-1: #200e09;
            --simple-colors-default-theme-accent-2: #2c140e;
            --simple-colors-default-theme-accent-3: #3b1e15;
            --simple-colors-default-theme-accent-4: #5b3328;
            --simple-colors-default-theme-accent-5: #724539;
            --simple-colors-default-theme-accent-6: #85574a;
            --simple-colors-default-theme-accent-7: #a47060;
            --simple-colors-default-theme-accent-8: #ac7868;
            --simple-colors-default-theme-accent-9: #b68373;
            --simple-colors-default-theme-accent-10: #c59485;
            --simple-colors-default-theme-accent-11: #e5b8aa;
            --simple-colors-default-theme-accent-12: #f0e2de;
          }

          :host([accent-color="blue-grey"]) {
            --simple-colors-default-theme-accent-1: #e7eff1;
            --simple-colors-default-theme-accent-2: #b1c5ce;
            --simple-colors-default-theme-accent-3: #9badb6;
            --simple-colors-default-theme-accent-4: #8d9fa7;
            --simple-colors-default-theme-accent-5: #7a8f98;
            --simple-colors-default-theme-accent-6: #718892;
            --simple-colors-default-theme-accent-7: #56707c;
            --simple-colors-default-theme-accent-8: #40535b;
            --simple-colors-default-theme-accent-9: #2f3e45;
            --simple-colors-default-theme-accent-10: #1e282c;
            --simple-colors-default-theme-accent-11: #182023;
            --simple-colors-default-theme-accent-12: #0f1518;
            --simple-colors-fixed-theme-accent-1: #e7eff1;
            --simple-colors-fixed-theme-accent-2: #b1c5ce;
            --simple-colors-fixed-theme-accent-3: #9badb6;
            --simple-colors-fixed-theme-accent-4: #8d9fa7;
            --simple-colors-fixed-theme-accent-5: #7a8f98;
            --simple-colors-fixed-theme-accent-6: #718892;
            --simple-colors-fixed-theme-accent-7: #56707c;
            --simple-colors-fixed-theme-accent-8: #40535b;
            --simple-colors-fixed-theme-accent-9: #2f3e45;
            --simple-colors-fixed-theme-accent-10: #1e282c;
            --simple-colors-fixed-theme-accent-11: #182023;
            --simple-colors-fixed-theme-accent-12: #0f1518;
          }

          :host([dark][accent-color="blue-grey"]) {
            --simple-colors-default-theme-accent-1: #0f1518;
            --simple-colors-default-theme-accent-2: #182023;
            --simple-colors-default-theme-accent-3: #1e282c;
            --simple-colors-default-theme-accent-4: #2f3e45;
            --simple-colors-default-theme-accent-5: #40535b;
            --simple-colors-default-theme-accent-6: #56707c;
            --simple-colors-default-theme-accent-7: #718892;
            --simple-colors-default-theme-accent-8: #7a8f98;
            --simple-colors-default-theme-accent-9: #8d9fa7;
            --simple-colors-default-theme-accent-10: #9badb6;
            --simple-colors-default-theme-accent-11: #b1c5ce;
            --simple-colors-default-theme-accent-12: #e7eff1;
          }

          /* from a11y-utils */
          .sr-only {
            position: absolute;
            left: -10000px;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
          }
        `,
      ];
    }

    // render function
    render() {
      return b$2` <slot></slot>`;
    }

    // properties available to the custom element for data binding
    static get properties() {
      return {
        ...super.properties,

        /**
         * a selected accent-"color": grey, red, pink, purple, etc.
         */
        accentColor: {
          attribute: "accent-color",
          type: String,
          reflect: true,
        },
        /**
         * make the default theme dark?
         */
        dark: {
          name: "dark",
          type: Boolean,
          reflect: true,
        },
      };
    }

    constructor() {
      super();
      this.accentColor = "grey";
      this.dark = false;
      this.colors = SimpleColorsSharedStylesGlobal$1.colors;
    }

    static get tag() {
      return "simple-colors";
    }

    /**
     * gets the current shade
     *
     * @param {string} the shade
     * @param {number} the inverted shade
     */
    invertShade(shade) {
      return SimpleColorsSharedStylesGlobal$1.invertShade(shade);
    }

    /**
     * gets the color information of a given CSS variable or class
     *
     * @param {string} the CSS variable (eg. `--simple-colors-fixed-theme-red-3`) or a class (eg. `.simple-colors-fixed-theme-red-3-text`)
     * @param {object} an object that includes the theme, color, and shade information
     */
    getColorInfo(colorName) {
      return SimpleColorsSharedStylesGlobal$1.getColorInfo(colorName);
    }

    /**
     * returns a variable based on color name, shade, and fixed theme
     *
     * @param {string} the color name
     * @param {number} the color shade
     * @param {boolean} the color shade
     * @returns {string} the CSS Variable
     */
    makeVariable(color = "grey", shade = 1, theme = "default") {
      return SimpleColorsSharedStylesGlobal$1.makeVariable(
        (color = "grey"),
        (shade = 1),
        (theme = "default"),
      );
    }

    /**
     * for large or small text given a color and its shade,
     * lists all the colors and shades that would be
     * WCAG 2.0 AA-compliant for contrast
     *
     * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
     * @param {string} color name, e.g. "deep-purple"
     * @param {string} color shade, e.g. 3
     * @param {object} all of the WCAG 2.0 AA-compliant colors and shades
     */
    getContrastingColors(colorName, colorShade, isLarge) {
      return SimpleColorsSharedStylesGlobal$1.getContrastingColors(
        colorName,
        colorShade,
        isLarge,
      );
    }

    /**
     * for large or small text given a color and its shade,
     * lists all the shades of another color that would be
     * WCAG 2.0 AA-compliant for contrast
     *
     * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
     * @param {string} color name, e.g. "deep-purple"
     * @param {string} color shade, e.g. 3
     * @param {string} contrasting color name, e.g. "grey"
     * @param {array} all of the WCAG 2.0 AA-compliant shades of the contrasting color
     */
    getContrastingShades(isLarge, colorName, colorShade, contrastName) {
      return SimpleColorsSharedStylesGlobal$1.getContrastingShades(
        isLarge,
        colorName,
        colorShade,
        contrastName,
      );
    }

    /**
     * determines if two shades are WCAG 2.0 AA-compliant for contrast
     *
     * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
     * @param {string} color name, e.g. "deep-purple"
     * @param {string} color shade, e.g. 3
     * @param {string} contrasting color name, e.g. "grey"
     * @param {string} contrast shade, e.g. 12
     * @param {boolean} whether or not the contrasting shade is WCAG 2.0 AA-compliant
     */
    isContrastCompliant(
      isLarge,
      colorName,
      colorShade,
      contrastName,
      contrastShade,
    ) {
      return SimpleColorsSharedStylesGlobal$1.isContrastCompliant(
        isLarge,
        colorName,
        colorShade,
        contrastName,
        contrastShade,
      );
    }
  };
};
/**
  * `simple-colors`
  * a shared set of styles for `@haxtheweb`
 ### Styling
 See demo of "all of the colors" (`demo/colors.html`) for styling.
  *
 
  * @demo ./demo/index.html demo
  * @demo ./demo/how.html getting started
  * @demo ./demo/colors.html all of the colors
  * @demo ./demo/picker.html simple-colors-picker
  * @demo ./demo/extending.html extending simple-colors
  * @element simple-colors
  */
let SimpleColors$1 = class SimpleColors extends SimpleColorsSuper$1(i$4) {};
globalThis.customElements.define(SimpleColors$1.tag, SimpleColors$1);

/**
 * Singleton to manage iconsets
 * @demo demo/index.html
 */
// polyfill for replaceAll, I hate you Safari / really old stuff
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (find, replace) {
    return this.split(find).join(replace);
  };
}
/**
 *
 * @class SimpleIconset
 * @extends HTMLElement
 */
let SimpleIconset$1 = class SimpleIconset extends i$4 {
  static get tag() {
    return "simple-iconset";
  }
  constructor() {
    super();
    this.iconsets = {};
    this.iconlist = [];
    this.manifest = {};
    this.needsHydrated = [];
  }
  /**
   * Manifest.js files can register themselves to create an icon list.
   * These files export an array of iconsets
   * as [{name: iconsetName, icons: [ iconName,iconName2 ]}]
   *
   * @param {array} manifest array of iconsets
   * @memberof SimpleIconset
   */
  registerManifest(manifest) {
    (manifest || []).forEach((iconset) => {
      if (!this.manifest[iconset.name]) {
        this.manifest[iconset.name] = iconset.icons || [];
        this.manifest[iconset.name].forEach((icon) => {
          this.iconlist.push(`${iconset.name}:${icon}`);
        });
      }
    });
  }
  /**
   * Iconsets are to register a namespace in either manner:
   * object notation: key name of the icon with a specific path to the file
   * {
   *   icon: iconLocation,
   *   icon2: iconLocation2
   * }
   * string notation: assumes icon name can be found at ${iconLocationBasePath}${iconname}.svg
   * iconLocationBasePath
   */
  registerIconset(name, icons = {}) {
    if (typeof icons === "object") {
      this.iconsets[name] = { ...icons };
    } else if (typeof icons === "string") {
      this.iconsets[name] = icons;
    }
    // try processing anything that might have missed previously
    if (this.needsHydrated.length > 0) {
      let list = [];
      this.needsHydrated.forEach((item, index) => {
        // set the src from interns of the icon, returns if it matched
        // which will then push it into the list to be removed from processing
        if (
          typeof item.setSrcByIcon === "function" &&
          item.setSrcByIcon(this)
        ) {
          list.push(index);
        }
      });
      // process in reverse order to avoid key splicing issues
      list.reverse().forEach((val) => {
        this.needsHydrated.splice(val, 1);
      });
    }
  }
  /**
   * return the icon location on splitting the string on : for position in the object
   * if the icon doesn't exist, it sets a value for future updates in the event
   * that the library for the icon registers AFTER the request to visualize is made
   */
  getIcon(val, context) {
    let ary = val.replaceAll("/", "-").split(":");
    // legacy API used to fill in icons: for lazy devs so let's mirror
    if (ary.length === 1) {
      ary = ["icons", val];
    }
    if (ary.length == 2 && this.iconsets[ary[0]]) {
      if (
        typeof this.iconsets[ary[0]] !== "string" &&
        this.iconsets[ary[0]][ary[1]] &&
        typeof this.iconsets[ary[0]][ary[1]] !== "function"
      ) {
        return this.iconsets[ary[0]][ary[1]];
      } else if (ary[1]) {
        return `${this.iconsets[ary[0]]}${ary[1]}.svg`;
      }
    }
    // if we get here we just missed on the icon hydrating which means
    // either it's an invalid icon OR the library to register the icons
    // location will import AFTER (possible microtiming early on)
    // also weird looking by context is either the element asking about
    // itself OR the the iconset state manager checking for hydration
    if (context !== this && context) {
      this.needsHydrated.push(context);
    }
    return null;
  }
};

globalThis.customElements.define(SimpleIconset$1.tag, SimpleIconset$1);

globalThis.SimpleIconset = globalThis.SimpleIconset || {};
/**
 * Checks to see if there is an instance available, and if not appends one
 */
globalThis.SimpleIconset.requestAvailability = () => {
  if (
    globalThis.SimpleIconset.instance == null &&
    globalThis.document &&
    globalThis.document.body
  ) {
    globalThis.SimpleIconset.instance =
      globalThis.document.createElement("simple-iconset");
    globalThis.document.body.appendChild(globalThis.SimpleIconset.instance);
  }
  return globalThis.SimpleIconset.instance;
};
// self request so that when this file is referenced it exists in the dom
const SimpleIconsetStore$1 =
  typeof global !== "undefined"
    ? new SimpleIconset$1()
    : globalThis.SimpleIconset.requestAvailability();

[
  "courseicons",
  "hax",
  "lrn",
  "mdextra",
  "mdi-social",
  "editable-table",
  "drawing",
  "paper-audio-icons",
].forEach((i) => {
  SimpleIconsetStore$1.registerIconset(
    i,
    `${new URL("./simple-hax-iconset.js", import.meta.url).href}/../svgs/${i}/`,
  );
});

/**
 * @const SimpleIconIconsetsManifest
 */
const SimpleIconIconsetsManifest$1 = [
  {
    name: "av",
    icons: [
      "add-to-queue",
      "airplay",
      "album",
      "art-track",
      "audio-descriptive-track",
      "av-timer",
      "branding-watermark",
      "call-to-action",
      "closed-caption",
      "equalizer",
      "explicit",
      "fast-forward",
      "fast-rewind",
      "featured-play-list",
      "featured-video",
      "fiber-dvr",
      "fiber-manual-record",
      "fiber-new",
      "fiber-pin",
      "fiber-smart-record",
      "forward-10",
      "forward-30",
      "forward-5",
      "games",
      "hd",
      "hearing",
      "high-quality",
      "library-add",
      "library-books",
      "library-music",
      "loop",
      "mic-none",
      "mic-off",
      "mic",
      "movie",
      "music-video",
      "new-releases",
      "not-interested",
      "note",
      "pause-circle-filled",
      "pause-circle-outline",
      "pause",
      "play-arrow",
      "play-circle-filled",
      "play-circle-outline",
      "playlist-add-check",
      "playlist-add",
      "playlist-play",
      "queue-music",
      "queue-play-next",
      "queue",
      "radio",
      "recent-actors",
      "remove-from-queue",
      "repeat-one",
      "repeat",
      "replay-10",
      "replay-30",
      "replay-5",
      "replay",
      "shuffle",
      "skip-next",
      "skip-previous",
      "slow-motion-video",
      "snooze",
      "sort-by-alpha",
      "stop",
      "subscriptions",
      "subtitles",
      "surround-sound",
      "video-call",
      "video-label",
      "video-library",
      "videocam-off",
      "videocam",
      "volume-down",
      "volume-mute",
      "volume-off",
      "volume-up",
      "web-asset",
      "web",
    ],
  },
  {
    name: "communication",
    icons: [
      "business",
      "call-end",
      "call-made",
      "call-merge",
      "call-missed-outgoing",
      "call-missed",
      "call-received",
      "call-split",
      "call",
      "chat-bubble-outline",
      "chat-bubble",
      "chat",
      "clear-all",
      "comment",
      "contact-mail",
      "contact-phone",
      "contacts",
      "dialer-sip",
      "dialpad",
      "email",
      "forum",
      "import-contacts",
      "import-export",
      "invert-colors-off",
      "live-help",
      "location-off",
      "location-on",
      "mail-outline",
      "message",
      "no-sim",
      "phone",
      "phonelink-erase",
      "phonelink-lock",
      "phonelink-ring",
      "phonelink-setup",
      "portable-wifi-off",
      "present-to-all",
      "ring-volume",
      "rss-feed",
      "screen-share",
      "speaker-phone",
      "stay-current-landscape",
      "stay-current-portrait",
      "stay-primary-landscape",
      "stay-primary-portrait",
      "stop-screen-share",
      "swap-calls",
      "textsms",
      "voicemail",
      "vpn-key",
    ],
  },
  {
    name: "device",
    icons: [
      "access-alarm",
      "access-alarms",
      "access-time",
      "add-alarm",
      "airplanemode-active",
      "airplanemode-inactive",
      "battery-20",
      "battery-30",
      "battery-50",
      "battery-60",
      "battery-80",
      "battery-90",
      "battery-alert",
      "battery-charging-20",
      "battery-charging-30",
      "battery-charging-50",
      "battery-charging-60",
      "battery-charging-80",
      "battery-charging-90",
      "battery-charging-full",
      "battery-full",
      "battery-std",
      "battery-unknown",
      "bluetooth-connected",
      "bluetooth-disabled",
      "bluetooth-searching",
      "bluetooth",
      "brightness-auto",
      "brightness-high",
      "brightness-low",
      "brightness-medium",
      "data-usage",
      "developer-mode",
      "devices",
      "dvr",
      "gps-fixed",
      "gps-not-fixed",
      "gps-off",
      "graphic-eq",
      "location-disabled",
      "location-searching",
      "network-cell",
      "network-wifi",
      "nfc",
      "screen-lock-landscape",
      "screen-lock-portrait",
      "screen-lock-rotation",
      "screen-rotation",
      "sd-storage",
      "settings-system-daydream",
      "signal-cellular-0-bar",
      "signal-cellular-1-bar",
      "signal-cellular-2-bar",
      "signal-cellular-3-bar",
      "signal-cellular-4-bar",
      "signal-cellular-connected-no-internet-0-bar",
      "signal-cellular-connected-no-internet-1-bar",
      "signal-cellular-connected-no-internet-2-bar",
      "signal-cellular-connected-no-internet-3-bar",
      "signal-cellular-connected-no-internet-4-bar",
      "signal-cellular-no-sim",
      "signal-cellular-null",
      "signal-cellular-off",
      "signal-wifi-0-bar",
      "signal-wifi-1-bar-lock",
      "signal-wifi-1-bar",
      "signal-wifi-2-bar-lock",
      "signal-wifi-2-bar",
      "signal-wifi-3-bar-lock",
      "signal-wifi-3-bar",
      "signal-wifi-4-bar-lock",
      "signal-wifi-4-bar",
      "signal-wifi-off",
      "storage",
      "usb",
      "wallpaper",
      "widgets",
      "wifi-lock",
      "wifi-tethering",
    ],
  },
  {
    name: "editor",
    icons: [
      "attach-file",
      "attach-money",
      "border-all",
      "border-bottom",
      "border-clear",
      "border-color",
      "border-horizontal",
      "border-inner",
      "border-left",
      "border-outer",
      "border-right",
      "border-style",
      "border-top",
      "border-vertical",
      "bubble-chart",
      "drag-handle",
      "format-align-center",
      "format-align-justify",
      "format-align-left",
      "format-align-right",
      "format-bold",
      "format-clear",
      "format-color-fill",
      "format-color-reset",
      "format-color-text",
      "format-indent-decrease",
      "format-indent-increase",
      "format-italic",
      "format-line-spacing",
      "format-list-bulleted",
      "format-list-numbered",
      "format-page-break",
      "format-paint",
      "format-quote",
      "format-shapes",
      "format-size",
      "format-strikethrough",
      "format-textdirection-l-to-r",
      "format-textdirection-r-to-l",
      "format-underlined",
      "functions",
      "highlight",
      "insert-chart",
      "insert-comment",
      "insert-drive-file",
      "insert-emoticon",
      "insert-invitation",
      "insert-link",
      "insert-photo",
      "linear-scale",
      "merge-type",
      "mode-comment",
      "mode-edit",
      "monetization-on",
      "money-off",
      "multiline-chart",
      "pie-chart-outlined",
      "pie-chart",
      "publish",
      "short-text",
      "show-chart",
      "space-bar",
      "strikethrough-s",
      "text-fields",
      "title",
      "vertical-align-bottom",
      "vertical-align-center",
      "vertical-align-top",
      "wrap-text",
    ],
  },
  {
    name: "elmsln-custom",
    icons: [],
  },
  {
    name: "hardware",
    icons: [
      "cast-connected",
      "cast",
      "computer",
      "desktop-mac",
      "desktop-windows",
      "developer-board",
      "device-hub",
      "devices-other",
      "dock",
      "gamepad",
      "headset-mic",
      "headset",
      "keyboard-arrow-down",
      "keyboard-arrow-left",
      "keyboard-arrow-right",
      "keyboard-arrow-up",
      "keyboard-backspace",
      "keyboard-capslock",
      "keyboard-hide",
      "keyboard-return",
      "keyboard-tab",
      "keyboard-voice",
      "keyboard",
      "laptop-chromebook",
      "laptop-mac",
      "laptop-windows",
      "laptop",
      "memory",
      "mouse",
      "phone-android",
      "phone-iphone",
      "phonelink-off",
      "phonelink",
      "power-input",
      "router",
      "scanner",
      "security",
      "sim-card",
      "smartphone",
      "speaker-group",
      "speaker",
      "tablet-android",
      "tablet-mac",
      "tablet",
      "toys",
      "tv",
      "videogame-asset",
      "watch",
    ],
  },
  {
    name: "icons",
    icons: [
      "3d-rotation",
      "accessibility",
      "accessible",
      "account-balance-wallet",
      "account-balance",
      "account-box",
      "account-circle",
      "add-alert",
      "add-box",
      "add-circle-outline",
      "add-circle",
      "add-shopping-cart",
      "add",
      "alarm-add",
      "alarm-off",
      "alarm-on",
      "alarm",
      "all-out",
      "android",
      "announcement",
      "apps",
      "archive",
      "arrow-back",
      "arrow-downward",
      "arrow-drop-down-circle",
      "arrow-drop-down",
      "arrow-drop-up",
      "arrow-forward",
      "arrow-upward",
      "aspect-ratio",
      "assessment",
      "assignment-ind",
      "assignment-late",
      "assignment-return",
      "assignment-returned",
      "assignment-turned-in",
      "assignment",
      "attachment",
      "autorenew",
      "backspace",
      "backup",
      "block",
      "book",
      "bookmark-border",
      "bookmark",
      "bug-report",
      "build",
      "cached",
      "camera-enhance",
      "cancel",
      "card-giftcard",
      "card-membership",
      "card-travel",
      "change-history",
      "check-box-outline-blank",
      "check-box",
      "check-circle",
      "check",
      "chevron-left",
      "chevron-right",
      "chrome-reader-mode",
      "class",
      "clear",
      "close",
      "cloud-circle",
      "cloud-done",
      "cloud-download",
      "cloud-off",
      "cloud-queue",
      "cloud-upload",
      "cloud",
      "code",
      "compare-arrows",
      "content-copy",
      "content-cut",
      "content-paste",
      "copyright",
      "create-new-folder",
      "create",
      "credit-card",
      "dashboard",
      "date-range",
      "delete-forever",
      "delete-sweep",
      "delete",
      "description",
      "dns",
      "done-all",
      "done",
      "donut-large",
      "donut-small",
      "drafts",
      "eject",
      "error-outline",
      "error",
      "euro-symbol",
      "event-seat",
      "event",
      "exit-to-app",
      "expand-less",
      "expand-more",
      "explore",
      "extension",
      "face",
      "favorite-border",
      "favorite",
      "feedback",
      "file-download",
      "file-upload",
      "filter-list",
      "find-in-page",
      "find-replace",
      "fingerprint",
      "first-page",
      "flag",
      "flight-land",
      "flight-takeoff",
      "flip-to-back",
      "flip-to-front",
      "folder-open",
      "folder-shared",
      "folder",
      "font-download",
      "forward",
      "fullscreen-exit",
      "fullscreen",
      "g-translate",
      "gavel",
      "gesture",
      "get-app",
      "gif",
      "grade",
      "group-work",
      "help-outline",
      "help",
      "highlight-off",
      "history",
      "home",
      "hourglass-empty",
      "hourglass-full",
      "http",
      "https",
      "important-devices",
      "inbox",
      "indeterminate-check-box",
      "info-outline",
      "info",
      "input",
      "invert-colors",
      "label-outline",
      "label",
      "language",
      "last-page",
      "launch",
      "lightbulb-outline",
      "line-style",
      "line-weight",
      "link",
      "list",
      "lock-open",
      "lock-outline",
      "lock",
      "low-priority",
      "loyalty",
      "mail",
      "markunread-mailbox",
      "markunread",
      "menu",
      "more-horiz",
      "more-vert",
      "motorcycle",
      "move-to-inbox",
      "next-week",
      "note-add",
      "offline-pin",
      "opacity",
      "open-in-browser",
      "open-in-new",
      "open-with",
      "pageview",
      "pan-tool",
      "payment",
      "perm-camera-mic",
      "perm-contact-calendar",
      "perm-data-setting",
      "perm-device-information",
      "perm-identity",
      "perm-media",
      "perm-phone-msg",
      "perm-scan-wifi",
      "pets",
      "picture-in-picture-alt",
      "picture-in-picture",
      "play-for-work",
      "polymer",
      "power-settings-new",
      "pregnant-woman",
      "print",
      "query-builder",
      "question-answer",
      "radio-button-checked",
      "radio-button-unchecked",
      "receipt",
      "record-voice-over",
      "redeem",
      "redo",
      "refresh",
      "remove-circle-outline",
      "remove-circle",
      "remove-shopping-cart",
      "remove",
      "reorder",
      "reply-all",
      "reply",
      "report-problem",
      "report",
      "restore-page",
      "restore",
      "room",
      "rounded-corner",
      "rowing",
      "save",
      "schedule",
      "search",
      "select-all",
      "send",
      "settings-applications",
      "settings-backup-restore",
      "settings-bluetooth",
      "settings-brightness",
      "settings-cell",
      "settings-ethernet",
      "settings-input-antenna",
      "settings-input-component",
      "settings-input-composite",
      "settings-input-hdmi",
      "settings-input-svideo",
      "settings-overscan",
      "settings-phone",
      "settings-power",
      "settings-remote",
      "settings-voice",
      "settings",
      "shop-two",
      "shop",
      "shopping-basket",
      "shopping-cart",
      "sort",
      "speaker-notes-off",
      "speaker-notes",
      "spellcheck",
      "star-border",
      "star-half",
      "star",
      "stars",
      "store",
      "subdirectory-arrow-left",
      "subdirectory-arrow-right",
      "subject",
      "supervisor-account",
      "swap-horiz",
      "swap-vert",
      "swap-vertical-circle",
      "system-update-alt",
      "tab-unselected",
      "tab",
      "text-format",
      "theaters",
      "thumb-down",
      "thumb-up",
      "thumbs-up-down",
      "timeline",
      "toc",
      "today",
      "toll",
      "touch-app",
      "track-changes",
      "translate",
      "trending-down",
      "trending-flat",
      "trending-up",
      "turned-in-not",
      "turned-in",
      "unarchive",
      "undo",
      "unfold-less",
      "unfold-more",
      "update",
      "verified-user",
      "view-agenda",
      "view-array",
      "view-carousel",
      "view-column",
      "view-day",
      "view-headline",
      "view-list",
      "view-module",
      "view-quilt",
      "view-stream",
      "view-week",
      "visibility-off",
      "visibility",
      "warning",
      "watch-later",
      "weekend",
      "work",
      "youtube-searched-for",
      "zoom-in",
      "zoom-out",
    ],
  },
  {
    name: "image",
    icons: [
      "add-a-photo",
      "add-to-photos",
      "adjust",
      "assistant-photo",
      "assistant",
      "audiotrack",
      "blur-circular",
      "blur-linear",
      "blur-off",
      "blur-on",
      "brightness-1",
      "brightness-2",
      "brightness-3",
      "brightness-4",
      "brightness-5",
      "brightness-6",
      "brightness-7",
      "broken-image",
      "brush",
      "burst-mode",
      "camera-alt",
      "camera-front",
      "camera-rear",
      "camera-roll",
      "camera",
      "center-focus-strong",
      "center-focus-weak",
      "collections-bookmark",
      "collections",
      "color-lens",
      "colorize",
      "compare",
      "control-point-duplicate",
      "control-point",
      "crop-16-9",
      "crop-3-2",
      "crop-5-4",
      "crop-7-5",
      "crop-din",
      "crop-free",
      "crop-landscape",
      "crop-original",
      "crop-portrait",
      "crop-rotate",
      "crop-square",
      "crop",
      "dehaze",
      "details",
      "edit",
      "exposure-neg-1",
      "exposure-neg-2",
      "exposure-plus-1",
      "exposure-plus-2",
      "exposure-zero",
      "exposure",
      "filter-1",
      "filter-2",
      "filter-3",
      "filter-4",
      "filter-5",
      "filter-6",
      "filter-7",
      "filter-8",
      "filter-9-plus",
      "filter-9",
      "filter-b-and-w",
      "filter-center-focus",
      "filter-drama",
      "filter-frames",
      "filter-hdr",
      "filter-none",
      "filter-tilt-shift",
      "filter-vintage",
      "filter",
      "flare",
      "flash-auto",
      "flash-off",
      "flash-on",
      "flip",
      "gradient",
      "grain",
      "grid-off",
      "grid-on",
      "hdr-off",
      "hdr-on",
      "hdr-strong",
      "hdr-weak",
      "healing",
      "image-aspect-ratio",
      "image",
      "iso",
      "landscape",
      "leak-add",
      "leak-remove",
      "lens",
      "linked-camera",
      "looks-3",
      "looks-4",
      "looks-5",
      "looks-6",
      "looks-one",
      "looks-two",
      "looks",
      "loupe",
      "monochrome-photos",
      "movie-creation",
      "movie-filter",
      "music-note",
      "nature-people",
      "nature",
      "navigate-before",
      "navigate-next",
      "palette",
      "panorama-fish-eye",
      "panorama-horizontal",
      "panorama-vertical",
      "panorama-wide-angle",
      "panorama",
      "photo-album",
      "photo-camera",
      "photo-filter",
      "photo-library",
      "photo-size-select-actual",
      "photo-size-select-large",
      "photo-size-select-small",
      "photo",
      "picture-as-pdf",
      "portrait",
      "remove-red-eye",
      "rotate-90-degrees-ccw",
      "rotate-left",
      "rotate-right",
      "slideshow",
      "straighten",
      "style",
      "switch-camera",
      "switch-video",
      "tag-faces",
      "texture",
      "timelapse",
      "timer-10",
      "timer-3",
      "timer-off",
      "timer",
      "tonality",
      "transform",
      "tune",
      "view-comfy",
      "view-compact",
      "vignette",
      "wb-auto",
      "wb-cloudy",
      "wb-incandescent",
      "wb-iridescent",
      "wb-sunny",
    ],
  },
  {
    name: "loading",
    icons: ["bars"],
  },
  {
    name: "maps",
    icons: [
      "add-location",
      "beenhere",
      "directions-bike",
      "directions-boat",
      "directions-bus",
      "directions-car",
      "directions-railway",
      "directions-run",
      "directions-subway",
      "directions-transit",
      "directions-walk",
      "directions",
      "edit-location",
      "ev-station",
      "flight",
      "hotel",
      "layers-clear",
      "layers",
      "local-activity",
      "local-airport",
      "local-atm",
      "local-bar",
      "local-cafe",
      "local-car-wash",
      "local-convenience-store",
      "local-dining",
      "local-drink",
      "local-florist",
      "local-gas-station",
      "local-grocery-store",
      "local-hospital",
      "local-hotel",
      "local-laundry-service",
      "local-library",
      "local-mall",
      "local-movies",
      "local-offer",
      "local-parking",
      "local-pharmacy",
      "local-phone",
      "local-pizza",
      "local-play",
      "local-post-office",
      "local-printshop",
      "local-see",
      "local-shipping",
      "local-taxi",
      "map",
      "my-location",
      "navigation",
      "near-me",
      "person-pin-circle",
      "person-pin",
      "pin-drop",
      "place",
      "rate-review",
      "restaurant-menu",
      "restaurant",
      "satellite",
      "store-mall-directory",
      "streetview",
      "subway",
      "terrain",
      "traffic",
      "train",
      "tram",
      "transfer-within-a-station",
      "zoom-out-map",
    ],
  },
  {
    name: "notification",
    icons: [
      "adb",
      "airline-seat-flat-angled",
      "airline-seat-flat",
      "airline-seat-individual-suite",
      "airline-seat-legroom-extra",
      "airline-seat-legroom-normal",
      "airline-seat-legroom-reduced",
      "airline-seat-recline-extra",
      "airline-seat-recline-normal",
      "bluetooth-audio",
      "confirmation-number",
      "disc-full",
      "do-not-disturb-alt",
      "do-not-disturb-off",
      "do-not-disturb-on",
      "do-not-disturb",
      "drive-eta",
      "enhanced-encryption",
      "event-available",
      "event-busy",
      "event-note",
      "folder-special",
      "live-tv",
      "mms",
      "more",
      "network-check",
      "network-locked",
      "no-encryption",
      "ondemand-video",
      "personal-video",
      "phone-bluetooth-speaker",
      "phone-forwarded",
      "phone-in-talk",
      "phone-locked",
      "phone-missed",
      "phone-paused",
      "power",
      "priority-high",
      "rv-hookup",
      "sd-card",
      "sim-card-alert",
      "sms-failed",
      "sms",
      "sync-disabled",
      "sync-problem",
      "sync",
      "system-update",
      "tap-and-play",
      "time-to-leave",
      "vibration",
      "voice-chat",
      "vpn-lock",
      "wc",
      "wifi",
    ],
  },
  {
    name: "places",
    icons: [
      "ac-unit",
      "airport-shuttle",
      "all-inclusive",
      "beach-access",
      "business-center",
      "casino",
      "child-care",
      "child-friendly",
      "fitness-center",
      "free-breakfast",
      "golf-course",
      "hot-tub",
      "kitchen",
      "pool",
      "room-service",
      "rv-hookup",
      "smoke-free",
      "smoking-rooms",
      "spa",
    ],
  },
  {
    name: "social",
    icons: [
      "cake",
      "domain",
      "group-add",
      "group",
      "location-city",
      "mood-bad",
      "mood",
      "notifications-active",
      "notifications-none",
      "notifications-off",
      "notifications-paused",
      "notifications",
      "pages",
      "party-mode",
      "people-outline",
      "people",
      "person-add",
      "person-outline",
      "person",
      "plus-one",
      "poll",
      "public",
      "school",
      "sentiment-dissatisfied",
      "sentiment-neutral",
      "sentiment-satisfied",
      "sentiment-very-dissatisfied",
      "sentiment-very-satisfied",
      "share",
      "whatshot",
    ],
  },
];
SimpleIconsetStore$1.registerManifest(SimpleIconIconsetsManifest$1);

const here$1 = new URL("./simple-icons.js", import.meta.url).href + "/../";
[
  "av",
  "communication",
  "device",
  "editor",
  "elmsln-custom",
  "hardware",
  "icons",
  "image",
  "maps",
  "notification",
  "places",
  "social",
  "loading",
].forEach((i) => {
  SimpleIconsetStore$1.registerIconset(i, `${here$1}svgs/${i}/`);
});
// flags too but they come from elsewhere
// ISO 3166-1-alpha-2 Flags
// via https://flagicons.lipis.dev/
SimpleIconsetStore$1.registerIconset(
  "flags",
  `${here$1}../../../node_modules/flag-icons/flags/4x3/`,
);
// square flag less common but needed ratio
SimpleIconsetStore$1.registerIconset(
  "flags1x1",
  `${here$1}../../../node_modules/flag-icons/flags/1x1/`,
);

/**
 * Instructional design meshing with styles. What we use to represent concepts
 */
const learningComponentNouns$1 = {
  content: "Content",
  assessment: "Assessment",
  quiz: "Quiz",
  submission: "Submission",
  lesson: "Lesson",
  module: "Module",
  task: "Task",
  activity: "Activity",
  project: "Project",
  practice: "Practice",
  unit: "Unit",
  objectives: "Learning Objectives",
};

const learningComponentVerbs$1 = {
  connection: "Connection",
  knowledge: "Did You Know?",
  strategy: "Learning Strategy",
  discuss: "Discuss",
  listen: "Listen",
  make: "Make",
  observe: "Observe",
  present: "Present",
  read: "Read",
  reflect: "Reflect",
  research: "Research",
  watch: "Watch",
  write: "Write",
};

const learningComponentTypes$1 = {
  ...learningComponentVerbs$1,
  ...learningComponentNouns$1,
};

const learningComponentColors$1 = {
  content: "blue-grey",
  assessment: "red",
  quiz: "blue",
  submission: "deep-purple",
  lesson: "purple",
  module: "red",
  task: "blue-grey",
  activity: "orange",
  project: "deep-orange",
  practice: "brown",
  unit: "light-green",
  objectives: "indigo",
  connection: "green",
  knowledge: "cyan",
  strategy: "teal",
  discuss: "blue",
  listen: "purple",
  make: "orange",
  observe: "yellow",
  present: "light-blue",
  read: "lime",
  reflect: "amber",
  research: "deep-orange",
  watch: "pink",
  write: "deep-purple",
};

function iconFromPageType$1(type) {
  switch (type) {
    case "content":
      return "lrn:page";
    case "assessment":
      return "lrn:assessment";
    case "quiz":
      return "lrn:quiz";
    case "submission":
      return "icons:move-to-inbox";
    case "lesson":
      return "hax:lesson";
    case "module":
      return "hax:module";
    case "unit":
      return "hax:unit";
    case "task":
      return "hax:task";
    case "activity":
      return "hax:ticket";
    case "project":
      return "hax:bulletin-board";
    case "practice":
      return "hax:shovel";
    case "connection":
      return "courseicons:chem-connection";
    case "knowledge":
      return "courseicons:knowledge";
    case "strategy":
      return "courseicons:strategy";
    case "discuss":
      return "courseicons:strategy";
    case "listen":
      return "courseicons:listen";
    case "make":
      return "courseicons:strategy";
    case "observe":
      return "courseicons:strategy";
    case "present":
      return "courseicons:strategy";
    case "read":
      return "courseicons:strategy";
    case "reflect":
      return "courseicons:strategy";
    case "research":
      return "courseicons:strategy";
    case "watch":
      return "courseicons:strategy";
    case "write":
      return "lrn:write";
  }
  return "courseicons:learning-objectives";
}

const ApplicationAttributeData$1 = {
  primary: {
    0: "Pugh blue",
    1: "Beaver blue",
    2: "Nittany navy",
    3: "Potential midnight",
    4: "Coaly gray",
    5: "Limestone gray",
    6: "Slate gray",
    7: "Creek teal",
    8: "Sky blue",
    9: "Shrine tan",
    10: "Roar golden",
    11: "Original 87 pink",
    12: "Discovery coral",
    13: "Wonder purple",
    14: "Artherton violet",
    15: "Invent orange",
    16: "Keystone yellow",
    17: "Opportunity green",
    18: "Future lime",
    19: "Forest green",
    20: "Landgrant brown",
    21: "Global Neon",
    22: "Error",
    23: "Warning",
    24: "Info",
    25: "Success",
  },
  accent: {
    0: "Sky Max",
    1: "Slate Max",
    2: "Limestone Max",
    3: "Shrine Max",
    4: "Roar Max",
    5: "Creek Max",
    6: "White",
    7: "Error Light",
    8: "Warning Light",
    9: "Info Light",
    10: "Success Light",
    11: "Alert Immediate",
    12: "Alert Urgent",
    13: "Alert All Clear",
    14: "Alert Non Emergency",
  },
  margin: {
    center: "Center",
    xs: "X-Small",
    s: "Small",
    m: "Medium",
    l: "Large",
    xl: "X-Large",
  },
  padding: {
    xs: "X-Small",
    s: "Small",
    m: "Medium",
    l: "Large",
    xl: "X-Large",
  },
  border: {
    xs: "X-Small",
    sm: "Small",
    md: "Medium",
    lg: "Large",
  },
  "border-radius": {
    xs: "Rounded",
    md: "Rounder",
    xl: "Roundest",
  },
  "box-shadow": {
    sm: "Drop shadow",
  },
  "design-treatment": {
    // heading treatments
    vert: "Vertical line",
    "horz-10p": "Horizontal line 10%",
    "horz-25p": "Horizontal line 25%",
    "horz-50p": "Horizontal line 50%",
    "horz-full": "Horizontal line 100%",
    "horz-md": "Horizontal line Medium",
    "horz-lg": "Horizontal line Large",
    bg: "Background color",
    // text treatment
    "dropCap-sm": "Drop Cap - Small",
    "dropCap-md": "Drop Cap - Medium",
    "dropCap-lg": "Drop Cap - Large",
  },
  "font-family": {
    primary: "Roboto",
    secondary: "Roboto Slab",
    navigation: "Roboto Condensed",
  },
  "font-weight": {
    light: "Light",
    medium: "Medium",
    bold: "Bold",
  },
  "font-size": {
    "3xs": "Smaller",
    s: "Large",
    m: "Larger",
    l: "Largest",
  },
  "instructional-action": learningComponentTypes$1,
};

// ensure we get keys back in the right format
function HAXOptionSampleFactory$1(type) {
  return Object.keys(ApplicationAttributeData$1[type]).map((key) => {
    return {
      value: key,
      html: ["primary", "accent"].includes(type)
        ? b$2`<d-d-d-sample
            @click="${updatePreviewColorVar$1}"
            type="${type}"
            option="${key}"
          ></d-d-d-sample>`
        : b$2`<d-d-d-sample type="${type}" option="${key}"></d-d-d-sample>`,
    };
  });
}

function updatePreviewColorVar$1(e) {
  let target = e.target;
  globalThis.document.body.style.setProperty(
    `--ddd-sample-theme-${target.type}`,
    `var(--ddd-${target.type}-${target.option})`,
  );
}

// attributes need to be driven from a cannonical list
// @note this may need ways of overriding it in the future but at least
// we've consolidated everything into one place for these small design mods
const instructionalStyles$1 = Object.keys(learningComponentColors$1).map(
  (item) => {
    let color = learningComponentColors$1[item];
    return i$7`
      [data-instructional-action="${r$5(item)}"] {
        --instructional-action-color: var(
          --simple-colors-default-theme-${r$5(color)}-8,
          ${r$5(color)}
        );
      }

      [data-instructional-action="${r$5(item)}"]::before {
        -webkit-mask-image: url("${r$5(
          SimpleIconsetStore$1.getIcon(iconFromPageType$1(item)),
        )}");
      }
    `;
  },
);

/* Logical Gaps:
  Heading colors; sizes; letter spacing; line height
  When to use chevron > with links?
  gradients need to be rotated (sometimes?)
  When to use // after headers?
*/
// fonts used
const DDDFonts$1 = [
  "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap",
  "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700;900&display=swap",
  "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;700;900&display=swap",
];
// CSS variables which is most of the system needed
const DDDVariables$1 = i$7`
  :root,
  :host {
    /* base colors */
    --ddd-theme-default-beaverBlue: #1e407c;
    --ddd-theme-default-beaver70: rgba(30, 64, 124, 0.7);
    --ddd-theme-default-beaver80: rgba(30, 64, 124, 0.8);
    --ddd-theme-default-landgrantBrown: #6a3028;
    --ddd-theme-default-nittanyNavy: #001e44;
    --ddd-theme-default-navy40: rgba(0, 30, 68, 0.4);
    --ddd-theme-default-navy60: rgba(0, 30, 68, 0.6);
    --ddd-theme-default-navy65: rgba(0, 30, 68, 0.65);
    --ddd-theme-default-navy70: rgba(0, 30, 68, 0.7);
    --ddd-theme-default-navy80: rgba(0, 30, 68, 0.8);
    --ddd-theme-default-black: #000000;
    --ddd-theme-default-potentialMidnight: #000321;
    --ddd-theme-default-potential0: rgba(0, 3, 33, 0);
    --ddd-theme-default-potential50: rgba(0, 3, 33, 0.5);
    --ddd-theme-default-potential70: rgba(0, 3, 33, 0.7);
    --ddd-theme-default-potential75: rgba(0, 3, 33, 0.75);
    --ddd-theme-default-pughBlue: #96bee6;
    --ddd-theme-default-coalyGray: #262626;
    --ddd-theme-default-keystoneYellow: #ffd100;
    --ddd-theme-default-slateGray: #314d64;
    --ddd-theme-default-slateLight: #ccdae6;
    --ddd-theme-default-slateMaxLight: #eef3f7;
    --ddd-theme-default-skyBlue: #009cde;
    --ddd-theme-default-skyLight: #ccf0ff;
    --ddd-theme-default-skyMaxLight: #e6f7ff;
    --ddd-theme-default-limestoneGray: #a2aaad;
    --ddd-theme-default-limestoneLight: #e4e5e7;
    --ddd-theme-default-limestoneMaxLight: #f2f2f4;
    --ddd-theme-default-white: #ffffff;
    --ddd-theme-default-shrineLight: #f7f2ee;
    --ddd-theme-default-shrineMaxLight: #fdfbf5;
    --ddd-theme-default-creekTeal: #3ea39e;
    --ddd-theme-default-creekLight: #cfeceb;
    --ddd-theme-default-creekMaxLight: #edf8f7;
    --ddd-theme-default-shrineTan: #b88965;
    --ddd-theme-default-roarGolden: #bf8226;
    --ddd-theme-default-roarLight: #f9eddc;
    --ddd-theme-default-roarMaxlight: #fffaf2;
    --ddd-theme-default-forestGreen: #4a7729;
    --ddd-theme-default-athertonViolet: #ac8dce;
    --ddd-theme-default-original87Pink: #bc204b;
    --ddd-theme-default-discoveryCoral: #f2665e;
    --ddd-theme-default-futureLime: #99cc00;
    --ddd-theme-default-wonderPurple: #491d70;
    --ddd-theme-default-inventOrange: #e98300;
    --ddd-theme-default-opportunityGreen: #008755;
    --ddd-theme-default-globalNeon: #ebff00;
    --ddd-theme-default-accent: #96bee6;
    --ddd-theme-default-white85: rgba(255, 255, 255, 0.85);
    --ddd-theme-default-white65: rgba(255, 255, 255, 0.65);

    /* 
  base colors, cannot be modified by user; SimpleColors hijacks this
  
  Theme level color, components pick up hues of theme color
  
  User can override these colors with their own theme colors
  */

    /* functional colors */
    --ddd-theme-default-link: #005fa9;
    --ddd-theme-default-link80: rgba(0, 95, 169, 0.8);
    --ddd-theme-default-linkLight: #cce9ff;
    --ddd-theme-default-disabled: #f4f4f4;
    --ddd-theme-default-error: #5f2120;
    --ddd-theme-default-errorLight: #fdeded;
    --ddd-theme-default-warning: #663c00;
    --ddd-theme-default-warningLight: #fff4e5;
    --ddd-theme-default-info: #014361;
    --ddd-theme-default-infoLight: #e5f6fd;
    --ddd-theme-default-success: #1e4620;
    --ddd-theme-default-successLight: #edf7ed;
    --ddd-theme-default-alertImmediate: #f8d3de;
    --ddd-theme-default-alertUrgent: #fff6cc;
    --ddd-theme-default-alertAllClear: #f2ffcc;
    --ddd-theme-default-alertNonEmergency: #e6f7ff;
    --ddd-theme-default-background: #eff2f5;

    /* DDDSpecific: Define primary colors in RGB for use in rgba() */
    --ddd-primary-0-rgb: 150, 190, 230, 0.7; /* Pugh Blue */
    --ddd-primary-1-rgb: 30, 64, 124; /* Beaver Blue */
    --ddd-primary-2-rgb: 0, 30, 68; /* Nittany Navy */
    --ddd-primary-3-rgb: 0, 3, 33; /* Potential Midnight */
    --ddd-primary-4-rgb: 38, 38, 38; /* Coaly Gray */
    --ddd-primary-5-rgb: 162, 170, 173; /* Limestone Gray */
    --ddd-primary-6-rgb: 49, 77, 100; /* Slate Gray */
    --ddd-primary-7-rgb: 62, 163, 158; /* Creek Teal */
    --ddd-primary-8-rgb: 0, 156, 222; /* Sky Blue */
    --ddd-primary-9-rgb: 184, 137, 101; /* Shrine Tan */
    --ddd-primary-10-rgb: 191, 130, 38; /* Roar Golden */
    --ddd-primary-11-rgb: 188, 32, 75, 0.7; /* Original 87 Pink */
    --ddd-primary-12-rgb: 242, 102, 94; /* Discovery Coral */
    --ddd-primary-13-rgb: 73, 29, 112; /* Wonder Purple */
    --ddd-primary-14-rgb: 172, 141, 206; /* Atherton Violet */
    --ddd-primary-15-rgb: 233, 131, 0; /* Invent Orange */
    --ddd-primary-16-rgb: 255, 209, 0; /* Keystone Yellow */
    --ddd-primary-17-rgb: 0, 135, 85; /* Opportunity Green */
    --ddd-primary-18-rgb: 153, 204, 0; /* Future Lime */
    --ddd-primary-19-rgb: 74, 119, 41; /* Forest Green */
    --ddd-primary-20-rgb: 106, 48, 40; /* Landgrant Brown */
    --ddd-primary-21-rgb: 235, 255, 0; /* Global Neon */
    --ddd-primary-22-rgb: 95, 33, 32; /* Error */
    --ddd-primary-23-rgb: 102, 60, 0; /* Warning */
    --ddd-primary-24-rgb: 1, 67, 97; /* Info */
    --ddd-primary-25-rgb: 30, 70, 32; /* Success */

    /* primary colors */
    --ddd-primary-0: var(
      --ddd-theme-default-pughBlue
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-1: var(
      --ddd-theme-default-beaverBlue
    ); /* not enough contrast to black */
    --ddd-primary-2: var(
      --ddd-theme-default-nittanyNavy
    ); /* not enough contrast to black */
    --ddd-primary-3: var(
      --ddd-theme-default-potentialMidnight
    ); /* not enough contrast to black */
    --ddd-primary-4: var(
      --ddd-theme-default-coalyGray
    ); /* not enough contrast to black */
    --ddd-primary-5: var(
      --ddd-theme-default-limestoneGray
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-6: var(
      --ddd-theme-default-slateGray
    ); /* not enough contrast to black */
    --ddd-primary-7: var(
      --ddd-theme-default-creekTeal
    ); /* not enough contrast to accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-8: var(
      --ddd-theme-default-skyBlue
    ); /* not enough contrast to accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-9: var(
      --ddd-theme-default-shrineTan
    ); /* not enough contrast to accent-5 3, 1*/
    --ddd-primary-10: var(
      --ddd-theme-default-roarGolden
    ); /* not enough contrast to accent-0, accent-1, accent-2 */
    --ddd-primary-11: var(--ddd-theme-default-original87Pink);
    --ddd-primary-12: var(
      --ddd-theme-default-discoveryCoral
    ); /* not enough contrast to accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-13: var(
      --ddd-theme-default-wonderPurple
    ); /* not enough contrast to black */
    --ddd-primary-14: var(
      --ddd-theme-default-athertonViolet
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-15: var(
      --ddd-theme-default-inventOrange
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-16: var(
      --ddd-theme-default-keystoneYellow
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-17: var(--ddd-theme-default-opportunityGreen);
    --ddd-primary-18: var(
      --ddd-theme-default-futureLime
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-19: var(--ddd-theme-default-forestGreen);
    --ddd-primary-20: var(
      --ddd-theme-default-landgrantBrown
    ); /* not enough contrast to black */
    --ddd-primary-21: var(
      --ddd-theme-default-globalNeon
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-22: var(--ddd-theme-default-error);
    --ddd-primary-23: var(--ddd-theme-default-warning);
    --ddd-primary-24: var(--ddd-theme-default-info);
    --ddd-primary-25: var(--ddd-theme-default-success);

    /* accent colors */

    --ddd-accent-0: var(--ddd-theme-default-skyMaxLight);
    --ddd-accent-1: var(--ddd-theme-default-slateMaxLight);
    --ddd-accent-2: var(--ddd-theme-default-limestoneMaxLight);
    --ddd-accent-3: var(--ddd-theme-default-shrineMaxLight);
    --ddd-accent-4: var(--ddd-theme-default-roarMaxlight);
    --ddd-accent-5: var(--ddd-theme-default-creekMaxLight);
    --ddd-accent-6: var(--ddd-theme-default-white);
    --ddd-accent-7: var(--ddd-theme-default-errorLight);
    --ddd-accent-8: var(--ddd-theme-default-warningLight);
    --ddd-accent-9: var(--ddd-theme-default-infoLight);
    --ddd-accent-10: var(--ddd-theme-default-successLight);
    --ddd-accent-11: var(--ddd-theme-default-alertImmediate);
    --ddd-accent-12: var(--ddd-theme-default-alertUrgent);
    --ddd-accent-13: var(--ddd-theme-default-alertAllClear);
    --ddd-accent-14: var(--ddd-theme-default-alertNonEmergency);

    /*fonts*/
    --ddd-font-primary: "Roboto", "Franklin Gothic Medium", Tahoma, sans-serif;
    --ddd-font-secondary: "Roboto Slab", serif;
    --ddd-font-navigation: "Roboto Condensed", sans-serif; /* navigation font */

    /* font weights - generalized */
    --ddd-font-weight-light: 300;
    --ddd-font-weight-regular: 400; /* default weight for body */
    --ddd-font-weight-medium: 500;
    --ddd-font-weight-bold: 700; /* default weight for headers */
    --ddd-font-weight-black: 900;

    /* font sizes */
    --ddd-font-size-6xs: 12px;
    --ddd-font-size-5xs: 14px;
    --ddd-font-size-4xs: 16px;
    --ddd-font-size-3xs: 18px; /* body default */
    --ddd-font-size-xxs: 20px; /* h6 */
    --ddd-font-size-xs: 22px; /* h5 */
    --ddd-font-size-s: 24px; /* h4 */
    --ddd-font-size-ms: 28px; /* h3 */
    --ddd-font-size-m: 32px; /* h2 */
    --ddd-font-size-ml: 36px;
    --ddd-font-size-l: 40px; /* h1 */
    --ddd-font-size-xl: 48px;
    --ddd-font-size-xxl: 56px;
    --ddd-font-size-3xl: 64px;
    --ddd-font-size-4xl: 72px;

    --ddd-font-size-type1-s: 80px;
    --ddd-font-size-type1-m: 150px;
    --ddd-font-size-type1-l: 200px;

    /* global override font styles for light-dom content */
    --ddd-theme-h1-font-size: var(--ddd-font-size-l);
    --ddd-theme-h2-font-size: var(--ddd-font-size-m);
    --ddd-theme-h3-font-size: var(--ddd-font-size-ms);
    --ddd-theme-h4-font-size: var(--ddd-font-size-s);
    --ddd-theme-h5-font-size: var(--ddd-font-size-xs);
    --ddd-theme-h6-font-size: var(--ddd-font-size-xxs);
    --ddd-theme-body-font-size: var(--ddd-font-size-xxs);

    /* letter spacing */
    --ddd-ls-16-sm: 0.08px;
    --ddd-ls-18-sm: 0.09px;
    --ddd-ls-20-sm: 0.1px;
    --ddd-ls-22-sm: 0.11px;
    --ddd-ls-24-sm: 0.12px;
    --ddd-ls-28-sm: 0.14px;
    --ddd-ls-32-sm: 0.16px;
    --ddd-ls-36-sm: 0.18px;
    --ddd-ls-40-sm: 0.2px;
    --ddd-ls-48-sm: 0.24px;
    --ddd-ls-56-sm: 0.28px;
    --ddd-ls-64-sm: 0.32px;
    --ddd-ls-72-sm: 0.36px;
    --ddd-ls-16-lg: 0.24px;
    --ddd-ls-18-lg: 0.27px;
    --ddd-ls-20-lg: 0.3px;
    --ddd-ls-22-lg: 0.33px;
    --ddd-ls-24-lg: 0.36px;
    --ddd-ls-28-lg: 0.42px;
    --ddd-ls-32-lg: 0.48px;
    --ddd-ls-36-lg: 0.54px;
    --ddd-ls-40-lg: 0.6px;
    --ddd-ls-48-lg: 0.72px;
    --ddd-ls-56-lg: 0.84px;
    --ddd-ls-64-lg: 0.96px;
    --ddd-ls-72-lg: 1.08px;

    /* line height */
    --ddd-lh-120: 120%;
    --ddd-lh-140: 140%;
    --ddd-lh-150: 150%;

    /* spacing */
    --ddd-spacing-0: 0px;
    --ddd-spacing-1: 4px; /*  body default */
    --ddd-spacing-2: 8px;
    --ddd-spacing-3: 12px; /* h6 */
    --ddd-spacing-4: 16px; /* h5 */
    --ddd-spacing-5: 20px; /* h4 */
    --ddd-spacing-6: 24px; /* h3 */
    --ddd-spacing-7: 28px; /* h2 */
    --ddd-spacing-8: 32px; /* h1 */
    --ddd-spacing-9: 36px;
    --ddd-spacing-10: 40px;
    --ddd-spacing-11: 44px;
    --ddd-spacing-12: 48px;
    --ddd-spacing-13: 52px;
    --ddd-spacing-14: 56px;
    --ddd-spacing-15: 60px;
    --ddd-spacing-16: 64px;
    --ddd-spacing-17: 68px;
    --ddd-spacing-18: 72px;
    --ddd-spacing-19: 76px;
    --ddd-spacing-20: 80px;
    --ddd-spacing-21: 84px;
    --ddd-spacing-22: 88px;
    --ddd-spacing-23: 92px;
    --ddd-spacing-24: 96px;
    --ddd-spacing-25: 100px;
    --ddd-spacing-26: 104px;
    --ddd-spacing-27: 108px;
    --ddd-spacing-28: 112px;
    --ddd-spacing-29: 116px;
    --ddd-spacing-30: 120px;

    /* borders */
    --ddd-border-xs: 1px solid var(--ddd-theme-default-limestoneLight);
    --ddd-border-sm: 2px solid var(--ddd-theme-default-limestoneLight);
    --ddd-border-md: 3px solid var(--ddd-theme-default-limestoneLight);
    --ddd-border-lg: 4px solid var(--ddd-theme-default-limestoneLight);

    --ddd-border-size-xs: 1px;
    --ddd-border-size-sm: 2px;
    --ddd-border-size-md: 3px;
    --ddd-border-size-lg: 4px;

    --ddd-theme-header-border-thickness-0: 0px;
    --ddd-theme-header-border-thickness-xs: 1px;
    --ddd-theme-header-border-thickness-sm: 2px;
    --ddd-theme-header-border-thickness-md: 3px;
    --ddd-theme-header-border-thickness-lg: 4px;

    --ddd-theme-header-border-treatment-0: 0px;
    --ddd-theme-header-border-treatment-10p: 10%; /* good */
    --ddd-theme-header-border-treatment-25p: 25%; /* good */
    --ddd-theme-header-border-treatment-50p: 50%; /* good */
    --ddd-theme-header-border-treatment-75p: 75%;
    --ddd-theme-header-border-treatment-full: 100%; /* good */
    --ddd-theme-header-border-treatment-sm: 28px;
    --ddd-theme-header-border-treatment-md: 56px; /* good */
    --ddd-theme-header-border-treatment-lg: 84px; /* good */

    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-lg
    );
    --ddd-theme-header-border-color: var(--ddd-theme-primary);
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-lg
    );

    /* ===========================================
       BOX SHADOWS
       Elevation system for depth and hierarchy
       Usage: box-shadow: var(--ddd-boxShadow-md);
       =========================================== */
    --ddd-boxShadow-0: 0px 0px 0px 0px rgba(0, 0, 0, 0); /* No shadow */
    --ddd-boxShadow-sm: rgba(0, 3, 33, 0.1) 0px 4px 8px 0px; /* Subtle elevation */
    --ddd-boxShadow-md: rgba(0, 3, 33, 0.15) 0px 8px 16px 0px; /* Standard elevation */
    --ddd-boxShadow-lg: rgba(0, 3, 33, 0.2) 0px 12px 24px 0px; /* High elevation */
    --ddd-boxShadow-xl: rgba(0, 3, 33, 0.25) 0px 16px 32px 0px; /* Maximum elevation */

    /* ===========================================
       BREAKPOINTS
       Responsive design breakpoints
       Usage: @media (min-width: var(--ddd-breakpoint-md)) { ... }
       =========================================== */
    --ddd-breakpoint-sm: 360px; /* Small devices (phones) */
    --ddd-breakpoint-md: 768px; /* Medium devices (tablets) */
    --ddd-breakpoint-lg: 1080px; /* Large devices (laptops) */
    --ddd-breakpoint-xl: 1440px; /* Extra large devices (desktops) */

    /* ===========================================
       BORDER RADIUS
       Corner rounding for consistent shape language
       Usage: border-radius: var(--ddd-radius-md);
       =========================================== */
    --ddd-radius-0: 0px; /* Sharp corners */
    --ddd-radius-xs: 4px; /* Subtle rounding */
    --ddd-radius-sm: 8px; /* Small rounding */
    --ddd-radius-md: 12px; /* Medium rounding */
    --ddd-radius-lg: 16px; /* Large rounding */
    --ddd-radius-xl: 20px; /* Extra large rounding */
    --ddd-radius-rounded: 100px; /* Pill shape */
    --ddd-radius-circle: 100%; /* Perfect circle */

    /* ===========================================
       GRADIENTS
       Pre-defined gradient patterns for consistent theming
       Usage: background: var(--ddd-theme-default-gradient-navBar);
       =========================================== */
    --ddd-theme-default-gradient-navBar: linear-gradient(
      90deg,
      rgb(0, 30, 68) 0%,
      rgb(0, 30, 68) 31%,
      rgb(30, 64, 124) 76%,
      rgb(0, 3, 33) 100%
    );
    --ddd-theme-default-gradient-footer: linear-gradient(
      rgb(30, 64, 124) 0%,
      rgb(0, 30, 68) 65%,
      rgb(0, 30, 68) 100%
    );
    --ddd-theme-default-gradient-newsFeature: linear-gradient(
      360deg,
      rgb(30, 64, 124) 20%,
      rgb(0, 156, 222) 100%
    );
    --ddd-theme-default-gradient-buttons: linear-gradient(
      rgb(0, 156, 222) 0%,
      rgb(30, 64, 124) 85%
    );
    --ddd-theme-default-gradient-hero: linear-gradient(
      360deg,
      rgba(0, 30, 68, 0.8) 0%,
      rgba(0, 30, 68, 0.4) 50%,
      rgba(0, 3, 33, 0) 100%
    );
    --ddd-theme-default-gradient-hero2: linear-gradient(
      360deg,
      rgb(0, 30, 68) 0%,
      rgba(0, 30, 68, 0.4) 50%,
      rgba(0, 3, 33, 0) 100%
    );
    --ddd-theme-default-gradient-antihero: linear-gradient(
      180deg,
      rgba(0, 30, 68, 0.8) 0%,
      rgba(0, 30, 68, 0.4) 50%,
      rgba(0, 3, 33, 0) 100%
    );
    --ddd-theme-default-gradient-antihero2: linear-gradient(
      180deg,
      rgb(0, 30, 68) 0%,
      rgba(0, 30, 68, 0.4) 50%,
      rgba(0, 3, 33, 0) 100%
    );

    /* ===========================================
       ICON SIZING
       Standard icon dimensions for consistent UI
       Usage: width: var(--ddd-icon-md); height: var(--ddd-icon-md);
       =========================================== */
    --ddd-icon-4xs: 16px; /* Ultra-tiny icons (micro indicators, status dots) */
    --ddd-icon-3xs: 20px; /* Tiny icons (badges, indicators) */
    --ddd-icon-xxs: 24px; /* Small inline icons */
    --ddd-icon-xs: 32px; /* Default inline icons */
    --ddd-icon-sm: 40px; /* Button icons */
    --ddd-icon-md: 48px; /* Navigation icons */
    --ddd-icon-lg: 56px; /* Header icons */
    --ddd-icon-xl: 64px; /* Feature icons */
    --ddd-icon-2xl: 72px; /* Hero icons */
    --ddd-icon-3xl: 84px; /* Large decorative icons */
    --ddd-icon-4xl: 96px; /* Massive hero icons */

    /* ===========================================
       Z-INDEX SCALE
       Layering system for proper element stacking
       Usage: z-index: var(--ddd-z-modal);
       =========================================== */
    --ddd-z-base: 0; /* Base layer */
    --ddd-z-dropdown: 100; /* Dropdown menus */
    --ddd-z-sticky: 200; /* Sticky positioned elements */
    --ddd-z-overlay: 300; /* Background overlays */
    --ddd-z-modal: 10000; /* Modal dialogs and critical UI */
    --ddd-z-tooltip: 500; /* Tooltips and popovers */

    /* ===========================================
       OPACITY SCALE
       Standardized transparency values (base 4)
       Usage: opacity: var(--ddd-opacity-60);
       =========================================== */
    --ddd-opacity-0: 0; /* Fully transparent */
    --ddd-opacity-20: 0.2; /* Very light */
    --ddd-opacity-40: 0.4; /* Light */
    --ddd-opacity-60: 0.6; /* Medium */
    --ddd-opacity-80: 0.8; /* Strong */
    --ddd-opacity-100: 1; /* Fully opaque */

    /* ===========================================
       ANIMATION TIMING
       Standard animation and transition durations
       Usage: transition: all var(--ddd-duration-normal) var(--ddd-timing-ease);
       =========================================== */
    --ddd-duration-fast: 150ms; /* Quick interactions (2x speed) */
    --ddd-duration-normal: 300ms; /* Standard transitions */
    --ddd-duration-slow: 600ms; /* Slow transitions (1/2 speed) */
    --ddd-timing-ease: cubic-bezier(
      0.4,
      0,
      0.2,
      1
    ); /* Material design easing */

    /* ===========================================
       FOCUS SYSTEM
       Standardized focus indicators for accessibility
       Usage: outline: var(--ddd-focus-ring); outline-offset: var(--ddd-focus-offset);
       =========================================== */
    --ddd-focus-ring: 2px solid var(--ddd-theme-default-link); /* Focus ring style */
    --ddd-focus-offset: 2px; /* Focus ring offset distance */

    --simple-modal-content-container-color: light-dark(
      var(--ddd-primary-4),
      var(--ddd-accent-6)
    );
    --simple-modal-content-container-background: light-dark(
      var(--ddd-accent-6),
      var(--ddd-primary-4)
    );

    --simple-tooltip-opacity: 1;
    --simple-tooltip-delay-in: 0;
    --simple-tooltip-duration-in: 300ms;
    --simple-tooltip-duration-out: 0;
    --simple-tooltip-border-radius: 0;
    --simple-tooltip-font-size: var(--ddd-font-size-4xs);
  }
`;
// global styles from the design system. Not a reset so much as how DDD likes to present defaults
const DDDGlobalStyles$1 = i$7`
  :root {
    color-scheme: light dark;
    scroll-behavior: smooth;
    font-family: var(--ddd-font-primary);
    font-size: var(--ddd-theme-body-font-size);
    font-weight: var(--ddd-font-weight-regular);
    letter-spacing: normal;
  }

  body.dark-mode {
    color-scheme: only dark;
  }
`;
/* Data Attributes used by HAX */
const DDDDataAttributes$1 = [
  i$7`
    /* basic width operation, not great but not terrible */
    @media (min-width: 600px) {
      [data-width="25"] {
        width: 25%;
      }
      [data-width="50"] {
        width: 50%;
      }
      [data-width="75"] {
        width: 75%;
      }
      [data-width="100"] {
        width: 100%;
      }
    }

    /* Float positioning for larger devices */
    @media (min-width: 1440px) {
      [data-float-position="left"] {
        float: left;
        margin: var(--ddd-spacing-8) var(--ddd-spacing-8) 0 var(--ddd-spacing-4);
      }
      [data-float-position="right"] {
        float: right;
        margin: var(--ddd-spacing-8) var(--ddd-spacing-4) 0 var(--ddd-spacing-8);
      }
      [data-hax-ray][data-float-position]:focus-within::after,
      [data-hax-ray][data-float-position]:hover::after {
        content: "Floating item";
        position: absolute;
        white-space: nowrap;
        font-style: normal;
        position: absolute;
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        color: var(
          --ddd-theme-font-color,
          var(--ddd-theme-default-white, #fff)
        );
        background-color: var(
          --ddd-theme-default-info,
          rgba(175, 184, 193, 0.2)
        );
        font-size: var(--ddd-theme-body-font-size);
        font-weight: var(--ddd-font-weight-regular);
        border-radius: var(--ddd-radius-xs);
        right: var(--ddd-spacing-4);
        left: unset;
        margin-top: -16px;
      }
      [data-hax-ray][data-float-position="left"]:focus-within::after,
      [data-hax-ray][data-float-position="left"]:hover::after {
        left: var(--ddd-spacing-4);
        right: unset;
      }
    }

    /* basic text operations, not DDD specific persay */
    [data-text-align="left"] {
      text-align: left;
    }
    [data-text-align="center"] {
      text-align: center;
    }
    [data-text-align="right"] {
      text-align: right;
    }
    [data-text-align="justify"] {
      text-align: justify;
    }

    [data-primary] {
      --lowContrast-override: unset;
      --ddd-theme-bgContrast: unset;
      --ddd-theme-primary: var(--ddd-primary-0);
    }
    [data-primary="0"] {
      --ddd-theme-primary: var(--ddd-primary-0);
      --lowContrast-override: black;
    }
    [data-primary="1"] {
      --ddd-theme-primary: var(--ddd-primary-1);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="2"] {
      --ddd-theme-primary: var(--ddd-primary-2);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="3"] {
      --ddd-theme-primary: var(--ddd-primary-3);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="4"] {
      --ddd-theme-primary: var(--ddd-primary-4);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="5"] {
      --ddd-theme-primary: var(--ddd-primary-5);
      --lowContrast-override: black;
    }
    [data-primary="6"] {
      --ddd-theme-primary: var(--ddd-primary-6);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="7"] {
      --ddd-theme-primary: var(--ddd-primary-7);
      --lowContrast-override: black;
    }
    [data-primary="8"] {
      --ddd-theme-primary: var(--ddd-primary-8);
      --lowContrast-override: black;
    }
    [data-primary="9"] {
      --ddd-theme-primary: var(--ddd-primary-9);
      --lowContrast-override: black;
    }
    [data-primary="10"] {
      --ddd-theme-primary: var(--ddd-primary-10);
      --lowContrast-override: black;
    }
    [data-primary="11"] {
      --ddd-theme-primary: var(--ddd-primary-11);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="12"] {
      --ddd-theme-primary: var(--ddd-primary-12);
      --lowContrast-override: black;
    }
    [data-primary="13"] {
      --ddd-theme-primary: var(--ddd-primary-13);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="14"] {
      --ddd-theme-primary: var(--ddd-primary-14);
      --lowContrast-override: black;
    }
    [data-primary="15"] {
      --ddd-theme-primary: var(--ddd-primary-15);
      --lowContrast-override: black;
    }
    [data-primary="16"] {
      --ddd-theme-primary: var(--ddd-primary-16);
      --lowContrast-override: black;
    }
    [data-primary="17"] {
      --ddd-theme-primary: var(--ddd-primary-17);
      --lowContrast-override: black;
    }
    [data-primary="18"] {
      --ddd-theme-primary: var(--ddd-primary-18);
      --lowContrast-override: black;
    }
    [data-primary="19"] {
      --ddd-theme-primary: var(--ddd-primary-19);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="20"] {
      --ddd-theme-primary: var(--ddd-primary-20);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="21"] {
      --ddd-theme-primary: var(--ddd-primary-21);
      --lowContrast-override: black;
    }
    [data-primary="22"] {
      --ddd-theme-primary: var(--ddd-primary-22);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="23"] {
      --ddd-theme-primary: var(--ddd-primary-23);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="24"] {
      --ddd-theme-primary: var(--ddd-primary-24);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="25"] {
      --ddd-theme-primary: var(--ddd-primary-25);
      --ddd-theme-bgContrast: white;
    }

    /* accent color */
    [data-accent] {
      --ddd-theme-colorContrast: black;
    }
    [data-accent="0"] {
      --ddd-theme-accent: var(--ddd-accent-0);
    }
    [data-accent="1"] {
      --ddd-theme-accent: var(--ddd-accent-1);
    }
    [data-accent="2"] {
      --ddd-theme-accent: var(--ddd-accent-2);
    }
    [data-accent="3"] {
      --ddd-theme-accent: var(--ddd-accent-3);
    }
    [data-accent="4"] {
      --ddd-theme-accent: var(--ddd-accent-4);
    }
    [data-accent="5"] {
      --ddd-theme-accent: var(--ddd-accent-5);
    }
    [data-accent="6"] {
      --ddd-theme-accent: var(--ddd-accent-6);
    }
    [data-accent="7"] {
      --ddd-theme-accent: var(--ddd-accent-7);
    }
    [data-accent="8"] {
      --ddd-theme-accent: var(--ddd-accent-8);
    }
    [data-accent="9"] {
      --ddd-theme-accent: var(--ddd-accent-9);
    }
    [data-accent="10"] {
      --ddd-theme-accent: var(--ddd-accent-10);
    }
    [data-accent="11"] {
      --ddd-theme-accent: var(--ddd-accent-11);
    }
    [data-accent="12"] {
      --ddd-theme-accent: var(--ddd-accent-12);
    }
    [data-accent="13"] {
      --ddd-theme-accent: var(--ddd-accent-13);
    }
    [data-accent="14"] {
      --ddd-theme-accent: var(--ddd-accent-14);
    }

    [data-primary="19"][data-accent="11"],
    [data-primary="11"][data-accent="11"] {
      --lowContrast-override: black;
    }

    /* font family */

    [data-font-family="primary"] {
      font-family: var(--ddd-font-primary);
    }
    [data-font-family="secondary"] {
      font-family: var(--ddd-font-secondary);
    }
    [data-font-family="navigation"] {
      font-family: var(--ddd-font-navigation);
    }

    /* font weight */

    [data-font-weight="light"] {
      font-weight: var(--ddd-font-weight-light);
    }
    [data-font-weight="regular"] {
      font-weight: var(--ddd-font-weight-regular);
    }
    [data-font-weight="medium"] {
      font-weight: var(--ddd-font-weight-medium);
    }
    [data-font-weight="bold"] {
      font-weight: var(--ddd-font-weight-bold);
    }
    [data-font-weight="black"] {
      font-weight: var(--ddd-font-weight-black);
    }

    /* font size */
    /* normal line height if we are letting use mess w/ font size */
    [data-font-size] {
      line-height: normal;
    }
    [data-font-size="6xs"] {
      font-size: var(--ddd-font-size-6xs);
    }
    [data-font-size="5xs"] {
      font-size: var(--ddd-font-size-5xs);
    }
    [data-font-size="4xs"] {
      font-size: var(--ddd-font-size-4xs);
    }
    [data-font-size="3xs"] {
      font-size: var(--ddd-font-size-3xs);
    }
    [data-font-size="xxs"] {
      font-size: var(--ddd-font-size-xxs);
    }
    [data-font-size="xs"] {
      font-size: var(--ddd-font-size-xs);
    }
    [data-font-size="s"] {
      font-size: var(--ddd-font-size-s);
    }
    [data-font-size="ms"] {
      font-size: var(--ddd-font-size-ms);
    }
    [data-font-size="m"] {
      font-size: var(--ddd-font-size-m);
    }
    [data-font-size="ml"] {
      font-size: var(--ddd-font-size-ml);
    }
    [data-font-size="l"] {
      font-size: var(--ddd-font-size-l);
    }
    [data-font-size="xl"] {
      font-size: var(--ddd-font-size-xl);
    }
    [data-font-size="xxl"] {
      font-size: var(--ddd-font-size-xxl);
    }
    [data-font-size="3xl"] {
      font-size: var(--ddd-font-size-3xl);
    }
    [data-font-size="4xl"] {
      font-size: var(--ddd-font-size-4xl);
    }
    [data-font-size="type1-s"] {
      font-size: var(--ddd-font-size-type1-s);
    }
    [data-font-size="type1-m"] {
      font-size: var(--ddd-font-size-type1-m);
    }
    [data-font-size="type1-l"] {
      font-size: var(--ddd-font-size-type1-l);
    }
    /* padding spacing in content, only apply above small screens */
    @media (min-width: 600px) {
      [data-design-treatment="bg"][data-padding="xs"],
      [data-accent][data-padding="xs"],
      [data-padding="xs"] {
        padding: var(--ddd-spacing-2);
      }
      [data-design-treatment="bg"][data-padding="s"],
      [data-accent][data-padding="s"],
      [data-padding="s"] {
        padding: var(--ddd-spacing-4);
      }
      [data-design-treatment="bg"][data-padding="m"],
      [data-accent][data-padding="m"],
      [data-padding="m"] {
        padding: var(--ddd-spacing-8);
      }
      [data-design-treatment="bg"][data-padding="l"],
      [data-accent][data-padding="l"],
      [data-padding="l"] {
        padding: var(--ddd-spacing-12);
      }
      [data-design-treatment="bg"][data-padding="xl"],
      [data-accent][data-padding="xl"],
      [data-padding="xl"] {
        padding: var(--ddd-spacing-16);
      }
      /* margin spacing */
      [data-margin="center"] {
        margin-left: auto;
        margin-right: auto;
      }
      [data-margin="xs"] {
        margin: var(--ddd-spacing-2);
      }
      [data-margin="s"] {
        margin: var(--ddd-spacing-4);
      }
      [data-margin="m"] {
        margin: var(--ddd-spacing-8);
      }
      [data-margin="l"] {
        margin: var(--ddd-spacing-12);
      }
      [data-margin="xl"] {
        margin: var(--ddd-spacing-16);
      }
    }

    /* border width */
    p[data-border],
    blockquote[data-border],
    ol[data-border],
    ul[data-border],
    div[data-border] [data-border] {
      border-color: var(--ddd-theme-primary);
    }
    [data-border="xs"] {
      border: var(--ddd-border-xs);
      --ddd-theme-border-size: var(--ddd-border-size-xs);
    }
    [data-border="sm"] {
      border: var(--ddd-border-sm);
      --ddd-theme-border-size: var(--ddd-border-size-sm);
    }
    [data-border="md"] {
      border: var(--ddd-border-md);
      --ddd-theme-border-size: var(--ddd-border-size-md);
    }
    [data-border="lg"] {
      border: var(--ddd-border-lg);
      --ddd-theme-border-size: var(--ddd-border-size-lg);
    }

    /* border-radius */
    [data-border-radius="xs"] {
      border-radius: var(--ddd-radius-xs);
    }
    [data-border-radius="sm"] {
      border-radius: var(--ddd-radius-sm);
    }
    [data-border-radius="md"] {
      border-radius: var(--ddd-radius-md);
    }
    [data-border-radius="lg"] {
      border-radius: var(--ddd-radius-lg);
    }
    [data-border-radius="xl"] {
      border-radius: var(--ddd-radius-xl);
    }

    /* box-shadow */
    [data-box-shadow="sm"] {
      box-shadow: var(--ddd-boxShadow-sm);
    }
    [data-box-shadow="md"] {
      box-shadow: var(--ddd-boxShadow-md);
    }
    [data-box-shadow="lg"] {
      box-shadow: var(--ddd-boxShadow-lg);
    }
    [data-box-shadow="xl"] {
      box-shadow: var(--ddd-boxShadow-xl);
    }
  `,
  ...instructionalStyles$1,
];

/* Tag based application */
const DDDReset$1 = i$7`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--ddd-font-primary);
    font-weight: var(--ddd-font-weight-bold);
    line-height: normal;
    letter-spacing: normal;
  }

  h1 {
    margin: var(--ddd-spacing-12) 0 var(--ddd-spacing-8);
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: var(--ddd-spacing-8) 0 var(--ddd-spacing-4);
    padding: 0;
  }
  h1 + h2,
  h1 + h3,
  h1 + h4,
  h1 + h5,
  h1 + h6,
  h2 + h3,
  h2 + h4,
  h2 + h5,
  h2 + h6,
  h3 + h4,
  h3 + h5,
  h3 + h6,
  h4 + h5,
  h4 + h6,
  h5 + h6 {
    margin-top: 0;
  }
  h1 {
    font-size: var(--ddd-theme-h1-font-size);
  }
  h2 {
    font-size: var(--ddd-theme-h2-font-size);
  }
  h3 {
    font-size: var(--ddd-theme-h3-font-size);
  }
  h4 {
    font-size: var(--ddd-theme-h4-font-size);
  }
  h5 {
    font-size: var(--ddd-theme-h5-font-size);
  }
  h6 {
    font-size: var(--ddd-theme-h6-font-size);
  }
  h1 + p,
  h2 + p,
  h3 + p,
  h4 + p,
  h5 + p,
  h6 + p {
    margin-top: 0;
  }
  p {
    margin: var(--ddd-spacing-6) 0;
  }
  dl {
    padding: var(--ddd-spacing-6);
    margin: 0;
    border: var(--ddd-border-sm);
    display: block;
    min-height: inherit;
  }
  dt {
    font-weight: var(--ddd-font-weight-bold);
    font-size: var(--ddd-theme-h6-font-size);
    display: block;
    min-height: inherit;
    padding: var(--ddd-spacing-1);
  }
  dd {
    margin-bottom: var(--ddd-spacing-4);
    margin-inline-start: var(--ddd-spacing-8);
    display: block;
    min-height: inherit;
    padding: var(--ddd-spacing-1);
  }

  p[data-accent],
  blockquote[data-accent],
  ol[data-accent],
  ul[data-accent],
  div[data-accent] {
    color: light-dark(currentcolor, var(--ddd-theme-colorContrast));
    border: var(--ddd-border-sm);
    border-color: var(--ddd-theme-primary);
    border-width: var(--ddd-theme-border-size);
    background-color: var(--ddd-theme-accent);
  }
  p[data-accent]:not([data-padding]),
  blockquote[data-accent]:not([data-padding]),
  ol[data-accent]:not([data-padding]),
  ul[data-accent]:not([data-padding]),
  div[data-accent]:not([data-padding]),
  p[data-border]:not([data-padding]),
  blockquote[data-border]:not([data-padding]),
  ol[data-border]:not([data-padding]),
  ul[data-border]:not([data-padding]),
  div[data-border]:not([data-padding]) {
    padding: var(--ddd-spacing-6);
  }
  ol[data-accent],
  ul[data-accent] {
    padding-left: var(--ddd-spacing-9);
  }
  /* p uniformity but ignore if either is in a slot */
  p:not([slot]) + p:not([slot]) {
    margin-top: 0;
  }

  /* heading presets */
  h1.type1 {
    font-size: var(--ddd-font-size-type1-s);
    font-weight: var(--ddd-font-weight-black);
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
    color: var(--ddd-theme-default-white);
    flex-wrap: nowrap;
    overflow-wrap: normal;
    text-wrap: wrap;
  }
  @media (min-width: 768px) {
    h1.type1 {
      font-size: var(--ddd-font-size-type1-m);
    }
  }
  @media (min-width: 1080px) {
    h1.type1 {
      font-size: var(--ddd-font-size-type1-l);
    }
  }

  h2.type2 {
    font-size: var(--ddd-font-size-4xl);
    color: var(--ddd-theme-default-beaverBlue);
  }
  .h2 > hr {
    width: 84px;
    border-width: 4px;
    margin-top: var(--ddd-spacing-6);
  }
  h2.type3 {
    font-size: var(--ddd-font-size-xxl);
    color: var(--ddd-theme-default-nittanyNavy);
  }

  a,
  a:any-link,
  a:-webkit-any-link {
    line-break: auto;
    font-weight: var(--ddd-font-weight-bold);
    text-decoration: none;
    background-color: var(--ddd-theme-accent);
  }
  body a,
  body a:any-link,
  body a:-webkit-any-link {
    color: light-dark(
      var(--ddd-theme-default-link),
      var(--ddd-theme-colorContrast, var(--ddd-theme-default-linkLight))
    );
  }
  @media (prefers-color-scheme: dark) {
    body a,
    body a:any-link,
    body a:-webkit-any-link {
      text-decoration: underline;
    }
  }
  body.dark-mode a,
  body.dark-mode a:any-link,
  body.dark-mode a:-webkit-any-link {
    text-decoration: underline;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  thead[data-primary] tr th {
    background-color: var(--ddd-theme-primary);
    color: var(--lowContrast-override, var(--ddd-theme-bgContrast, inherit));
    border-color: inherit;
  }

  table[data-primary] tbody > tr:nth-child(odd),
  table[data-primary] > tr:nth-child(odd) {
    background-color: var(--ddd-theme-primary);
    color: var(--ddd-theme-bgContrast, var(--lowContrast-override, inherit));
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    padding: inherit;
    border-color: inherit !important;
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    font-size: var(--ddd-theme-body-font-size);
    font-family: var(--ddd-font-primary);
    border: 1px solid;
  }
  table {
    border-collapse: collapse;
  }
  ul,
  ol {
    font-size: var(--ddd-theme-body-font-size);
    display: flex;
    flex-flow: column;
    gap: var(--ddd-spacing-3);
    font-family: var(--ddd-font-primary);
    margin: 0 0 var(--ddd-spacing-6) 0;
  }
  /** can't override margin requirements when in a more specific context **/
  grid-plate ul,
  grid-plate ol {
    margin: var(--grid-plate-item-padding, 16px);
    padding: var(--grid-plate-item-padding, 16px);
  }
  ul.link-list {
    list-style: none;
  }
  ul.link-list li::after {
    content: url('data:image/svg+xml; utf8, <svg style="width:32px;height:32px;" fill="%23005fa9" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="%23005fa9" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>');
    height: calc(var(--ddd-theme-body-font-size) + 2px);
    width: calc(var(--ddd-theme-body-font-size) + 2px);
    display: inline-block;
    position: relative;
    bottom: calc(-1 * var(--ddd-spacing-1));
    left: 0px;
  }
  ul li,
  ol li {
    font-size: var(--ddd-theme-body-font-size);
  }
  ul li::marker,
  ol li::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px;
    text-align: start;
    text-align-last: start;
  }
  ul {
    list-style-type: square;
  }
  ol {
    list-style-type: decimal;
  }
  ul[data-design-treatment="disc"],
  ul[data-design-treatment="list-disc"],
  ul[type="disc"] {
    list-style-type: disc;
  }
  ul[data-design-treatment="circle"],
  ul[data-design-treatment="list-circle"],
  ul[type="circle"] {
    list-style-type: circle;
  }
  ul[data-design-treatment="square"],
  ul[data-design-treatment="list-square"],
  ul[type="square"] {
    list-style-type: square;
  }
  ol[data-design-treatment="decimal"],
  ol[data-design-treatment="list-decimal"],
  ol[type="1"] {
    list-style-type: decimal;
  }
  ol[data-design-treatment="decimal-leading-zero"],
  ol[data-design-treatment="list-decimal-leading-zero"],
  ol[type="01"] {
    list-style-type: decimal-leading-zero;
  }
  ol[data-design-treatment="lower-alpha"],
  ol[data-design-treatment="list-lower-alpha"],
  ol[type="a"] {
    list-style-type: lower-alpha;
  }
  ol[data-design-treatment="upper-alpha"],
  ol[data-design-treatment="list-upper-alpha"],
  ol[type="A"] {
    list-style-type: upper-alpha;
  }
  ol[data-design-treatment="lower-roman"],
  ol[data-design-treatment="list-lower-roman"],
  ol[type="i"] {
    list-style-type: lower-roman;
  }
  ol[data-design-treatment="upper-roman"],
  ol[data-design-treatment="list-upper-roman"],
  ol[type="I"] {
    list-style-type: upper-roman;
  }
  ul li::marker {
    color: var(
      --lowContrast-override,
      var(--ddd-theme-primary, var(--ddd-theme-default-skyBlue))
    );
  }
  blockquote {
    font-family: var(--ddd-font-primary);
    font-size: var(--ddd-theme-body-font-size);
    font-style: italic;
    border-left: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
    padding-left: var(--ddd-spacing-6);
    padding-bottom: var(--ddd-spacing-2);
    margin: var(--ddd-spacing-9) 0 var(--ddd-spacing-9) var(--ddd-spacing-10);
    line-height: var(--ddd-lh-150);
  }
  hr {
    display: block;
    border: none;
    border-color: var(--ddd-theme-primary);
    border-top-width: var(--ddd-theme-header-border-thickness);
    border-top-style: solid;
    margin: 0 auto;
    padding: 0;
  }

  .h-invert {
    background-color: var(--ddd-theme-primary);
    color: var(--ddd-theme-bgContrast);
  }

  /** smooth transitions in hax when applying these design system attributes */
  [data-hax-ray][data-design-treatment],
  [data-hax-ray][data-accent],
  [data-hax-ray][data-primary],
  [data-hax-ray][data-padding],
  [data-hax-ray][data-margin],
  [data-hax-ray][data-width] {
    transition:
      padding 0.3s ease-in-out,
      margin 0.3s ease-in-out,
      border 0.3s ease-in-out,
      color 0.3s ease-in-out,
      width 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out,
      border-radius 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
  }

  [data-design-treatment="vert"] {
    border-bottom: none;
    border-left: var(--ddd-theme-header-border-thickness) solid
      var(--ddd-theme-primary, var(--ddd-primary-0));
    padding-left: var(--ddd-spacing-3);
  }

  [data-design-treatment="horz-10p"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-10p
    );
  }
  [data-design-treatment="horz-25p"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-25p
    );
  }
  [data-design-treatment="horz-50p"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-50p
    );
  }
  [data-design-treatment="horz-full"] {
    --ddd-theme-header-border-treatment: calc(
      var(--ddd-theme-header-border-treatment-full) - 32px
    );
  }
  [data-instructional-action][data-design-treatment="horz-full"] {
    --ddd-theme-header-border-treatment: calc(
      var(--ddd-theme-header-border-treatment-full) - 32px - 40px
    );
  }
  [data-design-treatment="horz-md"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-md
    );
  }
  [data-design-treatment="horz-lg"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-lg
    );
  }

  [data-design-treatment^="horz"]::after {
    content: "";
    transition: width 0.3s ease-in-out;
    width: var(--ddd-theme-header-border-treatment);
    border-bottom: var(--ddd-theme-header-border-thickness) solid
      var(--ddd-theme-primary, var(--ddd-primary-0));
    height: 0;
    display: block;
    padding-top: var(--ddd-spacing-2);
  }
  /** hack for compatibility with .haxcms-copyable */
  .haxcms-copyable[data-design-treatment^="horz"]::after {
    float: none;
  }

  [data-instructional-action][data-design-treatment^="horz"]::after {
    content: "";
    width: var(--ddd-theme-header-border-treatment);
    border-bottom: var(--ddd-theme-header-border-thickness) solid
      var(--ddd-theme-primary, var(--ddd-primary-0));
    height: 0;
    display: block;
    position: relative;
    bottom: 12px;
    left: 32px;
    margin-left: var(--ddd-spacing-3);
  }

  [data-design-treatment="bg"] {
    background-color: var(--ddd-theme-primary, var(--ddd-primary-0));
    color: var(--ddd-theme-bgContrast, var(--lowContrast-override, black));
    padding: var(--ddd-spacing-3);
  }

  [data-instructional-action][data-design-treatment="bg"] {
    padding: var(--ddd-spacing-2);
  }

  [data-instructional-action][data-design-treatment="bg"]::before {
    background-color: var(--ddd-theme-bgContrast, black);
    margin-right: var(--ddd-spacing-3);
    margin-left: var(--ddd-spacing-1);
  }

  [data-instructional-action]::before {
    content: "";
    display: inline-flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 0 0;
    margin: 8px 4px 0 0;
    z-index: 2;
    background-color: var(
      --lowContrast-override,
      var(--ddd-theme-primary, var(--instructional-action-color, blue))
    );
    mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    height: var(--ddd-icon-sm);
    width: var(--ddd-icon-sm);
  }

  [data-design-treatment] {
    transition:
      0.3s ease-in-out margin,
      0.3s ease-in-out background-color,
      0.3s ease-in-out padding,
      0.3s ease-in-out border;
  }

  [data-accent] [data-design-treatment^="dropCap"] {
    min-height: calc(
      (var(--initialLetter) * var(--ddd-theme-body-font-size) + 20px)
    );
  }

  [data-design-treatment^="dropCap"] {
    --initialLetter: 6;
    min-height: calc(
      (
          var(--initialLetter) * var(--ddd-theme-body-font-size) * 1.5 *
            var(--special-multiplier)
        ) + 20px
    );
  }

  [data-design-treatment^="dropCap"]::first-letter {
    -webkit-initial-letter: var(--initialLetter);
    text-transform: uppercase;
    initial-letter: var(--initialLetter);
    color: var(--ddd-theme-primary);
    font-weight: var(--ddd-font-weight-bold);
    margin-right: var(--ddd-spacing-3);
    padding: 0 var(--ddd-spacing-1);
    text-shadow:
      -3px -3px 0 #000,
      3px -3px 0 #000,
      -3px 3px 0 #000,
      3px 3px 0 #000,
      -3px 0 0 #000,
      3px 0 0 #000,
      0 -3px 0 #000,
      0 3px 0 #000;
  }
  [data-design-treatment="dropCap-xs"] {
    --initialLetter: 2;
  }

  [data-design-treatment="dropCap-sm"] {
    --initialLetter: 4;
  }

  [data-design-treatment="dropCap-md"] {
    --initialLetter: 6;
  }

  [data-design-treatment="dropCap-lg"] {
    --initialLetter: 8;
    --special-multiplier: 1.7;
  }

  [data-design-treatment="dropCap-xl"] {
    --initialLetter: 10;
  }

  [data-design-treatment="dropCap-xs"]::first-letter {
    margin-right: var(--ddd-spacing-1);
  }

  [data-design-treatment="dropCap-sm"]::first-letter {
    margin-right: var(--ddd-spacing-2);
  }

  [data-design-treatment="dropCap-md"]::first-letter {
    margin-right: var(--ddd-spacing-3);
  }

  [data-design-treatment="dropCap-lg"]::first-letter {
    margin-right: var(--ddd-spacing-4);
  }

  [data-design-treatment="dropCap-xl"]::first-letter {
    margin-right: var(--ddd-spacing-5);
  }

  /* dropCap outline for low contrasting colors 
  [data-design-treatment^="dropCap"][data-primary="0"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="5"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="7"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="8"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="9"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="10"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="12"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="14"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="15"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="16"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="18"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="21"]::first-letter
  */

  /** These are for Firefox / browsers not supporting dropcap in order to fake support */

  .dropCap-noSupport [data-design-treatment^="dropCap"]::first-letter {
    font-size: 180px;
    float: left;
    padding: 8px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-xs"]::first-letter {
    font-size: 56px;
    float: left;
    padding: 4px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-sm"]::first-letter {
    font-size: 112px;
    float: left;
    padding: 4px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-md"]::first-letter {
    font-size: 168px;
    float: left;
    padding: 8px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-lg"]::first-letter {
    font-size: 230px;
    float: left;
    padding: 12px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-xl"]::first-letter {
    font-size: 300px;
    float: left;
    padding: 12px 0px 0px 0px;
  }

  /*
    h2 > hr {
      margin-top: var(--ddd-spacing-4);
    }
  */

  .ddd-theme-header-border-thickness-0 {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-0
    );
  }
  .ddd-theme-header-border-thickness-xs {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-xs
    );
  }
  .ddd-theme-header-border-thickness-sm {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-sm
    );
  }
  .ddd-theme-header-border-thickness-md {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-md
    );
  }
  .ddd-theme-header-border-thickness-lg {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-lg
    );
  }

  .ddd-theme-header-border-treatment-0 {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-0
    );
  }
  .ddd-theme-header-border-treatment-sm {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-sm
    );
  }
  .ddd-theme-header-border-treatment-md {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-md
    );
  }
  .ddd-theme-header-border-treatment-lg {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-lg
    );
  }
  .ddd-theme-header-border-treatment-10p {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-10p
    );
  }
  .ddd-theme-header-border-treatment-25p {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-25p
    );
  }
  .ddd-theme-header-border-treatment-50p {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-50p
    );
  }
  .ddd-theme-header-border-treatment-75p {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-75p
    );
  }
  .ddd-theme-header-border-treatment-full {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-full
    );
  }
  summary {
    display: flex;
    font-size: var(--ddd-theme-h4-font-size);
    font-weight: var(--ddd-font-weight-bold);
    color: light-dark(
      var(
        --lowContrast-override,
        var(--ddd-theme-primary, var(--ddd-theme-default-nittanyNavy))
      ),
      var(
        --lowContrast-override,
        var(--ddd-theme-primary, var(--ddd-theme-default-linkLight))
      )
    );
    cursor: pointer;
    text-wrap: wrap;
    align-items: center;
    padding: var(--ddd-spacing-5) var(--ddd-spacing-4);
    user-select: none;
    transition: all 0.3s ease-in-out;
  }
  summary::marker {
    content: "";
  }
  summary::after {
    content: "+";
    margin-left: auto;
    text-align: right;
    font-weight: var(--ddd-font-weight-regular);
    font-size: var(--ddd-font-size-m);
    line-height: 1;
  }
  details {
    overflow: hidden;
    display: block;
    position: relative;
    max-width: 650px;
    padding: 0;
    margin: 0;
  }
  details[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }
  details[open] > summary::after {
    content: "-";
  }
  details[open] > summary {
    color: light-dark(
      var(
        --lowContrast-override,
        var(--ddd-theme-primary, var(--ddd-theme-default-nittanyNavy))
      ),
      var(
        --lowContrast-override,
        var(--ddd-theme-primary, var(--ddd-theme-default-linkLight))
      )
    );
    filter: saturate(1.5);
  }
  details[open] > summary {
    background-color: light-dark(
      var(--ddd-theme-default-limestoneMaxLight),
      var(--ddd-theme-default-potentialMidnight)
    );
  }
  details summary:focus,
  details summary:hover {
    background-color: light-dark(
      var(--ddd-theme-default-limestoneLight),
      var(--ddd-theme-default-nittanyNavy)
    );
  }

  code {
    user-select: all;
    transition: all 0.3s ease 0s;
    display: inline-block;
    padding: 2px var(--ddd-spacing-1); /* breaking DDD spacing sys on purpose for code */
    margin: 0 var(--ddd-spacing-1);
    font-size: calc(var(--ddd-theme-body-font-size) - var(--ddd-spacing-1));
    background-color: var(
      --ddd-theme-code-background-color,
      light-dark(var(--ddd-theme-default-limestoneLight), black)
    );
    color: var(
      --ddd-theme-code-color,
      light-dark(black, var(--ddd-theme-default-limestoneLight))
    );
    line-height: 1;
    border-radius: var(--ddd-radius-xs);
    border: var(--ddd-border-md);
    border-style: groove;
    border-color: light-dark(var(--ddd-theme-default-limestoneMaxLight), black);
    font-family: monospace;
    letter-spacing: var(--ddd-ls-16-lg);
    pointer-events: auto;
  }
  code.block-code {
    padding: var(--ddd-spacing-2);
    margin: var(--ddd-spacing-5) 0;
  }
  code::-moz-selection {
    /* Code for Firefox */
    background: var(--ddd-theme-default-keystoneYellow);
  }
  code::selection {
    background: var(--ddd-theme-default-keystoneYellow);
  }

  pre {
    display: inline-block;
    padding: var(--ddd-spacing-4);
    overflow: auto;
    background-color: light-dark(
      var(--ddd-theme-default-limestoneMaxLight, rgba(175, 184, 193, 0.8)),
      var(--ddd-theme-default-coalyGray, rgba(175, 184, 193, 0.2))
    );
    color: inherit;
    border-radius: var(--ddd-radius-sm);
    margin: var(--ddd-spacing-1) 0;
    white-space: pre-wrap;
    font-size: var(--ddd-theme-body-font-size);
  }

  mark {
    font-weight: var(--ddd-font-weight-medium);
    padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
    border-radius: var(--ddd-radius-xs);
    background-color: light-dark(
      var(--ddd-theme-primary, var(--ddd-theme-default-keystoneYellow)),
      var(--ddd-theme-primary, var(--ddd-theme-default-roarGolden))
    );
    color: var(--ddd-theme-bgContrast, black);
    box-decoration-break: clone;
  }
  abbr {
    background-color: var(--ddd-theme-primary, var(--ddd-theme-default-info));
    transition: all 0.3s ease 0s;
    padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
    font-style: italic;
    text-decoration: underline;
    pointer-events: auto;
    cursor: pointer;
    outline-color: var(--ddd-theme-primary, var(--ddd-theme-default-info));
    color: var(--ddd-theme-bgContrast, var(--lowContrast-override, white));
    position: relative;
  }
  abbr:focus,
  abbr:active,
  abbr:hover {
    text-decoration: none;
    background-color: var(--ddd-theme-primary, var(--ddd-theme-default-info));
    outline-offset: 2px;
    outline-style: dotted;
    outline-width: 2px;
  }
  abbr:focus::after,
  abbr:active::after,
  abbr:hover::after {
    content: attr(title);
    position: absolute;
    white-space: nowrap;
    font-style: normal;
    position: absolute;
    bottom: 100%;
    left: 0;
    width: fit-content;
    height: fit-content;
    padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
    color: var(--ddd-theme-font-color, var(--ddd-theme-default-white, #fff));
    background-color: var(--ddd-theme-default-info, rgba(175, 184, 193, 0.2));
    font-size: var(--ddd-theme-body-font-size);
    font-weight: var(--ddd-font-weight-regular);
    border-radius: var(--ddd-radius-xs);
  }
  div[slot="citation"] {
    font-size: var(--ddd-font-size-4xs);
  }
  *::selection {
    background-color: var(--ddd-theme-default-linkLight);
    color: black;
  }
  select {
    display: flex;
    box-sizing: border-box;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    color: var(--ddd-theme-default-coalyGray);
    width: fit-content;
    border: var(--ddd-border-xs);
    background-color: var(--ddd-theme-default-white);
    font-family: var(--ddd-font-primary);
    font-weight: var(--ddd-font-weight-regular);
    font-size: var(--ddd-theme-body-font-size);
    line-height: 150%;
    letter-spacing: normal;
    padding: var(--ddd-spacing-2);
    border-radius: var(--ddd-radius-xs);
    border-color: var(--ddd-theme-default-potential50);
  }
  hax-body,
  .haxcms-theme-element {
    line-height: var(--ddd-lh-150);
    font-size: var(--ddd-theme-body-font-size);
    font-family: var(--ddd-font-primary);
    letter-spacing: normal;
    text-align: justify;
  }
  @media (max-width: 900px) {
    hax-body,
    .haxcms-theme-element {
      text-align: start;
    }
  }
`;
/* border & shadows */

/* margin & padding */

/* font sizing */

/* font sizing */
const DDDLetterSpacing$1 = i$7`
  .ls-16-sm {
    letter-spacing: var(--ddd-ls-16-sm);
  }
  .ls-18-sm {
    letter-spacing: var(--ddd-ls-18-sm);
  }
  .ls-20-sm {
    letter-spacing: var(--ddd-ls-20-sm);
  }
  .ls-22-sm {
    letter-spacing: var(--ddd-ls-22-sm);
  }
  .ls-24-sm {
    letter-spacing: var(--ddd-ls-24-sm);
  }
  .ls-28-sm {
    letter-spacing: var(--ddd-ls-28-sm);
  }
  .ls-32-sm {
    letter-spacing: var(--ddd-ls-32-sm);
  }
  .ls-36-sm {
    letter-spacing: var(--ddd-ls-36-sm);
  }
  .ls-40-sm {
    letter-spacing: var(--ddd-ls-40-sm);
  }
  .ls-48-sm {
    letter-spacing: var(--ddd-ls-48-sm);
  }
  .ls-56-sm {
    letter-spacing: var(--ddd-ls-56-sm);
  }
  .ls-64-sm {
    letter-spacing: var(--ddd-ls-64-sm);
  }
  .ls-72-sm {
    letter-spacing: var(--ddd-ls-72-sm);
  }
  .ls-16-lg {
    letter-spacing: var(--ddd-ls-16-lg);
  }
  .ls-18-lg {
    letter-spacing: var(--ddd-ls-18-lg);
  }
  .ls-20-lg {
    letter-spacing: var(--ddd-ls-20-lg);
  }
  .ls-22-lg {
    letter-spacing: var(--ddd-ls-22-lg);
  }
  .ls-24-lg {
    letter-spacing: var(--ddd-ls-24-lg);
  }
  .ls-28-lg {
    letter-spacing: var(--ddd-ls-28-lg);
  }
  .ls-32-lg {
    letter-spacing: var(--ddd-ls-32-lg);
  }
  .ls-36-lg {
    letter-spacing: var(--ddd-ls-36-lg);
  }
  .ls-40-lg {
    letter-spacing: var(--ddd-ls-40-lg);
  }
  .ls-48-lg {
    letter-spacing: var(--ddd-ls-48-lg);
  }
  .ls-56-lg {
    letter-spacing: var(--ddd-ls-56-lg);
  }
  .ls-64-lg {
    letter-spacing: var(--ddd-ls-64-lg);
  }
  .ls-72-lg {
    letter-spacing: var(--ddd-ls-72-lg);
  }
`;
/* line height sizing */

/* Box shadows */
const DDDBoxShadow$1 = i$7`
  .bs-0 {
    box-shadow: none;
  }
  .bs-xs {
    box-shadow: var(--ddd-boxShadow-sm);
  }
  .bs-sm {
    box-shadow: var(--ddd-boxShadow-sm);
  }
  .bs-md {
    box-shadow: var(--ddd-boxShadow-md);
  }
  .bs-lg {
    box-shadow: var(--ddd-boxShadow-lg);
  }
  .bs-xl {
    box-shadow: var(--ddd-boxShadow-xl);
  }
`;
/* Border Radius */
const DDDBorderRadius$1 = i$7`
  .r-0 {
    border-radius: var(--ddd-radius-0);
  }
  .r-xs {
    border-radius: var(--ddd-radius-xs);
  }
  .r-sm {
    border-radius: var(--ddd-radius-sm);
  }
  .r-md {
    border-radius: var(--ddd-radius-md);
  }
  .r-lg {
    border-radius: var(--ddd-radius-lg);
  }
  .r-xl {
    border-radius: var(--ddd-radius-xl);
  }
  .r-rounded {
    border-radius: var(--ddd-radius-rounded);
  }
  .r-circle {
    border-radius: var(--ddd-radius-circle);
  }
`;
/* Background colors / gradients */
const DDDBackground$1 = i$7`
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--ddd-theme-default-white);
  }
  .bg-gradient-navBar {
    background: var(--ddd-theme-default-gradient-navBar);
  }
  .bg-gradient-footer {
    background: var(--ddd-theme-default-gradient-footer);
  }
  .bg-gradient-newsFeature {
    background: var(--ddd-theme-default-gradient-newsFeature);
  }
  .bg-gradient-buttons {
    background: var(--ddd-theme-default-gradient-buttons);
  }
  .bg-gradient-hero {
    background: var(--ddd-theme-default-gradient-hero);
  }
  .bg-gradient-hero2 {
    background: var(--ddd-theme-default-gradient-hero2);
  }
`;
/* Font weight */
const DDDFontWeight$1 = i$7`
  .fw-0 {
    font-weight: var(--ddd-font-weight-regular); /* available for navigation */
  }
  .fw-1 {
    font-weight: var(--ddd-font-weight-medium); /* available for headers */
  }
  .fw-2 {
    font-weight: var(--ddd-font-weight-bold); /* available for headers */
  }
  .fw-3 {
    font-weight: var(
      --ddd-font-weight-black
    ); /* default for headers, body & navigation */
  }
`;
/* Font classes */
const DDDFontClasses$1 = i$7`
  .ddd-font-navigation {
    font-family: var(--ddd-font-navigation);
    font-size: var(--ddd-theme-h4-font-size);
    font-weight: var(--ddd-font-weight-bold);
  }
  .ddd-font-primary {
    font-family: var(--ddd-font-primary);
  }
  .ddd-font-secondary {
    font-family: var(--ddd-font-secondary);
  }
`;

/* Breadcrumb */
const DDDBreadcrumb$1 = i$7`
  .breadcrumb {
    font-weight: var(--ddd-font-weight-light);
    margin: var(--ddd-spacing-6) 0;
    padding: 0;
    pointer-events: auto;
    list-style: "/";
    gap: var(--ddd-spacing-2);
    display: flex;
    flex-flow: row;
    color: light-dark(
      var(--ddd-theme-default-link),
      var(--ddd-theme-default-linkLight)
    );
    line-height: normal;
    text-align: start;
  }
  .breadcrumb li::marker {
    color: light-dark(black, white);
    font-weight: var(--ddd-font-weight-bold);
  }
  .breadcrumb li:first-child {
    list-style: none;
  }
  .breadcrumb li:last-child a {
    color: light-dark(black, white);
    pointer-events: none;
  }
  .breadcrumb li a {
    vertical-align: text-top;
    display: inline-block;
    padding: 0 var(--ddd-spacing-2);
    font-family: var(--ddd-font-navigation);
    font-weight: var(--ddd-font-weight-regular);
    text-decoration: none;
  }
  .breadcrumb li a:hover {
    text-decoration: underline;
    pointer-events: auto;
  }
`;
/* Extra things */
const DDDExtra$1 = i$7`
  /* helper class for accessibility of screen reader only content */
  .sr-only {
    position: absolute;
    left: -10000px;
    inset-inline-start: -10000px;
    inset-inline-end: initial;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

i$7`
  /* Apply primary color as pulse effect using CSS variable */
  :host([data-primary="0"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-0-rgb);
  }
  :host([data-primary="1"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-1-rgb);
  }
  :host([data-primary="2"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-2-rgb);
  }
  :host([data-primary="3"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-3-rgb);
  }
  :host([data-primary="4"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-4-rgb);
  }
  :host([data-primary="5"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-5-rgb);
  }
  :host([data-primary="6"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-6-rgb);
  }
  :host([data-primary="7"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-7-rgb);
  }
  :host([data-primary="8"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-8-rgb);
  }
  :host([data-primary="9"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-9-rgb);
  }
  :host([data-primary="10"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-10-rgb);
  }
  :host([data-primary="11"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-11-rgb);
  }
  :host([data-primary="12"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-12-rgb);
  }
  :host([data-primary="13"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-13-rgb);
  }
  :host([data-primary="14"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-14-rgb);
  }
  :host([data-primary="15"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-15-rgb);
  }
  :host([data-primary="16"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-16-rgb);
  }
  :host([data-primary="17"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-17-rgb);
  }
  :host([data-primary="18"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-18-rgb);
  }
  :host([data-primary="19"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-19-rgb);
  }
  :host([data-primary="20"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-20-rgb);
  }
  :host([data-primary="21"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-21-rgb);
  }
  :host([data-primary="22"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-22-rgb);
  }
  :host([data-primary="23"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-23-rgb);
  }
  :host([data-primary="24"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-24-rgb);
  }
  :host([data-primary="25"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-25-rgb);
  }

  :host([data-pulse]) {
    --ddd-animation-pulse-size: var(--ddd-spacing-4);
    animation-delay: 2.8s;
    animation-name: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    z-index: 10000;
  }
  :host([data-pulse="1"]) {
    --ddd-animation-pulse-size: var(--ddd-spacing-6);
  }
  :host([data-pulse="2"]) {
    --ddd-animation-pulse-size: var(--ddd-spacing-10);
  }
  :host([data-pulse]:not([data-primary])) {
    --ddd-animation-pulse-color: var(--ddd-primary-1-rgb);
  }
`;

const DDDAnimations$1 = i$7`
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(var(--ddd-animation-pulse-color));
    }
    70% {
      box-shadow: 0 0 0 var(--ddd-animation-pulse-size) rgba(0, 0, 0, 0); /* Use a transparent color derived from the original color */
    }
    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); /* Same here */
    }
  }
`;

const DDDPaletteStyles$1 = i$7`
  /** Default Palette */
  html,
  :root {
    --ddd-palette-color-1: var(--ddd-theme-default-coalyGray);
    --ddd-palette-color-2: var(--simple-colors-default-theme-grey-9);
    --ddd-palette-color-3: var(--simple-colors-default-theme-grey-7);
    --ddd-palette-color-4: var(--simple-colors-default-theme-grey-5);
    --ddd-palette-color-5: var(--simple-colors-default-theme-grey-3);
    --ddd-palette-color-6: var(--simple-colors-default-theme-grey-11);
    --ddd-palette-color-7: var(--simple-colors-default-theme-amber-6);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    --ddd-palette-text-color-1: var(--ddd-theme-default-white);
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-grey-4);
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-grey-2);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-grey-10);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-grey-9);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-grey-4);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-grey-10);
  }

  /** Wisdom Walk Green */
  [data-palette="wisdom-walk-green"],
  [data-palette="0"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-green-10);
    --ddd-palette-color-2: var(--simple-colors-default-theme-lime-8);
    --ddd-palette-color-3: var(--simple-colors-fixed-theme-lime-7);
    --ddd-palette-color-4: var(--ddd-theme-default-futureLime);
    --ddd-palette-color-5: var(--simple-colors-default-theme-lime-5);
    --ddd-palette-color-6: var(--ddd-theme-default-inventOrange);
    --ddd-palette-color-7: var(--simple-colors-default-theme-orange-3);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    --ddd-palette-text-color-1: var(--simple-colors-fixed-theme-green-3);
    --ddd-palette-text-color-2: var(--simple-colors-fixed-theme-green-4);
    --ddd-palette-text-color-3: var(--simple-colors-fixed-theme-green-1);
    /* This does NOT pass accessibility standards */
    --ddd-palette-text-color-4: var(--simple-colors-fixed-theme-teal-12);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-lime-10);
    --ddd-palette-text-color-6: var(--ddd-theme-default-white);
    --ddd-palette-text-color-7: var(
      --simple-colors-default-theme-deep-orange-10
    );
  }

  /** Very Violent Red */
  [data-palette="very-violent-red"],
  [data-palette="1"] {
    --ddd-palette-color-1: var(--simple-colors-fixed-theme-red-12);
    --ddd-palette-color-2: var(--simple-colors-fixed-theme-deep-orange-8);
    --ddd-palette-color-3: var(--simple-colors-default-theme-deep-orange-7);
    --ddd-palette-color-4: var(--ddd-theme-default-discoveryCoral);
    --ddd-palette-color-5: var(--simple-colors-default-theme-red-2);
    --ddd-palette-color-6: var(--ddd-theme-default-slateGray);
    --ddd-palette-color-7: var(--ddd-theme-default-pughBlue);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-fixed-theme-red-2);
    --ddd-palette-text-color-2: var(--simple-colors-fixed-theme-red-1);
    --ddd-palette-text-color-3: var(
      --simple-colors-default-theme-deep-orange-12
    );
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-red-12);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-red-10);
    --ddd-palette-text-color-6: var(--ddd-theme-default-skyLight);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-blue-10);
  }

  /** Beetles Yellow */
  [data-palette="beetles-yellow"],
  [data-palette="2"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-orange-9);
    --ddd-palette-color-2: var(--simple-colors-fixed-theme-orange-7);
    --ddd-palette-color-3: var(--simple-colors-default-theme-orange-6);
    --ddd-palette-color-4: var(--simple-colors-fixed-theme-amber-6);
    --ddd-palette-color-5: var(--ddd-theme-default-keystoneYellow);
    --ddd-palette-color-6: var(--ddd-theme-default-creekTeal);
    --ddd-palette-color-7: var(--simple-colors-default-theme-cyan-1);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-fixed-theme-yellow-2);
    --ddd-palette-text-color-2: var(--simple-colors-fixed-theme-orange-12);
    --ddd-palette-text-color-3: var(--simple-colors-fixed-theme-orange-11);
    --ddd-palette-text-color-4: var(--simple-colors-fixed-theme-orange-10);
    --ddd-palette-text-color-5: var(--simple-colors-fixed-theme-deep-orange-11);
    --ddd-palette-text-color-6: var(--simple-colors-fixed-theme-cyan-12);
    --ddd-palette-text-color-7: var(--simple-colors-fixed-theme-light-blue-10);
  }

  /* Offbrand Nittany Blue */
  [data-palette="offbrand-nittany-blue"],
  [data-palette="3"] {
    --ddd-palette-color-1: var(--ddd-theme-default-nittanyNavy);
    --ddd-palette-color-2: var(--simple-colors-fixed-theme-light-blue-10);
    --ddd-palette-color-3: var(--simple-colors-fixed-theme-light-blue-8);
    --ddd-palette-color-4: var(--simple-colors-fixed-theme-light-blue-6);
    --ddd-palette-color-5: var(--simple-colors-fixed-theme-cyan-2);
    --ddd-palette-color-6: var(--simple-colors-fixed-theme-orange-7);
    --ddd-palette-color-7: var(--ddd-theme-default-keystoneYellow);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-default-theme-light-blue-4);
    --ddd-palette-text-color-2: var(--simple-colors-fixed-theme-cyan-2);
    --ddd-palette-text-color-3: var(--ddd-theme-default-white);
    --ddd-palette-text-color-4: var(--simple-colors-fixed-theme-blue-11);
    --ddd-palette-text-color-5: var(--simple-colors-fixed-theme-light-blue-10);
    --ddd-palette-text-color-6: var(--simple-colors-fixed-theme-orange-12);
    --ddd-palette-text-color-7: var(--simple-colors-fixed-theme-orange-10);
  }

  /* Boring Blue Gray */
  [data-palette="boring-blue-gray"],
  [data-palette="4"] {
    --ddd-palette-color-1: var(--ddd-theme-default-coalyGray);
    --ddd-palette-color-2: var(--simple-colors-fixed-theme-blue-grey-9);
    --ddd-palette-color-3: var(--simple-colors-fixed-theme-blue-grey-8);
    --ddd-palette-color-4: var(--simple-colors-fixed-theme-blue-grey-6);
    --ddd-palette-color-5: var(--simple-colors-fixed-theme-blue-grey-4);
    --ddd-palette-color-6: var(--ddd-theme-default-slateGray);
    --ddd-palette-color-7: var(--simple-colors-fixed-theme-blue-grey-2);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-fixed-theme-blue-grey-2);
    --ddd-palette-text-color-2: var(--simple-colors-fixed-theme-blue-grey-1);
    --ddd-palette-text-color-3: var(--ddd-theme-default-white);
    --ddd-palette-text-color-4: var(--simple-colors-fixed-theme-blue-grey-12);
    --ddd-palette-text-color-5: var(--simple-colors-fixed-theme-blue-grey-11);
    --ddd-palette-text-color-6: var(--simple-colors-fixed-theme-blue-grey-1);
    --ddd-palette-text-color-7: var(--simple-colors-fixed-theme-blue-grey-10);
  }

  /** Monotone Gray */
  [data-palette="monotone"],
  [data-palette="5"] {
    --ddd-palette-color-1: var(--ddd-theme-default-coalyGray);
    --ddd-palette-color-2: var(--simple-colors-fixed-theme-grey-9);
    --ddd-palette-color-3: var(--simple-colors-fixed-theme-grey-7);
    --ddd-palette-color-4: var(--simple-colors-fixed-theme-grey-5);
    --ddd-palette-color-5: var(--simple-colors-fixed-theme-grey-3);
    --ddd-palette-color-6: var(--simple-colors-fixed-theme-grey-11);
    --ddd-palette-color-7: var(--simple-colors-fixed-theme-amber-6);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-fixed-theme-blue-grey-2);
    --ddd-palette-text-color-2: var(--simple-colors-fixed-theme-grey-3);
    --ddd-palette-text-color-3: var(--simple-colors-fixed-theme-grey-1);
    --ddd-palette-text-color-4: var(--simple-colors-fixed-theme-grey-10);
    --ddd-palette-text-color-5: var(--simple-colors-fixed-theme-grey-8);
    --ddd-palette-text-color-6: var(--simple-colors-fixed-theme-grey-5);
    --ddd-palette-text-color-7: var(--simple-colors-fixed-theme-orange-10);
  }

  /** Salmon Season */
  [data-palette="salmon-season"],
  [data-palette="6"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-pink-2);
    --ddd-palette-color-2: var(--simple-colors-default-theme-pink-4);
    --ddd-palette-color-3: var(--ddd-theme-default-original87Pink);
    --ddd-palette-color-4: var(--ddd-theme-default-discoveryCoral);
    --ddd-palette-color-5: var(--simple-colors-default-theme-red-10);
    --ddd-palette-color-6: var(--simple-colors-default-theme-lime-9);
    --ddd-palette-color-7: var(--simple-colors-default-theme-lime-5);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);
    --ddd-palette-video-player-caption-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-default-theme-pink-11);
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-pink-12);
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-pink-1);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-red-12);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-pink-2);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-lime-1);
    --ddd-palette-text-color-7: var(
      --simple-colors-default-theme-light-green-10
    );
  }

  /** Tweedle Dee */
  [data-palette="tweedle-dee"],
  [data-palette="7"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-indigo-2);
    --ddd-palette-color-2: var(--simple-colors-default-theme-blue-5);
    --ddd-palette-color-3: var(--simple-colors-default-theme-light-blue-7);
    --ddd-palette-color-4: var(--simple-colors-default-theme-cyan-9);
    --ddd-palette-color-5: var(--simple-colors-default-theme-teal-10);
    --ddd-palette-color-6: var(--simple-colors-default-theme-purple-8);
    --ddd-palette-color-7: var(--simple-colors-default-theme-pink-7);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-default-theme-indigo-12);
    --ddd-palette-text-color-2: var(
      --simple-colors-default-theme-light-blue-12
    );
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-light-blue-1);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-cyan-1);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-teal-1);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-purple-1);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-pink-1);
  }

  /* Polaris Invent */
  [data-palette="polaris-invent"],
  [data-palette="8"] {
    /* Derived from colors in polaris-invent-theme */
    --ddd-palette-color-1: var(--ddd-theme-default-skyBlue);
    --ddd-palette-color-2: var(--ddd-theme-default-beaver80);
    --ddd-palette-color-3: var(--ddd-theme-default-beaverBlue);
    --ddd-palette-color-4: var(--ddd-theme-default-nittanyNavy);
    --ddd-palette-color-5: var(--ddd-theme-default-limestoneLight);
    --ddd-palette-color-6: var(--ddd-theme-default-coalyGray);
    --ddd-palette-color-7: var(--ddd-theme-default-inventOrange);

    --ddd-palette-video-player-color: var(--ddd-theme-default-white);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--ddd-theme-default-white);
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-cyan-2);
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-cyan-2);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-cyan-4);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-blue-grey-2);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-blue-grey-10);
    --ddd-palette-text-color-7: var(--ddd-theme-default-white);
  }

  [data-palette="positively-purple"],
  [data-palette="9"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-deep-purple-2);
    --ddd-palette-color-2: var(--ddd-theme-default-wonderPurple);
    --ddd-palette-color-3: var(--ddd-theme-default-athertonViolet);
    --ddd-palette-color-4: var(--simple-colors-default-theme-deep-purple-11);
    --ddd-palette-color-5: var(--simple-colors-default-theme-deep-purple-12);
    --ddd-palette-color-6: var(--ddd-theme-default-shrineTan);
    --ddd-palette-color-7: var(--simple-colors-default-theme-brown-2);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(
      --simple-colors-default-theme-deep-purple-11
    );
    --ddd-palette-text-color-2: var(
      --simple-colors-default-theme-deep-purple-12
    );
    --ddd-palette-text-color-3: var(
      --simple-colors-default-theme-deep-purple-1
    );
    --ddd-palette-text-color-4: var(
      --simple-colors-default-theme-deep-purple-2
    );
    --ddd-palette-text-color-5: var(
      --simple-colors-default-theme-deep-purple-5
    );
    --ddd-palette-text-color-6: var(--ddd-theme-default-white);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-brown-11);
  }

  [data-palette="honey-bear"],
  [data-palette="10"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-deep-orange-1);
    --ddd-palette-color-2: var(--simple-colors-default-theme-deep-orange-3);
    --ddd-palette-color-3: var(--ddd-theme-default-landgrantBrown);
    --ddd-palette-color-4: var(--simple-colors-default-theme-brown-8);
    --ddd-palette-color-5: var(--simple-colors-default-theme-brown-11);
    --ddd-palette-color-6: var(--simple-colors-default-theme-amber-11);
    --ddd-palette-color-7: var(--simple-colors-default-theme-amber-12);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-default-theme-orange-7);
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-orange-10);
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-orange-12);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-brown-1);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-brown-2);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-orange-3);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-orange-4);
  }

  [data-palette="boldly-lion"],
  [data-palette="11"] {
    --ddd-palette-color-1: var(--ddd-theme-default-nittanyNavy);
    --ddd-palette-color-2: var(--ddd-theme-default-beaverBlue);
    --ddd-palette-color-3: var(--ddd-theme-default-pughBlue);
    --ddd-palette-color-4: var(--ddd-theme-default-slateGray);
    --ddd-palette-color-5: var(--ddd-theme-default-limestoneLight);
    --ddd-palette-color-6: var(--ddd-theme-default-coalyGray);
    --ddd-palette-color-7: var(--ddd-theme-default-keystoneYellow);

    --ddd-palette-video-player-color: var(--ddd-theme-default-white);
    --ddd-palette-video-player-caption-color: var(--ddd-theme-default-white);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--ddd-theme-default-white);
    --ddd-palette-text-color-2: var(--ddd-theme-default-white);
    --ddd-palette-text-color-3: var(--ddd-theme-default-white);
    --ddd-palette-text-color-4: var(--ddd-theme-default-white);
    --ddd-palette-text-color-5: var(--ddd-theme-default-nittanyNavy);
    --ddd-palette-text-color-6: var(--ddd-theme-default-limestoneLight);
    --ddd-palette-text-color-7: var(--ddd-theme-default-nittanyNavy);
  }

  /** Ocean Current */
  [data-palette="ocean-current"],
  [data-palette="12"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-indigo-1);
    --ddd-palette-color-2: var(--simple-colors-default-theme-blue-3);
    --ddd-palette-color-3: var(--simple-colors-default-theme-light-blue-6);
    --ddd-palette-color-4: var(--simple-colors-default-theme-cyan-7);
    --ddd-palette-color-5: var(--simple-colors-default-theme-teal-7);
    --ddd-palette-color-6: var(--simple-colors-default-theme-blue-grey-11);
    --ddd-palette-color-7: var(--simple-colors-default-theme-amber-7);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-default-theme-indigo-12);
    --ddd-palette-text-color-2: var(
      --simple-colors-default-theme-light-blue-12
    );
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-light-blue-1);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-cyan-1);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-teal-1);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-blue-grey-2);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-amber-1);
  }

  /** Twilight Indigo */
  [data-palette="twilight-indigo"],
  [data-palette="13"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-deep-purple-1);
    --ddd-palette-color-2: var(--simple-colors-default-theme-indigo-3);
    --ddd-palette-color-3: var(--simple-colors-default-theme-indigo-6);
    --ddd-palette-color-4: var(--simple-colors-default-theme-deep-purple-8);
    --ddd-palette-color-5: var(--simple-colors-default-theme-purple-10);
    --ddd-palette-color-6: var(--simple-colors-default-theme-blue-grey-10);
    --ddd-palette-color-7: var(--simple-colors-default-theme-blue-grey-12);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(
      --simple-colors-default-theme-deep-purple-12
    );
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-indigo-12);
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-indigo-12);
    --ddd-palette-text-color-4: var(
      --simple-colors-default-theme-deep-purple-1
    );
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-purple-2);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-blue-grey-1);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-blue-grey-2);
  }

  /** Evergreen Earth */
  [data-palette="evergreen-earth"],
  [data-palette="14"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-green-2);
    --ddd-palette-color-2: var(--simple-colors-default-theme-green-5);
    --ddd-palette-color-3: var(--simple-colors-default-theme-light-green-7);
    --ddd-palette-color-4: var(--simple-colors-default-theme-lime-9);
    --ddd-palette-color-5: var(--simple-colors-default-theme-brown-7);
    --ddd-palette-color-6: var(--simple-colors-default-theme-amber-8);
    --ddd-palette-color-7: var(--simple-colors-default-theme-brown-11);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-default-theme-green-12);
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-green-12);
    --ddd-palette-text-color-3: var(
      --simple-colors-default-theme-light-green-1
    );
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-lime-1);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-brown-1);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-amber-1);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-brown-2);
  }

  /** Graphite Contrast */
  [data-palette="graphite-contrast"],
  [data-palette="15"] {
    --ddd-palette-color-1: var(--ddd-theme-default-coalyGray);
    --ddd-palette-color-2: var(--simple-colors-default-theme-blue-grey-9);
    --ddd-palette-color-3: var(--simple-colors-default-theme-grey-8);
    --ddd-palette-color-4: var(--simple-colors-default-theme-grey-5);
    --ddd-palette-color-5: var(--simple-colors-default-theme-blue-grey-3);
    --ddd-palette-color-6: var(--simple-colors-default-theme-cyan-7);
    --ddd-palette-color-7: var(--simple-colors-default-theme-amber-7);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--ddd-theme-default-white);
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-blue-grey-12);
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-grey-12);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-grey-2);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-blue-grey-12);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-cyan-1);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-amber-1);
  }
`;

// export that has all of them for easy stamping as a single sheet
const DDDAllStyles$1 = [
  DDDGlobalStyles$1,
  DDDVariables$1,
  DDDPaletteStyles$1,
  ...DDDDataAttributes$1,
  DDDReset$1,
  DDDBreadcrumb$1,
  DDDExtra$1,
  DDDLetterSpacing$1,
  DDDBoxShadow$1,
  DDDBorderRadius$1,
  DDDBackground$1,
  DDDFontClasses$1,
  DDDFontWeight$1,
  DDDAnimations$1,
];

/**
 * Need to think about support for multiple Design systems at the global level
 * for example, simple colors + DDD
 * Need to test if we can actually start as one and remove and use another
 * clean-portfolio-theme would be a good one to attempt to leverage
 */

let DesignSystem$1 = class DesignSystem extends i$4 {
  constructor() {
    super();
    this.active = null;
    this.systems = [];
    this.__loadedIntegrations = {};
  }
  static get tag() {
    return "design-system";
  }

  static get properties() {
    return {
      active: { type: String },
      systems: { type: Object },
    };
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "active" && this[propName]) {
        // remove the current global stylesheet / adopted styles for the design system
        // replace it with the new active one
        if (
          this.systems[this.active] &&
          globalThis.document &&
          globalThis.document.head
        ) {
          this.applyDesignSystem(
            oldValue ? this.systems[oldValue] : null,
            this.systems[this.active],
          );
          const context = this._integrationContextFromRuntime();
          Promise.resolve(this.loadActiveSystemIntegrations(context))
            .catch((e) => {
              console.warn(e);
            })
            .finally(() => {
              this._rehydrateHAXElementList();
              globalThis.dispatchEvent(
                new CustomEvent("design-system-active-changed", {
                  bubbles: true,
                  cancelable: false,
                  composed: true,
                  detail: {
                    active: this.active,
                    previous: oldValue || null,
                    context,
                  },
                }),
              );
            });
        }
      }
    });
  }
  // add a system so that we can leverage it later
  addDesignSystem(system) {
    if (system.name && system.styles && system.fonts) {
      this.systems[system.name] = system;
    }
  }
  _integrationContextFromRuntime() {
    let editMode = false;
    let isAuthenticated = true;
    if (
      globalThis.HaxStore &&
      typeof globalThis.HaxStore.requestAvailability === "function"
    ) {
      const haxStore = globalThis.HaxStore.requestAvailability();
      editMode = !!haxStore.editMode;
    }
    if (
      globalThis.HAXCMS &&
      globalThis.HAXCMS.instance &&
      globalThis.HAXCMS.instance.store &&
      typeof globalThis.HAXCMS.instance.store.isLoggedIn !== "undefined"
    ) {
      isAuthenticated = !!globalThis.HAXCMS.instance.store.isLoggedIn;
    }
    return {
      editMode,
      isAuthenticated,
    };
  }
  _integrationCacheKey(systemName, integrationName) {
    return `${systemName}::${integrationName}`;
  }
  async loadSystemIntegration(
    systemName,
    integrationName = "hax",
    context = {},
  ) {
    const system = this.systems[systemName];
    if (
      !system ||
      !system.integrations ||
      !system.integrations[integrationName]
    ) {
      return;
    }
    const integration = system.integrations[integrationName];
    if (
      !integration ||
      (!integration.module && typeof integration.importer !== "function")
    ) {
      return;
    }
    if (
      integration.shouldLoad &&
      typeof integration.shouldLoad === "function" &&
      !integration.shouldLoad(context)
    ) {
      return;
    }
    const cacheKey = this._integrationCacheKey(systemName, integrationName);
    if (this.__loadedIntegrations[cacheKey]) {
      return;
    }
    try {
      const mod =
        typeof integration.importer === "function"
          ? await integration.importer()
          : await import(integration.module);
      const payload = {
        manager: this,
        systemName,
        system,
        integrationName,
        integration,
        context,
        options: integration.options || {},
      };
      if (
        integration.exportName &&
        typeof mod[integration.exportName] === "function"
      ) {
        await mod[integration.exportName](payload);
      } else if (typeof mod.default === "function") {
        await mod.default(payload);
      }
      this.__loadedIntegrations[cacheKey] = true;
    } catch (e) {
      console.warn(e);
    }
  }
  async loadActiveSystemIntegrations(context = {}, integrationName = "hax") {
    if (!this.active) {
      return;
    }
    await this.loadSystemIntegration(this.active, integrationName, context);
  }
  _rehydrateHAXElementList() {
    if (
      !globalThis.HaxStore ||
      typeof globalThis.HaxStore.requestAvailability !== "function"
    ) {
      return;
    }
    const HAXStore = globalThis.HaxStore.requestAvailability();
    if (!HAXStore || typeof HAXStore.designSystemHAXProperties !== "function") {
      return;
    }
    Object.keys(HAXStore.elementList || {}).forEach((registeredTag) => {
      if (HAXStore.elementList[registeredTag]) {
        HAXStore.elementList[registeredTag] =
          HAXStore.designSystemHAXProperties(
            HAXStore.elementList[registeredTag],
            registeredTag,
          );
      }
    });
  }

  applyDesignSystem(oldSystem, newSystem) {
    // ensure we clean up the old one
    if (oldSystem) {
      // remove the global css style / fonts
      try {
        if (globalThis.document.adoptedStyleSheets) {
          globalThis.document.adoptedStyleSheets.map((sheet, index) => {
            if (sheet.ds) {
              globalThis.document.adoptedStyleSheets.splice(index, 1);
            }
          });
        }
      } catch (e) {
        const oldStyleSafariBs = globalThis.document.createElement("style");
        oldStyleSafariBs.innerHTML = globalStyles;
        globalThis.document.head.appendChild(oldStyleSafariBs);
      }
      if (oldSystem.fonts) {
        globalThis.document.head
          .querySelectorAll("[data-ds]")
          .forEach((font) => {
            font.remove();
          });
      }
      if (oldSystem.onload) {
        globalThis.document.onload = null;
      }
    }
    // theoretically could turn something on then back off again
    if (newSystem) {
      // convert css into text content of arrays mashed together
      // this way we can inject it into a global style sheet
      let globalStyles = newSystem.styles
        .map((st) => (st.cssText ? st.cssText : ""))
        .join("");
      try {
        const adoptableDS = new CSSStyleSheet();
        // flag it so we can remove it later
        adoptableDS.ds = true;
        adoptableDS.replaceSync(globalStyles);
        // THIS FLAG MAKES HAX LOAD IT IN ITS SHADOW ROOT!!!!
        if (newSystem.hax) {
          adoptableDS.hax = true;
        }
        // Combine the existing adopted sheets if we need to but these will work everywhere
        // and are very fast
        globalThis.document.adoptedStyleSheets = [
          ...globalThis.document.adoptedStyleSheets,
          adoptableDS,
        ];
      } catch (e) {
        const oldStyleSafariBs = globalThis.document.createElement("style");
        oldStyleSafariBs.innerHTML = globalStyles;
        globalThis.document.head.appendChild(oldStyleSafariBs);
      }
      if (newSystem.fonts) {
        newSystem.fonts.forEach((font) => {
          const link = globalThis.document.createElement("link");
          link.setAttribute("href", font);
          link.setAttribute("rel", "stylesheet");
          link.setAttribute("fetchpriority", "low");
          link.setAttribute("data-ds", "font");
          globalThis.document.head.appendChild(link);
        });
      }
      if (newSystem.onload) {
        globalThis.document.onload = newSystem.onload();
      }
    }
  }
};

globalThis.customElements.define(DesignSystem$1.tag, DesignSystem$1);

globalThis.DesignSystemManager = globalThis.DesignSystemManager || {};
globalThis.DesignSystemManager.requestAvailability = () => {
  if (
    !globalThis.DesignSystemManager.instance &&
    globalThis.document &&
    globalThis.document.body
  ) {
    let ds = globalThis.document.createElement("design-system");
    globalThis.document.body.appendChild(ds);
    globalThis.DesignSystemManager.instance = ds;
  }
  return globalThis.DesignSystemManager.instance;
};

const DesignSystemManager$1 =
  globalThis.DesignSystemManager.requestAvailability();

/**
 * Copyright 2024
 * @license Apache-2.0, see License.md for full details.
 */

// super class so we can mix styles into other things more easily
const DDDSuper$1 = function (SuperClass) {
  return class extends SuperClass {
    constructor() {
      super();
      this.isSafari = globalThis.safari !== undefined;
      if (!DesignSystemManager$1.systems.ddd) {
        DesignSystemManager$1.addDesignSystem({
          name: "ddd",
          styles: DDDAllStyles$1,
          fonts: DDDFonts$1,
          integrations: {
            hax: {
              importer: () =>
                Promise.resolve().then(function () { return DDDStyleGuideAuthoring$1; }),
              exportName: "registerDDDStyleGuideAuthoring",
              shouldLoad: (context) =>
                !!context &&
                !!context.editMode &&
                context.isAuthenticated !== false,
              options: {
                HAXOptionSampleFactory: HAXOptionSampleFactory$1,
              },
            },
          },
          onload: () => {
            // check for css feature support
            if (!CSS.supports("initial-letter", "1")) {
              console.warn("CSS feature: initial-letter not supported");
              console.warn("Adding dropCap-noSupport class");
              globalThis.document.body.classList.add("dropCap-noSupport");
            }
          },
          hax: true,
        });
        DesignSystemManager$1.active = "ddd";
      }
    }
    static get properties() {
      return {
        ...super.properties,
        isSafari: { type: Boolean, reflect: true, attribute: "is-safari" },
      };
    }
    /**
     * LitElement style callback
     */
    static get styles() {
      // support for using in other classes
      let styles = [];
      if (super.styles) {
        styles = super.styles;
      }
      return [
        styles,
        DDDReset$1,
        i$7`
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              transition-delay: 0ms !important;
              scroll-behavior: auto !important;
            }
          }
        `,
      ];
    }
  };
};

// autoloads fonts and gives it a tag name; this is useful
let DDD$1 = class DDD extends DDDSuper$1(SimpleColorsSuper$1(i$4)) {
  constructor() {
    super();
  }
  static get tag() {
    return "d-d-d";
  }
};

globalThis.customElements.define(DDD$1.tag, DDD$1);

let DDDSample$1 = class DDDSample extends DDDSuper$1(i$4) {
  constructor() {
    super();
    this.type = null;
    this.option = 0;
  }

  static get styles() {
    return [
      super.styles,
      ...DDDDataAttributes$1,
      i$7`
        :host {
          display: flex;
          min-height: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-1) 0;
          margin: 0;
          font-size: var(--ddd-font-size-4xs);
          line-height: normal;
        }
        :host([type="accent"]:hover),
        :host([type="primary"]:hover) {
          color: black;
          background-color: light-dark(
            var(--ddd-theme-default-limestoneMaxLight),
            var(--ddd-theme-default-limestoneGray)
          );
        }

        :host([type="accent"]) .sample,
        :host([type="primary"]) .sample {
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-xs);
          box-shadow: var(--ddd-boxShadow-sm);
          height: var(--ddd-spacing-4);
          width: var(--ddd-spacing-8);
          display: inline-block;
        }

        :host([type="border"]) .sample,
        :host([type="border-radius"]) .sample,
        :host([type="box-shadow"]) .sample {
          --ddd-theme-primary: var(--ddd-sample-theme-primary, black);
          --ddd-theme-accent: var(
            --ddd-sample-theme-accent,
            var(--ddd-accent-3)
          );
          background-color: var(--ddd-theme-accent);
          border-color: var(--ddd-theme-primary);
          height: var(--ddd-spacing-4);
          width: var(--ddd-spacing-8);
          display: inline-block;
        }
        :host([type="border"]) .sample {
          height: calc(var(--ddd-spacing-4) - var(--ddd-theme-border-size));
          width: calc(var(--ddd-spacing-8) - var(--ddd-theme-border-size));
        }
        :host([type="border-radius"]) .sample {
          border: var(--ddd-border-lg);
          height: var(--ddd-spacing-8);
          width: var(--ddd-spacing-8);
          border-color: var(--ddd-theme-primary);
          clip-path: polygon(50% 0, 0 50%, 0 0, 0 0);
          transform: scale(4);
          padding: 0;
          margin-left: 64px;
          margin-top: 64px;
        }
        :host([type="box-shadow"]) .sample {
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-primary);
          margin: 0 12px 12px 12px;
        }

        :host([type="accent"]:hover) .sample,
        :host([type="primary"]:hover) .sample {
          border-color: black;
        }
        :host([type="border"]) .label,
        :host([type="box-shadow"]) .label,
        :host([type="accent"]) .label,
        :host([type="primary"]) .label,
        :host([type="margin"]) .label,
        :host([type="padding"]) .label {
          font-size: var(--ddd-font-size-4xs);
          margin-left: var(--ddd-spacing-3);
          display: inline-block;
          vertical-align: top;
        }
        :host([type="border-radius"]) .label {
          margin-left: calc(-1 * var(--ddd-spacing-5));
          display: inline-block;
          vertical-align: top;
          height: var(--ddd-spacing-20);
          line-height: var(--ddd-spacing-20);
        }

        :host([type="margin"]) .label,
        :host([type="padding"]) .label {
          font-weight: var(--ddd-font-weight-bold);
        }
        :host([type="accent"]) .sample {
          background-color: var(--ddd-theme-accent);
        }
        :host([type="primary"]) .sample {
          background-color: var(--ddd-theme-primary);
        }

        :host([type="margin"]) .sample[data-margin],
        :host([type="padding"]) .sample {
          display: inline-block;
          height: var(--ddd-spacing-6);
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          background-color: var(--ddd-primary-2);
          margin: 0;
        }

        /* design treatments may require display block */
        :host([type="design-treatment"]) .label {
          display: block;
          font-weight: bold;
          --ddd-theme-primary: var(
            --ddd-sample-theme-primary,
            var(--ddd-primary-0)
          );
          min-height: calc(
            (var(--initialLetter) / 3 * var(--ddd-theme-body-font-size) * 1.5) +
              20px
          );
        }

        :host([type="design-treatment"][option="bg"]) .label {
          color: var(
            --ddd-theme-bgContrast,
            var(--lowContrast-override, black)
          );
        }

        :host([type="font-weight"]) .label,
        :host([type="font-family"]) .label {
          font-size: var(--ddd-font-size-s);
        }

        /* @hack just for the docs bc we can't visualize margins */
        [data-margin="center"] {
          margin-left: auto;
          margin-right: auto;
        }
        [data-margin="xs"] {
          padding: var(--ddd-spacing-2);
        }
        [data-margin="s"] {
          padding: var(--ddd-spacing-4);
        }
        [data-margin="m"] {
          padding: var(--ddd-spacing-8);
        }
        [data-margin="l"] {
          padding: var(--ddd-spacing-12);
        }
        [data-margin="xl"] {
          padding: var(--ddd-spacing-16);
        }

        /* @hack from normal presentation so that it renders nicely here */
        [data-instructional-action]::before {
          padding: 6px 0 0;
          margin: 8px 16px 0 0;
        }

        /* @hack so that we reduce the size of the drop cap or it'll be ridiculous */
        :host([type="design-treatment"])
          .label[data-design-treatment^="dropCap"]::first-letter {
          -webkit-initial-letter: calc(var(--initialLetter) / 3);
          initial-letter: calc(var(--initialLetter) / 3);
        }
        /* @hack so we can see fonts relative to each other, not exact size */
        :host([type="font-size"]) span ::slotted(*) {
          font-size: var(--ddd-font-size-xs);
        }
        :host([type="font-size"]) .label {
          font-size: 0.8em;
        }
        :host([option^="type"]) .label {
          font-size: 0.5em;
        }
        :host([option^="type"]) .label::after {
          content: " (50% scale)";
          font-size: var(--ddd-font-size-4xs);
        }
      `,
    ];
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    if (changedProperties.has("type") && this.shadowRoot) {
      let span;
      // accent, primary, spacing
      if (
        [
          "accent",
          "primary",
          "padding",
          "margin",
          "border-radius",
          "box-shadow",
          "border",
        ].includes(this.type)
      ) {
        span = this.shadowRoot.querySelector("span.sample");
      } else if (this.type === "font-size") {
        span = this.shadowRoot.querySelector("div.wrapper");
      } else {
        span = this.shadowRoot.querySelector("span.label");
      }
      for (let i in ApplicationAttributeData$1) {
        span.removeAttribute(`data-${i}`);
      }
      // delay to ensure prev executes in order
      setTimeout(() => {
        span.setAttribute(`data-${this.type}`, this.option);
      }, 0);
    }
    if (changedProperties.has("option") && this.shadowRoot && this.type) {
      let span = this.shadowRoot.querySelector(`span[data-${this.type}]`);
      if (span) {
        span.setAttribute(`data-${this.type}`, this.option);
      }
    }
  }

  render() {
    return b$2`
      <div class="wrapper">
        <span class="sample"></span
        ><span class="label"
          >${ApplicationAttributeData$1[this.type][this.option]}<slot></slot
        ></span>
      </div>
    `;
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
      option: { type: String },
    };
  }

  static get tag() {
    return "d-d-d-sample";
  }
};

globalThis.customElements.define(DDDSample$1.tag, DDDSample$1);

/**
 * Copyright 2021 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text
 */
// register globally so we can make sure there is only one
globalThis.I18NManagerStore = globalThis.I18NManagerStore || {};
globalThis.I18NManagerStore.requestAvailability = () => {
  if (
    !globalThis.I18NManagerStore.instance &&
    globalThis.document &&
    globalThis.document.body
  ) {
    globalThis.I18NManagerStore.instance =
      globalThis.document.createElement("i18n-manager");
    globalThis.document.body.appendChild(globalThis.I18NManagerStore.instance);
  }
  return globalThis.I18NManagerStore.instance;
};
const I18NManagerStore$1 =
  globalThis.I18NManagerStore.requestAvailability();
const FALLBACK_LANG$1 = "en";
const FALLBACK_DIR$1 = "ltr";
/**
 * `i18n-manager`
 * `internationalization management singleton and helper classes`
 * @demo demo/index.html
 * @element i18n-manager
 */
let I18NManager$1 = class I18NManager extends i$4 {
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.windowControllers = new AbortController();
    // fetch caching to reduce calls for json files
    this.fetchTargets = {};
    // reference to all elements that care about localization
    this.elements = [];
    // quick set of all locales
    this.locales = new Set([]);
    // translation manifest (lazy loaded when needed)
    this.translationManifest = null;
    this.manifestLoaded = false;
    this.manifestLoading = false;
    // set initially based on document
    this.lang = this.documentLang;
    this.dir = this.documentDir;
  }
  /**
   * Set document language from these common sources
   */
  get documentLang() {
    return (
      globalThis.document.body.getAttribute("xml:lang") ||
      globalThis.document.body.getAttribute("lang") ||
      globalThis.document.documentElement.getAttribute("xml:lang") ||
      globalThis.document.documentElement.getAttribute("lang") ||
      globalThis.navigator.language ||
      FALLBACK_LANG$1
    );
  }
  /**
   * Set document direction from these common sources
   */
  get documentDir() {
    return (
      globalThis.document.body.getAttribute("xml:dir") ||
      globalThis.document.body.getAttribute("dir") ||
      globalThis.document.documentElement.getAttribute("xml:dir") ||
      globalThis.document.documentElement.getAttribute("dir") ||
      FALLBACK_DIR$1
    );
  }
  /**
   * Life cycle
   */
  connectedCallback() {
    this.__ready = true;
    globalThis.addEventListener(
      "i18n-manager-register-element",
      this.registerLocalizationEvent.bind(this),
      { signal: this.windowControllers.signal },
    );

    globalThis.addEventListener(
      "languagechange",
      this.changeLanguageEvent.bind(this),
      { signal: this.windowControllers.signal },
    );

    // Observe document <html>/<body> for lang/dir attribute changes to keep in sync
    try {
      this._docObserver = new MutationObserver((mutations) => {
        let nextLang = null;
        let nextDir = null;
        mutations.forEach((m) => {
          if (m.type === "attributes") {
            const name = m.attributeName;
            if (name === "lang" || name === "xml:lang") {
              nextLang = this.documentLang;
            }
            if (name === "dir" || name === "xml:dir") {
              nextDir = this.documentDir;
            }
          }
        });
        if (nextLang && nextLang !== this.lang) {
          this.lang = nextLang;
        }
        if (nextDir && nextDir !== this.dir) {
          this.dir = nextDir;
        }
      });
      const opts = {
        attributes: true,
        attributeFilter: ["lang", "xml:lang", "dir", "xml:dir"],
      };
      if (globalThis.document && globalThis.document.documentElement) {
        this._docObserver.observe(globalThis.document.documentElement, opts);
      }
      if (globalThis.document && globalThis.document.body) {
        this._docObserver.observe(globalThis.document.body, opts);
      }
    } catch (e) {
      console.warn("i18n-manager: Failed to start document observer", e);
    }
  }
  /**
   * Life cycle
   */
  disconnectedCallback() {
    this.windowControllers.abort();
    if (this._docObserver) {
      try {
        this._docObserver.disconnect();
      } catch (e) {}
      this._docObserver = null;
    }
  }
  /**
   * Browser level languagechange event
   */
  changeLanguageEvent(e) {
    // will trigger the language to update in all related elements
    // Use provided detail if available, otherwise fall back to current document language
    const next = e && e.detail ? e.detail : this.documentLang;
    if (next) {
      this.lang = next;
    }
  }
  /**
   * Register a localization via event; this allow for a 0 dependency solution!
   */
  registerLocalizationEvent(e) {
    let detail = this.detailNormalize(e.detail);
    // ensure we have a namespace and localesPath for later use
    // locales is optional for manifest-based detection
    if (detail.namespace && detail.localesPath) {
      this.registerLocalization(detail);
    }
  }
  /**
   * Apply normalization to all details bubbling up to improve
   * flexibility and patching to how other people implement our
   * API. This also can improve DX downstream by making educated
   * guesses as to intent (like namespace, localesPath, updateCallback)
   */
  detailNormalize(detail) {
    if (!detail.namespace && detail.context) {
      detail.namespace = detail.context.tagName.toLowerCase();
    }
    // support fallback calls for requestUpdate (LitElement) and render if nothing set
    if (!detail.updateCallback && detail.context) {
      if (detail.context.requestUpdate) {
        detail.updateCallback = "requestUpdate";
      } else if (detail.context.render) {
        detail.updateCallback = "render";
      }
    }
    if (!detail.localesPath && detail.basePath) {
      // clean up path and force adding locales. part security thing as well
      detail.localesPath = `${decodeURIComponent(detail.basePath)}/../locales`;
    }
    // minimum requirement to operate but still
    // should pull from other namespace if exists
    if (detail.context && detail.namespace) {
      // establish the fallback automatically if we are supplied defaults
      if (detail.context.t) {
        detail.context._t = { ...detail.context.t };
      }
      let match = this.elements.filter((el) => {
        // Match by namespace and localesPath, locales is optional for manifest-based
        if (el.namespace == detail.namespace && el.localesPath) {
          return true;
        }
      });
      if (match && match.length && match[0]) {
        detail.localesPath = match[0].localesPath;
        // Only copy locales if they exist (for legacy support)
        if (match[0].locales) {
          detail.locales = match[0].locales;
        }
      }
    }
    return detail;
  }
  /**
   * Register a localization with the manager
   */
  registerLocalization(detail) {
    // ensure no dual registration of context; meaning same object twice
    if (
      (!detail.context &&
        this.elements.filter((e) => {
          return e.namespace === detail.namespace;
        }).length === 0) ||
      this.elements.filter((e) => {
        return e.context === detail.context;
      }).length === 0
    ) {
      detail = this.detailNormalize(detail);
      this.elements.push(detail);

      // store in this.locales for quick "do we support this" look up
      if (detail && detail.locales) {
        detail.locales.forEach(this.locales.add, this.locales);
      }
      // timing issue, see if we are ready + a language and that it happened PRIOR
      // to registration just now but match against locales we support
      // For manifest-based elements (no locales), always trigger update if language is set
      if (
        this.lang &&
        this.__ready &&
        ((detail.locales && detail.locales.includes(this.lang)) ||
          (!detail.locales &&
            this.lang !== "en" &&
            !this.lang.startsWith("en-")))
      ) {
        // prevent flooding w/ lots of translatable elements
        clearTimeout(this._debounce);
        this._debounce = setTimeout(() => {
          this.updateLanguage(this.lang);
        }, 0);
      }
    }
  }
  /**
   * Lazy load the translation manifest only when needed (non-English language)
   */
  async loadTranslationManifest() {
    if (this.manifestLoaded || this.manifestLoading) {
      return this.translationManifest;
    }

    this.manifestLoading = true;
    try {
      const manifestUrl = new URL(
        "./lib/translation-manifest.json",
        import.meta.url,
      ).href;
      const response = await fetch(manifestUrl);
      if (response.ok) {
        const data = await response.json();
        this.translationManifest = data.manifest || {};
        this.manifestLoaded = true;
      } else {
        console.warn(
          "Translation manifest not found, falling back to component locales",
        );
        this.translationManifest = {};
        this.manifestLoaded = true;
      }
    } catch (e) {
      console.warn("Failed to load translation manifest:", e.message);
      this.translationManifest = {};
      this.manifestLoaded = true;
    } finally {
      this.manifestLoading = false;
    }
    return this.translationManifest;
  }
  /**
   * Check if a namespace supports a specific language
   * Returns false if manifest is not loaded and language needs manifest
   */
  hasTranslation(namespace, language) {
    if (!this.manifestLoaded || !this.translationManifest) {
      // If manifest isn't loaded but we need it, return false to let component locales handle it
      return false;
    }
    return (
      this.translationManifest[namespace] &&
      this.translationManifest[namespace].includes(language)
    );
  }
  /**
   * Determine if we need to load the manifest for this language
   */
  needsManifest(language) {
    // Only load manifest for non-English languages
    return language && language !== "en" && !language.startsWith("en-");
  }
  /**
   * Fetch and parse JSON, returning false when URL/file is unavailable or invalid
   */
  async _fetchJsonTarget(fetchTarget) {
    try {
      const response = await fetch(fetchTarget);
      if (response && response.ok && response.json) {
        return await response.json();
      }
    } catch (e) {}
    return false;
  }
  /**
   * Convention we use
   */
  static get tag() {
    return "i18n-manager";
  }
  /**
   * Return language file for a specific context
   */
  async loadNamespaceFile(ns, lang = this.lang) {
    const langPieces = lang.split("-");
    let nsMatch = this.elements.filter((el) => {
      return el.namespace === ns;
    });
    // Use the first match for namespace info, multiple elements can share the same namespace
    if (nsMatch && nsMatch.length >= 1) {
      const el = nsMatch[0];

      // Load manifest if needed (only for non-English)
      if (this.needsManifest(lang) && !this.manifestLoaded) {
        await this.loadTranslationManifest();
      }

      // Check manifest first to avoid unnecessary requests
      const supportsExact = this.hasTranslation(ns, lang);
      const supportsBase = this.hasTranslation(ns, langPieces[0]);

      // Fallback to component locales if manifest not loaded or doesn't contain info
      const componentSupportsExact = el.locales && el.locales.includes(lang);
      const componentSupportsBase =
        el.locales && el.locales.includes(langPieces[0]);

      // If we have manifest data, use it; otherwise fallback to component data
      const shouldLoadExact =
        supportsExact || (!this.manifestLoaded && componentSupportsExact);
      const shouldLoadBase =
        supportsBase || (!this.manifestLoaded && componentSupportsBase);

      // For manifest-based elements (no locales), try to load if manifest is loaded and supports it
      // or if manifest isn't loaded yet, attempt to load anyway (will 404 if not available)
      const isManifestBased = !el.locales;
      const shouldAttemptManifestLoad =
        isManifestBased &&
        this.needsManifest(lang) &&
        (supportsExact || supportsBase || !this.manifestLoaded);

      if (!shouldLoadExact && !shouldLoadBase && !shouldAttemptManifestLoad) {
        return {};
      }

      var fetchTarget = "";
      if (shouldLoadExact || (isManifestBased && supportsExact)) {
        fetchTarget = `${el.localesPath}/${el.namespace}.${lang}.json`;
      } else if (shouldLoadBase || (isManifestBased && supportsBase)) {
        fetchTarget = `${el.localesPath}/${el.namespace}.${langPieces[0]}.json`;
      } else if (
        isManifestBased &&
        !this.manifestLoaded &&
        this.needsManifest(lang)
      ) {
        // For manifest-based elements, try exact match first when manifest not loaded yet
        fetchTarget = `${el.localesPath}/${el.namespace}.${lang}.json`;
      }

      if (fetchTarget == "") {
        return {};
      }

      // see if we had this previous to avoid another request
      if (!this.fetchTargets[fetchTarget]) {
        this.fetchTargets[fetchTarget] =
          await this._fetchJsonTarget(fetchTarget);
      }
      return this.fetchTargets[fetchTarget];
    }
  }
  /**
   * trigger an update of the language after loading everything
   */
  async updateLanguage(lang) {
    if (lang) {
      const langPieces = lang.split("-");

      // Load manifest if needed (only for non-English)
      if (this.needsManifest(lang) && !this.manifestLoaded) {
        await this.loadTranslationManifest();
      }
      // get all exact matches as well as partial matches using manifest
      const processList = this.elements.filter((el) => {
        try {
          // Use manifest if available, fallback to component locales
          const supportsExact = this.hasTranslation(el.namespace, lang);
          const supportsBase = this.hasTranslation(el.namespace, langPieces[0]);
          // Fallback to component locales if not in manifest
          const componentSupportsExact =
            el.locales && el.locales.includes(lang);
          const componentSupportsBase =
            el.locales && el.locales.includes(langPieces[0]);

          // For elements without locales, include them if:
          // 1. The manifest is loaded and supports the language, OR
          // 2. The manifest isn't loaded yet but the language needs manifest (let's try to load it)
          const manifestBasedSupport =
            !el.locales &&
            ((this.manifestLoaded && (supportsExact || supportsBase)) ||
              (!this.manifestLoaded && this.needsManifest(lang)));

          return (
            supportsExact ||
            supportsBase ||
            componentSupportsExact ||
            componentSupportsBase ||
            manifestBasedSupport
          );
        } catch (e) {
          console.error("i18n registration incorrect in:", el, e);
        }
      });
      const fallBack = this.elements.filter((el) => {
        try {
          const supportsExact = this.hasTranslation(el.namespace, lang);
          const supportsBase = this.hasTranslation(el.namespace, langPieces[0]);
          const componentSupportsExact =
            el.locales && el.locales.includes(lang);
          const componentSupportsBase =
            el.locales && el.locales.includes(langPieces[0]);

          // For elements without locales, check if they're supported by manifest
          const manifestBasedSupport =
            !el.locales &&
            ((this.manifestLoaded && (supportsExact || supportsBase)) ||
              (!this.manifestLoaded && this.needsManifest(lang)));

          return (
            !supportsExact &&
            !supportsBase &&
            !componentSupportsExact &&
            !componentSupportsBase &&
            !manifestBasedSupport
          );
        } catch (e) {
          return true; // Fallback on error
        }
      });
      // no matches found, now we should fallback to defaults in the elements
      if (fallBack.length !== 0) {
        // fallback to documentLanguage
        for (var i in fallBack) {
          let el = fallBack[i];
          // verify we have a context
          if (el.context) {
            // reset to the fallback language t value
            el.context.t = { ...el.context._t };
            // support a forced update / function to run when it finishes
            if (el.updateCallback) {
              el.context[el.updateCallback]();
            }
          }
        }
      }
      // run through and match exact matches
      for (var i in processList) {
        let el = processList[i];
        var fetchTarget = "";
        // Use manifest checks first, fallback to component locales
        const supportsExact = this.hasTranslation(el.namespace, lang);
        const supportsBase = this.hasTranslation(el.namespace, langPieces[0]);
        const componentSupportsExact = el.locales && el.locales.includes(lang);
        const componentSupportsBase =
          el.locales && el.locales.includes(langPieces[0]);
        const isManifestBased = !el.locales;

        if (
          supportsExact ||
          componentSupportsExact ||
          (isManifestBased && supportsExact)
        ) {
          fetchTarget = `${el.localesPath}/${el.namespace}.${lang}.json`;
        } else if (
          supportsBase ||
          componentSupportsBase ||
          (isManifestBased && supportsBase)
        ) {
          fetchTarget = `${el.localesPath}/${el.namespace}.${langPieces[0]}.json`;
        } else if (
          isManifestBased &&
          !this.manifestLoaded &&
          this.needsManifest(lang)
        ) {
          // For manifest-based elements, try exact match first when manifest not loaded yet
          fetchTarget = `${el.localesPath}/${el.namespace}.${lang}.json`;
        }
        // Skip if no fetch target was determined
        if (!fetchTarget) {
          continue;
        }
        // see if we had this previous to avoid another request
        if (this.fetchTargets[fetchTarget]) {
          if (el.context) {
            let data = this.fetchTargets[fetchTarget];
            if (data) {
              for (var id in data) {
                el.context.t[id] = data[id];
              }
            }
            el.context.t = { ...el.context.t };
            // support a forced update / function to run when it finishes
            if (el.updateCallback) {
              el.context[el.updateCallback]();
            }
          }
        } else {
          // request the json backing, then make JSON and set the associated values
          // @todo catch this if fetch target was previously requested
          this.fetchTargets[fetchTarget] =
            await this._fetchJsonTarget(fetchTarget);
          if (el.context) {
            let data = this.fetchTargets[fetchTarget];
            // set values
            if (data) {
              for (var id in data) {
                el.context.t[id] = data[id];
              }
            }
            // spread can generate notify statements in downstream elements
            // this probably makes updateCallback irrelevant in reactive
            // projects like LitElement but just to be double sure
            el.context.t = { ...el.context.t };
            // support a forced update / function to run when it finishes
            if (el.updateCallback && el.context) {
              el.context[el.updateCallback]();
            }
          }
        }
      }
    }
  }
  /**
   * Life cycle
   */
  static get observedAttributes() {
    return ["lang", "dir"];
  }
  /**
   * Life cycle
   */
  attributeChangedCallback(attr, oldValue, newValue) {
    // notify of attr change
    if (attr === "lang" || attr === "dir") {
      this.dispatchEvent(
        new CustomEvent(`${attr}-changed`, {
          detail: {
            value: newValue,
          },
        }),
      );
    }
    // we are NOT moving to the default from something
    if (attr === "lang" && newValue && this.__ready) {
      this.updateLanguage(newValue);
    }
  }
  // getters and setters to map props to attributes
  get lang() {
    return this.getAttribute("lang");
  }
  set lang(val) {
    if (!val) {
      this.removeAttribute("lang");
    } else {
      this.setAttribute("lang", val);
    }
  }
  get dir() {
    return this.getAttribute("dir");
  }
  set dir(val) {
    if (!val) {
      this.removeAttribute("dir");
    } else {
      this.setAttribute("dir", val);
    }
  }
};
globalThis.customElements.define(I18NManager$1.tag, I18NManager$1);

// SuperClass to simplify wiring up and noticing changes to t values
// this is not required as you can simply use the event system
// to keep to 0 dependencies but this helps simplify and standardize
// integration with lots of downstream i18n files
const I18NMixin$1 = function (SuperClass) {
  return class extends SuperClass {
    /**
     * Life cycle
     */
    constructor() {
      super();
      if (!this.t) {
        this.t = {};
      }
    }
    /**
     * Enhanced data reactivity for LitElement if available
     */
    static get properties() {
      return {
        ...super.properties,
        t: {
          type: Object,
        },
      };
    }
    // pass through to the manager, automatically adding some namespace values
    registerLocalization(detail) {
      // ensure we have a namespace for later use
      if (
        !detail.namespace &&
        detail.context &&
        detail.context.tagName &&
        detail.context.tagName
      ) {
        detail.namespace = detail.context.tagName.toLowerCase();
      }
      // support fallback calls for requestUpdate; you can always supply one
      if (!detail.updateCallback) {
        if (detail.context.requestUpdate) {
          detail.updateCallback = "requestUpdate";
          // automatically set for common VanillaJS convention
        } else if (detail.context.render) {
          detail.updateCallback = "render";
        }
      }
      // auto-detect localePath if we have a basePath
      // this is another short hand that allows for enforcing the location
      // of the locales bucket of files. You can define where these are
      // per request but this helps simplify the original implementation
      if (!detail.localesPath && detail.basePath) {
        // clean up path and force adding locales. part security thing as well
        detail.localesPath = `${decodeURIComponent(
          detail.basePath,
        )}/../locales`;
      }
      // register the localization directly, skipping event
      // this also ensures that things leveraging the Mixin will never miss
      // the singleton being registered
      if (I18NManagerStore$1) {
        I18NManagerStore$1.registerLocalization(detail);
      }
    }
  };
};

class TodoList extends I18NMixin$1(DDDSuper$1(i$4)) {
  static get tag() {
    return "todo-list";
  }

  static get properties() {
    return {
      ...super.properties,
      tasks: { type: Array },
      _validationError: { type: String },
    };
  }

  constructor() {
    super();
    this.tasks = [];
    this._validationError = "";
    this.t = {
      addTask: "Add Task",
      inputPlaceholder: "Enter a new task...",
      deleteTask: "Delete task",
      emptyMessage: "No tasks yet. Add one above!",
      taskCompleted: "Mark as incomplete",
      taskIncomplete: "Mark as complete",
      validationErrorMinLength: "Task must be at least 3 characters",
      validationErrorMaxLength: "Task must be no more than 50 characters",
    };
  }

  static get styles() {
    return [
      super.styles,
      i$7`
        /* ── Polaris Theme: host container ───────────────────────────────── */
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
          padding: var(--ddd-spacing-8);
          background: var(
            --ddd-theme-polaris-background,
            var(--ddd-theme-background)
          );
          color: var(--ddd-theme-polaris-text, var(--ddd-theme-primary));
          max-width: 640px;
          border-radius: var(--ddd-radius-lg);
          box-shadow: 0 var(--ddd-spacing-1) var(--ddd-spacing-5)
            rgba(0, 0, 0, 0.08);
        }

        /* ── Polaris heading ─────────────────────────────────────────────── */
        .todo-heading {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-polaris-primary, var(--ddd-theme-primary));
          margin: 0 0 var(--ddd-spacing-6) 0;
          letter-spacing: -0.01em;
        }

        /* ── Input area ──────────────────────────────────────────────────── */
        .input-area {
          display: flex;
          gap: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-3);
        }

        .task-input {
          flex: 1;
          padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-s);
          border: 1.5px solid
            var(--ddd-theme-polaris-border, var(--ddd-theme-accent));
          border-radius: var(--ddd-radius-md);
          background: var(
            --ddd-theme-polaris-surface,
            var(--ddd-theme-background)
          );
          color: var(--ddd-theme-polaris-text, var(--ddd-theme-primary));
          outline: none;
          transition:
            border-color 0.15s ease,
            box-shadow 0.15s ease;
        }

        .task-input:focus {
          border-color: var(--ddd-theme-polaris-accent, var(--ddd-theme-link));
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        /* ── Polaris pill-style Add button ───────────────────────────────── */
        .add-button {
          padding: var(--ddd-spacing-4) var(--ddd-spacing-7);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          background: var(--ddd-theme-polaris-primary, var(--ddd-theme-accent));
          color: var(
            --ddd-theme-polaris-primary-text,
            var(--ddd-theme-background)
          );
          border: none;
          border-radius: var(--ddd-radius-xl);
          cursor: pointer;
          white-space: nowrap;
          transition:
            background 0.15s ease,
            box-shadow 0.15s ease;
          box-shadow: 0 var(--ddd-spacing-1) var(--ddd-spacing-3)
            rgba(0, 0, 0, 0.12);
        }

        .add-button:hover {
          background: var(
            --ddd-theme-polaris-primary-hover,
            var(--ddd-theme-link)
          );
          box-shadow: 0 var(--ddd-spacing-1) var(--ddd-spacing-4)
            rgba(0, 0, 0, 0.18);
        }

        .add-button:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        /* ── Task list ───────────────────────────────────────────────────── */
        .task-list {
          list-style: none;
          padding: var(--ddd-spacing-0, 0);
          margin: var(--ddd-spacing-4) 0 0 0;
        }

        /* ── Polaris card-style task item ────────────────────────────────── */
        .task-item {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
          margin-bottom: var(--ddd-spacing-3);
          background: var(
            --ddd-theme-polaris-surface,
            var(--ddd-theme-background-secondary)
          );
          border-radius: var(--ddd-radius-lg);
          border-left: var(--ddd-spacing-1) solid
            var(--ddd-theme-polaris-accent, var(--ddd-theme-accent));
          box-shadow: 0 1px var(--ddd-spacing-3) rgba(0, 0, 0, 0.06);
          transition: box-shadow 0.15s ease;
        }

        .task-item:hover {
          box-shadow: 0 var(--ddd-spacing-1) var(--ddd-spacing-5)
            rgba(0, 0, 0, 0.1);
        }

        /* ── Checkbox ────────────────────────────────────────────────────── */
        .task-checkbox {
          width: var(--ddd-spacing-5);
          height: var(--ddd-spacing-5);
          cursor: pointer;
          accent-color: var(
            --ddd-theme-polaris-primary,
            var(--ddd-theme-accent)
          );
          flex-shrink: 0;
        }

        .task-checkbox:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        /* ── Task text ───────────────────────────────────────────────────── */
        .task-text {
          flex: 1;
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-polaris-text, var(--ddd-theme-primary));
          line-height: 1.5;
        }

        .task-text.completed {
          text-decoration: line-through;
          color: var(--ddd-theme-disabled);
          opacity: var(--ddd-opacity-50);
        }

        /* ── Polaris rounded-rectangle Delete button ─────────────────────── */
        .delete-button {
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-xs);
          font-weight: var(--ddd-font-weight-bold);
          background: transparent;
          color: var(--ddd-theme-error);
          border: 1.5px solid var(--ddd-theme-error);
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          flex-shrink: 0;
          transition:
            background 0.15s ease,
            color 0.15s ease;
        }

        .delete-button:hover {
          background: var(--ddd-theme-error);
          color: var(--ddd-theme-polaris-surface, var(--ddd-theme-background));
        }

        .delete-button:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            rgba(var(--ddd-theme-error-rgb, 220, 38, 38), 0.25);
        }

        /* ── Polaris empty state ─────────────────────────────────────────── */
        .empty-message {
          text-align: center;
          padding: var(--ddd-spacing-10) var(--ddd-spacing-8);
          color: var(--ddd-theme-disabled);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-m);
          font-style: italic;
          background: var(
            --ddd-theme-polaris-surface,
            var(--ddd-theme-background-secondary)
          );
          border-radius: var(--ddd-radius-lg);
          border: 1.5px dashed
            var(--ddd-theme-polaris-border, var(--ddd-theme-accent));
          margin-top: var(--ddd-spacing-4);
        }

        /* ── Validation error ────────────────────────────────────────────── */
        .validation-error {
          color: var(--ddd-theme-error);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-xs);
          margin: var(--ddd-spacing-0, 0);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-1);
        }
      `,
    ];
  }

  render() {
    return b$2`
      <div class="input-area">
        <input
          id="task-input"
          class="task-input"
          type="text"
          placeholder="${this.t.inputPlaceholder}"
          aria-label="${this.t.addTask}"
          aria-describedby="task-input-error"
          @keydown="${this._handleInputKeydown}"
          @input="${this._handleInputChange}"
        />
        <button
          class="add-button"
          aria-label="${this.t.addTask}"
          @click="${this._handleAddClick}"
        >
          ${this.t.addTask}
        </button>
      </div>

      ${this._validationError
        ? b$2`<p id="task-input-error" role="alert" class="validation-error">
            ${this._validationError}
          </p>`
        : ""}
      ${this.tasks.length === 0
        ? b$2`<p class="empty-message">${this.t.emptyMessage}</p>`
        : b$2`
            <ul class="task-list" aria-label="Task list">
              ${this.tasks.map((task) => this._renderTask(task))}
            </ul>
          `}
    `;
  }

  _renderTask(task) {
    return b$2`
      <li class="task-item" data-id="${task.id}">
        <input
          type="checkbox"
          class="task-checkbox"
          .checked="${task.completed}"
          aria-label="${task.completed
            ? this.t.taskCompleted
            : this.t.taskIncomplete}"
          aria-checked="${task.completed}"
          @change="${(e) =>
            this._handleToggleComplete(task.id, e.target.checked)}"
        />
        <span class="task-text ${task.completed ? "completed" : ""}"
          >${task.text}</span
        >
        <button
          class="delete-button"
          aria-label="${this.t.deleteTask}: ${task.text}"
          @click="${() => this._handleDelete(task.id)}"
        >
          ${this.t.deleteTask}
        </button>
      </li>
    `;
  }

  _handleInputKeydown(e) {
    if (e.key === "Enter") {
      this._addTask();
    }
  }

  _handleAddClick() {
    this._addTask();
  }

  _handleInputChange(e) {
    if (e.target.value.trim().length === 0) {
      this._validationError = "";
    }
  }

  _handleDelete(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  _handleToggleComplete(id, checked) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: checked } : task,
    );
  }

  _addTask() {
    const input = this.shadowRoot.querySelector("#task-input");
    const text = input.value.trim();

    // Empty/whitespace check — clear error and return
    if (!text) {
      this._validationError = "";
      return;
    }

    // Min length check
    if (text.length < 3) {
      this._validationError = this.t.validationErrorMinLength;
      return;
    }

    // Max length check
    if (text.length > 50) {
      this._validationError = this.t.validationErrorMaxLength;
      return;
    }

    // Valid — clear error and add task
    this._validationError = "";
    const newTask = {
      id:
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2) + Date.now(),
      text,
      completed: false,
    };
    this.tasks = [...this.tasks, newTask];
    input.value = "";
    input.focus();
  }

  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: false,
      gizmo: {
        title: "Todo List",
        description: "A simple task management web component",
        icon: "icons:assignment",
        color: "blue",
        tags: ["Productivity", "Content"],
      },
      settings: {
        configure: [],
        advanced: [],
      },
    };
  }
}

globalThis.customElements.define(TodoList.tag, TodoList);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i$1=t=>t,s$1=t.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$1=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+o$1,r=`<${n}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$1+x):s+o$1+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$1),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$1)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$1),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$1,t+1));)d.push({type:7,index:l}),t+=o$1.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o=s.litElementPolyfillSupport;o?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 *
 * `simple-colors-shared-styles`
 * @element simple-colors-shared-styles
 * a shared set of styles for `simple-colors`
 *
 *

 * @demo ./demo/index.html
 */

globalThis.SimpleColorsSharedStyles = {};
globalThis.SimpleColorsSharedStyles.instance = null;

class SimpleColorsSharedStyles extends i {
  //styles function
  static get styles() {
    return [
      i$3`
        html {
          --simple-colors-default-theme-accent-1: #ffffff;
          --simple-colors-default-theme-accent-2: #eeeeee;
          --simple-colors-default-theme-accent-3: #dddddd;
          --simple-colors-default-theme-accent-4: #cccccc;
          --simple-colors-default-theme-accent-5: #bbbbbb;
          --simple-colors-default-theme-accent-6: #999999;
          --simple-colors-default-theme-accent-7: #666666;
          --simple-colors-default-theme-accent-8: #444444;
          --simple-colors-default-theme-accent-9: #333333;
          --simple-colors-default-theme-accent-10: #222222;
          --simple-colors-default-theme-accent-11: #111111;
          --simple-colors-default-theme-accent-12: #000000;

          --simple-colors-default-theme-grey-1: #ffffff;
          --simple-colors-default-theme-grey-2: #eeeeee;
          --simple-colors-default-theme-grey-3: #dddddd;
          --simple-colors-default-theme-grey-4: #cccccc;
          --simple-colors-default-theme-grey-5: #bbbbbb;
          --simple-colors-default-theme-grey-6: #999999;
          --simple-colors-default-theme-grey-7: #666666;
          --simple-colors-default-theme-grey-8: #444444;
          --simple-colors-default-theme-grey-9: #333333;
          --simple-colors-default-theme-grey-10: #222222;
          --simple-colors-default-theme-grey-11: #111111;
          --simple-colors-default-theme-grey-12: #000000;

          --simple-colors-default-theme-red-1: #ffdddd;
          --simple-colors-default-theme-red-2: #ffaeae;
          --simple-colors-default-theme-red-3: #ff8f8f;
          --simple-colors-default-theme-red-4: #ff7474;
          --simple-colors-default-theme-red-5: #fd5151;
          --simple-colors-default-theme-red-6: #ff2222;
          --simple-colors-default-theme-red-7: #ee0000;
          --simple-colors-default-theme-red-8: #ac0000;
          --simple-colors-default-theme-red-9: #850000;
          --simple-colors-default-theme-red-10: #670000;
          --simple-colors-default-theme-red-11: #520000;
          --simple-colors-default-theme-red-12: #3f0000;

          --simple-colors-default-theme-pink-1: #ffe6f1;
          --simple-colors-default-theme-pink-2: #ffa5cf;
          --simple-colors-default-theme-pink-3: #ff87c0;
          --simple-colors-default-theme-pink-4: #ff73b5;
          --simple-colors-default-theme-pink-5: #fd60aa;
          --simple-colors-default-theme-pink-6: #ff3996;
          --simple-colors-default-theme-pink-7: #da004e;
          --simple-colors-default-theme-pink-8: #b80042;
          --simple-colors-default-theme-pink-9: #980036;
          --simple-colors-default-theme-pink-10: #78002b;
          --simple-colors-default-theme-pink-11: #5a0020;
          --simple-colors-default-theme-pink-12: #440019;

          --simple-colors-default-theme-purple-1: #fce6ff;
          --simple-colors-default-theme-purple-2: #f4affd;
          --simple-colors-default-theme-purple-3: #f394ff;
          --simple-colors-default-theme-purple-4: #f07cff;
          --simple-colors-default-theme-purple-5: #ed61ff;
          --simple-colors-default-theme-purple-6: #e200ff;
          --simple-colors-default-theme-purple-7: #a500ba;
          --simple-colors-default-theme-purple-8: #8a009b;
          --simple-colors-default-theme-purple-9: #6c0079;
          --simple-colors-default-theme-purple-10: #490052;
          --simple-colors-default-theme-purple-11: #33003a;
          --simple-colors-default-theme-purple-12: #200025;

          --simple-colors-default-theme-deep-purple-1: #f3e4ff;
          --simple-colors-default-theme-deep-purple-2: #ddacff;
          --simple-colors-default-theme-deep-purple-3: #c97eff;
          --simple-colors-default-theme-deep-purple-4: #bb63f9;
          --simple-colors-default-theme-deep-purple-5: #b44aff;
          --simple-colors-default-theme-deep-purple-6: #a931ff;
          --simple-colors-default-theme-deep-purple-7: #7e00d8;
          --simple-colors-default-theme-deep-purple-8: #5d009f;
          --simple-colors-default-theme-deep-purple-9: #4c0081;
          --simple-colors-default-theme-deep-purple-10: #3a0063;
          --simple-colors-default-theme-deep-purple-11: #2a0049;
          --simple-colors-default-theme-deep-purple-12: #1d0033;

          --simple-colors-default-theme-indigo-1: #e5ddff;
          --simple-colors-default-theme-indigo-2: #c3b2ff;
          --simple-colors-default-theme-indigo-3: #af97ff;
          --simple-colors-default-theme-indigo-4: #9e82ff;
          --simple-colors-default-theme-indigo-5: #9373ff;
          --simple-colors-default-theme-indigo-6: #835fff;
          --simple-colors-default-theme-indigo-7: #3a00ff;
          --simple-colors-default-theme-indigo-8: #2801b0;
          --simple-colors-default-theme-indigo-9: #20008c;
          --simple-colors-default-theme-indigo-10: #160063;
          --simple-colors-default-theme-indigo-11: #100049;
          --simple-colors-default-theme-indigo-12: #0a0030;

          --simple-colors-default-theme-blue-1: #e2ecff;
          --simple-colors-default-theme-blue-2: #acc9ff;
          --simple-colors-default-theme-blue-3: #95baff;
          --simple-colors-default-theme-blue-4: #74a5ff;
          --simple-colors-default-theme-blue-5: #5892fd;
          --simple-colors-default-theme-blue-6: #4083ff;
          --simple-colors-default-theme-blue-7: #0059ff;
          --simple-colors-default-theme-blue-8: #0041bb;
          --simple-colors-default-theme-blue-9: #003494;
          --simple-colors-default-theme-blue-10: #002569;
          --simple-colors-default-theme-blue-11: #001947;
          --simple-colors-default-theme-blue-12: #001333;

          --simple-colors-default-theme-light-blue-1: #cde8ff;
          --simple-colors-default-theme-light-blue-2: #a1d1ff;
          --simple-colors-default-theme-light-blue-3: #92c9ff;
          --simple-colors-default-theme-light-blue-4: #65b3ff;
          --simple-colors-default-theme-light-blue-5: #58adff;
          --simple-colors-default-theme-light-blue-6: #41a1ff;
          --simple-colors-default-theme-light-blue-7: #007ffc;
          --simple-colors-default-theme-light-blue-8: #0066ca;
          --simple-colors-default-theme-light-blue-9: #0055a8;
          --simple-colors-default-theme-light-blue-10: #003f7d;
          --simple-colors-default-theme-light-blue-11: #002850;
          --simple-colors-default-theme-light-blue-12: #001b36;

          --simple-colors-default-theme-cyan-1: #ccf3fd;
          --simple-colors-default-theme-cyan-2: #9beaff;
          --simple-colors-default-theme-cyan-3: #77e2ff;
          --simple-colors-default-theme-cyan-4: #33d4ff;
          --simple-colors-default-theme-cyan-5: #1ccfff;
          --simple-colors-default-theme-cyan-6: #00c9ff;
          --simple-colors-default-theme-cyan-7: #009dc7;
          --simple-colors-default-theme-cyan-8: #007999;
          --simple-colors-default-theme-cyan-9: #005970;
          --simple-colors-default-theme-cyan-10: #003f50;
          --simple-colors-default-theme-cyan-11: #002c38;
          --simple-colors-default-theme-cyan-12: #001a20;

          --simple-colors-default-theme-teal-1: #d4ffee;
          --simple-colors-default-theme-teal-2: #98ffd7;
          --simple-colors-default-theme-teal-3: #79ffcb;
          --simple-colors-default-theme-teal-4: #56ffbd;
          --simple-colors-default-theme-teal-5: #29ffac;
          --simple-colors-default-theme-teal-6: #00ff9c;
          --simple-colors-default-theme-teal-7: #009d75;
          --simple-colors-default-theme-teal-8: #007658;
          --simple-colors-default-theme-teal-9: #004e3a;
          --simple-colors-default-theme-teal-10: #003829;
          --simple-colors-default-theme-teal-11: #002a20;
          --simple-colors-default-theme-teal-12: #001b14;

          --simple-colors-default-theme-green-1: #e1ffeb;
          --simple-colors-default-theme-green-2: #acffc9;
          --simple-colors-default-theme-green-3: #79ffa7;
          --simple-colors-default-theme-green-4: #49ff88;
          --simple-colors-default-theme-green-5: #24ff70;
          --simple-colors-default-theme-green-6: #00f961;
          --simple-colors-default-theme-green-7: #008c37;
          --simple-colors-default-theme-green-8: #00762e;
          --simple-colors-default-theme-green-9: #005a23;
          --simple-colors-default-theme-green-10: #003d18;
          --simple-colors-default-theme-green-11: #002a11;
          --simple-colors-default-theme-green-12: #001d0c;

          --simple-colors-default-theme-light-green-1: #ebffdb;
          --simple-colors-default-theme-light-green-2: #c7ff9b;
          --simple-colors-default-theme-light-green-3: #b1ff75;
          --simple-colors-default-theme-light-green-4: #a1fd5a;
          --simple-colors-default-theme-light-green-5: #8efd38;
          --simple-colors-default-theme-light-green-6: #6fff00;
          --simple-colors-default-theme-light-green-7: #429d00;
          --simple-colors-default-theme-light-green-8: #357f00;
          --simple-colors-default-theme-light-green-9: #296100;
          --simple-colors-default-theme-light-green-10: #1b3f00;
          --simple-colors-default-theme-light-green-11: #143000;
          --simple-colors-default-theme-light-green-12: #0d2000;

          --simple-colors-default-theme-lime-1: #f1ffd2;
          --simple-colors-default-theme-lime-2: #dfff9b;
          --simple-colors-default-theme-lime-3: #d4ff77;
          --simple-colors-default-theme-lime-4: #caff58;
          --simple-colors-default-theme-lime-5: #bdff2d;
          --simple-colors-default-theme-lime-6: #aeff00;
          --simple-colors-default-theme-lime-7: #649900;
          --simple-colors-default-theme-lime-8: #4d7600;
          --simple-colors-default-theme-lime-9: #3b5a00;
          --simple-colors-default-theme-lime-10: #293f00;
          --simple-colors-default-theme-lime-11: #223400;
          --simple-colors-default-theme-lime-12: #182400;

          --simple-colors-default-theme-yellow-1: #ffffd5;
          --simple-colors-default-theme-yellow-2: #ffffac;
          --simple-colors-default-theme-yellow-3: #ffff90;
          --simple-colors-default-theme-yellow-4: #ffff7c;
          --simple-colors-default-theme-yellow-5: #ffff3a;
          --simple-colors-default-theme-yellow-6: #f6f600;
          --simple-colors-default-theme-yellow-7: #929100;
          --simple-colors-default-theme-yellow-8: #787700;
          --simple-colors-default-theme-yellow-9: #585700;
          --simple-colors-default-theme-yellow-10: #454400;
          --simple-colors-default-theme-yellow-11: #303000;
          --simple-colors-default-theme-yellow-12: #242400;

          --simple-colors-default-theme-amber-1: #fff2d4;
          --simple-colors-default-theme-amber-2: #ffdf92;
          --simple-colors-default-theme-amber-3: #ffd677;
          --simple-colors-default-theme-amber-4: #ffcf5e;
          --simple-colors-default-theme-amber-5: #ffc235;
          --simple-colors-default-theme-amber-6: #ffc500;
          --simple-colors-default-theme-amber-7: #b28900;
          --simple-colors-default-theme-amber-8: #876800;
          --simple-colors-default-theme-amber-9: #614b00;
          --simple-colors-default-theme-amber-10: #413200;
          --simple-colors-default-theme-amber-11: #302500;
          --simple-colors-default-theme-amber-12: #221a00;

          --simple-colors-default-theme-orange-1: #ffebd7;
          --simple-colors-default-theme-orange-2: #ffca92;
          --simple-colors-default-theme-orange-3: #ffbd75;
          --simple-colors-default-theme-orange-4: #ffb05c;
          --simple-colors-default-theme-orange-5: #ff9e36;
          --simple-colors-default-theme-orange-6: #ff9625;
          --simple-colors-default-theme-orange-7: #e56a00;
          --simple-colors-default-theme-orange-8: #ae5100;
          --simple-colors-default-theme-orange-9: #833d00;
          --simple-colors-default-theme-orange-10: #612d00;
          --simple-colors-default-theme-orange-11: #3d1c00;
          --simple-colors-default-theme-orange-12: #2c1400;

          --simple-colors-default-theme-deep-orange-1: #ffe7e0;
          --simple-colors-default-theme-deep-orange-2: #ffb299;
          --simple-colors-default-theme-deep-orange-3: #ffa588;
          --simple-colors-default-theme-deep-orange-4: #ff8a64;
          --simple-colors-default-theme-deep-orange-5: #ff7649;
          --simple-colors-default-theme-deep-orange-6: #ff6c3c;
          --simple-colors-default-theme-deep-orange-7: #f53100;
          --simple-colors-default-theme-deep-orange-8: #b92500;
          --simple-colors-default-theme-deep-orange-9: #8a1c00;
          --simple-colors-default-theme-deep-orange-10: #561100;
          --simple-colors-default-theme-deep-orange-11: #3a0c00;
          --simple-colors-default-theme-deep-orange-12: #240700;

          --simple-colors-default-theme-brown-1: #f0e2de;
          --simple-colors-default-theme-brown-2: #e5b8aa;
          --simple-colors-default-theme-brown-3: #c59485;
          --simple-colors-default-theme-brown-4: #b68373;
          --simple-colors-default-theme-brown-5: #ac7868;
          --simple-colors-default-theme-brown-6: #a47060;
          --simple-colors-default-theme-brown-7: #85574a;
          --simple-colors-default-theme-brown-8: #724539;
          --simple-colors-default-theme-brown-9: #5b3328;
          --simple-colors-default-theme-brown-10: #3b1e15;
          --simple-colors-default-theme-brown-11: #2c140e;
          --simple-colors-default-theme-brown-12: #200e09;

          --simple-colors-default-theme-blue-grey-1: #e7eff1;
          --simple-colors-default-theme-blue-grey-2: #b1c5ce;
          --simple-colors-default-theme-blue-grey-3: #9badb6;
          --simple-colors-default-theme-blue-grey-4: #8d9fa7;
          --simple-colors-default-theme-blue-grey-5: #7a8f98;
          --simple-colors-default-theme-blue-grey-6: #718892;
          --simple-colors-default-theme-blue-grey-7: #56707c;
          --simple-colors-default-theme-blue-grey-8: #40535b;
          --simple-colors-default-theme-blue-grey-9: #2f3e45;
          --simple-colors-default-theme-blue-grey-10: #1e282c;
          --simple-colors-default-theme-blue-grey-11: #182023;
          --simple-colors-default-theme-blue-grey-12: #0f1518;
          --simple-colors-fixed-theme-accent-1: #ffffff;
          --simple-colors-fixed-theme-accent-2: #eeeeee;
          --simple-colors-fixed-theme-accent-3: #dddddd;
          --simple-colors-fixed-theme-accent-4: #cccccc;
          --simple-colors-fixed-theme-accent-5: #bbbbbb;
          --simple-colors-fixed-theme-accent-6: #999999;
          --simple-colors-fixed-theme-accent-7: #666666;
          --simple-colors-fixed-theme-accent-8: #444444;
          --simple-colors-fixed-theme-accent-9: #333333;
          --simple-colors-fixed-theme-accent-10: #222222;
          --simple-colors-fixed-theme-accent-11: #111111;
          --simple-colors-fixed-theme-accent-12: #000000;

          --simple-colors-fixed-theme-grey-1: #ffffff;
          --simple-colors-fixed-theme-grey-2: #eeeeee;
          --simple-colors-fixed-theme-grey-3: #dddddd;
          --simple-colors-fixed-theme-grey-4: #cccccc;
          --simple-colors-fixed-theme-grey-5: #bbbbbb;
          --simple-colors-fixed-theme-grey-6: #999999;
          --simple-colors-fixed-theme-grey-7: #666666;
          --simple-colors-fixed-theme-grey-8: #444444;
          --simple-colors-fixed-theme-grey-9: #333333;
          --simple-colors-fixed-theme-grey-10: #222222;
          --simple-colors-fixed-theme-grey-11: #111111;
          --simple-colors-fixed-theme-grey-12: #000000;

          --simple-colors-fixed-theme-red-1: #ffdddd;
          --simple-colors-fixed-theme-red-2: #ffaeae;
          --simple-colors-fixed-theme-red-3: #ff8f8f;
          --simple-colors-fixed-theme-red-4: #ff7474;
          --simple-colors-fixed-theme-red-5: #fd5151;
          --simple-colors-fixed-theme-red-6: #ff2222;
          --simple-colors-fixed-theme-red-7: #ee0000;
          --simple-colors-fixed-theme-red-8: #ac0000;
          --simple-colors-fixed-theme-red-9: #850000;
          --simple-colors-fixed-theme-red-10: #670000;
          --simple-colors-fixed-theme-red-11: #520000;
          --simple-colors-fixed-theme-red-12: #3f0000;

          --simple-colors-fixed-theme-pink-1: #ffe6f1;
          --simple-colors-fixed-theme-pink-2: #ffa5cf;
          --simple-colors-fixed-theme-pink-3: #ff87c0;
          --simple-colors-fixed-theme-pink-4: #ff73b5;
          --simple-colors-fixed-theme-pink-5: #fd60aa;
          --simple-colors-fixed-theme-pink-6: #ff3996;
          --simple-colors-fixed-theme-pink-7: #da004e;
          --simple-colors-fixed-theme-pink-8: #b80042;
          --simple-colors-fixed-theme-pink-9: #980036;
          --simple-colors-fixed-theme-pink-10: #78002b;
          --simple-colors-fixed-theme-pink-11: #5a0020;
          --simple-colors-fixed-theme-pink-12: #440019;

          --simple-colors-fixed-theme-purple-1: #fce6ff;
          --simple-colors-fixed-theme-purple-2: #f4affd;
          --simple-colors-fixed-theme-purple-3: #f394ff;
          --simple-colors-fixed-theme-purple-4: #f07cff;
          --simple-colors-fixed-theme-purple-5: #ed61ff;
          --simple-colors-fixed-theme-purple-6: #e200ff;
          --simple-colors-fixed-theme-purple-7: #a500ba;
          --simple-colors-fixed-theme-purple-8: #8a009b;
          --simple-colors-fixed-theme-purple-9: #6c0079;
          --simple-colors-fixed-theme-purple-10: #490052;
          --simple-colors-fixed-theme-purple-11: #33003a;
          --simple-colors-fixed-theme-purple-12: #200025;

          --simple-colors-fixed-theme-deep-purple-1: #f3e4ff;
          --simple-colors-fixed-theme-deep-purple-2: #ddacff;
          --simple-colors-fixed-theme-deep-purple-3: #c97eff;
          --simple-colors-fixed-theme-deep-purple-4: #bb63f9;
          --simple-colors-fixed-theme-deep-purple-5: #b44aff;
          --simple-colors-fixed-theme-deep-purple-6: #a931ff;
          --simple-colors-fixed-theme-deep-purple-7: #7e00d8;
          --simple-colors-fixed-theme-deep-purple-8: #5d009f;
          --simple-colors-fixed-theme-deep-purple-9: #4c0081;
          --simple-colors-fixed-theme-deep-purple-10: #3a0063;
          --simple-colors-fixed-theme-deep-purple-11: #2a0049;
          --simple-colors-fixed-theme-deep-purple-12: #1d0033;

          --simple-colors-fixed-theme-indigo-1: #e5ddff;
          --simple-colors-fixed-theme-indigo-2: #c3b2ff;
          --simple-colors-fixed-theme-indigo-3: #af97ff;
          --simple-colors-fixed-theme-indigo-4: #9e82ff;
          --simple-colors-fixed-theme-indigo-5: #9373ff;
          --simple-colors-fixed-theme-indigo-6: #835fff;
          --simple-colors-fixed-theme-indigo-7: #3a00ff;
          --simple-colors-fixed-theme-indigo-8: #2801b0;
          --simple-colors-fixed-theme-indigo-9: #20008c;
          --simple-colors-fixed-theme-indigo-10: #160063;
          --simple-colors-fixed-theme-indigo-11: #100049;
          --simple-colors-fixed-theme-indigo-12: #0a0030;

          --simple-colors-fixed-theme-blue-1: #e2ecff;
          --simple-colors-fixed-theme-blue-2: #acc9ff;
          --simple-colors-fixed-theme-blue-3: #95baff;
          --simple-colors-fixed-theme-blue-4: #74a5ff;
          --simple-colors-fixed-theme-blue-5: #5892fd;
          --simple-colors-fixed-theme-blue-6: #4083ff;
          --simple-colors-fixed-theme-blue-7: #0059ff;
          --simple-colors-fixed-theme-blue-8: #0041bb;
          --simple-colors-fixed-theme-blue-9: #003494;
          --simple-colors-fixed-theme-blue-10: #002569;
          --simple-colors-fixed-theme-blue-11: #001947;
          --simple-colors-fixed-theme-blue-12: #001333;

          --simple-colors-fixed-theme-light-blue-1: #cde8ff;
          --simple-colors-fixed-theme-light-blue-2: #a1d1ff;
          --simple-colors-fixed-theme-light-blue-3: #92c9ff;
          --simple-colors-fixed-theme-light-blue-4: #65b3ff;
          --simple-colors-fixed-theme-light-blue-5: #58adff;
          --simple-colors-fixed-theme-light-blue-6: #41a1ff;
          --simple-colors-fixed-theme-light-blue-7: #007ffc;
          --simple-colors-fixed-theme-light-blue-8: #0066ca;
          --simple-colors-fixed-theme-light-blue-9: #0055a8;
          --simple-colors-fixed-theme-light-blue-10: #003f7d;
          --simple-colors-fixed-theme-light-blue-11: #002850;
          --simple-colors-fixed-theme-light-blue-12: #001b36;

          --simple-colors-fixed-theme-cyan-1: #ccf3fd;
          --simple-colors-fixed-theme-cyan-2: #9beaff;
          --simple-colors-fixed-theme-cyan-3: #77e2ff;
          --simple-colors-fixed-theme-cyan-4: #33d4ff;
          --simple-colors-fixed-theme-cyan-5: #1ccfff;
          --simple-colors-fixed-theme-cyan-6: #00c9ff;
          --simple-colors-fixed-theme-cyan-7: #009dc7;
          --simple-colors-fixed-theme-cyan-8: #007999;
          --simple-colors-fixed-theme-cyan-9: #005970;
          --simple-colors-fixed-theme-cyan-10: #003f50;
          --simple-colors-fixed-theme-cyan-11: #002c38;
          --simple-colors-fixed-theme-cyan-12: #001a20;

          --simple-colors-fixed-theme-teal-1: #d4ffee;
          --simple-colors-fixed-theme-teal-2: #98ffd7;
          --simple-colors-fixed-theme-teal-3: #79ffcb;
          --simple-colors-fixed-theme-teal-4: #56ffbd;
          --simple-colors-fixed-theme-teal-5: #29ffac;
          --simple-colors-fixed-theme-teal-6: #00ff9c;
          --simple-colors-fixed-theme-teal-7: #009d75;
          --simple-colors-fixed-theme-teal-8: #007658;
          --simple-colors-fixed-theme-teal-9: #004e3a;
          --simple-colors-fixed-theme-teal-10: #003829;
          --simple-colors-fixed-theme-teal-11: #002a20;
          --simple-colors-fixed-theme-teal-12: #001b14;

          --simple-colors-fixed-theme-green-1: #e1ffeb;
          --simple-colors-fixed-theme-green-2: #acffc9;
          --simple-colors-fixed-theme-green-3: #79ffa7;
          --simple-colors-fixed-theme-green-4: #49ff88;
          --simple-colors-fixed-theme-green-5: #24ff70;
          --simple-colors-fixed-theme-green-6: #00f961;
          --simple-colors-fixed-theme-green-7: #008c37;
          --simple-colors-fixed-theme-green-8: #00762e;
          --simple-colors-fixed-theme-green-9: #005a23;
          --simple-colors-fixed-theme-green-10: #003d18;
          --simple-colors-fixed-theme-green-11: #002a11;
          --simple-colors-fixed-theme-green-12: #001d0c;

          --simple-colors-fixed-theme-light-green-1: #ebffdb;
          --simple-colors-fixed-theme-light-green-2: #c7ff9b;
          --simple-colors-fixed-theme-light-green-3: #b1ff75;
          --simple-colors-fixed-theme-light-green-4: #a1fd5a;
          --simple-colors-fixed-theme-light-green-5: #8efd38;
          --simple-colors-fixed-theme-light-green-6: #6fff00;
          --simple-colors-fixed-theme-light-green-7: #429d00;
          --simple-colors-fixed-theme-light-green-8: #357f00;
          --simple-colors-fixed-theme-light-green-9: #296100;
          --simple-colors-fixed-theme-light-green-10: #1b3f00;
          --simple-colors-fixed-theme-light-green-11: #143000;
          --simple-colors-fixed-theme-light-green-12: #0d2000;

          --simple-colors-fixed-theme-lime-1: #f1ffd2;
          --simple-colors-fixed-theme-lime-2: #dfff9b;
          --simple-colors-fixed-theme-lime-3: #d4ff77;
          --simple-colors-fixed-theme-lime-4: #caff58;
          --simple-colors-fixed-theme-lime-5: #bdff2d;
          --simple-colors-fixed-theme-lime-6: #aeff00;
          --simple-colors-fixed-theme-lime-7: #649900;
          --simple-colors-fixed-theme-lime-8: #4d7600;
          --simple-colors-fixed-theme-lime-9: #3b5a00;
          --simple-colors-fixed-theme-lime-10: #293f00;
          --simple-colors-fixed-theme-lime-11: #223400;
          --simple-colors-fixed-theme-lime-12: #182400;

          --simple-colors-fixed-theme-yellow-1: #ffffd5;
          --simple-colors-fixed-theme-yellow-2: #ffffac;
          --simple-colors-fixed-theme-yellow-3: #ffff90;
          --simple-colors-fixed-theme-yellow-4: #ffff7c;
          --simple-colors-fixed-theme-yellow-5: #ffff3a;
          --simple-colors-fixed-theme-yellow-6: #f6f600;
          --simple-colors-fixed-theme-yellow-7: #929100;
          --simple-colors-fixed-theme-yellow-8: #787700;
          --simple-colors-fixed-theme-yellow-9: #585700;
          --simple-colors-fixed-theme-yellow-10: #454400;
          --simple-colors-fixed-theme-yellow-11: #303000;
          --simple-colors-fixed-theme-yellow-12: #242400;

          --simple-colors-fixed-theme-amber-1: #fff2d4;
          --simple-colors-fixed-theme-amber-2: #ffdf92;
          --simple-colors-fixed-theme-amber-3: #ffd677;
          --simple-colors-fixed-theme-amber-4: #ffcf5e;
          --simple-colors-fixed-theme-amber-5: #ffc235;
          --simple-colors-fixed-theme-amber-6: #ffc500;
          --simple-colors-fixed-theme-amber-7: #b28900;
          --simple-colors-fixed-theme-amber-8: #876800;
          --simple-colors-fixed-theme-amber-9: #614b00;
          --simple-colors-fixed-theme-amber-10: #413200;
          --simple-colors-fixed-theme-amber-11: #302500;
          --simple-colors-fixed-theme-amber-12: #221a00;

          --simple-colors-fixed-theme-orange-1: #ffebd7;
          --simple-colors-fixed-theme-orange-2: #ffca92;
          --simple-colors-fixed-theme-orange-3: #ffbd75;
          --simple-colors-fixed-theme-orange-4: #ffb05c;
          --simple-colors-fixed-theme-orange-5: #ff9e36;
          --simple-colors-fixed-theme-orange-6: #ff9625;
          --simple-colors-fixed-theme-orange-7: #e56a00;
          --simple-colors-fixed-theme-orange-8: #ae5100;
          --simple-colors-fixed-theme-orange-9: #833d00;
          --simple-colors-fixed-theme-orange-10: #612d00;
          --simple-colors-fixed-theme-orange-11: #3d1c00;
          --simple-colors-fixed-theme-orange-12: #2c1400;

          --simple-colors-fixed-theme-deep-orange-1: #ffe7e0;
          --simple-colors-fixed-theme-deep-orange-2: #ffb299;
          --simple-colors-fixed-theme-deep-orange-3: #ffa588;
          --simple-colors-fixed-theme-deep-orange-4: #ff8a64;
          --simple-colors-fixed-theme-deep-orange-5: #ff7649;
          --simple-colors-fixed-theme-deep-orange-6: #ff6c3c;
          --simple-colors-fixed-theme-deep-orange-7: #f53100;
          --simple-colors-fixed-theme-deep-orange-8: #b92500;
          --simple-colors-fixed-theme-deep-orange-9: #8a1c00;
          --simple-colors-fixed-theme-deep-orange-10: #561100;
          --simple-colors-fixed-theme-deep-orange-11: #3a0c00;
          --simple-colors-fixed-theme-deep-orange-12: #240700;

          --simple-colors-fixed-theme-brown-1: #f0e2de;
          --simple-colors-fixed-theme-brown-2: #e5b8aa;
          --simple-colors-fixed-theme-brown-3: #c59485;
          --simple-colors-fixed-theme-brown-4: #b68373;
          --simple-colors-fixed-theme-brown-5: #ac7868;
          --simple-colors-fixed-theme-brown-6: #a47060;
          --simple-colors-fixed-theme-brown-7: #85574a;
          --simple-colors-fixed-theme-brown-8: #724539;
          --simple-colors-fixed-theme-brown-9: #5b3328;
          --simple-colors-fixed-theme-brown-10: #3b1e15;
          --simple-colors-fixed-theme-brown-11: #2c140e;
          --simple-colors-fixed-theme-brown-12: #200e09;

          --simple-colors-fixed-theme-blue-grey-1: #e7eff1;
          --simple-colors-fixed-theme-blue-grey-2: #b1c5ce;
          --simple-colors-fixed-theme-blue-grey-3: #9badb6;
          --simple-colors-fixed-theme-blue-grey-4: #8d9fa7;
          --simple-colors-fixed-theme-blue-grey-5: #7a8f98;
          --simple-colors-fixed-theme-blue-grey-6: #718892;
          --simple-colors-fixed-theme-blue-grey-7: #56707c;
          --simple-colors-fixed-theme-blue-grey-8: #40535b;
          --simple-colors-fixed-theme-blue-grey-9: #2f3e45;
          --simple-colors-fixed-theme-blue-grey-10: #1e282c;
          --simple-colors-fixed-theme-blue-grey-11: #182023;
          --simple-colors-fixed-theme-blue-grey-12: #0f1518;
        }
      `,
    ];
  }

  // render function
  render() {
    return b``;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,

      /**
       * The colors object.
       * Each color contains an array of shades as hex codes from lightest to darkest.
       */
      colors: {
        attribute: "colors",
        type: Object,
      },
      /**
    * Object with information on which color combinations are WCAG 2.0AA compliant, "eg": 
     {
       "greyColor": {          //if either the color or its contrast will be a grey
         "aaLarge": [          //if bold text >= 14pt, text >= 18pt, decorative only, or disabled
           {                 //for the first shade of a color
             "min": 7,         //index of the lightest contrasting shade of another color
             "max": 12         //index of the darkest contrasting shade of another color
           },
           ...
         ],
         "aa": [ ... ]         //if bold text < 14pt, or text < 18pt
       },
       "colorColor": { ... }   //if neither the color nor its contrast are grey
     }
   */
      contrasts: {
        attribute: "contrasts",
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.colors = {
      grey: [
        "#ffffff",
        "#eeeeee",
        "#dddddd",
        "#cccccc",
        "#bbbbbb",
        "#999999",
        "#666666",
        "#444444",
        "#333333",
        "#222222",
        "#111111",
        "#000000",
      ],
      red: [
        "#ffdddd",
        "#ffaeae",
        "#ff8f8f",
        "#ff7474",
        "#fd5151",
        "#ff2222",
        "#ee0000",
        "#ac0000",
        "#850000",
        "#670000",
        "#520000",
        "#3f0000",
      ],
      pink: [
        "#ffe6f1",
        "#ffa5cf",
        "#ff87c0",
        "#ff73b5",
        "#fd60aa",
        "#ff3996",
        "#da004e",
        "#b80042",
        "#980036",
        "#78002b",
        "#5a0020",
        "#440019",
      ],
      purple: [
        "#fce6ff",
        "#f4affd",
        "#f394ff",
        "#f07cff",
        "#ed61ff",
        "#e200ff",
        "#a500ba",
        "#8a009b",
        "#6c0079",
        "#490052",
        "#33003a",
        "#200025",
      ],
      "deep-purple": [
        "#f3e4ff",
        "#ddacff",
        "#c97eff",
        "#bb63f9",
        "#b44aff",
        "#a931ff",
        "#7e00d8",
        "#5d009f",
        "#4c0081",
        "#3a0063",
        "#2a0049",
        "#1d0033",
      ],
      indigo: [
        "#e5ddff",
        "#c3b2ff",
        "#af97ff",
        "#9e82ff",
        "#9373ff",
        "#835fff",
        "#3a00ff",
        "#2801b0",
        "#20008c",
        "#160063",
        "#100049",
        "#0a0030",
      ],
      blue: [
        "#e2ecff",
        "#acc9ff",
        "#95baff",
        "#74a5ff",
        "#5892fd",
        "#4083ff",
        "#0059ff",
        "#0041bb",
        "#003494",
        "#002569",
        "#001947",
        "#001333",
      ],
      "light-blue": [
        "#cde8ff",
        "#a1d1ff",
        "#92c9ff",
        "#65b3ff",
        "#58adff",
        "#41a1ff",
        "#007ffc",
        "#0066ca",
        "#0055a8",
        "#003f7d",
        "#002850",
        "#001b36",
      ],
      cyan: [
        "#ddf8ff",
        "#9beaff",
        "#77e2ff",
        "#33d4ff",
        "#1ccfff",
        "#00c9ff",
        "#009dc7",
        "#007999",
        "#005970",
        "#003f50",
        "#002c38",
        "#001a20",
      ],
      teal: [
        "#d9fff0",
        "#98ffd7",
        "#79ffcb",
        "#56ffbd",
        "#29ffac",
        "#00ff9c",
        "#009d75",
        "#007658",
        "#004e3a",
        "#003829",
        "#002a20",
        "#001b14",
      ],
      green: [
        "#e1ffeb",
        "#acffc9",
        "#79ffa7",
        "#49ff88",
        "#24ff70",
        "#00f961",
        "#008c37",
        "#00762e",
        "#005a23",
        "#003d18",
        "#002a11",
        "#001d0c",
      ],
      "light-green": [
        "#ebffdb",
        "#c7ff9b",
        "#b1ff75",
        "#a1fd5a",
        "#8efd38",
        "#6fff00",
        "#429d00",
        "#357f00",
        "#296100",
        "#1b3f00",
        "#143000",
        "#0d2000",
      ],
      lime: [
        "#f1ffd2",
        "#dfff9b",
        "#d4ff77",
        "#caff58",
        "#bdff2d",
        "#aeff00",
        "#649900",
        "#4d7600",
        "#3b5a00",
        "#293f00",
        "#223400",
        "#182400",
      ],
      yellow: [
        "#ffffd5",
        "#ffffac",
        "#ffff90",
        "#ffff7c",
        "#ffff3a",
        "#f6f600",
        "#929100",
        "#787700",
        "#585700",
        "#454400",
        "#303000",
        "#242400",
      ],
      amber: [
        "#fff2d4",
        "#ffdf92",
        "#ffd677",
        "#ffcf5e",
        "#ffc235",
        "#ffc500",
        "#b28900",
        "#876800",
        "#614b00",
        "#413200",
        "#302500",
        "#221a00",
      ],
      orange: [
        "#ffebd7",
        "#ffca92",
        "#ffbd75",
        "#ffb05c",
        "#ff9e36",
        "#ff9625",
        "#e56a00",
        "#ae5100",
        "#833d00",
        "#612d00",
        "#3d1c00",
        "#2c1400",
      ],
      "deep-orange": [
        "#ffe7e0",
        "#ffb299",
        "#ffa588",
        "#ff8a64",
        "#ff7649",
        "#ff6c3c",
        "#f53100",
        "#b92500",
        "#8a1c00",
        "#561100",
        "#3a0c00",
        "#240700",
      ],
      brown: [
        "#f0e2de",
        "#e5b8aa",
        "#c59485",
        "#b68373",
        "#ac7868",
        "#a47060",
        "#85574a",
        "#724539",
        "#5b3328",
        "#3b1e15",
        "#2c140e",
        "#200e09",
      ],
      "blue-grey": [
        "#e7eff1",
        "#b1c5ce",
        "#9badb6",
        "#8d9fa7",
        "#7a8f98",
        "#718892",
        "#56707c",
        "#40535b",
        "#2f3e45",
        "#1e282c",
        "#182023",
        "#0f1518",
      ],
    };
    this.contrasts = {
      greyColor: {
        aaLarge: [
          { min: 7, max: 12 },
          { min: 7, max: 12 },
          { min: 7, max: 12 },
          { min: 7, max: 12 },
          { min: 8, max: 12 },
          { min: 10, max: 12 },
          { min: 1, max: 3 },
          { min: 1, max: 5 },
          { min: 1, max: 6 },
          { min: 1, max: 6 },
          { min: 1, max: 6 },
          { min: 1, max: 6 },
        ],
        aa: [
          //if bold text < 14pt, or text < 18pt
          { min: 7, max: 12 },
          { min: 7, max: 12 },
          { min: 7, max: 12 },
          { min: 8, max: 12 },
          { min: 8, max: 12 },
          { min: 11, max: 12 },
          { min: 1, max: 2 },
          { min: 1, max: 7 },
          { min: 1, max: 7 },
          { min: 1, max: 6 },
          { min: 1, max: 6 },
          { min: 1, max: 6 },
        ],
      },
      colorColor: {
        //if neither the color nor its contrast are grey
        aaLarge: [
          { min: 7, max: 12 },
          { min: 7, max: 12 },
          { min: 8, max: 12 },
          { min: 9, max: 12 },
          { min: 10, max: 12 },
          { min: 11, max: 12 },
          { min: 1, max: 2 },
          { min: 1, max: 3 },
          { min: 1, max: 4 },
          { min: 1, max: 5 },
          { min: 1, max: 6 },
          { min: 1, max: 6 },
        ],
        aa: [
          { min: 8, max: 12 },
          { min: 8, max: 12 },
          { min: 9, max: 12 },
          { min: 9, max: 12 },
          { min: 11, max: 12 },
          { min: 12, max: 12 },
          { min: 1, max: 1 },
          { min: 1, max: 2 },
          { min: 1, max: 4 },
          { min: 1, max: 4 },
          { min: 1, max: 5 },
          { min: 1, max: 5 },
        ],
      },
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "simple-colors-shared-styles";
  }

  /**
   * gets the color information of a given CSS variable or class
   *
   * @param {string} the CSS variable (eg. `--simple-colors-fixed-theme-red-3`)
   * @param {object} an object that includes the theme, color, and shade information
   */
  getColorInfo(colorName) {
    let temp1 = colorName
        .replace(/(simple-colors-)?(-text)?(-border)?/g, "")
        .split("-theme-"),
      theme = temp1.length > 0 ? temp1[0] : "default",
      temp2 = temp1.length > 0 ? temp1[1].split("-") : temp1[0].split("-"),
      color =
        temp2.length > 1 ? temp2.slice(1, temp2.length - 1).join("-") : "grey",
      shade = temp2.length > 1 ? temp2[temp2.length - 1] : "1";
    return {
      theme: theme,
      color: color,
      shade: shade,
    };
  }
  /**
   * returns a variable based on color name, shade, and fixed theme
   *
   * @param {string} the color name
   * @param {number} the color shade
   * @param {boolean} the color shade
   * @returns {string} the CSS Variable
   */
  makeVariable(color = "grey", shade = 1, theme = "default") {
    return ["--simple-colors", theme, "theme", color, shade].join("-");
  }
  /**
   * for large or small text given a color and its shade,
   * lists all the shades of another color that would be
   * WCAG 2.0 AA-compliant for contrast
   *
   * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
   * @param {string} color name, e.g. "deep-purple"
   * @param {string} color shade, e.g. 3
   * @param {string} contrasting color name, e.g. "grey"
   * @param {array} all of the WCAG 2.0 AA-compliant shades of the contrasting color
   */
  getContrastingShades(isLarge, colorName, colorShade, contrastName) {
    let hasGrey =
        colorName === "grey" || contrastName === "grey"
          ? "greyColor"
          : "colorColor",
      aa = isLarge ? "aaLarge" : "aa",
      index = parseInt(colorShade),
      range = this.contrasts[hasGrey][aa][index];
    return Array(range.max - range.min + 1)
      .fill()
      .map((_, idx) => range.min + idx);
  }

  /**
   * for large or small text given a color and its shade,
   * lists all the colors and shades that would be
   * WCAG 2.0 AA-compliant for contrast
   *
   * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
   * @param {string} color name, e.g. "deep-purple"
   * @param {string} color shade, e.g. 3
   * @param {object} all of the WCAG 2.0 AA-compliant colors and shades
   */
  getContrastingColors(colorName, colorShade, isLarge) {
    let result = {};
    Object.keys(this.colors).forEach((color) => {
      result[color] = this.getContrastingShades(
        isLarge,
        colorName,
        colorShade,
        color,
      );
    });
    return result;
  }
  /**
   * determines if two shades are WCAG 2.0 AA-compliant for contrast
   *
   * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
   * @param {string} color name, e.g. "deep-purple"
   * @param {string} color shade, e.g. 3
   * @param {string} contrasting color name, e.g. "grey"
   * @param {string} contrast shade, e.g. 12
   * @param {boolean} whether or not the contrasting shade is WCAG 2.0 AA-compliant
   */
  isContrastCompliant(
    isLarge,
    colorName,
    colorShade,
    contrastName,
    contrastShade,
  ) {
    let hasGrey =
        colorName === "grey" || contrastName === "grey"
          ? "greyColor"
          : "colorColor",
      aa = isLarge ? "aaLarge" : "aa",
      index = parseInt(colorShade) + 1,
      range = this.contrasts[hasGrey][aa][index];
    return contrastShade >= range.min && ontrastShade >= range.max;
  }

  /**
   * gets the current shade based on the index
   *
   * @param {string} the index
   * @param {number} the shade
   */
  indexToShade(index) {
    return parseInt(index) + 1;
  }

  /**
   * gets the current shade based on the index
   *
   * @param {string} the shade
   * @param {number} the index
   */
  shadeToIndex(shade) {
    return parseInt(shade) - 1;
  }
}
globalThis.customElements.define(
  SimpleColorsSharedStyles.tag,
  SimpleColorsSharedStyles,
);
/**
 * Checks to see if there is an instance available, and if not appends one
 */
globalThis.SimpleColorsSharedStyles.requestAvailability = () => {
  if (globalThis.SimpleColorsSharedStyles.instance == null) {
    globalThis.SimpleColorsSharedStyles.instance =
      globalThis.document.createElement("simple-colors-shared-styles");
    globalThis.SimpleColorsSharedStyles.colors =
      globalThis.SimpleColorsSharedStyles.instance.colors;
    globalThis.SimpleColorsSharedStyles.contrasts =
      globalThis.SimpleColorsSharedStyles.instance.contrasts;
    globalThis.SimpleColorsSharedStyles.stylesheet =
      globalThis.document.createElement("style");
    globalThis.SimpleColorsSharedStyles.stylesheet.innerHTML = `${SimpleColorsSharedStyles.styles[0].cssText}`;
    globalThis.document.head.appendChild(
      globalThis.SimpleColorsSharedStyles.stylesheet,
    );
  }
  return globalThis.SimpleColorsSharedStyles.instance;
};
const SimpleColorsSharedStylesGlobal =
  typeof global !== "undefined"
    ? new SimpleColorsSharedStyles()
    : globalThis.SimpleColorsSharedStyles.requestAvailability();

/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
const SimpleColorsSuper = function (SuperClass) {
  return class extends SuperClass {
    //styles function
    static get styles() {
      let styles = i$3("");
      if (super.styles) {
        styles = super.styles;
      }
      return [
        styles,
        i$3`
          :host([dark]) {
            --simple-colors-default-theme-accent-1: #000000;
            --simple-colors-default-theme-accent-2: #111111;
            --simple-colors-default-theme-accent-3: #222222;
            --simple-colors-default-theme-accent-4: #333333;
            --simple-colors-default-theme-accent-5: #444444;
            --simple-colors-default-theme-accent-6: #666666;
            --simple-colors-default-theme-accent-7: #999999;
            --simple-colors-default-theme-accent-8: #bbbbbb;
            --simple-colors-default-theme-accent-9: #cccccc;
            --simple-colors-default-theme-accent-10: #dddddd;
            --simple-colors-default-theme-accent-11: #eeeeee;
            --simple-colors-default-theme-accent-12: #ffffff;

            --simple-colors-default-theme-grey-1: #000000;
            --simple-colors-default-theme-grey-2: #111111;
            --simple-colors-default-theme-grey-3: #222222;
            --simple-colors-default-theme-grey-4: #333333;
            --simple-colors-default-theme-grey-5: #444444;
            --simple-colors-default-theme-grey-6: #666666;
            --simple-colors-default-theme-grey-7: #999999;
            --simple-colors-default-theme-grey-8: #bbbbbb;
            --simple-colors-default-theme-grey-9: #cccccc;
            --simple-colors-default-theme-grey-10: #dddddd;
            --simple-colors-default-theme-grey-11: #eeeeee;
            --simple-colors-default-theme-grey-12: #ffffff;

            --simple-colors-default-theme-red-1: #3f0000;
            --simple-colors-default-theme-red-2: #520000;
            --simple-colors-default-theme-red-3: #670000;
            --simple-colors-default-theme-red-4: #850000;
            --simple-colors-default-theme-red-5: #ac0000;
            --simple-colors-default-theme-red-6: #ee0000;
            --simple-colors-default-theme-red-7: #ff2222;
            --simple-colors-default-theme-red-8: #fd5151;
            --simple-colors-default-theme-red-9: #ff7474;
            --simple-colors-default-theme-red-10: #ff8f8f;
            --simple-colors-default-theme-red-11: #ffaeae;
            --simple-colors-default-theme-red-12: #ffdddd;

            --simple-colors-default-theme-pink-1: #440019;
            --simple-colors-default-theme-pink-2: #5a0020;
            --simple-colors-default-theme-pink-3: #78002b;
            --simple-colors-default-theme-pink-4: #980036;
            --simple-colors-default-theme-pink-5: #b80042;
            --simple-colors-default-theme-pink-6: #da004e;
            --simple-colors-default-theme-pink-7: #ff3996;
            --simple-colors-default-theme-pink-8: #fd60aa;
            --simple-colors-default-theme-pink-9: #ff73b5;
            --simple-colors-default-theme-pink-10: #ff87c0;
            --simple-colors-default-theme-pink-11: #ffa5cf;
            --simple-colors-default-theme-pink-12: #ffe6f1;

            --simple-colors-default-theme-purple-1: #200025;
            --simple-colors-default-theme-purple-2: #33003a;
            --simple-colors-default-theme-purple-3: #490052;
            --simple-colors-default-theme-purple-4: #6c0079;
            --simple-colors-default-theme-purple-5: #8a009b;
            --simple-colors-default-theme-purple-6: #a500ba;
            --simple-colors-default-theme-purple-7: #e200ff;
            --simple-colors-default-theme-purple-8: #ed61ff;
            --simple-colors-default-theme-purple-9: #f07cff;
            --simple-colors-default-theme-purple-10: #f394ff;
            --simple-colors-default-theme-purple-11: #f4affd;
            --simple-colors-default-theme-purple-12: #fce6ff;

            --simple-colors-default-theme-deep-purple-1: #1d0033;
            --simple-colors-default-theme-deep-purple-2: #2a0049;
            --simple-colors-default-theme-deep-purple-3: #3a0063;
            --simple-colors-default-theme-deep-purple-4: #4c0081;
            --simple-colors-default-theme-deep-purple-5: #5d009f;
            --simple-colors-default-theme-deep-purple-6: #7e00d8;
            --simple-colors-default-theme-deep-purple-7: #a931ff;
            --simple-colors-default-theme-deep-purple-8: #b44aff;
            --simple-colors-default-theme-deep-purple-9: #bb63f9;
            --simple-colors-default-theme-deep-purple-10: #c97eff;
            --simple-colors-default-theme-deep-purple-11: #ddacff;
            --simple-colors-default-theme-deep-purple-12: #f3e4ff;

            --simple-colors-default-theme-indigo-1: #0a0030;
            --simple-colors-default-theme-indigo-2: #100049;
            --simple-colors-default-theme-indigo-3: #160063;
            --simple-colors-default-theme-indigo-4: #20008c;
            --simple-colors-default-theme-indigo-5: #2801b0;
            --simple-colors-default-theme-indigo-6: #3a00ff;
            --simple-colors-default-theme-indigo-7: #835fff;
            --simple-colors-default-theme-indigo-8: #9373ff;
            --simple-colors-default-theme-indigo-9: #9e82ff;
            --simple-colors-default-theme-indigo-10: #af97ff;
            --simple-colors-default-theme-indigo-11: #c3b2ff;
            --simple-colors-default-theme-indigo-12: #e5ddff;

            --simple-colors-default-theme-blue-1: #001333;
            --simple-colors-default-theme-blue-2: #001947;
            --simple-colors-default-theme-blue-3: #002569;
            --simple-colors-default-theme-blue-4: #003494;
            --simple-colors-default-theme-blue-5: #0041bb;
            --simple-colors-default-theme-blue-6: #0059ff;
            --simple-colors-default-theme-blue-7: #4083ff;
            --simple-colors-default-theme-blue-8: #5892fd;
            --simple-colors-default-theme-blue-9: #74a5ff;
            --simple-colors-default-theme-blue-10: #95baff;
            --simple-colors-default-theme-blue-11: #acc9ff;
            --simple-colors-default-theme-blue-12: #e2ecff;

            --simple-colors-default-theme-light-blue-1: #001b36;
            --simple-colors-default-theme-light-blue-2: #002850;
            --simple-colors-default-theme-light-blue-3: #003f7d;
            --simple-colors-default-theme-light-blue-4: #0055a8;
            --simple-colors-default-theme-light-blue-5: #0066ca;
            --simple-colors-default-theme-light-blue-6: #007ffc;
            --simple-colors-default-theme-light-blue-7: #41a1ff;
            --simple-colors-default-theme-light-blue-8: #58adff;
            --simple-colors-default-theme-light-blue-9: #65b3ff;
            --simple-colors-default-theme-light-blue-10: #92c9ff;
            --simple-colors-default-theme-light-blue-11: #a1d1ff;
            --simple-colors-default-theme-light-blue-12: #cde8ff;

            --simple-colors-default-theme-cyan-1: #001a20;
            --simple-colors-default-theme-cyan-2: #002c38;
            --simple-colors-default-theme-cyan-3: #003f50;
            --simple-colors-default-theme-cyan-4: #005970;
            --simple-colors-default-theme-cyan-5: #007999;
            --simple-colors-default-theme-cyan-6: #009dc7;
            --simple-colors-default-theme-cyan-7: #00c9ff;
            --simple-colors-default-theme-cyan-8: #1ccfff;
            --simple-colors-default-theme-cyan-9: #33d4ff;
            --simple-colors-default-theme-cyan-10: #77e2ff;
            --simple-colors-default-theme-cyan-11: #9beaff;
            --simple-colors-default-theme-cyan-12: #ddf8ff;

            --simple-colors-default-theme-teal-1: #001b14;
            --simple-colors-default-theme-teal-2: #002a20;
            --simple-colors-default-theme-teal-3: #003829;
            --simple-colors-default-theme-teal-4: #004e3a;
            --simple-colors-default-theme-teal-5: #007658;
            --simple-colors-default-theme-teal-6: #009d75;
            --simple-colors-default-theme-teal-7: #00ff9c;
            --simple-colors-default-theme-teal-8: #29ffac;
            --simple-colors-default-theme-teal-9: #56ffbd;
            --simple-colors-default-theme-teal-10: #79ffcb;
            --simple-colors-default-theme-teal-11: #98ffd7;
            --simple-colors-default-theme-teal-12: #d9fff0;

            --simple-colors-default-theme-green-1: #001d0c;
            --simple-colors-default-theme-green-2: #002a11;
            --simple-colors-default-theme-green-3: #003d18;
            --simple-colors-default-theme-green-4: #005a23;
            --simple-colors-default-theme-green-5: #00762e;
            --simple-colors-default-theme-green-6: #008c37;
            --simple-colors-default-theme-green-7: #00f961;
            --simple-colors-default-theme-green-8: #24ff70;
            --simple-colors-default-theme-green-9: #49ff88;
            --simple-colors-default-theme-green-10: #79ffa7;
            --simple-colors-default-theme-green-11: #acffc9;
            --simple-colors-default-theme-green-12: #e1ffeb;

            --simple-colors-default-theme-light-green-1: #0d2000;
            --simple-colors-default-theme-light-green-2: #143000;
            --simple-colors-default-theme-light-green-3: #1b3f00;
            --simple-colors-default-theme-light-green-4: #296100;
            --simple-colors-default-theme-light-green-5: #357f00;
            --simple-colors-default-theme-light-green-6: #429d00;
            --simple-colors-default-theme-light-green-7: #6fff00;
            --simple-colors-default-theme-light-green-8: #8efd38;
            --simple-colors-default-theme-light-green-9: #a1fd5a;
            --simple-colors-default-theme-light-green-10: #b1ff75;
            --simple-colors-default-theme-light-green-11: #c7ff9b;
            --simple-colors-default-theme-light-green-12: #ebffdb;

            --simple-colors-default-theme-lime-1: #182400;
            --simple-colors-default-theme-lime-2: #223400;
            --simple-colors-default-theme-lime-3: #293f00;
            --simple-colors-default-theme-lime-4: #3b5a00;
            --simple-colors-default-theme-lime-5: #4d7600;
            --simple-colors-default-theme-lime-6: #649900;
            --simple-colors-default-theme-lime-7: #aeff00;
            --simple-colors-default-theme-lime-8: #bdff2d;
            --simple-colors-default-theme-lime-9: #caff58;
            --simple-colors-default-theme-lime-10: #d4ff77;
            --simple-colors-default-theme-lime-11: #dfff9b;
            --simple-colors-default-theme-lime-12: #f1ffd2;

            --simple-colors-default-theme-yellow-1: #242400;
            --simple-colors-default-theme-yellow-2: #303000;
            --simple-colors-default-theme-yellow-3: #454400;
            --simple-colors-default-theme-yellow-4: #585700;
            --simple-colors-default-theme-yellow-5: #787700;
            --simple-colors-default-theme-yellow-6: #929100;
            --simple-colors-default-theme-yellow-7: #f6f600;
            --simple-colors-default-theme-yellow-8: #ffff3a;
            --simple-colors-default-theme-yellow-9: #ffff7c;
            --simple-colors-default-theme-yellow-10: #ffff90;
            --simple-colors-default-theme-yellow-11: #ffffac;
            --simple-colors-default-theme-yellow-12: #ffffd5;

            --simple-colors-default-theme-amber-1: #221a00;
            --simple-colors-default-theme-amber-2: #302500;
            --simple-colors-default-theme-amber-3: #413200;
            --simple-colors-default-theme-amber-4: #614b00;
            --simple-colors-default-theme-amber-5: #876800;
            --simple-colors-default-theme-amber-6: #b28900;
            --simple-colors-default-theme-amber-7: #ffc500;
            --simple-colors-default-theme-amber-8: #ffc235;
            --simple-colors-default-theme-amber-9: #ffcf5e;
            --simple-colors-default-theme-amber-10: #ffd677;
            --simple-colors-default-theme-amber-11: #ffdf92;
            --simple-colors-default-theme-amber-12: #fff2d4;

            --simple-colors-default-theme-orange-1: #2c1400;
            --simple-colors-default-theme-orange-2: #3d1c00;
            --simple-colors-default-theme-orange-3: #612d00;
            --simple-colors-default-theme-orange-4: #833d00;
            --simple-colors-default-theme-orange-5: #ae5100;
            --simple-colors-default-theme-orange-6: #e56a00;
            --simple-colors-default-theme-orange-7: #ff9625;
            --simple-colors-default-theme-orange-8: #ff9e36;
            --simple-colors-default-theme-orange-9: #ffb05c;
            --simple-colors-default-theme-orange-10: #ffbd75;
            --simple-colors-default-theme-orange-11: #ffca92;
            --simple-colors-default-theme-orange-12: #ffebd7;

            --simple-colors-default-theme-deep-orange-1: #240700;
            --simple-colors-default-theme-deep-orange-2: #3a0c00;
            --simple-colors-default-theme-deep-orange-3: #561100;
            --simple-colors-default-theme-deep-orange-4: #8a1c00;
            --simple-colors-default-theme-deep-orange-5: #b92500;
            --simple-colors-default-theme-deep-orange-6: #f53100;
            --simple-colors-default-theme-deep-orange-7: #ff6c3c;
            --simple-colors-default-theme-deep-orange-8: #ff7649;
            --simple-colors-default-theme-deep-orange-9: #ff8a64;
            --simple-colors-default-theme-deep-orange-10: #ffa588;
            --simple-colors-default-theme-deep-orange-11: #ffb299;
            --simple-colors-default-theme-deep-orange-12: #ffe7e0;

            --simple-colors-default-theme-brown-1: #200e09;
            --simple-colors-default-theme-brown-2: #2c140e;
            --simple-colors-default-theme-brown-3: #3b1e15;
            --simple-colors-default-theme-brown-4: #5b3328;
            --simple-colors-default-theme-brown-5: #724539;
            --simple-colors-default-theme-brown-6: #85574a;
            --simple-colors-default-theme-brown-7: #a47060;
            --simple-colors-default-theme-brown-8: #ac7868;
            --simple-colors-default-theme-brown-9: #b68373;
            --simple-colors-default-theme-brown-10: #c59485;
            --simple-colors-default-theme-brown-11: #e5b8aa;
            --simple-colors-default-theme-brown-12: #f0e2de;

            --simple-colors-default-theme-blue-grey-1: #0f1518;
            --simple-colors-default-theme-blue-grey-2: #182023;
            --simple-colors-default-theme-blue-grey-3: #1e282c;
            --simple-colors-default-theme-blue-grey-4: #2f3e45;
            --simple-colors-default-theme-blue-grey-5: #40535b;
            --simple-colors-default-theme-blue-grey-6: #56707c;
            --simple-colors-default-theme-blue-grey-7: #718892;
            --simple-colors-default-theme-blue-grey-8: #7a8f98;
            --simple-colors-default-theme-blue-grey-9: #8d9fa7;
            --simple-colors-default-theme-blue-grey-10: #9badb6;
            --simple-colors-default-theme-blue-grey-11: #b1c5ce;
            --simple-colors-default-theme-blue-grey-12: #e7eff1;
          }

          :host {
            accent-color: var(--simple-colors-default-theme-accent-7);
          }

          :host([accent-color="grey"]) {
            --simple-colors-default-theme-accent-1: #ffffff;
            --simple-colors-default-theme-accent-2: #eeeeee;
            --simple-colors-default-theme-accent-3: #dddddd;
            --simple-colors-default-theme-accent-4: #cccccc;
            --simple-colors-default-theme-accent-5: #bbbbbb;
            --simple-colors-default-theme-accent-6: #999999;
            --simple-colors-default-theme-accent-7: #666666;
            --simple-colors-default-theme-accent-8: #444444;
            --simple-colors-default-theme-accent-9: #333333;
            --simple-colors-default-theme-accent-10: #222222;
            --simple-colors-default-theme-accent-11: #111111;
            --simple-colors-default-theme-accent-12: #000000;
            --simple-colors-fixed-theme-accent-1: #ffffff;
            --simple-colors-fixed-theme-accent-2: #eeeeee;
            --simple-colors-fixed-theme-accent-3: #dddddd;
            --simple-colors-fixed-theme-accent-4: #cccccc;
            --simple-colors-fixed-theme-accent-5: #bbbbbb;
            --simple-colors-fixed-theme-accent-6: #999999;
            --simple-colors-fixed-theme-accent-7: #666666;
            --simple-colors-fixed-theme-accent-8: #444444;
            --simple-colors-fixed-theme-accent-9: #333333;
            --simple-colors-fixed-theme-accent-10: #222222;
            --simple-colors-fixed-theme-accent-11: #111111;
            --simple-colors-fixed-theme-accent-12: #000000;
          }

          :host([dark][accent-color="grey"]) {
            --simple-colors-default-theme-accent-1: #000000;
            --simple-colors-default-theme-accent-2: #111111;
            --simple-colors-default-theme-accent-3: #222222;
            --simple-colors-default-theme-accent-4: #333333;
            --simple-colors-default-theme-accent-5: #444444;
            --simple-colors-default-theme-accent-6: #666666;
            --simple-colors-default-theme-accent-7: #999999;
            --simple-colors-default-theme-accent-8: #bbbbbb;
            --simple-colors-default-theme-accent-9: #cccccc;
            --simple-colors-default-theme-accent-10: #dddddd;
            --simple-colors-default-theme-accent-11: #eeeeee;
            --simple-colors-default-theme-accent-12: #ffffff;
          }

          :host([accent-color="red"]) {
            --simple-colors-default-theme-accent-1: #ffdddd;
            --simple-colors-default-theme-accent-2: #ffaeae;
            --simple-colors-default-theme-accent-3: #ff8f8f;
            --simple-colors-default-theme-accent-4: #ff7474;
            --simple-colors-default-theme-accent-5: #fd5151;
            --simple-colors-default-theme-accent-6: #ff2222;
            --simple-colors-default-theme-accent-7: #ee0000;
            --simple-colors-default-theme-accent-8: #ac0000;
            --simple-colors-default-theme-accent-9: #850000;
            --simple-colors-default-theme-accent-10: #670000;
            --simple-colors-default-theme-accent-11: #520000;
            --simple-colors-default-theme-accent-12: #3f0000;
            --simple-colors-fixed-theme-accent-1: #ffdddd;
            --simple-colors-fixed-theme-accent-2: #ffaeae;
            --simple-colors-fixed-theme-accent-3: #ff8f8f;
            --simple-colors-fixed-theme-accent-4: #ff7474;
            --simple-colors-fixed-theme-accent-5: #fd5151;
            --simple-colors-fixed-theme-accent-6: #ff2222;
            --simple-colors-fixed-theme-accent-7: #ee0000;
            --simple-colors-fixed-theme-accent-8: #ac0000;
            --simple-colors-fixed-theme-accent-9: #850000;
            --simple-colors-fixed-theme-accent-10: #670000;
            --simple-colors-fixed-theme-accent-11: #520000;
            --simple-colors-fixed-theme-accent-12: #3f0000;
          }

          :host([dark][accent-color="red"]) {
            --simple-colors-default-theme-accent-1: #3f0000;
            --simple-colors-default-theme-accent-2: #520000;
            --simple-colors-default-theme-accent-3: #670000;
            --simple-colors-default-theme-accent-4: #850000;
            --simple-colors-default-theme-accent-5: #ac0000;
            --simple-colors-default-theme-accent-6: #ee0000;
            --simple-colors-default-theme-accent-7: #ff2222;
            --simple-colors-default-theme-accent-8: #fd5151;
            --simple-colors-default-theme-accent-9: #ff7474;
            --simple-colors-default-theme-accent-10: #ff8f8f;
            --simple-colors-default-theme-accent-11: #ffaeae;
            --simple-colors-default-theme-accent-12: #ffdddd;
          }

          :host([accent-color="pink"]) {
            --simple-colors-default-theme-accent-1: #ffe6f1;
            --simple-colors-default-theme-accent-2: #ffa5cf;
            --simple-colors-default-theme-accent-3: #ff87c0;
            --simple-colors-default-theme-accent-4: #ff73b5;
            --simple-colors-default-theme-accent-5: #fd60aa;
            --simple-colors-default-theme-accent-6: #ff3996;
            --simple-colors-default-theme-accent-7: #da004e;
            --simple-colors-default-theme-accent-8: #b80042;
            --simple-colors-default-theme-accent-9: #980036;
            --simple-colors-default-theme-accent-10: #78002b;
            --simple-colors-default-theme-accent-11: #5a0020;
            --simple-colors-default-theme-accent-12: #440019;
            --simple-colors-fixed-theme-accent-1: #ffe6f1;
            --simple-colors-fixed-theme-accent-2: #ffa5cf;
            --simple-colors-fixed-theme-accent-3: #ff87c0;
            --simple-colors-fixed-theme-accent-4: #ff73b5;
            --simple-colors-fixed-theme-accent-5: #fd60aa;
            --simple-colors-fixed-theme-accent-6: #ff3996;
            --simple-colors-fixed-theme-accent-7: #da004e;
            --simple-colors-fixed-theme-accent-8: #b80042;
            --simple-colors-fixed-theme-accent-9: #980036;
            --simple-colors-fixed-theme-accent-10: #78002b;
            --simple-colors-fixed-theme-accent-11: #5a0020;
            --simple-colors-fixed-theme-accent-12: #440019;
          }

          :host([dark][accent-color="pink"]) {
            --simple-colors-default-theme-accent-1: #440019;
            --simple-colors-default-theme-accent-2: #5a0020;
            --simple-colors-default-theme-accent-3: #78002b;
            --simple-colors-default-theme-accent-4: #980036;
            --simple-colors-default-theme-accent-5: #b80042;
            --simple-colors-default-theme-accent-6: #da004e;
            --simple-colors-default-theme-accent-7: #ff3996;
            --simple-colors-default-theme-accent-8: #fd60aa;
            --simple-colors-default-theme-accent-9: #ff73b5;
            --simple-colors-default-theme-accent-10: #ff87c0;
            --simple-colors-default-theme-accent-11: #ffa5cf;
            --simple-colors-default-theme-accent-12: #ffe6f1;
          }

          :host([accent-color="purple"]) {
            --simple-colors-default-theme-accent-1: #fce6ff;
            --simple-colors-default-theme-accent-2: #f4affd;
            --simple-colors-default-theme-accent-3: #f394ff;
            --simple-colors-default-theme-accent-4: #f07cff;
            --simple-colors-default-theme-accent-5: #ed61ff;
            --simple-colors-default-theme-accent-6: #e200ff;
            --simple-colors-default-theme-accent-7: #a500ba;
            --simple-colors-default-theme-accent-8: #8a009b;
            --simple-colors-default-theme-accent-9: #6c0079;
            --simple-colors-default-theme-accent-10: #490052;
            --simple-colors-default-theme-accent-11: #33003a;
            --simple-colors-default-theme-accent-12: #200025;
            --simple-colors-fixed-theme-accent-1: #fce6ff;
            --simple-colors-fixed-theme-accent-2: #f4affd;
            --simple-colors-fixed-theme-accent-3: #f394ff;
            --simple-colors-fixed-theme-accent-4: #f07cff;
            --simple-colors-fixed-theme-accent-5: #ed61ff;
            --simple-colors-fixed-theme-accent-6: #e200ff;
            --simple-colors-fixed-theme-accent-7: #a500ba;
            --simple-colors-fixed-theme-accent-8: #8a009b;
            --simple-colors-fixed-theme-accent-9: #6c0079;
            --simple-colors-fixed-theme-accent-10: #490052;
            --simple-colors-fixed-theme-accent-11: #33003a;
            --simple-colors-fixed-theme-accent-12: #200025;
          }

          :host([dark][accent-color="purple"]) {
            --simple-colors-default-theme-accent-1: #200025;
            --simple-colors-default-theme-accent-2: #33003a;
            --simple-colors-default-theme-accent-3: #490052;
            --simple-colors-default-theme-accent-4: #6c0079;
            --simple-colors-default-theme-accent-5: #8a009b;
            --simple-colors-default-theme-accent-6: #a500ba;
            --simple-colors-default-theme-accent-7: #e200ff;
            --simple-colors-default-theme-accent-8: #ed61ff;
            --simple-colors-default-theme-accent-9: #f07cff;
            --simple-colors-default-theme-accent-10: #f394ff;
            --simple-colors-default-theme-accent-11: #f4affd;
            --simple-colors-default-theme-accent-12: #fce6ff;
          }

          :host([accent-color="deep-purple"]) {
            --simple-colors-default-theme-accent-1: #f3e4ff;
            --simple-colors-default-theme-accent-2: #ddacff;
            --simple-colors-default-theme-accent-3: #c97eff;
            --simple-colors-default-theme-accent-4: #bb63f9;
            --simple-colors-default-theme-accent-5: #b44aff;
            --simple-colors-default-theme-accent-6: #a931ff;
            --simple-colors-default-theme-accent-7: #7e00d8;
            --simple-colors-default-theme-accent-8: #5d009f;
            --simple-colors-default-theme-accent-9: #4c0081;
            --simple-colors-default-theme-accent-10: #3a0063;
            --simple-colors-default-theme-accent-11: #2a0049;
            --simple-colors-default-theme-accent-12: #1d0033;
            --simple-colors-fixed-theme-accent-1: #f3e4ff;
            --simple-colors-fixed-theme-accent-2: #ddacff;
            --simple-colors-fixed-theme-accent-3: #c97eff;
            --simple-colors-fixed-theme-accent-4: #bb63f9;
            --simple-colors-fixed-theme-accent-5: #b44aff;
            --simple-colors-fixed-theme-accent-6: #a931ff;
            --simple-colors-fixed-theme-accent-7: #7e00d8;
            --simple-colors-fixed-theme-accent-8: #5d009f;
            --simple-colors-fixed-theme-accent-9: #4c0081;
            --simple-colors-fixed-theme-accent-10: #3a0063;
            --simple-colors-fixed-theme-accent-11: #2a0049;
            --simple-colors-fixed-theme-accent-12: #1d0033;
          }

          :host([dark][accent-color="deep-purple"]) {
            --simple-colors-default-theme-accent-1: #1d0033;
            --simple-colors-default-theme-accent-2: #2a0049;
            --simple-colors-default-theme-accent-3: #3a0063;
            --simple-colors-default-theme-accent-4: #4c0081;
            --simple-colors-default-theme-accent-5: #5d009f;
            --simple-colors-default-theme-accent-6: #7e00d8;
            --simple-colors-default-theme-accent-7: #a931ff;
            --simple-colors-default-theme-accent-8: #b44aff;
            --simple-colors-default-theme-accent-9: #bb63f9;
            --simple-colors-default-theme-accent-10: #c97eff;
            --simple-colors-default-theme-accent-11: #ddacff;
            --simple-colors-default-theme-accent-12: #f3e4ff;
          }

          :host([accent-color="indigo"]) {
            --simple-colors-default-theme-accent-1: #e5ddff;
            --simple-colors-default-theme-accent-2: #c3b2ff;
            --simple-colors-default-theme-accent-3: #af97ff;
            --simple-colors-default-theme-accent-4: #9e82ff;
            --simple-colors-default-theme-accent-5: #9373ff;
            --simple-colors-default-theme-accent-6: #835fff;
            --simple-colors-default-theme-accent-7: #3a00ff;
            --simple-colors-default-theme-accent-8: #2801b0;
            --simple-colors-default-theme-accent-9: #20008c;
            --simple-colors-default-theme-accent-10: #160063;
            --simple-colors-default-theme-accent-11: #100049;
            --simple-colors-default-theme-accent-12: #0a0030;
            --simple-colors-fixed-theme-accent-1: #e5ddff;
            --simple-colors-fixed-theme-accent-2: #c3b2ff;
            --simple-colors-fixed-theme-accent-3: #af97ff;
            --simple-colors-fixed-theme-accent-4: #9e82ff;
            --simple-colors-fixed-theme-accent-5: #9373ff;
            --simple-colors-fixed-theme-accent-6: #835fff;
            --simple-colors-fixed-theme-accent-7: #3a00ff;
            --simple-colors-fixed-theme-accent-8: #2801b0;
            --simple-colors-fixed-theme-accent-9: #20008c;
            --simple-colors-fixed-theme-accent-10: #160063;
            --simple-colors-fixed-theme-accent-11: #100049;
            --simple-colors-fixed-theme-accent-12: #0a0030;
          }

          :host([dark][accent-color="indigo"]) {
            --simple-colors-default-theme-accent-1: #0a0030;
            --simple-colors-default-theme-accent-2: #100049;
            --simple-colors-default-theme-accent-3: #160063;
            --simple-colors-default-theme-accent-4: #20008c;
            --simple-colors-default-theme-accent-5: #2801b0;
            --simple-colors-default-theme-accent-6: #3a00ff;
            --simple-colors-default-theme-accent-7: #835fff;
            --simple-colors-default-theme-accent-8: #9373ff;
            --simple-colors-default-theme-accent-9: #9e82ff;
            --simple-colors-default-theme-accent-10: #af97ff;
            --simple-colors-default-theme-accent-11: #c3b2ff;
            --simple-colors-default-theme-accent-12: #e5ddff;
          }

          :host([accent-color="blue"]) {
            --simple-colors-default-theme-accent-1: #e2ecff;
            --simple-colors-default-theme-accent-2: #acc9ff;
            --simple-colors-default-theme-accent-3: #95baff;
            --simple-colors-default-theme-accent-4: #74a5ff;
            --simple-colors-default-theme-accent-5: #5892fd;
            --simple-colors-default-theme-accent-6: #4083ff;
            --simple-colors-default-theme-accent-7: #0059ff;
            --simple-colors-default-theme-accent-8: #0041bb;
            --simple-colors-default-theme-accent-9: #003494;
            --simple-colors-default-theme-accent-10: #002569;
            --simple-colors-default-theme-accent-11: #001947;
            --simple-colors-default-theme-accent-12: #001333;
            --simple-colors-fixed-theme-accent-1: #e2ecff;
            --simple-colors-fixed-theme-accent-2: #acc9ff;
            --simple-colors-fixed-theme-accent-3: #95baff;
            --simple-colors-fixed-theme-accent-4: #74a5ff;
            --simple-colors-fixed-theme-accent-5: #5892fd;
            --simple-colors-fixed-theme-accent-6: #4083ff;
            --simple-colors-fixed-theme-accent-7: #0059ff;
            --simple-colors-fixed-theme-accent-8: #0041bb;
            --simple-colors-fixed-theme-accent-9: #003494;
            --simple-colors-fixed-theme-accent-10: #002569;
            --simple-colors-fixed-theme-accent-11: #001947;
            --simple-colors-fixed-theme-accent-12: #001333;
          }

          :host([dark][accent-color="blue"]) {
            --simple-colors-default-theme-accent-1: #001333;
            --simple-colors-default-theme-accent-2: #001947;
            --simple-colors-default-theme-accent-3: #002569;
            --simple-colors-default-theme-accent-4: #003494;
            --simple-colors-default-theme-accent-5: #0041bb;
            --simple-colors-default-theme-accent-6: #0059ff;
            --simple-colors-default-theme-accent-7: #4083ff;
            --simple-colors-default-theme-accent-8: #5892fd;
            --simple-colors-default-theme-accent-9: #74a5ff;
            --simple-colors-default-theme-accent-10: #95baff;
            --simple-colors-default-theme-accent-11: #acc9ff;
            --simple-colors-default-theme-accent-12: #e2ecff;
          }

          :host([accent-color="light-blue"]) {
            --simple-colors-default-theme-accent-1: #cde8ff;
            --simple-colors-default-theme-accent-2: #a1d1ff;
            --simple-colors-default-theme-accent-3: #92c9ff;
            --simple-colors-default-theme-accent-4: #65b3ff;
            --simple-colors-default-theme-accent-5: #58adff;
            --simple-colors-default-theme-accent-6: #41a1ff;
            --simple-colors-default-theme-accent-7: #007ffc;
            --simple-colors-default-theme-accent-8: #0066ca;
            --simple-colors-default-theme-accent-9: #0055a8;
            --simple-colors-default-theme-accent-10: #003f7d;
            --simple-colors-default-theme-accent-11: #002850;
            --simple-colors-default-theme-accent-12: #001b36;
            --simple-colors-fixed-theme-accent-1: #cde8ff;
            --simple-colors-fixed-theme-accent-2: #a1d1ff;
            --simple-colors-fixed-theme-accent-3: #92c9ff;
            --simple-colors-fixed-theme-accent-4: #65b3ff;
            --simple-colors-fixed-theme-accent-5: #58adff;
            --simple-colors-fixed-theme-accent-6: #41a1ff;
            --simple-colors-fixed-theme-accent-7: #007ffc;
            --simple-colors-fixed-theme-accent-8: #0066ca;
            --simple-colors-fixed-theme-accent-9: #0055a8;
            --simple-colors-fixed-theme-accent-10: #003f7d;
            --simple-colors-fixed-theme-accent-11: #002850;
            --simple-colors-fixed-theme-accent-12: #001b36;
          }

          :host([dark][accent-color="light-blue"]) {
            --simple-colors-default-theme-accent-1: #001b36;
            --simple-colors-default-theme-accent-2: #002850;
            --simple-colors-default-theme-accent-3: #003f7d;
            --simple-colors-default-theme-accent-4: #0055a8;
            --simple-colors-default-theme-accent-5: #0066ca;
            --simple-colors-default-theme-accent-6: #007ffc;
            --simple-colors-default-theme-accent-7: #41a1ff;
            --simple-colors-default-theme-accent-8: #58adff;
            --simple-colors-default-theme-accent-9: #65b3ff;
            --simple-colors-default-theme-accent-10: #92c9ff;
            --simple-colors-default-theme-accent-11: #a1d1ff;
            --simple-colors-default-theme-accent-12: #cde8ff;
          }

          :host([accent-color="cyan"]) {
            --simple-colors-default-theme-accent-1: #ddf8ff;
            --simple-colors-default-theme-accent-2: #9beaff;
            --simple-colors-default-theme-accent-3: #77e2ff;
            --simple-colors-default-theme-accent-4: #33d4ff;
            --simple-colors-default-theme-accent-5: #1ccfff;
            --simple-colors-default-theme-accent-6: #00c9ff;
            --simple-colors-default-theme-accent-7: #009dc7;
            --simple-colors-default-theme-accent-8: #007999;
            --simple-colors-default-theme-accent-9: #005970;
            --simple-colors-default-theme-accent-10: #003f50;
            --simple-colors-default-theme-accent-11: #002c38;
            --simple-colors-default-theme-accent-12: #001a20;
            --simple-colors-fixed-theme-accent-1: #ddf8ff;
            --simple-colors-fixed-theme-accent-2: #9beaff;
            --simple-colors-fixed-theme-accent-3: #77e2ff;
            --simple-colors-fixed-theme-accent-4: #33d4ff;
            --simple-colors-fixed-theme-accent-5: #1ccfff;
            --simple-colors-fixed-theme-accent-6: #00c9ff;
            --simple-colors-fixed-theme-accent-7: #009dc7;
            --simple-colors-fixed-theme-accent-8: #007999;
            --simple-colors-fixed-theme-accent-9: #005970;
            --simple-colors-fixed-theme-accent-10: #003f50;
            --simple-colors-fixed-theme-accent-11: #002c38;
            --simple-colors-fixed-theme-accent-12: #001a20;
          }

          :host([dark][accent-color="cyan"]) {
            --simple-colors-default-theme-accent-1: #001a20;
            --simple-colors-default-theme-accent-2: #002c38;
            --simple-colors-default-theme-accent-3: #003f50;
            --simple-colors-default-theme-accent-4: #005970;
            --simple-colors-default-theme-accent-5: #007999;
            --simple-colors-default-theme-accent-6: #009dc7;
            --simple-colors-default-theme-accent-7: #00c9ff;
            --simple-colors-default-theme-accent-8: #1ccfff;
            --simple-colors-default-theme-accent-9: #33d4ff;
            --simple-colors-default-theme-accent-10: #77e2ff;
            --simple-colors-default-theme-accent-11: #9beaff;
            --simple-colors-default-theme-accent-12: #ddf8ff;
          }

          :host([accent-color="teal"]) {
            --simple-colors-default-theme-accent-1: #d9fff0;
            --simple-colors-default-theme-accent-2: #98ffd7;
            --simple-colors-default-theme-accent-3: #79ffcb;
            --simple-colors-default-theme-accent-4: #56ffbd;
            --simple-colors-default-theme-accent-5: #29ffac;
            --simple-colors-default-theme-accent-6: #00ff9c;
            --simple-colors-default-theme-accent-7: #009d75;
            --simple-colors-default-theme-accent-8: #007658;
            --simple-colors-default-theme-accent-9: #004e3a;
            --simple-colors-default-theme-accent-10: #003829;
            --simple-colors-default-theme-accent-11: #002a20;
            --simple-colors-default-theme-accent-12: #001b14;
            --simple-colors-fixed-theme-accent-1: #d9fff0;
            --simple-colors-fixed-theme-accent-2: #98ffd7;
            --simple-colors-fixed-theme-accent-3: #79ffcb;
            --simple-colors-fixed-theme-accent-4: #56ffbd;
            --simple-colors-fixed-theme-accent-5: #29ffac;
            --simple-colors-fixed-theme-accent-6: #00ff9c;
            --simple-colors-fixed-theme-accent-7: #009d75;
            --simple-colors-fixed-theme-accent-8: #007658;
            --simple-colors-fixed-theme-accent-9: #004e3a;
            --simple-colors-fixed-theme-accent-10: #003829;
            --simple-colors-fixed-theme-accent-11: #002a20;
            --simple-colors-fixed-theme-accent-12: #001b14;
          }

          :host([dark][accent-color="teal"]) {
            --simple-colors-default-theme-accent-1: #001b14;
            --simple-colors-default-theme-accent-2: #002a20;
            --simple-colors-default-theme-accent-3: #003829;
            --simple-colors-default-theme-accent-4: #004e3a;
            --simple-colors-default-theme-accent-5: #007658;
            --simple-colors-default-theme-accent-6: #009d75;
            --simple-colors-default-theme-accent-7: #00ff9c;
            --simple-colors-default-theme-accent-8: #29ffac;
            --simple-colors-default-theme-accent-9: #56ffbd;
            --simple-colors-default-theme-accent-10: #79ffcb;
            --simple-colors-default-theme-accent-11: #98ffd7;
            --simple-colors-default-theme-accent-12: #d9fff0;
          }

          :host([accent-color="green"]) {
            --simple-colors-default-theme-accent-1: #e1ffeb;
            --simple-colors-default-theme-accent-2: #acffc9;
            --simple-colors-default-theme-accent-3: #79ffa7;
            --simple-colors-default-theme-accent-4: #49ff88;
            --simple-colors-default-theme-accent-5: #24ff70;
            --simple-colors-default-theme-accent-6: #00f961;
            --simple-colors-default-theme-accent-7: #008c37;
            --simple-colors-default-theme-accent-8: #00762e;
            --simple-colors-default-theme-accent-9: #005a23;
            --simple-colors-default-theme-accent-10: #003d18;
            --simple-colors-default-theme-accent-11: #002a11;
            --simple-colors-default-theme-accent-12: #001d0c;
            --simple-colors-fixed-theme-accent-1: #e1ffeb;
            --simple-colors-fixed-theme-accent-2: #acffc9;
            --simple-colors-fixed-theme-accent-3: #79ffa7;
            --simple-colors-fixed-theme-accent-4: #49ff88;
            --simple-colors-fixed-theme-accent-5: #24ff70;
            --simple-colors-fixed-theme-accent-6: #00f961;
            --simple-colors-fixed-theme-accent-7: #008c37;
            --simple-colors-fixed-theme-accent-8: #00762e;
            --simple-colors-fixed-theme-accent-9: #005a23;
            --simple-colors-fixed-theme-accent-10: #003d18;
            --simple-colors-fixed-theme-accent-11: #002a11;
            --simple-colors-fixed-theme-accent-12: #001d0c;
          }

          :host([dark][accent-color="green"]) {
            --simple-colors-default-theme-accent-1: #001d0c;
            --simple-colors-default-theme-accent-2: #002a11;
            --simple-colors-default-theme-accent-3: #003d18;
            --simple-colors-default-theme-accent-4: #005a23;
            --simple-colors-default-theme-accent-5: #00762e;
            --simple-colors-default-theme-accent-6: #008c37;
            --simple-colors-default-theme-accent-7: #00f961;
            --simple-colors-default-theme-accent-8: #24ff70;
            --simple-colors-default-theme-accent-9: #49ff88;
            --simple-colors-default-theme-accent-10: #79ffa7;
            --simple-colors-default-theme-accent-11: #acffc9;
            --simple-colors-default-theme-accent-12: #e1ffeb;
          }

          :host([accent-color="light-green"]) {
            --simple-colors-default-theme-accent-1: #ebffdb;
            --simple-colors-default-theme-accent-2: #c7ff9b;
            --simple-colors-default-theme-accent-3: #b1ff75;
            --simple-colors-default-theme-accent-4: #a1fd5a;
            --simple-colors-default-theme-accent-5: #8efd38;
            --simple-colors-default-theme-accent-6: #6fff00;
            --simple-colors-default-theme-accent-7: #429d00;
            --simple-colors-default-theme-accent-8: #357f00;
            --simple-colors-default-theme-accent-9: #296100;
            --simple-colors-default-theme-accent-10: #1b3f00;
            --simple-colors-default-theme-accent-11: #143000;
            --simple-colors-default-theme-accent-12: #0d2000;
            --simple-colors-fixed-theme-accent-1: #ebffdb;
            --simple-colors-fixed-theme-accent-2: #c7ff9b;
            --simple-colors-fixed-theme-accent-3: #b1ff75;
            --simple-colors-fixed-theme-accent-4: #a1fd5a;
            --simple-colors-fixed-theme-accent-5: #8efd38;
            --simple-colors-fixed-theme-accent-6: #6fff00;
            --simple-colors-fixed-theme-accent-7: #429d00;
            --simple-colors-fixed-theme-accent-8: #357f00;
            --simple-colors-fixed-theme-accent-9: #296100;
            --simple-colors-fixed-theme-accent-10: #1b3f00;
            --simple-colors-fixed-theme-accent-11: #143000;
            --simple-colors-fixed-theme-accent-12: #0d2000;
          }

          :host([dark][accent-color="light-green"]) {
            --simple-colors-default-theme-accent-1: #0d2000;
            --simple-colors-default-theme-accent-2: #143000;
            --simple-colors-default-theme-accent-3: #1b3f00;
            --simple-colors-default-theme-accent-4: #296100;
            --simple-colors-default-theme-accent-5: #357f00;
            --simple-colors-default-theme-accent-6: #429d00;
            --simple-colors-default-theme-accent-7: #6fff00;
            --simple-colors-default-theme-accent-8: #8efd38;
            --simple-colors-default-theme-accent-9: #a1fd5a;
            --simple-colors-default-theme-accent-10: #b1ff75;
            --simple-colors-default-theme-accent-11: #c7ff9b;
            --simple-colors-default-theme-accent-12: #ebffdb;
          }

          :host([accent-color="lime"]) {
            --simple-colors-default-theme-accent-1: #f1ffd2;
            --simple-colors-default-theme-accent-2: #dfff9b;
            --simple-colors-default-theme-accent-3: #d4ff77;
            --simple-colors-default-theme-accent-4: #caff58;
            --simple-colors-default-theme-accent-5: #bdff2d;
            --simple-colors-default-theme-accent-6: #aeff00;
            --simple-colors-default-theme-accent-7: #649900;
            --simple-colors-default-theme-accent-8: #4d7600;
            --simple-colors-default-theme-accent-9: #3b5a00;
            --simple-colors-default-theme-accent-10: #293f00;
            --simple-colors-default-theme-accent-11: #223400;
            --simple-colors-default-theme-accent-12: #182400;
            --simple-colors-fixed-theme-accent-1: #f1ffd2;
            --simple-colors-fixed-theme-accent-2: #dfff9b;
            --simple-colors-fixed-theme-accent-3: #d4ff77;
            --simple-colors-fixed-theme-accent-4: #caff58;
            --simple-colors-fixed-theme-accent-5: #bdff2d;
            --simple-colors-fixed-theme-accent-6: #aeff00;
            --simple-colors-fixed-theme-accent-7: #649900;
            --simple-colors-fixed-theme-accent-8: #4d7600;
            --simple-colors-fixed-theme-accent-9: #3b5a00;
            --simple-colors-fixed-theme-accent-10: #293f00;
            --simple-colors-fixed-theme-accent-11: #223400;
            --simple-colors-fixed-theme-accent-12: #182400;
          }

          :host([dark][accent-color="lime"]) {
            --simple-colors-default-theme-accent-1: #182400;
            --simple-colors-default-theme-accent-2: #223400;
            --simple-colors-default-theme-accent-3: #293f00;
            --simple-colors-default-theme-accent-4: #3b5a00;
            --simple-colors-default-theme-accent-5: #4d7600;
            --simple-colors-default-theme-accent-6: #649900;
            --simple-colors-default-theme-accent-7: #aeff00;
            --simple-colors-default-theme-accent-8: #bdff2d;
            --simple-colors-default-theme-accent-9: #caff58;
            --simple-colors-default-theme-accent-10: #d4ff77;
            --simple-colors-default-theme-accent-11: #dfff9b;
            --simple-colors-default-theme-accent-12: #f1ffd2;
          }

          :host([accent-color="yellow"]) {
            --simple-colors-default-theme-accent-1: #ffffd5;
            --simple-colors-default-theme-accent-2: #ffffac;
            --simple-colors-default-theme-accent-3: #ffff90;
            --simple-colors-default-theme-accent-4: #ffff7c;
            --simple-colors-default-theme-accent-5: #ffff3a;
            --simple-colors-default-theme-accent-6: #f6f600;
            --simple-colors-default-theme-accent-7: #929100;
            --simple-colors-default-theme-accent-8: #787700;
            --simple-colors-default-theme-accent-9: #585700;
            --simple-colors-default-theme-accent-10: #454400;
            --simple-colors-default-theme-accent-11: #303000;
            --simple-colors-default-theme-accent-12: #242400;
            --simple-colors-fixed-theme-accent-1: #ffffd5;
            --simple-colors-fixed-theme-accent-2: #ffffac;
            --simple-colors-fixed-theme-accent-3: #ffff90;
            --simple-colors-fixed-theme-accent-4: #ffff7c;
            --simple-colors-fixed-theme-accent-5: #ffff3a;
            --simple-colors-fixed-theme-accent-6: #f6f600;
            --simple-colors-fixed-theme-accent-7: #929100;
            --simple-colors-fixed-theme-accent-8: #787700;
            --simple-colors-fixed-theme-accent-9: #585700;
            --simple-colors-fixed-theme-accent-10: #454400;
            --simple-colors-fixed-theme-accent-11: #303000;
            --simple-colors-fixed-theme-accent-12: #242400;
          }

          :host([dark][accent-color="yellow"]) {
            --simple-colors-default-theme-accent-1: #242400;
            --simple-colors-default-theme-accent-2: #303000;
            --simple-colors-default-theme-accent-3: #454400;
            --simple-colors-default-theme-accent-4: #585700;
            --simple-colors-default-theme-accent-5: #787700;
            --simple-colors-default-theme-accent-6: #929100;
            --simple-colors-default-theme-accent-7: #f6f600;
            --simple-colors-default-theme-accent-8: #ffff3a;
            --simple-colors-default-theme-accent-9: #ffff7c;
            --simple-colors-default-theme-accent-10: #ffff90;
            --simple-colors-default-theme-accent-11: #ffffac;
            --simple-colors-default-theme-accent-12: #ffffd5;
          }

          :host([accent-color="amber"]) {
            --simple-colors-default-theme-accent-1: #fff2d4;
            --simple-colors-default-theme-accent-2: #ffdf92;
            --simple-colors-default-theme-accent-3: #ffd677;
            --simple-colors-default-theme-accent-4: #ffcf5e;
            --simple-colors-default-theme-accent-5: #ffc235;
            --simple-colors-default-theme-accent-6: #ffc500;
            --simple-colors-default-theme-accent-7: #b28900;
            --simple-colors-default-theme-accent-8: #876800;
            --simple-colors-default-theme-accent-9: #614b00;
            --simple-colors-default-theme-accent-10: #413200;
            --simple-colors-default-theme-accent-11: #302500;
            --simple-colors-default-theme-accent-12: #221a00;
            --simple-colors-fixed-theme-accent-1: #fff2d4;
            --simple-colors-fixed-theme-accent-2: #ffdf92;
            --simple-colors-fixed-theme-accent-3: #ffd677;
            --simple-colors-fixed-theme-accent-4: #ffcf5e;
            --simple-colors-fixed-theme-accent-5: #ffc235;
            --simple-colors-fixed-theme-accent-6: #ffc500;
            --simple-colors-fixed-theme-accent-7: #b28900;
            --simple-colors-fixed-theme-accent-8: #876800;
            --simple-colors-fixed-theme-accent-9: #614b00;
            --simple-colors-fixed-theme-accent-10: #413200;
            --simple-colors-fixed-theme-accent-11: #302500;
            --simple-colors-fixed-theme-accent-12: #221a00;
          }

          :host([dark][accent-color="amber"]) {
            --simple-colors-default-theme-accent-1: #221a00;
            --simple-colors-default-theme-accent-2: #302500;
            --simple-colors-default-theme-accent-3: #413200;
            --simple-colors-default-theme-accent-4: #614b00;
            --simple-colors-default-theme-accent-5: #876800;
            --simple-colors-default-theme-accent-6: #b28900;
            --simple-colors-default-theme-accent-7: #ffc500;
            --simple-colors-default-theme-accent-8: #ffc235;
            --simple-colors-default-theme-accent-9: #ffcf5e;
            --simple-colors-default-theme-accent-10: #ffd677;
            --simple-colors-default-theme-accent-11: #ffdf92;
            --simple-colors-default-theme-accent-12: #fff2d4;
          }

          :host([accent-color="orange"]) {
            --simple-colors-default-theme-accent-1: #ffebd7;
            --simple-colors-default-theme-accent-2: #ffca92;
            --simple-colors-default-theme-accent-3: #ffbd75;
            --simple-colors-default-theme-accent-4: #ffb05c;
            --simple-colors-default-theme-accent-5: #ff9e36;
            --simple-colors-default-theme-accent-6: #ff9625;
            --simple-colors-default-theme-accent-7: #e56a00;
            --simple-colors-default-theme-accent-8: #ae5100;
            --simple-colors-default-theme-accent-9: #833d00;
            --simple-colors-default-theme-accent-10: #612d00;
            --simple-colors-default-theme-accent-11: #3d1c00;
            --simple-colors-default-theme-accent-12: #2c1400;
            --simple-colors-fixed-theme-accent-1: #ffebd7;
            --simple-colors-fixed-theme-accent-2: #ffca92;
            --simple-colors-fixed-theme-accent-3: #ffbd75;
            --simple-colors-fixed-theme-accent-4: #ffb05c;
            --simple-colors-fixed-theme-accent-5: #ff9e36;
            --simple-colors-fixed-theme-accent-6: #ff9625;
            --simple-colors-fixed-theme-accent-7: #e56a00;
            --simple-colors-fixed-theme-accent-8: #ae5100;
            --simple-colors-fixed-theme-accent-9: #833d00;
            --simple-colors-fixed-theme-accent-10: #612d00;
            --simple-colors-fixed-theme-accent-11: #3d1c00;
            --simple-colors-fixed-theme-accent-12: #2c1400;
          }

          :host([dark][accent-color="orange"]) {
            --simple-colors-default-theme-accent-1: #2c1400;
            --simple-colors-default-theme-accent-2: #3d1c00;
            --simple-colors-default-theme-accent-3: #612d00;
            --simple-colors-default-theme-accent-4: #833d00;
            --simple-colors-default-theme-accent-5: #ae5100;
            --simple-colors-default-theme-accent-6: #e56a00;
            --simple-colors-default-theme-accent-7: #ff9625;
            --simple-colors-default-theme-accent-8: #ff9e36;
            --simple-colors-default-theme-accent-9: #ffb05c;
            --simple-colors-default-theme-accent-10: #ffbd75;
            --simple-colors-default-theme-accent-11: #ffca92;
            --simple-colors-default-theme-accent-12: #ffebd7;
          }

          :host([accent-color="deep-orange"]) {
            --simple-colors-default-theme-accent-1: #ffe7e0;
            --simple-colors-default-theme-accent-2: #ffb299;
            --simple-colors-default-theme-accent-3: #ffa588;
            --simple-colors-default-theme-accent-4: #ff8a64;
            --simple-colors-default-theme-accent-5: #ff7649;
            --simple-colors-default-theme-accent-6: #ff6c3c;
            --simple-colors-default-theme-accent-7: #f53100;
            --simple-colors-default-theme-accent-8: #b92500;
            --simple-colors-default-theme-accent-9: #8a1c00;
            --simple-colors-default-theme-accent-10: #561100;
            --simple-colors-default-theme-accent-11: #3a0c00;
            --simple-colors-default-theme-accent-12: #240700;
            --simple-colors-fixed-theme-accent-1: #ffe7e0;
            --simple-colors-fixed-theme-accent-2: #ffb299;
            --simple-colors-fixed-theme-accent-3: #ffa588;
            --simple-colors-fixed-theme-accent-4: #ff8a64;
            --simple-colors-fixed-theme-accent-5: #ff7649;
            --simple-colors-fixed-theme-accent-6: #ff6c3c;
            --simple-colors-fixed-theme-accent-7: #f53100;
            --simple-colors-fixed-theme-accent-8: #b92500;
            --simple-colors-fixed-theme-accent-9: #8a1c00;
            --simple-colors-fixed-theme-accent-10: #561100;
            --simple-colors-fixed-theme-accent-11: #3a0c00;
            --simple-colors-fixed-theme-accent-12: #240700;
          }

          :host([dark][accent-color="deep-orange"]) {
            --simple-colors-default-theme-accent-1: #240700;
            --simple-colors-default-theme-accent-2: #3a0c00;
            --simple-colors-default-theme-accent-3: #561100;
            --simple-colors-default-theme-accent-4: #8a1c00;
            --simple-colors-default-theme-accent-5: #b92500;
            --simple-colors-default-theme-accent-6: #f53100;
            --simple-colors-default-theme-accent-7: #ff6c3c;
            --simple-colors-default-theme-accent-8: #ff7649;
            --simple-colors-default-theme-accent-9: #ff8a64;
            --simple-colors-default-theme-accent-10: #ffa588;
            --simple-colors-default-theme-accent-11: #ffb299;
            --simple-colors-default-theme-accent-12: #ffe7e0;
          }

          :host([accent-color="brown"]) {
            --simple-colors-default-theme-accent-1: #f0e2de;
            --simple-colors-default-theme-accent-2: #e5b8aa;
            --simple-colors-default-theme-accent-3: #c59485;
            --simple-colors-default-theme-accent-4: #b68373;
            --simple-colors-default-theme-accent-5: #ac7868;
            --simple-colors-default-theme-accent-6: #a47060;
            --simple-colors-default-theme-accent-7: #85574a;
            --simple-colors-default-theme-accent-8: #724539;
            --simple-colors-default-theme-accent-9: #5b3328;
            --simple-colors-default-theme-accent-10: #3b1e15;
            --simple-colors-default-theme-accent-11: #2c140e;
            --simple-colors-default-theme-accent-12: #200e09;
            --simple-colors-fixed-theme-accent-1: #f0e2de;
            --simple-colors-fixed-theme-accent-2: #e5b8aa;
            --simple-colors-fixed-theme-accent-3: #c59485;
            --simple-colors-fixed-theme-accent-4: #b68373;
            --simple-colors-fixed-theme-accent-5: #ac7868;
            --simple-colors-fixed-theme-accent-6: #a47060;
            --simple-colors-fixed-theme-accent-7: #85574a;
            --simple-colors-fixed-theme-accent-8: #724539;
            --simple-colors-fixed-theme-accent-9: #5b3328;
            --simple-colors-fixed-theme-accent-10: #3b1e15;
            --simple-colors-fixed-theme-accent-11: #2c140e;
            --simple-colors-fixed-theme-accent-12: #200e09;
          }

          :host([dark][accent-color="brown"]) {
            --simple-colors-default-theme-accent-1: #200e09;
            --simple-colors-default-theme-accent-2: #2c140e;
            --simple-colors-default-theme-accent-3: #3b1e15;
            --simple-colors-default-theme-accent-4: #5b3328;
            --simple-colors-default-theme-accent-5: #724539;
            --simple-colors-default-theme-accent-6: #85574a;
            --simple-colors-default-theme-accent-7: #a47060;
            --simple-colors-default-theme-accent-8: #ac7868;
            --simple-colors-default-theme-accent-9: #b68373;
            --simple-colors-default-theme-accent-10: #c59485;
            --simple-colors-default-theme-accent-11: #e5b8aa;
            --simple-colors-default-theme-accent-12: #f0e2de;
          }

          :host([accent-color="blue-grey"]) {
            --simple-colors-default-theme-accent-1: #e7eff1;
            --simple-colors-default-theme-accent-2: #b1c5ce;
            --simple-colors-default-theme-accent-3: #9badb6;
            --simple-colors-default-theme-accent-4: #8d9fa7;
            --simple-colors-default-theme-accent-5: #7a8f98;
            --simple-colors-default-theme-accent-6: #718892;
            --simple-colors-default-theme-accent-7: #56707c;
            --simple-colors-default-theme-accent-8: #40535b;
            --simple-colors-default-theme-accent-9: #2f3e45;
            --simple-colors-default-theme-accent-10: #1e282c;
            --simple-colors-default-theme-accent-11: #182023;
            --simple-colors-default-theme-accent-12: #0f1518;
            --simple-colors-fixed-theme-accent-1: #e7eff1;
            --simple-colors-fixed-theme-accent-2: #b1c5ce;
            --simple-colors-fixed-theme-accent-3: #9badb6;
            --simple-colors-fixed-theme-accent-4: #8d9fa7;
            --simple-colors-fixed-theme-accent-5: #7a8f98;
            --simple-colors-fixed-theme-accent-6: #718892;
            --simple-colors-fixed-theme-accent-7: #56707c;
            --simple-colors-fixed-theme-accent-8: #40535b;
            --simple-colors-fixed-theme-accent-9: #2f3e45;
            --simple-colors-fixed-theme-accent-10: #1e282c;
            --simple-colors-fixed-theme-accent-11: #182023;
            --simple-colors-fixed-theme-accent-12: #0f1518;
          }

          :host([dark][accent-color="blue-grey"]) {
            --simple-colors-default-theme-accent-1: #0f1518;
            --simple-colors-default-theme-accent-2: #182023;
            --simple-colors-default-theme-accent-3: #1e282c;
            --simple-colors-default-theme-accent-4: #2f3e45;
            --simple-colors-default-theme-accent-5: #40535b;
            --simple-colors-default-theme-accent-6: #56707c;
            --simple-colors-default-theme-accent-7: #718892;
            --simple-colors-default-theme-accent-8: #7a8f98;
            --simple-colors-default-theme-accent-9: #8d9fa7;
            --simple-colors-default-theme-accent-10: #9badb6;
            --simple-colors-default-theme-accent-11: #b1c5ce;
            --simple-colors-default-theme-accent-12: #e7eff1;
          }

          /* from a11y-utils */
          .sr-only {
            position: absolute;
            left: -10000px;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
          }
        `,
      ];
    }

    // render function
    render() {
      return b` <slot></slot>`;
    }

    // properties available to the custom element for data binding
    static get properties() {
      return {
        ...super.properties,

        /**
         * a selected accent-"color": grey, red, pink, purple, etc.
         */
        accentColor: {
          attribute: "accent-color",
          type: String,
          reflect: true,
        },
        /**
         * make the default theme dark?
         */
        dark: {
          name: "dark",
          type: Boolean,
          reflect: true,
        },
      };
    }

    constructor() {
      super();
      this.accentColor = "grey";
      this.dark = false;
      this.colors = SimpleColorsSharedStylesGlobal.colors;
    }

    static get tag() {
      return "simple-colors";
    }

    /**
     * gets the current shade
     *
     * @param {string} the shade
     * @param {number} the inverted shade
     */
    invertShade(shade) {
      return SimpleColorsSharedStylesGlobal.invertShade(shade);
    }

    /**
     * gets the color information of a given CSS variable or class
     *
     * @param {string} the CSS variable (eg. `--simple-colors-fixed-theme-red-3`) or a class (eg. `.simple-colors-fixed-theme-red-3-text`)
     * @param {object} an object that includes the theme, color, and shade information
     */
    getColorInfo(colorName) {
      return SimpleColorsSharedStylesGlobal.getColorInfo(colorName);
    }

    /**
     * returns a variable based on color name, shade, and fixed theme
     *
     * @param {string} the color name
     * @param {number} the color shade
     * @param {boolean} the color shade
     * @returns {string} the CSS Variable
     */
    makeVariable(color = "grey", shade = 1, theme = "default") {
      return SimpleColorsSharedStylesGlobal.makeVariable(
        (color = "grey"),
        (shade = 1),
        (theme = "default"),
      );
    }

    /**
     * for large or small text given a color and its shade,
     * lists all the colors and shades that would be
     * WCAG 2.0 AA-compliant for contrast
     *
     * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
     * @param {string} color name, e.g. "deep-purple"
     * @param {string} color shade, e.g. 3
     * @param {object} all of the WCAG 2.0 AA-compliant colors and shades
     */
    getContrastingColors(colorName, colorShade, isLarge) {
      return SimpleColorsSharedStylesGlobal.getContrastingColors(
        colorName,
        colorShade,
        isLarge,
      );
    }

    /**
     * for large or small text given a color and its shade,
     * lists all the shades of another color that would be
     * WCAG 2.0 AA-compliant for contrast
     *
     * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
     * @param {string} color name, e.g. "deep-purple"
     * @param {string} color shade, e.g. 3
     * @param {string} contrasting color name, e.g. "grey"
     * @param {array} all of the WCAG 2.0 AA-compliant shades of the contrasting color
     */
    getContrastingShades(isLarge, colorName, colorShade, contrastName) {
      return SimpleColorsSharedStylesGlobal.getContrastingShades(
        isLarge,
        colorName,
        colorShade,
        contrastName,
      );
    }

    /**
     * determines if two shades are WCAG 2.0 AA-compliant for contrast
     *
     * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
     * @param {string} color name, e.g. "deep-purple"
     * @param {string} color shade, e.g. 3
     * @param {string} contrasting color name, e.g. "grey"
     * @param {string} contrast shade, e.g. 12
     * @param {boolean} whether or not the contrasting shade is WCAG 2.0 AA-compliant
     */
    isContrastCompliant(
      isLarge,
      colorName,
      colorShade,
      contrastName,
      contrastShade,
    ) {
      return SimpleColorsSharedStylesGlobal.isContrastCompliant(
        isLarge,
        colorName,
        colorShade,
        contrastName,
        contrastShade,
      );
    }
  };
};
/**
  * `simple-colors`
  * a shared set of styles for `@haxtheweb`
 ### Styling
 See demo of "all of the colors" (`demo/colors.html`) for styling.
  *
 
  * @demo ./demo/index.html demo
  * @demo ./demo/how.html getting started
  * @demo ./demo/colors.html all of the colors
  * @demo ./demo/picker.html simple-colors-picker
  * @demo ./demo/extending.html extending simple-colors
  * @element simple-colors
  */
class SimpleColors extends SimpleColorsSuper(i) {}
globalThis.customElements.define(SimpleColors.tag, SimpleColors);

/**
 * Singleton to manage iconsets
 * @demo demo/index.html
 */
// polyfill for replaceAll, I hate you Safari / really old stuff
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (find, replace) {
    return this.split(find).join(replace);
  };
}
/**
 *
 * @class SimpleIconset
 * @extends HTMLElement
 */
class SimpleIconset extends i {
  static get tag() {
    return "simple-iconset";
  }
  constructor() {
    super();
    this.iconsets = {};
    this.iconlist = [];
    this.manifest = {};
    this.needsHydrated = [];
  }
  /**
   * Manifest.js files can register themselves to create an icon list.
   * These files export an array of iconsets
   * as [{name: iconsetName, icons: [ iconName,iconName2 ]}]
   *
   * @param {array} manifest array of iconsets
   * @memberof SimpleIconset
   */
  registerManifest(manifest) {
    (manifest || []).forEach((iconset) => {
      if (!this.manifest[iconset.name]) {
        this.manifest[iconset.name] = iconset.icons || [];
        this.manifest[iconset.name].forEach((icon) => {
          this.iconlist.push(`${iconset.name}:${icon}`);
        });
      }
    });
  }
  /**
   * Iconsets are to register a namespace in either manner:
   * object notation: key name of the icon with a specific path to the file
   * {
   *   icon: iconLocation,
   *   icon2: iconLocation2
   * }
   * string notation: assumes icon name can be found at ${iconLocationBasePath}${iconname}.svg
   * iconLocationBasePath
   */
  registerIconset(name, icons = {}) {
    if (typeof icons === "object") {
      this.iconsets[name] = { ...icons };
    } else if (typeof icons === "string") {
      this.iconsets[name] = icons;
    }
    // try processing anything that might have missed previously
    if (this.needsHydrated.length > 0) {
      let list = [];
      this.needsHydrated.forEach((item, index) => {
        // set the src from interns of the icon, returns if it matched
        // which will then push it into the list to be removed from processing
        if (
          typeof item.setSrcByIcon === "function" &&
          item.setSrcByIcon(this)
        ) {
          list.push(index);
        }
      });
      // process in reverse order to avoid key splicing issues
      list.reverse().forEach((val) => {
        this.needsHydrated.splice(val, 1);
      });
    }
  }
  /**
   * return the icon location on splitting the string on : for position in the object
   * if the icon doesn't exist, it sets a value for future updates in the event
   * that the library for the icon registers AFTER the request to visualize is made
   */
  getIcon(val, context) {
    let ary = val.replaceAll("/", "-").split(":");
    // legacy API used to fill in icons: for lazy devs so let's mirror
    if (ary.length === 1) {
      ary = ["icons", val];
    }
    if (ary.length == 2 && this.iconsets[ary[0]]) {
      if (
        typeof this.iconsets[ary[0]] !== "string" &&
        this.iconsets[ary[0]][ary[1]] &&
        typeof this.iconsets[ary[0]][ary[1]] !== "function"
      ) {
        return this.iconsets[ary[0]][ary[1]];
      } else if (ary[1]) {
        return `${this.iconsets[ary[0]]}${ary[1]}.svg`;
      }
    }
    // if we get here we just missed on the icon hydrating which means
    // either it's an invalid icon OR the library to register the icons
    // location will import AFTER (possible microtiming early on)
    // also weird looking by context is either the element asking about
    // itself OR the the iconset state manager checking for hydration
    if (context !== this && context) {
      this.needsHydrated.push(context);
    }
    return null;
  }
}

globalThis.customElements.define(SimpleIconset.tag, SimpleIconset);

globalThis.SimpleIconset = globalThis.SimpleIconset || {};
/**
 * Checks to see if there is an instance available, and if not appends one
 */
globalThis.SimpleIconset.requestAvailability = () => {
  if (
    globalThis.SimpleIconset.instance == null &&
    globalThis.document &&
    globalThis.document.body
  ) {
    globalThis.SimpleIconset.instance =
      globalThis.document.createElement("simple-iconset");
    globalThis.document.body.appendChild(globalThis.SimpleIconset.instance);
  }
  return globalThis.SimpleIconset.instance;
};
// self request so that when this file is referenced it exists in the dom
const SimpleIconsetStore =
  typeof global !== "undefined"
    ? new SimpleIconset()
    : globalThis.SimpleIconset.requestAvailability();

[
  "courseicons",
  "hax",
  "lrn",
  "mdextra",
  "mdi-social",
  "editable-table",
  "drawing",
  "paper-audio-icons",
].forEach((i) => {
  SimpleIconsetStore.registerIconset(
    i,
    `${new URL("./simple-hax-iconset.js", import.meta.url).href}/../svgs/${i}/`,
  );
});

/**
 * @const SimpleIconIconsetsManifest
 */
const SimpleIconIconsetsManifest = [
  {
    name: "av",
    icons: [
      "add-to-queue",
      "airplay",
      "album",
      "art-track",
      "audio-descriptive-track",
      "av-timer",
      "branding-watermark",
      "call-to-action",
      "closed-caption",
      "equalizer",
      "explicit",
      "fast-forward",
      "fast-rewind",
      "featured-play-list",
      "featured-video",
      "fiber-dvr",
      "fiber-manual-record",
      "fiber-new",
      "fiber-pin",
      "fiber-smart-record",
      "forward-10",
      "forward-30",
      "forward-5",
      "games",
      "hd",
      "hearing",
      "high-quality",
      "library-add",
      "library-books",
      "library-music",
      "loop",
      "mic-none",
      "mic-off",
      "mic",
      "movie",
      "music-video",
      "new-releases",
      "not-interested",
      "note",
      "pause-circle-filled",
      "pause-circle-outline",
      "pause",
      "play-arrow",
      "play-circle-filled",
      "play-circle-outline",
      "playlist-add-check",
      "playlist-add",
      "playlist-play",
      "queue-music",
      "queue-play-next",
      "queue",
      "radio",
      "recent-actors",
      "remove-from-queue",
      "repeat-one",
      "repeat",
      "replay-10",
      "replay-30",
      "replay-5",
      "replay",
      "shuffle",
      "skip-next",
      "skip-previous",
      "slow-motion-video",
      "snooze",
      "sort-by-alpha",
      "stop",
      "subscriptions",
      "subtitles",
      "surround-sound",
      "video-call",
      "video-label",
      "video-library",
      "videocam-off",
      "videocam",
      "volume-down",
      "volume-mute",
      "volume-off",
      "volume-up",
      "web-asset",
      "web",
    ],
  },
  {
    name: "communication",
    icons: [
      "business",
      "call-end",
      "call-made",
      "call-merge",
      "call-missed-outgoing",
      "call-missed",
      "call-received",
      "call-split",
      "call",
      "chat-bubble-outline",
      "chat-bubble",
      "chat",
      "clear-all",
      "comment",
      "contact-mail",
      "contact-phone",
      "contacts",
      "dialer-sip",
      "dialpad",
      "email",
      "forum",
      "import-contacts",
      "import-export",
      "invert-colors-off",
      "live-help",
      "location-off",
      "location-on",
      "mail-outline",
      "message",
      "no-sim",
      "phone",
      "phonelink-erase",
      "phonelink-lock",
      "phonelink-ring",
      "phonelink-setup",
      "portable-wifi-off",
      "present-to-all",
      "ring-volume",
      "rss-feed",
      "screen-share",
      "speaker-phone",
      "stay-current-landscape",
      "stay-current-portrait",
      "stay-primary-landscape",
      "stay-primary-portrait",
      "stop-screen-share",
      "swap-calls",
      "textsms",
      "voicemail",
      "vpn-key",
    ],
  },
  {
    name: "device",
    icons: [
      "access-alarm",
      "access-alarms",
      "access-time",
      "add-alarm",
      "airplanemode-active",
      "airplanemode-inactive",
      "battery-20",
      "battery-30",
      "battery-50",
      "battery-60",
      "battery-80",
      "battery-90",
      "battery-alert",
      "battery-charging-20",
      "battery-charging-30",
      "battery-charging-50",
      "battery-charging-60",
      "battery-charging-80",
      "battery-charging-90",
      "battery-charging-full",
      "battery-full",
      "battery-std",
      "battery-unknown",
      "bluetooth-connected",
      "bluetooth-disabled",
      "bluetooth-searching",
      "bluetooth",
      "brightness-auto",
      "brightness-high",
      "brightness-low",
      "brightness-medium",
      "data-usage",
      "developer-mode",
      "devices",
      "dvr",
      "gps-fixed",
      "gps-not-fixed",
      "gps-off",
      "graphic-eq",
      "location-disabled",
      "location-searching",
      "network-cell",
      "network-wifi",
      "nfc",
      "screen-lock-landscape",
      "screen-lock-portrait",
      "screen-lock-rotation",
      "screen-rotation",
      "sd-storage",
      "settings-system-daydream",
      "signal-cellular-0-bar",
      "signal-cellular-1-bar",
      "signal-cellular-2-bar",
      "signal-cellular-3-bar",
      "signal-cellular-4-bar",
      "signal-cellular-connected-no-internet-0-bar",
      "signal-cellular-connected-no-internet-1-bar",
      "signal-cellular-connected-no-internet-2-bar",
      "signal-cellular-connected-no-internet-3-bar",
      "signal-cellular-connected-no-internet-4-bar",
      "signal-cellular-no-sim",
      "signal-cellular-null",
      "signal-cellular-off",
      "signal-wifi-0-bar",
      "signal-wifi-1-bar-lock",
      "signal-wifi-1-bar",
      "signal-wifi-2-bar-lock",
      "signal-wifi-2-bar",
      "signal-wifi-3-bar-lock",
      "signal-wifi-3-bar",
      "signal-wifi-4-bar-lock",
      "signal-wifi-4-bar",
      "signal-wifi-off",
      "storage",
      "usb",
      "wallpaper",
      "widgets",
      "wifi-lock",
      "wifi-tethering",
    ],
  },
  {
    name: "editor",
    icons: [
      "attach-file",
      "attach-money",
      "border-all",
      "border-bottom",
      "border-clear",
      "border-color",
      "border-horizontal",
      "border-inner",
      "border-left",
      "border-outer",
      "border-right",
      "border-style",
      "border-top",
      "border-vertical",
      "bubble-chart",
      "drag-handle",
      "format-align-center",
      "format-align-justify",
      "format-align-left",
      "format-align-right",
      "format-bold",
      "format-clear",
      "format-color-fill",
      "format-color-reset",
      "format-color-text",
      "format-indent-decrease",
      "format-indent-increase",
      "format-italic",
      "format-line-spacing",
      "format-list-bulleted",
      "format-list-numbered",
      "format-page-break",
      "format-paint",
      "format-quote",
      "format-shapes",
      "format-size",
      "format-strikethrough",
      "format-textdirection-l-to-r",
      "format-textdirection-r-to-l",
      "format-underlined",
      "functions",
      "highlight",
      "insert-chart",
      "insert-comment",
      "insert-drive-file",
      "insert-emoticon",
      "insert-invitation",
      "insert-link",
      "insert-photo",
      "linear-scale",
      "merge-type",
      "mode-comment",
      "mode-edit",
      "monetization-on",
      "money-off",
      "multiline-chart",
      "pie-chart-outlined",
      "pie-chart",
      "publish",
      "short-text",
      "show-chart",
      "space-bar",
      "strikethrough-s",
      "text-fields",
      "title",
      "vertical-align-bottom",
      "vertical-align-center",
      "vertical-align-top",
      "wrap-text",
    ],
  },
  {
    name: "elmsln-custom",
    icons: [],
  },
  {
    name: "hardware",
    icons: [
      "cast-connected",
      "cast",
      "computer",
      "desktop-mac",
      "desktop-windows",
      "developer-board",
      "device-hub",
      "devices-other",
      "dock",
      "gamepad",
      "headset-mic",
      "headset",
      "keyboard-arrow-down",
      "keyboard-arrow-left",
      "keyboard-arrow-right",
      "keyboard-arrow-up",
      "keyboard-backspace",
      "keyboard-capslock",
      "keyboard-hide",
      "keyboard-return",
      "keyboard-tab",
      "keyboard-voice",
      "keyboard",
      "laptop-chromebook",
      "laptop-mac",
      "laptop-windows",
      "laptop",
      "memory",
      "mouse",
      "phone-android",
      "phone-iphone",
      "phonelink-off",
      "phonelink",
      "power-input",
      "router",
      "scanner",
      "security",
      "sim-card",
      "smartphone",
      "speaker-group",
      "speaker",
      "tablet-android",
      "tablet-mac",
      "tablet",
      "toys",
      "tv",
      "videogame-asset",
      "watch",
    ],
  },
  {
    name: "icons",
    icons: [
      "3d-rotation",
      "accessibility",
      "accessible",
      "account-balance-wallet",
      "account-balance",
      "account-box",
      "account-circle",
      "add-alert",
      "add-box",
      "add-circle-outline",
      "add-circle",
      "add-shopping-cart",
      "add",
      "alarm-add",
      "alarm-off",
      "alarm-on",
      "alarm",
      "all-out",
      "android",
      "announcement",
      "apps",
      "archive",
      "arrow-back",
      "arrow-downward",
      "arrow-drop-down-circle",
      "arrow-drop-down",
      "arrow-drop-up",
      "arrow-forward",
      "arrow-upward",
      "aspect-ratio",
      "assessment",
      "assignment-ind",
      "assignment-late",
      "assignment-return",
      "assignment-returned",
      "assignment-turned-in",
      "assignment",
      "attachment",
      "autorenew",
      "backspace",
      "backup",
      "block",
      "book",
      "bookmark-border",
      "bookmark",
      "bug-report",
      "build",
      "cached",
      "camera-enhance",
      "cancel",
      "card-giftcard",
      "card-membership",
      "card-travel",
      "change-history",
      "check-box-outline-blank",
      "check-box",
      "check-circle",
      "check",
      "chevron-left",
      "chevron-right",
      "chrome-reader-mode",
      "class",
      "clear",
      "close",
      "cloud-circle",
      "cloud-done",
      "cloud-download",
      "cloud-off",
      "cloud-queue",
      "cloud-upload",
      "cloud",
      "code",
      "compare-arrows",
      "content-copy",
      "content-cut",
      "content-paste",
      "copyright",
      "create-new-folder",
      "create",
      "credit-card",
      "dashboard",
      "date-range",
      "delete-forever",
      "delete-sweep",
      "delete",
      "description",
      "dns",
      "done-all",
      "done",
      "donut-large",
      "donut-small",
      "drafts",
      "eject",
      "error-outline",
      "error",
      "euro-symbol",
      "event-seat",
      "event",
      "exit-to-app",
      "expand-less",
      "expand-more",
      "explore",
      "extension",
      "face",
      "favorite-border",
      "favorite",
      "feedback",
      "file-download",
      "file-upload",
      "filter-list",
      "find-in-page",
      "find-replace",
      "fingerprint",
      "first-page",
      "flag",
      "flight-land",
      "flight-takeoff",
      "flip-to-back",
      "flip-to-front",
      "folder-open",
      "folder-shared",
      "folder",
      "font-download",
      "forward",
      "fullscreen-exit",
      "fullscreen",
      "g-translate",
      "gavel",
      "gesture",
      "get-app",
      "gif",
      "grade",
      "group-work",
      "help-outline",
      "help",
      "highlight-off",
      "history",
      "home",
      "hourglass-empty",
      "hourglass-full",
      "http",
      "https",
      "important-devices",
      "inbox",
      "indeterminate-check-box",
      "info-outline",
      "info",
      "input",
      "invert-colors",
      "label-outline",
      "label",
      "language",
      "last-page",
      "launch",
      "lightbulb-outline",
      "line-style",
      "line-weight",
      "link",
      "list",
      "lock-open",
      "lock-outline",
      "lock",
      "low-priority",
      "loyalty",
      "mail",
      "markunread-mailbox",
      "markunread",
      "menu",
      "more-horiz",
      "more-vert",
      "motorcycle",
      "move-to-inbox",
      "next-week",
      "note-add",
      "offline-pin",
      "opacity",
      "open-in-browser",
      "open-in-new",
      "open-with",
      "pageview",
      "pan-tool",
      "payment",
      "perm-camera-mic",
      "perm-contact-calendar",
      "perm-data-setting",
      "perm-device-information",
      "perm-identity",
      "perm-media",
      "perm-phone-msg",
      "perm-scan-wifi",
      "pets",
      "picture-in-picture-alt",
      "picture-in-picture",
      "play-for-work",
      "polymer",
      "power-settings-new",
      "pregnant-woman",
      "print",
      "query-builder",
      "question-answer",
      "radio-button-checked",
      "radio-button-unchecked",
      "receipt",
      "record-voice-over",
      "redeem",
      "redo",
      "refresh",
      "remove-circle-outline",
      "remove-circle",
      "remove-shopping-cart",
      "remove",
      "reorder",
      "reply-all",
      "reply",
      "report-problem",
      "report",
      "restore-page",
      "restore",
      "room",
      "rounded-corner",
      "rowing",
      "save",
      "schedule",
      "search",
      "select-all",
      "send",
      "settings-applications",
      "settings-backup-restore",
      "settings-bluetooth",
      "settings-brightness",
      "settings-cell",
      "settings-ethernet",
      "settings-input-antenna",
      "settings-input-component",
      "settings-input-composite",
      "settings-input-hdmi",
      "settings-input-svideo",
      "settings-overscan",
      "settings-phone",
      "settings-power",
      "settings-remote",
      "settings-voice",
      "settings",
      "shop-two",
      "shop",
      "shopping-basket",
      "shopping-cart",
      "sort",
      "speaker-notes-off",
      "speaker-notes",
      "spellcheck",
      "star-border",
      "star-half",
      "star",
      "stars",
      "store",
      "subdirectory-arrow-left",
      "subdirectory-arrow-right",
      "subject",
      "supervisor-account",
      "swap-horiz",
      "swap-vert",
      "swap-vertical-circle",
      "system-update-alt",
      "tab-unselected",
      "tab",
      "text-format",
      "theaters",
      "thumb-down",
      "thumb-up",
      "thumbs-up-down",
      "timeline",
      "toc",
      "today",
      "toll",
      "touch-app",
      "track-changes",
      "translate",
      "trending-down",
      "trending-flat",
      "trending-up",
      "turned-in-not",
      "turned-in",
      "unarchive",
      "undo",
      "unfold-less",
      "unfold-more",
      "update",
      "verified-user",
      "view-agenda",
      "view-array",
      "view-carousel",
      "view-column",
      "view-day",
      "view-headline",
      "view-list",
      "view-module",
      "view-quilt",
      "view-stream",
      "view-week",
      "visibility-off",
      "visibility",
      "warning",
      "watch-later",
      "weekend",
      "work",
      "youtube-searched-for",
      "zoom-in",
      "zoom-out",
    ],
  },
  {
    name: "image",
    icons: [
      "add-a-photo",
      "add-to-photos",
      "adjust",
      "assistant-photo",
      "assistant",
      "audiotrack",
      "blur-circular",
      "blur-linear",
      "blur-off",
      "blur-on",
      "brightness-1",
      "brightness-2",
      "brightness-3",
      "brightness-4",
      "brightness-5",
      "brightness-6",
      "brightness-7",
      "broken-image",
      "brush",
      "burst-mode",
      "camera-alt",
      "camera-front",
      "camera-rear",
      "camera-roll",
      "camera",
      "center-focus-strong",
      "center-focus-weak",
      "collections-bookmark",
      "collections",
      "color-lens",
      "colorize",
      "compare",
      "control-point-duplicate",
      "control-point",
      "crop-16-9",
      "crop-3-2",
      "crop-5-4",
      "crop-7-5",
      "crop-din",
      "crop-free",
      "crop-landscape",
      "crop-original",
      "crop-portrait",
      "crop-rotate",
      "crop-square",
      "crop",
      "dehaze",
      "details",
      "edit",
      "exposure-neg-1",
      "exposure-neg-2",
      "exposure-plus-1",
      "exposure-plus-2",
      "exposure-zero",
      "exposure",
      "filter-1",
      "filter-2",
      "filter-3",
      "filter-4",
      "filter-5",
      "filter-6",
      "filter-7",
      "filter-8",
      "filter-9-plus",
      "filter-9",
      "filter-b-and-w",
      "filter-center-focus",
      "filter-drama",
      "filter-frames",
      "filter-hdr",
      "filter-none",
      "filter-tilt-shift",
      "filter-vintage",
      "filter",
      "flare",
      "flash-auto",
      "flash-off",
      "flash-on",
      "flip",
      "gradient",
      "grain",
      "grid-off",
      "grid-on",
      "hdr-off",
      "hdr-on",
      "hdr-strong",
      "hdr-weak",
      "healing",
      "image-aspect-ratio",
      "image",
      "iso",
      "landscape",
      "leak-add",
      "leak-remove",
      "lens",
      "linked-camera",
      "looks-3",
      "looks-4",
      "looks-5",
      "looks-6",
      "looks-one",
      "looks-two",
      "looks",
      "loupe",
      "monochrome-photos",
      "movie-creation",
      "movie-filter",
      "music-note",
      "nature-people",
      "nature",
      "navigate-before",
      "navigate-next",
      "palette",
      "panorama-fish-eye",
      "panorama-horizontal",
      "panorama-vertical",
      "panorama-wide-angle",
      "panorama",
      "photo-album",
      "photo-camera",
      "photo-filter",
      "photo-library",
      "photo-size-select-actual",
      "photo-size-select-large",
      "photo-size-select-small",
      "photo",
      "picture-as-pdf",
      "portrait",
      "remove-red-eye",
      "rotate-90-degrees-ccw",
      "rotate-left",
      "rotate-right",
      "slideshow",
      "straighten",
      "style",
      "switch-camera",
      "switch-video",
      "tag-faces",
      "texture",
      "timelapse",
      "timer-10",
      "timer-3",
      "timer-off",
      "timer",
      "tonality",
      "transform",
      "tune",
      "view-comfy",
      "view-compact",
      "vignette",
      "wb-auto",
      "wb-cloudy",
      "wb-incandescent",
      "wb-iridescent",
      "wb-sunny",
    ],
  },
  {
    name: "loading",
    icons: ["bars"],
  },
  {
    name: "maps",
    icons: [
      "add-location",
      "beenhere",
      "directions-bike",
      "directions-boat",
      "directions-bus",
      "directions-car",
      "directions-railway",
      "directions-run",
      "directions-subway",
      "directions-transit",
      "directions-walk",
      "directions",
      "edit-location",
      "ev-station",
      "flight",
      "hotel",
      "layers-clear",
      "layers",
      "local-activity",
      "local-airport",
      "local-atm",
      "local-bar",
      "local-cafe",
      "local-car-wash",
      "local-convenience-store",
      "local-dining",
      "local-drink",
      "local-florist",
      "local-gas-station",
      "local-grocery-store",
      "local-hospital",
      "local-hotel",
      "local-laundry-service",
      "local-library",
      "local-mall",
      "local-movies",
      "local-offer",
      "local-parking",
      "local-pharmacy",
      "local-phone",
      "local-pizza",
      "local-play",
      "local-post-office",
      "local-printshop",
      "local-see",
      "local-shipping",
      "local-taxi",
      "map",
      "my-location",
      "navigation",
      "near-me",
      "person-pin-circle",
      "person-pin",
      "pin-drop",
      "place",
      "rate-review",
      "restaurant-menu",
      "restaurant",
      "satellite",
      "store-mall-directory",
      "streetview",
      "subway",
      "terrain",
      "traffic",
      "train",
      "tram",
      "transfer-within-a-station",
      "zoom-out-map",
    ],
  },
  {
    name: "notification",
    icons: [
      "adb",
      "airline-seat-flat-angled",
      "airline-seat-flat",
      "airline-seat-individual-suite",
      "airline-seat-legroom-extra",
      "airline-seat-legroom-normal",
      "airline-seat-legroom-reduced",
      "airline-seat-recline-extra",
      "airline-seat-recline-normal",
      "bluetooth-audio",
      "confirmation-number",
      "disc-full",
      "do-not-disturb-alt",
      "do-not-disturb-off",
      "do-not-disturb-on",
      "do-not-disturb",
      "drive-eta",
      "enhanced-encryption",
      "event-available",
      "event-busy",
      "event-note",
      "folder-special",
      "live-tv",
      "mms",
      "more",
      "network-check",
      "network-locked",
      "no-encryption",
      "ondemand-video",
      "personal-video",
      "phone-bluetooth-speaker",
      "phone-forwarded",
      "phone-in-talk",
      "phone-locked",
      "phone-missed",
      "phone-paused",
      "power",
      "priority-high",
      "rv-hookup",
      "sd-card",
      "sim-card-alert",
      "sms-failed",
      "sms",
      "sync-disabled",
      "sync-problem",
      "sync",
      "system-update",
      "tap-and-play",
      "time-to-leave",
      "vibration",
      "voice-chat",
      "vpn-lock",
      "wc",
      "wifi",
    ],
  },
  {
    name: "places",
    icons: [
      "ac-unit",
      "airport-shuttle",
      "all-inclusive",
      "beach-access",
      "business-center",
      "casino",
      "child-care",
      "child-friendly",
      "fitness-center",
      "free-breakfast",
      "golf-course",
      "hot-tub",
      "kitchen",
      "pool",
      "room-service",
      "rv-hookup",
      "smoke-free",
      "smoking-rooms",
      "spa",
    ],
  },
  {
    name: "social",
    icons: [
      "cake",
      "domain",
      "group-add",
      "group",
      "location-city",
      "mood-bad",
      "mood",
      "notifications-active",
      "notifications-none",
      "notifications-off",
      "notifications-paused",
      "notifications",
      "pages",
      "party-mode",
      "people-outline",
      "people",
      "person-add",
      "person-outline",
      "person",
      "plus-one",
      "poll",
      "public",
      "school",
      "sentiment-dissatisfied",
      "sentiment-neutral",
      "sentiment-satisfied",
      "sentiment-very-dissatisfied",
      "sentiment-very-satisfied",
      "share",
      "whatshot",
    ],
  },
];
SimpleIconsetStore.registerManifest(SimpleIconIconsetsManifest);

const here = new URL("./simple-icons.js", import.meta.url).href + "/../";
[
  "av",
  "communication",
  "device",
  "editor",
  "elmsln-custom",
  "hardware",
  "icons",
  "image",
  "maps",
  "notification",
  "places",
  "social",
  "loading",
].forEach((i) => {
  SimpleIconsetStore.registerIconset(i, `${here}svgs/${i}/`);
});
// flags too but they come from elsewhere
// ISO 3166-1-alpha-2 Flags
// via https://flagicons.lipis.dev/
SimpleIconsetStore.registerIconset(
  "flags",
  `${here}../../../node_modules/flag-icons/flags/4x3/`,
);
// square flag less common but needed ratio
SimpleIconsetStore.registerIconset(
  "flags1x1",
  `${here}../../../node_modules/flag-icons/flags/1x1/`,
);

/**
 * Instructional design meshing with styles. What we use to represent concepts
 */
const learningComponentNouns = {
  content: "Content",
  assessment: "Assessment",
  quiz: "Quiz",
  submission: "Submission",
  lesson: "Lesson",
  module: "Module",
  task: "Task",
  activity: "Activity",
  project: "Project",
  practice: "Practice",
  unit: "Unit",
  objectives: "Learning Objectives",
};

const learningComponentVerbs = {
  connection: "Connection",
  knowledge: "Did You Know?",
  strategy: "Learning Strategy",
  discuss: "Discuss",
  listen: "Listen",
  make: "Make",
  observe: "Observe",
  present: "Present",
  read: "Read",
  reflect: "Reflect",
  research: "Research",
  watch: "Watch",
  write: "Write",
};

const learningComponentTypes = {
  ...learningComponentVerbs,
  ...learningComponentNouns,
};

const learningComponentColors = {
  content: "blue-grey",
  assessment: "red",
  quiz: "blue",
  submission: "deep-purple",
  lesson: "purple",
  module: "red",
  task: "blue-grey",
  activity: "orange",
  project: "deep-orange",
  practice: "brown",
  unit: "light-green",
  objectives: "indigo",
  connection: "green",
  knowledge: "cyan",
  strategy: "teal",
  discuss: "blue",
  listen: "purple",
  make: "orange",
  observe: "yellow",
  present: "light-blue",
  read: "lime",
  reflect: "amber",
  research: "deep-orange",
  watch: "pink",
  write: "deep-purple",
};

function iconFromPageType(type) {
  switch (type) {
    case "content":
      return "lrn:page";
    case "assessment":
      return "lrn:assessment";
    case "quiz":
      return "lrn:quiz";
    case "submission":
      return "icons:move-to-inbox";
    case "lesson":
      return "hax:lesson";
    case "module":
      return "hax:module";
    case "unit":
      return "hax:unit";
    case "task":
      return "hax:task";
    case "activity":
      return "hax:ticket";
    case "project":
      return "hax:bulletin-board";
    case "practice":
      return "hax:shovel";
    case "connection":
      return "courseicons:chem-connection";
    case "knowledge":
      return "courseicons:knowledge";
    case "strategy":
      return "courseicons:strategy";
    case "discuss":
      return "courseicons:strategy";
    case "listen":
      return "courseicons:listen";
    case "make":
      return "courseicons:strategy";
    case "observe":
      return "courseicons:strategy";
    case "present":
      return "courseicons:strategy";
    case "read":
      return "courseicons:strategy";
    case "reflect":
      return "courseicons:strategy";
    case "research":
      return "courseicons:strategy";
    case "watch":
      return "courseicons:strategy";
    case "write":
      return "lrn:write";
  }
  return "courseicons:learning-objectives";
}

const ApplicationAttributeData = {
  primary: {
    0: "Pugh blue",
    1: "Beaver blue",
    2: "Nittany navy",
    3: "Potential midnight",
    4: "Coaly gray",
    5: "Limestone gray",
    6: "Slate gray",
    7: "Creek teal",
    8: "Sky blue",
    9: "Shrine tan",
    10: "Roar golden",
    11: "Original 87 pink",
    12: "Discovery coral",
    13: "Wonder purple",
    14: "Artherton violet",
    15: "Invent orange",
    16: "Keystone yellow",
    17: "Opportunity green",
    18: "Future lime",
    19: "Forest green",
    20: "Landgrant brown",
    21: "Global Neon",
    22: "Error",
    23: "Warning",
    24: "Info",
    25: "Success",
  },
  accent: {
    0: "Sky Max",
    1: "Slate Max",
    2: "Limestone Max",
    3: "Shrine Max",
    4: "Roar Max",
    5: "Creek Max",
    6: "White",
    7: "Error Light",
    8: "Warning Light",
    9: "Info Light",
    10: "Success Light",
    11: "Alert Immediate",
    12: "Alert Urgent",
    13: "Alert All Clear",
    14: "Alert Non Emergency",
  },
  margin: {
    center: "Center",
    xs: "X-Small",
    s: "Small",
    m: "Medium",
    l: "Large",
    xl: "X-Large",
  },
  padding: {
    xs: "X-Small",
    s: "Small",
    m: "Medium",
    l: "Large",
    xl: "X-Large",
  },
  border: {
    xs: "X-Small",
    sm: "Small",
    md: "Medium",
    lg: "Large",
  },
  "border-radius": {
    xs: "Rounded",
    md: "Rounder",
    xl: "Roundest",
  },
  "box-shadow": {
    sm: "Drop shadow",
  },
  "design-treatment": {
    // heading treatments
    vert: "Vertical line",
    "horz-10p": "Horizontal line 10%",
    "horz-25p": "Horizontal line 25%",
    "horz-50p": "Horizontal line 50%",
    "horz-full": "Horizontal line 100%",
    "horz-md": "Horizontal line Medium",
    "horz-lg": "Horizontal line Large",
    bg: "Background color",
    // text treatment
    "dropCap-sm": "Drop Cap - Small",
    "dropCap-md": "Drop Cap - Medium",
    "dropCap-lg": "Drop Cap - Large",
  },
  "font-family": {
    primary: "Roboto",
    secondary: "Roboto Slab",
    navigation: "Roboto Condensed",
  },
  "font-weight": {
    light: "Light",
    medium: "Medium",
    bold: "Bold",
  },
  "font-size": {
    "3xs": "Smaller",
    s: "Large",
    m: "Larger",
    l: "Largest",
  },
  "instructional-action": learningComponentTypes,
};

// ensure we get keys back in the right format
function HAXOptionSampleFactory(type) {
  return Object.keys(ApplicationAttributeData[type]).map((key) => {
    return {
      value: key,
      html: ["primary", "accent"].includes(type)
        ? b`<d-d-d-sample
            @click="${updatePreviewColorVar}"
            type="${type}"
            option="${key}"
          ></d-d-d-sample>`
        : b`<d-d-d-sample type="${type}" option="${key}"></d-d-d-sample>`,
    };
  });
}

function updatePreviewColorVar(e) {
  let target = e.target;
  globalThis.document.body.style.setProperty(
    `--ddd-sample-theme-${target.type}`,
    `var(--ddd-${target.type}-${target.option})`,
  );
}

// attributes need to be driven from a cannonical list
// @note this may need ways of overriding it in the future but at least
// we've consolidated everything into one place for these small design mods
const instructionalStyles = Object.keys(learningComponentColors).map(
  (item) => {
    let color = learningComponentColors[item];
    return i$3`
      [data-instructional-action="${r$2(item)}"] {
        --instructional-action-color: var(
          --simple-colors-default-theme-${r$2(color)}-8,
          ${r$2(color)}
        );
      }

      [data-instructional-action="${r$2(item)}"]::before {
        -webkit-mask-image: url("${r$2(
          SimpleIconsetStore.getIcon(iconFromPageType(item)),
        )}");
      }
    `;
  },
);

/* Logical Gaps:
  Heading colors; sizes; letter spacing; line height
  When to use chevron > with links?
  gradients need to be rotated (sometimes?)
  When to use // after headers?
*/
// fonts used
const DDDFonts = [
  "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap",
  "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700;900&display=swap",
  "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;700;900&display=swap",
];
// CSS variables which is most of the system needed
const DDDVariables = i$3`
  :root,
  :host {
    /* base colors */
    --ddd-theme-default-beaverBlue: #1e407c;
    --ddd-theme-default-beaver70: rgba(30, 64, 124, 0.7);
    --ddd-theme-default-beaver80: rgba(30, 64, 124, 0.8);
    --ddd-theme-default-landgrantBrown: #6a3028;
    --ddd-theme-default-nittanyNavy: #001e44;
    --ddd-theme-default-navy40: rgba(0, 30, 68, 0.4);
    --ddd-theme-default-navy60: rgba(0, 30, 68, 0.6);
    --ddd-theme-default-navy65: rgba(0, 30, 68, 0.65);
    --ddd-theme-default-navy70: rgba(0, 30, 68, 0.7);
    --ddd-theme-default-navy80: rgba(0, 30, 68, 0.8);
    --ddd-theme-default-black: #000000;
    --ddd-theme-default-potentialMidnight: #000321;
    --ddd-theme-default-potential0: rgba(0, 3, 33, 0);
    --ddd-theme-default-potential50: rgba(0, 3, 33, 0.5);
    --ddd-theme-default-potential70: rgba(0, 3, 33, 0.7);
    --ddd-theme-default-potential75: rgba(0, 3, 33, 0.75);
    --ddd-theme-default-pughBlue: #96bee6;
    --ddd-theme-default-coalyGray: #262626;
    --ddd-theme-default-keystoneYellow: #ffd100;
    --ddd-theme-default-slateGray: #314d64;
    --ddd-theme-default-slateLight: #ccdae6;
    --ddd-theme-default-slateMaxLight: #eef3f7;
    --ddd-theme-default-skyBlue: #009cde;
    --ddd-theme-default-skyLight: #ccf0ff;
    --ddd-theme-default-skyMaxLight: #e6f7ff;
    --ddd-theme-default-limestoneGray: #a2aaad;
    --ddd-theme-default-limestoneLight: #e4e5e7;
    --ddd-theme-default-limestoneMaxLight: #f2f2f4;
    --ddd-theme-default-white: #ffffff;
    --ddd-theme-default-shrineLight: #f7f2ee;
    --ddd-theme-default-shrineMaxLight: #fdfbf5;
    --ddd-theme-default-creekTeal: #3ea39e;
    --ddd-theme-default-creekLight: #cfeceb;
    --ddd-theme-default-creekMaxLight: #edf8f7;
    --ddd-theme-default-shrineTan: #b88965;
    --ddd-theme-default-roarGolden: #bf8226;
    --ddd-theme-default-roarLight: #f9eddc;
    --ddd-theme-default-roarMaxlight: #fffaf2;
    --ddd-theme-default-forestGreen: #4a7729;
    --ddd-theme-default-athertonViolet: #ac8dce;
    --ddd-theme-default-original87Pink: #bc204b;
    --ddd-theme-default-discoveryCoral: #f2665e;
    --ddd-theme-default-futureLime: #99cc00;
    --ddd-theme-default-wonderPurple: #491d70;
    --ddd-theme-default-inventOrange: #e98300;
    --ddd-theme-default-opportunityGreen: #008755;
    --ddd-theme-default-globalNeon: #ebff00;
    --ddd-theme-default-accent: #96bee6;
    --ddd-theme-default-white85: rgba(255, 255, 255, 0.85);
    --ddd-theme-default-white65: rgba(255, 255, 255, 0.65);

    /* 
  base colors, cannot be modified by user; SimpleColors hijacks this
  
  Theme level color, components pick up hues of theme color
  
  User can override these colors with their own theme colors
  */

    /* functional colors */
    --ddd-theme-default-link: #005fa9;
    --ddd-theme-default-link80: rgba(0, 95, 169, 0.8);
    --ddd-theme-default-linkLight: #cce9ff;
    --ddd-theme-default-disabled: #f4f4f4;
    --ddd-theme-default-error: #5f2120;
    --ddd-theme-default-errorLight: #fdeded;
    --ddd-theme-default-warning: #663c00;
    --ddd-theme-default-warningLight: #fff4e5;
    --ddd-theme-default-info: #014361;
    --ddd-theme-default-infoLight: #e5f6fd;
    --ddd-theme-default-success: #1e4620;
    --ddd-theme-default-successLight: #edf7ed;
    --ddd-theme-default-alertImmediate: #f8d3de;
    --ddd-theme-default-alertUrgent: #fff6cc;
    --ddd-theme-default-alertAllClear: #f2ffcc;
    --ddd-theme-default-alertNonEmergency: #e6f7ff;
    --ddd-theme-default-background: #eff2f5;

    /* DDDSpecific: Define primary colors in RGB for use in rgba() */
    --ddd-primary-0-rgb: 150, 190, 230, 0.7; /* Pugh Blue */
    --ddd-primary-1-rgb: 30, 64, 124; /* Beaver Blue */
    --ddd-primary-2-rgb: 0, 30, 68; /* Nittany Navy */
    --ddd-primary-3-rgb: 0, 3, 33; /* Potential Midnight */
    --ddd-primary-4-rgb: 38, 38, 38; /* Coaly Gray */
    --ddd-primary-5-rgb: 162, 170, 173; /* Limestone Gray */
    --ddd-primary-6-rgb: 49, 77, 100; /* Slate Gray */
    --ddd-primary-7-rgb: 62, 163, 158; /* Creek Teal */
    --ddd-primary-8-rgb: 0, 156, 222; /* Sky Blue */
    --ddd-primary-9-rgb: 184, 137, 101; /* Shrine Tan */
    --ddd-primary-10-rgb: 191, 130, 38; /* Roar Golden */
    --ddd-primary-11-rgb: 188, 32, 75, 0.7; /* Original 87 Pink */
    --ddd-primary-12-rgb: 242, 102, 94; /* Discovery Coral */
    --ddd-primary-13-rgb: 73, 29, 112; /* Wonder Purple */
    --ddd-primary-14-rgb: 172, 141, 206; /* Atherton Violet */
    --ddd-primary-15-rgb: 233, 131, 0; /* Invent Orange */
    --ddd-primary-16-rgb: 255, 209, 0; /* Keystone Yellow */
    --ddd-primary-17-rgb: 0, 135, 85; /* Opportunity Green */
    --ddd-primary-18-rgb: 153, 204, 0; /* Future Lime */
    --ddd-primary-19-rgb: 74, 119, 41; /* Forest Green */
    --ddd-primary-20-rgb: 106, 48, 40; /* Landgrant Brown */
    --ddd-primary-21-rgb: 235, 255, 0; /* Global Neon */
    --ddd-primary-22-rgb: 95, 33, 32; /* Error */
    --ddd-primary-23-rgb: 102, 60, 0; /* Warning */
    --ddd-primary-24-rgb: 1, 67, 97; /* Info */
    --ddd-primary-25-rgb: 30, 70, 32; /* Success */

    /* primary colors */
    --ddd-primary-0: var(
      --ddd-theme-default-pughBlue
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-1: var(
      --ddd-theme-default-beaverBlue
    ); /* not enough contrast to black */
    --ddd-primary-2: var(
      --ddd-theme-default-nittanyNavy
    ); /* not enough contrast to black */
    --ddd-primary-3: var(
      --ddd-theme-default-potentialMidnight
    ); /* not enough contrast to black */
    --ddd-primary-4: var(
      --ddd-theme-default-coalyGray
    ); /* not enough contrast to black */
    --ddd-primary-5: var(
      --ddd-theme-default-limestoneGray
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-6: var(
      --ddd-theme-default-slateGray
    ); /* not enough contrast to black */
    --ddd-primary-7: var(
      --ddd-theme-default-creekTeal
    ); /* not enough contrast to accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-8: var(
      --ddd-theme-default-skyBlue
    ); /* not enough contrast to accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-9: var(
      --ddd-theme-default-shrineTan
    ); /* not enough contrast to accent-5 3, 1*/
    --ddd-primary-10: var(
      --ddd-theme-default-roarGolden
    ); /* not enough contrast to accent-0, accent-1, accent-2 */
    --ddd-primary-11: var(--ddd-theme-default-original87Pink);
    --ddd-primary-12: var(
      --ddd-theme-default-discoveryCoral
    ); /* not enough contrast to accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-13: var(
      --ddd-theme-default-wonderPurple
    ); /* not enough contrast to black */
    --ddd-primary-14: var(
      --ddd-theme-default-athertonViolet
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-15: var(
      --ddd-theme-default-inventOrange
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-16: var(
      --ddd-theme-default-keystoneYellow
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-17: var(--ddd-theme-default-opportunityGreen);
    --ddd-primary-18: var(
      --ddd-theme-default-futureLime
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-19: var(--ddd-theme-default-forestGreen);
    --ddd-primary-20: var(
      --ddd-theme-default-landgrantBrown
    ); /* not enough contrast to black */
    --ddd-primary-21: var(
      --ddd-theme-default-globalNeon
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-22: var(--ddd-theme-default-error);
    --ddd-primary-23: var(--ddd-theme-default-warning);
    --ddd-primary-24: var(--ddd-theme-default-info);
    --ddd-primary-25: var(--ddd-theme-default-success);

    /* accent colors */

    --ddd-accent-0: var(--ddd-theme-default-skyMaxLight);
    --ddd-accent-1: var(--ddd-theme-default-slateMaxLight);
    --ddd-accent-2: var(--ddd-theme-default-limestoneMaxLight);
    --ddd-accent-3: var(--ddd-theme-default-shrineMaxLight);
    --ddd-accent-4: var(--ddd-theme-default-roarMaxlight);
    --ddd-accent-5: var(--ddd-theme-default-creekMaxLight);
    --ddd-accent-6: var(--ddd-theme-default-white);
    --ddd-accent-7: var(--ddd-theme-default-errorLight);
    --ddd-accent-8: var(--ddd-theme-default-warningLight);
    --ddd-accent-9: var(--ddd-theme-default-infoLight);
    --ddd-accent-10: var(--ddd-theme-default-successLight);
    --ddd-accent-11: var(--ddd-theme-default-alertImmediate);
    --ddd-accent-12: var(--ddd-theme-default-alertUrgent);
    --ddd-accent-13: var(--ddd-theme-default-alertAllClear);
    --ddd-accent-14: var(--ddd-theme-default-alertNonEmergency);

    /*fonts*/
    --ddd-font-primary: "Roboto", "Franklin Gothic Medium", Tahoma, sans-serif;
    --ddd-font-secondary: "Roboto Slab", serif;
    --ddd-font-navigation: "Roboto Condensed", sans-serif; /* navigation font */

    /* font weights - generalized */
    --ddd-font-weight-light: 300;
    --ddd-font-weight-regular: 400; /* default weight for body */
    --ddd-font-weight-medium: 500;
    --ddd-font-weight-bold: 700; /* default weight for headers */
    --ddd-font-weight-black: 900;

    /* font sizes */
    --ddd-font-size-6xs: 12px;
    --ddd-font-size-5xs: 14px;
    --ddd-font-size-4xs: 16px;
    --ddd-font-size-3xs: 18px; /* body default */
    --ddd-font-size-xxs: 20px; /* h6 */
    --ddd-font-size-xs: 22px; /* h5 */
    --ddd-font-size-s: 24px; /* h4 */
    --ddd-font-size-ms: 28px; /* h3 */
    --ddd-font-size-m: 32px; /* h2 */
    --ddd-font-size-ml: 36px;
    --ddd-font-size-l: 40px; /* h1 */
    --ddd-font-size-xl: 48px;
    --ddd-font-size-xxl: 56px;
    --ddd-font-size-3xl: 64px;
    --ddd-font-size-4xl: 72px;

    --ddd-font-size-type1-s: 80px;
    --ddd-font-size-type1-m: 150px;
    --ddd-font-size-type1-l: 200px;

    /* global override font styles for light-dom content */
    --ddd-theme-h1-font-size: var(--ddd-font-size-l);
    --ddd-theme-h2-font-size: var(--ddd-font-size-m);
    --ddd-theme-h3-font-size: var(--ddd-font-size-ms);
    --ddd-theme-h4-font-size: var(--ddd-font-size-s);
    --ddd-theme-h5-font-size: var(--ddd-font-size-xs);
    --ddd-theme-h6-font-size: var(--ddd-font-size-xxs);
    --ddd-theme-body-font-size: var(--ddd-font-size-xxs);

    /* letter spacing */
    --ddd-ls-16-sm: 0.08px;
    --ddd-ls-18-sm: 0.09px;
    --ddd-ls-20-sm: 0.1px;
    --ddd-ls-22-sm: 0.11px;
    --ddd-ls-24-sm: 0.12px;
    --ddd-ls-28-sm: 0.14px;
    --ddd-ls-32-sm: 0.16px;
    --ddd-ls-36-sm: 0.18px;
    --ddd-ls-40-sm: 0.2px;
    --ddd-ls-48-sm: 0.24px;
    --ddd-ls-56-sm: 0.28px;
    --ddd-ls-64-sm: 0.32px;
    --ddd-ls-72-sm: 0.36px;
    --ddd-ls-16-lg: 0.24px;
    --ddd-ls-18-lg: 0.27px;
    --ddd-ls-20-lg: 0.3px;
    --ddd-ls-22-lg: 0.33px;
    --ddd-ls-24-lg: 0.36px;
    --ddd-ls-28-lg: 0.42px;
    --ddd-ls-32-lg: 0.48px;
    --ddd-ls-36-lg: 0.54px;
    --ddd-ls-40-lg: 0.6px;
    --ddd-ls-48-lg: 0.72px;
    --ddd-ls-56-lg: 0.84px;
    --ddd-ls-64-lg: 0.96px;
    --ddd-ls-72-lg: 1.08px;

    /* line height */
    --ddd-lh-120: 120%;
    --ddd-lh-140: 140%;
    --ddd-lh-150: 150%;

    /* spacing */
    --ddd-spacing-0: 0px;
    --ddd-spacing-1: 4px; /*  body default */
    --ddd-spacing-2: 8px;
    --ddd-spacing-3: 12px; /* h6 */
    --ddd-spacing-4: 16px; /* h5 */
    --ddd-spacing-5: 20px; /* h4 */
    --ddd-spacing-6: 24px; /* h3 */
    --ddd-spacing-7: 28px; /* h2 */
    --ddd-spacing-8: 32px; /* h1 */
    --ddd-spacing-9: 36px;
    --ddd-spacing-10: 40px;
    --ddd-spacing-11: 44px;
    --ddd-spacing-12: 48px;
    --ddd-spacing-13: 52px;
    --ddd-spacing-14: 56px;
    --ddd-spacing-15: 60px;
    --ddd-spacing-16: 64px;
    --ddd-spacing-17: 68px;
    --ddd-spacing-18: 72px;
    --ddd-spacing-19: 76px;
    --ddd-spacing-20: 80px;
    --ddd-spacing-21: 84px;
    --ddd-spacing-22: 88px;
    --ddd-spacing-23: 92px;
    --ddd-spacing-24: 96px;
    --ddd-spacing-25: 100px;
    --ddd-spacing-26: 104px;
    --ddd-spacing-27: 108px;
    --ddd-spacing-28: 112px;
    --ddd-spacing-29: 116px;
    --ddd-spacing-30: 120px;

    /* borders */
    --ddd-border-xs: 1px solid var(--ddd-theme-default-limestoneLight);
    --ddd-border-sm: 2px solid var(--ddd-theme-default-limestoneLight);
    --ddd-border-md: 3px solid var(--ddd-theme-default-limestoneLight);
    --ddd-border-lg: 4px solid var(--ddd-theme-default-limestoneLight);

    --ddd-border-size-xs: 1px;
    --ddd-border-size-sm: 2px;
    --ddd-border-size-md: 3px;
    --ddd-border-size-lg: 4px;

    --ddd-theme-header-border-thickness-0: 0px;
    --ddd-theme-header-border-thickness-xs: 1px;
    --ddd-theme-header-border-thickness-sm: 2px;
    --ddd-theme-header-border-thickness-md: 3px;
    --ddd-theme-header-border-thickness-lg: 4px;

    --ddd-theme-header-border-treatment-0: 0px;
    --ddd-theme-header-border-treatment-10p: 10%; /* good */
    --ddd-theme-header-border-treatment-25p: 25%; /* good */
    --ddd-theme-header-border-treatment-50p: 50%; /* good */
    --ddd-theme-header-border-treatment-75p: 75%;
    --ddd-theme-header-border-treatment-full: 100%; /* good */
    --ddd-theme-header-border-treatment-sm: 28px;
    --ddd-theme-header-border-treatment-md: 56px; /* good */
    --ddd-theme-header-border-treatment-lg: 84px; /* good */

    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-lg
    );
    --ddd-theme-header-border-color: var(--ddd-theme-primary);
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-lg
    );

    /* ===========================================
       BOX SHADOWS
       Elevation system for depth and hierarchy
       Usage: box-shadow: var(--ddd-boxShadow-md);
       =========================================== */
    --ddd-boxShadow-0: 0px 0px 0px 0px rgba(0, 0, 0, 0); /* No shadow */
    --ddd-boxShadow-sm: rgba(0, 3, 33, 0.1) 0px 4px 8px 0px; /* Subtle elevation */
    --ddd-boxShadow-md: rgba(0, 3, 33, 0.15) 0px 8px 16px 0px; /* Standard elevation */
    --ddd-boxShadow-lg: rgba(0, 3, 33, 0.2) 0px 12px 24px 0px; /* High elevation */
    --ddd-boxShadow-xl: rgba(0, 3, 33, 0.25) 0px 16px 32px 0px; /* Maximum elevation */

    /* ===========================================
       BREAKPOINTS
       Responsive design breakpoints
       Usage: @media (min-width: var(--ddd-breakpoint-md)) { ... }
       =========================================== */
    --ddd-breakpoint-sm: 360px; /* Small devices (phones) */
    --ddd-breakpoint-md: 768px; /* Medium devices (tablets) */
    --ddd-breakpoint-lg: 1080px; /* Large devices (laptops) */
    --ddd-breakpoint-xl: 1440px; /* Extra large devices (desktops) */

    /* ===========================================
       BORDER RADIUS
       Corner rounding for consistent shape language
       Usage: border-radius: var(--ddd-radius-md);
       =========================================== */
    --ddd-radius-0: 0px; /* Sharp corners */
    --ddd-radius-xs: 4px; /* Subtle rounding */
    --ddd-radius-sm: 8px; /* Small rounding */
    --ddd-radius-md: 12px; /* Medium rounding */
    --ddd-radius-lg: 16px; /* Large rounding */
    --ddd-radius-xl: 20px; /* Extra large rounding */
    --ddd-radius-rounded: 100px; /* Pill shape */
    --ddd-radius-circle: 100%; /* Perfect circle */

    /* ===========================================
       GRADIENTS
       Pre-defined gradient patterns for consistent theming
       Usage: background: var(--ddd-theme-default-gradient-navBar);
       =========================================== */
    --ddd-theme-default-gradient-navBar: linear-gradient(
      90deg,
      rgb(0, 30, 68) 0%,
      rgb(0, 30, 68) 31%,
      rgb(30, 64, 124) 76%,
      rgb(0, 3, 33) 100%
    );
    --ddd-theme-default-gradient-footer: linear-gradient(
      rgb(30, 64, 124) 0%,
      rgb(0, 30, 68) 65%,
      rgb(0, 30, 68) 100%
    );
    --ddd-theme-default-gradient-newsFeature: linear-gradient(
      360deg,
      rgb(30, 64, 124) 20%,
      rgb(0, 156, 222) 100%
    );
    --ddd-theme-default-gradient-buttons: linear-gradient(
      rgb(0, 156, 222) 0%,
      rgb(30, 64, 124) 85%
    );
    --ddd-theme-default-gradient-hero: linear-gradient(
      360deg,
      rgba(0, 30, 68, 0.8) 0%,
      rgba(0, 30, 68, 0.4) 50%,
      rgba(0, 3, 33, 0) 100%
    );
    --ddd-theme-default-gradient-hero2: linear-gradient(
      360deg,
      rgb(0, 30, 68) 0%,
      rgba(0, 30, 68, 0.4) 50%,
      rgba(0, 3, 33, 0) 100%
    );
    --ddd-theme-default-gradient-antihero: linear-gradient(
      180deg,
      rgba(0, 30, 68, 0.8) 0%,
      rgba(0, 30, 68, 0.4) 50%,
      rgba(0, 3, 33, 0) 100%
    );
    --ddd-theme-default-gradient-antihero2: linear-gradient(
      180deg,
      rgb(0, 30, 68) 0%,
      rgba(0, 30, 68, 0.4) 50%,
      rgba(0, 3, 33, 0) 100%
    );

    /* ===========================================
       ICON SIZING
       Standard icon dimensions for consistent UI
       Usage: width: var(--ddd-icon-md); height: var(--ddd-icon-md);
       =========================================== */
    --ddd-icon-4xs: 16px; /* Ultra-tiny icons (micro indicators, status dots) */
    --ddd-icon-3xs: 20px; /* Tiny icons (badges, indicators) */
    --ddd-icon-xxs: 24px; /* Small inline icons */
    --ddd-icon-xs: 32px; /* Default inline icons */
    --ddd-icon-sm: 40px; /* Button icons */
    --ddd-icon-md: 48px; /* Navigation icons */
    --ddd-icon-lg: 56px; /* Header icons */
    --ddd-icon-xl: 64px; /* Feature icons */
    --ddd-icon-2xl: 72px; /* Hero icons */
    --ddd-icon-3xl: 84px; /* Large decorative icons */
    --ddd-icon-4xl: 96px; /* Massive hero icons */

    /* ===========================================
       Z-INDEX SCALE
       Layering system for proper element stacking
       Usage: z-index: var(--ddd-z-modal);
       =========================================== */
    --ddd-z-base: 0; /* Base layer */
    --ddd-z-dropdown: 100; /* Dropdown menus */
    --ddd-z-sticky: 200; /* Sticky positioned elements */
    --ddd-z-overlay: 300; /* Background overlays */
    --ddd-z-modal: 10000; /* Modal dialogs and critical UI */
    --ddd-z-tooltip: 500; /* Tooltips and popovers */

    /* ===========================================
       OPACITY SCALE
       Standardized transparency values (base 4)
       Usage: opacity: var(--ddd-opacity-60);
       =========================================== */
    --ddd-opacity-0: 0; /* Fully transparent */
    --ddd-opacity-20: 0.2; /* Very light */
    --ddd-opacity-40: 0.4; /* Light */
    --ddd-opacity-60: 0.6; /* Medium */
    --ddd-opacity-80: 0.8; /* Strong */
    --ddd-opacity-100: 1; /* Fully opaque */

    /* ===========================================
       ANIMATION TIMING
       Standard animation and transition durations
       Usage: transition: all var(--ddd-duration-normal) var(--ddd-timing-ease);
       =========================================== */
    --ddd-duration-fast: 150ms; /* Quick interactions (2x speed) */
    --ddd-duration-normal: 300ms; /* Standard transitions */
    --ddd-duration-slow: 600ms; /* Slow transitions (1/2 speed) */
    --ddd-timing-ease: cubic-bezier(
      0.4,
      0,
      0.2,
      1
    ); /* Material design easing */

    /* ===========================================
       FOCUS SYSTEM
       Standardized focus indicators for accessibility
       Usage: outline: var(--ddd-focus-ring); outline-offset: var(--ddd-focus-offset);
       =========================================== */
    --ddd-focus-ring: 2px solid var(--ddd-theme-default-link); /* Focus ring style */
    --ddd-focus-offset: 2px; /* Focus ring offset distance */

    --simple-modal-content-container-color: light-dark(
      var(--ddd-primary-4),
      var(--ddd-accent-6)
    );
    --simple-modal-content-container-background: light-dark(
      var(--ddd-accent-6),
      var(--ddd-primary-4)
    );

    --simple-tooltip-opacity: 1;
    --simple-tooltip-delay-in: 0;
    --simple-tooltip-duration-in: 300ms;
    --simple-tooltip-duration-out: 0;
    --simple-tooltip-border-radius: 0;
    --simple-tooltip-font-size: var(--ddd-font-size-4xs);
  }
`;
// global styles from the design system. Not a reset so much as how DDD likes to present defaults
const DDDGlobalStyles = i$3`
  :root {
    color-scheme: light dark;
    scroll-behavior: smooth;
    font-family: var(--ddd-font-primary);
    font-size: var(--ddd-theme-body-font-size);
    font-weight: var(--ddd-font-weight-regular);
    letter-spacing: normal;
  }

  body.dark-mode {
    color-scheme: only dark;
  }
`;
/* Data Attributes used by HAX */
const DDDDataAttributes = [
  i$3`
    /* basic width operation, not great but not terrible */
    @media (min-width: 600px) {
      [data-width="25"] {
        width: 25%;
      }
      [data-width="50"] {
        width: 50%;
      }
      [data-width="75"] {
        width: 75%;
      }
      [data-width="100"] {
        width: 100%;
      }
    }

    /* Float positioning for larger devices */
    @media (min-width: 1440px) {
      [data-float-position="left"] {
        float: left;
        margin: var(--ddd-spacing-8) var(--ddd-spacing-8) 0 var(--ddd-spacing-4);
      }
      [data-float-position="right"] {
        float: right;
        margin: var(--ddd-spacing-8) var(--ddd-spacing-4) 0 var(--ddd-spacing-8);
      }
      [data-hax-ray][data-float-position]:focus-within::after,
      [data-hax-ray][data-float-position]:hover::after {
        content: "Floating item";
        position: absolute;
        white-space: nowrap;
        font-style: normal;
        position: absolute;
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        color: var(
          --ddd-theme-font-color,
          var(--ddd-theme-default-white, #fff)
        );
        background-color: var(
          --ddd-theme-default-info,
          rgba(175, 184, 193, 0.2)
        );
        font-size: var(--ddd-theme-body-font-size);
        font-weight: var(--ddd-font-weight-regular);
        border-radius: var(--ddd-radius-xs);
        right: var(--ddd-spacing-4);
        left: unset;
        margin-top: -16px;
      }
      [data-hax-ray][data-float-position="left"]:focus-within::after,
      [data-hax-ray][data-float-position="left"]:hover::after {
        left: var(--ddd-spacing-4);
        right: unset;
      }
    }

    /* basic text operations, not DDD specific persay */
    [data-text-align="left"] {
      text-align: left;
    }
    [data-text-align="center"] {
      text-align: center;
    }
    [data-text-align="right"] {
      text-align: right;
    }
    [data-text-align="justify"] {
      text-align: justify;
    }

    [data-primary] {
      --lowContrast-override: unset;
      --ddd-theme-bgContrast: unset;
      --ddd-theme-primary: var(--ddd-primary-0);
    }
    [data-primary="0"] {
      --ddd-theme-primary: var(--ddd-primary-0);
      --lowContrast-override: black;
    }
    [data-primary="1"] {
      --ddd-theme-primary: var(--ddd-primary-1);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="2"] {
      --ddd-theme-primary: var(--ddd-primary-2);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="3"] {
      --ddd-theme-primary: var(--ddd-primary-3);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="4"] {
      --ddd-theme-primary: var(--ddd-primary-4);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="5"] {
      --ddd-theme-primary: var(--ddd-primary-5);
      --lowContrast-override: black;
    }
    [data-primary="6"] {
      --ddd-theme-primary: var(--ddd-primary-6);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="7"] {
      --ddd-theme-primary: var(--ddd-primary-7);
      --lowContrast-override: black;
    }
    [data-primary="8"] {
      --ddd-theme-primary: var(--ddd-primary-8);
      --lowContrast-override: black;
    }
    [data-primary="9"] {
      --ddd-theme-primary: var(--ddd-primary-9);
      --lowContrast-override: black;
    }
    [data-primary="10"] {
      --ddd-theme-primary: var(--ddd-primary-10);
      --lowContrast-override: black;
    }
    [data-primary="11"] {
      --ddd-theme-primary: var(--ddd-primary-11);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="12"] {
      --ddd-theme-primary: var(--ddd-primary-12);
      --lowContrast-override: black;
    }
    [data-primary="13"] {
      --ddd-theme-primary: var(--ddd-primary-13);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="14"] {
      --ddd-theme-primary: var(--ddd-primary-14);
      --lowContrast-override: black;
    }
    [data-primary="15"] {
      --ddd-theme-primary: var(--ddd-primary-15);
      --lowContrast-override: black;
    }
    [data-primary="16"] {
      --ddd-theme-primary: var(--ddd-primary-16);
      --lowContrast-override: black;
    }
    [data-primary="17"] {
      --ddd-theme-primary: var(--ddd-primary-17);
      --lowContrast-override: black;
    }
    [data-primary="18"] {
      --ddd-theme-primary: var(--ddd-primary-18);
      --lowContrast-override: black;
    }
    [data-primary="19"] {
      --ddd-theme-primary: var(--ddd-primary-19);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="20"] {
      --ddd-theme-primary: var(--ddd-primary-20);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="21"] {
      --ddd-theme-primary: var(--ddd-primary-21);
      --lowContrast-override: black;
    }
    [data-primary="22"] {
      --ddd-theme-primary: var(--ddd-primary-22);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="23"] {
      --ddd-theme-primary: var(--ddd-primary-23);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="24"] {
      --ddd-theme-primary: var(--ddd-primary-24);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="25"] {
      --ddd-theme-primary: var(--ddd-primary-25);
      --ddd-theme-bgContrast: white;
    }

    /* accent color */
    [data-accent] {
      --ddd-theme-colorContrast: black;
    }
    [data-accent="0"] {
      --ddd-theme-accent: var(--ddd-accent-0);
    }
    [data-accent="1"] {
      --ddd-theme-accent: var(--ddd-accent-1);
    }
    [data-accent="2"] {
      --ddd-theme-accent: var(--ddd-accent-2);
    }
    [data-accent="3"] {
      --ddd-theme-accent: var(--ddd-accent-3);
    }
    [data-accent="4"] {
      --ddd-theme-accent: var(--ddd-accent-4);
    }
    [data-accent="5"] {
      --ddd-theme-accent: var(--ddd-accent-5);
    }
    [data-accent="6"] {
      --ddd-theme-accent: var(--ddd-accent-6);
    }
    [data-accent="7"] {
      --ddd-theme-accent: var(--ddd-accent-7);
    }
    [data-accent="8"] {
      --ddd-theme-accent: var(--ddd-accent-8);
    }
    [data-accent="9"] {
      --ddd-theme-accent: var(--ddd-accent-9);
    }
    [data-accent="10"] {
      --ddd-theme-accent: var(--ddd-accent-10);
    }
    [data-accent="11"] {
      --ddd-theme-accent: var(--ddd-accent-11);
    }
    [data-accent="12"] {
      --ddd-theme-accent: var(--ddd-accent-12);
    }
    [data-accent="13"] {
      --ddd-theme-accent: var(--ddd-accent-13);
    }
    [data-accent="14"] {
      --ddd-theme-accent: var(--ddd-accent-14);
    }

    [data-primary="19"][data-accent="11"],
    [data-primary="11"][data-accent="11"] {
      --lowContrast-override: black;
    }

    /* font family */

    [data-font-family="primary"] {
      font-family: var(--ddd-font-primary);
    }
    [data-font-family="secondary"] {
      font-family: var(--ddd-font-secondary);
    }
    [data-font-family="navigation"] {
      font-family: var(--ddd-font-navigation);
    }

    /* font weight */

    [data-font-weight="light"] {
      font-weight: var(--ddd-font-weight-light);
    }
    [data-font-weight="regular"] {
      font-weight: var(--ddd-font-weight-regular);
    }
    [data-font-weight="medium"] {
      font-weight: var(--ddd-font-weight-medium);
    }
    [data-font-weight="bold"] {
      font-weight: var(--ddd-font-weight-bold);
    }
    [data-font-weight="black"] {
      font-weight: var(--ddd-font-weight-black);
    }

    /* font size */
    /* normal line height if we are letting use mess w/ font size */
    [data-font-size] {
      line-height: normal;
    }
    [data-font-size="6xs"] {
      font-size: var(--ddd-font-size-6xs);
    }
    [data-font-size="5xs"] {
      font-size: var(--ddd-font-size-5xs);
    }
    [data-font-size="4xs"] {
      font-size: var(--ddd-font-size-4xs);
    }
    [data-font-size="3xs"] {
      font-size: var(--ddd-font-size-3xs);
    }
    [data-font-size="xxs"] {
      font-size: var(--ddd-font-size-xxs);
    }
    [data-font-size="xs"] {
      font-size: var(--ddd-font-size-xs);
    }
    [data-font-size="s"] {
      font-size: var(--ddd-font-size-s);
    }
    [data-font-size="ms"] {
      font-size: var(--ddd-font-size-ms);
    }
    [data-font-size="m"] {
      font-size: var(--ddd-font-size-m);
    }
    [data-font-size="ml"] {
      font-size: var(--ddd-font-size-ml);
    }
    [data-font-size="l"] {
      font-size: var(--ddd-font-size-l);
    }
    [data-font-size="xl"] {
      font-size: var(--ddd-font-size-xl);
    }
    [data-font-size="xxl"] {
      font-size: var(--ddd-font-size-xxl);
    }
    [data-font-size="3xl"] {
      font-size: var(--ddd-font-size-3xl);
    }
    [data-font-size="4xl"] {
      font-size: var(--ddd-font-size-4xl);
    }
    [data-font-size="type1-s"] {
      font-size: var(--ddd-font-size-type1-s);
    }
    [data-font-size="type1-m"] {
      font-size: var(--ddd-font-size-type1-m);
    }
    [data-font-size="type1-l"] {
      font-size: var(--ddd-font-size-type1-l);
    }
    /* padding spacing in content, only apply above small screens */
    @media (min-width: 600px) {
      [data-design-treatment="bg"][data-padding="xs"],
      [data-accent][data-padding="xs"],
      [data-padding="xs"] {
        padding: var(--ddd-spacing-2);
      }
      [data-design-treatment="bg"][data-padding="s"],
      [data-accent][data-padding="s"],
      [data-padding="s"] {
        padding: var(--ddd-spacing-4);
      }
      [data-design-treatment="bg"][data-padding="m"],
      [data-accent][data-padding="m"],
      [data-padding="m"] {
        padding: var(--ddd-spacing-8);
      }
      [data-design-treatment="bg"][data-padding="l"],
      [data-accent][data-padding="l"],
      [data-padding="l"] {
        padding: var(--ddd-spacing-12);
      }
      [data-design-treatment="bg"][data-padding="xl"],
      [data-accent][data-padding="xl"],
      [data-padding="xl"] {
        padding: var(--ddd-spacing-16);
      }
      /* margin spacing */
      [data-margin="center"] {
        margin-left: auto;
        margin-right: auto;
      }
      [data-margin="xs"] {
        margin: var(--ddd-spacing-2);
      }
      [data-margin="s"] {
        margin: var(--ddd-spacing-4);
      }
      [data-margin="m"] {
        margin: var(--ddd-spacing-8);
      }
      [data-margin="l"] {
        margin: var(--ddd-spacing-12);
      }
      [data-margin="xl"] {
        margin: var(--ddd-spacing-16);
      }
    }

    /* border width */
    p[data-border],
    blockquote[data-border],
    ol[data-border],
    ul[data-border],
    div[data-border] [data-border] {
      border-color: var(--ddd-theme-primary);
    }
    [data-border="xs"] {
      border: var(--ddd-border-xs);
      --ddd-theme-border-size: var(--ddd-border-size-xs);
    }
    [data-border="sm"] {
      border: var(--ddd-border-sm);
      --ddd-theme-border-size: var(--ddd-border-size-sm);
    }
    [data-border="md"] {
      border: var(--ddd-border-md);
      --ddd-theme-border-size: var(--ddd-border-size-md);
    }
    [data-border="lg"] {
      border: var(--ddd-border-lg);
      --ddd-theme-border-size: var(--ddd-border-size-lg);
    }

    /* border-radius */
    [data-border-radius="xs"] {
      border-radius: var(--ddd-radius-xs);
    }
    [data-border-radius="sm"] {
      border-radius: var(--ddd-radius-sm);
    }
    [data-border-radius="md"] {
      border-radius: var(--ddd-radius-md);
    }
    [data-border-radius="lg"] {
      border-radius: var(--ddd-radius-lg);
    }
    [data-border-radius="xl"] {
      border-radius: var(--ddd-radius-xl);
    }

    /* box-shadow */
    [data-box-shadow="sm"] {
      box-shadow: var(--ddd-boxShadow-sm);
    }
    [data-box-shadow="md"] {
      box-shadow: var(--ddd-boxShadow-md);
    }
    [data-box-shadow="lg"] {
      box-shadow: var(--ddd-boxShadow-lg);
    }
    [data-box-shadow="xl"] {
      box-shadow: var(--ddd-boxShadow-xl);
    }
  `,
  ...instructionalStyles,
];

/* Tag based application */
const DDDReset = i$3`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--ddd-font-primary);
    font-weight: var(--ddd-font-weight-bold);
    line-height: normal;
    letter-spacing: normal;
  }

  h1 {
    margin: var(--ddd-spacing-12) 0 var(--ddd-spacing-8);
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: var(--ddd-spacing-8) 0 var(--ddd-spacing-4);
    padding: 0;
  }
  h1 + h2,
  h1 + h3,
  h1 + h4,
  h1 + h5,
  h1 + h6,
  h2 + h3,
  h2 + h4,
  h2 + h5,
  h2 + h6,
  h3 + h4,
  h3 + h5,
  h3 + h6,
  h4 + h5,
  h4 + h6,
  h5 + h6 {
    margin-top: 0;
  }
  h1 {
    font-size: var(--ddd-theme-h1-font-size);
  }
  h2 {
    font-size: var(--ddd-theme-h2-font-size);
  }
  h3 {
    font-size: var(--ddd-theme-h3-font-size);
  }
  h4 {
    font-size: var(--ddd-theme-h4-font-size);
  }
  h5 {
    font-size: var(--ddd-theme-h5-font-size);
  }
  h6 {
    font-size: var(--ddd-theme-h6-font-size);
  }
  h1 + p,
  h2 + p,
  h3 + p,
  h4 + p,
  h5 + p,
  h6 + p {
    margin-top: 0;
  }
  p {
    margin: var(--ddd-spacing-6) 0;
  }
  dl {
    padding: var(--ddd-spacing-6);
    margin: 0;
    border: var(--ddd-border-sm);
    display: block;
    min-height: inherit;
  }
  dt {
    font-weight: var(--ddd-font-weight-bold);
    font-size: var(--ddd-theme-h6-font-size);
    display: block;
    min-height: inherit;
    padding: var(--ddd-spacing-1);
  }
  dd {
    margin-bottom: var(--ddd-spacing-4);
    margin-inline-start: var(--ddd-spacing-8);
    display: block;
    min-height: inherit;
    padding: var(--ddd-spacing-1);
  }

  p[data-accent],
  blockquote[data-accent],
  ol[data-accent],
  ul[data-accent],
  div[data-accent] {
    color: light-dark(currentcolor, var(--ddd-theme-colorContrast));
    border: var(--ddd-border-sm);
    border-color: var(--ddd-theme-primary);
    border-width: var(--ddd-theme-border-size);
    background-color: var(--ddd-theme-accent);
  }
  p[data-accent]:not([data-padding]),
  blockquote[data-accent]:not([data-padding]),
  ol[data-accent]:not([data-padding]),
  ul[data-accent]:not([data-padding]),
  div[data-accent]:not([data-padding]),
  p[data-border]:not([data-padding]),
  blockquote[data-border]:not([data-padding]),
  ol[data-border]:not([data-padding]),
  ul[data-border]:not([data-padding]),
  div[data-border]:not([data-padding]) {
    padding: var(--ddd-spacing-6);
  }
  ol[data-accent],
  ul[data-accent] {
    padding-left: var(--ddd-spacing-9);
  }
  /* p uniformity but ignore if either is in a slot */
  p:not([slot]) + p:not([slot]) {
    margin-top: 0;
  }

  /* heading presets */
  h1.type1 {
    font-size: var(--ddd-font-size-type1-s);
    font-weight: var(--ddd-font-weight-black);
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
    color: var(--ddd-theme-default-white);
    flex-wrap: nowrap;
    overflow-wrap: normal;
    text-wrap: wrap;
  }
  @media (min-width: 768px) {
    h1.type1 {
      font-size: var(--ddd-font-size-type1-m);
    }
  }
  @media (min-width: 1080px) {
    h1.type1 {
      font-size: var(--ddd-font-size-type1-l);
    }
  }

  h2.type2 {
    font-size: var(--ddd-font-size-4xl);
    color: var(--ddd-theme-default-beaverBlue);
  }
  .h2 > hr {
    width: 84px;
    border-width: 4px;
    margin-top: var(--ddd-spacing-6);
  }
  h2.type3 {
    font-size: var(--ddd-font-size-xxl);
    color: var(--ddd-theme-default-nittanyNavy);
  }

  a,
  a:any-link,
  a:-webkit-any-link {
    line-break: auto;
    font-weight: var(--ddd-font-weight-bold);
    text-decoration: none;
    background-color: var(--ddd-theme-accent);
  }
  body a,
  body a:any-link,
  body a:-webkit-any-link {
    color: light-dark(
      var(--ddd-theme-default-link),
      var(--ddd-theme-colorContrast, var(--ddd-theme-default-linkLight))
    );
  }
  @media (prefers-color-scheme: dark) {
    body a,
    body a:any-link,
    body a:-webkit-any-link {
      text-decoration: underline;
    }
  }
  body.dark-mode a,
  body.dark-mode a:any-link,
  body.dark-mode a:-webkit-any-link {
    text-decoration: underline;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  thead[data-primary] tr th {
    background-color: var(--ddd-theme-primary);
    color: var(--lowContrast-override, var(--ddd-theme-bgContrast, inherit));
    border-color: inherit;
  }

  table[data-primary] tbody > tr:nth-child(odd),
  table[data-primary] > tr:nth-child(odd) {
    background-color: var(--ddd-theme-primary);
    color: var(--ddd-theme-bgContrast, var(--lowContrast-override, inherit));
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    padding: inherit;
    border-color: inherit !important;
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    font-size: var(--ddd-theme-body-font-size);
    font-family: var(--ddd-font-primary);
    border: 1px solid;
  }
  table {
    border-collapse: collapse;
  }
  ul,
  ol {
    font-size: var(--ddd-theme-body-font-size);
    display: flex;
    flex-flow: column;
    gap: var(--ddd-spacing-3);
    font-family: var(--ddd-font-primary);
    margin: 0 0 var(--ddd-spacing-6) 0;
  }
  /** can't override margin requirements when in a more specific context **/
  grid-plate ul,
  grid-plate ol {
    margin: var(--grid-plate-item-padding, 16px);
    padding: var(--grid-plate-item-padding, 16px);
  }
  ul.link-list {
    list-style: none;
  }
  ul.link-list li::after {
    content: url('data:image/svg+xml; utf8, <svg style="width:32px;height:32px;" fill="%23005fa9" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="%23005fa9" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>');
    height: calc(var(--ddd-theme-body-font-size) + 2px);
    width: calc(var(--ddd-theme-body-font-size) + 2px);
    display: inline-block;
    position: relative;
    bottom: calc(-1 * var(--ddd-spacing-1));
    left: 0px;
  }
  ul li,
  ol li {
    font-size: var(--ddd-theme-body-font-size);
  }
  ul li::marker,
  ol li::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px;
    text-align: start;
    text-align-last: start;
  }
  ul {
    list-style-type: square;
  }
  ol {
    list-style-type: decimal;
  }
  ul[data-design-treatment="disc"],
  ul[data-design-treatment="list-disc"],
  ul[type="disc"] {
    list-style-type: disc;
  }
  ul[data-design-treatment="circle"],
  ul[data-design-treatment="list-circle"],
  ul[type="circle"] {
    list-style-type: circle;
  }
  ul[data-design-treatment="square"],
  ul[data-design-treatment="list-square"],
  ul[type="square"] {
    list-style-type: square;
  }
  ol[data-design-treatment="decimal"],
  ol[data-design-treatment="list-decimal"],
  ol[type="1"] {
    list-style-type: decimal;
  }
  ol[data-design-treatment="decimal-leading-zero"],
  ol[data-design-treatment="list-decimal-leading-zero"],
  ol[type="01"] {
    list-style-type: decimal-leading-zero;
  }
  ol[data-design-treatment="lower-alpha"],
  ol[data-design-treatment="list-lower-alpha"],
  ol[type="a"] {
    list-style-type: lower-alpha;
  }
  ol[data-design-treatment="upper-alpha"],
  ol[data-design-treatment="list-upper-alpha"],
  ol[type="A"] {
    list-style-type: upper-alpha;
  }
  ol[data-design-treatment="lower-roman"],
  ol[data-design-treatment="list-lower-roman"],
  ol[type="i"] {
    list-style-type: lower-roman;
  }
  ol[data-design-treatment="upper-roman"],
  ol[data-design-treatment="list-upper-roman"],
  ol[type="I"] {
    list-style-type: upper-roman;
  }
  ul li::marker {
    color: var(
      --lowContrast-override,
      var(--ddd-theme-primary, var(--ddd-theme-default-skyBlue))
    );
  }
  blockquote {
    font-family: var(--ddd-font-primary);
    font-size: var(--ddd-theme-body-font-size);
    font-style: italic;
    border-left: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
    padding-left: var(--ddd-spacing-6);
    padding-bottom: var(--ddd-spacing-2);
    margin: var(--ddd-spacing-9) 0 var(--ddd-spacing-9) var(--ddd-spacing-10);
    line-height: var(--ddd-lh-150);
  }
  hr {
    display: block;
    border: none;
    border-color: var(--ddd-theme-primary);
    border-top-width: var(--ddd-theme-header-border-thickness);
    border-top-style: solid;
    margin: 0 auto;
    padding: 0;
  }

  .h-invert {
    background-color: var(--ddd-theme-primary);
    color: var(--ddd-theme-bgContrast);
  }

  /** smooth transitions in hax when applying these design system attributes */
  [data-hax-ray][data-design-treatment],
  [data-hax-ray][data-accent],
  [data-hax-ray][data-primary],
  [data-hax-ray][data-padding],
  [data-hax-ray][data-margin],
  [data-hax-ray][data-width] {
    transition:
      padding 0.3s ease-in-out,
      margin 0.3s ease-in-out,
      border 0.3s ease-in-out,
      color 0.3s ease-in-out,
      width 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out,
      border-radius 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
  }

  [data-design-treatment="vert"] {
    border-bottom: none;
    border-left: var(--ddd-theme-header-border-thickness) solid
      var(--ddd-theme-primary, var(--ddd-primary-0));
    padding-left: var(--ddd-spacing-3);
  }

  [data-design-treatment="horz-10p"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-10p
    );
  }
  [data-design-treatment="horz-25p"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-25p
    );
  }
  [data-design-treatment="horz-50p"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-50p
    );
  }
  [data-design-treatment="horz-full"] {
    --ddd-theme-header-border-treatment: calc(
      var(--ddd-theme-header-border-treatment-full) - 32px
    );
  }
  [data-instructional-action][data-design-treatment="horz-full"] {
    --ddd-theme-header-border-treatment: calc(
      var(--ddd-theme-header-border-treatment-full) - 32px - 40px
    );
  }
  [data-design-treatment="horz-md"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-md
    );
  }
  [data-design-treatment="horz-lg"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-lg
    );
  }

  [data-design-treatment^="horz"]::after {
    content: "";
    transition: width 0.3s ease-in-out;
    width: var(--ddd-theme-header-border-treatment);
    border-bottom: var(--ddd-theme-header-border-thickness) solid
      var(--ddd-theme-primary, var(--ddd-primary-0));
    height: 0;
    display: block;
    padding-top: var(--ddd-spacing-2);
  }
  /** hack for compatibility with .haxcms-copyable */
  .haxcms-copyable[data-design-treatment^="horz"]::after {
    float: none;
  }

  [data-instructional-action][data-design-treatment^="horz"]::after {
    content: "";
    width: var(--ddd-theme-header-border-treatment);
    border-bottom: var(--ddd-theme-header-border-thickness) solid
      var(--ddd-theme-primary, var(--ddd-primary-0));
    height: 0;
    display: block;
    position: relative;
    bottom: 12px;
    left: 32px;
    margin-left: var(--ddd-spacing-3);
  }

  [data-design-treatment="bg"] {
    background-color: var(--ddd-theme-primary, var(--ddd-primary-0));
    color: var(--ddd-theme-bgContrast, var(--lowContrast-override, black));
    padding: var(--ddd-spacing-3);
  }

  [data-instructional-action][data-design-treatment="bg"] {
    padding: var(--ddd-spacing-2);
  }

  [data-instructional-action][data-design-treatment="bg"]::before {
    background-color: var(--ddd-theme-bgContrast, black);
    margin-right: var(--ddd-spacing-3);
    margin-left: var(--ddd-spacing-1);
  }

  [data-instructional-action]::before {
    content: "";
    display: inline-flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 0 0;
    margin: 8px 4px 0 0;
    z-index: 2;
    background-color: var(
      --lowContrast-override,
      var(--ddd-theme-primary, var(--instructional-action-color, blue))
    );
    mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    height: var(--ddd-icon-sm);
    width: var(--ddd-icon-sm);
  }

  [data-design-treatment] {
    transition:
      0.3s ease-in-out margin,
      0.3s ease-in-out background-color,
      0.3s ease-in-out padding,
      0.3s ease-in-out border;
  }

  [data-accent] [data-design-treatment^="dropCap"] {
    min-height: calc(
      (var(--initialLetter) * var(--ddd-theme-body-font-size) + 20px)
    );
  }

  [data-design-treatment^="dropCap"] {
    --initialLetter: 6;
    min-height: calc(
      (
          var(--initialLetter) * var(--ddd-theme-body-font-size) * 1.5 *
            var(--special-multiplier)
        ) + 20px
    );
  }

  [data-design-treatment^="dropCap"]::first-letter {
    -webkit-initial-letter: var(--initialLetter);
    text-transform: uppercase;
    initial-letter: var(--initialLetter);
    color: var(--ddd-theme-primary);
    font-weight: var(--ddd-font-weight-bold);
    margin-right: var(--ddd-spacing-3);
    padding: 0 var(--ddd-spacing-1);
    text-shadow:
      -3px -3px 0 #000,
      3px -3px 0 #000,
      -3px 3px 0 #000,
      3px 3px 0 #000,
      -3px 0 0 #000,
      3px 0 0 #000,
      0 -3px 0 #000,
      0 3px 0 #000;
  }
  [data-design-treatment="dropCap-xs"] {
    --initialLetter: 2;
  }

  [data-design-treatment="dropCap-sm"] {
    --initialLetter: 4;
  }

  [data-design-treatment="dropCap-md"] {
    --initialLetter: 6;
  }

  [data-design-treatment="dropCap-lg"] {
    --initialLetter: 8;
    --special-multiplier: 1.7;
  }

  [data-design-treatment="dropCap-xl"] {
    --initialLetter: 10;
  }

  [data-design-treatment="dropCap-xs"]::first-letter {
    margin-right: var(--ddd-spacing-1);
  }

  [data-design-treatment="dropCap-sm"]::first-letter {
    margin-right: var(--ddd-spacing-2);
  }

  [data-design-treatment="dropCap-md"]::first-letter {
    margin-right: var(--ddd-spacing-3);
  }

  [data-design-treatment="dropCap-lg"]::first-letter {
    margin-right: var(--ddd-spacing-4);
  }

  [data-design-treatment="dropCap-xl"]::first-letter {
    margin-right: var(--ddd-spacing-5);
  }

  /* dropCap outline for low contrasting colors 
  [data-design-treatment^="dropCap"][data-primary="0"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="5"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="7"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="8"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="9"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="10"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="12"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="14"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="15"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="16"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="18"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="21"]::first-letter
  */

  /** These are for Firefox / browsers not supporting dropcap in order to fake support */

  .dropCap-noSupport [data-design-treatment^="dropCap"]::first-letter {
    font-size: 180px;
    float: left;
    padding: 8px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-xs"]::first-letter {
    font-size: 56px;
    float: left;
    padding: 4px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-sm"]::first-letter {
    font-size: 112px;
    float: left;
    padding: 4px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-md"]::first-letter {
    font-size: 168px;
    float: left;
    padding: 8px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-lg"]::first-letter {
    font-size: 230px;
    float: left;
    padding: 12px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-xl"]::first-letter {
    font-size: 300px;
    float: left;
    padding: 12px 0px 0px 0px;
  }

  /*
    h2 > hr {
      margin-top: var(--ddd-spacing-4);
    }
  */

  .ddd-theme-header-border-thickness-0 {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-0
    );
  }
  .ddd-theme-header-border-thickness-xs {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-xs
    );
  }
  .ddd-theme-header-border-thickness-sm {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-sm
    );
  }
  .ddd-theme-header-border-thickness-md {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-md
    );
  }
  .ddd-theme-header-border-thickness-lg {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-lg
    );
  }

  .ddd-theme-header-border-treatment-0 {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-0
    );
  }
  .ddd-theme-header-border-treatment-sm {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-sm
    );
  }
  .ddd-theme-header-border-treatment-md {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-md
    );
  }
  .ddd-theme-header-border-treatment-lg {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-lg
    );
  }
  .ddd-theme-header-border-treatment-10p {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-10p
    );
  }
  .ddd-theme-header-border-treatment-25p {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-25p
    );
  }
  .ddd-theme-header-border-treatment-50p {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-50p
    );
  }
  .ddd-theme-header-border-treatment-75p {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-75p
    );
  }
  .ddd-theme-header-border-treatment-full {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-full
    );
  }
  summary {
    display: flex;
    font-size: var(--ddd-theme-h4-font-size);
    font-weight: var(--ddd-font-weight-bold);
    color: light-dark(
      var(
        --lowContrast-override,
        var(--ddd-theme-primary, var(--ddd-theme-default-nittanyNavy))
      ),
      var(
        --lowContrast-override,
        var(--ddd-theme-primary, var(--ddd-theme-default-linkLight))
      )
    );
    cursor: pointer;
    text-wrap: wrap;
    align-items: center;
    padding: var(--ddd-spacing-5) var(--ddd-spacing-4);
    user-select: none;
    transition: all 0.3s ease-in-out;
  }
  summary::marker {
    content: "";
  }
  summary::after {
    content: "+";
    margin-left: auto;
    text-align: right;
    font-weight: var(--ddd-font-weight-regular);
    font-size: var(--ddd-font-size-m);
    line-height: 1;
  }
  details {
    overflow: hidden;
    display: block;
    position: relative;
    max-width: 650px;
    padding: 0;
    margin: 0;
  }
  details[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }
  details[open] > summary::after {
    content: "-";
  }
  details[open] > summary {
    color: light-dark(
      var(
        --lowContrast-override,
        var(--ddd-theme-primary, var(--ddd-theme-default-nittanyNavy))
      ),
      var(
        --lowContrast-override,
        var(--ddd-theme-primary, var(--ddd-theme-default-linkLight))
      )
    );
    filter: saturate(1.5);
  }
  details[open] > summary {
    background-color: light-dark(
      var(--ddd-theme-default-limestoneMaxLight),
      var(--ddd-theme-default-potentialMidnight)
    );
  }
  details summary:focus,
  details summary:hover {
    background-color: light-dark(
      var(--ddd-theme-default-limestoneLight),
      var(--ddd-theme-default-nittanyNavy)
    );
  }

  code {
    user-select: all;
    transition: all 0.3s ease 0s;
    display: inline-block;
    padding: 2px var(--ddd-spacing-1); /* breaking DDD spacing sys on purpose for code */
    margin: 0 var(--ddd-spacing-1);
    font-size: calc(var(--ddd-theme-body-font-size) - var(--ddd-spacing-1));
    background-color: var(
      --ddd-theme-code-background-color,
      light-dark(var(--ddd-theme-default-limestoneLight), black)
    );
    color: var(
      --ddd-theme-code-color,
      light-dark(black, var(--ddd-theme-default-limestoneLight))
    );
    line-height: 1;
    border-radius: var(--ddd-radius-xs);
    border: var(--ddd-border-md);
    border-style: groove;
    border-color: light-dark(var(--ddd-theme-default-limestoneMaxLight), black);
    font-family: monospace;
    letter-spacing: var(--ddd-ls-16-lg);
    pointer-events: auto;
  }
  code.block-code {
    padding: var(--ddd-spacing-2);
    margin: var(--ddd-spacing-5) 0;
  }
  code::-moz-selection {
    /* Code for Firefox */
    background: var(--ddd-theme-default-keystoneYellow);
  }
  code::selection {
    background: var(--ddd-theme-default-keystoneYellow);
  }

  pre {
    display: inline-block;
    padding: var(--ddd-spacing-4);
    overflow: auto;
    background-color: light-dark(
      var(--ddd-theme-default-limestoneMaxLight, rgba(175, 184, 193, 0.8)),
      var(--ddd-theme-default-coalyGray, rgba(175, 184, 193, 0.2))
    );
    color: inherit;
    border-radius: var(--ddd-radius-sm);
    margin: var(--ddd-spacing-1) 0;
    white-space: pre-wrap;
    font-size: var(--ddd-theme-body-font-size);
  }

  mark {
    font-weight: var(--ddd-font-weight-medium);
    padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
    border-radius: var(--ddd-radius-xs);
    background-color: light-dark(
      var(--ddd-theme-primary, var(--ddd-theme-default-keystoneYellow)),
      var(--ddd-theme-primary, var(--ddd-theme-default-roarGolden))
    );
    color: var(--ddd-theme-bgContrast, black);
    box-decoration-break: clone;
  }
  abbr {
    background-color: var(--ddd-theme-primary, var(--ddd-theme-default-info));
    transition: all 0.3s ease 0s;
    padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
    font-style: italic;
    text-decoration: underline;
    pointer-events: auto;
    cursor: pointer;
    outline-color: var(--ddd-theme-primary, var(--ddd-theme-default-info));
    color: var(--ddd-theme-bgContrast, var(--lowContrast-override, white));
    position: relative;
  }
  abbr:focus,
  abbr:active,
  abbr:hover {
    text-decoration: none;
    background-color: var(--ddd-theme-primary, var(--ddd-theme-default-info));
    outline-offset: 2px;
    outline-style: dotted;
    outline-width: 2px;
  }
  abbr:focus::after,
  abbr:active::after,
  abbr:hover::after {
    content: attr(title);
    position: absolute;
    white-space: nowrap;
    font-style: normal;
    position: absolute;
    bottom: 100%;
    left: 0;
    width: fit-content;
    height: fit-content;
    padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
    color: var(--ddd-theme-font-color, var(--ddd-theme-default-white, #fff));
    background-color: var(--ddd-theme-default-info, rgba(175, 184, 193, 0.2));
    font-size: var(--ddd-theme-body-font-size);
    font-weight: var(--ddd-font-weight-regular);
    border-radius: var(--ddd-radius-xs);
  }
  div[slot="citation"] {
    font-size: var(--ddd-font-size-4xs);
  }
  *::selection {
    background-color: var(--ddd-theme-default-linkLight);
    color: black;
  }
  select {
    display: flex;
    box-sizing: border-box;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    color: var(--ddd-theme-default-coalyGray);
    width: fit-content;
    border: var(--ddd-border-xs);
    background-color: var(--ddd-theme-default-white);
    font-family: var(--ddd-font-primary);
    font-weight: var(--ddd-font-weight-regular);
    font-size: var(--ddd-theme-body-font-size);
    line-height: 150%;
    letter-spacing: normal;
    padding: var(--ddd-spacing-2);
    border-radius: var(--ddd-radius-xs);
    border-color: var(--ddd-theme-default-potential50);
  }
  hax-body,
  .haxcms-theme-element {
    line-height: var(--ddd-lh-150);
    font-size: var(--ddd-theme-body-font-size);
    font-family: var(--ddd-font-primary);
    letter-spacing: normal;
    text-align: justify;
  }
  @media (max-width: 900px) {
    hax-body,
    .haxcms-theme-element {
      text-align: start;
    }
  }
`;
/* border & shadows */

/* margin & padding */

/* font sizing */

/* font sizing */
const DDDLetterSpacing = i$3`
  .ls-16-sm {
    letter-spacing: var(--ddd-ls-16-sm);
  }
  .ls-18-sm {
    letter-spacing: var(--ddd-ls-18-sm);
  }
  .ls-20-sm {
    letter-spacing: var(--ddd-ls-20-sm);
  }
  .ls-22-sm {
    letter-spacing: var(--ddd-ls-22-sm);
  }
  .ls-24-sm {
    letter-spacing: var(--ddd-ls-24-sm);
  }
  .ls-28-sm {
    letter-spacing: var(--ddd-ls-28-sm);
  }
  .ls-32-sm {
    letter-spacing: var(--ddd-ls-32-sm);
  }
  .ls-36-sm {
    letter-spacing: var(--ddd-ls-36-sm);
  }
  .ls-40-sm {
    letter-spacing: var(--ddd-ls-40-sm);
  }
  .ls-48-sm {
    letter-spacing: var(--ddd-ls-48-sm);
  }
  .ls-56-sm {
    letter-spacing: var(--ddd-ls-56-sm);
  }
  .ls-64-sm {
    letter-spacing: var(--ddd-ls-64-sm);
  }
  .ls-72-sm {
    letter-spacing: var(--ddd-ls-72-sm);
  }
  .ls-16-lg {
    letter-spacing: var(--ddd-ls-16-lg);
  }
  .ls-18-lg {
    letter-spacing: var(--ddd-ls-18-lg);
  }
  .ls-20-lg {
    letter-spacing: var(--ddd-ls-20-lg);
  }
  .ls-22-lg {
    letter-spacing: var(--ddd-ls-22-lg);
  }
  .ls-24-lg {
    letter-spacing: var(--ddd-ls-24-lg);
  }
  .ls-28-lg {
    letter-spacing: var(--ddd-ls-28-lg);
  }
  .ls-32-lg {
    letter-spacing: var(--ddd-ls-32-lg);
  }
  .ls-36-lg {
    letter-spacing: var(--ddd-ls-36-lg);
  }
  .ls-40-lg {
    letter-spacing: var(--ddd-ls-40-lg);
  }
  .ls-48-lg {
    letter-spacing: var(--ddd-ls-48-lg);
  }
  .ls-56-lg {
    letter-spacing: var(--ddd-ls-56-lg);
  }
  .ls-64-lg {
    letter-spacing: var(--ddd-ls-64-lg);
  }
  .ls-72-lg {
    letter-spacing: var(--ddd-ls-72-lg);
  }
`;
/* line height sizing */

/* Box shadows */
const DDDBoxShadow = i$3`
  .bs-0 {
    box-shadow: none;
  }
  .bs-xs {
    box-shadow: var(--ddd-boxShadow-sm);
  }
  .bs-sm {
    box-shadow: var(--ddd-boxShadow-sm);
  }
  .bs-md {
    box-shadow: var(--ddd-boxShadow-md);
  }
  .bs-lg {
    box-shadow: var(--ddd-boxShadow-lg);
  }
  .bs-xl {
    box-shadow: var(--ddd-boxShadow-xl);
  }
`;
/* Border Radius */
const DDDBorderRadius = i$3`
  .r-0 {
    border-radius: var(--ddd-radius-0);
  }
  .r-xs {
    border-radius: var(--ddd-radius-xs);
  }
  .r-sm {
    border-radius: var(--ddd-radius-sm);
  }
  .r-md {
    border-radius: var(--ddd-radius-md);
  }
  .r-lg {
    border-radius: var(--ddd-radius-lg);
  }
  .r-xl {
    border-radius: var(--ddd-radius-xl);
  }
  .r-rounded {
    border-radius: var(--ddd-radius-rounded);
  }
  .r-circle {
    border-radius: var(--ddd-radius-circle);
  }
`;
/* Background colors / gradients */
const DDDBackground = i$3`
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--ddd-theme-default-white);
  }
  .bg-gradient-navBar {
    background: var(--ddd-theme-default-gradient-navBar);
  }
  .bg-gradient-footer {
    background: var(--ddd-theme-default-gradient-footer);
  }
  .bg-gradient-newsFeature {
    background: var(--ddd-theme-default-gradient-newsFeature);
  }
  .bg-gradient-buttons {
    background: var(--ddd-theme-default-gradient-buttons);
  }
  .bg-gradient-hero {
    background: var(--ddd-theme-default-gradient-hero);
  }
  .bg-gradient-hero2 {
    background: var(--ddd-theme-default-gradient-hero2);
  }
`;
/* Font weight */
const DDDFontWeight = i$3`
  .fw-0 {
    font-weight: var(--ddd-font-weight-regular); /* available for navigation */
  }
  .fw-1 {
    font-weight: var(--ddd-font-weight-medium); /* available for headers */
  }
  .fw-2 {
    font-weight: var(--ddd-font-weight-bold); /* available for headers */
  }
  .fw-3 {
    font-weight: var(
      --ddd-font-weight-black
    ); /* default for headers, body & navigation */
  }
`;
/* Font classes */
const DDDFontClasses = i$3`
  .ddd-font-navigation {
    font-family: var(--ddd-font-navigation);
    font-size: var(--ddd-theme-h4-font-size);
    font-weight: var(--ddd-font-weight-bold);
  }
  .ddd-font-primary {
    font-family: var(--ddd-font-primary);
  }
  .ddd-font-secondary {
    font-family: var(--ddd-font-secondary);
  }
`;

/* Breadcrumb */
const DDDBreadcrumb = i$3`
  .breadcrumb {
    font-weight: var(--ddd-font-weight-light);
    margin: var(--ddd-spacing-6) 0;
    padding: 0;
    pointer-events: auto;
    list-style: "/";
    gap: var(--ddd-spacing-2);
    display: flex;
    flex-flow: row;
    color: light-dark(
      var(--ddd-theme-default-link),
      var(--ddd-theme-default-linkLight)
    );
    line-height: normal;
    text-align: start;
  }
  .breadcrumb li::marker {
    color: light-dark(black, white);
    font-weight: var(--ddd-font-weight-bold);
  }
  .breadcrumb li:first-child {
    list-style: none;
  }
  .breadcrumb li:last-child a {
    color: light-dark(black, white);
    pointer-events: none;
  }
  .breadcrumb li a {
    vertical-align: text-top;
    display: inline-block;
    padding: 0 var(--ddd-spacing-2);
    font-family: var(--ddd-font-navigation);
    font-weight: var(--ddd-font-weight-regular);
    text-decoration: none;
  }
  .breadcrumb li a:hover {
    text-decoration: underline;
    pointer-events: auto;
  }
`;
/* Extra things */
const DDDExtra = i$3`
  /* helper class for accessibility of screen reader only content */
  .sr-only {
    position: absolute;
    left: -10000px;
    inset-inline-start: -10000px;
    inset-inline-end: initial;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

i$3`
  /* Apply primary color as pulse effect using CSS variable */
  :host([data-primary="0"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-0-rgb);
  }
  :host([data-primary="1"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-1-rgb);
  }
  :host([data-primary="2"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-2-rgb);
  }
  :host([data-primary="3"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-3-rgb);
  }
  :host([data-primary="4"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-4-rgb);
  }
  :host([data-primary="5"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-5-rgb);
  }
  :host([data-primary="6"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-6-rgb);
  }
  :host([data-primary="7"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-7-rgb);
  }
  :host([data-primary="8"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-8-rgb);
  }
  :host([data-primary="9"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-9-rgb);
  }
  :host([data-primary="10"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-10-rgb);
  }
  :host([data-primary="11"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-11-rgb);
  }
  :host([data-primary="12"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-12-rgb);
  }
  :host([data-primary="13"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-13-rgb);
  }
  :host([data-primary="14"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-14-rgb);
  }
  :host([data-primary="15"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-15-rgb);
  }
  :host([data-primary="16"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-16-rgb);
  }
  :host([data-primary="17"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-17-rgb);
  }
  :host([data-primary="18"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-18-rgb);
  }
  :host([data-primary="19"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-19-rgb);
  }
  :host([data-primary="20"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-20-rgb);
  }
  :host([data-primary="21"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-21-rgb);
  }
  :host([data-primary="22"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-22-rgb);
  }
  :host([data-primary="23"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-23-rgb);
  }
  :host([data-primary="24"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-24-rgb);
  }
  :host([data-primary="25"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-25-rgb);
  }

  :host([data-pulse]) {
    --ddd-animation-pulse-size: var(--ddd-spacing-4);
    animation-delay: 2.8s;
    animation-name: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    z-index: 10000;
  }
  :host([data-pulse="1"]) {
    --ddd-animation-pulse-size: var(--ddd-spacing-6);
  }
  :host([data-pulse="2"]) {
    --ddd-animation-pulse-size: var(--ddd-spacing-10);
  }
  :host([data-pulse]:not([data-primary])) {
    --ddd-animation-pulse-color: var(--ddd-primary-1-rgb);
  }
`;

const DDDAnimations = i$3`
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(var(--ddd-animation-pulse-color));
    }
    70% {
      box-shadow: 0 0 0 var(--ddd-animation-pulse-size) rgba(0, 0, 0, 0); /* Use a transparent color derived from the original color */
    }
    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); /* Same here */
    }
  }
`;

const DDDPaletteStyles = i$3`
  /** Default Palette */
  html,
  :root {
    --ddd-palette-color-1: var(--ddd-theme-default-coalyGray);
    --ddd-palette-color-2: var(--simple-colors-default-theme-grey-9);
    --ddd-palette-color-3: var(--simple-colors-default-theme-grey-7);
    --ddd-palette-color-4: var(--simple-colors-default-theme-grey-5);
    --ddd-palette-color-5: var(--simple-colors-default-theme-grey-3);
    --ddd-palette-color-6: var(--simple-colors-default-theme-grey-11);
    --ddd-palette-color-7: var(--simple-colors-default-theme-amber-6);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    --ddd-palette-text-color-1: var(--ddd-theme-default-white);
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-grey-4);
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-grey-2);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-grey-10);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-grey-9);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-grey-4);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-grey-10);
  }

  /** Wisdom Walk Green */
  [data-palette="wisdom-walk-green"],
  [data-palette="0"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-green-10);
    --ddd-palette-color-2: var(--simple-colors-default-theme-lime-8);
    --ddd-palette-color-3: var(--simple-colors-fixed-theme-lime-7);
    --ddd-palette-color-4: var(--ddd-theme-default-futureLime);
    --ddd-palette-color-5: var(--simple-colors-default-theme-lime-5);
    --ddd-palette-color-6: var(--ddd-theme-default-inventOrange);
    --ddd-palette-color-7: var(--simple-colors-default-theme-orange-3);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    --ddd-palette-text-color-1: var(--simple-colors-fixed-theme-green-3);
    --ddd-palette-text-color-2: var(--simple-colors-fixed-theme-green-4);
    --ddd-palette-text-color-3: var(--simple-colors-fixed-theme-green-1);
    /* This does NOT pass accessibility standards */
    --ddd-palette-text-color-4: var(--simple-colors-fixed-theme-teal-12);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-lime-10);
    --ddd-palette-text-color-6: var(--ddd-theme-default-white);
    --ddd-palette-text-color-7: var(
      --simple-colors-default-theme-deep-orange-10
    );
  }

  /** Very Violent Red */
  [data-palette="very-violent-red"],
  [data-palette="1"] {
    --ddd-palette-color-1: var(--simple-colors-fixed-theme-red-12);
    --ddd-palette-color-2: var(--simple-colors-fixed-theme-deep-orange-8);
    --ddd-palette-color-3: var(--simple-colors-default-theme-deep-orange-7);
    --ddd-palette-color-4: var(--ddd-theme-default-discoveryCoral);
    --ddd-palette-color-5: var(--simple-colors-default-theme-red-2);
    --ddd-palette-color-6: var(--ddd-theme-default-slateGray);
    --ddd-palette-color-7: var(--ddd-theme-default-pughBlue);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-fixed-theme-red-2);
    --ddd-palette-text-color-2: var(--simple-colors-fixed-theme-red-1);
    --ddd-palette-text-color-3: var(
      --simple-colors-default-theme-deep-orange-12
    );
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-red-12);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-red-10);
    --ddd-palette-text-color-6: var(--ddd-theme-default-skyLight);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-blue-10);
  }

  /** Beetles Yellow */
  [data-palette="beetles-yellow"],
  [data-palette="2"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-orange-9);
    --ddd-palette-color-2: var(--simple-colors-fixed-theme-orange-7);
    --ddd-palette-color-3: var(--simple-colors-default-theme-orange-6);
    --ddd-palette-color-4: var(--simple-colors-fixed-theme-amber-6);
    --ddd-palette-color-5: var(--ddd-theme-default-keystoneYellow);
    --ddd-palette-color-6: var(--ddd-theme-default-creekTeal);
    --ddd-palette-color-7: var(--simple-colors-default-theme-cyan-1);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-fixed-theme-yellow-2);
    --ddd-palette-text-color-2: var(--simple-colors-fixed-theme-orange-12);
    --ddd-palette-text-color-3: var(--simple-colors-fixed-theme-orange-11);
    --ddd-palette-text-color-4: var(--simple-colors-fixed-theme-orange-10);
    --ddd-palette-text-color-5: var(--simple-colors-fixed-theme-deep-orange-11);
    --ddd-palette-text-color-6: var(--simple-colors-fixed-theme-cyan-12);
    --ddd-palette-text-color-7: var(--simple-colors-fixed-theme-light-blue-10);
  }

  /* Offbrand Nittany Blue */
  [data-palette="offbrand-nittany-blue"],
  [data-palette="3"] {
    --ddd-palette-color-1: var(--ddd-theme-default-nittanyNavy);
    --ddd-palette-color-2: var(--simple-colors-fixed-theme-light-blue-10);
    --ddd-palette-color-3: var(--simple-colors-fixed-theme-light-blue-8);
    --ddd-palette-color-4: var(--simple-colors-fixed-theme-light-blue-6);
    --ddd-palette-color-5: var(--simple-colors-fixed-theme-cyan-2);
    --ddd-palette-color-6: var(--simple-colors-fixed-theme-orange-7);
    --ddd-palette-color-7: var(--ddd-theme-default-keystoneYellow);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-default-theme-light-blue-4);
    --ddd-palette-text-color-2: var(--simple-colors-fixed-theme-cyan-2);
    --ddd-palette-text-color-3: var(--ddd-theme-default-white);
    --ddd-palette-text-color-4: var(--simple-colors-fixed-theme-blue-11);
    --ddd-palette-text-color-5: var(--simple-colors-fixed-theme-light-blue-10);
    --ddd-palette-text-color-6: var(--simple-colors-fixed-theme-orange-12);
    --ddd-palette-text-color-7: var(--simple-colors-fixed-theme-orange-10);
  }

  /* Boring Blue Gray */
  [data-palette="boring-blue-gray"],
  [data-palette="4"] {
    --ddd-palette-color-1: var(--ddd-theme-default-coalyGray);
    --ddd-palette-color-2: var(--simple-colors-fixed-theme-blue-grey-9);
    --ddd-palette-color-3: var(--simple-colors-fixed-theme-blue-grey-8);
    --ddd-palette-color-4: var(--simple-colors-fixed-theme-blue-grey-6);
    --ddd-palette-color-5: var(--simple-colors-fixed-theme-blue-grey-4);
    --ddd-palette-color-6: var(--ddd-theme-default-slateGray);
    --ddd-palette-color-7: var(--simple-colors-fixed-theme-blue-grey-2);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-fixed-theme-blue-grey-2);
    --ddd-palette-text-color-2: var(--simple-colors-fixed-theme-blue-grey-1);
    --ddd-palette-text-color-3: var(--ddd-theme-default-white);
    --ddd-palette-text-color-4: var(--simple-colors-fixed-theme-blue-grey-12);
    --ddd-palette-text-color-5: var(--simple-colors-fixed-theme-blue-grey-11);
    --ddd-palette-text-color-6: var(--simple-colors-fixed-theme-blue-grey-1);
    --ddd-palette-text-color-7: var(--simple-colors-fixed-theme-blue-grey-10);
  }

  /** Monotone Gray */
  [data-palette="monotone"],
  [data-palette="5"] {
    --ddd-palette-color-1: var(--ddd-theme-default-coalyGray);
    --ddd-palette-color-2: var(--simple-colors-fixed-theme-grey-9);
    --ddd-palette-color-3: var(--simple-colors-fixed-theme-grey-7);
    --ddd-palette-color-4: var(--simple-colors-fixed-theme-grey-5);
    --ddd-palette-color-5: var(--simple-colors-fixed-theme-grey-3);
    --ddd-palette-color-6: var(--simple-colors-fixed-theme-grey-11);
    --ddd-palette-color-7: var(--simple-colors-fixed-theme-amber-6);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-fixed-theme-blue-grey-2);
    --ddd-palette-text-color-2: var(--simple-colors-fixed-theme-grey-3);
    --ddd-palette-text-color-3: var(--simple-colors-fixed-theme-grey-1);
    --ddd-palette-text-color-4: var(--simple-colors-fixed-theme-grey-10);
    --ddd-palette-text-color-5: var(--simple-colors-fixed-theme-grey-8);
    --ddd-palette-text-color-6: var(--simple-colors-fixed-theme-grey-5);
    --ddd-palette-text-color-7: var(--simple-colors-fixed-theme-orange-10);
  }

  /** Salmon Season */
  [data-palette="salmon-season"],
  [data-palette="6"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-pink-2);
    --ddd-palette-color-2: var(--simple-colors-default-theme-pink-4);
    --ddd-palette-color-3: var(--ddd-theme-default-original87Pink);
    --ddd-palette-color-4: var(--ddd-theme-default-discoveryCoral);
    --ddd-palette-color-5: var(--simple-colors-default-theme-red-10);
    --ddd-palette-color-6: var(--simple-colors-default-theme-lime-9);
    --ddd-palette-color-7: var(--simple-colors-default-theme-lime-5);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);
    --ddd-palette-video-player-caption-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-default-theme-pink-11);
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-pink-12);
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-pink-1);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-red-12);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-pink-2);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-lime-1);
    --ddd-palette-text-color-7: var(
      --simple-colors-default-theme-light-green-10
    );
  }

  /** Tweedle Dee */
  [data-palette="tweedle-dee"],
  [data-palette="7"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-indigo-2);
    --ddd-palette-color-2: var(--simple-colors-default-theme-blue-5);
    --ddd-palette-color-3: var(--simple-colors-default-theme-light-blue-7);
    --ddd-palette-color-4: var(--simple-colors-default-theme-cyan-9);
    --ddd-palette-color-5: var(--simple-colors-default-theme-teal-10);
    --ddd-palette-color-6: var(--simple-colors-default-theme-purple-8);
    --ddd-palette-color-7: var(--simple-colors-default-theme-pink-7);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-default-theme-indigo-12);
    --ddd-palette-text-color-2: var(
      --simple-colors-default-theme-light-blue-12
    );
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-light-blue-1);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-cyan-1);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-teal-1);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-purple-1);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-pink-1);
  }

  /* Polaris Invent */
  [data-palette="polaris-invent"],
  [data-palette="8"] {
    /* Derived from colors in polaris-invent-theme */
    --ddd-palette-color-1: var(--ddd-theme-default-skyBlue);
    --ddd-palette-color-2: var(--ddd-theme-default-beaver80);
    --ddd-palette-color-3: var(--ddd-theme-default-beaverBlue);
    --ddd-palette-color-4: var(--ddd-theme-default-nittanyNavy);
    --ddd-palette-color-5: var(--ddd-theme-default-limestoneLight);
    --ddd-palette-color-6: var(--ddd-theme-default-coalyGray);
    --ddd-palette-color-7: var(--ddd-theme-default-inventOrange);

    --ddd-palette-video-player-color: var(--ddd-theme-default-white);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--ddd-theme-default-white);
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-cyan-2);
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-cyan-2);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-cyan-4);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-blue-grey-2);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-blue-grey-10);
    --ddd-palette-text-color-7: var(--ddd-theme-default-white);
  }

  [data-palette="positively-purple"],
  [data-palette="9"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-deep-purple-2);
    --ddd-palette-color-2: var(--ddd-theme-default-wonderPurple);
    --ddd-palette-color-3: var(--ddd-theme-default-athertonViolet);
    --ddd-palette-color-4: var(--simple-colors-default-theme-deep-purple-11);
    --ddd-palette-color-5: var(--simple-colors-default-theme-deep-purple-12);
    --ddd-palette-color-6: var(--ddd-theme-default-shrineTan);
    --ddd-palette-color-7: var(--simple-colors-default-theme-brown-2);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(
      --simple-colors-default-theme-deep-purple-11
    );
    --ddd-palette-text-color-2: var(
      --simple-colors-default-theme-deep-purple-12
    );
    --ddd-palette-text-color-3: var(
      --simple-colors-default-theme-deep-purple-1
    );
    --ddd-palette-text-color-4: var(
      --simple-colors-default-theme-deep-purple-2
    );
    --ddd-palette-text-color-5: var(
      --simple-colors-default-theme-deep-purple-5
    );
    --ddd-palette-text-color-6: var(--ddd-theme-default-white);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-brown-11);
  }

  [data-palette="honey-bear"],
  [data-palette="10"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-deep-orange-1);
    --ddd-palette-color-2: var(--simple-colors-default-theme-deep-orange-3);
    --ddd-palette-color-3: var(--ddd-theme-default-landgrantBrown);
    --ddd-palette-color-4: var(--simple-colors-default-theme-brown-8);
    --ddd-palette-color-5: var(--simple-colors-default-theme-brown-11);
    --ddd-palette-color-6: var(--simple-colors-default-theme-amber-11);
    --ddd-palette-color-7: var(--simple-colors-default-theme-amber-12);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-default-theme-orange-7);
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-orange-10);
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-orange-12);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-brown-1);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-brown-2);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-orange-3);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-orange-4);
  }

  [data-palette="boldly-lion"],
  [data-palette="11"] {
    --ddd-palette-color-1: var(--ddd-theme-default-nittanyNavy);
    --ddd-palette-color-2: var(--ddd-theme-default-beaverBlue);
    --ddd-palette-color-3: var(--ddd-theme-default-pughBlue);
    --ddd-palette-color-4: var(--ddd-theme-default-slateGray);
    --ddd-palette-color-5: var(--ddd-theme-default-limestoneLight);
    --ddd-palette-color-6: var(--ddd-theme-default-coalyGray);
    --ddd-palette-color-7: var(--ddd-theme-default-keystoneYellow);

    --ddd-palette-video-player-color: var(--ddd-theme-default-white);
    --ddd-palette-video-player-caption-color: var(--ddd-theme-default-white);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--ddd-theme-default-white);
    --ddd-palette-text-color-2: var(--ddd-theme-default-white);
    --ddd-palette-text-color-3: var(--ddd-theme-default-white);
    --ddd-palette-text-color-4: var(--ddd-theme-default-white);
    --ddd-palette-text-color-5: var(--ddd-theme-default-nittanyNavy);
    --ddd-palette-text-color-6: var(--ddd-theme-default-limestoneLight);
    --ddd-palette-text-color-7: var(--ddd-theme-default-nittanyNavy);
  }

  /** Ocean Current */
  [data-palette="ocean-current"],
  [data-palette="12"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-indigo-1);
    --ddd-palette-color-2: var(--simple-colors-default-theme-blue-3);
    --ddd-palette-color-3: var(--simple-colors-default-theme-light-blue-6);
    --ddd-palette-color-4: var(--simple-colors-default-theme-cyan-7);
    --ddd-palette-color-5: var(--simple-colors-default-theme-teal-7);
    --ddd-palette-color-6: var(--simple-colors-default-theme-blue-grey-11);
    --ddd-palette-color-7: var(--simple-colors-default-theme-amber-7);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-default-theme-indigo-12);
    --ddd-palette-text-color-2: var(
      --simple-colors-default-theme-light-blue-12
    );
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-light-blue-1);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-cyan-1);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-teal-1);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-blue-grey-2);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-amber-1);
  }

  /** Twilight Indigo */
  [data-palette="twilight-indigo"],
  [data-palette="13"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-deep-purple-1);
    --ddd-palette-color-2: var(--simple-colors-default-theme-indigo-3);
    --ddd-palette-color-3: var(--simple-colors-default-theme-indigo-6);
    --ddd-palette-color-4: var(--simple-colors-default-theme-deep-purple-8);
    --ddd-palette-color-5: var(--simple-colors-default-theme-purple-10);
    --ddd-palette-color-6: var(--simple-colors-default-theme-blue-grey-10);
    --ddd-palette-color-7: var(--simple-colors-default-theme-blue-grey-12);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(
      --simple-colors-default-theme-deep-purple-12
    );
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-indigo-12);
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-indigo-12);
    --ddd-palette-text-color-4: var(
      --simple-colors-default-theme-deep-purple-1
    );
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-purple-2);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-blue-grey-1);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-blue-grey-2);
  }

  /** Evergreen Earth */
  [data-palette="evergreen-earth"],
  [data-palette="14"] {
    --ddd-palette-color-1: var(--simple-colors-default-theme-green-2);
    --ddd-palette-color-2: var(--simple-colors-default-theme-green-5);
    --ddd-palette-color-3: var(--simple-colors-default-theme-light-green-7);
    --ddd-palette-color-4: var(--simple-colors-default-theme-lime-9);
    --ddd-palette-color-5: var(--simple-colors-default-theme-brown-7);
    --ddd-palette-color-6: var(--simple-colors-default-theme-amber-8);
    --ddd-palette-color-7: var(--simple-colors-default-theme-brown-11);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--simple-colors-default-theme-green-12);
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-green-12);
    --ddd-palette-text-color-3: var(
      --simple-colors-default-theme-light-green-1
    );
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-lime-1);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-brown-1);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-amber-1);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-brown-2);
  }

  /** Graphite Contrast */
  [data-palette="graphite-contrast"],
  [data-palette="15"] {
    --ddd-palette-color-1: var(--ddd-theme-default-coalyGray);
    --ddd-palette-color-2: var(--simple-colors-default-theme-blue-grey-9);
    --ddd-palette-color-3: var(--simple-colors-default-theme-grey-8);
    --ddd-palette-color-4: var(--simple-colors-default-theme-grey-5);
    --ddd-palette-color-5: var(--simple-colors-default-theme-blue-grey-3);
    --ddd-palette-color-6: var(--simple-colors-default-theme-cyan-7);
    --ddd-palette-color-7: var(--simple-colors-default-theme-amber-7);

    --ddd-palette-video-player-color: var(--ddd-theme-default-black);

    /* text colors; to be used on top of corresponding palette-color */
    --ddd-palette-text-color-1: var(--ddd-theme-default-white);
    --ddd-palette-text-color-2: var(--simple-colors-default-theme-blue-grey-12);
    --ddd-palette-text-color-3: var(--simple-colors-default-theme-grey-12);
    --ddd-palette-text-color-4: var(--simple-colors-default-theme-grey-2);
    --ddd-palette-text-color-5: var(--simple-colors-default-theme-blue-grey-12);
    --ddd-palette-text-color-6: var(--simple-colors-default-theme-cyan-1);
    --ddd-palette-text-color-7: var(--simple-colors-default-theme-amber-1);
  }
`;

// export that has all of them for easy stamping as a single sheet
const DDDAllStyles = [
  DDDGlobalStyles,
  DDDVariables,
  DDDPaletteStyles,
  ...DDDDataAttributes,
  DDDReset,
  DDDBreadcrumb,
  DDDExtra,
  DDDLetterSpacing,
  DDDBoxShadow,
  DDDBorderRadius,
  DDDBackground,
  DDDFontClasses,
  DDDFontWeight,
  DDDAnimations,
];

/**
 * Need to think about support for multiple Design systems at the global level
 * for example, simple colors + DDD
 * Need to test if we can actually start as one and remove and use another
 * clean-portfolio-theme would be a good one to attempt to leverage
 */

class DesignSystem extends i {
  constructor() {
    super();
    this.active = null;
    this.systems = [];
    this.__loadedIntegrations = {};
  }
  static get tag() {
    return "design-system";
  }

  static get properties() {
    return {
      active: { type: String },
      systems: { type: Object },
    };
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "active" && this[propName]) {
        // remove the current global stylesheet / adopted styles for the design system
        // replace it with the new active one
        if (
          this.systems[this.active] &&
          globalThis.document &&
          globalThis.document.head
        ) {
          this.applyDesignSystem(
            oldValue ? this.systems[oldValue] : null,
            this.systems[this.active],
          );
          const context = this._integrationContextFromRuntime();
          Promise.resolve(this.loadActiveSystemIntegrations(context))
            .catch((e) => {
              console.warn(e);
            })
            .finally(() => {
              this._rehydrateHAXElementList();
              globalThis.dispatchEvent(
                new CustomEvent("design-system-active-changed", {
                  bubbles: true,
                  cancelable: false,
                  composed: true,
                  detail: {
                    active: this.active,
                    previous: oldValue || null,
                    context,
                  },
                }),
              );
            });
        }
      }
    });
  }
  // add a system so that we can leverage it later
  addDesignSystem(system) {
    if (system.name && system.styles && system.fonts) {
      this.systems[system.name] = system;
    }
  }
  _integrationContextFromRuntime() {
    let editMode = false;
    let isAuthenticated = true;
    if (
      globalThis.HaxStore &&
      typeof globalThis.HaxStore.requestAvailability === "function"
    ) {
      const haxStore = globalThis.HaxStore.requestAvailability();
      editMode = !!haxStore.editMode;
    }
    if (
      globalThis.HAXCMS &&
      globalThis.HAXCMS.instance &&
      globalThis.HAXCMS.instance.store &&
      typeof globalThis.HAXCMS.instance.store.isLoggedIn !== "undefined"
    ) {
      isAuthenticated = !!globalThis.HAXCMS.instance.store.isLoggedIn;
    }
    return {
      editMode,
      isAuthenticated,
    };
  }
  _integrationCacheKey(systemName, integrationName) {
    return `${systemName}::${integrationName}`;
  }
  async loadSystemIntegration(
    systemName,
    integrationName = "hax",
    context = {},
  ) {
    const system = this.systems[systemName];
    if (
      !system ||
      !system.integrations ||
      !system.integrations[integrationName]
    ) {
      return;
    }
    const integration = system.integrations[integrationName];
    if (
      !integration ||
      (!integration.module && typeof integration.importer !== "function")
    ) {
      return;
    }
    if (
      integration.shouldLoad &&
      typeof integration.shouldLoad === "function" &&
      !integration.shouldLoad(context)
    ) {
      return;
    }
    const cacheKey = this._integrationCacheKey(systemName, integrationName);
    if (this.__loadedIntegrations[cacheKey]) {
      return;
    }
    try {
      const mod =
        typeof integration.importer === "function"
          ? await integration.importer()
          : await import(integration.module);
      const payload = {
        manager: this,
        systemName,
        system,
        integrationName,
        integration,
        context,
        options: integration.options || {},
      };
      if (
        integration.exportName &&
        typeof mod[integration.exportName] === "function"
      ) {
        await mod[integration.exportName](payload);
      } else if (typeof mod.default === "function") {
        await mod.default(payload);
      }
      this.__loadedIntegrations[cacheKey] = true;
    } catch (e) {
      console.warn(e);
    }
  }
  async loadActiveSystemIntegrations(context = {}, integrationName = "hax") {
    if (!this.active) {
      return;
    }
    await this.loadSystemIntegration(this.active, integrationName, context);
  }
  _rehydrateHAXElementList() {
    if (
      !globalThis.HaxStore ||
      typeof globalThis.HaxStore.requestAvailability !== "function"
    ) {
      return;
    }
    const HAXStore = globalThis.HaxStore.requestAvailability();
    if (!HAXStore || typeof HAXStore.designSystemHAXProperties !== "function") {
      return;
    }
    Object.keys(HAXStore.elementList || {}).forEach((registeredTag) => {
      if (HAXStore.elementList[registeredTag]) {
        HAXStore.elementList[registeredTag] =
          HAXStore.designSystemHAXProperties(
            HAXStore.elementList[registeredTag],
            registeredTag,
          );
      }
    });
  }

  applyDesignSystem(oldSystem, newSystem) {
    // ensure we clean up the old one
    if (oldSystem) {
      // remove the global css style / fonts
      try {
        if (globalThis.document.adoptedStyleSheets) {
          globalThis.document.adoptedStyleSheets.map((sheet, index) => {
            if (sheet.ds) {
              globalThis.document.adoptedStyleSheets.splice(index, 1);
            }
          });
        }
      } catch (e) {
        const oldStyleSafariBs = globalThis.document.createElement("style");
        oldStyleSafariBs.innerHTML = globalStyles;
        globalThis.document.head.appendChild(oldStyleSafariBs);
      }
      if (oldSystem.fonts) {
        globalThis.document.head
          .querySelectorAll("[data-ds]")
          .forEach((font) => {
            font.remove();
          });
      }
      if (oldSystem.onload) {
        globalThis.document.onload = null;
      }
    }
    // theoretically could turn something on then back off again
    if (newSystem) {
      // convert css into text content of arrays mashed together
      // this way we can inject it into a global style sheet
      let globalStyles = newSystem.styles
        .map((st) => (st.cssText ? st.cssText : ""))
        .join("");
      try {
        const adoptableDS = new CSSStyleSheet();
        // flag it so we can remove it later
        adoptableDS.ds = true;
        adoptableDS.replaceSync(globalStyles);
        // THIS FLAG MAKES HAX LOAD IT IN ITS SHADOW ROOT!!!!
        if (newSystem.hax) {
          adoptableDS.hax = true;
        }
        // Combine the existing adopted sheets if we need to but these will work everywhere
        // and are very fast
        globalThis.document.adoptedStyleSheets = [
          ...globalThis.document.adoptedStyleSheets,
          adoptableDS,
        ];
      } catch (e) {
        const oldStyleSafariBs = globalThis.document.createElement("style");
        oldStyleSafariBs.innerHTML = globalStyles;
        globalThis.document.head.appendChild(oldStyleSafariBs);
      }
      if (newSystem.fonts) {
        newSystem.fonts.forEach((font) => {
          const link = globalThis.document.createElement("link");
          link.setAttribute("href", font);
          link.setAttribute("rel", "stylesheet");
          link.setAttribute("fetchpriority", "low");
          link.setAttribute("data-ds", "font");
          globalThis.document.head.appendChild(link);
        });
      }
      if (newSystem.onload) {
        globalThis.document.onload = newSystem.onload();
      }
    }
  }
}

globalThis.customElements.define(DesignSystem.tag, DesignSystem);

globalThis.DesignSystemManager = globalThis.DesignSystemManager || {};
globalThis.DesignSystemManager.requestAvailability = () => {
  if (
    !globalThis.DesignSystemManager.instance &&
    globalThis.document &&
    globalThis.document.body
  ) {
    let ds = globalThis.document.createElement("design-system");
    globalThis.document.body.appendChild(ds);
    globalThis.DesignSystemManager.instance = ds;
  }
  return globalThis.DesignSystemManager.instance;
};

const DesignSystemManager =
  globalThis.DesignSystemManager.requestAvailability();

/**
 * Copyright 2024
 * @license Apache-2.0, see License.md for full details.
 */

// super class so we can mix styles into other things more easily
const DDDSuper = function (SuperClass) {
  return class extends SuperClass {
    constructor() {
      super();
      this.isSafari = globalThis.safari !== undefined;
      if (!DesignSystemManager.systems.ddd) {
        DesignSystemManager.addDesignSystem({
          name: "ddd",
          styles: DDDAllStyles,
          fonts: DDDFonts,
          integrations: {
            hax: {
              importer: () =>
                Promise.resolve().then(function () { return DDDStyleGuideAuthoring; }),
              exportName: "registerDDDStyleGuideAuthoring",
              shouldLoad: (context) =>
                !!context &&
                !!context.editMode &&
                context.isAuthenticated !== false,
              options: {
                HAXOptionSampleFactory,
              },
            },
          },
          onload: () => {
            // check for css feature support
            if (!CSS.supports("initial-letter", "1")) {
              console.warn("CSS feature: initial-letter not supported");
              console.warn("Adding dropCap-noSupport class");
              globalThis.document.body.classList.add("dropCap-noSupport");
            }
          },
          hax: true,
        });
        DesignSystemManager.active = "ddd";
      }
    }
    static get properties() {
      return {
        ...super.properties,
        isSafari: { type: Boolean, reflect: true, attribute: "is-safari" },
      };
    }
    /**
     * LitElement style callback
     */
    static get styles() {
      // support for using in other classes
      let styles = [];
      if (super.styles) {
        styles = super.styles;
      }
      return [
        styles,
        DDDReset,
        i$3`
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              transition-delay: 0ms !important;
              scroll-behavior: auto !important;
            }
          }
        `,
      ];
    }
  };
};

// autoloads fonts and gives it a tag name; this is useful
class DDD extends DDDSuper(SimpleColorsSuper(i)) {
  constructor() {
    super();
  }
  static get tag() {
    return "d-d-d";
  }
}

globalThis.customElements.define(DDD.tag, DDD);

class DDDSample extends DDDSuper(i) {
  constructor() {
    super();
    this.type = null;
    this.option = 0;
  }

  static get styles() {
    return [
      super.styles,
      ...DDDDataAttributes,
      i$3`
        :host {
          display: flex;
          min-height: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-1) 0;
          margin: 0;
          font-size: var(--ddd-font-size-4xs);
          line-height: normal;
        }
        :host([type="accent"]:hover),
        :host([type="primary"]:hover) {
          color: black;
          background-color: light-dark(
            var(--ddd-theme-default-limestoneMaxLight),
            var(--ddd-theme-default-limestoneGray)
          );
        }

        :host([type="accent"]) .sample,
        :host([type="primary"]) .sample {
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-xs);
          box-shadow: var(--ddd-boxShadow-sm);
          height: var(--ddd-spacing-4);
          width: var(--ddd-spacing-8);
          display: inline-block;
        }

        :host([type="border"]) .sample,
        :host([type="border-radius"]) .sample,
        :host([type="box-shadow"]) .sample {
          --ddd-theme-primary: var(--ddd-sample-theme-primary, black);
          --ddd-theme-accent: var(
            --ddd-sample-theme-accent,
            var(--ddd-accent-3)
          );
          background-color: var(--ddd-theme-accent);
          border-color: var(--ddd-theme-primary);
          height: var(--ddd-spacing-4);
          width: var(--ddd-spacing-8);
          display: inline-block;
        }
        :host([type="border"]) .sample {
          height: calc(var(--ddd-spacing-4) - var(--ddd-theme-border-size));
          width: calc(var(--ddd-spacing-8) - var(--ddd-theme-border-size));
        }
        :host([type="border-radius"]) .sample {
          border: var(--ddd-border-lg);
          height: var(--ddd-spacing-8);
          width: var(--ddd-spacing-8);
          border-color: var(--ddd-theme-primary);
          clip-path: polygon(50% 0, 0 50%, 0 0, 0 0);
          transform: scale(4);
          padding: 0;
          margin-left: 64px;
          margin-top: 64px;
        }
        :host([type="box-shadow"]) .sample {
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-primary);
          margin: 0 12px 12px 12px;
        }

        :host([type="accent"]:hover) .sample,
        :host([type="primary"]:hover) .sample {
          border-color: black;
        }
        :host([type="border"]) .label,
        :host([type="box-shadow"]) .label,
        :host([type="accent"]) .label,
        :host([type="primary"]) .label,
        :host([type="margin"]) .label,
        :host([type="padding"]) .label {
          font-size: var(--ddd-font-size-4xs);
          margin-left: var(--ddd-spacing-3);
          display: inline-block;
          vertical-align: top;
        }
        :host([type="border-radius"]) .label {
          margin-left: calc(-1 * var(--ddd-spacing-5));
          display: inline-block;
          vertical-align: top;
          height: var(--ddd-spacing-20);
          line-height: var(--ddd-spacing-20);
        }

        :host([type="margin"]) .label,
        :host([type="padding"]) .label {
          font-weight: var(--ddd-font-weight-bold);
        }
        :host([type="accent"]) .sample {
          background-color: var(--ddd-theme-accent);
        }
        :host([type="primary"]) .sample {
          background-color: var(--ddd-theme-primary);
        }

        :host([type="margin"]) .sample[data-margin],
        :host([type="padding"]) .sample {
          display: inline-block;
          height: var(--ddd-spacing-6);
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          background-color: var(--ddd-primary-2);
          margin: 0;
        }

        /* design treatments may require display block */
        :host([type="design-treatment"]) .label {
          display: block;
          font-weight: bold;
          --ddd-theme-primary: var(
            --ddd-sample-theme-primary,
            var(--ddd-primary-0)
          );
          min-height: calc(
            (var(--initialLetter) / 3 * var(--ddd-theme-body-font-size) * 1.5) +
              20px
          );
        }

        :host([type="design-treatment"][option="bg"]) .label {
          color: var(
            --ddd-theme-bgContrast,
            var(--lowContrast-override, black)
          );
        }

        :host([type="font-weight"]) .label,
        :host([type="font-family"]) .label {
          font-size: var(--ddd-font-size-s);
        }

        /* @hack just for the docs bc we can't visualize margins */
        [data-margin="center"] {
          margin-left: auto;
          margin-right: auto;
        }
        [data-margin="xs"] {
          padding: var(--ddd-spacing-2);
        }
        [data-margin="s"] {
          padding: var(--ddd-spacing-4);
        }
        [data-margin="m"] {
          padding: var(--ddd-spacing-8);
        }
        [data-margin="l"] {
          padding: var(--ddd-spacing-12);
        }
        [data-margin="xl"] {
          padding: var(--ddd-spacing-16);
        }

        /* @hack from normal presentation so that it renders nicely here */
        [data-instructional-action]::before {
          padding: 6px 0 0;
          margin: 8px 16px 0 0;
        }

        /* @hack so that we reduce the size of the drop cap or it'll be ridiculous */
        :host([type="design-treatment"])
          .label[data-design-treatment^="dropCap"]::first-letter {
          -webkit-initial-letter: calc(var(--initialLetter) / 3);
          initial-letter: calc(var(--initialLetter) / 3);
        }
        /* @hack so we can see fonts relative to each other, not exact size */
        :host([type="font-size"]) span ::slotted(*) {
          font-size: var(--ddd-font-size-xs);
        }
        :host([type="font-size"]) .label {
          font-size: 0.8em;
        }
        :host([option^="type"]) .label {
          font-size: 0.5em;
        }
        :host([option^="type"]) .label::after {
          content: " (50% scale)";
          font-size: var(--ddd-font-size-4xs);
        }
      `,
    ];
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    if (changedProperties.has("type") && this.shadowRoot) {
      let span;
      // accent, primary, spacing
      if (
        [
          "accent",
          "primary",
          "padding",
          "margin",
          "border-radius",
          "box-shadow",
          "border",
        ].includes(this.type)
      ) {
        span = this.shadowRoot.querySelector("span.sample");
      } else if (this.type === "font-size") {
        span = this.shadowRoot.querySelector("div.wrapper");
      } else {
        span = this.shadowRoot.querySelector("span.label");
      }
      for (let i in ApplicationAttributeData) {
        span.removeAttribute(`data-${i}`);
      }
      // delay to ensure prev executes in order
      setTimeout(() => {
        span.setAttribute(`data-${this.type}`, this.option);
      }, 0);
    }
    if (changedProperties.has("option") && this.shadowRoot && this.type) {
      let span = this.shadowRoot.querySelector(`span[data-${this.type}]`);
      if (span) {
        span.setAttribute(`data-${this.type}`, this.option);
      }
    }
  }

  render() {
    return b`
      <div class="wrapper">
        <span class="sample"></span
        ><span class="label"
          >${ApplicationAttributeData[this.type][this.option]}<slot></slot
        ></span>
      </div>
    `;
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
      option: { type: String },
    };
  }

  static get tag() {
    return "d-d-d-sample";
  }
}

globalThis.customElements.define(DDDSample.tag, DDDSample);

/**
 * Copyright 2021 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text
 */
// register globally so we can make sure there is only one
globalThis.I18NManagerStore = globalThis.I18NManagerStore || {};
globalThis.I18NManagerStore.requestAvailability = () => {
  if (
    !globalThis.I18NManagerStore.instance &&
    globalThis.document &&
    globalThis.document.body
  ) {
    globalThis.I18NManagerStore.instance =
      globalThis.document.createElement("i18n-manager");
    globalThis.document.body.appendChild(globalThis.I18NManagerStore.instance);
  }
  return globalThis.I18NManagerStore.instance;
};
const I18NManagerStore =
  globalThis.I18NManagerStore.requestAvailability();
const FALLBACK_LANG = "en";
const FALLBACK_DIR = "ltr";
/**
 * `i18n-manager`
 * `internationalization management singleton and helper classes`
 * @demo demo/index.html
 * @element i18n-manager
 */
class I18NManager extends i {
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.windowControllers = new AbortController();
    // fetch caching to reduce calls for json files
    this.fetchTargets = {};
    // reference to all elements that care about localization
    this.elements = [];
    // quick set of all locales
    this.locales = new Set([]);
    // translation manifest (lazy loaded when needed)
    this.translationManifest = null;
    this.manifestLoaded = false;
    this.manifestLoading = false;
    // set initially based on document
    this.lang = this.documentLang;
    this.dir = this.documentDir;
  }
  /**
   * Set document language from these common sources
   */
  get documentLang() {
    return (
      globalThis.document.body.getAttribute("xml:lang") ||
      globalThis.document.body.getAttribute("lang") ||
      globalThis.document.documentElement.getAttribute("xml:lang") ||
      globalThis.document.documentElement.getAttribute("lang") ||
      globalThis.navigator.language ||
      FALLBACK_LANG
    );
  }
  /**
   * Set document direction from these common sources
   */
  get documentDir() {
    return (
      globalThis.document.body.getAttribute("xml:dir") ||
      globalThis.document.body.getAttribute("dir") ||
      globalThis.document.documentElement.getAttribute("xml:dir") ||
      globalThis.document.documentElement.getAttribute("dir") ||
      FALLBACK_DIR
    );
  }
  /**
   * Life cycle
   */
  connectedCallback() {
    this.__ready = true;
    globalThis.addEventListener(
      "i18n-manager-register-element",
      this.registerLocalizationEvent.bind(this),
      { signal: this.windowControllers.signal },
    );

    globalThis.addEventListener(
      "languagechange",
      this.changeLanguageEvent.bind(this),
      { signal: this.windowControllers.signal },
    );

    // Observe document <html>/<body> for lang/dir attribute changes to keep in sync
    try {
      this._docObserver = new MutationObserver((mutations) => {
        let nextLang = null;
        let nextDir = null;
        mutations.forEach((m) => {
          if (m.type === "attributes") {
            const name = m.attributeName;
            if (name === "lang" || name === "xml:lang") {
              nextLang = this.documentLang;
            }
            if (name === "dir" || name === "xml:dir") {
              nextDir = this.documentDir;
            }
          }
        });
        if (nextLang && nextLang !== this.lang) {
          this.lang = nextLang;
        }
        if (nextDir && nextDir !== this.dir) {
          this.dir = nextDir;
        }
      });
      const opts = {
        attributes: true,
        attributeFilter: ["lang", "xml:lang", "dir", "xml:dir"],
      };
      if (globalThis.document && globalThis.document.documentElement) {
        this._docObserver.observe(globalThis.document.documentElement, opts);
      }
      if (globalThis.document && globalThis.document.body) {
        this._docObserver.observe(globalThis.document.body, opts);
      }
    } catch (e) {
      console.warn("i18n-manager: Failed to start document observer", e);
    }
  }
  /**
   * Life cycle
   */
  disconnectedCallback() {
    this.windowControllers.abort();
    if (this._docObserver) {
      try {
        this._docObserver.disconnect();
      } catch (e) {}
      this._docObserver = null;
    }
  }
  /**
   * Browser level languagechange event
   */
  changeLanguageEvent(e) {
    // will trigger the language to update in all related elements
    // Use provided detail if available, otherwise fall back to current document language
    const next = e && e.detail ? e.detail : this.documentLang;
    if (next) {
      this.lang = next;
    }
  }
  /**
   * Register a localization via event; this allow for a 0 dependency solution!
   */
  registerLocalizationEvent(e) {
    let detail = this.detailNormalize(e.detail);
    // ensure we have a namespace and localesPath for later use
    // locales is optional for manifest-based detection
    if (detail.namespace && detail.localesPath) {
      this.registerLocalization(detail);
    }
  }
  /**
   * Apply normalization to all details bubbling up to improve
   * flexibility and patching to how other people implement our
   * API. This also can improve DX downstream by making educated
   * guesses as to intent (like namespace, localesPath, updateCallback)
   */
  detailNormalize(detail) {
    if (!detail.namespace && detail.context) {
      detail.namespace = detail.context.tagName.toLowerCase();
    }
    // support fallback calls for requestUpdate (LitElement) and render if nothing set
    if (!detail.updateCallback && detail.context) {
      if (detail.context.requestUpdate) {
        detail.updateCallback = "requestUpdate";
      } else if (detail.context.render) {
        detail.updateCallback = "render";
      }
    }
    if (!detail.localesPath && detail.basePath) {
      // clean up path and force adding locales. part security thing as well
      detail.localesPath = `${decodeURIComponent(detail.basePath)}/../locales`;
    }
    // minimum requirement to operate but still
    // should pull from other namespace if exists
    if (detail.context && detail.namespace) {
      // establish the fallback automatically if we are supplied defaults
      if (detail.context.t) {
        detail.context._t = { ...detail.context.t };
      }
      let match = this.elements.filter((el) => {
        // Match by namespace and localesPath, locales is optional for manifest-based
        if (el.namespace == detail.namespace && el.localesPath) {
          return true;
        }
      });
      if (match && match.length && match[0]) {
        detail.localesPath = match[0].localesPath;
        // Only copy locales if they exist (for legacy support)
        if (match[0].locales) {
          detail.locales = match[0].locales;
        }
      }
    }
    return detail;
  }
  /**
   * Register a localization with the manager
   */
  registerLocalization(detail) {
    // ensure no dual registration of context; meaning same object twice
    if (
      (!detail.context &&
        this.elements.filter((e) => {
          return e.namespace === detail.namespace;
        }).length === 0) ||
      this.elements.filter((e) => {
        return e.context === detail.context;
      }).length === 0
    ) {
      detail = this.detailNormalize(detail);
      this.elements.push(detail);

      // store in this.locales for quick "do we support this" look up
      if (detail && detail.locales) {
        detail.locales.forEach(this.locales.add, this.locales);
      }
      // timing issue, see if we are ready + a language and that it happened PRIOR
      // to registration just now but match against locales we support
      // For manifest-based elements (no locales), always trigger update if language is set
      if (
        this.lang &&
        this.__ready &&
        ((detail.locales && detail.locales.includes(this.lang)) ||
          (!detail.locales &&
            this.lang !== "en" &&
            !this.lang.startsWith("en-")))
      ) {
        // prevent flooding w/ lots of translatable elements
        clearTimeout(this._debounce);
        this._debounce = setTimeout(() => {
          this.updateLanguage(this.lang);
        }, 0);
      }
    }
  }
  /**
   * Lazy load the translation manifest only when needed (non-English language)
   */
  async loadTranslationManifest() {
    if (this.manifestLoaded || this.manifestLoading) {
      return this.translationManifest;
    }

    this.manifestLoading = true;
    try {
      const manifestUrl = new URL(
        "./lib/translation-manifest.json",
        import.meta.url,
      ).href;
      const response = await fetch(manifestUrl);
      if (response.ok) {
        const data = await response.json();
        this.translationManifest = data.manifest || {};
        this.manifestLoaded = true;
      } else {
        console.warn(
          "Translation manifest not found, falling back to component locales",
        );
        this.translationManifest = {};
        this.manifestLoaded = true;
      }
    } catch (e) {
      console.warn("Failed to load translation manifest:", e.message);
      this.translationManifest = {};
      this.manifestLoaded = true;
    } finally {
      this.manifestLoading = false;
    }
    return this.translationManifest;
  }
  /**
   * Check if a namespace supports a specific language
   * Returns false if manifest is not loaded and language needs manifest
   */
  hasTranslation(namespace, language) {
    if (!this.manifestLoaded || !this.translationManifest) {
      // If manifest isn't loaded but we need it, return false to let component locales handle it
      return false;
    }
    return (
      this.translationManifest[namespace] &&
      this.translationManifest[namespace].includes(language)
    );
  }
  /**
   * Determine if we need to load the manifest for this language
   */
  needsManifest(language) {
    // Only load manifest for non-English languages
    return language && language !== "en" && !language.startsWith("en-");
  }
  /**
   * Fetch and parse JSON, returning false when URL/file is unavailable or invalid
   */
  async _fetchJsonTarget(fetchTarget) {
    try {
      const response = await fetch(fetchTarget);
      if (response && response.ok && response.json) {
        return await response.json();
      }
    } catch (e) {}
    return false;
  }
  /**
   * Convention we use
   */
  static get tag() {
    return "i18n-manager";
  }
  /**
   * Return language file for a specific context
   */
  async loadNamespaceFile(ns, lang = this.lang) {
    const langPieces = lang.split("-");
    let nsMatch = this.elements.filter((el) => {
      return el.namespace === ns;
    });
    // Use the first match for namespace info, multiple elements can share the same namespace
    if (nsMatch && nsMatch.length >= 1) {
      const el = nsMatch[0];

      // Load manifest if needed (only for non-English)
      if (this.needsManifest(lang) && !this.manifestLoaded) {
        await this.loadTranslationManifest();
      }

      // Check manifest first to avoid unnecessary requests
      const supportsExact = this.hasTranslation(ns, lang);
      const supportsBase = this.hasTranslation(ns, langPieces[0]);

      // Fallback to component locales if manifest not loaded or doesn't contain info
      const componentSupportsExact = el.locales && el.locales.includes(lang);
      const componentSupportsBase =
        el.locales && el.locales.includes(langPieces[0]);

      // If we have manifest data, use it; otherwise fallback to component data
      const shouldLoadExact =
        supportsExact || (!this.manifestLoaded && componentSupportsExact);
      const shouldLoadBase =
        supportsBase || (!this.manifestLoaded && componentSupportsBase);

      // For manifest-based elements (no locales), try to load if manifest is loaded and supports it
      // or if manifest isn't loaded yet, attempt to load anyway (will 404 if not available)
      const isManifestBased = !el.locales;
      const shouldAttemptManifestLoad =
        isManifestBased &&
        this.needsManifest(lang) &&
        (supportsExact || supportsBase || !this.manifestLoaded);

      if (!shouldLoadExact && !shouldLoadBase && !shouldAttemptManifestLoad) {
        return {};
      }

      var fetchTarget = "";
      if (shouldLoadExact || (isManifestBased && supportsExact)) {
        fetchTarget = `${el.localesPath}/${el.namespace}.${lang}.json`;
      } else if (shouldLoadBase || (isManifestBased && supportsBase)) {
        fetchTarget = `${el.localesPath}/${el.namespace}.${langPieces[0]}.json`;
      } else if (
        isManifestBased &&
        !this.manifestLoaded &&
        this.needsManifest(lang)
      ) {
        // For manifest-based elements, try exact match first when manifest not loaded yet
        fetchTarget = `${el.localesPath}/${el.namespace}.${lang}.json`;
      }

      if (fetchTarget == "") {
        return {};
      }

      // see if we had this previous to avoid another request
      if (!this.fetchTargets[fetchTarget]) {
        this.fetchTargets[fetchTarget] =
          await this._fetchJsonTarget(fetchTarget);
      }
      return this.fetchTargets[fetchTarget];
    }
  }
  /**
   * trigger an update of the language after loading everything
   */
  async updateLanguage(lang) {
    if (lang) {
      const langPieces = lang.split("-");

      // Load manifest if needed (only for non-English)
      if (this.needsManifest(lang) && !this.manifestLoaded) {
        await this.loadTranslationManifest();
      }
      // get all exact matches as well as partial matches using manifest
      const processList = this.elements.filter((el) => {
        try {
          // Use manifest if available, fallback to component locales
          const supportsExact = this.hasTranslation(el.namespace, lang);
          const supportsBase = this.hasTranslation(el.namespace, langPieces[0]);
          // Fallback to component locales if not in manifest
          const componentSupportsExact =
            el.locales && el.locales.includes(lang);
          const componentSupportsBase =
            el.locales && el.locales.includes(langPieces[0]);

          // For elements without locales, include them if:
          // 1. The manifest is loaded and supports the language, OR
          // 2. The manifest isn't loaded yet but the language needs manifest (let's try to load it)
          const manifestBasedSupport =
            !el.locales &&
            ((this.manifestLoaded && (supportsExact || supportsBase)) ||
              (!this.manifestLoaded && this.needsManifest(lang)));

          return (
            supportsExact ||
            supportsBase ||
            componentSupportsExact ||
            componentSupportsBase ||
            manifestBasedSupport
          );
        } catch (e) {
          console.error("i18n registration incorrect in:", el, e);
        }
      });
      const fallBack = this.elements.filter((el) => {
        try {
          const supportsExact = this.hasTranslation(el.namespace, lang);
          const supportsBase = this.hasTranslation(el.namespace, langPieces[0]);
          const componentSupportsExact =
            el.locales && el.locales.includes(lang);
          const componentSupportsBase =
            el.locales && el.locales.includes(langPieces[0]);

          // For elements without locales, check if they're supported by manifest
          const manifestBasedSupport =
            !el.locales &&
            ((this.manifestLoaded && (supportsExact || supportsBase)) ||
              (!this.manifestLoaded && this.needsManifest(lang)));

          return (
            !supportsExact &&
            !supportsBase &&
            !componentSupportsExact &&
            !componentSupportsBase &&
            !manifestBasedSupport
          );
        } catch (e) {
          return true; // Fallback on error
        }
      });
      // no matches found, now we should fallback to defaults in the elements
      if (fallBack.length !== 0) {
        // fallback to documentLanguage
        for (var i in fallBack) {
          let el = fallBack[i];
          // verify we have a context
          if (el.context) {
            // reset to the fallback language t value
            el.context.t = { ...el.context._t };
            // support a forced update / function to run when it finishes
            if (el.updateCallback) {
              el.context[el.updateCallback]();
            }
          }
        }
      }
      // run through and match exact matches
      for (var i in processList) {
        let el = processList[i];
        var fetchTarget = "";
        // Use manifest checks first, fallback to component locales
        const supportsExact = this.hasTranslation(el.namespace, lang);
        const supportsBase = this.hasTranslation(el.namespace, langPieces[0]);
        const componentSupportsExact = el.locales && el.locales.includes(lang);
        const componentSupportsBase =
          el.locales && el.locales.includes(langPieces[0]);
        const isManifestBased = !el.locales;

        if (
          supportsExact ||
          componentSupportsExact ||
          (isManifestBased && supportsExact)
        ) {
          fetchTarget = `${el.localesPath}/${el.namespace}.${lang}.json`;
        } else if (
          supportsBase ||
          componentSupportsBase ||
          (isManifestBased && supportsBase)
        ) {
          fetchTarget = `${el.localesPath}/${el.namespace}.${langPieces[0]}.json`;
        } else if (
          isManifestBased &&
          !this.manifestLoaded &&
          this.needsManifest(lang)
        ) {
          // For manifest-based elements, try exact match first when manifest not loaded yet
          fetchTarget = `${el.localesPath}/${el.namespace}.${lang}.json`;
        }
        // Skip if no fetch target was determined
        if (!fetchTarget) {
          continue;
        }
        // see if we had this previous to avoid another request
        if (this.fetchTargets[fetchTarget]) {
          if (el.context) {
            let data = this.fetchTargets[fetchTarget];
            if (data) {
              for (var id in data) {
                el.context.t[id] = data[id];
              }
            }
            el.context.t = { ...el.context.t };
            // support a forced update / function to run when it finishes
            if (el.updateCallback) {
              el.context[el.updateCallback]();
            }
          }
        } else {
          // request the json backing, then make JSON and set the associated values
          // @todo catch this if fetch target was previously requested
          this.fetchTargets[fetchTarget] =
            await this._fetchJsonTarget(fetchTarget);
          if (el.context) {
            let data = this.fetchTargets[fetchTarget];
            // set values
            if (data) {
              for (var id in data) {
                el.context.t[id] = data[id];
              }
            }
            // spread can generate notify statements in downstream elements
            // this probably makes updateCallback irrelevant in reactive
            // projects like LitElement but just to be double sure
            el.context.t = { ...el.context.t };
            // support a forced update / function to run when it finishes
            if (el.updateCallback && el.context) {
              el.context[el.updateCallback]();
            }
          }
        }
      }
    }
  }
  /**
   * Life cycle
   */
  static get observedAttributes() {
    return ["lang", "dir"];
  }
  /**
   * Life cycle
   */
  attributeChangedCallback(attr, oldValue, newValue) {
    // notify of attr change
    if (attr === "lang" || attr === "dir") {
      this.dispatchEvent(
        new CustomEvent(`${attr}-changed`, {
          detail: {
            value: newValue,
          },
        }),
      );
    }
    // we are NOT moving to the default from something
    if (attr === "lang" && newValue && this.__ready) {
      this.updateLanguage(newValue);
    }
  }
  // getters and setters to map props to attributes
  get lang() {
    return this.getAttribute("lang");
  }
  set lang(val) {
    if (!val) {
      this.removeAttribute("lang");
    } else {
      this.setAttribute("lang", val);
    }
  }
  get dir() {
    return this.getAttribute("dir");
  }
  set dir(val) {
    if (!val) {
      this.removeAttribute("dir");
    } else {
      this.setAttribute("dir", val);
    }
  }
}
globalThis.customElements.define(I18NManager.tag, I18NManager);

// SuperClass to simplify wiring up and noticing changes to t values
// this is not required as you can simply use the event system
// to keep to 0 dependencies but this helps simplify and standardize
// integration with lots of downstream i18n files
const I18NMixin = function (SuperClass) {
  return class extends SuperClass {
    /**
     * Life cycle
     */
    constructor() {
      super();
      if (!this.t) {
        this.t = {};
      }
    }
    /**
     * Enhanced data reactivity for LitElement if available
     */
    static get properties() {
      return {
        ...super.properties,
        t: {
          type: Object,
        },
      };
    }
    // pass through to the manager, automatically adding some namespace values
    registerLocalization(detail) {
      // ensure we have a namespace for later use
      if (
        !detail.namespace &&
        detail.context &&
        detail.context.tagName &&
        detail.context.tagName
      ) {
        detail.namespace = detail.context.tagName.toLowerCase();
      }
      // support fallback calls for requestUpdate; you can always supply one
      if (!detail.updateCallback) {
        if (detail.context.requestUpdate) {
          detail.updateCallback = "requestUpdate";
          // automatically set for common VanillaJS convention
        } else if (detail.context.render) {
          detail.updateCallback = "render";
        }
      }
      // auto-detect localePath if we have a basePath
      // this is another short hand that allows for enforcing the location
      // of the locales bucket of files. You can define where these are
      // per request but this helps simplify the original implementation
      if (!detail.localesPath && detail.basePath) {
        // clean up path and force adding locales. part security thing as well
        detail.localesPath = `${decodeURIComponent(
          detail.basePath,
        )}/../locales`;
      }
      // register the localization directly, skipping event
      // this also ensures that things leveraging the Mixin will never miss
      // the singleton being registered
      if (I18NManagerStore) {
        I18NManagerStore.registerLocalization(detail);
      }
    }
  };
};

const DEFAULT_QUESTIONS = [
  {
    question: "Apa ibu kota Indonesia?",
    choices: ["Bandung", "Surabaya", "Jakarta", "Medan"],
    correctIndex: 2,
  },
  {
    question: "Berapa hasil dari 7 × 8?",
    choices: ["54", "56", "58", "60"],
    correctIndex: 1,
  },
  {
    question: "Planet terdekat dengan Matahari adalah?",
    choices: ["Venus", "Bumi", "Mars", "Merkurius"],
    correctIndex: 3,
  },
];

class ExplodeQuiz extends I18NMixin(DDDSuper(i)) {
  static get tag() {
    return "explode-quiz";
  }

  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Explode Quiz",
        description:
          "Interactive multiple-choice quiz with confetti and Google Sheets integration",
        icon: "icons:question-answer",
        color: "purple",
        tags: ["Education", "Interactive", "Content"],
      },
      settings: {
        configure: [
          {
            property: "questions",
            title: "Daftar Soal",
            description: "Array soal kustom (JSON)",
            inputMethod: "code-editor",
          },
          {
            property: "scriptFunctionName",
            title: "Nama Fungsi Apps Script",
            description:
              "Nama fungsi Google Apps Script untuk menerima hasil kuis",
            inputMethod: "textfield",
          },
        ],
        advanced: [],
      },
      saveOptions: {
        unsetAttributes: [
          "_screen",
          "_studentName",
          "_currentIndex",
          "_score",
          "_answered",
          "_selectedIndex",
          "_feedbackText",
          "_feedbackPositive",
          "_validationError",
          "_nameInputValue",
          "_editing",
          "_tempQuestions",
          "_editingIndex",
          "_tempQuestionText",
          "_tempChoice0",
          "_tempChoice1",
          "_tempChoice2",
          "_tempChoice3",
          "_tempCorrectIndex",
          "_editorOrigin",
          "editing",
          "editable",
        ],
      },
    };
  }

  static get properties() {
    return {
      ...super.properties,
      questions: {
        type: Array,
        attribute: "questions",
        reflect: true,
        converter: {
          fromAttribute(value) {
            if (!value) return undefined;
            try {
              const parsed = JSON.parse(value);
              return Array.isArray(parsed) ? parsed : undefined;
            } catch (e) {
              console.warn(
                "[explode-quiz] Gagal parse atribut questions, pakai fallback default:",
                e,
              );
              return undefined;
            }
          },
          toAttribute(value) {
            if (!Array.isArray(value)) return null;
            try {
              return JSON.stringify(value);
            } catch (e) {
              console.warn(
                "[explode-quiz] Gagal serialize questions ke atribut:",
                e,
              );
              return null;
            }
          },
        },
      },
      scriptFunctionName: { type: String, attribute: true },
      editable: { type: Boolean, attribute: true, reflect: true },
      editing: { type: Boolean, attribute: true, reflect: true },
      _screen: { state: true },
      _studentName: { state: true },
      _currentIndex: { state: true },
      _score: { state: true },
      _answered: { state: true },
      _selectedIndex: { state: true },
      _feedbackText: { state: true },
      _feedbackPositive: { state: true },
      _validationError: { state: true },
      _nameInputValue: { state: true },
      _editing: { state: true },
      _tempQuestions: { state: true },
      _editingIndex: { state: true },
      // Temporary form state for editor
      _tempQuestionText: { state: true },
      _tempChoice0: { state: true },
      _tempChoice1: { state: true },
      _tempChoice2: { state: true },
      _tempChoice3: { state: true },
      _tempCorrectIndex: { state: true },
      _editorOrigin: { state: true },
    };
  }

  constructor() {
    super();
    this.questions = DEFAULT_QUESTIONS;
    this.scriptFunctionName = "submitQuizResult";
    this.editable = false;
    this._screen = "name";
    this._studentName = "";
    this._currentIndex = 0;
    this._score = 0;
    this._answered = false;
    this._selectedIndex = -1;
    this._feedbackText = "";
    this._feedbackPositive = false;
    this._validationError = "";
    this._nameInputValue = "";
    this._editing = false;
    this._tempQuestions = [];
    this._editingIndex = -1;
    this._tempQuestionText = "";
    this._tempChoice0 = "";
    this._tempChoice1 = "";
    this._tempChoice2 = "";
    this._tempChoice3 = "";
    this._tempCorrectIndex = "0";
    this._editorOrigin = "result";
    this.t = {
      quizTitle: "Kuis Interaktif",
      quizInstruction: "Masukkan nama Anda untuk memulai kuis.",
      namePlaceholder: "Nama Anda...",
      startButton: "Mulai Kuis",
      validationNameEmpty: "Nama tidak boleh kosong.",
      validationNameShort: "Nama harus lebih dari 2 karakter.",

      // Layar_Soal
      questionOf: "Soal",
      of: "dari",
      scoreLabel: "Skor",
      feedbackCorrect: "Mantap, Benar!",
      feedbackWrongPrefix: "Yah, Salah. Jawaban benar: ",

      // Layar_Hasil
      resultHeading: "Hasil Kuis",
      resultName: "Nama",
      resultScore: "Skor",
      resultTotal: "Total Soal",
      resultPercentage: "Persentase",
      messageHigh: "Luar Biasa! Kamu Hebat!",
      messageMedium: "Bagus! Terus Berlatih!",
      messageLow: "Jangan Menyerah! Coba Lagi!",
      restartButton: "Mulai Ulang",

      // Editor
      editTitle: "Edit Soal Kuis",
      closeEditor: "Tutup Editor",
      questionPlaceholder: "Tulis pertanyaan...",
      choicePlaceholder: "Pilihan {N}",
      choiceCorrectLabel: "Benar",
      addQuestionBtn: "Tambah Soal",
      editQuestionBtn: "Edit",
      deleteQuestionBtn: "Hapus",
      saveEditBtn: "Simpan Perubahan",
      cancelEditBtn: "Batal",
      saveAllBtn: "Simpan & Keluar",
      cancelAllBtn: "Batal",
      minQuestionsError: "Minimal 3 soal harus tersedia",
      emptyQuestionError: "Pertanyaan tidak boleh kosong",
      emptyChoiceError: "Semua pilihan jawaban harus diisi",

      // Aksesibilitas aria-label
      ariaNameInput: "Kolom nama siswa",
      ariaStartButton: "Tombol mulai kuis",
      ariaAnswerButton: "Pilihan jawaban",
      ariaRestartButton: "Mulai ulang kuis",
      ariaScoreDisplay: "Skor saat ini",
      ariaProgressLabel: "Kemajuan kuis",
      ariaFeedback: "Umpan balik jawaban",

      // Editor aria-labels
      ariaEditTitle: "Panel editor soal kuis",
      ariaCloseEditor: "Tutup panel editor",
      ariaAddForm: "Formulir tambah soal baru",
      ariaQuestionInput: "Teks pertanyaan",
      ariaChoiceInput: "Pilihan jawaban {N}",
      ariaCorrectChoice: "Pilihan jawaban benar",
      ariaQuestionsList: "Daftar soal yang tersedia",
      ariaQuestionCard: "Kartu soal",
      ariaEditQuestion: "Edit soal ini",
      ariaDeleteQuestion: "Hapus soal ini",
      ariaSaveEdit: "Simpan perubahan soal",
      ariaCancelEdit: "Batal mengedit soal",
      ariaSaveAll: "Simpan semua perubahan dan keluar",
      ariaCancelAll: "Batal semua perubahan dan keluar",
    };
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (this.questions && this.questions.length === 0) {
      this.questions = DEFAULT_QUESTIONS;
    }
  }

  connectedCallback() {
    super.connectedCallback();

    // Dynamic import canvas-confetti
    Promise.resolve().then(function () { return confetti_module$1; })
      .then((mod) => {
        this._confettiFn = mod.default;
      })
      .catch((err) => {
        console.warn(
          "[explode-quiz] canvas-confetti gagal dimuat — efek konfeti dinonaktifkan:",
          err,
        );
        this._confettiFn = null;
      });

    // HAXcms autoloader integration: register with HAXStore element tray
    if (
      globalThis.HaxStore &&
      typeof globalThis.HaxStore.requestAvailability === "function"
    ) {
      const store = globalThis.HaxStore.requestAvailability();
      if (store && !store.elementList[ExplodeQuiz.tag]) {
        store.elementList[ExplodeQuiz.tag] = ExplodeQuiz.haxProperties;
      }
    }
  }

  /** Only true inside HAX editor (hax start / haxcms local dev) */
  get _inHaxEditor() {
    return !!(
      globalThis.HaxStore &&
      typeof globalThis.HaxStore.requestAvailability === "function" &&
      globalThis.HaxStore.requestAvailability().editMode
    );
  }

  _fireConfetti() {
    if (typeof this._confettiFn !== "function") return;
    try {
      const base = {
        ticks: 220,
        gravity: 0.85,
        decay: 0.92,
        startVelocity: 42,
        zIndex: 9999,
      };

      // Center pop
      this._confettiFn({
        ...base,
        particleCount: 70,
        spread: 85,
        scalar: 1.05,
        origin: { x: 0.5, y: 0.62 },
      });

      // Left burst
      this._confettiFn({
        ...base,
        particleCount: 45,
        angle: 58,
        spread: 65,
        scalar: 1.1,
        origin: { x: 0.1, y: 0.7 },
      });

      // Right burst
      this._confettiFn({
        ...base,
        particleCount: 45,
        angle: 122,
        spread: 65,
        scalar: 1.1,
        origin: { x: 0.9, y: 0.7 },
      });
    } catch (err) {
      console.error("[explode-quiz] Konfeti gagal dieksekusi:", err);
    }
  }

  _fireMegaConfetti() {
    if (typeof this._confettiFn !== "function") return;
    try {
      const duration = 900;
      const end = Date.now() + duration;
      const frame = () => {
        this._confettiFn({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"],
        });
        this._confettiFn({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"],
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    } catch (err) {
      console.error("[explode-quiz] Mega konfeti gagal dieksekusi:", err);
    }
  }

  _startQuiz() {
    const trimmed = this._nameInputValue.trim();
    if (trimmed.length <= 2) {
      this._validationError =
        trimmed.length === 0
          ? this.t.validationNameEmpty
          : this.t.validationNameShort;
      return;
    }
    this._studentName = trimmed;
    this._validationError = "";
    this._screen = "question";
  }

  _renderNameScreen() {
    return b`
      <h1 class="quiz-title">${this.t.quizTitle}</h1>
      <p class="quiz-instruction">${this.t.quizInstruction}</p>
      <div class="input-group">
        <input
          id="name-input"
          .value="${this._nameInputValue}"
          @input="${(e) => (this._nameInputValue = e.target.value)}"
          @keydown="${(e) => {
            if (e.key === "Enter") this._startQuiz();
          }}"
          .placeholder="${this.t.namePlaceholder}"
          aria-label="${this.t.ariaNameInput}"
          type="text"
        />
      </div>
      <button
        class="start-btn"
        @click="${this._startQuiz}"
        aria-label="${this.t.ariaStartButton}"
      >
        ${this.t.startButton}
      </button>
      ${this._validationError
        ? b`<p class="validation-error">${this._validationError}</p>`
        : ""}
      <button
        class="edit-questions-btn"
        @click="${this._openEditorFromName}"
        aria-label="${this.t.ariaCloseEditor}"
        ?hidden="${!this._inHaxEditor}"
      >
        ${this.t.editTitle}
      </button>
    `;
  }

  _renderQuestionScreen() {
    const currentQuestion = this.questions[this._currentIndex];
    const progressLabel = `${this.t.questionOf} ${this._currentIndex + 1} ${this.t.of} ${this.questions.length}`;

    return b`
      <header class="quiz-header">
        <span class="progress-label" aria-label="${this.t.ariaProgressLabel}"
          >${progressLabel}</span
        >
        <span class="score-display" aria-label="${this.t.ariaScoreDisplay}"
          >${this.t.scoreLabel}: ${this._score}</span
        >
      </header>

      <div class="question-text">${currentQuestion.question}</div>

      <div class="answer-grid">
        ${currentQuestion.choices.map((choice, index) => {
          let btnClass = "answer-btn";
          if (this._answered) {
            if (index === currentQuestion.correctIndex) {
              btnClass += " answer-btn--correct";
            } else if (index === this._selectedIndex) {
              btnClass += " answer-btn--wrong";
            }
          }

          return b`
            <button
              class="${btnClass}"
              ?disabled="${this._answered}"
              @click="${() => this._selectAnswer(index)}"
              aria-label="${this.t.ariaAnswerButton}: ${choice}"
            >
              ${choice}
            </button>
          `;
        })}
      </div>

      ${this._feedbackText
        ? b`
            <div
              class="feedback-area ${this._feedbackPositive
                ? "positive"
                : "negative"}"
              aria-live="polite"
              aria-label="${this.t.ariaFeedback}"
            >
              ${this._feedbackText}
            </div>
          `
        : ""}
    `;
  }

  _selectAnswer(choiceIndex) {
    if (this._answered) return;

    this._answered = true;
    this._selectedIndex = choiceIndex;

    const currentQuestion = this.questions[this._currentIndex];
    const correctIndex = currentQuestion.correctIndex;
    const isCorrect = choiceIndex === correctIndex;

    if (isCorrect) {
      this._score += 1;
      this._feedbackText = this.t.feedbackCorrect;
      this._feedbackPositive = true;
      this._fireConfetti();
    } else {
      this._feedbackText = `${this.t.feedbackWrongPrefix}${currentQuestion.choices[correctIndex]}`;
      this._feedbackPositive = false;
    }

    // Schedule advance after delay
    setTimeout(() => {
      this._advanceQuiz();
    }, 1200);
  }

  _advanceQuiz() {
    if (this._currentIndex < this.questions.length - 1) {
      this._currentIndex += 1;
      this._answered = false;
      this._selectedIndex = -1;
      this._feedbackText = "";
      this._feedbackPositive = false;
    } else {
      this._submitToSheets(this._studentName, this._score);
      this._screen = "result";
      // Trigger confetti if score >= 80%
      if (this._score / this.questions.length >= 0.8) {
        this._fireConfetti();
      }
    }
  }

  _renderResultScreen() {
    const percentage = Math.round((this._score / this.questions.length) * 100);
    let message = this.t.messageLow;

    if (percentage >= 80) {
      message = this.t.messageHigh;
    } else if (percentage >= 50) {
      message = this.t.messageMedium;
    }

    return b`
      <h2 class="result-heading">${this.t.resultHeading}</h2>

      <div class="result-name">${this.t.resultName}: ${this._studentName}</div>
      <div class="result-score">
        ${this.t.resultScore}: ${this._score} / ${this.questions.length}
      </div>
      <div class="result-percentage">
        ${this.t.resultPercentage}: ${percentage}%
      </div>

      <p class="result-message">${message}</p>

      <button
        class="restart-btn"
        @click="${this._restartQuiz}"
        aria-label="${this.t.ariaRestartButton}"
      >
        ${this.t.restartButton}
      </button>
      <button
        class="edit-questions-btn"
        @click="${this._openEditor}"
        aria-label="${this.t.ariaCloseEditor}"
        ?hidden="${!this._inHaxEditor}"
      >
        ${this.t.editTitle}
      </button>
    `;
  }

  _restartQuiz() {
    this._screen = "name";
    this._studentName = "";
    this._currentIndex = 0;
    this._score = 0;
    this._answered = false;
    this._selectedIndex = -1;
    this._feedbackText = "";
    this._feedbackPositive = false;
    this._validationError = "";
    this._nameInputValue = "";
    this._editing = false;
    this._tempQuestions = [];
    this._editingIndex = -1;
    this._tempQuestionText = "";
    this._tempChoice0 = "";
    this._tempChoice1 = "";
    this._tempChoice2 = "";
    this._tempChoice3 = "";
    this._tempCorrectIndex = "0";
    this._editorOrigin = "result";
  }

  _submitToSheets(name, score) {
    if (
      typeof globalThis.google === "undefined" ||
      !globalThis.google?.script?.run
    ) {
      console.warn(
        "[explode-quiz] google.script.run tidak tersedia — melewati pengiriman ke Sheets",
      );
      return;
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name,
      score,
    };

    globalThis.google.script.run
      .withSuccessHandler(() =>
        console.log("[explode-quiz] Data berhasil dikirim ke Sheets"),
      )
      .withFailureHandler((err) =>
        console.error("[explode-quiz] Gagal mengirim ke Sheets:", err),
      )
      [this.scriptFunctionName](payload);
  }

  _openEditor() {
    // Guard: only allow opening editor from 'result' screen
    if (this._screen !== "result") return;
    if (this._editing) return;

    this._editing = true;
    this._editingIndex = -1;
    // Deep copy questions to tempQuestions
    this._tempQuestions = JSON.parse(JSON.stringify(this.questions));
    this._screen = "editor";
  }

  _openEditorFromName() {
    if (this._screen !== "name") return;
    if (this._editing) return;

    this._editing = true;
    this._editingIndex = -1;
    this._tempQuestions = JSON.parse(JSON.stringify(this.questions));
    // Remember we came from name screen so save/cancel go back there
    this._editorOrigin = "name";
    this._screen = "editor";
  }

  _renderEditorScreen() {
    return b`
      <header class="edit-header">
        <h2 class="edit-title">${this.t.editTitle}</h2>
        <button
          class="close-editor-btn"
          @click="${this._saveAll}"
          aria-label="${this.t.ariaCloseEditor}"
        >
          ${this.t.closeEditor}
        </button>
      </header>

      <div class="editor-content">
        <form class="add-question-form">
          <textarea
            class="question-text-input"
            .value="${this._tempQuestionText}"
            @input="${(e) => (this._tempQuestionText = e.target.value)}"
            placeholder="${this.t.questionPlaceholder}"
            aria-label="${this.t.ariaQuestionInput}"
          ></textarea>

          <div class="choices-container">
            ${[0, 1, 2, 3].map(
              (index) => b`
                <div class="choice-input-wrapper">
                  <input
                    class="choice-input"
                    .value="${this[`_tempChoice${index}`]}"
                    @input="${(e) =>
                      (this[`_tempChoice${index}`] = e.target.value)}"
                    placeholder="${this.t.choicePlaceholder.replace(
                      "{N}",
                      index + 1,
                    )}"
                    aria-label="${this.t.ariaChoiceInput.replace(
                      "{N}",
                      index + 1,
                    )}"
                  />
                  <label class="choice-label">
                    <input
                      type="radio"
                      name="correct-choice"
                      .checked="${this._tempCorrectIndex == index}"
                      @change="${() => (this._tempCorrectIndex = index)}"
                      aria-label="${this.t.ariaCorrectChoice}"
                    />
                    ${this.t.choiceCorrectLabel}
                  </label>
                </div>
              `,
            )}
          </div>

          <button
            type="button"
            class="add-question-btn"
            @click="${this._addQuestion}"
            aria-label="${this.t.ariaAddForm}"
          >
            ${this.t.addQuestionBtn}
          </button>
        </form>

        <div class="questions-list" aria-label="${this.t.ariaQuestionsList}">
          ${this._tempQuestions.map(
            (question, index) => b`
              <div
                class="question-card"
                aria-label="${this.t.ariaQuestionCard}"
              >
                ${this._editingIndex === index
                  ? b`
                      <!-- Hidden edit form -->
                      <div class="edit-form">
                        <textarea
                          class="edit-question-text-input"
                          .value="${this._tempQuestionText}"
                          @input="${(e) =>
                            (this._tempQuestionText = e.target.value)}"
                          placeholder="${this.t.questionPlaceholder}"
                          aria-label="${this.t.ariaQuestionInput}"
                        ></textarea>
                        <div class="choices-container">
                          ${[0, 1, 2, 3].map(
                            (choiceIndex) => b`
                              <div class="choice-input-wrapper">
                                <input
                                  class="edit-choice-input"
                                  .value="${this[`_tempChoice${choiceIndex}`]}"
                                  @input="${(e) =>
                                    (this[`_tempChoice${choiceIndex}`] =
                                      e.target.value)}"
                                  placeholder="${this.t.choicePlaceholder.replace(
                                    "{N}",
                                    choiceIndex + 1,
                                  )}"
                                  aria-label="${this.t.ariaChoiceInput.replace(
                                    "{N}",
                                    choiceIndex + 1,
                                  )}"
                                />
                                <label class="choice-label">
                                  <input
                                    type="radio"
                                    name="correct-choice-edit"
                                    .checked="${this._tempCorrectIndex ==
                                    choiceIndex}"
                                    @change="${() =>
                                      (this._tempCorrectIndex = choiceIndex)}"
                                    aria-label="${this.t.ariaCorrectChoice}"
                                  />
                                  ${this.t.choiceCorrectLabel}
                                </label>
                              </div>
                            `,
                          )}
                        </div>
                        <div class="edit-form-actions">
                          <button
                            type="button"
                            class="save-edit-btn"
                            @click="${this._saveEditQuestion}"
                            aria-label="${this.t.ariaSaveEdit}"
                          >
                            ${this.t.saveEditBtn}
                          </button>
                          <button
                            type="button"
                            class="cancel-edit-btn"
                            @click="${this._cancelEditQuestion}"
                            aria-label="${this.t.ariaCancelEdit}"
                          >
                            ${this.t.cancelEditBtn}
                          </button>
                        </div>
                      </div>
                    `
                  : b`
                      <!-- Question preview with actions -->
                      <div class="card-header">
                        <span class="question-preview">
                          ${question.question}
                        </span>
                        <div class="card-actions">
                          <button
                            class="edit-btn"
                            @click="${() => this._startEditQuestion(index)}"
                            aria-label="${this.t.ariaEditQuestion}"
                          >
                            ${this.t.editQuestionBtn}
                          </button>
                          <button
                            class="delete-btn"
                            ?disabled="${this._tempQuestions.length <= 3}"
                            @click="${() => this._deleteQuestion(index)}"
                            aria-label="${this.t.ariaDeleteQuestion}"
                          >
                            ${this.t.deleteQuestionBtn}
                          </button>
                        </div>
                      </div>
                    `}
              </div>
            `,
          )}
        </div>
      </div>

      <div class="editor-actions">
        <button
          class="save-all-btn"
          @click="${this._saveAll}"
          aria-label="${this.t.ariaSaveAll}"
        >
          ${this.t.saveAllBtn}
        </button>
        <button
          class="cancel-all-btn"
          @click="${this._cancelAll}"
          aria-label="${this.t.ariaCancelAll}"
        >
          ${this.t.cancelAllBtn}
        </button>
      </div>
    `;
  }

  _addQuestion() {
    // Guard: validate form
    if (
      !this._tempQuestionText.trim() ||
      !this._tempChoice0.trim() ||
      !this._tempChoice1.trim() ||
      !this._tempChoice2.trim() ||
      !this._tempChoice3.trim()
    ) {
      console.warn(this.t.emptyChoiceError);
      return;
    }

    const newQuestion = {
      question: this._tempQuestionText.trim(),
      choices: [
        this._tempChoice0.trim(),
        this._tempChoice1.trim(),
        this._tempChoice2.trim(),
        this._tempChoice3.trim(),
      ],
      correctIndex: parseInt(this._tempCorrectIndex, 10),
    };

    // Reassign so Lit detects the change and re-renders
    this._tempQuestions = [...this._tempQuestions, newQuestion];
    this._tempQuestionText = "";
    this._tempChoice0 = "";
    this._tempChoice1 = "";
    this._tempChoice2 = "";
    this._tempChoice3 = "";
    this._tempCorrectIndex = "0";
  }

  _deleteQuestion(index) {
    // Guard: ensure minimum 3 questions remain
    if (this._tempQuestions.length <= 3) {
      console.warn(this.t.minQuestionsError);
      return;
    }

    // Reassign so Lit detects the change and re-renders
    this._tempQuestions = this._tempQuestions.filter((_, i) => i !== index);
    if (this._editingIndex === index) {
      this._editingIndex = -1;
      this._tempQuestionText = "";
      this._tempChoice0 = "";
      this._tempChoice1 = "";
      this._tempChoice2 = "";
      this._tempChoice3 = "";
      this._tempCorrectIndex = "0";
    } else if (this._editingIndex > index) {
      // Shift editing index down if item above it was removed
      this._editingIndex = this._editingIndex - 1;
    }
  }

  _startEditQuestion(index) {
    if (index < 0 || index >= this._tempQuestions.length) return;

    this._editingIndex = index;
    const question = this._tempQuestions[index];
    this._tempQuestionText = question.question;
    this._tempChoice0 = question.choices[0] || "";
    this._tempChoice1 = question.choices[1] || "";
    this._tempChoice2 = question.choices[2] || "";
    this._tempChoice3 = question.choices[3] || "";
    this._tempCorrectIndex = question.correctIndex.toString();
  }

  _saveEditQuestion() {
    // Guard: validate form
    if (
      !this._tempQuestionText.trim() ||
      !this._tempChoice0.trim() ||
      !this._tempChoice1.trim() ||
      !this._tempChoice2.trim() ||
      !this._tempChoice3.trim()
    ) {
      console.warn(this.t.emptyChoiceError);
      return;
    }

    // Guard: must be editing an existing question
    if (
      this._editingIndex < 0 ||
      this._editingIndex >= this._tempQuestions.length
    )
      return;

    // Reassign so Lit detects the change and re-renders
    this._tempQuestions = this._tempQuestions.map((q, i) =>
      i === this._editingIndex
        ? {
            question: this._tempQuestionText.trim(),
            choices: [
              this._tempChoice0.trim(),
              this._tempChoice1.trim(),
              this._tempChoice2.trim(),
              this._tempChoice3.trim(),
            ],
            correctIndex: parseInt(this._tempCorrectIndex, 10),
          }
        : q,
    );

    this._editingIndex = -1;
    this._tempQuestionText = "";
    this._tempChoice0 = "";
    this._tempChoice1 = "";
    this._tempChoice2 = "";
    this._tempChoice3 = "";
    this._tempCorrectIndex = "0";
  }

  _cancelEditQuestion() {
    // Guard: must be editing an existing question
    if (this._editingIndex < 0) return;

    this._editingIndex = -1;
    this._tempQuestionText = "";
    this._tempChoice0 = "";
    this._tempChoice1 = "";
    this._tempChoice2 = "";
    this._tempChoice3 = "";
    this._tempCorrectIndex = "0";
  }

  _saveAll() {
    // Guard: only allow saving from 'editor' screen
    if (this._screen !== "editor") return;

    this.questions = JSON.parse(JSON.stringify(this._tempQuestions));
    this._editing = false;
    this._editingIndex = -1;
    this._screen = this._editorOrigin || "result";
    this._editorOrigin = "result";
  }

  _cancelAll() {
    // Guard: only allow cancelling from 'editor' screen
    if (this._screen !== "editor") return;

    this._editing = false;
    this._editingIndex = -1;
    this._screen = this._editorOrigin || "result";
    this._editorOrigin = "result";
  }

  render() {
    switch (this._screen) {
      case "name":
        return this._renderNameScreen();
      case "question":
        return this._renderQuestionScreen();
      case "result":
        return this._renderResultScreen();
      case "editor":
        return this._renderEditorScreen();
      default:
        return this._renderNameScreen();
    }
  }

  static get styles() {
    return [
      super.styles,
      i$3`
        :host {
          display: block;
          max-width: 640px;
          margin: 0 auto;
          padding: var(--ddd-spacing-8);
          font-family: var(--ddd-font-primary);
        }

        .quiz-title {
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          margin-bottom: var(--ddd-spacing-4);
          color: var(--ddd-theme-primary);
        }

        .quiz-instruction {
          font-size: var(--ddd-font-size-m);
          margin-bottom: var(--ddd-spacing-6);
          color: var(--ddd-theme-secondary);
        }

        .input-group {
          margin-bottom: var(--ddd-spacing-4);
        }

        input#name-input {
          width: 100%;
          padding: var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-m);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          box-sizing: border-box;
          font-family: var(--ddd-font-primary);
        }

        input#name-input:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .start-btn {
          width: 100%;
          padding: var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-m);
          font-weight: var(--ddd-font-weight-bold);
          background: var(--ddd-theme-polaris-primary);
          color: var(--ddd-theme-on-primary);
          border: none;
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
        }

        .start-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .start-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .validation-error {
          margin-top: var(--ddd-spacing-2);
          color: var(--ddd-theme-error);
          font-size: var(--ddd-font-size-s);
        }

        /* Question Screen Styles */
        .quiz-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--ddd-spacing-6);
          font-weight: var(--ddd-font-weight-bold);
        }

        .progress-label,
        .score-display {
          color: var(--ddd-theme-primary);
        }

        .question-text {
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          margin-bottom: var(--ddd-spacing-6);
          color: var(--ddd-theme-secondary);
        }

        .answer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-6);
        }

        @media (max-width: 480px) {
          .answer-grid {
            grid-template-columns: 1fr;
          }

          .answer-btn {
            min-height: 44px;
          }
        }

        .answer-btn {
          padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
          font-size: var(--ddd-font-size-m);
          font-weight: var(--ddd-font-weight-medium);
          background: var(--ddd-theme-polaris-surface);
          color: var(--ddd-theme-on-surface);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition:
            background 0.2s,
            border-color 0.2s;
        }

        .answer-btn:hover:not([disabled]) {
          background: var(--ddd-theme-polaris-surface-hover);
        }

        .answer-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .answer-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .answer-btn--correct {
          background: var(--ddd-theme-success);
          color: var(--ddd-theme-on-success);
          border-color: var(--ddd-theme-success);
        }

        .answer-btn--wrong {
          background: var(--ddd-theme-error);
          color: var(--ddd-theme-on-error);
          border-color: var(--ddd-theme-error);
        }

        .feedback-area {
          padding: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-medium);
          text-align: center;
        }

        .feedback-area.positive {
          background: var(--ddd-theme-success);
          color: var(--ddd-theme-on-success);
        }

        .feedback-area.negative {
          background: var(--ddd-theme-error);
          color: var(--ddd-theme-on-error);
        }

        /* Result Screen Styles */
        .result-heading {
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          margin-bottom: var(--ddd-spacing-6);
          color: var(--ddd-theme-primary);
        }

        .result-name,
        .result-score,
        .result-percentage {
          font-size: var(--ddd-font-size-m);
          margin-bottom: var(--ddd-spacing-4);
          color: var(--ddd-theme-secondary);
        }

        .result-message {
          font-size: var(--ddd-font-size-l);
          font-weight: var(--ddd-font-weight-bold);
          margin: var(--ddd-spacing-6) 0;
          color: var(--ddd-theme-primary);
          text-align: center;
        }

        .restart-btn {
          width: 100%;
          padding: var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-m);
          font-weight: var(--ddd-font-weight-bold);
          background: var(--ddd-theme-polaris-primary);
          color: var(--ddd-theme-on-primary);
          border: none;
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
        }

        .restart-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .restart-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .edit-questions-btn {
          width: 100%;
          margin-top: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          background: transparent;
          color: var(--ddd-theme-primary);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
        }

        .edit-questions-btn:hover {
          background: var(--ddd-theme-polaris-surface-hover);
        }

        .edit-questions-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        /* Editor Screen Styles */
        .edit-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--ddd-spacing-6);
          padding-bottom: var(--ddd-spacing-4);
          border-bottom: 1px solid var(--ddd-theme-polaris-border);
        }

        .edit-title {
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-primary);
          margin: 0;
        }

        .close-editor-btn {
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          background: var(--ddd-theme-error);
          color: var(--ddd-theme-on-error);
          border: none;
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
        }

        .close-editor-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .close-editor-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .editor-content {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-6);
        }

        .add-question-form {
          padding: var(--ddd-spacing-4);
          background: var(--ddd-theme-polaris-surface);
          border-radius: var(--ddd-radius-md);
          border: 1px solid var(--ddd-theme-polaris-border);
        }

        .question-text-input {
          width: 100%;
          min-height: 80px;
          padding: var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-m);
          font-family: var(--ddd-font-primary);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-sm);
          resize: vertical;
          box-sizing: border-box;
          margin-bottom: var(--ddd-spacing-4);
        }

        .question-text-input:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .choices-container {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-4);
        }

        .choice-input-wrapper {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3);
        }

        .choice-input,
        .edit-choice-input {
          flex: 1;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-m);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-sm);
          font-family: var(--ddd-font-primary);
        }

        .choice-input:focus-visible,
        .edit-choice-input:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .choice-label {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-secondary);
          cursor: pointer;
        }

        .add-question-btn,
        .save-all-btn,
        .cancel-all-btn {
          width: 100%;
          padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-m);
          font-weight: var(--ddd-font-weight-bold);
          border: none;
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
        }

        .add-question-btn {
          background: var(--ddd-theme-polaris-primary);
          color: var(--ddd-theme-on-primary);
        }

        .add-question-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .add-question-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .questions-list {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-4);
        }

        .question-card {
          padding: var(--ddd-spacing-4);
          background: var(--ddd-theme-polaris-surface);
          border-radius: var(--ddd-radius-md);
          border: 1px solid var(--ddd-theme-polaris-border);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--ddd-spacing-4);
        }

        .question-preview {
          flex: 1;
          font-size: var(--ddd-font-size-m);
          color: var(--ddd-theme-secondary);
          word-break: break-word;
        }

        .card-actions {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2);
        }

        .edit-btn,
        .delete-btn {
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          border: none;
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
          transition:
            background 0.2s,
            color 0.2s;
        }

        .edit-btn {
          background: var(--ddd-theme-polaris-surface-hover);
          color: var(--ddd-theme-primary);
        }

        .edit-btn:hover:not([disabled]) {
          background: var(--ddd-theme-accent);
        }

        .edit-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .delete-btn {
          background: transparent;
          color: var(--ddd-theme-error);
        }

        .delete-btn:hover:not([disabled]) {
          background: var(--ddd-theme-error);
          color: var(--ddd-theme-on-error);
        }

        .delete-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .edit-form {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-3);
        }

        .edit-question-text-input {
          width: 100%;
          min-height: 80px;
          padding: var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-m);
          font-family: var(--ddd-font-primary);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-sm);
          resize: vertical;
          box-sizing: border-box;
        }

        .edit-form-actions {
          display: flex;
          gap: var(--ddd-spacing-3);
        }

        .save-edit-btn {
          flex: 1;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          background: var(--ddd-theme-success);
          color: var(--ddd-theme-on-success);
          border: none;
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
        }

        .save-edit-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .cancel-edit-btn {
          flex: 1;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          background: transparent;
          color: var(--ddd-theme-secondary);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
        }

        .cancel-edit-btn:hover {
          background: var(--ddd-theme-polaris-surface-hover);
        }

        .editor-actions {
          display: flex;
          gap: var(--ddd-spacing-4);
          margin-top: var(--ddd-spacing-4);
        }

        .save-all-btn {
          flex: 1;
          background: var(--ddd-theme-polaris-primary);
          color: var(--ddd-theme-on-primary);
        }

        .save-all-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .cancel-all-btn {
          flex: 1;
          background: transparent;
          color: var(--ddd-theme-secondary);
          border: 1px solid var(--ddd-theme-polaris-border);
        }

        .cancel-all-btn:hover {
          background: var(--ddd-theme-polaris-surface-hover);
        }

        .save-all-btn:focus-visible,
        .cancel-all-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        @media (max-width: 480px) {
          .card-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .card-actions {
            flex-direction: row;
            width: 100%;
          }

          .edit-btn,
          .delete-btn {
            flex: 1;
          }

          .editor-actions {
            flex-direction: column;
          }

          .save-all-btn,
          .cancel-all-btn {
            width: 100%;
          }
        }
      `,
    ];
  }
}

globalThis.customElements.define(ExplodeQuiz.tag, ExplodeQuiz);

const DDDStyleGuidePresets$1 = {
  "style-1": {
    name: "Box Style 1",
    allowedTags: ["p"],
    default: false,
    properties: {
      "data-design-treatment": "dropCap-sm",
      "data-accent": "2",
      "data-border-radius": "md",
    },
  },
  headline: {
    name: "Headline",
    allowedTags: ["h1", "h2"],
    default: true,
    properties: {
      "data-design-treatment": "vert",
      "data-primary": "8",
      "data-padding": "xs",
      "data-border-radius": "xs",
    },
  },
  byline: {
    name: "Byline",
    allowedTags: ["h1", "h2", "h3", "h4"],
    default: false,
    properties: {
      "data-design-treatment": "horz-10p",
      "data-primary": "8",
      "data-border-radius": "xs",
    },
  },
};

function normalizeTag$1(tag) {
  if (tag && tag.toLowerCase) {
    return tag.toLowerCase();
  }
  return null;
}

function getDDDStyleGuidePresetByKey$1(presetKey) {
  if (presetKey && DDDStyleGuidePresets$1[presetKey]) {
    return DDDStyleGuidePresets$1[presetKey];
  }
  return null;
}

function getDDDStyleGuideOptionsForTag$1(tag) {
  const normalizedTag = normalizeTag$1(tag);
  if (!normalizedTag) {
    return [];
  }
  return Object.keys(DDDStyleGuidePresets$1)
    .filter((presetKey) => {
      const preset = DDDStyleGuidePresets$1[presetKey];
      return (
        preset &&
        Array.isArray(preset.allowedTags) &&
        preset.allowedTags.includes(normalizedTag)
      );
    })
    .map((presetKey) => {
      const preset = DDDStyleGuidePresets$1[presetKey];
      return {
        value: presetKey,
        text: preset.name,
      };
    });
}

function getDDDStyleGuidePresetManagedAttributes$1() {
  const attributes = {};
  Object.keys(DDDStyleGuidePresets$1).forEach((presetKey) => {
    const preset = DDDStyleGuidePresets$1[presetKey];
    if (preset && preset.properties) {
      Object.keys(preset.properties).forEach((attribute) => {
        attributes[attribute] = true;
      });
    }
  });
  return Object.keys(attributes);
}

function getDDDStyleGuideDefaultPresetForTag$1(tag) {
  const normalizedTag = normalizeTag$1(tag);
  if (!normalizedTag) {
    return null;
  }
  let defaultKey = null;
  Object.keys(DDDStyleGuidePresets$1).forEach((presetKey) => {
    const preset = DDDStyleGuidePresets$1[presetKey];
    if (
      !defaultKey &&
      preset &&
      preset.default === true &&
      Array.isArray(preset.allowedTags) &&
      preset.allowedTags.includes(normalizedTag)
    ) {
      defaultKey = presetKey;
    }
  });
  if (defaultKey) {
    return {
      key: defaultKey,
      ...DDDStyleGuidePresets$1[defaultKey],
    };
  }
  return null;
}

function getDDDStyleGuideSchemaOverride$1(tag) {
  const normalizedTag = normalizeTag$1(tag);
  if (!normalizedTag) {
    return null;
  }
  const defaultPreset = getDDDStyleGuideDefaultPresetForTag$1(normalizedTag);
  if (!defaultPreset || !defaultPreset.properties) {
    return null;
  }
  return {
    demoSchema: [
      {
        tag: normalizedTag,
        properties: {
          "data-style-guide": defaultPreset.key,
          ...defaultPreset.properties,
        },
        content: "",
      },
    ],
  };
}

function getFormElementBySuffix$1(form, suffix) {
  const keys = Object.keys(form.formElements || {});
  const key = keys.find((fieldKey) => fieldKey.endsWith(`.${suffix}`));
  return key ? form.formElements[key] : null;
}

function getStyleGuideDefaultDemoSchemaForTag$1(tag) {
  const schemaOverride = getDDDStyleGuideSchemaOverride$1(tag);
  if (
    schemaOverride &&
    schemaOverride.demoSchema &&
    schemaOverride.demoSchema[0]
  ) {
    return schemaOverride.demoSchema[0];
  }
  return null;
}

function applyStyleGuideDefaultsToProperties$1(tag, properties) {
  if (!properties || !tag) {
    return null;
  }
  const defaultDemoSchema = getStyleGuideDefaultDemoSchemaForTag$1(tag);
  if (!defaultDemoSchema) {
    return null;
  }
  const currentDemoSchema =
    properties.demoSchema && properties.demoSchema[0]
      ? properties.demoSchema[0]
      : {};
  const currentProperties = currentDemoSchema.properties
    ? currentDemoSchema.properties
    : {};
  properties.demoSchema = [
    {
      tag: currentDemoSchema.tag || defaultDemoSchema.tag || tag,
      content:
        typeof currentDemoSchema.content === "string"
          ? currentDemoSchema.content
          : typeof defaultDemoSchema.content === "string"
            ? defaultDemoSchema.content
            : "",
      properties: {
        ...(defaultDemoSchema.properties || {}),
        ...currentProperties,
      },
    },
  ];
  return defaultDemoSchema;
}

function applyStyleGuideDefaultsToStore$1(HAXStore, tag, properties) {
  if (!HAXStore || !tag) {
    return;
  }
  const defaultDemoSchema = applyStyleGuideDefaultsToProperties$1(
    tag,
    properties,
  );
  if (!defaultDemoSchema) {
    return;
  }
  if (!HAXStore.styleGuideSchema) {
    HAXStore.styleGuideSchema = {};
  }
  if (!HAXStore.styleGuideSchema[tag]) {
    HAXStore.styleGuideSchema[tag] = {};
  }
  HAXStore.styleGuideSchema[tag].demoSchema = [
    {
      tag: defaultDemoSchema.tag || tag,
      content:
        typeof defaultDemoSchema.content === "string"
          ? defaultDemoSchema.content
          : "",
      properties: {
        ...(defaultDemoSchema.properties || {}),
      },
    },
  ];
  if (
    HAXStore.elementList &&
    HAXStore.elementList[tag] &&
    HAXStore.elementList[tag] !== properties
  ) {
    applyStyleGuideDefaultsToProperties$1(tag, HAXStore.elementList[tag]);
  }
}

function dddStyleGuideValueChanged$1(e, detail = {}) {
  if (!detail.form || !detail.form.formElements) {
    return;
  }
  const form = detail.form;
  const selectedPreset = e && e.detail ? e.detail.value : undefined;
  const presetConfig = getDDDStyleGuidePresetByKey$1(selectedPreset);
  const preset =
    presetConfig && presetConfig.properties ? presetConfig.properties : null;
  const dddFieldKeys = Object.keys(form.formElements).filter(
    (fieldKey) => fieldKey.indexOf("settings.configure.ddd-styles.") === 0,
  );
  dddFieldKeys.forEach((fieldKey) => {
    const fieldRef = form.formElements[fieldKey];
    const isStyleGuideField =
      fieldKey.indexOf(".ddd-styleguide") !== -1 ||
      fieldKey.indexOf(".data-style-guide") !== -1;
    if (!isStyleGuideField && fieldRef) {
      if (
        fieldRef.field &&
        typeof fieldRef.field.disabled !== typeof undefined
      ) {
        if (preset) {
          if (
            typeof fieldRef.field.__dddStyleGuidePrevDisabled ===
            typeof undefined
          ) {
            fieldRef.field.__dddStyleGuidePrevDisabled =
              !!fieldRef.field.disabled;
          }
          fieldRef.field.disabled = true;
        } else if (
          typeof fieldRef.field.__dddStyleGuidePrevDisabled !== typeof undefined
        ) {
          fieldRef.field.disabled = fieldRef.field.__dddStyleGuidePrevDisabled;
          delete fieldRef.field.__dddStyleGuidePrevDisabled;
        }
      }
      if (
        fieldRef.element &&
        typeof fieldRef.element.disabled !== typeof undefined
      ) {
        if (preset) {
          if (
            typeof fieldRef.element.__dddStyleGuidePrevDisabled ===
            typeof undefined
          ) {
            fieldRef.element.__dddStyleGuidePrevDisabled =
              !!fieldRef.element.disabled;
          }
          fieldRef.element.disabled = true;
        } else if (
          typeof fieldRef.element.__dddStyleGuidePrevDisabled !==
          typeof undefined
        ) {
          fieldRef.element.disabled =
            fieldRef.element.__dddStyleGuidePrevDisabled;
          delete fieldRef.element.__dddStyleGuidePrevDisabled;
        }
      }
    }
  });
  getDDDStyleGuidePresetManagedAttributes$1().forEach((attribute) => {
    const value =
      preset && typeof preset[attribute] !== typeof undefined
        ? preset[attribute]
        : undefined;
    const targetField = getFormElementBySuffix$1(form, attribute);
    if (targetField && targetField.element) {
      targetField.element.value = value;
    } else if (typeof form._setValue === "function") {
      form._setValue(`settings.configure.${attribute}`, value);
    }
  });
}

function isDDDActiveSystem$1(manager = null) {
  let activeManager = manager;
  if (
    !activeManager &&
    globalThis.DesignSystemManager &&
    typeof globalThis.DesignSystemManager.requestAvailability === "function"
  ) {
    activeManager = globalThis.DesignSystemManager.requestAvailability();
  }
  return !!activeManager && activeManager.active === "ddd";
}

function refreshDesignSystemProperties$1(HAXStore) {
  if (!HAXStore || typeof HAXStore.designSystemHAXProperties !== "function") {
    return;
  }
  Object.keys(HAXStore.elementList || {}).forEach((registeredTag) => {
    if (HAXStore.elementList[registeredTag]) {
      HAXStore.elementList[registeredTag] = HAXStore.designSystemHAXProperties(
        HAXStore.elementList[registeredTag],
        registeredTag,
      );
    }
  });
}

/**
 * @note Gut all design settings in HAX core. this allows for design systems to hook in
 * by overriding the way the designSystemHAXProperties returns property definitions
 *
 * under standardAdvancedProps
 * review what should be removed but just about everything
 * also many of these generate events which can be removed as well!!!
 * this is core gutting, but we'll have to implement them in a uniform way
 * so that if hideDefaultSettings is there we should still respect that
 * Possibly changing it hideDesignLayoutSettings: [] which is an array
 * of keys to hide from this specific element. If the entire thing is there
 * then it'll remove all of them
 */
function registerDDDStyleGuideAuthoring$1(payload = {}) {
  const manager = payload.manager || null;
  const HAXOptionSampleFactory =
    payload.options &&
    typeof payload.options.HAXOptionSampleFactory === "function"
      ? payload.options.HAXOptionSampleFactory
      : null;
  if (typeof HAXOptionSampleFactory !== "function") {
    return;
  }
  if (
    !globalThis ||
    !globalThis.addEventListener ||
    globalThis.__dddStyleGuideAuthoringRegistered
  ) {
    return;
  }
  globalThis.__dddStyleGuideAuthoringRegistered = true;
  const activateStoreIntegration = () => {
    if (
      globalThis.HaxStore &&
      typeof globalThis.HaxStore.requestAvailability === "function"
    ) {
      const HAXStore = globalThis.HaxStore.requestAvailability();
      if (HAXStore.__dddStyleGuideAuthoringApplied) {
        return;
      }
      HAXStore.__dddStyleGuideAuthoringApplied = true;
      if (!HAXStore.__dddStyleGuideDefaultSchemaReady) {
        HAXStore.__dddStyleGuideDefaultSchemaReady = true;
        globalThis.addEventListener("hax-register-properties", (event) => {
          if (
            isDDDActiveSystem$1(manager) &&
            event &&
            event.detail &&
            event.detail.tag &&
            event.detail.properties
          ) {
            applyStyleGuideDefaultsToStore$1(
              HAXStore,
              event.detail.tag,
              event.detail.properties,
            );
          }
        });
      }
      if (isDDDActiveSystem$1(manager)) {
        Object.keys(HAXStore.elementList || {}).forEach((registeredTag) => {
          applyStyleGuideDefaultsToStore$1(
            HAXStore,
            registeredTag,
            HAXStore.elementList[registeredTag],
          );
        });
      }
      const previousDesignSystemHAXProperties =
        typeof HAXStore.designSystemHAXProperties === "function"
          ? HAXStore.designSystemHAXProperties.bind(HAXStore)
          : null;
      HAXStore.designSystemHAXProperties = (props, tag) => {
        if (!props) {
          return props;
        }
        if (previousDesignSystemHAXProperties) {
          props = previousDesignSystemHAXProperties(props, tag);
        }
        if (!props) {
          return props;
        }
        if (!props.settings) {
          props.settings = {};
        }
        if (!Array.isArray(props.settings.configure)) {
          props.settings.configure = [];
        }
        const designSystem =
          props.designSystem && typeof props.designSystem === "object"
            ? props.designSystem
            : {};
        props.settings.configure = props.settings.configure.filter(
          (item) => item && item.property !== "ddd-styles",
        );
        if (!isDDDActiveSystem$1(manager)) {
          return props;
        }
        // setup the props of the design system to populate based on matches below
        let spacingProps = [];
        let styleGuideProps = [];
        let designTreatmentProps = [];
        let fontProps = [];
        let cardProps = [];
        let colorProps = [];
        // test if this element can be scaled
        // we generally don't want people doing it this way
        if (props.canScale) {
          spacingProps.push({
            attribute: "data-width",
            title: "Width",
            description: "Scaled relative to width of container",
            inputMethod: "slider",
            min: props.canScale.min ? props.canScale.min : 25,
            max: props.canScale.max ? props.canScale.max : 100,
            step: props.canScale.step ? props.canScale.step : 25,
          });
        }
        // will catch prims and MIGHT catch tag
        let inline = HAXStore.isInlineElement(tag);
        // test for inline bc we are so early in bootstrap we might miss it
        if (props.gizmo && props.gizmo.meta && props.gizmo.meta.inlineOnly) {
          inline = true;
        }
        // everything that allows for advanced should be able to apply spacing
        // this stuff floats to the top of those options
        if (
          !props.hideDefaultSettings &&
          !inline &&
          props.designSystem !== false
        ) {
          const styleGuideOptions = getDDDStyleGuideOptionsForTag$1(tag);
          if (styleGuideOptions.length > 0) {
            styleGuideProps.push({
              attribute: "data-style-guide",
              title: "Style guide",
              description: "Preset style combinations from the style guide",
              inputMethod: "radio",
              onValueChanged: dddStyleGuideValueChanged$1,
              itemsList: styleGuideOptions,
            });
          }
          if (["media-image", "img"].includes(tag)) {
            spacingProps.push({
              attribute: "data-float-position",
              title: "Float Position",
              description: "Alignment relative to other items on large screens",
              inputMethod: "select",
              options: {
                "": "-- default --",
                left: "Left",
                center: "Center",
                right: "Right",
              },
            });
          } else {
            spacingProps.push({
              attribute: "data-text-align",
              title: "Text align",
              description: "Horizontal alignment of text",
              inputMethod: "select",
              options: {
                "": "-- default --",
                left: "Left",
                center: "Center",
                right: "Right",
                justify: "Justify",
              },
            });
          }
          spacingProps.push({
            attribute: "data-padding",
            title: "Padding",
            description: "Padding for added aesthetics",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("padding")],
          });
          spacingProps.push({
            attribute: "data-margin",
            title: "Margin",
            description: "Margin for added aesthetics",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("margin")],
          });
        }
        // design treatments are rather open ended but should be high up for things that have them
        if (
          props.designSystem === true ||
          designSystem.designTreatment === true
        ) {
          if (["p", "blockquote"].includes(tag)) {
            designTreatmentProps.push({
              attribute: "data-design-treatment",
              title: "Design treatment",
              description: "Minor aesthetic treatments for emphasis",
              inputMethod: "radio",
              itemsList: [
                ...HAXOptionSampleFactory("design-treatment").filter((item) =>
                  item && item.value.startsWith("dropCap") ? true : false,
                ),
              ],
            });
          } else if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) {
            // filter options to only NON-dropCap options
            designTreatmentProps.push({
              attribute: "data-design-treatment",
              title: "Design treatment",
              description: "Minor aesthetic treatments for emphasis",
              inputMethod: "radio",
              itemsList: [
                ...HAXOptionSampleFactory("design-treatment").filter((item) =>
                  item && !item.value.startsWith("dropCap") ? true : false,
                ),
              ],
            });
          }
        }
        // block elements can get accents which effectively implies that they
        // can get the other 'card' like configuration pieces
        if (props.designSystem === true || designSystem.accent === true) {
          colorProps.push({
            attribute: "data-accent",
            title: "Accent color",
            description: "Offset items visually for aesthetic purposes",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("accent")],
          });
        }
        if (props.designSystem === true || designSystem.primary === true) {
          colorProps.push({
            attribute: "data-primary",
            title: "Primary color",
            description:
              "Primary color to apply color, often for meaning or aesthetic",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("primary")],
          });
        }
        if (
          props.designSystem === true ||
          designSystem.designTreatment === true
        ) {
          if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) {
            designTreatmentProps.push({
              attribute: "data-instructional-action",
              title: "Instructional Context",
              description: "Indicated to users visually",
              inputMethod: "radio",
              itemsList: [...HAXOptionSampleFactory("instructional-action")],
            });
          }
        }
        if (props.designSystem === true || designSystem.text === true) {
          fontProps.push({
            attribute: "data-font-family",
            title: "Font family",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("font-family")],
          });

          fontProps.push({
            attribute: "data-font-weight",
            title: "Font weight",
            description: "Ensure it is only for aesthetic purposes",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("font-weight")],
          });

          fontProps.push({
            attribute: "data-font-size",
            title: "Font size",
            description: "Ensure sizing is only for aesthetic purposes",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("font-size")],
          });
        }
        if (props.designSystem === true || designSystem.card === true) {
          cardProps = [
            {
              attribute: "data-border-radius",
              title: "Border radius",
              description: "Border radius to apply",
              inputMethod: "radio",
              itemsList: [...HAXOptionSampleFactory("border-radius")],
            },
            {
              attribute: "data-border",
              title: "Border",
              description: "Thickness of the border",
              inputMethod: "radio",
              itemsList: [...HAXOptionSampleFactory("border")],
            },
            {
              attribute: "data-box-shadow",
              title: "Box shadow",
              description: "Subtly raises off the page",
              inputMethod: "radio",
              itemsList: [...HAXOptionSampleFactory("box-shadow")],
            },
          ];
        }
        props.settings.configure.push({
          inputMethod: "collapse",
          property: "ddd-styles",
          properties: [
            {
              title: "Style Guide",
              collapsed: true,
              accordion: true,
              property: "ddd-styleguide",
              disabled: styleGuideProps.length === 0,
              properties: styleGuideProps,
              hidden: styleGuideProps.length === 0,
            },
            {
              title: "Design treatment",
              collapsed: true,
              accordion: true,
              property: "ddd-designtreatment",
              disabled: designTreatmentProps.length === 0,
              properties: designTreatmentProps,
              hidden: designTreatmentProps.length === 0,
            },
            {
              title: "Colors",
              collapsed: true,
              accordion: true,
              property: "ddd-card",
              disabled: colorProps.length === 0,
              properties: colorProps,
              hidden: colorProps.length === 0,
            },
            {
              title: "Font",
              collapsed: true,
              accordion: true,
              property: "ddd-font",
              disabled: fontProps.length === 0,
              properties: fontProps,
              hidden: fontProps.length === 0,
            },
            {
              title: "Spacing",
              collapsed: true,
              accordion: true,
              property: "ddd-spacing",
              disabled: spacingProps.length === 0,
              properties: spacingProps,
              hidden: spacingProps.length === 0,
            },
            {
              title: "Box appearance",
              collapsed: true,
              accordion: true,
              property: "ddd-box",
              disabled: cardProps.length === 0,
              properties: cardProps,
              hidden: cardProps.length === 0,
            },
          ],
        });
        return props;
      };
      if (isDDDActiveSystem$1(manager)) {
        Object.keys(HAXStore.elementList || {}).forEach((registeredTag) => {
          applyStyleGuideDefaultsToStore$1(
            HAXStore,
            registeredTag,
            HAXStore.elementList[registeredTag],
          );
        });
      }
      refreshDesignSystemProperties$1(HAXStore);
      if (!HAXStore.__dddDesignSystemSwitchListener) {
        HAXStore.__dddDesignSystemSwitchListener = true;
        globalThis.addEventListener("design-system-active-changed", () => {
          if (isDDDActiveSystem$1(manager)) {
            Object.keys(HAXStore.elementList || {}).forEach((registeredTag) => {
              applyStyleGuideDefaultsToStore$1(
                HAXStore,
                registeredTag,
                HAXStore.elementList[registeredTag],
              );
            });
          }
          refreshDesignSystemProperties$1(HAXStore);
        });
      }
    }
  };
  activateStoreIntegration();
  globalThis.addEventListener("hax-store-ready", activateStoreIntegration, {
    once: true,
  });
}

var DDDStyleGuideAuthoring$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  registerDDDStyleGuideAuthoring: registerDDDStyleGuideAuthoring$1
});

const DDDStyleGuidePresets = {
  "style-1": {
    name: "Box Style 1",
    allowedTags: ["p"],
    default: false,
    properties: {
      "data-design-treatment": "dropCap-sm",
      "data-accent": "2",
      "data-border-radius": "md",
    },
  },
  headline: {
    name: "Headline",
    allowedTags: ["h1", "h2"],
    default: true,
    properties: {
      "data-design-treatment": "vert",
      "data-primary": "8",
      "data-padding": "xs",
      "data-border-radius": "xs",
    },
  },
  byline: {
    name: "Byline",
    allowedTags: ["h1", "h2", "h3", "h4"],
    default: false,
    properties: {
      "data-design-treatment": "horz-10p",
      "data-primary": "8",
      "data-border-radius": "xs",
    },
  },
};

function normalizeTag(tag) {
  if (tag && tag.toLowerCase) {
    return tag.toLowerCase();
  }
  return null;
}

function getDDDStyleGuidePresetByKey(presetKey) {
  if (presetKey && DDDStyleGuidePresets[presetKey]) {
    return DDDStyleGuidePresets[presetKey];
  }
  return null;
}

function getDDDStyleGuideOptionsForTag(tag) {
  const normalizedTag = normalizeTag(tag);
  if (!normalizedTag) {
    return [];
  }
  return Object.keys(DDDStyleGuidePresets)
    .filter((presetKey) => {
      const preset = DDDStyleGuidePresets[presetKey];
      return (
        preset &&
        Array.isArray(preset.allowedTags) &&
        preset.allowedTags.includes(normalizedTag)
      );
    })
    .map((presetKey) => {
      const preset = DDDStyleGuidePresets[presetKey];
      return {
        value: presetKey,
        text: preset.name,
      };
    });
}

function getDDDStyleGuidePresetManagedAttributes() {
  const attributes = {};
  Object.keys(DDDStyleGuidePresets).forEach((presetKey) => {
    const preset = DDDStyleGuidePresets[presetKey];
    if (preset && preset.properties) {
      Object.keys(preset.properties).forEach((attribute) => {
        attributes[attribute] = true;
      });
    }
  });
  return Object.keys(attributes);
}

function getDDDStyleGuideDefaultPresetForTag(tag) {
  const normalizedTag = normalizeTag(tag);
  if (!normalizedTag) {
    return null;
  }
  let defaultKey = null;
  Object.keys(DDDStyleGuidePresets).forEach((presetKey) => {
    const preset = DDDStyleGuidePresets[presetKey];
    if (
      !defaultKey &&
      preset &&
      preset.default === true &&
      Array.isArray(preset.allowedTags) &&
      preset.allowedTags.includes(normalizedTag)
    ) {
      defaultKey = presetKey;
    }
  });
  if (defaultKey) {
    return {
      key: defaultKey,
      ...DDDStyleGuidePresets[defaultKey],
    };
  }
  return null;
}

function getDDDStyleGuideSchemaOverride(tag) {
  const normalizedTag = normalizeTag(tag);
  if (!normalizedTag) {
    return null;
  }
  const defaultPreset = getDDDStyleGuideDefaultPresetForTag(normalizedTag);
  if (!defaultPreset || !defaultPreset.properties) {
    return null;
  }
  return {
    demoSchema: [
      {
        tag: normalizedTag,
        properties: {
          "data-style-guide": defaultPreset.key,
          ...defaultPreset.properties,
        },
        content: "",
      },
    ],
  };
}

function getFormElementBySuffix(form, suffix) {
  const keys = Object.keys(form.formElements || {});
  const key = keys.find((fieldKey) => fieldKey.endsWith(`.${suffix}`));
  return key ? form.formElements[key] : null;
}

function getStyleGuideDefaultDemoSchemaForTag(tag) {
  const schemaOverride = getDDDStyleGuideSchemaOverride(tag);
  if (
    schemaOverride &&
    schemaOverride.demoSchema &&
    schemaOverride.demoSchema[0]
  ) {
    return schemaOverride.demoSchema[0];
  }
  return null;
}

function applyStyleGuideDefaultsToProperties(tag, properties) {
  if (!properties || !tag) {
    return null;
  }
  const defaultDemoSchema = getStyleGuideDefaultDemoSchemaForTag(tag);
  if (!defaultDemoSchema) {
    return null;
  }
  const currentDemoSchema =
    properties.demoSchema && properties.demoSchema[0]
      ? properties.demoSchema[0]
      : {};
  const currentProperties = currentDemoSchema.properties
    ? currentDemoSchema.properties
    : {};
  properties.demoSchema = [
    {
      tag: currentDemoSchema.tag || defaultDemoSchema.tag || tag,
      content:
        typeof currentDemoSchema.content === "string"
          ? currentDemoSchema.content
          : typeof defaultDemoSchema.content === "string"
            ? defaultDemoSchema.content
            : "",
      properties: {
        ...(defaultDemoSchema.properties || {}),
        ...currentProperties,
      },
    },
  ];
  return defaultDemoSchema;
}

function applyStyleGuideDefaultsToStore(HAXStore, tag, properties) {
  if (!HAXStore || !tag) {
    return;
  }
  const defaultDemoSchema = applyStyleGuideDefaultsToProperties(
    tag,
    properties,
  );
  if (!defaultDemoSchema) {
    return;
  }
  if (!HAXStore.styleGuideSchema) {
    HAXStore.styleGuideSchema = {};
  }
  if (!HAXStore.styleGuideSchema[tag]) {
    HAXStore.styleGuideSchema[tag] = {};
  }
  HAXStore.styleGuideSchema[tag].demoSchema = [
    {
      tag: defaultDemoSchema.tag || tag,
      content:
        typeof defaultDemoSchema.content === "string"
          ? defaultDemoSchema.content
          : "",
      properties: {
        ...(defaultDemoSchema.properties || {}),
      },
    },
  ];
  if (
    HAXStore.elementList &&
    HAXStore.elementList[tag] &&
    HAXStore.elementList[tag] !== properties
  ) {
    applyStyleGuideDefaultsToProperties(tag, HAXStore.elementList[tag]);
  }
}

function dddStyleGuideValueChanged(e, detail = {}) {
  if (!detail.form || !detail.form.formElements) {
    return;
  }
  const form = detail.form;
  const selectedPreset = e && e.detail ? e.detail.value : undefined;
  const presetConfig = getDDDStyleGuidePresetByKey(selectedPreset);
  const preset =
    presetConfig && presetConfig.properties ? presetConfig.properties : null;
  const dddFieldKeys = Object.keys(form.formElements).filter(
    (fieldKey) => fieldKey.indexOf("settings.configure.ddd-styles.") === 0,
  );
  dddFieldKeys.forEach((fieldKey) => {
    const fieldRef = form.formElements[fieldKey];
    const isStyleGuideField =
      fieldKey.indexOf(".ddd-styleguide") !== -1 ||
      fieldKey.indexOf(".data-style-guide") !== -1;
    if (!isStyleGuideField && fieldRef) {
      if (
        fieldRef.field &&
        typeof fieldRef.field.disabled !== typeof undefined
      ) {
        if (preset) {
          if (
            typeof fieldRef.field.__dddStyleGuidePrevDisabled ===
            typeof undefined
          ) {
            fieldRef.field.__dddStyleGuidePrevDisabled =
              !!fieldRef.field.disabled;
          }
          fieldRef.field.disabled = true;
        } else if (
          typeof fieldRef.field.__dddStyleGuidePrevDisabled !== typeof undefined
        ) {
          fieldRef.field.disabled = fieldRef.field.__dddStyleGuidePrevDisabled;
          delete fieldRef.field.__dddStyleGuidePrevDisabled;
        }
      }
      if (
        fieldRef.element &&
        typeof fieldRef.element.disabled !== typeof undefined
      ) {
        if (preset) {
          if (
            typeof fieldRef.element.__dddStyleGuidePrevDisabled ===
            typeof undefined
          ) {
            fieldRef.element.__dddStyleGuidePrevDisabled =
              !!fieldRef.element.disabled;
          }
          fieldRef.element.disabled = true;
        } else if (
          typeof fieldRef.element.__dddStyleGuidePrevDisabled !==
          typeof undefined
        ) {
          fieldRef.element.disabled =
            fieldRef.element.__dddStyleGuidePrevDisabled;
          delete fieldRef.element.__dddStyleGuidePrevDisabled;
        }
      }
    }
  });
  getDDDStyleGuidePresetManagedAttributes().forEach((attribute) => {
    const value =
      preset && typeof preset[attribute] !== typeof undefined
        ? preset[attribute]
        : undefined;
    const targetField = getFormElementBySuffix(form, attribute);
    if (targetField && targetField.element) {
      targetField.element.value = value;
    } else if (typeof form._setValue === "function") {
      form._setValue(`settings.configure.${attribute}`, value);
    }
  });
}

function isDDDActiveSystem(manager = null) {
  let activeManager = manager;
  if (
    !activeManager &&
    globalThis.DesignSystemManager &&
    typeof globalThis.DesignSystemManager.requestAvailability === "function"
  ) {
    activeManager = globalThis.DesignSystemManager.requestAvailability();
  }
  return !!activeManager && activeManager.active === "ddd";
}

function refreshDesignSystemProperties(HAXStore) {
  if (!HAXStore || typeof HAXStore.designSystemHAXProperties !== "function") {
    return;
  }
  Object.keys(HAXStore.elementList || {}).forEach((registeredTag) => {
    if (HAXStore.elementList[registeredTag]) {
      HAXStore.elementList[registeredTag] = HAXStore.designSystemHAXProperties(
        HAXStore.elementList[registeredTag],
        registeredTag,
      );
    }
  });
}

/**
 * @note Gut all design settings in HAX core. this allows for design systems to hook in
 * by overriding the way the designSystemHAXProperties returns property definitions
 *
 * under standardAdvancedProps
 * review what should be removed but just about everything
 * also many of these generate events which can be removed as well!!!
 * this is core gutting, but we'll have to implement them in a uniform way
 * so that if hideDefaultSettings is there we should still respect that
 * Possibly changing it hideDesignLayoutSettings: [] which is an array
 * of keys to hide from this specific element. If the entire thing is there
 * then it'll remove all of them
 */
function registerDDDStyleGuideAuthoring(payload = {}) {
  const manager = payload.manager || null;
  const HAXOptionSampleFactory =
    payload.options &&
    typeof payload.options.HAXOptionSampleFactory === "function"
      ? payload.options.HAXOptionSampleFactory
      : null;
  if (typeof HAXOptionSampleFactory !== "function") {
    return;
  }
  if (
    !globalThis ||
    !globalThis.addEventListener ||
    globalThis.__dddStyleGuideAuthoringRegistered
  ) {
    return;
  }
  globalThis.__dddStyleGuideAuthoringRegistered = true;
  const activateStoreIntegration = () => {
    if (
      globalThis.HaxStore &&
      typeof globalThis.HaxStore.requestAvailability === "function"
    ) {
      const HAXStore = globalThis.HaxStore.requestAvailability();
      if (HAXStore.__dddStyleGuideAuthoringApplied) {
        return;
      }
      HAXStore.__dddStyleGuideAuthoringApplied = true;
      if (!HAXStore.__dddStyleGuideDefaultSchemaReady) {
        HAXStore.__dddStyleGuideDefaultSchemaReady = true;
        globalThis.addEventListener("hax-register-properties", (event) => {
          if (
            isDDDActiveSystem(manager) &&
            event &&
            event.detail &&
            event.detail.tag &&
            event.detail.properties
          ) {
            applyStyleGuideDefaultsToStore(
              HAXStore,
              event.detail.tag,
              event.detail.properties,
            );
          }
        });
      }
      if (isDDDActiveSystem(manager)) {
        Object.keys(HAXStore.elementList || {}).forEach((registeredTag) => {
          applyStyleGuideDefaultsToStore(
            HAXStore,
            registeredTag,
            HAXStore.elementList[registeredTag],
          );
        });
      }
      const previousDesignSystemHAXProperties =
        typeof HAXStore.designSystemHAXProperties === "function"
          ? HAXStore.designSystemHAXProperties.bind(HAXStore)
          : null;
      HAXStore.designSystemHAXProperties = (props, tag) => {
        if (!props) {
          return props;
        }
        if (previousDesignSystemHAXProperties) {
          props = previousDesignSystemHAXProperties(props, tag);
        }
        if (!props) {
          return props;
        }
        if (!props.settings) {
          props.settings = {};
        }
        if (!Array.isArray(props.settings.configure)) {
          props.settings.configure = [];
        }
        const designSystem =
          props.designSystem && typeof props.designSystem === "object"
            ? props.designSystem
            : {};
        props.settings.configure = props.settings.configure.filter(
          (item) => item && item.property !== "ddd-styles",
        );
        if (!isDDDActiveSystem(manager)) {
          return props;
        }
        // setup the props of the design system to populate based on matches below
        let spacingProps = [];
        let styleGuideProps = [];
        let designTreatmentProps = [];
        let fontProps = [];
        let cardProps = [];
        let colorProps = [];
        // test if this element can be scaled
        // we generally don't want people doing it this way
        if (props.canScale) {
          spacingProps.push({
            attribute: "data-width",
            title: "Width",
            description: "Scaled relative to width of container",
            inputMethod: "slider",
            min: props.canScale.min ? props.canScale.min : 25,
            max: props.canScale.max ? props.canScale.max : 100,
            step: props.canScale.step ? props.canScale.step : 25,
          });
        }
        // will catch prims and MIGHT catch tag
        let inline = HAXStore.isInlineElement(tag);
        // test for inline bc we are so early in bootstrap we might miss it
        if (props.gizmo && props.gizmo.meta && props.gizmo.meta.inlineOnly) {
          inline = true;
        }
        // everything that allows for advanced should be able to apply spacing
        // this stuff floats to the top of those options
        if (
          !props.hideDefaultSettings &&
          !inline &&
          props.designSystem !== false
        ) {
          const styleGuideOptions = getDDDStyleGuideOptionsForTag(tag);
          if (styleGuideOptions.length > 0) {
            styleGuideProps.push({
              attribute: "data-style-guide",
              title: "Style guide",
              description: "Preset style combinations from the style guide",
              inputMethod: "radio",
              onValueChanged: dddStyleGuideValueChanged,
              itemsList: styleGuideOptions,
            });
          }
          if (["media-image", "img"].includes(tag)) {
            spacingProps.push({
              attribute: "data-float-position",
              title: "Float Position",
              description: "Alignment relative to other items on large screens",
              inputMethod: "select",
              options: {
                "": "-- default --",
                left: "Left",
                center: "Center",
                right: "Right",
              },
            });
          } else {
            spacingProps.push({
              attribute: "data-text-align",
              title: "Text align",
              description: "Horizontal alignment of text",
              inputMethod: "select",
              options: {
                "": "-- default --",
                left: "Left",
                center: "Center",
                right: "Right",
                justify: "Justify",
              },
            });
          }
          spacingProps.push({
            attribute: "data-padding",
            title: "Padding",
            description: "Padding for added aesthetics",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("padding")],
          });
          spacingProps.push({
            attribute: "data-margin",
            title: "Margin",
            description: "Margin for added aesthetics",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("margin")],
          });
        }
        // design treatments are rather open ended but should be high up for things that have them
        if (
          props.designSystem === true ||
          designSystem.designTreatment === true
        ) {
          if (["p", "blockquote"].includes(tag)) {
            designTreatmentProps.push({
              attribute: "data-design-treatment",
              title: "Design treatment",
              description: "Minor aesthetic treatments for emphasis",
              inputMethod: "radio",
              itemsList: [
                ...HAXOptionSampleFactory("design-treatment").filter((item) =>
                  item && item.value.startsWith("dropCap") ? true : false,
                ),
              ],
            });
          } else if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) {
            // filter options to only NON-dropCap options
            designTreatmentProps.push({
              attribute: "data-design-treatment",
              title: "Design treatment",
              description: "Minor aesthetic treatments for emphasis",
              inputMethod: "radio",
              itemsList: [
                ...HAXOptionSampleFactory("design-treatment").filter((item) =>
                  item && !item.value.startsWith("dropCap") ? true : false,
                ),
              ],
            });
          }
        }
        // block elements can get accents which effectively implies that they
        // can get the other 'card' like configuration pieces
        if (props.designSystem === true || designSystem.accent === true) {
          colorProps.push({
            attribute: "data-accent",
            title: "Accent color",
            description: "Offset items visually for aesthetic purposes",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("accent")],
          });
        }
        if (props.designSystem === true || designSystem.primary === true) {
          colorProps.push({
            attribute: "data-primary",
            title: "Primary color",
            description:
              "Primary color to apply color, often for meaning or aesthetic",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("primary")],
          });
        }
        if (
          props.designSystem === true ||
          designSystem.designTreatment === true
        ) {
          if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) {
            designTreatmentProps.push({
              attribute: "data-instructional-action",
              title: "Instructional Context",
              description: "Indicated to users visually",
              inputMethod: "radio",
              itemsList: [...HAXOptionSampleFactory("instructional-action")],
            });
          }
        }
        if (props.designSystem === true || designSystem.text === true) {
          fontProps.push({
            attribute: "data-font-family",
            title: "Font family",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("font-family")],
          });

          fontProps.push({
            attribute: "data-font-weight",
            title: "Font weight",
            description: "Ensure it is only for aesthetic purposes",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("font-weight")],
          });

          fontProps.push({
            attribute: "data-font-size",
            title: "Font size",
            description: "Ensure sizing is only for aesthetic purposes",
            inputMethod: "radio",
            itemsList: [...HAXOptionSampleFactory("font-size")],
          });
        }
        if (props.designSystem === true || designSystem.card === true) {
          cardProps = [
            {
              attribute: "data-border-radius",
              title: "Border radius",
              description: "Border radius to apply",
              inputMethod: "radio",
              itemsList: [...HAXOptionSampleFactory("border-radius")],
            },
            {
              attribute: "data-border",
              title: "Border",
              description: "Thickness of the border",
              inputMethod: "radio",
              itemsList: [...HAXOptionSampleFactory("border")],
            },
            {
              attribute: "data-box-shadow",
              title: "Box shadow",
              description: "Subtly raises off the page",
              inputMethod: "radio",
              itemsList: [...HAXOptionSampleFactory("box-shadow")],
            },
          ];
        }
        props.settings.configure.push({
          inputMethod: "collapse",
          property: "ddd-styles",
          properties: [
            {
              title: "Style Guide",
              collapsed: true,
              accordion: true,
              property: "ddd-styleguide",
              disabled: styleGuideProps.length === 0,
              properties: styleGuideProps,
              hidden: styleGuideProps.length === 0,
            },
            {
              title: "Design treatment",
              collapsed: true,
              accordion: true,
              property: "ddd-designtreatment",
              disabled: designTreatmentProps.length === 0,
              properties: designTreatmentProps,
              hidden: designTreatmentProps.length === 0,
            },
            {
              title: "Colors",
              collapsed: true,
              accordion: true,
              property: "ddd-card",
              disabled: colorProps.length === 0,
              properties: colorProps,
              hidden: colorProps.length === 0,
            },
            {
              title: "Font",
              collapsed: true,
              accordion: true,
              property: "ddd-font",
              disabled: fontProps.length === 0,
              properties: fontProps,
              hidden: fontProps.length === 0,
            },
            {
              title: "Spacing",
              collapsed: true,
              accordion: true,
              property: "ddd-spacing",
              disabled: spacingProps.length === 0,
              properties: spacingProps,
              hidden: spacingProps.length === 0,
            },
            {
              title: "Box appearance",
              collapsed: true,
              accordion: true,
              property: "ddd-box",
              disabled: cardProps.length === 0,
              properties: cardProps,
              hidden: cardProps.length === 0,
            },
          ],
        });
        return props;
      };
      if (isDDDActiveSystem(manager)) {
        Object.keys(HAXStore.elementList || {}).forEach((registeredTag) => {
          applyStyleGuideDefaultsToStore(
            HAXStore,
            registeredTag,
            HAXStore.elementList[registeredTag],
          );
        });
      }
      refreshDesignSystemProperties(HAXStore);
      if (!HAXStore.__dddDesignSystemSwitchListener) {
        HAXStore.__dddDesignSystemSwitchListener = true;
        globalThis.addEventListener("design-system-active-changed", () => {
          if (isDDDActiveSystem(manager)) {
            Object.keys(HAXStore.elementList || {}).forEach((registeredTag) => {
              applyStyleGuideDefaultsToStore(
                HAXStore,
                registeredTag,
                HAXStore.elementList[registeredTag],
              );
            });
          }
          refreshDesignSystemProperties(HAXStore);
        });
      }
    }
  };
  activateStoreIntegration();
  globalThis.addEventListener("hax-store-ready", activateStoreIntegration, {
    once: true,
  });
}

var DDDStyleGuideAuthoring = /*#__PURE__*/Object.freeze({
  __proto__: null,
  registerDDDStyleGuideAuthoring: registerDDDStyleGuideAuthoring
});

// canvas-confetti v1.9.4 built on 2025-10-25T05:14:56.640Z
var module$1 = {};

// source content
/* globals Map */

(function main(global, module, isWorker, workerSize) {
  var canUseWorker = !!(
    global.Worker &&
    global.Blob &&
    global.Promise &&
    global.OffscreenCanvas &&
    global.OffscreenCanvasRenderingContext2D &&
    global.HTMLCanvasElement &&
    global.HTMLCanvasElement.prototype.transferControlToOffscreen &&
    global.URL &&
    global.URL.createObjectURL);

  var canUsePaths = typeof Path2D === 'function' && typeof DOMMatrix === 'function';
  var canDrawBitmap = (function () {
    // this mostly supports ssr
    if (!global.OffscreenCanvas) {
      return false;
    }

    try {
      var canvas = new OffscreenCanvas(1, 1);
      var ctx = canvas.getContext('2d');
      ctx.fillRect(0, 0, 1, 1);
      var bitmap = canvas.transferToImageBitmap();
      ctx.createPattern(bitmap, 'no-repeat');
    } catch (e) {
      return false;
    }

    return true;
  })();

  function noop() {}

  // create a promise if it exists, otherwise, just
  // call the function directly
  function promise(func) {
    var ModulePromise = module.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;

    if (typeof Prom === 'function') {
      return new Prom(func);
    }

    func(noop, noop);

    return null;
  }

  var bitmapMapper = (function (skipTransform, map) {
    // see https://github.com/catdad/canvas-confetti/issues/209
    // creating canvases is actually pretty expensive, so we should create a
    // 1:1 map for bitmap:canvas, so that we can animate the confetti in
    // a performant manner, but also not store them forever so that we don't
    // have a memory leak
    return {
      transform: function(bitmap) {
        if (skipTransform) {
          return bitmap;
        }

        if (map.has(bitmap)) {
          return map.get(bitmap);
        }

        var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        var ctx = canvas.getContext('2d');
        ctx.drawImage(bitmap, 0, 0);

        map.set(bitmap, canvas);

        return canvas;
      },
      clear: function () {
        map.clear();
      }
    };
  })(canDrawBitmap, new Map());

  var raf = (function () {
    var TIME = Math.floor(1000 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;

    if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
      frame = function (cb) {
        var id = Math.random();

        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];

            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });

        return id;
      };
      cancel = function (id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function (cb) {
        return setTimeout(cb, TIME);
      };
      cancel = function (timer) {
        return clearTimeout(timer);
      };
    }

    return { frame: frame, cancel: cancel };
  }());

  var getWorker = (function () {
    var worker;
    var prom;
    var resolves = {};

    function decorate(worker) {
      function execute(options, callback) {
        worker.postMessage({ options: options || {}, callback: callback });
      }
      worker.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker.postMessage({ canvas: offscreen }, [offscreen]);
      };

      worker.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }

        var id = Math.random().toString(36).slice(2);

        prom = promise(function (resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }

            delete resolves[id];
            worker.removeEventListener('message', workerDone);

            prom = null;

            bitmapMapper.clear();

            done();
            resolve();
          }

          worker.addEventListener('message', workerDone);
          execute(options, id);

          resolves[id] = workerDone.bind(null, { data: { callback: id }});
        });

        return prom;
      };

      worker.reset = function resetWorker() {
        worker.postMessage({ reset: true });

        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }

    return function () {
      if (worker) {
        return worker;
      }

      if (!isWorker && canUseWorker) {
        var code = [
          'var CONFETTI, SIZE = {}, module = {};',
          '(' + main.toString() + ')(this, module, true, SIZE);',
          'onmessage = function(msg) {',
          '  if (msg.data.options) {',
          '    CONFETTI(msg.data.options).then(function () {',
          '      if (msg.data.callback) {',
          '        postMessage({ callback: msg.data.callback });',
          '      }',
          '    });',
          '  } else if (msg.data.reset) {',
          '    CONFETTI && CONFETTI.reset();',
          '  } else if (msg.data.resize) {',
          '    SIZE.width = msg.data.resize.width;',
          '    SIZE.height = msg.data.resize.height;',
          '  } else if (msg.data.canvas) {',
          '    SIZE.width = msg.data.canvas.width;',
          '    SIZE.height = msg.data.canvas.height;',
          '    CONFETTI = module.exports.create(msg.data.canvas);',
          '  }',
          '}',
        ].join('\n');
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          // eslint-disable-next-line no-console
          typeof console !== 'undefined' && typeof console.warn === 'function' ? console.warn('🎊 Could not load worker', e) : null;

          return null;
        }

        decorate(worker);
      }

      return worker;
    };
  })();

  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ['square', 'circle'],
    zIndex: 100,
    colors: [
      '#26ccff',
      '#a25afd',
      '#ff5e7e',
      '#88ff5a',
      '#fcff42',
      '#ffa62d',
      '#ff36ff'
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };

  function convert(val, transform) {
    return transform ? transform(val) : val;
  }

  function isOk(val) {
    return !(val === null || val === undefined);
  }

  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults[name],
      transform
    );
  }

  function onlyPositiveInt(number){
    return number < 0 ? 0 : Math.floor(number);
  }

  function randomInt(min, max) {
    // [min, max)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function toDecimal(str) {
    return parseInt(str, 16);
  }

  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }

  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, '');

    if (val.length < 6) {
        val = val[0]+val[0]+val[1]+val[1]+val[2]+val[2];
    }

    return {
      r: toDecimal(val.substring(0,2)),
      g: toDecimal(val.substring(2,4)),
      b: toDecimal(val.substring(4,6))
    };
  }

  function getOrigin(options) {
    var origin = prop(options, 'origin', Object);
    origin.x = prop(origin, 'x', Number);
    origin.y = prop(origin, 'y', Number);

    return origin;
  }

  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }

  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function getCanvas(zIndex) {
    var canvas = document.createElement('canvas');

    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = zIndex;

    return canvas;
  }

  function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }

  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);

    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: (opts.startVelocity * 0.5) + (Math.random() * opts.startVelocity),
      angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar,
      flat: opts.flat
    };
  }

  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.velocity *= fetti.decay;

    if (fetti.flat) {
      fetti.wobble = 0;
      fetti.wobbleX = fetti.x + (10 * fetti.scalar);
      fetti.wobbleY = fetti.y + (10 * fetti.scalar);

      fetti.tiltSin = 0;
      fetti.tiltCos = 0;
      fetti.random = 1;
    } else {
      fetti.wobble += fetti.wobbleSpeed;
      fetti.wobbleX = fetti.x + ((10 * fetti.scalar) * Math.cos(fetti.wobble));
      fetti.wobbleY = fetti.y + ((10 * fetti.scalar) * Math.sin(fetti.wobble));

      fetti.tiltAngle += 0.1;
      fetti.tiltSin = Math.sin(fetti.tiltAngle);
      fetti.tiltCos = Math.cos(fetti.tiltAngle);
      fetti.random = Math.random() + 2;
    }

    var progress = (fetti.tick++) / fetti.totalTicks;

    var x1 = fetti.x + (fetti.random * fetti.tiltCos);
    var y1 = fetti.y + (fetti.random * fetti.tiltSin);
    var x2 = fetti.wobbleX + (fetti.random * fetti.tiltCos);
    var y2 = fetti.wobbleY + (fetti.random * fetti.tiltSin);

    context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';

    context.beginPath();

    if (canUsePaths && fetti.shape.type === 'path' && typeof fetti.shape.path === 'string' && Array.isArray(fetti.shape.matrix)) {
      context.fill(transformPath2D(
        fetti.shape.path,
        fetti.shape.matrix,
        fetti.x,
        fetti.y,
        Math.abs(x2 - x1) * 0.1,
        Math.abs(y2 - y1) * 0.1,
        Math.PI / 10 * fetti.wobble
      ));
    } else if (fetti.shape.type === 'bitmap') {
      var rotation = Math.PI / 10 * fetti.wobble;
      var scaleX = Math.abs(x2 - x1) * 0.1;
      var scaleY = Math.abs(y2 - y1) * 0.1;
      var width = fetti.shape.bitmap.width * fetti.scalar;
      var height = fetti.shape.bitmap.height * fetti.scalar;

      var matrix = new DOMMatrix([
        Math.cos(rotation) * scaleX,
        Math.sin(rotation) * scaleX,
        -Math.sin(rotation) * scaleY,
        Math.cos(rotation) * scaleY,
        fetti.x,
        fetti.y
      ]);

      // apply the transform matrix from the confetti shape
      matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));

      var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), 'no-repeat');
      pattern.setTransform(matrix);

      context.globalAlpha = (1 - progress);
      context.fillStyle = pattern;
      context.fillRect(
        fetti.x - (width / 2),
        fetti.y - (height / 2),
        width,
        height
      );
      context.globalAlpha = 1;
    } else if (fetti.shape === 'circle') {
      context.ellipse ?
        context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) :
        ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else if (fetti.shape === 'star') {
      var rot = Math.PI / 2 * 3;
      var innerRadius = 4 * fetti.scalar;
      var outerRadius = 8 * fetti.scalar;
      var x = fetti.x;
      var y = fetti.y;
      var spikes = 5;
      var step = Math.PI / spikes;

      while (spikes--) {
        x = fetti.x + Math.cos(rot) * outerRadius;
        y = fetti.y + Math.sin(rot) * outerRadius;
        context.lineTo(x, y);
        rot += step;

        x = fetti.x + Math.cos(rot) * innerRadius;
        y = fetti.y + Math.sin(rot) * innerRadius;
        context.lineTo(x, y);
        rot += step;
      }
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }

    context.closePath();
    context.fill();

    return fetti.tick < fetti.totalTicks;
  }

  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext('2d');
    var animationFrame;
    var destroy;

    var prom = promise(function (resolve) {
      function onDone() {
        animationFrame = destroy = null;

        context.clearRect(0, 0, size.width, size.height);
        bitmapMapper.clear();

        done();
        resolve();
      }

      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }

        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }

        context.clearRect(0, 0, size.width, size.height);

        animatingFettis = animatingFettis.filter(function (fetti) {
          return updateFetti(context, fetti);
        });

        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }

      animationFrame = raf.frame(update);
      destroy = onDone;
    });

    return {
      addFettis: function (fettis) {
        animatingFettis = animatingFettis.concat(fettis);

        return prom;
      },
      canvas: canvas,
      promise: prom,
      reset: function () {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }

        if (destroy) {
          destroy();
        }
      }
    };
  }

  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, 'resize');
    var hasResizeEventRegistered = false;
    var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = (canvas && worker) ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
    var animationObj;

    function fireLocal(options, size, done) {
      var particleCount = prop(options, 'particleCount', onlyPositiveInt);
      var angle = prop(options, 'angle', Number);
      var spread = prop(options, 'spread', Number);
      var startVelocity = prop(options, 'startVelocity', Number);
      var decay = prop(options, 'decay', Number);
      var gravity = prop(options, 'gravity', Number);
      var drift = prop(options, 'drift', Number);
      var colors = prop(options, 'colors', colorsToRgb);
      var ticks = prop(options, 'ticks', Number);
      var shapes = prop(options, 'shapes');
      var scalar = prop(options, 'scalar');
      var flat = !!prop(options, 'flat');
      var origin = getOrigin(options);

      var temp = particleCount;
      var fettis = [];

      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;

      while (temp--) {
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle: angle,
            spread: spread,
            startVelocity: startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks: ticks,
            decay: decay,
            gravity: gravity,
            drift: drift,
            scalar: scalar,
            flat: flat
          })
        );
      }

      // if we have a previous canvas already animating,
      // add to it
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }

      animationObj = animate(canvas, fettis, resizer, size , done);

      return animationObj.promise;
    }

    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
      var zIndex = prop(options, 'zIndex', Number);

      if (disableForReducedMotion && preferLessMotion) {
        return promise(function (resolve) {
          resolve();
        });
      }

      if (isLibCanvas && animationObj) {
        // use existing canvas from in-progress animation
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        // create and initialize a new canvas
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }

      if (allowResize && !initialized) {
        // initialize the size of a user-supplied canvas
        resizer(canvas);
      }

      var size = {
        width: canvas.width,
        height: canvas.height
      };

      if (worker && !initialized) {
        worker.init(canvas);
      }

      initialized = true;

      if (worker) {
        canvas.__confetti_initialized = true;
      }

      function onResize() {
        if (worker) {
          // TODO this really shouldn't be immediate, because it is expensive
          var obj = {
            getBoundingClientRect: function () {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };

          resizer(obj);

          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }

        // don't actually query the size here, since this
        // can execute frequently and rapidly
        size.width = size.height = null;
      }

      function done() {
        animationObj = null;

        if (allowResize) {
          hasResizeEventRegistered = false;
          global.removeEventListener('resize', onResize);
        }

        if (isLibCanvas && canvas) {
          if (document.body.contains(canvas)) {
            document.body.removeChild(canvas);
          }
          canvas = null;
          initialized = false;
        }
      }

      if (allowResize && !hasResizeEventRegistered) {
        hasResizeEventRegistered = true;
        global.addEventListener('resize', onResize, false);
      }

      if (worker) {
        return worker.fire(options, size, done);
      }

      return fireLocal(options, size, done);
    }

    fire.reset = function () {
      if (worker) {
        worker.reset();
      }

      if (animationObj) {
        animationObj.reset();
      }
    };

    return fire;
  }

  // Make default export lazy to defer worker creation until called.
  var defaultFire;
  function getDefaultFire() {
    if (!defaultFire) {
      defaultFire = confettiCannon(null, { useWorker: true, resize: true });
    }
    return defaultFire;
  }

  function transformPath2D(pathString, pathMatrix, x, y, scaleX, scaleY, rotation) {
    var path2d = new Path2D(pathString);

    var t1 = new Path2D();
    t1.addPath(path2d, new DOMMatrix(pathMatrix));

    var t2 = new Path2D();
    // see https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix/DOMMatrix
    t2.addPath(t1, new DOMMatrix([
      Math.cos(rotation) * scaleX,
      Math.sin(rotation) * scaleX,
      -Math.sin(rotation) * scaleY,
      Math.cos(rotation) * scaleY,
      x,
      y
    ]));

    return t2;
  }

  function shapeFromPath(pathData) {
    if (!canUsePaths) {
      throw new Error('path confetti are not supported in this browser');
    }

    var path, matrix;

    if (typeof pathData === 'string') {
      path = pathData;
    } else {
      path = pathData.path;
      matrix = pathData.matrix;
    }

    var path2d = new Path2D(path);
    var tempCanvas = document.createElement('canvas');
    var tempCtx = tempCanvas.getContext('2d');

    if (!matrix) {
      // attempt to figure out the width of the path, up to 1000x1000
      var maxSize = 1000;
      var minX = maxSize;
      var minY = maxSize;
      var maxX = 0;
      var maxY = 0;
      var width, height;

      // do some line skipping... this is faster than checking
      // every pixel and will be mostly still correct
      for (var x = 0; x < maxSize; x += 2) {
        for (var y = 0; y < maxSize; y += 2) {
          if (tempCtx.isPointInPath(path2d, x, y, 'nonzero')) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }

      width = maxX - minX;
      height = maxY - minY;

      var maxDesiredSize = 10;
      var scale = Math.min(maxDesiredSize/width, maxDesiredSize/height);

      matrix = [
        scale, 0, 0, scale,
        -Math.round((width/2) + minX) * scale,
        -Math.round((height/2) + minY) * scale
      ];
    }

    return {
      type: 'path',
      path: path,
      matrix: matrix
    };
  }

  function shapeFromText(textData) {
    var text,
        scalar = 1,
        color = '#000000',
        // see https://nolanlawson.com/2022/04/08/the-struggle-of-using-native-emoji-on-the-web/
        fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';

    if (typeof textData === 'string') {
      text = textData;
    } else {
      text = textData.text;
      scalar = 'scalar' in textData ? textData.scalar : scalar;
      fontFamily = 'fontFamily' in textData ? textData.fontFamily : fontFamily;
      color = 'color' in textData ? textData.color : color;
    }

    // all other confetti are 10 pixels,
    // so this pixel size is the de-facto 100% scale confetti
    var fontSize = 10 * scalar;
    var font = '' + fontSize + 'px ' + fontFamily;

    var canvas = new OffscreenCanvas(fontSize, fontSize);
    var ctx = canvas.getContext('2d');

    ctx.font = font;
    var size = ctx.measureText(text);
    var width = Math.ceil(size.actualBoundingBoxRight + size.actualBoundingBoxLeft);
    var height = Math.ceil(size.actualBoundingBoxAscent + size.actualBoundingBoxDescent);

    var padding = 2;
    var x = size.actualBoundingBoxLeft + padding;
    var y = size.actualBoundingBoxAscent + padding;
    width += padding + padding;
    height += padding + padding;

    canvas = new OffscreenCanvas(width, height);
    ctx = canvas.getContext('2d');
    ctx.font = font;
    ctx.fillStyle = color;

    ctx.fillText(text, x, y);

    var scale = 1 / scalar;

    return {
      type: 'bitmap',
      // TODO these probably need to be transfered for workers
      bitmap: canvas.transferToImageBitmap(),
      matrix: [scale, 0, 0, scale, -width * scale / 2, -height * scale / 2]
    };
  }

  module.exports = function() {
    return getDefaultFire().apply(this, arguments);
  };
  module.exports.reset = function() {
    getDefaultFire().reset();
  };
  module.exports.create = confettiCannon;
  module.exports.shapeFromPath = shapeFromPath;
  module.exports.shapeFromText = shapeFromText;
}((function () {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  return this || {};
})(), module$1, false));

// end source content

var confetti_module = module$1.exports;
module$1.exports.create;

var confetti_module$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: confetti_module
});
