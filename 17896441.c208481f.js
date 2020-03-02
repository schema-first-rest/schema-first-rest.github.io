/*! For license information please see 17896441.c208481f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(208),i=a(132),c=a(139),s=a(155);var m=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous"),l.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next"),l.a.createElement("h4",{className:"pagination-nav__link--label"},t.next.title," \xbb"))))};var o=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n=[],i=[];function c(){const c=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(c){let a=0,n=!1;for(i=document.getElementsByClassName(e);a<i.length&&!n;){const e=i[a],{href:s}=e,m=decodeURIComponent(s.substring(s.indexOf("#")+1));c.id===m&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}})},d=a(128),u=a.n(d),g=a(91),E=a.n(g);function v({headings:e}){return o("contents__link","contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:E.a.tableOfContents},l.a.createElement(p,{headings:e})))}function p({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"contents contents__left-border"},e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:`#${e.id}`,className:"contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(p,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(i.a)(),{url:a,title:n}=t,{content:s}=e,{metadata:o}=s,{description:d,title:g,permalink:p,editUrl:h,lastUpdatedAt:f,lastUpdatedBy:_,version:N}=o,{frontMatter:{image:b,keywords:y,hide_title:k,hide_table_of_contents:w}}=s,x=a+Object(c.a)(b);return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,g&&l.a.createElement("title",null,g," | ",n),d&&l.a.createElement("meta",{name:"description",content:d}),d&&l.a.createElement("meta",{property:"og:description",content:d}),y&&y.length&&l.a.createElement("meta",{name:"keywords",content:y.join(",")}),b&&l.a.createElement("meta",{property:"og:image",content:x}),b&&l.a.createElement("meta",{property:"twitter:image",content:x}),b&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${g}`}),p&&l.a.createElement("meta",{property:"og:url",content:a+p})),l.a.createElement("div",{className:"padding-vert--lg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:u()("col",E.a.docItemCol)},l.a.createElement("div",{className:E.a.docItemContainer},l.a.createElement("article",null,N&&l.a.createElement("span",{style:{verticalAlign:"top"},className:"badge badge--info"},"Version: ",N),!k&&l.a.createElement("header",null,l.a.createElement("h1",{className:E.a.docTitle},g)),l.a.createElement("div",{className:"markdown"},l.a.createElement(s,null))),(h||f||_)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},h&&l.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(f||_)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",f&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*f).toISOString(),className:E.a.docLastUpdatedAt},new Date(1e3*f).toLocaleDateString()),_&&" "),_&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,_)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(m,{metadata:o})))),!w&&s.rightToc&&l.a.createElement(v,{headings:s.rightToc})))))}},128:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=l.apply(null,n);i&&e.push(i)}else if("object"===r)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}}]);