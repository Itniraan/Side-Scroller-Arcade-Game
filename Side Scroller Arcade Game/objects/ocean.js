var objects;
(function (objects) {
    // Ocean Class
    var Ocean = (function () {
        function Ocean() {
            this.image = new createjs.Bitmap(queue.getResult("ocean"));
            this.image2 = new createjs.Bitmap(queue.getResult("ocean"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.dx = 5;

            stage.addChild(this.image);
            stage.addChild(this.image2);
            this.reset1();
            this.reset2();
        }
        Ocean.prototype.reset1 = function () {
            this.image.x = 628;
        };

        Ocean.prototype.reset2 = function () {
            this.image2.x = 0;
        };

        Ocean.prototype.update = function () {
            this.image.x -= this.dx;
            this.image2.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset1();
            }
            if (this.image2.x <= -628) {
                this.reset2();
            }
        };
        return Ocean;
    })();
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map
