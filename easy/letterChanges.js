function LetterChanges(str) { 

  var tmp = [];
  var change = "";
  
  for( var x = 0; x < str.length; x++ ){
    
    if( str.charCodeAt(x) >= 97 ){
  		var change = str.charCodeAt(x);
        change++;
        
        if( change === 97 || change == 101 || change == 105 || change == 111 || change == 117 ){
            change -= 32;
        }
        
        tmp.push(String.fromCharCode(change));
    }else{
        tmp.push(str[x]);
    }
      
  }
  
  return tmp.join("");      
}

console.log(LetterChanges("fun times!"));