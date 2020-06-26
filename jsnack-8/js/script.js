// ESERCIZIO 8 .Digita un numero di X cifre e riporta la somma delle sue cifre..........................................

var btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener("click" , function(){

var userNum = document.getElementById("userNum").value;
console.log(userNum);

var sum =0;

for(i=0; i<userNum.length ; i++){
sum += parseInt(userNum[i]);
}

document.getElementById("result").innerHTML= "La somma delle cifre del numero digitato è: " +sum ;

});
