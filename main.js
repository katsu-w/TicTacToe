// Connect all buttons

const startButton = document.getElementById('startButton');
const shopButton = document.getElementById('shopButton');
const playgroundCells = document.querySelectorAll('.playground__cell');
// Global values

let gameStarted = false;

// Clear cells function

function clearCells() {
    let marks = document.getElementsByClassName('cell__mark');
    if (marks.length > 0) {
        for (let i = 0; i <= marks.length; i++) {
            marks[0].remove();
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
        let newMark = document.createElement("div");
        element.append(newMark);
        newMark.classList.add('cell__mark');
    });
});