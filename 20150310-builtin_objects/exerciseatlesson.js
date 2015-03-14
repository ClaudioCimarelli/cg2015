function Rectangle(base, height){
	this.base = base;
	this.height = height;
}

Rectangle.prototype.area = function() {
	return this.base*this.height;
};

var r1 = new Rectangle(10,10);
r1.area();
