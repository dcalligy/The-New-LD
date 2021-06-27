'use strict';
const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Markov chain stuff
// default dictionary
// remove puncuation from a given string
// Generates the trigrams of an array of elements. For example, if `data = [a, b, c, d]` then the output will be `[[a,b,c], [b,c,d]]`.
/*
Generates the n-grams of an array of elements. For example, if `data = [a, b, c, d]` and
    `degree = 2` then the output will be `[[a,b], [b,c], [c,d]]`. This is just a generic
    version of the `get_trigrams` function, here for reference.
*/
// Given a dictionary of keys and weights, choose a random key based on its weight.

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

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

client.guilds.forEach((guild) => {
    console.log(`The bot is live in ${guild.name}`);
});


client.on('message', (msg) => {
    // console.log(`Bot: Hosting ${client.guild.name}`);
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/); // why do we do this again?
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
});

// Figure out away to log the amount of servers the bot is in.

// This shit no work either...
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server.
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
});

client.login(process.env.token);
