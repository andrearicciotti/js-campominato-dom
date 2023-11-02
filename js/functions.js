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

    this.textContent = "Reset";
    score.textContent = "";
    points = 0;
    grid.innerHTML = "";

    const difficult = document.getElementById('difficult').value;
    // console.log(difficult);

    let squareSize = "";

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
    console.log(bombs);

    const cells = document.querySelectorAll('.cell');
    // console.log(cells, cells.length);

    for (let i = 0; i < cells.length; i++) {
        const curCell = cells[i];
        const curCellNumber = parseInt(curCell.textContent);
        curCell.addEventListener("click", handleCellBlue);

        // console.log(curCellNumber);
        if (bombs.includes(curCellNumber)) {
            // console.log('ok', curCell.classList);
            curCell.classList.remove('cell');
            curCell.classList.add('bomb');
            curCell.removeEventListener("click", handleCellBlue);
            curCell.addEventListener("click", handleCellRed);
            // console.log(curCell.classList);
        }

    }

    const bomb = document.querySelectorAll('.bomb');
    console.log(bomb);
}


function handleCellBlue() {
    // console.log(this.classList);
    const cells = document.querySelectorAll('.cell');
    console.log(cells.length);

    if (this.classList.value == 'cell' && points != -1 && points != cells.length - 1) {

        points += 1;
        score.textContent = `Il tuo punteggio attuale: ${points} punti!`;
        this.classList.add('bg-lightblue');
    } else if (points === -1) {
        score.textContent = "Ritenta! Sarai piu fortunato!"
    }

    else if (points === cells.length - 1) {
        score.textContent = `hai vinto!! Totalizzando ${points + 1} punti!`;
        this.classList.add('bg-lightblue');
        const bomb = document.querySelectorAll('.bomb');
        for (let i = 0; i < bomb.length; i++) {
            const curBomb = bomb[i];
            // console.log(curBomb);
            curBomb.classList.add('bg-lightcoral');
        }
    }
        // console.log('ok-blue', this);
}


function handleCellRed() {

    const cells = document.querySelectorAll('.cell');
    if (points != -1 && points != cells.length - 1) {

        this.classList.add('bg-lightcoral');
        score.textContent = `BOOM! Hai totalizzato ${points} punti!`;
        // console.log(bombs);
        points = -1;
        const bomb = document.querySelectorAll('.bomb');
        // console.log(bomb.classList);
        for (let i = 0; i < bomb.length; i++) {
            const curBomb = bomb[i];
            // console.log(curBomb);
            curBomb.classList.add('bg-lightcoral');
        }
        // console.log('hai perso');
        // console.log('ok-red', this);}
    } else if (points === cells.length - 1) {
        score.textContent = `hai vinto!! Totalizzando ${points + 1} punti!`;
    } 
    
    else {
        score.textContent = "Ritenta! Sarai piu fortunato!"
    }

}
