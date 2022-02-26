// Needs to be fixed.
/* module.exports = {
  name: 'commands',
  description: 'List of commands',
  // TODO: Create a 
  execute(msg, args) {
  const embed = new Discord.MessageEmbed()
    .setTitle('Command list')
    .setColor('#DAF7A6')
    .addFields(
      {
        name: 'Test 1',
        value: "`line 1`\n `line 2` \n `line3`"
      }
    )
    msg.channel.send(embed);
  }
} */
const { prefix } = require('../config.json');



module.exports = {
  name: 'commands',
  description: 'List all of my commands or info about a specific command.',
  alias: ['help'],
  usage: '[command name]',
  execute: async (msg, args) => {
    const data = [];
    const { commands } = msg.client;

    if (!args.length) {
      data.push('**Here\'s a list of all my commands:**');
      data.push('\n**' + commands.map(command => command.name).join(', ') + '**');
      data.push(`\n**You can send \`${prefix}help [command name]\` to get info on a specific command!**`);

      return msg.channel.send(data, { split: true })
        .then(() => {
          if (msg.channel.type === 'dm') return;
          msg.reply('I\'ve sent you a DM with all my commands!');
        })
        .catch(error => {
          console.error(`Could not send help DM to ${msg.author.tag}.\n`, error);
          message.reply('it seems like I can\'t DM you!');
        });
    }

    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) {
      return msg.channel.send('That\s not a valid command you fucking idiot!');
    }

    data.push(`**Name:** ${command.name}`);
    if (command.aliases)
      data.push(`**Description:** ${command.description}`);
    if (command.description)
      data.push(`**Usage:** ${prefix}${command.name}${command.usage}`);
    data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

    msg.channel.send(data, { split: true });
  }
}
