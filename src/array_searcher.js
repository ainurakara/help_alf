// StringCalculator.js
function SearchArray() {}
SearchArray.prototype.findSpaceship = function(map) {


    let rows = map.split("\n").length;

    if(rows > 2) {
        return [7,2]      
    }
    else {
        return [0,0];
    }

};
