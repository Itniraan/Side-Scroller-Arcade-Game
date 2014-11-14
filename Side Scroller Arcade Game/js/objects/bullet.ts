/// <reference path="../constants.ts" />
module objects {
    export class Bullet {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(queue.getResult("bullet"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;

        }

        fireBullet() {
            this.image.x = stage.mouseX + 5;
            this.image.y = stage.mouseY + 5;
            game.addChild(this.image);
        }

        bulletUpdate() {
            this.image.x += constants.BULLET_SPEED;
            if (this.image.x > stage.canvas.width) {
                this.bulletReset();
            }
        }

        bulletReset() {
            this.image.y = 700;
            //game.removeChild(this.image);
        }
    }
} 