var states;
(function (states) {
    function menuState() {
        ocean.update();
    }
    states.menuState = menuState;

    function menu() {
        game = new createjs.Container();

        stage.cursor = "default";
        ocean = new objects.Ocean(stage, game);
        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=mainMenuScreen.js.map
