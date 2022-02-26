module.exports = {
  name: 'triple6',
  description: 'Mystic Styles',
  execute: async (msg, args) => {
    const three_six_lyrics = [
      'Bitch don\'t play dumb\nStick out your tongue\nAnd let me take a plunge\nFor plenty you don\'t have to suck your thumb\nI got yum-yum',
      'Slob on my knob\nLike corn on the cob\nCheck in with me\nAnd do your job\nlay on the bed\nAnd give me head\nDon\'t have to ask\nDon\'t have to beg',
      'These bitches got me goin\'\nThe feelin\' of a warm mouth\nMan I tell you bout\' these hoes chewin\' in the South',
      'On through the wall now she howlin\' like a dog swept poor\nWe hit the floor it don\'t quit\nAnother one break it\'s just another victim of Lord Infamous late night tip',
      'Lord Infamous, the futuristic rowdy bounty hunter\nNigga, I come from the land down under',
      'Ten times out of twelve\nNine times out of ten\nGansta Boo is in it to win',
      'When I say weak ass, you say bitch!\nWeak ass, bitch!, weak ass, bitch!',
      'You ol\' pussy-ass, cake-ass, punk-ass, trick-ass, sucker-ass,\nFuck-ass, dick-in-the-booty-ass, K-Y Jelly-packing-ass nigga',
      'Yeah, nigga, y\'all know the motherfucking sco\', y\'all non-snorters, non-smokers, non-sippers,\nGet the fuck up out of here, bitch\nNigga, it\'s some sipping-ass, pouring up-ass, smoking-ass, getting high-ass niggas in here,\nThree 6, UGK, nigga, we putting it down in this motherfucker\nAnd we ain\'t playing wit\'chu, y\'all know the motherfucking sco\', homie\nNow pour it up, nigga.',
      'People always asking me, is the Three 6 high on that?\nRolling on them X pills, stuttering, pup-pup powder packs',
      'Woah, where the weed at, ain\'t like that we need that\nNyQuil will slow me down, something that keep me easy\nNothing like that yella yella, that\'ll have you itching, man\nTalking like, what\'s up, fool? Vocal chords sounding lame',
      'Gone on coke, eyes all bucked, this here shit\'ll knock you down\nKnock you out, make you fall asleep when you\'re on them wheels',
      'She popped her a pill of X, and drank on some orange juice\nAnd just when you thought she was freaking, she done got super loose',
      'Juice got weed Juice got pills\nJuice got the work on the corner cuttin deals',
      'We ball out in the club wit our niggaz stayin trill\nWe never wrote a check just them big face bills\nA playa drinkin Makers, Marker, cranberry vodka\nWearin a mink coat thats furry as Chewbacca',
      'Nose all runny\nFound a snow bunny\nTake her to da\' crib\nMake her drink cummy',
      'Cocaine Blaine that\'s my dog\nI called him up to house this slut\nWe gon\' fuck her in the back of da\' bus\nAnd fill her nose up full o\' dat\' dust',
      'In da\' bathroom \'bout two whole hours\nGettin\' real high passed out on the floor\nFuck that shit niggas\' on the frame\nTake \'em 1 on 1 back in the game',
      'Used to be my nigga\nNow you fake\nBut I stomp on you trick in the grass\nYou little snake bitch'
    ];
    const randomAnswer = three_six_lyrics[Math.floor(Math.random() * three_six_lyrics.length)];
    msg.channel.send(randomAnswer);
  }
}
