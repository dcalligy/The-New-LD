'use strict';
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
//const prefix = require('./config.json');
//const emojis = require('./emojis.js');

const client = new Discord.Client();

// we need to create an array of objects i think
// also need to figure out how to get this to work in a json file?
// maybe we create another json file? lyrics.json or something?
const gucci_mane = [
    "Overdose of sauce, no meat, just sauce",
    "I pushed a lot of pills, a lot of peas, a lot of powder, It's Gucci Mane La Fleur and jiggalo ya cowards."
];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    // Talk back to ya boi
    console.log(`${msg.channel.guild ? msg.channel.guild.name : 'DM'}`
                + `# ${msg.channel.name} ${msg.author.tag}: ${msg.content}`);
    if (command === 'ping') {
        msg.channel.send('Pong!');
    }
    else if (command === 'ding') {
        msg.channel.send('Dong!');
    }
    else if (command === 'uwu') {
        msg.channel.send('OwO');
    }
    else if (command === 'owo') {
        msg.channel.send('UwU');
    }
    else if (command === 'guwop') {
        msg.channel.send('Dope fiend Willie used to finger fuck my rims!\n');
        msg.channel.send('I wanna fuck tiny lil dirty ass.');
    }
    // This is sending an empty message for some reason...
    else if (command === 'gucci') {
        msg.channel.send([gucci_mane.content]);
    }
    else if (command === 'server') {
        msg.channel.send(`This sever's name is: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
    }
    else if (command === 'user-info') {
        msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
    }
    // we can use the new `command` variable, this makes it easier to manage things
    // we can switch other commands to this format as well.
    else if (command === 'args-info') {
        if (!args.length) {
            return msg.channel.send(`You didn't provide any arguments. ${msg.author}`);
        }
        else if (args[0] === 'foo') {
            return msg.channel.send('bar');
        }
        msg.channel.send(`First arguement: ${args[0]}`);
    }
    
});

// This shit no work either...
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server.
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
});

client.login(token);