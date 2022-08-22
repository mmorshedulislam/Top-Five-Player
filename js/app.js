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


