(this["webpackJsonpnasa-events"]=this["webpackJsonpnasa-events"]||[]).push([[0],{40:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n.n(r),s=n(5),o=n.n(s),i=(n(40),n(7)),l=n.n(i),d=n(8),u=n(3),j=n(19),f=n.n(j),h=n(20),g=n.n(h),v=n(21),b=n.n(v),O=n(22),p=n.n(O),m=n(23),x=n.n(m),y=n(24),w=n.n(y),S=n(25),T=n.n(S),C=n(26),E=n.n(C),N=n(27),k=n.n(N),I=n(28),D=n.n(I),P=n(29),F=n.n(P),L=n(30),M=n.n(L),A=n(31),B=n.n(A),H=n(32),Y=n.n(H),z={wildfires:g.a,drought:x.a,dustHaze:w.a,earthquakes:T.a,floods:E.a,landslides:k.a,manmade:D.a,seaLakeIce:p.a,severeStorms:b.a,snow:F.a,tempExtremes:M.a,volcanoes:B.a,waterColor:Y.a},J={wildfires:"red",drought:"yellow",dustHaze:"brown",earthquakes:"black",floods:"blue",landslides:"brown",manmade:"black",seaLakeIce:"blue",severeStorms:"black",snow:"blue",tempExtremes:"red",volcanoes:"red",waterColor:"purple"},W=function(e){var t=e.event,n=e.showEventInfo;return Object(a.jsx)("div",{className:"pin",onClick:function(){return n(t)},children:Object(a.jsx)(f.a,{icon:z[t.category],width:"24px",color:J[t.category]})})},q=n(34),K=function(e){var t=e.events,n=e.showEventInfo,c=e.resetEvent,s=Object(r.useState)([36.22592,-35.97138]),o=Object(u.a)(s,2),i=o[0],l=o[1],d=Object(r.useState)([]),j=Object(u.a)(d,2),f=j[0],h=j[1];console.log("Yupiie!"),Object(r.useEffect)((function(){var e=t.filter((function(e){return e.geometry.some((function(e){return"Point"===e.type}))})).map((function(e){var t=e.geometry.sort((function(e,t){return new Date(t.date)-new Date(e.date)}))[0];return{id:e.id,description:e.description,title:e.title,lat:t.coordinates[1],lng:t.coordinates[0],date:t.date,category:e.categories[0].id}}));h(e),e.length>0&&l(function(e){var t=e.reduce((function(e,t){return[e[0]+t.lat,e[1]+t.lng]}),[0,0]);return[t[0]/e.length,t[1]/e.length]}(e))}),[t]);var g=0;return document.getElementsByTagName("header").length>0&&(g=window.innerHeight-document.getElementsByTagName("header")[0].clientHeight+"px"),Object(a.jsx)("div",{style:{width:"100vw",height:g},children:Object(a.jsx)(q.a,{bootstrapURLKeys:{key:"AIzaSyDSghDK0XWTOPMyvT2rvgPWycmNjfcnN7Y",v:"3.30"},center:i,onClick:function(){console.log("Hey"),c()},zoom:3,children:f.map((function(e){return Object(a.jsx)(W,{lat:e.lat,lng:e.lng,event:e,showEventInfo:n},e.id)}))})})},R=function(e){var t=e.event,n=t.title,r=t.description,c=t.date;return console.log(n),Object(a.jsxs)("div",{className:"card information-overlay",children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)("p",{children:new Date(c).toLocaleDateString()}),r&&Object(a.jsx)("p",{children:r})]})},_=function(e){var t=e.alert;return Object(a.jsx)("div",{className:"alert",children:Object(a.jsx)("div",{className:"card",children:t})})},G=function(e){var t=e.title,n=e.options,c=e.onChange,s=e.defaultOptionIndex,o=Object(r.useState)(!1),i=Object(u.a)(o,2),l=i[0],d=i[1],j=Object(r.useState)(null),f=Object(u.a)(j,2),h=f[0],g=f[1];Object(r.useEffect)((function(){n.length>s&&g(n[s])}),[JSON.stringify(n),n,s]);var v=9*n.reduce((function(e,t){return Math.max(e,t.title.length)}),Number.MIN_SAFE_INTEGER)+30;return Object(a.jsxs)("div",{className:"dropdown".concat(l?" open":""),style:{width:"".concat(v,"px")},tabIndex:"0",onBlur:function(){return d(!1)},children:[Object(a.jsxs)("div",{className:"dropdown-header",onClick:function(){return d(!l)},children:[Object(a.jsx)("div",{className:"dropdown-trigger",children:h?h.title:t}),Object(a.jsx)("div",{className:"dropdown-arrow"})]}),l&&Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsx)("li",{value:e.id,onClick:function(){return function(e){c(e),g(e),d(!1)}(e)},children:e.title},e.id)}))})]})};G.defaultProps={title:"Options",options:[],onChange:null,defaultOptionIndex:null};var U=G,V=function(e){var t=new Date,n=Math.floor(e.getTime()-t.getTime());return-Math.floor(n/864e5)},X=[{id:1,title:"Today",days:1},{id:2,title:"Last 7 days",days:7},{id:3,title:"Last 2 weeks",days:15}],Q=function(e){var t=e.categories,n=e.setSelectedCategory,c=e.setSelectedTimePeriod;return Object(r.useEffect)((function(){!function(){var e=new Date;X.push({title:"This month",days:V(new Date(e.getFullYear(),e.getMonth(),1)),id:4}),X.push({title:"This year",days:V(new Date(e.getFullYear(),0,1)),id:5})}()}),[]),Object(a.jsxs)("div",{className:"filters",children:[t&&t.length>0&&Object(a.jsx)(U,{title:"Category",options:t,defaultOptionIndex:10,onChange:n}),X&&5===X.length&&Object(a.jsx)(U,{title:"Time period",options:X,defaultOptionIndex:4,onChange:c})]})},Z=function(e){var t=e.categories,n=e.setSelectedCategory,r=e.setSelectedTimePeriod;return Object(a.jsxs)("header",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"NASA Events"}),Object(a.jsxs)("div",{className:"desc",children:["Developed by ",Object(a.jsx)("a",{href:"https://eunice.dev",children:"Eunice Beijinho"}),", powered by NASA."]})]}),Object(a.jsx)(Q,{categories:t,setSelectedCategory:n,setSelectedTimePeriod:r})]})},$=function(e){var t=e.categories,n=e.events,c=e.alert,s=e.setSelectedCategory,o=e.setSelectedTimePeriod,i=Object(r.useState)(null),l=Object(u.a)(i,2),d=l[0],j=l[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Z,{categories:t,setSelectedCategory:function(e){j(null),s(e)},setSelectedTimePeriod:function(e){j(null),o(e)}}),Object(a.jsx)(K,{events:n,showEventInfo:function(e){return j(e)},resetEvent:function(){return j(null)}}),d&&Object(a.jsx)(R,{event:d}),c&&Object(a.jsx)(_,{alert:c})]})};$.defaultProps={events:[],categories:[],setSelectedCategory:null,setSelectedTimePeriod:null,alert:null};var ee=$,te=n(9),ne=n.n(te),ae=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),o=Object(u.a)(s,2),i=o[0],j=o[1],f=Object(r.useState)({title:"Volcanoes",id:"volcanoes"}),h=Object(u.a)(f,2),g=h[0],v=h[1],b=new Date,O=Object(r.useState)({title:"This year",days:V(new Date(b.getFullYear(),0,1)),id:5}),p=Object(u.a)(O,2),m=p[0],x=p[1],y=Object(r.useState)(null),w=Object(u.a)(y,2),S=w[0],T=w[1],C=function(e){T(e),setTimeout((function(){T(null)}),2e3)};return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g?"https://eonet.sci.gsfc.nasa.gov/api/v3/categories/".concat(g.id):"https://eonet.sci.gsfc.nasa.gov/api/v3/events",t+=m?"?days="+m.days:"",e.next=4,ne.a.get(t);case 4:n=e.sent,a=n.data,c(a.events),0===a.events.length?C("We found no events. Try another category or time."):C("".concat(a.events.length," events found."));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g,m]),Object(r.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.a.get("https://eonet.sci.gsfc.nasa.gov/api/v3/categories");case 2:t=e.sent,n=t.data,j(n.categories);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)(ee,{events:n,categories:i,setSelectedCategory:function(e){return v(e)},setSelectedTimePeriod:function(e){return x(e)},alert:S})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ae,{})}),document.getElementById("root")),re()}},[[61,1,2]]]);
//# sourceMappingURL=main.98662cd3.chunk.js.map