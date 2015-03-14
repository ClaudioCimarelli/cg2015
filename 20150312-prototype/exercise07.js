(function () {

	function Photo(name){
		this.name = name;
		this.tags = [];
	}

	Photo.prototype.tag = function(person){
		this.tags.push(person);
	}

	Photo.prototype.isTagged = function (person){
		return this.tags.indexOf(person)!==-1;
	}

	Photo.prototype.toString = function(){
		return this.tags.reduce(function(prev,cur){
			return prev +", " + cur;
		});
	}

	Photo.prototype.showTags = function(){
		var s = "";
		console.log(s+this);
	}
	
	function PhotoAlbum() {
		this.pictures = [];
	}

	PhotoAlbum.prototype.addPicture = function(photo){
		this.pictures.push(photo);
	}

	PhotoAlbum.prototype.toString = function(){
		return this.pictures.reduce(function(prev,cur){
			return prev+", " + cur.name;
		}, "").slice(2);
	}

	PhotoAlbum.prototype.showPictures = function(person){
		var s = "";
		var selected_picture = this.pictures.filter(function(item){
			return item.isTagged(person);
		})
		s = selected_picture.reduce(function(prev,cur){
			return prev+", " + cur.name;
		}, "").slice(2);
		console.log(s+ ": {"+this+"}");
	} 

	var album = new PhotoAlbum();
	var p;

	p = new Photo("Paris Trip 1");
	p.tag("Jimmy");
	p.tag("Jane");
	p.tag("Jeff");

	album.addPicture(p);

	p = new Photo("Look the Eiffel");
	p.tag("Jimmy");
	p.tag("Max");
	album.addPicture(p);

	p = new Photo("OMG it's so high");
	p.tag("Jimmy");
	p.tag("Jane");

	// prints "Jimmy, Jane"
	p.showTags();

	album.addPicture(p);

	// prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
	album.showPictures("Jimmy");

	// prints "Paris Trip 1, OMG it's so high"
	album.showPictures("Jane");

}());