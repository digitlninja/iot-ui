(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[28],{1140:function(e,a,t){"use strict";t.r(a);var c=t(335);t.d(a,"default",(function(){return c.a}))},1231:function(e,a,t){"use strict";var c=t(545);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=n.default.memo(n.default.forwardRef((function(a,t){return n.default.createElement(r.default,(0,l.default)({ref:t},a),e)})));0;return t.muiName=r.default.muiName,t};var l=c(t(1236)),n=c(t(1)),r=c(t(1140))},1236:function(e,a){function t(){return e.exports=t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e},t.apply(this,arguments)}e.exports=t},1285:function(e,a,t){"use strict";var c=t(3),l=t(4),n=t(1),r=t.n(n),o=(t(0),t(7)),i=t(10),d=r.a.forwardRef((function(e,a){var t=e.classes,n=e.className,i=e.row,d=void 0!==i&&i,u=Object(l.a)(e,["classes","className","row"]);return r.a.createElement("div",Object(c.a)({className:Object(o.default)(t.root,n,d&&t.row),ref:a},u))}));a.a=Object(i.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(d)},1745:function(e,a,t){"use strict";var c=t(545);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=c(t(1)),n=(0,c(t(1231)).default)(l.default.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");a.default=n},1746:function(e,a,t){"use strict";var c=t(545);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=c(t(1)),n=(0,c(t(1231)).default)(l.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");a.default=n},1747:function(e,a,t){"use strict";var c=t(545);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=c(t(1)),n=(0,c(t(1231)).default)(l.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");a.default=n},1748:function(e,a,t){"use strict";var c=t(545);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=c(t(1)),n=(0,c(t(1231)).default)(l.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");a.default=n},2010:function(e,a,t){"use strict";t.r(a);var c=t(1),l=t.n(c),n=t(21),r=t(8),o=t(71),i=t(1223);function d(){var e=l.a.useState({checkedA:!0,checkedB:!0,checkedF:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1],d=function(e){return function(a){c(Object(r.a)({},t,Object(n.a)({},e,a.target.checked)))}};return l.a.createElement("div",null,l.a.createElement(i.a,{checked:t.checkedA,onChange:d("checkedA"),value:"checkedA",inputProps:{"aria-label":"primary checkbox"}}),l.a.createElement(i.a,{checked:t.checkedB,onChange:d("checkedB"),value:"checkedB",color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),l.a.createElement(i.a,{value:"checkedC",inputProps:{"aria-label":"uncontrolled-checkbox"}}),l.a.createElement(i.a,{disabled:!0,value:"checkedD",inputProps:{"aria-label":"disabled checkbox"}}),l.a.createElement(i.a,{disabled:!0,checked:!0,value:"checkedE",inputProps:{"aria-label":"disabled checked checkbox"}}),l.a.createElement(i.a,{checked:t.checkedF,onChange:d("checkedF"),value:"checkedF",indeterminate:!0,inputProps:{"aria-label":"indeterminate checkbox"}}),l.a.createElement(i.a,{defaultChecked:!0,color:"default",value:"checkedG",inputProps:{"aria-label":"checkbox with default color"}}))}var u=t(10),m=t(238),s=t(1285),h=t(1196),f=t(1747),E=t.n(f),b=t(1748),k=t.n(b),v=t(1746),p=t.n(v),g=t(1745),C=t.n(g),j=Object(u.a)({root:{color:m.a[400],"&$checked":{color:m.a[600]}},checked:{}})((function(e){return l.a.createElement(i.a,Object.assign({color:"default"},e))}));function y(){var e=l.a.useState({checkedA:!0,checkedB:!0,checkedF:!0,checkedG:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1],d=function(e){return function(a){c(Object(r.a)({},t,Object(n.a)({},e,a.target.checked)))}};return l.a.createElement(s.a,{row:!0},l.a.createElement(h.a,{control:l.a.createElement(i.a,{checked:t.checkedA,onChange:d("checkedA"),value:"checkedA"}),label:"Secondary"}),l.a.createElement(h.a,{control:l.a.createElement(i.a,{checked:t.checkedB,onChange:d("checkedB"),value:"checkedB",color:"primary"}),label:"Primary"}),l.a.createElement(h.a,{control:l.a.createElement(i.a,{value:"checkedC"}),label:"Uncontrolled"}),l.a.createElement(h.a,{disabled:!0,control:l.a.createElement(i.a,{value:"checkedD"}),label:"Disabled"}),l.a.createElement(h.a,{disabled:!0,control:l.a.createElement(i.a,{checked:!0,value:"checkedE"}),label:"Disabled"}),l.a.createElement(h.a,{control:l.a.createElement(i.a,{checked:t.checkedF,onChange:d("checkedF"),value:"checkedF",indeterminate:!0}),label:"Indeterminate"}),l.a.createElement(h.a,{control:l.a.createElement(j,{checked:t.checkedG,onChange:d("checkedG"),value:"checkedG"}),label:"Custom color"}),l.a.createElement(h.a,{control:l.a.createElement(i.a,{icon:l.a.createElement(C.a,null),checkedIcon:l.a.createElement(p.a,null),value:"checkedH"}),label:"Custom icon"}),l.a.createElement(h.a,{control:l.a.createElement(i.a,{icon:l.a.createElement(E.a,{fontSize:"small"}),checkedIcon:l.a.createElement(k.a,{fontSize:"small"}),value:"checkedI"}),label:"Custom size"}))}var O=t(1129),x=t(1131);var P=function(){var e=l.a.useState("female"),a=Object(o.a)(e,2),t=a[0],c=a[1];return l.a.createElement(O.a,{component:"fieldset"},l.a.createElement(x.a,{component:"legend"},"labelPlacement"),l.a.createElement(s.a,{"aria-label":"position",name:"position",value:t,onChange:function(e){c(e.target.value)},row:!0},l.a.createElement(h.a,{value:"top",control:l.a.createElement(i.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),l.a.createElement(h.a,{value:"start",control:l.a.createElement(i.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),l.a.createElement(h.a,{value:"bottom",control:l.a.createElement(i.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),l.a.createElement(h.a,{value:"end",control:l.a.createElement(i.a,{color:"primary"}),label:"End",labelPlacement:"end"})))},w=t(358),B=t(1132),N=Object(w.a)((function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(2)}}}));function F(){var e=N(),a=l.a.useState({gilad:!0,jason:!1,antoine:!1}),t=Object(o.a)(a,2),c=t[0],d=t[1],u=function(e){return function(a){d(Object(r.a)({},c,Object(n.a)({},e,a.target.checked)))}},m=c.gilad,f=c.jason,E=c.antoine,b=2!==[m,f,E].filter((function(e){return e})).length;return l.a.createElement("div",{className:e.root},l.a.createElement(O.a,{component:"fieldset",className:e.formControl},l.a.createElement(x.a,{component:"legend"},"Assign responsibility"),l.a.createElement(s.a,null,l.a.createElement(h.a,{control:l.a.createElement(i.a,{checked:m,onChange:u("gilad"),value:"gilad"}),label:"Gilad Gray"}),l.a.createElement(h.a,{control:l.a.createElement(i.a,{checked:f,onChange:u("jason"),value:"jason"}),label:"Jason Killian"}),l.a.createElement(h.a,{control:l.a.createElement(i.a,{checked:E,onChange:u("antoine"),value:"antoine"}),label:"Antoine Llorca"})),l.a.createElement(B.a,null,"Be careful")),l.a.createElement(O.a,{required:!0,error:b,component:"fieldset",className:e.formControl},l.a.createElement(x.a,{component:"legend"},"Pick two"),l.a.createElement(s.a,null,l.a.createElement(h.a,{control:l.a.createElement(i.a,{checked:m,onChange:u("gilad"),value:"gilad"}),label:"Gilad Gray"}),l.a.createElement(h.a,{control:l.a.createElement(i.a,{checked:f,onChange:u("jason"),value:"jason"}),label:"Jason Killian"}),l.a.createElement(h.a,{control:l.a.createElement(i.a,{checked:E,onChange:u("antoine"),value:"antoine"}),label:"Antoine Llorca"})),l.a.createElement(B.a,null,"You can display an error")))}var A=t(333);a.default=function(){return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(A.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Chckbox"}]})),l.a.createElement(A.r,{title:"simple checkbox"},l.a.createElement(d,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(A.r,{title:"Checkbox with Label"},l.a.createElement(y,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(A.r,{title:"Checkbox with Form Group"},l.a.createElement(F,null)),l.a.createElement("div",{className:"py-3"}),l.a.createElement(A.r,{title:"Checkbox with Different Label Placement"},l.a.createElement(P,null)))}}}]);