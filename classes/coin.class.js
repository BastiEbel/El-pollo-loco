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
        this.x = 200 + Math.random() * 3800;
        this.y = 100 + Math.random() * 250;
    }
}