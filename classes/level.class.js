class Level {
    enemies;
    clouds;
    bottleObjects;
    coins;
    backgroundObjects;
    level_end = 2200;

    constructor(enemies, clouds, bottleObjects, coins, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.bottleObjects = bottleObjects;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }
}