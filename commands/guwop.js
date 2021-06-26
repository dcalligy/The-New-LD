module.exports = {
    name: 'guwop',
    description: 'It\'s gucci time!',
    execute(msg, args) {
        const gucci_mane = [
          'Overdose of sauce, no meat, just sauce',
          'I pushed a lot of pills, a lot of peas, a lot of powder, It\'s Gucci Mane La Fleur and jiggalo ya cowards.',
          'Gucci Mane broke; pussy nigga is ya stupid?',
          'Trap boys get bricks, athletes get trophies Gucci mane got cake, it\'s my birthday party Want a sweet 16? Thats two times forty!!',
          'My chain got ammonia, watch got the bird flu. Came to the club smellin like a pound of purple.',
          'Still got nasal flow I think I need some claritin.',
          'Girls are like buses, miss one, next fifteen, one comin.',
          'Dope fiend Willie used to finger fuck my rims',
          'Wanna be like Gucci? Little buddy eat your vegetables.',
          'That made me laugh ’cause I’m the king. I cut your head off like the jester',
          'My jewelry game sick, I think my jeweler need chemo',
          'I love bad bitches, so I’m a lesbian.',
          'I don’t feel you cuz I’m paraplegic, where’s my paralegal?',
          'Gucci trap-a-nometry I’m a hustle-ologist.Way I make it rain you could call me meteorologist',
          'Gucci so flossy, all my broads are bossy. Head til’ I’m nauseous, they keep me exhausted',
          'Gucci Mane crazy I might pull up on a zebra. Land on top a eagle smoke a joint of reefa',
          'Like a pigeon in the sky, I just shitted on your ride',
          'Ain\'t got no comparison and I ain\'t being arrogant.',
          'I ball all through the winter and I stunt all through the summer.',
          'I don\'t give a damn how you feel about me, I sip lean pure codeine and I don\'t give a damn what you say about me.',
          'I\'m icy, I\'m icy. So icy, so icy.',
          'A trapper but this rappin got me going places you\'ll never go!',
          'Think I’m a clone but if they cut me this sauce gon’ ooze out',
          'Hi my name is Gucci Mane, I’m addicted to everything. Bad bitch, fast cars, weed and promethazine',
          'If a man does not have the sauce, then he is lost. But the same man can be lost in the sauce.',
          'I stay higher than giraffe pussy',
          'Like a pigeon in the sky, I just shitted on your ride',
          'Gucci Mane broke; pussy nigga is ya stupid?',
          'Trap boys get bricks, athletes get trophies Gucci mane got cake, it\'s my birthday party Want a sweet 16? Thats two times forty!!',
          'Gucci so flossy, all my broads are bossy. Head til’ I’m nauseous, they keep me exhausted'
        ];
        const randomAnswer = gucci_mane[Math.floor(Math.random() * gucci_mane.length)];
        msg.channel.send(randomAnswer);
    }
}
