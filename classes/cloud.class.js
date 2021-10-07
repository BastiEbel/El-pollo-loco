class Cloud extends MovableObject {
    width = 500;
    height = 400;
    y = 0;

    constructor(x) {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = x; // zahl immer zwischen 200 und 700

        this.animate();
        this.resetCloud(x);
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 25);
    }

    resetCloud(x){
        setInterval(() => {
            this.cloudStartAgain(x);
        }, 1000);
    }

    cloudStartAgain(){
        if (this.x < 0) {
            this.x = 500;
        }
    }
}