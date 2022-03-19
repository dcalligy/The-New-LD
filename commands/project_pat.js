

module.exports = {
  name: 'pat',
  description: 'Crooked by da book',
  execute: (msg, args) => {
    const project_pat_lyrics =[
      'I ain\'t goin\' back to jail, I ain\'t goin\' back to jail\nI got mo\' pussy to swell, and mo\' dreams to tell',
      'Bullets do fly through air when them guns p-poppin\'\nPistol swang to ya mouth, then the blood is gushin\'',
      'Cross killers in these streets, bullets will spray\nInnocent bystander can catch a stray ya dig?',
      'Put two dollars in the air, for these two dollar niggas\nThey get mad and they fuss, they don\'t shine like us',
      'I\'m flickin\' on you snakes, I got wood, leather stitchin\'\nClothes stickin\', cause ya ridin\' bucket, cloth seats itchin\'',
      'Couldn\'t get me, saw it in the clouds, like my nigga Rickey\nMr. James, all these superfreaks, out here tryna get me',
      'Wanna hit me, wanna say, they done been \'round the truth\nIn ya bed, or the booth, I\'m the ghetto Dr. Ruth',
      'When I do, step on out, moonlight, hit the Range\nPretty jewels they attract broads, like shiny thangs',
      'When I came, to ya hood, I was new face, in the place\nGame spitter from the North, so ya wanna catch a case',
      'Cause ya see me holl\'in\' at \'cha ex-girl, don\'t \'cha?\nMurder charge for a broad who don\'t even want \'cha',
      'You suckers crazy, so y\'all out here pushin\' daisies\nOver Daisy, she was on some purple hazey',
      'Had the baby, year later on my income\nTax, so a nigga could receive mo\' income',
      'Hangin\' stout broads, \'round my arms, decoration\nThese punks give me dap, same time playa hation',
      'Erasin\', you lamers, hatin\' got\'cha famous\nConfronted by the broad, got shot in ya anus\nHeinous, heard they took the slugs out\'cha dookie roll\nGun powder and the blood burn in ya bootyhole',
      'Wanna fight, my nigga, wanna shoot, my nigga\nTalk ya gal out her cap, when ya loot my nigga',
      'Do you, my nigga, fall in love wit\' these tramps\nGoin\' raw, on her, and she did the whole Camp?\nBut you rest havin\' that, knowin\' that, she\'ll go\nLickin\' balls, suckin\' cat, knees burnt from the flo\'',
      'She got a bubble gum cap with a Gucci dats snappin\'\nWith some rhino legs and a booty that\'s flappin\'\nWith some fire-oh head \'cause you know we love cappin\'\nGot her toes done up with her fingernails matchin\'',
      'Here dat big ol\' butt that you\'re walkin\' cross the street with\nPeep this, for a happy meal can I squeeze it?',
      'Them freaky freaks I heard on the loose, let ya pockets out\nGot trick niggaz watchin\' your caboose with they wallets out',
      'You should stop, lil\' somethin\' somethin\' bad to the bone\nThat ain\'t a monkey hangin\' off ya back that\'s Donkey Kong',
      'Good googly moogly, that thang is juicy',
      'How you gon\' prance around with all that, sayin\' you ain\'t all that, Everybody at ya wanna hit ya like a ball bat',
      'That thang make ya look back, be like man who is that\nYou can see a hiny on a hiny I\'m pursuin\' that',
      'A dirty south hoody rat tryin\' to hold goodies back Waist like a wasp, butt cheeks pokin\' really fat',
      'I\'m Crown Vic old school, squeezin\' on her boo-boo\nHugged up, pokin\' in her brains so what ya wanna do',
      'You can call me Mister Whipple, I won\'t do no harmin\'\nNever to the Charmin, come holla at me woman',
      'Bwok bwok, chicken chicken\nBwok bwok, chicken heads',
      'Bald-head skally-wag\nAin\'t got no hair in back\nGelled up weaved up\nYo hair is messed'
    ];
    const randomAnswer = project_pat_lyrics[Math.floor(Math.random() * project_pat_lyrics.length)];
    msg.channel.send(randomAnswer);
  }
}
