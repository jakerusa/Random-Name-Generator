const fs = require('fs');

// Specify the path to your CSV file
const filePath = './names.csv';

// Read the CSV file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Split the content into lines
    const lines = data.split('\n');

    // Extract the fourth column from each line
    const fourthColumnList = lines.map(line => {
        const columns = line.trim().split('\t');
        return columns[3]; // Index 3 corresponds to the fourth column
    });

    // Output the list of fourth column values
    console.log(fourthColumnList);
});
