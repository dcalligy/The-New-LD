const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  category: {
    default: '',
    type: 'String',
  },
  list_item: {
    default: '',
    type: 'String',
  },
});

module.exports = mongoose.model('List', listSchema, 'listItem');
