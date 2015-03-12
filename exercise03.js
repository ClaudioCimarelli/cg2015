var capitalize_word  = function(word) {
	return word[0].toUpperCase() + word.slice(1);
};

var capitalize_text = function(text) {
	
	var words = text.split(' ');
	words = words.map(capitalize_word);
	return words.join(' ');
};

var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.";



