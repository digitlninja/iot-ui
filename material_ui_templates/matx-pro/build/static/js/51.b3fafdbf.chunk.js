(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[51],{1285:function(e,a,t){"use strict";var c=t(3),r=t(4),l=t(1),n=t.n(l),o=(t(0),t(7)),i=t(10),d=n.a.forwardRef((function(e,a){var t=e.classes,l=e.className,i=e.row,d=void 0!==i&&i,s=Object(r.a)(e,["classes","className","row"]);return n.a.createElement("div",Object(c.a)({className:Object(o.default)(t.root,l,d&&t.row),ref:a},s))}));a.a=Object(i.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(d)},1453:function(e,a,t){"use strict";var c=t(3),r=t(4),l=t(1),n=t.n(l),o=(t(0),t(7)),i=t(10),d=t(32),s=t(14),m=t(339),h=n.a.forwardRef((function(e,a){var t=e.classes,l=e.className,i=e.color,d=void 0===i?"secondary":i,h=e.edge,b=void 0!==h&&h,u=e.size,p=void 0===u?"medium":u,k=Object(r.a)(e,["classes","className","color","edge","size"]),g=n.a.createElement("span",{className:t.thumb});return n.a.createElement("span",{className:Object(o.default)(t.root,l,{start:t.edgeStart,end:t.edgeEnd}[b],{small:t["size".concat(Object(s.a)(p))]}[p])},n.a.createElement(m.a,Object(c.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(o.default)(t.switchBase,t["color".concat(Object(s.a)(d))]),input:t.input,checked:t.checked,disabled:t.disabled},ref:a},k)),n.a.createElement("span",{className:t.track}))}));a.a=Object(i.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle"},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(h)},2002:function(e,a,t){"use strict";t.r(a);var c=t(1),r=t.n(c),l=t(21),n=t(8),o=t(71),i=t(1453);function d(){var e=r.a.useState({checkedA:!0,checkedB:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1],d=function(e){return function(a){c(Object(n.a)({},t,Object(l.a)({},e,a.target.checked)))}};return r.a.createElement("div",null,r.a.createElement(i.a,{checked:t.checkedA,onChange:d("checkedA"),value:"checkedA",inputProps:{"aria-label":"secondary checkbox"}}),r.a.createElement(i.a,{checked:t.checkedB,onChange:d("checkedB"),value:"checkedB",color:"primary",inputProps:{"aria-label":"primary checkbox"}}),r.a.createElement(i.a,{value:"checkedC",inputProps:{"aria-label":"primary checkbox"}}),r.a.createElement(i.a,{disabled:!0,value:"checkedD",inputProps:{"aria-label":"disabled checkbox"}}),r.a.createElement(i.a,{disabled:!0,checked:!0,value:"checkedE",inputProps:{"aria-label":"primary checkbox"}}),r.a.createElement(i.a,{defaultChecked:!0,value:"checkedF",color:"default",inputProps:{"aria-label":"checkbox with default color"}}))}var s=t(1285),m=t(1196);function h(){var e=r.a.useState({checkedA:!0,checkedB:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1],d=function(e){return function(a){c(Object(n.a)({},t,Object(l.a)({},e,a.target.checked)))}};return r.a.createElement(s.a,{row:!0},r.a.createElement(m.a,{control:r.a.createElement(i.a,{checked:t.checkedA,onChange:d("checkedA"),value:"checkedA"}),label:"Secondary"}),r.a.createElement(m.a,{control:r.a.createElement(i.a,{checked:t.checkedB,onChange:d("checkedB"),value:"checkedB",color:"primary"}),label:"Primary"}),r.a.createElement(m.a,{control:r.a.createElement(i.a,{value:"checkedC"}),label:"Uncontrolled"}),r.a.createElement(m.a,{disabled:!0,control:r.a.createElement(i.a,{value:"checkedD"}),label:"Disabled"}),r.a.createElement(m.a,{disabled:!0,control:r.a.createElement(i.a,{checked:!0,value:"checkedE"}),label:"Disabled"}))}var b=t(1131),u=t(1129),p=t(1132);function k(){var e=r.a.useState({gilad:!0,jason:!1,antoine:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1],d=function(e){return function(a){c(Object(n.a)({},t,Object(l.a)({},e,a.target.checked)))}};return r.a.createElement(u.a,{component:"fieldset"},r.a.createElement(b.a,{component:"legend"},"Assign responsibility"),r.a.createElement(s.a,null,r.a.createElement(m.a,{control:r.a.createElement(i.a,{checked:t.gilad,onChange:d("gilad"),value:"gilad"}),label:"Gilad Gray"}),r.a.createElement(m.a,{control:r.a.createElement(i.a,{checked:t.jason,onChange:d("jason"),value:"jason"}),label:"Jason Killian"}),r.a.createElement(m.a,{control:r.a.createElement(i.a,{checked:t.antoine,onChange:d("antoine"),value:"antoine"}),label:"Antoine Llorca"})),r.a.createElement(p.a,null,"Be careful"))}var g=t(4),E=t(10),f={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},y=t(1195),v=t(1133),w=Object(E.a)({switchBase:{color:f[300],"&$checked":{color:f[500]},"&$checked + $track":{backgroundColor:f[500]}},checked:{},track:{}})(i.a),C=Object(E.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var a=e.classes,t=Object(g.a)(e,["classes"]);return r.a.createElement(i.a,Object.assign({focusVisibleClassName:a.focusVisible,disableRipple:!0,classes:{root:a.root,switchBase:a.switchBase,thumb:a.thumb,track:a.track,checked:a.checked}},t))})),O=Object(E.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.grey[500],"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(i.a);function j(){var e=r.a.useState({checkedA:!0,checkedB:!0,checkedC:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1],i=function(e){return function(a){c(Object(n.a)({},t,Object(l.a)({},e,a.target.checked)))}};return r.a.createElement(s.a,null,r.a.createElement(m.a,{control:r.a.createElement(w,{checked:t.checkedA,onChange:i("checkedA"),value:"checkedA"}),label:"Custom color"}),r.a.createElement(m.a,{control:r.a.createElement(C,{checked:t.checkedB,onChange:i("checkedB"),value:"checkedB"}),label:"iOS style"}),r.a.createElement(v.a,{component:"div"},r.a.createElement(y.a,{component:"label",container:!0,alignItems:"center",spacing:1},r.a.createElement(y.a,{item:!0},"Off"),r.a.createElement(y.a,{item:!0},r.a.createElement(O,{checked:t.checkedC,onChange:i("checkedC"),value:"checkedC"})),r.a.createElement(y.a,{item:!0},"On"))))}var x=function(){var e=r.a.useState("female"),a=Object(o.a)(e,2),t=a[0],c=a[1];return r.a.createElement(u.a,{component:"fieldset"},r.a.createElement(b.a,{component:"legend"},"labelPlacement"),r.a.createElement(s.a,{"aria-label":"position",name:"position",value:t,onChange:function(e){c(e.target.value)},row:!0},r.a.createElement(m.a,{value:"top",control:r.a.createElement(i.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),r.a.createElement(m.a,{value:"start",control:r.a.createElement(i.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),r.a.createElement(m.a,{value:"bottom",control:r.a.createElement(i.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),r.a.createElement(m.a,{value:"end",control:r.a.createElement(i.a,{color:"primary"}),label:"End",labelPlacement:"end"})))},$=t(333);a.default=function(){return r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement($.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Switch"}]})),r.a.createElement($.r,{title:"Simple Switch"},r.a.createElement(d,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement($.r,{title:"Switch with Label"},r.a.createElement(h,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement($.r,{title:"Switch with Form Group"},r.a.createElement(k,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement($.r,{title:"Customized Switch"},r.a.createElement(j,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement($.r,{title:"Switch with Different Label Placement"},r.a.createElement(x,null)))}}}]);