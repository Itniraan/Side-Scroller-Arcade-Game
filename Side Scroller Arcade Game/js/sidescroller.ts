﻿/// <reference path="constants.ts" />
/// <reference path="../managers/assets.ts" />
/// <reference path="../objects/jet.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/scoreboard.ts" />
var stage: createjs.Stage;
var queue;

// Game Objects
var plane: Plane;
var island: Island;
var ocean: objects.Ocean;
var scoreboard: scoreBoard;

// Cloud Array
var clouds = [];


function preload(): void {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", init);
    queue.loadManifest([
        { id: "plane", src: "img/Jet.png" },
        { id: "cloud", src: "img/cloud.png" },
        { id: "island", src: "img/island.png" },
        { id: "ocean", src: "img/ocean.gif" }
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

    for (var count = 0; count < constants.CLOUD_NUM; count++) {
        clouds[count].update();
    }

    plane.update();

    collisionCheck();
    scoreboard.update();
    stage.update();
}

// Plane Class
class Plane {
    image: createjs.Bitmap;
    width: number;
    height: number;
    constructor() {
        this.image = new createjs.Bitmap(queue.getResult("plane"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.image.regX = this.width * 0.5;
        this.image.regY = this.height * 0.5;
        this.image.x = 40;



        stage.addChild(this.image);

        // Play engine sound forever
        //createjs.Sound.play("engine", 0, 0, 0, -1, 1, 0);
    }

    update() {
        this.image.y = stage.mouseY;
    }

}

// Island Class
class Island {
    image: createjs.Bitmap;
    width: number;
    height: number;
    dy: number;

    constructor() {
        this.image = new createjs.Bitmap(queue.getResult("island"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.image.regX = this.width * 0.5;
        this.image.regY = this.height * 0.5;
        this.dy = 5;

        stage.addChild(this.image);
        this.reset();
    }

    reset() {
        this.image.y = -this.height;
        this.image.x = Math.floor(Math.random() * stage.canvas.width);
    }

    update() {
        this.image.y += this.dy;
        if (this.image.y >= (this.height + stage.canvas.height)) {
            this.reset();
        }
    }
}


// Cloud Class
class Cloud {
    image: createjs.Bitmap;
    width: number;
    height: number;
    dy: number;
    dx: number;

    constructor() {
        this.image = new createjs.Bitmap(queue.getResult("cloud"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.image.regX = this.width * 0.5;
        this.image.regY = this.height * 0.5;


        stage.addChild(this.image);
        this.reset();
    }

    reset() {
        this.image.y = -this.height;
        this.image.x = Math.floor(Math.random() * stage.canvas.width);
        this.dy = Math.floor(Math.random() * 5 + 5);
        this.dx = Math.floor(Math.random() * 4 - 2);
    }

    update() {
        this.image.y += this.dy;
        this.image.x += this.dx;
        if (this.image.y >= (this.height + stage.canvas.height)) {
            this.reset();
        }
    }

}

// The Distance Function
function distance(p1: createjs.Point, p2: createjs.Point): number {
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
function planeAndIsland() {
    var point1: createjs.Point = new createjs.Point();
    var point2: createjs.Point = new createjs.Point();

    point1.x = plane.image.x;
    point1.y = plane.image.y;

    point2.x = island.image.x;
    point2.y = island.image.y;
    if (distance(point1, point2) < ((plane.height * 0.5) + (island.height * 0.5))) {
        //createjs.Sound.play("yay");
        scoreboard.score += 100;
        island.reset();
    };
}

// Check collision between plane and cloud
function planeAndCloud(theCloud: Cloud) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();
    var cloud: Cloud = new Cloud();
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
    };
}

class scoreBoard {
    label: createjs.Text;
    labelString: string = "null";
    lives: number = constants.PLAYER_LIVES;
    score: number = 0;
    width: number;
    height: number;

    constructor() {
        this.label = new createjs.Text(this.labelString, constants.LABEL_FONT, constants.LABEL_COLOUR);
        this.update();
        this.width = this.label.getBounds().width;
        this.height = this.label.getBounds().height;
        stage.addChild(this.label);
    }

    update() {
        this.labelString = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
        this.label.text = this.labelString;
    }
}

// Main Game Function
function gameStart(): void {
    var point1: createjs.Point = new createjs.Point();
    var point2: createjs.Point = new createjs.Point();


    ocean = new objects.Ocean();
    island = new Island();
    plane = new Plane();

    for (var count = 0; count < constants.CLOUD_NUM; count++) {
        clouds[count] = new Cloud();
    }

    scoreboard = new scoreBoard();

    point1.x = 0;
    point1.y = 0;

    point2.x = 100;
    point2.y = 100;

    console.log(distance(point1, point2));

}