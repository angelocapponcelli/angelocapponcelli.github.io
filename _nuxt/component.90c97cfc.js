import{x as f,y,u as i,z as d,q as m,A as h}from"./entry.1ef4c219.js";import{u as l}from"./asyncData.ce076f87.js";const r="__nuxt_component";async function x(o,t){const a=f(),c=i(),u=h(),{fetchKey:e}=u.proxy.$options,n=typeof e=="function"?e(()=>""):e||c.fullPath,{data:s}=await l(`options:asyncdata:${n}`,()=>t(a));s.value&&typeof s.value=="object"&&Object.assign(await o,d(m(s.value)))}const A=function(t){const{setup:a}=t;return!a&&!t.asyncData&&!t.head?{[r]:!0,...t}:{[r]:!0,...t,setup(c,u){const e=(a==null?void 0:a(c,u))||{},n=[];if(t.asyncData&&n.push(x(e,t.asyncData)),t.head){const s=f();y(typeof t.head=="function"?()=>t.head(s):t.head)}return Promise.resolve(e).then(()=>Promise.all(n)).then(()=>e).finally(()=>{n.length=0})}}};export{A as d};
