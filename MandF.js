const fs = require('fs');

// Specify the path to your CSV file
const filePath = './names.csv';
let maleNames = [];
let femaleNames = [];

// Read the CSV file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Split the content into lines
    const lines = data.split('\n');

    // Extract the third column (gender) and fourth column (name) from each line
    lines.forEach(line => {
        const columns = line.trim().split('\t');
        const gender = columns[1].toLowerCase();
        const name = columns[3];

        // Categorize names based on gender
        if (gender === 'male') {
            maleNames.push(name);
        } else if (gender === 'female') {
            femaleNames.push(name);
        }
    });
});

// Function to generate and display a random name for each gender
function generateMaleName() {
    const randomIndex = Math.floor(Math.random() * maleNames.length);
    const generatedName = maleNames[randomIndex];
    document.getElementById('generatedName').textContent = generatedName;
}

function generateFemaleName() {
    const randomIndex = Math.floor(Math.random() * femaleNames.length);
    const generatedName = femaleNames[randomIndex];
    document.getElementById('generatedName').textContent = generatedName;
}

// Event listeners for the gender buttons
document.getElementById('generateMaleButton').addEventListener('click', generateMaleName);
document.getElementById('generateFemaleButton').addEventListener('click', generateFemaleName);
