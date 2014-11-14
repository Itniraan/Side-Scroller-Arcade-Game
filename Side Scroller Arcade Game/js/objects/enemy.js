/**
File Name: enemy.ts
Author: Blake Murdock
Website Name: Enemy object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a enemy object
*/
var objects;
(function (objects) {
    // Enemy Class
    var Enemy = (function () {
        function Enemy(stage, game) {
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
        // Function to reset enemy off screen
        Enemy.prototype.reset = function () {
            this.image.x = 1500;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
        };

        // Function to update position of enemy.
        Enemy.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < 0) {
                this.reset();
            }
        };

        // Function to remove enemy from the game
        Enemy.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Enemy;
    })();
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map
