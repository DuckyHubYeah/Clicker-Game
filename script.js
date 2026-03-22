let donuts = 0;
let perClick = 1;
let auto = 0;

// Load save
const saveData = JSON.parse(localStorage.getItem("donutSave"));
if (saveData) {
    donuts = saveData.donuts || 0;
    perClick = saveData.perClick || 1;
    auto = saveData.auto || 0;
}

const donutButton = document.getElementById("donutButton");
const counterText = document.getElementById("counterText");
const perClickText = document.getElementById("perClickText");
const autoText = document.getElementById("autoText");

// Click donut
donutButton.addEventListener("click", () => {
    donuts += perClick;
    updateUI();
});

// Auto income
setInterval(() => {
    donuts += auto;
    updateUI();
}, 1000);

// Buy upgrades
function buyUpgrade(type) {
    if (type === "click1" && donuts >= 50) {
        donuts -= 50;
        perClick += 1;
    }

    if (type === "auto1" && donuts >= 100) {
        donuts -= 100;
        auto += 1;
    }

    if (type === "click10" && donuts >= 500) {
        donuts -= 500;
        perClick += 10;
    }

    if (type === "auto20" && donuts >= 550) {
        donuts -= 550;
        auto += 20;
    }

    updateUI();
}

// Update UI + save
function updateUI() {
    counterText.textContent = "Donuts: " + donuts;
    perClickText.textContent = "Per Click: " + perClick;
    autoText.textContent = "Auto: " + auto + "/sec";

    // Disable buttons if not enough donuts
    document.getElementById("click1").disabled = donuts < 50;
    document.getElementById("auto1").disabled = donuts < 100;
    document.getElementById("click10").disabled = donuts < 500;
    document.getElementById("auto20").disabled = donuts < 550;

    // Save
    localStorage.setItem("donutSave", JSON.stringify({
        donuts,
        perClick,
        auto
    }));
}

// Reset save
function resetGame() {
    localStorage.removeItem("donutSave");
    location.reload();
}

// Initial load
updateUI();
