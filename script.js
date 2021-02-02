const container = document.querySelector('#container');
const clear = document.querySelector('#clear');
const input = document.querySelector('#grid-number');
const color = document.querySelector('#color-picker');
const colorBlack = document.querySelector('#color-black');
const greyScale = document.querySelector('#color-greyscale');
const rainbow = document.querySelector('#color-rainbow');
const eraser = document.querySelector('#eraser')

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

function paint() {
    const allItems = document.querySelectorAll('.divItem');
    allItems.forEach(item => item.addEventListener('mouseover', () => {
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
    currentButton = 'changed';
});

colorBlack.addEventListener('click', () => {
    currentColor = "black";
    paint();
    currentButton = 'black';
})

rainbow.addEventListener('click', () => {
    currentButton = 'rainbow';
    currentColor = `hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`
    if (currentButton === 'rainbow') {
        const allItems = document.querySelectorAll('.divItem');
        allItems.forEach(item => item.addEventListener('mouseover', () => {
            currentColor = `hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`
            paint();
    }))
    }
})

clear.addEventListener('click', () => {
    const allItems = document.querySelectorAll('.divItem');
    allItems.forEach(item => item.style.background = "#fff");
    currentColor = 'black';
})

eraser.addEventListener('click', () => {
    currentColor = "white";
    paint();
    currentButton = 'white';
})



createGrid(20);
paint();