class MovableObject {
    x = 120;
    y = 138;
    img;
    height = 300;
    width = 100;
    currentimage = 0;
    speed = 0.2;

    imageCache = [];

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(imgcache) {
        imgcache.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
        
    }

    moveRight() {
        console.log('Moving right');
    }

    
    moveLeft() {
        setInterval (() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}