(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{193:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var r=a(0),i=a.n(r),s=a(202),n=a(203),o=a(210),l=a(270);var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return i.a.createElement(s.a,null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:"1000px",padding:"0px",paddingTop:"0px"}},i.a.createElement(l.a,null,i.a.createElement(n.a,{title:"Accenture Case Comp."}),i.a.createElement("h1",{className:"text-center"},"Accenture Case Competition"),i.a.createElement("h3",{className:"text-center"},"For more info ",i.a.createElement("a",{href:"https://sites.google.com/view/accenturecasecomp/home"},"CLICK HERE"))),i.a.createElement("div",{className:"text-center"},i.a.createElement(o.a,{photoToUse:"accenture_case_comp"}))))},r}(i.a.Component)},219:function(e,t,a){"use strict";a(29),a(30),a(13),a(94),a(138),a(212);var r=a(15);t.__esModule=!0,t.default=void 0;var i,s=r(a(71)),n=r(a(72)),o=r(a(140)),l=r(a(136)),d=r(a(0)),c=r(a(49)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),d.default.createElement("source",{media:i,srcSet:a,sizes:s}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+d+n+o+a+r+t+s+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=d.default.createElement(V,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),s):s},V=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},p,{onLoad:n,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,I=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:z?1:0,transition:C?"opacity "+b+"ms":"none"},o),T="boolean"==typeof h?"lightgray":h,j={transitionDelay:b+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&j,o,f),k={title:t,alt:this.state.isVisible?"":a,style:x,className:p};if(g){var P=g,_=P[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),T&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&j)}),_.base64&&d.default.createElement(R,{src:_.base64,spreadProps:k,imageVariants:P,generateSources:w}),_.tracedSVG&&d.default.createElement(R,{src:_.tracedSVG,spreadProps:k,imageVariants:P,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(P),d.default.createElement(V,{alt:a,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:L},_,{imageVariants:P}))}}))}if(m){var M=m,W=M[0],q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},s);return"inherit"===s.display&&delete q.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},T&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:T,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},C&&j)}),W.base64&&d.default.createElement(R,{src:W.base64,spreadProps:k,imageVariants:M,generateSources:w}),W.tracedSVG&&d.default.createElement(R,{src:W.tracedSVG,spreadProps:k,imageVariants:M,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(M),d.default.createElement(V,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:L},W,{imageVariants:M}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),N=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:C,sizes:N,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([N,c.default.arrayOf(N)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=z;t.default=T},270:function(e,t,a){"use strict";var r=a(197),i=a(198),s=a(0),n=a.n(s),o=a(49),l=a.n(o),d=a(200),c=a.n(d),u=a(199),f={tag:u.h,fluid:l.a.bool,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.fluid,o=e.tag,l=Object(i.a)(e,["className","cssModule","fluid","tag"]),d=Object(u.e)(c()(t,s?"container-fluid":"container"),a);return n.a.createElement(o,Object(r.a)({},l,{className:d}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=component---src-pages-accenture-case-comp-js-e596d865b8e20adb48b8.js.map