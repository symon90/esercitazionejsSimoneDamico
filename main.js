
//1parte

let libro={
  titolo:"Il Signore degli Anelli",
  autore:"J.R.R. Tolkien",
  annoPubblicazione: 1954
}

console.log(`${libro.titolo} è stato scritto da ${libro.autore} e pubblicato nel ${libro.annoPubblicazione}`);
console.log(`${libro["titolo"]} è stato scritto da ${libro["autore"]} e pubblicato nel ${libro["annoPubblicazione"]}`);


libro.genere="Fantasy";
libro.annoPubblicazione=1955;
console.log(`${libro.titolo} è un libro di genere ${libro.genere} stato scritto da ${libro.autore} e pubblicato nel ${libro.annoPubblicazione}`);


let studente={
  nome:'Simone',
  cognome:'D\'Amico',
  saluto:function () {
    console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
    
  }
}

studente.saluto();


//2 parte

let carrello={
  products: [],
  addProduct:function (product) {
    this.products.push(product);
  },
  showCart:function () {
    console.log(this.products);
    
  }
}

carrello.addProduct("Pane");
carrello.addProduct("Latte");

carrello.showCart();



class Person {
  constructor(name, age) {
    this.name=name;
    this.age=age;
  }
  presenta(){
    console.log(`Mi chiamo ${this.name} e ho ${this.age} anni`);
    
  }
}

let simone=new Person("simone", 34);

simone.presenta();

class Animal {
  constructor(nome) {
    this.nome=nome;
  }
  verso(){
    console.log(`${this.nome} fa un verso`);
    
  }
}

class Cat extends Animal{
  
  verso(){
    console.log(`${this.nome} miagola`);
    
  }
}

let gatto =new Cat("Ciuffetta");
gatto.verso();

// 3 parte

let mioCompleanno= new Date("1990-09-01");

console.log(mioCompleanno.getFullYear());
console.log(mioCompleanno.getMonth());
console.log(mioCompleanno.getDate());


let oggi=new Date();
oggi.setDate(oggi.getDate()+7);
console.log(oggi);

let giocatore={
  punteggio: 0
}

let newGiocatore={...giocatore};
newGiocatore.punteggio=3;

console.log(giocatore.punteggio);
console.log(newGiocatore.punteggio);

function calculatePrice(discount, price) {
  if (discount>100 ) {
    throw new Error("Sconto maggiore del 100%");
    
  }else if (discount<0) {
    throw new Error("Sconto negativo");
    
  } else {
    
    price =price-price*discount/100;
    return price;
  }
}

try {
  calculatePrice(-110,100)
} catch (error) {
  console.log(error);
  
}

class Contatto {
  constructor(name, number) {
    this.name=name;
    this.number=number;
  }
}

class Rubrica {
  constructor(contatto) {
    this.contatto=contatto;
  }

  aggiungiContatto(contatto){
    this.contatto.push([contatto.name,contatto.number]);

  }
  trovaContatto(contatto){
    let result=this.contatto.find(n=>n=contatto.name);
    return result;
  }
  cancellaContatto(contatto){
    let result=this.contatto.findIndex(n=>n=contatto.name);
    this.contatto.splice(result,1);
  }
}

let simon=new Contatto('simone', 13);
let rubrica= new Rubrica([]);
rubrica.aggiungiContatto(simon);
let result=rubrica.trovaContatto(simon);
console.log(result);
console.log(rubrica);

rubrica.cancellaContatto(simon);
console.log(rubrica);