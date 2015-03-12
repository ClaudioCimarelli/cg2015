var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var values = ['goofy', 'scrooge'];

var select = function(data, key, values){
	return data.filter(filter_object(key, values));
}
var filter_object = function(obj_key, values){
	return function (item){
		return values.indexOf(item[obj_key])!==-1;
	}
}
var result = select(data, key, values); // [ { id:'04', name:'goofy' }, { id:'06', name:'scrooge' } ]
