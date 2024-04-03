const gameContainer = document.getElementById("game");
const scoreElement = document.getElementById("SCORES")
let firstCard, SecCard;
let lockboard = false;
let score = 0;

document.querySelector(".score").textContent = score;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"


];

function generator(){
  shuffle();
  for (let color of COLORS){
    const cardElement = document.createElement("div");
    cardElement.setAttribute("data-name", color);
    cardElement.innerHTML = "&nbsp"
    gameContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
    cardElement.className = "card back"  
  }
}

function shuffle(){
    let currentIndex = COLORS.length
  while (currentIndex != 0) {    
    let randomIndex = Math.floor(Math.random()*currentIndex);
    currentIndex -= 1;
    let temporaryValue = COLORS[currentIndex];
    COLORS[currentIndex] = COLORS[randomIndex];
    COLORS[randomIndex] = temporaryValue;}

}

function checkMatch(){
  let isMatch = firstCard.dataset.name === SecCard.dataset.name && firstCard !== SecCard

  isMatch ? disableCards (): unflippedC();

}

function disableCards(){
  firstCard.removeEventListener("click", flipCard);
  SecCard.removeEventListener("click", flipCard);
  score += 1000
  scoreElement.innerText=score

}

function restart() {
  while (gameContainer.firstChild){ 
    gameContainer.removeChild(gameContainer.firstChild)
  }
 generator();
 firstCard, SecCard = undefined
 score = 0
 scoreElement.innerText=score
}

function flipCard(event) {
  if (firstCard === undefined){
    firstCard = event.currentTarget
    event.currentTarget.style = "background-color:" + event.currentTarget.dataset.name;
  }else if(SecCard === undefined && firstCard !== event.currentTarget){
    SecCard = event.currentTarget
    event.currentTarget.style = "background-color:" + event.currentTarget.dataset.name;
  }else {
    checkMatch();
    firstCard = undefined;
    SecCard = undefined;
  }
}
function unflippedC() {
  firstCard.style = "";
  SecCard.style = "";
}

