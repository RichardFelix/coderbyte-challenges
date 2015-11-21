function RunLength(str) { 
  
    str = str.split("");
    var tmp = [];
    var counter = 0;
    
    var find = function( index, key, arr){
        
        var count = 0;
        
        do{
            count++;
            index++;
            
        }while(key == arr[index]);
        
        return count;
    }
    
    var findResult = 0;
    
    for( var x = 0; x < str.length; x++ ){
        
        if( str[x] != str[x-1] || x === 0 ){
            findResult = find( x, str[x], str );
            tmp.push(findResult);
            tmp.push(str[x]);
        }
    }
    
    return tmp.join(" ");
}

console.log(RunLength("abbbbcccedses"));