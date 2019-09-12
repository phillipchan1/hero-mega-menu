var MegaMenu=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var o=n(9),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},function(t,e,n){var o=n(1).Symbol;t.exports=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(6),i=function(t){var e=o.mergeConfig(t);e.debugMode&&console.log("TCL: constructor -> config",e),r.initApp(e)};t.exports=i},function(t,e,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var r=n(5);e.mergeConfig=function(t){return o(o({},r.defaultConfig),t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.defaultConfig={debugMode:!1,menuItemClass:"mega-drop",menuDropClass:"mega-menu",mobileViewport:768,overrideMenuClass:"hs-menu-children-wrapper"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),r=n(17),i=n(20),u=n(24);e.initApp=function(t){var e=r.getStore(t);e.subscribe((function(n){if(n.debugMode&&console.log("Updated state",n),n.megaMenuActive){var r=document.querySelectorAll("[class^="+t.menuItemClass+"]");i.attachMegaMenuEventListeners(r,n),window.addEventListener("resize",o((function(){u.onResize(n,e)}),300))}})),e.dispatch("activateState","")}},function(t,e,n){var o=n(0),r=n(8),i=n(11),u="Expected a function",a=Math.max,c=Math.min;t.exports=function(t,e,n){var s,f,l,v,d,p,m=0,b=!1,g=!1,y=!0;if("function"!=typeof t)throw new TypeError(u);function M(e){var n=s,o=f;return s=f=void 0,m=e,v=t.apply(o,n)}function h(t){var n=t-p;return void 0===p||n>=e||n<0||g&&t-m>=l}function j(){var t=r();if(h(t))return O(t);d=setTimeout(j,function(t){var n=e-(t-p);return g?c(n,l-(t-m)):n}(t))}function O(t){return d=void 0,y&&s?M(t):(s=f=void 0,v)}function _(){var t=r(),n=h(t);if(s=arguments,f=this,p=t,n){if(void 0===d)return function(t){return m=t,d=setTimeout(j,e),b?M(t):v}(p);if(g)return clearTimeout(d),d=setTimeout(j,e),M(p)}return void 0===d&&(d=setTimeout(j,e)),v}return e=i(e)||0,o(n)&&(b=!!n.leading,l=(g="maxWait"in n)?a(i(n.maxWait)||0,e):l,y="trailing"in n?!!n.trailing:y),_.cancel=function(){void 0!==d&&clearTimeout(d),m=0,s=p=f=d=void 0},_.flush=function(){return void 0===d?v:O(r())},_}},function(t,e,n){var o=n(1);t.exports=function(){return o.Date.now()}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(10))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var o=n(0),r=n(12),i=NaN,u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return i;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=c.test(t);return n||s.test(t)?f(t.slice(2),n?2:8):a.test(t)?i:+t}},function(t,e,n){var o=n(13),r=n(16),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||r(t)&&o(t)==i}},function(t,e,n){var o=n(2),r=n(14),i=n(15),u="[object Null]",a="[object Undefined]",c=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:u:c&&c in Object(t)?r(t):i(t)}},function(t,e,n){var o=n(2),r=Object.prototype,i=r.hasOwnProperty,u=r.toString,a=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var o=!0}catch(t){}var r=u.call(t);return o&&(e?t[a]=n:delete t[a]),r}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var r=n(18),i=n(19),u={megaMenuActive:!0};e.getStore=function(t){var e=o(o({},t),u);return new i.default({actions:r.actions,mutations:r.mutations,initialState:e})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.actions={setMegaMenuStatus:function(t,e){t.commit("setMegaMenuStatus",e)},activateState:function(t){t.commit("activateState","")}},e.mutations={setMegaMenuStatus:function(t,e){return t.megaMenuActive=e,t},activateState:function(t,e){return t.stateActive=!0,t}}},function(t,e,n){"use strict";n.r(e);e.default=class{constructor(t){const e=this;e.actions={},e.mutations={},e.state={},e.status="resting",e.callbacks=[],t.hasOwnProperty("actions")&&(e.actions=t.actions),t.hasOwnProperty("mutations")&&(e.mutations=t.mutations),e.state=new Proxy(t.initialState||{},{set:(t,n,o)=>(t[n]=o,e.processCallbacks(e.state),e.status="resting",!0)})}dispatch(t,e){const n=this;return"function"!=typeof n.actions[t]?(console.error(`Action "${t}" doesn't exist.`),!1):(n.status="action",n.actions[t](n,e))}commit(t,e){const n=this;if("function"!=typeof n.mutations[t])return console.error(`Mutation "${t}" doesn't exist`),!1;n.status="mutation";let o=n.mutations[t](n.state,e);return n.state=o,!0}processCallbacks(t){return!!this.callbacks.length&&(this.callbacks.forEach(e=>e(t)),!0)}subscribe(t){return"function"!=typeof t?(console.error("You can only subscribe to Store changes with a valid function"),!1):(this.callbacks.push(t),!0)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(21),r=n(23);e.attachMegaMenuEventListeners=function(t,e){t.forEach((function(n){n.addEventListener("mouseenter",(function(){e.megaMenuActive&&(r.removeClassFromElements(t,"active"),o.activateMenu(n))}),!0),n.addEventListener("mouseleave",(function(){e.megaMenuActive&&r.removeClassFromElements(t,"active")}),!0)}))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(22);e.activateMenu=function(t){o.makeElementActive(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.makeElementActive=function(t){t.classList.add("active")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.removeClassFromElements=function(t,e){t.forEach((function(t){t.classList.remove(e)}))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(25);e.onResize=function(t,e){o.isMobile(t.mobileViewport)?(t.debugMode&&console.log("in mobile"),e.dispatch("setMegaMenuStatus",!1)):e.dispatch("setMegaMenuStatus",!0)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isMobile=function(t){return window.innerWidth<t}}]);