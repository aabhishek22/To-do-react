(this.webpackJsonpavatar_project=this.webpackJsonpavatar_project||[]).push([[0],{14:function(e,t,a){e.exports=a(28)},19:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),i=a.n(c),o=(a(19),a(11)),s=a(8),l=a(9),u=a(13),m=a(12),d=(a(20),a(21),a(22),a(6)),p=a(10),f=a(4),v=function(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text}),r.a.createElement("span",null,r.a.createElement(d.a,{className:"faicons",icon:f.a,onClick:function(a){return e.setUpdate(a.target.value,t.key)}}),r.a.createElement(d.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return r.a.createElement("div",null,r.a.createElement(p.a,{duration:200,easing:"ease-in-out"},t))};a(3).b.add(f.b);var h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState({currentItem:{text:e.target.value,key:Date.now()}})},n.addItem=function(e){e.preventDefault();var t=n.state.currentItem;if(""!==t.text){var a=[].concat(Object(o.a)(n.state.items),[t]);n.setState({items:a,currentItem:{text:"",key:""}})}},n.deleteItem=function(e){var t=n.state.items.filter((function(t){return t.key!==e}));n.setState({items:t})},n.setUpdate=function(e,t){var a=n.state.items;a.map((function(a){a.key===t&&(a.text=e)})),n.setState({items:a})},n.state={items:[],currentItem:{text:"",key:""}},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"enter text ",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement(v,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.50c78288.chunk.js.map