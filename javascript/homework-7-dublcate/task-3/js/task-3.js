'use strict'

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const ulList = document.querySelector("ul");

elements.forEach(li => {
    let newLi = document.createElement("li");

    newLi.textContent = li;

    ulList.appendChild(newLi);
});