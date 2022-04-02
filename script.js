const p1Score = document.querySelector('#player1-S');
const p2Score = document.querySelector('#player2-S');
const p1Btn = document.querySelector('#player1-B');
const p2Btn = document.querySelector('#player2-B');
const resetBtn = document.querySelector('#resetBtn');
const rounds = document.querySelector('#round');
let p1Value = parseInt(p1Score.textContent);
let p2Value = parseInt(p2Score.textContent);
const winnerCard = document.querySelector('#winner');


p1Btn.addEventListener('click', () => {
    p1Score.innerText = parseInt(p1Score.innerText) + 1;
    checkWin();
})

p2Btn.addEventListener('click', () => {
    p2Score.innerText = parseInt(p2Score.innerText) + 1;
    checkWin();
})

function clear() {
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    p1Value = 0;
    p2Value = 0;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    winnerCard.style.display = "none";

}
resetBtn.addEventListener('click', clear);

function checkWin() {
    p1Value = parseInt(p1Score.textContent)
    p2Value = parseInt(p2Score.textContent);
    if (p1Value == rounds.value) {
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        winnerCard.style.display = "unset";
        winnerCard.textContent = "Player One Wins!!!"
        winnerCard.style.backgroundColor = "#ffabaa"

    }
    else if (p2Value == rounds.value) {
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        winnerCard.style.display = "unset";
        winnerCard.textContent = "Player Two Wins!!!"
        winnerCard.style.backgroundColor = "#9c9cff"
    }
}

p1Btn.addEventListener('mouseenter', () => {
    p1Btn.style.backgroundColor = "#BF0D00"
    p1Btn.style.color = "#ffabaa"
})

p1Btn.addEventListener('mouseleave', () => {
    p1Btn.style.backgroundColor = "#ffabaa"
    p1Btn.style.color = "black"
})

p2Btn.addEventListener('mouseenter', () => {
    p2Btn.style.backgroundColor = "#0000ff"
    p2Btn.style.color = "#9c9cff"
})

p2Btn.addEventListener('mouseleave', () => {
    p2Btn.style.backgroundColor = "#9c9cff"
    p2Btn.style.color = "black"
})

resetBtn.addEventListener('mouseenter', () => {
    resetBtn.style.backgroundColor = "white"
    resetBtn.style.color = "#B30300"
})

resetBtn.addEventListener('mouseleave', () => {
    resetBtn.style.backgroundColor = "#B30300"
    resetBtn.style.color = "#fee2e2"
})

p1Btn.addEventListener('mousedown', () => {
    p1Btn.style.fontSize = "1.9em";
})

p1Btn.addEventListener('mouseup', () => {
    p1Btn.style.fontSize = "2em";
})

p2Btn.addEventListener('mousedown', () => {
    p2Btn.style.fontSize = "1.9em";
})

p2Btn.addEventListener('mouseup', () => {
    p2Btn.style.fontSize = "2em";
})

resetBtn.addEventListener('mousedown', () => {
    resetBtn.style.fontSize = "1.9em";
})

resetBtn.addEventListener('mouseup', () => {
    resetBtn.style.fontSize = "2em";
})





