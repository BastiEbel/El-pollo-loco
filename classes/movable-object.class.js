class MovableObject extends DrawableObject {

    lastIdle = 0;
    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;


    applyGravatity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 180;
        }
    }

    isColliding(move) {
        return this.x + this.width > move.x &&
            this.y + this.height > move.y &&
            this.x < move.x &&
            this.y < move.y + move.height;
    }

    hit(z) {
        this.energy -= z;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    playAnimation(images) {
        let i = this.currentimage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentimage++;
    }

    moveRight() {
        this.x += this.speed;

    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.currentimage = 0;
        this.speedY = 30;
    }

    isInTheAir() {
        return this.jumping() || this.landing();
    }

    jumping() {
        return this.speedY > 0 && this.isAboveGround();
    }

    landing() {
        return this.speedY < 0 && this.isAboveGround();
    }

    isIdle(){
        this.lastIdle = new Date().getTime();
    }

    longIdle(){
        let timepassed = new Date().getTime() - this.lastIdle;
        timepassed = timepassed / 1000;
        
        return timepassed < 5;
    }
}