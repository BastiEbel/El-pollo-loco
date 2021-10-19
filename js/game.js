let canvas;
let world;
let keyboard = new Keyboard();

let startmusic = new Audio('audio/music.mp3');

/**
 * This function initialized the Game (Canvas) 
 * 
 **/
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

}

/**
 * start the music if the body is loaded 
 * 
 **/
function gameload() {
    startmusic.play();
}

/**
 * Set elements visible 
 * 
 **/
function visibleset() {
    document.getElementById('restartButton').classList.remove('d-none');
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('canvasImg').classList.add('d-none');
}

/**
 * onclick function for the start Game button
 * 
 **/
function startGame() {
    startmusic.pause();
    visibleset();
    init();
}

/** 
* Function to make the Game on fullscreen 
* 
**/
function goFullScreen() {
    var canvas = document.getElementById("canvas");
    if (canvas.requestFullScreen)
        canvas.requestFullScreen();
    else if (canvas.webkitRequestFullScreen)
        canvas.webkitRequestFullScreen();
    else if (canvas.mozRequestFullScreen)
        canvas.mozRequestFullScreen();
}

/**
 * keyboard keys assignment
 * 
 **/
window.addEventListener("keydown", (e) => {

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 68) {
        keyboard.D = true;
        setInterval(() => {
            keyboard.D = false;
        }, 150);
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});