(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),a=(n(0),n(123)),i={id:"theory",title:"Theory"},c={id:"introduction/theory",title:"Theory",description:"Schema Driven: REST (SDR) is a series of tools and plugins that allow you to build your REST APIs using GraphQL schema definitions. ",source:"@site/docs\\introduction\\theory.md",permalink:"/docs/introduction/theory",editUrl:"https://github.com/schema-driven-rest/schema-driven-rest.github.io/edit/master/docs/introduction/theory.md",sidebar:"someSidebar",next:{title:"Installation",permalink:"/docs/introduction/installation"}},s=[{value:"Example Schema",id:"example-schema",children:[]},{value:"Inspiration",id:"inspiration",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Schema Driven: REST (SDR) is a series of tools and plugins that allow you to build your REST APIs using GraphQL schema definitions. "),Object(a.b)("p",null,"The magic of SDR is the plugin ecosystem around it. You install the plugins you need to generate code for your projects. Plugins can include both decorators that are used in your schema, and code generators to emit code for your project."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Important:")," There is no GraphQL runtime component of SDR. It simply uses GraphQL as a way of expressing your schema. "),Object(a.b)("h2",{id:"example-schema"},"Example Schema"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'type User @controller(path: "user") {\n  login(request: LoginRequest!): LoginResponse!\n    @request(method: POST, path: "login")\n}\n\ntype LoginRequest @model {\n  username: String!\n}\ntype LoginResponse @model {\n  authorized: Boolean!\n  jwt: String!\n}\n')),Object(a.b)("h2",{id:"inspiration"},"Inspiration"),Object(a.b)("p",null,"This project was inspired by the incredible ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql-code-generator.com/"}),"GraphQL Code Generator"),". If you are in need of solving this problem specifically for GraphQL, this framework provides an unmatched level of support and plugins to do so. "))}u.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,f=l["".concat(i,".").concat(m)]||l[m]||d[m]||a;return n?o.a.createElement(f,c({ref:t},p,{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);