// StringCalculator.js
function SearchArray() {}
SearchArray.prototype.findSpaceship = function(map) {

    
    let rows = map.split("\n");

    let num_rows = map.split("\n").length;

    for (let j = 0; j < num_rows; j++)
    {
        for (let i = 0; i < rows[j].length; i++)  
            {
                if (rows[j][i] == "X")
                {
                    return[j, i];
                }           
            } 

    }       
        return "Spaceship lost forever"; 
 }

       
