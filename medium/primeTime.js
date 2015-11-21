function PrimeTime(num) { 

  var count = 0;
  
  for( var x = 2; x <= num; x++){
    if( num % x === 0 )
		count++;      
  }
      
  if( count > 1 )
    num = false;
  else
    num = true;

  return num; 
}

consol.log(PrimeTime(19));