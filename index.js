'use strict';

var Ractive = require('ractive');
var merge = require('merge-deep');

Ractive.DEBUG = false;

exports.name = 'ractive';
exports.inputFormats = ['ractive', 'html'];
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  var opts = merge({template: str}, options);
  var ractive = new Ractive(opts);

  Object.keys(locals).forEach(function (key) {
    ractive.set(key, locals[key]);
  });

  return ractive.toHTML();
};
