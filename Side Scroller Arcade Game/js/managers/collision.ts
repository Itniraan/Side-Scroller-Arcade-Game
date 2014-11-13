/// <reference path="../objects/star.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/enemy.ts" />
module managers {
    // The Distance Function
    export function distance(p1: createjs.Point, p2: createjs.Point): number {
        var firstPoint: createjs.Point;
        var secondPoint: createjs.Point;
        var theXs: number;
        var theYs: number;
        var result: number;

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

    // Check collision between plane and island
    export function planeAndIsland() {
        var point1: createjs.Point = new createjs.Point();
        var point2: createjs.Point = new createjs.Point();

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
        };
    }

    // Check collision between plane and cloud
    export function planeAndEnemy(theEnemy: objects.Enemy) {
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();
        var enemy: objects.Enemy = new objects.Enemy(stage, game);
        enemy = theEnemy;
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

    // Check all collisions
    export function collisionCheck() {
        planeAndIsland();
        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            planeAndEnemy(enemies[count]);
            bulletAndEnemy(enemies[count]);
        };
    }

    export function bulletAndEnemy(theEnemy: objects.Enemy) {
        var point1: createjs.Point = new createjs.Point();
        var point2: createjs.Point = new createjs.Point();
        var enemy: objects.Enemy = new objects.Enemy(stage, game);
        enemy = theEnemy;

        point1.x = bullet.image.x;
        point1.y = bullet.image.y;

        point2.x = enemy.image.x;
        point2.y = enemy.image.y;
        if (distance(point1, point2) < ((bullet.height * 0.5) + (enemy.height * 0.5))) {
            //createjs.Sound.play("yay");
            scoreboard.score += 100;
            enemy.reset();
        };
    }

}