/// <reference path="../objects/star.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/enemy.ts" />
/**
File Name: collision.ts
Author: Blake Murdock
Website Name: Collision class for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains the manager for all collisions between objects
*/
var managers;
(function (managers) {
    // The Distance Function
    // Checks the distance between two objects
    function distance(p1, p2) {
        var firstPoint;
        var secondPoint;
        var theXs;
        var theYs;
        var result;

        firstPoint = new createjs.Point();
        secondPoint = new createjs.Point();

        firstPoint.x = p1.x;
        firstPoint.y = p1.y;

        secondPoint.x = p2.x;
        secondPoint.y = p2.y;

        theXs = secondPoint.x - firstPoint.x;
        theYs = secondPoint.y - firstPoint.y;

        theXs *= theXs;
        theYs *= theYs;

        result = Math.sqrt(theXs + theYs);

        return result;
    }
    managers.distance = distance;

    // Check collision between plane and star
    function planeAndStar() {
        var point1 = new createjs.Point();
        var point2 = new createjs.Point();

        point1.x = plane.image.x;
        point1.y = plane.image.y;

        point2.x = star.image.x;
        point2.y = star.image.y;
        if (distance(point1, point2) < ((plane.height * 0.5) + (star.height * 0.5))) {
            scoreboard.score += 100;
            switch (scoreboard.score) {
                case 1000:
                    createjs.Sound.play('lifeUpAudio');
                    scoreboard.lives += 1;
                    break;
                case 2000:
                    createjs.Sound.play('lifeUpAudio');
                    scoreboard.lives += 1;
                    break;
                case 3000:
                    createjs.Sound.play('lifeUpAudio');
                    scoreboard.lives += 1;
                    break;
                case 4000:
                    createjs.Sound.play('lifeUpAudio');
                    scoreboard.lives += 1;
                    break;
                case 5000:
                    createjs.Sound.play('lifeUpAudio');
                    scoreboard.lives += 1;
                    break;
                default:
                    createjs.Sound.play("pickupAudio");
                    break;
            }
            star.reset();
        }
        ;
    }
    managers.planeAndStar = planeAndStar;

    // Check collision between plane and enemy
    function planeAndEnemy(enemy) {
        var p1 = new createjs.Point();
        var p2 = new createjs.Point();
        p1.x = plane.image.x;
        p1.y = plane.image.y;
        p2.x = enemy.image.x;
        p2.y = enemy.image.y;
        if (distance(p1, p2) <= ((plane.height * 0.5) + (enemy.height * 0.5))) {
            createjs.Sound.play("explosionAudio");
            scoreboard.lives -= 1;
            enemy.reset();
        }
    }
    managers.planeAndEnemy = planeAndEnemy;

    // Check all collisions
    function collisionCheck() {
        planeAndStar();
        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            planeAndEnemy(enemies[count]);
            for (var i = 0; i < bullets.length; i++) {
                bulletAndEnemy(enemies[count], bullets[i]);
            }
        }
        ;
    }
    managers.collisionCheck = collisionCheck;

    // Check collision between bullet and enemy
    function bulletAndEnemy(enemy, bullet) {
        var point1 = new createjs.Point();
        var point2 = new createjs.Point();

        point1.x = bullet.image.x;
        point1.y = bullet.image.y;

        point2.x = enemy.image.x;
        point2.y = enemy.image.y;
        if (distance(point1, point2) < ((bullet.height * 0.5) + (enemy.height * 0.5))) {
            createjs.Sound.play("explosionAudio");
            scoreboard.score += 100;
            enemy.reset();
            bullet.bulletReset();
        }
        ;
    }
    managers.bulletAndEnemy = bulletAndEnemy;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
