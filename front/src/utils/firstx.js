/**
 * @flow strict
 * @format
 */

const invariant = require('invariant');

/**
 * Returns the first value in an iterable, throws an exception if the iterable
 * is empty.
 */
function firstx<TValue>(iter: Iterable<TValue>): TValue {
  for (const value of iter) {
    return value;
  }

  invariant(false, 'Expected non-empty collection');
}

module.exports = firstx;
