//esercizio 1
const MIN=1;
const MAX=6;
let dado=Math.round(Math.random()*MAX-MIN)+MIN;
console.log(`Il risultato del dado è ${dado}`);

if (dado>3) {
    console.log("è uscito un numero maggiore di 3");
    
} else {
    console.log("è uscito un numero minore o uguale a 3");
    
}

//esercizio 2
let votoMax=100;
let votoMin=1;
let voto=Math.round(Math.random()*votoMax-votoMin)+votoMin;
console.log(`Il voto è ${voto}`);

if (voto>89) {
    console.log('Ottimo!');    
} else if(voto>69) {
    console.log('Buono!');
}else if(voto>59){
    console.log('Insufficiente!');
}else{
    console.log('Insufficiente!');
}

//esercizio 3
let stagioneMax=12;
let stagioneMin=1;
let stagione=Math.round(Math.random()*stagioneMax-stagioneMin)+stagioneMin;
console.log(stagione);

switch (stagione) {
    case 12:
    case 1:
    case 2:
        console.log("Inverno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break; 
    case 6:
    case 7:
    case 8:
        console.log("Estate");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autunno");
        break;
    
    default:
        break;
}

//esercizio 4
let età=Math.round(Math.random()*40);
console.log(`L'età è ${età}`);

età>=18?console.log(`Sei maggiorenne`) : console.log(`Sei minorenne`);

//esercizio Bonus
let massimo=prompt("Inserisci un numero da cui sommare i numeri pari");
let sommaPari=0;
let i=0;
while(i<=massimo){
    if (i%2==0) {
        sommaPari=sommaPari+i;
    }
    i++;
}
console.log(sommaPari);
