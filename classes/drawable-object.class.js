class DrawableObject {
    imageCache = {};
    
    img;
    currentimage = 0;
    x = 120;
    y = 138;
    height = 300;
    width = 100;
    
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    
    loadImages(imgcache) {
        imgcache.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}