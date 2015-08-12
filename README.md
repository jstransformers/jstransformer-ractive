# jstransformer-ractive [![The MIT License][license-img]][license-url]

[Ractive.js](http://www.ractivejs.org/) support for [JSTransformers][jstransformers-url]

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-ractive --save
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var ractive = require('jstransformer')(require('jstransformer-ractive'));

ractive.render('<h3>Hello {{name}}!</h3>', {name: 'Alice'}).body
//=> '<h3>Hello Alice!<h3>'
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/jstransformer-ractive/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-ractive
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-ractive.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-ractive
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-ractive.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-ractive
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-ractive.svg

[david-url]: https://david-dm.org/jstransformers/jstransformer-ractive
[david-img]: https://img.shields.io/david/jstransformers/jstransformer-ractive.svg

[jstransformers-url]: http://github.com/jstransformers
