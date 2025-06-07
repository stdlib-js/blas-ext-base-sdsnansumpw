"use strict";var w=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var E=w(function(P,_){
var i=require('@stdlib/number-float64-base-to-float32/dist'),u=require('@stdlib/math-base-assert-is-nanf/dist'),Z=require('@stdlib/math-base-special-floor/dist'),b=128;function j(e,a,n,S){var r,o,q,p,m,c,l,t,y,R,f,s,v;if(e<=0)return 0;if(r=S,n===0)return u(a[r])?0:i(e*a[r]);if(e<8){for(f=0,v=0;v<e;v++)u(a[r])===!1&&(f+=a[r]),r+=n;return i(f)}if(e<=b){for(o=u(a[r])?0:a[r],r+=n,q=u(a[r])?0:a[r],r+=n,p=u(a[r])?0:a[r],r+=n,m=u(a[r])?0:a[r],r+=n,c=u(a[r])?0:a[r],r+=n,l=u(a[r])?0:a[r],r+=n,t=u(a[r])?0:a[r],r+=n,y=u(a[r])?0:a[r],r+=n,R=e%8,v=8;v<e-R;v+=8)o+=u(a[r])?0:a[r],r+=n,q+=u(a[r])?0:a[r],r+=n,p+=u(a[r])?0:a[r],r+=n,m+=u(a[r])?0:a[r],r+=n,c+=u(a[r])?0:a[r],r+=n,l+=u(a[r])?0:a[r],r+=n,t+=u(a[r])?0:a[r],r+=n,y+=u(a[r])?0:a[r],r+=n;for(f=o+q+(p+m)+(c+l+(t+y)),v;v<e;v++)u(a[r])===!1&&(f+=a[r]),r+=n;return i(f)}return s=Z(e/2),s-=s%8,i(j(s,a,n,r)+j(e-s,a,n,r+s*n))}_.exports=j
});var C=w(function(Q,B){
var g=require('@stdlib/strided-base-stride2offset/dist'),h=E();function k(e,a,n){return h(e,a,n,g(e,n))}B.exports=k
});var L=w(function(T,K){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=C(),A=E();z(I,"ndarray",A);K.exports=I
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=L(),O,M=F(D(__dirname,"./native.js"));G(M)?O=H:O=M;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
