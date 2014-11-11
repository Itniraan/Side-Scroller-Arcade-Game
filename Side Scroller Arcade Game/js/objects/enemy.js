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
        Enemy.prototype.reset = function () {
            this.image.x = 1000;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.dy = Math.floor(Math.random() * 5 + 5);
            //this.dx = Math.floor(Math.random() * 4 - 2);
        };

        Enemy.prototype.update = function () {
            this.image.x -= this.dy;
            if (this.image.x < 0) {
                this.reset();
            }
        };

        Enemy.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Enemy;
    })();
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map
