module states {
    export function menuState() {
        ocean.update();

    }

    export function menu() {
        // Buttons
        var playButton: createjs.Bitmap;
        var instructionsButton: createjs.Bitmap;
        var okButton: createjs.Bitmap;

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
            playButton.visible = false;
            instructionsButton.visible = false;
            okButton.visible = true;
        });
        okButton.addEventListener("mouseover", function () {
            okButton.alpha = 0.5;
        });
        okButton.addEventListener("mouseout", function () {
            okButton.alpha = 1;
        });
        okButton.addEventListener("click", function () {
            playButton.visible = true;
            instructionsButton.visible = true;
            okButton.visible = false;
        });
        game.addChild(playButton);
        game.addChild(instructionsButton);
        game.addChild(okButton);



        stage.cursor = "default";
        
        stage.addChild(game);
    }

}