// FUNCTIONS
/**
 * Generate a grid with X numbers of cells, cell and grid are html div with specified classes.
 * @param {number} cellNumber
 * @returns {any} grid html element
 */
function genCells(cellNumber, totCells) {

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `calc(100% / ${totCells})`;
    cell.textContent = cellNumber;

    return cell;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function genBombs(max) {
    const result = [];
    while (result.length <= 16) {
        let curBomb = getRndInteger(1, max);
        // console.log(curBomb);
        if (!result.includes(curBomb)) {
            result.push(curBomb)
        }
    }

    return result;
}


function startGame() {

    const difficult = document.getElementById('difficult').value;
    // console.log(difficult);

    let squareSize = "";
    let curCell;

    if (difficult === "hard") {
        squareSize = 49;
    } else if (difficult === "medium") {
        squareSize = 81;
    } else {
        squareSize = 100;
    }

    for (let i = 1; i <= squareSize; i++) {
        const newCell = genCells([i], Math.sqrt(squareSize));
        // console.log(newCell);
        grid.append(newCell);
        main.append(grid);
    }

    const bombs = genBombs(squareSize);
    // console.log(bombs);

    const cells = document.querySelectorAll('.cell');
    // console.log(cells, cells.length);

    for (let i = 0; i < cells.length; i++) {
        curCell = cells[i];
        const curCellNumber = parseInt(curCell.textContent);
        curCell.addEventListener("click", handleCellBlue);

        console.log(curCellNumber);
        if (bombs.includes(curCellNumber)) {
            // console.log('ok', curCell.classList);
            curCell.classList.remove('cell');
            curCell.classList.add('bomb');
            curCell.removeEventListener("click", handleCellBlue);
            curCell.addEventListener("click", handleCellRed);
            // console.log(curCell.classList);
        }

    }

    

}


function handleCellBlue() {
    this.classList.add('bg-lightblue');
    points += 5;
    score.textContent = `Il tuo punteggio attuale: ${points} punti!`;
    // console.log('ok-blue', this);
}


function handleCellRed() {
    this.classList.add('bg-lightcoral');
    // console.log('ok-red', this);
}