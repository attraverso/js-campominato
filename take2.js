/*Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.
BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
con difficoltà 2=> si gioca con numeri che vanno da 1 a 50
*/

/*ask for difficulty level and keep asking if the input isn't valid*/
do {
  var getDifficulty = prompt('Choose your level: 0 - easy, 1 - normal, 2 - difficult');

  /*validity check on getDifficulty*/
  var checkDifficulty = isValidNumber(getDifficulty, 0, 3);
  // console.log('checkDifficulty is valid? ' + checkDifficulty);

  if (!checkDifficulty) {
    alert('Hai inserito un valore non corretto');
  }

} while (!checkDifficulty);


/*establish difficulty levels*/
if (getDifficulty == 0) {
  level = 100;
} else if (getDifficulty == 1) {
  level = 80;
} /*test level*/ else if (getDifficulty == 3) {
  level = 20;
} else {
  level = 50;
}

/*create array with random "losing" numbers*/
var mines = (getUniqueRandomNumbers(16, level));

/*container array for max tries count*/
var maxTriesCheck = [];

/*copy losing numbers into total number count*/
var maxTriesCheck = mines.slice();
console.log(mines);
console.log(maxTriesCheck);

/*set a counter variable for scorekeeping*/
var scoreKeeper = 1;

do {
  /*ask for a number between 1 and what's required by the level of difficulty - if input isn't valid, pop alert and keep asking*/
  var getUserNumber = parseInt(prompt('Pick a number between 1 and ' + level));

  /*validity check on getUserNumber*/
  var checkUserNumber = isValidNumber(getUserNumber, 1, level);
  console.log('checkusernumber is valid? ' + checkUserNumber);

  if (!checkUserNumber) {
    alert('Hai inserito un valore non corretto');
  }

  /*if the number matches a mine: you lose, otherwise, push the number into total number count array*/
  if (mines.includes(getUserNumber)) {
    console.log('Your score is: ' + scoreKeeper);
  } else if (!maxTriesCheck.includes(getUserNumber) && checkUserNumber) {
    maxTriesCheck.push(getUserNumber);
    /*update score*/
    scoreKeeper++;
    console.log(maxTriesCheck);
  }

} /*keep running until total number conut reaches what's required by level of difficulty*/
  while (!mines.includes(getUserNumber) && (maxTriesCheck.length) < level);

/*if you manage to survive the do-while cycle then congrats, you're a winner!*/
if ((maxTriesCheck.length) >= level) {
  console.log('You win');
}

/*FUNCTIONS - alphabetical order*/

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getUniqueRandomNumbers(howMany, maxNumber) {
  var randomNumbersArray = [];
  while (randomNumbersArray.length < howMany) {
    var randomMineNumber = getRandomNumber(1, maxNumber);
    if (!randomNumbersArray.includes(randomMineNumber)) {
    randomNumbersArray.push(randomMineNumber);
    }
  }
  return randomNumbersArray;
}

function isValidNumber(value, min, max) {
  if (isNaN(value) || value < min || value > max ) {
    return false;
  } else {
    return true;
  }
}
