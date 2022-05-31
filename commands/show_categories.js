const List = require('../models/List');
const utils = require('../utils/embedMessage');

module.exports = {
  name: 'categories',
  description: 'Show what categories your server has',
  execute: async (msg, args) => {
    const categories = await List.distinct('category');
    let message;
    if (categories.length == 0) {
      message = utils.embedMessage('Categories', '#FF2553', 'Sorry fam...', 'No records found...');
      console.log('message: ', message);
      msg.channel.send(message);
    } else {
      const results = categories.map((c) => {
        return c;
      });
      message = utils.embedMessage('Categories', '#FF2553', 'Found..', results);
      msg.channel.send(message);
    }
  }
}
