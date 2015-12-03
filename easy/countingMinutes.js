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
                    mins_2.push(parseInt(str.charAt(x)));
                else
                    mins.push(parseInt(str.charAt(x)));
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
    
    mins = parseInt(mins.join(""));
    mins_2 = parseInt(mins_2.join(""));
    hours_1 = parseInt(hours_1.join(""));
    hours_2 = parseInt(hours_2.join(""));
    
    var minsResult = 0,
        hoursResult =0,
        timeResult = 0,
        tillNoon = 0,
        afterNoon = 0,
        hoursResult = hours_2 - hours_1;

    if( am_1.join("") == am_2.join("")){
        
        if(hoursResult > 0)
            hoursResult *= 60;
        
        if(mins > mins_2){
            minsResult = mins - mins_2;
            timeResult = hoursResult - minsResult;
        }else{
            minsResult = mins_2 - mins;
            timeResult = hoursResult + minsResult;
        }

    }else{
        
        if(hours_1 == 12)
            tillNoon = 12
        else
            tillNoon = 12 - hours_1;
        
        afterNoon = hours_2;
        
        if(mins > mins_2)
            timeResult = hoursResult - minsResult;
        else
            minsResult = mins_2 - mins;
        
        timeResult = (tillNoon + afterNoon) * 60 + minsResult;
    }
    
     return timeResult;
}

console.log(CountingMinutesI("1:10am-1:20pm"));