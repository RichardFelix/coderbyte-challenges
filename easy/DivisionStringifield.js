var DivisionStringified = function(num1, num2){

	var total = parseInt(num1 / num2)
		tmp = [];
	total = "" + total;

	for(var x = 0; x < total.length+1; x++){
		if(x % 3 == 0 && x != 0){
			tmp.push(',');
			tmp.push(total.charAt(x));
		}
		else
			tmp.push(total.charAt(x));
	}

	return tmp.join("");
};


console.log(DivisionStringified(123456789234234,10000));