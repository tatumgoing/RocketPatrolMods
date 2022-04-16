let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;


// point breakdown lets GOOOOO
// new UI, sound, and art: 60 points
// All the spaceships have been replaced with sloops and galleons. 
//I also recolored all the UI to resemble wooden planks to fit my pirate theme, with gold accents for a 'treasure' kind of feel.
//All the sounds have been replaced with pirate-like sounds as well!

// new spaceship type w/ new artwork...: 20 pts
// The sloop is the furthest from the rocket, I coded it to be faster and worth more points by changing the spaceship constructor.

// impliment parallax scrolling: 10 pts
// i added a sprite 'starfield2' that has dark ocean waves that move at a different speed than the background sprite

// Create 4 new explosion SFX and randomize which one plays on impact: 10 pts
// I added four more explosion effects  



