// Exercise 1

for (var hash = '#'; hash.length <= 7; hash = hash + '#') {
  console.log(hash);
}

// Exercise 2//

for (var count = 1; count <=100 ; count++) {
  if (count % 3 == 0 && count % 5 == 0){
  	console.log('fizzbuzz')
	}
  else if (count % 3 == 0){
    console.log('fizz')
  }
  else if (count % 5 == 0){
    console.log('buzz')
  }
  else {
    console.log(count);
  }
}

// Exercise 3//

var size = 8;

var board = "";

for (var line = 0; line < size; line++) {   
  for (var box = 0; box < size; box++) {
    if ((box + line) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);