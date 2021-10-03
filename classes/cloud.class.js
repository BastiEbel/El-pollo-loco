class Cloud extends MovableObject{
    width = 400;
    height = 300;
    y = 50;

    constructor(x) {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        x = Math.random() * 500; // zahl immer zwischen 200 und 700

        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}