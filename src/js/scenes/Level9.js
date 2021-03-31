class Level9 extends Phaser.Scene {
    
    static clicked;

    constructor() {
        super({key: "Level9"});
    }

    preload() {
        this.load.image("Background", "assets/background-2.jpg");
        this.load.image("Player", "assets/player.png");
        this.load.image("Ground", "assets/ground.png");
        this.load.image("Finish", "assets/finish.png");
        this.load.image("Board", "assets/board.png");
        this.load.image("GroundVertical", "assets/ground-vertical.png");
        this.load.image("Box", "assets/box.png")
    }

    create() {
        Level9.clicked = false;

        // Configuring my Scene
        this.add.image(400, 300, "Background").setScale(1.5);

        // Buttons and UI
        var restart = this.add.text(50, 25, "Restart", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setInteractive()
            .on("pointerup", () => this.scene.start())
            .on("pointerover", () => this.enterButtonHoverState(restart))
            .on("pointerout", () => this.enterButtonRestState(restart));

        var mainMenu = this.add.text(660, 25, "Main menu", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setInteractive()
            .on("pointerup", () => this.scene.start("MainMenu"))
            .on("pointerover", () => this.enterButtonHoverState(mainMenu))
            .on("pointerout", () => this.enterButtonRestState(mainMenu));
        
        // Creating the player
        this.player = this.matter.add.image(100, 50, "Player")
            .setCircle()
            .setBounce(0.5)
            .setMass(20);
        this.player.scaleX = this.player.scaleX / 5;
        this.player.scaleY = this.player.scaleY / 5;

        this.line = this.add.line(0, 0, 0, 0, 0, 0, 0xff0000).setOrigin(0, 0);

        this.ground = this.matter.add.image(400, 550, "Ground")
            .setStatic(true)
            .setScale(2);
        this.ground = this.matter.add.image(-100, 275, "Ground")
            .setStatic(true)
            .setScale(2);
        this.groundv = this.matter.add.image(750, 350, "GroundVertical")
            .setStatic(true);

        this.box = this.matter.add.image(300, 442, "Box")
            .setScale(0.2);

        this.finish = this.matter.add.image(100, 500-80, "Finish")
            .setStatic(true)
            .setScale(0.5);

        this.board = this.matter.add.image(450, 420, "Board")
            .setScale(0.25);

        // Adding events
        this.input.on("pointerup", (e) => {
            if (!Level9.clicked) {
                let x = (((e.x) - (this.player.x)) * 2) / 50;
                let y = (((e.y) - (this.player.y)) * 2) / 50;
                this.player.setVelocityX(this.player.body.velocity.x + x);
                this.player.setVelocityY(this.player.body.velocity.y + y);
                Level9.clicked = true;
            }
        });

        // Physics events
        this.matter.world.on("collisionstart", (e) => {
            if (e.pairs[0].bodyA.gameObject !== null) {
                if ((e.pairs[0].bodyA.gameObject.texture.key == "Player"
                        && e.pairs[0].bodyB.gameObject.texture.key == "Finish")
                        ||
                        (e.pairs[0].bodyA.gameObject.texture.key == "Finish"
                        && e.pairs[0].bodyB.gameObject.texture.key == "Board")) {

                    this.levelFinish();
                }
            }
        });
    }

    static lastLine;

    update(delta) {
        var pointer = this.input.activePointer;
        if (pointer.isDown && !Level9.clicked) {
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

    levelFinish() {
        this.add.text(290, 220, 'You SCORED!', { fill: '#FFF' }).setScale(2);
        var nextLevel = this.add.text(330, 260, "Next Level", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setScale(1.5)
            .setInteractive()
            .on("pointerup", () => this.scene.start("Level10"))
            .on("pointerover", () => this.enterButtonHoverState(nextLevel))
            .on("pointerout", () => this.enterButtonRestState(nextLevel));

        this.matter.pause();
    }

    enterButtonHoverState(button) {
        button.setStyle({ fill: "#99C1FF"});
    }

    enterButtonRestState(button) {
        button.setStyle({ fill: "#FFF" });
    }
}