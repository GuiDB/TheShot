class Level1 extends Phaser.Scene {
    constructor() {
        super({key: "Main"});
    }

    preload() {
        this.load.image("Background", "assets/background.jpg");
        this.load.image("Player", "assets/player.png");
    }

    create() {
        this.add.image(400, 300, "Background");

        var player = this.physics.add.sprite(100, 450, "Player");
        player.scaleX = player.scaleX/5;
        player.scaleY = player.scaleY/5;
    }
}