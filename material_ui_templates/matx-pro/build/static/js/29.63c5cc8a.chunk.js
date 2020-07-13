(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[29],{1228:function(e,a,t){"use strict";var c=t(1),n=t.n(c).a.createContext();a.a=n},1234:function(e,a,t){"use strict";var c=t(1),n=t.n(c).a.createContext();a.a=n},1279:function(e,a,t){"use strict";var c=t(4),n=t(3),i=t(1),s=t.n(i),r=(t(0),t(7)),l=t(10),o=t(1234),d=s.a.forwardRef((function(e,a){var t=e.classes,i=e.className,l=e.component,d=void 0===l?"table":l,p=e.padding,m=void 0===p?"default":p,u=e.size,g=void 0===u?"medium":u,f=e.stickyHeader,h=void 0!==f&&f,b=Object(c.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=s.a.useMemo((function(){return{padding:m,size:g,stickyHeader:h}}),[m,g,h]);return s.a.createElement(o.a.Provider,{value:v},s.a.createElement(d,Object(n.a)({ref:a,className:Object(r.default)(t.root,i,h&&t.stickyHeader)},b)))}));a.a=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},1280:function(e,a,t){"use strict";var c=t(3),n=t(4),i=t(1),s=t.n(i),r=(t(0),t(7)),l=t(10),o=t(1228),d={variant:"head"},p=s.a.forwardRef((function(e,a){var t=e.classes,i=e.className,l=e.component,p=void 0===l?"thead":l,m=Object(n.a)(e,["classes","className","component"]);return s.a.createElement(o.a.Provider,{value:d},s.a.createElement(p,Object(c.a)({className:Object(r.default)(t.root,i),ref:a},m)))}));a.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(p)},1281:function(e,a,t){"use strict";var c=t(3),n=t(4),i=t(1),s=t.n(i),r=(t(0),t(7)),l=t(10),o=t(1228),d=t(32),p=s.a.forwardRef((function(e,a){var t=e.classes,i=e.className,l=e.component,d=void 0===l?"tr":l,p=e.hover,m=void 0!==p&&p,u=e.selected,g=void 0!==u&&u,f=Object(n.a)(e,["classes","className","component","hover","selected"]),h=s.a.useContext(o.a);return s.a.createElement(d,Object(c.a)({ref:a,className:Object(r.default)(t.root,i,h&&{head:t.head,footer:t.footer}[h.variant],m&&t.hover,g&&t.selected)},f))}));a.a=Object(l.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected,&$selected:hover":{backgroundColor:Object(d.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(p)},1282:function(e,a,t){"use strict";var c=t(3),n=t(4),i=t(1),s=t.n(i),r=(t(0),t(7)),l=t(10),o=t(1228),d={variant:"body"},p=s.a.forwardRef((function(e,a){var t=e.classes,i=e.className,l=e.component,p=void 0===l?"tbody":l,m=Object(n.a)(e,["classes","className","component"]);return s.a.createElement(o.a.Provider,{value:d},s.a.createElement(p,Object(c.a)({className:Object(r.default)(t.root,i),ref:a},m)))}));a.a=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(p)},1291:function(e,a,t){"use strict";var c=t(4),n=t(3),i=t(1),s=t.n(i),r=(t(0),t(7)),l=t(10),o=t(14),d=t(32),p=t(1234),m=t(1228),u=s.a.forwardRef((function(e,a){var t,i=e.align,l=void 0===i?"inherit":i,d=e.classes,u=e.className,g=e.component,f=e.padding,h=e.scope,b=e.size,v=e.sortDirection,x=e.variant,y=Object(c.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),N=s.a.useContext(p.a),E=s.a.useContext(m.a);t=g||(E&&"head"===E.variant?"th":"td");var j=h;!j&&E&&"head"===E.variant&&(j="col");var w=f||(N&&N.padding?N.padding:"default"),O=b||(N&&N.size?N.size:"medium"),k=x||E&&E.variant,z=null;return v&&(z="asc"===v?"ascending":"descending"),s.a.createElement(t,Object(n.a)({ref:a,className:Object(r.default)(d.root,d[k],u,"inherit"!==l&&d["align".concat(Object(o.a)(l))],"default"!==w&&d["padding".concat(Object(o.a)(w))],"medium"!==O&&d["size".concat(Object(o.a)(O))],{head:N&&N.stickyHeader&&d.stickyHeader}[k]),"aria-sort":z,scope:j},y))}));a.a=Object(l.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(d.i)(Object(d.d)(e.palette.divider,1),.88):Object(d.a)(Object(d.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},1447:function(e,a){},1964:function(e,a,t){"use strict";t.r(a);var c=t(12),n=t(1),i=t.n(n),s=t(1435),r=t.n(s),l=t(1279),o=t(1280),d=t(1281),p=t(1291),m=t(1282),u=t(333),g=t(1292),f=t.n(g);a.default=function(){return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(u.a,{routeSegments:[{name:"Utilities",path:"/utilities"},{name:"Typography"}]})),i.a.createElement(u.r,{title:"typography"},i.a.createElement(l.a,null,i.a.createElement(o.a,null,i.a.createElement(d.a,{className:"bg-default"},i.a.createElement(p.a,{className:"px-0"},"Class Name"),i.a.createElement(p.a,{className:"px-0"},"Size"),i.a.createElement(p.a,{className:"px-0"},"Example"))),i.a.createElement(m.a,null,Object(c.a)(Array(7).keys()).slice(1).reverse().map((function(e,a){return i.a.createElement(d.a,{key:a},i.a.createElement(p.a,{className:"px-0"},"h",e),i.a.createElement(p.a,{className:"px-0 capitalize"}),i.a.createElement(p.a,{className:"px-0 capitalize"},r()("<h".concat(e,">h").concat(e,"</h").concat(e,">"))))})),i.a.createElement(d.a,null,i.a.createElement(p.a,{className:"px-0"},"text-small"),i.a.createElement(p.a,{className:"px-0 capitalize"},"0.8125rem"),i.a.createElement(p.a,{className:"px-0 capitalize"},i.a.createElement("span",{className:"text-small"},"text-small"))),[13,14,16,18,20,22,24,30,32].map((function(e,a){return i.a.createElement(d.a,{key:a},i.a.createElement(p.a,{className:"px-0"},"text-",e),i.a.createElement(p.a,{className:"px-0 capitalize"},e,"px"),i.a.createElement(p.a,{className:"px-0 capitalize"},r()('<span class="text-'.concat(e,'">text-').concat(e,"</span>"))))})))),i.a.createElement("div",{className:"py-2"}),[{className:".font-light",description:"font-weight: 300"},{className:".font-normal",description:"font-weight: normal"},{className:".font-medium",description:"font-weight: 500"},{className:".font-semibold",description:"font-weight: 600"},{className:".font-bold",description:"font-weight: 700"},{className:".capitalize",description:"Capitalize String"},{className:".uppercase",description:"UPPERCASE STRING"},{className:".lowercase",description:"lowercase string"},{className:".whitespace-pre",description:"white-space: pre"},{className:".whitespace-pre-wrap",description:"white-space: pre-wrap"},{className:".whitespace-no-wrap",description:"white-space: nowrap"}].map((function(e,a){return i.a.createElement("div",{key:a,className:"flex items-center flex-wrap justify-between"},i.a.createElement("code",null,e.className),i.a.createElement("div",{className:"highlight-js"},i.a.createElement(f.a,{className:"html"},'<div className="'.concat(e.className.replace(".",""),'">').concat(e.description,"</div>"))))}))))}}}]);