// 1. Scrivere una funzione che permetta di stampare in console tutti i numeri da 1 a N:
// N sarà il nostro parametro formale della funzione
// tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// e tutti i numeri multipli di 3 E 5 (esempio 15) siano sostituiti dalla stringa 'fizzBuzz'
// Se un numero non è multiplo né di 3 né di 5, allora stampa il numero
// Come output della funzione, voglio che mi venga ritornato il numero di stringhe
// stampate.

// function esercizio1(number) {
//   let counter=0;
//   for (let i = 1; i < number; i++) {
//     let a;
//     if (i%3==0 && i%5==0) {
//       a='fizzBuzz';
//       counter++;
//     } else if(i%3==0) {
//       a='Fizz';
//       counter++;
//     }else if(i%5==0){
//       a='Buzz';
//       counter++;
//     }else{
//       a=i;
//     }
//     console.log(a);
//     //console.log(counter);
    
    
//   }
//   return counter;
// }

// let numString=esercizio1(Number(prompt("inserisci numero massimo")));
// alert(`Nel tuo intervallo ci sono ${numString} multipli di 3 e 5`);

// Scrivere una funzione che ci calcola lo sconto da effettuare su un determinato
// prodotto. Avremo due parametri, ossia il prezzo originale e la percentuale di sconto
// da applicare.
// Come output, avremo l’importo aggiornato.
// Stampare in console “Il prezzo dopo lo sconto è di …. “

// function sconto(prezzoIntero,percentuale) {
//   let prezzoScontato= prezzoIntero-(prezzoIntero*percentuale/100);
//   console.log(prezzoScontato);
  
//   return prezzoScontato;
// }
// let prezzoIntero=Number(prompt("Inserisci il prezzo originale del prodotto"));
// let percSconto=Number(prompt("Inserisci la percentuale di sconto"));
// let prezzoScontato=sconto(prezzoIntero,percSconto);
// console.log(`Il prezzo dopo lo sconto è di ${prezzoScontato}`);
// alert(`Il prezzo dopo lo sconto è di ${prezzoScontato}`);


// 3. In un e-commerce, i prezzi dei prodotti sono memorizzati in un array. Scrivi una
// funzione chiamata highestOrLowest che prende come parametri un array di numeri (i
// prezzi dei prodotti) e un booleano “max” che specifica se vogliamo il massimo o il
// minimo.
// Nota: Questo esercizio è stato pensato per essere risolto SENZA metodi degli array.
// let prices = [299.99, 159.99, 499.99, 99.99, 79.99, 649.99];

// function highestOrLowest(prices,max) {
//     let prezzoCercato=prices[0];
//     let a;
//     if (max) {
//         a='alto';
//         for (let i = 0; i < prices.length; i++) {
//             if (prezzoCercato<prices[i]) {
//                 prezzoCercato=prices[i];
//               } 
        
//             }
//           } else {
//               a='basso';
//               for (let i = 0; i < prices.length; i++) {
//                   if (prezzoCercato>prices[i]) {
//                       prezzoCercato=prices[i];
//                     } 
              
//                   }
//               }
//     alert(`Il prezzo più ${a}  è ${prezzoCercato}`);
              
//  }
// let prices = [299.99, 159.99, 499.99, 99.99, 79.99, 649.99];
// let scelta=prompt('Vuoi il prezzo più alto o il più basso?');
// let max= scelta=="alto";

// highestOrLowest(prices, max);

// 4. Dato l’array greetings, scrivere una funzione (mediante arrow function) che conta
// quante volte un saluto appare nel suddetto array. I parametri saranno l’array e la
// parola da cercare. Se la parola da cercare non viene fornita , la funzione dovrà
// cercare la stringa "default".
// let greetings = ["ciao", “good morning”, “ciao”, "default", "ciao", "hello", "default",
// “bonjour”, “buenos dias”];
// Output desiderato:
// console.log(countWords(greetings, "ciao")); // Output: 3
// console.log(countWords(greetings)); // Output: 2

// let greetings = ["ciao", "good morning", "ciao", "default", "ciao", "hello", "default", "bonjour", "buenos dias"];

// let countWords=(greetings,saluto)=>{
//   let counter=0;
//   for (let i = 0; i < greetings.length; i++) {
//   if(greetings[i]==saluto)
//   {counter++;}
  
// }
// return counter;};
//  let saluto= prompt("Quale saluto vuoi cercare?")
// console.log(countWords(greetings, saluto));

// Esercizio bonus
// Metodo degli array .filter()
// Scrivere una funzione che, dato un array di numeri rappresentanti le età, restituisca un
// nuovo array contenente solo le età delle persone maggiorenni.
// N.B. come visto a lezione, il metodo filter ci ritorna un nuovo array.
// let ages= [17, 22, 15, 19, 12, 21, 16, 84, 61, 33, 17, 29, 48]

let ages= [17, 22, 15, 19, 12, 21, 16, 84, 61, 33, 17, 29, 48];

let result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result);
