class Level {
    enemies;
    clouds;
    bottleObjects
    backgroundObjects;
    level_end = 2200;

    constructor(enemies, clouds, bottleObjects, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.bottleObjects = bottleObjects;
        this.backgroundObjects = backgroundObjects;
    }
}