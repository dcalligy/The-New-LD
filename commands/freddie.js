
// figure this one out champ?
module.exports = {
    name: 'gibbs',
    description: 'Crooked by da book',
    execute(msg, args) {

      const freddie_gibbs_lyrics = [
    '24 hours to live, what would you do?\nJust get high, treat everyday like my birthday, smoke with the crew',
    'Before I check out, let me diamond my neck out\nBlow a mil on my niggas, fuck bitches like I was fresh out',
    'Fresh to death when I step out, every day approaching the gates\nI live a helluva life, baby, heaven can wait',
    'Everyday I pray to be as strong as Huey Newton\nBefore you pull that trigger, take a closer look at who you shooting',
    'Mirror image, nothing different, you just another slave\nTryin to succeed in these European\'s narcotics trade',
    'Worked all week, 140 dollars was all I made\nFuck a job, I\'d rather chop a rock and be chopping blades',
    'Gotta watch these cops cause I came too far to die in a cage\nWatch who you fuck, rather catch a bullet than die from AIDS',
    'Before I check out, let me diamond my neck out\nCrushing feelings on Broadway, I pulled that Monte SS out',
    'Buy my mom a new spot and make sure that bitch super decked out\nSwear I can\'t leave this Earth \'til I\'m sure that you never stress out',
    'Hit the lab so I can lay all the shit I didn\'t get to spit\nCould die tonight, but what I write they forever gon\' reminisce\nIt\'s Gangsta Gibbs',
    'Niggas be like "Fred, you ain\'t never lied"\nFuck the rap shit, my gangsta been solidified',
    'Still do my business on the side\nBitch, if you polices, then pay me no nevermind',
    'I was thuggin\', black and red laces in my number threes\nTake a pull up off the wood and let that motherfucker breathe',
    'Sit outside a busta crib and let that motherfucker leave\nWalk his ass back in and put him on his motherfuckin\' knees',
    'Thuggin\', never takin\' no for an answer\nMight just take a loss, but bitch, I’d rather take my chances',
    'This liquor got me lurkin\' where you live at in the night time\n59Fifty to the left, but I\'m in my right mind',
    'Thuggin\', pants gon\' be saggin\' til I\'m 40\n Still lyrically sharper than any short bus shawty',
    'Phonies ain\'t gon\' throw me in this minstrel show\nThese labels see how far up in they mouth my dick can go',
    'So gon\', choke on this meat, throw my song on repeat\nMight move away one day but I\'m always gon\' belong to the streets',
    'Selling you the science of the street rap\nEvery motherfuckin\' show I do is off the meat rack',
    'Never trippin\' on a dame, I\'m too cold for you broke hoes\nDon\'t let the knob hit your booty when the door close, bitch',
    'She let me hit it cause I\'m thuggin\'\nSquares need not apply, I\'m so fly I might fuck her cousin',
    '"We’re not against rap, but we\'re against those thugs"\nCan\'t be legit when every nigga in your clique sold drugs',
    'I hate to say it, ain\'t no need to be discreet\nIf she don\'t cop from me, she get it from a nigga up the street\nCause he thuggin\', and yo, she\'d probably suck his dick for it\nShe turnt out so it ain\'t shit to turn a trick for it',
    'My uncle last bitch put him on the glass dick\nTried to rob a man to feed his habit, he got blasted',
    'Cause in the past, my low-class black ass would serve my own fucking family members'
];

        const randomAnswer = freddie_gibbs_lyrics[Math.floor(Math.random() * freddie_gibbs_lyrics.length)];
        msg.channel.send(randomAnswer);
    }
}
