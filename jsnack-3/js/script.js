
// ESERCIZIO 3 .............................................

var btn = document.getElementById("btnB");

btnB.addEventListener ("click" , function(){

  var numero = prompt("Digita un numero");

  if(!isNaN(numero)) {
    numero = parseInt(numero);

//utilizzare className così da riscrivere classe e non aggiungerne una nuova
    if(numero > 0){
      document.getElementById("colore").innerHTML =numero;
      document.getElementById("colore").className ="green";

    } else if (numero < 0){
      document.getElementById("colore").innerHTML =numero;
      document.getElementById("colore").className = "red";

    } else{
      document.getElementById("colore").innerHTML =numero;
      document.getElementById("colore").className = "blue";
    }
  }
});
