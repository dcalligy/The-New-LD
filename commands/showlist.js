const List = require('../models/List');

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
        console.log('r: ', r);
        return r.list_item;
      });
      console.log('show_results: ', results);
      msg.channel.send('This is what I found mafk: ' + show_results);
    }
  }
}
