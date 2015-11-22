function ExOh(str) { 

    str = str.split("");
    var xCount = 0,
        oCount = 0;
    
    for( var x = 0; x < str.length; x++ ){
        if(str[x] == 'x')
            xCount++;
        if(str[x] == 'o')
            oCount++;
    }
    
    if(xCount === oCount)
        return true;
    else 
        return false;
}
   

console.log(ExOh("xooxo"));