(this.webpackJsonpdiscord=this.webpackJsonpdiscord||[]).push([[0],{76:function(e,c,n){},77:function(e,c,n){},78:function(e,c,n){},82:function(e,c,n){},86:function(e,c,n){},87:function(e,c,n){},88:function(e,c,n){},89:function(e,c,n){},90:function(e,c,n){"use strict";n.r(c);var a=n(3),s=n(2),t=n.n(s),i=n(24),r=n.n(i),l=(n(76),n(77),n(36)),o=(n(78),n(44)),d=n.n(o),j=n(52),h=n.n(j),b=n(16),u=(n(82),n(27)),m=Object(u.b)({name:"app",initialState:{channelId:null,channelName:null},reducers:{setChannelInfo:function(e,c){e.channelId=c.payload.channelId,e.channelName=c.payload.channelName}}}),O=m.actions.setChannelInfo,x=function(e){return e.app.channelId},p=function(e){return e.app.channelName},f=m.reducer;var v=function(e){var c=e.id,n=e.channelName,s=Object(b.b)();return console.log(n),Object(a.jsx)("div",{className:"sidebarChannel",onClick:function(){s(O({channelId:c,channelName:n}))},children:Object(a.jsxs)("h4",{children:[Object(a.jsx)("span",{className:"sidebarChannel__hash ",children:"#"}),n]})})},g=n(53),_=n.n(g),N=n(55),I=n.n(N),S=n(54),C=n.n(S),w=n(106),y=n(56),k=n.n(y),D=n(57),z=n.n(D),H=n(58),B=n.n(H),E=Object(u.b)({name:"user",initialState:{user:null},reducers:{login:function(e,c){e.user=c.payload},logout:function(e){e.user=null}}}),A=E.actions,F=A.login,J=A.logout,L=function(e){return e.user.user},G=E.reducer,M=n(29),R=M.a.initializeApp({apiKey:"AIzaSyC7RDCgvmOu6fJU-uI-iFCt2kXw5L95tcA",authDomain:"discord-a428d.firebaseapp.com",projectId:"discord-a428d",storageBucket:"discord-a428d.appspot.com",messagingSenderId:"816529233785",appId:"1:816529233785:web:8f4de38f90a7f26ded81a8",measurementId:"G-XC4GCJ52CF"}).firestore(),T=M.a.auth(),U=new M.a.auth.GoogleAuthProvider,W=R;var P=function(){var e=Object(s.useState)([]),c=Object(l.a)(e,2),n=c[0],t=c[1];Object(s.useEffect)((function(){W.collection("channels").onSnapshot((function(e){t(e.docs.map((function(e){return{id:e.id,channel:e.data()}})))}))}),[]);var i=Object(b.c)(L);return Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsxs)("div",{className:"sidebar__top",children:[Object(a.jsx)("h3",{children:"Discord"}),Object(a.jsx)(d.a,{})]}),Object(a.jsxs)("div",{className:"sidebar__channels",children:[Object(a.jsxs)("div",{className:"sidebar__channelsHeader",children:[Object(a.jsxs)("div",{className:"sidebar__header",children:[Object(a.jsx)(d.a,{}),Object(a.jsx)("h4",{children:"Channels"})]}),Object(a.jsx)(h.a,{onClick:function(){var e=prompt("Enter Channel Name");e&&W.collection("channels").add({channelName:e})},className:"sidebar__addChannel"})]}),Object(a.jsx)("div",{className:"sidebar__channelList",children:n.map((function(e){var c=e.id,n=e.channel;return console.log(c),console.log(n.channelName),Object(a.jsx)(v,{id:c,channelName:n.channelName},c)}))})]}),Object(a.jsxs)("div",{className:"sidebar__voice",children:[Object(a.jsx)(_.a,{className:"sidebar__voiceIcon",fontSize:"large"}),Object(a.jsxs)("div",{className:"sidebar__voiceInfo",children:[Object(a.jsx)("h3",{children:"Voice Connected"}),Object(a.jsx)("p",{children:"Stream"})]}),Object(a.jsxs)("div",{className:"sidebar__voiceIcons",children:[Object(a.jsx)(C.a,{}),Object(a.jsx)(I.a,{})]})]}),Object(a.jsxs)("div",{className:"sidebar__profile",children:[Object(a.jsx)(w.a,{className:"avatar__photo",onClick:function(){T.signOut()},src:i.photo}),Object(a.jsxs)("div",{className:"sidebar__profileInfo",children:[Object(a.jsx)("h3",{children:i.name}),Object(a.jsxs)("p",{children:["#",i.uid.substring(0,5)]})]}),Object(a.jsxs)("div",{className:"sidebar__profileIcons",children:[Object(a.jsx)(k.a,{}),Object(a.jsx)(z.a,{}),Object(a.jsx)(B.a,{})]})]})]})},V=(n(86),n(59)),X=n.n(V),K=n(60),$=n.n(K),q=n(61),Q=n.n(q),Y=n(62),Z=n.n(Y),ee=n(63),ce=n.n(ee),ne=n(64),ae=n.n(ne);var se=function(e){var c=e.channelName;return Object(a.jsxs)("div",{className:"chatHeader",children:[Object(a.jsx)("div",{className:"chatHeader__left",children:Object(a.jsxs)("h3",{children:[Object(a.jsx)("span",{className:"chatHeader__hash",children:"#"}),c]})}),Object(a.jsxs)("div",{className:"chatHeader__right",children:[Object(a.jsx)(X.a,{}),Object(a.jsx)($.a,{}),Object(a.jsx)(Q.a,{}),Object(a.jsxs)("div",{className:"chatHeader__search",children:[Object(a.jsx)("input",{type:"text",placeholder:"Search"}),Object(a.jsx)(Z.a,{})]}),Object(a.jsx)(ce.a,{}),Object(a.jsx)(ae.a,{})]})]})},te=(n(87),n(65)),ie=n.n(te),re=n(66),le=n.n(re),oe=n(67),de=n.n(oe),je=n(68),he=n.n(je);n(88);var be=function(e){var c=e.user,n=e.message,s=e.timestamp;return console.log(new Date(s.toDate()).toUTCString()),Object(a.jsxs)("div",{className:"message",children:[Object(a.jsx)(w.a,{src:null===c||void 0===c?void 0:c.photo}),Object(a.jsxs)("div",{className:"message__info",children:[Object(a.jsxs)("h4",{children:[null===c||void 0===c?void 0:c.name,Object(a.jsx)("span",{className:"message__timestamp",children:new Date(null===s||void 0===s?void 0:s.toDate()).toLocaleString()})]}),Object(a.jsx)("p",{children:n})]})]})};var ue=function(){var e=Object(s.useState)(""),c=Object(l.a)(e,2),n=c[0],t=c[1],i=Object(s.useState)([]),r=Object(l.a)(i,2),o=r[0],d=r[1],j=Object(b.c)(L),h=Object(b.c)(p),u=Object(b.c)(x);return Object(s.useEffect)((function(){if(u){W.collection("channels").doc(u).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return d(e.docs.map((function(e){return e.data()})))})),console.log("Scrolling");var e=document.getElementById("scroll");e.scrollTop=e.scrollHeight}}),[u]),Object(a.jsxs)("div",{className:"chat",children:[Object(a.jsx)(se,{channelName:h}),Object(a.jsx)("div",{className:"chat__messages",id:"scroll",children:o.map((function(e){var c=e.message,n=e.user,s=e.timestamp;return Object(a.jsx)(be,{message:c,timestamp:s,user:n})}))}),Object(a.jsxs)("div",{className:"chat__input",children:[Object(a.jsx)(ie.a,{fontSize:"large"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{value:n,disabled:!u,onChange:function(e){return t(e.target.value)},placeholder:"Message #".concat(h)}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),W.collection("channels").doc(u).collection("messages").add({message:n,user:j,timestamp:M.a.firestore.FieldValue.serverTimestamp()}),t("")},className:"chat__inputButton",type:"submit",children:"Send Message"})]}),Object(a.jsxs)("div",{className:"chat__inputIcons",children:[Object(a.jsx)(le.a,{fontSize:"large"}),Object(a.jsx)(de.a,{fontSize:"large"}),Object(a.jsx)(he.a,{fontSize:"large"})]})]})]})},me=(n(89),n.p+"static/media/discord-logo-png-7634.2f8d7ce8.png"),Oe=n(105);var xe=function(){return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)("div",{className:"login__logo",children:Object(a.jsx)("img",{className:"image",src:me,alt:""})}),Object(a.jsx)(Oe.a,{onClick:function(){T.signInWithPopup(U).catch((function(e){return alert(e.message)}))},children:"Sign In"})]})};var pe=function(){var e=Object(b.b)();Object(s.useEffect)((function(){T.onAuthStateChanged((function(c){console.log("user is",c),e(c?F({uid:c.uid,photo:c.photoURL,name:c.displayName,email:c.email}):J())}))}),[e]);var c=Object(b.c)(L);return console.log("Redux",c),Object(a.jsx)("div",{className:"app",children:c?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P,{}),Object(a.jsx)(ue,{})]}):Object(a.jsx)(xe,{})})},fe=Object(u.a)({reducer:{user:G,app:f}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(t.a.StrictMode,{children:Object(a.jsx)(b.a,{store:fe,children:Object(a.jsx)(pe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[90,1,2]]]);
//# sourceMappingURL=main.e8391126.chunk.js.map