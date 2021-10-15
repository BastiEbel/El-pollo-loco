class World {

    endscreen = new Endscreen();
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    chickenDead = false;
    endbossIsHit = false;
    endbossGetHit = false;
    statusBar = new StatusBar();
    statusBarBottle = new StatusBarBottle();
    statusBarCoin = new StatusBarCoins();
    statusBarEndboss = new StatusBarEndboss();
    coins = new Coin();
    countOfCoin = 0;
    coinCounter = 0;
    countOfBottles = 0;
    bottlesCount = 0;
    endboss = new Endboss();
    bottleObject = new BottleObjects();
    endScreen = [];
    throwableObjects = [];

    thrown_Audio = new Audio('audio/thrown.mp3');
    chicken_sound = new Audio('audio/chicken.mp3');
    hurts_sound = new Audio('audio/human_hurt.mp3');
    
    

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.coinCounter = this.level.coins.length;
        this.bottlesCount = this.level.bottleObjects.length;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.bottleColisionWithEnemy();
            this.collectBottleColision();
            this.collectCoinColision();
            this.colisionWithEnemy();
            this.endbossColision();
        }, 20);

        setInterval(() => {
            this.loadEndscreen();
        }, 300);

        setInterval(() => {
            this.checkThrowObjects();
        }, 150);
    }

    /**
     * Endscreen if the character is dead
     * Endscreen if the Endboss is dead
     */
    loadEndscreen() {
        let characterStatus = this.character.energy;
        let endBossStatus = level1.endboss[0].energy;

        if (characterStatus == 0) {
            setTimeout(() => {
                this.endScreen.push(new Endscreen('img/9.Intro _ Outro Image/_Game over_ screen/2.oh no you lost!.png'));
            }, 2500);
        } else if (endBossStatus == 0) {
            setTimeout(() => {
                this.endScreen.push(new Endscreen('img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png'));
            }, 2500); 
        }
    }

    /**
     * character get damage from the chicken
     * 
     */
    checkColision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.hurts_sound.play();
                this.character.hit(5);
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    /**
     * Check Coilision with Coin if it true collected
     * 
     */
    collectCoinColision() {
        this.level.coins.forEach((coinCollect) => {
            if (this.character.isColliding(coinCollect)) {
                this.checkCoin(coinCollect);
                this.updateStatusBarCoin();
            }
        });
    }

    checkCoin(coinCollect) {
        for (let i = 0; i < this.level.coins.length; i++) {
            let currentCoin = this.level.coins[i];
            if (currentCoin == coinCollect) {
                this.level.coins.splice(i, 1);
                this.countOfCoin++;
            }
        }
    }

    updateStatusBarCoin() {
        let percentage = 100 / this.coinCounter * this.countOfCoin;

        this.statusBarCoin.setCollectedCoin(percentage);
    }

    /**
     * Endboss got damage from the bottle
     * 
     */
    endbossColision() {
        this.level.endboss.forEach((endboss) => {
            for (let i = 0; i < this.throwableObjects.length; i++) {
                if (this.throwableObjects[i].isColliding(endboss)) {
                    this.updateEndBossStatus(i);
                }
            }
        });

    }

    updateEndBossStatus(i) {
        if (!this.throwableObjects[i].endbossIsHit) {
            this.throwableObjects[i].endbossIsHit = true;
            this.level.endboss[0].hit(20);
            this.statusBarEndboss.setEndbossLive(this.level.endboss[0].energy);
        }
    }

    /**
     * Chicken get damage and remove after this
     * 
     */
    colisionWithEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isInTheAir()) {
                    this.removeColisionEnemy(enemy);
                } else {
                    this.checkColision();
                }
            }
        });
    }

    bottleColisionWithEnemy() {
        this.level.enemies.forEach((enemy) => {
            for (let i = 0; i < this.throwableObjects.length; i++) {
                if (this.throwableObjects[i].isColliding(enemy)) {
                    this.removeColisionEnemy(enemy);
                }
            }
        });
    }

    removeColisionEnemy(enemy) {
        for (let i = 0; i < this.level.enemies.length; i++) {
            let currentEnemy = this.level.enemies[i];
            if (currentEnemy == enemy) {
                this.chicken_sound.play();
                this.level.enemies.splice(i, 1);
            }
        }
    }

    /**
     * Collect bottles with the character
     * 
     */
    collectBottleColision() {
        this.level.bottleObjects.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.checkBottle(bottle);
                this.updateStatusBarBottle();
            }
        });
    }

    checkBottle(bottle) {
        for (let i = 0; i < this.level.bottleObjects.length; i++) {
            let currentBottle = this.level.bottleObjects[i];
            if (currentBottle == bottle) {
                this.thrown_Audio.play();
                this.level.bottleObjects.splice(i, 1);
                this.countOfBottles++;
            }
        }
    }

    updateStatusBarBottle() {
        let percentage = 100 / this.bottlesCount * this.countOfBottles;

        this.statusBarBottle.setCollectedBottle(percentage);
    }

    /**
     * bottle it throw about keyboard key D 
     * 
     */
    checkThrowObjects() {
        if (this.character.energy > 0) {
            if (this.countOfBottles > 0) {
                if (this.keyboard.D) {
                    let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                    this.throwableObjects.push(bottle);
                    this.countOfBottles--;
                    this.updateStatusBarBottle();
                }
            }
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addtoMap(this.statusBarEndboss);
        this.addObjectsToMap(this.level.bottleObjects);
        this.addObjectsToMap(this.level.coins);
        this.addtoMap(this.character);
        this.addObjectsToMap(this.throwableObjects);


        this.ctx.translate(-this.camera_x, 0);
        this.addtoMap(this.statusBar);
        this.addtoMap(this.statusBarBottle);
        this.addtoMap(this.statusBarCoin);
        this.addObjectsToMap(this.endScreen);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);

        // draw immer wieder aufrufen
        let self = this;
        requestAnimationFrame(function () {
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
        //move.drawFrame(this.ctx);

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