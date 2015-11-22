function ArrayAdditionI(arr) { 

    var max = arr[0];
    
    for(var x = 1; x < arr.length; x++){
        if(arr[x] > max)
            max = arr[x];
    }
    
    var tmp = [];
    
    for(var x = 0; x < arr.length; x++){
        if(arr[x] != max)
            tmp.push(arr[x]);
    }
    
    var total = 0;
    
    for(var x = 0; x < tmp.length; x++){
        total += tmp[x];
    }
    
    if(total == max)
        return "true";
    else 
        return "false";
}

console.log(ArrayAdditionI([4, 6, 24, 10, 1, 3]));