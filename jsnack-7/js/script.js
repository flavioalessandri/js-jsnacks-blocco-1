


// ESERCIZIO 7 .stampa le potenze di un numero............................................


var btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener("click" , function(){

var i =1;
var num = 2;

while((num**i)<1000){
  document.getElementById("result").innerHTML+="<li>"+(num**i)+"</li>";
  i++;
}

});
