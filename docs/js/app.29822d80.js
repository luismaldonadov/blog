(function(e){function t(t){for(var o,i,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)i=c[l],r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c6e":function(e,t,n){},"0e9b":function(e,t,n){"use strict";var o=n("2dc4"),r=n.n(o);r.a},"2dc4":function(e,t,n){},"4ec7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=n("ecee"),a=n("b702"),i=n("f2d1"),c=n("ad3d"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about-me"}},[e._v("About Me")])],1),n("div",{attrs:{id:"footer"}},[n("Footer")],1),n("router-view")],1)},u=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-links"},[n("div",{staticClass:"icons"},[n("a",{attrs:{href:e.email}},[n("font-awesome-icon",{attrs:{icon:["far","envelope"],size:"2x"}})],1),n("a",{attrs:{href:e.github}},[n("font-awesome-icon",{attrs:{icon:["fab","github"],size:"2x"}})],1),n("a",{attrs:{href:e.linkedin}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"2x"}})],1),n("a",{attrs:{href:e.stackOverflow}},[n("font-awesome-icon",{attrs:{icon:["fab","stack-overflow"],size:"2x"}})],1)]),n("div",{staticClass:"buttercms"},[n("span",[e._v("Powered by "),n("a",{attrs:{href:e.apiURL}},[e._v("ButterCMS")])])])])},l=[],d={data:function(){return{apiURL:"https://buttercms.com/",github:"https://github.com/luismaldonadov",linkedin:"https://www.linkedin.com/in/luismaldonadov/",stackOverflow:"https://stackoverflow.com/users/10286251/luis-maldonado?tab=profile",email:"mailto:contact@luism.me"}}},p=d,b=(n("0e9b"),n("2877")),h=Object(b["a"])(p,f,l,!1,null,"16f0ecfc",null),v=h.exports,m={components:{Footer:v}},g=m,w=(n("5c0b"),Object(b["a"])(g,s,u,!1,null,null,null)),_=w.exports,k=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-container"},[n("h1",[e._v(e._s(e.homePage.fields.heading_content))]),n("div",[e._v("\n    "+e._s(e.homePage.fields.first_paragraph)+"\n  ")])])},O=[],P=(n("6b54"),n("87b3"),n("b396")),M=n.n(P),j=M()("08871835f21d88def0b1b835cd02cb110c963c0c"),x={name:"Home",data:function(){return{homePage:""}},beforeRouteEnter:function(e,t,n){n(function(e){return e.getHomePage()})},created:function(){this.getHomePage()},methods:{getHomePage:function(){var e=this;j.page.retrieve("*","home").then(function(t){e.homePage=t.data.data}).catch(function(t){throw e.error=t.toString(),new Error(t)})}}},E=x,S=(n("872c"),Object(b["a"])(E,y,O,!1,null,"620d831f",null)),C=S.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about-me-container"},[n("h1",[e._v(e._s(e.aboutMe.fields.heading_content))]),n("p",[e._v(e._s(e.aboutMe.fields.paragraph1))]),n("p",[e._v(e._s(e.aboutMe.fields.paragraph2))]),n("p",[e._v(e._s(e.aboutMe.fields.closing_quote))])])},H=[],$=M()("08871835f21d88def0b1b835cd02cb110c963c0c"),z={name:"AboutMe",data:function(){return{aboutMe:null}},beforeRouteEnter:function(e,t,n){n(function(e){return e.getAboutMePage()})},created:function(){this.getHomePage()},methods:{getAboutMePage:function(){var e=this;$.page.retrieve("*","about-me").then(function(t){e.aboutMe=t.data.data}).catch(function(e){throw new Error(e)})}}},F=z,R=(n("b669"),Object(b["a"])(F,A,H,!1,null,"faf81cc0",null)),L=R.exports;o["a"].use(k["a"]);var N=new k["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:C},{path:"/about-me",name:"about-me",component:L}]}),T=n("2f62");o["a"].use(T["a"]);var q=new T["a"].Store({state:{},mutations:{},actions:{}}),B=n("9483");Object(B["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["c"].add({faEnvelope:a["a"],faGithub:i["a"],faLinkedin:i["b"],faStackOverflow:i["c"]}),o["a"].component("font-awesome-icon",c["a"]),o["a"].config.productionTip=!1,new o["a"]({router:N,store:q,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},"872c":function(e,t,n){"use strict";var o=n("4ec7"),r=n.n(o);r.a},b669:function(e,t,n){"use strict";var o=n("0c6e"),r=n.n(o);r.a}});
//# sourceMappingURL=app.29822d80.js.map