/// <reference path="../constants.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/lava.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../objects/scoreboard.ts" />
/**
File Name: playGameLevelOne.ts
Author: Blake Murdock
Website Name: This is the game play screen state for Star Savior
Purpose: This file contains all of the elements of the game play screen
*/
var states;
(function (states) {
    // Game loop function, that makes sure everything runs smoothly
    function playState() {
        lava.update();
        star.update();

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count].update();
        }
        managers.collisionCheck();
        console.log(managers.collisionCheck());
        for (var i = 0; i < bullets.length; i++) {
            bullets[i].bulletUpdate();
        }

        plane.update();
        scoreboard.update();

        // If lives is 0 or lower, destroy all objects and go to gameover screen
        if (scoreboard.lives <= 0) {
            states.getHighScore(scoreboard.score);
            stage.removeChild(game);
            plane.destroy();
            lava.destroy();
            star.destroy();

            game.removeAllChildren();
            game.removeAllEventListeners();
            stage.removeChild(game);

            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    // play state Function
    function play() {
        game = new createjs.Container();

        // Set mouse cursor to none (avatar will take place of cursor
        stage.cursor = "none";
        lava = new objects.Lava(stage, game);
        star = new objects.Star(stage, game);
        plane = new objects.Plane(stage, game);

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count] = new objects.Enemy(stage, game);
        }

        scoreboard = new objects.scoreBoard(stage, game);

        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=playGameLevelOneScreen.js.map
