function Door(){
	this.opened = false;
}

Door.prototype.open = function(){
	this.opened = true;
}

Door.prototype.close = function(){
	this.state = false;
}

function SecurityDoor(){
	Door.call(this);
	this.locked = false;
}

SecurityDoor.prototype = Object.create(Door.prototype);
SecurityDoor.prototype.constructor = SecurityDoor;

SecurityDoor.prototype.lock = function(){
	if(!this.opened)
		this.locked = true;
	};
SecurityDoor.prototype.unlock = function(){
	this.locked = false;
	};
SecurityDoor.prototype.open = function(){
	if(!this.locked)
		Door.prototype.call(this);
	};
