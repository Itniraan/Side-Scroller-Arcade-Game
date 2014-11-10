/// <reference path="../constants.ts" />
module objects {
    export class Bullet {
        image: createjs.Bitmap;
        width: number;
        height: number;

        constructor() {
            this.image = new createjs.Bitmap(queue.getResult("bullet"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;

        }

        fireBullet() {
            this.image.x = stage.mouseX + 5;
            this.image.y = stage.mouseY + 5;
            stage.addChild(this.image);
        }

        bulletUpdate(bullets = []) {
            var bLimit = bullets.length - 1;

            for (var i = bLimit; i >= 0; --i) {
                bullets[i].x += constants.BULLET_SPEED;
                if (bullets[i].x > 640) {
                    stage.removeChild(bullets[i]);
                    bullets.splice(i, 1)
                }
            }
        }

        bulletReset() {
            
        }
    }
} 