const newItem = require('./newItem.js');

module.exports = {
  name: 'addlist',
  description: 'Creates a list',
  execute: (msg, args) => {
    console.log('args: ', args.length);
    if (args.length < 2) {
      msg.channel.send('+addlist [category] [list item]');
    } else {
      const array = [];
      let obj = {
        category: args[0],
        item: args.slice(1).join(' ')
      };
      array.push(obj);
      console.log('obj: ' + obj.category + ' list: ' + obj.item);
      msg.channel.send('This is your list: \n' + obj.category + '\n list: ' + obj.item);
      msg.channel.send('Category: ' + obj.category);
      newItem(array);
    }
  }
}
