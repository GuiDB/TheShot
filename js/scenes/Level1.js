class Level1 extends Phaser.Scene {
    
    static clicked;

    constructor() {
        super({key: "Level1"});
    }

    preload() {
        this.load.image("Background", "assets/background.jpg");
        this.load.image("Player", "assets/player.png");
    }

    create() {
        // Configuring my Scene
        this.add.image(400, 300, "Background");

        this.player = this.physics.add.sprite(100, 450, "Player");
        this.player.setInteractive();
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.5);
        this.player.scaleX = this.player.scaleX / 5;
        this.player.scaleY = this.player.scaleY / 5;
        this.player.body.setMaxSpeed(1000);

        this.line = this.add.line(0, 0, 0, 0, 0, 0, 0xff0000).setOrigin(0, 0);

        // Adding events
        this.input.on("pointerup", (e) => {
            //if (!Level1.clicked) {
                this.player.body.velocity.x += (((e.x) - (this.player.x)) * 2);
                this.player.body.velocity.y += (((e.y) - (this.player.y)) * 2);
                Level1.clicked = true;
            //}
        });
    }

    static lastLine;

    update(delta) {
        var pointer = this.input.activePointer;
        if (pointer.isDown) {
            this.line.destroy();
            this.line = this.add.line(
                0,
                0,
                this.player.x,
                this.player.y,
                pointer.x,
                pointer.y,
                0xff0000
            ).setOrigin(0, 0);
        } else {
            this.line.destroy();
        }
    }
}