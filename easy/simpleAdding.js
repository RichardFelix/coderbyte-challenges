function SimpleAdding(num) { 

  var tmp = 0;
  
  for( var x = 1; x <= num; x++ ){
  	tmp += x;
  }
  
  num = tmp;
  return num; 
         
}

console.log(SimpleAdding(12));