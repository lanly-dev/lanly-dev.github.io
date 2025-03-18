import{_ as A,o as l,c as f,F as x,r as H,a as d,u,w as ee,t as I,n as F,d as P,b as m,e as G,f as w,g as h,h as k,T as St,i as xe,j as da,k as ma,l as L,p as R,m as j,q as ge,s as rt,v as E,x as te,y as Ue,z as de,A as At,B as wt,C as pa,D as ha,E as ye,G as vn,H as Ge,I as S,J,K as gn,L as Ye,M as le,N as We,O as va,P as _n,Q as ga,R as _a,S as bn,U as Xe,V as ba,W as yn,X as kn,Y as ya,Z as ka,$ as $a,a0 as Pa,a1 as Sa}from"./framework.D4yx_2_f.js";const Aa={class:"list-header"},wa={class:"list-li"},La=["href"],Na={class:"date"},Ta=["innerHTML"],Ia={class:"bottom"},Ca=["href"],xa={class:"ml-auto"},Ma=["href"],Ea=["href"],Va={__name:"Page",props:{pageCurrent:Number,pagesNum:Number,posts:Array},setup(e){return(t,n)=>(l(),f(x,null,[(l(!0),f(x,null,H(e.posts,(a,s)=>(l(),f("div",{class:"list",key:s},[d("div",Aa,[d("div",wa,[d("a",{href:u(ee)(a.regularPath)},I(a.frontMatter.title),9,La)]),d("time",Na,I(a.frontMatter.date),1)]),d("p",{class:"describe",innerHTML:a.frontMatter.description},null,8,Ta)]))),128)),d("div",Ia,[d("div",null,[(l(!0),f(x,null,H(e.pagesNum,a=>(l(),f("a",{class:F(["link px-1",{active:e.pageCurrent===a}]),key:a,href:u(ee)(`/blogs/page_${a}.html`)},I(a),11,Ca))),128))]),d("div",xa,[d("a",{class:"link",href:u(ee)("/pages/tags")},"Tags",8,Ma),d("a",{class:"link pl-1",href:u(ee)("/pages/archives")},"Archives",8,Ea)])])],64))}},Oa=A(Va,[["__scopeId","data-v-1785fe5c"]]),Fa={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Da={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Ut=()=>{};let Lt={},$n={},Pn=null,Sn={mark:Ut,measure:Ut};try{typeof window<"u"&&(Lt=window),typeof document<"u"&&($n=document),typeof MutationObserver<"u"&&(Pn=MutationObserver),typeof performance<"u"&&(Sn=performance)}catch{}const{userAgent:Gt=""}=Lt.navigator||{},ce=Lt,D=$n,Yt=Pn,Fe=Sn;ce.document;const se=!!D.documentElement&&!!D.head&&typeof D.addEventListener=="function"&&typeof D.createElement=="function",An=~Gt.indexOf("MSIE")||~Gt.indexOf("Trident/");var z="classic",wn="duotone",Y="sharp",W="sharp-duotone",za=[z,wn,Y,W],Ha={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Wt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ba=["kit"],Ra=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,ja=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ua={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ga={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Ya={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Wa={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Xa={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Ka={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ln={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},qa=["solid","regular","light","thin","duotone","brands"],Nn=[1,2,3,4,5,6,7,8,9,10],Ja=Nn.concat([11,12,13,14,15,16,17,18,19,20]),we={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qa=[...Object.keys(Wa),...qa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",we.GROUP,we.SWAP_OPACITY,we.PRIMARY,we.SECONDARY].concat(Nn.map(e=>"".concat(e,"x"))).concat(Ja.map(e=>"w-".concat(e))),Za={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},es={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ts={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Xt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const ne="___FONT_AWESOME___",it=16,Tn="fa",In="svg-inline--fa",_e="data-fa-i2svg",lt="data-fa-pseudo-element",ns="data-fa-pseudo-element-pending",Nt="data-prefix",Tt="data-icon",Kt="fontawesome-i2svg",as="async",ss=["HTML","HEAD","STYLE","SCRIPT"],Cn=(()=>{try{return!0}catch{return!1}})(),xn=[z,Y,W];function Me(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[z]}})}const Mn={...Ln};Mn[z]={...Ln[z],...Wt.kit,...Wt["kit-duotone"]};const he=Me(Mn),ct={...Ka};ct[z]={...ct[z],...Xt.kit,...Xt["kit-duotone"]};const Ie=Me(ct),ut={...Xa};ut[z]={...ut[z],...ts.kit};const ve=Me(ut),ft={...Ya};ft[z]={...ft[z],...es.kit};const os=Me(ft),rs=Ra,En="fa-layers-text",is=ja,ls={...Ha};Me(ls);const cs=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],et=we,Pe=new Set;Object.keys(Ie[z]).map(Pe.add.bind(Pe));Object.keys(Ie[Y]).map(Pe.add.bind(Pe));Object.keys(Ie[W]).map(Pe.add.bind(Pe));const us=[...Ba,...Qa],Ne=ce.FontAwesomeConfig||{};function fs(e){var t=D.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ds(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}D&&typeof D.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const s=ds(fs(n));s!=null&&(Ne[a]=s)});const Vn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Tn,replacementClass:In,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ne.familyPrefix&&(Ne.cssPrefix=Ne.familyPrefix);const Se={...Vn,...Ne};Se.autoReplaceSvg||(Se.observeMutations=!1);const y={};Object.keys(Vn).forEach(e=>{Object.defineProperty(y,e,{enumerable:!0,set:function(t){Se[e]=t,Te.forEach(n=>n(y))},get:function(){return Se[e]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(e){Se.cssPrefix=e,Te.forEach(t=>t(y))},get:function(){return Se.cssPrefix}});ce.FontAwesomeConfig=y;const Te=[];function ms(e){return Te.push(e),()=>{Te.splice(Te.indexOf(e),1)}}const re=it,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ps(e){if(!e||!se)return;const t=D.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=D.head.childNodes;let a=null;for(let s=n.length-1;s>-1;s--){const o=n[s],r=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(a=o)}return D.head.insertBefore(t,a),e}const hs="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ce(){let e=12,t="";for(;e-- >0;)t+=hs[Math.random()*62|0];return t}function Ae(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function It(e){return e.classList?Ae(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function On(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vs(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(On(e[n]),'" '),"").trim()}function Ke(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Ct(e){return e.size!==K.size||e.x!==K.x||e.y!==K.y||e.rotate!==K.rotate||e.flipX||e.flipY}function gs(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const s={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),r="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),i="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(o," ").concat(r," ").concat(i)},p={transform:"translate(".concat(a/2*-1," -256)")};return{outer:s,inner:c,path:p}}function _s(e){let{transform:t,width:n=it,height:a=it,startCentered:s=!1}=e,o="";return s&&An?o+="translate(".concat(t.x/re-n/2,"em, ").concat(t.y/re-a/2,"em) "):s?o+="translate(calc(-50% + ".concat(t.x/re,"em), calc(-50% + ").concat(t.y/re,"em)) "):o+="translate(".concat(t.x/re,"em, ").concat(t.y/re,"em) "),o+="scale(".concat(t.size/re*(t.flipX?-1:1),", ").concat(t.size/re*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var bs=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Fn(){const e=Tn,t=In,n=y.cssPrefix,a=y.replacementClass;let s=bs;if(n!==e||a!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),r=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(t),"g");s=s.replace(o,".".concat(n,"-")).replace(r,"--".concat(n,"-")).replace(i,".".concat(a))}return s}let qt=!1;function tt(){y.autoAddCss&&!qt&&(ps(Fn()),qt=!0)}var ys={mixout(){return{dom:{css:Fn,insertCss:tt}}},hooks(){return{beforeDOMElementCreation(){tt()},beforeI2svg(){tt()}}}};const ae=ce||{};ae[ne]||(ae[ne]={});ae[ne].styles||(ae[ne].styles={});ae[ne].hooks||(ae[ne].hooks={});ae[ne].shims||(ae[ne].shims=[]);var q=ae[ne];const Dn=[],zn=function(){D.removeEventListener("DOMContentLoaded",zn),Be=1,Dn.map(e=>e())};let Be=!1;se&&(Be=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),Be||D.addEventListener("DOMContentLoaded",zn));function ks(e){se&&(Be?setTimeout(e,0):Dn.push(e))}function Ee(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?On(e):"<".concat(t," ").concat(vs(n),">").concat(a.map(Ee).join(""),"</").concat(t,">")}function Jt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var nt=function(t,n,a,s){var o=Object.keys(t),r=o.length,i=n,c,p,v;for(a===void 0?(c=1,v=t[o[0]]):(c=0,v=a);c<r;c++)p=o[c],v=i(v,t[p],p,t);return v};function $s(e){const t=[];let n=0;const a=e.length;for(;n<a;){const s=e.charCodeAt(n++);if(s>=55296&&s<=56319&&n<a){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((s&1023)<<10)+(o&1023)+65536):(t.push(s),n--)}else t.push(s)}return t}function dt(e){const t=$s(e);return t.length===1?t[0].toString(16):null}function Ps(e,t){const n=e.length;let a=e.charCodeAt(t),s;return a>=55296&&a<=56319&&n>t+1&&(s=e.charCodeAt(t+1),s>=56320&&s<=57343)?(a-55296)*1024+s-56320+65536:a}function Qt(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function mt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,s=Qt(t);typeof q.hooks.addPack=="function"&&!a?q.hooks.addPack(e,Qt(t)):q.styles[e]={...q.styles[e]||{},...s},e==="fas"&&mt("fa",t)}const{styles:pe,shims:Ss}=q,As={[z]:Object.values(ve[z]),[Y]:Object.values(ve[Y]),[W]:Object.values(ve[W])};let xt=null,Hn={},Bn={},Rn={},jn={},Un={};const ws={[z]:Object.keys(he[z]),[Y]:Object.keys(he[Y]),[W]:Object.keys(he[W])};function Ls(e){return~us.indexOf(e)}function Ns(e,t){const n=t.split("-"),a=n[0],s=n.slice(1).join("-");return a===e&&s!==""&&!Ls(s)?s:null}const Gn=()=>{const e=a=>nt(pe,(s,o,r)=>(s[r]=nt(o,a,{}),s),{});Hn=e((a,s,o)=>(s[3]&&(a[s[3]]=o),s[2]&&s[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),Bn=e((a,s,o)=>(a[o]=o,s[2]&&s[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),Un=e((a,s,o)=>{const r=s[2];return a[o]=o,r.forEach(i=>{a[i]=o}),a});const t="far"in pe||y.autoFetchSvg,n=nt(Ss,(a,s)=>{const o=s[0];let r=s[1];const i=s[2];return r==="far"&&!t&&(r="fas"),typeof o=="string"&&(a.names[o]={prefix:r,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:r,iconName:i}),a},{names:{},unicodes:{}});Rn=n.names,jn=n.unicodes,xt=qe(y.styleDefault,{family:y.familyDefault})};ms(e=>{xt=qe(e.styleDefault,{family:y.familyDefault})});Gn();function Mt(e,t){return(Hn[e]||{})[t]}function Ts(e,t){return(Bn[e]||{})[t]}function ie(e,t){return(Un[e]||{})[t]}function Yn(e){return Rn[e]||{prefix:null,iconName:null}}function Is(e){const t=jn[e],n=Mt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ue(){return xt}const Et=()=>({prefix:null,iconName:null,rest:[]});function qe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=z}=t,a=he[n][e],s=Ie[n][e]||Ie[n][a],o=e in q.styles?e:null;return s||o||null}const Cs={[z]:Object.keys(ve[z]),[Y]:Object.keys(ve[Y]),[W]:Object.keys(ve[W])};function Je(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,a={[z]:"".concat(y.cssPrefix,"-").concat(z),[Y]:"".concat(y.cssPrefix,"-").concat(Y),[W]:"".concat(y.cssPrefix,"-").concat(W)};let s=null,o=z;const r=za.filter(c=>c!==wn);r.forEach(c=>{(e.includes(a[c])||e.some(p=>Cs[c].includes(p)))&&(o=c)});const i=e.reduce((c,p)=>{const v=Ns(y.cssPrefix,p);if(pe[p]?(p=As[o].includes(p)?os[o][p]:p,s=p,c.prefix=p):ws[o].indexOf(p)>-1?(s=p,c.prefix=qe(p,{family:o})):v?c.iconName=v:p!==y.replacementClass&&!r.some(g=>p===a[g])&&c.rest.push(p),!n&&c.prefix&&c.iconName){const g=s==="fa"?Yn(c.iconName):{},_=ie(c.prefix,c.iconName);g.prefix&&(s=null),c.iconName=g.iconName||_||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!pe.far&&pe.fas&&!y.autoFetchSvg&&(c.prefix="fas")}return c},Et());return(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(i.prefix="fad"),!i.prefix&&o===Y&&(pe.fass||y.autoFetchSvg)&&(i.prefix="fass",i.iconName=ie(i.prefix,i.iconName)||i.iconName),!i.prefix&&o===W&&(pe.fasds||y.autoFetchSvg)&&(i.prefix="fasds",i.iconName=ie(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||s==="fa")&&(i.prefix=ue()||"fas"),i}class xs{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...s[o]},mt(o,s[o]);const r=ve[z][o];r&&mt(r,s[o]),Gn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(s=>{const{prefix:o,iconName:r,icon:i}=a[s],c=i[2];t[o]||(t[o]={}),c.length>0&&c.forEach(p=>{typeof p=="string"&&(t[o][p]=i)}),t[o][r]=i}),t}}let Zt=[],ke={};const $e={},Ms=Object.keys($e);function Es(e,t){let{mixoutsTo:n}=t;return Zt=e,ke={},Object.keys($e).forEach(a=>{Ms.indexOf(a)===-1&&delete $e[a]}),Zt.forEach(a=>{const s=a.mixout?a.mixout():{};if(Object.keys(s).forEach(o=>{typeof s[o]=="function"&&(n[o]=s[o]),typeof s[o]=="object"&&Object.keys(s[o]).forEach(r=>{n[o]||(n[o]={}),n[o][r]=s[o][r]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(r=>{ke[r]||(ke[r]=[]),ke[r].push(o[r])})}a.provides&&a.provides($e)}),n}function pt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),s=2;s<n;s++)a[s-2]=arguments[s];return(ke[e]||[]).forEach(r=>{t=r.apply(null,[t,...a])}),t}function be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(ke[e]||[]).forEach(o=>{o.apply(null,n)})}function fe(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $e[e]?$e[e].apply(null,t):void 0}function ht(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||ue();if(t)return t=ie(n,t)||t,Jt(Wn.definitions,n,t)||Jt(q.styles,n,t)}const Wn=new xs,Vs=()=>{y.autoReplaceSvg=!1,y.observeMutations=!1,be("noAuto")},Os={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return se?(be("beforeI2svg",e),fe("pseudoElements2svg",e),fe("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,ks(()=>{Ds({autoReplaceSvgRoot:t}),be("watch",e)})}},Fs={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ie(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=qe(e[0]);return{prefix:n,iconName:ie(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(y.cssPrefix,"-"))>-1||e.match(rs))){const t=Je(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||ue(),iconName:ie(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=ue();return{prefix:t,iconName:ie(t,e)||e}}}},X={noAuto:Vs,config:y,dom:Os,parse:Fs,library:Wn,findIconDefinition:ht,toHtml:Ee},Ds=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=D}=e;(Object.keys(q.styles).length>0||y.autoFetchSvg)&&se&&y.autoReplaceSvg&&X.dom.i2svg({node:t})};function Qe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Ee(n))}}),Object.defineProperty(e,"node",{get:function(){if(!se)return;const n=D.createElement("div");return n.innerHTML=e.html,n.children}}),e}function zs(e){let{children:t,main:n,mask:a,attributes:s,styles:o,transform:r}=e;if(Ct(r)&&n.found&&!a.found){const{width:i,height:c}=n,p={x:i/c/2,y:.5};s.style=Ke({...o,"transform-origin":"".concat(p.x+r.x/16,"em ").concat(p.y+r.y/16,"em")})}return[{tag:"svg",attributes:s,children:t}]}function Hs(e){let{prefix:t,iconName:n,children:a,attributes:s,symbol:o}=e;const r=o===!0?"".concat(t,"-").concat(y.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:r},children:a}]}]}function Vt(e){const{icons:{main:t,mask:n},prefix:a,iconName:s,transform:o,symbol:r,title:i,maskId:c,titleId:p,extra:v,watchable:g=!1}=e,{width:_,height:T}=n.found?n:t,V=a==="fak",M=[y.replacementClass,s?"".concat(y.cssPrefix,"-").concat(s):""].filter(U=>v.classes.indexOf(U)===-1).filter(U=>U!==""||!!U).concat(v.classes).join(" ");let N={children:[],attributes:{...v.attributes,"data-prefix":a,"data-icon":s,class:M,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(T)}};const b=V&&!~v.classes.indexOf("fa-fw")?{width:"".concat(_/T*16*.0625,"em")}:{};g&&(N.attributes[_e]=""),i&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(p||Ce())},children:[i]}),delete N.attributes.title);const $={...N,prefix:a,iconName:s,main:t,mask:n,maskId:c,transform:o,symbol:r,styles:{...b,...v.styles}},{children:O,attributes:B}=n.found&&t.found?fe("generateAbstractMask",$)||{children:[],attributes:{}}:fe("generateAbstractIcon",$)||{children:[],attributes:{}};return $.children=O,$.attributes=B,r?Hs($):zs($)}function en(e){const{content:t,width:n,height:a,transform:s,title:o,extra:r,watchable:i=!1}=e,c={...r.attributes,...o?{title:o}:{},class:r.classes.join(" ")};i&&(c[_e]="");const p={...r.styles};Ct(s)&&(p.transform=_s({transform:s,startCentered:!0,width:n,height:a}),p["-webkit-transform"]=p.transform);const v=Ke(p);v.length>0&&(c.style=v);const g=[];return g.push({tag:"span",attributes:c,children:[t]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Bs(e){const{content:t,title:n,extra:a}=e,s={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},o=Ke(a.styles);o.length>0&&(s.style=o);const r=[];return r.push({tag:"span",attributes:s,children:[t]}),n&&r.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),r}const{styles:at}=q;function vt(e){const t=e[0],n=e[1],[a]=e.slice(4);let s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(et.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(et.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:s}}const Rs={found:!1,width:512,height:512};function js(e,t){!Cn&&!y.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function gt(e,t){let n=t;return t==="fa"&&y.styleDefault!==null&&(t=ue()),new Promise((a,s)=>{if(n==="fa"){const o=Yn(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&at[t]&&at[t][e]){const o=at[t][e];return a(vt(o))}js(e,t),a({...Rs,icon:y.showMissingIcons&&e?fe("missingIconAbstract")||{}:{}})})}const tn=()=>{},_t=y.measurePerformance&&Fe&&Fe.mark&&Fe.measure?Fe:{mark:tn,measure:tn},Le='FA "6.6.0"',Us=e=>(_t.mark("".concat(Le," ").concat(e," begins")),()=>Xn(e)),Xn=e=>{_t.mark("".concat(Le," ").concat(e," ends")),_t.measure("".concat(Le," ").concat(e),"".concat(Le," ").concat(e," begins"),"".concat(Le," ").concat(e," ends"))};var Ot={begin:Us,end:Xn};const De=()=>{};function nn(e){return typeof(e.getAttribute?e.getAttribute(_e):null)=="string"}function Gs(e){const t=e.getAttribute?e.getAttribute(Nt):null,n=e.getAttribute?e.getAttribute(Tt):null;return t&&n}function Ys(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(y.replacementClass)}function Ws(){return y.autoReplaceSvg===!0?ze.replace:ze[y.autoReplaceSvg]||ze.replace}function Xs(e){return D.createElementNS("http://www.w3.org/2000/svg",e)}function Ks(e){return D.createElement(e)}function Kn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Xs:Ks}=t;if(typeof e=="string")return D.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){a.appendChild(Kn(o,{ceFn:n}))}),a}function qs(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const ze={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Kn(n),t)}),t.getAttribute(_e)===null&&y.keepOriginalSource){let n=D.createComment(qs(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~It(t).indexOf(y.replacementClass))return ze.replace(e);const a=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((r,i)=>(i===y.replacementClass||i.match(a)?r.toSvg.push(i):r.toNode.push(i),r),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const s=n.map(o=>Ee(o)).join(`
`);t.setAttribute(_e,""),t.innerHTML=s}};function an(e){e()}function qn(e,t){const n=typeof t=="function"?t:De;if(e.length===0)n();else{let a=an;y.mutateApproach===as&&(a=ce.requestAnimationFrame||an),a(()=>{const s=Ws(),o=Ot.begin("mutate");e.map(s),o(),n()})}}let Ft=!1;function Jn(){Ft=!0}function bt(){Ft=!1}let Re=null;function sn(e){if(!Yt||!y.observeMutations)return;const{treeCallback:t=De,nodeCallback:n=De,pseudoElementsCallback:a=De,observeMutationsRoot:s=D}=e;Re=new Yt(o=>{if(Ft)return;const r=ue();Ae(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!nn(i.addedNodes[0])&&(y.searchPseudoElements&&a(i.target),t(i.target)),i.type==="attributes"&&i.target.parentNode&&y.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&nn(i.target)&&~cs.indexOf(i.attributeName))if(i.attributeName==="class"&&Gs(i.target)){const{prefix:c,iconName:p}=Je(It(i.target));i.target.setAttribute(Nt,c||r),p&&i.target.setAttribute(Tt,p)}else Ys(i.target)&&n(i.target)})}),se&&Re.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Js(){Re&&Re.disconnect()}function Qs(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,s)=>{const o=s.split(":"),r=o[0],i=o.slice(1);return r&&i.length>0&&(a[r]=i.join(":").trim()),a},{})),n}function Zs(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let s=Je(It(e));return s.prefix||(s.prefix=ue()),t&&n&&(s.prefix=t,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&a.length>0&&(s.iconName=Ts(s.prefix,e.innerText)||Mt(s.prefix,dt(e.innerText))),!s.iconName&&y.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function eo(e){const t=Ae(e.attributes).reduce((s,o)=>(s.name!=="class"&&s.name!=="style"&&(s[o.name]=o.value),s),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return y.autoA11y&&(n?t["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(a||Ce()):(t["aria-hidden"]="true",t.focusable="false")),t}function to(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function on(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:s}=Zs(e),o=eo(e),r=pt("parseNodeAttributes",{},e);let i=t.styleParser?Qs(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:i,attributes:o},...r}}const{styles:no}=q;function Qn(e){const t=y.autoReplaceSvg==="nest"?on(e,{styleParser:!1}):on(e);return~t.extra.classes.indexOf(En)?fe("generateLayersText",e,t):fe("generateSvgReplacementMutation",e,t)}let Z=new Set;xn.map(e=>{Z.add("fa-".concat(e))});Object.keys(he[z]).map(Z.add.bind(Z));Object.keys(he[Y]).map(Z.add.bind(Z));Object.keys(he[W]).map(Z.add.bind(Z));Z=[...Z];function rn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!se)return Promise.resolve();const n=D.documentElement.classList,a=v=>n.add("".concat(Kt,"-").concat(v)),s=v=>n.remove("".concat(Kt,"-").concat(v)),o=y.autoFetchSvg?Z:xn.map(v=>"fa-".concat(v)).concat(Object.keys(no));o.includes("fa")||o.push("fa");const r=[".".concat(En,":not([").concat(_e,"])")].concat(o.map(v=>".".concat(v,":not([").concat(_e,"])"))).join(", ");if(r.length===0)return Promise.resolve();let i=[];try{i=Ae(e.querySelectorAll(r))}catch{}if(i.length>0)a("pending"),s("complete");else return Promise.resolve();const c=Ot.begin("onTree"),p=i.reduce((v,g)=>{try{const _=Qn(g);_&&v.push(_)}catch(_){Cn||_.name==="MissingIcon"&&console.error(_)}return v},[]);return new Promise((v,g)=>{Promise.all(p).then(_=>{qn(_,()=>{a("active"),a("complete"),s("pending"),typeof t=="function"&&t(),c(),v()})}).catch(_=>{c(),g(_)})})}function ao(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qn(e).then(n=>{n&&qn([n],t)})}function so(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:ht(t||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:ht(s||{})),e(a,{...n,mask:s})}}const oo=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=K,symbol:a=!1,mask:s=null,maskId:o=null,title:r=null,titleId:i=null,classes:c=[],attributes:p={},styles:v={}}=t;if(!e)return;const{prefix:g,iconName:_,icon:T}=e;return Qe({type:"icon",...e},()=>(be("beforeDOMElementCreation",{iconDefinition:e,params:t}),y.autoA11y&&(r?p["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(i||Ce()):(p["aria-hidden"]="true",p.focusable="false")),Vt({icons:{main:vt(T),mask:s?vt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:{...K,...n},symbol:a,title:r,maskId:o,titleId:i,extra:{attributes:p,styles:v,classes:c}})))};var ro={mixout(){return{icon:so(oo)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=rn,e.nodeCallback=ao,e}}},provides(e){e.i2svg=function(t){const{node:n=D,callback:a=()=>{}}=t;return rn(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:s,titleId:o,prefix:r,transform:i,symbol:c,mask:p,maskId:v,extra:g}=n;return new Promise((_,T)=>{Promise.all([gt(a,r),p.iconName?gt(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(V=>{let[M,N]=V;_([t,Vt({icons:{main:M,mask:N},prefix:r,iconName:a,transform:i,symbol:c,maskId:v,title:s,titleId:o,extra:g,watchable:!0})])}).catch(T)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:s,transform:o,styles:r}=t;const i=Ke(r);i.length>0&&(a.style=i);let c;return Ct(o)&&(c=fe("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:a}}}},io={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Qe({type:"layer"},()=>{be("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(s=>{Array.isArray(s)?s.map(o=>{a=a.concat(o.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},lo={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:s={},styles:o={}}=t;return Qe({type:"counter",content:e},()=>(be("beforeDOMElementCreation",{content:e,params:t}),Bs({content:e.toString(),title:n,extra:{attributes:s,styles:o,classes:["".concat(y.cssPrefix,"-layers-counter"),...a]}})))}}}},co={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=K,title:a=null,classes:s=[],attributes:o={},styles:r={}}=t;return Qe({type:"text",content:e},()=>(be("beforeDOMElementCreation",{content:e,params:t}),en({content:e,transform:{...K,...n},title:a,extra:{attributes:o,styles:r,classes:["".concat(y.cssPrefix,"-layers-text"),...s]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:s,extra:o}=n;let r=null,i=null;if(An){const c=parseInt(getComputedStyle(t).fontSize,10),p=t.getBoundingClientRect();r=p.width/c,i=p.height/c}return y.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,en({content:t.innerHTML,width:r,height:i,transform:s,title:a,extra:o,watchable:!0})])}}};const uo=new RegExp('"',"ug"),ln=[1105920,1112319],cn={FontAwesome:{normal:"fas",400:"fas"},...Ga,...Ua,...Za},yt=Object.keys(cn).reduce((e,t)=>(e[t.toLowerCase()]=cn[t],e),{}),fo=Object.keys(yt).reduce((e,t)=>{const n=yt[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function mo(e){const t=e.replace(uo,""),n=Ps(t,0),a=n>=ln[0]&&n<=ln[1],s=t.length===2?t[0]===t[1]:!1;return{value:dt(s?t[0]:t),isSecondary:a||s}}function po(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),s=isNaN(a)?"normal":a;return(yt[n]||{})[s]||fo[n]}function un(e,t){const n="".concat(ns).concat(t.replace(":","-"));return new Promise((a,s)=>{if(e.getAttribute(n)!==null)return a();const r=Ae(e.children).filter(_=>_.getAttribute(lt)===t)[0],i=ce.getComputedStyle(e,t),c=i.getPropertyValue("font-family"),p=c.match(is),v=i.getPropertyValue("font-weight"),g=i.getPropertyValue("content");if(r&&!p)return e.removeChild(r),a();if(p&&g!=="none"&&g!==""){const _=i.getPropertyValue("content");let T=po(c,v);const{value:V,isSecondary:M}=mo(_),N=p[0].startsWith("FontAwesome");let b=Mt(T,V),$=b;if(N){const O=Is(V);O.iconName&&O.prefix&&(b=O.iconName,T=O.prefix)}if(b&&!M&&(!r||r.getAttribute(Nt)!==T||r.getAttribute(Tt)!==$)){e.setAttribute(n,$),r&&e.removeChild(r);const O=to(),{extra:B}=O;B.attributes[lt]=t,gt(b,T).then(U=>{const Oe=Vt({...O,icons:{main:U,mask:Et()},prefix:T,iconName:$,extra:B,watchable:!0}),me=D.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(me,e.firstChild):e.appendChild(me),me.outerHTML=Oe.map(fa=>Ee(fa)).join(`
`),e.removeAttribute(n),a()}).catch(s)}else a()}else a()})}function ho(e){return Promise.all([un(e,"::before"),un(e,"::after")])}function vo(e){return e.parentNode!==document.head&&!~ss.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(lt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function fn(e){if(se)return new Promise((t,n)=>{const a=Ae(e.querySelectorAll("*")).filter(vo).map(ho),s=Ot.begin("searchPseudoElements");Jn(),Promise.all(a).then(()=>{s(),bt(),t()}).catch(()=>{s(),bt(),n()})})}var go={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=fn,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=D}=t;y.searchPseudoElements&&fn(n)}}};let dn=!1;var _o={mixout(){return{dom:{unwatch(){Jn(),dn=!0}}}},hooks(){return{bootstrap(){sn(pt("mutationObserverCallbacks",{}))},noAuto(){Js()},watch(e){const{observeMutationsRoot:t}=e;dn?bt():sn(pt("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const mn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const s=a.toLowerCase().split("-"),o=s[0];let r=s.slice(1).join("-");if(o&&r==="h")return n.flipX=!0,n;if(o&&r==="v")return n.flipY=!0,n;if(r=parseFloat(r),isNaN(r))return n;switch(o){case"grow":n.size=n.size+r;break;case"shrink":n.size=n.size-r;break;case"left":n.x=n.x-r;break;case"right":n.x=n.x+r;break;case"up":n.y=n.y-r;break;case"down":n.y=n.y+r;break;case"rotate":n.rotate=n.rotate+r;break}return n},t)};var bo={mixout(){return{parse:{transform:e=>mn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=mn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:s,iconWidth:o}=t;const r={transform:"translate(".concat(s/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),p="rotate(".concat(a.rotate," 0 0)"),v={transform:"".concat(i," ").concat(c," ").concat(p)},g={transform:"translate(".concat(o/2*-1," -256)")},_={outer:r,inner:v,path:g};return{tag:"g",attributes:{..._.outer},children:[{tag:"g",attributes:{..._.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,..._.path}}]}]}}}};const st={x:0,y:0,width:"100%",height:"100%"};function pn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function yo(e){return e.tag==="g"?e.children:[e]}var ko={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?Je(n.split(" ").map(s=>s.trim())):Et();return a.prefix||(a.prefix=ue()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:s,mask:o,maskId:r,transform:i}=t;const{width:c,icon:p}=s,{width:v,icon:g}=o,_=gs({transform:i,containerWidth:v,iconWidth:c}),T={tag:"rect",attributes:{...st,fill:"white"}},V=p.children?{children:p.children.map(pn)}:{},M={tag:"g",attributes:{..._.inner},children:[pn({tag:p.tag,attributes:{...p.attributes,..._.path},...V})]},N={tag:"g",attributes:{..._.outer},children:[M]},b="mask-".concat(r||Ce()),$="clip-".concat(r||Ce()),O={tag:"mask",attributes:{...st,id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[T,N]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:$},children:yo(g)},O]};return n.push(B,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat($,")"),mask:"url(#".concat(b,")"),...st}}),{children:n,attributes:a}}}},$o={provides(e){let t=!1;ce.matchMedia&&(t=ce.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...s,attributeName:"opacity"},r={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return t||r.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(r),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Po={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},So=[ys,ro,io,lo,co,go,_o,bo,ko,$o,Po];Es(So,{mixoutsTo:X});X.noAuto;X.config;const Ao=X.library;X.dom;X.parse;X.findIconDefinition;X.toHtml;X.icon;X.layer;X.text;X.counter;var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Lo={exports:{}};(function(e){(function(t){var n=function(b,$,O){if(!p($)||g($)||_($)||T($)||c($))return $;var B,U=0,Oe=0;if(v($))for(B=[],Oe=$.length;U<Oe;U++)B.push(n(b,$[U],O));else{B={};for(var me in $)Object.prototype.hasOwnProperty.call($,me)&&(B[b(me,O)]=n(b,$[me],O))}return B},a=function(b,$){$=$||{};var O=$.separator||"_",B=$.split||/(?=[A-Z])/;return b.split(B).join(O)},s=function(b){return V(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function($,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},o=function(b){var $=s(b);return $.substr(0,1).toUpperCase()+$.substr(1)},r=function(b,$){return a(b,$).toLowerCase()},i=Object.prototype.toString,c=function(b){return typeof b=="function"},p=function(b){return b===Object(b)},v=function(b){return i.call(b)=="[object Array]"},g=function(b){return i.call(b)=="[object Date]"},_=function(b){return i.call(b)=="[object RegExp]"},T=function(b){return i.call(b)=="[object Boolean]"},V=function(b){return b=b-0,b===b},M=function(b,$){var O=$&&"process"in $?$.process:$;return typeof O!="function"?b:function(B,U){return O(B,b,U)}},N={camelize:s,decamelize:r,pascalize:o,depascalize:r,camelizeKeys:function(b,$){return n(M(s,$),b)},decamelizeKeys:function(b,$){return n(M(r,$),b,$)},pascalizeKeys:function(b,$){return n(M(o,$),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(wo)})(Lo);var No=!1;try{No=!0}catch{}const To=P({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(l(),f("span",{class:F(["VPBadge",t.type])},[m(t.$slots,"default",{},()=>[G(I(t.text),1)])],2))}}),Io={key:0,class:"VPBackdrop"},Co=P({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(l(),w(St,{name:"fade"},{default:h(()=>[t.show?(l(),f("div",Io)):k("",!0)]),_:1}))}}),xo=A(Co,[["__scopeId","data-v-54a304ca"]]),C=xe;function Mo(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),(a=!0)&&setTimeout(()=>a=!1,t))}}function kt(e){return/^\//.test(e)?e:`/${e}`}function Dt(e){const{pathname:t,search:n,hash:a,protocol:s}=new URL(e,"http://a.com");if(da(e)||e.startsWith("#")||!s.startsWith("http")||!ma(t))return e;const{site:o}=C(),r=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${n}${a}`);return ee(r)}function Ve({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:a,theme:s,hash:o}=C(),r=L(()=>{var c,p;return{label:(c=t.value.locales[n.value])==null?void 0:c.label,link:((p=t.value.locales[n.value])==null?void 0:p.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:L(()=>Object.entries(t.value.locales).flatMap(([c,p])=>r.value.label===p.label?[]:{text:p.label,link:Eo(p.link||(c==="root"?"/":`/${c}/`),s.value.i18nRouting!==!1&&e,a.value.relativePath.slice(r.value.link.length-1),!t.value.cleanUrls)+o.value})),currentLang:r}}function Eo(e,t,n,a){return t?e.replace(/\/$/,"")+kt(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):e}const Vo=e=>(R("data-v-6ff51ddd"),e=e(),j(),e),Oo={class:"NotFound"},Fo={class:"code"},Do={class:"title"},zo=Vo(()=>d("div",{class:"divider"},null,-1)),Ho={class:"quote"},Bo={class:"action"},Ro=["href","aria-label"],jo=P({__name:"NotFound",setup(e){const{theme:t}=C(),{currentLang:n}=Ve();return(a,s)=>{var o,r,i,c,p;return l(),f("div",Oo,[d("p",Fo,I(((o=u(t).notFound)==null?void 0:o.code)??"404"),1),d("h1",Do,I(((r=u(t).notFound)==null?void 0:r.title)??"PAGE NOT FOUND"),1),zo,d("blockquote",Ho,I(((i=u(t).notFound)==null?void 0:i.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),d("div",Bo,[d("a",{class:"link",href:u(ee)(u(n).link),"aria-label":((c=u(t).notFound)==null?void 0:c.linkLabel)??"go to home"},I(((p=u(t).notFound)==null?void 0:p.linkText)??"Take me home"),9,Ro)])])}}}),Uo=A(jo,[["__scopeId","data-v-6ff51ddd"]]);function Zn(e,t){if(Array.isArray(e))return He(e);if(e==null)return[];t=kt(t);const n=Object.keys(e).sort((s,o)=>o.split("/").length-s.split("/").length).find(s=>t.startsWith(kt(s))),a=n?e[n]:[];return Array.isArray(a)?He(a):He(a.items,a.base)}function Go(e){const t=[];let n=0;for(const a in e){const s=e[a];if(s.items){n=t.push(s);continue}t[n]||t.push({items:[]}),t[n].items.push(s)}return t}function Yo(e){const t=[];function n(a){for(const s of a)s.text&&s.link&&t.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&n(s.items)}return n(e),t}function $t(e,t){return Array.isArray(t)?t.some(n=>$t(e,n)):ge(e,t.link)?!0:t.items?$t(e,t.items):!1}function He(e,t){return[...e].map(n=>{const a={...n},s=a.base||t;return s&&a.link&&(a.link=s+a.link),a.items&&(a.items=He(a.items,s)),a})}function oe(){const{frontmatter:e,page:t,theme:n}=C(),a=rt("(min-width: 960px)"),s=E(!1),o=L(()=>{const M=n.value.sidebar,N=t.value.relativePath;return M?Zn(M,N):[]}),r=E(o.value);te(o,(M,N)=>{JSON.stringify(M)!==JSON.stringify(N)&&(r.value=o.value)});const i=L(()=>e.value.sidebar!==!1&&r.value.length>0&&e.value.layout!=="home"),c=L(()=>p?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),p=L(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),v=L(()=>i.value&&a.value),g=L(()=>i.value?Go(r.value):[]);function _(){s.value=!0}function T(){s.value=!1}function V(){s.value?T():_()}return{isOpen:s,sidebar:r,sidebarGroups:g,hasSidebar:i,hasAside:p,leftAside:c,isSidebarEnabled:v,open:_,close:T,toggle:V}}function Wo(e,t){let n;Ue(()=>{n=e.value?document.activeElement:void 0}),de(()=>{window.addEventListener("keyup",a)}),At(()=>{window.removeEventListener("keyup",a)});function a(s){s.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function Xo(e){const{page:t,hash:n}=C(),a=E(!1),s=L(()=>e.value.collapsed!=null),o=L(()=>!!e.value.link),r=E(!1),i=()=>{r.value=ge(t.value.relativePath,e.value.link)};te([t,e,n],i),de(i);const c=L(()=>r.value?!0:e.value.items?$t(t.value.relativePath,e.value.items):!1),p=L(()=>!!(e.value.items&&e.value.items.length));Ue(()=>{a.value=!!(s.value&&e.value.collapsed)}),wt(()=>{(r.value||c.value)&&(a.value=!1)});function v(){s.value&&(a.value=!a.value)}return{collapsed:a,collapsible:s,isLink:o,isActiveLink:r,hasActiveLink:c,hasChildren:p,toggle:v}}function Ko(){const{hasSidebar:e}=oe(),t=rt("(min-width: 960px)"),n=rt("(min-width: 1280px)");return{isAsideEnabled:L(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const Pt=[];function ea(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function zt(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const a=Number(n.tagName[1]);return{element:n,title:qo(n),link:"#"+n.id,level:a}});return Jo(t,e)}function qo(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor")||n.classList.contains("ignore-header"))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function Jo(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[a,s]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;e=e.filter(r=>r.level>=a&&r.level<=s),Pt.length=0;for(const{element:r,link:i}of e)Pt.push({element:r,link:i});const o=[];e:for(let r=0;r<e.length;r++){const i=e[r];if(r===0)o.push(i);else{for(let c=r-1;c>=0;c--){const p=e[c];if(p.level<i.level){(p.children||(p.children=[])).push(i);continue e}}o.push(i)}}return o}function Qo(e,t){const{isAsideEnabled:n}=Ko(),a=Mo(o,100);let s=null;de(()=>{requestAnimationFrame(o),window.addEventListener("scroll",a)}),pa(()=>{r(location.hash)}),At(()=>{window.removeEventListener("scroll",a)});function o(){if(!n.value)return;const i=window.scrollY,c=window.innerHeight,p=document.body.offsetHeight,v=Math.abs(i+c-p)<1,g=Pt.map(({element:T,link:V})=>({link:V,top:Zo(T)})).filter(({top:T})=>!Number.isNaN(T)).sort((T,V)=>T.top-V.top);if(!g.length){r(null);return}if(i<1){r(null);return}if(v){r(g[g.length-1].link);return}let _=null;for(const{link:T,top:V}of g){if(V>i+ha()+4)break;_=T}r(_)}function r(i){s&&s.classList.remove("active"),i==null?s=null:s=e.value.querySelector(`a[href="${decodeURIComponent(i)}"]`);const c=s;c?(c.classList.add("active"),t.value.style.top=c.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function Zo(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}const er=["href","title"],tr=P({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const a=n.href.split("#")[1],s=document.getElementById(decodeURIComponent(a));s==null||s.focus({preventScroll:!0})}return(n,a)=>{const s=ye("VPDocOutlineItem",!0);return l(),f("ul",{class:F(["VPDocOutlineItem",n.root?"root":"nested"])},[(l(!0),f(x,null,H(n.headers,({children:o,link:r,title:i})=>(l(),f("li",null,[d("a",{class:"outline-link",href:r,onClick:t,title:i},I(i),9,er),o!=null&&o.length?(l(),w(s,{key:0,headers:o},null,8,["headers"])):k("",!0)]))),256))],2)}}}),ta=A(tr,[["__scopeId","data-v-53c99d69"]]),nr={class:"content"},ar={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},sr=P({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=C(),a=vn([]);Ge(()=>{a.value=zt(t.value.outline??n.value.outline)});const s=E(),o=E();return Qo(s,o),(r,i)=>(l(),f("nav",{"aria-labelledby":"doc-outline-aria-label",class:F(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:s},[d("div",nr,[d("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),d("div",ar,I(u(ea)(u(n))),1),S(ta,{headers:a.value,root:!0},null,8,["headers"])])],2))}}),or=A(sr,[["__scopeId","data-v-f610f197"]]),rr={class:"VPDocAsideCarbonAds"},ir=P({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,a)=>(l(),f("div",rr,[S(u(t),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),lr=e=>(R("data-v-cb998dce"),e=e(),j(),e),cr={class:"VPDocAside"},ur=lr(()=>d("div",{class:"spacer"},null,-1)),fr=P({__name:"VPDocAside",setup(e){const{theme:t}=C();return(n,a)=>(l(),f("div",cr,[m(n.$slots,"aside-top",{},void 0,!0),m(n.$slots,"aside-outline-before",{},void 0,!0),S(or),m(n.$slots,"aside-outline-after",{},void 0,!0),ur,m(n.$slots,"aside-ads-before",{},void 0,!0),u(t).carbonAds?(l(),w(ir,{key:0,"carbon-ads":u(t).carbonAds},null,8,["carbon-ads"])):k("",!0),m(n.$slots,"aside-ads-after",{},void 0,!0),m(n.$slots,"aside-bottom",{},void 0,!0)]))}}),dr=A(fr,[["__scopeId","data-v-cb998dce"]]);function mr(){const{theme:e,page:t}=C();return L(()=>{const{text:n="Edit this page",pattern:a=""}=e.value.editLink||{};let s;return typeof a=="function"?s=a(t.value):s=a.replace(/:path/g,t.value.filePath),{url:s,text:n}})}function pr(){const{page:e,theme:t,frontmatter:n}=C();return L(()=>{var p,v,g,_,T,V,M,N;const a=Zn(t.value.sidebar,e.value.relativePath),s=Yo(a),o=hr(s,b=>b.link.replace(/[?#].*$/,"")),r=o.findIndex(b=>ge(e.value.relativePath,b.link)),i=((p=t.value.docFooter)==null?void 0:p.prev)===!1&&!n.value.prev||n.value.prev===!1,c=((v=t.value.docFooter)==null?void 0:v.next)===!1&&!n.value.next||n.value.next===!1;return{prev:i?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((g=o[r-1])==null?void 0:g.docFooterText)??((_=o[r-1])==null?void 0:_.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((T=o[r-1])==null?void 0:T.link)},next:c?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((V=o[r+1])==null?void 0:V.docFooterText)??((M=o[r+1])==null?void 0:M.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((N=o[r+1])==null?void 0:N.link)}}})}function hr(e,t){const n=new Set;return e.filter(a=>{const s=t(a);return n.has(s)?!1:n.add(s)})}const Q=P({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=L(()=>t.tag??(t.href?"a":"span")),a=L(()=>t.href&&gn.test(t.href)||t.target==="_blank");return(s,o)=>(l(),w(J(n.value),{class:F(["VPLink",{link:s.href,"vp-external-link-icon":a.value,"no-icon":s.noIcon}]),href:s.href?u(Dt)(s.href):void 0,target:s.target??(a.value?"_blank":void 0),rel:s.rel??(a.value?"noreferrer":void 0)},{default:h(()=>[m(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),vr={class:"VPLastUpdated"},gr=["datetime"],_r=P({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:a}=C(),s=L(()=>new Date(n.value.lastUpdated)),o=L(()=>s.value.toISOString()),r=E("");return de(()=>{Ue(()=>{var i,c,p;r.value=new Intl.DateTimeFormat((c=(i=t.value.lastUpdated)==null?void 0:i.formatOptions)!=null&&c.forceLocale?a.value:void 0,((p=t.value.lastUpdated)==null?void 0:p.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(i,c)=>{var p;return l(),f("p",vr,[G(I(((p=u(t).lastUpdated)==null?void 0:p.text)||u(t).lastUpdatedText||"Last updated")+": ",1),d("time",{datetime:o.value},I(r.value),9,gr)])}}}),br=A(_r,[["__scopeId","data-v-1bb0c8a8"]]),na=e=>(R("data-v-1bcd8184"),e=e(),j(),e),yr={key:0,class:"VPDocFooter"},kr={key:0,class:"edit-info"},$r={key:0,class:"edit-link"},Pr=na(()=>d("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Sr={key:1,class:"last-updated"},Ar={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},wr=na(()=>d("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),Lr={class:"pager"},Nr=["innerHTML"],Tr=["innerHTML"],Ir={class:"pager"},Cr=["innerHTML"],xr=["innerHTML"],Mr=P({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:a}=C(),s=mr(),o=pr(),r=L(()=>t.value.editLink&&a.value.editLink!==!1),i=L(()=>n.value.lastUpdated),c=L(()=>r.value||i.value||o.value.prev||o.value.next);return(p,v)=>{var g,_,T,V;return c.value?(l(),f("footer",yr,[m(p.$slots,"doc-footer-before",{},void 0,!0),r.value||i.value?(l(),f("div",kr,[r.value?(l(),f("div",$r,[S(Q,{class:"edit-link-button",href:u(s).url,"no-icon":!0},{default:h(()=>[Pr,G(" "+I(u(s).text),1)]),_:1},8,["href"])])):k("",!0),i.value?(l(),f("div",Sr,[S(br)])):k("",!0)])):k("",!0),(g=u(o).prev)!=null&&g.link||(_=u(o).next)!=null&&_.link?(l(),f("nav",Ar,[wr,d("div",Lr,[(T=u(o).prev)!=null&&T.link?(l(),w(Q,{key:0,class:"pager-link prev",href:u(o).prev.link},{default:h(()=>{var M;return[d("span",{class:"desc",innerHTML:((M=u(t).docFooter)==null?void 0:M.prev)||"Previous page"},null,8,Nr),d("span",{class:"title",innerHTML:u(o).prev.text},null,8,Tr)]}),_:1},8,["href"])):k("",!0)]),d("div",Ir,[(V=u(o).next)!=null&&V.link?(l(),w(Q,{key:0,class:"pager-link next",href:u(o).next.link},{default:h(()=>{var M;return[d("span",{class:"desc",innerHTML:((M=u(t).docFooter)==null?void 0:M.next)||"Next page"},null,8,Cr),d("span",{class:"title",innerHTML:u(o).next.text},null,8,xr)]}),_:1},8,["href"])):k("",!0)])])):k("",!0)])):k("",!0)}}}),Er=A(Mr,[["__scopeId","data-v-1bcd8184"]]),Vr=e=>(R("data-v-e6f2a212"),e=e(),j(),e),Or={class:"container"},Fr=Vr(()=>d("div",{class:"aside-curtain"},null,-1)),Dr={class:"aside-container"},zr={class:"aside-content"},Hr={class:"content"},Br={class:"content-container"},Rr={class:"main"},jr=P({__name:"VPDoc",setup(e){const{theme:t}=C(),n=Ye(),{hasSidebar:a,hasAside:s,leftAside:o}=oe(),r=L(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(i,c)=>{const p=ye("Content");return l(),f("div",{class:F(["VPDoc",{"has-sidebar":u(a),"has-aside":u(s)}])},[m(i.$slots,"doc-top",{},void 0,!0),d("div",Or,[u(s)?(l(),f("div",{key:0,class:F(["aside",{"left-aside":u(o)}])},[Fr,d("div",Dr,[d("div",zr,[S(dr,null,{"aside-top":h(()=>[m(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[m(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[m(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[m(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[m(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[m(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):k("",!0),d("div",Hr,[d("div",Br,[m(i.$slots,"doc-before",{},void 0,!0),d("main",Rr,[S(p,{class:F(["vp-doc",[r.value,u(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),S(Er,null,{"doc-footer-before":h(()=>[m(i.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),m(i.$slots,"doc-after",{},void 0,!0)])])]),m(i.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Ur=A(jr,[["__scopeId","data-v-e6f2a212"]]),Gr=P({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=L(()=>t.href&&gn.test(t.href)),a=L(()=>t.tag||t.href?"a":"button");return(s,o)=>(l(),w(J(a.value),{class:F(["VPButton",[s.size,s.theme]]),href:s.href?u(Dt)(s.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:h(()=>[G(I(s.text),1)]),_:1},8,["class","href","target","rel"]))}}),Yr=A(Gr,[["__scopeId","data-v-c9cf0e3c"]]),Wr=["src","alt"],Xr=P({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const a=ye("VPImage",!0);return t.image?(l(),f(x,{key:0},[typeof t.image=="string"||"src"in t.image?(l(),f("img",le({key:0,class:"VPImage"},typeof t.image=="string"?t.$attrs:{...t.image,...t.$attrs},{src:u(ee)(typeof t.image=="string"?t.image:t.image.src),alt:t.alt??(typeof t.image=="string"?"":t.image.alt||"")}),null,16,Wr)):(l(),f(x,{key:1},[S(a,le({class:"dark",image:t.image.dark,alt:t.image.alt},t.$attrs),null,16,["image","alt"]),S(a,le({class:"light",image:t.image.light,alt:t.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):k("",!0)}}}),je=A(Xr,[["__scopeId","data-v-ab19afbb"]]),Kr=e=>(R("data-v-b10c5094"),e=e(),j(),e),qr={class:"container"},Jr={class:"main"},Qr={key:0,class:"name"},Zr=["innerHTML"],ei=["innerHTML"],ti=["innerHTML"],ni={key:0,class:"actions"},ai={key:0,class:"image"},si={class:"image-container"},oi=Kr(()=>d("div",{class:"image-bg"},null,-1)),ri=P({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=We("hero-image-slot-exists");return(n,a)=>(l(),f("div",{class:F(["VPHero",{"has-image":n.image||u(t)}])},[d("div",qr,[d("div",Jr,[m(n.$slots,"home-hero-info-before",{},void 0,!0),m(n.$slots,"home-hero-info",{},()=>[n.name?(l(),f("h1",Qr,[d("span",{innerHTML:n.name,class:"clip"},null,8,Zr)])):k("",!0),n.text?(l(),f("p",{key:1,innerHTML:n.text,class:"text"},null,8,ei)):k("",!0),n.tagline?(l(),f("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,ti)):k("",!0)],!0),m(n.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(l(),f("div",ni,[(l(!0),f(x,null,H(n.actions,s=>(l(),f("div",{key:s.link,class:"action"},[S(Yr,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):k("",!0),m(n.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||u(t)?(l(),f("div",ai,[d("div",si,[oi,m(n.$slots,"home-hero-image",{},()=>[n.image?(l(),w(je,{key:0,class:"image-src",image:n.image},null,8,["image"])):k("",!0)],!0)])])):k("",!0)])],2))}}),ii=A(ri,[["__scopeId","data-v-b10c5094"]]),li=P({__name:"VPHomeHero",setup(e){const{frontmatter:t}=C();return(n,a)=>u(t).hero?(l(),w(ii,{key:0,class:"VPHomeHero",name:u(t).hero.name,text:u(t).hero.text,tagline:u(t).hero.tagline,image:u(t).hero.image,actions:u(t).hero.actions},{"home-hero-info-before":h(()=>[m(n.$slots,"home-hero-info-before")]),"home-hero-info":h(()=>[m(n.$slots,"home-hero-info")]),"home-hero-info-after":h(()=>[m(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":h(()=>[m(n.$slots,"home-hero-actions-after")]),"home-hero-image":h(()=>[m(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):k("",!0)}}),ci=e=>(R("data-v-bd37d1a2"),e=e(),j(),e),ui={class:"box"},fi={key:0,class:"icon"},di=["innerHTML"],mi=["innerHTML"],pi=["innerHTML"],hi={key:4,class:"link-text"},vi={class:"link-text-value"},gi=ci(()=>d("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),_i=P({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(l(),w(Q,{class:"VPFeature",href:t.link,rel:t.rel,target:t.target,"no-icon":!0,tag:t.link?"a":"div"},{default:h(()=>[d("article",ui,[typeof t.icon=="object"&&t.icon.wrap?(l(),f("div",fi,[S(je,{image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])])):typeof t.icon=="object"?(l(),w(je,{key:1,image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])):t.icon?(l(),f("div",{key:2,class:"icon",innerHTML:t.icon},null,8,di)):k("",!0),d("h2",{class:"title",innerHTML:t.title},null,8,mi),t.details?(l(),f("p",{key:3,class:"details",innerHTML:t.details},null,8,pi)):k("",!0),t.linkText?(l(),f("div",hi,[d("p",vi,[G(I(t.linkText)+" ",1),gi])])):k("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),bi=A(_i,[["__scopeId","data-v-bd37d1a2"]]),yi={key:0,class:"VPFeatures"},ki={class:"container"},$i={class:"items"},Pi=P({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=L(()=>{const a=t.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,s)=>a.features?(l(),f("div",yi,[d("div",ki,[d("div",$i,[(l(!0),f(x,null,H(a.features,o=>(l(),f("div",{key:o.title,class:F(["item",[n.value]])},[S(bi,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):k("",!0)}}),Si=A(Pi,[["__scopeId","data-v-b1eea84a"]]),Ai=P({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=C();return(n,a)=>u(t).features?(l(),w(Si,{key:0,class:"VPHomeFeatures",features:u(t).features},null,8,["features"])):k("",!0)}}),wi=P({__name:"VPHomeContent",setup(e){const{width:t}=va({initialWidth:0,includeScrollbar:!1});return(n,a)=>(l(),f("div",{class:"vp-doc container",style:_n(u(t)?{"--vp-offset":`calc(50% - ${u(t)/2}px)`}:{})},[m(n.$slots,"default",{},void 0,!0)],4))}}),Li=A(wi,[["__scopeId","data-v-c141a4bd"]]),Ni={class:"VPHome"},Ti=P({__name:"VPHome",setup(e){const{frontmatter:t}=C();return(n,a)=>{const s=ye("Content");return l(),f("div",Ni,[m(n.$slots,"home-hero-before",{},void 0,!0),S(li,null,{"home-hero-info-before":h(()=>[m(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[m(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[m(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[m(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[m(n.$slots,"home-hero-image",{},void 0,!0)]),_:3}),m(n.$slots,"home-hero-after",{},void 0,!0),m(n.$slots,"home-features-before",{},void 0,!0),S(Ai),m(n.$slots,"home-features-after",{},void 0,!0),u(t).markdownStyles!==!1?(l(),w(Li,{key:0},{default:h(()=>[S(s)]),_:1})):(l(),w(s,{key:1}))])}}}),Ii=A(Ti,[["__scopeId","data-v-07b1ad08"]]),Ci={},xi={class:"VPPage"};function Mi(e,t){const n=ye("Content");return l(),f("div",xi,[m(e.$slots,"page-top"),S(n),m(e.$slots,"page-bottom")])}const Ei=A(Ci,[["render",Mi]]),Vi=P({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=C(),{hasSidebar:a}=oe();return(s,o)=>(l(),f("div",{class:F(["VPContent",{"has-sidebar":u(a),"is-home":u(n).layout==="home"}]),id:"VPContent"},[u(t).isNotFound?m(s.$slots,"not-found",{key:0},()=>[S(Uo)],!0):u(n).layout==="page"?(l(),w(Ei,{key:1},{"page-top":h(()=>[m(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[m(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(n).layout==="home"?(l(),w(Ii,{key:2},{"home-hero-before":h(()=>[m(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[m(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[m(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[m(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[m(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[m(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[m(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[m(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[m(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(n).layout&&u(n).layout!=="doc"?(l(),w(J(u(n).layout),{key:3})):(l(),w(Ur,{key:4},{"doc-top":h(()=>[m(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[m(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":h(()=>[m(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[m(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[m(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":h(()=>[m(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":h(()=>[m(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[m(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[m(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[m(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":h(()=>[m(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Oi=A(Vi,[["__scopeId","data-v-9a6c75ad"]]),Fi={class:"container"},Di=["innerHTML"],zi=["innerHTML"],Hi=P({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=C(),{hasSidebar:a}=oe();return(s,o)=>u(t).footer&&u(n).footer!==!1?(l(),f("footer",{key:0,class:F(["VPFooter",{"has-sidebar":u(a)}])},[d("div",Fi,[u(t).footer.message?(l(),f("p",{key:0,class:"message",innerHTML:u(t).footer.message},null,8,Di)):k("",!0),u(t).footer.copyright?(l(),f("p",{key:1,class:"copyright",innerHTML:u(t).footer.copyright},null,8,zi)):k("",!0)])],2)):k("",!0)}}),Bi=A(Hi,[["__scopeId","data-v-566314d4"]]);function Ri(){const{theme:e,frontmatter:t}=C(),n=vn([]),a=L(()=>n.value.length>0);return Ge(()=>{n.value=zt(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:a}}const ji=e=>(R("data-v-883964e0"),e=e(),j(),e),Ui={class:"menu-text"},Gi=ji(()=>d("span",{class:"vpi-chevron-right icon"},null,-1)),Yi={class:"header"},Wi={class:"outline"},Xi=P({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=C(),a=E(!1),s=E(0),o=E(),r=E();function i(g){var _;(_=o.value)!=null&&_.contains(g.target)||(a.value=!1)}te(a,g=>{if(g){document.addEventListener("click",i);return}document.removeEventListener("click",i)}),ga("Escape",()=>{a.value=!1}),Ge(()=>{a.value=!1});function c(){a.value=!a.value,s.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function p(g){g.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),_a(()=>{a.value=!1}))}function v(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(g,_)=>(l(),f("div",{class:"VPLocalNavOutlineDropdown",style:_n({"--vp-vh":s.value+"px"}),ref_key:"main",ref:o},[g.headers.length>0?(l(),f("button",{key:0,onClick:c,class:F({open:a.value})},[d("span",Ui,I(u(ea)(u(n))),1),Gi],2)):(l(),f("button",{key:1,onClick:v},I(u(n).returnToTopLabel||"Return to top"),1)),S(St,{name:"flyout"},{default:h(()=>[a.value?(l(),f("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:p},[d("div",Yi,[d("a",{class:"top-link",href:"#",onClick:v},I(u(n).returnToTopLabel||"Return to top"),1)]),d("div",Wi,[S(ta,{headers:g.headers},null,8,["headers"])])],512)):k("",!0)]),_:1})],4))}}),Ki=A(Xi,[["__scopeId","data-v-883964e0"]]),qi=e=>(R("data-v-2488c25a"),e=e(),j(),e),Ji={class:"container"},Qi=["aria-expanded"],Zi=qi(()=>d("span",{class:"vpi-align-left menu-icon"},null,-1)),el={class:"menu-text"},tl=P({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=C(),{hasSidebar:a}=oe(),{headers:s}=Ri(),{y:o}=bn(),r=E(0);de(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Ge(()=>{s.value=zt(n.value.outline??t.value.outline)});const i=L(()=>s.value.length===0),c=L(()=>i.value&&!a.value),p=L(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:i.value,fixed:c.value}));return(v,g)=>u(n).layout!=="home"&&(!c.value||u(o)>=r.value)?(l(),f("div",{key:0,class:F(p.value)},[d("div",Ji,[u(a)?(l(),f("button",{key:0,class:"menu","aria-expanded":v.open,"aria-controls":"VPSidebarNav",onClick:g[0]||(g[0]=_=>v.$emit("open-menu"))},[Zi,d("span",el,I(u(t).sidebarMenuLabel||"Menu"),1)],8,Qi)):k("",!0),S(Ki,{headers:u(s),navHeight:r.value},null,8,["headers","navHeight"])])],2)):k("",!0)}}),nl=A(tl,[["__scopeId","data-v-2488c25a"]]);function al(){const e=E(!1);function t(){e.value=!0,window.addEventListener("resize",s)}function n(){e.value=!1,window.removeEventListener("resize",s)}function a(){e.value?n():t()}function s(){window.outerWidth>=768&&n()}const o=Ye();return te(()=>o.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:a}}const sl={},ol={class:"VPSwitch",type:"button",role:"switch"},rl={class:"check"},il={key:0,class:"icon"};function ll(e,t){return l(),f("button",ol,[d("span",rl,[e.$slots.default?(l(),f("span",il,[m(e.$slots,"default",{},void 0,!0)])):k("",!0)])])}const cl=A(sl,[["render",ll],["__scopeId","data-v-b4ccac88"]]),aa=e=>(R("data-v-be9742d9"),e=e(),j(),e),ul=aa(()=>d("span",{class:"vpi-sun sun"},null,-1)),fl=aa(()=>d("span",{class:"vpi-moon moon"},null,-1)),dl=P({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=C(),a=We("toggle-appearance",()=>{t.value=!t.value}),s=E("");return wt(()=>{s.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(o,r)=>(l(),w(cl,{title:s.value,class:"VPSwitchAppearance","aria-checked":u(t),onClick:u(a)},{default:h(()=>[ul,fl]),_:1},8,["title","aria-checked","onClick"]))}}),Ht=A(dl,[["__scopeId","data-v-be9742d9"]]),ml={key:0,class:"VPNavBarAppearance"},pl=P({__name:"VPNavBarAppearance",setup(e){const{site:t}=C();return(n,a)=>u(t).appearance&&u(t).appearance!=="force-dark"&&u(t).appearance!=="force-auto"?(l(),f("div",ml,[S(Ht)])):k("",!0)}}),hl=A(pl,[["__scopeId","data-v-3f90c1a5"]]),Bt=E();let sa=!1,ot=0;function vl(e){const t=E(!1);if(Xe){!sa&&gl(),ot++;const n=te(Bt,a=>{var s,o,r;a===e.el.value||(s=e.el.value)!=null&&s.contains(a)?(t.value=!0,(o=e.onFocus)==null||o.call(e)):(t.value=!1,(r=e.onBlur)==null||r.call(e))});At(()=>{n(),ot--,ot||_l()})}return ba(t)}function gl(){document.addEventListener("focusin",oa),sa=!0,Bt.value=document.activeElement}function _l(){document.removeEventListener("focusin",oa)}function oa(){Bt.value=document.activeElement}const bl={class:"VPMenuLink"},yl=P({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=C();return(n,a)=>(l(),f("div",bl,[S(Q,{class:F({active:u(ge)(u(t).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:h(()=>[G(I(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Ze=A(yl,[["__scopeId","data-v-f51f088d"]]),kl={class:"VPMenuGroup"},$l={key:0,class:"title"},Pl=P({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(l(),f("div",kl,[t.text?(l(),f("p",$l,I(t.text),1)):k("",!0),(l(!0),f(x,null,H(t.items,a=>(l(),f(x,null,["link"in a?(l(),w(Ze,{key:0,item:a},null,8,["item"])):k("",!0)],64))),256))]))}}),Sl=A(Pl,[["__scopeId","data-v-a6b0397c"]]),Al={class:"VPMenu"},wl={key:0,class:"items"},Ll=P({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(l(),f("div",Al,[t.items?(l(),f("div",wl,[(l(!0),f(x,null,H(t.items,a=>(l(),f(x,{key:JSON.stringify(a)},["link"in a?(l(),w(Ze,{key:0,item:a},null,8,["item"])):"component"in a?(l(),w(J(a.component),le({key:1,ref_for:!0},a.props),null,16)):(l(),w(Sl,{key:2,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):k("",!0),m(t.$slots,"default",{},void 0,!0)]))}}),Nl=A(Ll,[["__scopeId","data-v-20ed86d6"]]),Tl=e=>(R("data-v-af5898d3"),e=e(),j(),e),Il=["aria-expanded","aria-label"],Cl={key:0,class:"text"},xl=["innerHTML"],Ml=Tl(()=>d("span",{class:"vpi-chevron-down text-icon"},null,-1)),El={key:1,class:"vpi-more-horizontal icon"},Vl={class:"menu"},Ol=P({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=E(!1),n=E();vl({el:n,onBlur:a});function a(){t.value=!1}return(s,o)=>(l(),f("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:o[1]||(o[1]=r=>t.value=!0),onMouseleave:o[2]||(o[2]=r=>t.value=!1)},[d("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":s.label,onClick:o[0]||(o[0]=r=>t.value=!t.value)},[s.button||s.icon?(l(),f("span",Cl,[s.icon?(l(),f("span",{key:0,class:F([s.icon,"option-icon"])},null,2)):k("",!0),s.button?(l(),f("span",{key:1,innerHTML:s.button},null,8,xl)):k("",!0),Ml])):(l(),f("span",El))],8,Il),d("div",Vl,[S(Nl,{items:s.items},{default:h(()=>[m(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Rt=A(Ol,[["__scopeId","data-v-af5898d3"]]),Fl=["href","aria-label","innerHTML"],Dl=P({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=L(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}" />`);return(a,s)=>(l(),f("a",{class:"VPSocialLink no-icon",href:a.link,"aria-label":a.ariaLabel??(typeof a.icon=="string"?a.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,Fl))}}),zl=A(Dl,[["__scopeId","data-v-358b6670"]]),Hl={class:"VPSocialLinks"},Bl=P({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(l(),f("div",Hl,[(l(!0),f(x,null,H(t.links,({link:a,icon:s,ariaLabel:o})=>(l(),w(zl,{key:a,icon:s,link:a,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),jt=A(Bl,[["__scopeId","data-v-e71e869c"]]),Rl={key:0,class:"group translations"},jl={class:"trans-title"},Ul={key:1,class:"group"},Gl={class:"item appearance"},Yl={class:"label"},Wl={class:"appearance-action"},Xl={key:2,class:"group"},Kl={class:"item social-links"},ql=P({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=C(),{localeLinks:a,currentLang:s}=Ve({correspondingLink:!0}),o=L(()=>a.value.length&&s.value.label||t.value.appearance||n.value.socialLinks);return(r,i)=>o.value?(l(),w(Rt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:h(()=>[u(a).length&&u(s).label?(l(),f("div",Rl,[d("p",jl,I(u(s).label),1),(l(!0),f(x,null,H(u(a),c=>(l(),w(Ze,{key:c.link,item:c},null,8,["item"]))),128))])):k("",!0),u(t).appearance&&u(t).appearance!=="force-dark"&&u(t).appearance!=="force-auto"?(l(),f("div",Ul,[d("div",Gl,[d("p",Yl,I(u(n).darkModeSwitchLabel||"Appearance"),1),d("div",Wl,[S(Ht)])])])):k("",!0),u(n).socialLinks?(l(),f("div",Xl,[d("div",Kl,[S(jt,{class:"social-links-list",links:u(n).socialLinks},null,8,["links"])])])):k("",!0)]),_:1})):k("",!0)}}),Jl=A(ql,[["__scopeId","data-v-f953d92f"]]),Ql=e=>(R("data-v-6bee1efd"),e=e(),j(),e),Zl=["aria-expanded"],ec=Ql(()=>d("span",{class:"container"},[d("span",{class:"top"}),d("span",{class:"middle"}),d("span",{class:"bottom"})],-1)),tc=[ec],nc=P({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(l(),f("button",{type:"button",class:F(["VPNavBarHamburger",{active:t.active}]),"aria-label":"mobile navigation","aria-expanded":t.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=a=>t.$emit("click"))},tc,10,Zl))}}),ac=A(nc,[["__scopeId","data-v-6bee1efd"]]),sc=["innerHTML"],oc=P({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=C();return(n,a)=>(l(),w(Q,{class:F({VPNavBarMenuLink:!0,active:u(ge)(u(t).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,noIcon:n.item.noIcon,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:h(()=>[d("span",{innerHTML:n.item.text},null,8,sc)]),_:1},8,["class","href","noIcon","target","rel"]))}}),rc=A(oc,[["__scopeId","data-v-08fbf4b6"]]),ic=P({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=C(),a=o=>"component"in o?!1:"link"in o?ge(n.value.relativePath,o.link,!!t.item.activeMatch):o.items.some(a),s=L(()=>a(t.item));return(o,r)=>(l(),w(Rt,{class:F({VPNavBarMenuGroup:!0,active:u(ge)(u(n).relativePath,o.item.activeMatch,!!o.item.activeMatch)||s.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),lc=e=>(R("data-v-afb2845e"),e=e(),j(),e),cc={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},uc=lc(()=>d("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),fc=P({__name:"VPNavBarMenu",setup(e){const{theme:t}=C();return(n,a)=>u(t).nav?(l(),f("nav",cc,[uc,(l(!0),f(x,null,H(u(t).nav,s=>(l(),f(x,{key:JSON.stringify(s)},["link"in s?(l(),w(rc,{key:0,item:s},null,8,["item"])):"component"in s?(l(),w(J(s.component),le({key:1,ref_for:!0},s.props),null,16)):(l(),w(ic,{key:2,item:s},null,8,["item"]))],64))),128))])):k("",!0)}}),dc=A(fc,[["__scopeId","data-v-afb2845e"]]);function mc(e){const{localeIndex:t,theme:n}=C();function a(s){var V,M,N;const o=s.split("."),r=(V=n.value.search)==null?void 0:V.options,i=r&&typeof r=="object",c=i&&((N=(M=r.locales)==null?void 0:M[t.value])==null?void 0:N.translations)||null,p=i&&r.translations||null;let v=c,g=p,_=e;const T=o.pop();for(const b of o){let $=null;const O=_==null?void 0:_[b];O&&($=_=O);const B=g==null?void 0:g[b];B&&($=g=B);const U=v==null?void 0:v[b];U&&($=v=U),O||(_=$),B||(g=$),U||(v=$)}return(v==null?void 0:v[T])??(g==null?void 0:g[T])??(_==null?void 0:_[T])??""}return a}const pc=["aria-label"],hc={class:"DocSearch-Button-Container"},vc=d("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),gc={class:"DocSearch-Button-Placeholder"},_c=d("span",{class:"DocSearch-Button-Keys"},[d("kbd",{class:"DocSearch-Button-Key"}),d("kbd",{class:"DocSearch-Button-Key"},"K")],-1),hn=P({__name:"VPNavBarSearchButton",setup(e){const n=mc({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(a,s)=>(l(),f("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":u(n)("button.buttonAriaLabel")},[d("span",hc,[vc,d("span",gc,I(u(n)("button.buttonText")),1)]),_c],8,pc))}}),bc={class:"VPNavBarSearch"},yc={id:"local-search"},kc={key:1,id:"docsearch"},$c=P({__name:"VPNavBarSearch",setup(e){const t=()=>null,n=()=>null,{theme:a}=C(),s=E(!1),o=E(!1);de(()=>{});function r(){s.value||(s.value=!0,setTimeout(i,16))}function i(){const v=new Event("keydown");v.key="k",v.metaKey=!0,window.dispatchEvent(v),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||i()},16)}const c=E(!1),p="";return(v,g)=>{var _;return l(),f("div",bc,[u(p)==="local"?(l(),f(x,{key:0},[c.value?(l(),w(u(t),{key:0,onClose:g[0]||(g[0]=T=>c.value=!1)})):k("",!0),d("div",yc,[S(hn,{onClick:g[1]||(g[1]=T=>c.value=!0)})])],64)):u(p)==="algolia"?(l(),f(x,{key:1},[s.value?(l(),w(u(n),{key:0,algolia:((_=u(a).search)==null?void 0:_.options)??u(a).algolia,onVnodeBeforeMount:g[2]||(g[2]=T=>o.value=!0)},null,8,["algolia"])):k("",!0),o.value?k("",!0):(l(),f("div",kc,[S(hn,{onClick:r})]))],64)):k("",!0)])}}}),Pc=P({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=C();return(n,a)=>u(t).socialLinks?(l(),w(jt,{key:0,class:"VPNavBarSocialLinks",links:u(t).socialLinks},null,8,["links"])):k("",!0)}}),Sc=A(Pc,[["__scopeId","data-v-ef6192dc"]]),Ac=["href","rel","target"],wc={key:1},Lc={key:2},Nc=P({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=C(),{hasSidebar:a}=oe(),{currentLang:s}=Ve(),o=L(()=>{var c;return typeof n.value.logoLink=="string"?n.value.logoLink:(c=n.value.logoLink)==null?void 0:c.link}),r=L(()=>{var c;return typeof n.value.logoLink=="string"||(c=n.value.logoLink)==null?void 0:c.rel}),i=L(()=>{var c;return typeof n.value.logoLink=="string"||(c=n.value.logoLink)==null?void 0:c.target});return(c,p)=>(l(),f("div",{class:F(["VPNavBarTitle",{"has-sidebar":u(a)}])},[d("a",{class:"title",href:o.value??u(Dt)(u(s).link),rel:r.value,target:i.value},[m(c.$slots,"nav-bar-title-before",{},void 0,!0),u(n).logo?(l(),w(je,{key:0,class:"logo",image:u(n).logo},null,8,["image"])):k("",!0),u(n).siteTitle?(l(),f("span",wc,I(u(n).siteTitle),1)):u(n).siteTitle===void 0?(l(),f("span",Lc,I(u(t).title),1)):k("",!0),m(c.$slots,"nav-bar-title-after",{},void 0,!0)],8,Ac)],2))}}),Tc=A(Nc,[["__scopeId","data-v-0ad69264"]]),Ic={class:"items"},Cc={class:"title"},xc=P({__name:"VPNavBarTranslations",setup(e){const{theme:t}=C(),{localeLinks:n,currentLang:a}=Ve({correspondingLink:!0});return(s,o)=>u(n).length&&u(a).label?(l(),w(Rt,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:u(t).langMenuLabel||"Change language"},{default:h(()=>[d("div",Ic,[d("p",Cc,I(u(a).label),1),(l(!0),f(x,null,H(u(n),r=>(l(),w(Ze,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):k("",!0)}}),Mc=A(xc,[["__scopeId","data-v-acee064b"]]),Ec=e=>(R("data-v-9fd4d1dd"),e=e(),j(),e),Vc={class:"wrapper"},Oc={class:"container"},Fc={class:"title"},Dc={class:"content"},zc={class:"content-body"},Hc=Ec(()=>d("div",{class:"divider"},[d("div",{class:"divider-line"})],-1)),Bc=P({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=bn(),{hasSidebar:a}=oe(),{frontmatter:s}=C(),o=E({});return wt(()=>{o.value={"has-sidebar":a.value,home:s.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(r,i)=>(l(),f("div",{class:F(["VPNavBar",o.value])},[d("div",Vc,[d("div",Oc,[d("div",Fc,[S(Tc,null,{"nav-bar-title-before":h(()=>[m(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[m(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),d("div",Dc,[d("div",zc,[m(r.$slots,"nav-bar-content-before",{},void 0,!0),S($c,{class:"search"}),S(dc,{class:"menu"}),S(Mc,{class:"translations"}),S(hl,{class:"appearance"}),S(Sc,{class:"social-links"}),S(Jl,{class:"extra"}),m(r.$slots,"nav-bar-content-after",{},void 0,!0),S(ac,{class:"hamburger",active:r.isScreenOpen,onClick:i[0]||(i[0]=c=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),Hc],2))}}),Rc=A(Bc,[["__scopeId","data-v-9fd4d1dd"]]),jc={key:0,class:"VPNavScreenAppearance"},Uc={class:"text"},Gc=P({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=C();return(a,s)=>u(t).appearance&&u(t).appearance!=="force-dark"&&u(t).appearance!=="force-auto"?(l(),f("div",jc,[d("p",Uc,I(u(n).darkModeSwitchLabel||"Appearance"),1),S(Ht)])):k("",!0)}}),Yc=A(Gc,[["__scopeId","data-v-a3e2920d"]]),Wc=P({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=We("close-screen");return(n,a)=>(l(),w(Q,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(t),innerHTML:n.item.text},null,8,["href","target","rel","onClick","innerHTML"]))}}),Xc=A(Wc,[["__scopeId","data-v-1a934d60"]]),Kc=P({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=We("close-screen");return(n,a)=>(l(),w(Q,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(t)},{default:h(()=>[G(I(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),ra=A(Kc,[["__scopeId","data-v-aea78dd1"]]),qc={class:"VPNavScreenMenuGroupSection"},Jc={key:0,class:"title"},Qc=P({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(l(),f("div",qc,[t.text?(l(),f("p",Jc,I(t.text),1)):k("",!0),(l(!0),f(x,null,H(t.items,a=>(l(),w(ra,{key:a.text,item:a},null,8,["item"]))),128))]))}}),Zc=A(Qc,[["__scopeId","data-v-f60dbfa7"]]),eu=e=>(R("data-v-d99bfeec"),e=e(),j(),e),tu=["aria-controls","aria-expanded"],nu=["innerHTML"],au=eu(()=>d("span",{class:"vpi-plus button-icon"},null,-1)),su=["id"],ou={key:0,class:"item"},ru={key:1,class:"item"},iu={key:2,class:"group"},lu=P({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=E(!1),a=L(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function s(){n.value=!n.value}return(o,r)=>(l(),f("div",{class:F(["VPNavScreenMenuGroup",{open:n.value}])},[d("button",{class:"button","aria-controls":a.value,"aria-expanded":n.value,onClick:s},[d("span",{class:"button-text",innerHTML:o.text},null,8,nu),au],8,tu),d("div",{id:a.value,class:"items"},[(l(!0),f(x,null,H(o.items,i=>(l(),f(x,{key:JSON.stringify(i)},["link"in i?(l(),f("div",ou,[S(ra,{item:i},null,8,["item"])])):"component"in i?(l(),f("div",ru,[(l(),w(J(i.component),le({ref_for:!0},i.props,{"screen-menu":""}),null,16))])):(l(),f("div",iu,[S(Zc,{text:i.text,items:i.items},null,8,["text","items"])]))],64))),128))],8,su)],2))}}),cu=A(lu,[["__scopeId","data-v-d99bfeec"]]),uu={key:0,class:"VPNavScreenMenu"},fu=P({__name:"VPNavScreenMenu",setup(e){const{theme:t}=C();return(n,a)=>u(t).nav?(l(),f("nav",uu,[(l(!0),f(x,null,H(u(t).nav,s=>(l(),f(x,{key:JSON.stringify(s)},["link"in s?(l(),w(Xc,{key:0,item:s},null,8,["item"])):"component"in s?(l(),w(J(s.component),le({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(l(),w(cu,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):k("",!0)}}),du=P({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=C();return(n,a)=>u(t).socialLinks?(l(),w(jt,{key:0,class:"VPNavScreenSocialLinks",links:u(t).socialLinks},null,8,["links"])):k("",!0)}}),ia=e=>(R("data-v-516e4bc3"),e=e(),j(),e),mu=ia(()=>d("span",{class:"vpi-languages icon lang"},null,-1)),pu=ia(()=>d("span",{class:"vpi-chevron-down icon chevron"},null,-1)),hu={class:"list"},vu=P({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=Ve({correspondingLink:!0}),a=E(!1);function s(){a.value=!a.value}return(o,r)=>u(t).length&&u(n).label?(l(),f("div",{key:0,class:F(["VPNavScreenTranslations",{open:a.value}])},[d("button",{class:"title",onClick:s},[mu,G(" "+I(u(n).label)+" ",1),pu]),d("ul",hu,[(l(!0),f(x,null,H(u(t),i=>(l(),f("li",{key:i.link,class:"item"},[S(Q,{class:"link",href:i.link},{default:h(()=>[G(I(i.text),1)]),_:2},1032,["href"])]))),128))])],2)):k("",!0)}}),gu=A(vu,[["__scopeId","data-v-516e4bc3"]]),_u={class:"container"},bu=P({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=E(null),n=yn(Xe?document.body:null);return(a,s)=>(l(),w(St,{name:"fade",onEnter:s[0]||(s[0]=o=>n.value=!0),onAfterLeave:s[1]||(s[1]=o=>n.value=!1)},{default:h(()=>[a.open?(l(),f("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[d("div",_u,[m(a.$slots,"nav-screen-content-before",{},void 0,!0),S(fu,{class:"menu"}),S(gu,{class:"translations"}),S(Yc,{class:"appearance"}),S(du,{class:"social-links"}),m(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):k("",!0)]),_:3}))}}),yu=A(bu,[["__scopeId","data-v-2dd6d0c7"]]),ku={key:0,class:"VPNav"},$u=P({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:a}=al(),{frontmatter:s}=C(),o=L(()=>s.value.navbar!==!1);return kn("close-screen",n),Ue(()=>{Xe&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(r,i)=>o.value?(l(),f("header",ku,[S(Rc,{"is-screen-open":u(t),onToggleScreen:u(a)},{"nav-bar-title-before":h(()=>[m(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[m(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[m(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[m(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),S(yu,{open:u(t)},{"nav-screen-content-before":h(()=>[m(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[m(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):k("",!0)}}),Pu=A($u,[["__scopeId","data-v-7ad780c2"]]),la=e=>(R("data-v-edd2eed8"),e=e(),j(),e),Su=["role","tabindex"],Au=la(()=>d("div",{class:"indicator"},null,-1)),wu=la(()=>d("span",{class:"vpi-chevron-right caret-icon"},null,-1)),Lu=[wu],Nu={key:1,class:"items"},Tu=P({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:a,isLink:s,isActiveLink:o,hasActiveLink:r,hasChildren:i,toggle:c}=Xo(L(()=>t.item)),p=L(()=>i.value?"section":"div"),v=L(()=>s.value?"a":"div"),g=L(()=>i.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),_=L(()=>s.value?void 0:"button"),T=L(()=>[[`level-${t.depth}`],{collapsible:a.value},{collapsed:n.value},{"is-link":s.value},{"is-active":o.value},{"has-active":r.value}]);function V(N){"key"in N&&N.key!=="Enter"||!t.item.link&&c()}function M(){t.item.link&&c()}return(N,b)=>{const $=ye("VPSidebarItem",!0);return l(),w(J(p.value),{class:F(["VPSidebarItem",T.value])},{default:h(()=>[N.item.text?(l(),f("div",le({key:0,class:"item",role:_.value},ka(N.item.items?{click:V,keydown:V}:{},!0),{tabindex:N.item.items&&0}),[Au,N.item.link?(l(),w(Q,{key:0,tag:v.value,class:"link",href:N.item.link,rel:N.item.rel,target:N.item.target},{default:h(()=>[(l(),w(J(g.value),{class:"text",innerHTML:N.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(l(),w(J(g.value),{key:1,class:"text",innerHTML:N.item.text},null,8,["innerHTML"])),N.item.collapsed!=null&&N.item.items&&N.item.items.length?(l(),f("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:M,onKeydown:ya(M,["enter"]),tabindex:"0"},Lu,32)):k("",!0)],16,Su)):k("",!0),N.item.items&&N.item.items.length?(l(),f("div",Nu,[N.depth<5?(l(!0),f(x,{key:0},H(N.item.items,O=>(l(),w($,{key:O.text,item:O,depth:N.depth+1},null,8,["item","depth"]))),128)):k("",!0)])):k("",!0)]),_:1},8,["class"])}}}),Iu=A(Tu,[["__scopeId","data-v-edd2eed8"]]),Cu=P({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=E(!0);let n=null;return de(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),$a(()=>{n!=null&&(clearTimeout(n),n=null)}),(a,s)=>(l(!0),f(x,null,H(a.items,o=>(l(),f("div",{key:o.text,class:F(["group",{"no-transition":t.value}])},[S(Iu,{item:o,depth:0},null,8,["item"])],2))),128))}}),xu=A(Cu,[["__scopeId","data-v-51288d80"]]),ca=e=>(R("data-v-42c4c606"),e=e(),j(),e),Mu=ca(()=>d("div",{class:"curtain"},null,-1)),Eu={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Vu=ca(()=>d("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),Ou=P({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=oe(),a=e,s=E(null),o=yn(Xe?document.body:null);te([a,s],()=>{var i;a.open?(o.value=!0,(i=s.value)==null||i.focus()):o.value=!1},{immediate:!0,flush:"post"});const r=E(0);return te(t,()=>{r.value+=1},{deep:!0}),(i,c)=>u(n)?(l(),f("aside",{key:0,class:F(["VPSidebar",{open:i.open}]),ref_key:"navEl",ref:s,onClick:c[0]||(c[0]=Pa(()=>{},["stop"]))},[Mu,d("nav",Eu,[Vu,m(i.$slots,"sidebar-nav-before",{},void 0,!0),(l(),w(xu,{items:u(t),key:r.value},null,8,["items"])),m(i.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):k("",!0)}}),Fu=A(Ou,[["__scopeId","data-v-42c4c606"]]),Du=P({__name:"VPSkipLink",setup(e){const t=Ye(),n=E();te(()=>t.path,()=>n.value.focus());function a({target:s}){const o=document.getElementById(decodeURIComponent(s.hash).slice(1));if(o){const r=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",r)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",r),o.focus(),window.scrollTo(0,0)}}return(s,o)=>(l(),f(x,null,[d("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),d("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:a}," Skip to content ")],64))}}),zu=A(Du,[["__scopeId","data-v-c8291ffa"]]),Hu=P({__name:"Layout",setup(e){const{isOpen:t,open:n,close:a}=oe(),s=Ye();te(()=>s.path,a),Wo(t,a);const{frontmatter:o}=C(),r=Sa(),i=L(()=>!!r["home-hero-image"]);return kn("hero-image-slot-exists",i),(c,p)=>{const v=ye("Content");return u(o).layout!==!1?(l(),f("div",{key:0,class:F(["Layout",u(o).pageClass])},[m(c.$slots,"layout-top",{},void 0,!0),S(zu),S(xo,{class:"backdrop",show:u(t),onClick:u(a)},null,8,["show","onClick"]),S(Pu,null,{"nav-bar-title-before":h(()=>[m(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[m(c.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[m(c.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[m(c.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":h(()=>[m(c.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[m(c.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),S(nl,{open:u(t),onOpenMenu:u(n)},null,8,["open","onOpenMenu"]),S(Fu,{open:u(t)},{"sidebar-nav-before":h(()=>[m(c.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":h(()=>[m(c.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),S(Oi,null,{"page-top":h(()=>[m(c.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[m(c.$slots,"page-bottom",{},void 0,!0)]),"not-found":h(()=>[m(c.$slots,"not-found",{},void 0,!0)]),"home-hero-before":h(()=>[m(c.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[m(c.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[m(c.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[m(c.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[m(c.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[m(c.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[m(c.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[m(c.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[m(c.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":h(()=>[m(c.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[m(c.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[m(c.$slots,"doc-after",{},void 0,!0)]),"doc-top":h(()=>[m(c.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[m(c.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":h(()=>[m(c.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[m(c.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[m(c.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[m(c.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[m(c.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[m(c.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),S(Bi),m(c.$slots,"layout-bottom",{},void 0,!0)],2)):(l(),w(v,{key:1}))}}}),Bu=A(Hu,[["__scopeId","data-v-d8b57b2d"]]),ua={Layout:Bu,enhanceApp:({app:e})=>{e.component("Badge",To)}};function Ru(e){const t={};for(let n=0;n<e.length;n++){const a=e[n];let s=a.frontMatter.tags;s&&(Array.isArray(s)||(s=[s]),s.forEach(o=>{t[o]||(t[o]=[]),t[o].push(a)}))}return t}function ju(e){const t=[];let n="0",a=-1;for(let s=0;s<e.length;s++){const o=e[s];if(!o.frontMatter.date)continue;const r=o.frontMatter.date.split("-")[0];r===n?t[a].push(o):(a++,t[a]=[],t[a].push(o),n=r)}return t}const Uu=e=>(R("data-v-af96ff64"),e=e(),j(),e),Gu={style:{"padding-top":"10px"}},Yu={class:"year"},Wu=["href"],Xu={class:"titleDiv"},Ku=Uu(()=>d("div",{class:"title-o"},null,-1)),qu={class:"date"},Ju={__name:"Archives",setup(e){const{theme:t}=xe(),n=L(()=>ju(t.value.posts));return(a,s)=>(l(),f("div",Gu,[(l(!0),f(x,null,H(n.value,o=>(l(),f("div",null,[d("div",Yu,I(o[0].frontMatter.date.split("-")[0]),1),(l(!0),f(x,null,H(o,(r,i)=>(l(),f("a",{class:"article",href:u(ee)(r.regularPath),key:i},[d("div",Xu,[Ku,G(I(r.frontMatter.title),1)]),d("div",qu,I(r.frontMatter.date.slice(5)),1)],8,Wu))),128))]))),256))]))}},Qu=A(Ju,[["__scopeId","data-v-af96ff64"]]),Zu={__name:"Comment",setup(e){const{theme:t}=xe(),{repo:n,issueTerm:a="pathname",themes:s="github-light"}=t.value.comment,o=E();return de(()=>{if(n){const r=document.createElement("script");r.async=!0,r.setAttribute("src","https://utteranc.es/client.js"),r.setAttribute("repo",n),r.setAttribute("issue-term",a),r.setAttribute("theme",s),r.setAttribute("crossorigin","anonymous"),o.value.appendChild(r)}}),(r,i)=>(l(),f("div",{ref_key:"utterancesRef",ref:o},null,512))}},ef={class:"site-footer"},tf=["href"],nf=d("br",null,null,-1),af=d("a",{class:"vitepress",target:"_blank",href:"//vitepress.vuejs.org/"},"VitePress",-1),sf=d("a",{class:"vitepress",target:"_blank",href:"//github.com/airene/vitepress-blog-pure"},"Vitepress-blog-pure",-1),of={__name:"Copyright",setup(e){const{site:t,theme:n}=xe(),a=n.value.website,s=t.value.title;return(o,r)=>(l(),f("div",ef,[G("MIT Licensed | Copyright © 2022-present "),d("a",{class:"vitepress",href:u(a)},I(u(s)),9,tf),nf,G("Powered by "),af,G(" Theme by "),sf]))}},rf={__name:"Layout",setup(e){const{Layout:t}=ua;return(n,a)=>(l(),f(x,null,[S(u(t)),S(of)],64))}},lf={class:"wip"};function cf(e,t){return l(),f("div",lf,"🚧 Work in Progress 🚧")}const uf={},ff=A(uf,[["render",cf]]),df=e=>(R("data-v-c5463b7a"),e=e(),j(),e),mf={class:"tags"},pf=["onClick"],hf={class:"pl-1"},vf={class:"header"},gf=["href"],_f={class:"titleDiv"},bf=df(()=>d("div",{class:"title-o"},null,-1)),yf={class:"date"},kf={__name:"Tags",setup(e){const{theme:t}=xe(),n=L(()=>Ru(t.value.posts));let a=E("");const s=o=>a.value=o;return(o,r)=>(l(),f(x,null,[d("div",mf,[(l(!0),f(x,null,H(n.value,(i,c)=>(l(),f("span",{class:"tag",onClick:p=>s(c)},[G(I(c),1),d("strong",hf,I(n.value[c].length),1)],8,pf))),256))]),d("div",vf,I(u(a)),1),(l(!0),f(x,null,H(n.value[u(a)],(i,c)=>(l(),f("a",{class:"article",href:u(ee)(i.regularPath),key:c},[d("div",_f,[bf,G(I(i.frontMatter.title),1)]),d("div",yf,I(i.frontMatter.date),1)],8,gf))),128))],64))}},$f=A(kf,[["__scopeId","data-v-c5463b7a"]]);Ao.add(Fa,Da);const Sf={...ua,Layout:rf,enhanceApp({app:e}){e.component("Archives",Qu),e.component("Comment",Zu),e.component("Page",Oa),e.component("Projects",ff),e.component("Tags",$f)}};export{Oa as P,Sf as R};
