﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/lava.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function menuState() {
        lava.update();
    }
    states.menuState = menuState;

    function menu() {
        // Buttons
        var playButton;
        var instructionsButton;
        var instructionsMessage = "In this game, your objective is to avoid the enemy fighters, " + "and save the stars that have been trapped in a volcano. Gain another life " + "everytime you win 1000 points, up to 5000 points. See how many points you can get!";
        var instructionsText;
        var welcomeMessage = "Welcome to Star Savior!";
        var welcomeText;

        var titleMessage = "Star Savior";
        var titleLabel;
        var okButton;

        game = new createjs.Container();
        lava = new objects.Lava(stage, game);
        playButton = new createjs.Bitmap(queue.getResult("playButton"));
        instructionsButton = new createjs.Bitmap(queue.getResult("instructionsButton"));
        okButton = new createjs.Bitmap(queue.getResult("okButton"));
        okButton.x = 284;
        okButton.y = 350;
        okButton.visible = false;
        playButton.x = stage.canvas.width / 4;
        playButton.y = 200;
        instructionsButton.x = stage.canvas.width / 4;
        instructionsButton.y = 300;
        instructionsText = new createjs.Text(instructionsMessage, constants.LABEL_FONT, constants.LABEL_COLOUR);
        welcomeText = new createjs.Text(welcomeMessage, constants.LABEL_FONT, constants.LABEL_COLOUR);
        instructionsText.y = 50;
        welcomeText.y = 10;
        welcomeText.x = 139;
        instructionsText.x = 25;

        instructionsText.lineHeight = 40;
        instructionsText.lineWidth = stage.canvas.width - 10;
        console.log(instructionsMessage);

        //instructionsLabel.lineWidth = 200;
        instructionsText.visible = false;
        welcomeText.visible = false;
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
            lava.destroy();
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
            instructionsText.visible = true;
            welcomeText.visible = true;
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
            instructionsText.visible = false;
            welcomeText.visible = false;
            okButton.visible = false;
        });
        game.addChild(titleLabel);
        game.addChild(playButton);
        game.addChild(instructionsButton);
        game.addChild(welcomeText);
        game.addChild(instructionsText);
        game.addChild(okButton);

        stage.cursor = "default";

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=mainMenuScreen.js.map
