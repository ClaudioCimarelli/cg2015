(function() {

	function Album(artist, album){
		this.artist = artist;
		this.album = album;
	}

	Album.prototype.play = function(){
		console.log("Playing " + this);
	};

	Album.prototype.toString = function(){
		return this.artist + " - " + this.album;
	};

	function MusicBox(){
		this.playlist = [];
	}

	MusicBox.prototype.addAlbum = function(album){
		this.playlist.push(album);
	};

	MusicBox.prototype.favoriteAlbum = function(){
		return this.playlist[0];
	};

	var box = new MusicBox();
	var a1 = new Album("The Who", "Tommy");
	var a2 = new Album("Tom Waits", "Closing Time");
	var a3 = new Album("John Cale", "Paris 1919");
	var favorite;

	box.addAlbum(a1);
	box.addAlbum(a2);
	box.addAlbum(a3);

	a1.play() ; // prints "Playing The Who - Tommy"
	a2.play(); // prints "Playing Tom Waits - Closing Time"
	a1.play(); // prints "Playing The Who - Tommy"

	favorite = box.favoriteAlbum();

	// prints "favorite album is The Who - Tommy"
	console.log("favorite album is " + favorite);
}());

/* Exercise 06a */

MusicBox.prototype.addAlbum = function(){
	for(var i = 0; i< arguments.length; i++)
		this.playlist.push(arguments[i]);
	};

/* Alternativa con forEach */

MusicBox.prototype.addAlbum = function (){
	arguments.forEach( function(album){this.playlist.push(album);} );
};

MusicBox.prototype.addAlbum = function (){
 		this.playlist = this.playlist.concat(arguments);
};
