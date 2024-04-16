let currentPlayer = '❌';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function makeMove(cellIndex) {
    if (!gameOver && gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
        if (checkWinner()) {
            showPopup(currentPlayer + ' wins!');
        } else if (checkDraw()) {
            showPopup('It\'s a draw!');
        } else {
            currentPlayer = currentPlayer === '❌' ? '⭕' : '❌';
        }
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return !gameBoard.includes('');
}

function showPopup(result) {
    const popup = document.getElementById('popup');
    const popupResult = document.getElementById('popup-result');
    popupResult.textContent = result;
    popup.style.display = 'flex';
}

function resetGame() {
    currentPlayer = '❌';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.textContent = '';
    }
    const result = document.getElementById('result');
    result.textContent = '';

    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

resetGame();
