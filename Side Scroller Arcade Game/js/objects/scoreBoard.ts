/// <reference path="../constants.ts" />
module objects {
    export class scoreBoard {
        label: createjs.Text;
        stage: createjs.Stage;
        game: createjs.Container;
        labelString: string = "null";
        lives: number = constants.PLAYER_LIVES;
        score: number = 0;
        width: number;
        height: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.label = new createjs.Text(this.labelString, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            game.addChild(this.label);
        }

        update() {
            this.labelString = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
            this.label.text = this.labelString;
        }
    }
}