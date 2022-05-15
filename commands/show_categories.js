const List = require('../models/List');

module.exports = {
  name: 'categories',
  description: 'Show what categories your server has',
  execute: async (msg, args) => {
    const categories = await List.find();
    const results = categories.map((c) => {
      return c.category
    });
    msg.channel.send('Here is a list of categories you have fam: ' + results);
  }
}
