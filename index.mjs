// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.0-esm/index.mjs";function s(r,i,f,o){var a,d,m,l,u,j,p,h,b,v,c,x,g;if(r<=0)return 0;if(1===r||0===f)return e(i[o])?0:i[o];if(a=o,r<8){for(c=0,g=0;g<r;g++)!1===e(i[a])&&(c+=i[a]),a+=f;return t(c)}if(r<=128){for(d=e(i[a])?0:i[a],m=e(i[a+=f])?0:i[a],l=e(i[a+=f])?0:i[a],u=e(i[a+=f])?0:i[a],j=e(i[a+=f])?0:i[a],p=e(i[a+=f])?0:i[a],h=e(i[a+=f])?0:i[a],b=e(i[a+=f])?0:i[a],a+=f,v=r%8,g=8;g<r-v;g+=8)d+=e(i[a])?0:i[a],m+=e(i[a+=f])?0:i[a],l+=e(i[a+=f])?0:i[a],u+=e(i[a+=f])?0:i[a],j+=e(i[a+=f])?0:i[a],p+=e(i[a+=f])?0:i[a],h+=e(i[a+=f])?0:i[a],b+=e(i[a+=f])?0:i[a],a+=f;for(c=d+m+(l+u)+(j+p+(h+b));g<r;g++)!1===e(i[a])&&(c+=i[a]),a+=f;return t(c)}return x=n(r/2),t(s(x-=x%8,i,f,a)+s(r-x,i,f,a+x*f))}function i(r,n,i){var f,o,a;if(r<=0)return 0;if(1===r||0===i)return e(n[0])?0:n[0];if(f=i<0?(1-r)*i:0,r<8){for(o=0,a=0;a<r;a++)!1===e(n[f])&&(o+=n[f]),f+=i;return t(o)}return s(r,n,i,f)}r(i,"ndarray",s);export{i as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
