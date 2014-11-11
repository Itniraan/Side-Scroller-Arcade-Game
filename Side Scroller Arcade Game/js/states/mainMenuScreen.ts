module states {
    export function menuState() {
        ocean.update();

    }

    export function menu() {
        game = new createjs.Container();

        stage.cursor = "default";
        ocean = new objects.Ocean(stage, game);
        stage.addChild(game);
    }

}