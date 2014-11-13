/// <reference path="../constants.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    function playState() {
        ocean.update();
        star.update();

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count].update();
        }

        plane.update();
        managers.collisionCheck();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            states.getHighScore(scoreboard.score);
            stage.removeChild(game);
            plane.destroy();
            ocean.destroy();
            star.destroy();

            game.removeAllChildren();
            game.removeAllEventListeners();

            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    // play state Function
    function play() {
        game = new createjs.Container();
        stage.cursor = "none";
        ocean = new objects.Ocean(stage, game);
        star = new objects.Star(stage, game);
        plane = new objects.Plane(stage, game);
        bullet = new objects.Bullet(stage, game);

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count] = new objects.Enemy(stage, game);
        }

        scoreboard = new objects.scoreBoard(stage, game);

        stage.addChild(game);
        //for (var i = 0; i < constants.BULLET_POOL_SIZE; i++) {
        // Initalize the bullet object
        //    bullet = new objects.Bullet();
        //    bullets[i] = bullet;
        //}
        //stage.on("click", function (e) {
        //    console.log("Fire!!");
        //    bullets.push(bullet);
        //    bullet.fireBullet();
        //});
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=playGameLevelOneScreen.js.map
