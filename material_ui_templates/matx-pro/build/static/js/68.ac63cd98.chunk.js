(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[68],{2025:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(333),c=t(71),m=t(1195),i=t(389),s=t(1941),o=t(1740),u=t(1938),d=t(1200),E=t(1197);function f(){var e=l.a.useState(0),a=Object(c.a)(e,2),t=a[0],n=a[1],r=["First Name","Last Name","Address"];return l.a.createElement("div",null,l.a.createElement(s.a,{activeStep:t,alternativeLabel:!0},r.map((function(e){return l.a.createElement(o.a,{key:e},l.a.createElement(u.a,null,e))}))),l.a.createElement("div",null,t===r.length?l.a.createElement("div",null,l.a.createElement("div",{className:"flex items-center mb-4"},l.a.createElement(d.a,null,"done")," ",l.a.createElement("span",{className:"ml-2"},"Done")),l.a.createElement(E.a,{variant:"contained",color:"secondary",onClick:function(){n(0)}},"Reset")):l.a.createElement("div",null,function(e){switch(e){case 0:return l.a.createElement("form",{noValidate:!0,autoComplete:"off"},l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(i.a,{className:"w-full",label:"First Name"})),l.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(i.a,{className:"w-full",label:"Middle Name"})),l.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(i.a,{className:"w-full",label:"Last Name"})),l.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(i.a,{className:"w-full",label:"Age"}))));case 1:return l.a.createElement(i.a,{label:"Company Name"});case 2:return l.a.createElement(i.a,{label:"Address"});default:return""}}(t),l.a.createElement("div",{className:"pt-6"},l.a.createElement(E.a,{variant:"contained",color:"secondary",disabled:0===t,onClick:function(){n((function(e){return e-1}))}},"Back"),l.a.createElement(E.a,{className:"ml-4",variant:"contained",color:"primary",onClick:function(){n((function(e){return e+1}))}},t===r.length-1?"Finish":"Next")))))}var p=t(1987),v=t(241),N=t(1133),b=t(358),g=Object(b.a)((function(e){return{root:{width:"90%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)}}}));function h(){var e=g(),a=l.a.useState(0),t=Object(c.a)(a,2),n=t[0],r=t[1],m=["Select campaign settings","Create an ad group","Create an ad"];function d(){r((function(e){return e+1}))}function f(){r((function(e){return e-1}))}return l.a.createElement("div",{className:e.root},l.a.createElement(s.a,{activeStep:n,orientation:"vertical"},m.map((function(a,t){return l.a.createElement(o.a,{key:a},l.a.createElement(u.a,null,a),l.a.createElement(p.a,null,l.a.createElement("div",null,function(e){switch(e){case 0:return l.a.createElement(i.a,{label:"First Name"});case 1:return l.a.createElement(i.a,{label:"Last Name"});case 2:return l.a.createElement(i.a,{label:"Address"});default:return""}}(t)),l.a.createElement("div",{className:e.actionsContainer},l.a.createElement("div",null,l.a.createElement(E.a,{disabled:0===n,onClick:f,className:e.button},"Back"),l.a.createElement(E.a,{variant:"contained",color:"primary",onClick:d,className:e.button},n===m.length-1?"Finish":"Next")))))}))),n===m.length&&l.a.createElement(v.a,{square:!0,elevation:0,className:e.resetContainer},l.a.createElement(N.a,null,"All steps completed - you're finished"),l.a.createElement(E.a,{variant:"outlined",color:"secondary",onClick:function(){r(0)},className:e.button},"Reset")))}a.default=function(){return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement(r.r,{title:"Horizontal Stepper"},l.a.createElement(f,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(r.r,{title:"Vertical Stepper"},l.a.createElement(h,null)))}}}]);