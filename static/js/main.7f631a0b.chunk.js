(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var a=c(21),s=c.n(a),n=c(24),r=c(2),i=c(14),l=c(1),d=c.n(l),j=c(4),o=c(0),b=function(e){return Object(o.jsx)(d.a.Fragment,{children:Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(o.jsx)(j.b,{className:"navbar-brand",to:"/",children:"CartZone"}),Object(o.jsxs)("div",{class:"container-fluid",children:[Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(j.b,{className:"nav-link",to:"/mobiles",children:"Mobile"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(j.b,{className:"nav-link",to:"/watches",children:"Watches"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(j.b,{className:"nav-link",to:"/laptops",children:"Laptops"})})]}),Object(o.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(o.jsx)("li",{className:"nav-item  acitve",children:Object(o.jsx)(j.b,{to:"/upload",className:"nav-link",children:"Upload Product"})})}),Object(o.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"nav-item  acitve",children:e.auth?Object(o.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.logoutHandler()},children:"logout"}):Object(o.jsx)(j.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(j.b,{to:"/signup",className:"nav-link",children:"Sign Up"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(j.b,{to:"/cart",className:"nav-link",children:"Cart"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(j.b,{to:"/checkout",className:"nav-link"})})]})]})]})})},h=c(5),m=c(15),u=c.n(m),O=c(17),x=c(18),p=c.n(x),v=c(8),g="GETPRODUCTSLIST",N="ADDTOCART",f=function(e){return function(t){return t({type:g,payload:e})}},y=c(11),C=function(e){var t=Object(v.c)((function(e){return e.productsReducer})),c=Object(v.b)(),a=Object(y.bindActionCreators)({dispatchProductList:f},c),s=Object(l.useCallback)(Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.jsonbin.io/b/6124f3cd076a223676b07660");case 2:t=e.sent,a.dispatchProductList(t.data);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(l.useEffect)((function(){s()}),[s]),Object(o.jsxs)(d.a.Fragment,{children:[Object(o.jsx)("section",{className:"bg-warning p-3",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h3",{children:"Trending Mobiles"})})})})}),Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"container mt-4",children:Object(o.jsx)("div",{className:"row",children:t.productsList.map((function(t,c){return Object(o.jsx)("div",{className:"col-lg-3 py-3 px-3",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("img",{src:t.img,alt:"Oppo Mobile",height:"50%",width:"50%"})}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("ul",{className:"list-group",children:[Object(o.jsx)("li",{className:"list-group-item",children:t.name}),Object(o.jsx)("li",{className:"list-group-item",children:t.price}),Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)(j.b,{to:"/cart",children:Object(o.jsx)("button",{className:"btn btn-success","data-id":t.id,onClick:function(){return e.onAdd(t)},children:"Add Cart"})})})]})})]})},c)}))})})})]})},w=function(e){var t=Object(v.c)((function(e){return e.productsReducer})),c=Object(v.b)(),a=Object(y.bindActionCreators)({dispatchProductList:f},c),s=Object(l.useCallback)(Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.jsonbin.io/b/6123b0802aa80036126e758a");case 2:t=e.sent,a.dispatchProductList(t.data);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(l.useEffect)((function(){s()}),[s]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"bg-warning p-3",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h3",{children:"Trending Laptops"})})})})}),Object(o.jsx)("div",{className:"container mt-4",children:Object(o.jsx)("div",{className:"row",children:t.productsList.map((function(t,c){return Object(o.jsx)("div",{className:"col-lg-3 py-3 px-3",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("img",{src:t.img,alt:"Mobile Data",height:"50%",width:"50%"})}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("ul",{className:"list-group",children:[Object(o.jsx)("li",{className:"list-group-item",children:t.name}),Object(o.jsx)("li",{className:"list-group-item",children:t.price}),Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)(j.b,{to:"/cart",children:Object(o.jsx)("button",{className:"btn btn-success","data-id":t.id,onClick:function(){return e.onAdd(t)},children:"Add Cart"})})})]})})]})},c)}))})})]})},k=function(e){var t=Object(v.c)((function(e){return e.productsReducer})),c=Object(v.b)(),a=Object(y.bindActionCreators)({dispatchProductList:f},c),s=Object(l.useCallback)(Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.jsonbin.io/b/6124f48ec5159b35ae0336b8");case 2:t=e.sent,a.dispatchProductList(t.data);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(l.useEffect)((function(){s()}),[s]),Object(o.jsxs)(d.a.Fragment,{children:[Object(o.jsx)("section",{className:"bg-warning p-3",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h3",{children:"Trending Watches"})})})})}),Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"container mt-4",children:Object(o.jsx)("div",{className:"row",children:t.productsList.map((function(t,c){return Object(o.jsx)("div",{className:"col-lg-3 py-3 px-3",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header bg-white",children:Object(o.jsx)("img",{src:t.img,alt:"Rolex Watch",height:"50%",width:"50%"})}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("ul",{className:"list-group",children:[Object(o.jsx)("li",{className:"list-group-item",children:t.name}),Object(o.jsx)("li",{className:"list-group-item",children:t.price}),Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)(j.b,{to:"/cart",children:Object(o.jsx)("button",{className:"btn btn-success","data-id":t.id,onClick:function(){return e.onAdd(t)},children:"Add Cart"})})})]})})]})},c)}))})})})]})},P=c(13),S=function(){Object(v.b)(),Object(h.g)();var e=Object(l.useState)({name:"",brand:"",image:"",price:"",qty:"",category:"",desc:"",usage:""}),t=Object(i.a)(e,2),c=t[0],a=t[1],s=function(e){a(Object(r.a)(Object(r.a)({},c),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"bg-warning p-3",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h3",{children:" Upload Products - By Admin"})})})})}),Object(o.jsx)("pre",{children:JSON.stringify(c)}),Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"container mt-4",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-8",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h4",{children:" Upload Products"})}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",name:"name",onChange:s,value:c.name,placeholder:"Product Name"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",name:"brand",onChange:s,value:c.brand,placeholder:"Brand Name"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",name:"price",onChange:s,value:c.price,placeholder:"Price"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",name:"qty",onChange:s,value:c.qty,placeholder:"QTY"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"file",className:"form-control",name:"image",placeholder:"Product Image",onChange:function(e){console.log("imageHandler...");var t=e.target.files[0],s=new FileReader;s.readAsDataURL(t),console.log(s),console.log(s.result,"...."),s.addEventListener("load",(function(){s.result&&a(Object(r.a)(Object(r.a)({},c),{},{image:s.result}))}))}})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsxs)("select",{className:"form-control",name:"category",onChange:s,children:[Object(o.jsx)("option",{value:"",children:"Select Category"}),Object(o.jsx)("option",{value:"Mobiles",children:"Mobiles"}),Object(o.jsx)("option",{value:"Laptops",children:"Laptops"}),Object(o.jsx)("option",{value:"Watches",children:"Watches"})]})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",name:"desc",onChange:s,value:c.desc,placeholder:"Product Description"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",name:"usage",onChange:s,value:c.usage,placeholder:"Product Usage"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"submit",className:"form-control btn btn-success"})})]})})]})})})})})]})},L=function(e){var t=Object(l.useState)({email:"litheshkumar@gmail.com",password:"abc123"}),c=Object(i.a)(t,2),a=c[0],s=c[1],n=Object(l.useState)({email:"",password:""}),d=Object(i.a)(n,2),b=d[0],h=d[1],m=function(e){s(Object(r.a)(Object(r.a)({},a),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"bg-warning p-3",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h4",{children:" Login Details"})})})})}),Object(o.jsx)("section",{className:"m-auto",children:Object(o.jsx)("div",{className:"container mt-4",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-5",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h4",{children:" User Login "})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),"litheshkumar@gmail.com"==a.email&&"abc123"==a.password?(e.loginHandler(),e.history.push("/cart")):h({email:"You have entered a wrong Email",password:"Either email or password is wrong"})},children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",name:"email",value:a.email,placeholder:"Email",onChange:function(e){return m(e)},error:b.email})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"password",className:"form-control",name:"password",value:a.password,placeholder:"Password",onChange:function(e){return m(e)},error:b.email})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"submit",className:"form-control btn btn-success",value:"Login"})})]}),Object(o.jsx)(j.b,{to:"/forgetPassword",className:"ml-auto",children:"Forget Password"}),Object(o.jsx)(j.b,{to:"/signup",children:" Sign Up"})]})]})})})})})]})},A=function(){var e=Object(l.useState)({name:"",email:"",password:""}),t=Object(i.a)(e,2),c=t[0],a=t[1],s=function(e){a(Object(r.a)(Object(r.a)({},c),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)(d.a.Fragment,{children:[Object(o.jsx)("section",{className:"bg-warning p-2",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{className:"h3",children:Object(o.jsx)("p",{children:"Registration Details Details"})})})})})}),Object(o.jsx)("section",{className:"mt-4",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-5 m-auto",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsxs)("div",{className:"card-header",children:[Object(o.jsx)("h4",{children:" Signup - Form"}),Object(o.jsx)("pre",{children:JSON.stringify(c)})]}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("form",{onSubmit:function(e){console.log(c),e.preventDefault()},children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"User Name",name:"name",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"email",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Password",name:"password",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Confirm Password ",name:"password",onChange:s,required:!0})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"submit",className:"form-control btn btn-primary"})})]}),Object(o.jsxs)("small",{children:["Already have account?",Object(o.jsx)("i",{className:"fa fa-sign-in-alt"}),"Please click",Object(o.jsx)("a",{href:"/login",children:" Login"})]})]})]})})})})})]})};var D=function(e){var t=e.items;return Object(o.jsxs)(d.a.Fragment,{children:[Object(o.jsx)("h1",{children:"Items Added to the cart"}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:t.map((function(e){return Object(o.jsx)("div",{className:"col-lg-3 py-3 px-3",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:e.img,alt:""}),Object(o.jsx)("h2",{children:e.name}),Object(o.jsx)("h1",{children:e.price})]})},e.id)}))})}),Object(o.jsx)(j.b,{to:"./Checkout",children:Object(o.jsx)("button",{className:"btn btn-success",children:"Proceed to Checkout "})})]})},F=c(38),R=c(39),T=c(44),U=c(43),q=function(e){Object(T.a)(c,e);var t=Object(U.a)(c);function c(){var e;Object(F.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={data:{firstname:"",lastname:"",address1:"",address2:"",city:"",state:"",zip:"",country:"",nameonthecard:"",cardnumber:"",expirydate:"",cvv:""},count:1},e.handleSubmit=function(t){t.preventDefault(),console.log("onsubmit",console.log(e.state)),e.setState({count:1})},e.handleChange=function(t){console.log(t.target.value),e.setState({data:Object(P.a)({},t.target.name,t.target.value)})},e.inc=function(){e.state.count<=2&&e.setState({count:e.state.count+1})},e.dec=function(){e.state.count>=2&&e.setState({count:e.state.count-1})},e}return Object(R.a)(c,[{key:"render",value:function(){var e=this,t=this.state.count;return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-8 m-auto",children:[Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("h2",{className:"text-center",children:"Checkout"}),Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("span",{children:"Shipping address"}),Object(o.jsx)("span",{children:"Payment details"}),Object(o.jsx)("span",{children:"Review your order"})]}),1===t?Object(o.jsx)("div",{className:"border table-borderless",children:Object(o.jsx)("table",{className:"table table-borderless",children:Object(o.jsxs)("tbody",{children:[Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:"2",children:Object(o.jsx)("h4",{children:"Shipping address"})})}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.firstname,name:"firstname",className:"form-control",placeholder:"First name*",onChange:function(t){return e.handleChange(t)}})}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.lastname,name:"lastname",className:"form-control",placeholder:"Last name*",onChange:function(t){return e.handleChange(t)}})})]}),Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:"2",children:Object(o.jsx)("input",{type:"text",value:this.state.data.address1,name:"address1",className:"form-control",placeholder:"Address line 1*",onChange:function(t){return e.handleChange(t)}})})}),Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:"2",children:Object(o.jsx)("input",{type:"text",value:this.state.data.address2,name:"address2",className:"form-control",placeholder:"Address line 2",onChange:function(t){return e.handleChange(t)}})})}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.city,name:"city",className:"form-control",placeholder:"City *",onChange:function(t){return e.handleChange(t)}})}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.state,name:"state",className:"form-control",placeholder:"State/Province*",onChange:function(t){return e.handleChange(t)}})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.zip,name:"zip",className:"form-control",placeholder:"Zip / Postal code*",onChange:function(t){return e.handleChange(t)}})}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.country,name:"country",className:"form-control",placeholder:"Country*",onChange:function(t){return e.handleChange(t)}})})]}),Object(o.jsx)("tr",{children:Object(o.jsxs)("td",{colSpan:"2",children:[Object(o.jsx)("input",{type:"checkbox",name:"checked"})," Use this address for payment details"]})})]})})}):null,2===t?Object(o.jsx)("div",{className:"border table-borderless",children:Object(o.jsx)("table",{className:"table table-borderless",children:Object(o.jsxs)("tbody",{children:[Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:"2",children:Object(o.jsx)("h4",{children:"Payment Method"})})}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.nameoncard,name:"nameoncard",className:"form-control",placeholder:"name on card*",onChange:function(t){return e.handleChange(t)}})}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.cardnumber,name:"cardnumber",className:"form-control",placeholder:"card number*",onChange:function(t){return e.handleChange(t)}})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.expirydate,name:"expirydate",className:"form-control",placeholder:"expiry date*",onChange:function(t){return e.handleChange(t)}})}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",value:this.state.data.cvv,name:"cvv",className:"form-control",placeholder:"cvv*",onChange:function(t){return e.handleChange(t)}})})]}),Object(o.jsx)("tr",{children:Object(o.jsxs)("td",{colSpan:"2",children:[Object(o.jsx)("input",{type:"checkbox",name:"checked"})," Remember credit card details for next time"]})})]})})}):null,3===t?Object(o.jsx)("div",{className:"border table-borderless",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Order Summary"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-9 m-auto",children:[Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("p",{children:"Product 1 "}),Object(o.jsx)("p",{children:"\u20b9600000 "})]}),Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("p",{children:"Product 2 "}),Object(o.jsx)("p",{children:"\u20b9120000"})]}),Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("p",{children:"Product 3 "}),Object(o.jsx)("p",{children:"\u20b949000"})]}),Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("p",{children:"Product 4 -"}),Object(o.jsx)("p",{children:"\u20b960000 "})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("p",{children:"Total"}),Object(o.jsx)("p",{children:"\u20b9250000 "})]})]})})]})}):null,3===t?Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"btn btn-sm btn-outline-primary",type:"submit",children:"Place Order"})}):null]}),Object(o.jsxs)("div",{children:[1===t?null:Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return e.dec(t)},children:"Back"}),3===t?null:Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return e.inc(t)},children:"Next"})]})]})})})}}]),c}(l.Component),E=(c(73),c(40)),M={productsList:[],cartData:[],isProductsLoading:!0,isProductDetailLoading:!0},W=Object(y.combineReducers)({productsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(r.a)(Object(r.a)({},e),{},{productsList:t.payload,isProductsLoading:!1});case N:return Object(r.a)(Object(r.a)({},e),{},{cartData:[].concat(Object(n.a)(e.cartData),[t.payload]),isProductsLoading:!1});default:return Object(r.a)({},e)}}}),H=c(41),B=c(42),I=[H.logger,B.a],J=Object(y.createStore)(W,Object(E.composeWithDevTools)(y.applyMiddleware.apply(void 0,I)));var z=function(){var e=Object(l.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)([]),m=Object(i.a)(s,2),u=m[0],O=m[1],x=function(e){var t=u.find((function(t){return t.id===e.id}));O(t?u.map((function(c){return c.id===e.id?Object(r.a)(Object(r.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(n.a)(u),[Object(r.a)(Object(r.a)({},e),{},{qty:1})]))},p=function(){a(!0)};return Object(o.jsx)(d.a.Fragment,{children:Object(o.jsx)(v.a,{store:J,children:Object(o.jsxs)(j.a,{children:[Object(o.jsx)(b,{auth:c,logoutHandler:function(){a(!1)}}),Object(o.jsxs)(h.d,{children:[Object(o.jsx)(h.b,{exact:!0,path:"/mobiles",render:function(e){return Object(o.jsx)(C,Object(r.a)(Object(r.a)({},e),{},{onAdd:x}))}}),Object(o.jsx)(h.b,{exact:!0,path:"/watches",render:function(e){return Object(o.jsx)(k,Object(r.a)(Object(r.a)({},e),{},{onAdd:x}))}}),Object(o.jsx)(h.b,{exact:!0,path:"/laptops",render:function(e){return Object(o.jsx)(w,Object(r.a)(Object(r.a)({},e),{},{onAdd:x}))}}),Object(o.jsx)(h.b,{exact:!0,path:"/upload",component:S}),Object(o.jsx)(h.b,{exact:!0,path:"/login",render:function(e){return Object(o.jsx)(L,Object(r.a)(Object(r.a)({},e),{},{loginHandler:p}))}}),Object(o.jsx)(h.b,{exact:!0,path:"/signup",component:A}),Object(o.jsx)(h.b,{exact:!0,path:"/checkout",component:q}),!0===c?Object(o.jsx)(h.b,{exact:!0,path:"/cart",render:function(e){return Object(o.jsx)(D,Object(r.a)(Object(r.a)({},e),{},{onAdd:x,items:u}))}}):Object(o.jsx)(h.a,{to:"/login"})]})]})})})};c(74);s.a.render(Object(o.jsx)(z,{}),document.getElementById("abc"))}},[[75,1,2]]]);
//# sourceMappingURL=main.7f631a0b.chunk.js.map