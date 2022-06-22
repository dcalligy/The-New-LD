const Discord = require('discord.js');

// This is a test

const embedMessage = (title, color, name, fields) => {
  console.log('title: ', title, 'color: ', color, 'fields: ', fields);
  const message = new Discord.MessageEmbed()
    .setTitle(title)
    .setColor(color)
    .addFields(
      {
        name: name, value: fields
      }
    )
  return message;
}

module.exports = { embedMessage };
