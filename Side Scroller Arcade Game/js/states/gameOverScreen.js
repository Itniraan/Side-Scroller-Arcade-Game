/// <reference path="../constants.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/lava.ts" />
/**
File Name: gameOver.ts
Author: Blake Murdock
Website Name: This is the game over screen state for Star Savior
Purpose: This file contains all of the elements of the game over screen (high score, play again)
*/
var states;
(function (states) {
    // variable to keep high score in
    var highScore = 0;

    // Game loop, update lava in background
    function gameOverState() {
        lava.update();
    }
    states.gameOverState = gameOverState;

    // game over function, that sets up where everything is on the canvas, and the event listeners
    function gameOver() {
        // Text and labels
        var gameOverMessage = "You are out of lives! Game Over!";
        var gameOverLabel;
        var finalScoreMessage = "Your final score was: " + highScore.toString();
        var finalScoreLabel;
        gameOverLabel = new objects.Label(300, 100, gameOverMessage);
        finalScoreLabel = new objects.Label(300, 200, finalScoreMessage);

        // Buttons
        var playAgainButton;
        playAgainButton = new createjs.Bitmap(queue.getResult("playAgainButton"));

        // game and lava variables
        game = new createjs.Container();
        lava = new objects.Lava(stage, game);

        // Set up where the new objects are on the canvas
        playAgainButton.x = stage.canvas.width / 4;
        playAgainButton.y = 300;

        // Set up event listeners
        playAgainButton.addEventListener("mouseover", function () {
            playAgainButton.alpha = 0.5;
        });
        playAgainButton.addEventListener("mouseout", function () {
            playAgainButton.alpha = 1;
        });
        playAgainButton.addEventListener("click", function () {
            // If play again button is clicked, destroy all objects and start new game
            lava.destroy();
            game.removeAllChildren;
            game.removeAllEventListeners;
            stage.removeChild(game);
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });

        // Add all objects to canvas
        game.addChild(gameOverLabel);
        game.addChild(finalScoreLabel);
        game.addChild(playAgainButton);

        // Set mouse cursor to default cursor
        stage.cursor = "default";

        stage.addChild(game);
        console.log(highScore);
    }
    states.gameOver = gameOver;

    // function to retrieve high score
    function getHighScore(score) {
        highScore = score;
    }
    states.getHighScore = getHighScore;
})(states || (states = {}));
//# sourceMappingURL=gameoverscreen.js.map
