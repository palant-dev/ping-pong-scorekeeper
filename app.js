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
            alert('Player One Wins!');
            playerOneScore.innerText = 0;
            playerTwoScore.innerText = 0;
        }
    });

    playerTwoUp.addEventListener('click', () => {
        playerTwoScore.innerText = parseInt(playerTwoScore.innerText) + 1;
        if (parseInt(playerTwoScore.innerText) == goal.value) {
            alert('Player Two Wins!');
            playerOneScore.innerText = 0;
            playerTwoScore.innerText = 0;
        }
    });

    reset.addEventListener('click', () => {
        playerOneScore.innerText = 0;
        playerTwoScore.innerText = 0;
    });


});