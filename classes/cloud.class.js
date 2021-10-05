class Cloud extends MovableObject {
    width = 2200;
    height = 400;
    y = 0;

    CLOUDS_IMAGES = [
        'img/5.Fondo/Capas/4.nubes/1.png',
        'img/5.Fondo/Capas/4.nubes/2.png',
        'img/5.Fondo/Capas/4.nubes/Completo.png'
    ];

    constructor(x) {
        super().loadImage('img/5.Fondo/Capas/4.nubes/Completo.png');
        this.loadImages(this.CLOUDS_IMAGES);

        x = Math.random() * 2200; // zahl immer zwischen 200 und 700

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 25);
    }
}