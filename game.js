const paperButton = document.querySelector(".js-paper");
const rockButton = document.querySelector(".js-rock");
const scissorsButton = document.querySelector(".js-scissors");
const playButtonModal = document.querySelector(".js-modal-button-exit");
const modal = document.querySelector(".modal");
const resultHeader = document.querySelector(".js-result");
const playerMoveImg = document.getElementById("image-element-player");
const pcMoveImg = document.getElementById("image-element-pc");

paperButton.addEventListener("click", () => playGame("paper"));
rockButton.addEventListener("click", () => playGame("rock"));
scissorsButton.addEventListener("click", () => playGame("scissors"));
playButtonModal.addEventListener("click", () => closeModal());
const closeModal = () => {
  modal.classList.add("modal-closed");
  document.body.style.overflowY = "auto";
};

const playGame = (playerMove) => {
  let result;
  let pcMove;
  const randomNumber = Math.trunc(Math.random() * 3 + 1);
  console.log(randomNumber);
  if (randomNumber === 1) pcMove = "scissors";
  else if (randomNumber === 2) pcMove = "rock";
  else if (randomNumber === 3) pcMove = "paper";

  if (playerMove === "scissors") {
    if (pcMove === "scissors") result = "draw";
    else if (pcMove === "rock") result = "lost";
    else if (pcMove === "paper") result = "win";
  }

  if (playerMove === "rock") {
    if (pcMove === "rock") result = "draw";
    else if (pcMove === "paper") result = "lost";
    else if (pcMove === "scissors") result = "win";
  }
  if (playerMove === "paper") {
    if (pcMove === "scissors") result = "lost";
    else if (pcMove === "rock") result = "win";
    else if (pcMove === "paper") result = "draw";
  }

  resultHeader.innerHTML = `${result}`;
  playerMoveImg.src = `./assets/${playerMove}.png`; // putting the dot before the / very important mother fucker!
  pcMoveImg.src = `./assets/${pcMove}.png`;
};

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // Adding 1 because months are zero-based
const day = today.getDate();
const copy = document.querySelector(".copyright-js");
const formattedDate = `${day}/${month}/${year}`;
copy.innerHTML = `site by ZivKoHai ${year}&copy`;
