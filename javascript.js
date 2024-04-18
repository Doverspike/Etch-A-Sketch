const div16 = document.getElementById("16");
const div32 = document.getElementById("32");
const div64 = document.getElementById("64");
const div100 = document.getElementById("100");
const gridBox = document.getElementById("gridBox");
const sketchBox = document.getElementById("sketchBox");
const userChoice = document.getElementById("choice");
const rColor = document.getElementById("randomColor");
const sColor = document.getElementById("standardColor");
let colorChoice = "";

rColor.addEventListener("click", () => {
    colorChoice = "random";
});
sColor.addEventListener("click", () => {
    colorChoice = "standard";
})

function randomColor() {
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    return color;
}

// Creates a grid of DIVs with mouseover background color
function createDiv(divSize, color) {
    let size = divSize*divSize;
    let oldSize = divSize;
    let boxWidth = getWidth(oldSize);
    let boxHeight = getHeight(oldSize);
    let oldDiv = document.getElementsByClassName("gridItem");
    
    while (oldDiv.length > 0) {
        oldDiv[0].parentNode.removeChild(oldDiv[0]);
    }
    for (i = 0; i < size; i++) {
        let div = document.createElement("div");
        div.classList.add("gridItem");
        div.style.width = boxWidth
        div.style.height = boxHeight
        
        div.addEventListener("mouseover", () => (
            backgroundColor(div)));
            
            

        
        sketchBox.appendChild(div);
    }
};

function backgroundColor(div) {
    if (colorChoice == "random") {
    div.style.backgroundColor = randomColor();
    } else {
        div.style.backgroundColor = "black";
    }
}

function getWidth(sizeInput) {
    return (900 / sizeInput) + "px"
};
function getHeight(sizeInput) {
    return (600 / sizeInput) + "px"
};




div16.addEventListener("click", () => {
    createDiv(16, colorChoice);
});
div32.addEventListener("click", () => {
    createDiv(32, colorChoice);
});
div64.addEventListener("click", () => {
    createDiv(64, colorChoice);
});
div100.addEventListener("click", () => {
    createDiv(100, colorChoice);
});

userChoice.addEventListener("click", () => {
    let uChoice = prompt("Input number between 1->100");
    while (isNaN(uChoice) == true) {
       uChoice = prompt("Not Valid. Input number between 1->100");
    } if (uChoice > 100) {
            uChoice = 100;
        }
        createDiv(uChoice, colorChoice);
    }
);