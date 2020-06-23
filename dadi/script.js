// creare un mini gioco in cui si lanciano due dadi,
// uno per il computer e uno per il giocatore e si determina chi ha vinto.

var btn = document.getElementById('lanciaDado');

btn.addEventListener('click', function() {
  var min = 1;
  var max = 6;
  var dadoUtente = Math.floor(Math.random() * (max - min + 1)) + min;
  var dadoPC = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(dadoUtente);
  console.log(dadoPC);

  var result = document.getElementById('result');
  var resultUtente = document.getElementById('resultUtente');
  var resultPC = document.getElementById('resultPC');

  if (dadoUtente > dadoPC) {
    result.innerHTML = "Hai vinto!";
  } else if (dadoUtente < dadoPC) {
    result.innerHTML = "Mi dispiace, hai perso.";
  } else {
    result.innerHTML = "Pareggio.";
  }

  resultUtente.innerHTML = "E' uscito: " + dadoUtente;
  resultPC.innerHTML = "Al PC è uscito: " + dadoPC;
});
