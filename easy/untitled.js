function CountingMinutesI(str){

    var hours_1 = [],
        hours_2 = [],
        mins = [],
        mins_2 = [],
        am_1 = [],
        am_2 = [],
        dash = false,
        colon = false;
    
    for(var x = 0; x < str.length; x++){
        if(str.charAt(x) != 'a' && str.charAt(x) != '-' && str.charAt(x) != 'm' && str.charAt(x) != 'p' && str.charAt(x) != ':'){
            if(colon == false){
                if(dash == true)
                    hours_2.push(str.charAt(x));
                else
                    hours_1.push(str.charAt(x));
            }else{
                if(dash == true)
                    mins.push(parseInt(str.charAt(x)));
                else
                    mins_2.push(parseInt(str.charAt(x)));
            }
        }else if(str.charAt(x) == 'a' || str.charAt(x) == 'm' || str.charAt(x) == 'p'){
            if(dash == true)
                am_2.push(str.charAt(x));
            else
                am_1.push(str.charAt(x));         
        }else if(str.charAt(x) == '-'){
            dash = true;
            colon = false;
        }else{
            colon = true;
        }
    }

    if( am_1.join("") == am_2.join("")){
        var minsResult = parseInt(mins.join("")) + parseInt(mins_2.join("")),
            hoursResult = 60 * (parseInt(hours_2.join("")) - parseInt(hours_1.join(""))),
            timeResult = minsResult + hoursResult;
    }else{
        var tillNoon = 12 - parseInt(hours_1.join("")),
            afterNoon = parseInt(hours_2.join("")),
            minsResult = parseInt(mins.join("")) + parseInt(mins_2.join("")),
            timeResult = (tillNoon + afterNoon) * 60 + minsResult;
    }
    
    return timeResult;
}

console.log(CountingMinutesI("10:05am-3:00pm"));