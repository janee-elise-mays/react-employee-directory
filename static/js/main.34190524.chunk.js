(this.webpackJsonppracticeapp=this.webpackJsonppracticeapp||[]).push([[0],{44:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r(12),s=r.n(n),a=r(0);var i=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{children:"Employee Directory"}),Object(a.jsx)("p",{children:"Use the search bar to narrow your results."}),Object(a.jsx)("input",{type:"text",placeholder:"Search..",name:"search"})]})})},j=r(13),d=r(14),h=r(19),l=r(17);var o=function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{alt:e.firstName,src:e.picture})}),Object(a.jsxs)("td",{children:[e.firstName," ",e.lastName]}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.dob})]})},b=r(15),u=r.n(b),p=function(){return u.a.get("https://randomuser.me/api/?results=200&nat=us")},O=r(18),m=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(j.a)(this,r);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={employees:[],search:"",sort:[],sorted:!1},e.getEmployee=function(){p().then((function(t){e.setState({employees:t.data.results})}))},e.render=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsx)(O.a,{striped:!0,bordered:!0,hover:!0,children:Object(a.jsxs)("thread",{className:"thread",children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Image"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Phone"}),Object(a.jsx)("th",{children:"Date of Birth"})]}),Object(a.jsx)("tbody",{children:e.state.employees.map((function(e){return Object(a.jsx)(o,{firstName:e.name.first,lastName:e.name.last,phone:e.phone,email:e.email,picture:e.picture.large,dob:e.dob.date},e.login.uuid)}))})]})})})})},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.getEmployee()}}]),r}(c.Component);var x=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(i,{}),Object(a.jsx)(m,{})]})};r(43);s.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.34190524.chunk.js.map