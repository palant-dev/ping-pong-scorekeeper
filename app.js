document.addEventListener('DOMContentLoaded', () => {
    const playerOneScore = document.querySelector('#player-one-score');
    const playerTwoScore = document.querySelector('#player-two-score');
    const goal = document.querySelector('.number-selector');
    const playerOneUp = document.querySelector('.player-one-scores');
    const playerTwoUp = document.querySelector('.player-two-scores');
    const reset = document.querySelector('.reset');

    playerOneScore.innerText = 0;
    playerTwoScore.innerText = 0;

    playerOneUp.addEventListener('click', () => {
        playerOneScore.innerText = parseInt(playerOneScore.innerText) + 1;
        if (parseInt(playerOneScore.innerText) == goal.value) {
            playerOneScore.style.color = 'green';
            playerTwoScore.style.color = 'red';
            disableButtons();
        }
    });

    playerTwoUp.addEventListener('click', () => {
        playerTwoScore.innerText = parseInt(playerTwoScore.innerText) + 1;
        if (parseInt(playerTwoScore.innerText) == goal.value) {
            playerOneScore.style.color = 'red';
            playerTwoScore.style.color = 'green';
            disableButtons();
        }
    });

    reset.addEventListener('click', () => {
        playerOneScore.innerText = 0;
        playerTwoScore.innerText = 0;
        playerOneUp.disabled = false;
        playerTwoUp.disabled = false;
        playerOneScore.style.color = 'black'; // Reset to default color
        playerTwoScore.style.color = 'black'; // Reset to default color
    });

    function disableButtons() {
        playerOneUp.disabled = true;
        playerTwoUp.disabled = true;
    }
});