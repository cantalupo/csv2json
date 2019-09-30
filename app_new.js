const csv = require('./convertCsvToJson.js');
const fs = require('fs');
const path = require('path');

var fileArg = process.argv[2];
var ext = fileArg.substring(fileArg.length - 4, fileArg.length);
var fileName = fileArg.substring(0, fileArg.indexOf('.csv'));

if ( ext !== '.csv' ) {
    console.log("Warning: please input csv file as an argument.");
    process.exit();
}

var csvFilePath = path.join(__dirname, fileArg);
var jsonFilePath = path.join(__dirname, fileName + '.json');

try {
    var csvString = fs.readFileSync(csvFilePath, 'utf8');
    try {
        fs.writeFileSync(jsonFilePath, JSON.stringify(csv.convert(csvString)));
    } catch (err) {
        console.error(err);
    }
} catch(err) {
    console.log(err)
}