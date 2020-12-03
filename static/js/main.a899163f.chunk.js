(this["webpackJsonpnasa-events"]=this["webpackJsonpnasa-events"]||[]).push([[0],{40:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n.n(r),s=n(5),i=n.n(s),o=(n(40),n(7)),l=n.n(o),u=n(8),d=n(3),j=n(19),f=n.n(j),h=n(20),v=n.n(h),b=n(21),g=n.n(b),O=n(22),p=n.n(O),m=n(23),x=n.n(m),y=n(24),w=n.n(y),S=n(25),C=n.n(S),T=n(26),E=n.n(T),N=n(27),k=n.n(N),I=n(28),D=n.n(I),P=n(29),F=n.n(P),L=n(30),M=n.n(L),A=n(31),z=n.n(A),B=n(32),Y=n.n(B),J={wildfires:v.a,drought:x.a,dustHaze:w.a,earthquakes:C.a,floods:E.a,landslides:k.a,manmade:D.a,seaLakeIce:p.a,severeStorms:g.a,snow:F.a,tempExtremes:M.a,volcanoes:z.a,waterColor:Y.a},W={wildfires:"red",drought:"yellow",dustHaze:"brown",earthquakes:"black",floods:"blue",landslides:"brown",manmade:"black",seaLakeIce:"blue",severeStorms:"black",snow:"blue",tempExtremes:"red",volcanoes:"red",waterColor:"purple"},q=function(e){var t=e.event,n=e.showEventInfo;return Object(a.jsx)("div",{className:"pin",onClick:function(){return n(t)},children:Object(a.jsx)(f.a,{icon:J[t.category],width:"24px",color:W[t.category]})})},H=n(34),K=function(e){var t=e.events,n=e.showEventInfo,c=e.resetEvent,s=Object(r.useState)([36.22592,-35.97138]),i=Object(d.a)(s,2),o=i[0],l=i[1],u=Object(r.useState)([]),j=Object(d.a)(u,2),f=j[0],h=j[1];Object(r.useEffect)((function(){var e=t.filter((function(e){return e.geometry.some((function(e){return"Point"===e.type}))})).map((function(e){var t=e.geometry.sort((function(e,t){return new Date(t.date)-new Date(e.date)}))[0];return{id:e.id,description:e.description,title:e.title,lat:t.coordinates[1],lng:t.coordinates[0],date:t.date,category:e.categories[0].id}}));h(e),e.length>0&&l(function(e){var t=e.reduce((function(e,t){return[e[0]+t.lat,e[1]+t.lng]}),[0,0]);return[t[0]/e.length,t[1]/e.length]}(e))}),[t]);return Object(a.jsx)("div",{style:{width:"100vw",height:"85vh"},children:Object(a.jsx)(H.a,{bootstrapURLKeys:{key:"AIzaSyDSghDK0XWTOPMyvT2rvgPWycmNjfcnN7Y"},center:o,onClick:c,zoom:3,children:f.map((function(e){return Object(a.jsx)(q,{lat:e.lat,lng:e.lng,event:e,showEventInfo:n},e.id)}))})})},R=function(e){var t=e.event,n=t.title,r=t.description,c=t.date;return Object(a.jsxs)("div",{className:"card information-overlay",children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)("p",{children:new Date(c).toLocaleDateString()}),r&&Object(a.jsx)("p",{children:r})]})},_=function(e){var t=e.alert;return Object(a.jsx)("div",{className:"alert",children:Object(a.jsx)("div",{className:"card",children:t})})},G=function(e){var t=e.title,n=e.options,c=e.onChange,s=e.defaultOptionIndex,i=Object(r.useState)(!1),o=Object(d.a)(i,2),l=o[0],u=o[1],j=Object(r.useState)(null),f=Object(d.a)(j,2),h=f[0],v=f[1];Object(r.useEffect)((function(){n.length>s&&v(n[s])}),[JSON.stringify(n),n,s]);var b=9*n.reduce((function(e,t){return Math.max(e,t.title.length)}),Number.MIN_SAFE_INTEGER)+30;return Object(a.jsxs)("div",{className:"dropdown".concat(l?" open":""),style:{width:"".concat(b,"px")},tabIndex:"0",onBlur:function(){return u(!1)},children:[Object(a.jsxs)("div",{className:"dropdown-header",onClick:function(){return u(!l)},children:[Object(a.jsx)("div",{className:"dropdown-trigger",children:h?h.title:t}),Object(a.jsx)("div",{className:"dropdown-arrow"})]}),l&&Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsx)("li",{value:e.id,onClick:function(){return function(e){c(e),v(e),u(!1)}(e)},children:e.title},e.id)}))})]})};G.defaultProps={title:"Options",options:[],onChange:null,defaultOptionIndex:null};var U=G,V=function(e){var t=new Date,n=Math.floor(e.getTime()-t.getTime());return-Math.floor(n/864e5)},X=[{id:1,title:"Today",days:1},{id:2,title:"Last 7 days",days:7},{id:3,title:"Last 2 weeks",days:15}],Q=function(e){var t=e.categories,n=e.setSelectedCategory,c=e.setSelectedTimePeriod;return Object(r.useEffect)((function(){!function(){var e=new Date;X.push({title:"This month",days:V(new Date(e.getFullYear(),e.getMonth(),1)),id:4}),X.push({title:"This year",days:V(new Date(e.getFullYear(),0,1)),id:5})}()}),[]),Object(a.jsxs)("div",{className:"filters",children:[t&&t.length>0&&Object(a.jsx)(U,{title:"Category",options:t,defaultOptionIndex:10,onChange:n}),X&&5===X.length&&Object(a.jsx)(U,{title:"Time period",options:X,defaultOptionIndex:4,onChange:c})]})},Z=function(e){var t=e.categories,n=e.setSelectedCategory,r=e.setSelectedTimePeriod;return Object(a.jsxs)("header",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"NASA Events"}),Object(a.jsxs)("div",{className:"desc",children:["Developed by ",Object(a.jsx)("a",{href:"https://eunice.dev",children:"Eunice Beijinho"}),", powered by NASA."]})]}),Object(a.jsx)(Q,{categories:t,setSelectedCategory:n,setSelectedTimePeriod:r})]})},$=function(e){var t=e.categories,n=e.events,c=e.alert,s=e.setSelectedCategory,i=e.setSelectedTimePeriod,o=Object(r.useState)(null),l=Object(d.a)(o,2),u=l[0],j=l[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Z,{categories:t,setSelectedCategory:function(e){j(null),s(e)},setSelectedTimePeriod:function(e){j(null),i(e)}}),Object(a.jsx)(K,{events:n,showEventInfo:function(e){return j(e)},resetEvent:function(){return j(null)}}),u&&Object(a.jsx)(R,{event:u}),c&&Object(a.jsx)(_,{alert:c})]})};$.defaultProps={events:[],categories:[],setSelectedCategory:null,setSelectedTimePeriod:null,alert:null};var ee=$,te=n(9),ne=n.n(te),ae=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),i=Object(d.a)(s,2),o=i[0],j=i[1],f=Object(r.useState)({title:"Volcanoes",id:"volcanoes"}),h=Object(d.a)(f,2),v=h[0],b=h[1],g=new Date,O=Object(r.useState)({title:"This year",days:V(new Date(g.getFullYear(),0,1)),id:5}),p=Object(d.a)(O,2),m=p[0],x=p[1],y=Object(r.useState)(null),w=Object(d.a)(y,2),S=w[0],C=w[1],T=function(e){C(e),setTimeout((function(){C(null)}),2e3)};return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v?"https://eonet.sci.gsfc.nasa.gov/api/v3/categories/".concat(v.id):"https://eonet.sci.gsfc.nasa.gov/api/v3/events",t+=m?"?days="+m.days:"",e.next=4,ne.a.get(t);case 4:n=e.sent,a=n.data,c(a.events),0===a.events.length?T("We found no events. Try another category or time."):T("".concat(a.events.length," events found."));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v,m]),Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.a.get("https://eonet.sci.gsfc.nasa.gov/api/v3/categories");case 2:t=e.sent,n=t.data,j(n.categories);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)(ee,{events:n,categories:o,setSelectedCategory:function(e){return b(e)},setSelectedTimePeriod:function(e){return x(e)},alert:S})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ae,{})}),document.getElementById("root")),re()}},[[61,1,2]]]);
//# sourceMappingURL=main.a899163f.chunk.js.map