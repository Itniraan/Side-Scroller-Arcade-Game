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
        Star.prototype.reset = function () {
            this.image.x = 630;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
        };

        Star.prototype.update = function () {
            this.image.x -= this.dy;
            if (this.image.x < 0) {
                this.reset();
            }
        };

        Star.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Star;
    })();
    objects.Star = Star;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map
