/**
 * Test case for selfSigned.
 * Runs with mocha.
 */
'use strict'

const selfSigned = require('../lib/selfSigned.js')
const assert = require('assert')
const coz = require('coz')


describe('self-signed', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Self signed', async () => {
    let bud = selfSigned({})
    for (let b of bud) {
      b.path = `${__dirname}/../tmp/self-signed/${b.path}`
    }
    await coz.render(bud)
  })
})

/* global describe, before, after, it */
