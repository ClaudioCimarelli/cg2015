var randomNumber = function(max, min){
	return function(){
       return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

var push_numbers = function(qty, randomNumber){
	var array = [];
	for (var i = 0;i < qty; i++) {
		array.push(randomNumber());
	}
	return array;
}

var filter_oddNumber = function(item){
	return item%2===1;
}
var sort_numbers_ascendent = function(one, two){
	return one - two;
}
var max = 10;
var min = 0;
var n = 10;
//exercise 2a
var a = push_numbers(n, randomNumber(max, min));

//exercise 2b
a.filter(filter_oddNumber);

//exercise 2c
a.sort(sort_numbers_ascendent)