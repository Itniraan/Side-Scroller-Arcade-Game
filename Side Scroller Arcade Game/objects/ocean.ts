module objects {
    // Ocean Class
    export class Ocean {
        image: createjs.Bitmap;
        image2: createjs.Bitmap;
        width: number;
        height: number;
        dx: number;

        constructor() {
            this.image = new createjs.Bitmap(queue.getResult("ocean"));
            this.image2 = new createjs.Bitmap(queue.getResult("ocean"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.dx = 5;

            stage.addChild(this.image);
            stage.addChild(this.image2);
            this.reset1();
            this.reset2();
        }

        reset1() {
            this.image.x = 628;
        }

        reset2() {
            this.image2.x = 0;
        }

        update() {
            this.image.x -= this.dx;
            this.image2.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset1();
            }
            if (this.image2.x <= -628) {
                this.reset2();
            }
        }
    }


}