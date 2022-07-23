const container = document.querySelector('#container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell')
const btn = document.createElement('button');
btn.classList.add('btn');
btn.textContent = 'Choose Grid Size';
container.appendChild(btn);
let first = true;

btn.addEventListener('click', () => {
    if (first === false) {
        reset();
    }
    let gridSize = prompt('Please enter the number for grid size:');
    defaultGrid(gridSize);
})



function defaultGrid(gridSize) {
    container.appendChild(btn);
    makeRows(gridSize);
    makeColumns(gridSize);
}

function makeRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        container.appendChild(row);
        row.classList.add('gridRow');
    }
    first = false;

}

function makeColumns(cellNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell);
            newCell.classList.add('cell');
            newCell.addEventListener('mouseover', () =>{
                newCell.style.backgroundColor = 'black';
            })
        }
    }
    first = false;
}

function reset() {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    defaultGrid();
  }
