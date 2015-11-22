function VowelCount(str) { 

    str = str.split("");
    var count = 0;
    
    for(var x = 0; x < str.length; x++){
        if(str[x] == 'a' || str[x] == 'e' || str[x] == 'i' || str[x] == 'o' || str[x] == 'u')
            count++;
    }
    
    return count;      
}

console.log(VowelCount("hello"));