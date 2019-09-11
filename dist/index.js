var MegaMenu=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=n(8),s=function(t){var e=r.mergeConfig(t);o.initApp(e)};t.exports=s},function(t,e,n){"use strict";n.r(e);e.default=class{constructor(t){const e=this;e.actions={},e.mutations={},e.state={},e.status="resting",e.callbacks=[],t.hasOwnProperty("actions")&&(e.actions=t.actions),t.hasOwnProperty("mutations")&&(e.mutations=t.mutations),e.state=new Proxy(t.initialState||{},{set:(t,n,r)=>(t[n]=r,e.processCallbacks(e.state),e.status="resting",!0)})}dispatch(t,e){const n=this;return"function"!=typeof n.actions[t]?(console.error(`Action "${t}" doesn't exist.`),!1):(n.status="action",n.actions[t](n,e))}commit(t,e){const n=this;if("function"!=typeof n.mutations[t])return console.error(`Mutation "${t}" doesn't exist`),!1;n.status="mutation";let r=n.mutations[t](n.state,e);return n.state=r,!0}processCallbacks(t){return!!this.callbacks.length&&(this.callbacks.forEach(e=>e(t)),!0)}subscribe(t){return"function"!=typeof t?(console.error("You can only subscribe to Store changes with a valid function"),!1):(this.callbacks.push(t),!0)}}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(3);e.mergeConfig=function(t){return r(r({},o.defaultConfig),t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.defaultConfig={menuItemClass:"mega-drop",menuDropClass:"mega-menu",mobileViewport:768,overrideMenuClass:"hs-menu-children-wrapper"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.makeElementActive=function(t){t.classList.add("active")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.removeClassFromElements=function(t,e){t.forEach((function(t){t.classList.remove(e)}))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.actions={setMegaMenuStatus:function(t,e){t.commit("setMegaMenuStatus",e)},activateState:function(t){t.commit("activateState","")}},e.mutations={setMegaMenuStatus:function(t,e){return t.megaMenuActive=e,t},activateState:function(t,e){return t.stateActive=!0,t}}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(6),i=n(1),a={megaMenuActive:!0};e.appStore=new i.default({actions:s.actions,mutations:s.mutations,initialState:(o=this.config,r(r({},o),a))})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o=n(5),s=n(7);e.initApp=function(t){s.appStore.subscribe((function(e){if(e.megaMenuActive){var n=document.querySelectorAll("[class^="+t.menuItemClass+"]");n.forEach((function(t){t.addEventListener("mouseenter",(function(e){o.removeClassFromElements(n,"active"),r.makeElementActive(t)})),t.addEventListener("mouseleave",(function(){o.removeClassFromElements(n,"active")}))}))}})),s.appStore.dispatch("activateState","")}}]);