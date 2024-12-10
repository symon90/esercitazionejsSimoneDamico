// esercizio sui cicli
// esercizio 1
function stampaNumeriPari(max) {
  let array=[];
  for (let i = 0; i < max; i++) {
    if (i%2==0) {
      array.push(i);
    }
  }
  return array;
}
let massimoDisparo =prompt("inserisci un numero massimo");
let arrayNumerica=stampaNumeriPari(massimoDisparo);
alert(arrayNumerica);
// // esercizio 2
function contaCarattere(stringa,carattere) {
  let counter=0;
  let stringaArray=Array.from(stringa);
  for (let i = 0; i < stringaArray.length; i++) {
    if (stringaArray[i]==carattere) {
      counter++;
    }
  }
  alert(`Il carattere ${carattere} è presente ${counter} in ${stringa}`);
}
let ciao=prompt("Inserisci la stringa da esaminare");
let car=prompt("Inserisci il carattere da vedere nella stringa quante volte c'è");
contaCarattere(ciao, car);

//esercizio 3
function sommaDispari(min,max) {
  let somma=0;
  for (let i=min; i < max; i++) {
    if (i%2==1) {
      somma=somma +i;
    }    
  }
return somma;
}
let minimo=Number(prompt("Inserisci il valore minimo dell'intevallo"));
let massimo=Number(prompt("Inserisci il valore massimo dell'intevallo"));
console.log(minimo,massimo);

let sommatoriaDispara=sommaDispari(minimo,massimo);
alert(`La sommatoria dei numeri dispari nell'intervallo tra ${minimo} e ${massimo} è ${sommatoriaDispara}`);

//esercizio bonus

function isPalindromo(number) {
  let val=true;
  let array=Array.from(number);
  for (let i = 0; i < array.length; i++) {
    if(array[i]!=array[array.length-i-1]) {
        val=false;
    }   
    
  }
  return val;
}

let numero=Number(prompt("inserisci un numero da controllare se è palindromo"));
let bool=isPalindromo(numero);
alert(bool);