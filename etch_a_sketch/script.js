function clearBox(element)
{
    element.innerHTML = "";
}

const container = document.querySelector('.container');
let gridSize = 16;
drawGrid();

const btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', () => drawGrid())

const inpGridSize = document.querySelector('#gridSize');

inpGridSize.addEventListener('change', (e) => {
    gridSize = e.target.value;
    drawGrid();
})

function drawGrid(){
    clearBox(container);
    for (i = 1; i <= gridSize; i++){
        const gridRow = document.createElement('div')
        gridRow.classList.add('gridRow');
        container.appendChild(gridRow);
        for (j = 1; j <= gridSize; j++){
            const gridItem = document.createElement('div');
            gridItem.classList.add('gridItem');
            gridRow.appendChild(gridItem);
            gridItem.addEventListener ('mouseover', (event) => {
                event.target.style.backgroundColor = "black";
                
            }
            )
        }
    }
}
