let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function handleMove(position) {
  if ((board[position] == '') && (!gameOver)) {
    board[position] = symbols[playerTime];
    updateSquare(position);
    gameOver = isWin();

    if (gameOver) {
      setTimeout(() => {
        let vencedor = playerTime === 0 ? '1 (Escudo)!' : '2 (Espada)!'
        alert(`O jogo terminou! Vencedor: Jogador ${vencedor}`);
      }, 10);
    } else {
      playerTime = playerTime === 0 ? 1 : 0;
    }

    if(!(board.filter((element) => {
      return element === '';
    }).length > 0)){
      setTimeout(() => {        
        alert('O jogo terminou! Houve empate!');
      }, 10);
      gameOver = true;
    }
  }
}

function updateSquare(position){
  let square = document.getElementById(position.toString());
  square.innerHTML = `<div class="${symbols[playerTime]}"></div>`;
}

function cleanAllSquare(){
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.innerHTML = '';
  });
}

function isWin() {
  for(let i = 0; i < winStates.length; i++) {
    let pos1 = winStates[i][0];
    let pos2 = winStates[i][1];
    let pos3 = winStates[i][2];

    if (board[pos1] == board[pos2] && 
        board[pos1] == board[pos3] &&
        board[pos1] != '') {
      return true;
    }
  }

  return false;
}