const List = require('../models/List');
const utils = require('../utils/embedMessage');

module.exports = {
  name: 'showlist',
  description: 'Shows the items in the list you created by category',
  execute: async (msg, args) => {
    if (args.length < 1) {
      msg.channel.send('Dawg, you used the command wrong. Try... +showlist [category]');
    } else {
      const results = await List.find({
        category: args[0],
      });
      const show_results = results.map((r) => {
        return r.list_item;
      });
      let message;
      if (show_results.length < 1) {
        message = utils.embedMessage('List found..', '#FF2553', 'OwO', 'No results found');
      } else {
        message = utils.embedMessage(`${args[0]} list found...`, '#FF2553', 'UwU', show_results);
      }
      msg.channel.send(message);
    }
  }
}
