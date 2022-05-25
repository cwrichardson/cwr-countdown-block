!function(){var t,e={664:function(t,e,n){"use strict";n.d(e,{W:function(){return O}});var o=n(307),r=window.React,i=n(697);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function f(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=l(t);if(e){var r=l(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f(this,n)}}function d(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),r=o?o[1]:"",i=o?o[3]:"",a=o?o[2]:n,s=a.length>=e?a:(d(Array(e)).map((function(){return"0"})).join("")+a).slice(-1*e);return"".concat(r).concat(s).concat(i)}var y={daysInHours:!1,zeroPadTime:2};function T(t,e){var n=t.days,o=t.hours,r=t.minutes,i=t.seconds,a=Object.assign(Object.assign({},y),e),s=a.daysInHours,c=a.zeroPadTime,u=a.zeroPadDays,l=void 0===u?c:u,p=Math.min(2,c),f=s?v(o+24*n,c):v(o,p);return{days:s?"":v(n,l),hours:f,minutes:v(r,p),seconds:v(i,p)}}var b=function(t){u(n,t);var e=m(n);function n(){var t;return a(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0==t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return c(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,r.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(r.Component);b.propTypes={count:i.number,children:i.element,onComplete:i.func};var w=function(t){u(n,t);var e=m(n);function n(t){var o;if(a(this,n),(o=e.call(this,t)).mounted=!1,o.initialTimestamp=o.calcOffsetStartTimestamp(),o.offsetStartTimestamp=o.props.autoStart?0:o.initialTimestamp,o.offsetTime=0,o.legacyMode=!1,o.legacyCountdownRef=(0,r.createRef)(),o.tick=function(){var t=o.calcTimeDelta(),e=t.completed&&!o.props.overtime?void 0:o.props.onTick;o.setTimeDeltaState(t,void 0,e)},o.start=function(){if(!o.isStarted()){var t=o.offsetStartTimestamp;o.offsetStartTimestamp=0,o.offsetTime+=t?o.calcOffsetStartTimestamp()-t:0;var e=o.calcTimeDelta();o.setTimeDeltaState(e,"STARTED",o.props.onStart),o.props.controlled||e.completed&&!o.props.overtime||(o.clearTimer(),o.interval=window.setInterval(o.tick,o.props.intervalDelay))}},o.pause=function(){o.isPaused()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.setTimeDeltaState(o.state.timeDelta,"PAUSED",o.props.onPause))},o.stop=function(){o.isStopped()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.offsetTime=o.offsetStartTimestamp-o.initialTimestamp,o.setTimeDeltaState(o.calcTimeDelta(),"STOPPED",o.props.onStop))},o.isStarted=function(){return o.isStatus("STARTED")},o.isPaused=function(){return o.isStatus("PAUSED")},o.isStopped=function(){return o.isStatus("STOPPED")},o.isCompleted=function(){return o.isStatus("COMPLETED")},o.handleOnComplete=function(t){o.props.onComplete&&o.props.onComplete(t)},t.date){var i=o.calcTimeDelta();o.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else o.legacyMode=!0;return o}return c(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,o=t.precision,r=t.controlled,i=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.now,r=void 0===o?Date.now:o,i=n.precision,a=void 0===i?0:i,s=n.controlled,c=n.offsetTime,u=void 0===c?0:c,l=n.overtime;e="string"==typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,s||(e+=u);var p=s?e:e-r(),f=Math.min(20,Math.max(0,a)),m=Math.round(1e3*parseFloat(((l?p:Math.max(0,p))/1e3).toFixed(f))),d=Math.abs(m)/1e3;return{total:m,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:m<=0}}(e,{now:n,precision:o,controlled:r,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var o,r=this;if(this.mounted)return!this.state.timeDelta.completed&&t.completed&&(this.props.overtime||this.clearTimer(),o=this.handleOnComplete),this.setState((function(n){var o=e||n.status;return t.completed&&!r.props.overtime?o="COMPLETED":e||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:t,status:o}}),(function(){n&&n(r.state.timeDelta),o&&o(r.state.timeDelta)}))}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,o=t.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:T(r,{daysInHours:e,zeroPadTime:n,zeroPadDays:o})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,o=t.onComplete;return(0,r.createElement)(b,{ref:this.legacyCountdownRef,count:e,onComplete:o},n)}var i=this.props,a=i.className,s=i.overtime,c=i.children,u=i.renderer,l=this.getRenderProps();if(u)return u(l);if(c&&this.state.timeDelta.completed&&!s)return(0,r.cloneElement)(c,{countdown:l});var p=l.formatted,f=p.days,m=p.hours,d=p.minutes,h=p.seconds;return(0,r.createElement)("span",{className:a},l.total<0?"-":"",f,f?":":"",m,":",d,":",h)}}]),n}(r.Component);w.defaultProps=Object.assign(Object.assign({},y),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),w.propTypes={date:(0,i.oneOfType)([(0,i.instanceOf)(Date),i.string,i.number]),daysInHours:i.bool,zeroPadTime:i.number,zeroPadDays:i.number,controlled:i.bool,intervalDelay:i.number,precision:i.number,autoStart:i.bool,overtime:i.bool,className:i.string,children:i.element,renderer:i.func,now:i.func,onMount:i.func,onStart:i.func,onPause:i.func,onStop:i.func,onTick:i.func,onComplete:i.func};var S=w;function O(t){return(0,o.createElement)("div",{className:"cwr-countdown"},(0,o.createElement)(S,{date:t.expire_time}))}window.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementsByClassName("cwr-countdown-block-placeholder");for(const e of t){const t=JSON.parse(e.querySelector("pre").innerText);(0,o.render)((0,o.createElement)(O,t),e)}}))},562:function(t,e,n){"use strict";var o=window.wp.blocks,r=n(307),i=window.wp.components,a=window.wp.i18n,s=window.wp.blockEditor,c=n(664);(0,o.registerBlockType)("create-block/cwr-countdown-block",{example:{attributes:{message:"Countdown Block"}},edit:function(t){let{attributes:e,setAttributes:n}=t;const[o,u]=(0,r.useState)(),l=(0,s.useBlockProps)();return(0,r.useEffect)((()=>{"expire_date"in e&&("string"===o.expire_date||o.expire_date instanceof String)?u(e.expire_date):u(new Date)}),[]),(0,r.createElement)("div",l,(0,r.createElement)(s.InspectorControls,{key:"setting"},(0,r.createElement)("div",{id:"cwr-countdown-timer-controls"},(0,r.createElement)("fieldset",null,(0,r.createElement)("legend",{className:"blocks-base-control__label"},(0,a.__)("Expire Date and Time","cwr-countdown-timer")),(0,r.createElement)(i.DateTimePicker,{currentDate:o,onChange:t=>{n({expire_time:t}),u(t)}})))),(0,r.createElement)(c.W,e))},save:function(){return null}})},703:function(t,e,n){"use strict";var o=n(414);function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},697:function(t,e,n){t.exports=n(703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},307:function(t){"use strict";t.exports=window.wp.element}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=function(e,n,r,i){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],i=t[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,r,i]},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={826:0,804:0,431:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,a=n[0],s=n[1],c=n[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var l=c(o)}for(e&&e(n);u<a.length;u++)i=a[u],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(l)},n=self.webpackChunkcwr_countdown_block=self.webpackChunkcwr_countdown_block||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var r=o.O(void 0,[431],(function(){return o(562)}));r=o.O(r)}();