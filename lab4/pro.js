const diceList = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
const lhsDice = document.getElementById("lhsDice");
const rhsDice = document.getElementById("rhsDice");
const rollButton = document.getElementById("rollButton");

// Function to generate random dice rolls and update images
function rollDice() {
    const lhsRandom = Math.floor(Math.random() * 6); // 0-5
    const rhsRandom = Math.floor(Math.random() * 6);

    // Add animation on roll
    lhsDice.style.transform = "rotate(180deg)";
    rhsDice.style.transform = "rotate(180deg)";

    // Change the dice face after animation completes
    setTimeout(() => {
        lhsDice.src = `img/${diceList[lhsRandom]}`;
        rhsDice.src = `img/${diceList[rhsRandom]}`;
        
        // Reset the rotation for the next roll
        lhsDice.style.transform = "rotate(0deg)";
        rhsDice.style.transform = "rotate(0deg)";
    }, 500); // Matches the animation duration
}

// Add click event listener to the Roll Dice button
rollButton.addEventListener("click", rollDice);
