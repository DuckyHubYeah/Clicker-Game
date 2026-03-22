let donuts = 0;
let perClick = 1;
let auto = 0;

// Load save
if (localStorage.getItem("save")) {
    const save = JSON.parse(localStorage.getItem("save"));
    donuts = save.donuts;
    perClick = save.perClick;
    auto = save.auto;
}

const button = document.getElementById("clickButton");
const counterText = document.getElementById("counterText");
const perClickText = document.getElementById("perClickText");
const autoText = document.getElementById("autoText");

// Click button
button.addEventListener("click", () => {
    donuts += perClick;
    updateUI();
});

// Auto click every second
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

// Update display
function updateUI() {
    counterText.textContent = "Donuts: " + donuts;
    perClickText.textContent = "Per Click: " + perClick;
    autoText.textContent = "Auto: " + auto + "/sec";

    // Save game
    localStorage.setItem("save", JSON.stringify({
        donuts,
        perClick,
        auto
    }));
}

// Initial load
updateUI();
