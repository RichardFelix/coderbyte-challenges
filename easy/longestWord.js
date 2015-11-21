function LongestWord(sen) { 

  sen =  sen.replace(/[^a-zA-Z 0-9]+/g,'');    
  var sen = sen.split(" ");
  var tmp = '';

  for( var x in sen )
      if(tmp.length < sen[x].length)
          tmp = sen[x];
    
    sen = tmp;

  return sen; 
         
}

console.log(LongestWord('I Love To Code!!'));  