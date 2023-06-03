let playerTurn = true;
let computerMoveTimeout = 0;
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const gameStatus = {
  IN_PROGRESS: 'inProgress',
  PLAYER_WON: 'playerWon',
  COMPUTER_WON: 'computerWon',
  DRAW: 'draw',
};

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

function domLoaded() {
  const newGameButton = document.getElementById('newGameButton');
  const gameBoardButtons = getGameBoardButtons();

  gameBoardButtons.forEach((button, index) => {
    button.addEventListener('click', () => boardButtonClicked(index));
  });

  newGameButton.addEventListener('click', newGame);

  newGame();
}

function getGameBoardButtons() {
  const buttons = document.querySelectorAll('#gameBoard button');
  return Array.from(buttons);
}

function newGame() {
  clearTimeout(computerMoveTimeout);
  computerMoveTimeout = '';

  // Remove result popup if it exists
  const resultPopup = document.getElementById('resultPopup');
  if (resultPopup) {
    resultPopup.remove();
  }

  const gameBoardButtons = getGameBoardButtons();
  gameBoardButtons.forEach((button) => {
    button.textContent = '';
    button.className = '';
    button.removeAttribute('disabled');
  });

  playerTurn = true;
  document.getElementById('turnInfo').textContent = 'Your turn';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
}

function boardButtonClicked(index) {
  if (playerTurn && gameBoard[index] === '') {
    gameBoard[index] = 'X';
    renderMove(index, 'x');

    const result = checkForWinner();
    if (result === gameStatus.IN_PROGRESS) {
      switchTurn();
      computerMoveTimeout = setTimeout(makeComputerMove, 1000);
    } else {
      endGame(result);
    }
  }
}

function renderMove(index, symbol) {
  const button = getGameBoardButtons()[index];
  button.textContent = symbol.toUpperCase();
  button.className = symbol.toLowerCase();
  button.setAttribute('disabled', '');

  const result = checkForWinner();
  if (result !== gameStatus.IN_PROGRESS) {
    highlightWinningCombination(result);
  }
}

function highlightWinningCombination(result) {
  const winningCombination = getWinningCombination(result);
  if (winningCombination) {
    const gameBoardButtons = getGameBoardButtons();
    winningCombination.forEach(index => {
      gameBoardButtons[index].classList.add('winning');
    });
  }
}

function getWinningCombination(result) {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return winningCombinations[i];
    }
  }
  return null;
}

function switchTurn() {
  playerTurn = !playerTurn;
  document.getElementById('turnInfo').textContent = playerTurn ? 'Your turn' : 'Computer\'s turn';
}

function makeComputerMove() {
  const availableButtons = gameBoard.reduce((acc, value, index) => {
    if (value === '') {
      acc.push(index);
    }
    return acc;
  }, []);

  if (availableButtons.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableButtons.length);
    const index = availableButtons[randomIndex];
    gameBoard[index] = 'O';
    renderMove(index, 'o');

    const result = checkForWinner();
    if (result === gameStatus.IN_PROGRESS) {
      switchTurn();
    } else {
      endGame(result);
    }
  }
}

function checkForWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      if (gameBoard[a] === 'X') {
        return gameStatus.PLAYER_WON;
      } else if (gameBoard[a] === 'O') {
        return gameStatus.COMPUTER_WON;
      }
    }
  }

  if (gameBoard.every(value => value !== '')) {
    return gameStatus.DRAW;
  }

  return gameStatus.IN_PROGRESS;
}

function endGame(result) {
  playerTurn = false;
  let message = '';
  switch (result) {
    case gameStatus.PLAYER_WON:
      message = 'You win!';
      break;
    case gameStatus.COMPUTER_WON:
      message = 'Computer wins!';
      break;
    case gameStatus.DRAW:
      message = 'Draw game';
      break;
  }
  showResultPopup(message);
}

function showResultPopup(message) {
  const popup = document.createElement('div');
  popup.id = 'resultPopup';
  popup.textContent = message;
  document.body.appendChild(popup);
}

document.addEventListener('DOMContentLoaded', domLoaded);
