'use strict'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const tap = require('tap')

tap.test('destructuring arrays makes shorter code', t => {
  t.test('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', t => {
    let [firstValue] = [1]
    t.strictEqual(firstValue, 1)
    t.end()
  })

  t.test('swap two variables, in one operation', t => {
    let [x, y] = ['ax', 'why'];
    [x, y] = [y, x]
    t.deepEqual([x, y], ['why', 'ax'])
    t.end()
  })

  t.test('leading commas', t => {
    const all = ['ax', 'why', 'zet']
    const [x, y, z] = all
    t.equal(z, 'zet')
    t.end()
  })

  t.test('extract from nested arrays', t => {
    const user = [['Some', 'One'], 23]
    const [[firstName, surname], age] = user

    const expected = 'Some One = 23 years'
    t.equal(`${firstName} ${surname} = ${age} years`, expected)
    t.end()
  })

  t.test('chained assignments', t => {
    let c, d
    let [a, b] = [c, d] = [1, 2]
    t.deepEqual([a, b, c, d], [1, 2, 1, 2])
    t.end()
  })

  t.test('in for-of loop', t => {
    for (var [c, a, b] of [[0, 1, 2]]) {}
    t.deepEqual([a, b], [1, 2])
    t.end()
  })

  t.end()
})