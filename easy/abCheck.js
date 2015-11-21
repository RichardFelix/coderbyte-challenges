function ABCheck(str) { 

    str = str.split("");
    
    for( var x = 0; x < str.length; x++ ){
        if(str[x] == 'a' || str[x] == 'b'){
            for( var y = 0; y < 2; y++ ){
                if(str[x+1] == 'b' || str[x+1] == 'a' ){
                    return false;
                }
            }
        }
    }
    
    return true;
}   

console.log(ABCheck("after badly"));