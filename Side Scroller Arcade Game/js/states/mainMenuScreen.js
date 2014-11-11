var states;
(function (states) {
    function menuState() {
        ocean.update();
    }
    states.menuState = menuState;

    function menu() {
        game = new createjs.Container();
        ocean = new objects.Ocean(stage, game);
        playButton = new createjs.Bitmap(queue.getResult("playButton"));
        instructionsButton = new createjs.Bitmap(queue.getResult("instructionsButton"));
        playButton.x = stage.canvas.width / 4;
        playButton.y = 200;
        instructionsButton.x = stage.canvas.width / 4;
        instructionsButton.y = 300;
        playButton.addEventListener("mouseover", function () {
            playButton.alpha = 0.5;
        });
        playButton.addEventListener("mouseout", function () {
            playButton.alpha = 1;
        });
        playButton.addEventListener("click", function () {
            ocean.destroy();
            game.removeAllChildren;
            game.removeAllEventListeners;
            stage.removeChild(game);
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });
        instructionsButton.addEventListener("mouseover", function () {
            instructionsButton.alpha = 0.5;
        });
        instructionsButton.addEventListener("mouseout", function () {
            instructionsButton.alpha = 1;
        });
        instructionsButton.addEventListener("click", function () {
            playButton.visible = false;
            instructionsButton.visible = false;
        });
        game.addChild(playButton);
        game.addChild(instructionsButton);

        stage.cursor = "default";

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=mainMenuScreen.js.map
