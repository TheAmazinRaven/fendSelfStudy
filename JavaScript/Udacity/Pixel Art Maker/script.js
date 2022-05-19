const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    
    for (column = 0, column < (rows * cols); column++) {
        let cell = document.createElement("box");
        cell.innerText = (column + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);