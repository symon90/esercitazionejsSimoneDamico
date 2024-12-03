//esercizio 1
let numb= 1;
let string =`ciao a tutti`;
let boolean= true;
let indefinita;
let nulla=null;
console.log(typeof(numb));
console.log(typeof(string));
console.log(typeof(boolean));
console.log(typeof(indefinita));
console.log(typeof(nulla));

//esercizio 2
//let nome = 'Mario;
let nome='Mario';
 let età = 30; 
 //const indirizzo = `Via Roma 10';
 const indirizzo= `Via Roma 10`;
  //console.log(Nome);
  console.log(nome);
  
//esercizio 3
let a=prompt("Dammi il valore di a");
let b=prompt("Dammi il valore di b")
let somma=Number(a)+Number(b);
console.log(`La somma di a e b è ${somma}`);
let sottrazione=a-b;
console.log(`La sottrazione di a e b è ${sottrazione}`);
let moltiplicazione=a*b;
console.log(`La moltiplicazione di a e b è ${moltiplicazione}`);
let divisione=a/b;
console.log(`La divisione di a e b è ${divisione}`);
let modulo=a%b;
console.log(`Il modulo di a e b è ${modulo}`);
let max=Math.max(a,b);
console.log(`Il massimo tra a e b è ${max}`);
