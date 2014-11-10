/// <reference path="../constants.ts" />
module objects {
    export class scoreBoard {
        label: createjs.Text;
        labelString: string = "null";
        lives: number = constants.PLAYER_LIVES;
        score: number = 0;
        width: number;
        height: number;

        constructor() {
            this.label = new createjs.Text(this.labelString, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            stage.addChild(this.label);
        }

        update() {
            this.labelString = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
            this.label.text = this.labelString;
        }
    }
}