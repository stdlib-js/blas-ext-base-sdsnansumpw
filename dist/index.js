"use strict";var w=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var E=w(function(J,_){
var o=require('@stdlib/number-float64-base-to-float32/dist'),u=require('@stdlib/math-base-assert-is-nanf/dist'),S=require('@stdlib/math-base-special-floor/dist'),T=128;function j(e,a,n,M){var r,i,q,p,l,m,t,c,y,R,f,s,v;if(e<=0)return 0;if(r=M,n===0)return u(a[r])?0:o(e*a[r]);if(e<8){for(f=0,v=0;v<e;v++)u(a[r])===!1&&(f+=a[r]),r+=n;return o(f)}if(e<=T){for(i=u(a[r])?0:a[r],r+=n,q=u(a[r])?0:a[r],r+=n,p=u(a[r])?0:a[r],r+=n,l=u(a[r])?0:a[r],r+=n,m=u(a[r])?0:a[r],r+=n,t=u(a[r])?0:a[r],r+=n,c=u(a[r])?0:a[r],r+=n,y=u(a[r])?0:a[r],r+=n,R=e%8,v=8;v<e-R;v+=8)i+=u(a[r])?0:a[r],r+=n,q+=u(a[r])?0:a[r],r+=n,p+=u(a[r])?0:a[r],r+=n,l+=u(a[r])?0:a[r],r+=n,m+=u(a[r])?0:a[r],r+=n,t+=u(a[r])?0:a[r],r+=n,c+=u(a[r])?0:a[r],r+=n,y+=u(a[r])?0:a[r],r+=n;for(f=i+q+(p+l)+(m+t+(c+y)),v;v<e;v++)u(a[r])===!1&&(f+=a[r]),r+=n;return o(f)}return s=S(e/2),s-=s%8,o(j(s,a,n,r)+j(e-s,a,n,r+s*n))}_.exports=j
});var C=w(function(P,B){
var Z=require('@stdlib/strided-base-stride2offset/dist'),b=E();function g(e,a,n){return b(e,a,n,Z(e,n))}B.exports=g
});var K=w(function(Q,I){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=C(),k=E();h(F,"ndarray",k);I.exports=F
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),G=K(),O,L=A(z(__dirname,"./native.js"));D(L)?O=G:O=L;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
