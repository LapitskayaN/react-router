(this["webpackJsonpreact-router"]=this["webpackJsonpreact-router"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(16),i=c.n(a),s=(c(23),c(8)),o=c(2),j=(c(24),c(7)),l=c(0),d=function(){return Object(l.jsxs)("ul",{class:"navbar",children:[Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("li",{children:"Home"})}),Object(l.jsx)(j.b,{to:"/list",children:Object(l.jsx)("li",{children:"List"})}),Object(l.jsx)(j.b,{to:"/movie",children:Object(l.jsx)("li",{children:"Movie"})})]})},b=function(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("h3",{children:" Application"}),Object(l.jsx)("p",{children:"Information about planets STAR WARS"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:Object(l.jsx)("img",{src:"https://purepng.com/public/uploads/large/purepng.com-star-warsstar-warsspace-opera-franchisefilm-star-warswarsstar-17015278267449wbcm.png"})})]})},p=c(18),h=function(e){var t=e.name,c=e.climate,r=e.population,n=e.diameter,a=e.onClick;return Object(l.jsxs)("div",{className:"card",id:t,children:[Object(l.jsx)("h1",{children:t}),Object(l.jsxs)("p",{children:["climate :",c]}),Object(l.jsxs)("p",{children:[" diameter : ",n]}),Object(l.jsxs)("p",{children:[" population : ",r," "]}),Object(l.jsx)("button",{name:t,onClick:function(e){return a(e)},children:"Know more.."})]})},u={planets:[],randomMovie:{}},O=function(e){var t=Object(r.useState)(u),c=Object(p.a)(t,2),n=c[0],a=c[1];Object(r.useEffect)((function(){i()}),[]);var i=function(){fetch("http://swapi.dev/api/planets/").then((function(e){return e.json()})).then((function(e){return a(Object(s.a)(Object(s.a)({},n),{},{planets:e.results}))}))},o=function(t){var c=n.planets.find((function(e){return e.name==t.target.name}));a(Object(s.a)(Object(s.a)({},n),{},{randomMovie:c})),e.history.push({pathname:"/movie",state:{randomMovie:c}})};return Object(l.jsx)("div",{className:"cardList",children:n.planets&&n.planets.map((function(e){return Object(l.jsx)(h,{onClick:o,name:e.name,rotation_period:e.rotation_period,orbital_period:e.orbital_period,diameter:e.diameter,climate:e.climate,gravity:e.gravity,terrain:e.terrain,surface_water:e.surface_water,population:e.population,residents:e.residents})}))})},m=function(e){return Object(l.jsx)("div",{className:"card",children:e.location.state?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{children:["Name: ",e.location.state.randomMovie.name]}),Object(l.jsxs)("p",{children:["rotation_period : ",e.location.state.randomMovie.rotation_period]}),Object(l.jsxs)("p",{children:["orbital_period : ",e.location.state.randomMovie.orbital_period]}),Object(l.jsxs)("p",{children:["climate : ",e.location.state.randomMovie.climate]}),Object(l.jsxs)("p",{children:["gravity : ",e.location.state.randomMovie.gravity]}),Object(l.jsxs)("p",{children:["terrain : ",e.location.state.randomMovie.terrain]}),Object(l.jsxs)("p",{children:["surface_water : ",e.location.state.randomMovie.surface_water]}),Object(l.jsxs)("p",{children:["population : ",e.location.state.randomMovie.population]}),Object(l.jsx)("button",{children:Object(l.jsx)(j.b,{to:"list",children:"Go back"})})]}):Object(l.jsx)("h1",{children:"You havent add any movies yet..."})})},x=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("p",{children:"Wild Code School "}),Object(l.jsx)("p",{children:" workshop react route"}),Object(l.jsx)("p",{children:" by Natalia Lapitskaya"})]})};var v=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:"https://cdn.commonwealthclub.org/s3fs-public/styles/hero/public/2019-11/hero%20star%20wars.png?itok=waMDC-JL"}),Object(l.jsx)("h1",{children:"PLANETS"}),Object(l.jsx)(d,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",render:function(e){return Object(l.jsx)(b,Object(s.a)({},e))}}),Object(l.jsx)(o.a,{exact:!0,path:"/list",render:function(e){return Object(l.jsx)(O,Object(s.a)({},e))}}),Object(l.jsx)(o.a,{exact:!0,path:"/movie",render:function(e){return Object(l.jsx)(m,Object(s.a)({},e))}})]})]}),Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)(x,{})})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(j.a,{children:Object(l.jsx)(v,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ff7c106b.chunk.js.map