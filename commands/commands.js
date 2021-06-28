// Needs to be fixed.
module.exports = {
  name: 'commands',
  description: 'List of commands',
  execute(msg, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Commands list')
      .setColor('#DAF7A6')
      .addFields(
        {
          name: 'Test 1',
          value: "`line 1`\n `line 2` \n `line3`"
        }
      )
      msg.channel.send(embed);
  }
}
