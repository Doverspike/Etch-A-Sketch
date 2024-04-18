const div16 = document.getElementById("id16");
const div32 = document.getElementById("id32");
const div64 = document.getElementById("id64");
const div100 = document.getElementById("id100");
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
        div.id = i;
        div.style.width = boxWidth
        div.style.height = boxHeight
        
        div.addEventListener("mouseover", () => (
            backgroundColor(div, i)));
           
        sketchBox.appendChild(div);
    }
};

function backgroundColor(div, i) {
    let pixel = div;
    if (colorChoice == "random") {
    pixel.style.backgroundColor = randomColor();
    } else {      
        pixel.style.backgroundColor = "black";
        
        
        pixel.style.opacity = increaseOpacity(pixel.style.opacity);
        
    }
}
function increaseOpacity(opacity) {
    let opac = opacity;
    opac = Number(opac);
    
    opac += 0.1;
    return opac;
    
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