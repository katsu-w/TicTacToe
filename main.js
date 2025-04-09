// Connect all buttons

const startButton = document.getElementById('startButton');
const shopButton = document.getElementById('shopButton');
const playgroundCells = document.querySelectorAll('.playground__cell');
// Global values

let gameStarted = false;
let firstPlayerTurn = true;

// Clear cells function

function clearCells() {
    let marks = document.getElementsByClassName('cell__mark');
    console.log(marks.lenght);
    if (marks.length > 0) {
        for (let i = 0; marks.length != 0; i++) {
            marks[0].remove();
            console.log(i);
            console.log(marks);
        }
    }
}

// Start button listener

startButton.addEventListener('click', () => {
    if (gameStarted) {
        startButton.textContent = "Start game";
        clearCells();
        gameStarted = false;
    } else {
        startButton.textContent = "Retry";
        clearCells();
        gameStarted = true;
    }
});

// Add mark function

playgroundCells.forEach((element) => {
    element.addEventListener('click', function () {
        if (gameStarted) {
            if (!element.firstChild) {
                let newMark = document.createElement("div");
                element.append(newMark);
                newMark.classList.add('cell__mark');
                if (firstPlayerTurn) {
                    newMark.classList.add('x-mark');
                    firstPlayerTurn = false;
                } else {
                    newMark.classList.add('o-mark');
                    firstPlayerTurn = true;
                }
            }
        }
    });
});