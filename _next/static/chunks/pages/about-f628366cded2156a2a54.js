_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(s.default.useContext(a.AmpStateContext))};var r,s=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,s=void 0!==r&&r,a=e.hasQuery,o=void 0!==a&&a;return n||s&&o}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=r?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(n,s,a):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),c=n("FYa8"),i=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function b(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(s){var a=!0,o=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){o=!0;var c=s.key.slice(s.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(s.type){case"title":case"base":t.has(s.type)?a=!1:t.add(s.type);break;case"meta":for(var i=0,l=h.length;i<l;i++){var d=h[i];if(s.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?a=!1:n.add(d);else{var u=s.props[d],b=r[d]||new Set;"name"===d&&o||!b.has(u)?(b.add(u),r[d]=b):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return s.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,s.useContext)(o.AmpStateContext),r=(0,s.useContext)(c.HeadManagerContext);return s.default.createElement(a.default,{reduceComponentsToState:b,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}p.rewind=function(){};var j=p;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var s=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=s},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Juyh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("nKUr"),s=n("g4pe"),a=n.n(s),o=n("hBto");function c(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:"SafeHouse - Home"}),Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),Object(r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",integrity:"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2",crossOrigin:"anonymous"}),Object(r.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf",crossOrigin:"anonymous"})]}),Object(r.jsx)(o.a,{}),Object(r.jsx)("div",{className:"bg-image-four",children:Object(r.jsxs)("div",{className:"bg-gradient-four",children:[Object(r.jsx)("div",{className:"main-text",style:{textAlign:"center"},children:Object(r.jsx)("h1",{children:"About Safehouse"})}),Object(r.jsxs)("div",{className:"about-cards",children:[Object(r.jsxs)("div",{className:"about-card",children:[Object(r.jsx)("a",{"data-bs-toggle":"collapse",href:"#questionOne",role:"button","aria-expanded":"false","aria-controls":"collapseExample",children:Object(r.jsxs)("div",{style:{color:"white",display:"inline"},children:[Object(r.jsx)("h2",{children:"What is Safehouse?"}),Object(r.jsx)("p",{children:"[expand]"})]})}),Object(r.jsx)("div",{className:"collapse",id:"questionOne",children:Object(r.jsxs)("div",{className:"",children:[Object(r.jsxs)("h3",{children:["We believe that ",Object(r.jsx)("tt",{children:"small businesses are underappreciated"})," by the big cyber companies. No one has the time to configure a complicated and expensive set of tools and analyze reams of data. We are creating an affordable, simple and proactive cybersecurity solution that will alleviate small businesses of their security woes."]}),Object(r.jsx)("br",{}),Object(r.jsxs)("h3",{children:[Object(r.jsx)("tt",{children:"Safehouse"})," is a suite of hyper-secure, affordable variable-interaction honeypots and honeypot IDS's that help protect production systems, aimed at small enterprises."]}),Object(r.jsx)("br",{})]})})]}),Object(r.jsx)("div",{style:{width:"100%",height:"3px",background:"white"}}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"about-card",children:[Object(r.jsx)("a",{"data-bs-toggle":"collapse",href:"#questionTwo",role:"button","aria-expanded":"false","aria-controls":"collapseExample",children:Object(r.jsxs)("div",{style:{color:"white",display:"inline"},children:[Object(r.jsx)("h2",{children:"What is a honeypot?"}),Object(r.jsx)("p",{children:"[expand]"})]})}),Object(r.jsx)("div",{className:"collapse",id:"questionTwo",children:Object(r.jsxs)("div",{className:"",children:[Object(r.jsxs)("h3",{children:[Object(r.jsx)("tt",{children:"Honeypots"})," are an often overlooked cybersecurity measure and a powerful research tool. A honeypot is a decory system or service intentionally left vulnerable to hackers. The goal of a honeypot is to collect data from intruders and divert their attention from the main infrastructure, which is easy because any connection to the honeypot is considered hostile."]}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Honeypots range in complexity from intercepting packets to emulating services to imitating fully-fledged components in the organization's infrastructure. Successful honeypots appear convincing to hackers and collect useful data while staying isolated from the rest of the infrastructure."}),Object(r.jsx)("br",{})]})})]}),Object(r.jsx)("div",{style:{width:"100%",height:"3px",background:"white"}}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"about-card",children:[Object(r.jsx)("a",{"data-bs-toggle":"collapse",href:"#questionThree",role:"button","aria-expanded":"false","aria-controls":"collapseExample",children:Object(r.jsxs)("div",{style:{color:"white",display:"inline"},children:[Object(r.jsx)("h2",{children:"How are honeypots used?"}),Object(r.jsx)("p",{children:"[expand]"})]})}),Object(r.jsx)("div",{className:"collapse",id:"questionThree",children:Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)("h3",{children:"Honeypots have two main purposes: diverting hackers and collecting data."}),Object(r.jsx)("br",{}),Object(r.jsxs)("h3",{children:[Object(r.jsx)("tt",{children:"Production honeypots"})," are used as a security measure by corporations. They are meant to fool hackers into thinking they've infiltrated the company's production systems when they are only interacting with a decoy. The company can enact security measures on the production system during an attack, in case the hacker realizes he's been duped. These ",Object(r.jsx)("tt",{children:"low-interaction"})," honeypots do not collect a lot of data and only emulate services frequently requested by hackers."]}),Object(r.jsx)("br",{}),Object(r.jsxs)("h3",{children:[Object(r.jsx)("tt",{children:"Research honeypots"})," are used by universities, governments and the military to reveal the motives and tactics of the hackers. As such, they collect as much information as possible and emulate entire computers. In contrast to production honeypots, these ",Object(r.jsx)("tt",{children:"high-interaction"})," honeypots are difficult to maintain and set up."]}),Object(r.jsx)("br",{})]})})]}),Object(r.jsx)("div",{style:{width:"100%",height:"3px",background:"white"}}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"about-card",children:[Object(r.jsx)("a",{"data-bs-toggle":"collapse",href:"#questionFour",role:"button","aria-expanded":"false","aria-controls":"collapseExample",children:Object(r.jsxs)("div",{style:{color:"white",display:"inline"},children:[Object(r.jsx)("h2",{children:"Why are honeypots great for cybersec?"}),Object(r.jsx)("p",{children:"[expand]"})]})}),Object(r.jsx)("div",{className:"collapse",id:"questionFour",children:Object(r.jsxs)("div",{className:"",children:[Object(r.jsxs)("h3",{children:["Intrusion Detection and Prevention Systems offer a ",Object(r.jsx)("tt",{children:"defensive"})," approach to cybersec. They become useful once an attack happens. If a hacker slips past these systems, the company's infrastructure is irreversibly compromised."]}),Object(r.jsx)("br",{}),Object(r.jsxs)("h3",{children:["In contrast, honeypots are a ",Object(r.jsx)("tt",{children:"offensive"})," security measure. They stop hackers before they even approach the production system and collect data to prevent them from getting any closer."]}),Object(r.jsx)("br",{})]})})]}),Object(r.jsx)("div",{style:{width:"100%",height:"3px",background:"white"}}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"about-card",children:[Object(r.jsx)("a",{"data-bs-toggle":"collapse",href:"#questionFive",role:"button","aria-expanded":"false","aria-controls":"collapseExample",children:Object(r.jsxs)("div",{style:{color:"white",display:"inline"},children:[Object(r.jsx)("h2",{children:"Why Safehouse?"}),Object(r.jsx)("p",{children:"[expand]"})]})}),Object(r.jsx)("div",{className:"collapse",id:"questionFive",children:Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)("h3",{children:"Safehouse has all of the features of typical honeypot software."}),Object(r.jsx)("br",{}),Object(r.jsxs)("h3",{children:["The key difference is that we host ",Object(r.jsx)("tt",{children:"secure, convincing honeypots"})," on our own servers. Malicious requests to your infrastructure can be proxied to our managed honeypots."]}),Object(r.jsx)("br",{}),Object(r.jsxs)("h3",{children:["This model ",Object(r.jsx)("tt",{children:"eliminates the security risks and maintenance costs"})," associated with high-interaction honeypots. With Safehouse, companies can leverage the benefits of both low and high interaction honeypots without any downsides."]}),Object(r.jsx)("br",{}),Object(r.jsxs)("h3",{children:["We also use ",Object(r.jsx)("tt",{children:"synthetic data"})," to make the honeypots as convincing as real systems."]}),Object(r.jsx)("br",{})]})})]}),Object(r.jsx)("div",{style:{width:"100%",height:"3px",background:"white"}}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"about-card",children:[Object(r.jsx)("a",{"data-bs-toggle":"collapse",href:"#questionSix",role:"button","aria-expanded":"false","aria-controls":"collapseExample",children:Object(r.jsxs)("div",{style:{color:"white",display:"inline"},children:[Object(r.jsx)("h2",{children:"When will Safehouse be ready to use?"}),Object(r.jsx)("p",{children:"[expand]"})]})}),Object(r.jsx)("div",{className:"collapse",id:"questionSix",children:Object(r.jsxs)("div",{className:"",children:[Object(r.jsxs)("h3",{children:["Safehouse is currently in the early stages of development. We do not know exactly when it will be ready for release but we suspect that there will be an alpha by ",Object(r.jsx)("tt",{children:"Fall 2021"})," at the latest. Until then, we will post continual updates to our blog and social media."]}),Object(r.jsx)("br",{})]})})]})]}),Object(r.jsxs)("div",{className:"bottom-text",style:{top:"200px"},children:[Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"/#prices",children:Object(r.jsx)("button",{type:"button",className:"button btn-danger",children:Object(r.jsx)("h3",{children:"Get Safehouse"})})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("button",{type:"button",className:"button btn-dark",children:Object(r.jsx)("h3",{children:"Read Our Blog"})})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{style:{width:"100%",height:"3px",background:"gray"}}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{className:"navbar-brand",style:{color:"white"},href:"#",children:Object(r.jsx)("h2",{children:"SafeHouse"})}),Object(r.jsxs)("p",{children:["Powered by the ",Object(r.jsx)("a",{href:"https://www.stevens.edu/academics/undergraduate-studies/undergraduate-entrepreneurship-programs/launchpadstevens",children:"Launchpad Program"})," at Stevens"]}),Object(r.jsx)("img",{src:"launchpad.png",width:"100px",height:"100px"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})]})})]})}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),s=n("EbDI"),a=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||s(e)||a(e)||o()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),s=n("lwsE"),a=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),c=n("a1gu"),i=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var s=i(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),u=function(e){o(n,e);var t=l(n);function n(e){var a;return s(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),s=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?s(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},hBto:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr");function s(){return Object(r.jsx)("div",{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-very-dark",children:Object(r.jsx)("a",{className:"navbar-brand",style:{color:"white"},href:"/",children:Object(r.jsx)("h2",{children:"SafeHouse"})})})})}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var s=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=s},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,1]]]);