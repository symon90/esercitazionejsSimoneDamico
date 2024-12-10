// esercizio sui cicli
// esercizio 1
// function stampaNumeriPari(max) {
//   let array=[];
//   for (let i = 0; i < max; i++) {
//     if (i%2==0) {
//       array.push(i);
//     }
//   }
//   return array;
// }
// let massimo =prompt("inserisci un numero massimo");
// let arrayNumerica=stampaNumeriPari(massimo);
// alert(arrayNumerica);
// // esercizio 2
// function contaCarattere(stringa,carattere) {
//   let counter=0;
//   let stringaArray=Array.from(stringa);
//   for (let i = 0; i < stringaArray.length; i++) {
//     if (stringaArray[i]==carattere) {
//       counter++;
//     }
//   }
//   alert(`Il carattere ${carattere} è presente ${counter} in ${stringa}`);
// }
// let ciao=prompt("Inserisci la stringa da esaminare");
// let car=prompt("Inserisci il carattere da vedere nella stringa quante volte c'è");
// contaCarattere(ciao, car);

//esercizio 3
let somma=0;
function sommaDispari(min,max) {
  for (let i=min; i < max; i++) {
    if (i%2==1) {
      somma=somma +i;
    }    
  }
  return somma;
}

let min=prompt("Inserisci il valore minimo dell'intevallo");
let max=prompt("Inserisci il valore massimo dell'intevallo");
let sommatoriaDispara=sommaDispari(min,max);
alert(`La sommatoria dei numeri dispari nell'intervallo tra ${min} e ${max} è ${sommatoriaDispara}`);