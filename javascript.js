const div16 = document.getElementById("16");
const div32 = document.getElementById("32");
const div64 = document.getElementById("64");
const div100 = document.getElementById("100");
const gridBox = document.getElementById("gridBox");
const sketchBox = document.getElementById("sketchBox");
let colorChoice = "#000000";



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
        
        gridBox.appendChild(div);
    }
};

function backgroundColor(div) {
    div.style.backgroundColor = colorChoice;
}

function getWidth(sizeInput) {
    return (900 / sizeInput) + "px"
};
function getHeight(sizeInput) {
    return (600 / sizeInput) + "px"
};
//function hoverColor(color) {
//   let boxColor = color;
//   div.style.backgroundColor = boxColor;
//}


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