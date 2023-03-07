let gridRow;
let gridItem;
let gridSize = 16;
let color = 'black';

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

function CreateRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
} 

chooseColor.addEventListener('change', (e) => {
    color = e.target.value;
    for (i of container.children){
        for (j of i.children){
            if (color === 'random'){
                color = CreateRandomColor();   
            } 
            changeColor(j, color);
        }
    }    
})

function changeColor(element, color){
    if (color === 'rainbow'){
        color = CreateRandomColor();
    }  
    element.addEventListener ('mouseover', (event) => {
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
            changeColor(gridItem, color);
        }
    }
}

drawGrid();


