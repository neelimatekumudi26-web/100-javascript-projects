const btn = document.querySelector(".btn");

const trailerContainer = document.querySelector(".trailer-container");

const closeBtn = document.querySelector(".close-btn");


btn.addEventListener("click", () => {

    trailerContainer.style.display = "block";

});


closeBtn.addEventListener("click", () => {

    trailerContainer.style.display = "none";

});