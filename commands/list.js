module.exports = {
  name: 'addlist',
  description: 'Testing a list adding command.',
  execute: async (msg, args) => {
    console.log('args: ', args.length);
    if (args.length < 2) {
      console.log('we hit this conditional');
      msg.channel.send('The usage requires two arguments you fucking idiot.');
      msg.channel.send('+addlist [category] [list item]');
    } else {
      let array = args.filter((list) =>  {
        if (list !== 0 && list !== args.length - 1) {
          return true;
        }
      });
      let obj = {
        category: args[0],
        list: array.join(' ')
      };
      array.concat(obj.list);
      console.log('array: ', array);
      console.log('obj: ' + obj.category + ' list: ' + obj.list);
      console.log('array: ', array.join(' '));
      msg.channel.send('This is your list: ' + obj.category + ' list: ' + obj.list);
      return obj;
    }
  }
}
