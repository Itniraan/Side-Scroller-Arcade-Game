module states {
    var highScore: number = 0;
    export function gameOverState() {
        ocean.update();
    }

    export function gameOver() {
        var gameOverMessage: string = "You are out of lives! Game Over!";
        var gameOverLabel: objects.Label;
        var finalScoreMessage: string = "Your final score was: " + highScore.toString();
        var finalScoreLabel: objects.Label;
        var playAgainButton: createjs.Bitmap;
        game = new createjs.Container();
        ocean = new objects.Ocean(stage, game);
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
            ocean.destroy();
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

    export function getHighScore(score: number) {
        highScore = score;
    }

} 