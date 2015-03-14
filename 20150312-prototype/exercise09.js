function Triangle(e1, e2, e3){
	this.e1 = e1;
	this.e2 = e2;
	this.e3 = e3;
}

Triangle.prototype.perimeter = function(){
	return this.e1.length() + this.e2.length() + this.e3.length();
}

Triangle.prototype.area = function(){
	var a,b,c,p;
	a = this.e1.length();
	b = this.e2.length();
	c = this.e3.length();
	p = this.perimeter()/2;

	return Math.sqrt( p*(p - a)*(p - b)*(p - c) );

}