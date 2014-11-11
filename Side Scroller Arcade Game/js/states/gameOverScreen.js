var states;
(function (states) {
    var highScore = 0;
    function gameOverState() {
    }
    states.gameOverState = gameOverState;

    function gameOver() {
        game = new createjs.Container();
        var playAgainButton;
        console.log(highScore);
    }
    states.gameOver = gameOver;

    function getHighScore(score) {
        highScore = score;
    }
    states.getHighScore = getHighScore;
})(states || (states = {}));
//# sourceMappingURL=gameOverScreen.js.map
