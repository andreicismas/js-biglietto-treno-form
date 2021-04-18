
var buttonGenera = document.getElementById('btn_js_script');
buttonGenera.addEventListener('click',
function() {
  var nomeInput = document.getElementById('nome');
  var nome = nomeInput.value;


  var kmInput = document.getElementById('distanza_km');
  var numeroChilometri = kmInput.value;


  var etaFascia = document.getElementById('fascia_eta');
  var fascia = etaFascia.value;


  var costoChilometro = 0.21;
  var costoViaggio = numeroChilometri * costoChilometro;


  var offerta = 'Tariffa standard';
  var scontoPercentuale = 0;

 

  var calcoloSconto = costoViaggio * scontoPercentuale / 100;
  var costoFinale = costoViaggio - calcoloSconto;

  var carrozza = Math.floor(Math.random() * 9) + 1;
  var codice = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;

  document.getElementById('nome_passeggero').innerHTML = nome;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('codice').innerHTML = codice;
  document.getElementById('costo').innerHTML = costoFinale.toFixed(2) + " €";


});



