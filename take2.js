/*container array for random "losing" numbers*/
var mines = [];
/*container array for max tries count*/
var maxTriesCheck = [];

/*filled in to check max tries, REMEMBER TO SUB W ACTUAL CODE*/
for (var i = 1; i <= 20; i++) {
  mines.push(i);
}
for (var i = 1; i <= 96; i++) {
  maxTriesCheck.push(i);
}
console.log(mines);
console.log(maxTriesCheck);

/*set a counter*/
var scoreKeeper = 1;

/*ask for a number between 1 and 100*/

do {
  getUserNumber = parseInt(prompt('Pick a number between 1 and 100'));
  if (mines.includes(getUserNumber)) {
    console.log('Your score is: ' + scoreKeeper);
  } else if (!maxTriesCheck.includes(getUserNumber)) {
    maxTriesCheck.push(getUserNumber);
  }
  scoreKeeper++;
  console.log(maxTriesCheck);
} while (!mines.includes(getUserNumber) && maxTriesCheck.length < 100);

if (maxTriesCheck.length >= 100) {
  console.log('You win');
}
