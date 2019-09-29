var MegaMenu=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var o=n(11),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},function(t,e,n){var o=n(1).Symbol;t.exports=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isMobile=function(t){return window.innerWidth<t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(25);e.deactivateMenu=function(t){var e=document.querySelectorAll("."+t);o.removeClassFromElements(e,"active")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),r=n(8),i=function(t){var e=o.mergeConfig(t);e.debugMode&&console.log("TCL: constructor -> config",e),r.initApp(e)};t.exports=i},function(t,e,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var r=n(7);e.mergeConfig=function(t){return o(o({},r.defaultConfig),t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.defaultConfig={debugMode:!1,menuItemClass:"mega-drop",menuDropClass:"mega-menu",mobileViewport:768,overrideMenuClass:"hs-menu-children-wrapper",overrideMenuParentClass:"hs-menu-item"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),r=n(19),i=n(22),u=n(3),s=n(23),c=n(26),a=n(4);e.initApp=function(t){var e=r.getStore(t);e.subscribe((function(n){n.debugMode&&console.log("Updated state",n),window.addEventListener("resize",o((function(){i.onResize(n,e)}),300));document.querySelectorAll("[class^="+t.menuItemClass+"]"),document.querySelectorAll("."+n.menuDropClass);n.megaMenuActive&&!u.isMobile(n.mobileViewport)?(c.init(t.menuItemClass,n.overrideMenuClass,n.overrideMenuParentClass,n.menuDropClass),window.addEventListener("scroll",(function(){a.deactivateMenu(n.menuDropClass)}))):s.deactivateInit(n.overrideMenuClass,n.menuDropClass)})),e.dispatch("activateState","")}},function(t,e,n){var o=n(0),r=n(10),i=n(13),u="Expected a function",s=Math.max,c=Math.min;t.exports=function(t,e,n){var a,l,f,d,p,v,m=0,b=!1,y=!1,g=!0;if("function"!=typeof t)throw new TypeError(u);function M(e){var n=a,o=l;return a=l=void 0,m=e,d=t.apply(o,n)}function h(t){var n=t-v;return void 0===v||n>=e||n<0||y&&t-m>=f}function O(){var t=r();if(h(t))return j(t);p=setTimeout(O,function(t){var n=e-(t-v);return y?c(n,f-(t-m)):n}(t))}function j(t){return p=void 0,g&&a?M(t):(a=l=void 0,d)}function _(){var t=r(),n=h(t);if(a=arguments,l=this,v=t,n){if(void 0===p)return function(t){return m=t,p=setTimeout(O,e),b?M(t):d}(v);if(y)return clearTimeout(p),p=setTimeout(O,e),M(v)}return void 0===p&&(p=setTimeout(O,e)),d}return e=i(e)||0,o(n)&&(b=!!n.leading,f=(y="maxWait"in n)?s(i(n.maxWait)||0,e):f,g="trailing"in n?!!n.trailing:g),_.cancel=function(){void 0!==p&&clearTimeout(p),m=0,a=v=l=p=void 0},_.flush=function(){return void 0===p?d:j(r())},_}},function(t,e,n){var o=n(1);t.exports=function(){return o.Date.now()}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(12))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var o=n(0),r=n(14),i=NaN,u=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return i;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=c.test(t);return n||a.test(t)?l(t.slice(2),n?2:8):s.test(t)?i:+t}},function(t,e,n){var o=n(15),r=n(18),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||r(t)&&o(t)==i}},function(t,e,n){var o=n(2),r=n(16),i=n(17),u="[object Null]",s="[object Undefined]",c=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:u:c&&c in Object(t)?r(t):i(t)}},function(t,e,n){var o=n(2),r=Object.prototype,i=r.hasOwnProperty,u=r.toString,s=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var o=!0}catch(t){}var r=u.call(t);return o&&(e?t[s]=n:delete t[s]),r}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var r=n(20),i=n(21),u={megaMenuActive:!0};e.getStore=function(t){var e=o(o({},t),u);return new i.default({actions:r.actions,mutations:r.mutations,initialState:e})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.actions={setMegaMenuStatus:function(t,e){t.commit("setMegaMenuStatus",e)},activateState:function(t){t.commit("activateState","")}},e.mutations={setMegaMenuStatus:function(t,e){return t.megaMenuActive=e,t},activateState:function(t,e){return t.stateActive=!0,t}}},function(t,e,n){"use strict";n.r(e);e.default=class{constructor(t){const e=this;e.actions={},e.mutations={},e.state={},e.status="resting",e.callbacks=[],t.hasOwnProperty("actions")&&(e.actions=t.actions),t.hasOwnProperty("mutations")&&(e.mutations=t.mutations),e.state=new Proxy(t.initialState||{},{set:(t,n,o)=>(t[n]=o,e.processCallbacks(e.state),e.status="resting",!0)})}dispatch(t,e){const n=this;return"function"!=typeof n.actions[t]?(console.error(`Action "${t}" doesn't exist.`),!1):(n.status="action",n.actions[t](n,e))}commit(t,e){const n=this;if("function"!=typeof n.mutations[t])return console.error(`Mutation "${t}" doesn't exist`),!1;n.status="mutation";let o=n.mutations[t](n.state,e);return n.state=o,!0}processCallbacks(t){return!!this.callbacks.length&&(this.callbacks.forEach(e=>e(t)),!0)}subscribe(t){return"function"!=typeof t?(console.error("You can only subscribe to Store changes with a valid function"),!1):(this.callbacks.push(t),!0)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3);e.onResize=function(t,e){o.isMobile(t.mobileViewport)?(t.debugMode&&console.log("in mobile"),e.dispatch("setMegaMenuStatus",!1)):e.dispatch("setMegaMenuStatus",!0)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(4);e.deactivateInit=function(t,e){r.deactivateMenu(e),o.toggleVisibilityOfNormalMenu(t,!0)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toggleVisibilityOfNormalMenu=function(t,e){void 0===e&&(e=!0);var n=document.querySelectorAll("."+t);if(n){var o=e?"":"none";n.forEach((function(t){t.style.display=o}))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.removeClassFromElements=function(t,e){t.forEach((function(t){t.classList.remove(e)}))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(28),r=n(27);e.init=function(t,e,n,i){var u=document.querySelectorAll("[class^="+t+"]");u.forEach((function(t,r){var u=o.getClosestParent(t,"."+n);if(u){var s=u.querySelector("."+e);s&&(s.style.display="none");var c=document.querySelector("."+i+"-"+(r+1));if(c){var a=c.cloneNode(!0);t.append(a)}}})),r.compensateForDistanceBetweenDropAndMenu(i,u,t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.compensateForDistanceBetweenDropAndMenu=function(t,e,n){var o=document.querySelectorAll("."+t)[0].getBoundingClientRect(),r=e[0].getBoundingClientRect(),i="<style>\n    [class^="+n+"] {\n        position: relative\n    }\n\n    [class^="+n+"]::after {\n        content: '';\n        height: "+(r.top+r.height-o.top)+"px;\n        left: 0;\n        position: absolute;\n        top: 100%;\n        width: 100%;\n    }\n\n    [class^="+n+"]:hover ."+t+" {\n        display: block !important;\n        visibility: visible;\n        opacity: 1\n    }\n  </style>\n  ";document.querySelector("head").innerHTML+=i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getClosestParent=function(t,e){for(;t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null}}]);