/// <reference path="constants.ts" />
/// <reference path="states/mainmenuscreen.ts" />
/// <reference path="states/playgamelevelonescreen.ts" />
/// <reference path="states/gameoverscreen.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/lava.ts" />
/// <reference path="objects/star.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/bullet.ts" />
/**
File Name: sidescroller.ts
Author: Blake Murdock
Website Name: Main TypeScript file for Star Savior Side-Scrolling Arcade Game
Purpose: This file contains initialization, preload, and state machine for the
arcade game
*/
var stage;
var game;
var queue;

// Game Objects
var plane;
var star;
var lava;
var scoreboard;
var bullet;

// Enemy Array
var enemies = [];
var bullets = [];

// State variables
var currentState;
var currentStateFunction;

// Pre-load function - this loads all of the assets ahead of time
function preload() {
    queue = new createjs.LoadQueue();

    // Load the sound plugin
    queue.installPlugin(createjs.Sound);
    createjs.Sound.alternateExtensions = ["mp3"];
    queue.addEventListener("complete", init);
    queue.loadManifest([
        { id: "gameStartAudio", src: "assets/audio/gameStart.mp3" },
        { id: "explosionAudio", src: "assets/audio/Explosion.mp3" },
        { id: "pickupAudio", src: "assets/audio/pickupStar.mp3" },
        { id: "lifeUpAudio", src: "assets/audio/lifeUp.mp3" },
        { id: "shootAudio", src: "assets/audio/Laser_Shoot.mp3" },
        { id: "plane", src: "assets/img/Endymion_Sprite.png" },
        { id: "lava", src: "assets/img/lava-tileset.png" },
        { id: "bullet", src: "assets/img/bullet-basic.png" },
        { id: "enemy", src: "assets/img/Einhander_2.png" },
        { id: "star", src: "assets/img/star.png" },
        { id: "playButton", src: "assets/img/playButton.png" },
        { id: "instructionsButton", src: "assets/img/instructionsButton.png" },
        { id: "okButton", src: "assets/img/okButton.png" },
        { id: "playAgainButton", src: "assets/img/playAgainButton.png" }
    ]);
}

// Initialization function - This is where the stage gets created, everything gets set up
function init() {
    stage = new createjs.Stage(document.getElementById("gameCanvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();

    // When game begins, current state will be opening menu (MENU_STATE)
    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event) {
    // Check current state, then update stage
    currentStateFunction();
    stage.update();
}

// This is the state machine function, that allows the game to switch to different
// screens, or states, depending on where the player is in the game
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
