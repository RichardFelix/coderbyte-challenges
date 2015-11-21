function SimpleSymbols(str) { 

  var exp = /[^+\w+$]/g;
  str = exp.test(str);
  
  return str; 
         
}

console.log(SimpleSymbols("+d+dddd"))