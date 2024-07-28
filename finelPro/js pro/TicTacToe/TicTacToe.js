const winnerBox = document.querySelector('.winnerBox');
const winnerText = document.querySelector('.winner');
const board = document.querySelector('.board');
const randomMoveBtn = document.getElementById('randomMove');
const cellEls = [...document.querySelectorAll('.cell')];
const restartButtonBtn = document.getElementById('restartButton');
const subtitle = document.querySelector('.sub-title');
const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

let player = 'X'
let isGameOver = false;
let thetime = new Date()

randomMoveBtn.addEventListener('click', randomMove)
restartButtonBtn.addEventListener('click', restartGame)


cellEls.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (!cell.innerText) {
            makeMove(cell)
        }
    })
})


function checkGameOver() {
    const isWin = combos.some(combo =>
        combo.every(index => cellEls[index].innerText == player)
    );

    if (isWin) {
        // show popup with winner text
        showPopUp(`the winner is: ${player}!`)
        return true;
    }

    const isTie = cellEls.every(cellEl => cellEl.innerText != "");

    if (isTie) {
        // show popup with tie text
        showPopUp(`the game is tied`)
        return true;
    }

    return false;
}

function showPopUp(msg) {
    winnerText.innerText = msg;
    winnerBox.style.display = "block";
}

function disableGame() {
    board.style.pointerEvents = "none";
    randomMoveBtn.style.pointerEvents = "none";

}

function changePlayer() {
    player = player == "X" ? "O" : "X";
    updateSubTitle()
}

function updateSubTitle() {
    subtitle.innerText = `player ${player} turn`
}

function restartGame() {
    player = "X";
    updateSubTitle()
    winnerBox.style.display = "none";
    cellEls.forEach(cell => cell.innerText = '')
    board.style.pointerEvents = "unset"
    randomMoveBtn.style.pointerEvents = "unset"

}

function makeMove(cell) {
    cell.innerText = player;
    const isGameOver = checkGameOver()

    if (isGameOver) {
        disableGame()
    } else {
        changePlayer()
    }
}

function randomMove() {
    console.log('hi');
    const emptycells = cellEls.filter(cell => cell.innerText == '')
    const index = Math.floor(Math.random() * emptycells.length);
    const emptycell = emptycells[index];
    makeMove(emptycell)
}
