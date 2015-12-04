function DashInsert(num){
    
    var arr = "" + num,
        tmp = [];
    arr = arr.split("");
    
    for(var x = 0; x < arr.length; x++){
        if(arr[x] % 2 != 0 && arr[x+1] % 2 != 0 && x != arr.length-1){
            tmp.push(arr[x]);
            tmp.push('-');
        }else{
            tmp.push(arr[x]);
        }
    }
    
    return tmp;
}

console.log(DashInsert(454793));
