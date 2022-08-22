// Player cost
document.getElementById("calculate").addEventListener("click", function () {
  const perPlayerCost = getInputValueById("per-player-cost");
  const numberOfPlayer = 5;
  const totalPlayerCost = perPlayerCost * numberOfPlayer;
  setInnerTextById("total-expenses", totalPlayerCost);
});

// Total cost
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const managerCost = getInputValueById("manager-cost");
    const coachCost = getInputValueById("coach-cost");
    const totalPlayerCost = getInnerTextById("total-expenses");
    const totalCost = managerCost + coachCost + totalPlayerCost;
    setInnerTextById("in-total", totalCost);
  });

// disable selected player
const selectedPlayers = document.getElementsByClassName("selected");
for (const selectedPlayer of selectedPlayers) {
  selectedPlayer.addEventListener("click", function (event) {
    event.stopImmediatePropagation;
    selectedPlayer.setAttribute("disabled", true);
  });
}

const totalPlayers = document.getElementById("total-players");
if (totalPlayers.childElementCount >= 5) {
  alert("you have already selected 5");
}
document.getElementById("selected-1").addEventListener("click", function () {
  const playerName = document.createElement("li");
  playerName.classList.add("text-white-50");
  playerName.classList.add("my-3");
  const playerName1 = getInnerText("player-name-1");
  playerName.innerText = playerName1;
  totalPlayers.appendChild(playerName);
});

document.getElementById("selected-2").addEventListener("click", function () {
  const playerName = document.createElement("li");
  playerName.classList.add("text-white-50");
  playerName.classList.add("my-3");
  const playerName2 = getInnerText("player-name-2");
  playerName.innerText = playerName2;
  totalPlayers.appendChild(playerName);
});

document.getElementById("selected-3").addEventListener("click", function () {
  const playerName = document.createElement("li");
  playerName.classList.add("text-white-50");
  playerName.classList.add("my-3");
  const playerName3 = getInnerText("player-name-3");
  playerName.innerText = playerName3;
  totalPlayers.appendChild(playerName);
});

document.getElementById("selected-4").addEventListener("click", function () {
  const playerName = document.createElement("li");
  playerName.classList.add("text-white-50");
  playerName.classList.add("my-3");
  const playerName4 = getInnerText("player-name-4");
  playerName.innerText = playerName4;
  totalPlayers.appendChild(playerName);
});

document.getElementById("selected-5").addEventListener("click", function () {
  const playerName2 = document.createElement("li");
  playerName2.classList.add("text-white-50");
  playerName2.classList.add("my-3");
  const playerName5 = getInnerText("player-name-5");
  playerName2.innerText = playerName5;
  totalPlayers.appendChild(playerName2);
});

document.getElementById("selected-6").addEventListener("click", function () {
  const playerName2 = document.createElement("li");
  playerName2.classList.add("text-white-50");
  playerName2.classList.add("my-3");
  const playerName6 = getInnerText("player-name-6");
  playerName2.innerText = playerName6;
  totalPlayers.appendChild(playerName2);
});
