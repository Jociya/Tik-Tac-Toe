// ... (existing JavaScript code)

function showPopup(result) {
    const popup = document.getElementById('popup');
    const popupResult = document.getElementById('popup-result');
    popupResult.textContent = result;
    popup.style.display = 'block';
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.textContent = '';
    }
    const result = document.getElementById('result');
    result.textContent = '';

    // Reset the popup
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

resetGame();
