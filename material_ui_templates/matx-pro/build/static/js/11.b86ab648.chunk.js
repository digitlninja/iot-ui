(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[11],{1228:function(e,a,t){"use strict";var n=t(1),i=t.n(n).a.createContext();a.a=i},1234:function(e,a,t){"use strict";var n=t(1),i=t.n(n).a.createContext();a.a=i},1279:function(e,a,t){"use strict";var n=t(4),i=t(3),o=t(1),r=t.n(o),c=(t(0),t(7)),l=t(10),s=t(1234),d=r.a.forwardRef((function(e,a){var t=e.classes,o=e.className,l=e.component,d=void 0===l?"table":l,p=e.padding,u=void 0===p?"default":p,m=e.size,f=void 0===m?"medium":m,h=e.stickyHeader,g=void 0!==h&&h,v=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),b=r.a.useMemo((function(){return{padding:u,size:f,stickyHeader:g}}),[u,f,g]);return r.a.createElement(s.a.Provider,{value:b},r.a.createElement(d,Object(i.a)({ref:a,className:Object(c.default)(t.root,o,g&&t.stickyHeader)},v)))}));a.a=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(i.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},1280:function(e,a,t){"use strict";var n=t(3),i=t(4),o=t(1),r=t.n(o),c=(t(0),t(7)),l=t(10),s=t(1228),d={variant:"head"},p=r.a.forwardRef((function(e,a){var t=e.classes,o=e.className,l=e.component,p=void 0===l?"thead":l,u=Object(i.a)(e,["classes","className","component"]);return r.a.createElement(s.a.Provider,{value:d},r.a.createElement(p,Object(n.a)({className:Object(c.default)(t.root,o),ref:a},u)))}));a.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(p)},1281:function(e,a,t){"use strict";var n=t(3),i=t(4),o=t(1),r=t.n(o),c=(t(0),t(7)),l=t(10),s=t(1228),d=t(32),p=r.a.forwardRef((function(e,a){var t=e.classes,o=e.className,l=e.component,d=void 0===l?"tr":l,p=e.hover,u=void 0!==p&&p,m=e.selected,f=void 0!==m&&m,h=Object(i.a)(e,["classes","className","component","hover","selected"]),g=r.a.useContext(s.a);return r.a.createElement(d,Object(n.a)({ref:a,className:Object(c.default)(t.root,o,g&&{head:t.head,footer:t.footer}[g.variant],u&&t.hover,f&&t.selected)},h))}));a.a=Object(l.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected,&$selected:hover":{backgroundColor:Object(d.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(p)},1282:function(e,a,t){"use strict";var n=t(3),i=t(4),o=t(1),r=t.n(o),c=(t(0),t(7)),l=t(10),s=t(1228),d={variant:"body"},p=r.a.forwardRef((function(e,a){var t=e.classes,o=e.className,l=e.component,p=void 0===l?"tbody":l,u=Object(i.a)(e,["classes","className","component"]);return r.a.createElement(s.a.Provider,{value:d},r.a.createElement(p,Object(n.a)({className:Object(c.default)(t.root,o),ref:a},u)))}));a.a=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(p)},1291:function(e,a,t){"use strict";var n=t(4),i=t(3),o=t(1),r=t.n(o),c=(t(0),t(7)),l=t(10),s=t(14),d=t(32),p=t(1234),u=t(1228),m=r.a.forwardRef((function(e,a){var t,o=e.align,l=void 0===o?"inherit":o,d=e.classes,m=e.className,f=e.component,h=e.padding,g=e.scope,v=e.size,b=e.sortDirection,y=e.variant,x=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=r.a.useContext(p.a),j=r.a.useContext(u.a);t=f||(j&&"head"===j.variant?"th":"td");var N=g;!N&&j&&"head"===j.variant&&(N="col");var C=h||(O&&O.padding?O.padding:"default"),E=v||(O&&O.size?O.size:"medium"),k=y||j&&j.variant,w=null;return b&&(w="asc"===b?"ascending":"descending"),r.a.createElement(t,Object(i.a)({ref:a,className:Object(c.default)(d.root,d[k],m,"inherit"!==l&&d["align".concat(Object(s.a)(l))],"default"!==C&&d["padding".concat(Object(s.a)(C))],"medium"!==E&&d["size".concat(Object(s.a)(E))],{head:O&&O.stickyHeader&&d.stickyHeader}[k]),"aria-sort":w,scope:N},x))}));a.a=Object(l.a)((function(e){return{root:Object(i.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(d.i)(Object(d.d)(e.palette.divider,1),.88):Object(d.a)(Object(d.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},1358:function(e,a,t){"use strict";t.d(a,"c",(function(){return o})),t.d(a,"d",(function(){return r})),t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return l})),t.d(a,"e",(function(){return s}));var n=t(20),i=t.n(n),o=function(){return i.a.get("/api/invoices/all")},r=function(e){return i.a.get("/api/invoices",{data:e})},c=function(e){return i.a.post("/api/invoices/delete",e)},l=function(e){return i.a.post("/api/invoices/add",e)},s=function(e){return i.a.post("/api/invoices/update",e)}},1983:function(e,a,t){"use strict";t.r(a);var n=t(31),i=t(30),o=t(46),r=t(47),c=t(48),l=t(1),s=t.n(l),d=t(1197),p=t(1194),u=t(1279),m=t(1280),f=t(1281),h=t(1291),g=t(1282),v=t(1134),b=t(1200),y=t(1358),x=t(59),O=t(333),j=t(72),N=function(e){function a(){var e,t;Object(n.a)(this,a);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(c)))).state={invoiceList:[],shouldShowConfirmationDialog:!1},t.handeViewClick=function(e){t.props.history.push("/invoice/".concat(e))},t.handeDeleteClick=function(e){t.setState({shouldShowConfirmationDialog:!0,invoice:e})},t.handleConfirmationResponse=function(){var e=t.state.invoice;Object(y.b)(e).then((function(e){t.setState({invoiceList:e.data,shouldShowConfirmationDialog:!1})}))},t.handleDialogClose=function(){t.setState({shouldShowConfirmationDialog:!1})},t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(y.c)().then((function(a){return e.setState({invoiceList:a.data})}))}},{key:"render",value:function(){var e=this,a=this.state.invoiceList;return s.a.createElement("div",{className:"m-sm-30"},s.a.createElement(x.a,{to:"/invoice/add"},s.a.createElement(d.a,{className:"mb-4",variant:"contained",color:"primary"},"Add Invoice")),s.a.createElement(p.a,{elevation:6,className:"w-full overflow-auto"},s.a.createElement(u.a,{className:"min-w-3000"},s.a.createElement(m.a,null,s.a.createElement(f.a,null,s.a.createElement(h.a,{className:"pl-sm-24"},"Order No."),s.a.createElement(h.a,{className:"px-0"},"Bill From"),s.a.createElement(h.a,{className:"px-0"},"Bill To"),s.a.createElement(h.a,{className:"px-0"},"Status"),s.a.createElement(h.a,{className:"px-0"},"Actions"))),s.a.createElement(g.a,null,a.map((function(a,t){return s.a.createElement(f.a,{key:a.id},s.a.createElement(h.a,{className:"pl-sm-24 capitalize",align:"left"},a.orderNo),s.a.createElement(h.a,{className:"pl-0 capitalize",align:"left"},a.seller.name),s.a.createElement(h.a,{className:"pl-0 capitalize",align:"left"},a.buyer.name),s.a.createElement(h.a,{className:"pl-0 capitalize"},s.a.createElement("small",{className:Object(j.a)({"border-radius-4  text-white px-2 py-2px":!0,"bg-primary":"delivered"===a.status,"bg-secondary":"processing"===a.status,"bg-error":"pending"===a.status})},a.status)),s.a.createElement(h.a,{className:"pl-0"},s.a.createElement(v.a,{color:"primary",className:"mr-2",onClick:function(){return e.handeViewClick(a.id)}},s.a.createElement(b.a,null,"chevron_right")),s.a.createElement(v.a,{onClick:function(){return e.handeDeleteClick(a)}},s.a.createElement(b.a,{color:"error"},"delete"))))}))))),s.a.createElement(O.b,{open:this.state.shouldShowConfirmationDialog,onConfirmDialogClose:this.handleDialogClose,onYesClick:this.handleConfirmationResponse,text:"Are you sure to delete?"}))}}]),a}(l.Component);a.default=N}}]);