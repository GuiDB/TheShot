class Level2 extends Phaser.Scene {
    constructor() {
        super({key: "Level2"});
    }

    preload() {
        this.load.image("Background", "assets/background.jpg");
        this.load.image("Player", "assets/player.png");
    }

    create() {
        this.add.image(400, 300, "Background");

        var player = this.physics.add.sprite(100, 450, "Player");
        player.scaleX = player.scaleX / 5;
        player.scaleY = player.scaleY / 5;

        this.input.on('pointerup', (e) => {
            player.body.velocity.x += (((e.x) - (player.x)) * 2);
            player.body.velocity.y += (((e.y) - (player.y)) * 2);
        });
    }
}