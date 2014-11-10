module objects {
    // Island Class
    export class Island {
        image: createjs.Bitmap;
        width: number;
        height: number;
        dy: number;

        constructor() {
            this.image = new createjs.Bitmap(queue.getResult("island"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            this.dy = 5;

            stage.addChild(this.image);
            this.reset();
        }

        reset() {
            this.image.x = 630;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
        }

        update() {
            this.image.x -= this.dy;
            if (this.image.x < 0) {
                this.reset();
            }
        }
    }
}