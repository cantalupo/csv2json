# csv2json
This is a solution to the assignment module 1 of edX Course Microsoft: DEV283x.
This Node.js script converts a CSV file into a JSON file.
There are 2 approaches.
One is using well-known existing node.js module [csvtojson module](https://www.npmjs.com/package/csvtojson) developed by [Keyang](https://github.com/Keyang).
The other is to parse a CSV string using 'split()' method and other simple JavaScript technics.
The first one is implemented in app_module.js and the second one in app_new.js.
I tried first way just because I don't want to reinvent the wheel. 
But then I tried to do it in my own way in order to improve my programming skill and it was quite simpler than I thought.
app_new.js uses converting module convertCsvToJson.js which I wrote myself.
All the codes are not well tested and not completely errorproof.
I have tested with the sample file in the assignment and it worked well.
(Original it was an XLS file but I converted it first into CSV file with LibreOffice.
Because the assignment is to "convert the customer-data.csv file into a JSON file".)
To verify the result, I have read the output JSON file in Node.js CLI and checked whether it worked as JSON object.
Further more, I have compared the original CSV file with the re-converted CSV file from the output JSON file.
I used [json2csv module](https://www.npmjs.com/package/json2csv) to convert output JSON file to CSV file and [Text Compare!](https://text-compare.com/) to compare both CSV texts.
This package includes all the necessary modules such as csvtojson and json2csv.

## How to Install

Copy all the files and download all dependencies.

```sh
npm install
```

## How to Run
To use existing module, type as below
```sh
node app_module.js [fileName]
```
To use simple module I wrote, type as below
```sh
node app_new.js [fileName]
```
If the 'fileName' is not a CSV file, it shows a warning.
The output JSON file will be generated in the same folder and it has the same name with input CSV file but with JSON extension.
