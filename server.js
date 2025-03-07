const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let currentCode = ""; // Variable to store the current code
let codeInterval; // Variable to store the interval ID

// Function to generate a random code
function generateRandomCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) { // Generate a 6-character code
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

// Function to update the code every 60 seconds
function startCodeInterval() {
    currentCode = generateRandomCode(); // Generate the initial code
    console.log(`New code generated: ${currentCode}`);

    codeInterval = setInterval(() => {
        currentCode = generateRandomCode(); // Generate a new code
        console.log(`New code generated: ${currentCode}`);
    }, 5000); // Reset every 60 seconds (60000 milliseconds)
}

// Start the code generation interval
startCodeInterval();

// API endpoint to get the current code
app.get("/code", (req, res) => {
    res.json({ code: currentCode });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
