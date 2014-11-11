var objects;
(function (objects) {
    // Cloud Class
    var Cloud = (function () {
        function Cloud() {
            this.image = new createjs.Bitmap(queue.getResult("enemy"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;

            stage.addChild(this.image);
            this.reset();
        }
        Cloud.prototype.reset = function () {
            this.image.x = 1000;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.dy = Math.floor(Math.random() * 5 + 5);
            //this.dx = Math.floor(Math.random() * 4 - 2);
        };

        Cloud.prototype.update = function () {
            this.image.x -= this.dy;
            if (this.image.x < 0) {
                this.reset();
            }
        };
        return Cloud;
    })();
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map
