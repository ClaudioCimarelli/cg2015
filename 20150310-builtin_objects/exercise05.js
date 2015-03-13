var randomNumber = function(max, min){
	return function(){
       return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
var push_numbers = function(qty, numberFunction){
	var array = [];
	for (var i = 0;i < qty; i++) {
		array.push(numberFunction());
	}
	return array;
}

var log_max_in_pushed_numbers = function(range, numberFunction){
	var random_array = push_numbers(range, numberFunction);
	console.log(random_array);
	console.log(Math.max.apply(null,(random_array)))
}

var range = 3;
var numberFunction = randomNumber(100, 0);
var array = push_numbers(range, numberFunction);
log_max_in_pushed_numbers(range, numberFunction);