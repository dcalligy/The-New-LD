const List = require('../models/List');

module.exports = {
  name: 'additem',
  description: 'Creates a list',
  execute: (msg, args) => {
    if (args.length < 2) {
      msg.channel.send('+additem [category] [list item]');
    } else {
      const newItem = new List({
        category: args[0],
        list_item: args.slice(1).join(' '),
      });
      newItem.save();
      msg.channel.send('Saving the following list: \n' + args[0] + '\n item: ' + args.slice(1).join(' '));
    }
  }
}
