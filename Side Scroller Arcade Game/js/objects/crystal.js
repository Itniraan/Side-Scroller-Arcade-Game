var objects;
(function (objects) {
    // Crystal Class
    var Crystal = (function () {
        function Crystal(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(queue.getResult("crystal"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            this.dy = 5;

            game.addChild(this.image);
            this.reset();
        }
        Crystal.prototype.reset = function () {
            this.image.x = 630;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
        };

        Crystal.prototype.update = function () {
            this.image.x -= this.dy;
            if (this.image.x < 0) {
                this.reset();
            }
        };

        Crystal.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Crystal;
    })();
    objects.Crystal = Crystal;
})(objects || (objects = {}));
//# sourceMappingURL=crystal.js.map
