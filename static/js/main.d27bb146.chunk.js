(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{32:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(33),s=c.n(a),n=c(38),r=c(2),i=c(5),l=c(1),j=c.n(l),d=c(3),o=c(0),b=function(e){return Object(o.jsx)(j.a.Fragment,{children:Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(o.jsx)(d.b,{className:"navbar-brand",to:"/",children:"CartZone"}),Object(o.jsxs)("div",{class:"container-fluid",children:[Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{className:"nav-link",to:"/mobiles",children:"Mobile"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{className:"nav-link",to:"/watches",children:"Watches"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{className:"nav-link",to:"/laptops",children:"Laptops"})})]}),Object(o.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(o.jsx)("li",{className:"nav-item  acitve",children:Object(o.jsx)(d.b,{to:"/upload",className:"nav-link",children:"Upload Product"})})}),Object(o.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"nav-item  acitve",children:e.auth?Object(o.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.logoutHandler()},children:"logout"}):Object(o.jsx)(d.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{to:"/signup",className:"nav-link",children:"Sign Up"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{to:"/cart",className:"nav-link",children:"Cart"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{to:"/checkout",className:"nav-link"})})]})]})]})})},h=c(4),m=c(12),u=c.n(m),O=c(14),x=c(15),p=c.n(x),v=(c(32),function(e){var t=Object(l.useState)([]),c=Object(i.a)(t,2),a=c[0],s=c[1],n=Object(l.useState)(!0),r=Object(i.a)(n,2),b=(r[0],r[1]),h=function(){var e=Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("./data2.json");case 2:t=e.sent,s(t.data),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){h()})),Object(o.jsxs)(j.a.Fragment,{children:[Object(o.jsx)("section",{className:"bg-warning p-3",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h3",{children:"Trending Mobiles"})})})})}),Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"container m-4",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)("div",{className:"card",children:a.map((function(t,c){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("img",{src:t.img,alt:"Oppo Mobile",height:"50%",width:"50%"})}),Object(o.jsx)("div",{className:"card-body",id:"mob",children:Object(o.jsxs)("ul",{className:"list-group",children:[Object(o.jsx)("li",{className:"list-group-item",children:t.name}),Object(o.jsx)("li",{className:"list-group-item",children:t.price}),Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)(d.b,{to:"/cart",children:Object(o.jsx)("button",{className:"btn btn-success","data-id":t.id,onClick:function(){return e.onAdd(t)},children:"Add Cart"})})})]})})]},c)}))})})})})})]})}),N=function(e){var t=Object(l.useState)([]),c=Object(i.a)(t,2),a=c[0],s=c[1],n=Object(l.useState)(!0),r=Object(i.a)(n,2),j=(r[0],r[1]),b=function(){var e=Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("./data.json");case 2:t=e.sent,s(t.data),j(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){b()})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"bg-warning p-3",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h3",{children:"Trending Laptops"})})})})}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col"})})}),Object(o.jsx)("div",{className:"container mt-3",children:Object(o.jsx)("div",{className:"col-md-4",children:Object(o.jsx)("div",{className:"card",children:a.map((function(t,c){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("img",{src:t.img,alt:"Mobile Data",height:"50%",width:"50%"})}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("ul",{className:"list-group",children:[Object(o.jsx)("li",{className:"list-group-item",children:t.name}),Object(o.jsx)("li",{className:"list-group-item",children:t.price}),Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)(d.b,{to:"/cart",children:Object(o.jsx)("button",{className:"btn btn-success","data-id":t.id,onClick:function(){return e.onAdd(t)},children:"Add Cart"})})})]})})]},c)}))})})})]})},g=function(e){var t=Object(l.useState)([]),c=Object(i.a)(t,2),a=c[0],s=c[1],n=Object(l.useState)(!0),r=Object(i.a)(n,2),b=(r[0],r[1]),h=function(){var e=Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("./data1.json");case 2:t=e.sent,s(t.data),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){h()})),Object(o.jsxs)(j.a.Fragment,{children:[Object(o.jsx)("section",{className:"bg-warning p-3",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h3",{children:"Trending Watches"})})})})}),Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"container mt-4",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)("div",{className:"card",children:a.map((function(t,c){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"card-header bg-white",children:Object(o.jsx)("img",{src:t.img,alt:"Rolex Watch",height:"50%",width:"50%"})}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("ul",{className:"list-group",children:[Object(o.jsx)("li",{className:"list-group-item",children:t.name}),Object(o.jsx)("li",{className:"list-group-item",children:t.price}),Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)(d.b,{to:"/cart",children:Object(o.jsx)("button",{className:"btn btn-success","data-id":t.id,onClick:function(){return e.onAdd(t)},children:"Add Cart"})})})]})})]},c)}))})})})})})]})},f=c(11),y=function(){var e=Object(l.useState)({productName:"",price:"",qty:"",category:"",image:"",desc:"",usage:""}),t=Object(i.a)(e,2),c=t[0],a=t[1],s=function(e){a(Object(r.a)(Object(r.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"bg-warning p-3",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h4",{children:" Upload Product"})})})})}),Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"container mt-4",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsxs)("div",{className:"card-header",children:[Object(o.jsx)("h5",{children:" Product Upload"}),Object(o.jsx)("pre",{children:JSON.stringify(c)})]}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("form",{onSubmit:function(e){console.log(c),e.preventDefault()},children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Product Name",name:"productName",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"number",className:"form-control",placeholder:"Price",name:"price",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"number",className:"form-control",placeholder:"QTY",name:"qty",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Category",name:"category",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"file",className:"form-control",name:"image",onChange:function(e){var t=e.target.files[0],s=new FileReader;s.readAsDataURL(t),s.addEventListener("load",(function(){s.result&&a(Object(r.a)(Object(r.a)({},c),{},{image:s.result}))}))}})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("textarea",{className:"form-control",placeholder:"Product Description",name:"desc",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("textarea",{className:"form-control",name:"usage",onChange:s,placeholder:"Product Usage",required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("button",{className:"btn btn-success",children:"Upload Product"})})]})})]})})})})})]})},w=function(e){var t=Object(l.useState)({email:"litheshkumar@gmail.com",password:"abc123"}),c=Object(i.a)(t,2),a=c[0],s=c[1],n=Object(l.useState)({email:"",password:""}),j=Object(i.a)(n,2),b=j[0],h=j[1],m=function(e){s(Object(r.a)(Object(r.a)({},a),{},Object(f.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"bg-warning p-3",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h4",{children:" Login Details"})})})})}),Object(o.jsx)("section",{className:"m-auto",children:Object(o.jsx)("div",{className:"container mt-4",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-5",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h4",{children:" User Login "})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),"litheshkumar@gmail.com"==a.email&&"abc123"==a.password?(e.loginHandler(),e.history.push("/cart")):h({email:"You have entered a wrong Email",password:"Either email or password is wrong"})},children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",name:"email",value:a.email,placeholder:"Email",onChange:function(e){return m(e)},error:b.email})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"password",className:"form-control",name:"password",value:a.password,placeholder:"Password",onChange:function(e){return m(e)},error:b.email})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"submit",className:"form-control btn btn-success",value:"Login"})})]}),Object(o.jsx)(d.b,{to:"/forgetPassword",className:"ml-auto",children:"Forget Password"}),Object(o.jsx)(d.b,{to:"/signup",children:" Sign Up"})]})]})})})})})]})},C=function(){var e=Object(l.useState)({name:"",email:"",password:""}),t=Object(i.a)(e,2),c=t[0],a=t[1],s=function(e){a(Object(r.a)(Object(r.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)(j.a.Fragment,{children:[Object(o.jsx)("section",{className:"bg-warning p-2",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{className:"h3",children:Object(o.jsx)("p",{children:"Registration Details Details"})})})})})}),Object(o.jsx)("section",{className:"mt-4",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-5 m-auto",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsxs)("div",{className:"card-header",children:[Object(o.jsx)("h4",{children:" Signup - Form"}),Object(o.jsx)("pre",{children:JSON.stringify(c)})]}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("form",{onSubmit:function(e){console.log(c),e.preventDefault()},children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"User Name",name:"name",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"email",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Password",name:"password",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Confirm Password ",name:"password",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"submit",className:"form-control btn btn-primary"})})]}),Object(o.jsxs)("small",{children:["Already have account?",Object(o.jsx)("i",{className:"fa fa-sign-in-alt"}),"Please click",Object(o.jsx)("a",{href:"/login",children:" Login"})]})]})]})})})})})]})};var S=function(e){var t=e.items;return Object(o.jsxs)(j.a.Fragment,{children:[Object(o.jsx)("h1",{children:"Items Added to the cart"}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)("div",{className:"card",children:t.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:e.img,alt:""}),Object(o.jsx)("h2",{children:e.name}),Object(o.jsx)("h1",{children:e.price})]},e.id)}))})})})}),Object(o.jsx)(d.b,{to:"./Checkout",children:Object(o.jsx)("button",{className:"btn btn-success",children:"Proceed to Checkout "})})]})},k=c(35),P=c(36),A=c(39),q=c(37),F=function(e){Object(A.a)(c,e);var t=Object(q.a)(c);function c(){var e;Object(k.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={data:{firstname:"",lastname:"",address1:"",address2:"",city:"",state:"",zip:"",country:"",nameonthecard:"",cardnumber:"",expirydate:"",cvv:""},count:1},e.handleSubmit=function(t){t.preventDefault(),console.log("onsubmit",console.log(e.state)),e.setState({count:1})},e.handleChange=function(t){console.log(t.target.value),e.setState({data:Object(f.a)({},t.target.name,t.target.value)})},e.inc=function(){e.state.count<=2&&e.setState({count:e.state.count+1})},e.dec=function(){e.state.count>=2&&e.setState({count:e.state.count-1})},e}return Object(P.a)(c,[{key:"render",value:function(){var e=this,t=this.state.count;return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-8 m-auto",children:[Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("h2",{className:"text-center",children:"Checkout"}),Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("span",{children:"Shipping address"}),Object(o.jsx)("span",{children:"Payment details"}),Object(o.jsx)("span",{children:"Review your order"})]}),1===t?Object(o.jsx)("div",{className:"border table-borderless",children:Object(o.jsx)("table",{className:"table table-borderless",children:Object(o.jsxs)("tbody",{children:[Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:"2",children:Object(o.jsx)("h4",{children:"Shipping address"})})}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.firstname,name:"firstname",className:"form-control",placeholder:"First name*",onChange:function(t){return e.handleChange(t)}})}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.lastname,name:"lastname",className:"form-control",placeholder:"Last name*",onChange:function(t){return e.handleChange(t)}})})]}),Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:"2",children:Object(o.jsx)("input",{type:"text",value:this.state.data.address1,name:"address1",className:"form-control",placeholder:"Address line 1*",onChange:function(t){return e.handleChange(t)}})})}),Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:"2",children:Object(o.jsx)("input",{type:"text",value:this.state.data.address2,name:"address2",className:"form-control",placeholder:"Address line 2",onChange:function(t){return e.handleChange(t)}})})}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.city,name:"city",className:"form-control",placeholder:"City *",onChange:function(t){return e.handleChange(t)}})}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.state,name:"state",className:"form-control",placeholder:"State/Province*",onChange:function(t){return e.handleChange(t)}})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.zip,name:"zip",className:"form-control",placeholder:"Zip / Postal code*",onChange:function(t){return e.handleChange(t)}})}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.country,name:"country",className:"form-control",placeholder:"Country*",onChange:function(t){return e.handleChange(t)}})})]}),Object(o.jsx)("tr",{children:Object(o.jsxs)("td",{colSpan:"2",children:[Object(o.jsx)("input",{type:"checkbox",name:"checked"})," Use this address for payment details"]})})]})})}):null,2===t?Object(o.jsx)("div",{className:"border table-borderless",children:Object(o.jsx)("table",{className:"table table-borderless",children:Object(o.jsxs)("tbody",{children:[Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:"2",children:Object(o.jsx)("h4",{children:"Payment Method"})})}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.nameoncard,name:"nameoncard",className:"form-control",placeholder:"name on card*",onChange:function(t){return e.handleChange(t)}})}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.cardnumber,name:"cardnumber",className:"form-control",placeholder:"card number*",onChange:function(t){return e.handleChange(t)}})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.expirydate,name:"expirydate",className:"form-control",placeholder:"expiry date*",onChange:function(t){return e.handleChange(t)}})}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.cvv,name:"cvv",className:"form-control",placeholder:"cvv*",onChange:function(t){return e.handleChange(t)}})})]}),Object(o.jsx)("tr",{children:Object(o.jsxs)("td",{colSpan:"2",children:[Object(o.jsx)("input",{type:"checkbox",name:"checked"})," Remember credit card details for next time"]})})]})})}):null,3===t?Object(o.jsx)("div",{className:"border table-borderless",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Order Summary"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-9 m-auto",children:[Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("p",{children:"Product 1 "}),Object(o.jsx)("p",{children:"\u20b9600000 "})]}),Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("p",{children:"Product 2 "}),Object(o.jsx)("p",{children:"\u20b9120000"})]}),Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("p",{children:"Product 3 "}),Object(o.jsx)("p",{children:"\u20b949000"})]}),Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("p",{children:"Product 4 -"}),Object(o.jsx)("p",{children:"\u20b960000 "})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("p",{children:"Total"}),Object(o.jsx)("p",{children:"\u20b9250000 "})]})]})})]})}):null,3===t?Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"btn btn-sm btn-outline-primary",type:"submit",children:"Place Order"})}):null]}),Object(o.jsxs)("div",{children:[1===t?null:Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return e.dec(t)},children:"Back"}),3===t?null:Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return e.inc(t)},children:"Next"})]})]})})})}}]),c}(l.Component);c(69);var U=function(){var e=Object(l.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)([]),m=Object(i.a)(s,2),u=m[0],O=m[1],x=function(e){var t=u.find((function(t){return t.id===e.id}));O(t?u.map((function(c){return c.id===e.id?Object(r.a)(Object(r.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(n.a)(u),[Object(r.a)(Object(r.a)({},e),{},{qty:1})]))},p=function(){a(!0)};return Object(o.jsx)(j.a.Fragment,{children:Object(o.jsxs)(d.a,{children:[Object(o.jsx)(b,{auth:c,logoutHandler:function(){a(!1)}}),Object(o.jsxs)(h.d,{children:[Object(o.jsx)(h.b,{exact:!0,path:"/mobiles",render:function(e){return Object(o.jsx)(v,Object(r.a)(Object(r.a)({},e),{},{onAdd:x}))}}),Object(o.jsx)(h.b,{exact:!0,path:"/watches",render:function(e){return Object(o.jsx)(g,Object(r.a)(Object(r.a)({},e),{},{onAdd:x}))}}),Object(o.jsx)(h.b,{exact:!0,path:"/laptops",render:function(e){return Object(o.jsx)(N,Object(r.a)(Object(r.a)({},e),{},{onAdd:x}))}}),Object(o.jsx)(h.b,{exact:!0,path:"/upload",component:y}),Object(o.jsx)(h.b,{exact:!0,path:"/login",render:function(e){return Object(o.jsx)(w,Object(r.a)(Object(r.a)({},e),{},{loginHandler:p}))}}),Object(o.jsx)(h.b,{exact:!0,path:"/signup",component:C}),Object(o.jsx)(h.b,{exact:!0,path:"/checkout",component:F}),!0===c?Object(o.jsx)(h.b,{exact:!0,path:"/cart",render:function(e){return Object(o.jsx)(S,Object(r.a)(Object(r.a)({},e),{},{onAdd:x,items:u}))}}):Object(o.jsx)(h.a,{to:"/login"})]})]})})};c(70);s.a.render(Object(o.jsx)(U,{}),document.getElementById("abc"))}},[[71,1,2]]]);
//# sourceMappingURL=main.d27bb146.chunk.js.map