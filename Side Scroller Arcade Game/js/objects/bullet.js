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

        Bullet.prototype.bulletUpdate = function (bullets) {
            if (typeof bullets === "undefined") { bullets = []; }
            var bLimit = bullets.length - 1;

            for (var i = bLimit; i >= 0; --i) {
                bullets[i].x += constants.BULLET_SPEED;
                if (bullets[i].x > 640) {
                    stage.removeChild(bullets[i]);
                    bullets.splice(i, 1);
                }
            }
        };

        Bullet.prototype.bulletReset = function () {
        };
        return Bullet;
    })();
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map
