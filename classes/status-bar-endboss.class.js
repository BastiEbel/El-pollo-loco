class StatusBarEndboss extends MovableObject {

    STATUSBAR_IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.STATUSBAR_IMAGES);
        this.x = 2600;
        this.y = 0;
        this.height = 50;
        this.width = 180;
        this.setEndbossLive(100);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.loadImages(this.STATUSBAR_IMAGES);
        }, 1000 / 60);
    }

    setEndbossLive(percentage) {
        this.percentage = percentage;
        let path = this.STATUSBAR_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}