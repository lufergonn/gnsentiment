(this["webpackJsonpcovid-d"]=this["webpackJsonpcovid-d"]||[]).push([[0],{120:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var c=n(6),o=n(0),r=n.n(o),i=n(18),a=n.n(i),s=n(25),l=(n(119),n(120),n(253)),u=n(254),d=n(252),j=n(251);var p=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)(!0),a=Object(s.a)(i,2),p=a[0],g=a[1],b=Object(o.useState)({error:!1,latitude:0,longitude:0}),O=Object(s.a)(b,2),h=O[0],v=O[1],x=Object(o.useState)(!1),f=Object(s.a)(x,2),m=f[0],I=f[1],S={enableHighAccurecy:!0,timeout:1e3,maxiumAge:0},w=function(e){var t=e.coords.latitude,n=e.coords.longitude;v({error:!1,latitude:t,longitude:n}),I(!0)},y=function(){v({error:!0,latitude:0,longitude:0}),I(!1)};return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(u.a,{showIcon:!0,type:"info",title:"INSP",description:"Mensaje"}),p?null:Object(c.jsx)(u.a,{showIcon:!0,type:"error",description:"Geolocalizaci\xf3n no soportada por el navegador"}),m?Object(c.jsx)(u.a,{showIcon:!0,type:"success",description:"Informaci\xf3n enviada correctamente"}):null,h.error?Object(c.jsx)(u.a,{showIcon:!0,type:"error",description:"Error al intentar acceder a la ubicaci\xf3n"}):null,Object(c.jsx)("center",{children:Object(c.jsx)("img",{src:"https://encuestas.insp.mx/images/logo_insp.png",alt:"Logo INSP"})}),Object(c.jsx)(d.a,{onChange:function(e,t,n){r(t)},children:"Acepto enviar este tipo de informaci\xf3n"}),Object(c.jsx)("center",{children:Object(c.jsx)(j.a,{onClick:function(){n?navigator.geolocation?(navigator.geolocation.getCurrentPosition(w,y,S),h.error||console.log(h)):g(!1):l.a.warning("Seleccione aceptar")},appearance:"primary",children:"Enviar"})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,255)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),g()}},[[248,1,2]]]);
//# sourceMappingURL=main.e2a0c641.chunk.js.map