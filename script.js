const container = document.querySelector('#container');
const clear = document.querySelector('#clear');
const input = document.querySelector('#grid-number');
const color = document.querySelector('#color-picker');

let currentButton = 'black';
let currentColor = "black";


function createGrid(number) {
    for (let i = 0; i < (number * number); i++) {
        const newGridItem = document.createElement('div');
        newGridItem.classList.add('divItem');
        newGridItem.style.cssText = `height: ${500/number}px; width: ${500/number}px`
        container.appendChild(newGridItem);
    }
}

function chooseColor() {
    switch(currentButton) {
        case 'rainbow':
            currentColor = `hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`;
            break;
        case 'black':
            currentColor = 'black';
            break;
        case 'eraser':
            currentColor = 'white';
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => currentButton = button.id))

function paint() {
    const allItems = document.querySelectorAll('.divItem');
    allItems.forEach(item => item.addEventListener('mouseover', () => {
        chooseColor();
        item.style.background = currentColor;
    }))
}

input.addEventListener('input', () => {
    console.log('working');
    const lastGrid = document.querySelectorAll('.divItem');
    lastGrid.forEach(item => item.remove())
    const inputValue = input.value;
    createGrid(inputValue);
    paint();
})

color.addEventListener('change', () => {
    currentColor = color.value;
    paint();
    currentButton = 'color-picker';
});

clear.addEventListener('click', () => {
    const allItems = document.querySelectorAll('.divItem');
    allItems.forEach(item => item.style.background = "#fff");
    currentColor = 'black';
})

createGrid(20);
paint();