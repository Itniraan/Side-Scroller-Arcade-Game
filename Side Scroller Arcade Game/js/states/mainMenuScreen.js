var states;
(function (states) {
    function menuState() {
        ocean.update();
    }
    states.menuState = menuState;

    function menu() {
        // Buttons
        var playButton;
        var instructionsButton;
        var instructionsMessage = "Welcome to Star Savior! \nIn this game, your objective is to avoid the enemy fighters, and save the stars that have been trapped in the desert.";
        var instructionsLabel1;
        var instructionsLabel2;
        var instructionsLabel3;
        var instructionsLabel4;
        var instructionsLabel5;
        var titleMessage = "Star Savior";
        var titleLabel;
        var okButton;

        game = new createjs.Container();
        ocean = new objects.Ocean(stage, game);
        playButton = new createjs.Bitmap(queue.getResult("playButton"));
        instructionsButton = new createjs.Bitmap(queue.getResult("instructionsButton"));
        okButton = new createjs.Bitmap(queue.getResult("okButton"));
        okButton.x = 284;
        okButton.y = 300;
        okButton.visible = false;
        playButton.x = stage.canvas.width / 4;
        playButton.y = 200;
        instructionsButton.x = stage.canvas.width / 4;
        instructionsButton.y = 300;
        instructionsLabel1 = new objects.Label(200, 50, instructionsMessage);

        //instructionsLabel.lineWidth = 200;
        instructionsLabel1.visible = false;
        titleLabel = new objects.Label(284, 50, titleMessage);
        titleLabel.font = "50px Consolas";

        playButton.addEventListener("mouseover", function () {
            playButton.alpha = 0.5;
        });
        playButton.addEventListener("mouseout", function () {
            playButton.alpha = 1;
        });
        playButton.addEventListener("click", function () {
            createjs.Sound.play('gameStartAudio');
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
            titleLabel.visible = false;
            playButton.visible = false;
            instructionsButton.visible = false;
            instructionsLabel1.visible = true;
            okButton.visible = true;
        });
        okButton.addEventListener("mouseover", function () {
            okButton.alpha = 0.5;
        });
        okButton.addEventListener("mouseout", function () {
            okButton.alpha = 1;
        });
        okButton.addEventListener("click", function () {
            titleLabel.visible = true;
            playButton.visible = true;
            instructionsButton.visible = true;
            instructionsLabel1.visible = false;
            okButton.visible = false;
        });
        game.addChild(titleLabel);
        game.addChild(playButton);
        game.addChild(instructionsButton);
        game.addChild(instructionsLabel1);
        game.addChild(okButton);

        stage.cursor = "default";

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=mainMenuScreen.js.map
