const List = require('../models/List');

module.exports = {
  name: 'deletecat',
  description: 'Delete a whole ass category',
  execute: async (msg, args) => {
    if (args.length < 1) {
      msg.channel.send('Fucking idiot... +deletecat [category]');
    } else {
      const cat_to_del = await List.findOneAndDelete({
        category: args[0],
      });
      msg.channel.send('Deleting... ' + cat_to_del);
    }
  },
};
