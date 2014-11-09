/// <reference path="constants.ts" />
/// <reference path="managers/assets.ts" />
/// <reference path="objects/jet.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/scoreboard.ts" />
var stage;
var queue;

// Game Objects
var plane;
var island;
var ocean;
var scoreboard;
var bullet;

// Cloud Array
var clouds = [];

function preload() {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", init);
    queue.loadManifest([
        { id: "plane", src: "assets/img/Endymion_Sprite.png" },
        { id: "cloud", src: "assets/img/cloud.png" },
        { id: "island", src: "assets/img/island.png" },
        { id: "ocean", src: "assets/img/ocean.gif" },
        { id: "bullet", src: "assets/img/bullet-basic.png" }
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

    for (var count = 0; count < constants.CLOUD_NUM; count++) {
        clouds[count].update();
    }

    plane.update();
    bullet.bulletUpdate();
    collisionCheck();
    scoreboard.update();
    stage.update();
}

// Plane Class
var Plane = (function () {
    function Plane() {
        this.image = new createjs.Bitmap(queue.getResult("plane"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.image.regX = this.width * 0.5;
        this.image.regY = this.height * 0.5;
        this.dx = 5;

        stage.addChild(this.image);
        // Play engine sound forever
        //createjs.Sound.play("engine", 0, 0, 0, -1, 1, 0);
    }
    Plane.prototype.update = function () {
        this.image.x = stage.mouseX;
        this.image.y = stage.mouseY;
    };
    return Plane;
})();

var Bullet = (function () {
    function Bullet() {
        this.bullet = new createjs.Bitmap("bullet");
    }
    Bullet.prototype.fireBullet = function () {
        this.bullet.x = stage.mouseX + 5;
        this.bullet.y = stage.mouseY + 5;
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

// Island Class
var Island = (function () {
    function Island() {
        this.image = new createjs.Bitmap(queue.getResult("island"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.image.regX = this.width * 0.5;
        this.image.regY = this.height * 0.5;
        this.dy = 5;

        stage.addChild(this.image);
        this.reset();
    }
    Island.prototype.reset = function () {
        this.image.y = -this.height;
        this.image.x = Math.floor(Math.random() * stage.canvas.width);
    };

    Island.prototype.update = function () {
        this.image.y += this.dy;
        if (this.image.y >= (this.height + stage.canvas.height)) {
            this.reset();
        }
    };
    return Island;
})();

// Cloud Class
var Cloud = (function () {
    function Cloud() {
        this.image = new createjs.Bitmap(queue.getResult("cloud"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.image.regX = this.width * 0.5;
        this.image.regY = this.height * 0.5;

        stage.addChild(this.image);
        this.reset();
    }
    Cloud.prototype.reset = function () {
        this.image.y = -this.height;
        this.image.x = Math.floor(Math.random() * stage.canvas.width);
        this.dy = Math.floor(Math.random() * 5 + 5);
        this.dx = Math.floor(Math.random() * 4 - 2);
    };

    Cloud.prototype.update = function () {
        this.image.y += this.dy;
        this.image.x += this.dx;
        if (this.image.y >= (this.height + stage.canvas.height)) {
            this.reset();
        }
    };
    return Cloud;
})();

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

// Check collision between plane and cloud
function planeAndCloud(theCloud) {
    var p1 = new createjs.Point();
    var p2 = new createjs.Point();
    var cloud = new Cloud();
    cloud = theCloud;
    p1.x = plane.image.x;
    p1.y = plane.image.y;
    p2.x = cloud.image.x;
    p2.y = cloud.image.y;
    if (distance(p1, p2) <= ((plane.height * 0.5) + (cloud.height * 0.5))) {
        //createjs.Sound.play("thunder");
        scoreboard.lives -= 1;
        cloud.reset();
    }
}

// Check all collisions
function collisionCheck() {
    planeAndIsland();
    for (var count = 0; count < constants.CLOUD_NUM; count++) {
        planeAndCloud(clouds[count]);
    }
    ;
}

var scoreBoard = (function () {
    function scoreBoard() {
        this.labelString = "null";
        this.lives = constants.PLAYER_LIVES;
        this.score = 0;
        this.label = new createjs.Text(this.labelString, constants.LABEL_FONT, constants.LABEL_COLOUR);
        this.update();
        this.width = this.label.getBounds().width;
        this.height = this.label.getBounds().height;
        stage.addChild(this.label);
    }
    scoreBoard.prototype.update = function () {
        this.labelString = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
        this.label.text = this.labelString;
    };
    return scoreBoard;
})();

// Main Game Function
function gameStart() {
    var point1 = new createjs.Point();
    var point2 = new createjs.Point();

    ocean = new objects.Ocean();
    island = new Island();
    plane = new Plane();

    for (var count = 0; count < constants.CLOUD_NUM; count++) {
        clouds[count] = new Cloud();
    }

    scoreboard = new scoreBoard();

    stage.canvas.addEventListener("click", function () {
        bullet = new Bullet();
        bullet.fireBullet();
    });
}
//# sourceMappingURL=sidescroller.js.map
