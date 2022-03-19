module.exports = {
  name: 'droctagon',
  description: 'DrOctagynocologist',
  execute: (msg, args) => {
    const doc_oct_lyrics = [
      'Fuck my pussy, Doctor!\n',
      'I crank up lyrical flows, spit Spats, what\'s that?\nThe pattern records, don\'t touch the DATs, yo',
      'Suckers with mics that end up with tooth decay\nI, the Doctor, stop ya, in your world, rock ya',
      'Scratches in mattress business money reattaches worldwide\nDeep inside stops the diamond rocks',
      'Hello, this is the offices of Dr. Octagon.\nIf you have insurance or medical problems, I\'m here for you for any type\nof intestine surgery, rectal rebuilding, relocated saliva glands,\nand chimpanzee acne—and of course, moosebumps. You can call 1-800-PP5-1-doodoo. I\'m in your corner.',
      'First patient, pull out the skull, remove the cancer\nBreaking his back, chisel necks for the answer',
      'Supersonic-bionic-robot-voodoo power\nEquator ex my chance to flex skills on Ampex',
      'With power meters and heaters gauge anti-freeze\nOctagon oxygen, aluminum intoxicants',
      'More ways to blow blood cells in your face\nReact with four bombs and six fire missiles',
      'Armed with seven rounds of space doo-doo pistols\nYou may not believe, living on the Earth planet',
      'My skin is green and silver, forehead looking mean\nAstronauts get played, tough like the ukelele',
      'As I move in rockets, overriding, levels\nNothing\'s aware, same data, same system',
      'Radiation leakage on the promenade deck, access for authorized personnel only',
      'Disappear again, zapped like an android\nFace the fact, I fly on planets every day\nMy nucleus friend, prepare, I return again\nMy 7XL is not yet invented'
    ];
    const randomAnswer = doc_oct_lyrics[Math.floor(Math.random() * doc_oct_lyrics.length)];
    msg.channel.send(randomAnswer);
  }
}
