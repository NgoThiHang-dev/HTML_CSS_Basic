
'use strict'
function menuFunction() {
    var x = document.getElementById("headerTopNav");
    if (x.className === "menu-list") {
        x.className += " responsive";
    } else {
        x.className = "menu-list";
    }
}

window.onscroll = function () { myFunction() };
const navbar = document.getElementById("myP");

function myFunction() {
    if (document.documentElement.scrollTop > 50) {
        navbar.classList.add("shadow-sm");
    } else {
        navbar.classList.remove("shadow-sm");
    }
}

document.querySelectorAll(".menu-link").forEach((ele) =>
    ele.addEventListener("click", function (event) {
        event.preventDefault();
        document
            .querySelectorAll(".menu-link")
            .forEach((ele) => ele.classList.remove("active"));
        this.classList.add("active")
    })
);


window.onscroll = function () {
    myFunction();
}

const navbar = document.getElementById("myP");
function myFunction() {
    if (document.documentElement.scrollTop > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
}


