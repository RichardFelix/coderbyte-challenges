function FirstFactorial(num) { 
 
  var tmp=1;
  for( var x = num; x > 0; x--){
 	tmp *= x; 			     
  }
  num = tmp;

  return num; 
         
}
   
console.log(FirstFactorial(8)); 