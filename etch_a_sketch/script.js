let gridRow;
let gridItem;
let gridSize = 16;
let selectAll;

const inpGridSize = document.querySelector('#gridSize');
const btnClear = document.querySelector('#btnClear');
const chooseColor = document.querySelector('#chooseColor');
const container = document.querySelector('.container');

inpGridSize.addEventListener('change', (e) => {
    gridSize = e.target.value;
    drawGrid();
})

btnClear.addEventListener('click', () => drawGrid())
function clearBox(element)
{
    element.innerHTML = "";
}

chooseColor.addEventListener('change', (e) => {
    color = e.target.value;
    changeColor(color);
})

function changeColor(color){
    gridItem.addEventListener ('mouseover', (event) => {
    event.target.style.backgroundColor = color;
        })
    }

function drawGrid(){
    clearBox(container);
    for (i = 1; i <= gridSize; i++){
        gridRow = document.createElement('div')
        gridRow.classList.add('gridRow');
        container.appendChild(gridRow);
        for (j = 1; j <= gridSize; j++){
            gridItem = document.createElement('div');
            gridItem.classList.add('gridItem');
            gridRow.appendChild(gridItem);
            changeColor('black');
        }
    }
}


drawGrid();