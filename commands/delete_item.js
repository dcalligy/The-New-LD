const List = require('../models/List');
const utils = require('../utils/embedMessage');

module.exports = {
  name: 'deleteitem',
  description: 'Delete\'s an item from a specified category.',
  execute: async (msg, args) => {
    if (args.length < 2) {
      msg.channel.send('+delete [category] [list item]');
    } else {
      const delete_item = await List.findOneAndDelete({
        category: args[0],
        list_item: args.slice(1).join(' '),
      });
      console.log('delete_item: ', delete_item);
      let message;
      if (!delete_item) {
        message = utils.embedMessage('Deleting...', '#FF2553', 'Items found...', 'No items found fam');
      } else {
        message = utils.embedMessage('Deleting...', '#FF2553', delete_item.category, delete_item.list_item);
      }
      msg.channel.send(message);
    }
  },
}
