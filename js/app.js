// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.

/*-------------------------------- Constants --------------------------------*/

const STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
};

/*---------------------------- Variables (state) ----------------------------*/

let timer, gameOver;

/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');

const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');

const gameMessageEl = document.getElementById('message');

const resetBtnEl = document.getElementById('restart');

/*-------------------------------- Functions --------------------------------*/

function init() {
    resetBtnEl.classList.add('hidden');
    gameMessageEl.classList.add('hidden');
    STATE.boredom = 0;
    STATE.hunger = 0;
    STATE.sleepiness = 0;
    gameOver = false;
    timer = setInterval(runGame, 2000);
    render();
}

function runGame() {
    updateStates();
    checkGameOver();
    render();
}

function render() {
    if (gameOver) {
        clearInterval(timer);
        resetBtnEl.classList.remove('hidden');
        gameMessageEl.classList.remove('hidden');
    }
    boredomStatEl.textContent = STATE.boredom;
    hungerStatEl.textContent = STATE.hunger;
    sleepinessStatEl.textContent = STATE.sleepiness;
}

function updateStates() {
    STATE.boredom += Math.floor(Math.random() * 4);
    STATE.hunger += Math.floor(Math.random() * 4);
    STATE.sleepiness += Math.floor(Math.random() * 4);
}

function checkGameOver() {
    if (STATE.boredom >= 10 || STATE.hunger >= 10 || STATE.sleepiness >= 10) {
        gameOver = true;
    }
}

function playBtnClick() {
    STATE.boredom = 0;
    render();
}

function feedBtnClick() {
    STATE.hunger = 0;
    render();
}

function sleepBtnClick() {
    STATE.sleepiness = 0;
    render();
}

init();

/*----------------------------- Event Listeners -----------------------------*/

playBtnEl.addEventListener('click', playBtnClick);
feedBtnEl.addEventListener('click', feedBtnClick);
sleepBtnEl.addEventListener('click', sleepBtnClick);

resetBtnEl.addEventListener('click', init);