"use strict";
const text = document.querySelector("#text");
const btn = document.querySelector("[type='button']");
const ad = document.querySelector(".w-data");
const del = document.querySelector("#del");

ad.innerHTML = ""; // Corrected from "innerHTMLs"

btn.addEventListener("click", update);

function update() {
    let p = new Promise(function (res, rej) {
        if (text.value) {
            res(text.value);
        } else {
            rej("Enter your Assignment");
        }
    })
        .then(add)
        .catch(print);
}

function add(e) {
    const a = `<li>${e} <i id="del" class="fa-solid fa-xmark" style="color: #ff0000;"></i></li>`;
    ad.insertAdjacentHTML("afterbegin", a);
    document.querySelector(".w-data").style.display="block"
    text.value = "";
}

// Add the event listener for delete outside the update function
ad.addEventListener("click", function (event) {
    if (event.target.id === "del") {
        // Check if the clicked element has the id "del"
        event.target.parentElement.remove(); // Remove the parent <li> element
    }
});
