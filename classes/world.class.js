class World {

    character = new Character();

    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarBottle = new StatusBarBottle();
    bottleObject = new BottleObjects();
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkColision();
            this.checkThrowObjects();
        }, 200);
    }

    checkColision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        // this.addToMap(this.bottleObject);
        this.addtoMap(this.character);

        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
        this.addtoMap(this.statusBar);
        
        this.addtoMap(this.statusBarBottle);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addtoMap(this.bottleObject);
        this.ctx.translate(-this.camera_x, 0);

        // draw immer wieder aufrufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addtoMap(obj);
        });
    }

    addtoMap(move) {
        if (move.otherDirection) {
            this.flipImage(move);
        }

        move.draw(this.ctx);
        move.drawFrame(this.ctx);

        this.ctx.beginPath();


        if (move.otherDirection) {
            this.flipImageBack(move);
        }
    }

    flipImage(move) {
        this.ctx.save();
        this.ctx.translate(move.width, 0);
        this.ctx.scale(-1, 1);
        move.x = move.x * -1;
    }

    flipImageBack(move) {
        move.x = move.x * -1;
        this.ctx.restore();
    }
}