// Write your solution here!
//1) 

let cats = ["Milo", "Otis", "Garfield"];

//2)
function destructivelyAppendCat(name) {

cats.push(name);
} 

//3)

function destructivelyPrependCat (name){

cats.unshift(name);
}

//4)

function destructivelyRemoveLastCat(name) {

cats.pop(name);
}

//5

function destructivelyRemoveFirstCat(name) {

cats.shift();
}

//6

function appendCat(name) {

appendCat = [cats.slice()];

appendCat =[...cats, "Broom"];

return appendCat;
}

//7

function prependCat(name) {

  prependCat= cats.slice();
  prependCat=["Arnold",...cats]

  return prependCat;
}

//8

function removeLastCat(name){

   removeLastCat= cats.slice(0, cats.length-1);
   return removeLastCat;
}
//9 
function removeFirstCat(name){

 removeFirstCat= cats.slice(1);
 return removeFirstCat;
}