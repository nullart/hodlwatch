webpackJsonp([3],{427:function(n,e,r){"use strict";function t(n){return function(){var e=n.apply(this,arguments);return new Promise(function(n,r){function t(a,c){try{var u=e[a](c),o=u.value}catch(n){return void r(n)}if(!u.done)return Promise.resolve(o).then(function(n){t("next",n)},function(n){t("throw",n)});n(o)}return t("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(19),c=r.n(a),u=r(12),o=r.n(u),i=r(57),s=r.n(i),f=r(576),p=r.n(f),h=r(171),v=r.n(h),l=r(34),d=r.n(l),x=r(35),w={apiKey:!0,secret:!0,uid:!1,password:!1};e.default=function(){function n(){return e.apply(this,arguments)}var e=t(c.a.mark(function n(){var e,r,a,u,i,f,h,l=this;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(x.a)();case 2:return e=n.sent,r=function(n,r){return n&&e[n]?new e[n](r):(console.log("Exchange "+n+" is not supported"),!1)},a=function(){var n=t(c.a.mark(function n(e,t){var a,u,i;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=r(e,t),n.next=3,a.fetchBalance();case 3:if(u=n.sent,!(i=o()(["info","error"],u))){n.next=9;break}throw new Error(i);case 9:return n.abrupt("return",u);case 10:case"end":return n.stop()}},n,l)}));return function(e,r){return n.apply(this,arguments)}}(),u=function(){var n=t(c.a.mark(function n(e,r){var t;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a(e,r);case 3:return t=n.sent,n.abrupt("return",t);case 7:throw n.prev=7,n.t0=n.catch(0),console.log(n.t0),n.t0;case 11:case"end":return n.stop()}},n,l,[[0,7]])}));return function(e,r){return n.apply(this,arguments)}}(),i=function(n){return n.has.privateAPI&&n.has.fetchBalance},f=function(){return d()(v()(r),p()(i),v()(s()(["id","name"])))(e.exchanges)},h=function(n){if(!n)return w;var e=r(n);return e?e.requiredCredentials:void 0},n.abrupt("return",{fetchExchangeAccountBalance:a,testExchangeConnection:u,getExchangesList:f,getExchangeInstance:r,getExchangeRequiredCredentialsList:h});case 10:case"end":return n.stop()}},n,this)}));return n}()},513:function(n,e,r){function t(n,e){return(o(n)?a:c)(n,u(e,3))}var a=r(99),c=r(184),u=r(9),o=r(1);n.exports=t},576:function(n,e,r){var t=r(3),a=t("filter",r(513));a.placeholder=r(2),n.exports=a}});
//# sourceMappingURL=3.422919d9.chunk.js.map