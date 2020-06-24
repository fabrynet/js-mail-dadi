// creare un mini gioco in cui si lanciano due dadi,
// uno per il computer e uno per il giocatore e si determina chi ha vinto.

var btn = document.getElementById('lanciaDado');


btn.addEventListener('click', function() {

  var dado1 = document.getElementById('imgDado1');
  var dado2 = document.getElementById('imgDado2');
  var dadoUtente = document.getElementById('dadoUtente');
  var dadoCPU = document.getElementById('dadoCPU');
  var dado = [1,2,3,4,5,6];
  var dadiFont = ["fas fa-dice-one","fas fa-dice-two","fas fa-dice-three","fas fa-dice-four","fas fa-dice-five","fas fa-dice-six"];
  var min = 0;
  var max = 5;
  var lancioUtente = Math.floor(Math.random() * (max - min + 1)) + min;
  var lancioPC = Math.floor(Math.random() * (max - min + 1)) + min;
  var resultLancioUtente = dado[lancioUtente];
  var resultLancioPC = dado[lancioPC];

  dadoUtente.className = dadiFont[lancioUtente];
  dadoCPU.className = dadiFont[lancioPC];

  // for (var i = 0; i < dadi.length; i++) {
  //   if (lancioUtente - 1 == i) {
  //     dadoUtente.className = dadi[i];
  //   } else if (lancioPC - 1 == i) {
  //     dadoCPU.className = dadi[i];
  //   }
  // }
  // if (resultLancioUtente == 1) {
  //   dado1.setAttribute('src','img/one.png');
  // } else if (resultLancioUtente == 2) {
  //   dado1.setAttribute('src','img/two.png');
  // } else if (resultLancioUtente == 3) {
  //   dado1.setAttribute('src','img/three.png');
  // } else if (resultLancioUtente == 4) {
  //   dado1.setAttribute('src','img/four.png');
  // } else if (resultLancioUtente == 5) {
  //   dado1.setAttribute('src','img/five.png');
  // } else if (resultLancioUtente == 6) {
  //   dado1.setAttribute('src','img/six.png');
  // }
  //
  // if (resultLancioPC == 1) {
  //   dado2.setAttribute('src','img/one.png');
  // } else if (resultLancioPC == 2) {
  //   dado2.setAttribute('src','img/two.png');
  // } else if (resultLancioPC == 3) {
  //   dado2.setAttribute('src','img/three.png');
  // } else if (resultLancioPC == 4) {
  //   dado2.setAttribute('src','img/four.png');
  // } else if (resultLancioPC == 5) {
  //   dado2.setAttribute('src','img/five.png');
  // } else if (resultLancioPC == 6) {
  //   dado2.setAttribute('src','img/six.png');
  // }


  console.log(resultLancioUtente);
  console.log(resultLancioPC);

  var result = document.getElementById('result');
  var resultUtente = document.getElementById('resultUtente');
  var resultPC = document.getElementById('resultPC');

  if (resultLancioUtente > resultLancioPC) {
    result.innerHTML = "Hai vinto!";
    result.className = 'show';
  } else if (resultLancioUtente < resultLancioPC) {
    result.innerHTML = "Mi dispiace, hai perso.";
    result.className = 'show';
  } else {
    result.innerHTML = "Pareggio.";
    result.className = 'show';
  }

  resultUtente.innerHTML = "E' uscito: " + resultLancioUtente;
  resultUtente.className = 'show';
  resultPC.innerHTML = "Al PC è uscito: " + resultLancioPC;
  resultPC.className = 'show';
});
