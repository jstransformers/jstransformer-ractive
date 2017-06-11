'use strict'

const Ractive = require('ractive')
const merge = require('merge-deep')

Ractive.DEBUG = false

exports.name = 'ractive'
exports.inputFormats = ['ractive', 'html']
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  const opts = merge({template: str}, options)
  const ractive = new Ractive(opts)

  Object.keys(locals).forEach(key => {
    ractive.set(key, locals[key])
  })

  return ractive.toHTML()
}
