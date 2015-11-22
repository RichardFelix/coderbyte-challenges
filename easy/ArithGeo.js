function ArithGeo(arr) { 

    var geo,
        arth,
        addSub = arr[1] - arr[0],
        divMul = arr[1] / arr[0];

    for(var x = 0; x < arr.length-1; x++){
        if( arr[x] + arr[x+1] == addSub + arr[x] || arr[x+1] - arr[x] == addSub )
            arth = true;    
        else
            arth = false;
        
        if( arr[x] * divMul == arr[x+1] || arr[x+1] / divMul == arr[x] )
            geo = true;
        else
            geo = false;
    }
    
    if(geo == true)
        return "Geometric";
    else if(arth == true)
        return "Arithmetic";
    else
        return -1;
}

console.log(ArithGeo([2,4,6]));