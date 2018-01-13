/**
 * Test case for errorPage.
 * Runs with mocha.
 */
'use strict'

const errorPage = require('../lib/errorPage.js')
const coz = require('coz')
const assert = require('assert')

describe('error-page', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Error page', async () => {
    const bud = errorPage({
      pkg: {},
      title: 'hoge',
      texts: ['foo', 'bar'],
    })
    bud.path = `${__dirname}/../tmp/error.html`
    bud.mkdirp = true
    coz.render(bud)
  })
})

/* global describe, before, after, it */
