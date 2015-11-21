function FirstReverse(str) { 

    var tmp = [];
    
    for( var x = 0; x < str.length; x++ ){
        tmp.push( str[(str.length-x)-1] );
    }
    
    str = tmp.join("");
    
    return str;         
}

console.log(FirstReverse("ReverseTime"));

/*********** Easy Way ***********************/
//function FirstReverse(str) { 
//
//  return str.split("").reverse().join(""); 
//         
//}
