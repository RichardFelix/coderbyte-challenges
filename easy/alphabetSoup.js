function AlphabetSoup(str) { 
    
    var tmp = [];
    
    for( var x = 0; x < str.length; x++ )
        tmp.push(str.charCodeAt(x));
    
    str = [];
    
    var min = tmp[0],
        minLocation = 0,
        originalLength = tmp.length;
    
    var findMin = function(arr, min){
        for( var x = 0; x < arr.length; x++ ){
            if( min > arr[x] ){
                min = arr[x];
                minLocation = x;
            }
        }   
        return min;
    }
    
    for( var x = 0; x < originalLength; x++ ){ 
        str.push( String.fromCharCode( findMin(tmp, 30000)) );
        tmp.splice(minLocation,1);
    }

    return str.join("");
}

console.log(AlphabetSoup("coderbyte"));

/*********** Easy Way ****************/
//function AlphabetSoup(str) { 
//    
//  str = str.split("");
//  return str.sort().join(""); 
//}
//
//console.log(AlphabetSoup("coderbyte"));