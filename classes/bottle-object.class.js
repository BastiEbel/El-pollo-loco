class BottleObjects extends DrawableObject {

    IMAGE_BOTTLES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ]

    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada1.png');
        this.loadImages(this.IMAGE_BOTTLES);
        this.height = 100;
        this.width = 80;
        this.x = 200 + Math.random() * 500;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGE_BOTTLES);
        }, 100);
    }
}