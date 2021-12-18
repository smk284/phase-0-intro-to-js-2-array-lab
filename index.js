// Write your solution here!

//1) 

const cats= ["Milo", "Otis", "Garfield"];
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

cats;

//2)
const destructivelyAppendCat= ["Milo", "Otis", "Garfield"];

destructivelyAppendCat.push('Ralph');

destructivelyAppendCat;

//3)

const destructivelyPrependCat= ["Milo", "Otis", "Garfield"];

destructivelyPrependCat.unshift('Bob');

destructivelyPrependCat;

//4)

const destructivelyRemoveLastCat= ["Milo", "Otis", "Garfield"];

destructivelyRemoveLastCat.pop();

destructivelyRemoveLastCat;

//5

const destructivelyRemoveFirstCat =["Milo", "Otis", "Garfield"];

destructivelyRemoveFirstCat.shift();

destructivelyRemoveFirstCat;

//6

const appendCat=["Milo", "Otis", "Garfield"];

const newAppendCat=[...appendCat,"Broom"];

newAppendCat;

//7

const prependCat=["Milo", "Otis", "Garfield"];

const newPrependCat= ["Arnold",...prependCat];

newPrependCat;

//8

const removeLastCat =["Milo", "Garfield", "Otis"];

const newLastCat= removeLastCat.slice(0, newLastCat.length-1);

newLastCat;

const removeFirstCat =["Milo", "Garfield", "Otis"];

const newFirstCat = removeFirstCat.slice(1);

newFirstCat;