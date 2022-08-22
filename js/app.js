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

const selectedPlayers = document.getElementsByClassName("selected");
for (const selectedPlayer of selectedPlayers) {
  selectedPlayer.addEventListener("click", function (event) {
    event.stopImmediatePropagation;
    selectedPlayer.setAttribute("disabled", true);
    const players = document.getElementsByClassName("player-name");
    for (const player of players) {
      function hello(event) {
        const playerName = player.innerText;
        console.log(event.target.playerName);
        return playerName;
      }
    }
  });
}
