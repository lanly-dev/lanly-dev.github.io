import{R as p}from"./chunks/theme.7ztW8Lg0.js";import{R as o,a0 as i,a1 as u,a2 as c,a3 as l,a4 as f,a5 as d,a6 as m,a7 as h,a8 as g,a9 as A,d as v,u as R,v as w,s as y,aa as C,ab as P,ac as b,ad as E}from"./chunks/framework.Cyxczfnw.js";function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=r(p),S=v({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=R();return w(()=>{y(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&C(),P(),b(),n.setup&&n.setup(),()=>E(n.Layout)}});async function T(){globalThis.__VITEPRESS__=!0;const e=L(),a=D();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function D(){return A(S)}function L(){let e=o;return h(a=>{let t=g(a),s=null;return t&&(e&&(t=t.replace(/\.js$/,".lean.js")),s=import(t)),o&&(e=!1),s},n.NotFound)}o&&T().then(({app:e,router:a,data:t})=>{a.go(location.href,{initialLoad:!0}).then(()=>{i(a.route,t.site),e.mount("#app")})});export{T as createApp};
