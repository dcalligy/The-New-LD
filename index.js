'use strict';
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const { DH_NOT_SUITABLE_GENERATOR } = require('constants');
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

    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(msg, args);
    } catch (err) {
        console.log(err);
        msg.reply('There was an error trying to execute that command!');
    }
    
    // This is sending an empty message for some reason...
    // else if (command === 'gucci') {
    //    msg.channel.send([gucci_mane.content]);
    //}
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