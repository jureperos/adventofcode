const { parse } = require('csv-parse');
const fs = require('fs');

const csvData = parse(fs.readFileSync('../day_3_data.csv', 'utf8'));

csvData.forEach((row) => {
    console.log(row);
})
