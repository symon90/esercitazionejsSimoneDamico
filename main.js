//esercitazione sul DOM
//esrcizio 1


let object={
    name:'simone',
    age:18,
    subscribed:true
}

let json=JSON.stringify(object);

console.log(json);

let newObject=JSON.parse(json);

newObject.subscriptionDate='2024-12-31';

console.log(object);
console.log(newObject);

//esercizio 2

let btn=document.getElementById('cambia');

let txt=document.querySelector('p');

btn.addEventListener('click',()=>txt.textContent='Testo aggiornato');

//esercizio 3

let btnAdd=document.getElementById('aggiungi');
let lista=document.getElementById('lista');
btnAdd.addEventListener('click',()=>{
    let elemento=document.createElement('li');
    elemento.textContent='Nuovo elemento';
    lista.appendChild(elemento);
    
});

//esercizio 4

let btnColor=document.getElementById('cambiaColore');
let quad=document.querySelector(".quadrato");

btnColor.addEventListener('click',()=>{
    quad.style.backgroundColor = "red";
    quad.style.width='150px';
    quad.style.height='150px';
});

//esercizio 5


let celle=document.querySelectorAll('.cella');
celle[0].addEventListener('click',()=>{
    celle[0].style.backgroundColor='green';
    celle[0].textContent='Cliccata!'
})
celle[1].addEventListener('click',()=>{
    celle[1].style.backgroundColor='green';
    celle[1].textContent='Cliccata!';
})