module.exports = {
  name: 'kanye',
  description: 'ye',
  execute: (msg, args) => {
    const kanye_lyrics = [
      'The same people that tried to blackball me forgot about two things: my black balls',
      'What’s a black Beatle anyway? A fucking roach? I guess that’s why they got me sitting in fucking coach',
      'Have you ever had sex with a pharaoh? Put the pussy in a sarcophagus. Now she claiming that I bruised her esophagus',
      'My apologies, are you into astrology. Cause I’m tryin’ to make it to Uranus',
      'I keep it 300 like the romans',
      'They be ballin in the D-League. I be speaking Swaghili',
      'And if life’s a bitch, bet she suck my dick, huh I bet she fucked the whole clique, huh',
      'Eatin Asian pussy, all I need was sweet and sour sauce',
      'I just talked to Jesus. He said “What up, Yeezus?!?” I said “Shit, I’m chillin tryna stack these millions',
      'Mayonnaise-colored Benz, I push Miracle Whips'
      // 'Now, if I fuck this model.\n And she just bleached her asshole\n And I get bleach on my T-shirt\n I\'ma feel like an asshole'
    ];
    const randomAnswer = kanye_lyrics[Math.floor(Math.random() * kanye_lyrics.length)];
    msg.channel.send(randomAnswer);
  }
}
