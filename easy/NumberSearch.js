function NumberSearch(str){
    
    var str = "" + str,
        tmp = [];
    str = str.split("");
    
    for(var x = 0; x < str.length; x++){
        if(str[x] > 0 ){
            tmp.push(str[x]);
            if(str[x+1] > 0)
                tmp.push('+');
        }
    }
    
    var num = 0;

    for(var x = 0; x < tmp.length; x++){
        if(tmp[x] == '+')
            num += parseInt((tmp[x-1] * 10)) + parseInt(tmp[x+1]); 
        else if(tmp[x+1] != '+' && tmp[x-1] != '+')
            num += parseInt(tmp[x]);
    }
    
    return num;
}

console.log(NumberSearch('88Hello 3World!'));