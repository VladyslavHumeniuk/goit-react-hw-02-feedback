(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,function(t,e,n){t.exports={section:"Section_section__1MhPX",title:"Section_title__yop4p"}},,,,,function(t,e,n){t.exports={btn:"FeedbackOptions_btn__1qw4y"}},function(t,e,n){t.exports={item:"StatisticsItem_item__31kRk",text:"StatisticsItem_text__3JFSa"}},function(t,e,n){t.exports={notification:"Notification_notification__18QI7"}},function(t,e,n){t.exports={title:"Statistics_title__1OFMA",list:"Statistics_list__qy5R_"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(5),s=n.n(i),o=(n(19),n(6)),r=n(7),l=n(8),u=n(2),b=n(14),d=n(13),j=n(4),x=n.n(j),h=n(0),f=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:x.a.section,children:[Object(h.jsx)("h1",{className:x.a.title,children:e}),n]})},O=n(9),v=n.n(O),p=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(h.jsx)("div",{children:Object.keys(e).map((function(t){return Object(h.jsx)("button",{className:v.a.btn,type:"button",onClick:function(){return n(t)},children:t},t)}))})},_=n(10),m=n.n(_),k=function(t){var e=t.itemText,n=t.value;return Object(h.jsx)("li",{className:"s.item",children:Object(h.jsxs)("p",{className:m.a.text,children:[e,": ",Object(h.jsx)("span",{children:n})]})})},g=n(11),F=n.n(g),T=function(){return Object(h.jsx)("p",{className:F.a.notification,children:"...There is no feedback"})},N=n(12),S=n.n(N),y=function(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,i=t.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:"s.title",children:"Statistics"}),a?Object(h.jsxs)("ul",{className:S.a.list,children:[Object(h.jsx)(k,{itemText:"Good",value:e}),Object(h.jsx)(k,{itemText:"Neutral",value:n}),Object(h.jsx)(k,{itemText:"Bad",value:c}),Object(h.jsx)(k,{itemText:"Total",value:a}),Object(h.jsx)(k,{itemText:"Positiv feedback",value:i?Math.round(i)+"%":"0%"})]}):Object(h.jsx)(T,{})]})},P=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.addFeedback=function(e){return t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=Object(u.a)(t),n=e.state,c=e.countTotalFeedback;return 100*n.good/c()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=this.addFeedback,n=this.countTotalFeedback,c=this.countPositiveFeedbackPercentage,a=this.state,i=a.good,s=a.neutral,o=a.bad,r=n(),l=c();return Object(h.jsxs)(f,{title:"Please leave feedback",children:[Object(h.jsx)(p,{options:t,onLeaveFeedback:e}),Object(h.jsx)(y,{good:i,neutral:s,bad:o,total:r,positivePercentage:l})]})}}]),n}(c.Component),w=P;s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.421b2a99.chunk.js.map