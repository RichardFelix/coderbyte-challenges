function TimeConvert(num) { 

    var hours, mins;
    
    if( num > 60 ){
      hours = num / 60;
      hours = Math.floor(hours);
      mins = num - (hours * 60);
    }else{
     hours = 0;
     mins = num;
    }
    
     num = hours + ":" + mins;    

  return num; 
}

console.log(TimeConvert(160));