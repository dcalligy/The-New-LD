const ping = require("./ping")

module.exports = {
    name: 'avatar',
    description: 'Displays the avatar picture of users who call the command',
    execute(msg, args) {
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
}