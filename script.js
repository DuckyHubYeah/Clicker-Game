let count = 0;

const button = document.getElementById("clickButton");
const counterText = document.getElementById("counterText");

button.addEventListener("click", () => {
    count++;
    counterText.textContent = "Clicks: " + count;
});
