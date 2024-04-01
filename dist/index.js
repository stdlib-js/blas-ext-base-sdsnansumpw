"use strict";var y=function(u,a){return function(){return a||u((a={exports:{}}).exports,a),a.exports}};var F=y(function(P,T){
var j=require('@stdlib/number-float64-base-to-float32/dist'),v=require('@stdlib/math-base-assert-is-nanf/dist'),S=require('@stdlib/math-base-special-floor/dist'),Z=128;function E(u,a,n,e){var r,i,q,l,p,m,c,t,w,R,o,s,f;if(u<=0)return 0;if(u===1||n===0)return v(a[e])?0:a[e];if(r=e,u<8){for(o=0,f=0;f<u;f++)v(a[r])===!1&&(o+=a[r]),r+=n;return j(o)}if(u<=Z){for(i=v(a[r])?0:a[r],r+=n,q=v(a[r])?0:a[r],r+=n,l=v(a[r])?0:a[r],r+=n,p=v(a[r])?0:a[r],r+=n,m=v(a[r])?0:a[r],r+=n,c=v(a[r])?0:a[r],r+=n,t=v(a[r])?0:a[r],r+=n,w=v(a[r])?0:a[r],r+=n,R=u%8,f=8;f<u-R;f+=8)i+=v(a[r])?0:a[r],r+=n,q+=v(a[r])?0:a[r],r+=n,l+=v(a[r])?0:a[r],r+=n,p+=v(a[r])?0:a[r],r+=n,m+=v(a[r])?0:a[r],r+=n,c+=v(a[r])?0:a[r],r+=n,t+=v(a[r])?0:a[r],r+=n,w+=v(a[r])?0:a[r],r+=n;for(o=i+q+(l+p)+(m+c+(t+w)),f;f<u;f++)v(a[r])===!1&&(o+=a[r]),r+=n;return j(o)}return s=S(u/2),s-=s%8,j(E(s,a,n,r)+E(u-s,a,n,r+s*n))}T.exports=E
});var C=y(function(Q,B){
var b=require('@stdlib/number-float64-base-to-float32/dist'),_=require('@stdlib/math-base-assert-is-nanf/dist'),g=F();function h(u,a,n){var e,r,i;if(u<=0)return 0;if(u===1||n===0)return _(a[0])?0:a[0];if(n<0?e=(1-u)*n:e=0,u<8){for(r=0,i=0;i<u;i++)_(a[e])===!1&&(r+=a[e]),e+=n;return b(r)}return g(u,a,n,e)}B.exports=h
});var L=y(function(U,K){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=C(),z=F();k(I,"ndarray",z);K.exports=I
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=L(),O,M=D(A(__dirname,"./native.js"));G(M)?O=H:O=M;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
