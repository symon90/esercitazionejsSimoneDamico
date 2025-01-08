// 1. Scrivi uno script che rilevi quando vengono premuti contemporaneamente i tasti
// "Shift" e "A" e mostri un messaggio nella console.

// let text=document.getElementById('text');
// text.addEventListener('keydown',(event)=>{
//     event.preventDefault();
//     if (event.shiftKey && event.key=='A') {
//         text.textContent='Hai premuto SHIFT e A';
//     }
// });

// 2. Crea una pagina HTML con un <p> vuoto. Usa l'evento keydown per aggiornare il
// testo del <p> con i tasti premuti dall'utente (es: premendo "a" nel campo, il paragrafo
// mostrerà "a").

let par=document.getElementById('paragrafo');
document.addEventListener('keydown',(event)=>{
    let carattere=event.key;
    par.textContent+=carattere;
    
});

// 3. Dato il seguente form
// <form id="mioForm"> <input type="text" id="nome" placeholder="Scrivi qualcosa" />
// <button type="submit">Invia</button> </form>
// Scrivi uno script per bloccare l’invio solo se il campo di input è vuoto e viene premuto
// il tasto "Enter". Se il campo non è vuoto, mostra un messaggio "Form inviato
// correttamente".

// let nome=document.getElementById('nome');
// nome.addEventListener('keydown', (event)=>{
//     if(event.key=='Enter'){
//         if (nome.value=='') {
//             event.preventDefault();
//             alert('il form è vuoto');
//         } else {
//             alert('il form è stato inviato correttamente');
//         }
//     }
// });

// 4 Aggiungi un controllo che permetta l'invio del form solo se l'utente ha premuto la
// combinazione "Ctrl + Enter".

let nome=document.getElementById('nome');
nome.addEventListener('keydown', (event)=>{
    if(event.key=='Enter' && event.ctrlKey){
        if (nome.value=='') {
            event.preventDefault();
            alert('il form è vuoto');
        } else {
            alert('il form è stato inviato correttamente');
        }
    }else if(event.key=='Enter'){
        event.preventDefault();
    }
});

// 5 Fai una chiamata a https://jsonplaceholder.typicode.com/users e crea una lista <ul>
// che mostra i nomi degli utenti

// let lista=document.getElementById('listaUtenti');
// fetch('https://jsonplaceholder.typicode.com/users',{

// }).then(resp=>resp.json())
// .then(data=>{
//     data.forEach(element => {
//         let node=document.createElement('li');
//         node.appendChild(document.createTextNode(element.name));
//         lista.appendChild(node);
//     });
// });

// 6. Modifica l’esercizio precedente per aggiungere, sotto ogni nome, il numero di
// telefono e l'email degli utenti.
let lista=document.getElementById('listaUtenti');
fetch('https://jsonplaceholder.typicode.com/users',{

}).then(resp=>resp.json())
.then(data=>{
    data.forEach(element => {
        let list=document.createElement('ol');
        let nodeName=document.createElement('li');
        let nodePhone=document.createElement('li');
        let nodeEmail=document.createElement('li');
        nodeName.appendChild(document.createTextNode(element.name));
        nodePhone.appendChild(document.createTextNode(element.phone));
        nodeEmail.appendChild(document.createTextNode(element.email));
        list.appendChild(nodeName);
        list.appendChild(nodePhone);
        list.appendChild(nodeEmail);
        lista.appendChild(list);
    });
});

// 7 Scrivi una funzione che usa una Promise per simulare il caricamento di dati in 3
// secondi. Mostra un messaggio "Caricamento in corso..." subito e "Dati caricati!" dopo
// 3 secondi.
// N.B nonostante a lezione abbiamo visto che sia sbagliato, in questo esercizio devi
// usare il setTimeout
let load=document.getElementById('load');
let promise=new Promise((resolve,reject)=>{
    load.textContent='Caricamento in corso...';
    setTimeout(() => {
        resolve(

            load.textContent='Dati caricati'
        )
    }, 3000);
    
});
// 8. Scrivi una funzione che restituisce una Promise che risolve con il valore "Successo"
// se il numero passato come argomento (alla funzione) è pari, altrimenti rifiuta con il
// valore "Errore". Usa .then e .catch per gestire il risultato.

function isPari(n) {
    return new Promise((resolve,reject)=>{
        if(n%2==0){
            return n;
        }else{
            throw new Error('Numero dispari');
        }
    })
    .then(()=>{
        resolve();
    })
    .catch(e=>{
        alert(e);
    })
}

// isPari(3)
// .then(alert(' è un numero pari'))
// .catch(alert('Numero dispari'));

// 9 Crea una funzione asincrona che usa setTimeout per aspettare 5 secondi prima di
// restituire il messaggio "Pronto!". Chiama la funzione e mostra il messaggio nella
// console.

async function pronto() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(console.log('pronto'))
        },5000)
    });
    
}
pronto();


// 10. Fai una richiesta a un URL non valido (es: https://invalid.url) usando async/await e
// gestisci l'errore mostrando un messaggio di errore personalizzato nella console.


async function fecth() {
    try {
        let response = await fetch("http:nonesistespero", {});
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('errore voluto');
        
    }
}

fecth();