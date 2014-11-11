/// <reference path="constants.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/ocean.ts" />
var stage;
var game;
var queue;

// Game Objects
var plane;
var island;
var ocean;
var scoreboard;
var bullet;

//var newBullet: objects.Bullet;
// Cloud Array
var enemies = [];

//var bullets = [];
var currentState;
var currentStateFunction;

function preload() {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    createjs.Sound.alternateExtensions = ["mp3"];
    queue.addEventListener("complete", init);
    queue.loadManifest([
        { id: "gameStartAudio", src: "assets/audio/gameStart.mp3" },
        { id: "explosionAudio", src: "assets/audio/Explosion.mp3" },
        { id: "plane", src: "assets/img/Endymion_Sprite.png" },
        { id: "island", src: "assets/img/island.png" },
        { id: "ocean", src: "assets/img/ocean.gif" },
        { id: "bullet", src: "assets/img/bullet-basic.png" },
        { id: "enemy", src: "assets/img/Einhander_2.png" },
        { id: "playButton", src: "assets/img/playButton.png" },
        { id: "instructionsButton", src: "assets/img/instructionsButton.png" },
        { id: "okButton", src: "assets/img/okButton.png" },
        { id: "playAgainButton", src: "assets/img/playAgainButton.png" }
    ]);
}

function init() {
    stage = new createjs.Stage(document.getElementById("gameCanvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();

    currentState = constants.GAME_OVER_STATE;
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
function gameLoop(event) {
    currentStateFunction();
    stage.update();
}

function changeState(state) {
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
//# sourceMappingURL=sidescroller.js.map
