// ESERCIZIO 9 .Calcola la somma e la media dei dici numeri dati............

var btn = document.getElementById("btnCalc");

btn.addEventListener("click", function(){

var lista = [];
var sum =0;
var i=0;

 while (i<10) {
   var numero = prompt("numero:");
   sum += (parseInt(numero));
   document.getElementById("sum").innerHTML = "La somma dei numeri dati è: " + sum;
   average = sum/4;
   document.getElementById("average").innerHTML = "La media dei numeri dati è: " + average;

   i++;

 }

});
