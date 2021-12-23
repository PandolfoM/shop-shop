(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},72:function(e,t,a){e.exports=a(87)},77:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(59),o=a.n(c),l=(a(77),a(3)),i=a(10),u=a(7),s=a(66),m=a(89),d=a(100),p=a(98),E=a(65),f=a(8),g=a(67),b=a(25),h=function(e,t){switch(t.type){case"UPDATE_PRODUCTS":return Object(l.a)(Object(l.a)({},e),{},{products:Object(b.a)(t.products)});case"UPDATE_CATEGORIES":return Object(l.a)(Object(l.a)({},e),{},{categories:Object(b.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(l.a)(Object(l.a)({},e),{},{currentCategory:t.currentCategory});case"ADD_TO_CART":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(b.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(l.a)(Object(l.a)({},e),{},{cart:[].concat(Object(b.a)(e.cart),Object(b.a)(t.products))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(l.a)(Object(l.a)({},e),{},{cartOpen:a.length>0,cart:a});case"UPDATE_CART_QUANTITY":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}};var O=["value"],v=Object(n.createContext)(),y=v.Provider,j=function(e){e.value;var t,a=Object(g.a)(e,O),c=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(h,t)),o=Object(f.a)(c,2),l=o[0],i=o[1];return console.log(l),r.a.createElement(y,Object.assign({value:[l,i]},a))},w=function(){return Object(n.useContext)(v)},_=a(92);function T(e,t,a){return new Promise((function(n,r){var c,o,l,i=window.indexedDB.open("shop-shop",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,o=c.transaction(e,"readwrite"),l=o.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":l.put(a),n(a);break;case"get":var u=l.getAll();u.onsuccess=function(){n(u.result)};break;case"delete":l.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var N,k,C,A,x=function(e){var t=e.image,a=e.name,n=e._id,c=e.price,o=e.quantity,u=w(),s=Object(f.a)(u,2),m=s[0],d=s[1],p=m.cart;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(n)},r.a.createElement("img",{alt:a,src:"/images/".concat(t)}),r.a.createElement("p",null,a)),r.a.createElement("div",null,r.a.createElement("div",null,o," ",function(e,t){return 1===t?e:e+"s"}("item",o)," in stock"),r.a.createElement("span",null,"$",c)),r.a.createElement("button",{onClick:function(){var t=p.find((function(e){return e._id===n}));t?(d({type:"UPDATE_CART_QUANTITY",_id:n,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),T("cart","put",Object(l.a)(Object(l.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(d({type:"ADD_TO_CART",product:Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:1})}),T("cart","put",Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},R=a(22),S=a(99),D=Object(S.a)(N||(N=Object(R.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),P=(Object(S.a)(k||(k=Object(R.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(S.a)(C||(C=Object(R.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),U=Object(S.a)(A||(A=Object(R.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),I=a(43),Q=a.n(I);var $=function(){var e=w(),t=Object(f.a)(e,2),a=t[0],c=t[1],o=a.currentCategory,l=Object(_.a)(D),i=l.loading,u=l.data;return Object(n.useEffect)((function(){u?(c({type:"UPDATE_PRODUCTS",products:u.products}),u.products.forEach((function(e){T("products","put",e)}))):i||T("products","get").then((function(e){c({type:"UPDATE_PRODUCTS",products:e})}))}),[u,i,c]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),a.products.length?r.a.createElement("div",{className:"flex-row"},(o?a.products.filter((function(e){return e.category._id===o})):a.products).map((function(e){return r.a.createElement(x,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),i?r.a.createElement("img",{src:Q.a,alt:"loading"}):null)};var F=function(){var e=w(),t=Object(f.a)(e,2),a=t[0],c=t[1],o=a.categories,l=Object(_.a)(P),i=l.loading,u=l.data;return Object(n.useEffect)((function(){u?(c({type:"UPDATE_CATEGORIES",categories:u.categories}),u.categories.forEach((function(e){T("categories","put",e)}))):i||T("categories","get").then((function(e){c({type:"UPDATE_CATEGORIES",categories:e})}))}),[u,i,c]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),o.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var t;t=e._id,c({type:"UPDATE_CURRENT_CATEGORY",currentCategory:t})}},e.name)})))},L=a(21),G=a.n(L),M=a(31),q=function(e){var t=e.item,a=w(),n=Object(f.a)(a,2)[1];return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var a=e.target.value;"0"===a?(n({type:"REMOVE_FROM_CART",_id:t._id}),T("cart","delete",Object(l.a)({},t))):(n({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(a)}),T("cart","put",Object(l.a)(Object(l.a)({},t),{},{purchaseQuantity:parseInt(a)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:"REMOVE_FROM_CART",_id:e._id}),T("cart","delete",Object(l.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},W=a(62),Y=a(63),B=a(51),H=a.n(B),V=new(function(){function e(){Object(W.a)(this,e)}return Object(Y.a)(e,[{key:"getProfile",value:function(){return H()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return H()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),J=(a(86),function(){var e=w(),t=Object(f.a)(e,2),a=t[0],c=t[1];function o(){c({type:"TOGGLE_CART"})}if(Object(n.useEffect)((function(){function e(){return(e=Object(M.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("cart","get");case 2:t=e.sent,c({type:"ADD_MULTIPLE_TO_CART",products:Object(b.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.cart.length||function(){e.apply(this,arguments)}()}),[a.cart.length,c]),!a.cartOpen)return r.a.createElement("div",{className:"cart-closed",onClick:o},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"));return r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:o},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),a.cart.length?r.a.createElement("div",null,a.cart.map((function(e){return r.a.createElement(q,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var e=0;return a.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()),V.loggedIn()?r.a.createElement("button",null,"Checkout"):r.a.createElement("span",null,"(log in to check out)"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!"))}),z=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(F,null),r.a.createElement($,null),r.a.createElement(J,null))};var K=function(){var e=w(),t=Object(f.a)(e,2),a=t[0],c=t[1],o=Object(u.f)().id,s=Object(n.useState)({}),m=Object(f.a)(s,2),d=m[0],p=m[1],E=Object(_.a)(D),g=E.loading,b=E.data,h=a.products,O=a.cart;return Object(n.useEffect)((function(){h.length?p(h.find((function(e){return e._id===o}))):b?(c({type:"UPDATE_PRODUCTS",products:b.products}),b.products.forEach((function(e){T("products","put",e)}))):g||T("products","get").then((function(e){c({type:"UPDATE_PRODUCTS",products:e})}))}),[h,b,g,c,o]),r.a.createElement(r.a.Fragment,null,d&&O?r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,d.name),r.a.createElement("p",null,d.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",d.price," ",r.a.createElement("button",{onClick:function(){var e=O.find((function(e){return e._id===o}));e?(c({type:"UPDATE_CART_QUANTITY",_id:o,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),T("cart","put",Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(c({type:"ADD_TO_CART",product:Object(l.a)(Object(l.a)({},d),{},{purchaseQuantity:1})}),T("cart","put",Object(l.a)(Object(l.a)({},d),{},{purchaseQuantity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!O.find((function(e){return e._id===d._id})),onClick:function(){c({type:"REMOVE_FROM_CART",_id:d._id})}},"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(d.image),alt:d.name})):null,g?r.a.createElement("img",{src:Q.a,alt:"loading"}):null,r.a.createElement(J,null))};var X,Z,ee,te=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},ae=function(){return r.a.createElement("div",null,r.a.createElement(te,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},ne=a(30),re=a(93),ce=Object(S.a)(X||(X=Object(R.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),oe=(Object(S.a)(Z||(Z=Object(R.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object(S.a)(ee||(ee=Object(R.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))));var le=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(f.a)(t,2),c=a[0],o=a[1],u=Object(re.a)(ce),s=Object(f.a)(u,2),m=s[0],d=s[1].error,p=function(){var e=Object(M.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,V.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,a=t.name,n=t.value;o(Object(l.a)(Object(l.a)({},c),{},Object(ne.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:p},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:E})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:E})),d?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ie=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(f.a)(t,2),c=a[0],o=a[1],u=Object(re.a)(oe),s=Object(f.a)(u,1)[0],m=function(){var e=Object(M.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,V.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,a=t.name,n=t.value;o(Object(l.a)(Object(l.a)({},c),{},Object(ne.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:m},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ue=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,V.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return V.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/login"},"Login")))))};var se=function(){var e,t=Object(_.a)(U).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))},me=Object(s.a)({uri:"/graphql"}),de=Object(E.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(l.a)(Object(l.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),pe=new m.a({link:de.concat(me),cache:new d.a});var Ee=function(){return r.a.createElement(p.a,{client:pe},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(j,null,r.a.createElement(ue,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:z}),r.a.createElement(u.a,{exact:!0,path:"/login",component:le}),r.a.createElement(u.a,{exact:!0,path:"/signup",component:ie}),r.a.createElement(u.a,{exact:!0,path:"/orderHistory",component:se}),r.a.createElement(u.a,{exact:!0,path:"/products/:id",component:K}),r.a.createElement(u.a,{component:ae}))))))},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ge(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ge(t,e)}))}}()}},[[72,1,2]]]);
//# sourceMappingURL=main.54d8162b.chunk.js.map