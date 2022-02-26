
module.exports = {
  name: 'kick',
  description: 'Fake b!',
  execute: async (msg, args) => {
    if (!msg.mentions.users.size) {
      return msg.reply('You need to tag a user in order to kick them!');
    }
    // grab the "first" mentioned user from the message
    // this will return a `User` object, like `msg.author`
    const tagged_user = msg.mentions.users.first();
    msg.channel.send(`You wanted to kick: ${tagged_user.username}`);
  }
}
