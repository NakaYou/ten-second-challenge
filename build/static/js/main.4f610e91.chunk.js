(this["webpackJsonpten-second-challenge"]=this["webpackJsonpten-second-challenge"]||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(6),u=n.n(s),o=(n(3),n(2)),i=n(0),j=function(t){var e=t.onClickStart;return Object(i.jsxs)("div",{className:"scene",children:[Object(i.jsx)("h1",{children:"10\u79d2\u9023\u6253\u30c1\u30e3\u30ec\u30f3\u30b8"}),Object(i.jsxs)("p",{children:["\u30eb\u30fc\u30eb",Object(i.jsx)("br",{}),"10\u79d2\u4ee5\u5185\u306b\u305f\u304f\u3055\u3093\u9023\u6253\u3057\u308d\uff01"]}),Object(i.jsx)("input",{type:"submit",value:"START",className:"input",onClick:e})]})},a=function(t){var e=t.onCountOvered,n=Object(c.useState)(3),r=Object(o.a)(n,2),s=r[0],u=r[1];return Object(c.useEffect)((function(){0===s&&e()}),[s,e]),setTimeout((function(){return u(s-1)}),1e3),Object(i.jsx)("h1",{children:s})},b=function(t){var e=t.onCountOvered,n=Object(c.useState)(0),r=Object(o.a)(n,2),s=r[0],u=r[1],j=Object(c.useState)(10),a=Object(o.a)(j,2),b=a[0],l=a[1];return Object(c.useEffect)((function(){0===b&&e(s)})),setTimeout((function(){return l(b-1)}),1e3),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:b}),Object(i.jsx)("h2",{children:s}),Object(i.jsx)("input",{type:"button",value:"PUSH",className:"input",onClick:function(){return u(s+1)}})]})},l=n(5),O=n.n(l),h=n(7);function f(){return(f=Object(h.a)(O.a.mark((function t(e,n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({score:e})});case 2:fetch("http://localhost:3000",{credentials:"omit"}).then((function(t){return t.json()})).then((function(t){return n(t)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=function(t){var e=t.score,n=t.onClickRetry,r=Object(c.useState)([]),s=Object(o.a)(r,2),u=s[0],j=s[1];return Object(c.useEffect)((function(){!function(t,e){f.apply(this,arguments)}(e,j)}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h1",{children:["SCORE:",e]}),Object(i.jsx)("h1",{children:":RANKING:"}),u.map((function(t){return Object(i.jsx)("h1",{children:t})})),Object(i.jsx)("input",{type:"button",value:"RETRY",className:"input",onClick:n}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("a",{href:"https://github.com/NakaYou/ten-second-challenge",children:"\u30b3\u30fc\u30c9\u3060\u3088"})]})},p=function(){var t=Object(c.useState)(0),e=Object(o.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)("intro"),u=Object(o.a)(s,2),l=u[0],O=u[1];return Object(i.jsxs)(i.Fragment,{children:["intro"===l&&Object(i.jsx)(j,{onClickStart:function(){return O("countDown")}}),"countDown"===l&&Object(i.jsx)(a,{onCountOvered:function(){return O("play")}}),"play"===l&&Object(i.jsx)(b,{onCountOvered:function(t){O("result"),r(t)}}),"result"===l&&Object(i.jsx)(d,{score:n,onClickRetry:function(){return O("countDown")}})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,u=e.getTTFB;n(t),c(t),r(t),s(t),u(t)}))};u.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),x()},3:function(t,e,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.4f610e91.chunk.js.map