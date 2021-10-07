class Coin extends MovableObject{
    height = 150;
    width = 150;

    IMAGES_COIN = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];

    constructor(){
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_COIN);
        this.x = 200 + Math.random() * 1800;
        this.y = 50 + Math.random() * 300;
    }
}