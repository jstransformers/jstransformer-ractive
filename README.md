# jstransformer-ractive

[Ractive.js](http://www.ractivejs.org/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-ractive/master.svg)](https://travis-ci.org/jstransformers/jstransformer-ractive)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-ractive/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-ractive)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-ractive/master.svg)](http://david-dm.org/jstransformers/jstransformer-ractive)
[![NPM version](https://img.shields.io/npm/v/jstransformer-ractive.svg)](https://www.npmjs.org/package/jstransformer-ractive)

## Installation

    npm install jstransformer-ractive

## API

```js
var ractive = require('jstransformer')(require('jstransformer-ractive'));

ractive.render('<h3>Hello {{name}}!</h3>', {name: 'Alice'}).body
//=> '<h3>Hello Alice!<h3>'
```

## License

MIT
