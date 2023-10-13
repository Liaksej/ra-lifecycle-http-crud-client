(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6966:function(e,t,s){Promise.resolve().then(s.bind(s,3418))},3418:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Home}});var r=s(9424),n=s(8614),o=s(1640);let c="https://ra-lifecycle-http-crud-server.vercel.app/notes";function retrieveNotes(e){fetch(c).then(e=>e.json()).then(t=>{t&&e({type:"RETRIEVE_NOTES",payload:t})}).catch(e=>{throw Error(e)})}let Note=e=>{let{note:t,dispatch:s,service:c}=e;return(0,r.jsxs)("div",{className:"rel w-96 border-2",children:[(0,r.jsx)(n.Z,{className:"abs cancel-button","aria-label":"delete",onClick:()=>{!function(e,t,s){let r="".concat(e,"?id=").concat(t);fetch(r,{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(e=>{if(!e.ok)throw Error(e.statusText)}).then(()=>{retrieveNotes(s)})}(c,t.id,s)},children:(0,r.jsx)(o.Z,{color:"disabled"})}),(0,r.jsx)("div",{className:"break-words",children:t.content})]})};var a=s(4150);let Notes=e=>{let{state:t,dispatch:s,service:o}=e;return(0,r.jsxs)("div",{className:"w-[75%] mx-auto",children:[(0,r.jsxs)("div",{className:"flex items-baseline pb-4",children:[(0,r.jsx)("h1",{className:"self-center",children:"Notes"}),(0,r.jsx)(n.Z,{className:"","aria-label":"update",size:"small",onClick:()=>{retrieveNotes(s)},children:(0,r.jsx)(a.Z,{color:"action"})})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-6 justify-center",children:t.notes&&t.notes.length>0&&t.notes.map(e=>(0,r.jsx)(Note,{note:e,dispatch:s,service:o},e.id))})]})};var l=s(9531),i=s(4615),u=s(3381);let FormForNote=e=>{let{dispatch:t,service:s}=e,o=(0,u.useRef)(null);return(0,r.jsxs)("form",{className:"w-96 mx-auto pt-16 rel",onSubmit:e=>{var r;e.preventDefault(),(null===(r=o.current)||void 0===r?void 0:r.value)&&(function(e,t,s){fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({content:t})}).then(e=>{if(!e.ok)throw Error(e.statusText)}).then(()=>{retrieveNotes(s)})}(s,o.current.value,t),o.current.value="",o.current.focus())},children:[(0,r.jsx)(l.u,{className:"w-96 border-2 resize-none",minRows:3,ref:o}),(0,r.jsx)(n.Z,{size:"small",className:"abs form-button",type:"submit",children:(0,r.jsx)(i.Z,{})})]})};function reducer(e,t){return"RETRIEVE_NOTES"===t.type?{...e,notes:[...t.payload]}:e}function Home(){let[e,t]=(0,u.useReducer)(reducer,{notes:[]});return(0,u.useEffect)(()=>{retrieveNotes(t)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Notes,{state:e,dispatch:t,service:c}),(0,r.jsx)(FormForNote,{dispatch:t,service:c})]})}}},function(e){e.O(0,[985,362,95,744],function(){return e(e.s=6966)}),_N_E=e.O()}]);