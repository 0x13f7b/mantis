"use strict";

/**
 * @format
 * @type {Object<any>}
 */
require("dotenv").config();
const Ents = require("../ent/Ents");
Object.keys(Ents).forEach(key => {
  Ents[key].sync();
});