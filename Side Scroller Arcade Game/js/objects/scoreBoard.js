/// <reference path="../constants.ts" />
/**
File Name: scoreBoard.ts
Author: Blake Murdock
Website Name: Scorboard object class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains all details to initalize a Scoreboard object
*/
var objects;
(function (objects) {
    // Scoreboard class
    var scoreBoard = (function () {
        function scoreBoard(stage, game) {
            this.labelString = "null";
            this.lives = constants.PLAYER_LIVES;
            this.score = 0;
            this.stage = stage;
            this.game = game;
            this.label = new createjs.Text(this.labelString, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            game.addChild(this.label);
        }
        // Functon to update score on screen
        scoreBoard.prototype.update = function () {
            this.labelString = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
            this.label.text = this.labelString;
        };
        return scoreBoard;
    })();
    objects.scoreBoard = scoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreBoard.js.map
