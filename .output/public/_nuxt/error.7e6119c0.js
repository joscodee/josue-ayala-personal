import{z as r,A as a,S as e,U as o,R as n,x as l,r as c,o as i,Z as _}from"./entry.b289cd52.js";const d={name:"ErrorLayout",props:["error"]},f={class:"flex items-center justify-center min-h-full flex-col bg-red-400 flex-1"},m=e("div",{class:"py-3"},null,-1),u={class:"text-[2.25em] font-extrabold"};function p(x,h,t,g,k,v){const s=c("router-link");return i(),a("div",f,[m,e("h1",u,o(t.error.statusCode),1),e("p",null,o(t.error.message),1),n(s,{class:"mt-2 font-semibold hover:text-pastel-green-600 transition-all",to:"/"},{default:l(()=>[_(" Go to home ")]),_:1})])}const b=r(d,[["render",p]]);export{b as default};
