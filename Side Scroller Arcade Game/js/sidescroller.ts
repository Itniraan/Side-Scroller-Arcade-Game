/// <reference path="constants.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/ocean.ts" />


var stage: createjs.Stage;
var queue;

// Game Objects
var plane: objects.Plane;
var island: objects.Island;
var ocean: objects.Ocean;
var scoreboard: objects.scoreBoard;
var bullet: objects.Bullet;
var newBullet: objects.Bullet;

// Cloud Array
var enemies = [];
var bullets = [];


function preload(): void {
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

function init(): void {
    stage = new createjs.Stage(document.getElementById("gameCanvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    gameStart();
}

// Game Loop
function gameLoop(event): void {
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



class Bullet {
    bullet: createjs.Bitmap;
    dx: number;
    constructor() {
        this.bullet = new createjs.Bitmap("bullet");

    }

    fireBullet() {
        this.bullet.x = stage.mouseX + 5;
        this.bullet.y = stage.mouseY + 5;
        bullets.push(this.bullet);
        stage.addChild(this.bullet);
    }

    bulletUpdate() {
        this.bullet.x += this.dx;
        if (this.bullet.x >= (stage.canvas.width)) {
            stage.removeChild(this.bullet);
        }
    }
}


// Main Game Function
function gameStart(): void {
    

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