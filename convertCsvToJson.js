exports.convert = function(csvString){
    var jsonArray = [];
    var rowArray = csvString.split('\n');
    var keys = rowArray.shift().split(',')
        
    rowArray.forEach( function(csvRowString) {
        var values = csvRowString.split(',');
        var jsonTerm = {};
        for ( var keyNum = 0; keyNum < keys.length; keyNum++ ) {
            jsonTerm[ keys[keyNum] ] = values[keyNum];
        }
        jsonArray.push( jsonTerm );
    });
    return jsonArray;
};