module.exports = {
  name: 'ding',
  description: 'Ding!',
  execute: async (msg, args) => {
    msg.channel.send('Dong!');
  }
}
