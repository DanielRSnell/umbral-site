import{j as a}from"./jsx-runtime.DryX8W7K.js";import{R as o,r as h}from"./index.h85i37dG.js";import"./_commonjsHelpers.Cpj98o6Y.js";var d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=o.createContext&&o.createContext(d),v=["attr","size","title"];function y(e,t){if(e==null)return{};var r=j(e,t),n,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function j(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(n){x(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function x(e,t,r){return t=O(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){var t=w(e,"string");return typeof t=="symbol"?t:t+""}function w(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b(e){return e&&e.map((t,r)=>o.createElement(t.tag,u({key:r},t.attr),b(t.child)))}function P(e){return t=>o.createElement(C,s({attr:u({},e.attr)},t),b(e.child))}function C(e){var t=r=>{var{attr:n,size:i,title:l}=e,g=y(e,v),f=i||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),o.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,g,{className:c,style:u(u({color:e.color||r.color},r.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&o.createElement("title",null,l),e.children)};return m!==void 0?o.createElement(m.Consumer,null,r=>t(r)):t(d)}function N(e){return P({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"},child:[]}]})(e)}function _(){const[e,t]=h.useState(!0);return e&&a.jsx("div",{className:"announcement",children:a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"relative flex items-center justify-between sm:text-center",children:[a.jsxs("span",{className:"mx-auto pr-10 text-sm lg:text-[15px]",children:["Imagine never checking availability for you team again: ",a.jsx("a",{href:"#?",children:"Learn More"})]}),a.jsx("button",{className:"promo-bar-close-btn text-xs min-w-[20px] h-[20px] flex items-center justify-center rounded-full border-2 border-white text-white opacity-80","aria-label":"close toast button",type:"button",onClick:()=>t(!1),children:a.jsx(N,{className:"react-icons",width:12,height:12})})]})})})}export{_ as default};
