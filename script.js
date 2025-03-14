// Handle Onboarding Steps
let currentStep = 1;

function nextStep(step) {
    document.getElementById(`step${step}`).classList.add("hidden");
    document.getElementById(`step${step + 1}`).classList.remove("hidden");
}

function finishSetup() {
    const name = document.getElementById("nameInput").value;
    const goal = document.getElementById("goalInput").value;
    const rules = document.getElementById("rulesInput").value;
    const days = document.getElementById("daysInput").value;

    localStorage.setItem("userName", name);
    localStorage.setItem("userGoal", goal);
    localStorage.setItem("userRules", rules);
    localStorage.setItem("userDays", days);

    window.location.href = "tracker.html";
}

// Load Tracking Page Data
if (window.location.pathname.includes("tracker.html")) {
    document.getElementById("greeting").innerText = `Hello there, ${localStorage.getItem("userName")}`;
    document.getElementById("goalDisplay").innerText = `Goal: ${localStorage.getItem("userGoal")}`;

    let days = localStorage.getItem("userDays");
    let checkboxContainer = document.getElementById("checkboxContainer");

    for (let i = 1; i <= days; i++) {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `day${i}`;
        checkbox.checked = localStorage.getItem(`day${i}`) === "true";
        checkbox.onchange = () => {
            localStorage.setItem(`day${i}`, checkbox.checked);
            checkCompletion();
        };

        let label = document.createElement("label");
        label.innerText = `Day ${i}`;
        label.htmlFor = `day${i}`;

        checkboxContainer.appendChild(label);
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(document.createElement("br"));
    }
}

// Check if challenge is completed
function checkCompletion() {
    let days = localStorage.getItem("userDays");
    let completed = 0;

    for (let i = 1; i <= days; i++) {
        if (localStorage.getItem(`day${i}`) === "true") completed++;
    }

    if (completed == days) {
        document.getElementById("celebrateBtn").style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".day-checkbox");
    const hoorayButton = document.getElementById("hoorayButton");

    function checkCompletion() {
        const allChecked = [...checkboxes].every((checkbox) => checkbox.checked);
        if (allChecked) {
            hoorayButton.style.display = "block"; // Show button
            hoorayButton.classList.add("glow"); // Add glowing effect
        } else {
            hoorayButton.style.display = "none";
        }
    }

    checkboxes.forEach((checkbox) => {
        const savedState = localStorage.getItem(checkbox.id);
        checkbox.checked = savedState === "true"; // Load saved state

        checkbox.addEventListener("change", function () {
            localStorage.setItem(checkbox.id, checkbox.checked);
            checkCompletion();
        });
    });

    // Redirect to celebration page on click
    hoorayButton.addEventListener("click", function () {
        window.location.href = "celebration.html";
    });

    checkCompletion(); // Check on load
});

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".day-checkbox");
    const hoorayButton = document.getElementById("hoorayButton");

    function checkCompletion() {
        const allChecked = [...checkboxes].every((checkbox) => checkbox.checked);
        if (allChecked) {
            hoorayButton.style.display = "block"; // Show button
            hoorayButton.classList.add("glow"); // Add glowing effect
        } else {
            hoorayButton.style.display = "none"; // Hide button
        }
    }

    checkboxes.forEach((checkbox) => {
        // Load checkbox state from localStorage
        const savedState = localStorage.getItem(checkbox.id);
        checkbox.checked = savedState === "true"; 

        checkbox.addEventListener("change", function () {
            localStorage.setItem(checkbox.id, checkbox.checked);
            checkCompletion();
        });
    });

    hoorayButton.addEventListener("click", function () {
        console.log("Redirecting to celebration page...");
        window.location.href = "celebration.html"; // Redirect to next page
    });

    checkCompletion(); // Check completion on load
});

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".day-checkbox");
    const hoorayButton = document.getElementById("hoorayButton");

    // Function to check if all checkboxes are ticked
    function checkCompletion() {
        const allChecked = [...checkboxes].every(checkbox => checkbox.checked);
        if (allChecked) {
            hoorayButton.style.display = "block"; // Show button
            hoorayButton.classList.add("glow"); // Add glowing effect
        } else {
            hoorayButton.style.display = "none"; // Hide button if not all are checked
        }
    }

    // Load saved checkbox states
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === "true") {
            checkbox.checked = true;
        }

        // Save state when checkbox is clicked
        checkbox.addEventListener("change", function () {
            localStorage.setItem(checkbox.id, checkbox.checked);
            checkCompletion();
        });
    });

    // Add event listener to button to redirect
    if (hoorayButton) {
        hoorayButton.addEventListener("click", function () {
            console.log("Button clicked! Redirecting...");
            window.location.href = "celebration.html"; // Redirect to celebration page
        });
    } else {
        console.error("Error: hoorayButton not found in DOM!");
    }

    checkCompletion(); // Check status on page load
});

// script.js

let butto = document.querySelector("#btn-id")
let text = document.querySelector("#text-area")

// eventListener "click" on button
butto.addEventListener("click", () => {
    let valueinput = text.value

    let blobdtMIME =
        new Blob([valueinput], { type: "text/plain" })
    let url = URL.createObjectURL(blobdtMIME)
    let anele = document.createElement("a")
    anele.setAttribute("download", "Downloaded Successfully");
    anele.href = url;
    anele.click();
    console.log(blobdtMIME)
})