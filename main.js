// 1.
// Crea una pagina HTML con un paragrafo e due pulsanti. Scrivi uno script che permette di:
// ● Cambiare il colore del testo del paragrafo al clic sul primo pulsante.
// ● Ripristinare il colore originale al clic sul secondo pulsante.
function randomColor() {
    let colori=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let colore='#';
    for (let i = 0; i < 6; i++) {
        colore+=colori[Math.round(Math.random()*15)];
        
    }
    return colore;
}
let par=document.querySelector('#par');

function changeColor() {
    par.style.color=randomColor();
}
function defaultColor() {
    par.style.color='black';
}

// 2.
// Crea una pagina HTML con un campo di input e un pulsante. Ogni volta che l'utente scrive
// qualcosa nell'input e clicca sul pulsante:
// ● Aggiungi l'elemento alla lista sotto il pulsante.
// ● Se un elemento della lista viene cliccato, rimuovilo.

let text=document.querySelector('#text');
let lista=document.querySelector('#lista');
function prendiValore() {
    let arrayText=[];
    arrayText.push(text.value);
    arrayText.forEach((text)=>{
        let par=document.createElement('p');
        par.innerText=text;
        par.onclick=()=>removeMe(par);
        document.body.appendChild(par);

    })
    text.value='';
}

function removeMe(params) {
    document.body.removeChild(params);
}

// 3.
// Crea una pagina HTML con un pulsante “Start Timer” e un altro pulsante “Stop Timer”.
// Quando premi "Start Timer", un numero (partendo da 0) inizia a incrementarsi ogni secondo
// e viene mostrato sulla pagina. Quando premi "Stop Timer", il contatore si ferma.
let interval;
let timer=document.querySelector('#timer');
function startTimer() {
    let t=0;
    interval=setInterval(()=>{
        t+=0.01;
        timer.innerText=t;
    },10);

}
function stopTimer() {
        clearInterval(interval);
}

// 4.
// Dentro al seguente HTML, crea (utilizzando JavaScript) una griglia 3x3 di div con colori
// iniziali casuali. Quando clicchi su un div, cambia il suo colore a un altro colore casuale.
// Fornisci un pulsante che resetti tutti i div ai colori originali.
let arrayColor=[];
let container=document.querySelector('#container');
for (let u = 0; u < 9; u++) {
    let diver=document.createElement('div');
    let color=randomColor()
    arrayColor.push(color);
    diver.classList.add('diver');
    diver.style.background=color;
    diver.style.display='inline-block';
    diver.style.width='33%';
    diver.style.height='33vh';

    diver.onclick=()=>{
       change(diver);
    }
    container.appendChild(diver)
}
function change(params) {
    params.style.background=randomColor()
}

function resetColor() {
    let divers=document.querySelectorAll('.diver');
    for (let i = 0; i < arrayColor.length; i++) {
        divers[i].style.background=arrayColor[i];
    }
}


// Promises
// 1.
// Scrivi una funzione che utilizza fetch per recuperare i dati da
// https://jsonplaceholder.typicode.com/users.
// 1. Ottieni i dati degli utenti e stampali in console.
// 2. Gestisci eventuali errori con un catch.

const url='https://jsonplaceholder.typicode.com/users';
function fetchUrl() {
    try {
        let response =  fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json =  response.json();
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }

//     2.
// Utilizza fetch per ottenere gli utenti e visualizzarli dinamicamente come una lista sulla
// pagina.
// Obiettivo:
// 1. Usa i dati dell'endpoint per creare una lista <ul> con il nome di ogni utente come <li>.
// 2. Mostra un messaggio di errore nel DOM se la richiesta fallisce.
// HTML di partenza:
// <ul id="lista-utenti"></ul>
// <p id="errore" style="color: red;"></p>
let pError=document.querySelector('#errore');
let listaUser=document.querySelector('#lista-utenti');
async function fetchUser() {
    try {
        let response =  await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        let json = await response.json();
        json.forEach((el)=>{
            let li=document.createElement('li');
            li.innerText=el.name;
            listaUser.appendChild(li);
        })
      } catch (error) {
        console.error(error.message);
      }
    }
fetchUser();


// 3.
// Scrivi un async function che recupera gli utenti, dopo di che un’altra che filtra quelli che
// abitano in una specifica città e ci ritorna un array nuovo. Questo array andrà inserito in una
// tabella
// 1. Recupera tutti gli utenti con fetch.
// 2. Filtra quelli che abitano in una città specifica (es. Gwenborough).
// 3. Mostra il nome e la città di questi utenti nella tabella.
// <table border="1">
// <thead>
// <tr>
// <th>Nome</th>
// <th>Città</th>
// </tr>
// </thead>
// <tbody id="utenti-citta"></tbody>
// </table>

let tavle=document.querySelector('#utenticitta');


async function fetchUserCity() {
    try {
        let response =  await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        let json = await response.json();
        let userCity= json.filter(controlCity)
        
        
        userCity.forEach((el)=>{
            let row=document.createElement('tr');
            let name=document.createElement('td');
            let city=document.createElement('td');
            name.innerText=el.name;
            city.innerText=el.address.city;
            tavle.appendChild(row);
            row.appendChild(name);
            row.appendChild(city);

        })
        
      } catch (error) {
        console.error(error);
      }
    }

    function controlCity(json) {
        return json.address.city=='Gwenborough';
    }

    fetchUserCity()

//     4.
// Crea una pagina con un campo di input per cercare un utente tramite il suo id.
// 1. Mostra i dettagli dell'utente in un div sotto l'input.
// 2. Se l'utente non esiste, mostra un messaggio di errore.
let idUtente=document.querySelector('#nameId');
let pUtente=document.querySelector('#utente');
async function cercaUtente() {
    try {
        let response =  await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        let json = await response.json();
        let utente=json.filter((el)=>el.id==Number(idUtente.value));
        if (utente!=[]) {
            pUtente.innerText=utente.name;
        } else {
            alert('Id non trovato');
        }
      } catch (error) {
        console.error(error.message);
      }
    }
