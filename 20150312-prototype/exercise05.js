function Bingo(){
	this.secret_number = Math.floor(Math.random()*11) ;
}

Bingo.prototype.guess = function(number){
	return this.secret_number === number;
}