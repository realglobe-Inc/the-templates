/**
 * Test case for stateful.
 * Runs with mocha.
 */
'use strict'

const Stateful = require('../lib/Stateful.js')
const assert = require('assert')
const coz = require('coz')

describe('stateful', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Stateful', async () => {
    const bud = Stateful({
      name:'hoge/hoge',
    })
    bud.path = `${__dirname}/../tmp/testing-Stateful.js`
    await coz.render(bud)
  })
})

/* global describe, before, after, it */
