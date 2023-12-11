
const count = document.querySelector(".counter");
const Subtract = document.querySelector(".Subtract");
const Resetcount = document.querySelector(".Reset");
const Add = document.querySelector(".Add");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("Add")) {
        count.innerHTML++;
    }
    if (e.target.classList.contains("Subtract")) {
        count.innerHTML--;
    }
    if (e.target.classList.contains("Reset")) {
        count.innerHTML = 0;
    }   
});
