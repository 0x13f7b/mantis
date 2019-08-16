"use strict";

const invariant = require("invariant");

/**
 * @format
 */
class Enum {
  static getIntId = (object, key) => {
    invariant(object, `${key} should exist in enum`);
    return object[key]["id"];
  };

  static getStringLabel = (object, key) => {
    invariant(object[key], `${key} should exist in enum`);
    return object[key]["id"];
  };
}

module.exports = Enum;
