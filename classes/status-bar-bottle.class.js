class StatusBarBottle extends DrawableObject {

    BOTTLE_IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'
    ];

    bottle = 0;

    constructor() {
        super();
        this.loadImages(this.BOTTLE_IMAGES);
        this.x = 20;
        this.y = 50;
        this.height = 40;
        this.width = 150;
        this.setCollectedBottle(0);
    }

    setCollectedBottle(bottle) {
        this.bottle = bottle;
        let path = this.BOTTLE_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.bottle == 100) {
            return 5;
        } else if (this.bottle > 80) {
            return 4;
        } else if (this.bottle > 60) {
            return 3;
        } else if (this.bottle > 40) {
            return 2;
        } else if (this.bottle > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}