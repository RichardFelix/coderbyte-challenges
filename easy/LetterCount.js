function LetterCountI(str) { 
 
    str = str.split(" ");
    var tmp = [];
    
    var linearS = function(arr, key){
        var count = -1;
        for( var x = 0; x < arr.length; x++ ){
            if( key == arr[x] ){
                count++;
            }
        }
        
        return count;
    }
    
    for( var x = 0; x < str.length; x++ ){
        var counter = 0;
        for( var y = 0; y < str[x].length; y++ ){
            counter += linearS(str[x], str[x][y]);
        }
        tmp.push(counter);
    }
    
    var max = tmp[0];
    
    for( var x = 1; x < str.length; x++ ){
        if( max < tmp[x])
            max = tmp[x];
    }
    for( var x = 0; x < str.length; x++ ){
        if( max === 0 )
            return -1;
        else if( max === tmp[x])
            return str[x];
    }
}
   
console.log(LetterCountI("Where in Woorld is Carmen Sandiagoooo"));