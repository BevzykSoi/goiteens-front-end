'use strict'


const form = document.querySelector(".adding-card");

const showEditFields = () => {
    form.style.display = "block";
};

const hideEditFields = () => {
    form.style.display = "none";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const card = Object.fromEntries(formData);
    card.status = "todo";

    event.target.reset();
    hideEditFields();

    createCard(card);
});

function createCard(card) {
    const cardLi = document.createElement("li");
    cardLi.classList.add("card");
    cardLi.id = "card" + (card.id ? card.id.toString() : Date.now().toString());

    const svgCross = document.createElement("svg");
    svgCross.setAttribute("width", "44");
    svgCross.setAttribute("height", "44");
    svgCross.classList.add("cross");
    cardLi.appendChild(svgCross);
    const useCross = document.createElement("use");
    useCross.setAttribute("xlink:href", "#cross-icon");
    svgCross.appendChild(useCross);

    const title = document.createElement("h4");
    title.classList.add("card-heading");
    title.textContent = card.title;
    cardLi.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = card.description;
    cardLi.appendChild(description);

    const svgArrow = document.createElement("svg");
    svgArrow.classList.add("arrow");
    svgArrow.setAttribute("width", "44");
    svgArrow.setAttribute("height", "44");
    cardLi.appendChild(svgArrow);

    const useArrow = document.createElement("use");
    useArrow.setAttribute("xlink:href", "#arrow-icon");
    svgArrow.appendChild(useArrow);

    switch (card.priority) {
        case "H":
            cardLi.classList.add("high");
            break;
        case "M":
            cardLi.classList.add("medium");
            break;
        case "L":
            cardLi.classList.add("low");
            break;
        default:
            break;
    }

    const target = document.querySelector(`.${card.status} .cards`);
    target.insertAdjacentHTML("beforeend", cardLi.outerHTML);
    
    const cross = document.querySelector(`#${cardLi.id} .cross`);
    cross.addEventListener("click", () => {
        cross.parentElement.remove();
    });

    const arrow = document.querySelector(`#${cardLi.id} .arrow`);
    arrow.addEventListener("click", (event) => {
        const currentList = event.target.closest(".column");
        let nextStatus;
        if (currentList.classList.contains("todo")) {
            nextStatus = "inprogress";
        } else if (currentList.classList.contains("inprogress")) {
            nextStatus = "done";
        } else if (currentList.classList.contains("done")) {
            nextStatus = "todo";
        }
        const nextList = document.querySelector(`.${nextStatus} .cards`);
        const card = event.target.closest(".card");
        nextList.appendChild(card);
    });
};

// https://stackoverflow.com/questions/7346563/loading-local-json-file

const loadJSON = (callback) => {
    const xObj = new XMLHttpRequest();
    xObj.overrideMimeType("application/json");
    // 1. replace './data.json' with the local path of your file
    xObj.open('GET', './data/data.json', true);
    xObj.onreadystatechange = () => {
        if (xObj.readyState === 4 && xObj.status === 200) {
            // 2. call your callback function
            callback(xObj.responseText);
        }
    };
    xObj.send(null);
};

const init = () => {
    loadJSON((response) => {
        // 3. parse JSON string into JSON Object
        const json = JSON.parse(response);
        convertingJson(json);
    });

    const listTodo = document.querySelector(".todo .cards"),
    listInprogress = document.querySelector(".inprogress .cards"),
    listDone = document.querySelector(".done .cards");

    Sortable.create(listTodo, { group: "board", draggable: ".card", animation: 400});
    Sortable.create(listInprogress, { group: "board", draggable: ".card", animation: 400});
    Sortable.create(listDone, { group: "board", draggable: ".card", animation: 400});
};

function convertingJson(json) {
    json.forEach(card => {
        createCard(card);
    });
}

init();