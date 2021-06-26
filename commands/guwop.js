// figure this one out champ?
let gucci_mane = [
    "Overdose of sauce, no meat, just sauce",
    "I pushed a lot of pills, a lot of peas, a lot of powder, It's Gucci Mane La Fleur and jiggalo ya cowards.",
    "ya boi"
];
let randomAnswer = gucci_mane[Math.floor(Math.random() * gucci_mane.length)];
module.exports = {
    name: 'guwop',
    description: 'It\'s gucci time!',
    execute(msg, args) {
        msg.channel.send(randomAnswer);
    }
}
