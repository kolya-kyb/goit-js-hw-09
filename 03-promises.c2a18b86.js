var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var r=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,r.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=r);var t=r("iQIUW");function i(e,o){return new Promise(((n,r)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):r({position:e,delay:o})}),o)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(e=>{e.preventDefault();const{elements:{delay:o,step:n,amount:r}}=e.currentTarget;let l=Number(o.value);for(let e=1;e<=Number(r.value);e+=1)i(e,l).then((({position:e,delay:o})=>{t.Notify.success(` Fulfilled promise ${e} in ${o}ms`),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{t.Notify.failure(` Rejected promise ${e} in ${o}ms`),console.log(`❌ Rejected promise ${e} in ${o}ms`)})),l+=Number(n.value)}));
//# sourceMappingURL=03-promises.c2a18b86.js.map