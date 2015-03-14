(function () {
	var person = {
		buy: function(c){
			console.log("I'm rich");
		}
	};

	var  car = {
		drive: function(){
			console.log("Vrum Vrum");
		}
	};

	// print Vrum Vrum
	car.drive();
	
	car.price=1001;

	// print I'm rich
	if ( car.price > 1000 ) {
	person.buy(car);
	}

}());

(function () {

	function Employee() { }

	Employee.prototype.hello = function(){
			console.log("I work at IBM");
		}

	var employees = [new Employee(), new Employee(), new Employee()];

	for (var i=0; i < employees.length; ++i ) {
	employees[i].hello();
	}

}());
