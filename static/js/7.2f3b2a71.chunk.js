(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[7],{30:function(t,e,n){"use strict";function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,c=new Array(e);n<e;n++)c[n]=t[n];return c}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],c=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(c=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);c=!0);}catch(l){r=!0,i=l}finally{try{c||null==a.return||a.return()}finally{if(r)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return r}))},67:function(t,e,n){},68:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c="times",r=[],i="f00d",o="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z";e.definition={prefix:"fas",iconName:c,icon:[352,512,r,i,o]},e.faTimes=e.definition,e.prefix="fas",e.iconName=c,e.width=352,e.height=512,e.ligatures=r,e.unicode=i,e.svgPathData=o},69:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c="bars",r=[],i="f0c9",o="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z";e.definition={prefix:"fas",iconName:c,icon:[448,512,r,i,o]},e.faBars=e.definition,e.prefix="fas",e.iconName=c,e.width=448,e.height=512,e.ligatures=r,e.unicode=i,e.svgPathData=o},74:function(t,e,n){"use strict";n.r(e);var c=n(30),r=n(0),i=n(32),o=n(69),a=n(68),l=(n(67),n(1));e.default=function(t){var e=t.refs,n=Object(r.useState)(!1),s=Object(c.a)(n,2),u=s[0],b=s[1],j=Object(r.useState)(!1),d=Object(c.a)(j,2),h=d[0],f=d[1],O=Object(r.useState)(!0),x=Object(c.a)(O,2),m=x[0],p=x[1],y=function(t){t.scrollIntoView({behavior:"smooth"}),b(!1)},v=function(t){t.scrollIntoView({behavior:"smooth"})},g=function(){p(!m)};return window.addEventListener("scroll",(function(){var t=window.scrollY;f(t>50)})),Object(r.useEffect)((function(){document.body.className="",document.body.classList.add(m?"dark":"light")}),[m]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{className:"navbar ".concat(h?"box-shadow":""),children:[Object(l.jsx)("button",{type:"button",onClick:function(){return v(e.current[0])},className:"nav-link","aria-label":"Navbar Logo",children:Object(l.jsx)("img",{src:"./wm-red-2-min.png",alt:"Navbar Logo",height:"40",width:"40",className:"nav-logo",loading:"lazy"})}),Object(l.jsxs)("ul",{className:"nav-items",children:[Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return v(e.current[1])},children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return v(e.current[2])},children:"Education"})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return v(e.current[3])},children:"Experience"})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return v(e.current[4])},children:"Projects"})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return v(e.current[5])},children:"Contact Me"})}),Object(l.jsx)("li",{children:Object(l.jsxs)("label",{className:"switch",htmlFor:"switch","aria-label":"Toggle Mode",children:[Object(l.jsx)("input",{type:"checkbox",id:"switch",onChange:g,checked:!m}),Object(l.jsx)("span",{className:"slider round"})]})})]}),Object(l.jsx)("div",{className:"menu-icon",children:Object(l.jsx)("button",{type:"button",onClick:function(){return b(!u)},"aria-label":"Mobile Menu Toggle",children:Object(l.jsx)(i.a,{icon:u?a.faTimes:o.faBars})})}),Object(l.jsx)("aside",{"aria-hidden":!u,tabIndex:"-1",className:"aside-nav ".concat(u?"active":""),children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return y(e.current[0])},children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return y(e.current[1])},children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return y(e.current[2])},children:"Education"})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return y(e.current[3])},children:"Experience"})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return y(e.current[4])},children:"Projects"})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return y(e.current[5])},children:"Contact Me"})}),Object(l.jsx)("li",{children:Object(l.jsxs)("label",{className:"switch",htmlFor:"switchAside","aria-label":"Toggle Mode",children:[Object(l.jsx)("input",{type:"checkbox",id:"switchAside",onChange:g,checked:!m}),Object(l.jsx)("span",{className:"slider round"})]})})]})})]})})}}}]);
//# sourceMappingURL=7.2f3b2a71.chunk.js.map