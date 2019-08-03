class MainMenu extends Phaser.Scene {
    constructor() {
        super({key: "MainMenu"});
    }

    create() {
        var level1 = this.add.text(100, 100, 'Level 1', { fill: '#0f0' })
            .setInteractive()
            .on('pointerup', () => this.scene.start("Level1"))
            .on('pointerover', () => this.enterButtonHoverState(level1))
            .on('pointerout', () => this.enterButtonRestState(level1));

        var level2 = this.add.text(100, 150, 'Level 2', { fill: '#0f0' })
            .setInteractive()
            .on('pointerup', () => this.scene.start("Level2"))
            .on('pointerover', () => this.enterButtonHoverState(level2))
            .on('pointerout', () => this.enterButtonRestState(level2));

        this.add.text(100, 200, 'Level 3', { fill: '#0f0' })
            .setInteractive()
            .on('pointerup', () => this.scene.start("Level3"));

        this.add.text(100, 250, 'Level 4', { fill: '#0f0' })
            .setInteractive()
            .on('pointerup', () => this.scene.start("Level4"));

        this.add.text(100, 300, 'Level 5', { fill: '#0f0' })
            .setInteractive()
            .on('pointerup', () => this.scene.start("Level5"));
    }

    enterButtonHoverState(button) {
        button.setStyle({ fill: '#ff0'});
    }

    enterButtonRestState(button) {
        button.setStyle({ fill: '#0f0' });
    }
}