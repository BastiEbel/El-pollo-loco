class MovableObject extends DrawableObject {

    speed = 0.2;
    otherDirection = false;
    isDied = false;
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

    hit() {
        this.energy -= 5;
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
        if (!this.isDied) {
            
            let i = this.currentimage % images.length;
            let path = images[i];
            
            if (path == 'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png') {
                this.isDied = true;
            } else if (path == 'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png') {
                this.isDied = true;
            }

            this.img = this.imageCache[path];
            this.currentimage++;
        }
    }

    moveRight() {
        this.x += this.speed;

    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
        currentimage = 0;
    }

    isInTheAir(){
        return this.jumping() || this.landing();
    }

    jumping(){
        return this.speedY > 0 && this.isAboveGround();
    }

    landing() {
        return this.speedY < 0 && this.isAboveGround();
    }
}