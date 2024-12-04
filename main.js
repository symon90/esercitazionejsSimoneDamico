//esercizio 1
let numb= 1;
let string =`ciao a tutti`;
let boolean= true;
let indefinita;
let nulla="";
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

//esercizio 4
let userNome=prompt("Qual è il tuo nome?");
let userCognome=prompt("Qual è il tuo cognome?");
console.log(`Benvenuto, ${userNome} ${userCognome}`);
console.log("Benvenuto,"+" "+userNome+" "+userCognome);

//esercizio 5
let input=prompt("Inserisci un valore di input");
if (input) {
    console.log("Il valore è truthy");
    
} else {
    console.log("Il valore è falsy");

}

//esercizio 6
let primaV=prompt("Dammi il primo valore");
let secondaV=prompt("Dammi il secondo valore");
if (primaV>10 && secondaV>10) {
    console.log("Entrambe le variabili sono maggiori di 10");
    
} else if (primaV>10 || secondaV>10){
    console.log("Almeno una delle 2 variabili è maggiore di 10");

}else{
    console.log("Nessuna delle 2 variabili è maggiore di 10");

}

//esercizio 7
let ciccio=5;
let franco="5";
if (ciccio==franco) {
    console.log("le variabili sono uguali");
  
}else{
    console.log("le variabili non sono uguali");
    
}

if (typeof(ciccio)==typeof(franco)) {
    console.log("le variabili sono dello stesso tipo");
  
}else{
    console.log("le variabili non sono sono dello stesso tipo");
    
}
if (ciccio!=franco) {
    console.log("le variabili non sono uguali");
  
}else{
    console.log("le variabili non sono uguali");
    
}
if (ciccio!==franco) {
    console.log("le variabili sono strettamente diversi");
  
}else{
    console.log("le variabili sono strettamente uguali");
    
}
// esercizi BONUS
// 1
let f=Number(prompt("Inserisci un valore"));
if(10<f && f<100){
    console.log("il valore è tra 10 e 100");
    
}else{
    console.log("Il valore non è compreso tra 10 e 100");
    
}

//2
let io=Number(prompt("Quanti anni hai?"));
let amico=Number(prompt("Quanti anni ha il tuo amico?"));
if (io<amico) {
    console.log("Tu sei più giovane");
    
} else if (io>amico){
    console.log("Il tuo amico è più giovane");
    
}else{
    console.log("tu e il tuo amico avete la stessa età");
    
}