'use strict';

const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const { prefix, token, mongoDB } = require('./config.json');
const mongoose = require('mongoose');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

// TODO: Create a file that houses all of the lyrics in an object type structure
// Maybe use a class of some sort? Import that file in the individual commands and then use
// them accordingly. Also, we need to restructure the project to be a little cleaner.

// TODO: Markov chain stuff
// default dictionary
// remove punctuation from a given string
// Generates the trigrams of an array of elements. For example, if `data = [a, b, c, d]` then the output will be `[[a,b,c], [b,c,d]]`.
/*
Generates the n-grams of an array of elements. For example, if `data = [a, b, c, d]` and
    `degree = 2` then the output will be `[[a,b], [b,c], [c,d]]`. This is just a generic
    version of the `get_trigrams` function, here for reference.
*/
// Given a dictionary of keys and weights, choose a random key based on its weight.

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log('commandFiles: ', commandFiles);

// return an array of all the file names in our directory to dynamically
// set our commands to the Collection we made above.
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // Mongoose connection for the list commands.
  await mongoose.connect(
    mongoDB,
    {
      keepAlive: true,
    }
  );
  console.log('We are connected to our MongoDB');
  const Guilds = client.guilds.cache.map(guild => guild.name); // need to split on a \n
  console.log(`We are in ${Guilds.length}...\nNames of Guilds: ${Guilds}`);
});

client.on('message', (msg) => {
  console.log(`We are messaging in: ${msg.guild.name}`);
  console.log('author: ', msg.author);
  // TODO: Come back to this.
  /* if (msg.author.username == 'SnoopFrogg') {
    console.log('we are here');
    msg.channel.send(`${msg.author.username} has a big PP`);
  } else {
    if (msg.author.username !== 'Young Larry David') {
      msg.channel.send(`${msg.author.username}, you a So Icy Bitch Boi`);
    }
  }*/
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
    msg.channel.send('There was an error trying to execute that command!');
  }
});

// Figure out away to log the amount of servers the bot is in.

// This shit no work either...
client.on('guildMemberAdd', (member) => {
  // Send the message to a designated channel on a server.
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.login(token);
// client.login(process.env.token);
