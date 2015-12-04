function MeanMode(arr){
    
    var mode = 0,  // most repeated number
        avg = 0;   // mean aka average
    
    for(var x = 0; x < arr.length; x++){
        var tmp = arr[x];
        for(var y = 1; y < arr.length-1; y++){
            if(arr[y] == tmp)
                mode = arr[y];
        }
    }

    for(var x = 0; x < arr.length; x++)
        avg += arr[x];
    
    avg /= arr.length;
    
    if(avg == mode)
        return 1;
    else 
        return 0;
    
}

console.log(MeanMode([5,3,3,3,1]));