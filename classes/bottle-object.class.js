class BottleObjects extends DrawableObject {

    height = 90;
    width = 80;

    BOTTLE_IMAGE = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada1.png'
    ];

    constructor() {
        super().loadImage('img/6.botella/1.Marcador.png');
        this.loadImages(this.BOTTLE_IMAGE);
        this.x = 200 + Math.random() * 1800;
        this.y = 100 + Math.random() * 150;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.BOTTLE_IMAGE);
        }, 200);
    }
}