// PROGRAM LOGIC
const main = document.querySelector('.wrapper');

let points = 0;
const score = document.createElement('h2');
score.textContent = "";
main.prepend(score);

const grid = document.createElement('div');
grid.classList.add('grid');

const play = document.querySelector('.btn-play');
play.addEventListener("click", startGame);








