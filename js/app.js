// disable selected player
const selectedPlayers = document.getElementsByClassName("selected");
for (const selectedPlayer of selectedPlayers) {
  selectedPlayer.addEventListener("click", function (event) {
    selectedPlayer.setAttribute("disabled", true);
  });
}

// player select
const totalPlayers = document.getElementById("total-players");
function playerSelect(playerId) {
  const playerName = document.createElement("li");
  playerName.classList.add("text-white-50");
  playerName.classList.add("my-3");
  const playerNameValue = getInnerText(playerId);
  playerName.innerText = playerNameValue;
  totalPlayers.appendChild(playerName);

  const totalPlayersCount =
    document.getElementById("total-players").childElementCount;
  if (totalPlayersCount > 5) {
    alert("You have selceted already 5 Players");
    totalPlayers.removeChild(playerName);
  }
}

// player 1
document.getElementById("selected-1").addEventListener("click", function () {
  playerSelect("player-name-1");
});

// player 2
document.getElementById("selected-2").addEventListener("click", function () {
  playerSelect("player-name-2");
});

// player 3
document.getElementById("selected-3").addEventListener("click", function () {
  playerSelect("player-name-3");
});

// player 4
document.getElementById("selected-4").addEventListener("click", function () {
  playerSelect("player-name-4");
});

// player 5
document.getElementById("selected-5").addEventListener("click", function () {
  playerSelect("player-name-5");
});

// player 6
document.getElementById("selected-6").addEventListener("click", function () {
  playerSelect("player-name-6");
});

// Player cost
document.getElementById("calculate").addEventListener("click", function () {
  const perPlayerCost = getInputValueById("per-player-cost");
  const totalPlayersCount =
    document.getElementById("total-players").childElementCount;
  const totalPlayerCost = perPlayerCost * totalPlayersCount;
  setInnerTextById("total-expenses", totalPlayerCost);
  if (isNaN(perPlayerCost) || perPlayerCost === "") {
    alert("Please Input Valid Number");
    setInnerTextById("total-expenses", "00");
    setInputValueById("per-player-cost", "");
  }
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

    if (isNaN(managerCost) || isNaN(coachCost)) {
      alert("Please Input Valid Number");
      setInnerTextById("in-total", "00");
      setInputValueById("manager-cost", "");
      setInputValueById("coach-cost", "");
    }
  });

// validation
