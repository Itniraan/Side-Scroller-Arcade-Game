/// <reference path="constants.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/ocean.ts" />


var stage: createjs.Stage;
var game: createjs.Container;
var queue;

// Game Objects
var plane: objects.Plane;
var island: objects.Island;
var ocean: objects.Ocean;
var scoreboard: objects.scoreBoard;
var bullet: objects.Bullet;
//var newBullet: objects.Bullet;

// Cloud Array
var enemies = [];
//var bullets = [];

var currentState: number;
var currentStateFunction;


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
    optimizeForMobile();

    currentState = constants.MENU_STATE;
    changeState(currentState);

    //gameStart();
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event): void {
    currentStateFunction();
    stage.update();
}


function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
    }
}