/**
 * @format
 */

require('dotenv').config();
const EntNetwork = require('../ent/EntNetwork');

class Selector {
  selectNetwork() {
    return EntNetwork.findOne({
      where : {
        failures: 0,
        id: 1
      },
      order: [['availabilityScore', 'ASC']],
    }).then(entNetwork => {
      return entNetwork;
    });
  }
}

module.exports = Selector;
