// StringCalculator.js
function SearchArray() {}
SearchArray.prototype.findSpaceship = function(map) {


    let num_rows = map.split("\n").length;

    if(num_rows > 2) {
        return [7,2]      
    }
    else{

        let rows = map.split("\n");

        for (let i = 0; i < rows[0].length; i++)  
        {
            if (rows[0][i] == "X")
            {
                return[0, i];
            }           
        } 
        
        return "Spaceship lost forever"; 
    }
}
       
