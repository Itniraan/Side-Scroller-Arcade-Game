/// <reference path="../constants.ts" />
var objects;
(function (objects) {
    var Bullet = (function () {
        function Bullet(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(queue.getResult("bullet"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
        }
        Bullet.prototype.fireBullet = function () {
            this.image.x = stage.mouseX + 5;
            this.image.y = stage.mouseY + 5;
            game.addChild(this.image);
        };

        Bullet.prototype.bulletUpdate = function () {
            this.image.x += constants.BULLET_SPEED;
            if (this.image.x > stage.canvas.width) {
                this.bulletReset();
            }
        };

        Bullet.prototype.bulletReset = function () {
            this.image.y = 700;
            //game.removeChild(this.image);
        };
        return Bullet;
    })();
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map
