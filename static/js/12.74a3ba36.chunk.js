(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[12],{610:function(e,t,a){"use strict";var n=a(7),c=a(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},r=a(43),i=function(e,t){return c.createElement(r.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:o}))};i.displayName="SearchOutlined";t.a=c.forwardRef(i)},637:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n,c,o,r,i=a(0),s=["title","titleId"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}function p(e,t){var a=e.title,p=e.titleId,u=d(e,s);return i.createElement("svg",l({width:50,height:50,viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":p},u),a?i.createElement("title",{id:p},a):null,n||(n=i.createElement("circle",{cx:25,cy:25,r:25,fill:"url(#paint0_linear_1360_2)"})),c||(c=i.createElement("rect",{x:13,y:22.4286,width:24,height:3.42857,rx:1.71429,fill:"#261D38"})),o||(o=i.createElement("rect",{x:26.7148,y:13,width:24,height:3.42857,rx:1.71429,transform:"rotate(90 26.7148 13)",fill:"#261D38"})),r||(r=i.createElement("defs",null,i.createElement("linearGradient",{id:"paint0_linear_1360_2",x1:25,y1:0,x2:25,y2:50,gradientUnits:"userSpaceOnUse"},i.createElement("stop",{stopColor:"#83CF8E"}),i.createElement("stop",{offset:1,stopColor:"#6960FE"})))))}var u=i.forwardRef(p);a.p},638:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(4),c=a(5),o=a(9),r=a(10),i=a(0),s=a.n(i),l=a(32),d=a.n(l),p=a(835),u=a(589),f=(a(639),a(14)),j=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.pairInfo,a=void 0===t?{}:t,n=e.allTokenMap,c=void 0===n?{}:n,o=a.address,r=a.balance,i=a.token0Deposited,s=a.token1Deposited,l=a.token0,j=void 0===l?{}:l,b=a.token1,h=void 0===b?{}:b,k=a.shareOfPoolPercent,m=c[j.address]||{},O=c[h.address]||{};return o?r.eq(0)?Object(f.jsx)(f.Fragment,{}):Object(f.jsxs)("div",{className:"pancakeswap-pair-info-extend",children:[Object(f.jsx)("div",{className:"pancakeswap-pair-info-row yellow",children:d.a.get("swap.wallet")}),Object(f.jsxs)("div",{className:"pancakeswap-pair-info-row",children:[Object(f.jsxs)("div",{className:"pancakeswap-pair-info",children:[Object(f.jsxs)("div",{className:"pancakeswap-pair-info-icon",children:[m.image?Object(f.jsx)("img",{src:m.image,alt:""}):Object(f.jsx)("img",{src:u.default,alt:""}),O.image?Object(f.jsx)("img",{src:O.image,alt:""}):Object(f.jsx)("img",{src:u.default,alt:""})]}),Object(f.jsxs)("div",{children:[m.symbol," / ",O.symbol]}),Object(f.jsx)("div",{className:"pancakeswap-pair-info-copy",children:Object(f.jsx)(p.a.Paragraph,{copyable:{text:a.address}})})]}),Object(f.jsx)("div",{className:"pancakeswap-pair-info-balance",children:Object(f.jsx)("div",{children:r._toSignificant()})})]}),Object(f.jsxs)("div",{className:"pancakeswap-pair-info-row",children:[Object(f.jsx)("div",{className:"pancakeswap-pair-info",children:Object(f.jsx)("div",{children:d.a.get("swap.pooledToken",{token:m.symbol})})}),Object(f.jsxs)("div",{className:"pancakeswap-pair-info-balance",children:[Object(f.jsx)("div",{children:i._toSignificant()}),Object(f.jsx)("div",{className:"pancakeswap-pair-info-icon right",children:m.image?Object(f.jsx)("img",{src:m.image,alt:""}):Object(f.jsx)("img",{src:u.default,alt:""})})]})]}),Object(f.jsxs)("div",{className:"pancakeswap-pair-info-row",children:[Object(f.jsx)("div",{className:"pancakeswap-pair-info",children:Object(f.jsx)("div",{children:d.a.get("swap.pooledToken",{token:O.symbol})})}),Object(f.jsxs)("div",{className:"pancakeswap-pair-info-balance",children:[Object(f.jsx)("div",{children:s._toSignificant()}),Object(f.jsx)("div",{className:"pancakeswap-pair-info-icon right",children:O.image?Object(f.jsx)("img",{src:O.image,alt:""}):Object(f.jsx)("img",{src:u.default,alt:""})})]})]}),Object(f.jsxs)("div",{className:"pancakeswap-pair-info-row",children:[Object(f.jsx)("div",{className:"pancakeswap-pair-info",children:Object(f.jsx)("div",{children:d.a.get("swap.shareOfPool")})}),Object(f.jsx)("div",{className:"pancakeswap-pair-info-balance",children:Object(f.jsx)("div",{children:k})})]})]}):Object(f.jsx)(f.Fragment,{})}}]),a}(s.a.Component)},639:function(e,t,a){},640:function(e,t,a){"use strict";var n=a(11),c=a(17),o=a(0),r=a(16),i=a(55),s=a(30),l=a.n(s),d=a(587),p=a(162),u=o.forwardRef((function(e,t){var a,n=e.prefixCls,s=void 0===n?"rc-switch":n,u=e.className,f=e.checked,j=e.defaultChecked,b=e.disabled,h=e.loadingIcon,k=e.checkedChildren,m=e.unCheckedChildren,O=e.onClick,v=e.onChange,g=e.onKeyDown,x=Object(i.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),w=Object(d.a)(!1,{value:f,defaultValue:j}),y=Object(r.a)(w,2),C=y[0],I=y[1];function S(e,t){var a=C;return b||(I(a=e),null===v||void 0===v||v(a,t)),a}var N=l()(s,u,(a={},Object(c.a)(a,"".concat(s,"-checked"),C),Object(c.a)(a,"".concat(s,"-disabled"),b),a));return o.createElement("button",Object.assign({},x,{type:"button",role:"switch","aria-checked":C,disabled:b,className:N,ref:t,onKeyDown:function(e){e.which===p.a.LEFT?S(!1,e):e.which===p.a.RIGHT&&S(!0,e),null===g||void 0===g||g(e)},onClick:function(e){var t=S(!C,e);null===O||void 0===O||O(t,e)}}),h,o.createElement("span",{className:"".concat(s,"-inner")},C?k:m))}));u.displayName="Switch";var f=u,j=a(115),b=a(208),h=a(104),k=a(114),m=a(60),O=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},v=o.forwardRef((function(e,t){var a,r=e.prefixCls,i=e.size,s=e.loading,d=e.className,p=void 0===d?"":d,u=e.disabled,v=O(e,["prefixCls","size","loading","className","disabled"]);Object(m.a)("checked"in v||!("value"in v),"Switch","`value` is not a valid prop, do you mean `checked`?");var g=o.useContext(h.b),x=g.getPrefixCls,w=g.direction,y=o.useContext(k.b),C=x("switch",r),I=o.createElement("div",{className:"".concat(C,"-handle")},s&&o.createElement(j.a,{className:"".concat(C,"-loading-icon")})),S=l()((a={},Object(c.a)(a,"".concat(C,"-small"),"small"===(i||y)),Object(c.a)(a,"".concat(C,"-loading"),s),Object(c.a)(a,"".concat(C,"-rtl"),"rtl"===w),a),p);return o.createElement(b.a,{insertExtraNode:!0},o.createElement(f,Object(n.a)({},v,{prefixCls:C,className:S,disabled:u||s,ref:t,loadingIcon:I})))}));v.__ANT_SWITCH=!0,v.displayName="Switch";t.a=v},641:function(e,t,a){"use strict";var n=a(7),c=a(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"}}]},name:"bar-chart",theme:"outlined"},r=a(43),i=function(e,t){return c.createElement(r.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:o}))};i.displayName="BarChartOutlined";t.a=c.forwardRef(i)},642:function(e,t,a){"use strict";var n=a(7),c=a(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"},r=a(43),i=function(e,t){return c.createElement(r.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:o}))};i.displayName="SettingOutlined";t.a=c.forwardRef(i)},643:function(e,t,a){"use strict";var n=a(7),c=a(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},r=a(43),i=function(e,t){return c.createElement(r.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:o}))};i.displayName="QuestionCircleOutlined";t.a=c.forwardRef(i)},826:function(e,t,a){},834:function(e,t,a){"use strict";a.r(t);var n,c=a(7),o=a(8),r=a(4),i=a(5),s=a(9),l=a(10),d=a(1),p=a.n(d),u=a(0),f=a.n(u),j=a(112),b=a(32),h=a.n(b),k=a(330),m=a(6),O=a.n(m),v=a(202),g=a(601),x=a(636),w=a(638),y=a(584),C=a(13),I=a(93),S=a(29),N=a(637),T=(a(826),a(14)),P=S.a.path,E=Object(j.b)("pool")(n=Object(j.c)(n=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).unmount=!1,n.inputTokenRef=f.a.createRef(),n.outputTokenRef=f.a.createRef(),n.componentDidMount=function(){n.unmount=!1,n.props.pool.setUrlHash("liquidity");var e=n.props.location.pathname,t=void 0===e?"":e,a=S.a.contract.uniswapV2.defaultPoolTokens.token0,c=S.a.contract.uniswapV2.defaultPoolTokens.token1;Object(I.q)(t).then((function(e){var t=e.tokenAMatch,o=e.tokenBMatch,r=e.tokenAInfo,i=e.tokenBInfo;(t||o)&&(a=r,c=i),n.setState({token0Info:a,token1Info:c},(function(){n.inputTokenRef.current.findTokenInfo(),n.outputTokenRef.current.findTokenInfo(),n.genShareUrl(),n.getUserPairInfo({once:!0}),setTimeout(n.getUserPairInfo,3e3)}))}))},n.componentWillUnmount=function(){n.unmount=!0},n.getUserPairInfo=Object(o.a)(p.a.mark((function e(){var t,a,o,r,i,s,l,d,u,f=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.length>0&&void 0!==f[0]?f[0]:{},a=t.once,o=void 0!==a&&a,r=n.props.pool.address,i=n.state,s=i.token0Info,l=i.token1Info,n.getUserTokenBalance(s),n.getUserTokenBalance(l),e.next=7,Object(I.o)(r,s,l);case 7:if(d=e.sent,u={},d.address&&d.totalSupply.gt(0)&&(u.token0Price=d.token0Balance.div(d.token1Balance)._toSignificant(),u.token1Price=d.token1Balance.div(d.token0Balance)._toSignificant()),!n.unmount){e.next=12;break}return e.abrupt("return");case 12:if(n.setState(Object(c.a)({pairInfo:d,pairLoaded:!0},u),(function(){n.calcTokenAmount()})),!o){e.next=15;break}return e.abrupt("return");case 15:setTimeout((function(){n.getUserPairInfo()}),5e3);case 16:case"end":return e.stop()}}),e)}))),n.getUserTokenBalance=function(){var e=Object(o.a)(p.a.mark((function e(t){var a,c,o,r,i,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.props.pool,c=a.address,o=a.allTokenMap,!(r=t.address)){e.next=10;break}if(!o[r]){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,Object(I.u)(c,r);case 7:i=e.sent,s=i.balance,n.props.pool.setTokenBalance(r,s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.calcTokenAmount=function(){var e=n.state,t=e.pairInfo,a=e.token0Info,c=e.token1Info,o=e.token0Amount,r=e.token1Amount,i=e.token0Exact;if(t.address&&t.totalSupply.gt(0)){var s=Object(I.l)(t,a,c,o,r,i),l=s.token0Amount,d=s.token1Amount,p=s.poolShare;n.setState({token0Amount:l,token1Amount:d,poolShare:p})}else{var u="--",f="--",j="0";o&&r&&(u=new O.a(o).div(r)._toSignificant(),f=new O.a(r).div(o)._toSignificant(),j=100),n.setState({initialToken0Price:u,initialToken1Price:f,initialPoolShare:j})}},n.genShareUrl=function(){var e=n.state,t=e.token0Info,a=e.token1Info;n.props.history.replace("".concat(P.add).concat(Object(I.j)(t,a)))},n.onToken0Change=function(e,t){n.setState({token0Info:e},(function(){n.genShareUrl(),n.getUserPairInfo({once:!0}),t&&t()}))},n.onToken1Change=function(e,t){n.setState({token1Info:e},(function(){n.genShareUrl(),n.getUserPairInfo({once:!0}),t&&t()}))},n.amountFormat=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,a="";if(e){var n=Object(C.f)(e,t),c=n.valid,o=n.str;c&&(a=o)}return a},n.afterInputChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token0";"token0"!==t?n.setState({token1Amount:e,token0Exact:!1},(function(){n.calcTokenAmount()})):n.setState({token0Amount:e,token0Exact:!0},(function(){n.calcTokenAmount()}))},n.onInputChange=function(e,t){var a=e.target.value,c=n.props.pool.allTokenMap;if(a)if("token0"!==t){var o=c[n.state.token1Info.address].decimals,r=n.amountFormat(a,o);r&&n.afterInputChange(r,t)}else{var i=c[n.state.token0Info.address].decimals,s=n.amountFormat(a,i);s&&n.afterInputChange(s,t)}else n.afterInputChange("",t)},n.onMaxClick=function(e){var t=function(e){var t=n.props.pool.tokenBalanceMap,a=t[e]?t[e]:new O.a(0);return e?a.toString():a.gt(.01)?a.minus(.01).toString():"0"};if("token0"!==e){var a=n.state.token1Info;n.afterInputChange(t(a.address),e)}else{var c=n.state.token0Info;n.afterInputChange(t(c.address),e)}},n.onSupplyClick=Object(o.a)(p.a.mark((function e(){var t,a,c,o,r,i,s,l,d,u,f;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props.pool.address,a=n.state,c=a.token0Info,o=a.token1Info,r=a.token0Amount,i=a.token1Amount,t){e.next=4;break}return e.abrupt("return");case 4:if(r&&i){e.next=6;break}return e.abrupt("return");case 6:return n.setState({btnDisabled:!0}),e.next=9,Object(I.C)(t,c);case 9:if(s=e.sent,l=s.allowance,!new O.a(r).gt(l)){e.next=18;break}return e.next=14,Object(I.D)(c);case 14:if(e.sent){e.next=18;break}return n.setState({btnDisabled:!1}),e.abrupt("return");case 18:return e.next=20,Object(I.C)(t,o);case 20:if(d=e.sent,u=d.allowance,!new O.a(i).gt(u)){e.next=29;break}return e.next=25,Object(I.D)(o);case 25:if(e.sent){e.next=29;break}return n.setState({btnDisabled:!1}),e.abrupt("return");case 29:return e.next=31,Object(I.e)({token0Info:c,token1Info:o,token0Amount:r,token1Amount:i,to:t});case 31:f=e.sent,n.setState({btnDisabled:!1}),f&&setTimeout((function(){n.getUserPairInfo({once:!0})}),3e3);case 34:case"end":return e.stop()}}),e)}))),n.onHeaderCloseClick=function(){n.props.history.push(P.liquidity)},n.state={pairLoaded:!1,token0Info:{},token1Info:{},token0Amount:"",token1Amount:"",token0Exact:!0,pairInfo:{},poolShare:"0",token0Price:"--",token1Price:"--",initialToken0Price:"--",initialToken1Price:"--",initialPoolShare:"0",btnDisabled:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.pairLoaded,n=t.token0Info,c=t.token1Info,o=t.token0Amount,r=t.token1Amount,i=t.pairInfo,s=t.poolShare,l=t.token0Price,d=t.token1Price,p=t.initialToken0Price,u=t.initialToken1Price,f=t.initialPoolShare,j=t.btnDisabled,b=this.props.pool.allTokenMap;return Object(T.jsx)("div",{id:"pancakeswap-add-primary",children:Object(T.jsxs)(v.f,{children:[Object(T.jsx)(y.a,{title:h.a.get("swap.title"),desc:h.a.get("swap.desc"),type:"liquidity"}),Object(T.jsx)("div",{className:"pancakeswap-primary-page",children:Object(T.jsx)(v.c,{border:!0,children:Object(T.jsxs)("div",{className:"pancakeswap-primary-card",children:[Object(T.jsx)(g.a,{title:h.a.get("swap.add.title"),desc:h.a.get("swap.add.desc"),closable:!0,onHeaderClose:this.onHeaderCloseClick}),Object(T.jsxs)("div",{className:"pancakeswap-primary-card-top-body",children:[a?Object(T.jsx)(T.Fragment,{children:i.notToken||i.address&&i.totalSupply.gt(0)?Object(T.jsx)(T.Fragment,{}):Object(T.jsx)("div",{className:"pancakeswap-add-price-info warning",children:Object(T.jsxs)("div",{className:"pancakeswap-primary-warning",children:[Object(T.jsx)("div",{children:Object(T.jsx)(k.a,{})}),Object(T.jsx)("div",{children:h.a.getHTML("swap.add.firstLp")})]})})}):Object(T.jsx)(T.Fragment,{}),Object(T.jsx)(x.a,{ref:this.inputTokenRef,curToken:n,otherToken:c,onTokenChange:this.onToken0Change}),Object(T.jsx)(v.e,{placeholder:"0.0",value:o,enterButton:h.a.get("swap.max"),onChange:function(t){return e.onInputChange(t,"token0")},onSearch:function(){return e.onMaxClick("token0")},dark:!0}),Object(T.jsx)("div",{className:"pancakeswap-primary-icon-row",children:Object(T.jsx)(N.a,{})})]}),Object(T.jsxs)("div",{className:"pancakeswap-primary-card-bottom-body",children:[Object(T.jsx)(x.a,{ref:this.outputTokenRef,curToken:c,otherToken:n,onTokenChange:this.onToken1Change}),Object(T.jsx)(v.e,{placeholder:"0.0",value:r,enterButton:h.a.get("swap.max"),onChange:function(t){return e.onInputChange(t,"token1")},onSearch:function(){return e.onMaxClick("token1")},dark:!0}),a?Object(T.jsxs)(T.Fragment,{children:[i.notToken?Object(T.jsx)(T.Fragment,{}):i.address&&i.totalSupply.gt(0)?Object(T.jsxs)("div",{className:"pancakeswap-add-price-info",children:[Object(T.jsxs)("div",{className:"pancakeswap-add-info-row",children:[Object(T.jsx)("div",{children:h.a.get("swap.shareOfPool")}),Object(T.jsxs)("div",{children:[s,"%"]})]}),Object(T.jsxs)("div",{className:"pancakeswap-add-info-row",children:[Object(T.jsx)("div",{children:h.a.get("swap.price")}),Object(T.jsx)("div",{children:"".concat(l," ").concat(h.a.get("swap.priceInfo",{token0:i.token0.symbol,token1:i.token1.symbol}))})]}),Object(T.jsxs)("div",{className:"pancakeswap-add-info-row",children:[Object(T.jsx)("div",{}),Object(T.jsx)("div",{children:"".concat(d," ").concat(h.a.get("swap.priceInfo",{token0:i.token1.symbol,token1:i.token0.symbol}))})]})]}):Object(T.jsxs)("div",{className:"pancakeswap-add-price-info",children:[Object(T.jsxs)("div",{className:"pancakeswap-add-info-row",children:[Object(T.jsx)("div",{children:h.a.get("swap.shareOfPool")}),Object(T.jsxs)("div",{children:[f,"%"]})]}),Object(T.jsxs)("div",{className:"pancakeswap-add-info-row",children:[Object(T.jsx)("div",{children:h.a.get("swap.add.initialPrice")}),Object(T.jsx)("div",{children:"".concat(p," ").concat(h.a.get("swap.priceInfo",{token0:n.symbol,token1:c.symbol}))})]}),Object(T.jsxs)("div",{className:"pancakeswap-add-info-row",children:[Object(T.jsx)("div",{}),Object(T.jsx)("div",{children:"".concat(u," ").concat(h.a.get("swap.priceInfo",{token0:c.symbol,token1:n.symbol}))})]})]}),i.notToken?Object(T.jsx)(T.Fragment,{}):Object(T.jsx)("div",{className:"pancakeswap-add-btn",children:Object(T.jsx)(v.b,{disabled:j,onClick:this.onSupplyClick,children:h.a.get("swap.add.supplyButton")})})]}):Object(T.jsx)("div",{className:"pancakeswap-add-loading",children:Object(T.jsx)(v.g,{})})]}),Object(T.jsx)(w.a,{pairInfo:i,allTokenMap:b})]})})})]})})}}]),a}(f.a.Component))||n)||n;t.default=E}}]);