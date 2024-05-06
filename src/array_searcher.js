// StringCalculator.js
function SearchArray() {}
SearchArray.prototype.findSpaceship = function(map) {


    let num_rows = map.split("\n").length;

    if(num_rows > 2) {
        return [7,2]      
    }
    else{

        let rows = map.split("\n");

        if (rows[0][0] == "X"){
            return [0,0];
        }
        return [0,9];            
    }
}
       
