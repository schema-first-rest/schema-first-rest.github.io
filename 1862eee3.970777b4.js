(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(m,c({ref:t},s,{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(6),a=(r(0),r(113)),i={id:"getStarted",title:"Get Started",sidebar_label:"Get Started"},c={id:"introduction/getStarted",title:"Get Started",description:"## Theory",source:"@site/docs\\introduction\\getStarted.md",permalink:"/docs/introduction/getStarted",editUrl:"https://github.com/schema-first-rest/schema-first-rest.github.io/edit/master/docs/introduction/getStarted.md",sidebar_label:"Get Started",sidebar:"someSidebar",next:{title:"Installation",permalink:"/docs/introduction/installation"}},l=[{value:"Theory",id:"theory",children:[]},{value:"Example GraphQL",id:"example-graphql",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"theory"},"Theory"),Object(a.b)("p",null,"Schema First: Rest (SFR) is a series of tools that allow you to build your REST APIs using GraphQL schema definitions. "),Object(a.b)("p",null,"The magic of SFR is the plugin ecosystem around it. You install the plugins you need to generate code for your projects needs. Plugins decorators that can be used in your schema, and code generators to emit code for your project."),Object(a.b)("h2",{id:"example-graphql"},"Example GraphQL"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'type User @controller(path: "user") {\n  login(request: LoginRequest!): LoginResponse!\n    @request(method: POST, path: "login")\n}\n\ntype LoginRequest @model {\n  username: String!\n}\ntype LoginResponse @model {\n  authorized: Boolean!\n  jwt: String!\n}\n')),Object(a.b)("p",null,"This block of code uses the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/plugins/controller"}),"Controller Plugin")," which exposes the ",Object(a.b)("inlineCode",{parentName:"p"},"controller"),", ",Object(a.b)("inlineCode",{parentName:"p"},"request"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"model")," decorators. This plugin does not emit any code in and of itself; it simply provides metadata in the form of decorators to other plugins so they can execute their individual tasks. For instance, the plugins ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/plugins/raw-fetch"}),"Raw Fetch Plugin")," and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/plugins/models"}),"Models Plugin")," use the metadata to build a typescript file to make requests to your api."))}u.isMDXComponent=!0}}]);