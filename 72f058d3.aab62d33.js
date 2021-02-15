(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(110)),i={id:"troubleshooting",title:"Troubleshooting"},s={unversionedId:"guides/troubleshooting",id:"version-8.x/guides/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"You can check Jest troubleshooting guide",source:"@site/versioned_docs/version-8.x/guides/troubleshooting.md",slug:"/guides/troubleshooting",permalink:"/jest-preset-angular/docs/guides/troubleshooting",editUrl:"https://github.com/thymikee/jest-preset-angular/edit/master/website/versioned_docs/version-8.x/guides/troubleshooting.md",version:"8.x",sidebar:"version-8.x-docs",previous:{title:"Absolute Imports",permalink:"/jest-preset-angular/docs/guides/absolute-imports"}},l=[{value:"Common issues",id:"common-issues",children:[{value:"Can&#39;t resolve all parameters for SomeClass(?)",id:"cant-resolve-all-parameters-for-someclass",children:[]},{value:"@Input() bindings are not reflected into fixture when <code>ChangeDetectionStrategy.OnPush</code> is used",id:"input-bindings-are-not-reflected-into-fixture-when-changedetectionstrategyonpush-is-used",children:[]},{value:"The animation trigger &quot;transformMenu&quot; has failed",id:"the-animation-trigger-transformmenu-has-failed",children:[]},{value:"Unexpected token import|export|other",id:"unexpected-token-importexportother",children:[]},{value:"Observable ... is not a function",id:"observable--is-not-a-function",children:[]},{value:"Allow vendor libraries like jQuery, etc...",id:"allow-vendor-libraries-like-jquery-etc",children:[]}]}],c={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can check Jest ",Object(a.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/troubleshooting"},"troubleshooting guide")),Object(a.b)("h2",{id:"common-issues"},"Common issues"),Object(a.b)("p",null,"Problems may arise if you're using custom builds (this preset is tailored for ",Object(a.b)("inlineCode",{parentName:"p"},"angular-cli")," as firstly priority). Please be advised that every entry in default configuration may be overridden to best suite your app's needs."),Object(a.b)("h3",{id:"cant-resolve-all-parameters-for-someclass"},"Can't resolve all parameters for SomeClass(?)"),Object(a.b)("p",null,"With Angular 8 and higher, a ",Object(a.b)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/issues/288"},"change to the way the Angular CLI works")," may be causing your metadata to be lost. You can update your ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.spec.json")," to include the ",Object(a.b)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," compiler option:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'  "compilerOptions": {\n    "emitDecoratorMetadata": true\n')),Object(a.b)("p",null,"In general, this is related to Angular's reflection and also depends on a reflection library, as e. g. included in ",Object(a.b)("inlineCode",{parentName:"p"},"core-js"),". We use our own minimal reflection that satisfy Angular's current requirements, but in case these change, you can install ",Object(a.b)("inlineCode",{parentName:"p"},"core-js")," and import the reflection library in your ",Object(a.b)("inlineCode",{parentName:"p"},"setup-jest.ts"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"require('core-js/es/reflect');\nrequire('core-js/proposals/reflect-metadata');\n")),Object(a.b)("p",null,"Note that this might also be related to other issues with the dependency injection and parameter type reflection."),Object(a.b)("h3",{id:"input-bindings-are-not-reflected-into-fixture-when-changedetectionstrategyonpush-is-used"},"@Input() bindings are not reflected into fixture when ",Object(a.b)("inlineCode",{parentName:"h3"},"ChangeDetectionStrategy.OnPush")," is used"),Object(a.b)("p",null,"This issue is not related to Jest, ",Object(a.b)("a",{parentName:"p",href:"https://github.com/angular/angular/issues/12313"},"it's a known Angular bug")),Object(a.b)("p",null,"To mitigate this, you need to wrap your component under test, into some container component with default change detection strategy (",Object(a.b)("inlineCode",{parentName:"p"},"ChangeDetectionStrategy.Default"),") and pass props through it, or overwrite change detection strategy within ",Object(a.b)("inlineCode",{parentName:"p"},"TestBed")," setup, if it's not critical for the test."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"// override change detection strategy\nbeforeEach(async(() => {\n  TestBed.configureTestingModule({ declarations: [PizzaItemComponent] })\n    .overrideComponent(PizzaItemComponent, {\n      set: { changeDetection: ChangeDetectionStrategy.Default },\n    })\n    .compileComponents();\n}));\n")),Object(a.b)("h3",{id:"the-animation-trigger-transformmenu-has-failed"},'The animation trigger "transformMenu" has failed'),Object(a.b)("p",null,"The currently used JSDOM version handles this, but older versions used before v7 of this preset was missing transform property. To patch it for Angular Material, use this workaround."),Object(a.b)("p",null,"Add this to your ",Object(a.b)("inlineCode",{parentName:"p"},"jestGlobalMocks")," file"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"Object.defineProperty(document.body.style, 'transform', {\n  value: () => {\n    return {\n      enumerable: true,\n      configurable: true,\n    };\n  },\n});\n")),Object(a.b)("p",null,"Reference: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/angular/material2/issues/7101"},"https://github.com/angular/material2/issues/7101")),Object(a.b)("h3",{id:"unexpected-token-importexportother"},"Unexpected token ","[import|export|other]"),Object(a.b)("p",null,"This means, that a file is not transformed through TypeScript compiler, e.g. because it is a JS file with TS syntax, or it is published to npm as uncompiled source files. Here's what you can do."),Object(a.b)("h4",{id:"adjust-your-tsconfigspecjson"},"Adjust your ",Object(a.b)("inlineCode",{parentName:"h4"},"tsconfig.spec.json"),":"),Object(a.b)("p",null,"Since Angular released v6, the default ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," and ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.spec.json")," have been changed. Therefore, ",Object(a.b)("inlineCode",{parentName:"p"},"jest")," will throw an error"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"    ({\"Object.<anonymous>\":function(module,exports,require,__dirname,__filename,global,jest){import 'jest-preset-angular';\n                                                                                             ^^^^^^\n    SyntaxError: Unexpected token import\n      at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/script_transformer.js:403:17)\n")),Object(a.b)("p",null,"What you need to do is adjust your ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.spec.json")," to add the option ",Object(a.b)("inlineCode",{parentName:"p"},'"module": "commonjs",')),Object(a.b)("p",null,"A default ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.spec.json")," after modifying will look like this"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "outDir": "../out-tsc/spec",\n    "module": "commonjs",\n    "types": [\n      "jest",\n      "jsdom",\n      "node"\n    ]\n  },\n  "include": [\n    "**/*.d.ts"\n  ]\n')),Object(a.b)("h4",{id:"adjust-your-transformignorepatterns-whitelist"},"Adjust your ",Object(a.b)("inlineCode",{parentName:"h4"},"transformIgnorePatterns")," whitelist:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json5"},"{\n  jest: {\n    transformIgnorePatterns: ['node_modules/(?!@ngrx|angular2-ui-switch|ng-dynamic)'],\n  },\n}\n")),Object(a.b)("p",null,"By default, Jest doesn't transform ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),", because they should be valid JavaScript files. However, it happens that library authors assume that you'll compile their sources. So you have to tell this to Jest explicitly. Above snippet means that ",Object(a.b)("inlineCode",{parentName:"p"},"@ngrx"),", ",Object(a.b)("inlineCode",{parentName:"p"},"angular2-ui-switch")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ng-dynamic")," will be transformed, even though they're ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(a.b)("h3",{id:"observable--is-not-a-function"},"Observable ... is not a function"),Object(a.b)("p",null,"Note: This fix is only relevant to Angular v5 and lower."),Object(a.b)("p",null,"Since v1.0 this preset doesn't import whole ",Object(a.b)("inlineCode",{parentName:"p"},"rxjs")," library by default for variety of reasons. This may result in breaking your tests that relied on this behavior. It may however become cumbersome to include e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"rxjs/add/operator/map")," or ",Object(a.b)("inlineCode",{parentName:"p"},"rxjs/add/operator/do")," for every test, so as a workaround you can include common operators or other necessary imports in your ",Object(a.b)("inlineCode",{parentName:"p"},"setup-jest.ts")," file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import 'jest-preset-angular/setup-jest';\n\n// common rxjs imports\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/switchMap';\nimport 'rxjs/add/operator/do';\nimport 'rxjs/add/operator/catch';\n// ...\n\nimport './jestGlobalMocks';\n")),Object(a.b)("h3",{id:"allow-vendor-libraries-like-jquery-etc"},"Allow vendor libraries like jQuery, etc..."),Object(a.b)("p",null,"The same like normal Jest configuration, you can load jQuery in your Jest setup file. For example your Jest setup file is ",Object(a.b)("inlineCode",{parentName:"p"},"setup-jest.ts")," you can declare jQuery:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"window.$ = require('path/to/jquery');\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import $ from 'jquery';\nglobal.$ = global.jQuery = $;\n")),Object(a.b)("p",null,"The same declaration can be applied to other vendor libraries."),Object(a.b)("p",null,"Reference: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/708"},"https://github.com/facebook/jest/issues/708")))}u.isMDXComponent=!0}}]);