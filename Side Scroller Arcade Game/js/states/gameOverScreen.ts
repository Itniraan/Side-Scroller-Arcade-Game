module states {
    var highScore: number = 0;
    export function gameOverState() {
        
    }

    export function gameOver() {
        game = new createjs.Container();
        var playAgainButton;
        console.log(highScore);
    }

    export function getHighScore(score: number) {
        highScore = score;
    }

} 