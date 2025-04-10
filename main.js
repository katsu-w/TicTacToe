// Connect all buttons and elements

const startButton = document.getElementById("startButton");
const shopButton = document.getElementById("shopButton");
const playgroundCells = document.querySelectorAll(".playground__cell");
const modal = document.getElementById("modal");
const turnCounter = document.getElementById("turnCounter");

// Global values

let gameStarted = false;
let firstPlayerTurn = true;
let counter = 0;

// Clear cells function

function clearCells() {
    let marks = document.getElementsByClassName("playground__mark");

    if (marks.length > 0) {
        for (let i = 0; marks.length != 0; i++) {
            marks[0].remove();
        }
    }
}

// Refresh turn counter

function refreshCounter(count) {
    turnCounter.innerHTML = "Turn counter: " + count;
}

// Start button listener

startButton.addEventListener("click", () => {
    if (gameStarted) {
        startButton.textContent = "Start game";
        clearCells();
        counter = 0;
        refreshCounter(counter);
        gameStarted = false;
        modal.style.display = "flex";
    } else {
        startButton.textContent = "Retry";
        clearCells();
        gameStarted = true;
        modal.style.display = "none";
    }
});

// Add mark function

playgroundCells.forEach((element) => {
    element.addEventListener("click", function () {
        if (gameStarted) {
            if (!element.firstChild) {
                let newMark = document.createElement("div");
                element.append(newMark);
                newMark.classList.add("playground__mark");
                if (firstPlayerTurn) {
                    newMark.classList.add("x-mark");
                    firstPlayerTurn = false;
                } else {
                    newMark.classList.add("o-mark");
                    firstPlayerTurn = true;
                }

                counter++;
                refreshCounter(counter);
            }
        }
    });
});
