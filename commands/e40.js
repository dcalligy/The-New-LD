module.exports = {
    name: '40water',
    description: 'Goon with the Spoon',
    execute(msg, args) {
      const E40_lyrics = [
        'Ever told on a nigga? (nope)\nEver squeezed a trigger? (yup)',
        'Ever set a nigga up? (nope)\nEver helped a brother out when he was down on his luck? (yup)',
        'You a sap? (nope)\nYou a boss player, you a mack? (yup)',
        'Starving? (nope), Dinner? (yup)',
        'You still sell dope? (nope)\nNow you cleaner than a bar of Dove soap? (yup)',
        'Everybody get choices\nI choose to get money, I\'m stuck to this bread\nEverybody got choices\nThese bitches is choosin\', I\'m all in they head',
        'Ugh, lazy? (nope)\nGot dick that\'ll drive a ho crazy? (yup)',
        'Sleep? (nope), Bust moves, hella active in the streets? (yup)',
        'Star Wars? (nope), Yoda? (yup)',
        'Was it love at first sight? (nope)\nDid she ride you like a bike? (yup)\nWas it ripe? (nope), Was her pussy tight? (yup)',
        'Your team weak? (nope)\nYou respected in the stree-neets? (yup)',
        'I don\'t like suckas in my mix (mmm mmm)\nGot my name in their mouth like tooth picks (uh huh)',
        'I don\'t pay for pussy, not a John (mmm mmm)\nSucka shit contagious like a yawn (uh huh)',
        'Never will I go to war over a ho (mmm mmm)\nBitch I\'m a motha fuckin\' buffalo (uh huh)',
        'Out of date like old people? (mmm mmm)\nIn the loop like sewing needle? (uh huh)',
        'You weak at shootin\' dice? (mmm mmm)\nYou really \'bout that life? (uh huh)',
        'You eat booty? (mmm mmm)\nYou lick coochie? (uh huh)\nBiatch!',
        'Divorced from the streets? (mmm mmm)\nBe in Dubai with the sheiks? (uh huh)',
        'Pan handlin\'? (mmm mmm)\nShippin\' and handlin\'? (uh huh)'
      ];
      const randomAnswer = E40_lyrics[Math.floor(Math.random() * E40_lyrics.length)];
      msg.channel.send(randomAnswer);
    }
}
