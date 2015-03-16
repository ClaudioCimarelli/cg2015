(function () {
  // write your code here to make the program work
  function Summer(){
    this.current_sum = 0;
  }

  Summer.prototype.add = function(num){
    this.current_sum += num;
  };

  Summer.prototype.getCurrentSum = function(){
    return this.current_sum;
  } ;

  var s1 = Summer();
  var s2 = Summer();

  s1.add(10);
  s1.add(20);

  s2.add(30);

  s2.add(5);

  // prints 30
  console.log(s1.getCurrentSum());

  // prints 35
  console.log(s2.getCurrentSum());

}());
