const List = require('../models/List');
const utils = require('../utils/embedMessage');

module.exports = {
  name: 'additem',
  description: 'Creates a list',
  execute: (msg, args) => {
    if (args.length < 2) {
      msg.channel.send('+additem [category] [list item]');
    } else {
      const new_item = new List({
        category: args[0],
        list_item: args.slice(1).join(' '),
      });
      new_item.save();
      const message = utils.embedMessage('Saving the following...', '#FF2553', new_item.category, new_item.list_item);
      console.log('new_item: ', new_item);
      msg.channel.send(message);
    }
  }
}
