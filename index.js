'use strict';
const Discord = require('discord.js');
const config = require('./config.json');
//const emojis = require('./emojis.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    // Talk back to ya boi
    console.log(`${msg.channel.guild ? msg.channel.guild.name : 'DM'}`
                + `# ${msg.channel.name} ${msg.author.tag}: ${msg.content}`);
    if (msg.content.toLocaleLowerCase() === 'ping') {
        msg.reply('Pong!');
    }
    else if (msg.content.toLocaleLowerCase() === 'ding') {
        msg.reply('Dong!');
    }
    if (msg.content.toLocaleLowerCase() === 'uwu') {
        msg.reply('OwO');
    }
    else if (msg.content.toLocaleLowerCase() === 'owo') {
        msg.reply('UwU');
    }
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server.
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
});

client.login(config.BOT_TOKEN);