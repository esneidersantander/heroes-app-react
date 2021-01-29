(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{45:function(e,r,a){"use strict";a.r(r);var c=a(0),t=a(1),s=a(20),n=a.n(s),i=a(4),l=a(2),o=function(e){var r=e.history;return Object(c.jsxs)("div",{className:"container mt-5",children:[Object(c.jsx)("h1",{children:"Login"}),Object(c.jsx)("hr",{}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){r.replace("/")},children:"Login"})]})},h=a(8),d=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],j=function(e){var r=e.id,a=e.superhero,t=e.alter_ego,s=e.first_appearance,n=e.characters;return Object(c.jsx)("div",{className:"card ms-3 animate__animated animate__fadeIn",style:{maxWidth:540},children:Object(c.jsxs)("div",{className:"row no-gutters",children:[Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsx)("img",{src:"/heroes-app-react/assets/heroes/".concat(r,".jpg"),className:"card-img",alt:a})}),Object(c.jsx)("div",{className:"col-md-8",children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:a}),Object(c.jsx)("p",{className:"card-text",children:t}),t!==n&&Object(c.jsx)("p",{className:"card-text",children:n}),Object(c.jsx)("p",{className:"card-text",children:Object(c.jsx)("small",{className:"text-muted",children:s})}),Object(c.jsx)(i.b,{to:"./hero/".concat(r),children:"M\xe1s.."})]})})]})})},m=function(e){var r=e.publisher,a=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" is not a valid publisher.'));return d.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(c.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:a.map((function(e){return Object(c.jsx)(j,Object(h.a)({},e),e.id)}))})},b=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"DC screen"}),Object(c.jsx)("hr",{}),Object(c.jsx)(m,{publisher:"DC Comics"})]})},u=function(e){var r=e.history,a=Object(l.h)().heroeId,s=Object(t.useMemo)((function(){return e=a,d.find((function(r){return r.id===e}));var e}),[a]);if(!s)return Object(c.jsx)(l.a,{to:"/"});var n=s.superhero,i=s.publisher,o=s.alter_ego,h=s.first_appearance,j=s.characters;return Object(c.jsxs)("div",{className:"row mt-5",children:[Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)("img",{src:"/heroes-app-react/assets/heroes/".concat(a,".jpg"),alt:n,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(c.jsxs)("div",{className:"col-8 animate__animated animate__fadeIn",children:[Object(c.jsx)("h3",{children:n}),Object(c.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("b",{children:"Alter ego: "})," ",o]}),Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("b",{children:"Publisher: "})," ",i]}),Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("b",{children:"First Appearance: "})," ",h]})]}),Object(c.jsx)("h5",{children:"Characters"}),Object(c.jsx)("p",{children:j}),Object(c.jsx)("button",{className:"btn btn-info",onClick:function(){r.length<=2?r.push("/"):r.goBack()},children:"Back.."})]})]})},p=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"MarvelScreen"}),Object(c.jsx)("hr",{}),Object(c.jsx)(m,{publisher:"Marvel Comics"})]})},v=a(12),x=a(22),O=a.n(x),f=a(11),C=function(e){var r=e.history,a=Object(l.g)(),s=O.a.parse(a.search).q,n=void 0===s?"":s,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(t.useState)(e),a=Object(v.a)(r,2),c=a[0],s=a[1];return[c,function(e){var r=e.target;s(Object(h.a)(Object(h.a)({},c),{},Object(f.a)({},r.name,r.value)))},function(){s(e)}]}({searchText:n}),o=Object(v.a)(i,2),m=o[0],b=o[1],u=m.searchText,p=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),d.filter((function(r){return r.superhero.toLocaleLowerCase().includes(e)})))}(n)}),[n]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Search Screen"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-5",children:[Object(c.jsx)("h4",{children:"Search Form"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push("?q=".concat(u))},children:[Object(c.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchText",autoComplete:"off",value:u,onChange:b}),Object(c.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Search..."})]})]}),Object(c.jsxs)("div",{className:"col-7",children:[Object(c.jsx)("h4",{children:"Results"}),Object(c.jsx)("hr",{}),""===n&&Object(c.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==n&&0===p.length&&Object(c.jsxs)("div",{className:"alert alert-danger",children:["There is not a hero with ",n]}),p.map((function(e){return Object(c.jsx)(j,Object(h.a)({},e),e.id)}))]})]})]})},_=function(){return Object(c.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(c.jsx)(i.b,{className:"navbar-brand",to:"/",children:"HeroesApp"}),Object(c.jsx)("div",{className:"navbar-collapse",children:Object(c.jsxs)("div",{className:"navbar-nav",children:[Object(c.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(c.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(c.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(c.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(c.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(c.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login",children:"Logout"})})})]})},g=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(_,{}),Object(c.jsx)("div",{className:"container mt-2",children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"/marvel",component:p}),Object(c.jsx)(l.b,{exact:!0,path:"/dc",component:b}),Object(c.jsx)(l.b,{exact:!0,path:"/hero/:heroeId",component:u}),Object(c.jsx)(l.b,{to:"/search",component:C}),Object(c.jsx)(l.a,{to:"/marvel"})]})})]})},N=function(){return Object(c.jsx)(i.a,{children:Object(c.jsx)("div",{children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"/login",component:o}),Object(c.jsx)(l.b,{path:"/",component:g})]})})})},y=function(){return Object(c.jsx)(N,{})};n.a.render(Object(c.jsx)(y,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.6b6d1cb3.chunk.js.map