(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{162:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(163),o=t(26),i=t(5),s=t.n(i),c=t(1),m=t.n(c),d=t(164),u=function(e){var a=e.children;return r.a.createElement("div",{className:"skill-section"},a)},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={animated:!1,dash:2*Math.PI*a.radius},t}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=[this.props.percentage,this.state.dash],a=e[0],t=e[1],n=(100-a)/100*t;d.a.timeline({easing:"easeOutCubic",delay:500,duration:1e3}).add({targets:this.refs.skillCircle,strokeDashoffset:[t,n],round:1},0).add({targets:this.refs.skillPercentage,textContent:["0%",a+"%"],round:1},0)},t.render=function(){var e=this.props,a=e.radius,t=e.children,n=e.color,l=e.strokeWidth,o=3*a,i=2*Math.PI*a;return r.a.createElement("div",{className:"skill"},r.a.createElement("svg",{className:"skill__container",width:o,height:o},r.a.createElement("g",{className:"skill__donut"},r.a.createElement("circle",{className:"bgCircle",strokeWidth:l,r:a}),r.a.createElement("circle",{className:"fgCircle",ref:"skillCircle",stroke:n,strokeWidth:l,strokeDasharray:i,strokeDashoffset:this.state.dash,r:a}))),r.a.createElement("h2",{className:"skill__text"},t,r.a.createElement("span",{className:"skill__percent",ref:"skillPercentage"},"0")))},a}(n.Component);h.propTypes={percentage:m.a.number.isRequired,color:m.a.string.isRequired,radius:m.a.number,strokeWidth:m.a.number},h.defaultProps={radius:70,strokeWidth:30};a.default=function(){return r.a.createElement(l.b,null,r.a.createElement(l.f,null,"About Me"),r.a.createElement(l.d,null,"And what I do"),r.a.createElement(l.c,null,"Hello! My name is Victor Feitosa and I'm a Web Developer currently focusing in Front End Development, UI and UX. I love learning new technologies, creating things, gaming, drawing and painting and many, many other things."),r.a.createElement(l.d,null,"My Skills"),r.a.createElement(l.c,null,"Since 2012 I work as a Web Developer, I'm a Bachelor in Digital Systems and Media, graduated since 2015, and post graduated in Information Security in 2018. I've always worked with different technologies and areas such as game development, mobile, web and embedded systems. Here's a few of the tech I adopt:"),r.a.createElement(u,null,r.a.createElement(h,{color:"#F1DB51",percentage:85},"ES6"),r.a.createElement(h,{color:"#61DAFB",percentage:75},"React"),r.a.createElement(h,{color:"#CE679A",percentage:90},"SASS")),r.a.createElement(l.c,null,"Currently, I work as a full time web developer, with focus in Front End and UI/UX design, still doing some backend work here and there, but mostly desining pages, apps and systems from the ground up with a great team of developers at Intrapoint. We power one of Norways bigest Oil companies and manage a huge system with a great range of modules for crisis management and subsystems such as ERPs and CRMs. We also do some contract work for companies looking for great solutions with a full featured backend."),r.a.createElement(l.d,null,"My Projects"),r.a.createElement(l.c,null,"Besides my work for companies, I have several finished and ongoing projects, check my",r.a.createElement(l.a,{to:"/portfolio",icon:o.g,iconPosition:"after"},"Portfolio")," page!"),r.a.createElement(l.d,null,"Contact me!"),r.a.createElement(l.c,null,"I'm available! Please take a look at my networks and other links, there's always new things on Behance and Github! Contact me (Skype & Email) at ",r.a.createElement(l.a,{to:"mailto:victor.rm.feitosa@outlook.com",icon:o.b,iconPosition:"after"},"victor.rm.feitosa@outlook.com"),". Also take a look at my ",r.a.createElement(l.a,{to:"/cv",icon:o.c,iconPosition:"after"},"CV"),"!"),r.a.createElement(l.e,null))}},163:function(e,a,t){"use strict";t.d(a,"b",function(){return o}),t.d(a,"f",function(){return i}),t.d(a,"d",function(){return s}),t.d(a,"a",function(){return c}),t.d(a,"c",function(){return d}),t.d(a,"e",function(){return u});var n=t(0),r=t.n(n),l=t(1),o=function(e){var a=e.children;return r.a.createElement("main",{className:"page-main"},a)};t.n(l).a.oneOf(["full","half","third"]);var i=function(e){var a=e.children,t=e.icon,n=void 0===t?null:t;return r.a.createElement("div",{className:"title"},n," ",r.a.createElement("h2",{className:"title__text"},a))},s=function(e){var a=e.children;return r.a.createElement("h3",{className:"subtitle"},a)},c=function(e){var a=e.to,t=e.icon,n=e.iconPosition,l=void 0===n?"before":n,o=e.children,i=t&&"before"===l,s=t&&"after"===l;return r.a.createElement("span",{className:"page-link"},i&&r.a.createElement(t,{className:"page-link__icon"}),r.a.createElement("a",{href:a,className:"page-link__anchor"},o),s&&r.a.createElement(t,{className:"page-link__icon"}))},m=function(){return r.a.createElement(r.a.Fragment,null,"    ")},d=function(e){var a=e.children;return r.a.createElement("p",{className:"paragraph"},r.a.createElement(m,null),a)},u=function(e){var a=e.src,t=e.srcSet,n=e.responsive,l=void 0===n||n,o=e.alt;return r.a.createElement("img",{alt:o,src:a,srcSet:t,className:"text-image"+(l?" text-image--responsive":"")})}}}]);
//# sourceMappingURL=component---src-pages-about-js-85b3a4592ec558a131a5.js.map