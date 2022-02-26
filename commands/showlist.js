const list = require('./list.js');

module.exports = {
  name: 'showlist',
  description: 'Show the list you created',
  execute: async (msg, args) => {
    let results = await list.execute(msg, args);
    console.log('results: ', results);
  }
}
