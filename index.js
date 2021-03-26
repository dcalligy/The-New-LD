'use strict';
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
//const prefix = require('./config.json');
//const emojis = require('./emojis.js');

const client = new Discord.Client();
client.commmands = new Discord.Collection();

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
    else if (command === 'kick') {
        if (!msg.mentions.users.size) {
            return msg.reply('You need to tag a user in order to kick them!');
        }
        // grab the "first" mentioned user from the message
        // this will return a `User` object, just like `msg.author`
        const tagged_user = msg.mentions.users.first();
        msg.channel.send(`You wanted to kick: ${tagged_user.username}`);
    }
    else if (command === 'avatar') {
        if (!msg.mentions.users.size) {
            return msg.channel.send(`Your avatar: <${msg.author.displayAvatarURL({format: "png", dynamic: true })}`);
        }
        const avatar_list = msg.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: png, dynamic: true })}>`;
        });

        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        msg.channel.send(avatar_list);
    }
    else if (command === 'prune') {
        const amount = parseInt(args[0] + 1);
        if (isNaN(amount)) {
            return msg.reply('That doesn\'t seem to be a valid number.');
        } else if (amount <= 1|| amount > 100) {
            return msg.reply('You need to input a number between 1 and 99');
        }
        msg.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            msg.channel.send('There was an error trying to prune messages in this channel!');
        });
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