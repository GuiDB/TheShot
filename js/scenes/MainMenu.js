class MainMenu extends Phaser.Scene {
    constructor() {
        super({key: "MainMenu"});
    }

    create() {
        var level1 = this.add.text(100, 100, 'Level 1', { fill: '#FFF' })
            .setInteractive()
            .on('pointerup', () => this.scene.start("Level1"))
            .on('pointerover', () => this.enterButtonHoverState(level1))
            .on('pointerout', () => this.enterButtonRestState(level1));

        var level2 = this.add.text(100, 150, 'Level 2', { fill: '#FFF' })
            .setInteractive()
            .on('pointerup', () => this.scene.start("Level2"))
            .on('pointerover', () => this.enterButtonHoverState(level2))
            .on('pointerout', () => this.enterButtonRestState(level2));

        var level3 = this.add.text(100, 200, 'Level 3', { fill: '#FFF' })
            .setInteractive()
            .on('pointerup', () => this.scene.start("Level3"))
            .on('pointerover', () => this.enterButtonHoverState(level3))
            .on('pointerout', () => this.enterButtonRestState(level3));
    }

    enterButtonHoverState(button) {
        button.setStyle({ fill: '#99C1FF'});
    }

    enterButtonRestState(button) {
        button.setStyle({ fill: '#FFF' });
    }
}