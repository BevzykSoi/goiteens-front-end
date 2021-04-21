'use strict'

function createMovieCard(cardData) {
    const cardMainDiv = document.createElement("div");
    cardMainDiv.classList.add("movie");

    const cardImg = document.createElement("img");
    cardImg.classList.add("movie__image");
    cardImg.setAttribute("src", cardData.img.url);
    cardImg.setAttribute("alt", cardData.img.alt);
    cardMainDiv.appendChild(cardImg);

    const cardDivBody = document.createElement("div");
    cardDivBody.classList.add("movie__body");
    cardMainDiv.appendChild(cardDivBody);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("movie__title");
    cardTitle.textContent = cardData.title;
    cardDivBody.appendChild(cardTitle);

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("movie__description");
    cardDescription.textContent = cardData.description;
    cardDivBody.appendChild(cardDescription);

    const cardDate = document.createElement("p");
    cardDate.classList.add("movie__date");
    cardDate.textContent = "Released: " + cardData.date;
    cardDivBody.appendChild(cardDate);

    const cardRating = document.createElement("p");
    cardRating.classList.add("movie__rating");
    cardRating.textContent = "Rating: " + cardData.rate;
    cardDivBody.appendChild(cardRating);

    return cardMainDiv;
}

const data = {
    img: {
        url: "https://static.wikia.nocookie.net/subnautica/images/2/23/Reinforcedsuitfront.png/revision/latest/scale-to-width-down/833?cb=20161020102840&path-prefix=ru",
        alt: "movie image"
    },
    title: "Ryley Robinson",
    description: "Ryley Robinson is the protagonist of Subnautica. He is one of the survivors, and later the assumed sole survivor, that survived the impact of the Aurora by escaping aboard Lifepod 5." + 
        "Ryley does not serve as the protagonist in Subnautica 's standalone expansion Subnautica: Below Zero, the role of protagonist being taken instead by Robin Ayou. " + 
    "Nothing is known about Ryley's life before the crash of the Aurora; however, he was a member of the Alterra Corporation, as Non-Essential Systems Maintenance Chief, and was on board the Aurora prior to the crash.",
    date: "2014-12-16",
    rate: 10.0
};

let card = createMovieCard(data);
let body = document.querySelector("body");
body.appendChild(card);