document.getElementById("fireworksButton").addEventListener("click", function () {
    console.log("Celebrate button clicked! 🎆");

    document.body.style.background = "black"; // Dark background for better fireworks effect

    let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

    for (let i = 0; i < 50; i++) { // Create 50 fireworks
        let firework = document.createElement("div");
        firework.classList.add("firework");
        document.body.appendChild(firework);

        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 100 + "vh";
        firework.style.background = colors[Math.floor(Math.random() * colors.length)];

        setTimeout(() => firework.remove(), 2000); // Remove after 2 seconds
    }
});
