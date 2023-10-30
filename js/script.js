// PROGRAM LOGIC
const main = document.querySelector('.wrapper');

const grid = document.createElement('div');
grid.classList.add('grid');

const play = document.querySelector('.btn-play');
play.addEventListener("click", function () {
    const difficult = document.getElementById('difficult').value;
    console.log(difficult);

    let squareSize = "";

    if (difficult === "hard") {
        squareSize = 49;
    } else if (difficult === "medium") {
        squareSize = 81;
    } else {
        squareSize = 100
    }
    
    for (let i = 1; i <= squareSize; i++) {
        const newCell = genCells([i], Math.sqrt(squareSize));
        console.log(newCell);
        grid.append(newCell);
        main.append(grid);
    }
    console.log(grid.innerHTML);
})






// FUNCTIONS
/**
 * Generate a grid with X numbers of cells, cell and grid are html div with specified classes.
 * @param {number} cellNumber
 * @returns {any} grid html element
 */
function genCells(cellNumber, squareSize) {

    const cell = document.createElement('div'); 
    cell.classList.add('cell');
    cell.style.width = `calc(100% / ${squareSize})`;
    cell.textContent = cellNumber;
    cell.addEventListener("click", function () {
        cell.classList.add('bg-lightblue');
        console.log(cell);
    })

    return cell;
}

