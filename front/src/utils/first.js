/**
 * @flow strict
 * @format
 */

/**
 * Returns the first value in an iterable, or null if the iterable is empty.
 */
function first<TValue>(iter: Iterable<TValue>): ?TValue {
  for (const value of iter) {
    return value;
  }

  return null;
}

module.exports = first;
