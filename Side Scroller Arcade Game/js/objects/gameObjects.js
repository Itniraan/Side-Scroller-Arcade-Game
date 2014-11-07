var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var gameObjects = (function (_super) {
        __extends(gameObjects, _super);
        function gameObjects(imageString) {
            _super.call(this, managers.assets.atlas, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        return gameObjects;
    })(createjs.Sprite);
    objects.gameObjects = gameObjects;
})(objects || (objects = {}));
//# sourceMappingURL=gameObjects.js.map
