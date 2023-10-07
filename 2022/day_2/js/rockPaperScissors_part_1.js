const { parse } = require('csv-parse');
const fs = require('fs');

const csvData = parse(fs.readFileSync('../rockpaperscissors.csv', 'utf8'));
let score = 0;

csvData.forEach((row) => {
    // A is rock
    if (row[0] === 'A') {
        // X: rock, Y: paper, Z: scissors
        switch (row[1]) {
            case 'X':
                score += 4;
                break
            case 'Y':
                score += 8;
                break
            case 'Z':
                score += 3;
                break
        }
    }
    // B is paper
    if (row[0] === 'B') {
        // X: rock, Y: paper, Z: scissors
        switch (row[1]) {
            case 'X':
                score += 1;
                break
            case 'Y':
                score += 5;
                break
            case 'Z':
                score += 9;
                break
        }
    }
    // C is scissors
    if (row[0] === 'C') {
        // X: rock, Y: paper, Z: scissors
        switch (row[1]) {
            case 'X':
                score += 7;
                break
            case 'Y':
                score += 2;
                break
            case 'Z':
                score += 6;
                break
        }
    }
}).then(() => {
    console.log(score);
})


