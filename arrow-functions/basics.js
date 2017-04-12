'use strict'

const tap = require('tap')

tap.test('arrow functions', t => {
  t.test('are shorter to write', t => {
    var func = () => {
      return 'I am func'
    }
    t.equal(func(), 'I am func')
    t.end()
  })

  t.test('a single expression, without curly braces returns too', t => {
    var func = () => ('I return too')
    t.equal(func(), 'I return too')
    t.end()
  })

  t.test('one parameter can be written without parens', t => {
    var func = p => p - 1
    t.equal(func(25), 24)
    t.end()
  })

  t.test('many params require parens', t => {
    var func = (param, param1) => param + param1
    t.equal(func(23, 42), 23 + 42)
    t.end()
  })

  t.test('body needs parens to return an object', t => {
    var func = () => ({iAm: 'an object'});
    t.same(func(), {iAm: 'an object'})
    t.end()
  })

  t.end()
})