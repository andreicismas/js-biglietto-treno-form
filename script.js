
var buttonGenera = document.getElementById('btn_js_script');
buttonGenera.addEventListener('click',
    function () {

        var show = document.getElementById("show_container");
        show.style.opacity = "1"

        var nomeInput = document.getElementById('nome');
        var nome = nomeInput.value;


        var kmInput = document.getElementById('distanza_km');
        var numeroChilometri = parseInt(kmInput.value);


        var etaFascia = document.getElementById('fascia_eta');
        var fascia = etaFascia.value;


        var costoChilometro = 0.21;
        var costoViaggio = numeroChilometri * costoChilometro;


        var offerta = 'Tariffa standard';

        var costoFinale;

        if (fascia == "minorenne") {
            costoFinale = (costoViaggio / 100) * 80;
            offerta = "Sconto Minorenne";
        } else if (fascia == "Over65") {
            costoFinale = (costoViaggio / 100) * 60;
            offerta = "Sconto maggiorenne";
        } else {
            costoFinale = costoViaggio
        }

        console.log(fascia)
        console.log(costoViaggio)
        console.log(costoFinale)



        var carrozza = Math.floor(Math.random() * 9) + 1;
        var codice = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000;


        document.getElementById('nome_passeggero').innerHTML = nome;
        document.getElementById('offerta').innerHTML = offerta;
        document.getElementById('carrozza').innerHTML = carrozza;
        document.getElementById('codice').innerHTML = codice;
        document.getElementById('costo').innerHTML = costoFinale.toFixed(2) + " €";

    });


var btnAnnulla = document.getElementById('cancel_ticket');
btnAnnulla.addEventListener('click',
    function () {

        var show = document.getElementById("show_container");
        show.style.opacity = "0 "
         

     
        var nomeInput = document.getElementById('nome').value ="";
        var kmInput = document.getElementById('distanza_km').value ="";
        var etaFascia = document.getElementById('fascia_eta').value ="";

    }
);

