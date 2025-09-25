class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    create() {
        this.background = this.add.image(0, 0, "background")
        .setOrigin(0, 0);

        this.keys = ["apple", "candy", "rubber_duck"];
        this.items = [];
        this.spawnTimer = 0;
        this.spawnInterval = 180; 
    }

    update() {
        this.spawnTimer++;

        if (this.spawnTimer >= this.spawnInterval) {
            this.spawnTimer = 0;
            this.spawnRandomItem();
        }

        this.items.forEach(item => {
            item.x += item.dx;
            item.y += item.dy;

            if (item.x <= 0 || item.x >= this.background.width - item.width) {
                item.dx *= -1;
            }
            if (item.y <= 0 || item.y >= this.background.height - item.height) {
                item.dy *= -1;
            }
        });
    }

    spawnRandomItem() {
        let index = Phaser.Math.Between(0, this.keys.length - 1);
        let randomKey = this.keys[index];

        let x = Phaser.Math.Between(50, this.background.width - 50);
        let y = Phaser.Math.Between(50, this.background.height - 50);

        let item = this.add.sprite(x, y, randomKey).setInteractive();
        item.dx = Phaser.Math.Between(0, 1) === 0 ? -1 : 1;
        item.dy = Phaser.Math.Between(0, 1) === 0 ? -1 : 1;
        item.on("pointerdown", () => {
            item.destroy();
            this.items = this.items.filter(i => i !== item);
        });

        this.items.push(item);
    }
}

export default GameScene;
