
// figure this one out champ?
module.exports = {
    name: 'bigl',
    description: 'Crooked by da book',
    execute(msg, args) {

      const
big_L_lyrics = [
    'I knocked out so many teeth the tooth fairy went bankrupt',
    'Fucking punk you ain\'t a leader, nobody followed you, you was never shit your mother should\'ve swallowed you...',
    'I\'m tellin you shit is about to get drastic soon\nI\'m quick to blast a goon\nAnd break a motherfucker like a plastic spoon',
    'Some say I\'m ruthless, some say I\'m grim\nOnce a brother done broke into my house and I robbed him',
    'Old folks get mugged and raided\nCrimes are drug related\nAnd we live by the street rules that thugs created',
    'I got drug spots from New York to Canada\nCause Big L be fuckin\' with more keys than a janitor',
    'I made every little kid from my hood run\nI was just like that little bastard from the Good Son',
    'L da Harlem pimp baby, for real\nI got mo\' dimes dan dat Sprint Lady',
    'What’s this motherfuckin rap game without L?\nYo, that’s like jewels without ice\nThat’s like china without rice or the Holy Bible without Christ',
    'To be seen clean in the mean Beam\nIs every team’s dream; Big L’s a cream fiend\nWith more green than Springsteen',
    'I’m so ahead of my time my parents haven’t met yet',
    'Cause I got all of ‘em strung jack\nMy girls are like boomerangs\nNo matter how far I throw \'em, they come back',
    'Facts on tracks I recite well\nEverybody wanna be like Mike, but Mike wanna be like L',
    '"I got more riches than you, fuck more bitches than you\nOnly thing I haven\'t got is more stitches than you',
    'Breaking in cribs with a crowbar\nI wasn\'t poor, I was po\' - I couldn\'t afford the \'o-r\''
];

        const randomAnswer = big_L_lyrics[Math.floor(Math.random() * big_L_lyrics.length)];
        msg.channel.send(randomAnswer);
    }
}
