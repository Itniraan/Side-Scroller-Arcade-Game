﻿module objects {
    // Plane Class
    export class Plane {
        stage: createjs.Stage;
        game: createjs.Container;
        image: createjs.Bitmap;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(queue.getResult("plane"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            this.dx = 5;



            game.addChild(this.image);

            // Play engine sound forever
            //createjs.Sound.play("engine", 0, 0, 0, -1, 1, 0);
        }

        update() {
            this.image.x = stage.mouseX;
            this.image.y = stage.mouseY;
        }

        destroy() {
            game.removeChild(this.image);
        }

    }
}