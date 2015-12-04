function SwapCase(str){
    
    var tmp = [];
        
    for(var x = 0; x < str.length; x++){
        if(str.charAt(x) == str.charAt(x).toUpperCase())
            tmp.push(str.charAt(x).toLowerCase());
        else
            tmp.push(str.charAt(x).toUpperCase());
    }
    
    return tmp.join("");
}

console.log(SwapCase("Hello World"));

////////// Manual Way /////////////////////////
//    
//function SwapCase(str){
//    
//    var tmp = [];
//
//    for(var x = 0; x < str.length; x++){
//        if(str.charCodeAt(x) >= 97){
//            var change = str.charCodeAt(x);
//            change -= 32;
//            tmp.push(String.fromCharCode(change));
//        }else if(str.charAt(x) != ' '){
//            var change = str.charCodeAt(x);
//            change += 32;
//            tmp.push(String.fromCharCode(change));
//        }else
//            tmp.push(" ");
//    }