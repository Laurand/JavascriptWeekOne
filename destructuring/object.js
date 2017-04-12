'use strict'

const tap = require('tap')

tap.test('destructuring objects', t => {
  t.test('is simple', t => {
    const {x} = {x: 1};
    t.equal(x, 1);
    t.end();
  });

  tap.test('interesting', t => {
    t.test('missing refs become undefined', t => {
      const {z} = {x: 1};
      t.equal(z, void 0)
      t.end()
    })

    t.test('destructure from builtins (string)', t => {
      const {substr} = '';
      t.equal(substr, String.prototype.substr);
      t.end();
    });
    t.end();
  });
  t.end();
});
