"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5876],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var d=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);n&&(d=d.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,d)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,d,r=function(e,n){if(null==e)return{};var t,d,r={},a=Object.keys(e);for(d=0;d<a.length;d++)t=a[d],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(d=0;d<a.length;d++)t=a[d],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=d.createContext({}),u=function(e){var n=d.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return d.createElement(s.Provider,{value:n},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return d.createElement(d.Fragment,{},n)}},h=d.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),h=r,m=p["".concat(s,".").concat(h)]||p[h]||l[h]||a;return t?d.createElement(m,o(o({ref:n},c),{},{components:t})):d.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=h;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return d.createElement.apply(null,o)}return d.createElement.apply(null,t)}h.displayName="MDXCreateElement"},96511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var d=t(87462),r=(t(67294),t(3905));const a={hide_table_of_contents:!0},o="BlendModes",i={unversionedId:"examples/basic/blendmodes",id:"examples/basic/blendmodes",title:"BlendModes",description:"",source:"@site/docs/examples/basic/blendmodes.md",sourceDirName:"examples/basic",slug:"/examples/basic/blendmodes",permalink:"/examples/basic/blendmodes",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/basic/blendmodes.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Examples",permalink:"/examples/"},next:{title:"CacheAsBitmap",permalink:"/examples/basic/cacheasbitmap"}},s={},u=[],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,d.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blendmodes"},"BlendModes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"const app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// create a new background sprite\nconst background = PIXI.Sprite.from('https://beta.pixijs.com/assets/bg_rotate.jpg');\nbackground.width = app.screen.width;\nbackground.height = app.screen.height;\napp.stage.addChild(background);\n\n// create an array to store a reference to the dudes\nconst dudeArray = [];\n\nconst totaldudes = 20;\n\nfor (let i = 0; i < totaldudes; i++) {\n    // create a new Sprite that uses the image name that we just generated as its source\n    const dude = PIXI.Sprite.from('https://beta.pixijs.com/assets/flowerTop.png');\n\n    dude.anchor.set(0.5);\n\n    // set a random scale for the dude\n    dude.scale.set(0.8 + Math.random() * 0.3);\n\n    // finally let's set the dude to be at a random position...\n    dude.x = Math.floor(Math.random() * app.screen.width);\n    dude.y = Math.floor(Math.random() * app.screen.height);\n\n    // The important bit of this example, this is how you change the default blend mode of the sprite\n    dude.blendMode = PIXI.BLEND_MODES.ADD;\n\n    // create some extra properties that will control movement\n    dude.direction = Math.random() * Math.PI * 2;\n\n    // this number will be used to modify the direction of the dude over time\n    dude.turningSpeed = Math.random() - 0.8;\n\n    // create a random speed for the dude between 0 - 2\n    dude.speed = 2 + Math.random() * 2;\n\n    // finally we push the dude into the dudeArray so it it can be easily accessed later\n    dudeArray.push(dude);\n\n    app.stage.addChild(dude);\n}\n\n// create a bounding box for the little dudes\nconst dudeBoundsPadding = 100;\n\nconst dudeBounds = new PIXI.Rectangle(\n    -dudeBoundsPadding,\n    -dudeBoundsPadding,\n    app.screen.width + dudeBoundsPadding * 2,\n    app.screen.height + dudeBoundsPadding * 2,\n);\n\napp.ticker.add(() => {\n    // iterate through the dudes and update the positions\n    for (let i = 0; i < dudeArray.length; i++) {\n        const dude = dudeArray[i];\n        dude.direction += dude.turningSpeed * 0.01;\n        dude.x += Math.sin(dude.direction) * dude.speed;\n        dude.y += Math.cos(dude.direction) * dude.speed;\n        dude.rotation = -dude.direction - Math.PI / 2;\n\n        // wrap the dudes by testing their bounds...\n        if (dude.x < dudeBounds.x) {\n            dude.x += dudeBounds.width;\n        } else if (dude.x > dudeBounds.x + dudeBounds.width) {\n            dude.x -= dudeBounds.width;\n        }\n\n        if (dude.y < dudeBounds.y) {\n            dude.y += dudeBounds.height;\n        } else if (dude.y > dudeBounds.y + dudeBounds.height) {\n            dude.y -= dudeBounds.height;\n        }\n    }\n});\n")))}p.isMDXComponent=!0}}]);