module.exports = {
  name: 'snoop',
  description: 'Doggystyle',
  execute(msg, args) {
    const snoop_dogg_lyrics = [
      'He fucked the fleas off a bitch.\nHe shaked the ticks off his dick.\nAnd in the booty, he buries his motherfuckin\' bone.\nAnd if there\'s any left over\nHe\'ll roll over and take a doggy bag home',
      'Shit, I got a pocket full of rubbers and my homeboys do too\nSo turn off the lights and close the doors\nBut (but what?) we don\'t love them hoes, yeah\nSo we gon\' smoke a ounce to this\nG\'s up, hoes down, while you motherfuckers bounce to this.',
      '‘Cause when I bust my nut I\'m raising up off the cot\nDon\'t get upset, girl, that\'s just how it goes\nI don\'t love you, hoes, I\'m out the door, and I\'ll be...',
      'Guess who back in the motherfucking house\nWith a fat dick for your motherfucking mouth',
      'Now as the sun rotates and my game grows bigger\nHow many bitches wanna fuck this nigga named Snoop\nDoggy, I\'m all the above\nI\'m too swift on my toes to get caught up with you hoes\nBut see it ain\'t no fun\nIf my homies can\'t get a taste of it\nCause you know I don\'t love em',
      'Some of these niggas is so deceptive\nUsing my styles like a contraceptive\nI hope you get burnt\nSeems you haven\'t learnt\nIt\'s the knick-knack, patty-whack\nI still got the biggest sack!',
      'Speaking of hoes, I\'ll get to the point\nYou think you got the bomb cause I rolled you a joint?',
      'You\'se a flea, and I\'m the Big Dogg,\nI\'ll scratch you off my balls with my motherfuckin\' paws',
      'So I ain\'t holdin nuttin\' back\nAnd motherfucker, I got five on that twenty sack\nIt\'s like that and as a matter of fact (rat-tat-tat-tat)\n\'Cause I never hesitate to put a nigga on his back',
      'Yeah roll up the dank, and pour the drank\nAnd watch your step (why?) \'cause Doggy\'s on the gank',
      'Layin that, playin that G Thang\nShe want the nigga with the biggest nuts, and guess what?\nHe is I, and I am him, slim with the tilted brim\nWhat\'s my motherfuckin name?'
    ];
    const randomAnswer = snoop_dogg_lyrics[Math.floor(Math.random() * snoop_dogg_lyrics.length)];
    msg.channel.send(randomAnswer);
  }
}
