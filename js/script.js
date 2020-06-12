// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto
// precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti
// e quali dei numeri da indovinare sono stati individuati.


$(document).ready(
  function() {
    // Genero i numeri random da mostrare nell'alert
    var arrayNumeriRandom = generaNumeriRandom(1, 15, 5);
    alert('I numeri da ricordare sono :\n' + arrayNumeriRandom + '\nDopo 30 secondi da quando clicchi su OK me li dovrai dire.\nBuona fortuna !');

    // Creo la funzione anonima che partirà 30 secondi dopo la chiusura dell'alert
    setTimeout(function() {
      // Creo l'array dove inserirò i numeri indovinati
      var numeriIndovinati = [];

      // Chiedo all'utente i numeri, controllo se sono presenti nell'array dei numeri random ed eventualmente li inserisco nell'array dei numeri indovinati
      for (var i = 0; i < arrayNumeriRandom.length; i++) {
        var userNumber = parseInt(prompt('Inserisci il numero'));
        if (arrayNumeriRandom.includes(userNumber)) {
          numeriIndovinati.push(userNumber);
        }
      }

      // Controllo se sono stati indovinati i numeri e lo comunico all'utente, eventualmente comunico anche quanti e quali numeri ha indovinato
      if (numeriIndovinati == '') {
        console.log('Non hai indovinato nessun numero');
      } else {
        console.log('Hai indovinato ' + numeriIndovinati.length + ' numeri. I numeri indovinati sono : ' +  numeriIndovinati);
      }
    }, 30000);
  }
);

// ************************  FUNZIONI  *********************** //

// Funzione che genera numeri casuali.
// Richiede come argomenti il numero minimo del range, il numero massimo del range e la quantità dei numeri da creare.
// Ritorna l'array con i numeri random.

function generaNumeriRandom(rangeMin, rangeMax, quantitaNumeri) {
  var arrayNumeriCasuali = [];
  var i = 0;
  while (i < quantitaNumeri) {
    var number = Math.floor(Math.random() * (rangeMax - rangeMin + 1) ) + rangeMin;
    if (!arrayNumeriCasuali.includes(number)) {
      arrayNumeriCasuali.push(number);
      i++;
    }
  }
return arrayNumeriCasuali;
}
