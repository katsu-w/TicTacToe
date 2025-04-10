// Connect all buttons and elements

const startButton = document.getElementById('startButton');
const shopButton = document.getElementById('shopButton');
const playgroundCells = document.querySelectorAll('.playground__cell');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
const turnCounter = document.getElementById('turnCounter');

// Global values

let gameStarted = false;
let firstPlayerTurn = true;
let counter = 0;
const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Clear cells function

function clearCells() {
    let marks = document.getElementsByClassName('playground__mark');

    if (marks.length > 0) {
        for (let i = 0; marks.length != 0; i++) {
            marks[0].remove();
        }
    }
}

// Refresh turn counter

function refreshCounter() {
    turnCounter.innerHTML = 'Turn counter: ' + counter;
}

// Start button listener

startButton.addEventListener('click', () => {
    if (gameStarted) {
        startButton.textContent = 'Start game';
        clearCells();
        counter = 0;
        refreshCounter(counter);
        gameStarted = false;
        modalText.innerHTML = 'Need to start game!';
        modal.style.display = 'flex';
    } else {
        startButton.textContent = 'Retry';
        clearCells();
        gameStarted = true;
        modal.style.display = 'none';
    }
});

// victory check function

function isVictory() {
    for (let combo of combos) {
        if (
            playgroundCells[combo[0]].innerHTML ==
                playgroundCells[combo[1]].innerHTML &&
            playgroundCells[combo[1]].innerHTML ==
                playgroundCells[combo[2]].innerHTML &&
            playgroundCells[combo[0]].innerHTML != ''
        ) {
            return true;
        }
    }
    return false;
}

// victory function

function victory() {
    let mvp;
    if (counter % 2 == 0) {
        mvp = 'Second player';
    } else {
        mvp = 'First player';
    }
    modalText.innerHTML = 'Congratulations! ' + mvp + ' win!';
    modal.style.display = 'flex';
    startButton.textContent = 'Yay!';
}

// Add mark function

playgroundCells.forEach((element) => {
    element.addEventListener('click', function () {
        if (gameStarted && !isVictory()) {
            if (!element.firstChild) {
                let newMark = document.createElement('div');
                element.append(newMark);
                newMark.classList.add('playground__mark');
                if (firstPlayerTurn) {
                    newMark.classList.add('x-mark');
                    firstPlayerTurn = false;
                } else {
                    newMark.classList.add('o-mark');
                    firstPlayerTurn = true;
                }

                counter++;
                refreshCounter();
                if (isVictory()) {
                    victory();
                }
            }
        }
    });
});
