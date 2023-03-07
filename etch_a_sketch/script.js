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

chooseColor.addEventListener('change', (e) => {
    color = e.target.value;
    for (i of container.children){
        for (j of i.children){
            changeColor(j, color);
    }}
})

function changeColor(element, color){
    element.addEventListener ('mouseover', (event) => {
    event.target.style.backgroundColor = color;
        })
}

function eraser(){
    let mouseDown = false;
    document.body.onmousedown = () => console.log('down');
    (mouseDown = true)
    document.body.onmouseup = () => (mouseDown = false)
    while(mouseDown){
    for (i of container.children){
        i.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'white';
        })
    }
}}

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
eraser();