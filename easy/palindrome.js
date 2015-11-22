function Palindrome(str) { 

    str = str.split("");
    var tmp = [];
    
    for(var x = 0; x < str.length; x++){
        tmp[x] = str[(str.length-x)-1];
    }
    
    if(str.join("") === tmp.join(""))
        return true;
    else 
        return false; 
}
   

console.log(Palindrome("eye"));