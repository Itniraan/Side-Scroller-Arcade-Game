/**
File Name: star.ts
Author: Blake Murdock
Website Name: Star object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a Star object
*/
module objects {
    // Star Class
    export class Star {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(queue.getResult("star"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            this.dy = 5;

            game.addChild(this.image);
            this.reset();
        }

        // Function to reset star off screen
        reset() {
            this.image.x = 630;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
        }

        // Function to update position of star.
        update() {
            this.image.x -= this.dy;
            if (this.image.x < 0) {
                this.reset();
            }
        }

        // Function to remove star from the game
        destroy() {
            game.removeChild(this.image);
        }
    }
}