const List = require('../models/List');
const utils = require('../utils/embedMessage');

module.exports = {
  name: 'deletecat',
  description: 'Delete a whole ass category',
  execute: async (msg, args) => {
    if (args.length < 1) {
      msg.channel.send('Fucking idiot... +deletecat [category]');
    } else {
      const cat_to_del = await List.deleteMany({
        category: args[0],
      });
      let message;
      console.log('cat_to_del: ', cat_to_del.deletedCount);
      if (cat_to_del.deletedCount == 0) {
        message = utils.embedMessage('Deleting...', '#FF2553', 'Record not found', 'Category does not exist');
      } else {
        message = utils.embedMessage('Deleting...', '#FF2553', 'Record found', args[0]);
      }
      msg.channel.send(message);
    }
  },
};
