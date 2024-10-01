<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sdsnansumpw

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation with extended accumulation.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
sdsnansumpw = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-sdsnansumpw@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var sdsnansumpw = require( 'path/to/vendor/umd/blas-ext-base-sdsnansumpw/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-sdsnansumpw@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.sdsnansumpw;
})();
</script>
```

#### sdsnansumpw( N, x, stride )

Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation with extended accumulation.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
var N = x.length;

var v = sdsnansumpw( N, x, 1 );
// returns 1.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in the strided array are accessed at runtime. For example, to compute the sum of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, NaN, -7.0, NaN, 3.0, 4.0, 2.0 ] );

var v = sdsnansumpw( 4, x, 2 );
// returns 5.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x0 = new Float32Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = sdsnansumpw( 4, x1, 2 );
// returns 5.0
```

#### sdsnansumpw.ndarray( N, x, stride, offset )

Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation with extended accumulation and alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = sdsnansumpw.ndarray( x.length, x, 1, 0 );
// returns 1.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the sum of every other value in `x` starting from the second value

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = sdsnansumpw.ndarray( 4, x, 2, 1 );
// returns 5.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   Accumulated intermediate values are stored as double-precision floating-point numbers.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-sdsnansumpw@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function randOrNan() {
    if ( bernoulli() < 0.2 ) {
        return NaN;
    }
    return discreteUniform( 0, 100 );
}

var x = filledarrayBy( 10, 'float32', randOrNan );
console.log( x );

var v = sdsnansumpw( x.length, x, 1 );
console.log( v );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050][@higham:1993a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-ext/base/dsnansumpw`][@stdlib/blas/ext/base/dsnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring NaN values, using pairwise summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/dnansumpw`][@stdlib/blas/ext/base/dnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values and using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/gnansumpw`][@stdlib/blas/ext/base/gnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring NaN values and using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/sdsnansum`][@stdlib/blas/ext/base/sdsnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring NaN values and using extended accumulation.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/sdssumpw`][@stdlib/blas/ext/base/sdssumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using pairwise summation with extended accumulation.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/snansumpw`][@stdlib/blas/ext/base/snansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring NaN values and using pairwise summation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-sdsnansumpw.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-sdsnansumpw

[test-image]: https://github.com/stdlib-js/blas-ext-base-sdsnansumpw/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-sdsnansumpw/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-sdsnansumpw/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-sdsnansumpw?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-sdsnansumpw.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-sdsnansumpw/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-sdsnansumpw/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-sdsnansumpw/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-sdsnansumpw/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-sdsnansumpw/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-sdsnansumpw/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-sdsnansumpw/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-sdsnansumpw/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-sdsnansumpw/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/umd

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@higham:1993a]: https://doi.org/10.1137/0914050

<!-- <related-links> -->

[@stdlib/blas/ext/base/dsnansumpw]: https://github.com/stdlib-js/blas-ext-base-dsnansumpw/tree/umd

[@stdlib/blas/ext/base/dnansumpw]: https://github.com/stdlib-js/blas-ext-base-dnansumpw/tree/umd

[@stdlib/blas/ext/base/gnansumpw]: https://github.com/stdlib-js/blas-ext-base-gnansumpw/tree/umd

[@stdlib/blas/ext/base/sdsnansum]: https://github.com/stdlib-js/blas-ext-base-sdsnansum/tree/umd

[@stdlib/blas/ext/base/sdssumpw]: https://github.com/stdlib-js/blas-ext-base-sdssumpw/tree/umd

[@stdlib/blas/ext/base/snansumpw]: https://github.com/stdlib-js/blas-ext-base-snansumpw/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
