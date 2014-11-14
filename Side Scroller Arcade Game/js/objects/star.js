/**
File Name: star.ts
Author: Blake Murdock
Website Name: Star object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a Star object
*/
var objects;
(function (objects) {
    // Star Class
    var Star = (function () {
        function Star(stage, game) {
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
        Star.prototype.reset = function () {
            this.image.x = 630;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
        };

        // Function to update position of star.
        Star.prototype.update = function () {
            this.image.x -= this.dy;
            if (this.image.x < 0) {
                this.reset();
            }
        };

        // Function to remove star from the game
        Star.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Star;
    })();
    objects.Star = Star;
})(objects || (objects = {}));
//# sourceMappingURL=star.js.map
