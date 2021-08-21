class World {

    character = new Character();

    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    cloud = [
        new Cloud()
    ];

    backgroundObjects = [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0)
    ];

    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        
        this.addObjectsToMap(this.backgroundObjects);

        this.addtoMap(this.character);

        this.addObjectsToMap(this.cloud);

        this.addObjectsToMap(this.enemies);

        this.ctx.translate(-this.camera_x, 0);

        // draw immer wieder aufrufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects){
        objects.forEach(obj => {
            this.addtoMap(obj);
        });
    }

    addtoMap(move) {
        if(move.otherDirection) {
            this.ctx.save();
            this.ctx.translate(move.width, 0);
            this.ctx.scale(-1, 1);
            move.x = move.x * -1;
        }
        this.ctx.drawImage(move.img, move.x, move.y, move.width, move.height);
        if (move.otherDirection) {
            move.x = move.x * -1;
            this.ctx.restore();
        }
    }
}