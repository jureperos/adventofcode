const { parse } = require('csv-parse');
const fs = require('fs');

const csvData = parse(fs.readFileSync('../rockpaperscissors.csv', 'utf8'));
let score = 0;

const win = 6;
const draw = 3;
const loose = 0;

const rock = 1;
const paper = 2;
const scissors = 3;

csvData.forEach((row) => {
    // A is rock
    if (row[0] === 'A') {
        // X: loose, Y: draw, Z: win
        switch (row[1]) {
            case 'X':
                score += (loose + scissors);
                break;
            case 'Y':
                score += (draw + rock);
                break;
            case 'Z':
                score += (win + paper);
                break;
        }
    }
    // B is paper
    if (row[0] === 'B') {
        // X: loose, Y: draw, Z: win
        switch (row[1]) {
            case 'X':
                score += (loose + rock);
                break;
            case 'Y':
                score += (draw + paper);
                break;
            case 'Z':
                score += (win + scissors);
                break;
        }
    }
    // C is scissors
    if (row[0] === 'C') {
        // X: loose, Y: draw, Z: win
        switch (row[1]) {
            case 'X':
                score += (loose + paper);
                break;
            case 'Y':
                score += (draw + scissors);
                break;
            case 'Z':
                score += (win + rock);
                break;
        }
    }
}).then(() => {
    console.log(score);
})


