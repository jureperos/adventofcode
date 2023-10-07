const {parse} = require('csv-parse');
const fs = require('fs');

let calorieSum = [];
let iterCount = 0;
let accumulator = null;
let biggestCalorie = [];
const csvData = parse(fs.readFileSync('./output.csv', 'utf8'));

// this shit returns a promise
csvData.forEach(row => {

    const rowNum = Number(row[0]);
    // Take each row value and sum them together.
    // When we get to an empty line sum the accumulator
    // and push the result to an array

    if (iterCount === 0) {
        accumulator = rowNum;
        iterCount += 1;
    } else if (rowNum != 0) {
        accumulator += rowNum;
        iterCount += 1;
    } else {
        calorieSum.push(accumulator);
        accumulator = 0;
        iterCount += 1;
    }
}).then(() => {

    // Get the biggest number from the array (part 1)
    //for (let i = 0; i < calorieSum.length; i ++) {
    //    if (calorieSum[i] > biggestCalorie) {
    //        biggestCalorie = calorieSum[i];
    //    }
    //}


    /* This would probably be a task for a binary search tree
       or something better than this */
    for (let i = 0; i < calorieSum.length; i++) {

        // fill the first three array slots
        if (biggestCalorie.length < 3) {
            biggestCalorie.push(calorieSum[i]);
            continue;
        }

        biggestCalorie.sort((a, b) => a - b);

        if (biggestCalorie[0] < calorieSum[i]) {
            biggestCalorie.shift();
            biggestCalorie.unshift(calorieSum[i]);
        }



    }
}).then(() => {
    console.log(biggestCalorie);
    let callSum = 0;
    biggestCalorie.forEach((cal) => {
        callSum += cal;
    })
    console.log(callSum);
});
