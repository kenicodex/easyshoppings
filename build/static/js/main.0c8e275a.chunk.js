(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{17:function(e,t,s){},20:function(e,t,s){},30:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),i=s(22),r=s.n(i),o=(s(30),s(3)),l=s(4),d=s(2),j=s(24),b=s(10),u=s(6),h=(s(20),["male","female","unisex"]),m=["male","female","unisex"],p=["accessories","phone"],x=["snacks","drinks","food"],g=["rings","necklace","bangles"],O=function(e,t){return Object(c.jsx)("optgroup",{label:e,children:t.map((function(t){return Object(c.jsx)("option",{value:t+" "+e,children:t+" "+e})}))})};var f=function(e){var t=Object(n.useState)({}),s=Object(d.a)(t,2),a=s[0],i=s[1],r=Object(n.useState)(""),o=Object(d.a)(r,2),l=o[0],f=o[1],v=Object(n.useState)(""),y=Object(d.a)(v,2),N=y[0],w=y[1],S=Object(n.useState)("upload"),k=Object(d.a)(S,2),C=k[0],E=k[1],I=Object(n.useState)([]),P=Object(d.a)(I,2),L=P[0],J=P[1];Object(n.useEffect)((function(){i((function(t){return Object(u.a)(Object(u.a)({},t),{},{seller:e.seller})}))}),[e.seller]);var A=function(e){var t=e.target.name,s=e.target.value;i((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},t,s))}))},F=function(e){var t;return"error"===e.status?t="danger":"info"===e.status?t="info":"success"===e.status&&(t="success"),Object(c.jsx)("div",{className:"text-".concat(t),children:Object(c.jsx)("b",{children:e.message})})};return Object(c.jsxs)("div",{id:"form",encType:"multipart/form-data",children:[Object(c.jsx)("h3",{style:{marginLeft:"1%"},children:"Add New Item"}),"  ",Object(c.jsx)("div",{style:{marginLeft:"1%"},children:l}),Object(c.jsxs)("div",{className:"d-flex",style:{overflowX:"scroll"},children:[Object(c.jsx)("img",{src:N,alt:"",width:"150px",height:"180px",className:"m-1"}),Object(c.jsxs)("label",{className:"rounded border text-center p-4 m-1",htmlFor:"photo",style:{height:"200px",width:"150px",cursor:"pointer"},children:[Object(c.jsx)("input",{type:"file",className:"d-none",onChange:function(e){!function(e){if(void 0!==e.target)if(["image/jpeg","image/jpg","image/png"].some((function(t){return t===e.target.files[0].type}))){if(f(Object(c.jsx)(F,{message:"",status:""})),L.length<4){J([].concat(Object(j.a)(L),[e.target.files[0]])),E(e.target.files[0]);var t=URL.createObjectURL(e.target.files[0]);w(t)}}else f(Object(c.jsx)(F,{message:"You can't upload this type of file. Photos only!",status:"error"}))}(e)},id:"photo"}),"Add photo",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-plus",style:{fontSize:"50px",marginTop:"42%"}})," ",Object(c.jsx)("br",{}),"max : 4"]}),L.map((function(e){var t=URL.createObjectURL(e);return Object(c.jsx)("div",{className:"d-block position-relative mx-1",children:Object(c.jsx)("img",{src:t,width:"100px",height:"100px",alt:""})})}))]}),Object(c.jsxs)("div",{className:"grid-input",children:[Object(c.jsx)("div",{className:"intag",children:Object(c.jsx)("input",{className:"inputs rounded border",type:"text",name:"Name",placeholder:"Name",value:a.Name,onChange:function(e){A(e)}})}),Object(c.jsx)("div",{className:"intag",children:Object(c.jsx)("input",{className:"inputs rounded border",type:"text",name:"Price",placeholder:"Price",value:a.Price,onChange:function(e){A(e)}})}),Object(c.jsx)("div",{className:"intag",children:Object(c.jsx)("input",{className:"inputs rounded border",type:"text",name:"Extra_info",placeholder:"Extra_info",value:a.Extra_info,onChange:function(e){A(e)}})}),Object(c.jsx)("div",{className:"intag",children:Object(c.jsxs)("select",{name:"Category",className:"inputs rounded border",onChange:function(e){return i((function(t){return Object(u.a)(Object(u.a)({},t),{},{Category:e.target.value})}))},children:[Object(c.jsx)("option",{value:void 0,selected:!0,children:"Select Category"}),O("Shoes",h),O("Clothes",m),O("Devices",p),O("Food",x),O("Jeweries",g)]})})]}),Object(c.jsx)("div",{className:"w-100 text-center mt-3",children:Object(c.jsx)("button",{className:"btn border p-3 w-25",type:"submit",onClick:function(){!function(){if(void 0===a.Name||void 0===a.Price||void 0===a.Extra_info||void 0===a.Category||"upload"===C)f(Object(c.jsx)(F,{message:"Please fill in all fields",status:"error"}));else{var e=new FormData;e.append("words",JSON.stringify(a));for(var t=0;t<4;t++)e.append("pic".concat(t),L[t]);f(Object(c.jsx)(F,{message:"Adding item "+a.Name+"...",status:"info"})),fetch("http://localhost:5000/calibre/add",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){f(Object(c.jsx)(F,{message:e.message,stauts:e.status}))}))}}()},children:"Add"})})]})};var v=function(e){return Object(c.jsx)("button",{onClick:function(){var t;t=e.id,alert(t)},style:{right:"0"},className:"btn border border-danger text-danger py-3 p-1 w-25 position-absolute",children:"Delete"})};var y=function(e){return Object(c.jsx)("button",{onClick:function(){var t;t=e.id,alert(t)},className:"btn border border-info text-info py-3 p-1 w-25",children:"Edit"})};var N=function(e){var t=Object(n.useState)([]),s=Object(d.a)(t,2),a=s[0],i=s[1],r="https://kennyserver.herokuapp.com";return Object(n.useEffect)((function(){fetch(r+"/calibre/items",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({seller:e.seller})}).then((function(e){return e.json()})).then((function(e){return i(e.message)}))}),[e.seller,r]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{style:{marginLeft:"1%"},children:"Your Products"}),a.map((function(e){var t=e.name,s=e.image;return Object(c.jsxs)("div",{className:"col-lg-2 col-md-4 col-sm-6 bg-light border rounded-top px-0",style:{marginLeft:"1%"},children:[Object(c.jsx)("div",{className:"bg-white",style:{height:"150px"}}),Object(c.jsxs)("div",{className:"position-relative",children:[Object(c.jsx)("div",{children:s.split(",").map((function(e){return Object(c.jsx)("p",{children:Object(c.jsx)("img",{src:"C:/Users/PC/Desktop/Works/jobs/calibre/ServerAPIs/public/images/1614357191273-{EE84ECD9-D5FF-4329-9F88-5EA07409946E}.png.jpg",alt:"",width:"100%",height:"100%"})})}))}),Object(c.jsx)("div",{children:t})]}),Object(c.jsxs)("div",{className:"d-flex w-100",children:[Object(c.jsx)(y,{id:"edit"}),Object(c.jsx)(v,{id:"delete"})]})]})}))]})};var w=function(e){var t=Object(n.useState)({}),s=Object(d.a)(t,2),a=s[0],i=s[1],r="https://kennyserver.herokuapp.com";return Object(n.useEffect)((function(){"out"!==localStorage.getItem("logged")&&null!==localStorage.getItem("logged")||window.location.assign("/login"),fetch(r+"/calibreauth/user",{method:"get"}).then((function(e){return e.json()})).then((function(e){i(e.user)}))}),[r,"http://localhost:5000"]),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"container border-left border-right",children:[Object(c.jsxs)("div",{className:"jumbotron mt-2 h1",onClick:function(){},children:["Welcome ",a.Firstname,Object(c.jsx)("button",{className:"btn h6 float-right border",onClick:function(){window.confirm("Are you sure you want to log out?")&&(localStorage.setItem("logged","out"),window.location.assign("/login"))},children:"logout"}),Object(c.jsx)("div",{className:"h6",children:"Start selling Products With us"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Details : "}),"Name : ",a.Firstname," ",a.Lastname," ",Object(c.jsx)("br",{}),"Email : ",a.Email," ",Object(c.jsx)("br",{}),"Phone  : ",a.Phone," ",Object(c.jsx)("br",{})]}),Object(c.jsx)(f,{seller:a.id}),Object(c.jsx)("hr",{}),Object(c.jsx)(N,{seller:a.id})]})})};s(17);var S=function(e){var t=Object(n.useState)(""),s=Object(d.a)(t,2),a=s[0],i=s[1],r=Object(n.useState)(""),l=Object(d.a)(r,2),j=l[0],b=l[1],u="https://kennyserver.herokuapp.com";Object(n.useEffect)((function(){}),[u]);var h=function(e){var t;return"success"===e.status?t="success":"info"===e.status?t="info":"error"===e.status&&(t="danger"),Object(c.jsx)("div",{className:"border border-".concat(t," text-center w-auto mx-5 rounded p-2 text-").concat(t),children:e.message})};return Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{className:"authnav",children:Object(c.jsx)(o.b,{to:"/",className:"pt-2",children:"EasyShoppings"})}),Object(c.jsxs)("div",{className:" container text-center",style:{width:"100vw",height:"95vh",paddingTop:"20vh",display:"block"},children:[Object(c.jsx)("h2",{children:"We just emailed you a verification code"}),j,Object(c.jsx)("input",{type:"tel",value:a,name:"code",style:{},className:"rounded border py-2 px-3",placeholder:"Enter code",onChange:function(e){i(e.target.value)}})," ",Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){""===a?alert("enter the code please"):fetch(u+"/calibreauth/confirm",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:a})}).then((function(e){return e.json()})).then((function(e){"success"===e.status?window.location.assign("/admin"):"Invalid code"===e.message?b(Object(c.jsx)(h,{message:e.message,status:e.status})):window.location.assign("/signup")}))},className:"mt-4 p-2 w-25 btn border",children:"send"}),Object(c.jsxs)("div",{className:" p-2",children:["the code expires in two minutes ",Object(c.jsx)("br",{})," do not refresh this page"]})]})]})},k=function(e,t,s){return void 0===e||e===t};var C=function(e){var t="https://kennyserver.herokuapp.com";Object(n.useEffect)((function(){"in"===localStorage.getItem("logged")&&window.location.assign("/admin")}),[t]);var s=Object(n.useState)({}),a=Object(d.a)(s,2),i=a[0],r=a[1],l=Object(n.useState)(""),j=Object(d.a)(l,2),h=j[0],m=j[1],p=Object(n.useState)(!0),x=Object(d.a)(p,2),g=x[0],O=x[1],f=function(e){var t=e.target.name,s=e.target.value;r((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},t,s))}))},v=function(e){var t;return"success"===e.status?t="success":"info"===e.status?t="info":"error"===e.status&&(t="danger"),Object(c.jsx)("div",{className:"border border-".concat(t," text-center w-50 m-auto rounded p-2 text-").concat(t),children:e.message})};return Object(c.jsxs)("div",{className:"w-100",children:[Object(c.jsx)("nav",{className:"authnav",children:Object(c.jsx)(o.b,{to:"/",className:"pt-2",children:"EasyShoppings"})}),Object(c.jsx)("div",{className:"container border-left border-right d-flex justify-content-center",style:{height:"auto"},children:Object(c.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-12 rounded border position-relative p-0",style:{top:"20vh"},children:[Object(c.jsxs)("div",{className:"border-bottom name",children:["Login",Object(c.jsx)("div",{style:{fontSize:"12px"},children:"check out your store"})]}),Object(c.jsxs)("div",{className:"w-100",children:[h,Object(c.jsx)("div",{className:"inputele",children:Object(c.jsx)("input",{type:"text",value:i.Email,name:"Email",placeholder:"Email",onChange:function(e){f(e)}})}),Object(c.jsxs)("div",{className:"inputele position-relative",children:[Object(c.jsx)("input",{type:g?"password":"text",value:i.Password,name:"Password",placeholder:"Password",onChange:function(e){f(e)}}),Object(c.jsx)("div",{className:"position-absolute text-center pt-2",onClick:function(){O(!g)},style:{right:"1.2px",height:"80%",top:"10%",width:"50px",cursor:"pointer"},children:g?"hide":"show"})]})]}),Object(c.jsx)("div",{className:"w-100  text-center",children:Object(c.jsx)("button",{className:"btn border mb-2",type:"submit",onClick:function(){!function(){var e=i.Email,s=i.Password;!1===window.navigator.onLine?m(Object(c.jsx)(v,{message:"Network error",status:"error"})):k(e,"")||k(s,"")?m(Object(c.jsx)(v,{message:"Please fill in all fields",status:"error"})):(m(Object(c.jsx)(v,{message:"Loading...",status:"info"})),fetch(t+"/calibreauth/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(m(Object(c.jsx)(v,{message:e.message+" successfully logged in",status:e.status})),localStorage.setItem("user",JSON.stringify(i)),localStorage.setItem("logged","in"),window.location.assign("/admin")):m(Object(c.jsx)(v,{message:e.message,status:e.status}))})))}()},children:"Login"})}),Object(c.jsx)("div",{className:"position-absolute",style:{right:"1px",bottom:"2px"},children:"Forgot password?"})]})}),Object(c.jsxs)("div",{className:"w-100 text-center position-relative",style:{top:"30vh"},children:["Don't have an account? ",Object(c.jsx)(o.b,{to:"/signup",children:"Signup"})]})]})};var E=function(e){var t=Object(n.useState)({}),s=Object(d.a)(t,2),a=s[0],i=s[1],r=Object(n.useState)(""),l=Object(d.a)(r,2),j=l[0],h=l[1],m="https://kennyserver.herokuapp.com",p=Object(n.useState)(!0),x=Object(d.a)(p,2),g=x[0],O=x[1];Object(n.useEffect)((function(){"in"===localStorage.getItem("logged")&&window.location.assign("/admin")}),[m,"http://localhost:5000"]);var f=function(e){var t=e.target.name,s=e.target.value;i((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},t,s))}))},v=function(e){var t;return"success"===e.status?t="success":"info"===e.status?t="info":"error"===e.status&&(t="danger"),Object(c.jsx)("div",{className:"border border-".concat(t," text-center w-auto mx-5 rounded p-2 text-").concat(t),children:e.message})},y=a.Firstname,N=a.Lastname,w=a.Email,S=a.Password,C=a.Phone,E=a.Confirm;return Object(c.jsxs)("div",{className:"w-100",children:[Object(c.jsx)("nav",{className:"authnav",children:Object(c.jsx)(o.b,{to:"/",className:"pt-2",children:"EasyShoppings"})}),Object(c.jsx)("div",{className:"container border-left border-right d-flex justify-content-center pb-3",style:{height:"auto"},children:Object(c.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-12 rounded border position-relative p-0",style:{top:"10vh"},children:[Object(c.jsxs)("div",{className:"border-bottom name",children:["Register",Object(c.jsx)("div",{style:{fontSize:"12px"},children:"Create and account with us and start selling"})]}),Object(c.jsxs)("div",{className:"w-100",children:[j,Object(c.jsx)("div",{className:"inputele",children:Object(c.jsx)("input",{type:"text",value:a.Firstname,name:"Firstname",placeholder:"Firstname",onChange:function(e){f(e)}})}),Object(c.jsx)("div",{className:"inputele",children:Object(c.jsx)("input",{type:"text",value:a.Lastname,name:"Lastname",placeholder:"Lastname",onChange:function(e){f(e)}})}),Object(c.jsx)("div",{className:"inputele",children:Object(c.jsx)("input",{type:"email",value:a.Email,name:"Email",placeholder:"Email",onChange:function(e){f(e)}})}),Object(c.jsx)("div",{className:"inputele",children:Object(c.jsx)("input",{type:"tel",value:a.Phone,name:"Phone",placeholder:"Phone",onChange:function(e){f(e)}})}),Object(c.jsxs)("div",{className:"inputele position-relative",children:[Object(c.jsx)("input",{type:g?"password":"text",value:a.Password,name:"Password",placeholder:"Password",onChange:function(e){f(e)}}),Object(c.jsx)("div",{className:"position-absolute text-center pt-2",onClick:function(){O(!g)},style:{right:"1.2px",height:"80%",top:"10%",width:"50px",cursor:"pointer"},children:g?"hide":"show"})]}),Object(c.jsxs)("div",{className:"inputele position-relative",children:[Object(c.jsx)("input",{type:g?"password":"text",value:a.Confirm,name:"Confirm",placeholder:"Confirm",onChange:function(e){f(e)}}),Object(c.jsx)("div",{className:"position-absolute text-center pt-2",onClick:function(){O(!g)},style:{right:"1.2px",height:"80%",top:"10%",width:"50px",cursor:"pointer"},children:g?"hide":"show"})]})]}),Object(c.jsx)("div",{className:"w-100 mb-2 text-center",children:Object(c.jsx)("button",{className:"btn border",onClick:function(){!function(){if(k(y,"")||k(N,"")||k(w,"")||k(S,"")||k(C,"")||k(E,void 0))h(Object(c.jsx)(v,{message:"Please fill in all fields ",status:"error"}));else if(w.includes("@")||w.includes("mail.com")||!w.includes(" "))if(k(S,E))if(S.length<8)h(Object(c.jsx)(v,{message:"Passwords too short",status:"error"}));else if(S.match(/^[A-Za-z]\w{7,14}$/))h(Object(c.jsx)(v,{message:"Password must contain at least 1 uppercase, 1 lowwercase and 1 special character.eg",status:"error"}));else{var e=new FormData;e.append("details",JSON.stringify(a)),h(Object(c.jsx)(v,{message:"Loading...",status:"info"})),fetch(m+"/calibreauth/signup",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){h(Object(c.jsx)(v,{message:e.message,status:e.status})),sessionStorage.setItem("sent",JSON.stringify(a)),"success"===e.status&&(localStorage.setItem("logged","in"),window.location.assign("/admin"))}))}else h(Object(c.jsx)(v,{message:"Passwords don't match",status:"error"}));else h(Object(c.jsx)(v,{message:"Invalid email",status:"error"}))}()},children:"Resgiter"})})]})}),Object(c.jsxs)("div",{className:"w-100 text-center position-relative",style:{top:"10vh"},children:["Already have an account? ",Object(c.jsx)(o.b,{to:"/login",children:"Sign in"})]})]})};s(36),s(37);var I=function(e){var t=Object(n.useState)(""),s=Object(d.a)(t,2),a=s[0],i=s[1],r=["meme","hayy","writer","write","search","six"],o=Object(n.useState)([]),l=Object(d.a)(o,2),j=l[0],b=l[1],u=function(e){if(""!==a){var t=[];r.forEach((function(s,c){s.toString().includes(e.target.value,0)&&t.push(s)})),b(t)}};return Object(c.jsxs)("div",{className:"input",children:[Object(c.jsxs)("button",{onClick:function(){u()},children:[Object(c.jsx)("i",{className:"fa fa-search"})," "]}),Object(c.jsx)("input",{type:"text",placeholder:"Search...",value:a,onChange:function(e){u(e),i(e.target.value)}})," ",Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"position-relative bg-secondary text-dark p-2",style:{height:"250px",zIndex:"1000",display:"none"},children:j.map((function(e){return Object(c.jsx)("p",{children:e})}))})]})};s(38);var P=function(e){var t=Object(n.useState)("hide"),s=Object(d.a)(t,2),i=s[0],r=s[1];Object(n.useEffect)((function(){}),[]);var l=Object(n.useRef)(null),j=function(){"hide"===i?(r("show"),l.current.style.display="block",l.current.style.opacity="1"):"show"===i&&(r("hide"),l.current.style.display="none",l.current.style.opacity="0")};return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)("i",{className:"fa fa-bars position-fixed text-white d-sm",onClick:function(){return j()},style:{fontSize:"24px",right:"2%",top:"10px",cursor:"pointer",zIndex:"10000"}}),Object(c.jsxs)("div",{className:"bg-dark sidebar",ref:l,children:[Object(c.jsx)("div",{className:"side",onClick:j}),Object(c.jsxs)("div",{className:"position-fixed text-white bg-dark content",style:{zIndex:"1000"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"#products",children:"products"})," "]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"/",children:"men"})," "]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"/",children:"women"})," "]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"/",children:"About us"})," "]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"/login",children:"Login"})," "]}),Object(c.jsx)("span",{className:"position-fixed bg-dark py-2 text-center w-50",style:{bottom:"0"},children:"\xa9kennycode 2021"})]})]})]})};var L=function(e){return Object(n.useEffect)((function(){}),[]),Object(c.jsxs)("nav",{className:"w-100",style:{backgroundColor:e.color||"none"},children:["   ",Object(c.jsx)(P,{}),Object(c.jsx)("div",{className:"brand",children:Object(c.jsx)(o.b,{to:"/",children:"EasyShopping"})}),Object(c.jsx)(I,{}),Object(c.jsxs)("div",{className:"links",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"/",children:"products"})," "]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"/",children:"men"})," "]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"/",children:"women"})," "]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"/",children:"About us"})," "]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"/login",children:"Login"})," "]})]}),Object(c.jsx)("button",{className:"right",children:Object(c.jsx)(o.b,{to:"/cart",className:"text-white",children:Object(c.jsx)("i",{className:"fa fa-shopping-cart"})})})]})};s(39);var J=function(e){Object(n.useEffect)((function(){i(JSON.parse(sessionStorage.getItem("cart")))}),[]);var t=Object(n.useState)(JSON.parse(sessionStorage.getItem("cart"))),s=Object(d.a)(t,2),a=s[0],i=s[1],r=function(){return Object(c.jsxs)(n.Fragment,{children:[Object(c.jsxs)("div",{className:"h2 jumbotron m-auto position-relative",children:["Your have ",a.length," items in your cart",Object(c.jsx)("span",{className:"position-absolute h4",style:{right:"2%"},children:"clear"})]}),a.map((function(e,t){var s=e.name,n=(e.img,e.price);e.desc;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"carted rounded d-flex mt-1 bg-secondary text-white",style:{height:"100px"},children:[Object(c.jsx)("img",{src:"",alt:"",className:"col-3"}),Object(c.jsxs)("div",{className:"about col-5 h3",children:["price    ",n," ",Object(c.jsx)("br",{})]}),Object(c.jsx)("div",{className:"col-4 h4",children:s})]})},t)}))]})},o=function(){return Object(c.jsxs)("div",{className:"position-fixed text-center rounded-lg h2 p-3 border border-danger text-danger empty",children:[Object(c.jsx)("span",{style:{fontSize:"40px"},children:"\ud83d\ude1f"}),Object(c.jsx)("br",{}),"You Cart is empty",Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"btn btn-info border border-info",children:"Go back to store"})]})},l=function(){return null===a?Object(c.jsx)(o,{}):Object(c.jsx)(r,{})};return Object(c.jsxs)("div",{className:"w-100 position-relative ",children:[Object(c.jsx)(L,{color:"black"}),Object(c.jsx)("div",{className:"container position-relative m-auto",style:{top:"5vh"},children:Object(c.jsx)(l,{})})]})},A=(s(40),s(41),function(e,t,s){return Math.round(1e3*Math.round(10*Math.random()))}),F=[{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"},{name:"name",img:"img",price:A(),desc:"desc"}],z=[{sex:"Men",link:""},{sex:"Women",link:""},{sex:"Kids",link:""},{sex:"Alte",link:""},{sex:"About Us",link:""}];var D=function(e){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)("span",{children:"Easy Shopping"}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["Easy and Affordable Deals ",Object(c.jsx)("br",{})," buy and sells products"]})]}),Object(c.jsx)(o.b,{to:"/signup",children:Object(c.jsx)("button",{className:"rounded bg-success",children:"Join Us"})}),Object(c.jsx)("img",{src:"./images/yespng",alt:"",className:"ad"})]})};var T=function(e){var t=e.width,s=e.pics,a=e.height,i=s||[],r=Object(n.useState)([]),o=Object(d.a)(r,2),l=o[0],j=o[1],b=Object(n.useState)([]),u=Object(d.a)(b,2),h=u[0],m=u[1];Object(n.useEffect)((function(){for(var e=[],t=[],s=document.getElementsByClassName("slides"),c=0;c<i.length;c++)e[c]=100*c,t[c]=e[c].toString()+"%",s[c].style.transition="left 1s ease-in-out";m(e),j(t)}),[i.length]);var p={opacity:".1",backgroundImage:"inherit",backgroundColor:"red"};return Object(c.jsx)("div",{className:"d-flex position-relative",style:{left:"0",width:t||"600px",height:a||"500px",overflow:"hidden"},children:i.map((function(e,s){return Object(c.jsxs)("div",{style:{width:t,height:"100%",left:l[s]},id:s+"id",className:"border position-absolute slides",children:[Object(c.jsx)("div",{className:"position-absolute w-25 h-100",onClick:function(){!function(){for(var e=[],t=[],s=document.getElementsByClassName("slides"),c=0;c<i.length;c++)e[c]=h[c]-100,t[c]=e[c].toString()+"%",s[c].style.transition="left 1s ease-in-out";if(0===e[e.length-1]){for(var n=document.getElementsByClassName("slides"),a=0;a<i.length;a++)e[a]=100*a,t[a]=e[a].toString()+"%",n[a].style.transition="left ease-out";m(e),j(t)}else m(e),j(t)}()},style:{right:"0",zIndex:"100",opacity:"0"}}),Object(c.jsx)("div",{className:"position-absolute w-25 h-100",onClick:function(){!function(){for(var e=[],t=[],s=document.getElementsByClassName("slides"),c=0;c<i.length;c++)e[c]=h[c]+100,t[c]=e[c].toString()+"%",s[c].style.transition="left 1s ease-in-out";if(0===e[0]){for(var n=document.getElementsByClassName("slides"),a=0;a<i.length;a++)e[a]=a/100,t[a]=e[a].toString()+"%",n[a].style.transition="left ease-out";m(e),j(t)}else m(e),j(t)}()},style:{left:"0",zIndex:"100",opacity:"0"}}),Object(c.jsx)("img",{src:"./images/"+e,height:"100%",width:t,alt:""}),Object(c.jsx)("i",{className:"fa fa-arrow-left leftarrow arr"}),Object(c.jsx)("i",{className:"fa fa-arrow-right rightarrow arr"}),Object(c.jsx)("div",{style:p,children:i.map((function(e){return Object(c.jsx)("i",{className:"fa fa-circle"})}))})]})}))})};var M=function(e){var t=Object(n.useState)("block"),s=Object(d.a)(t,2),a=s[0],i=s[1],r=Object(n.useState)(""),l=Object(d.a)(r,2),j=l[0],b=l[1];Object(n.useEffect)((function(){setTimeout((function(){return b("Time out! please refresh page")}),5e3),fetch("https://kennyserver.herokuapp.com/users",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"whatever"})}).then((function(e){return e.json()})).then((function(e){"loaded"===e.info&&i("none")}))}),[]);var u=function(){return m[Math.floor(Math.random()*m.length)]},h="./images/",m=["shop.jpg","wl3.jpg","wl2.jpg","wl.jpg","diff.jpg","inovate.jpg"];return Object(c.jsxs)("div",{className:"body position-relative",children:[Object(c.jsx)("div",{className:"position-fixed bg-dark text-center d-none",style:{width:"100vw",height:"100vh",zIndex:"1000",display:a},children:Object(c.jsxs)("div",{className:"h1 position-relative text-light",style:{top:"40%"},children:["EasyShoppings ",Object(c.jsx)("h6",{children:j})," "]})}),Object(c.jsx)("div",{className:"darken",style:{backgroundImage:"url(".concat(h+"nbg.jpg",")")}}),Object(c.jsx)(L,{}),Object(c.jsx)(D,{}),Object(c.jsx)("main",{className:"bg-light h-auto",children:Object(c.jsxs)("div",{className:"xyz container",children:[Object(c.jsxs)("div",{className:"border border-success aaa",children:[Object(c.jsx)("div",{className:"a-head ff",children:"Categories "}),Object(c.jsx)("div",{className:"cate",children:z.map((function(e){var t=e.sex;e.link;return Object(c.jsx)("div",{className:"eachcate",children:t})}))})]}),Object(c.jsx)("div",{className:"bbb position-relative",children:Object(c.jsx)(T,{height:"100%",width:"100%",pics:m})}),Object(c.jsxs)("div",{className:"eee bg-light",children:[Object(c.jsx)("span",{style:{color:"green"},children:"Q"}),"uick",Object(c.jsx)("span",{style:{color:"black"},children:" D"}),"elivery"]}),Object(c.jsx)("div",{className:"product bg-light",id:"products",children:F.map((function(e,t){var s=e.name,n=(e.img,e.desc,e.price);return Object(c.jsx)("div",{className:"h-auto item",onClick:function(){var e,s;e=t,s=u(),localStorage.setItem("item",JSON.stringify({id:e,img:s}))},children:Object(c.jsxs)(o.b,{to:"/item?id="+t+"?srcpathquery?="+u(),className:"rounded-lg prod",children:[Object(c.jsx)("img",{src:h+u(),alt:"",width:"100%",height:"70%"}),Object(c.jsxs)("div",{className:"desc text-dark",style:{height:"30%"},children:[Object(c.jsx)("span",{className:"name",children:s})," ",Object(c.jsx)("br",{}),Object(c.jsxs)("span",{className:"price",children:[Object(c.jsx)("span",{children:"\u20a6"}),n]})]})]})})}))}),Object(c.jsxs)("div",{className:"ddd",children:[Object(c.jsx)("div",{className:"ddd1"}),Object(c.jsx)("div",{className:"ddd2"})]})]})}),Object(c.jsxs)("footer",{className:"text-light bg-dark ",style:{bottom:"0",height:"150%"},children:[Object(c.jsxs)("div",{className:"d-lg-flex w-100",children:[Object(c.jsx)("div",{className:"about pb-4 col-lg-6 p-2 h3",children:"EasyShopping is an online shopping site where anyone with any type of business can affordably advertise"}),Object(c.jsxs)("div",{className:"contact pb-4 px-3 col-lg-6 ",children:[Object(c.jsx)("h3",{children:"Contact us on any of these :"}),"Phone : 08085503290 ",Object(c.jsx)("br",{}),"Email : kehindesalaudeen222@gmail.com ",Object(c.jsx)("br",{}),"facebook : pending ",Object(c.jsx)("br",{}),"instagram : pending ",Object(c.jsx)("br",{}),"whatsapp : pending"]})]}),Object(c.jsx)("span",{className:"position-absolute",children:"\xa9 copyright kennyCode"})]})]})},R=[];function U(){var e=JSON.stringify(R);sessionStorage.setItem("cart",e)}s(42);var B=function(e){var t=window.location.href,s=t.substring(t.indexOf("=")+1,t.lastIndexOf("?s")),a=t.substring(t.lastIndexOf("=")+1),i=Object(n.useState)({id:s,pic:a}),r=Object(d.a)(i,2),o=r[0],l=r[1],j=Object(n.useState)(!1),b=Object(d.a)(j,2),u=b[0],h=b[1],m=Object(n.useState)({opac:"0",rit:"-50%"}),p=Object(d.a)(m,2),x=p[0],g=p[1],O=Object(n.useRef)("");Object(n.useEffect)((function(){l({id:s,pic:a}),document.title=" Item | KennyCode",null!==sessionStorage.getItem("carted-item".concat(s))&&(h(!0),O.current.click=function(){window.location.assign("/cart")})}),[s,a]);var f=function(e){g({opac:"1",rit:"0"}),h(!0),function(e,t){var s=sessionStorage.getItem("cart");s=JSON.parse(s),null===sessionStorage.getItem("carted-item".concat(t))&&(sessionStorage.setItem("carted-item".concat(t),!0),null===s?(R.push(e),U(),console.log("from the beginning "+R)):R.length>0?(R.push(e),U(),console.log("added newitem when cart len  = 0 <->"+R)):0===R.length&&((R=JSON.parse(sessionStorage.getItem("cart"))).push(e),U(),console.log("cart is now empty "+R+" and len is "+R.length)))}(F[o.id],o.id),setTimeout((function(){g({opac:"0",rit:"-50%"})}),3e3),"Add to cart"!==O.current.innerHTML&&window.location.assign("/cart")},v=F[o.id],y=v.name,N=v.price;return Object(c.jsxs)("div",{className:"bg-light",children:[Object(c.jsx)(L,{color:"black"}),Object(c.jsxs)("div",{className:"itempage bg-light container",children:[Object(c.jsx)("div",{className:"position-fixed w-50 bg-success text-white px-2 pt-5 h4 sl text-center",style:{top:"60px",height:"100px",right:x.rit,opacity:x.opac,transition:"3s right",zIndex:"100"},children:"Item successfully added"}),Object(c.jsx)("div",{className:"picture rounded",children:Object(c.jsx)("img",{src:"./images/"+o.pic,width:"100%",height:"100%",alt:""})}),Object(c.jsxs)("div",{className:"details rounded-bottom text-dark bg-white",children:[Object(c.jsxs)("div",{className:"p-3",children:[Object(c.jsxs)("h2",{children:[y," "]})," ",o.pic,Object(c.jsxs)("h3",{children:[Object(c.jsx)("span",{children:"\u20a6"}),N]}),"Delivery info :"]}),Object(c.jsx)("button",{className:"w-50 border btncart",ref:O,style:{backgroundColor:u?"green":"none",color:u?"white":"grey",fontSize:"13px"},onClick:function(e){f()},children:u?"View cart and checkout":"Add to cart"})]})]})]})};var W=function(e){return Object(c.jsxs)("div",{className:"w-100",children:[Object(c.jsx)(L,{}),Object(c.jsx)("div",{className:"text-danger text-center px-0",style:{height:"100vh",width:"100%",textAlign:"center",backgroundColor:"#fff",paddingTop:"35vh"},children:Object(c.jsxs)("div",{className:"border rounded-lg border-danger m-auto w-50 p-5",children:[Object(c.jsx)("b",{className:"h1",children:" OOPS\ud83d\ude1f"}),Object(c.jsx)("h3",{children:"Error  404"}),Object(c.jsx)("h4",{children:"page does not existing"})]})})]})};var Y=function(e){return Object(c.jsx)(o.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:M}),Object(c.jsx)(l.a,{path:"/item",component:B}),Object(c.jsx)(l.a,{path:"/cart",component:J}),Object(c.jsx)(l.a,{path:"/admin",component:w}),Object(c.jsx)(l.a,{path:"/login",component:C}),Object(c.jsx)(l.a,{path:"/signup",component:E}),Object(c.jsx)(l.a,{path:"/confirm",component:S}),Object(c.jsx)(l.a,{path:"*",component:W})]})})},_=function(){return Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(Y,{})})};r.a.render(_(),document.getElementById("root"));t.default=_}},[[43,1,2]]]);
//# sourceMappingURL=main.0c8e275a.chunk.js.map