var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "matter",
        matter: {
            gravity: { y: 0.98 }
        }
    },
    scene: [ MainMenu, Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8, Level9, Level10 ]
}

var game = new Phaser.Game(config);