class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    create() {
        this.background = this.add.image(0, 0, "background")
        .setOrigin(0, 0);

        let title = this.add.text(
            this.background.width / 2,
            this.background.height * 0.1,
            "BIENVENIDAS",
            {
                font: "40px Arial",
                fill: "#000000"
            }
);
title.setOrigin(0.5, 0);
        
        let logo = this.add.image(
            this.background.width / 2,
            this.background.height / 2,
            "logo"
        );
        logo.setScale(5);

        logo.setInteractive();
        logo.on("pointerdown", () => {
            this.scene.start("GameScene");
        });
    }
}

export default MenuScene;
