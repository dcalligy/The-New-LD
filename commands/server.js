// dont think this works
module.exports = {
  name: 'server',
  description: 'Display info about this server.',
  execute: async (msg, args) => {
    msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
  },
};
