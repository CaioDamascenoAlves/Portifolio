const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ThemeSwitcher-BTkI3C27.js","assets/vendor-CMx73HYy.js","assets/mui-DOWGb8aC.js","assets/Sidebar-CkgiMlVx.js","assets/Home-7FOTggme.js","assets/syntax-highlighter-CubTUESU.js","assets/Sobre-DYZGHyGT.js"])))=>i.map(i=>d[i]);
import{j as r,r as o,m as u}from"./vendor-CMx73HYy.js";import{_ as i}from"./syntax-highlighter-CubTUESU.js";import{B as l,C as a}from"./mui-DOWGb8aC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const f=()=>r.jsx(l,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:r.jsx(a,{})}),m=o.lazy(()=>i(()=>import("./ThemeSwitcher-BTkI3C27.js"),__vite__mapDeps([0,1,2]))),p=o.lazy(()=>i(()=>import("./Sidebar-CkgiMlVx.js"),__vite__mapDeps([3,1,2]))),_=o.lazy(()=>i(()=>import("./Home-7FOTggme.js"),__vite__mapDeps([4,1,2,5]))),h=o.lazy(()=>i(()=>import("./Sobre-DYZGHyGT.js"),__vite__mapDeps([6,1,2])));function x(){return r.jsx(o.Suspense,{fallback:r.jsx(f,{}),children:r.jsxs(m,{children:[r.jsxs(l,{sx:{bgcolor:"background.default",minHeight:"100vh",color:"text.primary"},children:[r.jsx(p,{}),r.jsx("section",{id:"home",children:r.jsx(_,{})})]}),r.jsx("section",{id:"sobre",children:r.jsx(h,{})})]})})}u(document.getElementById("root")).render(r.jsx(o.StrictMode,{children:r.jsx(x,{})}));
