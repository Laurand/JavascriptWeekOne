'use strict'

const tap = require('tap')

tap.test('`const` is like `let` plus read-only', t => {
  tap.test('scalar values are read-only', t => {
    t.test('number', t => {
      const constNum = 0
      t.equal(constNum, 0)
      t.end()
    })

    t.test('string', t => {
      const constString = 'I am a const'
      t.equal(constString, 'I am a const')
      t.end()
    })
    t.end()
  })

  const notChangeable = 23
  tap.test('const scope leaks too', t => {
    notChangeable
    t.equal(notChangeable, 23)
    t.end()
  })

  tap.test('complex types are NOT fully read-only', t => {
    t.test('array', t => {
      const arr = [42, 23]
      arr[0] = 8
      t.equal(arr[0], 8)
      t.end()
    })
    t.test('object', t => {
      const obj = {x: 1}
      obj.x = 3
      t.equal(obj.x, 3)
      t.end()
    })
    t.end()
  })
  t.end()
})