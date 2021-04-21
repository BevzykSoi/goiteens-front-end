'use strict'

let categories = document.querySelector(".categories");

const liItems = document.querySelectorAll(".item");

liItems.forEach(function (item) {
    console.log(`Категорія: ${item.children[0].textContent}`);

    let ulList = item.children[1];
    let ulListChildrens = ulList.children;
    console.log(`Кількість елементів: ${ulListChildrens.length}`);
});