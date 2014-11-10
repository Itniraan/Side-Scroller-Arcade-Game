/// <reference path="constants.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/ocean.ts" />
var stage;
var queue;

// Game Objects
var plane;
var island;
var ocean;
var scoreboard;
var bullet;
var newBullet;

// Cloud Array
var enemies = [];
var bullets = [];

function preload() {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", init);
    queue.loadManifest([
        { id: "plane", src: "assets/img/Endymion_Sprite.png" },
        { id: "island", src: "assets/img/island.png" },
        { id: "ocean", src: "assets/img/ocean.gif" },
        { id: "bullet", src: "assets/img/bullet-basic.png" },
        { id: "enemy", src: "assets/img/Einhander_2.png" }
    ]);
}

function init() {
    stage = new createjs.Stage(document.getElementById("gameCanvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    gameStart();
}

// Game Loop
function gameLoop(event) {
    ocean.update();
    island.update();

    for (var count = 0; count < constants.ENEMY_NUM; count++) {
        enemies[count].update();
    }

    plane.update();
    managers.collisionCheck();
    scoreboard.update();
    bullet.bulletUpdate(bullets);
    stage.update();
}

var Bullet = (function () {
    function Bullet() {
        this.bullet = new createjs.Bitmap("bullet");
    }
    Bullet.prototype.fireBullet = function () {
        this.bullet.x = stage.mouseX + 5;
        this.bullet.y = stage.mouseY + 5;
        bullets.push(this.bullet);
        stage.addChild(this.bullet);
    };

    Bullet.prototype.bulletUpdate = function () {
        this.bullet.x += this.dx;
        if (this.bullet.x >= (stage.canvas.width)) {
            stage.removeChild(this.bullet);
        }
    };
    return Bullet;
})();

// Main Game Function
function gameStart() {
    ocean = new objects.Ocean();
    island = new objects.Island();
    plane = new objects.Plane();
    bullet = new objects.Bullet();

    for (var count = 0; count < constants.ENEMY_NUM; count++) {
        enemies[count] = new objects.Enemy();
    }

    scoreboard = new objects.scoreBoard();

    for (var i = 0; i < constants.BULLET_POOL_SIZE; i++) {
        // Initalize the bullet object
        bullet = new objects.Bullet();
        bullets[i] = bullet;
    }

    stage.on("click", function (e) {
        console.log("Fire!!");
        bullets.push(bullet);
        bullet.fireBullet();
    });
}
//# sourceMappingURL=sidescroller.js.map
