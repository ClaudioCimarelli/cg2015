(function() {
  var randomNumber = function(max, min){
  return function(){
       return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
  var favorite_album = function( collection ) {
    // do nothing if got an empty collection
    if ( collection.length === 0 ) {
      return;
    }

    // define two variables and initialize them
    var max_played = collection[0].played;
    max_index  = 0;

    for ( var i=0, len = collection.length; i < len; i++ ) {
      if ( collection[i].played > max_played ) {
        max_played = collection[i].played;
        max_index  = i;
      }
    }

    return { play: max_played, index: max_index };
  };

  function Music(track_number){
    this.music = [];
    while(track_number--){
      this.music[track_number] = new Track(0);
    }
    this.length= this.music.length;
    this.increment_played_times = function(numberFunction){
      for(var i=0 ; i<this.music.length;i++){
        this.music[i].played += numberFunction();
      }
    }
  }
  function Track(played_times){
    this.played= played_times;
  }

  var m1 = new Music(10);
  m1.increment_played_times(randomNumber(100,0));

  var music = m1.music;

  var fav = favorite_album( music );

  console.log( "Your favorite album was played " + fav.play + " times" );

  // Bonus: Write code here to make the following line print the above line
  fav.constructor.prototype.toString = function(){
    return "Your favorite album was played " + this.play + " times";
  }
  console.log( ""+fav );
}());

