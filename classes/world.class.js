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

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        
        this.addObjectsToMap(this.backgroundObjects);

        this.addtoMap(this.character);

        this.addObjectsToMap(this.cloud);

        this.addObjectsToMap(this.enemies);

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
        this.ctx.drawImage(move.img, move.x, move.y, move.width, move.height);
    }
}