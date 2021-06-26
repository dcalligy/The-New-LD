module.exports = {
    name: 'ding',
    description: 'Ding!',
    execute(msg, args) {
        msg.channel.send('Dong!');
    }
}
