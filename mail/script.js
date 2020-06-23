// far inserire all'utente una mail e controllare se è nell'array,
// che contiene quelle valide. Dare all'utente un messaggio opportuno.
var btn = document.getElementById('btn');
var emailUtente = document.getElementById('emailUtente');
var result = document.getElementById('result');
var email = ['primaemail@gmail.com','secondaemail@gmail.com','terzaemailgmail.com','ciao@gmail.com', 24, 36];

btn.addEventListener('click', function() {
  var emailTrovata = false;
  for (var i = 0; i < email.length; i++) {
    console.log(i);
    if (emailUtente.value == email[i]) {
      emailTrovata = true;
    }
  }
  if (emailTrovata) {
    result.innerHTML = "L'email che hai inserito è presente nell'array!";
  }
  else {
    result.innerHTML = "L'email che hai inserito non è presente nell'array.";
  }
});
