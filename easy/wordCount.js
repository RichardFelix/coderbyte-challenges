function WordCount(str) { 

    var wordCount = 1;
    
    for(var x = 0; x < str.length; x++){
        if(str.length === 0 )
            return 0;
        if(str[x] == ' ' && str[x+1] != ' ')
            wordCount++;
    }
    
    return wordCount;
}
   

console.log(WordCount("Hello World"));


/************* Easy Way ******************/
// function WordCount(str) { 

//     str = str.split(" ");
//     str = str.length;
    
//     return str;     
// }
   

// console.log(WordCount("Hello World"));