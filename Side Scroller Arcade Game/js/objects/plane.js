/**
File Name: plane.ts
Author: Blake Murdock
Website Name: Plane object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a plane object
*/
var objects;
(function (objects) {
    // Plane Class
    var Plane = (function () {
        function Plane(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(queue.getResult("plane"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            this.dx = 5;

            this.image.addEventListener("click", function (e) {
                createjs.Sound.play("shootAudio");
                bullet = new objects.Bullet(stage, game);
                bullets.push(bullet);
                bullets[bullets.length - 1].fireBullet();
            });

            game.addChild(this.image);
            // Play engine sound forever
            //createjs.Sound.play("engine", 0, 0, 0, -1, 1, 0);
        }
        // Function to update position of plane.
        Plane.prototype.update = function () {
            this.image.x = stage.mouseX;
            this.image.y = stage.mouseY;
        };

        // Function to destroy plane object.
        Plane.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Plane;
    })();
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map
