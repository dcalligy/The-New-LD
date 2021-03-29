'use strict';
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
//const prefix = require('./config.json');
//const emojis = require('./emojis.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// we need to create an array of objects i think
// also need to figure out how to get this to work in a json file?
// maybe we create another json file? lyrics.json or something?
const gucci_mane = [
    "Overdose of sauce, no meat, just sauce",
    "I pushed a lot of pills, a lot of peas, a lot of powder, It's Gucci Mane La Fleur and jiggalo ya cowards."
];

// return an array of all the file names in our directory to dynamically
// set our commands to the Collection we made above.
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

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
        client.commands.get('ping').execute(msg, args);
    }
    else if (command === 'ding') {
        client.commands.get('ding').execute(msg, args);
    }
    else if (command === 'uwu') {
        client.commands.get('uwu').execute(msg, args);
    }
    else if (command === 'owo') {
        client.commands.get('owo').execute(msg, args);
    }
    else if (command === 'guwop') {
        client.commands.get('guwop').execute(msg, args);
    }
    // This is sending an empty message for some reason...
    else if (command === 'gucci') {
        msg.channel.send([gucci_mane.content]);
    }
    else if (command === 'server') {
        client.commands.get('server').execute(msg, args);
    }
    else if (command === 'user-info') {
        client.commands.get('user-info').execute(msg, args);
    }
    // we can use the new `command` variable, this makes it easier to manage things
    // we can switch other commands to this format as well.
    else if (command === 'args-info') {
        client.commands.get('args-info').execute(msg, args);
    }
    else if (command === 'kick') {
        client.commands.get('kick').execute(msg, args);
    }
    else if (command === 'avatar') {
        client.commands.get('avatar').execute(msg, args);
    }
    else if (command === 'prune') {
        client.commands.get('prune').execute(msg, args);
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