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

/*container array for random "losing" numbers*/
var randomMines = [];

/*generate 16 unique random numbers between 1 and 100*/
randomMines.push(getUniqueRandomNumbers(16));
console.log(randomMines);

/*set a counter*/
var counter = 0

/*keep asking for new numbers until userNumber matches an item in randomMines. update the counter.*/
do {
  var userNumber = parseInt(prompt('Scegli un numero da 1 a 100'));
  counter++;
} while (!randomMines.includes(userNumber));

/*print you lost after x tries*/
console.log('Hai perso dopo ' + counter + ' tentativi.');



// /*ask user for 1 number between 1 and 100*/
// var userNumber = prompt('Scegli un numero da 1 a 100')
//
// /*check whether user number is among the 16 random numbers*/
// if (randomMines.includes(userNumber)) {
//   console.log('Hai perso');
// }

/*yes -> you lost / no-> try again*/

/*try again until you use up all the numbers -> check for numbers already used?*/

/*keep track of how many numbers the player inputs before losing*/



/*FUNCTIONS - alphabetical order*/

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getUniqueRandomNumbers(howMany) {
  while (randomMines.length < howMany) {
    var randomMineNumber = getRandomNumber(1, 100);
    if (!randomMines.includes(randomMineNumber)) {
    randomMines.push(randomMineNumber);
    }
  }
  return randomMines;
}


/*SCRAPS*/

// while (randomMines.length < 16) {
//   var randomMineNumber = getRandomNumber(1, 100);
//   console.log(randomMineNumber);
//   if (!randomMines.includes(randomMineNumber)) {
//   randomMines.push(randomMineNumber);
//   }
// }
// console.log(randomMines);
