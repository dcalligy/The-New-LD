const list = require('./newItem.js');

module.exports = {
  name: 'showlist',
  description: 'Show the list you created',
  execute: (msg, args) => {
    const results = list();
    console.log('results: ', results);
  }
}
