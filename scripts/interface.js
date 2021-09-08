document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll(".square");

  for (square of squares){
    square.addEventListener('click', handleClick);
  }
});

const handleClick = (event) => {
  handleMove(event.target.id);

  let h2 = document.querySelector('h2');
  let jogador = playerTime === 0 ? 'Jogador 1 (Escudo)' : 'Jogador 2 (Espada)';
  h2.innerHTML = 'Vez de: ' + jogador;
}

function resetGame(){
  gameOver = false;
  board = ['', '', '', '', '', '', '', '', ''];
  playerTime = 0;
  
  let h2 = document.querySelector('h2');
  h2.innerHTML = 'Vez de: Jogador 1 (Escudo)';

  cleanAllSquare();
}