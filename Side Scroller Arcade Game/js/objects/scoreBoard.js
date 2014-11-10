/// <reference path="../constants.ts" />
var objects;
(function (objects) {
    var scoreBoard = (function () {
        function scoreBoard() {
            this.labelString = "null";
            this.lives = constants.PLAYER_LIVES;
            this.score = 0;
            this.label = new createjs.Text(this.labelString, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            stage.addChild(this.label);
        }
        scoreBoard.prototype.update = function () {
            this.labelString = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
            this.label.text = this.labelString;
        };
        return scoreBoard;
    })();
    objects.scoreBoard = scoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreBoard.js.map
