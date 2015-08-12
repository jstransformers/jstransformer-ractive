'use strict';

var Ractive = require('ractive');
var merge = require('merge-deep');
var visit = require('collection-visit');

Ractive.DEBUG = false;

exports.name = 'ractive';
exports.inputFormats = ['ractive', 'html'];
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  var opts = merge({template: str}, options);
  var ractive = new Ractive(opts);

  ractive = visit(ractive, 'set', locals);
  return ractive.toHTML();
};
