// We made this file to add some sore of command handling
// ...Instead of having everything in the same file
// we decided to create module files for each command we use
// helps reduce clutter, I guess...
module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(msg, args) {
        msg.channel.send('Pong!');
    }
}
// need one of these for:
// ding
// uwu
// owo
// guwop
// gucci?
// server
// user-info
// args-info
// foo
// kick
// avatar
// prune