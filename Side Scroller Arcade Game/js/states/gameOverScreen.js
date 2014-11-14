/// <reference path="../constants.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/lava.ts" />
var states;
(function (states) {
    var highScore = 0;
    function gameOverState() {
        lava.update();
    }
    states.gameOverState = gameOverState;

    function gameOver() {
        var gameOverMessage = "You are out of lives! Game Over!";
        var gameOverLabel;
        var finalScoreMessage = "Your final score was: " + highScore.toString();
        var finalScoreLabel;
        var playAgainButton;
        game = new createjs.Container();
        lava = new objects.Lava(stage, game);
        gameOverLabel = new objects.Label(300, 100, gameOverMessage);
        finalScoreLabel = new objects.Label(300, 200, finalScoreMessage);

        playAgainButton = new createjs.Bitmap(queue.getResult("playAgainButton"));
        playAgainButton.x = stage.canvas.width / 4;
        playAgainButton.y = 300;

        playAgainButton.addEventListener("mouseover", function () {
            playAgainButton.alpha = 0.5;
        });
        playAgainButton.addEventListener("mouseout", function () {
            playAgainButton.alpha = 1;
        });
        playAgainButton.addEventListener("click", function () {
            lava.destroy();
            game.removeAllChildren;
            game.removeAllEventListeners;
            stage.removeChild(game);
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });

        game.addChild(gameOverLabel);
        game.addChild(finalScoreLabel);
        game.addChild(playAgainButton);

        stage.cursor = "default";

        stage.addChild(game);
        console.log(highScore);
    }
    states.gameOver = gameOver;

    function getHighScore(score) {
        highScore = score;
    }
    states.getHighScore = getHighScore;
})(states || (states = {}));
//# sourceMappingURL=gameOverScreen.js.map
