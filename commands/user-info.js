module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(msg) {
		msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
	},
};