(function() {
  var larger = function(o1, o2) {
    if ( o1.size > o2.size ) {
        console.log('o1 is larger');
    } else {
        console.log('o2 is larger');
    }
  };

function Shape (size){
  this.size = size;
}
  var x = new Shape(10);

  var y = new Shape(5);

  larger(x, y);    
}());