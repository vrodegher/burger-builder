(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__SlpSV",BreadTop:"BurgerIngredient_BreadTop__3nC6t",Seeds1:"BurgerIngredient_Seeds1__1OCUp",Seeds2:"BurgerIngredient_Seeds2__1oz0v",Meat:"BurgerIngredient_Meat__3qA7U",Cheese:"BurgerIngredient_Cheese__kubuF",Salad:"BurgerIngredient_Salad__28ne9",Bacon:"BurgerIngredient_Bacon__2wSQT"}},,,,,,function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__1bnqc",Label:"BuildControl_Label__Xbohw",Less:"BuildControl_Less__1-_y5",More:"BuildControl_More__3z2ce"}},,function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__YRHcZ",OrderButton:"BuildControls_OrderButton__yuGrW",enable:"BuildControls_enable__2_pX0"}},function(e,t,a){e.exports={Button:"Button_Button__mj9HT",Success:"Button_Success__2Mzc-",Danger:"Button_Danger__14yh9"}},,,function(e,t,a){e.exports={Content:"Layout_Content__OAg9t"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ASG4p"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__koS8X"}},function(e,t,a){e.exports={Burger:"Burger_Burger__ZpM9F"}},,function(e,t,a){e.exports={Modal:"Modal_Modal__2DKEr"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3OQMH"}},,function(e,t,a){e.exports=a(42)},,,,,,function(e,t,a){},,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(28),a(2)),i=a(3),s=a(5),u=a(4),d=a(6),m=function(e){return e.children},p=a(13),h=a.n(p),b=a(14),g=a.n(b),_=a(15),E=a.n(_),f=a(16),B=a.n(f),v=function(e){return r.a.createElement("div",{className:B.a.Logo},r.a.createElement("img",{src:E.a,alt:"MyBurger"}))},C=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement("div",null,"MENU"),r.a.createElement(v,null),r.a.createElement("nav",null,"..."))},y=function(e){return r.a.createElement(m,null,r.a.createElement(C,null),r.a.createElement("main",{className:h.a.Content},e.children))},k=a(8),O=a(21),N=a(17),S=a.n(N),j=a(1),w=a.n(j),M=a(18),T=a.n(M),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:w.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:w.a.BreadTop},r.a.createElement("div",{className:w.a.Seeds1}),r.a.createElement("div",{className:w.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:w.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:w.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:w.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:w.a.Bacon});break;default:e=null}return e}}]),t}(n.Component);x.PropTypes={type:T.a.string.isRequired};var H=x,I=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(O.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(H,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:S.a.Burger},r.a.createElement(H,{type:"bread-top"}),t,r.a.createElement(H,{type:"bread-bottom"}))},P=a(9),L=a.n(P),A=a(7),R=a.n(A),z=function(e){return r.a.createElement("div",{className:R.a.BuildControl},r.a.createElement("div",{className:R.a.Label},e.label),r.a.createElement("button",{className:R.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:R.a.More,onClick:e.added},"More"))},D=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Y=function(e){return r.a.createElement("div",{className:L.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2)," $")),D.map(function(t){return r.a.createElement(z,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:L.a.OrderButton,disabled:!e.purcheasable,onClick:e.ordered},"ORDER NOW "))},F=a(19),U=a.n(F),W=a(20),q=a.n(W),X=function(e){return e.show?r.a.createElement("div",{className:q.a.Backdrop,onClick:e.clicked}):null},$=function(e){return r.a.createElement(m,null,r.a.createElement(X,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:U.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},G=a(10),J=a.n(G),Q=function(e){return r.a.createElement("button",{className:[J.a.Button,J.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},Z=function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t],";")});return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"An amazing Burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2)," $")),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement(Q,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(Q,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},K={salad:.3,cheese:.4,meat:1.5,bacon:1},V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purcheasable:!1,purchasing:!1},a.addIngredientHanler=function(e){var t=a.state.ingredients[e]+1,n=Object(k.a)({},a.state.ingredients);n[e]=t;var r=K[e],l=a.state.totalPrice+r;a.setState({totalPrice:l,ingredients:n}),a.updatedPurchaseState(n)},a.removeIngredientHanler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(k.a)({},a.state.ingredients);r[e]=n;var l=K[e],c=a.state.totalPrice-l;a.setState({totalPrice:c,ingredients:r}),a.updatedPurchaseState(r)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){alert("You continue!")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"updatedPurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purcheasable:t>0})}},{key:"render",value:function(){var e=Object(k.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement($,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(Z,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),r.a.createElement(I,{ingredients:this.state.ingredients}),r.a.createElement(Y,{ingredientAdded:this.addIngredientHanler,ingredientRemoved:this.removeIngredientHanler,disabled:e,purcheasable:this.state.purcheasable,ordered:this.purchaseHandler,price:this.state.totalPrice}))}}]),t}(n.Component),ee=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null,r.a.createElement(V,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[22,2,1]]]);
//# sourceMappingURL=main.49240e07.chunk.js.map