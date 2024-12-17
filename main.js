// 1. Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li
// riordini in modo decrescente.
// Esempio:
// Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
// Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]

function arraySort(array) {
  array.sort(function(a,b){return b-a});
  return array;
}
array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

let arrayOrdinato=arraySort(array);
console.log(arrayOrdinato);

// 2. Scrivi una funzione chiamata filterBigNumbers che prenda in input un array di
// numeri come parametro e restituisca come output un nuovo array contenente solo i
// numeri maggiori di 10.
// const numbers = [4, 15, 7, 22, 5];


const numbers = [4, 15, 7, 22, 5];

function filterBigNumbers(numbers) {
  return (numbers>10);
}
const result= numbers.filter(filterBigNumbers);
console.log(result);


// 3. Scrivi una funzione chiamata getSum che prenda un array di numeri come parametro
// e restituisca la somma di tutti i numeri nell'array. Utilizzare il metodo .reduce().

function getSum(total, num) {
  return total+=num;
}

console.log(numbers.reduce(getSum,0));

// 4. Scrivi una funzione chiamata squaredEvenNumbers che prenda un array di numeri
// come parametro e restituisca un nuovo array contenente il quadrato dei numeri pari.
// N.B. sono vietati cicli di ogni tipo (anche il for each). Come visto a lezione, abbiamo
// dei metodi degli array che internamente ciclano sull’array.

function squaredEvenNumbers(numbers) {
  return numbers.map((n)=>{
    if (n%2==0) {
      n=n*n;
    }
    return n;
  });
}
console.log(squaredEvenNumbers(numbers));


// 5. Hai un array di oggetti che rappresenta un carrello su un ecommerce. Ogni oggetto
// contiene informazioni su un prodotto: il nome, il prezzo unitario e la quantità
// acquistata.
const cart = [
{ product: "Laptop", price: 1000, quantity: 1 },
{ product: "Mouse", price: 25, quantity: 2 },
{ product: "Headphones", price: 100, quantity: 1 },
{ product: "USB Cable", price: 10, quantity: 5 },
];

// 1. Calcolare il totale per ogni prodotto
// Aggiungi una nuova proprietà a ciascun oggetto dell'array, chiamata total, che
// rappresenta il costo totale del prodotto (prezzo moltiplicato per la quantità).
// Esempio:
// { product: "Mouse", price: 25, quantity: 2, total: 50 }
// Puoi fare questa operazione spezzando l’oggetto e aggiungendo la nuova
// proprietà.


cart.forEach(element => {
  element.total=element.price*element.quantity;
});
console.log(cart);

// 2. Filtrare i prodotti costosi
// Crea un nuovo array contenente solo i prodotti il cui costo totale (total) è
// maggiore di 50 euro.

let cartExpensive=cart.filter((c)=>c.price>50);
console.log(cartExpensive);

// 3. Calcolare il totale del carrello
// Somma i costi totali di tutti i prodotti per ottenere il costo complessivo del
// carrello.
let sommaTotale=0;
for (let i = 0; i < cart.length; i++) {
  sommaTotale+=cart[i].total;
}

console.log(sommaTotale);

// 4. Applicare uno sconto del 10% sui prodotti costosi
// Crea un nuovo array in cui i prodotti con un costo totale superiore a 50 euro
// ricevono uno sconto del 10% sul prezzo unitario. I prodotti con costo totale
// pari o inferiore a 50 rimangono invariati.
// ● Usa metodi come map, filter, reduce e lo spread operator per completare
// l'esercizio.
// ● Non modificare l'array originale cart.
// ● Stampa i risultati di ogni operazione usando console.log.
//
console.log(cart);
let cartDiscount= cart.map((n)=>{
  
  if (n.price>50) {
    let newPrice=n.price*8/10;
    n.price=newPrice;
    
  }
  return n;
});
console.log(cartDiscount);



// 3. Hai un array di oggetti che rappresenta un inventario di prodotti. Ogni oggetto
// contiene informazioni sul prodotto: il nome, la quantità in magazzino (stock) e il
// prezzo unitario.
const inventory = [ { product: "Laptop", stock: 5, price: 1000 }, 
                    { product: "Mouse", stock: 50, price: 20 },
                    { product: "Keyboard", stock: 0, price: 50 }, 
                    { product: "Monitor", stock: 10, price: 200 }, ];

                    // 1. Trovare i prodotti esauriti
                    // Crea un nuovo array contenente solo i prodotti che hanno uno stock pari a 0.
let productEsauriti= inventory.filter((i)=>i.stock==0);
console.log(productEsauriti);

// 2. Calcolare il valore totale dei prodotti disponibili
// Filtra i prodotti con stock maggiore di 0 e crea un nuovo array dove dentro gli
// oggetti hanno una proprietà in più, chiamata totalValue, calcolata stock *
// price.
// Esempio:
// { product: "Laptop", stock: 5, price: 1000, totalValue: 5000 }


let prodottiDisponibili=inventory.filter((p)=>p.stock!=0);
prodottiDisponibili.forEach((p)=>  p.totalValue=p.stock*p.price);
console.log(prodottiDisponibili);

// 3. Calcolare il valore totale dell'inventario
// Usa il metodo reduce per calcolare la somma del valore totale di tutti i prodotti
// (inclusi quelli esauriti, considerando stock = 0 come valore nullo).

let carrelloTotale= inventory.reduce((totIniziale, num)=>totIniziale+num.price*num.stock,0);
console.log(carrelloTotale);

// 4. Aggiornare l'inventario con nuovi prodotti
// Aggiungi i seguenti nuovi prodotti all'inventario utilizzando lo spread operator:
const newProducts = [ { product: "Tablet", stock: 20, price: 300 }, { product:
"Smartphone", stock: 15, price: 800 }, ];
inventory.push(...newProducts);
console.log(inventory);
