/**
File Name: lava.ts
Author: Blake Murdock
Website Name: Lava object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a Lava object
*/
var objects;
(function (objects) {
    // Lava Class
    var Lava = (function () {
        function Lava(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(queue.getResult("lava"));
            this.image2 = new createjs.Bitmap(queue.getResult("lava"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.dx = 5;

            game.addChild(this.image);
            game.addChild(this.image2);
            this.reset1();
            this.reset2();
        }
        // Function to reset position of first lava image.
        Lava.prototype.reset1 = function () {
            this.image.x = 628;
        };

        // Function to reset position of second lava image.
        Lava.prototype.reset2 = function () {
            this.image2.x = 0;
        };

        // Function to update position of lava.
        Lava.prototype.update = function () {
            this.image.x -= this.dx;
            this.image2.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset1();
            }
            if (this.image2.x <= -628) {
                this.reset2();
            }
        };

        // Function to destroy lava object.
        Lava.prototype.destroy = function () {
            this.game.removeChild(this.image);
            this.game.removeChild(this.image2);
        };
        return Lava;
    })();
    objects.Lava = Lava;
})(objects || (objects = {}));
//# sourceMappingURL=lava.js.map
