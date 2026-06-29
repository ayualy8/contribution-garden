const plant = document.getElementById("plant");
const waterButton = document.getElementById("waterButton");
const waterCount = document.getElementById("waterCount");
const levelText = document.getElementById("levelText");

let count = 0;

waterButton.addEventListener("click", () => {
    count++;

    waterCount.textContent = count;

    if (count < 5) {
        plant.textContent = "🌱";
        levelText.textContent = "Level 1 — Tiny Seedling";
    } else if (count < 10) {
        plant.textContent = "🌿";
        levelText.textContent = "Level 2 — Growing Plant";
    } else if (count < 15) {
        plant.textContent = "🪴";
        levelText.textContent = "Level 3 — Potted Plant";
    } else if (count < 20) {
        plant.textContent = "🌳";
        levelText.textContent = "Level 4 — Young Tree";
    } else {
        plant.textContent = "🌸";
        levelText.textContent = "Level 5 — Blooming Garden";
    }

    plant.style.transform = "scale(1.2)";

    setTimeout(() => {
        plant.style.transform = "scale(1)";
    }, 150);
});