let player = {
    name: "Chrono",
    chips: 9
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum === 1) {
        return 11;
    } else if (randomNum > 10) {
        return 10;
    } else {
        return randomNum;
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}

function renderGame() {
    
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent+= cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card? 😄"
    } else if (sum === 21) {
        message = "Wohoo!, You've got Blackjack! 🎊";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😢";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
} 
 
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard();
        sum+=thirdCard;
        cards.push(thirdCard);
        renderGame();
    }
}
