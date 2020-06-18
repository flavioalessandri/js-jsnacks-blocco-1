
// ESERCIZIO 5 .............................................


var btnLanciaMoneta = document.getElementById("lanciaMoneta");
document.getElementById("moneta").classList.add="hidden";


btnLanciaMoneta.addEventListener ("click" , function(){

  document.getElementById("moneta").classList.add="show";
  document.getElementById("moneta").classList.remove="hidden";

  var random;
  var moneta;
  var min= 0;
  var max= 9;
  random = Math.floor(Math.random()*(max - min + 1))+min;
  console.log(random);

  if(!(random % 2)) {
    console.log( random + " Pari");
    document.getElementById("testa").className="show";
    document.getElementById("croce").className="hidden";
    document.getElementById("risultato").innerHTML="Il numero generato '" + random + "' Ha dato Testa!";


  } else {
    console.log( random + " Dispari");
    document.getElementById("croce").className="show";
    document.getElementById("testa").className="hidden";
    document.getElementById("risultato").innerHTML="Il numero generato '" + random + "' Ha dato Croce!";
  }
});
