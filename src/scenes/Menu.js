class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.mp3');
        this.load.audio('sfx_explosion', './assets/explosion38.mp3');
        this.load.audio('sfx_explosion2', './assets/Explosion+1.mp3');
        this.load.audio('sfx_explosion3', './assets/Explosion+3.mp3');
        this.load.audio('sfx_explosion4', './assets/Explosion+9.mp3');

        this.load.audio('sfx_rocket', './assets/rocket_shot.mp3');
    }

    create() {
       // display score
       let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#784e3c',
            color: '#f2c85e',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }
        
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0x121721).setOrigin(0, 0);
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 
        'PIRATE PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use <--> arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor= '#784e3c';
        menuConfig.color = '#f2c85e';
        this.add.text(game.config.width/2, game.config.height/2 +borderUISize + borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
      }
}

