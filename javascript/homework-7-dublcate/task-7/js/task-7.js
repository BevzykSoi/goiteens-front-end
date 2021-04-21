'use strict'

const rgb = (r, g, b) => 
  `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`;

function createBoxes(num) {
    const mainDiv = document.createElement("div");

    let size = 30;

    for (let i = 0; i < num; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = rgb(Math.random() * 255 + 1, Math.random() * 255 + 1, Math.random() * 255 + 1);
        newDiv.style.width = size + "px";
        newDiv.style.height = size + "px";

        mainDiv.appendChild(newDiv);
        size += 10;
    }
    
    return mainDiv;
}

const root = document.getElementById("root");

const boxes = createBoxes(7);

root.appendChild(boxes);