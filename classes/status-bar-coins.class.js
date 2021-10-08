class StatusBarCoins extends DrawableObject {

    COIN_STATUSBAR = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'
    ];

    coin = 0;

    constructor() {
        super();
        this.loadImages(this.COIN_STATUSBAR);
        this.x = 200;
        this.y = 0;
        this.height = 50;
        this.width = 150;
        this.setCollectedCoin(0);
    }

    setCollectedCoin(coin) {
        this.coin = coin;
        let path = this.COIN_STATUSBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.coin == 100) {
            return 5;
        } else if (this.coin > 80) {
            return 4;
        } else if (this.coin > 60) {
            return 3;
        } else if (this.coin > 40) {
            return 2;
        } else if (this.coin > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}