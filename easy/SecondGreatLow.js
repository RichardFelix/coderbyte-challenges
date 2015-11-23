function SecondGreatLow(arr) { 
    
    var findMaxLow = function(low, max, arrTmp){
        for( var x = 0; x < arrTmp.length; x++ ){
            if(max < arrTmp[x])
                max = arrTmp[x];
            if(low > arrTmp[x])
                low = arrTmp[x];
        }
        
        var tempArrayReturn = [low,max];
        return tempArrayReturn;
    }
    
    var tmp = findMaxLow(arr[0], arr[0], arr),
        max = tmp[1],
        low = tmp[0];
    
    if(arr.length == 2){
        return tmp;
    }else{
        tmp = [];

        for( var x = 0; x < arr.length; x++){
            if( max != arr[x] && low != arr[x] )
                tmp.push( arr[x] );
        }

        return findMaxLow(tmp[0], tmp[0], tmp);
    }
}
   
console.log(SecondGreatLow([1,49, 34, 543, 332, 123, 77]));