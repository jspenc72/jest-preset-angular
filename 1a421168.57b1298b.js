(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,f=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return n?o.a.createElement(f,s(s({ref:t},u),{},{components:n})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(110)),i={id:"test-environment",title:"Test environment"},s={unversionedId:"getting-started/test-environment",id:"getting-started/test-environment",isDocsHomePage:!1,title:"Test environment",description:"If you look at setup-jest.ts,",source:"@site/docs/getting-started/test-environment.md",slug:"/getting-started/test-environment",permalink:"/jest-preset-angular/docs/next/getting-started/test-environment",editUrl:"https://github.com/thymikee/jest-preset-angular/edit/master/website/docs/getting-started/test-environment.md",version:"current",sidebar:"docs",previous:{title:"Options",permalink:"/jest-preset-angular/docs/next/getting-started/options"},next:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/next/guides/angular-ivy"}},c=[],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you look at ",Object(a.b)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/blob/master/src/config/setup-jest.ts"},Object(a.b)("inlineCode",{parentName:"a"},"setup-jest.ts")),",\nwhat we're doing here is we're adding globals required by Angular. With the included ",Object(a.b)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/tree/master/src/zone-patch"},"jest-zone-patch"),"\nwe also make sure Jest test methods run in Zone context. Then we initialize the Angular testing environment like normal."))}p.isMDXComponent=!0}}]);