(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4848],{18376:function(e,t,r){Promise.resolve().then(r.bind(r,57501)),Promise.resolve().then(r.t.bind(r,22147,23)),Promise.resolve().then(r.bind(r,50004)),Promise.resolve().then(r.bind(r,2554)),Promise.resolve().then(r.bind(r,48519)),Promise.resolve().then(r.bind(r,17370)),Promise.resolve().then(r.t.bind(r,18289,23)),Promise.resolve().then(r.bind(r,62086)),Promise.resolve().then(r.t.bind(r,71635,23)),Promise.resolve().then(r.t.bind(r,71228,23)),Promise.resolve().then(r.t.bind(r,6335,23)),Promise.resolve().then(r.t.bind(r,18173,23)),Promise.resolve().then(r.bind(r,18742)),Promise.resolve().then(r.bind(r,64355)),Promise.resolve().then(r.bind(r,59049)),Promise.resolve().then(r.bind(r,46451)),Promise.resolve().then(r.bind(r,70155)),Promise.resolve().then(r.bind(r,92083)),Promise.resolve().then(r.bind(r,75014)),Promise.resolve().then(r.bind(r,80718)),Promise.resolve().then(r.bind(r,66819)),Promise.resolve().then(r.bind(r,22833)),Promise.resolve().then(r.bind(r,45343)),Promise.resolve().then(r.bind(r,22563)),Promise.resolve().then(r.bind(r,5145)),Promise.resolve().then(r.bind(r,84308)),Promise.resolve().then(r.bind(r,69125)),Promise.resolve().then(r.bind(r,77266)),Promise.resolve().then(r.bind(r,16791)),Promise.resolve().then(r.bind(r,15783)),Promise.resolve().then(r.bind(r,13870)),Promise.resolve().then(r.bind(r,50665)),Promise.resolve().then(r.t.bind(r,92523,23)),Promise.resolve().then(r.bind(r,19182)),Promise.resolve().then(r.bind(r,55127)),Promise.resolve().then(r.bind(r,48982)),Promise.resolve().then(r.bind(r,90790)),Promise.resolve().then(r.bind(r,63990)),Promise.resolve().then(r.bind(r,71362))},50004:function(e,t,r){"use strict";r.d(t,{PageClientLayout:function(){return o}});var n=r(81695),i=r(7653),s=r(54533);function o(e){return(0,s.aG)({scrollMarginTop:e.withSections?50:void 0}),function(){let e=(0,n.useRouter)(),t=(0,n.usePathname)(),r=(0,n.useSearchParams)();i.useEffect(()=>{if(r.has("fallback")){var n;let i=new URLSearchParams(r.toString());i.delete("fallback"),e.push("".concat(t,"?").concat(i.toString()).concat(null!==(n=window.location.hash)&&void 0!==n?n:""))}},[e,t,r])}(),null}},2554:function(e,t,r){"use strict";r.r(t),r.d(t,{Ad:function(){return c}});var n=r(27573),i=r(78473),s=r(7653),o=r(63530),l=r(33298);r(43503);var a=(0,r(99976).$)("8fcc83514372ae2e5d2d076f57e4caeb12df4767");function c(e){let{zoneId:t,spaceId:r,placement:o,ignore:c,siteAdsStatus:u,style:h,mode:f="auto"}=e,m=s.useRef(null),[v,p]=s.useState(!1),[g,x]=s.useState(void 0);return s.useEffect(()=>{if(!m.current)return;let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&p(!0)},{root:null,rootMargin:"0px",threshold:.1});return e.observe(m.current),()=>{e.disconnect()}},[]),s.useEffect(()=>{if(!v)return;let e=!1,r=new URL(window.location.href).searchParams.get("ads_preview"),n=!!r,s=n?"CVAIKKQM":t,l="placeholder"===r||u&&(u===i.ih.Pending||u===i.ih.InReview);if(s||l)return(async()=>{let t=l?await a({source:"placeholder"}):s?await a({placement:o,ignore:c||n,zoneId:s,mode:f,source:"live"}):void 0;!e&&t&&x(t)})(),()=>{e=!0}},[v,t,c,o,f,u]),(0,n.jsx)("div",{ref:m,className:(0,l.t)(h),"data-visual-test":"removed",children:g?(0,n.jsxs)(n.Fragment,{children:[g,(0,n.jsx)(d,{spaceId:r})]}):null})}function d(e){let{spaceId:t}=e,r=(0,o.ZK)(),i=new URL("https://www.gitbook.com");return i.searchParams.set("utm_source","content"),i.searchParams.set("utm_medium","sponsored-by-gitbook"),i.searchParams.set("utm_campaign",t),(0,n.jsx)("p",{className:(0,l.t)("mt-2","mr-2","text-xs","text-right","text-dark/5","dark:text-light/5"),children:(0,n.jsx)("a",{target:"_blank",href:i.toString(),className:(0,l.t)("hover:underline"),children:(0,o.t)(r,"sponsored_via_gitbook")})})}},64355:function(e,t,r){"use strict";r.d(t,{ScrollSectionsList:function(){return u}});var n=r(27573),i=r(72354),s=r(7653),o=r(54533),l=r(33298),a=r(23607);function c(e){let{transition:t}=e,r=(0,a.J)();return(0,n.jsx)(i.E.div,{layout:!0,layoutId:"sections-line",className:(0,l.t)(["border-primary","border-l","dark:border-primary-400","h-full","absolute","z-20","-left-[5px]"]),transition:r?{duration:0}:t})}let d={type:"spring",stiffness:700,damping:50,mass:.8};function u(e){let{sections:t}=e,r=s.useMemo(()=>t.map(e=>e.id),[t]),a=(0,o.yh)(r,{rootMargin:"-".concat(64,"px 0px -40% 0px"),threshold:.9});return(0,n.jsx)("ul",{className:(0,l.t)("border-l","border-dark/2","dark:border-light/1","pl-1"),children:t.map(e=>(0,n.jsxs)(i.E.li,{className:(0,l.t)("flex","flex-row","relative","h-fit"),children:[a===e.id?(0,n.jsx)(c,{transition:d}):null,(0,n.jsxs)("a",{href:"#".concat(e.id),className:(0,l.t)("flex","flex-row","z-10","w-full","items-baseline","left-[-1px]","relative","text-sm","py-1","ps-3","pe-2","transition-all","duration-200",e.depth>1?["ps-6","opacity-8"]:null,a===e.id?["text-primary","dark:text-primary-400","[&>span]:bg-primary-400","dark:[&>span]:bg-primary-600","dark:[&>span]:text-dark"]:["text-neutral-500","dark:text-neutral-400","hover:text-neutral-900","dark:hover:text-neutral-100"]),children:[e.tag?(0,n.jsx)("span",{className:"openapi-method openapi-method-".concat(e.tag.toLowerCase()),children:e.tag}):null,e.title]})]},e.id))})}},46451:function(e,t,r){"use strict";r.d(t,{PreservePageLayout:function(){return i}});var n=r(7653);function i(e){let{asFullWidth:t}=e;return n.useLayoutEffect(()=>{let e=document.querySelector("header");e&&(t?e.classList.add("page-full-width"):e.classList.remove("page-full-width"))},[t]),null}},70155:function(e,t,r){"use strict";r.d(t,{TrackPageView:function(){return o}});var n=r(26066),i=r(7653),s=r(76384);function o(e){let{apiHost:t,sitePointer:r,spaceId:n,pageId:s}=e;return i.useEffect(()=>{d({apiHost:t,sitePointer:r,spaceId:n,pageId:s})},[t,n,s,r]),null}async function l(e){let{apiHost:t,spaceId:r,body:n}=e,i=new URL(t);i.pathname="/v1/spaces/".concat(r,"/insights/track_view"),await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}async function a(e){let{apiHost:t,sitePointer:r,body:n}=e,i=new URL(t);i.pathname="/v1/orgs/".concat(r.organizationId,"/sites/").concat(r.siteId,"/insights/track_view"),await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}let c=null;async function d(e){let{apiHost:t,sitePointer:r,pageId:i,spaceId:o}=e;if(i===c)return;c=i;let d=await (0,s.OP)(),u={url:window.location.href,pageId:i,visitor:{anonymousId:d,userAgent:window.navigator.userAgent,language:window.navigator.language,cookies:n.Z.get()},referrer:document.referrer};try{r?await a({apiHost:t,sitePointer:r,body:{...u,spaceId:o}}):await l({apiHost:t,spaceId:o,body:u})}catch(e){console.error("Failed to track page view",e)}}},92083:function(e,t,r){"use strict";r.r(t),r.d(t,{PageFeedbackForm:function(){return u}});var n=r(27573),i=r(78473),s=r(7653),o=r(63530),l=r(80807),a=r(76384),c=r(33298);r(43503);var d=(0,r(99976).$)("20ae1cf071b7297475471d018f13dcb8f2adbcf7");function u(e){let{orientation:t="vertical",pageId:r,className:u}=e,f=(0,o.ZK)(),[m,v]=s.useState(!1),p=async e=>{v(!0);let t=await (0,a.OP)();await d({pageId:r,visitorId:t,rating:e})};return(0,n.jsxs)("div",{className:(0,c.t)("flex","vertical"===t?["flex-col","items-start"]:["flex-row","items-center"],"gap-2",u),children:[(0,n.jsx)("p",{className:(0,c.t)("text-sm","text-dark/6","dark:text-light/5"),children:(0,l.t)(f,"was_this_helpful")}),(0,n.jsx)("div",{className:(0,c.t)("inline-flex","items-center","justify-center","flex-row","rounded-full","straight-corners:rounded-sm","ring-1","ring-inset","ring-dark/2","h-8","dark:ring-light/1"),children:m?(0,n.jsx)("p",{className:(0,c.t)("text-sm","px-4","text-dark/7","dark:text-light/6"),children:(0,l.t)(f,"was_this_helpful_thank_you")}):(0,n.jsxs)("div",{className:(0,c.t)("inline-flex","[&>*:last-child]:rounded-r-full","[&>*:first-child]:rounded-l-full","straight-corners:[&>*:last-child]:rounded-none","straight-corners:[&>*:first-child]:rounded-none"),children:[(0,n.jsx)(h,{rating:0,label:(0,l.F)(f,"was_this_helpful_negative"),onClick:()=>p(i.t0.Bad)}),(0,n.jsx)(h,{rating:1,label:(0,l.F)(f,"was_this_helpful_neutral"),onClick:()=>p(i.t0.Ok)}),(0,n.jsx)(h,{rating:2,label:(0,l.F)(f,"was_this_helpful_positive"),onClick:()=>p(i.t0.Good)})]})})]})}function h(e){let{rating:t,label:r,onClick:i}=e,s=0===t?(0,n.jsx)(f,{}):1===t?(0,n.jsx)(m,{}):2===t?(0,n.jsx)(v,{}):null;return(0,n.jsx)("button",{className:(0,c.t)("flex","flex-col","items-center","justify-center","h-8","w-8","rounded-sm","text-dark/6","hover:bg-primary/4","hover:text-primary-600","dark:text-light/5","dark:hover:text-primary-300","dark:hover:bg-primary-300/2"),"aria-label":r,title:r,onClick:i,children:s})}let f=()=>(0,n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("circle",{cx:"9",cy:"9",r:"9",fill:"currentColor",fillOpacity:"0.24"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.66782 13.3737C4.87421 13.5572 5.19025 13.5386 5.3737 13.3322C7.30371 11.1609 10.6963 11.1609 12.6263 13.3322C12.8098 13.5386 13.1258 13.5572 13.3322 13.3737C13.5386 13.1902 13.5572 12.8742 13.3737 12.6678C11.0459 10.049 6.9541 10.049 4.6263 12.6678C4.44284 12.8742 4.46143 13.1902 4.66782 13.3737ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z",fill:"currentColor"})]}),m=()=>(0,n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("circle",{cx:"9",cy:"9",r:"9",fill:"currentColor",fillOpacity:"0.24"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H13C13.2761 11.5 13.5 11.7239 13.5 12C13.5 12.2761 13.2761 12.5 13 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z",fill:"currentColor"})]}),v=()=>(0,n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("circle",{cx:"9",cy:"9",r:"9",fill:"currentColor",fillOpacity:"0.24"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.66782 11.6263C4.87421 11.4428 5.19025 11.4614 5.3737 11.6678C7.30371 13.8391 10.6963 13.8391 12.6263 11.6678C12.8098 11.4614 13.1258 11.4428 13.3322 11.6263C13.5386 11.8098 13.5572 12.1258 13.3737 12.3322C11.0459 14.951 6.9541 14.951 4.6263 12.3322C4.44284 12.1258 4.46143 11.8098 4.66782 11.6263ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z",fill:"currentColor"})]})},76384:function(e,t,r){"use strict";r.d(t,{Bi:function(){return u},GQ:function(){return d},OP:function(){return a}});var n=r(26066),i=r(74859);let s="__gitbook_cookie_granted",o=null,l=null;async function a(){return o||(l||(l=c().finally(()=>{l=null})),o=await l),o}async function c(){if(u())return h();let e=n.Z.get("__session");if(e)return e;{var t;let e=h(),r=new URL(null!==(t=i.env.NEXT_PUBLIC_GITBOOK_APP_URL)&&void 0!==t?t:"https://app.gitbook.com");r.pathname="/__session",r.searchParams.set("proposed",e);try{let e=await fetch(r,{method:"GET",credentials:"include",cache:"no-cache",mode:"cors"}),{deviceId:t}=await e.json();return t}catch(t){return console.error("Failed to fetch visitor session ID",t),e}}}function d(e){n.Z.set(s,e?"yes":"no",{expires:365,sameSite:"none",secure:!0})}function u(){let e=n.Z.get(s);return"yes"!==e&&("no"===e||void 0)}function h(){return"undefined"!=typeof crypto&&crypto.randomUUID?"".concat(crypto.randomUUID(),"R"):"".concat(Math.random().toString(36).substring(2),"R")}},59049:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/default-page-cover.a2ccd7e9.svg",height:1081,width:1920,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[3489,6772,9982,4547,404,2452,2634,7609,1281,9505,6150,4531,8510,8325,1285,9028,1293,9978,1744],function(){return e(e.s=18376)}),_N_E=e.O()}]);
//# sourceMappingURL=page-bb35daef9f1179e4.js.map