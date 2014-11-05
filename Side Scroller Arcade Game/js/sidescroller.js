var stage;
var game;
var queue;

function loadQueue() {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    createjs.Sound.alternateExtensions = ["mp3"];
    queue.addEventListener("complete", init);

    queue.loadManifest([]);
}
;

// Initalization function, this sets up the stage and ticker
function init() {
    stage = new createjs.Stage(document.getElementById("gameCanvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.addEventListener("tick", gameLoop);
    createjs.Ticker.setFPS(60);
}
;

function gameLoop() {
    stage.update();
}
;
//# sourceMappingURL=sidescroller.js.map
