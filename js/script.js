// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto
// precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti
// e quali dei numeri da indovinare sono stati individuati.


$(document).ready(
  function() {
    var arrayNumeriRandom = generaNumeriRandom(1, 6, 5);
    console.log(arrayNumeriRandom);
    alert('I numeri da ricordare sono :\n' + arrayNumeriRandom + '\nDopo 30 secondi da quando clicchi su OK me li dovrai dire.\nBuona fortuna !');
    setTimeout(function() {
      var userNumber = chiediNumeroUtente(5);
      console.log(userNumber);
      var numeriVincenti = confrontaArray(arrayNumeriRandom, userNumber);
      console.log(numeriVincenti);
      if (numeriVincenti == '') {
        console.log('Non hai indovinato nessun numero');
      } else {
        console.log('Hai indovinato i numeri ' + numeriVincenti);
      }
    }, 5000);
  }
);

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

function chiediNumeroUtente(quantitaNumeri) {
  var arrayNumeriUtente = [];
  var i = 0;
  while (i < quantitaNumeri) {
    var number = parseInt(prompt('Inserisci il numero'));
    if (!arrayNumeriUtente.includes(number)) {
      arrayNumeriUtente.push(number);
      i++;
    }
  }
  return arrayNumeriUtente;
}

function confrontaArray(arrayUno, arrayDue) {
  var arrayValoriComuni = [];
  var numeroDaControllareUno;
  var numeroDaControllareDue;
  for (var i = 0; i < arrayUno.length; i++) {
    numeroDaControllareUno = arrayUno[i];
    for (var j = 0; j < arrayDue.length; j++) {
      numeroDaControllareDue = arrayDue[i];
    }
    if (numeroDaControllareUno === numeroDaControllareDue) {
      arrayValoriComuni.push(numeroDaControllareUno);
    }
  }
  return arrayValoriComuni;
}
