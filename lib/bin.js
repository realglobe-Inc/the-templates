/**
 * Define a bud for bin.
 * @memberof module:ape-tmpl/lib
 * @function binBud
 * @param {object} config - Configuration
 * @param {object} signature - Bin signature.
 * @returns {object} - Bud object.
 */

'use strict'

const assert = require('assert')
const objnest = require('objnest')
const evaljson = require('evaljson')
const _tmpl = require('./_tmpl')

function binBud (config) {
  let signature = config.signature
  assert.ok(signature, 'config.signature is required.')
  return {
    force: true,
    mode: '555',
    mkdirp: true,
    tmpl: _tmpl('bin.hbs'),
    path: config.path || signature.name,
    data: {
      done: config.done,
      lib: config.lib || '../lib',
      get signature () {
        return evaljson(objnest.expand(signature))
      }
    }
  }
}

module.exports = binBud
