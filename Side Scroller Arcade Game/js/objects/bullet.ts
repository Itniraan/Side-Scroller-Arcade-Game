﻿/// <reference path="../constants.ts" />
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