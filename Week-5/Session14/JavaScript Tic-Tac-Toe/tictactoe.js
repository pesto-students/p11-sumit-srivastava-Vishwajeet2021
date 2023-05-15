let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
  IN_PROGRESS: 'inProgress',
  PLAYER_WON: 'playerWon',
  COMPUTER_WON: 'computerWon',
  DRAW: 'draw',
};

function domLoaded() {
  const newGameButton = document.getElementById('newGameButton');
  const gameBoardButtons = getGameBoardButtons();

  newGameButton.addEventListener('click', newGame);
  gameBoardButtons.forEach((button) => {
    button.addEventListener('click', boardButtonClicked);
  });

  newGame();
}

function getGameBoardButtons() {
  const buttons = [];
  const gameBoard = document.getElementById('gameBoard');
  for (let i = 0; i < gameBoard.children.length; i++) {
    const row = gameBoard.children[i];
    for (let j = 0; j < row.children.length; j++) {
      buttons.push(row.children[j]);
    }
  }
  return buttons;
}

function newGame() {
  clearTimeout(computerMoveTimeout);
  computerMoveTimeout = 0;

  const gameBoardButtons = getGameBoardButtons();
  gameBoardButtons.forEach((button) => {
    button.innerHTML = '';
    button.className = '';
    button.removeAttribute('disabled');
  });

  playerTurn = true;
  document.getElementById('turnInfo').textContent = 'Your turn';
}

function boardButtonClicked(event) {
  const button = event.target;
  if (playerTurn && button.innerHTML === '') {
    button.innerHTML = 'X';
    button.className = 'x';
    button.setAttribute('disabled', '');
    switchTurn();
  }
}

function switchTurn() {
  const result = checkForWinner();
  if (result === gameStatus.IN_PROGRESS) {
    playerTurn = !playerTurn;
    document.getElementById('turnInfo').textContent = playerTurn ? 'Your turn' : 'Computer\'s turn';
    if (!playerTurn) {
      computerMoveTimeout = setTimeout(makeComputerMove, 1000);
    }
  } else {
    playerTurn = false;
    switch (result) {
      case gameStatus.PLAYER_WON:
        document.getElementById('turnInfo').textContent = 'You win!';
        break;
      case gameStatus.COMPUTER_WON:
        document.getElementById('turnInfo').textContent = 'Computer wins!';
        break;
      case gameStatus.DRAW:
        document.getElementById('turnInfo').textContent = 'Draw game';
        break;
    }
  }
}

function makeComputerMove() {
  const gameBoardButtons = getGameBoardButtons();
  const availableButtons = gameBoardButtons.filter(button => button.innerHTML === '');

  if (availableButtons.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableButtons.length);
    const button = availableButtons[randomIndex];
    button.innerHTML = 'O';
    button.className = 'o';
    button.setAttribute('disabled', '');
    switchTurn();
  }
}
