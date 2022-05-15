const List = require('../models/List');

module.exports = {
  name: 'delete',
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
    }
  },
}
