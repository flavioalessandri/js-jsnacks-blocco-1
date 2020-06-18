
// ESERCIZIO 2 .............................................

// definiamo la variabile del bottone
var btn = document.getElementById("btn");

// definire azioni dopo evento azionato da Utente (click del bottone)
btn.addEventListener ("click" , function(){
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;
  // utiliziamo console.log per restituire le due stringhe concatenate
  console.log(nome + " " + cognome);
});
