import{_}from"./SmallCard.74e7b623.js";import{_ as l,f as a,a as t,d as s,t as i,F as d,p as m,u as p,j as u,o as n,c as f}from"./entry.5fe4211d.js";import{d as g}from"./component.1bfb0495.js";import{_ as h}from"./home-image.97c59ae2.js";import"./nuxt-link.da646172.js";import"./asyncData.7cde5f82.js";const y=g({async asyncData(){const o=p();return{location:await $fetch(u().public.serverURL+"/locations/"+o.params.id)}}}),v={class:"info-group"},k=t("img",{id:"main-img",src:h},null,-1),$={id:"data-container"},b={class:"data"},x={class:"data"},B={id:"dog-card-container"};function C(o,c,N,R,D,F){const r=_;return n(),a("main",null,[t("div",v,[k,t("div",$,[t("p",b,[s("Name: "),t("span",null,i(o.location.name),1)]),t("p",x,[s("City: "),t("span",null,i(o.location.city),1)])])]),t("div",B,[(n(!0),a(d,null,m(o.location.dogs,e=>(n(),f(r,{link:"/dogs/"+e.id,title:e.name,subtitle:e.breed},null,8,["link","title","subtitle"]))),256))])])}const T=l(y,[["render",C]]);export{T as default};