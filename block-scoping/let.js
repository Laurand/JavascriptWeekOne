'use strict'

const tap = require('tap')

tap.test('`let` restricts the scope of the variable to the current block', t => {
  tap.test('`let` vs. `var`', t => {
    t.test('`var` works as usual', t => {
      if (true) {
        var varX = true
      }
      t.equal(varX, true)
      t.end()
    })

    t.test('`let` restricts scope to inside the block', t => {
      if (true) {
        let letX = true
      }
      t.throws(() => console.log(letX), new Error('letX is not defined'))
      t.end()
    })
    t.end()
  })

  tap.test('`let` usage', t => {
    t.test('`let` use in `for` loops', t => {
      var obj = {x: 1}
      for (let key in obj) {}
      t.throws(() => console.log(key), new Error('key is not defined'))
      t.end()
    })

    t.test('create artifical scope, using curly braces', t => {
      {
        let letX = true
      }
      t.throws(() => console.log(letX), new Error('letX is not defined'))
      t.end()
    })

    t.end()
  })
  t.end()
})
