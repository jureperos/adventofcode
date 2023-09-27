const fs = require('fs');
const stringify = require('csv-stringify');

fs.readFile('../calories.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const rows = data.split('\n').map(row => row.trim().split('\t'));

    stringify.stringify(rows, (err, csvString) => {
        if (err) {
            console.error(err);
            return;
        }
        fs.writeFile('output.csv', csvString, 'utf8', err => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('CSV file has been created');
        });
    });

});


