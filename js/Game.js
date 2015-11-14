//Fullscreen placement
var screenWidth = screen.width - 500;
var screenHeight = screen.height - 220;

var game = new Phaser.Game(screenWidth, screenHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update});


function preload() {
  game.load.image('Wood-Shield', 'assets/Shields/Shield Tier 1.png');
  game.load.image('Stone-Shield', 'assets/Shields/Shield Tier 2.png');
  game.load.image('Stone-Axe', 'assets/Weapons/Stone_Axe.png');
  game.load.image('Stick', 'assets/Weapons/Wood_Stick.png');
  game.load.image('Wood-Axe', 'assets/Weapons/Wood_Axe.png');
  game.load.spritesheet('Jeff', 'assets/Sprites/Jeff.png', 40, 60);
  game.load.tilemap('Lebel1', 'assets/Tiled Files/Lebelllel.json', null, Phaser.Tilemap.JSON);
  game.load.image('Enivoremtn','assets/Tiled Files/Enivoremtn.png');
}

//Sprites goes here
var Jeff;

//Game Stuff goes here
var cursors;
var left;
var right;
var idle;
var up;
var down;
var Gary;


function create() {

  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.stage.backgroundColor = "#55aa33";

  map = game.add.tilemap('Lebel1');
  map.addTilesetImage('Enivoremtn');
  map.setCollisionBetween(32);

  Gary = map.createLayer('Tiley Layar 1');
  Gary.resizeWorld();
  Gary.debug = true;


  Jeff = game.add.sprite(40, 100, 'Jeff');
  Jeff.smoothed = false;
  Jeff.anchor.setTo(.5, 0.5);
  Jeff.debug = true;


  left = Jeff.animations.add('left', [0,1], 10, true);
  right = Jeff.animations.add('right', [3,4], 10, true);
  idle = Jeff.animations.add('idle', [2], 1, true);
  up = Jeff.animations.add('up', [6,7], 10, true);
  down = Jeff.animations.add('down', [8,9], 10, true);

  game.physics.enable(Jeff, Phaser.Physics.ARCADE);

  cursors = game.input.keyboard.createCursorKeys();

}

function update() {

 //game.physics.arcade.collide(Jeff, Gary);

  Jeff.body.velocity.set(0);

    if (cursors.left.isDown)
    {
        Jeff.body.velocity.x = -100;
        Jeff.play('left');
    }
    else if (cursors.right.isDown)
    {
        Jeff.body.velocity.x = 100;
        Jeff.play('right');
    }
    else if (cursors.up.isDown)
    {
        Jeff.body.velocity.y = -100;
        Jeff.play('up');
    }
    else if (cursors.down.isDown)
    {
        Jeff.body.velocity.y = 100;
        Jeff.play('down');
    }
    else
    {
        Jeff.play('idle');

    }


}
