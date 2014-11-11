﻿module objects {
    // Enemy Class
    export class Enemy {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        dx: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(queue.getResult("enemy"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;


            game.addChild(this.image);
            this.reset();
        }

        reset() {
            this.image.x = 1000;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.dy = Math.floor(Math.random() * 5 + 5);
            //this.dx = Math.floor(Math.random() * 4 - 2);
        }

        update() {
            this.image.x -= this.dy;
            if (this.image.x < 0) {
                this.reset();
            }
        }

        destroy() {
            game.removeChild(this.image);
        }

    }
}