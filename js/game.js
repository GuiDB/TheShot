var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 1000},
        }
    },
    scene: [ MainMenu, Level1, Level2, Level3 ]
}

var game = new Phaser.Game(config);