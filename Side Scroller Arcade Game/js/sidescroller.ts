var stage: createjs.Stage;
var game: createjs.Container;
var queue: createjs.LoadQueue;

// Game Constants
var PLAYER_LIVES = 5;

// Fonts!! (
var TITLE_SCREEN_FONT: string = "";
var TITLE_SCREEN_FONT_COLOUR: string = "";
var MAIN_GAME_FONT: string = "";
var MAIN_GAME_FONT_COLOUR: string = "";
var GAME_OVER_FONT: string = "";
var GAME_OVER_FONT_COLOUR: string = "";

function loadQueue() {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    createjs.Sound.alternateExtensions = ["mp3"];
    queue.addEventListener("complete", init);

    queue.loadManifest([
    ]);
};

// Initalization function, this sets up the stage and ticker
function init() {
    stage = new createjs.Stage(document.getElementById("gameCanvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.addEventListener("tick", gameLoop);
    createjs.Ticker.setFPS(60);
};

function gameLoop() {
    stage.update();
};