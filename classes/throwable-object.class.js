class ThrowableObject extends MovableObject {

    THROW_BOTTLE = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    throwing_sound = new Audio('audio/thrown.mp3');

    constructor(x, y){
        super();
        this.loadImages(this.THROW_BOTTLE);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw(100, 150);
    }

    throw(){
        this.throwing_sound.play();
        this.speedY = 30;
        this.applyGravatity();
        this.playAnimation(this.THROW_BOTTLE);
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}