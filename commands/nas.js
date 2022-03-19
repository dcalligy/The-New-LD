module.exports = {
  name: 'nas',
  description: 'illmatic',
  execute: (msg, args) => {
    const nas_lyrics = [
      'Rappers, I monkey flip \'em with the funky rhythm I be kickin\'\nMusician inflictin\' composition of pain\nI\'m like Scarface sniffin\' cocaine\nHoldin\' an M16, see with the pen I\'m extreme',
      'It drops deep as it does in my breath\nI never sleep—cause sleep is the cousin of death\nBeyond the walls of intelligence, life is defined.\nI think of crime when I\'m in a New York state of mind',
      'I sip the Dom P, watchin\' Gandhi \'til I\'m charged, then\nWritin\' in my book of rhymes, all the words past the margin.\nBehold the mic I\'m throbbin\', mechanical movement\nUnderstandable smooth shit that murderers move with\nThe thief\'s theme, play me at night, they won\'t act right',
      'Yet I\'m the mild, money-gettin\' style, rollin\' foul\nThe versatile, honey-stickin\', wild, golden child\nDwellin\' in the Rotten Apple, you get tackled\nOr caught by the devil\'s lasso, shit is a hassle',
      'There\'s no days for broke days\nWe sell it, smoke pays, while all the old folks pray\nTo Jesús, soakin\' their sins in trays of holy water',
      'I\'m the young city bandit, hold myself down single-handed\nFor murder raps, I kick my thoughts alone, get remanded\nBorn alone, die alone, no crew to keep my crown or throne\nI\'m deep by sound alone, caved inside, 1,000 miles from home.',
      'I rap for listeners, bluntheads, fly ladies, and prisoners\nHennessy-holders and old-school niggas, then I be dissin\'a\nUnofficial that smoke Woolie Thai\nI dropped out of Cooley High, gassed up by a cokehead cutie pie',
      'Yo, they call me Nas, I\'m not your legal type of fella\nMoët drinking, marijuana smoking street dweller\nWho\'s always on the corner, rolling up blessed\nWhen I dress, it\'s never nothing less than Guess',
      'Nas is like the Afrocentric Asian: half-man, half-amazin\'\n‘Cause in my physical I can express through song\nDelete stress like Motrin, then extend strong\nI drink Moët with Medusa, give her shotguns in Hell\nFrom the spliff that I lift and inhale; it ain\'t hard to tell',
      'This rhythmatic explosion\nIs what your frame of mind has chosen\nI\'ll leave your brain stimulated, niggas is frozen\nSpeak with criminal slang, begin like a violin\nEnd like Leviathan,it\'s deep? Well, let me try again',
      'My poetry\'s deep, I never fell\nNas\'raps should be locked in a cell; it ain\'t hard to tell'
    ];
    const randomAnswer = nas_lyrics[Math.floor(Math.random() * nas_lyrics.length)];
    msg.channel.send(randomAnswer);
  }
}
