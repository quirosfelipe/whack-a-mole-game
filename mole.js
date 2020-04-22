window.addEventListener("DOMContentLoaded", () => {
    const popUp = setInterval(popUpRandomMole, 2000);
    document.querySelector('.pf').addEventListener("click", (e) => {
        clickHandler(e, popUp);

    });
});
function clickHandler(e, interval) {
    if (e.target.classList.contains("wgs__mole-head")) {
        e.target.classList.add('wgs__mole-head--hit');
        e.target.classList.remove("wgs__mole-head--hidden");
    }
    if (checkWinner() === true) {
        document.querySelector('.pf').removeEventListener("click", clickHandler);
        clearInterval(interval);
    };
}
function checkWinner() {
    const moleHeads = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--hit)");
    if (moleHeads.length === 0) {
        const winner = document.getElementById("winner");
        winner.innerHTML = "You win!!!"
        return true;
    }
}
function popUpRandomMole() {
    const moleHeads = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--hit)");
    const randomMole = Math.floor(Math.random() * (moleHeads.length));
    hideMoles(moleHeads);

    targetMole = moleHeads[randomMole];
    targetMole.classList.remove("wgs__mole-head--hidden");
}
function hideMoles(moleHeads) {
    for (let moleHead of moleHeads) {
        moleHead.classList.add("wgs__mole-head--hidden");
    }
}


