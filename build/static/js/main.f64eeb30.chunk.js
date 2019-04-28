(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(42),l=a.n(c),o=a(13),i=(a(74),a(75),a(8)),u=a(9),s=a(11),m=a(10),d=a(12),h=a(26),p=a(23),E=a(32),b=a(126),v=a(127),f=(a(78),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(o.b,{className:"nav-link nav-brand",exact:"true",to:"/"},"Coverage"),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(v.a,{className:"mr-auto"},r.a.createElement(o.b,{className:"nav-link",exact:"true",to:"/"},"My Items"),r.a.createElement(o.b,{className:"nav-link",to:"/add"},"Add")))))}}]),t}(r.a.Component)),g=a(120),C=a(121),k=a(68),O=a(128),j=a(122),N=a(20),y=a.n(N),S=a(29),I=a(66),x=a.n(I),w=a(119),M=a(67),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{className:"mb-3"},r.a.createElement(M.a,{placeholder:"Search","aria-label":"Search bar","aria-describedby":"search-bar",value:this.props.search,onChange:this.props.onSearch}),r.a.createElement(w.a.Append,null,r.a.createElement(w.a.Text,{id:"search-bar"},r.a.createElement(S.a,{icon:"search"})))))}}]),t}(n.Component),L=(a(117),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onEditClick=function(e){var t=e.currentTarget.dataset.itemId;console.log("Edit item clicked: ",t)},a.onDeleteClick=function(e){var t=e.currentTarget.dataset.itemId;y.a.delete("/item/delete/".concat(t)).then(function(e){a.getInventory()}).catch(function(e){console.error(e)}),console.log("Delete item clicked: ",t)},a.onSearch=function(e){a.setState({search:e.target.value}),a.searchValue(e.target.value)},a.searchValue=function(e){y.a.get("/items/find/".concat(e)).then(function(e){var t=a.state,n={items:e.data.items};a.setState(Object.assign({},t,n))})},a.state={search:"",items:[]},a.searchValue=x.a.debounce(a.searchValue,300),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getInventory",value:function(){var e=this;y.a.get("/items/get").then(function(t){var a=e.state,n={items:t.data.items};e.setState(Object.assign({},a,n))}).catch(function(e){console.error(e)})}},{key:"componentDidMount",value:function(){this.getInventory()}},{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{className:"main-view"},r.a.createElement(C.a,null,r.a.createElement(k.a,{className:"mt-3"},r.a.createElement(o.b,{to:"/add"},"Add",r.a.createElement(S.a,{icon:"plus"})))),r.a.createElement(C.a,null,r.a.createElement(k.a,{className:"mt-3"},r.a.createElement(F,{search:this.state.search,onSearch:this.onSearch}))),r.a.createElement(C.a,null,r.a.createElement(k.a,null,r.a.createElement(O.a,{as:"ul"},this.state.items.map(function(t,a){return r.a.createElement(O.a.Item,{as:"li",key:t._id},r.a.createElement("h4",null,t.name),r.a.createElement("h5",null,t.manufacturer),r.a.createElement("p",null,t.cost),r.a.createElement("div",{className:"float-right mx-2"},r.a.createElement(j.a,{variant:"danger","data-item-id":t._id,onClick:e.onDeleteClick},r.a.createElement(S.a,{icon:"trash-alt"}))),r.a.createElement("div",{className:"float-right mx-2"},r.a.createElement(o.b,{to:"/edit/".concat(t._id)},r.a.createElement(j.a,{variant:"dark","data-item-id":t._id,onClick:e.onEditClick},r.a.createElement(S.a,{icon:"edit"})))))})))))}}]),t}(n.Component)),T=a(125),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onFieldChange=function(e){switch(e.target.id){case"name-input":a.setState({productName:e.target.value});break;case"manufacturer-input":a.setState({manufacturer:e.target.value});break;case"serial-input":a.setState({serial:e.target.value});break;case"cost-input":a.setState({cost:e.target.value});break;default:console.log("No known input")}},a.onAddItem=function(e){e.preventDefault(),console.log("Add Item!!!"),console.log("Product name: ",a.state.productName),console.log("Manufacturer: ",a.state.manufacturer),console.log("Serial: ",a.state.serial),console.log("Cost: ",a.state.cost),y.a.post("/item/create",{name:a.state.productName,nameLower:a.state.productName.toLowerCase(),manufacturer:a.state.manufacturer,serial:a.state.serial,cost:a.state.cost,imageUrl:"http://via.placeholder.com/1600x500",receiptImageUrl:"http://via.placeholder.com/500x100",serialImageUrl:"http://via.placeholder.com/360x640",thumbnailUrl:"http://via.placeholder.com/100x100"}).then(function(e){a.setState({redirectToMain:!0})}).catch(function(e){console.error("No BUENO!!!: ",e)})},a.state={productName:"",manufacturer:"",serial:"",cost:"",redirectToMain:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.redirectToMain?r.a.createElement(h.a,{exact:!0,to:"/"}):r.a.createElement(g.a,null,r.a.createElement(C.a,null,r.a.createElement(k.a,null,r.a.createElement(T.a,null,r.a.createElement(T.a.Group,{controlId:"name-input"},r.a.createElement(T.a.Label,null,"Product Name"),r.a.createElement(T.a.Control,{placeholder:"",value:this.state.productName,onChange:this.onFieldChange})),r.a.createElement(T.a.Group,{controlId:"manufacturer-input"},r.a.createElement(T.a.Label,null,"Manufacturer"),r.a.createElement(T.a.Control,{placeholder:"",value:this.state.manufacturer,onChange:this.onFieldChange})),r.a.createElement(T.a.Group,{controlId:"serial-input"},r.a.createElement(T.a.Label,null,"Serial"),r.a.createElement(T.a.Control,{placeholder:"",value:this.state.serial,onChange:this.onFieldChange})),r.a.createElement(T.a.Group,{controlId:"cost-input"},r.a.createElement(T.a.Label,null,"Cost"),r.a.createElement(T.a.Control,{placeholder:"",value:this.state.cost,onChange:this.onFieldChange})),r.a.createElement(j.a,{variant:"primary",type:"submit",onClick:this.onAddItem},"Submit")))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onFieldChange=function(e){switch(e.target.id){case"name-input":a.setState({productName:e.target.value});break;case"manufacturer-input":a.setState({manufacturer:e.target.value});break;case"serial-input":a.setState({serial:e.target.value});break;case"cost-input":a.setState({cost:e.target.value});break;default:console.log("No known input")}},a.onEditSubmitItem=function(e){e.preventDefault();var t=a.props.match.params.id;y.a.post("/item/edit/".concat(t),{name:a.state.productName,nameLower:a.state.productName.toLowerCase(),manufacturer:a.state.manufacturer,serial:a.state.serial,cost:a.state.cost,imageUrl:"http://via.placeholder.com/1600x500",receiptImageUrl:"http://via.placeholder.com/500x100",serialImageUrl:"http://via.placeholder.com/360x640",thumbnailUrl:"http://via.placeholder.com/100x100"}).then(function(e){a.setState({redirectToMain:!0})}).catch(function(e){console.error("No BUENO!!!: ",e)})},a.state={productName:"",manufacturer:"",serial:"",cost:"",redirectToMain:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;y.a.get("/item/get/".concat(t)).then(function(t){var a=t.data.item;e.setState({productName:a.name,manufacturer:a.manufacturer,serial:a.serial,cost:a.cost})})}},{key:"render",value:function(){return this.state.redirectToMain?r.a.createElement(h.a,{exact:!0,to:"/"}):r.a.createElement(g.a,null,r.a.createElement(C.a,null,r.a.createElement(k.a,null,r.a.createElement(T.a,null,r.a.createElement(T.a.Group,{controlId:"name-input"},r.a.createElement(T.a.Label,null,"Product Name"),r.a.createElement(T.a.Control,{placeholder:"",value:this.state.productName,onChange:this.onFieldChange})),r.a.createElement(T.a.Group,{controlId:"manufacturer-input"},r.a.createElement(T.a.Label,null,"Manufacturer"),r.a.createElement(T.a.Control,{placeholder:"",value:this.state.manufacturer,onChange:this.onFieldChange})),r.a.createElement(T.a.Group,{controlId:"serial-input"},r.a.createElement(T.a.Label,null,"Serial"),r.a.createElement(T.a.Control,{placeholder:"",value:this.state.serial,onChange:this.onFieldChange})),r.a.createElement(T.a.Group,{controlId:"cost-input"},r.a.createElement(T.a.Label,null,"Cost"),r.a.createElement(T.a.Control,{placeholder:"",value:this.state.cost,onChange:this.onFieldChange})),r.a.createElement(j.a,{variant:"primary",type:"submit",onClick:this.onEditSubmitItem},"Submit"),r.a.createElement(o.b,{to:"/"},r.a.createElement(j.a,{variant:"danger",type:"submit"},"Cancel"))))))}}]),t}(n.Component),G=a(123),A=a(124),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match;console.log("Match is: ",e.params.id)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{fluid:!0},r.a.createElement(g.a,null,r.a.createElement("h1",null,"Item Name"),r.a.createElement(A.a,{src:"https://via.placeholder.com/768x320.png",fluid:!0}))),r.a.createElement(g.a,null,r.a.createElement(C.a,null,r.a.createElement(k.a,null))))}}]),t}(n.Component);p.b.add(E.b),p.b.add(E.a),p.b.add(E.d),p.b.add(E.c);var V=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:L}),r.a.createElement(h.b,{exact:!0,path:"/add",component:U}),r.a.createElement(h.b,{exact:!0,path:"/edit/:id",component:D}),r.a.createElement(h.b,{exact:!0,path:"/item/:id",component:B})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){e.exports=a(118)},75:function(e,t,a){},78:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.f64eeb30.chunk.js.map