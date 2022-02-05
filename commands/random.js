module.exports = {
  name: 'random',
  description: 'randies',
  execute(msg, args) {
    const random_lyrics = [
      'Like a pigeon in the sky, I just shitted on your ride',
      'I’m far from broke, got enough bread And mad hoes, ask Beavis I get nothing Butthead',
      'I jumped out the Lincoln, left him stinkin. Put his brains in the street. Now you can see what he was just thinkin',
      'I got drug spots from new york to canada. Cause big l be fuckin with more keys than a janitor',
      'I’m quick to bust a mean nut in some teen slut. Big L is clean-cut with more jewels than King Tut',
      'And when it comes to gettin nookie. I’m not a rookie, I got girls that make that chick Toni Braxton look like Whoopie',
      'Since the burial of Jesus, fuck around and catch all the venereal diseases',
      'Put a hanger on a fuckin stove and let that shit sit there for like a half hour, take it off and stick it in your ass slow like Tssssssss',
      'I\'ll fuckin, I\'ll fuckin cut your kneecaps off and make you kneel in some staircase piss',
      'My chain got ammonia, watch got the bird flu. Came to the club smellin like a pound of purple.',
      'I\'ll fuckin\'...I\'ll fuckin...sew your asshole closed and keep feeding you, and feeding you, and feeding you, and feeding you.',
      'It\'s the nick nack patty wack, I still got the biggest sack.',
      'Numbing up your tonsils, like ambesol anesthetic. Cummin down your throat like chloraseptic',
      'I\'m stickin\' ice picks on the tip of ya dick. Give your testicles a swift kick, ain\'t that some shit?',
      'I scored 1.1 on my SATs, but I still push a whip with a right and left AC.',
      'Next time I\'m feeling kinda horny\nYou can come on over\nAnd I\'ll break you off\nAnd if you can\'t fuck that day baby\nJust lay back and open your mouth\nCause I have never met a girl\nThat I love in the whole wide world.',
      'For a trill, working the wheel, a pimp not a simp\nKeep the dope fiends higher than the Goodyear Blimp',
      'I\'m trapping like a fool, 30 inches on the Hummer ride\nMad \'cause I killed your buddy and I beat the homicide',
      'Young Juiceman whip more chickens than Popeye\'s\nBouldercrest working and I\'m still whipping cream pies',
      'Matter of fact, nigga, just call me when you need some dope'
    ];
    const randomAnswer = random_lyrics[Math.floor(Math.random() * random_lyrics.length)];
    msg.channel.send(randomAnswer);
  }
}
