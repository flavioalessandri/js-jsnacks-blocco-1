
// ESERCIZIO 4 .............................................

var btnRandom = document.getElementById("btnRandom");

btnRandom.addEventListener ("click" , function(){

  var max=10;
  var min = 1;
  var numero = Math.floor(Math.random()*(max-min) +1)+min;
  console.log(numero);
  var elem = document.getElementById("numero");
  elem.classList.add("pari" , "dispari");

  if(!(numero % 2)) {
    elem.classList.remove("dispari");
    document.getElementById("numero").innerHTML = "Numero " + numero + " Pari";

  } else{
      elem.classList.remove("pari");
      document.getElementById("numero").innerHTML = "Numero " + numero +" Dispari";
  }
});
