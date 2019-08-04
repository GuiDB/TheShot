class MainMenu extends Phaser.Scene {
    constructor() {
        super({key: "MainMenu"});
    }

    preload() {
        this.load.image("Player", "assets/player.png");
        this.load.audio("Music", ["assets/music.wav"]);
    }

    create() {
        this.soundFX = this.sound.add("Music", {loop: "true"});
        this.soundFX.play();

        if (this.soundFX.isPlaying) {
            this.soundFX.stop();
        }
        
        this.soundFX.resume();
        // Creating the main menu and level selector
        this.add.text(330, 80, "The Shot!", { fontFamily: "'Roboto Condensed'", fill: "#FFF" }).setScale(2);

        var level1 = this.add.text(100, 200, "Level 1", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setInteractive()
            .on("pointerup", () => this.scene.start("Level1"))
            .on("pointerover", () => this.enterButtonHoverState(level1))
            .on("pointerout", () => this.enterButtonRestState(level1));

        var level2 = this.add.text(100, 250, "Level 2", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setInteractive()
            .on("pointerup", () => this.scene.start("Level2"))
            .on("pointerover", () => this.enterButtonHoverState(level2))
            .on("pointerout", () => this.enterButtonRestState(level2));

        var level3 = this.add.text(100, 300, "Level 3", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setInteractive()
            .on("pointerup", () => this.scene.start("Level3"))
            .on("pointerover", () => this.enterButtonHoverState(level3))
            .on("pointerout", () => this.enterButtonRestState(level3));

        var level4 = this.add.text(100, 350, "Level 4", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setInteractive()
            .on("pointerup", () => this.scene.start("Level4"))
            .on("pointerover", () => this.enterButtonHoverState(level4))
            .on("pointerout", () => this.enterButtonRestState(level4));

        var level5 = this.add.text(100, 400, "Level 5", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setInteractive()
            .on("pointerup", () => this.scene.start("Level5"))
            .on("pointerover", () => this.enterButtonHoverState(level5))
            .on("pointerout", () => this.enterButtonRestState(level5));

        var level6 = this.add.text(200, 200, "Level 6", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setInteractive()
            .on("pointerup", () => this.scene.start("Level6"))
            .on("pointerover", () => this.enterButtonHoverState(level6))
            .on("pointerout", () => this.enterButtonRestState(level6));
        
        var level7 = this.add.text(200, 250, "Level 7", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setInteractive()
            .on("pointerup", () => this.scene.start("Level7"))
            .on("pointerover", () => this.enterButtonHoverState(level7))
            .on("pointerout", () => this.enterButtonRestState(level7));

        var level8 = this.add.text(200, 300, "Level 8", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setInteractive()
            .on("pointerup", () => this.scene.start("Level8"))
            .on("pointerover", () => this.enterButtonHoverState(level8))
            .on("pointerout", () => this.enterButtonRestState(level8));

        var level9 = this.add.text(200, 350, "Level 9", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setInteractive()
            .on("pointerup", () => this.scene.start("Level9"))
            .on("pointerover", () => this.enterButtonHoverState(level9))
            .on("pointerout", () => this.enterButtonRestState(level9));

        var level10 = this.add.text(200, 400, "Level 10", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" })
            .setInteractive()
            .on("pointerup", () => this.scene.start("Level10"))
            .on("pointerover", () => this.enterButtonHoverState(level10))
            .on("pointerout", () => this.enterButtonRestState(level10));
        
        this.add.text(520, 200, "Controls:", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" });
        this.add.text(500, 240, "Click the left mouse button,", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" });
        this.add.text(500, 260, "drag and release it to apply", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" });
        this.add.text(500, 280, "a force into the ball.", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" });
        this.add.text(500, 310, "Try it out!", { fontFamily: "Verdana, 'Times New Roman', Tahoma, serif", fill: "#FFF" });

        this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

        // Creating the player just for tutorial/fun purposes
        this.player = this.matter.add.image(100, 450, "Player");
        this.player.setCircle();
        this.player.setBounce(0.5);
        this.player.setMass(20);
        // this.player.body.setMaxSpeed(1000);
        this.player.scaleX = this.player.scaleX / 5;
        this.player.scaleY = this.player.scaleY / 5;

        this.line = this.add.line(0, 0, 0, 0, 0, 0, 0xff0000).setOrigin(0, 0);

        // Events
        this.input.on("pointerup", (e) => {
            let x = (((e.x) - (this.player.x)) * 2) / 50;
            let y = (((e.y) - (this.player.y)) * 2) / 50;
            this.player.setVelocityX(this.player.body.velocity.x + x);
            this.player.setVelocityY(this.player.body.velocity.y + y);
        });
    }

    enterButtonHoverState(button) {
        button.setStyle({ fill: "#99C1FF"});
    }

    enterButtonRestState(button) {
        button.setStyle({ fill: "#FFF" });
    }

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