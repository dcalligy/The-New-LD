const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
  name: 'help',
  description: 'List all of my commands or info about a specific command.',
  alias: ['help'],
  usage: '[command name]',
  execute: (msg, args) => {
    const { commands } = msg.client;
    const msg_value = commands.map((command) => {
      return `${config.prefix}${command.name} = ${command.description}`
    });
    const embeddedMsg = new Discord.MessageEmbed()
      .setTitle('Command List')
      .setColor('#DAF7A6')
      .addFields(
        {
          name: 'You can run the following commands:', value: msg_value
        }
      )
    msg.channel.send(embeddedMsg);
  }
}
