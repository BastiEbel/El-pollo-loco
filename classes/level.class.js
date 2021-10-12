class Level {
    enemies;
    endboss
    clouds;
    bottleObjects;
    coins;
    backgroundObjects;
    level_end = 2200;

    constructor(enemies, endboss, clouds, bottleObjects, coins, backgroundObjects) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.bottleObjects = bottleObjects;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }
}