(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(140),s=a(146),o=a(159),l=a(160),d=a.n(l),c=function(){return r.a.createElement(n.StaticQuery,{query:"2011440971",render:function(e){return r.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})};t.default=function(){return r.a.createElement(s.a,null,r.a.createElement("h1",null,"Hi people"),r.a.createElement("p",null,"Welcome to your new PENIS site."),r.a.createElement("p",null,"Now go build something great."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(c,null)),r.a.createElement(n.Link,{to:"/page-2/"},"Go to page 2"))}},140:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(139),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(141),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},141:function(e,t,a){var i;e.exports=(i=a(143))&&i.default||i},142:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},143:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(49),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},144:function(e,t,a){},146:function(e,t,a){"use strict";var i=a(142),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(147),d=a.n(l),c=a(140),u=function(e){var t=e.siteTitle;return n.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},f=(a(144),function(e){var t=e.children;return n.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},n.a.createElement("html",{lang:"en"})),n.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:i})});f.propTypes={children:o.a.node.isRequired};t.a=f},159:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACa0lEQVQ4y42U228SURCH+c98MvHVxBc1mr5UE03UaEj6YBpiaopWbbWtjeVSrdwaaAQMsLBQbi2UW4FlUcpdKHcK5SKwwO56ljVoKSgnm5PJZr7fzJmZcxjkNIugtlqpVUietRpYMlDsYX3whzEVi1M0YLaYBrM4CFTK6fpkmCCo77eJUxtBltJ1hyL84QH8+pbCJED/ExnvA5AgBiqoNf3yunzphsILJyKuXMCUGoUpt4Er0ciUYlnbl0jEncOKcRLH1BvehauyuUuCr6vuoT9jJNsBWk/xZjVr+zqOV7zoc75gksdr0SCmXLHzmYa4r9Dr4li7dw7uNLsH0mCtSpJ5x7dXN82SSMiWMkqiWrYgqtx2ak5ELLN00YZaUqVUjY7yBwbVP4JicaRMIrysjGUSBvQfEYgX9Eg0dr7CJA6bRahZFNTxfLlY9VzatFIl29h8BHs+Kzh3Phm4+3ymUb7s1L9Tnnogty5zBEVr5Va30xtzZro1Hk2EO+d2Pr+tfbYUtNesQtfOzAznoXr7qbWSawzdxhWMmod+p0Nilsdq1sruG1TKtoeXL7uF8tMCNVI4TvztzLjQWzASZCOOhIyB9fswvIXkD2GSbA+mhhhxZoydxKivwn2y9wMtytg20YJrKDoVrHzrWJ1VASMdKq/fVTWr7ZHTjofppXrvcatjVPNbXWjTG3Zkh7oTYVq7VvyJmlMJfwHY+Xh1/oqkkDgbtvMf8KDbuebitV2Y7wc2iK/l+CbdnAvVHuQmmLds3IOAgRiTyF5ybNiJBTs+zMjY9m6nD96QfhefNjINfz840fP94D4P36Cx6xf42UWDR82/awAAAABJRU5ErkJggg==",aspectRatio:1,src:"/website/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-045aa.png",srcSet:"/website/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-0552a.png 75w,\n/website/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-fc3be.png 150w,\n/website/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-045aa.png 300w,\n/website/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-24f49.png 450w,\n/website/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-5497d.png 600w,\n/website/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-483e1.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},160:function(e,t,a){"use strict";var i=a(35);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(48)),o=i(a(149)),l=i(a(150)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var g=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+o+l+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:i,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!0,n=!1,o=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,n=!0),"undefined"==typeof window&&(i=!1,r=!1),t.critical&&(i=!0,r=!1,n=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:r,IOSupported:n,fadeIn:o,hasNoScript:c,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.fluid,h=e.fixed,g=e.backgroundColor,b=e.Tag,w="boolean"==typeof g?"lightgray":g,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o);if(p){var v=p;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(v.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/v.aspectRatio+"%"}}),v.base64&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:v.base64,style:S}),v.tracedSVG&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:v.tracedSVG,style:S}),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,v.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:v.srcSetWebp,sizes:v.sizes}),d.default.createElement("source",{srcSet:v.srcSet,sizes:v.sizes}),d.default.createElement(y,{alt:a,title:t,src:v.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},v))}}))}if(h){var A=h,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},n);return"inherit"===n.display&&delete L.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},A.base64&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:A.base64,style:S}),A.tracedSVG&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:A.tracedSVG,style:S}),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,width:A.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:A.height}}),this.state.isVisible&&d.default.createElement("picture",null,A.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),d.default.createElement("source",{srcSet:A.srcSet,sizes:A.sizes}),d.default.createElement(y,{alt:a,title:t,width:A.width,height:A.height,src:A.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:A.width,height:A.height},A))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var E=b;t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-js-28dc2d7bd8c299d3000d.js.map