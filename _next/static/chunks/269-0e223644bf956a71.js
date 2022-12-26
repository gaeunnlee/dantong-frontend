"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[269],{1143:function(t){t.exports=function(t,e,n,r,i,o,a,s){if(!t){var u;if(void 0===e)u=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,i,o,a,s],c=0;(u=Error(e.replace(/%s/g,function(){return l[c++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},7269:function(t,e,n){n.d(e,{Z:function(){return tr}});var r=n(4184),i=n.n(r),o=n(7294);function a(){return(a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}function u(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function l(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}n(1143);var c=function(t){var e=(0,o.useRef)(t);return(0,o.useEffect)(function(){e.current=t},[t]),e};function f(t){var e=c(t);return(0,o.useCallback)(function(){return e.current&&e.current.apply(e,arguments)},[e])}var p=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;"undefined"!=typeof document||p?o.useLayoutEffect:o.useEffect,new WeakMap;var d=n(861),v=n(5893);let h=["onKeyDown"],E=o.forwardRef((t,e)=>{var n;let{onKeyDown:r}=t,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,h),[o]=(0,d.FT)(Object.assign({tagName:"a"},i)),a=f(t=>{o.onKeyDown(t),null==r||r(t)});return(n=i.href)&&"#"!==n.trim()&&"button"!==i.role?(0,v.jsx)("a",Object.assign({ref:e},i,{onKeyDown:r})):(0,v.jsx)("a",Object.assign({ref:e},i,o,{onKeyDown:a}))});E.displayName="Anchor";var m=n(6792);function x(t,e){return(x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var b=n(3935),y={disabled:!1},g=o.createContext(null),C="unmounted",k="exited",O="entering",w="entered",N="exiting",S=function(t){function e(e,n){r=t.call(this,e,n)||this;var r,i,o=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?o?(i=k,r.appearStatus=O):i=w:i=e.unmountOnExit||e.mountOnEnter?C:k,r.state={status:i},r.nextCallback=null,r}(n=e).prototype=Object.create(t.prototype),n.prototype.constructor=n,x(n,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===C?{status:k}:null};var n,r=e.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==O&&n!==w&&(e=O):(n===O||n===w)&&(e=N)}this.updateStatus(!1,e)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},r.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){if(this.cancelNextCallback(),e===O){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this);n&&n.scrollTop}this.performEnter(t)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===k&&this.setState({status:C})},r.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,i=this.props.nodeRef?[r]:[b.findDOMNode(this),r],o=i[0],a=i[1],s=this.getTimeouts(),u=r?s.appear:s.enter;if(!t&&!n||y.disabled){this.safeSetState({status:w},function(){e.props.onEntered(o)});return}this.props.onEnter(o,a),this.safeSetState({status:O},function(){e.props.onEntering(o,a),e.onTransitionEnd(u,function(){e.safeSetState({status:w},function(){e.props.onEntered(o,a)})})})},r.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:b.findDOMNode(this);if(!e||y.disabled){this.safeSetState({status:k},function(){t.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:N},function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,function(){t.safeSetState({status:k},function(){t.props.onExited(r)})})})},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},r.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=t&&setTimeout(this.nextCallback,t)},r.render=function(){var t=this.state.status;if(t===C)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,s(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(g.Provider,{value:null},"function"==typeof n?n(t,r):o.cloneElement(o.Children.only(n),r))},e}(o.Component);function j(){}S.contextType=g,S.propTypes={},S.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:j,onEntering:j,onEntered:j,onExit:j,onExiting:j,onExited:j},S.UNMOUNTED=C,S.EXITED=k,S.ENTERING=O,S.ENTERED=w,S.EXITING=N;var T=/([A-Z])/g,R=/^ms-/;function D(t){return t.replace(T,"-$1").toLowerCase().replace(R,"-ms-")}var L=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,_=function(t,e){var n,r,i,o="",a="";if("string"==typeof e){return t.style.getPropertyValue(D(e))||((i=(n=t)&&n.ownerDocument||document)&&i.defaultView||window).getComputedStyle(n,void 0).getPropertyValue(D(e))}Object.keys(e).forEach(function(n){var r=e[n];r||0===r?n&&L.test(n)?a+=n+"("+r+") ":o+=D(n)+": "+r+";":t.style.removeProperty(D(n))}),a&&(o+="transform: "+a+";"),t.style.cssText+=";"+o},P=!!("undefined"!=typeof window&&window.document&&window.document.createElement),M=!1,A=!1;try{var $={get passive(){return M=!0},get once(){return A=M=!0}};P&&(window.addEventListener("test",$,$),window.removeEventListener("test",$,!0))}catch(F){}var I=function(t,e,n,r){if(r&&"boolean"!=typeof r&&!A){var i=r.once,o=r.capture,a=n;!A&&i&&(a=n.__once||function t(r){this.removeEventListener(e,t,o),n.call(this,r)},n.__once=a),t.addEventListener(e,a,M?r:o)}t.addEventListener(e,n,r)},U=function(t,e,n,r){var i=r&&"boolean"!=typeof r?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)},Z=function(t,e,n,r){return I(t,e,n,r),function(){U(t,e,n,r)}};function H(t,e){let n=_(t,e)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function K(t,e){var n,r,i,o,a,s,u,l,c,f,p,d;let v=H(t,"transitionDuration"),h=H(t,"transitionDelay"),E=(n=t,r=n=>{n.target===t&&(E(),e(n))},null==(i=v+h)&&(s=-1===(a=_(n,"transitionDuration")||"").indexOf("ms")?1e3:1,i=parseFloat(a)*s||0),p=(l=!1,c=setTimeout(function(){l||function(t,e,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}(n,"transitionend",!0)},i+5),f=Z(n,"transitionend",function(){l=!0},{once:!0}),function(){clearTimeout(c),f()}),d=Z(n,"transitionend",r),function(){p(),d()})}var V=function(t){return t&&"function"!=typeof t?function(e){t.current=e}:t};let X=o.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:a,addEndListener:s,children:u,childRef:l,...c},f)=>{let p=(0,o.useRef)(null),d=(0,o.useMemo)(function(){var t,e;return t=V(p),e=V(l),function(n){t&&t(n),e&&e(n)}},[p,l]),h=t=>{d(t&&"setState"in t?b.findDOMNode(t):null!=t?t:null)},E=t=>e=>{t&&p.current&&t(p.current,e)},m=(0,o.useCallback)(E(t),[t]),x=(0,o.useCallback)(E(e),[e]),y=(0,o.useCallback)(E(n),[n]),g=(0,o.useCallback)(E(r),[r]),C=(0,o.useCallback)(E(i),[i]),k=(0,o.useCallback)(E(a),[a]),O=(0,o.useCallback)(E(s),[s]);return(0,v.jsx)(S,{ref:f,...c,onEnter:m,onEntered:y,onEntering:x,onExit:g,onExited:k,onExiting:C,addEndListener:O,nodeRef:p,children:"function"==typeof u?(t,e)=>u(t,{...e,ref:h}):o.cloneElement(u,{ref:h})})}),G={[O]:"show",[w]:"show"},W=o.forwardRef(({className:t,children:e,transitionClasses:n={},...r},a)=>{let s=(0,o.useCallback)((t,e)=>{t.offsetHeight,null==r.onEnter||r.onEnter(t,e)},[r]);return(0,v.jsx)(X,{ref:a,addEndListener:K,...r,onEnter:s,childRef:e.ref,children:(r,a)=>o.cloneElement(e,{...a,className:i()("fade",t,e.props.className,G[r],n[r])})})});W.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},W.displayName="Fade";var Y=n(5697),B=n.n(Y);let q={"aria-label":B().string,onClick:B().func,variant:B().oneOf(["white"])},z=o.forwardRef(({className:t,variant:e,...n},r)=>(0,v.jsx)("button",{ref:r,type:"button",className:i()("btn-close",e&&`btn-close-${e}`,t),...n}));z.displayName="CloseButton",z.propTypes=q,z.defaultProps={"aria-label":"Close"};var J=n(6611);let Q=o.forwardRef((t,e)=>(0,v.jsx)("div",{...t,ref:e,className:i()(t.className,"h4")}));Q.displayName="DivStyledAsH4";let tt=(0,J.Z)("alert-heading",{Component:Q}),te=(0,J.Z)("alert-link",{Component:E}),tn=o.forwardRef((t,e)=>{var n;let{bsPrefix:r,show:c,closeLabel:p,closeVariant:d,className:h,children:E,variant:x,onClose:b,dismissible:y,transition:g,...C}=Object.keys(n={show:"onClose"}).reduce(function(e,r){var i,c,f,p,d,v,h,E,m=e[u(r)],x=e[r],b=s(e,[u(r),r].map(l)),y=n[r],g=(i=t[y],c=(0,o.useRef)(void 0!==x),p=(f=(0,o.useState)(m))[0],d=f[1],v=void 0!==x,h=c.current,c.current=v,!v&&h&&p!==m&&d(m),[v?x:p,(0,o.useCallback)(function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];i&&i.apply(void 0,[t].concat(n)),d(t)},[i])]),C=g[0],k=g[1];return a({},b,((E={})[r]=C,E[y]=k,E))},t),k=(0,m.vE)(r,"alert"),O=f(t=>{b&&b(!1,t)}),w=!0===g?W:g,N=(0,v.jsxs)("div",{role:"alert",...w?void 0:C,ref:e,className:i()(h,k,x&&`${k}-${x}`,y&&`${k}-dismissible`),children:[y&&(0,v.jsx)(z,{onClick:O,"aria-label":p,variant:d}),E]});return w?(0,v.jsx)(w,{unmountOnExit:!0,...C,ref:void 0,in:c,children:N}):c?N:null});tn.displayName="Alert",tn.defaultProps={variant:"primary",show:!0,transition:W,closeLabel:"Close alert"};var tr=Object.assign(tn,{Link:te,Heading:tt})}}]);