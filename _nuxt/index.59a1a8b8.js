import{_ as i}from"./Card.139a8b74.js";import{_ as r,f as o,a as s,F as c,p as l,j as _,o as e,c as u}from"./entry.5fe4211d.js";import{d}from"./component.1bfb0495.js";import"./nuxt-link.da646172.js";import"./home-image.97c59ae2.js";import"./asyncData.7cde5f82.js";const m=d({async asyncData(){return{locations:await $fetch(_().public.serverURL+"/locations")}}}),p=s("h1",null,"Locations",-1),f={id:"card-container"};function x(n,$,h,k,y,v){const a=i;return e(),o("main",null,[p,s("div",f,[(e(!0),o(c,null,l(n.locations,t=>(e(),u(a,{title:t.name,subtitle:t.city,link:"/locations/"+t.id},null,8,["title","subtitle","link"]))),256))])])}const N=r(m,[["render",x]]);export{N as default};