﻿/// <reference path="../objects/island.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/enemy.ts" />
var managers;
(function (managers) {
    // The Distance Function
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

    // Check collision between plane and island
    function planeAndIsland() {
        var point1 = new createjs.Point();
        var point2 = new createjs.Point();

        point1.x = plane.image.x;
        point1.y = plane.image.y;

        point2.x = island.image.x;
        point2.y = island.image.y;
        if (distance(point1, point2) < ((plane.height * 0.5) + (island.height * 0.5))) {
            //createjs.Sound.play("yay");
            scoreboard.score += 100;
            island.reset();
        }
        ;
    }
    managers.planeAndIsland = planeAndIsland;

    // Check collision between plane and cloud
    function planeAndEnemy(theEnemy) {
        var p1 = new createjs.Point();
        var p2 = new createjs.Point();
        var enemy = new objects.Enemy(stage, game);
        enemy = theEnemy;
        p1.x = plane.image.x;
        p1.y = plane.image.y;
        p2.x = enemy.image.x;
        p2.y = enemy.image.y;
        if (distance(p1, p2) <= ((plane.height * 0.5) + (enemy.height * 0.5))) {
            //createjs.Sound.play("thunder");
            scoreboard.lives -= 1;
            enemy.reset();
        }
    }
    managers.planeAndEnemy = planeAndEnemy;

    // Check all collisions
    function collisionCheck() {
        planeAndIsland();
        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            planeAndEnemy(enemies[count]);
            bulletAndEnemy(enemies[count]);
        }
        ;
    }
    managers.collisionCheck = collisionCheck;

    function bulletAndEnemy(theEnemy) {
        var point1 = new createjs.Point();
        var point2 = new createjs.Point();
        var enemy = new objects.Enemy(stage, game);
        enemy = theEnemy;

        point1.x = bullet.image.x;
        point1.y = bullet.image.y;

        point2.x = enemy.image.x;
        point2.y = enemy.image.y;
        if (distance(point1, point2) < ((bullet.height * 0.5) + (enemy.height * 0.5))) {
            //createjs.Sound.play("yay");
            scoreboard.score += 100;
            enemy.reset();
        }
        ;
    }
    managers.bulletAndEnemy = bulletAndEnemy;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map